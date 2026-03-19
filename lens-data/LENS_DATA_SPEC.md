# Lens Data Specification

Reference for creating new `*.data.js` files in `lens-data/`.

## Quick Start

1. Copy `TEMPLATE.data.js` to `YourLens.data.js`
2. Fill in all fields following this spec
3. Optionally add `YourLens.analysis.md` for the description panel
4. Auto-registration picks it up — no imports or catalog edits needed

File naming: `lens-data/*.data.js` (glob pattern used for auto-discovery).

---

## Top-Level Fields

### Required (must be in every lens file)

| Field | Type | Description |
|-------|------|-------------|
| `key` | `string` | Unique identifier (e.g. `"nokton-50f1"`). Used as catalog key. |
| `name` | `string` | Full display name (e.g. `"VOIGTLÄNDER NOKTON 50mm f/1.0"`) |
| `elements` | `array` | Glass elements, front to rear (min 1) |
| `surfaces` | `array` | Optical surfaces, front to rear (min 1) |
| `nominalFno` | `number` | Nominal f-number for the design |
| `closeFocusM` | `number` | Minimum focus distance in meters |
| `fstopSeries` | `array` | F-stop values for quick-select UI buttons |

### Required but have defaults (from `defaults.js`)

These are merged automatically. Override only when needed.

| Field | Default | Description |
|-------|---------|-------------|
| `svgW` | `1080` | SVG viewport width (px) |
| `svgH` | `490` | SVG viewport height (px) |
| `clipMargin` | `1.0` | Clipping margin for element trimming |
| `maxRimAngleDeg` | `40` | Max rim angle (degrees) |
| `gapSagFrac` | `0.90` | Sag rendering fraction for air gaps |
| `focusStep` | `0.004` | Focus slider step size |
| `apertureStep` | `0.004` | Aperture slider step size |
| `maxFstop` | `16` | Maximum f-number for aperture slider |
| `rayFractions` | `[-0.83, -0.50, -0.17, 0.17, 0.50, 0.83]` | On-axis ray fan heights |
| `rayLeadFrac` | `0.19` | Ray lead distance (fraction of total track) |
| `offAxisFieldFrac` | `0.60` | Off-axis field angle (fraction of max half-field) |
| `offAxisFractions` | `[-0.75, -0.375, 0, 0.375, 0.75]` | Off-axis ray fan heights |

### Optional

| Field | Type | Description |
|-------|------|-------------|
| `subtitle` | `string` | Patent reference shown in UI header |
| `specs` | `string[]` | Spec strings displayed in header |
| `focusDescription` | `string` | Human-readable focus mechanism description |
| `asph` | `object` | Aspherical coefficients (see below) |
| `var` | `object` | Variable air gaps for focus (see below) |
| `varLabels` | `array` | Display labels for variable gaps |
| `groups` | `array` | Group annotations for SVG diagram |
| `doublets` | `array` | Cemented doublet annotations for SVG diagram |
| `scFill` | `number` | Horizontal fill fraction (0–1) — layout tuning |
| `yScFill` | `number` | Vertical fill fraction (0–1) — layout tuning |

---

## Element Object

Each entry in the `elements` array describes one physical glass element.

```javascript
{
  id:       1,                              // REQUIRED: unique integer, referenced by surfaces
  name:     "L1",                           // REQUIRED: short name
  label:    "Element 1",                    // REQUIRED: display label
  type:     "Biconvex Positive",            // REQUIRED: optical shape/type description
  nd:       1.90525,                        // REQUIRED: refractive index (d-line, 587.6 nm)
  vd:       35.04,                          // REQUIRED: Abbe number
  fl:       119.3,                          // REQUIRED: focal length in mm
  glass:    "LaSF (LASF35 melt)",           // REQUIRED: glass name/catalog
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
- **Cemented interface:** Rear surface of front element has `nd` = next element's glass, no air gap surface between them
- **Last surface:** `d` = back focal distance to image plane

### Aperture Stop

Exactly one surface must have `label: "STO"`. This is typically a flat surface (`R: 1e15`) in an air gap (`nd: 1.0, elemId: 0`). The `sd` value is the physical stop semi-diameter — the renderer derives the entrance pupil from this via paraxial ray trace.

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
  },
}
```

**Sag equation:**
```
Z(h) = (h²/R) / [1 + √(1 − (1+K)·(h/R)²)] + A4·h⁴ + A6·h⁶ + A8·h⁸ + A10·h¹⁰ + A12·h¹² + A14·h¹⁴
```

**Rules:**
- Keys must match existing surface labels
- Set unused coefficients to `0`
- For all-spherical designs: `asph: {}`

---

## Variable Air Spacings (`var`)

Describes air gaps that change during focus.

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

**Rules:**
- Keys must match existing surface labels
- Each value is `[d_infinity, d_close]` — exactly 2 numbers
- The surface's `d` field should equal `var[label][0]` (infinity value)
- `varLabels` entries must reference keys present in `var`

**Focus types by number of variable gaps:**

| Gaps | Type | Description |
|------|------|-------------|
| 1 | Unit focus | Entire lens moves; only BFD changes |
| 2 | Inner focus | Internal group moves; 2 gaps change |
| 3+ | Floating focus | Multiple groups move independently |

---

## Group & Doublet Annotations

Visual brackets shown on the SVG diagram.

```javascript
groups: [
  { text: "FRONT (101)", fromSurface: "1",  toSurface: "10" },
  { text: "REAR (102)",  fromSurface: "12", toSurface: "19A" },
],
doublets: [
  { text: "Jb", fromSurface: "12", toSurface: "14" },
  { text: "Ja", fromSurface: "15", toSurface: "17" },
],
```

**Rules:**
- `fromSurface` and `toSurface` must be valid surface labels
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
7. All `var` keys match existing surface labels with `[d_inf, d_close]` arrays
8. All `varLabels` reference valid surface labels
9. All `groups`/`doublets` reference valid surface labels

On failure, `buildLens()` throws with all errors listed.

---

## Data Sourcing Checklist

When transcribing from an optical patent:

1. **Surfaces** — Copy the prescription table exactly (R, d, nd). Watch sign conventions — some patents use opposite R sign convention
2. **Semi-diameters** — Use patent values if listed; otherwise estimate from entrance pupil geometry with 8–12% mechanical clearance
3. **Aspherical coefficients** — Copy from the asph table. Watch for scientific notation format differences between patents
4. **Variable gaps** — Look for "variable spacing" tables showing values at different object distances
5. **Elements** — Derive from the surface data: consecutive surfaces with the same glass (nd > 1) form one element. Cemented elements share a boundary surface
6. **Glass identification** — Match nd/vd pairs against catalogs (OHARA, SCHOTT, HOYA, Sumita). Note when matches are uncertain
7. **Focal length** — Use the patent's stated EFL, or compute from the prescription via paraxial ray trace
8. **F-number** — Use the patent's stated f-number. If the patent gives the stop diameter, compute `f/# = EFL / (2 × EP_SD)`

---

## Example: Minimal All-Spherical Singlet

```javascript
const LENS_DATA = {
  key:      "example-singlet",
  name:     "Example Singlet 50mm f/4",
  elements: [
    { id: 1, name: "L1", label: "Element 1", type: "Biconvex Positive", nd: 1.51633, vd: 64.06, fl: 50.0, glass: "N-BK7" },
  ],
  surfaces: [
    { label: "STO", R:  1e15,   d: 1.0,  nd: 1.0,     elemId: 0, sd: 6.25 },
    { label: "2",   R:  25.84,  d: 5.0,  nd: 1.51633,  elemId: 1, sd: 7.0  },
    { label: "3",   R: -25.84,  d: 44.0, nd: 1.0,      elemId: 0, sd: 7.0  },
  ],
  asph:         {},
  var:          { "3": [44.0, 42.0] },
  varLabels:    [["3", "BF"]],
  groups:       [],
  doublets:     [],
  closeFocusM:  0.45,
  nominalFno:   4.0,
  fstopSeries:  [4, 5.6, 8, 11, 16, 22],
  scFill:       0.50,
  yScFill:      0.30,
};
export default LENS_DATA;
```
