import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — GrantReportKit",
  description: "Terms and conditions for using the GrantReportKit manual beta setup service.",
};

export default function TermsOfServicePage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="June 2026">
      <section>
        <h2 className="text-lg font-semibold text-foreground">About the service</h2>
        <p>
          GrantReportKit is a manual beta setup service. We help small nonprofits
          organize grant report deadlines and reminder dates by extracting
          information from award letters and grant agreements you share with us.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">What we are not</h2>
        <p>
          GrantReportKit is not legal advice, financial advice, accounting
          services, or compliance guidance. We provide an organization and
          reminder service only. You are responsible for confirming all final
          reporting requirements, deadlines, and deliverables directly with your
          funders.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Scope of the beta setup</h2>
        <p>
          The beta setup includes a deadline tracker spreadsheet, reminder
          schedule, board-friendly summary, and optional Google Calendar import
          file — all based on up to 5 award letters or grant agreements unless
          otherwise agreed. The setup fee is $49 one-time unless otherwise
          agreed.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Payment and refunds</h2>
        <p>
          The beta setup fee is a one-time payment unless otherwise agreed.
          Payment is only requested after we review your setup request and
          determine that your grants appear to be a good fit for the beta
          service. Refunds are handled according to our{" "}
          <a href="/refund-policy" className="text-primary underline decoration-primary/30 hover:decoration-primary transition-colors duration-200">
            Refund Policy
          </a>.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Delivery timeline</h2>
        <p>
          After payment and document access, we aim to deliver the setup within
          3–5 business days. Timelines may vary depending on document
          complexity, volume, clarity, and our current beta capacity. If we
          expect a delay, we will let you know.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Document handling</h2>
        <p>
          Any documents you share are used only to complete the requested setup.
          Please do not send grant award letters, grant agreements, financial
          files, donor lists, employee information, or beneficiary/client
          personal information through the initial setup request form. If your
          request is a good fit, we will provide next steps for sharing
          documents.
        </p>
        <p>
          Please review our{" "}
          <a href="/privacy-policy" className="text-primary underline decoration-primary/30 hover:decoration-primary transition-colors duration-200">
            Privacy Policy
          </a>{" "}
          for more information about how submitted information and documents are
          handled.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Accuracy of information</h2>
        <p>
          We do our best to accurately extract dates, deadlines, and reporting
          requirements from the documents you provide. However, we extract the
          dates and requirements we can find, and we do not guarantee
          completeness or accuracy. You should review the final tracker we
          deliver and verify all information against your original grant
          agreements.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">No guaranteed outcome</h2>
        <p>
          GrantReportKit helps organize grant reporting information and reminder
          dates, but we do not guarantee that using the tracker will prevent
          missed deadlines, satisfy funder requirements, or ensure compliance.
          You are responsible for reviewing the tracker and confirming all final
          requirements with your funders.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Right to decline or cancel</h2>
        <p>
          We may decline or cancel a setup request if the documents are outside
          the scope of the beta, unclear, incomplete, too complex, or not a good
          fit for the service. If payment has already been made and we decline
          the setup, we will refund the setup fee.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Your responsibilities</h2>
        <p>
          You are responsible for providing accurate documents and confirming
          that the information in your tracker matches your funder requirements.
          You should not rely solely on GrantReportKit for compliance with grant
          reporting obligations.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Changes to these terms</h2>
        <p>
          We may update these terms as the service evolves. The date at the top
          of this page indicates when these terms were last revised.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Contact</h2>
        <p>
          A business contact email will be added once active. In the meantime,
          you can reach us through the setup request form on the homepage.
        </p>
      </section>
    </LegalLayout>
  );
}
