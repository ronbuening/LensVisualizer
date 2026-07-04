## Patent Reference and Design Identification

**Patent:** US 5,485,314  
**Title:** Standard Zoom Lens  
**Filed:** August 1, 1994; continuation of Ser. No. 08/024,215, filed March 1, 1993  
**Priority date:** March 6, 1992 (JP 4-49471)  
**Granted:** January 16, 1996  
**Inventor:** Haruo Sato  
**Assignee:** Nikon Corporation, Tokyo, Japan  
**Embodiment analyzed:** Fourth Embodiment, Table 4

US 5,485,314 discloses a compact negative-positive two-group standard zoom for 35 mm SLR cameras. Its stated target is a variable power ratio on the order of 2.7 with a wide-angle field angle of about 74°. Table 4, the fourth embodiment, is the prescription used here.

The identification of Table 4 with the Nikon AF Zoom-Nikkor 28-80mm f/3.3-5.6G rests on convergent evidence rather than on a single explicit model-number statement in the patent.

1. **Patent timing and designer.** Nikon's official design article for the AF Zoom-Nikkor 28-80mm f/3.3-5.6G states that Haruo Sato designed the lens, that it was released in March 2001, and that this six-element concave-convex two-group zoom structure was patented in Japan in 1992 and overseas in 1994. Those dates match the priority and filing history of US 5,485,314.
2. **Element and group count.** The production lens is specified as six elements in six groups, including one compound aspherical element. The patent has two moving zoom groups but six air-spaced production elements. In the data file, the thin resin layer of the compound asphere is modeled explicitly as a seventh data element, while `elementCount` remains six to preserve the production count.
3. **Aspherical type.** Examples 1-3 use a glass aspherical surface. The fourth embodiment uses an aspherical lens made from compound glass and resin materials. This directly matches the production lens's compound or hybrid aspherical element.
4. **Focal length and aperture.** The patent design computes as 28.800-77.593 mm with design F-number 3.4-5.8. The production lens is marketed as 28-80 mm f/3.3-5.6.
5. **Field coverage.** The patent Table 4 field is 2ω = 76.6°-30.8°. The production full-frame picture angle is published as 74°-30°10′. This is close enough for a production derivative of the patent design and consistent with normal marketing and vignetting-limited field definitions.

## Optical Architecture

The design is a negative-positive two-group standard zoom. At the wide end it has retrofocus behavior: the effective focal length is 28.8 mm, while the optical back focal distance from the last refractive surface to the image plane is 42.82 mm. At the telephoto end the system is not a telephoto-form lens in the strict TL/EFL sense; it remains a compact standard zoom whose total track is still longer than the effective focal length.

The first zoom group, G1, has negative net power and contains the compound aspherical negative meniscus L1 followed by the positive meniscus L2. G1 supplies the divergent front-group power needed for the wide-angle end and sets the principal-ray geometry that keeps the front diameter small.

The second zoom group, G2, has positive net power and contains four elements: L3 biconvex positive, L4 positive meniscus, L5 biconcave negative, and L6 biconvex positive. Nikon's design article describes this rear group as a convex-convex-concave-convex Ernostar-derived structure. The aperture stop is between L3 and L4; the patent also places a fixed-diameter flare stopper behind L6.

Zooming is by changing the spacing between G1 and G2 and by moving the rear flare-stopper/image-side spacing. From wide to tele, d5 decreases from 39.2856 mm to 0.9985 mm, while the distance from L6 rear to the image plane increases from 42.8194 mm to 79.9884 mm. The total front-surface-to-image track is 116.25 mm at 28.8 mm, 106.58 mm at 50.0 mm, and 115.13 mm at 77.6 mm.

## Element-by-Element Analysis

### L1 — Negative Meniscus, Compound Aspherical

nd = 1.77279, νd = 49.5 for the glass substrate. Glass: S-LAH66 class (OHARA). Resin layer: nd = 1.49712, νd = 55.9, proprietary UV-curing optical resin. f = -28.42 mm for the compound element.

L1 is the front negative element of G1 and the only aspherical element in the patent embodiment. The glass substrate uses R1 = +97.086 mm and R2 = +19.500 mm with a center thickness of 2.20 mm. A 0.03 mm resin layer is bonded to its rear surface, and the resin's air-contact face is the aspherical surface with paraxial R3 = +16.891 mm.

The hybrid construction is not merely a manufacturing detail. The aspherical surface is placed at the strongest front-group leverage point for distortion and off-axis aberration control. Because the first group contains only two elements, the rear surface of L1 must do more than simple barrel-distortion correction; it also supports the balance of coma and field curvature across the zoom range.

### L2 — Positive Meniscus, Convex to Object

nd = 1.80458, νd = 25.5. Glass: S-TIH6 class (OHARA). f = +80.34 mm.

L2 completes the negative first zoom group. Its radii, R4 = +26.633 mm and R5 = +42.414 mm, form a positive meniscus convex toward the object. The high-index, high-dispersion flint moderates L1's strong negative power and contributes to front-group chromatic correction.

Although G1 is negative overall, L2 is important to the compactness of the lens. The patent's configurational-factor condition for the negative first element and the power ratio between G1 and G2 keep the off-axis ray height at the front of the system under control while preserving a 2.7× zoom ratio.

### L3 — Biconvex Positive

nd = 1.64000, νd = 60.0. Glass: S-BSM81 (OHARA). f = +35.38 mm.

L3 is the leading positive element in G2. Its front surface, R6 = +25.554 mm, carries most of the curvature; the rear surface, R7 = -186.207 mm, is weak. This element begins the convergence of the divergent bundle from G1 and contributes a large positive Petzval term.

The stop is located in the 1.40 mm air interval between L3 and L4. The data file splits that interval into 0.70 mm before the stop and 0.70 mm after it because the patent specifies the stop's location qualitatively in the gap rather than publishing a separate stop spacing.

### L4 — Positive Meniscus, Convex to Object

nd = 1.51680, νd = 64.1. Glass: J-BK7A (HIKARI) / N-BK7 class (SCHOTT). f = +47.18 mm.

L4 follows the aperture stop. Its R8 = +22.446 mm and R9 = +267.680 mm form a positive meniscus convex toward the object. It supplies additional positive power after the stop while keeping dispersion low.

The earlier S-BSL7 label is not the best catalog identification. OHARA S-BSL7 is a BK7-family glass but its published nd is about 1.51633, whereas the patent value is 1.51680. HIKARI J-BK7A and SCHOTT N-BK7-class glass match the tabulated index and Abbe number more closely, so the data and analysis use that identification.

### L5 — Biconcave Negative

nd = 1.79504, νd = 28.6. Glass: 795286 - J-LAFH3 (HIKARI; no source-backed catalog match). f = -17.52 mm.

L5 is the sole negative element in G2. The front surface is R10 = -61.313 mm and the rear surface is R11 = +18.917 mm, with the stronger curvature on the image side. Its high-index lanthanum-flint character makes it the main negative correction element in the rear group.

A surface-by-surface Petzval calculation gives L5 contributions of -0.00722 mm^-1 at surface 10 and -0.02341 mm^-1 at surface 11. The rear surface of L5 is therefore the single largest negative Petzval term in the prescription, pulling the otherwise positive rear group toward a flatter field.

### L6 — Biconvex Positive

nd = 1.64831, νd = 33.7. Glass: J-SF2 / S-TIM22 / N-SF2 class. f = +37.73 mm.

L6 is the final refractive element, with R12 = +141.576 mm and R13 = -29.366 mm. It provides the final positive convergence before the image plane and works with L5 to balance longitudinal color and field curvature near the rear of the system.

The flat surface labeled S in the patent follows L6. It is a fixed-diameter flare stopper rather than the aperture stop. It is retained in the data file as surface 14 because it controls ray clipping and because the patent gives its separate spacing trajectory.

## Glass Identification and Selection

The glass identifications below are based on independent catalog matching against authoritative manufacturer data. They are class identifications unless the catalog pair closely matches both nd and νd.

| Element | Patent nd | Patent νd | Preferred identification | Catalog comparison |
|---|---:|---:|---|---|
| L1 glass | 1.77279 | 49.5 | S-LAH66 class (OHARA) | OHARA S-LAH66: nd 1.77250, νd 49.60 |
| L1 resin | 1.49712 | 55.9 | UV-curing optical resin | Proprietary patent-listed resin |
| L2 | 1.80458 | 25.5 | S-TIH6 class (OHARA) | OHARA S-TIH6: nd 1.80518, νd 25.42 |
| L3 | 1.64000 | 60.0 | S-BSM81 (OHARA) | OHARA S-BSM81: nd 1.64000, νd 60.08 |
| L4 | 1.51680 | 64.1 | J-BK7A / N-BK7 class | HIKARI J-BK7A: nd 1.516800, νd 64.14; SCHOTT N-BK7: nd 1.51680, νd 64.17 |
| L5 | 1.79504 | 28.6 | 795286 - J-LAFH3 (HIKARI; no source-backed catalog match) | Six-digit class retained; no source-backed Sellmeier entry added |
| L6 | 1.64831 | 33.7 | J-SF2 / S-TIM22 / N-SF2 class | HIKARI J-SF2 and SCHOTT N-SF2 are slightly lower in nd but match the dense-flint class |

The design uses conventional crown/flint balancing rather than ED or anomalous-partial-dispersion correction. L1 and L2 form the front-group chromatic pair; L3/L4 supply low-dispersion positive power after the group separation; L5 and L6 provide the negative/positive rear correction pair.

## Focus Mechanism

The patent publishes only infinity-focus zoom spacings. It describes zooming as changing the group-to-group space between the first and second lens groups, but it does not publish close-focus spacing tables or a focus cam.

The production lens focuses to 0.35 m and reaches 1/3.4 reproduction, or about 0.294×. A simple unit-extension model does not reproduce that behavior: using the patent infinity prescription, unit extension to a 0.35 m object would predict substantially different magnifications, especially at the telephoto end. Therefore the previous statement that focusing is by unit extension was too strong.

The data file records the official 0.35 m close-focus specification as metadata, but the variable-gap arrays keep close-focus values equal to the infinity values. This is intentional. It avoids encoding an undocumented focus mechanism as if it were patent data.

| Spacing | 28.8 mm | 50.0 mm | 77.6 mm | Role |
|---|---:|---:|---:|---|
| d5 | 39.2856 | 13.4711 | 0.9985 | G1-G2 zoom spacing |
| d13 | 0.0000 | 8.0000 | 16.0000 | L6-to-flare-stopper spacing |
| d14 | 42.8194 | 50.9667 | 63.9884 | Flare-stopper-to-image spacing |

## Aspherical Surfaces

One surface is aspherical: surface 3, the air-contact rear face of the L1 resin layer. In the data file it is labeled `3A`.

The patent uses the sag equation

$$x = \frac{y^2 / r}{1 + \sqrt{1 - k y^2 / r^2}} + c_2 y^2 + c_4 y^4 + c_6 y^6 + c_8 y^8 + c_{10} y^{10}.$$

In this convention a sphere has k = 1. The data file uses the standard conic convention in which a sphere has K = 0, so K = k - 1.

| Surface | R | Patent k | Standard K | A4 | A6 | A8 | A10 |
|---|---:|---:|---:|---:|---:|---:|---:|
| 3A | +16.891 | 0.6569 | -0.3431 | -4.3090e-6 | -1.4986e-8 | +2.6086e-11 | -2.6365e-13 |

The negative standard K and negative fourth-order term reduce the peripheral sag relative to a stronger spherical base and help control wide-end distortion and off-axis aberration. Because the resin layer is only 0.03 mm thick on axis, the edge thickness depends on the balance between the glass/resin junction curvature and the molded aspherical departure.

## Conditional Expressions

All conditional values below were recomputed from the Table 4 prescription by paraxial ray trace.

| Condition | Formula | Patent value | Computed value |
|---|---|---:|---:|
| (1) | f2 / |f1| | 0.762 | 0.7616 |
| (2) | X2 / fw | 1.291 | 1.2906 |
| (3) | |f1| / sqrt(fw fT) | 1.01 | 1.0150 |
| (4) | |f1| / fT | 0.618 | 0.6183 |
| (5) | f2 / fT | 0.471 | 0.4709 |
| (6) | (Dw - DT) / fw | 1.33 | 1.3294 |
| (7) | Bfw / fw | 1.487 | 1.4868 |
| (8) | q = (r2 + r1) / (r2 - r1) | -1.42 | -1.4212 |

The computed group focal lengths are f1 = -47.982 mm and f2 = +36.545 mm. The zoom displacement X2 used in condition (2) is 37.169 mm, from the L6-rear-to-image distance increasing from 42.8194 mm to 79.9884 mm.

## Verification Summary

The prescription was re-entered from Table 4 and checked with an independent y-u paraxial matrix trace. The flat flare stopper has no refractive power, so the optical back focal distance is measured from L6's rear refractive surface, surface 13, to the image plane. The patent's d14 is instead the distance from the flare stopper S to the image plane.

| Quantity | 28.8 mm | 50.0 mm | 77.6 mm |
|---|---:|---:|---:|
| Computed EFL (mm) | 28.7996 | 49.9979 | 77.5927 |
| Patent EFL (mm) | 28.8000 | 50.0000 | 77.6000 |
| Computed BFD from L6 rear (mm) | 42.8187 | 58.9639 | 79.9811 |
| Patent d13 + d14 (mm) | 42.8194 | 58.9667 | 79.9884 |
| Patent S-to-image d14 (mm) | 42.8194 | 50.9667 | 63.9884 |
| Computed design F-number from STO = 8.30 mm | 3.423 | 4.455 | 5.799 |
| Total front-surface-to-image track (mm) | 116.2450 | 106.5778 | 115.1269 |

The EFL agreement is within 0.01% at all three zoom positions. The optical BFD values agree with d13 + d14 to within the rounding expected from the patent table. The fixed stop semi-diameter in the data file reproduces the patent's design F-number range of about f/3.4-5.8; the separate `nominalFno` array records Nikon's marketed f/3.3, f/4.5, and f/5.6 values for the UI.

The Petzval sum was computed surface-by-surface as Σ φ/(n n′), not by thin-lens element approximation. The result is +0.002542 mm^-1, corresponding to a Petzval radius of approximately +393 mm. This weak positive value is consistent with a compact standard zoom that relies on the L5 negative element for field flattening but does not include a dedicated field flattener.

The data file semi-diameters are not patent values. They are inferred implementation apertures chosen to satisfy the renderer's geometric constraints while preserving a plausible on-axis paraxial ray fan. The front hybrid asphere is especially constrained by the `sd/|R| < 0.90` limit on the R = +16.891 mm aspherical surface, and the tight rear-group air gaps constrain the clear apertures around L4-L6. These values should not be used as production mechanical dimensions.

## Design Heritage and Context

The patent positions the design against earlier two-group standard zooms with smaller zoom ratios or narrower wide-angle fields. Its main optical problem is maintaining a roughly 2.7× zoom ratio and a wide-angle field near 74° while keeping the first group to two elements. The solution is not simply to add an asphere for distortion; it is to use the aspherical rear surface of the first negative element as part of the complete off-axis aberration balance.

Nikon's later design article identifies the AF Zoom-Nikkor 28-80mm f/3.3-5.6G as a six-element, concave-convex two-group normal zoom that deliberately broke the seven-element minimum previously considered necessary for this class. That historical claim is consistent with the patent's fourth embodiment and with the production lens's compound aspherical construction.

## Sources

- US Patent 5,485,314, "Standard Zoom Lens," Haruo Sato, Nikon Corporation, granted January 16, 1996.
- Nikon Corporation, "NIKKOR - The Thousand and One Nights No.63: The AF Zoom-Nikkor 28-80mm f/3.3-5.6G."
- Nikon Corporation, "AF Nikkor Lenses Specifications," April 2004, row for AF 28-80mm f/3.3-5.6G.
- OHARA Corporation optical glass catalog entries for S-LAH66, S-TIH6, and S-BSM81.
- Hikari Glass / Nikon J-series optical glass catalog entries for J-BK7A and J-SF2; J-LAFH3 was checked but retained as an unresolved six-digit class label.
- SCHOTT optical glass catalog entries for N-BK7 and N-SF2.
