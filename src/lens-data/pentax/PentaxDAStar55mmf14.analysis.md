## Patent Reference and Design Identification

**Patent:** US 2010/0073777 A1
**Application Number:** 12/558,767
**Filed:** September 14, 2009
**Published:** March 25, 2010
**Priority:** September 19, 2008 (JP 2008-240378)
**Inventor:** Jun Hirakawa
**Assignee:** Hoya Corporation
**Title:** Photographic lens system and electronic imaging device using the same
**Example details:** Embodiment 1, Table 1; lens section in Fig. 1, aberrations in Figs. 2–3. Native scale, no scaling.

The patent was filed by HOYA, which owned Pentax at the time, and its first embodiment is a strong match to the smc PENTAX-DA★55mm F1.4 SDM, a short telephoto for APS-C K-mount cameras with an in-lens SDM ultrasonic autofocus motor, announced on September 22, 2008. It is a patent design, not a confirmed factory prescription. The evidence:

1. Nine elements in eight groups, with one cemented pair, as in Pentax's published construction of 9 elements / 8 groups.
2. Embodiment 1 is f = 56.36 mm at F/1.4 with a half-field of 14.3°; Pentax lists 55 mm, F1.4 and a 28.6° angle of view.
3. The table's close state is M = −0.173, and its spacing focuses at 0.45 m object to image; Ricoh lists a 0.45 m minimum focus and 0.173× maximum magnification.
4. Pentax states that the lens uses one anomalous low-dispersion element, and Ricoh's construction drawing marks the second-to-last element. Embodiment 1's L8 is the only glass with νd above 60 that moves in focusing (1.59240 / 68.3).
5. Ricoh's drawing matches Fig. 1 element for element: two positive menisci, a negative meniscus, the iris, a thin plano-concave element, the cemented doublet, a meniscus, the biconvex low-dispersion element and a nearly flat rear element.
6. The Japanese priority application was filed on September 19, 2008, three days before the lens was announced.

Embodiment 3 has the same layout, f = 56.36 mm, F/1.4, M = −0.173 and the same νd 68.3 element, so the published specifications cannot separate it from Embodiment 1; the first embodiment is the one transcribed. Embodiment 2 (F/1.5, with a high-index L8) fits less well.

## Optical Architecture

A modified Gaussian design has nine spherical elements in eight groups: two positive menisci and a negative meniscus ahead of the iris, then a weak plano-concave element, the cemented L5–L6 doublet and three positive elements behind it. The front three elements form a weak positive group (f = +139.8 mm); everything behind the iris has f = +47.3 mm.

The patent starts from a conventional F1.4 Gauss of the same kind (its comparative example, from JP H06-242370), in which sagittal lateral aberration is undercorrected (¶0004–0006). It traces the problem to the two strongly curved concave faces on either side of the iris, L3's rear face and L5's front face, and adds a weak negative element, L4, between them (¶0008, ¶0035–0037). A third positive element behind the doublet allows the rear element to stay fixed during focusing (¶0043–0045). The 2.00 mm cover glass in front of the sensor is traced as a separate plate and is not counted as a lens element.

## Element-by-Element Analysis

Focal lengths are for each element alone in air.

### L1: Positive Meniscus

nd = 1.77250, νd = 49.6. Glass: S-LAH66 (OHARA catalog equivalent). f = +77.35 mm.

The front element, convex to the object. With L2 it forms a positive pair of f = +38.9 mm that brings the F/1.4 beam down to the iris; splitting that power between two menisci is the usual way to limit spherical aberration at this aperture.

### L2: Positive Meniscus

nd = 1.80610, νd = 40.9. Glass: S-LAH53 (OHARA catalog equivalent). f = +77.92 mm.

A second positive meniscus, convex to the object and nearly equal in power to L1, in a higher-index lanthanum flint.

### L3: Negative Meniscus

nd = 1.69895, νd = 30.1. Glass: S-TIM35 (OHARA catalog equivalent). f = −39.85 mm.

The front negative member of the Gauss pair. Its deep rear face (R6 = 19.203 mm) is concave to the iris, one of the two strong concave faces the patent names as the source of sagittal lateral aberration (¶0008).

### L4: Plano-Concave

nd = 1.58144, νd = 40.7. Glass: S-TIL25 (OHARA catalog equivalent). f = −257.98 mm.

The patent's intermediate negative lens element, just behind the iris, with a gently curved concave face (R7 = −150.000 mm) toward the object and a flat rear face. It is the weakest negative element in the lens (¶0036), and condition (1), 0.1 < f/|f4| < 0.3, bounds its power; Embodiment 1 gives 0.22. Too weak and sagittal lateral aberration is left uncorrected; too strong and meridional lateral aberration appears (¶0041–0042). The flat rear face lowers the angle at which rays meet L5's deep concave front, which suppresses higher-order aberrations at L5's margin (¶0038).

### L5 and L6: Cemented Doublet

- **L5 (Biconcave Negative):** nd = 1.76182, νd = 26.5. Glass: S-TIH14 (OHARA catalog equivalent). f = −20.15 mm.
- **L6 (Biconvex Positive):** nd = 1.83400, νd = 37.2. Glass: S-LAH60 (OHARA catalog equivalent). f = +26.09 mm.

The rear member of the Gauss pair. L5's front face (R9 = −19.310 mm) is the second strong concave face around the iris. The dense flint L5 and the high-index L6 meet at R10 = 77.297 mm, and the pair is nearly afocal as a unit (f = −386.7 mm). L6 is the strongest positive element in the lens.

### L7: Positive Meniscus

nd = 1.80610, νd = 40.9. Glass: S-LAH53 (OHARA catalog equivalent). f = +105.65 mm.

Convex to the image, the first of three positive elements behind the doublet. It shares the rear convergence with L8 and L9 so that no single surface carries it.

### L8: Biconvex Positive

nd = 1.59240, νd = 68.3. Glass: K-GFK68 (SUMITA catalog equivalent), a low-dispersion crown with positive anomalous partial dispersion. f = +115.52 mm.

The element that Ricoh's drawing marks as anomalous low-dispersion glass. Condition (2), νd > 60 for the highest Abbe number among the positive elements that sit behind the iris and move in focusing, is set to keep chromatic aberration small (¶0046–0047); L8 is that element in Embodiments 1 and 3.

### L9: Plano-Convex

nd = 1.48749, νd = 70.2. Glass: S-FSL5 (OHARA catalog equivalent). f = +358.47 mm.

A weak positive element, flat on the object side and convex to the image, which stays fixed while the rest of the lens moves to focus. The patent calls it a surplus positive element whose purpose is to keep spherical aberration corrected at close distances (¶0044).

## Glass Identification and Selection

The patent prints nd and νd only and names no glass. Every pair equals a current catalog glass at the printed precision; the labels below are catalog equivalents chosen for dispersion data, not the production supplier, which the patent does not identify. Pentax was part of HOYA, itself a glass maker, so HOYA melts are plausible, but HOYA's catalog has exact matches for only four of the eight glasses.

| Glass (catalog equivalent) | nd | νd | Elements | Role |
|---|---|---|---|---|
| S-LAH66 (OHARA) | 1.77250 | 49.6 | L1 | Lanthanum flint; front positive |
| S-LAH53 (OHARA) | 1.80610 | 40.9 | L2, L7 | Lanthanum dense flint; positive menisci |
| S-TIM35 (OHARA) | 1.69895 | 30.1 | L3 | Dense flint; front negative meniscus |
| S-TIL25 (OHARA) | 1.58144 | 40.7 | L4 | Light flint; weak intermediate negative |
| S-TIH14 (OHARA) | 1.76182 | 26.5 | L5 | Dense flint; doublet negative |
| S-LAH60 (OHARA) | 1.83400 | 37.2 | L6 | Lanthanum dense flint; doublet positive |
| K-GFK68 (SUMITA) | 1.59240 | 68.3 | L8 | Low-dispersion crown with anomalous partial dispersion (θgF 0.546) |
| S-FSL5 (OHARA) | 1.48749 | 70.2 | L9 | Fluor crown; fixed rear element |

On both sides of the iris the positive elements use high-index lanthanum glasses and the negatives more dispersive flints, as is usual in a fast Gauss. The one special glass is L8, the element Ricoh marks as anomalous low-dispersion glass. Its catalog equivalent lies about +0.017 above the normal partial-dispersion line, in line with the patent's aim of keeping chromatic aberration small through condition (2) (¶0047). With these labels the chromatic analyses use catalog dispersion curves for every lens element.

The 2.00 mm cover glass (S18–S19) is printed without an index or Abbe number. It is traced with an assumed nd 1.5168 / νd 64.2, a BK7-class crown; this is not a source value.

## Focus Mechanism

Focusing moves L1–L8 and the iris together toward the object while L9 and the cover glass stay fixed (¶0060). The patent prefers this to moving the whole lens because the fixed rear element keeps spherical aberration corrected at close range (¶0015, ¶0044). Autofocus is driven by Pentax's SDM in-lens ultrasonic motor, with manual override through the focus ring.

| Spacing | Infinity | Close (M = −0.173) |
|---|---|---|
| d15 (L8 to L9) | 1.00 mm | 13.27 mm |

The travel is 12.27 mm. The patent prints no object distance for the close state. With the image held on the rear face of the cover glass, the close spacing focuses at 0.450 m object to image (0.345 m in front of S1) at −0.173×, the patent's printed magnification. This agrees with Ricoh's 0.45 m minimum focus distance and 0.173× maximum magnification. Positions between the two states interpolate d15 linearly and are not source values. The focal length grows to 58.13 mm at the close state.

## Aperture and Model Scope

The patent places the diaphragm 7.49 mm behind surface 6, leaving 2.19 mm to surface 7 (¶0061). Its 27.75 mm diameter is derived from the F/1.4 header and is not printed. The production lens has a nine-blade diaphragm, rounded to about F2.8, and stops down to F22.

All clear apertures are inferred; the patent prints none. L4's flat rear face meets the deep concave front of L5 at a height of about 13.5 mm across the 5.49 mm gap, so L4 is drawn square at 13.45 mm, just inside that contact. Ricoh's drawing likewise shows L4 sitting against L5's rim. The rims of L1, L6, L7 and L8 are set only as large as the F/1.4 axial beam needs, so the model traces the full F/1.4 aperture on axis.

Fig. 1 and Ricoh's drawing both end the two deep concave faces beside the iris in flat lands. L3's rear face is cut 6.13 mm behind its vertex, at a radius of 14.07 mm, which keeps its rim ahead of the iris; L5's front face is cut 5.45 mm ahead of its vertex, at 13.45 mm, level with L4's edge. Both radii follow the proportions of Fig. 1, and neither land touches a ray of the wide-open beams at infinity or at the close state. The cemented pair is square-cut at 17.4 mm, as drawn. The other element heights agree with Fig. 1 within 4 %; the figure is drawn about 11 % shorter across the axis than along it.

The model's focal length is 56.357 mm against the patent's 56.36 mm, at F/1.4 with a 14.3° half-field and a total length of 93.2 mm from S1 to the image. The image plane is the rear face of the cover glass, as the printed fB = 0.0 states; with the assumed cover index the paraxial focus falls 0.002 mm behind it.

## Sources

- [US 2010/0073777 A1](https://patents.google.com/patent/US20100073777A1/en), Table 1 and Figures 1–3.
- [Ricoh Imaging, smc PENTAX-DA★55mmF1.4 SDM product page](https://www.ricoh-imaging.co.jp/english/products/lens/k/telephoto/smcpentax-das55/): specifications, anomalous dispersion glass, construction drawing.
- [HOYA Corporation PENTAX press release, September 22, 2008](https://www.ricoh-imaging.co.jp/english/news/2008/200818.html): announcement, 9 elements / 8 groups, low-dispersion element, SDM, 0.45 m, nine-blade round diaphragm.
- [PentaxForums.com review of the DA★ 55mm f/1.4](https://www.pentaxforums.com/reviews/pentax-da-star-55mm-f14/conclusion.html).
