## Patent Reference and Design Identification

**Patent:** JP 2012-234169 A
**Application Number:** JP 2012-095040
**Filed:** April 18, 2012
**Priority:** JP 2011-091864, April 18, 2011
**Published:** November 29, 2012
**Inventor:** Noriyuki Ogasawara
**Assignee:** Sigma Corporation
**Title:** 防振機構を備えた結像光学系 (Imaging optical system with anti-vibration mechanism)
**Example details:** 実施例1, table on PDF pp. 21–22; Fig. 1 (lens section) and Fig. 2 (longitudinal aberrations) on p. 32.

The patent describes a compact standard lens for large sensors: a positive first group, the stop, a positive second
group that moves toward the object for focusing, and a negative third group in which one negative element is
decentered for image stabilization. It gives fourteen numerical examples. Example 1 (f = 30.83 mm, F2.89,
2ω = 50.49°) is the closest of them to Sigma's 30mm F2.8 DN lens for Micro Four Thirds and Sony E. Sigma announced it
as the 30mm F2.8 EX DN in January 2012 and reissued the same optics in a new barrel as the 30mm F2.8 DN | Art, announced
in January 2013 and shipped from March 2013. Sigma's construction drawings for the two versions are identical.

The correlation is probable rather than exact. In its favour:

1. **Construction.** Sigma lists 7 elements in 5 groups. Example 1 has the same sequence as Sigma's drawing: a
   cemented doublet, the iris, a second cemented doublet, then three single elements.
2. **Aspherical elements.** Sigma's drawing marks L5 and L7 as aspherical; Example 1's aspheres are the rear faces of
   L5 (S9) and L7 (S13). Examples 2 and 3 carry a single asphere, on L5 and L4 respectively.
3. **Focal length, aperture and field.** f = 30.83 mm at F2.89 against the marketed 30 mm F2.8, and 2ω = 50.49°
   against Sigma's 50.7° on E-mount APS-C. Among the other examples near 30 mm, Examples 4 and 11 have eight
   elements, Examples 5 and 6 are F2.47, and Example 7 is 28.77 mm (2ω = 53.6°).
4. **Shape.** Sigma's drawing matches Example 1's nearly flat DB1 interface, the strongly concave front of L3, the
   biconvex L5, and L6 with a nearly flat front and a strongly concave rear face.
5. **Timing.** The application is Sigma's own, with April 2011 priority, ahead of the EX DN announcement.

Against it: Sigma's 2013 press release says the lens includes a double-sided aspherical element, and LensTip's 2012
specification lists two glass-molded aspherical elements, one of them double-sided, so production has three aspherical
faces against Example 1's two single-sided ones. Sigma also draws L7 nearly plano-convex with a strongly curved rear
face, where Example 1's L7 is a weak biconvex (R = 88.74 / −67.22 mm). The production lens has no stabilizer, and its
0.30 m minimum focus is closer than the patent's 500 mm state. The production prescription is therefore a refinement of
this design rather than Example 1 itself. The catalog's SIGMA 30mm f/2.8 of the DP2 Merrill is a different design
(JP 2013-156459 A: 8 elements / 6 groups, unit focus of the front group).

## Optical Architecture

The power sequence is positive – stop – positive – negative, with the third group split into a negative 3a and a
positive 3b element:

| Group | Elements | f (mm) | Role |
| --- | --- | --- | --- |
| G1 | DB1 (L1 + L2) | +99.4 | Weak positive front group, fixed |
| G2 | DB2 (L3 + L4), L5 | +22.8 | Main positive power; moves for focusing |
| G3a | L6 | −34.0 | Negative; the patent's stabilization element |
| G3b | L7 | +49.9 | Weak positive; controls the exit angle |

G3 as a whole is weakly negative (f = −163.1 mm). The patent introduces it so that the aberrations of the moving G2
and the fixed G3 change in opposite senses during focusing (¶0040–0043); it also shortens the track and the focus
travel (¶0045). G1 is kept weaker than G2 + G3 so that the exit angle at the sensor stays small (¶0046). The track
from S1 to the image is 52.27 mm, with a 20.40 mm back focus.

For stabilization the patent shifts L6 perpendicular to the axis (¶0087; Figs. 6 and 7 show a 0.5 mm shift) and
places the positive L7 behind it to keep the decentering aberrations small (¶0049–0057). Sigma sells the lens without
a stabilizer, and the model keeps L6 centred.

## Element-by-Element Analysis

### DB1 — L1 and L2 (cemented, G1)

- **L1 — Biconvex Positive.** nd = 1.88300, νd = 40.80. Glass: TAFD30 (HOYA catalog equivalent). f = +19.80 mm.
- **L2 — Biconcave Negative.** nd = 1.58144, νd = 40.89. Glass: E-FL5 (HOYA catalog equivalent). f = −22.02 mm.

The front face of L1 (R = 17.77 mm) does the collecting. The cemented interface is almost flat (R = −1000 mm), so it
carries little power and the doublet is insensitive to decentering of its two halves; condition (4) requires
\|R_DB1 / f\| > 1.00, and Example 1 gives 32.44 (¶0069–0072). The concave rear face of L2 (R = 12.97 mm), just ahead
of the iris, is the doublet's negative surface. With it at the rear of G1, the group's internal power distribution
approaches a telephoto form, which keeps the lens short (¶0071). The two glasses have almost the same Abbe number, so
the pair does little for colour by itself; its index step (1.883 against 1.581) is what the cemented form exploits.
The doublet as a whole is weakly positive (f = +99.4 mm).

### DB2 — L3 and L4 (cemented, front of G2)

- **L3 — Biconcave Negative.** nd = 1.69895, νd = 30.05. Glass: E-FD15 (HOYA catalog equivalent). f = −12.20 mm.
- **L4 — Biconvex Positive.** nd = 1.80420, νd = 46.50. Glass: TAF3 (HOYA catalog equivalent). f = +15.79 mm.

The doublet is a meniscus concave toward the iris: the strongly curved front of L3 (R = −10.03 mm) and the convex rear
of L4 (R = −15.73 mm) both face the stop, which keeps off-axis aberrations low at the start of the focusing group. Its
net power is small (f = −130.5 mm). Its job is chromatic: the dense flint L3 against the lanthanum crown L4 corrects
the axial colour of the moving group (¶0066). Condition (5), \|R_DB2 / f\| > 0.85, keeps the interface (R = 58.72 mm,
1.90 f) weak enough to limit higher-order coma and astigmatism and the doublet's decentering sensitivity (¶0070).

### L5 — Biconvex Positive (1× Asph)

nd = 1.77250, νd = 49.62. Glass: TAF1 (HOYA catalog equivalent). f = +23.03 mm.

L5 supplies most of G2's power (G2: f = +22.8 mm) and closes the focusing group. Its rear face S9 is aspherical. The
patent prefers to place the second group's asphere on this biconvex element, which is the easiest to make accurately
(¶0082), and uses it to limit the change of aberrations during focusing (¶0081). The patent keeps G2 to these three
elements so that the focus group stays light (¶0079).

### L6 — Biconcave Negative (group 3a)

nd = 1.56732, νd = 42.84. Glass: E-FL6 (HOYA catalog equivalent). f = −34.00 mm.

L6 is the only negative element in G3, with a nearly flat front (R = −97.40 mm) and a strongly concave rear
(R = 24.14 mm). Its index is deliberately lower than that of L7: condition (6) sets n3a / n3b between 0.800 and 0.990,
and Example 1 gives 0.884. The low index makes L6 generate enough coma and distortion to offset the change in G2 during
focusing (¶0073–0074). In the patent L6 is also the stabilization element (¶0077, ¶0087).

### L7 — Biconvex Positive (1× Asph, group 3b)

nd = 1.77250, νd = 49.62. Glass: TAF1 (HOYA catalog equivalent). f = +49.91 mm.

The weak positive rear element lowers the chief-ray angle at the sensor without adding much aberration (¶0076). Its
rear face S13 is aspherical. Sigma's drawing shows this element with a nearly flat front and a strongly curved rear,
a different bending from Example 1's R = 88.74 / −67.22 mm.

## Glass Identification and Selection

| Glass (catalog equivalent) | nd | νd | Elements | Role |
| --- | --- | --- | --- | --- |
| TAFD30 (HOYA) | 1.88300 | 40.80 | L1 | High-index positive front element |
| E-FL5 (HOYA) | 1.58144 | 40.89 | L2 | Low-index negative partner in DB1 |
| E-FD15 (HOYA) | 1.69895 | 30.05 | L3 | Dense flint of the focusing doublet |
| TAF3 (HOYA) | 1.80420 | 46.50 | L4 | Lanthanum crown of the focusing doublet |
| TAF1 (HOYA) | 1.77250 | 49.62 | L5, L7 | Positive aspherical elements |
| E-FL6 (HOYA) | 1.56732 | 42.84 | L6 | Low-index negative group 3a |

Every printed nd / νd pair equals a HOYA catalog row; for TAF1 the catalog νd is 49.63. OHARA equivalents (S-LAH58,
S-TIM35, S-LAH65, S-LAH66, S-TIL26) lie within 0.1 in νd, so the labels identify the glass type, not the production
supplier. Sigma names no ED or SLD glass for this lens, and none appears in the prescription. Axial colour is
corrected mainly in DB2. The index contrast between the low-index L6 and the high-index L7 (condition 6) is a
monochromatic choice.

## Focus Mechanism

Inner focus: G2 (L3–L5) moves 1.3307 mm toward the object, while G1, the iris and G3 stay fixed and the back focus is
unchanged. The patent prints two states:

| Spacing | Infinity | 500 mm |
| --- | --- | --- |
| d4 (iris to L3) | 6.9859 | 5.6552 |
| d9 (L5 to L6) | 1.5000 | 2.8307 |
| Bf | 20.4045 | 20.4045 |

The printed near spacings focus the model at 500.07 mm object to image, at −0.069×, consistent with the patent's
500 mm shooting distance measured from the image plane. Sigma specifies 0.30 m and 1:8.1 for the production lens. That state
needs more travel than the patent prints and is not modeled; the focus slider ends at the patent's 500 mm, and
intermediate positions interpolate the two printed spacings linearly. A light focus group is one of the patent's aims
(¶0039, ¶0079). Sigma's 2013 release says both DN lenses use a linear autofocus motor for quiet focusing during video.

## Aspherical Surfaces

The patent's aspheric equation (¶0158) is the standard conic form, with K = 0 for a spherical base:

$$
z = \frac{y^2 / r}{1 + \sqrt{1 - (1 + K)\,(y / r)^2}} + A_4 y^4 + A_6 y^6 + A_8 y^8 + A_{10} y^{10}
$$

The equation defines K, but no example prints a K value, so the model uses K = 0 at both surfaces. The coefficients
are copied as printed:

| Surface | A4 | A6 | A8 | A10 |
| --- | --- | --- | --- | --- |
| S9 (L5 rear) | 1.68830E−05 | −6.94468E−09 | 2.50342E−11 | 0 |
| S13 (L7 rear) | 9.50840E−08 | −5.47977E−09 | 2.45567E−11 | 0 |

S9 is the rear face of L5 (R = −27.39 mm). Its positive polynomial adds +0.068 mm of sag at 8 mm height and +0.086 mm
at the 8.5 mm rim, flattening the convex face toward the edge. This weakens the marginal power of the focusing group
and holds spherical aberration and its change with focus in check (¶0081). S13 departs from its base sphere by only
−0.0006 mm at 8 mm and −0.003 mm at 11 mm, a slight steepening confined to the outer zone. Only oblique beams reach
that zone, so the surface acts on field aberrations (¶0083).

Sigma describes the production aspheres as glass-molded, with one of the two aspherical elements figured on both
faces. Example 1's two single-sided aspheres do not show which element became double-sided.

## Conditional Expressions

The model reproduces all six values that the patent tabulates for Example 1 (¶0175):

| Condition | Range | Example 1 |
| --- | --- | --- |
| (1) f1 / f23 | 1.20–7.50 | 3.235 |
| (2) \|f2 / f3\| | 0.01–0.35 | 0.140 |
| (3) \|f3a · f3b / f²\| | 0.90–6.50 | 1.786 |
| (4) \|R_DB1 / f\| | > 1.00 | 32.44 |
| (5) \|R_DB2 / f\| | > 0.85 | 1.90 |
| (6) n3a / n3b | 0.800–0.990 | 0.884 |

## Model Scope and Limitations

- R, d, nd, νd, the aspheric coefficients, the stop position and both focus states are printed. K = 0 is assumed.
- The iris is the printed surface 4; its radius is set from the stated f/2.89.
- The patent prints no clear apertures. All lens semi-diameters are estimated from Fig. 1: S1–3 8.0, S5–7 7.5,
  S8–9 8.5, S10–11 9.5 and S12–13 11.0 mm, each within about 6% of the drawn rim. They agree with Sigma's drawing to
  within about 1 mm; that drawing shows L6 about 1 mm taller.
- Fig. 1 ends the two concave faces beside the iris, the rear of L2 (S3) and the front of L3 (S5), with flat lands.
  The model draws them as rim cuts placed just outside the wide-open beams at every focus position: S3 1.31 mm deep
  (cap radius 5.68 mm) and S5 1.85 mm deep (5.80 mm). The lands block no light; Fig. 1 ends the two caps lower, at
  about 5.0 and 4.4 mm.
- With these rims, wide open at infinity, the geometric transmission is 100% to about 11°, 87% at 19.6° and 66% at
  the 25.2° corner. These figures describe the estimated rims, not measured illumination. The APS-C half-diagonal
  (14.18 mm) is reached at 25.2°, just inside the printed 25.245° half-field.
- At full aperture the d-line marginal ray crosses about 0.08 mm ahead of the paraxial focus, in line with Fig. 2. The
  image plane stays at the printed back focus.
- L6 is centred; no stabilization shift is modeled.

## Sources

- JP 2012-234169 A: https://patents.google.com/patent/JP2012234169A/en
- JP 2012-234169 A (PDF): https://patentimages.storage.googleapis.com/f5/a6/bb/4c873c52b42cd3/JP2012234169A.pdf
- Sigma, 30mm F2.8 DN | Art product page (specifications and lens construction):
  https://www.sigma-global.com/en/lenses/a_30_28/
- Sigma, 30mm F2.8 EX DN product page (specifications and lens construction):
  https://www.sigma-global.com/en/lenses/30_28/
- Sigma press release, March 8, 2013 (30mm F2.8 DN and 19mm F2.8 DN pricing and availability):
  https://press.sigmaphoto.com/product/03/sigma-corporation-announces-pricing-and-availability-for-30mm-f1-4-dc-hsm-30mm-f2-8-dn-and-19mm-f2-8-dn-lenses/
- LensTip, Sigma 30 mm f/2.8 EX DN review (2012), specifications:
  https://www.lenstip.com/335.2-Lens_review-Sigma_30_mm_f_2.8_EX_DN__Pictures_and_parameters.html
- Imaging Resource, Sigma 30mm f/2.8 DN Art review: https://www.imaging-resource.com/lenses/sigma-30mm-f-2-8-dn-art/
- Wikipedia, Sigma 30mm F2.8 EX DN: https://en.wikipedia.org/wiki/Sigma_30mm_F2.8_EX_DN
- PhotonsToPhotos Optical Bench Hub: https://www.photonstophotos.net/GeneralTopics/Lenses/OpticalBench/OpticalBenchHub.htm
- https://www.dpreview.com/articles/4606181052/field-test-sigma-dn-lenses/
- https://admiringlight.com/blog/review-sigma-30mm-f2-8-dn-art-sony-e-mount/3/
