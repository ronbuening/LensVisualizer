/** Representative routes, not every catalog entry or state combination. */
export const TRANSLATION_ROUTES = [
  { pattern: "/", url: "/", coverage: "theme and route navigation" },
  { pattern: "/search", url: "/search?q=nikon", coverage: "query, counts, empty/results transitions" },
  { pattern: "/lenses", url: "/lenses", coverage: "filter, grouping and count changes" },
  { pattern: "/lens/:slug", url: "/lens/nikkor-85f14g", coverage: "navigation, controls, inspector, ten drawers" },
  {
    pattern: "/compare/:slugA/:slugB",
    url: "/compare/nikkor-85f14g/agfa-color-telinear-90mm-f4",
    coverage: "shared captions, compact details, shared drawers",
  },
  { pattern: "/makers", url: "/makers", coverage: "theme and detail navigation" },
  { pattern: "/makers/:maker", index: "/makers", coverage: "detail text and route removal" },
  { pattern: "/authors", url: "/authors", coverage: "sort, assignee filter, counts" },
  { pattern: "/authors/:author", index: "/authors", coverage: "detail text and route removal" },
  { pattern: "/patents", url: "/patents", coverage: "theme and route removal" },
  { pattern: "/mounts", url: "/mounts", coverage: "theme and detail navigation" },
  {
    pattern: "/mounts/:mountId",
    index: "/mounts",
    coverage: "detail text, profile changes, both mount views and route removal",
  },
  { pattern: "/formats", url: "/formats", coverage: "theme and detail navigation" },
  { pattern: "/formats/:formatId", index: "/formats", coverage: "detail text and route removal" },
  { pattern: "/teleconverters", url: "/teleconverters", coverage: "published catalog or explicit empty state" },
  {
    pattern: "/teleconverters/:teleconverterKey",
    index: "/teleconverters",
    coverage: "published detail if available; unknown-key state otherwise (hidden fixtures remain unit-tested)",
  },
  { pattern: "/articles", url: "/articles", coverage: "theme and detail navigation" },
  { pattern: "/articles/:slug", index: "/articles", coverage: "rendered Markdown, theme and route removal" },
  { pattern: "/updates", url: "/updates", coverage: "theme and route removal" },
  { pattern: "/relationships", url: "/relationships", coverage: "picker, focused heading, theme and route removal" },
  {
    pattern: "/relationships/universal",
    url: "/relationships/universal",
    coverage: "search, entity/patent details, theme and route removal; SVG text excluded",
  },
  { pattern: "*", url: "/translation-regression-missing-page", coverage: "not-found recovery" },
] as const;

export const TRANSLATION_ANALYSIS_TABS = [
  "summary",
  "aberrations",
  "chromatic",
  "coma",
  "mtf",
  "bokeh",
  "distortion",
  "breathing",
  "vignetting",
  "pupils",
] as const;
