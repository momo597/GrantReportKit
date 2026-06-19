export default function WhatYouGet() {
  const features = [
    {
      title: "Grant report deadline tracker",
      description: "Every report due date across all your grants in one clear spreadsheet.",
    },
    {
      title: "Reporting requirements checklist",
      description: "What each funder expects: narrative, financials, outcomes, attachments — listed per grant.",
    },
    {
      title: "Financial data items to collect",
      description: "Budget vs. actual, expenditure summaries, and financial documentation each funder requires.",
    },
    {
      title: "Impact/program data items to collect",
      description: "Outcome metrics, beneficiary counts, program milestones, and narrative deliverables identified per grant.",
    },
    {
      title: "Suggested owners for each item",
      description: "Who should be responsible for collecting each piece — finance, programs, or leadership.",
    },
    {
      title: "Reminder dates before reports are due",
      description: "30, 14, and 3-day reminders so your team has time to collect data before the deadline.",
    },
    {
      title: "Board-friendly summary",
      description: "A one-page overview your board chair can read in two minutes.",
    },
    {
      title: "Optional Google Calendar import",
      description: "An .ics file you can drop into Google Calendar or Outlook for deadline alerts.",
    },
    {
      title: "Stakeholder follow-up plan",
      description: "A lightweight communication plan showing who needs to provide what, their preferred follow-up channel, when to start asking, and what is still missing before the report is due.",
    },
  ];

  return (
    <section id="what-you-get" className="py-14 sm:py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-[family-name:var(--font-fraunces)] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
            Your report-readiness kit includes
          </h2>
          <p className="mt-4 text-base text-muted max-w-lg mx-auto">
            One $49 setup. A practical report-readiness kit to help your team stay ready.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card border border-border rounded-2xl p-5 hover:border-primary/20 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <svg className="w-4.5 h-4.5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-sm font-semibold text-foreground">{feature.title}</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed pl-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
