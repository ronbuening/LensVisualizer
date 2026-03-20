# Implementation Plan: Lens Comparison View (Issue #48)

## Overview

Add a side-by-side lens comparison mode. Two lenses render simultaneously with shared focus/aperture/ray controls but independent element inspection. Desktop shows 50/50 horizontal split; mobile shows vertically stacked panels. Analysis sidebar is hidden in comparison mode—each panel gets an "Analysis" overlay button that opens a modal.

The main component is renamed from `LensViewer-v4.jsx` to `LensViewer.jsx` (git handles versioning). Subcomponents are extracted into their own files.

---

## Design Issues Identified in the Issue Spec

### 1. `scOverride` is NOT a "one-line change"
The issue claims `scOverride` is "a one-line change to the `sx` coordinate function." This is wrong. `L.SC` is used in:
- `sx()` — SVG x-coordinate mapping (line 268)
- Grid x positions — `L.gridPitch * L.SC` (line 529)
- LCA inset positioning — `maxOff * L.SC` (line 594)
- `YSC` must also be proportionally adjusted to maintain aspect ratio

**Fix:** When `scOverride` is active, compute `effectiveSC = scOverride`, `effectiveYSC = L.YSC * (scOverride / L.SC)`, and recompute `gridCount = Math.ceil(L.svgW / (L.gridPitch * effectiveSC)) + 4`. Use these in all coordinate transforms and grid rendering.

### 2. Shared vs. duplicated controls (resolved)
The issue doesn't specify where theme/ray controls go in comparison mode. Decision: **shared controls in a top-area bar**, not duplicated per-panel. Each panel header shows only lens name + resolved readouts (EFL, f-number, focus distance). This avoids confusing duplicate toggles.

### 3. Mobile comparison contradicts "desktop only"
The issue says "Compare button in the top bar (desktop only, hidden below 900px)" but we also want mobile stacked comparison. These are compatible via a feature flag `ENABLE_COMPARISON_MOBILE_STACKED` (defaulting to `true`). On mobile, the Compare button appears when the flag is on, and panels stack vertically.

### 4. `lensKeyB` initialization
The issue says "defaulting to the next lens in CATALOG_KEYS." Edge case: if the current lens is the last in the catalog, this wraps around to the first. Also need to handle catalogs with only 1 lens (disable comparison entirely).

### 5. Same lens comparison
The issue doesn't address comparing a lens with itself. This should be allowed—it's useful for verifying rendering consistency and provides a clean "same lens, different focus" comparison if we later add per-panel focus control.

### 6. Build error in one panel
If panel B's lens fails `buildLens()`, panel A should continue rendering normally. Panel B shows an error message with a lens selector to pick a different lens.

### 7. SVG `id` collision
Both panels render an SVG `<filter id="gl">` for the element glow effect. If both SVGs are in the same DOM, IDs collide. **Fix:** Parameterize the filter ID per panel (e.g., `gl-A`, `gl-B`).

### 8. URL params don't exist yet
The current app has zero URL parameter handling. This is new infrastructure, not a modification.

---

## Implementation Steps

### Step 1: Extract shared modules from LensViewer-v4.jsx

**Goal:** Pull out module-level code that multiple components will need.

**New files:**
- **`catalog.js`** — `LENS_CATALOG`, `CATALOG_KEYS`, `mdForKey()`, the `import.meta.glob` calls
- **`useMediaQuery.js`** — The `useMediaQuery` hook (lines 79–90)
- **`DescriptionPanel.jsx`** — The `DescriptionPanel` component (lines 93–132)
- **`prefs.js`** — `PREFS_KEY`, `loadPrefs()` (lines 137–158); imports `CATALOG_KEYS` from catalog.js

**Update `LensViewer-v4.jsx`:** Replace extracted code with imports. Verify app works identically.

**Commit & push after this step.**

---

### Step 2: Extract LensDiagramPanel component

**Goal:** The ~400-line `diagramContent` block becomes a standalone component.

**New file: `LensDiagramPanel.jsx`**

**Props:**
```jsx
{
  L,                    // Built lens object
  theme,                // Resolved theme object
  dark,                 // For SVG filter variant selection
  panelId,              // 'A' or 'B' — used for unique SVG filter IDs

  // Shared control values (read-only from panel's perspective)
  focusT, stopdownT,
  showOnAxis, showOffAxis, rayTracksF,
  showChromatic, chromR, chromG, chromB,

  // Panel-local interaction state
  hov, setHov,
  sel, setSel,

  // Scale override for normalized comparison mode
  scOverride,           // null = use L.SC; number = override

  // Layout variants
  compact,              // Smaller fonts/padding for comparison mode
  showControls,         // Whether to show focus/aperture sliders (default true)
}
```

**What moves in:**
- All `useMemo` computations: `inf`, `cur`, `dz`, `zPos`, `MID`, `CX`, `CY`, `IX`, `sx`, `sy`, `shapes`, `stopZ`, `fNumber`, `currentPhysStopSD`, `currentEPSD`, `focusK`, `rays`, `offAxisRays`, `chromaticRays`, `chromSpread`, `varReadouts`
- SVG viewport (grid, elements, rays, aperture stop, image plane, LCA inset, labels)
- Control panel (focus slider, aperture slider, element info)

**Scale override implementation:**
```javascript
const effectiveSC  = scOverride ?? L.SC;
const effectiveYSC = scOverride ? L.YSC * (scOverride / L.SC) : L.YSC;
const effectiveGridCount = scOverride
  ? Math.ceil(L.svgW / (L.gridPitch * effectiveSC)) + 4
  : L.gridCount;
// Use effectiveSC in sx(), grid rendering, LCA inset
// Use effectiveYSC in sy()
```

**SVG filter ID:** Use `panelId` to create unique filter IDs: `<filter id={`gl-${panelId}`}>`.

**Commit & push after this step.**

---

### Step 3: Add feature flags and URL param support

**Update `featureFlags.js`:**
```javascript
export const ENABLE_COMPARISON = true;
export const ENABLE_COMPARISON_MOBILE_STACKED = true;
```

**New file: `urlParams.js`**

Pure functions (no hooks, for testability):
```javascript
export function parseUrlParams(search, catalogKeys) {
  // Returns { lensKeyA, lensKeyB, normalized }
  // Validates keys against catalogKeys
  // Returns null for invalid/missing keys (caller uses defaults)
}

export function serializeUrlParams({ lensKeyA, lensKeyB, normalized, comparing }) {
  // Returns URLSearchParams string
  // Only includes 'b' and 'norm' when comparing
}
```

Usage in the main component via `useEffect` on mount + `history.replaceState` on state change.

**New test file: `__tests__/urlParams.test.js`**
- Parse valid params `?a=NikkorZ50f12&b=Nokton50f1&norm=1`
- Parse with invalid lens key (falls back to null)
- Parse with missing params
- Parse with only `?a=` (single lens mode)
- Both keys identical (allowed)
- Serialize comparison state → query string
- Serialize single lens state → clean query string

**Commit & push after this step.**

---

### Step 4: Create LensViewer.jsx with comparison mode

**Goal:** New main component file with full comparison support.

**New file: `LensViewer.jsx`** — New orchestrator component.

**New state (in addition to all existing v4 state):**
```javascript
const [comparing, setComparing] = useState(false);
const [lensKeyB, setLensKeyB] = useState(null);
const [normalized, setNormalized] = useState(false);
const [hovA, setHovA] = useState(null);
const [selA, setSelA] = useState(null);
const [hovB, setHovB] = useState(null);
const [selB, setSelB] = useState(null);
const [analysisModal, setAnalysisModal] = useState(null); // 'A' | 'B' | null
```

**Initialization:**
1. Parse URL params on mount → if `?b=` exists, enter comparison mode
2. `lensKeyB` defaults to next lens in catalog (wrapping)
3. `switchLens` callback resets both panels' hover/select state

**Two independent builds:**
```javascript
const buildResultA = useMemo(() => ..., [lensKey]);
const buildResultB = useMemo(() => {
  if (!comparing || !lensKeyB) return null;
  return ...;
}, [comparing, lensKeyB]);
```

**Normalized scale:**
```javascript
const scOverride = useMemo(() => {
  if (!normalized || !buildResultA.L || !buildResultB?.L) return null;
  return Math.min(buildResultA.L.SC, buildResultB.L.SC);
}, [normalized, buildResultA, buildResultB]);
```

**Top bar layout (comparison mode):**
```
[LENS] [Selector A ▾] [vs] [Selector B ▾] ··· [Independent|Normalized] [✕ Exit] ··· [Site] [Author]
```

**Shared controls bar (comparison mode):**
Below the top bar, above both panels. Contains:
- Theme toggles (HC, Light/Dark)
- Ray toggles (On-axis, Off-axis, Color, From ∞/Tracks Focus)
- Focus slider + Aperture slider

**Desktop comparison layout:**
```jsx
<div style={{ display: "flex" }}>
  <div style={{ flex: "0 0 50%" }}>
    {/* Per-panel header: lens name, subtitle, EFL/f-no/focus readouts */}
    <LensDiagramPanel L={LA} panelId="A" scOverride={...}
      focusT stopdownT showOnAxis showOffAxis ...
      hov={hovA} setHov={setHovA} sel={selA} setSel={setSelA}
      compact showControls={false} />
  </div>
  <div style={{ width: 1, background: t.panelDivider }} />
  <div style={{ flex: "0 0 50%" }}>
    {/* Same structure for panel B */}
  </div>
</div>
```

**Mobile comparison layout (stacked):**
Same structure but `flexDirection: "column"`, each panel takes full width.
Feature-flagged via `ENABLE_COMPARISON_MOBILE_STACKED`.

**Analysis modal:**
When `analysisModal === 'A'` or `'B'`, render full-screen overlay (reuse existing About overlay pattern) with `<DescriptionPanel markdown={mdForKey(key)} theme={t} />`.

**Normal (non-comparison) mode:**
Renders identically to v4. Uses `hovA`/`selA` for the single panel.

**Update `main.jsx`:** Change import to `LensViewer.jsx`.

**Keep `LensViewer-v4.jsx`** as historical reference (not deleted).

**Commit & push after this step.**

---

### Step 5: Wire URL sync and localStorage

**Goal:** Comparison state persists across page loads.

**URL sync (useEffect):**
- On state change → `history.replaceState` with serialized params
- Only syncs comparison-relevant state (lens keys, normalized toggle)
- Single lens mode: `?a=lensKey` or clean URL

**localStorage updates:**
- Add `comparing`, `lensKeyB`, `normalized` to prefs
- Update `loadPrefs()` to read these

**Commit & push after this step.**

---

### Step 6: Add comparison-specific tests

**New test file: `__tests__/comparison.test.js`**

Tests for the normalized scale computation logic:
- `computeNormalizedScale(LA, LB)` returns `Math.min(LA.SC, LB.SC)`
- Returns null when either L is null
- Handles equal SC values
- Effective YSC proportional scaling: `L.YSC * (scNorm / L.SC)`
- Grid count recomputation with override

**Update `__tests__/urlParams.test.js`** (created in Step 3):
- Already covers parsing and serialization

**Commit & push after this step.**

---

### Step 7: Polish and edge cases

- Panel B build error → show error UI in B panel, A continues
- Catalog with only 1 lens → hide Compare button
- Window resize crossing 900px while comparing → transition between side-by-side and stacked
- Analysis markdown missing → "No description available" in modal
- Both dropdowns selecting the same lens → allowed, works correctly
- Keyboard: Escape closes analysis modal (reuse existing pattern)
- Focus/aperture sliders: in comparison mode, move to shared controls bar (not inside each panel)

**Commit & push after this step.**

---

## File Summary

| File | Action | Purpose |
|------|--------|---------|
| `catalog.js` | **New** | Lens catalog, CATALOG_KEYS, mdForKey |
| `useMediaQuery.js` | **New** | Media query hook |
| `DescriptionPanel.jsx` | **New** | Markdown rendering component |
| `prefs.js` | **New** | localStorage preferences |
| `LensDiagramPanel.jsx` | **New** | Extracted diagram+controls component |
| `urlParams.js` | **New** | URL param parse/serialize (pure functions) |
| `LensViewer.jsx` | **New** | New main orchestrator with comparison |
| `featureFlags.js` | **Modify** | Add ENABLE_COMPARISON, ENABLE_COMPARISON_MOBILE_STACKED |
| `main.jsx` | **Modify** | Import LensViewer.jsx instead of v4 |
| `LensViewer-v4.jsx` | **Keep** | Preserved as historical reference |
| `__tests__/urlParams.test.js` | **New** | URL parsing/serialization tests |
| `__tests__/comparison.test.js` | **New** | Normalized scale computation tests |

## Key Design Decisions

1. **Controls placement**: Shared controls bar in comparison mode (not duplicated per panel)
2. **`scOverride` scope**: Affects `sx()`, `sy()`, grid rendering, and LCA inset in the panel. Does NOT re-run `buildLens()`. The lens object L is built once; the panel adapts its rendering scale.
3. **Per-panel state**: Only `hov`/`sel` are per-panel. Focus, aperture, ray toggles, theme are shared.
4. **SVG filter IDs**: Parameterized per panel (`gl-A`, `gl-B`) to avoid DOM collisions
5. **File naming**: `LensViewer.jsx` (drop version suffix, let git handle versioning)
6. **Mobile comparison**: Enabled by default via `ENABLE_COMPARISON_MOBILE_STACKED = true`, uses vertical stacking
7. **v4 preserved**: Old file kept for reference and rollback capability
