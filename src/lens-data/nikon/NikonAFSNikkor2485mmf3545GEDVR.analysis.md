## Patent Reference and Design Identification

**Patent:** JP 2011-221421 A\
**Application Number:** P2010-92771\
**Filed:** 2010-04-14\
**Published:** 2011-11-04\
**Inventor:** Hiroshi Yamamoto (山本 浩史)\
**Applicant:** Nikon Corporation\
**Title:** 変倍光学系、この変倍光学系を備える光学機器、及び、変倍光学系の製造方法\
**Embodiment analyzed:** Example 4 / 第4実施例

The prescription analyzed here is Example 4 of JP 2011-221421 A. The numerical data are in Table 13 on PDF pages 19–20,
the aspherical coefficients are in Table 14 on page 20, the three infinity-focus zoom-spacing states are in Table 15 on
page 20, and the seven condition values are in Table 16 on page 20. Figure 7, the optical section for Example 4, and
Figure 8, its wide/intermediate/tele aberration plots, appear on PDF page 25. Example 4 is introduced in ¶0106 and
continues through ¶0117.

The association with the production **NIKON AF-S NIKKOR 24-85mm f/3.5-4.5 G ED VR** is a selected research correlation,
not a manufacturer-confirmed patent mapping. The evidence is convergent but not exact:

1. The patent was filed in April 2010 and published in November 2011; Nikon announced the production lens on 2012-06-14
   for availability at the end of June 2012.
2. Example 4 describes 16 physical lens elements arranged as 11 air-separated lens components. Nikon's production
   specification also gives 16 elements in 11 groups.
3. Example 4 has three aspherical lens surfaces associated with L21, L24, and L51. Nikon markets three aspherical lens
   elements in the production lens.
4. Example 4 contains one conspicuously high-Abbe coordinate at L33, nd = 1.49782 and νd = 82.52. Nikon markets one ED
   element. This is a useful correlation point, but it does not identify the melt or prove that L33 is the production ED
   element.
5. The patent specifies internal focusing by axial motion of G2 and vibration reduction by transverse motion of the
   cemented negative component CL4 in G4 (¶0066, ¶0108). Nikon describes the production lens as IF and VR.
6. The patent's calculated wide-state focal length is 24.7001 mm, close to the marketed 24 mm endpoint.

There are material mismatches that prevent treating the correlation as confirmation. Example 4 calculates to 87.2003 mm
at its tele endpoint rather than 85 mm. Table 13 prints F.NO = 3.60–5.80, whereas the production lens is marketed as
f/3.5–4.5. The patent's Table 13 endpoint half-angles are 42.64° and 11.49°, while Nikon specifies a full FX angle of view
of 84°–28°30′. The selected example therefore remains a research match whose prescription is kept separate from product
marketing values.

A second source discrepancy occurs inside the patent itself. Table 13 prints F.NO 3.60 and 5.80 at the endpoints, while
high-resolution inspection of Figure 8 shows FNO labels 3.50, 5.00, and 5.78 for the wide, intermediate, and tele plots.
The data model uses the Figure 8 values as its modeled `nominalFno` calibration targets. This choice does not establish an
unpublished physical diaphragm diameter.

## Optical Architecture

Example 4 is a five-moving-group photographic zoom with group powers in the sequence **positive – negative – positive –
negative – positive**. The patent's five kinematic groups are G1 through G5. Separately, the LensVisualizer metadata uses
`groupCount: 11` for the 11 air-separated lens components in the physical construction. These two counts describe different
levels of structure and are not interchangeable.

Independent paraxial calculation from the final data revision gives the following group focal lengths, agreeing with
Table 13 within the source-rounding envelope:

| Moving group | Power sign | Calculated focal length |
|---|---:|---:|
| G1 | positive | +96.0864 mm |
| G2 | negative | -16.8965 mm |
| G3 | positive | +21.3438 mm |
| G4 | negative | -28.6007 mm |
| G5 | positive | +43.3801 mm |

G1 is the positive front group. G2 is the strong negative internal group and also the patent's focusing group. The aperture
stop lies between G2 and G3 and moves with G3 during zooming (¶0066). G3 is strongly positive. G4 is negative and contains
the transversely movable stabilization component CL4. G5 is positive and forms the rear group.

The four inter-group spacings change monotonically through the three published infinity-focus keyframes:

| Gap | Wide | Intermediate | Tele | Trend |
|---|---:|---:|---:|---|
| d1, G1→G2 | 3.10000 mm | 19.45499 mm | 34.60972 mm | increases |
| d2, G2→G3 | 18.37739 mm | 7.76715 mm | 1.50000 mm | decreases |
| d3, G3→G4 | 1.99464 mm | 4.84201 mm | 6.59326 mm | increases |
| d4, G4→G5 | 5.90657 mm | 3.05904 mm | 1.30000 mm | decreases |

Those directions are the same ones stated generally in ¶0065. When the image plane is held fixed and the final data are
re-expressed as group positions, G2 moves 1.9592 mm imageward from the wide state to the published intermediate state, then
2.4456 mm objectward from the intermediate state to tele. The reversal is therefore a calculation from the three source
keyframes rather than a claim about the exact continuous mechanical cam law between them.

The computed system focal lengths at the three modeled states are 24.7001 mm, 48.0002 mm, and 87.2003 mm. Only the wide
and tele values are printed as focal lengths in Table 13. The intermediate value is calculated from the Table 15 spacings
and serves as the LensVisualizer interpolation coordinate.

The corresponding image-plane spacings from the rear vertex of surface 30 are 38.8181 mm, 47.4694 mm, and 56.1899 mm.
At the endpoints these reproduce the rounded Table 13 Bf values of 38.819 mm and 56.191 mm. The intermediate BFD is
calculated because the patent does not print a middle Bf row.

Using the project's strict terminology tests, this zoom is not globally labeled a telephoto design: total track divided by
EFL is 5.0485, 2.8978, and 1.7969 from wide through tele, all greater than one. The strict `BFD > EFL` retrofocus condition
holds only at the wide state, so “retrofocus” is likewise not used as a global architectural label.

The final prescription is unscaled. The scale factor is **s = 1.0**; no radii, spacings, image-plane coordinates, or
aspherical coefficients were rescaled to force the patent's 87.20 mm endpoint to the marketed 85 mm value.

### Model representation of L21 and L51

The patent prose treats L21 and L51 as single physical lens elements. Table 13, however, changes refractive index inside
each of them: a thin nd = 1.53610 / νd = 41.42 region precedes a thicker bulk material. Dropping those internal interfaces
would change the sequential prescription.

The data file therefore retains 16 physical patent elements in `elementCount`, while representing those two internal
material changes as separate model entries: L21a/L21b and L51a/L51b. The `elements` array consequently contains 18 material
entries. The patent does not identify the thin material as resin, nor does it specify a hybrid manufacturing process, so
this analysis does not assign either manufacturing label.

## Element-by-Element Analysis

The focal lengths in this section are **standalone in-air paraxial focal lengths** computed from the final data revision.
They are not the same as the power of the element in situ inside the zoom. Where a cemented component is discussed, its
net standalone power is identified separately from the focal lengths of its individual members.

### L11 — Negative Meniscus, first member of CL1

nd = 1.84666, νd = 23.78. Glass: **847238 class (supplier unresolved)**. Standalone f = **-113.09 mm**.

L11 is the front negative meniscus of G1 and is cemented to L12. Example 4 describes both members as menisci convex toward
the object, with the pair forming cemented positive component CL1 (¶0106). Its high index and low Abbe number are source
coordinates; no vendor melt is asserted in the final data.

Taken in isolation, L11 is weakly negative. The cemented CL1 pair is only weakly positive as a standalone component,
calculated at approximately +802.07 mm focal length. That net value must not be confused with the much stronger +96.09 mm
focal length of complete moving group G1, which also includes L13.

### L12 — Positive Meniscus, second member of CL1

nd = 1.77249, νd = 49.61. Glass: **773496 class (supplier unresolved)**. Standalone f = **+98.85 mm**.

L12 is the positive member cemented to L11 at source surface 2. The cemented interface therefore changes directly from the
L11 medium to the L12 medium rather than passing through air. Its refractive-index/dispersion coordinate is consistent with
several compatible catalog families, so the coordinate alone does not establish a crown/flint family or supplier.

The opposing standalone signs of L11 and L12 make CL1 a positive cemented component with substantially weaker net power
than either member alone. This is a power accounting statement; the patent does not assign a specific aberration term to
L12 by itself.

### L13 — Positive Meniscus, rear element of G1

nd = 1.81600, νd = 46.62. Glass: **816466 lanthanum-flint class**. Standalone f = **+108.63 mm**.

L13 is the air-spaced rear positive meniscus of G1 (¶0106). Together with CL1 it produces the complete positive front-group
power. The final data keep the 0.1000 mm air separation between CL1 and L13 exactly as published.

No aspherical surface is assigned to G1 in Example 4. Its semi-diameters in the data file are modeled because the patent
publishes no clear-aperture dimensions.

### L21 — Aspherical Negative Meniscus, represented by L21a + L21b

**L21a:** nd = 1.53610, νd = 41.42. Glass: **Unmatched (thin aspheric-layer material)**. Standalone model-entry
f = **-2786.32 mm**.\
**L21b:** nd = 1.83480, νd = 42.72. Glass: **835427 lanthanum-flint class**. Standalone model-entry
f = **-19.24 mm**.\
**Combined physical L21:** standalone f = **-19.11 mm**.

The patent describes physical L21 as a negative meniscus convex toward the object, with its object-side surface aspherical
(¶0106). Table 13 places the asphere on source surface 6, which is surface `6A` in the data model. Surface 6 begins the
0.1000 mm nd = 1.53610 layer; source surface 7 then changes into the nd = 1.83480 bulk material before the lens exits to air
at surface 8.

The thin material entry contributes little standalone power compared with the bulk region; the combined physical element
remains strongly negative. The material split is retained because it is explicit prescription data, not because a
particular manufacturing process has been inferred.

The patent states generally that an asphere on the most object-side surface of G2 is desirable for correcting wide-end
field curvature and distortion (¶0050). That source statement applies to the role of surface `6A`; it is stronger evidence
than inferring an aberration role from the sign of L21 alone.

### L22 — Negative Meniscus

nd = 1.83480, νd = 42.72. Glass: **835427 lanthanum-flint class**. Standalone f = **-89.16 mm**.

L22 is the second negative lens component in G2 and is concave toward the object in the patent description (¶0106). It is
air-spaced from both L21 and the following cemented component CL2.

Its glass coordinate is the same class as the bulk region L21b. The data do not carry line indices or a vendor-resolved
Sellmeier identity, so the analysis does not assign more specific chromatic behavior to this element.

### L23 — Biconvex Positive, first member of CL2

nd = 1.80809, νd = 22.79. Glass: **808228 high-dispersion flint class**. Standalone f = **+26.27 mm**.

L23 is the positive biconvex member of the cemented G2 component CL2 (¶0106). It is followed immediately by L24 at the
cemented interface on source surface 12.

Its low Abbe number is a source coordinate and indicates high dispersion relative to the surrounding crown-like materials.
That fact alone does not justify assigning a particular chromatic-aberration contribution in the assembled zoom.

### L24 — Negative Lens with image-side asphere, second member of CL2

nd = 1.82079, νd = 42.71. Glass: **821427 class (supplier unresolved)**. Standalone f = **-30.61 mm**.

L24 is the negative rear member of CL2. The patent describes it as a negative meniscus concave toward the object with an
aspherical image-side surface (¶0106). That image-side asphere is source surface 13, labeled `13A` in the data file.

The isolated L23/L24 cemented pair has a calculated net standalone focal length of approximately **+170.97 mm**, even
though complete G2 is strongly negative at -16.90 mm. This illustrates why element power, cemented-component power, and
moving-group power are kept separate.

The patent states that an asphere on the most image-side surface of G2 is desirable for correction of spherical aberration
at the telephoto end (¶0046). Surface `13A` is the Example 4 realization of that condition.

### L31 — Negative Meniscus, first member of CL3

nd = 1.90366, νd = 31.27. Glass: **904313 lanthanum-flint class**. Standalone f = **-35.28 mm**.

L31 begins G3 immediately after the stop. It is a negative meniscus convex toward the object and is cemented to L32
(¶0106). The stop-to-L31 spacing is 0.5000 mm in the source table.

The high refractive index is directly published. The glass label remains class-level because the patent gives only nd/νd,
not a supplier designation.

### L32 — Biconvex Positive, second member of CL3

nd = 1.60300, νd = 65.46. Glass: **603655 crown class**. Standalone f = **+18.49 mm**.

L32 is the positive biconvex member cemented to L31. The isolated CL3 pair has a calculated standalone focal length of
approximately **+39.74 mm**, while complete moving group G3 is +21.34 mm after the air-spaced L33 is included.

The contrast between L31's lower Abbe number and L32's higher Abbe number is part of the published material palette, but
the catalog curves remain qualified spectral proxies; the analysis stops at this descriptive comparison.

### L33 — Biconvex Positive, high-Abbe rear element of G3

nd = 1.49782, νd = 82.52. Glass: **J-FKH1 coordinate-compatible ED-class spectral proxy (supplier unresolved)**. Standalone f = **+42.35 mm**.

L33 is the air-spaced rear positive element of G3 (¶0106). Its νd = 82.52 is the highest Abbe number in Example 4 and is
therefore the strongest source-level material correlation with Nikon's statement that the production lens contains one ED
element.

That correlation is not enough to name a vendor or melt, and the final data intentionally do not store candidate nC, nF,
ng, or dPgF. J-FKH1 supplies a qualified spectral proxy, not a production-glass identity. L33 receives explicitly inferred APD color from that curve (catalog dPgF approximately +0.0337), without claiming measured source partial dispersion. No apochromatic performance claim is made
from L33's Abbe number alone.

### L41 — Positive Meniscus, first member of stabilization component CL4

nd = 2.00069, νd = 25.45. Glass: **001255 high-index flint class**. Standalone f = **+23.78 mm**.

L41 begins G4 and is the positive member of cemented component CL4 (¶0107). Its source refractive index exceeds 2.0, the
highest in this example.

CL4 is mechanically important because the patent identifies the cemented pair, not the whole G4 group, as the transverse
vibration-reduction component (¶0108).

### L42 — Biconcave Negative, second member of stabilization component CL4

nd = 1.80610, νd = 40.94. Glass: **806409 class (supplier unresolved)**. Standalone f = **-16.91 mm**.

L42 is cemented to L41 and is strongly negative as an isolated element. The two members together form CL4, whose calculated
net standalone focal length is approximately **-52.93 mm**.

The patent specifically states that moving CL4 in a direction having a component perpendicular to the optical axis performs
vibration reduction in Example 4 (¶0108). The patent's general discussion also states that the G4 stabilization group is
intended to suppress variation of field curvature and decentered coma during shake correction (¶0035, ¶0041, ¶0049).
No numerical decenter range is published, so the LensVisualizer data do not encode a stabilization displacement.

### L43 — Negative Meniscus, rear element of G4

nd = 1.80400, νd = 46.58. Glass: **804466 lanthanum-flint class**. Standalone f = **-69.16 mm**.

L43 is the air-spaced rear negative meniscus of G4 (¶0107). Its power combines with the negative CL4 component to produce
the complete G4 focal length of -28.60 mm.

L43 is not identified by the patent as the moving vibration-reduction part; that role belongs specifically to CL4.
Keeping this distinction avoids treating the entire G4 assembly as a single translating stabilization cell.

### L51 — Positive aspherical lens, represented by L51a + L51b

**L51a:** nd = 1.53610, νd = 41.42. Glass: **Unmatched (thin aspheric-layer material)**. Standalone model-entry
f = **+197.27 mm**.\
**L51b:** nd = 1.80610, νd = 40.94. Glass: **806409 class (supplier unresolved)**. Standalone model-entry
f = **+29.12 mm**.\
**Combined physical L51:** standalone f = **+25.71 mm**.

The patent describes physical L51 as a positive lens with an object-side asphere (¶0107). Table 13 again inserts the thin
nd = 1.53610 / νd = 41.42 region before the bulk material: 0.2200 mm from source surface 25 to 26, followed by 4.6004 mm
of nd = 1.80610 material before the exit at surface 27.

The data model preserves this internal material boundary as L51a/L51b. As with L21, the source does not identify the thin
region as resin or specify a hybrid production method.

Surface `25A` has the largest modeled polynomial departure of the three aspheres at its adopted semi-diameter. That is a
geometric result of the final model, not a source statement assigning a particular aberration function to L51.

### L52 — Positive Meniscus, first member of CL5

nd = 1.48749, νd = 70.41. Glass: **487704 crown class**. Standalone f = **+49.19 mm**.

L52 is the positive member of the final cemented component CL5 and is concave toward the object in the patent description
(¶0107). It is separated from L51 by 0.3000 mm of air.

Its relatively high Abbe number is directly published. The class label does not assert that the production lens used a
specific Schott, Hikari, or other vendor equivalent.

### L53 — Negative Meniscus, second member of CL5

nd = 1.84666, νd = 23.78. Glass: **847238 class (supplier unresolved)**. Standalone f = **-26.41 mm**.

L53 is cemented to L52 and forms the rear surface of the refractive prescription. The isolated CL5 pair has a calculated
net standalone focal length of approximately **-56.22 mm**, while G5 as a whole remains positive at +43.38 mm because
L51 precedes it as a strong positive element.

The final image-plane spacing is measured from the rear vertex of surface 30. No sensor cover glass, filter, dummy rear
plate, or air-equivalent omitted plate is present in the selected numerical example.

## Glass Identification / Selection

The patent publishes only d-line refractive index and νd. It does not name glass manufacturers or melts. The final data
therefore use coordinate classes or `Unmatched (...)` labels rather than promoting catalog candidates to source facts.
Authoritative OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA catalogs were checked during extraction, but those coordinate
matches establish equivalence candidates, not the production supplier.

| Data label | nd | νd | Used in | Identification status |
|---|---:|---:|---|---|
| 847238 class | 1.84666 | 23.78 | L11, L53 | class; supplier unresolved |
| 773496 class (supplier unresolved) | 1.77249 | 49.61 | L12 | class; supplier unresolved |
| 816466 lanthanum-flint class | 1.81600 | 46.62 | L13 | class; supplier unresolved |
| Unmatched thin material | 1.53610 | 41.42 | L21a, L51a | no retained public-catalog match |
| 835427 lanthanum-flint class | 1.83480 | 42.72 | L21b, L22 | class; supplier unresolved |
| 808228 high-dispersion flint class | 1.80809 | 22.79 | L23 | class; supplier unresolved |
| 821427 class | 1.82079 | 42.71 | L24 | class; supplier unresolved |
| 904313 lanthanum-flint class | 1.90366 | 31.27 | L31 | class; supplier unresolved |
| 603655 crown class | 1.60300 | 65.46 | L32 | class; supplier unresolved |
| J-FKH1 spectral proxy | 1.49782 | 82.52 | L33 | class; supplier unresolved; ED-role correlation only |
| 001255 high-index flint class | 2.00069 | 25.45 | L41 | class; supplier unresolved |
| 806409 class (supplier unresolved) | 1.80610 | 40.94 | L42, L51b | class; supplier unresolved |
| 804466 lanthanum-flint class | 1.80400 | 46.58 | L43 | class; supplier unresolved |
| 487704 crown class | 1.48749 | 70.41 | L52 | class; supplier unresolved |

Several coordinates have very close or exact matches in current public catalogs. Examples include OHARA S-LAH59 near
1.81600/46.62, OHARA S-LAH65V at 1.80400/46.58, SCHOTT N-FK5 at 1.48749/70.41, and HIKARI J-LASFH17 near
2.00069/25.45. These are catalog comparison points, not production identities. The runtime resolver can use these coordinate classes as supplier-neutral spectral proxies; the patent itself does not identify the supplier.

The sole very-high-Abbe coordinate, L33 at νd = 82.52, is compatible with an ED-class role and converges with Nikon's
production specification of one ED element. It does not by itself establish anomalous partial dispersion, a particular
Sellmeier curve, or apochromatic correction. No `nC`, `nF`, `ng`, or `dPgF` values are authored in the data file.

## Focus Mechanism

The patent specifies **internal focusing by G2**. In ¶0066 it states that focusing from infinity toward a near object is
performed by moving the second lens group toward the object along the optical axis. The production lens is likewise
marketed as IF, and Nikon specifies a minimum focus distance of 0.38 m from the focal plane.

The patent does **not** publish a numerical close-focus spacing row, G2 focus travel, focus-dependent adjacent gaps, or an
intermediate focus state for Example 4. The 0.38 m production MFD is one external observable and does not uniquely solve
the internal group displacement.

The implemented focus status is therefore **`NO_INTERNAL_RECONSTRUCTION`**. All five variable-spacing entries in the data
file repeat their infinity value in the nominal “close” slot at each zoom keyframe. The viewer thus preserves the published
infinity-focus zoom geometry rather than fabricating a close-focus internal model.

The 0.38 m value in `closeFocusM` is manufacturer metadata for the production lens. It must not be read as evidence that
the rendered internal group positions reproduce the production lens at 0.38 m.

## Aspherical Surfaces

Example 4 has three aspherical surfaces: source surfaces 6, 13, and 25, represented in the data file as `6A`, `13A`, and
`25A` (Table 14; ¶0111–¶0112).

The patent defines the sag by

$$
S(y)=\frac{y^2/r}{1+\sqrt{1-\kappa y^2/r^2}}+A_4y^4+A_6y^6+A_8y^8+A_{10}y^{10},
$$

with $A_2=0$ and `E-n` meaning multiplication by $10^{-n}$ (¶0067–¶0069). LensVisualizer's standard conic form uses
$\sqrt{1-(1+K)(h/R)^2}$, so the exact conversion is **K = κ - 1**. Every Example 4 surface has κ = 1.0000; therefore all
three are stored with **K = 0**. Because the model scale is s = 1.0, the published aspherical coefficients are not rescaled.

| Surface | Physical element | K after conversion | A4 | A6 | A8 | A10 |
|---|---|---:|---:|---:|---:|---:|
| `6A` | L21 object side | 0 | +3.30880E-08 | -3.84340E-08 | +7.47270E-11 | -1.03500E-13 |
| `13A` | L24 image side | 0 | -1.43270E-05 | -9.77370E-08 | +4.07760E-10 | -3.09250E-12 |
| `25A` | L51 object side | 0 | -3.96100E-05 | +4.06470E-09 | -9.63610E-11 | 0.00000E+00 |

The patent itself supplies specific correction statements for the two G2 aspheres. An asphere at the most object-side
surface of G2 is described as desirable for wide-end field-curvature and distortion correction (¶0050), while an asphere
at the most image-side surface of G2 is described as desirable for tele-end spherical-aberration correction (¶0046).
Those statements correspond to `6A` and `13A` in Example 4.

The patent does not publish semi-diameters, so the following departures are **model-dependent**, evaluated only at the
verified modeled rims used in the final data revision:

| Surface | Modeled semi-diameter | Polynomial departure from K=0 base conic | Rim-slope angle |
|---|---:|---:|---:|
| `6A` | 12.8 mm | -0.126519 mm | 6.920° |
| `13A` | 9.9 mm | -0.219984 mm | 6.345° |
| `25A` | 13.3 mm | -1.311246 mm | 21.060° |

These are executed geometry results, not patent-published manufacturing dimensions. In particular, the large modeled
peripheral departure of `25A` should not be converted into a manufacturing-process claim. The patent's general text allows
several asphere manufacturing types, but Example 4 does not identify whether these particular surfaces are molded glass,
polished glass, or composite structures.

## Chromatic Correction Strategy

The source data show a broad dispersion spread rather than a single homogeneous glass family. High-index, low-Abbe members
such as L11/L53 (1.84666/23.78), L23 (1.80809/22.79), and L41 (2.00069/25.45) coexist with higher-Abbe members such as
L32 (1.60300/65.46), L52 (1.48749/70.41), and especially L33 (1.49782/82.52).

Cemented pairs CL1 through CL5 therefore combine materials of differing power sign and dispersion. That is a source-level
structural observation. The exact secondary-spectrum behavior cannot be established from nd/νd alone, and the final data
do not contain line indices or validated supplier Sellmeier identities. The design is consequently not labeled APO, and
no anomalous-partial-dispersion correction magnitude is claimed.

Nikon's production specification states one ED element. L33 is the strongest patent-coordinate candidate for that role
because it is the sole very-high-Abbe element, but the patent does not name it ED and no manufacturer source explicitly
maps the production ED element to this patent position.

## Conditional Expressions

JP 2011-221421 A defines seven principal conditions for this zoom family. The final-model first-order calculations reproduce
Example 4's Table 16 values after rounding and satisfy the stated bounds.

| No. | Patent condition | Calculated from final model | Table 16 | Status |
|---|---|---:|---:|---|
| (1) | $0.10 < f_3/(-f_2) < 1.45$ | 1.26320 | 1.26 | within bounds |
| (2) | $0.58 < (-f_2)/f_w < 0.95$ | 0.68407 | 0.68 | within bounds |
| (3) | $(d_{4w}-d_{4t})/f_w > 0$ | 0.18650 | 0.19 | within bound |
| (4) | $0.50 < f_3/(-f_4) < 1.50$ | 0.74627 | 0.75 | within bounds |
| (5) | $2.5 < f_1/f_w < 20.0$ | 3.89012 | 3.89 | within bounds |
| (6) | $0.40 < f_2/f_4 < 1.00$ | 0.59077 | 0.59 | within bounds |
| (7) | $3.0 < f_1/f_3 < 10.0$ | 4.50185 | 4.50 | within bounds |

The patent's explanatory text ties these ratios to balancing zoom ratio, compactness, aberration variation, and
stabilization behavior (¶0024–¶0044). Those explanations are claims of the patent. The table above only verifies that the
selected Example 4 prescription lies inside the stated mathematical ranges; it does not independently prove every stated
aberrational rationale.

Condition (3) is especially visible in the source spacings: d4 contracts from 5.90657 mm at wide to 1.30000 mm at tele,
so the normalized change is positive as required. This is consistent with the patent's general requirement that G4 and G5
approach one another toward the telephoto end.

## Image Stabilization

Example 4 performs vibration reduction by shifting **CL4**, the cemented L41/L42 negative component inside G4, in a
direction having a component perpendicular to the optical axis (¶0108). The production lens is marketed with Nikon VR,
which is one of the convergent product-correlation points.

The patent's general discussion states that using at least part of G4 as the stabilization group supports correction of
field-curvature variation and decentered coma during shake correction while retaining a compact construction (¶0035,
¶0041, ¶0049, ¶0056). The final data do not simulate this decenter motion because Example 4 publishes no transverse travel,
shift angle, or stabilization operating point.

The stabilization mechanism therefore appears in the descriptive metadata and analysis but not as a LensVisualizer
movement control. This distinction prevents a qualitative source mechanism from being converted into an unsupported
numerical VR model.

## Verification Summary

The final data revision was numerically replayed with two separately coded first-order methods: sequential height/reduced-
angle tracing and explicit ABCD matrix multiplication. Their maximum matrix disagreement is below 2×10^-13 at all three
published zoom states.

| State | Calculated EFL | Source f | Calculated BFD | Source Bf | Calculated total track | Source total length |
|---|---:|---:|---:|---:|---:|---:|
| Wide | 24.70014 mm | 24.70 mm | 38.81815 mm | 38.819 mm | 124.69835 mm | 124.699 mm |
| Intermediate | 48.00024 mm | not printed | 47.46936 mm | not printed | 139.09415 mm | not printed |
| Tele | 87.20027 mm | 87.20 mm | 56.18994 mm | 56.191 mm | 156.69452 mm | 156.696 mm |

The surface-by-surface Petzval calculation uses $\phi/(n n')$ at every refracting surface. Its algebraic sum is
+0.0030305105 mm^-1, corresponding to an algebraic reciprocal radius of +329.98 mm. This is a first-order curvature result,
not a direct measurement of the best-focus field surface in the fully aberrated lens.

The aperture model requires separate treatment because the patent does not publish stop diameter. Figure 8's FNO labels
3.50, 5.00, and 5.78 are used as calibration targets. The wide-state modeled clear stop semi-diameter is 7.41026 mm. The
intermediate and tele effective radii required by the Figure 8 targets are 6.23970 mm and 6.27917 mm. These calibration
outputs do not convert the missing physical diaphragm dimensions into source facts.

Table 13's F.NO 3.60/5.80 discrepancy is intentionally retained. It is not hidden by widening a comparison tolerance. The
production lens's marketed f/3.5–4.5 range remains a third, separate authority and is not substituted for either patent
statement.

The patent also omits semi-diameters. The adopted surface apertures are modeled from d-line ray-envelope geometry,
current edge/rim/conic/cross-gap policies, and a qualitative comparison with Figure 7. All modeled elements retain positive
edge thickness; actual rim-slope and conic-domain checks pass. Exact meridional d-line field tracing was sampled at five
zoom coordinates. Wide full-field rays show natural pupil truncation, but the chief ray survives and no cemented/material
interface is the first modeled clip in the sampled states.

Repository integration now passes surface validation and production render diagnostics with zero hidden trims across
15 sampled zoom/focus states. All three source zoom stations trace to the full-frame corner. Figure 7 on PDF page 25
was reviewed at high resolution; its leader lines contaminate automatic envelope measurements, while the optical rims
agree closely enough with the existing modeled apertures to retain them.

Runtime spectral coverage is 16/18 material regions. L33 now names J-FKH1 as a coordinate-compatible proxy
(catalog 1.49782/82.57 versus patent 1.49782/82.52); the old 498825 label did not resolve to the catalog's 498826 code.
The two thin 1.53610/41.42 regions remain explicitly unmatched. No manufacturer identity, resin chemistry, or APD tag
is inferred from their coordinates.

## Sources / References

1. **Japan Patent Office.** JP 2011-221421 A, published 2011-11-04, application P2010-92771, filed 2010-04-14. Example 4:
   ¶0106–¶0117; Table 13 (PDF pp. 19–20), Table 14 (p. 20), Table 15 (p. 20), Table 16 (p. 20), Figures 7–8 (p. 25).
   General mechanism and condition discussion: ¶0024–¶0069.
2. **Nikon Corporation.** “AF-S NIKKOR 24-85mm f/3.5-4.5G ED VR,” official F-mount product page. Product specifications
   used here include FX/full-frame coverage, 24–85 mm focal range, f/3.5–4.5 maximum aperture, 16 elements in 11 groups,
   one ED and three aspherical elements, IF, VR, and 0.38 m minimum focus distance.
   https://imaging.nikon.com/imaging/lineup/lens/f-mount/zoom/normalzoom/af-s_24-85mmf_35-45g_ed_vr/index.html
3. **Nikon Inc.** “Nikon Expands Acclaimed NIKKOR Lens Lineup with the Addition of the New 18-300mm VR All-in-One High
   Power Super Zoom Lens and the 24-85mm VR Lens,” press release, 2012-06-14. Used for announcement timing, end-of-June
   2012 availability, and the production 16/11, one-ED, three-aspherical specification.
   https://www.nikonusa.com/press-room/nikon-expands-acclaimed-nikkor-18-300-24-85
4. Glass class comparisons were checked against current authoritative OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA
   catalogs during source verification. The data file intentionally retains class-level or `Unmatched (...)` labels
   where the patent does not establish a supplier/melt identity.
