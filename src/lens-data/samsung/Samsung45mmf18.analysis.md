## Patent Reference and Design Identification

**Patent:** US 2013/0314588 A1\
**Priority:** May 22, 2012\
**Filed:** February 5, 2013\
**Published:** November 28, 2013\
**Inventor:** Yong-su Kim\
**Applicant / Assignee:** Samsung Electronics Co., Ltd.\
**Title:** *Telephoto Lens System*\
**Embodiment analyzed:** First Embodiment / Example 1

The prescription is the first numerical embodiment in US 2013/0314588 A1, principally Figure 1, paragraphs 0046–0049, Table 1, and Table 5. The job-card correlation identifies this embodiment with the **SAMSUNG 45mm f/1.8**. That correlation is adopted as fixed for this model, but the available manufacturer material does not state that the production lens directly implements this patent.

Several independent features support the correlation:

1. Samsung specifies the production lens as a 45 mm f/1.8 APS-C prime with seven elements in six groups. Example 1 has seven elements in six air-separated groups and publishes a 46.33 mm focal length at f/1.84.
2. Samsung gives the production lens a 34.7° angle of view. The patent publishes a 35.1° full viewing angle and plots aberrations to a 14.25 mm image height, consistent with an APS-C image circle.
3. The patent uses a single negative element as the internal focusing group. Samsung's launch material identifies the production lens as using stepping-motor autofocus, consistent with the patent's emphasis on a lightweight focusing member, though the motor itself is not part of the prescription.
4. The patent claims Korean priority on May 22, 2012. Samsung announced the NX 45mm f/1.8 on September 18, 2012, before the US application was published.

Marketing and design quantities remain separate. The production designation is 45 mm f/1.8, while the unscaled patent prescription computes to an effective focal length of 46.307118574 mm and uses the published f/1.84 aperture geometry. Samsung's 0.45 m minimum focusing distance is retained as a product specification; it is not substituted for the patent's separately defined close-focus distance row.

## Optical Architecture

The lens is an all-spherical, seven-element, six-group prime with a positive–negative–positive functional power sequence. The patent divides it into three functional groups:

- **G1:** a positive front group containing a cemented negative-positive pair followed by an air-spaced positive meniscus;
- **G2:** a single biconcave negative element that performs internal focusing;
- **G3:** a positive rear group containing two positive elements followed by a biconcave negative element.

The aperture stop lies in air between G2 and G3. Only the L1/L2 pair is cemented; the remaining five elements are air-spaced. Independent paraxial computation gives functional-group focal lengths of +39.205305 mm for G1, -31.692127 mm for G2, and +36.920127 mm for G3. These values describe each isolated functional group in its actual internal configuration, not the in-situ contribution of a group embedded in the complete lens.

The distinguishing architectural choice is the single-element negative focusing group. G1, the stop, G3, and the image plane remain fixed while G2 translates. The arrangement reduces the moving optical mass compared with unit focusing, which is the central purpose stated in paragraphs 0029–0037.

The patent title uses the term “telephoto,” but the modeled prescription is not classified as telephoto under the project's structural criterion: the filter-normalized first-surface-to-image track divided by computed EFL is 1.457141. It is also not retrofocus under the corresponding criterion because the paraxial BFL/EFL ratio is 0.505742; using the stored air-equivalent rear image distance instead gives 0.506315 and does not change the result. The architecture is therefore described here by its positive–negative–positive power distribution and internal-focus mechanism rather than by either structural label.

## Element-by-Element Analysis

### L1 — Negative Meniscus, Cemented Front Constituent

**nd = 1.87387, νd = 28.7. Glass: Unmatched (874287; nd=1.87387, νd=28.7). Standalone f = -46.674230 mm.**

L1 is the object-side negative meniscus and the first constituent of cemented pair C1. The patent specifically requires a negative meniscus convex toward the object in this position. Paragraph 0038 attributes increased back-focus allowance, relative to a conventional double-Gauss arrangement, to this front meniscus form.

The standalone focal length describes L1 hypothetically placed in air. In the actual lens it is cemented directly to L2, so its operative behavior must be read through the pair rather than as an isolated -46.7 mm lens. Its high index and comparatively low Abbe number oppose the positive, lower-dispersion L2 and provide the front pair with first-order chromatic balancing. The patent does not identify a vendor glass, and the stored nd/νd pair does not support a unique public-catalog assignment.

### L2 — Positive Meniscus, Cemented Front Constituent

**nd = 1.71390, νd = 53.2. Glass: MP-LAC8-30 catalog equivalent; production supplier unspecified. Standalone f = +29.404758 mm.**

L2 is the downstream member at the cemented interface and carries the positive power of C1. The standalone power is substantially stronger than the negative power of L1, but cementing and the shared interface reduce the net pair to a comparatively weak positive focal length of +90.646937 mm.

The substantial Abbe contrast between L1 and L2 supports primary chromatic correction within the front pair. This is a design inference from the prescription and glass positions; it is not evidence of apochromatic correction or of a specific commercial melt.

### L3 — Positive Meniscus Completing G1

**nd = 1.79824, νd = 45.1. Glass: Q-LASFPH3S catalog equivalent; production supplier unspecified. Standalone f = +63.339369 mm.**

L3 is an air-spaced positive meniscus following C1. Together, C1 and L3 form the positive functional group G1. Dividing the positive power between the cemented pair and this separate meniscus moderates the burden on any one surface while leaving room for the moving negative group behind it.

Paragraph 0046 calls this third lens negative, but the numerical surfaces, Figure 1, and claim 10 establish positive power. The model therefore identifies L3 as a positive meniscus without changing any radius, thickness, index, or Abbe value from the patent table.

### L4 — Biconcave Negative Internal-Focus Element

**nd = 1.61799, νd = 63.4. Glass: S-PHM52 catalog equivalent; production supplier unspecified. Standalone f = -31.692127 mm.**

L4 is both the complete G2 group and the only moving optical element. Its biconcave form supplies the negative middle power in the positive–negative–positive sequence. During focusing it moves toward the image side, increasing D1 and decreasing D2 while the surrounding groups remain fixed.

Its νd of 63.4 satisfies the patent's requirement that the focusing element use a low-dispersion position with νd greater than 63. Paragraphs 0040–0041 associate that condition with suppressing chromatic variation in the large-aperture system. S-PHM52 supplies a compatible curve without identifying the production glass.

### L5 — Biconvex Positive Front Element of G3

**nd = 1.83481, νd = 42.7. Glass: S-LAH55 catalog equivalent; production supplier unspecified. Standalone f = +24.023495 mm.**

L5 is the first element after the stop and the strongest standalone positive element in G3. Paragraph 0039 explains the placement of a positive lens convex toward the object at the front of G3 as a means of reducing the incidence angle of an off-axis lower ray after it passes G2, thereby limiting coma flare.

The element combines high index with moderate dispersion. Its positive power begins the rear relay immediately after the long stop-to-G3 air space, where control of off-axis ray angles is especially consequential.

### L6 — Positive Meniscus in G3

**nd = 1.83481, νd = 42.7. Glass: S-LAH55 catalog equivalent; production supplier unspecified. Standalone f = +45.434150 mm.**

L6 uses the same stored optical position as L5 but is a weaker positive meniscus. The two elements are separated by a 0.50 mm air gap rather than cemented. This distributes G3's positive power across two independently curved components and permits the intervening air lens to contribute to aberration balancing.

The common high-index glass position supports the patent's average-index condition for G3. S-LAH55 supplies the
compatible catalog model used for both elements, but does not establish a production vendor.

### L7 — Biconcave Negative Rear Element

**nd = 1.76495, νd = 24.9. Glass: Unmatched (765249; nd=1.76495, νd=24.9). Standalone f = -20.219016 mm.**

L7 is the rear biconcave negative element. It offsets part of the positive power supplied by L5 and L6 while the complete G3 group remains positive at +36.920127 mm. The positive-positive-negative sequence is specified in paragraph 0016 and claim 11.

Its comparatively low Abbe number provides a dispersive counterweight within the rear group. The catalog audit found no public glass close enough in both nd and νd to justify a named assignment, so the element remains explicitly unmatched.

## Glass Identification and Selection

The patent publishes d-line refractive index and Abbe number only. It does not name glass vendors or melts and does not
publish per-element nC, nF, ng, PgF, or dPgF values. Compatible coefficient-backed catalog curves are used as optical
equivalents; they do not establish production identity or justify anomalous-partial-dispersion or APO claims.

| Element(s) | nd / νd | Data annotation | Catalog-audit interpretation |
|---|---:|---|---|
| L1 | 1.87387 / 28.7 | Unmatched (874287) | No surveyed current catalog position met the adopted matching threshold. |
| L2 | 1.71390 / 53.2 | MP-LAC8-30 catalog equivalent | Added from HOYA's discontinued 2017 coefficient row; supplier unspecified. |
| L3 | 1.79824 / 45.1 | Q-LASFPH3S catalog equivalent | Existing Hikari curve is compatible; supplier unspecified. |
| L4 | 1.61799 / 63.4 | S-PHM52 catalog equivalent | Existing OHARA curve is compatible; supplier unspecified. |
| L5, L6 | 1.83481 / 42.7 | S-LAH55 catalog equivalent | Existing OHARA curve is compatible for both elements; supplier unspecified. |
| L7 | 1.76495 / 24.9 | Unmatched (765249) | SF14-family candidates are close in index but miss the published Abbe number beyond the adopted threshold. |

The glass strategy is conventional first-order balancing rather than a documented anomalous-dispersion scheme. The cemented front pair combines negative low-νd and positive higher-νd constituents. The focus element occupies a high-νd position, while G3 combines high-index positive elements with a lower-νd negative rear element. Paragraphs 0040–0044 expressly connect the high Abbe number of G2 and the high average index of G3 with chromatic and Petzval control, but the available data does not support stronger spectral claims.

## Focus Mechanism

The focus status is **PUBLISHED**. Table 1 gives both adjacent air gaps for infinity and close range; no internal movement was reconstructed. G1, the stop, G3, and the image plane are fixed, while the single L4/G2 element moves toward the image side.

| Published state | D1 after surface 5 | D2 after surface 7 |
|---|---:|---:|
| Infinity | 2.99 mm | 6.81 mm |
| Close range | 7.01 mm | 2.78 mm |
| Change | +4.02 mm | -4.03 mm |

The adjacent-gap sum changes from 9.80 to 9.79 mm. That 0.01 mm difference is retained as source precision rather than forced to exact conservation. The motion is therefore approximately 4.02–4.03 mm imageward and maintains effectively constant overall lens length, matching the inner-focus description in paragraphs 0029–0033.

Samsung specifies a 0.45 m minimum focusing distance and 0.13× maximum magnification for the production lens. Those marketed values remain separate from the patent geometry. The patent instead gives D0 = 407.1 mm in its focus table. With the published D1/D2 close row and the retained filter-normalized image plane, independent paraxial tracing leaves a 1.687756 mm image-plane B residual; exact conjugacy for that geometry would require D0 = 421.116413 mm and would give a transverse magnification of −0.120413. The published movement is preserved, and no alternative focus row is substituted.

## Conditional Expressions

The first embodiment satisfies all three conditions stated in the patent.

| Patent condition | Verified value | Result |
|---|---:|---|
| 0.5 < \|f2/f\| < 0.81 | 0.684390 using the computed EFL | Pass |
| νd2 > 63 | 63.4 | Pass |
| Average nd of G3 > 1.78 | 1.811523 | Pass |

Here f2 is the isolated focal length of the single-element G2 group and f is the complete-system EFL. The first ratio agrees with the patent's rounded Table 5 value of 0.684. The average-index condition uses the three stored G3 indices: 1.83481, 1.83481, and 1.76495.

## Verification Summary

The prescription is unscaled. Every radius and axial spacing through surface 14 is retained at the patent's published size, while the marketed 45 mm designation remains separate from the computed 46.307118574 mm design EFL.

Patent filter 400, represented by plane surfaces 15–16, is excluded from the active LensVisualizer prescription. Its d-line paraxial translation is preserved by replacing the published 21.48 mm air gap, 2.80 mm filter at nd = 1.51679, and 0.12 mm final air gap with a single 23.446003732 mm air-equivalent distance from surface 14 to the image plane. At infinity, the original physical first-surface-to-image track is 68.430000 mm; the normalized track is 67.476003732 mm, and the active vertex track through surface 14 is 44.030000 mm.

The stop position is published, but its diameter is not. The physical stop radius of 9.468059698 mm is inferred from the f/1.84 prescription and produces an entrance-pupil radius of 12.583456134 mm. All surface semi-diameters are likewise modeling values rather than patent clear-aperture data. Their construction uses the stop solution, Figure 1 proportions, the published 14.25 mm field as a boundary reference, geometry constraints, and exact spherical-ray envelopes for the viewer's defined on-axis and off-axis samples at both published focus geometries.

| Computed quantity from the final data arrays | Value |
|---|---:|
| Infinity EFL | 46.307118574 mm |
| Active paraxial BFL from surface 14 | 23.419464026 mm |
| Stored air-equivalent surface-14-to-IMG distance | 23.446003732 mm |
| Retained rear-plane difference | +0.026539705 mm |
| Derived wide-open f-number | 1.840000 |
| G1 / G2 / G3 isolated functional focal lengths | +39.205305 / -31.692127 / +36.920127 mm |
| Petzval sum, surface-by-surface φ/(n·n′) | 0.003353629992 mm⁻¹ |
| Reciprocal Petzval magnitude | 298.184356 mm |

Sequential height/reduced-angle tracing and an independent ABCD product agree at both published focus geometries. The inferred apertures retain positive edge thickness, remain below the adopted actual-rim-slope limit, and pass the shared-gap intrusion policy. Exact meridional tracing contains the full-stop on-axis rays and the viewer-default off-axis sample at 0.6 of the 17.55° half-field with pupil fractions of ±0.75, at both focus endpoints. This is a render-sample containment test, not a claim of zero mechanical vignetting over the entire pupil and field. Example 1 contains no aspherical surface, conic constant, or polynomial coefficient; consequently no asphere section or coefficient transformation is applicable.

## Sources

- **US 2013/0314588 A1**, Yong-su Kim, *Telephoto Lens System*, especially Figures 1–2, paragraphs 0029–0049, Tables 1 and 5, and claims 1, 9–11.
- [Samsung Electronics, official NX 45mm f/1.8 product support page](https://www.samsung.com/sec/support/model/EX-S45ANB/KR/).
- [Samsung Electronics, “Samsung NX Lens 12-24mm and 45mm for Quality Imagery,” September 18, 2012](https://news.samsung.com/global/samsung-nx-lens-12-24mm-and-45mm-for-quality-imagery).
- [HOYA optical-glass data and cross-reference resources](https://www.hoyaoptics.eu/download/optical-glass-data).
- [SCHOTT optical-glass datasheet collection](https://www.schott.com/en-us/products/optical-glass-p1000267/downloads).
- [OHARA optical-glass product resources](https://www.ohara-inc.co.jp/en/product/).
- [HIKARI optical-glass catalog resources](https://www.hikari-g.co.jp/optical_glass/catalog/).
- [SUMITA optical-glass catalog resources](https://www.sumita-opt.co.jp/en/download/).
- [CDGM optical-glass catalog resources](https://www.cdgmgd.com/go.htm?k=Colourless_Optical_Glass&url=goods).
