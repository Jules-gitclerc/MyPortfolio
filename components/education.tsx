'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { Section } from './ui/section';
import { useI18n } from '@/app/providers';

type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  location: string;
};

export function Education() {
  const { t } = useI18n();
  const items = t<EducationItem[]>('education.items');

  return (
    <Section id="education" kicker={t('education.kicker')} title={t('education.title')}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <motion.div
            key={item.institution}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden rounded-2xl border border-default bg-surface/50 p-6 backdrop-blur"
          >
            <span className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="flex items-center gap-3 text-sm text-muted">
              <GraduationCap size={16} className="text-accent" />
              {item.period}
            </div>
            <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">
              {item.institution}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.degree}</p>
            <div className="mt-4 flex items-center gap-1.5 text-xs text-muted">
              <MapPin size={12} />
              {item.location}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
