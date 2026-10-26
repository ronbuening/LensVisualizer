import { afterEach, expect, it, vi } from "vitest";
import fs from "node:fs";

afterEach(() => {
  vi.unstubAllEnvs();
  vi.resetModules();
});

it("includes the client-only route in dev/test and excludes it with production env", async () => {
  vi.stubEnv("DEV", true);
  vi.resetModules();
  const dev = await import("../../../src/routes/routeManifest.js");
  expect(dev.default.some((r) => r.path === "/lens-builder")).toBe(true);
  expect((await import("../../../src/utils/featureFlags.js")).ENABLE_LENS_BUILDER).toBe(true);
  vi.stubEnv("DEV", false);
  vi.resetModules();
  const prod = await import("../../../src/routes/routeManifest.js");
  expect(prod.default.some((r) => r.path === "/lens-builder")).toBe(false);
  expect((await import("../../../src/utils/featureFlags.js")).ENABLE_LENS_BUILDER).toBe(false);
});

it("has prerender exclusion and a 200 app-shell fallback without a sitemap entry", () => {
  const prerender = fs.readFileSync("scripts/prerender.mjs", "utf8");
  expect(prerender).toMatch(/CLIENT_ONLY_PATTERNS = \[[^\]]*"\/lens-builder"/);
  expect(fs.readFileSync("public/_redirects", "utf8")).toContain("/lens-builder/* / 200");
  const metadata = JSON.parse(fs.readFileSync("src/generated/build-metadata.json", "utf8"));
  expect(JSON.stringify(metadata.routes)).not.toContain("lens-builder");
  expect(fs.readFileSync("src/pages/LensBuilderPage.tsx", "utf8")).toContain('robots="noindex,nofollow"');
});

it("defaults to a boolean false in the plain-Node metadata/SSR tooling environment", async () => {
  const { execFileSync } = await import("node:child_process");
  const result = execFileSync(
    "node",
    [
      "--input-type=module",
      "-e",
      'import { ENABLE_LENS_BUILDER as flag } from "./src/utils/featureFlags.ts"; console.log(typeof flag, flag);',
    ],
    { encoding: "utf8" },
  );
  expect(result.trim()).toBe("boolean false");
});
