# Lens Data Validator Guide

Standalone validator for **LensVisualizer** lens data files. Use this to validate SD (semi-diameter) specifications and detect structural errors before submitting final lens data.

## Quick Start

### 1. Copy the Validator
- `lens-validator.js` — standalone validator (no dependencies)
- `VALIDATOR_GUIDE.md` — this file
- `example-validation.md` — example usage and output

### 2. Use in Node.js

```javascript
import { validateLensData } from "./lens-validator.js";

// Load your lens data (with defaults merged in)
const lensData = {
  key: "my-lens-50",
  name: "My 50mm Lens",
  nominalFno: 2.0,
  closeFocusM: 0.5,
  // ... all required fields
};

// Validate
const errors = validateLensData(lensData);
if (errors.length === 0) {
  console.log("✓ Lens data is valid!");
} else {
  console.log("✗ Found", errors.length, "error(s):");
  errors.forEach((e) => console.log("  -", e));
}
```

### 3. Use in Browser

```html
<script type="module">
  import { validateLensData } from "./lens-validator.js";

  const lensData = { /* your data */ };
  const errors = validateLensData(lensData);
  console.log(errors);
</script>
```

## What Gets Validated

### Required Fields
- **Strings**: `key`, `name`
- **Numbers**: `closeFocusM`, `focusStep`, `maxFstop`, `apertureStep`, `svgW`, `svgH`, `scFill`, `yScFill`, `clipMargin`, `maxRimAngleDeg`, `gapSagFrac`, `rayLeadFrac`, `offAxisFieldFrac`, `maxAspectRatio`
- **Arrays**: `elements`, `surfaces`, `fstopSeries`, `rayFractions`, `offAxisFractions`
- **Special**: `nominalFno` (number or number[] for zooms)

### Structural Checks
- ✓ Surface labels are unique
- ✓ Exactly one "STO" (stop) surface exists
- ✓ Element IDs are unique
- ✓ All surface `elemId` references valid elements
- ✓ Every element has at least one surface
- ✓ `asph` keys reference real surface labels
- ✓ `var` keys reference real surface labels
- ✓ Zoom lens fields are consistent

### Optical/Geometry Checks (SDs)
- ✓ **Edge thickness**: Elements don't cross at the rim (negative edge thickness)
- ✓ **SD consistency**: Front/rear SD ratio ≤ 1.25 within elements
- ✓ **SD/R ratio**: `sd/|R| < 0.9` (avoids TIR and numerical instability)
- ✓ **Conic h_max**: For aspherical surfaces with K > 0, `sd < h_max * 0.98`
- ✓ **Cross-gap overlap**: Adjacent elements' sag doesn't exceed air gap thickness
- ✓ **Variable gap consistency**: At each zoom position, gaps remain physically valid

## Interpreting Errors

### Example 1: Negative Edge Thickness
```
Element 1 ("L1"): negative edge thickness (-0.523 mm) at sd=15 —
surfaces "1" / "2" cross at the rim
```
**Cause**: Front and rear surfaces curve inward so much they overlap at the edge.
**Fix**: Reduce SD values, increase gap thickness `d`, or adjust radius of curvature `R`.

### Example 2: SD Ratio Exceeds 1.25
```
Element 2 ("L2"): front/rear SD ratio 1.89 exceeds 1.25 —
surfaces "3" (sd=18) / "4" (sd=10) may cause rays outside element
```
**Cause**: Front surface is much larger than rear surface.
**Fix**: Make SDs more similar or verify rays stay within bounds.

### Example 3: Air Gap Overlap
```
Air gap "2"→"3": combined surface sag (2.1 mm) exceeds gap thickness
(0.8 mm) at sd=14 — elements will overlap in rendering
```
**Cause**: The sag intrusion from adjacent surfaces eats into the air gap.
**Fix**: Increase gap thickness `d` or reduce SD at those surfaces.

## Before Submitting to LensVisualizer

1. **Merge defaults** — Load your raw lens data and merge in `defaults.js`:
   ```javascript
   const LENS_DEFAULTS = {
     svgW: 1080,
     svgH: 490,
     focusStep: 0.004,
     apertureStep: 0.004,
     maxFstop: 16,
     rayFractions: [-0.83, -0.50, -0.17, 0.17, 0.50, 0.83],
     rayLeadFrac: 0.35,
     lensShiftFrac: 0.08,
     offAxisFieldFrac: 0.60,
     offAxisFractions: [-0.75, -0.375, 0, 0.375, 0.75],
     scFill: 0.55,
     clipMargin: 1.0,
     maxRimAngleDeg: 40,
     gapSagFrac: 0.90,
     maxAspectRatio: 1.6,
   };
   const lensData = { ...LENS_DEFAULTS, ...myRawLensData };
   ```

2. **Run the validator**:
   ```javascript
   const errors = validateLensData(lensData);
   ```

3. **Fix all errors** — Every error must be resolved before submission.

4. **Optional: Check rendering** — Load the lens into LensVisualizer's dev server:
   ```bash
   npm run dev
   # Open http://localhost:5173, select your lens from the dropdown
   # Verify it renders correctly and rays trace properly
   ```

## Lens Data Fields Quick Reference

See `LENS_DATA_SPEC.md` in `src/lens-data/` for full documentation.

### Surface Object
```javascript
{
  label: "1",           // string, unique
  R: 100,              // radius of curvature (mm)
  d: 5,                // thickness (mm)
  nd: 1.5,             // refractive index
  elemId: 1,           // element ID (0 = air gap)
  sd: 10,              // semi-diameter (mm) ← CRITICAL FOR VALIDATION
}
```

### Element Object
```javascript
{
  id: 1,               // unique integer
  name: "L1",          // short name
  label: "Element 1",  // display label
  type: "Biconvex",
  nd: 1.5,
  vd: 50,              // Abbe number
  fl: 50,              // focal length (mm)
  glass: "BK7",
}
```

## Common SD Adjustment Strategies

**Negative edge thickness?**
- Lower the SD at one or both surfaces
- Increase the gap thickness `d`
- Reduce the radius of curvature (smaller |R| = gentler curve)

**SD ratio too high?**
- Make front SD smaller
- Make rear SD larger
- Increase the element thickness `d`

**Cross-gap overlap?**
- Increase air gap thickness `d`
- Lower SD at the critical surfaces
- Check patent diagrams for accurate SD values

## Files Included

| File | Purpose |
|------|---------|
| `lens-validator.js` | Standalone validator (no deps, works in Node.js & browser) |
| `VALIDATOR_GUIDE.md` | This guide |
| `example-validation.md` | Example lens data + validation output |
| `lens-defaults.json` | Default lens field values (for reference) |

## Testing Your Validator Setup

Run the included test:
```bash
node validate-example.js
```

This validates the example lens data and prints results.

## Questions?

- Consult `src/lens-data/LENS_DATA_SPEC.md` in the main LensVisualizer repo
- Review production lenses in `src/lens-data/*.data.ts` for patterns
- Check `agent_docs/adding_a_lens.md` for detailed lens creation workflow

---

**Happy validating!** ✓
