## Patent Reference and Design Identification

**Patent:** GB 775,944
**Application Number:** 19315/55
**Filed:** July 4, 1955; priority July 31, 1954 (Germany)
**Published:** May 29, 1957
**Applicant:** Agfa Camera-Werk Aktiengesellschaft, Munich, Germany
**Title:** Photographic Objective
**Embodiment analyzed:** Sole numerical example

GB 775,944 describes an enlarger objective of Heliar type: five glass elements in three air-separated groups, with cemented positive doublets on both sides of a biconcave negative singlet. The numerical example is normalized to $f = 1.00$ and has a relative aperture of 1:4.5. The patent text also states that the drawing is a diagrammatic section of an objective of focal length 200 mm; the tabulated prescription itself is dimensionless and scalable.

The association with the Agfa Color-Magnolar II is an attribution, not an explicit patent marking. The convergent evidence is strong enough for a catalog model: the patent applicant is Agfa Camera-Werk AG; the objective is specified for enlarger use; the design is a 5/3 Heliar-type lens; the maximum aperture is f/4.5; the correction range is described as 350-720 nm for color and black-and-white enlarging; and the Color-Magnolar II production family is documented as a 5/3 f/4.5 enlarger-lens family. Production catalog evidence is imperfect: 60 mm and 105 mm Color-Magnolar II examples are attested, while a 100 mm production variant is not independently confirmed. The paired data file therefore uses the user-requested 100 mm scale as a normalized representative model, not as proof of a distinct 100 mm production SKU.

All linear patent dimensions in the data file are multiplied by 100. The computed effective focal length at that scale is 100.0015 mm. The design remains all-spherical; no aspherical coefficients are present in the patent.

## Optical Architecture

The lens is a Heliar-derived enlarger objective. Its group power sequence is positive-negative-positive:

- **Group I:** L1/L2 cemented doublet, $f = +50.21$ mm as a standalone group.
- **Group II:** L3 biconcave singlet, $f = -32.02$ mm standalone in air.
- **Group III:** L4/L5 cemented doublet, $f = +57.63$ mm as a standalone group.

The first and last groups are both cemented achromats, but the design is not a strict mirror-symmetric Heliar. L1 and L5 share the same SK16-class crown glass, and $r_5$ and $r_7$ share the same radius value, but the negative partners are different glasses and the front and rear radii are not mirrored. This controlled asymmetry is consistent with an enlarger lens intended for finite conjugates rather than a simple visual objective optimized only at infinity.

At the 100 mm scale, the axial distance from $r_1$ to $r_8$ is 30.1595 mm. The paraxial back focal distance is 82.6491 mm, giving a front-surface-to-image distance of 112.8086 mm at infinity focus. The compact glass stack and long back focal distance are normal for a near-symmetric enlarger lens used with an external focusing stage.

The patent emphasizes three design choices: the outer component diameters are enlarged beyond the effective aperture diameter; the negative glasses and central biconcave glass are kept at $n_d \leq 1.58$ and sufficiently below the positive crowns; and the central singlet's Abbe number is constrained relative to the mean Abbe number of the cemented components. In combination, the patent claims these choices yield uniform correction over a 350-720 nm spectral range while avoiding very high-index glass.

## Element-by-Element Analysis

### L1 - Biconvex Positive Crown

$n_d = 1.62041$, $\nu_d = 60.3$. Glass: SK16 / N-SK16 class (Schott). Standalone in-air $f = +33.79$ mm.

L1 is the front positive crown of the first cemented doublet. Its front surface, $r_1 = +31.183$ mm at the data-file scale, is much stronger than its cemented rear surface, $r_2 = -58.3253$ mm. As a standalone element it has more positive power than the complete front group; L2 partially cancels that power while correcting chromatic error at the cemented interface.

The center thickness is 7.157 mm at the 100 mm scale, or 7.16% of the focal length. This satisfies the patent's second claim, which requires the axial thicknesses of the two convergent elements to be greater than 6% of the focal length.

### L2 - Weakly Biconcave Negative Flint

$n_d = 1.56138$, $\nu_d = 45.3$. Glass: LLF4 class (Sumita legacy catalog; Schott-type). Standalone in-air $f = -93.84$ mm.

L2 is the negative partner of the first cemented doublet. Its rear surface, $r_3 = +551.2448$ mm at the scaled prescription, is extremely weak, so the element behaves almost like a cemented plano-concave flint. Its purpose is not to dominate the group power, but to temper the strong positive crown and provide the higher dispersion side of the achromatic pair.

The prior draft treated this glass as unmatched. That was too conservative. The pair $n_d = 1.56138$, $\nu_d = 45.3$ is an exact LLF4-class entry in a Sumita legacy glass table, identified there as a Schott-type glass. Because the patent is German and does not name a supplier, the safer wording is class-level rather than a claim that Agfa used Sumita glass.

### L3 - Biconcave Negative Central Singlet

$n_d = 1.54041$, $\nu_d = 50.9$. Glass: unmatched 540/509 glass. Standalone in-air $f = -32.02$ mm.

L3 is the central biconcave singlet and the strongest negative component in the design. It defines the Heliar form by separating the two positive cemented doublets and is the principal negative field-curvature contributor.

The singlet is asymmetric. The surface facing the short-conjugate side, $r_5 = +25.6505$ mm at the 100 mm scale, is much more strongly curved than the opposite surface, $r_4 = -53.9667$ mm. The patent describes this relationship explicitly: the radius of the concave surface facing the short-conjugate plane is between 0.4 and 0.6 times the absolute value of the radius of the other concave surface. The numerical example gives $|r_5|/|r_4| = 0.4753$.

This glass remains unresolved. The index and Abbe value place it near the crown/flint boundary, but no confident match was located in the checked public catalog data. The data file therefore uses an explicit `Unmatched` glass annotation rather than seeding a catalog name from approximate values.

### L4 - Weakly Biconcave Negative Crown-Flint Boundary Glass

$n_d = 1.52310$, $\nu_d = 50.9$. Glass: KF5 class (Sumita legacy catalog; Schott-type). Standalone in-air $f = -47.04$ mm.

L4 is the negative element in the rear cemented doublet. Its front surface, $r_6 = -613.6018$ mm at the scaled prescription, is nearly flat. Most of its refractive action comes from the cemented interface $r_7 = +25.6505$ mm, where it meets the rear positive crown.

The prior draft identified this element as N-KF9 class. That is not the best match. Current Schott N-KF9 is close, but the scaled patent value $n_d = 1.52310$, $\nu_d = 50.9$ matches a legacy KF5-class entry more directly. As with L2, the correct wording is class-level because the public legacy table marks it as Schott-type rather than proving the melt used by Agfa.

### L5 - Biconvex Positive Crown

$n_d = 1.62041$, $\nu_d = 60.3$. Glass: SK16 / N-SK16 class (Schott). Standalone in-air $f = +26.78$ mm.

L5 is the rear positive crown and the stronger of the two positive elements when each is considered alone. Its front cemented surface shares the same radius value as $r_5$, but the surrounding glass and group context are different. In Group III, L4 contributes stronger negative correction than L2 does in Group I, so the rear group remains a moderate positive doublet rather than simply overpowering the system.

The 6.5383 mm center thickness is 6.54% of the 100 mm focal length, satisfying the patent's convergent-element thickness condition. This thickness also gives the rear biconvex element enough rim thickness for the clear aperture estimated in the paired data file.

## Glass Identification and Selection

The patent lists only $n_d$ and $\nu_d$ values; it does not name the glass manufacturer. The prescription uses four distinct glass positions:

| Elements | $n_d$ | $\nu_d$ | Identification used | Basis |
|---|---:|---:|---|---|
| L1, L5 | 1.62041 | 60.3 | SK16 / N-SK16 class (Schott) | Exact modern Schott N-SK16 index; legacy SK16 value is identical at patent precision |
| L2 | 1.56138 | 45.3 | LLF4 class (Sumita legacy catalog; Schott-type) | Exact index and Abbe match in legacy Sumita table |
| L3 | 1.54041 | 50.9 | Unmatched 540/509 glass | No confident public catalog match located |
| L4 | 1.52310 | 50.9 | KF5 class (Sumita legacy catalog; Schott-type) | Exact index and Abbe match in legacy Sumita table |

The chromatic strategy is conventional but carefully constrained. L1/L2 and L4/L5 are crown-flint cemented pairs, while L3 is deliberately kept at $\nu_d \geq 48.0$ and close to the mean Abbe number of the four cemented-doublet elements. This prevents the central negative element from becoming a high-dispersion outlier. Because the patent does not publish partial-dispersion data, the analysis should not describe the lens as apochromatic. The safer description is broadband achromatized enlarger objective, matching the patent's claim of correction over 350-720 nm.

## Focus Mechanism

The optical formula has no internal focus mechanism. It is an enlarger objective; focusing is performed by moving the entire lens assembly relative to the negative and paper planes using the enlarger's mechanical stage.

The data file models this as a single variable back-focus gap. The infinity state uses the computed paraxial BFD of 82.6491 mm. The close state adds one 100.0015 mm EFL, giving 182.6507 mm, which is a convenient 1:1 finite-conjugate reference. That state is not a manufacturer-published minimum-focus distance and should not be interpreted as a camera-lens MFD.

## Conditional Expressions

### Overall length versus effective aperture diameter

The patent requires the difference between the overall length and the aperture diameter corresponding to the widest effective beam leaving the exterior surface facing the long-conjugate plane to be at least 15% of the overall length.

At the normalized scale, $L = 0.301595$ and the f/4.5 effective aperture diameter is $1/4.5 = 0.222222$. The ratio is:

$$
\frac{0.301595 - 0.222222}{0.301595} = 0.2632.
$$

The example satisfies the condition.

### Low-index divergent elements and central singlet

The divergent elements and the biconcave singlet must have refractive index at most 1.58 and at least 0.04 less than the positive crown elements.

| Element | $n_d$ | $1.62041 - n_d$ | Result |
|---|---:|---:|---|
| L2 | 1.56138 | 0.05903 | Satisfied |
| L3 | 1.54041 | 0.08000 | Satisfied |
| L4 | 1.52310 | 0.09731 | Satisfied |

### Central singlet Abbe constraint

The patent requires the Abbe number of L3 to be at least 48.0 and no more than 10.0 below the arithmetic mean of the Abbe numbers of the cemented-component glasses.

The mean value is:

$$
\frac{60.3 + 45.3 + 50.9 + 60.3}{4} = 54.2.
$$

L3 has $\nu_d = 50.9$, so the difference is $54.2 - 50.9 = 3.3$. The example satisfies both parts of the condition.

### Central singlet radius ratio

The patent states that the radius of the concave surface of the biconcave singlet facing the short-conjugate plane should be between 0.4 and 0.6 times the absolute radius of the other concave surface. The numerical value is:

$$
\frac{|r_5|}{|r_4|} = \frac{0.256505}{0.539667} = 0.4753.
$$

The example satisfies the condition.

### Convergent-element thickness

Claim 2 requires the axial thicknesses of the convergent elements in the two cemented components to be greater than 6% of the focal length.

At the normalized scale, $d_1 = 0.071570$ and $d_5 = 0.065383$. Both exceed 0.06, so the condition is satisfied.

## Verification Summary

A fresh paraxial y-$n u$ trace was run directly from the numerical prescription. The values below use the 100 mm data-file scale.

| Quantity | Computed value |
|---|---:|
| Effective focal length | 100.0015 mm |
| Back focal distance | 82.6491 mm |
| Front surface to paraxial image plane | 112.8086 mm |
| Group I standalone focal length | +50.2065 mm |
| Group II standalone focal length | -32.0169 mm |
| Group III standalone focal length | +57.6291 mm |
| Surface-by-surface Petzval sum | 0.001819 mm$^{-1}$ |
| Petzval radius at 100 mm scale | 549.74 mm |

The Petzval value uses the surface formula $\sum \phi/(n n')$, not a thin-element approximation. The element focal lengths quoted in this analysis are standalone in-air values; they are not in-situ effective powers inside the assembled lens.

## Design Heritage and Context

The Heliar form descends from the early twentieth-century symmetric triplet family: two outer positive cemented components separated by a central negative singlet. Its appeal for enlarger work is straightforward. At finite conjugates, approximate bilateral symmetry helps cancel odd-order aberrations, while the cemented outer groups provide achromatic correction without adding extra air-glass interfaces.

GB 775,944 adapts that architecture for color enlarging by constraining both the geometry and the glass palette. The patent specifically criticizes earlier enlarger objectives whose image quality was uniform only over a narrow spectral region and claims that the present design maintains correction over 350-720 nm, including near-ultraviolet components relevant to cold-light illumination. The prescription achieves that without any glass above $n_d = 1.62041$.

## Sources

- GB 775,944. *Photographic Objective.* Agfa Camera-Werk Aktiengesellschaft. Published May 29, 1957.
- SCHOTT Advanced Optics. Optical Glass Datasheet N-SK16.
- Sumita Optical Glass. Legacy optical-glass table listing LLF4 and KF5 class glasses.
- Delta Lenses. Agfa-Gevaert Enlarger Lenses catalog and historical notes. Used only for production-family context, not for hard prescription data.
