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

export const COMPANY = {
  name: "Refined Auto Detailing",
  phone: "(425) 386-5190",
  phoneHref: "+14253865190",
  email: "detailing.refinedauto@gmail.com",
  website: "detailingrefinedauto.com",
  bookingUrl: "https://refinedautodetailing.setmore.com",
  address: "Snohomish County, WA",
  serviceArea: "Snohomish County & King County, Washington",
  instagram: "https://www.instagram.com/refined.autodetail/",
  facebook: "https://www.facebook.com/profile.php?id=61575955184190",
} as const;
