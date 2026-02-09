import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { StatsStrip } from '../components/StatsStrip';
import { BriefIntro } from '../components/BriefIntro';
import { HowItWorks } from '../components/HowItWorks';
import { Services } from '../components/Services';
import { LoanCalculator } from '../components/LoanCalculator';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Testimonials } from '../components/Testimonials';
import { TrustBadges } from '../components/TrustBadges';
import { FAQ } from '../components/FAQ';
import { CallToAction } from '../components/CallToAction';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <BriefIntro />
        <HowItWorks />
        <Services limit={3} />
        <LoanCalculator />
        <WhyChooseUs />
        <Testimonials />
        <TrustBadges />
        <FAQ />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}