'use client';

import Link from 'next/link';
import { useI18n } from '@/app/providers';
import { NAME, SOCIALS } from '@/lib/constants';

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-default">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center lg:px-8">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-accent-grad text-[10px] font-bold text-white">
            JC
          </span>
          <div>
            <div className="text-sm font-medium">{NAME}</div>
            <div className="text-xs text-muted">{t('footer.made')}</div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-xs text-muted">
          <Link href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-accent transition">
            LinkedIn
          </Link>
          <Link href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-accent transition">
            GitHub
          </Link>
          <Link href={SOCIALS.malt} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-accent transition">
            Malt
          </Link>
          <Link href={SOCIALS.codepen} target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-accent transition">
            CodePen
          </Link>
          <span className="text-muted/70">© {year} — {t('footer.rights')}</span>
        </div>
      </div>
    </footer>
  );
}
