# SIGMA 500mm f/4 DG OS HSM | Sports — reconstruction audit

## 2026-11-03 — Sixth batch, whole-embodiment build

- Whole JP 2017-032809 A Example 1 retained without scale, radius, spacing, glass, F-number or source-plane retuning. Grade B probable family, not exact factory formula.
- Missing caps and stop hypotheses were frozen by source figures/first-order/normal exact geometry before MTF. Rejected initial seeds and plus5% invalid branches remain recorded. The Sigma500 required-filter envelope exception was completed before MTF.
- Native geometry, source-endpoint conjugates, finite-ray back-projection, independent first-order checks, raw full-lattice ray records, clipping by surface and analytic saved-failure witnesses are retained. No unsupported continuous cam is claimed.
- Native reference/design scalar diffraction retains all snapshots/prior-grid curves. Default compiled UI and source fields have separate evidence. No physical-OPL, continuum or factory measurement claim.
- Sigma500 source residual defocus remains unchanged at both endpoints.
- This research audit does not claim a clean integration result before the external terminal receipts; see the package’s final report for fresh commands, counts, failures and exact release holds. (Closed 2026-11-04: the lens was integrated and checked; see the section below.)

## 2026-11-04 — Wording, glass and metadata pass

Public text was rewritten in plain terms with no optics change. In the data file the header comment now states the patent, example, scale (patent's own, no scale factor), the drawn filter plate, the focus states, how the stop and semi-diameters were set and the glass-label basis. The subtitle changed from "JP 2017-032809 A — whole Example 1; probable family reconstruction" to "JP 2017-032809 A, Example 1 — construction correlation with the S016 production lens". The six pipeline specs lines became "16 ELEMENTS / 11 GROUPS", "DESIGN f = 487.00 mm", "DESIGN F/4.11", "ALL SPHERICAL" and "2 FLD / 1 SLD ELEMENTS". The 16 identical element roles were replaced with element-specific roles, the focus description and the conjugate source note were rewritten, and `catalog.closeFocusM.marketing` 3.5 was added. `focus.closeFocusM` was rounded from the float artifact 3.5000001000000003 to 3.5; the near state still focuses on an object 3095.52 mm ahead of the first surface, 3500.03 mm object-to-image (printed d0 3095.498 mm plus the 404.5021 mm track is 3500.0001 mm). The display name already follows the Sigma Sports pattern and was not changed.

All 16 glasses were relabelled from `Unmatched (...)` to HOYA catalog equivalents. Each resolves through the glass catalog with these differences from the printed nd/νd: FCD100 (L1, L3) 0.00000/0.00; NBFD13 (L2) catalog nd 1.80610, −0.00001/0.00; TAC8 (L4, L12) 0.00000/0.00; FCD515 (L5) 0.00000/+0.01; FDS90 (L6, L9, L15) 0.00000/0.00; TAF1 (L7) 0.00000/+0.01; BACED5 (L8) 0.00000/+0.01; E-FD4 (L10) 0.00000/0.00; PCD51 (L11) 0.00000/0.00; E-FL6 (L13, L14) 0.00000/0.00; BSC7 (L16) 0.00000/0.00. The patent prints no line indices or partial-dispersion columns, so no `nC`/`nF`/`ng`/`dPgF` fields were added. Its conditions (8), (9), (11) and (12) give θgF − 0.6483 + 0.0018·νd as 0.0563 (L1/L3), −0.0079 (L2), 0.0193 (L5, νd 68.63) and −0.0047 (L4). Converted to θgF these are 0.53342, 0.56709, 0.54407 and 0.54519; the catalog rows give 0.53362, 0.56717, 0.54412 and 0.54532, so patent minus catalog is −0.00020, −0.00008, −0.00005 and −0.00012. On the 0.6438 − 0.001682·νd normal line the patent values are ΔPgF +0.0496, −0.0082, +0.0157 and −0.0067, and the catalog rows +0.0498, −0.0081, +0.0157 and −0.0065. L1, L3 (FLD) and L5 (SLD) carry `apd: "inferred"` from Sigma's construction diagram; claims 2, 3 and 5 also require positive anomalous partial dispersion for these positions.

Per-line paraxial focus, C/F/g relative to d (µm), was printed before and after the relabel. At infinity it was +275.5/+282.4/+1396.5 with the Abbe-only model and is +0.6/+5.3/−12.5 with the catalog glasses. At the 3500 mm state it was +352.5/+172.6/+1265.2 and is +82.9/−98.9/−101.2. The patent's longitudinal-aberration plots show d, g and C (no F line) on a ±0.5 mm axis drawn at about 0.011 mm per pixel; reading accuracy is about ±0.015 mm. In Figure 2 (infinity) the three paraxial ends coincide within one pixel. In Figure 3 (3500 mm) C sits about +0.096 mm and g about −0.084 mm from d. The relabelled model agrees with both plots within reading accuracy (C −0.013 mm, g −0.017 mm at 3500 mm); the Abbe-only model put g 1.27–1.40 mm beyond d, off the plot scale. All relabels were kept.

Engine values are unchanged by this pass: EFL 487.0037 mm, f/4.11, half-field 2.53°, stop radius 17.0165 mm, BFD 75.5439 mm, near EFL 372.0470 mm, magnification −0.1537. Surface, image-circle, field-coverage (100 %), aperture (within 3 % of f/4.11) and clear-aperture checks pass; the clear-aperture check shows no axial clipping and no blocked chief ray at the 21.63 mm image height.

Filter semi-diameter sizing (moved here from the analysis, as LENS_DATA_SPEC asks): the patent prints no clear aperture for the 1.3 mm filter FL. Its radius was sized by ray trace over 70 samples covering both focus endpoints, the aperture settings and the field. The largest ray height on the plate was 16.548212449894 mm; adding 5 % (17.3756 mm) and rounding up to 0.5 mm gives 17.5 mm. The 30 mm starting value was non-limiting, and the raw ray hits stay in the package record. This is sampled sizing, not a factory bound.

MTF estimates (moved here from the analysis): monochromatic 587.5618 nm scalar diffraction estimates of the model on the printed image plane, sagittal/tangential, computed with the source indices before this pass (the relabel does not change the d-line indices).

| State           | Field angle (°) | Image height (mm) | S/T 10 lp/mm    | S/T 30 lp/mm    | S/T 50 lp/mm    |
| --------------- | --------------- | ----------------- | --------------- | --------------- | --------------- |
| Infinity        | 0.000000        | 0.000000          | 0.96799/0.96799 | 0.90230/0.90230 | 0.83545/0.83545 |
| Infinity        | 1.265000        | 10.768362         | 0.96734/0.96062 | 0.90092/0.87748 | 0.83466/0.79447 |
| Infinity        | 2.529999        | 21.616622         | 0.96222/0.94478 | 0.87219/0.82895 | 0.77364/0.70803 |
| Finite endpoint | 0.000000        | 0.000000          | 0.91738/0.91738 | 0.58937/0.58937 | 0.30436/0.30436 |
| Finite endpoint | 1.300783        | 10.815000         | 0.88726/0.89698 | 0.46434/0.54501 | 0.19642/0.29339 |
| Finite endpoint | 2.591968        | 21.630000         | 0.89565/0.88666 | 0.55636/0.53827 | 0.35114/0.27968 |

At the finite endpoint the field angles are measured from the first vertex; the 2.591968° row corresponds to an entering chief-ray angle of 1.930957°, matching the printed half-field of 1.93°.

In the analysis, process wording (grades, gates, native/receipt vocabulary, test-case counts, the MTF method notes and a reference to another package) was removed, the per-element boilerplate was replaced with element roles and condition values, the glass table now gives the catalog equivalents and θgF, the citations were corrected (table PDF pp. 17–18, Figure 1 PDF p. 26) and "Verification Scope and Limitations" became "Model Scope and Limitations". The audit log's references to other packages were removed.

Open: none.
- 2026-11-04 coordinator note: L1, L3 and L5 changed from `apd: "inferred"` to `apd: "patent"`, because claim 5 and conditions (7)/(8) and (10)/(11) designate their anomalous partial dispersion directly.

## 2026-11-04 — Final diagram, rim and label review

Compared the local page (infinity, 3.5 m and the focus-motion overlay, 3× screenshots) with the native Figure 1 raster (PDF p. 26, 1069 × 687 px at 399 ppi) and with Sigma's construction diagram (viewed only, not stored in the repository).

Figure scale. Axially Figure 1 is 0.466 mm/px: surface 1 to the image plane is 868 px for 404.50 mm, surface 1 to surface 7 is 370 px for 172.35 mm (0.4658) and surface 1 to surface 28 is 706 px for 328.96 mm (0.4660). It is drawn at infinity (d9 is 16 px, 7.5 mm). Radially it is drawn about 8 % taller. At 0.466 mm/px, L1's 148 px rim would be 69.0 mm, beyond the 65.0 mm where L1's two sags (7.66 + 7.28 mm) use up its 14.99 mm thickness. The drawn sags of surfaces 1 and 2 (15 px each) put the L1 rim at 62–64 mm, and those of L3 put it at 54–55 mm. The stored rims divided by the drawn heights give a nearly constant 0.41–0.44 mm/px: L1 0.432, L2/L3 0.432, G1b 0.412, G2 0.434, G3a 0.424, L13 0.439, L14/L15 0.429. The outliers are G3b at 0.383 and the filter at 0.402. The maker diagram is close to isotropic at 0.370 mm/px (surface 1 to the filter is 885 px for 327.66 mm; its stop tick falls at 259.3 mm, where the prescription puts the stop).

| Element    | Figure 1 px | Figure 1 at 0.43 mm/px | Maker diagram (mm)   | sd before | sd after |
| ---------- | ----------- | ---------------------- | -------------------- | --------- | -------- |
| L1         | 148         | 63.6                   | 60.7                 | 64        | 64       |
| L2 / L3    | 132 / 132   | 56.8 / 56.8            | 56.6 / 54.6          | 57        | 57       |
| G1b L4–L5  | 85          | 36.6                   | 36.6 / 33.7          | 35        | 35       |
| G2 L6–L7   | 68          | 29.2                   | 27.8                 | 29.5      | 29.5     |
| G3a L8–L9  | 42.5        | 18.3                   | 18.5                 | 18        | 18       |
| G3b L10–12 | 35          | 15.1                   | 14.3 (doublet), 15.2 | 13.4      | 13.4     |
| L13        | 41          | 17.6                   | 17.0                 | 18        | 18       |
| L14–L15    | 42          | 18.1                   | 18.0                 | 18        | 18       |
| Filter L16 | 43.5        | 18.7                   | 21.6                 | 17.5      | 18.5     |

Change 1, filter plate surfaces 27–28 from 17.5 to 18.5 mm. Both diagrams draw the plate as the tallest item behind the stop (Figure 1: 43.5 px against 42.5 px for G3a and 42 px for L14–L15; maker: 21.6 mm against 18.0–18.5 mm). At 17.5 mm the site drew it below G3a and G3c. At 18.5 mm it is the drawn ratio to G3a (43.5/42.5 × 18 = 18.4 mm), the smallest step that restores the drawn order. The plate limits no ray at either value: geometric transmission at infinity, wide open, is 100.0/99.9/93.1/84.1/74.1/64.3/54.0 % at 0/0.4/0.8/1.3/1.7/2.1/2.5° before and after. At 17.0 mm the corner would drop to 53.7 %, so 17.5 mm was only just clear. The surface validator reports no errors, and the clear-aperture trace shows no axial clip or blocked chief ray.

Change 2, group brackets: "G1" (surfaces 1–9) became "G1a" (1–6) and "G1b" (7–9), and "G2" became "G2 focus". The patent's group-data table (PDF p. 18) and Figure 1 name G1a and G1b at the same level as G3a, G3b and G3c, which the file already used. The renderer staggers "G1b" and "G2 focus" onto separate rows, so the labels do not collide.

Lands and cuts: none. The file had no rim below the package baseline and no `rimExtensionSd` or `rimCutDepthMm`; rim-cost against the baseline is 0.0 points at every field, before and after. Candidate flat lands in Figure 1 were left unauthored. L2's concave front ends in an 8-row vertical run at column 245, beside a regular 1-px-per-5-row slope (q ≈ 0.97, at the resolution limit). L4's step at column 547 sits at the cemented junction. No other concave face shows a perpendicular segment.

G3b kept at 13.4 mm, about 10 % below both diagrams. The air gap between surfaces 19 and 20 limits it. At 13.6 mm the validator reports "combined surface sag (4.39 mm) exceeds allowed gap intrusion (4.318 mm of 4.798 mm)", and at 14.0 mm the sag is 4.66 mm. With the cross-gap limit raised in a scratch copy, 14.0 mm on surfaces 17–21 fails at 0.97 (4.654 mm allowed) and passes at 0.98. The faces would then be 0.14 mm apart at the rim; Figure 1 draws L11 and L12 touching there. That trial raises corner transmission from 54.0 to 57.6 % (0.8°: 93.1 to 94.7 %). This policy field was not edited.

Other rims agree with Figure 1 at its radial scale within 0–4 %. L1 (65.0 mm knife edge) and G1b (L5 edge 1.0 mm at 35 mm) are near their physical limits. The maker diagram draws L1, L3, G2 and L13 3–6 % smaller and L4 above L5 with a stepped flange. Those are production differences; the patent example governs.

Checked and found correct: element types against the signs of R and the ¶0075–0079 descriptions (L2 and L9 negative menisci convex to the image, L4 and L5 menisci convex to the object, L7, L11, L12 and L15 biconcave); roles; five cemented brackets CD1–CD5 on surfaces 7–9, 10–12, 14–16, 17–19 and 24–26; no aspheric markers (none printed); stop between G2 and G3a (¶0077). The `apd: "patent"` tags on L1, L3 and L5 follow claims 2, 3 and 5. Claim 5 requires two G1a positives meeting conditions (7) and (8), and Example 1's G1a has exactly two (L1, L3); claim 3's conditions (10) and (11) apply to G1b's single positive, L5. L2 and L4 meet the below-normal conditions (9) and (12) and stay untagged. All 16 glass labels resolve to HOYA catalog rows (FCD100, NBFD13, TAC8, FCD515, FDS90, TAF1, BACED5, E-FD4, PCD51, E-FL6, BSC7), and the inspector shows them for L1, L2, L3, L5, L10 and L16. Focus: index 0 is infinity and index 1 the 3500 mm state; G2 moves 20.1058 mm toward the image (d9 7.5520 to 27.6578 mm, d12 59.6448 to 39.5390 mm, PDF p. 18), as ¶0076 states. Every other group and the image plane stay fixed. The motion overlay shows G2 alone moving rearward. The slider runs from ∞ to 3.50 m.

Before and after: EFL 487.0037 mm, f/4.11, half-field 2.53°, stop radius 17.0165 mm, all unchanged. The engine's internal tracing half-field moved from 4.248° to 4.278° with the larger plate. Image-circle and field-coverage (100 %) checks pass, and the aperture check is within 3 % of f/4.11.

Open: G3b sits about 10 % under both diagrams unless the cross-gap limit is raised to 0.98. The stop is drawn at the engine's 17.02 mm radius (housing 18 mm), while Figure 1's S ticks sit about 50 px out and the maker tick about 22.6 mm.
- 2026-11-04 coordinator change: G3b surfaces 17–21 raised 13.4 → 14.0 mm with `checks.gapSagFrac: 0.98` (the smallest two-decimal value that admits it; 0.97 fails). Figure 1 and Sigma's section both draw G3b about 15 mm, and the L11–L12 faces stay 0.14 mm apart at the rim. Corner transmission at 2.53° rises from 54.0 % to 57.6 %.
- 2026-11-04 coordinator note: doublet labels renamed from the CD series to D1… (corpus convention).
