# Standalone Lens Data Validator

**Share this package with another Claude instance to validate lens data (SDs) before final submission.**

This is a portable validator for **LensVisualizer** lens data — it checks optical and structural correctness without requiring the full LensVisualizer codebase.

## Files

| File | Purpose |
|------|---------|
| `lens-validator.js` | Core validator — self-contained, no dependencies |
| `VALIDATOR_GUIDE.md` | Comprehensive usage guide (read this first) |
| `example-validation.md` | Real examples: valid lenses + error cases |
| `validate-example.js` | Quick test: run with `node validate-example.js` |
| `lens-defaults.json` | Reference copy of default field values |
| `README.md` | This file |

## Quick Start

### Node.js
```bash
node validate-example.js  # Run example test
```

Then use in your own code:
```javascript
import { validateLensData } from "./lens-validator.js";

const errors = validateLensData(lensData);
if (errors.length === 0) console.log("✓ Valid!");
else errors.forEach(e => console.log("✗", e));
```

### Browser
```html
<script type="module">
  import { validateLensData } from "./lens-validator.js";

  const errors = validateLensData(lensData);
  console.log(errors);
</script>
```

## What It Validates

✓ **Required fields** — all present and finite
✓ **Surface structure** — unique labels, one STO, valid elemId references
✓ **Element structure** — unique IDs, each element has surfaces
✓ **Optical geometry (SDs)** — edge thickness, SD ratios, gap overlaps
✓ **Aspherical fields** — references valid surfaces
✓ **Variable gaps** — consistent spacing at zoom positions
✓ **Zoom lenses** — nominalFno and zoomPositions match

## How to Use This with Another Claude

1. **Share this folder** with the other Claude instance
2. They load the validator and your raw lens data
3. They run validation and send you the error report
4. You fix any issues and iterate

Example usage for the other instance:
```javascript
const { validateLensData } = require("./lens-validator.js");

// Load lens-defaults.json and merge with your raw data
const lensData = { ...defaults, ...rawLensData };

// Validate
const errors = validateLensData(lensData);
console.log(`Result: ${errors.length} errors`);
errors.forEach(e => console.log("  -", e));
```

## Integration with LensVisualizer

Once validation passes, add your lens to the main repo:

1. Create `src/lens-data/YourLens.data.ts` with the lens data
2. Run full project checks:
   ```bash
   npm run typecheck && npm run format:check && npm run lint && npm run test
   ```
3. Load in dev server to verify rendering:
   ```bash
   npm run dev  # http://localhost:5173
   ```

## Error Interpretation

See **example-validation.md** for:
- Valid lens examples ✓
- Negative edge thickness ✗
- SD ratio violations ✗
- Air gap overlaps ✗
- Missing/duplicate fields ✗
- Zoom lens issues ✗

Each example shows the error message and how to fix it.

## Field Reference

### Required (must be in every lens)
- `key` (string) — unique identifier
- `name` (string) — display name
- `nominalFno` (number or number[]) — f-number (array for variable-aperture zooms)
- `closeFocusM` (number) — minimum focus distance (meters)
- `yScFill` (number) — vertical fill fraction (0–1)
- `elements` (array) — glass elements
- `surfaces` (array) — optical surfaces with SDs
- `fstopSeries` (array) — f-stop buttons

### Defaults (merged automatically)
- `svgW: 1080`, `svgH: 490` — viewport dimensions
- `scFill: 0.55` — horizontal fill fraction
- `focusStep: 0.004`, `apertureStep: 0.004`
- `maxFstop: 16`
- `rayFractions`, `offAxisFractions` — ray fan heights
- `rayLeadFrac: 0.35`, `lensShiftFrac: 0.08`
- `offAxisFieldFrac: 0.60`
- `clipMargin: 1.0`, `maxRimAngleDeg: 40`
- `gapSagFrac: 0.90`, `maxAspectRatio: 1.6`

See `lens-defaults.json` for complete reference.

## Common SD Issues

**Negative edge thickness?**
- Surfaces overlap at the rim → reduce SD or increase gap thickness `d`

**SD ratio > 1.25?**
- Front/rear SDs too different → make them more similar

**Air gap overlap?**
- Combined sag exceeds gap thickness → increase `d` or reduce SD

**SD/|R| > 0.9?**
- Risk of total internal reflection and rendering artifacts → reduce SD

## Contact

- **Validator issues** — This is a reference implementation of `src/optics/validateLensData.ts`
- **Lens data spec** — See `src/lens-data/LENS_DATA_SPEC.md` in main repo
- **Adding lenses** — See `agent_docs/adding_a_lens.md` in main repo

---

**Version:** 1.0 (matches LensVisualizer main branch)
**Updated:** 2026-03-27
