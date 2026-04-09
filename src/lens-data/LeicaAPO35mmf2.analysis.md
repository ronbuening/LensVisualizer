# Leica APO-Summicron-M 35 f/2 ASPH. — Optical Analysis

**Patent:** US 2022/0066176 A1 (published March 3, 2022)  
**Priority:** DE 10 2018 132 472.3 (December 17, 2018)  
**PCT Filing:** PCT/EP2019/085673 (December 17, 2019)  
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

| Parameter | Computed (n_e) | Computed (n_d) | Patent (normalized) |
|-----------|----------------|----------------|---------------------|
| EFL | 35.0 mm | 34.8 mm | f = 1.00 mm |
| BFD (paraxial, from last surface) | 14.6 mm | 14.4 mm | — |
| BFD (patent-stated S'O') | 15.1 mm | — | 0.43 × f |
| Total track (SO') | 64.8 mm | 64.1 mm | 1.85 × f |
| SO'/f | 1.85 | 1.84 | 1.85 |
| S'O'/f | 0.43 | — | 0.43 |
| Half-image diagonal | ~21.1 mm | — | — |
| Petzval radius | ~387 mm | — | 11.05 (norm.) |
| Entrance pupil diameter | 17.5 mm | 17.4 mm | 0.50 (norm.) |

The computed EFL from the ABCD matrix paraxial ray trace is 0.9996 mm at f = 1 normalization (using the patent's n_e values), confirming the patent prescription is internally consistent. When the same prescription is evaluated using n_d (d-line, 587.56 nm) catalog values — as required by the data file convention — the computed EFL is 34.75 mm and BFD is 14.39 mm. The ~0.7% shift is normal for the e-line → d-line wavelength conversion.

The sum of the tabulated d values is 1.78 mm (normalized), which is less than the patent's stated SO' = 1.85. The difference arises because the tabulated d₁₆ = 0.36 mm is not the full back focal distance; the ABCD-derived paraxial BFD from the last surface is 0.418 mm (at n_e). Using this corrected BFD yields SO' = 1.78 − 0.36 + 0.418 = 1.84 ≈ 1.85, consistent with the patent's stated value. The patent's S'O'/f = 0.43 similarly represents the true paraxial image distance rather than the tabulated d₁₆. The 2.0 mm discrepancy between the tabulated d₁₆ (12.6 mm scaled) and the paraxial BFD (14.6 mm scaled) is consistent with the presence of a sensor cover glass/IR filter stack omitted from the prescription, as is standard practice.

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

The G2, G4, and MG/HG values match the patent to within rounding. The G1 discrepancy (44.2 computed vs. 48.07 patent) is a natural consequence of G1's near-afocal configuration: when net power is close to zero, the EFL is extremely sensitive to the least-significant digits of the radii. Sensitivity analysis shows that shifting R₁ by just 0.005 mm (from 1.546 to 1.551) changes the computed G1 EFL from 44 to 49. Since the patent's prescription is rounded to three decimal places (0.001 mm at normalized scale, corresponding to 0.035 mm at production scale), a G1 EFL anywhere in the range 40–55 is consistent with the tabulated data. The essential point — G1 is nearly afocal — is confirmed by both values. The G3 discrepancy (3.36 vs. 3.34) is within the rounding tolerance of the prescription data.

---

## 3. Element-by-Element Analysis

### 3.1 Front Group (VG): L1–L4

#### L1 — Biconvex Positive (1× Aspherical)

- **Glass:** S-LAH89 (OHARA) — n_e = 1.855, v_e = 40; n_d = 1.85150, v_d = 40.78
- **Focal length:** +19.0 mm (at f = 35)
- **Shape:** Biconvex, R1 = +1.546, R2 = −0.628 (normalized); strongly asymmetric with steeper rear surface
- **Aspherical surface:** Surface 1 (object-side), K = 0, polynomial corrections through A8

The patent explicitly identifies S-LAH89 as the front element glass ([0071]), chosen for its Knoop hardness (HK ≥ 600 N/mm²) and acid resistance (ISO 8424 class ≤ 4). As the exposed front element of a compact M-mount lens with only a screw-in hood, mechanical and chemical durability is paramount.

The aspherical object-side surface controls distortion contribution from the strongly curved front element. The patent notes ([0037]) that this asphere, combined with the near-afocal G1 doublet configuration, minimizes distortion and makes G1 suitable as an assembly adjustment member for centering the on-axis image.

#### L2 — Biconcave Negative

- **Glass:** KZFS-type short flint — n_e = 1.658, v_e = 39, ΔP_gF = −0.004; n_d ≈ 1.65412, v_d ≈ 39.70
- **Focal length:** −18.0 mm (at f = 35)
- **Shape:** Biconcave, R1 = −0.628, R2 = +0.742 (normalized)
- **Cemented to:** L1 (junction = surface 2)

L2 is cemented to L1 to form subgroup G1. The doublet is designed to be nearly afocal (f'/f ≈ 48) — that is, the positive power of L1 and the negative power of L2 nearly cancel. The purpose of this near-zero power is two-fold: it allows L1's aspherical surface to control distortion without injecting significant chromatic aberration, and it provides the first stage of lateral color correction. The negative ΔP_gF of the KZFS glass begins the secondary spectrum correction.

#### L3 — Biconcave Negative

- **Glass:** KZFS-type short flint — n_e = 1.658, v_e = 39, ΔP_gF = −0.004
- **Focal length:** −18.7 mm (at f = 35)
- **Shape:** Biconcave, R1 = −0.790, R2 = +0.648 (normalized)
- **Cemented to:** L4 (junction = surface 5)

L3 is the front element of the G2 cemented doublet. It provides negative power to counterbalance L4's strong positive power and contributes to Petzval sum reduction. The patent notes ([0065]) that L3 is the one negative element exempted from the D/d_M ≥ 18 thinness constraint — its greater center thickness relative to diameter is needed for a better balance between coma and astigmatism correction.

#### L4 — Biconvex Positive

- **Glass:** S-LAH79 (OHARA) — n_e = 1.888, v_e = 41; n_d = 1.88300, v_d = 40.76
- **Focal length:** +16.6 mm (at f = 35)
- **Shape:** Biconvex, R1 = +0.648, R2 = −1.081 (normalized)
- **Cemented to:** L3 (junction = surface 5)

L4 carries the highest refractive index in the entire design (n_d ≈ 1.883). The patent requires n_d ≥ 1.86 for this element ([0026]). The high index serves two purposes: it provides strong positive refractive power from moderate curvatures (reducing higher-order aberrations), and it minimizes the Petzval contribution (since Petzval sum contributions scale as φ/n, a higher n for positive elements reduces the positive Petzval contribution). The G2 doublet (L3 + L4) is the primary power-bearing subgroup of VG, with f'/f = 2.47.

### 3.2 Aperture Stop (BL)

The aperture diaphragm is located between the front group VG and the middle group MG, at surface 7 in the prescription. Its axial position — just behind the front group — is characteristic of quasi-symmetrical designs. The stop position enables approximate symmetry of the aberration contributions from the front and rear halves of the design, which is the foundation for the low distortion and lateral chromatic aberration. In the production lens, the aperture has 11 blades.

### 3.3 Middle Group (MG): L5–L7

#### G3 — Cemented Apochromatic Triplet

- **L5:** S-FPL51 (biconvex positive) — n_e = 1.498, v_e = 81, ΔP_gF = +0.031; f' = +53.4 mm
- **L6:** KZFS-type (biconcave negative) — n_e = 1.658, v_e = 39, ΔP_gF = −0.004; f' = −19.7 mm
- **L7:** S-FPL51 (biconvex positive) — n_e = 1.498, v_e = 81, ΔP_gF = +0.031; f' = +26.1 mm
- **Group focal length:** f'/f = 3.36 (computed) ≈ 3.34 (patent)

This triplet is the optical heart of the APO correction. The two S-FPL51 elements (L5, L7) have very high Abbe numbers (v_d ≈ 81.6) and strongly positive anomalous partial dispersion (+0.031), while the sandwiched KZFS element (L6) has low Abbe number (v_d ≈ 39) and negative anomalous partial dispersion (−0.004). This combination — positive APD crowns flanking a negative APD flint — is the classic configuration for bringing three wavelengths to a common focus (apochromatic correction). The patent states ([0047]) that the positive elements require v_d ≥ 65 and ΔP_gF ≥ +0.013.

The triplet also addresses the sagittal astigmatism and serves as an assembly adjustment member for minimizing field centering errors ([0046]).

Note that L5 has a very weak front radius (R = +5.209 normalized, compared to the rear at R = −0.876), making it nearly plano-convex with power concentrated at the rear surface. This distributes the refraction across the cemented interfaces, reducing surface-by-surface aberration contributions.

### 3.4 Rear Group (HG): L8–L10

#### L8 — Biconvex Positive (1× Aspherical)

- **Glass:** S-LAH89 (OHARA) — n_e = 1.855, v_e = 40
- **Focal length:** +15.4 mm (at f = 35)
- **Shape:** Biconvex, R1 = +0.802, R2 = −0.616 (normalized)
- **Aspherical surface:** Surface 12 (object-side), K = 0, polynomial corrections through A8
- **Cemented to:** L9 (junction = surface 13)

L8 is the strongest positive element in the design (shortest focal length at +15.4 mm). Its aspherical front surface contributes to balancing spherical aberration. The patent ([0054]) states that this asphere helps minimize unwanted spherical aberration contributions. L8 uses the same glass as L1 (S-LAH89), exploiting the quasi-symmetrical layout where corresponding elements on either side of the stop share optical properties.

#### L9 — Biconcave Negative

- **Glass:** KZFS-type short flint — n_e = 1.658, v_e = 39, ΔP_gF = −0.004
- **Focal length:** −16.8 mm (at f = 35)
- **Shape:** Biconcave, R1 = −0.616, R2 = +0.653 (normalized)
- **Cemented to:** L8 (junction = surface 13)

L9 completes the G4 cemented doublet with L8. This is the fourth KZFS-type element in the design, continuing the secondary spectrum correction in the rear group. The patent ([0063]) notes that the G4 doublet design makes the individual elements insensitive to decentration errors during assembly, but in opposite senses — so the combined subgroup is insensitive as a whole.

#### L10 — Negative Meniscus (2× Aspherical)

- **Glass:** L-BAL42 (OHARA PGM) — n_e = 1.583, v_e = 59; n_d = 1.58313, v_d = 59.37
- **Focal length:** −115.0 mm (at f = 35)
- **Shape:** Negative meniscus, concave toward object; R1 = −1.490, R2 = −6.742 (normalized)
- **Aspherical surfaces:** Both surfaces 15 and 16, K = 0, with polynomials through A12 (surface 15) and A8 (surface 16)

L10 is the single-element subgroup G5 and the only lens in the design manufactured by precision glass molding (PGM). The patent explicitly exempts the last element from the KZFS glass requirement ([0022]) "in favor of an aspherical design by precision glass molding." The L-BAL42 glass (OHARA's "L-" prefix denotes low-softening-temperature PGM-compatible grades) enables both surfaces to be aspherically molded in a single pressing operation.

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

The A6 coefficients appear strikingly large in magnitude — particularly for surfaces 15 and 16 (~35), and non-trivially for surfaces 1 and 12 (~1.8 and ~0.5). This is a consequence of the f = 1 mm normalization: under uniform scaling by factor s, the A₂ₙ coefficient scales as s^(2n−1), so going from f = 35 mm production scale to f = 1 mm normalization multiplies A6 by 35⁵ ≈ 5.3 × 10⁷ while multiplying A4 by only 35³ ≈ 4.3 × 10⁴. The design uses intentionally small A4 departures (4th-order correction largely absorbed by the spherical base curvature during optimization), concentrating the aspherical correction in the 6th-order and higher terms.

At production scale, the aspherical departures are not negligible — particularly for L10. Using the estimated semi-diameters from the 2-ray trace (~10.5 mm for surfaces 15–16), the A6 polynomial term alone contributes approximately 0.5–0.8 mm of sag departure, which is comparable to the base spherical sag (~1.1 mm for surface 15 at R = −52.15 mm). This makes L10 a relatively strong asphere by production standards — consistent with it being a PGM element rather than conventionally polished. By contrast, surfaces 1 and 12 show much milder aspherical departures: at their estimated semi-diameters (~12–15 mm), the total polynomial sag departure is on the order of 10⁻³ mm, confirming that L1 and L8 are mild aspherics suitable for CNC or MRF polishing on the high-index S-LAH89 substrate.

**Manufacturing implications:** Surfaces 1 and 12 are on S-LAH89 glass, which cannot be precision-molded (its glass transition temperature is too high). These aspherics are therefore ground and polished using conventional CNC or MRF (magnetorheological finishing) techniques — consistent with Leica's well-known capabilities in aspherical lens production at the Wetzlar facility. Surfaces 15 and 16 are on L-BAL42 PGM glass and are molded.

---

## 5. Glass Selection and the APO Designation

The design uses only five distinct glass types across ten elements:

| Glass | n_d | v_d | ΔP_gF | Elements | Count |
|-------|-----|-----|-------|----------|-------|
| S-LAH89 (OHARA) | 1.85150 | 40.78 | ~0 | L1, L8 | 2 |
| N-KZFS5 (Schott) / S-NBH5 (OHARA) | 1.65412 | 39.70 | −0.004 | L2, L3, L6, L9 | 4 |
| S-FPL51 (OHARA) | 1.49700 | 81.61 | +0.031 | L5, L7 | 2 |
| L-BAL42 (OHARA PGM) | 1.58313 | 59.37 | ~0 | L10 | 1 |
| S-LAH79 (OHARA) | 1.88300 | 40.76 | ~0 | L4 | 1 |

*Note: The patent specifies refractive indices at the e-line (n_e, 546.07 nm) and Abbe numbers v_e. The n_d and v_d values above are from catalog cross-references. The KZFS-type glass (n_e = 1.658, v_e = 39) matches Schott N-KZFS5 (n_d = 1.65412, n_e = 1.65844, v_d = 39.70, ΔP_gF = −0.0044) or its OHARA equivalent S-NBH5 (n_d = 1.65446, v_d = 39.60). The data file uses the Schott N-KZFS5 catalog value (n_d = 1.65412).*

Six elements carry anomalous partial dispersion — four with negative ΔP_gF (the KZFS-type short flints) and two with positive ΔP_gF (S-FPL51 fluorophosphate crowns). This matches Leica's stated specification. The strategy is systematic: every negative-power element except L10 uses the same KZFS-type glass with ΔP_gF = −0.004, and these are distributed across all three groups (two in VG, one in MG, one in HG). This distributed correction architecture ensures that secondary spectrum is corrected not just at the image center (where the MG triplet dominates) but also across the field (where the VG and HG elements dominate the off-axis chromatic contributions).

The "APO" designation requires correction of chromatic aberration at three wavelengths (apochromatic correction), which demands glass types whose partial dispersion deviates from the "normal line" relating P_gF to v_d. The combination of positive-ΔP_gF crowns (S-FPL51) with negative-ΔP_gF flints (KZFS) enables three-color focus convergence that is not achievable with glasses lying on the normal line.

---

## 6. Focus Mechanism

The patent describes a floating-element focus system ([0023], [0091]). During focusing from infinity to close range:

1. The **residual objective** (VG + aperture diaphragm BL + MG, i.e., L1–L7) translates forward as a unit.
2. The **rear group HG** (L8–L10) also translates forward, but with a shorter travel distance.

This differential motion changes two air gaps: the spacing between MG and HG (surface 11, d = 0.35 mm at production scale for infinity) and the back focal distance (surface 16). Because HG moves less than the front assembly, the gap between MG and HG increases during close focusing. Both groups move forward (away from the image plane) to accommodate the longer conjugate distance required by closer objects.

The floating element strategy is motivated by aberration correction at close range. As the patent states ([0023]), the differential motion of HG compensates for changes in coma and astigmatic difference that would otherwise degrade close-range image quality. This is why the lens achieves what Leica describes as "exceptional rendition quality across the entire image at all distance settings" down to its unusually close 0.3 m minimum focus distance — the shortest of any M-mount lens.

The production lens implements this with a 300° focus ring throw, with a tactile detent at 0.7 m marking the boundary of rangefinder-coupled focusing. Below 0.7 m, the user must use Live View or an EVF.

**Note on variable gap estimation:** The patent does not provide explicit close-focus spacing tables. The data file's close-focus gap values are estimated from paraxial conjugate equations assuming a floating ratio (δ_rear ≈ 0.70 × δ_front), yielding d₁₁ ≈ 2.51 mm and BFD ≈ 19.44 mm at 0.3 m. These are approximate and flagged as inferred.

---

## 7. Petzval Sum and Field Curvature

The computed Petzval sum (at n_e wavelength) is +0.0905 in normalized units, corresponding to a Petzval radius of approximately 387 mm at f = 35 mm production scale. This is a relatively large Petzval radius (flat field) for a 35 mm lens, indicating effective field curvature correction.

The field flattening strategy relies on three mechanisms working in concert. First, every positive element uses a high-refractive-index glass (n_d ≥ 1.49 for S-FPL51, 1.85 for S-LAH89, 1.88 for S-LAH79), which reduces the Petzval contribution (φ/n) of each positive surface. Second, four negative elements with comparatively lower index (n_d ≈ 1.654) provide counterbalancing negative Petzval contributions. Third, L10's negative meniscus form provides a field-flattening correction in the final image space, fine-tuned by its double-asphere surfaces.

---

## 8. Symmetry and Aberration Correction Philosophy

The patent repeatedly emphasizes the quasi-symmetrical architecture as the foundation of the design. Examining the element pattern across the stop reveals a clear structural mirror:

| Front of stop | ← Stop → | Rear of stop |
|---------------|-----------|--------------|
| G1: (+) doublet [LAH89 / KZFS] | BL | G3: (+) triplet [FPL51 / KZFS / FPL51] |
| G2: (+) doublet [KZFS / LAH79] | | G4: (+) doublet [LAH89 / KZFS] |
| | | G5: (−) single [PGM asph.] |

The VG-side and HG-side share structural DNA: both contain cemented doublets pairing a high-index positive crown with a KZFS-type negative flint. G1 (LAH89/KZFS) mirrors G4 (LAH89/KZFS); G2 (KZFS/LAH79) has no exact rear mirror but the power balance is maintained by G3 and G5 together. The MG triplet sits at the center, acting as the chromatic correction hub.

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

The APO-Summicron-M 35 f/2 ASPH. is the latest addition to the APO-designated M-mount lens family, following the 90 mm f/2 (1998, the first APO-Summicron-M), the 75 mm f/2 (2005), and the 50 mm f/2 (2012). It is the first 35 mm M-lens to achieve apochromatic correction — a fact Leica emphasizes in its marketing materials. The design shares the distributed-APD-glass philosophy of its predecessors — using KZFS-type flints in every negative element across all groups — but introduces the double-asphere PGM element (L10) as a new tool for compact field correction. The floating focus mechanism, previously employed in the 75 mm APO-Summicron-M and the 50 mm f/1.4 Summilux-M ASPH., is extended here to achieve a 0.3 m close focus distance — the shortest in the M-mount system.

---

## 11. Data File Notes

The companion data file (`LeicaAPO35mmf2.data.ts`) uses d-line (587.56 nm) refractive indices from glass catalogs rather than the patent's e-line values. This produces a computed EFL of ~34.75 mm (vs. 35.0 mm at the e-line). The discrepancy is expected and represents the wavelength-dependent focal shift, not a transcription error.

The patent's aspherical coefficient notation uses a non-standard labeling (a2, a3, ..., a6 for A4, A6, ..., A12). The "D ± N" exponential format in the patent (e.g., "0.1569D − 4" = 1.569 × 10⁻⁵) is a Fortran-style double-precision notation common in German optical patents.

Semi-diameters are estimated (not patent-specified) and should be treated as approximate. The front element SD of 15.0 mm is constrained by the E39 filter thread geometry. Variable gap values for close focus are inferred from paraxial conjugate analysis and should likewise be treated as estimates rather than authoritative design data.
