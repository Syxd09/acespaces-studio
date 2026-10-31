import { Link } from "@tanstack/react-router";
import { Wordmark } from "./site-header";

const COLUMNS: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Materials",
    links: [
      { label: "Materials & Colours", to: "/materials" },
      { label: "Solids", to: "/materials/solids" },
      { label: "Aggregate", to: "/materials/aggregate" },
      { label: "Veined", to: "/materials/veined" },
      { label: "Terra", to: "/materials/terra" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "Products", to: "/products" },
      { label: "Applications", to: "/applications" },
      { label: "Fabrication", to: "/fabrication" },
      { label: "Projects", to: "/projects" },
      { label: "Journal", to: "/journal" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Contact", to: "/contact" },
      { label: "Request samples", to: "/contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="rule-top bg-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-14 md:grid-cols-[1.4fr_2fr]">
          <div>
            <p className="display-md text-[clamp(2.6rem,5vw,4.2rem)] text-ink">
              Let&rsquo;s shape
              <br />
              something
              <span className="text-signal"> solid</span>.
            </p>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-3 text-[13px] font-semibold tracking-wide"
            >
              <span className="hover-underline">Start a project</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-paper transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="label-micro text-ink-soft">{col.title}</p>
                <ul className="mt-5 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="text-[13px] text-ink-soft transition-colors hover:text-ink"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="rule-top mt-16 flex flex-col gap-6 pt-8 text-[12px] text-ink-soft md:flex-row md:items-end md:justify-between">
          <div className="space-y-1">
            <p className="text-xl text-ink">
              <Wordmark />
            </p>
            <p>
              Corian® solid surfaces — materials, fabrication &amp; installed projects.
            </p>
          </div>
          <div className="space-y-1 md:text-right">
            <p>studio@acespaces.in</p>
            <p>© {new Date().getFullYear()} acespaces. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
