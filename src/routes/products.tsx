import { Link, createFileRoute } from "@tanstack/react-router";
import { products } from "@/data/content";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — acespaces" },
      {
        name: "description",
        content:
          "Corian® solid surface sheets, seamless sinks and bowls, fabricated counters and thermoformed edge profiles — from acespaces.",
      },
      { property: "og:title", content: "Products — acespaces" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-5 pb-14 pt-32 md:px-10 md:pt-44">
        <p className="label-micro text-signal">Products</p>
        <h1 className="display-xl mt-5 max-w-3xl text-[clamp(2.8rem,6vw,5.5rem)]">
          From flat sheet to finished form.
        </h1>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10">
        {products.map((p, i) => (
          <div
            key={p.id}
            className="grid items-center gap-8 border-t border-line py-12 md:grid-cols-[1fr_1.2fr] md:gap-16 md:py-16"
          >
            <div className={`img-zoom aspect-[16/10] ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                width={1600}
                height={1104}
                className="h-full w-full object-cover"
              />
            </div>
            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              <p className="label-micro text-ink-soft">0{i + 1}</p>
              <h2 className="display-md mt-3 text-3xl md:text-4xl">{p.name}</h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft">{p.blurb}</p>
              <p className="mt-6 text-[12px] font-medium tracking-wide text-signal">{p.spec}</p>
            </div>
          </div>
        ))}

        <div className="flex flex-col items-start justify-between gap-6 border border-line bg-secondary p-8 md:flex-row md:items-center md:p-10">
          <p className="display-md max-w-lg text-2xl md:text-3xl">
            Have drawings? We quote in 48 hours.
          </p>
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-ink px-6 py-3 text-[13px] font-semibold tracking-wide text-paper transition-colors hover:bg-signal"
          >
            Start an enquiry
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
