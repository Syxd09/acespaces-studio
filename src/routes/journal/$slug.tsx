import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { posts } from "@/data/content";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.post.title} — acespaces Journal`
          : "Journal Essay — acespaces",
      },
      {
        name: "description",
        content: loaderData
          ? `${loaderData.post.excerpt} Read this essay from acespaces Studio.`
          : "Architectural material essay from acespaces.",
      },
      {
        property: "og:title",
        content: loaderData ? `${loaderData.post.title} | acespaces` : "Journal Essay | acespaces",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `/journal/${params.slug}` },
    ],
    links: [{ rel: "canonical", href: `/journal/${params.slug}` }],
  }),
  component: JournalArticlePage,
});

function JournalArticlePage() {
  const { post } = Route.useLoaderData();

  const currentIndex = posts.findIndex((p) => p.slug === post.slug);
  const nextPost = posts[(currentIndex + 1) % posts.length]!;
  const prevPost = posts[(currentIndex - 1 + posts.length) % posts.length]!;

  return (
    <>
      {/* ————— Header & Breadcrumb ————— */}
      <article className="mx-auto max-w-[1400px] px-5 pb-24 pt-32 md:px-10 md:pt-44">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 text-[12px] text-ink-soft">
            <Link to="/journal" className="hover-underline">
              Journal
            </Link>
            <span aria-hidden>/</span>
            <span className="text-signal">{post.category}</span>
          </div>

          <h1 className="display-xl mt-6 text-[clamp(2.6rem,5.5vw,5rem)] leading-[0.96]">
            {post.title}
          </h1>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-y border-line py-4 text-[12px] text-ink-soft">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
              <span className="font-medium text-ink">{post.author || "acespaces Studio"}</span>
            </div>
            <div className="flex items-center gap-3">
              <span>{post.date}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* ————— Hero Image ————— */}
        <div className="mt-12 overflow-hidden border border-line bg-secondary">
          <div className="img-zoom aspect-[21/10] min-h-[380px]">
            <img
              src={post.image}
              alt={post.title}
              loading="eager"
              width={1600}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* ————— Essay Body ————— */}
        <div className="mx-auto mt-14 max-w-3xl">
          <p className="text-xl font-light leading-relaxed text-ink border-b border-line pb-8">
            {post.excerpt}
          </p>

          <div className="mt-8 space-y-6 text-[16px] leading-[1.8] text-ink-soft">
            {post.body.map((paragraph, index) => (
              <p key={index} className="text-ink-soft">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Pull Quote */}
          {post.quote && (
            <figure className="my-12 border-l-2 border-signal bg-secondary p-8">
              <blockquote className="display-md text-2xl md:text-3xl text-ink leading-snug">
                &ldquo;{post.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 label-micro text-ink-soft">
                — {post.author || "acespaces Workshop Practice"}
              </figcaption>
            </figure>
          )}

          {/* Key Specifier Takeaways */}
          {post.takeaways && post.takeaways.length > 0 && (
            <div className="mt-12 border border-line bg-paper p-8">
              <p className="label-micro text-signal">Key Takeaways for Specifiers</p>
              <ul className="mt-4 space-y-3 text-[14px] text-ink">
                {post.takeaways.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* ————— Next / Previous Essay ————— */}
          <div className="mt-16 grid grid-cols-1 gap-px bg-line border-t border-b border-line sm:grid-cols-2">
            <Link
              to="/journal/$slug"
              params={{ slug: prevPost.slug }}
              className="group bg-paper p-6 transition-colors hover:bg-secondary"
            >
              <span className="label-micro text-ink-soft">← Previous Essay</span>
              <p className="font-display mt-2 text-xl group-hover:text-signal transition-colors text-ink">
                {prevPost.title}
              </p>
              <p className="mt-1 text-[11px] text-ink-soft">
                {prevPost.category} · {prevPost.readTime}
              </p>
            </Link>

            <Link
              to="/journal/$slug"
              params={{ slug: nextPost.slug }}
              className="group bg-paper p-6 transition-colors hover:bg-secondary sm:text-right"
            >
              <span className="label-micro text-ink-soft">Next Essay →</span>
              <p className="font-display mt-2 text-xl group-hover:text-signal transition-colors text-ink">
                {nextPost.title}
              </p>
              <p className="mt-1 text-[11px] text-ink-soft">
                {nextPost.category} · {nextPost.readTime}
              </p>
            </Link>
          </div>

          {/* Inquiry Banner */}
          <div className="mt-12 flex flex-col items-start justify-between gap-6 border border-line bg-secondary p-8 sm:flex-row sm:items-center">
            <div>
              <p className="display-md text-2xl">Consult on your specification.</p>
              <p className="mt-1 text-[13px] text-ink-soft">
                Speak with our materials team or request sample swatches.
              </p>
            </div>
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-ink px-6 py-3 text-[12px] font-semibold tracking-wide text-paper transition-colors hover:bg-signal"
            >
              Request samples
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
