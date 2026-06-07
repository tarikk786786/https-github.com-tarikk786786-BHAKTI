/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import FloatingPetals from './components/FloatingPetals';
import SmokeEffect from './components/SmokeEffect';
import MouseGlow from './components/MouseGlow';
import ScrollProgress from './components/ScrollProgress';
import PrayerBell from './components/PrayerBell';
import LivePurchasePopup from './components/LivePurchasePopup';
import Hero from './components/Hero';
import Urgency from './components/Urgency';
import Authority from './components/Authority';
import Story from './components/Story';
import SpiritualQuotes from './components/SpiritualQuotes';
import SpiritualPromise from './components/SpiritualPromise';
import SpiritualChallenge from './components/SpiritualChallenge';
import TrustPromise from './components/TrustPromise';
import Donation from './components/Donation';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Deliverables from './components/Deliverables';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Disclaimer from './components/Disclaimer';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import StickyMobileCTA from './components/StickyMobileCTA';
import ExitIntentPopup from './components/ExitIntentPopup';

export default function App() {
  return (
    <main className="min-h-screen bg-[#1A0307] text-white relative">
      <ScrollProgress />
      <MouseGlow />
      <SmokeEffect />
      <FloatingPetals />
      <PrayerBell />
      <LivePurchasePopup />
      <div className="relative z-10 hidden md:block">
        <Urgency />
      </div>
      <Hero />
      <SpiritualQuotes />
      <Story />
      <SpiritualPromise />
      <TrustPromise />
      <SpiritualChallenge />
      <Donation />
      <Authority />
      <Benefits />
      <HowItWorks />
      <Deliverables />
      <Pricing />
      <Testimonials />
      <Guarantee />
      <FAQ />
      <Disclaimer />
      <Footer />
      <WhatsAppButton />
      <StickyMobileCTA />
      <ExitIntentPopup />
    </main>
  );
}
