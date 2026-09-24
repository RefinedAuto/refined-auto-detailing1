import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import MobileCTABar from "@/components/layout/MobileCTABar";
import MotionProvider from "@/components/layout/MotionProvider";
import JsonLd from "@/components/seo/JsonLd";
import { AREAS } from "@/lib/areas";
import { BUSINESS_ID } from "@/lib/seo";
import { SERVICES } from "@/lib/services";
import { COMPANY, SITE_URL } from "@/lib/utils";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mobile Car Detailing in Snohomish County, WA | Refined Auto Detailing",
    template: "%s | Refined Auto Detailing",
  },
  description:
    "Premium mobile auto detailing serving Snohomish County, WA. We come to you — your home, office, or any location. Interior detailing, exterior detailing, ceramic coating & more. Book online today.",
  authors: [{ name: "Refined Auto Detailing" }],
  creator: "Refined Auto Detailing",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Refined Auto Detailing",
    title: "Refined Auto Detailing | Premium Mobile Detailing — We Come to You",
    description:
      "Experience luxury-grade auto detailing at your doorstep. Serving Snohomish County, WA. Get a free instant quote.",
    images: [
      {
        url: "/images/og-image.jpg",
        type: "image/jpeg",
        width: 1200,
        height: 630,
        alt: "Refined Auto Detailing — Premium Mobile Detailing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refined Auto Detailing | Premium Mobile Detailing",
    description: "Premium mobile auto detailing in Snohomish County, WA.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
};

/**
 * The one LocalBusiness node for the site; service and city pages reference
 * it by @id. Mobile detailers are "service-area businesses", so no street
 * address is published — only the base city.
 */
const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "@id": BUSINESS_ID,
  name: COMPANY.name,
  description:
    "Mobile auto detailing serving Snohomish County, Washington — interior and exterior detailing, full details, paint correction and ceramic coating at your home or office.",
  url: SITE_URL,
  telephone: COMPANY.phoneHref,
  email: COMPANY.email,
  priceRange: "$$",
  image: `${SITE_URL}/images/og-image.jpg`,
  logo: `${SITE_URL}/images/logo.png`,
  address: {
    "@type": "PostalAddress",
    addressLocality: COMPANY.city,
    addressRegion: COMPANY.region,
    postalCode: COMPANY.postalCode,
    addressCountry: "US",
  },
  areaServed: [
    ...AREAS.map((a) => ({ "@type": "City", name: `${a.city}, WA` })),
    { "@type": "AdministrativeArea", name: "Snohomish County, WA" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Mobile Auto Detailing Services",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, url: `${SITE_URL}/services/${s.slug}` },
    })),
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "07:00",
    closes: "20:00",
  },
  sameAs: [COMPANY.instagram, COMPANY.facebook],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-dark-950 text-white antialiased pb-[72px] lg:pb-0">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold-500 focus:px-6 focus:py-3 focus:font-bold focus:text-black"
        >
          Skip to main content
        </a>
        <MotionProvider>
          <Navigation />
          <main id="main-content" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
          <MobileCTABar />
        </MotionProvider>
        <JsonLd data={businessJsonLd} />
        <Toaster
          position="bottom-right"
          mobileOffset={{ bottom: "88px" }}
          toastOptions={{
            style: {
              background: "#111111",
              color: "#ffffff",
              border: "1px solid rgba(16, 108, 170, 0.3)",
            },
          }}
        />
      </body>
    </html>
  );
}
