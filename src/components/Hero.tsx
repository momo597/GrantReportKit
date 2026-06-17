import { PAYMENT_URL, SUPPORT_EMAIL } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231B4D3E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-light border border-sage/30 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium text-primary">Beta — 10 spots available</span>
            </div>

            <h1 className="font-[family-name:var(--font-fraunces)] text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-foreground leading-[1.1] tracking-tight">
              Never miss a grant report deadline again.
            </h1>

            <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl">
              Send us your award letters. We turn them into a clean grant
              deadline tracker with report dates, renewal dates, required
              documents, and reminders.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start gap-4">
              <a
                href={PAYMENT_URL}
                className="inline-flex items-center px-7 py-3.5 text-base font-medium text-white bg-primary rounded-full hover:bg-primary-dark transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary shadow-md hover:shadow-lg"
              >
                Get my tracker set up — $49
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <p className="mt-4 text-sm text-muted">
              Manual beta. Limited to the first 10 nonprofits.
            </p>

            <div className="mt-3 flex items-center gap-2">
              <svg className="w-4 h-4 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <p className="text-sm text-muted">
                If we cannot find useful deadline information in your documents, we refund you.
              </p>
            </div>

            <p className="mt-4 text-sm text-muted">
              Questions?{" "}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary underline decoration-primary/30 hover:decoration-primary transition-colors duration-200">
                {SUPPORT_EMAIL}
              </a>
            </p>
          </div>

          {/* Right: Visual mockup showing transformation */}
          <div className="relative" aria-label="Visual showing award letter transformed into a deadline tracker">
            {/* Background decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-sage-light rounded-full blur-3xl opacity-60" aria-hidden="true" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent-light rounded-full blur-3xl opacity-40" aria-hidden="true" />

            {/* Award letter card (back/tilted) */}
            <div className="absolute top-4 -left-2 sm:left-2 w-[65%] transform -rotate-3 z-10">
              <div className="bg-cream border border-border rounded-2xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded bg-accent/20 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-foreground">Award Letter</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-foreground/8 rounded-full w-full" />
                  <div className="h-2 bg-foreground/8 rounded-full w-4/5" />
                  <div className="mt-3 py-1.5 px-2.5 bg-accent/10 border border-accent/20 rounded-lg">
                    <p className="text-[10px] font-medium text-accent">Final report due: Apr 30, 2025</p>
                  </div>
                  <div className="h-2 bg-foreground/8 rounded-full w-full" />
                  <div className="py-1.5 px-2.5 bg-accent/10 border border-accent/20 rounded-lg">
                    <p className="text-[10px] font-medium text-accent">Renewal deadline: Jun 15, 2025</p>
                  </div>
                  <div className="h-2 bg-foreground/8 rounded-full w-3/4" />
                </div>
              </div>
            </div>

            {/* Arrow indicator */}
            <div className="absolute top-1/2 left-[52%] -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-10 h-10 rounded-full bg-primary shadow-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>

            {/* Deadline tracker card (front) */}
            <div className="relative ml-auto w-[75%] mt-16 sm:mt-12 z-30">
              <div className="bg-card border border-border rounded-2xl shadow-xl shadow-primary/5 overflow-hidden">
                <div className="px-5 py-3.5 border-b border-border bg-primary/[0.03]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-primary/10 flex items-center justify-center">
                        <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <span className="text-xs font-semibold text-foreground">Deadline Tracker</span>
                    </div>
                    <span className="text-[10px] text-muted">3 grants</span>
                  </div>
                </div>

                <div className="divide-y divide-border">
                  {/* Row 1 */}
                  <div className="px-5 py-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-medium text-foreground">Ford Foundation</p>
                        <p className="text-[10px] text-muted mt-0.5">Annual report due</p>
                      </div>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                        Apr 30
                      </span>
                    </div>
                    <div className="flex gap-1.5 mt-2">
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-primary-light text-primary font-medium">30d</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-primary-light text-primary font-medium">14d</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-primary-light text-primary font-medium">3d</span>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="px-5 py-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-medium text-foreground">Community First</p>
                        <p className="text-[10px] text-muted mt-0.5">Mid-year progress report</p>
                      </div>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200">
                        Jun 15
                      </span>
                    </div>
                    <div className="flex gap-1.5 mt-2">
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-sage-light text-primary font-medium">30d</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-sage-light text-primary font-medium">14d</span>
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-sage-light text-primary font-medium">3d</span>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="px-5 py-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-medium text-foreground">United Way</p>
                        <p className="text-[10px] text-muted mt-0.5">Final report + financials</p>
                      </div>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200">
                        Aug 1
                      </span>
                    </div>
                  </div>
                </div>

                {/* Required items badge */}
                <div className="px-5 py-3 border-t border-border bg-sage-light/30">
                  <div className="flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                    <span className="text-[10px] text-primary font-medium">Required: narrative, budget report, outcomes data</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
