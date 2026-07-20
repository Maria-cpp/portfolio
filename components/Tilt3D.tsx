'use client';

import { useRef, useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * Tilt3D — Premium interactive card with:
 * 1. Mouse-tracking 3D tilt (rotateX/Y up to ±4deg)
 * 2. Lift/float on hover (translateY -8px)
 * 3. Radial spotlight that follows cursor
 * 4. Diagonal gradient overlay
 * 5. Border glow
 * 6. Deep layered shadow
 * 7. Edge glow scanline
 */
export default function Tilt3D({
  children,
  className = '',
  delay = 0,
  variant = 'default'
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: 'default' | 'project' | 'skill';
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Tilt: ±4 degrees
    const rotateY = ((x - centerX) / centerX) * 4;
    const rotateX = ((centerY - y) / centerY) * 4;
    setTilt({ rotateX, rotateY });

    // CSS custom properties for spotlight
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }, []);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
    const card = cardRef.current;
    if (card) {
      card.style.removeProperty('--mouse-x');
      card.style.removeProperty('--mouse-y');
    }
  }, []);

  const variantClass =
    variant === 'project' ? 'tilt-card tilt-card--project' :
    variant === 'skill' ? 'tilt-card tilt-card--skill' :
    'tilt-card';

  return (
    <div className="perspective">
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 34, rotateX: -14 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        animate={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
          y: isHovered ? -8 : 0,
          scale: isHovered ? 1.01 : 1,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ transformStyle: 'preserve-3d' }}
        className={`${variantClass} ${isHovered ? 'is-hovered' : ''} ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
}
