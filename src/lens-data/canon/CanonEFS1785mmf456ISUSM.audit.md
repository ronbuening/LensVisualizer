# Audit Log — CANON EF-S 17-85mm f/4-5.6 IS USM

Patent: US 2006/0023317 A1, Numerical Embodiment 1, Figure 1

## 2026-08-25 — Patent-figure SD and glass-coverage audit

### Semi-diameters

| Element / surfaces | Before | After | Justification |
|---|---:|---:|---|
| E5 / 8–9 | 8.0 / 8.5 mm | 11.8 / 12.5 mm | The 600 dpi Figure 1 optical rim measured about 12.5 mm; the earlier silhouette was roughly one-third too short after normalizing the whole-lens scale. Both surfaces were scaled together and rounded to 0.1 mm. |

- The visibly larger final G5b cemented-pair outline was retained at surfaces 28–30. Enlarging the pair to the apparent figure rim makes surfaces 28/29 cross and drives surface 29 past the valid rim-slope limit; the drawing includes a non-optical outer step at that location.
- All other figure/data differences were within normal patent-drawing noise or contaminated by group brackets, leader lines, and motion arrows.

### Glass classification

- Replaced free-text `nd/vd` descriptions with the patent-derived vendor-neutral six-digit coordinate classes for all 17 elements.
- Existing verified catalog curves resolve all 17 classes within the coordinate guard. No production supplier or melt is asserted, and no catalog tolerance was changed.

### Verification

- `npm run audit:surface -- src/lens-data/canon/CanonEFS1785mmf456ISUSM.data.ts` — passed.
- `npm run audit:image-circle -- src/lens-data/canon/CanonEFS1785mmf456ISUSM.data.ts` — passed with 0 undersized surfaces.
- `npm run generate:glass-reports` — passed; strict and trusted coverage are 17/17.

## 2026-08-25 — Screenshot and movement follow-up

- Rechecked Figure 1 at 600 dpi against the supplied site render. The current E5 correction remains source-faithful. The front rim's rectangular step is a mechanical blank rather than a larger optical aperture, and the movement arrows, group brackets, and G5b leader lines make the remaining automated overreads unsuitable for SD changes.
- Retained all current SDs. The image-circle floor and surface validator pass, and the earlier attempted G5b enlargement still fails valid edge/rim geometry.
- Confirmed wide-to-tele movement from the authored numerical gaps: L1, L3, L4, and L5 move objectward while L2 moves 1.086648 mm imageward. The constrained close-focus solution moves L2 objectward by 1.101222 mm at wide and 4.868005 mm at tele; this preserves the documented conflict with the patent prose instead of reversing the numerical solution.
- Confirmed the existing group labels, display name, IS assignment to L4a, and 17/17 strict glass coverage.
