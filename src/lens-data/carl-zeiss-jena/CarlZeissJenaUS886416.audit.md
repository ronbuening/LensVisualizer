# Audit

Source: US 886,416 (Paul Rudolph, assigned to the firm of Carl Zeiss; granted 1908), Example 2, Fig. 2. The drawing sheet and specification page 1 were transcribed by eye. The diaphragm distance b is labelled on each half of the drawing. Radius signs come from the drawing; no value was fitted. Indices are the printed D-line values only. No exact product attribution is made. Example 1 of the patent is not modelled.

## 2026-11-17 — Deployment validation

**Checked.** An independent re-read of the patent page images at 300 dpi (specification page 1, lines 80–100, and Fig. 2) against the data file: four radii (20.3, 54.8, 10.7, 22.6), the diaphragm distance (2.7), three thicknesses (1.0, 4.1, 2.1) and three nD values (1.4626, 1.5832, 1.6240), each used twice in the symmetric objective. No mismatch. Radius signs agree with Fig. 2 and with the claims. The front page gives No. 886,416, filed July 12, 1907, patented May 5, 1908, Paul Rudolph, assignor to the firm of Carl Zeiss, of Jena.

**Verdict.** Valid: a faithful transcription that reproduces the patent's focal length of 100 within 0.13 %. The patent names no product. The Zeiss Doppel-Amatar 1:6.8 is the nearest known product (two cemented triplets), but the link is unproven: the patent example is f/6.3, and a Zeiss brochure section is reported to show a plano-convex centre element where the patent has a biconvex one.

**Changes.**

- File form: single-line object → multi-line house form with a header comment stating source, scale, signs and inferred values.
- `maker`: `null` → `"Carl Zeiss Jena"` (the patent is assigned to the firm of Carl Zeiss).
- `source`: absent → `US 886,416 A`, Example 2, 1908, Paul Rudolph, Carl-Zeiss-Stiftung, `sdSource: "heuristic"` (the rims are estimates).
- `catalog.focalLengthMm.design`: 100 → 99.87 (the computed value).
- Elements: `cemented` tags `T1` (L1–L3) and `T2` (L4–L6) added; `doublets` entries added for surfaces 1–4 and 6–9; labels "Patent glass N" → "Element N"; `focalLengthMm` and `role` added.
- Last gap: 91.18100437324723 → 91.181 (same computed paraxial back focus, float noise rounded).
- No radius, thickness, index, stop position or rim was changed.
- Analysis rewritten to the house section layout. The first paragraph of this audit was reworded in plain English.

**First-order values after the changes.** Focal length 99.867 mm, f/6.3, back focus 91.181 mm (paraxial, zero defocus), vertex length 19.8 mm, total length 110.981 mm, stop radius 6.89 mm. Each cemented triplet: 173.58 mm.

**Validator results.** Surface audit: no errors. Aperture audit: within 3 % of the stated f-number, no rim, trace or iris limit. Real-ray clearance at f/6.3 and a 8.7 mm image height (5°): no axial clipping and no blocked chief ray. The image-circle and field-coverage audits skip the lens (no image format; the file was not yet public at that date).

**Open:**

- Name, key, subtitle and specs are as delivered ("D-line patent reference", "NO VERIFIED PRODUCTION MATCH", "PATENT REFERENCE", `focus.description`) and need the house wording; the file stem may also change. (Closed 2026-11-17: renamed and reworded.)
- `closeFocusM: 1e15` awaits the house infinity form. (Closed 2026-11-17: `1e15` is the house form for an infinity-only model.)
- Rims are estimates (8.5 / 7.8 mm); Fig. 2 scales to roughly 7.4 mm. For the semi-diameter pass. (Closed 2026-11-18: see the semi-diameter pass below.)
- The 5° trace field is arbitrary; the patent states no field.
- Dispersion: the patent prints nG′ (1.4714, 1.5972, 1.6448) but no Abbe number. A two-term fit through nD and nG′ gives roughly ν ≈ 67, 53 and 38 for glasses I, II and III. These are estimates, not source data, and are not in the model; no modern or period glass was matched.
- Product link to the Doppel-Amatar remains unproven; no public optical section was obtained.

## 2026-11-17 — Cleanup and wording pass

**Fields changed.**

- `subtitle`: "1908 SYMMETRIC CEMENTED TRIPLETS; NO VERIFIED PRODUCTION MATCH" → "US 886,416 A, Example 2 — Rudolph symmetric double objective".
- `specs`: "6 ELEMENTS / 2 GROUPS", "D-LINE ONLY", "PATENT REFERENCE" → "6 ELEMENTS / 2 GROUPS", "DESIGN F/6.3", "ALL SPHERICAL". No focal-length line, because the patent itself prints f = 100.
- `focus.description`: "Infinity-only patent reconstruction." → "Infinity focus only; the patent gives no close-focus data." `closeFocusM` stays `1e15`; no marketed close focus is recorded because no product is documented.
- Element `type`: "Biconvex" → "Biconvex Positive" (L2, L5); "Biconcave" → "Biconcave Negative" (L3, L4). "Negative Meniscus" kept (L1, L6).
- Cemented group ids: `T1`, `T2` → `C1`, `C2` on all six elements and in `doublets` (one entry per triplet).
- Header comment: the phrase about scaling removed (the patent prints f = 100); a note added that no glass is identified.

**Glass labels.** None existed. Added `Unmatched (nD 1.6240, nG′ 1.6448)` on L1 and L6, `Unmatched (nD 1.5832, nG′ 1.5972)` on L2 and L5, `Unmatched (nD 1.4626, nG′ 1.4714)` on L3 and L4. The patent prints no Abbe number, so no catalogue row can be tested at the house tolerance and none is claimed; the model stays monochromatic.

**Analysis.** Title and first sentence now use the catalogue name. The product paragraph is reduced to one statement: no product is documented, and the Doppel-Amatar suggestion rests on a forum page that returned an access error and was read only as search-result summaries. The Science Museum entry was removed from the sources because it too was seen only as a search result. "Model Verification" renamed "Model Scope and Limitations" and its checking sentence removed. The glass section now describes the unmatched labels.

**Engine numbers, before and after (identical).** Focal length 99.8670960451683 mm, f/6.3, half field 5°, stop radius 6.8879701492116565 mm, back focus 91.1810 mm, total length 110.981 mm. Surface audit: no errors. Aperture audit: within 3 % of the stated f-number, no rim, trace or iris limit.

**Open:**

- Rims are estimates (8.5 mm outer, 7.8 mm inner) against roughly 7.4 mm scaled from Fig. 2; L2 and L5 have an edge about 0.17 mm thick at 7.8 mm. For the semi-diameter pass. (Closed 2026-11-18: see the semi-diameter pass below.)
- `lensMounts`, `imageFormat` and an image circle are not set: the patent states no format, field angle or image size. The 5° trace field is a working value.
- Dispersion: an Abbe number could only be estimated from nD and nG′ (roughly 67, 53 and 38 for glasses I, II and III); not applied.
- Product link to the Doppel-Amatar is unproven; no maker catalogue or optical section was obtained.

## 2026-11-18 — Semi-diameter pass against the patent figure

**Source.** US 886,416, drawing sheet (PDF page 1), Fig. 2, rendered at 600 dpi. The clean bottom outline was profiled, with the top outline as a check; the top is crossed by the r1–r4 leader lines.

**Scale.** At 2.25 mm from the axis the surfaces cross at x = 1768 / 1848 / 1980 / 2027 (front triplet) and 2203 / 2250 / 2385 / 2462 px (rear triplet). After correcting for sag at that height, the first-to-last vertex span of 19.8 mm is 702 px, which gives 35.45 px/mm. The other spans read at that scale: d_III 2.13 (printed 2.1), d_II 4.01 (4.1), d_I 1.16 (1.0), and the two diaphragm distances b 2.63 and 2.58 (2.7). The drawing is therefore close to scale, within about 5 %. A radial check: the drawing brings the collective element II to an almost knife edge at its outer edge, at 7.6 mm, and the prescription closes that edge at 7.93 mm.

**Figure readings.** Both triplets are drawn square-cut. The flat top and bottom are at 7.60 mm on the front triplet (273–275 px top, 264–266 px bottom) and 7.59 mm on the rear triplet (267–269 / 268–272 px). The diaphragm-side face of element I ends at 6.39 mm (front) and 6.35 mm (rear). From there a 45° bevel runs out to the flat. The front and rear faces reach the flat with no separate flange.

| Surface | Before | Figure | Axial f/6.3 beam | After | Reason |
|---|---:|---:|---:|---:|---|
| 1 (front face) | 8.5 | 7.6 | 7.93 | 8.3 | Figure 12 % smaller. 8.0 would clear the axial beam but costs 4.2 points of light at 5°; 8.3 costs 1.3 points alone (2.5 with all four changes together) |
| 2, 3 (cemented) | 7.8 | 7.6 | 7.41 / 7.33 | 7.8 | Within 3 %, noise; element II's edge closes at about 7.93 mm |
| 4 (I, toward the diaphragm) | 7.8 | 6.4 | 6.94 | 7.0 | Figure 22 % smaller. The axial beam sets the floor, and the connecting edge to surface 3 now slopes like the drawn bevel |
| 6 (I, toward the diaphragm) | 7.8 | 6.4 | 6.80 | 6.9 | As surface 4 |
| 7, 8 (cemented) | 7.8 | 7.6 | 7.01 / 7.07 | 7.8 | Noise |
| 9 (rear face) | 8.5 | 7.6 | 7.37 | 7.8 | Figure 12 % smaller. Square with surface 8, as drawn |

No land or rim cut was added. A rim extension draws a vertical land, which does not match the drawn 45° bevel. Surface 1 cannot be made square with surface 2, because element II's edge would cross. The stop radius is not authored.

**Light and clearance.** Geometric transmission wide open at infinity was 100 / 100 / 100 / 100 / 100 / 100 / 99.9 % at 0 / 0.8 / 1.7 / 2.5 / 3.3 / 4.2 / 5.0°. It is now 100 / 100 / 100 / 99.8 / 99.4 / 98.5 / 97.5 %. The worst loss against the committed rims is 2.5 points at 5°, inside the 3-point allowance. Restoring the front pair (surfaces 1 and 4) would win back 1.4 points and the rear pair (6 and 9) 1.1 points. The real-ray trace at f/6.3 and an 8.7 mm image height (5°) shows no axial clipping and no blocked chief ray. The axial margins are 0.37 mm at surface 1, 0.06 at surface 4, 0.10 at surface 6 and 0.43 at surface 9. Only rims next to the stop were lowered, so no face can newly cross the stop plane.

**Engine numbers.** Focal length 99.867 mm, f/6.3, half field 5°, stop radius 6.888 mm and back focus 91.181 mm, all unchanged. The chief ray now passes unblocked to 41.9° (limited by surface 9), against 44.4° before. The patent states no field, so no rim was widened for one. Surface audit: no errors. Aperture audit: within 3 % of the stated f-number, no rim, trace or iris limit. The image-circle and field-coverage audits skip the lens (no image format).

**Metadata.** Unchanged. The patent states no format, field angle, image size or mount, and the model is the patent's own f = 100 example with no documented product, so `lensMounts`, `imageFormat` and `imageCircleMm` stay unset. No product name is documented. The current name, CARL ZEISS JENA 100mm f/6.3 (US 886,416 Design), names the patent design and claims no product. The Doppel-Amatar 1:6.8 remains an unproven family link.

**Open:**

- Element I's drawn 45° bevel is approximated by the sloped edge between surfaces 3 and 4 (and 6 and 7). The model cannot draw a chamfer on a face whose curve must reach the axial beam above the drawn bevel start.
- Surface 1 stays 0.7 mm above the drawn edge for corner light, so the front triplet shows a 0.5 mm step at the front edge where the figure draws it flat.
