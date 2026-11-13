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
  L11 (1.8213/42.73) and L32 (1.5955/38.77) have no match and are labelled Unmatched (closed 2026-11-09: catalog rows added; see the glass coverage pass).
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
the figure's 16.0 mm, within reading noise. (L21 part closed 2026-11-09 by the second review: a 15.9 mm reading puts
17 mm 7 % high, inside the 10 % band, with the step order right; kept. The L13 part stays open below.)

## 2026-11-09 — Glass coverage pass

L11 (1.8213 / 42.73) and L32 (1.5955 / 38.77) now name HOYA MP-TAFD51-50 and OHARA PBM18Y, rows added to the glass
catalog from the local HOYA 2026-07-07 and OHARA 2026-07-01 AGF files; both equal the printed pairs (Δνd ≤ 0.01). The
GL cover plate (1.5168 / 64.2) is labelled CDGM H-K9L as a catalog equivalent; the patent does not name its material.
Every element and the plate now trace on catalog dispersion curves. A corpus-wide resolution dump before and after the
catalog additions showed no other element changing its resolved glass.

## 2026-11-09 — Second review: diagram, labels and movement

**Compared.** The local page at infinity and at the 0.8 m state, the focus-movement overlay and the inspectors of L13,
L14 and L32 against Fig. 1 (PDF p. 14) at 300 dpi, with a model outline drawn over the figure. The scale holds in both
directions: S1 to S18 is 1473 px for 85.479 mm and S1 to the image 1782.5 px for 103.397 mm (17.23 px/mm), every
vertex from S4 to S17 falls within 1 px, and the L11 front arc gives sags of 2.47 and 4.53 mm at 16.8 and 22.6 mm
(R 58.558: 2.47 and 4.55). Rims were read from the line centres above and below the axis: L11 29.8, L12 24.0, L13 22.1,
L14 18.0, L21 15.9, L31 14.6, L32 12.8, L33 11.6 and L34 14.0 mm. Every stored rim is within 10 % of its reading
(L21 +7 %, L14 +6 % on its close-focus floor), the step order matches, and every element except L13 is drawn square
in both. No rim changed.

**L13 flange.** Fig. 1 draws L13's top flat at 22.1 mm back to the S6 rim, 8.3 mm behind the S5 vertex, then a
square step down to L14's 18.0 mm cap. The site joins the 22.1 mm S5 rim to the 19 mm interface rim, so it draws a
taper. No allowed edit draws the step: a rim extension is refused on the cemented S6; a rim cut needs a face whose
rim bends into air, and S5's bends into the glass; raising S6 and S7 toward 22.1 mm moves L14 further from the
figure and leaves it with no edge past about 21.2 mm; lowering S5 is barred by the close-state axial beam, which a
real object at 697 mm brings to 21.6 mm at S5 (100 % on axis at 21.7 mm, 99.3 % at 21.5 mm). L14 at 18.9 mm keeps
100 % on axis at that state and 18.8 mm drops to 99.9 %, so its 19 mm floor stands.

**Lands and cuts.** No lands. All three cuts stand: L11 30 → 29 mm wins back 2.4 points at 13.7° if restored, L32
14 → 12.9 mm 0.1 point and L14 21 → 19 mm at most 0.3 point. Against the starting rims, `rimcost.mjs` reports a worst
loss of 0.0 points at infinity and gains of up to 4.7 points. The close state with parallel beams gains at every
field (on axis 79.8 → 87.9 %, 10.6° 45.3 → 49.3 %). With a real object at 697 mm, the 21.0 mm image corner goes from
45.8 to 49.4 % and the axis from 95.3 to 100 %. Engine EFL 84.747 mm, f/1.7999, half-field 13.669° and stop radius
14.045 mm are unchanged.

**Changes (labels only).**

| Field | Before | After | Evidence |
| --- | --- | --- | --- |
| `diagramLabel`, all elements | none (diagram showed 1–9) | L11–L14, L21, L31–L34 | Fig. 1 and the text name the elements this way; the doublet bracket already read L13 / L14 |
| `focalLengthMm`, all elements | none (inspector showed FL = —) | +87.1, +98.1, −36.3, +71.0, −72.3, +47.1, −313.3, +307.8, −82.4 mm | Thick-lens focal length in air from the printed R, d and nd; the analysis quotes the same values |
| `cemented`, L13 and L14 | none | L13 / L14 | Inspector now badges the pair as a doublet, with the bracket's text |

The header no longer says L11 and L32 match no catalog row, and it notes the L13 taper. The analysis no longer calls
L14 the only anomalous-dispersion glass: L12's S-FPM3 has a catalog ΔPgF of about +0.021 (FCD1 +0.032).

**Labels and tags.** Groups GR1 (S1–S7), GR2 FOCUS (S8–S9) and GR3 (S11–S18) are the figure's. The single doublet
bracket spans S5–S7. The stop sits 50.60 mm behind S1, between L21 and L31, where Fig. 1 draws SP (50.5 mm). Its
ticks end 14.4–14.5 mm from the axis against the derived 14.04 mm stop radius, within 3 %. Element types agree with
the signs of R, the lens has no aspheres, and the roles are true. The only `apd` tag is the inferred one on L14,
the ED position on Yongnuo's drawing. The gap labels D(1) and D(2) follow the table on p. 10.

**Movement.** Keyframe 0 is infinity (D(1) 2.95, D(2) 17.28 mm) and keyframe 1 the 0.8 m state (17.45, 2.78 mm).
L21 moves 14.50 mm toward the image, as the arrow under GR2 in Fig. 1 points. GR1, the stop, GR3 and the image plane
stay fixed. The slider's close end reads 81 cm, the paraxial object distance of the printed close spacings: their
focus falls 0.18 mm behind the printed plane. That is within 2 % of Yongnuo's 0.8 m, so no marketed note shows.

**Colour and field.** The d-line spherical aberration matches Fig. 2A within 1 µm through 0.85 of the pupil. The
C–F spread also matches: 131.5 µm in the plot, 131.7 µm in the model. Both lines sit about 5 µm forward of the plot
relative to d. Paraxially, C is +71.2 µm in the plot against +66.6 µm in the model, and F is −60.3 against −65.2 µm.
Fig. 2C, at the close state, shows the same shift: d +0.198 mm with F on it and C +0.265 mm, against model d +0.200,
F +0.189 and C +0.258 mm. A partial dispersion (nd − nC)/(nF − nC) on L13 0.0014 below NBFD15's 0.2924 would close
both plots; one on L11 0.0025 above MP-TAFD51-50's 0.2981 would also. No in-window catalog row does it: J-LASFH6 moves
L13 the wrong way by 1.3 µm, and the alternatives for L14, L21 and L34 move it by 1 µm or less. Fig. 2B distortion
is +1.87 % at 13.669°; the model gives +1.88 %. Field curvature has the same shape in both: the sagittal curve dips
deepest and the curves cross near 0.97 of the field. The model sits 5–9 µm less inward from 0.75 of the field out:
T −0.077 against −0.086 mm and S −0.064 against −0.072 mm at full field.

Open: L13's flat flange and step (Fig. 1) need a land on the front side of a cemented interface, which the schema
does not allow. With one, S6 would stay 19 mm and L13's rear would run flat from 19 to 22.1 mm at the S6 rim.
