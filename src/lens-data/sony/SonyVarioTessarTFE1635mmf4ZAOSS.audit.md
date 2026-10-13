# Audit Log — SONY VARIO-TESSAR T* FE 16-35mm f/4 ZA OSS

Patent: JP 2015-166834 A, Numerical Example 1

## 2026-10-08 — Elements e-referenced with catalog glasses

No audit log existed before this entry. It supersedes the disposition the analysis recorded until now: the printed pairs kept d-referenced, six elements on d-line proxy curves (M-TAF1, BAC4, S-FPL51 three times, J-FK5) and seven media Unmatched as "mixed-coordinate patent rows".

### Source wording

JP ¶0032 (page 8) defines `ni` as the index "ｄ線（波長５８７．６ｎｍ）に対する屈折率" of the medium behind surface i, and `νi` as its Abbe number at the d line. Table 1 (page 10) heads the two columns `ni` and `νi`. The Abbe column reads `xx.x0` in all thirteen rows, so it carries one decimal. The same thirteen index and Abbe pairs recur in Tables 5, 9, 13 and 17 (Examples 2 to 5). Example 2 adds one more element, 1.43809 / 95.00 at surface 23: HOYA FCD100 has `ne` 1.43810 and `nd` 1.43700, and lists `νd` 95.10 today.

All thirteen stored `nd` / `vd` pairs agree with Table 1. No stored number was changed.

### Match table

Vendor data checked at both lines: the HOYA Zemax catalog including obsolete types, the OHARA and SUMITA Zemax catalogs, the HIKARI 2025 table, and the site catalog (which adds SCHOTT and CDGM). A row counts as exact when its computed `ne` is within 0.00002 of the printed index and its `νd` equals the printed value at one decimal. The d-line column lists catalog rows within 0.00005 in `nd` and 2 in `νd`.

| Element | Printed n / ν | Exact e-line rows (ne, νd) | d-line rows | Label before → resolved | Label after |
|---|---|---|---|---|---|
| L11 | 1.77173 / 49.20 | HOYA M-TAF101 (1.77173, 49.24) | none | M-TAF1 → M-TAF1 at the d line | M-TAF101 |
| L12 substrate | 1.83945 / 42.70 | HOYA TAFD5F, TAFD5G (1.83945, 42.72); OHARA S-LAH55 (42.71), S-LAH55V (42.73), S-LAH55VS (42.74); HIKARI J-LASF05 (42.73) | none | Unmatched, 835427 class → none | TAFD5F |
| L12 resin | 1.53699 / 41.70 | none; nearest OHARA FTM8 at 1.53532 / 45.91 | none | Unmatched resin → none | Unmatched |
| L13, L41 | 1.80831 / 46.50 | HOYA TAF3, TAF3D (1.80831, 46.50); SCHOTT N-LASF44 (1.80832, 46.50) | none | Unmatched, 804466 class → none | TAF3 |
| L14 | 2.00912 / 29.10 | HOYA TAFD55, TAFD55-W (2.00912, 29.13); OHARA S-LAH99 (29.14); HIKARI J-LASFH16 (29.12) | none | Unmatched, 001291 class → none | TAFD55 |
| L21 | 1.57124 / 56.00 | HOYA BAC4 (1.57125, 56.04); HIKARI J-BAK4 (1.57125, 56.00); SCHOTT N-BAK4 (1.57125, 55.98) | none | BAC4 → BAC4 at the d line | BAC4 |
| L22 | 1.74688 / 49.30 | HOYA M-NBF1 (1.74689, 49.33) | none | Unmatched, 74349x class → none | M-NBF1 |
| L23 | 1.49845 / 81.50 | OHARA S-FPL51 (1.49845, 81.546); SUMITA K-PFK80 (1.49846, listed 81.50) | none | S-FPL51 → S-FPL51 at the d line | S-FPL51 |
| L31 | 1.48914 / 70.30 | HIKARI J-FK5 (1.489145, 70.31) | none | J-FK5 → J-FK5 at the d line | J-FK5 |
| L42, L43 | 1.49845 / 81.60 | HOYA FCD1 (1.49845, 81.61); CDGM H-FK61 (81.61) | none | S-FPL51 → S-FPL51 at the d line | FCD1 |
| L44 | 1.77767 / 47.10 | none; HOYA M-TAF401 has ne 1.77767 but νd 47.17 | none | Unmatched, 774472 class → none | Unmatched, M-TAF401 named as the index match |

Eleven of the thirteen rows are exact at the e line, a twelfth (L44) is exact in index only, and no row is exact at the d line. The table is e-line.

### Decisions

- All thirteen media set to `indexReference: "e"` with the printed index and Abbe number unchanged, each with an `indexReferenceNote` saying that the patent defines the column at the d line, that eleven of thirteen rows equal a catalog glass at the e line, and that the Abbe slot holds the printed d-line value. Catalog `νe` of the named glasses is 0.2 to 0.4 below the printed `νd`.
- HOYA covers nine elements (L11, L12 substrate, L13, L14, L21, L22, L41, L42, L43), so the HOYA row is used wherever several vendors share a coordinate. TAF3, TAFD5F and TAFD55 are used rather than TAF3D, TAFD5G and TAFD55-W, which share their index and Abbe number. The two moulding glasses fall on aspherical elements: M-TAF101 on L11 (surfaces 1A and 2A) and M-NBF1 on L22 (surface 13A).
- L23 is OHARA S-FPL51 and L42 and L43 are HOYA FCD1. The patent prints 81.50 for L23 and 81.60 for the other two at the same index; S-FPL51 lists 81.546 and FCD1 lists 81.61. L42 and L43 were labelled S-FPL51 before.
- L31 stays HIKARI J-FK5 (70.31). No HOYA or OHARA row equals 70.3 at one decimal: HOYA FC5 lists 70.44, OHARA S-FSL5 70.24 and S-FSL5Y 70.354.
- L11 changes from M-TAF1 to M-TAF101. M-TAF1 was a d-line proxy 0.00077 off in index; its `ne` is 1.77622.
- L44 stays Unmatched. M-TAF401 is the only catalog row at its index, and L44 is a double-sided asphere, but 47.17 does not equal the printed 47.10 at one decimal. Two readings would reconcile it and neither is shown by this table. A column truncated to one decimal would print 47.1 and would still agree with the other eleven rows, whose second decimals are all below 5, so L44 is the only row that could show the difference. Or the patent used an earlier HOYA listing: Example 2's FCD100 row prints 95.00 against today's 95.10. The candidate is named in the `glass` string after the word Unmatched.
- The L12 resin row sits in the same column, shares the e reference and stays Unmatched.
- The file has no `rearPlates`; Example 1 lists no cover glass or filter rows.
- Every chosen name is already in the site catalog and resolves at the e line. No catalog file was touched.

### Effect on the model

- Dispersion tiers by surface: 6 on catalog curves and 7 on the Abbe estimate before; 11 and 2 after (the resin surface 4 and L44's surface 23A).
- Wide-state paraxial focus against the green channel: red +16.6, blue +16.2, violet +69.4 µm before, with the reference trace −744.3 µm from green because the six resolved d-referenced elements traced green at the catalog `nd` instead of the stored index. After: red +15.2, blue +2.6, violet +15.4 µm, and the reference trace coincides with green (0.0 µm).
- The reference trace is unchanged: EFL 16.4813 / 24.0689 / 33.9549 mm, wide F/4.07, and every other built quantity is identical before and after.

### Follow-ups

- L44: decide whether an index-only match is accepted for M-TAF401. Naming it would move the wide-state foci to red +13.1, blue +2.3, violet +12.6 µm and leave only the resin on the Abbe estimate.

## 2026-10-08 — Integration: L44 named M-TAF401

The section above left L44 Unmatched and asked whether an index-only match is accepted. It is: M-TAF401 is the only catalog row at L44's index (catalog ne 1.777672 against the printed 1.77767), it is a HOYA moulding glass and L44 is the lens's double-sided glass asphere, and the Abbe difference is 0.07 (47.17 against a column printed to one decimal as 47.1). Both explanations offered above, a truncated column or an earlier HOYA listing, name the same glass. The label states the residual.

Twelve of thirteen surfaces now trace on catalog curves; the L12 resin stays on the Abbe estimate. Wide-state paraxial focus against green: R +13.1, B +2.3, V +12.6 µm (with L44 on the Abbe estimate: +15.2, +2.6, +15.4). The reference trace is unchanged.
