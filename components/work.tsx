'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Section } from './ui/section';
import { useI18n } from '@/app/providers';

type WorkItem = {
  tag: string;
  role: string;
  title: string;
  body: string;
  points: string[];
  stack: string[];
};

export function Work() {
  const { t } = useI18n();
  const items = t<WorkItem[]>('work.items');

  return (
    <Section
      id="work"
      kicker={t('work.kicker')}
      title={t('work.title')}
      description={t('work.description')}
    >
      <div className="space-y-8">
        {items.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-3xl border border-default bg-surface/60 p-8 backdrop-blur-sm sm:p-12"
          >
            {/* gradient border glow */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            />

            <div className="relative grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-default px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-grad" />
                  {item.tag}
                </div>
                <div className="mt-5 text-sm text-muted">{item.role}</div>
                <h3 className="mt-2 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                  {item.title}
                </h3>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {item.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-default bg-surface/50 px-2.5 py-1 text-xs text-muted"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-8">
                <p className="text-base leading-relaxed text-muted sm:text-lg">{item.body}</p>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                  {item.points.map((p) => (
                    <li
                      key={p}
                      className="group/item flex items-start gap-3 rounded-2xl border border-default/60 bg-surface/40 p-4 transition hover:border-accent/40"
                    >
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent-grad text-white">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="text-sm leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* project number */}
            <span className="pointer-events-none absolute right-8 top-8 font-mono text-xs text-muted">
              {String(i + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
            </span>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
