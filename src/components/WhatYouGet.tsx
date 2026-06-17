export default function WhatYouGet() {
  const features = [
    {
      title: "Grant deadline tracker",
      description: "One clear spreadsheet with every report due date across all your grants.",
    },
    {
      title: "Report due dates",
      description: "Interim, annual, and final report deadlines extracted from each award letter.",
    },
    {
      title: "Renewal & grant period dates",
      description: "Know when each grant starts, ends, and when renewal applications are due.",
    },
    {
      title: "Required report items",
      description: "Narrative reports, financials, outcome data — listed for each funder.",
    },
    {
      title: "30 / 14 / 3-day reminder schedule",
      description: "Three reminders before each deadline so nothing sneaks up on you.",
    },
    {
      title: "Board-friendly summary",
      description: "A one-page overview your board chair can read in two minutes.",
    },
    {
      title: "Optional Google Calendar import",
      description: "An .ics file you can drop into Google Calendar or Outlook.",
    },
  ];

  return (
    <section id="what-you-get" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-[family-name:var(--font-fraunces)] text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground">
            Everything you need to stop guessing what is due
          </h2>
          <p className="mt-4 text-base text-muted max-w-lg mx-auto">
            One $49 setup. Seven deliverables. All sent to your inbox.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
