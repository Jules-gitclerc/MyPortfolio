'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-120 w-120 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative text-center"
      >
        <span className="text-gradient font-display text-[10rem] font-bold leading-none sm:text-[14rem]">
          404
        </span>
        <p className="mt-2 text-lg text-muted sm:text-xl">
          This page doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-grad px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent/30 transition hover:shadow-xl hover:shadow-accent/40"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>
      </motion.div>
    </main>
  );
}
