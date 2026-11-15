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
the L9 item closed in the semi-diameter pass below.)

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
figure appears to draw (closed in the semi-diameter pass below). The Photons to Photos row attributing Example 2 to
the lens was not re-read in this pass (its table is script-loaded).

## 2026-11-09 — Semi-diameter pass against the patent figure

Source: `patents/CN106249387B.pdf`, Fig. 3 on PDF p. 17 (the Example 2 section at infinity; the embedded raster is
150 ppi), measured at 300 dpi. Scale along the axis: the 16 surface vertex crossings fit the Table 3 spacings at
12.275 px/mm (S1→S10 and S10→S17 both 12.27–12.28), each within about 2 px. Across the axis: line centres of the S3
and S13 arcs give 12.43 and 12.39 px/mm, so the drawing is about 1 % taller than wide; rim heights use 12.40 px/mm.
Axis at row 647. Edge readings are line centres, lower side (clean of leaders), checked on the upper side where it
is clean; agreement 0.1 mm or better.

| Element (surfaces) | Before (mm) | Fig. 3 (mm) | After (mm) | Evidence |
| --- | ---: | ---: | ---: | --- |
| L1 (S1–S2) | 21 | 19.6 (lower 19.56, upper 19.5) | 20.3 | Figure and step order to L2; held at the smallest rim within 3 corner points of 21 mm at every state |
| L2 (S3–S4) | 17.859 | 18.7 (where the drawn S3 and S4 arcs meet) | 18.7 | Figure; L1→L2 step 0.85 mm drawn against 3.1 mm before; edge 0.94 mm |
| L3 (S5–S6) | 17.23 | 18.2, rear land at about 16.1 | 17.23 | Kept: 5 % under the figure, at the axial beam (S5 17.22); the drawn land is inside the 16.71 mm beam at S6 |
| L4 (S7–S8) | 16.97 | 17.85 | 16.97 | Kept: 5 % under; raising it closes the S6–S7 gap beyond 0.99 with L3 square |
| L5 / L6 (S10–S11) | 21.652 | 20.9 | 21.652 | Kept: within 4 % |
| L6 rear (S12) | 21.652 | cap about 17.1, land at about 4.9 mm depth to 20.9 | 17.2, rimExtensionSd 21.652 | Figure land; cap held at the axial beam (17.13 mm at the engine stop) |
| L7 / L8 (S13–S14) | 17.216 | 18.6 (lower 18.59, upper 18.51) | 18.6 | Figure (8 %), step order to L3, and the edge L8's land needs |
| L8 rear (S15) | 17.216 | cap about 15.1 (land at about 3.05 mm depth), land to 18.6 | 15.1, rimExtensionSd 18.6 | Figure land; needed for spacing: with L9 at 16.4 a full S15 crosses S16 |
| L9 (S16–S17) | 14.722 | 16.4 (lower 16.41, upper 16.37) | 16.4 | Figure (11 %); edge 0.78 mm |

Both lands are rim extensions on glass/air faces; the S15 land sits 1.42 mm into the 1.5 mm S15–S16 gap at 15.1 mm
(95 %, inside the file's 0.962). S12's land clears L7's front by 1.4 mm. `checks.gapSagFrac` stays 0.962 for S6–S7.

Corner illumination (app vignetting curve, wide open, starting rims → final rims): infinity 28.8 → 29.9 % at 23.5°,
x20 31.5 → 32.5 % at 22.9°, MOD 36.2 → 36.8 % at 21.7°; no field at any of the three printed states loses light
(largest gain +2.8 points, at 8.8° at infinity and 8.6° at x20). Leave-one-out from the final set: L1 back to 21 mm wins 2.5 points
(17.6°, infinity), 2.4 (x20) and 2.7 (MOD); the S12 land costs 0.4–0.5 points at 2.9° only; the S15 land is needed
for spacing (the validator refuses its removal with L9 at 16.4). At 19.6 mm L1 would have cost 5.0 points at
17.6°.

Clearance: at the engine's stop (17.54 mm, real-ray f/1.424) no surface clips the axial beam at any state, and the
on-axis transmission is 100 % at all three printed states. At the nominal real-ray f/1.4 entrance pupil (stop height
17.84 mm), S5, S7 and S8 sit 0.10–0.33 mm under the marginal ray, as before; the engine sizes the stop paraxially,
so these are not limits. Surface audit OK; aperture audit reports no rim limit; image-circle 0 undersized; field
coverage 100 % (23.5° to 21.63 mm). Engine EFL 51.4848 mm, f/1.4, half-field 23.5°, stop 17.5376 mm and the focus
keyframes are unchanged; the engine's tracing half-field rises from 27.9° to 30.4°.

Live check at focus 0, 0.33 and 1 on the local page: the section now shows L2 close to L1's height, the stepped
rear of L6 and of L8, and the larger L9, as Fig. 3 draws them. No maker section drawing was available (see the
deployment validation above); Fig. 3 governs.

Open: Fig. 3 draws L3 and L4 about 1 mm taller than the file and ends L3's rear face in a land at about 16.1 mm;
both conflict with the wide-open axial beam and the S6–S7 gap, so they stay as they are.

## 2026-11-09 — Second review: diagram, labels and movement

Compared: the local page (infinity, x20 slider, closest focus, focus-movement overlay, inspectors) with Fig. 3 (PDF
p. 17, scale re-proved: 12.275 px/mm along the axis from the vertex crossings, 12.40 across from the S3 and S13 arcs),
Table 3–4 and Fig. 4A. The element designations below are now the patent's (L1–L9 became L11, L12, L21, L22,
L31–L35).

| Surface | Before | After | Figure | Verdict |
| --- | ---: | ---: | ---: | --- |
| S12 (L32 rear, land to 21.652) | 17.2 | 18.0 | cap about 17.1 | Raised to the real-object axial beam: from the printed 1036.73 mm and 350.08 mm objects the f/1.4 marginal ray reaches 17.41 and 17.92 mm there (17.13 at infinity); 17.2 clipped the on-axis beam at x20 (98.2 % transmitted with a real object, now 100 %) |

Lands and cuts against `.lens-work/base1115sd`: L11 cut (20.3 against 21) costs 2.5 points at 17.6° (2.4 at x20,
2.7 at the closest state) and is within budget; the S12 land now costs 0.0; the S15 land is needed for spacing (its
removal is refused: air gap 15→16, 1.70 mm against the 1.443 mm allowed at sd 16.4). Final worst loss against the
starting rims: 0.0 points at every field at all three printed states (corner 28.8 → 29.9 %, 31.5 → 32.5 %,
36.2 → 36.8 %). With a real object point the corner (21.6 mm image height) goes 32.1 → 32.9 % at x20 and
41.3 → 41.8 % at the closest state; the on-axis beam there is 87.1 → 91.7 % transmitted, limited by the S15–S16 gap:
the two faces meet at 15.43 mm while the beam needs 15.81 mm at S15, so no physical rims pass the full f/1.4 cone at
that state. Engine EFL 51.485 mm, f/1.4 and half-field 23.5° unchanged.

Labels and tags: `name` and `diagramLabel` now carry Fig. 3's L11–L35, with roles renamed to match; `groups` added as
the patent's GR1 (S1–S4), GR2 (S5–S8) and GR3 (S10–S17); doublet brackets and `cemented` tags renamed L31 / L32
(S10–S12) and L33 / L34 (S13–S15); `focalLengthMm` added to every element (the inspector showed FL = —). Types agree
with the signs of R; no aspheres, none marked; the stop sits between L22 and L31 as Fig. 3 draws S; no `apd` tags,
and neither the patent nor Yongnuo names a special-dispersion glass.

Movement: keyframe 0 is infinity and keyframe 2 the closest state. D(1) runs 35.5194 → 38.0062 → 43.0547 mm in
Table 4's order (INF, x20, MOD), so GR1–GR3 move together 7.535 mm toward the object while the cover glass and the
image plane stay fixed; the movement overlay shows all three groups moving left by 7.54 mm. The slider's close end
reads 48 cm beside the marketed 45 cm (the printed state is 470.4 mm object to image; the engine refocuses the
printed spacing paraxially).

Colour against Fig. 4A (read at 380 px/mm on its own axis ticks): on axis the patent puts the C focus 62 µm behind d
and the g focus 9 µm in front of it (+62 and −9 µm); the model gives +60.9 and +26.4 µm. The C line agrees; the g line is 35 µm behind. Relabelling L32 to SCHOTT F2
(1.62004 / 36.37, θgF 0.5828) and L34 to SCHOTT SF4 (1.75520 / 27.58, θgF 0.6036) gives +62.4 and −9.9 µm. Distortion
at 23.5° is −3.4 % against about −3.3 % plotted. The plotted d-line spherical aberration (about −5 µm at the full
pupil, −46 µm at 0.7) does not match the traced table (−195 and −88 µm); the transcription is exact, so the printed
table is probably rounded from the design that produced the plot.

Open: L32 → F2 and L34 → SF4 are proposed to the coordinator (glass strings are not edited in this pass). Open: Fig. 3
draws L21 and L22 about 1 mm taller than the file (unchanged from the semi-diameter pass).

## 2026-11-09 — L32 and L34 glass against the colour plot

Fig. 4A puts the on-axis C and g foci at +62 and −9 µm from d; with HOYA's lead-free E-F2 (θgF 0.587) on L32 and E-FD4
(0.609) on L34 the model gave +60.9 and +26.4 µm. Both pairs (1.62 / 36.3, 1.7552 / 27.55) equal classic lead flints at
the printed precision, whose partial dispersions are lower: L32 → `F2 (SCHOTT catalog equivalent; production supplier
unspecified)` (1.62004 / 36.37, θgF 0.5828) and L34 → `SF4 (SCHOTT catalog equivalent; production supplier
unspecified)` (1.75520 / 27.58, θgF 0.6036), both confirmed with trylabel. The model then gives +62.4 / −9.9 µm. Lead
dense flints of the same coordinates are also sold by CDGM (ZF6) and OHARA (PBM2, PBH4); the labels name dispersion
equivalents, not the 2016 supplier. Distortion is unchanged (−3.4 % against −3.3 % plotted).

## 2026-11-09 — Rear plate glass

The rear plate (nd / νd as printed) now carries `glass: "H-K9L (CDGM catalog equivalent; production supplier
unspecified)"`, confirmed with trylabel (catalog 1.5168 / 64.20), so it traces on catalog dispersion instead of the
Abbe-number fallback.
