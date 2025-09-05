import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Neuroclasses from '@/components/Neuroclasses';
import DevelopmentArcs from '@/components/DevelopmentArcs';
import GameRoles from '@/components/GameRoles';
import HowItWorks from '@/components/HowItWorks';
import Community from '@/components/Community';
import Footer from '@/components/Footer';

export default function Home() { 
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Stats />
        <Features />
        <Testimonials />
        <Neuroclasses />
        <DevelopmentArcs />
        <GameRoles />
        <HowItWorks />
        <Community />
        <Footer />
      </main>
    </>
  );
}