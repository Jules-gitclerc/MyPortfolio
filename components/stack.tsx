'use client';

import { Section } from './ui/section';
import { useI18n } from '@/app/providers';

const primary = [
  'Flutter',
  'Dart',
  'Java',
  'Spring Boot',
  'Node.js',
  'TypeScript',
  'PostgreSQL',
  'MongoDB',
  'Firebase',
  'Docker',
  'Git',
  'Figma',
  'REST',
  'GraphQL',
];

export function Stack() {
  const { t } = useI18n();

  const row = (
    <div className="marquee-track flex shrink-0 items-center gap-14 px-7 animate-marquee">
      {primary.map((name) => (
        <div key={name} className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-grad" />
          <span className="font-display text-2xl font-medium text-muted transition-colors hover:text-current sm:text-3xl">
            {name}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <Section id="stack" kicker={t('stack.kicker')} title={t('stack.title')}>
      <div className="relative -mx-6 overflow-hidden mask-fade-x lg:-mx-8">
        <div className="flex w-max items-center">
          {row}
          {row}
        </div>
      </div>
    </Section>
  );
}
