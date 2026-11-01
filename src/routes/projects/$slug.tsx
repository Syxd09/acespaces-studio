import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { projects } from "@/data/content";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => ({
    meta: [
      {
        title: loaderData
          ? `${loaderData.project.title} — Architectural Case Study | acespaces`
          : "Case Study — acespaces",
      },
      {
        name: "description",
        content: loaderData
          ? `${loaderData.project.title} (${loaderData.project.location}) — ${loaderData.project.summary} Fabricated in Corian® solid surface by acespaces.`
          : "Architectural case study from acespaces.",
      },
      {
        property: "og:title",
        content: loaderData ? `${loaderData.project.title} | acespaces` : "Case Study | acespaces",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `/projects/${params.slug}` },
    ],
    links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
  }),
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { project } = Route.useLoaderData();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length]!;
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length]!;

  return (
    <>
      {/* ————— Header & Breadcrumb ————— */}
      <section className="mx-auto max-w-[1400px] px-5 pb-12 pt-32 md:px-10 md:pt-44">
        <div className="flex flex-wrap items-center gap-3 text-[12px] text-ink-soft">
          <Link to="/projects" className="hover-underline">
            Projects
          </Link>
          <span aria-hidden>/</span>
          <span className="text-signal">{project.category || "Case Study"}</span>
          <span aria-hidden>/</span>
          <span className="text-ink">{project.title}</span>
        </div>

        <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1.8fr_1fr]">
          <div>
            <h1 className="display-xl text-[clamp(2.8rem,7vw,6.5rem)] leading-[0.92]">
              {project.title}
            </h1>
          </div>
          <div className="space-y-3 lg:border-l lg:border-line lg:pl-8">
            <div className="grid grid-cols-2 gap-4 text-[13px]">
              <div>
                <span className="label-micro text-ink-soft">Location</span>
                <p className="mt-1 font-medium text-ink">{project.location}, India</p>
              </div>
              <div>
                <span className="label-micro text-ink-soft">Year</span>
                <p className="mt-1 font-medium text-ink">{project.year}</p>
              </div>
              {project.architect && (
                <div>
                  <span className="label-micro text-ink-soft">Architect / Studio</span>
                  <p className="mt-1 font-medium text-ink">{project.architect}</p>
                </div>
              )}
              {project.area && (
                <div>
                  <span className="label-micro text-ink-soft">Spatial Scale</span>
                  <p className="mt-1 font-medium text-ink">{project.area}</p>
                </div>
              )}
            </div>
            <div className="pt-2">
              <span className="label-micro text-ink-soft">Surface Specification</span>
              <p className="mt-1 font-medium text-signal">{project.surface}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ————— Hero Photography ————— */}
      <section className="mx-auto max-w-[1400px] px-5 pb-20 md:px-10">
        <div className="overflow-hidden border border-line bg-secondary">
          <div className="img-zoom aspect-[16/9] min-h-[420px]">
            <img
              src={project.image}
              alt={project.title}
              loading="eager"
              width={1600}
              height={1104}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between gap-4 border-t border-line bg-paper px-6 py-4 text-[12px] sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
              <span className="font-medium text-ink">{project.title}</span>
              <span className="text-ink-soft">— {project.summary}</span>
            </div>
            <span className="text-ink-soft">
              {project.location} · {project.surface}
            </span>
          </div>
        </div>

        {/* ————— Editorial Case Study Narrative ————— */}
        <div className="mt-16 grid gap-14 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-8">
            <div className="border-b border-line pb-8">
              <p className="label-micro text-signal">Architectural Concept</p>
              <p className="display-md mt-4 text-2xl md:text-3xl text-ink leading-snug">
                &ldquo;{project.summary}&rdquo;
              </p>
            </div>

            <div className="space-y-6 text-[15px] leading-relaxed text-ink-soft">
              {project.body.map((para, idx) => (
                <p
                  key={idx}
                  className={idx === 0 ? "text-lg font-light leading-relaxed text-ink" : ""}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Challenge & Solution Box */}
            {(project.challenge || project.solution) && (
              <div className="border border-line bg-secondary p-8 space-y-6">
                {project.challenge && (
                  <div>
                    <span className="label-micro text-signal">The Fabrication Challenge</span>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink">{project.challenge}</p>
                  </div>
                )}
                {project.solution && (
                  <div className="border-t border-line pt-4">
                    <span className="label-micro text-ink">The Engineering Solution</span>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Sidebar: Technical Specs & Scope */}
          <div className="space-y-8">
            <div className="border border-line bg-paper p-8">
              <p className="label-micro text-signal">Fabrication Details</p>
              {project.specs && project.specs.length > 0 ? (
                <div className="mt-6 divide-y divide-line">
                  {project.specs.map((s) => (
                    <div key={s.label} className="py-3.5 first:pt-0 last:pb-0">
                      <span className="label-micro text-ink-soft block">{s.label}</span>
                      <strong className="mt-1 block font-display text-[15px] font-medium text-ink">
                        {s.value}
                      </strong>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-6 space-y-4 text-[13px]">
                  <div>
                    <span className="label-micro text-ink-soft">Material Lot</span>
                    <p className="mt-1 font-medium text-ink">{project.surface}</p>
                  </div>
                  <div>
                    <span className="label-micro text-ink-soft">Tolerances</span>
                    <p className="mt-1 font-medium text-ink">±0.18 mm (5-Axis CNC)</p>
                  </div>
                </div>
              )}

              {/* Scope Pills */}
              <div className="mt-8 border-t border-line pt-6">
                <span className="label-micro text-ink-soft block">Delivered Scope</span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.scope.map((item) => (
                    <span
                      key={item}
                      className="border border-line bg-secondary px-3 py-1 text-[12px] text-ink"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* In-Situ Maintenance Note */}
            <div className="border border-line bg-secondary p-8">
              <span className="label-micro text-signal">Longevity Note</span>
              <p className="mt-2 font-display text-lg font-light text-ink">
                100% In-Situ Renewable Surface
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">
                Solid surface is homogeneous through its entire 12 mm thickness. If scuffed over
                time, our Bengaluru technicians sand and buff the material back to factory
                specification in place without dismantling.
              </p>
            </div>
          </div>
        </div>

        {/* ————— Next / Previous Project Navigation ————— */}
        <div className="mt-20 grid grid-cols-1 gap-px bg-line border-t border-b border-line sm:grid-cols-2">
          <Link
            to="/projects/$slug"
            params={{ slug: prevProject.slug }}
            className="group bg-paper p-8 transition-colors hover:bg-secondary"
          >
            <span className="label-micro text-ink-soft">← Previous Case Study</span>
            <p className="display-md mt-2 text-2xl group-hover:text-signal transition-colors">
              {prevProject.title}
            </p>
            <p className="mt-1 text-[12px] text-ink-soft">
              {prevProject.location} · {prevProject.surface}
            </p>
          </Link>

          <Link
            to="/projects/$slug"
            params={{ slug: nextProject.slug }}
            className="group bg-paper p-8 transition-colors hover:bg-secondary sm:text-right"
          >
            <span className="label-micro text-ink-soft">Next Case Study →</span>
            <p className="display-md mt-2 text-2xl group-hover:text-signal transition-colors">
              {nextProject.title}
            </p>
            <p className="mt-1 text-[12px] text-ink-soft">
              {nextProject.location} · {nextProject.surface}
            </p>
          </Link>
        </div>

        {/* ————— Project Specifier Callout ————— */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border border-line bg-secondary p-8 md:flex-row md:items-center md:p-10">
          <div>
            <p className="display-md text-2xl md:text-3xl">
              Specify {project.surface} for your space.
            </p>
            <p className="mt-2 text-[14px] text-ink-soft">
              Request sample swatches or submit your CAD drawings for workshop pricing.
            </p>
          </div>
          <Link
            to="/contact"
            className="flex items-center gap-2 bg-ink px-6 py-3 text-[13px] font-semibold tracking-wide text-paper transition-colors hover:bg-signal"
          >
            Start project enquiry
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
