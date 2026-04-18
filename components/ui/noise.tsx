import { cn } from '@/lib/utils';

export function Noise({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none fixed inset-0 z-[1] noise-overlay opacity-[0.08] dark:opacity-[0.12]',
        className
      )}
    />
  );
}
