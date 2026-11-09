# Sigma DP1 Merrill 19mm f/2.8: probable patent-family representative

## Patent Reference and Design Identification

**Patent:** JP 2013-137377 A  
**Application Number:** JP 2011-287644  
**Filed:** 2011-12-28  
**Published:** 2013-07-11  
**Inventor:** Atsushi Yamazaki  
**Applicant:** Sigma Corporation  
**Example details:** Paragraphs 0057–0062, printed 13–14 (PDF 14–15), Fig10 (PDF 25); native scale 1.

This is a probable DP1 Merrill family association, not proof of the exact factory embodiment. Example 4 is used whole. Examples 3 and 7 remain plausible alternatives; their surfaces are not spliced into this model.

1. The maker section and Fig10 share nine elements in eight groups: positive/negative before the stop, a positive/negative cemented pair, two positive singlets, then negative/negative/positive rear singlets.
2. The maker highlights two glass-molded aspheric elements at the locations corresponding to source elements 6 and 9, plus a low-dispersion second element and a high-index front element. This supports topology, not commercial glass identity.
3. Native 18.82mm and F2.89 are close to retail 19mm and f/2.8. The model preserves native values, 75.18° full field, 14.20mm image height and 46.9827mm first-surface-to-image track.
4. The maker final biconvex element resembles Example 4 more closely than the flatter alternatives, but schematic resemblance is not a unique selector.

## Optical Architecture

The first six elements form positive group L1, with a source group focal length 11.71mm. The last three form negative group L2, with source focal length −26.50mm. The stop is source surface 5, 10.13mm behind the first vertex, after the 6.10mm S4 gap and before the 2.20mm S6 gap. It is not moved to improve performance.

The source camera-side filter is represented as a rear plate, not a tenth drawn lens: 1.20mm thickness, nd 1.52301, νd 58.59,1.00mm behind S18, followed by 4.9327mm to the printed image plane. This is the patent's filter, not a claim of the exact retail Foveon sensor stack.

## Element-by-Element Analysis

### L1: Positive meniscus

nd = 1.88300, νd = 40.80. Glass: unmatched source index/Abbe pair; vendor unknown.

High index provides front positive power. The maker identifies a high-refraction element at this position.

### L2: Negative meniscus

nd = 1.43700, νd = 95.10. Glass: unmatched source index/Abbe pair; vendor unknown.

Very low dispersion agrees qualitatively with the maker’s FLD placement. The deep rear cap ends inside a wider drawn blank.

### L3: Positive cemented component

nd = 1.80420, νd = 46.50. Glass: unmatched source index/Abbe pair; vendor unknown.

The positive member shares source S7 with element 4; the single junction is not duplicated.

### L4: Negative cemented component

nd = 1.69895, νd = 30.05. Glass: unmatched source index/Abbe pair; vendor unknown.

The higher dispersion relative to element 3 supports chromatic balancing, without establishing a commercial glass match.

### L5: Positive singlet

nd = 1.77250, νd = 49.62. Glass: unmatched source index/Abbe pair; vendor unknown.

Adds power behind the cemented pair.

### L6: Positive aspheric singlet

nd = 1.77377, νd = 47.17. Glass: unmatched source index/Abbe pair; vendor unknown.

Its rear face S12 carries the first complete published asphere table.

### L7: Negative meniscus

nd = 1.60342, νd = 38.01. Glass: unmatched source index/Abbe pair; vendor unknown.

Begins the fixed negative rear group.

### L8: Negative meniscus

nd = 1.54072, νd = 47.20. Glass: unmatched source index/Abbe pair; vendor unknown.

Faces element 7 across the 6.63mm gap. Its concave front cap has a figure-visible land extending to the taller blank.

### L9: Positive aspheric singlet

nd = 1.69350, νd = 53.20. Glass: unmatched source index/Abbe pair; vendor unknown.

The broad final element carries the second aspheric face S17 and finishes the rear group.

## Glass Identification and Selection

Every source nd/νd pair is retained. No catalog glass, Sellmeier coefficients, anomalous partial dispersion or measured spectral curve is established. Chromatic behavior must not be presented as measured factory color performance. In this case the engine refuses C/d/F MTF because the νd 95.10 element lacks partial-dispersion data; only reference-wavelength MTF is qualified here. Other dispersion estimates do not cure that missing input. In particular, the second element's low nd/high νd supports the maker's FLD placement but does not identify its proprietary material.

## Focus Mechanism

The source text moves L1, including the front six elements and stop, objectward for near focus. Only infinity d12 = 1.0000mm is published. The model has no numerical close-focus keyframes and does not invent a displacement law from the retail 0.20m minimum distance or 1:8.4 magnification. Those specifications do not validate finite-focus ray results.

## Aspherical Surfaces

The standard sag convention uses sqrt(1−(1+K)h²/R²), with K=0 for both source aspheres. All printed coefficients through A10 are retained; omitted higher terms are a model convention, not a statement that the source printed zeros.

| Surface |   K |         A4 |          A6 |          A8 |          A10 |
| ------- | --: | ---------: | ----------: | ----------: | -----------: |
| S12     |   0 | 6.56730e-5 | −9.61790e-8 |  3.41610e-9 | −1.49310e-11 |
| S17     |   0 | 2.60540e-5 | −1.17690e-7 | 7.28490e-10 | −1.00900e-12 |

## Aperture and Model Qualifications

Clear semi-diameters and iris diameter are not tabulated. The native F2.89 ordinary-prime iris derives to 3.410106mm radius. Its aperture audit gives F2.889999997 with STO as the actual axial limiter, rather than an inferred rim. The entire iris stroke is clear of glass. Production render diagnostics report zero hidden semi-diameter trim.

Figure 10 has explicit opaque lands on S4 and S15. A 400 dpi vertex-span measurement gave 15.257pixels/mm, but diagram height is schematic rather than a supplied cap dimension. The initial 9.3mm S14/S15 caps physically overlapped across the 6.63mm source gap and were rejected. The revised E7 square rims are 7.8mm; S15 has a 7.8mm clear cap extending opaquely to 11.2mm, while S4 has a 5.2mm clear cap extending to 9.2mm. The cemented pair has equal 6.1mm rims. These are declared mechanical hypotheses, not factory dimensions. No source R/d/material/asphere, image plane, global threshold or per-lens geometry allowance was changed; default 90% gap-sag checks pass.

## Verification Summary

At the source 37.59° half-field, a 32×32 stop-grid diagnostic transmits 536 of 812 sampled rays wide open (276 clipped, no failed, unaimed or unresolved rays); on-axis and 18.795° each transmit 812/812. At F4 the source-edge count is 612/812. These are sampled modeled pupil throughputs, not measured illumination or certified factory vignetting. The source-edge chief ray is clear. The APS-C format-corner field audit reaches 14.175mm at 37.54049° without clipping the chief ray. All inferred apertures remain qualified assumptions even when rays converge.

At the unchanged source image plane 46.9827mm behind S1, reference-wavelength geometric MTF converges through 40lp/mm at center, half image height and format corner for F2.89 and F4. The paraxial plane residual is −0.0000805mm. A separately labeled best-axial calculation requests −0.045406mm shift at F2.89 (−0.047000mm at F4); neither shift is applied to the source prescription. Best-focus values must not replace source-plane results.

C/d/F MTF is unavailable because the very-low-dispersion element has no partial-dispersion data. Reference-wavelength diffraction also converges through 40 lp/mm at all three image heights, both apertures, and both separately labeled focus modes, using grids up to 128. At the source 37.59° half-field the chief ray lands at 14.19935 mm versus the printed 14.20 mm. A 64-grid edge sample transmits 2134/3228 rays (66.11%) at F2.89 and 2430/3228 (75.28%) at F4, with no trace failures or unresolved rays. Field reach does not mean full pupil transmission. Numerical results simulate the authored representative with inferred rims; they are not production-lens measurements. Metadata, full typecheck, format and lint, and 36 focused corpus/integration files containing 1385 tests passed. Production build and SEO passed. This is focused integration coverage, not a full-repository test run. Interactive browser UI remains unverified.

## Sources

- [Original A-publication](https://depatisnet.dpma.de/Depatisnet?action=pdf&docid=JP002013137377A&xxxfull=1): complete recovered PDF, with table/asphere and Fig10 pixels independently reviewed.
- [Sigma DP1 Merrill](https://www.sigma-global.com/en/cameras/dp1-merrill/): official product context. Recovered 2012 brochure section crop supports the construction comparison.
- Full original brochure, grant PDF and original 28 MB research archive are not in recovered custody. Their historical descriptions are not substituted for current direct inspection. The A-publication and maker section crop are the retained source evidence used here.
