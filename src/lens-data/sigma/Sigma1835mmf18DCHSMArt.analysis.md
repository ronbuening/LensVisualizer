# SIGMA 18-35mm f/1.8 DC HSM | Art

## Patent Reference and Design Identification

**Patent:** JP 2014-89365 A
**Application Number:** JP 2012-239798
**Filed:** 2012-10-31
**Published:** 2014-05-15
**Inventor:** Ryo Shioda
**Applicant:** Sigma Corporation
**Title:** Optical System
**Embodiment analyzed:** Numerical Example 1

The numerical authority is the Japanese application publication, including its original PAJ wrapper.
The PAJ front page supplies the Latin-script inventor form SHIODA RYO; the normalized display form is Ryo Shioda.
The following description concerns the selected patent prescription.
Its association with the production Sigma 18–35 mm F1.8 DC HSM | Art remains a construction correlation, without manufacturer confirmation of exact factory prescription identity. [1, PDF pp1–2]

The correlation rests on several independent observations:

1. The prescription has 17 physical glass elements in 12 air-separated groups, matching the manufacturer's stated construction.
2. Its three infinity focal lengths are close to the marketed APS-C 18–35 mm range, although the numbers are not identical.
3. It has five aspherical surfaces on four elements. Sigma documents molded glass aspherics and SLD glass, but does not identify the source table as its production formula. Sigma's construction diagram marks four aspherical lenses and five SLD elements; they fall on L1, L2, L8 and L17, the four elements that carry the example's aspheres, and on L3, L7, L10, L14 and L15, the five elements with the FCD1- and FCD505-class coordinates.
4. The finite-conjugate tables correspond to approximately 0.28 m object-to-image distance, consistent with the production minimum focusing distance.
5. The application was filed in 2012, before the A013 product generation. [1, ¶0091; 3]

The product was supplied in Sigma SA, Canon EF, Nikon F, Pentax K and Sony A mounts for APS-C cameras.
Its marketed maximum aperture is f/1.8, minimum aperture f/16, and diaphragm has nine rounded blades.
The published product magnification is 1:4.3.
These production specifications are distinct from the numerical design values below. [3]

The model uses no focal-length scaling.
Its nominal aperture is the patent's f/1.86 at all three infinity zoom stations.
The original A-publication Figure 1 is degraded; the legible Figure 1 in JP 5952167 B2 is used only for arrangement and for estimating the modeled semi-diameters, never for a prescription number.
Every radius, thickness, glass coordinate and aspheric coefficient comes from the A publication; independent source-first comparison found all 173 decimal/scientific entries in the selected Example 1 tables identical to the grant. The A publication remains controlling. [1, PDF p28; 2, PDF p26]

## Optical Architecture

The layout is a negative–positive–negative–positive four-group zoom.
G1 is divided into two negative subgroups: the stationary front component G1A and the internal focusing component G1B.
The aperture stop lies between G2 and G3 and moves with G3 during zooming.
The physical construction comprises 17 elements, five cemented doublets and 12 air-separated groups; the four functional zoom groups are a different count. [1, ¶0033–0039]

The following focal lengths are recomputed from the final prescription at the d line.
Functional-group values are calculated with each complete group in air, retaining its internal spacings.
They are not sums of isolated element powers.

| Functional group | Source surfaces | Calculated focal length (mm) | Published focal length (mm) |
|---|---|---:|---:|
| G1 | 1–10 | -27.876984 | -27.88 |
| G2 | 11–17 | +37.502468 | +37.50 |
| G3 | 18–23 | -49.963682 | -49.96 |
| G4 | 24–30 | +39.337313 | +39.34 |
| G1A | 1–7 | -56.715072 | -56.72 |
| G1B | 8–10 | -92.325147 | -92.33 |

G1 is fixed relative to the image in the infinity zoom table.
G2 moves objectward, G3 and the stop move imageward, and G4 moves objectward.
From the tabulated gaps, between the 18.60 mm and 33.78 mm stations G2 travels 15.48 mm toward the object, G3 with the stop 11.09 mm toward the image, and G4 1.35 mm toward the object.
The three published zoom stations bracket monotonic endpoint motion for each of these functional groups; no reversal is introduced.
Linear slider interpolation connects the published stations, without claiming to reproduce an actual manufacturing cam curve. [1, ¶0033–0039, ¶0091]

The first-surface-to-image distance is the optical track.
It must not be compared directly with Sigma's 121 mm filter-surface-to-mount barrel length. [3]

| Infinity station | Calculated EFL (mm) | Calculated BFD (mm) | First vertex to image (mm) |
|---|---:|---:|---:|
| 18.60 mm | 18.601515 | 38.560176 | 168.5001 |
| 26.02 mm | 26.023756 | 39.300731 | 168.5001 |
| 33.78 mm | 33.778926 | 39.906531 | 168.5001 |

BFD is measured from the final refracting vertex to the paraxial infinity image plane.
It exceeds EFL at every listed infinity station, supporting the retrofocus description at these states.
The design is not described as a telephoto optical system merely because the longest zoom position is called “tele.”

The complete surface-by-surface Petzval sum is retained in the numerical companion.
Each refracting boundary contributes (n′−n)/(Rnn′), including the true media on either side of a cemented interface.

The sum is +0.003482657 mm⁻¹ at the d line.
It is unchanged by translating fixed-power groups; this paraxial sum alone does not specify actual tangential or sagittal field curvature.

## Element-by-Element Analysis

Element names L1–L17 follow the final data file, from object to image.
The quoted f values are standalone thick-element focal lengths in air, using each element's two bounding radii, centre thickness and native source nd.
A cemented element's standalone value is a comparison quantity; its in-situ refractions have different surrounding media.
Glass names below identify checked catalog equivalents, not established production suppliers or melts.
The source publishes nd/νd, but no element-specific C/F/g line indices or partial-dispersion deviations. [1, ¶0083, ¶0091]

### L1 — Negative Meniscus (1× Asph)

nd = 1.772501, νd = 49.47. Glass: M-TAF1 (HOYA catalog equivalent; supplier unconfirmed). f = -41.640489 mm.

This is the first negative meniscus of G1A, with its convex face toward the object.
Its object-side surface 1A is aspherical, while the rear surface is spherical.
The front position and negative sign are specified by the patent, whose general discussion connects this arrangement with admitting a wide field and retaining back-focus clearance. [1, ¶0020–0021, ¶0034]

The modeled front and rear apertures differ to respect the steep spherical rear profile.
The grant figure draws the same step, with a flat annulus outside the rear curve.
Neither aperture is a manufacturer dimension; their validity is tied to the disclosed geometric and ray-clearance model.

### L2 — Negative Meniscus (1× Asph)

nd = 1.772501, νd = 49.47. Glass: M-TAF1 (HOYA catalog equivalent; supplier unconfirmed). f = -238.535478 mm.

The second negative meniscus follows the first across an air space and completes the two-meniscus entrance section.
Its object-side surface 3A carries a negative leading fourth-order departure.
Although the isolated power is weaker than L1's, its position in the separated G1A assembly must be retained when evaluating total subgroup power. [1, ¶0034]

Its polynomial is preserved through A12, including the printed zero A12 term.
No simplified sphere or fitted substitute replaces it.

### L3 — Biconcave Negative

nd = 1.496997, νd = 81.61. Glass: FCD1 (HOYA catalog equivalent; supplier unconfirmed). f = -70.646755 mm.

This biconcave member begins the first cemented doublet, D1.
It uses the largest Abbe number among the tabulated coordinates and is paired with the substantially higher-index positive L4.
The pair is part of the negative G1A subgroup, but the pair itself has positive net power. [1, ¶0034]

The dispersion contrast is consistent with an achromatizing pairing in a qualitative sense.
A numerical claim of secondary-spectrum cancellation would require evidence beyond the published nd/νd pair.
Sigma's construction diagram draws this position as SLD glass, so the data file tags L3 as inferred anomalous-dispersion glass; no partial-dispersion value is authored. [3]

### L4 — Biconvex Positive

nd = 1.910822, νd = 35.25. Glass: TAFD35 (HOYA catalog equivalent; supplier unconfirmed). f = +45.390665 mm.

L4 is the biconvex positive member of D1.
Surface 6 is a real glass-to-glass transition, not an invented cement layer or air gap.
The numerical model therefore uses L4's index immediately after that common interface. [1, ¶0091]

Its isolated positive focal length does not imply that it contributes the same power in situ.
The full D1 calculation accounts for both thicknesses and the shared refracting interface.

### L5 — Biconcave Negative

nd = 1.625880, νd = 35.74. Glass: E-F1 (HOYA catalog equivalent; supplier unconfirmed). f = -39.657014 mm.

The biconcave L5 is the first member of the G1B focusing doublet D2.
Its shared surface 9 leads directly into L6, and the complete doublet translates toward the object for close focus.
The patent constrains the front curvature of this subgroup in condition (4). [1, ¶0024, ¶0035]

The high negative subgroup power arises from the complete cemented pair.
Focus displacement is copied from the source spacing tables rather than inferred from production MFD.
The grant figure ends the concave front curve near 15.4 mm at a flat annulus and draws the doublet as a square block out to 18.3 mm.
The renderer joins unequal rims with a straight edge, so the modeled front semi-diameter is carried out to 17.0 mm against 18.3 mm for surfaces 9 and 10; a larger front lets the default off-axis ray fan clip first at cemented surface 9.
The f/1.86 telephoto axial marginal ray reaches about 15.19 mm on surface 8.

### L6 — Positive Meniscus

nd = 2.001000, νd = 29.13. Glass: TAFD55 (HOYA catalog equivalent; supplier unconfirmed). f = +69.707430 mm.

The positive meniscus L6 completes the negative G1B doublet.
Its convex side faces the object; its rear curvature is weak but finite and is not replaced by a plane.
The native index exceeds 2, making a mechanically generated six-digit glass code unsuitable here; the stated catalog-equivalent name avoids that ambiguity. [1, ¶0035, ¶0091]

The small positive isolated element power moderates the negative L5 member while the pair remains negative.
Both elements share the same published focus translation.

### L7 — Biconvex Positive

nd = 1.592824, νd = 68.62. Glass: FCD505 (HOYA catalog equivalent; supplier unconfirmed). f = +73.437479 mm.

L7 is the first positive singlet of G2.
The patent describes the positive entrance lenses of G2 as bending the elevated axial marginal bundle toward the optical axis, limiting the required stop size.
That explanation applies to the group arrangement, rather than proving an isolated aberration contribution for L7. [1, ¶0016–0017, ¶0036]

Its low-dispersion catalog equivalent is repeated elsewhere in the prescription.
The stored index remains the patent's coordinate, not the catalog's rounded nd.
L7, L10, L14 and L15 share this FCD505-class coordinate and are the remaining four SLD positions of Sigma's construction diagram; all four carry the inferred anomalous-dispersion tag. [3]

### L8 — Biconvex Positive (1× Asph)

nd = 1.592014, νd = 67.02. Glass: M-PCD51 (HOYA catalog equivalent; supplier unconfirmed). f = +116.043324 mm.

The second positive singlet of G2 has its asphere on rear surface 14A.
The positive even-order polynomial offsets the negative sag of the spherical base over the modeled aperture.
This profile is particularly sensitive to extending the clear radius beyond the supported domain of the aperture model. [1, ¶0036, ¶0086, ¶0091]

The adopted 18.6 mm rear semi-diameter stays below the calculated rim-slope reversal near 18.6445 mm, while the spherical front surface 13 follows the grant figure at 20.0 mm, level with L7 and D3.
The f/1.86 telephoto axial marginal ray reaches about 18.70 mm on 14A, so its outer 0.10 mm is cut off at this rim.
The source coefficients remain unaltered; the resulting exterior clipping is retained rather than hidden by widening the aperture past the reversal.

### L9 — Biconcave Negative

nd = 1.625880, νd = 35.74. Glass: E-F1 (HOYA catalog equivalent; supplier unconfirmed). f = -47.138726 mm.

The biconcave L9 begins G2's cemented pair D3.
It uses the same native glass coordinate as L5, but the isolated focal length differs because its bounding curvatures and thickness differ.
It should not inherit an aberration role from that shared material label alone. [1, ¶0036, ¶0091]

The patent attributes spherical-aberration and coma control to the group arrangement with a negative/positive cemented pair behind positive singlets.
This source explanation is kept at the pair/group level. [1, ¶0017]

### L10 — Biconvex Positive

nd = 1.592824, νd = 68.62. Glass: FCD505 (HOYA catalog equivalent; supplier unconfirmed). f = +37.119360 mm.

The thick biconvex L10 completes the positive cemented pair D3 immediately ahead of the variable space to the stop.
Its centre thickness is retained as printed, and the edge-thickness test uses both actual surfaces.
No enlargement beyond the geometric edge limit is used to force all displayed rays through the element. [1, ¶0036, ¶0091]

The stop moves with G3 rather than with G2, so the air space behind L10 is one of the principal zoom variables.

### L11 — Biconcave Negative

nd = 1.883000, νd = 40.81. Glass: TAFD30 (HOYA catalog equivalent; supplier unconfirmed). f = -41.267500 mm.

L11 is the first biconcave singlet of G3, separated from the stop by the published fixed spacing.
It supplies negative isolated power in the negative third group.
Its glass coordinate is repeated in the following negative member L12, while the two elements remain air-separated. [1, ¶0038, ¶0091]

G3 and the stop move together toward the image when zooming from wide to tele.
The model retains that structural relationship at every tabulated station.

### L12 — Biconcave Negative

nd = 1.883000, νd = 40.81. Glass: TAFD30 (HOYA catalog equivalent; supplier unconfirmed). f = -33.960655 mm.

L12 is the biconcave first member of the G3 cemented pair D4.
The positive L13 shares surface 22 with it.
The numerical calculation gives this pair weak positive net power, despite paragraph 0038's statement that the pair is negative. [1, ¶0038, ¶0091]

The discrepancy is substantive in the prose but does not require a prescription repair.
The unchanged numerical table also reproduces the published negative power of the whole G3 group.

### L13 — Biconvex Positive

nd = 1.846663, νd = 23.78. Glass: FDS90 (HOYA catalog equivalent; supplier unconfirmed). f = +32.413577 mm.

L13 is the biconvex second member of D4.
Its lower Abbe number and positive isolated power distinguish it from the preceding negative L12.
The combined pair's weak positive result follows from the true glass-to-glass interface, not from simply adding isolated lens powers. [1, ¶0091]

The group-level negative sign remains correct because G3 also contains L11 and its intervening air space.
The analysis therefore does not repeat the source prose's unsupported negative-doublet claim.

### L14 — Biconvex Positive

nd = 1.592824, νd = 68.62. Glass: FCD505 (HOYA catalog equivalent; supplier unconfirmed). f = +51.901894 mm.

L14 is the first positive singlet of G4.
It is followed by the separate positive/negative cemented pair and then the terminal double-aspheric singlet.
The complete fourth group has positive power and moves toward the object during zooming. [1, ¶0039]

Its source glass coordinate is the same as L7, L10 and L15.
This repetition is a material-coordinate observation, not evidence that a particular glass supplier manufactured all four elements.

### L15 — Biconvex Positive

nd = 1.592824, νd = 68.62. Glass: FCD505 (HOYA catalog equivalent; supplier unconfirmed). f = +56.509788 mm.

The biconvex L15 is the first member of the G4 cemented pair D5.
It shares surface 27 with the negative L16, and the complete pair has negative net power.
Its standalone positive focal length must therefore be distinguished from the sign of the pair in which it operates. [1, ¶0039, ¶0091]

The common interface is retained exactly, with the medium after the surface set to L16's glass.

### L16 — Biconcave Negative

nd = 1.728250, νd = 28.32. Glass: E-FD10 (HOYA catalog equivalent; supplier unconfirmed). f = -33.256039 mm.

The biconcave L16 completes D5 and faces the final positive lens across the narrow 28/29 air gap.
Its rear radius is one of the quantities in condition (6), which governs the shape of this air lens.
The patent associates that curvature relationship with astigmatism control, rather than attributing the result to L16 alone. [1, ¶0026–0028]

The modeled aperture of surface 28 is held at 13.9 mm by the actual sag intrusion into the printed gap; the two surfaces would meet at 14.26 mm.
The gap is not increased to manufacture clearance, so L16's rear face draws as a chamfer where the grant figure has a flat annulus.

### L17 — Biconvex Positive (2× Asph)

nd = 1.592014, νd = 67.02. Glass: M-PCD51 (HOYA catalog equivalent; supplier unconfirmed). f = +52.899226 mm.

The terminal positive singlet has aspheres on both surfaces 29A and 30A.
It closes the positive G4 group before the final physical air distance to the image.
The source lists no rear cover plate or filter stack after this element. [1, ¶0039, ¶0091]

Both polynomial profiles are retained through A12.
Both modeled radii follow the grant figure at 15.3 mm, just inside the 15.325 mm slope reversal of surface 29A.
The band shared with surface 28 still ends at 13.9 mm, so rays above that height are stopped at L16's rear rim before they reach L17.

The net cemented-pair calculations below use the original media at every shared boundary.
These values are separate from the isolated element focal lengths above.

| Pair | Elements | Surface span | Net focal length (mm) |
|---|---|---|---:|
| D1 | L3/L4 | 5–7 | +122.887475 |
| D2 | L5/L6 | 8–10 | -92.325147 |
| D3 | L9/L10 | 15–17 | +134.067377 |
| D4 | L12/L13 | 21–23 | +348.638990 |
| D5 | L15/L16 | 26–28 | -86.006961 |

## Glass Identification and Selection

Ten distinct native nd/νd coordinates occur in the prescription.
The primary HOYA catalog dated 2026-07-07, including obsolete glasses, was scanned rather than selecting supplier names from the Sigma brand.
The relevant catalog coefficients reproduce their catalog coordinates within the documented tolerances and give small residuals to the source coordinates. The table below uses coefficient-evaluated indices at C=656.2725 nm, d=587.5618 nm and F=486.1327 nm, rather than nominal rounded AGF coordinates. The source itself prints d=587.56 nm. [4]

The chosen names are explicit catalog equivalents and spectral proxies.
They do not establish the actual manufacturer, melt, molding process, or exact production dispersion curve.
Primary OHARA, SCHOTT, HIKARI, CDGM and Sumita catalogs were not independently scanned in this comparison.
The current optical runtime resolves all 17 named elements to the declared HOYA equivalents, but that is a separate software-resolution observation.

| Patent nd | Patent νd | Selected catalog equivalent | Catalog−patent Δnd | Catalog−patent Δνd | Elements |
|---:|---:|---|---:|---:|---|
| 1.496997 | 81.61 | FCD1 (HOYA) | +0.00000023 | -0.00162 | L3 |
| 1.592014 | 67.02 | M-PCD51 (HOYA) | -0.00000025 | +0.00270 | L8, L17 |
| 1.592824 | 68.62 | FCD505 (HOYA) | +0.00000028 | +0.00438 | L7, L10, L14, L15 |
| 1.625880 | 35.74 | E-F1 (HOYA) | -0.00000016 | +0.00059 | L5, L9 |
| 1.728250 | 28.32 | E-FD10 (HOYA) | -0.00000022 | +0.00049 | L16 |
| 1.772501 | 49.47 | M-TAF1 (HOYA) | +0.00000149 | -0.00538 | L1, L2 |
| 1.846663 | 23.78 | FDS90 (HOYA) | +0.00000024 | +0.00482 | L13 |
| 1.883000 | 40.81 | TAFD30 (HOYA) | -0.00000018 | -0.00460 | L11, L12 |
| 1.910822 | 35.25 | TAFD35 (HOYA) | +0.00000042 | +0.00001 | L4 |
| 2.001000 | 29.13 | TAFD55 (HOYA) | +0.00000299 | +0.00471 | L6 |

The manufacturer describes SLD material and molded-glass aspheres in the product, but the patent does not explicitly assign an SLD brand to individual numerical rows. [3]
Sigma's construction diagram marks five SLD elements at the positions of L3, L7, L10, L14 and L15.
Those are exactly the elements whose coordinates match FCD1 (the S-FPL51 class) and FCD505, so the data file tags these five as inferred anomalous-dispersion glass for the diagram.
The four aspherical elements, L1, L2, L8 and L17, match the molding glasses M-TAF1 and M-PCD51 and are left untagged.
The tag is an inference from nd/νd and the manufacturer's diagram; it adds no spectral data.
The native coordinates are retained without conversion: d=587.56 nm is stated in paragraph 0083.
There is no patent-specific normal-line deviation to convert, because no PgF or ΔPgF table is supplied for this example.
No catalog C/F/g indices are entered as though they had been measured for the patent glasses.

The mixed positive/negative powers and dispersion contrasts permit a qualitative discussion of achromatizing structure.
They do not, by themselves, demonstrate apochromatic performance or quantify secondary-spectrum correction.
No such performance claim is made.

## Focus Mechanism

The model's focus disposition is PUBLISHED.
The negative G1B cemented doublet L5/L6 moves objectward for close focus, with the source's d7 and d10 values preserved.
The three source zoom stations each carry infinity and near-object rows.
The near object plane is 111.5000 mm before the first surface vertex, which is not the camera's object-to-image distance. [1, ¶0018, ¶0035, ¶0091]

| Source zoom station | d7 infinity (mm) | d7 close (mm) | d10 infinity (mm) | d10 close (mm) | Close object-to-image distance (mm) | Magnification at printed image plane |
|---|---:|---:|---:|---:|---:|---:|
| 18.60 mm | 12.3772 | 4.6883 | 16.9843 | 24.6732 | 279.9999 | -0.132024 |
| 26.02 mm | 12.3772 | 4.6895 | 6.7136 | 14.3989 | 280.0001 | -0.184716 |
| 33.78 mm | 12.3772 | 4.6900 | 1.5000 | 9.1871 | 280.0012 | -0.239757 |

The magnifications above use the printed image plane. Best-conjugate magnifications differ slightly because the rounded source prescription leaves small residual defocus. The tiny printed changes in BF and total gap sums are retained literally.
They are not silently “repaired” into an exactly fixed total track.
The implementation's closeFocusM and zoomCloseFocusM use the converted source object-to-image distances; production MFD is not substituted for those rows. The actual endpoint-distance selector returns these values, and the default ray path uses the runtime's real-ray conjugate correction. These display-ray controls are separate from finite-distance MTF certification. The finiteConjugates metadata certifies only the three published close endpoints, using objectDistanceMm=111.5 and the explicit first-surface reference. The current selector is checked at those endpoints and refuses uncertified intermediate states. This metadata does not assert a recovered focus law or computed MTF performance; the source endpoint spacing and paraxial conjugate checks remain unchanged.

G1B travels approximately 7.69 mm toward the object between the published focus endpoints.
No internal focus law is reconstructed from the manufacturer's MFD or a static cross-section.
Linear interpolation of the tabulated gaps is only an explicit display approximation between those states.

The production lens uses HSM autofocus. [3]
That mechanical fact does not identify the physical cam or motor motion responsible for each interpolated optical state.

## Aspherical Surfaces

Surfaces 1A, 3A, 14A, 29A and 30A correspond to four physical elements: L1, L2, L8, L17.
The source uses the following conic-plus-even-polynomial sag equation, with radial height h and all lengths in millimetres. [1, ¶0086]

z(h) = (h²/R) / [1 + √(1 − (1+K)(h/R)²)] + A4h⁴ + A6h⁶ + A8h⁸ + A10h¹⁰ + A12h¹².

Every printed K is 0.0000, so no conic-parameter conversion is required.
A_p has units mm^(1−p); K is dimensionless.
A14 is zero in the application schema because the source series ends at A12.
No odd-order terms, fitted replacements, geometric scaling or hidden coefficient changes are introduced.

| Source surface | K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|
| 1A | 0.0000 | 1.03451E-05 | -1.27202E-08 | 2.05215E-11 | -1.96261E-14 | 1.10511E-17 |
| 3A | 0.0000 | -6.85012E-06 | 4.35386E-09 | 1.44463E-12 | -2.05685E-14 | 0.00000E+00 |
| 14A | 0.0000 | 3.14234E-06 | 5.54133E-10 | 1.95897E-13 | -2.18362E-16 | 2.19082E-19 |
| 29A | 0.0000 | -3.44220E-06 | -1.30154E-08 | -2.18115E-11 | 2.94095E-13 | -2.27675E-15 |
| 30A | 0.0000 | 1.05505E-06 | -1.49903E-08 | -5.09164E-13 | 1.94265E-13 | -1.99038E-15 |

The positive leading departure of 1A strengthens its positive sag away from the axis.
The negative leading term of 3A reduces its positive spherical-base sag.
On 14A the positive polynomial opposes the negative spherical-base sag, producing a nearly flat edge within the conservative aperture cap.
On 29A the polynomial decreases the positive-base sag, while on 30A the complete polynomial makes the negative sag more negative at the adopted rear radius.
These are descriptions of calculated profiles, not isolated aberration-correction claims.

| Surface | Modeled semi-diameter (mm) | Polynomial departure from conic base (mm) | Absolute rim angle (°) |
|---|---:|---:|---:|
| 1A | 26.3 | +3.540241041 | 39.187355 |
| 3A | 21.1 | -1.276580394 | 12.289213 |
| 14A | 18.6 | +0.401146308 | 0.026868 |
| 29A | 15.3 | -0.588989349 | 0.225609 |
| 30A | 15.3 | -0.326966240 | 23.326900 |

These departures are evaluated at explicitly modeled apertures, not published effective diameters.
The large front-surface departure is retained as a result of the exact source polynomial, rather than reduced by replacing it with a lower-order fit.
The supporting Figure 1 sets the modeled radii of 1A, 3A, 29A and 30A, but it does not supply manufacturing tolerances or establish the usable aspheric radius independently.
The 29A rim is almost perpendicular to the axis because 15.3 mm lies just inside that surface's slope reversal at 15.325 mm.

## Conditional Expressions

The eight source inequalities are evaluated from the unchanged numerical prescription.
The group focal lengths use complete functional groups in air; fw and ft use the computed infinity endpoint EFLs.
R1bF is surface 8, R2F is surface 11, and the R4A/R4B pair is surfaces 28/29.
The source ties condition (6) to the narrowing air lens between the negative G4 member and the final positive member. [1, ¶0019–0031, ¶0098]

| Condition | Source bounds | Calculated value | Printed value |
|---|---|---:|---:|
| (1) | 2.40 < abs(f1a)/fw < 5.00 | 3.048949 | 3.05 |
| (2) | 4.00 < abs(f1b)/fw < 13.00 | 4.963313 | 4.96 |
| (3) | 0.55 < f2/ft < 2.20 | 1.110233 | 1.11 |
| (4) | 1.80 < abs(R1bF)/fw < 9.00 | 2.240430 | 2.24 |
| (5) | 1.50 < R2F/ft < 4.50 | 2.467020 | 2.47 |
| (6) | 0.00 < f4*(1/R4A-1/R4B) < 0.60 | 0.069026 | 0.07 |
| (7) | 0.50 < abs(f3)/ft < 2.50 | 1.479138 | 1.48 |
| (8) | 0.60 < f4/ft < 1.80 | 1.164552 | 1.16 |

All calculated values lie within their source bounds and reproduce the rounded printed values.
The table does not erase a separate prose discrepancy: paragraph 0038 describes the G3 cemented pair as negative, whereas the numerical surfaces 21–23 yield positive net power.
The table-derived positive pair and the source-reproduced negative G3 whole-group power are both reported above.
No source number is altered to make the prose agree.

## Model Verification and Limits

Sequential paraxial propagation and an independent ABCD implementation reproduce the printed infinity EFLs, BFDs, group powers and all finite-conjugate image distances within source-precision-aware tolerances.
The exact final data supplies the implemented-model calculation branch.
The source and implemented branches remain separately identifiable; a marketing specification is never reused as a computed answer.

The physical diaphragm radius and surface clear apertures are unpublished.
Surface semi-diameters are estimated from the grant's Figure 1, measured with a curvature-calibrated vertical scale because the drawing is about 1.093 times taller than its axial scale, and then limited by traced clearance and the geometry checks below.
At the three infinity stations, the current runtime's from-nominal-fno aperture model infers radii by tracing each nominal f/1.86 entrance-pupil marginal ray to the stop.
This is calibration to a source f-number, not independent evidence of the production diaphragm diameter.

| Infinity zoom station | Inferred exact-marginal stop radius (mm) |
|---|---:|
| 18.60 mm | 11.557047254 |
| 26.02 mm | 11.942050844 |
| 33.78 mm | 12.613127576 |

The iris radius is interpolated between source zoom stations and retained when focus changes at a given zoom setting.
This inferred schedule is not a published cam or iris-actuation law.
Current-state pupil sensitivity, rather than the cached nominal entrance-pupil radius, is used for the native default-ray tests.

All modeled apertures satisfy the unchanged rim-slope, edge-thickness, real-conic-domain, shared-band gap-intrusion and surface-slope-turnover checks over the stated finite sampling.
Production element-render diagnostics give zero hidden material trim on the 25-state focus/zoom geometry grid.
A separate 25-state by 3-aperture native check traces 825 actual default on-axis/off-axis UI rays.
Sixty-two first clip events occur at the diaphragm or exterior element/air boundaries (forty at the diaphragm, six at surface 8, five at surface 14A, four at surface 28, three at surface 24, two at surface 11 and one each at surfaces 7 and 10); none occurs first at a cemented interface or as an intersection failure.
The later ghost continuation of an already-clipped ray is not counted as a newly transmitted physical path.

The modeled source corner chief rays reach image semi-height 14.2 mm.
The f/1.86 axial marginal ray clears every modeled rim at all three infinity stations except surface 14A at the telephoto station, where the slope-reversal cap leaves it 0.10 mm short.
Chief-ray coverage and the sampled default fan do not establish full-pupil corner transmission, absence of mechanical vignetting, or performance throughout a continuous zoom/focus domain.
Near-focus outer-ray clipping is retained visibly, including clipping at the stop; it is not concealed by changing the default fan.

No sensor cover stack, optional filter, manufacturing tolerance, coating model, motor geometry or mechanical barrel has been invented.
All source-listed optical surfaces and focus/zoom endpoint states are preserved.

## Sources

1. Japan Patent Office, JP 2014-89365 A, Optical System, published 2014-05-15. Original supplied PDF with PAJ wrapper: pp1–2 for identity; p10 / printed p9, ¶0034–0039 for construction; p14 / printed p13, ¶0083–0090 for conventions and equation; pp15–16 / printed pp14–15, ¶0091 for Numerical Example 1; p27 / printed p26, ¶0098 for condition values. [Original publication](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=JP2014089365A).
2. Japan Patent Office, JP 5952167 B2, published 2016-07-13, original supplied PDF p26, Figure 1. Supporting illustration and basis of the modeled semi-diameter estimates only; all prescription authority remains source 1. Original JP5952167B2.pdf is included in the dossier.
3. Sigma Corporation, [18–35mm F1.8 DC HSM | Art product specifications and features](https://www.sigma-global.com/en/lenses/a013_18_35_18/?tab=specification), read 2026-10-04; specification table and lens-construction diagram re-read 2026-10-06. Production facts, special-element positions and mechanical reference planes only.
4. HOYA, [Optical glass data downloads](https://www.hoya-opticalworld.com/english/datadownload/), catalog 20260707 including obsolete glasses, [original AGF](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf). Relevant catalog coefficients, coordinates and residuals are preserved in the evidence and numerical companions.

