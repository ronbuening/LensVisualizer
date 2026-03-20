# CLAUDE.md — LensVisualizer

## Project Overview

Interactive web-based optical lens cross-section visualizer and ray-tracing tool. Renders 2D cross-sections of real camera lenses (from optical patents), with real-time ray tracing, focus/aperture adjustment, element inspection, lens comparison, and multiple themes. Deployed to GitHub Pages.

## Tech Stack

- **React 18** (functional components, hooks)
- **Vite 6** (dev server + build)
- **Vitest 4** (unit testing)
- **JavaScript (ES6+ with JSX)** — no TypeScript
- **SVG rendering** — all visuals are inline SVG, no canvas
- **Inline styles** — no CSS files or UI libraries
- **react-markdown + remark-gfm** — renders lens analysis documents in-app

## Project Structure

```
LensVisualizer/
├── index.html                          # HTML entry point (loads src/main.jsx)
├── vite.config.js                      # Vite config (base: '/' for dev)
├── package.json                        # Dependencies and scripts
├── CLAUDE.md                           # This file
├── README.md                           # Project readme
├── public/
│   └── CNAME                           # GitHub Pages custom domain
├── .github/workflows/
│   └── deploy.yml                      # GitHub Actions → GitHub Pages
├── src/
│   ├── main.jsx                        # React root mount (ErrorBoundary wrapper)
│   ├── components/
│   │   ├── LensViewer.jsx              # Orchestration: top bar, comparison, overlays, prefs
│   │   ├── LensDiagramPanel.jsx        # Self-contained diagram: SVG, rays, elements, controls
│   │   ├── DescriptionPanel.jsx        # Markdown renderer with theme-aware styling
│   │   ├── SharedSlidersBar.jsx        # Unified focus/aperture controls for comparison mode
│   │   └── ErrorBoundary.jsx           # Error boundary + reusable ErrorDisplay component
│   ├── optics/
│   │   ├── optics.js                   # Ray tracing, sag curves, layout math, chromatic
│   │   ├── buildLens.js                # Lens construction, EFL/pupil/field computation
│   │   └── validateLensData.js         # Schema validation for lens data files
│   ├── utils/
│   │   ├── themes.js                   # 4 themes via createTheme() factory
│   │   ├── featureFlags.js             # Feature flag controls
│   │   ├── lensCatalog.js              # Auto-registers lens data via import.meta.glob
│   │   ├── comparisonSliders.js        # Comparison mode slider math
│   │   ├── parseComparisonParams.js    # URL parameter parsing (?a=&b=, ?lens=)
│   │   ├── errorReporting.js           # GitHub issue URL builder
│   │   ├── useMediaQuery.js            # Responsive breakpoint hook
│   │   └── preferences.js             # localStorage persistence
│   ├── content/
│   │   ├── AboutMe.md                  # Author bio (rendered in overlay)
│   │   └── AboutSite.md               # Site description (rendered in overlay)
│   └── lens-data/                      # Optical prescription data (one file per lens)
│       ├── defaults.js                 # Shared defaults (ray config, SVG sizing, control steps)
│       ├── LENS_DATA_SPEC.md           # Full lens data format specification
│       ├── TEMPLATE.data.js.template   # Annotated template for new lens files
│       └── *.data.js + *.analysis.md   # 10 lens prescriptions + analyses
├── __tests__/                          # Vitest unit tests
│   ├── buildLens.test.js               # Paraxial trace, EFL, entrance pupil tests
│   ├── optics.test.js                  # Sag, ray trace, layout tests
│   ├── validateLensData.test.js        # Schema validation tests
│   ├── lensCatalog.test.js             # Catalog loading tests
│   ├── comparisonSliders.test.js       # Comparison slider math tests
│   └── parseComparisonParams.test.js   # URL parameter parsing tests
```

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server (http://localhost:5173)
npm run build      # Production build → dist/
npm run preview    # Preview production build
npm run test       # Run Vitest unit tests
```

No linters or formatters are configured.

## Deployment

- **GitHub Pages** via GitHub Actions (`.github/workflows/deploy.yml`)
- Triggers on push to `main` or manual dispatch
- Builds with `npm ci && npm run build`, deploys `dist/` to Pages
- Base path set to `/` in `vite.config.js` (GitHub Actions deploy handles the Pages base path)

## Architecture

### Module Organization

```
src/components/     — React UI components
src/optics/         — Pure-function optical engine (no React dependencies)
src/utils/          — Shared utilities, hooks, and configuration
src/content/        — Static markdown content
src/lens-data/      — Lens prescription data files
```

| Module | Location | Purpose |
|--------|----------|---------|
| `LensViewer.jsx` | `src/components/` | Orchestration: comparison mode, top bar, overlays, prefs |
| `LensDiagramPanel.jsx` | `src/components/` | Diagram rendering: SVG, rays, elements, controls |
| `DescriptionPanel.jsx` | `src/components/` | Markdown panel with themed styling |
| `SharedSlidersBar.jsx` | `src/components/` | Comparison mode shared focus/aperture controls |
| `ErrorBoundary.jsx` | `src/components/` | Error boundary + reusable ErrorDisplay |
| `optics.js` | `src/optics/` | Ray tracing, sag curves, chromatic, layout geometry |
| `buildLens.js` | `src/optics/` | Lens construction, EFL/pupil/field computation |
| `validateLensData.js` | `src/optics/` | Schema validation for lens data |
| `themes.js` | `src/utils/` | Theme factory + 4 theme definitions |
| `lensCatalog.js` | `src/utils/` | Auto-registration of lens data via import.meta.glob |
| `comparisonSliders.js` | `src/utils/` | Shared slider math for comparison mode |
| `parseComparisonParams.js` | `src/utils/` | URL deep-link parsing |
| `featureFlags.js` | `src/utils/` | Feature flag controls |
| `errorReporting.js` | `src/utils/` | GitHub issue URL builder |
| `useMediaQuery.js` | `src/utils/` | Responsive breakpoint hook |
| `preferences.js` | `src/utils/` | localStorage load/save |

### LensViewer.jsx — Orchestration Layer

The main component handles:
- Lens selection (single + comparison mode)
- Theme switching (dark/light × normal/high-contrast)
- Ray toggle controls (on-axis, off-axis, chromatic)
- Comparison mode: side-by-side (desktop) / stacked (mobile)
- URL deep links (`?a=&b=` for comparison, `?lens=` for single)
- Desktop view toggle (diagram / both / analysis)
- Mobile view toggle (diagram / analysis)
- About overlays (site + author)
- localStorage preference persistence

Diagram rendering is delegated to `LensDiagramPanel`.

### LensDiagramPanel.jsx — Diagram Renderer

Self-contained component that owns:
- Lens building (`buildLens()` call)
- Layout computation (`doLayout()`)
- Coordinate transforms (SVG ↔ optical space)
- Ray tracing (on-axis, off-axis, chromatic)
- Element rendering (filled SVG paths with hover/click)
- Control panel (focus/aperture sliders, element inspector, legend)
- Panel-level error boundary

Receives shared control state (focus, aperture, ray toggles) from LensViewer.

### buildLens.js

Exports:
- **`buildLens(data)`** — Validates lens data, constructs frozen runtime lens object `L` with computed EFL, entrance pupil, half-field angle, and layout geometry
- **`paraxialTrace(surfaces, y0, u0, options)`** — Low-level paraxial ray trace (exported for testing)

### optics.js

Pure functions for optical calculations and SVG layout:
- **Sag curves:** `sag()`, `renderSag()`, `sagSlope()`
- **Layout:** `doLayout()`, `gapTrimHeight()`, `thick()`
- **Ray tracing:** `traceRay()`, `traceToImage()`
- **Chromatic tracing:** `wavelengthNd()`, `traceRayChromatic()`, `computeChromaticSpread()`
- **Utilities:** `conjugateK()`, `formatDist()`
- **Constants:** `FLAT_R_THRESHOLD`, `FOCUS_INFINITY_THRESHOLD`, `SVG_PATH_SUBDIVISIONS`

No React dependencies — fully testable in isolation.

### validateLensData.js

Pure validation function that checks all required fields, surface label uniqueness, element ID references, asph/var/group/doublet references, STO surface presence, element edge thickness (surface crossing detection), element SD consistency, surface sd/|R| ratio (≤ 0.90), cross-gap surface overlap, and conic height limits (K > 0). Returns an array of error strings (empty = valid).

### themes.js — Theme System

Four themes (dark, light, darkHC, lightHC) built via a `createTheme()` factory function. The factory takes a flat color-token object and generates closure-based properties (`elemFill`, `elemStroke`, `elemNum`, `grid`) to eliminate duplication across themes.

### featureFlags.js

Feature flags controlling UI toggle visibility and defaults:
- **`ENABLE_COLOR_TRACING`** — whether the color-tracing UI toggle appears
- **`DEFAULT_COLOR_TRACING`** — initial state when no localStorage entry exists
- **`ENABLE_DESKTOP_VIEW_TOGGLE`** — whether the diagram/analysis/both view toggle appears on desktop
- **`ENABLE_DIAGRAM_ONLY`** — whether "diagram only" view mode is available
- **`ENABLE_ANALYSIS_ONLY`** — whether "analysis only" view mode is available
- **`ENABLE_COMPARISON`** — whether lens comparison mode is available
- **`ENABLE_COMPARISON_MOBILE`** — whether comparison mode is available on mobile

### ErrorBoundary.jsx

Exports:
- **`ErrorBoundary`** (default) — React class component wrapping the app, catches render errors
- **`ErrorDisplay`** (named) — Reusable error UI with retry button and GitHub issue link

### Lens Data Files

Each lens has two files in `src/lens-data/`:
- **`.data.js`** — Default-exports a `LENS_DATA` object (see format below)
- **`.analysis.md`** — Markdown design analysis, rendered in the app's description panel

Supporting files in `src/lens-data/`:
- **`defaults.js`** — Shared defaults merged into each lens via `lensCatalog.js`
- **`LENS_DATA_SPEC.md`** — Complete specification for all lens data fields, types, and validation rules
- **`TEMPLATE.data.js.template`** — Annotated template with inline documentation for creating new lens files

### Key Design Patterns

- **All helper functions accept lens object `L` as explicit parameter** — no module-level state
- **`useMemo`** for expensive computations (lens building, layout, ray traces)
- **`useCallback`** for event handlers and coordinate transforms
- **Pure functions** for all optical calculations (no side effects)
- **Inline styles only** — color palettes defined in theme objects
- **Responsive layout** — desktop: side-by-side diagram/analysis; mobile (<900px): tab toggle
- **Auto-registration** — lens data files discovered via `import.meta.glob`

### Lens Data Format

Each `.data.js` file in `src/lens-data/` default-exports a `LENS_DATA` object with a `key` field:

```javascript
{
  key,                                       // Unique ID — used for auto-registration
  visible,                                   // Optional: false hides from UI (default: true)
  name, subtitle, specs,
  nominalFno, closeFocusM,                   // Required: f-number and close focus
  fstopSeries,                               // Required: f-stop quick-select values
  elements: [{ id, name, label, type, nd, vd, fl, glass, apd, role, cemented }],
  surfaces: [{ label, R, d, nd, elemId, sd }],
  asph: { "LABEL": { K, A4, A6, ... } },    // Aspherical coefficients
  var: { "LABEL": [d_inf, d_close] },        // Variable surfaces (focus)
  varLabels: [["LABEL", "display"]],         // Display labels for variable gaps
  groups, doublets,                          // Annotations
  scFill, yScFill,                           // Required: layout fill fractions
  svgW, svgH, maxRimAngleDeg,               // Rendering params (override defaults)
}
```

### Semi-Diameter Guidelines

Surface `sd` values are the most common source of rendering bugs. The validator enforces these constraints automatically:

1. **Edge thickness**: For each element, `sag(sd, R_front) − sag(sd, R_rear)` must be less than center thickness `d`. Violation produces a bowtie-shaped element where surfaces cross at the rim.
2. **SD consistency**: Front and rear surfaces of each element must have SDs within 25% of each other (ratio ≤ 1.25). Larger differences cause rays to appear outside the rendered element.
3. **sd/|R| ratio**: Surface sd must not exceed 0.90 × |R|. As sd approaches |R|, the surface slope at the rim becomes extreme, causing total internal reflection (TIR) at glass-air boundaries and rendering artifacts.
4. **Cross-gap overlap**: For each air gap, the validator checks that the combined sag intrusion from adjacent surfaces does not exceed the gap thickness. The renderer goes further: when deciding whether to trim an element's rim, it computes the **effective clearance** at each gap by accounting for the neighboring element's surface sag. A rear surface curving forward into a gap has more clearance if the next element's front surface also curves forward (away from the gap), and less if it curves backward (into the gap). The symmetric logic applies to front surfaces curving backward. This prevents both false trims (over-aggressive clipping on fast lenses) and missed trims (visual overlap when both adjacent surfaces intrude into the gap).
5. **Conic height limit**: For aspherical surfaces with K > 0, sd must not exceed 0.98 × |R| / √(1+K). Beyond this height the conic sag discriminant goes negative, producing a sag curve discontinuity.
6. **Cemented doublets**: Junction surfaces must have matching SDs — the bonded surfaces share a physical clear aperture.
7. **Smooth progression**: SDs should decrease smoothly toward the aperture stop and increase smoothly after it.
8. **Off-axis containment**: After estimating SDs from on-axis marginal rays, verify that off-axis ray bundles clip at element edges or air gaps — never inside cemented groups. Thick elements amplify off-axis beam divergence and may need tighter upstream SDs.

See `src/lens-data/TEMPLATE.data.js.template` for detailed documentation and examples.

### Adding a New Lens

1. Copy `src/lens-data/TEMPLATE.data.js.template` to `src/lens-data/YourLens.data.js`
2. Fill in the lens data following the template's field documentation
3. Optionally add `src/lens-data/YourLens.analysis.md` for the description panel
4. Run `npm run test` to verify the data passes all validation checks (including edge thickness, SD consistency, cross-gap overlap, and conic height limits)
5. That's it — `import.meta.glob` auto-registers all `src/lens-data/*.data.js` files

No manual imports or catalog edits required. Shared defaults from `src/lens-data/defaults.js` are merged automatically — only override values that differ from defaults.

## Testing

Tests use **Vitest** and live in `__tests__/`:

- **`buildLens.test.js`** — Tests `paraxialTrace()` with flat/refractive surfaces; validates `buildLens()` output (EFL, entrance pupil, half-field) against production lenses
- **`optics.test.js`** — Tests `sag()`, `renderSag()` with aspherical coefficients; `conjugateK()`, `formatDist()`; `doLayout()` with variable surfaces
- **`validateLensData.test.js`** — Tests schema validation against production lenses; verifies error reporting for missing fields, duplicate labels, invalid references
- **`lensCatalog.test.js`** — Tests catalog auto-registration, key filtering, and `mdForKey()` lookup
- **`comparisonSliders.test.js`** — Tests focus/aperture pair computation, common points, clamping
- **`parseComparisonParams.test.js`** — Tests URL parameter parsing and deep-link generation

Run with `npm run test`. Tests cover the extracted pure-function modules; the React UI layer is not unit-tested.

## Code Conventions

- **camelCase** for functions and variables (`buildLens`, `traceRay`, `focusT`)
- **Short math variables** in optics code: `y`, `u`, `n`, `R`, `K` (standard optics notation)
- **UPPER_CASE** for catalog-level constants and exported constants
- **No comments on obvious code** — comments reserved for optics formulas and section headers
- **Monospace font stack** for UI: `'JetBrains Mono','SF Mono','Fira Code'`
- **Theme color tokens** prefixed with `_` are internal to the `createTheme()` factory (e.g., `_fillHighNd`, `_strokeOn`)
- **Pure-function modules** (`optics.js`, `buildLens.js`, `validateLensData.js`) have no React dependencies

## Gotchas

- Optical calculations use paraxial approximation (small-angle) — standard for patent data
- `buildLens()` calls `validateLensData()` internally; malformed data throws descriptive errors with all issues listed
- Theme colors use semantic names (`rayWarm`, `rayCool`, `apdPatentBg`) — update all 4 themes when changing colors
- `vite.config.js` sets `base: '/'` — GitHub Actions deploy workflow handles the Pages base path
- Lens data globs match `*.data.js`; analysis globs match `*.analysis.md` — naming convention matters for auto-registration
- `src/lens-data/defaults.js` values are merged under each lens — per-lens values in `.data.js` take precedence
- Glob paths in `lensCatalog.js` are relative to the file's location (`../lens-data/`)
