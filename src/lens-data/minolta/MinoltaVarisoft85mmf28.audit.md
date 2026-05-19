# Audit Log — Minolta Varisoft Rokkor 85mm f/2.8

Patent: US 4,124,276A, Embodiment 3

## 2026-05-05 — Soft-focus ring modeling

### Retained-information audit

| Surface / field | Before | After | Justification |
|---|---:|---:|---|
| `aberrationControl.var["9"]` / `d_B0` | not modeled | `[2.074, 6.962]` | The patent describes `d_B0` as the independent aberration-control spacing. Values are Table 6 sharp #0 and FIG. 11 maximum-soft #3, scaled from f=100 patent scale to 85 mm production scale. |
| `aberrationControl.var["11"]` / BF | not modeled | `[64.427, 53.951]` | The image-side spacing compensates the infinity-focus state when `d_B0` is opened to the FIG. 11 condition. |

### Notes

- Added a generic `aberrationControl` lens-data field so future soft-focus or spherical-aberration-control lenses can declare independent variable air spaces without overloading focus `var`.
- Wired the control through layout, cardinal readouts, ray tracing, URL state, reducer state, and the diagram control panel.
- Added regression coverage for the SOFT slider endpoints and its independence from the focus gap `d_A7`.

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

## 2026-05-19 — Six-digit missing-Sellmeier follow-up

### Patent evidence

- Rechecked the local `patents/US4124276.pdf` file. Table 6 / Embodiment 3 lists L1 at nd=1.74950 and vd=50.1, L3 at nd=1.54072 and vd=46.8, and L6 at nd=1.57616 and vd=41.4.
- These are the source rows for the existing L1 / `749501`, L3 / `541468`, and L6 / `576414` annotations.

### Catalog-search disposition

- Public manufacturer catalog and refractiveindex.info searches did not turn up coefficient-backed exact matches for `749501`, `541468`, or `576414`.
- Near-family glass names were rejected because the Abbe values or index pairs would imply a false supplier identity.

### Changes made

- Kept all three rows unresolved, but changed their labels to unbroken six-digit codes with explicit class notes for future auto-upgrade scanning.
- Updated the analysis glass table and chromatic discussion to match the unresolved-code disposition.
