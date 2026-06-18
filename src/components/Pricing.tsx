export default function Pricing() {
  const includes = [
    "Up to 5 award letters",
    "Report deadline extraction",
    "Renewal dates when available",
    "Required report items",
    "30 / 14 / 3-day reminder schedule",
    "Board-friendly summary",
    "Optional Google Calendar import file",
  ];

  return (
    <section id="pricing" className="py-14 sm:py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-[family-name:var(--font-fraunces)] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
            Beta setup: $49 one-time
          </h2>
          <p className="mt-4 text-base text-muted max-w-xl mx-auto leading-relaxed">
            Request a setup spot first. If your documents are a good fit,
            we&apos;ll send you a payment link before starting the manual setup.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative bg-card border-2 border-primary/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg shadow-primary/5">
            {/* Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-white text-xs font-medium shadow-md">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Limited beta
              </span>
            </div>

            {/* Price */}
            <div className="text-center mb-8 pt-2">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl sm:text-5xl font-bold text-foreground">$49</span>
                <span className="text-base text-muted">/one-time</span>
              </div>
              <p className="mt-2 text-sm text-muted">No subscription. No recurring fees.</p>
            </div>

            {/* Includes */}
            <div className="border-t border-border pt-6 mb-8">
              <p className="text-xs font-bold text-muted uppercase tracking-wider mb-4">
                What&apos;s included
              </p>
              <ul className="space-y-3" role="list">
                {includes.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <a
              href="#request-setup"
              className="w-full inline-flex items-center justify-center px-6 py-3.5 sm:py-4 text-base font-semibold text-white bg-primary rounded-xl hover:bg-primary-dark transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary shadow-md hover:shadow-lg min-h-[44px]"
            >
              Request my $49 beta setup
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>

            <p className="mt-4 text-xs text-muted text-center leading-relaxed">
              We&apos;ll review your needs first. You only pay if your documents are a good fit.
            </p>

            {/* Guarantee */}
            <div className="mt-5 flex items-start gap-2.5 p-3 rounded-xl bg-accent-light border border-accent/15">
              <svg className="w-4 h-4 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <p className="text-xs text-foreground/80 leading-relaxed">
                <span className="font-semibold">Refund guarantee:</span> If we cannot find useful deadline information in your documents after payment, we refund you.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
