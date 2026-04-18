'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Code2, Palette, Gauge } from 'lucide-react';
import { useRef } from 'react';
import { Section } from './ui/section';
import { useI18n } from '@/app/providers';

type Service = { title: string; desc: string; tags: string[] };

const icons = [Code2, Palette, Gauge];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = icons[index] ?? Code2;
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 180, damping: 18 });
  const sry = useSpring(ry, { stiffness: 180, damping: 18 });
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const bg = useTransform([gx, gy], ([x, y]) =>
    `radial-gradient(400px circle at ${x}% ${y}%, rgb(var(--accent) / 0.18), transparent 40%)`
  );

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;
    ry.set((px - 0.5) * 10);
    rx.set((0.5 - py) * 10);
    gx.set(px * 100);
    gy.set(py * 100);
  }

  function onLeave() {
    rx.set(0);
    ry.set(0);
    gx.set(50);
    gy.set(50);
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 1000 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-default bg-surface/60 p-8 backdrop-blur will-change-transform"
    >
      <motion.div style={{ background: bg }} aria-hidden className="pointer-events-none absolute inset-0" />
      <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-default bg-surface text-accent">
          <Icon size={22} strokeWidth={1.8} />
        </div>
        <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{service.desc}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-default bg-surface/50 px-2.5 py-1 text-xs text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mt-8 pt-6">
        <div className="absolute inset-x-0 top-0 h-px bg-default" />
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-muted">
          <span className="font-mono">0{index + 1}</span>
          <span className="h-px flex-1 bg-default" />
          <span className="text-accent opacity-0 transition-opacity group-hover:opacity-100">
            →
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export function Services() {
  const { t } = useI18n();
  const items = t<Service[]>('services.items');

  return (
    <Section id="services" kicker={t('services.kicker')} title={t('services.title')}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((s, i) => (
          <ServiceCard key={s.title} service={s} index={i} />
        ))}
      </div>
    </Section>
  );
}
