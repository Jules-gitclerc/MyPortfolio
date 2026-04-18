'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const active = (mounted ? resolvedTheme ?? theme : 'dark') === 'dark';

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(active ? 'light' : 'dark')}
      className="group relative grid h-9 w-9 place-items-center rounded-full border border-default bg-surface/70 backdrop-blur transition hover:border-accent/50 hover:text-accent"
    >
      <Sun
        size={16}
        className={`absolute transition-all duration-500 ${
          active ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
        }`}
      />
      <Moon
        size={16}
        className={`absolute transition-all duration-500 ${
          active ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
        }`}
      />
    </button>
  );
}
