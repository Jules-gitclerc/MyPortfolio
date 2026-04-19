'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Section } from './ui/section';
import { AnimatedCounter } from './ui/animated-counter';
import { useI18n } from '@/app/providers';
import { GitHubStats } from './github-stats';

type Stat = { k: string; v: string };

export function About() {
  const { t } = useI18n();
  const stats = t<Stat[]>('about.stats');

  return (
    <Section id="about" kicker={t('about.kicker')} title={t('about.title')}>
      <div className="grid gap-14 lg:grid-cols-12 lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <div className="relative mx-auto aspect-4/5 w-full max-w-sm">
            <div className="absolute -inset-2 rounded-4xl bg-accent-grad opacity-40 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-default/80 bg-surface">
              <Image
                src="/picture-profile.png"
                alt="Jules Clerc"
                fill
                sizes="(max-width: 768px) 80vw, 400px"
                className="object-cover"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs text-white backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {t('about.status')}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-7 lg:pl-6">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg leading-relaxed text-muted sm:text-xl"
          >
            {t('about.body')}
          </motion.p>

          <dl className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.v}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-default bg-surface/50 p-5 backdrop-blur-sm"
              >
                <span className="absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <dt className="font-display text-3xl font-semibold tracking-tight">
                  <span className="text-gradient"><AnimatedCounter text={s.k} /></span>
                </dt>
                <dd className="mt-2 text-sm text-muted">{s.v}</dd>
              </motion.div>
            ))}
          </dl>

          <GitHubStats />
        </div>
      </div>
    </Section>
  );
}
