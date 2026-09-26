## Patent Reference and Design Identification

**Patent:** JP1976-053823 (特開昭51-53823; also indexed as JPS5153823A)
**Filed:** 1974-11-05
**Published:** 1976-05-12
**Inventor:** Kunio Shimada (島田 邦夫)
**Applicant:** Miranda Camera Co., Ltd. (ミランダカメラ株式会社)
**Title:** 小型軽量のレトロフォーカス型広角レンズ — “Compact lightweight retrofocus-type wide-angle lens” (working translation)
**Embodiment analyzed:** Example 1 (第1実施例)

The prescription is Example 1 of JP1976-053823, reproduced on patent PDF p. 3/4 (printed p. 149) and illustrated in Fig. 1 on PDF p. 4/4 (printed p. 150). It is a six-element, six-group, all-spherical wide-angle lens normalized by the patent to `f = 100`. The LensVisualizer model applies a uniform scale of 0.35 to all dimensional quantities, producing a computed effective focal length of 34.996112 mm while retaining the published refractive-index and Abbe-number coordinates unchanged.

The association with the production MIRANDA AUTO EC 35mm f/2.8 is a strong research correlation rather than a manufacturer-confirmed patent attribution. The evidence converges as follows:

1. The patent is assigned to Miranda Camera and was filed in November 1974, matching the period in which the Auto EC line appears in Miranda RE-II literature.
2. Example 1 contains six air-separated elements in six groups; the Miranda RE-II manual lists the Auto EC 35 mm lens as 6 groups / 6 elements.
3. The patent treats the design at approximately f/2.8, and the production lens is listed as 35 mm f/2.8.
4. The patent aberration chart reaches a 31.5° half-field, about 63° full field, while the manufacturer table lists a 64° angle of view.
5. Uniformly scaling the patent's `f = 100` prescription by 0.35 gives 34.996112 mm rather than forcing the rounded design to exactly 35 mm.

No located Miranda source explicitly states that JP1976-053823 Example 1 is the production Auto EC 35mm f/2.8 prescription. The identification should therefore be read as a well-supported correlation, not documentary proof of production use.

Patent source: JP1976-053823 / 特開昭51-53823, PDF pp. 1–4 (printed pp. 147–150). A searchable bibliographic copy is available at <https://patents.google.com/patent/JPS5153823A/ja>.

## Optical Architecture

The implemented design is a six-singlet retrofocus wide-angle with the front-to-rear power sequence negative–positive–positive–negative–positive–positive. There are no cemented interfaces and no aspherical surfaces. The aperture stop lies in the air space between L3 and L4, as shown in patent Fig. 1.

The retrofocus classification is independently supported by the final modeled prescription rather than by terminology alone. At the static patent state, the computed EFL is 34.996112 mm and the paraxial back focal distance from the R12 vertex is 38.314749 mm, so `BFD/EFL = 1.094829 > 1`. The authored image plane remains at 38.325 mm behind R12 because the data file preserves the uniformly scaled published back-focus value rather than moving the plane to erase the source-rounding residual.

L1 supplies the negative front power characteristic of the retrofocus arrangement. The middle of the system then alternates positive power in L2–L3 with a strong negative L4 just behind the stop, followed by the positive L5–L6 rear pair. The patent itself formalizes part of this balance through the condition `f5,6 < f2,3`; the implemented air-separated L5+L6 subsystem has an equivalent focal length of 19.548660 mm, compared with 27.033604 mm for L2+L3.

The stop placement in the source is qualitative rather than dimensioned. The model splits the scaled R6–R7 air gap of 5.250 mm at its midpoint, 2.625 mm on each side of `STO`, following the schematic position in Fig. 1. Its 6.43313 mm physical semi-diameter is a model calibration chosen to reproduce the f/2.8 target; it is not a published diaphragm measurement.

## Element-by-Element Analysis

### L1 — Negative Meniscus, convex toward the object

`nd = 1.51633, νd = 64.0. Glass: 516641 crown / BK7-family coordinate class (supplier unproven). f = -56.034647 mm.`

L1 is the sole front negative element and establishes the diverging entrance section of the retrofocus form. Its standalone thick-element focal length is negative, while the complete system retains a positive 34.996112 mm EFL. The large air space after L1 separates this negative front section from the succeeding positive pair.

The material identification remains class-level; the named catalog curve is a spectral proxy. A modern OHARA L-BSL7 row reproduces the same `nd` and nearly the same `νd`, but the patent names no supplier, and the modern `L-` prefix must not be projected backward as evidence of a 1974 melt identity.

### L2 — Biconvex Positive

`nd = 1.75700, νd = 47.8. Glass: 757478 lanthanum-crown coordinate class (supplier unproven). f = +39.645363 mm.`

L2 is the first substantial positive element after the front negative meniscus. It works as an air-separated subsystem with L3; the computed equivalent focal length of L2+L3 is +27.033604 mm. That subsystem value is the `f2,3` quantity used in the patent's third condition.

The 757478 coordinate is closely matched by current OHARA S-LAM54 data, but this is coordinate compatibility only. Neither the patent nor the manufacturer literature identifies S-LAM54 or OHARA as the historical production glass.

### L3 — Positive Meniscus, convex toward the object

`nd = 1.63930, νd = 44.8. Glass: 639449 barium-crown coordinate class (supplier unproven). f = +91.870867 mm.`

L3 is a weaker positive element than L2 and completes the positive L2–L3 subsystem immediately before the aperture-stop gap. Its position is significant structurally because the source places the stop between the rear surface of L3 and the front surface of L4; no additional optical plane is published in that gap.

The 639449 coordinate is compatible with current OHARA S-BAM12 data. The model uses a coordinate-compatible S-BAM12 spectral proxy without claiming a production supplier.

### L4 — Biconcave Negative

`nd = 1.71736, νd = 29.5. Glass: 717295 dense-flint coordinate class (supplier unproven). f = -17.479837 mm.`

L4 is the strongest negative standalone element in the implemented prescription and sits immediately behind the stop. It separates the positive L2–L3 section from the positive rear pair. Its short negative focal length is a computed standalone-element quantity, not a statement about its isolated contribution to any particular aberration.

The 717295/296 coordinate family is especially non-unique: current HOYA E-FD1L, OHARA S-TIH1, HIKARI J-SF1, and other catalog families occupy essentially the same `nd`/`νd` region. The model uses the existing SF1 curve as a spectral proxy and makes no supplier attribution.

### L5 — Positive Meniscus, convex toward the image

`nd = 1.62041, νd = 60.2. Glass: 620603 crown coordinate class (supplier unproven). f = +66.327842 mm.`

L5 begins the final positive pair. In combination with L6 it gives an air-separated equivalent focal length of +19.548660 mm. The patent explicitly requires this `f5,6` value to be shorter than `f2,3`; the final model satisfies that relation without altering the selected example.

The 620603 coordinate is represented in current catalogs by several closely related glasses, including OHARA S-BSM16 and SCHOTT N-SK16. The patent does not identify which, if any, corresponds to the historical melt.

### L6 — Biconvex Positive

`nd = 1.62041, νd = 60.2. Glass: 620603 crown coordinate class (supplier unproven). f = +27.373103 mm.`

L6 is the strongest positive standalone element in the prescription and closes the rear positive pair. It shares the same published optical coordinates as L5 but is much stronger in standalone power because of its surface curvatures. The final image-side surface is followed by the published back-focus distance rather than by any cover glass, filter, or dummy optical plane.

The modeled clear aperture of L6 is constrained by physical edge thickness. That aperture is not source-published; it is part of the Stage 2 geometric model and should not be interpreted as a measured production diameter.

## Glass Identification and Selection


The integration audit uses these runtime spectral curves: L1: `N-BK7`; L2: `S-LAM54`; L3: `S-BAM12`; L4: `SF1`; L5, L6: `J-SK16`. The coordinate/class descriptions below retain the source-identification context; catalog names are qualified proxies, not evidence of production suppliers.

The patent supplies refractive index and Abbe number but no supplier names, line indices, partial-dispersion values, or melt identifiers. The data file names coordinate-compatible spectral proxies without asserting production glass identities. Representative modern catalog matches are evidence for coordinate compatibility only.

| Elements | Patent/model coordinates | Data-file class | Representative current match | Coordinate residual |
|---|---|---|---|---|
| L1 | `nd 1.51633`, `νd 64.0` | 516641 crown / BK7-family | OHARA L-BSL7 | Δn = 0.00000, Δν = +0.06 |
| L2 | `nd 1.75700`, `νd 47.8` | 757478 lanthanum crown | OHARA S-LAM54 | Δn = 0.00000, Δν = +0.02 |
| L3 | `nd 1.63930`, `νd 44.8` | 639449 barium crown | OHARA S-BAM12 | Δn = 0.00000, Δν = +0.07 |
| L4 | `nd 1.71736`, `νd 29.5` | 717295 dense flint | HOYA E-FD1L | Δn = 0.00000, Δν = 0.00 |
| L5, L6 | `nd 1.62041`, `νd 60.2` | 620603 crown | OHARA S-BSM16 | Δn = 0.00000, Δν = +0.09 |

These matches do not prove the historical supplier or melt. The L4 and L5/L6 coordinates in particular occur across multiple vendors. No `nC`, `nF`, `ng`, or `dPgF` fields are authored because those quantities are not published by the patent. Consequently, no apochromatic or anomalous-partial-dispersion claim is supported by the source. The runtime resolves all six elements to coefficient-backed catalog curves. These remain model-side spectral proxies, not patented spectral data.

## Focus Mechanism

The production manual lists a closest focus of 0.30 m for the Auto EC 35 mm lens, but neither the patent nor the manufacturer literature provides an internal spacing law or identifies which optical elements move during focusing. The LensVisualizer record therefore uses `NO_INTERNAL_RECONSTRUCTION`: `var` and `varLabels` are empty, and the optical prescription remains the patent's static/infinity state.

The 0.30 m value is retained only as marketed product metadata. It is not used to derive unit-focus travel, internal-group motion, close-focus BFD, or magnification. Assigning any of those quantities from MFD alone would be underdetermined.

Manufacturer source: *Miranda RE-II Instruction Manual*, “MIRANDA AUTO EC LENS SERIES” table, PDF p. 22, archived at <https://butkus.org/chinon/miranda/miranda_re-ii/miranda_re-ii.pdf>.

## Conditional Expressions

The patent gives six design conditions for the retrofocus form (JP1976-053823, PDF pp. 1–2/4, printed pp. 147–148). Uniform scale does not change their validity. Re-evaluation from the final parsed model gives:

| Condition | Final scaled evaluation | Result |
|---|---:|---|
| `d2 + d3 < 0.55 f` | 15.9495 < 19.2500 mm | Pass |
| `-f1 < 1.7 f` | 56.034647 < 59.500000 mm | Pass |
| `f5,6 < f2,3` | 19.548660 < 27.033604 mm | Pass |
| `R5 > 0.35 f` | 16.9330 > 12.2500 mm | Pass |
| `-R10 < 0.8 f` and `-R12 < 0.7 f` | 23.3660 < 28.0000 mm; 17.6575 < 24.5000 mm | Pass |
| `∞ > -R4 > 0.8 f` | 52.4755 > 28.0000 mm | Pass |
| `0.16 f < d4 + d5 + d6 < 0.27 f` | 5.6000 < 8.2845 < 9.4500 mm | Pass |

For the final condition, the two modeled spacings on either side of `STO` are recombined into the original `d6` before evaluation. The pass therefore tests the patent quantity rather than treating the inserted stop plane as an extra source spacing.

## Verification Summary and Modeling Limits

The final data file preserves the patent's normalized geometry under a uniform 0.35 scale. Sequential height/reduced-angle tracing and an independently accumulated ABCD matrix give the same EFL and BFD to numerical precision. The computed EFL is 34.996112 mm, a residual of -0.003888 mm from the scaled published 35.000000 mm value. The computed BFD from R12 is 38.314749 mm, while the authored image-plane spacing remains the scaled published 38.325000 mm; the -0.010251 mm computed residual is retained rather than silently corrected.

The required surface-by-surface Petzval calculation, using `φ/(n·n′)` at each refracting surface, sums to +0.006679141 mm⁻¹. This dimensional result is distinct from the patent's historical normalized `ΣP = 0.234` coefficient and should not be compared numerically as if the two conventions were identical.

The stop and all surface semi-diameters are model inferences because the patent publishes neither a physical diaphragm diameter nor clear apertures. The stop is placed at the inferred midpoint of the source `d6` gap and calibrated to f/2.8; the final paraxial entrance-pupil semi-diameter is 6.249308 mm and the resulting modeled f-number is 2.799999. Agreement with f/2.8 is therefore calibration, not independent confirmation of the production iris size.

The 2026-09-26 patent-figure review reduces the front two singlets to optical-rim estimates: S1/S2 are 12.2/11.6 mm and S3/S4 are 8.0/8.0 mm. These retain the full-format corner chief ray and pass surface geometry and production-render checks. Earlier 401-ray clearance counts applied to the larger initial apertures and are superseded by this audit; they are not claims about the revised pupil throughput. A second direct review reduces S5/S6/S10/S11/S12 to 8.0 mm, bringing L3/L5/L6 back to the nearly common rear rim in Fig. 1. Direct readings are about 7.3–7.8 mm; 8.0 mm retains a modest clearance allowance and the full-format corner chief ray. The sketch is not treated as a dimensioned manufacturing drawing.

No rear plate, sensor cover glass, filter, or inactive dummy plane is present in the selected example, so no air-equivalent rear-spacing conversion is applied. The all-spherical design has no conic convention or aspherical coefficient scaling to report.

## Sources and References

1. Kunio Shimada, **JP1976-053823 / 特開昭51-53823**, “小型軽量のレトロフォーカス型広角レンズ,” Miranda Camera Co., Ltd.; filed 1974-11-05, published 1976-05-12. Prescription: PDF p. 3/4 (printed p. 149); layout and aberration chart: PDF p. 4/4 (printed p. 150); conditions and design discussion: PDF pp. 1–2/4 (printed pp. 147–148). Searchable bibliographic copy: <https://patents.google.com/patent/JPS5153823A/ja>.
2. **Miranda RE-II Instruction Manual**, “MIRANDA AUTO EC LENS SERIES,” PDF p. 22. The 35 mm column lists f/2.8, 6 groups / 6 elements, 64° angle of view, 0.30 m closest focus, 49 mm filter, 38 mm length at infinity, and 190 g weight. Archived scan: <https://butkus.org/chinon/miranda/miranda_re-ii/miranda_re-ii.pdf>.
3. OHARA Corporation catalog references used only for coordinate comparison: L-BSL7 <https://oharacorp.com/optical-glass/low-softening-temperature-optical-glass/>, S-LAM54 <https://oharacorp.com/wp-content/uploads/2023/07/S-LAM54-2020-06.pdf>, S-BAM12 <https://oharacorp.com/glass-type/optical-glass/s-bam-s-nbm/>, S-TIH1 <https://oharacorp.com/glass-type/s-tih-s-nph/>, and S-BSM16 <https://oharacorp.com/glass-type/s-bsm/>.
4. HOYA Corporation Optics Division, E-FD1L data and optical-glass cross-reference: <https://www.hoya-opticalworld.com/common/pdf2019/E-FD1L.pdf> and <https://www.hoya-opticalworld.com/english/products/crossreference.html>.
5. SCHOTT Advanced Optics, N-SK16 optical-glass data, used as an additional 620603-family comparison: <https://www.schott.com/shop/medias/SCHOTT-datasheet-N-SK16.pdf>.
6. HIKARI GLASS CO., LTD., optical-glass catalog, used for cross-vendor coordinate checks: <https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf>.
