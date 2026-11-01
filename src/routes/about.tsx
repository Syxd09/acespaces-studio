import { Link, createFileRoute } from "@tanstack/react-router";
import { images } from "@/data/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Studio Philosophy, Craft & Corian® Partnership | acespaces" },
      {
        name: "description",
        content:
          "acespaces is a Bengaluru-based architectural fabrication studio and authorized DuPont™ Corian® Quality Network partner. Precision CNC cutting, 160°C thermoforming, and 0% silica mineral surfaces.",
      },
      { property: "og:title", content: "About Us — Studio Philosophy & Craft | acespaces" },
      {
        property: "og:description",
        content:
          "Architectural fabrication atelier in Bengaluru. Certified DuPont™ Corian® solid surfaces, 5-axis CNC machining, and bespoke monolithic joinery.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const DISCIPLINES = [
  {
    n: "01",
    title: "Invisible Chemical Fusion",
    focus: "Molecular PMMA Bonding",
    description:
      "Using colour-matched methacrylate matrix adhesives and precision clamping jigs to chemically weld adjacent panels. Once cured and hand-honed, the seam stops existing visually and structurally.",
  },
  {
    n: "02",
    title: "160°C Vacuum Thermoforming",
    focus: "Fluid Curvature & Coving",
    description:
      "Heating mineral acrylic sheets to their exact 140°C–170°C window and drawing them over CNC-machined timber bucks under vacuum pressure, achieving tight 25 mm radii without blanching.",
  },
  {
    n: "03",
    title: "5-Axis CNC Precision",
    focus: "Sub-Millimetre Digital Routing",
    description:
      "Direct translation of architectural 3D models into nested toolpaths, undercut sinks, and intricate surface fluting with repeatable tolerances within ±0.18 mm.",
  },
  {
    n: "04",
    title: "Diamond Hand Honing",
    focus: "Progressive Tactile Finishing",
    description:
      "Multi-stage diamond abrasive progression from 120 to 600 grit, producing a velvety, light-diffusing satin touch that resists fingerprint glare and refreshes easily in place.",
  },
];

const ATELIER_UNITS = [
  {
    unit: "Unit 01",
    name: "CAD/CAM Engineering",
    scope: "Digital Unfolding & Nesting",
    text: "Translating architectural drawings into optimised cut files, checking sheet yields, spans, and coved rebates before machining.",
  },
  {
    unit: "Unit 02",
    name: "Master Thermoforming",
    scope: "Buck Tooling & Vacuum Presses",
    text: "Mould fabrication and platen oven heating for monolithic curved desks, fluted columns, and seamless spiral cladding.",
  },
  {
    unit: "Unit 03",
    name: "Precision Joinery",
    scope: "Shop Assembly & Pre-Fit",
    text: "Trial assembly in our Bengaluru workshop to verify seam alignment and surface continuity before flat-pack dispatch.",
  },
  {
    unit: "Unit 04",
    name: "White-Glove Installation",
    scope: "Site Assembly & Hand Finishing",
    text: "Certified master installers on site across India, fusing segments with zero visible glue lines and polishing back to factory sheen.",
  },
];

function AboutPage() {
  return (
    <>
      {/* ————— Hero Section ————— */}
      <section className="mx-auto max-w-[1400px] px-5 pb-16 pt-32 md:px-10 md:pt-44">
        <p className="label-micro text-signal reveal-up">About Us · Studio &amp; Lineage</p>
        <div className="mt-6 grid items-end gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h1 className="display-xl text-[clamp(3.2rem,8vw,7.5rem)] leading-[0.92]">
              Form &amp;
              <br />
              <span className="italic font-light">continuity.</span>
            </h1>
          </div>
          <div className="space-y-6">
            <p className="text-[16px] leading-relaxed text-ink-soft">
              We fabricate solid surfaces into seamless architectural fixtures, working directly
              with architects, interior designers, and creators across India.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#story"
                className="inline-flex items-center gap-2 bg-ink px-6 py-3 text-[13px] font-semibold tracking-wide text-paper transition-colors hover:bg-signal"
              >
                Our story
                <span aria-hidden>↓</span>
              </a>
              <Link
                to="/contact"
                className="hover-underline text-[13px] font-semibold tracking-wide"
              >
                Visit Bengaluru studio →
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Studio Photography */}
        <div className="mt-14 overflow-hidden border border-line">
          <div className="img-zoom aspect-[21/9] min-h-[360px] bg-secondary">
            <img
              src={images.aboutStudio}
              alt="Inside the acespaces studio and fabrication workshop in Bengaluru"
              loading="eager"
              width={1600}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between gap-4 border-t border-line bg-paper px-6 py-4 text-[12px] sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
              <span className="font-medium text-ink">
                Bengaluru Fabrication Atelier &amp; Slab Gallery
              </span>
            </div>
            <span className="text-ink-soft">
              15,000 sq.ft · 5-Axis CNC · Industrial Thermoforming
            </span>
          </div>
        </div>

        {/* Studio Vital Stats */}
        <div className="mt-12 grid grid-cols-2 gap-px bg-line md:grid-cols-4">
          <div className="bg-paper p-6 md:p-8">
            <span className="label-micro text-ink-soft">Origin</span>
            <p className="font-display mt-2 text-2xl font-light text-ink">Bengaluru, IN</p>
          </div>
          <div className="bg-paper p-6 md:p-8">
            <span className="label-micro text-ink-soft">Fabrication Area</span>
            <p className="font-display mt-2 text-2xl font-light text-ink">15,000 sq.ft</p>
          </div>
          <div className="bg-paper p-6 md:p-8">
            <span className="label-micro text-ink-soft">Material Standard</span>
            <p className="font-display mt-2 text-2xl font-light text-ink">0% Silica</p>
          </div>
          <div className="bg-paper p-6 md:p-8">
            <span className="label-micro text-ink-soft">Network</span>
            <p className="font-display mt-2 text-2xl font-light text-ink">DuPont™ Corian®</p>
          </div>
        </div>
      </section>

      {/* ————— Section 01: Origin & Purpose ————— */}
      <section id="story" className="border-t border-line bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <p className="label-micro text-signal">01 · Origin &amp; Purpose</p>
          <div className="mt-6 grid gap-12 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <h2 className="display-md text-[clamp(2.4rem,5vw,4.2rem)]">
                Surfaces that
                <br />
                <span className="italic">outlast trends.</span>
              </h2>
              <p className="mt-6 text-[14px] leading-relaxed text-ink-soft">
                Founded in Bengaluru to connect architectural vision directly with master digital
                fabrication.
              </p>
            </div>
            <div className="space-y-6 text-[15px] leading-relaxed text-ink-soft">
              <p className="text-lg font-light leading-relaxed text-ink">
                We believe architectural surfaces should be durable, seamless, and completely safe
                to live with.
              </p>
              <p>
                From our stockyard and workshop in Bengaluru, we fabricate genuine DuPont™ Corian®
                solid surface fixtures directly for architects, interior designers, and builders
                across India.
              </p>
              <p>
                Because solid surface is non-porous and free of crystalline silica, it creates calm,
                hygienic spaces — from continuous kitchen islands and coved washplanes to sculptural
                curved desks that appear carved from a single geological block.
              </p>
              <p>
                Unlike traditional natural stone that requires destructive quarrying and regular
                chemical sealing, solid surface is repairable in situ for its entire lifetime.
                Scuffs, micro-scratches, or site accidents can be sanded out overnight, bringing the
                surface back to day-one factory finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ————— Section 02: Craft Disciplines ————— */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="label-micro text-signal">02 · Craft Disciplines</p>
            <h2 className="display-md mt-4 text-[clamp(2.2rem,4vw,3.6rem)]">
              Principles of our craft.
            </h2>
          </div>
          <p className="max-w-md text-[14px] text-ink-soft">
            Every counter, sink, and plinth we fabricate is guided by four technical disciplines.
          </p>
        </div>

        <div className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {DISCIPLINES.map((d) => (
            <div key={d.n} className="group bg-paper p-8 transition-colors hover:bg-secondary">
              <span className="text-[12px] font-medium text-signal">{d.n}</span>
              <h3 className="font-display mt-4 text-xl font-medium tracking-tight text-ink group-hover:text-signal transition-colors">
                {d.title}
              </h3>
              <p className="label-micro mt-2 text-ink-soft">{d.focus}</p>
              <p className="mt-4 text-[13px] leading-relaxed text-ink-soft">{d.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ————— Section 03: The Atelier Units ————— */}
      <section className="border-t border-line bg-secondary py-20 md:py-28">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <p className="label-micro text-signal">03 · Workshop &amp; Makers</p>
          <div className="mt-6 grid gap-12 lg:grid-cols-[1.1fr_1.4fr]">
            <div>
              <h2 className="display-md text-[clamp(2.4rem,5vw,4.2rem)]">
                The hands behind
                <br />
                <span className="italic">the surfaces.</span>
              </h2>
              <p className="mt-6 text-[14px] leading-relaxed text-ink-soft">
                Our 15,000 sq.ft facility in Bengaluru operates as an architectural laboratory,
                where CNC machinery is guided by computational designers, thermoforming specialists,
                and master joiners.
              </p>
              <div className="mt-8 border border-line bg-paper p-6">
                <p className="label-micro text-ink-soft">Workshop Spec</p>
                <ul className="mt-4 space-y-2.5 text-[13px] text-ink-soft">
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-signal" />
                    5-Axis CNC Precision Router (Sub-0.2mm accuracy)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-signal" />
                    Industrial Platen Heating Ovens &amp; Vacuum Buck Table
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-signal" />
                    Dust-Controlled Chemical Bonding &amp; Curing Bays
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-signal" />
                    Pan-India White-Glove Installation Teams
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid gap-px bg-line sm:grid-cols-2">
              {ATELIER_UNITS.map((u) => (
                <div key={u.unit} className="bg-paper p-6 md:p-8">
                  <span className="label-micro text-signal">{u.unit}</span>
                  <h3 className="font-display mt-2 text-lg font-medium text-ink">{u.name}</h3>
                  <p className="text-[11px] font-medium tracking-wider uppercase text-ink-soft mt-1">
                    {u.scope}
                  </p>
                  <p className="mt-4 text-[13px] leading-relaxed text-ink-soft">{u.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ————— Section 04: DuPont Corian Strategic Alliance ————— */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <p className="label-micro text-signal">04 · Strategic Alliance</p>
        <div className="mt-6 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="display-md text-[clamp(2.4rem,5vw,4.2rem)]">
              Authorized Quality Network
              <br />
              <span className="italic">DuPont™ Corian®.</span>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-ink-soft">
              Craftsmanship is only as good as the raw material. acespaces is an authorized Quality
              Network Industrial Partner of DuPont™ Corian®, supplying and fabricating genuine solid
              surface sheets across India.
            </p>
            <div className="mt-8 border border-line bg-secondary p-6">
              <span className="label-micro text-ink-soft">10-Year Installed Warranty</span>
              <p className="mt-2 text-[14px] leading-relaxed text-ink">
                Every project fabricated and installed by acespaces carries authentic chemical
                traceability and is backed by the DuPont 10-year installed warranty.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border border-line p-8 bg-paper">
              <span className="label-micro text-signal">0% Crystalline Silica Standard</span>
              <h3 className="font-display mt-3 text-2xl font-light text-ink">
                Safe to make. Safe to live with.
              </h3>
              <p className="mt-4 text-[14px] leading-relaxed text-ink-soft">
                Unlike engineered quartz composites that contain up to 90% crystalline silica —
                posing severe silicosis hazards during fabrication — Corian® solid surface is 100%
                crystalline silica-free. Its mineral foundation is pure Aluminium Trihydrate (ATH)
                derived from natural bauxite, bound in high-grade acrylic resin.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-5 text-[12px]">
                <div>
                  <span className="font-semibold text-ink">Greenguard Gold</span>
                  <p className="text-ink-soft mt-0.5">
                    Ultra-low VOC emissions for schools and healthcare.
                  </p>
                </div>
                <div>
                  <span className="font-semibold text-ink">NSF-51 Certified</span>
                  <p className="text-ink-soft mt-0.5">
                    Certified for commercial food preparation contact.
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-line p-8 bg-paper">
              <span className="label-micro text-ink-soft">Sister Spatial Label</span>
              <h3 className="font-display mt-3 text-xl font-medium text-ink">
                Coro Crafted Collective
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-ink-soft">
                Coro Crafted Collective is our experimental spatial studio and collectible furniture
                label, creating limited-edition sculptural pieces shaped from raw Corian® slabs.
                Architects working with acespaces benefit from the exact same master tooling and
                finishing atelier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ————— Section 05: Studio Visit & Inquiry CTA ————— */}
      <section className="border-t border-line bg-secondary">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-24">
          <div className="flex flex-col items-start justify-between gap-8 border border-line bg-paper p-8 md:flex-row md:items-center md:p-12">
            <div className="max-w-2xl">
              <p className="label-micro text-signal">Bengaluru Atelier</p>
              <h2 className="display-md mt-3 text-3xl md:text-4xl">
                Experience the material in person.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                Our Bengaluru slab gallery houses over 30 full-scale calibrated slabs, backlit
                translucency showcases, and physical sample boxes for architectural practices.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 bg-ink px-6 py-3.5 text-[13px] font-semibold tracking-wide text-paper transition-colors hover:bg-signal"
              >
                Book studio visit
                <span aria-hidden>→</span>
              </Link>
              <Link
                to="/materials"
                className="flex items-center justify-center gap-2 border border-ink bg-transparent px-6 py-3.5 text-[13px] font-semibold tracking-wide text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                Browse colour library
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
