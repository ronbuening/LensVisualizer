# LensVisualizer

LensVisualizer is a React + TypeScript optical design viewer for real camera lenses reconstructed from patent prescriptions. It renders 2D cross-sections, traces rays in real time, and exposes analysis tools for spherical aberration, distortion, focus breathing, vignetting, chromatic spread, glass selection, and field curvature.

**Live app:** [opticalbench.net](https://opticalbench.net/)

Created by **Ron Buening**. For project background and methodology, see [About This Site](src/content/AboutSite.md).

## What The App Does

- Renders patent-derived lens cross-sections as inline SVG with real surface sag and aspheric overlays
- Traces on-axis, off-axis, and chromatic rays through the current focus, aperture, and zoom state
- Shows analysis views for spherical aberration, distortion, focus breathing, and vignetting
- Includes Abbe-diagram and Petzval overlays, plus enlarged LCA visualization
- Supports shared-control side-by-side comparison between two lenses
- Ships crawlable lens, maker, comparison, and article pages with SSR prerendering

## Current Scope

- `34` lens data files are currently included under [`src/lens-data/`](src/lens-data/)
- The catalog spans classic and modern designs from Nikon, Zeiss, Voigtlander, Canon, and Ricoh
- Lens pages pair interactive diagrams with long-form optical analysis markdown

The catalog is auto-registered from `src/lens-data/*.data.ts`, so the README no longer tries to maintain a hand-written per-lens table.

## Key Features

- **Interactive optical state**: focus, aperture, zoom, ray mode, chromatic channels, and comparison scale mode all update live
- **Analysis drawer**: dedicated tabs for aberrations, distortion, breathing, and vignetting
- **Spherical aberration model**: uses a true paraxial reference and current-state entrance pupil geometry, with sign conventions aligned to the in-app optics primer
- **Chromatic analysis**: RGB ray tracing, longitudinal chromatic spread, and enlarged LCA overlay
- **Glass inspection**: element metadata, Abbe-number plotting, APD tagging, and lens role annotations
- **SEO-friendly multipage app**: prerendered routes for lenses, makers, articles, comparison pages, and static content
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
npm run typecheck
npm run format:check
npm run lint
npm run test
```

If you want to request a new lens, open a GitHub issue with the lens name and, ideally, a patent or prescription source.
