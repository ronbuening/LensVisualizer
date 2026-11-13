# Agfa Color-Solagon 55 mm f/2: patent-example reconstruction

## Patent Reference and Design Identification

**Patent:** US 2,784,646
**Filed:** 1953-10-21
**Granted:** 1957-03-12
**Priority:** 1952-10-28, Germany
**Inventors:** Theodor Brendel; Hans Lautenbacher
**Assignee:** Agfa Camera-Werk AG
**Title:** Four Component Photographic Objective Formed of Six Lens Elements
**Example details:** Tables on PDF pages 3–4; Figure 4; normalized lengths multiplied by 55 to obtain millimetres.

Example 1 is transcribed without optical fitting. Its normalized focal length is scaled to 55 mm; every printed radius, thickness and air space receives the same factor, while the refractive indices and Abbe numbers remain unchanged. The patent explicitly defines the d line as 587.6 nm. The printed assignee name is Agfa Camera-Werk Aktiengesellschaft; the metadata uses the data file's normalized spelling above.

The association with the Color-Solagon 55 mm f/2 rests on two sources:

1. The Agfa sales brochure confirms a 55 mm f/2 Color-Solagon with six elements.
2. A secondary historian associates the reproduced DE 1,063,824 table with that lens; its numerical prescription agrees with US Example 1.

This supports a possible production-lens association, but does not prove the retail numerical prescription, exact production scale or complete German patent-family metadata. The existing 50 mm f/2 entry uses a different patent. Earlier bounded historical searches found no prior 55 mm entry, without establishing exhaustive historical novelty. This draft awaits final independent review and source-backup confirmation; it is not factory-validated or released.

## Optical Architecture

The six elements form four air-separated components: a positive front singlet, the cemented L2/L3 doublet, the cemented L4/L5 doublet and a positive rear singlet. This is a Gaussian-type arrangement with the two inner compound menisci facing the central diaphragm. The patent describes the inner components as having small negative power and the outer components as positive (PDF page 3).

The inner doublets provide the opposed concave surfaces around the stop, while the outer positive elements supply the collecting power. The patent discusses this arrangement in relation to spherical and chromatic aberration, coma, astigmatism, field curvature, distortion and vignetting. Its correction claims do not establish measured performance for the reconstructed model or a production lens. All powered surfaces are spherical; the cemented interfaces are planar, and no aspheric coefficients are supplied.

## Element-by-Element Analysis

The shapes below follow the transcribed radii. Individual element focal lengths are not published in the supplied source evidence and are not assigned here. The glass supplier and factory glass identities remain unknown.

### L1 — Positive meniscus, convex toward the object

nd = 1.72253, νd = 37.8. Glass: unidentified patent glass; no catalog substitution.

L1 is the front positive singlet. Its stronger front curvature and weaker rear curvature begin convergence before the front cemented component. It uses the same published index and Abbe number as L6.

### L2 + L3 — Front cemented component

L2: nd = 1.66972, νd = 47.4. Glass: unidentified patent glass; no catalog substitution.

L3: nd = 1.65456, νd = 33.9. Glass: unidentified patent glass; no catalog substitution.

L2 is plano-convex and L3 plano-concave, sharing the flat S4 cemented interface. L3's concave rear surface S5 faces the diaphragm. The patent describes this compound meniscus as weakly negative. The positive member has the higher Abbe number, providing a dispersion contrast with its negative partner; this is a qualitative reading of the prescription rather than a measured chromatic result.

### L4 + L5 — Rear cemented component

L4: nd = 1.69915, νd = 30.1. Glass: unidentified patent glass; no catalog substitution.

L5: nd = 1.69086, νd = 54.7. Glass: unidentified patent glass; no catalog substitution.

L4 is plano-concave and L5 plano-convex, joined at the flat S7 interface. The concave S6 surface faces the stop, opposing S5 across the central air space. This is the second weakly negative compound meniscus described by the patent. Its negative member again has the lower Abbe number; no partial-dispersion measurements establish the residual secondary spectrum.

### L6 — Positive biconvex rear singlet

nd = 1.72253, νd = 37.8. Glass: unidentified patent glass; no catalog substitution.

L6 closes the system with a weakly curved front surface and a more strongly curved rear surface. It provides the rear positive component of the patent's four-component architecture. The image plane lies behind this element at a calculated, unprinted back-focus distance.

## Glass Identification and Selection

The prescription retains all six literal d-line index/Abbe pairs. It supplies no measured glass curves, established historical catalog identities or glass-vendor assignments. Modern catalog comparisons cannot establish the historical glass identity or override the patent's explicit 587.6 nm reference wavelength.

The two cemented components pair positive members of higher Abbe number with negative members of lower Abbe number. This supports a qualitative chromatic-correction interpretation, but the published index/Abbe pairs alone do not establish anomalous partial dispersion, apochromatic performance or full spectral accuracy. No measured glass curves or full spectral validation are claimed.

## Focus Mechanism

Only the infinity prescription is reconstructed. The source evidence supplies no close-focus station, focus travel or near-focus spacing sequence, so no manufactured focusing motion or minimum focusing distance is assigned. The file's very large object-distance setting represents infinity, rather than a measured close-focus limit.

The final gap, 39.8881649722 mm, is the calculated paraxial back focal distance and is not printed in the patent. No printed terminal gap was replaced. The image plane is held at this calculated position for the reported tests; no refocus, optical retuning or near-focus reconstruction was performed.

## Verification Summary and Limitations

The recorded source check found no transcription mismatches in the ten radii, nine printed thicknesses/spaces, six index/Abbe pairs or two cemented interfaces. The calculated effective focal length is 54.9985181967 mm at f/2, compared with the scaled 55 mm target. The printed thicknesses and spaces total 35.67905 mm; including the calculated back focus gives a 75.56721497223845 mm track. These are model calculations, not factory measurements.

### Inferred rims and diaphragm

The source supplies neither clear-aperture semi-diameters nor an exact stop split. Initial element-body semi-diameters of 20/12.5/11.5/14.5 mm were selected on a 0.5 mm geometry grid before ray tests, with a 90% geometry-clearance limit. Those initial rims clipped the axial beam. The current model raises only S3/S4 from 12.5 to 12.9 mm, giving L2 equal front and rear rims; all other inferred rims remain unchanged. S5 remains 12.5 mm. Figure 4 supports the construction, but does not establish factory clear apertures.

The initial vertex-midpoint iris failed full-aperture clearance; that rejected choice remains recorded in the audit. The modeled alternative is the midpoint of the feasible full-aperture interval, 8.376374101204 mm after S5 and 4.803825898796 mm before S6, preserving the 13.1802 mm central air space. Independently checked clearance of 0.660540553 mm on each side does not establish manufactured shutter or mounting clearance. The stop radius, 9.632180754601764 mm, is derived from f/2.

### Sampled clipping and image quality

At the unchanged calculated image plane, the same 812 equal-area aimed stop-lattice samples give the following results before and after the S3/S4 rim correction:

| Field angle | Original arrivals / clips / solver failures | Current arrivals / clips / solver failures |
| --- | --- | --- |
| 0° | 772 / 40 / 0 | 812 / 0 / 0 |
| 12.5° | 598 / 160 / 54 | 628 / 142 / 42 |
| 25° | 294 / 376 / 142 | 322 / 358 / 132 |

The original axial clipping fraction was 4.9261%; no axial rim limit remains at f/2 with the corrected rims. At 25°, arrivals rise from 36.2069% to 39.6552%. This does not certify whole-pupil coverage over the declared 50° full field. Rear off-axis vignetting remains, and one lower edge-bundle ray was not found in the separate clearance check.

The raw solver failures are reported as `noBracket`: an intersection search failed, which alone does not prove physical obstruction. A separate aperture-miss classification identifies all 132 remaining 25° failures as blocked within the inferred apertures, giving 322 valid and 490 blocked samples with none unresolved at that field. Unknown factory rims prevent attributing these losses to a production lens.

Uniform stop-lattice survival is not an entrance-pupil or energy-throughput estimate: pupil-mapping Jacobians are not integrated. Failed and blocked samples are retained rather than discarded as outliers. Before the rim correction, surviving-arrival RMS radii at 0°/12.5°/25° were 0.028630/0.030991/0.043562 mm. Those values describe neither whole-pupil image quality nor MTF. Sparse 26-ray checks missed the original dense-sample axial clipping. No measured illumination or exact factory performance is claimed.

### Scope of the recorded checks

The audit records successful prescription construction, an isolated TypeScript check, source parity and independent body, air-space and iris-clearance checks. After the rim correction, the surface and aperture checks pass; the modeled aperture is f/2. A separate chief-ray coverage check reaches the 21.65 mm full-frame corner at 21.7°, but this establishes chief-ray coverage only, not whole-pupil illumination.

Full application and full-corpus checks, application build, browser rendering and MTF validation remain unperformed here. The catalog entry remains hidden and represents infinity only; no release or deployment is claimed.

## Sources

- US 2,784,646, *Four Component Photographic Objective Formed of Six Lens Elements*, granted 1957-03-12; bibliographic header and Example 1 on PDF page 3, repeated prescription on page 4, and Figure 4.
- [Agfa sales brochure](https://www.cameramanuals.org/agfa_ansco/agfa_agfaflex.pdf): primary maker evidence for the Color-Solagon 55 mm f/2 specification and six-element construction.
- [Historical account reproducing DE 1,063,824](https://www.zeissikonveb.de/start/objektive/normalobjektive/pancolar2.html): secondary evidence for the production-lens association and numerical correspondence with US Example 1; not an independent factory prescription.
