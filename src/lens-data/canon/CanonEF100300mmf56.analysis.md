# CANON EF 100-300mm f/5.6 — JPS61-77818A Example 1

## Patent Reference and Design Identification

- **Patent:** JPS61-77818A
- **Application Number:** JP59200177A
- **Filed:** 25 September 1984
- **Published:** 21 April 1986
- **Inventors:** Keiji Ikemori; Sadatoshi Takahashi; Takashi Matsushita; Tsunefumi Tanaka; Nozomi Kitagishi
- **Applicant:** Canon Inc.
- **Title:** Zoom Lens
**Embodiment analyzed:** Numerical Example 1

The selected correlation is the Canon EF 100-300mm f/5.6 and the sole numerical example in JPS61-77818A. The patent itself does not name the production lens, so the relationship is not presented as manufacturer-confirmed. It is instead supported by convergent source evidence: the numerical example contains 15 elements in 9 air-separated physical groups, the principal zoom range is 100–290 mm at f/5.6, Canon is the applicant, and the publication precedes the 1987 introduction of the EF product. Canon's product record independently gives the non-L EF100-300mm f/5.6 as 15 elements in 9 groups with a marketed 100–300 mm range and constant f/5.6 maximum aperture. [1–4]

The patent is internally inconsistent at the long end. Its prose and four-column spacing table use 290 mm, and the page-4 aberration figure is labeled `f = 290`, while the page-3 numerical-example heading prints `f = 69-100~300`. The model therefore treats 290 mm as the actual tabulated design state and 300 mm as a rounded heading and production nominal value; no scale is applied. The numerical example also publishes a separate second zoom from 100 mm to 69 mm; that state is retained because it belongs to the selected embodiment even though it lies outside the marketed production range. [1]

Canon's English and Japanese Camera Museum pages disagree on the release month: the English page gives March 1987 and the Japanese page gives May 1987. Both agree on 1987 and on the product specifications used for correlation; the month discrepancy is therefore not used to support any optical claim. [2, 3]

Canon's EOS history places the EF mount in the 35 mm SLR system introduced in 1987. The data file accordingly uses the canonical `canon-ef` mount and `135-full-frame` image-format identifiers. [4, 5]

One patent source error is corrected in the model. Page 3 prints the third glass as `N3 = 1.43749, νd = 70.1`; the data file uses `nd = 1.48749, νd = 70.1`. With the printed index, the four published spacing states compute to 69.500, 102.299, 219.238, and 384.436 mm, which is incompatible with the patent's 290 mm long state. With `1.48749`, the same prescription computes to 69.207, 99.927, 198.069, and 289.066 mm. The raw value remains a documented source value; `1.48749` is an explicit modeling correction rather than an OCR substitution. [1]

The patent does not state the spectral reference line for its refractive indices. The data file uses the d-line convention as an inference from the published index/Abbe coordinates and glass-position conventions. No element has authored `nC`, `nF`, `ng`, or `dPgF` data.

## Optical Architecture

The prescription is a four-functional-group positive–negative–positive–positive zoom. In front-to-rear order it consists of:

| Functional group | Elements | Sign | Structural note |
|---|---|---:|---|
| G1 | L1–L3 | positive | Cemented C1 followed by air-spaced L3 |
| G2 | L4–L6 | negative | Air-spaced L4 followed by cemented C2 |
| G3 | L7–L8 | positive | Cemented C3 |
| STO | — | — | Aperture stop between G3 and G4 |
| G4 | L9–L15 | positive | C4, C5, L13, and C6 |

The 15 elements form 9 air-separated physical groups. Six of those physical groups are cemented pairs: C1 (L1+L2), C2 (L5+L6), C3 (L7+L8), C4 (L9+L10), C5 (L11+L12), and C6 (L14+L15). All refracting surfaces are spherical. There are no aspherical, diffractive, reflective, folded-path, cover-glass, filter, or dummy/flare-cutter surfaces in the modeled numerical prescription.

The patent describes two zooming modes. In the first, covering the 100–290 mm numerical range, the group spacings vary with G1 and G2 separating strongly while G4 remains almost stationary in the fixed-image normalization. The patent prose says G1 and G3 move objectward and G2 imageward. The tabulated numerical path contains a real qualification to that prose: G3 first moves 3.536 mm imageward from 100 to 198 mm and then 9.300 mm objectward from 198 to 290 mm. The model follows the numerical table and preserves this reversal rather than imposing a monotonic trajectory. [1]

In the second zoom, from 100 to 69 mm, G1 and G2 move together because D5 remains 2.43 mm, while G3 and G4 move imageward at different rates. This is the mechanism associated with the patent's `t3/t4` condition. The combined G1+G2 power is negative in this coupled state, matching the patent's stated preference that the first two groups behave as a net negative unit during the second zoom. [1]

Canon classifies the production product as a telephoto zoom, but the first-order criterion used here is stricter. The modeled prescription satisfies `TL/EFL < 1` only at the 290 mm state, where the ratio is approximately 0.810. The shorter states therefore are not described here as telephoto configurations in the strict optical sense.

## Element-by-Element Analysis

The focal lengths quoted below are standalone thick-element focal lengths in air, as stored in the data file and independently recomputed from each element's radii, center thickness, and index. A cemented-pair focal length refers to the compound pair by itself. Neither should be confused with the in-system behavior of the complete zoom, which depends on the functional-group spacings and the full prescription.

### C1 — L1 + L2, front cemented pair

**L1 — Negative Meniscus.** `nd = 1.80518, νd = 25.4. Glass: 805254 — SF6-class dense flint; vendor/melt unresolved. f = −248.416 mm.`

**L2 — Positive Meniscus.** `nd = 1.51633, νd = 64.1. Glass: 516641 — BSL7-class crown; OHARA S/L family unresolved. f = +138.813 mm.`

The two standalone elements have opposite power signs, but their cemented combination C1 is net positive, with a compound EFL of approximately +323.120 mm. C1 is therefore not equivalent to either constituent element considered alone. In the full prescription it forms the front part of positive functional group G1.

The large Abbe-number separation between L1 and L2 is source data, but the actual glass melts and line-index behavior are unresolved. It is therefore reasonable to describe the pair as a power- and dispersion-balanced cemented pair, but not to assign a specific secondary-spectrum or anomalous-dispersion function.

### L3 — air-spaced positive element completing G1

**L3 — Biconvex Positive.** `nd = 1.48749, νd = 70.1. Glass: 48770x — FK5/FSL5-class low-dispersion crown; source-corrected model coordinate. f = +222.686 mm.`

L3 is separated from C1 by a 0.20 mm air gap and completes positive functional group G1. Its stored index is the corrected N3 value discussed above. The optical-position label is intentionally class-level: the patent does not identify a vendor or melt, and the source correction prevents treating the printed coordinate as a catalog identity.

### L4 — first element of negative G2

**L4 — Biconcave Negative.** `nd = 1.71300, νd = 53.8. Glass: 713538/540 — LAK8/LAL8-class lanthanum crown; vendor unresolved. f = −61.708 mm.`

L4 begins the negative second functional group as an air-spaced negative element. Its standalone negative power is reinforced by the following C2 compound. The resulting G2 is the principal negative-power zoom group in the patent's positive–negative–positive–positive architecture.

### C2 — L5 + L6, negative cemented pair in G2

**L5 — Biconcave Negative.** `nd = 1.69680, νd = 55.5. Glass: 697555 — LAK14-class lanthanum crown; vendor unresolved. f = −36.767 mm.`

**L6 — Positive Meniscus.** `nd = 1.80518, νd = 25.4. Glass: 805254 — SF6-class dense flint; vendor/melt unresolved. f = +54.950 mm.`

Although L6 is positive as a standalone element, the cemented C2 pair is net negative, with a compound EFL of approximately −111.992 mm. Combined with L4, it preserves the negative sign of G2. This is one example in the design where constituent-element sign and cemented-compound sign cannot be inferred from a single member alone.

### C3 — L7 + L8, positive third functional group

**L7 — Biconvex Positive.** `nd = 1.52301, νd = 50.8. Glass: Unmatched (nd=1.52301, νd=50.8; coordinate 523508). f = +46.505 mm.`

**L8 — Negative Meniscus.** `nd = 1.80518, νd = 25.4. Glass: 805254 — SF6-class dense flint; vendor/melt unresolved. f = −88.059 mm.`

C3 is net positive, with a compound EFL of approximately +99.422 mm, and is identical to functional group G3 because no additional glass elements belong to that group. The aperture stop follows G3 after the variable D13 air space. The patent specifically links the relative motion of G3 and G4 around this stop position to control of astigmatic variation during the second zoom. [1]

L7 remains explicitly unmatched in the data file. Substituting a named glass would imply a vendor/melt identity that the available coordinates do not establish.

### C4 — L9 + L10, front positive compound of G4

**L9 — Biconvex Positive.** `nd = 1.60311, νd = 60.7. Glass: 603607 — SK14/BACD14-class crown; vendor unresolved. f = +37.576 mm.`

**L10 — Biconcave Negative.** `nd = 1.77250, νd = 49.6. Glass: 773496 — LAF34/LAH66/TAF1-class lanthanum flint; vendor unresolved. f = −76.534 mm.`

C4 is a net positive cemented pair with a compound EFL of approximately +64.522 mm. It immediately follows the stop and supplies the strongest positive compound contribution within G4. The pair's net sign is positive even though its rear constituent is negative.

### C5 — L11 + L12, weak net-negative compound in G4

**L11 — Negative Meniscus.** `nd = 1.83400, νd = 37.2. Glass: 834372/373 — LASF010/LAH60-class dense lanthanum flint; vendor unresolved. f = −31.161 mm.`

**L12 — Positive Meniscus.** `nd = 1.60729, νd = 49.2. Glass: BAF5-class coefficient proxy (patent 607492; production supplier unspecified). f = +33.587 mm.`

C5 has a comparatively weak net negative compound power, with an EFL of approximately −222.447 mm. Its placement between the positive C4 compound and positive L13 means that this local negative contribution does not make the complete fourth functional group negative. L12 is the second explicitly unmatched coordinate in the prescription.

### L13 — central positive singlet within G4

**L13 — Biconvex Positive.** `nd = 1.57501, νd = 41.5. Glass: 575415 — LF7/TIL27-class light flint; vendor unresolved. f = +82.725 mm.`

L13 is an air-spaced positive element between C5 and the rear C6 pair. Its very weak front curvature is evident in the large R21 radius, but the element remains a positive biconvex singlet in the final data. It contributes positive power within G4 without being part of a cemented pair.

### C6 — L14 + L15, rear cemented pair

**L14 — Biconcave Negative.** `nd = 1.80400, νd = 46.6. Glass: 804466 — LASF015/LAH65-class lanthanum flint; vendor unresolved. f = −14.613 mm.`

**L15 — Biconvex Positive.** `nd = 1.61293, νd = 37.0. Glass: 613370 — F3/S-TIM3-class flint; vendor unresolved. f = +26.877 mm.`

C6 is net negative, with a compound EFL of approximately −37.237 mm. This is another case where local compound power and functional-group power differ: despite the rear pair's negative net power, G4 as a whole remains positive because of the preceding C4 and L13 positive contributions and their internal separations.

## Glass Identification and Selection

The patent publishes refractive index and Abbe number but no maker names or melt designations. The data file therefore uses six-digit optical positions, class-level labels, or explicit `Unmatched (...)` annotations. These are glass-position identifications, not claims that Canon used a specific current catalog melt.

| Optical position / class annotation | nd | νd | Elements | Disposition |
|---|---:|---:|---|---|
| 805254 — SF6-class dense flint | 1.80518 | 25.4 | L1, L6, L8 | Vendor/melt unresolved |
| 516641 — BSL7-class crown | 1.51633 | 64.1 | L2 | OHARA S/L family unresolved |
| 48770x — FK5/FSL5-class low-dispersion crown | 1.48749 | 70.1 | L3 | Source-corrected model coordinate |
| 713538/540 — LAK8/LAL8-class lanthanum crown | 1.71300 | 53.8 | L4 | Vendor unresolved |
| 697555 — LAK14-class lanthanum crown | 1.69680 | 55.5 | L5 | Vendor unresolved |
| Unmatched coordinate 523508 | 1.52301 | 50.8 | L7 | No defensible named-glass match |
| 603607 — SK14/BACD14-class crown | 1.60311 | 60.7 | L9 | Vendor unresolved |
| 773496 — LAF34/LAH66/TAF1-class lanthanum flint | 1.77250 | 49.6 | L10 | Vendor unresolved |
| 834372/373 — LASF010/LAH60-class dense lanthanum flint | 1.83400 | 37.2 | L11 | Vendor unresolved |
| BAF5-class coefficient proxy | 1.60729 | 49.2 | L12 | Compatible catalog curve; production supplier unspecified |
| 575415 — LF7/TIL27-class light flint | 1.57501 | 41.5 | L13 | Vendor unresolved |
| 804466 — LASF015/LAH65-class lanthanum flint | 1.80400 | 46.6 | L14 | Vendor unresolved |
| 613370 — F3/S-TIM3-class flint | 1.61293 | 37.0 | L15 | Vendor unresolved |

The repeated 1.80518/25.4 coordinate on L1, L6, and L8 is preserved as the same optical position in the model, but it does not establish a historical manufacturer or melt. L12 uses the compatible coefficient-backed BAF5 curve while retaining the patent's 607492 coordinate and leaving the production supplier unspecified. L7 remains unmatched because no catalog row falls within the coordinate guard.

No element carries explicit patent C-, F-, or g-line indices or `dPgF`. The qualified catalog-equivalent curves improve chromatic tracing but do not support an APO designation or a claim of anomalous partial dispersion.

## Focus Mechanism

The patent states that focusing is preferably performed by moving the first lens group because this produces relatively small aberration variation. It does not publish a finite-object spacing table, focus travel, magnification state, or close-focus group position for the numerical example. [1]

The data file therefore uses `NO_INTERNAL_RECONSTRUCTION`. All zoom `var` entries have identical infinity and close values, so the modeled internal geometry remains at the published infinity states. Canon's 2.0 m closest-focusing-distance specification is retained as product metadata only. It is not used to solve a Group I position, and no numerical close-focus magnification is attributed to the patent model. [2, 3]

## Conditional Expressions

For the second zoom, the patent defines the relative movements of G3 and G4 as `t3` and `t4` and requires

$$
0.1 < \frac{t_3}{t_4} < 0.9.
$$

The patent prints `t3/t4 = 0.25` for the numerical example. Independent movement reconstruction from the final data gives `t3/t4 = 0.249232`, satisfying the stated range. [1]

The patent explains this condition in the context of the stop lying between G3 and G4: G3 should move less than G4 during the second zoom so that astigmatic correction does not become insufficient or excessive while the required magnification change and compactness are maintained. That explanation is a patent design rationale; it should not be generalized into a claim about specific glass elements without additional aberration data. [1]

## Verification Summary

The modeled prescription reproduces the four published infinity-focus spacing states without scaling. The rear distance after surface 25 is not tabulated in the patent; it is the computed paraxial back focal distance required to place the image plane at focus.

| Patent state | Computed EFL | Computed/authored BFD | Paraxial physical stop SD for f/5.6 |
|---:|---:|---:|---:|
| 69 mm | 69.2066 mm | 56.9673 mm | 11.1664 mm |
| 100 mm | 99.9271 mm | 82.5678 mm | 14.7536 mm |
| 198 mm | 198.0687 mm | 82.5413 mm | 14.7499 mm |
| 290 mm | 289.0657 mm | 82.5314 mm | 14.7485 mm |

The patent publishes the stop plane and `FNO = 1:5.6` but not the physical stop diameter. Under the project f-number convention, each state's target entrance-pupil radius is `EFL/(2×5.6)` and is mapped to the stop with the front-system paraxial matrix. The resulting physical stop radii are therefore model-derived quantities. The authored `STO.sd = 11.1664 mm` is the 69 mm baseline; maintaining f/5.6 at the 100, 198, and 290 mm states requires the larger modeled radii shown above. Exact spherical rays are solved to these physical stop radii for geometry checks, but finite-height Snell intercepts are not used to define f-number. The patent gives no iris-motion law for the second zoom, so this state dependence is a modeling consequence rather than a source fact.

Likewise, the patent does not publish clear semi-diameters. The final semi-diameters are inferred from exact spherical real-ray envelopes through the paraxial f/5.6 stop at all four zoom states and are constrained by edge-thickness, actual rim-slope, cross-gap, and off-axis containment checks. The smallest conservative element edge thickness is 0.471 mm, the largest modeled rim angle is 50.46°, and the smallest non-stop traced-ray clearance is 0.706 mm. These values describe the validated visualization model, not dimensions stated by Canon.

The surface-by-surface Petzval sum, computed as `φ/(n·n′)`, is `5.0970327×10⁻4 mm⁻¹`. This is a computed prescription property. No claim is made that the patent or production literature publishes this value.

No cover plate, sensor glass, filter, inactive dummy surface, or mechanical plane is removed from the numerical example because none is present in the selected prescription. No air-equivalent plate correction is therefore required. No uniform scaling is applied (`s = 1.0`), and there are no aspheric coefficients to transform.

## Sources and References

1. **JPS61-77818A, “Zoom Lens,” Canon Inc., Numerical Example 1.** Supplied five-page Japanese patent scan. The prescription and spacing table are on page 3 of the supplied scan; the optical section and aberration diagrams are on page 4. Metadata and searchable Japanese text were cross-checked at [Google Patents](https://patents.google.com/patent/JPS6177818A/en).
2. **Canon Camera Museum — EF100-300mm f/5.6.** Official English product record: <https://global.canon/en/c-museum/product/ef262.html>.
3. **Canon Camera Museum — EF100-300mm F5.6.** Official Japanese product record: <https://global.canon/ja/c-museum/product/ef262.html>.
4. **Canon Camera Museum — View by period, 1987–1991.** EF/EOS system history and 35 mm SLR context: <https://global.canon/en/c-museum/history/story07.html>.
5. **Canon Camera Museum — The Evolution of the Canon Lens Mount.** EF-mount chronology: <https://global.canon/en/c-museum/history/lens-mount.html>.
6. **Glass-catalog resources used for coordinate classification:** OHARA <https://www.ohara-inc.co.jp/en/product/catalog/>; HOYA <https://www.hoya-opticalworld.com/english/datadownload/index.html>; SCHOTT <https://www.schott.com/en-us/products/optical-glass-p1000267/downloads>; HIKARI <https://www.hikari-g.co.jp/optical_glass/catalog/>; CDGM <https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database>; SUMITA <https://www.sumita-opt.co.jp/en/download/>.
