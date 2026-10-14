# Audit Log - Leica Elmarit 28mm f/2.8 (11801)

Patent: US 3,591,257

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/US3591257.pdf`; local text confirms the repeated nd=1.81265, vd=25.24 rows.
- Public catalog lookup did not find a defensible exact coefficient-backed match for the historical high-index flint pair.
- Converted both repeated `SF6 (SCHOTT)` annotations to code-only `813252` patent-glass labels to avoid resolving to the wrong modern catalog glass.

## 2026-06-24 — Folder audit recheck

- Rechecked local `patents/US3591257.pdf` OCR for Example 3. The repeated L4/L7 row remains nd=1.81265, vd=25.24.
- Synced the companion analysis and L7 role text so they no longer describe L4/L7 as resolved SF6 catalog glass.
- Rechecked APD/high-index status: no partial-dispersion data or APO claim are present, so all elements remain non-APD. L3, L4/L7, and L6 remain high-index/high-dispersion historical glass roles based on the patent constants.
- No patent clear-aperture or semi-diameter table was found. Existing SDs remain inferred from f/2.8 ray envelopes and the patent drawing's relative element apertures.

## 2026-07-29 - E-line catalog-mismatch disposition

- Rechecked Example 3 in local `patents/US3591257.pdf`; stored R, d, ne, and νe remain unchanged.
- S5 `LaF21 (SCHOTT)` -> explicit unmatched LaF21-class e-line glass at 1.79227 / 47.15.
- S13 `F2 (SCHOTT)` -> explicit unmatched F2-class e-line glass at 1.62408 / 36.11.
- The modern N-LAF21 and F2 d-line rows remain useful comparisons but are not assigned as spectral identities.
  Synchronized the companion analysis accordingly.

## 2026-07-30 - Reference-line metadata

- Added `indexReference: "e"` to all eight elements because the stored `nd` / `vd` slots preserve patent
  `ne` / `νe` values.
- The runtime and generated reports now reject d-line catalog substitution structurally rather than relying on annotation wording.
- No source values or prescription geometry changed.

## 2026-08-11 — Phase 95 F2 e-line recovery

- Re-rendered Example 3 on local patent PDF page 13 and confirmed L8 at `ne = 1.62408`, `νe = 36.11`.
- The legacy Schott F2 curve reproduces `1.624080 / 36.108`, so the old reference-line workaround is no longer
  needed for L8.
- Strict coverage rises by one surface. The N-LAF21-class row remains unmatched; no source values or geometry
  changed.

## 2026-08-21 — Near/close glass-candidate review

- Evaluated US 3,591,257's L6 coordinate on its authored e-line reference and assigned S-BAH28 as a
  supplier-neutral LaF10-class spectral proxy.
- L3, L4, and L7 remain unresolved because their e-line/high-index coordinates do not uniquely identify d-line
  catalog materials.

## 2026-09-23 — First-added diagram audit, lens 83

Source: local `patents/US3591257.pdf`, 14 pages. The pages used were:

- p. 2: Fig. 3, the Example 3 section.
- p. 5: Figs. 3a–3d.
- p. 9: Figs. 6c and 6e.
- p. 11, cols. 3–4: the Example 3 table.
- p. 12, cols. 5–6: the claim-4 restatement of Example 3.
- p. 13: Example 4.
- p. 14: the certificate of correction.

All pages were rendered and read from the images, not from the OCR layer.

**Re-verified and retained**

- **Front-page fields.** `patentNumber`, the authors (Walter Mandler, Garry Edwards, Erich Wagner), the assignee (Ernst Leitz GmbH), the year (1971) and the subtitle (Example 3) are correct. Example 3 is the only f/2.8 ±37° embodiment, so it is the right example for a 28 mm lens on 24×36.
- **Prescription rows.** Every R, d, nₑ and νₑ row except a₁ matches the table × 0.28, including the stop gaps a₃₁ = 2.14 and a₃₂ = 8.35, which are patent values. Claim 4 prints r₁ = +98.70 against the example's +98.79. The example value is kept; the effect on EFL is below 0.01.
- **Element focal lengths.** The stored element `fl` values match thick-lens values to 0.1 mm. Element `type` strings agree with the R signs.
- **Aperture.** `nominalFno` 2.8 is the patent's relative opening.
- **Metadata.** `lensMounts` `leica-r` and `imageFormat` `135-full-frame` are canonical ids.
- **Groups and certificate.** The group labels f₂ ≈ +20 and f₃ ≈ −105 match the patent's f₂ and f₃ × 0.28. The certificate of correction (signed Dec. 14, 1971) changes only Example 6's claim-1 f₁. The analysis previously dated it Dec. 11.

**Changes**

| Item | Before | After | Evidence |
|---|---|---|---|
| a₁ (S2 gap) | 2.761 (printed 9.86) | 5.561 (19.86 × 0.28) | See the a₁ note below. |
| r2 sd | 12.4 | 13.5 | The old 0.77\|R\| cap came from the misprinted 2.8 mm gap. At 13.5 the 28° bundle clears r2 (12.96 needed), which removes a 16% clip. The engine's paraxial half-field rises from 31.4° to 33.6°. The figure shows the L1 rim at about 16.1 mm. |
| r6 / r7 sd | 7.7 / 6.2 | 8.7 / 8.7 | Figs. 6c and 3 draw the L3/L4 doublet as a near-cylinder with a rim of about 8.7 mm, rear face included. The old r7 was 29% below the figure, and the old r6 clipped the 28° bundle by 13%. |
| r10 sd | 6.7 | 7.3 | The L6/L7 rim is drawn at about 8.0 mm. The cemented r11 is limited to about 7.4 mm by the L6 edge, so r10 now matches r11. |
| r13 / r14 sd | 7.4 / 7.8 | 8.2 / 9.0 | See the L8 note below. |
| STO sd | 5.7 | 5.9 | Real-ray iris radius for f/2.8 at the corrected scale is 5.88 mm. |
| Close BF | 21.278 | 21.964 | Unit-focus extension recalculated at 3.57 mm (m ≈ −0.127) for a 300 mm object-to-image distance, and labelled as calculated. |
| `fstopSeries` / `maxFstop` | ended at f/22 with default max 16 | ends at f/16, `maxFstop: 16` | The old series listed an unreachable f/22. f/16 is the production aperture-ring minimum. |
| L1/L2/L5, L8 glass | `SK16 (SCHOTT)`, `F2 (Schott; …)` | Schott catalog-equivalent wording with patent nₑ / νₑ | The patent names no glass or supplier. Resolution is unchanged (N-SK16 and F2 are OK-compatible). |
| L4/L7 glass | `813252` code (no match) | `SF6 (Schott catalog equivalent; …)` | The repo's Schott SF6 Sellmeier gives nₑ 1.81265 and νₑ 25.24 exactly. Glass resolution now marks the row OK-compatible. |
| Header, specs and group label | "e-line trace ≈ 29.2 mm", f₁ ≈ −36 | f = 28 mm, f₁ ≈ −35; `focalLengthDesign: 28` added | These followed from the a₁ correction. |

- **a₁ misprint.** The printed a₁ = 9.86 traces to f 104.20, s′ 67.03, f₁ −128.97 and f₁,₂ +82.46. The patent states 100, 65.70, −126.5 and +79.3. a₁ = 19.86 traces to 100.05, 65.64, −126.63 and +79.42. Changing any other single row fits only EFL, never all four values. Sister Example 4 prints a₁ = 19.88 and traces to f 99.87. In Figs. 6c and 3, the drawn a₁/a₂ is 0.36 and 0.32; 19.86/51.20 = 0.39, while 9.86/51.20 = 0.19. The old "d-line vs e-line 4% shift" explanation is withdrawn.
- **L8 rim (r13 / r14).** The figure shows L8 as the largest rear element, about 9.7 mm. It is drawn flatter than R13 = −9.69 allows, so r13 is held at sd/\|R\| = 0.85. The full-field clip at r14 falls from 92% to 54% of the upper half-bundle, and the 28° bundle is now unclipped.
- **Kept sizes.** r1 (15.4 against the figure's 16.1), r3/r4 (14.0/13.2 against 13.4), L5 (6.0/6.4 against 6.9) and r12 (7.4 against 8.0) are all within about 15% of the figure and were kept. r5 was kept at 10.4 even though the figure shows 8.7, because the 20° and 28° bundles need 9.4 and 10.0 mm there.

**Checks on the result**

- **Paraxial.** EFL is 28.013 mm and BFD 18.378 mm. The stored BF of 18.396 is patent s′ × 0.28, which leaves 0.018 mm of defocus. Total track is 72.44 mm.
- **Field and aperture.** The chief ray reaches the 21.6 mm corner at 37.7° (patent ±37°). No surface clips the f/2.8 axial beam, and no surface blocks the full-field chief ray.
- **Validators.** The surface validator and the image-circle floor both pass. The renderer shows no rim trims. The engine reports EFL 28.01 mm, half-field 33.6°, stop radius 5.88 mm and max f/16.
- **Glass.** Seven of eight elements resolve OK-compatible. L3 stays unresolved by design.
- **Close focus.** The close keyframe focuses at 299.98 mm object-to-image.
- **Live view.** A headless render of the local page at infinity and at 0.30 m, with the focus-movement overlay, shows L1 and L2 clearly separated as in Fig. 6c, D1 as a near-cylinder and L8 as the tallest rear element. All three groups move together by 3.57 mm. Off-axis rays were not exercised. The production baseline still shows the old compressed L1–L2 gap and a 29.17 mm EFL.

**Open limitations**

- The patent publishes no semi-diameters, close-focus state or iris diameter. The stop radius and close-focus travel are derived.
- The L3 coordinate (nₑ 1.79227 / νₑ 47.15) remains unmatched. N-LAF21 gives nₑ 1.79195 / νₑ 47.25.
- The analysis §1 claims about the production 8-element / 8-group air-spaced version and the Wetzlar designer credit were not re-sourced in this pass. Closed 2026-10-13: those claims described the Elmarit-R, a different lens; see the section below.

## 2026-10-13 — Re-identified as the M-mount Elmarit 28mm f/2.8 (11801)

This file was published from 2026-04 as the Elmarit-R 28mm f/2.8 under key `elmarit-r-28f28`. That attribution was
wrong, and the prescription itself is unchanged by this entry.

- **Why it is not the Elmarit-R.** Example 3's back focal distance is 0.657 f, 18.4 mm at 28 mm, which cannot clear a
  reflex mirror. The 1970 Elmarit-R is eight air-spaced singlets credited to Rudolf Rühl; it is now modelled from
  US 3,740,120 Table III in `LeicaElmaritR28mmf28TableIII.data.ts`, which holds key `elmarit-r-28f28`.
- **Why it is the M-mount lens, second version.** The Leica Wiki entry "28mm f/2.8 Elmarit II" lists order no.
  11801 / 11802, production 1972–1979, M bayonet including M5 and CL, 8 lenses / 6 groups, f/2.8–f/22, 0.7 m, 300 g,
  inscription LEITZ CANADA, and designers Walter Mandler, Garry Edwards and Erich Wagner, June 1968: the patent's
  inventors and the month of its German priority. Its section drawing shows two front menisci, a thick cemented
  doublet, the diaphragm, a meniscus, a cemented doublet and a rear meniscus, as Fig. 3 and the model do.
  Order no. 11801 was also used for the first version (1965–1972, 9 lenses / 6 groups), a different design.
- **Fields changed.** `key` → `leica-elmarit-28mm-f28-11801`; `name` → "LEICA ELMARIT 28mm f/2.8 (11801)" (the
  owner's wording); `lensMounts` → `leica-m`; `closeFocusM` 0.3 → 0.7 with the close keyframe of surface 14 moved
  from 21.964 to 19.657 mm (+1.261 mm from infinity, magnification −0.045, 700 mm object-to-image, paraxial, same
  convention as the earlier 0.30 m value); `maxFstop` 16 → 22. The header and the analysis were rewritten for the
  M lens; statements taken from Elmarit-R literature (the 1970 *LEICA Photography* description, the 40 mm
  protrusion and 275 g, the 1994 floating-element successor) were removed.
- **Checks.** Paraxial EFL 28.013 mm and BFD 18.378 mm are unchanged. With the M flange distance of 27.8 mm the rear
  vertex sits 9.4 mm behind the flange and the front vertex 44.6 mm ahead of it.

Open: no source consulted states the focusing mechanism; unit focusing is assumed because the patent has no moving
subgroup. The production match rests on construction, designers and date; no production prescription is published.

## 2026-10-13 — L3 glass resolved on a LaF21-type catalog row

- L3 (patent nₑ 1.79227, νₑ 47.15) was the file's one unmatched element. SUMITA K-LaSFn16 was added to the glass
  catalog from the vendor's Zemax file; its curve gives nₑ 1.79226 and νₑ 47.17, a difference of 0.00001 and 0.02.
  The label now names it as the catalog equivalent of the LaF21 type, so L3 traces on that curve anchored at the
  printed nₑ. Schott N-LAF21 (nₑ 1.79195) remains unused.
- All eight elements now resolve to catalog dispersion data. No radius, thickness, index, Abbe number or
  semi-diameter changed. The analysis glass table and the L3 paragraphs were updated to match.
- Semi-diameters were not revisited: the 2026-09-23 diagram audit above already compared them with the patent figure.

## 2026-10-13 — Second review: diagram, labels and movement

What was compared. The local lens page (infinity, 0.7 m, the focus-movement overlay at both ends, the inspectors of
L3, L5, L6 and L8, and the distortion, vignetting and aberration tabs) against `patents/US3591257.pdf`: Fig. 3 on PDF
page 2, Fig. 6c on page 9, Figs. 3a–3d on page 5, the Example 3 table on page 11 (cols. 3–4), claim 4 on page 12,
claim 5 on page 13, the certificate on page 14 and the front page. The patent has one section per example, so no
generic figure is involved: Fig. 3 is the section of Example 3 and Fig. 6c is the same example on the comparison
sheet. Both were measured again from 300 dpi renders, the scan's own resolution, with a separate pixel-run script.
No semi-diameter pass had been run on this file since 2026-09-23.

Scale. Fig. 6c has r1 at 381.5 px and r14 at 861.5 px: 480 px for 54.045 mm, 0.1126 mm/px (r1–r5, r5–r7 and r7–r14
taken separately give 0.1133, 0.1137 and 0.1109). Fig. 3 runs from 794.5 to 1273 px, 478.5 px. The two drawings are
one outline at one scale. The 2026-09-23 reading used 483 px.

Heights in mm, read at the centre of the outline stroke. The lower edges are drawn with a heavy stroke, so a range
is given where its inner and outer edges differ.

| Surfaces | Stored before | Fig. 6c | Fig. 3 | Stored now |
|---|---:|---:|---:|---:|
| r1, L1 front face | 15.4 | 16.1 | 16.1 | 15.4 |
| r2, L1 rear face, end of the arc at the bevel | 13.5 | 14.0–14.2 | 14.0 | 13.5 |
| r3, L2 front face | 14.0 | 13.2 | 13.3 | 14.0 |
| r4, L2 rear face | 13.2 | 12.6 | 12.1 | 13.2 |
| r5, L3 front face | 10.4 | 8.3–8.6 | 8.4 | 8.7 |
| r6, r7, L3+L4 block | 8.7 | 8.3–8.6 | 8.4 | 8.7 |
| r8, L5 front face below its chamfer | 6.0 | 6.0 | hidden by leader lines | 6.0 |
| r9, L5 rim | 6.4 | 6.5–6.9 | 6.8 | 6.4 |
| r10, r11, L6+L7 block | 7.3 | 7.7–8.0 | 7.8–8.0 | 7.4 |
| r12, L6+L7 block | 7.4 | 7.7–8.0 | 7.8–8.0 | 7.4 |
| r13, L8 front face below its chamfer | 8.2 | 8.0–8.1 | hidden by leader lines | 8.2 |
| r14, L8 rim | 9.0 | 9.4–9.7 | 9.4 | 9.0 |

Where the page and the figure differed to the eye, and what was done.

- L3+L4. The page drew L3's front face 10.4 mm high, 1.7 mm above the L4 block, with a sloping top between them,
  and taller than L8 (9.0 mm). Both figures draw one square-cut block, flat across both elements and lower than L8.
  The 2026-09-23 audit kept 10.4 mm so that the 20° and 28° bundles passed unclipped, which is a rim sized for
  transmission and not for the drawing. r5 now carries the block height of 8.7 mm. The axial f/2.8 ray needs 7.647 mm
  there at infinity and 7.607 mm at 0.7 m, and the full-field chief ray 4.85 mm. The chamfer Fig. 3 shows on L3's
  front corner starts 5.6 mm from the axis, inside the axial beam, and roughly follows the true arc of r5; it is a
  drafting chord, not a smaller aperture, and Fig. 6c draws the corner square.
- L6+L7. The block is drawn square-cut, and the data had 7.3 mm on r10 and r11 against 7.4 mm on r12. All three now
  carry 7.4 mm (L6 edge thickness 0.56 mm). The drawn 7.8 mm would leave L6 an edge of 0.10 mm; it passes the surface
  audit and changes no transmission value, but 7.4 mm is 4–7% below the drawing, inside the tolerance, and the block
  was not repainted.
- L1 and L2. L1 is 4% lower than drawn and L2 5–6% taller, so L2 reaches 91% of L1's height where the figures have
  83%, and L2's rim stands 0.5 mm above the end of L1's rear face where the figures put it about 0.8 mm below. Each
  value is inside the tolerance used for this batch and neither was changed. Lowering L2 to 13.3 / 12.3 mm changes no
  transmission value. Raising r1 to 16.1 mm raises the transmission curve at 34.9° and 37.8° from 77.6% and 53.1% to
  82.3% and 59.4%; see the note on the ray fans below before deciding it.
- L5, the L6+L7 height and L8 are 4–7% lower than drawn. Raising r14 to 9.4 mm raises the 37.8° transmission from
  53.1% to 59.4%; r9 at 6.8 mm and the block at 7.8 mm change nothing. A rim is not widened on that evidence.
- L1's bevel, L5's chamfer and L8's chamfer are drawn as the page shows them (front face lower than the rim).

Changes.

| Field | Before | After | Evidence |
|---|---|---|---|
| r5 `sd` | 10.4 | 8.7 | Square-cut block in Fig. 3 and Fig. 6c, 8.3–8.6 mm; drawn lower than L8. |
| r10, r11 `sd` | 7.3 | 7.4 | Square-cut block; one height with r12. |
| L6 `type` | Plano-Convex Positive | Biconvex Positive (near-plano front) | r10 = +3330.0 in the table (932.4 mm here), r11 negative. |
| L5 `role` | "…in diverging beam; field flattener" | converging beam; second-largest negative Petzval surface | The axial ray falls from 5.88 mm at the stop to 5.49 and 5.44 mm on L5. The r8 Petzval term is −0.00681 at f = 100, second to r13. |
| L6 `role` | "concentrates power at cemented interface to reduce ghosting" | positive member of the doublet; the cemented step is 0.084 | Surface powers in place at 28 mm: r10 +0.0008, r11 −0.0084, r12 +0.0289 mm⁻¹. The cemented surface is weakly negative. |
| Header note on semi-diameters | 483 px scale, r5 held at 10.4 | this review's readings and the one-height rule | as above |

The analysis follows: §6 (L5 and L6 paragraphs), §10.3 and §11.

The patent's ray fans (Figs. 3a–3d, page 5).

- The printed image heights 21, 15.75 and 10.5 are millimetres at f = 28: 21 mm is 36.9°, the table's ±37°. This
  confirms the 0.28 scale independently of the drawing.
- Distortion. An independent exact trace gives −0.227%, −0.378% and −0.343% at y′ = 10.5, 15.75 and 21 in the
  paraxial image plane (−0.167%, −0.318% and −0.284% in the stored plane of s′), against the printed −0.24%, −0.41%
  and −0.39%. The page's distortion tab shows the same curve, −0.32% at the corner.
- Spherical aberration. The patent has no longitudinal plot. In Fig. 3d the three curves have their extreme at 0.77
  to 0.84 of the aperture and return to zero at 0.95 to 1.0. The model's e-line fan has its extreme, 21 µm, at 0.85
  and returns to zero at 1.01; longitudinally −0.138 mm at the 0.85 zone and −0.014 mm at the margin.
- Astigmatism. The patent has no astigmatism or field-curvature plot. The off-axis fans can be compared on their
  abscissa, which fits the ray height in the entrance-pupil plane with ticks of 0.05 f (the axial curves end at 3.54
  and 3.57 ticks; f/2.8 is 3.571). In units of the semi-aperture the plotted extremes and zero crossings are −0.44 /
  +0.43 to 0.49 and −0.67 / +0.70 at y′ = 10.5, −0.38 / +0.35 and −0.62 / +0.60 at 15.75, and −0.29 / +0.32 and
  −0.49 / +0.54 at 21. The model gives −0.42 / +0.43 and −0.68 / +0.70, −0.37 / +0.37 and −0.61 / +0.63, and −0.32 /
  +0.31 and −0.54 / +0.54. Its tangential focus lies 0.27, 0.46 and 0.51 mm in front of the paraxial plane.
- Bundle limits. The vertical bars on the off-axis fans stand at −0.784 / +0.801, −0.685 / +0.702 and −0.589 /
  +0.596 of the semi-aperture. The three lower-edge rays meet r5 at 7.69, 7.66 and 7.69 mm, so the designers'
  clear radius on the L3 front was about 7.7 mm, 0.04 mm outside the axial ray. With r5 at 7.7 mm the model's lower
  limits are −0.786 and −0.690, and −0.590 at full field once r1 passes the ray. At 8.7 mm they are −0.934, −0.864
  and, at full field, −0.492 set by r1. At the old 10.4 mm the first two were −1.04 (the iris) and −1.10 (r6), so
  r5 clipped nothing. The fans therefore support the cut from 10.4 mm and point to a clear radius below the drawn
  block.
- The full-field lower-edge ray needs 15.71 mm at r1 and 13.44 mm at r2. The data have 15.4 and 13.5 mm, so the
  model's corner bundle ends at −0.49 where the patent plots −0.59.
- The three upper bars meet at one point 5.1 mm from the axis in the L5–L6 air space, 0.2 mm inside the axial ray
  there. They fit no rim of the published design and no rear rim was judged by them.

Checked and found correct.

- Prescription. Every R, d, nₑ and νₑ row equals the page-11 table × 0.28 except a₁, corrected on 2026-09-23. Both
  printings give a₁ = 9.86. In claim 4 the last digit of r₁ is a closed 0 (+98.70) where the example table has an
  open 9 (+98.79).
- Group brackets. The patent names its groups only by focal length (f₁, f₂, f₃ in the table and over the brackets of
  Fig. 6c). The page's FRONT NEG (f₁≈−35) on surfaces 1–4, POS DOUBLET (f₂≈+20) on 5–7 and REAR NEG (f₃≈−105) on
  8–14 are those three brackets. Recomputed at 28 mm: −35.46, +20.05 and −104.58 mm, and f₁,₂ = +22.24 mm (patent
  −126.5, +71.4, −376.0 and +79.3 at f = 100). The stop belongs to no group, as in Fig. 6c.
- Cemented brackets. D1 on surfaces 5–7 and D2 on 10–12, one per cemented component, equal to the `cemented` tags
  and the inspector badges.
- Element designations. The patent gives the elements no reference signs (only r, d and a), so L1–L8 are
  sequential and the diagram prints 1–8, which are also the indices of the patent's d₁–d₈.
- Types against the signs of R. L1 and L2 are negative menisci convex to the object, L3 is biconvex, L4, L5, L7 and
  L8 are negative menisci concave to the object, and L6 is biconvex with a nearly plane front. Element focal lengths
  recomputed: −76.55, −71.57, +14.07, −38.34, −167.13, +13.75, −20.24 and −39.00 mm.
- No aspherical surface and no `apd` tag: the patent gives two constants per glass and no partial dispersion.
- Stop between L4 and L5, 0.599 mm behind r7 and 2.338 mm ahead of r8 (a₃₁ and a₃₂). Fig. 3 draws it there.
- Front page: US 3,591,257, patented July 6, 1971, filed July 13, 1969 as printed, priority June 15, 1968
  (P 17 72 665.7), inventors Walter Mandler, Garry Edwards and Erich Wagner of Midland, Ontario, assignee Ernst
  Leitz GmbH, Wetzlar. The data file's patent fields agree.
- No statement belonging to the Elmarit-R was left in the analysis. The remaining mentions of a reflex mirror are
  the patent's own statement of its problem and the explanation of why Example 3 is not the R lens.

Movement. Unit focusing is the owner's assumption and was not reopened. The `var` pair of surface 14 lists infinity
first: 18.396 → 19.657 mm. An independent paraxial solve (EFL 28.0128, front and back focal distances 4.0528 and
18.3775 mm, principal-plane separation 20.4496 mm) gives an extension of 1.2611 mm for 700 mm from object to image,
magnification −0.04502, object 626.3 mm ahead of the first vertex. The overlay shows the three groups as equal
tracks of 1.26 mm away from the focus plane, toward the object; the slider runs from ∞ to 70 cm and the back focus
reads 18.40 and 19.66.

Results. The surface audit reports no errors, the image-circle audit none undersized, field coverage is 100%
(37.8° reaches 21.65 mm), and the clearance trace shows no clipped axial beam and no blocked chief ray at infinity
or at 0.7 m. The engine values are unchanged: focal length 28.0128 mm, f/2.8, stop radius 5.8766 mm, half-field
estimate 33.60° (r2 the first limit, then r1 at 35.3°). The transmission curve at 14.5, 17.4, 20.3, 23.2, 26.1,
29.1 and 32.0° went from 100, 100, 100, 100, 100, 100 and 96.9% to 99.0, 97.9, 96.4, 95.3, 94.3, 93.2 and 92.2%;
34.9° and 37.8° stay at 77.6% and 53.1%. On the page L3+L4 is now one square block, lower than L8.

Maker diagram. No manufacturer image was viewed. The re-identification section above records the Leica Wiki
drawing as two front menisci, a thick cemented doublet, the diaphragm, a meniscus, a cemented doublet and a rear
meniscus, 8 lenses in 6 groups, which is the layout of Fig. 3 and of the page. It records no aspherical or
special-glass marking.

Open.

- r5 at the drawn 8.7 mm or at the 7.7 mm the fans imply. 7.7 mm passes the surface audit and clears the axial ray
  in both focus states, and lowers the transmission curve to 98.4% at 2.9°, 89.1% at 20.3° and 84.4% at 29.1°. It
  would draw L3 with a sloping top again, and it is a value taken from plotted numbers, not from the drawing.
- r1 at 15.4 mm against a drawn 16.1 mm and the 15.71 mm the plotted full-field ray needs.
- L6 glass label. The patent gives only nₑ 1.72823 and νₑ 37.85 (table on page 11, claim 4 on page 12; Example 4
  uses the same pair), with no glass name, no further line index and no partial dispersion. On the S-BAH28 curve's
  own line differences the pair is n_d 1.72373 / ν_d 38.13, code 724381: a barium dense flint 0.0003 above the 723380
  type (BaSF8, BAFD8, BAH28), not the LaF10 the label names, which is 784438 (see the Contarex Planar 55 mm notes in
  this repo). No row with code 724381 is in the repo catalog or in the local Hoya, Ohara and Sumita files.
- L2 5–6% taller and the rear group 4–7% lower than drawn, as listed above.
- The focusing mechanism is still unsourced.
