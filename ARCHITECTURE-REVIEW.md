# Architecture Review & Refactoring Plan — LensVisualizer

## Context

The LensVisualizer is a 981-line single-file React app that renders interactive optical lens cross-sections with ray tracing. It currently has 3 lens implementations. As more lenses are added, several architectural friction points compound: manual registration steps, duplicated boilerplate in data files, duplicated tracing logic, and a 222-line theme system that's 80% copy-paste. This plan prioritizes refactorings by urgency (how much pain they cause as lenses scale) and ease of implementation.

---

## Tier 1: Do First (high urgency or easy wins)

### 1.1 Theme Deduplication
**Urgency: High | Ease: Easy | ~222 lines -> ~80 lines**

The 4 themes (dark, light, darkHC, lightHC) in `LensViewer-v4.jsx:260-481` share ~80% identical structure. The closure functions (`elemFill`, `elemStroke`, `grid`) have identical branching logic — only color values differ.

**Approach:**
- Create `themes.js` with a `createTheme(colorTokens)` factory
- Define a `BASE_THEME` with shared structure and parameterized closures
- Each theme becomes a one-liner: `createTheme({ bg: '...', rayWarm: '...', ... })`
- Import `T` in `LensViewer-v4.jsx`

**Saves ~140 lines, eliminates 4-way edit requirement for theme changes.**

---

### 1.2 Lens Data Defaults + Auto-Registration
**Urgency: High | Ease: Easy | Biggest DX win for adding lenses**

Currently adding a lens requires 3 steps (create file, add import, add catalog entry). Plus 9 fields are copy-pasted verbatim across all data files (`rayFractions`, `svgW`, `svgH`, `clipMargin`, etc.).

**Part A — Defaults:** Create `lens-data/defaults.js` exporting shared values. Merge in `buildLens()`: `const data = { ...LENS_DEFAULTS, ...rawData }`. Lens files only declare what differs.

**Part B — Auto-registration:** Use Vite's `import.meta.glob`:
```javascript
const modules = import.meta.glob('./lens-data/*.js', { eager: true });
// auto-build LENS_CATALOG, skip defaults.js
```
Adding a lens becomes: create the data file. Done.

---

### 1.3 Paraxial Trace Loop Deduplication
**Urgency: High | Ease: Medium | Correctness risk**

There are **6** near-identical paraxial trace loops in `buildLens()` (lines 111-196) plus 2 more in the optics engine (lines 540-574). The core refraction step is always:
```javascript
if (Math.abs(R) < 1e10 && nn !== n) u = (n * u - y * (nn - n) / R) / nn;
n = nn; y += d * u;
```

**Approach:** Extract a single `paraxialTrace(surfaces, y0, u0, options)` function accepting `{ stopAt, recordHeights, thickFn }`. The 6 loops in `buildLens` become parameterized calls. `traceRay`/`traceToImage` in the engine share the refraction step via an inline helper but keep their SVG/clipping logic separate.

---

### 1.4 Error Boundary
**Urgency: High | Ease: Easy | ~30 lines**

Malformed lens data crashes the entire app — `buildLens()` throws inside `useMemo` with no catch. React unmounts everything.

**Approach:** Create `ErrorBoundary.jsx` (class component, React requirement). Wrap `<LensVisualization />` in `main.jsx`. Display error message + "try another lens" recovery button.

---

## Tier 2: Do Next (medium urgency, good payoff)

### 2.1 Extract Optics Engine to `optics.js`
**Ease: Medium | Impact: Testability**

Functions from sections 4-5 (`sag`, `renderSag`, `gapTrimHeight`, `thick`, `doLayout`, `traceRay`, `traceToImage`, `conjugateK`, `formatDist`) are pure functions with zero React dependencies. They already accept `L` as an explicit parameter — this is a mechanical move.

### 2.2 Extract `buildLens()` to `buildLens.js`
**Ease: Medium | Impact: Readability**

After trace deduplication (1.3), `buildLens` shrinks from ~198 to ~120 lines. Move to its own module. No React dependencies.

### 2.3 Add Unit Tests for Optics Engine
**Ease: Medium | Impact: Confidence in refactoring**

Add Vitest (`npm install -D vitest`, zero-config with Vite). Key test cases:
- `sag(0, R) === 0`, `sag(h, Infinity) === 0`
- `traceToImage` with single flat surface returns expected y
- `buildLens` throws on duplicate labels / missing STO
- EFL matches known prescription values

### 2.4 Lens Data Validation Schema
**Ease: Medium | Impact: Error messages for lens authors**

Add `validateLensData(data)` in `buildLens.js` — hand-written (no library). Check required fields exist and have correct types, exactly one STO surface, `var`/`asph` keys reference real labels. Run before any processing, throw with all issues at once.

### 2.5 Named Constants for Magic Numbers
**Ease: Easy | Impact: Readability**

Replace scattered literals: `1e10` -> `FLAT_R_THRESHOLD`, `30` -> `BISECT_ITERATIONS`, `48` -> `SVG_PATH_SUBDIVISIONS`, `0.003` -> `FOCUS_INFINITY_THRESHOLD`.

---

## Tier 3: Do When Time Permits

### 3.1 Split Renderer into Sub-Components
**Ease: Hard | Impact: Readability at scale**

Extract `LensHeader`, `LensSVG`, `LensControls` from the 381-line renderer. All state stays in parent, passed via props. Not urgent — the current JSX is well-sectioned with comments.

### 3.2 Responsive/Mobile Layout
**Ease: Hard | Impact: Accessibility**

Fixed 1080px SVG width doesn't work on mobile. Add viewport-aware layout. Low priority — this is a desktop tool for optical engineers.

### 3.3 URL-Based Lens Selection
**Ease: Easy | Impact: Shareability**

Encode `lensKey` in URL hash. ~15 lines with `useEffect`. No router needed.

---

## Implementation Order (respecting dependencies)

| Step | Item | Depends On |
|------|------|------------|
| 1 | 1.4 Error Boundary | — |
| 2 | 1.1 Theme Deduplication | — |
| 3 | 1.2 Lens Data Defaults + Auto-Registration | — |
| 4 | 1.3 Paraxial Trace Deduplication | — |
| 5 | 2.1 Extract Optics Engine | 1.3 |
| 6 | 2.2 Extract buildLens | 1.3 |
| 7 | 2.5 Named Constants | — |
| 8 | 2.3 Unit Tests | 2.1 |
| 9 | 2.4 Validation Schema | 2.2 |

## Resulting File Structure

```
LensVisualizer/
  LensViewer-v4.jsx       (~390 lines — renderer only)
  buildLens.js             (~120 lines)
  optics.js                (~100 lines)
  themes.js                (~80 lines)
  ErrorBoundary.jsx        (~30 lines)
  lens-data/
    defaults.js            (~20 lines)
    ApoLanthar50f2.data.js (shorter — no repeated defaults)
    Nokton50f1.data.js
    NikkorZ50mmf18S.js
  __tests__/
    optics.test.js
    buildLens.test.js
```

Total: ~720 lines across well-separated modules (down from 981 monolithic). Zero new runtime dependencies. Vitest as sole new devDependency.

## Verification

After each tier, verify:
- `npm run dev` — app loads, all 3 lenses render correctly
- Switch lenses, adjust focus/aperture, toggle rays, hover elements — all interactive features work
- Toggle all 4 themes — colors and element fills render correctly
- After Tier 2.3: `npm test` passes all optics/buildLens tests
- After 1.2: add a test lens data file to `lens-data/` and confirm it appears in the dropdown without any import/catalog edits

## Critical Files

- `LensViewer-v4.jsx` — all extractions come from here
- `lens-data/ApoLanthar50f2.data.js` — reference for defaults extraction
- `lens-data/NikkorZ50mmf18S.js` — most complex lens (26 surfaces); stress-tests validation
- `main.jsx` — ErrorBoundary wrapper goes here
- `vite.config.js` — may need Vitest config
