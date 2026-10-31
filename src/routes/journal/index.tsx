import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { posts } from "@/data/content";

export const Route = createFileRoute("/journal/")({
  head: () => ({
    meta: [
      { title: "Journal & Architectural Essays — acespaces" },
      {
        name: "description",
        content:
          "Read acespaces architectural journal essays on monolithic joinery, zero-silica mineral health, 5-axis digital manufacturing, and material culture in contemporary spatial practice.",
      },
      { property: "og:title", content: "Journal — acespaces" },
      {
        property: "og:description",
        content:
          "Notes on making, material science, monolithic joinery, and fabrication philosophy from our Bengaluru atelier.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: JournalPage,
});

const CATEGORIES = ["All", "Fabrication", "Materials", "Spatial Design"] as const;

function JournalPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof CATEGORIES)[number]>("All");

  const filteredPosts =
    activeCategory === "All" ? posts : posts.filter((p) => p.category === activeCategory);

  const [featured, ...rest] = filteredPosts;

  return (
    <>
      {/* ————— Hero ————— */}
      <section className="mx-auto max-w-[1400px] px-5 pb-14 pt-32 md:px-10 md:pt-44">
        <p className="label-micro text-signal">Journal · Field Notes &amp; Essays</p>
        <div className="mt-5 grid items-end gap-10 lg:grid-cols-[1.6fr_1fr]">
          <h1 className="display-xl text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.94]">
            Space &amp;
            <br />
            <span className="italic">matter.</span>
          </h1>
          <p className="text-[15px] leading-relaxed text-ink-soft">
            Essays on architectural solid surfaces, monolithic joinery, zero-silica health, and
            digital manufacturing from our Bengaluru workshop and materials research team.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-12 flex flex-wrap items-center gap-2 border-y border-line py-4">
          <span className="label-micro mr-3 text-ink-soft">Category:</span>
          {CATEGORIES.map((cat) => {
            const count =
              cat === "All" ? posts.length : posts.filter((p) => p.category === cat).length;
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
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

      {/* ————— Featured Essay ————— */}
      {featured && (
        <section className="mx-auto max-w-[1400px] px-5 pb-16 md:px-10">
          <Link
            to="/journal/$slug"
            params={{ slug: featured.slug }}
            className="group block overflow-hidden border border-line bg-secondary"
          >
            <div className="grid gap-0 lg:grid-cols-[1.3fr_1fr]">
              <div className="img-zoom aspect-[16/10] min-h-[340px]">
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="eager"
                  width={1600}
                  height={1000}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-8 md:p-12">
                <div>
                  <div className="flex items-center gap-3 text-[12px]">
                    <span className="label-micro text-signal">{featured.category}</span>
                    <span className="text-ink-soft">·</span>
                    <span className="text-ink-soft">{featured.date}</span>
                    <span className="text-ink-soft">·</span>
                    <span className="text-ink-soft">{featured.readTime}</span>
                  </div>
                  <h2 className="display-md mt-4 text-3xl md:text-4xl group-hover:text-signal transition-colors">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                    {featured.excerpt}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-line flex items-center justify-between text-[13px] font-semibold tracking-wide">
                  <span className="hover-underline">Read complete essay</span>
                  <span className="text-signal" aria-hidden>
                    →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      {/* ————— Essays List / Grid ————— */}
      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-10">
        <div className="mt-8">
          {rest.map((post, i) => (
            <Link
              key={post.slug}
              to="/journal/$slug"
              params={{ slug: post.slug }}
              className="group grid grid-cols-1 gap-6 border-t border-line py-8 transition-colors hover:bg-secondary/40 last:border-b sm:grid-cols-[60px_1fr_180px] md:gap-10"
            >
              <span className="text-[13px] font-medium text-signal">
                0{String(i + 2).padStart(2, "0")}
              </span>
              <div>
                <div className="flex items-center gap-3 text-[12px] text-ink-soft">
                  <span className="label-micro text-signal">{post.category}</span>
                  <span>·</span>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-display mt-2 text-2xl font-light tracking-tight text-ink group-hover:text-signal transition-colors md:text-3xl">
                  {post.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-ink-soft max-w-2xl">
                  {post.excerpt}
                </p>
              </div>
              <div className="hidden sm:block overflow-hidden border border-line aspect-[4/3] max-h-28">
                <img
                  src={post.image}
                  alt=""
                  loading="lazy"
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* ————— Dispatch Newsletter Box ————— */}
        <div className="mt-20 border border-line bg-secondary p-8 md:p-12">
          <div className="max-w-xl">
            <p className="label-micro text-signal">Studio Dispatch</p>
            <h2 className="display-md mt-3 text-3xl">Receive material notes &amp; case studies.</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
              Quarterly essays on solid surface fabrication, zero-silica developments, and
              architectural case studies delivered straight to your inbox. No spam.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing to acespaces Studio Dispatch.");
              }}
              className="mt-6 flex flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="architect@practice.in"
                className="w-full border border-line bg-paper px-4 py-3 text-[14px] text-ink outline-none transition-colors focus:border-ink sm:max-w-xs"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-ink px-6 py-3 text-[13px] font-semibold tracking-wide text-paper transition-colors hover:bg-signal"
              >
                Subscribe
                <span aria-hidden>→</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
