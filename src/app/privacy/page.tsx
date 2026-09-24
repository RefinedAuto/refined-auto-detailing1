import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/legal/LegalPage";
import { COMPANY } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Refined Auto Detailing collects, uses, shares and protects your personal information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" path="/privacy" updated="September 24, 2026">
      <p>
        This Privacy Policy explains how {COMPANY.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
        collects, uses, shares and protects information about you when you visit {COMPANY.website} (the
        &ldquo;Site&rdquo;), request a quote, book an appointment, or otherwise use our mobile auto detailing
        services. By using the Site or our services, you agree to this policy.
      </p>

      <h2>1. Information We Collect</h2>
      <h3>Information you give us</h3>
      <ul>
        <li>
          <strong>Contact details</strong> — name, email address and phone number when you submit our quote
          builder or contact form, call, text or email us.
        </li>
        <li>
          <strong>Vehicle and service details</strong> — vehicle type, year, make and model, services and add-ons
          selected, and any notes or messages you include.
        </li>
        <li>
          <strong>Service location</strong> — the address where you&apos;d like your vehicle detailed.
        </li>
        <li>
          <strong>Payment information</strong> — when you pay, payment is processed by our payment provider. We do
          not store full card numbers.
        </li>
        <li>
          <strong>Photos</strong> — photos you send us, and before/after photos we take of your vehicle.
        </li>
      </ul>
      <h3>Information collected automatically</h3>
      <ul>
        <li>
          <strong>Analytics</strong> — we may use privacy-focused, cookie-free analytics to understand aggregate usage
          (for example, pages viewed, referring site, device type and approximate country). This data is not used
          to identify you personally.
        </li>
        <li>
          <strong>Server logs</strong> — our hosting provider automatically records technical information such as IP
          address, browser type and the time of your request for security and reliability.
        </li>
      </ul>

      <h2>2. Cookies</h2>
      <p>
        Our Site does not use advertising cookies or cross-site tracking. Third-party websites we link to — such as
        our online booking page, Instagram and Facebook — have their own cookie and privacy practices, which we
        don&apos;t control.
      </p>

      <h2>3. How We Use Your Information</h2>
      <ul>
        <li>To respond to your inquiries and provide quotes</li>
        <li>To schedule, perform and follow up on services</li>
        <li>To process payments and keep business records</li>
        <li>To send appointment confirmations, reminders and service-related messages</li>
        <li>To improve our Site and services</li>
        <li>To protect against fraud, spam and abuse, and to comply with the law</li>
      </ul>

      <h2>4. Phone Calls, Text Messages and Email</h2>
      <p>
        When you submit a form or contact us, you agree that we may reply by phone, text message or email about
        your request and your appointment. We will only send marketing or promotional text messages if you have
        separately given us your express consent, and consent is never a condition of purchase. You can opt out of
        text messages at any time by replying <strong>STOP</strong>, and out of emails by replying to ask us to
        stop. Message and data rates may apply.
      </p>

      <h2>5. How We Share Information</h2>
      <p>
        <strong>We do not sell your personal information, and we do not share it for targeted advertising.</strong>{" "}
        We share information only as needed to run our business:
      </p>
      <ul>
        <li>
          <strong>Service providers</strong> who process information on our behalf — for example, our website host,
          form-processing provider (Formspree), online scheduling provider (Setmore), email provider and payment
          processor.
        </li>
        <li>
          <strong>Legal reasons</strong> — when required by law, subpoena or court order, or to protect our rights,
          safety or property or that of others.
        </li>
        <li>
          <strong>Business transfers</strong> — if our business is sold or transferred, customer information may be
          transferred to the new owner, subject to this policy.
        </li>
      </ul>

      <h2>6. Vehicle Photos</h2>
      <p>
        We may photograph vehicles before and after service to document condition and results. We may use photos
        of vehicles (but not of you) on our Site and social media. If you&apos;d prefer photos of your vehicle not
        be used, tell us at any time and we will not publish them or will remove them.
      </p>

      <h2>7. Data Retention</h2>
      <p>
        We keep personal information only as long as needed for the purposes above, including to provide services,
        keep required business and tax records, and resolve disputes. When it&apos;s no longer needed, we delete it
        or make it anonymous.
      </p>

      <h2>8. Security</h2>
      <p>
        We use reasonable administrative and technical safeguards — including encrypted (HTTPS) connections — to
        protect your information. No method of transmission or storage is completely secure, so we can&apos;t
        guarantee absolute security. If a security breach affecting your personal information occurs, we will
        notify you as required by Washington law (RCW 19.255.010).
      </p>

      <h2>9. Your Choices and Rights</h2>
      <p>Regardless of where you live, you may ask us to:</p>
      <ul>
        <li>Tell you what personal information we have about you</li>
        <li>Correct inaccurate information</li>
        <li>Delete your information (subject to records we&apos;re legally required to keep)</li>
        <li>Stop sending you marketing communications</li>
      </ul>
      <p>
        To make a request, contact us using the details below. We&apos;ll verify your request and respond within 30
        days. We will not discriminate against you for exercising these rights. Because we don&apos;t sell or share
        personal information for advertising, browser &ldquo;Global Privacy Control&rdquo; and &ldquo;Do Not
        Track&rdquo; signals require no further action on our Site.
      </p>

      <h2>10. Children&apos;s Privacy</h2>
      <p>
        Our Site and services are intended for adults. We do not knowingly collect personal information from
        children under 13. If you believe a child has sent us information, contact us and we will delete it.
      </p>

      <h2>11. Third-Party Links</h2>
      <p>
        Our Site links to third-party websites, including our booking page and social media profiles. Their privacy
        practices are governed by their own policies.
      </p>

      <h2>12. Changes to This Policy</h2>
      <p>
        We may update this policy from time to time. The &ldquo;Last updated&rdquo; date above shows when it last
        changed. Significant changes will be highlighted on this page.
      </p>

      <h2>13. Contact Us</h2>
      <p>
        {COMPANY.name}
        <br />
        {COMPANY.city}, {COMPANY.region}
        <br />
        Email: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
        <br />
        Phone: <a href={`tel:${COMPANY.phoneHref}`}>{COMPANY.phone}</a>
      </p>
      <p>
        See also our <Link href="/terms">Terms of Service</Link> and{" "}
        <Link href="/accessibility">Accessibility Statement</Link>.
      </p>
    </LegalPage>
  );
}
