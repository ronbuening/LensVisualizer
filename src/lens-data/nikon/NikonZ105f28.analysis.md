# NIKKOR Z MC 105mm f/2.8 VR S — Patent Model

## Patent Reference and Design Identification

**Patent:** WO 2022/097401 A1

**Inventor:** Tomonori Kuribayashi

**Assignee:** Nikon Corporation

**Filed:** 2021-10-04

**Priority:** 2020-11-06

**Published:** 2022-05-12

**Embodiment analyzed:** Example 1, Table 1 and Figure 1

The diagram uses the 16-element, 11-component macro example associated with the NIKKOR Z MC 105mm f/2.8 VR S. The correspondence is based on the optical architecture, focal length, single asphere and life-size focus state. It does not establish identical production prescriptions, suppliers, coatings or actuators. The 105mm f/2.8 product name remains separate from the source's 102.86mm f/2.89 infinity prescription.

The original PDF gives equation (B) on p. 25, Table 1 on pp. 27–29 and Figure 1 on p. 55. The source full field is 24.06°, image height 21.70 mm and back focus 16.78 mm. Its total length is rounded to 149.38 mm; the individual gaps sum to 149.374 mm at infinity and 149.375 mm at both finite stations.

## Optical Architecture

Four motion groups have alternating positive–negative–positive–negative power. Their published focal lengths are +56.05, −49.08, +52.89 and −64.87 mm. Five cemented doublets reduce 16 individual elements to 11 air-separated components. These component counts differ from the four groups that describe the focusing motion.

G1 has a positive singlet, a negative/positive cemented pair and another positive singlet. G2 contains a negative singlet and negative/positive doublet. G3 has a positive singlet and a negative/positive doublet. G4 comprises a negative singlet, two negative/positive doublets and a final negative aspherical singlet. G2 and G3 approach the fixed central stop from opposite sides during focus.

The stop is source surface 13. G1, the stop and G4 remain fixed relative to the image. The diagram's four variable-gap labels identify G1–G2, G2–stop, stop–G3 and G3–G4. They preserve the patent's two independent moving groups rather than translating the whole lens.

The semi-diameters are inferred from the optical rims in Figure 1 at 600 dpi, calibrated against the 132.594 mm first-to-last-surface span. The front radius is approximately 23.2 mm and the rear aspherical element approximately 18.3 mm. Internal radii decrease toward the stop. Drawing-derived dimensions are checked for surface clearance and image-circle coverage; they are not published clear-aperture specifications. The tighter L22 front radius is retained for clearance to the preceding surface.

## Element-by-Element Analysis

The focal lengths below are independently calculated for each thick element in air using its source index, radii and thickness. A cemented element's isolated focal length is not the power of the assembled doublet.

| Element | Form | nd | νd | Isolated focal length (mm) |
|---|---|---:|---:|---:|
| L11 | Biconvex Positive | 1.83481 | 42.73 | +193.4 |
| L12 | Negative Meniscus | 1.85451 | 25.15 | -89.1 |
| L13 | Positive Meniscus | 1.59319 | 67.90 | +68.6 |
| L14 | Positive Meniscus | 1.59319 | 67.90 | +101.2 |
| L21 | Biconcave Negative | 1.51860 | 69.89 | -77.6 |
| L22 | Negative Meniscus | 1.72047 | 34.71 | -52.1 |
| L23 | Positive Meniscus | 1.94595 | 17.98 | +77.3 |
| L31 | Biconvex Positive | 1.83481 | 42.72 | +90.8 |
| L32 | Negative Meniscus | 1.85451 | 25.15 | -66.6 |
| L33 | Biconvex Positive | 1.59319 | 67.90 | +43.3 |
| L41 | Negative Meniscus | 1.95375 | 32.33 | -66.8 |
| L42 | Negative Meniscus | 1.51860 | 69.89 | -64.5 |
| L43 | Positive Meniscus | 1.94595 | 17.98 | +107.2 |
| L44 | Negative Meniscus | 2.00069 | 25.46 | -60.4 |
| L45 | Positive Meniscus | 1.80440 | 39.61 | +29.0 |
| L46 | Neg. Meniscus (1× Asph) | 1.51680 | 64.14 | -119.1 |

The negative L12 and L32 elements share the source's measured partial dispersion and occupy corresponding positions in the two positive groups. The higher-Abbe L13/L14/L33 elements supply positive power with lower dispersion. G2's positive flint counteracts part of its negative singlets' chromatic power. In the rear group, the high-index negative/positive pairs allow substantial opposing powers in a compact assembly. These functional descriptions are interpretations of the prescription, not isolated aberration measurements.

## Glass Identification and Selection

The patent specifies nd and νd for every element and θgF = 0.6103 for L12 and L32. It does not name glass suppliers. Catalog-compatible curves are modeling inferences, with the source's numerical indices and Abbe numbers preserved.

| Elements | Compatible catalog curve |
|---|---|
| L11, L31 | S-LAH55V |
| L12, L32 | NBFD25 |
| L13, L14, L33 | J-PSKH1 |
| L21, L42 | J-PKH1 |
| L22 | N-KZFS8 |
| L23, L43 | FDS18 |
| L41 | S-LAH98 |
| L44 | TAFD40L-W |
| L45 | S-LAH63 |
| L46 | N-BK7 |

These names identify compatible coefficient-backed curves, not historical production identities. A numerical match does not establish the glass composition, molding process or supplier. In particular, the high-index L44 is not identified as a third ED or APD element by the patent. That earlier speculative badge has been removed.

The source's θgF value must be converted before storing a deviation relative to the engine's reference line. The patent uses a different normal line, producing its approximately +0.0095 deviation. The engine uses 0.6438 − 0.001682νd, so the stored value is:

**ΔPgF = 0.6103 − (0.6438 − 0.001682 × 25.15) = 0.0088023.**

This preserves the measured ratio 0.6103 rather than shifting it through a mismatched reference. L12 and L32 retain patent-backed APD status. The patent alone does not identify a production ED-element count, and no additional APD claim is made merely from index or Abbe number.

## Focus Mechanism

Table 1 supplies infinity, half-life-size and life-size states. All three prescriptions are retained.

| Source state | Infinity | β = −0.5 | β = −1.0 |
|---|---:|---:|---:|
| Object to first surface D0 (mm) | ∞ | 226.746 | 138.188 |
| G1–G2 (mm) | 3.662 | 12.980 | 22.619 |
| G2–stop (mm) | 25.484 | 16.167 | 6.528 |
| Stop–G3 (mm) | 24.986 | 14.031 | 4.245 |
| G3–G4 (mm) | 2.206 | 13.161 | 22.947 |
| Source FNO | 2.89 | 3.68 | 4.65 |

D0 is measured from the object to the first optical surface (paragraph 0091), not to the image. Adding the finite optical track gives 0.376121 m and 0.287563 m object-to-image distances. The focus control uses these distances: its intermediate source coordinate is the ratio 0.287563/0.376121. The displayed closest distance rounds to 29 cm. Intermediate focus positions interpolate gaps and inverse distance and remain estimates.

At life size, G2 travels approximately 18.956 mm toward the image and G3 approximately 20.740 mm toward the object. The rounded table gaps imply 18.957 and 20.741 mm before anchoring; their 0.001 mm closure difference is source rounding. G1, the stop and G4 retain their positions within that tolerance.

Independent paraxial transfer reproduces magnifications −0.500011 and −1.000009. The derived effective focal lengths are 102.86074 mm at infinity, 70.46271 mm at half life size and 49.28406 mm at life size. This substantial breathing is inherent in the published internal-focus prescription. It does not indicate a zoom mechanism, so no zoom slider is shown.

The source finite-state FNO values are working-aperture figures, distinct from the nominal infinity aperture control. The viewer's effective-aperture calculation is an estimate and should not be treated as an exact reproduction of those source values. The nominal control starts at f/2.89, and the physical iris remains fixed during focusing. Source finite FNO values are retained here rather than relabeling the physical diaphragm as if it had been stopped down.

The 138.188 mm D0 at life size is an optical object-to-first-surface distance. It is not the working distance to a physical barrel or hood, whose location is not supplied by this prescription.

## Aspherical Surfaces

Only source surface 27, the front of L46, is aspherical. Equation (B) uses the square-root factor 1 − κy²/R². Source κ = 1 therefore corresponds to standard K = 0, a spherical base; the existing conic interpretation is retained.

| Coefficient | Source value |
|---|---:|
| A4 | 9.61768 × 10⁻⁶ |
| A6 | 1.56877 × 10⁻⁸ |
| A8 | −4.92862 × 10⁻¹¹ |
| A10 | −1.29299 × 10⁻¹³ |
| A12 | −7.46540 × 10⁻¹⁷ |

The coefficients and vertex radius −26.4605 mm are retained exactly from the source. The surface sits in the fixed rear group; its optical profile does not change during focus. Its enlarged inferred rim is checked against the exact polynomial and adjacent geometry. The source does not establish a polishing, molding or resin process.

## Sources and Modeling Limits

- Original WO 2022/097401 A1: title page, equation (B) and distance definitions on p. 25, Example 1 tables on pp. 27–29, Figure 1 on p. 55.
- Coefficient-backed catalog counterparts supply dispersion models; source θgF controls the two APD elements.
- Rims are inferred from the figure. Focus endpoints are source distances plus optical track. Intermediate controls are reconstructed estimates.
- Production supplier, ED-element identity, coatings, actuator design and barrel working distance are not established by the numerical example.
