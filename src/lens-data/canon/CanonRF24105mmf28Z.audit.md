# Audit Log - Canon RF24-105mm F2.8 L IS USM Z

Patent: US 2024/0192474 A1, Numerical Example 4
Catalog version: local working tree, 2026-05-19

## 2026-06-04 - Sweep 2 manufacturer catalog source pass

- Added HOYA NBFD29 from HOYA's first-party optical-glass PDF (`NBFD29`, code 770-297, nd=1.77047, vd=29.74, PgF=0.5951, formula-3 A0-A5 constants) to the runtime catalog.
- Relabeled L8 / S14 from `Heavy flint (770/297)` to `NBFD29 (HOYA, 770297)`.

## 2026-05-19 - Full patent audit and glass relabel

### Source Note

- The local patent PDF is image-only, so `pdftotext` produced a blank text file. This audit used rendered pages from the local PDF for the Numerical Example 4 tables, with public catalog lookups used only for glass identification.

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / 1 | `glass` | `Lanthanum dense flint (900/374)` | `TAFD37A (HOYA)` | Example 4 row 1 lists nd=1.90043, vd=37.4; catalog TAFD37A carries code 900374. |
| L2 / 3 | `glass` | `Phosphate crown (538/747)` | `S-FPM3 (OHARA)` | Example 4 row 3 lists nd=1.53775, vd=74.7; catalog S-FPM3 matches and is now code-tagged as 538747. |
| L3 / 5 | `glass` | `Lanthanum crown (729/547)` | `S-LAL18 (OHARA)` | Example 4 row 5 lists nd=1.72916, vd=54.7; catalog S-LAL18 carries code 729547. |
| L4 / 7 | `glass` | `Lanthanum crown (729/547)` | `S-LAL18 (OHARA)` | Row 7 repeats the L3 nd/vd pair. |
| L5 / 9 | `glass` | `Dense lanthanum flint (883/408)` | `S-LAH58 (OHARA)` | Example 4 row 9 lists nd=1.88300, vd=40.8; catalog S-LAH58 carries code 883408. |
| L6 / 11 | `glass` | `Barium crown (595/677)` | `S-FPM2 (OHARA)` | Example 4 row 11 lists nd=1.59522, vd=67.7; catalog S-FPM2 carries code 595677. |
| L7 / 13 | `glass` | `UD fluorophosphate crown (497/815)` | `S-FPL51 (OHARA)` | Example 4 row 13 lists nd=1.49700, vd=81.5. S-FPL51/FCD1-class public data matches within patent rounding; this is one of the four UD elements. |
| L8 / 14 | `glass` | `Heavy flint (770/297)` | retained in this May pass | Example 4 row 14 lists nd=1.77047, vd=29.7. The 2026-06-04 source pass later resolved this row as HOYA NBFD29. |
| L9 / 17 | `glass` | `Very heavy flint (847/238)` | `S-TIH53 (OHARA)` | Example 4 row 17 lists nd=1.84666, vd=23.8; catalog S-TIH53 carries code 847238. |
| L10 / 19 | `glass` | `Extreme dense flint - OHARA S-NPH4 (001/291)` | `S-LAH99 (OHARA)` | Example 4 row 19 lists nd=2.00100, vd=29.1. The old label resolved to S-NPH4, whose catalog constants do not match; S-LAH99 carries code 001291. |
| L11 / 20 | `glass` | `Borosilicate crown (517/524)` | `S-NSL36 (OHARA)` | Example 4 row 20 lists nd=1.51742, vd=52.4; catalog S-NSL36 carries code 517524. |
| L13 / 23 | `glass` | `Lanthanum crown (773/496)` | `S-LAH66 (OHARA)` | Example 4 row 23 lists nd=1.77250, vd=49.6; catalog S-LAH66 carries code 773496. |
| L14 / 25 | `glass` | `UD fluorophosphate crown (497/815)` | `S-FPL51 (OHARA)` | Same S-FPL51/FCD1-class match as L7. |
| L15 / 26 | `glass` | `Lanthanum dense flint (900/374)` | `TAFD37A (HOYA)` | Row 26 repeats the L1 nd/vd pair. |
| L16 / 28 | `glass` | `UD fluorophosphate crown (497/815)` | `S-FPL51 (OHARA)` | Same S-FPL51/FCD1-class match as L7. |
| L17 / 30 | `glass` | `UD fluorophosphate crown (497/815)` | `S-FPL51 (OHARA)` | Same S-FPL51/FCD1-class match as L7. |
| L18 / 32A | `glass` | `OHARA L-LAH86 PGM glass (854/404)` | `L-LAH85V (OHARA)` | The aspherical glass layer uses nd=1.85400, vd=40.4. OHARA L-LAH85V publishes code 854404 and matches the row; the old L-LAH86 wording pointed at a different high-index PGM family. |
| L19 / 33 | `glass` | `Barium crown (603/606)` | `N-SK14 (Schott)` | Example 4 row 33 lists nd=1.60311, vd=60.6; catalog N-SK14 carries code 603606. |
| L20 / 35 | `glass` | `Lanthanum crown (729/547)` | `S-LAL18 (OHARA)` | Row 35 repeats the L3/L4 nd/vd pair. |
| L22 / 39 | `glass` | `Heavy flint (805/254)` | `S-TIH6 (OHARA)` | Example 4 row 39 lists nd=1.80518, vd=25.4; catalog S-TIH6 carries code 805254. |
| L23 / 40 | `glass` | `Fluorocrown (487/702)` | `S-FSL5 (OHARA)` | Example 4 row 40 lists nd=1.48749, vd=70.2; catalog S-FSL5 carries code 487702. |
| L24 / 42 | `glass` | `Extreme dense flint - OHARA S-NPH3 (001/255)` | `TAFD40 (HOYA)` | Example 4 row 42 lists nd=2.00069, vd=25.5. The old label resolved to S-NPH3, whose catalog constants do not match; TAFD40 carries code 001255. |

### Phase 2 - Retained-information audit

- Rechecked Example 4 surface rows 1-43 from the rendered local patent pages. Stored `R`, `d`, `nd`, `vd`, zoom variable gaps, and aspherical coefficients for surfaces 22, 32, and 37 match the patent table.
- Confirmed the file's note that no close-focus spacing data is published for this example; existing close-focus `var` values intentionally mirror infinity.

### Phase 3 - Spectral / metadata enrichment

- No C/F/g line-index or partial-dispersion columns are published in Numerical Example 4, so no element-level spectral fields were added.
- Added catalog `code6` metadata for S-FPM3 so future 538747 rows can resolve by code.

### Phase 4 - Analysis sync

- Updated the element narratives and glass-budget note for the newly resolved catalog labels.
- Left the L8 / 770297 row code-only in this May pass; the 2026-06-04 source pass later resolved it as HOYA NBFD29.

### Report status

- At the time RF24-105 remained in the six-digit missing-Sellmeier report only for L8 / 770297. The 2026-06-04 report run clears that row.

## 2026-09-23 — First-added diagram audit, lens 96

Source: local `patents/US20240192474A1.pdf` (image-only scan, no text layer). Pages used: 1 (front page), 8 (FIG. 7
section, measured at 300 dpi), 9 (FIGS. 8A/8B aberrations), 18 (¶0027, ¶0030, ¶0034), 20–21 (¶0066–¶0072, including
¶0069 for Example 4), 22 (¶0077–¶0078 BF and asphere definitions), 26–28 (Numerical Example 4 tables and unit data).

### Re-verified and retained

- Numerical Example 4 is stored; it matches Canon's 23 elements / 18 groups, four 497/815 rows (UD), and three
  aspheres. Front-page fields (US 2024/0192474 A1, Shunji Iwamoto, Canon, 2024) are correct.
- All 43 surface rows (R, d, nd, νd), the stop at S16, and the three aspheres (S22, S32, S37; K = 0 in the (1+K)
  formula, A4–A10 with signs and exponents) match the rendered table.
- Zoom data: wide, middle and tele are all tabulated (f 24.78 / 50.31 / 102.06; d8, d15, d24, d34, d36, d38, d43); no
  interpolated stations. Computed EFL 24.784 / 50.314 / 102.080; overall length 211.98 at every station. The patent
  lists no cover glass and d43 equals its BF; stored gaps sit −0.006 / +0.009 / −0.014 mm from paraxial focus.
- Group motion (derived from the gap table, L1 fixed per ¶0069): L2 +33.90 mm toward the image; L3 −5.88, L4 −24.72,
  L5 −26.12, L6 −27.00 mm toward the object; L7 −14.11 mm (wide→middle) then +6.74 mm back (middle→tele). FIG. 7
  arrows and the app's zoom-movement overlay agree. The analysis motion table was already correct.
- Unit focal lengths (90.57 / −27.00 / 119.23 / 35.02 / −47.42 / 112.74 / −90.78) and every element `fl` agree with
  thick-lens values to the stored rounding.
- Glass: every nd/νd equals the patent row; all labels except L19 already resolved to exact catalog coordinates.
- Close focus: the patent gives no close-focus gaps for any example, so the finite-focus entries keep repeating the
  infinity values (the app shows focus as "Not modeled"). No travel was invented; 0.45 m stays as Canon's production
  MFD for reference.

### Changes

| Item | Before | After | Evidence |
|---|---|---|---|
| L6 focus direction (header, `focusDescription`, L21 role, analysis §3.6, §5) | L6 moves toward the object | L5 and L6 both move toward the image | ¶0069 (Example 4) and both FOCUS arrows in FIG. 7 |
| `nominalFno` / aperture model | 2.8, fixed iris (engine iris 11.27 mm, ≈f/3.9 equivalent at tele) | 2.9 + `zoomApertureModel: "from-nominal-fno"`; traced iris radii 10.87 / 13.72 / 15.08 mm | Patent Fno 2.90 at all stations; stop moves with L3; no iris diameters published |
| `fstopSeries` / `maxFstop` | starts f/2.8, default max 16 (f/22 button unreachable) | starts f/2.9, `maxFstop: 22` | Patent Fno; production f/22 minimum |
| S9 / S10 sd | 17.5 / 15.8 | 20.0 / 17.0 | Wide corner chief ray (Y = 21.6, real ω 45.7°) needs 19.2 / 16.0 and was blocked; FIG. 7 draws L2's first element at 20.1 with the S10 rim at ≈17.3 |
| S32A sd | 21.0 | 18.0 | The asphere's sag turns over at ≈18.2 mm; the f/2.9 axial beam needs 16.6 and the chief ray 16.2 |
| S42 / S43 sd | 20.6 / 21.8 | 18.0 / 18.0 | FIG. 7 draws L24 at 17.9 (old values 15 % / 22 % large); the tele chief ray needs 17.65 at S43 |
| L10 `type` | Positive Meniscus | Negative Meniscus | R 59.615 / 36.734 (both +, R1 > R2); thick-lens f = −98.2 |
| L19 `glass` | N-SK14 (Schott) | S-BSM14 (OHARA) | Same 603/606 coordinate; Canon's usual supplier |
| L21 `glass` | OHARA L-BAL42 PGM glass (583/594) | L-BAL42 (OHARA) | Label format; catalog equivalent |
| `varLabels` d43 | BF | D43 | The patent names the gap d43 |
| Group labels L4–L7 | "L4 (relay)" … "L7 (corrector)" | "L4" … "L7" | The long labels overlapped under the narrow L5/L6 units in the diagram |
| Header | Box header with wrong L6 direction and d43 listed as a focus gap | Rewritten: zoom motion, focus, BF, aperture and SD basis | Findings above |

Analysis sync: L3/L7 unit focal lengths (119.23, −90.78); E5 and E20 described as convex toward the object; E10 negative
meniscus; E16 no longer called the strongest positive in L4 (E19, f ≈ +41 mm, is); the patent's ω noted as paraxial
(¶0030); focus section rewritten for same-direction travel; inferred iris schedule stated; S32 clear-aperture limit
and departure (≈ −0.87 mm at 18.0 mm) added; distortion quantified from FIG. 8A and the trace (≈ −12 % wide, about
+4 to +5 % tele, previously "several percent" / "minimal"); stale "element 8 code-only" wording removed; unsupported
"first RF replica aspheric", "PGM confirmed by prefix" and UV-resin statements reworded as marketing or inference.

### Checks on the result

- Surface validator: no errors. Image-circle floor: 0 undersized.
- Exact trace at f/2.9, Y = 21.6 mm: no axial clipping and no chief-ray blocking at any station. Corner vignetting is
  heavy at wide (front group 74–98 % side, as before) and 73 % side at S32A.
- Engine: iris 10.87 / 13.72 / 15.08 mm, FOPEN 2.9 at all stations, paraxial half-field estimate 36.4° at wide
  (limited by S10–S12; patent paraxial ω 41.12°). Real rays still reach the corner.
- Live headless check (local vs production): wide, middle and tele render cleanly with the new labels; the focus
  panel reports "Not modeled"; the zoom-movement overlay matches FIG. 7 (L1 fixed, L2 rearward, L3–L6 forward, L7 net
  forward).

### Open limitations

- Focus travel is not modeled (no published close-focus data). The FIG. 7 dotted loci show the two groups' close
  positions differ from their infinity loci, but no numbers are given.
- Rims are not published. The L4 rims (S27–S31) are 8–11 % larger than FIG. 7, and E20 (S35 19.4) is ≈15 % larger;
  these were kept within tolerance. The replica layer stays capped at 15.5 mm (FIG. 7 ≈16.6) for edge thickness.
- The engine's paraxial wide half-field (36.4°) is below the patent's paraxial 41.12°, because heavy barrel
  distortion makes paraxial chief heights overstate the rims needed.
