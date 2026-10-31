import { Link, createFileRoute } from "@tanstack/react-router";
import { images } from "@/data/content";

const STEPS = [
  {
    n: "01",
    title: "Drawing & engineering",
    text: "Your drawings become cut files. We check radii, spans and sheet yield before a single tool touches the material.",
  },
  {
    n: "02",
    title: "CNC cutting",
    text: "Five-axis CNC routing for counters, cladding and sculptural pieces — repeatable to the millimetre.",
  },
  {
    n: "03",
    title: "Thermoforming",
    text: "Sheets heated and formed over moulds for curves, coves and tight radii that flat fabrication can't reach.",
  },
  {
    n: "04",
    title: "Seamless joining",
    text: "Colour-matched adhesive, routed flush, sanded to factory finish. The joint stops existing.",
  },
  {
    n: "05",
    title: "Finish & install",
    text: "Matte, semi-gloss or polished. Installed, sealed and handed over — repairable in place for the life of the surface.",
  },
];

export const Route = createFileRoute("/fabrication")({
  head: () => ({
    meta: [
      { title: "Fabrication — acespaces" },
      {
        name: "description",
        content:
          "Inside the acespaces workshop — CNC cutting, thermoforming, seamless joining and installation of Corian® solid surfaces.",
      },
      { property: "og:title", content: "Fabrication — acespaces" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: FabricationPage,
});

function FabricationPage() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-5 pb-14 pt-32 md:px-10 md:pt-44">
        <p className="label-micro text-signal">Fabrication</p>
        <h1 className="display-xl mt-5 max-w-3xl text-[clamp(2.8rem,6vw,5.5rem)]">
          Made in our workshop, not ours to compromise.
        </h1>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="img-zoom aspect-[4/3]">
            <img
              src={images.fabCnc}
              alt="CNC router milling a white solid surface sheet"
              loading="lazy"
              width={1600}
              height={1104}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="img-zoom aspect-[4/3]">
            <img
              src={images.fabThermo}
              alt="A solid surface sheet being thermoformed over a curved mould"
              loading="lazy"
              width={1600}
              height={1104}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-16">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="group grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-line py-7 last:border-b md:grid-cols-[80px_280px_1fr] md:gap-10 md:py-8"
            >
              <span className="text-[12px] text-signal">{s.n}</span>
              <h2 className="font-display text-2xl font-light tracking-tight transition-colors group-hover:text-signal md:text-3xl">
                {s.title}
              </h2>
              <p className="max-w-xl text-[14px] leading-relaxed text-ink-soft">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border border-line bg-secondary p-8 md:flex-row md:items-center md:p-10">
          <p className="display-md max-w-lg text-2xl md:text-3xl">
            Send us a drawing — we&rsquo;ll tell you what the material can do.
          </p>
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-ink px-6 py-3 text-[13px] font-semibold tracking-wide text-paper transition-colors hover:bg-signal"
          >
            Start a fabrication enquiry
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
