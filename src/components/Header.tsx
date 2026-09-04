import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X, ArrowRight, ExternalLink } from 'lucide-react';

interface HeaderProps {
  onRequestDemo: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestDemo }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 0 at top (scrollY = 0), reaches 1 when entering the dashboard screenshot (~scrollY = 280)
      const progress = Math.min(Math.max(window.scrollY / 280, 0), 1);
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Agents', href: '#agents' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Compare', href: '#compare' },
    { name: 'FAQ', href: '#faq' },
  ];

  // Smoothly blend from solid white (top) to liquid glass (dashboard & down)
  const bgOpacity = 1 - 0.28 * scrollProgress; // 1.0 -> 0.72
  const blurPx = scrollProgress * 24; // 0px -> 24px
  const borderOpacity = 0.85 - 0.15 * scrollProgress;

  return (
    <header
      className={`fixed top-4 sm:top-6 left-0 right-0 z-50 pointer-events-none`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="flex items-center justify-between pointer-events-auto px-5 py-3.5 sm:px-7 sm:py-3.5 rounded-2xl transition-[box-shadow] duration-200"
          style={{
            backgroundColor: `rgba(255, 255, 255, ${bgOpacity})`,
            backdropFilter: `blur(${blurPx}px) saturate(190%)`,
            WebkitBackdropFilter: `blur(${blurPx}px) saturate(190%)`,
            border: `1px solid rgba(255, 255, 255, ${borderOpacity})`,
            boxShadow: scrollProgress > 0.05 
              ? `0 4px 20px rgba(0, 0, 0, ${0.04 + scrollProgress * 0.06}), 0 0 24px rgba(46, 148, 193, ${scrollProgress * 0.12}), inset 2px 2px 3px 0 rgba(255, 255, 255, ${scrollProgress * 0.8}), inset -2px -2px 3px 0 rgba(255, 255, 255, ${scrollProgress * 0.4})`
              : '0 4px 12px rgba(0, 0, 0, 0.04)',
          }}
        >
          
          {/* Brand Logo Lockup */}
          <a href="#" className="focus:outline-none focus:ring-2 focus:ring-brand-blue/30 rounded-lg">
            <BrandLogo size="md" variant="full" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-text-body hover:text-brand-blue transition-colors tracking-tight"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right-hand Action Links & CTAs */}
          <div className="hidden sm:flex items-center gap-5">
            <a
              href="https://demo.ephysician.biz/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-brand-navy hover:text-brand-blue transition-colors inline-flex items-center gap-1"
            >
              <span>Demo Login</span>
              <ExternalLink className="w-3.5 h-3.5 text-text-body/60" />
            </a>

            <button
              onClick={onRequestDemo}
              className="py-2.5 px-5 rounded-xl font-heading font-bold text-sm text-white bg-brand-blue hover:bg-brand-blue-hover hover:shadow-btn-hover transition-all duration-200 cursor-pointer inline-flex items-center gap-1.5"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={onRequestDemo}
              className="py-1.5 px-3 rounded-xl font-heading font-bold text-xs text-white bg-brand-blue"
            >
              Demo
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 text-brand-navy rounded-lg hover:bg-surface-pale transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-border-soft bg-white px-6 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-2.5 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-brand-navy hover:text-brand-blue py-1.5 px-2 rounded-lg hover:bg-surface-pale transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-border-soft flex flex-col gap-3">
            <a
              href="https://demo.ephysician.biz/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-center text-brand-navy py-2 rounded-xl bg-surface-pale border border-border-soft"
            >
              Demo Login
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onRequestDemo();
              }}
              className="w-full py-3 px-4 rounded-xl font-heading font-bold text-sm text-center text-white bg-brand-blue hover:bg-brand-blue-hover"
            >
              Request a Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
