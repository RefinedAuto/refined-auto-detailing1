import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Book Mobile Detailing",
  description:
    "Call, text or email Refined Auto Detailing to book mobile car detailing in Marysville, Everett, Lynnwood and across Snohomish County, WA.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
