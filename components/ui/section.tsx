'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { type ReactNode } from 'react';

type Props = {
  id?: string;
  kicker?: string;
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
  tone?: 'default' | 'surface';
};

export function Section({
  id,
  kicker,
  title,
  description,
  children,
  className,
  tone = 'default',
}: Props) {
  return (
    <section
      id={id}
      className={cn(
        'relative py-24 sm:py-32 scroll-mt-24',
        tone === 'surface' && 'bg-surface',
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {(kicker || title) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14 max-w-3xl"
          >
            {kicker && (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-default px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-grad" />
                {kicker}
              </div>
            )}
            {title && (
              <h2 className="font-display text-display-md font-semibold tracking-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-5 max-w-2xl text-base text-muted sm:text-lg">{description}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
