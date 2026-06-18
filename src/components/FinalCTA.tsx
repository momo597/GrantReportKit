export default function FinalCTA() {
  return (
    <section className="py-14 sm:py-20 lg:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/50 via-sage-light/30 to-accent-light/20" aria-hidden="true" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-[family-name:var(--font-fraunces)] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
          Stop scrambling before every grant report is due.
        </h2>
        <p className="mt-4 text-base text-muted max-w-md mx-auto">
          Request a setup spot today. If your documents are a good fit, you&apos;ll get your clean report-readiness kit within 3&ndash;5 business days of payment and document access.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href="#request-setup"
            className="inline-flex items-center px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white bg-primary rounded-full hover:bg-primary-dark transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 min-h-[44px]"
          >
            Request my $49 beta setup
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No payment until confirmed
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              First 10 nonprofits
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Refund if no useful reporting information is found
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
