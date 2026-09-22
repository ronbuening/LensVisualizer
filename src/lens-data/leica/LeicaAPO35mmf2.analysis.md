# Leica APO-Summicron-M 35 f/2 ASPH. — Optical Analysis

**Patent:** US 2022/0066176 A1 (published March 3, 2022)  
**Priority:** DE 10 2018 132 472.3 (December 17, 2018)  
**Filed:** PCT/EP2019/085673 (December 17, 2019)  
**Published:** March 3, 2022  
**Inventors:** Stefan Roth, Kathrin Keller (Lahnau, Germany)  
**Applicant:** Leica Camera AG, Wetzlar  
**Embodiment analyzed:** Example 1 (the sole worked example; FIGS. 1–3)

---

## 1. Design Overview

The Leica APO-Summicron-M 35 f/2 ASPH. is a ten-element, five-group wide-angle prime designed for the Leica M rangefinder mount. It is classified in the patent as a "quasi-symmetrical" design — three lens groups (front, middle, rear) each contribute net positive refractive power, with the aperture stop positioned between the front and middle groups. This distinguishes it from conventional retrofocus wide-angle designs, which rely on a negative front group and positive rear group. The quasi-symmetrical configuration enables a compact overall length (SO'/f ≈ 1.85) while providing inherently better correction of coma, distortion, and lateral chromatic aberration than an asymmetrical retrofocus layout.

### Production specifications (from Leica Camera AG)

| Parameter | Value |
|-----------|-------|
| Focal length | 35 mm |
| Maximum aperture | f/2.0 |
| Angle of view (diagonal) | ~63° (full 24×36 frame) / 62.2° (patent design field) |
| Optical construction | 10 elements in 5 groups |
| Aspherical surfaces | 4 (on 3 elements; one element double-sided) |
| APD elements | 6 |
| Minimum focus distance | 0.3 m |
| Filter thread | E39 |
| Aperture blades | 11 |
| Weight | ~305 g |
| Length (without hood) | 40.9 mm |

### Computed specifications (from patent data, scaled to f = 35 mm)

| Parameter | Computed (n_e, as stored) | Patent (normalized) |
|-----------|---------------------------|---------------------|
| EFL | 34.99 mm | f = 1.00 mm |
| BFD (paraxial, from last surface) | 14.62 mm (0.418 × f) | — |
| BFD (patent-stated S'O') | 15.05 mm | 0.43 × f |
| Total track (SO', vertex to paraxial image) | 64.32 mm | 1.85 × f |
| SO'/f | 1.84 | 1.85 |
| Half-image diagonal YB (SO'/YB = 3.08) | 21.0 mm | 0.60 (norm.) |
| Petzval radius | ~387 mm | 11.05 (norm.) |
| Entrance pupil diameter | 17.5 mm | 0.50 (norm.) |

The patent table is given at the e-line (n_e, 546.07 nm) with integer ν_e values, and the data file keeps those native coordinates (`indexReference: "e"`) rather than converting them to d-line catalog values. Evaluated as stored, the paraxial EFL is 34.99 mm — the patent's f = 1.00 × 35 to within rounding — and the subgroup focal lengths reproduce the patent's own table (below), confirming that the radii and thicknesses are transcribed consistently.

The sum of the tabulated d values is 1.78 (normalized), which is less than the patent's stated SO' = 1.85. The tabulated d₁₆ = 0.36 is not the paraxial back focal distance: the paraxial BFD from the last vertex computes to 0.418, giving SO' = 1.42 + 0.418 = 1.84 ≈ 1.85, and the patent's S'O'/f = 0.43 is likewise the paraxial image distance. Why the table prints 0.36 (12.6 mm scaled, 2.0 mm short of the computed 14.6 mm) is not explained in the patent; the difference is too large for a filter-stack air-equivalent, so it is treated as an unexplained table entry. The data file stores the computed paraxial BFD (14.62 mm) so that the infinity image plane is at best focus.

---

## 2. Group Structure and Focal Lengths

The design organizes ten elements into three principal groups (VG, MG, HG) containing five subgroups (G1–G5). Each subgroup is either a cemented compound lens or a single lens.

| Group | Subgroup | Elements | Form | f'/f (computed) | f'/f (patent) |
|-------|----------|----------|------|-----------------|---------------|
| VG (Front) | G1 | L1 + L2 | Cemented doublet | 44.2 | 48.07 |
| | G2 | L3 + L4 | Cemented doublet | 2.47 | 2.47 |
| MG (Middle) | G3 | L5 + L6 + L7 | Cemented triplet | 3.36 | 3.34 |
| HG (Rear) | G4 | L8 + L9 | Cemented doublet | 2.04 | 2.04 |
| | G5 | L10 | Single lens | −3.29 | −3.29 |

**Principal group focal lengths:**

| Group | f'/f (computed) | f'/f (patent) | Role |
|-------|-----------------|---------------|------|
| VG | 2.51 | 2.52 | Front positive group |
| MG | 3.36 | 3.34 | Middle positive group |
| HG | 3.86 | 3.87 | Rear positive group |

The G2, G4, G5 and VG/MG/HG values match the patent to within rounding. The G1 discrepancy (44.2 computed vs. 48.07 patent) is a natural consequence of G1's near-afocal configuration: when net power is close to zero, the EFL is extremely sensitive to the least-significant digits of the radii. Sensitivity analysis shows that shifting R₁ by just 0.005 (from 1.546 to 1.551 normalized) changes the computed G1 EFL from 44 to 49. Since the patent's prescription is rounded to three decimal places (0.001 at normalized scale, corresponding to 0.035 mm at production scale), a G1 EFL anywhere in the range 40–55 is consistent with the tabulated data. The essential point — G1 is nearly afocal — is confirmed by both values. The G3 discrepancy (3.36 vs. 3.34) is within the rounding tolerance of the prescription data.

---

## 3. Element-by-Element Analysis

### 3.1 Front Group (VG): L1–L4

#### L1 — Biconvex Positive (1× Aspherical)

- **Glass:** patent n_e = 1.855, v_e = 40; catalog equivalent S-LAH89 (OHARA), n_e = 1.8565, v_e = 40.5 (n_d = 1.85150, v_d = 40.78)
- **Focal length:** +19.0 mm (at f = 35)
- **Shape:** Biconvex, R1 = +1.546, R2 = −0.628 (normalized); strongly asymmetric with steeper rear surface
- **Aspherical surface:** Surface 1 (object-side), K = 0, polynomial corrections through A8

The patent names S-LAH89 as an example of a front-element glass ([0071]) satisfying its Knoop hardness (HK ≥ 600 N/mm²) and acid resistance (ISO 8424 class ≤ 4) requirements. As the exposed front element of a compact M-mount lens with only a screw-in hood, mechanical and chemical durability is paramount. The table's n_e = 1.855 sits 0.0015 below the S-LAH89 catalog value (1.8565), so the identification rests on the patent's naming rather than on an exact index match; no catalog glass reproduces 1.855/40 exactly.

The aspherical object-side surface controls distortion contribution from the strongly curved front element. The patent notes ([0037]) that this asphere, combined with the near-afocal G1 doublet configuration, minimizes distortion and makes G1 suitable as an assembly adjustment member for centering the on-axis image.

#### L2 — Biconcave Negative

- **Glass:** patent n_e = 1.658, v_e = 39, ΔP_gF = −0.004; catalog equivalents N-KZFS5 (Schott) / S-NBH5 (OHARA), n_e = 1.6580, v_e = 39.5 (n_d = 1.65412, v_d = 39.70)
- **Focal length:** −17.9 mm (at f = 35)
- **Shape:** Biconcave, R1 = −0.628, R2 = +0.742 (normalized)
- **Cemented to:** L1 (junction = surface 2)

L2 is cemented to L1 to form subgroup G1. The doublet is designed to be nearly afocal (f'/f ≈ 48) — that is, the positive power of L1 and the negative power of L2 nearly cancel. The purpose of this near-zero power is two-fold: it allows L1's aspherical surface to control distortion without injecting significant chromatic aberration, and it provides the first stage of lateral color correction. The negative ΔP_gF of the KZFS glass begins the secondary spectrum correction.

#### L3 — Biconcave Negative

- **Glass:** patent n_e = 1.658, v_e = 39, ΔP_gF = −0.004 (same short-flint row as L2)
- **Focal length:** −18.6 mm (at f = 35)
- **Shape:** Biconcave, R1 = −0.790, R2 = +0.648 (normalized)
- **Cemented to:** L4 (junction = surface 5)

L3 is the front element of the G2 cemented doublet. It provides negative power to counterbalance L4's strong positive power and contributes to Petzval sum reduction. The patent notes ([0065]) that L3 is the one negative element exempted from the D/d_M ≥ 18 thinness constraint — its greater center thickness relative to diameter is needed for a better balance between coma and astigmatism correction.

#### L4 — Biconvex Positive

- **Glass:** patent n_e = 1.888, v_e = 41; catalog equivalent S-LAH58 (OHARA), n_e = 1.8882, v_e = 40.5 (n_d = 1.88300, v_d = 40.77)
- **Focal length:** +16.6 mm (at f = 35)
- **Shape:** Biconvex, R1 = +0.648, R2 = −1.081 (normalized)
- **Cemented to:** L3 (junction = surface 5)

L4 carries the highest refractive index in the entire design (n_e = 1.888). The patent requires a refractive index ≥ 1.86 for this element ([0026]). The high index serves two purposes: it provides strong positive refractive power from moderate curvatures (reducing higher-order aberrations), and it minimizes the Petzval contribution (since Petzval sum contributions scale as φ/n, a higher n for positive elements reduces the positive Petzval contribution). The G2 doublet (L3 + L4) is the primary power-bearing subgroup of VG, with f'/f = 2.47.

### 3.2 Aperture Stop (BL)

The aperture diaphragm is located between the front group VG and the middle group MG, at surface 7 in the prescription. Its axial position — just behind the front group — is characteristic of quasi-symmetrical designs. The stop position enables approximate symmetry of the aberration contributions from the front and rear halves of the design, which is the foundation for the low distortion and lateral chromatic aberration. In the production lens, the aperture has 11 blades.

### 3.3 Middle Group (MG): L5–L7

#### G3 — Cemented Apochromatic Triplet

- **L5:** biconvex positive — patent n_e = 1.498, v_e = 81, ΔP_gF = +0.031 (catalog equivalent S-FPL51, OHARA: n_e = 1.4985, v_e = 81.2); f' = +53.3 mm
- **L6:** biconcave negative — patent n_e = 1.658, v_e = 39, ΔP_gF = −0.004 (short-flint row); f' = −19.5 mm
- **L7:** biconvex positive — same row as L5; f' = +26.0 mm
- **Group focal length:** f'/f = 3.36 (computed) ≈ 3.34 (patent)

This triplet is the optical heart of the APO correction. The two fluorophosphate-class elements (L5, L7) have very high Abbe numbers (v_e = 81) and strongly positive anomalous partial dispersion (+0.031), while the sandwiched short-flint element (L6) has a low Abbe number (v_e = 39) and negative anomalous partial dispersion (−0.004). The patent does not name these glasses; S-FPL51 and N-KZFS5 / S-NBH5 are the catalog entries whose e-line coordinates and ΔP_gF reproduce the table rows. This combination — positive APD crowns flanking a negative APD flint — is the classic configuration for bringing three wavelengths to a common focus (apochromatic correction). The patent states ([0047]) that the positive elements require v_d ≥ 65 and ΔP_gF ≥ +0.013.

The triplet also addresses the sagittal astigmatism and serves as an assembly adjustment member for minimizing field centering errors ([0046]).

Note that L5 has a very weak front radius (R = +5.209 normalized, compared to the rear at R = −0.876), making it nearly plano-convex with power concentrated at the rear surface. This distributes the refraction across the cemented interfaces, reducing surface-by-surface aberration contributions.

### 3.4 Rear Group (HG): L8–L10

#### L8 — Biconvex Positive (1× Aspherical)

- **Glass:** patent n_e = 1.855, v_e = 40 (same row as L1; S-LAH89 catalog equivalent)
- **Focal length:** +15.4 mm (at f = 35)
- **Shape:** Biconvex, R1 = +0.802, R2 = −0.616 (normalized)
- **Aspherical surface:** Surface 12 (object-side), K = 0, polynomial corrections through A8
- **Cemented to:** L9 (junction = surface 13)

L8 is the strongest positive element in the design (shortest focal length at +15.4 mm). Its aspherical front surface contributes to balancing spherical aberration. The patent ([0054]) states that this asphere helps minimize unwanted spherical aberration contributions. L8 uses the same glass row as L1, exploiting the quasi-symmetrical layout where corresponding elements on either side of the stop share optical properties.

#### L9 — Biconcave Negative

- **Glass:** patent n_e = 1.658, v_e = 39, ΔP_gF = −0.004 (short-flint row)
- **Focal length:** −16.7 mm (at f = 35)
- **Shape:** Biconcave, R1 = −0.616, R2 = +0.653 (normalized)
- **Cemented to:** L8 (junction = surface 13)

L9 completes the G4 cemented doublet with L8. This is the fourth KZFS-type element in the design, continuing the secondary spectrum correction in the rear group. The patent ([0063]) notes that the G4 doublet design makes the individual elements insensitive to decentration errors during assembly, but in opposite senses — so the combined subgroup is insensitive as a whole.

#### L10 — Negative Meniscus (2× Aspherical)

- **Glass:** patent n_e = 1.583, v_e = 59; nearest catalog class L-BAL42 / S-BAL42 (OHARA), n_e = 1.5855, v_e = 59.1 (n_d = 1.58313, v_d = 59.4)
- **Focal length:** −115.1 mm (at f = 35)
- **Shape:** Negative meniscus, concave toward object; R1 = −1.490, R2 = −6.742 (normalized)
- **Aspherical surfaces:** Both surfaces 15 and 16, K = 0, with polynomials through A12 (surface 15) and A8 (surface 16)

L10 is the single-element subgroup G5 and the only lens in the design manufactured by precision glass molding (PGM). The patent explicitly exempts the last element from the KZFS glass requirement ([0022]) "in favor of an aspherical design by precision glass molding." A low-softening-temperature moldable barium crown of the L-BAL42 class (OHARA's "L-" prefix denotes PGM-compatible grades) enables both surfaces to be aspherically molded in a single pressing operation. No catalog glass reproduces 1.583/59 at the e-line: the moldable candidates (L-BAL42, S-BAL42, Hoya M-BACD12, Hikari Q-SK52S) all sit at n_e ≈ 1.585. The printed 1.583 coincides with the d-line index of that class, so the row may be a d-line value in an otherwise e-line table; the data file stores the row as printed and labels the glass as a class.

Despite its weak net power (f' ≈ −115 mm, only about −0.3 diopters at production scale), L10 plays a critical role in field correction. The patent states ([0054]) that both aspherical surfaces contribute to "balancing the astigmatic difference and coma over the image field, as well as minimizing unwanted contributions to the spherical aberration." Surface 15 carries the most complex aspherical polynomial in the design, with coefficients specified through A12 (h¹² term), indicating significant higher-order departure from the spherical base curve.

The condition r16 < r15 (both radii negative, |r16| > |r15|) specified in [0062] ensures the meniscus has the correct orientation — concave toward the object — which is essential for its field-flattening function.

---

## 4. Aspherical Surfaces

Four of the sixteen optical surfaces are aspherical. All use K = 0 (spherical base conic) with polynomial departures only. The sag equation from the patent is:

$$z(h) = \frac{h^2 / r_0}{1 + \sqrt{1 - (1+k)(h/r_0)^2}} + a_2 h^4 + a_3 h^6 + \cdots + a_6 h^{12}$$

where the patent coefficients a2–a6 correspond to the standard notation A4–A12.

### Aspherical coefficient table (patent normalization, f = 1 mm)

| Coeff. | Surface 1 (L1 front) | Surface 12 (L8 front) | Surface 15 (L10 front) | Surface 16 (L10 rear) |
|--------|----------------------|-----------------------|------------------------|-----------------------|
| K | 0 | 0 | 0 | 0 |
| A4 | +1.569 × 10⁻⁵ | +1.111 × 10⁻⁶ | +9.390 × 10⁻⁵ | +6.674 × 10⁻⁵ |
| A6 | −1.820 × 10⁰ | −5.241 × 10⁻¹ | +3.573 × 10¹ | +3.666 × 10¹ |
| A8 | +2.404 × 10⁻¹¹ | +4.762 × 10⁻¹¹ | +9.081 × 10⁻¹⁰ | +1.080 × 10⁻⁹ |
| A10 | — | — | +1.699 × 10¹ | — |
| A12 | — | — | +7.799 × 10⁻¹⁶ | — |

### Scaling behavior and aspherical departures

The A6 coefficients appear strikingly large in magnitude — particularly for surfaces 15 and 16 (~35), and non-trivially for surfaces 1 and 12 (~1.8 and ~0.5). Under the f = 1 mm normalization the A₂ₙ coefficient scales as s^(2n−1), so going from f = 35 mm production scale to f = 1 mm multiplies A6 by 35⁵ ≈ 5.3 × 10⁷ while multiplying A4 by only 35³ ≈ 4.3 × 10⁴. Scaled back to production units the printed a2/a4/a6 terms vanish (A4 ≈ 4 × 10⁻¹⁰ mm⁻³, A8 ≈ 4 × 10⁻²², A12 ≈ 8 × 10⁻³³) and only the a3 (h⁶) and, on surface 15, a5 (h¹⁰) terms survive.

At the stored semi-diameters the literal departures are: surface 1 (h = 12.5 mm) −0.13 mm, surface 12 (h = 12.2 mm) −0.03 mm, surface 15 (h = 10.5 mm) +0.92 mm and surface 16 (h = 10.5 mm) +0.94 mm. The L10 values are of the same size as the base spherical sags (−1.07 mm and −0.23 mm respectively), so the literal polynomial reverses the curvature of both L10 surfaces in the outer zone: surface 15 turns over (changes from concave to convex) at h ≈ 8.4 mm, well inside the 10.5 mm patent-derived clear semi-diameter, and reaches a surface slope of 18° at the rim where the sphere alone would be −11°.

**Caveat on the printed coefficient table.** Traced as printed, the prescription is not a usable f/2 design: the marginal ray at f/2 crosses the axis 5.0 mm in front of the paraxial focus (the spherical base prescription alone gives −5.9 mm, and the h⁶ terms on surfaces 1 and 12 recover only 0.9 mm of it, with the zonal error left at −1.4 mm), and beyond ω ≈ 26° the chief ray is thrown outward by the reversed L10 zones, landing at 28 mm for the patent's 31.1° half-field instead of the ≈ 21 mm image height the design specifies (distortion −0.3 % at 10°, +2 % at 25°, +34 % at 31.1°). With all four polynomials removed the field maps normally (−2.6 % barrel distortion at 31.1°) but the spherical aberration remains. Alternative readings of the table were tested — treating the even-index columns as production-scale mm coefficients, shifting every coefficient one power of h, or scaling the h⁶ terms up or down by powers of 35 — and none yields both a corrected axial focus and a sane field, so the coefficients are kept exactly as printed and scaled by the stated rule. The practical consequence for the rendering is that the f/2 axial bundle does not converge on the image plane and the outer-field rays through L10 are not representative of the production lens; the base spherical prescription, group powers and glass palette are unaffected.

Surfaces 1 and 12 show mild departures (−0.13 mm and −0.03 mm at the rim), consistent with L1 and L8 being ground-and-polished aspherics on the high-index substrate.

**Manufacturing implications:** Surfaces 1 and 12 are on an S-LAH89-class lanthanum glass, which is not a precision-molding grade. These aspherics are therefore ground and polished using conventional CNC or MRF (magnetorheological finishing) techniques — consistent with Leica's well-known capabilities in aspherical lens production at the Wetzlar facility. Surfaces 15 and 16 are on a moldable L-BAL42-class glass and are molded ([0022]).

---

## 5. Glass Selection and the APO Designation

The design uses only five distinct glass rows across ten elements. The patent gives them at the e-line; the catalog equivalents are the entries whose C′/e/F′ coordinates reproduce the rows:

| Patent row (n_e / v_e / ΔP_gF) | Catalog equivalent | n_e / v_e (catalog) | n_d / v_d (catalog) | Elements | Count |
|-------|-----|-----|-----|----------|-------|
| 1.855 / 40 / — | S-LAH89 (OHARA), patent-named example for L1 | 1.8565 / 40.5 | 1.85150 / 40.78 | L1, L8 | 2 |
| 1.658 / 39 / −0.004 | N-KZFS5 (Schott) or S-NBH5 (OHARA) | 1.6580 / 39.5 | 1.65412 / 39.70 | L2, L3, L6, L9 | 4 |
| 1.498 / 81 / +0.031 | S-FPL51 (OHARA) | 1.4985 / 81.2 | 1.49700 / 81.55 | L5, L7 | 2 |
| 1.583 / 59 / — | L-BAL42 class (OHARA PGM); nearest, not exact | 1.5855 / 59.1 | 1.58313 / 59.4 | L10 | 1 |
| 1.888 / 41 / — | S-LAH58 (OHARA) | 1.8882 / 40.5 | 1.88300 / 40.77 | L4 | 1 |

*Note: The data file stores the patent's native n_e / v_e values with `indexReference: "e"`; the dispersion engine resolves the catalog names above at C′/e/F′ (all within Δn ≤ 0.0025, Δν ≤ 0.6). Only S-LAH89 is named in the patent ([0071], as an example satisfying the front-element hardness requirement); the other four identifications are catalog inferences from the rows. The short-flint row matches Schott N-KZFS5 (ΔP_gF = −0.0044) and OHARA S-NBH5 equally well.*

Six elements carry anomalous partial dispersion — four with negative ΔP_gF (the short flints) and two with positive ΔP_gF (fluorophosphate crowns); the ΔP_gF values are the patent table's own column. The strategy is systematic: every negative-power element except L10 uses the same short-flint row with ΔP_gF = −0.004, and these are distributed across all three groups (two in VG, one in MG, one in HG). This distributed correction architecture ensures that secondary spectrum is corrected not just at the image center (where the MG triplet dominates) but also across the field (where the VG and HG elements dominate the off-axis chromatic contributions).

The "APO" designation requires correction of chromatic aberration at three wavelengths (apochromatic correction), which demands glass types whose partial dispersion deviates from the "normal line" relating P_gF to v_d. The combination of positive-ΔP_gF crowns with negative-ΔP_gF short flints enables three-color focus convergence that is not achievable with glasses lying on the normal line; the patent itself claims correction "over the primary and secondary spectrum" ([0076]).

---

## 6. Focus Mechanism

The patent describes a floating-element focus system ([0023], [0091]). During focusing from infinity to close range:

1. The **residual objective** (VG + aperture diaphragm BL + MG, i.e., L1–L7) translates forward as a unit.
2. The **rear group HG** (L8–L10) also translates forward, but with a shorter travel distance.

This differential motion changes two air gaps: the spacing between MG and HG (surface 11, d = 0.35 mm at production scale for infinity) and the back focal distance (surface 16). Because HG moves less than the front assembly, the gap between MG and HG increases during close focusing. Both groups move forward (away from the image plane) to accommodate the longer conjugate distance required by closer objects.

The floating element strategy is motivated by aberration correction at close range. As the patent states ([0023]), the differential motion of HG compensates for changes in coma and astigmatic difference that would otherwise degrade close-range image quality. This is why the lens achieves what Leica describes as "exceptional rendition quality across the entire image at all distance settings" down to its unusually close 0.3 m minimum focus distance — the shortest of any M-mount lens.

The production lens implements this with a 300° focus ring throw, with a tactile detent at 0.7 m marking the boundary of rangefinder-coupled focusing. Below 0.7 m, the user must use Live View or an EVF.

**Note on variable gap estimation:** The patent does not provide close-focus spacing tables; FIG. 2 only shows the close-distance setting graphically. The data file's close-focus gaps are calculated from paraxial conjugates with an assumed floating ratio (δ_HG = 0.70 × δ_front, δ_front = 7.34 mm) so that the object-to-image distance is 300 mm: d₁₁ = 2.55 mm and BF = 19.76 mm at 0.3 m (magnification −0.17). The 0.70 ratio is an assumption, not patent data. FIG. 2, compared with FIG. 1, shows the MG–HG gap opening by roughly 2–4 mm — the figures are schematic and their axial scale is not uniform, so this is only an order-of-magnitude check on the assumed 2.2 mm.

---

## 7. Petzval Sum and Field Curvature

The computed Petzval sum (at n_e) is +0.0905 in normalized units, corresponding to a Petzval radius of approximately 387 mm at f = 35 mm production scale. This is a relatively large Petzval radius (flat field) for a 35 mm lens, indicating effective field curvature correction.

The field flattening strategy relies on three mechanisms working in concert. First, the strong positive elements L1, L4 and L8 use high-refractive-index glass (n_e 1.855–1.888), which reduces the Petzval contribution (φ/n) of each positive surface; the fluorophosphate crowns of the triplet are weaker in power and sit where their low index matters less. Second, four negative elements with comparatively lower index (n_e = 1.658) provide counterbalancing negative Petzval contributions. Third, L10's negative meniscus form provides a field-flattening correction in the final image space, fine-tuned by its double-asphere surfaces.

---

## 8. Symmetry and Aberration Correction Philosophy

The patent repeatedly emphasizes the quasi-symmetrical architecture as the foundation of the design. Examining the element pattern across the stop reveals a clear structural mirror:

| Front of stop | ← Stop → | Rear of stop |
|---------------|-----------|--------------|
| G1: (+) doublet [1.855 / short flint] | BL | G3: (+) triplet [fluorophosphate / short flint / fluorophosphate] |
| G2: (+) doublet [short flint / 1.888] | | G4: (+) doublet [1.855 / short flint] |
| | | G5: (−) single [PGM asph.] |

The VG-side and HG-side share structural DNA: both contain cemented doublets pairing a high-index positive crown with a short-flint negative element. G1 (1.855 / short flint) mirrors G4 (1.855 / short flint); G2 (short flint / 1.888) has no exact rear mirror but the power balance is maintained by G3 and G5 together. The MG triplet sits at the center, acting as the chromatic correction hub.

This quasi-symmetry means that odd-order aberrations (coma, distortion, lateral color) generated by the front half are approximately cancelled by the rear half — which is why the patent can claim "imperceptible distortion" ([0075]) and MTF contrast above ~75% at the image margin at 20 lp/mm.

---

## 9. Summary of Aspherical Surface Roles

| Surface | Element | Location | Primary correction role |
|---------|---------|----------|------------------------|
| 1 | L1 front | Object-facing | Distortion minimization; centering adjustment |
| 12 | L8 front | Rear group entry | Spherical aberration reduction |
| 15 | L10 front | Field corrector | Astigmatic difference and coma over field |
| 16 | L10 rear | Last surface before image | Field curvature and residual coma balancing |

The distribution of aspherics is deliberate: one at the front of the lens where off-axis beams are farthest from the axis (distortion), one just after the stop where on-axis beams are widest (spherical aberration), and two at the rear of the lens where they can fine-tune field-dependent aberrations without affecting the axial correction. The double-asphere on L10, with its higher-order A10 and A12 terms on surface 15, provides the degrees of freedom needed to simultaneously correct astigmatism, field curvature, and coma across the full 62° field.

---

## 10. Relationship to Leica's APO-Summicron Family

The APO-Summicron-M 35 f/2 ASPH. is the latest addition to the APO-designated M-mount lens family, following the 90 mm f/2 (1998, the first APO-Summicron-M), the 75 mm f/2 (2005), and the 50 mm f/2 (2012). It is the first 35 mm M-lens to achieve apochromatic correction — a fact Leica emphasizes in its marketing materials. The design shares the distributed-APD-glass philosophy of its predecessors — using short-flint glass in every negative element across all groups — but introduces the double-asphere PGM element (L10) as a new tool for compact field correction. The floating focus mechanism, previously employed in the 75 mm APO-Summicron-M and the 50 mm f/1.4 Summilux-M ASPH., is extended here to achieve a 0.3 m close focus distance — the shortest in the M-mount system.

---

## 11. Data File Notes

The companion data file (`LeicaAPO35mmf2.data.ts`) stores the patent's native e-line refractive indices and integer ν_e values with `indexReference: "e"`, so the traced wavelength is 546.07 nm and the computed EFL is 34.99 mm (patent f = 1.00 × 35). The glass labels are catalog equivalents chosen to round-trip at C′/e/F′; only S-LAH89 is named in the patent.

The patent's aspherical coefficient notation uses a non-standard labeling (a2, a3, ..., a6 for A4, A6, ..., A12). The "D ± N" exponential format in the patent (e.g., "0.1569D − 4" = 1.569 × 10⁻⁵) is a Fortran-style double-precision notation common in German optical patents. The coefficients are stored exactly as printed, scaled by 35^(1−2n); see the caveat in section 4 — read literally they do not produce a corrected f/2 design, and the rendered axial and outer-field rays should be read with that in mind.

Semi-diameters come from the patent's D/d_M and d_M/d_r ratio tables where those exist (L2 D = 25.1 mm and L1 edge thickness 0.65 mm → G1 sd 12.5; L8 edge thickness 1.24 mm and L9 D = 25.1 mm → G4 sd 12.2; L10 D = 21.0 mm → sd 10.5; L6 D = 18.9 mm → 9.45, stored 10.5 for the f/2 bundle), and elsewhere from the FIG. 1 rim proportions and the f/2 ray envelope. The D/d_M values inherit the ±0.005 rounding of the normalized thicknesses (±17 % for the 0.03 rows), so they are approximate; the two G1 estimates agree independently. The rows labelled 6 and 11 in the patent's ratio table (12.9 and 96.4) could not be assigned to a lens consistently and were not used. FIG. 1 is a schematic section whose axial scale varies by ±40 % between elements, so it was used only for rim ratios. Variable gap values for close focus are inferred from paraxial conjugate analysis with an assumed floating ratio and should likewise be treated as estimates rather than authoritative design data.
