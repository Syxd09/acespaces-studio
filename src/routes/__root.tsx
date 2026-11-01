import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { SiteLayout } from "@/components/site-layout";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="label-micro text-signal">Error 404</p>
        <h1 className="display-xl mt-4 text-[clamp(3rem,8vw,6rem)]">
          Off the <span className="italic">grain.</span>
        </h1>
        <p className="mt-4 text-[14px] text-ink-soft">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-ink px-6 py-3 text-[12px] font-semibold tracking-wide text-paper transition-colors hover:bg-signal"
          >
            Back to home <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="label-micro text-signal">Something went wrong</p>
        <h1 className="display-md mt-4 text-4xl">
          This page didn't <span className="italic">load.</span>
        </h1>
        <p className="mt-4 text-[14px] text-ink-soft">
          Something went wrong on our end. You can try again or head back home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center gap-2 bg-ink px-6 py-3 text-[12px] font-semibold tracking-wide text-paper transition-colors hover:bg-signal"
          >
            Try again <span aria-hidden>→</span>
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center border border-ink px-6 py-3 text-[12px] font-semibold tracking-wide text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "acespaces — Corian® Solid Surfaces" },
      {
        name: "description",
        content: "Premium Corian® solid surfaces — materials, colours, fabrication and projects.",
      },
      { name: "author", content: "acespaces" },
      { property: "og:title", content: "acespaces — Corian® Solid Surfaces" },
      {
        property: "og:description",
        content: "Premium Corian® solid surfaces — materials, colours, fabrication and projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Urbanist:wght@200..900&family=Epilogue:wght@300..800&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteLayout />
    </QueryClientProvider>
  );
}
