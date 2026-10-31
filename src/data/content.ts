import texGlacier from "@/assets/tex-glacier.jpg";
import texNoir from "@/assets/tex-noir.jpg";
import texCrimson from "@/assets/tex-crimson.jpg";
import texAsh from "@/assets/tex-ash.jpg";
import texSand from "@/assets/tex-sand.jpg";
import texVein from "@/assets/tex-vein.jpg";
import appKitchen from "@/assets/app-kitchen.jpg";
import appReception from "@/assets/app-reception.jpg";
import appBath from "@/assets/app-bath.jpg";
import appFacade from "@/assets/app-facade.jpg";
import appRetail from "@/assets/app-retail.jpg";
import proj1 from "@/assets/proj-1.jpg";
import proj2 from "@/assets/proj-2.jpg";
import proj3 from "@/assets/proj-3.jpg";
import proj4 from "@/assets/proj-4.jpg";
import journal1 from "@/assets/journal-1.jpg";
import journal2 from "@/assets/journal-2.jpg";
import journal3 from "@/assets/journal-3.jpg";
import aboutStudio from "@/assets/about-studio.jpg";
import heroMain from "@/assets/hero-main.jpg";
import fabCnc from "@/assets/fab-cnc.jpg";
import fabThermo from "@/assets/fab-thermo.jpg";

export const images = {
  texGlacier,
  texNoir,
  texCrimson,
  texAsh,
  texSand,
  texVein,
  appKitchen,
  appReception,
  appBath,
  appFacade,
  appRetail,
  proj1,
  proj2,
  proj3,
  proj4,
  journal1,
  journal2,
  journal3,
  aboutStudio,
  heroMain,
  fabCnc,
  fabThermo,
};

/* ————— Materials & Colours ————— */

export type Colour = { name: string; hex: string; finish: string };

export type Collection = {
  id: string;
  name: string;
  note: string;
  description: string;
  swatch: string;
  hero: string;
  colours: Colour[];
};

export const collections: Collection[] = [
  {
    id: "solids",
    name: "Solids",
    note: "Pure, homogeneous colour",
    description:
      "Colour with nothing to prove. Seamless, non-porous and quietly confident — the workhorse of the library.",
    swatch: texGlacier,
    hero: appKitchen,
    colours: [
      { name: "Glacier", hex: "#f3f1ec", finish: "Matte" },
      { name: "Bone", hex: "#e7e2d8", finish: "Matte" },
      { name: "Fog", hex: "#d3d3d1", finish: "Matte" },
      { name: "Ink", hex: "#1c1c20", finish: "Matte" },
    ],
  },
  {
    id: "aggregate",
    name: "Aggregate",
    note: "Mineral-flecked depth",
    description:
      "Crushed stone suspended in resin. Light catches the flecks; joints disappear. Terrazzo restraint without the weight.",
    swatch: texSand,
    hero: appRetail,
    colours: [
      { name: "Seashell", hex: "#e6ddcd", finish: "Venetian" },
      { name: "Oat", hex: "#d9cdb6", finish: "Venetian" },
      { name: "Dove", hex: "#c9c7c2", finish: "Venetian" },
      { name: "Pebble", hex: "#a89f92", finish: "Venetian" },
    ],
  },
  {
    id: "veined",
    name: "Veined",
    note: "Drawn from marble memory",
    description:
      "Veins that travel through the full sheet thickness, so every routed edge keeps the story going.",
    swatch: texVein,
    hero: appBath,
    colours: [
      { name: "Calacatta", hex: "#f0ede7", finish: "Polished" },
      { name: "Veined White", hex: "#eae7e1", finish: "Polished" },
      { name: "Silver Root", hex: "#dcd8d2", finish: "Polished" },
      { name: "Basalt Grey", hex: "#8f8d8a", finish: "Polished" },
    ],
  },
  {
    id: "terra",
    name: "Terra",
    note: "Warm earth pigments",
    description:
      "Clay, rust and oxide. The warm end of the palette — engineered to feel hand-made, built to survive kitchens.",
    swatch: texCrimson,
    hero: proj3,
    colours: [
      { name: "Crimson Clay", hex: "#a4492f", finish: "Matte" },
      { name: "Oxide", hex: "#8a4a37", finish: "Matte" },
      { name: "Sienna", hex: "#c07a4e", finish: "Matte" },
      { name: "Ember", hex: "#5f2f22", finish: "Matte" },
    ],
  },
  {
    id: "ash",
    name: "Ash",
    note: "Concrete, softened",
    description:
      "The Brutalist register without the porosity. Architectural greys that read as poured stone, clean like a lab.",
    swatch: texAsh,
    hero: appFacade,
    colours: [
      { name: "Ash Grey", hex: "#a9a8a6", finish: "Matte" },
      { name: "Concrete", hex: "#93928f", finish: "Matte" },
      { name: "Slate", hex: "#6f6f6d", finish: "Matte" },
      { name: "Graphite", hex: "#4a4a4c", finish: "Matte" },
    ],
  },
  {
    id: "noir",
    name: "Noir",
    note: "Deep mineral blacks",
    description:
      "Blacks with grain. A fine metallic sparkle keeps these surfaces from going flat under lighting.",
    swatch: texNoir,
    hero: proj2,
    colours: [
      { name: "Noir", hex: "#17171a", finish: "Fine Velvet" },
      { name: "Deep Night", hex: "#232327", finish: "Fine Velvet" },
      { name: "Sparkling Black", hex: "#101014", finish: "Sparkle" },
      { name: "Meteorite", hex: "#2b2b2f", finish: "Sparkle" },
    ],
  },
];

/* ————— Applications ————— */

export type Application = {
  id: string;
  name: string;
  sector: string;
  line: string;
  image: string;
};

export const applications: Application[] = [
  {
    id: "kitchens",
    name: "Kitchens",
    sector: "Residential",
    line: "Seamless islands, integrated sinks, invisible joins.",
    image: appKitchen,
  },
  {
    id: "reception",
    name: "Reception desks",
    sector: "Hospitality",
    line: "Monolithic curves, thermoformed in one piece.",
    image: appReception,
  },
  {
    id: "bathrooms",
    name: "Bathrooms",
    sector: "Residential",
    line: "Integral basins, coved splashbacks, no grout ever.",
    image: appBath,
  },
  {
    id: "facades",
    name: "Facades & cladding",
    sector: "Architecture",
    line: "Large-format panels for exterior weathering.",
    image: appFacade,
  },
  {
    id: "retail",
    name: "Retail displays",
    sector: "Commercial",
    line: "Sculpted counters that carry a brand's silhouette.",
    image: appRetail,
  },
  {
    id: "healthcare",
    name: "Healthcare",
    sector: "Institutional",
    line: "Non-porous, hygienic, repairable in place.",
    image: appBath,
  },
];

/* ————— Projects ————— */

export type Project = {
  slug: string;
  title: string;
  location: string;
  year: string;
  scope: string[];
  surface: string;
  summary: string;
  body: string[];
  image: string;
};

export const projects: Project[] = [
  {
    slug: "the-curve-house",
    title: "The Curve House",
    location: "Bengaluru",
    year: "2025",
    scope: ["Kitchen island", "Vanity", "Shelving wall"],
    surface: "Solids — Glacier",
    summary: "A single white mass that flows from kitchen to living room without a joint.",
    body: [
      "The brief asked for one gesture, not many materials. The island, breakfast ledge and media wall were fabricated from the same Glacier sheet lot so the tone never drifts between rooms.",
      "Every edge was thermoformed rather than built up — a 40 mm tight radius, sanded to a matte finish that matches the factory sheen. The sink is integral; the tap hole is the only interruption.",
      "Eighteen months on, the surface has been buffed back to factory finish twice — the point of solid surface is that the wear disappears, not the object.",
    ],
    image: proj1,
  },
  {
    slug: "meridian-hotel",
    title: "Meridian Hotel",
    location: "Goa",
    year: "2024",
    scope: ["Reception desk", "Bar counter", "Spiral stair cladding"],
    surface: "Noir & Solids — Noir / Bone",
    summary: "A spiralling white form wrapping a dark lobby, fabricated in eleven segments.",
    body: [
      "The stair is the centrepiece: 6.5 metres of continuous curved cladding, thermoformed over a plywood buck in our workshop, then assembled on site in eleven segments with invisible seams.",
      "The bar runs 9 metres without a visible joint. Under-lit cove lighting grazes the matte surface, which was specified for exactly this kind of low-angle light.",
      "High-traffic surfaces were finished in Fine Velvet Noir to keep glassware marks out of sight between services.",
    ],
    image: proj2,
  },
  {
    slug: "ember-house",
    title: "Ember House",
    location: "Hyderabad",
    year: "2025",
    scope: ["Bar counter", "Table tops", "Serving counters"],
    surface: "Terra — Crimson Clay",
    summary: "Warm terracotta surfaces holding their own against hand-plastered walls.",
    body: [
      "A restaurant that leans earthy needs surfaces that can survive it. Crimson Clay runs through the bar, all table tops and the open serving counters.",
      "The serpentine bar front was cut in CNC-milled sections and hand-blended on site; the matte finish hides water rings from glassware.",
      "Colour consistency across three sheet batches was verified under D65 lighting before fabrication began.",
    ],
    image: proj3,
  },
  {
    slug: "north-tower-lobby",
    title: "North Tower Lobby",
    location: "Mumbai",
    year: "2026",
    scope: ["Reception desk", "Lounge seating", "Wayfinding"],
    surface: "Ash — Concrete",
    summary: "Poured-stone greys for a lobby that needed to feel carved, not fitted.",
    body: [
      "The reception and the 14-metre lounge bench were fabricated as two pieces of the same Concrete grey lot, giving the lobby a single continuous geological line.",
      "Curved seating was thermoformed in sections; the desk was built up from a steel armature and clad in 12 mm sheet.",
      "The specification prioritised repairability — surface damage in a lobby is a schedule problem, and solid surface lets us sand it out overnight.",
    ],
    image: proj4,
  },
];

/* ————— Journal ————— */

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  body: string[];
  image: string;
};

export const posts: Post[] = [
  {
    slug: "the-invisible-joint",
    title: "The invisible joint",
    category: "Fabrication",
    date: "Feb 2026",
    readTime: "4 min",
    excerpt:
      "What actually makes two sheets of solid surface disappear into one — and why most failures start with prep, not glue.",
    body: [
      "A seam in solid surface is not a joint, it is a repair you plan in advance. Both faces are cut simultaneously with a router on a straight jig, so the two profiles are complementary by construction rather than by measurement.",
      "Colour-matched adhesive is squeezed slightly proud of the surface, then removed in two passes: first with a router shoe flush to the sheet, then with abrasive to the factory finish. The result photographs as one piece.",
      "Most seam failures trace back to prep — resin-rich faces not sanded back, moisture in the sheet, or a jig that was straight on Tuesday. The adhesive never gets the blame it deserves.",
    ],
    image: journal1,
  },
  {
    slug: "choosing-a-white",
    title: "Choosing a white",
    category: "Materials",
    date: "Jan 2026",
    readTime: "5 min",
    excerpt:
      "Six whites that look identical under showroom light and completely different in a kitchen at 7 pm. How to specify properly.",
    body: [
      "Whites separate on three axes: undertone, light transmission and texture. A cool white next to warm oak reads blue; the same sheet next to polished chrome reads neutral. Undertones only show up in situ.",
      "Translucent whites were engineered for backlit signage and glowing counters — lay a sample over a light box before committing, because a 12 mm glowing edge changes the entire mood of a bar.",
      "Our rule: shortlist under D65, verify under the actual site lighting, at the actual installation height, at night. One hour of diligence replaces a decade of apology.",
    ],
    image: journal2,
  },
  {
    slug: "heat-forming-notes",
    title: "Notes on heat-forming",
    category: "Fabrication",
    date: "Dec 2025",
    readTime: "6 min",
    excerpt:
      "Radii, moulds and the 165°C window — a maker's field guide to bending sheets without fighting them.",
    body: [
      "Solid surface thermoforms between roughly 140 and 170 degrees. Below that, the sheet fights the mould and springs back; above that, the resin begins to discolour. The window is narrow and unforgiving.",
      "Moulds matter more than ovens. A plywood buck with a smooth, uniformly sanded surface produces clean radii; gaps and steps in the mould print themselves into the finished face forever.",
      "Minimum safe radii depend on thickness — 6 mm sheet will do things a 12 mm sheet will refuse to. We keep a radius sample board at the workshop door so clients can point, not guess.",
    ],
    image: journal3,
  },
];

/* ————— Products ————— */

export type Product = {
  id: string;
  name: string;
  blurb: string;
  spec: string;
  image: string;
};

export const products: Product[] = [
  {
    id: "sheets",
    name: "Sheets",
    blurb: "Standard & large-format sheet stock",
    spec: "6 / 12 mm · 2480 × 768 mm · 30+ colours",
    image: texVein,
  },
  {
    id: "sinks",
    name: "Seamless sinks & bowls",
    blurb: "Integral basins that fuse to the counter",
    spec: "Bowl / vanity / prep · matte finish",
    image: appBath,
  },
  {
    id: "fabricated",
    name: "Fabricated pieces",
    blurb: "Counters, desks & cladding to drawing",
    spec: "CNC-cut · thermoformed · site-installed",
    image: appReception,
  },
  {
    id: "edges",
    name: "Edges & profiles",
    blurb: "Built-up edges, coves & tight radii",
    spec: "6–100 mm build-ups · thermoformed radii",
    image: journal3,
  },
];

export const stats = [
  { value: "140+", label: "Colours stocked" },
  { value: "480+", label: "Projects delivered" },
  { value: "18", label: "Years fabricating" },
  { value: "72h", label: "Sample dispatch" },
];
