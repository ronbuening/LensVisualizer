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
├── main.jsx                # React root mount
├── LensViewer-v4.jsx       # Main component (~1000 lines): UI, optics engine, themes
├── lens-data/              # Optical prescription data (one file per lens)
│   ├── ApoLanthar50f2.data.js
│   ├── Nokton50f1.data.js
│   └── NikkorZ50mmf18S.js
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

1. **§1 LENS CATALOG** — Registry mapping lens IDs to their data modules
2. **§2 buildLens()** — Validates and constructs the runtime lens object `L`
3. **§3 THEME PALETTES** — 4 themes: dark, light, darkHC, lightHC
4. **§4 RENDERING HELPERS** — Sag curves, thickness, layout math
5. **§5 OPTICS ENGINE** — Ray tracing, conjugate focus, refraction
6. **§6 RENDERER** — React component with full UI and SVG output

### Key Design Patterns

- **All helper functions accept lens object `L` as explicit parameter** — no module-level state
- **`useMemo`** for expensive computations (lens building, layout, ray traces)
- **`useCallback`** for event handlers and coordinate transforms
- **Pure functions** for all optical calculations (no side effects)
- **Inline styles only** — color palettes defined in theme objects

### Lens Data Format

Each file in `lens-data/` exports a `LENS_DATA` object:

```javascript
{
  name, subtitle, specs,
  elements: [{ id, name, label, type, nd, vd, fl, glass, apd, role }],
  surfaces: [{ label, R, d, nd, elemId, sd }],
  asph: { "LABEL": { K, A4, A6, ... } },   // Aspherical coefficients
  var: { "LABEL": [min, max] },              // Variable surfaces (focus)
  groups, doublets,                           // Annotations
  svgW, svgH, maxRimAngleDeg,                // Rendering params
}
```

### Adding a New Lens

1. Create a new file in `lens-data/` exporting `LENS_DATA`
2. Import it in `LensViewer-v4.jsx` at the top
3. Add an entry to the `CATALOG` object in §1

## Code Conventions

- **camelCase** for functions and variables (`buildLens`, `traceRay`, `focusT`)
- **Short math variables** in optics code: `y`, `u`, `n`, `R`, `K` (standard optics notation)
- **UPPER_CASE** for catalog-level constants
- **No comments on obvious code** — comments reserved for optics formulas and section headers
- **Monospace font stack** for UI: `'JetBrains Mono','SF Mono','Fira Code'`

## Gotchas

- The entire app is one large component file — keep it that way unless explicitly refactoring
- Optical calculations use paraxial approximation (small-angle) — standard for patent data
- `buildLens()` performs validation; if lens data is malformed it throws descriptive errors
- Theme colors use semantic names (`rayWarm`, `rayCool`, `apdPatentBg`) — update all 4 themes when changing colors
