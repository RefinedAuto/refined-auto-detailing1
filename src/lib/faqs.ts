/**
 * General questions, shown (with FAQPage schema) on the home page. The
 * contact and quote pages reuse the booking-related ones without schema, so
 * the structured data stays on one URL.
 */
export const GENERAL_FAQS = [
  {
    q: "What is mobile auto detailing?",
    a: "Mobile auto detailing means we bring our professional equipment directly to your location — your home, office, or anywhere convenient — so you never have to drop your car off at a shop.",
  },
  {
    q: "How long does a detail take?",
    a: "Service time depends on vehicle size and condition. Interior-only details take 2–4 hours, exterior details take 1.5–3 hours, and full details take 3–6 hours. We'll give you a specific time estimate when you book.",
  },
  {
    q: "Do you need water and electricity?",
    a: "For most services, no. We carry our own water tanks and battery-powered equipment. For certain services that require significant water (large SUVs, heavily soiled vehicles), having a standard outdoor hose available is helpful but not always required.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Snohomish County and north King County, WA — including Lynnwood, Everett, Marysville, Mukilteo, Mill Creek, Edmonds, Lake Stevens, Arlington, Snohomish, Bothell, Shoreline, Lake Forest Park, Kirkland and Redmond. Our service radius is about 30 miles; if you're unsure, just reach out.",
  },
  {
    q: "How much does detailing cost?",
    a: "Pricing depends on vehicle size, the service selected and the vehicle's condition. The Premium Exterior Wash starts at $80, the Basic Interior Detail at $160, the Essential Detail Package at $175 and the Elite Full Detail at $300. Use our quote builder for an estimate for your vehicle.",
  },
  {
    q: "What's the difference between a car wash and a detail?",
    a: "A car wash removes surface dirt. A detail is a much more thorough process — cleaning, decontaminating and protecting surfaces inside and out with professional-grade tools and products.",
  },
  {
    q: "Do you offer ceramic coating?",
    a: "Yes. We offer 1-year, 3-year and 5-year ceramic coatings starting from $600, with each package quoted for your vehicle. Every package includes a decontamination wash and a paint enhancement polish before the coating is applied. Vehicles with heavy swirls or scratches may need paint correction first, quoted separately.",
  },
  {
    q: "What's your cancellation policy?",
    a: "We ask for at least 24 hours' notice for cancellations and rescheduling. Late cancellations and no-shows may be subject to a fee — see our Terms of Service for details.",
  },
  {
    q: "Do you detail Tesla and EV vehicles?",
    a: "Yes. We detail Teslas and other EVs, using products that are safe for synthetic (vegan) leather, large touchscreens and piano-black trim.",
  },
  {
    q: "Is your work guaranteed?",
    a: "Yes. If you're not happy with any part of your detail, contact us within 24 hours and we'll come back to correct the issue at no additional charge. See our Terms of Service for the full guarantee.",
  },
];

const BOOKING_QUESTIONS = [
  "How much does detailing cost?",
  "Do you need water and electricity?",
  "How long does a detail take?",
  "What's your cancellation policy?",
  "Is your work guaranteed?",
];

export const BOOKING_FAQS = GENERAL_FAQS.filter((f) => BOOKING_QUESTIONS.includes(f.q));
