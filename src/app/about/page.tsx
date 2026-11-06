import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { UserCheck, Sparkles, Clock, House, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About the Owner — Mobile Detailing in Lynnwood, WA",
  description:
    "Meet Nazar, owner of Refined Auto Detailing. Since 2025 he has personally detailed every car, at clients' homes across Snohomish & King County, WA.",
  alternates: { canonical: "/about" },
};

/**
 * Owner facts confirmed by the owner (2026-11-06): Nazar runs the business,
 * started it in 2025 and does every detail himself. Keep this page to facts
 * he has confirmed — no team, year counts, certifications or insurance claims.
 */
const values = [
  {
    icon: UserCheck,
    title: "One Detailer, Start to Finish",
    description: "I do every detail myself, so the person you book with is the person working on your car.",
  },
  {
    icon: Sparkles,
    title: "No Rushing",
    description: "I take the time each car needs. Attention to detail is what my clients mention most in their reviews.",
  },
  {
    icon: Clock,
    title: "On Time, In Touch",
    description: "I show up when I say I will and keep you updated, so you're never left wondering.",
  },
  {
    icon: House,
    title: "At Your Home",
    description: "No drop-off, no waiting room. All I need is an outdoor water spigot and an outlet near your car.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-dark-950 pt-32">
      {/* Hero */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4 block">
                Meet the Owner
              </span>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 leading-tight">
                About Refined Auto Detailing: <span className="text-gradient-gold">Owner-Operated Mobile Detailing</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                Hi, I&apos;m Nazar. I started Refined Auto Detailing in 2025, and I do every detail myself, from
                booking your appointment to the final wipe-down.
              </p>
              <p className="text-white/50 text-base leading-relaxed mb-8">
                I&apos;m based in Lynnwood and come to homes across Snohomish and King County. Your car gets detailed
                in your own driveway while you get on with your day, with no drop-off and no waiting room.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-gold"
              >
                Book a Detail <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src="/images/work/detailer-cleaning-bmw-wheel.jpg"
                  alt="Refined Auto Detailing cleaning a BMW wheel with a brush during a mobile detail"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4 block">
              How I Work
            </span>
            <h2 className="text-4xl font-black tracking-tight">
              Why Clients <span className="text-gradient-gold">Come Back</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="glass rounded-2xl p-8 text-center hover:border-gold-500/30 transition-all duration-300">
                <div className="w-12 h-12 glass-gold rounded-xl flex items-center justify-center mx-auto mb-5">
                  <Icon size={20} className="text-gold-500" />
                </div>
                <h3 className="text-white font-bold text-base mb-3">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="section-padding bg-dark-950">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black tracking-tight mb-4">
              Our <span className="text-gradient-gold">Work</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: "/images/work/bmw-m3-mobile-detail-front.jpg", alt: "White BMW M3 after a full mobile detail" },
              { src: "/images/work/bmw-m3-elite-detail-side.jpg", alt: "Glossy side profile of a detailed white BMW M3" },
              { src: "/images/work/detailer-cleaning-bmw-wheel.jpg", alt: "Detailer scrubbing a BMW wheel with a brush during a mobile wash" },
              { src: "/images/work/foam-cannon-wash-white-sedan.jpg", alt: "Detailer foaming a white sedan in a driveway during a mobile hand wash" },
            ].map(({ src, alt }) => (
              <div key={src} className="aspect-square rounded-xl overflow-hidden border border-white/5 hover:border-gold-500/30 transition-all">
                <Image src={src} alt={alt} width={400} height={400} className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/gallery" className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 font-semibold">
              View Full Gallery <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-center">
        <div className="container-custom">
          <h2 className="text-4xl font-black mb-4">Ready to Experience <span className="text-gradient-gold">Refined?</span></h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto">Mobile detailing at your home, anywhere in Snohomish &amp; King County.</p>
          <Link href="/quote" className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-black font-bold px-8 py-4 rounded-full transition-all shadow-gold">
            Get My Free Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
