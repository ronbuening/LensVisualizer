## Patent Reference and Design Identification

**Patent:** US 2025/0334777 A1  
**Application Number:** 19/181,724  
**Filed:** April 17, 2025  
**Published:** October 30, 2025  
**Priority:** April 25, 2024, JP 2024-071914  
**Inventors:** Yoshiaki Kurioka; Kunio Dohno  
**Applicant:** Panasonic Intellectual Property Management Co., Ltd.  
**Title:** Imaging Optical System, Image Capture Device, and Camera System  
**Embodiment analyzed:** Example 4 / fourth embodiment, Tables 4A–4D and Fig. 4A.

The prescription is examined as a candidate design correlation for the Panasonic LUMIX S 26mm F8, S-R26. It is not a manufacturer-confirmed production prescription. Example 4 has a focal length of 24.72 mm and a near limit of 0.20 m from object to image, against the marketed 26 mm and 0.25 m minimum focus distance. The patent's front page, fourth-embodiment description and numerical example are the optical source; Panasonic's product specifications and manual describe the marketed lens. [1–4]

Several features support the correlation, while the numerical differences limit its certainty:

1. Both have five optical elements in five air-spaced groups. Panasonic identifies one UED element and excludes a separate front protective-glass element from its count. The patent's low-dispersion front element is compatible with that broad description, but catalog coordinates do not establish the production material. [1, ¶0066; 2]
2. The source is a small front-stop design with printed infinity focal length 24.7165 mm and F-number 7.96280, reasonably near the marketed 26 mm and fixed F8. The source values are retained without scaling. [1, Table 4C; 2]
3. Panasonic specifies mechanical manual focusing. The patent publishes rigid-unit optical movement, but the manufacturer sources examined do not establish that internal optical mechanism. [1, ¶0075; 3]
4. The patent's finite endpoint is approximately 0.200 m from object to image, whereas the product's minimum focus distance is 0.25 m. The source infinity image height is 19.7600 mm, below the corner radius of a 36 × 24 mm format. Neither difference is fitted away. [1, Table 4C; 2]
5. The Japanese priority date precedes the product's May 23, 2024 announcement. That chronology is compatible with the correlation, but does not prove it. [1, front page; 4]

## Optical Architecture

This is an all-spherical, five-meniscus, front-stop prime with alternating positive–negative–positive–negative–positive power. Each lens is an air-spaced group; the entire five-lens assembly is also one mechanical focus unit. The stop is ahead of the first lens, and the final positive lens is followed by the prescribed parallel plate P and physical image plane S. [1, ¶¶0066–0075; Fig. 4A; Tables 4A–4B]

The patent's functional labels map to L1 = LF1, L3 = LR3, L4 = LR2 and L5 = LR1; L2 is an additional negative meniscus. The rear positive–negative–positive sequence and the low-index, low-dispersion lens next to the front stop are central to the described configuration. The patent frames its dimensional conditions as a balance between compactness, room behind the lens, and aberration control; they are not independent performance measurements. [1, ¶¶0070–0079, 0082–0089, 0096–0105]

From the printed prescription, the calculated d-line EFL is 24.716441 mm. At infinity, the physical stop-to-image track is 33.999030 mm and the physical distance from the last lens vertex to S is 15.549130 mm, including P. The track/EFL ratio is 1.375563. The physical last-vertex-to-image distance is 0.629099 of the EFL, and the Gaussian (air-equivalent) back focal distance of 14.8336 mm is 0.600 of it. These quantities do not support calling the design telephoto or retrofocus on those ratio criteria alone.

P retains its source thickness of 2.10000 mm, nd = 1.51680 and νd = 64.2. It is modeled as camera-side glass rather than a sixth lens in the drawn five-element section. Source dummy plane 14 has no refracting power; combining its 1.00000 mm air interval with signed BF = −0.05087 mm leaves a 0.94913 mm physical gap from P to S. No glass thickness is converted to an air-equivalent gap, and the original image plane is preserved. Panasonic's front protective glass is a separate component that the patent does not list, and it is not added. [1, ¶0067; Table 4A/C; 2]

## Element-by-Element Analysis

The focal lengths below are calculated standalone thick-element focal lengths in air from the printed prescription. They are not additive in-situ contributions to the system focal length, nor a decomposition of its aberrations. Glass names are catalog equivalents by nd and νd; the actual supplier and melt are unknown.

### L1 — Positive Meniscus, Convex to Object

nd = 1.43700, νd = 95.1. Glass: FCD100 (HOYA; coordinate equivalent, supplier unconfirmed). f = +36.87 mm.

L1 is the positive LF1 immediately behind the stop. Its low index and high Abbe number are explicit subjects of conditions (3) and (4). The patent associates its index bounds with the balance of spherical aberration, and a sufficiently high Abbe number with limiting axial chromatic aberration. Those statements support the choice of a low-dispersion front element without establishing its isolated contribution to a complete chromatic correction. [1, ¶0070, ¶¶0096–0108]

The front surface is more strongly curved than the rear, giving the object-convex meniscus its positive standalone power. The source contains no aspheric coefficients for this surface pair. FCD100 is a catalog match, not evidence that the production lens uses that exact HOYA material. Panasonic's construction diagram marks the front element as the UED element, so the model tags L1's anomalous partial dispersion as inferred (FCD100 catalog ΔPgF ≈ +0.050); the patent does not state it. [1, Tables 4A–4D; 2; 5]

### L2 — Negative Meniscus, Convex to Image

nd = 1.94595, νd = 18.0. Glass: FDS18 (HOYA; coordinate equivalent, supplier unconfirmed). f = −55.09 mm.

L2 adds negative power behind the front positive element and uses the most dispersive of the five glasses. Its imageward-convex front face follows the geometry discussed in ¶¶0109–0110 for the lens immediately after LF1. The patent presents that geometry as useful for aberration compensation, including spherical aberration; the sign and glass coordinate alone do not quantify a particular correction assigned to L2. [1, ¶0071; Table 4A]

HOYA's AGF and Excel catalogs differ by 0.00001 in the listed FDS18 index, and the AGF Abbe number is 17.98, compatible with the patent's one-decimal 18.0. The patent's index is used as printed. [5]

### L3 — Positive Meniscus, Convex to Image

nd = 1.81600, νd = 46.6. Glass: TAF5 (HOYA; coordinate equivalent, supplier unconfirmed). f = +13.73 mm.

L3 is the patent's LR3 and has the strongest positive standalone power of the five lenses. Its rear surface faces the front surface of negative L4 across the air interval governed by condition (5). The patent therefore discusses these two facing curvatures together rather than treating L3 as an isolated aberration corrector. [1, ¶0072, ¶¶0115–0120; Tables 4A–4D]

TAF5 is one of several compatible catalog coordinates. The intermediate dispersion of this element, compared with L1 and the negative lenses, describes the glass palette but does not by itself demonstrate an apochromatic design.

### L4 — Negative Meniscus, Convex to Image

nd = 1.69513, νd = 24.0. Glass: Unmatched (no match in six supplier catalogs). f = −12.12 mm.

L4 is LR2, the negative member between rear positive lenses L3 and L5. Its stronger negative standalone power distinguishes it from the weaker negative L2. The source expressly connects the shape factor between L3 and L4 to spherical-aberration balance, but does not provide an element-resolved aberration budget. [1, ¶0073, ¶¶0115–0120]

No material matching at the patent's rounding was found in the OHARA, HOYA, Schott, HIKARI, CDGM and Sumita catalogs. The pair is printed only in Example 4: lens LR2 carries a different index pair in each of the four examples (1.65731 / 21.2, 1.60817 / 29.3 and 1.65388 / 26.1 in Examples 1–3), whereas the pairs of L1, L3 and L5 recur in Example 2 or 3. The patent names no glass and prints no further indices or partial dispersion. The model keeps the patent's index and Abbe number and labels the glass Unmatched. Its dispersion is therefore an Abbe-number estimate rather than a catalog spectrum. [1, Tables 1A–4A; 5–10]

### L5 — Positive Meniscus, Convex to Image

nd = 2.00100, νd = 29.1. Glass: TAFD55 (HOYA; coordinate equivalent, supplier unconfirmed). f = +32.17 mm.

L5 is LR1, the final positive lens before P and S. Its high-index material and image-convex meniscus provide positive standalone power in the specified rear sequence. The patent constrains the space from its rear surface to the image through condition (2), balancing compactness with room to couple the optical system to the sensor. [1, ¶0074, ¶¶0086–0091]

Nothing in the power sign alone establishes that L5 is a field flattener or the sole control of image-space ray angles. Its function must be read as part of the complete rear sequence and the explicitly prescribed camera-side plate.

## Glass Identification and Selection

The patent gives d-line indices and Abbe numbers only. The positive front element's low dispersion contrasts with the higher dispersion of the two negative lenses; this is consistent with distributing chromatic balance among opposed powers. A complete secondary-spectrum or APO claim would require material-specific spectral support and a relevant system calculation, neither of which is established for the actual manufactured glasses.

| Location | Patent nd / νd | Catalog equivalent | Qualification |
|---|---|---|---|
| L1 | 1.43700 / 95.1 | HOYA FCD100 | Coordinate equivalent; UED position, APD inferred |
| L2 | 1.94595 / 18.0 | HOYA FDS18 | Matches HOYA's AGF value; its Excel catalog lists 1.94594 |
| L3 | 1.81600 / 46.6 | HOYA TAF5 | Compatible alternatives also exist |
| L4 | 1.69513 / 24.0 | Unmatched | No match in six supplier catalogs |
| L5 | 2.00100 / 29.1 | HOYA TAFD55 | Coordinate equivalent; alternatives also exist |
| P | 1.51680 / 64.2 | HOYA BSC7 | Camera plate; equivalent alternatives also exist |

The model traces the named catalog entries on their catalog dispersion curves and L4 on an Abbe-number estimate. The single-vendor set of names does not establish a single production supplier. The catalog dispersion data are not patent-published line indices or melt measurements, and no nC, nF, ng or ΔPgF values are added to the prescription. [5–10]

## Focus Mechanism

The patent uses unit focusing: L1–L5 move together toward the object while their internal spacings remain constant. The stop-to-L1 gap is also fixed in the numerical prescription, so the stop moves with the lenses, an option the patent states in ¶0114 and draws in panel (b) of Fig. 4A. P and S remain camera-side. [1, ¶0075, ¶0114; Fig. 4A; Table 4C]

| Quantity | Infinity | Published near endpoint |
|---|---:|---:|
| d11, last lens to P, mm | 12.5000 | 16.7736 |
| Physical stop-to-S track, calculated mm | 33.999030 | 38.272630 |
| Object-to-stop distance d0, mm | ∞ | 161.7260 |
| Physical stop radius, mm | 1.552 | 1.552 |
| Printed F-number | 7.96280 | 9.00883 |

The objectward travel is 4.2736 mm. The near object lies 162.0560 mm from the first glass vertex and 199.99863 mm from S; these differ from d0 because the patent's first surface is the stop. The calculated near Gaussian magnification is −0.172905. Panasonic separately specifies 0.25 m minimum focus and 0.14× maximum magnification for the product; the model does not adjust its movement to reproduce those marketed quantities. [1, Table 4C; 2]

At the published fixed stop radius, the calculated nominal entrance-pupil F-number is 7.962771, while finite-conjugate working N at the near state is 9.008793. The larger near value does not imply that the iris closes. The model's nominal F-number is the EFL divided by twice the printed stop radius, which keeps the physical aperture at 1.552 mm. [1, Table 4A/C]

Only the two endpoints are published. Positions and distance labels between them are interpolated estimates, not a published focus law.

The manufacturer's manual-focus description establishes the production control method, but not its internal optical movement. No unsupported drive motor, floating subgroup or stabilization mechanism is inferred. [3]

## Inter-Element Air Shape and Conditional Expressions

The patent explicitly treats the interval between the rear face of L3 and the front face of L4 as an air-lens shape. In Example 4, these are surfaces 7 and 8. Condition (5) evaluates their radius combination, not an isolated element focal length. The calculated shape factor is −0.142311; the source discusses opposite spherical-aberration biases outside its bounds. This supports a geometric interaction between the facing surfaces without assigning a measured aberration contribution to either lens. [1, ¶¶0115–0120]

The following primary inequalities are recalculated from the printed prescription. The printed fourth-example values appear in the conditions table on PDF page 23 / printed page 12. Definitions and preferred subranges are in ¶¶0080–0143. All nine primary inequalities are satisfied.

| Condition | Quantity and primary bounds | Calculated | Printed |
|---|---|---:|---:|
| (1) | 0.5 < Linf/Yinf < 2.65 | 1.720599 | 1.721 |
| (2) | 0.5 < BLinf/Yinf < 2.0 | 0.786899 | 0.787 |
| (3) | nd of LF1 < 1.65 | 1.43700 | 1.43700 |
| (4) | 50 < νd of LF1 | 95.1 | 95.1 |
| (5) | −1.0 < (R8 − R7)/(R8 + R7) < 0.5 | −0.142311 | −0.142 |
| (6) | 0.5 < stop-to-L5-rear distance/Yinf < 3.0 | 0.933699 | 0.934 |
| (7) | 0.2 < summed lens thickness/stop-to-L5-rear distance < 0.9 | 0.544930 | 0.545 |
| (8) | 0.03 < L1 front radial extent/EFL < 0.50 | 0.080958 | 0.081 |
| (9) | 0.01 < stop-to-L1-front distance/Yinf < 0.2 | 0.016700 | 0.017 |

Linf is the physical distance from the frontmost optical plane, here the stop, to S; BLinf is the physical distance from the last lens surface to S. Paragraph 0088 reverses the ratio in its prose description, whereas equation (2), the definitions in ¶¶0086–0087, the reasoning in ¶0089 and the tabulated value consistently support BLinf/Yinf. The equation is followed without changing any prescription value.

Conditions (1), (2) and (6) constrain total length and rear space; (3) and (4) constrain the front glass; (5) concerns the facing rear curvatures; (7) balances glass thickness against the occupied length; and (8) and (9) address the front aperture scale and stop placement. The printed “effective diameter” is explicitly a radial ray height in ¶0170, consistent with the radius interpretation in ¶0135. It is therefore not halved in condition (8) or in the modeled rims.

## Model Scope and Limitations

The patent values are used without focal-length scaling, glass substitution or a reconstructed focus state. The calculated EFL of 24.716441 mm differs from the printed 24.7165 mm by about −0.000059 mm, within the rounding of the printed radii and gaps.

The computed surface-by-surface Petzval sum is +0.005684871 mm⁻¹. This is a paraxial curvature diagnostic, not a complete prediction of best-focus field shape. The rims are the printed ray-height radii, except that the front faces of L1, L3 and L5 are raised to their rear faces' radii because Fig. 4A draws those elements square-cut; every element has positive edge thickness.

The modeled image circle is 39.52 mm, twice the printed infinity image height. Real chief rays at the printed half-fields of 41.196° and 37.7225° reach image heights of 19.759735 mm at infinity and 19.919898 mm in the near state. At infinity f·tan ω is 21.63 mm, the full-frame corner, so the real image height is about 8.7% smaller. Those values are not evidence for unvignetted full-frame-corner coverage.

At the infinity half-field of 41.196° the outer edge of the full-aperture meridional bundle exceeds the printed radii of surfaces 7 and 8 by about 0.001 mm and 0.012 mm, so it is clipped slightly there. The near-state bundle at 37.7225°, the axial bundles and the chief rays pass. The printed radii are kept.

Ray results refer to the patent's image plane behind plate P. P has no printed rim, so the model gives it a non-clipping one, which is not a measured clear aperture.

## Sources

1. [US 2025/0334777 A1, *Imaging Optical System, Image Capture Device, and Camera System*](https://patents.google.com/patent/US20250334777A1/en). Original publication front page; Fig. 4A, PDF page 8 / sheet 7; fourth embodiment, ¶¶0064–0075, PDF page 14 / printed page 3; conditions, ¶¶0080–0143, PDF pages 15–18 / printed pages 4–7; definitions, ¶0170, PDF page 20 / printed page 9; Tables 1A–3A of the other examples, PDF pages 21–22 / printed pages 10–11; Tables 4A–4D and the fourth-example conditions, PDF page 23 / printed page 12.
2. [Panasonic Japan, S-R26 specifications](https://panasonic.jp/dc/products/S-R26/spec.html) and [product overview](https://panasonic.jp/dc/products/S-R26.html). Five-element/five-group count excluding front protective glass, UED count, marketed focal length/aperture, format, minimum focus and maximum magnification.
3. [Panasonic, S-R26 owner's manual, DVQX2511ZA](https://help.na.panasonic.com/wp-content/uploads/2024/06/SR26_DVQX2511ZA_ENG_FRE_ESP.pdf). Manual-focus and fixed-aperture operation.
4. [Panasonic Japan, S-R26 announcement, May 23, 2024](https://news.panasonic.com/jp/press/jn240523-2).
5. [HOYA optical-glass downloads](https://www.hoya-opticalworld.com/english/datadownload/index.html), [June 1, 2026 Excel catalog](https://www.hoya-opticalworld.com/common/xls/HOYA20260601.xlsx), and [July 7, 2026 AGF catalog](https://www.hoya-opticalworld.com/common/agf/HOYA20260707.agf). Catalog equivalents and the FDS18 index difference between the two formats.
6. [OHARA optical-glass catalog](https://www.ohara-inc.co.jp/product/catalog/). Reviewed for compatible and alternative coordinates; no supplier attribution.
7. [HIKARI optical-glass catalog](https://www.hikari-g.co.jp/optical_glass/catalog/).
8. [Schott optical-glass downloads](https://www.schott.com/en-gb/products/optical-glass-p1000267/downloads).
9. [Sumita optical-glass downloads](https://www.sumita-opt.co.jp/en/download/).
10. [CDGM optical-glass downloads](https://www.cdgmgd.com/go.htm?k=Download&url=downList).
