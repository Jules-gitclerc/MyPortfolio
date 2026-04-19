'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, BookOpen } from 'lucide-react';
import { Github } from './ui/brand-icons';
import { SOCIALS } from '@/lib/constants';

type GitHubData = {
  public_repos: number;
  followers: number;
};

type RepoData = {
  stargazers_count: number;
  forks_count: number;
};

export function GitHubStats() {
  const [stats, setStats] = useState<{
    repos: number;
    stars: number;
    forks: number;
    followers: number;
  } | null>(null);

  useEffect(() => {
    const username = 'jules-gitclerc';

    Promise.all([
      fetch(`https://api.github.com/users/${username}`).then((r) => r.json()) as Promise<GitHubData>,
      fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`).then((r) =>
        r.json()
      ) as Promise<RepoData[]>,
    ])
      .then(([user, repos]) => {
        const stars = repos.reduce((sum: number, r: RepoData) => sum + (r.stargazers_count || 0), 0);
        const forks = repos.reduce((sum: number, r: RepoData) => sum + (r.forks_count || 0), 0);
        setStats({
          repos: user.public_repos,
          stars,
          forks,
          followers: user.followers,
        });
      })
      .catch(() => {});
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
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mt-10 overflow-hidden rounded-2xl border border-default bg-surface/50 p-5 backdrop-blur-sm"
    >
      <a
        href={SOCIALS.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm font-medium text-muted transition hover:text-accent"
      >
        <Github size={16} />
        github.com/jules-gitclerc
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
