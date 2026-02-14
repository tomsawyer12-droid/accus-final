import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { StatsStrip } from '../components/StatsStrip';
import { BriefIntro } from '../components/BriefIntro';
import { HowItWorks } from '../components/HowItWorks';
import { Services } from '../components/Services';
// import { Testimonials } from '../components/Testimonials';
import { CallToAction } from '../components/CallToAction';
import { Footer } from '../components/Footer';

import { SEO } from '../components/SEO';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Home - Accus Capital" 
        description="Accus Capital provides trusted financial solutions in Uganda, including loans and investment advice. Your partner for growth."
        keywords="loans uganda, quick loans, salary loans, business loans, financial growth, accus capital"
        canonical="https://accuscapital.com/"
      />
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <BriefIntro />
        <HowItWorks />
        <Services limit={3} />
        {/* <Testimonials /> */}
        {/* <TrustBadges /> */}
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}