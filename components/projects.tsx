'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code2 } from 'lucide-react';
import { Section } from './ui/section';
import { useI18n } from '@/app/providers';

type Project = {
  title: string;
  desc: string;
  image: string;
  live: string;
  code: string;
  tags: string[];
};

export function Projects() {
  const { t } = useI18n();
  const items = t<Project[]>('projects.items');

  return (
    <Section id="projects" kicker={t('projects.kicker')} title={t('projects.title')} tone="surface">
      <div className="grid gap-8 md:grid-cols-2">
        {items.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-default bg-surface"
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
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-black opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                <ArrowUpRight size={16} />
              </div>
            </Link>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                  {p.title}
                </h3>
              </div>
              <p className="mt-2 text-sm text-muted">{p.desc}</p>
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
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-default">
                <Link
                  href={p.live}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                >
                  Live <ArrowUpRight size={14} />
                </Link>
                <Link
                  href={p.code}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-current"
                >
                  <Code2 size={14} /> Code
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
