"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useForm as useFormspree } from "@formspree/react";
import { Car, Truck, ArrowRight, ArrowLeft, CheckCircle, Sparkles } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

type VehicleType = "sedan" | "suv" | "large";
type ServiceType = "exterior_wash" | "basic_detail" | "essential" | "elite";

const basePricing: Record<VehicleType, Record<ServiceType, number>> = {
  sedan: { exterior_wash: 80, basic_detail: 100, essential: 175, elite: 300 },
  suv:   { exterior_wash: 100, basic_detail: 120, essential: 210, elite: 350 },
  large: { exterior_wash: 120, basic_detail: 140, essential: 250, elite: 400 },
};

const addons: { id: string; name: string; price: number; description: string }[] = [
  { id: "pet_hair", name: "Pet Hair Removal", price: 50, description: "Heavy pet hair extraction (+$50 surcharge)" },
  { id: "engine", name: "Engine Bay Detail", price: 80, description: "Thorough engine bay cleaning & dressing" },
  { id: "headlight", name: "Headlight Restoration", price: 60, description: "Rejuvenates faded & yellowed headlights" },
  { id: "clay_sealant", name: "Clay Bar & Sealant", price: 80, description: "Full decontamination + ceramic sealant" },
];

const leadSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Phone number required"),
});

type LeadFormData = z.infer<typeof leadSchema>;

export default function QuoteBuilder() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [step, setStep] = useState(1);
  const [vehicleType, setVehicleType] = useState<VehicleType>("sedan");
  const [service, setService] = useState<ServiceType>("essential");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [estimate, setEstimate] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>({ resolver: zodResolver(leadSchema) });

  const [formspreeState, submitToFormspree] = useFormspree("mojgblgp");

  const calculateEstimate = () => {
    const base = basePricing[vehicleType][service];
    const addonsTotal = selectedAddons.reduce((sum, id) => {
      const addon = addons.find((a) => a.id === id);
      return sum + (addon?.price || 0);
    }, 0);
    return base + addonsTotal;
  };

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const onSubmitLead = async (data: LeadFormData) => {
    const total = calculateEstimate();
    const selectedServiceLabel = services.find(s => s.type === service)?.label;
    const selectedVehicleLabel = vehicles.find(v => v.type === vehicleType)?.label;
    const selectedAddonNames = selectedAddons.map(id => addons.find(a => a.id === id)?.name).join(", ");

    await submitToFormspree({
      name: data.name,
      email: data.email,
      phone: data.phone,
      vehicle: selectedVehicleLabel,
      service: selectedServiceLabel,
      addons: selectedAddonNames || "None",
      estimate: `$${total}`,
      _subject: `New Quote Request — ${selectedServiceLabel} (${selectedVehicleLabel})`,
    });

    setEstimate(total);
    setLeadCaptured(true);
    toast.success("Your quote has been sent! We'll be in touch shortly.", {
      duration: 5000,
    });
  };

  const vehicles: { type: VehicleType; label: string; icon: React.ComponentType<{ size?: number }> }[] = [
    { type: "sedan", label: "Sedan / Hatchback", icon: Car },
    { type: "suv", label: "SUV / Crossover", icon: Car },
    { type: "large", label: "Full-Size SUV / Truck", icon: Truck },
  ];

  const services: { type: ServiceType; label: string; desc: string; highlight?: boolean }[] = [
    { type: "exterior_wash", label: "Premium Exterior Wash", desc: "Hand wash, wheels, tire dressing" },
    { type: "basic_detail", label: "Basic Interior Detail", desc: "Vacuum, wipe-down, windows, leather protect" },
    { type: "essential", label: "Essential Full Detail", desc: "Interior + exterior maintenance package", highlight: true },
    { type: "elite", label: "Elite Full Detail", desc: "Complete deep clean — our most thorough service" },
  ];

  return (
    <section className="section-padding bg-dark-950 relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <span className="text-gold-500 text-xs tracking-[0.3em] uppercase font-medium mb-4 block">
            Instant Estimate
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            Get Your <span className="text-gradient-gold">Quote</span>
          </h2>
          <p className="text-white/50">Configure your service in 60 seconds.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          {/* Progress indicator */}
          <div className="flex items-center gap-2 mb-8 justify-center">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    s < step
                      ? "bg-gold-500 text-black"
                      : s === step
                      ? "bg-gold-500/20 text-gold-500 border border-gold-500"
                      : "bg-white/5 text-white/30"
                  }`}
                >
                  {s < step ? <CheckCircle size={14} /> : s}
                </div>
                {s < 4 && (
                  <div
                    className={`h-px w-8 transition-all duration-300 ${
                      s < step ? "bg-gold-500" : "bg-white/10"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="glass border border-white/10 rounded-3xl p-8">
            <AnimatePresence mode="wait">
              {/* Step 1: Vehicle Type */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                >
                  <h3 className="text-white font-bold text-xl mb-2">What vehicle are we detailing?</h3>
                  <p className="text-white/40 text-sm mb-6">Select your vehicle type</p>
                  <div className="grid grid-cols-3 gap-3 mb-8">
                    {vehicles.map(({ type, label, icon: Icon }) => (
                      <button
                        key={type}
                        onClick={() => setVehicleType(type)}
                        className={`flex flex-col items-center gap-3 p-5 rounded-2xl border transition-all duration-200 ${
                          vehicleType === type
                            ? "border-gold-500 bg-gold-500/10 text-gold-500"
                            : "border-white/10 text-white/60 hover:border-white/30"
                        }`}
                      >
                        <Icon size={28} />
                        <span className="text-sm font-medium">{label}</span>
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    className="w-full bg-gold-500 hover:bg-gold-400 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
                  >
                    Next <ArrowRight size={18} />
                  </button>
                </motion.div>
              )}

              {/* Step 2: Service */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                >
                  <h3 className="text-white font-bold text-xl mb-2">What service do you need?</h3>
                  <p className="text-white/40 text-sm mb-6">Choose your detailing package</p>
                  <div className="space-y-3 mb-8">
                    {services.map(({ type, label, desc, highlight }) => (
                      <button
                        key={type}
                        onClick={() => setService(type)}
                        className={`w-full flex items-center justify-between p-5 rounded-2xl border transition-all duration-200 ${
                          service === type
                            ? "border-gold-500 bg-gold-500/10"
                            : "border-white/10 hover:border-white/30"
                        }`}
                      >
                        <div className="text-left">
                          <div className="flex items-center gap-2">
                            <p className={`font-bold ${service === type ? "text-gold-500" : "text-white"}`}>{label}</p>
                            {highlight && <span className="text-[10px] bg-gold-500/20 text-gold-400 px-2 py-0.5 rounded-full font-bold tracking-wide">Popular</span>}
                          </div>
                          <p className="text-white/40 text-sm">{desc}</p>
                        </div>
                        <div className="text-right">
                          <p className={`font-bold ${service === type ? "text-gold-500" : "text-white/60"}`}>
                            {formatCurrency(basePricing[vehicleType][type])}+
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(1)}
                      className="flex-1 border border-white/10 hover:border-white/30 text-white/60 py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
                    >
                      <ArrowLeft size={18} /> Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="flex-1 bg-gold-500 hover:bg-gold-400 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
                    >
                      Next <ArrowRight size={18} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Add-ons */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                >
                  <h3 className="text-white font-bold text-xl mb-2">Any add-ons?</h3>
                  <p className="text-white/40 text-sm mb-5">Optional services to add to your detail</p>

                  <p className="text-white/40 text-sm mb-3">Add-on services</p>
                  <div className="space-y-2 mb-8">
                    {addons.map((addon) => (
                      <button
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${
                          selectedAddons.includes(addon.id)
                            ? "border-gold-500/50 bg-gold-500/5"
                            : "border-white/10 hover:border-white/20"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                            selectedAddons.includes(addon.id) ? "bg-gold-500 border-gold-500" : "border-white/20"
                          }`}>
                            {selectedAddons.includes(addon.id) && <CheckCircle size={12} className="text-black" />}
                          </div>
                          <div className="text-left">
                            <p className="text-white text-sm font-medium">{addon.name}</p>
                            <p className="text-white/40 text-xs">{addon.description}</p>
                          </div>
                        </div>
                        <span className="text-gold-500 text-sm font-bold">+{formatCurrency(addon.price)}</span>
                      </button>
                    ))}
                  </div>

                  {/* Live estimate preview */}
                  <div className="glass-gold rounded-xl p-4 flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Sparkles size={16} className="text-gold-500" />
                      <span className="text-white/70 text-sm">Estimated Total</span>
                    </div>
                    <span className="text-gold-500 font-black text-2xl">{formatCurrency(calculateEstimate())}</span>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setStep(2)}
                      className="flex-1 border border-white/10 hover:border-white/30 text-white/60 py-4 rounded-xl flex items-center justify-center gap-2"
                    >
                      <ArrowLeft size={18} /> Back
                    </button>
                    <button
                      onClick={() => setStep(4)}
                      className="flex-1 bg-gold-500 hover:bg-gold-400 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2"
                    >
                      Get Quote <ArrowRight size={18} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Lead capture */}
              {step === 4 && !leadCaptured && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                >
                  <h3 className="text-white font-bold text-xl mb-2">Almost done!</h3>
                  <p className="text-white/40 text-sm mb-6">Enter your info to see your full quote and book your detail.</p>

                  <form onSubmit={handleSubmit(onSubmitLead)} className="space-y-4">
                    <div>
                      <input
                        {...register("name")}
                        placeholder="Your name"
                        className="w-full bg-white/5 border border-white/10 focus:border-gold-500/50 rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm outline-none transition-colors"
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="Email address"
                        className="w-full bg-white/5 border border-white/10 focus:border-gold-500/50 rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm outline-none transition-colors"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="Phone number"
                        className="w-full bg-white/5 border border-white/10 focus:border-gold-500/50 rounded-xl px-4 py-3.5 text-white placeholder-white/30 text-sm outline-none transition-colors"
                      />
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
                    </div>

                    <p className="text-white/30 text-xs">No spam. We&apos;ll only contact you about your detail.</p>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="flex-1 border border-white/10 hover:border-white/30 text-white/60 py-4 rounded-xl flex items-center justify-center gap-2"
                      >
                        <ArrowLeft size={18} /> Back
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-gold-500 hover:bg-gold-400 text-black font-bold py-4 rounded-xl disabled:opacity-60 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? "Sending..." : "See My Quote"}
                        {!isSubmitting && <ArrowRight size={18} />}
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

              {/* Result */}
              {leadCaptured && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 bg-gold-500/10 border border-gold-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={36} className="text-gold-500" />
                  </div>
                  <h3 className="text-white font-black text-2xl mb-2">Your Estimate</h3>
                  <div className="text-5xl font-black text-gradient-gold mb-4">
                    {formatCurrency(estimate)}
                  </div>
                  <p className="text-white/50 text-sm mb-2">
                    {vehicles.find(v => v.type === vehicleType)?.label} · {services.find(s => s.type === service)?.label}
                  </p>
                  {selectedAddons.length > 0 && (
                    <p className="text-gold-500/70 text-xs mb-6">+ {selectedAddons.length} add-on{selectedAddons.length > 1 ? "s" : ""}</p>
                  )}
                  <p className="text-white/40 text-sm mb-8">
                    We&apos;ll reach out shortly to confirm pricing and schedule your appointment.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="https://refinedautodetailing.setmore.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-black font-bold px-8 py-4 rounded-full transition-all"
                    >
                      Book Online Now
                    </a>
                    <a
                      href="tel:4253865190"
                      className="inline-flex items-center gap-2 glass border border-white/10 hover:border-gold-500/30 text-white font-bold px-8 py-4 rounded-full transition-all"
                    >
                      Call (425) 386-5190
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
