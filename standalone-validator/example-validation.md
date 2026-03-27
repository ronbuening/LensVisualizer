# Example: Validating Lens Data

This document shows how to use the validator and what successful/failed validation looks like.

## Example 1: Valid Lens Data

**Input:**
```javascript
const exampleLens = {
  key: "test-nokton-50",
  name: "TEST: Nokton-style 50mm f/1.0",
  nominalFno: 1.0,
  closeFocusM: 0.4,
  scFill: 0.55,
  yScFill: 0.35,
  svgW: 1080,
  svgH: 490,
  fstopSeries: [1.0, 1.4, 2.0, 2.8, 4, 5.6, 8],
  focusStep: 0.004,
  apertureStep: 0.004,
  maxFstop: 16,
  rayFractions: [-0.83, -0.50, -0.17, 0.17, 0.50, 0.83],
  rayLeadFrac: 0.35,
  offAxisFieldFrac: 0.60,
  offAxisFractions: [-0.75, -0.375, 0, 0.375, 0.75],
  clipMargin: 1.0,
  maxRimAngleDeg: 40,
  gapSagFrac: 0.90,
  maxAspectRatio: 1.6,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.9,
      vd: 35,
      fl: 120,
      glass: "LaSF35",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 50,
      fl: 85,
      glass: "BK7",
    },
  ],

  surfaces: [
    { label: "1", R: 85.3, d: 8.5, nd: 1.9, elemId: 1, sd: 16 },
    { label: "2", R: -152.4, d: 1.2, nd: 1.0, elemId: 0, sd: 15.8 },
    { label: "3", R: 52.1, d: 6.2, nd: 1.72, elemId: 2, sd: 14.5 },
    { label: "STO", R: 1e15, d: 3.0, nd: 1.0, elemId: 0, sd: 12 },
    { label: "4", R: -80.5, d: 40, nd: 1.0, elemId: 0, sd: 11.5 },
  ],

  asph: {},
  var: {},
  varLabels: [],
  groups: [],
  doublets: [],
};

const errors = validateLensData(exampleLens);
```

**Output:**
```
✓ Lens data is valid!
(0 errors)
```

---

## Example 2: Invalid — Negative Edge Thickness

**Problem:** Element 1's front surface (R=85) and rear surface (R=-152) have SDs that are too different, and the gap is too small. Surfaces cross at the rim.

**Modified lens:**
```javascript
const badLens = {
  // ... same as above, but change surface 1 and 2:
  surfaces: [
    { label: "1", R: 85.3, d: 0.5, nd: 1.9, elemId: 1, sd: 30 },  // ← very large SD
    { label: "2", R: -152.4, d: 0.1, nd: 1.0, elemId: 0, sd: 25 }, // ← small gap d
    // ... rest unchanged
  ],
};

const errors = validateLensData(badLens);
```

**Output:**
```
✗ Found 2 error(s):
  - Element 1 ("L1"): negative edge thickness (-2.341 mm) at sd=25
    — surfaces "1" / "2" cross at the rim
  - Air gap "1"→"3": combined surface sag (3.2 mm) exceeds gap thickness
    (0.1 mm) at sd=25 — elements will overlap in rendering
```

**How to fix:**
1. Increase gap thickness: change `d: 0.1` to `d: 3.0`
2. Or lower SD on surface 1: change `sd: 30` to `sd: 18`
3. Or both

---

## Example 3: Invalid — Duplicate Surface Label

**Modified lens:**
```javascript
const badLens = {
  // ... same as above, but duplicate a label:
  surfaces: [
    { label: "1", R: 85.3, d: 8.5, nd: 1.9, elemId: 1, sd: 16 },
    { label: "1", R: -152.4, d: 1.2, nd: 1.0, elemId: 0, sd: 15.8 }, // ← duplicate!
    { label: "3", R: 52.1, d: 6.2, nd: 1.72, elemId: 2, sd: 14.5 },
    { label: "STO", R: 1e15, d: 3.0, nd: 1.0, elemId: 0, sd: 12 },
    { label: "4", R: -80.5, d: 40, nd: 1.0, elemId: 0, sd: 11.5 },
  ],
};

const errors = validateLensData(badLens);
```

**Output:**
```
✗ Found 1 error(s):
  - Duplicate surface label: "1"
```

**How to fix:** Use unique labels: "1", "2", "3", "STO", "4", etc.

---

## Example 4: Invalid — Missing STO Surface

**Modified lens:**
```javascript
const badLens = {
  // ... same as above, but remove STO:
  surfaces: [
    { label: "1", R: 85.3, d: 8.5, nd: 1.9, elemId: 1, sd: 16 },
    { label: "2", R: -152.4, d: 1.2, nd: 1.0, elemId: 0, sd: 15.8 },
    { label: "3", R: 52.1, d: 6.2, nd: 1.72, elemId: 2, sd: 14.5 },
    // STO removed!
    { label: "4", R: -80.5, d: 40, nd: 1.0, elemId: 0, sd: 11.5 },
  ],
};

const errors = validateLensData(badLens);
```

**Output:**
```
✗ Found 1 error(s):
  - No surface with label "STO" found
```

**How to fix:** Add STO surface. Every lens must have exactly one aperture stop:
```javascript
{ label: "STO", R: 1e15, d: 3.0, nd: 1.0, elemId: 0, sd: 12 },
```

---

## Example 5: Invalid — Missing Required Fields

**Modified lens:**
```javascript
const badLens = {
  // key: removed!
  name: "Bad Lens",
  nominalFno: 2.0,
  // ... other fields
};

const errors = validateLensData(badLens);
```

**Output:**
```
✗ Found 6 error(s):
  - Missing or empty required string field: "key"
  - Missing or non-finite required number field: "closeFocusM"
  - Missing or non-finite required number field: "focusStep"
  - Missing or non-finite required number field: "maxFstop"
  - Missing or non-finite required number field: "apertureStep"
  - (... and 8 more required fields)
```

**How to fix:** Include all required fields. Use defaults for most:
```javascript
const DEFAULTS = {
  svgW: 1080,
  svgH: 490,
  focusStep: 0.004,
  apertureStep: 0.004,
  maxFstop: 16,
  rayFractions: [-0.83, -0.50, -0.17, 0.17, 0.50, 0.83],
  rayLeadFrac: 0.35,
  offAxisFieldFrac: 0.60,
  offAxisFractions: [-0.75, -0.375, 0, 0.375, 0.75],
  scFill: 0.55,
  clipMargin: 1.0,
  maxRimAngleDeg: 40,
  gapSagFrac: 0.90,
  maxAspectRatio: 1.6,
};

const lensData = { ...DEFAULTS, ...myRawData };
const errors = validateLensData(lensData);
```

---

## Example 6: Valid Zoom Lens

**Zoom lenses** have multiple focal lengths and can have variable aperture:

```javascript
const zoomLens = {
  key: "test-zoom-70-200",
  name: "TEST: Zoom 70-200mm f/2.8-4.0",
  nominalFno: [2.8, 4.0], // ← array (one per zoom position)
  zoomPositions: [70, 200], // ← focal lengths
  zoomLabels: ["Wide", "Tele"],
  zoomStep: 0.004,
  closeFocusM: 1.5,

  // ... other required fields (same as prime lenses)

  elements: [
    { id: 1, name: "L1", label: "Element 1", nd: 1.8, vd: 40, fl: 60, glass: "SF6" },
    { id: 2, name: "L2", label: "Element 2", nd: 1.6, vd: 60, fl: 200, glass: "BK7" },
  ],

  surfaces: [
    { label: "1", R: 80, d: 6, nd: 1.8, elemId: 1, sd: 20 },
    { label: "STO", R: 1e15, d: 5, nd: 1.0, elemId: 0, sd: 15 }, // ← variable
    { label: "2", R: -120, d: 40, nd: 1.0, elemId: 0, sd: 12 },
  ],

  var: {
    // Variable spacing at different zoom positions
    STO: [
      [5, 8],   // at 70mm: 5mm at ∞, 8mm at close focus
      [2, 5],   // at 200mm: 2mm at ∞, 5mm at close focus
    ],
  },
};

const errors = validateLensData(zoomLens);
```

**Output:**
```
✓ Zoom lens data is valid!
(0 errors)
```

---

## Validation Checklist

Before submitting your lens data:

- [ ] All required fields present and non-empty
- [ ] All numeric fields are finite (no NaN or Infinity)
- [ ] Surface labels are unique
- [ ] Exactly one "STO" surface exists
- [ ] Element IDs are unique
- [ ] Surface `elemId` values reference valid elements or 0 (air)
- [ ] Every element has at least one surface
- [ ] No negative edge thickness (surfaces don't cross)
- [ ] SD ratios ≤ 1.25 within elements
- [ ] SD/|R| ratios < 0.9 to avoid TIR
- [ ] No air gap overlap (combined sag < gap thickness)
- [ ] Zoom fields consistent (if applicable)
- [ ] Aspherical coefficients reference real surfaces
- [ ] Variable gap labels reference real surfaces

Run validator to verify all checks:
```javascript
const errors = validateLensData(lensData);
if (errors.length === 0) console.log("✓ Ready to submit!");
```

---

**Next:** Load into LensVisualizer dev server and verify visual rendering!
