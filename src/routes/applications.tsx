import { createFileRoute } from "@tanstack/react-router";
import { applications } from "@/data/content";

export const Route = createFileRoute("/applications")({
  head: () => ({
    meta: [
      { title: "Applications — acespaces" },
      {
        name: "description",
        content:
          "Where Corian® solid surface performs — kitchens, reception desks, bathrooms, facades, retail and healthcare, fabricated by acespaces.",
      },
      { property: "og:title", content: "Applications — acespaces" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ApplicationsPage,
});

function ApplicationsPage() {
  const first = applications[0]!;
  const rest = applications.slice(1);

  return (
    <>
      <section className="mx-auto max-w-[1400px] px-5 pb-14 pt-32 md:px-10 md:pt-44">
        <p className="label-micro text-signal">Applications</p>
        <h1 className="display-xl mt-5 max-w-3xl text-[clamp(2.8rem,6vw,5.5rem)]">
          Built for the places you live and work.
        </h1>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10">
        {/* featured */}
        <article className="group">
          <div className="img-zoom aspect-[16/9]">
            <img
              src={first.image}
              alt={first.name}
              loading="lazy"
              width={1600}
              height={1104}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-line py-5">
            <div>
              <p className="label-micro text-signal">{first.sector}</p>
              <h2 className="display-md mt-2 text-3xl">{first.name}</h2>
            </div>
            <p className="max-w-sm text-[13px] text-ink-soft">{first.line}</p>
          </div>
        </article>

        <div className="mt-12 grid gap-x-6 gap-y-12 md:grid-cols-2">
          {rest.map((a) => (
            <article key={a.id} className="group">
              <div className="img-zoom aspect-[4/3]">
                <img
                  src={a.image}
                  alt={a.name}
                  loading="lazy"
                  width={1600}
                  height={1104}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="border-b border-line py-4">
                <p className="label-micro text-ink-soft">{a.sector}</p>
                <h2 className="mt-2 font-display text-xl font-medium tracking-tight">{a.name}</h2>
                <p className="mt-1 text-[13px] text-ink-soft">{a.line}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
