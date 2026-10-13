# VILTROX AF 75mm f/1.2 PRO — Optical Analysis

## Patent Reference and Design Identification

**Patent:** CN 114755806 A\
**Application Number:** 202210650562.5\
**Filed:** 2022-06-10\
**Published:** 2022-07-15\
**Inventor:** 刘瑞军\
**Applicant:** 深圳市雷影光电科技有限公司\
**Title:** 一种大光圈长焦镜头 (large-aperture long-focus lens)\
**Embodiment analyzed:** Example 1
**Focus model:** `CONSTRAINED_RECONSTRUCTION`

**Source limitation:** this reconstruction does not reproduce the complete patent silhouette. Table 1 and Figure 1 disagree on several rear elements, most visibly L16. The later grant, CN 114755806 B, repeats the same Table 1 values (PDF p. 7). The diagram retains those numerical surfaces; the inferred apertures have been revised to remove unsupported rim extensions. This is not a verified production prescription.

The modeled prescription is Example 1 of CN 114755806 A. The correlation to the production VILTROX AF 75mm f/1.2 PRO is a source-based identification rather than a manufacturer statement that the patent is the production prescription. Several independent features converge on the same example:

1. Viltrox specifies a 75 mm APS-C lens with 16 elements in 11 groups; Example 1 contains 16 elements in 11 air-separated groups and publishes a 75.50 mm infinity focal length.
2. Viltrox specifies a 21.35° viewing angle; Example 1 publishes a 10.70° half-field, or 21.40° full field.
3. The manufacturer construction graphic marks four high-refractive-index positions at L1, L6, L14, and L16. Those positions correspond in Example 1 to the unusually high index coordinates 1.92/20.88, 2.00/29.13, 2.00/29.13, and 1.95/17.98.
4. The same construction graphic marks three ED positions at L2, L4, and L10. Example 1 assigns all three the same high-Abbe coordinate, nd = 1.59 and νd = 68.62. This is positional correlation only; it does not identify a particular ED glass melt.
5. The cemented-pair pattern agrees: L2+L3, L4+L5, L10+L11, L12+L13, and L14+L15.
6. Both sources describe internal focusing, and the patent specifically moves only L9 while the fixed groups on either side remain stationary (¶0012).

The prescription is not a literal transcription of the printed Example-1 table because that table is internally inconsistent. The raw surface-10 radius is +26.573 mm. Used as printed, it makes L6 a negative standalone element and drives the complete active system to about 63.50 mm EFL, conflicting with both the patent's description of L6 as positive and the published 75.50 mm focal length. The model therefore uses a narrowly constrained source-error reconstruction: surface 10 is interpreted as +36.573 mm before scaling. This one-digit correction makes L6 weakly positive and lies between the corresponding Example-2 and Example-4 values, +35.273 and +37.684 mm. No additional radii are fitted to force the remaining patent conditions.

With the surface-10 correction and the printed two-decimal refractive indices, the system computes to 76.089020 mm rather than 75.50 mm. Because the patent indices are rounded to two decimals and the published 75.50 mm value lies within their rounding sensitivity envelope, all active dimensions are uniformly normalized by

$$
s = 0.9922588071791335.
$$

Radii, center thicknesses, air spaces, focus spacings, and the image-plane coordinate are scaled by this factor; refractive indices and Abbe numbers are unchanged. The design is entirely spherical, so no aspheric-coefficient transformation is applicable.

The patent also places a rear auxiliary glass plate GL between L16 and the image plane and states that it is plane-parallel and may be transformed to air (¶0017), while the numerical table gives its front surface a finite radius of +180.619 mm. The ordinary sequential model omits this contradictory auxiliary plate and the inactive air-to-air bookkeeping plane that follows it. The infinity image plane is instead placed at the independently solved paraxial focus, 7.420455809 mm behind normalized surface 28.

## Optical Architecture

The lens is best described by its verified power distribution rather than by forcing it into a classical named form. It consists of a positive fixed front group G1, the aperture stop, a single negative moving focus element L9, and a positive fixed rear group G2. The patent describes the subject with the Chinese long-focus term 长焦, but the normalized model has a first-surface-to-image track of 99.125015 mm and an EFL of 75.500000 mm, giving TL/EFL = 1.312914. Because the physical track exceeds the EFL, no shortened-track classification is applied.

The system contains 16 elements in 11 groups and five cemented doublets. G1 contains L1 through L8 and has a computed EFL of +68.791786 mm. L9 is a standalone negative meniscus with EFL -57.103339 mm. G2 contains L10 through L16 and has a computed EFL of +28.050618 mm. These are group or standalone powers; they should not be confused with the complete lens's 75.50 mm system focal length or with the in-situ contribution of an element embedded in the complete train.

The aperture stop lies between L8 and L9. The design f-number is F/1.27 because the rendered Example-1 aberration plots are explicitly labeled F1.27, even though ¶0019 and the production lens name use F1.2. The normalized model therefore keeps F/1.27 as the optical design value and F/1.2 as the marketed aperture. The patent does not publish the physical stop diameter. The authored stop semi-diameter of 11.722108 mm is a paraxial reference for 75.50 mm at F/1.27, not a source dimension. The runtime instead calibrates the physical iris using an exact marginal ray; its infinity semi-diameter is approximately 13.246 mm. The UI's estimated pupil diameter is paraxial and differs from the exact target pupil diameter.

The refracting-surface semi-diameters are inferred from the optical rims of Figure 1 at 600 dpi, using an approximate 35.80 µm/pixel scale in the normalized model. Common rims replace the unsupported pointed extensions on L2 and L4. S20/S21 are limited to 11.0 mm by the table-derived gap geometry; the other rims follow the figure within measurement precision. The figure and numerical rear-group shapes disagree, so this is an aperture estimate, not a complete geometric fit. Rays may clip at these finite apertures; passage of more rays is not evidence for enlarging an optical rim.

The central architectural choice is the isolated L9 focus element. The patent emphasizes that a single lightweight focus lens reduces the driven mass (¶0009). In the normalized model, the fixed front and rear groups remain stationary while L9 translates imageward, so focus is obtained without moving the large-diameter front assembly.

## Element-by-Element Analysis

### L1 — Positive Meniscus

**nd = 1.92000, νd = 20.88. Glass: N-SF66 (catalog-equivalent spectral proxy; supplier unresolved). Standalone f = +90.967019 mm.**

L1 is the large front positive meniscus and the first of the four manufacturer-correlated high-index positions. Its high index permits substantial refraction at the entrance of an F/1.27 design without assigning the entire front-group power to extreme curvature. It begins G1 and carries a large modeled clear aperture, consistent with the manufacturer section drawing.

### D1 — L2 + L3 Cemented Pair

**L2: nd = 1.59000, νd = 68.62. Glass: FCD505 (catalog-equivalent spectral proxy; supplier unresolved). Standalone f = +98.516654 mm.**\
**L3: nd = 1.67000, νd = 32.17. Glass: H-ZF2 (catalog-equivalent spectral proxy; supplier unresolved). Standalone f = -74.121684 mm.**

L2 and L3 form the first cemented pair identified by the patent (¶0012). The pair combines a high-Abbe positive meniscus with a substantially lower-Abbe negative meniscus. As an isolated cemented group it is weakly negative, with net EFL -396.551440 mm. The large dispersion contrast gives the front group chromatic balancing freedom without requiring this doublet to carry large net system power.

The production construction graphic marks L2 as an ED position. The patent coordinate νd = 68.62 is consistent with a low-dispersion role, but the rounded nd/νd pair is not sufficient to identify a vendor glass or its partial-dispersion behavior.

### D2 — L4 + L5 Cemented Pair

**L4: nd = 1.59000, νd = 68.62. Glass: FCD505 (catalog-equivalent spectral proxy; supplier unresolved). Standalone f = +43.514390 mm.**\
**L5: nd = 1.85000, νd = 23.78. Glass: Unmatched (847238 class; patent nd=1.85, νd=23.78). Standalone f = -44.763587 mm.**

L4 is a strong positive biconvex element cemented to the strong negative L5. Their individual powers nearly oppose one another; the complete cemented pair has a comparatively weak positive net EFL of +284.729989 mm. This strong internal cancellation is optically different from either element's standalone focal length and provides curvature and dispersion degrees of freedom while contributing only modest net positive group power.

L4 is the second manufacturer-correlated ED position. L5 provides the low-Abbe, high-index negative partner. The patent's condition on the average Abbe numbers of positive and negative G1 elements is consistent with this repeated high-Abbe-positive / lower-Abbe-negative pairing strategy.

### L6 — Weak Positive Meniscus

**nd = 2.00000, νd = 29.13. Glass: TAFD55 (catalog-equivalent spectral proxy; supplier unresolved). Standalone f = +1802.789171 mm.**

L6 is the element most directly affected by the source correction. With the printed +26.573 mm rear radius it becomes negative; with the reconstructed +36.573 mm pre-scale radius it becomes the weak positive meniscus described by the patent. After normalization its rear surface is +36.289881 mm.

Its standalone focal length is extremely long relative to the system, so L6 is not a major source of net paraxial power. Its importance is instead in the high-index surface shaping available within G1. The manufacturer graphic independently places a high-index element at this ordinal position.

### L7 — Negative Meniscus

**nd = 1.70000, νd = 30.05. Glass: E-FD15 (catalog-equivalent spectral proxy; supplier unresolved). Standalone f = -57.491450 mm.**

L7 is a negative meniscus immediately ahead of the final positive element of G1. It contributes substantial negative standalone power before the stop, counterbalancing the surrounding positive members and participating in the front group's net +68.791786 mm power.

### L8 — Plano-Convex Positive

**nd = 1.83000, νd = 42.72. Glass: Unmatched (835427 class; patent nd=1.83, νd=42.72). Standalone f = +55.284357 mm.**

L8 terminates the fixed front group directly before the stop. Its planar rear face simplifies the final refracting boundary of G1, while its positive standalone power restores convergence after L7. The aperture stop follows at a normalized 1.984517 mm air spacing.

### L9 — Negative Internal-Focus Meniscus

**nd = 1.52000, νd = 64.20. Glass: Unmatched (517642 class; patent nd=1.52, νd=64.20). Standalone f = -57.103339 mm.**

L9 is the sole moving focus element. It is a thin negative meniscus placed between the stop and G2. The patent explicitly states that L9 moves toward the image side during focusing while G1 and G2 remain fixed (¶0005, ¶0012).

Its verified power ratio is EFL2/EFL = -0.756336 at infinity, inside the patent's stated -0.9 to -0.5 interval. This moderate negative power provides sufficient focus leverage for a single-element internal-focus mechanism without requiring movement of the large front group.

### D3 — L10 + L11 Cemented Pair

**L10: nd = 1.59000, νd = 68.62. Glass: FCD505 (catalog-equivalent spectral proxy; supplier unresolved). Standalone f = +39.934554 mm.**\
**L11: nd = 1.85000, νd = 23.78. Glass: Unmatched (847238 class; patent nd=1.85, νd=23.78). Standalone f = -27.008977 mm.**

L10 and L11 form the first cemented pair of G2. The positive L10 is the third manufacturer-correlated ED position, while L11 is a dense, low-Abbe negative partner. Their complete cemented group is net negative, EFL -94.822300 mm, despite the strong positive standalone power of L10.

This distinction matters because a cemented group's net power includes both refracting boundaries and the shared glass-to-glass interface. It cannot be inferred by adding the reciprocal standalone focal lengths of the two elements as though each were surrounded by air.

### D4 — L12 + L13 Cemented Pair

**L12: nd = 1.83000, νd = 42.72. Glass: Unmatched (835427 class; patent nd=1.83, νd=42.72). Standalone f = -50.221446 mm.**\
**L13: nd = 1.67000, νd = 32.17. Glass: H-ZF2 (catalog-equivalent spectral proxy; supplier unresolved). Standalone f = +36.199428 mm.**

The normalized prescription makes L12 a plano-concave negative element and L13 a biconvex positive element. Their cemented net EFL is +116.304083 mm.

These standalone signs conflict with the patent's generic prose description, which calls L12 positive and L13 negative. The numerical surface geometry is retained because the same rear-group sign pattern recurs elsewhere in the patent family and no unique source-defensible radius correction follows from the prose alone. The analysis therefore follows the validated numerical model and records the textual contradiction rather than silently changing the prescription.

### D5 — L14 + L15 Cemented Pair

**L14: nd = 2.00000, νd = 29.13. Glass: TAFD55 (catalog-equivalent spectral proxy; supplier unresolved). Standalone f = +138.399992 mm.**\
**L15: nd = 1.62000, νd = 36.30. Glass: E-F2 (catalog-equivalent spectral proxy; supplier unresolved). Standalone f = +37.372444 mm.**

D5 is a strong positive cemented group with net EFL +30.056670 mm. L14 occupies the third of the four manufacturer-correlated high-index positions. L15 is also positive in the validated numerical model, although the patent's generic element-sign prose calls it negative.

The discrepancy is retained explicitly. The cemented group itself is strongly positive, so its in-situ contribution to G2 should be discussed at the group level rather than by forcing the source's alternating-sign prose onto the numerical surfaces.

### L16 — Positive Meniscus

**nd = 1.95000, νd = 17.98. Glass: Unmatched (946180 class; patent nd=1.95, νd=17.98). Standalone f = +347.725867 mm.**

L16 is explicitly present in Figure 1 and ¶0012; it is distinct from the auxiliary plate GL described in ¶0017. Table 1 assigns it surfaces 27–28: R = +34.056/+37.660 mm and center thickness 0.51 mm before normalization. Those values produce a very thin positive meniscus, with normalized center thickness 0.506052 mm and edge thickness about 0.230334 mm at the revised 13.2 mm semi-diameter.

Figure 1 instead shows a substantially thicker element with a nearly flat rear face. That discrepancy cannot be corrected by changing SD. The tabulated radii and thickness remain in the model; L16 therefore still looks thin on the site. It is not an extra surface or the omitted GL plate. Its standalone power is modest, and the final normalized surface-to-image distance remains 7.420456 mm.

## Glass Identification and Selection

The patent publishes only d-line refractive indices and Abbe numbers. Catalog curves below are coordinate-compatible spectral proxies, not identifications of the production supplier or melt. The authored patent indices remain unchanged; no catalog-derived `nC`, `nF`, `ng`, or `dPgF` values are stored as if they were measured source data. The runtime compatibility guard checks the evaluated catalog index within ±0.003 and Abbe number within ±2.

| Element | Patent nd / νd | Runtime catalog curve |
| --- | --- | --- |
| L1 | 1.92 / 20.88 | N-SF66 |
| L2 | 1.59 / 68.62 | FCD505 |
| L3 | 1.67 / 32.17 | H-ZF2 |
| L4 | 1.59 / 68.62 | FCD505 |
| L5 | 1.85 / 23.78 | Unmatched; patent Abbe fallback |
| L6 | 2 / 29.13 | TAFD55 |
| L7 | 1.7 / 30.05 | E-FD15 |
| L8 | 1.83 / 42.72 | Unmatched; patent Abbe fallback |
| L9 | 1.52 / 64.2 | Unmatched; patent Abbe fallback |
| L10 | 1.59 / 68.62 | FCD505 |
| L11 | 1.85 / 23.78 | Unmatched; patent Abbe fallback |
| L12 | 1.83 / 42.72 | Unmatched; patent Abbe fallback |
| L13 | 1.67 / 32.17 | H-ZF2 |
| L14 | 2 / 29.13 | TAFD55 |
| L15 | 1.62 / 36.3 | E-F2 |
| L16 | 1.95 / 17.98 | Unmatched; patent Abbe fallback |

10/16 elements resolve to catalog dispersion. Explicitly unmatched elements retain the patent-derived Abbe fallback. No APO or patent-backed anomalous-partial-dispersion claim follows from the proxy assignments.

The 847238, 835427, 517642, and 946180 candidate families exceed the index guard against the rounded source values; L5/L11, L8/L12, L9, and L16 remain unmatched. The published rounded indices are not replaced by hidden catalog digits.

## Focus Mechanism

The source focus architecture is unusually simple. The patent divides the lens into fixed G1, moving negative L9, and fixed G2, with the stop immediately ahead of L9. During closer focusing, L9 moves toward the image plane while the adjacent air gaps change in opposite directions so their sum remains constant (¶0005, ¶0012).

The printed Example-1 focus table gives infinity D1/D2 = 2.84/12.89 mm and a nominal 0.7 m row of 13.01/2.72 mm, conserving the total gap exactly. After the surface-10 correction and dimensional normalization, however, the printed 0.7 m state no longer images at the stated distance or reproduces the stated 77.29 mm focal length. The model therefore preserves the published mechanism but reconstructs the close endpoint to Viltrox's 0.88 m production minimum focus distance.

| Focus state | D1: STO→L9 (mm) | D2: L9→G2 (mm) | D1 + D2 (mm) | Model result |
|---|---:|---:|---:|---|
| Infinity | 2.818015012 | 12.790216025 | 15.608231037 | EFL 75.500000 mm |
| 0.88 m reconstructed endpoint | 13.695167378 | 1.913063659 | 15.608231037 | EFL 81.455232 mm; magnification 0.095077 |

The reconstructed L9 travel is 10.877152 mm imageward. The finite-object solve reproduces an image-plane-referenced object-to-image distance of 880.000 mm with a paraxial magnification magnitude of 0.095077, close to the manufacturer's rounded 0.1× specification. The endpoint spacings are therefore a constrained model reconstruction, not values printed by the patent.

## Chromatic Correction Strategy

The chromatic architecture is visible even though the specific glass melts are unresolved. G1 repeatedly combines higher-Abbe positive members with lower-Abbe negative members, most clearly in D1 and D2. The patent formalizes this with condition (3), which constrains the difference between the average Abbe number of positive G1 lenses and the average Abbe number of negative G1 lenses to 16–30 (¶0006). The normalized data gives 17.327333, inside that range and close to the patent's tabulated 17.28.

The production diagram's three ED positions coincide with L2, L4, and L10, all at νd = 68.62 in the patent data. The four high-index positions coincide with L1, L6, L14, and L16. This creates a consistent positional story: high-Abbe positive elements are paired against denser lower-Abbe neighbors, while very high-index elements are used where compact curvature and ray bending are useful. That interpretation is supported by the coordinates and topology, but no conclusion about anomalous partial dispersion follows from them.

## Conditional Expressions

CN 114755806 A states five principal first-order or glass-distribution conditions. The table below separates the patent's Example-1 summary values from the recomputed normalized model.

| Condition | Patent Example 1 | Recomputed model | Assessment |
|---|---:|---:|---|
| 0.16 < BFL/OTL < 0.18 | 0.170 | 0.074860 | Not reproduced by the infinity-focused normalized model |
| 0.7 < EFL1/EFL < 1.1 | 1.03 | 0.911149 | Inside claimed interval |
| 16 ≤ Vd1p − Vd1n ≤ 30 | 17.28 | 17.327333 | Inside claimed interval; rounding-consistent |
| -0.9 ≤ EFL2/EFL ≤ -0.5 | -0.74 | -0.756336 | Inside claimed interval |
| 1.6 < EFL1/EFL3 < 1.9 | 1.88 | 2.452416 | Not reproduced |

Condition (1) is entangled with the patent's contradictory rear GL geometry. If the source's stated plane-parallel GL is converted to its scaled air-equivalent rear spacing, the corresponding BFL/OTL ratio is about 0.165516 and lies inside the patent interval, but that plane does not coincide with the paraxial infinity image plane of the corrected normalized active optics. The model therefore uses the solved image plane and leaves condition (1) unresolved.

Condition (5) also remains unresolved. No unique small change to G2 is sufficiently constrained by the source to justify further fitting, so the model does not alter additional radii merely to reproduce the table value.

## Verification Summary

The optical quantities below are recomputed from the final TypeScript surface arrays rather than copied from the extraction notes.

| Quantity | Verified normalized model |
|---|---:|
| Infinity EFL | 75.500000000 mm |
| Infinity BFL from surface 28 | 7.420455809 mm |
| First-surface-to-image track | 99.125014768 mm |
| Design f-number from modeled entrance pupil | 1.270000000 |
| Entrance-pupil diameter | 59.448819 mm |
| G1 EFL | +68.791786 mm |
| L9 standalone EFL | -57.103339 mm |
| G2 EFL | +28.050618 mm |
| Petzval sum, Σφ/(n·n′) | +0.018283041 mm⁻¹ |
| Reconstructed close active EFL | 81.455232 mm |
| Reconstructed close magnification magnitude | 0.095077 |

The first-order quantities are unchanged by the aperture revision. Rechecking Table 1 against the normalized arrays confirms all active radii and spacings to the stored precision, apart from the already disclosed S10 reconstruction and solved image plane. All sixteen glass coordinate pairs and five cemented pairs agree with the source table and topology.

Every modeled element has positive edge thickness. At infinity, mid-focus and close focus, no surface requires display-only trimming. Only L9 translates, imageward, while G1, G2 and the image plane stay fixed. These checks establish internal consistency of the reconstruction, not agreement with the patent's imaging performance.

### Patent-figure SD review (2026-09-10 UTC)

The earlier decision to retain larger apertures merely to pass additional rays is superseded. Optical rims from Figure 1 now guide the surface apertures, with a geometry cap at S20/S21. Wide-open clipping is retained and is not described as a validated production vignetting profile.

The following source conflicts remain unresolved and are visible in the numerical model:

| Region | Table 1 | Figure 1 / prose |
|---|---|---|
| L6 rear, S10 | +26.573 mm printed; existing reconstruction uses +36.573 mm before scaling | Positive L6 and the other examples support the disclosed reconstruction, not an exact source correction |
| L12 front, S21 | Plane, with 0.15 mm center thickness | Curved front and substantially thicker L12 |
| L13 rear, S23 | Negative radius, −55.049 mm | Opposite curvature; prose calls L13 negative |
| L15 rear, S26 | Negative radius, −43.167 mm | Opposite curvature; prose calls L15 negative |
| L16, S27–S28 | +34.056/+37.660 mm, 0.51 mm center thickness | Thicker element with nearly flat rear face |
| GL and image plane | Finite R29 and tabulated rear distances | Plane-parallel GL; the retained reconstruction uses a solved image plane |

Neither the application nor the grant supplies a unique corrected rear prescription. The model retains the numerical table instead of changing element count, radius signs, or glass ownership to fit the drawing.

## Sources

- CN 114755806 A, **一种大光圈长焦镜头**, Example 1, published 2022-07-15. Primary source for the prescription, group topology, focus mechanism, conditional expressions, aberration-plot f-number, and field angle.
- Viltrox, **AF 75mm F1.2 Pro APS-C Lens** product pages. Official source for the production 75 mm / F1.2 identity, APS-C format, Sony E / Nikon Z / Fujifilm X variants, 16-element/11-group construction, 21.35° viewing angle, 0.88 m minimum focus distance, 0.1× maximum magnification, 11-blade diaphragm, and internal STM focusing: <https://viltrox.com/products/viltrox-af-75mm-f1-2-aps-c-lens-for-nikon-z-mount>.
- Viltrox Pro-series page, official source explicitly describing the 75 mm F1.2 construction as 16 elements in 11 groups with three ED and four high-refractive-index elements: <https://viltrox.com/pages/viltrox-af-27mm-f1-2-pro-series>.
- HOYA Optics Division, official optical-glass catalog/data download and glass-type lists, used for the code-class audit. The ten Example-1 coordinate classes correspond one-for-one with HOYA codes; the rounded patent indices are retained rather than replaced by catalog Sellmeier values: <https://www.hoya-opticalworld.com/english/datadownload/index.html> and <https://www.hoya-opticalworld.com/english/products/press_01.html>.
- Manufacturer construction/MTF graphic supplied with the source package, used only for positional production correlation and semi-diameter silhouette guidance.
- CN 114755806 B, Table 1, PDF p. 7: [granted patent](https://patents.google.com/patent/CN114755806B/en). The grant repeats the application's numerical prescription and does not resolve the rear-group discrepancies.
