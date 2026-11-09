# Pentax-M 28mm f/3.5 qualified model audit

2026-11-09. Baseline main 9d121be76e14bc5098256ee78cd0a7545a1acf11. Local-only; no commit, push, PR, merge, publication or deployment.

Primary PDF cover, physical pages 3, 5 and 6 were inspected as actual pixels. Table II and Claim 2 agree numerically. Source prose field 75° and figure half-field 37.6° differ by rounding. All 12 radii and 11 physical thickness/gap values are scaled exactly by 0.28; glass coordinates remain unchanged. Printed final BFD remains 36.43164 mm. The inserted flat stop splits d6 into zero and 2.9568 mm; total optical gap is unchanged.

All physical semi-diameters remain half the secondary diameter array: [17.415, 17.415, 14.245, 9.46, 7.42, 7.975, 5.975, 7.74, 6.7, 6.84, 6.805, 7.16] mm. These are inferred clear apertures, not primary dimensions. The secondary stop diameter 10.938 mm is not authored; the nominal-f/3.5 iris rule derives the runtime stop. All default geometry checks pass and every element has exactly zero hidden trim at 11 sampled control positions. No gap-sag override is needed.

The fixed infinity geometry has no focus movement. No close-focus law is invented. closeFocusM=1 is an inactive schema compatibility placeholder, not a product specification; modeledFocusDistanceAt returns null and the audit checks all states remain identical.

A broad scale-normalized radius/index fingerprint was compared against 1,095 other baseline data files, deliberately ignoring thickness so even looser duplicates would be caught. No matching candidates. Exact primary round-trip, independent paraxial verification, axial aperture audit and full pupil center/mid/edge diagnostics are in the reproducibility package. Reference-wavelength MTF at the source plane and best axial focus are saved separately. nd/νd dispersion is not secondary-spectrum certification.

The section visualization is generated from engine production geometry and visually checked; it is not a browser UI pass. Browser smoke testing is unavailable in the current environment. Focused tests and isolated build logs are retained; no aggregate-suite pass is implied by focused checks.

## 2026-11-09 — Deployment validation

Independent check of US 3,955,883 Example 2 (Table II and Claim 2, page images): 12 R, 11 d, 6 nd/νd and the back focus
130.113 → 36.432 agree at one scale factor ×0.28. Engine EFL 27.995, f/3.5, half-field 37.6°, total length 78.574;
F1,2 −101.751 (printed −101.729). Different design from the catalog's Pentax-M 28mm f/2.8 (US 4,143,945) and
Super-Takumar 28mm f/3.5 (US 3,506,339). Attribution probable: the M 28/3.5 is 6 elements / 6 groups (the patent's six
singlets), 1977–85, 0.3 m; Example 1 is f/2.8, and PhotonsToPhotos labels Example 2 as this lens. No maker drawing
found. No deployment changes.
Open: rear rims S5–S10 (PhotonsToPhotos) draw wider than Fig. 3 (S8 about 38 % larger), which hides some of the corner
vignetting the figure implies; to be read against the figure in the review pass. `focus.closeFocusM` 1 is a placeholder
(production 0.3 m); name style against the catalog's "PENTAX SMC M 28mm f/2.8"; package wording remains.
