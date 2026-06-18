export default function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center">
                <svg className="w-3 h-3 text-white" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 2h10a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M5 6h6M5 8.5h4M5 11h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-sm font-medium text-foreground">GrantReportKit</span>
            </div>

            <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2" aria-label="Footer navigation">
              <a href="/privacy-policy" className="text-xs text-muted hover:text-foreground transition-colors duration-200">Privacy Policy</a>
              <a href="/terms-of-service" className="text-xs text-muted hover:text-foreground transition-colors duration-200">Terms of Service</a>
              <a href="/refund-policy" className="text-xs text-muted hover:text-foreground transition-colors duration-200">Refund Policy</a>
            </nav>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-xs text-muted">
              An organization and reminder service for small nonprofits. Not legal or compliance advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
