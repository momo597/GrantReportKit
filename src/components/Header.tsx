"use client";

import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <svg className="w-4 h-4 text-white" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 2h10a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M5 6h6M5 8.5h4M5 11h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-base font-semibold text-foreground tracking-tight">
              GrantReportKit
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <a href="#how-it-works" className="text-sm text-muted hover:text-foreground transition-colors duration-200">How it works</a>
            <a href="#what-you-get" className="text-sm text-muted hover:text-foreground transition-colors duration-200">What you get</a>
            <a href="#pricing" className="text-sm text-muted hover:text-foreground transition-colors duration-200">Pricing</a>
            <a href="#faq" className="text-sm text-muted hover:text-foreground transition-colors duration-200">FAQ</a>
          </nav>

          <a
            href="#request-setup"
            className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary-dark transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary shadow-sm"
          >
            Request my $49 beta setup
          </a>

          <button
            type="button"
            className="md:hidden p-2 text-muted hover:text-foreground cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-border-light pt-4" aria-label="Mobile navigation">
            <div className="flex flex-col gap-3">
              <a href="#how-it-works" className="text-sm text-muted hover:text-foreground transition-colors duration-200" onClick={() => setMobileOpen(false)}>How it works</a>
              <a href="#what-you-get" className="text-sm text-muted hover:text-foreground transition-colors duration-200" onClick={() => setMobileOpen(false)}>What you get</a>
              <a href="#pricing" className="text-sm text-muted hover:text-foreground transition-colors duration-200" onClick={() => setMobileOpen(false)}>Pricing</a>
              <a href="#faq" className="text-sm text-muted hover:text-foreground transition-colors duration-200" onClick={() => setMobileOpen(false)}>FAQ</a>
              <a href="#request-setup" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary-dark transition-colors duration-200 cursor-pointer mt-2" onClick={() => setMobileOpen(false)}>
                Request my $49 beta setup
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
