# JP S38-11587 B, sole example (scaled to 55 mm): audit

## 2026-11-10 — Initial transcription (package delivery)

- Source: the four-page JP S38-11587 B scan. The table on p. 2 was transcribed: eleven radii, ten spacings, six
  nd/νd pairs, F = 1.0, 1:1.8, 2ω = 46°, with S₁ = ∞ and P₁ = 0.5419 from the Seidel table header; Fig. 1 (p. 4)
  was compared for layout. Minolta's SR-109 brochure (printed p. 13) shows the Auto Rokkor F1.8/55mm as six
  components in five groups with a 1 + 1 + 1 + 2 + 1 section.
- Example label "Sole example" (`id: null`). Inventor romanized as Yoshiya Matsui; applicant Minolta Camera Co., Ltd.
- All R and d are the printed values ×55; the EFL is not fitted to 55 mm and the maker's 43° is not substituted for
  the patent's 46°.
- Not printed in the source: the stop split, clear apertures and rim extensions, the scale, and the infinity back
  focus. The stop is the paraxial image of the printed entrance pupil (P₁ read imageward from S1; the opposite sign
  puts the stop outside t6); its radius is derived from F/1.8.
- No duplicate prescription was found in the catalog.
- The three printed forms of the n5 − n4 condition (0.0065 / 0.065 / n5 − n5) were recorded as an unresolved
  erratum. (Closed 2026-11-10: moved to the analysis; it does not affect the prescription.)

## Initial open items (closed 2026-11-10)

1. Geometry checks (rim slope, thickness, gap intrusion, rim extensions). Closed: `audit:surface` reports no errors.
2. Iris from F/1.8, pupils, on-axis clearance and the 23° half-field. Closed: the engine derives a 9.447 mm stop
   radius at f/1.800; axial rays clear every surface and the 23° chief ray traces.
3. Field chief-ray heights, distortion, vignetting and MTF. Partly closed: the image circle covers the 24 × 36 mm
   frame (21.65 mm half-diagonal) and edge-field vignetting is that of an f/1.8 Gauss with the Fig. 1 rims;
   distortion and MTF were not assessed separately.
4. Infinity focus behavior and visual comparison with the patent section. Closed: infinity only; the layout matches
   Fig. 1.

## Deployment validation (2026-11-10)

Independent check against the J-PlatPat scan (p. 2): 11 R, 10 t, 6 nd/νd pairs and the stop interval t6 equal the f = 1
example ×55; no mismatches. The printed Seidel table recomputes (53 of 55 entries within 0.0006; the two outliers are both
surface-7 misprints in the patent's Seidel table, I7 and the sign of II7, not in the prescription). EFL 55.0065, F/1.8,
2ω 46°. Same designer (Yoshiya Matsui) and 6/5 layout as the 1958 Auto Rokkor-PF 55mm f/1.8 (SR-109 brochure), but also as
the 1958 Super Rokkor 5cm f/1.8; 2ω = 46° fits f ≈ 51 mm on 24×36, and at 55 mm the derived back focus (32.6 mm) would put
the rear vertex well behind the SR flange. The Auto Rokkor 55 attribution is therefore unproven; the entry stays a hidden
patent design.

Applied: patent PDF filed as `JPS3811587B.pdf`; `catalog.imageFormat` 135-full-frame.

Open: choose the scale (50 vs 55 mm) and a house-style patent-design name/key before showing it; drop the errata entry
(a claims-inequality typo, not a prescription defect) to the analysis; replace private-archive links in the analysis;
rewrite this log and the public wording. (Name/key set at integration; errata, links, log and wording closed in the
cleanup pass below; the scale stays open.)

## 2026-11-10 — Cleanup and wording pass

Fields changed in the data file: header comment rewritten in plain terms (same facts; the scale is stated once);
`subtitle` → "JP S38-11587 B, sole example — same 6/5 layout as the 1958 Auto Rokkor-PF 55mm f/1.8 and Super Rokkor
5cm f/1.8"; `specs` → 6 ELEMENTS / 5 GROUPS, DESIGN f = 1.0 (SCALED TO 55 mm), DESIGN F/1.8, 2ω = 46°, ALL
SPHERICAL; `catalog.focalLengthMm.design` 55.00650981982096 → 55.0065 (rounded traced EFL, the convention of the
Minolta primes in this folder); `focus.closeFocusM` 1 → 1e15 (infinity-only placeholder) with a plain description;
the `source.errata` entry for the n5 − n4 condition removed (the analysis now carries it under Conditional
Expressions); element roles rewritten; the single "Fixed infinity assembly" group bracket removed (`groups: []`; the
patent's subsystems I–IV are built around air spaces and do not map onto elements); `visible` stays false.

Glass labels (patent nd/νd → catalog row, Δnd / Δνd): L1 and L2 1.6779/55.5 → LAC12 (Hoya), 0.00000 / +0.02;
L3 1.6990/30.1 → SF15 (Sumita), −0.00005 / −0.10 (chosen over the lead-free E-FD15 and S-TIM35 rows as the
period glass type); L5 1.6667/48.4 → BAF11 (Sumita), +0.00002 / 0.00; L6 1.6700/47.2 → BAF10 (Hoya), +0.00003 /
−0.01. L4 1.5749/39.2 has no row within tolerance (nearest 1.5750/41.3) and stays Unmatched. No `nC`/`nF`/`ng`
were present; no `apd` tags (no special-dispersion glass).

Analysis: process sections removed (construction-hypothesis status, decimal-replay digits, raster pixel
measurements, corpus-scan counts, qualification status, private Drive links); the identification now gives both
1958 candidates and the 50 mm versus 55 mm evidence (2ω = 46° is the 24 × 36 diagonal at f ≈ 51 mm; the 32.6 mm
back focus at 55 mm would sit 10.9 mm behind the SR flange, against 36.0–36.9 mm for the catalog's SR-mount
standard lenses); new Conditional Expressions and Aberration Coefficients sections record the condition table and
the Seidel-table recomputation; the patent is cited on J-PlatPat. The earlier "same designer" wording in the
deployment-validation note is not supported: the designers of the production lenses are not documented, so the
public text says "same 6/5 layout" only.

Engine numbers before and after (identical): EFL 55.0065 mm, F/1.800, half-field 23°, stop radius 9.4469 mm, BFD
32.5700 mm, track 37.235 mm; `closeFocusM` reads 1e15 instead of 1. `audit:surface` reports no errors;
`audit:aperture` reports no rim limit.

Open:

- Scale: 55 mm (Auto Rokkor-PF) or 50 mm (Super Rokkor 5cm f/1.8) must be decided before the entry is shown;
  `lensMounts` and `catalog.closeFocusM.marketing` (0.5 m or 1 m) follow that choice.
- Rims, compared with Fig. 1 at 300 dpi (0.0544 mm per pixel over the 37.235 mm vertex span): the drawn lower
  half-heights give about 18.2, 15.1, 15.1, 10.9 and 12.4 mm for L1, L2, L3, L4–L5 and L6, within 0.1 mm of the
  modeled 18.3 / 15.2 / 15.2 / 11.0 / 12.5 mm. The S7 clear radius of 9.4 mm leaves 0.18 mm over the f/1.8 axial
  beam (9.22 mm); no change proposed.
