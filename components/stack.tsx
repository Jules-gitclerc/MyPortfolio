'use client';

import { Section } from './ui/section';
import { useI18n } from '@/app/providers';
import { techStack } from '@/lib/tech-icons';

function TechIcon({ slug, color, name }: { slug: string | null; color: string; name: string }) {
  if (!slug) {
    return (
      <span
        className="grid h-7 w-7 shrink-0 place-items-center rounded-lg text-[10px] font-bold text-white"
        style={{ backgroundColor: color }}
      >
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.simpleicons.org/${slug}/${color.replace('#', '')}`}
      alt={name}
      width={22}
      height={22}
      loading="lazy"
      className="shrink-0"
    />
  );
}

export function Stack() {
  const { t } = useI18n();

  const row = (
    <div className="marquee-track flex shrink-0 items-center gap-14 px-7 animate-marquee">
      {techStack.map(({ name, slug, color }) => (
        <div key={name} className="flex items-center gap-3">
          <TechIcon slug={slug} color={color} name={name} />
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
