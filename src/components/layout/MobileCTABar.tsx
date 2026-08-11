"use client";

import { Phone, Calendar } from "lucide-react";
import { COMPANY } from "@/lib/utils";

export default function MobileCTABar() {
  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-black/90 backdrop-blur-xl border-t border-white/10"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2 h-[72px]">
        <a
          href={`tel:${COMPANY.phoneHref}`}
          className="flex items-center justify-center gap-2 text-white/80 active:bg-white/5 text-sm font-semibold tracking-wide border-r border-white/10 transition-colors"
        >
          <Phone size={16} className="text-gold-500" />
          Call Now
        </a>
        <a
          href={COMPANY.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-gold-500 active:bg-gold-400 text-black text-sm font-bold tracking-wide transition-colors"
        >
          <Calendar size={16} />
          Book Now
        </a>
      </div>
    </div>
  );
}
