## Patent Reference and Design Identification

**Patent:** [US 12,066,598 B2](https://patents.google.com/patent/US12066598B2/en)
**Application Number:** 17/667,919
**Filed:** February 9, 2022 (priority JP 2021-019102, February 9, 2021)
**Published:** August 11, 2022 (US 2022/0252840 A1)
**Granted:** August 20, 2024
**Inventor:** Yuki Shinzato
**Assignee:** Canon Inc. (printed as Canon Kabushiki Kaisha)
**Title:** Optical system, lens apparatus, and image capturing apparatus
**Example details:** Numerical Example 3, columns 13–14; cross-section Fig. 5, aberrations Fig. 6A/6B; Table 1, third embodiment.

Canon released the RF 24mm f/1.8 Macro IS STM for the RF mount in August 2022. Canon lists 11 elements in 9 groups with one plastic-molded (PMo) aspherical element and one UD element, a 9-blade iris closing to f/22, 0.14 m minimum focus with 0.5× maximum magnification, optical image stabilization rated at 5 stops, and a 52 mm filter thread.

The patent prints seven examples (f = 20.5–28.6 mm, all F1.85). Example 3 is the one that matches the production lens:

1. **Construction:** 11 elements in 9 groups with two cemented doublets, as Canon lists.
2. **Asphere:** one aspherical surface, on L9, whose nd 1.53110 / νd 55.9 is an optical polymer; Canon's single aspherical element is plastic-molded.
3. **UD element:** one νd 81.5 fluorophosphate crown, L7, at the position Canon's diagram marks as UD.
4. **Stabilization:** a single-lens IS group directly behind the stop (Fig. 5). Paragraph ¶0085 gives an IS lens to Examples 1–4, 6 and 7; Example 5 (f = 24.60 mm) has none.
5. **First-order data:** f = 24.72 mm, F1.85 and ω = 41.2° for a 24 mm f/1.8 lens with an 84° diagonal angle of view.
6. **Close focus:** front-group focusing that extends the lens 13.00 mm to a −0.51× close state at 136.0 mm object to image, against Canon's 0.5× at 0.14 m and the 13.4 mm focus extension The-Digital-Picture lists.
7. **Timing:** priority in February 2021, release in August 2022. Asobinet tied the Japanese counterpart, JP 2022-122047 A, to this lens.

Canon's construction diagram matches Fig. 5 element by element: a thick negative front meniscus with a nearly flat front face; a biconvex L2; a cemented pair whose front and rear faces are nearly flat (R5 −173.0, R7 92.1); the stop; a thin biconvex lens boxed as the IS unit; a cemented biconcave–biconvex pair whose rear lens is coloured as the UD element; a biconvex lens; the aspherical meniscus; a positive meniscus; and the negative rear meniscus. Example 5, the other 24 mm design, differs visibly (plano-convex L2, biconvex L3, a meniscus behind the stop, a strongly curved interface in the rear doublet), and Example 6 has two front negatives and no νd 81.5 glass. The correlation is strong at the level of construction; a patent example is still a design study and can differ in detail from the production prescription.

## Optical Architecture

The design is a negative–positive–negative wide-angle in three units. The first unit is a single negative meniscus (f = −34.08 mm). The second unit (surfaces 3–19, f = +29.56 mm) holds nine lenses in seven components: a biconvex lens, a cemented doublet ahead of the stop, the stop (S8), the IS lens, a cemented doublet behind the stop, a biconvex lens, the aspherical meniscus and a positive meniscus. The third unit is a single negative meniscus concave to the object (f = −104.12 mm). Two cemented doublets give 11 elements in 9 groups.

The two widest air spaces separate the units: 15.32 mm after L1 and 10.30 mm before L11. The patent sizes them so that light reflected from the front and rear lenses does not reach the image as ghosts (¶0041–¶0043; x1/TTL = 0.189, x2/TTL = 0.127). The doublets sit on either side of the stop, where the marginal ray is highest, to correct spherical aberration and axial colour at F1.85 (¶0083).

Focusing does not follow the unit boundaries: L1–L9 move together and L10–L11 stay fixed (see Focus Mechanism). The diagram's brackets mark these two mechanical groups, FOCUS and FIXED, rather than the patent's three units.

The design leaves −10.6 % barrel distortion at full field (Table 1, dist ω) for correction by image processing from distortion data stored in the lens (¶0086–¶0087), which is why the first unit needs no asphere. The printed image height is therefore 19.34 mm, short of the 21.63 mm full-frame corner; the model keeps that 38.68 mm image circle and does not apply the in-camera correction.

## Element-by-Element Analysis

Focal lengths are the patent's single-lens data for Example 3.

### L1 — Negative Meniscus, convex to object

nd = 1.51633, νd = 64.1. Glass: S-BSL7 (OHARA) catalog equivalent. f = −34.08 mm.

The whole first unit. A single lens keeps reflections inside the front unit to a minimum (¶0079), and its concave rear face (R 16.734) gives the wide angle while drawing the entrance pupil forward, which keeps the front diameter small (¶0036, ¶0080). Its low index (Nave = 1.516, Inequality (8)) limits the Petzval sum (¶0053). The front face (R 352.2) is nearly flat.

### L2 — Biconvex Positive

nd = 1.91082, νd = 35.3. Glass: TAFD35 (HOYA) catalog equivalent. f = +27.61 mm.

Opens the second unit after the 15.32 mm first air space and turns the diverging beam from L1 back toward the axis.

### L3 + L4 — Cemented Doublet ahead of the Stop

- **L3, Positive Meniscus, concave to object:** nd = 1.90043, νd = 37.4. Glass: TAFD37A (HOYA) catalog equivalent. f = +24.97 mm.
- **L4, Biconcave Negative:** nd = 1.72825, νd = 28.5. Glass: S-TIH10 (OHARA) catalog equivalent. f = −22.58 mm.

The cemented pair is nearly afocal (f = −221 mm) and sits just ahead of the stop. Its index step, Ndp − Ndn = 0.172, lies inside Inequality (4) (0.07–0.25): a larger step would leave the doublet under-achromatized, a smaller one would not lower the Petzval sum enough (¶0049).

### L5 — Biconvex Positive (IS)

nd = 1.67790, νd = 55.3. Glass: S-LAL12 (OHARA) catalog equivalent. f = +81.14 mm.

Fig. 5 marks this lens IS: it shifts perpendicular to the axis to correct camera shake (¶0031). A single lens keeps the moving mass and its actuator small (¶0085). Canon rates the stabilization at 5 stops. The model traces it centred.

### L6 + L7 — Cemented Doublet behind the Stop

- **L6, Biconcave Negative:** nd = 1.85478, νd = 24.8. Glass: S-NBH56 (OHARA) catalog equivalent. f = −15.20 mm.
- **L7, Biconvex Positive:** nd = 1.49700, νd = 81.5. Glass: S-FPL51 (OHARA) catalog equivalent — UD class. f = +41.73 mm.

The pair is negative overall (f = −26.25 mm). Its Abbe spread, νdp − νdn = 56.70, lies inside Inequality (5) (25–70): a smaller spread leaves secondary spectrum under-corrected, a larger one raises the Petzval sum (¶0050). L6's strongly curved front face (R −15.958) carries the doublet's negative power. L7 is the UD element in Canon's diagram.

### L8 — Biconvex Positive

nd = 1.91082, νd = 35.3. Glass: TAFD35 (HOYA) catalog equivalent. f = +26.28 mm.

The strongest positive lens behind the stop.

### L9 — Positive Meniscus, concave to object (aspherical rear face)

nd = 1.53110, νd = 55.9. Glass: E48R (ZEON) polymer catalog equivalent. f = +215.73 mm.

A nearly powerless meniscus whose nd/νd is that of a cyclo-olefin optical polymer, consistent with Canon's plastic-molded aspherical element. Its rear face S17 is the lens's only asphere, placed behind the stop to correct field curvature (¶0084). L9 is the last element of the focusing group; d17 behind it is the focusing gap.

### L10 — Positive Meniscus, concave to object

nd = 1.72916, νd = 54.7. Glass: S-LAL18 (OHARA) catalog equivalent. f = +143.27 mm.

The last lens of the second unit and the first of the fixed rear section, ahead of the 10.30 mm second air space.

### L11 — Negative Meniscus, concave to object

nd = 1.51742, νd = 52.4. Glass: S-NSL36 (OHARA) catalog equivalent. f = −104.12 mm.

The whole third unit. Its object-side concave face brings the system closer to a symmetric form and corrects field curvature (¶0038). At 33.46 mm it has the largest effective diameter in the lens (φr/φmax = 1.000, Inequality (6)). Its weak power, fL1/fL3 = 0.327 (Inequality (3)), keeps off-axis rays from striking the image too obliquely (¶0044).

## Glass Identification and Selection

The patent prints nd and νd only. Each pair equals a catalog glass at the printed precision; the labels name catalog equivalents, not the production supplier.

| Element | nd / νd | Catalog equivalent | Role |
| --- | --- | --- | --- |
| L1 | 1.51633 / 64.1 | S-BSL7 (OHARA) | Borosilicate crown, front meniscus |
| L2, L8 | 1.91082 / 35.3 | TAFD35 (HOYA) | High-index lanthanum flint, main positive power |
| L3 | 1.90043 / 37.4 | TAFD37A (HOYA) | High-index positive member of D1 |
| L4 | 1.72825 / 28.5 | S-TIH10 (OHARA) | Dense flint, negative member of D1 |
| L5 | 1.67790 / 55.3 | S-LAL12 (OHARA) | Lanthanum crown, IS lens |
| L6 | 1.85478 / 24.8 | S-NBH56 (OHARA) | Dense flint, negative member of D2 |
| L7 | 1.49700 / 81.5 | S-FPL51 (OHARA) | Fluorophosphate UD crown, positive member of D2 |
| L9 | 1.53110 / 55.9 | E48R (ZEON) | Cyclo-olefin polymer, molded asphere |
| L10 | 1.72916 / 54.7 | S-LAL18 (OHARA) | Lanthanum crown |
| L11 | 1.51742 / 52.4 | S-NSL36 (OHARA) | Crown-flint, rear meniscus |

The two doublets divide the work. D1, ahead of the stop, pairs two flints of different index (1.900 against 1.728), balancing achromatism against the Petzval sum; D2, behind it, pairs the UD crown with a νd 24.8 dense flint for axial colour and secondary spectrum. S-FPL51's anomalous partial dispersion (catalog PgF 0.5375) is what lets D2 reduce secondary spectrum. The viewer's spectral results use the catalog equivalents' dispersion; the production melts are not known.

## Focus Mechanism

Front-group focusing (¶0030). L1–L9 (surfaces 1–17), with the iris and the IS lens, move 13.00 mm toward the object as one unit; L10, L11 and the image plane stay fixed. The patent prints only the variable gap d17 at infinity and at close range:

| | Infinity | Close |
| --- | --- | --- |
| d17 | 2.56 mm | 15.56 mm |
| S1 to image | 80.99 mm | 93.99 mm |
| Object to image | ∞ | 136.0 mm |
| Magnification | 0 | −0.51× |

The patent gives no close object distance or magnification; the last two rows are paraxial results with the image plane at the printed 11.00 mm back focus. They agree with Canon's 0.14 m minimum focus and 0.5× maximum magnification, and the 13.00 mm travel with the 13.4 mm focus extension The-Digital-Picture lists. The focal length falls from 24.72 mm to 24.05 mm at the close state. Intermediate positions interpolate d17 linearly. Canon drives the group with a stepping motor (STM).

## Aspherical Surfaces

S17, the image-side face of L9, is the only aspherical surface. The patent's sag equation is

$$
X = \frac{h^2/R}{1 + \sqrt{1 - (1+k)(h/R)^2}} + A_4h^4 + A_6h^6 + A_8h^8 + A_{10}h^{10} + A_{12}h^{12}
$$

with k the conic constant in the standard form (k = 0 is a sphere), so the data file's K equals the printed k = 0. The coefficients are A4 = 1.70126×10⁻⁵, A6 = −2.50325×10⁻⁹, A8 = 1.03885×10⁻¹⁰, A10 = −5.41918×10⁻¹³ and A12 = 1.15952×10⁻¹⁵; the grant and the application print the same values.

S17 is convex to the image (R −48.642). The positive A4 term flattens it toward the rim, where the departure from the base sphere reaches about +0.48 mm at the 12.78 mm clear radius. The surface's positive power therefore weakens with height: the negative power increasing from the centre toward the periphery that ¶0084 prescribes for field-curvature correction. Canon makes this element by plastic molding.

## Conditional Expressions

Table 1 lists the third embodiment's values; all twelve inequalities hold.

| Inequality | Range | Example 3 |
| --- | --- | --- |
| (1) x1/TTL | 0.08–0.35 | 0.189 |
| (2) x2/TTL | 0.08–0.25 | 0.127 |
| (3) fL1/fL3 | 0.10–0.50 | 0.327 |
| (4) Ndp − Ndn | 0.07–0.25 | 0.172 |
| (5) νdp − νdn | 25–70 | 56.70 |
| (6) φr/φmax | 0.63–1.00 | 1.000 |
| (7) φf/φr | 0.70–1.30 | 0.986 |
| (8) Nave | 1.40–1.65 | 1.516 |
| (9) BF/TTL | 0.06–0.35 | 0.136 |
| (10) fL1/f | −2.0 to −0.1 | −1.378 |
| (11) V (third-order distortion coefficient) | 0.20–0.60 | 0.382 |
| (12) dist ω | −20 % to −5 % | −10.593 % |

## Model Scope and Limitations

- **Semi-diameters:** all 20 refracting surfaces use half the printed effective diameters. As in Fig. 5, flat lands carry the smaller face of L1, L4, L6, L8, L9 and L11 out to the larger printed face of the same element or doublet, so those elements are drawn square-edged; the lands lie outside the clear aperture and do not affect the trace. Fig. 5 draws every element about 5 % larger in radius than the printed diameters.
- **Stop:** the printed S8 diameter, 17.43 mm, agrees with F1.85 at real-ray height: an f/1.85 marginal ray entering at 6.68 mm crosses S8 at 8.72 mm, and the printed diameters of S3–S11 equal that ray's heights. As for every ordinary prime, the viewer sizes the iris paraxially from F1.85, giving a radius of 8.467 mm, about 3 % smaller than the printed stop.
- **Field:** the printed image height is 19.34 mm (ω = 41.2°). The −10.6 % residual distortion that the camera corrects is left in the model, and the full-frame corner beyond 19.34 mm is not traced. Corner vignetting at full aperture is substantial with the printed diameters.
- **Stabilization:** the IS lens is traced centred; its decentering is not modelled.
- **First order:** the model gives EFL 24.720 mm (printed 24.72), a paraxial back focus of 11.0023 mm against the printed 11.00 mm, and 80.99 mm from S1 to the image against the printed 81.00 mm overall length; the small differences come from rounding in the printed table.
- **Glass:** the spectral results depend on the catalog equivalents; the patent prints only nd and νd.

Reviews report a sharp centre at f/1.8 and heavy barrel distortion (more than 5 %) in uncorrected raw files, consistent with the design's residual distortion.

## Sources

- [US 12,066,598 B2 (Google Patents)](https://patents.google.com/patent/US12066598B2/en).
- [US 2022/0252840 A1, application PDF](https://patentimages.storage.googleapis.com/69/8c/1f/9a7b0ada712c79/US20220252840A1.pdf).
- [Asobinet: Canon patent for an RF 24mm F1.8 (Japanese)](https://asobinet.com/info-patent-canon-rf24mm/).
- [Canon Camera Museum: RF24mm F1.8 MACRO IS STM, specifications and construction diagram](https://global.canon/en/c-museum/product/rf519.html).
- [Canon product specifications](https://downloads.canon.com/DMSD/sample/RF24mm-F1.8%20MACRO-IS-STM_Spec-Sheet.pdf).
- [The-Digital-Picture: specifications and measurements](https://the-digital-picture.com/Reviews/Lens-Specifications.aspx?Lens=1625).
- [Photography Blog review](https://www.photographyblog.com/reviews/canon_rf_24mm_f1_8_macro_is_stm_review/conclusion).
- [OpticalLimits review](https://opticallimits.com/canon/canon-rf/canon-rf-24mm-f-1-8-is-stm-macro-review/).
