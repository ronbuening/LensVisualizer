import { expect, it } from "vitest";
import fs from "node:fs";

it("includes the client-only route while the builder flag is on", async () => {
  expect((await import("../../../src/utils/featureFlags.js")).ENABLE_LENS_BUILDER).toBe(true);
  const routes = await import("../../../src/routes/routeManifest.js");
  expect(routes.default.some((r) => r.path === "/lens-builder")).toBe(true);
});

it("has prerender exclusion and a 200 app-shell fallback without a sitemap entry", () => {
  const prerender = fs.readFileSync("scripts/prerender.mjs", "utf8");
  expect(prerender).toMatch(/CLIENT_ONLY_PATTERNS = \[[^\]]*"\/lens-builder"/);
  expect(fs.readFileSync("public/_redirects", "utf8")).toContain("/lens-builder/* / 200");
  const metadata = JSON.parse(fs.readFileSync("src/generated/build-metadata.json", "utf8"));
  expect(JSON.stringify(metadata.routes)).not.toContain("lens-builder");
  expect(fs.readFileSync("src/pages/LensBuilderPage.tsx", "utf8")).toContain('robots="noindex,nofollow"');
});
