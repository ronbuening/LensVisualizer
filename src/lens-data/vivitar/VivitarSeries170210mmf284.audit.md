# Audit Log — Vivitar Series 1 70-210mm f/2.8-4 VMC

Patent: US 4,758,073, Example 4

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/US4758073.pdf`.
- Example 4 rows confirmed L5 nd = 1.77300, vd = 49.6 and L6 nd = 1.64000, vd = 60.2.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L5 / S7 | `S-LAH65 class (Ohara)` | `S-LAH66 (OHARA)` | Public OHARA catalog row matches the patent nd/vd pair. |
| L6 / S9 | `S-BSM71 (Ohara)` | `S-BSM81 (OHARA)` | Public OHARA catalog row matches the patent nd/vd pair. |

### Analysis sync

- Updated the L5/L6 element descriptions and glass table.

## 2026-06-23 — Vivitar folder patent audit

### Phase 1 — Glass reconciliation

- Reviewed local patent file `patents/US4758073.pdf` against `VivitarSeries170210mmf284.data.ts`.
- Updated L1 from `Dense flint (785/261, SF11 class)` to `785261 — dense flint (SF56A / SF11 class)`, keeping the patent code first so the resolver can use the local SF56A coefficients while still recording the SF11-family comparison.
- Updated L4 and L13 from `S-LAH55 (Ohara)` to `834373 — dense flint (M-NBFD10 catalog match; S-LAH60/LaSF5 class)`. The old S-LAH55 label has a local catalog νd near 42.7, which does not match the patent's 1.834 / 37.3 row; code 834373 is the closer coefficient-backed match.
- Adjusted L4/L13 role text from lanthanum-specific language to high-index dense-flint language.

### Phase 2 — Prescription, SD, APD, and high-index review

- Rechecked Example 4 / Table IV radii, axial spacings, nd/vd rows, and zoom variable gaps. No numeric prescription changes were made.
- Retained the existing corrected wide-end D2 value used by the data file; the patent print is inconsistent with total-track continuity and the existing analysis documents the correction.
- The patent publishes no semi-diameter table. Fig. 4 supports the existing pattern: large front positive group, smaller moving negative groups, and compact rear relay/corrector elements. No SD edits were made.
- The patent publishes no abnormal partial dispersion, dPgF, theta-gF, line-index set, apodization, or gradient-filter data. All elements remain `apd: false`; no APD status was inferred.
- High-index status is supported for L4/L13 834373, L5 S-LAH66, L7/L11 SF6, L12 F5, and L14 SF14. The audit avoids treating L4/L13 as S-LAH55 because that label points at the wrong local dispersion row.

### Phase 3 — Analysis sync

- Updated the L1, L4, and L13 analysis text plus the glass table and palette summary to match the corrected labels.

## 2026-06-23 — SD proportion refinement

- Adjusted the Group G2 SDs for L4-L7 so the two cemented doublets read closer in overall size: S6/S7/S10/S11 were reduced modestly and the S8/S9 pinch was raised from 14.4 mm to 14.45 mm.
- This is a visual/proportional refinement, not a patent-derived SD; US 4,758,073 does not publish semi-diameter data.
- S8/S9 remains intentionally smaller than the surrounding surfaces because the 6.21 mm air gap and opposing strong curvatures leave very little collision margin.
- Verification: `npm run typecheck` and focused `buildLens` / `elementRenderDiagnostics` tests passed; computed S8/S9 sag intrusion remains about 0.045 mm below the default 90%-gap collision allowance.

## 2026-10-08 — Stated on-axis ray at the long end

`npm run audit:aperture -- <file> --raise` lists no surface for this lens and flags "stated ray cannot be traced at some station". This entry records why. Outcome: no value changed. The printed prescription cannot pass the f/4.01 on-axis ray at 203.786 mm whatever the rims are; this is a prescription question, not a rim question.

### The stated ray at each station

Each ray was launched parallel to the axis at the station's entrance-pupil radius (computed EFL / (2 x nominalFno)) and followed with the engine's ghost trace (`traceEngineRay2`, `{ ghost: true }`), infinity focus.

| Station | Stated | EP radius | Result | Nearest rims (ray height of sd) |
|---|---|---:|---|---|
| 72.132 mm | f/2.89 | 12.4574 | reaches the last surface, 25 of 25 hits, no rim below the ray | S18 16.990 of 18.5; STO 15.9182 (this ray sets the fixed iris) |
| 134.911 mm | f/3.49 | 19.3399 | reaches the last surface, 25 of 25 hits, no rim below the ray | S8 13.047 of 14.45; S9 13.067 of 14.45; STO 15.782 of 15.9182 |
| 203.786 mm | f/4.01 | 25.5621 | fails: `noBracket` at surface 9 (index 8) after 8 hits | S1-S7 clear; S8 15.621 against 14.45 |

Tele ray heights on S1-S8: 25.562 / 24.412 / 24.213 / 22.793 / 22.537 / 17.404 / 17.186 / 15.621 against sd 29.0 / 28.0 / 26.0 / 26.0 / 24.5 / 20.0 / 19.0 / 14.45. S8 is the first and only surface below the ray on the part of the path the engine can follow (1.171 mm, 8.1 %).

### Why the trace stops at surface 9

- The ray meets S8 (R 37.576, L5 rear) at height 15.6209, 3.4008 mm behind the S8 vertex, and leaves with slope -0.0147.
- S9 (R -40.656, L6 front) has its vertex 6.210 mm behind the S8 vertex. At 15.62 mm its surface lies 3.1207 mm in front of that vertex, which is 0.31 mm in front of the point where the ray leaves S8. A ray travelling forward from S8 has no intersection with S9, and the engine reports `noBracket`.
- Neither sphere limit is involved: 15.62 mm is far below |R8| = 37.576 and |R9| = 40.656, and the ray does not pass the S9 vertex plane. The two facing concave surfaces have crossed.
- S8 and S9 meet at 15.2592 mm (sags 3.2378 + 2.9722 = 6.2100, the printed gap). Above that height the L5-L6 air space is negative: -0.31 mm at 15.62 mm.
- With every rim ignored, the largest on-axis ray the engine can follow at this station has EP radius 24.924 mm, f/4.11 on the computed EFL 205.008 mm; it passes S8 and S9 at 15.259 mm. With the file's rims the largest ray has EP radius 23.509 mm, f/4.36, limited by S8 at 14.45.
- An independent meridional trace of the same prescription that allows a backward transfer between S8 and S9, as lens-design software does, reproduces the engine to S8 (15.6209), reaches S9 at 15.6255 after a -0.3135 mm transfer, the stop at 15.8236 (inside the 15.9182 fixed iris) and clears every other rim by at least 1.78 mm (S3 24.213 of 26.0). S8/S9 are the only obstacle.
- Other readings of f/4.01 do not escape it. On the printed EFL 203.786 mm the EP radius is 25.410 mm and the ray reaches S8 at 15.535 and S9 at 15.538, still above 15.259. The paraxial marginal heights are larger (16.216 at S8, 16.083 at S9).
- The zoom-iris helper's tele radius 14.8817 mm has the same cause: the engine's per-station stop solve cannot follow the stated ray to the stop and falls back to the paraxial radius.

### Why no rim was raised

- The S8 rim (14.45) does clip first, but raising S8/S9 to the ray (15.63) would put both rims above the 15.2592 mm at which the surfaces meet. The ghost trace ignores rims and still fails, so no rim value lets the stated ray through.
- The validator's cross-gap allowance (90 % of 6.210 mm = 5.589 mm of combined sag) caps the pair at 14.506 mm. A trial build with 14.50 passes and traces f/4.34 at tele; 14.51 is rejected. A 0.05 mm raise would not reach the stated ray, which is the only height the rule raises to, so the pair stays at 14.45.
- The patent prints R8 37.576, the 6.210 gap and R9 -40.656 identically in Table IV (PDF p. 9, col. 7) and in the claim 6 reprint (PDF p. 12, col. 14); the file matches both.

### Figure and rendered section

- FIG. 4 is on PDF p. 3 (Sheet 2 of 4), drawn near the middle station (D1 about 12 mm, D2 about 15 mm, BFL about 51 mm on the page scale) at about 0.81x: 38.2 px/mm at 1200 dpi from S6-S11 = 17.61 mm, 19.3 px/mm at 600 dpi from S1-S5 = 19.4 mm.
- The figure draws L5 and L6 in edge contact: the air lens between S8 and S9 closes to a point about 16.5 mm from the axis (16.8 above, 16.2 below). The printed radii close it at 15.26 mm, 8 % lower, which is inside the drawing's noise. The file's 14.45 is 12 % below the drawn value; the stated ray's 15.63 is 5 % below it. The figure does not ask for a smaller S8/S9 than the ray; the printed radii and gap do.
- Other drawn half-heights: L4-L5 outer rim about 21.2 mm (file S6 20.0, S7 19.0), L6-L7 outer rim about 18.3 mm (file S10/S11 19.0), L1 about 28.0 mm (file S1 29.0).
- The rendered section at 134.911 mm agrees with the figure in element order and proportions: L1-L2 doublet and L3, the two G2 doublets pinched together between S8 and S9, L8, L9, the L10-L11 doublet, stop, L12, L13, L14. One difference in style: the figure gives L5 and L6 square shoulders that touch, the render tapers both from their 19-20 mm outer rims to the 14.45 mm pinch with 0.67 mm of air left at the rim.

### State of the tools

- The raise proposal (`audit:aperture --raise`) lists no surface and carries the flag "stated ray cannot be traced at some station".
- The aperture census (`audit:aperture --all --over=0`) reads 72.13 mm f/2.89 traced f/2.89 (iris); 134.91 mm f/3.49 traced f/3.46 (fixed iris); 203.79 mm f/4.01 traced f/4.36 (rim, surface 8).
- The file builds and validates; field coverage is 100 % of 21.65 mm at all three stations; the image-circle audit reports the lens not undersized.

### Left open

- The tele station cannot trace at its label. For a real f/4.01 ray, with both rims at the 15.63 mm the ray rounds up to, the L5-L6 axial gap would have to be at least 6.53 mm for the surfaces only to touch at the rim, and at least 7.26 mm to keep the validator's 90 % allowance, against the printed 6.210 mm. With the printed gap the ceiling is f/4.11 at edge contact, f/4.34 with the largest rims that validate, and f/4.36 as the file stands.
- Whether to keep the tele station rim-limited at f/4.36 under the printed f/4.01 label, or to state a slower tele value, is a maintainer decision about the label or the prescription. No semi-diameter change can settle it.
- `audit:aperture --raise` will keep flagging this lens for the same reason until that decision is made.
- The `specs` string gives the telephoto field as 12.2°. The 43.27 mm diagonal gives 12.12° on the printed 203.786 mm and 12.05° on the computed 205.008 mm. It is a data value and was left as it stands.

### Second pass

An independent check of this entry on the same day. No semi-diameter or other data value changed in it.

- The data object equals the committed one; the raise proposal run on the committed copy and on the working file gives the same line (no surface, the untraceable flag).
- The engine figures above were recomputed with a separate script and a separate spherical trace typed from Table IV, and agree to the digits printed: EP radii 12.4574 / 19.3399 / 25.5621, S8 at 15.6209 and S9 at 15.6255 after a -0.3135 mm transfer, the meeting height 15.2592, the f/4.11 ceiling at EP radius 24.924, f/4.36 at 23.509 with the file's rims, the 14.506 mm cross-gap cap, and the 14.50 / 14.51 trial builds.
- Table IV (PDF p. 9) and the claim 6 reprint (PDF p. 12) were read again from 300 dpi renders: S8 37.576, 6.210, S9 -40.656 in both.
- FIG. 4 was read again from a 1200 dpi render (the scan itself is 300 dpi): 38.16 px/mm from S6-S11. The S8/S9 air lens closes 15.9 mm from the drawn axis at the inner ink edges on both sides, and at 17.0 mm on the upper side and 16.3 mm on the lower side at the line centres; the first reading of about 16.5 mm lies inside that range. Outer rims read 21.3 mm for L4-L5, 18.3 mm for L6-L7 and about 28 mm for L1. No element is drawn smaller than the stated ray needs, and none was raised, so the 15 % figure test has nothing to object to.
- The rendered section at 134.911 mm and at 203.786 mm was compared with FIG. 4 again: same element order, same relative sizes, the G2 pinch between S8 and S9 in the same place.
- Analysis note, "Aperture Stop": the paragraph said one stop semi-diameter corresponds to f/2.89 at the wide end and f/4.01 at the telephoto end, and named only G1 and G2 ahead of the stop. It now names G3a as well, gives the paraxial reading of the printed column (a 14.9 mm stop gives f/2.90 / 3.48 / 4.01), the fixed iris of 15.92 mm with f/2.89 and f/3.46 traced on it, and the telephoto limit at S8/S9 (15.62 mm needed, surfaces meet at 15.26 mm, f/4.11 ceiling, f/4.36 traced at the 14.45 mm rims).
- Data-file header: the semi-diameter note described every surface as cleared by 8-10 %, which S8/S9 are not. The S8/S9 exception and a NOTE ON APERTURE with the traced f-numbers were added, and the box borders, which did not line up, were aligned at 75 columns.
