# Audit Log - PENTAX SUPER-TAKUMAR 135mm f/2.5

Patent: US 3,459,469, Example 1

## 2026-08-08 - Screenshot-driven diagram follow-up

- Compared the supplied site screenshot against a 250 dpi render of Figure 1. The earlier L4/L5 enlargement remains
  supported: all five normalized element-height ratios remain between `0.98` and `1.01`, so no further SD change was
  made.
- Added patent identifiers `L1-L5` as diagram labels instead of exposing internal numeric element IDs.
- Rechecked the visible glass tags, `D1` label, stop, pupils, image-plane marker, period display name, and headline
  specifications. All five elements now have trusted coefficient-backed dispersion, including the recovered Sumita SK1
  curve used for L3.
- Local viewer QA confirmed all five element labels and the retained silhouette without diagram errors.
- `npm run generate:glass-reports` passed (8 files, 14 tests); the image-circle audit, typecheck, format check, lint,
  2,947-test suite, and production build also passed (1,052 routes prerendered).

## 2026-08-08 - Glass-source follow-up

- Rechecked every unresolved coordinate in the six-lens Pentax batch against the available current and discontinued
  OHARA, HOYA, HIKARI, SCHOTT, CDGM, and SUMITA records. The remaining rows expose only non-exact or non-unique nearby
  glasses, so their explicit unmatched classifications remain unchanged.
- Recovered the legacy SUMITA SK1 six-term Schott-form polynomial from AbbeTrex. Its evaluated
  `nC/nd/nF/ng = 1.606981/1.610249/1.617781/1.623700` reproduces the archival manufacturer table's
  `1.60698/1.61025/1.61778/1.62370` line-index row.
- Added SK1 to the coefficient catalog and classified L3 as a SUMITA catalog equivalent while leaving the production
  supplier unspecified. The lens is now 5/5 strict and trusted dispersion-covered.

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
