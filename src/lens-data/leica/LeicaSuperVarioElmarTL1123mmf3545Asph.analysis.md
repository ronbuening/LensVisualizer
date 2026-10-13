## Patent Reference and Design Identification

**Lens:** LEICA SUPER-VARIO-ELMAR-TL 11-23mm f/3.5-4.5 ASPH.  
**Patent:** JP 2016-133764 A  
**Filed:** 22 January 2015  
**Published:** 25 July 2016  
**Inventors:** Atsuo Masui; Yasunari Fukuda  
**Applicant:** Konica Minolta, Inc.  
**Title:** Zoom lens, image capturing optical device, and digital device  
**Embodiment analyzed:** Example 6

The prescription implemented here is Example 6 of JP 2016-133764 A. The patent describes an ultra-wide zoom family whose first group is negative, whose second group is positive and moves with the aperture stop, and whose rear groups provide additional zoom and correction degrees of freedom. Example 6 is the negative-positive-negative-negative member of that family. The numerical construction is printed on patent pages 23–24, the Example 6 zoom drawing is Figure 6 on page 30, and the patent-wide conditional-expression summary is Table 1 on page 28 (JP 2016-133764 A, ¶¶0068, 0076, 0110–0113; Fig. 6; Table 1).

The association with the production Leica Super-Vario-Elmar-TL 11-23mm f/3.5-4.5 ASPH. is strong but remains an inference rather than a Leica-confirmed patent attribution. The convergence is unusually specific:

1. Leica specifies **14 lenses in 11 groups**, while Example 6 contains 14 physical glass elements and 11 optical groups once the three 0.010 mm generic cement media in the patent table are not counted as lens elements.
2. Leica specifies **four aspherical surfaces**. Example 6 has exactly four, at source surfaces 3, 4, 20, and 21.
3. Example 6 publishes focal lengths of 11.300, 16.822, and 22.347 mm and maximum f-numbers of 3.600, 4.183, and 4.610. Those design values closely bracket the marketed 11–23 mm f/3.5–4.5 range without requiring a uniform scale factor.
4. Example 6 publishes diagonal full fields of approximately 102.98° at the wide end and 64.87° at the tele end from its half-angle data. Leica's September 2014 technical sheet gives approximately 103° and 65° at the corresponding endpoints.
5. Example 6 uses a 14.2 mm image semi-height, or a 28.4 mm image circle diameter, consistent with the APS-C production format recorded by Leica.
6. Leica's 2014 engineering drawing at 11, 19, and 23 mm closely follows the Example 6 element sequence and zoom-state silhouette, including the large negative front group and compact rear groups.
7. Leica announced the lens at photokina 2014 and stated dealer availability from January 2015. The patent application was filed shortly afterward, on 22 January 2015. This chronology is compatible with a development relationship but does not establish one.

The principal limitation is attribution: the patent applicant is Konica Minolta, Inc., not Leica Camera AG, and no Leica primary source located in the dossier states that JP 2016-133764 A, Example 6 is the production prescription. The model therefore keeps the product identity and the patent source distinct. Leica's marketed 11–23 mm and f/3.5–4.5 specifications are product metadata; the optical prescription retains the Example 6 design scale.

The data file uses the current canonical production metadata `l-mount` and `aps-c`. Leica's 2014 document called the interface the Leica T quick-change bayonet; Leica's current product page identifies the same system under the Leica L bayonet naming.

## Optical Architecture

Example 6 is a four-component, negative-leading ultra-wide zoom with the zoom-group power sequence **negative-positive-negative-negative**. In the final model, the four moving groups have paraxial focal lengths of approximately -17.760 mm, +19.816 mm, -32.975 mm, and -117.124 mm, respectively. These are in-situ group powers computed from the final normalized prescription; they are not the same quantity as the standalone focal length assigned to any one glass element.

The patent's 14 elements form 11 optical groups in the production-style count, while the four `Gr1`–`Gr4` annotations in the data file are kinematic zoom groups. Those two uses of “group” should not be conflated.

**Group 1 (Gr1)** is the large negative front assembly. The patent divides it into a negative front subgroup `Gr1F` and a positive rear subgroup `Gr1R` (JP 2016-133764 A, ¶¶0025–0029, 0061, 0076). In the final model `Gr1F` computes to about -15.943 mm and `Gr1R` to +161.868 mm. The patent states that the rear subgroup is positioned to control the zoom-dependent longitudinal chromatic variation that otherwise grows in very wide negative-front zooms, while the all-negative front subgroup is used to keep the front diameter from becoming unnecessarily large. It also specifically calls for at least one aspherical surface in the front subgroup to assist distortion correction (¶¶0026–0028, 0038–0039).

**Group 2 (Gr2)** is the principal positive variator. The aperture stop lies immediately in front of this group and moves with it during zooming (¶¶0062, 0068). Example 6 gives Gr2 a mixture of positive and negative elements, including one cemented pair and a rear biconvex element with two aspherical surfaces. The positive group power is therefore distributed across several separated elements rather than concentrated in a single strong lens.

**Group 3 (Gr3)** is a cemented negative doublet. The patent describes independent Group 3 motion as a means of improving image-plane correction during zooming and notes that a cemented Group 3 can add chromatic correction without giving up that motion degree of freedom (¶¶0045, 0055). Its final-model net focal length is about -32.975 mm.

**Group 4 (Gr4)** is a weak negative cemented doublet with a final-model net focal length of about -117.124 mm. The patent's preferred four-component architecture places negative power in the rear groups to keep the rear lens diameter compact and describes a positive-plus-negative cemented Group 4 as useful for lateral chromatic correction (¶¶0044, 0049–0053).

The zoom motion is not a simple two-group separation. With the image plane fixed, the verified W-to-T movement of the group fronts is approximately +13.061 mm for Gr1 (imageward), -10.120 mm for Gr2, -7.088 mm for Gr3, and -7.166 mm for Gr4 (negative values are objectward in this coordinate convention). The Gr3-to-Gr4 gap is non-monotonic: source spacing `d25` changes 3.476 → 3.313 → 3.398 mm from wide to middle to tele, matching the reversal shown schematically in Figure 6.

The final normalized model computes effective focal lengths of **11.307818 mm**, **16.834058 mm**, and **22.365965 mm** at the wide, middle, and tele control states. Its corresponding back focal distances are **15.564063 mm**, **19.737255 mm**, and **22.739892 mm**. Because BFD exceeds EFL at all three states, the design satisfies the project's strict retrofocus criterion throughout the published zoom range. The total track divided by EFL remains well above unity at all three states, so it does not satisfy the project's strict telephoto criterion.

No uniform scaling is applied. The implemented prescription remains at source scale, `s = 1`.

## Element-by-Element Analysis

The focal lengths in this section are **standalone thick-element focal lengths recomputed from the final data file**. They describe each element isolated in air and are useful for sign and relative-strength checks. They do not represent the element's in-situ contribution inside a cemented pair or moving zoom group.

### L1 — Negative Meniscus

**nd = 1.72916, νd = 54.67. Glass: 729547 — lanthanum crown class (supplier unproven). f = -37.133 mm.**

L1 is the first member of the negative front subgroup. Its large clear aperture (about 20.2 mm semi-diameter, derived from the patent's condition (3) value) and negative meniscus form are consistent with the patent's objective of obtaining more than 100° full field while distributing the front-group negative power across two lenses rather than one very strong surface pair. The patent assigns the front subgroup a negative role as a unit; it does not isolate an aberration contribution specifically to L1.

### L2 — Negative Meniscus, Two Aspherical Surfaces

**nd = 1.80866, νd = 40.41. Glass: L-LAH84 spectral proxy (patent 809404 coordinate; low-Tg class inferred; supplier unconfirmed). f = -32.887 mm.**

L2 completes the negative front subgroup and carries aspherical surfaces `3A` and `4A`. This is the element for which the patent's preferred front-subgroup asphere requirement is realized in Example 6. The patent ties that front-subgroup aspheric freedom to distortion control in the very wide field (¶0038), but the numerical decomposition does not justify assigning a specific measured distortion contribution to L2 alone.

The catalog audit found no current authoritative glass row that exactly reproduces 1.80866/40.41. The nearest catalog glass is OHARA L-LAH84 (1.80835/40.55, Δnd −0.0003, Δνd +0.14), a low-Tg glass of the kind used for precision-molded aspheres; HOYA MC-NBFD135 (1.80834/40.92) and Sumita K-VC89 (1.8100/40.95) are further away. The data file keeps the patent nd/νd and uses L-LAH84 only as a named spectral proxy for dispersion, not as a claimed production identity. That L2 is molded is itself an inference from its two strong aspheres and the low-Tg-type coordinate; the patent does not say so.

### L3 — Positive Meniscus

**nd = 1.69895, νd = 30.05. Glass: 699301 — dense flint class (supplier unproven). f = +38.091 mm.**

L3 begins the positive rear subgroup of Gr1. Together with L4 it forms the patent's chromatic-correction rear subgroup, which is net positive even though its second element is negative. The unusually low Abbe number of this positive member is part of the specific dispersion contrast used by condition (2).

### L4 — Biconcave Negative

**nd = 1.49700, νd = 81.61. Glass: 497816 — ultra-low-dispersion crown class (supplier unproven). f = -44.804 mm.**

L4 is the negative second member of the Gr1 rear subgroup. Its high Abbe number contrasts strongly with L3: the verified difference is 51.56. The patent explicitly uses the absolute difference between the positive and negative rear-subgroup Abbe numbers as condition (2), linking this pair to longitudinal chromatic control in Gr1 (¶¶0025–0028). The two elements are air-spaced in Example 6 rather than cemented.

### L5 — Positive Meniscus

**nd = 1.59551, νd = 39.24. Glass: 596392 — flint class (supplier unproven). f = +39.324 mm.**

L5 is the first powered element behind the stop in Gr2. It is a moderate positive element ahead of the more complex alternating-power core of the variator. The patent specifies the overall Gr2 architecture but does not assign an independent named aberration function to L5.

### L6 — Negative Meniscus, D1 Front Member

**nd = 1.91082, νd = 35.25. Glass: 911353 — high-index lanthanum dense flint class (supplier unproven). f = -26.886 mm.**

L6 is the negative member of cemented pair D1. In the final active model its rear surface is cemented directly to L7; the patent's intervening 0.010 mm generic cement medium is omitted under the documented normalization. The standalone negative power should therefore not be read as the power of D1 itself.

### L7 — Biconvex Positive, D1 Rear Member

**nd = 1.49700, νd = 81.61. Glass: 497816 — ultra-low-dispersion crown class (supplier unproven). f = +14.784 mm.**

L7 is the strong positive member of D1. The normalized D1 pair is net positive, with a computed cemented-pair focal length of about +32.563 mm. This illustrates why standalone element powers and cemented net power must be kept separate: the +14.784 mm isolated value of L7 is not the in-situ focal length of the pair.

### L8 — Biconcave Negative

**nd = 1.91082, νd = 35.25. Glass: 911353 — high-index lanthanum dense flint class (supplier unproven). f = -16.374 mm.**

L8 is a strong negative singlet inside positive Gr2. It follows D1 and precedes L9. Its placement provides another independent power surface set within the variator, but the patent does not identify a unique aberration term attributable to L8 by itself.

### L9 — Biconvex Positive

**nd = 1.49700, νd = 81.61. Glass: 497816 — ultra-low-dispersion crown class (supplier unproven). f = +24.018 mm.**

L9 restores positive power after L8 within Gr2. The same 497816 coordinate is used in L4 and L7, but the repeated glass class does not imply identical optical function: L9 operates inside the moving positive variator rather than the front chromatic subgroup.

### L10 — Biconvex Positive, Two Aspherical Surfaces

**nd = 1.58313, νd = 59.38. Glass: 583594 — barium/crown class (supplier unproven). f = +36.829 mm.**

L10 is the rear element of Gr2 and carries aspherical surfaces `20A` and `21A`. It sits immediately before the variable Gr2-to-Gr3 gap, so its aspherical figure operates at the boundary between the positive variator and the first rear negative group. The patent provides the aspheric coefficients but does not state a manufacturing process or isolate a single aberration term to this element.

### L11 — Biconvex Positive, D2 Front Member

**nd = 1.84666, νd = 23.78. Glass: 847238 — high-dispersion/high-transmission flint class (supplier unproven). f = +16.931 mm.**

L11 is the positive member of the cemented Group 3 doublet. Its low Abbe number is paired with the higher-Abbe negative L12. Although the isolated L11 is strongly positive, the complete cemented pair is negative.

### L12 — Biconcave Negative, D2 Rear Member

**nd = 1.77250, νd = 49.62. Glass: 773496 — lanthanum high-index class (supplier unproven). f = -10.940 mm.**

L12 supplies the stronger isolated negative power in D2. The complete Gr3/D2 pair computes to approximately -32.975 mm in the final model. The patent specifically identifies a cemented Group 3 as a configuration that can add chromatic correction while retaining the desired independent zoom motion (¶0055); it does not quantify the individual share carried by L11 or L12.

### L13 — Biconvex Positive, D3 Front Member

**nd = 1.61800, νd = 63.39. Glass: 618634 — phosphate crown class (supplier unproven). f = +15.323 mm.**

L13 is the positive front member of the Group 4 cemented doublet. Its Abbe number is substantially higher than L14's, forming the dispersion contrast used by condition (7).

### L14 — Negative Meniscus, D3 Rear Member

**nd = 1.90366, νd = 31.31. Glass: 904313 — high-index lanthanum flint class (supplier unproven). f = -13.139 mm.**

L14 completes the weak negative Group 4 doublet. The cemented pair computes to approximately -117.124 mm even though the isolated members are much stronger and of opposite sign. The verified Abbe-number difference between L13 and L14 is 32.08, matching Table 1 condition (7). The patent associates this positive/negative Group 4 pairing and its dispersion difference with lateral chromatic correction in the rear group (¶¶0049–0053).

## Glass Identification and Selection

The patent supplies d-line refractive index and νd, not vendor glass names. The dossier therefore audits coordinates against authoritative OHARA, HOYA, SCHOTT, HIKARI, SUMITA, and CDGM catalogs but does not infer a production supplier from Leica branding. The final data file uses six-digit classes, plus one explicitly labelled spectral proxy for L2 where no exact catalog row exists.

| Data-file glass label | nd | νd | Elements | Representative authoritative catalog evidence |
|---|---:|---:|---|---|
| 729547 — lanthanum crown class | 1.72916 | 54.67 | L1 | HOYA TAC8 exact coordinate; OHARA S-LAL18 nearly exact |
| L-LAH84 spectral proxy (809404 coordinate) | 1.80866 | 40.41 | L2 | OHARA L-LAH84 1.80835/40.55 nearest (proxy only); no exact named row established |
| 699301 — dense flint class | 1.69895 | 30.05 | L3 | HOYA E-FD15L exact coordinate; OHARA S-TIM35 close |
| 497816 — ultra-low-dispersion crown class | 1.49700 | 81.61 | L4, L7, L9 | SCHOTT N-PK52A and CDGM H-FK61 exact; OHARA S-FPL51 close |
| 596392 — flint class | 1.59551 | 39.24 | L5 | OHARA S-TIM8 exact; HIKARI J-F8 close |
| 911353 — high-index lanthanum dense flint class | 1.91082 | 35.25 | L6, L8 | HOYA TAFD35/TAFD35L exact coordinate |
| 583594 — barium/crown class | 1.58313 | 59.38 | L10 | OHARA S-BAL42 exact; CDGM D-ZK2 same coordinate pair |
| 847238 — high-dispersion/high-transmission flint class | 1.84666 | 23.78 | L11 | OHARA S-TIH53W, HOYA FDS90-SG, and CDGM equivalents reproduce the coordinate |
| 773496 — lanthanum high-index class | 1.77250 | 49.62 | L12 | SCHOTT N-LAF34 exact; HOYA TAF1 and OHARA S-LAH66 family close |
| 618634 — phosphate crown class | 1.61800 | 63.39 | L13 | SCHOTT N-PSK53A and CDGM H-ZPK1A exact |
| 904313 — high-index lanthanum flint class | 1.90366 | 31.31 | L14 | HOYA TAFD25 and OHARA S-LAH95 are near-exact class matches |

These catalog matches establish coordinate compatibility, not production supplier or exact melt identity. The final file intentionally carries no `nC`, `nF`, `ng`, or `dPgF` fields. Candidate catalog line indices retained in the evidence record are provenance for the glass audit only; they are not treated as patent-published spectral data. Consequently this analysis does not claim apochromatic behavior. The three 497816 elements (L4, L7, L9) are tagged as inferred anomalous-dispersion (ED-class) glass, because every catalog glass at that coordinate (N-PK52A, H-FK61, S-FPL51 class) is a fluor-phosphate crown with positive partial-dispersion deviation; the patent itself does not call them ED or anomalous.

The most explicit chromatic design statements come from the patent itself. In Gr1, the positive L3 / negative L4 rear subgroup uses a large νd difference, and condition (2) constrains that difference. In Gr4, condition (7) performs the analogous function for the positive L13 / negative L14 cemented pair. Group 3 is also cemented, and the patent presents that alternative as a way to add chromatic correction while keeping Group 3's zoom motion (¶0055). These are patent-level design relationships; they should not be confused with a wavelength-resolved chromatic trace of the final data file.

## Focus Mechanism

The optical focus mechanism is **not reconstructed**. The model's focus status is `NO_INTERNAL_RECONSTRUCTION`.

JP 2016-133764 A publishes the Example 6 wide, middle, and tele prescriptions as infinity-focus states and describes zoom motion, but it does not provide close-focus internal spacings for Example 6 (¶0082 and Example 6 data). Leica specifies a production focusing range of 0.2 m to infinity and electronic AF/M operation, but those product facts do not identify which internal element or group moves, the travel at each zoom position, or the coupled spacing law.

Accordingly, the final data file repeats every zoom-variable spacing at both focus endpoints. Moving the LensVisualizer focus control therefore does not create an invented optical state. The stored `closeFocusM: 0.2` is production metadata only; it is not evidence that the modeled prescription reproduces the lens at 0.2 m.

No focus travel, close-focus magnification, breathing value, or focus-group identity is claimed because the available primary sources do not determine them.

## Aspherical Surfaces

Example 6 has four aspherical surfaces: source surfaces 3 and 4 on L2, and source surfaces 20 and 21 on L10. In the data file they are labeled `3A`, `4A`, `20A`, and `21A`.

The patent defines the sag equation on page 15, ¶0080, as

$$
z(h)=\frac{c h^2}{1+\sqrt{1-(1+K)c^2h^2}}+\sum A_jh^j,
$$

where $c=1/R$. This is the same conic convention used by the data schema, so no conversion of `K` is required. Example 6 prints `K = 0` for all four aspheres, giving a spherical conic base plus even polynomial terms. No uniform dimensional scaling is applied, so the published coefficients are carried directly into the data file.

| Surface | K | A4 | A6 | A8 | A10 | A12 | A14 | A16 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 3A | 0 | 1.0337e-04 | -6.9267e-07 | 2.1776e-09 | -2.3084e-12 | -4.4223e-15 | 8.5082e-18 | 0 |
| 4A | 0 | 9.3550e-05 | -6.4639e-07 | -4.1522e-09 | 4.3696e-11 | -1.5519e-13 | 9.3357e-17 | 0 |
| 20A | 0 | -3.9538e-05 | 6.2938e-07 | -5.5458e-09 | 1.1762e-10 | 0 | 0 | 0 |
| 21A | 0 | 1.1097e-05 | 5.2217e-07 | -5.2545e-09 | 1.1053e-10 | 0 | 0 | 0 |

The semi-diameters used by the visualization are modeled rather than patent-published, so the departures below are explicitly model-aperture quantities. They are the computed sag difference between the full asphere and its `K = 0` spherical conic base at the final authored semi-diameter:

| Surface | Modeled semi-diameter (mm) | Computed departure at that radius (mm) |
|---|---:|---:|
| 3A | 14.50 | +1.211 |
| 4A | 12.00 | −0.334 |
| 20A | 7.80 | +0.017 |
| 21A | 7.80 | +0.179 |

On `3A` and `4A`, the positive fourth-order terms dominate the low-order departure. On `4A` the higher orders take over near the rim: its departure peaks at about +0.20 mm near 9 mm height and turns negative by 12 mm, where the surface slope also levels off near 43°. The modeled 4A semi-diameter is capped there. On `20A`, the fourth-order coefficient is negative but the higher-order terms make the net modeled-rim departure positive; that is a useful reminder that the sign of `A4` alone is not a complete description of the surface. `21A` also has a positive net modeled departure. These statements describe the polynomial geometry, not a separately isolated aberration contribution.

Neither the patent passage used here nor the Leica technical sheet establishes whether these surfaces were glass-molded, polished, or made by another asphere process. No manufacturing method is therefore assigned.

## Conditional Expressions and Source Discrepancies

The patent places substantial design weight on seven conditional expressions. Example 6 also exposes three source inconsistencies that should remain visible rather than being reconciled silently.

| Condition | Printed expression / bound | Verified Example 6 result | Table 1 | Disposition |
|---|---|---:|---:|---|
| (1) | -10 < (CR1-CR2)/(CR1+CR2) < -1.5 | -0.133990 literal | -7.463 | Printed algebra does not reproduce Table 1. The reciprocal form gives -7.463262. |
| (2) | 5 < \|νp-νn\| < 60 | 51.56 | 51.5 | Reproduces to table precision and satisfies the bound. |
| (3) | 0.3 < R1/ωw < 0.5 | 20.18 mm implied R1 | 0.392 | R1 (有効径, first-lens effective size) is not printed separately; 0.392 × 51.489° gives 20.18 mm. Read as a radius, this sets the modeled L1 front semi-diameter of 20.2 mm; a diameter reading (10.1 mm radius) would block the wide-end chief ray. |
| (4) | -0.25 < f1F/f1R < -0.10 | -0.098491 | -0.1005 | Direct prescription result differs from Table 1 and falls just outside the printed strict upper bound. |
| (5) | 0.06 < T1/Lmax < 0.12 | 0.118150 | 0.118 | Reproduces and satisfies the bound. |
| (6) | 2 < f4/f3 < 4 | 3.552469 raw source; 3.551926 final model | 3.410 | Table value is not reproduced, but both direct values satisfy the stated inequality. |
| (7) | 5 < \|ν4p-ν4n\| < 50 | 32.08 | 32.080 | Reproduces and satisfies the bound. |

For condition (1), the discrepancy is systematic rather than unique to Example 6. Re-evaluating Examples 1–8 shows that Table 1 agrees with `(CR1+CR2)/(CR1-CR2)` to its printed precision, whereas the formula printed in the claims, description, and Table 1 heading has the numerator and denominator in the opposite order. The reciprocal interpretation is therefore a supported source-error diagnosis, not a silent rewrite of the patent. The raw printed expression remains the source record.

Condition (4) is different: there is no comparable algebraic reversal. The directly computed Gr1 front/rear subgroup ratio is -0.0984907, whereas Table 1 prints -0.1005. A source-precision perturbation test does not explain the difference. The table value would satisfy the strict bound; the rounded prescription as printed does not.

Condition (6) likewise remains a source discrepancy. The printed group focal lengths themselves imply approximately 3.552, consistent with the direct prescription matrix and not with Table 1's 3.410. The discrepancy does not affect whether the example lies within the broad 2–4 inequality.

## Modeling Transformations and Verification

The LensVisualizer data does not reproduce three 0.010 mm, `nd = 1.51400` generic cement media as synthetic elements. At the equal-radius boundaries corresponding to source surfaces 13/14, 23/24, and 27/28, the cement medium is collapsed into a direct physical-glass junction and the 0.010 mm thickness is added to the downstream physical element. The resulting downstream thicknesses are 4.138, 0.710, and 0.810 mm.

This transformation preserves every downstream axial station and the total front-vertex-to-image track, but it is not optically neutral because 0.010 mm of cement index is replaced by physical glass. Across W/M/T the resulting EFL shifts relative to the raw source replay are approximately +0.010, +0.016, and +0.023 mm, while the BFD shifts are approximately +0.027, +0.035, and +0.041 mm. The final `focalLengthDesign` values therefore describe the normalized implemented model, not the raw patent table.

The surface-by-surface Petzval sum is computed as $\phi/(n n')$ at each refracting surface. The final model gives **0.00489834418137 mm⁻¹**. Because the cement layers were collapsed at equal-radius interfaces, their Petzval contributions telescope exactly; the summed Petzval value is unchanged by the normalization to numerical precision.

The aperture-stop axial plane is source-published, but its physical diameter is not. The data file stores the printed F-numbers **3.600**, **4.183**, and **4.610** as `nominalFno` and uses the calculated `from-nominal-fno` aperture model: the builder traces each station's nominal entrance-pupil radius back to the stop, giving inferred iris radii of about 5.54, 5.41 and 5.40 mm at W/M/T. A single fixed iris would reproduce f/3.6 at the wide end but only about f/4.07 and f/4.47 at the middle and tele stations, so the printed schedule implies a slightly smaller iris at longer focal lengths. These radii are inferred from the F-numbers, not patent-published diaphragm diameters.

Lens semi-diameters are also modeled rather than patent-published. The L1 front value of 20.2 mm is derived from the patent's condition (3) entry, as described above. The rest of Gr1 and the two rear cemented doublets were enlarged toward the Figure 6 wide-state drawing, within the limits set by rim slope, air-gap clearance, edge thickness and the 4A slope plateau: roughly 14.0–14.8 mm for L1's rear surface and L2, 10.2–10.8 mm for L3 and L4, 7.2–7.5 mm for D2 and 8.0 mm for D3. In Gr2, L5 and the D1 cemented and rear rims keep their earlier ray-traced values (about 6.95–7.05 mm). L6's front, L8, L9 and L10 were trimmed toward the figure, where they read about 6.6, 6.7, 7.3 and 7.7 mm, to 7.1, 7.0–7.1, 7.5–7.6 and 7.8 mm. This restores the drawing's proportions, with L10 about as tall as D2 and D3 the tallest rear element; it only adds ordinary side vignetting of the off-axis beam (about 30 % at L9–L10). The earlier, smaller front-group values blocked the wide-end chief ray.

At the wide end, this prescription cannot trace real rays to the printed 14.2 mm image height. The printed ω = 51.489° is exactly atan(14.2 / 11.3), a paraxial value. Figure 14 shows about −10 % barrel distortion at the wide-end 14.2 mm corner, and in the model the real chief ray at 51.489° lands at 12.79 mm. L1's nearly hemispherical rear surface (R = 16.711 mm) runs to 14.8 mm to pass that chief ray, so the wide state's real field extends to about 53.0° (13.34 mm, 94% of the APS-C corner), where the 4A rim clips it. The middle and tele states reach 14.2 mm. The production lens may rely on in-camera distortion correction for the corners, but no source used here documents that.

## Sources and References

1. **Japan Patent Office.** JP 2016-133764 A, *Zoom lens, image capturing optical device, and digital device*, published 25 July 2016. Example 6 prescription and asphere data: pp. 23–24, ¶¶0110–0113; asphere equation: p. 15, ¶0080; Example 6 layout: Fig. 6, p. 30; conditional-expression summary: Table 1, p. 28.
2. **Leica Camera AG.** *LEICA SUPER-VARIO-ELMAR-T 11-23 mm f/3.5-4.5 ASPH. — Technical data*, September 2014. https://leica-camera.com/sites/default/files/pm-56109-Technical-Data-Leica-Super-Vario-Elmar-T%2011-23%20ASPH._EN.pdf
3. **Leica Camera AG.** *Super-Vario-Elmar-TL 11-23 f/3.5-4.5 ASPH.* Current product page. https://leica-camera.com/en-US/photography/lenses/cl-tl/super-vario-elmar-tl-11-23mm-f3-5-4-5-asph
4. **Leica Camera AG.** *New lenses for the LEICA T camera system*, photokina 2014 press release. https://leica-camera.com/fr-CH/Company/Press-Centre/Press-Releases/Photokina-2014/Press-Release-New-lenses-for-the-LEICA-T-camera-system
5. **OHARA Corporation.** Optical glass catalog and product data. https://oharacorp.com/optical-glass/
6. **HOYA Corporation.** HOYA Optics optical glass catalog and cross-reference data. https://www.hoya-opticalworld.com/english/
7. **SCHOTT.** Advanced Optics optical glass data. https://www.us.schott.com/shop/advanced-optics/en/Optical-Glass/
8. **HIKARI Glass Co., Ltd.** Optical glass catalog. https://www.hikari-g.co.jp/optical_glass/catalog/
9. **SUMITA Optical Glass, Inc.** Optical glass catalog. https://www.sumita-opt.co.jp/download/
10. **CDGM / Chengdu Guangming Optoelectronic Corp.** Optical glass database. https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database
