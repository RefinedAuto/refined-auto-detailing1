import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { COMPANY } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Refined Auto Detailing is committed to making our website accessible to everyone, including people with disabilities.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <LegalPage title="Accessibility Statement" path="/accessibility" updated="September 24, 2026">
      <p>
        {COMPANY.name} is committed to making our website usable by everyone, including people with disabilities.
        We aim to conform to the{" "}
        <a href="https://www.w3.org/TR/WCAG21/" target="_blank" rel="noopener noreferrer">
          Web Content Accessibility Guidelines (WCAG) 2.1, Level AA
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        , the standard most commonly used to measure website accessibility under the Americans with Disabilities
        Act.
      </p>

      <h2>What We&apos;ve Done</h2>
      <ul>
        <li>Text and buttons meet WCAG AA color-contrast requirements</li>
        <li>The whole site can be used with a keyboard, with visible focus indicators and a &ldquo;Skip to main content&rdquo; link</li>
        <li>Form fields have labels, and errors are announced to screen readers</li>
        <li>Meaningful images have text alternatives; decorative images are hidden from assistive technology</li>
        <li>Pages use a logical heading structure and landmarks</li>
        <li>Animations are reduced when your device&apos;s &ldquo;reduce motion&rdquo; setting is on</li>
        <li>Pages work when zoomed to 200% and on small screens</li>
      </ul>

      <h2>Third-Party Content</h2>
      <p>
        Online booking is handled by a third-party scheduling service, and we link to our social media profiles. We
        don&apos;t control the accessibility of those sites. If you have trouble with them, you can always book or
        ask a question by phone, text or email instead.
      </p>

      <h2>Feedback and Assistance</h2>
      <p>
        We welcome your feedback. If you run into an accessibility barrier on our site, or need information in a
        different format, please contact us and we&apos;ll help — including booking your service for you directly.
      </p>
      <ul>
        <li>
          Phone or text: <a href={`tel:${COMPANY.phoneHref}`}>{COMPANY.phone}</a>
        </li>
        <li>
          Email: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
        </li>
      </ul>
      <p>We aim to respond to accessibility feedback within 2 business days.</p>

      <h2>Ongoing Effort</h2>
      <p>
        Accessibility is an ongoing effort. We review the site when we make changes and will continue to improve
        it.
      </p>
    </LegalPage>
  );
}
