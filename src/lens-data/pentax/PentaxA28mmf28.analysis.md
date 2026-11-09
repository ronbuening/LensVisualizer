## Patent Reference and Design Identification

**Patent:** US 4,468,100 A  
**Filed:** September 23, 1982  
**Published:** August 28, 1984  
**Inventors:** Takayuki Itoh; Yasunori Arai  
**Assignee:** Asahi Kogaku Kogyo Co., Ltd.  
**Title:** Wide-angle photographic lens  
**Example details:** Figure 1 and printed column 4; complete literal prescription without normalization.

The named SMC Pentax-A 28mm f/2.8 section in the manufacturer's A-lens booklet, printed page 36, supports a probable design-family association. It shows seven separate elements, two negative front menisci, separate positive third and fourth elements, a biconcave fifth element, and the two positive rear elements. The specification table gives seven elements in seven groups and a 75° field. The patent's f/2.8, 28.78 mm, 75.2° example agrees at the product-class level. The source dimensions are not rescaled to the marketed 28 mm.

The maker's weakly biconvex fourth element favors this example over the second example's shallow front concavity. Schematic precision does not uniquely exclude Example 2 or establish the actual manufactured radii. This is not a factory-exact prescription. No alternative-example values are mixed in. The later F28 model is not separately instantiated from the same data. Other M28 prescriptions remain distinct.

## Optical Architecture

This is an all-spherical retrofocus wide-angle with seven air-separated elements and fourteen refracting surfaces. The front negative section creates the extended back focus; the central and rear positive elements balance that negative power. No aspheres, cemented pairs, coating data or filter plates are specified.

The maker section places the iris between L3 and L4 but gives neither its coordinate nor diameter. The initial model uses the midpoint of the unchanged 4.62 mm sixth air space: 2.31 mm after S6, at z = 23.14 mm. The engine derives the iris radius from the design f-number. Initial clear semi-diameters of 15, 12, 9.5, 8.5, 7.5, 8.5 and 9.5 mm are approximate mechanical hypotheses guided by the section's relative rim envelope, not measured factory dimensions or values derived from the 49 mm filter. The first hypothesis failed the S2 rim-slope and S10/S11 gap-sag checks. Conservative paired corrections set L1 to 14.9 mm and L5 to 6.45 mm. All other caps and the midpoint iris remain unchanged. This corrected hypothesis passes ordinary default geometry checks with zero hidden rendering trim and no overrides. Native rendered silhouettes were visually compared with the maker and patent sections; topology and comparative envelope agree, but the rim dimensions remain estimates.

## Element-by-Element Analysis

### L1 and L2: Negative Front Menisci

L1: nd = 1.58913, Vd = 61.0. L2: nd = 1.51633, Vd = 64.1. Both remain unmatched glasses. Their object-facing convex surfaces and more strongly curved rear surfaces contribute negative power and the long back focus.

### L3 and L4: Separate Positive Elements

L3: nd = 1.70000, Vd = 48.1. L4: nd = 1.65844, Vd = 50.9. Both are biconvex and remain unmatched. Their positive power surrounds the assumed stop region; L4's weak front curvature is a useful but not unique topology discriminator.

### L5: Biconcave Negative Element

nd = 1.76182, Vd = 26.6. This unmatched, relatively dispersive glass supplies negative power in the rear section. Both signed radii and the 3.33 mm center thickness remain literal.

### L6 and L7: Positive Rear Menisci

Both use nd = 1.69350 and Vd = 53.2, without an established supplier identity. L6 has a stronger image-facing curvature. L7's very weak front curvature and stronger rear curvature close the system. The intervening 0.10 mm air space remains present and requires explicit cross-gap validation.

## Glass Identification and Spectral Limits

Printed column 3 explicitly defines N with respect to the d-line. Each element therefore declares d-line coordinates. No catalog names, melt data, measured C/F/g indices or partial dispersion are supplied. All glasses remain unmatched, and wavelength dispersion derived from nd/Vd is estimated. Any polychromatic result is a model estimate, not a manufacturer's measured curve.

## Focus Mechanism

The checked source does not explicitly declare infinity. A collimated conjugate is a modeling interpretation supported by agreement with the printed focal length and back focus, not a quoted source condition. The manufacturer's 0.30 m minimum focus is metadata only. No close-focus prescription or motion is invented.

## Verification Status

Static source roundtrip preserves all fourteen radii, thirteen intersurface distances, seven material pairs and the printed 36.79 mm image-side gap. Splitting d6 around the assumed iris leaves its total unchanged. Independent paraxial calculation gives EFL 28.775775627 mm and BFL 36.794842307 mm. The source track is 43.72 mm and the source image plane is z = 80.51 mm; the derived paraxial plane is 0.004842307 mm farther back. Neither paraxial nor diagnostic best focus replaces the source plane.

Native geometry passes with zero hidden trims. A 257-sample iris-stroke check finds positive margins exceeding 2.31 mm on both sides. The shared axial-aperture audit measures f/2.799999997 with STO as limiter. Wide-open 32-grid transmission is 100% on axis, 77.34% at half field, 64.04% at three-quarter field and 49.75% at the 37.6° edge, with no failed or unaimed samples. All modeled f/2.8–22 settings pass the full axial bundle; severe wide-open edge clipping remains a modeling limitation, not a retail-lens measurement.

At the source plane, reference-wavelength and estimated three-color MTF converge through 40 lp/mm at center and half field with grids up to 64. The edge initially converges only through 20 lp/mm at grid64. Reference-wavelength grid128 refinement converges through 40 lp/mm with maximum delta 0.002076; estimated three-color edge128 also converges through 40 lp/mm, maximum delta 0.001659. Separate best-axial diagnostics select shifts of -0.05400949 mm (reference) and -0.04354901 mm (estimated color); they do not alter the authored source plane. Best-focus center and edge results remain convergence-limited at grid64, while half-field results converge through 40 lp/mm. Estimated spectral curves must not be presented as measured manufacturer performance.

Standalone integration passed metadata generation, full typecheck, formatting, lint, 23 focused corpus/integration suites containing 1609 tests, production build and SEO (zero errors or warnings). The entire repository test suite was not run. Interactive UI remains unverified. Native diagnostics used a 1536 MiB heap; integration used one test worker and a maximum 3 GiB heap. These checks do not establish a factory-exact prescription or measured retail-lens performance.

## Sources

- [US 4,468,100 A original patent](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/4468100), front page, Figure 1 and printed columns 3–4.
- [Pentax A-lens booklet](https://www.cameramanuals.org/lenses/pentax_smc_a_lenses.pdf), printed pages 33 and 36 (PDF pages 36 and 39).
