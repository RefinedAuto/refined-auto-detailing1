/**
 * Single source of truth for every service page. `/services/[slug]` renders
 * from this list, and the nav, footer, sitemap and city pages all read it —
 * add a service here and it shows up everywhere.
 *
 * Keep every claim here literally true: prices must match what's charged,
 * and don't describe work that isn't actually performed.
 */

export type PriceRow = {
  label: string;
  sedan: string;
  suv: string;
  large: string;
  description?: string;
  popular?: boolean;
};

export type Service = {
  slug: string;
  name: string;
  category: "Detailing Package" | "Paint & Protection" | "Add-On";
  /** Hub page this service sits under (breadcrumbs + nav grouping). */
  parent?: { name: string; path: string };
  metaTitle: string;
  metaDescription: string;
  /** Keyword-first H1 — "<service> in <area>" is what local searches look like. */
  h1: string;
  eyebrow: string;
  intro: string;
  image: { src: string; alt: string };
  /** Lowest price, numeric, for schema.org offers. Omit for quote-only services. */
  lowPrice?: number;
  startingPrice: string;
  pricingTitle?: string;
  pricing?: PriceRow[];
  /** Tiers shown without prices — each one is quoted individually. */
  packages?: { label: string; description: string; popular?: boolean }[];
  includes: { title?: string; items: string[] }[];
  note?: string;
  /** Add-ons grouped by what they protect; each row has one price per column. */
  addons?: { title: string; description: string; columns: string[]; rows: { label: string; prices: string[] }[] }[];
  about: { heading: string; paragraphs: string[] };
  idealFor: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const DETAIL_PACKAGES_HUB = { name: "Detail Packages", path: "/services/detail-packages" };

export const VEHICLE_LABELS = {
  sedan: "Sedan / Hatchback",
  suv: "SUV / Crossover",
  large: "Full-Size SUV / Truck",
} as const;

export const SERVICES: Service[] = [
  {
    slug: "ceramic-coating",
    name: "Ceramic Coating",
    category: "Paint & Protection",
    metaTitle: "Ceramic Coating in Snohomish & King County, WA | 1, 3 & 5-Year",
    metaDescription:
      "Mobile ceramic coating in Lynnwood, Everett, Edmonds, Shoreline, Kirkland, Redmond & across Snohomish and King County, WA. 1, 3 and 5-year coatings with decontamination and polish included. Starting from $600.",
    h1: "Ceramic Coating in Snohomish & King County, WA",
    eyebrow: "Ceramic Coating",
    intro:
      "Professional ceramic coating bonds to your vehicle's paint for hydrophobic, UV-resistant protection that keeps it glossy and easier to clean for years. Every package includes a three-step decontamination wash and a paint enhancement polish before the coating goes on.",
    image: { src: "/images/IMG_3438.JPG", alt: "Audi Q3 exterior after ceramic coating" },
    lowPrice: 600,
    startingPrice: "$600",
    pricingTitle: "Coating Packages",
    packages: [
      {
        label: "1-Year Ceramic Coating",
        description: "Decontamination wash and paint enhancement polish included.",
      },
      {
        label: "3-Year Ceramic Coating",
        description: "Extended protection with the same thorough prep.",
      },
      {
        label: "5-Year Ceramic Coating",
        description: "Our longest-lasting coating for maximum durability.",
        popular: true,
      },
    ],
    includes: [
      {
        items: [
          "Three-step decontamination wash",
          "Iron decontamination & clay bar",
          "Paint enhancement polish",
          "IPA surface wipe-down",
          "Professional ceramic coating application",
          "Aftercare instructions",
        ],
      },
    ],
    addons: [
      {
        title: "Window Coating",
        description: "Rain beads up and rolls off the glass, improving visibility in wet weather.",
        columns: ["Price"],
        rows: [
          { label: "All windows", prices: ["$300"] },
          { label: "Windshield & rear window only", prices: ["$125"] },
        ],
      },
      {
        title: "Wheel Coating",
        description:
          "Helps brake dust and grime rinse off instead of baking onto the wheels. Priced by wheel size — choose wheel faces only, or wheels off for full coverage.",
        columns: ["Wheel faces", "Wheels off"],
        rows: [
          { label: '15–18" wheels', prices: ["$180", "$480"] },
          { label: '19–22" wheels', prices: ["$240", "$580"] },
          { label: '23"+ wheels', prices: ["$320", "$640"] },
        ],
      },
      {
        title: "Leather Coating",
        description: "Helps protect leather seats from spills, stains and dye transfer from clothing.",
        columns: ["Price"],
        rows: [
          { label: "Sedan", prices: ["$250"] },
          { label: "SUV", prices: ["$300"] },
          { label: "Large SUV / Truck", prices: ["$350"] },
        ],
      },
    ],
    note: "Coating lifespan depends on proper maintenance — hand washing with pH-neutral soap and avoiding automatic brush washes. Heavy swirls or scratches may require paint correction before coating, quoted separately.",
    about: {
      heading: "Is Ceramic Coating Worth It in Washington?",
      paragraphs: [
        "In a climate with months of rain, road grime and tree sap, a ceramic coating makes a real difference. Water sheets off the surface, dirt has a harder time sticking, and contaminants like sap and bird droppings are easier to remove before they etch the paint.",
        "A coating is only as good as the surface under it, so every package starts with a full decontamination and a paint enhancement polish. That prep is what gives the coating its gloss and helps it bond properly.",
        "A ceramic coating is not a force field — it won't stop rock chips or deep scratches — but it's the most durable, lowest-maintenance paint protection short of paint protection film.",
      ],
    },
    idealFor: [
      "New or recently corrected paint",
      "Owners who want easier washing",
      "Vehicles parked outdoors year-round",
      "Leased or high-value vehicles",
    ],
    faqs: [
      {
        q: "How long does a ceramic coating last?",
        a: "We offer 1-year, 3-year and 5-year coatings. Actual lifespan depends on how the vehicle is washed and stored — we'll give you aftercare instructions so you get the most out of it.",
      },
      {
        q: "Do I need paint correction before ceramic coating?",
        a: "Every package includes a paint enhancement polish. If your paint has heavy swirls or scratches, a deeper paint correction may be recommended first and is quoted separately.",
      },
      {
        q: "Can I wash my car after it's coated?",
        a: "Yes, after the initial cure period we'll tell you about. Hand washing with a pH-neutral soap is best; avoid automatic brush washes.",
      },
    ],
    related: ["paint-correction", "elite-full-detail", "maintenance-plans"],
  },
  {
    slug: "paint-correction",
    name: "Paint Correction",
    category: "Paint & Protection",
    metaTitle: "Paint Correction & Swirl Removal | Snohomish & King County, WA",
    metaDescription:
      "Mobile paint correction in Lynnwood, Everett, Edmonds, Shoreline, Kirkland & across Snohomish and King County, WA. Machine polishing removes swirl marks, light scratches and oxidation. Free quote.",
    h1: "Paint Correction & Swirl Mark Removal in Snohomish & King County, WA",
    eyebrow: "Paint Correction",
    intro:
      "Paint correction is machine polishing that levels the clear coat to remove or reduce swirl marks, light scratches, water spots and oxidation. It restores depth and gloss that washing and waxing can't bring back — and it's the right prep before a ceramic coating.",
    image: { src: "/images/IMG_3469.JPG", alt: "Glossy Audi Q3 paint after polishing" },
    startingPrice: "Quote",
    includes: [
      {
        items: [
          "Paint inspection & condition assessment",
          "Full wash, iron decontamination & clay bar",
          "Masking of trim and sensitive areas",
          "Machine compounding and/or polishing",
          "Panel wipe to check true results",
          "Protection recommendation (sealant or ceramic coating)",
        ],
      },
    ],
    note: "Paint correction is priced after an in-person inspection because the time required depends on the paint's condition, hardness and the level of correction you want.",
    about: {
      heading: "What Paint Correction Can — and Can't — Fix",
      paragraphs: [
        "Most swirl marks come from automatic car washes and improper hand-washing. They sit in the top layer of clear coat, so carefully polishing that layer flat removes them and brings back a mirror-like reflection.",
        "Deeper scratches that have gone through the clear coat — usually ones you can catch with a fingernail — can often be reduced but not fully removed without paint work. We'll tell you honestly what to expect after inspecting your vehicle.",
        "Because correction removes a small amount of clear coat, we recommend protecting the result with a ceramic coating so the finish stays corrected.",
      ],
    },
    idealFor: [
      "Dark-colored cars showing swirl marks in sunlight",
      "Faded or oxidized paint",
      "Preparing for a ceramic coating",
      "Getting top dollar when selling",
    ],
    faqs: [
      {
        q: "How much does paint correction cost?",
        a: "It depends on the vehicle's size and paint condition and whether you want a one-step enhancement or multi-step correction. We give you a firm quote after inspecting the paint — contact us to set one up.",
      },
      {
        q: "Is paint correction safe for my paint?",
        a: "When done correctly, yes. We measure results as we go and remove only as much clear coat as needed.",
      },
      {
        q: "Can you do paint correction at my house?",
        a: "Yes, as long as the vehicle can be parked in a covered or shaded area. Direct sun and rain interfere with polishing, so we may reschedule in bad weather.",
      },
    ],
    related: ["ceramic-coating", "elite-full-detail", "headlight-restoration"],
  },
  {
    slug: "interior-detailing",
    name: "Interior Detailing",
    category: "Detailing Package",
    metaTitle: "Mobile Interior Car Detailing in Snohomish County, WA",
    metaDescription:
      "Mobile interior car detailing in Marysville, Everett, Lynnwood & all of Snohomish County. Steam cleaning, deep vacuuming, air blow-out, leather & plastic protection. From $160 — we come to you.",
    h1: "Mobile Interior Car Detailing in Snohomish County, WA",
    eyebrow: "Basic Interior Detail",
    intro:
      "An interior detail that leaves your cabin clean, fresh and protected — done in your driveway. We steam clean interior surfaces, deep vacuum every surface, blow debris out of every crevice with compressed air, clean the interior glass, and clean and protect all leather, plastics and vinyl.",
    image: { src: "/images/IMG_3373.JPG", alt: "Audi Q3 interior after a mobile interior detail" },
    lowPrice: 160,
    startingPrice: "$160",
    pricing: [{ label: "Basic Interior Detail", sedan: "$160+", suv: "$180+", large: "$200+" }],
    includes: [
      {
        items: [
          "Steam cleaning of interior surfaces",
          "Deep vacuuming — seats, carpets, mats & crevices",
          "Compressed-air blow-out of vents, seams & tracks",
          "Interior windows & mirrors cleaned",
          "Leather cleaned & protected",
          "Plastics & vinyl cleaned & protected",
        ],
      },
    ],
    note: "Upcharges: heavy pet hair +$50, stain removal +$50 ($100 if both are needed). Final price depends on vehicle size and condition.",
    about: {
      heading: "Interior Detailing That Comes to Your Driveway",
      paragraphs: [
        "Pacific Northwest weather means wet shoes, muddy floor mats and fogged-up glass for most of the year. Our mobile interior detail resets the cabin without you having to drop your car off at a shop — we bring the vacuums, air tools and professional-grade cleaners to your home or office anywhere in Snohomish County.",
        "Every interior detail starts with a full compressed-air blow-out to lift dirt from vents, seat rails and seams that a vacuum alone can't reach. We steam clean interior surfaces to loosen grime and refresh the cabin, then deep vacuum every surface, clean the interior glass streak-free, and clean and protect leather, plastic and vinyl so surfaces look new instead of greasy.",
        "Want the outside done too? The Essential Detail Package adds a hand wash and wheel cleaning for one visit.",
      ],
    },
    idealFor: [
      "Commuters and families with daily-driver messes",
      "Getting a car ready to sell or return from lease",
      "Seasonal refresh after a wet Washington winter",
      "Rideshare and delivery drivers",
    ],
    faqs: [
      {
        q: "How long does a mobile interior detail take?",
        a: "Most interior details take about 2–4 hours depending on vehicle size and condition. We'll give you a time estimate when you book.",
      },
      {
        q: "Do you remove pet hair?",
        a: "Yes. Light pet hair is handled as part of the vacuum. Heavy, embedded pet hair takes significantly more time and is a +$50 surcharge.",
      },
      {
        q: "Do you remove stains?",
        a: "Yes. Stain removal is a +$50 upcharge, separate from the pet hair upcharge. We treat stains on seats, carpets and mats; most lift completely, but some older or set-in stains can only be lightened.",
      },
      {
        q: "Do I need to be home during the interior detail?",
        a: "No. As long as we can access the vehicle and it's parked somewhere safe to work, you can go about your day. Please remove valuables before we arrive.",
      },
    ],
    related: ["full-detail", "elite-full-detail", "pet-hair-removal"],
  },
  {
    slug: "exterior-detailing",
    name: "Exterior Detailing",
    category: "Detailing Package",
    metaTitle: "Mobile Car Wash & Exterior Detailing in Snohomish County, WA",
    metaDescription:
      "Premium mobile hand car wash in Snohomish County, WA. Two-bucket hand wash, wheels & inner rims, tire dressing, door jambs. From $80 — at your home or office.",
    h1: "Mobile Car Wash & Exterior Detailing in Snohomish County, WA",
    eyebrow: "Premium Exterior Wash",
    intro:
      "A thorough hand wash that goes far beyond a drive-through car wash. We clean every wheel and inner rim, hand wash the paint using the two-bucket method, dry with soft microfiber, dress the tires and wipe down the door edges and jambs — all at your location.",
    image: { src: "/images/GS0A5263.jpeg", alt: "BMW M3 covered in foam during a mobile hand wash" },
    lowPrice: 80,
    startingPrice: "$80",
    pricing: [{ label: "Premium Exterior Wash", sedan: "$80+", suv: "$100+", large: "$120+" }],
    includes: [
      {
        items: [
          "Wheels, tires & inner rims cleaned",
          "Two-bucket hand wash method",
          "Soft microfiber towel drying",
          "Tire dressing",
          "Door edges & jambs wiped down",
        ],
      },
    ],
    note: "This service refreshes appearance. It does not remove embedded contaminants like tree sap, tar or iron fallout — for that, see the Elite Full Detail.",
    about: {
      heading: "A Hand Wash That Protects Your Paint",
      paragraphs: [
        "Automatic car washes use brushes and recycled water that drag grit across your paint and leave swirl marks behind. Our mobile exterior wash uses the two-bucket hand wash method — one bucket for soapy water, one for rinsing the mitt — so dirt goes into the bucket instead of back onto your car.",
        "We clean the wheel faces, barrels and inner rims where brake dust builds up, dry the car with plush microfiber towels, dress the tires and wipe down the door jambs that most washes skip entirely.",
      ],
    },
    idealFor: [
      "Regular upkeep between full details",
      "Ceramic-coated vehicles that need a safe wash",
      "A quick refresh before an event or road trip",
    ],
    faqs: [
      {
        q: "Do you need my water or power?",
        a: "For most washes, no — we bring our own equipment. For very large or heavily soiled vehicles, access to an outdoor spigot can help but isn't always required.",
      },
      {
        q: "Is a hand wash safe for ceramic coatings?",
        a: "Yes. A pH-balanced two-bucket hand wash is exactly how coated vehicles should be maintained.",
      },
    ],
    related: ["full-detail", "elite-full-detail", "ceramic-coating"],
  },
  {
    slug: "full-detail",
    name: "Essential Detail Package",
    category: "Detailing Package",
    parent: DETAIL_PACKAGES_HUB,
    metaTitle: "Full Car Detailing in Snohomish County, WA | Inside & Out",
    metaDescription:
      "Full car detailing, inside and out, at your home or office in Marysville, Everett, Lynnwood & Snohomish County. Essential Detail Package from $175. Mobile — we come to you.",
    h1: "Full Car Detailing in Snohomish County, WA",
    eyebrow: "Essential Detail Package",
    intro:
      "A complete interior and exterior refresh in one visit. The Essential Detail Package is designed to keep a well-maintained vehicle looking its best on a regular schedule, and we perform it wherever your car is parked.",
    image: { src: "/images/GS0A5621.jpeg", alt: "BMW M3 being hand dried during a full detail" },
    lowPrice: 175,
    startingPrice: "$175",
    pricing: [{ label: "Essential Detail Package", sedan: "$175+", suv: "$210+", large: "$250+" }],
    includes: [
      {
        title: "Exterior",
        items: [
          "Wheels, tires & inner rims cleaned",
          "Two-bucket hand wash",
          "Soft microfiber towel drying",
          "Tire dressing",
          "Door edges & jambs wiped down",
        ],
      },
      {
        title: "Interior",
        items: ["Light vacuum", "Surface wipe-down", "Windows & mirrors cleaned"],
      },
    ],
    note: "Upcharges: heavy pet hair +$50, stain removal +$50 ($100 if both are needed). This package does not remove embedded paint contaminants — the Elite Full Detail does.",
    about: {
      heading: "Inside-and-Out Detailing Without Leaving Home",
      paragraphs: [
        "The Essential Detail Package combines our exterior hand wash with an interior refresh, so the whole vehicle is clean after a single appointment. It's also the service performed at each Maintenance Plan visit.",
        "If your vehicle hasn't been professionally detailed in a while — or you're dealing with stains, sap or heavy grime — start with the Elite Full Detail instead. It adds full paint decontamination, a ceramic sealant and a deeper interior scrub.",
      ],
    },
    idealFor: [
      "Vehicles that are already in good shape",
      "Busy professionals who want one appointment for everything",
      "Maintenance Plan visits",
    ],
    faqs: [
      {
        q: "What's the difference between the Essential Detail Package and the Elite Full Detail?",
        a: "The Essential Detail Package is a maintenance clean. The Elite adds iron decontamination, a clay bar treatment, a ceramic sealant, and a full interior plastic and vinyl scrub and conditioning — it's our most thorough service.",
      },
      {
        q: "How long does a full detail take?",
        a: "Typically 3–6 hours depending on vehicle size and condition.",
      },
    ],
    related: ["elite-full-detail", "maintenance-plans", "interior-detailing"],
  },
  {
    slug: "elite-full-detail",
    name: "Elite Full Detail",
    category: "Detailing Package",
    parent: DETAIL_PACKAGES_HUB,
    metaTitle: "Elite Full Detail — Deep Clean Car Detailing in Snohomish County, WA",
    metaDescription:
      "Our most thorough mobile car detail: iron decontamination, clay bar, ceramic sealant and a full interior scrub. Serving Snohomish County, WA. From $300.",
    h1: "Elite Full Detail — Deep Clean Car Detailing in Snohomish County",
    eyebrow: "Elite Full Detail · Most Popular",
    intro:
      "Our most popular and most thorough detail — an extensive deep clean that addresses every crack, crevice and surface. The exterior is fully decontaminated with an iron remover and clay bar, then protected with a ceramic sealant. Inside, plastics and vinyl are scrubbed and conditioned.",
    image: { src: "/images/GS0A5749.jpeg", alt: "BMW M3 side profile after an Elite Full Detail" },
    lowPrice: 300,
    startingPrice: "$300",
    pricing: [{ label: "Elite Full Detail", sedan: "$300+", suv: "$350+", large: "$400+" }],
    includes: [
      {
        title: "Exterior",
        items: [
          "Wheel, tire & inner rim cleaning",
          "Two-bucket hand wash + strip wash",
          "Iron decontamination spray",
          "Clay bar treatment",
          "Microfiber towel drying",
          "Ceramic sealant application",
          "Tire dressing",
          "Door jambs wiped down",
        ],
      },
      {
        title: "Interior",
        items: [
          "Full vacuum",
          "Plastic & vinyl scrubbing",
          "Plastic & vinyl conditioning",
          "Windows & mirrors cleaned",
        ],
      },
    ],
    note: "Upcharges: heavy pet hair +$50, stain removal +$50 ($100 if both are needed). The Elite Full Detail is the required first visit for Maintenance Plans.",
    about: {
      heading: "Why Decontamination Matters in the Pacific Northwest",
      paragraphs: [
        "Snohomish County paint takes a beating: evergreen sap, road tar from I-5, and iron particles from brake dust bond to the clear coat and don't come off with a normal wash. Left alone, they make paint feel rough and dull.",
        "The Elite Full Detail removes them in two steps — a chemical iron remover that dissolves metal fallout, then a clay bar that pulls out whatever is left. With the paint truly clean, we apply a ceramic sealant that adds gloss and water-beading protection.",
        "Inside, we go beyond a wipe-down: plastics and vinyl are scrubbed to lift ground-in grime, then conditioned so they don't dry out or fade.",
      ],
    },
    idealFor: [
      "Vehicles that haven't been detailed in 6+ months",
      "Preparing a car for sale",
      "Starting a Maintenance Plan",
      "New-to-you used cars",
    ],
    faqs: [
      {
        q: "How long does the ceramic sealant last?",
        a: "A spray ceramic sealant typically lasts a few months depending on washing habits and weather. For multi-year protection, see our ceramic coating packages.",
      },
      {
        q: "Will the clay bar remove scratches?",
        a: "No. Clay removes bonded contaminants sitting on top of the paint. Scratches and swirl marks are defects in the paint itself and need paint correction (machine polishing).",
      },
    ],
    related: ["maintenance-plans", "paint-correction", "ceramic-coating"],
  },
  {
    slug: "maintenance-plans",
    name: "Maintenance Plans",
    category: "Detailing Package",
    metaTitle: "Recurring Car Detailing Maintenance Plans | Snohomish County, WA",
    metaDescription:
      "Bi-weekly or monthly mobile car detailing in Snohomish County, WA at discounted recurring rates. Keep your vehicle clean year-round. From $140 per visit.",
    h1: "Recurring Car Detailing Plans in Snohomish County, WA",
    eyebrow: "Maintenance Plans",
    intro:
      "Stay on top of your vehicle's appearance with a standing bi-weekly or monthly appointment. Each visit includes our Essential Detail Package at a discounted recurring rate — we show up on schedule so you never have to think about it.",
    image: { src: "/images/GS0A5754.jpeg", alt: "Freshly detailed BMW M3 front view" },
    lowPrice: 140,
    startingPrice: "$140",
    pricingTitle: "Price Per Visit",
    pricing: [
      { label: "Bi-Weekly Plan", sedan: "$140+", suv: "$160+", large: "$210+", popular: true },
      { label: "Monthly Plan", sedan: "$150+", suv: "$170+", large: "$220+" },
    ],
    includes: [
      {
        items: [
          "Bi-weekly or monthly scheduling",
          "Essential Detail Package performed each visit",
          "Discounted recurring rate",
          "Elite Full Detail required first to set the baseline",
        ],
      },
    ],
    note: "An Elite Full Detail is required before starting a plan so each maintenance visit starts from a properly clean baseline.",
    about: {
      heading: "The Easiest Way to Keep a Car Clean",
      paragraphs: [
        "A car that's cleaned on a regular schedule never gets to the point of needing a heavy, expensive restoration. Dirt and contaminants are removed before they bond to the paint or grind into the carpet.",
        "Plans start with one Elite Full Detail to bring the vehicle to a clean baseline. After that, each visit is an Essential Detail Package at a lower recurring price.",
      ],
    },
    idealFor: [
      "Daily drivers and long commutes",
      "Ceramic-coated vehicles",
      "Anyone who wants their car always ready",
    ],
    faqs: [
      {
        q: "What's the difference between bi-weekly and monthly?",
        a: "Both include an Essential Detail Package each visit. Bi-weekly visits cost slightly less per visit because the vehicle stays cleaner between appointments.",
      },
      {
        q: "Why is the Elite Full Detail required first?",
        a: "Maintenance visits are designed to keep a clean car clean. Starting from a fully decontaminated baseline is what makes the lower recurring price possible.",
      },
    ],
    related: ["elite-full-detail", "full-detail", "exterior-detailing"],
  },
  {
    slug: "headlight-restoration",
    name: "Headlight Restoration",
    category: "Add-On",
    metaTitle: "Headlight Restoration in Snohomish County, WA | Mobile Service",
    metaDescription:
      "Mobile headlight restoration in Snohomish County, WA. Restore cloudy, yellowed headlight lenses for a cleaner look. $60 add-on to any detail.",
    h1: "Headlight Restoration in Snohomish County, WA",
    eyebrow: "Add-On Service",
    intro:
      "Cloudy, yellowed headlights make any car look older than it is. Our headlight restoration removes the oxidized outer layer of the lens and brings back clarity — added to any detail appointment at your location.",
    image: { src: "/images/GS0A5754.jpeg", alt: "Clear headlights on a detailed BMW M3" },
    lowPrice: 60,
    startingPrice: "$60",
    includes: [
      {
        items: [
          "Surrounding paint and trim masked",
          "Oxidized lens layer removed",
          "Lens refined and polished to clarity",
          "Protective finish applied",
        ],
      },
    ],
    note: "Available as a $60 add-on to any detail package. Lenses with internal moisture or cracks can't be fixed by restoration.",
    about: {
      heading: "Why Headlights Turn Yellow",
      paragraphs: [
        "Modern headlight lenses are polycarbonate plastic with a factory UV coating. Over time that coating breaks down and the plastic oxidizes, turning hazy and yellow.",
        "Restoration removes the damaged layer and polishes the lens back to clarity. It's one of the most noticeable improvements you can make to a car's appearance for the cost.",
      ],
    },
    idealFor: ["Cars more than a few years old", "Preparing a car for sale", "Vehicles parked outside"],
    faqs: [
      {
        q: "Can I book headlight restoration by itself?",
        a: "It's offered as an add-on to any detail package. Contact us if you only need headlights and we'll see what we can do.",
      },
    ],
    related: ["exterior-detailing", "paint-correction", "engine-bay-detailing"],
  },
  {
    slug: "engine-bay-detailing",
    name: "Engine Bay Detailing",
    category: "Add-On",
    metaTitle: "Engine Bay Detailing in Snohomish County, WA | Mobile Service",
    metaDescription:
      "Mobile engine bay cleaning and dressing in Snohomish County, WA. A careful, low-water engine detail added to any service for $80.",
    h1: "Engine Bay Detailing in Snohomish County, WA",
    eyebrow: "Add-On Service",
    intro:
      "A careful engine bay cleaning that removes built-up dirt and grime, then dresses plastics and rubber for a clean, finished look. It's a great add-on when selling a car or after a long winter.",
    image: { src: "/images/IMG_3725.JPG", alt: "Volkswagen GTI engine bay after detailing" },
    lowPrice: 80,
    startingPrice: "$80",
    includes: [
      {
        items: [
          "Sensitive electrical components covered",
          "Degreasing of plastics and surfaces",
          "Agitation with detailing brushes",
          "Controlled low-pressure rinse or wipe-down",
          "Plastics and rubber dressed",
        ],
      },
    ],
    note: "Available as an $80 add-on to any detail package.",
    about: {
      heading: "A Clean Engine Bay, Done Safely",
      paragraphs: [
        "Engine bays collect road grime, leaves and dust that make even a clean car look neglected when the hood is up. We cover sensitive components, use a dedicated degreaser, and keep water use controlled.",
        "A clean engine bay also makes it easier to spot leaks, and it makes a strong impression on potential buyers.",
      ],
    },
    idealFor: ["Selling or trading in a vehicle", "Enthusiast and show cars", "Annual deep clean"],
    faqs: [
      {
        q: "Is it safe to clean an engine bay?",
        a: "Yes, when it's done carefully. We protect electrical components and avoid high-pressure water on sensitive areas.",
      },
    ],
    related: ["elite-full-detail", "headlight-restoration", "full-detail"],
  },
  {
    slug: "pet-hair-removal",
    name: "Pet Hair Removal",
    category: "Add-On",
    metaTitle: "Car Pet Hair Removal in Snohomish County, WA | Mobile Detailing",
    metaDescription:
      "Professional dog and cat hair removal from car seats and carpets in Snohomish County, WA. Added to any interior detail for $50. We come to you.",
    h1: "Car Pet Hair Removal in Snohomish County, WA",
    eyebrow: "Add-On Service",
    intro:
      "Dog and cat hair weaves itself into carpet and upholstery fibers and won't come out with a normal vacuum. We use dedicated tools and techniques to pull embedded hair from seats, carpets and cargo areas.",
    image: { src: "/images/IMG_3377.JPG", alt: "Clean rear seats of an Audi Q3 after interior detailing" },
    lowPrice: 50,
    startingPrice: "$50",
    includes: [
      {
        items: [
          "Rubber-tool and brush agitation of fabrics",
          "Compressed air to lift hair from seams",
          "Repeated high-suction vacuum passes",
          "Seats, carpets, mats & cargo area",
        ],
      },
    ],
    note: "Pet hair removal is a +$50 surcharge on any interior detail or detail package when heavy pet hair is present. Stain removal is a separate +$50.",
    about: {
      heading: "Why Pet Hair Is So Hard to Remove",
      paragraphs: [
        "Pet hair has tiny barbs that hook into carpet and fabric fibers, and static helps hold it in place. It takes a combination of agitation, air and suction — and time — to get it out.",
        "We add this to an interior or full detail so the whole cabin is cleaned in one visit.",
      ],
    },
    idealFor: ["Dog owners", "Cargo areas used for pets", "Getting a car ready to sell"],
    faqs: [
      {
        q: "Can you remove 100% of pet hair?",
        a: "We remove the vast majority, but in severe cases a few strands deeply woven into fabric may remain. We'll set expectations when we see the vehicle.",
      },
    ],
    related: ["interior-detailing", "full-detail", "elite-full-detail"],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

/** The main packages shown in nav menus (add-ons are reachable from /services). */
export const PRIMARY_SERVICES = SERVICES.filter((s) => s.category !== "Add-On");
