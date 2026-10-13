# FUJIFILM FUJINON XF 27mm f/2.8 — US 2016/0011404 A1, Example 5

## Patent Reference and Design Identification

**Patent:** US 2016/0011404 A1\
**Application Number:** 14/859,452\
**Priority:** 2013-05-09 (JP 2013-099180)\
**Filed:** 2015-09-21\
**Published:** 2016-01-14\
**Inventor:** Takashi Suzuki\
**Assignee:** FUJIFILM Corporation\
**Title:** *Imaging Lens and Imaging Apparatus*\
**Embodiment analyzed:** Example 5

The implemented prescription transcribes Example 5 of US 2016/0011404 A1. The patent publishes a seven-element lens arranged as a positive first group G1, aperture stop, negative second group G2, and positive third group G3; Example 5 is the prescription shown in Figure 5 and Tables 9–11. The data file preserves that embodiment at its published scale rather than renormalizing it to the marketed nominal focal length.

The correlation to the original FUJIFILM FUJINON XF27mmF2.8 is strong but remains a research correlation rather than a manufacturer-confirmed patent attribution. The principal convergent points are:

1. FUJIFILM specifies the production lens as 27 mm, f/2.8, 55.5°, seven elements in five groups, with one aspherical element. Example 5 gives 27.81 mm, Fno 2.88, 55.2°, seven elements in five air-separated glass groups, with one double-aspherical element.
2. Example 5 uses a maximum image height of 14.20 mm, or a 28.4 mm image circle. FUJIFILM's X-mount design material likewise identifies a 14.2 mm image height / 28.4 mm image circle for the system.
3. FUJIFILM identifies the original lens as an X-mount APS-C lens. The implemented metadata therefore uses `lensMounts: ["fujifilm-x"]` and `imageFormat: "aps-c"`.
4. The patent priority date is 2013-05-09. An official FUJIFILM article dated 2013-11-20 discusses the original XF27mmF2.8, establishing that the production lens was publicly marketed by that date. The exact launch date was not established from a current primary launch notice in the source set used here.

No FUJIFILM source in the dossier identifies US 2016/0011404 or Example 5 as the production prescription. The identification should therefore be read as a technically close correlation, not documentary confirmation.

## Optical Architecture

Example 5 is a compact positive–negative–positive three-power-group lens with the stop between G1 and G2. From object to image, the physical sequence is a cemented G1 doublet (L11/L12), the aperture stop, a cemented pair (L21/L22) followed by the separate double-aspherical L23 in G2, and the air-spaced L31/L32 pair in G3. The seven physical elements form five air-separated glass groups. This follows the architecture stated in the patent at ¶¶0063, 0067, and 0071–0076.

Computed from the final rounded prescription, G1 has focal length 23.9345 mm, G2 −315.8073 mm, and G3 79.0042 mm. The combined G1+G2 functional focal length is 29.3378 mm. G2 is therefore only weakly negative in the complete in-situ group, even though its L21/L22 cemented pair by itself is positive at 54.8983 mm; the following negative L23 and the internal spacings reverse the sign of the complete group. These group focal lengths describe the grouped matrices, not the standalone power of any one element.

The complete model gives EFL 27.81397 mm, total air-equivalent track 37.03 mm (the patent's TL convention; the physical track with PP modeled is 37.98 mm), and air-equivalent Gaussian BFD 11.27243 mm from the last powered surface. Thus TL/EFL = 1.33135 and BFD/EFL = 0.40528. Under the project criteria it is neither telephoto (`TL/EFL < 1` is false) nor retrofocus (`BFD > EFL` is false). That quantitative result is consistent with the patent's emphasis on reducing overall length without using a conventional long-back-focus retrofocus arrangement.

The patent's rear parallel plate PP (surfaces 14–15: 2.80 mm, nd 1.51680, νd 64.2) is modeled in `rearPlates`: every analysis traces it, but it is not drawn. Paragraph 0064 notes that PP may also be omitted. S13 keeps the printed 6.00 mm gap to PP. Table 9 prints no spacing after surface 15, so the 3.424008 mm plate-to-image gap is derived rather than printed: it is the printed air-equivalent BF 11.27 mm minus 6.00 mm minus 2.80/1.51680. The paraxial image plane is therefore identical to the former folded model. No uniform scale is applied.

## Element-by-Element Analysis

### L11 — Negative Meniscus, front member of G1

`nd = 1.59270, νd = 35.3. Glass: 593353 class (supplier unproven). f = −14.7074 mm.`

L11 is the object-side negative meniscus of the first cemented pair. The patent describes G1 as a negative meniscus with a convex object-side surface followed by a positive lens (¶0071), and further states that cementing the two elements is preferred for field-curvature correction (¶0072). The standalone focal length above is calculated for L11 alone in air; it is not the focal length of the cemented G1 assembly.

### L12 — Positive Meniscus, rear member of G1

`nd = 1.88300, νd = 40.8. Glass: 883408 class (supplier unproven). f = +8.7528 mm.`

L12 is the strong positive partner cemented directly to L11. The complete G1 matrix is positive, f = 23.9345 mm. Example 5 also makes L12 the positive G1 lens governed by patent conditions (6) and (7): `Nd1p > 1.70` and `30 < νd1p < 58`. Its published 1.88300 / 40.8 coordinate satisfies both. The patent associates the index condition with Petzval/field-curvature control and the Abbe-number range with chromatic correction (¶¶0100–0104); those statements are patent design rationale, not an independent allocation of measured aberration to L12 alone.

### L21 — Biconcave Negative, front member of G2

`nd = 1.59270, νd = 35.3. Glass: 593353 class (supplier unproven). f = −9.9560 mm.`

L21 lies immediately behind the aperture stop and is cemented to L22. Its standalone negative power is nearly balanced by L22's standalone positive power, but the cemented pair is not neutral: the pair alone is net positive with f = 54.8983 mm. The patent identifies the first two members of G2 as a preferred cemented negative/positive pair and states that cementing them supports achromatization (¶0074).

### L22 — Biconvex Positive, rear member of the G2 cemented pair

`nd = 1.72916, νd = 54.7. Glass: 729547 class (supplier unproven). f = +9.5107 mm.`

L22 is the positive member of the L21/L22 cemented pair. Its relatively higher Abbe number than L21 is consistent with the negative/positive cemented achromatizing arrangement described by the patent, but the data do not identify a vendor-specific glass or provide enough line-index information to assign a more specific secondary-spectrum behavior. The pair's calculated net positive power must be distinguished from the weakly negative power of the complete G2 once L23 and the intervening air spacing are included.

### L23 — Double-Aspherical Negative Meniscus, rear member of G2

`nd = 1.58313, νd = 59.5. Glass: 583595 class (supplier unproven). f = −53.9300 mm.`

L23 is a separate negative meniscus carrying the two aspherical surfaces, source S8/S9 and model labels `8A`/`9A`. The patent places the aspherical lens away from the stop and states that this arrangement facilitates correction of off-axis field curvature and distortion (¶0073). In the final group matrix, L23 and the group spacings are what turn the otherwise positive L21/L22 cemented pair into the weakly negative G2 required by the patent architecture.

### L31 — Negative Meniscus, front member of G3

`nd = 1.80518, νd = 25.4. Glass: 805254 class (supplier unproven). f = −32.5174 mm.`

L31 is the negative front member of the rear group. The patent specifies that the most object-side surface of G3 is concave toward the object and describes the two-element negative/positive G3 arrangement as favorable for field-curvature correction (¶¶0067, 0076). The standalone negative focal length is again an element-in-air quantity rather than the focal length of G3.

### L32 — Biconvex Positive, rear member of G3

`nd = 1.90366, νd = 31.3. Glass: 904313 class (supplier unproven). f = +25.2756 mm.`

L32 is the strong positive rear element that completes G3. The two air-spaced rear elements together form a positive group with calculated f = 79.0042 mm. Their combination establishes the rear positive power needed by the patent's positive–negative–positive architecture while leaving an air-equivalent back focus of about 11.27 mm from S13 to the image plane.

## Glass Identification and Selection

The patent publishes only d-line refractive index and νd for the elements; it does not name a glass supplier or melt. The data therefore use supplier-neutral six-digit coordinate classes. Authoritative catalog comparisons found compatible entries across multiple vendors for several coordinates, so selecting one vendor name would overstate the source evidence.

| Class used in data | nd | νd | Elements | Representative coordinate-compatible catalog entries | Evidence limit |
| --- | ---: | ---: | --- | --- | --- |
| 593353 | 1.59270 | 35.3 | L11, L21 | OHARA S-FTM16 | Supplier not established |
| 883408 | 1.88300 | 40.8 | L12 | OHARA S-LAH58; SCHOTT N-LASF31A; HIKARI J-LASF08A; SUMITA K-LaSFn17 | Multiple vendors reproduce the coordinate |
| 729547 | 1.72916 | 54.7 | L22 | OHARA S-LAL18; CDGM H-LaK52; SUMITA K-LaK18; HOYA TAC8P is very close | Supplier not established |
| 583595 | 1.58313 | 59.5 | L23 | CDGM H-ZK2; HOYA BACD12 family; OHARA S-/L-BAL42 is a near-coordinate family | Vendor and OHARA S/L prefix not established |
| 805254 | 1.80518 | 25.4 | L31 | OHARA S-TIH6; HOYA FD60; CDGM H-ZF7LA; SUMITA K-SFLD6 | Supplier not established |
| 904313 | 1.90366 | 31.3 | L32 | OHARA S-LAH95; HIKARI J-LASFH13; CDGM H-ZLaF75 family | Supplier not established |

Because the source coordinate remains vendor-ambiguous, candidate catalog `nC`, `nF`, and `ng` values were not copied onto the elements. The implemented model consequently contains no `nC`, `nF`, `ng`, or `dPgF` fields. The prescription supports ordinary d-line/Abbe analysis, but it does not support an APO or anomalous-partial-dispersion claim.

The calculated Petzval sum of the final d-line prescription is +0.005715845 mm⁻¹ using the required surface-by-surface `φ/(n·n′)` convention. That value is a computed property of the implemented prescription; it does not identify any particular catalog glass beyond the stored d-line coordinates.

## Focus Mechanism

The patent's preferred focus arrangement is front focusing: only G1 and G2 move integrally toward the object as focus changes from infinity toward a nearer object (¶0077; claim 18). The patent does not publish a finite-distance Example 5 spacing table, focus travel, object-distance mapping, or a close-focus aberration prescription. It also does not provide enough information to determine unambiguously whether the stop co-moves in a production implementation.

For that reason the data file uses `NO_INTERNAL_RECONSTRUCTION`. The `var` object is empty, and all optical calculations in this record refer to the published infinity state. FUJIFILM's marketed minimum focus distance of 0.34 m and maximum magnification of 0.1× are retained as production metadata only; neither value is used to invent internal spacing changes.

## Aspherical Surfaces

Example 5 has two aspherical surfaces, both on L23: source surfaces S8 and S9, stored as `8A` and `9A`. The patent writes the sag equation in the form

$$
Z_d = \frac{C h^2}{1 + \sqrt{1-K_\mathrm{p} C^2 h^2}} + \sum_{m=3}^{20} A_m h^m.
$$

LensVisualizer uses the standard denominator `sqrt(1 - (1+K)(h/R)^2)`, so the implemented conic conversion is `K_project = K_patent - 1`. The patent prints `K_patent = 0` on both surfaces; the data therefore store `K = -1` on `8A` and `9A`. No prescription scaling is applied, so all A3–A20 coefficients are copied numerically without scale transformation. The odd radial powers remain rotationally symmetric because `h` is radial height.

| Coefficient | 8A / source S8 | 9A / source S9 |
| --- | ---: | ---: |
| A3 | `7.0620023E-03` | `6.3586846E-03` |
| A4 | `-1.7499231E-02` | `-1.1023944E-02` |
| A5 | `2.2378175E-02` | `9.6878003E-03` |
| A6 | `-1.5275947E-02` | `-3.9913235E-03` |
| A7 | `3.1350874E-03` | `-1.1999457E-04` |
| A8 | `2.6653708E-03` | `8.1445734E-04` |
| A9 | `-1.9393091E-03` | `-2.8017275E-04` |
| A10 | `2.5998420E-04` | `-3.9636577E-06` |
| A11 | `1.7720892E-04` | `2.3185531E-05` |
| A12 | `-6.8579204E-05` | `-4.0771733E-06` |
| A13 | `-9.9188983E-07` | `-5.2082735E-07` |
| A14 | `4.5920468E-06` | `2.3298727E-07` |
| A15 | `-6.0414099E-07` | `-1.1418578E-08` |
| A16 | `-1.0345902E-07` | `-4.3437939E-09` |
| A17 | `2.8011243E-08` | `5.8129007E-10` |
| A18 | `-2.2694472E-10` | `1.3062657E-11` |
| A19 | `-4.0009448E-10` | `-6.2155182E-12` |
| A20 | `2.8985323E-11` | `3.0227519E-13` |

The two surfaces should be interpreted as the complete polynomial profiles rather than as independent low-order terms with uniquely separable aberration functions. The patent attributes the double-aspherical L23 arrangement generally to field-curvature and distortion correction. At the modeled, not patent-published, semi-diameters the verified model gives a departure from the same-radius sphere of −0.0282005 mm at `8A` (h = 5.06 mm) and −0.0877073 mm at `9A` (h = 5.91 mm). These departure values are properties of the modeled clear apertures and must not be read as manufacturer or patent aperture specifications.

## Conditional Expressions

The patent gives nine conditions, numbered (0) through (8). The verified model recomputes them from the rounded Example 5 prescription and preserves two source-precision issues rather than hiding them.

| ID | Patent condition | Calculated | Table 11 | Disposition |
| --- | --- | ---: | ---: | --- |
| C0 | `-0.51 ≤ f/f2 ≤ -0.09` | -0.0880726078 | -0.09 | Fails exact bound; matches patent at 2-decimal reporting precision |
| C1 | `2.1 < TL/Y < 3.0` | 2.60774648 | 2.61 | Exact pass |
| C2 | `0.50 < Xd/TL < 0.85` | 0.695652174 | 0.7 | Exact pass |
| C3 | `0.35 < Y/f < 0.85` | 0.510534828 | 0.51 | Exact pass |
| C4 | `0.70 < ST/TL < 0.95` | 0.838509317 | 0.84 | Exact pass |
| C5 | `0.7 < f/f1 < 1.6` | 1.16208567 | 1.16 | Exact pass |
| C6 | `Nd1p > 1.70` | 1.88300 | 1.883 | Exact pass |
| C7 | `30 < vd1p < 58` | 40.8 | 40.8 | Exact pass |
| C8 | `0.9 < f12/f < 1.5` | 1.05478659 | 1.05 | Exact pass |

Condition C0 is the important exception. Direct calculation from the rounded Table 9 prescription gives `f/f2 = -0.0880726`, which is slightly more positive than the written upper boundary −0.09. Table 11 nevertheless prints −0.09, and the direct value rounds to −0.09 at the same two-decimal condition precision. The model therefore records C0 as a reported-precision pass, not an exact inequality pass.

The underlying cause is visible in the group focal length as well. Direct computation of G2 from the rounded Table 9 numbers gives −315.8073 mm, whereas Table 11 prints `f2 = −317.79 mm`. Propagating each printed G2 radius, spacing, and index over its rounding interval yields a focal-length envelope of approximately −319.040 to −312.640 mm, which contains the printed value. This supports a source-quantization explanation, but it does not reconstruct the unpublished full-precision design values and does not replace either number.

## Verification Summary

The final parsed data reproduce the principal first-order quantities at the patent's printed precision. Sequential height/reduced-angle tracing and an independently implemented ABCD chain both give EFL = 27.813969 mm and Gaussian BFD = 11.272434 mm from S13. With PP modeled physically, the S13-to-image path (6.00 mm + 2.80 mm PP + 3.424 mm) is air-equivalent to the patent's 11.27 mm BF. The air-equivalent TL = 37.03 mm and stop-to-image distance ST = 31.05 mm match Table 11; the physical values are 0.954 mm longer (37.98 mm and 32.00 mm) because of the 2.80 × (1 − 1/1.51680) plate allowance.

The patent does not publish a physical stop diameter. The data therefore calibrate `STO.sd = 3.818045612 mm` from the published Fno = 2.88 and the computed entrance-pupil magnification. Re-evaluation gives f/2.880000, but that agreement is a calibration identity rather than independent evidence of the manufactured diaphragm size.

Likewise, no clear semi-diameters are published. Every surface `sd` in the model is a disclosed inference from exact d-line meridional ray envelopes at the infinity state, then constrained by the current edge-thickness, actual-rim-slope, conic-domain, and shared-gap checks. The tightest authored asphere is `8A`, whose 5.06 mm modeled semi-diameter gives a 62.159° rim angle. These are model-validity checks, not source dimensions.

As a field sanity check, exact meridional chief rays launched at ±27.6° reach ±14.19113 mm at the image plane, within 0.00887 mm of the patent's published 14.20 mm maximum image height. Full-stop meridional bundles were also contained at the on-axis and ±16.56° sampled fields. This is finite d-line meridional sampling at infinity; it is not a claim of complete three-dimensional pupil/field coverage or a substitute for LensVisualizer's production render diagnostics.

## Sources and References

- Takashi Suzuki, **US 2016/0011404 A1, “Imaging Lens and Imaging Apparatus,”** published 2016-01-14. Relevant locations: Figure 5 (PDF p. 4); ¶¶0063–0077 and 0078–0107; asphere definition ¶¶0111–0120; Example 5 Tables 9–11 (PDF pp. 19–20).
- FUJIFILM, **FUJINON XF27mmF2.8 — discontinued product specifications**: https://www.fujifilm-x.com/global/products/discontinued-lenses/xf27mmf28/
- FUJIFILM, **FUJINON LENS XF27mmF2.8 Owner's Manual BL01871-101**: https://dl.fujifilm-x.com/support/manual/lenses/lens_xf27_manual_02.pdf
- FUJIFILM, **Lens compatibility — X Mount Prime list**: https://www.fujifilm-x.com/global/support/compatibility/lenses/
- FUJIFILM, **One lens one story #5 — XF27mmF2.8**: https://www.fujifilm-x.com/ja-jp/stories/one-lens-one-story-5/
- FUJIFILM, **One lens one story #6 — XF27mmF2.8 Part 2**: https://www.fujifilm-x.com/en-ca/stories/one-lens-one-story-6/
- FUJIFILM, **XF27mmF2.8 review by Yukio Uchida**, dated 2013-11-20: https://www.fujifilm-x.com/en-us/stories/xf27mmf28-review-by-yukio-uchida/
- OHARA, current optical-glass pages used for coordinate checks: S-FTM16, S-LAH58, S-LAL18, S-/L-BAL42, S-TIH6, and S-LAH95; https://oharacorp.com/
- SCHOTT, **Optical Glass Collection datasheets**: https://www.schott.com/en-us/products/optical-glass-p1000267/downloads
- HOYA, **Optical Glass Data Download**: https://www.hoya-opticalworld.com/english/datadownload/index.html
- HIKARI, **Optical Glass Catalog**: https://www.hikari-g.co.jp/optical_glass/catalog/
- CDGM, **Optical Glass Database**: https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database
- SUMITA OPTICAL GLASS, **Optical Glass Data Book v14.02** (2026-08-21): https://www.sumita-opt.co.jp/download_files/en/data/glassdatabook_ver14.02.00.pdf
