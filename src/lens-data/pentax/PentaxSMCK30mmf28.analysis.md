## Patent Reference and Design Identification

**Patent:** US 3,975,091 A
**Title:** Wide Angle Photographic Lens
**Filed:** April 21, 1975
**Published:** August 17, 1976
**Inventor:** Yasuo Takahashi
**Assignee:** Asahi Kogaku Kogyo Kabushiki Kaisha
**Example details:** Table 2 and Figures 3–4; whole prescription at a nominal 0.3 scale.

This hidden draft represents Example 2 associated with the original SMC Pentax 30mm f/2.8, not a factory-exact reconstruction. Evidence converges as follows:

1. The [original patent](https://patentimages.storage.googleapis.com/d0/7b/71/adf92aec7e20f3/US3975091.pdf) supplies seven separate spherical elements, f/2.8, and a 36° half-field in Figure 4.
2. The [Asahi Pentax maker brochure](https://www.cameramanuals.org/pentax_pdf/Asahi_Pentax_Lenses.pdf), PDF page 4, names the 30mm f/2.8 beside a seven-singlet optical section. Its rear meniscus supports Example 2 rather than Example 1's biconvex rear element.
3. The same brochure, PDF page 11, lists seven elements in seven groups and a 72° full field. The [specialist historical survey](https://zeissikonveb.de/start/objektive/sonstige_objektive/retrofokus.html) independently associates the German patent family with this product; that is secondary identification evidence, not a factory build sheet.

The nominal 100-unit prescription is uniformly multiplied by 0.3; no radius or gap is adjusted to force an exact 30mm result. The literal paraxial replay gives 29.99683mm EFL. The source's coarse back-focus ratio 1.24F becomes a fixed 37.2mm image gap, versus a computed 37.25501mm. The approximately 0.055mm residual is retained without refocusing; coarse source rounding is plausible, not established as a correction.

## Optical Architecture

Seven air-spaced singlets form a retrofocus wide-angle lens. The positive first meniscus precedes two negative menisci; a positive middle element and a negative element are followed by two positive rear menisci. The extended back focus is part of the patent's stated architecture, not an added mechanical gap.

The prescription gives no numerical clear apertures or unambiguous iris coordinate. This draft uses conservative rim estimates from Figure 3 and an explicitly inferred iris at the midpoint of the L3–L4 air gap. The iris is not claimed to be marked in the source. Its scaled gap split is 3.1335mm on either side. Schematic rim uncertainty is approximately 0.35mm from a three-pixel reading, with additional unquantified drawing distortion. These choices were frozen before tracing and are not factory tolerances.

## Element-by-Element Commentary

- **L1:** Positive meniscus, convex toward the object; first component of the retrofocus front assembly.
- **L2:** Negative meniscus convex toward the object.
- **L3:** A second negative front meniscus, followed by the central air separation.
- **L4:** Positive biconvex middle element.
- **L5:** Negative biconcave element.
- **L6:** Positive meniscus convex toward the image.
- **L7:** Positive rear meniscus convex toward the image; its topology distinguishes this example from Example 1.

These are source-grounded forms and power signs. No unsupported allocation of individual aberration corrections or production glass trade names is asserted.

## Glass and Material Choices

The source explicitly defines refractive index at the **sodium d-line**. Every element therefore uses native sodium-D support, not a silent helium-d substitution. The seven literal index/Abbe pairs are 1.54869/45.6, 1.51633/64.1, 1.48749/70.1, 1.80610/40.8, 1.80518/25.4, 1.65160/58.6, and 1.65160/58.6.

These describe first-order dispersion information, not exact commercial melts. Partial dispersion and coating data are absent; spectral calculations based on the engine's n/V representation should not be presented as measured factory chromatic performance. In particular, n/V alone does not establish a unique modern glass replacement.

## Focus Mechanism and Operating States

Only the source infinity prescription is modeled. The supported static infinity sentinel is used; there is no reconstructed continuous focus law. The maker's 0.30m minimum focus is a retail specification, not authorization to invent finite-conjugate element movement. The source-derived final image gap stays at 37.2mm rather than the independently computed paraxial best-focus distance. No floating groups, stabilization, or zoom mechanism are claimed.

## Aspherical Surfaces and Validation Limits

The transcribed example is spherical; no aspheric coefficients are omitted or synthesized. The complete Table 2 radii, thicknesses, air gaps, indices and Abbe values are retained under uniform scaling. Aperture and stop uncertainty remain explicit modeling qualifications.

This is a hidden research draft. Focused syntax, native-construction and ray diagnostics are recorded in the companion audit; they are not full corpus integration, rendered-viewer acceptance, MTF validation, or proof of factory equivalence. Any clipped or unlaunchable field rays remain failures to disclose rather than reasons to enlarge the inferred apertures after the fact.


### Additive R4 face-boundary review
The original v1 assigned the whole L2 mechanical shoulder radius15mm to both faces and failed the native R4 spherical-domain guard. Figure3 independently shows the R4 curved face ending at the bevel near pixels(466,344) and(465,535), axis437. The smaller93pixel extent at0.11691495mm/pixel gives10.8731mm, conservatively rounded down to10.8mm. Only R4 optical semi-diameter changes in v2; R3 retains15mm. This is a schematic optical-face inference with about±0.35mm plus drawing distortion, not a printed factory dimension or ray-fitted cap. All R/d/nV, sourceimageplane and stop remain unchanged, with no override. The failed v1 remains preserved. Fresh bounded results are recorded separately; no further aperture tuning is permitted in this pass.

Fresh v2 strict TypeScript and native construction pass without overrides. Bounded25-pupil-plus-chief samples: axis26pass;18°19pass/7clip;27°15pass/11clip;36°9pass/17clip. At36° the chief itself clips at runtime surface index12 and the bundle adapter returns unavailable. This is a material full-field limitation, not successful edge acceptance; no further caps are tuned. R4_ONLY_CHANGE_RECEIPT.json records exact invariants and native aperture. Full corpus, compiled viewer and MTF remain unrun.
