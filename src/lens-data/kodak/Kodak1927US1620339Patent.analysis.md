# Frederick–Wood Kodak projection objective, US1620339 (1927)

Qualified hidden patent-only reciprocal-infinity reference. No production lens identity or actual projector conjugate claimed. Not a freshly discovered patent family or deployed model.

## Primary source and visual audit
https://patentimages.storage.googleapis.com/9d/5b/2b/b0dc4ec36ae7d6/US1620339.pdf
Inventors Charles W. Frederick and Donald L. Wood; assignee Eastman Kodak Company. Filed May 20, 1926, granted March 8, 1927. Original three-page PDF retained. Drawing and printed tables on pages 1–2 visually read. Light in this model travels from the front cemented pair toward the film-gate side (reciprocal to projection). Drawing and claims establish signed radii +82.8, −69.2, −601.9, +40.7, +220.7 mm. Axial intervals 9.4, 3.8, 96.7 air, 8.0 mm; three elements, two groups. nD 1.523, 1.617, 1.523; source nG 1.534, 1.639, 1.534; source dispersive ratios 59.0, 36.4, 59.0. Native nD/V dispersion is an approximation, not a guaranteed reconstruction of exact printed nG. Exact G indices are preserved and independently traced paraxially.

## Explicit modeling assumptions
The source states nominal 100mm EFL, f/2.5 and 31.3mm BFD. Calculated D BFD31.408229 is used, not fitted to printed31.3. No radius, index, glass thickness or group gap changed. Estimated iris is 1mm in front of the first vertex and all glass semi-diameters are 22mm; patent does not locate an iris or give clear diameters. Native nominal f/2.5 sets pupil radius19.996702mm. These estimates are for a controlled reference, not historical construction evidence. The flat iris adds no power. No gap-sag override.

An actual projector has a finite film-to-screen conjugate; the source gives no screen distance, magnification, film size or usable field. This file deliberately provides only the supported reciprocal infinity reference, and does not silently invent a finite projector configuration. The calculated rear image plane is not a housing, flange or verified gate dimension. Image-quality/coverage claims cannot be inferred from this file. Visible=false.

## Fresh validation
Independent reduced-angle matrices: D EFL99.9835085989mm, BFD31.4082292221mm; front cemented pair EFL167.1108210794mm, near printed167.0. Exact source G calculation: EFL99.1842798471mm, BFD30.9707457792mm. Independent exact Snell axial trace near axis reproduces BFD31.4082292213mm; outer nominal pupil longitudinal spherical aberration −0.189861mm relative to D paraxial plane.

1,001 radial samples per adjacent surface pair over 0–22mm have positive physical separations, minimum glass edge2.640890mm, with 1mm minimum front-iris clearance. Native schema validation gives no errors, zero significant render trims, and scoped TypeScript check passes. Native ray sample transmission: 201/201 axial including full nominal pupil; 9/9 at5°,5/9 at10°,0/9 at15°. Off-axis figures are diagnostic sampled-ray counts, not an image-circle guarantee. No optics fitted to improve transmission. All validation outputs retained.

Full application regression, latest-main integration compatibility, compiled-viewer/browser QA, exhaustive aperture/field/MTF convergence and actual finite projection validation remain outstanding integration work. Validation engine inherited from g11_reserve, pinned historical engine; the fresh checks above rerun for this model, not inherited success claims.

## Dedup and reproducibility
Authenticated main read on November17 remains 68cec1ee298be6353c61a0dfd5529024046e332b. Reused its verified complete eight-file delta and checked blob hashes. Read all 1,140 base model bodies, 32 original archive bodies representing25 unique models, all11 later trios/33 models, and eight delta bodies:1,213 full source bodies. No exact patent match or five-nonflat-radius normalized fingerprint at0.6% tolerance (including whole sign reversal). This does not claim universal patent-family dedup. US1620337 Frederick–Altman is a different design.

Reproduce: python analyze.py; python generate.py; python geometry.py; python ray_screen.py. generate.py uses the retained workspace metadata template tenth_interwar/metadata-template.json; a self-contained copy is included as metadata-template.json. Use the archived lens data if applying elsewhere. For native checks, use inherited local g11_reserve/engine or the pinned engine source and dependencies, copy the lens to src/lens-data/kodak, copy validate.mjs to engine root, then run node --import ./scripts/ts-js-specifier-hook-register.mjs validate.mjs. Scoped tsc: --noEmit --strict --skipLibCheck --target ES2022 --module nodenext --moduleResolution nodenext src/lens-data/kodak/Kodak1927US1620339Patent.data.ts. No external data changed or user delivery performed.
