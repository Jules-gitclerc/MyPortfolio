'use client';

import { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

function parse(k: string): { value: number; suffix: string } {
  const match = k.match(/^(\d+)(.*)/);
  if (!match) return { value: 0, suffix: k };
  return { value: parseInt(match[1]), suffix: match[2] };
}

export function AnimatedCounter({ text }: { text: string }) {
  const { value, suffix } = parse(text);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, value, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate: (v) => {
        node.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return controls.stop;
  }, [isInView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}
