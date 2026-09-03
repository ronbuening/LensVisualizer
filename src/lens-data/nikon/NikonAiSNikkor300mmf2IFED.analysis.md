# NIKON NIKKOR 300mm f/2S IF-ED

## Patent Reference and Design Identification

**Patent:** US 4,732,459 A\
**Application Number:** US 07/006,279\
**Priority:** July 27, 1983\
**Filed:** January 20, 1987\
**Granted:** March 22, 1988\
**Inventor:** Kiyoshi Hayashi\
**Assignee:** Nippon Kogaku Kogyo K.K.\
**Title:** *Fast Telephoto Lens*\
**Embodiment analyzed:** Example 4 / fourth embodiment

The LensVisualizer prescription represents the job-card correlation between the production **NIKON NIKKOR 300mm f/2S IF-ED** and the fourth embodiment of US 4,732,459 A. The patent is a Nippon Kogaku design source and Example 4 is a native-scale 300 mm, f/2 design using a single translating internal-focus group. The production correlation is treated as the selected analytical premise; the patent itself does not name the commercial lens.

The production identity has separate manufacturer support. Nikon's archived AF Teleconverter TC-16 manual lists the **Nikkor 300mm f/2S IF-ED** among compatible AI-type Nikkor lenses and distinguishes AI-S lenses by their aperture-direct-readout scale. That manual supports the lens name and F-mount/AI-S system identity, but it does not identify US 4,732,459 A or Example 4 as the production prescription.

The principal points supporting the selected correlation are:

1. Example 4 is explicitly specified at `f = 300` and `F-number = 2.0`, matching the production focal length and maximum aperture.
2. The patent's architecture focuses by translating only the negative second functional group toward the image, consistent with the production lens's IF designation.
3. Example 4 contains 11 elements in 8 air-separated physical groups, organized into three functional power groups, and is entirely spherical.
4. The patent was assigned to Nippon Kogaku K.K., the historical Nikon entity named in the data file.

The data file uses the canonical Nikon F-mount and 135-format taxonomy identifiers. No manufacturer release date or manufacturer minimum-focus specification is introduced because neither is required by, or verified for, this model.

## Optical Architecture

The design is a three-functional-group positive–negative–positive internal-focusing long-focus system. The 11 elements form 8 air-separated physical groups: G1 contains L1–L4, G2 contains L5–L7, and G3 contains L8–L11. Three cemented pairs are present: L5/L6 in G2 and L8/L9 plus L10/L11 in G3.

The patent specifies that G1 and G2 form an afocal combination for an object at infinity. Focusing is achieved by translating the complete negative G2 group toward the image while G1 and G3 remain fixed. This is the defining kinematic simplification of the design: only one functional group moves, rather than the multi-group floating mechanisms discussed in the patent's background.

Independent paraxial calculation from the final TypeScript arrays gives air-capped equivalent focal lengths of **+270.0003 mm** for G1, **−105.0001 mm** for G2, and **+116.6669 mm** for G3. These yield `f1/f = 0.899999` and `|f2|/f = 0.350000`, reproducing the fourth embodiment's published group ratios.

The patent title uses the term *Fast Telephoto Lens*. Under the project's stricter geometric terminology, however, the modeled first-surface-to-image track is **358.962 mm** for an EFL of **300.0007 mm**, so `TL/EFL = 1.19654`. The model is therefore not classified as telephoto by the project's `TL/EFL < 1` criterion. Its computed BFD is **112.2223 mm**, also well below the EFL, so it is not retrofocus.

All 19 patent refracting surfaces are spherical. The data model adds one optically neutral `STO` plane because LensVisualizer requires an explicit aperture stop. No aspheric, diffractive, folded-path, filter, sensor-cover, dummy, or flare-cutter surface is present in Example 4. The prescription is used at its native scale (`s = 1.0`), so no dimensional scaling or aspheric-coefficient transformation is applicable.

## Element-by-Element Analysis

The focal length quoted on each element's first line is its **standalone air-capped focal length**, not its in-situ power. Cemented-pair net powers are stated separately where applicable.

### L1 — Biconvex Positive

`nd = 1.49782, νd = 82.3.` Glass: **J-FKH1 catalog-equivalent coefficient proxy**. `f = +560.8004 mm.`

L1 is the first positive collector in G1. Its high Abbe number is repeated in two other positive elements of the same functional group, but the stored glass annotation deliberately does not force a modern catalog identity. In the patent's architecture, G1 carries much of the first-order positive power and is the group whose focal-length range is treated as critical to spherical-aberration control.

### L2 — Biconvex Positive

`nd = 1.49782, νd = 82.3.` Glass: **J-FKH1 catalog-equivalent coefficient proxy**. `f = +342.4610 mm.`

L2 is the stronger of the first two positive collectors in G1. The patent's condition (4) specifically links the spacing after this second positive component to coma control: oblique rays strongly converged by the rear surface of the second positive lens are subsequently acted on by the following negative element. The L2–L3 air spacing is therefore part of an aberration-control relationship rather than an arbitrary mechanical separation.

### L3 — Biconcave Negative

`nd = 1.74950, νd = 35.2.` Glass: **J-LAF7 catalog-equivalent coefficient proxy**. `f = −332.2751 mm.`

L3 provides the negative component of G1. Its placement immediately after L2 forms the positive-to-negative transition discussed in the patent's coma condition. The data file retains only a class-level S-LAM7 comparison because the patent coordinates do not establish a vendor or unique trade name.

### L4 — Positive Meniscus

`nd = 1.49782, νd = 82.3.` Glass: **J-FKH1 catalog-equivalent coefficient proxy**. `f = +513.5004 mm.`

L4 is the rear positive meniscus of G1. The patent states that the fourth embodiment follows the arrangement of the second embodiment, in which a positive meniscus is added at the image side of the first converging group. The patent also notes generally that a fourth positive component in G1 can be used to shorten overall length. L4 therefore completes the four-element positive front group before the long G1-to-G2 air space.

### L5 — Biconvex Positive, Cemented Pair D1

`nd = 1.79504, νd = 28.6.` Glass: **J-LAFH3 catalog-equivalent coefficient proxy**. `f = +190.9768 mm.`

L5 is the positive component of the object-side cemented pair in G2. Although its standalone power is positive, it is paired with L6 at a strongly powered cemented interface and participates in a net negative achromatic component.

### L6 — Biconcave Negative, Cemented Pair D1

`nd = 1.51454, νd = 54.6.` Glass: **KF3 catalog-equivalent coefficient proxy**. `f = −145.9939 mm.`

L6 is the negative partner of D1. The L5/L6 cemented pair has an independently computed air-capped net EFL of **−653.9549 mm**. This distinction matters: L5 is individually positive and L6 individually negative, yet the cemented component as a whole is weakly negative; the complete G2 group is much more strongly negative at **−105.0001 mm** because L7 contributes additional diverging power.

The patent's conditions (5) and (6) act directly on this object-side G2 achromat. They constrain the refractive-index difference and Abbe-number difference between its positive and negative constituents to balance chromatic and spherical-aberration behavior.

### L7 — Biconcave Negative

`nd = 1.46450, νd = 65.8.` Glass: **FK3 catalog-equivalent coefficient proxy**. `f = −126.3997 mm.`

L7 is the image-side negative component of the translating G2 group. It supplies substantial standalone negative power and, together with D1, establishes the complete negative focus group. The patent's condition (7) is tied to the shape of this image-side negative component and is explicitly associated with suppressing close-distance changes in spherical aberration and astigmatism.

### L8 — Biconcave Negative, Cemented Pair D2

`nd = 1.68893, νd = 31.1.` Glass: **S-TIM28 catalog-equivalent coefficient proxy**. `f = −150.1972 mm.`

L8 is the negative first element of the front cemented pair in G3. Its stored glass label identifies coordinate-compatible families without assigning a patent-unsupported vendor identity.

### L9 — Biconvex Positive, Cemented Pair D2

`nd = 1.69350, νd = 53.8.` Glass: **H-LaK6A catalog-equivalent coefficient proxy**. `f = +118.7248 mm.`

L9 is the positive partner of D2. The L8/L9 cemented pair has a net air-capped EFL of **+545.1590 mm**, so the pair is weakly converging despite the substantial negative standalone power of L8. This is the first of the two cemented achromatic components making up G3 in the fourth-embodiment architecture.

### L10 — Negative Meniscus, Cemented Pair D3

`nd = 1.69895, νd = 30.1.` Glass: **S-TIM35 catalog-equivalent coefficient proxy**. `f = −500.9514 mm.`

L10 is the negative meniscus at the front of the rear G3 cemented pair. The OHARA S-TIM35 catalog coordinates reproduce the patent pair to the published precision, but the data file treats this only as a coordinate equivalence rather than evidence that Nippon Kogaku used that vendor glass.

### L11 — Biconvex Positive, Cemented Pair D3

`nd = 1.69680, νd = 55.6.` Glass: **K-LaK14 catalog-equivalent coefficient proxy**. `f = +113.6216 mm.`

L11 is the final positive element. The L10/L11 cemented pair has a net air-capped EFL of **+147.5040 mm**, considerably stronger than D2. Together the two positive-net cemented pairs make G3 a converging rear group with an independently computed EFL of **+116.6669 mm**.

## Glass Identification and Selection

The data file preserves the patent's d-line refractive indices and Abbe numbers. Modern catalog names are deliberately qualified as coordinate-compatible coefficient proxies because the patent does not establish a production supplier or historical melt. Nine distinct `(nd, νd)` coordinate pairs occur in the 11 elements.

| Data-file glass annotation | nd | νd | Elements | Interpretation |
|---|---:|---:|---|---|
| J-FKH1 coefficient proxy (patent 498823) | 1.49782 | 82.3 | L1, L2, L4 | Repeated very-high-Abbe front-group glass; supplier unspecified |
| J-LAF7 coefficient proxy (patent 750352) | 1.74950 | 35.2 | L3 | High-index correction glass; supplier unspecified |
| J-LAFH3 coefficient proxy (patent 795286) | 1.79504 | 28.6 | L5 | High-index, low-Abbe member of D1 |
| KF3 coefficient proxy (patent 515546) | 1.51454 | 54.6 | L6 | Higher-Abbe member of D1 |
| FK3 coefficient proxy (patent 465658) | 1.46450 | 65.8 | L7 | High-Abbe negative focus element |
| S-TIM28 coefficient proxy (patent 689311) | 1.68893 | 31.1 | L8 | Negative member of D2 |
| H-LaK6A coefficient proxy (patent 694538) | 1.69350 | 53.8 | L9 | Positive member of D2 |
| S-TIM35 coefficient proxy (patent 699301) | 1.69895 | 30.1 | L10 | Negative member of D3 |
| K-LaK14 coefficient proxy (patent 697556) | 1.69680 | 55.6 | L11 | Positive member of D3 |

The repeated `1.49782 / 82.3` glass uses J-FKH1 only as a coordinate-compatible spectral proxy. The production lens name carries `IF-ED`, and Example 4 has exactly three occurrences of this distinct low-dispersion coordinate, at L1, L2, and L4. The diagram therefore marks those three positions as **inferred ED/APD** elements while preserving the narrower evidentiary claim: the patent does not name a production melt or publish partial-dispersion data. Coefficient-backed tracing covers all eleven elements, the production supplier remains unspecified, and no authored `nC`, `nF`, `ng`, or `dPgF` values are invented. Consequently this analysis makes no APO claim and no quantitative anomalous-dispersion claim.

The most explicit chromatic design logic published for Example 4 occurs in G2. For D1, the positive element L5 has the higher refractive index and lower Abbe number, while L6 has the lower refractive index and higher Abbe number. The patent uses the differences `na − nb` and `νb − νa` as design conditions because they alter the power and wavelength dependence of the cemented interface. The final prescription satisfies both conditions.

## Focus Mechanism

Focus status is **PUBLISHED**. The patent states that the complete negative G2 group moves **21.0 mm toward the image** from infinity to the closest published focus state. G1 and G3 remain fixed. No zoom or independently moving floating group is modeled.

The published group translation fixes the two outer G2 gaps kinematically:

| Spacing | Infinity | Closest published state | Basis |
|---|---:|---:|---|
| G1 rear → G2 front (`D8`) | 102.701 mm | 123.701 mm | Published 21.0 mm G2 translation |
| G2 rear → G3 front (source `D13`) | 28.388 mm | 7.388 mm | Published 21.0 mm G2 translation |
| Authored surface 13 → `STO` | 26.888 mm | 5.888 mm | Source `D13` after inferred stop split |
| `STO` → surface 14 | 1.500 mm | 1.500 mm | Inferred stop fixed to G3 |

The source-gap sum remains **131.089 mm** at both endpoints, so the authored variable spacings preserve rigid translation of G2.

The patent prints a closest-state magnification of **β = −0.089** for the fourth embodiment. Direct paraxial tracing of the published Example 4 prescription with the published 21.0 mm shift gives **β = −0.0864221** instead. The raw patent value is retained as a source fact; the computed value is not substituted into the source record. The same trace places the close-state object at **3738.3385 mm** from the first optical surface, or **4.0973005 m** from object to the modeled image plane. The data file uses the latter quantity for the required `closeFocusM` field; it is a computed design-conjugate distance, not a manufacturer-published minimum-focus specification.

## Aperture and Semi-Diameter Model

Example 4 does not publish an exact aperture-stop station, physical stop diameter, or semi-diameters. These quantities are therefore model geometry rather than patent facts.

The LensVisualizer model places the neutral `STO` plane **1.500 mm in front of surface 14**, fixed to G3. This splits the published `D13 = 28.388 mm` infinity gap into **26.888 mm + 1.500 mm** without changing the optical path length. At the closest focus state the same split becomes **5.888 mm + 1.500 mm**, preserving the published G2 motion.

The inferred stop semi-diameter is **29.1666672 mm**. Paraxial propagation through the front section gives an entrance-pupil semi-diameter of **75.0001679 mm**, which with EFL **300.0006716 mm** yields modeled `f/2.000000`. The stop sizing is therefore a solved model constraint tied to the patent f-number, not a measured diaphragm dimension.

The surface semi-diameters are likewise inferred model values. They were constrained by the f/2 marginal-ray envelope, the patent's plotted `y′ = 26 mm` aberration field, 135-format off-axis checks, and the current edge-thickness, rim-slope, and cross-gap criteria. A 600 dpi comparison against the exact Figure 4 optical rims retained the final envelope; the focus arrow, group braces, and leader ink were excluded from the measurement. For the final arrays, the minimum modeled element edge thickness is **+0.7264 mm** and the maximum rim-slope angle is **26.3436°**. Shared-band cross-gap checks pass at both focus endpoints. A representative 0.6-field bundle shows no cemented junction acting as a hidden aperture; the most extreme tested ray is instead vignetted in the front group.

## Chromatic Correction Strategy

The patent's chromatic strategy is integrated with spherical-aberration correction rather than expressed as an APO specification. G2 contains the object-side cemented D1 pair governed by the index and Abbe-number conditions, while G3 contains two negative-positive cemented pairs. The repeated very-high-Abbe glass in L1, L2, and L4 reduces dispersion in the strongly powered front group, but its exact vendor glass and partial-dispersion behavior remain unresolved in the data.

The patent also states that the second positive-to-negative spacing in G1 affects both coma and chromatic correction. This distributes color correction across the front group, the G2 cemented interface, and the two rear cemented pairs rather than assigning it to a single catalog-defined special glass.

Because the data file contains only `nd` and `νd` for the unresolved glasses, chromatic interpretation is limited to ordinary Abbe-based behavior and the patent's own design conditions. No secondary-spectrum magnitude, APO classification, or anomalous-partial-dispersion performance is inferred.

## Conditional Expressions

The fourth embodiment satisfies all seven patent conditions evaluated from the final prescription. For the negative G2 focal length, the table uses its magnitude because the computed group EFL is negative.

| Patent condition | Final value | Required range | Result |
|---|---:|---|---|
| `f1/f` | 0.899999 | `0.7 ≤ f1/f < 1` | Pass |
| `|f2|/f` | 0.350000 | `0.12 ≤ |f2|/f ≤ 0.48` | Pass |
| `(rb + ra)/(rb − ra)` | −1.401252 | `−1.50 ≤ … ≤ −0.50` | Pass |
| `d4/f1` | 0.025370 | `0.01 < … < 0.09` | Pass |
| `na − nb` | 0.280500 | `0.1 < … < 0.35` | Pass |
| `νb − νa` | 26.0 | `18 < …` | Pass |
| `(rd + rc)/(rd − rc)` | −0.205795 | `−0.5 < … < 0` | Pass |

The first three conditions set the principal balance of G1 and G2 power and the shape of the object-side G2 component. Condition (4) controls the L2-to-L3 spacing used for coma correction. Conditions (5) and (6) set the refractive-index and dispersion contrast within D1. Condition (7) acts on the image-side negative component L7 and is explicitly connected by the patent to changes in spherical aberration, astigmatism, and image-surface curvature during close focusing.

## Verification Summary

Independent sequential height/reduced-angle tracing and ABCD multiplication of the final TypeScript arrays agree to better than `1 × 10⁻¹²` in the checked first-order terms.

At infinity, the final arrays give:

- EFL: **300.0006716 mm**, versus the patent's 300 mm.
- BFD from surface 19: **112.2222748 mm**, versus the patent's 112.223 mm.
- First surface to modeled image plane: **358.962 mm**.
- G1 air-capped EFL: **+270.0003 mm**.
- G2 air-capped EFL: **−105.0001 mm**.
- G3 air-capped EFL: **+116.6669 mm**.
- Petzval sum, computed surface by surface as `φ/(n·n′)`: **+8.9075776 × 10⁻⁴ mm⁻¹**, corresponding under the audit sign convention `Rp = −1/P` to **−1122.6397 mm**.

At the closest published focus state, the final arrays preserve the 21.0 mm rigid G2 translation and compute **β = −0.0864221**. The difference from the patent's printed `−0.089` is retained as a documented source discrepancy rather than silently corrected.

No scaling was applied, no aspheric coefficients exist, and no filter or cover plate was removed or replaced for Example 4. The only added optical-plane record is the explicitly inferred neutral aperture stop; all semi-diameters are likewise modeling values rather than source-published dimensions.

## Sources

1. Kiyoshi Hayashi, **US 4,732,459 A, “Fast Telephoto Lens,”** Nippon Kogaku K.K., granted March 22, 1988. Example 4 prescription and focus statement; Figs. 4 and 10A–10B. https://patents.google.com/patent/US4732459A/en
2. Nikon, **AF Teleconverter TC-16 instruction manual**, lens/teleconverter compatibility table listing “Nikkor 300mm f/2S IF-ED.” https://www.nikonusa.com/pdf/manuals/archive/AF%20Teleconverter%20TC-16.pdf
3. OHARA, **S-LAM7 optical-glass catalog entry**, `nd = 1.74950`, `νd = 35.28`; used only as a class-level coordinate comparison. https://oharacorp.com/glass-type/s-lam/
4. OHARA, **S-TIM28 optical-glass catalog entry**, `nd = 1.68893`, `νd = 31.07`; used only as a coordinate-equivalent family reference. https://oharacorp.com/glass/s-tim28/
5. OHARA, **S-TIM35 optical-glass catalog entry**, `nd = 1.69895`, `νd = 30.13`; used only as a coordinate-equivalent reference. https://oharacorp.com/glass/s-tim35/
