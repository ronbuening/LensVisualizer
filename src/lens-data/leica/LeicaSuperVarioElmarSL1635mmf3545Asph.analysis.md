# LEICA SUPER-VARIO-ELMAR-SL 16-35mm f/3.5-4.5 ASPH. — Patent Example 1 Analysis

## Patent Reference and Design Identification

**Patent:** JP 2018-087903 A  
**Application Number:** 2016-231075  
**Filed:** 2016-11-29  
**Published:** 2018-06-07  
**Inventor:** Yoshito Soma (相馬 祥人)  
**Applicant:** Konica Minolta, Inc.  
**Title:** ズームレンズ，撮像光学装置及びデジタル機器  
**Embodiment analyzed:** Example 1 (実施例1 / EX1)

The prescription modeled here is Example 1 of JP 2018-087903 A. The patent describes a wide-angle zoom for an imaging device, built around four optical zoom groups with negative-positive-positive-negative power sequence and a positive sub-group inside the second group that translates for closer focus (¶¶0019–0024, 0050–0054). Example 1 is tabulated in ¶¶0066–0069, with condition data in Tables 1 and 2 on printed page 24.

The association with the production Leica Super-Vario-Elmar-SL 16-35mm f/3.5-4.5 ASPH. is a strong design correlation, but it is not manufacturer-confirmed. Several independent characteristics converge:

1. The patent example contains 18 photographic elements in 12 air-separated physical groups; Leica specifies 18 lenses in 12 groups for the production lens.
2. Example 1 has four aspherical surfaces on two double-sided aspherical elements; Leica specifies four aspherical surfaces on two lenses.
3. The verified design effective focal lengths are 16.398554 mm at W and 34.194222 mm at T, compared with the marketed 16–35 mm range.
4. The patent publishes f/3.55, f/4.10, and f/4.60 at W/M/T, while Leica markets f/3.5 at 16 mm and f/4.5 at 35 mm.
5. The patent's 21.630 mm ideal image height is consistent with the semi-diagonal of the 135/full-frame image format, and Leica specifies the production lens for the full-frame L-Mount system.
6. The development chronology is compatible: the application was filed in November 2016, while Leica's technical material and 2018 launch material appeared before the Japanese publication in June 2018.

One material contradiction prevents treating the match as Leica-confirmed. Example 1 focuses by translating Gr2a, which is the cemented two-element pair L6+L7, whereas Leica's 2018 release material and current product description say that autofocus moves a single lightweight focusing element. The modeled prescription therefore follows the fixed patent embodiment, not the production mechanical statement. Leica also specifies a 0.25 m minimum focusing distance, while the patent provides internal spacings only for infinity and a nominal 0.35 m state. The data model preserves the published 0.35 m state and does not invent a 0.25 m internal-focus reconstruction.

No uniform dimensional scaling is applied: the model uses the Example-1 prescription at scale factor $s=1$. The patent's rear plane-parallel plate PT is not represented as a photographic element because it is described as a cover/filter-class plate and the LensVisualizer data model excludes sensor cover glass and filters. Its first-order optical path is retained through a documented air-equivalent rear spacing, discussed below.

## Optical Architecture

Example 1 is an 18-element, 12-group, four-group zoom. Its paraxial group powers, recomputed from the final data, are:

| Optical group | Elements | Computed EFL | Sign and function in the patent architecture |
|---|---|---:|---|
| Gr1 | L1–L5 | -20.950381 mm | Negative front group |
| Gr2 | L6–L10 | +80.149371 mm | Positive second group; contains focus subgroup Gr2a |
| Gr2a | L6–L7 | +113.922180 mm | Positive cemented focus subgroup |
| Gr2b | L8–L10 | +895.935171 mm | Very weak positive residual subgroup after the stop |
| Gr3 | L11–L15 | +27.377064 mm | Positive third group |
| Gr4 | L16–L18 | -37.981467 mm | Negative rear group |

The Gr2b value deserves a precision qualification. Table 1 prints +896.398 mm, whereas the rounded surface prescription gives +895.935171 mm. Because Gr2b is nearly afocal, a small rounding change in radii or indices produces a comparatively large focal-length change. The source value is therefore retained as a visible source-versus-computation discrepancy rather than being altered or forced to agree.

The aperture stop is at source surface 13, immediately before L8 at the object-side end of Gr2b (¶0050). The patent's Figure 1 on printed page 25 shows the same arrangement and the W/M/T motion of the four zoom groups.

During W→T zooming, Gr1 first moves imageward and then reverses toward the object; Gr2, Gr3, and Gr4 move monotonically toward the object, and Gr2 and Gr4 are linked (¶0051). The final model reproduces the published kinematics. Relative to the fixed image plane, the computed W→T displacement magnitude is 16.886000 mm for Gr4 and 20.442000 mm for Gr3; Gr2 and Gr4 have identical signed W→T displacement of -16.886000 mm. The three Gr1 stations reproduce the patent's imageward-then-objectward reversal.

The patent's architectural argument is explicit rather than inferred from the signs alone. It states that the negative Gr4 is used to oppose distortion and coma associated with the strong negative Gr1 in a mirrorless-oriented wide-angle zoom (¶¶0021–0022). That statement is the patent's design rationale; the present first-order calculations do not independently decompose distortion or coma by group.

A further source-specific feature appears in Gr3. It contains two adjacent cemented pairs, D4 and D5, whose cemented interfaces face in opposite senses. The patent states that placing these interfaces where axial and off-axis ray heights differ helps distribute correction of spherical aberration, coma, and astigmatism (¶0040). This is again a patent attribution, not a claim derived merely from the signs of the individual elements.

## Element-by-Element Analysis

### Gr1 — L1, Negative Meniscus

**nd = 1.83481, νd = 42.72. Glass: 835427 — TAFD5G-coordinate class (supplier unproven). Standalone f = -46.352102 mm.**

L1 is the front negative meniscus of Gr1. The patent describes its image-side surface as concave (¶0054). It begins the negative front-group power without being one of the aspherical elements. Its standalone focal length is a calculation for the isolated physical element; it should not be read as the element's in-situ contribution after coupling to the rest of Gr1.

The stored glass label reflects an exact catalog-coordinate match to the TAFD5G coordinate family, but the patent does not identify the supplier. The data therefore records the coordinate class rather than asserting a HOYA melt identity.

### Gr1 — L2, Double-Sided Aspherical Negative Meniscus

**nd = 1.58313, νd = 59.39. Glass: L-BAL42 (OHARA catalog equivalent; production supplier unspecified). Standalone f = -39.698505 mm.**

L2 is the second negative meniscus of Gr1 and carries the first pair of aspherical surfaces, 3A and 4A (¶¶0054, 0066–0067). The patent's Example-1 prose specifically identifies this lens as double-sided aspherical.

The 1.58313/59.39 coordinate matches OHARA L-BAL42 exactly, a low-Tg barium crown made for precision glass molding, which suits a double-sided asphere. It is a catalog equivalent, not a supplier identification: HIKARI J-SK12 (νd 59.42) and HOYA M-BACD12 (νd 59.46) sit on nearly the same coordinate, and the patent names no glass.

The aspheres are geometrical features of L2; their verified coefficients and modeled-aperture departures are discussed in the Aspherical Surfaces section.

### Gr1 — D1, L3 Biconvex Positive + L4 Biconcave Negative

**L3:** nd = 1.64769, νd = 33.84. Glass: 648338 — high-dispersion flint class (supplier unproven). Standalone f = +45.089668 mm.  
**L4:** nd = 1.72916, νd = 54.67. Glass: 729547 — lanthanum-crown class (supplier unproven). Standalone f = -23.411293 mm.  
**Computed cemented D1 net f = -53.023567 mm.**

D1 is the cemented positive-negative pair described in ¶0054. The negative net power of the cemented assembly is a computed result and differs conceptually from either isolated member's standalone focal length. Neither the glass classes nor the net sign alone establish a specific aberration allocation, so no element-level aberration function is assigned beyond the source's broader Gr1 discussion.

At the cemented interface, the data follows the project convention that the junction belongs to the downstream element L4 and carries L4's refractive index. No synthetic cement layer is inserted.

### Gr1 — L5, Rear Positive Meniscus

**nd = 1.74077, νd = 27.76. Glass: 741278 — high-dispersion flint class (supplier unproven). Standalone f = +48.744630 mm.**

L5 closes Gr1 as the rear positive meniscus described in ¶0054. In the complete group it acts in combination with two negative front menisci and the negative-net D1 cemented pair; the complete group EFL is -20.950381 mm.

Its 741278 coordinate is catalog-compatible with high-dispersion flint families, but the model does not convert that coordinate match into a supplier assertion or a spectral claim beyond nd and νd.

### Gr2a — D2, L6 Positive Meniscus + L7 Negative Meniscus

**L6:** nd = 1.48749, νd = 70.44. Glass: 487704 — low-dispersion crown class (supplier unproven). Standalone f = +54.922455 mm.  
**L7:** nd = 1.77250, νd = 49.62. Glass: 773496 — TAF1 historical-coordinate class (supplier unproven). Standalone f = -108.681447 mm.  
**Computed cemented D2 / Gr2a net f = +113.922180 mm.**

D2 is the entire published focus subgroup Gr2a. The patent describes it as a cemented pair comprising an image-side-convex positive meniscus followed by an object-side-concave negative meniscus (¶0054). The assembled subgroup has positive power and moves imageward for closer focus (¶0050).

The computed Gr2a EFL of +113.922180 mm agrees with the +113.921 mm value printed in Table 1 to the precision expected from the rounded prescription. Its focus travel and the patent's chromatic rationale are treated separately below because those properties belong to the moving cemented subgroup, not to either standalone element in isolation.

L7's 1.77250/49.62 coordinate matches the historical TAF1 coordinate recorded before HOYA's 2019 νd precision update to 49.63. That historical match supports the class label but still does not prove the patent's supplier.

### Gr2b — L8, Biconvex Positive

**nd = 1.48749, νd = 70.44. Glass: 487704 — low-dispersion crown class (supplier unproven). Standalone f = +39.046699 mm.**

L8 is the first glass element behind the aperture stop and the first element of Gr2b (¶0054). The stop moves with Gr2b during zooming (¶0050). L8 is not part of the focus subgroup in Example 1; its authored spacings change with zoom only through the surrounding group motion.

The same 487704 coordinate class appears in L6 and later in L12. The repeated coordinate does not imply that these elements have identical optical roles; the data records only their common nd/νd class.

### Gr2b — D3, L9 Positive Meniscus + L10 Negative Meniscus

**L9:** nd = 1.76182, νd = 26.61. Glass: 762266 — high-dispersion flint class (supplier unproven). Standalone f = +65.664972 mm.  
**L10:** nd = 1.91082, νd = 35.25. Glass: 911353 — TAFD35/TAFD35L-coordinate class (supplier unproven). Standalone f = -21.785560 mm.  
**Computed cemented D3 net f = -30.934834 mm.**

D3 is the rear cemented pair of Gr2b. The patent describes the pair as an image-side-convex positive meniscus cemented to an object-side-concave negative meniscus (¶0054). The pair itself is negative by the isolated cemented-net calculation, while Gr2b as a whole remains only weakly positive because L8 and the internal separations substantially change the assembled subgroup power.

This distinction is important for interpreting the +895.935171 mm Gr2b EFL: it is an in-situ subgroup result for L8 plus D3 and their spacing, not the focal length of D3.

### Gr3 — L11, Double-Sided Aspherical Biconvex Positive

**nd = 1.58313, νd = 59.39. Glass: L-BAL42 (OHARA catalog equivalent; production supplier unspecified). Standalone f = +28.559184 mm.**

L11 begins Gr3 and carries the second double-sided aspherical pair, surfaces 19A and 20A (¶¶0054, 0066–0067). The patent identifies it as biconvex and double-sided aspherical. Its coordinate is the same 1.58313/59.39 pair used in L2, labeled with the same L-BAL42 catalog equivalent and the same supplier caution.

The complete Gr3 EFL is +27.377064 mm, close to L11's isolated focal length but not identical; the following two cemented pairs materially participate in the group transfer matrix.

### Gr3 — D4, L12 Biconvex Positive + L13 Negative Meniscus

**L12:** nd = 1.48749, νd = 70.44. Glass: 487704 — low-dispersion crown class (supplier unproven). Standalone f = +21.566812 mm.  
**L13:** nd = 1.91082, νd = 35.25. Glass: 911353 — TAFD35/TAFD35L-coordinate class (supplier unproven). Standalone f = -60.169521 mm.  
**Computed cemented D4 net f = +33.681898 mm.**

D4 is the object-side member of Gr3's two adjacent cemented pairs. The source describes its cemented interface as concave toward the object (¶0054). In ¶0040, the patent associates the orientation of this object-side cemented interface, at the higher axial-ray-height side of Gr3, with increased freedom to balance spherical aberration and coma relative to astigmatism.

That attribution is retained as the patent's rationale. The standalone and cemented powers establish first-order sign and magnitude but do not independently prove the aberration partition.

### Gr3 — D5, L14 Biconcave Negative + L15 Biconvex Positive

**L14:** nd = 1.91082, νd = 35.25. Glass: 911353 — TAFD35/TAFD35L-coordinate class (supplier unproven). Standalone f = -13.560009 mm.  
**L15:** nd = 1.51680, νd = 64.20. Glass: 517642 — BK7-class crown (supplier unproven). Standalone f = +24.862160 mm.  
**Computed cemented D5 net f = -33.971740 mm.**

D5 follows immediately behind D4. Its cemented interface faces in the opposite sense, concave toward the image, which is the paired-interface arrangement called out in ¶0040. The patent states that this image-side interface lies where off-axis ray height is relatively higher and can therefore add astigmatic correction with less effect on spherical aberration and coma than the forward interface.

D4 and D5 consequently form a useful source-documented design motif: two cemented pairs with opposite interface orientations inside the positive Gr3. The modeled data preserves the pair boundaries and does not merge them into a synthetic multi-element block.

### Gr4 — D6, L16 Positive Meniscus + L17 Negative Meniscus

**L16:** nd = 1.92286, νd = 20.88. Glass: 923209 — high-index flint class (supplier unproven). Standalone f = +15.292940 mm. Patent dPgF = +0.028.  
**L17:** nd = 1.91082, νd = 35.25. Glass: 911353 — TAFD35/TAFD35L-coordinate class (supplier unproven). Standalone f = -21.901881 mm.  
**Computed cemented D6 net f = +56.419642 mm.**

D6 is the forward cemented pair of the negative rear group. L16 is the only positive element in Gr4 and is therefore the element to which Example 1's condition-(6) material value can be assigned. Table 1 publishes ΔPgF = +0.028, and the data stores that value directly on L16.

The patent states that a positive Gr4 element satisfying ΔPgF > 0.01 is used to shift the wide-end g-line lateral chromatic aberration toward the negative image-height direction and thereby aid secondary-spectrum correction (¶¶0041–0042). The data supports the published ΔPgF value, but the patent does not provide L16's nC, nF, and ng line indices. Accordingly, the analysis does not claim an independently reconstructed partial-dispersion curve or apochromatic performance.

The D6 pair is positive in isolation; Gr4 becomes negative only after L18 is included with the intervening spacing. This is another case where cemented-net and complete-group power must not be conflated.

### Gr4 — L18, Plano-Concave Negative

**nd = 1.91082, νd = 35.25. Glass: 911353 — TAFD35/TAFD35L-coordinate class (supplier unproven). Standalone f = -22.444610 mm.**

L18 is the final photographic element. The patent describes it as plano-concave, concave toward the object (¶0054). In combination with positive-net D6, it brings the complete Gr4 to the verified EFL of -37.981467 mm.

The patent's broader rationale assigns the negative rear group a role in balancing aberrations generated by the negative front group (¶0021). No more specific contribution is assigned to L18 because neither its power sign nor its glass class alone establishes a unique aberration function.

## Glass Identification and Selection

The patent publishes nd and νd but does not identify glass suppliers by trade name. The model therefore uses coordinate classes and six-digit codes where defensible, and it uses a named catalog equivalent only where a catalog glass reproduces the patent coordinate exactly.

| Stored glass label | nd | νd | Elements | Evidence level |
|---|---:|---:|---|---|
| 835427 — TAFD5G-coordinate class | 1.83481 | 42.72 | L1 | Exact catalog-coordinate match; supplier unproven |
| L-BAL42 (OHARA catalog equivalent) | 1.58313 | 59.39 | L2, L11 | Exact catalog-coordinate match to a moldable glass; supplier unproven |
| 648338 — high-dispersion flint class | 1.64769 | 33.84 | L3 | Exact coordinate-family match; supplier unproven |
| 729547 — lanthanum-crown class | 1.72916 | 54.67 | L4 | Exact coordinate-family match; supplier unproven |
| 741278 — high-dispersion flint class | 1.74077 | 27.76 | L5 | Exact coordinate-family match; supplier unproven |
| 487704 — low-dispersion crown class | 1.48749 | 70.44 | L6, L8, L12 | Exact coordinate-family match; supplier unproven |
| 773496 — TAF1 historical-coordinate class | 1.77250 | 49.62 | L7 | Matches the historical pre-2019 TAF1 coordinate; supplier unproven |
| 762266 — high-dispersion flint class | 1.76182 | 26.61 | L9 | Exact coordinate-family match; supplier unproven |
| 911353 — TAFD35/TAFD35L-coordinate class | 1.91082 | 35.25 | L10, L13, L14, L17, L18 | Exact coordinate-family match; supplier unproven |
| 517642 — BK7-class crown | 1.51680 | 64.20 | L15 | Exact coordinate-family match; supplier unproven |
| 923209 — high-index flint class | 1.92286 | 20.88 | L16 | Exact coordinate-family match; supplier unproven; patent also supplies ΔPgF = +0.028 |

HOYA's cross-reference documentation is particularly useful because it documents the six-digit code convention while warning that equivalent code entries do not imply identical chemical composition. That limitation is material here: a coordinate match supports a class or cross-reference, not proof that Konica Minolta specified a particular HOYA, CDGM, OHARA, HIKARI, SUMITA, or Schott melt.

The 1.58313/59.39 coordinate illustrates the policy. OHARA L-BAL42 reproduces it exactly, so L2 and L11 carry that label as a catalog equivalent; nearby HOYA M-BACD12 (νd 59.46) and HIKARI J-SK12 (νd 59.42) show why the label is not a supplier claim. Similarly, the TAFD35L line-index data retained in the audit evidence are catalog-candidate properties only; those nC/nF/ng values are not authored onto L10, L13, L14, L17, or L18 because the supplier/melt identity has not been proven.

L16 is the only element with prescription-specific partial-dispersion data in the final model. Its dPgF = +0.028 comes directly from Example 1's Table 1 and condition (6). That is sufficient to discuss the patent's stated ΔPgF condition, but not to assign a complete line-index model or to characterize the whole lens as apochromatic.

## Focus Mechanism

Example 1 uses inner focusing by translating Gr2a, the cemented L6+L7 pair, toward the image for closer objects (¶0050). The focus status in the data is **PUBLISHED** because the patent gives both infinity and nominal 350 mm spacing states at W/M/T. No internal motion beyond the published 0.35 m endpoint is reconstructed.

| Zoom state | D9 at infinity | D9 at nominal 0.35 m | D12 at infinity | D12 at nominal 0.35 m | Computed Gr2a imageward shift |
|---|---:|---:|---:|---:|---:|
| W | 24.477 mm | 26.783 mm | 8.055 mm | 5.750 mm | 2.306 mm |
| M | 12.027 mm | 14.553 mm | 8.055 mm | 5.530 mm | 2.526 mm |
| T | 4.313 mm | 7.123 mm | 8.055 mm | 5.246 mm | 2.810 mm |

The increase in D9 and corresponding decrease in D12 move the cemented Gr2a block imageward while keeping its neighboring anchor separation constant to within 0.001 mm, consistent with the source's three-decimal spacing precision.

The patent gives a specific chromatic reason for this focus architecture. It states that moving the positive Gr2a toward the image for nearer focus drives the wide-end g-line lateral chromatic change in the negative image-height direction, opposing the positive-direction trend that the patent describes for a wide-angle lens as object distance decreases (¶0023). Condition (2) constrains the focus sensitivity through the Gr2a and rear-system paraxial magnifications (¶0024).

The final prescription gives β2w = 2.616176 and βrw = -0.299190, hence condition (2) = -0.523156. An independent finite-difference movement of Gr2a gives the same -0.523156 image-plane sensitivity to numerical precision, confirming the first-order interpretation of the condition in the modeled prescription.

The source's “shooting distance 350 mm” datum should not be over-interpreted. The patent does not fully define that mechanical distance reference relative to d0, and the rounded close-focus rows are only approximately conjugate in a paraxial reconstruction. The data therefore treats the tabulated spacings themselves as authoritative. Separately, Leica markets a 0.25 m minimum focusing distance and describes autofocus as moving one lightweight element; neither production statement is used to invent a new patent-model focus state.

## Aspherical Surfaces

Example 1 has four aspherical surfaces on two physical elements: 3A/4A on L2 and 19A/20A on L11 (¶¶0054, 0066–0067). The patent defines the sag by

$$
z(h)=\frac{c h^2}{1+\sqrt{1-(1+K)c^2h^2}}+\sum A_j h^j,\qquad c=1/r.
$$

This is already the standard LensVisualizer conic convention: the tabulated K is the ordinary conic constant, so no $K_A\rightarrow K$ conversion is applied. All four Example-1 surfaces have K = 0. The source publishes only A4, A6, A8, and A10; omitted terms are zero. Because the prescription scale is unchanged, the coefficients are copied without scale transformation.

| Surface | K | A4 | A6 | A8 | A10 |
|---|---:|---:|---:|---:|---:|
| 3A | 0 | +9.35436e-6 | -2.36867e-8 | -3.81596e-11 | +1.25911e-13 |
| 4A | 0 | -1.01736e-5 | -2.73739e-8 | -3.93424e-10 | +5.42735e-13 |
| 19A | 0 | -4.72963e-6 | -2.06187e-8 | +8.70833e-10 | -7.66952e-12 |
| 20A | 0 | +2.08902e-5 | -2.67501e-8 | +1.02156e-9 | -8.04252e-12 |

The patent does not publish clear-aperture semi-diameters. The front and rear groups use semi-diameters measured from the patent's Figure 1 wide-angle drawing, capped by the project's geometry checks; the middle groups keep modeled values from exact meridional ray envelopes. Asphere departures quoted here are model-aperture diagnostics, not source-published manufacturing departures:

| Surface | Modeled sd | Rim departure from base conic | Maximum absolute departure within modeled sd |
|---|---:|---:|---:|
| 3A | 19.8 mm | +0.2751 mm | 0.2751 mm |
| 4A | 16.0 mm | -2.2190 mm | 2.2190 mm |
| 19A | 12.5 mm | -0.389346 mm | 0.389346 mm |
| 20A | 12.7 mm | +0.244682 mm | 0.295947 mm |

For 20A the largest absolute departure occurs inside the modeled rim rather than at it, at h = 11.8416 mm. No molding, polishing, or hybrid-manufacturing method is assigned because the patent and the verified product sources used for this analysis do not establish a manufacturing process for these particular surfaces.

## Chromatic Correction Strategy

Two chromatic mechanisms are explicitly discussed by the patent and are separable from catalog inference.

First, Gr2a's focus motion is chosen so that its focus-induced wide-end g-line lateral chromatic shift opposes the distance-dependent trend described by the patent (¶0023). This is a mechanism claim tied to the moving subgroup and the verified condition-(2) first-order sensitivity, rather than an inference from L6/L7 glass classes alone.

Second, the positive L16 in Gr4 carries the Example-1 condition-(6) value ΔPgF = +0.028. The patent requires ΔPgF > 0.01 for at least one positive Gr4 element and states that such a material can shift the wide-end g-line lateral chromatic aberration toward negative image height to aid secondary-spectrum correction (¶¶0041–0042). Example 1 satisfies that criterion through L16.

The spectral evidence stops there. The patent does not publish nC, nF, or ng for L16, and the final data does not borrow catalog line indices from a merely coordinate-compatible glass. Consequently, this analysis does not claim an independently verified secondary-spectrum magnitude, an APO designation, or a complete wavelength-dependent reconstruction from the partial-dispersion value alone.

## Conditional Expressions

JP 2018-087903 defines six principal conditions for the design family. Conditions (1)–(5) can be recomputed independently from the final Example-1 prescription and movement states. Condition (6) uses the source-published ΔPgF value because Example 1 does not publish the line indices needed to reconstruct it independently.

| Condition | Required range | Preferred range in patent | Final-model / source value | Table 2 value |
|---|---|---|---:|---:|
| (1) $f_4/f_1$ | 0.6 < value < 5.0 | 1.0 < value < 4.5 | 1.812925 | 1.813 |
| (2) $(1-\beta_{2w}^2)\beta_{rw}^2$ | -2.0 < value < -0.1 | -1.0 < value < -0.3 | -0.523156 | -0.523 |
| (3) $f_3/f_4$ | -1.5 < value < -0.3 | -1.0 < value < -0.4 | -0.720801 | -0.721 |
| (4) $f_3/f_1$ | -2.5 < value < -0.8 | -2.0 < value < -1.1 | -1.306757 | -1.307 |
| (5) $M_4/M_3$ | 0.75 < value < 0.95 | 0.8 < value < 0.9 | 0.826044 | 0.826 |
| (6) $\Delta P_{gF}$ | value > 0.01 | — | +0.028 source value | +0.028 |

The computed Example-1 values for conditions (1)–(5) lie inside both the required and the patent's stated preferred ranges. Their agreement with Table 2 is within the precision of the rounded source prescription. Condition (6) also satisfies its inequality, but its +0.028 value is a patent fact assigned to L16 rather than a calculation from independently available nC/nF/ng data.

The patent relates these conditions to different design balances: front/rear negative-group power ratio in (1), focus sensitivity in (2), Gr3/Gr4 and Gr3/Gr1 power ratios in (3) and (4), and Gr4/Gr3 zoom travel ratio in (5) (¶¶0020–0039). Those qualitative consequences are source claims; the numerical checks here establish only that Example 1 occupies the specified ranges.

## Verification Summary

The implemented prescription was recomputed directly from the final `.data.ts` values with sequential height/reduced-angle tracing and a separately implemented ABCD matrix path. The two first-order implementations agree to better than 1e-12 in the tested W/M/T states.

| State | Patent EFL | Computed final-model EFL | Patent F-number | Modeled nominal F-number |
|---|---:|---:|---:|---:|
| W | 16.400 mm | 16.398554 mm | 3.550 | 3.55 |
| M | 23.700 mm | 23.697415 mm | 4.100 | 4.10 |
| T | 34.200 mm | 34.194222 mm | 4.600 | 4.60 |

The f-number agreement needs a specific qualification. The patent supplies the stop plane but no physical diaphragm diameter. The wide-state authored `STO.sd = 8.057096 mm` is calibrated to reproduce the published f/3.55 behavior, and the state-dependent wide-open pupil model is likewise calibrated to the published f-number sequence. It is therefore not independent evidence of the manufactured iris diameter.

The same distinction applies to surface semi-diameters. They are not patent dimensions: Gr1 and Gr4 follow rims measured on the patent's Figure 1 drawing, and the middle groups keep ray-envelope values. Three rims sit a little inside the drawing (S2 at 17.9 mm, 4A at 16.0 mm and S30 at 10.9 mm) because larger values would make neighboring surfaces overlap under the project's 90% air-gap intrusion limit. At all three zoom stations, at infinity and at the 0.35 m state, an exact meridional trace passes the axial marginal ray at the published f-number without clipping. The chief ray to the 21.6 mm image-circle edge also clears every rim at the middle and tele stations. At the wide end the chief-ray check only reaches about 49° and a 17.7 mm image height, because the real-ray search stops converging near the steeply curved S2 surface; up to that height nothing clips. These are finite model checks; they do not measure the production lens.

The source rear plate PT consists of 1.400 mm of nd = 1.51680 glass followed by 0.500 mm of air before the image plane. Because the active model excludes that cover/filter-class plate, D31 receives the air-equivalent contribution

$$
1.400/1.51680 + 0.500 = 1.4229957806\ \mathrm{mm}.
$$

The resulting active D31 values are 17.9229957806, 24.6469957806, and 34.8089957806 mm at W/M/T. Direct matrix comparison of the raw PT branch and the normalized air-equivalent branch agrees to floating-point precision, so the first-order transfer is preserved. The shorter geometric track in the normalized model is an expected consequence of replacing physical glass thickness with its reduced optical distance, not a correction to the patent.

The d-line surface-by-surface Petzval calculation uses $\phi/(n n')$ at each refracting interface. Its sum is +0.001662133491 mm⁻¹, corresponding to a paraxial Petzval radius of about +601.636 mm under the verifier's sign convention. This is a first-order curvature quantity; it should not be confused with the patent's full astigmatic field curves.

The remaining construction limitations are explicit: production render diagnostics, real LensVisualizer runtime glass resolution, repository `buildLens()` validation, TypeScript typechecking, and repository formatting/test integration are outside this portable model record. They do not change the source/model distinction made above.

## Sources and References

1. Japan Patent Office, **JP 2018-087903 A**, “ズームレンズ，撮像光学装置及びデジタル機器,” published 2018-06-07. Example 1: ¶¶0050–0054, 0060–0069; condition Tables 1–2 on printed page 24; optical layout Figure 1 on printed page 25. Google Patents mirror: https://patents.google.com/patent/JP2018087903A/ja
2. Leica Camera AG, **Technical Specifications — Super-Vario-Elmar-SL 16-35 f/3.5-4.5 ASPH.** Production specifications for element/group count, aspherical surfaces, L-Mount/full-frame format, aperture, and 0.25 m working range: https://leica-camera.com/en-int/photography/lenses/sl/super-vario-elmar-sl-16-35mm-f3-5-4-5-asph-black/technical-specification
3. Leica Camera AG, **Press Release — Versatile wide-angle lens: Super-Vario-Elmar-SL 16–35/3.5–4.5 ASPH. expands the SL-System** (2018). Used for the production autofocus description that a single lightweight focusing element is moved: https://leica-camera.com/en-GB/Company/Press-Centre/Press-Releases/2018-not-urgent-translatable/Press-Release-Versatile-wide-angle-lens-Super-Vario-Elmar-SL-16%E2%80%9335-3.5%E2%80%934.5-ASPH.-expands-the-SL-System
4. Leica Camera AG, **Super-Vario-Elmar-SL 16-35 f/3.5-4.5 ASPH. — Discover**. Current product description and close-focus statement: https://leica-camera.com/en-int/photography/lenses/sl/super-vario-elmar-sl-16-35mm-f3-5-4-5-asph-black/discover
5. HOYA Corporation Optics Division, **Glass Cross Reference Index**. Used for six-digit coordinate classes and the warning that cross-referenced glasses need not have identical composition: https://www.hoya-opticalworld.com/english/products/crossreference.html
6. HOYA Corporation Optics Division, **2019 optical-glass data change history**. Used for the historical TAF1 νd 49.62→49.63 precision update: https://www.hoya-opticalworld.com/english/datadownload/data_up2019.html
7. HOYA Corporation Optics Division, **TAFD35L optical glass property sheet**. Used only as catalog-candidate provenance for the 1.91082/35.25 coordinate; its line indices are not assigned to the patent elements: https://www.hoya-opticalworld.com/common/pdf2022/TAFD35L.pdf
8. Chengdu Guangming Optical Co., Ltd. (CDGM), **Optical glass catalogue/search records**. Used for coordinate-class cross-checks; supplier identity is not inferred from coordinate equality: https://www.cdgmglass.com/
