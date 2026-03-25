/**
 * Static prerender script.
 *
 * Builds the server entry with Vite SSR mode, then renders each route
 * to static HTML and writes it to the dist/ directory.
 *
 * Run after `vite build` (client) via the build pipeline.
 */

import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";

const ROOT = join(import.meta.dirname, "..");
const DIST_DIR = join(ROOT, "dist");
const LENS_DATA_DIR = join(ROOT, "src", "lens-data");

/** Known maker prefixes for generating maker page routes. */
const MAKER_PREFIXES = [
  { prefix: "CARL ZEISS", slug: "carl-zeiss" },
  { prefix: "VOIGTLÄNDER", slug: "voigtlander" },
  { prefix: "NIKON", slug: "nikon" },
  { prefix: "RICOH", slug: "ricoh" },
];

function deriveMakerSlug(name) {
  const upper = name.toUpperCase();
  for (const { prefix, slug } of MAKER_PREFIXES) {
    if (upper.startsWith(prefix)) return slug;
  }
  return name.split(/\s+/)[0].toLowerCase();
}

/** Extract key and name from a lens data file. */
function extractLensInfo(filePath) {
  const content = readFileSync(filePath, "utf-8");
  const keyMatch = content.match(/key:\s*"([^"]+)"/);
  const nameMatch = content.match(/name:\s*"([^"]+)"/);
  return {
    key: keyMatch ? keyMatch[1] : null,
    name: nameMatch ? nameMatch[1] : null,
  };
}

/** Collect all routes to prerender. */
function collectRoutes() {
  const dataFiles = readdirSync(LENS_DATA_DIR).filter((f) => f.endsWith(".data.ts"));
  const routes = ["/", "/lenses", "/makers"];
  const makers = new Set();

  for (const file of dataFiles) {
    const { key, name } = extractLensInfo(join(LENS_DATA_DIR, file));
    if (key) routes.push(`/lens/${key}`);
    if (name) {
      const slug = deriveMakerSlug(name);
      if (!makers.has(slug)) {
        makers.add(slug);
        routes.push(`/makers/${slug}`);
      }
    }
  }

  return routes;
}

async function prerender() {
  if (!existsSync(DIST_DIR)) {
    console.error("dist/ not found. Run client build first.");
    process.exit(1);
  }

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
  const { render } = await import(join(ROOT, "dist-server", "entry-server.js"));

  /* Read the client HTML template */
  const template = readFileSync(join(DIST_DIR, "index.html"), "utf-8");

  const routes = collectRoutes();
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

  /* Update 404.html with the prerendered root page */
  const rootHtml = readFileSync(join(DIST_DIR, "index.html"), "utf-8");
  writeFileSync(join(DIST_DIR, "404.html"), rootHtml, "utf-8");
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
