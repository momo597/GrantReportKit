export default function Transformation() {
  return (
    <section className="py-14 sm:py-20 lg:py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-sage-light/20 to-background" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-[family-name:var(--font-fraunces)] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
            From award letter to deadline tracker.
          </h2>
          <p className="mt-4 text-base text-muted max-w-xl mx-auto">
            You send us the documents. We extract every important date and organize them into something your whole team can use.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr,auto,1fr] gap-6 md:gap-4 items-center">
          {/* Left: Messy award letter */}
          <div className="bg-cream border border-border rounded-2xl p-4 sm:p-6 shadow-sm relative">
            <div className="absolute top-4 right-4">
              <span className="text-[10px] font-medium text-muted uppercase tracking-wider">Before</span>
            </div>

            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Grant Award Letter</p>
                <p className="text-[11px] text-muted">Ford Foundation — 2024</p>
              </div>
            </div>

            {/* Simulated document content */}
            <div className="space-y-2.5 text-[11px] leading-relaxed text-muted/80">
              <div className="h-2 bg-foreground/6 rounded-full w-full" />
              <div className="h-2 bg-foreground/6 rounded-full w-11/12" />
              <div className="h-2 bg-foreground/6 rounded-full w-full" />

              <div className="my-3 py-2 px-3 bg-accent/8 border border-accent/20 rounded-lg">
                <p className="text-[11px] font-medium text-accent/90">
                  &ldquo;The final narrative and financial report is due no later than <span className="font-bold text-accent underline decoration-accent/40">April 30, 2025</span>.&rdquo;
                </p>
              </div>

              <div className="h-2 bg-foreground/6 rounded-full w-full" />
              <div className="h-2 bg-foreground/6 rounded-full w-4/5" />

              <div className="my-3 py-2 px-3 bg-accent/8 border border-accent/20 rounded-lg">
                <p className="text-[11px] font-medium text-accent/90">
                  &ldquo;Grant period: <span className="font-bold text-accent">Jul 1, 2024 – Jun 30, 2025</span>&rdquo;
                </p>
              </div>

              <div className="h-2 bg-foreground/6 rounded-full w-full" />

              <div className="my-3 py-2 px-3 bg-accent/8 border border-accent/20 rounded-lg">
                <p className="text-[11px] font-medium text-accent/90">
                  &ldquo;Required: narrative report, audited financials, and <span className="font-bold text-accent">outcome measurements</span>&rdquo;
                </p>
              </div>

              <div className="h-2 bg-foreground/6 rounded-full w-3/4" />
              <div className="h-2 bg-foreground/6 rounded-full w-full" />
            </div>
          </div>

          {/* Center: Arrow */}
          <div className="flex items-center justify-center">
            <div className="hidden md:flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary shadow-lg shadow-primary/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <span className="text-[10px] font-medium text-primary">We extract</span>
            </div>
            {/* Mobile arrow (vertical) */}
            <div className="md:hidden flex flex-col items-center gap-2 py-2">
              <div className="w-10 h-10 rounded-full bg-primary shadow-lg shadow-primary/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <span className="text-[10px] font-medium text-primary">We extract</span>
            </div>
          </div>

          {/* Right: Clean tracker */}
          <div className="bg-card border border-border rounded-2xl shadow-lg shadow-primary/5 overflow-hidden relative">
            <div className="absolute top-4 right-4">
              <span className="text-[10px] font-medium text-primary uppercase tracking-wider">After</span>
            </div>

            <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-border">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Your Deadline Tracker</p>
                  <p className="text-[11px] text-muted">Ford Foundation grant</p>
                </div>
              </div>
            </div>

            <div className="px-4 sm:px-6 py-3 sm:py-4 space-y-3 sm:space-y-4">
              {/* Report due */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-amber-400" aria-hidden="true" />
                  <span className="text-xs text-foreground font-medium">Final report due</span>
                </div>
                <span className="text-xs font-semibold text-foreground bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">
                  Apr 30, 2025
                </span>
              </div>

              {/* Grant period */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-sage" aria-hidden="true" />
                  <span className="text-xs text-foreground font-medium">Grant period</span>
                </div>
                <span className="text-xs text-muted">Jul 1, 2024 – Jun 30, 2025</span>
              </div>

              {/* Required items */}
              <div>
                <p className="text-[11px] text-muted font-medium mb-2">Required report items:</p>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[10px] px-2 py-1 rounded-full bg-sage-light text-primary font-medium border border-sage/30">Narrative report</span>
                  <span className="text-[10px] px-2 py-1 rounded-full bg-sage-light text-primary font-medium border border-sage/30">Audited financials</span>
                  <span className="text-[10px] px-2 py-1 rounded-full bg-sage-light text-primary font-medium border border-sage/30">Outcome data</span>
                </div>
              </div>

              {/* Reminders */}
              <div className="pt-3 border-t border-border">
                <p className="text-[11px] text-muted font-medium mb-2">Reminder schedule:</p>
                <div className="flex gap-2">
                  <div className="flex-1 text-center py-2 rounded-lg bg-primary-light border border-primary/10">
                    <p className="text-[10px] font-bold text-primary">30 days</p>
                    <p className="text-[9px] text-primary/70">Mar 31</p>
                  </div>
                  <div className="flex-1 text-center py-2 rounded-lg bg-primary-light border border-primary/10">
                    <p className="text-[10px] font-bold text-primary">14 days</p>
                    <p className="text-[9px] text-primary/70">Apr 16</p>
                  </div>
                  <div className="flex-1 text-center py-2 rounded-lg bg-primary-light border border-primary/10">
                    <p className="text-[10px] font-bold text-primary">3 days</p>
                    <p className="text-[9px] text-primary/70">Apr 27</p>
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
