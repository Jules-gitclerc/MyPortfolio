'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowDown, Github, Linkedin, Codepen } from 'lucide-react';
import { Aurora } from './ui/aurora';
import { LinkButton } from './ui/button';
import { Magnetic } from './ui/magnetic';
import { useI18n } from '@/app/providers';
import { SOCIALS, NAME, ROLE } from '@/lib/constants';

const lineVariants = {
  hidden: { y: '110%' },
  visible: (i: number) => ({
    y: 0,
    transition: { duration: 0.9, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Hero() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 sm:pt-28"
    >
      <Aurora />

      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-slate bg-[size:64px_64px] opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] dark:opacity-[0.08]" />

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-default bg-surface/60 px-3 py-1.5 text-xs font-medium backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {t('hero.badge')}
        </motion.div>

        {/* Title */}
        <h1 className="mt-8 font-display text-display-xl font-semibold leading-[0.95] tracking-tight">
          {(['hero.titleLine1', 'hero.titleLine2', 'hero.titleLine3'] as const).map((k, i) => (
            <span key={k} className="block overflow-hidden">
              <motion.span
                custom={i}
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                className={
                  i === 1 ? 'inline-block text-gradient animate-gradient' : 'inline-block'
                }
              >
                {t(k)}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Magnetic>
            <LinkButton href="#contact" showArrow>
              {t('hero.cta')}
            </LinkButton>
          </Magnetic>
          <Magnetic>
            <LinkButton href={SOCIALS.resume} target="_blank" variant="secondary">
              {t('hero.secondary')}
            </LinkButton>
          </Magnetic>
        </motion.div>

        {/* Bottom row: meta + socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 flex flex-col justify-between gap-6 border-t border-default pt-6 sm:flex-row sm:items-end"
        >
          <div className="flex items-center gap-6">
            <div>
              <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                {NAME}
              </div>
              <div className="mt-1 text-sm">{ROLE}</div>
            </div>
          </div>
          <div className="flex items-center gap-4 text-muted">
            <span className="text-[11px] font-medium uppercase tracking-[0.18em]">
              {t('hero.scroll')}
            </span>
            <Link
              href={SOCIALS.linkedin}
              target="_blank"
              aria-label="LinkedIn"
              className="transition hover:text-accent"
            >
              <Linkedin size={18} />
            </Link>
            <Link
              href={SOCIALS.github}
              target="_blank"
              aria-label="GitHub"
              className="transition hover:text-accent"
            >
              <Github size={18} />
            </Link>
            <Link
              href={SOCIALS.codepen}
              target="_blank"
              aria-label="CodePen"
              className="transition hover:text-accent"
            >
              <Codepen size={18} />
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="pointer-events-none absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted"
      >
        <ArrowDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
