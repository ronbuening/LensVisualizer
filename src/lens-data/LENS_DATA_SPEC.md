# Lens Data Specification

Reference for creating new `*.data.ts` files in `lens-data/`.

## Quick Start

1. Copy `TEMPLATE.data.ts.template` to `YourLens.data.ts`
2. Fill in all fields following this spec
3. Optionally add `YourLens.analysis.md` for the description panel
4. Auto-registration picks it up — no imports or catalog edits needed

File naming: `lens-data/*.data.ts` (glob pattern used for auto-discovery). Each file imports and uses `satisfies LensDataInput` for compile-time type checking.

---

## Top-Level Fields

### Required (must be in every lens file)

| Field | Type | Description |
|-------|------|-------------|
| `key` | `string` | Unique identifier (e.g. `"nokton-50f1"`). Used as catalog key. |
| `name` | `string` | Full display name (e.g. `"VOIGTLÄNDER NOKTON 50mm f/1.0"`) |
| `elements` | `array` | Glass elements, front to rear (min 1) |
| `surfaces` | `array` | Optical surfaces, front to rear (min 1) |
| `nominalFno` | `number \| number[]` | Nominal f-number — single value for primes/constant-aperture zooms, or array (one per zoom position) for variable-aperture zooms (e.g. `[4.5, 5.76]`) |
| `closeFocusM` | `number` | Minimum focus distance in meters |
| `fstopSeries` | `array` | F-stop values for quick-select UI buttons |

### Required but have defaults (from `defaults.ts`)

These are merged automatically. Override only when needed.

| Field | Default | Description |
|-------|---------|-------------|
| `svgW` | `1080` | SVG viewport width (px) |
| `svgH` | `490` | SVG viewport height (px) |
| `clipMargin` | `1.0` | Clipping margin for element trimming |
| `maxRimAngleDeg` | `~64.2` | Max rim angle (degrees), synchronized with validation's `sd/|R| = 0.9` spherical limit |
| `gapSagFrac` | `0.90` | Cross-gap sag intrusion fraction, synchronized with validation and rendering; must be > 0 and ≤ 1 |
| `maxAspectRatio` | `1.6` | Max YSC/SC ratio — clamps vertical scale to prevent horizontal squashing on long lenses |
| `focusStep` | `0.004` | Focus slider step size |
| `apertureStep` | `0.004` | Aperture slider step size |
| `maxFstop` | `16` | Maximum f-number for aperture slider |
| `rayFractions` | `[-0.83, -0.50, -0.17, 0.17, 0.50, 0.83]` | On-axis ray fan heights |
| `rayLeadFrac` | `0.35` | Ray lead distance (fraction of total track) |
| `lensShiftFrac` | `0.08` | Horizontal lens shift (fraction of SVG width) |
| `offAxisFieldFrac` | `0.60` | Off-axis field angle (fraction of max half-field) |
| `offAxisFractions` | `[-0.75, -0.375, 0, 0.375, 0.75]` | Off-axis ray fan heights |
| `scFill` | `0.55` | Horizontal fill fraction (0–1) — layout tuning |

### Required (per-lens, no defaults)

These must be specified in every lens file — they have no defaults.

| Field | Type | Description |
|-------|------|-------------|
| `yScFill` | `number` | Vertical fill fraction (0–1) — layout tuning |

### Optional

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `maker` | `string` | | Manufacturer name (e.g. `"Nikon"`, `"Voigtländer"`). Used for maker pages and SEO metadata. If omitted, derived from the lens `name` via prefix matching. |
| `visible` | `boolean` | `true` | Controls whether the lens appears in the UI catalog. Set to `false` to hide a lens from the dropdown without removing its data file. |
| `subtitle` | `string` | | Patent reference shown in UI header |
| `specs` | `string[]` | | Spec strings displayed in header |
| `focalLengthMarketing` | `number \| [number, number]` | | Marketed/nominal focal length in mm. Single number for primes (e.g. `50`); `[wide, tele]` tuple for zooms (e.g. `[70, 200]`). |
| `focalLengthDesign` | `number \| [number, number]` | | Design/patent focal length in mm (computed EFL). Single number for primes; `[wide, tele]` for zooms. May differ from marketing value. |
| `apertureMarketing` | `number` | | Marketed/nominal maximum f-number (e.g. `1.8` for an "f/1.8" lens). |
| `apertureDesign` | `number` | | Design/patent maximum f-number (precise computed value, e.g. `1.85`). May differ from marketing value. |
| `patentYear` | `number` | | Year the patent was published or granted (e.g. `2019`). |
| `elementCount` | `number` | | Total number of glass elements in the design. |
| `groupCount` | `number` | | Total number of air-separated groups in the design. |
| `focusDescription` | `string` | | Human-readable focus mechanism description |
| `asph` | `object` | | Aspherical coefficients (see below) |
| `var` | `object` | | Variable air gaps for focus (see below) |
| `varLabels` | `array` | | Display labels for variable gaps |
| `groups` | `array` | | Group annotations for SVG diagram |
| `doublets` | `array` | | Cemented doublet annotations for SVG diagram |
| `zoomPositions` | `number[]` | | Focal lengths in mm at each zoom position (see Zoom Lens Fields) |
| `zoomStep` | `number` | `0.004` | Zoom slider step size |
| `zoomLabels` | `string[]` | | Optional endpoint labels for zoom slider |
| `apertureBlades` | `number` | | Number of aperture blades (reserved for future polygonal bokeh rendering) |
| `apertureBladeRoundedness` | `number` | | Blade roundedness 0–1 (reserved; 0 = straight polygon, 1 = circular) |

---

## Element Object

Each entry in the `elements` array describes one physical glass element.

```javascript
{
  id:       1,                              // REQUIRED: unique integer, referenced by surfaces
  name:     "L11",                          // REQUIRED: short diagram name: L{group}{element-in-group}
  label:    "Element 1",                    // REQUIRED: display label
  type:     "Biconvex Positive",            // REQUIRED: optical shape/type description
  nd:       1.90525,                        // REQUIRED: refractive index (d-line, 587.6 nm)
  vd:       35.04,                          // recommended: Abbe number (optional in type; needed for inspector display)
  fl:       119.3,                          // recommended: focal length in mm (optional in type; needed for inspector display)
  glass:    "LaSF (LASF35 melt)",           // recommended: glass name/catalog (optional in type; needed for inspector display)
  apd:      false,                          // optional: false | "patent" | "inferred"
  apdNote:  "dPgF = +0.0376",              // optional: APD details
  role:     "Front positive meniscus...",    // optional: optical role description
  cemented: "D1",                           // optional: doublet/triplet group name
}
```

**Common `type` values:**
- `"Biconvex Positive"`, `"Biconcave Negative"`
- `"Positive Meniscus"`, `"Negative Meniscus"`
- `"Pos. Meniscus (1× Asph)"`, `"Neg. Meniscus (2× Asph)"`
- `"Plano-Convex"`, `"Plano-Concave"`

**Validation rules:**
- Each `id` must be unique across all elements
- Every element must be referenced by at least one surface's `elemId`

**Diagram naming convention:**
- `groups[].text` uses `G1`, `G2`, `G3`, ... from front to rear.
- `elements[].name` uses `L{groupNumber}{elementNumberWithinGroup}`, such as `L11`, `L12`, `L21`.
- Keep `elements[].label` as a plain ordinal display label where possible, such as `"Element 1"`.
- Surface labels are independent lookup keys for prescriptions and must not be renamed just to match diagram titles.

---

## Surface Object

Each entry in the `surfaces` array describes one optical surface, in strict front-to-rear order.

```javascript
{
  label:  "3A",       // REQUIRED: unique label — append "A" for aspherical surfaces
  R:      50.421,     // REQUIRED: radius of curvature in mm
  d:      3.46,       // REQUIRED: axial thickness to next surface in mm
  nd:     1.85249,    // REQUIRED: refractive index of medium AFTER this surface
  elemId: 2,          // REQUIRED: element ID (0 = air interface)
  sd:     14.5,       // REQUIRED: semi-diameter (half clear aperture) in mm
}
```

### Sign Conventions

| Value | Meaning |
|-------|---------|
| `R > 0` | Center of curvature to the RIGHT |
| `R < 0` | Center of curvature to the LEFT |
| `R = 1e15` | Flat surface (infinite radius) |
| `d > 0` | Always positive (distance to next surface) |
| `nd = 1.0` | Air gap |
| `nd > 1.0` | Glass medium (use the glass's refractive index) |

### Surface Label Convention

- Sequential numbers: `"1"`, `"2"`, `"3"`, ...
- Append `"A"` for aspherical surfaces: `"1A"`, `"3A"`, `"18A"`
- The aperture stop MUST be labeled `"STO"` (exactly one required)

### Pairing Rules

- **Glass element entry:** Surface where light enters the glass — `nd` = glass refractive index, `elemId` = element ID
- **Glass element exit (to air):** Surface where light exits — `nd = 1.0`, `elemId = 0`
- **Cemented interface:** Rear surface of front element has `nd` = next element's glass, no air gap surface between them. The junction surface carries the second element's `elemId`.
- **Cemented triplet:** Extends the doublet pattern — each junction surface carries the next element's `elemId` and `nd`:
  ```javascript
  // Cemented triplet: L2 + L3 + L4
  { label: "3",  R: ..., d: ..., nd: 1.6727, elemId: 2, sd: ... },  // L2 front — elemId: 2
  { label: "4",  R: ..., d: ..., nd: 1.4075, elemId: 3, sd: ... },  // L2→L3 junction — elemId: 3
  { label: "5",  R: ..., d: ..., nd: 1.6890, elemId: 4, sd: ... },  // L3→L4 junction — elemId: 4
  { label: "6",  R: ..., d: ..., nd: 1.0,    elemId: 0, sd: ... },  // L4 rear → air
  ```
- **Hybrid composite (glass + resin):** A glass body with a thin aspherical resin layer bonded to one surface. Treated identically to a cemented doublet — the glass body and resin layer are separate elements with a junction surface. The resin layer's outer surface is typically aspherical. Use `cemented: "H1"` (or similar) on both elements to annotate the hybrid group. Note: the resin layer is very thin (typically 0.1–0.2 mm center thickness), so edge thickness validation may only pass when the aspherical departure at the rim compensates for the curvature mismatch between the junction and outer surfaces. Verify with tests.
  ```javascript
  // Hybrid composite: L5 glass body + L5r resin layer
  { label: "9",   R: 1e15,    d: 6.55, nd: 1.804,   elemId: 5, sd: ... },  // Glass front (flat)
  { label: "10",  R: -17.503, d: 0.14, nd: 1.56093, elemId: 6, sd: ... },  // Glass/resin junction — elemId: 6
  { label: "11A", R: -16.276, d: ...,  nd: 1.0,     elemId: 0, sd: ... },  // Resin rear (asph) → air
  ```
- **Last surface:** `d` = back focal distance to image plane

### Aperture Stop

Exactly one surface must have `label: "STO"`. This is typically a flat surface (`R: 1e15`) in an air gap (`nd: 1.0, elemId: 0`). The `sd` value is the physical stop semi-diameter — the renderer derives the entrance pupil from this via paraxial ray trace.

**Determining stop position:**
- **Patent specifies stop:** Use the exact surface index or gap from the patent table.
- **Patent does not specify (common in older patents):** Estimate from the patent figure drawing. Split the air gap at the inferred iris location — the preceding surface's `d` is the distance from that surface to the stop, and the STO surface's `d` is the remaining distance to the next surface. Document the estimate in a code comment (e.g., "STO position inferred from Fig. 1 iris placement").

---

## Aspherical Coefficients (`asph`)

Object keyed by surface label. Only include aspherical surfaces.

```javascript
asph: {
  "3A": {
    K:   0,              // Conic constant (0 = sphere, -1 = paraboloid)
    A4:  -1.6435e-06,    // 4th-order coefficient
    A6:   7.0442e-10,    // 6th-order
    A8:   2.7291e-11,    // 8th-order
    A10: -2.2674e-15,    // 10th-order
    A12:  0,             // 12th-order (0 if not used)
    A14:  0,             // 14th-order (0 if not used)
    // A16, A18, A20 — optional; include only when the patent provides them
    A16:  0,             // 16th-order (optional)
    A18:  0,             // 18th-order (optional)
    A20:  0,             // 20th-order (optional)
  },
}
```

**Sag equation:**
```
Z(h) = (h²/R) / [1 + √(1 − (1+K)·(h/R)²)] + A4·h⁴ + A6·h⁶ + A8·h⁸ + A10·h¹⁰ + A12·h¹² + A14·h¹⁴
       [+ A16·h¹⁶ + A18·h¹⁸ + A20·h²⁰]   ← optional; omit or set 0 when unused
```

**Rules:**
- Keys must match existing surface labels
- Set unused required coefficients (A4–A14) to `0`
- A16, A18, A20 are optional — include only when the patent specifies them; omit entirely when not used
- For all-spherical designs: `asph: {}`
- **Conic limit:** When K > 0 (hyperboloid), the surface semi-diameter must satisfy sd < |R| / √(1+K). The validator enforces sd ≤ 0.98 × this limit.

---

## Variable Air Spacings (`var`)

Describes air gaps that change during focus (and optionally zoom).

### Prime Lens Format (no `zoomPositions`)

```javascript
var: {
  "10":  [5.49, 5.89],     // [d_at_infinity, d_at_close_focus]
  "14":  [0.56, 3.57],
  "19A": [15.00, 20.53],
},
varLabels: [
  ["10",  "ZD10"],          // [surface_label, display_text]
  ["14",  "ZD14"],
  ["19A", "BF"],            // "BF" = back focus — conventional label for last gap
],
```

### Zoom Lens Format (with `zoomPositions`)

When `zoomPositions` is present, each `var` value becomes an array of `[d_infinity, d_close]` pairs — one per zoom position:

```javascript
zoomPositions: [24, 50, 70],   // 3 zoom positions
var: {
  "5":  [[2.0, 2.5], [4.0, 4.8], [3.5, 4.2]],   // one [d_inf, d_close] pair per zoom position
  "10": [[8.0, 6.5], [5.0, 3.2], [6.5, 5.0]],
  "15": [[12.0, 14.5], [15.0, 17.8], [13.5, 16.0]],
},
```

For zoom-only movements (no focus variation at that gap), use identical inf/close values:

```javascript
  "5":  [[1.0, 1.0], [3.0, 3.0], [2.5, 2.5]],   // zoom only, no focus change
```

**Detection:** `zoomPositions` present → zoom format. Absent → prime format.

The surface's `d` field should equal `var[label][0][0]` (infinity focus at the first zoom position).

### Rules

- Keys must match existing surface labels
- **Prime:** Each value is `[d_infinity, d_close]` — exactly 2 numbers
- **Zoom:** Each value is an array of `[d_inf, d_close]` pairs, length matching `zoomPositions.length`
- `varLabels` entries must reference keys present in `var`

### Focus types by number of variable gaps

| Gaps | Type | Description |
|------|------|-------------|
| 1 | Unit focus | Entire lens moves; only BFD changes |
| 2 | Inner focus | Internal group moves; 2 gaps change |
| 3+ | Floating focus | Multiple groups move independently |

---

## Zoom Lens Fields

Optional fields that enable zoom lens support. When `zoomPositions` is absent, the lens is treated as a prime (fixed focal length) — all existing prime lenses work unchanged.

### `zoomPositions` (required for zoom)

Array of focal lengths in mm at each defined zoom position. Must have at least 2 entries, monotonically increasing.

```javascript
zoomPositions: [24, 50, 70],
```

These are interpolation control points, not discrete stops. The zoom slider is continuous — between any two defined positions, spacing values are linearly interpolated, giving smooth movement at every intermediate focal length.

**Non-monotonic (reversing) groups:** Some zoom designs have groups that move forward then reverse direction. This is naturally handled by the piecewise-linear interpolation — if a gap's spacing goes `[2.0, 5.0, 3.0]` across three zoom positions, the interpolation correctly produces the forward-then-backward motion. Include enough zoom positions to bracket any reversals (standard zoom patents provide 3–5 positions, which is sufficient).

### `zoomStep` (optional)

Zoom slider step size. Default: `0.004`.

### `zoomLabels` (optional)

Endpoint labels for the zoom slider, e.g. `["Wide", "Tele"]`.

### Computed fields (by `buildLens`)

These are computed automatically and added to the frozen lens object:

| Field | Type | Description |
|-------|------|-------------|
| `isZoom` | `boolean` | `true` when `zoomPositions` is present |
| `zoomEFLs` | `number[]` | Computed EFL at each zoom position via paraxial trace |
| `zoomEPs` | `number[]` | Entrance pupil SD at each zoom position |
| `zoomHalfFields` | `number[]` | Vignetting-limited half-field angle at each zoom position |
| `zoomYRatios` | `number[]` | Marginal ray height ratio at stop for each zoom position |
| `zoomBs` | `number[]` | Chief ray height at stop for each zoom position |
| `zoomFOPENs` | `number[]` | Wide-open f-number at each zoom position (derived from `zoomEFLs` and `zoomEPs`) |

### Variable-Aperture Zooms

Zoom lenses with a variable maximum aperture (e.g., f/4.5-5.6) use an array for `nominalFno` with one value per zoom position:

```javascript
zoomPositions: [103.09, 388.17],
nominalFno:    [4.5,    5.76],    // f/4.5 at wide, f/5.76 at tele
```

The array length must match `zoomPositions.length`. Each entry is the nominal wide-open f-number at that focal length. `buildLens` uses per-position values to compute correct entrance pupil and stop diameters at each zoom position, and stores the results in `zoomFOPENs`.

At runtime, `fopenAtZoom(zoomT, L)` interpolates between the per-position values. The aperture slider clamps the f-number to the zoom-dependent FOPEN — so f/8 stays at f/8 when zooming, but wide-open at tele correctly shows f/5.76 instead of f/4.5. F-stop quick-select buttons below the current FOPEN are hidden.

For constant-aperture zooms (e.g., f/2.8), keep `nominalFno` as a single number — no changes needed.

### Validation

When `zoomPositions` is present:
1. Must be an array of at least 2 finite numbers
2. Must be monotonically increasing
3. All `var` values must be arrays of `[d_inf, d_close]` pairs with length matching `zoomPositions.length`
4. `nominalFno` (if array) must have length matching `zoomPositions.length`; if lens has no `zoomPositions`, `nominalFno` must be a single number
5. `zoomStep` (if present) must be a finite positive number
6. `zoomLabels` (if present) must be an array of strings

---

## Group & Doublet Annotations

Visual brackets shown on the SVG diagram.

```javascript
groups: [
  { text: "G1 (+)", fromSurface: "1",  toSurface: "10" },
  { text: "G2 (FOCUS)",  fromSurface: "12", toSurface: "19A" },
],
doublets: [
  { text: "Jb", fromSurface: "12", toSurface: "14" },
  { text: "Ja", fromSurface: "15", toSurface: "17" },
],
```

**Rules:**
- `fromSurface` and `toSurface` must be valid surface labels
- Group text should start with the normalized `G#` label; put power, focus, IS, or patent aliases in the suffix
- These are purely visual annotations — they don't affect optical calculations

---

## Validation

`validateLensData()` runs automatically when a lens is loaded. It checks:

1. All required fields are present and correctly typed
2. Exactly one `"STO"` surface exists
3. All element IDs are unique
4. Every element is referenced by at least one surface
5. All surface `elemId` values reference valid elements (or `0` for air)
6. All `asph` keys match existing surface labels
7. All `var` keys match existing surface labels with correct format (prime: `[d_inf, d_close]`; zoom: array of pairs matching `zoomPositions.length`)
8. All `var` thickness values are non-negative (d ≥ 0)
9. Surface `d` matches the `var` infinity value at the first zoom position (tolerance 1e-6)
10. All `varLabels` reference valid surface labels
11. `zoomPositions` (when present): array of ≥2 finite, monotonically increasing numbers; `zoomStep` must be finite positive; `zoomLabels` must be array of strings
12. All `groups`/`doublets` reference valid surface labels
13. Cross-gap surface overlap: combined sag intrusion from the two boundary surfaces that face each other doesn't exceed `gapSagFrac × gap` — checked at all zoom positions for zoom lenses
14. Conic height limit: for aspherical surfaces with K > 0, sd ≤ 0.98 × |R| / √(1+K)
15. Element render diagnostics: production lenses must not require material hidden trim (>0.25 mm) from slope, conic, or cross-gap limits

On failure, `buildLens()` throws with all errors listed.

---

## Data Sourcing Checklist

When transcribing from an optical patent:

1. **Surfaces** — Copy the prescription table exactly (R, d, nd). Watch sign conventions — some patents use opposite R sign convention
2. **Semi-diameters** — Use patent values if listed; otherwise estimate from entrance pupil geometry with 8–12% mechanical clearance. If the manufacturer publishes a cross-section diagram, use it to refine front-group SDs: compute the average (front+rear)/2 SD per element, compare the ratios between elements against the diagram proportions, and adjust conservatively. The validator enforces a **slope-based rim check** (actual aspherical slope at the SD must be below ~64.2°), which is more permissive than the old sd/|R| ≤ 0.90 rule for aspherical surfaces (K < 0). Near-paraboloid surfaces (K ≈ −1) can have sd/|R| well above 0.9. Element front/rear SD ratio must be ≤ 3.0 (sanity check); per-surface slope validation handles the physics. The cross-gap overlap check compares the two boundary surfaces that face each other and requires sag intrusion ≤ `gapSagFrac × gap`; the default allows 90% of the air gap, preserving visible clearance instead of accepting mathematical rim contact. This is often the binding constraint for thin air gaps. The renderer uses the same rim and gap policy, and production tests fail when a lens would require material hidden render trim. If the render diagnostic reports >0.25 mm trim, reduce the relevant boundary SD or document and test an intentional exception. The front group is most likely to diverge — especially elements 2 and 3, which the marginal-ray method tends to over-size relative to the actual lens
3. **Aspherical coefficients** — Copy from the asph table. Watch for scientific notation format differences between patents
4. **Variable gaps** — Look for "variable spacing" tables showing values at different object distances
5. **Elements** — Derive from the surface data: consecutive surfaces with the same glass (nd > 1) form one element. Cemented elements share a boundary surface
6. **Glass identification** — Match nd/vd pairs against catalogs (OHARA, SCHOTT, HOYA, Sumita). Note when matches are uncertain
7. **Focal length** — Use the patent's stated EFL, or compute from the prescription via paraxial ray trace
8. **F-number** — Use the patent's stated f-number. If the patent gives the stop diameter, compute `f/# = EFL / (2 × EP_SD)`
9. **Scaling** — If the patent prescription is at a different focal length than production (e.g., f=100 in patent, f=50 production), apply a uniform scale factor to ALL R, d, and sd values. Document the scale factor in the file header
10. **EFL verification** — After transcribing all surfaces, verify the computed EFL (from `buildLens()` or tests) matches the patent's stated focal length (scaled if applicable). A mismatch usually indicates a sign error in R or a wrong nd value
11. **Cross-reference patent text** — Compare the patent's prose element descriptions (e.g., "plano-convex", "biconcave") against your transcribed R values. Older patents sometimes use approximate language — "plane" may mean "very weakly curved" if the numerical example has a finite but large R

### Zoom-Specific Sourcing (additional steps for zoom lenses)

12. **Variable spacing tables at multiple focal lengths** — Look for tables giving air gap values at 3–5 focal length positions (wide/mid/tele). The column header focal lengths become `zoomPositions`; each gap row provides the per-position `var` pairs
13. **Zoom-only vs zoom+focus gaps** — Identify which variable gaps change only with zoom (the patent's infinity-focus spacing varies across focal lengths, but the close-focus table shows the same change pattern) vs gaps that change with both zoom and focus (different infinity/close values at each position). Document which is which in the file header
14. **Non-monotonic (reversing) groups** — Check whether any gap's spacing goes up then down (or vice versa) across zoom positions — e.g., `[28.12, 22.59, 27.71]`. This is handled automatically by piecewise-linear interpolation, but include enough zoom positions to bracket any reversals. Note reversals in the file header
15. **EFL verification at each zoom position** — After transcribing all surfaces and variable gaps, verify the computed EFL at each zoom position (from `buildLens()` → `zoomEFLs`) against the patent's stated focal lengths. Mismatches usually indicate a transcription error in the variable gap table

---

## Example: Minimal All-Spherical Singlet

```javascript
const LENS_DATA = {
  key:      "example-singlet",
  name:     "Example Singlet 50mm f/4",
  elements: [
    { id: 1, name: "L11", label: "Element 1", type: "Biconvex Positive", nd: 1.51633, vd: 64.06, fl: 50.0, glass: "N-BK7" },
  ],
  surfaces: [
    { label: "STO", R:  1e15,   d: 1.0,  nd: 1.0,     elemId: 0, sd: 6.25 },
    { label: "2",   R:  25.84,  d: 5.0,  nd: 1.51633,  elemId: 1, sd: 7.0  },
    { label: "3",   R: -25.84,  d: 44.0, nd: 1.0,      elemId: 0, sd: 7.0  },
  ],
  asph:         {},
  var:          { "3": [44.0, 42.0] },
  varLabels:    [["3", "BF"]],
  groups:       [{ text: "G1", fromSurface: "2", toSurface: "3" }],
  doublets:     [],
  closeFocusM:  0.45,
  nominalFno:   4.0,
  fstopSeries:  [4, 5.6, 8, 11, 16, 22],
  scFill:       0.50,
  yScFill:      0.30,
};
export default LENS_DATA;
```

---

## Example: Zoom Lens Variable-Gap Structure

The zoom-specific fields added alongside normal lens fields. For a complete working example, see `NikonNikkorZ70200f28.data.ts`.

```javascript
// Zoom positions — focal lengths in mm (≥2, monotonically increasing)
zoomPositions: [24, 50, 70],
zoomStep: 0.004,
zoomLabels: ["Wide", "Tele"],

// Variable air spacings — one [d_inf, d_close] pair per zoom position
var: {
  // Zoom-only gap: identical inf/close values at each position
  "5":  [[2.0, 2.0], [5.0, 5.0], [3.5, 3.5]],
  // Zoom + focus gap: different inf/close values
  "10": [[8.0, 6.5], [5.0, 3.2], [6.5, 5.0]],
  // Another zoom + focus gap
  "15": [[12.0, 14.5], [15.0, 17.8], [13.5, 16.0]],
},
varLabels: [
  ["5",  "D5"],
  ["10", "D10"],
  ["15", "BF"],
],
```

Each surface's `d` field must equal its first zoom position's infinity value — e.g., surface `"5"` has `d: 2.0` (matching `var["5"][0][0]`).
