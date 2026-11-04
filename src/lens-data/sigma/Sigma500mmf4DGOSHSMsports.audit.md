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
