/**
 * Project gallery data.
 *
 * Built to scale to hundreds of photos: each project owns an array of images,
 * and the gallery UI paginates/filters over the flattened set. Real project
 * photography is not wired up yet, so each image has an optional `src`. When
 * `src` is undefined the UI renders a branded, category-tinted placeholder —
 * so the layout, lightbox, and SEO are all production-ready today and only the
 * image files need dropping in later (into /public/images/gallery/...).
 *
 * To add real photos:
 *   1. Drop files into /public/images/gallery/<project-slug>/
 *   2. Set `src: "/images/gallery/<project-slug>/<file>.jpg"` on each image
 *   3. (Optional) add new projects following the shape below.
 */

import { serviceAreas } from "./site";

export type ProjectImage = {
  /** Public path to the image. Leave undefined to render a placeholder. */
  src?: string;
  /** Descriptive alt text — always write real, specific alt text for SEO/a11y. */
  alt: string;
  orientation?: "landscape" | "portrait" | "square";
};

export type ProjectSector =
  | "Residential"
  | "Commercial"
  | "High-Rise"
  | "Low-Rise"
  | "Multi-Family";

export type Project = {
  slug: string;
  title: string;
  location: (typeof serviceAreas)[number] | string;
  sector: ProjectSector;
  /** Service tags shown as badges + used for filtering. */
  services: string[];
  year: number;
  summary: string;
  /** Full description shown in the project detail / lightbox caption. */
  description: string;
  coverAlt: string;
  images: ProjectImage[];
  featured?: boolean;
};

export const projectSectors: ProjectSector[] = [
  "Residential",
  "Commercial",
  "High-Rise",
  "Low-Rise",
  "Multi-Family",
];

export const projects: Project[] = [
  {
    slug: "coal-harbour-tower-suites",
    title: "Coal Harbour Tower — Suite Levelling Program",
    location: "Vancouver",
    sector: "High-Rise",
    services: ["Self-Levelling", "Concrete Grinding", "Floor Preparation"],
    year: 2024,
    featured: true,
    summary:
      "Floor-by-floor self-levelling and grinding across 210 suites in a downtown concrete tower.",
    description:
      "A 34-storey Coal Harbour tower needed every suite brought dead-flat ahead of engineered hardwood and large-format tile. We staged materials by hoist, pumped self-levelling underlayment floor by floor, and ground high spots on the suspended slabs — all under dust control while trades stacked above and below. Consistent, finish-ready substrates across all 210 units kept the flooring installers on schedule.",
    coverAlt:
      "Freshly poured self-levelling underlayment across a high-rise condo suite in Vancouver",
    images: [
      { alt: "Pumped self-levelling underlayment flowing across a high-rise suite slab", orientation: "landscape" },
      { alt: "Diamond grinder profiling a suspended concrete slab in a Vancouver tower", orientation: "landscape" },
      { alt: "Primed condo slab ready for self-levelling underlayment", orientation: "portrait" },
      { alt: "Finished dead-flat floor in a Coal Harbour high-rise suite", orientation: "landscape" },
    ],
  },
  {
    slug: "burnaby-metrotown-retail",
    title: "Metrotown Retail Build-Out",
    location: "Burnaby",
    sector: "Commercial",
    services: ["Concrete Grinding", "Skim Coating", "Patching"],
    year: 2024,
    featured: true,
    summary:
      "Adhesive removal, grinding, and skim coating for a fast-track retail flooring install.",
    description:
      "A flagship retail tenant in Metrotown needed 8,000 sq ft turned around on a compressed schedule. We stripped old adhesive, ground the slab to profile under HEPA extraction, patched demolition scars, and skim-coated the surface glass-smooth for glue-down luxury vinyl. The floor was walkable the same evening and ready for the installers the next morning.",
    coverAlt:
      "Ground and skim-coated retail concrete floor ready for luxury vinyl in Burnaby",
    images: [
      { alt: "Ride-on grinder removing old adhesive from a retail concrete slab in Burnaby", orientation: "landscape" },
      { alt: "Trowel-applied skim coat smoothing a commercial floor", orientation: "landscape" },
      { alt: "Patched demolition scars feathered flush on a retail slab", orientation: "square" },
      { alt: "Smooth finished substrate ready for glue-down luxury vinyl", orientation: "landscape" },
    ],
  },
  {
    slug: "surrey-townhome-development",
    title: "Surrey Townhome Development — 96 Units",
    location: "Surrey",
    sector: "Low-Rise",
    services: ["Self-Levelling", "Patching", "Floor Preparation"],
    year: 2023,
    featured: true,
    summary:
      "Repeatable unit-by-unit floor prep across a 96-home townhome community.",
    description:
      "For a 96-unit Surrey townhome development we built a repeatable prep workflow and rolled it home to home: level the main floors, patch and treat joints, and hand the finishing trades a consistent, finish-ready substrate on a predictable schedule. Standardized methods kept unit #96 as flat and sound as unit #1.",
    coverAlt:
      "Self-levelling underlayment poured across a Surrey townhome main floor",
    images: [
      { alt: "Hand-poured self-levelling underlayment in a Surrey townhome", orientation: "landscape" },
      { alt: "Control joints treated and patched before levelling", orientation: "portrait" },
      { alt: "Primed townhome slab ready for underlayment", orientation: "landscape" },
      { alt: "Finish-ready floor in a completed Surrey townhome unit", orientation: "landscape" },
    ],
  },
  {
    slug: "richmond-office-ti",
    title: "Richmond Office Tenant Improvement",
    location: "Richmond",
    sector: "Commercial",
    services: ["Floor Preparation", "Self-Levelling", "Concrete Grinding"],
    year: 2023,
    summary:
      "Moisture-tested prep and pumped levelling for a 22,000 sq ft office floor plate.",
    description:
      "A Richmond office tenant improvement required a large, dead-flat floor plate for carpet tile and luxury vinyl. We tested slab moisture, ground down high spots, and pumped self-levelling underlayment across 22,000 sq ft in a single mobilization — documenting flatness and moisture results to protect the flooring warranty.",
    coverAlt:
      "Pumped self-levelling underlayment across a large Richmond office floor plate",
    images: [
      { alt: "Pump truck placing self-levelling underlayment on a Richmond office floor", orientation: "landscape" },
      { alt: "Relative humidity moisture probe installed in an office slab", orientation: "square" },
      { alt: "Walk-behind grinder flattening high spots on a commercial slab", orientation: "landscape" },
    ],
  },
  {
    slug: "coquitlam-multifamily-rental",
    title: "Coquitlam Purpose-Built Rental",
    location: "Coquitlam",
    sector: "Multi-Family",
    services: ["Self-Levelling", "Concrete Grinding", "Floor Preparation"],
    year: 2024,
    summary:
      "Volume floor prep across 180 apartments plus corridors and amenity spaces.",
    description:
      "This purpose-built rental in Coquitlam needed consistent prep across 180 suites, corridors, and amenity floors. We standardized the spec, scaled crews to the pace of the schedule, and delivered flat, sound, finish-ready substrates throughout — with QA at every unit to hold quality across the whole building.",
    coverAlt:
      "Levelled corridor slab in a Coquitlam multi-family rental building",
    images: [
      { alt: "Levelled corridor floor in a Coquitlam apartment building", orientation: "landscape" },
      { alt: "Grinding profiling an amenity-room slab", orientation: "landscape" },
      { alt: "Standardized suite floor prep in a multi-family build", orientation: "portrait" },
    ],
  },
  {
    slug: "langley-custom-home",
    title: "Langley Custom Home",
    location: "Langley",
    sector: "Residential",
    services: ["Self-Levelling", "Patching", "Skim Coating"],
    year: 2023,
    summary:
      "Whole-home levelling and smoothing for wide-plank hardwood and large-format tile.",
    description:
      "A custom Langley home called for wide-plank engineered hardwood in the living spaces and large-format tile through the entry and baths. We levelled the main floor, patched the transitions, and skim-coated where the tile demanded a flawless base — all with the dust control and daily cleanup that working in a finished home requires.",
    coverAlt:
      "Levelled and smoothed main-floor slab in a Langley custom home",
    images: [
      { alt: "Self-levelling underlayment in a Langley custom home great room", orientation: "landscape" },
      { alt: "Skim-coated bathroom floor ready for large-format tile", orientation: "portrait" },
      { alt: "Feathered patch transition between rooms", orientation: "square" },
      { alt: "Finished flat substrate ready for wide-plank hardwood", orientation: "landscape" },
    ],
  },
  {
    slug: "north-van-amenity-floors",
    title: "North Vancouver Tower Amenity Floors",
    location: "North Vancouver",
    sector: "High-Rise",
    services: ["Concrete Grinding", "Self-Levelling", "Floor Preparation"],
    year: 2024,
    summary:
      "Lobby and amenity-level prep for polished and tiled finishes in a North Shore tower.",
    description:
      "The lobby and amenity floors of a North Vancouver tower needed to make a first impression. We ground and levelled the podium-level slabs to tight tolerances for tile and a polished-concrete look, coordinating around the hoist and other trades to keep the building's critical path clear.",
    coverAlt:
      "Ground and levelled amenity-floor slab in a North Vancouver tower",
    images: [
      { alt: "Polished-look concrete prep in a North Vancouver tower lobby", orientation: "landscape" },
      { alt: "Edge grinding to columns on an amenity-level slab", orientation: "portrait" },
      { alt: "Levelled amenity floor ready for large-format tile", orientation: "landscape" },
    ],
  },
  {
    slug: "west-van-waterfront-reno",
    title: "West Vancouver Waterfront Renovation",
    location: "West Vancouver",
    sector: "Residential",
    services: ["Floor Preparation", "Concrete Grinding", "Self-Levelling"],
    year: 2022,
    summary:
      "Full substrate prep for a high-end waterfront home renovation.",
    description:
      "A West Vancouver waterfront renovation replaced dated finishes throughout. We removed the old flooring and adhesives, ground the slab clean, and levelled the floors for a mix of natural stone and engineered hardwood — meeting the exacting standards a high-end coastal home demands.",
    coverAlt:
      "Prepared and levelled slab in a West Vancouver waterfront home renovation",
    images: [
      { alt: "Old flooring and adhesive removal in a West Vancouver home", orientation: "landscape" },
      { alt: "Ground slab cleaned and profiled for new finishes", orientation: "landscape" },
      { alt: "Levelled floor ready for natural stone", orientation: "portrait" },
    ],
  },
  {
    slug: "vancouver-restaurant-buildout",
    title: "Vancouver Restaurant Build-Out",
    location: "Vancouver",
    sector: "Commercial",
    services: ["Patching", "Concrete Grinding", "Skim Coating"],
    year: 2023,
    summary:
      "Trench patching and smooth prep for a downtown restaurant kitchen and dining room.",
    description:
      "A downtown Vancouver restaurant needed its slab rebuilt after plumbing and electrical rough-in. We filled trenches and core holes, ground the dining-room floor to profile, and skim-coated it smooth for resilient flooring — turning a torn-up slab back into a continuous, finish-ready surface.",
    coverAlt:
      "Patched and smoothed restaurant slab in downtown Vancouver",
    images: [
      { alt: "Plumbing trench filled and feathered in a restaurant slab", orientation: "landscape" },
      { alt: "Dining-room floor ground to profile", orientation: "landscape" },
      { alt: "Skim-coated kitchen floor ready for resilient flooring", orientation: "square" },
    ],
  },
  {
    slug: "surrey-seniors-housing",
    title: "Surrey Seniors Housing",
    location: "Surrey",
    sector: "Multi-Family",
    services: ["Floor Preparation", "Self-Levelling", "Skim Coating"],
    year: 2024,
    summary:
      "Smooth, level, slip-considerate prep across suites and common areas in a seniors residence.",
    description:
      "A Surrey seniors housing project required smooth, level floors throughout for safe, comfortable resilient flooring. We prepared and levelled the suites and common areas and skim-coated for a flawless resilient-flooring base, holding consistent quality across the full building.",
    coverAlt:
      "Levelled and smoothed common-area floor in a Surrey seniors residence",
    images: [
      { alt: "Levelled suite floor in a Surrey seniors housing project", orientation: "landscape" },
      { alt: "Skim-coated common-area floor ready for resilient flooring", orientation: "landscape" },
      { alt: "Smooth, level corridor substrate", orientation: "portrait" },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Total image count across all projects — used in copy ("500+ photos" etc.). */
export function totalImageCount(): number {
  return projects.reduce((sum, p) => sum + p.images.length, 0);
}
