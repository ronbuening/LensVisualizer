# HD PENTAX-D FA★ 85 mm F1.4 ED SDM AW — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 2020/0301101 A1, “Imaging Lens System”  
**Application Number:** 16/798,533  
**Filed:** February 24, 2020  
**Published:** September 24, 2020  
**Priority:** JP 2019-050685, March 19, 2019  
**Inventor / Applicant:** Yoichi Nomura, Tokyo, Japan  
**Classification:** G02B 9/06; G02B 9/60; H04N 5/2254  
**Worked examples:** 11 numerical examples  
**Embodiment analyzed:** Numerical Example 3, FIG. 7 and Tables 7-9

The transcribed prescription is Numerical Example 3 of US 2020/0301101 A1. The patent describes a large-aperture medium-telephoto single-focus lens for a digital single-lens reflex camera, built from a positive first lens group and a positive second lens group (¶0002, ¶0045, ¶0082). Example 3 is the embodiment whose drawing and tables align most closely with the production **HD PENTAX-D FA★ 85 mm F1.4 ED SDM AW**.

The identification is convergent rather than formally assigned in the patent. The publication names Yoichi Nomura as inventor/applicant, not Ricoh or Pentax as assignee. The optical evidence nevertheless points to the production lens:

1. Example 3 is a twelve-element, ten-group formula: four elements in G1, three air-spaced elements in G2a, and five elements in G2b as two cemented doublets plus a double-aspheric rear singlet (¶0124-0125). Ricoh publishes the production lens as 12 elements in 10 groups.
2. The patent places three very-low-dispersion elements at $n_d = 1.43875$, $\nu_d = 95.0$ in elements 12, 14, and 22, and it places the only aspherical glass element at 28′. Ricoh states that the production lens uses three Super ED elements and one glass-molded aspherical element.
3. Table 9 gives $f = 83.42$ mm, $F_\mathrm{NO} = 1.46$, $Y = 21.64$ mm, and $W = 14.5°$. The computed d-line paraxial EFL from Table 7 is 83.409 mm. Ricoh’s production values are 85 mm, F1.4, 28.5° diagonal angle of view on full frame, 0.85 m minimum focus, and 0.12× maximum magnification.
4. The patent repeatedly frames the system as suitable for a digital SLR with long back focus (¶0099-0102), and Example 3 has a long 38.06 mm air space ahead of a 2.00 mm cover glass. That is consistent with a K-mount DSLR lens rather than a short-flange mirrorless design.
5. Ricoh’s development discussion describes the production optical design as a rear Gauss-type focus group plus a front compensating group with a concave front lens, two Super ED elements in the front group, one Super ED element in the rear group, and a single aspherical lens. That is exactly the distribution in Example 3.

Examples 1, 2, and 8 are excluded by their eleven-element / nine-group construction, and Example 11 is excluded by its five-element first group. Examples 3, 4, 6, 7, 9, and 10 are close family members. Example 3 is retained because it matches the production lens’s published construction and special-element census while preserving the $f = 83.42$ mm / $F_\mathrm{NO} = 1.46$ scale.

## Optical Architecture

The design is a positive-positive two-group, large-aperture medium telephoto. It is not a telephoto lens in the strict optical-design sense: the paraxial equivalent focal length is 83.409 mm, while the physical patent length to the image plane is 156.20 mm, giving $TL/EFL \approx 1.87$, not less than 1. The production lens is “medium telephoto” by field of view, not by compressed telephoto construction.

G1 is a positive compensating group with four air-spaced elements: a concave-front biconcave negative lens followed by three positives. Its computed standalone group focal length is $f_\mathrm{G1} = +240.21$ mm. The negative lead element provides divergence and Petzval/distortion control; the two S-FPL53 positives and one high-index S-LAH58 positive divide chromatic and field-curvature work.

G2 is the stronger positive rear imaging group, with computed standalone group focal length $f_\mathrm{G2} = +96.54$ mm. It is divided into G2a, the weakly positive stop-feeding subgroup, and G2b, the stronger rear double-Gauss subgroup. G2a is nearly afocal in the d-line paraxial calculation ($f_\mathrm{G2a} \approx +3517$ mm), because its two positive menisci are closely balanced by the negative meniscus L23. G2b supplies most of the rear group’s positive power ($f_\mathrm{G2b} = +70.10$ mm) and most of the high-index Petzval correction.

The aperture stop sits between surfaces 14 and 16, in the double-Gauss waist. The air space between the image-side concave surface of L23 and the object-side concave surface of L24′ is a biconvex air lens, explicitly identified in the patent as the feature that forms a double-Gauss configuration for a large-diameter lens (¶0080).

The defining choice is the separation of chromatic and Petzval tasks. S-FPL53-class fluorophosphate glass handles axial color and secondary spectrum, while dense lanthanum and niobium glasses around and behind the stop handle high-index power, spherical aberration, astigmatism, and field curvature. This matches the patent’s rationale in ¶0083-0089 and the conditional-expression set.

## Element-by-Element Analysis

Focal lengths below are standalone thick-lens-in-air values recomputed from the Example 3 surface radii and center thicknesses. Cemented-doublet net powers are stated separately because the standalone element powers are not the same as their in-situ cemented behavior.

### Element 11 — Biconcave Negative, front compensator

$n_d = 1.61340$, $\nu_d = 44.3$. Glass: S-NBM51 (OHARA). $f = -120.9$ mm.

Element 11 is the distinctive concave-front negative lens. Both radii make it biconcave under the patent sign convention: $R_1 = -189.565$ mm and $R_2 = +122.530$ mm. The patent requires the closest object-side lens to have a concave surface facing the object side (¶0073) and explains that its negative power is used to balance distortion, lateral color, axial color, and field curvature (¶0090-0092).

The glass identification was tightened in the re-review. The old draft treated this as an S-NBM51 “class”; the catalog match is exact at $n_d = 1.61340$ and $\nu_d = 44.27$. Its negative anomalous partial dispersion is the chromatic counterweight to the three S-FPL53 elements.

### Element 12 — Biconvex Positive, Super ED

$n_d = 1.43875$, $\nu_d = 95.0$. Glass: S-FPL53 (OHARA) / FCD100 class. $f = +215.4$ mm.

The patent specifically notes that, in Example 3, positive lens 12 is biconvex (¶0124). Its very low dispersion and positive anomalous partial dispersion make it one of the front group’s two principal axial-color correctors. The catalog value for S-FPL53 is $n_d = 1.43875$, $\nu_d \approx 94.93$, which is a direct match to the prescription.

### Element 13 — Positive Meniscus, high-index lanthanum

$n_d = 1.88300$, $\nu_d = 40.8$. Glass: S-LAH58 (OHARA). $f = +330.5$ mm.

Both radii are positive ($R_1 = +200.965$ mm, $R_2 = +637.929$ mm), making a positive meniscus convex toward the object. This lens is the high-index positive member of G1. It satisfies the design purpose behind Conditional Expression (6), which requires a sufficiently large index ratio between the highest-index and lowest-index positive lenses in the first group to control Petzval sum and field curvature (¶0105-0106).

The earlier draft labeled this as a broad 883/408 lanthanum class. The re-review confirms an exact OHARA S-LAH58 code match within the rounding precision of the patent.

### Element 14 — Biconvex Positive, Super ED

$n_d = 1.43875$, $\nu_d = 95.0$. Glass: S-FPL53 (OHARA) / FCD100 class. $f = +231.9$ mm.

Element 14 is the second S-FPL53 positive in G1. It is weakly biconvex, with $R_1 = +106.673$ mm and the very long rear radius $R_2 = -2149.801$ mm. It completes the front group’s split between low-dispersion correction (elements 12 and 14) and high-index Petzval support (element 13).

### Element 21 — Positive Meniscus, high-index lanthanum

$n_d = 1.87070$, $\nu_d = 40.7$. Glass: TAFD32 (HOYA), 871/407 lanthanum class. $f = +98.0$ mm.

Element 21 begins G2a with a steep positive meniscus ($R_1 = +46.311$ mm, $R_2 = +93.871$ mm). It converges the beam into the stop region while preserving the high-index support needed for field control. The six-digit 871/407 code is cataloged as HOYA TAFD32 rather than as an OHARA S-LAH type, so the re-review names the exact HOYA match and keeps the broader class description only as a cross-reference.

### Element 22 — Positive Meniscus, Super ED

$n_d = 1.43875$, $\nu_d = 95.0$. Glass: S-FPL53 (OHARA) / FCD100 class. $f = +102.7$ mm.

Element 22 is the third Super ED element and the only one in the rear group. The patent states that the positive lenses of G2a include a low-dispersion glass with $\nu_d \ge 70$ to correct axial chromatic aberration (¶0087). Placing this S-FPL53 element immediately ahead of the stop gives it large marginal-ray leverage.

### Element 23 — Negative Meniscus, G2a achromatizing element

$n_d = 1.67300$, $\nu_d = 38.3$. Glass: S-NBH52V (OHARA). $f = -37.5$ mm.

Element 23 is a negative meniscus convex to the object ($R_1 = +238.884$ mm, $R_2 = +22.724$ mm). Its steep image-side surface faces the aperture stop and forms the object-side wall of the biconvex air lens. It is the high-dispersion partner to element 22.

### Cemented doublet 24′ + 25′ — rear air-lens wall and high-index positive pair

**Element 24′:** $n_d = 1.67300$, $\nu_d = 38.3$. Glass: S-NBH52V (OHARA). $f = -25.5$ mm.  
**Element 25′:** $n_d = 1.89190$, $\nu_d = 37.1$. Glass: S-LAH92 (OHARA). $f = +24.5$ mm.

The doublet is biconcave negative 24′ cemented to biconvex positive 25′. The cemented interface is surface 17 at $R = +29.272$ mm. In standalone air, the cemented pair has net $f \approx +242.8$ mm, so its role is not a strong isolated achromat but a compact high-index contributor to rear-group power and Petzval correction.

The glass pair has little Abbe separation ($\nu_d = 38.3$ versus 37.1). Its importance is therefore primarily spherical/Petzval balancing and air-lens formation, not a large internal color correction.

### Cemented doublet 26′ + 27′ — rear achromatizing doublet

**Element 26′:** $n_d = 1.73800$, $\nu_d = 32.3$. Glass: S-NBH53V (OHARA). $f = -27.0$ mm.  
**Element 27′:** $n_d = 1.83481$, $\nu_d = 42.7$. Glass: S-LAH55V (OHARA). $f = +27.8$ mm.

The second cemented pair has greater dispersion separation than the 24′+25′ doublet and is the more meaningful rear cemented achromat. Its standalone doublet focal length is weakly positive at $f \approx +649.5$ mm. It works with the high-index positive palette required by Conditional Expression (7), which demands an average $n_d$ above 1.80 for positive lenses in G2b (¶0107-0108).

### Element 28′ — Biconvex Positive, double-aspheric molded lens

$n_d = 1.69350$, $\nu_d = 53.2$. Glass: M-LAC130 / MP-LAC130 (HOYA), moldable lanthanum crown. $f = +123.0$ mm.

Element 28′ is biconvex and aspherical on both faces. It is the only aspherical lens in Example 3 and corresponds to Ricoh’s published “glass-molded aspherical optical element.” Its rearward position gives it high chief-ray leverage for astigmatism and field curvature, while its positive power contributes to final convergence.

The re-review avoids the broader “Schott equivalent” assertion from the prior draft and uses the direct HOYA M-LAC130/MP-LAC130 match to the patent’s 694/532 code.

## Glass Identification and Selection

Glass matches were checked against current public manufacturer catalog data by six-digit $n_d/\nu_d$ code and by absolute $n_d$, $\nu_d$ residual. Names are asserted only where the catalog match is exact within patent rounding.

| Element(s) | Patent $n_d$ | Patent $\nu_d$ | Catalog identification | Status | Role |
|---|---:|---:|---|---|---|
| 11 | 1.61340 | 44.3 | S-NBM51 (OHARA) | exact | Front negative APD partner |
| 12, 14, 22 | 1.43875 | 95.0 | S-FPL53 (OHARA) / FCD100 class | exact | Super ED axial-color correction |
| 13 | 1.88300 | 40.8 | S-LAH58 (OHARA) | exact | High-index G1 positive |
| 21 | 1.87070 | 40.7 | TAFD32 (HOYA), 871/407 class | exact | High-index G2a positive |
| 23, 24′ | 1.67300 | 38.3 | S-NBH52V (OHARA) | exact | High-dispersion negative elements |
| 25′ | 1.89190 | 37.1 | S-LAH92 (OHARA) | exact | Very high-index rear positive |
| 26′ | 1.73800 | 32.3 | S-NBH53V (OHARA) | exact | High-dispersion rear negative |
| 27′ | 1.83481 | 42.7 | S-LAH55V (OHARA) | exact | High-index rear positive |
| 28′ | 1.69350 | 53.2 | M-LAC130 / MP-LAC130 (HOYA) | exact | Moldable aspheric crown |

The three S-FPL53 elements are the most important chromatic-correction choice. Ricoh’s development material states that the lens uses two Super ED elements in the front group and one in the rear group; Example 3 places the three $\nu_d = 95.0$ elements exactly at elements 12, 14, and 22. The patent’s Conditional Expression (2), $1.7 < \nu_{P1G\min}/\nu_{L1} < 2.5$, evaluates to $95.0/44.3 = 2.144$, confirming the intended contrast between the Super ED positives and the negative front lens.

## Focus Mechanism

The patent allows multiple focusing patterns, but its preferred “rear focus” mode fixes G1 relative to the image surface and moves G2 toward the object when focus changes from infinity to close range (¶0066-0067). Ricoh describes the production lens as using a newly designed large ring-type SDM to move heavy rear optical element groups in unison. This is consistent with G2 acting as the focus group.

The patent publishes only the infinity prescription for Example 3. It does not publish a close-focus table, magnification-dependent air gaps, focus travel, or intermediate object distances. The data file therefore carries the verified infinity prescription only. It records Ricoh’s official close-focus specification, 0.85 m and 0.12× maximum magnification, as manufacturer metadata, not as a derived patent focus state.

| State | Prescription status | Notes |
|---|---|---|
| Infinity | Fully transcribed from Table 7 | Verified paraxially against Table 9 |
| Close focus | Not tabulated in patent | Ricoh official specification: 0.85 m, 0.12× |

The patent also permits an optional image-blur-correction group that decenters orthogonally to the axis (¶0063, ¶0081). The production K-mount lens has no optical stabilization unit; Pentax bodies provide sensor-shift Shake Reduction. That optional patent feature is not implemented in the data file.

## Aspherical Surfaces

Surfaces 22 and 23, the two faces of element 28′, are rotationally symmetric aspheres (¶0079, ¶0113, Table 8). In the data file they are labeled **22A** and **23A**. The patent uses the standard conic form in which $K = 0$ is a spherical base:

$$
x = \frac{c y^2}{1 + \sqrt{1 - (1 + K)c^2y^2}} + A_4 y^4 + A_6 y^6 + A_8 y^8 + A_{10}y^{10} + A_{12}y^{12}.
$$

| Surface | $R$ | $K$ | $A_4$ | $A_6$ | $A_8$ | $A_{10}$ | $A_{12}$ |
|---|---:|---:|---:|---:|---:|---:|---:|
| 22A | +206.484 | 0 | $-1.010\times10^{-6}$ | $-7.022\times10^{-9}$ | $+7.043\times10^{-12}$ | $-5.523\times10^{-15}$ | $-4.109\times10^{-18}$ |
| 23A | -144.341 | 0 | $+1.762\times10^{-6}$ | $-6.400\times10^{-9}$ | $+1.058\times10^{-11}$ | $-6.034\times10^{-15}$ | 0 |

At the verified data-file semi-diameters, the polynomial departure from the spherical base is approximately -0.960 mm at $h = 22.5$ mm on 22A and +0.119 mm at $h = 22.7$ mm on 23A. The object-side surface therefore substantially relaxes the spherical base toward the rim, while the image-side surface applies a smaller opposite-sign correction. This is consistent with the patent’s statement that G2b’s aspherical surface reduces spherical aberration and astigmatism while maintaining field flatness (¶0089).

## Chromatic Correction Strategy

The patent’s chromatic strategy is not merely “three ED elements.” It combines a concave-front negative lens with negative anomalous partial dispersion and three S-FPL53 fluorophosphate positives with strong positive anomalous partial dispersion. The resulting pairing directly serves Conditional Expression (2) and Ricoh’s development claim that axial chromatic aberration and purple fringing were primary design problems.

The front group carries two Super ED positives (L12 and L14), while G2a carries the third (L22). This distribution suppresses axial color in both the front compensating group and the rear Gauss-type focus group. The high-index lanthanum positives in G1 and G2b then handle the field-curvature penalty that would otherwise follow from relying heavily on low-index fluorophosphate glass.

The design should not be described as formally apochromatic. The patent’s aberration plots show well-controlled d-, g-, and C-line behavior for Example 3, but neither Ricoh nor the patent claims an APO designation. The accurate statement is strong axial and secondary-spectrum suppression through three Super ED elements and a compensating concave-front negative element.

## Conditional Expressions

The eight conditional expressions in the patent were recomputed from the Table 7 prescription. Six reproduce Table 34 directly. Two require comment because the printed table and printed formula cannot both be literal.

| # | Published quantity | Recomputed Example 3 | Patent Table 34 | Re-review status |
|---|---|---:|---:|---|
| (1) | $f_{L1}/f$ | -1.449 | -1.45 | match |
| (2) | $\nu_{P1G\min}/\nu_{L1}$ | 2.144 | 2.14 | match |
| (3) | $(L1R2 + L1R1)/(L1R2 - L1R1)$ | -0.215 | -0.21 | match |
| (4) | $f_{2Gp}/f_{1Gp}$ | 0.402 | 0.40 | match |
| (5) | $LnR2/LpR1$ as printed | 1.220 | 0.82 | printed ordering appears reversed |
| (6) | $N_{d,1GpP\max}/N_{d,1GpP\min}$ | 1.309 | 1.31 | match |
| (7) | $N_{d,2BGpP,ave}$ | 1.8067 | 1.807 | match |
| (8) | $DG1-G2/TL$ | 0.150 | 0.14 | table value appears rounded/truncated |

For (5), the patent prints $LnR2/LpR1$, but Example 3 gives $122.530/100.426 = 1.220$, slightly outside the printed upper bound of 1.2. The table value 0.82 is the reciprocal, $100.426/122.530 = 0.8196$. The same reciprocal relationship appears elsewhere in Table 34, so the intended tabulated quantity is almost certainly $LpR1/LnR2$.

For (8), Table 7 gives the G1-G2 gap as 23.43 mm. Table 9 gives $L = 156.20$ mm. The ratio is therefore exactly 0.150 to three decimals. The table’s 0.14 entry still satisfies the inequality, but it is not reproduced by the printed axial data.

## Air Lenses

The load-bearing air lens is the space around the aperture stop. Surface 14, the image-side surface of L23, has $R = +22.724$ mm and is concave toward the image. Surface 16, the object-side surface of L24′, has $R = -42.077$ mm and is concave toward the object. The two surfaces face each other across the stop region and form the biconvex air lens explicitly described by the patent (¶0080).

This air lens is central to the double-Gauss character of the rear group. It provides strong spherical-aberration and coma leverage without making either glass element alone carry the full correction. The last double-aspheric element then trims the residual field and astigmatism.

## Data-File Notes

The patent includes a 2.00 mm flat cover glass at $n_d = 1.51633$ after the 38.06 mm air space following surface 23. The project data file excludes sensor or cover glass. The cover glass was therefore folded into the final air gap as an air-equivalent distance:

$$
d_{23A} = 38.06 + \frac{2.00}{1.51633} + 0.50 = 39.878974\ \mathrm{mm}.
$$

The patent does not publish semi-diameters. The data file uses conservative inferred clear apertures from a d-line marginal/chief-ray trace, constrained by the 82 mm filter thread, spherical rim limit, element edge thickness, signed cross-gap sag, and element front/rear semi-diameter ratio. The inferred apertures are not claimed as manufacturer-published mechanical clear apertures.

## Verification Summary

All values in this section were recomputed from the transcribed Example 3 prescription by paraxial $y$-$n u$ ray tracing at the d line. The Petzval sum is the surface-by-surface sum $\sum (n' - n)/(R n n')$, not a thin-lens element approximation.

| Quantity | Recomputed | Patent / source value | Status |
|---|---:|---:|---|
| Effective focal length | 83.409 mm | 83.42 mm | match |
| Back focal distance from last lens surface, cover folded | 39.879 mm | derived from Table 7 + Table 9 | match |
| Physical patent length to image plane | 156.20 mm | 156.20 mm | match |
| Design F-number | 1.46 | 1.46 | match by stop sizing |
| Full-frame semi-image height | 21.64 mm | 21.64 mm | match |
| Half-field angle from $Y/EFL$ | 14.54° | 14.5° | match |
| $f_\mathrm{G1}$ | +240.21 mm | not tabulated | computed |
| $f_\mathrm{G2}$ | +96.54 mm | not tabulated | computed |
| $f_\mathrm{G2a}$ | +3517 mm | positive subgroup | computed |
| $f_\mathrm{G2b}$ | +70.10 mm | not tabulated | computed |
| Petzval sum | $1.5888\times10^{-3}$ mm$^{-1}$ | not tabulated | computed |
| Petzval radius | +629.4 mm | not tabulated | computed |
| $P\cdot f$ | 0.1325 | not tabulated | computed |

The companion data file adopts the same verified conventions used in this table: exact catalog labels where the match is exact, cover-glass folding into the final back focal distance, and semi-diameter estimates constrained by edge thickness and signed cross-gap sag.

## Sources

- US 2020/0301101 A1, “Imaging Lens System,” Yoichi Nomura, Numerical Example 3, FIG. 7 and Tables 7-9.  
- Ricoh Imaging, official product page, “HD PENTAX-D FA★85mmF1.4ED SDM AW,” product specifications. https://www.ricoh-imaging.co.jp/english/products/lens/k/telephoto/hdpentax-dfa-85/  
- Ricoh Imaging, launch release, May 28, 2020. https://news.ricoh-imaging.co.jp/rim_info2/2020/20200528_020300.html  
- Ricoh Imaging, STAR LENS special site, development story. https://www.ricoh-imaging.co.jp/english/products/star_lens/special/sp_dfa85-14/interview/  
- OHARA optical glass datasheets: S-NBM51, S-FPL53, S-LAH58, S-NBH52V, S-NBH53V, S-LAH55V, S-LAH92.  
- HOYA optical glass data and cross-reference material: TAFD32 and M-LAC130 / MP-LAC130.
