# NIKON Ultra-Micro-NIKKOR 29.5mm f/1.2

## Patent Reference and Design Identification

**Patent:** GB 1,050,055
**Application Number:** 37341/65; Japan priority No. 50217
**Filed:** September 1, 1965; Japan priority September 4, 1964
**Published:** December 7, 1966
**Applicant:** Nippon Kogaku K.K.
**Title:** An Improved Photographic Objective Lens System
**Embodiment analyzed:** Example 1, β = −0.04, f = 100

GB 1,050,055 describes a high-aperture photographic objective for precision copying at a reduction ratio near 1/25×. Example 1 is the embodiment transcribed here. The patent normalizes the prescription to f = 100 and gives all radii, thicknesses, air spaces, refractive indices, and Abbe numbers in that normalized scale.

The production identification rests on convergent evidence rather than on an explicit product name in the patent. The applicant is Nippon Kogaku K.K.; Nikon's historical material identifies the Ultra Micro-NIKKOR 29.5mm F1.2 as a photolithography lens; Example 1 has F/1.2, β = −0.04, nine elements in six groups, and a CaF₂ element at L8. The β = −0.04 value is a 1/25× reduction ratio, matching the published production specification for the 29.5mm F1.2 Ultra-Micro-NIKKOR.

The data file scales the patent prescription by 0.295, using the production 29.5 mm designation divided by the patent's nominal f = 100. Independent paraxial tracing of Example 1 gives an e-line Gaussian EFL of 98.678 patent units, so the scaled design EFL is 29.110 mm. The difference between 29.110 mm and the 29.5 mm product designation is a normalization and rounding issue, not a prescription error.

The patent prose describes the resolving-power test as being for the “e-line of the spectrum (5270 Å).” The prescription table, however, labels the refractive indices as n_e, and the tabulated glass values match ordinary e-line catalog values near 546 nm rather than d-line values. The analysis and data file therefore preserve the patent's n_e values while explicitly treating the 5270 Å text as a wavelength-description ambiguity in the patent prose.

## Optical Architecture

The design is a fixed-conjugate, all-spherical, high-NA reduction objective with nine elements in six air-spaced groups. In physical order the groups are L1 / L2 / L3-L4-L5 / L6 / L7-L8 / L9.

The first two groups form a weak front corrector. In isolation, the L1-L2 pair has an EFL of +1445.7 patent units, or +426.5 mm after scaling. Its role is therefore not primary image formation. It controls the wide object-side field and the oblique aberrations entering the high-power rear assembly.

The rear assembly, from L3 through L9, carries almost all of the optical power. Its isolated EFL is +79.745 patent units, or +23.525 mm after scaling. It contains a nearly afocal cemented triplet, a positive relay singlet, a CaF₂-containing cemented doublet, and a thick final meniscus. This structure is consistent with a photolithographic reduction objective: a broad, weak front correction section followed by a compact, highly corrected imaging section.

The patent does not specify an aperture-stop location or clear apertures. For rendering and first-order aperture calculation, the data file inserts `STO` in the large d4 air gap between L2 and L3, at 75% of the r4-to-r5 distance measured from r4. This stop location is an inferred implementation choice, not a tabulated patent value. The stop semi-diameter was set by paraxial entrance-pupil calculation to produce F/1.2. The semi-diameters are likewise implementation estimates; the patent's Figure 2 labels field curves at 2.1° and 3°, while the data file's projection metadata uses the secondary production-summary angle-of-view value of 3.8° full field.

## Element-by-Element Analysis

### L1 — Negative Meniscus, concave to object

ne = 1.74687, νd = 27.7. Glass: SF13-class dense flint. f = −275.43 mm scaled.

L1 is a weak negative meniscus with both radii negative. Its standalone focal length is much longer than the complete lens, so it acts as a correction element rather than as a major power carrier. The patent's first condition constrains r2/r1, confirming that the bending of this element is load-bearing for astigmatism and field-curvature control.

### L2 — Weak Biconvex Positive

ne = 1.60752, νd = 38.1. Glass: F5-class flint. f = +181.70 mm scaled.

L2 is a broad, nearly symmetric biconvex element. It completes the weak front corrector. The use of a flint-like glass in a positive element is not incidental: the front section is not a simple field lens, but part of the chromatic and oblique-aberration balance of the whole objective.

### L3 + L4 + L5 — Cemented Triplet

The cemented triplet has an isolated EFL of −2833.8 patent units, or −836.0 mm after scaling. It is therefore nearly afocal. Its significance is aberration and color correction rather than net power.

**L3 — Biconvex Positive.** ne = 1.44850, νd = 67.0. Glass: unmatched low-index crown, 449/670. f = +55.92 mm scaled.

L3 is the strongest positive element in the triplet. No current public OHARA, Schott, Hoya, Hikari, CDGM, or Sumita catalog match is asserted for ne = 1.44850 and νd = 67.0. It is not CaF₂; the CaF₂ element is L8.

**L4 — Biconcave Negative.** ne = 1.69402, νd = 31.2. Glass: SF8-class dense flint. f = −40.64 mm scaled.

L4 is the central negative member of the triplet. It supplies the high-dispersion negative power needed to balance the two positive triplet members and contributes a major part of the triplet's Petzval and longitudinal-color correction.

**L5 — Weak Biconvex Positive.** ne = 1.69451, νd = 54.8. Glass: LAK9 / S-LAL9-class lanthanum crown. f = +200.72 mm scaled.

L5 is a high-index, moderate-dispersion positive element. Its rear radius is very long, so the element is only weakly biconvex. It completes the positive-negative-positive cemented triplet and helps hold the triplet close to afocal while still contributing higher-order correction.

### L6 — Plano-Convex Positive

ne = 1.62598, νd = 57.9. Glass: SK15 / S-BSM15-class barium crown. f = +77.91 mm scaled.

L6 is a plano-convex positive singlet with a flat rear face. It is the strongest air-spaced positive element after the triplet and acts as the relay between the near-afocal triplet and the rear cemented doublet.

### L7 + L8 — Cemented Doublet

The L7-L8 cemented doublet has an isolated EFL of +274.8 patent units, or +81.06 mm after scaling. It is a positive achromat-like group placed deep in the high-power rear assembly.

**L7 — Negative Meniscus.** ne = 1.59865, νd = 39.3. Glass: F8-class light flint. f = −101.81 mm scaled.

L7 is the negative flint member of the doublet. Its two positive radii make it a meniscus whose negative power is set by the stronger rear curvature at the cemented interface.

**L8 — Positive Meniscus.** ne = 1.43498, νd = 94.9. Glass: calcium fluoride / CaF2. f = +42.04 mm scaled.

L8 is the low-dispersion positive member of the doublet. The patent value ne = 1.43498 and νd = 94.9 matches CaF₂ to high precision at the e-line. Its presence is the strongest material evidence that the design belongs to the Ultra-Micro-NIKKOR photolithographic class.

### L9 — Thick Positive Meniscus

ne = 1.51871, νd = 64.1. Glass: BK7 / S-BSL7-class borosilicate crown. f = +217.42 mm scaled.

L9 is a thick final meniscus with both radii positive. A thin-lens reading of its curvatures alone would be misleading; with its substantial center thickness it is weakly positive in air. The patent's third condition constrains r14/(r15 + d14), showing that the final meniscus is central to the astigmatism, field-curvature, and distortion correction of the finished objective.

## Glass Identification and Selection

The patent labels the refractive-index column n_e and the Abbe-number column νd. The data file preserves the patent's n_e values in the schema field named `nd`, with a file-level warning, because the prescription was calculated at the e-line rather than the d-line.

| Element | Patent ne | νd | Identification used | Basis |
|---|---:|---:|---|---|
| L1 | 1.74687 | 27.7 | SF13-class dense flint | Legacy SF13 / OHARA S-TIH13-class 741/278 region |
| L2 | 1.60752 | 38.1 | F5-class flint | Legacy F5 603/380 region |
| L3 | 1.44850 | 67.0 | Unmatched low-index crown | No confident public-catalog match; coded as 449/670 |
| L4 | 1.69402 | 31.2 | SF8-class dense flint | Legacy SF8 689/313 region |
| L5 | 1.69451 | 54.8 | LAK9 / S-LAL9-class lanthanum crown | OHARA S-LAL9-class 691/548 region |
| L6 | 1.62598 | 57.9 | SK15 / S-BSM15-class barium crown | OHARA S-BSM15-class 623/582 region |
| L7 | 1.59865 | 39.3 | F8-class light flint | Legacy F8 596/392 region |
| L8 | 1.43498 | 94.9 | Calcium fluoride / CaF2 | Malitson CaF2 e-line calculation gives ne ≈ 1.43494, νd ≈ 95.0 |
| L9 | 1.51871 | 64.1 | BK7 / S-BSL7-class borosilicate crown | BK7 / OHARA S-BSL7-class 516/641 region |

The palette is not simply “crowns in positive elements, flints in negative elements.” L2 is a positive flint, L5 is a high-index lanthanum crown, and L8 is crystalline CaF₂. The correction strategy depends on index, dispersion, and bending at the cemented interfaces, not on family labels alone.

No anomalous partial-dispersion constants are published in the patent. CaF₂ has favorable secondary-spectrum behavior, but the analysis does not claim a quantified apochromatic residual because the patent supplies only ne and νd. The data file uses an ASCII `CaF2` token so the existing special-material Sellmeier catalog row can back the chromatic trace.

## Focus Mechanism

The lens is a fixed-conjugate reduction objective. There is no internal focusing group and no variable spacing table in the patent.

The patent object distance is d0 = 2006.767 in normalized units, or 591.996 mm after scaling. For that object distance, paraxial tracing gives a finite-conjugate image distance of 12.129 normalized units from r15, or 3.578 mm after scaling, and a transverse magnification of −0.039405. The resulting object-to-image distance is 809.901 mm after scaling.

The data file also records the infinity-equivalent Gaussian BFD, 8.240 normalized units or 2.431 mm scaled. This is exposed as the first value of the BF variable because LensVisualizer's ordinary sequential lens model is built around an infinity-focus base state. The second BF value, 3.578 mm, is the patent β = −0.04 conjugate image distance. This should not be read as an internal focus mechanism.

## Conditional Expressions

GB 1,050,055 states three design conditions. Example 1 satisfies all three.

Condition (1):

$$0.8 \leq r_2/r_1 \leq 2.0$$

For Example 1,

$$r_2/r_1 = (-200.400)/(-150.037) = 1.3357$$

Condition (2):

$$0.6f \leq r_{11} \leq 1.5f$$

With f = 100,

$$60 \leq 95.730 \leq 150$$

Condition (3):

$$0.3 \leq r_{14}/(r_{15}+d_{14}) \leq 1.0$$

For Example 1,

$$r_{14}/(r_{15}+d_{14}) = 41.352/(26.330+52.321) = 0.5258$$

The conditions correspond to the patent's stated control of astigmatism, curvature of field, coma, spherical aberration, and distortion. They are not arbitrary dimensional ratios.

## Chromatic Correction Strategy

The lens is optimized around the e-line, but the patent text also describes chromatic-aberration correction over a broader visible range. The primary chromatic structure is the combination of a positive-negative-positive cemented triplet and a rear flint/CaF₂ cemented doublet.

The triplet L3-L4-L5 uses a low-index crown, a dense flint, and a high-index lanthanum crown. It has almost no net power in isolation, which is consistent with a correction group that can influence longitudinal color and Petzval curvature without taking over the system focal length.

The L7-L8 doublet uses a light flint against CaF₂. This is the material pairing most characteristic of the design. CaF₂'s very low dispersion permits stronger residual color control than a conventional crown partner. The extent of secondary-spectrum correction cannot be quantified from the patent alone because partial-dispersion data are not tabulated.

## Verification Summary

Independent paraxial y-u and ABCD matrix traces were run directly from the Example 1 prescription. Values below use the patent's n_e indices.

| Quantity | Patent-normalized result | Scaled ×0.295 result | Note |
|---|---:|---:|---|
| Gaussian EFL | 98.678 | 29.110 mm | Patent nominal f = 100 |
| Infinity-equivalent BFD from r15 | 8.240 | 2.431 mm | Data-file base BF |
| Finite-conjugate image distance from r15 | 12.129 | 3.578 mm | At d0 = 2006.767 |
| Object distance to r1 | 2006.767 | 591.996 mm | Patent d0 |
| Magnification at finite conjugate | −0.039405 | −0.039405 | Patent β = −0.04 |
| r1-to-r15 track | 726.531 | 214.327 mm | Excludes object and image distances |
| Object-to-image distance | 2745.427 | 809.901 mm | At the β = −0.04 conjugate |
| Petzval sum | 0.00087698 | 0.00297281 mm⁻¹ | Surface-by-surface φ/(n·n′) |
| Petzval radius | 1140.28 | 336.38 mm | ≈11.6× the computed EFL |
| Inserted stop semi-diameter | 33.782 | 9.966 mm | Inferred stop in d4 |
| F-number from inserted stop | 1.19994 | 1.19994 | Paraxial entrance-pupil calculation |

The Petzval value was computed surface by surface as $\sum \phi/(n n')$, not from thin-lens element approximations. The stop and semi-diameters are implementation estimates because the patent does not publish clear apertures or a diaphragm location. The final SD pass tapers the front negative meniscus and the compact rear block to follow Fig. 1 rather than letting the rear elements all share one ray-envelope height.

## Sources

- GB 1,050,055, “An Improved Photographic Objective Lens System,” Nippon Kogaku K.K., published December 7, 1966.
- Nikon Corporation, “1964 | In Pursuit of the ‘Ultrafine’ — The Ultra Micro-NIKKOR,” corporate history article: https://www.nikon.com/company/corporate/history/frontier/09/
- Nikon Corporation, corporate history page, Ultra Micro-NIKKOR 29.5mm F1.2 caption: https://www.nikon.com/company/corporate/history/
- Redbook-jp, “Ultra Micro Nikkor Grand History,” secondary archival specification summary for the Ultra-Micro-NIKKOR 29.5mm F1.2: https://redbook-jp.com/redbook/ultra4/d010.html
- OHARA Corporation, optical glass catalog and individual glass data pages for S-TIH13, S-LAL9, S-BSM15, and S-BSL7.
- Schott AG, optical glass catalog, used for BK7/SF-class cross-checks.
- Malitson, I. H., “A Redetermination of Some Optical Properties of Calcium Fluoride,” Applied Optics 2(11), 1103–1107 (1963), used for CaF₂ e-line and Abbe-number verification.
