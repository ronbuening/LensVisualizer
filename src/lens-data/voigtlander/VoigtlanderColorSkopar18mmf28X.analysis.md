## Patent Reference and Design Identification

**Patent:** JP 2025-044411 A  
**Application Number:** JP 2023-151965  
**Filed:** 2023-09-20  
**Published:** 2025-04-02  
**Inventor:** Tatsuya Moriyama  
**Applicant:** Cosina Co., Ltd.  
**Title:** Optical Lens System (光学レンズ系)  
**Example details:** 第3実施形態, Tables 9–12, Fig. 5; no scaling

The application describes a compact wide-angle lens for interchangeable-lens cameras (¶0001) in three numerical embodiments, each with f = 18.54 mm and a half field of 37.95°. Embodiment 3 is correlated here with the VOIGTLÄNDER COLOR-SKOPAR 18mm F2.8 Aspherical for Fujifilm X mount, which Cosina announced in January 2024 and released on 9 February 2024. The patent does not name a product, so the identification rests on convergent evidence:

1. Cosina markets the lens as 18mm f/2.8 with a 75.4° angle of view; Embodiment 3 gives f = 18.54 mm, F/2.82 and 2ω = 75.9°.
2. Both have seven elements in five groups in the same order: a negative front meniscus, a positive singlet, the stop, two cemented doublets and a positive rear singlet.
3. Cosina's optical section marks the front element as anomalous partial dispersion glass and the rear element as aspherical on both faces. Embodiment 3 places a fluor crown (nd 1.48749, νd 70.32) in front and aspheres on surfaces 12 and 13 only.
4. The printed close state (Table 11) gives 0.169 m from object to image at 1:6.60 by paraxial calculation; Cosina specifies 0.17 m and 1:6.6.
5. The aberration plots (Fig. 6) run to an image height of 14.20 mm, the APS-C half-diagonal, and the application was filed by Cosina four months before the lens was announced.

Embodiment 2 has eight elements in six groups (a separate third lens in G2B, ¶0054) and does not fit the product. Embodiments 1 and 3 share the seven-element layout and differ in detail. Embodiment 1 is the patent's representative figure, but its Table 2 prints the first element as nd 1.78749 beside νd 70.32, a pair no optical glass has. With nd 1.48749, the value Embodiment 3 prints for the same position, Embodiment 1 reproduces its own Table 1 (f = 18.537 mm against 18.54, back focus 19.413 against 19.41 mm, G1 focal length 2353 against 2343.43 mm), so the printed index is a one-digit misprint. Embodiment 3 needs no correction and is the example transcribed here.

Cosina's section does not single out either embodiment. Its rear element has a slightly concave front face, like Embodiment 1's positive meniscus (R12 = −36.650 mm), whereas Embodiment 3's front face is nearly flat with a weakly convex aspheric zone (R12 = +2000 mm) and Fig. 5 draws the element biconvex. Scaled by its overall vertex length, the section's air gap between the two cemented doublets is about 2.2 mm (Embodiment 1: 2.25 mm; Embodiment 3: 2.71 mm), and its rear aspheric profile falls between the two embodiments. Other spacings in the section are not to scale for either (its gap between the first two elements is about 1.2 mm against 2.09 mm printed). Embodiment 1 thus matches the drawing's shapes slightly better, while Embodiment 3 is the self-consistent printed example. The correlation is with the patent family and is probable, not a confirmed factory prescription.

## Optical Architecture

The patent divides the lens into two positive groups around a central stop (¶0025). G1, a negative meniscus convex to the object followed by a biconvex positive element, is almost afocal: its computed focal length is +1113.9 mm against the printed 1107.30 mm. Because G1 is so weak, its focal length is very sensitive to the last printed digit of each radius, thickness and index, which accounts for the 0.6 % gap; the file keeps the printed values. The patent's reason for a two-element G1 is a small front diameter ahead of the stop (¶0071).

G2 carries the system power (computed f2 = 19.571 mm, printed 19.57 mm) and has three parts. G2A is a cemented biconcave–biconvex doublet (+24.77 mm), G2B a cemented positive–negative meniscus pair concave to the object (−68.33 mm), and G2C a single biconvex element with both faces aspherical (+33.013 mm, printed 33.01). The ratio f23/f = 1.78 satisfies the patent's condition 1.0 < f23/f < 3.0 (¶0077).

The arrangement is a compact, nearly symmetric wide-angle form rather than a strong retrofocus: the back focus (18.81 mm) is only 1.01 times the focal length, and the first vertex lies 41.02 mm from the image. The patent sets this against two cited prior designs (¶0003–¶0004): their inner-focusing second group makes the mechanism complex and heavy, and a spherical last element tends to lengthen the back focus (¶0006). Here the whole lens moves to focus (¶0026), and the last element is aspherical. The computed Petzval sum is +0.0095 mm⁻¹ (radius about 105 mm).

## Element-by-Element Analysis

The patent numbers its elements continuously across the three embodiments, so Embodiment 3's seven elements are L16 to L22 (Fig. 5, ¶0071–¶0075); the data file and this section use those designations. Element focal lengths are thick-lens values in air, not the power each element contributes inside its cemented group.

### L16 — Negative Meniscus, convex to the object

nd = 1.48749, νd = 70.32. Glass: J-FK5 (HIKARI) catalog equivalent; FK5-type fluor crown. f = −33.46 mm.

The front element is a thin (0.90 mm) negative meniscus whose deep rear face (R = 8.622 mm) accepts the wide field ahead of the stop. Cosina's optical section marks this position as anomalous partial dispersion glass. The patent's index pair is that of the FK5 family, a low-dispersion crown whose partial dispersion lies only slightly above the normal line (catalog PgF 0.5291, about +0.004); the marking is consistent with that glass, but neither source states the actual production material.

### L17 — Biconvex Positive

nd = 2.00100, νd = 29.13. Glass: TAFD55 (HOYA) catalog equivalent. f = +34.10 mm.

L17 is a nearly plano-convex positive element (R = +37.431 / −376.128 mm) just ahead of the stop. With L16 it forms the almost afocal G1. Its index of 2.001 is the patent's condition nd > 1.9 for the strongest positive lens of G1 (¶0085), which the patent credits with spherical aberration and coma correction, gentler radii and lower decentering sensitivity.

### G2A — L18 and L19, Cemented Doublet behind the Stop

**L18:** nd = 1.71736, νd = 29.50. Glass: E-FD1L (HOYA) catalog equivalent. f = −7.35 mm.  
**L19:** nd = 1.90043, νd = 37.37. Glass: TAFD37A (HOYA) catalog equivalent. f = +6.13 mm.

L18 is a biconcave negative element (R = −21.638 / +7.097 mm) whose strong rear face is the cemented interface; L19 is a strong biconvex positive element (R = +7.097 / −19.594 mm). The two nearly cancel, leaving the doublet at +24.77 mm. The patent assigns G2A the correction of chromatic aberration and field curvature (¶0073). It also requires the positive member's index to exceed the negative member's (1.90043 > 1.71736), which it says prevents astigmatism without raising the Petzval sum and keeps G2B and G2C small (¶0086).

### G2B — L20 and L21, Cemented Meniscus Pair

**L20:** nd = 1.90043, νd = 37.37. Glass: TAFD37A (HOYA) catalog equivalent. f = +20.79 mm.  
**L21:** nd = 1.80517, νd = 25.45. Glass: J-SF6 (HIKARI) catalog equivalent. f = −18.69 mm.

Both members are menisci concave to the object (R = −8.713 / −6.809 / −13.168 mm). The cemented pair is weakly negative (−68.33 mm). Its outer faces are nearly concentric with the stop (their centers of curvature lie within about 1.1 mm of it), so oblique bundles cross them at small angles of incidence. L20 again uses an index above 1.9 (¶0087), and L21 is a dense flint (νd 25.45) for color correction against the high-index crowns in G2.

### L22 — Biconvex Positive, both faces aspherical

nd = 1.58312, νd = 59.38. Glass: L-BAL42 (OHARA) catalog equivalent. f = +33.01 mm.

L22 is the whole of G2C. Its front face has an almost flat base (R = +2000 mm) and takes its shape from the aspheric terms; the rear face is a convex sphere (R = −19.429 mm) with a strong aspheric departure toward the rim. The patent places the aspheric element last to keep peripheral performance while shortening the lens (¶0075). Cosina marks both faces as aspherical, matching the patent.

## Glass Identification and Selection

The patent prints nd and νd at the d line (587.56 nm, ¶0080) and names no glasses; Cosina publishes none either. Every pair matches a current catalog glass within the printed precision, so the data file names one catalog equivalent per element and the chromatic model uses that glass's dispersion curve. The production supplier is not known. PgF is the catalog value; ΔPgF is measured from the engine's normal line, 0.6438 − 0.001682·νd.

| Element | nd | νd | Catalog equivalent | PgF | ΔPgF | Role |
|---|---:|---:|---|---:|---:|---|
| L16 | 1.48749 | 70.32 | J-FK5 (HIKARI); also S-FSL5, FC5, N-FK5 | 0.5291 | +0.004 | Front negative meniscus; Cosina's anomalous partial dispersion element |
| L17 | 2.00100 | 29.13 | TAFD55 (HOYA) | 0.5995 | +0.005 | G1 positive, nd > 1.9 |
| L18 | 1.71736 | 29.50 | E-FD1L (HOYA) | 0.6040 | +0.010 | G2A negative |
| L19, L20 | 1.90043 | 37.37 | TAFD37A (HOYA) | 0.5769 | −0.004 | Positive members of G2A and G2B |
| L21 | 1.80517 | 25.45 | J-SF6 (HIKARI) | 0.6157 | +0.015 | G2B negative, dense flint |
| L22 | 1.58312 | 59.38 | L-BAL42 (OHARA); also S-BAL42, M-BACD12 | 0.5423 | −0.002 | Aspherical rear singlet |

The palette is dominated by high-index lanthanum glasses (nd 1.90–2.00) in three of the four positive elements, which the patent ties to compactness, gentler radii and spherical-aberration and coma control (¶0085, ¶0087). Color correction pairs these with the dense flints of L18 and L21. The FK5-type front element is the only low-dispersion crown; its partial dispersion is only mildly anomalous, and the data do not support an apochromatic classification. L-BAL42 is OHARA's low-softening-point grade intended for precision molding, which suits a double-sided asphere, but S-BAL42 and HOYA M-BACD12 match the printed pair equally well, so the molding process is not established.

## Focus Mechanism

The lens focuses by moving the whole optical assembly (¶0026, claim 7); no internal spacing changes. Table 11 prints the object distance D0 (to surface 1) and the image gap D13 at infinity and at the shortest photographing distance:

| State | D0 | D13 |
|---|---:|---:|
| Infinity | ∞ | 18.81 mm |
| Shortest distance | 125.20 mm | 21.62 mm |

The extension is 2.81 mm. Adding the 22.21 mm vertex length gives 169.03 mm from object to image. A paraxial trace with D0 = 125.20 mm places the image 21.625 mm behind surface 13, consistent with the printed 21.62 mm, at a magnification of −0.1516 (1:6.60). Cosina specifies a 0.17 m minimum focus and 1:6.6. Both printed states are modeled; positions between them interpolate D13 linearly, and the iris keeps its physical diameter. The production lens is focused manually.

At infinity the file keeps the printed D13 = 18.81 mm, 0.004 mm short of the computed paraxial back focus (18.814 mm). The resulting 41.02 mm from surface 1 to the image and the 13.03 mm length of G2 differ from the printed 41.03 and 13.04 mm by rounding.

## Aspherical Surfaces

Surfaces 12 and 13, the two faces of L22, are aspherical. The patent's equation (¶0044, reused for Embodiment 3 in ¶0084) is the standard form with C = 1/R:

$$
Z = \frac{C H^2}{1 + \sqrt{1 - (1 + K) C^2 H^2}} + A_4 H^4 + A_6 H^6 + A_8 H^8 + A_{10} H^{10} + A_{12} H^{12}
$$

K = 0 therefore means a spherical base, and both surfaces print K = 0. Table 12 prints A14 = 0 for both surfaces and no higher terms.

| Term | Surface 12 | Surface 13 |
|---|---:|---:|
| R | +2000.000 | −19.429 |
| K | 0.000 | 0.000 |
| A4 | +1.6859E-04 | +2.7800E-04 |
| A6 | +3.1747E-07 | −1.1680E-06 |
| A8 | +3.0728E-08 | +1.4406E-07 |
| A10 | −1.6178E-09 | −3.3323E-09 |
| A12 | +1.0931E-11 | +1.9861E-11 |
| A14 | 0.0000E+00 | 0.0000E+00 |

Both polynomial departures are positive (toward the image) and grow quickly toward the rim. At 7 mm from the axis they are +0.31 mm on surface 12 and +0.69 mm on surface 13. The rear face there keeps less than half of its spherical sag, and the element edge is 0.38 mm thicker than the spherical bases would make it. The outer zone of L22 therefore has less positive power and is bent toward a meniscus convex to the object. The front face's local curvature reverses close to its rim. This is the zone the oblique bundles cross near the image, so the profile fits the patent's statement that the aspheric last element keeps peripheral performance in a short lens (¶0006, ¶0075); the patent itself gives no surface-by-surface explanation. Whether the production element is glass-molded or ground is not published.

Embodiment 1 uses different coefficients on a different base (R12 = −36.650 mm), which is why its last element is drawn as a meniscus.

## Aperture Stop and Clear Apertures

The iris sits where Table 10 prints it, 2.30 mm behind surface 4 and 1.68 mm ahead of surface 6. Its radius, 3.44 mm, follows from the printed F/2.82. The f-stop scale runs to f/22 with ten blades, as Cosina specifies.

The patent prints no clear apertures. Fig. 5 is drawn to scale: its vertex spacings and the drawn arcs of surfaces 1, 2 and 9 agree with the prescription at a single scale in both directions. L16 (7.2 mm) and L17 (5.9 mm) take the drawn square edges. Fig. 5 ends the deep concave caps of surfaces 2 and 9 at a flat land square to the axis, and the model draws both lands. Each cut lies just outside the wide-open beams, at radii of 6.03 and 4.66 mm against the drawn 5.96 and 3.8 mm. Fig. 5 draws G2A, G2B and L22 7–14 % smaller than the model (3.7, 4.7 and 5.4, and 6.7 mm). At those heights the corner illumination would fall by 7 to 17 points, so the model keeps G2A at 4.0 mm, L20 and L21 at 5.3 and 6.1 mm, and L22 at 7.2 mm. Wide open at infinity the edge of the field (37.9°) keeps about 59 % of the axial illumination, and 67 % at the 35.9° edge of the close state. The rims, and the corner illumination they produce, remain estimates.

At the printed half field of 37.95° the chief ray reaches an image height of 14.21 mm, slightly beyond the 14.18 mm half-diagonal of the APS-C format the viewer uses.

## Model Scope and Limitations

The model reproduces the patent's first-order values for Embodiment 3: f = 18.543 mm (printed 18.54), F/2.82, paraxial back focus 18.814 mm (printed 18.81), half field 37.95°, f2 = 19.571 mm and f23 = 33.013 mm. The two printed focus states are modeled exactly; intermediate distances are linear interpolations, not published positions. The prescription is a patent embodiment correlated with the product, not a factory prescription, and the drawing comparison above leaves open whether production follows Embodiment 3, Embodiment 1 or a later variant. Clear apertures are inferred, and the chromatic behavior depends on the catalog-equivalent glasses rather than on published production dispersion data.

## Sources

1. JP 2025-044411 A (Cosina Co., Ltd.), Embodiment 3: Tables 9–12, Figs. 5–6, ¶0069–¶0088; Embodiment 1: Tables 1–4, Fig. 1; ¶0001–¶0026, ¶0044. [Google Patents](https://patents.google.com/patent/JP2025044411A/ja).
2. Cosina, [COLOR-SKOPAR 18mm F2.8 Aspherical (X-mount) product page](https://www.cosina.co.jp/voigtlander/x-mount/color-skopar-18mm-f2-8-aspherical/): 7 elements / 5 groups, 75.4°, 0.17 m, 1:6.6, f/2.8–22, ten blades, release date 9 February 2024.
3. Cosina, [optical section of the COLOR-SKOPAR 18mm F2.8 Aspherical](https://www.cosina.co.jp/wp/wp-content/uploads/2024/01/X-18_28_LD-kjhlk.svg), marking the anomalous partial dispersion element and the aspherical element.
4. Cosina, [COLOR-SKOPAR 18mm F2.8 Aspherical instruction manual](https://www.cosina.co.jp/wp/wp-content/uploads/2024/02/X-18_28-ENG-V1_0.pdf).
5. HOYA, OHARA and HIKARI optical-glass catalogs, for the catalog equivalents (TAFD55, E-FD1L, TAFD37A; L-BAL42; J-FK5, J-SF6).
