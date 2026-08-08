# Audit Log - PENTAX SMC DA 18-55mm f/3.5-5.6 AL

Patent: US 7,307,794 B2, Numerical Embodiment 1

## 2026-08-08 - Integration, semi-diameter, identity, and glass audit

- Reviewed Figure 1 on PDF page 2 of the ignored local patent source.
- Retained the authored semi-diameters. The figure's leaders make the automated envelope unsuitable for individual
  rim fitting, and visual comparison shows the relative group silhouette already matches the patent section.
- Normalized the display name from the duplicated `PENTAX SMC PENTAX-DA` form to `PENTAX SMC DA`.
- Confirmed coefficient-backed catalog dispersion for seven of 12 glasses. The five remaining patent coordinate rows
  retain explicit unmatched dispositions because the catalog audit found no unique public coefficient-backed identity.
- `npm run audit:image-circle -- src/lens-data/pentax/PentaxDA1855mmF3556AL.data.ts` passed.
- `npm run generate:glass-reports` passed (8 files, 14 tests).
- `npm run typecheck`, `npm run format:check`, `npm run lint`, and `npm run test` passed (2,947 tests).
- `npm run build` passed; 1,052 routes prerendered.
