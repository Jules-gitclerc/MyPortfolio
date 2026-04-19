'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useI18n } from '@/app/providers';
import { ThemeToggle } from './ui/theme-toggle';
import { LangToggle } from './ui/lang-toggle';
import { SOCIALS, NAME } from '@/lib/constants';

const anchors = [
  { id: 'work', key: 'nav.work' },
  { id: 'services', key: 'nav.services' },
  { id: 'stack', key: 'nav.stack' },
  { id: 'about', key: 'nav.about' },
  { id: 'contact', key: 'nav.contact' },
];

export function Nav() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          scrolled ? 'py-2' : 'py-4'
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div
            className={cn(
              'flex items-center justify-between rounded-full border border-default/70 px-3 py-2 transition-all duration-500',
              scrolled ? 'glass shadow-[0_8px_32px_-12px_rgb(0_0_0/0.25)]' : 'bg-transparent border-transparent'
            )}
          >
            <Link href="#top" className="group flex items-center gap-2 pl-2 font-display text-sm font-semibold tracking-tight">
              <span className="relative grid h-7 w-7 place-items-center rounded-full bg-accent-grad text-white shadow-lg shadow-accent/30">
                <span className="text-[10px] font-bold">JC</span>
              </span>
              <span className="hidden sm:inline">{NAME}</span>
            </Link>

            <nav className="hidden items-center gap-1 md:flex">
              {anchors.map((a) => (
                <Link
                  key={a.id}
                  href={`#${a.id}`}
                  className="rounded-full px-3 py-1.5 text-sm text-muted transition hover:bg-surface hover:text-current"
                >
                  {t(a.key)}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Link
                href={SOCIALS.resume}
                target="_blank"
                className="hidden items-center gap-1.5 rounded-full border border-default bg-surface/70 px-3 py-1.5 text-xs font-medium text-muted backdrop-blur-sm transition hover:border-accent/50 hover:text-accent md:inline-flex"
              >
                <FileText size={14} />
                {t('nav.resume')}
              </Link>
              <LangToggle />
              <ThemeToggle />
              <button
                type="button"
                aria-label="Menu"
                onClick={() => setOpen(true)}
                className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-default bg-surface/70 backdrop-blur-sm md:hidden"
              >
                <Menu size={16} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-60 md:hidden"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex h-full flex-col bg-surface p-6"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-semibold">{NAME}</span>
                <button
                  type="button"
                  aria-label="Close"
                  onClick={() => setOpen(false)}
                  className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-default"
                >
                  <X size={16} />
                </button>
              </div>
              <nav className="mt-10 flex flex-col gap-1">
                {anchors.map((a, i) => (
                  <motion.div
                    key={a.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.05 }}
                  >
                    <Link
                      href={`#${a.id}`}
                      onClick={() => setOpen(false)}
                      className="block border-b border-default py-4 font-display text-2xl font-semibold tracking-tight"
                    >
                      {t(a.key)}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto flex items-center justify-between pt-8">
                <Link
                  href={SOCIALS.resume}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border border-default px-4 py-2 text-sm"
                >
                  <FileText size={14} />
                  {t('nav.resume')}
                </Link>
                <div className="flex items-center gap-2">
                  <LangToggle />
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
