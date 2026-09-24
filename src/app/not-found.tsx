import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { COMPANY } from "@/lib/utils";

// Next.js adds a noindex robots tag to 404 responses automatically.
export const metadata: Metadata = {
  title: "Page Not Found",
};

const POPULAR = ["ceramic-coating", "paint-correction", "full-detail", "interior-detailing"];

export default function NotFound() {
  const popular = POPULAR.map((slug) => SERVICES.find((s) => s.slug === slug)!).filter(Boolean);

  return (
    <div className="bg-dark-950 pt-32 min-h-screen">
      <section className="section-padding">
        <div className="container-custom max-w-3xl text-center">
          <p className="text-8xl sm:text-9xl font-black text-gradient-gold leading-none mb-6" aria-hidden="true">
            404
          </p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-6">
            This Page Missed a Spot
          </h1>
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you back on the road.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-black font-bold px-8 py-4 rounded-full transition-all shadow-gold"
            >
              Back to Home <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 glass border border-white/10 hover:border-gold-500/40 text-white font-bold px-8 py-4 rounded-full transition-all"
            >
              Get a Free Quote
            </Link>
          </div>

          <section aria-labelledby="popular" className="text-left mb-12">
            <h2 id="popular" className="text-2xl font-black text-white mb-5 text-center">
              Popular Services
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {popular.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex items-center justify-between glass rounded-2xl p-5 hover:border-gold-500/30 transition-all"
                  >
                    <span>
                      <span className="block text-white font-bold">{s.name}</span>{" "}
                      <span className="block text-gold-500 text-sm">
                        {s.lowPrice ? `From ${s.startingPrice}` : "Free quote"}
                      </span>
                    </span>
                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                      className="text-white/60 group-hover:text-gold-500 group-hover:translate-x-1 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm">
            <Link href="/service-areas" className="inline-flex items-center justify-center gap-2 text-white/70 hover:text-gold-500">
              <MapPin size={16} className="text-gold-500" aria-hidden="true" />
              View service areas
            </Link>
            <a
              href={`tel:${COMPANY.phoneHref}`}
              className="inline-flex items-center justify-center gap-2 text-white/70 hover:text-gold-500"
            >
              <Phone size={16} className="text-gold-500" aria-hidden="true" />
              Call {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
