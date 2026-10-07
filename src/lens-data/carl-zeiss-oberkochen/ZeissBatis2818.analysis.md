# CARL ZEISS BATIS 18mm f/2.8

## Patent Reference and Design Identification

**Patent:** JP 2016-188967 A\
**Application Number:** JP2015-69442\
**Filed:** 2015-03-30\
**Published:** 2016-11-04\
**Inventor:** Keisuke Omori\
**Applicant:** Tamron Co., Ltd.\
**Title:** Inner focusing lens (インナーフォーカス式レンズ)\
**Embodiment analyzed:** Example 1 (実施例1)

The prescription is transcribed from Example 1 of JP 2016-188967 A. The patent describes a wide-angle inner-focus lens with a positive first group G11, a negative single-element focus group G12, and a negative third group G13. G11 and G13 remain fixed while G12 translates toward the image side for closer focus. The numerical example is given on patent pages 12–15, with the asphere equation defined on page 26 and the Example 1 optical section and aberration plots on page 27 (JP 2016-188967 A, ¶0088–¶0106, ¶0164–¶0166).

The production-lens identification is a strong correlation, not a manufacturer-confirmed patent attribution. ZEISS specifies the Batis 2.8/18 as an 18 mm, f/2.8, 11-element/10-group, full-frame Sony E-mount lens with a 0.25 m focusing limit and 99° diagonal field. The patent example independently gives 11 active elements in 10 air-separated groups, a computed infinity EFL of 18.541544 mm, a published FNO of 2.88, and a published 50.29° half-field. Reference-plane normalization maps the patent's printed 158.000 mm closest-state distance to 250.001 mm object-to-image distance under the supported front-vertex interpretation, consistent with the manufacturer's 0.25 m MFD. ZEISS does not identify JP 2016-188967 A as the Batis patent, and the patent applicant is Tamron Co., Ltd.; accordingly, the match remains an inference rather than an ownership or manufacturing claim.

The implemented model keeps marketed and design quantities separate. The catalog identity is 18 mm and f/2.8, whereas the verified prescription is 18.541544 mm at infinity and is modeled at F/2.88. No uniform scaling has been applied.

## Optical Architecture

The final model contains 11 glass elements and 10 air-separated element groups, including one cemented pair, L115+L116. At the patent's power-group level the architecture is positive G11, negative G12, negative G13. G13 is further divided into a positive front subgroup G13F and a negative rear subgroup G13R (JP 2016-188967 A, ¶0088–¶0093).

G11 contains seven elements, the aperture stop, and most of the front-end optical power. The patent explicitly associates the frontmost negative meniscus arrangement with wide-angle realization and places the stop inside G11. The independently recomputed group EFL is +10.282320 mm. G12 is the single negative meniscus L121; because it is one element, its standalone-in-air focal length and its group focal length are the same, −45.915551 mm. G13 is a weak net negative rear group at −723.319455 mm, formed by a positive G13F subgroup at +31.150522 mm and a negative G13R subgroup at −28.425101 mm.

By the project's numerical terminology, the prescription is retrofocus at infinity: Gaussian BFD from the final active surface is 24.731010 mm while EFL is 18.541544 mm, giving BFD/EFL = 1.333816. The model track now includes the cover glass CG, carried in `rearPlates`, so it equals the corrected physical source track of 92.001 mm and gives TL/EFL = 4.961884. The former cover-omitted air-equivalent track gave TL/EFL = 4.914704. Both are far above 1, so the design is not classified as telephoto under the project's TL/EFL < 1 rule. ZEISS markets the production lens as a Distagon design; that product designation is compatible with the verified long-back-focus geometry but is not used as proof of the patent attribution.

The rear group follows the design logic stated in the patent. G13F is positive and G13R is negative, with the widest axial air interval inside G13 separating the two subgroups. The patent describes this arrangement as a means of controlling the image-side lens diameter while distributing axial and off-axis correction between the subgroups (JP 2016-188967 A, ¶0056–¶0058, ¶0091–¶0092). The modeled data preserves that source architecture without inactive planes. The cover glass is carried separately in `rearPlates`.

## Element-by-Element Analysis

### L111 — Negative Meniscus

**nd = 1.59350, νd = 67.00. Glass: 593670 class (supplier unconfirmed). Standalone f = −60.892 mm.**

L111 is the frontmost negative meniscus of G11. This placement is source-significant rather than merely descriptive: the patent states that at least one negative meniscus at the object side of G11 facilitates wide-angle coverage (JP 2016-188967 A, ¶0038, ¶0089). The element is spherical in the selected example.

The class label is coordinate-based. No supplier or melt identity is asserted, and no line-index or anomalous-dispersion property is attached to the element in the data file.

### L112 — Negative Meniscus

**nd = 1.49700, νd = 81.61. Glass: 497816 low-dispersion crown class (supplier unconfirmed). Standalone f = −49.195 mm.**

L112 is the second negative meniscus in the front section. Together with L111 and L113 it precedes the first positive member of G11, so the front of the lens begins with a deliberately negative sequence before the group turns strongly positive overall. The patent gives no separate aberration assignment for L112, so the analysis does not attribute a specific chromatic or monochromatic correction to this element alone.

The 1.49700/81.61 coordinate is compatible with multiple vendor families in the catalog comparison. The data therefore retains a class-level label rather than selecting a named supplier glass.

### L113 — Negative Meniscus with Two Aspherical Surfaces

**nd = 1.59200, νd = 67.02. Glass: 592670 molded PCD51/Q-PSKH4S class (supplier unconfirmed). Standalone f = −29.263 mm.**

L113 is a negative meniscus whose two surfaces, 5A and 6A, are aspherical. It adds geometric degrees of freedom early in G11 before the strongly positive middle section. The patent identifies both surfaces as aspheres but does not assign L113 a unique aberration-correction function separate from the group as a whole (JP 2016-188967 A, ¶0089, ¶0095–¶0096).

The glass wording deliberately names a coordinate class rather than a proven manufacturer product. The model therefore uses the patent's nd and νd directly and does not attach catalog Sellmeier or partial-dispersion data.

### L114 — Positive Meniscus

**nd = 1.88100, νd = 40.14. Glass: 881401 TAFD33 class (supplier unconfirmed). Standalone f = +43.392 mm.**

L114 is the first positive element after the three negative front members. Its positive power helps reverse the front section from negative local powers toward the strongly positive net power of G11. The selected patent example provides no individual aberration role for L114, so its function is described only in relation to the verified power distribution.

### L115 — Negative Meniscus, Cemented to L116

**nd = 1.88100, νd = 40.14. Glass: 881401 TAFD33 class (supplier unconfirmed). Standalone f = −35.916 mm.**

L115 is the negative member of the only cemented pair in the prescription. Its rear surface is also the cemented junction into L116; in the implemented data that junction correctly carries the downstream L116 medium and element identity.

The standalone value above describes L115 by itself in air. It should not be confused with the power of the cemented pair in situ.

### L116 — Biconvex Positive, Cemented to L115

**nd = 1.48750, νd = 70.44. Glass: 487704 low-index crown class (supplier unconfirmed). Standalone f = +20.910 mm.**

L116 is the positive member of the L115+L116 cemented pair. The independently recomputed net focal length of the cemented pair is +48.939 mm, which differs from either member's standalone-in-air power because the common interface is glass-to-glass rather than glass-to-air.

The pair combines substantially different nd/νd coordinates, but the patent does not assign it a specific apochromatic or anomalous-dispersion role. The analysis therefore does not infer secondary-spectrum behavior from the coordinate contrast alone.

### L117 — Biconvex Positive with Two Aspherical Surfaces

**nd = 1.49710, νd = 81.56. Glass: 497816 molded low-dispersion class (supplier unconfirmed). Standalone f = +23.843 mm.**

L117 is the final element of G11 and lies immediately behind the aperture stop. Both surfaces, 13A and 14A, are aspherical. The patent states generally that placing an aspherical positive lens in G11 is effective for spherical-aberration correction; L117 is the positive two-asphere member of G11 in Example 1 (JP 2016-188967 A, ¶0083, ¶0089).

The element also defines the object-side boundary of the first variable focus gap, D(14). Its own element position remains fixed; the changing gap reflects motion of the following G12 element.

### L121 — Negative Meniscus Inner-Focus Element with Two Aspherical Surfaces

**nd = 1.72900, νd = 54.04. Glass: 729540 high-index low-dispersion molded class (supplier unconfirmed). Standalone f = −45.916 mm.**

L121 alone constitutes G12, the moving inner-focus group. The patent specifically favors a single negative lens component for G12 to reduce focus-group size and mass, and it states that aspherization of the G12 lens is effective for field-curvature correction and for reducing focus-dependent variation of that aberration (JP 2016-188967 A, ¶0069–¶0070, ¶0084, ¶0090).

Surfaces 15A and 16A are both aspherical. During the published focus movement, L121 shifts 0.846 mm toward the image side while G11 and G13 remain stationary.

### L131 — Positive Meniscus

**nd = 1.49700, νd = 81.61. Glass: 497816 low-dispersion crown class (supplier unconfirmed). Standalone f = +80.283 mm.**

L131 is the first positive element of G13F. The patent treats G13F as a positive front subgroup rather than assigning separate tasks to L131 and L132. At the subgroup level, the positive front section is described as helping limit the diameter of the image-side optics while participating in axial-aberration correction (JP 2016-188967 A, ¶0056–¶0057, ¶0091–¶0092).

### L132 — Positive Meniscus

**nd = 1.49700, νd = 81.61. Glass: 497816 low-dispersion crown class (supplier unconfirmed). Standalone f = +49.630 mm.**

L132 completes G13F. The 0.100 mm air space between L131 and L132 keeps them as separate physical groups despite their matching patent nd/νd coordinates. Their combined action is represented by the verified G13F focal length of +31.150522 mm; no claim is made that either element alone supplies the subgroup-level correction described in the patent.

### L133 — Biconcave Negative with Two Aspherical Surfaces

**nd = 1.88200, νd = 37.22. Glass: 882372 molded TAFD307 class (supplier unconfirmed). Standalone f = −28.425 mm.**

L133 is the final lens element and the negative G13R subgroup. The patent explicitly favors a negative single-lens component at the image side and applies a shape condition to its two air-boundary radii. It associates that rear negative component with reduced rear-lens diameter and off-axis correction, including coma, while separately stating that aspherization within G13 is effective for field-curvature correction (JP 2016-188967 A, ¶0058–¶0063, ¶0076–¶0078, ¶0085, ¶0092).

Both surfaces 21A and 22A are aspherical. L133 is also the last powered element. Behind it, the patent's cover glass CG is modeled in `rearPlates`: every analysis traces it, but the diagram does not draw it.

## Glass Identification / Selection

The patent publishes nd and νd coordinates but does not name glass suppliers. The analysis therefore treats the strings in the data file as class or six-digit-coordinate descriptions. The catalog comparison screened OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA sources and found several coordinates with more than one plausible vendor family. A coordinate match is not treated as proof of supplier, melt, or Sellmeier behavior.

| Data-file glass label | nd | νd | Elements | Status |
|---|---:|---:|---|---|
| 593670 class | 1.59350 | 67.00 | L111 | Supplier unconfirmed |
| 497816 low-dispersion crown class | 1.49700 | 81.61 | L112, L131, L132 | Supplier unconfirmed |
| 592670 molded PCD51/Q-PSKH4S class | 1.59200 | 67.02 | L113 | Supplier unconfirmed |
| 881401 TAFD33 class | 1.88100 | 40.14 | L114, L115 | Supplier unconfirmed |
| 487704 low-index crown class | 1.48750 | 70.44 | L116 | Supplier unconfirmed |
| 497816 molded low-dispersion class | 1.49710 | 81.56 | L117 | Supplier unconfirmed |
| 729540 high-index low-dispersion molded class | 1.72900 | 54.04 | L121 | Supplier unconfirmed |
| 882372 molded TAFD307 class | 1.88200 | 37.22 | L133 | Supplier unconfirmed |

No element in the final data file carries nC, nF, ng, or dPgF. Consequently the model does not support a lens-level APO claim or an element-level anomalous-partial-dispersion assignment. ZEISS product literature describes the production Batis 2.8/18 as using special glass, and the current ZEISS product page identifies anomalous partial dispersion among the production design features. That manufacturer statement is kept separate from the patent prescription: it is not mapped onto any specific modeled element without an exact glass identity and supporting spectral data.

## Focus Mechanism

The patent's focus status is PUBLISHED rather than reconstructed. G11 and G13 stay fixed, while the single-element negative G12 group moves toward the image side from infinity to the printed closest state (JP 2016-188967 A, ¶0036, ¶0093, ¶0097).

| Quantity | Infinity | Published closest state |
|---|---:|---:|
| D(14), surface 14A → 15A | 1.472 mm | 2.318 mm |
| D(16), surface 16A → 17 | 6.519 mm | 5.674 mm |
| Computed system EFL | 18.541544 mm | 17.891005 mm |
| G12 paraxial β | 1.828752 | 1.811593 |

The net G12 translation is 0.846 mm imageward. D(14)+D(16) changes by only 0.001 mm between the printed endpoints, consistent with the three-decimal source precision for a nominally translating single group. The independently recomputed β ratio is 1.009472; this satisfies the patent's condition (3), which the patent associates with limiting focus-related angle-of-view change.

The patent labels the close state as object distance 158.000 mm but does not state the reference plane for that distance. The model retains a supported front-vertex interpretation rather than converting it into a new patent fact. With the corrected physical source track, 158.000 mm + 92.001 mm = 250.001 mm from object to image plane, consistent with the manufacturer's 0.25 m MFD. Using the printed three-decimal D(14)/D(16) state at exactly 158.000 mm, paraxial tracing places best focus 24.786581 mm behind surface 22 rather than at the 24.754207 mm air-equivalent image-plane distance (22.106 mm air, CG, 1.000 mm air), a +0.032374 mm residual; the corresponding refocused paraxial magnification is |m| = 0.105668, or about 1:9.4636. The internal focus endpoint itself remains exactly the published D(14)/D(16) state; no production-MFD-driven focus reconstruction is used.

The data file's `closeFocusM` is therefore a production/display reference of 0.25 m, while the optical movement stored in `var` comes directly from the patent's two published spacing states.

## Aspherical Surfaces

Example 1 uses eight aspherical surfaces: 5A, 6A, 13A, 14A, 15A, 16A, 21A, and 22A. The patent equation is the standard rotationally symmetric conic-plus-even-polynomial form

$$
Z(h)=\frac{c h^2}{1+\sqrt{1-(1+k)c^2h^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}.
$$

Here $c=1/R$, and the patent's $k$ maps directly to LensVisualizer `K`; all eight Example 1 conic constants are zero. The coefficients therefore require no conic-convention conversion and, because no uniform scale is applied, no coefficient rescaling (JP 2016-188967 A, ¶0096; asphere equation at ¶0165–¶0166).

One coefficient departs from the printed table. Patent page 14 prints the A10 term of surface 14A as +2.3692×10^-11 mm^-9, and the model uses −2.3692×10^-11 mm^-9. Example 4 reprints the same surface as its surface 13, with the same radius, glass, A4, A6 and A8, but with the negative sign (page 24, ¶0153), and the corresponding surface of Examples 2 and 3 is also negative (¶0115, ¶0134). With the printed sign, the axial marginal ray at the published F/2.88 focuses 15.07 mm behind the paraxial image and converges at F/4.03, whereas the patent's Example 1 spherical-aberration plot (Fig. 2) stays within about 0.06 mm on a ±0.50 mm axis. With the negative sign the same ray focuses 0.024 mm ahead of the paraxial image and converges at F/2.878.

| Surface | A4 (mm^-3) | A6 (mm^-5) | A8 (mm^-7) | A10 (mm^-9) |
|---|---:|---:|---:|---:|
| 5A | −2.6625×10^-5 | +3.0031×10^-7 | −1.7989×10^-9 | +5.7847×10^-12 |
| 6A | −6.8334×10^-5 | +8.4364×10^-9 | −1.2228×10^-9 | −9.8374×10^-12 |
| 13A | −2.2269×10^-5 | +1.1253×10^-9 | −1.0562×10^-9 | −3.1969×10^-12 |
| 14A | +5.1791×10^-5 | −5.2286×10^-7 | +4.0083×10^-9 | −2.3692×10^-11 |
| 15A | +2.0348×10^-5 | −1.1141×10^-6 | +1.4175×10^-8 | −5.7786×10^-11 |
| 16A | +2.1580×10^-5 | −8.9505×10^-7 | +1.2780×10^-8 | −5.7413×10^-11 |
| 21A | −2.4151×10^-5 | −1.3394×10^-7 | +2.2182×10^-9 | −7.5852×10^-12 |
| 22A | −3.5206×10^-6 | −1.2925×10^-7 | +2.2655×10^-9 | −8.5817×10^-12 |

The patent gives no clear semi-diameters. The final model therefore uses modeled semi-diameters rather than claiming source-published apertures: exact d-line construction traces for surfaces 5A–14A and the Fig. 1 optical rims for surfaces 15A–22A. At those modeled radii, the independently evaluated polynomial departures from the K=0 conic bases are:

| Surface | Modeled semi-diameter | Polynomial departure at rim |
|---|---:|---:|
| 5A | 9.5 mm | −0.080814 mm |
| 6A | 9.1 mm | −0.559620 mm |
| 13A | 9.3 mm | −0.240431 mm |
| 14A | 9.4 mm | +0.160377 mm |
| 15A | 8.3 mm | −0.038075 mm |
| 16A | 8.3 mm | +0.008548 mm |
| 21A | 10.8 mm | −0.294303 mm |
| 22A | 10.8 mm | −0.018945 mm |

These departure signs and magnitudes describe the implemented surface shapes at the modeled apertures; they are not used by themselves to assign a unique aberration contribution to each surface. Patent-level functional statements remain broader: the patent associates a positive asphere in G11 with spherical-aberration correction, G12 aspherization with field-curvature control and its focus variation, and G13 aspherization with field-curvature correction (JP 2016-188967 A, ¶0083–¶0085).

## Conditional Expressions

The patent states eight principal numerical conditions for the design family. Recalculation satisfies all eight. Conditions (1)–(4) and (6)–(8) are evaluated directly from the implemented prescription. Condition (5) is a physical axial-distance ratio in the patent and is therefore evaluated on the corrected physical source track. With the cover glass modeled in `rearPlates`, that is also the model's physical track.

| Condition | Patent limit | Audited value | Result |
|---|---|---:|---|
| (1) f2/f | −7.46 ≤ f2/f ≤ −2.11 | −2.476361 | Satisfies |
| (2) f1/f | 0.28 ≤ f1/f ≤ 1.30 | 0.554556 | Satisfies |
| (3) βinf/βmod | 0.50 ≤ βinf/βmod ≤ 2.02 | 1.009472 | Satisfies |
| (4) (R1+R2)/(R1−R2) | ≥ 0 | 0.874480 | Satisfies |
| (5) L1s/L | 0.24 ≤ L1s/L ≤ 0.95 | 0.462962 | Satisfies |
| (6) f3/f | ≤ −29.1 | −39.010745 | Satisfies |
| (7) νdn | ≥ 30 | 37.22 | Satisfies |
| (8) (R21+R22)/(R21−R22) | ≥ 0 | 2.443734 | Satisfies |

Condition (5) needs a reference-plane distinction. The patent's raw physical track gives 42.593/95.501 = 0.445995, which rounds to its printed 0.45. With d22 corrected to 22.106 mm the physical track is 92.001 mm and the ratio is 42.593/92.001 = 0.462962; that is the corrected-source value in the table. The former cover-omitted air-equivalent track of 91.126207 mm would give 0.467407, but that number was a model-coordinate diagnostic rather than the patent's physical-length definition. All three forms remain within the claimed interval.

## Model Normalization and Verification

The source contains a material rear-plane inconsistency, and the patent itself resolves it. Example 1 prints d22 = 25.606 mm, a BF of 29.106 mm and a total length L of 95.501 mm. First-order tracing gives a Gaussian BFD of 24.731010 mm from surface 22, so the printed table puts the image plane 3.523 mm behind Gaussian focus, far outside the spherical-aberration plot of Fig. 2, whose curves stay within 0.06 mm of the image plane.

The printed 25.606 mm is the back focus from surface 22 to the image plane, entered in the d22 slot: the table then adds the 2.500 mm cover plate and the 1.000 mm air space a second time, and BF and L are sums of that column. Subtracting them gives d22 = 25.606 − 2.500 − 1.000 = 22.106 mm. With that value Example 1 agrees with its sibling examples in three ways. Its total length is 92.001 mm, where Examples 2 and 3 both state L = 92.000 mm. Its back focus is 25.606 mm, formed as d22 + 3.500 mm exactly as Example 2 (22.428 + 3.500 = 25.928 mm) and Example 3 (20.338 + 3.500 = 23.838 mm) form theirs. Its image plane sits 0.023 mm behind Gaussian focus, where Example 2 traces to +0.020 mm and Example 3 to +0.021 mm.

The model therefore uses d22 = 22.106 mm on surface 22A and records the printed 25.606 mm as a corrected source erratum. The printed 2.500 mm, nd 1.5168, νd 64.20 cover glass CG and the following 1.000 mm air space are modeled in `rearPlates`. Every analysis traces them, but the diagram does not draw them. Their paraxial air equivalent is 24.754207 mm from surface 22A to the image, 0.023197 mm behind the Gaussian BFD. This is a documented correction, not a silent alteration of the patent.

The physical stop diameter is also absent from the patent. The model stop semi-diameter, 7.559068 mm, is calibrated to reproduce the published infinity FNO of 2.88. Paraxial pupil tracing then gives an entrance-pupil semi-diameter of 3.219018 mm and modeled F/2.880000. That agreement is calibration by construction and is not independent evidence for the manufactured diaphragm diameter.

Surface semi-diameters are modeled because the source publishes none. The integration audit of Fig. 1 at 600 dpi enlarges S1/S2 to 19.8/14.0 mm and S3/S4 to 14.4/10.3 mm. The rear rim of S2 is capped below the drawn extent by the surface-slope limit. A second Fig. 1 review sets G12 to 8.3 mm and the three rear elements to 10.2/10.8/10.8 mm. The remaining construction apertures are retained. Repository surface and image-circle audits pass; this does not establish full-pupil edge-field transmission.

Surface-by-surface Petzval summation, using φ/(n·n′) for each refracting surface, gives +0.002354795797 mm^-1, corresponding to a signed Petzval radius of −424.665273 mm under the verifier's sign convention. This value is a paraxial design diagnostic, not a claim that the realized image surface or measured field curvature equals that radius.

The final data file was verified by separate sequential height/reduced-angle tracing and ABCD multiplication. At infinity both methods give EFL 18.541544 mm. The repository integration audit supplements these authoring calculations with surface validation, image-circle checks and catalog dispersion resolution; all 11 elements resolve to compatible catalog curves.

## Sources / References

1. Japan Patent Office, **JP 2016-188967 A**, *Inner focusing lens (インナーフォーカス式レンズ)*, published 2016-11-04. Example 1 prescription and focus data: pp. 12–15, ¶0088–¶0106; definitions and asphere equation: p. 26, ¶0164–¶0166; Example 1 section/aberration figures: p. 27; aspheric data of Examples 2–4 cited for the surface 14A sign: pp. 17, 21 and 24, ¶0115, ¶0134, ¶0153.
2. ZEISS, **ZEISS Batis 2.8/18 — Technical Specifications**, datasheet 01/16: https://www.zeiss.com/content/dam/consumer-products/downloads/photography/datasheets/en/batis-lenses/datasheet-zeiss-batis-2818.pdf
3. ZEISS, **ZEISS Batis 2.8/18 — Technical data**, last updated 2016-04-14: https://www.zeiss.com/content/dam/media/Download/zeiss_batis_2_8_18_f_technical_data.pdf
4. ZEISS, **Batis Lenses — ZEISS Batis 2.8/18**, current product/archive page: https://www.zeiss.com/photonics-and-optics/en/photography/products/lenses-for-mirrorless-system-cameras/batis-lenses.html
5. OHARA Inc., optical-glass catalog and glass-type references: https://www.ohara-inc.co.jp/en/product/catalog/ and https://www.ohara-inc.co.jp/en/product/01000/
6. HOYA Optics Division, optical-glass data and cross-reference resources: https://www.hoya-opticalworld.com/english/datadownload/index.html and https://www.hoya-opticalworld.com/japanese/products/crossreference.html
7. SCHOTT Advanced Optics, optical-glass / precision-molding technical information used for candidate comparison: https://media.schott.com/api/public/content/ff189abcb12f498aa221f54fd0b2055c?v=f6ee045d and https://media.schott.com/api/public/content/7fbeac84a2b046de851cfa4bdb97fba1?v=0577d39d
8. HIKARI GLASS CO., LTD., optical-glass catalog: https://www.hikari-g.co.jp/optical_glass/catalog/
9. CDGM, optical-glass database: https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database
10. SUMITA OPTICAL GLASS, Inc., precision-molding preform material catalog: https://www.sumita-opt.co.jp/en/products/preform.html
