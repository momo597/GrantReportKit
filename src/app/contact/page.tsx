import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact — GrantReportKit",
  description: "Contact GrantReportKit for setup questions, refund requests, privacy questions, or general inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-[family-name:var(--font-fraunces)] text-2xl sm:text-3xl font-semibold text-foreground">
            Contact GrantReportKit
          </h1>
          <p className="mt-4 text-base text-muted leading-relaxed">
            For setup questions, refund requests, privacy questions, or general
            inquiries, you can contact us by email.
          </p>

          <div className="mt-8 bg-card border border-border rounded-2xl p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-base text-primary underline decoration-primary/30 hover:decoration-primary transition-colors duration-200"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-background border border-border rounded-2xl p-6 sm:p-8">
            <h2 className="text-base font-semibold text-foreground">Looking to request a setup?</h2>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              For new setup requests, please use the setup request form on the
              homepage so we can review whether your grants are a good fit.
            </p>
            <a
              href="/#request-setup"
              className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-primary rounded-full hover:bg-primary-dark transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary shadow-sm min-h-[44px]"
            >
              Request a setup
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
