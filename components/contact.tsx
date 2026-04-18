'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Linkedin, Github, Mail } from 'lucide-react';
import { Section } from './ui/section';
import { Magnetic } from './ui/magnetic';
import { LinkButton } from './ui/button';
import { useI18n } from '@/app/providers';
import { SOCIALS } from '@/lib/constants';

const links = [
  { label: 'LinkedIn', href: SOCIALS.linkedin, Icon: Linkedin },
  { label: 'GitHub', href: SOCIALS.github, Icon: Github },
  { label: 'Malt', href: SOCIALS.malt, Icon: ArrowUpRight },
];

export function Contact() {
  const { t } = useI18n();

  return (
    <Section id="contact">
      <div className="relative overflow-hidden rounded-[2rem] border border-default bg-surface/60 p-10 backdrop-blur sm:p-16">
        {/* Aurora-ish accent */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-accent/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 right-0 h-[24rem] w-[24rem] rounded-full bg-accent-hot/25 blur-3xl" />

        <div className="relative grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-default bg-surface px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-grad" />
              {t('contact.kicker')}
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 font-display text-display-md font-semibold tracking-tight"
            >
              {t('contact.title')}
            </motion.h2>
            <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">{t('contact.body')}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic>
                <LinkButton href={`mailto:${SOCIALS.email}`} icon={<Mail size={16} />} showArrow>
                  {t('contact.cta')}
                </LinkButton>
              </Magnetic>
              <Link
                href={`mailto:${SOCIALS.email}`}
                className="text-sm font-mono text-muted underline-offset-4 hover:text-accent hover:underline"
              >
                {SOCIALS.email}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              {t('contact.or')}
            </div>
            <ul className="mt-4 space-y-3">
              {links.map(({ label, href, Icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-default bg-surface px-5 py-4 transition hover:border-accent/40 hover:bg-surface/80"
                  >
                    <span className="flex items-center gap-3 font-display text-xl font-medium tracking-tight">
                      <Icon size={18} className="text-muted transition group-hover:text-accent" />
                      {label}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
