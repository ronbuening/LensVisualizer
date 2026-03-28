# LensVisualizer

LensVisualizer is a React + TypeScript optical design viewer for real camera lenses reconstructed from patent prescriptions. It renders 2D cross-sections, traces rays in real time, and exposes analysis tools for spherical aberration, estimated 2D coma appearance, meridional coma, distortion, focus breathing, vignetting, chromatic spread, glass selection, and field curvature.

**Live app:** [opticalbench.net](https://opticalbench.net/)

Created by **Ron Buening**. For project background and methodology, see [About This Site](src/content/AboutSite.md).

## What The App Does

- Renders patent-derived lens cross-sections as inline SVG with real surface sag and aspheric overlays
- Traces on-axis, off-axis, and chromatic rays through the current focus, aperture, and zoom state
- Shows analysis views for spherical aberration, estimated 2D coma preview, meridional coma, distortion, focus breathing, and vignetting
- Includes Abbe-diagram and Petzval overlays, plus enlarged LCA visualization
- Supports shared-control side-by-side comparison between two lenses
- Ships crawlable lens, maker, comparison, and article pages with SSR prerendering

## Current Scope

- `39` lens data files are currently included under [`src/lens-data/`](src/lens-data/)
- The catalog spans classic and modern designs from Nikon, Zeiss, Voigtlander, Canon, and Ricoh
- Lens pages pair interactive diagrams with long-form optical analysis markdown

The catalog is auto-registered from `src/lens-data/*.data.ts`, so the README no longer tries to maintain a hand-written per-lens table.

## Key Features

- **Interactive optical state**: focus, aperture, zoom, ray mode, chromatic channels, and comparison scale mode all update live
- **Analysis drawer**: dedicated tabs for aberrations, distortion, breathing, and vignetting, including spherical aberration, estimated 2D coma preview, meridional coma, and a combined field-curvature / astigmatic-difference chart inside the Aberrations tab
- **Spherical aberration model**: combines a real-ray transverse fan at the solved best-focus plane with a true near-axis reference for the headline longitudinal SA diagnostic
- **Estimated coma preview**: uses the real chief-ray-centered tangential spread from the meridional ray trace, then expands each valid slice across its pupil chord to synthesize a normalized 2D point-shape estimate
- **Meridional coma model**: samples a dense off-axis ray fan across the current entrance pupil and reports the asymmetric image-plane span for the current focus, aperture, and zoom state; this detailed diagnostic is retained below the estimated preview
- **Chromatic analysis**: RGB ray tracing, longitudinal chromatic spread, and enlarged LCA overlay
- **Glass inspection**: element metadata, Abbe-number plotting, APD tagging, and lens role annotations
- **SEO-friendly multipage app**: prerendered routes for lenses, makers, articles, comparison pages, and static content
- **Structured metadata**: WebSite, CollectionPage, ItemList, Article, TechArticle, and BreadcrumbList JSON-LD across the crawlable pages
- **Share previews**: reusable Open Graph/Twitter social card with `summary_large_image` metadata defaults
- **Freshness-aware sitemap**: build metadata tracks published and last-modified dates, and `sitemap.xml` emits per-route `lastmod` values
- **Responsive UI**: desktop side-by-side layouts, mobile view toggles, persistent preferences, and shareable deep links

## Tech Stack

- React 18
- TypeScript
- Vite 6
- React Router 7
- `react-helmet-async`
- `react-markdown` + `remark-gfm`
- Vitest + Testing Library
- ESLint + Prettier
- GitHub Actions for quality checks and Pages deployment

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Scripts

```bash
npm run dev           # Vite dev server with build metadata generation
npm run build         # Production build + prerender + sitemap
npm run preview       # Preview built output
npm run test          # Full Vitest suite
npm run test:coverage # Coverage run
npm run typecheck     # TypeScript checks
npm run lint          # ESLint
npm run lint:fix      # ESLint autofix
npm run format        # Prettier write
npm run format:check  # Prettier check
npm run seo:audit     # SEO audit over built output
```

Requires Node.js 18+.

## SEO Pipeline

- Route-level metadata is managed through [`src/components/SEOHead.tsx`](src/components/SEOHead.tsx), including canonical URLs, robots directives, social image tags, and JSON-LD payloads.
- Build metadata is generated before dev/build runs and tracks lens/article freshness for sitemap and structured-data use.
- Production builds prerender the crawlable routes, write a freshness-aware sitemap, and generate a real `404.html` with `noindex,follow`.
- [`public/og-default.png`](public/og-default.png) is the shared social preview asset used across public routes.
- `npm run seo:audit` validates the built output for metadata presence, sitemap coverage, route freshness, internal links, and 404 behavior.

## Project Structure

```text
src/
  components/
    controls/   # Headers, toggles, sliders, shared control widgets
    diagram/    # SVG rendering, overlays, badges, annotations
    display/    # Analysis tabs, charts, inspectors, legends
    hooks/      # Computation and UI orchestration hooks
    layout/     # LensViewer, LensDiagramPanel, drawers, wrappers
  content/      # About pages and optics primers
  lens-data/    # Lens prescriptions and accompanying analysis markdown
  optics/       # Ray tracing, lens construction, and analysis math
  pages/        # Route-level page components
  utils/        # Themes, URL sync, reducer state, catalog helpers
__tests__/      # Vitest coverage for optics, UI, routing, and state
scripts/        # Build metadata, prerender, sitemap, SEO audit
agent_docs/     # Developer-facing architecture and workflow notes
```

## Adding A Lens

1. Copy [`src/lens-data/TEMPLATE.data.ts.template`](src/lens-data/TEMPLATE.data.ts.template) to a new `.data.ts` file.
2. Fill in the prescription and metadata fields.
3. Optionally add a matching `.analysis.md` file for the description panel.
4. Run:

```bash
npm run typecheck
npm run test
```

5. The catalog will pick the new lens up automatically through `import.meta.glob`.

See [`src/lens-data/LENS_DATA_SPEC.md`](src/lens-data/LENS_DATA_SPEC.md) for the full format.

## Documentation

- [Architecture notes](agent_docs/architecture.md)
- [Workflow guide](agent_docs/workflow.md)
- [Adding a lens](agent_docs/adding_a_lens.md)
- [Optics primer](src/content/OpticsPrimerSimple.md)
- [Aberrations primer](src/content/AberrationsPrimerSimple.md)

## Contributing

Before opening a PR, run:

```bash
npm run build
npm run seo:audit
npm run typecheck
npm run format:check
npm run lint
npm run test
```

If you want to request a new lens, open a GitHub issue with the lens name and, ideally, a patent or prescription source.
