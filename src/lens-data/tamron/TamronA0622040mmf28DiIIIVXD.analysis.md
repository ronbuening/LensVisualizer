## Patent Reference and Design Identification

**Patent:** JP 2022-131391 A  
**Application Number:** JP 2021-030318  
**Filed:** 2021-02-26  
**Published:** 2022-09-07  
**Inventor:** Shingo Abe  
**Applicant:** Tamron Co., Ltd.  
**Title:** Zoom Lens and Image Capturing Device  

The selected prescription is correlated with the TAMRON 20-40mm f/2.8 Di III VXD (Model A062), a
full-frame zoom released for Sony E-mount in October 2022. Tamron released a Nikon Z-mount version on
2026-10-22 with the same 12-element, 11-group construction. The numerical source is the Japanese A
publication, not a substituted grant or translated family prescription. Example 5 is described in
¶0120–0132; its optical section is Figure 17. PDF page citations below count the one-page English
abstract (PAJ) that precedes the Japanese publication, so they run one ahead of the printed page numbers.

The correlation rests on several convergent features:

1. Example 5 contains 12 lens elements in 11 air-separated groups, matching Tamron's published 12 elements in 11 groups.
2. Its negative-leading five-group architecture contains one cemented pair, L7–L8, and aspherical elements L3, L6 and L12. The numerical table has five aspherical surfaces, including two double-sided elements. Tamron's construction diagram marks element 3 as a hybrid aspherical lens and elements 6 and 12 as moulded-glass aspherical elements, the same three positions.
3. Four elements, L2, L6, L8 and L10, have low-index, high-Abbe coordinates at nd ≈ 1.497 and νd ≈ 81.6. Tamron's diagram marks exactly elements 2, 6, 8 and 10 as its four LD (Low Dispersion) elements. Catalog coordinates do not establish a particular supplier or melt.
4. The published 20.603–38.803 mm range and f/2.91 are close to, but distinct from, the marketed 20–40 mm and f/2.8.
5. The September 2022 patent publication precedes Tamron's October 27, 2022 product release. The source's moving negative focus group is compatible with an internally focused product, although the production VXD drive does not itself identify a patent embodiment.

These observations support a construction correlation; they do not confirm that the manufactured lens
uses the unchanged numerical prescription. The commercial close-focus limits are 0.17 m at wide and 0.29
m at tele. The modeled near spacings instead come from the patent’s nominal 300 mm table, and no
commercial close-focus extension is reconstructed. [Tamron
specifications](https://www.tamron.com/global/consumer/lenses/a062/spec.html) and [product
overview](https://www.tamron.com/global/consumer/lenses/a062/) supply the production identity and
marketed specifications.

The patent prints infinity and 300 mm spacings at wide, middle and tele, and those six states are exact in
the model. The zoom positions between them are a reconstruction, not Tamron's cam: G4 is solved for
infinity focus and the other groups follow interpolated laws. Between the printed stations the near state
is interpolated and illustrative only. Numerical claims about intermediate configurations below are
computed from the current gaps.

## Optical Architecture

Example 5 has a negative–positive–positive–negative–positive functional-group sequence. The eleven
air-separated construction groups are distinct from these five moving groups. G1 contains L1–L3; G2
contains L4–L5; G3 begins with the stop and contains L6–L8; G4 is L9 alone; and G5 contains L10–L12. The
only cemented junction is source surface 15 between L7 and L8. The aperture stop is source surface 11,
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

From wide to tele, measured relative to the fixed image plane, G1 moves imageward by 6.979 mm. G2 moves
objectward by 4.261 mm, G3 and G5 by 14.958 mm, and G4 by 14.479 mm. The equal G3/G5 displacement agrees
with the source’s common-trajectory description. The gaps around G4 are non-monotonic across the three
stations, but this does not mean G4 reverses its absolute image-referenced zoom motion. [¶0126.]

| Infinity station | Source EFL (mm) | Calculated EFL (mm) | Front vertex to physical image (mm) | Physical image distance from surface 24 (mm) |
|---|---:|---:|---:|---:|
| Wide | 20.603 | 20.601562 | 109.976 | 16.501 |
| Middle | 28.305 | 28.303643 | 106.078 | 24.382 |
| Tele | 38.803 | 38.800687 | 102.997 | 31.459 |

The tabulated physical image distances include the source cover glass. They are not Gaussian back-focus
estimates. The first-vertex optical track is also not directly comparable with Tamron’s 86.5 mm
mechanical front-tip-to-mount length. No uniform scaling has been applied to make source quantities match
the marketed lens.

Source surfaces 25–26 describe a 2.500 mm camera-side cover plate with nd = 1.51680 and νd = 64.17
(the SCHOTT N-BK7 coordinates), followed by 1.000 mm of physical air. The model traces it as a
camera-side plate and does not draw it as one of the twelve lens elements. Source surface 24 retains the
physical gap to this plate. Paragraph 0071 identifies CG as cover glass before the image plane; there is
no basis to treat it as an optional lens-holder filter or to fold its thickness into air.

## Element-by-Element Analysis

The focal lengths in this section are calculated for each isolated element in air, including its centre
thickness. A cemented element’s standalone value is a comparison quantity, not its in-situ contribution.
Each glass is named by a catalog glass whose listed nd/νd match the patent; the production supplier is not
specified.

### L1: negative front meniscus

nd = 1.72916, νd = 54.67. Glass: TAC8 (HOYA catalog equivalent). f = -49.899 mm.

L1 opens G1 with negative power. Its two positive radii place the stronger concave-to-image curvature on
the rear side. The relatively high index distinguishes it from the low-index second element. Its position
and sign establish part of the front negative group; an individual distortion or coma correction is not
demonstrated by that fact alone.

Source surfaces 1–2; ¶0121.

### L2: low-dispersion negative meniscus

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA catalog equivalent), one of Tamron's four LD elements. f = -52.320 mm.

L2 continues the negative front-group power with substantially higher Abbe number than L1. The positive
L3 that follows moderates the group’s combined power. The coordinate matches HOYA's fluorophosphate FCD1,
whose catalog partial dispersion lies above the normal line; the patent itself publishes no partial
dispersion, so the anomalous partial dispersion is marked as inferred.

Source surfaces 3–4; ¶0121.

### L3: positive meniscus with one asphere

nd = 1.58144, νd = 40.75. Glass: S-TIL25 (OHARA catalog equivalent). f = +126.483 mm.

L3 is the positive member of G1 and carries the group’s aspherical surface 5A. Tamron's diagram marks this
position as a hybrid aspherical lens. The source gives one 3.600 mm medium between surfaces 5 and 6 and
supplies no additional glass–resin interface, layer thickness or second index. A separate hybrid layer
therefore cannot be reconstructed from the numerical table, and the model retains the single published
medium.

Source surfaces 5–6; ¶0128–0129.

### L4: positive meniscus in G2

nd = 1.85025, νd = 30.05. Glass: S-NBH57 (OHARA catalog equivalent). f = +66.029 mm.

L4 is the positive member of the near-cancelling G2 pair. Its rear surface 8 faces the front of L5 across
the source 2.300 mm air gap. This exterior interface is the aperture-clearance constraint discussed
below; it is unrelated to the L7–L8 cemented junction. Both faces are modeled at 11.3 mm, following the
square-cut L4 that Figure 17 draws; this is not a published clear aperture.

Source surfaces 7–8; ¶0122, ¶0128.

### L5: negative meniscus in G2

nd = 1.65160, νd = 58.55. Glass: S-LAL7 (OHARA catalog equivalent). f = -76.965 mm.

L5 opposes L4 and leaves their separated two-element group weakly positive. Both of its radii are
negative, consistent with the opposite-facing meniscus described in the patent. The pair matches OHARA's
lanthanum crown S-LAL7. That comparison does not by itself explain the residual aberrations of G2.

Source surfaces 9–10; ¶0122.

### L6: biconvex positive element with two aspheres

nd = 1.49710, νd = 81.56. Glass: M-FCD1 (HOYA catalog equivalent; molded aspherical element), one of Tamron's four LD elements. f = +36.431 mm.

L6 is the first element after the stop and the first positive element of G3. It has aspheres on both 12A
and 13A, and Tamron's diagram marks it as both an LD element and a moulded-glass aspherical element. The
coordinate matches HOYA's molding-glass version of FCD1. Its high-Abbe medium and substantial positive
standalone power distinguish it from the following negative cemented member. Both exact polynomial
surfaces are retained, rather than approximated by an even-order refit or a single aspherical
designation.

Source surfaces 12–13; ¶0123, ¶0129.

### L7: negative meniscus member of D1

nd = 1.69895, νd = 30.05. Glass: E-FD15 (HOYA catalog equivalent). f = -45.666 mm.

L7 is the negative meniscus in the sole cemented pair. Surface 15 is the transition directly from L7
glass to L8 glass; there is no intervening air or invented cement layer. The low Abbe number contrasts
with L8’s high-Abbe positive medium, which is consistent with chromatic balancing as a design
possibility. The available data do not establish the pair’s secondary-spectrum performance.

Source surfaces 14–15; ¶0123.

### L8: biconvex positive member of D1

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA catalog equivalent), one of Tamron's four LD elements. f = +26.068 mm.

L8 is biconvex and positive as an isolated element. It completes the cemented pair and G3. In the
assembled pair the shared surface refracts between the two glasses, so adding the two standalone powers
is not a valid substitute for tracing the actual junction.

The separately traced L7–L8 cemented component has EFL 54.459063 mm in air. This net component result
remains distinct from G3’s focal length, because G3 also contains L6 and the intervening air space.

Source surfaces 15–16; ¶0123.

### L9: biconcave negative internal-focus element

nd = 1.48749, νd = 70.44. Glass: FC5 (HOYA catalog equivalent). f = -38.221 mm.

L9 alone forms G4, the source’s negative group N. Its negative front and positive rear radii form a
biconcave element. It moves imageward for near focus while the other groups retain their zoom-dependent
positions. Its Abbe number also supplies condition (4), which requires νdn greater than 50. The front
rim is modeled at the drawn 10.4 mm outer edge; the concave rear face is modeled to 9.0 mm, where Figure 17
ends the curve at a flat mounting flange, above the 8.84 mm axial f/2.91 ray.

Source surfaces 17–18; ¶0124, ¶0126, claim 4.

### L10: biconvex positive member of G5

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA catalog equivalent), one of Tamron's four LD elements. f = +28.618 mm.

L10 begins the positive rear group with a biconvex low-dispersion element. The two negative elements
behind it leave G5 with a much longer positive focal length than L10 alone. This power distribution
describes the group architecture; it is not a proof that L10 alone supplies a particular off-axis
correction.

Source surfaces 19–20; ¶0125.

### L11: biconcave negative element in G5

nd = 1.48749, νd = 70.44. Glass: FC5 (HOYA catalog equivalent). f = -63.054 mm.

L11 provides negative power behind L10. Its glass coordinates equal those of the moving L9, but it belongs
to G5 and does not share L9’s independent focus displacement. The equality of glass coordinates therefore
must not be confused with equality of kinematic role.

Source surfaces 21–22; ¶0125.

### L12: double-sided aspherical rear meniscus

nd = 1.69350, νd = 53.20. Glass: M-LAC130 (HOYA catalog equivalent; molded aspherical element). f = -78.564 mm.

L12 is the final negative lens element, with exact aspheres on 23A and 24A, and Tamron's diagram marks it
as a moulded-glass aspherical element. It follows L11 within the net-positive G5. The rear air space
varies with zoom and terminates at the camera-side plate, not at an omitted synthetic image distance. The
polynomial departures are evaluated at the modeled apertures and are not a manufacturing prescription.

Source surfaces 23–24; ¶0125, ¶0128–0129.

## Glass Identification and Spectral Limits

The patent specifies d-line nd/νd coordinates at 587.6 nm, not glass trade names. Each medium is labelled
with a current HOYA, OHARA or SCHOTT catalog glass whose listed coordinates match the patent pair. These
are catalog equivalents, not supplier identifications: several pairs are listed by more than one glass or
vendor, and the production supplier is unspecified.

| Patent nd / νd | Used by | Catalog equivalent (listed nd / νd) | Notes |
|---|---|---|---|
| 1.72916 / 54.67 | L1 | HOYA TAC8: 1.72916 / 54.67 | Exact |
| 1.49700 / 81.61 | L2, L8, L10 | HOYA FCD1: 1.49700 / 81.61 | Exact; fluorophosphate LD glass |
| 1.58144 / 40.75 | L3 | OHARA S-TIL25: 1.58144 / 40.75 | Exact; HOYA E-FL5 (40.89) and SCHOTT LF5 (40.85) share the index; hybrid layer not tabulated |
| 1.85025 / 30.05 | L4 | OHARA S-NBH57: 1.85025 / 30.05 | Exact |
| 1.65160 / 58.55 | L5 | OHARA S-LAL7: 1.65160 / 58.55 | Exact; OHARA now lists S-LAL7 as obsolete, and S-LAL7Q (58.54) is the current near-equivalent |
| 1.49710 / 81.56 | L6 | HOYA M-FCD1: 1.49710 / 81.56 | Exact; molding glass, shared with HOYA FCD1B |
| 1.69895 / 30.05 | L7 | HOYA E-FD15: 1.69895 / 30.05 | Exact; shared with E-FD15L |
| 1.48749 / 70.44 | L9, L11 | HOYA FC5: 1.48749 / 70.44 | Exact |
| 1.69350 / 53.20 | L12 | HOYA M-LAC130: 1.69350 / 53.20 | Exact; molding glass, shared with MP-LAC130 and MC-LAC130 |
| 1.51680 / 64.17 | CG | SCHOTT N-BK7: 1.51680 / 64.17 | Exact; HOYA BSC7 lists 64.20 |

With these labels the app computes colour from each catalog glass's dispersion formula. That is the
catalog glass's dispersion, not a published property of the lens: the selected example gives no nC, nF,
ng or ΔPgF. HOYA lists FCD1 at P_g,F = 0.5389, about 0.03 above the normal line, the anomalous partial
dispersion typical of fluorophosphate LD glass. The four LD positions are therefore marked as inferred
APD elements. No apochromatic or measured chromatic-performance claim follows.

The surface-by-surface paraxial Petzval sum is +0.002293829 mm⁻¹ for the source prescription. It is
unchanged by the air-gap movements because the refracting curvatures and media stay fixed. This sum is
not an exact off-axis image-surface or astigmatism prediction.

## Focus and Zoom Mechanisms

Focus follows the patent's printed spacings: all three infinity and nominal 300 mm near-spacing states are
preserved. Only G4 moves independently for focus. G1, G2, G3 and G5 keep the positions set by the zoom
station. Tamron drives the focus group with its VXD linear motor; the source table supplies the numerical
internal movement. [¶0126, ¶0130–0131.]

| Source station | d16 at infinity (mm) | d16 near (mm) | d18 at infinity (mm) | d18 near (mm) | G4 imageward change from d16 (mm) |
|---|---:|---:|---:|---:|---:|
| Wide | 2.959 | 4.050 | 6.456 | 5.365 | 1.091 |
| Middle | 2.195 | 3.814 | 7.219 | 5.600 | 1.619 |
| Tele | 3.438 | 6.063 | 5.977 | 3.351 | 2.625 |

The d16 increase is balanced by the d18 decrease, except for a −0.001 mm sum difference in the tele near
table. That difference is compatible with the source’s 0.001 mm tabulation precision and is left as
printed. The source’s nominal shooting distance does not explicitly define its reference plane; exact-ray
comparisons favor an object-to-image interpretation, but that inference does not establish an exact
300 mm conjugate.

### Source endpoint focus and the physical image plane

At the source infinity stations, the Gaussian focus lies +0.090698, +0.048534 and +0.007336 mm beyond the
physical image plane. These discrepancies are retained. Marginal-minus-paraxial longitudinal shifts
calculated with the exact aspheres agree with the approximate d-line spherical-aberration curves in
Figures 18–20. A physical image plane near the wider-aperture focus need not coincide with Gaussian
focus; the original rear gaps are not refocused to make that comparison vanish.

At the published near spacings, Gaussian object-to-image conjugates are 313.809555, 306.637905 and
306.045327 mm, rather than exactly 300 mm. The corresponding source-state EFLs are 19.933743, 26.919807
and 35.654801 mm. These numbers describe the source model and its reference-plane limitation, not a
verified production focus-breathing curve.

### Intermediate control positions

Between the printed stations, G4's infinity position is solved rather than interpolated. Gaps 16 and 18
change by equal and opposite amounts, adding at most 0.297 mm of G4 travel relative to plain
interpolation. The solve targets a Gaussian focus that follows the interpolated source residuals, not an
exact image plane. Across the zoom range the infinity Gaussian focus therefore stays between 0.007 and
0.091 mm beyond the image plane, and EFL rises monotonically from 20.602 to 38.801 mm. Near-focus gaps
between the printed stations are interpolated, so the near state there is not focused at exactly 300 mm.

| Zoom control (focal length) | Focus control (label) | Current-gap EFL (mm) | Focus on the physical image plane |
|---|---|---:|---|
| 0.25 (24.063 mm) | 0 (infinity) | 24.063 | Gaussian focus 0.070 mm beyond the plane |
| 0.25 | 0.5 (600 mm) | 23.476 | Object-to-image distance 446 mm |
| 0.25 | 1 (300 mm) | 22.902 | Object-to-image distance 266 mm |
| 0.75 (32.922 mm) | 0 (infinity) | 32.922 | Gaussian focus 0.028 mm beyond the plane |
| 0.75 | 0.5 (600 mm) | 31.692 | Object-to-image distance 448 mm |
| 0.75 | 1 (300 mm) | 30.508 | Object-to-image distance 271 mm |

Each of the 101 zoom positions stores its own focal length, so the infinity focal-length readout agrees
with the current-gap EFL to within about 0.002 mm. The focus labels are inverse-distance slider labels,
not certified conjugates: at the slider midpoint the stored gaps focus nearer than the 600 mm label, and
at the intermediate near ends they focus nearer than 300 mm.

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

The following departures are computed at the modeled semi-diameters, not at source-published clear
apertures. They are polynomial sag relative to the same spherical base, not measured manufacturing
departures.

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

The two double-sided aspherical elements sit where Tamron's construction diagram marks its two
moulded-glass aspherical elements, and their coordinates match HOYA's molding glasses M-FCD1 and
M-LAC130. The patent table is still an optical prescription, not a manufacturing-process specification.
Tamron’s [September 29, 2022 launch
announcement](https://www.tamron.com/global/consumer/news/detail/20220929001003.html) lists two GM elements
and one hybrid aspherical element; no unlisted composite interface is introduced at L3.

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

The patent does not publish numerical clear semi-diameters or physical iris radii. Apertures are inferred:
the rims were compared with the wide-angle panel of Figure 17, the optical extent is used where curved
faces end at drawn mounting flanges, and every rim is floor-checked by exact real-ray tracing. L2's
nearly flat front face is modeled to its drawn 17.4 mm outer edge; Figure 17 rests L1's rear flange
against that face from about 15.9 mm outward, so L1's 15.8 mm rear face remains the limiting rim there. The source
f/2.91 is used to infer the physical iris schedule through exact axial tracing, giving 7.949329, 9.348782
and 11.019642 mm stop radii at the three source stations. Agreement with f/2.91 is a calibration result,
not independent proof of unpublished diaphragm dimensions. Interpolated iris radii remain estimates.

Surface 8 uses SD = 11.3 mm, so L4 is drawn square-cut at the height of its front face, as in Figure 17.
Surface 9 uses SD = 10.18 mm. This rim is nearest the tele f/2.91 axial marginal ray, which reaches
10.157 mm there, about 0.02 mm inside the rim. At the shared 10.18 mm height the two sags take 2.275 mm of
the 2.300 mm vertex gap (98.9%), leaving 0.025 mm of air. The lens-global gapSagFrac is therefore 0.99.
A surface-9 rim of 10.20 mm would need 1.00. An earlier version of this model reduced surface 8 to
10.085 mm to meet a 0.97 allowance, which clipped the tele axial beam by about 0.07 mm (rim-limited
f/2.93); the present rims and the 0.99 allowance replace it. Figure 17 draws the same near contact: L5's
concave front face ends at about 10.1 mm, and its flat flange lies against L4's rear face out to the
outer edge. This exterior L4-to-L5 gap is the near-contact constraint, not a cemented interface.

The allowance acts on every air gap, although the other apertures remain unchanged and all other gaps
already satisfy the default 0.90 criterion. Positive central-value geometry is not evidence of
manufacturing safety. An adverse joint half-last-place R/d/nd rounding example raises the surface-8 ray
height to 10.161807897 mm, while physical air remains positive. That height would have exceeded the
earlier 10.16 mm surface-8 rim by 0.001807897 mm. The rays at the present 11.3 mm surface-8 rim and
10.18 mm surface-9 rim were not re-evaluated for this example. This is a local sensitivity example, not a rigorous uncertainty enclosure or a probability
distribution; asphere-coefficient rounding was not varied. Rounding robustness and production tolerances
are not demonstrated.

Across a grid of 41 zoom by 21 focus states, all 6,027 aimed axial rays at the stop edge and all 9,471 of
the app's default on-axis rays transmit, with no render trimming; across all 101 zoom positions and five
focus states, all 5,555 default on-axis rays transmit. These checks use the central printed values and
cannot prove continuous robustness. Rays launched at the full paraxial pupil edge instead transmit in 850
of 3,444 attempts, so clearance of the stated beam does not imply clearance for every displayed launch.

Off-axis testing is more limited. Across 6,006 signed-stop attempts at 60% image height and the source
corner, 3,776 transmitted, 1,341 physically clipped and 889 aiming targets remained unresolved. All 1,617
interior samples through ±0.83 stop radius at 60% image height passed. Corner bundles remain partially
vignetted; an unresolved aim is untested, not transmitted. Among transmitted field samples, a minimum
radial margin of approximately 0.000247265 mm at surface 17 shows how close some sampled rays lie to
other apertures. None of these margins is a fabrication allowance. These off-axis counts were computed
with an earlier 10.4 mm surface-18 rim and 15.44 mm surface-3 rim and have not been recomputed. Raising
surface 3 to L2's drawn outer edge removes a clip that the earlier rim added beyond the engine half-field
at the wide end: wide-open transmission at 44.8° and 47.8° rises from 78.1% and 39.1% to 82.8% and 43.8%,
the same values any surface-3 rim from 15.8 mm upward gives, because L1's rear face then limits those rays
as Figure 17 draws. The current 9.0 mm surface-18 rim follows the
end of L9's concave rear face in Figure 17 and clips more of the upper off-axis bundle at middle and tele
zoom: engine geometric transmission at the edge of the field falls by about 7–10%, and at the tele end
the upper ray of the app's off-axis fan stops at surface 18. The on-axis counts above are unaffected,
because the axial f/2.91 ray reaches at most 8.84 mm there.

Chief-ray coverage near the printed image height does not certify a fully illuminated corner pupil.
Chromatic performance, finite-distance MTF and manufacture remain outside the verified claims of this
model.

## Sources and References

1. Japan Patent Office, **JP 2022-131391 A**, *Zoom Lens and Image Capturing Device*, published 2022-09-07, Shingo Abe / Tamron Co., Ltd. Example 5: ¶0120–0132, PDF pp. 22–24; asphere convention ¶0074, PDF p. 15; conditions ¶0147, PDF pp. 26–27; Figure 17, PDF p. 44; Figures 18–20, PDF pp. 45–47.
2. Tamron, [A062 specifications](https://www.tamron.com/global/consumer/lenses/a062/spec.html), checked 2026-10-05, and [A062 product overview](https://www.tamron.com/global/consumer/lenses/a062/), including the construction diagram's LD, moulded-glass aspherical and hybrid aspherical markings. Production specifications are distinguished from the patent design quantities.
3. HOYA, [Optical Glass Catalog 20260707, including obsolete glasses](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf): TAC8, FCD1, M-FCD1, E-FD15, FC5 and M-LAC130 coordinates. Coordinate equivalents are not supplier identifications.
4. OHARA, [Optical glass type table](https://www.ohara-inc.co.jp/product/01000/), including S-NBH57, S-LAL7 and S-LAL7Q data; [S-TIL25 datasheet, OHARA 25-04](https://oharacorp.com/wp-content/uploads/2025/04/estil25.pdf), the exact listed L3 coordinate comparison.
5. SCHOTT optical glass data for N-BK7 and [LF5](https://www.us.schott.com/shop/advanced-optics/en/Optical-Glass/LF5/c/glass-LF5). The LF5 comparison retains its Abbe difference from the patent medium.
