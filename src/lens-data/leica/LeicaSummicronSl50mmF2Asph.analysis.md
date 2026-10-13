## Patent Reference and Design Identification

**Patent:** JP 2022-182997 A  
**Application Number:** JP 2022-048824  
**Filed:** 24 March 2022  
**Published:** 8 December 2022  
**Priority:** 28 May 2021  
**Inventors:** Yasuto Suzuki; Yoshiaki Kurioka; Shunichiro Yoshinaga  
**Applicant:** Panasonic Intellectual Property Management Co., Ltd.  
**Title:** Image capturing optical system, image capturing device, and camera system  
**Embodiment analyzed:** Numerical Example 1, Tables 1A–1G and Figure 1.

The applicant is Panasonic Intellectual Property Management Co., Ltd., and no manufacturer statement links the patent to a product. Numerical Example 1 is a design of nine elements in eight groups with six aspherical surfaces on three elements (L6, L7 and L8), a design aperture of F/1.86 and a near state at about 0.45 m. The prescription is used at the patent’s own dimensions and d-line indices. Its attribution to the Leica Summicron-SL 50 f/2 ASPH. rests on matching construction:

1. Leica’s February 2023 technical data for the L-Mount, full-frame lens list 9 lenses in 8 assemblies, 6 aspherical surfaces, a 0.45 m minimum focus distance and a largest reproduction ratio of 1:7.4. Example 1 has the same counts, with one cemented pair (L3–L4) and both faces of L6, L7 and L8 aspherical.
2. Leica’s published lens section shows a positive meniscus L1, a negative meniscus L2, a cemented L3+L4 pair, a biconvex L5, aspherical L6, L7 and L8, and a negative L9, the sequence of Figure 1. The section is a product illustration, not a dimensioned drawing.
3. The patent’s near state places the object 349 mm ahead of the first surface with about 101 mm from first surface to image, a 0.45 m object-to-image distance.

The same construction is published for the Panasonic Lumix S 50mm F1.8 (9 elements in 8 groups, three aspherical elements, 0.45 m minimum focus), which the design F-number fits directly. Numerical Example 2 has the same element and group counts, so the counts alone do not single out Example 1. The patent tabulates 48.2535 mm and F/1.86017 at infinity; the model keeps both values, so it opens to the design F/1.86 where Leica markets f/2. [1, pp.1, 7–9, 27–29, 39; 2, pp.1–2; 9]

## Optical Architecture

This is an asymmetric, internally focusing prime with a positive–negative–positive functional-group sequence. G1 contains L1–L6 and the fixed stop; G2 is the single negative L7; G3 contains positive L8 and negative L9. The eight air-separated assemblies should not be confused with these three functional groups. Within G1, the pre-stop subgroup G1A is negative and the post-stop subgroup G1B is positive. [1, ¶0025–0044]

At infinity the prescription gives an effective focal length of 48.253741 mm and a first-vertex-to-image track of 101.0000 mm. Functional-group focal lengths are G1 +34.755170 mm, G2 -67.785796 mm and G3 +318.803317 mm. These are standalone group powers, not additive in-situ system contributions. The combined L3–adhesive–L4 assembly has focal length -62.964770 mm in air.

The patent prints a 0.01 mm adhesive layer between L3 and L4, and the model keeps it as a separate cement-layer entry (C1); it is not a tenth lens element. The camera-side cover glass is also traced, though not drawn: 2.1 mm at nd = 1.51680, νd = 64.2, preceded by 12.9 mm of air and followed by the printed 1.0 mm image gap. [1, ¶0029; Table 1A]

## Element-by-Element Analysis

Element focal lengths below are for the element alone in air, from the patent radii, thickness and refractive index. The aspheric polynomial does not alter first-order power at the axis.

### L1 — Positive Meniscus

nd = 1.85996, νd = 30.5. Glass: Unmatched (patent nd=1.85996, νd=30.5; supplier unconfirmed). f = +72.171779 mm.

The positive front meniscus is convex toward the object. Its relatively high index and low Abbe number distinguish it from the following low-dispersion negative meniscus. The patent identifies the front element as positive and discusses its relation to astigmatic balance; no isolated aberration magnitude is inferred from its power sign. [1, ¶0034, ¶0168]

### L2 — Negative Meniscus

nd = 1.49700, νd = 81.6. Glass: FCD1 / N-PK52A class (coordinate candidate; supplier unconfirmed). f = -64.363612 mm.

The negative meniscus is also convex toward the object. It supplies negative power within the overall negative pre-stop subgroup. Its low-dispersion coordinates admit several catalog-class candidates, while the production supplier remains unknown. The modeled front and rear semi-diameters differ (18 and 15.5 mm) to follow the stepped rim drawn in Figure 1; both are estimates. [1, ¶0027, ¶0034; Table 1A]

### L3 — Biconcave Negative

nd = 1.65794, νd = 31.1. Glass: Unmatched (patent nd=1.65794, νd=31.1; supplier unconfirmed). f = -19.938207 mm.

The biconcave negative member is cemented to L4 through the adhesive layer the patent tabulates. This relatively dispersive negative component and the less-dispersive positive L4 offer a chromatic balancing combination, but the pair’s residual color is not established by Abbe numbers alone. The doublet is traced with the adhesive layer in place, not as a single cemented interface. [1, ¶0029, ¶0034]

### L4 — Biconvex Positive

nd = 1.59269, νd = 65.3. Glass: Unmatched (patent nd=1.59269, νd=65.3; supplier unconfirmed). f = +32.037905 mm.

The positive biconvex member closes the cemented assembly immediately ahead of the stop. Its rear surface has weaker absolute curvature than its front surface (|R| = 56.6176 versus 27.1566 mm). Its standalone positive power must be distinguished from the cemented assembly’s net negative power. [1, ¶0029, ¶0034]

### L5 — Biconvex Positive

nd = 1.59282, νd = 68.6. Glass: FCD515 / FCD505 class (coordinate candidate; supplier unconfirmed). f = +41.473622 mm.

This fixed positive biconvex element lies immediately after the stop. Together with L6 it forms positive G1B. The source gives low-dispersion coordinates compatible with the FCD515/FCD505 class, but does not name a glass supplier. The patent associates the multi-element post-stop subgroup with spherical-aberration correction without assigning a separately measured contribution to this element. [1, ¶0036, ¶0201–0204]

### L6 — Biconvex Positive (2× Asph)

nd = 1.51570, νd = 55.8. Glass: Unmatched (patent nd=1.51570, νd=55.8; supplier unconfirmed). f = +68.132750 mm.

Both faces are aspherical. This fixed positive biconvex element closes G1 and precedes the variable d13 gap. The source’s condition (8) constrains the index contrast between L6 and the following focusing element; the small contrast is a source-design relationship, not evidence that the two use one catalog material. [1, ¶0036–0038, ¶0205–0211]

### L7 — Neg. Meniscus (2× Asph)

nd = 1.51607, νd = 56.3. Glass: Unmatched (patent nd=1.51607, νd=56.3; supplier unconfirmed). f = -67.785796 mm.

The negative meniscus has two aspherical faces and is the sole moving optical element. It travels imageward for near focus. A nonzero negative conic constant on its rear face changes the base profile, so the rim slope follows the conic-plus-polynomial profile, not the vertex radius. [1, ¶0038, ¶0041–0044; Table 1B]

### L8 — Biconvex Positive (2× Asph)

nd = 1.51570, νd = 55.8. Glass: Unmatched (patent nd=1.51570, νd=55.8; supplier unconfirmed). f = +60.621063 mm.

This fixed biconvex positive element has two aspherical faces. It and L9 constitute weak positive G3. The patent discusses the thickness balance and spacing within this group as contributors to image-surface behavior. The unusually weak front vertex curvature does not describe the full rim profile because the polynomial terms are substantial at the modeled aperture. [1, ¶0039–0040, ¶0183–0190]

### L9 — Negative Meniscus

nd = 1.54157, νd = 51.7. Glass: Unmatched (patent nd=1.54157, νd=51.7; supplier unconfirmed). f = -59.424811 mm.

The final negative meniscus is concave toward the object and convex toward the image. The patent’s conditions (4) and (5) explicitly relate its power and shape to image-surface correction. This source rationale is distinguished from a calculated aberration decomposition; Petzval power alone does not determine the astigmatic best-focus surfaces. [1, ¶0040, ¶0169–0182]

### C1 — Cement Layer between L3 and L4

nd = 1.56732, νd = 42.8. Glass: Unmatched adhesive; resin chemistry and supplier unconfirmed. The patent gives a 0.01000 mm axial interval between equal-radius surfaces 6 and 7, and the model traces it as printed. Coincidental overlap with bulk-flint catalog coordinates does not identify the adhesive or justify replacing it with a catalog glass. [1, ¶0029; Table 1A]

## Glass Identification and Selection

The patent publishes nd/νd coordinates, not supplier names or measured C/F/g-line indices. Comparison with the OHARA, HOYA, SCHOTT, HIKARI, CDGM and SUMITA catalogs gives the following:

| Location | Patent nd / νd | Catalog match |
|---|---:|---|
| L1 | 1.85996 / 30.5 | Unmatched; high-index, relatively dispersive coordinate |
| L2 | 1.49700 / 81.6 | FCD1 / N-PK52A class; S-FPL51 also a nearby candidate |
| L3 | 1.65794 / 31.1 | Unmatched |
| C1 (adhesive) | 1.56732 / 42.8 | Unmatched adhesive; bulk-glass overlap is insufficient |
| L4 | 1.59269 / 65.3 | Unmatched |
| L5 | 1.59282 / 68.6 | FCD515 / FCD505 class |
| L6, L8 | 1.51570 / 55.8 | Unmatched |
| L7 | 1.51607 / 56.3 | Unmatched |
| L9 | 1.54157 / 51.7 | Unmatched |
| Camera plate | 1.51680 / 64.2 | N-BK7 / BSC7 class |

Catalog-class labels are candidates consistent with the printed coordinates, not production identifications. L2’s 1.49700 / 81.6 is an FCD1-class extra-low-dispersion coordinate; Leica publishes no special-dispersion element positions for this lens. The indices of the three aspherical elements L6–L8 (1.51570 / 55.8 and 1.51607 / 56.3) match no catalog glass. OHARA S- and L-prefixes are not interchangeable. S-FPL51’s nominal Abbe entry and its detailed dispersion differ slightly; the patent values are therefore retained. HOYA FCD505 and FCD515 share published dispersion coefficients but have different thermal properties, so the names are not physically interchangeable. The patent supplies no spectral line measurements, and no nC/nF/ng/dPgF values are asserted as properties of the actual lens. The unnamed materials use only the patent index and Abbe number. No apochromatic-performance claim follows from these inputs. [3–8]

The surface-by-surface d-line Petzval sum is 0.002071987870 mm⁻¹. Each refracting interface contributes φ/(n·n′), including the actual adhesive boundaries. This is a paraxial curvature sum; it is not a calculation of the complete sagittal or tangential field surfaces.

## Focus Mechanism

The patent tabulates both focus states. G1, the stop and G3 are fixed, while the negative G2 (L7) moves toward the image. Intermediate positions are linearly interpolated between the two printed states and are not a published focus law. [1, ¶0041–0044; Table 1C]

| Quantity | Infinity | Patent near state |
|---|---:|---:|
| Computed EFL (mm) | 48.253741 | 43.613210 |
| First surface to published image (mm) | 101.0000 | 100.9999 |
| Exact image-cone f-number, 1/(2 sin U) | 1.862290 | 1.912270 |
| Paraxial image after cover rear (mm) | 1.008296 | 1.042092 |
| Offset from published image gap (mm) | 0.008296 | 0.042092 |
| Published d13 (mm) | 1.8000 | 6.6163 |
| Published d15 (mm) | 12.8959 | 8.0795 |
| Published d0, object to first surface (mm) | ∞ | 349.0000 |

The d13 increase is 4.8163 mm. The d15 reduction differs by 0.0001 mm, a rounding difference in the printed values and not a movement of G3. The calculated near magnification at the paraxial image is -0.130916; Leica publishes 1:7.4 for the production lens, and the model is not fitted to that value. The 14.525024382 mm iris radius is the same at every focus position. It is set at infinity by tracing a real axial ray at the launch radius EFL/(2 × 1.86017) = 12.970250216 mm through the front group to the stop. The image-cone f-number in the table is a separate quantity; it differs slightly from the printed f-numbers 1.86017/1.91036. The near value uses the finite object conjugate and should not be confused with near EFL divided by the unchanged entrance-pupil diameter.

The printed 1.000 mm gap behind the cover plate is kept at both states. The model does not move the image plane or alter the prescription to remove the small residual paraxial defocus.

## Aspherical Surfaces

The source equation is z = (h²/R)/(1 + √(1 − (1 + K)(h/R)²)) + Σ Aₙhⁿ. The patent’s κ is the model’s K, so K = 0 is a spherical base. Lengths remain in millimetres and Aₙ has units mm^(1−n); no scaling or conic conversion is applied. Only even A4–A10 are published. Model A12/A14 are zero, and there is no odd-order or diffractive term. [1, p.27, equation 1; p.28, Table 1B]

| Surface | K | A4 | A6 | A8 | A10 |
|---|---:|---:|---:|---:|---:|
| 12A | 0.00000e+00 | -4.36516e-06 | 4.27940e-09 | -1.31680e-11 | -1.14476e-15 |
| 13A | 0.00000e+00 | 8.55335e-06 | -3.38027e-09 | 0.00000e+00 | 0.00000e+00 |
| 14A | 0.00000e+00 | -3.20814e-05 | 3.04040e-08 | -9.83934e-12 | 0.00000e+00 |
| 15A | -1.42129e+00 | -2.12498e-08 | 8.60734e-09 | 2.95476e-11 | 0.00000e+00 |
| 16A | 0.00000e+00 | 3.35290e-05 | -1.49631e-08 | -2.39445e-12 | 0.00000e+00 |
| 17A | 0.00000e+00 | 1.74131e-05 | -1.58208e-08 | 3.47625e-11 | -1.23868e-13 |

L6’s front polynomial reduces positive sag at its modeled rim, while the rear polynomial reduces the magnitude of negative sag. L7’s front polynomial reduces positive sag; its rear surface combines a negative conic constant with higher-order polynomial terms. L8’s front polynomial adds strongly to the shallow positive base curvature, while its rear polynomial reduces the magnitude of negative sag. These are geometric descriptions, not isolated aberration corrections. No manufacturing process is inferred solely from the coefficients or refractive indices.

| Surface | Model semi-diameter (mm) | Polynomial departure from conic (mm) |
|---|---:|---:|
| 12A | 16.5 | -0.311245 |
| 13A | 16.5 | +0.565764 |
| 14A | 15.0 | -1.303017 |
| 15A | 15.0 | +0.172694 |
| 16A | 16.0 | +1.936033 |
| 17A | 16.0 | +0.888865 |

The quoted departures apply only at the stated model semi-diameters, which are estimates and not published clear apertures. On 15A the polynomial departure from its conic differs substantially from departure from a same-radius sphere; the table uses the conic reference.

## Conditional Expressions

The following values are computed from the prescription using the definitions in the patent text. The image height Y is the published infinity value, and BF is the physical distance from the last lens surface to the image, including the cover plate. Table 6 is quoted as printed even where it disagrees with those definitions. [1, ¶0146–0247; Table 6, p.38]

| No. | Prose-defined expression | Computed | Table 6 | Broad bound |
|---|---|---:|---:|---|
| 1 | L_STO/LL | 0.376601 | 0.38 | 0.1 < value < 0.6 |
| 2 | LL/Y | 3.978861 | 3.98 | 2 < value < 10 |
| 3 | TG3A/TL3E | 10.417667 | 10.42 | 0.1 < value < 20 |
| 4 | abs(FL_L3E/FL) | 1.231507 | 1.23 | value < 7 |
| 5 | (RrL3E+RfL3E)/(RrL3E-RfL3E) | 2.159516 | 2.16 | -1 < value < 4.5 |
| 6 | TG3P/TG3M | 5.221500 | 10.42 | 0.25 < value < 20 |
| 7 | TSTO/Y | 0.168891 | 0.17 | 0.05 < value < 0.5 |
| 8 | abs(NdL1BE-NdL2F) | 0.000370 | 0.00037 | value < 0.2 |
| 9 | BF/Y | 0.748962 | 0.75 | 0.3 < value < 3 |
| 10 | TFOC_L3E/FL | 0.722491 | 0.72 | 0.3 < value < 3 |
| 11 | TSTO_L3E/FL | 1.098130 | 2.92 | 0.5 < value < 6 |
| 12 | FL_G1B/FL_G1 | 0.774791 | 0.77 | 0.2 < value < 5 |
| 13 | TG3/FL | 0.413792 | 0.41 | 0.1 < value < 2 |

All broad bounds in the patent text are satisfied. Condition (6) prints 10.42, duplicating the air-gap ratio in (3), whereas its defined positive-to-negative lens-thickness ratio is 5.2215. Condition (11) prints 2.92, which does not reproduce from its defined stop-to-last-lens distance; the cause is not identified. The condition (12) table heading reverses the ratio defined in the text, which its printed value follows. These contradictions concern the summary table only, and the prescription is used as printed.

## Aperture and Model Limitations

The stop location is published, but its physical diameter and lens clear apertures are not. The model iris radius is calibrated by an exact axial ray at the printed infinity f-number; this calibration is not independent confirmation of a manufacturing diaphragm diameter. All other clear radii are inferred. Most come from optical clearance with figure-based shape checks and sit 0–7% above the rims drawn in Figure 1(a). The cemented L3–L4 pair and L9 are instead scaled from that drawing, which is drawn to the prescription's axial scale: 12.9 mm on the front of L3, 14.4 mm at the cemented junction, 14.8 mm on the rear of L4, and 15.0 mm and 16.7 mm on the front and rear of L9. The figure ends the concave front faces of L3 and L9 at flat annuli inside the outer diameter, so those two faces carry smaller radii than the rims of their elements.

The patent’s infinity image height is 21.3629 mm, below the 21.633 mm corner of the 36 × 24 mm format, so the corner chief ray needs a 24.44° half-field where the patent states 24.14°. With the modeled rims, an exact meridional trace at both printed focus states passes the full on-axis beam, whose largest heights are 11.66 mm on the front of L3, 13.29 mm at the junction and 13.88 mm on the rear of L4. The format-corner chief ray reaches at most 12.91 mm and 14.37 mm on the two faces of L9. Off-axis bundles are clipped at element rims: at infinity about 90% of stop-filling rays pass every rim at 18° and 64% at the format corner. No stop-filling ray is first clipped at the cemented junction, at infinity or at the 349 mm conjugate. The front rim of L3 trims the lower edge of mid-field bundles; it is the first rim to clip about 2.4% of stop-filling rays near 18° and 0.2% or less at the field edge.

These vignetting figures follow from estimated rims and describe the model, not the production lens. They do not establish its measured vignetting, MTF or other real-lens performance.

## Sources

1. Japan Patent Office, [JP2022182997A](https://patents.google.com/patent/JP2022182997A/en), published 8 December 2022. Original Japanese PDF pp.1, 7–9, 16–24, 27–29, 38–39; Numerical Example 1, Tables 1A–1G and 6, Figure 1.
2. Leica Camera AG, [Summicron-SL 50 f/2 ASPH. Technical Data](https://leica-camera.com/sites/default/files/pm-90762-EN_Datenblatt%20Summicron-SL%2050%20ASPH.pdf), February 2023, pp.1–2.
3. OHARA, [glass catalog data](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip), retrieved 10 October 2026.
4. HOYA, [glass catalog data](https://www.hoya-opticalworld.com/common/xls/HOYA20260601.xlsx), retrieved 10 October 2026.
5. SCHOTT, [glass catalog data](https://media.schott.com/api/public/content/7f5a58f7fa754445abab44cafc76acb3?v=a102056c&download=true), retrieved 10 October 2026.
6. HIKARI, [glass catalog data](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_ALL_Catalog_Data.xlsx), retrieved 10 October 2026.
7. CDGM, [glass catalog data](https://www.cdgmgd.com/downloadFile.htm?uid=d5ilBXjFgXCK9VxoDmb), retrieved 10 October 2026.
8. SUMITA, [glass catalog data](https://www.sumita-opt.co.jp/en/wp/wp-content/themes/sumita-opt-en-v2026/download-files.php), retrieved 10 October 2026.
9. Panasonic, [LUMIX S 50mm F1.8 (S-S50) features and specifications](https://help.na.panasonic.com/answers/features-and-specifications-lumix-lens-model-s-s50/), retrieved 10 October 2026.
