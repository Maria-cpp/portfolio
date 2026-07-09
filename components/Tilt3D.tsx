'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * Tilt3D — wraps a card so it animates in with a subtle 3D flip on scroll,
 * and tilts in 3D space on hover. Uses a perspective parent so children
 * feel like they lift out of the page.
 */
export default function Tilt3D({
  children,
  className = '',
  delay = 0
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className="perspective">
      <motion.div
        initial={{ opacity: 0, y: 34, rotateX: -14 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ rotateX: 6, rotateY: -6, y: -6, scale: 1.015 }}
        style={{ transformStyle: 'preserve-3d' }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}
