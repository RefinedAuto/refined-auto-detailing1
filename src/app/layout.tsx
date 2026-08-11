import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import MobileCTABar from "@/components/layout/MobileCTABar";
import { SITE_URL } from "@/lib/utils";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Refined Auto Detailing | Premium Mobile Detailing in Snohomish County, WA",
    template: "%s | Refined Auto Detailing",
  },
  description:
    "Premium mobile auto detailing serving Snohomish County, WA. We come to you — your home, office, or any location. Interior detailing, exterior detailing, ceramic coating & more. Book online today.",
  keywords: [
    "mobile detailing Snohomish County",
    "mobile detailing Marysville WA",
    "mobile detailing Everett WA",
    "mobile detailing Lynnwood WA",
    "auto detailing near me",
    "car detailing Snohomish County",
    "interior car detailing",
    "exterior car detailing",
    "ceramic coating Snohomish County",
    "mobile car wash Marysville",
  ],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": SITE_URL,
              name: "Refined Auto Detailing",
              description:
                "Premium mobile auto detailing service serving Snohomish County, Washington. Specializing in interior detailing, exterior detailing, paint correction, and ceramic coating.",
              url: SITE_URL,
              telephone: "(425) 386-5190",
              email: "detailing.refinedauto@gmail.com",
              priceRange: "$$",
              image: `${SITE_URL}/images/logo.png`,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Marysville",
                addressRegion: "WA",
                postalCode: "98270",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 48.0513,
                longitude: -122.1771,
              },
              areaServed: [
                { "@type": "City", name: "Marysville" },
                { "@type": "City", name: "Everett" },
                { "@type": "City", name: "Lynnwood" },
                { "@type": "City", name: "Mukilteo" },
                { "@type": "City", name: "Mill Creek" },
                { "@type": "County", name: "Snohomish County" },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Auto Detailing Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Detailing" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Exterior Detailing" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full Detail Package" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paint Correction" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ceramic Coating" } },
                ],
              },
              openingHours: "Mo-Su 07:00-20:00",
              sameAs: [
                "https://instagram.com/refinedautodetailing",
                "https://facebook.com/refinedautodetailing",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-dark-950 text-white antialiased pb-[72px] lg:pb-0">
        <Navigation />
        <main>{children}</main>
        <Footer />
        <MobileCTABar />
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
