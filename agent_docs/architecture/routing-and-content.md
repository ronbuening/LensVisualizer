# Routing And Content Architecture

Read this for route definitions, static pages, SSR/prerendering, SEO metadata, markdown articles, lens descriptions, and
build metadata.

> The `/mounts/:id` pages embed mount interface diagrams (`MountDiagramPanel`) and `/makers/:maker` pages embed a
> mounts sidebar; both render from `src/mounts/` data. See [`mount-diagrams.md`](mount-diagrams.md).

## Pages And Routes

| Module | Location | Purpose |
| --- | --- | --- |
| `router.tsx` | `src/` | Browser router created from `routeManifest.tsx`. |
| `routeManifest.tsx` | `src/routes/` | Shared React route patterns used by the client router and SSR entry. |
| `entry-server.tsx` | `src/` | SSR render function and manifest path export for static prerendering. |
| `HomePage.tsx` | `src/pages/` | Homepage shell with hero, navigation cards, articles, recent lenses, and legacy redirect handling. |
| `SearchPage.tsx` | `src/pages/` | Lightweight catalog search at `/search` for lens names, patent numbers, and authors. |
| `LensPage.tsx` | `src/pages/` | Individual lens page at `/lens/:slug` with SEO fallback content plus client-only `LensViewer`. |
| `LensIndexPage.tsx` | `src/pages/` | Browsable lens library at `/lenses`. |
| `MakerPage.tsx` | `src/pages/` | Maker page at `/makers/:maker`, lists maker lenses. |
| `MakersIndexPage.tsx` | `src/pages/` | Maker index at `/makers`, lists makers with counts. |
| `AuthorPage.tsx` | `src/pages/` | Author page at `/authors/:author`, grouping related patents by assignee or co-author. |
| `MountPage.tsx` | `src/pages/` | Mount page at `/mounts/:mountId`, lists lenses for one mount. |
| `MountsIndexPage.tsx` | `src/pages/` | Mount index at `/mounts`, lists represented mounts with counts. |
| `FormatPage.tsx` | `src/pages/` | Image-format page at `/formats/:formatId`, lists lenses for one format. |
| `FormatsIndexPage.tsx` | `src/pages/` | Image-format index at `/formats`, lists represented formats with counts. |
| `ComparePage.tsx` | `src/pages/` | Comparison page at `/compare/:slugA/:slugB` with SEO fallback content plus client-only `LensViewer`. |
| `ArticlesPage.tsx` | `src/pages/` | Article archive at `/articles`. |
| `ArticlePage.tsx` | `src/pages/` | Article page at `/articles/:slug`. |
| `UpdatesPage.tsx` | `src/pages/` | Recently added lens/update page. |
| `NotFoundPage.tsx` | `src/pages/` | Catch-all 404. |

## Static Page Shells

- `PageNavBar.tsx` provides themed static-page navigation with theme and high-contrast toggles.
- `StaticPageShell.tsx` wraps static pages that need shared breadcrumbs, page theme state, and `PAGE_BASE_STYLE`.
- `src/utils/style/pageStyles.ts` exports shared static page base styles and fallback link styles.
- Lens index-specific filter/results styles live under `src/pages/lensIndex/`, but reuse shared base styles where possible.

## SSR And Prerender Flow

The app uses React Router 7 with client-side routing plus static prerendering for SEO:

- `main.tsx` mounts `RouterProvider` with the browser router.
- `entry-server.tsx` exports `render(url): { html, helmet }` using `StaticRouter` and `react-helmet-async`.
- `scripts/generate-build-metadata.mjs` expands the concrete prerender route list into
  `src/generated/build-metadata.json`, including homepage, search, lens, author, maker, mount, format, article, and
  update routes.
- `scripts/prerender.mjs` reads that concrete route list, builds the SSR entry, validates it against
  `manifestPaths` exported from `entry-server.tsx`, and writes each route plus `404.html` into `dist/`.
- `/compare/:slugA/:slugB` is routeable and SSR-capable, but it is intentionally excluded from the generated concrete
  route list and prerender coverage check because arbitrary comparison pairs are noindex client/deep-link pages.
- `scripts/generate-sitemap.mjs` consumes the same route list and route freshness map from
  `src/generated/build-metadata.json`.
- `scripts/seo-audit.mjs` audits the built/prerendered output.

`ClientOnly.tsx` wraps browser-only interactive components. `LensPage` and `ComparePage` pass crawlable fallback content
for SSR and replace it with `LensViewer` after hydration.

## SEO Metadata

- `SEOHead.tsx` sets page title, meta tags, Open Graph, Twitter Card, canonical URL, and JSON-LD.
- `src/utils/catalog/lensMetadata.ts` owns lens page titles, descriptions, canonical URLs, maker extraction, and lens JSON-LD.
- `src/utils/seo/structuredData.ts` owns page-level JSON-LD helpers.
- Maker prefixes are generated from the script-owned source of truth in `scripts/maker-prefixes.mjs` into
  `src/generated/maker-prefixes.json`, which runtime metadata helpers consume.

## Markdown Content

Articles and lens description panels share `src/components/markdown/ThemedMarkdown.tsx`.

The shared renderer preserves:

- GFM tables and footnotes.
- KaTeX math via `remark-math` and `rehype-katex`.
- Article heading IDs via `rehype-slug`.
- Article internal links through React Router.
- Article special image renderers for entrance pupil, exit pupil, telecentricity, and working f-number diagrams.
- Description-panel compact typography and safe external links.

Article markdown files live in `src/content/**/*.md`. Their frontmatter flows through
`scripts/generate-build-metadata.mjs`; raw markdown is loaded by `import.meta.glob` in
`src/utils/content/homepageContent.ts` and joined to the generated metadata there.

Lens description markdown files live beside lens data files as `*.analysis.md` and render in `DescriptionPanel.tsx`.

## Article Series

Series members share a `series` id. The landing page uses `seriesOrder: 0`. Archive, homepage, breadcrumb, and back-link
logic collapse series members through the landing page when appropriate.

See [`../adding_an_article.md`](../adding_an_article.md) for frontmatter and authoring details.

## Build Metadata

Metadata generation is split across:

- `scripts/lens-data-lib.mjs` - lens data scanning, root-file organization helpers, maker slug derivation.
- `scripts/build-metadata-lib.mjs` - git freshness helpers, bounded concurrency, route freshness aggregation.
- `scripts/generate-build-metadata.mjs` - top-level metadata orchestration, concrete route enumeration, generated route
  freshness, generated author index, generated maker-prefix JSON, and README lens-count refresh.
- `scripts/maker-prefixes.mjs` - single source of truth for maker prefixes, emitted to
  `src/generated/maker-prefixes.json`.

Freshness collection uses `execFile`/`execFileSync` argument arrays rather than shell strings and bounded async
concurrency for the git calls. Keep generated route and freshness artifacts stable unless a content change intentionally
updates them.

## Route Change Checklist

When adding a route pattern:

1. Add the React route in `src/routes/routeManifest.tsx`.
2. Update concrete route expansion in `scripts/generate-build-metadata.mjs`, or add the pattern to
   `CLIENT_ONLY_PATTERNS` in `scripts/prerender.mjs` if it is intentionally not prerendered.
3. Update `buildRouteFreshness()` and sitemap priority logic if the route should appear in generated SEO artifacts.
4. Add page smoke tests plus route-sync, SEO, and structured-data tests that apply.
