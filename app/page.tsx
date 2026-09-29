/**
 * page.tsx — Main homepage composing all portfolio sections in order.
 *
 * This is a server component (no 'use client'). Each section is a self-contained
 * client component imported below. NeonBar dividers separate each section.
 * Three fixed glow blobs provide the ambient background gradient effect.
 */
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Capabilities from '@/components/Capabilities';
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
      {/* Section composition — order matches the visual flow top-to-bottom */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <NeonBar />
        <Capabilities />
        <NeonBar />
        <Projects />
        <NeonBar />
        <Experience />
        <NeonBar />
        <TechStack />
        <NeonBar />
        <Architecture />
        <NeonBar />
        <About />
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
