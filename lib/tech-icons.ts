export type TechIcon = {
  name: string;
  slug: string | null;
  color: string;
};

export const techStack: TechIcon[] = [
  { name: 'Flutter', slug: 'flutter', color: '#02569B' },
  { name: 'Dart', slug: 'dart', color: '#0175C2' },
  { name: 'Riverpod', slug: null, color: '#00569E' },
  { name: 'Bloc', slug: null, color: '#6C63FF' },
  { name: 'Java', slug: null, color: '#ED8B00' },
  { name: 'Spring Boot', slug: 'springboot', color: '#6DB33F' },
  { name: 'Node.js', slug: 'nodedotjs', color: '#5FA04E' },
  { name: 'React', slug: 'react', color: '#61DAFB' },
  { name: 'TypeScript', slug: 'typescript', color: '#3178C6' },
  { name: 'Next.js', slug: 'nextdotjs', color: '#a0a0a0' },
  { name: 'Tailwind', slug: 'tailwindcss', color: '#06B6D4' },
  { name: 'MongoDB', slug: 'mongodb', color: '#47A248' },
  { name: 'Redis', slug: 'redis', color: '#FF4438' },
  { name: 'Firebase', slug: 'firebase', color: '#DD2C00' },
  { name: 'GCP', slug: 'googlecloud', color: '#4285F4' },
  { name: 'AWS', slug: 'amazonwebservices', color: '#FF9900' },
  { name: 'Docker', slug: 'docker', color: '#2496ED' },
  { name: 'Kubernetes', slug: 'kubernetes', color: '#326CE5' },
  { name: 'GitHub Actions', slug: 'githubactions', color: '#2088FF' },
  { name: 'Fastlane', slug: 'fastlane', color: '#00F200' },
  { name: 'REST', slug: null, color: '#FF6C37' },
];
