# VOIGTLÄNDER SKOPARON 35mm f/3.5 — audit log

Pinned baseline 9128e249e492fe49eb032df61aa0ffb60d8e1d15. Native geometry, inferred caps and stop hypotheses were frozen before tracing; source values and fixed infinity plane unchanged. See same-stem analysis for precise source differences and field qualification. Scientific receipts are evidence/native-geometry.json, native-pupils.json, skoparon-diffraction.json and analytic-failure-witnesses.json in the private reproducibility archive. Corpus/build/viewer outcomes belong to the final batch report; this scientific receipt does not predeclare those later gates. (Closed 2026-11-03: deployment validation recorded below.)

No finite law, glass substitution, contrast-driven cap or focus adjustment. (Superseded 2026-11-03: catalog glass labels, the S6 rim and a static 0.7 m close focus were set; see below.) Rejected stop proposals and 104 original raw failures are preserved across the trio, with separate analytical witnesses. This is Grade B probable patent-family research, not a factory prescription or continuum-validated MTF measurement.

## 2026-11-03 — Deployment validation and cleanup

Source re-read: US 2,746,351 Table 2 (PDF page 6) and Fig. 4 (sheet 4) were read from a 300 dpi render of the scan. All 27 printed values (9 radii, 5 glass thicknesses, 3 air spaces, 5 nd, 5 νd) match the file after ×35 scaling, with no mismatches. The stop split preserves a3 = 1.98765 mm, and G = 0.69367 equals the sum of the printed thicknesses. The transcribed rows reproduce the patent's thin-lens component focal lengths (F = 100: −535 / +45.7 / −33.2 / +60.7 mm) as −534.0 / +45.7 / −33.2 / +60.7 mm. Front page: filed March 3, 1953 (serial 339,953); German priority March 5, 1952; patented May 22, 1956; A. W. Tronnier, assignor to Voigtländer A.G., Braunschweig. The German counterpart DE 1 024 730 (filed March 5, 1952, published February 20, 1958) carries the same Zahlentafel 2 (Google Patents record).

First order: a paraxial trace of the normalized table gives f = 1.000039 (patent 1.000). The model gives EFL 35.0014 mm at f/3.40 (Table 2: 1:3.4, effective aperture 0.294 f), with a computed back focus of 32.280 mm (none printed) and a track of 56.558 mm. The 31.5° half-field is Voigtländer's 63°; the patent prints no field. Real-ray LSA is +0.87 / −0.04 / −0.27 / −0.23 mm at pupil 1 / 0.85 / 0.7 / 0.5, which does not suggest a misprint. The patent has no aberration plots.

Maker comparison: the Wikipedia Prominent lens table lists the Skoparon 35 mm f/3.5 as five elements in four groups, retrofocus, citing US 2,746,351. The package cites Voigtländer literature for five elements, about 63° and availability from the second half of 1953: the Prominent lens manual, The Prominent and its System (Pacific Rim 00599) and the 1953 brochure (Pacific Rim 00702). Those PDFs were not re-read. Table 2 is the only five-element, four-group example; Table 1 has four elements at f/4.0, and Figs. 1 and 3 have no tables. Fig. 4 is labelled f/3.5. The Bessamatic Skoparex file (US 2,927,506 Example 1, six elements in five groups) is a different design; no duplicate exists.

Fields changed, data step:
- S6 sd 5.6 → 4.85 mm. The L3 rear face had crossed the stop plane above 4.92 mm. The full bundle needs 4.72 mm, and geometric transmission is unchanged at every field (77.2% at 31.5°).
- `focus.closeFocusM` 1e15 → 0.7: static, no gaps, with a new `focus.description`. The value was first taken from a retailer listing and is now confirmed by the maker's distance scale (see below).
- `groups` added: I (S1–S2) and II (S3–S9). Doublet D1 unchanged.
- Glass labels were set by the coordinator: FK3, N-SSK5, F5 and J-BAF3 as nearest catalog rows, LAC13 as a catalog equivalent.

Fields changed, wording step:
- Data file: header comment, subtitle, specs (5 ELEMENTS / 4 GROUPS, DESIGN f = 35 mm, DESIGN F/3.4, ALL SPHERICAL) and the five element roles.
- Analysis: run-together text fixed; MTF and pupil-count tables, process wording and cross-lens text removed; catalog glass names, a plain stop and rim description, a scope section and URL sources added.

Checks after both steps: audit:surface OK; audit:aperture within 3% of f/3.4, with no rim or iris failures; clearap shows no axial clipping or chief-ray blocking; image circle 0 undersized; field coverage 98%, limited by the declared field.

Open: Fig. 4 draws the rims about 7–10% smaller than the model (about 13.3 / 5.6 / 5.4 / 4.9 mm). The model rims were kept because the drawn sizes cut edge transmission to about 57%. (Closed 2026-11-03: the semi-diameter pass below re-measured Fig. 4, kept the element edges under the corner-light rule and added the two zero-cost bevels.)

Open: the focusing mechanism (Prominent body or a ring on the lens) is unconfirmed. The Voigtländer lens manual would settle whether unit focus to 0.7 m can be authored; derived unit focus would extend the back focus by 1.957 mm. (Closed 2026-11-03: the booklet gives rangefinder coupling and a 0.7 m scale but not which part moves, so the model stays static.)

Maker booklet, read after the wording step: "Gebrauchsanleitung für die Wechselobjektive zur Prominent" (imprint 400 09-12 A/758 Oe; https://cameramanuals.org/lenses/voigtlander_lenses-35-100-150mm-german.pdf).
- Printed p. 2: a five-element wide-angle covering about 63°, with a quick-change bayonet, coupled automatically with the built-in rangefinder once attached.
- Printed p. 5: the measured distance is transferred to the green metre scale on the lens to read depth of field. That scale's yellow figures run below 1 m to 0.7 m.
- The p. 2 section drawing agrees with the model's layout: meniscus convex to the object, plano-convex L2, biconcave L3, stop, and a cemented pair with a nearly flat front face. Its rear-to-front diameter ratio is about 0.4, against 0.38–0.43 in the model.
- The drawing shows L3 square-edged, without the patent's rear bevel; the S6 cut follows Fig. 4 and the stop clearance.
- Updated `focus.description` and the analysis focus, identification and source text to cite it.

## 2026-11-03 — Semi-diameter pass against the patent figure

Source: `patents/US2746351.pdf`, PDF page 4 (drawing sheet 4), Fig. 4, which is the Table 2 example. The sheet is a 1-bit scan at 2320 × 3408 px; every reading was taken at that native resolution. The scan is skewed 0.48°, so heights were taken perpendicular to a least-squares fit of the dash-dot axis (625 samples, rms 0.38 px). The drawn axis sits 3–10 px above the element centres, so each radius below is half the element's full top-to-bottom height between line centres.

Scale: line-centre vertex crossings R1 to R9 span 1132.5 px for the 24.28 mm R1–R9 length, 0.02144 mm/px. Two sub-spans agree: R1–R3 gives 0.02139 and R3–R9 0.02154 mm/px. Vertical scale: fitting both L1 faces with their printed radii gives a best vertical scale near 0.0217 mm/px, within 1.5% of the axial one, so the figure is not anamorphic. The rear-group arcs are drawn about 20% flatter than printed and do not refine it. The heights below use 0.02144 mm/px; 0.0217 would add about 1%.

| Surface | Before | Fig. 4 reading | After | Evidence |
|---|---:|---|---:|---|
| 1 | 14.2 | 13.3 (L1 edge; the front face meets a flat land) | 14.2 | 5–7% under, inside noise. 13.3 costs 3.2 corner points and would lift L2/L1 above the drawn 0.42. |
| 2 | 14.2 | 12.4 (the face ends at a rear chamfer, 0.938 of L1's edge) | 13.3 | The same fraction of the model edge, 0.938 × 14.2. Costs no light: the full bundle reaches 13.22 mm here. |
| 3, 4 | 6.1 | 5.6 (square edge) | 6.1 | 8% under, inside noise. 5.6 costs 11.6 points and 6.0 costs 2.5. |
| 5 | 5.6 | 5.3 | 5.6 | 5% under. 5.3 would also put L3 below the 5.4 mm doublet, against the drawn order. |
| 6 | 4.85 | 3.9 (the face ends at a deep bevel) | 4.85 | Below the 4.67 mm axial ray and the 4.72 mm bundle; the stop-plane cut stays. |
| 7 | 5.4 | 4.4 (the face ends at a 45° chamfer, 0.88 of the doublet edge) | 4.8 | 0.88 × 5.4 = 4.75, the f/3.4 axial ray height here, rounded up. Costs no light. |
| 8, 9 | 5.4 | 4.9 (the doublet edge; both faces reach it) | 5.4 | 9% under. The axial ray needs 4.90 and 4.93 mm; 5.0 costs 6.6 points and 5.2 costs 3.2. |

The proportions agree: relative to L1, Fig. 4 draws L2, L3 and the doublet at 0.423, 0.400 and 0.370, and the file has 0.430, 0.394 and 0.380, with the same L2 > L3 > doublet order. The model is the drawing scaled by about 1.07 throughout, which keeps the light. The drawn diaphragm bars sit 68% of the way through a3 (the model uses 65%) and leave an opening of 3.6 mm radius, against the 4.57 mm f/3.4 iris (4.44 mm at f/3.5). The rear group is drawn for that narrower beam, which is why the L3 rear face and the L4 front face read below the f/3.4 axial ray.

Corner light, measured against the base file for the final rims: 77.2% at 31.5° before and after, and no field changes (0.0 points); restoring either new value wins back nothing. The drawn sizes (13.3/12.4, 5.6, 5.3/4.85, 4.9) would give 57.4%. The model is static, so there is no near state to check. The patent has no aberration plots, so no fan ends constrain the rims. LSA (+0.866 / −0.040 / −0.271 / −0.230 mm at pupil 1 / 0.85 / 0.7 / 0.5) is as before; no rim was raised.

Clearance after the edit: audit:surface reports no validation errors; the image-circle check finds 0 undersized surfaces; field coverage is 98%, limited by the declared 31.5° field (21.19 of 21.65 mm, corner 32.1° clear); the real-ray trace shows no axial clipping or chief-ray blocking, with the axial marginal ray at 4.75 mm on the 4.8 mm L4 front face; audit:aperture is within 3% of f/3.4 with no rim or iris failures. Engine half-field 31.5°, f/3.4, stop radius 4.571 mm and tracing half-field 36.18° are unchanged. Surface 2's own field limit moves from 38.7° to 36.9°, still outside surface 1's 36.2°. The drawn stop housing follows the smaller neighbour, now 4.8 mm (was 4.85).

The diagram joins an element's two faces with one straight edge, so the L1 and L4 bevels appear as a taper across the edge rather than a flat land with a short chamfer. The local page at infinity and at closest focus (identical, static model) renders without errors and shows both bevels.

Maker drawing (Voigtländer Prominent lens booklet, printed p. 2, not to scale): five elements in four groups in the same order, with the rear elements about 0.4 of the front meniscus. It draws L1, L3 and the doublet with square corners; Fig. 4 bevels the L1 rear, L3 rear and L4 front rims. The patent figure governs. Neither source marks an aspherical or special-dispersion element.

Front page seen: US 2,746,351, patented May 22, 1956; Albrecht Wilhelm Tronnier, Göttingen, assignor to Voigtländer A.G., Braunschweig; application March 3, 1953, Serial No. 339,953. These match the data file.

## 2026-11-03 — Glass labels revisited

L1, L2 and L3 now trace their printed nd/νd as `Unmatched`, because their nearest catalog rows (FK3, N-SSK5/S-BSM25, F5/E-F5) are 0.32–0.57 off in νd and would replace the printed dispersion; L4 moves from J-BAF3 (0.28 off) to S-BAM3 (0.22 off, 0.001 lower in nd). LAC13 stays on L5. This supersedes the glass labels listed in the data-step bullet above.
