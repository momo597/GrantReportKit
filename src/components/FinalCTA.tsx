import { PAYMENT_URL, SUPPORT_EMAIL } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/50 via-sage-light/30 to-accent-light/20" aria-hidden="true" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-[family-name:var(--font-fraunces)] text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
          Stop wondering what grant report is due next.
        </h2>
        <p className="mt-4 text-base text-muted max-w-md mx-auto">
          Send us your award letters today. Get your clean deadline tracker within 3 business days.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href={PAYMENT_URL}
            className="inline-flex items-center px-8 py-4 text-base font-semibold text-white bg-primary rounded-full hover:bg-primary-dark transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25"
          >
            Get my tracker set up — $49
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Manual beta
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
              Refund if no useful dates found
            </span>
          </div>
        </div>

        <p className="mt-6 text-sm text-muted">
          Questions?{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary underline decoration-primary/30 hover:decoration-primary transition-colors duration-200">
            {SUPPORT_EMAIL}
          </a>
        </p>
      </div>
    </section>
  );
}
