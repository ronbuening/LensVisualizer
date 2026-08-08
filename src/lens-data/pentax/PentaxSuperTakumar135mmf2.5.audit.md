# Audit Log - PENTAX SUPER-TAKUMAR 135mm f/2.5

Patent: US 3,459,469, Example 1

## 2026-08-08 - Integration, semi-diameter, identity, and glass audit

- Reviewed Figure 1 on PDF page 1 of the ignored local patent source.
- Enlarged L4 surfaces 6/7 from `13.5/12.3` to `19.0/17.3` mm and L5 surfaces 8/9 from `11.5` to `15.8` mm.
  Before correction their figure/data ratios were 37-41% above the lens median because the modeled SDs were too small;
  afterward every element's normalized shape ratio lies between `0.98` and `1.01`.
- Confirmed the period `PENTAX SUPER-TAKUMAR 135mm f/2.5` display name.
- Confirmed coefficient-backed catalog dispersion for four of five elements. L3 exactly matches an archival Sumita
  SK1 index/Abbe row, but no source-verified dispersion coefficients are available in the retained official catalogs;
  it therefore remains a vendor-unspecified SK1 class on the Abbe fallback rather than receiving invented provenance.
- `npm run audit:surface -- src/lens-data/pentax/PentaxSuperTakumar135mmf2.5.data.ts` passed.
- `npm run audit:image-circle -- src/lens-data/pentax/PentaxSuperTakumar135mmf2.5.data.ts` passed.
- `npm run audit:patent-figure -- ... patents/US3459469.pdf 1 0.30,0.20,0.70,0.42` passed the post-correction
  proportion review.
- `npm run generate:glass-reports` passed (8 files, 14 tests).
- `npm run typecheck`, `npm run format:check`, `npm run lint`, and `npm run test` passed (2,947 tests).
- `npm run build` passed; 1,052 routes prerendered.
