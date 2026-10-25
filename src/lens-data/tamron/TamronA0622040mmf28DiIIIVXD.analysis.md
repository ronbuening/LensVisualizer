## Patent Reference and Design Identification

**Patent:** JP 2022-131391 A  
**Application Number:** JP 2021-030318  
**Filed:** 2021-02-26  
**Published:** 2022-09-07  
**Inventor:** Shingo Abe  
**Applicant:** Tamron Co., Ltd.  
**Title:** Zoom Lens and Image Capturing Device  

The selected prescription is correlated with the TAMRON 20-40mm f/2.8 Di III VXD (Model A062), a Sony
E-mount full-frame zoom. The numerical source is the Japanese A publication, not a substituted grant or
translated family prescription. Example 5 is described in ¶0120–0132; its optical section is Figure 17.
Source citations below use the supplied PDF page number, which is one greater than the printed Japanese
page because the file begins with a PAJ wrapper.

The correlation rests on several convergent features:

1. Example 5 contains 12 lens elements in 11 air-separated components, matching Tamron's published construction count.
2. Its negative-leading five-group architecture contains one cemented pair, L7–L8, and aspherical elements L3, L6 and L12. The numerical table has five aspherical surfaces, including two double-sided elements.
3. Four elements have low-index, high-Abbe coordinates near nd = 1.497 and νd ≈ 81.6, consistent in count with the four LD elements described in Tamron's product material. Catalog coordinates do not establish a particular supplier or melt.
4. The published 20.603–38.803 mm range and f/2.91 are close to, but distinct from, the marketed 20–40 mm and f/2.8.
5. The September 2022 patent publication precedes Tamron's October 27, 2022 product release. The source's moving negative focus group is compatible with an internally focused product, although the production VXD drive does not itself identify a patent embodiment.

These observations support a construction correlation; they do not confirm that the manufactured lens
uses the unchanged numerical prescription. The commercial close-focus limits are 0.17 m at wide and 0.29
m at tele. The modeled near spacings instead come from the patent’s nominal 300 mm table. No
commercial-MFD extension is reconstructed. [Tamron
specifications](https://www.tamron.com/global/consumer/lenses/a062/spec.html) and [product
overview](https://www.tamron.com/global/consumer/lenses/a062/) supply the production identity and
marketed specifications.

The continuous controls illustrate interpolated construction movement. They are not an accurately focused
continuous optical solution. The source stations and endpoint spacings are retained with their original
Gaussian-focus limitations; intermediate cam/iris positions and the infinity EFL readout are estimates.
Numerical claims about intermediate configurations below use actual current-gap calculations.

## Optical Architecture

Example 5 has a negative–positive–positive–negative–positive functional-group sequence. The eleven
air-separated components are distinct from these five moving groups. G1 contains L1–L3; G2 contains
L4–L5; G3 begins with the stop and contains L6–L8; G4 is L9 alone; and G5 contains L10–L12. The only
cemented junction is source surface 15 between L7 and L8. The aperture stop is source surface 11,
immediately before L6. [Patent, ¶0120–0125, PDF pp. 22–23; Figure 17, PDF p. 44.]

| Group | Source surfaces | Elements | Published focal length (mm) | Calculated isolated-group EFL (mm) |
|---|---|---|---:|---:|
| G1 | 1–6 | L1–L3 | -31.546 | -31.545870 |
| G2 | 7–10 | L4–L5 | 350.820 | 350.786679 |
| G3 | 11–16 | STO, L6–L8 | 23.939 | 23.938659 |
| G4 | 17–18 | L9 | -38.221 | -38.221179 |
| G5 | 19–24 | L10–L12 | 84.521 | 84.517802 |

G1 supplies the negative front-group power. G2 is a weak positive group because its positive L4 and
negative L5 largely oppose one another. G3 is the strongest positive functional group in this
decomposition. The single negative L9 supplies the published focus motion, while G5 is a weaker positive
rear group containing one positive and two negative elements. These are paraxial power statements, not
measurements of each group’s isolated aberration contribution.

From wide to tele, measured relative to the retained image plane, G1 moves imageward by 6.979 mm. G2
moves objectward by 4.261 mm, G3 and G5 by 14.958 mm, and G4 by 14.479 mm. The equal G3/G5 displacement
agrees with the source’s common-trajectory description. The gaps around G4 are non-monotonic across the
three stations, but this does not mean G4 reverses its absolute image-referenced zoom motion. [¶0126.]

| Infinity station | Source EFL (mm) | Calculated EFL (mm) | Front vertex to physical image (mm) | Physical image distance from surface 24 (mm) |
|---|---:|---:|---:|---:|
| Wide | 20.603 | 20.601562 | 109.976 | 16.501 |
| Middle | 28.305 | 28.303643 | 106.078 | 24.382 |
| Tele | 38.803 | 38.800687 | 102.997 | 31.459 |

The tabulated physical image distances include the source cover glass. They are not Gaussian back-focus
estimates. The first-vertex optical track is also not directly comparable with Tamron’s 86.5 mm
mechanical front-tip-to-mount length. No uniform scaling has been applied to make source quantities match
the marketed lens.

Source surfaces 25–26 describe a 2.500 mm camera-side cover plate with nd = 1.51680 and νd = 64.17,
followed by 1.000 mm of physical air. It remains optically traced through rearPlates and is excluded from
the twelve drawn lens elements. Source surface 24 retains the physical gap to this plate. Paragraph 0071
identifies CG as cover glass before the image plane; there is no basis to treat it as an optional
lens-holder filter or silently fold its thickness into air.

## Element-by-Element Analysis

The focal lengths in this section are calculated for each isolated element in air from the final file,
including its centre thickness. A cemented element’s standalone value is a comparison quantity, not its
in-situ contribution. The glass strings are the same cautious coordinate classes used by the model; none
asserts a physical supplier.

### L1: negative front meniscus

nd = 1.72916, νd = 54.67. Glass: Lanthanum crown class (supplier unconfirmed). f = -49.899 mm.

L1 opens G1 with negative power. Its two positive radii place the stronger concave-to-image curvature on
the rear side. The relatively high index distinguishes it from the low-index second element. Its position
and sign establish part of the front negative group; an individual distortion or coma correction is not
demonstrated by that fact alone.

Source surfaces 1–2; ¶0121.

### L2: low-dispersion negative meniscus

nd = 1.49700, νd = 81.61. Glass: Low-dispersion crown class (supplier unconfirmed). f = -52.320 mm.

L2 continues the negative front-group power with substantially higher Abbe number than L1. The positive
L3 that follows moderates the group’s combined power. The high-Abbe coordinate agrees with a
low-dispersion crown family, but neither an anomalous partial dispersion nor a particular commercial melt
is supplied by the patent.

Source surfaces 3–4; ¶0121.

### L3: positive meniscus with one asphere

nd = 1.58144, νd = 40.75. Glass: Light-flint coordinate class; single source medium (supplier unconfirmed). f = +126.483 mm.

L3 is the positive member of G1 and carries the group’s aspherical surface 5A. The source gives one 3.600
mm medium between surfaces 5 and 6. It supplies no additional glass–resin interface, layer thickness or
second index. Therefore a separate hybrid layer cannot be reconstructed from this numerical table. The
model retains the single published medium.

Source surfaces 5–6; ¶0128–0129.

### L4: positive meniscus in G2

nd = 1.85025, νd = 30.05. Glass: Dense barium flint coordinate class (supplier unconfirmed). f = +66.029 mm.

L4 is the positive member of the near-cancelling G2 pair. Its rear surface 8 faces the front of L5 across
the source 2.300 mm air gap. This exterior interface is the aperture-clearance constraint discussed
below; it is unrelated to the L7–L8 cemented junction. The 10.16 mm modeled rear semi-diameter is an
inference, not a published clear aperture.

Source surfaces 7–8; ¶0122, ¶0128.

### L5: negative meniscus in G2

nd = 1.65160, νd = 58.55. Glass: Lanthanum crown class (supplier unconfirmed). f = -76.965 mm.

L5 opposes L4 and leaves their separated two-element group weakly positive. Both of its radii are
negative, consistent with the opposite-facing meniscus described in the patent. The refractive-index/Abbe
pair is close to lanthanum-crown catalog coordinates. That comparison does not by itself explain the
residual aberrations of G2.

Source surfaces 9–10; ¶0122.

### L6: biconvex positive element with two aspheres

nd = 1.49710, νd = 81.56. Glass: Low-dispersion molded-crown coordinate class (supplier unconfirmed). f = +36.431 mm.

L6 is the first element after the stop and the first positive element of G3. It has aspheres on both 12A
and 13A. Its high-Abbe medium and substantial positive standalone power distinguish it from the following
negative cemented member. Both exact polynomial surfaces are retained, rather than approximated by an
even-order refit or a single aspherical designation.

Source surfaces 12–13; ¶0123, ¶0129.

### L7: negative meniscus member of D1

nd = 1.69895, νd = 30.05. Glass: Dense flint class (supplier unconfirmed). f = -45.666 mm.

L7 is the negative meniscus in the sole cemented pair. Surface 15 is the transition directly from L7
glass to L8 glass; there is no intervening air or invented cement layer. The low Abbe number contrasts
with L8’s high-Abbe positive medium, which is consistent with chromatic balancing as a design
possibility. The available data do not establish the pair’s secondary-spectrum performance.

Source surfaces 14–15; ¶0123.

### L8: biconvex positive member of D1

nd = 1.49700, νd = 81.61. Glass: Low-dispersion crown class (supplier unconfirmed). f = +26.068 mm.

L8 is biconvex and positive as an isolated element. It completes the cemented pair and G3. In the
assembled pair the shared surface refracts between the two glasses, so adding the two standalone powers
is not a valid substitute for tracing the actual junction.

The separately traced L7–L8 cemented component has EFL 54.459063 mm in air. This net component result
remains distinct from G3’s focal length, because G3 also contains L6 and the intervening air space.

Source surfaces 15–16; ¶0123.

### L9: biconcave negative internal-focus element

nd = 1.48749, νd = 70.44. Glass: Fluor-crown coordinate class (supplier unconfirmed). f = -38.221 mm.

L9 alone forms G4, the source’s negative group N. Its negative front and positive rear radii form a
biconcave element. It moves imageward for near focus while the other groups retain their zoom-dependent
positions. Its Abbe number also supplies condition (4), which requires νdn greater than 50.

Source surfaces 17–18; ¶0124, ¶0126, claim 4.

### L10: biconvex positive member of G5

nd = 1.49700, νd = 81.61. Glass: Low-dispersion crown class (supplier unconfirmed). f = +28.618 mm.

L10 begins the positive rear group with a biconvex low-dispersion element. The two negative elements
behind it leave G5 with a much longer positive focal length than L10 alone. This power distribution
describes the group architecture; it is not a proof that L10 alone supplies a particular off-axis
correction.

Source surfaces 19–20; ¶0125.

### L11: biconcave negative element in G5

nd = 1.48749, νd = 70.44. Glass: Fluor-crown coordinate class (supplier unconfirmed). f = -63.054 mm.

L11 provides negative power behind L10. Its coordinate pair equals that of the moving L9, but it belongs
to G5 and does not share L9’s independent focus displacement. The equality of glass coordinates therefore
must not be confused with equality of kinematic role.

Source surfaces 21–22; ¶0125.

### L12: double-sided aspherical rear meniscus

nd = 1.69350, νd = 53.20. Glass: Lanthanum crown molded-glass coordinate class (supplier unconfirmed). f = -78.564 mm.

L12 is the final negative lens element, with exact aspheres on 23A and 24A. It follows L11 within the
net-positive G5. The rear air space varies with zoom and terminates at the camera-side plate, not at an
omitted synthetic image distance. The polynomial departures are retained at the stated inferred apertures
without treating them as a manufacturing prescription.

Source surfaces 23–24; ¶0125, ¶0128–0129.

## Glass Identification and Spectral Limits

The patent specifies d-line nd/νd coordinates at 587.6 nm, not glass trade names. The coordinate audit
screened a primary HOYA catalog, current OHARA type data and relevant SCHOTT data. The independent review also compared primary CDGM H-ZLaF76 data and the exact OHARA S-TIL25 coordinates. The following entries
are comparison candidates, not adopted supplier identities or additional source measurements. Full
relevant catalog rows and residuals are preserved in the evidence record.

| Patent nd / νd | Used by | Coordinate comparison | Interpretation |
|---|---|---|---|
| 1.72916 / 54.67 | L1 | HOYA TAC8: 1.72916 / 54.67 | Exact listed pair; supplier unconfirmed |
| 1.49700 / 81.61 | L2, L8, L10 | HOYA FCD1: 1.49700 / 81.61 | Exact listed low-dispersion pair |
| 1.58144 / 40.75 | L3 | OHARA S-TIL25: 1.58144 / 40.75; HOYA E-FL5: 1.58144 / 40.89; SCHOTT LF5: 1.58144 / 40.85 | Exact OHARA listed pair; supplier and hybrid composition remain unconfirmed |
| 1.85025 / 30.05 | L4 | OHARA S-NBH57: 1.85025 / 30.05 | Exact listed pair; full family prefix retained |
| 1.65160 / 58.55 | L5 | OHARA S-LAL7Q: 1.65160 / 58.54 | Small Abbe difference retained |
| 1.49710 / 81.56 | L6 | HOYA FCD1B and M-FCD1: 1.49710 / 81.56 | Multiple listed equivalents; no unique identification |
| 1.69895 / 30.05 | L7 | HOYA E-FD15 and E-FD15L: 1.69895 / 30.05 | Distinct catalog entries share the pair |
| 1.48749 / 70.44 | L9, L11 | HOYA FC5: 1.48749 / 70.44 | Exact listed fluor-crown coordinate pair |
| 1.69350 / 53.20 | L12 | HOYA M-LAC130, MP-LAC130 and MC-LAC130 | Listed coordinate matches, not interchangeable identity claims |
| 1.51680 / 64.17 | CG | HOYA BSC7: 1.51680 / 64.20 | Source Abbe value remains 64.17 |

No catalog name is used to force a spectral match in the application. All twelve class-only lens
annotations remain unresolved by the native name resolver, so dispersion quality is Abbe-only. The
selected example does not publish lens-specific nC, nF, ng or ΔPgF. Candidate catalog coefficients can
reproduce a catalog’s own coordinates without proving the actual lens glass. No apochromatic,
anomalous-dispersion or measured chromatic-performance claim follows.

The surface-by-surface paraxial Petzval sum is +0.002293829 mm⁻¹ for the source prescription. It is
unchanged by the air-gap movements because the refracting curvatures and media stay fixed. This sum is
not an exact off-axis image-surface or astigmatism prediction.

## Focus and Zoom Mechanisms

The modeled focus status is PUBLISHED: all three infinity and nominal 300 mm near-spacing states are
preserved. Only G4 moves independently for focus. G1, G2, G3 and G5 keep the positions set by the zoom
station. The product’s VXD linear motor is a manufacturer mechanism fact; the source table supplies the
numerical internal movement. [¶0126, ¶0130–0131.]

| Source station | d16 at infinity (mm) | d16 near (mm) | d18 at infinity (mm) | d18 near (mm) | G4 imageward change from d16 (mm) |
|---|---:|---:|---:|---:|---:|
| Wide | 2.959 | 4.050 | 6.456 | 5.365 | 1.091 |
| Middle | 2.195 | 3.814 | 7.219 | 5.600 | 1.619 |
| Tele | 3.438 | 6.063 | 5.977 | 3.351 | 2.625 |

The d16 increase is balanced by the d18 decrease, except for a retained −0.001 mm sum difference in the
tele near table. That difference is compatible with the source’s 0.001 mm tabulation precision and is not
silently repaired. The source’s nominal shooting distance does not explicitly define its reference plane;
exact-ray comparisons favor object-to-image interpretation, but that inference is not a precise
finiteConjugates certificate.

### Source endpoint focus and the physical image plane

At the source infinity stations, the Gaussian focus lies +0.090698, +0.048534 and +0.007336 mm beyond the
authored physical image plane. These discrepancies are retained. Marginal-minus-paraxial longitudinal
shifts calculated with the exact aspheres agree with the approximate d-line spherical-aberration curves
in Figures 18–20. A physical image plane near the wider-aperture focus need not coincide with Gaussian
focus; the original rear gaps are not refocused to make that comparison vanish.

At the published near spacings, Gaussian object-to-image conjugates are 313.809555, 306.637905 and
306.045327 mm, rather than exactly 300 mm. The corresponding source-state EFLs are 19.933743, 26.919807
and 35.654801 mm. These numbers describe the retained source model and its reference-plane limitation,
not a verified production focus-breathing curve.

### Intermediate control positions

All intervening gap and iris states are piecewise-linear application interpolation. They are useful for
showing estimated lens-group motion, but the interpolated prescription is not automatically focused at
the nominal control distance. Inverse-distance labels at intermediate focus are also estimates.
Continuous motion and accurate continuous optical readout are separate questions.

| Zoom control | Focus control | Nominal object-to-image label | Calculated Gaussian conjugate (mm) | Gaussian image-plane shift (mm) |
|---|---|---|---:|---:|
| 0.25 | 0.0 | Infinity | 1277.766 | -0.483375 |
| 0.25 | 0.5 | 600 mm | 394.971 | -0.755914 |
| 0.25 | 1.0 | 300 mm | 266.151 | -0.528219 |
| 0.75 | 0.0 | Infinity | 1574.158 | -0.724515 |
| 0.75 | 0.5 | 600 mm | 409.221 | -1.265503 |
| 0.75 | 1.0 | 300 mm | 270.991 | -0.839663 |

The native infinity EFL helper interpolates station values instead of recomputing Gaussian EFL from the
current gaps. On the sampled grid its largest discrepancy is 0.943578481 mm at zoom 0.775: the displayed
helper value is 34.077017071 mm while actual current-gap EFL is 33.133438590 mm. Quantitative statements
about an intermediate state must therefore use the latter calculation, not treat the interpolated label
as an exact optical result. No new cam law or shared-engine correction is part of this prescription.

## Aspherical Surfaces

The patent uses z(h) = (h²/R) / [1 + √(1 − (1 + k)(h/R)²)] + A4h⁴ + A6h⁶ + A8h⁸ + A10h¹⁰ + A12h¹². Here h
and z are in millimetres and Ap has units mm^(1−p). The stored convention is K = k directly. Every
selected conic is zero. A14 = 0 is required schema padding, not an additional printed coefficient; absent
higher and odd orders are not invented. [¶0074, PDF p. 15; ¶0129, PDF p. 24.]

| Surface / element | K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|
| 5A / L3 | 0 | 1.50123E-05 | 1.01378E-08 | 1.54171E-10 | -5.82881E-13 | 1.29706E-15 |
| 12A / L6 | 0 | -1.35562E-05 | 1.42835E-08 | 2.01889E-10 | -8.41463E-13 | 5.67008E-15 |
| 13A / L6 | 0 | 2.03313E-05 | 2.56042E-08 | 7.97875E-12 | 6.50224E-13 | 2.72603E-15 |
| 23A / L12 | 0 | -1.04390E-04 | 3.52369E-07 | 8.34182E-12 | -5.65180E-12 | 4.03488E-15 |
| 24A / L12 | 0 | -7.41185E-05 | 4.30076E-07 | -4.27344E-10 | -3.46987E-12 | 8.46178E-15 |

The following departures are computed at the final modeled semi-diameters, not at source-published clear apertures. They are polynomial sag relative to the same spherical base, not measured manufacturing departures.

| Surface | Modeled semi-diameter (mm) | Polynomial departure (mm) | Actual rim-slope magnitude (°) |
|---|---:|---:|---:|
| 5A | 15.00 | +1.102767 | 31.460906 |
| 12A | 12.70 | -0.148121 | 26.219339 |
| 13A | 12.70 | +0.760706 | 0.690543 |
| 23A | 12.00 | -1.422845 | 35.589535 |
| 24A | 14.50 | -0.808957 | 7.619463 |

Surface 5A adds positive sag to L3’s positive-radius base. Surface 12A has a negative net departure at
its modeled rim, while 13A has a positive departure relative to its negative-radius base. Both
rear-element surfaces 23A and 24A have negative net rim departures. Mixed high-order terms make the sign
of A4 alone insufficient to determine the rim slope or an aberration contribution. These shape
observations do not assign a separate spherical/coma/distortion budget to individual surfaces.

The two double-sided aspherical elements are consistent with the two glass-molded elements described for
the commercial product, but the patent table is an optical prescription, not a manufacturing-process
specification. Tamron’s [September 29, 2022 launch announcement](https://www.tamron.com/global/consumer/news/detail/20220929001003.html) explicitly lists two GM elements and one hybrid aspherical element. In particular, no unlisted composite interface is introduced at L3.

## Conditional Expressions

The seven expressions in claims 1–7 and ¶0147 are evaluated from the selected unscaled prescription. Rnf
and Rnr are the outer radii of negative focus group N = G4; fn is its isolated focal length; ft is system
tele EFL; βnt and βrt are the tele magnifications of G4 and its following groups. XF and XR are
image-referenced wide-to-tele movements of G1 and Pa = G3. Pb = G5 supplies the final magnification
ratio. For condition (6), the calculation interprets BFw using the source rear spacing in air-equivalent
form: d24 + 2.500/1.51680 + 1.000 mm. That interpretation reproduces the printed 1.38; it is distinct
from physical rear distance and does not assert coincidence of Gaussian focus with the image plane.

| Condition | Source inequality | Printed value | Recomputed value |
|---|---|---:|---:|
| (1) (Rnf + Rnr)/(Rnf − Rnr) | 0.80 < ratio < 1.40 | 0.83 | 0.834415 |
| (2) fn/ft | −1.20 < ratio < −0.50 | −0.99 | −0.985065 |
| (3) (1 − βnt²) βrt² | −5.40 < value < −2.40 | −2.76 | −2.758827 |
| (4) νdn | νdn > 50 | 70.44 | 70.440000 |
| (5) XF/XR | −1.60 ≤ ratio ≤ −0.30 | −0.47 | −0.466573 |
| (6) Ymax/BFw | 0.70 < ratio < 1.60 | 1.38 | 1.382370 |
| (7) βprt/βprw | 0.50 < ratio < 1.70 | 0.68 | 0.676679 |

All seven inequalities are satisfied by the calculated central prescription. Reproducing them constrains
shape, power, focus-group dispersion and group relationships; it does not establish production identity,
precise finite conjugacy or full-field performance.

## Aperture, Clearance and Field Limits

The patent does not publish numerical clear semi-diameters or physical iris radii. Apertures are inferred
from optical sections and exact-ray/geometry checks. The source f/2.91 is used to infer the physical iris
schedule through exact axial tracing, giving 7.949329, 9.348782 and 11.019642 mm stop radii at the three
source stations. Agreement with f/2.91 is a calibration result, not independent proof of unpublished
diaphragm dimensions. Interpolated iris radii remain estimates.

Surface 8 uses SD = 10.16 mm while surface 9 remains at 10.20 mm. The lens-global gapSagFrac = 0.986
permits the central printed tele marginal ray to pass their 2.300 mm vertex gap. The shared-rim physical
air is only 0.034490804 mm; reserve beyond that policy’s threshold is 0.002290804 mm. The source tele ray
has only 0.004500968 mm radial headroom at surface 8 and 0.042690840 mm at surface 9. This exterior
L4-to-L5 gap is the near-contact constraint, not a cemented interface.

The setting acts on every air gap, although the other apertures remain unchanged and all other gaps
already satisfy the default 0.90 criterion. Positive central-value geometry is not evidence of
manufacturing safety. A reproduced adverse joint half-last-place R/d/nd sensitivity example raises the
surface-8 ray height to 10.161807897 mm, beyond the declared aperture by 0.001807897 mm, while physical
air remains positive. This is a local sensitivity example, not a rigorous uncertainty enclosure or a
probability distribution; asphere-coefficient rounding was not varied. Rounding robustness and production
tolerances are not demonstrated.

A dense native test at 41 zoom by 21 focus states traces 6,027 axial stop-target rays and 9,471 default
current-state UI rays without physical clipping. It uses the central printed values and cannot prove
continuous robustness. Full requested unit-stop edge probes are numerically inset by 10⁻⁹ of stop radius;
exact source f-number pupil probes are retained separately. Zero hidden native render trim was found on
the grid. Additional ±1 paraxial-pupil UI stress-edge probes transmitted in 850 of 3,444 attempts;
2,594 did not transmit. These UI edge launches differ from the successfully aimed physical-stop
probes. Default UI rays passing does not establish clearance for every UI launch.

Off-axis testing is more limited. Across 6,006 signed-stop attempts at 60% image height and the source
corner, 3,776 transmitted, 1,341 physically clipped and 889 aiming targets remained unresolved. All 1,617
interior samples through ±0.83 stop radius at 60% image height passed. Corner bundles remain partially
vignetted; an unresolved aim is untested, not transmitted. Among transmitted field samples, a minimum
radial margin of approximately 0.000247265 mm at surface 17 shows how close some sampled rays lie to
other apertures. None of these margins is a fabrication allowance.

First physical clips are recorded separately from rays continued with rims disabled and from UI ghost
continuations. Chief-ray coverage near the printed image height does not certify a fully illuminated
corner pupil. Chromatic performance, finite-distance MTF and manufacture remain outside the verified
claims of this model.

## Sources and References

1. Japan Patent Office, **JP 2022-131391 A**, 2022-09-07, Shingo Abe / Tamron Co., Ltd. Original unchanged A-publication with PAJ wrapper: [DPMA publication PDF](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=JP002022131391A). Example 5: ¶0120–0132, PDF pp. 22–24; asphere convention ¶0074, PDF p. 15; conditions ¶0147, PDF pp. 26–27; Figure 17, PDF p. 44; Figures 18–20, PDF pp. 45–47.
2. Tamron, [A062 specifications](https://www.tamron.com/global/consumer/lenses/a062/spec.html), checked 2026-10-05, and [A062 product overview](https://www.tamron.com/global/consumer/lenses/a062/). Production specifications are distinguished from the patent design quantities.
3. HOYA, [Optical Glass Catalog 20260707, including obsolete glasses](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf), relevant original NM/CD rows retained in the evidence file. Coordinate equivalents are not supplier identifications.
4. OHARA, [Optical glass type table](https://www.ohara-inc.co.jp/product/01000/), including S-NBH57, S-LAL7Q and distinct S-LAL18N data; [S-TIL25 datasheet, OHARA 25-04](https://oharacorp.com/wp-content/uploads/2025/04/estil25.pdf), the exact listed L3 coordinate comparison.
5. SCHOTT, [LF5 optical glass properties](https://www.us.schott.com/shop/advanced-optics/en/Optical-Glass/LF5/c/glass-LF5). The quoted comparison retains the Abbe difference from the patent medium.
6. LensVisualizer, current main [current-state focal-length helper](https://github.com/ronbuening/LensVisualizer/blob/3f00f21094afdbee2e1b8551b96d2734b7f0d0f1/src/optics/first-order/focusBreathing.ts) and [layout/zoom interpolation](https://github.com/ronbuening/LensVisualizer/blob/3f00f21094afdbee2e1b8551b96d2734b7f0d0f1/src/optics/layout.ts). Native execution and actual current-gap calculations are distinguished in the audit record.


## Current V2 reconstruction, 2026-10-23

This revision preserves every source curvature, thickness, refractive index/Abbe value and all three native infinity AND near-focus gap states. It adds an explicitly inferred G4 continuous infinity-zoom compensation, not factory cam recovery. Gaps16/18 change by equal/opposite amounts, with maximum added G4 travel0.297239716mm; fixed neighboring groups/image plane remain unchanged. Compensation targets the interpolation of the original native rounding residuals, not a shifted image plane or optical surface optimization. Intermediate focus is illustrative and has no finite-conjugate MTF certification.

The historical0.986 gap-sag allowance is not used for this candidate. The current allowance is0.97. Only the inferred S8 clear semi-diameter changes10.16→10.08499mm. S8 curvature radius remains+205.807mm; no curvature change is made. This is a conservative visualization rim, not a printed or production aperture. It deliberately forfeits part of the original near-edge pupil: at most1.1471 percentage points additional on-axis geometric pupil-area loss relative to the same inferred motion with the historical rim. Total on-axis pupil-area loss in this diagnostic reaches11.1662%, including existing stop/other aperture clipping. Resulting geometrical rim-limited f-number reaches2.92873. These are not transmission/T-stop or corner-illumination claims. The baseline diagnostic alone retains the historical0.986 allowance to isolate the incremental rim effect; it is not a release candidate. The former nominal tele pupil clearance and rounding-sensitivity claim must not be carried over as an unchanged aperture pass.

5,005 geometry states pass without errors or render trimming; all1,001 infinity image-plane checks pass unchanged gates. All105 reference-MTF fields converge with per-field limits retained (minimum50lp/mm); photopic MTF remains unavailable because partial-dispersion evidence is absent, and finite-conjugate MTF is not certified. Original source association, glass-class ambiguity, rounding sensitivity, physical-plane residuals and incomplete production equivalence remain qualifications. No engine or validation weakening.

Additional final independent review: pure-Python d-line paraxial replay includes the source rear cover plate and confirms1,001zoom maximum residual0.090697601mm, monotonic EFL20.601561735→38.800686745mm and source-directed G4 motion. All5,555 default UI rays across101zooms×5focus states are clear. Five off-node MTF samples add25 converged reference fields (minimum returned band50lp/mm); photopic and finite-conjugate unavailability remains explicit.
