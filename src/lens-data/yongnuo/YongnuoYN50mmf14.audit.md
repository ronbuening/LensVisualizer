# Source and geometry audit

Literal source rows, stop and three physical focus states retained. Rear plate is explicit. Source image plane unchanged. All semi-diameters are preliminary estimates from the inspected patent figure, not printed dimensions; no tracing or performance claim has yet been made (closed: tracing and aperture checks follow below). Nominal f/1.4 sizes the paraxial entrance pupil; physical stop size is inferred.

## Initial native geometry check and inferred-rim refinement

Initial figure estimates failed native geometry checks before aperture tracing. No primary optical values were repaired. The preliminary rims were reduced at the unchanged default gap and edge rules while retaining equal-height connected glass contours. These remain modeling assumptions, not factory dimensions; clipping and vignetting depend on them. Native revalidation is pending (closed: done in the next section).

Surface | Initial inferred sd (mm) | Refined inferred sd (mm)
--- | ---: | ---:
3 | 20 | 17.859
4 | 20 | 17.859
5 | 20 | 17.859
6 | 20 | 17.859
5 | 17.859 | 16.46
6 | 17.859 | 16.46
7 | 20 | 16.46
8 | 20 | 16.46
10 | 22 | 21.652
11 | 22 | 21.652
12 | 22 | 21.652
13 | 20 | 19.548
14 | 20 | 19.548
15 | 20 | 19.548
13 | 19.548 | 14.722
14 | 19.548 | 14.722
15 | 19.548 | 14.722
16 | 18 | 14.722
17 | 18 | 14.722

Closed: the table records two intermediate passes. The clearance step below raised S5–S6 to 17.23, S7–S8 to 16.97
and S13–S15 to 17.216 mm; S3–S4 17.859, S10–S12 21.652 and S16–S17 14.722 mm stand as listed.

## Source-aperture clearance and per-model allowance

Default 90% geometry-valid rims clipped the source f/1.4 beam to f/1.624469. A source-diagram pixel review found square-cut contours rather than positive taper support. A tapered counterfactual needs at least 93.11945%; selected equal-height contours need 96.19396%, rounded upward to per-model gapSagFrac 0.962. Allowances of 90, 93.2 and 95% fail for the selected rims; 96.2% passes. No global thresholds changed; physical gap stays positive. All literal radii/gaps/glasses/pupil/focus positions remain unchanged. Source-model MOD datum corrected to 470.4347 mm while retail 450 mm is stored separately.

Native geometry passes at INF/X20/MOD with zero hidden trim. Aperture is iris-limited f/1.4. Infinity diffraction converges at center/half/95% field at wide open and f/4; finite diffraction not tested. Geometric grid 64 wide-open center/edge are unconverged at INF/X20 and all three fields are unconverged at MOD; f/4 converges throughout. Source-plane residual shifts −0.019985, +0.071764, +0.210551 mm remain disclosed and unchanged.

## 2026-11-09 — Deployment validation

Independent check against CN 106249387 B (pages 10–11): 17 surfaces, the stop, both cemented pairs, D(1) at three
states, both object distances and the plate agree; no aspheres in Example 2. Fig. 3 is to scale and lines up with
the table. Engine EFL 51.485 (printed 51.50), F/1.4, ω 23.5°, TL 112.82; magnification 0.050/0.150 at the printed
distances. Front page: 深圳市永诺摄影器材股份有限公司, inventor Ye Yuanhua, granted 2019-01-29. Attribution: the YN 50mm
f/1.4 (2018, Canon EF and Nikon F) is 9 elements / 7 groups, 0.45 m, 0.15×. Example 1 of the same patent fits the
marketed specs equally well; no maker section drawing was found to separate them.

Deployment change: `focalLengthMm.design` → 51.5 (stated); `catalog.lensMounts` ["canon-ef", "nikon-f"].

Open: the rim table and "revalidation pending" lines above predate the delivered file; L9 is drawn about 16.5 mm
in Fig. 3 against the file's 14.7; wording. (Rim table, pending lines and wording closed in the cleanup pass below;
the L9 item stays open.)

## 2026-11-09 — Cleanup and wording pass

Data file. Header comment rewritten as plain technical English with every fact kept (tables and pages, stop row,
rear plate, misnumbered image row, printed vs derived values, close-state offsets, rim method, the 0.962 gap
allowance and why, the figure readings, the attribution and its Example 1 caveat). `subtitle` "CN 106249387 B —
qualified associated patent model" → "CN 106249387 B, Example 2 — probable match to the 2018 production lens".
`catalog.specs` added: 9 ELEMENTS / 7 GROUPS, DESIGN f = 51.50 mm, DESIGN F/1.4, ALL SPHERICAL. Nine glass labels
"Unidentified patent glass (rounded nd/vd)" → exact catalog rows (|Δnd| ≤ 0.0001, |Δνd| ≤ 0.15, each confirmed to
resolve): L1 and L9 TAFD30, L2 S-LAH65V (OHARA), L3 E-FD8, L4 TAFD37, L5 TAFD55, L6 E-F2, L7 TAC8, L8 E-FD4 (HOYA
unless noted). Roles added to all nine elements with the patent's labels (L11–L35). Focus description rewritten
(three printed states, D(1) travel 7.54 mm, 470.4 mm closest object-to-image against the marketed 0.45 m, paraxial
offsets kept); conjugate sources now cite Table 4, p. 11; gap label d17 → D(1) as printed. `cemented` tags
"L5 / L6" (L5, L6) and "L7 / L8" (L7, L8) added with matching `doublets` brackets over S10–S12 and S13–S15, the two
cemented pairs of Table 3, so the diagram brackets them. Aperture: fStops gain
f/22, `maxFNumber` 22 and `blades` 7 from Yongnuo's product pages (f/1.4–f/22, seven blades). No `apd`: Yongnuo
claims no ED element and no printed pair is ED-class. Printed INF/x20/MOD states, rims, `checks` and optics
unchanged.

Analysis. Bibliographic block completed (application number, A publication, Chinese title, table and figure pages);
product paragraph added (May 2018, Canon EF and Nikon F versions, Yongnuo's specifications, motors); attribution
given as a numbered list with an explicit paragraph that Example 1 fits the marketed specifications equally well
and that Example 2 follows the Photons to Photos attribution. Architecture now gives F12/F and FB/F against Table
10. Element sections carry catalog glasses, focal lengths and roles instead of boilerplate; glass table added.
Removed: the "authorized 97% ceiling", "reproducibility archive", "initial draft" and MTF grid/convergence process
text, pixel-row figure notes and the counterfactual table; their technical content is kept in the new
"Semi-Diameters and Model Limits" section.

Engine before and after: EFL 51.4848 mm, FOPEN 1.4, half-field 23.5°, stop radius 17.5376 mm, BFD 0.9800 mm at
infinity, keyframes 0 / 0.3300 / 1 and close-state BFD −1.5068 / −6.5553 mm, identical. Surface audit OK; aperture
audit reports no rim limit.

Open: Fig. 3 draws L9 at about 16.5 mm against the file's 14.72 mm (and L7 / L8 at about 18.7 against 17.216, L2 at
about 19 against 17.859, L1 at about 19.7 against 21); a larger L9 needs a flat step on L8's rear face, which the
figure appears to draw. The Photons to Photos row attributing Example 2 to the lens was not re-read in this pass
(its table is script-loaded).
