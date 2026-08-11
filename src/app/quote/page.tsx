import type { Metadata } from "next";
import QuoteBuilder from "@/components/interactive/QuoteBuilder";
import { Phone, MessageSquare, Clock, Shield } from "lucide-react";
import { COMPANY } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Get a Free Quote | Mobile Auto Detailing — Snohomish County WA",
  description:
    "Get an instant quote for mobile auto detailing in Snohomish County, WA. Transparent pricing, no hidden fees. Interior, exterior, full detail, ceramic coating & more.",
};

export default function QuotePage() {
  return (
    <div className="bg-dark-950 pt-24">
      {/* Trust bar */}
      <div className="bg-black border-b border-white/5 py-4">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <Shield size={14} className="text-gold-500" />
              <span>Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-gold-500" />
              <span>Same-day appointments available</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-gold-500" />
              <span>Reach us: {COMPANY.phone}</span>
            </div>
          </div>
        </div>
      </div>

      <QuoteBuilder />

      {/* Alternative contact methods */}
      <section className="pb-20">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-white/40 text-sm mb-6">Prefer to talk directly?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${COMPANY.phoneHref}`}
                className="flex items-center justify-center gap-3 glass hover:border-gold-500/30 text-white px-8 py-4 rounded-full transition-all"
              >
                <Phone size={18} className="text-gold-500" />
                <span className="font-semibold">Call {COMPANY.phone}</span>
              </a>
              <a
                href={`sms:${COMPANY.phoneHref}`}
                className="flex items-center justify-center gap-3 glass hover:border-gold-500/30 text-white px-8 py-4 rounded-full transition-all"
              >
                <MessageSquare size={18} className="text-gold-500" />
                <span className="font-semibold">Text Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
