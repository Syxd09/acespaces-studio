import { Link, createFileRoute } from "@tanstack/react-router";
import { collections, applications, projects, posts, stats, images } from "@/data/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "acespaces — Corian® Solid Surfaces" },
      {
        name: "description",
        content:
          "acespaces supplies and fabricates premium Corian® solid surfaces — materials, colours, custom fabrication and installed projects.",
      },
      { property: "og:title", content: "acespaces — Corian® Solid Surfaces" },
      {
        property: "og:description",
        content: "Premium Corian® solid surfaces — materials, colours, fabrication and projects.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* ————— hero ————— */}
      <section className="relative h-[92vh] min-h-[540px] overflow-hidden">
        <img
          src={images.heroMain}
          alt="Sculpted white Corian reception counter in a gallery-white interior"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1088}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[1400px] px-5 pb-14 md:px-10">
          <p className="label-micro text-paper/80 reveal-up">Materials · Fabrication · Projects</p>
          <h1
            className="display-xl reveal-up mt-4 max-w-4xl text-[clamp(3rem,8vw,7.5rem)] text-paper"
            style={{ animationDelay: "0.08s" }}
          >
            Solid by design.
          </h1>
          <div
            className="reveal-up mt-7 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.16s" }}
          >
            <Link
              to="/materials"
              className="bg-paper px-6 py-3 text-[13px] font-semibold tracking-wide text-ink transition-colors hover:bg-signal hover:text-paper"
            >
              Explore materials
            </Link>
            <Link
              to="/projects"
              className="border border-paper/50 px-6 py-3 text-[13px] font-semibold tracking-wide text-paper transition-colors hover:border-paper hover:bg-paper/10"
            >
              See projects
            </Link>
          </div>
        </div>
      </section>

      {/* ————— marquee ————— */}
      <div className="overflow-hidden border-b border-line py-5" aria-hidden>
        <div className="marquee-track items-center gap-12">
          {[...collections, ...collections].map((c, i) => (
            <span
              key={i}
              className="flex items-center gap-12 font-display text-2xl font-light tracking-tight text-ink-soft"
            >
              {c.name}
              <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
          ))}
        </div>
      </div>

      {/* ————— colour library ————— */}
      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="flex items-end justify-between">
          <h2 className="display-md text-[clamp(2rem,4vw,3.4rem)]">The colour library</h2>
          <Link
            to="/materials"
            className="hover-underline hidden text-[13px] font-semibold tracking-wide md:block"
          >
            All materials →
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((c, i) => (
            <Link
              key={c.id}
              to="/materials/$collection"
              params={{ collection: c.id }}
              className="group bg-paper"
            >
              <div className="img-zoom aspect-[4/3]">
                <img
                  src={c.swatch}
                  alt={`${c.name} collection swatch`}
                  loading="lazy"
                  width={912}
                  height={912}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-start justify-between p-5">
                <div>
                  <p className="font-display text-lg font-medium tracking-tight">{c.name}</p>
                  <p className="mt-0.5 text-[12px] text-ink-soft">{c.note}</p>
                </div>
                <span className="text-[12px] text-ink-soft">0{i + 1}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ————— applications feature ————— */}
      <section className="border-y border-line bg-secondary">
        <div className="mx-auto grid max-w-[1400px] md:grid-cols-2">
          <div className="img-zoom min-h-[420px]">
            <img
              src={images.appKitchen}
              alt="Monolithic white Corian kitchen island with integrated sink"
              loading="lazy"
              width={1600}
              height={1104}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-16">
            <p className="label-micro text-signal">Applications</p>
            <h2 className="display-md mt-4 text-[clamp(1.8rem,3vw,2.8rem)]">
              One material,
              <br />
              endlessly shaped.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft">
              Seamless counters, thermoformed curves, integral basins, facade panels — cut, formed
              and joined in our own workshop.
            </p>
            <ul className="mt-9 grid grid-cols-2 gap-x-8 gap-y-3">
              {applications.slice(0, 6).map((a) => (
                <li key={a.id} className="flex items-center gap-2.5 text-[13px]">
                  <span className="h-1 w-1 rounded-full bg-signal" aria-hidden />
                  {a.name}
                </li>
              ))}
            </ul>
            <Link
              to="/applications"
              className="hover-underline mt-9 w-fit text-[13px] font-semibold tracking-wide"
            >
              View applications →
            </Link>
          </div>
        </div>
      </section>

      {/* ————— stats ————— */}
      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-2 gap-px bg-line md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-paper p-8 md:p-10">
              <p className="display-md text-4xl md:text-5xl">{s.value}</p>
              <p className="label-micro mt-3 text-ink-soft">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ————— projects teaser ————— */}
      <section className="mx-auto max-w-[1400px] px-5 pb-20 md:px-10 md:pb-28">
        <div className="flex items-end justify-between">
          <h2 className="display-md text-[clamp(2rem,4vw,3.4rem)]">Selected projects</h2>
          <Link
            to="/projects"
            className="hover-underline hidden text-[13px] font-semibold tracking-wide md:block"
          >
            All projects →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.slice(0, 2).map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group block"
            >
              <div className="img-zoom aspect-[16/11]">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1600}
                  height={1104}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex items-baseline justify-between border-b border-line pb-4 pt-4">
                <p className="font-display text-xl font-medium tracking-tight">{p.title}</p>
                <p className="text-[12px] text-ink-soft">
                  {p.location} · {p.year}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ————— journal teaser ————— */}
      <section className="border-t border-line bg-secondary">
        <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-24">
          <div className="flex items-end justify-between">
            <h2 className="display-md text-[clamp(2rem,4vw,3.4rem)]">Journal</h2>
            <Link
              to="/journal"
              className="hover-underline hidden text-[13px] font-semibold tracking-wide md:block"
            >
              Read the journal →
            </Link>
          </div>
          <div className="mt-10">
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                to="/journal/$slug"
                params={{ slug: post.slug }}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 border-t border-line py-5 last:border-b"
              >
                <span className="text-[12px] text-ink-soft">0{i + 1}</span>
                <span>
                  <span className="block font-display text-xl font-light tracking-tight transition-colors group-hover:text-signal md:text-2xl">
                    {post.title}
                  </span>
                  <span className="mt-1 block text-[12px] text-ink-soft">
                    {post.category} · {post.readTime}
                  </span>
                </span>
                <img
                  src={post.image}
                  alt=""
                  loading="lazy"
                  width={1408}
                  height={1008}
                  className="hidden h-16 w-24 object-cover sm:block"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
