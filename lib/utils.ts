import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** Prefix a local asset path with the configured basePath. */
export function asset(path: string) {
  return `${basePath}${path}`;
}
