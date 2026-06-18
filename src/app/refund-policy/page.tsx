import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Refund Policy — GrantReportKit",
  description: "GrantReportKit refund policy for the manual beta setup service.",
};

export default function RefundPolicyPage() {
  return (
    <LegalLayout title="Refund Policy" lastUpdated="June 2026">
      <section>
        <h2 className="text-lg font-semibold text-foreground">One-time manual service</h2>
        <p>
          The GrantReportKit beta setup is a one-time manual service priced at
          $49. Payment is collected only after we confirm your grants are a good
          fit for the setup. There is no subscription or recurring charge.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">When we issue a refund</h2>
        <p>
          If we cannot find useful grant deadline, reporting requirement,
          deliverable, financial data item, impact/program data item, or
          stewardship requirement information in the documents you share after
          payment, we will refund the full $49 setup fee.
        </p>
        <p>
          This applies when the documents you provide do not contain
          identifiable report due dates, renewal dates, reporting requirements,
          deliverables, required data items, or stewardship requirements that we
          can extract into a meaningful report-readiness kit.
        </p>
        <p>
          If we decline or cancel a setup after payment because the documents
          are outside the scope of the beta, unclear, incomplete, too complex,
          or not a good fit, we will refund the setup fee.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">How refunds are processed</h2>
        <p>
          Approved refunds will be processed through the original payment method
          where possible. Refund timing may depend on the payment processor and
          financial institution.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">After delivery</h2>
        <p>
          Once the deadline tracker, reporting requirements checklist, reminder
          schedule, and summary have been delivered to you, refund requests are
          handled on a case-by-case basis. If you believe the delivered materials
          do not reflect the information in your documents, please reach out and
          we will work with you to resolve the issue.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">How to request a refund</h2>
        <p>
          To request a refund, email{" "}
          <a href="mailto:setup@grantreportkit.com" className="text-primary underline decoration-primary/30 hover:decoration-primary transition-colors duration-200">
            setup@grantreportkit.com
          </a>{" "}
          and include the organization name, the email used for payment, and a
          short description of the issue.
        </p>
      </section>
    </LegalLayout>
  );
}
