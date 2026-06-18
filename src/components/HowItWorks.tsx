export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Send your award letters",
      description: "Upload or email up to 5 grant award letters, grant agreements, or funder emails with reporting requirements.",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
        </svg>
      ),
    },
    {
      step: "02",
      title: "We find the important dates",
      description: "We read each document and extract report deadlines, renewal dates, grant periods, and required report items.",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      ),
    },
    {
      step: "03",
      title: "You get a clean tracker",
      description: "Receive a deadline tracker spreadsheet, a reminder schedule, a board-friendly summary, and an optional Google Calendar file.",
      icon: (
        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-14 sm:py-20 lg:py-28 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-[family-name:var(--font-fraunces)] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
            How GrantReportKit works
          </h2>
          <p className="mt-4 text-base text-muted max-w-lg mx-auto">
            Three steps. No software to learn. No login required.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(100%_-_16px)] w-[calc(100%_-_48px)] h-px bg-border z-0" aria-hidden="true">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-border" />
                </div>
              )}

              <div className="relative z-10 bg-background border border-border rounded-2xl p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary-light flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold text-primary/50 uppercase tracking-widest">
                    Step {item.step}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
