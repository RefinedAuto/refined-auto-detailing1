import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Kept out of search results until real articles are published — a page of
// links to articles that don't exist hurts rankings more than no blog at all.
export const metadata: Metadata = {
  title: "Detailing Tips & Guides — Coming Soon",
  description: "Auto detailing tips and guides from Refined Auto Detailing are coming soon.",
  robots: { index: false, follow: true },
};

const upcoming = [
  "How Often Should You Get Your Car Detailed?",
  "Ceramic Coating vs. Wax vs. Paint Sealant",
  "How Professionals Remove Pet Hair From Cars",
  "Mobile Detailing vs. a Detail Shop",
  "Tesla Interior Detailing: What You Need to Know",
  "How to Maintain Your Car Between Details",
];

export default function BlogPage() {
  return (
    <div className="bg-dark-950 pt-32">
      <section className="section-padding">
        <div className="container-custom max-w-3xl text-center">
          <p className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4">Blog</p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
            Detailing Tips &amp; Guides — <span className="text-gradient-gold">Coming Soon</span>
          </h1>
          <p className="text-white/70 text-lg mb-12">
            We&apos;re writing practical guides on keeping your vehicle clean in the Pacific Northwest. Here&apos;s
            what&apos;s on the way:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-12">
            {upcoming.map((title) => (
              <li key={title} className="glass rounded-2xl p-6 text-white font-semibold">
                {title}
              </li>
            ))}
          </ul>
          <Link href="/services" className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 font-semibold">
            Browse our detailing services <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
