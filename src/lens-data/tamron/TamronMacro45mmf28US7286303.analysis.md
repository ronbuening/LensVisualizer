## Patent Reference and Design Identification

**Patent:** US 7,286,303 B2  
**Filed:** June 21, 2005  
**Granted:** October 23, 2007  
**Inventors:** Akio Arakawa; Yuichi Muramatsu  
**Assignee:** Tamron Co., Ltd.  
**Title:** Macro lens  
**Example details:** Tables 1–2, Fig. 1; application US 2006/0285230 A1 paragraphs 0045–0048. No scaling.

This is the sole complete numerical design, not an identified retail Tamron lens. The source specifies 45.3 mm, F2.8 and image height 21.633 mm. These values do not establish a production mount, manufacturing date, measured coverage, or retail association. No mount is assigned.

Grant physical pages 7–8 contain the prescription. The corresponding application physical page 8 independently prints the same rows and identifies the d and g wavelengths as 587.56 and 435.84 nm. The grant truncates these wavelengths. Both sources are retained, rather than silently correcting the grant. The grant claim also calls the first object's face concave, unlike the positive radius in Table 1, the description, Fig. 1, and application claim. The numerical table governs this model.

## Optical Architecture

Nine spherical glass elements form eight air-separated groups. The first seven elements form a modified Gaussian front assembly; the remaining negative meniscus and positive element form the rear assembly. L5 and L6 are cemented at surface 12. The aperture is explicitly surface 10, four millimetres after surface 9 and four millimetres before surface 11, and moves with the front assembly.

The printed surface 1 is flat, followed by 3 mm and a blank material column. Fig. 1 shows a flat reference outline before the first glass surface 2. Its mechanical function is not identified. It is treated as an air reference and omitted from the refracting train, without creating an unsupported glass plate. Source surface labels 2–19 are retained, with S10 named STO in the model.

No aspherical coefficients, cover glass, camera plate, or stabilization mechanism are specified.

## Element-by-Element Analysis

### L1: Negative meniscus

nd = 1.69680, νd = 55.5. Glass: unmatched patent material.

The positive object-side radius and smaller positive image-side radius form the negative front element. The patent attributes a diverging action and retention of back focus to it. The claim wording conflict does not change the tabulated curvature.

### L2: Positive meniscus

nd = 1.75520, νd = 27.5. Glass: unmatched patent material.

This positive element follows the negative front element. The patent describes their combination as compensating distortion changes at close range. The 2 mm axial air gap is retained; the figure's peripheral contact is not taken as a measured clear aperture.

### L3: Biconvex positive

nd = 1.72000, νd = 50.3. Glass: unmatched patent material.

The strong front and weak rear curvatures supply positive power. The patent relates its position to symmetry around the stop and coma compensation. No quantitative aberration claim is inferred from this qualitative description.

### L4: Negative meniscus

nd = 1.62004, νd = 36.3. Glass: unmatched patent material.

Its strongly curved rear face borders the stop space. Its power participates with L5 in the patent's specified negative-element balance.

### L5–L6: Cemented negative-positive pair

L5: nd = 1.71736, νd = 29.5. Glass: unmatched patent material.  
L6: nd = 1.77250, νd = 49.6. Glass: unmatched patent material.

L5 has a concave front facing the aperture; L6 has a strongly convex rear. The printed common interface is surface 12, with no added air or invented adhesive thickness. The contrasting Abbe values support a chromatic-balancing interpretation, but do not establish secondary-spectrum performance.

### L7: Biconvex positive

nd = 1.72000, νd = 50.3. Glass: unmatched patent material.

The last front-assembly element has a weak front and stronger rear surface. Its rear surface precedes variable spacing D15. This is the floating separation, not an adjustable glass thickness.

### L8: Negative meniscus

nd = 1.72000, νd = 50.3. Glass: unmatched patent material.

This is the first rear-assembly element. The patent describes its negative power as weaker than L1 and its object-facing surface as convex.

### L9: Biconvex positive

nd = 1.54072, νd = 47.2. Glass: unmatched patent material.

This final positive element completes the rear assembly. The last surface's distance to the image is D19, preserved at both printed states.

## Glass Identification and Selection

All nine materials retain the printed nd and νd values with d-line interpretation supported by the application. No exact vendor or catalogue glass is established. No nC, nF, ng or partial dispersion is supplied. The materials remain explicitly unmatched instead of allowing an approximate catalogue identification to replace source numbers. A reference-wavelength analysis is distinct from broadband qualification; an Abbe approximation is not measured dispersion or evidence of apochromatic performance.

## Focus Mechanism

The source gives two discrete states: infinity and equimagnification. D15 changes from 0.669 to 21.832 mm; D19 changes from 42.605 to 63.767 mm. With the image plane fixed, the rear assembly moves 21.162 mm objectward and the front assembly, including the stop, moves 42.325 mm objectward. No continuous cam law or drive mechanism is disclosed. Any intermediate slider interpolation is a modeling convenience, not a third source state.

An independent reduced-angle matrix calculation gives a near object plane 60.805980 mm before first glass S2, or 57.805980 mm before source reference S1. The corresponding object-to-image distance is 184.404980 mm and magnification is −1.000001265. These are calculated paraxial conjugates, not a printed working distance, physical subject clearance, or a measured minimum-focus specification. The source-certified finite-MTF conjugate field is deliberately not populated with a derived distance.

## Verification Status and Aperture Limits

This remains an unfinished integration draft. Native source-row, two-endpoint geometry, infinity aperture and infinity reference-MTF checks have completed. The literal infinity EFL is 45.300058 mm. Its paraxial focus is 0.000437 mm behind the printed image plane. Near-state EFL is 44.308478 mm. No source radii, thicknesses, or indices were tuned to remove the residual.

The source does not give measured rim radii or iris diameter. The authored surface caps are initial inferred geometry candidates. Static spherical edge and gap screening uses the default 90% gap-sag allowance; no override has been applied. Infinity native checking finds F2.8 iris-limited rather than rim-limited, with no hidden rendering trim at either endpoint. Iris-to-glass clearances are 2.379739 mm in front and 2.129209 mm behind. These inferred caps are not measured rims; off-axis clipping remains part of the model. F2.8 is the printed nominal infinity aperture, not a demonstrated finite-conjugate effective f-number.

Infinity reference-wavelength MTF was sampled at source image heights 0, 10.8165 and 21.633 mm. The last maps to a calculated 26.019515° angle, not a printed source angle or a certified camera format corner. Diffraction results at the printed source plane and separate best-axial plane converge through 40 lp/mm with a maximum grid of 128. Source-plane geometric edge sampling initially converged only through 30 lp/mm at 128; a preserved additional 256-grid result converges through 40 lp/mm. Other geometric fields converge through 40 lp/mm. Numerical convergence does not establish real-lens accuracy.

The exact edge-height diffraction sample at the printed plane contains 7,680 valid and 5,212 blocked rays, with zero failed, unaimed or unresolved rays. It is vignetted, not a claim of an unobstructed full pupil. Full integration and guarded installation remain pending.

The finite endpoint passes geometry and source-spacing readback, but native MTF explicitly returns finite-conjugate-unavailable. The source gives no printed object distance. The calculated distance is not promoted to source-certified finite focus; no finite MTF or effective aperture qualification is claimed. Broadband MTF was not run because exact dispersion is unavailable.

## Sources

- [US7286303B2 grant](https://patents.google.com/patent/US7286303B2/en), Tables 1–2, Fig. 1 and claim 1.
- [US20060285230A1 application](https://patents.google.com/patent/US20060285230A1/en), paragraphs 0045–0048 and claim 1.
