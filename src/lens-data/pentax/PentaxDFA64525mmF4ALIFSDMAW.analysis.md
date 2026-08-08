# PENTAX SMC D FA645 25mm f/4 AL[IF] SDM AW

## Patent Reference and Design Identification

**Patent:** US 8,422,143 B2
**Filed:** August 9, 2011
**Priority:** August 19, 2010 (JP 2010-184340)
**Granted:** April 16, 2013
**Inventor:** Masakazu Saori
**Assignee:** Pentax Ricoh Imaging Company, Ltd.
**Title:** *Retrofocus Wide-Angle Lens System and Optical Instrument Provided with the Same*
**Embodiment analyzed:** Numerical Embodiment 1 / Example 1

The prescription represents Numerical Embodiment 1 of US 8,422,143 B2. The production correlation is treated as the fixed identification for this model, but it is a correlation rather than a manufacturer statement that Example 1 is the commercial lens.

Several independent features converge on the smc PENTAX-D FA645 25mm F4 AL[IF] SDM AW:

1. The patent gives a design focal length of 25.69 mm and FNO 4.1, while the production lens is marketed as 25 mm F4.
2. The patent gives a 54.7° half field and 34.85 mm image height, corresponding to a 109.4° full field on the modeled 645 image circle. RICOH IMAGING specifies 109° on a 645-format film body.
3. The patent embodiment contains 12 refractive lens elements. The production specification likewise gives 12 lens elements.
4. The patent places aspheres on both surfaces of F2 and on the image-side surface of R7, giving two aspherical elements and three aspherical surfaces. RICOH IMAGING describes two aspherical optical elements, including one double-sided aspherical element.
5. The patent focuses by moving R3 through R7 toward the object side. RICOH IMAGING describes the production lens as an inner-focus design.
6. The patent is organized around a flat internal optical-filter plate between the theoretical front and rear groups. The production lens incorporates a built-in pull-out holder for a 40.5 mm circular polarizing filter.
7. The patent priority date precedes the February 8, 2011 production-lens announcement by less than six months.

One group-count caveat remains explicit. The final LensVisualizer prescription contains 12 refractive elements in seven modeled air-separated refractive groups after the patent's internal OP plate is omitted under current data rules. RICOH IMAGING lists the production lens as 12 elements in 8 groups. The manufacturer does not publish the counting convention that explains the one-group difference, so the analysis leaves that difference unresolved rather than assigning the additional production group to OP.

## Optical Architecture

The design is a fixed-focal-length retrofocus wide-angle lens. In the patent's own theoretical division, the front group GF is negative and the rear group GR is positive and contains the diaphragm. The final data file preserves that division as GF from surfaces 1 through 9 and GR from surfaces 12 through 22A.

Independent first-order calculation from the final TypeScript prescription gives GF an effective focal length of **−36.769126 mm** and GR an effective focal length of **+52.593636 mm**. The complete lens has an EFL of **25.694579 mm** and a BFD of **62.007502 mm**, so `BFD/EFL = 2.413252`; the design therefore satisfies the project definition of a retrofocus lens (`BFD > EFL`).

The seven modeled refractive groups are:

- F1, a single negative meniscus;
- F2, a double-sided-aspherical negative meniscus;
- F3, a single biconcave negative element;
- the cemented F4–F5 pair;
- the cemented R1–R2 pair ahead of the diaphragm;
- the cemented R3–R4–R5 triplet;
- the cemented R6–R7 pair.

The diaphragm lies between the fixed R1–R2 pair and the moving R3–R7 focus block. The focus block as a whole has a computed EFL of **+95.089023 mm**. The moving block is not equivalent to any one of its cemented subassemblies: the R3–R5 triplet is positive at **+72.732825 mm**, while the R6–R7 cemented pair is weakly negative at **−306.795315 mm**.

The optical architecture therefore combines a strongly negative, large-diameter front section with a positive rear section and long image-side clearance. The flat-plate position chosen by the patent lies at the GF/GR division, where the patent uses the plate's lateral ray displacement as a distortion-control mechanism.

## Element-by-Element Analysis

### F1 — Negative Meniscus

`nd = 1.83481, νd = 42.7.` Glass: `835427 — coordinate class (vendor not established)`. Standalone element `f = −61.838269 mm`.

F1 is the first member of the theoretical negative front group. Its standalone negative power is substantial, but the relevant system quantity is the combined GF power rather than the isolated-element focal length. In the patent arrangement it presents a convex object-side surface while contributing to the front group's net divergence and the long retrofocus back clearance.

No vendor or melt identity is assigned. The glass label is a six-digit coordinate class derived from the patent’s published index/dispersion pair.

### F2 — Double-Sided-Aspherical Negative Meniscus

`nd = 1.73077, νd = 40.5.` Glass: `731405 — coordinate class (vendor not established)`. Standalone element `f = −81.692325 mm`.

F2 is the second negative meniscus in GF and supplies two of the design's three aspherical surfaces. This makes F2 the principal non-spherical correction element in the large negative front section without changing the front-to-rear power sign of the element itself.

The patent gives aspherical departures on both faces, represented in the data file as surfaces 3A and 4A. The stored glass designation is a coordinate-class identification rather than a claim that a particular HOYA or other vendor melt was used in production.

### F3 — Biconcave Negative

`nd = 1.61800, νd = 63.4.` Glass: `618634 — coordinate class (vendor not established)`. Standalone element `f = −51.017673 mm`.

F3 continues the negative power sequence before the front cemented pair. Unlike F2 it is spherical in the selected embodiment. Its location immediately ahead of F4–F5 places it between the strongly divergent front section and the positive cemented correction pair.

### F4–F5 — Cemented Front Pair

**F4:** `nd = 1.74400, νd = 44.9.` Glass: `744449 — coordinate class (vendor not established)`. Standalone element `f = +33.656356 mm`.
**F5:** `nd = 1.83481, νd = 42.7.` Glass: `835427 — coordinate class (vendor not established)`. Standalone element `f = −74.018910 mm`.

F4 and F5 form the final cemented unit of GF. Their standalone powers have opposite signs, but the cemented pair has a computed net EFL of **+58.722039 mm**. That positive cemented contribution moderates the preceding negative sequence while the complete GF remains strongly negative at −36.769126 mm.

The data model preserves the cemented interface by assigning surface 8 to the downstream F5 glass. No synthetic cement layer is inserted.

### R1–R2 — Fixed Cemented Pair Ahead of the Stop

**R1:** `nd = 1.64769, νd = 33.8.` Glass: `648338 — coordinate class (vendor not established)`. Standalone element `f = +27.488137 mm`.
**R2:** `nd = 1.77250, νd = 49.6.` Glass: `773496 — coordinate class (vendor not established)`. Standalone element `f = −38.017909 mm`.

R1 and R2 begin the theoretical positive rear group. They remain fixed during the reconstructed close-focus movement and sit immediately ahead of the diaphragm. Their computed cemented net EFL is **+90.256535 mm**.

Because the pair combines a positive and a negative member, isolated-element focal lengths should not be read as the pair's in-situ contribution. The rear-group power only becomes meaningful when the pair is combined with the stop location, the moving triplet, the rear doublet, and the intervening separations.

### R3–R4–R5 — Cemented Positive-Negative-Positive Focus Triplet

**R3:** `nd = 1.49700, νd = 81.6.` Glass: `497816 — coordinate class (vendor not established)`. Standalone element `f = +48.980620 mm`.
**R4:** `nd = 1.80610, νd = 33.3.` Glass: `806333 — coordinate class (vendor not established)`. Standalone element `f = −23.159970 mm`.
**R5:** `nd = 1.48749, νd = 70.4.` Glass: `487704 — coordinate class (vendor not established)`. Standalone element `f = +29.395823 mm`.

The R3–R5 triplet is the first cemented assembly in the moving inner-focus block. Its computed net EFL is **+72.732825 mm**, despite the strong negative standalone power of R4.

R3 has the highest Abbe number in the prescription, but the data file carries no direct `nC`, `nF`, `ng`, or `dPgF` measurements and no validated vendor-specific Sellmeier identity. Accordingly, the analysis does not characterize R3 as anomalous-dispersion glass and does not infer apochromatic correction from `νd` alone.

### R6–R7 — Rear Cemented Pair

**R6:** `nd = 1.83481, νd = 42.7.` Glass: `835427 — coordinate class (vendor not established)`. Standalone element `f = −34.779364 mm`.
**R7:** `nd = 1.58913, νd = 61.2.` Glass: `589613 — coordinate class (vendor not established)`. Standalone element `f = +40.502618 mm`.

R6 and R7 form the final cemented unit and move rigidly with R3–R5 during focusing. Their cemented net EFL is **−306.795315 mm**, so this pair is weakly negative as a unit even though R7 alone is positive.

The image-side face of R7 is the third and final aspherical surface, labeled 22A. The complete R3–R7 moving block remains positive because the positive R3–R5 triplet dominates the weak negative power of R6–R7 in the assembled spacing.

## Glass Identification and Selection

The patent provides `nd` and `νd` but no vendor names, melt designations, line indices, Sellmeier coefficients, or anomalous-partial-dispersion values. The final data file therefore uses six-digit coordinate classes derived from those published coordinates; vendor identity is not established.

| Data glass label | `nd` | `νd` | Elements | Treatment in this model |
|---|---:|---:|---|---|
| 835427 — coordinate class | 1.83481 | 42.7 | F1, F5, R6 | Coordinate class only |
| 731405 — coordinate class | 1.73077 | 40.5 | F2 | Coordinate class only |
| 618634 — coordinate class | 1.61800 | 63.4 | F3 | Coordinate class only |
| 744449 — coordinate class | 1.74400 | 44.9 | F4 | Coordinate class only |
| 648338 — coordinate class | 1.64769 | 33.8 | R1 | Coordinate class only |
| 773496 — coordinate class | 1.77250 | 49.6 | R2 | Coordinate class only |
| 497816 — coordinate class | 1.49700 | 81.6 | R3 | Coordinate class only; no APO inference |
| 806333 — coordinate class | 1.80610 | 33.3 | R4 | Coordinate class only |
| 487704 — coordinate class | 1.48749 | 70.4 | R5 | Coordinate class only |
| 589613 — coordinate class | 1.58913 | 61.2 | R7 | Coordinate class only |

Authoritative catalog coordinates provide useful cross-vendor comparisons for the prescription’s index/dispersion palette, but they do not establish which manufacturer supplied the original glass. In particular, the high `νd` values of R3 and R5 indicate low d-line dispersion relative to neighboring elements, but `nd/νd` data alone are insufficient to establish anomalous partial dispersion or apochromatic behavior.

## Focus Mechanism

The patent explicitly states that focusing from infinity toward a close object is performed by moving R3 through R7, all behind the diaphragm, toward the object side. RICOH IMAGING independently describes the production lens as an inner-focus design and specifies a 0.4 m minimum focusing distance and 0.11× maximum reproduction ratio.

The patent does not publish a numerical close-focus spacing table. The data file therefore classifies the close-focus model as **CONSTRAINED_RECONSTRUCTION**, not `PUBLISHED`. The mechanism has one axial degree of freedom because R3–R7 move as one rigid block. Interpreting the manufacturer's 0.4 m MFD in the ordinary image-plane-to-object-plane sense supplies the single scalar needed to solve that motion.

The reconstructed endpoint is:

| Spacing | Infinity | 0.4 m reconstructed close state |
|---|---:|---:|
| STO → R3 front (surface 16) | 9.380000 mm | 6.397699 mm |
| R7 rear (22A) → image plane | 62.010000 mm | 64.992301 mm |
| Rigid-block translation | — | 2.982301 mm objectward |

The two variable gaps change by equal and opposite amounts, preserving the fixed sum of 71.39 mm around the moving block. A paraxial conjugate solve from the raw patent physical coordinates predicts `|m| = 0.112411`, consistent with the manufacturer's rounded 0.11× specification. That agreement is a cross-check of the reconstruction, not an additional input constraint.

The 0.4 m value stored as `closeFocusM` remains production metadata. Because the OP plate is omitted by an air-equivalent coordinate normalization, the normalized LensVisualizer axial track is shorter than the raw physical patent track and is not used to redefine the manufacturer's MFD reference.

## Aspherical Surfaces

The patent uses the same standard conic convention as LensVisualizer:

$$
 z(h)=\frac{h^2/R}{1+\sqrt{1-(1+K)(h/R)^2}}+A_4h^4+A_6h^6+A_8h^8+\cdots
$$

All three Example 1 aspheres have `K = 0`, so no patent-to-project conic conversion is required. The prescription is unscaled; the coefficients below are therefore the patent coefficients without any dimensional rescaling.

| Surface | Element / face | `K` | `A4` | `A6` | `A8` |
|---|---|---:|---:|---:|---:|
| 3A | F2 object side | 0 | +1.088e−5 | −4.936e−9 | +1.220e−12 |
| 4A | F2 image side | 0 | +7.529e−6 | −2.475e−9 | −3.269e−11 |
| 22A | R7 image side | 0 | +5.796e−6 | +2.608e−10 | 0 |

The two F2 surfaces provide paired non-spherical freedom within the negative front group. At the final modeled semi-diameters, the polynomial departures from the spherical base are **+3.231079 mm at 3A (25.0 mm SD)** and **+0.126364 mm at 4A (20.5 mm SD)**. The rear R7 asphere has a **+0.434863 mm** polynomial departure at its modeled 16.5 mm SD. These are departures at inferred-and-validated model apertures, not patent-published clear-aperture edges.

The positive quartic term on each surface increases positive polynomial sag with radius; the higher-order terms shape that departure differently on the two F2 faces and on R7. No manufacturing process for these specific aspheres is inferred from the prescription alone.

## Distortion-Control Strategy and Plate Normalization

The central concept of US 8,422,143 B2 is the placement of a flat parallel plate between the theoretical negative front group and the positive rear group. The patent states that an oblique ray exits a parallel plate at the same angle but laterally displaced; at the selected location that displacement adds positive distortion intended to counter the negative distortion generated ahead of the diaphragm.

In Example 1 the source plate OP occupies patent surfaces 10 and 11, has thickness **3.00 mm**, and uses `nd = 1.51680`. The patent further states that when the optical filter is not used, a dummy plate of the same thickness is inserted to prevent focus shift. This design premise is consistent with the production lens's built-in pull-out C-PL holder, but the product source does not identify the patent embodiment.

Current LensVisualizer data rules exclude filters and dummy plates from ordinary sequential prescriptions. The final data file therefore omits OP and replaces the physical surface-9-to-surface-12 region with an air-equivalent spacing that preserves the plate region's paraxial reduced distance:

- raw physical 9→12 distance: `5.00 + 3.00 + 19.37 = 27.37 mm`;
- air-equivalent plate thickness: `3.00 / 1.51680 = 1.977848 mm`;
- modeled 9→12 air spacing: **26.347848 mm**.

This normalization shortens the modeled physical track by **1.022152 mm** while preserving the paraxial translation through the omitted plate region. The patent's raw `L = 195.91 mm` remains a source fact; the normalized modeled first-surface-to-image track is **194.887848 mm**. This is a modeling normalization, not a correction to the patent prescription.

The patent also contains a source-level inconsistency in its printed Formula 1: the second square-root denominator is printed with `N − sin²θ`, whereas Snell-law geometry for a parallel plate requires an `N²` term. The final data file does not use that printed expression to derive any surface value, and no silent numerical correction is applied to Tables 1–3 or to the prescription itself.

## Conditional Expressions

The patent defines two conditions for the selected plate location and thickness.

The first is

$$
1.2 < \left|\frac{f_F}{f}\right| < 4.0,
$$

where `fF` is the focal length of the theoretical negative front group and `f` is the total lens focal length. From the final data file, `fGF = −36.769126 mm` and `f = 25.694579 mm`, giving

$$
\left|\frac{f_{GF}}{f}\right| = 1.431007,
$$

which satisfies the condition and reproduces the patent's rounded Table 17 value of 1.43.

The second is

$$
0.1 < \frac{d}{f},
$$

where `d` is the source OP plate thickness. Using the patent's 3.00 mm plate and the computed system EFL gives

$$
\frac{d}{f}=0.116756,
$$

which satisfies the condition and reproduces the patent's rounded 0.117. This second check deliberately uses the source plate thickness even though OP is not retained as a LensVisualizer element.

## Verification Summary

Independent calculation from the final data arrays gives the following first-order results at infinity:

| Quantity | Computed from final data | Patent value |
|---|---:|---:|
| Effective focal length | 25.694579 mm | 25.69 mm |
| Back focal distance | 62.007502 mm | 62.01 mm |
| Modeled f-number | 4.100000 | 4.1 |
| GF effective focal length | −36.769126 mm | implied by Condition 1 |
| GR effective focal length | +52.593636 mm | positive by patent definition |
| Petzval sum | +0.003693808519 mm⁻¹ | not tabulated |

The aperture stop is published at the patent's surface-15 station, but its physical diameter is not. The final stop semi-diameter of **9.673338 mm** is therefore inferred from the modeled f/4.1 entrance pupil rather than transcribed from the patent.

The patent also publishes no clear-aperture diameters. All surface semi-diameters in the data file are modeling inferences derived from meridional ray envelopes, the patent optical section, the full-field chief ray, and the production barrel diameter as a mechanical ceiling. A direct Figure 1 proportion audit showed that the ray-envelope-only F3–F5 outlines were visibly undersized relative to the surrounding front group, so surfaces 5–9 were enlarged while retaining the figure's taper. The final geometry passes the current edge-thickness, actual-rim-slope, cross-gap, conic-domain, and defined-focus-state checks used in the accompanying verification artifact. No obsolete universal `sd/|R|` threshold is used as the governing aperture rule.

There is no uniform focal-length scaling. Radii, axial thicknesses, image-plane coordinates, and aspherical coefficients retain the patent scale; consequently no `A_p / s^(p−1)` coefficient transformation is applied.

## Sources and References

1. Masakazu Saori, **US 8,422,143 B2**, *Retrofocus Wide-Angle Lens System and Optical Instrument Provided with the Same*, granted April 16, 2013. Numerical Embodiment 1 is defined in the patent PDF at the discussion of FIGS. 1–3C and Tables 1–3; the prescription and aspheres appear on PDF page 21, columns 9–10.
2. RICOH IMAGING, **smc PENTAX-D FA645 25mmF4AL[IF] SDM AW** product page: https://www.ricoh-imaging.co.jp/english/products/lens/645/wide/smcpentax-dfa645-25/
3. HOYA CORPORATION PENTAX Imaging Systems Division, **Press Release, February 8, 2011 — smc PENTAX-D FA645 25mmF4AL[IF] SDM AW**: https://www.ricoh-imaging.co.jp/english/news/2011/201101.html
4. HOYA CORPORATION, **Designation of Glass Types**, optical-glass nomenclature reference: https://www.hoya-opticalworld.com/english/technical/001.html
5. HOYA CORPORATION, **Glass Cross Reference Index**, cross-vendor optical-glass coordinate reference: https://www.hoya-opticalworld.com/english/products/crossreference.html
6. HOYA CORPORATION, **Glass Molded Lenses**, current M-series molded-glass listing: https://www.hoya-opticalworld.com/english/products/moldlenses.html
