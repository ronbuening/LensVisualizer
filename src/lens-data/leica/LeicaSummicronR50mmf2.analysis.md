# Leica Summicron-R 50mm f/2 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 4,123,144  
**Filed:** May 16, 1977  
**Granted:** October 31, 1978  
**Priority:** May 18, 1976 (DE 2621981)  
**Inventors:** Walter Mandler, Garry Edwards, Erich Wagner  
**Assignee:** Ernst Leitz Wetzlar GmbH  
**Title:** Four-Member Gauss Objective  
**Embodiment analyzed:** Example 8

US 4,123,144 discloses a four-component, six-element Gauss objective with planar cemented bond surfaces on each side of the stop, matched surface radii around the diaphragm, and an optional planar object-facing surface on the sixth element. Example 8 is the most appropriate patent embodiment for the Summicron-R 50mm f/2 optical cell because it combines the FIG. 2 last-element form, the longest back focal distance among the nine examples, and the same 6-element / 4-group production architecture published for the lens.

The production lens is published by Leica with a 52.5 mm focal length, 6 elements in 4 groups, a 0.5 m minimum focus distance, and a 1:7.5 maximum reproduction ratio. The patent Example 8 prescription is normalized to $f = 100$, so the data file scales all radii, axial thicknesses, and estimated clear apertures by $52.5/100 = 0.525$. The rounded patent prescription computes to $f = 100.012$, so the scaled prescription computes to $f = 52.506$ mm; this difference is a rounding residual, not a separate design.

One significant correction to the prior analysis is the spectral line convention. The patent tables do not use ordinary d-line catalog values. Their refractive-index and Abbe-number pairs match e-line glass constants, for example Schott SF10 at $n_e = 1.73430$, $\nu_e = 28.19$ and Schott SF11 at $n_e = 1.79190$, $\nu_e = 25.55$. The accompanying `.data.ts` file preserves those patent values in the schema's `nd` and `vd` fields because the current LensData schema has no separate `ne` / `ve` fields. The analysis therefore writes the patent glass constants as $n_e$ and $\nu_e$.

## Optical Architecture

The design is an all-spherical, four-component, six-element modified double-Gauss objective. It has two positive outer singlets and two cemented meniscus doublets around a central stop. In patent normalization it is a 1:2 objective with a 22.5° semi-field angle, corresponding to a 45° full field.

The component sequence is:

| Component | Elements | Form | Computed component focal length at patent scale |
|---|---:|---|---:|
| I | L1 | Positive meniscus | +141.57 |
| II | L2 + L3 | Cemented meniscus doublet | −166.59 |
| III | L4 + L5 | Cemented meniscus doublet | +2079.05 |
| IV | L6 | Plano-convex positive singlet | +103.66 |

The front half through $r_5$ is weakly positive, $f \approx +313.28$ at patent scale. The rear half from $r_7$ through $r_{11}$ is much stronger, $f \approx +86.30$. The first-surface-to-image total track is about $140.45$ at patent scale, or about $73.74$ mm after production scaling. Since track length exceeds focal length, the design is not a telephoto construction in the strict optical sense. Since its back focal distance is also shorter than the focal length, it is not a strict retrofocus design either; it is a normal-lens Gauss form adjusted for SLR back-clearance requirements.

The patent's manufacturing idea is geometrically explicit. Example 8 has three symmetric curved-radius pairs:

| Front-side surface | Radius | Rear-side surface | Radius |
|---|---:|---|---:|
| $r_1$ | +82.13 | $r_{11}$ | −82.13 |
| $r_3$ | +39.43 | $r_9$ | −39.43 |
| $r_5$ | +28.74 | $r_7$ | −28.74 |

The cemented interfaces $r_4$ and $r_8$ are planar, and in the FIG. 2 / Example 8 version $r_{10}$ is also planar. Only $r_2$ is a curved surface without a paired mate. The result is a fast Gauss objective that uses very few distinct spherical tools.

## Element-by-Element Analysis

### L1 — Positive Meniscus, Component I

Patent constants: $n_e = 1.73430$, $\nu_e = 28.19$. Glass: Schott SF10. Standalone focal length: $+141.57$ at patent scale, $+74.32$ mm after scaling.

L1 is a positive meniscus with both radii positive, concave toward the diaphragm. The front surface carries most of the element power, while the weak rear surface moderates ray angles into the air space before the first cemented doublet. The earlier analysis identified this glass as SF3, but the patent pair exactly matches Schott SF10 e-line data and not SF3 d-line data. This is not a small naming preference; it changes the glass family assignment and the interpretation of the front element's dispersion.

The use of a high-index dense flint as the first positive element is atypical compared with many double-Gauss normals that place a crown or lanthanum crown in this position. Here the matched-radius constraint has consumed much of the usual geometric freedom, so the glass selection carries more of the correction burden.

### L2 — Plano-Convex Positive, Front Member of Component II

Patent constants: $n_e = 1.67133$, $\nu_e = 41.64$. Glass: CDGM ZBaF17 / historical Schott BaSF6-class equivalent. Standalone focal length: $+58.73$ at patent scale, $+30.84$ mm after scaling.

L2 is the thick positive member of the front cemented doublet. Its front surface $r_3 = +39.43$ is one member of a matched-radius pair with $r_9 = -39.43$ in the rear half of the lens. The rear surface is the planar cemented interface to L3.

The previous analysis treated L2 as an unmatched proprietary glass. That was too conservative because the patent values are e-line values: the pair $1.67133 / 41.64$ is a catalog-resolvable barium-flint-class value, matching CDGM ZBaF17 and corresponding closely to BaSF6-type data. In the optical design, L2 serves as the lower-dispersion positive member of the front achromatizing doublet, even though its Abbe number remains in flint territory by ordinary crown/flint classification.

### L3 — Plano-Concave Negative, Rear Member of Component II

Patent constants: $n_e = 1.79190$, $\nu_e = 25.55$. Glass: Schott SF11. Standalone focal length: $-36.29$ at patent scale, $-19.05$ mm after scaling.

L3 is the high-dispersion negative member of the front cemented doublet. Its flat front face is bonded to L2, and its concave rear surface $r_5 = +28.74$ faces the stop. Together L2 and L3 form a net negative doublet with focal length $-166.59$ at patent scale.

The earlier analysis called this glass unmatched. The patent value instead matches Schott SF11 e-line data directly. That correction matters because L3 is one of the principal chromatic-control elements in the design, and its pairing with the L2 barium-flint-class positive element is part of the patent's glass-ratio strategy.

### L4 — Plano-Concave Negative, Front Member of Component III

Patent constants: $n_e = 1.65222$, $\nu_e = 33.60$. Glass: Schott SF2. Standalone focal length: $-44.06$ at patent scale, $-23.13$ mm after scaling.

L4 is the rear-half counterpart to L3. Its concave front surface $r_7 = -28.74$ faces the stop and forms the matched-radius pair with $r_5$. The element is cemented to L5 at the flat $r_8$ interface.

The earlier analysis identified L4 as BaSF51. The corrected identification is SF2 on the same e-line basis. L4 is still a flint element, but it is not the barium dense flint described in the original draft. Its lower index relative to L5 creates a large flat-interface index step, $n_5 - n_4 = 0.14005$, close to the patent's upper permitted limit for the rear doublet.

### L5 — Plano-Convex Positive, Rear Member of Component III

Patent constants: $n_e = 1.79227$, $\nu_e = 47.15$. Glass: LaF21 / N-LAF21-class lanthanum flint, not exact in the current public Schott catalog. Standalone focal length: $+49.77$ at patent scale, $+26.13$ mm after scaling.

L5 is the positive member of the rear cemented doublet. It has a flat front cemented surface and a convex rear surface $r_9 = -39.43$, paired with $r_3$ in the front doublet. L4 and L5 together are nearly afocal at patent scale, so the pair contributes correction more than net power.

The prior identification as LaF25 was not supported by the tabulated values. The closest Schott-family interpretation is a LaF21 / N-LAF21-class lanthanum flint, but current public N-LAF21 data are slightly lower in index and slightly higher in Abbe number than the patent pair. The data file therefore marks this glass as unmatched while preserving the patent constants.

### L6 — Plano-Convex Positive, Component IV

Patent constants: $n_e = 1.79227$, $\nu_e = 47.15$. Glass: LaF21 / N-LAF21-class lanthanum flint, not exact in the current public Schott catalog. Standalone focal length: $+103.66$ at patent scale, $+54.42$ mm after scaling.

L6 is the rear positive singlet. In Example 8 it has a planar object-facing surface $r_{10}$ and a convex image-facing surface $r_{11} = -82.13$. This is the preferred FIG. 2 form in the patent because it adds a third planar optical surface while preserving the matched-radius outer pair $r_1 / r_{11}$.

L6 strongly influences the final convergence, field curvature, and back focal distance. Sharing the same high-index lanthanum-flint-class glass as L5 also simplifies the glass palette in the rear half of the lens.

## Glass Identification and Selection

The corrected glass table is:

| Element | Patent $n_e$ | Patent $\nu_e$ | Corrected identification | Confidence |
|---|---:|---:|---|---|
| L1 | 1.73430 | 28.19 | SF10 (Schott) | High |
| L2 | 1.67133 | 41.64 | ZBaF17 / BaSF6-class barium flint | High as class; vendor exactness depends on catalog generation |
| L3 | 1.79190 | 25.55 | SF11 (Schott) | High |
| L4 | 1.65222 | 33.60 | SF2 (Schott) | High |
| L5 | 1.79227 | 47.15 | LaF21 / N-LAF21-class lanthanum flint | Close class match, not exact |
| L6 | 1.79227 | 47.15 | LaF21 / N-LAF21-class lanthanum flint | Close class match, not exact |

The critical re-review finding is that the original analysis treated e-line glass constants as d-line constants. That produced a cascade of wrong glass names. With the e-line convention corrected, the design is less mysterious: L1, L3, and L4 are ordinary Schott flints; L2 is a barium-flint-class glass with catalog equivalents; and L5/L6 are high-index lanthanum-flint-class elements whose exact patent constants are close to, but not identical with, current N-LAF21 data.

## Focus Mechanism

The patent supplies only the infinity-focus prescription. The production Summicron-R 50mm f/2 focuses by unit movement: the whole optical cell translates as a rigid group, and no internal air spacing changes.

For the data file, unit focus is represented by one variable back-focus gap at surface 11. Leica publishes a closest focus of 0.5 m and a highest reproduction ratio of 1:7.5. At the official 52.5 mm focal length, the corresponding first-order extension is $52.5 / 7.5 = 7.0$ mm. The data file therefore uses:

| Surface gap | Infinity | Close-focus display value | Basis |
|---|---:|---:|---|
| BF after surface 11 | 37.67925 mm | 44.67925 mm | Patent BFD scaled ×0.525 plus 7.0 mm |

This is a viewer focus model, not a patent-published close-focus prescription.

## Aspherical Surfaces

The design is entirely spherical. No aspherical coefficients appear in US 4,123,144, and the surface-matching strategy of the patent depends on spherical and planar tool reuse.

## Conditional Expressions

Example 8 satisfies the patent's glass and last-element conditions when evaluated with the patent's e-line constants:

| Condition | Patent range | Example 8 value | Result |
|---|---:|---:|---|
| $\nu_1 / \nu_6$ | 0.58–1.00 | 0.5979 | Pass |
| $\nu_2 / \nu_5$ | 0.80–0.90 | 0.8831 | Pass |
| $\nu_3 / \nu_4$ | 0.74–0.80 | 0.7604 | Pass |
| $n_3 - n_2$ | 0.05–0.20 | 0.12057 | Pass |
| $n_5 - n_4$ | 0.05–0.15 | 0.14005 | Pass |
| $r_{10}$ | $> 6f$ | $\infty$ | Pass |

The first three conditions constrain dispersion balance across the stop. The fourth and fifth conditions constrain the index steps in the cemented doublets. The sixth condition explains why the Example 8 rear singlet uses a flat object-facing surface.

## Petzval Sum and Field Curvature

A surface-by-surface Petzval calculation using $\sum \Phi_i/(n_i n'_i)$ gives $P = 0.00169636$ at patent scale, corresponding to a Petzval radius of about $589.5$ in the same units. The normalized ratio is therefore $R_P/f \approx 5.90$, indicating a relatively flat Petzval surface for a fast normal Gauss lens.

The dominant flattening contribution comes from the negative air-lens region around the stop. Surfaces $r_5$ and $r_7$ together contribute $-0.029112$ to the Petzval sum, nearly canceling the $+0.030809$ from the remaining curved refracting surfaces.

## Verification Summary

The prescription was re-entered from Example 8 and independently checked with a paraxial ABCD ray trace in $y/u$ coordinates. The stop was treated as an optically neutral air surface.

| Quantity | Patent value | Computed from rounded prescription | Scaled production value |
|---|---:|---:|---:|
| Effective focal length | 100.00 | 100.0115 | 52.5061 mm |
| Back focal distance | 71.77 | 71.8094 | 37.6999 mm computed; 37.6793 mm table-scaled |
| First-surface to image track | 140.45 | 140.4894 by computed focus | 73.74 mm nominal table-scaled |
| Petzval sum | — | 0.00169636 | 0.00323116 after scaling |
| Conditional expressions | — | All pass | All pass |

The `.data.ts` file follows the patent table for the last surface-to-image distance, using $71.77 \times 0.525 = 37.67925$ mm. The computed focus from rounded surface data is 0.0207 mm farther back after scaling, which is below the practical precision of the patent table.

## Sources

- US Patent 4,123,144, “Four-Member Gauss Objective,” Walter Mandler, Garry Edwards, and Erich Wagner; granted October 31, 1978.
- Leica Camera AG, “LEICA SUMMICRON-R 50 mm f/2” technical data sheet.
- Leica Wiki / L-Camera Forum Wiki, “50mm f/2 Summicron-R II.”
- Schott optical glass data for SF10, SF11, SF2, and N-LAF21-class lanthanum flint comparison.
- CDGM optical glass data for ZBaF17 barium-flint-class comparison.
