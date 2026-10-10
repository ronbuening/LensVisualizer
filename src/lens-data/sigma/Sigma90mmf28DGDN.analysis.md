## Patent Reference and Design Identification

**Patent:** JP 2022-061515 A  
**Application Number:** JP 2020-169465  
**Filed:** 2020-10-07  
**Published:** 2022-04-19  
**Inventor:** Hitoshi Murakami  
**Applicant:** Sigma Corporation  
**Title:** Imaging Optical System (結像光学系)  
**Embodiment analyzed:** Numerical Example 2

The prescription is transcribed from the original Japanese application, Numerical
Example 2, printed pages 13–14 (PDF pages 14–15). Figure 6 on printed page 22
(PDF page 23) supplies the optical section. The PDF's extra cover page is the
Patent Abstracts of Japan sheet, which romanizes the inventor's name as
MURAKAMI HITOSHI. [1]

The example is associated with the Sigma 90mm F2.8 DG DN | Contemporary on the
basis of its construction; the exact production prescription is unconfirmed.
Several observations converge:

1. The example and product both contain 11 elements in 10 air-separated groups.
2. Sigma's construction diagram marks elements 2, 3, 5, 7 and 9 as SLD glass
   and element 7 as the aspherical element. In the example these are L12, L13,
   L15, L22 and L31 (νd 81.61, 81.61, 75.50, 81.54 and 63.88), and L22 carries
   both aspherical surfaces. [2]
3. The computed infinity focal length is 87.30 mm, close to the marketed
   90 mm. The patent's aperture is F2.90, compared with the marketed F2.8.
4. The patent's inner-focus arrangement is consistent with the manufacturer's
   inner-focus specification. The product uses a stepping motor. [2, 3]
5. The October 2020 application predates the September 2021 product announcement.

There are also limits. The patent's only near state has an object-to-image
distance of 1.793 m at a magnification of −1/20, whereas the product focuses
to 0.5 m at 1:5. The model does not extend the focus travel to the marketed
distance. The optical track is measured from the first vertex to the
image plane; the manufacturer's barrel length is measured from the filter
surface to the mount. Those lengths cannot establish an exact match directly.

The represented production variants are full-frame L-Mount and Sony E-mount.
The manufacturer states that camera optical correction contributes to the
product's design balance. No digital correction is included in the optical
prescription or the calculations below. [2, 3]

## Optical Architecture

The three functional groups have positive, positive and negative net powers,
respectively. These functional groups must not be confused with the ten
physical air-separated groups. The source identifies the fixed front group L1,
fixed stop, moving focus group L2 and fixed rear group L3. [1, ¶0095]

At infinity, their isolated group focal lengths are:

| Functional group | Source surfaces | Focal length |
|---|---|---:|
| L1 | 1–9 | +73.66560 mm |
| L2 | 11–16 | +35.90098 mm |
| L3 | 17–22 | −28.49132 mm |

The first-vertex-to-image track is 78.0199 mm. Relative to the computed infinity
EFL, its ratio is 0.893704, so the source prescription is a compact telephoto
arrangement by this stated reference-plane definition. The back focal distance
is 19.12918260 mm, compared with the tabulated last image gap of 19.1295 mm.
This is not a retrofocus prescription.

The calculated front principal plane is 43.94898 mm objectward of the first
vertex. The rear principal plane is 68.17032 mm objectward of the final lens
vertex. These paraxial principal planes characterize the complete system and
are not physical group locations.

The negative E1 subsystem at the rear of L1 comprises the cemented L14/L15
pair, surfaces 7–9, as described in ¶0096 and drawn in Figure 6. It computes
−39.13435 mm. The source group table instead prints E1 beginning at surface 8;
that isolated surface-8-to-9 lens computes +136.67588 mm, inconsistent with
the printed −39.13 mm. The interpretation follows the described and drawn
cemented subsystem. The printed start value remains a documented discrepancy;
no radius, spacing, glass index or physical interface is altered.

## Element-by-Element Analysis

The focal lengths below are thick-element values with air on both sides,
computed from each element's two curvature surfaces, center thickness and
printed d-line index. For cemented elements these are hypothetical standalone
powers, not the actual power of the shared interface in the assembled lens.
All glass names are catalog equivalents chosen by index and Abbe number;
the patent does not identify the suppliers or production melts.

### L11 — Positive Meniscus

nd = 1.76385, νd = 48.49. Glass: S-LAH96 (OHARA) equivalent, supplier unconfirmed. f = +121.6 mm.

L11 is the first fixed positive meniscus, with its convex face toward the
object. Its relatively weak positive contribution precedes the more strongly
curved low-dispersion positive elements. The patent describes the front-group
shape sequence in ¶0096; attributing a unique spherical-aberration correction
to this one element would require a sensitivity analysis not supplied here.

The patent lists ΔPgF = −0.0022 for this glass without stating its normal
line, so that figure is quoted here and is not used as the model's `dPgF`.

### L12 — Positive Meniscus

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA) equivalent, supplier unconfirmed — marked SLD in Sigma's construction diagram. f = +79.7 mm.

L12 is a positive meniscus with a much more strongly curved front surface.
It is one of the positive low-dispersion lenses covered by the patent's
partial-dispersion condition (7) for the front group. HOYA FCD1 matches
the printed d-line index and Abbe number.

The patent lists ΔPgF = +0.0373. Its positive power and high Abbe
number are consistent with the group's stated secondary-spectrum strategy;
that observation does not demonstrate an individual aberration contribution.

### L13 — Biconvex Positive

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA) equivalent, supplier unconfirmed — marked SLD in Sigma's construction diagram. f = +79.0 mm.

L13 is biconvex, with a weakly curved image-side face. It supplies another
positive low-dispersion contribution ahead of the cemented subsystem.
The patent prints the same index, Abbe number and ΔPgF = +0.0373 as for L12.

Its standalone focal length is close to L12's, but the distinct curvatures,
thicknesses and axial positions prevent treating the two as interchangeable.

### L14 — Negative Meniscus

nd = 1.80610, νd = 40.73. Glass: NBFD13 (HOYA) equivalent, supplier unconfirmed. f = −31.1 mm.

L14 is the negative meniscus member of the E1 cemented pair. Its nearly
flat positive-radius front and substantially stronger image-side curvature
produce negative standalone power. The source places the pair at the rear of
the fixed first group. [1, ¶0096]

At surface 8, light enters L15 directly from L14. The interface therefore
uses the index difference between the two glasses, not an intervening air
layer. NBFD13 is one of several HOYA glasses, including molding variants,
that share this index and Abbe number, so the match does not identify the
glass uniquely.

### L15 — Positive Meniscus

nd = 1.55032, νd = 75.50. Glass: FCD705 (HOYA) equivalent, supplier unconfirmed — marked SLD in Sigma's construction diagram. f = +136.7 mm.

L15 is the positive meniscus member cemented to L14. The pair's net
standalone power remains negative despite this positive component. The
computed cemented-group focal length is −39.13435 mm, distinct from both
individual element focal lengths and from its in-situ effect on the full lens.

The patent's ΔPgF = +0.0274 enters the mean for positive lenses in L1.
HOYA FCD705 matches the printed index and Abbe number; its catalog
dispersion is used in the model, with no claim about the actual supplier.

### L21 — Negative Meniscus

nd = 1.78590, νd = 43.93. Glass: NBFD11 (HOYA) equivalent, supplier unconfirmed. f = −38.8 mm.

L21 leads the movable second group with a concave face toward the object.
Its negative power is followed by two positive elements, giving L2 positive
net power. This negative-leading group architecture is central to the
patent's disclosed arrangement. [1, ¶0095, ¶0097]

The model keeps the patent's Abbe number of 43.93; the HOYA NBFD11
catalog row gives 43.94.

### L22 — Biconvex Positive (2× Asph)

nd = 1.49700, νd = 81.54. Glass: S-FPL51 (OHARA) equivalent, supplier unconfirmed — marked SLD and aspherical in Sigma's construction diagram. f = +45.5 mm.

L22 is the double-sided aspheric positive element. The paraxial element
power uses the vertex curvatures; the fourth- and higher-order sag terms
do not change that first-order power. They change finite-height behavior.

OHARA S-FPL51 matches the tabulated index and Abbe number.
This is separate from the HOYA FCD1 equivalents used for L12/L13, whose printed
Abbe number is different. An exact production molding material is not
established by either numerical match.

### L23 — Biconvex Positive

nd = 1.72916, νd = 54.67. Glass: TAC8 (HOYA) equivalent, supplier unconfirmed. f = +34.3 mm.

L23 is the final positive element of the moving focus group. Its stronger
image-side curvature supplies substantial positive standalone power. Together
with L21 and L22 it forms the positive L2 group described in ¶0097.

L23 moves rigidly with the other two L2 elements. Its separation from the
fixed rear group increases as L2 moves toward the object for near focus.

### L31 — Biconcave Negative

nd = 1.61997, νd = 63.88. Glass: PCD40 (HOYA) equivalent, supplier unconfirmed — marked SLD in Sigma's construction diagram. f = −33.2 mm.

L31 is the biconcave negative front member of fixed L3. The patent
describes this shape in ¶0098. It is followed by another negative element
and then a positive terminal element.

Its relatively high Abbe number contributes to the patent's rear-group
negative-versus-positive Abbe-number separation. The PCD40 catalog
dispersion does not establish the behavior of an unknown production melt.

### L32 — Negative Meniscus

nd = 1.48749, νd = 70.44. Glass: FC5 (HOYA) equivalent, supplier unconfirmed. f = −53.1 mm.

L32 is a negative meniscus with its concave face toward the object.
The patent gives this shape and ordering in ¶0098. Its low index and high
Abbe number match HOYA FC5, a fluor crown.

The patent links the rear group's Abbe-number contrast to lateral-color
correction because off-axis rays have appreciable heights there. That group
argument should not be read as a measured isolated correction by L32.

### L33 — Positive Meniscus

nd = 1.85451, νd = 25.15. Glass: NBFD25 (HOYA) equivalent, supplier unconfirmed. f = +76.9 mm.

L33 is the positive terminal meniscus. Its rear radius is very large but
finite; the model keeps the patent's 1000.0000 mm radius instead of
replacing it with a plane. The patent describes it as object-convex. [1, ¶0098]

Its low Abbe number contrasts with the two negative rear lenses. The net
power of L3 remains negative. HOYA NBFD25 matches the printed index and
Abbe number; it is not a confirmed production glass.

## Glass Identification and Selection

The HOYA catalog and OHARA data sheets supply the equivalents below.
The model keeps the patent's printed `nd`/`νd` values; none is replaced
by a catalog value. [4–6]

| Elements | Catalog equivalent | Patent nd | Patent νd |
|---|---|---:|---:|
| L11 | S-LAH96 | 1.76385 | 48.49 |
| L12 | FCD1 | 1.49700 | 81.61 |
| L13 | FCD1 | 1.49700 | 81.61 |
| L14 | NBFD13 | 1.80610 | 40.73 |
| L15 | FCD705 | 1.55032 | 75.50 |
| L21 | NBFD11 | 1.78590 | 43.93 |
| L22 | S-FPL51 | 1.49700 | 81.54 |
| L23 | TAC8 | 1.72916 | 54.67 |
| L31 | PCD40 | 1.61997 | 63.88 |
| L32 | FC5 | 1.48749 | 70.44 |
| L33 | NBFD25 | 1.85451 | 25.15 |

Nine of the eleven elements match HOYA catalog rows, and L11 and L22 match
OHARA S-LAH96 and S-FPL51. Other makers' catalogs were not surveyed, and a
matching index and Abbe number cannot identify the supplier when several
manufacturers or molding variants share similar values.

Sigma's construction diagram marks five elements as SLD glass: L12, L13, L15,
L22 and L31. Their printed Abbe numbers (81.61, 81.61, 75.50, 81.54 and 63.88)
are consistent with that marking. The SLD assignment is inferred from the
diagram, not stated in the patent. [2]

The patent prints ΔPgF for L11, L12, L13 and L15 but does not define its
normal line. Those values are quoted in the element notes and used unchanged
to evaluate the patent's condition (7); they are not copied into the model's
`dPgF` values.

The model's C-, F- and g-line indices are taken from the catalog glasses
above. Its `dPgF` values are computed from the same catalog data against
the normal line 0.6438 − 0.001682νd; they are not conversions of the
patent's ΔPgF figures. Differences between candidate equivalent glasses,
rounding in the printed table and unknown production melts limit what can be
said about chromatic performance, and no apochromatic claim is made.

The positive front elements supply the mean ΔPgF in condition (7),
while the rear negative/positive Abbe separation supplies condition (8).
The patent connects these group-level choices with secondary-spectrum and
lateral-color correction. [1, ¶0065–¶0073] The present analysis does not assign
independent aberration-cancellation percentages to individual lenses.

## Focus Mechanism

L2 moves objectward while L1, the stop and L3 remain fixed relative to the
image plane. This follows the prose and Figure 6, and the printed spacings
quantify the travel. [1, ¶0095, Numerical Example 2]

| Quantity | Infinity | Published near |
|---|---:|---:|
| d10, stop to L2 | 9.9260 mm | 8.5353 mm |
| d16, L2 to L3 | 2.1000 mm | 3.4907 mm |
| Object to first vertex | Infinity | 1715.0000 mm |
| Object to image plane | Infinity | 1.7930199 m |
| Computed EFL | 87.29950360 mm | 79.76744872 mm |
| First vertex to image | 78.0199 mm | 78.0199 mm |

The two gap changes are equal and opposite, giving 1.3907 mm of rigid
objectward motion. The paraxial magnification at the near state is −0.0500
(−1/20). The paraxial image of the 1715 mm object lies 19.1293 mm behind the
last surface, against the printed 19.1295 mm; the 0.0002 mm difference is
within the rounding of the printed table, and the image plane is left where
the patent puts it.

Both printed states are kept. Spacings between them are linearly
interpolated and are not positions the patent publishes. Only the printed
near state has a known object distance, measured from the first surface as
¶0081 defines it.

The product's 0.5 m minimum focus lies outside the range the patent
tabulates, and no group motion is reconstructed for it; the patent's near
magnification of about 1:20 is not the marketed 1:5 maximum. The stepping
motor is a manufacturer statement, not something the optical table shows. [2, 3]

## Aspherical Surfaces

Surfaces 13A and 14A are the two faces of L22. Paragraph 0083 defines

$$z(y)=\frac{y^2/r}{1+\sqrt{1-(1+K)(y/r)^2}}+\sum_p A_p y^p.$$

The patent uses the standard `(1+K)` radicand. Both conic constants are zero;
no conic offset conversion is needed. No scaling is applied to the
prescription. Radii and sag are in millimetres, and coefficient order p has
units mm^(1−p).

| Coefficient | 13A | 14A |
|---|---:|---:|
| K | 0.00000 | 0.00000 |
| A4 | −1.29381E−05 | +2.61465E−05 |
| A6 | −3.89236E−08 | −1.34328E−08 |
| A8 | −2.08711E−10 | −2.13221E−10 |

These are all the terms the patent prints for Example 2. Its equation also
allows odd orders and the patent lists none here, so every other term is zero.

At the model's 9.8 mm semi-diameter, which is measured from Figure 6 because
the patent gives no clear diameters, the departures from the vertex-radius
sphere are −0.1716 mm on 13A and +0.2111 mm on 14A. The surface slopes at
that rim are about 12.0° and 4.6°.

All three coefficients on 13A are negative, reducing positive sag toward
the rim relative to its sphere. On 14A the positive quartic contribution
dominates the negative sixth- and eighth-order contributions within the
modeled aperture. This describes surface shape, not an isolated aberration
budget. The product is described as using a glass-molded aspheric element;
that manufacturing statement does not identify the exact patent melt. [2]

## Conditional Expressions

The following values use the unscaled infinity prescription and the patent's
own definitions and printed ΔPgF entries. [1, ¶0013–¶0078;
condition table on printed pages 18–19]

| Condition | Calculated value | Patent value | Stated interval |
|---|---:|---:|---|
| f1/f23 | −0.480017 | −0.48 | −0.90 to +0.30 |
| f1/f | 0.843826 | 0.84 | 0.60 to 1.30 |
| LT/f | 0.893704 | 0.89 | 0.60 to 1.30 |
| LT/Y | 3.607023 | 3.61 | 1.00 to 4.50 |
| Y/BF | 1.130714 | 1.13 | 0.60 to 1.60 |
| ENP/f | 0.317725 | 0.32 | 0.10 to 0.80 |
| Mean patent ΔPgF of positive L1 lenses | 0.024950 | 0.025 | 0.001 to 0.040 |
| Mean negative L3 νd minus positive L3 νd | 42.010000 | 42.01 | Greater than 22 |
| Absolute f3/f | 0.326363 | 0.33 | 0.10 to 1.00 |

All nine reproduce the displayed rounding and satisfy the open inequalities.
The entrance-pupil position in condition (6) is measured from the first
vertex. Conditions (7) and (8) concern group material choices; satisfying
them is not an independent demonstration of the complete lens's color
performance. The surface-by-surface Petzval sum is +0.000558495 mm⁻¹ at the
d line. It is a paraxial curvature invariant, not the actual sagittal or
tangential best-focus surface.

## Model Scope and Limitations

The patent gives no stop diameter. The model's stop radius, 9.7999 mm, is the
height at which a real axial ray entering at the F2.90 entrance-pupil radius
of 15.0516 mm crosses the stop, so agreement with F2.90 is by construction
and not an independent check.

Projected paraxially, the same stop gives an entrance-pupil radius of
15.5756 mm and f/2.80; the 3.5 % difference is pupil aberration in the front
group. The real-ray value 1/(2 sin u′) through the full stop is 2.897 at
infinity and 2.880 at the near state, against the printed F2.90 and F2.89.

The patent gives no clear apertures; the semi-diameters are measured from
Figure 6. Each element takes its drawn rim height, except that the concave
rear face of L15 and the concave front face of L32 stop at 11.0 mm and
10.9 mm, near where the figure ends those curves at a flat annulus inside
the rim. With those rims the axial F2.90 beam passes unclipped, while the
full-aperture beam to the 21.63 mm image corner is partly vignetted by the
drawn rims, so full pupil transmission at every field point is not claimed.

A real chief ray reaches the 21.63 mm image height unclipped at both printed
states. Its object-space slope is 13.18° at infinity and 13.23° at the near
state, against the printed half-fields of 13.185° and 13.255°. The angle the
near object point subtends at the first vertex, 13.45°, is a different
convention and not a discrepancy; the patent does not say which one its
near value uses. At infinity the image height exceeds f·tan ω by about 5.8 %,
the pincushion distortion plotted in Figure 7.

The patent lists no cover glass or filter plate, and none is modeled. Radii,
spacings, indices, asphere coefficients and both focus states are the printed
values; the semi-diameters, the stop radius and the catalog dispersion data
are the model's additions. The production association and the near-focus
range remain subject to the limits stated above.

## Sources

1. Japan Patent Office, **JP2022061515A**, Imaging Optical System, 2022-04-19.
   Original Japanese publication and PAJ cover preserved from
   [DPMA's full-document service](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=JP2022061515A).
   Numerical Example 2: printed pp13–14; equation ¶0083: p11;
   Figure 6: p22; conditions: pp18–19. PDF pagination adds one cover page.
2. Sigma Corporation, [90mm F2.8 DG DN | Contemporary](https://www.sigma-global.com/en/lenses/c021_90_28/),
   official specifications and construction information, accessed 2026-10-04.
3. Sigma America, [Sigma Introduces 90mm F2.8 DG DN Contemporary Lens](https://press.sigmaphoto.com/corporate/09/sigma-introduces-90mm-f2-8-dg-dn-contemporary-lens/),
   2021-09-07, accessed 2026-10-04.
4. HOYA, [Optical Glass Catalog, 2026-07-07, including obsolete glasses](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf),
   primary coefficient rows for FCD1, NBFD13, FCD705, NBFD11, TAC8, PCD40,
   FC5 and NBFD25; catalog revision rechecked 2026-10-04.
5. OHARA, [S-LAH96 primary data sheet, 25-04](https://www.ohara-inc.co.jp/assets/cn/product/pdf/cslah96.pdf),
   dispersion constants and C/d/F/g properties, accessed 2026-10-04.
6. OHARA, [S-FPL51 primary data sheet, 25-04](https://www.ohara-inc.co.jp/assets/product/pdf/jsfpl51.pdf),
   dispersion constants and C/d/F/g properties, accessed 2026-10-04.
