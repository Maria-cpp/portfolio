'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { personal } from '@/lib/data';

const links = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#architecture', label: 'Architecture' },
  { href: '#zumflux', label: 'ZumfluxAI' },
  { href: '#certifications', label: 'Certs' },
  { href: '#contact', label: 'Contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="mx-auto max-w-6xl px-5">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled
                ? 'glass-strong rounded-full px-4 py-2.5 shadow-lg'
                : 'px-2'
            }`}
          >
            <a href="#top" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent via-accent-cyan to-accent-pink p-[1.5px]">
                  <div className="w-full h-full rounded-full bg-bg flex items-center justify-center">
                    <span className="font-display font-bold text-xs">{personal.initials}</span>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full bg-accent/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="hidden sm:block font-display text-sm font-medium">
                {personal.firstName}
                <span className="text-fg-muted">.dev</span>
              </span>
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="px-3 py-1.5 text-sm text-white/70 hover:text-white rounded-full hover:bg-white/5 transition"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="hidden md:inline-flex btn btn-primary text-xs"
              >
                Let&apos;s talk
              </a>
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden p-2 rounded-full hover:bg-white/5"
                aria-label="Toggle menu"
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-[72px] left-4 right-4 z-40 lg:hidden glass-strong rounded-2xl p-4"
          >
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 text-sm text-white/80 hover:text-white rounded-lg hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
