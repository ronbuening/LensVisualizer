# JP S38-11587 B, sole example (Super Rokkor 5cm f/1.8, scaled to 50 mm): audit

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
cleanup pass below; the scale stays open.) (Scale closed 2026-11-10: rescaled to 50 mm, see the last section.)

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
  `lensMounts` and `catalog.closeFocusM.marketing` (0.5 m or 1 m) follow that choice. (Closed 2026-11-10: 50 mm,
  Super Rokkor 5cm f/1.8, Leica thread mount, 1 m; see the last section.)
- Rims, compared with Fig. 1 at 300 dpi (0.0544 mm per pixel over the 37.235 mm vertex span): the drawn lower
  half-heights give about 18.2, 15.1, 15.1, 10.9 and 12.4 mm for L1, L2, L3, L4–L5 and L6, within 0.1 mm of the
  modeled 18.3 / 15.2 / 15.2 / 11.0 / 12.5 mm. The S7 clear radius of 9.4 mm leaves 0.18 mm over the f/1.8 axial
  beam (9.22 mm); no change proposed. (Closed 2026-11-10: confirmed in the semi-diameter pass below.)

## 2026-11-10 — Semi-diameter pass against the patent figure

Source: JP S38-11587 B, Fig. 1 on p. 4 of the scan (the only section; the sole example), measured at the native
352 dpi. The axis is horizontal (row 1295.3). Scale: the near-axis vertex crossings of S1 and S11 are 800 px apart
over 37.235 mm, giving 21.485 px/mm. S4, S5, S7, S8 and S9/S10 fall within 2 px of the scaled prescription, and S2
and S6 within about 4 and 7 px. Five points on the S1 arc between 9.5 and 17.9 mm from the axis agree with R1 = 40.854 mm to
within 2–8 px, which checks the vertical scale. Heights were read on the lower side, inside the subsystem braces,
from the outer ink of each rim stroke, less half the 4 px stroke width.

| Surface | Model sd | Fig. 1 | Ratio | Evidence |
| --- | --- | --- | --- | --- |
| 1, 2 (L1) | 18.3 | 18.3 | 1.00 | flat square-cut bottom edge, 395.5 px |
| 3, 4 (L2) | 15.2 | 15.15 | 1.00 | flat bottom edge, 327.5 px |
| 5 (L3 front) | 15.2 | 15.1 | 0.99 | flat bottom edge, 326.5 px |
| 6 (L3 rear cap) | 10.2 | ≈ 9.7 | 0.95 | r6 arc follows R6 to 9.5 mm and leaves it by 10.0 mm |
| 6 (extension) | 15.2 | 15.1 | 0.99 | slanted chamfer from the cap end to the L3 rim |
| 7 (L4 front cap) | 9.4 | ≈ 9.2 | 0.98 | r7 arc follows R7 to 9.1 mm (lower) and 9.1 mm (upper) |
| 7 (extension), 8, 9 | 11.0 | 11.1 | 1.01 | common flat bottom edge of L4–L5, 240 px |
| 10, 11 (L6) | 12.5 | 12.6 | 1.01 | bottom edge, 272 px |

No value changes: every outer rim agrees with Fig. 1 within 0.1 mm (1 %), and both cap ends within 5 %, inside
measurement noise. The S6 cap could not go down to the figure's 9.7 mm without clipping the f/1.8 axial beam (9.73 mm
there). Fig. 1 draws the S6 and S7 chamfers slanted; the flat rim extensions place those lands square to the axis at
the cap ends, so the model's L3 and L4 rims are up to about 2 mm thicker than the figure's. The repo has no
slanted-land form, and a rim cut on S6 would cut into the axial beam. The extensions do not change the trace.

Clearance and light (unchanged): `audit:surface` reports no errors; `audit:aperture` reports f/1.800 within 3 % and
no rim limit; the image circle is not undersized. The engine half-field is 23° at F/1.800 with a stop radius of
9.4469 mm. Wide-open geometric transmission at infinity is 100 / 98.8 / 90.3 / 71.3 / 41.1 % at 0 / 5.4 / 10.8 /
16.2 / 21.5°, identical to the baseline. The 21.5° point is the 24 × 36 mm corner at 55 mm. The real-ray margins are
0.47 mm at S6 and 0.18 mm at S7.

Open: none for the rims.

## 2026-11-10 — Rescaled to 50 mm and attributed to the Super Rokkor 5cm f/1.8

Decision (Ron, 2026-11-10): publish the example as the Super Rokkor 5cm f/1.8 at 50 mm. The coordinator set the key,
name, `visible: true`, `lensMounts` leica-ltm, `fNumber.marketing` 1.8, `catalog.closeFocusM.marketing` 1, f-stops to
22 and 10 blades.

Evidence: the Super Rokkor 5cm f/1.8 (May 1958, Minolta 35 Model IIB; Leica thread mount and an optically identical
Super A version) is six elements in five groups at f/1.8 with a 1 m close focus, ten blades and a 46 mm filter
(minolta.su). The patent's 2ω = 46° is the 24 × 36 mm diagonal at f ≈ 51 mm. The back focus, 0.5922 F, is 29.61 mm
at 50 mm, 0.8 mm beyond the 28.8 mm thread-mount flange; at 55 mm it would sit 10.9 mm inside the 43.5 mm SR flange.
The match stays probable: no source names a designer or patent for the product, the minolta.su drawing ("Lens QA
Works") cites no source and may derive from this patent, and the 6/5 Gauss layout is common. The Auto Rokkor-PF
55mm f/1.8 is named in the analysis as the SLR sibling with the same layout.

Scale: every R and d is the printed value ×50, written exactly; the stop split is 5.298898 + 4.786102 mm (the scaled
paraxial pupil image, summing to 10.085 mm) and the last gap the paraxial back focus, 29.609079 mm. Rims scaled ×50/55
and rounded to 0.1 mm: 18.3 → 16.6, 15.2 → 13.8, 10.2 → 9.3 (S6 cap; extension 15.2 → 13.8), 9.4 → 8.5 (S7 cap;
extension 11.0 → 10.0), 11.0 → 10.0, 12.5 → 11.4. Element focal lengths scaled with them. `focalLengthMm` gains
`marketing: 50`; `design` is the rounded traced EFL, 50.0059. Projection unchanged (2ω = 46°).

Engine numbers, 55 mm → 50 mm: EFL 55.0065 → 50.0059 mm; F/1.800 both; half-field 23° both (tracing limit 25.81° →
25.85°); stop radius 9.4469 → 8.5881 mm (exactly ×50/55); BFD 32.5700 → 29.6091 mm; track 37.235 → 33.850 mm;
Petzval radius 211.2 mm at 50 mm. Wide-open transmission at matching angles is unchanged within 0.3 points (from
the 55 mm curve interpolated: 98.4 / 95.2 / 88.1 / 78.3 / 65.6 / 49.8 % at 5.8 / 8.6 / 11.5 / 14.4 / 17.3 / 20.1°;
at 50 mm: 98.5 / 94.9 / 88.0 / 78.1 / 65.9 / 50.1 %); at the 23° field edge it is 31.5 %. Real-ray margins over the
f/1.8 axial beam: 0.45 mm at S6 (8.85 mm) and 0.12 mm at S7 (8.38 mm). `audit:surface` reports no errors,
`audit:aperture` no rim limit, `audit:image-circle` nothing undersized. Field coverage of the 24 × 36 mm frame is
98 %: the declared 23° reaches 21.12 mm of 21.65 mm, and the 23.5° corner is clear of every rim (the 55 mm model
reached 100 % because the corner was at 21.5°).

Open: the 23° half-field leaves the outer 0.5 mm of the 24 × 36 mm corner untraced; raising
`projection.maxTraceFieldDeg` to 23.5 would trace it (the patent's 2ω = 46° kept per the decision).

## 2026-11-10 — Second review: diagram, labels and movement

Compared: the live page and the six element inspectors with Fig. 1 of JP S38-11587 B (p. 4, native 352 dpi), the
Fig. 2 aberration curves (p. 4), the prescription table (p. 2) and the front page. No change to the data file; this log's
title now names the 50 mm scale.

Rims, re-measured: the S1 and S11 vertex crossings are 799 px apart, 23.60 px per mm at the 50 mm scale. Lower outer
edges less half the 4 px stroke: L1 393 px (16.6 mm), L2 324.5 px (13.7 mm), L3 323.5 px (13.7 mm), L4–L5 237.5 px
(10.05 mm), L6 268.5 px (11.4 mm), S7 cap end 197 px (8.3 mm). Every outer rim is within 1 % of the model. The S6 and S7
cap ends (figure about 8.8 and 8.3 mm) lie on the f/1.8 axial beam (8.85 and 8.38 mm), so 9.3 and 8.5 stay. An overlay
at 23.63 px per mm follows Fig. 1's outline everywhere except the two chamfers. The drawn height order L1 > L2 = L3 > L6
> L4–L5 holds on the page, and L1 is square-cut as drawn.

Lands: the S6 (13.8 mm) and S7 (10.0 mm) extensions cost no light (`rimcost.mjs --loo`, full-pupil lattice: 0.0 points
won back at every field by removing either), and the validator accepts the file without them. Fig. 1 draws a land at
both faces, slanted rather than square. The square land keeps the flat tops of L3 and L4; removing it or lowering it to
mid-chamfer trades one outline error for another of similar size (about 4 mm² either way on L3, 1.5 against 1.8 mm² on
L4). Verdict: both kept (light cost 0.0 points; worst loss against the baseline 0.0 points).

Labels and tags: L1–L6 follow Fig. 1's L₁–L₆ and surfaces 1–11 its r₁–r₁₁; every `type` agrees with the signs of R;
the inspector focal lengths (+70.95 mm for L1, −23.70 mm for L3, −20.47 mm for L4) recompute by the thick-lens formula;
the roles are true. There are no aspheric surfaces and no `apd` tags (the patent names no special glass). The stop sits
in t6 between L3 and L4. One cemented bracket, C1 (S7–S9). `groups: []` stays: Fig. 1's braces I–IV mark the patent's
optical subsystems, which are surface sets (I = r1–r3, II = r4–r6, III = r7–r8, IV = r9–r11) that split L2 and L5
between brackets, and the spec reserves `groups` for mechanical groups.

Movement: none. The lens is static at infinity, `focus.description` says so, and the page's focus slider reads "Not
modeled".

Glass: L1 and L2 LAC12 (Hoya, Δνd +0.02), L3 SF15 (Sumita, catalog νd 30.0, Δνd −0.10), L5 BAF11 (Sumita, 0.00) and L6
BAF10 (Hoya, −0.01) resolve inside the exact window. S-TIM35 (Ohara, 699301, Δνd +0.03) is closer for L3 but is a
lead-free modern type; SF15 stays as the period dense flint. L4 (1.5749/39.2): the patent prints only nd and νd (p. 2)
and has no other example; the nearest rows (QF3, S-TIL27, J-LF7, Sumita LF7, Ohara PBL27, Hoya FL7) all sit at νd
41.3–41.5, outside the window, so there is no catalog proposal. No nd-only medium; no printed partial dispersion.

Colour: Fig. 2(a) plots d- and g-line spherical aberration at f = 100 mm. Traced at that scale, the g paraxial focus
lies 0.07 mm short of d (plot 0.07–0.10 mm); at 27.1 mm pupil height d is −0.14 and g −0.05 mm (plot −0.15 and −0.06);
at 23.8 mm d is −0.26 and g −0.21 mm (plot −0.26 and −0.20). L4's Abbe-number estimate fits the printed g curve.

Field: Fig. 2(b) and (c) agree with the trace through about 19°. The solid curve matches the traced sagittal field
(−0.37 mm at 14°, zero near 20.6°), the dashed one the meridional (−0.25 mm at 18°), and the distortion is +0.11 % at
14°, each within 0.03 mm or 0.03 %. Beyond 20° the printed curves are milder: at 22.6° the sagittal field is +0.20 mm
printed against +0.42 mm traced and the meridional −0.48 against −0.36 mm; at 22.9° the distortion is −0.14 % against
−0.47 %. Moving the stop 2 mm either way within t6 changes the traced 23° distortion only between −0.46 and −0.52 %, and
the Seidel table confirms the prescription, so the edge difference is recorded as a source inconsistency.

Assignee: the front-page applicant ミノルタカメラ株式会社 is "Minolta Camera Co., Ltd.", the corpus's canonical form.

Engine numbers unchanged: EFL 50.0059 mm, F/1.800, half-field 23°, stop radius 8.5881 mm. `audit:surface` reports no
errors, `audit:aperture` no rim limit, `audit:image-circle` nothing undersized, and field coverage is 98 % (declared
23°, corner clear). The open item on `projection.maxTraceFieldDeg` above stands.
