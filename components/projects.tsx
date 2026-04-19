'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Section } from './ui/section';
import { useI18n } from '@/app/providers';
import { EASE_OUT_EXPO } from '@/lib/motion';

type Project = {
  title: string;
  desc: string;
  image: string;
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
            transition={{ duration: 0.7, delay: i * 0.08, ease: EASE_OUT_EXPO }}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-default bg-surface transition hover:border-accent/40"
          >
            <Link
              href={p.live}
              target="_blank"
              className="relative aspect-[16/10] overflow-hidden"
            >
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-black opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                <ArrowUpRight size={16} />
              </div>
            </Link>

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
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
