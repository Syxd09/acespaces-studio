import { Link, Outlet, createFileRoute, useChildMatches } from "@tanstack/react-router";
import { collections } from "@/data/content";

export const Route = createFileRoute("/materials")({
  head: () => ({
    meta: [
      { title: "Materials & Colours — acespaces" },
      {
        name: "description",
        content:
          "Explore the acespaces Corian® solid surface colour library — solids, aggregates, veined tones, terra, ash and noir collections.",
      },
      { property: "og:title", content: "Materials & Colours — acespaces" },
      {
        property: "og:description",
        content:
          "The acespaces Corian® solid surface colour library — six collections, 140+ colours.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: MaterialsPage,
});

function MaterialsPage() {
  const childMatches = useChildMatches();

  if (childMatches.length > 0) {
    return <Outlet />;
  }

  return (
    <>
      <section className="mx-auto max-w-[1400px] px-5 pb-12 pt-32 md:px-10 md:pt-44">
        <p className="label-micro text-signal">Materials &amp; Colours</p>
        <h1 className="display-xl mt-5 max-w-3xl text-[clamp(2.8rem,6vw,5.5rem)]">
          Colour, engineered to disappear.
        </h1>
        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-soft">
          Six collections, one continuous material. Every tone is homogeneous through the full sheet
          thickness — what you cut is what you keep.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10">
        <div className="grid gap-px bg-line md:grid-cols-2">
          {collections.map((c, i) => (
            <Link
              key={c.id}
              to="/materials/$collection"
              params={{ collection: c.id }}
              className="group bg-paper"
            >
              <div className="img-zoom aspect-[16/9]">
                <img
                  src={c.swatch}
                  alt={`${c.name} collection swatch`}
                  loading="lazy"
                  width={912}
                  height={912}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-start justify-between p-6 md:p-8">
                <div className="max-w-sm">
                  <p className="label-micro text-ink-soft">0{i + 1}</p>
                  <p className="display-md mt-2 text-3xl">{c.name}</p>
                  <p className="mt-2 text-[13px] text-ink-soft">{c.description}</p>
                </div>
                <span className="mt-1 text-[13px] text-ink-soft transition-colors group-hover:text-signal">
                  {c.colours.length} tones →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border border-line bg-secondary p-8 md:flex-row md:items-center md:p-10">
          <p className="display-md max-w-lg text-2xl md:text-3xl">
            Samples say more than screens ever will.
          </p>
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-ink px-6 py-3 text-[13px] font-semibold tracking-wide text-paper transition-colors hover:bg-signal"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
            Request samples
          </Link>
        </div>
      </section>
    </>
  );
}
