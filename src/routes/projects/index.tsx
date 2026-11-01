import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { projects } from "@/data/content";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Selected Architectural Projects & Case Studies — acespaces" },
      {
        name: "description",
        content:
          "Monolithic solid surface case studies: sculptural hospitality counters, seamless residential islands, curved reception desks, and bespoke joinery across India.",
      },
      { property: "og:title", content: "Selected Projects — acespaces" },
      {
        property: "og:description",
        content:
          "Explore completed architectural projects crafted with Corian® solid surfaces across Bengaluru, Goa, Mumbai, Hyderabad, and Delhi.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const CATEGORIES = ["All", "Residential", "Hospitality", "Commercial"] as const;

function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof CATEGORIES)[number]>("All");

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* ————— Header ————— */}
      <section className="mx-auto max-w-[1400px] px-5 pb-14 pt-32 md:px-10 md:pt-44">
        <p className="label-micro text-signal">Projects · Selected Works</p>
        <div className="mt-5 grid items-end gap-10 lg:grid-cols-[1.6fr_1fr]">
          <h1 className="display-xl text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.94]">
            Material
            <br />
            <span className="italic">in practice.</span>
          </h1>
          <p className="text-[15px] leading-relaxed text-ink-soft">
            A selection of residential, hospitality, and commercial spaces crafted with seamless
            solid surfaces engineered in our Bengaluru workshop for architectural practices across
            India.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mt-12 flex flex-wrap items-center gap-2 border-y border-line py-4">
          <span className="label-micro mr-3 text-ink-soft">Filter Typology:</span>
          {CATEGORIES.map((cat) => {
            const count =
              cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length;
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`flex items-center gap-2 px-4 py-2 text-[12px] font-medium tracking-wide transition-colors ${
                  isActive
                    ? "bg-ink text-paper"
                    : "bg-paper text-ink-soft hover:bg-secondary hover:text-ink"
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] ${isActive ? "text-signal" : "text-ink-soft"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ————— Projects Grid ————— */}
      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10">
        <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2">
          {filteredProjects.map((p, i) => (
            <article key={p.slug} className="group flex flex-col">
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="block overflow-hidden border border-line bg-secondary"
              >
                <div className="img-zoom aspect-[16/11]">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading={i < 2 ? "eager" : "lazy"}
                    width={1600}
                    height={1104}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Link>

              <div className="flex flex-1 flex-col justify-between pt-5">
                <div>
                  <div className="flex items-center justify-between text-[12px] text-ink-soft">
                    <span className="label-micro text-signal">{p.category || "Architecture"}</span>
                    <span>
                      {p.location} · {p.year}
                    </span>
                  </div>

                  <Link
                    to="/projects/$slug"
                    params={{ slug: p.slug }}
                    className="block group-hover:text-signal transition-colors"
                  >
                    <h2 className="display-md mt-2 text-2xl md:text-3xl font-light text-ink group-hover:text-signal">
                      {p.title}
                    </h2>
                  </Link>

                  <p className="mt-3 text-[14px] leading-relaxed text-ink-soft line-clamp-2">
                    {p.summary}
                  </p>
                </div>

                <div className="mt-6 border-t border-line pt-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 text-[12px]">
                    <span className="font-medium text-ink">{p.surface}</span>
                    <Link
                      to="/projects/$slug"
                      params={{ slug: p.slug }}
                      className="hover-underline flex items-center gap-1 font-semibold text-ink group-hover:text-signal"
                    >
                      Read case study →
                    </Link>
                  </div>
                  {p.scope && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {p.scope.map((item) => (
                        <span
                          key={item}
                          className="border border-line bg-secondary px-2 py-0.5 text-[11px] text-ink-soft"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ————— Project Consultation CTA ————— */}
        <div className="mt-24 flex flex-col items-start justify-between gap-8 border border-line bg-secondary p-8 md:flex-row md:items-center md:p-12">
          <div className="max-w-2xl">
            <p className="label-micro text-signal">Architectural Collaboration</p>
            <h2 className="display-md mt-3 text-3xl md:text-4xl">
              Have an upcoming project brief?
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              We collaborate with architectural studios from early conceptual sketch stage through
              digital CAD/CAM detailing, sample approvals, workshop fabrication, and on-site
              handover.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 bg-ink px-6 py-3.5 text-[13px] font-semibold tracking-wide text-paper transition-colors hover:bg-signal"
            >
              Submit project brief
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
