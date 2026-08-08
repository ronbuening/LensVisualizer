# Audit Log - PENTAX SMC D FA645 25mm f/4 AL[IF] SDM AW

Patent: US 8,422,143 B2, Numerical Embodiment 1

## 2026-08-08 - Integration, semi-diameter, identity, and glass audit

- Reviewed Figure 1 on PDF page 2 of the ignored local patent source.
- Enlarged F3 surfaces 5/6 from `17.5/16.0` to `21.7/19.8` mm and F4-F5 surfaces 7-9 from `16.0` to `20.3` mm.
  Before correction those elements were 24-27% undersized relative to the figure's median scale; afterward F1 and
  F3-F5 all normalize to `1.00`, with no remaining material front-group shape mismatch.
- Normalized the display name from the duplicated `PENTAX SMC PENTAX-D` form to `PENTAX SMC D`.
- Confirmed coefficient-backed catalog dispersion for all 12 elements through compatible coordinate-class curves.
  Ambiguous cross-vendor candidates remain vendor-neutral; the patent does not establish a production supplier.
- `npm run audit:surface -- src/lens-data/pentax/PentaxDFA64525mmF4ALIFSDMAW.data.ts` passed.
- `npm run audit:image-circle -- src/lens-data/pentax/PentaxDFA64525mmF4ALIFSDMAW.data.ts` passed.
- `npm run audit:patent-figure -- ... patents/US8422143.pdf 2 0.14,0.38,0.64,0.77 --rot90` passed the
  post-correction proportion review.
- `npm run generate:glass-reports` passed (8 files, 14 tests).
- `npm run typecheck`, `npm run format:check`, `npm run lint`, and `npm run test` passed (2,947 tests).
- `npm run build` passed; 1,052 routes prerendered.
