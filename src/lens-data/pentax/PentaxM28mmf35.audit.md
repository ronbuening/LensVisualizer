# Pentax-M 28mm f/3.5 qualified model audit

2026-11-09. Baseline main 9d121be76e14bc5098256ee78cd0a7545a1acf11. Local-only; no commit, push, PR, merge, publication or deployment.

Primary PDF cover, physical pages 3, 5 and 6 were inspected as actual pixels. Table II and Claim 2 agree numerically. Source prose field 75° and figure half-field 37.6° differ by rounding. All 12 radii and 11 physical thickness/gap values are scaled exactly by 0.28; glass coordinates remain unchanged. Printed final BFD remains 36.43164 mm. The inserted flat stop splits d6 into zero and 2.9568 mm; total optical gap is unchanged.

All physical semi-diameters remain half the secondary diameter array: [17.415, 17.415, 14.245, 9.46, 7.42, 7.975, 5.975, 7.74, 6.7, 6.84, 6.805, 7.16] mm. These are inferred clear apertures, not primary dimensions. The secondary stop diameter 10.938 mm is not authored; the nominal-f/3.5 iris rule derives the runtime stop. All default geometry checks pass and every element has exactly zero hidden trim at 11 sampled control positions. No gap-sag override is needed.

The fixed infinity geometry has no focus movement. No close-focus law is invented. closeFocusM=1 is an inactive schema compatibility placeholder, not a product specification; modeledFocusDistanceAt returns null and the audit checks all states remain identical.

A broad scale-normalized radius/index fingerprint was compared against 1,095 other baseline data files, deliberately ignoring thickness so even looser duplicates would be caught. No matching candidates. Exact primary round-trip, independent paraxial verification, axial aperture audit and full pupil center/mid/edge diagnostics are in the reproducibility package. Reference-wavelength MTF at the source plane and best axial focus are saved separately. nd/νd dispersion is not secondary-spectrum certification.

The section visualization is generated from engine production geometry and visually checked; it is not a browser UI pass. Browser smoke testing is unavailable in the current environment. Focused tests and isolated build logs are retained; no aggregate-suite pass is implied by focused checks.
