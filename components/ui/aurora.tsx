import { cn } from '@/lib/utils';

export function Aurora({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]',
        className
      )}
    >
      <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-accent/40 blur-3xl animate-aurora-1 opacity-70" />
      <div className="absolute top-40 -right-20 h-[32rem] w-[32rem] rounded-full bg-accent-hot/35 blur-3xl animate-aurora-2 opacity-70" />
      <div className="absolute top-[55%] -left-20 h-[30rem] w-[30rem] rounded-full bg-sky-500/25 blur-3xl animate-aurora-3 opacity-60 dark:bg-indigo-500/30" />
    </div>
  );
}
