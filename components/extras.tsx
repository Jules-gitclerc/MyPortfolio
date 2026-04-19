'use client';

import { motion } from 'framer-motion';
import { Globe, Heart } from 'lucide-react';
import { Section } from './ui/section';
import { useI18n } from '@/app/providers';

type Language = { name: string; level: string };

export function Extras() {
  const { t } = useI18n();
  const languages = t<Language[]>('extras.languages');
  const interests = t<string[]>('extras.interests');

  return (
    <Section id="extras" kicker={t('extras.kicker')} title={t('extras.title')} tone="surface">
      <div className="grid gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.16em] text-muted">
            <Globe size={16} className="text-accent" />
            {t('extras.languagesLabel')}
          </div>
          <ul className="mt-4 space-y-3">
            {languages.map((lang) => (
              <li
                key={lang.name}
                className="flex items-center justify-between rounded-2xl border border-default bg-surface/50 px-5 py-4 backdrop-blur-sm"
              >
                <span className="font-display text-lg font-medium tracking-tight">{lang.name}</span>
                <span className="text-sm text-muted">{lang.level}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.16em] text-muted">
            <Heart size={16} className="text-accent" />
            {t('extras.interestsLabel')}
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full border border-default bg-surface/50 px-4 py-2.5 text-sm backdrop-blur-sm transition hover:border-accent/40"
              >
                {interest}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
