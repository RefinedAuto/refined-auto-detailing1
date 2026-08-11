import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Shield, Star, Zap, Heart, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Refined Auto Detailing | Premium Mobile Detailing, Snohomish County WA",
  description:
    "Meet the team behind Refined Auto Detailing. We're Snohomish County's premier mobile detailing service — built on precision, passion, and the belief that your vehicle deserves the best.",
};

const values = [
  {
    icon: Shield,
    title: "Obsessive Precision",
    description: "We don't rush. Every detail is examined, every surface treated, until the result is genuinely excellent.",
  },
  {
    icon: Star,
    title: "Premium Products Only",
    description: "We use only professional-grade products — the same ones top-tier detail shops use. No shortcuts.",
  },
  {
    icon: Zap,
    title: "Convenient & Reliable",
    description: "We show up on time, every time. Mobile service means zero inconvenience for you.",
  },
  {
    icon: Heart,
    title: "Genuine Care",
    description: "We treat every vehicle as if it were our own. Your car represents your investment — we honor that.",
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
                Our Story
              </span>
              <h1 className="text-5xl sm:text-6xl font-black tracking-tight mb-6">
                Built on a <br />
                <span className="text-gradient-gold">Standard of Excellence</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                Refined Auto Detailing started with a simple belief: every vehicle owner deserves access to truly exceptional detailing — not just a quick wash, but a complete transformation.
              </p>
              <p className="text-white/50 text-base leading-relaxed mb-8">
                Operating throughout Snohomish County, WA, we bring professional-grade equipment and expertise directly to our clients. No appointments lost to commutes. No leaving your car at a shop for hours. Just premium results at your door.
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
                  src="/images/gs-5094.jpg"
                  alt="Refined Auto Detailing at work"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass border border-gold-500/20 rounded-2xl p-5 w-48">
                <p className="text-3xl font-black text-gradient-gold">500+</p>
                <p className="text-white/60 text-xs mt-1">Vehicles detailed in Snohomish County</p>
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
              Our Values
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
            {["/images/gs-5754.jpg", "/images/gs-5749.jpg", "/images/gs-5094.jpg", "/images/gs-5133.jpg"].map((src, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden border border-white/5 hover:border-gold-500/30 transition-all">
                <Image src={src} alt={`Detail work ${i + 1}`} width={400} height={400} className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" />
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
          <p className="text-white/50 mb-8 max-w-md mx-auto">Join hundreds of satisfied clients across Snohomish County.</p>
          <Link href="/quote" className="inline-flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-black font-bold px-8 py-4 rounded-full transition-all shadow-gold">
            Get My Free Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
