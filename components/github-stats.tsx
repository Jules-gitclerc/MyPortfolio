'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, BookOpen } from 'lucide-react';
import { Github } from './ui/brand-icons';
import { SOCIALS } from '@/lib/constants';
import { EASE_OUT_EXPO } from '@/lib/motion';

const username = SOCIALS.github.split('/').pop()!;

export function GitHubStats() {
  const [stats, setStats] = useState<{
    repos: number;
    stars: number;
    forks: number;
  } | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
      signal: controller.signal,
    })
      .then((r) => {
        if (!r.ok) throw new Error(r.statusText);
        return r.json();
      })
      .then((repos: { stargazers_count: number; forks_count: number }[]) => {
        setStats({
          repos: repos.length,
          stars: repos.reduce((sum, r) => sum + (r.stargazers_count || 0), 0),
          forks: repos.reduce((sum, r) => sum + (r.forks_count || 0), 0),
        });
      })
      .catch((e) => {
        if (e.name !== 'AbortError') return;
      });

    return () => controller.abort();
  }, []);

  if (!stats) return null;

  const items = [
    { icon: BookOpen, label: 'Repos', value: stats.repos },
    { icon: Star, label: 'Stars', value: stats.stars },
    { icon: GitFork, label: 'Forks', value: stats.forks },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
      className="mt-10 overflow-hidden rounded-2xl border border-default bg-surface/50 p-5 backdrop-blur-sm"
    >
      <a
        href={SOCIALS.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm font-medium text-muted transition hover:text-accent"
      >
        <Github size={16} />
        github.com/{username}
      </a>
      <div className="mt-4 flex items-center gap-6">
        {items.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center gap-2">
            <Icon size={14} className="text-accent" />
            <span className="font-display text-lg font-semibold">{value}</span>
            <span className="text-xs text-muted">{label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
