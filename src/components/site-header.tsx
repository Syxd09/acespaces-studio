import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const NAV = [
  { label: "Products", to: "/products" },
  { label: "Applications", to: "/applications" },
  { label: "Fabrication", to: "/fabrication" },
  { label: "Projects", to: "/projects" },
  { label: "Journal", to: "/journal" },
  { label: "About Us", to: "/about" },
] as const;

const COLLECTIONS = [
  { name: "Solids", note: "Pure, homogeneous colour", hex: "#f4f2ee" },
  { name: "Aggregate", note: "Mineral-flecked depth", hex: "#b9b0a2" },
  { name: "Veined", note: "Drawn from marble memory", hex: "#e8e4dd" },
  { name: "Terra", note: "Warm earth pigments", hex: "#a4492f" },
  { name: "Ash", note: "Concrete, softened", hex: "#8d8d8d" },
  { name: "Noir", note: "Deep mineral blacks", hex: "#17171a" },
];

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-semibold tracking-tight ${className}`}>
      acespaces<span className="text-signal">.</span>
    </span>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const isActive = (to: string) => pathname === to || pathname.startsWith(`${to}/`);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
          scrolled
            ? "border-line bg-paper/90 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-5 md:px-10">
          <Link to="/" aria-label="acespaces home" className="text-xl">
            <Wordmark />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {/* Materials & Colours dropdown */}
            <div className="group relative">
              <Link
                to="/materials"
                className={`flex items-center gap-1.5 py-2 text-[13px] font-medium tracking-wide transition-colors ${
                  isActive("/materials") ? "text-signal" : "hover:text-ink-soft"
                }`}
              >
                Materials &amp; Colours
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 10 10"
                  fill="none"
                  className="mt-px transition-transform duration-300 group-hover:rotate-180"
                  aria-hidden
                >
                  <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </Link>

              <div className="invisible absolute left-1/2 top-full w-[520px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="grid grid-cols-2 gap-px border border-line bg-line shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]">
                  {COLLECTIONS.map((c) => (
                    <Link
                      key={c.name}
                      to="/materials/$collection"
                      params={{ collection: c.name.toLowerCase() }}
                      className="group/item flex items-center gap-3 bg-paper px-4 py-3.5 transition-colors hover:bg-secondary"
                    >
                      <span
                        className="h-8 w-8 shrink-0 rounded-[2px] ring-1 ring-black/10"
                        style={{ backgroundColor: c.hex }}
                        aria-hidden
                      />
                      <span className="min-w-0">
                        <span className="block text-[13px] font-medium leading-tight">{c.name}</span>
                        <span className="block truncate text-[11px] text-ink-soft">{c.note}</span>
                      </span>
                    </Link>
                  ))}
                  <Link
                    to="/materials"
                    className="col-span-2 flex items-center justify-between bg-ink px-4 py-3 text-[12px] font-medium text-paper transition-colors hover:text-signal"
                  >
                    Browse the full colour library
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`text-[13px] font-medium tracking-wide transition-colors ${
                  isActive(item.to) ? "text-signal" : "hover:text-ink-soft"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden items-center gap-2 border border-ink bg-transparent px-4 py-2 text-[12px] font-semibold tracking-wide transition-colors hover:bg-ink hover:text-paper md:flex"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
              Request samples
            </Link>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 top-0 h-px w-full bg-ink transition-transform duration-300 ${
                    menuOpen ? "translate-y-1.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 bottom-0 h-px w-full bg-ink transition-transform duration-300 ${
                    menuOpen ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* mobile overlay menu */}
      <div
        className={`fixed inset-0 z-40 bg-paper transition-all duration-500 lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-between px-6 pb-10 pt-24">
          <nav className="flex flex-col" aria-label="Mobile">
            <Link
              to="/materials"
              className="rule-top flex items-baseline justify-between py-4 font-display text-3xl font-light tracking-tight"
            >
              Materials &amp; Colours <span className="text-sm text-signal">06</span>
            </Link>
            {NAV.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                className="rule-top flex items-baseline justify-between py-4 font-display text-3xl font-light tracking-tight"
              >
                {item.label}{" "}
                <span className="text-sm text-ink-soft">{String(i + 7).padStart(2, "0")}</span>
              </Link>
            ))}
          </nav>
          <div className="rule-top flex items-center justify-between pt-5 text-[12px] text-ink-soft">
            <span>studio@acespaces.in</span>
            <Link to="/contact" className="font-medium text-ink">
              Request samples →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export { Wordmark };
