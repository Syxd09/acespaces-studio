import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { collections } from "@/data/content";

export const Route = createFileRoute("/materials/$collection")({
  loader: ({ params }) => {
    const collection = collections.find((c) => c.id === params.collection);
    if (!collection) throw notFound();
    return { collection };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.collection.name} Collection — acespaces`
          : "Collection — acespaces",
      },
      {
        name: "description",
        content: loaderData
          ? `${loaderData.collection.name} — ${loaderData.collection.note}. Corian® solid surface colours from acespaces.`
          : "Corian® solid surface colours from acespaces.",
      },
      {
        property: "og:title",
        content: loaderData ? `${loaderData.collection.name} Collection — acespaces` : "Collection — acespaces",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: CollectionPage,
});

function CollectionPage() {
  const { collection } = Route.useLoaderData();

  const index = collections.findIndex((c) => c.id === collection.id);
  const next = collections[(index + 1) % collections.length];

  return (
    <>
      <section className="mx-auto max-w-[1400px] px-5 pb-14 pt-32 md:px-10 md:pt-44">
        <div className="flex flex-wrap items-center gap-3 text-[12px] text-ink-soft">
          <Link to="/materials" className="hover-underline">
            Materials &amp; Colours
          </Link>
          <span aria-hidden>/</span>
          <span className="text-ink">{collection.name}</span>
        </div>
        <div className="mt-8 grid items-end gap-10 md:grid-cols-[2fr_1fr]">
          <h1 className="display-xl text-[clamp(3rem,7vw,6rem)]">{collection.name}</h1>
          <p className="text-[15px] leading-relaxed text-ink-soft">{collection.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10">
        <div className="img-zoom aspect-[21/9]">
          <img
            src={collection.hero}
            alt={`${collection.name} collection in a completed interior`}
            loading="lazy"
            width={1600}
            height={1104}
            className="h-full w-full object-cover"
          />
        </div>
        <p className="mt-3 text-[12px] text-ink-soft">{collection.note}</p>

        <div className="mt-14 flex items-end justify-between">
          <h2 className="display-md text-3xl">Colours in this collection</h2>
          <Link
            to="/contact"
            className="hover-underline hidden text-[13px] font-semibold tracking-wide md:block"
          >
            Request these samples →
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-px bg-line md:grid-cols-4">
          {collection.colours.map((col) => (
            <div key={col.name} className="group bg-paper">
              <div
                className="aspect-square w-full ring-1 ring-black/5 ring-inset"
                style={{ backgroundColor: col.hex }}
                role="img"
                aria-label={`${col.name} colour swatch`}
              />
              <div className="p-5">
                <p className="font-display text-[15px] font-medium tracking-tight">{col.name}</p>
                <p className="mt-1 text-[12px] text-ink-soft">{col.finish} finish</p>
              </div>
            </div>
          ))}
        </div>

        <Link
          to="/materials/$collection"
          params={{ collection: next.id }}
          className="group mt-20 flex items-center justify-between border-t border-line-strong pt-8"
        >
          <span className="text-[12px] text-ink-soft">Next collection</span>
          <span className="display-md text-3xl transition-colors group-hover:text-signal md:text-4xl">
            {next.name} <span aria-hidden className="text-signal">→</span>
          </span>
        </Link>
      </section>
    </>
  );
}
