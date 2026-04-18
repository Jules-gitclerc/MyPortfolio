'use client';

import { ThemeProvider } from 'next-themes';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { dict, type Locale } from '@/lib/i18n';

interface Translator {
  (key: string): string;
  <T>(key: string): T;
}

type I18nValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translator;
};

const I18nContext = createContext<I18nValue>({
  locale: 'en',
  setLocale: () => {},
  t: ((k: string) => k) as Translator,
});

export function useI18n() {
  return useContext(I18nContext);
}

function resolve(locale: Locale, key: string): unknown {
  const parts = key.split('.');
  let cur: unknown = dict[locale];
  for (const p of parts) {
    if (cur == null || typeof cur !== 'object') return key;
    cur = (cur as Record<string, unknown>)[p];
  }
  return cur ?? key;
}

function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    const saved =
      typeof window !== 'undefined'
        ? (localStorage.getItem('locale') as Locale | null)
        : null;
    if (saved === 'en' || saved === 'fr') {
      setLocaleState(saved);
    } else if (typeof navigator !== 'undefined' && navigator.language?.startsWith('fr')) {
      setLocaleState('fr');
    }
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem('locale', l);
      document.documentElement.lang = l;
    } catch {}
  }, []);

  const t = useMemo<Translator>(
    () => ((key: string) => resolve(locale, key)) as Translator,
    [locale]
  );

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <I18nProvider>{children}</I18nProvider>
    </ThemeProvider>
  );
}
