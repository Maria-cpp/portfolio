/**
 * page.tsx — Main homepage composing all portfolio sections in order.
 *
 * This is a server component (no 'use client'). Each section is a self-contained
 * client component imported below. NeonBar dividers separate each section.
 * Three fixed glow blobs provide the ambient background gradient effect.
 */
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Architecture from '@/components/Architecture';
import Zumflux from '@/components/Zumflux';
import Consulting from '@/components/Consulting';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import NeonBar from '@/components/NeonBar';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Fixed ambient glow blobs — decorative gradient background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="glow-blob bg-accent/30 w-[600px] h-[600px] -top-40 -left-40" />
        <div className="glow-blob bg-accent-cyan/20 w-[500px] h-[500px] top-[40%] -right-40" />
        <div className="glow-blob bg-accent-pink/15 w-[400px] h-[400px] bottom-0 left-1/3" />
      </div>

      {/* Section composition — order matches the visual flow top-to-bottom */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <NeonBar />
        <About />
        <NeonBar />
        <TechStack />
        <NeonBar />
        <Experience />
        <NeonBar />
        <Projects />
        <NeonBar />
        <Architecture />
        <NeonBar />
        <Zumflux />
        <NeonBar />
        <Consulting />
        <NeonBar />
        <Certifications />
        <NeonBar />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
