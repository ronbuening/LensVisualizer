# Sony FE 14mm f/1.8 GM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** WO 2021/199923 A1  
**Application Number:** PCT/JP2021/008823  
**Priority:** JP 2020-065177, 31 March 2020  
**Filed:** 5 March 2021  
**Published:** 7 October 2021  
**Inventors:** Takumu Yamada; Dai Matsuoka (松岡 大; the WO front page romanizes the given name "Ora")  
**Applicant:** Sony Group Corporation  
**Title:** Imaging Lens and Imaging Device  
**Embodiment analyzed:** Numerical Example 1

Numerical Example 1 is the prescription transcribed for the Sony FE 14mm f/1.8 GM. The identification rests on convergent patent and production data rather than on a single matching parameter. The patent prescription has 14 glass elements, two cemented doublets, a zero-spacing L3/L4 contact pair, and six aspherical surfaces on three elements. Sony's published production specification gives 14 elements in 11 groups, full-frame E-mount coverage, a 14 mm focal length, f/1.8 nominal aperture, 114° diagonal angle of view, 0.25 m minimum focus distance, and 460 g mass. Sony's product description also identifies two XA elements, one Super ED element, two ED elements, and XD Linear Motor focusing. These correspond directly to L1/L7 as the high-curvature aspherical elements, L8 as the νd = 95.1 Super-ED element, L3 and L9 as the ED elements, and L8-L13 as the patent's moving inner-focus subgroup.

The patent's Example 1 numerical table gives f = 14.42 mm and Fno = 1.85. These are consistent with the production lens being rounded and marketed as a 14 mm f/1.8 lens. The patent's close-focus state is given at 250 mm, matching the official 0.25 m minimum focus distance when measured as the usual object-to-image distance.

One patent-data caveat remains: Table 2 reports image height Y = 4.02 and semi-field angle ω = 31.13°, while Table 1 gives an image-plane effective diameter of 43.33 mm. Those values are not mutually consistent with a 14.42 mm rectilinear full-frame field, and they are not used as the production format basis in the data file. The production metadata uses Sony's full-frame FE specification and the patent's 43.33 mm image-plane clear diameter; the ray trace itself uses the Table 1 prescription and Table 3 focus spacings.

## Optical Architecture

The design is a full-frame retrofocus ultra-wide-angle prime with 14 elements arranged as a front group G1, an aperture stop, and a rear group G2. The production grouping is 11 groups: L3 and L4 are separated by a zero air gap in the prescription and are therefore distinct optical elements but counted as a single practical contact group in the product specification.

G1 contains the retrofocus field-expanding structure. Although the whole group has weak positive paraxial power, its front section is strongly negative: L1, L2, and L3 are negative elements, followed by a positive L4, a cemented negative-positive doublet LN (L5-L6), and the positive aspherical LP element L7 immediately before the stop. The independently computed focal length of G1 is +202.73 mm.

G2 is the principal imaging relay. Its independently computed focal length is +42.48 mm. It begins with the Super-ED positive element L8, includes the ED/flint cemented doublet L9-L10 and very-high-index positive L11, then uses L12, the L12-L13 air lens LA, and the rear aspherical L13 for field flattening and off-axis correction. L14 is a stationary rear positive meniscus for final chief-ray and field correction.

The verified system effective focal length is 14.4219 mm. The back focal distance is 15.44 mm, giving BF/f = 1.071. The total optical length is 114.70 mm, so the track/EFL ratio is 7.95. This is not a telephoto ratio; it is the expected long track ratio of a fast retrofocus ultra-wide system.

## Element-by-Element Analysis

### L1 — Negative Meniscus, Aspherical on Both Surfaces

ne = 1.58547, νd = 59.5. Glass: M-BACD12 (HOYA) moulding dense barium crown, from the exact e-line match; supplier unconfirmed. f = -50.31 mm.

L1 is the first negative field-expanding element and one of the two high-precision XA-positioned aspheres in the production design. Its high curvature is necessary for a 14 mm full-frame entrance field, but the glass choice is also weight-driven: the patent's condition (10) constrains the specific gravity of the first negative meniscus, and the Example 1 value SL1 = 3.01 satisfies that range. HOYA lists the same specific gravity, 3.01, for M-BACD12.

Surface 1 has a spherical-base conic with polynomial correction. Surface 2 uses K = -0.594, reducing the growth of peripheral sag relative to a spherical base. The paired aspheres distribute the front-element correction rather than forcing all higher-order correction onto the rear surface.

### L2 — Negative Meniscus

ne = 1.73234, νd = 54.7. Glass: TAC8 (HOYA) lanthanum crown, from the exact e-line match; supplier unconfirmed. f = -49.22 mm.

L2 shares the negative front power with L1. The verified ratio f(L1)/f(L2) = 1.022 shows that the first two negative menisci carry nearly equal standalone paraxial power. The higher index of L2 allows the same approximate negative power with less severe curvature than would be required from a lower-index crown.

### L3 — Biconcave Negative ED Element

ne = 1.59489, νd = 68.6. Glass: FCD515 (HOYA) ED fluorophosphate crown, from the exact e-line match; supplier unconfirmed. f = -34.07 mm.

L3 is the front-group ED negative element. At this location the chief-ray height is large, so low dispersion is useful for lateral chromatic correction. L3 is followed by L4 with a zero air gap; the pair is not cemented in the prescription, but it behaves optically as a tightly coupled negative-positive contact pair.

### L4 — Biconvex Positive Contact Partner

ne = 1.69416, νd = 31.2. Glass: E-FD8 (HOYA) dense flint, from the e-line match to 0.00001 (catalog ne 1.69415); supplier unconfirmed. f = +29.10 mm.

L4 is the first strong positive element in the front group. Its high dispersion complements the low-dispersion L3, and its positive power begins the recovery from the strongly negative front converter section. The L3/L4 zero spacing explains the difference between the patent's element-by-element prescription and the production 11-group specification.

### L5-L6 — Cemented Negative-Positive Doublet LN

L5: ne = 1.91048, νd = 31.3. Glass: TAFD25 (HOYA) dense lanthanum flint, from the exact e-line match; supplier unconfirmed. f = -12.50 mm.  
L6: ne = 1.77660, νd = 29.7. Glass: NBFD29 (HOYA) niobium dense flint, from the exact e-line match; supplier unconfirmed. f = +22.14 mm.  
Cemented unit LN: f = -31.20 mm.

LN is a negative-positive cemented doublet close to the stop. It is not a classical crown/flint achromat; both elements are high-dispersion flints. Its role is to provide compact negative power and correction leverage immediately before L7 while using high index to moderate surface slopes.

The verified condition value f(LN)/f(LP) = -1.124 lies close to the lower bound of the patent's condition (3), indicating that LN's negative power and L7's positive power are deliberately balanced.

### L7 — Biconvex Positive LP, Aspherical on Both Surfaces

ne = 1.77173, νd = 49.2. Glass: M-TAF101 (HOYA) moulding lanthanum flint, from the exact e-line match; supplier unconfirmed. f = +27.76 mm.

L7 is the patent's LP element and the second high-precision aspherical element associated with the production XA count. It sits just before the aperture stop and therefore has strong leverage over both axial marginal rays and off-axis coma terms. Surface 12 has a negative A4 term; surface 13 has a positive A4 term. The opposed fourth-order signs are consistent with a paired correction rather than a single-surface de-powering profile.

The element should be described as a lanthanum flint, not as a crown. Its νd = 49.2 lies on the flint side of the practical crown/flint boundary.

### L8 — Biconvex Positive Super-ED Element

ne = 1.43810, νd = 95.1. Glass: FCD100 (HOYA) super-ED fluorophosphate crown, from the exact e-line match; supplier unconfirmed. f = +34.02 mm.

L8 opens the moving focus subgroup G2F and is the Super-ED element corresponding to Sony's production description. It is placed where the marginal ray height is still substantial after the stop, making it a primary axial color corrector for the rear imaging relay.

### L9-L10 — Cemented ED/Flint Doublet

L9: ne = 1.49845, νd = 81.6. Glass: FCD1 (HOYA) ED fluorophosphate crown, from the exact e-line match; supplier unconfirmed. f = +31.19 mm.  
L10: ne = 1.86252, νd = 25.2. Glass: NBFD25 (HOYA) niobium dense flint, from the exact e-line match; supplier unconfirmed. f = -15.55 mm.  
Cemented unit: f = -32.55 mm.

This doublet is the main conventional chromatic pairing in the rear group. L9 supplies positive ED-crown power, while L10 supplies high-index, high-dispersion negative power. The cemented pair is net negative, which also helps reduce the positive Petzval burden of the relay.

### L11 — Biconvex Positive, Very-High-Index Dense Flint

ne = 1.93323, νd = 20.9. Glass: E-FDS1 (HOYA) very-high-index dense flint, from the exact e-line match; supplier unconfirmed. f = +21.17 mm.

L11 is the strongest positive element in G2 after L8 when judged by standalone focal length. Its very high index allows strong positive power in a compact axial space. Because Petzval contribution is weighted by φ/(n·n′), high-index positive surfaces contribute less field curvature per unit power than equivalent lower-index positive surfaces.

### L12 — Biconcave Negative Element

ne = 1.86252, νd = 25.2. Glass: NBFD25 (HOYA) niobium dense flint, from the exact e-line match; supplier unconfirmed. f = -36.19 mm.

L12 is the negative element preceding the strongest negative air lens in G2. Its rear surface and L13's front surface form the air lens LA identified by the patent. L12 contributes directly to field flattening and to the control of higher-order residuals before the final aspherical correction stage.

### L13 — Biconcave Negative, Aspherical on Both Surfaces

ne = 1.85639, νd = 40.1. Glass: M-TAFD305 (HOYA) moulding dense lanthanum flint, from the exact e-line match; supplier unconfirmed. f = -218.18 mm.

L13 has weak base paraxial power but large aspherical coefficients. It is therefore better understood as a field-dependent correction element than as a strong thin-lens power element. Its location after the LA air lens gives it leverage over astigmatism, distortion, and residual field curvature.

### L14 — Rear Positive Meniscus

ne = 1.62228, νd = 63.9. Glass: PCD40 (HOYA) phosphate dense crown, from the exact e-line match; supplier unconfirmed. f = +166.85 mm.

L14 is stationary during focusing and sits behind the moving G2F subgroup. Its weak positive power and rear placement are consistent with final field flattening and chief-ray-angle trimming at the sensor side. OHARA S-PHM52, the earlier family comparison, is a different glass (ne 1.62033, νd 63.33).

## Glass Identification and Selection

Paragraph 0114 defines the `nd` column as the refractive index at the d line (λ = 587.6 nm) and `νd` as the d-line Abbe number, and Table 1 heads its columns accordingly. The printed indices are nevertheless e-line values (546.07 nm) paired with d-line Abbe numbers. Each of the fourteen rows matches a HOYA catalog glass at the e line, thirteen to all five printed decimals and L4 to 0.00001, and each with that glass's νd at the printed one decimal. No row matches a catalog glass at the d line. The model stores the printed values unchanged and treats the whole index column as e-line (`indexReference: "e"` on all fourteen elements).

| Element | Printed n / νd | Catalog glass | Catalog ne / νd | Catalog nd | Role |
|---|---:|---|---:|---:|---|
| L1 | 1.58547 / 59.5 | HOYA M-BACD12 | 1.58547 / 59.46 | 1.58313 | Low-density front negative meniscus |
| L2 | 1.73234 / 54.7 | HOYA TAC8 | 1.73234 / 54.67 | 1.72916 | Second negative meniscus |
| L3 | 1.59489 / 68.6 | HOYA FCD515 | 1.59489 / 68.62 | 1.59282 | Front-group lateral-color correction |
| L4 | 1.69416 / 31.2 | HOYA E-FD8 | 1.69415 / 31.16 | 1.68893 | Positive contact partner to L3 |
| L5 | 1.91048 / 31.3 | HOYA TAFD25 | 1.91048 / 31.32 | 1.90366 | Negative element of LN |
| L6 | 1.77660 / 29.7 | HOYA NBFD29 | 1.77660 / 29.74 | 1.77047 | Positive element of LN |
| L7 | 1.77173 / 49.2 | HOYA M-TAF101 | 1.77173 / 49.24 | 1.76802 | Positive LP asphere |
| L8 | 1.43810 / 95.1 | HOYA FCD100 | 1.43810 / 95.10 | 1.43700 | Super-ED axial-color corrector |
| L9 | 1.49845 / 81.6 | HOYA FCD1 | 1.49845 / 81.61 | 1.49700 | ED crown in rear doublet |
| L10 | 1.86252 / 25.2 | HOYA NBFD25 | 1.86252 / 25.15 | 1.85451 | Flint in rear doublet |
| L11 | 1.93323 / 20.9 | HOYA E-FDS1 | 1.93323 / 20.88 | 1.92286 | Strong high-index positive relay |
| L12 | 1.86252 / 25.2 | HOYA NBFD25 | 1.86252 / 25.15 | 1.85451 | Negative Petzval element |
| L13 | 1.85639 / 40.1 | HOYA M-TAFD305 | 1.85639 / 40.10 | 1.85135 | Rear aspherical field corrector |
| L14 | 1.62228 / 63.9 | HOYA PCD40 | 1.62228 / 63.88 | 1.61997 | Rear field/chief-ray correction |

HOYA, OHARA and SUMITA catalogs, including obsolete glasses, and the SCHOTT, HIKARI and CDGM rows of the site catalog were checked at both lines. At the d line no row pairs a printed index with its printed Abbe number: the nearest row carrying the right Abbe number is 0.0005 away for L1 and 0.001 to 0.010 away for the others. At the e line HOYA is the only vendor that covers every row, and nine elements (L1, L3, L6, L7, L8, L10, L12, L13 and L14) match HOYA rows alone. Other vendors match single rows: OHARA S-LAL18 and SUMITA K-LaK18 for L2, HIKARI J-SF8 for L4, OHARA S-LAH95 and SCHOTT N-LASF46B for L5, CDGM H-FK61 for L9, and SCHOTT N-SF66 for L11. OHARA L-BAL42 and S-FPL51 share the e-line index of L1 and L9 but list νd 59.39 and 81.55 against the printed 59.5 and 81.6. Where HOYA lists two grades with the same constants (FCD505 and FCD515, TAFD25 and TAFD25L, E-FDS1 and E-FDS1-W), one is named: FCD515, TAFD25 and E-FDS1.

Two further observations agree with the HOYA reading. The three moulding glasses, M-BACD12, M-TAF101 and M-TAFD305, fall on exactly the three aspherical elements, L1, L7 and L13. And the patent's own specific-gravity row for the first lens (Table 51, SL1) equals HOYA's listed value: 3.01 for M-BACD12 in Example 1, and 4.56 for M-TAF101 in Example 2, whose L1 row prints 1.77173 / 49.2. OHARA L-BAL42 and S-BAL42 list 3.05 and 3.19.

The earlier OHARA class labels were d-line comparisons against printed e-line values and are superseded. S-FPM2 (nd 1.59522, νd 67.74), S-LAH66 (1.77250, 49.60) and S-FPL53 (1.43875, 94.95) are different glasses from FCD515, M-TAF101 and FCD100, and S-TIM28 and S-NBH56 miss the printed Abbe numbers of L4 and of L10 and L12 by 0.1 and 0.4. The names select catalog coordinates and dispersion curves; they do not confirm Sony's supplier or melt.

All fourteen elements trace on their catalog dispersion curves, anchored to the printed index, at C′, e, F′ and g. The Abbe slot keeps the printed d-line number; catalog νe is 0.2 to 0.4 lower, which matters only to the resolver's compatibility window because no element falls back to the Abbe estimate. The patent publishes no partial-dispersion data, so the `apd: "inferred"` flags on L3, L8 and L9 still rest on the ED and Super ED production counts.

The chromatic strategy uses three low-dispersion stations: L3 in the front group for lateral color, L8 as the Super-ED rear-group opener for axial color, and L9 as the ED crown in the cemented rear doublet. High-index flints L4, L5, L6, L10, L11, L12, and L13 supply complementary dispersion and compact power.

## Focus Mechanism

Example 1 uses inner focusing. The moving focus subgroup G2F consists of L8 through L13. During focusing from infinity to the 250 mm close-focus state, G2F moves objectward by 1.69 mm. G1 and L14 remain stationary.

| Variable spacing | Infinity | 250 mm close state | Change |
|---|---:|---:|---:|
| d14, stop to L8 | 6.35 mm | 4.66 mm | -1.69 mm |
| d25, L13 to L14 | 4.78 mm | 6.47 mm | +1.69 mm |

The equal and opposite spacing changes verify rigid-body motion of L8-L13 in the published Example 1 data. The broader patent text permits a divided or differential focus subgroup in other embodiments, but Example 1 does not publish differential subgroup motion.

A paraxial close-focus check with the close-state gaps and fixed 15.44 mm BFD gives a front-vertex object distance of 133.84 mm and an object-to-image distance of 248.54 mm, agreeing with the patent's 250 mm close-focus state within rounding.

## Aspherical Surfaces

The patent uses the standard even-order aspherical sag expression:

$$
Z(h)=\frac{c h^2}{1+\sqrt{1-(1+K)c^2h^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}+A_{12}h^{12}
$$

where c = 1/R. The tabulated K is the standard conic constant; K = 0 is a spherical base conic. Six surfaces are aspherical: both surfaces of L1, both surfaces of L7, and both surfaces of L13.

| Surface | K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|
| 1 | 0 | -3.2157E-07 | -8.9102E-09 | 7.2086E-12 | -4.2574E-15 | -2.1368E-19 |
| 2 | -5.9400E-01 | 5.9716E-06 | -2.5549E-09 | -4.9500E-11 | 8.1327E-14 | -3.5142E-16 |
| 12 | 0 | -6.7796E-06 | -1.9157E-08 | 9.9948E-11 | -9.2684E-13 | 2.2031E-15 |
| 13 | 0 | 2.4694E-06 | -2.2906E-08 | 1.2660E-10 | -9.1880E-13 | 1.9071E-15 |
| 24 | 0 | -7.4318E-05 | 2.5730E-07 | 3.0021E-09 | -2.8311E-11 | 6.5427E-14 |
| 25 | 0 | -3.0668E-05 | 3.5429E-07 | 2.3165E-09 | -2.1595E-11 | 4.6042E-14 |

L1 controls front-field entry and sagittal coma in the high-curvature retrofocus front. L7 controls spherical aberration and coma immediately before the stop. L13 carries the largest fourth-order coefficients and is the rear field-dependent correction element.

## Conditional Expressions

The patent's condition table for Example 1 is internally consistent in its ratio rows. Some auxiliary absolute focal-length rows in the same table conflict with direct paraxial computation and with the ratio rows; the verified ratios below are computed from the prescription itself. The mismatch is treated as a table defect, not as a reason to alter the prescription.

| Condition | Quantity | Patent limit | Verified value | Status |
|---:|---|---:|---:|---|
| (1) | νd(L1) | 40.00 < νd < 96.00 | 59.5 | Satisfied |
| (2) | f(L1)/f | -10.0 < ratio < -2.0 | -3.489 | Satisfied |
| (3) | f(LN)/f(LP) | -35.00 < ratio < -1.05 | -1.124 | Satisfied |
| (4) | dLP/dS | 1.00 < ratio < 1.55 | 1.249 | Satisfied |
| (5) | f(G2F)/f | 1.5 < ratio < 8.5 | 3.305 | Satisfied |
| (6) | abs(f(G1)/f(G2)) | > 3 | 4.772 | Satisfied |
| (7) | f(L1)/f(L2) | 0.30 < ratio < 2.50 | 1.022 | Satisfied |
| (8) | f(G2)/f(LA) | -1.5 < ratio < -0.2 | -0.512 | Satisfied |
| (9) | BF/f | 0.3 < ratio < 2.5 | 1.071 | Satisfied |
| (10) | SL1 | 2.3 < SL1 < 4.6 | 3.01 | Satisfied |

The material patent-table anomaly is condition (6). Direct computation gives f(G1) = +202.73 mm and f(G2) = +42.48 mm, so abs(f(G1)/f(G2)) = 4.772. The patent's Table 5 value f(G1) = 211.82 mm is inconsistent with that ratio and should not be used as the verified G1 focal length.

## Verification Summary

All paraxial calculations were performed from the Table 1 prescription with the patent-published refractive indices and the Table 3 focus spacings. The matrix trace used the printed indices, which are e-line values under the patent's nd heading, and the surface-by-surface refraction convention.

| Quantity | Verified value | Patent / source value | Result |
|---|---:|---:|---|
| Effective focal length | 14.4219367 mm | 14.42 mm | Matches |
| Design f-number | 1.85 | 1.85 | Matches |
| Back focal distance | 15.44 mm | Table 1 total length minus summed spacings; BF/f = 1.071 | Matches |
| Total optical length | 114.70 mm | 114.7 mm | Matches |
| G1 focal length | +202.73 mm | Table 5 gives +211.82 mm | Table value inconsistent |
| G2 focal length | +42.48 mm | +42.34 mm | Matches within rounding |
| G2F focal length | +47.66 mm | f(G2F)/f = 3.305 | Matches |
| LN focal length | -31.20 mm | f(LN)/f(LP) = -1.124 | Matches |
| LA air-lens focal length | -82.91 mm | f(G2)/f(LA) = -0.512 | Matches |
| Petzval sum | +0.003861 mm^-1 | Not tabulated | Petzval radius ≈ 259.0 mm |

The Petzval value above uses the surface-by-surface formula Σ φ/(n·n′), not a thin-element approximation. The result is a modest positive residual for a fast retrofocus ultra-wide design and is consistent with the use of L12, the LA air lens, L13, the two net-negative cemented doublets, and high-index positive elements to restrain field curvature.

## Sources

- WO 2021/199923 A1, Sony Group Corporation, Numerical Example 1, Tables 1-5 and condition table.
- Sony official product specifications for SEL14F18GM: 14 mm, f/1.8, full-frame E-mount, 14 elements in 11 groups, 114° angle of view, 0.25 m minimum focus distance, 9 aperture blades, 460 g mass.
- Sony official product description for SEL14F18GM: two XA elements, one Super ED element, two ED elements, and XD Linear Motor focusing.
- HOYA (7 July 2026, including obsolete glasses), OHARA (1 July 2026) and SUMITA (7 November 2025) Zemax glass catalogs, used for the e-line and d-line coordinate checks.
- Sony Alpha Universe launch article, 20 April 2021, used only for production-level element count, mass, special-glass/aspherical claims, and XD Linear Motor description.
