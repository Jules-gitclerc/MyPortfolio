'use client';

import Image from 'next/image';
import { Section } from './ui/section';
import { useI18n } from '@/app/providers';

const stack = [
  { name: 'Next.js', src: '/nextjs-white-logo.png', darkSrc: '/nextjs-white-logo.png', lightSrc: '/nextjs-dark-logo.png' },
  { name: 'React', src: '/react-logo.png' },
  { name: 'TypeScript', src: '/typescript-logo.png' },
  { name: 'Tailwind', src: '/tailwind-logo.png' },
];

// We duplicate for an infinite marquee. Labels used if no logo asset exists.
const extras = ['Framer Motion', 'Node.js', 'Figma', 'Vercel', 'Git', 'REST', 'GraphQL'];

export function Stack() {
  const { t } = useI18n();

  const row = (
    <div className="marquee-track flex shrink-0 items-center gap-14 px-7 animate-marquee">
      {stack.map((s) => (
        <div key={s.name} className="flex items-center gap-3 text-muted">
          <div className="relative h-8 w-8 shrink-0">
            <Image src={s.src} alt={s.name} fill className="object-contain hidden dark:block" sizes="32px" />
            <Image
              src={s.lightSrc ?? s.src}
              alt={s.name}
              fill
              className="object-contain block dark:hidden"
              sizes="32px"
            />
          </div>
          <span className="font-display text-2xl font-medium text-current sm:text-3xl">{s.name}</span>
        </div>
      ))}
      {extras.map((e) => (
        <div key={e} className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-grad" />
          <span className="font-display text-2xl font-medium text-muted sm:text-3xl">{e}</span>
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
