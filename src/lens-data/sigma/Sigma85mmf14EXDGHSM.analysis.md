# SIGMA 85mm f/1.4 EX DG HSM

## Patent Reference and Design Identification

**Patent:** [JP2011170128A](https://patents.google.com/patent/JP2011170128A/en)  
**Application Number:** JP2010034339  
**Filed:** 2010-02-19  
**Published:** 2011-09-01  
**Inventor:** Yukihiro Yamamoto  
**Applicant:** Sigma Corporation  
**Title:** Large-aperture medium telephoto lens  
**Embodiment analyzed:** Numerical Example 5, paragraph 0088, Figure 21; prescription on PDF pages 18–19 (printed pages 17–18).

This is a patent-derived architectural model associated with the original Sigma 85mm F1.4 EX DG HSM. It does not assert a manufacturer-confirmed production prescription or glass supplier. The later Art and DG DN designs are separate products.

The identification rests on convergent primary-source evidence:

1. The selected example has eleven physical elements in eight air-separated components, matching Sigma's original EX specification. Three front singlets are followed by a doublet, two singlets and two rear doublets, in the same ordered shape sequence as the manufacturer's construction drawing.
2. Sigma highlights the first element as SLD and the sixth element as aspherical. Example 5 has its lowest-dispersion material at the first element and its sole asphere on the front of the sixth, surface 10.
3. The patent moves the complete second functional group toward the object while the first group remains fixed. Sigma's October 2010 announcement describes a rear-focus system and Hyper Sonic Motor.
4. The source supplies a 0.85 m shooting-distance state, consistent with the manufacturer's 85 cm minimum focusing distance. Reference-plane interpretation and calculated magnification are checked separately below.
5. The patent design is 83.58 mm at F1.46 with maximum image height 21.63 mm. These values are retained without rescaling to the advertised 85 mm and f/1.4. The filing precedes the October 2010 US availability announcement.

The official legacy page lists full-frame DSLR coverage and Sigma SA, Canon EF, Nikon F, Pentax K and Sony A mount families. It also specifies a nine-blade rounded diaphragm, minimum aperture F16, 77 mm filter, 725 g mass and a maximum magnification ratio of 1:8.6. These product facts do not establish exact clear apertures, pupil behavior or a production glass melt.

## Optical Architecture

The system is a two-functional-group rear-focusing prime. The fixed front group L1 comprises elements E1–E3 and has a calculated standalone focal length of +245.047 mm. The moving assembly L2 comprises elements E4–E11, including the stop, and has +75.305 mm standalone focal length. Within that assembly, the pre-stop L2a subgroup is net negative at −121.990 mm and the post-stop L2b subgroup is positive at +43.498 mm. These subgroup values include their internal source spacings; they are not sums of the individual element focal lengths.

The source's “medium telephoto” title describes the photographic focal-length category. The first-vertex-to-image track is 129.252978 mm against an infinity EFL of 83.582922 mm, so the modeled track is not shorter than the focal length. The prescription is not labeled a strict track-compressed telephoto on that basis.

The stop is the explicitly printed plane at surface 14. No sensor cover plate, filter, resin layer or extra powered surface is supplied. Three cemented doublets occupy surfaces 7–9, 15–17 and 18–20. Their standalone net focal lengths are +60.995, +106.983 and +67.025 mm respectively. A cemented interface belongs to the downstream glass in the data file; no synthetic cement medium is inserted.

At infinity, paraxial tracing gives EFL 83.582922 mm and back focal distance 39.512078 mm. The surface-by-surface Petzval sum is +0.00191687133 mm⁻¹. This curvature sum is a first-order diagnostic; it is not a prediction of measured sagittal/tangential field curvature, MTF or image quality.

## Element-by-Element Analysis

All focal lengths in this section are calculated for the individual physical element in air, retaining its center thickness and paraxial curvatures. They describe standalone power, not an isolated allocation of the assembled lens's aberrations. Glass labels are coordinate-compatible catalog classes, not identified production suppliers. The patent publishes only nd and νd.

### E1 — Positive Meniscus

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA coordinate-compatible class; supplier unproven). f = +345.978 mm.

The weak positive front meniscus has the lowest dispersion in the prescription and coincides with the SLD-highlighted position in Sigma’s drawing. Paragraphs 0067–0070 require a low-dispersion positive element in the front group. That supports the material’s architectural role, without establishing a particular supplier or an apochromatic performance claim.

### E2 — Positive Meniscus

nd = 1.72916, νd = 54.67. Glass: TAC8 (HOYA coordinate-compatible class; supplier unproven). f = +75.418 mm.

This positive meniscus contributes the strongest positive standalone power in the fixed front group. Its high-index, moderate-dispersion coordinates allow positive bending before the following negative meniscus. The resulting group power must be calculated with the intervening spacings rather than inferred from this element alone.

### E3 — Negative Meniscus

nd = 1.60342, νd = 38.01. Glass: E-F5 (HOYA coordinate-compatible class; supplier unproven). f = -67.185 mm.

This object-convex negative meniscus completes the fixed front group. Its rear surface faces the variable intergroup gap. Paragraphs 0059–0062 constrain the net front-group focal length; the computed ratio is checked below. No independent aberration budget is assigned solely from its negative power.

### E4 — Negative Meniscus

nd = 1.72825, νd = 28.32. Glass: E-FD10 (HOYA coordinate-compatible class; supplier unproven). f = -152.459 mm.

This thin negative meniscus is the first member of the moving assembly and the front member of doublet D1. Its shared rear interface is the front of E5. The comparatively dispersive negative member and less dispersive positive partner provide a conventional chromatic-power balancing opportunity; the exact residual color depends on the full assembly and unavailable production spectra.

### E5 — Positive Meniscus

nd = 1.83481, νd = 42.72. Glass: TAFD5G (HOYA coordinate-compatible class; supplier unproven). f = +42.741 mm.

The positive member of D1 is cemented to E4. The doublet is net positive despite its negative front member. This establishes the positive component ahead of the separate negative meniscus and biconcave element described for L2a in the patent.

### E6 — Negative Meniscus (Aspheric)

nd = 1.58763, νd = 61.08. Glass: Unmatched (molded-asphere glass; nd 1.58763 / vd 61.08). f = -95.609 mm.

This separate negative meniscus carries the only asphere on its front surface, S10A. The official product drawing highlights this body as aspherical, and the release announcement describes a glass-mold element. Its exact nd/νd coordinate has no tight match in the six catalog families examined; a nearest catalog name is deliberately not substituted. The polynomial sag and clear radius are considered below.

### E7 — Biconcave Negative

nd = 1.67270, νd = 32.17. Glass: E-FD5 (HOYA coordinate-compatible class; supplier unproven). f = -52.195 mm.

This biconcave negative element completes the pre-stop subgroup. Its two concave faces and source material provide negative standalone power. Together with the preceding aspherical meniscus, it forms a tightly curved air interval; the modeled shared-radius clearance is a significant geometry constraint, not an adjustable source spacing.

### E8 — Negative Meniscus

nd = 1.72825, νd = 28.32. Glass: E-FD10 (HOYA coordinate-compatible class; supplier unproven). f = -71.527 mm.

This thin negative meniscus begins the post-stop positive subgroup and doublet D2. It uses the same source coordinates as E4. Paragraphs 0047–0052 constrain sums of the individual post-stop powers weighted by refractive index and Abbe number, so the negative contribution remains explicitly included rather than treating the rear assembly as a single positive lens.

### E9 — Biconvex Positive

nd = 1.88300, νd = 40.81. Glass: TAFD30 (HOYA coordinate-compatible class; supplier unproven). f = +43.261 mm.

The biconvex positive member of D2 uses the highest index in the prescription. It is cemented to E8 and satisfies the high-index positive-glass requirement in paragraph 0067. The complete doublet has weaker positive power than this element in air because of the negative partner and shared interface.

### E10 — Biconvex Positive

nd = 1.88300, νd = 40.81. Glass: TAFD30 (HOYA coordinate-compatible class; supplier unproven). f = +35.928 mm.

This high-index biconvex positive element begins the final doublet and uses the same source coordinates as E9. Its stronger standalone positive power is balanced by the final negative member. The pair participates in the positive post-stop subgroup; a specific field-flattening or spherical-aberration contribution cannot be proved from this power sign alone.

### E11 — Negative Meniscus

nd = 1.63980, νd = 34.57. Glass: E-FD7 (HOYA coordinate-compatible class; supplier unproven). f = -76.762 mm.

This image-convex negative meniscus closes doublet D3 and the moving group. Its front face shares the strongly curved interface with E10. The source ends at its rear face with a symbolic B.F.; the following image distance is reconstructed as described below, rather than copied from a missing numerical table entry.

## Glass Identification and Chromatic Limits

Nine distinct source coordinates were compared against OHARA, HOYA, Schott, Hikari, Sumita and CDGM catalog data. Multiple vendors can occupy the same or nearby nd/νd coordinate. The annotations therefore name a compatible class, preserving the original patent coordinates. OHARA historical, S- and L-prefixed entries were kept distinct in the comparison; no brand-based supplier inference was used.

| Elements | Source nd / νd | Selected annotation |
|---|---|---|
| E1 | 1.49700 / 81.61 | FCD1 (HOYA coordinate-compatible class; supplier unproven) |
| E6 | 1.58763 / 61.08 | Unmatched (molded-asphere glass; nd 1.58763 / vd 61.08) |
| E3 | 1.60342 / 38.01 | E-F5 (HOYA coordinate-compatible class; supplier unproven) |
| E11 | 1.63980 / 34.57 | E-FD7 (HOYA coordinate-compatible class; supplier unproven) |
| E7 | 1.67270 / 32.17 | E-FD5 (HOYA coordinate-compatible class; supplier unproven) |
| E4, E8 | 1.72825 / 28.32 | E-FD10 (HOYA coordinate-compatible class; supplier unproven) |
| E2 | 1.72916 / 54.67 | TAC8 (HOYA coordinate-compatible class; supplier unproven) |
| E5 | 1.83481 / 42.72 | TAFD5G (HOYA coordinate-compatible class; supplier unproven) |
| E9, E10 | 1.88300 / 40.81 | TAFD30 (HOYA coordinate-compatible class; supplier unproven) |

For ten elements, nC, nF and ng values are calculated from the HOYA catalog dispersion coefficients of the matching glass and stored in the data. ΔPgF uses the reference line θgF − (0.6438 − 0.001682 νd). These are class-level spectral approximations. The unmatched E6 has no catalog dispersion; the model falls back to an Abbe-number approximation for it, which does not establish the physical glass spectrum. Consequently, the model does not certify secondary-spectrum correction, APO behavior, production MTF or color performance.

The front low-dispersion positive element and multiple flint-like negative elements make chromatic balancing plausible. The patent's weighted-power condition for the rear subgroup is quantitatively reproduced, but it is not a substitute for complete measured spectral data.

## Focus Mechanism and Derived Image Plane

The mechanism and both d6 endpoint spacings are published; the absolute image distance is not, and is derived. Paragraph 0078 describes fixing the heavier front group relative to the image plane; Figure 21 and the general description move the complete second group objectward. The model preserves both published d6 entries.

| Quantity | Infinity | Printed 0.85 m state |
|---|---:|---:|
| d6, published | 15.2520 mm | 4.8554 mm |
| Last vertex to fixed image, derived | 39.512077506 mm | 49.908677506 mm |
| Configuration EFL | 83.582921846 mm | 79.823978232 mm |
| Configuration infinity-conjugate BFD | 39.512077506 mm | 40.667238081 mm |

The model sets the infinity image at the Gaussian (paraxial) focus of the printed prescription. Translating L2 objectward by the published 10.3966 mm increases the rear image gap by exactly that amount. The first group and image remain fixed at a first-vertex-to-image track of 129.252977506 mm. The near configuration's 49.908678 mm last-to-image distance is a finite-conjugate distance, not its 40.667238 mm infinity-conjugate BFD.

Treating the published shooting distance as object-to-image gives a calculated 849.997925 mm conjugate and magnification −0.115772724. An independent exact 850 mm paraxial solve gives d6 = 4.855429006 mm, which rounds to the published 4.8554 mm. The original description does not explicitly name the distance reference plane; the image-plane interpretation is supported by this agreement. No d6 adjustment is applied. The manufacturer’s 1:8.6 magnification remains a nominal product specification.

Intermediate positions linearly translate the same rigid assembly. They are useful geometric interpolations, not published motor commands or exact intermediate distance labels. Only the two endpoint spacings are source-tabulated. Because the source prints neither the image distance nor the reference plane of the 0.85 m distance, the near state is not a fully source-defined finite conjugate.

The fixed physical iris radius, 15.799138805 mm, is inferred by tracing the infinity entrance-pupil radius corresponding to F1.46. Matching that input F-number is calibration, not independent knowledge of the production diaphragm. Keeping this iris at near focus gives an exact meridional sine-NA working F-number of 1.704046 for the 850 mm state. Figure 23 prints F1.71. The −0.005954 difference (0.35 %) slightly exceeds a ±0.005 rounding interval and is left as found; no aperture, spacing or index was adjusted to force agreement. The paraxially inferred-iris and sine-NA conventions are not interchangeable.

## Aspherical Surface

S10A, the object-side face of E6, follows equation 4 on PDF page 13 (printed page 12):

z = (y²/R) / [1 + √(1 − (1 + K)y²/R²)] + A4 y⁴ + A6 y⁶ + A8 y⁸ + A10 y¹⁰ + A12 y¹².

Here K is the printed κ directly, with no unit offset. Lengths are millimetres, and Ap has units mm^(1−p). The selected source prints:

| Coefficient | Value |
|---|---:|
| K | 0.000000E+00 |
| A4 | −4.063050E−06 |
| A6 | −1.624620E−09 |
| A8 | +1.419900E−12 |
| A10 | −8.954110E−16 |
| A12 | 0.000000E+00 |

The data file's A14 entry is zero because the patent supplies no A14 term. At the inferred modeled radius of 19 mm, the exact polynomial departure from the K = 0 base sphere is −0.587307 mm. The base-sphere sag is 2.208632 mm and total aspherical sag is 1.621325 mm. This flattens the peripheral profile relative to that base sphere. The quoted radius is an inferred model rim, not a manufacturing specification or a published clear aperture.

## Patent Conditions

All eight conditions reproduce the printed values within their displayed precision. Calculated values below use the unscaled infinity prescription. Conditions 2 and 3 use standalone element powers in air for E8–E11, as defined in paragraph 0047.

| Condition | Calculated | Printed |
|---|---:|---:|
| 1 | 0.99098115 | 0.99 |
| 2 | 0.92136296 | 0.92 |
| 3 | 0.03158889 | 0.03 |
| 4 | 0.90096713 | 0.9 |
| 5 | 2.93178689 | 2.93 |
| 6 | 41.07250000 | 41.1 |
| 7 | 81.61000000 | 81.61 |
| 8 | 1.88300000 | 1.883 |

Condition 1 is R10/f; conditions 2–3 are the sums f/(fi ni) and f/(fi νi) over the four post-stop elements. Conditions 4–5 are fL2/f and fL1/f; condition 6 is the mean Abbe number of E4–E7; conditions 7–8 specify the front low-dispersion and rear high-index material coordinates. The source bounds are 0.20 < R10/f < 10.00; 0.25 < Σ f/(fi ni) < 1.50; −0.01 < Σ f/(fi νi) < 0.06; 0.60 < fL2/f < 1.30; 2.00 < fL1/f < 4.00; 35.00 < mean νL2a < 60.00; νGL > 70.00; and nGH > 1.80000. Each reproduced value lies within its corresponding bound. The relevant inequalities and definitions appear in paragraphs 0042–0067, with the example results on PDF page 19.

## Model Scope and Limitations

No physical clear radii are printed. The model's semi-diameters are inferred from the optical section, axial ray envelope and geometry constraints. The front-group rims are measured on Figure 21, which is drawn to scale at infinity focus: 35.7 mm for E1, 31.0 mm for E2, 26.4 mm for the front of E3 and 22.5 mm for its concave rear face, where the figure ends the curve at a flat annulus. The rims from the cemented doublet D1 rearward are estimates that agree with the figure within 2%. The figure gives E3, E6 and E7 flat rim annuli, which the model draws as slanted rims. Source radii, glass thicknesses, indices, asphere coefficients and published d6 spacings remain unchanged.

The curved air interval between S11 and S12 is the tightest part of the model. The full-aperture axial ray reaches radii 16.133131 and 16.078499 mm on those faces, and the modeled rims are 16.2 and 16.1 mm. At their shared radial band the minimum axial gap is 0.227899 mm, a sag intrusion of 95.913659% of the 5.5771 mm vertex spacing. The data file therefore raises the shared-gap allowance from the default 90% to 96%. Reducing a rim enough for the default allowance would clip the F/1.46 axial bundle, and the source spacing is not altered.

The minimum glass edge thickness at the modeled rims is 0.800191 mm (E5 at its 21 mm rim), and the largest rim slope is 43.204064° (S8).

On axis, the full F/1.46 bundle passes at both published focus states. Off axis, the inferred rims vignette the bundle: at the image corner at infinity roughly half of the meridional stop height is filled at full aperture (56% of the stop diameter), limited by the rims of S5 and S20. This vignetting follows from the inferred semi-diameters and is not a measurement of the production lens's throughput.

## Sources and References

1. Japan Patent Office, [JP2011170128A](https://patents.google.com/patent/JP2011170128A/en), published 2011-09-01. The transcription source is the original Japanese PDF [served by DPMA](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=JP2011170128A), which includes a PAJ cover sheet, not a translated HTML table. Numerical Example 5: PDF pp. 18–19; conventions and equation: p. 13; construction and endpoint aberration figures: p. 29.
2. Sigma, [85mm F1.4 EX DG HSM legacy product page](https://www.sigma-global.com/en/lenses/85_14/) and [official construction drawing](https://www.sigma-global.com/lenses/85_14_specification_01.jpg), retrieved 2026-10-09.
3. Sigma Corporation of America, [US pricing and availability announcement](https://press.sigmaphoto.com/corporate/10/sigma-corporation-of-america-announces-us-pricing-availability-of-85mm-f1-4-ex-dg-hsm-lens/), 2010-10-14. Rear-focus/HSM, molded-element and product specifications.
4. Optical-glass catalogs from HOYA, OHARA, Schott, Hikari, Sumita and CDGM. The selected labels are equivalence classes, not production attribution.
