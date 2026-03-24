# Commenting Guide — LensVisualizer

> **Prescriptive** — all new and modified code must follow these standards.

## Philosophy

**Comment the WHY, not the WHAT.** Every comment should add information that
the code alone cannot convey: intent, domain knowledge, architectural decisions,
non-obvious constraints, or mathematical derivations. Never restate what the
code already says.

---

## Comment Types

### 1. Module Header

Every file starts with a `/** ... */` block. State the module's **purpose**,
**scope**, and **relationship to other modules**.

```ts
/**
 * SharedSlidersBar — unified focus/aperture/zoom controls for comparison mode.
 *
 * Renders a horizontal bar of shared sliders when two lenses are being
 * compared. Slider values are mapped to per-lens values by the pure
 * functions in comparisonSliders.ts; this component only handles UI.
 */
```

For large orchestration files (>500 lines), use the ASCII box-art header
already established in `LensViewer.tsx`.

### 2. Section Header (light)

Use `/* ── Label ── */` to mark logical groupings inside a file: hook blocks,
render helpers, SVG sub-sections, etc.

```js
/* ── Flash overlay animation — two-phase: appear bright, then fade out ── */
```

Keep the label short and descriptive. One blank line before, zero or one after.

### 3. Major Section Header (heavy)

Reserve `/* === §N TITLE === */` for top-level architecture divisions in files
longer than ~300 lines. Number sections sequentially.

```js
/* =====================================================================
 * §5  OPTICS ENGINE — Ray-trace and conjugate functions
 * ===================================================================== */
```

### 4. Function JSDoc

All **exported** and **public** functions get a JSDoc block with `@param` and
`@returns`. TypeScript provides the type annotations — JSDoc documents the
**semantics** (units, valid ranges, domain meaning).

```ts
/**
 * Compute the sag (axial displacement) of a spherical surface at height h.
 *
 * Uses the standard sag formula: z = c·h² / (1 + √(1 − c²·h²))
 * where c = 1/R. Returns 0 for flat surfaces (|R| > FLAT_R_THRESHOLD).
 *
 * @param h  — ray height (mm)
 * @param R  — radius of curvature (mm, signed)
 * @returns    sag in mm (positive = toward image)
 */
export function sag(h: number, R: number): number { ... }
```

For React components, define a **Props interface** at the top of the file.
JSDoc on the component function is optional since the interface is self-documenting:

```ts
interface DiagramControlsProps {
  L: RuntimeLens;
  t: Theme;
  focusT: number;      // [0 = ∞, 1 = close focus]
  zoomT: number;       // [0 = wide, 1 = tele]
  stopdownT: number;   // [0 = wide open, 1 = max]
  dispatch: Dispatch<LensAction>;
  // ...
}
```

Internal helper functions (not exported) need JSDoc only when their
purpose or parameters are non-obvious.

### 5. Inline Comment

Use `/* ... */` (block) or `// ...` (line) for:

- **Optics formulas** — always name the formula or cite the derivation
- **Non-obvious logic** — explain WHY, not what
- **Domain knowledge** — optics terms, SVG coordinate assumptions, browser quirks
- **Magic numbers** — explain what the value represents

```js
/* Snell's law at surface i: n·sin(θ) = n'·sin(θ')
   paraxial form: n·u = n'·u'  →  u' = (n·u − y·(n'−n)/R) / n' */
const uPrime = (n * u - y * (nPrime - n) / R) / nPrime;
```

```js
/* 5000× clamp prevents pixel overflow when chromatic spread is sub-micron */
const mag = Math.min(maxPixelSpan / (maxOff * effectiveSC), 5000);
```

### 6. TODO / FIXME

Use sparingly. Always include context on **what** and **why**.

```js
/* TODO: support tilted surfaces — requires extending the ray-trace to non-axial elements */
```

---

## Formatting Standards

| Rule | Example |
|------|---------|
| Light section delimiter | `/* ── Label ── */` (em-dash, `──`) |
| Heavy section delimiter | `/* === §N TITLE === */` |
| Math symbols in comments | Use standard optics: `y`, `u`, `n`, `R`, `K`, `EFL`, `BFL` |
| Comment line length | ≤ 90 characters preferred; wrap at word boundaries |
| One-liner comments | Preferred for simple WHY annotations |
| Multi-line comments | Reserve for formulas, state diagrams, or complex explanations |

---

## What NOT to Comment

- **Obvious code**: `const [sel, setSel] = useState(null)` needs no comment
- **Redundant restatements**: `/* set hov to null */` before `setHov(null)`
- **Self-documenting names**: if a variable or function name fully conveys intent, skip it
- **Standard React patterns**: `useMemo`, `useCallback`, `useEffect` with clear deps
- **Simple style objects**: inline styles that are purely visual (color, padding, font)
- **Import statements**: unless the import source is surprising or non-obvious

---

## Domain-Specific Guidelines

### Optics & Ray Tracing
- **Always name the formula** when implementing a textbook equation (Snell's law,
  sag equation, paraxial refraction, etc.)
- **Explain coordinate conventions**: positive directions, sign conventions for
  radii, angles, and distances
- **Note approximation limits**: "paraxial approximation (small-angle)" where relevant
- Use standard optics variable names in comments: `y` (ray height), `u` (ray angle),
  `n` (refractive index), `R` (radius of curvature), `K` (conic constant)

### SVG Rendering
- **Comment coordinate transforms**: explain the mapping between optical space
  (mm, centered on axis) and SVG pixel space
- **Note the direction convention**: SVG Y increases downward; optical Y may differ
- **Explain path-building strategies**: why shapes are constructed a certain way
  (e.g., "front arc + top edge + back arc + bottom edge → closed path")

### State Machines & Complex UI Logic
- **Comment the states and transitions** at the top of the relevant block
- Use ASCII diagrams for multi-phase flows:
  ```
  /* State machine: Normal → Approaching CP → Stuck → Released
   *   Normal:       slider moves freely
   *   Approaching:  within snap distance of common point
   *   Stuck:        slider held at CP for a brief delay
   *   Released:     slider freed, continues past CP
   */
  ```

### Feature Flags
- **Note what enabling/disabling changes** in the rendering or behavior
- Reference the flag name from `featureFlags.ts`

---

## Checklist for Adding Comments

When commenting an existing file:

1. Verify or enhance the **module header** (purpose, scope, dependencies)
2. Add/check **section headers** for logical groupings
3. Add **JSDoc** to all exported functions and component props
4. Add **inline comments** for non-obvious logic, formulas, and domain knowledge
5. Remove any **stale or misleading** comments
6. Verify **no functional code** was changed — comments only
7. Run `npm run test` to confirm syntax is intact
