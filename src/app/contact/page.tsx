"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight, CheckCircle } from "lucide-react";
import { COMPANY } from "@/lib/utils";
import { useForm } from "@formspree/react";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("mojgblgp");

  return (
    <div className="bg-dark-950 pt-32">
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4 block">Contact</span>
              <h1 className="text-5xl font-black tracking-tight mb-6">
                Let&apos;s Get <span className="text-gradient-gold">Started</span>
              </h1>
              <p className="text-white/50 text-lg mb-12">
                Ready to book or just have a question? Reach out any way that works for you — we typically respond within the hour.
              </p>

              <div className="space-y-6 mb-12">
                <a href={`tel:${COMPANY.phoneHref}`} className="flex items-center gap-5 group">
                  <div className="w-12 h-12 glass-gold rounded-xl flex items-center justify-center">
                    <Phone size={18} className="text-gold-500" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Phone / Text</p>
                    <p className="text-white font-semibold text-lg group-hover:text-gold-500 transition-colors">{COMPANY.phone}</p>
                  </div>
                </a>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-5 group">
                  <div className="w-12 h-12 glass-gold rounded-xl flex items-center justify-center">
                    <Mail size={18} className="text-gold-500" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Email</p>
                    <p className="text-white font-semibold group-hover:text-gold-500 transition-colors">{COMPANY.email}</p>
                  </div>
                </a>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 glass-gold rounded-xl flex items-center justify-center">
                    <MapPin size={18} className="text-gold-500" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Service Area</p>
                    <p className="text-white font-semibold">{COMPANY.serviceArea}</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 glass-gold rounded-xl flex items-center justify-center">
                    <Clock size={18} className="text-gold-500" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Hours</p>
                    <p className="text-white font-semibold">7 days/week, 7am – 7pm</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={COMPANY.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gold-500 hover:bg-gold-400 text-black font-bold py-4 rounded-full text-center transition-all text-sm"
                >
                  Book Now
                </a>
                <a href={`sms:${COMPANY.phoneHref}`} className="flex-1 glass hover:border-gold-500/30 text-white font-semibold py-4 rounded-full text-center transition-all text-sm flex items-center justify-center gap-2">
                  <MessageSquare size={15} /> Text Us
                </a>
              </div>
            </div>

            {/* Right — contact form */}
            <div className="glass border border-white/10 rounded-3xl p-8">
              {state.succeeded ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div className="w-16 h-16 bg-gold-500/10 border border-gold-500/30 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle size={32} className="text-gold-500" />
                  </div>
                  <h3 className="text-white font-black text-2xl mb-3">Message Sent!</h3>
                  <p className="text-white/50">We&apos;ll get back to you within the hour.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-white font-bold text-xl mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="hidden" name="_subject" value="New Contact Form Message — Refined Auto Detailing" />
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-white/40 text-xs uppercase tracking-widest mb-2 block">First Name</label>
                        <input
                          type="text"
                          name="first_name"
                          placeholder="John"
                          required
                          className="w-full bg-white/5 border border-white/10 focus:border-gold-500/50 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-white/40 text-xs uppercase tracking-widest mb-2 block">Last Name</label>
                        <input
                          type="text"
                          name="last_name"
                          placeholder="Smith"
                          className="w-full bg-white/5 border border-white/10 focus:border-gold-500/50 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm outline-none transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-white/40 text-xs uppercase tracking-widest mb-2 block">Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        required
                        className="w-full bg-white/5 border border-white/10 focus:border-gold-500/50 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-white/40 text-xs uppercase tracking-widest mb-2 block">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="(425) 000-0000"
                        className="w-full bg-white/5 border border-white/10 focus:border-gold-500/50 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-white/40 text-xs uppercase tracking-widest mb-2 block">Vehicle</label>
                      <input
                        type="text"
                        name="vehicle"
                        placeholder="2023 Tesla Model 3"
                        className="w-full bg-white/5 border border-white/10 focus:border-gold-500/50 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-white/40 text-xs uppercase tracking-widest mb-2 block">Message</label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Tell us what you need..."
                        className="w-full bg-white/5 border border-white/10 focus:border-gold-500/50 rounded-xl px-4 py-3.5 text-white placeholder-white/20 text-sm outline-none transition-colors resize-none"
                      />
                    </div>
                    {state.errors && (
                      <p className="text-red-400 text-sm" role="alert">
                        Something went wrong sending your message. Please call or text us at {COMPANY.phone}.
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="w-full bg-gold-500 hover:bg-gold-400 text-black font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      {state.submitting ? "Sending..." : "Send Message"} <ArrowRight size={18} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
