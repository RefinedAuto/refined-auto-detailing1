"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useSubmit } from "@formspree/react";
import { Car, Truck, ArrowRight, ArrowLeft, CheckCircle, Sparkles } from "lucide-react";
import Link from "next/link";
import { formatCurrency, COMPANY } from "@/lib/utils";

type VehicleType = "sedan" | "suv" | "large";
type DetailType = "exterior_wash" | "basic_detail" | "essential" | "elite";
type QuoteType = "ceramic" | "paint_correction";
type ServiceType = DetailType | QuoteType;

const isQuoteOnly = (s: ServiceType): s is QuoteType => s === "ceramic" || s === "paint_correction";

// Keep in sync with src/lib/services.ts.
const CERAMIC_STARTING_PRICE = 600;

const basePricing: Record<VehicleType, Record<DetailType, number>> = {
  sedan: { exterior_wash: 80, basic_detail: 160, essential: 175, elite: 300 },
  suv:   { exterior_wash: 100, basic_detail: 180, essential: 210, elite: 350 },
  large: { exterior_wash: 120, basic_detail: 200, essential: 250, elite: 400 },
};

const addons: { id: string; name: string; price: number; description: string }[] = [
  { id: "pet_hair", name: "Pet Hair Removal", price: 50, description: "Heavy pet hair extraction (+$50 surcharge)" },
  { id: "stains", name: "Stain Removal", price: 50, description: "Seat, carpet & mat stain treatment (+$50 surcharge)" },
  { id: "engine", name: "Engine Bay Detail", price: 80, description: "Thorough engine bay cleaning & dressing" },
  { id: "headlight", name: "Headlight Restoration", price: 60, description: "Rejuvenates faded & yellowed headlights" },
  { id: "clay_sealant", name: "Clay Bar & Sealant", price: 80, description: "Full decontamination + ceramic sealant" },
];

const coatingTiers = [
  { id: "1yr", label: "1-Year Coating", desc: "Entry-level protection with full prep" },
  { id: "3yr", label: "3-Year Coating", desc: "Extended protection, same thorough prep" },
  { id: "5yr", label: "5-Year Coating", desc: "Our longest-lasting protection", popular: true },
  { id: "unsure", label: "Not sure yet", desc: "We'll recommend one after seeing your vehicle" },
];

const leatherPrice: Record<VehicleType, number> = { sedan: 250, suv: 300, large: 350 };

const coatingExtras = (vehicle: VehicleType) => [
  { id: "window", name: "Window Coating", price: "from $125", desc: "Rain beads off the glass" },
  { id: "wheel", name: "Wheel Coating", price: "from $180", desc: "Brake dust rinses right off" },
  { id: "leather", name: "Leather Coating", price: `$${leatherPrice[vehicle]}`, desc: "Guards seats against spills & stains" },
  { id: "correction", name: "Paint Correction First", price: "quoted", desc: "Removes swirls before coating" },
];

const paintConditions = [
  { id: "light", label: "Light swirls or haze", desc: "Fine swirl marks you mostly notice in direct sunlight" },
  { id: "moderate", label: "Swirls & light scratches", desc: "Visible swirls plus a few light scratches" },
  { id: "heavy", label: "Heavy defects or oxidation", desc: "Deep swirls, many scratches, or faded / chalky paint" },
  { id: "unsure", label: "Not sure", desc: "We'll assess the paint in person" },
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
  const [service, setService] = useState<ServiceType>("elite");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [coatingTier, setCoatingTier] = useState("5yr");
  const [coatingAddons, setCoatingAddons] = useState<string[]>([]);
  const [paintCondition, setPaintCondition] = useState("unsure");
  const [addCeramicAfter, setAddCeramicAfter] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [estimate, setEstimate] = useState(0);
  const stepRegionRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  // Moving between steps unmounts the button that had focus. Move focus to the
  // new step so keyboard and screen-reader users aren't dropped back at the top.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    stepRegionRef.current?.focus();
  }, [step, leadCaptured]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormData>({ resolver: zodResolver(leadSchema) });

  const submitToFormspree = useSubmit<Record<string, string>>("mojgblgp");

  const calculateEstimate = () => {
    if (isQuoteOnly(service)) return 0;
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

  const toggleCoatingAddon = (id: string) => {
    setCoatingAddons((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]));
  };

  /** Human-readable price line for the summary, result screen and email. */
  const priceSummary = () => {
    if (service === "ceramic") return `Starting from ${formatCurrency(CERAMIC_STARTING_PRICE)}`;
    if (service === "paint_correction") return "Quoted after inspection";
    return formatCurrency(calculateEstimate());
  };

  /** Everything the customer chose, as short lines for the email. */
  const selectionDetails = () => {
    if (service === "ceramic") {
      const tier = coatingTiers.find((t) => t.id === coatingTier)!.label;
      const extras = coatingExtras(vehicleType)
        .filter((x) => coatingAddons.includes(x.id))
        .map((x) => x.name);
      return { option: tier, extras: extras.join(", ") || "None" };
    }
    if (service === "paint_correction") {
      const cond = paintConditions.find((c) => c.id === paintCondition)!.label;
      return { option: `Paint condition: ${cond}`, extras: addCeramicAfter ? "Interested in ceramic coating after" : "None" };
    }
    const names = selectedAddons.map((id) => addons.find((a) => a.id === id)?.name).join(", ");
    return { option: "—", extras: names || "None" };
  };

  const onSubmitLead = async (data: LeadFormData) => {
    const total = calculateEstimate();
    const selectedServiceLabel = services.find(s => s.type === service)!.label;
    const selectedVehicleLabel = vehicles.find(v => v.type === vehicleType)!.label;
    const { option, extras } = selectionDetails();

    const result = await submitToFormspree({
      name: data.name,
      email: data.email,
      phone: data.phone,
      vehicle: selectedVehicleLabel,
      service: selectedServiceLabel,
      option,
      addons: extras,
      estimate: priceSummary(),
      _subject: `New Quote Request — ${selectedServiceLabel} (${selectedVehicleLabel})`,
    });

    if (result.kind === "error") {
      toast.error(`Couldn't send your quote. Please call or text us at ${COMPANY.phone}.`, {
        duration: 8000,
      });
      return;
    }

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
    { type: "ceramic", label: "Ceramic Coating", desc: "1, 3 or 5-year paint protection" },
    { type: "paint_correction", label: "Paint Correction", desc: "Remove swirls, scratches & oxidation" },
    { type: "exterior_wash", label: "Premium Exterior Wash", desc: "Hand wash, wheels, tire dressing" },
    { type: "basic_detail", label: "Basic Interior Detail", desc: "Steam clean, deep vacuum, windows, leather protect" },
    { type: "essential", label: "Essential Detail Package", desc: "Interior + exterior maintenance package" },
    { type: "elite", label: "Elite Full Detail", desc: "Complete deep clean — our most thorough service", highlight: true },
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
          <p className="text-white/70">Four quick steps — about 60 seconds.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          {/* Progress indicator */}
          <p className="sr-only" aria-live="polite">
            {leadCaptured ? "Quote complete" : `Step ${step} of 4`}
          </p>
          <div className="flex items-center gap-2 mb-8 justify-center" aria-hidden="true">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    s < step
                      ? "bg-gold-500 text-black"
                      : s === step
                      ? "bg-gold-500/20 text-gold-500 border border-gold-500"
                      : "bg-white/5 text-white/60"
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

          <div
            ref={stepRegionRef}
            tabIndex={-1}
            className="glass border border-white/10 rounded-3xl p-5 sm:p-8 outline-none"
          >
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
                  <p className="text-white/60 text-sm mb-6">Tap your vehicle type to continue</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {vehicles.map(({ type, label, icon: Icon }) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => {
                          setVehicleType(type);
                          setStep(2);
                        }}
                        aria-pressed={vehicleType === type}
                        className={`flex flex-row sm:flex-col items-center gap-3 p-4 sm:p-5 rounded-2xl border transition-all duration-200 ${
                          vehicleType === type
                            ? "border-gold-500 bg-gold-500/10 text-gold-500"
                            : "border-white/10 text-white/60 hover:border-white/30"
                        }`}
                      >
                        <Icon size={28} aria-hidden="true" />
                        <span className="text-sm font-medium text-left sm:text-center">{label}</span>
                      </button>
                    ))}
                  </div>
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
                  <p className="text-white/60 text-sm mb-6">Tap a service to continue</p>
                  {[
                    { title: "Paint & Protection", items: services.filter((x) => isQuoteOnly(x.type)) },
                    { title: "Detailing", items: services.filter((x) => !isQuoteOnly(x.type)) },
                  ].map((group) => (
                    <div key={group.title} className="mb-6">
                      <p className="text-gold-500 text-xs tracking-widest uppercase font-bold mb-3">{group.title}</p>
                      <div className="space-y-3">
                        {group.items.map(({ type, label, desc, highlight }) => (
                          <button
                            key={type}
                            type="button"
                            aria-pressed={service === type}
                            onClick={() => {
                              setService(type);
                              setStep(3);
                            }}
                            className={`w-full flex items-center justify-between gap-4 p-5 rounded-2xl border transition-all duration-200 ${
                              service === type ? "border-gold-500 bg-gold-500/10" : "border-white/10 hover:border-white/30"
                            }`}
                          >
                            <div className="text-left">
                              <div className="flex items-center gap-2">
                                <p className={`font-bold ${service === type ? "text-gold-500" : "text-white"}`}>{label}</p>
                                {highlight && (
                                  <span className="text-[10px] bg-gold-500 text-black px-2 py-0.5 rounded-full font-bold tracking-wide">
                                    Popular
                                  </span>
                                )}
                              </div>
                              <p className="text-white/60 text-sm">{desc}</p>
                            </div>
                            <p className={`font-bold shrink-0 ${service === type ? "text-gold-500" : "text-white/70"}`}>
                              {type === "ceramic"
                                ? `From ${formatCurrency(CERAMIC_STARTING_PRICE)}`
                                : type === "paint_correction"
                                ? "Free quote"
                                : `${formatCurrency(basePricing[vehicleType][type as DetailType])}+`}
                            </p>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-full border border-white/10 hover:border-white/30 text-white/70 py-4 rounded-xl flex items-center justify-center gap-2 transition-all"
                  >
                    <ArrowLeft size={18} aria-hidden="true" /> Back
                  </button>
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
                  {service === "ceramic" && (
                    <>
                      <fieldset className="mb-8">
                        <legend className="text-white font-bold text-xl mb-2">Choose your coating</legend>
                        <p className="text-white/60 text-sm mb-5">Every coating includes decontamination and a paint enhancement polish.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {coatingTiers.map((t) => (
                            <label
                              key={t.id}
                              className={`relative flex cursor-pointer flex-col gap-1 p-4 rounded-2xl border transition-all has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-gold-400 ${
                                coatingTier === t.id ? "border-gold-500 bg-gold-500/10" : "border-white/10 hover:border-white/30"
                              }`}
                            >
                              <input
                                type="radio"
                                name="coating-tier"
                                value={t.id}
                                checked={coatingTier === t.id}
                                onChange={() => setCoatingTier(t.id)}
                                className="sr-only"
                              />
                              <span className="flex items-center gap-2">
                                <span className={`font-bold ${coatingTier === t.id ? "text-gold-500" : "text-white"}`}>{t.label}</span>
                                {t.popular && (
                                  <span className="text-[10px] bg-gold-500 text-black px-2 py-0.5 rounded-full font-bold tracking-wide">
                                    Most Popular
                                  </span>
                                )}
                              </span>
                              <span className="text-white/60 text-xs">{t.desc}</span>
                            </label>
                          ))}
                        </div>
                      </fieldset>
                      <fieldset className="mb-8">
                        <legend className="text-white font-bold mb-3">Add extra protection? <span className="text-white/60 font-normal text-sm">(optional)</span></legend>
                        <div className="space-y-2">
                          {coatingExtras(vehicleType).map((x) => (
                            <label
                              key={x.id}
                              className={`flex cursor-pointer items-center justify-between gap-3 p-4 rounded-xl border transition-all has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-gold-400 ${
                                coatingAddons.includes(x.id) ? "border-gold-500/50 bg-gold-500/5" : "border-white/10 hover:border-white/20"
                              }`}
                            >
                              <span className="flex items-center gap-3">
                                <input
                                  type="checkbox"
                                  checked={coatingAddons.includes(x.id)}
                                  onChange={() => toggleCoatingAddon(x.id)}
                                  className="w-5 h-5 accent-[#3a91cc] shrink-0"
                                />
                                <span>
                                  <span className="block text-white text-sm font-medium">{x.name}</span>
                                  <span className="block text-white/60 text-xs">{x.desc}</span>
                                </span>
                              </span>
                              <span className="text-gold-500 text-sm font-bold shrink-0">{x.price}</span>
                            </label>
                          ))}
                        </div>
                      </fieldset>
                    </>
                  )}

                  {service === "paint_correction" && (
                    <>
                      <fieldset className="mb-8">
                        <legend className="text-white font-bold text-xl mb-2">How does your paint look today?</legend>
                        <p className="text-white/60 text-sm mb-5">A rough idea helps us prepare your quote — we&apos;ll confirm in person.</p>
                        <div className="space-y-2">
                          {paintConditions.map((c) => (
                            <label
                              key={c.id}
                              className={`flex cursor-pointer flex-col gap-1 p-4 rounded-xl border transition-all has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-gold-400 ${
                                paintCondition === c.id ? "border-gold-500 bg-gold-500/10" : "border-white/10 hover:border-white/30"
                              }`}
                            >
                              <input
                                type="radio"
                                name="paint-condition"
                                value={c.id}
                                checked={paintCondition === c.id}
                                onChange={() => setPaintCondition(c.id)}
                                className="sr-only"
                              />
                              <span className={`font-bold text-sm ${paintCondition === c.id ? "text-gold-500" : "text-white"}`}>{c.label}</span>
                              <span className="text-white/60 text-xs">{c.desc}</span>
                            </label>
                          ))}
                        </div>
                      </fieldset>
                      <label className="flex cursor-pointer items-center gap-3 p-4 rounded-xl border border-white/10 hover:border-white/20 mb-8 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-gold-400">
                        <input
                          type="checkbox"
                          checked={addCeramicAfter}
                          onChange={(e) => setAddCeramicAfter(e.target.checked)}
                          className="w-5 h-5 accent-[#3a91cc] shrink-0"
                        />
                        <span>
                          <span className="block text-white text-sm font-medium">Protect it with a ceramic coating afterward</span>
                          <span className="block text-white/60 text-xs">Recommended — locks in the corrected finish (from {formatCurrency(CERAMIC_STARTING_PRICE)})</span>
                        </span>
                      </label>
                    </>
                  )}

                  {!isQuoteOnly(service) && (
                  <>
                  <h3 className="text-white font-bold text-xl mb-2">Any add-ons?</h3>
                  <p className="text-white/60 text-sm mb-5">Optional services to add to your detail</p>

                  <div className="space-y-2 mb-8">
                    {addons.map((addon) => (
                      <button
                        key={addon.id}
                        type="button"
                        aria-pressed={selectedAddons.includes(addon.id)}
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
                            <p className="text-white/60 text-xs">{addon.description}</p>
                          </div>
                        </div>
                        <span className="text-gold-500 text-sm font-bold">+{formatCurrency(addon.price)}</span>
                      </button>
                    ))}
                  </div>
                  </>
                  )}

                  {/* Live estimate preview */}
                  <div className="glass-gold rounded-xl p-4 flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Sparkles size={16} className="text-gold-500" aria-hidden="true" />
                      <span className="text-white/70 text-sm">{isQuoteOnly(service) ? "Pricing" : "Estimated Total"}</span>
                    </div>
                    <span className={`text-gold-500 font-black ${isQuoteOnly(service) ? "text-lg" : "text-2xl"}`}>{priceSummary()}</span>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex-1 border border-white/10 hover:border-white/30 text-white/60 py-4 rounded-xl flex items-center justify-center gap-2"
                    >
                      <ArrowLeft size={18} aria-hidden="true" /> Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(4)}
                      className="flex-1 bg-gold-500 hover:bg-gold-400 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2"
                    >
                      Continue <ArrowRight size={18} aria-hidden="true" />
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
                  <p className="text-white/60 text-sm mb-6">
                    {isQuoteOnly(service)
                      ? "Where should we send your quote? We'll follow up to confirm the details."
                      : "Enter your info to see your full estimate and book your detail."}
                  </p>

                  <form onSubmit={handleSubmit(onSubmitLead)} className="space-y-4">
                    <div>
                      <label htmlFor="quote-name" className="sr-only">
                        Your name
                      </label>
                      <input
                        id="quote-name"
                        autoComplete="name"
                        aria-invalid={errors.name ? true : undefined}
                        aria-describedby={errors.name ? "quote-name-error" : undefined}
                        {...register("name")}
                        placeholder="Your name"
                        className="w-full bg-white/5 border border-white/10 focus:border-gold-500/50 rounded-xl px-4 py-3.5 text-white placeholder-white/50 text-sm outline-none transition-colors"
                      />
                      {errors.name && (
                        <p id="quote-name-error" role="alert" className="text-red-400 text-xs mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="quote-email" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="quote-email"
                        autoComplete="email"
                        aria-invalid={errors.email ? true : undefined}
                        aria-describedby={errors.email ? "quote-email-error" : undefined}
                        {...register("email")}
                        type="email"
                        placeholder="Email address"
                        className="w-full bg-white/5 border border-white/10 focus:border-gold-500/50 rounded-xl px-4 py-3.5 text-white placeholder-white/50 text-sm outline-none transition-colors"
                      />
                      {errors.email && (
                        <p id="quote-email-error" role="alert" className="text-red-400 text-xs mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="quote-phone" className="sr-only">
                        Phone number
                      </label>
                      <input
                        id="quote-phone"
                        autoComplete="tel"
                        aria-invalid={errors.phone ? true : undefined}
                        aria-describedby={errors.phone ? "quote-phone-error" : undefined}
                        {...register("phone")}
                        type="tel"
                        placeholder="Phone number"
                        className="w-full bg-white/5 border border-white/10 focus:border-gold-500/50 rounded-xl px-4 py-3.5 text-white placeholder-white/50 text-sm outline-none transition-colors"
                      />
                      {errors.phone && (
                        <p id="quote-phone-error" role="alert" className="text-red-400 text-xs mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <p className="text-white/60 text-xs leading-relaxed">
                      By submitting, you agree that we may contact you by phone, text or email about your quote.
                      Msg &amp; data rates may apply. No spam — see our{" "}
                      <Link href="/privacy" className="text-gold-500 underline underline-offset-2">
                        Privacy Policy
                      </Link>
                      .
                    </p>

                    <div className="flex gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="flex-1 border border-white/10 hover:border-white/30 text-white/60 py-4 rounded-xl flex items-center justify-center gap-2"
                      >
                        <ArrowLeft size={18} aria-hidden="true" /> Back
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-gold-500 hover:bg-gold-400 text-black font-bold py-4 rounded-xl disabled:opacity-60 flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? "Sending..." : isQuoteOnly(service) ? "Request My Quote" : "See My Estimate"}
                        {!isSubmitting && <ArrowRight size={18} aria-hidden="true" />}
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
                    <CheckCircle size={36} className="text-gold-500" aria-hidden="true" />
                  </div>
                  <h3 className="text-white font-black text-2xl mb-2">
                    {isQuoteOnly(service) ? "Quote Request Received" : "Your Estimate"}
                  </h3>
                  <div className={`font-black text-gradient-gold mb-4 ${isQuoteOnly(service) ? "text-3xl" : "text-5xl"}`}>
                    {isQuoteOnly(service) ? priceSummary() : formatCurrency(estimate)}
                  </div>
                  <p className="text-white/50 text-sm mb-2">
                    {vehicles.find(v => v.type === vehicleType)?.label} · {services.find(s => s.type === service)?.label}
                  </p>
                  {isQuoteOnly(service) ? (
                    <p className="text-gold-500 text-xs mb-6">{selectionDetails().option}</p>
                  ) : (
                    selectedAddons.length > 0 && (
                      <p className="text-gold-500 text-xs mb-6">+ {selectedAddons.length} add-on{selectedAddons.length > 1 ? "s" : ""}</p>
                    )
                  )}
                  <p className="text-white/60 text-sm mb-8">
                    {isQuoteOnly(service)
                      ? "We'll reach out shortly with your personalized quote. Final pricing is confirmed after we see the vehicle, before any work begins."
                      : "This is an estimate based on starting prices. Your final price is confirmed after we see the vehicle, before any work begins. We'll reach out shortly to schedule."}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={COMPANY.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-black font-bold px-8 py-4 rounded-full transition-all"
                    >
                      Book Online Now<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                    <a
                      href={`tel:${COMPANY.phoneHref}`}
                      className="inline-flex items-center gap-2 glass border border-white/10 hover:border-gold-500/30 text-white font-bold px-8 py-4 rounded-full transition-all"
                    >
                      Call {COMPANY.phone}
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
