import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Providers } from './providers';
import { Noise } from '@/components/ui/noise';
import { NAME, ROLE, SOCIALS } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const siteUrl = 'https://julesclerc.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${NAME} — ${ROLE}`,
    template: `%s · ${NAME}`,
  },
  description:
    'Freelance Flutter mobile developer and full-stack engineer (Java & Node.js). I build mobile apps and robust back-ends for startups and SMEs.',
  keywords: [
    'Jules Clerc',
    'Freelance developer',
    'Flutter',
    'Dart',
    'Mobile developer',
    'Java',
    'Spring Boot',
    'Node.js',
    'TypeScript',
    'Full-stack developer France',
  ],
  authors: [{ name: NAME }],
  creator: NAME,
  icons: {
    icon: [
      { url: '/icons8-portefeuille-32.png', sizes: '32x32' },
      { url: '/icons8-portefeuille-96.png', sizes: '96x96' },
    ],
  },
  openGraph: {
    title: `${NAME} — ${ROLE}`,
    description:
      'Freelance Flutter mobile developer and full-stack engineer (Java & Node.js).',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['fr_FR'],
    siteName: NAME,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${NAME} — ${ROLE}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${NAME} — ${ROLE}`,
    description: 'Freelance Flutter mobile & full-stack developer.',
    images: ['/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: NAME,
  url: siteUrl,
  jobTitle: 'Mobile Flutter & Full-Stack Developer',
  worksFor: { '@type': 'Organization', name: 'Faceel-it' },
  email: SOCIALS.email,
  sameAs: [SOCIALS.linkedin, SOCIALS.github, SOCIALS.malt],
  knowsAbout: ['Flutter', 'Dart', 'Java', 'Spring Boot', 'React', 'TypeScript', 'Docker', 'Kubernetes'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lille',
    addressCountry: 'FR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${mono.variable} ${display.variable}`}
    >
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="relative min-h-screen font-sans antialiased overflow-x-hidden">
        <a href="#main" className="skip-link">Skip to main content</a>
        <Providers>{children}</Providers>
        <Noise />
        <Script
          data-goatcounter="https://surfy.goatcounter.com/count"
          src="//gc.zgo.at/count.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
