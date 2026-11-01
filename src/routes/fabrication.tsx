import { Link, createFileRoute } from "@tanstack/react-router";
import { images } from "@/data/content";

export const Route = createFileRoute("/fabrication")({
  head: () => ({
    meta: [
      { title: "Digital Fabrication & Architectural Engineering — acespaces" },
      {
        name: "description",
        content:
          "Advanced solid surface workshop in Bengaluru: 5-axis CNC routing (<0.2mm tolerance), vacuum thermoforming (25mm tight radii), molecular seaming, and hand-honed finishing of Corian® solid surfaces.",
      },
      { property: "og:title", content: "Fabrication Craft & Machinery — acespaces" },
      {
        property: "og:description",
        content:
          "Inside the acespaces Bengaluru workshop — 5-axis CNC routing, 160°C thermoforming, invisible chemical joining, and hand-honed finishes.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/fabrication" },
    ],
    links: [{ rel: "canonical", href: "/fabrication" }],
  }),
  component: FabricationPage,
});

const STEPS = [
  {
    n: "01",
    title: "CAD/CAM Digital Engineering",
    sub: "Tolerance: ±0.18 mm",
    text: "Architectural 3D CAD files are unpacked into flat-sheet cut files and nested for optimal yield. Every radius, cantilever span, internal steel armature, and coved rebate is modeled and verified before cutting starts.",
  },
  {
    n: "02",
    title: "5-Axis CNC Precision Milling",
    sub: "Repeatable to the sub-millimetre",
    text: "Industrial 5-axis CNC routers machine monolithic sheets up to 3600 mm in single setups. Sink rebates, undermount tap cutouts, flush induction pockets, and decorative fluted reliefs are milled with clean, chip-free edges.",
  },
  {
    n: "03",
    title: "160°C Vacuum Thermoforming",
    sub: "Curves down to 25 mm radii",
    text: "Mineral sheets are heated in calibrated platen ovens to their exact 140°C–170°C thermo-elastic window. Drawn over CNC-profiled timber bucks under uniform membrane vacuum pressure, complex compound curves solidify without surface blanching.",
  },
  {
    n: "04",
    title: "Molecular Chemical Seaming",
    sub: "0.0 mm visible joint line",
    text: "Panels are joined using two-component reactive methyl methacrylate matrix adhesive precisely colour-matched to the sheet lot. Once cured, the joint becomes a molecular chemical weld as strong as the parent mineral board.",
  },
  {
    n: "05",
    title: "Progressive Diamond Honing",
    sub: "From 120 to 600-grit matte",
    text: "Joint lines are milled flush, then hand-honed through a four-stage diamond abrasive progression. The finished piece has a low-glare, velvety touch that diffuses light evenly and can be refreshed in situ at any time.",
  },
];

const EDGE_PROFILES = [
  {
    name: "Micro-Bevel Edge",
    spec: "1.5–2 mm eased radius",
    desc: "Softens sharp industrial edges while preserving a crisp architectural shadow gap. Resists accidental impact chipping.",
  },
  {
    name: "45° Mitred Waterfall",
    spec: "Monolithic downstand apron",
    desc: "Continuous horizontal worktop folding into vertical gables with invisible chemical joints, creating an illusion of solid stone slab density.",
  },
  {
    name: "Shark-Nose Chamfer",
    spec: "Reverse 30° / 45° undercut",
    desc: "Casts deep shadow beneath the perimeter, giving 50 mm thick solid surface counters the appearance of floating weightlessly.",
  },
  {
    name: "Thermoformed Coved Upstand",
    spec: "Seamless 12–25 mm internal cove",
    desc: "Integrated transitions from horizontal counter up into the splashback, permanently banishing dirt traps and mould-prone silicone caulk.",
  },
];

const TECHNICAL_STANDARDS = [
  {
    property: "Silica Content",
    value: "0.0% Crystalline Silica",
    note: "Pure Aluminium Trihydrate (ATH) + PMMA resin. Zero silicosis risk during fabrication or modification.",
  },
  {
    property: "Fire Reaction",
    value: "Class A / Class 1 (ASTM E84)",
    note: "Highest commercial fire safety standard with minimal smoke propagation and zero toxic halogen gas release.",
  },
  {
    property: "Hygiene & Porosity",
    value: "Non-Porous / NSF-51 Certified",
    note: "Homogeneous density prevents moisture absorption, bacteria growth, and permanent food or citrus staining.",
  },
  {
    property: "Tensile Joint Strength",
    value: "> 45 MPa (ASTM D638)",
    note: "Reactive PMMA molecular bond matches or exceeds the tensile and flexural yield of parent sheet.",
  },
  {
    property: "In-Situ Renewal",
    value: "100% Fully Restorable",
    note: "Minor surface scuffs or accidental cigarette scorches are sanded out on site without panel replacement.",
  },
  {
    property: "Installed Warranty",
    value: "10-Year Comprehensive",
    note: "Backed by the official DuPont™ Corian® Quality Network industrial fabricator program across India.",
  },
];

function FabricationPage() {
  return (
    <>
      {/* ————— Hero ————— */}
      <section className="mx-auto max-w-[1400px] px-5 pb-14 pt-32 md:px-10 md:pt-44">
        <p className="label-micro text-signal">Fabrication Atelier</p>
        <div className="mt-5 grid items-end gap-10 lg:grid-cols-[1.6fr_1fr]">
          <h1 className="display-xl text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.94]">
            Made in our workshop,
            <br />
            <span className="italic">not ours to compromise.</span>
          </h1>
          <p className="text-[15px] leading-relaxed text-ink-soft">
            Inside the acespaces atelier in Bengaluru: 5-axis CNC routing, 160°C vacuum
            thermoforming, molecular seam welding, and hand-honed diamond finishes under one roof.
          </p>
        </div>
      </section>

      {/* ————— Visual Workshop Gallery & Metrics ————— */}
      <section className="mx-auto max-w-[1400px] px-5 pb-20 md:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="overflow-hidden border border-line bg-secondary">
            <div className="img-zoom aspect-[4/3]">
              <img
                src={images.fabCnc}
                alt="5-Axis CNC router milling a white solid surface sheet"
                loading="eager"
                width={1600}
                height={1104}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="border-t border-line bg-paper p-5">
              <span className="label-micro text-signal">Digital Milling</span>
              <p className="font-display mt-1 text-lg font-medium text-ink">
                5-Axis High-Speed CNC Machining
              </p>
              <p className="mt-1 text-[13px] text-ink-soft">
                Continuous 3D toolpaths, sub-surface wireless charger pockets, and complex sink
                rebates.
              </p>
            </div>
          </div>

          <div className="overflow-hidden border border-line bg-secondary">
            <div className="img-zoom aspect-[4/3]">
              <img
                src={images.fabThermo}
                alt="A solid surface sheet being thermoformed over a curved mould"
                loading="eager"
                width={1600}
                height={1104}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="border-t border-line bg-paper p-5">
              <span className="label-micro text-signal">Thermal Shaping</span>
              <p className="font-display mt-1 text-lg font-medium text-ink">
                160°C Industrial Vacuum Forming
              </p>
              <p className="mt-1 text-[13px] text-ink-soft">
                Heating platen ovens and vacuum membrane tables shaping organic curves over CNC
                timber bucks.
              </p>
            </div>
          </div>
        </div>

        {/* Workshop Metrics Bar */}
        <div className="mt-12 grid grid-cols-2 gap-px bg-line md:grid-cols-4">
          <div className="bg-paper p-6 md:p-8">
            <span className="label-micro text-ink-soft">Machining Tolerance</span>
            <p className="display-md mt-2 text-3xl md:text-4xl">±0.18 mm</p>
          </div>
          <div className="bg-paper p-6 md:p-8">
            <span className="label-micro text-ink-soft">Thermoforming Window</span>
            <p className="display-md mt-2 text-3xl md:text-4xl">160°C</p>
          </div>
          <div className="bg-paper p-6 md:p-8">
            <span className="label-micro text-ink-soft">Joint Line</span>
            <p className="display-md mt-2 text-3xl md:text-4xl">0.0 mm</p>
          </div>
          <div className="bg-paper p-6 md:p-8">
            <span className="label-micro text-ink-soft">Finishing Grit</span>
            <p className="display-md mt-2 text-3xl md:text-4xl">600 Grit</p>
          </div>
        </div>
      </section>

      {/* ————— 5-Step Fabrication Process ————— */}
      <section className="border-t border-line bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="label-micro text-signal">Engineering Workflow</p>
              <h2 className="display-md mt-4 text-[clamp(2.2rem,4vw,3.6rem)]">
                The five stages of making.
              </h2>
            </div>
            <p className="max-w-md text-[14px] text-ink-soft">
              From raw 12 mm acrylic sheets to monolithic site-assembled architecture.
            </p>
          </div>

          <div className="mt-14 space-y-px bg-line">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="group grid grid-cols-1 gap-4 bg-paper p-6 transition-colors hover:bg-secondary md:grid-cols-[80px_280px_1fr] md:gap-10 md:p-8"
              >
                <span className="text-[13px] font-semibold text-signal">{s.n}</span>
                <div>
                  <h3 className="font-display text-2xl font-light tracking-tight text-ink group-hover:text-signal transition-colors md:text-3xl">
                    {s.title}
                  </h3>
                  <p className="label-micro mt-2 text-ink-soft">{s.sub}</p>
                </div>
                <p className="text-[14px] leading-relaxed text-ink-soft">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ————— Edge & Detail Profiles Section ————— */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="label-micro text-signal">Detailing &amp; Edges</p>
            <h2 className="display-md mt-4 text-[clamp(2.2rem,4vw,3.6rem)]">
              Where surface meets light.
            </h2>
          </div>
          <p className="max-w-md text-[14px] text-ink-soft">
            Because solid surface is homogeneous through-body, every routed edge preserves full
            mineral density.
          </p>
        </div>

        <div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {EDGE_PROFILES.map((edge) => (
            <div
              key={edge.name}
              className="group bg-paper p-8 transition-colors hover:bg-secondary"
            >
              <span className="label-micro text-signal">{edge.spec}</span>
              <h3 className="font-display mt-3 text-xl font-medium tracking-tight text-ink group-hover:text-signal transition-colors">
                {edge.name}
              </h3>
              <p className="mt-4 text-[13px] leading-relaxed text-ink-soft">{edge.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ————— Material Specifications & Technical Standards ————— */}
      <section className="border-t border-line bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <p className="label-micro text-signal">Quality &amp; Standards</p>
          <div className="mt-4 grid gap-10 lg:grid-cols-[1fr_1.6fr]">
            <div>
              <h2 className="display-md text-[clamp(2.2rem,4vw,3.6rem)]">Engineered for life.</h2>
              <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">
                Tested against stringent international standards for fire safety, food hygiene,
                chemical stain resistance, and environmental safety.
              </p>
              <div className="mt-8 border border-line bg-paper p-6">
                <span className="label-micro text-ink-soft">Pre-Fabrication Verification</span>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                  Every sheet lot is checked under D65 artificial daylight spectrophotometers to
                  verify colour and particulate consistency before CNC milling begins.
                </p>
              </div>
            </div>

            <div className="divide-y divide-line border border-line bg-paper">
              {TECHNICAL_STANDARDS.map((std) => (
                <div key={std.property} className="p-6 md:p-7">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                    <span className="label-micro text-ink-soft">{std.property}</span>
                    <strong className="font-display text-lg font-medium text-ink">
                      {std.value}
                    </strong>
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">{std.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ————— Inquiry / Drawings CTA ————— */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-24">
        <div className="flex flex-col items-start justify-between gap-8 border border-line bg-paper p-8 md:flex-row md:items-center md:p-12">
          <div className="max-w-2xl">
            <p className="label-micro text-signal">Workshop Consultation</p>
            <h2 className="display-md mt-3 text-3xl md:text-4xl">
              Send us a drawing — we&rsquo;ll tell you what the material can do.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              Have 2D CAD shop drawings, 3D Rhino/SketchUp models, or hand sketches? We review
              radii, spans, and sheet yield with an engineering feasibility quote within 48 hours.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 bg-ink px-6 py-3.5 text-[13px] font-semibold tracking-wide text-paper transition-colors hover:bg-signal"
            >
              Start fabrication enquiry
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
