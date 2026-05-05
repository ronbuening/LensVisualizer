# Audit Log — Minolta Varisoft Rokkor 85mm f/2.8

Patent: US 4,124,276A, Embodiment 3

## 2026-05-05 — Focus mechanism correction

### Retained-information audit

| Surface / field | Before | After | Justification |
|---|---:|---:|---|
| `var["11"]` / BFD | `[64.427, 45.478]` | removed from focus variation | The patent describes focus as Group AI alone shifting forward to vary `d_A7`; AII, B, and image-side BFD remain fixed during focus. |
| `varLabels` | `D(A7)`, `BF` | `D(A7)` | BFD is not a focus-variable spacing for Embodiment 3. |

### Notes

- Rechecked the patent text around Table 6, FIG. 8, and FIG. 28. During focusing, sub-group AI shifts forward and changes `d_A7`; soft-focus adjustment is the separate operation that changes `d_B0`.
- With BFD held at the corrected infinity value of 75.80 mm patent scale and `d_A7 = 13.45`, the paraxial magnification is approximately `-0.110`, matching the patent's FIGS. 10a/10b close-focus condition.
- Added `__tests__/minoltaVarisoftFocus.test.ts` to lock the fixed-image-plane behavior: AI moves objectward, AII/B remain fixed, `d_B0` remains fixed, and BFD remains fixed.
