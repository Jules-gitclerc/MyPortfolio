'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Section } from './ui/section';
import { useI18n } from '@/app/providers';

type Project = {
  title: string;
  desc: string;
  live: string;
  tags: string[];
};

export function Projects() {
  const { t } = useI18n();
  const items = t<Project[]>('projects.items');

  return (
    <Section id="projects" kicker={t('projects.kicker')} title={t('projects.title')} tone="surface">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-default bg-surface transition hover:border-accent/40"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            />

            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                {p.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-default px-2.5 py-1 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 border-t border-default pt-5">
                <Link
                  href={p.live}
                  target="_blank"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                >
                  Visit <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
