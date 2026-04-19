'use client';

import { useI18n } from '@/app/providers';
import { cn } from '@/lib/utils';

export function LangToggle() {
  const { locale, setLocale } = useI18n();

  return (
    <div
      role="group"
      aria-label="Language"
      className="relative flex h-9 items-center rounded-full border border-default bg-surface/70 p-0.5 text-xs font-medium backdrop-blur-sm"
    >
      <button
        type="button"
        onClick={() => setLocale('en')}
        className={cn(
          'relative z-10 flex h-8 w-9 items-center justify-center rounded-full transition',
          locale === 'en' ? 'text-white' : 'text-muted hover:text-current'
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale('fr')}
        className={cn(
          'relative z-10 flex h-8 w-9 items-center justify-center rounded-full transition',
          locale === 'fr' ? 'text-white' : 'text-muted hover:text-current'
        )}
      >
        FR
      </button>
      <span
        aria-hidden
        className={cn(
          'absolute top-0.5 h-8 w-9 rounded-full bg-accent-grad transition-all duration-500',
          locale === 'en' ? 'left-0.5' : 'left-[calc(50%-0.125rem)]'
        )}
      />
    </div>
  );
}
