# Audit Log - Pentax HD D FA645 35mm f/3.5 AL [IF]

Patent: US 2001/0007512 A1, Embodiment 4

## 2026-07-28 - Integration, semi-diameter, and glass audit

### Patent evidence

- Reviewed the ignored local source `patents/US20010007512A1.pdf`.
- Compared the prescription with Figure 13 on PDF page 8.
- The patent does not publish clear-aperture values, glass names, line indices, or partial-dispersion data.

### Identity correction

- Normalized the display name from `PENTAX HD PENTAX-D ...` to the repository form
  `PENTAX HD D FA645 35mm f/3.5 AL [IF]`.

### Semi-diameter corrections

| Surface set | Before | After | Justification |
|---|---|---|---|
| 1 / 2 | 20.0 / 16.6 mm | 26.8 / 20.8 mm | Restores the large front negative meniscus in Figure 13; surface 2 remains below the rim-slope limit. |
| 3 / 4 / 5A | 14.0 / 12.6 / 12.6 mm | 20.3 / 18.3 / 13.4 mm | Restores the hybrid substrate outline while capping 5A below its K=+1 conic and rim-slope limits. |
| 6-12 | 12.5-13.2 mm | 17.5-18.8 mm | Restores the broad fixed front group and its patent-figure taper. |
| 13-15 | 12.3 mm | 12.4 mm | Small outline alignment for the first moving doublet. |
| 16 / 17 / 18 / 19A | 9.7 / 9.7 / 9.7 / 10.0 mm | 10.5 / 10.5 / 10.2 / 10.5 mm | Aligns the compact rear pair with Figure 13. |

The revised surfaces pass the conic-domain, rim-slope, element-edge, cross-gap, render-trim, and image-circle gates at
both authored focus endpoints.

### Glass disposition

- The catalog resolver covers 9/11 material layers.
- The bonded synthetic resin remains intentionally Abbe-modeled.
- L10 at 1.58636 / 60.9 remains explicitly unmatched. Nearby barium-crown catalog rows are not exact enough to justify
  a coefficient-backed identity.

### Verification

- `npm run audit:surface -- src/lens-data/pentax/PentaxDFA64535mmf35AL.data.ts` - passed.
- `npm run audit:image-circle -- src/lens-data/pentax/PentaxDFA64535mmf35AL.data.ts` - passed.
- `npm test -- dispersion.test.ts` - passed (49 tests).
- `npm run generate:glass-reports` - passed (7 report tests).
- `npm run typecheck && npm run format:check && npm run lint && npm run test` - passed (2450 tests; lint retained
  three unrelated pre-existing warnings).
- `npm run build` - passed; 963 routes prerendered.
