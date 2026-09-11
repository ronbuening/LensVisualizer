## Patent Reference and Design Identification

**Patent:** US 2020/0166730 A1\
**Application Number:** US 16/689,275\
**Priority:** 2018-11-27 (JP 2018-221598)\
**Filed:** 2019-11-20\
**Published:** 2020-05-28\
**Inventors:** Ryosuke Nagami; Tetsuya Ori\
**Applicant / Assignee:** FUJIFILM Corporation\
**Title:** *Imaging Lens and Imaging Apparatus*\
**Embodiment analyzed:** Example 1

This prescription is the selected production correlation for the **FUJIFILM FUJINON GF 50mm f/3.5 R LM WR**. The correlation is inferential rather than an explicit FUJIFILM statement that the production lens implements this patent example. Several independent points converge:

1. Example 1 contains nine imaging elements arranged in six physical air-separated groups; FUJIFILM specifies 9 elements in 6 groups for the production lens.
2. Example 1 contains one physical aspherical element, L25, with two aspherical surfaces; FUJIFILM specifies one aspherical element.
3. The patent gives *f* = 48.57 mm and FNo = 3.56 at infinity, while the production lens is marketed as 50 mm f/3.5. The data file preserves the design values rather than scaling them to the marketed labels.
4. The patent uses internal focusing in which only G2 translates while G1, the stop, and G3 remain fixed relative to the image plane (¶0049, ¶0082). FUJIFILM describes the production lens as an internal-focus design driven by a linear motor.
5. The patent priority date, 2018-11-27, precedes the production lens's official 2019-09-26 release date by less than a year.

The patent's 60.4° design field and the production lens's marketed 57.4° angle of view are kept separate. Likewise, the stored `focalLengthDesign` is 48.571810794977 mm, whereas `focalLengthMarketing` remains 50 mm. The project taxonomy records Fujifilm G mount and the 44×33 digital format.

## Optical Architecture

Example 1 is a fixed-focal-length, three-functional-group inner-focus design with power sequence **positive — positive — negative**. The aperture stop lies between G1 and G2. The patent explicitly keeps G1, the stop, and G3 stationary during focus while G2 moves toward the object (¶0048–0053, ¶0063–0064, ¶0082).

The nine elements form six physical groups: the cemented G1 doublet; two cemented pairs plus the L25 singlet within G2; and two air-spaced singlets in G3. The data file therefore distinguishes the patent's three **functional** groups from the production-style count of six **physical air-separated** groups.

First-order computation from the final TypeScript arrays gives functional-group EFLs of **G1 = +78.37 mm**, **G2 = +42.92 mm**, and **G3 = -144.29 mm**. These are system-group powers, not the isolated focal lengths of the individual elements listed below. The complete prescription has EFL **48.57181 mm**, normalized total length **69.92 mm**, and air-equivalent BFD **22.01224 mm**.

Under the project definitions, the design is neither telephoto nor retrofocus: TL/EFL = **1.4395** (>1) and BFD/EFL = **0.4532** (<1). It is therefore best described without forcing it into either architectural label.

The optional parallel plate PP shown behind G3 in Figure 1 is not part of the nine-element imaging lens. Patent ¶0047 describes it as an optional filter/cover-glass member with no refractive power. The data model omits PP and uses the patent's **22.01 mm air-conversion Bf** directly from surface 16 to the image plane. No uniform scale is applied.

The stop's axial position is source-published, but its clear diameter is not. The modeled stop semi-diameter, **6.23287 mm**, is inferred by anchoring the infinity state to the patent FNo = 3.56. All other semi-diameters are likewise modeling inferences because Example 1 publishes no clear-aperture table; they are constrained by Figure 1, marginal and chief rays, edge thickness, actual rim slope, cross-gap intrusion, and full-field containment.

## Element-by-Element Analysis

### L11 — Negative Meniscus, Convex to Object

*nd* = 1.64769, νd = 33.84. Glass: `648338 class`. *f*iso = -31.16 mm (isolated in air).

L11 is the negative front member of the cemented G1 doublet. The patent makes the negative-first ordering of G1 explicit and associates it with balancing spherical, longitudinal chromatic, and lateral chromatic correction in a large-image-field design (¶0054). Its relatively modest Abbe number is paired with the higher-index, higher-νd positive L12.

The quoted *f*iso is the isolated-in-air focal length of L11. It must not be confused with the cemented doublet: L11+L12 has computed net EFL **+78.37 mm**, which is also the functional G1 power because G1 consists only of this cemented pair.

### L12 — Positive Meniscus, Convex to Object

*nd* = 1.87070, νd = 40.73. Glass: `871407 class`. *f*iso = +21.91 mm (isolated in air).

L12 is the positive rear member of G1 and shares the surface-2 cemented interface with L11. The patent prefers cementing the two G1 elements to reduce sensitivity to decenter and air-gap error (¶0055). In the final data file, the cemented junction correctly carries L12's downstream index and element identity.

The pair is net positive despite L11's negative standalone power. This distinction is central to the design: G1 acts as a positive front collector even though its first physical element is negative.

### L21 — Biconcave Negative

*nd* = 1.61293, νd = 37.01. Glass: `613370 class`. *f*iso = -19.89 mm (isolated in air).

L21 begins the translating focus group G2 and is cemented to L22. It is substantially negative in isolation. The patent's focus-group discussion emphasizes a low moving mass and uses G2 as the only translating group (¶0049–0052).

Together, L21+L22 form a computed net-positive cemented pair with EFL **+45.74 mm**. That cemented-pair value is distinct from the full G2 EFL of **+42.92 mm**, which also includes L23, L24, L25, and the internal spacings.

### L22 — Biconvex Positive

*nd* = 1.88300, νd = 39.22. Glass: `883392 class`. *f*iso = +14.66 mm (isolated in air).

L22 is the strong positive partner of L21. Its standalone positive power exceeds the magnitude of L21's standalone negative power, leaving the first G2 doublet positive as a cemented unit. Surface 6 is the cemented junction and therefore uses L22's downstream element identity in the data model.

The patent explains that multiple cemented pairs within G2 provide independent leverage over lateral and longitudinal chromatic changes during focusing because ray heights differ at the two pair locations (¶0057). This is a patent-stated design rationale; it is not an APO claim.

### L23 — Biconcave Negative

*nd* = 1.54814, νd = 45.83. Glass: `548458 class`. *f*iso = -21.97 mm (isolated in air).

L23 is the negative front member of the second cemented pair in G2. Its higher νd than L21 gives the two negative members different dispersion coordinates even before any vendor-glass identity is considered.

L23+L24 has computed cemented net EFL **+122.09 mm**. As with the L21/L22 pair, the cemented net power is not the same quantity as either element's isolated focal length or the full G2 group power.

### L24 — Biconvex Positive

*nd* = 1.65160, νd = 58.55. Glass: `652585 class`. *f*iso = +21.01 mm (isolated in air).

L24 is the positive rear member of the second G2 cemented pair. It has the highest Abbe number in the active prescription, νd = 58.55. The patent does not publish per-element C/F/g-line indices or anomalous partial-dispersion data, so the analysis does not infer secondary-spectrum or APO behavior from that Abbe number alone.

The pair's relatively weak positive net power, compared with the stronger L21/L22 pair, gives the moving group two spatially separated positive cemented units with different local ray heights, consistent with the mechanism described in ¶0057.

### L25 — Negative Meniscus, Two Aspherical Surfaces

*nd* = 1.77250, νd = 49.50. Glass: `773495 class`. *f*iso = -322.25 mm (isolated in air).

L25 is a weak negative meniscus at the rear of G2. Its isolated focal length shows that its paraxial power is much weaker than the four preceding G2 elements, while its two aspherical surfaces provide substantial higher-order shape freedom immediately before the fixed rear group.

Both surfaces are aspherical in the patent and are labeled `11A` and `12A` in the data file. Their polynomial departures are discussed separately below. The element remains part of the translating G2 group, so both its position and its aspheric correction move as one unit during focus.

### L31 — Negative Meniscus, Convex to Image

*nd* = 1.84667, νd = 23.79. Glass: `847238 class`. *f*iso = -36.92 mm (isolated in air).

L31 is the negative front element of fixed rear group G3. Patent ¶0059 assigns the negative-positive ordering of G3 a role in field-curvature correction and in moving the exit pupil toward the object side, while ¶0060 specifically prefers the front negative member as a meniscus convex toward the image side to help suppress astigmatism and distortion.

Its isolated EFL is negative, but the complete G3 group includes the following high-index positive L32 and their air spacing. The resulting functional G3 EFL is **-144.29 mm**, so the rear group remains net negative as required by the patent architecture.

### L32 — Plano-Convex Positive

*nd* = 2.00100, νd = 29.13. Glass: `001291 class`. *f*iso = +62.48 mm (isolated in air).

L32 is the final positive element. Its object-side surface is plane and its image-side surface is convex toward the image. Patent ¶0061 associates that image-side convex surface with suppression of chief-ray incidence angle and astigmatism at the image plane.

The element's *nd* = 2.00100 is the highest refractive index in the prescription. The patent uses this value directly in Conditional Expression (7) through N3p. No vendor provenance is inferred from the index alone.

## Glass Identification and Selection

The patent supplies only d-line *nd* and νd values. The data file therefore uses six-digit **coordinate classes**, not vendor glass names. Cross-catalog comparison with current OHARA, HOYA, SCHOTT, HIKARI, CDGM, and Sumita data places these coordinates in recognizable glass families, but a coordinate match does not establish which melt or supplier FUJIFILM actually used.

| Element | Data-file glass label | *nd* | νd | Use in design |
|---|---|---:|---:|---|
| L11 | `648338 class` | 1.64769 | 33.84 | Negative G1 member |
| L12 | `871407 class` | 1.87070 | 40.73 | Positive G1 member |
| L21 | `613370 class` | 1.61293 | 37.01 | Negative G2 pair 1 |
| L22 | `883392 class` | 1.88300 | 39.22 | Positive G2 pair 1 |
| L23 | `548458 class` | 1.54814 | 45.83 | Negative G2 pair 2 |
| L24 | `652585 class` | 1.65160 | 58.55 | Positive G2 pair 2 |
| L25 | `773495 class` | 1.77250 | 49.50 | Aspherical G2 singlet |
| L31 | `847238 class` | 1.84667 | 23.79 | Negative G3 member |
| L32 | `001291 class` | 2.00100 | 29.13 | Positive G3 member |

The class labels preserve the patent coordinates without converting a catalog-equivalence search into a provenance claim. No `nC`, `nF`, `ng`, or `dPgF` values are stored because the patent does not publish them and no catalog identity was adopted strongly enough to support them. Consequently, no APO or anomalous-partial-dispersion claim is made here.

The patent itself does make chromatic design statements at the Abbe-number level. In G1 it specifies a positive-minus-negative Abbe-number difference; in G2 it describes the two cemented pairs as useful for balancing chromatic changes during focus; and in G3 it constrains both the positive/negative Abbe-number difference and the average νd (¶0054, ¶0057, ¶0070–0073). Those are source facts about the design strategy, not claims about named catalog glasses.

## Focus Mechanism

The lens uses inner focusing. G1, the aperture stop, G3, and the normalized image plane remain fixed; only G2 translates toward the object as focus moves closer. This motion is directly specified by the patent (¶0049, ¶0082). FUJIFILM independently describes the production lens as internal focusing with a linear motor.

The data file carries three focus keyframes:

| State | Provenance | DD[4] / `STO` | DD[12] / `12A` | G2 travel from infinity |
|---|---|---:|---:|---:|
| Infinity | Patent Table 3 | 6.76 mm | 5.46 mm | 0.00 mm |
| 2000 mm object→surface 1 | Patent Table 3 | 6.03 mm | 6.19 mm | 0.73 mm objectward |
| 0.55 m production MFD | Constrained reconstruction | 3.781694 mm | 8.438306 mm | 2.978306 mm objectward |

Every authored state preserves DD[4] + DD[12] = **12.22 mm**, so the model enforces pure G2 translation rather than introducing an additional floating degree of freedom.

The closest-focus state is explicitly **`CONSTRAINED_RECONSTRUCTION`**, not a patent-published spacing. FUJIFILM specifies 0.55 m minimum focus measured from the focal plane and 0.1× maximum magnification. Because the patent's optional PP plate is omitted from the sequential data, the reconstruction first normalizes the physical focal plane to the 22.01 mm air-equivalent rear plane, then solves only the G2 translation while keeping the physical object plane fixed. The resulting object distance is **479.108956 mm** from surface 1 and the paraxial absolute magnification is **0.10235×**, consistent with the manufacturer's rounded 0.1× specification.

The patent's printed 2000 mm spacing row is retained exactly in the data file rather than replaced by a higher-precision solved row. Re-tracing those rounded gaps gives an equivalent object distance of **1996.107 mm** from surface 1; the small difference from 2000 mm is attributable to the patent's 0.01 mm spacing precision. For focus-control interpolation, restoring the physical PP-inclusive focal plane places that patent state **2.070891 m** from the focal plane and gives `focusT = 0.265586` relative to the 0.55 m endpoint. This normalized coordinate changes only interpolation between authored keyframes, not the published gap values.

## Aspherical Surfaces

L25 carries the only aspheres in Example 1, at patent surfaces 11 and 12, stored as `11A` and `12A`. Patent ¶0087–0094 defines

$Z = \frac{Ch^2}{1+\sqrt{1-K_A C^2 h^2}} + \sum A_m h^m,$

with $C=1/R$. This differs from the project's standard conic form, which uses $(1+K)$ inside the square root. The conversion is therefore **K = KA − 1**. Example 1 has KA = 1 on both surfaces, so both authored conic constants are **K = 0**.

The patent includes odd radial powers. Because *h* is a non-negative radial height, these terms remain rotationally symmetric; they do not imply decenter or anamorphism. A3 is zero in the source and is omitted from the data file; all non-zero A4–A20 terms are retained.

| Coefficient | `11A` | `12A` |
|---|---:|---:|
| A4 | 6.9329378E-05 | 9.3215004E-05 |
| A5 | -1.1194555E-05 | -1.5152273E-05 |
| A6 | 1.0209655E-06 | 1.6898484E-06 |
| A7 | 4.7100190E-08 | 1.1019899E-08 |
| A8 | -4.7484147E-09 | -5.9591306E-09 |
| A9 | -3.7046349E-10 | -3.7120650E-10 |
| A10 | -1.6184739E-11 | 8.5503067E-12 |
| A11 | 2.1199506E-12 | 2.0154094E-12 |
| A12 | 1.9561961E-13 | 2.1470193E-13 |
| A13 | 5.5631129E-15 | 5.7714951E-15 |
| A14 | -2.0998957E-16 | -8.4918900E-16 |
| A15 | 1.0517148E-16 | -1.6311106E-16 |
| A16 | -1.6198261E-17 | -5.2589862E-18 |
| A17 | -3.1633953E-18 | -2.6370718E-20 |
| A18 | 3.6331743E-19 | -1.6585141E-20 |
| A19 | -8.3331366E-21 | 2.6087053E-20 |
| A20 | 2.3412194E-23 | -1.4985752E-21 |

No scale factor was applied to the prescription. The coefficients are therefore transcribed in the patent's dimensional scale and **no** $A_p/s^{p-1}$ transformation was applied; K remains unchanged at zero.

At the final modeled semi-diameter of **12.2 mm** on L25, independent evaluation gives departures from the K=0 conic bases of **+0.839202 mm** on `11A` and **+1.238635 mm** on `12A`. These are computed at the validated **modeled** semi-diameter; the patent does not publish a clear-aperture height for either surface.

## Aberration-Correction Strategy

The architecture distributes positive power across G1 and G2, then uses a net-negative G3. The patent's stated rationale is not a generic claim of a named lens family: it explicitly connects the negative-positive ordering of G1 with chromatic and spherical correction, the two cemented pairs in G2 with reduction of chromatic fluctuation during focus, and the negative-positive G3 with field-curvature and chief-ray-angle control (¶0054–0059).

The aspherical L25 adds higher-order correction inside the moving group without materially changing G2's paraxial power on its own: its isolated focal length is **-322.25 mm**, much weaker than the other G2 members. This is a computed power observation; the patent does not assign a single named aberration to L25's aspheres.

The computed Petzval sum over active surfaces 1–16 is **+0.002274208 mm⁻¹** using the project convention $\phi/(n n')$ surface by surface. This is a paraxial curvature diagnostic, not a substitute for the patent's full astigmatism plots.

## Conditional Expressions

The patent makes twelve first-order conditions central to the disclosed architecture (¶0065–0077). Recomputed from the final TypeScript arrays, the Example-1 values satisfy the main bounds and agree with Patent Table 21 within the precision implied by the rounded prescription tables. Eleven reproduce the displayed value by ordinary rounding; expression (5) gives 1.609210 from the printed prescription versus 1.610 in Table 21, a difference of 0.000790 attributable to the patent's rounded source data.

| Expression | Patent bound | Data recomputation | Patent Table 21 |
|---|---|---:|---:|
| $f_2/f_1$ | 0.25 < value < 1 | 0.547625 | 0.548 |
| $f/f_1$ | 0.25 < value < 1 | 0.619771 | 0.620 |
| $f/f_2$ | 0.8 < value < 1.6 | 1.131743 | 1.132 |
| $f/f_3$ | −0.8 < value < 0 | -0.336626 | −0.337 |
| $(1-β_2^2)β_3^2$ | 1.15 < value < 2.5 | 1.609210 | 1.610 |
| $ν_{1p}-ν_{1n}$ | 0 < value < 30 | 6.89 | 6.89 |
| $N_{3p}$ | 1.8 < value < 2.2 | 2.001 | 2.001 |
| $ν_{3p}-ν_{3n}$ | −5 < value < 15 | 5.34 | 5.34 |
| $ν_{3ave}$ | 20 < value < 30 | 26.46 | 26.46 |
| $β_2$ | 0.1 < value < 0.7 | 0.438978 | 0.44 |
| $β_3$ | 1 < value < 2.2 | 1.411852 | 1.41 |
| $TL/[f\tan(ω)]$ | 2 < value < 2.7 | 2.473340 | 2.47 |

The same recomputed values also satisfy the patent's narrower preferred forms (1-1) through (12-1) where those are stated. The expression-(5) discrepancy does not approach either the main or preferred bound and does not justify altering any patent value.

## Verification Summary

Sequential height/reduced-angle tracing and an independent ABCD composition agree to machine precision. The computed EFL is **48.571810794977 mm**, matching the patent's 48.57 mm to its 0.01 mm precision; the computed BFD is **22.012238136956 mm**, matching the patent's 22.01 mm air-conversion value.

The authored stop recovers FNo = **3.560000000000** at infinity. Because the patent gives no stop diameter, this agreement reflects the explicit FNo anchoring used to infer the stop size rather than an independently published aperture measurement.

The inferred semi-diameter set passes the shared surface validator and production render diagnostics. The S8 rim was enlarged during the patent audit below; earlier numerical edge/gap extrema from the draft are not retained as current measurements.

For the patent's 30.2° design half-field, the locally traced chief ray and on-axis marginal rays remain inside every authored surface at all three focus keyframes. Using the patent-published *f* = 48.57 mm and 30.2° half-field, the paraxial half-image height is **28.268 mm**, slightly larger than the project's 44×33 half-diagonal of **27.390 mm**; this is consistent with the patent's 60.4° design field exceeding the production lens's marketed 57.4° field.

The prescription applies no uniform scale, excludes the optional PP plate through the patent's air-equivalent rear spacing, and retains the patent's single translating focus group. No per-element spectral indices or anomalous-partial-dispersion values are added beyond the published d-line *nd* and νd coordinates.

## Sources and References

1. **US 2020/0166730 A1**, Ryosuke Nagami and Tetsuya Ori, *Imaging Lens and Imaging Apparatus*, FUJIFILM Corporation, published 2020-05-28. Example 1, especially Fig. 1; Tables 1–4 and 21; ¶0032, ¶0047–0064, ¶0065–0095.
2. **FUJIFILM, FUJINON GF50mmF3.5 R LM WR product page:** https://www.fujifilm-x.com/global/products/lenses/gf50mmf35-r-lm-wr/ — production identity, 9/6 construction, one aspherical element, internal focusing, linear motor.
3. **FUJIFILM owner’s manual, GF50mmF3.5 R LM WR:** https://dl.fujifilm-x.com/support/manual/lenses/lens_gf50mmf35_r_lm_wr_manual_01.pdf — 50 mm, 57.4°, f/3.5–32, 9 blades, 0.55 m focus range measured from the focal plane, 0.1× maximum magnification.
4. **FUJIFILM Japan product record:** https://mall-jp.fujifilm.com/shop/g/g16630807/ — release date 2019-09-26 and production specification cross-check.
5. **OHARA optical-glass catalog:** https://oharacorp.com/glass-catalog/
6. **HOYA optical-glass data:** https://www.hoya-opticalworld.com/english/datadownload/index.html
7. **SCHOTT Advanced Optics glass search:** https://www.us.schott.com/shop/advanced-optics/en/search/
8. **HIKARI optical-glass catalog:** https://www.hikari-g.co.jp/optical_glass/catalog/
9. **CDGM optical-glass database:** https://www.cdgmgd.com/go.htm?k=Colourless_Optical_Glass&url=goods
10. **Sumita Optical Glass Data:** https://www.sumita-opt.co.jp/en/download/

### Patent-rim audit (2026-09-11 UTC)

Figure 1 (PDF p.2) was inspected at 600 dpi, rotated clockwise. The 47.91 mm glass span gives 22.76 µm/px. S8, the front of L23, increases from 7.5 to 9.8 mm to follow the clean optical rim; its cemented partner remains at 10.0 mm. This removes the exaggerated waist. Other rims agree within measurement uncertainty or include mechanical steps. Group brackets contaminate the automatic G2 envelope and were excluded. Surface, image-circle, and production render checks pass. All nine elements already have compatible catalog dispersion; no glass changes were needed.
