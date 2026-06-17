export default function WhoItsFor() {
  const goodFit = [
    "You manage 3–20 active grants",
    "You use Google Sheets, Excel, Outlook, or shared drives to track dates",
    "You worry a reporting deadline could slip through the cracks",
    "Your board asks what reports are due soon",
    "Grant knowledge lives in one person's head",
  ];

  const notFit = [
    "You already use a full grant management platform",
    "You only manage one simple grant",
    "You need grant discovery or proposal writing help",
  ];

  return (
    <section className="py-20 sm:py-28 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-[family-name:var(--font-fraunces)] text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground">
            Built for tiny nonprofit teams
          </h2>
          <p className="mt-4 text-base text-muted leading-relaxed">
            GrantReportKit is for small nonprofits that have won grants but do not
            have a full grant management system or a dedicated compliance person.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Good fit */}
          <div className="bg-primary-light/40 border border-primary/10 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-5">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-sm font-bold text-primary uppercase tracking-wide">
                Good fit
              </h3>
            </div>
            <ul className="space-y-3.5" role="list">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not a good fit */}
          <div className="bg-background border border-border rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-5">
              <svg className="w-5 h-5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-sm font-bold text-muted uppercase tracking-wide">
                Not the right fit
              </h3>
            </div>
            <ul className="space-y-3.5" role="list">
              {notFit.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-muted/60 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-sm text-muted leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
