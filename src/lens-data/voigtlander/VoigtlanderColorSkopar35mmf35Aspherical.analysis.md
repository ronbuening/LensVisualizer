# VOIGTLÄNDER COLOR-SKOPAR 35mm f/3.5 Aspherical

## Patent Reference and Design Identification

**Patent:** JP 2026-121744 A
**Application:** Japanese patent application 2025-4694
**Filed:** 2025-01-14
**Published:** 2026-07-27
**Inventor:** 三島 望
**Applicant:** Cosina Co., Ltd.
**Title:** 光学レンズ系 (*Optical Lens System*)
**Embodiment analyzed:** Example 3 / 第3実施形態

The prescription transcribes Example 3 of JP 2026-121744 A at the patent's original scale. The patent does not identify a commercial product, so the association with the production VOIGTLÄNDER COLOR-SKOPAR 35mm f/3.5 ASPHERICAL remains a production-correlation inference rather than a manufacturer-confirmed statement.

The identification rests on several convergent points:

1. Example 3 has a computed effective focal length of 35.741015 mm and a published f-number of 3.58, closely corresponding to the marketed 35 mm f/3.5 designation.
2. The patent gives a 30.75° half field, or 61.50° full field; Cosina specifies 61.6°.
3. Both the prescription and production specification use six elements in four groups.
4. The prescription's final element has two aspherical surfaces; Cosina specifies one double-sided aspherical element.
5. The patent prescribes unit focusing by translating the complete optical system. Cosina specifies manual focusing and 0.7 m rangefinder coupling, but does not publish an internal-focus mechanism that would contradict the patent architecture.
6. The patent application was filed on 2025-01-14, one month before Cosina announced the lens on 2025-02-14. The production release followed on 2025-03-27.

The marketed focal length and aperture remain separate from the design quantities. The data file therefore stores 35 mm and f/3.5 as product specifications, while using 35.741015 mm and f/3.58 for the modeled optical system and pupil geometry.

## Optical Architecture

Example 3 is a compact, all-refractive, rectilinear wide-angle prime. It contains six elements in four air-spaced groups, arranged from object to image as a positive cemented doublet, the aperture stop, a negative cemented doublet, a positive singlet, and a negative aspherical meniscus. In the patent's grouping, these are G1, STO, G2a, and G2b; G2b contains the final two singlets.

G1 is the positive cemented L9 doublet. Its computed cemented-group equivalent focal length in air is +42.12674 mm. G2a is the cemented L10 doublet and remains net negative, with a cemented-group equivalent focal length in air of −73.90504 mm. G2b combines the positive L11 with the negative L12 at their published separation and remains net positive, with a subsystem equivalent focal length in air of +51.58930 mm. These group and subsystem powers are distinct from the standalone focal lengths of the individual elements and from their behavior inside the complete six-element system.

The design is neither telephoto nor retrofocus under the stated TL/EFL and BFD/EFL criteria. Its infinity first-surface-to-image length is 40.03 mm, giving TL/EFL = 1.1200 rather than a value below unity. Its infinity back focal distance is 15.1083 mm, substantially shorter than the 35.7410 mm EFL rather than longer than it.

The principal architectural feature is the strong rear correction concentrated in L11 and the double-sided aspherical L12. The patent states that the image-side negative meniscus is used to correct coma and astigmatism while retaining a short overall system (¶0075, ¶0081). The optical section in Figure 5 shows this rear meniscus immediately ahead of the rear air space to the image plane.

## Element-by-Element Analysis

### G1 — Cemented L9 Positive Doublet

#### L9f — Biconvex Positive

**nd = 1.91082, νd = 35.25. Glass: TAFD35 catalog equivalent. Standalone f = +13.799161 mm.**

L9f supplies the dominant positive power at the front of the system. HOYA TAFD35 matches the patent's nd and νd exactly, and its catalog ΔPgF differs from the patent's rounded value by 0.0003. The model therefore uses the catalog's complete coefficient-backed curve while retaining the patent's nd, νd, and dPgF metadata. This is a catalog-equivalent optical match, not a claim about the production supplier.

The element is not a +13.8 mm lens in system use. Its strong standalone positive power is moderated by the cemented negative L9r, producing the much weaker +42.12674 mm equivalent focal length of the complete L9 doublet. This distinction is important because the doublet, rather than either element in isolation, constitutes G1.

#### L9r — Biconcave Negative

**nd = 1.80809, νd = 22.76. Glass: FD225 catalog equivalent. Standalone f = −17.571227 mm.**

L9r is cemented directly to L9f at surface 2. HOYA FD225 is an exact nd/νd match and closely matches the patent's rounded positive ΔPgF. Its official formula-3 polynomial, added to the project catalog from HOYA's 2026-07-07 data, reproduces the published C-, d-, F-, and g-line indices. The model uses that complete curve as a catalog equivalent without asserting that HOYA supplied the production element.

The negative member reduces the net power of the front pair and supplies an opposing dispersion contribution. The patent does not assign a named aberration function to L9r individually; its role as an achromatizing and power-balancing partner is a modeling interpretation of the cemented pair and its verified paraxial powers.

### G2a — Cemented L10 Negative Doublet

#### L10f — Biconcave Negative

**nd = 1.61340, νd = 44.27. Glass: Unmatched (613443 negative anomalous-dispersion class; closest S-NBM51). Standalone f = −17.457979 mm.**

L10f begins the negative G2a sub-group immediately behind the stop. The patent specifically constrains this member to nd < 1.62 and ΔPgF ≤ −0.005 (claim 5; ¶0086). The stored values, 1.61340 and −0.005, meet those limits at the patent's stated precision.

No public catalog glass matches all three stored quantities exactly. OHARA S-NBM51 is the closest six-digit and optical-class candidate, but its residual partial-dispersion difference is too large to justify an exact vendor identity. The data file therefore retains an explicit `Unmatched` class label and does not invent C-, F-, or g-line indices.

#### L10r — Biconvex Positive

**nd = 1.88300, νd = 40.81. Glass: TAFD30 catalog equivalent. Standalone f = +24.261811 mm.**

L10r is the positive cemented partner at surface 6. HOYA TAFD30 matches nd and νd at the patent's precision and closely matches its rounded ΔPgF. The model therefore uses the complete catalog curve as an optical equivalent while leaving the production supplier unspecified.

Although L10r is positive by itself, the complete cemented L10 subgroup is negative when evaluated in air with its published thicknesses. Its verified equivalent focal length is −73.90504 mm, agreeing with the patent's f2a = −73.89 mm. The pair therefore provides a relatively weak negative redistribution of power behind the stop rather than functioning as a standalone positive collector.

### G2b — Positive Rear Sub-Group

#### L11 — Biconvex Positive

**nd = 1.49700, νd = 81.61. Glass: FCD1 catalog equivalent. Standalone f = +31.911859 mm.**

L11 is the strongest positive element in G2b and directly reproduces the patent's f2bp = 31.91 mm. Its very high Abbe number and positive ΔPgF are central to the prescription's dispersion strategy. HOYA FCD1 matches nd and νd exactly and matches the rounded patent ΔPgF within 0.0004, so the model uses its complete catalog curve as an optical equivalent while leaving the production supplier unspecified.

The patent requires the positive G2b glass to have ΔPgF > +0.015 (claim 6). L11's value is +0.037. This provides a partial-dispersion behavior opposite in sign to the negative L10f member and supports secondary-spectrum control without justifying an apochromatic classification.

#### L12 — Negative Meniscus, Double-Sided Aspherical

**nd = 1.51633, νd = 64.06. Glass: S-BSL7 / K-BK7 catalog-equivalent borosilicate crown class. Standalone f = −66.426138 mm.**

L12 is a negative meniscus with both surfaces aspherical. Its object-side surface is concave toward the object, as required by the patent (¶0075). The element is placed close to the image plane, where its negative power and high-order surface departures can alter off-axis ray geometry with comparatively modest paraxial power.

The patent explicitly associates this element with coma and astigmatism correction (¶0075, ¶0081). L12 does not make the isolated G2b subsystem negative: L11 and L12 together, at their published separation and with air on both sides, have a verified equivalent focal length of +51.58930 mm. The standalone −66.426138 mm value, the positive G2b subsystem result, and L12's behavior inside the complete lens describe different optical quantities.

The nd and six-digit 516641 position correspond to a BK7-family borosilicate crown, but the patent's rounded ΔPgF = 0.000 does not establish a unique vendor glass. The data file therefore names the compatible S-BSL7 / K-BK7 family, leaves the production supplier unspecified, and allows deterministic catalog resolution without presenting it as a unique identification.

## Glass Identification and Selection

The final data file preserves the patent's nd, νd, and rounded ΔPgF values on all six elements. It does not duplicate catalog-derived C-, F-, and g-line indices: compatible labels resolve to complete catalog curves, while the unmatched L10f retains the patent's dPgF-aware fallback. Every named match is an optical equivalent rather than a production-supplier claim.

| Element | Stored glass label | nd | νd | ΔPgF | Identification status |
|---|---|---:|---:|---:|---|
| L9f | TAFD35 catalog equivalent | 1.91082 | 35.25 | −0.003 | Complete HOYA catalog curve; supplier unspecified |
| L9r | FD225 catalog equivalent | 1.80809 | 22.76 | +0.021 | Complete HOYA catalog curve; supplier unspecified |
| L10f | Unmatched 613443 negative anomalous-dispersion class | 1.61340 | 44.27 | −0.005 | Closest to S-NBM51; no exact identity asserted |
| L10r | TAFD30 catalog equivalent | 1.88300 | 40.81 | −0.009 | Complete HOYA catalog curve; supplier unspecified |
| L11 | FCD1 catalog equivalent | 1.49700 | 81.61 | +0.037 | Complete HOYA catalog curve; supplier unspecified |
| L12 | S-BSL7 / K-BK7 catalog-equivalent class | 1.51633 | 64.06 | 0.000 | Complete catalog curve; vendor not uniquely identified |

The palette combines dense positive glasses, high-index flints, a negative anomalous-partial-dispersion class, and a high-Abbe positive crown glass. The strongest verified chromatic pairing is between L10f at ΔPgF = −0.005 and L11 at ΔPgF = +0.037. The patent singles out those two signs in its conditions, while the front cemented pair provides additional dispersion balancing. These data support discussion of anomalous partial dispersion, but not an APO designation.

## Focus Mechanism

The patent states that all lens elements translate together during focusing (claim 8; ¶0019). Internal separations and the stop position therefore remain fixed. The only variable distance in the data file is the final air space from surface 11A to the image plane.

| State | Object plane to surface 1 | Surface 11A to image plane | Status |
|---|---:|---:|---|
| Infinity | ∞ | 15.110000 mm | Patent-published base state |
| Production minimum focus | 657.913289 mm | 17.166711 mm | Constrained reconstruction for 0.7 m object-to-image distance |
| Patent close row | 450.000000 mm | 18.20 mm published; 18.203778 mm recomputed | Published source state, retained in audit rather than used as UI endpoint |

The production model interprets Cosina's 0.7 m minimum focusing distance in the conventional image-plane-referenced sense. The patent's D0 value is instead measured from the object plane to the first lens surface. The production endpoint in the data file is consequently a `CONSTRAINED_RECONSTRUCTION`, solved under the patent's unit-focus mechanism rather than copied from a patent row.

At 0.7 m, the stored image-space spacing changes by 2.056711 mm from the patent-published 15.11 mm base value to 17.166711 mm. Relative to the independently computed infinity BFD of 15.108305 mm, the paraxial conjugate shift is 2.058407 mm. The paraxial magnification is −0.05759. These are computed model results, not manufacturer specifications. The patent's separate 450 mm D0 row gives a published 3.09 mm spacing increase and a computed magnification of −0.08661.

## Aspherical Surfaces

Surfaces 10A and 11A are the two faces of L12. The patent uses the standard conic-constant form

$$
Z(h)=\frac{C h^2}{1+\sqrt{1-(1+K)C^2h^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}+A_{12}h^{12},
$$

with $C=1/R$. Its tabulated K is already the standard convention, so K = 0 denotes a spherical base and no conversion is applied. No scaling was used; the coefficients therefore remain at patent scale. The patent publishes no term above A12; all higher polynomial orders remain zero in the model.

| Surface | K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|
| 10A | 0 | −5.5781E−04 | +2.2937E−06 | −6.1771E−08 | +1.0322E−09 | −4.0737E−12 |
| 11A | 0 | −4.1509E−04 | +2.7671E−06 | −2.4381E−08 | +2.5192E−10 | −8.7175E−13 |

The patent defines Sag2b on surface 10A. Solving the complete asphere equation for |Z| = 3.44 mm gives a verified effective semi-height of 8.229002 mm, which is used as the surface semi-diameter. At that height, the polynomial departure from the spherical base is −2.067541 mm and the element retains 3.918655 mm of common-band edge thickness.

Surface 11A uses an inferred and ray-validated semi-diameter of 10.15 mm. At that modeled height, its total sag is −2.761540 mm, its spherical-base sag is −0.516446 mm, and its polynomial departure is −2.245094 mm. On both surfaces the negative A4 term drives the peripheral sag farther in the negative axial direction than the spherical base; the higher orders temper that departure across the usable aperture.

## Chromatic Correction Strategy

The selected embodiment uses both index/Abbe pairing in cemented doublets and sign-opposed anomalous partial dispersion behind the stop. L9f and L9r form a dense positive/negative front pair. L10f and L10r form a net-negative pair, while L11 supplies high-Abbe positive power before the final aspherical meniscus.

The patent's most explicit chromatic controls are the L10f limits nd < 1.62 and ΔPgF ≤ −0.005 and the L11 limit ΔPgF > +0.015. The selected values are 1.61340, −0.005, and +0.037. This opposition allows the designer to alter secondary color independently of the ordinary νd balance. Catalog coefficients now provide full curves for L9f, L9r, L10r, L11, and L12; only L10f falls back to the patent's nd/νd/dPgF description.

Cosina markets the production lens as using three anomalous-partial-dispersion glass elements. That product statement is not used to relabel individual patent elements beyond what the patent and catalog audit support.

## Conditional Expressions

The patent gives nine design conditions. Example 3 satisfies conditions 2–9 at the stated source precision. Condition 1 contains an internal reference-plane contradiction in Table 9.

| Condition | Example 3 value | Assessment |
|---|---:|---|
| BF/TLo > 0.8 | Printed: 18.20/21.83 = 0.8337 | Passes only in the internally mixed Table 9 row |
| TL/f ≤ 1.15 | 40.03/35.74 = 1.1200 | Pass |
| ω > 30.5° | 30.75° | Pass |
| f2a/f2bp ≥ −2.4 | −73.89/31.91 = −2.3156 | Pass |
| Sag2b/TL ≥ 0.08 | 3.44/40.03 = 0.08594 | Pass |
| nd2am < 1.62 | 1.61340 | Pass |
| ΔPgF2am ≤ −0.005 | −0.005 | Pass at stated precision |
| ΔPgF2bp > +0.015 | +0.037 | Pass |
| At least one positive lens nd > 1.88 | L9f = 1.91082; L10r = 1.88300 | Pass |

The prescription spacings establish a physical surface-1-to-surface-11 track of 24.92 mm. Table 9's TLo = 21.83 mm is exactly 40.03 mm minus the close-state BF of 18.20 mm, thereby combining the infinity total length with a close-focus back focus. With consistent planes, BF/track is 0.6063 at infinity and approximately 0.7305 at the patent's 450 mm state. The data file preserves the physical prescription and does not alter any spacing to force condition 1 to pass.

## Modeling Disclosures

The aperture-stop axial location is patent-published. Its physical semi-diameter, 3.961126 mm, is inferred by launching the f/3.58 entrance-pupil marginal ray through the exact front group to the stop. It is not a tabulated patent dimension.

The patent does not publish ordinary clear semi-diameters. Surface 10A is derived from the patent-defined Sag2b. Figure 5 establishes the relative element silhouette, while dense exact marginal- and chief-ray envelopes at infinity and the reconstructed 0.7 m state establish safe lower bounds for the other surfaces. The rounded SDs were then checked for edge thickness, actual rim slope, cross-gap, off-axis containment, and rendering. Surface 10A remains the modeled limiting rear aperture; preceding surfaces do not introduce an artificial earlier stop.

No sensor cover glass, protective filter, inactive dummy plane, flare cutter, or mechanical component is included. No omitted plate required an air-equivalent spacing correction. No uniform scaling was applied, and the asphere coefficients were not transformed.

The production 0.7 m focus state is a disclosed constrained reconstruction. The patent's own infinity and 450 mm rows remain source facts, while the production endpoint is a solved model state. The Table 9 TLo/BF inconsistency is retained as a source error rather than silently reconciled.

## Verification Summary

The final TypeScript arrays reproduce the patent's principal paraxial quantities within source precision:

| Quantity | Verified result | Published or stored comparison |
|---|---:|---:|
| Effective focal length | 35.741015 mm | 35.74 mm |
| Infinity back focal distance | 15.108305 mm | 15.11 mm |
| Surface-1-to-surface-11 track | 24.920000 mm | Direct spacing sum |
| Infinity first-surface-to-image length | 40.030000 mm | 40.03 mm |
| Patent D0 = 450 mm image distance | 18.203778 mm | 18.20 mm |
| Modeled f-number | 3.580000 | 3.58 |
| Petzval sum | +0.00503516 mm⁻¹ | Surface-by-surface φ/(n·n′) computation |

Sequential height/reduced-angle basis tracing and independent ABCD composition produce the same system matrix, with determinant 1.000000 in air. All common-band element edge thicknesses remain positive. The largest verified rim slope is 48.1533° at surface 10A, and the final model passes the documented local cross-gap, containment, and zero-hidden-trim checks.

## Sources and References

- Japan Patent Office, JP 2026-121744 A, *光学レンズ系*, Example 3, published 2026-07-27.
- Cosina, “COLOR-SKOPAR 35mm F3.5 Aspherical,” official product page: <https://www.cosina.co.jp/voigtlander/en/vm-mount/color-skopar-35mm-f3-5-aspherical/>.
- Cosina, *COLOR-SKOPAR 35mm F3.5 Aspherical VM Instruction Manual*, version 1.0, March 2025: <https://www.cosina.co.jp/wp/wp-content/uploads/2025/03/VM-35_35-ENG-V1_0.pdf>.
- Cosina, product announcement, 2025-02-14: <https://www.cosina.co.jp/news/フォクトレンダーcolor-skopar-35mm-f3-5-aspherical-vm-発売/>.
- Cosina, release-date notice, 2025-03-10: <https://www.cosina.co.jp/news/フォクトレンダーcolor-skopar-35mm-f3-5-aspherical-vm-発売日のお知らせ/>.
- HOYA, *Optical Glass Data*, official workbook dated 2026-06-01, and official obsolete-inclusive Zemax catalog dated 2026-07-07.
- OHARA, SCHOTT, HIKARI, CDGM, and Sumita official optical-glass catalogs and data sheets.
