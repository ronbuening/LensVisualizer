# Patent and integration audit

## 2026-09-25 — new-lens integration

### Exact local source and semi-diameters

WO_2024247472_A1.pdf, p. 114, Figure 14, Example 2; Table 6 p. 35. Rendered and inspected the exact embodiment; optical rims exclude labels, rays, arrows and mechanical edges.

S31/S32: 13.9/13.95 → 16.48/16.575 mm; S33A/S34A: 11.1/11.1 → 14.465/14.6 mm. These are exactly half the published effective diameters 32.96/33.15/28.93/29.20 mm. Figure estimates (~19.4/17 mm) are superseded by the numerical table. Recomputed rear aspheric departures: −32.6 µm and +77.3 µm. Other modeled clearance margins remain.

### Metadata and glass

Normalized Macro casing in the display name. Added twelve compatible proxies, including new HOYA NBFD6, MP-TAC80-60 and ADF405. Seven source-coordinate glasses remain unmatched. Added zoomCloseFocusM for the published 2.289/3.709/5.814 m endpoints; no production macro focus is reconstructed.

Final trusted catalog coverage: **12/19 elements**. Catalog curves are spectral proxies, not proof of production supplier or melt. Original patent coordinates and reference lines remain authoritative.

New HOYA entries use the manufacturer’s [2026-07-07 Zemax catalog including obsolete glasses](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf), accessed 2026-09-25. Its formula-1 polynomial is preserved in the supported six-coefficient polynomial representation; no fabricated Sellmeier coefficients or relaxed tolerances. The 70–200mm S-LAH98 near-match was rejected because the close index is the vendor e-line value while the patent explicitly specifies d-line indices.

The existing nominal f-number stations now opt into `zoomApertureModel: "from-nominal-fno"`. Without that integration field the runtime held the wide-end iris fixed despite the source-model aperture schedule. These radii remain inferred; they are not published physical iris measurements.

## 2026-09-25 — local-site follow-up

Compared the live diagram directly with Figure 14, PDF p. 114 of WO_2024247472_A1.pdf; Tables 6–8, pp. 35–36.

Retained the newly corrected Table-6 rear rims and the rest of the source-based apertures after wide/tele live comparison. No further SD change is justified.

G2/G7 stay fixed in the image-plane frame. G1/G3/G4/G5/G6 move objectward Wide→Mid→Tele; D18/D27 gap reversals are not group reversals. G6 moves imageward 0.55/0.76/1.10 mm for the published 2.289/3.709/5.814 m endpoints. Simplified the on-site focus description to state this directly.

L2/L3/L12/L14 receive qualified inferred APD coloring from FCD1/FCD705/S-FPM2 curves. Seven remaining custom coordinates have no further compatible catalog/HOYA candidate; e-line near-matches remain rejected.

## 2026-10-08 — Elements e-referenced with catalog glasses

Supersedes the glass dispositions in both entries above, including the rejection of the S-LAH98 and other e-line matches.

### What the patent says and what it prints

WO_2024247472_A1.pdf, ¶0064 (printed page 21, PDF p. 23) defines `ndi` as the refractive index of the element material at the d line, “ｄ線（波長５８７．６ｎｍ）”, and `νdi` as its Abbe number at the d line. Table 6 (printed page 33, PDF p. 35) heads the two columns `ndi` and `νdi`. Every stored index and Abbe number was re-read against Table 6 and agrees; nothing was changed.

The printed indices are e-line values paired with d-line Abbe numbers. Eighteen of the nineteen rows equal a vendor glass's ne to all five printed decimals with that glass's νd at the printed one decimal, and none equals a vendor glass at the d line. Catalog data checked at both lines: HOYA 2026-07-07 (including obsolete), OHARA 2026-07-01, SUMITA 2025-11-07, HIKARI 2025, and the site catalog's SCHOTT and CDGM rows.

The patent's condition tables give the same answer without any catalog. ¶0037 defines Nnp and νnp as the d-line index and Abbe number of L61. Table 36 (PDF p. 68) prints Nnp = 1.81 and νnp = 22.76, and Table 37 (PDF p. 69) prints Nnp + 0.1·νnp = 4.08. The Table 6 index of L61, 1.81643, gives 4.09; FD225's nd 1.80809 with νd 22.76 gives 4.084. Table 37 also prints Np3 = 1.76 for L31, whose Table 6 index 1.76760 rounds to 1.77, while S-LAH96 has nd 1.76385. The other Table 37 entries are rounded, not truncated.

### Match table

| Element | Printed n / νd | Exact e-line rows (catalog νd) | Closest d-line index within ±1 of νd | Label before | Label now |
|---|---|---|---|---|---|
| L11 | 1.75453 / 35.3 | OHARA S-NBH51 (35.33), S-LAM7 (35.28) | OHARA S-NBH51 1.74950, 0.00503 low | NBFD6 | S-NBH51 |
| L12, L13 | 1.49845 / 81.6 | HOYA FCD1 (81.61); OHARA FPL51, obsolete (81.61); CDGM H-FK61 (81.61) | HIKARI J-FKH1 1.49782, 0.00063 low | FCD1 | FCD1 |
| L21 | 1.51978 / 52.1 | HOYA E-CF6 (52.15) | OHARA SSL5 (obsolete) 1.52130, 0.00152 high | S-NSL36 | E-CF6 |
| L22 | 1.96073 / 32.3 | HOYA TAFD45 (32.32); OHARA S-LAH98 (32.32); HIKARI J-LASFH21 (32.33) | HOYA TAFD45 1.95375, 0.00698 low | Unmatched | TAFD45 |
| L23, L31 | 1.76760 / 48.5 | OHARA S-LAH96 (48.49) | HOYA M-TAF101 1.76802, 0.00042 high | M-TAF101 | S-LAH96 |
| L24 | 1.73234 / 54.7 | HOYA TAC8 (54.67); OHARA S-LAL18, obsolete (54.68); SUMITA K-LaK18 (54.70) | HOYA MP-TAC80-60 1.72963, 0.00271 low | MP-TAC80-60 | TAC8 |
| L25 | 1.93024 / 24.0 | HOYA FDS24 (23.96) | HOYA FDS24 1.92119, 0.00905 low | Unmatched | FDS24 |
| L32 | 1.91695 / 35.2 | HOYA TAFD35 (35.25) | HOYA TAFD31 (obsolete) 1.92250, 0.00555 high | Unmatched | TAFD35 |
| L41 | 1.82017 / 46.6 | HOYA TAF5 (46.57); OHARA S-LAH59 (46.62); HIKARI J-LASF09A (46.59) | HOYA TAF5 1.81600, 0.00417 low | Unmatched | TAF5 |
| L42 | 1.55206 / 75.5 | HOYA FCD705 (75.50) | HOYA FCD705 1.55032, 0.00174 low | FCD705 | FCD705 |
| L51 | 2.00996 / 25.5 | HOYA TAFD40 (25.46) | SUMITA K-BOC30 2.00680, 0.00316 low | Unmatched | TAFD40 |
| L52 | 1.59561 / 67.0 | HOYA PCD51 (67.00) | OHARA S-FPM2 1.59522, 0.00039 low | S-FPM2 | PCD51 |
| L53 | 1.76821 / 49.1 | OHARA L-LAH91 (49.10) | SUMITA K-LaFK50(M) 1.76831, 0.00010 high | M-TAF101 | L-LAH91 |
| L61 | 1.81643 / 22.8 | HOYA FD225 (22.76); OHARA S-NPH1 (22.76) | SUMITA SFLD20 (obsolete) 1.81786, 0.00143 high | Unmatched | FD225 |
| L62 | 1.83945 / 42.7 | HOYA TAFD5G, TAFD5F (42.72); OHARA S-LAH55V (42.73), S-LAH55VS (42.74); HIKARI J-LASF05 (42.73) | SUMITA K-LaSFn8 1.83500, 0.00445 low | Unmatched | TAFD5G |
| L71 | 1.67717 / 38.3 | OHARA S-NBH52V (38.26) | HOYA ADF405 (obsolete) 1.67650, 0.00067 low | ADF405 | S-NBH52V |
| L72 | 1.77373 / 49.4 | none | HOYA M-TAF105 1.77250, 0.00123 low | M-TAF105 | Unmatched |

Catalog νd reproduces every printed Abbe number at one decimal. E-CF6 (52.15) and TAFD35 (35.25) sit on the rounding boundary and are printed 52.1 and 35.2, which is how a binary float formats those two values. Rows that miss the fifth decimal or whose νd prints differently were not counted: OHARA S-FPL51 (81.55), HIKARI J-FK01A (81.65) and J-LAF7 (35.25), HIKARI J-KF6 and SUMITA KF6 (52.20), SUMITA K-LaSFn9 (46.70), CDGM H-ZLaF90 (25.43), HIKARI J-SFH1 (22.74), OHARA S-NBH52 (38.15), and HIKARI J-PSKH4 (ne 1.59560) and J-LASFH17 (ne 2.00995).

### Names chosen

- HOYA covers thirteen elements and OHARA is the only match for five, so the HOYA name is used wherever both vendors list the printed pair (L12, L13, L22, L24, L41, L61, L62). Other Sony patents in the corpus that print two-decimal Abbe numbers give 42.72 for index 1.83481 and 54.67 for 1.72916, HOYA's values; OHARA's current rows are 42.73 or 42.74 and 54.68.
- L11: S-NBH51 and S-LAM7 have the same ne and the same one-decimal νd, so the table cannot separate them. S-NBH51 is used: it is OHARA's preferred-status row, and the Sony FE 400mm F2.8 GM patent prints 1.7495 / 35.33, the S-NBH51 pair.
- L22 and L32: TAFD45 and TAFD35 round to the printed fifth decimal; TAFD45L and TAFD35L compute 1.96074 and 1.91694.
- L25, L51: the base names FDS24 and TAFD40 are used; the -W transmission grades share their coefficients.
- L41: TAF5 is a special-status row in HOYA's catalog and OHARA S-LAH59 is a preferred-status row at the same pair. The vendor rule above was applied; swapping it moves each channel focus by about 2 µm.
- L62: TAFD5G, the current row, over the special-status TAFD5F.
- L53: L-LAH91 is a moulding glass, on a two-asphere element.
- All eighteen names are in the site catalog and resolve at the e line; no catalog row had to be added.

### What stays Unmatched

L72 (1.77373 / 49.4, two aspherical surfaces) equals no row at either line. At the e line the nearest rows with its Abbe number are HOYA MC-TAF101-100 (1.77273, 0.00100 below) and M-TAF105 (1.77622, 0.00249 above); OHARA L-LAH87 is 0.00044 away in index but 2.0 lower in νd. At the d line HOYA M-TAF401 is 0.00004 away in index but 2.2 lower in νd. Its earlier M-TAF105 label was a d-line proxy 0.00123 away and is dropped. The HOYA MC-TAF115 record lists nd 1.77705 while its own coefficients give 1.77047, so it was not considered.

### Data changes

- All nineteen elements set to `indexReference: "e"` with the printed index and Abbe number unchanged, and an `indexReferenceNote` on each saying the column is traced at the e line with the printed d-line Abbe numbers. The `vd` slot keeps the printed νd; catalog νe for the eighteen is 0.2 to 0.4 lower, inside the resolver's ±2 window.
- Eighteen glass labels replaced as in the table; L72 set to an explicit Unmatched disposition.
- L52's `apdNote` named the S-FPM2 curve and its ΔPgF of +0.0144. It now names PCD51 and +0.0055. The `apd: "inferred"` tag itself was left as authored and should be reviewed against the smaller deviation.
- Table 6 lists no cover glass or filter row and the file has no `rearPlates`; there is no resin layer or compound member with its own row.
- No radius, thickness, semi-diameter, asphere coefficient, variable gap or metadata field was touched.

### Effect on the trace

- Dispersion tiers: 12 surfaces on catalog curves and 7 on the Abbe estimate before; 18 on catalog curves and 1 (33A) on the Abbe estimate now.
- Paraxial focus against the green channel at the wide end, before: red +55 µm, blue +98 µm, violet +376 µm, with the reference trace 257 µm short of green. The twelve d-line proxies traced green at their catalog nd, 0.0002 to 0.0027 away from the stored indices. Now: red +70 µm, blue +14 µm, violet +79 µm, and green equals the reference trace.
- The reference trace is unchanged. The engine build reports the same focal lengths (72.1054 / 119.679 / 192.9921 mm), f-numbers (4.12 / 4.36 / 4.14), stop radii, pupils, half-fields and Petzval sum before and after.
- Choosing S-LAM7 for L11, S-LAH59 for L41 or TAFD5F for L62 instead moves no channel focus by more than 4 µm.
