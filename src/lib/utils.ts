import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(amount);
}

/**
 * Canonical origin, used for metadata, sitemap, robots and schema.org.
 * Keep this as the single source of truth — hardcoding it elsewhere is how
 * the site previously ended up advertising a domain that didn't resolve.
 */
export const SITE_URL = "https://detailingrefinedauto.com";

export const COMPANY = {
  name: "Refined Auto Detailing",
  phone: "(425) 386-5190",
  phoneHref: "+14253865190",
  email: "detailing.refinedauto@gmail.com",
  website: "detailingrefinedauto.com",
  bookingUrl: "https://refinedautodetailing.setmore.com",
  address: "Snohomish County, WA",
  /** Base city for schema.org — a service-area business, so no street address is published. */
  // Must match the Google Business Profile, which lists Lynnwood.
  city: "Lynnwood",
  region: "WA",
  postalCode: "98036",
  serviceArea: "Snohomish County & King County, Washington",
  // Keep in sync with the Google Business Profile hours.
  hours: "Mon–Sat, 6 AM – 8 PM",
  hoursShort: "Open Monday–Saturday",
  /** Google Business Profile — rating and count checked 2026-09-24; update as reviews come in. */
  google: {
    url: "https://www.google.com/maps?cid=3706376565908828558",
    rating: "5.0",
    reviewCount: 11,
  },
  /** Paste the Yelp business page URL here to show the Yelp link. */
  yelpUrl: "",
  instagram: "https://www.instagram.com/refined.autodetail/",
  facebook: "https://www.facebook.com/profile.php?id=61575955184190",
} as const;
