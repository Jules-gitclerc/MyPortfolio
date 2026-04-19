'use client';

import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { Github, Linkedin, Codepen } from './ui/brand-icons';
import { Aurora } from './ui/aurora';
import { LinkButton } from './ui/button';
import { Magnetic } from './ui/magnetic';
import { useI18n } from '@/app/providers';
import { SOCIALS, NAME, ROLE } from '@/lib/constants';

const lineVariants = {
  hidden: { y: '110%', rotateX: 40 },
  visible: (i: number) => ({
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 14,
      delay: 0.25 + i * 0.12,
    },
  }),
};

const socialLinks = [
  { label: 'LinkedIn', href: SOCIALS.linkedin, Icon: Linkedin },
  { label: 'GitHub', href: SOCIALS.github, Icon: Github },
  { label: 'CodePen', href: SOCIALS.codepen, Icon: Codepen },
];

export function Hero() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  const contentX = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const contentY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);
  const auroraX = useTransform(smoothX, [-0.5, 0.5], [20, -20]);
  const auroraY = useTransform(smoothY, [-0.5, 0.5], [15, -15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width - 0.5);
    mouseY.set((e.clientY - top) / height - 0.5);
  };

  return (
    <section
      ref={ref}
      id="top"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-svh items-center overflow-hidden pt-24 sm:pt-28"
    >
      <motion.div style={{ x: auroraX, y: auroraY }}>
        <Aurora />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-grid-slate bg-size-[64px_64px] opacity-[0.15] mask-[radial-gradient(ellipse_at_center,black,transparent_70%)] dark:opacity-[0.08]" />

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
      <motion.div style={{ x: contentX, y: contentY }}>
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-default bg-surface/60 px-3 py-1.5 text-xs font-medium backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          {t('hero.badge')}
        </motion.div>

        <h1 className="mt-8 font-display text-display-xl font-semibold leading-[0.95] tracking-tight [perspective:800px]">
          {(['hero.titleLine1', 'hero.titleLine2', 'hero.titleLine3'] as const).map((k, i) => (
            <span key={k} className="block overflow-hidden">
              <motion.span
                custom={i}
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                className={
                  i === 1 ? 'inline-block text-gradient animate-gradient origin-bottom' : 'inline-block origin-bottom'
                }
              >
                {t(k)}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-20 flex flex-col justify-between gap-6 border-t border-default pt-6 sm:flex-row sm:items-end"
        >
          <div>
            <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
              {NAME}
            </div>
            <div className="mt-1 text-sm">{ROLE}</div>
          </div>
          <div className="flex items-center gap-4 text-muted">
            <span className="text-[11px] font-medium uppercase tracking-[0.18em]">
              {t('hero.scroll')}
            </span>
            {socialLinks.map(({ label, href, Icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="cursor-pointer transition hover:text-accent"
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="pointer-events-none absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted"
      >
        <ArrowDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
