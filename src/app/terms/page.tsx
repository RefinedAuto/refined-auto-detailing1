import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/legal/LegalPage";
import { COMPANY } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms for booking and receiving mobile auto detailing services from Refined Auto Detailing, and for using our website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" path="/terms" updated="September 24, 2026">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) apply when you use {COMPANY.website} (the &ldquo;Site&rdquo;)
        or book or receive services from {COMPANY.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
        By booking a service or using the Site, you agree to these Terms. If you don&apos;t agree, please don&apos;t
        book or use the Site.
      </p>

      <h2>1. Services, Pricing and Estimates</h2>
      <ul>
        <li>
          Prices on the Site are <strong>starting prices</strong> by vehicle size. The final price depends on the
          vehicle&apos;s actual size and condition.
        </li>
        <li>
          Estimates from our online quote builder, by phone or by text are <strong>not binding</strong> until
          confirmed after we see the vehicle. If the condition requires more work than expected — for example heavy
          pet hair, excessive dirt, mold, biohazards or stains — we&apos;ll tell you the additional cost{" "}
          <strong>before</strong> doing that work, and you may decline it.
        </li>
        <li>
          Paint correction and some other services are quoted only after an in-person inspection.
        </li>
        <li>We may decline or stop a service if conditions are unsafe or unsanitary.</li>
      </ul>

      <h2>2. Booking, Cancellations and No-Shows</h2>
      <ul>
        <li>Please give at least <strong>24 hours&apos; notice</strong> to cancel or reschedule.</li>
        <li>
          Late cancellations, no-shows, or appointments we can&apos;t perform because the vehicle isn&apos;t
          accessible may be subject to a cancellation fee, which will be disclosed when you book.
        </li>
        <li>
          We may reschedule because of rain, extreme temperatures, high winds or other conditions that would affect
          quality or safety. We&apos;ll contact you as early as possible and there is no charge to you.
        </li>
      </ul>

      <h2>3. Your Responsibilities</h2>
      <ul>
        <li>
          <strong>Remove valuables and personal items</strong> before your appointment. We are not responsible for
          items left in the vehicle.
        </li>
        <li>
          Provide a safe, legal place to work. If the location is not your property (for example an apartment
          complex, HOA or workplace), you&apos;re responsible for getting permission.
        </li>
        <li>Make sure we can access the vehicle (keys or unlocked) at the scheduled time.</li>
        <li>
          Tell us before we start about known issues — loose or damaged trim, prior paint or body work, aftermarket
          parts or wraps, electrical problems, or damaged glass or interior components.
        </li>
        <li>You confirm you own the vehicle or are authorized to have it serviced.</li>
      </ul>

      <h2>4. Pre-Existing Conditions and Limits of Service</h2>
      <p>
        We may inspect and photograph the vehicle before starting. We are not responsible for pre-existing damage
        or for conditions that cleaning can reveal or aggravate, including:
      </p>
      <ul>
        <li>Chips, scratches, dents, and failing, thin or previously repainted clear coat</li>
        <li>Loose, brittle, faded or sun-damaged trim, emblems, seals, headliners or upholstery</li>
        <li>Aftermarket parts, wraps, tints and non-factory finishes</li>
        <li>Water leaks and electrical issues</li>
      </ul>
      <p>
        We make every reasonable effort, but we cannot guarantee complete removal of all stains, odors, scratches,
        swirl marks, water spots or pet hair. Results depend on the vehicle&apos;s condition and materials.
      </p>

      <h2>5. Paint Correction and Ceramic Coatings</h2>
      <ul>
        <li>
          Paint correction removes a small amount of clear coat. Scratches that go through the clear coat may be
          reduced but not fully removed.
        </li>
        <li>
          Ceramic coating durability (1, 3 or 4 years) is an expected lifespan with proper care — not a warranty.
          Lifespan depends on washing methods, weather, storage and use. Coatings do not prevent rock chips,
          scratches, dents or etching from neglected contaminants.
        </li>
        <li>
          Follow the aftercare instructions we provide, including the initial cure period. Failure to do so can
          reduce performance.
        </li>
      </ul>

      <h2>6. Satisfaction Guarantee</h2>
      <p>
        If you&apos;re not satisfied with any part of the work we performed, contact us{" "}
        <strong>within 24 hours</strong> of service completion (photos help). We&apos;ll return to correct the issue
        at no additional charge. The guarantee covers re-service of the work performed; it does not cover
        conditions described in Section 4 or issues arising after the vehicle has been driven in, or exposed to,
        new dirt or weather.
      </p>

      <h2>7. Damage Claims</h2>
      <p>
        If you believe we damaged your vehicle or property, tell us <strong>within 24 hours</strong> of service
        completion and before any repair, so we can inspect it. If we determine the damage was directly caused by
        our negligence, we will — at our option — repair it or pay the reasonable cost of repair.
      </p>

      <h2>8. Payment</h2>
      <p>
        Payment is due when the service is complete unless we agree otherwise in writing. We accept the payment
        methods listed at booking. Maintenance Plan visits are charged per visit at the plan rate in effect at the
        time.
      </p>

      <h2>9. Photos of Your Vehicle</h2>
      <p>
        You agree that we may photograph your vehicle to document its condition and our work, and use those photos
        (not photos of you) in our marketing. Tell us any time if you don&apos;t want photos of your vehicle used,
        and we&apos;ll honor that. See our <Link href="/privacy">Privacy Policy</Link>.
      </p>

      <h2>10. Communications</h2>
      <p>
        By submitting a form or booking, you agree that we may contact you by phone, text or email about your
        request and appointments. Marketing messages are sent only with your separate consent. Reply STOP to opt out
        of texts.
      </p>

      <h2>11. Use of the Site</h2>
      <ul>
        <li>
          We work to keep the Site accurate, but content, prices and availability may change without notice and may
          contain errors. If a price on the Site is wrong, we&apos;ll tell you before performing the service.
        </li>
        <li>
          Photos, text, logos and design on the Site are owned by or licensed to us and may not be copied or used
          without permission.
        </li>
        <li>
          Don&apos;t misuse the Site — for example by submitting false information, spam, or attempting to interfere
          with its operation.
        </li>
        <li>Links to third-party sites are provided for convenience; we aren&apos;t responsible for their content.</li>
      </ul>

      <h2>12. Disclaimers and Limitation of Liability</h2>
      <p>
        Except as expressly stated in these Terms, the Site and our services are provided &ldquo;as is&rdquo;
        without warranties of any kind, to the fullest extent permitted by law. To the fullest extent permitted by
        law, we are not liable for indirect, incidental, special or consequential damages (such as loss of use of a
        vehicle or rental costs), and our total liability for any claim relating to a service is limited to the
        amount you paid for that service, except where the damage was caused by our negligence as described in
        Section 7. Nothing in these Terms limits any rights you have under Washington law that cannot be waived.
      </p>

      <h2>13. Governing Law and Disputes</h2>
      <p>
        These Terms are governed by the laws of the State of Washington. We encourage you to contact us first — most
        concerns can be resolved quickly. Any dispute that can&apos;t be resolved informally will be brought in the
        state or federal courts located in Snohomish County, Washington, or in small claims court where eligible.
      </p>

      <h2>14. Changes and Severability</h2>
      <p>
        We may update these Terms from time to time; the version in effect when you book applies to that booking.
        If any part of these Terms is found unenforceable, the rest remains in effect.
      </p>

      <h2>15. Contact Us</h2>
      <p>
        {COMPANY.name}
        <br />
        {COMPANY.city}, {COMPANY.region}
        <br />
        Email: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
        <br />
        Phone: <a href={`tel:${COMPANY.phoneHref}`}>{COMPANY.phone}</a>
      </p>
    </LegalPage>
  );
}
