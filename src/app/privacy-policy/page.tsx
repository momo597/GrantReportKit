import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — GrantReportKit",
  description: "How GrantReportKit collects and uses your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="June 2026">
      <section>
        <h2 className="text-lg font-semibold text-foreground">What we collect</h2>
        <p>
          When you submit the setup request form on our website, we collect the
          information you provide, including your organization name, contact
          name, email address, role, number of active grants, current tracking
          methods, deadline urgency, document readiness, and the description of
          your grant deadline problem.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">How we use your information</h2>
        <p>
          We use the information you submit only to review your setup request,
          determine whether your grants are a good fit for our manual beta
          service, respond to your inquiry, and deliver the grant deadline
          tracker setup if you proceed.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Document sharing</h2>
        <p>
          Please do not send grant award letters or agreements until we provide
          specific instructions for doing so. If documents are later shared with
          us, they are used only to complete the requested deadline tracker
          setup. We do not share, publish, or use your documents for any other
          purpose.
        </p>
        <p className="mt-3 p-3 rounded-xl bg-accent-light border border-accent/15 text-sm">
          <strong>Important:</strong> Please do not include confidential grant
          documents, financial files, donor lists, employee information,
          beneficiary/client personal information, or full grant agreements in
          the initial setup request form. If your request is a good fit, we will
          provide next steps for sharing documents.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">We do not sell your information</h2>
        <p>
          We do not sell, rent, or trade your personal information or
          organization data to third parties.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Third-party services</h2>
        <p>
          Our setup request form is processed through Web3Forms, a third-party
          form submission service. Your form data passes through Web3Forms so it
          can be delivered to us. We use this service only to receive and manage
          setup requests.
        </p>
        <p>
          We do not use analytics or tracking cookies on this website.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">How long we keep information</h2>
        <p>
          We keep setup request information only as long as needed to review your
          request, respond to you, provide the requested setup service, maintain
          basic business records, or comply with legal obligations. If you do not
          proceed with the service, we may delete or archive your request
          information after it is no longer needed.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">How we protect information</h2>
        <p>
          We take reasonable steps to protect the information submitted to us.
          However, no website, email, or online form system can guarantee perfect
          security. Please do not submit sensitive documents or confidential
          personal information through the initial request form.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Access, correction, and deletion</h2>
        <p>
          You may request access to, correction of, or deletion of the personal
          information you submitted, subject to legal, security, or operational
          limits. A business contact email will be added once active. Until then,
          you can contact us through the setup request form on the homepage.
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground">Privacy contact</h2>
        <p>
          Founder / person responsible for personal information. A business
          contact email will be added once active. In the meantime, you can
          reach us through the setup request form on the homepage.
        </p>
      </section>
    </LegalLayout>
  );
}
