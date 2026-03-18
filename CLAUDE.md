# CLAUDE.md — LensVisualizer

## Project Overview

Interactive web-based optical lens cross-section visualizer and ray-tracing tool. Renders 2D cross-sections of real camera lenses (from optical patents), with real-time ray tracing, focus/aperture adjustment, element inspection, and multiple themes.

## Tech Stack

- **React 18** (functional components, hooks)
- **Vite 6** (dev server + build)
- **JavaScript (ES6+ with JSX)** — no TypeScript
- **SVG rendering** — all visuals are inline SVG, no canvas
- **Inline styles** — no CSS files or UI libraries

## Project Structure

```
LensVisualizer/
├── index.html              # HTML entry point
├── main.jsx                # React root mount (wraps app in ErrorBoundary)
├── ErrorBoundary.jsx       # React class-based error boundary with retry UI
├── LensViewer-v4.jsx       # Main component (~770 lines): UI, optics engine, renderer
├── themes.js               # Theme system — 4 themes via createTheme() factory
├── lens-data/              # Optical prescription data (one file per lens)
│   ├── ApoLanthar50f2.data.js
│   ├── Nokton50f1.data.js
│   └── NikkorZ50mmf18S.js
├── ARCHITECTURE-REVIEW.md  # Refactoring plan and architectural notes
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies and scripts
```

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server (http://localhost:5173)
npm run build      # Production build → dist/
npm run preview    # Preview production build
```

There are no tests, linters, or formatters configured.

## Architecture

### LensViewer-v4.jsx — Section Layout

The main file is organized into numbered sections (`/* ═════ §N ════ */`):

1. **§1 LENS CATALOG** — Auto-registered from `./lens-data/*.js` via `import.meta.glob`
2. **§2 buildLens()** — Validates and constructs the runtime lens object `L`
3. **§4 RENDERING HELPERS** — Sag curves, thickness, layout math
4. **§5 OPTICS ENGINE** — Ray tracing, conjugate focus, refraction
5. **§6 RENDERER** — React component with full UI and SVG output

Note: §3 (themes) was extracted to `themes.js` — the section numbering in the file retains the original §4/§5/§6 labels.

### themes.js — Theme System

Four themes (dark, light, darkHC, lightHC) built via a `createTheme()` factory function. The factory takes a flat color-token object and generates closure-based properties (`elemFill`, `elemStroke`, `elemNum`, `grid`) to eliminate duplication across themes.

### ErrorBoundary.jsx

React class component wrapping the app. Catches render errors and shows a styled error message with a Retry button.

### Key Design Patterns

- **All helper functions accept lens object `L` as explicit parameter** — no module-level state
- **`useMemo`** for expensive computations (lens building, layout, ray traces)
- **`useCallback`** for event handlers and coordinate transforms
- **Pure functions** for all optical calculations (no side effects)
- **Inline styles only** — color palettes defined in theme objects

### Lens Data Format

Each file in `lens-data/` default-exports a `LENS_DATA` object with a `key` field:

```javascript
{
  key,                                       // Unique ID — used for auto-registration
  name, subtitle, specs,
  elements: [{ id, name, label, type, nd, vd, fl, glass, apd, role }],
  surfaces: [{ label, R, d, nd, elemId, sd }],
  asph: { "LABEL": { K, A4, A6, ... } },    // Aspherical coefficients
  var: { "LABEL": [min, max] },              // Variable surfaces (focus)
  groups, doublets,                          // Annotations
  svgW, svgH, maxRimAngleDeg,               // Rendering params
}
```

### Adding a New Lens

1. Create a new file in `lens-data/` that default-exports a `LENS_DATA` object
2. Include a unique `key` field in the data object
3. That's it — `import.meta.glob` auto-registers all `./lens-data/*.js` files

No manual imports or catalog edits required.

## Code Conventions

- **camelCase** for functions and variables (`buildLens`, `traceRay`, `focusT`)
- **Short math variables** in optics code: `y`, `u`, `n`, `R`, `K` (standard optics notation)
- **UPPER_CASE** for catalog-level constants
- **No comments on obvious code** — comments reserved for optics formulas and section headers
- **Monospace font stack** for UI: `'JetBrains Mono','SF Mono','Fira Code'`
- **Theme color tokens** prefixed with `_` are internal to the `createTheme()` factory (e.g., `_fillHighNd`, `_strokeOn`)

## Gotchas

- The entire app is one large component file — keep it that way unless explicitly refactoring
- Optical calculations use paraxial approximation (small-angle) — standard for patent data
- `buildLens()` performs validation; if lens data is malformed it throws descriptive errors
- Theme colors use semantic names (`rayWarm`, `rayCool`, `apdPatentBg`) — update all 4 themes when changing colors
- Section numbering in LensViewer-v4.jsx skips §3 (extracted to themes.js) — don't renumber
