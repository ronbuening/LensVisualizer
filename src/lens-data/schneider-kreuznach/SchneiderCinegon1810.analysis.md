# Schneider Cinegon 10mm f/1.8 — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 3,038,379  
**Filed:** February 6, 1959  
**Priority:** March 15, 1958 (Germany)  
**Granted:** June 12, 1962  
**Inventor:** Wolfram W. Albrecht  
**Assignee:** Jos. Schneider & Co., Optische Werke  
**Title:** *High-Speed Photographic or Cinematographic Objective with Wide Image Angle*  
**Embodiment analyzed:** Example 1, the representative numerical prescription on patent page 2 and repeated in claim 2 on page 3

The LensVisualizer model transcribes the numerical example in US 3,038,379 and scales every dimensional prescription value by exactly 10.0 mm per source focal-length unit. The patent normalizes the worked example to an overall focal length of 1, aperture ratio 1:1.8, full image angle 66°, back focal length 1.7, and total physical length 5.687 source units. The rounded table itself computes an effective focal length of 1.002054995 source units, so the uniformly scaled model computes 10.020549951 mm rather than being renormalized to exactly 10.000 mm. The patent prescription is therefore preserved rather than adjusted to force the marketed focal length.

The correlation with the historical Schneider Cinegon 1.8/10 is strong but not manufacturer-confirmed. The evidence converges on the following points:

1. US 3,038,379 is assigned to Jos. Schneider & Co., Optische Werke and names Wolfram Albrecht as inventor (patent p. 2).
2. The patent example is a nine-element, five-member wide-angle objective normalized to 10 mm when scaled by the production focal length, and it is explicitly specified at f/1.8 (patent p. 2, numerical table).
3. A 1961 Burleigh Brooks distributor catalogue lists a Schneider Cinegon 1.8/10 for 16 mm cinematography with nine elements, C mount, 8-inch closest focus, and f/22 minimum marked stop (Schneider section, PDF p. 11).
4. The period product listing gives a 64° angle, whereas the patent gives 66°. Both values are retained; the difference prevents treating the product attribution as an exact manufacturer statement.
5. Later Schneider-authored C-mount literature also lists a Cinegon 1.8/10 with a 0.20 m closest-focus specification, but its separate 1-inch product context and f/16 minimum aperture do not establish that the patent table is the production prescription.
6. A secondary historical patent index associates Albrecht and Cinegon with US 3,038,379, but that source is corroborative rather than primary evidence.

The model therefore represents **US 3,038,379 Example 1 scaled to the 10 mm Cinegon context**, not a claim that Schneider published this exact table as the final production prescription.

## Optical Architecture

The design is an all-spherical, nine-element, five-member wide-angle objective arranged in two widely separated components. The object-side component contains two cemented doublets, D12 and D34. The image-side component contains cemented doublet D56, the single biconvex lens L7, and cemented doublet D89. The two components are separated by the patent's large diaphragm space, `d6`.

First-order computation from the final data gives an effective focal length of **10.02055 mm** and a back focal distance of **17.41406 mm** from the final lens vertex. Because the verified BFD exceeds the EFL, the system is retrofocus by the project definition. The physical vertex track is **56.87 mm**, so `track/EFL = 5.67534`; it is not telephoto under the separate `track/EFL < 1` definition.

The coarse power distribution is strongly asymmetric. Isolated computation from the final model gives the complete object-side component I a net power of **−0.0427531 mm⁻¹**, while component II has **+0.0620177 mm⁻¹**. The resulting negative-front/positive-rear power balance is consistent with the long-back-focus architecture described by the patent.

Within component I, D34 is clearly negative. D12 is the notable source contradiction: the patent prose and claim 1 call the first cemented meniscus positively refracting, but the printed numerical prescription produces a weak **negative** isolated D12 power of **−0.00182933 mm⁻¹**. Rounding-corner tests retain the negative sign, and the unchanged printed table reproduces the patent's focal-length and back-focus behavior. The model consequently preserves the table and records the prose/table conflict rather than changing a radius, index, or thickness.

The image-side component follows the sign pattern described by the patent more directly: D56 is positive, L7 is positive, and D89 is positive as isolated members. These signs establish the first-order architecture, but they do not by themselves identify the detailed aberration contribution of each member.

The patent publishes only a diaphragm *space*, not an exact stop coordinate or diameter. The schematic likewise does not dimension or distinctly mark a physical iris plane. The model therefore inserts one inferred `STO` inside the 25.11 mm scaled `d6` gap, 11.30 mm after surface 6 and 13.81 mm before surface 7; that split is a deterministic modeling choice rather than a coordinate recovered from the drawing. Its 4.304545 mm semi-diameter is calibrated so that the modeled entrance pupil gives f/1.8. This reproduces the published aperture target by construction; it is not independent evidence for the physical production iris.

No clear semi-diameters are published. The modeled apertures follow the optical rims on patent p. 1: larger front doublets taper toward surface 6, and the rear component has a common approximately 7.2 mm rim. Leaders and the front mounting flange are excluded. Geometry and production render diagnostics constrain the estimates. They are implementation apertures rather than recovered factory dimensions.

## Element-by-Element Analysis

The focal lengths below are **standalone thick-element focal lengths in air** computed from the final prescription. They should not be confused with the net power of a cemented member or the element's in-situ contribution inside the complete lens.

### L1 — Negative Meniscus

**nd = 1.7440, νd = 44.9. Glass: 744449 — N-LAF2 class, supplier unproven. f = −20.03 mm.**

L1 opens the first cemented member and is negative when considered alone. It is bonded directly to L2 at surface 2. The retained glass label is a coordinate-class match to a current SCHOTT N-LAF2 row rather than evidence that the historical Schneider element used a SCHOTT N-LAF2 melt.

The patent describes L1 as the negative first lens of the first doublet (US 3,038,379, p. 2; claim 1 on p. 3). In the numerical example the complete D12 pair is only weakly negative despite the patent's positive-member wording. That contradiction belongs to the doublet as a whole, not to the standalone sign of L1.

### L2 — Positive Second Lens of D12

**nd = 1.5014, νd = 56.5. Glass: 501564 — K10 class, supplier unproven. f = +23.46 mm.**

L2 is the positive partner of L1 and completes the first cemented doublet. Its lower index and higher Abbe number contrast with L1, but the patent does not assign a separate aberration-correction function to this element. The safest interpretation is therefore structural: L2 offsets much of L1's negative standalone power while participating in the cemented interface prescribed by the patent.

### L3 — Biconvex Positive

**nd = 1.7400, νd = 28.2. Glass: 740282 — SF3 class, supplier unproven. f = +27.54 mm.**

L3 begins the second cemented member of component I. It is strongly dispersive relative to its cemented partner L4 and is positive as a standalone element. The pair is separated from D12 by only 0.10 mm in the scaled model.

The patent describes this lens as the positive third lens of the second object-side doublet. Although the patent's stated design goals include correction of chromatic astigmatism and coma, the source does not isolate those corrections by element; the analysis therefore does not assign L3 a unique aberration duty beyond its verified power and dispersion relationship.

### L4 — Biconcave Negative

**nd = 1.5128, νd = 57.2. Glass: Unmatched (public catalog identity unresolved). f = −12.85 mm.**

L4 closes component I and is the strongest negative standalone element in the front component. Together with L3 it forms D34, whose isolated power is **−0.0356871 mm⁻¹**. This agrees with the patent's description of the second front member as negatively refracting.

No defensible exact current public-catalog identity was retained for the 1.5128 / 57.2 coordinate. The data therefore preserves an explicit `Unmatched` label rather than substituting a convenient but unsupported glass name.

### L5 — Negative Meniscus

**nd = 1.6727, νd = 32.2. Glass: 673322 — SF5 class, supplier unproven. f = −42.98 mm.**

L5 is the first lens after the large diaphragm space and begins component II. It is the negative, more dispersive part of D56. The front surface is extremely weakly curved in the scaled model (`R = +1317 mm`), corresponding to the patent's observation that the complete first member of component II is very nearly plano-convex.

### L6 — Biconvex Positive

**nd = 1.5687, νd = 63.1. Glass: 569631 — H-ZK1 / PSK2 class, supplier unproven. f = +21.08 mm.**

L6 is the positive partner of L5. The isolated D56 pair has **+0.0262769 mm⁻¹** power. The strong Abbe-number separation between L5 and L6 is consistent with an achromatizing cemented pair, but the patent does not publish line-by-line performance that would justify a stronger claim about secondary-spectrum correction.

The retained class label follows the coordinate evidence retained in the dossier. A CDGM H-ZK1 row is close to the patent coordinate, with historical cross-vendor equivalents noted in the evidence; supplier identity remains unproven.

### L7 — Biconvex Positive

**nd = 1.6425, νd = 58.1. Glass: 643581 — K-LaK6 / LAK6 class, supplier unproven. f = +39.51 mm.**

L7 is the only singlet among the five air-separated members. It occupies the middle position of component II and has **+0.0253130 mm⁻¹** standalone power. The patent explicitly describes it as the biconvex seventh lens between the two positive cemented members of component II.

The retained glass coordinate matches the SUMITA K-LaK6 / legacy LAK6 class used for the model's catalog-equivalent spectral proxy. That match is not evidence of the historical melt source.

### L8 — Biconvex Positive

**nd = 1.5400, νd = 59.7. Glass: 540597 — N-BAK2 class, supplier unproven. f = +21.73 mm.**

L8 begins the final cemented doublet and supplies its positive standalone power. It is paired with the lower-Abbe, higher-index L9. The isolated D89 member remains positive at **+0.00902612 mm⁻¹** despite the negative contribution of L9.

### L9 — Negative Final Lens

**nd = 1.7282, νd = 28.3. Glass: 728284 — SF10 class, supplier unproven. f = −24.96 mm.**

L9 closes the optical stack and is negative as a standalone element. Its high index and low Abbe number contrast with L8, creating another large dispersion separation within a cemented member. The final surface is followed by the modeled infinity-image spacing rather than by an additional cover plate or filter; none is present in the selected patent example.

## Glass Identification and Selection

The patent publishes only d-line refractive indices and Abbe numbers. It does not identify suppliers, catalog names, melts, partial-dispersion deviations, or per-line indices. The data file therefore treats glass names as coordinate-class assignments unless the coordinate remains unresolved. The retained class comparisons draw on the current SCHOTT, CDGM, and SUMITA catalog sources listed below.

| Element | Patent nd / νd | Retained model label | Evidence status |
|---|---:|---|---|
| L1 | 1.7440 / 44.9 | 744449 — N-LAF2 class | Close current SCHOTT coordinate match; supplier unproven |
| L2 | 1.5014 / 56.5 | 501564 — K10 class | Close current SCHOTT coordinate match; supplier unproven |
| L3 | 1.7400 / 28.2 | 740282 — SF3 class | Exact coordinate match in retained SCHOTT row; supplier unproven |
| L4 | 1.5128 / 57.2 | Unmatched | No defensible public exact identity retained |
| L5 | 1.6727 / 32.2 | 673322 — SF5 class | Close current SCHOTT coordinate match; supplier unproven |
| L6 | 1.5687 / 63.1 | 569631 — H-ZK1 / PSK2 class | Close CDGM coordinate match with cross-vendor class references |
| L7 | 1.6425 / 58.1 | 643581 — K-LaK6 / LAK6 class | Retained SUMITA coordinate match |
| L8 | 1.5400 / 59.7 | 540597 — N-BAK2 class | Close current SCHOTT coordinate match; supplier unproven |
| L9 | 1.7282 / 28.3 | 728284 — SF10 class | Close current SCHOTT coordinate match; supplier unproven |

The cemented members repeatedly pair lower-νd glass with higher-νd glass: L3/L4, L5/L6, and L8/L9 show particularly large dispersion differences. That pattern is consistent with ordinary achromatizing practice and with the patent's general aim of correcting chromatic aberration, but it does not establish apochromatic correction or anomalous partial-dispersion behavior.

For the eight class-matched elements, compatible catalog dispersion is resolved at runtime. Catalog-derived `nC`, `nF`, and `ng` values are not stored as measured patent data. L4 remains unresolved, and no element carries `dPgF`; no APO or anomalous-dispersion claim is made.

## Focus Mechanism

The patent supplies a single fixed optical prescription and no numerical focus movement law. The model consequently uses **NO_INTERNAL_RECONSTRUCTION**: `var` is empty and no internal group travel is invented.

The 1961 period product listing gives an 8-inch closest focusing distance, represented as **0.2032 m** product metadata. That number does not determine whether the production lens focused by whole-unit translation, internal movement, mount helicoid travel, or another mechanical implementation, and it is not used to generate an optical close-focus state.

The analysis therefore applies all computed focal length, BFD, pupil, Petzval, field, and geometry results to the single modeled infinity/reference prescription only.

## Verified Patent Conditions

The patent states three normalized first-order conditions for the objective. Recomputed from the final scaled data, all three remain within the stated ranges:

| Condition from US 3,038,379 | Final-model value | Result |
|---|---:|---|
| `5 ≤ total physical length / EFL ≤ 6` | 5.67534 | Satisfied |
| `1.5 ≤ BFD / EFL ≤ 2.5` | 1.73783 | Satisfied |
| `2.5 ≤ diaphragm-space separation / EFL ≤ 3.5` | 2.50585 | Satisfied |

These ratios are computed from the implemented prescription. The last ratio uses the conserved 25.11 mm scaled `d6` separation, independent of the modeled subdivision around `STO`.

## Verification Summary

The final prescription was recomputed from the authored data rather than from a separate intended-value table. Direct sequential reduced-angle tracing and an independently composed ABCD matrix agree to floating-point precision. The final paraxial quantities are:

- Effective focal length: **10.020549951 mm**.
- Back focal distance: **17.414059631 mm** from the surface-14 vertex.
- Physical vertex track: **56.87 mm**.
- Petzval sum: **+0.0134261692 mm⁻¹**, corresponding to a signed Petzval radius of **−74.4814 mm** under the project's stated sign convention.
- Modeled wide-open f-number: **f/1.8**, by stop-size calibration rather than independent iris measurement.

The revised figure-based rims pass the production geometry and render-trim checks. Their smaller rear apertures
can vignette off-axis bundles; the earlier full-pupil and edge-sample counts from the ray-envelope-sized draft do
not describe this revision. These estimated apertures do not establish production illumination or physical iris size.

No aspherical surfaces, diffractive structures, cover glass, filter plate, dummy plane, or reconstructed focus movement are present in this model.

## Sources

1. Wolfram Albrecht, **US Patent 3,038,379**, *High-Speed Photographic or Cinematographic Objective with Wide Image Angle*, filed February 6, 1959, German priority March 15, 1958, granted June 12, 1962. See especially the numerical table and system description on patent p. 2 and claims 1–2 on p. 3.
2. **Burleigh Brooks Inc., Catalogue, vol. 2 (1961), Schneider lens section**, PDF p. 11. Period listing for Cinegon 1.8/10: https://www.pacificrimcamera.com/rl/00896/00896.pdf
3. **Schneider-Kreuznach, C-Mount Objektive**, manufacturer-authored product brochure (archival mirror), later Cinegon 1.8/10 product context: https://www.rmaelectronics.com/content/Schneider-Lenses/schneider_brochure.pdf
4. **SCHOTT Optical Glass** catalog and datasheets, used for retained coordinate-class comparisons: https://www.schott.com/en-us/products/optical-glass-p1000267/downloads
5. **CDGM Optical Glass Database**, used for the retained H-ZK1 coordinate comparison: https://www.cdgmgd.com/database/toWebDatabase.htm?typeId=7&url=database
6. **SUMITA Optical Glass** downloads, used for the retained K-LaK6 / LAK6 coordinate comparison: https://www.sumita-opt.co.jp/en/download/
7. Additional catalog coverage recorded in the dossier: OHARA, HOYA, and HIKARI current optical-glass catalogs. Their absence from the retained class labels should not be read as evidence that they were excluded as possible historical suppliers.
