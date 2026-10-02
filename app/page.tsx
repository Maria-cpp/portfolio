// Recruitment homepage: selected work, experience, expertise, about, contact.
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import TechStack from '@/components/TechStack';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
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
        <Projects />
        <NeonBar />
        <Experience />
        <NeonBar />
        <TechStack />
        <NeonBar />
        <About />
        <NeonBar />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
