'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

type BaseProps = {
  variant?: Variant;
  icon?: ReactNode;
  showArrow?: boolean;
  children: ReactNode;
  className?: string;
};

const variants: Record<Variant, string> = {
  primary:
    'group relative overflow-hidden bg-accent-grad text-white shadow-[0_10px_30px_-10px_rgb(var(--accent)/0.55)] hover:shadow-[0_18px_44px_-12px_rgb(var(--accent)/0.7)]',
  secondary:
    'border border-default bg-surface/70 backdrop-blur-sm hover:border-accent/50 hover:text-accent',
  ghost: 'hover:text-accent',
};

const baseClass =
  'inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium tracking-tight transition-all duration-300';

type LinkButtonProps = BaseProps & ComponentPropsWithoutRef<typeof Link>;

export function LinkButton({
  variant = 'primary',
  icon,
  showArrow,
  children,
  className,
  ...props
}: LinkButtonProps) {
  return (
    <Link className={cn(baseClass, variants[variant], className)} {...props}>
      {icon}
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight
          size={16}
          className="translate-x-0 translate-y-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
      {variant === 'primary' && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        />
      )}
    </Link>
  );
}

type ButtonProps = BaseProps & ComponentPropsWithoutRef<'button'>;

export function Button({
  variant = 'primary',
  icon,
  showArrow,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(baseClass, variants[variant], className)} {...props}>
      {icon}
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
      {variant === 'primary' && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        />
      )}
    </button>
  );
}
