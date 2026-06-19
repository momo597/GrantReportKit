export default function Problem() {
  const painCards = [
    {
      title: "Requirements buried across documents",
      description: "Financial data, impact metrics, and deliverables are scattered across award letters, emails, and portals.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
    },
    {
      title: "Data collection starts too late",
      description: "Teams realize they need financial or impact numbers weeks before the report is due — not months before.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Nobody owns each piece",
      description: "Finance, programs, partners, and leadership all need to contribute — but the follow-up plan is rarely written down.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
    },
    {
      title: "Last-minute scramble before deadlines",
      description: "Pulling everything together close to the deadline creates stress, errors, and risk to future funding.",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-28 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-fraunces)] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
            Grant reports fail when teams are not ready — not just when they forget the date.
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base text-muted leading-relaxed">
            Most teams don&apos;t only miss reports because they forgot the date.
            The harder part is realizing too late that the financial data, impact
            numbers, stewardship notes, or program updates were never collected
            consistently.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid sm:grid-cols-2 gap-4 sm:gap-5">
          {painCards.map((card) => (
            <div
              key={card.title}
              className="group bg-background border border-border rounded-2xl p-5 sm:p-6 hover:border-primary/20 hover:shadow-sm transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center text-foreground/70 group-hover:text-primary transition-colors duration-200">
                {card.icon}
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
