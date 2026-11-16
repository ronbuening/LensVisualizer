# Vivitar 28mm f/2 Compact — representative Table 2 checkpoint

This experimental prescription is US4258980 Table2 at exactly28× scale, not a verified production prescription. The manufacturer's brochure confirms eight elements/eight groups and a75° field; the patent gives72°. The brochure28/f2 heading conflicts with its f2.8 aperture-range row. These differences remain explicit.

All radii, axial thicknesses, glass indices/Abbe numbers and inter-element gaps remain literal. Original Claim6 corroborates S1=+0.007 despite a scan mark in Table2. T1=.154 and R10=-.690 are visual readings, not erroneous OCR. Infinity only; no retail close-focus mechanism claimed.

Clear apertures and stop position are inferred for this Table2 model. Figure1 is schematic/common to several examples. Its rear-vertex/image-plane separation, paired with Table2 BFL38.08mm, gives a provisional scale. Geometric constraints and the stated f/2 axial ray further constrain these estimates. They are not factory measurements.

## User-authorized derived image plane

The source rear gap is 38.080000 mm. This file uses **38.193740656 mm**, a +0.113740656 mm image-plane shift, explicitly authorized by Ron on November 15. All radii, glass, thicknesses, internal gaps, stop and inferred caps are unchanged. This is a derived infinity plane, not a corrected patent transcription or known factory plane. The literal checkpoint is retained in source/held.

Criterion: minimize area-weighted on-axis geometric RMS radius at f/2 and the d line over the actual unblocked circular entrance pupil. Native exact tracing finds admitted radius 6.462283568 mm. One hundred equal-area ring midpoint samples give the selected shift; 1,000 samples give +0.113730146 mm, only 0.000010510 mm different. A separate exact sphere/vector-Snell implementation reproduces the 1,000-ring optimum to 1.5e-14 mm. Explicit terminal-point/direction propagation was used to reach the image plane; raw terminal-surface y was not treated as image intercept.

Original/selected geometric RMS: 19.256/3.393 micrometres at the 100-ring sampling. Moving instead to the paraxial focus (+0.247275 mm) worsens wide-open RMS to 22.511 micrometres. The selected fixed plane is aperture- and wavelength-dependent; stopping down does not automatically refocus it. The engine's paraxial-plane diagnostic therefore remains about +0.133534 mm versus its 0.047005 mm threshold. That is disclosed, not suppressed: finite-aperture best balance is not paraxial zero.

## Native checks and optical limits

Native surface/rim geometry passes with the original inferred caps and default allowance. Axial aperture is f/1.999999998, iris-limited. The full-frame corner chief reaches 21.64995 mm at approximately 38.2697 degrees half-field, without rim clips. Chief coverage does not imply good edge transmission or contrast.

Fresh reference-wavelength geometric and diffraction MTF converge within 0.01 through 40 lp/mm at on-axis, half, three-quarter and full-frame image height on each of the literal, paraxial and selected planes (24 cells). Two additional cells at the exact patent 36-degree half-field converge. Up to a 256 pupil grid was required; earlier 32-grid off-axis nonconvergence was not treated as a pass.

At the selected plane, d-line diffraction MTF at 20 lp/mm (sagittal/tangential) is 0.930/0.930 on axis, 0.546/0.571 at half image height, 0.490/0.685 at three-quarter height, and only 0.025/0.629 at the 21.65 mm corner. At the patent 36-degree half-field it is 0.175/0.687. These are computed values of the inferred model, not measured factory performance. Numerical convergence does not make the very weak sagittal corner good.

A separate 128-grid exit-pupil sample estimates unvignetted fractions of 74.57% at 18 degrees, 20.28% at the patent 36-degree half-field, and 12.89% at the full-frame corner. These fractions are not relative illumination, radiometric throughput, or the proportion of stop-grid rays in the MTF calculation. No failed or unaimed samples were reported for that vignetting check. Clear apertures remain uncertain schematic inferences.

## Handoff scope

One qualified representative model with an explicitly derived f/2 infinity plane, not a factory identification. Source geometry and severe peripheral limitations remain visible. Full application regression, current-main reconciliation, polychromatic validation and compiled-viewer/browser QA are deferred to integration, not claimed passed. The data file should not be marketed as a faithful production prescription or uniformly sharp model.

Sources: https://patents.google.com/patent/US4258980 ; https://cameramanuals.org/lenses/vivitar_products.pdf
