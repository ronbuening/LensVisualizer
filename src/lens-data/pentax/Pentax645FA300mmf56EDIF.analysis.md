## Patent Reference and Design Identification
**Patent:** US 2002/0041452 A1 (granted as US 6,580,568 B2)
**Inventor:** Hiroyasu Ozaki
**Applicant:** Asahi Kogaku Kogyo Kabushiki Kaisha
**Filed:** August 6, 2001; priority August 9, 2000
**Published:** April 11, 2002
**Title:** Telephoto lens system
**Example details:** Embodiment 1, Table 1, Figure 1; unscaled infinity state.

This is an explicitly representative 292.35 mm F5.7 patent embodiment, NOT an established factory prescription for the FA645 300 mm F5.6. The association was already recorded in the October 2 research matrix. Seven air-spaced elements, roughly 300 mm focal length, F5.7 versus marketed F5.6, and full 13.4-degree design field versus 13.5-degree factory film field support correlation. They do not prove production identity. The smaller digital-format 10.5-degree factory field is not the film-format comparison.

Alternatives remain open: E2 is 292.49 mm F5.7/BFD 117.59, with the stop between the final two elements; E3 is 292.38 mm F5.7/BFD 117.64 with the stop before the final group, like E1. No obtained maker section discriminates among them. E1 is chosen as a representative, not because it is proven closer to production.

Sources: [patent](https://patents.google.com/patent/US20020041452A1/en), [primary PDF](https://patentimages.storage.googleapis.com/2c/c3/b9/524e2bf841a355/US20020041452A1.pdf), [maker film specifications](https://www.ricoh-imaging.co.jp/japan/products/filmcamera/lens/index645n2_long.html), [maker current product](https://www.ricoh-imaging.co.jp/english/products/lens/645/telephoto/smcpentax-fa645-300/).

## Optical Architecture
Three focusing groups: positive front triplet, negative middle pair, and positive rear pair. All seven elements are air-spaced. The stop is source-positioned 20.250 mm after S10 and 1.500 mm before S11. Every radius, thickness, spacing, nd/Vd and the 116.66 mm source image interval is retained literally.

## Element-by-Element Analysis
| Element | Power | nd | Vd |
|---|---|---:|---:|
| L1 | Positive | 1.48749 | 70.2 |
| L2 | Positive | 1.49700 | 81.6 |
| L3 | Negative | 1.66998 | 39.3 |
| L4 | Negative | 1.65412 | 39.7 |
| L5 | Positive | 1.80518 | 25.4 |
| L6 | Positive | 1.56732 | 42.8 |
| L7 | Negative | 1.83400 | 37.2 |

## Glass Identification and Selection
No factory glass trade names are proven. Literal nd/Vd are preserved, not replaced by catalog lookalikes. Table 1 additionally provides PgF of 0.5774 for L3 and 0.5703 for L4. Structured dPgF values are -0.0002974 and -0.0067246 respectively, converted against the engine's 0.6438 - 0.001682 Vd normal line. Other dispersion remains an nd/Vd approximation; no unprinted spectral indices are invented.

## Focus Mechanism
The patent specifies moving the middle negative group toward the image for near focusing, but supplies no finite numerical station here. This file is infinity-only with no active focus gaps. The 2.2 m metadata placeholder does not implement the maker's close-focus performance. Source BFD 116.66 is retained; independent Gaussian computation gives 116.663191 mm and EFL 292.353440 mm, consistent with the rounded source.

## Aspherical Surfaces
None; all surfaces are spherical.

## Validation and Qualifications
Source Table 1 was visually checked in the primary PDF. Ingestion, six axial pupil traces through .999 radius, seven field-fraction reference geometric MTF runs, source-plane consistency, and render geometry passed. No refracting surface was silently trimmed. Clear semidiameters are heuristic, not factory dimensions. An initial 28 mm L3 estimate failed the gap-sag check; reducing it to 26 mm cured that estimated-envelope overlap without changing any literal prescription value or relaxing the geometry gate. Final per-surface clear SDs are 31/31/30/30/26/26/22/22/21/21/19/19/22/22 mm.

Estimated-aperture vignetting is provisional: at the 645-format corner, 2394 valid and 834 blocked samples, zero failed rays. This is reference geometric simulation, not measured or diffraction MTF. Retail identity, finite focus, complete current-main integration, full typecheck/regression, and compiled/browser QA remain unresolved or deferred. No publication or deployment is implied.


## Refinement and Fresh Independent Checks — 2026-11-16
The primary A1 PDF was fetched again and Figure 1 inspected. The drawing confirms the three-group arrangement and fixed stop before L6, but is schematic, skewed in the scan, and provides no printed effective diameters. No strong figure evidence establishes that the current inferred rims are wrong. Per the repository aperture-audit rule, neither aesthetic fitting nor maximizing edge throughput justifies replacing them. All radii, intervals, nd/Vd, partial-dispersion values, stop position, SDs and source image plane remain unchanged. This update strengthens metadata and validation; it does **not** claim a newly optimized factory prescription.

An independent spherical d-line Snell tracer (441 stop-targeted rays per field, pupil radius limited to 0.98; separate from the application) gave EFL 292.353440056 mm, BFD 116.663191149 mm and paraxial physical stop radius 16.295571901 mm. Axial clearance was 441/441; at 3.35 degrees it was 423/441; at the literal 6.7-degree source field it was 335/441 (75.96%). There were zero aiming failures. RMS spot radii at the literal source plane were 0.000400, 0.003082 and 0.007205 mm respectively. Sampling and pupil coverage differ from app MTF, so these percentages are not interchangeable with its throughput. Minimum common-rim adjacent-surface interval was positive, 0.105375 mm, between S4/S5. This independent edge calculation is not a substitute for the app's full render diagnostics.

Independent least-RMS axial-plane exploration gave shifts of -0.003544, -0.009755 and +0.021296 mm at those fields. Different field optima and rounded source BFD do not warrant moving the prescribed plane; no plane change was made.

Fresh application checks used pinned main f5b456fec7b69184844078f6ec6b1ac132f8ec58. buildLens and reference geometric MTF passed. Source-plane error was +0.003191149 mm against a 0.381797658 mm engine limit. At axis, 812/812 rays passed; at actual field 3.402969 degrees, 756/812; at 6.640368 degrees, 2414/3228; at format-corner 6.735697 degrees, 2394/3228 (74.16%). All four converged at grid32/64 with zero failed or unaimed rays. Convergence reached 100/78/82/76 lp/mm respectively. The corner lies beyond the patent's 6.7-degree half-field and is an extrapolation, not source-certified coverage. The third MTF target is a paraxial source-height proxy, whose exact engine field is 6.640368 degrees; the independent tracer separately tests exactly 6.7 degrees.

The two printed PgF constraints fix only relative partial dispersion: (ng-nF)/(nF-nC). Together with nd and Vd they do not identify a unique glass trade name, melt or full Sellmeier curve. No catalog substitution or invented spectral values were introduced. MTF is monochromatic geometric simulation, not measured, diffraction or verified polychromatic performance. Full-app regression and compiled/browser QA remain deferred to integration. The required focus.closeFocusM metadata remains 2.2 m but no finite station or active focus gaps exist.
