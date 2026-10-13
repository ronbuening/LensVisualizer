# Canon EF 500mm f/4 L IS USM — patent audit

## 2026-09-25 — MTF image-plane census

Source: local `patents/US6115188.pdf`, Numerical Example 24, PDF p.79,
columns 33–34 (the page is image-only despite surrounding searchable pages).
Visually checked every R3–R29 radius, thickness and index, all 15 powered-element
Abbe numbers, the infinity D12=20.52 / D15=93.55 state, and the original stop.
All match. No dimensional scaling, aspheres or source line indices are present.
The PDF's correction certificate does not amend Example 24.

**Cause: folded rear plate plus source self-inconsistency.** Source R30/R31 FL is
2.20 mm / 1.516330 / 64.1 after D29=30.00 mm. Restored it to `rearPlates`;
D31=31.34 and D32=38.94 sum to the physical 70.28 mm trailing gap across inactive FC.
No inferred glass identity was added. Front plane HG (5.00 mm, same coordinate) is
outside the rear-plate scope and has no infinity power; its existing finite-object
normalization is retained. Close focus is a declared reconstruction, not used here.

Independent reduced-angle propagation yields EFL 491.356789 mm (source 490.56),
air BFL 102.401315 mm, physical BFL 103.150443 mm. Source physical image distance is
30+2.20+31.34+38.94=102.48 mm. The old fold was 101.730871512 mm. No single supported
misprint explains both residuals. Keep published values; do not fit a new rear gap.
Runtime offset **+0.670443 → +0.670443 mm**; Section E row deleted as documented.
The filter restoration changes physical image placement and exact tracing; changelog added.
Validation: focused buildLens/MTF check; full corpus gates at the ten-lens checkpoint.

## 2026-10-04 — Drop-in filter drawn as an element

- The rear drop-in filter plate FL moved out of `rearPlates` into the drawn prescription: surfaces 30–31 and element
  16 (`Plane-Parallel Plate`), with the same thickness, index and gaps. The lens is computed with the filter in place
  and a teleconverter mounts behind it, so it is part of the lens rather than a camera-side plate.
- The source lists no clear aperture for the plate. Its semi-diameter, 17.5 mm, is a ray-trace estimate: the largest
  height on the plate of any ray that reaches the 135 format or the diagram's off-axis field at infinity, mid and
  close focus (16.53 mm), plus 5%, rounded up to 0.5 mm. Not figure-audited.
- Before/after check: EFL, entrance pupil, stop radius, image plane, analysis half-field and the traced axial,
  mid-field and corner bundles are unchanged, and `npm run audit:field-coverage` still reports 100% of the corner. The
  plate now clips the chief ray at 3.77° (the half-field was 3.85°, set by another rim); the format corner is 2.52°,
  so coverage is unaffected, and the diagram's off-axis field narrows from 2.31° to 2.26°.
- Glass: the filter is labelled `S-BSL7 (OHARA coordinate match; supplier unconfirmed)`. Example 24 prints nd 1.516330 /
  νd 64.1, Ohara S-BSL7's coordinates, and the files for Examples 1 and 25 of the same patent already carry that label
  for the same filter. The plate previously had no glass label and traced on the Abbe-number estimate.
