"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is this software?",
    answer:
      "Not yet. GrantReportKit is currently a manual beta setup service. We are validating the workflow before building a full product.",
  },
  {
    question: "What do I send you?",
    answer:
      "Start by filling out the setup request form. After we review your request, we\u2019ll send instructions for sharing your award letters or grant agreements. Please do not upload or send documents through the initial form.",
  },
  {
    question: "What if my documents do not include useful reporting information?",
    answer:
      "If we cannot find useful reporting deadlines, deliverables, required data items, or stewardship requirements in your documents after payment, we refund the setup fee.",
  },
  {
    question: "Do you write grant reports?",
    answer:
      "No. We do not write or submit grant reports. We organize reporting deadlines, deliverables, required financial and impact data items to collect, owner suggestions, and reminder dates based on the documents you provide.",
  },
  {
    question: "Is this legal or compliance advice?",
    answer:
      "No. GrantReportKit is a grant reporting readiness setup service, not legal, financial, accounting, or compliance advice. You should always confirm final requirements with your funder.",
  },
  {
    question: "How do I receive the report-readiness kit?",
    answer:
      "We deliver the spreadsheet, reporting requirements checklist, reminder schedule, and board-friendly summary by email within 3\u20135 business days after payment and document access.",
  },
  {
    question: "How many grants are included?",
    answer:
      "The beta setup includes up to 5 award letters or grant agreements. Need more? Mention it in the setup request form and we can discuss.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        className="w-full flex items-center justify-between py-4 sm:py-5 text-left cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-lg min-h-[44px]"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-sm sm:text-base font-medium text-foreground pr-3 sm:pr-4 group-hover:text-primary transition-colors duration-200">
          {question}
        </span>
        <div className={`w-7 h-7 rounded-full border border-border flex items-center justify-center shrink-0 transition-all duration-200 ${open ? "bg-primary border-primary" : "group-hover:border-primary/40"}`}>
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "text-white rotate-180" : "text-muted"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      {open && (
        <div className="pb-5">
          <p className="text-sm text-muted leading-relaxed pr-8 sm:pr-12">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-14 sm:py-20 lg:py-28 bg-card">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-[family-name:var(--font-fraunces)] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
            Frequently asked questions
          </h2>
        </div>

        <div className="bg-background border border-border rounded-2xl px-4 sm:px-6 md:px-8">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
