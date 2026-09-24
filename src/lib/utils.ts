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
  city: "Marysville",
  region: "WA",
  postalCode: "98270",
  serviceArea: "Snohomish County & King County, Washington",
  hours: "7 days a week, 7 AM – 8 PM",
  instagram: "https://www.instagram.com/refined.autodetail/",
  facebook: "https://www.facebook.com/profile.php?id=61575955184190",
} as const;
