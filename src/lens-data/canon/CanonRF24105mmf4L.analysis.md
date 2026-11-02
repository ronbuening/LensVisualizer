# Canon RF 24–105mm f/4 L IS USM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 2019/0278068 A1\
**Application Number:** 16/291,469\
**Filed:** March 4, 2019\
**Published:** September 12, 2019\
**Priority:** JP 2018-042214, March 8, 2018\
**Inventor:** Takahiro Hatada\
**Applicant:** Canon Kabushiki Kaisha (Canon Inc.)\
**Title:** Zoom Lens and Image Pickup Apparatus\
**Example details:** Fig. 3, PDF p. 4 / sheet 3; Fig. 4A/B p. 5; Numerical Example 2 [0097], p. 21 / printed p. 9; Table 1 p. 24.

The selected Example 2 is an 18-element, 14-group six-unit zoom with printed focal lengths 24.72 / 50.92 / 101.84 mm at F4.12. Its prior correlation with the marketed Canon RF 24–105mm f/4 L IS USM rests on the following points:

1. The focal range, constant aperture and 18/14 configuration correspond to the catalog's marketed 24–105 mm f/4 lens.
2. The single high-Abbe positive lens, three aspheric elements and six-unit layout correspond to the prior production-diagram comparison. Source glass coordinates do not prove branded UD classification or manufacturing method.
3. Example 2's single negative focus unit L4 and transversely moving L11/L12 IS subunit correspond to the known product architecture. The selected source does not publish the production 0.45 m focus cam or IS displacement range.
4. Examples 1 and 3 have different long focal or aperture targets and remain distinct numerical configurations. No other example replaces this prescription.

The May 10 glass audit, August 7 compatible-curve recovery and September 23 complete source/shape/glass review retain their actual dates. The October 30 follow-up reopens two reproducible free-end shoulder defects in the actual SVG, rechecks the original and qualifies the source/material/runtime limits. It does not claim a manufacturer-confirmed factory prescription or new verification of the earlier production sources.

## Optical Architecture

The six units are L1(+) L2(−) L3(+) L4(−) L5(−) L6(+). Source group focal lengths are approximately +88.25 / −18.38 / +24.16 / −40.84 / −68.35 / +72.42 mm; current d-line computations give +88.250525 / −18.375596 / +24.162435 / −40.836844 / −68.348443 / +72.427761 mm. The front positive unit contains negative L1 and positive L2/L3. The strong negative L2 unit is the variator. Positive L3 contains the stop, relay elements, the IS doublet and the low-dispersion Gfp element. L4 focuses, L5 is a negative double-aspheric unit and L6 is the final positive Grp.

At the three published infinity states all six units move objectward relative to the image plane. D27 is 1.80 / 3.37 / 1.40 mm and D29 is 11.59 / 10.02 / 11.99 mm, with constant sum 13.39 mm. The monotonic L3–L4 increase / L4–L5 decrease wording in [0068], PDF p. 18, does not describe that literal table. The source table and existing controls are preserved, and this unresolved source wording is recorded in `source.errata`. Six gaps have exactly three published station values; continuous zoom is a piecewise linear illustration of those values.

The stop is source surface 14, authored as STO and carried by L3. L11/L12 is the centered IS doublet identified in Fig. 3 and [0069]–[0070]. The source gives no displacement calibration, so the modeled checks keep IS centered. No source filter, rear plate or hybrid layer is tabulated. The source BF equals D33 at all three stations, and those literal air gaps remain unchanged.

## Element-by-Element Analysis

All 18 modeled media and each curved cemented interface were checked against the source. Curve names identify qualified compatible spectral proxies, without historical supplier, melt, chemistry or process proof.

| Medium | Source nd / νd  | Current compatible curve | Role                              |
| ------ | --------------- | ------------------------ | --------------------------------- |
| L1     | 1.80810 / 22.76 | S-NPH1                   | Negative member of front D1       |
| L2     | 1.72916 / 54.70 | S-LAL18                  | Positive member of front D1       |
| L3     | 1.72916 / 54.70 | S-LAL18                  | Positive singlet closing L1       |
| L4     | 1.95375 / 32.30 | S-LAH98                  | Strong negative variator          |
| L5     | 1.58313 / 59.40 | L-BAL42                  | Double-aspheric negative variator |
| L6     | 1.80810 / 22.80 | S-NPH1                   | Positive variator color partner   |
| L7     | 1.80400 / 46.60 | S-LAH65V                 | Negative variator singlet         |
| L8     | 1.91082 / 35.30 | TAFD35                   | Positive lens after stop          |
| L9     | 1.95375 / 32.30 | S-LAH98                  | Negative member of D2             |
| L10    | 1.59522 / 67.70 | S-FPM2                   | Positive member of D2             |
| L11    | 1.74951 / 35.30 | S-NBH51                  | Negative member of IS doublet D3  |
| L12    | 2.00069 / 25.50 | TAFD40                   | High-index positive IS member D3  |
| L13    | 1.78472 / 25.70 | S-TIH11                  | Negative member of D4             |
| L14    | 1.49700 / 81.54 | S-FPL51                  | Positive low-dispersion Gfp in D4 |
| L15    | 1.58313 / 59.40 | L-BAL42                  | Double-aspheric positive relay    |
| L16    | 1.72916 / 54.70 | S-LAL18                  | Single negative focus unit L4     |
| L17    | 1.76450 / 49.10 | L-LAH91                  | Double-aspheric negative unit L5  |
| L18    | 1.80400 / 46.60 | S-LAH65V                 | Last positive unit L6 / Grp       |

D1 is the front negative/positive doublet; D2 is the L9/L10 pair; D3 is the L11/L12 IS pair; D4 combines negative L13 and low-dispersion positive L14. The last positive lens Grp is L18. These identities come from the source numbering, refractive powers and figure labels. Catalog family words describe proxy classes, not measured source chemistry. A repeated coordinate does not prove that two positions shared a historical glass melt.

## Glass Identification and Selection

Paragraph [0029], PDF p. 14 / printed p. 2, defines d = 587.6, F = 486.1, C = 656.3 and g = 435.8 nm and νd = (Nd−1)/(NF−NC). The primary surface table supplies each nd/νd pair, but no individual spectral indices or partial-dispersion values. Every medium now explicitly has `indexReference: "d"`. All 18 existing compatible curves remain unchanged and qualified in the public labels. No unsupported per-position nC/nF/ng/dPgF override exists or was added.

Table 1, PDF p. 24, prints two more precise Abbe values for Example 2. Its vd1n = 22.76 names the front negative Gin, L1/S1, and rounds back to primary 22.8. That precision is adopted for L1 only; repeated-coordinate L6 keeps its own printed 22.8. The same table prints vfp = 81.54. The source's positive Gfp is L14, beginning at S24, as identified by [0043]/[0053]/[0070] and Fig. 3; it is the unique positive low-dispersion position. That more precise printed νd is adopted over primary rounded 81.5 and rounds back consistently. The paired nd = 1.49700, R/d and compatible S-FPL51 curve are unchanged. This is source precision, not a catalog-derived material substitution.

L14's APD tag remains inferred from the compatible curve and low-dispersion correlation. The patent publishes no θgF or anomaly designation for that position. L-BAL42 and L-LAH91 catalog families are compatible with molding, but a softening-family match does not identify the source manufacturing process. The August 7 L-LAH91 recovery remains a qualified modern spectral proxy, not evidence of Canon's historical supplier or production melt.

## Focus and Stabilization

The patent publishes infinity zoom spacings only. Its [0069] focus direction moves the single negative L4 imageward. The existing near gaps are a constrained paraxial reconstruction for a marketed 450 mm object-to-image target, with D27 + D29 preserved. The source gives neither those near numerical gaps nor an interpolation law. Current rounded schedules yield actual Gaussian close object-to-image distances 447.099 / 450.766 / 449.551 mm at wide/intermediate/tele, with the authored image plane fixed. These computed conjugates remain distinct from an exact production MFD or a published finite state.

The transverse IS motion of L11/L12 is source-supported, but its range, dynamic effects and decentered field performance are not evaluated here. The pure centered prescription remains unchanged; centered validation does not establish moved-IS clearance or production stabilization performance.

## Aspherical Surfaces

The six aspheres are S8A, S9A, S26A, S27A, S30A and S31A, on L5, L15 and L17. All six K = 0 conic constants and all 25 published nonzero polynomial coefficients match the original table on PDF p. 21. The standard (1+K) convention is preserved. No radius, coefficient, spacing or source stop field was tuned to fit a figure.

The source caps give substantial L17 departures, approximately −1.55 and −1.66 mm from the base spheres at the front/rear effective radii. Those are polynomial shape facts, not proof of a particular production process. Source and catalog evidence do not establish whether historical elements were molded, polished or replicated. No resin layer is selected in this example.

## Chromatic Correction Strategy

The source's high-dispersion front negative lens and stronger positive companions balance compactness and lateral color. The rear positive Grp uses a high index, while the low-dispersion positive Gfp near the IS subunit supports color correction through zoom ([0034], [0053]). These source coordinate/placement conditions explain the correction strategy. Detailed chromatic tracing uses qualified catalog curves, with no invented lens-specific line data or partials. Coatings, glass chemistry and production manufacturing do not follow from this prescription.

## Native Outline, Shoulders and Constraints

Fig. 3 is a native 2560 × 3300 raster at 300 ppi. The wide first-vertex-to-image track spans approximately 1,331 native pixels over the 125.33 mm literal track, about 10.62 px/mm. Practical rim uncertainty is ±0.6 mm. Magnified crops preserve the evidence limit; upsampling is not higher native detail. Leaders, brackets, arrows, stop strokes and image-plane ink were excluded.

S7 gains `rimExtensionSd: 15.685` around its unchanged printed clear cap 11.715 mm. S30A gains outer 13.565 around unchanged clear 12.085 mm. The native outer shoulder/step is resolved at each free end, and the adopted outer heights conservatively anchor to the corresponding existing optical blank heights. Their axial walls are cap-anchored rather than independently measured shoulder pistons. All 32 refracting clear caps remain exactly effective diameter ÷ 2, including the unequal heights at curved bonded interfaces. Every element, concave end, bond and aspheric free end was inspected.

The small S5 and final-element height differences are within measurement ambiguity and remain unchanged; no speculative shoulder was added. The source's full bonded blank outline cannot justify opaque lands beyond its unequal optical caps. No bonded interface block, disconnected resin wing, inferred cut or unsupported equal-height cap was introduced. Physical source geometry, printed clear apertures and renderer edge closures remain separate constraints. Surface validation passes, and the source's retained thin glass/air spaces are not altered.

## Verification Summary

The 65-position geometry-identical zoom clone reproduces every live position and iris exactly. All 65 infinity aperture checks are within 3% of the printed design convention, and all 65 generic format field checks reach at least 99%. The image-circle heuristic reports zero undersized elements. All 1,365 zoom/focus contour states contain 18 connected, closed, finite paths with zero hidden renderer trimming. Actual final wide/intermediate/tele SVGs at infinity/middle/close focus were compared with native Fig. 3.

The current derived iris radii are 6.501862 / 8.220839 / 9.424096 mm, giving paraxial F4.12. Real collimated rays through those irises give EFL/input-diameter ratios 4.145966 / 4.188726 / 4.222408. The older 6.543379 / 8.363094 / 9.674132 values are stop heights reached by nominal paraxial input rays, not live physical radii. Source stop ED 19.35 mm is a printed envelope; its numerical agreement with one nominal ray is insufficient to establish a physical iris schedule. The existing derived rule remains unchanged.

Continuous interpolation is illustrative. Its maximum sampled infinity BF displacement is −1.177878 mm at zoom 0.265625, despite small endpoint rounding residuals. There are 41 sampled nonzero focus controls with virtual Gaussian objects; these are excluded from actual-object clearance claims rather than silently launched as finite objects. Source endpoints and the physical image plane remain unchanged.

The 65 zoom × seven focus × three field × 97 pupil grid plans 132,405 rays. It has 349 positive actual Gaussian finite controls, 41 virtual controls (123 field bundles skipped) and 65 collimated infinity controls. The 120,474 traced rays have clear converged chiefs, 19,340 ordinary pupil clips and 11 independently bounded first-surface cap misses, with no unexplained interior failures or unaimed rays. Thirteen positive near-tele axial bundles clip the outer 24 rays at printed S21–S25; maximum overshoot is 0.095340 mm. Source infinity apertures stay literal. The finite gaps are reconstructed, so the optics, iris and caps are not enlarged to clear these controls.

A separate positive 450 mm/focus image-plane-distance supplement traces all 132,405 rays without virtual controls or seed failures, with clear chiefs, 22,396 ordinary clips, 11 bounded first-cap misses and 12 restricted near-tele axial bundles. Ordinary finite fields use paraxial magnification-scaled object heights rather than forcing an actual distorted sensor edge. The source-height endpoint grid traces 1,746 rays, with clear chiefs, 317 ordinary clips and no numerical trace failures. Its tele-close axial bundle has 24/97 outer rays clipped at S21 by approximately 0.032400 mm; this is a reconstructed finite-focus limit, not a source infinity error.

A stronger inverse finite-image-edge check first solves unclipped chief geometry at zoom 0 / 0.25 / 0.5 / 0.75 / 1 and focus 0.25 / 0.5 / 1, targeting both source 21.64 mm and generic 21.65 mm edges. All 30 roots converge with clear actual-aperture chiefs (maximum residual 0.000000039 mm). Their 2,910 pupil rays include 1,152 ordinary clips and no trace failures or unaimed samples. These successful edge chiefs do not establish full-pupil coverage, remove the axial finite restriction or prove a production field at interpolated controls.

No inferred cut exists. Source fidelity, sampled runtime findings and production correlation are separate conclusions. The cap-preserving shoulders are supported; finite near-tele pupil loss, virtual/interpolated controls, uncalibrated IS and historical material identity remain explicit limitations.

## Design Context and Sources

The selected model belongs to the source's positive-lead compact zoom family; its architecture supports the existing RF 24–105 product correlation without identifying exact production optics, coating placement, motor performance or glass chemistry.

- Original untracked `patents/US20190278068A1.pdf`: front matter p. 1; Example 2 prose [0066]–[0071] p. 18; selected Numerical Example 2 [0097] p. 21 / printed p. 9; Table 1 p. 24.
- Fig. 3 p. 4 / sheet 3 and corresponding Fig. 4A/B p. 5; explicit spectral definition [0029] p. 14.
- Existing compatible catalog curves are spectral proxies. Earlier production and catalog investigations retain the May 10 / August 7 / September 23 audit dates; this follow-up does not relabel them as newly inspected sources.
