import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'CareerRPG - Gamify Your Career Journey | Early Access 2026',
  description: 'Transform your career development into an engaging RPG experience. Discover your neuroclass, unlock achievements, and level up your professional skills. Join the waitlist for early access in 2026.',
  keywords: [
    'career development',
    'professional growth',
    'RPG career',
    'gamification',
    'neuroclass',
    'career coaching',
    'skill development',
    'professional skills',
    'career journey',
    'early access'
  ],
  authors: [{ name: 'CareerRPG Team' }],
  creator: 'CareerRPG',
  publisher: 'CareerRPG',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://careerrpg.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CareerRPG - Gamify Your Career Journey',
    description: 'Transform your career development into an engaging RPG experience. Discover your neuroclass, unlock achievements, and level up your professional skills.',
    url: 'https://careerrpg.app',
    siteName: 'CareerRPG',
    images: [
      {
        url: '/CareerRPGLogo.png',
        width: 1200,
        height: 630,
        alt: 'CareerRPG - Gamify Your Career Journey',
      },
      {
        url: '/CareeerrpgIconSquare.png',
        width: 400,
        height: 400,
        alt: 'CareerRPG Icon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CareerRPG - Gamify Your Career Journey',
    description: 'Transform your career development into an engaging RPG experience. Join the waitlist for early access in 2026.',
    images: ['/CareerRPGLogo.png'],
    creator: '@careerrpg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CareerRPG',
    alternateName: 'Career RPG',
    url: 'https://careerrpg.app',
    description: 'Transform your career development into an engaging RPG experience. Discover your neuroclass, start your quest, enter pomodungeon, unlock achievements, and level up your career.',
    publisher: {
      '@type': 'Organization',
      name: 'CareerRPG',
      logo: {
        '@type': 'ImageObject',
        url: 'https://careerrpg.app/CareerRPGLogo.png',
        width: 400,
        height: 400,
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://careerrpg.app/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    mainEntity: {
      '@type': 'SoftwareApplication',
      name: 'CareerRPG',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description: 'A gamified career development platform that transforms professional growth into an engaging RPG experience.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/PreOrder',
        validFrom: '2024-01-01',
        priceValidUntil: '2026-12-31',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '150',
        bestRating: '5',
        worstRating: '1',
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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