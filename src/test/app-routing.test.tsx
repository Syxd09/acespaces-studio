import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

describe("App routing", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

  it("matches a page for / instead of falling back to not found", () => {
    const matches = router.matchRoutes("/");
    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches /about", () => {
    const matches = router.matchRoutes("/about");
    expect(matches.at(-1)?.routeId).toBe("/about");
  });

  it("matches /fabrication", () => {
    const matches = router.matchRoutes("/fabrication");
    expect(matches.at(-1)?.routeId).toBe("/fabrication");
  });

  it("matches /projects", () => {
    const matches = router.matchRoutes("/projects");
    expect(matches.at(-1)?.routeId).toBe("/projects/");
  });

  it("matches /projects/the-curve-house", () => {
    const matches = router.matchRoutes("/projects/the-curve-house");
    expect(matches.at(-1)?.routeId).toBe("/projects/$slug");
  });

  it("matches /journal", () => {
    const matches = router.matchRoutes("/journal");
    expect(matches.at(-1)?.routeId).toBe("/journal/");
  });

  it("matches /journal/the-invisible-joint", () => {
    const matches = router.matchRoutes("/journal/the-invisible-joint");
    expect(matches.at(-1)?.routeId).toBe("/journal/$slug");
  });

  it("matches /contact", () => {
    const matches = router.matchRoutes("/contact");
    expect(matches.at(-1)?.routeId).toBe("/contact");
  });
});
