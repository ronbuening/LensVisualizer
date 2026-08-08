# Audit Log - PENTAX SMC DA 16-45mm f/4 ED AL

Patent: US 7,106,520 B2, Embodiment 8

## 2026-08-08 - Integration, semi-diameter, identity, and glass audit

- Reviewed Figure 29 on PDF page 16 of the ignored local patent source.
- Retained the authored semi-diameters. Figure leaders contaminate the automated envelope, while the high-resolution
  section shows no relative element-height deviation large enough to justify changing the validated ray-envelope model.
- Normalized the display name from the duplicated `PENTAX SMC PENTAX-DA` form to `PENTAX SMC DA`.
- Confirmed coefficient-backed catalog dispersion for 12 of 14 materials. L13 remains explicitly unmatched and the
  L41 hybrid layer remains resin; neither has a defensible public glass-catalog coefficient assignment.
- `npm run audit:image-circle -- src/lens-data/pentax/PentaxDA1645mmF4EDAL.data.ts` passed.
- `npm run generate:glass-reports` passed (8 files, 14 tests).
- `npm run typecheck`, `npm run format:check`, `npm run lint`, and `npm run test` passed (2,947 tests).
- `npm run build` passed; 1,052 routes prerendered.
