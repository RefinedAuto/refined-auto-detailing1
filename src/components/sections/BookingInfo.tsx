import Link from "next/link";
import { MapPin } from "lucide-react";
import FaqList from "@/components/sections/FaqList";
import { AREAS } from "@/lib/areas";
import { BOOKING_FAQS } from "@/lib/faqs";
import { COMPANY } from "@/lib/utils";

/**
 * Service areas and booking questions for the contact and quote pages — gives
 * those short pages real content and links every city page from them.
 */
export default function BookingInfo() {
  const counties = ["Snohomish", "King"] as const;

  return (
    <section className="pb-20">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-4">Where We Detail</h2>
          <p className="text-white/70 mb-8 leading-relaxed">
            We bring the detail to your home, office or apartment across {COMPANY.serviceArea}. Appointments run{" "}
            {COMPANY.hours}.
          </p>
          {counties.map((county) => (
            <div key={county} className="mb-6">
              <h3 className="text-gold-500 text-xs tracking-[0.2em] uppercase font-semibold mb-3">{county} County</h3>
              <ul className="flex flex-wrap gap-2">
                {AREAS.filter((a) => a.county === county).map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/service-areas/${a.slug}`}
                      className="inline-flex items-center gap-1.5 glass hover:border-gold-500/30 rounded-full px-4 py-2 text-sm text-white/80 hover:text-white transition-colors"
                    >
                      <MapPin size={12} className="text-gold-500" aria-hidden="true" />
                      {a.city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-8">Booking Questions</h2>
          <FaqList faqs={BOOKING_FAQS} />
        </div>
      </div>
    </section>
  );
}
