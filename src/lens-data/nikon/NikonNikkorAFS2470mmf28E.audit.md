# Audit Log - Nikon AF-S NIKKOR 24-70mm f/2.8E ED VR

Patent: US 2020/0142168 A1, Example 1 (Table 1)
Catalog version: 952b877, local working tree

## 2026-05-10 - Patent audit and glass relabel cleanup

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L11 / S1 | `glass` | `S-LAH60 (OHARA)` | `744495 - lanthanum crown (patent nd=1.74389, vd=49.50)` | Patent Table 1 row 1 lists nd=1.74389, vd=49.5. Catalog S-LAH60 resolves to nd=1.83400; no safe exact catalog match was asserted. |
| L13 / S6 | `glass` | `S-NPH2 (OHARA) — HRI` | `S-LAH99 / TAFD55 (001291, HRI)` | Patent Table 1 row 6 lists nd=2.00100, vd=29.1. S-NPH2 resolves to nd=1.92286; S-LAH99/TAFD55 matches the 001291 HRI glass region. |
| L21 / S8 | `glass` | `L-BSL7 (OHARA)` | `593670 - fluorophosphate crown (patent nd=1.59349, vd=67.00)` | Patent Table 1 row 8 lists nd=1.59349, vd=67.0. S-BSL7 resolves to nd=1.51633; no exact public catalog match was asserted. |
| L22 / S10 | `glass` | `L-BSL7 (OHARA)` | `593670 - fluorophosphate crown (patent nd=1.59349, vd=67.00)` | Patent Table 1 row 10 repeats the 593670 glass. |
| L23 / S12 | `glass` | `L-BSL7 (OHARA)` | `593670 - fluorophosphate crown (patent nd=1.59349, vd=67.00)` | Patent Table 1 row 12 repeats the 593670 glass. |
| L34 / S25 | `glass` | `L-BSL7 (OHARA)` | `593670 - fluorophosphate crown (patent nd=1.59349, vd=67.00)` | Patent Table 1 row 27 repeats the 593670 glass. |
| L41 / S29A | `glass`, `apd`, `apdNote` | `Fluorophosphate crown — ASP/ED`, `patent`, patent APD claim | `553717 - ASP/ED fluorophosphate crown (patent nd=1.55332, vd=71.70)`, `inferred`, nd/vd-only note | Patent Table 1 row 31 lists nd=1.55332, vd=71.7 but no partial-dispersion or line-index table. |
| L43 / S32 | `glass`, `apdNote` | `L-BSL7 variant (OHARA)`, BSL7 comparison | `593679 - fluorophosphate crown (patent nd=1.59319, vd=67.90)`, no exact-catalog note | Patent Table 1 row 34 lists nd=1.59319, vd=67.9. S-BSL7 is not this glass; no exact public catalog match was asserted. |
| L44 / S34 | `glass`, `apd`, `role` | `S-FPL51 (OHARA) — ED`, `patent`, `Super-ED element` | `S-FPL51 / FCD1 class (ED fluorophosphate, vd=82.6)`, `inferred`, `ED element` | Patent Table 1 row 36 lists nd=1.49782, vd=82.6, which is S-FPL51/FCD1 territory, not S-FPL53 Super-ED. The patent does not publish partial-dispersion data. |
| L45 / S35 | `role` | `Dense flint in triplet; complementary dispersion for apochromatic correction` | `Dense flint in triplet; complementary dispersion for rear-group chromatic correction` | Avoids unsupported APO language; patent Table 1 gives nd/vd only for the triplet. |
| L46 / S36 | `glass` | `S-LAM54 (OHARA)` | `694533 - lanthanum crown (patent nd=1.69350, vd=53.30)` | Patent Table 1 row 38 lists nd=1.69350, vd=53.3. S-LAM54 resolves to nd=1.75700; no safe exact catalog match was asserted. |

### Phase 2 - Retained-information audit

- Patent Table 1 prescription rows 1-18 match stored `R`, `d`, and `nd` values at wide-angle infinity.
- Patent surface 19 is FC1, not glass; its fixed 1.200 mm spacing remains folded into data surface `18` (`D18 + 1.200`). Patent surface 20 maps to data `STO`.
- Data surfaces `19`-`28` map to patent rows 21-30, and data surfaces `29A`-`37A` map to patent rows 31-39. Patent FC2 row 40 remains folded into the `37A` back-focus spacing (`D39 + D40`).
- Variable spacings match Table 1: D7, D16, D18, D20, D26, D30, D39, and D40. Stored `18` and `37A` intentionally use the folded sums described above.
- Aspherical coefficients for patent surfaces 2, 3, 31, and 39 match stored `2A`, `3A`, `29A`, and `37A`. Patent kappa/conic values map directly to the stored `K` values.
- Semi-diameters remain production-diagram/geometric estimates; the patent does not publish clear apertures.

### Phase 3 - Spectral / metadata enrichment

- Added no `dPgF`, `nC`, `nF`, or `ng` values because the patent publishes only d-line index and Abbe number.
- Relabeled L13 to a catalog-resolving 001291 HRI family string and kept S-FPL51/FCD1 for L44; variant-code glasses remain code labels so the dispersion engine falls back to the stored patent nd/vd.
- Existing metadata already included patent year, design focal lengths, design aperture, element/group counts, maker, mount, format, and focus description.

### Phase 4 - Analysis sync

- Updated `NikonNikkorAFS2470mmf28E.analysis.md` element tables and glass strategy table for L11, L13, L21-L26, L32, L34, L41-L44, and L46.
- Replaced the unsupported S-FPL53/Super-ED wording with S-FPL51/FCD1-class ED wording.
- Removed unsupported APD/proprietary-catalog implications for code-labeled glasses where the patent gives only nd/vd.

## 2026-05-19 — Six-digit glass-code backfill review

Reviewed `patents/US20200142168A1.pdf`, Example 1 / Table 1. L11 / surface 1 remains the only reviewed missing-Sellmeier row for this pass: nd=1.74389, νd=49.50, code `744495`.

Catalog-search disposition:

- Searched public Hikari/Nikon, OHARA, HOYA, SCHOTT, and refractiveindex.info-backed catalog data for `744495` and the nd/νd pair.
- No coefficient-backed exact match was found. The label now explicitly says no exact public catalog match, and retains the unbroken code for future auto-upgrade.

Changes made:

- Reworded the L11 glass label in `NikonNikkorAFS2470mmf28E.data.ts`.
- Updated the L11 narrative in `NikonNikkorAFS2470mmf28E.analysis.md`.

## 2026-06-04 — Sweep 3 local patent recheck

Local patent source: `patents/US20200142168A1.pdf` (untracked local file).

- Re-extracted Example 1 / Table 1 with `pdftotext -layout`.
- The local patent text publishes `n(d)` and `νd` only for the lens prescription. No `nC`, `nF`, `ng`, `θgF`, or `dPgF` rows were found.
- No data-file spectral backfill was made from this pass.

## 2026-08-18 — Hoya M-NBF1 coefficient assignment

- Visually rechecked local `patents/US20200142168A1.pdf`, PDF page 47, Example 1 / Table 1. Surface 1 is `nd = 1.74389`, `νd = 49.5`.
- Relabeled L11 from code-only `744495` to coefficient-backed Hoya M-NBF1 as a catalog equivalent (`1.743300 / 49.326`), retaining the patent code and unspecified supplier. No geometry or patent-derived optical coordinate changed.

## 2026-09-23 — First-added diagram audit, lens 99

Source: local `patents/US20200142168A1.pdf`. Example 1 text ¶[0145]–[0157] pp. 46–47; Table 1 pp. 47–48; aspheric
Eq. (a) ¶[0137] p. 46; Fig. 1 p. 2 (sheet 1/38, 300 dpi CCITT raster, axis horizontal). Example 2 text and Table 2
pp. 48–51 were read for the example choice.

### Example choice

Example 1 is the right example. Examples 1 and 2 have the same 20-element, 16-group layout. Table 2 lists aspheres on
surfaces 2, 3, 26 (the VR group), 30 and 38, which makes five aspherical elements. Nikon's production lens has four
(three AS elements plus one ASP/ED). Table 1 has exactly four: L11, the composite L12, L41 and L46. The other ten
examples use five or seven groups or a different G1.

### Retained after re-reading the source

- All 39 rows of `R`, `d`, `nd`, `νd` match Table 1. Every aspheric coefficient matches, including signs and
  exponents. Paraxial EFL is 24.800 / 50.015 / 67.847 mm (patent 24.80 / 50.01 / 67.85). Track length is
  220.249 / 198.418 / 200.826 mm (patent TL 220.251 / 198.419 / 200.827). Defocus from the stored last gap is
  0.002 mm or less at every station.
- The zoom gaps D7, D16, D18 (+ FC1 1.200), D20, D30 and D39 + D40 match the three published stations exactly.
  D26 = 1.250 mm stays fixed. No intermediate stations are fabricated.
- The focus travel of 6.735 mm matches the Focusing Data at every station. The close gaps are calculated
  (D7 + 6.735, D16 − 6.735) and focus at 418.29 / 380.99 / 396.60 mm object-to-image, against the published imaging
  distances of 0.4183 / 0.3810 / 0.3966 m.
- Every stored element focal length agrees with its thick-lens value to 0.05 mm. Element `type` strings agree with the
  R signs and ¶[0146]–[0151], and `elementCount` 20 / `groupCount` 16 are correct.
- Group motion follows from the fixed stop and the tabulated gaps. From the image plane, G1's front vertex sits at
  220.25 / 198.42 / 200.83 mm, G2 at 144.99 / 161.18 / 172.61 mm, G3 at 103.12 / 100.59 / 101.57 mm and G4 at
  69.82 / 77.30 / 84.47 mm, while the stop stays at 105.2 mm. So G1 and G3 reverse direction, and G2 and G4 move
  steadily toward the object. This matches ¶[0153] and the Fig. 1 arrows.
- Omitting FC2 matches the repo convention. The folded last gap, D39 + D40, equals the patent's BF
  (41.035 / 48.522 / 55.686 mm), and no cover glass is listed.

### Changes

| Surface / field | Before | After | Evidence |
|---|---|---|---|
| Asphere `K` (2A / 3A / 29A→31A / 37A→39A) | 0 / 1 / 1 / 1 | −1 / 0 / 0 / 0 | Eq. (a) is X = (y²/R)/{1+(1−κy²/R²)^½}+…, so κ = 1 is a sphere and K = κ − 1. The stored κ values had been treated as K. With the corrected conics, the exact trace reaches Y = 21.6 mm at ω = 42.48° / 22.66° / 17.15° (patent 42.5 / 22.7 / 17.2). Before the fix it reached 49.9° at the wide end. |
| Surface labels 19–37A | 19…28, 29A, 30…36, 37A | 21…30, 31A, 32…38, 39A | These are patent surface numbers 21–39. Patent 19 (FC1) is omitted and patent 20 is STO. Keys in `var`, `asph`, `groups`, `doublets` and `varLabels` were renamed to match. |
| `varLabels` | "D18", "BF" | "D18 + FC1", "D39 + D40 (BF)" | The stored gaps are patent D18 + 1.200 and D39 + D40. |
| `nominalFno`, `fstopSeries`, `maxFstop` | 2.8; starts 2.8; default 16 | 2.92; starts 2.92; 22 | Table 1 gives FNo 2.92 at W/M/T. The production lens's minimum aperture is f/22. |
| `zoomApertureModel` | absent | `"from-nominal-fno"` | The stop is fixed (¶[0153]) and no iris diameters are published. A fixed iris sized for the wide end would give about f/3.2 at mid and f/3.5 at tele instead of 2.92. The inferred radii are 9.47 / 11.21 / 12.36 mm. |
| STO `sd` | 13.0 | 12.4 | Records the largest inferred iris (tele, 12.36 mm). |
| `zoomCloseFocusM` | absent | [0.4183, 0.381, 0.3966] | Table 1 Focusing Data imaging distances. `closeFocusM` stays 0.38 m (production MFD; patent mid 0.381 m). |
| 1 `sd` | 27.2 | 32.0 | The exact wide-angle chief ray needs 28.64 mm, so the old rim blocked it. Fig. 1 shows L11's rim at 219 px × 0.1466 mm/px = 32.1 mm. The scale comes from surface 1 to surface 39 (1223 px / 179.214 mm) and from surface 1 to the image (1498 px / 220.249 mm). |
| 8, 9 `sd` | 20.4 | 17.8 | Fig. 1 shows L21 at 116–121 px (17.6 mm), smaller than L22 (126 px). The telephoto axial beam needs 16.99 mm. |
| 14, 15 `sd` | 15.6 | 17.9 | The f/2.92 telephoto axial beam needs 17.84 / 17.87 mm, so the old rims clipped it. The figure shows 126 px (18.5 mm). The 1.64 mm air gap closes to 0.05 mm at 17.9 mm, so `gapSagFrac` went from the default 0.90 to 0.98. |
| 21–30 `sd` (G3) | 12.9 / 11.2 / 11.2 / 14.9 / 15.0 / 15.5 / 15.7 / 15.8 / 16.3 / 16.5 | 12.2 / 11.5 / 11.5 / 12.3 / 12.9 / 12.9 / 13.2 / 13.2 / 13.4 / 13.4 | Both sides of Fig. 1 were clean inside the G3 bracket. They read L31 82–84 px, L32 85, L33 86–89, L34 89–91 and L35 91–92 px (12.0–13.5 mm). The old 24–30 values were 15–23 % larger. Surfaces 22 and 23 had clipped the axial beam (11.38 / 11.43 mm needed) and are limited by their 4.36 mm air gap. |
| G2 `groups` | one "G2 (+)" bracket | "G21 (+)" 8–16, "G22 (+)" 17–18 | Matches the Fig. 1 labels. The movement overlay now shows the 6.735 mm G21 focus travel instead of a 3.37 mm G2 centroid shift. |
| Glass labels | Ohara names and code-only labels; L44 resolved to FCD1 (Δnd 8.2e-4) | Hikari J-LASF015 (L12g, L31), J-PSKH4 (L21–L23, L34), J-LASFH13, J-LASF016, J-LASF09A, J-PSK03, J-SF03, J-SF6 (L35, L45), J-PSKH1, J-FKH1 (L44); Hoya TAFD55 (L13), M-FCD500 (L41), LAC13 (L46); Ohara S-LAH55 (L42) | Each is an exact catalog nd/νd match for the Table 1 row, worded as a catalog equivalent. The patent names no glasses, so all `apd` values stay `inferred` or `false`. L11 keeps its nearest Hoya M-NBF1 equivalent. |
| L12r `fl` | 0 | 2115.9 | Thick-lens value of the 0.2 mm resin layer. |
| `specs` 2ω | "≈ 84.4–34.4°" | "= 85.0–34.4°" | Patent ω = 42.5° / 17.2°. |
| Header, `focusDescription`, L41/L46 roles | "oblate K = 1" base, "D20 non-monotonic" as the only reversal, "rearward" | Conic convention, G1 and G3 reversals, fixed stop, label map, aperture model and SD basis documented | Covers the findings above. |

Retained without change: 2A–7 (G1 rear, 23.8 / 22.8–23.8 / 22.0–22.4 mm) against Fig. 1's 25.3–26.1 / 25.4 /
24.9 mm (7–12 % smaller). L22–L26 (18.7–19.7 mm) against the figure's 18.5–19.6 mm. G4 (17.4–19.0 mm) against the
figure's 16.0–17.2 mm (3–16 % larger). Each is within the ~15 % leave-alone band and passes the axial beam. The FC1
and S tick marks in Fig. 1 (about 14 mm) are drawing symbols, not iris radii.

### Checks on the result

- The surface validator reports no errors at any zoom station, and the image-circle floor is met (0 undersized).
- The exact trace at FNo 2.92 shows no axial clipping and no chief-ray blocking at any station. Corner vignetting is
  ordinary: about 43 % per side at L35 (surface 30) and 46–67 % per side in G4.
- Asphere departures from the base sphere at the stored rims: 2A −1,464 µm at 23.8 mm (slope 44.4°), 3A −125 µm at
  22.8 mm, 31A +532 µm at 18.4 mm and 39A +693 µm at 17.4 mm. None of them turns over.
- The engine's paraxial half-field is 36.0° / 28.4° / 22.4°. At the wide end it is limited by 2A (36.0°), then
  surface 6 (39.8°). This is below the patent's 42.5° even though the exact chief ray clears every rim.
- Live check (headless): production at wide infinity was the baseline. The local build was shot at wide infinity,
  tele closest focus (label 40 cm, D16 = 1.00), mid with the zoom-movement overlay and wide closest focus (42 cm)
  with the focus-movement overlay. The overlays show G1 and G3 with small reversing paths, G2 and G4 moving
  objectward and G21 moving 6.73 mm imageward. The f-stop slider runs f/2.92–f/22. Off-axis rays need a click and
  were not checked.

### Open limitations

- Iris radii are inferred from the constant FNo, not published.
- The close-focus gaps are calculated from the published travel. They reproduce the published imaging distances, but
  the patent has no close-gap table.
- The viewer's wide-end half-field (about 36°) is a paraxial estimate that is short of the patent's 42.5°. Enlarging
  G1's rear rims to the figure values (about 25–26 mm) would help but is inside the leave-alone band.
- No clear apertures are published, so all rims are estimates. G4 is drawn about 10–15 % larger than Fig. 1.
- The patent does not say which elements are ED. L32, L43, L44 and L41 keep `apd: "inferred"`, and Nikon's
  "2 ED + 1 ASP/ED" cannot be assigned from nd/νd alone.
