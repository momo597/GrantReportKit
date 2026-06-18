"use client";

import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <a href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary flex items-center justify-center">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 2h10a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M5 6h6M5 8.5h4M5 11h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-sm sm:text-base font-semibold text-foreground tracking-tight">
              GrantReportKit
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main navigation">
            <a href="/#how-it-works" className="text-sm text-muted hover:text-foreground transition-colors duration-200">How it works</a>
            <a href="/#what-you-get" className="text-sm text-muted hover:text-foreground transition-colors duration-200">What you get</a>
            <a href="/#pricing" className="text-sm text-muted hover:text-foreground transition-colors duration-200">Pricing</a>
            <a href="/#faq" className="text-sm text-muted hover:text-foreground transition-colors duration-200">FAQ</a>
          </nav>

          <div className="flex items-center gap-2">
            {/* Mobile compact CTA - visible on small screens, hidden on md+ */}
            <a
              href="/#request-setup"
              className="md:hidden inline-flex items-center px-3 py-1.5 text-xs font-medium text-white bg-primary rounded-full hover:bg-primary-dark transition-colors duration-200 cursor-pointer min-h-[36px]"
            >
              Request setup
            </a>

            {/* Desktop CTA */}
            <a
              href="/#request-setup"
              className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary-dark transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary shadow-sm min-h-[44px]"
            >
              Request my $49 beta setup
            </a>

            {/* Hamburger */}
            <button
              type="button"
              className="md:hidden p-2 text-muted hover:text-foreground cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-border-light pt-4" aria-label="Mobile navigation">
            <div className="flex flex-col gap-3">
              <a href="/#how-it-works" className="text-sm text-muted hover:text-foreground transition-colors duration-200 py-1" onClick={() => setMobileOpen(false)}>How it works</a>
              <a href="/#what-you-get" className="text-sm text-muted hover:text-foreground transition-colors duration-200 py-1" onClick={() => setMobileOpen(false)}>What you get</a>
              <a href="/#pricing" className="text-sm text-muted hover:text-foreground transition-colors duration-200 py-1" onClick={() => setMobileOpen(false)}>Pricing</a>
              <a href="/#faq" className="text-sm text-muted hover:text-foreground transition-colors duration-200 py-1" onClick={() => setMobileOpen(false)}>FAQ</a>
              <a href="/#request-setup" className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary-dark transition-colors duration-200 cursor-pointer mt-2 min-h-[44px]" onClick={() => setMobileOpen(false)}>
                Request my $49 beta setup
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
