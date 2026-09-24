/**
 * City landing pages rendered by `/service-areas/[city]`. Each city needs
 * genuinely unique copy — near-duplicate "doorway" pages that only swap the
 * city name are something Google explicitly demotes.
 */

export type Area = {
  slug: string;
  city: string;
  county: "Snohomish" | "King";
  zips: string[];
  intro: string;
  paragraphs: string[];
  neighborhoods: string[];
  /** Short blurb for the /service-areas index card. */
  summary: string;
  /** City-specific angle on ceramic coating and paint correction — our highest-value services. */
  protection: string;
};

export const AREAS: Area[] = [
  {
    slug: "marysville",
    city: "Marysville",
    county: "Snohomish",
    zips: ["98270", "98271"],
    summary:
      "We serve every Marysville neighborhood — from Downtown and Getchell to Smokey Point — right in your driveway.",
    intro:
      "Refined Auto Detailing brings professional mobile car detailing to driveways, apartment lots and offices across the city — from Downtown and Sunnyside to Getchell and Smokey Point.",
    paragraphs: [
      "Whether you need an interior reset after a season of wet weather, a hand wash before a weekend on the water, or a multi-year ceramic coating, we handle it at your location.",
      "Marysville drivers spend a lot of time on I-5 and SR-9, which means road film, tar and brake dust build up fast. Our Elite Full Detail removes that bonded grime with iron decontamination and a clay bar, then seals the paint.",
    ],
    protection:
      "Vehicles parked outside through Marysville's wet winters and pollen-heavy springs benefit most from protection. A ceramic coating keeps road film and tree sap from bonding to the paint, and paint correction removes the swirl marks left by years of automatic car washes.",
    neighborhoods: [
      "Downtown Marysville",
      "Smokey Point",
      "Getchell",
      "Sunnyside",
      "Soper Hill",
      "Allen Creek",
      "Lakewood",
      "Grove Street",
    ],
  },
  {
    slug: "everett",
    city: "Everett",
    county: "Snohomish",
    zips: ["98201", "98203", "98204", "98208"],
    summary:
      "From Northwest Everett and Port Gardner to Silver Lake and Mariner — mobile detailing at your home or workplace.",
    intro:
      "Refined Auto Detailing provides mobile car detailing throughout Everett, from the historic homes of Northwest Everett down to Silver Lake and Mariner. We come to your home, apartment or workplace so your car gets detailed while you get on with your day.",
    paragraphs: [
      "Everett's waterfront air, rain and heavy commuter traffic are hard on paint. A two-bucket hand wash and periodic decontamination keep grime from bonding to the clear coat, and a ceramic coating makes the car far easier to keep clean between visits.",
      "Many of our Everett clients book around the workday — we can detail your vehicle in a workplace parking lot if the property allows it. Just let us know where the vehicle will be when you book.",
    ],
    protection:
      "For Everett drivers, a ceramic coating is the easiest way to deal with salt air off Port Gardner Bay and constant rain — water sheets off and grime rinses away. If your paint already looks hazy or swirled, paint correction restores the gloss before it's locked in.",
    neighborhoods: [
      "Northwest Everett",
      "Bayside",
      "Riverside",
      "Port Gardner",
      "Silver Lake",
      "Mariner",
      "Pinehurst",
      "Westmont",
      "Forest Park",
      "South Everett",
    ],
  },
  {
    slug: "lynnwood",
    city: "Lynnwood",
    county: "Snohomish",
    zips: ["98036", "98037", "98087"],
    summary:
      "Serving Alderwood, Meadowdale, City Center and Martha Lake with mobile interior, exterior and full detailing.",
    intro:
      "We bring mobile car detailing to Lynnwood homes, condos and offices — from Meadowdale and Alderwood to City Center and Martha Lake. No drop-off, no waiting room: we detail your vehicle where it's already parked.",
    paragraphs: [
      "South Snohomish County traffic around I-5, I-405 and Highway 99 leaves vehicles coated in road film. Our Premium Exterior Wash handles regular upkeep, while the Elite Full Detail tackles the embedded contamination that builds up over months.",
      "For Lynnwood commuters who want the car to stay clean with zero effort, a bi-weekly or monthly Maintenance Plan keeps it on a regular schedule.",
    ],
    protection:
      "Lynnwood commuters rack up miles on I-5 and I-405, and the road film and brake dust show. Paint correction removes the resulting swirls and dullness, and a 1, 3 or 4-year ceramic coating makes future washes fast and easy.",
    neighborhoods: [
      "Alderwood",
      "City Center",
      "Meadowdale",
      "Martha Lake",
      "Cedar Valley",
      "Scriber Lake",
    ],
  },
  {
    slug: "mukilteo",
    city: "Mukilteo",
    county: "Snohomish",
    zips: ["98275"],
    summary:
      "Old Town to Harbour Pointe — mobile detailing and ceramic coating for Mukilteo's salt-air conditions.",
    intro:
      "Refined Auto Detailing serves all of Mukilteo, from the Old Town waterfront to Harbour Pointe. We detail your vehicle at your home or office, so there's no need to drive it anywhere.",
    paragraphs: [
      "Living near Possession Sound means salt air and marine moisture settle on your vehicle's paint, glass and wheels. Regular hand washing and a durable layer of protection — a ceramic sealant or a multi-year ceramic coating — help keep that from dulling the finish.",
      "For vehicles that already show swirl marks or oxidation, paint correction restores the gloss before protection is applied.",
    ],
    protection:
      "Salt air from the Sound makes Mukilteo one of the best places in the area for ceramic coating — it adds a slick, hydrophobic barrier over the clear coat. We recommend paint correction first on vehicles showing oxidation or water spots.",
    neighborhoods: ["Old Town", "Harbour Pointe", "Chennault Beach", "Picnic Point", "Paine Field area"],
  },
  {
    slug: "mill-creek",
    city: "Mill Creek",
    county: "Snohomish",
    zips: ["98012"],
    summary:
      "Town Center, the Country Club, Thomas Lake and beyond — premium mobile detailing at your door.",
    intro:
      "We provide mobile car detailing throughout Mill Creek — from the Town Center and Mill Creek Country Club to Thomas Lake, Arbor Pointe and Penny Creek. Your vehicle gets detailed in your own driveway.",
    paragraphs: [
      "Mill Creek's tree-lined streets are beautiful, but they drop sap, pollen and needles on vehicles all year. Tree sap left on paint can etch the clear coat, so our Elite Full Detail and ceramic coating packages include full decontamination to remove it safely.",
      "If your HOA has rules about working in driveways, just let us know when you book and we'll plan around them.",
    ],
    protection:
      "Tree sap and pollen are Mill Creek's biggest paint enemies. A ceramic coating makes them far easier to remove before they etch, and paint correction can polish out light etching and swirls that are already there.",
    neighborhoods: [
      "Town Center",
      "Mill Creek Country Club",
      "Thomas Lake",
      "Arbor Pointe",
      "Penny Creek",
      "North Creek",
      "Silver Firs",
    ],
  },
  {
    slug: "lake-stevens",
    city: "Lake Stevens",
    county: "Snohomish",
    zips: ["98258"],
    summary:
      "Frontier Village, Downtown and around the lake — mobile detailing for cars, trucks and SUVs.",
    intro:
      "Refined Auto Detailing brings mobile detailing to Lake Stevens — around the lake, near Frontier Village and throughout the surrounding neighborhoods. We come to you, so your weekend stays yours.",
    paragraphs: [
      "Lake Stevens drivers tend to have trucks and SUVs that see real use — towing boats, hauling gear and running gravel roads. Our full detail packages are priced by vehicle size, and heavy pet hair or mud is handled with add-on services so pricing stays transparent.",
      "After a summer at the lake, an Elite Full Detail removes the grime, water spots and sap that build up, and a ceramic coating makes future washes much easier.",
    ],
    protection:
      "Between lake days, gravel roads and towing, Lake Stevens vehicles collect water spots and grime fast. Paint correction removes spotting and haze, and a ceramic coating keeps trucks and SUVs easier to clean all season.",
    neighborhoods: ["Downtown Lake Stevens", "Frontier Village", "North Cove", "Cavalero", "Machias", "Lochsloy"],
  },
  {
    slug: "arlington",
    city: "Arlington",
    county: "Snohomish",
    zips: ["98223"],
    summary:
      "Downtown Arlington, Smokey Point and the surrounding area — we bring the detail shop to you.",
    intro:
      "We provide mobile car detailing in Arlington, WA — Downtown, Smokey Point, Arlington Heights and the surrounding rural roads. Just tell us where the vehicle will be parked and we'll bring everything needed.",
    paragraphs: [
      "Arlington's mix of highway commuting and rural roads means mud, dust and road grime on wheels, lower panels and floor mats. Our interior and exterior packages focus on exactly those areas.",
      "For farm trucks and work vehicles, the Full-Size SUV / Truck pricing tier applies, and our Elite Full Detail's deep interior scrub handles ground-in dirt.",
    ],
    protection:
      "Dust from rural roads and long highway miles dull paint over time. Paint correction brings back the shine, and a ceramic coating helps Arlington vehicles shed mud and grime with a simple rinse.",
    neighborhoods: ["Downtown Arlington", "Smokey Point", "Arlington Heights", "Gleneagle", "Island Crossing"],
  },
  {
    slug: "snohomish",
    city: "Snohomish",
    county: "Snohomish",
    zips: ["98290", "98296"],
    summary:
      "Historic Downtown, Cathcart, Clearview and Maltby — mobile detailing at your home or farm.",
    intro:
      "Refined Auto Detailing serves the city of Snohomish and nearby Cathcart, Clearview and Maltby. From historic Downtown homes to rural properties, we detail your vehicle on-site.",
    paragraphs: [
      "The Snohomish valley's rain, farm roads and tall evergreens are tough on vehicles — mud on lower panels, sap on the roof, and damp carpets inside. Our Elite Full Detail addresses all three in one visit.",
      "For classic or collector cars around Snohomish, paint correction and ceramic coating help restore and preserve original finishes.",
    ],
    protection:
      "Farm roads, evergreen sap and valley rain make protection worth it in Snohomish. Paint correction restores faded or swirled finishes — including on classic cars — and a ceramic coating helps preserve them.",
    neighborhoods: ["Historic Downtown", "Cathcart", "Clearview", "Maltby", "Three Lakes"],
  },
  {
    slug: "bothell",
    city: "Bothell",
    county: "King",
    zips: ["98011", "98012", "98021"],
    summary:
      "Canyon Park, Country Village, North Creek and Downtown Bothell — mobile detailing at home or work.",
    intro:
      "We bring mobile car detailing to Bothell — Canyon Park, North Creek, Country Village and Downtown. Whether you work in one of the Canyon Park business parks or at home, we can detail your vehicle where it's parked.",
    paragraphs: [
      "Busy Bothell professionals often book a Maintenance Plan so their vehicle is cleaned on a set schedule without taking time out of the week.",
      "For newer vehicles, a ceramic coating applied early keeps factory paint looking new and makes every future wash faster.",
    ],
    protection:
      "Newer vehicles around Canyon Park and North Creek are ideal ceramic coating candidates — protecting factory paint early keeps it looking new. For older finishes, paint correction removes swirls and restores clarity first.",
    neighborhoods: ["Canyon Park", "North Creek", "Country Village", "Downtown Bothell", "Thrasher's Corner", "Queensborough"],
  },
  {
    slug: "edmonds",
    city: "Edmonds",
    county: "Snohomish",
    zips: ["98020", "98026"],
    summary:
      "Downtown \"the Bowl\", Perrinville, Five Corners and Westgate — mobile detailing near the waterfront.",
    intro:
      "Refined Auto Detailing provides mobile car detailing throughout Edmonds — Downtown and the Bowl, Perrinville, Five Corners, Westgate and Firdale Village. We come to your home so there's no need to drive anywhere.",
    paragraphs: [
      "Edmonds' waterfront location means marine air and moisture settle on paint and glass. A ceramic coating or ceramic sealant adds a protective layer that makes salt residue and grime easy to rinse off.",
      "Older vehicles with faded paint or cloudy headlights are good candidates for paint correction and headlight restoration — two of the most visible improvements you can make.",
    ],
    protection:
      "Marine air in Edmonds leaves a film on paint and glass. A ceramic coating makes salt residue easy to rinse away, and paint correction removes the oxidation and water spotting that waterfront living can cause.",
    neighborhoods: ["Downtown / the Bowl", "Perrinville", "Five Corners", "Westgate", "Firdale Village", "Esperance"],
  },
  {
    slug: "shoreline",
    city: "Shoreline",
    county: "King",
    zips: ["98133", "98155", "98177"],
    summary:
      "Richmond Beach to North City and Ridgecrest — mobile detailing and ceramic coating at your Shoreline home.",
    intro:
      "Refined Auto Detailing brings mobile car detailing to Shoreline, WA — from Richmond Beach and Innis Arden to Echo Lake, Ridgecrest and North City. We detail your vehicle in your driveway, so there's no drop-off and no waiting room.",
    paragraphs: [
      "Just north of Seattle, Shoreline drivers split time between Aurora Avenue, I-5 commutes and the waterfront at Richmond Beach. That mix of road film and marine air is exactly what our Elite Full Detail's iron decontamination and clay bar treatment are designed to remove.",
      "Many Shoreline homes sit under mature evergreens, which drop sap and needles on parked cars. We remove sap safely and can seal the paint so it's easier to clean next time.",
    ],
    protection:
      "Salt air near Richmond Beach and year-round rain make ceramic coating one of the most popular services for Shoreline vehicles. If the paint is already swirled or dull, paint correction restores the gloss before the coating locks it in.",
    neighborhoods: [
      "Richmond Beach",
      "Innis Arden",
      "Richmond Highlands",
      "Echo Lake",
      "Ridgecrest",
      "North City",
      "Ballinger",
      "Hillwood",
    ],
  },
  {
    slug: "lake-forest-park",
    city: "Lake Forest Park",
    county: "King",
    zips: ["98155"],
    summary:
      "Sheridan Beach, Horizon View and the Town Center area — premium mobile detailing under the trees.",
    intro:
      "We provide mobile car detailing throughout Lake Forest Park — Sheridan Beach, Sheridan Heights, Horizon View, Brookside and the neighborhoods around Town Center. Your vehicle is detailed right at home.",
    paragraphs: [
      "Lake Forest Park lives up to its name: heavily wooded streets mean tree sap, pollen, needles and moss spores land on vehicles constantly. Our interior and exterior packages clean it all out, and the Elite Full Detail removes bonded sap and contamination from the paint.",
      "Steep, narrow driveways are common here — just let us know your parking setup when you book and we'll plan around it.",
    ],
    protection:
      "Under Lake Forest Park's tree canopy, a ceramic coating is one of the best investments you can make — sap and pollen wipe off instead of etching the clear coat. Paint correction can remove light sap etching and swirls before coating.",
    neighborhoods: ["Sheridan Beach", "Sheridan Heights", "Horizon View", "Brookside", "Lyon Creek", "Town Center area"],
  },
  {
    slug: "kirkland",
    city: "Kirkland",
    county: "King",
    zips: ["98033", "98034"],
    summary:
      "Juanita, Totem Lake, Houghton and downtown Kirkland — ceramic coating, paint correction and full mobile detailing.",
    intro:
      "Refined Auto Detailing brings mobile car detailing, paint correction and ceramic coating to Kirkland, WA — Juanita, Totem Lake, Kingsgate, Finn Hill, Rose Hill, Houghton and downtown along Lake Washington. We come to your home or office.",
    paragraphs: [
      "Kirkland's streets are full of luxury vehicles and EVs, and those finishes deserve careful work. We use a two-bucket hand wash, safe decontamination and products suited to Tesla and other EV interiors.",
      "Condo and apartment living around downtown and Totem Lake is common — if you park in a garage or shared lot, tell us when you book and confirm the property allows on-site service.",
    ],
    protection:
      "Ceramic coating and paint correction are a natural fit for Kirkland's newer and high-end vehicles. Correction removes dealer-installed swirl marks and wash haze; a 1, 3 or 4-year ceramic coating then keeps the finish glossy through Eastside rain.",
    neighborhoods: [
      "Downtown / Moss Bay",
      "Juanita",
      "Totem Lake",
      "Kingsgate",
      "Finn Hill",
      "Rose Hill",
      "Houghton",
      "Bridle Trails",
    ],
  },
  {
    slug: "redmond",
    city: "Redmond",
    county: "King",
    zips: ["98052", "98053"],
    summary:
      "Downtown Redmond, Education Hill, Overlake and Redmond Ridge — mobile detailing at home or work.",
    intro:
      "We provide mobile car detailing in Redmond, WA — Downtown, Education Hill, Overlake, Grass Lawn, Idylwood and Redmond Ridge. Your vehicle gets detailed at home or, where the property allows it, at your workplace.",
    paragraphs: [
      "Redmond professionals often don't have time to drop a car off at a shop. A recurring Maintenance Plan keeps your vehicle clean on a set schedule, and every visit happens wherever the car is parked.",
      "With lots of newer vehicles and EVs in Redmond, we focus on safe wash methods and interior products that are gentle on screens, synthetic leather and piano-black trim.",
    ],
    protection:
      "For new vehicles, a ceramic coating applied early is the best way to keep factory paint looking new through Redmond's wet months. Older finishes with swirls or haze get paint correction first so the coating locks in a flawless shine.",
    neighborhoods: [
      "Downtown Redmond",
      "Education Hill",
      "Overlake",
      "Grass Lawn",
      "Idylwood",
      "Redmond Ridge",
      "Willows / Rose Hill",
    ],
  },
];

export function getArea(slug: string) {
  return AREAS.find((a) => a.slug === slug);
}
