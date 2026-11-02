/**
 * One browser sample per route in src/routes/routeManifest.tsx: a URL, or an index whose first detail link the
 * translation suite follows. translationCoverage.test.ts fails when the manifest gains a route without a sample.
 */
export const TRANSLATION_ROUTES = [
  { pattern: "/", url: "/" },
  { pattern: "/lens-builder", url: "/lens-builder" },
  { pattern: "/search", url: "/search?q=nikon" },
  { pattern: "/lenses", url: "/lenses" },
  { pattern: "/lens/:slug", url: "/lens/nikkor-85f14g" },
  { pattern: "/compare/:slugA/:slugB", url: "/compare/nikkor-85f14g/agfa-color-telinear-90mm-f4" },
  { pattern: "/makers", url: "/makers" },
  { pattern: "/makers/:maker", index: "/makers" },
  { pattern: "/authors", url: "/authors" },
  { pattern: "/authors/:author", index: "/authors" },
  { pattern: "/patents", url: "/patents" },
  { pattern: "/mounts", url: "/mounts" },
  { pattern: "/mounts/:mountId", index: "/mounts" },
  { pattern: "/formats", url: "/formats" },
  { pattern: "/formats/:formatId", index: "/formats" },
  { pattern: "/teleconverters", url: "/teleconverters" },
  { pattern: "/teleconverters/:teleconverterKey", index: "/teleconverters" },
  { pattern: "/articles", url: "/articles" },
  { pattern: "/articles/:slug", index: "/articles" },
  { pattern: "/updates", url: "/updates" },
  { pattern: "/relationships", url: "/relationships" },
  { pattern: "/relationships/universal", url: "/relationships/universal" },
  { pattern: "*", url: "/translation-regression-missing-page" },
] as const;
