/**
 * Static prerender script.
 *
 * Builds the server entry with Vite SSR mode, then renders each route
 * to static HTML and writes it to the dist/ directory.
 *
 * Routes are read from src/generated/build-metadata.json (produced by
 * generate-build-metadata.mjs). After importing the SSR bundle, the
 * script validates that every route pattern in the React Router manifest
 * is covered by the generated route list — catching silent omissions
 * when new routes are added.
 *
 * Run after `vite build` (client) via the build pipeline.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const DIST_DIR = join(ROOT, "dist");
const META_PATH = join(ROOT, "src", "generated", "build-metadata.json");
const NOT_FOUND_ROUTE = "/this-route-does-not-exist";

/**
 * Validate that every route pattern from the React Router manifest is
 * covered by the concrete route list from build-metadata.json.
 *
 * - Static paths (no `:` params) must appear verbatim.
 * - Parameterized patterns (e.g. `/lens/:slug`) must have at least one
 *   expanded route with a matching prefix.
 * - Patterns in CLIENT_ONLY_PATTERNS are skipped — these are rendered
 *   exclusively on the client (e.g. comparison pages with arbitrary pairs).
 */
const CLIENT_ONLY_PATTERNS = ["/compare/:slugA/:slugB"];

function validateManifestCoverage(manifestPaths, routes) {
  const missing = [];
  for (const pattern of manifestPaths) {
    if (CLIENT_ONLY_PATTERNS.includes(pattern)) continue;
    if (pattern.includes(":")) {
      const prefix = pattern.slice(0, pattern.indexOf(":"));
      if (!routes.some((r) => r.startsWith(prefix))) {
        missing.push(pattern);
      }
    } else {
      if (!routes.includes(pattern)) {
        missing.push(pattern);
      }
    }
  }
  if (missing.length > 0) {
    console.error("Manifest routes not covered by build-metadata routes:");
    for (const m of missing) console.error(`  ${m}`);
    console.error("Update generate-build-metadata.mjs to expand these patterns.");
    process.exit(1);
  }
}

async function prerender() {
  if (!existsSync(DIST_DIR)) {
    console.error("dist/ not found. Run client build first.");
    process.exit(1);
  }
  if (!existsSync(META_PATH)) {
    console.error("build-metadata.json not found. Run generate-build-metadata.mjs first.");
    process.exit(1);
  }

  /* Read routes from the single source of truth */
  const buildMeta = JSON.parse(readFileSync(META_PATH, "utf-8"));
  const routes = buildMeta.routes;

  /* Build server entry with Vite */
  console.log("Building server entry...");
  const { build } = await import("vite");
  await build({
    configFile: join(ROOT, "vite.config.js"),
    build: {
      ssr: join(ROOT, "src", "entry-server.tsx"),
      outDir: join(ROOT, "dist-server"),
      emptyOutDir: true,
      rollupOptions: {
        output: { format: "es" },
      },
    },
    ssr: {
      /* Bundle all deps into the output so we avoid CJS/ESM interop issues */
      noExternal: true,
    },
    logLevel: "warn",
  });

  /* Import the built server module */
  const serverModule = await import(join(ROOT, "dist-server", "entry-server.js"));
  const { render, manifestPaths } = serverModule;

  /* Validate manifest coverage before rendering */
  validateManifestCoverage(manifestPaths, routes);

  /* Read the client HTML template */
  const template = readFileSync(join(DIST_DIR, "index.html"), "utf-8");

  console.log(`Prerendering ${routes.length} routes...`);

  for (const route of routes) {
    const { html: appHtml, helmet } = render(route);

    /* Build head tags from helmet */
    const headTags = [helmet.title.toString(), helmet.meta.toString(), helmet.link.toString(), helmet.script.toString()]
      .filter(Boolean)
      .join("\n    ");

    /* Inject rendered content and head tags into the template */
    let pageHtml = template;

    /* Replace the default <title> with helmet's title + meta */
    pageHtml = pageHtml.replace(/<title>.*?<\/title>/, headTags);

    /* Remove default meta tags that helmet replaces */
    pageHtml = pageHtml.replace(/\s*<meta\s+name="description"[^>]*\/>/g, "");
    pageHtml = pageHtml.replace(/\s*<link\s+rel="canonical"[^>]*\/>/g, "");
    pageHtml = pageHtml.replace(/\s*<!--\s*Open Graph\s*-->/g, "");
    pageHtml = pageHtml.replace(/\s*<meta\s+property="og:[^"]*"[^>]*\/>/g, "");
    pageHtml = pageHtml.replace(/\s*<!--\s*Twitter Card\s*-->/g, "");
    pageHtml = pageHtml.replace(/\s*<meta\s+name="twitter:[^"]*"[^>]*\/>/g, "");

    /* Inject app HTML into the root div */
    pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    /* Write to the appropriate path */
    const outPath = route === "/" ? join(DIST_DIR, "index.html") : join(DIST_DIR, route.slice(1), "index.html");

    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, pageHtml, "utf-8");
  }

  console.log(`Prerendered ${routes.length} pages.`);

  /* Prerender a real 404 page for GitHub Pages SPA fallback */
  const { html: notFoundHtml, helmet: notFoundHelmet } = render(NOT_FOUND_ROUTE);
  const notFoundHeadTags = [
    notFoundHelmet.title.toString(),
    notFoundHelmet.meta.toString(),
    notFoundHelmet.link.toString(),
    notFoundHelmet.script.toString(),
  ]
    .filter(Boolean)
    .join("\n    ");

  let fourOhFourHtml = template;
  fourOhFourHtml = fourOhFourHtml.replace(/<title>.*?<\/title>/, notFoundHeadTags);
  fourOhFourHtml = fourOhFourHtml.replace(/\s*<meta\s+name="description"[^>]*\/>/g, "");
  fourOhFourHtml = fourOhFourHtml.replace(/\s*<link\s+rel="canonical"[^>]*\/>/g, "");
  fourOhFourHtml = fourOhFourHtml.replace(/\s*<!--\s*Open Graph\s*-->/g, "");
  fourOhFourHtml = fourOhFourHtml.replace(/\s*<meta\s+property="og:[^"]*"[^>]*\/>/g, "");
  fourOhFourHtml = fourOhFourHtml.replace(/\s*<!--\s*Twitter Card\s*-->/g, "");
  fourOhFourHtml = fourOhFourHtml.replace(/\s*<meta\s+name="twitter:[^"]*"[^>]*\/>/g, "");
  fourOhFourHtml = fourOhFourHtml.replace('<div id="root"></div>', `<div id="root">${notFoundHtml}</div>`);
  writeFileSync(join(DIST_DIR, "404.html"), fourOhFourHtml, "utf-8");
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
