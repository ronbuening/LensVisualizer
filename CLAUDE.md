# CLAUDE.md — LensVisualizer

## Project Overview

Interactive web-based optical lens cross-section visualizer and ray-tracing tool. Renders 2D cross-sections of real camera lenses (from optical patents), with real-time ray tracing, focus/aperture adjustment, element inspection, and multiple themes. Deployed to GitHub Pages.

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
├── index.html              # HTML entry point
├── main.jsx                # React root mount (wraps app in ErrorBoundary)
├── ErrorBoundary.jsx       # React class-based error boundary with retry UI
├── LensViewer-v4.jsx       # Main component (~819 lines): UI chrome, state, SVG renderer
├── buildLens.js            # Lens builder — validates data, computes EFL/pupil/field
├── optics.js               # Optics engine — ray tracing, sag curves, layout math
├── validateLensData.js     # Schema validation for lens data files
├── themes.js               # Theme system — 4 themes via createTheme() factory
├── featureFlags.js         # Feature flags — controls feature availability and defaults
├── AboutMe.md              # Author bio (rendered in About: Author overlay)
├── AboutSite.md            # Site description (rendered in About: Site overlay)
├── lens-data/              # Optical prescription data (one file per lens)
│   ├── defaults.js         # Shared defaults (ray config, SVG sizing, control steps)
│   ├── LENS_DATA_SPEC.md   # Full lens data format specification
│   ├── TEMPLATE.data.js.template  # Annotated template for new lens files
│   ├── ApoLanthar50f2.data.js
│   ├── ApoLanthar50f2.analysis.md
│   ├── Nikkor105f14E.data.js
│   ├── Nikkor105f14E.analysis.md
│   ├── Nokton50f1.data.js
│   ├── Nokton50f1.analysis.md
│   ├── NikkorZ50mmf18S.data.js
│   └── NikkorZ50mmf18S.analysis.md
├── __tests__/              # Vitest unit tests
│   ├── buildLens.test.js   # Paraxial trace, EFL, entrance pupil tests
│   ├── optics.test.js      # Sag, ray trace, layout tests
│   └── validateLensData.test.js  # Schema validation tests
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions — builds and deploys to GitHub Pages
├── ARCHITECTURE-REVIEW.md  # Refactoring plan and architectural notes
├── PLAN-description-panel-and-deploy.md  # Description panel implementation plan
├── vite.config.js          # Vite config (base: '/LensVisualizer/' for GH Pages)
└── package.json            # Dependencies and scripts
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
- Base path set to `/LensVisualizer/` in `vite.config.js`

## Architecture

### Module Organization

The codebase follows a layered extraction pattern. Core logic has been extracted from the original monolithic component into pure-function modules:

| Module | Lines | Purpose |
|--------|-------|---------|
| `LensViewer-v4.jsx` | ~819 | UI component: state, SVG rendering, interaction |
| `buildLens.js` | ~176 | Lens construction, EFL/pupil/field computation |
| `optics.js` | ~221 | Ray tracing, sag curves, chromatic tracing, layout geometry |
| `validateLensData.js` | ~193 | Schema validation for lens data |
| `themes.js` | ~251 | Theme factory and 4 theme definitions |
| `featureFlags.js` | ~10 | Feature flags for UI toggles |
| `lens-data/defaults.js` | ~31 | Shared lens defaults merged into each lens |

### LensViewer-v4.jsx — Section Layout

The main file retains numbered section headers (`/* ═════ §N ════ */`):

1. **§1 LENS CATALOG** — Auto-registered from `./lens-data/*.data.js` via `import.meta.glob`; also loads matching `.analysis.md` files via a second glob
2. **§6 RENDERER** — `useMediaQuery` hook, `DescriptionPanel` sub-component (ReactMarkdown with themed styles), and the main `LensVisualization` component with full UI and SVG output

Note: §2 (`buildLens`) was extracted to `buildLens.js`, §3 (themes) to `themes.js`, §4–§5 (optics/rendering helpers) to `optics.js`. Section numbering is preserved — don't renumber.

### buildLens.js

Exports:
- **`buildLens(data)`** — Validates lens data, constructs frozen runtime lens object `L` with computed EFL, entrance pupil, half-field angle, and layout geometry
- **`paraxialTrace(surfaces, y0, u0, options)`** — Low-level paraxial ray trace (exported for testing)

Merges `LENS_DEFAULTS` from `lens-data/defaults.js` into each lens before processing.

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

Pure validation function that checks all required fields, surface label uniqueness, element ID references, asph/var/group/doublet references, STO surface presence, element edge thickness (surface crossing detection), element SD consistency, and surface sd/|R| ratio (≤ 0.90). Returns an array of error strings (empty = valid).

### themes.js — Theme System

Four themes (dark, light, darkHC, lightHC) built via a `createTheme()` factory function. The factory takes a flat color-token object and generates closure-based properties (`elemFill`, `elemStroke`, `elemNum`, `grid`) to eliminate duplication across themes.

### featureFlags.js

Feature flags controlling UI toggle visibility and defaults:
- **`ENABLE_COLOR_TRACING`** — whether the color-tracing UI toggle appears
- **`DEFAULT_COLOR_TRACING`** — initial state when no localStorage entry exists

### ErrorBoundary.jsx

React class component wrapping the app. Catches render errors and shows a styled error message with a Retry button.

### Lens Data Files

Each lens has two files in `lens-data/`:
- **`.data.js`** — Default-exports a `LENS_DATA` object (see format below)
- **`.analysis.md`** — Markdown design analysis, rendered in the app's description panel

Supporting files in `lens-data/`:
- **`defaults.js`** — Shared defaults (`rayFractions`, `rayLeadFrac`, `lensShiftFrac`, `offAxisFieldFrac`, `offAxisFractions`, `svgW`, `svgH`, `clipMargin`, `maxRimAngleDeg`, `gapSagFrac`, `focusStep`, `apertureStep`, `maxFstop`) merged into each lens via `buildLens()`
- **`LENS_DATA_SPEC.md`** — Complete specification for all lens data fields, types, and validation rules
- **`TEMPLATE.data.js.template`** — Annotated template with inline documentation for creating new lens files

### Key Design Patterns

- **All helper functions accept lens object `L` as explicit parameter** — no module-level state
- **`useMemo`** for expensive computations (lens building, layout, ray traces)
- **`useCallback`** for event handlers and coordinate transforms
- **Pure functions** for all optical calculations (no side effects)
- **Inline styles only** — color palettes defined in theme objects
- **Responsive layout** — desktop: side-by-side diagram/analysis; mobile (<900px): tab toggle

### Lens Data Format

Each `.data.js` file in `lens-data/` default-exports a `LENS_DATA` object with a `key` field:

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
4. **Cemented doublets**: Junction surfaces must have matching SDs — the bonded surfaces share a physical clear aperture.
5. **Smooth progression**: SDs should decrease smoothly toward the aperture stop and increase smoothly after it.
6. **Off-axis containment**: After estimating SDs from on-axis marginal rays, verify that off-axis ray bundles clip at element edges or air gaps — never inside cemented groups. Thick elements amplify off-axis beam divergence and may need tighter upstream SDs.

See `lens-data/TEMPLATE.data.js.template` for detailed documentation and examples.

### Adding a New Lens

1. Copy `lens-data/TEMPLATE.data.js.template` to `lens-data/YourLens.data.js`
2. Fill in the lens data following the template's field documentation
3. Optionally add `lens-data/YourLens.analysis.md` for the description panel
4. Run `npm run test` to verify the data passes all validation checks (including edge thickness and SD consistency)
5. That's it — `import.meta.glob` auto-registers all `./lens-data/*.data.js` files

No manual imports or catalog edits required. Shared defaults from `lens-data/defaults.js` are merged automatically — only override values that differ from defaults.

## Testing

Tests use **Vitest** and live in `__tests__/`:

- **`buildLens.test.js`** — Tests `paraxialTrace()` with flat/refractive surfaces; validates `buildLens()` output (EFL, entrance pupil, half-field) against all four production lenses
- **`optics.test.js`** — Tests `sag()`, `renderSag()` with aspherical coefficients; `conjugateK()`, `formatDist()`; `doLayout()` with variable surfaces
- **`validateLensData.test.js`** — Tests schema validation against production lenses; verifies error reporting for missing fields, duplicate labels, invalid references

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
- Section numbering in LensViewer-v4.jsx skips §2–§5 (extracted to separate modules) — don't renumber
- `vite.config.js` sets `base: '/LensVisualizer/'` — required for GitHub Pages; local dev is unaffected
- Lens data globs match `*.data.js`; analysis globs match `*.analysis.md` — naming convention matters for auto-registration
- `lens-data/defaults.js` values are merged under each lens — per-lens values in `.data.js` take precedence
