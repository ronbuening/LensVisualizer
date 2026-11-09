## Patent Reference and Design Identification

**Patent:** [US 4,134,645 A](https://patents.google.com/patent/US4134645A/en)
**Granted:** January 16, 1979
**Inventors:** Takahiro Sugiyama, Toshifumi Kubota, Rensuke Adachi
**Assignee:** Asahi Kogaku Kogyo Co., Ltd.
**Example details:** Physical PDF page 6, printed columns 3–4, repeated in claim 1; Figures 1–2. All prescription dimensions are multiplied by 1.2 as a retail-scale hypothesis.

The probable association with the SMC Pentax-M 120mm f/2.8 rests on three independent kinds of evidence:

1. The patent provides a complete five-element, five-group prescription at f/2.8 and 10.2° half-field.
2. The [Pentax LX manufacturer's manual](https://retro-camera.ru/files/Pentax-LX-Manual-EN.pdf), physical page 61 (printed page 60), identifies the M120 as a five-element, five-group f/2.8 lens with a 21° full field, 1.2 m minimum focus, 275 g mass and a 49 mm filter thread.
3. The [PhotonsToPhotos Optical Bench hub](https://www.photonstophotos.net/GeneralTopics/Lenses/OpticalBench/OpticalBenchHub.htm) maps this prescription to the M120. This third-party correlation is not factory confirmation.

The native patent prints 100 mm focal length. The 1.2 scale is an explicit association hypothesis, not an assertion that the source itself specifies 120 mm. The manufacturer's 21° full field is not substituted for the patent's 20.4° field. The separate M135 and M150 reconstructions use Examples 2 and 3; their prescriptions are not scaled copies of this example.

## Optical Architecture

Five separate spherical elements form a compact telephoto architecture. The front positive-negative-positive cluster is separated from the rear positive-negative pair by a 34.608 mm scaled air space. No cemented boundary, aspheric coefficient or filter plate is specified.

The source drawing provides relative aperture proportions but no numerical clear apertures and no explicit diaphragm location. The initial reconstruction assigns 22 mm clear semidiameters to the first three elements and 11.5 mm to the final two. These are figure-guided estimates, not manufacturing dimensions. The figure's approximately 384-pixel first-to-last vertex span corresponds to 64.152 mm at the proposed scale; front and rear half-heights are approximately 132 and 69 pixels. Line width, scan distortion and the schematic nature of the section limit that estimate.

The inferred diaphragm lies 5 mm behind surface 6 within the long air gap. This location is a geometric modeling choice with room behind the curved rear face of L3. It is not a patent observation. The shared paraxial F/N rule derives iris radius at f/2.8; no physical iris diameter is claimed. Iris position and clear-aperture sensitivity must be evaluated before this draft is considered qualified.

## Element-by-Element Analysis

### L1 — Positive Meniscus

nd = 1.51821, νd = 65.0. Glass: Unmatched low-dispersion crown coordinates. f = +121.4111 mm.

This positive front element supplies collecting power. Its object-side curvature is stronger than its image-side curvature. The glass name and supplier are not specified.

### L2 — Biconcave Negative

nd = 1.80518, νd = 25.4. Glass: Unmatched dense-flint coordinates. f = −109.0133 mm.

The negative element lies between the front positive components. Its higher dispersion gives the front cluster a chromatic balancing degree of freedom. This interpretation follows the sign and dispersion distribution rather than a claim of exact aberration allocation.

### L3 — Positive Meniscus

nd = 1.55963, νd = 61.2. Glass: Unmatched crown coordinates. f = +84.5266 mm.

L3 supplies positive power immediately before the long separating air gap. The very small 0.096 mm axial air gap before it is retained literally; edge separation depends on the signed curvatures and is not equivalent to that vertex gap.

### L4 — Positive Meniscus

nd = 1.80518, νd = 25.4. Glass: Unmatched dense-flint coordinates. f = +99.9921 mm.

This rear positive element has the same printed index and Abbe number as L2, but opposite power. The patent discusses the low Abbe number of the fourth element in connection with the relatively short separation of the final pair and chromatic correction.

### L5 — Negative Meniscus

nd = 1.80610, νd = 40.9. Glass: Unmatched high-index coordinates. f = −49.0506 mm.

The final negative element completes the rear pair. The patent's discussion of Petzval sum and fifth-element refractive index provides context for this high-index choice. The patent specifically distinguishes the first example's correction strategy from those of the later examples; their favorable results should not be transferred to this prescription.

## Glass Identification and Selection

The source prints n/ν values without an explicit spectral subscript in the prescription table; Figure 2 labels d- and g-line chromatic curves. The model therefore treats the printed coordinates as an inferred d-line reference, with the limitation recorded per element. No supplier glass, measured melt, partial dispersion, or independent spectral indices are invented.

All five elements are reported as estimated by the native spectral-data assessment. C/d/F tracing is modeled dispersion derived from the source n/ν coordinates, treated as nd/νd by the stated convention inference. The F−C index span follows (nd−1)/νd; allocation of the C and F indices uses the engine's fitted normal-line partial-dispersion approximation. Neither those modeled C/F indices nor a catalog glass or partial-dispersion identity has been independently verified for these elements.

Chromatic tracing based on these coordinates is an Abbe approximation. It cannot establish apochromatism or reproduce secondary spectrum with factory precision. Any future glass equivalence requires separate documented evidence.

## Focus Mechanism

Only static infinity geometry is modeled. The manufacturer's 1.2 m minimum focus is retained as descriptive metadata, not as evidence for a focus trajectory. The model contains no focus keyframes or moving gaps; varying a focus control cannot be presented as a validated near-focus simulation.

## Image Plane and Source Residuals

A literal first-order calculation gives 99.23454465 mm native EFL, versus the printed 100 mm. Computed native back focal length is 35.20776217 mm, versus the printed final gap of 35.52 mm. At 1.2 scale, these become 119.08145358 mm EFL and 42.24931460 mm computed BFL, while the literal final gap remains 42.624 mm.

The model preserves the literal image plane at z = 106.776 mm relative to the first vertex. The 0.37468540 mm difference between computed paraxial BFL and the literal image gap remains visible. No radius, glass coordinate, thickness or image plane has been retuned to close the residual. A separately labeled best-focus analysis may help diagnose sensitivity but must never replace the authored source plane.

## Validation Status and Limits

The source archive hash, ZIP CRC and all nine payload hashes have been rechecked locally. The source rows were inspected against the retained patent pixels, including the repeated claim table.

The native model passes the unchanged geometry validator. Production-render diagnostics report zero hidden trim on all ten refracting faces. The derived entrance-pupil semidiameter is 21.26454528 mm and iris semidiameter is 17.18791455 mm, yielding paraxial f/2.8. The authored static geometry is identical at both focus-control endpoints. Seven representative axial rays, including 99% pupil radius, reach the literal source plane.

At f/2.8, 32-cell sampling estimates throughput of 100%, 97.04%, 85.22% and 70.94% at 0°, 5.1°, 7.65° and 10.2°. These samples report no failed or unaimed rays. This is geometric throughput, not measured illumination of a retail lens.

The sensitivity study retains the original geometry and separately tests inferred iris offsets of 3, 5 and 7 mm after surface 6, with clear-radius factors 0.95, 1 and 1.05. The six nominal/reduced-cap cases pass unchanged geometry checks. Their edge throughput spans 62.05% to 72.77% at 24-cell sampling; axial throughput remains 100%. All three enlarged-cap cases fail the default gap-sag criterion at surfaces 2–3: 3.52 mm combined sag exceeds the permitted 3.445 mm of the 3.828 mm gap. These failures are retained, not overridden. The baseline caps and iris have not been changed after image-performance analysis.

Diffraction MTF was evaluated at 10, 20 and 40 lp/mm with a 64-cell maximum grid at center, half and full source field. At the literal source plane, approximate C/d/F results converge through 40 lp/mm at all three fields. Reference-wavelength center and half-field converge through 40 lp/mm; the full-field reference result converges only through 20 lp/mm at this grid cap. That original 64-cell result is retained as explicitly unconverged, with a maximum inter-grid change of 0.01110. A subsequent reference-edge-only refinement to 128 cells converges through 40 lp/mm, with maximum change 0.002009. No tolerance was changed.

The engine independently identifies the authored image plane as inconsistent with paraxial focus by −0.37468540 mm. Separate best-axial diagnostics apply approximately −0.45643 mm at the reference wavelength and −0.45589 mm for C/d/F. Their three fields converge through 40 lp/mm, but these diagnostic refocused results are not the source-plane results and do not alter the prescription. The large difference in axial performance is a warning against presenting this reconstruction as a factory performance prediction.

The bounded native checks do not replace repository-wide integration verification. Full corpus tests, typecheck, lint and production build remain pending an exclusive execution slot. The stopped-down geometric sweep covers all eight marked stops from f/2.8 to f/32 at center, half and full source field. Edge throughput rises to 84.73% at f/4, 97.29% at f/5.6 and 100% from f/8 onward; all samples report zero failed or unaimed rays. Every stop preserves the source plane and shared pupil/iris rule. The shared aperture audit independently finds f/2.799999998, limited by the inferred stop rather than a glass rim. No commit, publication or deployment has occurred.
