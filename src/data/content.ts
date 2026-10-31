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
  category?: "Residential" | "Hospitality" | "Commercial" | "Retail";
  architect?: string;
  area?: string;
  challenge?: string;
  solution?: string;
  specs?: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "the-curve-house",
    title: "The Curve House",
    location: "Bengaluru",
    year: "2025",
    category: "Residential",
    architect: "Studio Vardhan Architects",
    area: "420 sq.m",
    scope: ["Kitchen island", "Vanity", "Shelving wall"],
    surface: "Solids — Glacier",
    summary: "A single white mass that flows from kitchen to living room without a joint.",
    challenge:
      "Achieving an uninterrupted 4.2m island surface with zero visible seams while incorporating an integrated undercut sink basin with continuous linear grain alignment.",
    solution:
      "Engineered specialized workshop pre-assembly with digital laser templating and colour-matched adhesive curing on site, achieving an entirely monolithic appearance with sub-millimetre precision.",
    specs: [
      { label: "Surface Material", value: "Glacier White (12 mm)" },
      { label: "Island Dimensions", value: "4200 × 1100 mm" },
      { label: "Edge Profile", value: "40 mm Thermoformed Radius" },
      { label: "Joinery Method", value: "Chemical PMMA Molecular Weld" },
      { label: "Finish Level", value: "Tactile Matte (600-Grit Honed)" },
    ],
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
    category: "Hospitality",
    architect: "Atelier Kora",
    area: "650 sq.m",
    scope: ["Reception desk", "Bar counter", "Spiral stair cladding"],
    surface: "Noir & Solids — Noir / Bone",
    summary: "A spiralling white form wrapping a dark lobby, fabricated in eleven segments.",
    challenge:
      "Forming a continuous 180° curved desk facade without surface blanching or micro-stress marks in a high-traffic lobby environment.",
    solution:
      "Utilized CNC-machined timber buck tooling with temperature-controlled heating blankets to thermoform at 160°C, producing perfectly fluid geometry.",
    specs: [
      { label: "Surface Material", value: "Noir Velvet & Bone (12 mm)" },
      { label: "Counter Dimensions", value: "9000 mm Continuous Arc" },
      { label: "Edge Profile", value: "Seamless Coved Waterfall" },
      { label: "Joinery Method", value: "11 Site-Blended Segments" },
      { label: "Finish Level", value: "Fine Velvet Low-Reflective Matte" },
    ],
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
    category: "Hospitality",
    architect: "Mor Collective",
    area: "340 sq.m",
    scope: ["Bar counter", "Table tops", "Serving counters"],
    surface: "Terra — Crimson Clay",
    summary: "Warm terracotta surfaces holding their own against hand-plastered walls.",
    challenge:
      "A restaurant dining space requiring warm earth pigments that could withstand heavy citrus exposure, wine spills, and hot cookware without degradation.",
    solution:
      "Specified non-porous Terra Crimson Clay. The serpentine bar front was cut in CNC-milled sections and hand-blended on site; the matte finish hides water rings from glassware.",
    specs: [
      { label: "Surface Material", value: "Crimson Clay (12 mm)" },
      { label: "Bar Length", value: "7800 mm Serpentine" },
      { label: "Edge Profile", value: "Micro-Bevelled Bullnose" },
      { label: "Resistance", value: "Non-Porous, Acid & Stain Proof" },
      { label: "Finish Level", value: "Warm Matte (400-Grit Diamond)" },
    ],
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
    category: "Commercial",
    architect: "Studio Earthform",
    area: "820 sq.m",
    scope: ["Reception desk", "Lounge seating", "Wayfinding"],
    surface: "Ash — Concrete",
    summary: "Poured-stone greys for a lobby that needed to feel carved, not fitted.",
    challenge:
      "Creating monolithic architectural benching and a 14-metre lounge element that reads as geological carved stone without the excessive structural deadweight.",
    solution:
      "Fabricated lightweight internal structural steel and timber skeletons clad with 12 mm Ash Concrete solid surface, joined invisibly and hand-honed to a tactile stone sheen.",
    specs: [
      { label: "Surface Material", value: "Concrete Grey (12 mm)" },
      { label: "Bench Length", value: "14000 mm Monolith" },
      { label: "Core Structure", value: "Laser-Cut Steel Armature" },
      { label: "Safety Rating", value: "Class A / ASTM E84 Fire Rated" },
      { label: "Lifecycle", value: "100% In-Situ Renewable" },
    ],
    body: [
      "The reception and the 14-metre lounge bench were fabricated as two pieces of the same Concrete grey lot, giving the lobby a single continuous geological line.",
      "Curved seating was thermoformed in sections; the desk was built up from a steel armature and clad in 12 mm sheet.",
      "The specification prioritised repairability — surface damage in a lobby is a schedule problem, and solid surface lets us sand it out overnight.",
    ],
    image: proj4,
  },
  {
    slug: "atelier-kora-pavilion",
    title: "Atelier Pavilion",
    location: "Bengaluru",
    year: "2025",
    category: "Commercial",
    architect: "Ace Collaborative Design",
    area: "380 sq.m",
    scope: ["Review tables", "Sample library islands", "Concealed tech bar"],
    surface: "Aggregate — Sand",
    summary:
      "Tactile mineral surfaces with concealed wireless tech for an architectural design practice.",
    challenge:
      "Embedding sub-surface inductive power charging points and concealed wire chases without disrupting the clean, monolithic aesthetic of the central critique table.",
    solution:
      "Precision 5-axis CNC undercut the 12 mm mineral sheet from behind to a 3 mm membrane thickness, allowing wireless magnetic charging fields to pass cleanly through the solid surface.",
    specs: [
      { label: "Surface Material", value: "Aggregate Sand (12 mm)" },
      { label: "Table Dimensions", value: "3600 × 1300 mm" },
      { label: "Sub-Surface Tech", value: "Concealed Inductive Qi Embeds" },
      { label: "Edge Profile", value: "Shark-Nose Chamfer" },
      { label: "Joinery Method", value: "Invisible Chemical Bond" },
    ],
    body: [
      "The pavilion serves as an experimental workplace and design gallery where physical materials meet digital tools. Sand aggregate provides mineral depth that diffuses glare from computer displays and overhead track fixtures.",
      "All wireless charging points are invisible from the surface, marked only by faint CNC-engraved alignment dots. Beneath, CNC routing pockets bring the sheet down to 3 mm so power transfers without resistance.",
      "Joints across the 3.6-metre conference table were fused on site, resulting in a single contiguous plane that feels carved from a single quarry block.",
    ],
    image: appReception,
  },
  {
    slug: "minimalist-bath-suite",
    title: "Minimalist Bath Suite",
    location: "New Delhi",
    year: "2025",
    category: "Residential",
    architect: "Studio Anima",
    area: "110 sq.m",
    scope: ["Integral washplane", "Freestanding bath plinth", "Wall cladding"],
    surface: "Veined — Calacatta",
    summary:
      "Continuous veined surfaces wrapping from floor plinth to custom coved basins with zero grout.",
    challenge:
      "Eliminating mold-prone grout joints and perimeter caulk lines in a humid luxury bath suite while preserving marble veining across vertical and horizontal transitions.",
    solution:
      "Used through-body Veined Calacatta Corian sheets thermoformed with coved internal corners, ensuring water flows smoothly down seamless gullies into concealed drain channels.",
    specs: [
      { label: "Surface Material", value: "Veined Calacatta (12 mm)" },
      { label: "Washplane Length", value: "2800 mm Coved Double Basin" },
      { label: "Hygiene Standard", value: "Non-Porous, Zero Grout / Mould" },
      { label: "Edge Detail", value: "Softened 3 mm Micro-Radius" },
      { label: "Finish Level", value: "Satin Polished (800-Grit)" },
    ],
    body: [
      "In high-moisture spaces, traditional marble and ceramic tiles inevitably suffer from stained grout and perimeter discoloration. Solid surface solves this permanently through seamless, non-porous chemical welds.",
      "The washplane was fabricated with two integral basins thermoformed directly into the counter top. A continuous 12 mm coved upstand travels up the wall, eliminating the standard silicone caulking line that typically fails after two years.",
      "The full-depth veining runs consistently through routed edges, preserving the natural geological narrative of marble with none of its vulnerability to acid or water spots.",
    ],
    image: appBath,
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
  author?: string;
  quote?: string;
  takeaways?: string[];
};

export const posts: Post[] = [
  {
    slug: "the-invisible-joint",
    title: "The invisible joint",
    category: "Fabrication",
    date: "Feb 2026",
    readTime: "4 min",
    author: "acespaces Workshop Practice",
    quote: "A seam in solid surface is not a joint; it is a repair you plan in advance.",
    takeaways: [
      "Router-matched edge profiles ensure complementary alignment by construction",
      "Two-component reactive methyl methacrylate bonds at the molecular level",
      "Progressive diamond sanding restores uniform light reflection across the seam",
    ],
    excerpt:
      "What actually makes two sheets of solid surface disappear into one — and why most failures start with prep, not glue.",
    body: [
      "A seam in solid surface is not a joint, it is a repair you plan in advance. Both faces are cut simultaneously with a router on a straight jig, so the two profiles are complementary by construction rather than by measurement.",
      "Colour-matched adhesive is squeezed slightly proud of the surface, then removed in two passes: first with a router shoe flush to the sheet, then with abrasive to the factory finish. The result photographs as one piece.",
      "Most seam failures trace back to prep — resin-rich faces not sanded back, moisture in the sheet, or a jig that was straight on Tuesday. The adhesive never gets the blame it deserves.",
      "When properly executed, the tensile and flexural strength of the cured adhesive matches or exceeds the parent sheet. Once hand-honed to a uniform matte sheen, the seam vanishes under grazing light, creating an uninterrupted architectural volume.",
    ],
    image: journal1,
  },
  {
    slug: "choosing-a-white",
    title: "Choosing a white",
    category: "Materials",
    date: "Jan 2026",
    readTime: "5 min",
    author: "acespaces Material Research",
    quote: "One hour of diligence under actual site lighting replaces a decade of apology.",
    takeaways: [
      "Whites separate on undertone, light transmission, and surface micro-texture",
      "Translucent whites require minimum 75mm cavity depth for uniform backlighting",
      "Always evaluate samples in situ at installation height under night lighting",
    ],
    excerpt:
      "Six whites that look identical under showroom light and completely different in a kitchen at 7 pm. How to specify properly.",
    body: [
      "Whites separate on three axes: undertone, light transmission and texture. A cool white next to warm oak reads blue; the same sheet next to polished chrome reads neutral. Undertones only show up in situ.",
      "Translucent whites were engineered for backlit signage and glowing counters — lay a sample over a light box before committing, because a 12 mm glowing edge changes the entire mood of a bar.",
      "Our rule: shortlist under D65, verify under the actual site lighting, at the actual installation height, at night. One hour of diligence replaces a decade of apology.",
      "Furthermore, light absorption changes with finish grade. A satin matte finish absorbs specular highlights, providing a calm architectural ground, while a high-polish sheen intensifies reflectivity and makes mineral depth appear closer to the surface.",
    ],
    image: journal2,
  },
  {
    slug: "heat-forming-notes",
    title: "Notes on heat-forming",
    category: "Fabrication",
    date: "Dec 2025",
    readTime: "6 min",
    author: "acespaces Atelier Engineering",
    quote:
      "Moulds matter more than ovens: every micro-flaw in a buck prints into the surface forever.",
    takeaways: [
      "Solid surface thermoforms precisely within the 140°C to 170°C thermal window",
      "Timber and CNC aluminium bucks require uniform sanding down to 180 grit",
      "Minimum safe radius scales with sheet thickness — 25mm for 6mm, 75mm for 12mm",
    ],
    excerpt:
      "Radii, moulds and the 165°C window — a maker's field guide to bending sheets without fighting them.",
    body: [
      "Solid surface thermoforms between roughly 140 and 170 degrees. Below that, the sheet fights the mould and springs back; above that, the resin begins to discolour. The window is narrow and unforgiving.",
      "Moulds matter more than ovens. A plywood buck with a smooth, uniformly sanded surface produces clean radii; gaps and steps in the mould print themselves into the finished face forever.",
      "Minimum safe radii depend on thickness — 6 mm sheet will do things a 12 mm sheet will refuse to. We keep a radius sample board at the workshop door so clients can point, not guess.",
      "Controlled cooling under vacuum pressure is equally crucial. Removing a curved piece prematurely causes thermal shock and dimensional distortion. We maintain uniform clamp pressure until the core temperature drops below 50°C.",
    ],
    image: journal3,
  },
  {
    slug: "the-edge-is-where-material-becomes-architecture",
    title: "The edge is where material becomes architecture",
    category: "Materials",
    date: "Nov 2025",
    readTime: "5 min",
    author: "acespaces Spatial Research",
    quote:
      "An edge is not where a material simply stops; it is where the relationship between light and touch is declared.",
    takeaways: [
      "Through-body composition eliminates visible sub-layers at routed edges",
      "Micro-radii (2mm) soften harsh transitions and prevent perimeter chipping",
      "Chamfers and shark-noses cast deep floating shadow lines beneath cantilevers",
    ],
    excerpt:
      "The precision of an edge defines how light transitions across planes and how an architectural volume is experienced.",
    body: [
      "In architectural joinery, surfaces are often judged by their faces — their colour, grain structure, and specular reflection. But in truth, it is the edge that reveals the true integrity of the craft.",
      "When working with monolithic solid surfaces, the edge transitions from an afterthought into a primary design tool. Because solid surfaces are through-body materials with uniform mineral density, they can be carved, chamfered, shark-nosed, or thermo-bent without exposing an unsightly substrate.",
      "A sharp 45-degree mitre creates an illusion of monumental stone density, while a subtle 2 mm micro-radius softens the light transition, inviting the hand to rest upon it. Understanding how shadow falls across these micro-geometries allows designers to sculpt space with extraordinary nuance.",
    ],
    image: texAsh,
  },
  {
    slug: "sculpting-with-light-translucent-surfaces",
    title: "Sculpting with light: The physics of translucent minerals",
    category: "Spatial Design",
    date: "Oct 2025",
    readTime: "6 min",
    author: "acespaces Optical Lab",
    quote:
      "Daylight gives the surface its mineral body; internal illumination reveals its ethereal soul.",
    takeaways: [
      "Aluminium trihydrate crystals scatter photons in every direction, eliminating LED diode glare",
      "Optimal backlighting is achieved at 6mm nominal material thickness and 75–100mm cavity depth",
      "Dynamic Kelvin shifts (2700K to 4000K) alter perceived surface depth throughout the day",
    ],
    excerpt:
      "How 6mm translucent solid surfaces transform cold LED cavities into velvety, ambient architectural halos.",
    body: [
      "When light passes through a mineral-filled acrylic matrix, it does not transmit linearly like glass. Instead, the microscopic aluminium trihydrate crystals refract and scatter photons in every direction, creating an entirely diffuse volumetric glow.",
      "By calibrating the distance between internal LED arrays and the rear face of our translucent series panels (typically 75mm to 100mm cavity depth), designers can achieve perfectly uniform luminance without hot spots.",
      "This technology opens up extraordinary possibilities for ambient bar fronts, glowing spatial divider screens, illuminated retail plinths, and sculptural pendant boxes that transition from monolithic stone by day into weightless light volumes by night.",
    ],
    image: texVein,
  },
  {
    slug: "zero-silica-mineral-health",
    title: "Zero silica: The ethics of mineral surface safety",
    category: "Fabrication",
    date: "Sep 2025",
    readTime: "4 min",
    author: "acespaces Workshop Practice",
    quote:
      "Crafting beautiful spaces should never come at the expense of human respiratory health.",
    takeaways: [
      "Engineered quartz contains up to 90% crystalline silica, posing severe silicosis risks to fabricators",
      "Corian solid surface is formulated with 0% crystalline silica, using safe Aluminium Trihydrate",
      "Certified Greenguard Gold for ultra-low chemical emissions in sensitive interior environments",
    ],
    excerpt:
      "Why pure ATH and acrylic resin create a safer studio floor and a zero-dust, zero-silica future for architects and craftspeople.",
    body: [
      "Around the world, architectural authorities are confronting the hazards of high-silica engineered stone. Cutting and dry-grinding quartz composites releases microscopic respirable crystalline silica particles, which can cause incurable lung disease.",
      "In contrast, DuPont™ Corian® solid surface is entirely zero-silica. Its mineral matrix is composed of refined bauxite (Aluminium Trihydrate) bound in pure acrylic polymer (PMMA). When machined in our workshop, the chips are non-fibrous and inert, creating a clean environment for our craftspeople.",
      "For building occupants, this formulation translates into an inert, non-porous surface certified Greenguard Gold for indoor air quality. It emits zero off-gassing, harbors no bacteria, and requires no toxic chemical sealants.",
    ],
    image: texGlacier,
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
