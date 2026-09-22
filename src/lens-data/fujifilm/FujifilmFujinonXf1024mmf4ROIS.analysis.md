# FUJIFILM FUJINON XF 10-24mm f/4 R OIS

## Patent Reference and Design Identification

**Patent:** US 2015/0131163 A1\
**Application Number:** US 14/540,362\
**Priority:** JP 2013-234861, 2013-11-13\
**Filed:** 2014-11-13\
**Published:** 2015-05-14\
**Inventor:** Taiga Noda\
**Applicant:** FUJIFILM Corporation\
**Title:** *Zoom Lens and Imaging Apparatus*\
**Embodiment analyzed:** Example 1

The prescription analyzed here is Example 1 of US 2015/0131163 A1. The patent identifies the object side at left and the image side at right, and Figure 1 shows a five-group zoom whose refractive-power sequence is negative / positive / negative / positive / positive. Figure 2 shows the axial and maximum-field ray bundles for the wide and telephoto states. The numerical prescription is given in Tables 1–4. [US 2015/0131163 A1, Fig. 1–2; ¶0053–0057; Tables 1–4, pp. 6–7.]

The identification with the production FUJINON XF10-24mmF4 R OIS is a high-confidence research correlation, not a manufacturer statement that this patent is the production-lens patent. The convergent evidence is as follows:

1. The production specification is 14 elements in 10 groups; Example 1 contains 14 glass elements in 10 air-separated optical components, organized into five functional zoom groups.
2. FUJIFILM specifies four aspherical elements; Example 1 has four physical elements with aspherical surfaces: L12, L21, L41, and L51.
3. The patent design focal lengths are 10.33, 15.20, and 23.36 mm, while the product is marketed as 10–24 mm. No uniform scale is required.
4. Table 2 publishes FNo. 4.12 at all three zoom states, while the Example-1 telephoto aberration panel in Figure 7 is labeled FNo. 4.55. The implemented model follows the explicit Table-2 state table; the contradictory Figure-7 label is retained as a source discrepancy rather than silently reconciled. FUJIFILM specifies a constant maximum aperture of F4 for the production lens, which is consistent with the Table-2 interpretation but does not prove which patent label is erroneous. [US 2015/0131163 A1, Table 2, p. 6; Fig. 7.]
5. Example 1 publishes full fields of 112.0°, 86.0°, and 61.6°. FUJIFILM lists an angle-of-view range of 110°–61.2° for the production lens.
6. FUJIFILM’s 2020 XF10-24mmF4 R OIS WR release states that the WR revision uses the same optical design as the original XF10-24mmF4 R OIS, allowing the manufacturer’s optical-count specification for that design to be used as production context.

The patent itself does not name the XF10-24mmF4 R OIS. The data therefore keeps the exact patent-derived prescription separate from marketed focal length, aperture, mount, and format metadata. The implemented mount is Fujifilm X and the image format is APS-C, based on FUJIFILM product documentation rather than on the numerical prescription alone.

## Optical Architecture

Example 1 is a negative-lead five-functional-group zoom. Its 14 physical glass elements form 10 air-separated optical components: four singles in G1; a single plus a cemented doublet in G2; one cemented doublet in G3; a single plus a cemented triplet in G4; and a single element in G5. The patent explicitly assigns group powers of negative, positive, negative, positive, and positive. [US 2015/0131163 A1, ¶0054, Fig. 1.]

The isolated functional-group powers recomputed from the final data file are:

| Functional group | Patent sign | Isolated EFL (mm) |
| --- | --- | ---: |
| G1 | negative | −21.285791 |
| G2 | positive | 26.320257 |
| G3 | negative | −40.488167 |
| G4 | positive | 46.411597 |
| G5 | positive | 62.677776 |

These are isolated group powers. They are not interchangeable with the standalone powers of individual elements, the net powers of cemented stacks, or the in-situ ray deflections of the assembled zoom.

During zooming, G1 through G4 move while G5 remains fixed with respect to the image surface. The patent states that the G1–G2 separation decreases and the G2–G3 separation increases toward the long-focal-length end; the stop moves integrally with G2. The final data reproduces those relationships and retains the 1.3000 mm stop-to-G2 spacing. [US 2015/0131163 A1, ¶0057–0058, ¶0063, Table 3.]

Relative to the fixed modeled image plane, the executed movement solution is:

| Component | Intermediate vs. wide (mm) | Tele end vs. wide (mm) |
| --- | ---: | ---: |
| G1 | 5.63 | 2.80 |
| Stop | −8.14 | −21.14 |
| G2 | −8.14 | −21.14 |
| G3 | −7.45 | −19.39 |
| G4 | −7.28 | −19.46 |
| G5 | 0.00 | 0.00 |

Positive values in this table are imageward. G1 first moves imageward and then partially reverses before the tele end; G2, G3, and G4 move objectward overall; G5 remains stationary. The reversal is not smoothed away by interpolation: the three patent states are retained as explicit zoom control points.

The source also includes a plane-parallel optical member PP between the lens and image surface. Paragraph 0055 describes PP as a surrogate for camera-side cover glass, filters, or related components. The LensVisualizer prescription omits that plate and replaces the source path after surface 25 with the d-line air-equivalent distance 14.5180581737 mm. This preserves the relevant first-order rear optical path while avoiding an excluded sensor/filter surrogate. [US 2015/0131163 A1, ¶0055, ¶0076, Table 1.]

No scale factor is applied: all radii, thicknesses, image-plane distances, and asphere coefficients remain at the patent’s native scale.

## Element-by-Element Analysis

### L11 — Negative Meniscus

nd = 1.754999, νd = 52.32. Glass: 755523 — S-YGH51 / S-LAH97 coordinate class (OHARA candidate). f = −35.720568 mm.

L11 is the first member of the negative front group G1. Its standalone negative power begins the negative-lead front section, but the patent does not assign a separate aberration-correction function to L11; its role is therefore described only at the level established by its power and group membership.

### L12 — Neg. Meniscus (2× Asph)

nd = 1.740250, νd = 49.12. Glass: Unmatched (740491 coordinate). f = −24.998149 mm.

L12 is the second negative member of G1 and carries aspheres on both surfaces. The dual-asphere geometry is one of the main non-spherical departures in the front group. At the modeled semi-diameters, the verified departures from same-radius spheres are +0.760779 mm at 3A and −1.641621 mm at 4A; these are model-aperture results, not patent-published clear-aperture measurements.

### L13 — Biconcave Negative

nd = 1.592824, νd = 68.63. Glass: 593686 — FCD505 coordinate class (HOYA candidate). f = −35.351974 mm.

L13 is a biconcave negative element in G1. Its relatively high νd coordinate is retained as a catalog-coordinate clue only; the data does not promote it to a manufacturer-confirmed ED designation. The patent does not isolate an element-specific correction function for L13.

### L14 — Biconvex Positive

nd = 1.882997, νd = 40.76. Glass: 883408 — S-LAH58 coordinate class (OHARA candidate). f = 25.310814 mm.

L14 is the positive element that closes G1. Its positive standalone power partially offsets the three preceding negative elements, while the complete four-element group remains negative with an isolated group EFL of −21.285791 mm.

### L21 — Biconvex Positive (2× Asph)

nd = 1.581029, νd = 59.23. Glass: Unmatched (581592 coordinate). f = 38.198302 mm.

L21 opens G2 as a positive, dual-aspherical element. The complete G2 is positive. Its two aspheres are retained directly from the patent and contribute to the group’s non-spherical geometry without requiring a separate inferred aberration label for the element.

### L22 — Negative Meniscus

nd = 1.816000, νd = 46.62. Glass: 816466 — S-LAH59 coordinate class (OHARA candidate). f = −20.981622 mm.

L22 is the negative member of the cemented G2 pair D1. It is cemented directly to L23 at the shared source surface; no synthetic cement layer is inserted. The D1 cemented stack has a verified net EFL of +70.776033 mm, distinct from L22’s negative standalone power.

### L23 — Biconvex Positive

nd = 1.733997, νd = 51.47. Glass: 734515 — S-LAL59 coordinate class (OHARA candidate). f = 16.668673 mm.

L23 is the positive partner in D1 and closes G2. The cemented pair is net positive even though L22 alone is negative, illustrating why standalone and cemented-stack powers must not be conflated.

### L31 — Biconcave Negative

nd = 1.772499, νd = 49.60. Glass: 773496 — S-LAH66 coordinate class (OHARA candidate). f = −17.397589 mm.

L31 is the negative front member of the cemented G3 doublet D2. Together with L32 it forms the entire third functional group. The verified cemented-stack EFL is −40.488167 mm, the same isolated power reported for G3 because G3 contains no additional air-separated element.

### L32 — Biconvex Positive

nd = 1.496999, νd = 81.54. Glass: 497816 — S-FPL51 coordinate class (OHARA candidate). f = 32.287132 mm.

L32 is the positive, very-low-dispersion-coordinate partner in D2. Its S-FPL51 label is retained only as an OHARA coordinate-compatible candidate. The data does not claim a production supplier or melt, and no explicit line-index fields are authored.

### L41 — Biconvex Positive (2× Asph)

nd = 1.497103, νd = 81.56. Glass: 497816 — M-FCD1 coordinate class (HOYA candidate). f = 18.965494 mm.

L41 is the biconvex positive single element at the front of G4 and has aspheres on both surfaces. The patent specifically identifies this lens as a permissible focusing member and explains that focusing with this single element reduces the moving mass and is intended to limit focus-induced variation in aberration and angle of view. Example 1, however, publishes no finite-focus L41 travel. [US 2015/0131163 A1, ¶0065–0066.]

### L42 — Negative Meniscus

nd = 1.804000, νd = 46.58. Glass: 804466 coordinate class (S-LAH65V / H-ZLaF50D candidates). f = −13.947335 mm.

L42 is the negative first element of the cemented G4 triplet D3. The patent describes the L42–L43–L44 cemented assembly in Examples 1 and 2 and ties the fourth-group cemented combination to chromatic correction. [US 2015/0131163 A1, ¶0067–0069.]

### L43 — Biconvex Positive

nd = 1.496999, νd = 81.54. Glass: 497816 — S-FPL51 coordinate class (OHARA candidate). f = 19.440764 mm.

L43 is the positive central element of D3. Its source coordinate matches the same S-FPL51 class used for L32, but the data keeps the catalog name at candidate level. The patent’s explicit chromatic rationale applies to the cemented fourth-group combination rather than to a separately quantified L43 contribution.

### L44 — Biconcave Negative

nd = 1.696797, νd = 55.53. Glass: 697555 — S-LAL14 coordinate class (OHARA candidate). f = −44.739409 mm.

L44 is the negative rear member of D3. The verified cemented-triplet EFL is −23.048805 mm, while the complete G4 remains positive at +46.411597 mm because L41 and the spacing within the group materially affect the group matrix. Paragraph 0069 states that the image-side negative L44 can assist astigmatism correction; that statement is attributed to the patent rather than inferred from the power sign alone.

### L51 — Biconvex Positive (2× Asph)

nd = 1.693500, νd = 53.18. Glass: 694532 — L-LAL13 coordinate class (OHARA candidate). f = 62.677776 mm.

L51 is the single positive fifth-group element and carries aspheres on both surfaces. G5 remains fixed during zoom. The patent links the fifth-group form and its aspherical surface to control of ghost behavior, field curvature, and astigmatism, while also using the group spacing as a design condition. [US 2015/0131163 A1, ¶0071–0073.]

## Glass Identification and Selection

The patent publishes d-line refractive indices and Abbe numbers, not supplier glass names. The Stage-2 labels therefore remain coordinate matches or coordinate classes derived from authoritative vendor catalogs. A coordinate-compatible catalog row does not establish the production supplier, melt, or marketing designation.

| Element | nd | νd | Data-file glass label | Confidence |
| --- | ---: | ---: | --- | --- |
| L11 | 1.754999 | 52.32 | 755523 — S-YGH51 / S-LAH97 coordinate class (OHARA candidate) | coordinate-compatible |
| L12 | 1.740250 | 49.12 | Unmatched (740491 coordinate) | unmatched |
| L13 | 1.592824 | 68.63 | 593686 — FCD505 coordinate class (HOYA candidate) | coordinate-compatible |
| L14 | 1.882997 | 40.76 | 883408 — S-LAH58 coordinate class (OHARA candidate) | coordinate-compatible |
| L21 | 1.581029 | 59.23 | Unmatched (581592 coordinate) | unmatched |
| L22 | 1.816000 | 46.62 | 816466 — S-LAH59 coordinate class (OHARA candidate) | coordinate-compatible |
| L23 | 1.733997 | 51.47 | 734515 — S-LAL59 coordinate class (OHARA candidate) | coordinate-compatible |
| L31 | 1.772499 | 49.60 | 773496 — S-LAH66 coordinate class (OHARA candidate) | coordinate-compatible |
| L32 | 1.496999 | 81.54 | 497816 — S-FPL51 coordinate class (OHARA candidate) | coordinate-compatible |
| L41 | 1.497103 | 81.56 | 497816 — M-FCD1 coordinate class (HOYA candidate) | coordinate-compatible |
| L42 | 1.804000 | 46.58 | 804466 coordinate class (S-LAH65V / H-ZLaF50D candidates) | coordinate-compatible |
| L43 | 1.496999 | 81.54 | 497816 — S-FPL51 coordinate class (OHARA candidate) | coordinate-compatible |
| L44 | 1.696797 | 55.53 | 697555 — S-LAL14 coordinate class (OHARA candidate) | coordinate-compatible |
| L51 | 1.693500 | 53.18 | 694532 — L-LAL13 coordinate class (OHARA candidate) | coordinate-compatible |

L12 and L21 remain explicitly unmatched because no exact authoritative current catalog identity was recovered for the 740491 and 581592 coordinates. L31 is kept as an S-LAH66 coordinate candidate and is not conflated with S-LAH66N. L51 preserves the OHARA L-prefix family in its L-LAL13 candidate rather than normalizing it to an S-prefix family.

No element in the final data carries `nC`, `nF`, `ng`, or `dPgF`. Although some catalog candidates have authoritative line-index data, selecting those data would require treating a coordinate candidate as the element’s actual glass. The analysis therefore makes no apochromatic or anomalous-partial-dispersion claim from the stored prescription. The manufacturer’s statement that the production lens uses four ED elements is retained as product information and is not mapped element-by-element onto the patent solely from νd values.

## Focus Mechanism

The patent permits the positive single lens L41 to move along the optical axis for focusing. It presents this as a single-element internal-focusing arrangement and states that moving only L41 can reduce focusing mass and suppress changes in aberration and angle of view. [US 2015/0131163 A1, ¶0066.]

Example 1 does not publish any finite-object spacing table, L41 travel, focus cam, or finite-focus conjugate. The final LensVisualizer data therefore uses `NO_INTERNAL_RECONSTRUCTION`: every zoom-dependent variable gap has identical infinity and close-focus entries. No L41 motion is synthesized from the production minimum-focus distance.

The `closeFocusM` value of 0.24 m is manufacturer product metadata only. It allows the catalog to retain the production minimum-focus specification, but it does not define a modeled finite-focus optical state in this prescription. The production maximum magnification of 0.16× at the long end likewise does not uniquely determine L41 travel and is not used as a reconstruction constraint.

## Aspherical Surfaces

Example 1 has eight aspherical surfaces on four physical elements: 3A and 4A on L12, 10A and 11A on L21, 18A and 19A on L41, and 24A and 25A on L51. The patent uses the equation

`Zd = C·h² / {{1 + sqrt(1 − KA·C²·h²)}} + Σ A_m·h^m`, for `m = 3 … 12`, with `C = 1/R`.

LensVisualizer uses the standard denominator containing `(1 + K)`, so the implemented conversion is `K = KA − 1`. Thus `KA = 1` becomes `K = 0`; source surface 4 has `KA = −3.298432`, hence `K = −4.298432`. Coefficients have units `mm^(1−m)`. Odd orders remain rotationally symmetric because the patent’s `h` is radial height. [US 2015/0131163 A1, ¶0084, Eq. (A), Tables 4, pp. 6–7.]

The selected US publication is controlling where family text differs. In particular, surface 19 `A5` is `9.4589632E−06` in the rendered Table 4; the related-family value `9.4589682E−06` is not substituted.

### Even-order coefficients and conic constants

| Surface | K | A4 | A6 | A8 | A10 | A12 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 3A | 0 | 2.58431800E-04 | -3.59809530E-06 | 2.29780510E-08 | -4.04383120E-11 | -9.95458490E-14 |
| 4A | -4.298432 | 5.54844440E-04 | -4.04046310E-06 | 4.33859920E-08 | -2.84878690E-10 | 5.65287000E-13 |
| 10A | 0 | 1.94508620E-06 | 9.27625970E-06 | -1.32681940E-07 | -6.28588170E-10 | 1.44509090E-11 |
| 11A | 0 | 4.30551710E-05 | 1.57416950E-05 | -3.32396810E-07 | -5.46202660E-10 | 4.18589830E-11 |
| 18A | 0 | 1.35782950E-05 | 5.18114110E-07 | -3.76678730E-08 | 5.47854480E-10 | -2.38651000E-12 |
| 19A | 0 | 8.32871400E-05 | -3.52367180E-06 | -1.22020690E-09 | 6.92666100E-10 | -4.42230650E-12 |
| 24A | 0 | -1.45247160E-04 | -3.43844590E-06 | 1.82049200E-08 | -4.35551410E-11 | 5.65680110E-14 |
| 25A | 0 | -1.01494580E-04 | 1.55049190E-06 | 2.43367980E-08 | -1.30357360E-10 | 1.40694970E-13 |

### Nonzero odd-order coefficients

| Surface | A3 | A5 | A7 | A9 | A11 |
| --- | ---: | ---: | ---: | ---: | ---: |
| 3A | 0.00000000E+00 | -7.88056370E-06 | 1.60959610E-07 | -1.54164220E-09 | 5.05661220E-12 |
| 4A | -4.45588810E-06 | -1.28403950E-05 | -2.02576530E-07 | 2.03565200E-09 | -3.35368030E-12 |
| 10A | 0.00000000E+00 | -2.65108830E-05 | -1.01081760E-06 | 3.33043320E-08 | -2.66960160E-10 |
| 11A | 0.00000000E+00 | -4.75639420E-05 | -1.39700410E-06 | 6.99723660E-08 | -7.13364760E-10 |
| 18A | 0.00000000E+00 | -9.14069930E-06 | 3.21163930E-07 | -3.11360600E-09 | 8.43378760E-12 |
| 19A | 0.00000000E+00 | 9.45896320E-06 | 5.80931250E-07 | -9.81620420E-09 | 4.32408800E-11 |
| 24A | 0.00000000E+00 | 4.04532680E-05 | -1.85246770E-08 | -3.58283970E-10 | 4.88952660E-13 |
| 25A | 0.00000000E+00 | 1.70199570E-05 | -4.67226360E-07 | 1.31797590E-09 | -1.32187100E-13 |

The patent does not publish clear semi-diameters. Departures can therefore be quoted only at the reviewed modeled apertures, not as source-published edge departures:

| Surface | Modeled SD (mm) | Departure from same-radius sphere (mm) |
| --- | ---: | ---: |
| 3A | 13.700 | +0.760778690 |
| 4A | 11.200 | -1.641621444 |
| 10A | 6.900 | -0.098912601 |
| 11A | 7.100 | -0.080819279 |
| 18A | 9.300 | +0.037287344 |
| 19A | 9.300 | +0.767533086 |
| 24A | 13.900 | +0.386318758 |
| 25A | 14.100 | +0.562993133 |

The departures vary substantially in both sign and magnitude. The analysis does not assign an element-specific aberration correction merely from a coefficient sign; where the patent states a design role, that role is cited explicitly, and otherwise the surface is described geometrically.

## Chromatic Correction Strategy

The patent’s explicit chromatic design statement is concentrated in G4. It requires a fourth-group cemented lens containing positive and negative powers and gives the condition `30 < νdp − νdn < 45`. For Example 1, the relevant difference is 81.54 − 46.58 = 34.96, matching Table 21. The patent states that the fourth-group cemented arrangement can correct lateral chromatic aberration while limiting index contrast and sensitivity to manufacturing error. [US 2015/0131163 A1, ¶0067–0069; Table 21.]

This is a d-line/Abbe-number statement. It does not by itself establish apochromatic correction, anomalous partial dispersion, or a particular production ED-glass identity. Those stronger claims would require validated line-index or Sellmeier evidence for the actual selected glasses, which the final data intentionally does not assert.

The production literature describes four ED elements. Because the patent prescription does not label the individual glasses as production ED elements and the Stage-2 glass work remains at candidate/class confidence, the marketing count is not back-projected onto four specific patent elements.

## Conditional Expressions

The patent gives eight principal conditions for this design family. All eight inequalities are satisfied by the parsed Example-1 prescription. Seven numerical values reproduce the printed Table-21 value at the stated precision; condition (2) contains a visible source/result discrepancy and is left unresolved rather than silently rewritten.

| No. | Condition | Calculated | Table 21 | Disposition |
| ---: | --- | ---: | ---: | --- |
| 1 | `0.15 < |f1|/f2 < 1.0` | 0.8087227626 | 0.81 | matches printed value; inequality satisfied |
| 2 | `0.1 < f4/f5 < 1.1` | 0.7404793143 | 0.75 | source/result mismatch; inequality satisfied |
| 3 | `0.2 < f41/f4 < 1.0` | 0.4086369585 | 0.41 | matches printed value; inequality satisfied |
| 4 | `30 < vdp-vdn < 45` | 34.96 | 34.96 | matches printed value; inequality satisfied |
| 5 | `0.1 < D45t/f4 < 1.1` | 0.4623844352 | 0.46 | matches printed value; inequality satisfied |
| 6 | `0.05 < bfw/f5 < 0.5` | 0.2316610583 | 0.23 | matches printed value; inequality satisfied |
| 7 | `-3.0 < (r51f+r51r)/(r51f-r51r) < 7.5` | 0.7921242796 | 0.79 | matches printed value; inequality satisfied |
| 8 | `50 < omega` | 56 | 56 | matches printed value; inequality satisfied |

Condition (2), `0.1 < f4/f5 < 1.1`, is the exception: Table 21 prints 0.75, whereas the isolated group matrices derived from Table 1 give `f4/f5 = 0.7404793143`, which rounds to 0.74 at two decimals. The inequality is still satisfied. The source value remains visible in the dossier; no widened tolerance or silent patent correction is used.

The other conditions connect the G1/G2 power ratio, the L41/G4 power ratio, the G4 cemented-pair Abbe contrast, the tele-end G4–G5 spacing, wide-end back focus relative to G5, the form factor of L51, and the wide-end half-field. Their published rationale is distributed through ¶0060–0073 of the patent.

## Image Stabilization

The production lens is an OIS lens, but the selected Example 1 does not publish a stabilization decenter law, moving stabilization group, actuator range, or off-axis stabilization state. The patent’s generic definition of components that may accompany the optical system includes camera-shake correction mechanisms, but the numerical example does not identify an optical stabilization motion. [US 2015/0131163 A1, ¶0033.]

Accordingly, the LensVisualizer model contains no OIS decenter or stabilization control. Nothing in the data should be read as identifying which production group is stabilized or what its correction range is.

## Verification Summary

The final `.data.ts` was numerically evaluated as the implemented model rather than by reusing a separate hard-coded prescription. A strict literal parser loads the authored surfaces, variable spacings, aspheres, and metadata; separate ABCD and height/reduced-angle implementations then reproduce the first-order results.

| State | Computed EFL (mm) | Patent f (mm) | Computed BFL from surface 25 (mm) | Model track to image (mm) |
| --- | ---: | ---: | ---: | ---: |
| Wide | 10.3258082792 | 10.33 | 14.5094207414 | 102.4880581737 |
| Intermediate | 15.2023514554 | 15.20 | 14.5107201820 | 96.8580581737 |
| Tele | 23.3599771477 | 23.36 | 14.5028634382 | 99.6880581737 |

The modeled rear path after surface 25 is 14.5180581737 mm in air-equivalent distance, reproducing the patent’s `Bf (in air) = 14.52 mm` at source precision. The paraxial BFL calculated from the rounded prescription differs slightly by zoom state; those residuals are retained as source-rounding effects rather than absorbed into the rear spacing.

The surface-by-surface Petzval sum, calculated as `φ/(n·n′)` on all implemented refracting surfaces, is 0.00705687295443 mm⁻¹. Its reciprocal is not treated as a directly measured image-shell radius.

The patent supplies no clear semi-diameters, so the data’s `sd` values are modeled. Exact meridional Snell tracing was used at the three published zoom states and six representative interpolated states. The finite sampling covers wide-open on-axis bundles, bundles at 0.6× the corresponding half-field, and a full-field reference ray solved to a 14.2 mm image radius. This establishes the sampled geometry used by the data file; it does not prove every point of the continuous zoom/pupil domain.

| Geometry check | Verified result |
| --- | ---: |
| Minimum element edge thickness | 0.547274 mm |
| Maximum actual rim-slope angle | 53.838804° |
| Worst shared-band cross-gap intrusion / gap | 0.591846 |
| Minimum sampled non-stop ray clearance | 0.135412 mm |
| Maximum sampled non-stop aperture fill | 0.985440 |

The stop diameter is also modeled rather than source-published. `STO.sd = 4.0483914768 mm` is the wide-state paraxial calibration required by the Table-2 FNo. 4.12 value. The corresponding derived stop semi-diameter targets are 4.0483915 mm at wide, 4.7668005 mm at intermediate, and 5.9701877 mm at the long end. Agreement with the Table-2 FNo. 4.12 values is therefore calibration, not independent evidence of the physical diaphragm diameter. Figure 7 separately labels the Example-1 telephoto aberration panel FNo. 4.55; that internal source discrepancy is not used to redefine the modeled aperture and remains documented in the dossier.

Figure 1 was reviewed at 600 dpi during integration. The front-group optical rims are larger than the initial ray-envelope estimates: S1 is 20.5 mm, S2/S3A 13.7 mm, S4A 11.2 mm, and S5–S8 12.8 mm. The S2/S3A and S4A limits preserve air-gap clearance; the larger drawn blank outlines cannot be copied as optical clear apertures. Other groups retain their original estimates.

## Sources and References

1. Taiga Noda, **US 2015/0131163 A1, “Zoom Lens and Imaging Apparatus,”** FUJIFILM Corporation, published 2015-05-14. Primary prescription source: Fig. 1–2; ¶0053–0086; Tables 1–4 and 21. The supplied patent PDF in the dossier is the controlling transcription source.
2. FUJIFILM, **FUJINON XF10-24mmF4 R OIS — official discontinued product page**: https://www.fujifilm-x.com/fi-fi/products/discontinued-lenses/xf10-24mmf4-r-ois/ . Used for production identity, optical counts, focal range, aperture, angle of view, MFD, magnification, mount/system context, and other marketed specifications.
3. FUJIFILM, **XF10-24mmF4 R OIS official lens manual**: https://dl.fujifilm-x.com/support/manual/lenses/lens_xf10-24_xf18-55_xf55-200_manual_03.pdf . Used as manufacturer product documentation.
4. FUJIFILM Corporation, **“Fujifilm Introduces FUJINON XF10-24mmF4 R OIS WR lens,”** 2020-10-15: https://www.fujifilm-x.com/de-ch/news/fujifilm-introduces-fujinon-xf10-24mmf4-r-ois-wr-lens/ . Used for the statement that the WR revision retains the original lens’s optical design.
5. OHARA Corporation, **Optical glass data/type pages and detailed data**: https://oharacorp.com/glass-type/optical-glass/s-lah/ ; https://oharacorp.com/glass-type/s-lal/ ; https://oharacorp.com/wp-content/uploads/2025/04/esfpl51.pdf ; https://oharacorp.com/optical-glass/low-softening-temperature-optical-glass/ . Used only for coordinate-compatible glass candidates/classes, not production supplier attribution.
6. HOYA GROUP Optics Division, **Optical glass downloads/material data**: https://www.hoya-opticalworld.com/english/datadownload/index.html ; https://www.hoya-opticalworld.com/english/pdf/M-FCD1_120524.pdf . Used only for coordinate-compatible candidate evidence.
7. CDGM Glass Co., Ltd., **Optical glass database**: https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&pageIndex=27&url=database . Used as cross-vendor coordinate evidence for the 804466 class.
