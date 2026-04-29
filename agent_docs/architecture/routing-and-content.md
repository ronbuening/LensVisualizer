# Routing And Content Architecture

Read this for route definitions, static pages, SSR/prerendering, SEO metadata, markdown articles, lens descriptions, and
build metadata.

## Pages And Routes

| Module | Location | Purpose |
| --- | --- | --- |
| `router.tsx` | `src/` | React Router route definitions via `routeManifest.tsx`. |
| `routeManifest.tsx` | `src/routes/` | Shared route manifest used by client routing and build scripts. |
| `entry-server.tsx` | `src/` | SSR render function for static prerendering. |
| `HomePage.tsx` | `src/pages/` | Interactive `LensViewer`; handles legacy `?lens=KEY` redirects. |
| `LensPage.tsx` | `src/pages/` | Individual lens page at `/lens/:slug` with SEO shell + interactive visualizer. |
| `LensIndexPage.tsx` | `src/pages/` | Browsable lens library at `/lenses`. |
| `MakerPage.tsx` | `src/pages/` | Maker page at `/makers/:maker`, lists maker lenses. |
| `MakersIndexPage.tsx` | `src/pages/` | Maker index at `/makers`, lists makers with counts. |
| `ComparePage.tsx` | `src/pages/` | Comparison page at `/compare/:slugA/:slugB`. |
| `ArticlesPage.tsx` | `src/pages/` | Article archive at `/articles`. |
| `ArticlePage.tsx` | `src/pages/` | Article page at `/articles/:slug`. |
| `UpdatesPage.tsx` | `src/pages/` | Recently added lens/update page. |
| `NotFoundPage.tsx` | `src/pages/` | Catch-all 404. |

## Static Page Shells

- `PageNavBar.tsx` provides themed static-page navigation with theme and high-contrast toggles.
- `src/utils/pageStyles.ts` exports shared static page base styles and fallback link styles.
- Lens index-specific filter/results styles live under `src/pages/lensIndex/`, but reuse shared base styles where possible.

## SSR And Prerender Flow

The app uses React Router 7 with client-side routing plus static prerendering for SEO:

- `main.tsx` mounts `RouterProvider` with the browser router.
- `entry-server.tsx` exports `render(url): { html, helmet }` using `StaticRouter` and `react-helmet-async`.
- `scripts/prerender.mjs` expands routes from generated metadata and validates them against `routeManifest.tsx`.
- `scripts/generate-sitemap.mjs` consumes the same route list from `src/generated/build-metadata.json`.
- `scripts/seo-audit.mjs` audits the built/prerendered output.

`ClientOnly.tsx` wraps browser-only interactive components, including the lens visualizer, and renders nothing until after
hydration.

## SEO Metadata

- `SEOHead.tsx` sets page title, meta tags, Open Graph, Twitter Card, canonical URL, and JSON-LD.
- `src/utils/lensMetadata.ts` owns lens page titles, descriptions, canonical URLs, maker extraction, and lens JSON-LD.
- `src/utils/structuredData.ts` owns page-level JSON-LD helpers.
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
`scripts/generate-build-metadata.mjs` into generated homepage/article registries in `src/utils/homepageContent.ts`.

Lens description markdown files live beside lens data files as `*.analysis.md` and render in `DescriptionPanel.tsx`.

## Article Series

Series members share a `series` id. The landing page uses `seriesOrder: 0`. Archive, homepage, breadcrumb, and back-link
logic collapse series members through the landing page when appropriate.

See [`../adding_an_article.md`](../adding_an_article.md) for frontmatter and authoring details.

## Build Metadata

Metadata generation is split across:

- `scripts/lens-data-lib.mjs` - lens data scanning, root-file organization helpers, maker slug derivation.
- `scripts/build-metadata-lib.mjs` - git freshness helpers, bounded concurrency, route freshness aggregation.
- `scripts/generate-build-metadata.mjs` - top-level metadata orchestration.
- `scripts/maker-prefixes.mjs` - single source of truth for maker prefixes.

Freshness collection uses `execFile`/`execFileSync` argument arrays rather than shell strings and bounded async
concurrency for the git calls. Keep generated route and freshness artifacts stable unless a content change intentionally
updates them.

## Route Change Checklist

When adding a route pattern:

1. Add the React route in `src/routes/routeManifest.tsx`.
2. Update metadata route expansion in `scripts/generate-build-metadata.mjs`.
3. Ensure prerender validation and sitemap generation see the new route.
4. Add page smoke tests and any SEO/structured-data tests that apply.
