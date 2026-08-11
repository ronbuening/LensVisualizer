## Patent Reference and Design Identification

**Patent:** DE 2444954 A1
**Filed:** 20 September 1974
**Published:** 1 April 1976
**Inventors:** Franz Schlegel; Josef Weiß
**Applicant:** Optische Werke G. Rodenstock, 8000 München
**Title:** Achtlinsiges Weitwinkelobjektiv
**Embodiment analyzed:** Patentanspruch 2 — f′ = 90 mm, 1:4.5
**Prescription basis:** Native patent data are tabulated at the e-line, with $n_e$ and $ν_e$ explicitly stated by the patent.

Claim 2 is the appropriate prescription for the Rodenstock Grandagon-N 90mm f/4.5. The identification is based on the patent's f′ = 90 mm and 1:4.5 claim table, the eight-element/four-group construction, the two cemented triplets surrounding a central stop, and the Rodenstock/LINOS product documentation for the Grandagon-N f/4.5 family, which describes the 65–90 mm f/4.5 lenses as eight elements in four groups with a 105° field angle. The f/6.8 90 mm Grandagon-N belongs to the separate six-element version and is not this prescription.

The patent's description states the design goal directly: a compact, well-corrected wide-angle objective at approximately 1:4.5 using ordinary optical glasses with refractive indices not exceeding 1.7. It also specifies the structural principle: two cemented triplets, one on each side of the stop, with the refractive indices in each triplet increasing from the diaphragm outward.

## Optical Architecture

The design is a quasi-symmetric wide-angle objective with eight elements in four air-separated groups:

| Group | Elements | Standalone focal length | Role                              |
| ----- | -------: | ----------------------: | --------------------------------- |
| G1    |       L1 |                −67.8 mm | Front diverging meniscus          |
| G2    |    L2–L4 |                +61.5 mm | Front cemented positive triplet   |
| Stop  |        — |                       — | Aperture between the two triplets |
| G3    |    L5–L7 |                +50.8 mm | Rear cemented positive triplet    |
| G4    |       L8 |                −60.6 mm | Rear diverging meniscus           |

The power order is negative–positive–positive–negative. This is not a retrofocus layout in the strict sense: the computed back focal distance is about 62.8 mm at the patent e-line, shorter than the effective focal length. The lens instead relies on a near-symmetric wide-angle form, with outer negative menisci bending oblique bundles and the two triplets supplying the principal positive power.

The patent's refractive-index gradient is present in the numerical example. In the front triplet, the e-line index increases outward from L4 to L3 to L2: 1.5629 < 1.6251 < 1.6776. In the rear triplet, it increases outward from L5 to L6 to L7: 1.5855 < 1.6113 < 1.6700. This reduces the need for very high-index glass while maintaining compact curvatures and useful wide-angle correction.

A surface-by-surface Petzval calculation gives +0.0001320 mm⁻¹ at the patent e-line, corresponding to a Petzval radius of about 7,574 mm, or roughly 83.5× the computed e-line EFL. That value is calculated from the actual refracting surfaces, not from thin-lens element sums.

## Element-by-Element Analysis

The first line of each element gives the d-line glass assignment used in the data file. The patent itself gives $n_e$ and $ν_e$; those native patent values are summarized in the glass table below.

### L1 — Negative Meniscus, Convex to Object

nd = 1.46450, νd = 65.77. Glass: FK3 (Schott inquiry glass). f = −67.8 mm.

L1 is the front diverging meniscus. Its two positive radii, r₁ = +91.73 mm and r₂ = +22.96 mm, give a convex object-side form with strong negative optical power. The glass is a low-index, high-Abbe fluorophosphate crown, appropriate for an outer field-bending element where ray heights are comparatively large.

The d-line value used here follows the Schott FK3 inquiry-glass data: nd = 1.46450 and νd = 65.77, corresponding closely to the patent's nₑ = 1.4662 and νₑ = 65.56.

### L2 — Negative Meniscus, Front Triplet Outer Element

nd = 1.67270, νd = 32.21. Glass: SF5 (Schott). f = −117.8 mm.

L2 is the high-index dense-flint outer element of the front cemented triplet. Its weak negative standalone power balances the much stronger positive L3 and provides the high-dispersion partner in the front triplet. The patent e-line pair, nₑ = 1.6776 and νₑ = 31.97, matches Schott SF5 closely.

### L3 — Biconvex Positive, Front Triplet Middle Element

nd = 1.62229, νd = 53.27. Glass: SSK2 / N-SSK2 (Schott). f = +18.9 mm.

L3 is the main positive element of the front triplet. Its nearly opposed curvatures, r₄ = +20.83 mm and r₅ = −20.24 mm, form a strongly powered biconvex element. The SSK2-class crown provides high enough index for the short focal length while keeping dispersion moderate.

### L4 — Biconcave Negative, Front Triplet Inner Element

nd ≈ 1.56091, νd ≈ 46.78. Glass: FEL3 (HOYA catalog equivalent; supplier unspecified). f = −32.0 mm.

L4 is the inner negative element of the front triplet, next to the aperture stop. Its patent e-line values are $n_e = 1.5629$ and $\nu_e = 46.88$. HOYA FEL3's coefficient-backed polynomial evaluates to $n_e = 1.56295$ and $\nu_e = 46.79$, independently reproducing that pair. FEL3 is used as the optical equivalent; the patent does not identify the historical production supplier.

### L5 — Negative Meniscus, Rear Triplet Inner Element

nd = 1.58313, νd = 59.38. Glass: SK12 / S-BAL42 class. f = −32.5 mm.

L5 is the rear-side counterpart to L4 in position, but not in dispersion. Its patent value, νₑ = 59.19, makes it a crown-like barium glass rather than a moderate flint. Its weakly curved front surface and strongly curved cemented rear surface create negative power while allowing the rear triplet to use a different chromatic strategy from the front triplet.

### L6 — Biconvex Positive, Rear Triplet Middle Element

nd = 1.60881, νd = 58.86. Glass: SK3 (SUMITA catalog equivalent; historical production supplier unspecified). f = +16.0 mm.

L6 is the strongest individual positive element in the lens. SUMITA's published SK3 row reproduces the d-line pair nd = 1.60881 and νd = 58.9; the 0.04 Abbe residual is rounding in the patent-derived value. Modern N-SK4 is a different nearby glass at approximately nd = 1.61272 and νd = 58.6, so SK4 is not the preferred identification for this element.

### L7 — Negative Meniscus, Rear Triplet Outer Element

nd = 1.66672, νd = 48.33. Glass: BaF11 / S-BAH11 class. f = −59.4 mm.

L7 is the high-index outer element of the rear triplet. It is a negative meniscus concave toward the object side, using a barium-flint-class glass with substantially higher Abbe number than the front triplet's SF5. This asymmetry is part of the lens's chromatic balance: the two halves are geometrically similar but not glass-symmetric.

### L8 — Negative Meniscus, Concave to Object

nd = 1.48749, νd = 70.41. Glass: N-FK5 / FK5 (Schott). f = −60.6 mm.

L8 is the rear diverging meniscus. Its two negative radii place the concave side toward the object and the convex side toward the image. It supplies rear field bending and Petzval compensation while leaving a long enough back focus for large-format shutter and bellows clearance.

## Glass Identification and Selection

The patent's native spectral convention is e-line. The data file stores d-line values because the LensVisualizer data model uses d-line `nd` and `νd` fields for elements and refracting media.

| Element | Patent nₑ | Patent νₑ | d-line assignment used    |       nd |     νd | Confidence                   |
| ------- | --------: | --------: | ------------------------- | -------: | -----: | ---------------------------- |
| L1      |    1.4662 |     65.56 | FK3, Schott inquiry glass |  1.46450 |  65.77 | Direct Schott match          |
| L2      |    1.6776 |     31.97 | SF5, Schott               |  1.67270 |  32.21 | Direct Schott match          |
| L3      |    1.6251 |     52.86 | SSK2 / N-SSK2, Schott     |  1.62229 |  53.27 | Direct class match           |
| L4      |    1.5629 |     46.88 | FEL3, HOYA equivalent     | 1.56295 at e line | 46.79 at e line | Coefficient-backed; supplier unspecified |
| L5      |    1.5855 |     59.19 | SK12 / S-BAL42 class      |  1.58313 |  59.38 | Cross-reference match        |
| L6      |    1.6113 |     58.65 | SK3, SUMITA equivalent    |  1.60881 |  58.86 | Coefficient-backed match     |
| L7      |    1.6700 |     48.13 | BaF11 / S-BAH11 class     |  1.66672 |  48.33 | Cross-reference match        |
| L8      |    1.4891 |     70.22 | N-FK5 / FK5, Schott       |  1.48749 |  70.41 | Direct Schott match          |

SUMITA SK3 is the coefficient-backed catalog equivalent for L6. A SK4-class assignment is too high in refractive index for the stored d-line values and would not match the patent-derived pair as closely. The production supplier is not established by the patent.

L4 now resolves through FEL3's independent e-line reproduction rather than a d-code-only LLF3/QF2 inference. This strengthens the dispersion model without asserting a recovered Schott identity or a production supplier.

## Focus Mechanism

The patent publishes a fixed infinity-focus prescription. No internal focusing, floating group, or variable air-space table is present. The production Grandagon-N is a large-format lens focused by moving the whole lens on the camera bellows.

The companion `.data.ts` file models focus as a representative unit-focus back-focus change only: the final image-space gap is variable, while all inter-element spacings remain fixed. The close-focus slider endpoint is therefore a visualization convention, not a manufacturer-published minimum-focus specification.

## Aspherical Surfaces

No aspherical surfaces are present. The prescription consists of twelve spherical refracting surfaces and one flat aperture stop inserted in the central air gap.

## Verification Summary

Independent paraxial verification was re-run from the Claim 2 table.

| Quantity                                   | Patent / source value | Recomputed value | Note                        |
| ------------------------------------------ | --------------------: | ---------------: | --------------------------- |
| Patent focal length                        |                 90 mm |         90.70 mm | e-line prescription trace   |
| Total optical track, first to last surface |                     — |         91.90 mm | Sum of fixed axial spacings |
| Back focal distance                        |                     — |         62.76 mm | e-line prescription trace   |
| First vertex to image plane                |                     — |        154.66 mm | Track + BFD                 |
| Petzval sum                                |                     — |  +0.0001320 mm⁻¹ | Surface-by-surface φ/(n·n′) |
| Petzval radius                             |                     — |         7,574 mm | 1 / Petzval sum             |

Using the d-line glass substitutions stored in the data file, the same geometry gives EFL ≈ 91.27 mm and BFD ≈ 63.31 mm. The data file therefore uses a final image-space distance of 63.3142 mm so that the d-line model focuses at infinity.

The semi-diameters in the data file are not patent values. They were estimated conservatively for rendering: the checks used spherical rim limits, common-aperture edge thickness, and cross-gap sag intrusion. The limiting elements are the strongly biconvex L3 and L6, where edge thickness binds before full-field paraxial ray envelopes.

## Design Heritage and Context

The patent cites DE 1,447,216 and DE OS 2,012,489 as earlier related wide-angle constructions. Its claimed improvement is not a new element count alone, but the specific combination of a compact eight-element form, two cemented triplets near the stop, outward-increasing triplet indices, and ordinary glasses with refractive indices not over 1.7.

The patent description lists special examples for f = 90, f = 75, and f = 60, but Claim 4's numerical table itself specifies f′ = 65. The claim table governs the prescription family: 90 mm, 75 mm, and 65 mm examples.

## Sources

- DE 2444954 A1, "Achtlinsiges Weitwinkelobjektiv," Optische Werke G. Rodenstock, published 1 April 1976.
- Rodenstock / LINOS Grandagon-N large-format lens documentation for production family matching.
- SCHOTT Optical Glass datasheets and inquiry-glass data for FK3, SF5, SSK2 / N-SSK2, and N-FK5 / FK5.
- SUMITA official all-glass catalog, 2025-11-07, for the SK3 formula-3 dispersion polynomial.
- HOYA Glass Cross Reference Index and CDGM cross-reference tables for equivalent glass-class assignments.
