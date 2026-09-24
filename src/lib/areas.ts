/**
 * City landing pages rendered by `/service-areas/[city]`. Each city needs
 * genuinely unique copy — near-duplicate "doorway" pages that only swap the
 * city name are something Google explicitly demotes.
 */

export type Area = {
  slug: string;
  city: string;
  zips: string[];
  intro: string;
  paragraphs: string[];
  neighborhoods: string[];
  /** Short blurb for the /service-areas index card. */
  summary: string;
};

export const AREAS: Area[] = [
  {
    slug: "marysville",
    city: "Marysville",
    zips: ["98270", "98271"],
    summary:
      "We serve every Marysville neighborhood — from Downtown and Getchell to Smokey Point — right in your driveway.",
    intro:
      "Refined Auto Detailing brings professional mobile car detailing to driveways, apartment lots and offices across the city — from Downtown and Sunnyside to Getchell and Smokey Point.",
    paragraphs: [
      "Whether you need an interior reset after a season of wet weather, a hand wash before a weekend on the water, or a multi-year ceramic coating, we handle it at your location.",
      "Marysville drivers spend a lot of time on I-5 and SR-9, which means road film, tar and brake dust build up fast. Our Elite Full Detail removes that bonded grime with iron decontamination and a clay bar, then seals the paint.",
    ],
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
    zips: ["98201", "98203", "98204", "98208"],
    summary:
      "From Northwest Everett and Port Gardner to Silver Lake and Mariner — mobile detailing at your home or workplace.",
    intro:
      "Refined Auto Detailing provides mobile car detailing throughout Everett, from the historic homes of Northwest Everett down to Silver Lake and Mariner. We come to your home, apartment or workplace so your car gets detailed while you get on with your day.",
    paragraphs: [
      "Everett's waterfront air, rain and heavy commuter traffic are hard on paint. A two-bucket hand wash and periodic decontamination keep grime from bonding to the clear coat, and a ceramic coating makes the car far easier to keep clean between visits.",
      "Many of our Everett clients book around the workday — we can detail your vehicle in a workplace parking lot if the property allows it. Just let us know where the vehicle will be when you book.",
    ],
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
    zips: ["98036", "98037", "98087"],
    summary:
      "Serving Alderwood, Meadowdale, City Center and Martha Lake with mobile interior, exterior and full detailing.",
    intro:
      "We bring mobile car detailing to Lynnwood homes, condos and offices — from Meadowdale and Alderwood to City Center and Martha Lake. No drop-off, no waiting room: we detail your vehicle where it's already parked.",
    paragraphs: [
      "South Snohomish County traffic around I-5, I-405 and Highway 99 leaves vehicles coated in road film. Our Premium Exterior Wash handles regular upkeep, while the Elite Full Detail tackles the embedded contamination that builds up over months.",
      "For Lynnwood commuters who want the car to stay clean with zero effort, a bi-weekly or monthly Maintenance Plan keeps it on a regular schedule.",
    ],
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
    zips: ["98275"],
    summary:
      "Old Town to Harbour Pointe — mobile detailing and ceramic coating for Mukilteo's salt-air conditions.",
    intro:
      "Refined Auto Detailing serves all of Mukilteo, from the Old Town waterfront to Harbour Pointe. We detail your vehicle at your home or office, so there's no need to drive it anywhere.",
    paragraphs: [
      "Living near Possession Sound means salt air and marine moisture settle on your vehicle's paint, glass and wheels. Regular hand washing and a durable layer of protection — a ceramic sealant or a multi-year ceramic coating — help keep that from dulling the finish.",
      "For vehicles that already show swirl marks or oxidation, paint correction restores the gloss before protection is applied.",
    ],
    neighborhoods: ["Old Town", "Harbour Pointe", "Chennault Beach", "Picnic Point", "Paine Field area"],
  },
  {
    slug: "mill-creek",
    city: "Mill Creek",
    zips: ["98012"],
    summary:
      "Town Center, the Country Club, Thomas Lake and beyond — premium mobile detailing at your door.",
    intro:
      "We provide mobile car detailing throughout Mill Creek — from the Town Center and Mill Creek Country Club to Thomas Lake, Arbor Pointe and Penny Creek. Your vehicle gets detailed in your own driveway.",
    paragraphs: [
      "Mill Creek's tree-lined streets are beautiful, but they drop sap, pollen and needles on vehicles all year. Tree sap left on paint can etch the clear coat, so our Elite Full Detail and ceramic coating packages include full decontamination to remove it safely.",
      "If your HOA has rules about working in driveways, just let us know when you book and we'll plan around them.",
    ],
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
    zips: ["98258"],
    summary:
      "Frontier Village, Downtown and around the lake — mobile detailing for cars, trucks and SUVs.",
    intro:
      "Refined Auto Detailing brings mobile detailing to Lake Stevens — around the lake, near Frontier Village and throughout the surrounding neighborhoods. We come to you, so your weekend stays yours.",
    paragraphs: [
      "Lake Stevens drivers tend to have trucks and SUVs that see real use — towing boats, hauling gear and running gravel roads. Our full detail packages are priced by vehicle size, and heavy pet hair or mud is handled with add-on services so pricing stays transparent.",
      "After a summer at the lake, an Elite Full Detail removes the grime, water spots and sap that build up, and a ceramic coating makes future washes much easier.",
    ],
    neighborhoods: ["Downtown Lake Stevens", "Frontier Village", "North Cove", "Cavalero", "Machias", "Lochsloy"],
  },
  {
    slug: "arlington",
    city: "Arlington",
    zips: ["98223"],
    summary:
      "Downtown Arlington, Smokey Point and the surrounding area — we bring the detail shop to you.",
    intro:
      "We provide mobile car detailing in Arlington, WA — Downtown, Smokey Point, Arlington Heights and the surrounding rural roads. Just tell us where the vehicle will be parked and we'll bring everything needed.",
    paragraphs: [
      "Arlington's mix of highway commuting and rural roads means mud, dust and road grime on wheels, lower panels and floor mats. Our interior and exterior packages focus on exactly those areas.",
      "For farm trucks and work vehicles, the Full-Size SUV / Truck pricing tier applies, and our Elite Full Detail's deep interior scrub handles ground-in dirt.",
    ],
    neighborhoods: ["Downtown Arlington", "Smokey Point", "Arlington Heights", "Gleneagle", "Island Crossing"],
  },
  {
    slug: "snohomish",
    city: "Snohomish",
    zips: ["98290", "98296"],
    summary:
      "Historic Downtown, Cathcart, Clearview and Maltby — mobile detailing at your home or farm.",
    intro:
      "Refined Auto Detailing serves the city of Snohomish and nearby Cathcart, Clearview and Maltby. From historic Downtown homes to rural properties, we detail your vehicle on-site.",
    paragraphs: [
      "The Snohomish valley's rain, farm roads and tall evergreens are tough on vehicles — mud on lower panels, sap on the roof, and damp carpets inside. Our Elite Full Detail addresses all three in one visit.",
      "For classic or collector cars around Snohomish, paint correction and ceramic coating help restore and preserve original finishes.",
    ],
    neighborhoods: ["Historic Downtown", "Cathcart", "Clearview", "Maltby", "Three Lakes"],
  },
  {
    slug: "bothell",
    city: "Bothell",
    zips: ["98011", "98012", "98021"],
    summary:
      "Canyon Park, Country Village, North Creek and Downtown Bothell — mobile detailing at home or work.",
    intro:
      "We bring mobile car detailing to Bothell — Canyon Park, North Creek, Country Village and Downtown. Whether you work in one of the Canyon Park business parks or at home, we can detail your vehicle where it's parked.",
    paragraphs: [
      "Busy Bothell professionals often book a Maintenance Plan so their vehicle is cleaned on a set schedule without taking time out of the week.",
      "For newer vehicles, a ceramic coating applied early keeps factory paint looking new and makes every future wash faster.",
    ],
    neighborhoods: ["Canyon Park", "North Creek", "Country Village", "Downtown Bothell", "Thrasher's Corner", "Queensborough"],
  },
  {
    slug: "edmonds",
    city: "Edmonds",
    zips: ["98020", "98026"],
    summary:
      "Downtown \"the Bowl\", Perrinville, Five Corners and Westgate — mobile detailing near the waterfront.",
    intro:
      "Refined Auto Detailing provides mobile car detailing throughout Edmonds — Downtown and the Bowl, Perrinville, Five Corners, Westgate and Firdale Village. We come to your home so there's no need to drive anywhere.",
    paragraphs: [
      "Edmonds' waterfront location means marine air and moisture settle on paint and glass. A ceramic coating or ceramic sealant adds a protective layer that makes salt residue and grime easy to rinse off.",
      "Older vehicles with faded paint or cloudy headlights are good candidates for paint correction and headlight restoration — two of the most visible improvements you can make.",
    ],
    neighborhoods: ["Downtown / the Bowl", "Perrinville", "Five Corners", "Westgate", "Firdale Village", "Esperance"],
  },
];

export function getArea(slug: string) {
  return AREAS.find((a) => a.slug === slug);
}
