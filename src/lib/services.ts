/**
 * Service catalogue — the single source of truth for the services grid, the
 * /services index, and each /services/[slug] detail page. Adding a new service
 * here automatically creates its detail page, sitemap entry, and nav coverage.
 */

export type ServiceCategory = "preparation" | "sector";

export type Service = {
  slug: string;
  title: string;
  category: ServiceCategory;
  /** Short one-liner used in cards and meta descriptions. */
  summary: string;
  /** Longer intro paragraph for the detail page hero. */
  intro: string;
  /** Icon key — maps to an inline SVG in ServiceIcon. */
  icon: ServiceIconName;
  /** Bulleted scope of work / what's included. */
  scope: string[];
  /** "Why it matters" — value points for the client. */
  benefits: { title: string; description: string }[];
  /** Typical applications / where this service is used. */
  applications: string[];
};

export type ServiceIconName =
  | "level"
  | "grind"
  | "prep"
  | "patch"
  | "skim"
  | "residential"
  | "commercial"
  | "highrise"
  | "lowrise"
  | "multifamily";

export const services: Service[] = [
  // --- Core preparation services --------------------------------------------
  {
    slug: "self-levelling",
    title: "Self-Levelling",
    category: "preparation",
    icon: "level",
    summary:
      "Dead-flat, dead-level substrates using premium self-levelling underlayments — ready for tile, vinyl, hardwood, or polished finishes.",
    intro:
      "A finished floor is only as good as what sits beneath it. Our self-levelling underlayment services correct dips, slopes, and uneven pours to produce a smooth, flat, and true surface across the entire slab. We prime, gauge, and pump or hand-pour cementitious levellers to tight flatness tolerances so your final flooring lays perfectly and lasts.",
    scope: [
      "Moisture testing and slab assessment before pour",
      "Mechanical profiling and priming for guaranteed bond",
      "Pumped or hand-poured cementitious self-levelling underlayment",
      "Feather-edging and transitions to existing floor heights",
      "Flatness verification to FF/FL or 1/8\" over 10' tolerances",
    ],
    benefits: [
      {
        title: "Flawless finished floors",
        description:
          "Tile lippage, vinyl telegraphing, and hardwood squeaks almost always trace back to an uneven substrate. Levelling eliminates them at the source.",
      },
      {
        title: "Fast turnaround",
        description:
          "Pumped installations cover large commercial floor plates in a single day and are often walkable within hours.",
      },
      {
        title: "Engineered for the load",
        description:
          "We spec the right compressive-strength underlayment for residential, commercial, and heavy-traffic environments.",
      },
    ],
    applications: [
      "Luxury vinyl plank and sheet vinyl underlayment",
      "Large-format tile installations",
      "Engineered and hardwood flooring prep",
      "Correcting out-of-level condo and high-rise slabs",
    ],
  },
  {
    slug: "concrete-grinding",
    title: "Concrete Grinding",
    category: "preparation",
    icon: "grind",
    summary:
      "Diamond grinding to flatten high spots, remove coatings, and open concrete for a mechanical bond — dust-controlled and shovel-ready.",
    intro:
      "Concrete grinding is the workhorse of professional floor prep. Using planetary and edge grinders fitted with diamond tooling, we flatten high spots, remove old adhesives and coatings, and profile the slab to the exact texture your next finish requires. Every grind is run under HEPA dust extraction to keep occupied buildings clean and safe.",
    scope: [
      "High-spot grinding to bring slabs into tolerance",
      "Removal of paint, epoxy, mastic, and thin-set residue",
      "Concrete surface profiling (CSP) to coating spec",
      "HEPA-filtered dust extraction throughout",
      "Edge and detail grinding to walls and columns",
    ],
    benefits: [
      {
        title: "Guaranteed adhesion",
        description:
          "A properly profiled slab is the difference between a coating that lasts decades and one that peels in a season.",
      },
      {
        title: "Occupied-space friendly",
        description:
          "Dust-controlled grinding lets us work in tenanted offices, retail, and residential towers with minimal disruption.",
      },
      {
        title: "Cost-effective correction",
        description:
          "Grinding down high spots is often faster and cheaper than building the whole floor up with underlayment.",
      },
    ],
    applications: [
      "Coating and epoxy surface preparation",
      "Adhesive and old-flooring removal",
      "Slab flattening ahead of tile or LVP",
      "Trip-hazard and lippage correction",
    ],
  },
  {
    slug: "floor-preparation",
    title: "Floor Preparation",
    category: "preparation",
    icon: "prep",
    summary:
      "Complete substrate preparation — testing, cleaning, profiling, and priming — so every flooring system starts on a sound, bondable surface.",
    intro:
      "Floor preparation is the full-scope service that ties everything together. We assess the slab, test for moisture and pH, remove existing finishes, profile the surface, and prime it so the incoming flooring system bonds and performs as the manufacturer intends. It is the unglamorous work that quietly protects your investment.",
    scope: [
      "Moisture (RH / CaCl) and pH testing per ASTM standards",
      "Removal of existing flooring, adhesives, and coatings",
      "Shot blasting or grinding to the specified profile",
      "Crack chasing, filling, and joint treatment",
      "Priming and moisture mitigation as required",
    ],
    benefits: [
      {
        title: "Protects your warranty",
        description:
          "Flooring manufacturers require documented substrate conditions. We prepare and record them to keep warranties intact.",
      },
      {
        title: "Prevents costly failures",
        description:
          "Bubbling, delamination, and adhesive failure are almost always preparation failures. We prevent them up front.",
      },
      {
        title: "One accountable trade",
        description:
          "From testing to primer, a single crew owns the substrate so nothing falls between scopes.",
      },
    ],
    applications: [
      "New construction slab prep",
      "Renovation and flooring replacement",
      "Moisture mitigation before resilient flooring",
      "Multi-unit residential turnovers",
    ],
  },
  {
    slug: "patching",
    title: "Patching",
    category: "preparation",
    icon: "patch",
    summary:
      "Precision repair of cracks, spalls, holes, and damaged concrete using fast-setting, high-strength patching compounds.",
    intro:
      "Damaged and deteriorated concrete never disappears under new flooring — it telegraphs through and shortens the life of the finish. Our patching service rebuilds spalled edges, fills cracks and voids, and reprofiles damaged areas with high-strength, fast-setting compounds so the slab is sound, continuous, and ready to finish.",
    scope: [
      "Crack chasing, cleaning, and structural filling",
      "Spall and pop-out repair",
      "Rebuilding damaged control joints and slab edges",
      "Filling core holes, trenches, and demo scars",
      "Feathering repairs flush to the surrounding slab",
    ],
    benefits: [
      {
        title: "Sound, continuous slab",
        description:
          "Patched concrete carries load and resists movement so cracks don't reflect through your new floor.",
      },
      {
        title: "Fast-setting compounds",
        description:
          "High-early-strength materials let us patch and move to the next stage the same day, keeping schedules on track.",
      },
      {
        title: "Seamless transitions",
        description:
          "Repairs are feathered and sanded flush so they disappear beneath the finished flooring.",
      },
    ],
    applications: [
      "Repairing demolition and saw-cut damage",
      "Filling trenches after plumbing or electrical work",
      "Restoring spalled and pitted slabs",
      "Prepping damaged floors for coatings or resilient flooring",
    ],
  },
  {
    slug: "skim-coating",
    title: "Skim Coating",
    category: "preparation",
    icon: "skim",
    summary:
      "Thin, trowel-applied skim coats that smooth porous, rough, or profiled concrete into a glass-smooth canvas for resilient flooring.",
    intro:
      "When a slab is sound but the surface is rough, porous, or freshly ground, a skim coat brings it to a smooth, uniform finish. We trowel-apply a thin layer of high-quality smoothing compound to fill pinholes, texture, and minor imperfections — the ideal preparation for glue-down vinyl, sheet goods, and thin resilient flooring where every imperfection would otherwise show.",
    scope: [
      "Surface cleaning and priming for bond",
      "Trowel-applied smoothing / skim compound",
      "Filling pinholes, texture, and grind marks",
      "Fine sanding to a smooth, uniform finish",
      "Final flatness and smoothness inspection",
    ],
    benefits: [
      {
        title: "Perfect for resilient flooring",
        description:
          "Thin glue-down vinyl and sheet goods reveal every imperfection. A skim coat gives them a flawless base.",
      },
      {
        title: "Fills what grinding leaves behind",
        description:
          "Grinding opens the slab; skim coating closes the surface back up smooth and ready to finish.",
      },
      {
        title: "Uniform absorption",
        description:
          "A consistent surface means adhesives grab evenly for a stronger, longer-lasting flooring bond.",
      },
    ],
    applications: [
      "Glue-down luxury vinyl and sheet vinyl",
      "Smoothing freshly ground slabs",
      "Filling porous or textured concrete",
      "Retail and healthcare resilient flooring prep",
    ],
  },

  // --- Sectors we serve ------------------------------------------------------
  {
    slug: "residential",
    title: "Residential Flooring Prep",
    category: "sector",
    icon: "residential",
    summary:
      "Clean, dust-controlled floor preparation for homes, renovations, and custom builds across Metro Vancouver.",
    intro:
      "Homeowners and renovation contractors call us when the finished floor has to be perfect. We bring commercial-grade levelling, grinding, and patching to residential projects — with the dust control, tidiness, and scheduling flexibility that working in someone's home demands.",
    scope: [
      "Levelling and flattening for tile, hardwood, and vinyl",
      "Removal of old flooring, tile, and adhesives",
      "Dust-controlled grinding in occupied homes",
      "Patching and smoothing before new finishes",
      "Basement, main-floor, and whole-home prep",
    ],
    benefits: [
      {
        title: "Renovation-ready crews",
        description:
          "We protect adjacent spaces, control dust, and clean up daily so your home stays livable through the project.",
      },
      {
        title: "Any finish, done right",
        description:
          "From large-format tile to wide-plank hardwood, we prepare the substrate each product needs.",
      },
      {
        title: "Trusted by trades",
        description:
          "Flooring installers and general contractors sub their prep to us because our slabs pass every time.",
      },
    ],
    applications: [
      "Whole-home renovations",
      "Custom new-build homes",
      "Basement and laneway suite finishing",
      "Kitchen and bathroom flooring prep",
    ],
  },
  {
    slug: "commercial",
    title: "Commercial Flooring Prep",
    category: "sector",
    icon: "commercial",
    summary:
      "Large-scale, schedule-driven floor preparation for offices, retail, hospitality, and institutional projects.",
    intro:
      "Commercial floors move on tight schedules and unforgiving specs. We mobilize pump trucks, ride-on grinders, and experienced crews to prepare large floor plates fast — coordinating with GCs and other trades to keep the critical path clear and the flooring installers productive.",
    scope: [
      "High-volume pumped self-levelling for large floor plates",
      "Ride-on and walk-behind grinding at scale",
      "Coating and CSP profiling to project spec",
      "Moisture testing and mitigation",
      "Phased, off-hours, and fast-track scheduling",
    ],
    benefits: [
      {
        title: "Built for scale",
        description:
          "Pumped levellers and ride-on grinders let us cover tens of thousands of square feet without slowing the schedule.",
      },
      {
        title: "Spec compliance",
        description:
          "We prepare to the architect's and manufacturer's exact tolerances and document the results.",
      },
      {
        title: "Trade coordination",
        description:
          "We slot cleanly into the construction schedule and hand the installers a floor that's ready to go.",
      },
    ],
    applications: [
      "Office tenant improvements",
      "Retail and restaurant build-outs",
      "Healthcare and institutional floors",
      "Warehouse and light-industrial slabs",
    ],
  },
  {
    slug: "high-rise",
    title: "High-Rise Flooring Prep",
    category: "sector",
    icon: "highrise",
    summary:
      "Logistics-savvy floor preparation for concrete towers — hoisting, pumping, and staging across dozens of floors.",
    intro:
      "High-rise work is as much about logistics as it is about concrete. We plan material hoisting, pump routing, and floor-by-floor staging so levelling and grinding progress up the tower without bottlenecking the elevators or the schedule. Occupied-floor dust control and noise management come standard.",
    scope: [
      "Vertical material logistics and hoist coordination",
      "Pumped self-levelling on suspended slabs",
      "Lightweight underlayments where load matters",
      "Floor-by-floor grinding and profiling",
      "Occupied-tower dust and noise management",
    ],
    benefits: [
      {
        title: "Tower logistics handled",
        description:
          "We plan hoisting, pumping, and staging so prep keeps pace with the trades stacking above and below.",
      },
      {
        title: "Load-conscious systems",
        description:
          "On suspended slabs we spec underlayments that hit flatness targets without overloading the structure.",
      },
      {
        title: "Amenity and suite ready",
        description:
          "From lobbies and amenity floors to individual suites, we deliver consistent, finish-ready substrates.",
      },
    ],
    applications: [
      "Residential and mixed-use towers",
      "Amenity and common-area floors",
      "Suite-by-suite turnovers",
      "Podium and parkade-level slabs",
    ],
  },
  {
    slug: "low-rise",
    title: "Low-Rise Flooring Prep",
    category: "sector",
    icon: "lowrise",
    summary:
      "Efficient floor preparation for townhomes, walk-ups, and low-rise buildings with repeatable, unit-by-unit workflows.",
    intro:
      "Low-rise and townhome developments reward efficiency and consistency. We build a repeatable prep workflow — level, grind, patch, smooth — and roll it unit-to-unit so every home gets the same finish-ready floor on a predictable schedule your finishing trades can plan around.",
    scope: [
      "Repeatable unit-by-unit prep workflow",
      "Levelling and flattening across stacked plans",
      "Grinding and adhesive removal",
      "Patching, joint treatment, and smoothing",
      "Coordinated scheduling with finishing trades",
    ],
    benefits: [
      {
        title: "Consistent, unit-to-unit",
        description:
          "A standardized process means every townhome and unit gets the same reliable, finish-ready result.",
      },
      {
        title: "Predictable schedule",
        description:
          "Repeatable crews and methods let us commit to dates your finishing trades can build around.",
      },
      {
        title: "Right-sized equipment",
        description:
          "We match hand-pour and compact grinding gear to the tighter footprints low-rise work involves.",
      },
    ],
    applications: [
      "Townhome and rowhome developments",
      "Walk-up apartments",
      "Stacked and back-to-back plans",
      "Boutique low-rise condos",
    ],
  },
  {
    slug: "multi-family",
    title: "Multi-Family Flooring Prep",
    category: "sector",
    icon: "multifamily",
    summary:
      "Volume floor preparation for apartments and multi-family builds — consistent quality across hundreds of units.",
    intro:
      "Multi-family projects live and die by consistency and throughput. We staff, sequence, and standardize floor prep so hundreds of units get the same flat, sound, finish-ready substrate — whether it's a ground-up rental build, a condo development, or a large-scale renovation and turnover program.",
    scope: [
      "High-throughput levelling and grinding programs",
      "Standardized specs across every unit type",
      "Moisture testing and mitigation at scale",
      "Corridor, amenity, and suite prep",
      "Turnover and renovation prep programs",
    ],
    benefits: [
      {
        title: "Quality at volume",
        description:
          "Standardized methods and QA keep unit #300 as flat and sound as unit #1.",
      },
      {
        title: "Throughput that meets the pro forma",
        description:
          "We scale crews and equipment to hit the pace multi-family schedules and budgets demand.",
      },
      {
        title: "One prep partner",
        description:
          "Corridors, amenities, and suites all prepped by one accountable team keeps quality and scheduling simple.",
      },
    ],
    applications: [
      "Purpose-built rental developments",
      "Condominium builds",
      "Student and seniors housing",
      "Portfolio renovation and turnover programs",
    ],
  },
];

export const preparationServices = services.filter(
  (s) => s.category === "preparation"
);
export const sectorServices = services.filter((s) => s.category === "sector");

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
