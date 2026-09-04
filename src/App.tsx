import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { WorkflowPillars } from './components/WorkflowPillars';
import { BeforeAfterComparison } from './components/BeforeAfterComparison';
import { WhyPracticesSwitch } from './components/WhyPracticesSwitch';
import { SecurityCompliance } from './components/SecurityCompliance';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';

export function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const openDemoModal = () => {
    setIsDemoModalOpen(true);
  };

  const closeDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface-white text-text-body font-sans selection:bg-brand-teal/20 selection:text-brand-navy">
      {/* Top Hero Container with continuous downward gradient behind floating header */}
      <div className="hero-gradient-bg relative w-full">
        {/* Floating Detached Header */}
        <Header onRequestDemo={openDemoModal} />

        {/* Hero Section with Dashboard Showcase */}
        <div id="agents">
          <Hero onRequestDemo={openDemoModal} />
        </div>

        {/* Trust Bar with Integrations (seamlessly positioned on white gradient bottom) */}
        <TrustBar />
      </div>

      <main className="flex-grow">
        {/* Four Workflows */}
        <div id="workflows">
          <WorkflowPillars onRequestDemo={openDemoModal} />
        </div>

        {/* "A morning without ePhysician vs. with it" Scorecard */}
        <BeforeAfterComparison />

        {/* Why Practices Switch */}
        <div id="pricing">
          <WhyPracticesSwitch />
        </div>

        {/* Security & Compliance */}
        <div id="security">
          <SecurityCompliance />
        </div>

        {/* Final CTA */}
        <FinalCTA onRequestDemo={openDemoModal} />
      </main>

      {/* Footer */}
      <Footer onRequestDemo={openDemoModal} />

      {/* Interactive Live Demo Request Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
    </div>
  );
}

export default App;
