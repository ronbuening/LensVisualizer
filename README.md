# LensVisualizer

LensVisualizer is a React + TypeScript optical design viewer for real camera lenses reconstructed from patent prescriptions. It renders 2D cross-sections, traces rays in real time, and exposes analysis tools for spherical aberration, a real 2D coma point cloud, meridional and sagittal coma, distortion, focus breathing, vignetting, chromatic spread, chromatic field curvature, glass selection, and field curvature.

**Live app:** [opticalbench.net](https://opticalbench.net/)

Created by **Ron Buening**. For project background and methodology, see [About This Site](src/content/AboutSite.md).

## What The App Does

- Renders patent-derived lens cross-sections as inline SVG with real surface sag, aspheric overlays, and diagnostics that prevent hidden semi-diameter clipping artifacts
- Traces on-axis, off-axis, and chromatic rays through the current focus, aperture, and zoom state
- Adds opt-in, URL-shareable tilt/shift visualization controls for supported perspective-control lenses
- Shows analysis views for spherical aberration, a real 2D coma point cloud, meridional and sagittal coma, distortion, focus breathing, vignetting, pupil aberration, chromatic field curvature, and aspheric surface deviation
- Includes Abbe-diagram and Petzval overlays, plus enlarged LCA visualization
- Provides infinite-resolution zoom and pan for inspecting fine lens details, with mouse wheel, drag, pinch-to-zoom, and keyboard shortcuts
- Supports shared-control side-by-side comparison between two lenses
- Ships crawlable lens, maker, comparison, and article pages with SSR prerendering

## Current Scope

- `120` lens data files are currently included under [`src/lens-data/`](src/lens-data/)
- The catalog spans classic and modern designs from Nikon, Zeiss, Voigtlander, Canon, Ricoh, and Vivitar
- Lens pages pair interactive diagrams with long-form optical analysis markdown

The catalog is auto-registered from `src/lens-data/**/*.data.ts`, so the README no longer tries to maintain a hand-written per-lens table.

## Key Features

- **Interactive optical state**: focus, aperture, zoom, ray mode, chromatic channels, and comparison scale mode all update live
- **Perspective-control movement**: supported PC lenses expose signed SHIFT and TILT sliders that move the 2D lens/ray trace relative to a fixed image plane and round-trip through shared URLs
- **Analysis drawer**: dedicated tabs for aberrations, coma, distortion, breathing, vignetting, and pupils, including spherical aberration, a real 2D coma point cloud, meridional and sagittal coma fan plots, separate parabasal and real-ray field curvature charts, isolated astigmatism split, optional chromatic (R/G/B) focus shifts inside the Aberrations tab, and entrance/exit pupil position shift vs field in the Pupils tab
- **Aspheric deviation inspector**: click any aspheric element to compare its surface profile against the base sphere or a least-squares best-fit sphere, with adjustable exaggeration and click-to-measure Δsag (mm or μm)
- **Spherical aberration model**: combines a dense real-ray transverse fan (22 pupil zones with finer sampling near the edge) at the solved best-focus plane with a true near-axis reference for the headline longitudinal SA diagnostic; symmetric +/- ray pairing prevents asymmetric clipping from biasing metrics
- **Distortion model**: iteratively solved chief rays correct for pupil aberration at wide field angles; 21-point sampling resolves moustache distortion transitions; 2D field grid uses a pre-computed pupil correction table; multi-bracket search handles non-monotonic image-height curves
- **Coma point-cloud preview**: traces a fixed circular pupil pattern with the skew-ray core and plots chief-ray-centered tangential and sagittal image heights directly in millimeters
- **Meridional coma model**: samples a dense off-axis ray fan across the current entrance pupil and reports the asymmetric image-plane span for the current focus, aperture, and zoom state; this detailed diagnostic is retained below the point-cloud preview
- **Sagittal coma model**: traces a sagittal pupil fan orthogonal to the meridional plane and reports the x-intercept spread, displayed in its own collapsible section below the meridional coma view
- **Chromatic field curvature**: per-wavelength (R/G/B) tangential and sagittal best-focus traces across the field, with a chromatic focus spread metric; displayed as a third chart inside the field curvature section
- **Chromatic analysis**: RGB ray tracing, longitudinal chromatic spread, and enlarged LCA overlay
- **Glass inspection**: element metadata, Abbe-number plotting, APD tagging, and lens role annotations
- **Geometry validation**: shared rim-slope and cross-gap diagnostics keep lens element outlines clean and catch semi-diameter issues before they render as artifacts
- **SEO-friendly multipage app**: prerendered routes for lenses, makers, articles, comparison pages, and static content
- **Structured metadata**: WebSite, CollectionPage, ItemList, Article, TechArticle, and BreadcrumbList JSON-LD across the crawlable pages
- **Share previews**: reusable Open Graph/Twitter social card with `summary_large_image` metadata defaults
- **Freshness-aware sitemap**: build metadata tracks published and last-modified dates, and `sitemap.xml` emits per-route `lastmod` values
- **Zoom and pan**: infinite-resolution SVG zoom via viewBox manipulation, with mouse wheel, pointer drag, touch pinch-to-zoom, and keyboard shortcuts (+/- zoom, arrows pan, Escape cancel)
- **Responsive UI**: desktop side-by-side layouts, mobile view toggles, persistent preferences, and shareable deep links — URLs encode the selected element, glass map, LCA and Petzval overlays, bokeh preview, analysis drawer + tab, and slider state including PC lens movement

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
npm run organize:lens-data # Move stray root-level lens files into maker folders
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
    homepage/   # Hero section, changelog, recent lenses, nav cards
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

1. Copy [`src/lens-data/TEMPLATE.data.ts.template`](src/lens-data/TEMPLATE.data.ts.template) to `src/lens-data/YourLens.data.ts`.
2. Fill in the prescription and metadata fields.
   Only real perspective-control lenses should declare `perspectiveControl`; ordinary lenses omit it and get no SHIFT/TILT controls.
3. Optionally add `src/lens-data/YourLens.analysis.md` beside the data file for the description panel.
4. Run:

```bash
npm run typecheck && npm run format:check && npm run lint && npm run test
```

5. The catalog will pick the new lens up automatically through `import.meta.glob`.
6. `npm run generate:metadata` or `npm run build` will move the lens into its maker folder and rewrite the type import to match the nested path.

See [`src/lens-data/LENS_DATA_SPEC.md`](src/lens-data/LENS_DATA_SPEC.md) for the full format.


## Agent Reference Docs

- [`CLAUDE.md`](CLAUDE.md) is the canonical assistant-facing project guide.
- [`agents.md`](agents.md) mirrors `CLAUDE.md` so tools that prefer lowercase agent files read the same instructions.

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
