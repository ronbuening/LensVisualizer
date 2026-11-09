# CN110146970B Example 1 transcription audit

Date: 2026-11-09.

The original PDF and pixels of pp. 9, 10, 14, 15 and 16 were inspected. All 20 source surfaces, including cover glass, were compared with the supplied transcription.

Source S10 maps to STO; S19–20 map to the standard rearPlates representation. All radii, axial thicknesses, indices and Abbe numbers remain literal. The close table changes only d7 and d9. The printed 697 mm object distance is first-vertex referenced, consistent with the 103.397 mm track and rounded 0.8 m total distance. The object distance is explicitly authored as a finite conjugate, not inferred from a focus slider label.

Missing surface apertures are reconstructed from the figure's overall envelope with beam/geometry checks, not asserted as measured source values. Both faces of each element share an aperture; the cemented interface shares the same 21 mm radius. The front-to-rear radii are 30, 24, 21, 21, 17, 15, 14, 12, 14 mm (superseded by the 2026-11-09 semi-diameter pass). Geometry uses the default 90% gap-sag limit. No rim cuts, validation relaxation or hidden render trim are used.

The 23.5425 mm pupil radius is printed in Fig. 2A. The standard prime stop rule yields a 28.08963655 mm physical diameter, labeled inferred. The 13.669° source half-field is retained even though it reaches only 97.03% of the 135-frame corner radius. No source geometry was changed to fill the corner.

Independent paraxial focus residuals relative to the literal sensor are −0.0179802 mm at infinity and +0.1818068 mm at the 697 mm finite endpoint. These are disclosed, not repaired. Midpoint mechanical interpolation has no source-certified conjugate, so its MTF is unavailable rather than silently evaluated as an infinity design.

No catalog glass identities or partial-dispersion coefficients are established (superseded 2026-11-09: exact-match catalog equivalents added, see the cleanup pass). D-line ray and MTF checks use literal indices. Exact production association is unproven; production review scores do not validate this prescription.

AST-based comparison against all 1,095 other catalog prescriptions found no complete signed-curvature sequence match after arbitrary scaling at 0.1% tolerance. This detects same-order scaled designs, not every conceivable rearrangement or optical equivalence.

## 2026-11-09 — Deployment validation

Independent check of CN 110146970 B Example 1 (PDF p. 9 page images): 20 surfaces, stop at S10, cemented L13/L14,
cover glass S19–S20 and both variable gaps at both states agree; no aspheres. Engine EFL 84.747 (printed 84.67; the
same +0.08–0.09 % offset appears in Examples 2 and 3), close EFL 80.052 (80.03), conditional values reproduce.
Attribution probable: 9/8 with the ED element at L14 and the single focusing lens before the stop, as Yongnuo's
diagram draws; Example 1 fits the 88 mm product length best.

Deployment change: `source.assignees` → "Shenzhen Yongnuo Electric Appliance Co., Ltd." to match the front page
(深圳市永诺电器有限公司); the analysis assignee line follows.

## 2026-11-09 — Cleanup and wording pass

Data file changes (no optical value touched):

- Header rewritten as plain technical notes: printed versus derived values, the stop rule, the inferred rims and
  the attribution, with its caveats.
- `subtitle` → "CN 110146970 B, Example 1 — probable match to the 2020 production lens".
- `specs` → 9/8, DESIGN f = 84.67 mm, DESIGN F/1.8, ALL SPHERICAL, 1 ED ELEMENT (was "f = 84.67 mm (source)",
  "F/1.8", "2ω = 27.338°").
- `catalog.closeFocusM.marketing` 0.8 (Yongnuo).
- `aperture.blades` 7 (Yongnuo).
- `focus.description` names the printed states.
- Element roles added.
- L14 `apd: "inferred"`, because Yongnuo's drawing marks the ED element at that position and 1.497/81.61 is the
  FCD1 / S-FPL51 class.
- Glass labels added only where a catalog row equals the printed pair (|Δnd| ≤ 0.0001, |Δνd| ≤ 0.15), each
  confirmed with trylabel: L12 S-FPM3, L13 NBFD15, L14 FCD1, L21 BSM4 (Δνd 0.03), L31 YGH52, L33 TPH55, L34 SF10.
  L11 (1.8213/42.73) and L32 (1.5955/38.77) have no match and are labelled Unmatched.
- The patent states the d-line (¶0117, ¶0120).

Analysis changes:

- Removed package and validation-report references.
- Added the product, R and Z versions, the 2022 revision, the 9/6 EF/F lens, the maker-drawing comparison and the
  attribution evidence. The evidence includes ¶0110, which names an 85mm F1.8 mirrorless lens.
- Added the caveats: three examples share the layout; the shaded high-index L31 position is Example 1's third-highest
  index; paraxial 0.138× against 0.13×.
- Added a conditional-expression table. Condition (6) reproduces with L32 in all three examples, although ¶0123
  calls L34 the meniscus.
- "Verification Summary" and "Aperture Reconstruction" merged into "Model Scope and Limitations".

Engine numbers before and after, identical:

- EFL 84.7466 mm, FOPEN 1.79987, half-field 13.669°, stop radius 14.0448 mm.
- BFD 0.9820 mm (infinity) and close-row EFL 80.0518 mm.

audit:surface OK. audit:aperture reports no rim limit.

Open (closed 2026-11-09 by the semi-diameter pass below): the S6/S7 rims (21 mm) are larger than Fig. 1 draws
(about 18 mm) and L32 (14 mm) slightly larger (about 12.8 mm). The 30 mm front rim exceeds what Yongnuo's 58 mm
filter thread suggests. Rims were left unchanged in this pass.

## 2026-11-09 — Semi-diameter pass against the patent figure

**Source and scale.** Source is CN 110146970 B, Fig. 1 (PDF p. 14), Example 1 at infinity focus. The figure is
embedded at 150 ppi and was measured at 300 dpi.

- Vertex crossings near the axis match the prescription. S1→S18 is 1473 px for 85.479 mm; S1→image is 1782 px for
  103.397 mm. Both give 17.23 px/mm, and the intermediate vertices agree within about 1 px.
- The vertical scale is the same. The L11 front corner, at 514 px height and 140 px axial offset, gives a sag of
  8.13 mm; R 58.558 gives 8.17 mm at 29.8 mm.
- Rims were read at the line centre on both sides of the axis, with the figprofile cross-check on the clean side.

**Figure readings and changes.** Figure readings, in mm:

| Element | Figure | Before | After | Evidence |
| --- | --- | --- | --- | --- |
| L11 (S1/S2) | 29.8 | 30 | 29 | Within reading of the figure; held to the 58 mm filter-thread radius |
| L12 | 24.1 | 24 | 24 | Kept |
| L13 front (S5) | 22.1 | 21 | 22.1 | Figure; also clears a real axial clip at close focus |
| S6 interface / L14 rear (S7) | 18.0 | 21 | 19 | Close-focus floor; square-cut L14 |
| L21 | 16.0 | 17 | 17 | Kept, within noise |
| L31 | 14.7 | 15 | 15 | Kept |
| L32 (S13/S14) | 12.9 | 14 | 12.9 | Figure |
| L33 | 11.6 | 12 | 12 | Kept |
| L34 | 14.0 | 14 | 14 | Kept |

The L13 front and its rear flat annulus are drawn to 22.1 mm. The figure steps the annulus down to L14's 18.0 mm
square cap.

**Real-ray floors at f/1.80 with the 14.04 mm engine stop.** The patent's 697 mm close state (object 697 mm before
S1, D(1) 17.45, D(2) 2.78) gives these axial marginal heights:

- S1 25.67, S3 22.92, S4 21.80, S5 21.59, S6 18.81 and S7 18.35 mm. The 21 mm S5 rim clipped this beam.
- At infinity the heights are S5 18.29, S6 16.34, S13 12.19 and S14 11.46 mm.
- The engine's close-focus vignetting curve stops losing on-axis light only at S6 ≥ 19.0. That sets L14 at 19.0 on
  both faces; the figure draws it square.

**Light rule.** Measured with the app's vignetting lattice, wide open, against the starting rims.

At infinity, fields 0 / 2.3 / 4.6 / 6.8 / 9.1 / 11.4 / 13.7°:

| Rims | Transmission (%) |
| --- | --- |
| Before | 100 / 100 / 97.1 / 87.9 / 77.6 / 65.4 / 50.6 |
| After | 100 / 100 / 97.8 / 91.1 / 81.8 / 70.1 / 53.4 |

At the close state, fields 0 / 1.8 / 3.5 / 5.3 / 7.1 / 8.8 / 10.6°:

| Rims | Transmission (%) |
| --- | --- |
| Before | 79.8 / 79.0 / 77.6 / 73.0 / 65.2 / 55.8 / 45.3 |
| After | 87.9 / 87.2 / 83.8 / 78.6 / 70.4 / 60.3 / 49.3 |

The close-state curve is traced at the close spacings, as the app does. Leave-one-out restores give back:

- L11 at 30 mm: 2.4 points at 13.7°, under the 3-point limit.
- L32 at 14 mm: 0.1 point.
- L14 at 21 mm: 0.3 point at close focus.

No cut costs more than 3 points at any field, and the set gains light overall from the larger S5.

**Engine figures.** EFL 84.7466 mm, f/1.79987, half-field 13.669°, stop radius 14.0448 mm and BFD 0.9820 mm are
unchanged.

**Results after the pass.**

- audit:surface OK; audit:aperture reports no rim limit.
- audit:image-circle reports 0 undersized; field coverage is 97 %, as declared.
- clearap at Y = 21.0 mm reports no CLIPS-AXIAL or BLOCKS-CHIEF.

**Maker drawing.** Yongnuo's construction drawing (product page image Detail-7-26e5.jpg) agrees in order and
counts. It shows L13/L14 with L14 shaded as the ED element, a smaller L14 than L13, and a rear group in which L32 is
smaller than L31 and L34. It is not to scale.

**Live check.** The rendered section was checked at focus 0 and 1. It shows L13 stepping down to the smaller L14
and the rear-group order L31 > L32 > L33 < L34, as Fig. 1 draws.

Open: the renderer draws L13's top as a taper from 22.1 mm at the front to the 19 mm interface, where Fig. 1 draws a
flat flange and a step. A rim extension cannot be used on a cemented interface. L21 (17 mm) sits about 1 mm above
the figure's 16.0 mm, within reading noise.
