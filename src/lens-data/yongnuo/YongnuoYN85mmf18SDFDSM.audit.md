# CN110146970B Example 1 transcription audit

Date: 2026-11-09.

The original PDF and pixels of pp. 9, 10, 14, 15 and 16 were inspected. All 20 source surfaces, including cover glass, were compared with the supplied transcription.

Source S10 maps to STO; S19–20 map to the standard rearPlates representation. All radii, axial thicknesses, indices and Abbe numbers remain literal. The close table changes only d7 and d9. The printed 697 mm object distance is first-vertex referenced, consistent with the 103.397 mm track and rounded 0.8 m total distance. The object distance is explicitly authored as a finite conjugate, not inferred from a focus slider label.

Missing surface apertures are reconstructed from the figure's overall envelope with beam/geometry checks, not asserted as measured source values. Both faces of each element share an aperture; the cemented interface shares the same 21 mm radius. The front-to-rear radii are 30, 24, 21, 21, 17, 15, 14, 12, 14 mm. Geometry uses the default 90% gap-sag limit. No rim cuts, validation relaxation or hidden render trim are used.

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

Open: the S6/S7 rims (21 mm) are larger than Fig. 1 draws (about 18 mm) and L32 (14 mm) slightly larger
(about 12.8 mm). The 30 mm front rim exceeds what Yongnuo's 58 mm filter thread suggests. Rims were left unchanged
in this pass.
