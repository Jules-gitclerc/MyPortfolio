'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CursorFollower() {
  const [visible, setVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 150, damping: 25 });
  const springY = useSpring(cursorY, { stiffness: 150, damping: 25 });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    setVisible(true);
    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [cursorX, cursorY]);

  if (!visible) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[9999] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-grad opacity-25 blur-sm"
      style={{ left: springX, top: springY }}
    />
  );
}
