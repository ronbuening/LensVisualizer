# Audit Log - Pentax SMC DA 17-70mm f/4 AL [IF] SDM

Patent: US 7,804,652 B2, Embodiment 4

## 2026-07-28 - Integration, semi-diameter, and glass audit

### Patent evidence

- Reviewed the ignored local source `patents/US7804652.pdf`.
- Compared the prescription with Figure 13 on PDF page 8.
- The patent does not publish clear-aperture values, glass names, line indices, or partial-dispersion data.

### Identity correction

- Normalized the display name from `PENTAX SMC PENTAX-DA ...` to the repository form
  `PENTAX SMC DA 17-70mm f/4 AL [IF] SDM`.

### Semi-diameter corrections

| Surface set | Before | After | Justification |
|---|---|---|---|
| 4 / 5 (isolated L3) | 21.0 / 19.6 mm | 15.0 / 14.0 mm | Restores the distinctly smaller third front element shown in Figure 13. |
| 26 / 27 / 28A / 29 / 30 / 31 (rear G5) | 9.4 / 9.6 / 9.6 / 9.6 / 9.7 / 9.9 mm | 11.0 / 11.2 / 11.2 / 11.2 / 11.3 / 11.5 mm | Restores the fuller rear-group outline shown in Figure 13. |

The revised values retain the authored axial and 0.60-field rendered rays at wide, middle, and tele states and pass
the surface-geometry and image-circle gates.

### Glass disposition

| Element | Patent coordinate | Result |
|---|---|---|
| L2 | 1.71300 / 53.9 (`713539`) | Added HOYA LAC8 as an exact code-equivalent formula-3 catalog source; this also represents the S-LAL8 class without asserting the patent vendor. |
| L4r / L16r | Resin rows | Remain Abbe-modeled; neither is an optical-glass catalog identity. |

The lens improves to 17/19 coefficient-backed material layers. The two remaining Abbe rows are the bonded resin
layers.

### Verification

- `npm run audit:surface -- src/lens-data/pentax/PentaxDA1770mmf4ALSDM.data.ts` - passed.
- `npm run audit:image-circle -- src/lens-data/pentax/PentaxDA1770mmf4ALSDM.data.ts` - passed.
- `npm test -- dispersion.test.ts` - passed (49 tests).
- `npm run generate:glass-reports` - passed (7 report tests).
- `npm run typecheck && npm run format:check && npm run lint && npm run test` - passed (2450 tests; lint retained
  three unrelated pre-existing warnings).
- `npm run build` - passed; 963 routes prerendered.
