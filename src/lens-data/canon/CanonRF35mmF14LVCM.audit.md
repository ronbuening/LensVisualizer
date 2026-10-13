# Audit Log - CANON RF 35mm f/1.4 L VCM

Patent: US 2024/0302626 A1, Numerical Example 2 / Figure 4

## 2026-08-20 - Patent-figure, identity, and glass audit

### Semi-diameter review

- Inspected PDF page 4, Figure 4, at 600 dpi with `audit:patent-figure`; the calibrated figure scale was 34.13 µm/px.
- The reliable optical-rim rows have a median figure/data ratio of 1.043. Every element is within 13.4% of the figure and the small offset is effectively uniform.
- Retained all surface and stop semi-diameters because no element exceeds the strong figure-evidence threshold. `audit:image-circle` reports zero undersized surfaces and `audit:surface` reports no geometry violations.

### Glass classification

- Confirmed all 14 elements retain coordinate-compatible catalog proxies and coefficient-backed dispersion.
- The patent does not identify production suppliers, so the proxy labels remain qualified and no new catalog row is justified.

### Identity and metadata

- Verified the display name `CANON RF 35mm f/1.4 L VCM` against Canon's `RF35mm F1.4 L VCM` product name and repository spacing conventions.
- Normalized the structured assignee to the repository-wide `Canon Inc.` spelling.

## 2026-08-20 - Screenshot, movement, and chromatic follow-up

- Rechecked Figure 4 at 600 dpi after reviewing the site screenshot. The median figure/data ratio remains 1.043 and all clean comparisons remain within 13.4%, so no additional SD adjustment was justified.
- Labeled patent units B2 and B4 as objectward focus units, matching the published direction. Example 2 supplies no numerical focus travel, so focus animation remains intentionally unavailable; the prime also exposes no zoom travel.
- Confirmed 14/14 strict Sellmeier coverage and zero catalog mismatches. Added inferred special-element tags to L8 and L10, matching Canon's two-UD production count without converting the coordinate proxies into supplier identities.

## 2026-09-25 — MTF image-plane census

Visually inspected `patents/US20240302626A1.pdf`, ¶0078–0083 and Numerical Example 2 Tables 3–4 on PDF pp. 15–17. All 25 powered radii, 14 nd/νd pairs, spacings and three K/A4–A14 sets match. Used Table 4’s higher-precision base radii 32.17448, 89.50277 and −56.11754 as already authored. Inactive flare cuts S10 and S19 combine air-only gaps to 3.800 and 0.758 mm. No scale, plate or published numerical close-focus row.

Source BF=15.444 is the final S28 distance; ¶0079 explicitly defines BF to the paraxial image plane in air-equivalent length. Independent trace gives EFL 33.942091880 versus 34.0, BFL 15.360904237 versus 15.444, and optical surface track 103.102 versus printed 103.101 mm. No single supported emendation reconciles the discrepancies.

For the under-0.1 mm best-focus check, reference-index geometric axial MTF (32 grid, 812 rays, 10/20/40 lp/mm) prefers −0.092714 mm shift, score 0.232316→0.991051. This reinforces that the authored plane is not the modeled axial optimum; it cannot establish the designer’s full-field merit function. The source’s explicit paraxial definition rules out asserting designer best focus as the cause.

**Cause/action:** source paraxial inconsistency; retain values. Offset **−0.083096 → −0.083096 mm**; Section E row deleted, no numerical change/changelog.

Validation: focused runtime/paraxial check; full corpus gates at the ten-lens checkpoint.

## 2026-10-08 - dPgF moved to the engine's normal line

- Patent formula: none. Read every page of the local `patents/US20240302626A1.pdf` (20 scanned pages). The patent states no partial-dispersion ratio, deviation or normal line. ¶0078 (PDF page 15, printed page 5) defines only `νd = (Nd − 1)/(NF − NC)`. Inequalities (1)–(8), (1a)–(8a) and (1b)–(8b) (PDF pages 12–14) and claims 1–20 (PDF pages 18–20) are focal-length, spacing and thickness ratios. ¶0065 (PDF page 14) calls for a material with "high anomalous dispersion" in words only.
- Printed partial dispersion for Numerical Example 2: none. Table 3 (PDF page 16) carries r, d, nd, νd and Φ; Table 9 (PDF page 18) lists the eight ratios only. No element has a patent PgF / θgF or a patent deviation.
- What the stored values were: the vendor catalogs' own ΔPgF figures for the coordinate proxies. The local `tmp/pdfs/ohara-260701/OHARA_260701.AGF` and `tmp/pdfs/HOYA20260707_include_obsolete.agf` list exactly the eleven stored numbers (S-BAL42 −0.0020, S-BSL7 −0.0024, S-LAH96 −0.0041, S-NBH56 +0.0109, S-FPM2 +0.0123, S-FPL51 +0.0280, S-LAH65VS −0.0085, S-NBM51 −0.0065; TAFD40 +0.0111, NBFD29 +0.0003, TAFD55 +0.0036). Each vendor quotes that figure against its own normal line, not the engine's `0.6438 − 0.001682·νd`: the three HOYA figures fit `0.64833 − 0.0018·νd`, and the eight OHARA figures fit the line through OHARA's NSL7 and PBM2 reference glasses (about `0.64146 − 0.001618·νd`), each returning the repo catalog-curve PgF within 0.0001. Read on the engine line, the stored S-FPL51 value meant PgF 0.5346 against 0.5386 from the element's own indices.
- Rule applied: all 14 elements author `nC`, `nF` and `ng`, so the trace uses those indices and `dPgF` is an annotation. With no patent figure, each value is now `PgF = (ng − nF)/(nF − nC)` of the element's own authored indices minus `0.6438 − 0.001682·νd`, to six decimals.

| Element | νd | Source figure | Stored before | Stored after |
| --- | ---: | --- | ---: | ---: |
| L1 | 59.38 | Patent prints none; own nC/nF/ng 1.58014 / 1.58996 / 1.59530 give PgF 0.543788 (OHARA S-BAL42 catalog ΔPgF −0.0020 on OHARA's line) | −0.002 | −0.000135 |
| L2 | 64.14 | Patent prints none; own 1.51386 / 1.52191 / 1.52621 give PgF 0.534161 (S-BSL7 catalog ΔPgF −0.0024) | −0.0024 | −0.001755 |
| L3 | 48.49 | Patent prints none; own 1.75913 / 1.77488 / 1.78369 give PgF 0.559365 (S-LAH96 catalog ΔPgF −0.0041) | −0.0041 | −0.002875 |
| L4 | 24.80 | Patent prints none; own 1.84488 / 1.87935 / 1.90045 give PgF 0.612126 (S-NBH56 catalog ΔPgF +0.0109) | 0.0109 | 0.010040 |
| L5 | 25.46 | Patent prints none; own 1.98941 / 2.02872 / 2.05284 give PgF 0.613584 (HOYA TAFD40 catalog ΔPgF +0.0111 on HOYA's line) | 0.0111 | 0.012608 |
| L6 | 67.74 | Patent prints none; own 1.59255 / 1.60134 / 1.60612 give PgF 0.543800 (S-FPM2 catalog ΔPgF +0.0123) | 0.0123 | 0.013938 |
| L7 | 29.74 | Patent prints none; own 1.76293 / 1.78884 / 1.80426 give PgF 0.595137 (HOYA NBFD29 catalog ΔPgF +0.0003) | 0.0003 | 0.001360 |
| L8 | 81.54 | Patent prints none; own 1.49514 / 1.50123 / 1.50451 give PgF 0.538588 (S-FPL51 catalog ΔPgF +0.0280) | 0.028 | 0.031938 |
| L9 | 29.74 | Same indices as L7; PgF 0.595137 | 0.0003 | 0.001360 |
| L10 | 81.54 | Same indices as L8; PgF 0.538588 | 0.028 | 0.031938 |
| L11 | 46.53 | Patent prints none; own 1.79882 / 1.81610 / 1.82573 give PgF 0.557292, engine-line value −0.008245 (S-LAH65VS catalog ΔPgF −0.0085) | −0.0085 | −0.0085 (unchanged) |
| L12 | 29.13 | Patent prints none; own 1.99105 / 2.02540 / 2.04600 give PgF 0.599709 (HOYA TAFD55 catalog ΔPgF +0.0036) | 0.0036 | 0.004906 |
| L13 | 29.74 | Same indices as L7; PgF 0.595137 | 0.0003 | 0.001360 |
| L14 | 44.27 | Patent prints none; own 1.60925 / 1.62311 / 1.63091 give PgF 0.562771, engine-line value −0.006567 (S-NBM51 catalog ΔPgF −0.0065) | −0.0065 | −0.0065 (unchanged) |

- Left as stored: L11 and L14. Their catalog figures already sit within 0.0003 of the engine-line value of their own indices (0.000255 and 0.000067 away), so they keep their four-decimal values and were not re-rounded.
- Precision caveat: the authored indices are five-decimal catalog values, so `nF − nC` as small as 0.00609 (S-FPL51) leaves the derived PgF uncertain by roughly ±0.001. Cross-check only, not a source: the repo catalog curves for the same labels give engine-line values of −0.000493 (S-BAL42), −0.000632 (S-BSL7), −0.003285 (S-LAH96), +0.010203 (S-NBH56), +0.012639 (TAFD40), +0.014375 (S-FPM2), +0.001338 (NBFD29), +0.030810 (S-FPL51), −0.007805 (S-LAH65VS), +0.004690 (TAFD55) and −0.005966 (S-NBM51), all within 0.0012 of the own-index values. The own indices were used because they are what the trace reads.
- The L8 and L10 `apdNote` strings now add the own-index PgF, the vendor's catalog deviation and the runtime value; no `apdNote` was added elsewhere. The data-file header gained a "NOTE ON PARTIAL DISPERSION" block and its spectral-model sentence no longer lists `dPgF` as catalog-proxy data. In the analysis, the L1 proxy sentence, the glass-table column (now the vendor figure beside the stored value) and the sentence claiming the stored `dPgF` reproduces the catalog rows were corrected; the patent has no partial-dispersion condition to quote.
- Unchanged: `nd`, `νd`, `nC`, `nF`, `ng`, glass labels, `apd` tags and surfaces. No element uses `indexReference: "e"`. The file still builds and validates under the read-only `dpgfcheck` helper.

## 2026-10-08 - Inventor names corrected; `apd` tags reviewed against ¶0065

- Inventors: read the cover of the local `patents/US20240302626A1.pdf` (PDF page 1, rendered; the scan has no text layer). Field (72) names two inventors, Takashi Ode and Takahiro Hatada, both of Tochigi, and the title block reads "ODE et al." The file had merged the two into a single "Takahiro Ode".
- Changed: `patentAuthors` is now `["Takashi Ode", "Takahiro Hatada"]`. The data-file header, the analysis's inventor line and its reference 6 name both.
- `apd` on L8 and L10: reviewed and left `"inferred"`. ¶0065 (PDF page 14) says that a material of "low dispersion and high anomalous dispersion" for the tenth lens G10 suppresses chromatic aberration, but it sits under the "Example 1" heading (¶0050–¶0070). Example 1's G10 is Table 1 surfaces 19–20, nd 1.538 / νd 74.70 (PDF page 16). This file transcribes Numerical Example 2, whose tenth lens is Table 3 surfaces 20–21, nd 1.497 / νd 81.54, a different material. Example 2's own text (¶0071–¶0072, PDF page 15) restates the five-unit layout and gives one difference from Example 1, the rearmost cemented lens becoming a single lens; it names no material. The general description (¶0028–¶0046, PDF pages 12–13) does not mention anomalous dispersion.
- Reading: applying ¶0065 to Example 2's L10 is a carry-over from another example's lens and glass, not a patent statement about this material, so it does not meet the spec's requirement for `"patent"`. ¶0064 says nothing of the kind about G8 in either example, so L8 has no patent statement at all. Both tags still rest on the 1.497 / 81.54 coordinate and Canon's two-UD count.
- Unchanged: every prescription value, semi-diameter, `dPgF`, `apdNote`, glass label and `apd` tag.
