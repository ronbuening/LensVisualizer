## Patent Reference and Design Identification

**Patent:** JP 2016-161889 A\
**Application Number:** JP 2015-043165\
**Filed:** 2015-03-05\
**Published:** 2016-09-05\
**Inventor:** Akihiko Yuki\
**Applicant:** Canon Inc.\
**Title:** ズームレンズ及びそれを有する撮像装置\
**Embodiment analyzed:** Example 1 (実施例1)

The data file transcribes Example 1 of JP 2016-161889 A and associates it with the fixed-lens Canon PowerShot G9 X. The patent is the numerical authority for the optical prescription; Canon product documentation is used only for the production identity and marketed specifications. The correlation is not presented as manufacturer confirmation.

The identification rests on several convergent points. Canon lists the PowerShot G9 X as marketed in October 2015 with a 10.2–30.6 mm 3× zoom lens, an aperture range of f/2.0–11 at wide angle and f/4.9–11 at telephoto, and a 1.0-inch CMOS sensor with a 3:2 aspect ratio. Example 1, filed in March 2015, publishes 10.50, 19.76, and 29.90 mm zoom states with f/2.06, f/4.30, and f/5.01 respectively, and reaches a maximum image height of 7.89 mm. These values are close to the marketed lens while remaining measurably different, so the model keeps the production and patent quantities separate rather than forcing the patent to the product specification.

No geometric scaling is applied. The production-to-patent focal-length ratios differ at the two endpoints, so a single scale factor cannot map 10.50–29.90 mm to 10.2–30.6 mm. The data therefore stores the marketed range separately from the independently recomputed design EFL range of 10.500554119–29.890544235 mm.

## Optical Architecture

Example 1 is a negative-positive-positive three-group zoom. The data record contains eight glass elements in six air-separated physical components: two singlets in L1, one singlet plus two cemented doublets in L2, and one singlet in L3. These six physical components are organized into the three functional zoom groups shown in the patent and in the data annotations.

The first group L1 is negative and contains L11 and L12. The aperture stop lies between L1 and L2 and follows its own zoom trajectory. L2 is the principal positive zoom group: L21 is followed by cemented doublet 24 (L22 + L23) and cemented doublet 27 (L25 + L26). L3 consists only of L31 and provides positive rear power. This organization corresponds to the patent description in ¶¶0047–0053 and the optical section in Figure 1.

The final TypeScript arrays give functional-group EFLs of −22.763814781 mm for L1, +17.428694405 mm for L2, and +31.443331616 mm for L3. These recomputations agree with the patent's rounded group values of −22.76, +17.42, and +31.44 mm. The wide-to-tele zoom movement decreases the L1-to-stop separation and increases the L2-to-L3 separation; the stop-to-L2 spacing is non-monotonic, reproducing the published 1.17 → 0.10 → 0.37 mm reversal.

The patent states that L2 performs the principal zooming action, L1 compensates the accompanying image-plane displacement, and L3 acts as a field lens supporting image-side telecentricity (¶0048). The model preserves those published zoom relationships without adding any unpublished focusing motion.

## Element-by-Element Analysis

### L11 — Biconcave Negative (2× Asph)

**nd = 1.88202, νd = 37.2. Glass: M-TAFD307 (coordinate-compatible spectral proxy; production supplier unspecified). Standalone f = −11.915422131 mm.**

L11 is the negative front element of L1 and carries aspherical surfaces 1A and 2A. The patent identifies the corresponding lens 11 as the negative member G1n and states that both of its surfaces are aspherical (¶0049). Its large negative standalone power is moderated in the assembled first zoom group by the following positive meniscus L12.

The patent's chromatic discussion assigns L11 a role beyond simple negative power. It uses the difference in Abbe number between the two L1 elements to control primary axial chromatic aberration at the telephoto end and lateral chromatic aberration at the wide end, while its specified partial-dispersion ratio participates in secondary-spectrum correction (¶0050). The data does not label L11 as an anomalous-partial-dispersion glass because no `dPgF` or absolute line indices are published for this element.

### L12 — Positive Meniscus

**nd = 2.00272, νd = 19.3. Glass: E-FDS2 class (HOYA E-FDS2 coordinate equivalent; vendor unproven). Standalone f = +29.593574956 mm.**

L12 is the positive meniscus that completes the net-negative L1 group. Its very high index and low Abbe number form a strong chromatic contrast with L11. The assembled pair has a functional group EFL of −22.763814781 mm rather than the arithmetic combination of the two standalone focal lengths; the air spacing and surface positions determine the in-situ group power.

The patent treats L11 and L12 as a coordinated chromatic pair rather than independent correctors (¶0050). L12 therefore serves both the first-order power balance of L1 and the dispersion balance needed to keep the negative lead group from dominating the chromatic residuals across the zoom range.

### L21 — Positive Meniscus (2× Asph)

**nd = 1.85135, νd = 40.1. Glass: TAFD305 class (HOYA MP/MC-TAFD305 coordinate equivalent; vendor unproven). Standalone f = +13.656939131 mm.**

L21 is the front positive element of L2 and carries aspherical surfaces 6A and 7A. The patent explicitly attributes the use of an aspherical surface on this front positive lens to correction of spherical aberration and coma (¶0051). In the data, both surfaces are retained as aspheres because both are marked aspherical in Example 1.

L21 supplies a large share of the positive power of L2. Its positive standalone EFL should not be interpreted as an additive contribution to the complete group, because the following cemented assemblies introduce both strong positive and negative surface powers in their actual surrounding media.

### L22 — Positive Meniscus, Cemented Doublet 24

**nd = 1.91082, νd = 35.3. Glass: TAFD35 class (HOYA TAFD35 coordinate equivalent; vendor unproven). Standalone f = +14.650049860 mm.**

L22 is the positive member of cemented doublet 24. It is cemented directly to L23 at surface 9, so the shared interface is a transition from the L22 glass to the L23 glass rather than an air surface. The data follows the downstream-element convention at that cemented junction.

The isolated-in-air focal length above describes L22 only as a comparison quantity. It is not the element's additive power inside the cemented assembly. The complete L22+L23 doublet has a net EFL of −24.039528691 mm when evaluated as the physical cemented pair in air.

### L23 (G2n) — Negative Meniscus, Cemented Doublet 24

**nd = 1.84660, νd = 20.6. Glass: Unmatched (special high-dispersion glass; patent points to an SnO-rich JP2012-193065 class). Standalone f = −8.141762024 mm.**

L23 is the negative member G2n that defines the central material strategy of the patent. It is cemented to L22 and has strong negative standalone power. The patent requires this negative L2 element to combine low Abbe number with a constrained partial-dispersion ratio and states that an SnO-rich glass of the type disclosed in JP2012-193065 is one possible material family (¶¶0051–0052).

No public catalog identity was found that simultaneously matches the stored nd = 1.84660 and νd = 20.6 closely enough to justify a named glass. The data therefore keeps L23 explicitly `Unmatched` rather than substituting an ordinary high-index flint with a materially different Abbe number.

### L25 — Biconcave Negative, Cemented Doublet 27

**nd = 1.69895, νd = 30.1. Glass: 699301 class (multiple catalog equivalents; vendor unproven). Standalone f = −21.392954583 mm.**

L25 is the negative member of cemented doublet 27. Its comparatively moderate negative standalone power is paired with the high-index positive L26 at the shared surface 12. The pair is part of the chromatic balancing structure within L2 rather than an isolated negative correction cell.

The patent states that using two cemented lenses in L2 helps control primary axial chromatic aberration and secondary spectrum at the telephoto end (¶0053). That statement applies to doublets 24 and 27 collectively rather than assigning a unique chromatic term to L25 alone.

### L26 — Biconvex Positive, Cemented Doublet 27

**nd = 1.91082, νd = 35.3. Glass: TAFD35 class (HOYA TAFD35 coordinate equivalent; vendor unproven). Standalone f = +16.407487067 mm.**

L26 is the positive member of cemented doublet 27 and uses the same nd/νd coordinate as L22. Its positive standalone power exceeds the negative standalone power of L25 in magnitude, but the complete cemented pair must be evaluated through all three physical surfaces and both glass media. The net EFL of doublet 27 is +60.462336618 mm.

The two cemented assemblies illustrate why standalone element power, cemented net power, and in-situ group behavior must remain distinct. Doublet 24 is net negative and doublet 27 is weakly net positive in air, while the complete L2 group, including L21 and the actual internal separations, is strongly positive at +17.428694405 mm.

### L31 — Biconvex Positive (1× Asph)

**nd = 1.62263, νd = 58.2. Glass: BACD15 class (HOYA MP-BACD15 coordinate equivalent; vendor unproven). Standalone f = +31.443331616 mm.**

L31 is the single positive element of L3. Its standalone focal length is effectively the focal length of the complete third group because L3 contains no other powered element. The rear surface 15A is aspherical.

The patent describes L3 as a lightweight positive group that functions as a field lens to support image-side telecentricity (¶0048). It also notes that moving this light group axially can facilitate rapid focusing (¶0053), but Example 1 does not publish a focus displacement table. The data therefore does not convert that qualitative statement into a focus trajectory.

## Glass Identification / Selection

The data uses catalog-equivalent class labels only where the stored nd/νd coordinates make such a comparison defensible. These labels identify optical classes or coordinate equivalents; they do not establish Canon's procurement source.

| Element(s) | Data-file glass annotation | nd | νd | Identification status |
|---|---|---:|---:|---|
| L11 | M-TAFD307 | 1.88202 | 37.2 | HOYA M-TAFD307 spectral proxy; production supplier unspecified |
| L12 | E-FDS2 class | 2.00272 | 19.3 | HOYA E-FDS2 coordinate equivalent; vendor unproven |
| L21 | TAFD305 class | 1.85135 | 40.1 | HOYA MP/MC-TAFD305 coordinate equivalent; vendor unproven |
| L22, L26 | TAFD35 class | 1.91082 | 35.3 | HOYA TAFD35 coordinate equivalent; vendor unproven |
| L23 | Unmatched special high-dispersion glass | 1.84660 | 20.6 | No defensible public-catalog match; patent cites an SnO-rich material class |
| L25 | 699301 class | 1.69895 | 30.1 | Multiple catalog equivalents; vendor unproven |
| L31 | BACD15 class | 1.62263 | 58.2 | HOYA MP-BACD15 coordinate equivalent; vendor unproven |

Example 1 publishes nd and νd for every element and θgF for selected elements. It does not publish absolute nC, nF, or ng values, and θgF is not the anomalous-partial-dispersion deviation `dPgF`. Consequently the data file contains no authored nC, nF, ng, or dPgF fields and marks every element `apd: false`. The analysis therefore makes no APO or anomalous-dispersion performance claim.

L23 is the most important identification limit. Its nd is close to several ordinary high-index flints, but its νd = 20.6 is substantially lower than the roughly 23.8 class represented by common catalog glasses near the same index. The patent's own reference to an SnO-rich material is consistent with keeping this element as a special, unmatched glass instead of relabeling it to a conventional catalog flint.

## Focus Mechanism

The focus status is **NO_INTERNAL_RECONSTRUCTION**. Example 1 publishes zoom spacings but no focus-state spacing table, object-distance prescription, magnification table, or quantified axial travel for any focusing group.

Canon specifies a focusing range of 5 cm to infinity at maximum wide angle and 35 cm to infinity at maximum telephoto, and Canon's support documentation states that these distances are measured from the end of the lens. The data file stores `closeFocusM = 0.05` because the schema requires a minimum-focus value, but this production specification is not used to infer internal movement.

The patent's statement that L3 can be moved to facilitate rapid focusing (¶0053) establishes a plausible mechanism concept, not a published focus trajectory for Example 1. All focus endpoints in the authored `var` data are therefore identical at each zoom position. No breathing, close-focus EFL, or internal focus travel is claimed from this model.

## Aspherical Surfaces

Example 1 uses five aspherical surfaces: 1A and 2A on L11, 6A and 7A on L21, and 15A on L31. The patent defines the sag with the standard conic constant K directly,

$$
X(H)=\frac{H^2/R}{1+\sqrt{1-(1+K)(H/R)^2}}+\sum A_p H^p,
$$

with positive X in the direction of light propagation. No κ-to-K conversion is required, and no geometric scaling or asphere-coefficient scaling is applied.

The patent-published nonzero coefficients retained by the data are:

| Surface | K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|
| 1A | 0 | −1.31035e−4 | +3.17018e−6 | −3.99693e−8 | +2.43555e−10 | −5.38672e−13 |
| 2A | 0 | −1.84487e−4 | +2.04387e−6 | +1.98076e−9 | −5.23095e−10 | +4.11098e−12 |
| 6A | +0.507382 | −9.78557e−5 | −1.79538e−7 | +4.09380e−10 | — | — |
| 7A | −10 | +3.05647e−5 | +9.16099e−7 | — | — | — | — |
| 15A | 0 | +4.12200e−5 | −7.26104e−7 | +8.64422e−9 | −4.49816e−11 | — |

The data file stores schema-required unused higher orders as zero where applicable; the table above lists only the terms actually published by the patent. The patent does not state a manufacturing process for these aspheres, so the analysis does not infer whether they are molded, polished, or hybrid surfaces.

The semi-diameters used by the visualization are not patent-published apertures. They were derived from the final optical model and checked against nonlinear marginal and off-axis ray containment, edge thickness, actual rim slope, conic-domain limits, and cross-gap intrusion. They therefore support the rendered geometry but should not be read as a source clear-aperture table.

## Chromatic Correction Strategy

The patent is specifically concerned with primary axial chromatic aberration and secondary spectrum in a negative-lead zoom. Its central design requirement places a high-dispersion negative lens G2n in L2 and constrains both its Abbe number and partial-dispersion ratio (¶¶0022–0030). In Example 1, that role is assigned to L23 with nd = 1.84660 and νd = 20.6.

Within L1, the patent combines the negative L11 and positive L12 with a large dispersion contrast and uses the published partial-dispersion characteristic of L11 as part of the secondary-spectrum balance (¶0050). Within L2, positive power is divided between L21 and L22, while the negative L23 provides the specially constrained material behavior. The second cemented pair L25+L26 adds another chromatic degree of freedom. The patent explicitly describes the two cemented assemblies as beneficial for axial chromatic and secondary-spectrum correction at the telephoto end (¶0053).

These statements describe the patent's intended correction strategy. The data does not contain sufficient line-index or `dPgF` information to independently model anomalous partial dispersion for the unmatched glass, so the analysis does not elevate the strategy to an APO classification.

## Conditional Expressions

The patent gives eleven principal conditions for the negative-lead zoom and additional tightened preferred ranges. The audited Example 1 values satisfy all of the principal conditions and all of the published tightened variants.

| Condition | Audited Example 1 quantity | Result |
|---|---:|:---:|
| (1) | θgF2n = 0.6176 < 0.62766468 | Pass |
| (2) | νd2n = 20.6 | Pass |
| (3) | f2/ft = 0.582899478 | Pass |
| (4) | \|f2n/f2\| = 0.467146984 | Pass |
| (5) | Nd2n = 1.84660 | Pass |
| (6) | D2n/D2 = 0.047418335 | Pass |
| (7) | 0.499595 < θgF2p = 0.5778 | Pass |
| (8) | νd2p = 36.9 | Pass |
| (9) | Nd2p = 1.890996667 | Pass |
| (10) | \|f1/f2\| = 1.306111304 | Pass |
| (11) | 0.51072 < θgF1n = 0.5769 | Pass |

Condition (9), and likewise preferred condition (9a), contains a source-symbol error: the inequality is printed with `νd2p`, while ¶0032 defines `Nd2p` as the average refractive index of the positive L2 lenses, ¶0040 discusses refractive index, and Table 1 reports the corresponding Example 1 value near 1.891. The audited interpretation therefore uses **Nd2p**. This correction affects the interpretation of the condition only; it does not alter any prescription value in the data file.

## Image Stabilization

Canon's production specification identifies the PowerShot G9 X as using an Optical Image Stabilizer. The patent, however, makes only the general statement that any lens group may be moved transverse to the optical axis for image stabilization (¶0067). Example 1 does not identify a specific stabilizing group, decenter amount, or stabilization state.

Accordingly, the data file contains no modeled IS group or transverse decenter. The product-level existence of Optical IS is a manufacturer fact, while the optical implementation remains unspecified by the selected patent embodiment.

## Verification Summary

The final data file retains the patent's three zoom states and uses the modeled f-numbers 2.06, 4.30, and 5.01 as `nominalFno`, rather than substituting the rounded production values f/2.0–4.9. Sequential reduced-angle tracing and an independent ABCD calculation give EFLs of 10.500554119, 19.763801836, and 29.890544235 mm for the wide, middle, and telephoto states. These agree with the patent's 10.50, 19.76, and 29.90 mm row to within 0.00946 mm.

The source's final plane-parallel optical block at surfaces 16–17 is excluded from the ordinary active lens model. Its 1.09 mm thickness at nd = 1.51633 contributes an air-equivalent 0.718840886 mm, which is folded into the final rear air gap together with the published 1.62 mm post-block spacing. The resulting modeled rear gaps are 7.478840886, 5.718840886, and 5.078840886 mm. This is a reference-plane normalization, not a geometric scaling of the lens.

The aperture-stop position is source-published, but its physical diameter is not. The authored stop semi-diameter is therefore model-derived from the wide-state f/2.06 pupil geometry rather than asserted as patent data. Likewise, the lens-surface semi-diameters are modeling quantities rather than values transcribed from Example 1. The September 6 audit enlarged L11 from 6.2 to 9.4 mm, L12 from 6.1 to 8.5 mm, and L31 from 5.7 to 9.0 mm to match the optical rims in Fig. 1 (local PDF page 20, 600 dpi). The central group and iris remain unchanged. At the revised rims, aspheric departures are approximately −217.0 µm (S1A), −770.6 µm (S2A), and +99.8 µm (S15A); the scans show no turnover and the surface validator and render diagnostics pass.

Surface-by-surface Petzval summation using $\phi/(n n')$ gives +0.005303907158 mm⁻¹. With the stated sign convention $1/R_P=-\Sigma P$, the corresponding paraxial image-shell radius is −188.540253 mm. This computed quantity describes the final prescription arrays and is not a patent-published field-curvature specification.

No sensor cover glass, dummy surface, flare-cutter plane, synthetic cement layer, focus reconstruction, IS decenter, or geometric scale factor is introduced. The only source correction carried into the interpretation is the `νd2p`/`Nd2p` symbol contradiction in condition (9)/(9a).

## Sources / References

1. **JP 2016-161889 A**, Akihiko Yuki, Canon Inc., published 2016-09-05. Example 1 prescription and asphere data: ¶¶0070–0075; architecture and element roles: ¶¶0047–0053; material conditions: ¶¶0022–0043; general IS statement: ¶0067.
2. **Canon Camera Museum — PowerShot G9 X.** Marketed October 2015; 10.2–30.6 mm lens; f/2.0 wide and f/4.9 tele. <https://global.canon/en/c-museum/product/dcc837.html>
3. **Canon U.S. — PowerShot G9 X Specification Chart.** 1.0-inch 3:2 CMOS sensor, 10.2–30.6 mm focal range, f/2.0–4.9 maximum aperture, Optical Image Stabilizer, and 5 cm / 35 cm focusing ranges. <https://downloads.canon.com/nw/camera/products/powershot/g9-x/specs/canon_eos_g9x_specification_chart.pdf>
4. **Canon Australia — Shooting subjects up close (PowerShot G9 X).** Focus distances are specified from the end of the lens. <https://www.canon.com.au/support/sims-content?cid=48475EF221E04F1984C5049479B9E22C&ctype=ts&pid=797c8893c4684cd39d4b1f0a22b4995f>
5. **HOYA Optics Division — optical-glass data/news.** Coordinate references for TAFD307, TAFD305, TAFD35, E-FDS2, and BACD15. <https://www.hoya-opticalworld.com/english/>
6. **OHARA Optical Glass pocket catalog.** Cross-vendor glass-code table including the 699301 family (S-TIM35 / E-FD15L / J-SF15 equivalents). <https://oharacorp.com/>
7. **HIKARI Optical Glass — J-SF15.** Published nd = 1.698950 and νd = 30.13 for glass code 699301. <https://www.hikari-g.co.jp/optical_glass/general_optical_glass/j-sf/>
8. **SCHOTT Advanced Optics optical-glass resources.** Consulted during the unmatched-glass audit. <https://www.schott-pharma.com/advanced-optics/english/products/optical-materials/optical-glass/index.html>
9. **CDGM Optical Glass catalog.** Consulted during the unmatched-glass audit. <https://www.cdgmgd.com/go.htm?k=Optical_Glass&url=gmcplist>
10. **SUMITA Optical Glass resources.** Consulted during the unmatched-glass audit. <https://www.sumita-opt.co.jp/en/download/>
