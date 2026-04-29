import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Zumflux from '@/components/Zumflux';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Background decorations */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="glow-blob bg-accent/30 w-[600px] h-[600px] -top-40 -left-40" />
        <div className="glow-blob bg-accent-cyan/20 w-[500px] h-[500px] top-[40%] -right-40" />
        <div className="glow-blob bg-accent-pink/15 w-[400px] h-[400px] bottom-0 left-1/3" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <TechStack />
        <Skills />
        <Experience />
        <Projects />
        <Zumflux />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
