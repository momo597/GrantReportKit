"use client";

import { useState, type FormEvent } from "react";
import { SUPPORT_EMAIL, WEB3FORMS_ACCESS_KEY } from "@/lib/constants";

const ROLE_OPTIONS = ["Executive Director", "Grant writer", "Development Director", "Operations/Admin", "Board member", "Volunteer grant coordinator", "Other"];
const GRANT_COUNT_OPTIONS = ["1\u20132", "3\u20135", "6\u201310", "11\u201320", "20+"];
const TRACKING_OPTIONS = ["Google Sheets / Excel", "Google Calendar / Outlook", "CRM", "Project management tool", "Shared drive folders", "Email / memory", "Other"];
const URGENCY_OPTIONS = ["Yes", "No", "Not sure"];
const DOCUMENTS_READY_OPTIONS = ["Yes", "No", "I need to find them"];

export default function RequestForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [trackingMethods, setTrackingMethods] = useState<string[]>([]);

  function handleCheckbox(value: string) {
    setTrackingMethods((prev) => prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.currentTarget);
    formData.set("tracking_methods", trackingMethods.join(", "));
    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await response.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section id="request-setup" className="py-20 sm:py-28">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border border-primary/20 rounded-3xl p-8 sm:p-12 text-center shadow-lg shadow-primary/5">
            <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="font-[family-name:var(--font-fraunces)] text-2xl sm:text-3xl font-semibold text-foreground">Thanks &mdash; your setup request was received.</h2>
            <p className="mt-4 text-base text-muted leading-relaxed max-w-md mx-auto">We&apos;ll review your answers and email you next steps. If your grants are a good fit for the beta setup, we&apos;ll send the $49 payment link and instructions for sharing your award letters.</p>
            <p className="mt-6 text-sm text-muted">Questions in the meantime?{" "}<a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary underline decoration-primary/30 hover:decoration-primary transition-colors duration-200">{SUPPORT_EMAIL}</a></p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="request-setup" className="py-20 sm:py-28 bg-card">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-[family-name:var(--font-fraunces)] text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground">Request your $49 beta setup</h2>
          <p className="mt-4 text-base text-muted leading-relaxed max-w-lg mx-auto">Tell us about your grants first. If your documents are a good fit, we&apos;ll email you a payment link and set up your tracker manually.</p>
          <p className="mt-3 text-sm text-primary font-medium">No payment is required to request a setup spot.</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-background border border-border rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
          <input type="hidden" name="subject" value="New GrantReportKit setup request" />
          <input type="hidden" name="from_name" value="GrantReportKit Website" />
          <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" tabIndex={-1} />

          <div>
            <label htmlFor="org_name" className="block text-sm font-medium text-foreground mb-1.5">Organization name <span className="text-red-500" aria-label="required">*</span></label>
            <input type="text" id="org_name" name="org_name" required className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200" placeholder="e.g. Sunrise Community Foundation" />
          </div>

          <div>
            <label htmlFor="contact_name" className="block text-sm font-medium text-foreground mb-1.5">Your name <span className="text-red-500" aria-label="required">*</span></label>
            <input type="text" id="contact_name" name="contact_name" required className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200" placeholder="e.g. Maria Johnson" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email address <span className="text-red-500" aria-label="required">*</span></label>
            <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200" placeholder="maria@sunrisefoundation.org" />
          </div>

          <div>
            <label htmlFor="role" className="block text-sm font-medium text-foreground mb-1.5">Your role <span className="text-red-500" aria-label="required">*</span></label>
            <select id="role" name="role" required className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 cursor-pointer" defaultValue="">
              <option value="" disabled>Select your role</option>
              {ROLE_OPTIONS.map((role) => (<option key={role} value={role}>{role}</option>))}
            </select>
          </div>

          <div>
            <label htmlFor="grant_count" className="block text-sm font-medium text-foreground mb-1.5">How many active grants are you managing? <span className="text-red-500" aria-label="required">*</span></label>
            <select id="grant_count" name="grant_count" required className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 cursor-pointer" defaultValue="">
              <option value="" disabled>Select a range</option>
              {GRANT_COUNT_OPTIONS.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
            </select>
          </div>

          <fieldset>
            <legend className="block text-sm font-medium text-foreground mb-2.5">What do you currently use to track grant deadlines?</legend>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {TRACKING_OPTIONS.map((option) => (
                <label key={option} className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border cursor-pointer transition-all duration-200 ${trackingMethods.includes(option) ? "border-primary/40 bg-primary-light/40" : "border-border hover:border-primary/20"}`}>
                  <input type="checkbox" checked={trackingMethods.includes(option)} onChange={() => handleCheckbox(option)} className="w-4 h-4 rounded border-border text-primary focus:ring-primary/30 cursor-pointer" />
                  <span className="text-sm text-foreground">{option}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="urgency" className="block text-sm font-medium text-foreground mb-1.5">Are any grant reports due in the next 60 days? <span className="text-red-500" aria-label="required">*</span></label>
            <select id="urgency" name="urgency" required className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 cursor-pointer" defaultValue="">
              <option value="" disabled>Select an option</option>
              {URGENCY_OPTIONS.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
            </select>
          </div>

          <div>
            <label htmlFor="documents_ready" className="block text-sm font-medium text-foreground mb-1.5">Do you have award letters or grant agreements ready? <span className="text-red-500" aria-label="required">*</span></label>
            <select id="documents_ready" name="documents_ready" required className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 cursor-pointer" defaultValue="">
              <option value="" disabled>Select an option</option>
              {DOCUMENTS_READY_OPTIONS.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
            </select>
          </div>

          <div>
            <label htmlFor="biggest_problem" className="block text-sm font-medium text-foreground mb-1.5">What is the biggest grant deadline problem you want help with? <span className="text-red-500" aria-label="required">*</span></label>
            <textarea id="biggest_problem" name="biggest_problem" required rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200 resize-y" placeholder="Example: We have 6 active grants and report dates are split between PDFs, emails, and a spreadsheet nobody trusts." />
          </div>

          <div className="flex items-start gap-3">
            <input type="checkbox" id="consent" name="consent" required className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary/30 cursor-pointer shrink-0" />
            <label htmlFor="consent" className="text-sm text-muted leading-relaxed cursor-pointer">I understand this is a manual beta setup request. GrantReportKit is an organization and reminder service, not legal, financial, or compliance advice. <span className="text-red-500" aria-label="required">*</span></label>
          </div>

          {status === "error" && (
            <div className="p-4 rounded-xl bg-red-50 border border-red-200" role="alert">
              <p className="text-sm text-red-800">Something went wrong. Please email{" "}<a href={`mailto:${SUPPORT_EMAIL}?subject=GrantReportKit setup request`} className="underline font-medium">{SUPPORT_EMAIL}</a>{" "}with the subject &ldquo;GrantReportKit setup request.&rdquo;</p>
            </div>
          )}

          <button type="submit" disabled={status === "loading"} className="w-full inline-flex items-center justify-center px-6 py-4 text-base font-semibold text-white bg-primary rounded-xl hover:bg-primary-dark transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed">
            {status === "loading" ? (<><svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" aria-hidden="true"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>Sending request&hellip;</>) : ("Send my setup request")}
          </button>

          <p className="text-xs text-muted text-center leading-relaxed pt-1">Please do not upload grant documents yet. If your request is a good fit, we&apos;ll email you next steps and a secure way to send your award letters.</p>
        </form>
      </div>
    </section>
  );
}
