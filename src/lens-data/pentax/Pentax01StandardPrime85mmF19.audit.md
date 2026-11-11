# Hidden representative pilot audit
Source E1 retained exactly from verified_E1.json. No source repair, rescaling, refocus, cap fitting or overrides. All plates retained. Inherited table pixel review and source archive verification are recorded in prior recovered-source handoff; not repeated full source readback this pass.
Fresh: inspected Fig1 at1500px; inferred caps before tracing, strictTS and native construction pass. Initial schema errors (format ID, numeric example ID, missing labels) corrected with no optical changes; initial receipts retained. Initial diagnostic attempted30.8 outside configured24.75 envelope and hit null field geometry; this is harness range misuse, not optical failure. SOURCE_FIELD_DIAGNOSIS runs a separate61.6full/30.8max envelope with identical optics, preserving original data envelope. Counts are26traces including duplicatecenter, not throughput estimates.
No delivery, repository write, PR, package or full acceptance claim. Pending independent caps/source review, full integration/viewer gates and material edge-clipping qualification. (Closed 2026-11-11: source re-read and integration in the deployment validation below; the lens is now shown; rim and corner-vignetting notes carried as Open items in the cleanup section.)

## Deployment validation (2026-11-11)

- Source: US 2012/0268834 A1 (Google Patents PDF), Numerical Embodiment 1, kept as `patents/US20120268834A1.pdf`.
  All 18 rows and 12 aspheric values exact; EFL 8.5007, back focus 0.53, L 31.30 as printed.
- Integration fixes: the camera-side OP (0.55 mm, gap 2.02) and cover glass CG (0.50 mm, gap 0.53) moved from drawn
  elements 9–10 / surfaces 15–18 into `rearPlates`; surface 14 keeps d 4.194. `imageFormat` 1/1.7-inch type (patent
  Y 4.65 mm is that half-diagonal, as on the PENTAX-02 and -06); the `projection` block is dropped so the field comes
  from the format, as on those two. `catalog.lensMounts` ["pentax-q"], `catalog.closeFocusM` 0.2 m.
- Product: Ricoh lists 8 elements / 5 groups with two aspherical elements; the Impress construction drawing matches
  Fig. 1. All nine embodiments share the layout; Embodiment 1 is a fair pick.
- Open for the cleanup pass: name/key ("85mm" reads as 85 mm), element shape types, public wording. (Closed: name and
  key set at integration; types and wording in the cleanup pass below.)

## 2026-11-11 — Cleanup and wording pass

Fields changed in the data file: header comment rewritten as plain facts (source and grant, no scaling, as-printed
prescription, `rearPlates`, dB placement, stop and figure-read semi-diameters, the 30.8° / Y 4.65 mm field against
Ricoh's 58° and 49.5°, infinity-only focus, glass basis). `subtitle` "US20120268834A1 Numerical Embodiment1 qualified
representative with original camera plates" → "US 2012/0268834 A1, Numerical Embodiment 1 — production
correlation". `specs` (three package notes) → 8 ELEMENTS / 5 GROUPS; MARKETED 8.5mm f/1.9; DESIGN f = 8.5 mm;
FNO = 1.9; 3 ASPHERICAL SURFACES / 2 ELEMENTS, in the PENTAX-02 / -06 form. `focus.closeFocusM` written as 1e15 (same
value); `focus.description` replaced with a plain infinity-only sentence naming L8 as the patent's focusing element
and Ricoh's 0.2 m minimum focus. Element `type` from the signs of R (L1 Negative Meniscus; L2, L5, L6 Biconcave
Negative; L3, L4 Biconvex Positive; L7 Biconvex Positive (1× Asph); L8 Biconvex Positive (2× Asph)); a one-line `role`
on each element from ¶0055–¶0062 and ¶0069; `cemented` C1 / C2 / C3 on L2–L7 and matching `doublets`; `groups` GF (+)
surfaces 1–8 and GR (+) surfaces 10–14 as the patent names them. `catalog.focalLengthMm.design` stays 8.5, the
patent's stated f (the Pentax folder mixes stated and traced values; the traced EFL is 8.5007 mm). No `apd` tags: no
maker source marks special-dispersion elements.

Glass relabels (all from "Literal patent nd/vd; no identified melt"; Δ = catalog − printed, d-line):
L1 BSC7 (HOYA) Δnd −2e-6, Δνd 0.00; L2 E-F8 (HOYA) Δnd 0, Δνd +0.02; L3 TAFD30 (HOYA) Δnd +4e-6, Δνd +0.02; L4 TAF1
(HOYA) Δnd 0, Δνd +0.02; L5 E-FL5 (HOYA) Δnd 0, Δνd −0.01; L6 FD140 (HOYA) Δnd −2e-6, Δνd +0.01; L8 M-NBFD130 (HOYA)
Δnd 0, Δνd +0.03 (NBFD13 ties; the moldable row was chosen for the double-aspheric element). L7 1.75501 / 51.2 has no
row within tolerance (nearest TAC6 / S-LAH97, νd 52.32) and stays "Unmatched (nd=1.75501, vd=51.2)". Both rear plates
gain "BSC7 (HOYA)". Hoya rows were preferred where Ohara rows also fit because Pentax was a Hoya company at the 2011
priority date. No catalog-copied nC / nF / ng existed to drop.

Analysis: removed the "hidden, qualified representative" framing, the ray-grid counts, the TypeScript and integration
status passage, the pixel-span log and the plate-as-element table rows; stated that the 30.8° half-field is the real
chief-ray angle at Y = 4.65 mm (traced: 4.649 mm) and that Ricoh's 58° / 49.5° are nominal sensor angles; added the
grant US 8,970,968 B2, the Impress construction-drawing comparison, the glass table, the condition (3) / (4)
chromatic logic, the asphere coefficients with the patent's sag equation, a conditional-expression table (model
1.436 / −1.350 / 24.6 / 40.7) and a short source list.

Engine numbers before and after are identical: EFL 8.500681449, FOPEN 1.900, halfField 32.388°, stop radius 2.43577
mm, BFD 0.5299, total track 31.298 mm. Surface audit OK; aperture audit reports no rim limit and F-number within 3 %.

Open:
- Table 3 prints F1.9 while the aberration plots are labelled F1.93; the model uses F1.9.
- Semi-diameters are read from Fig. 1 and leave the 1/1.7-inch corner beam strongly vignetted at f/1.9 (lower rim ray
  lost at 30.8°); a rim pass against Fig. 1 and the Impress drawing is still due. (Closed: semi-diameter pass below;
  the rims follow the figure and the corner vignetting stays.)
- Near focus to Ricoh's 0.2 m is not modelled; the patent prints no finite-focus spacing.

## 2026-11-11 — Semi-diameter pass against the patent figure

Source: `patents/US20120268834A1.pdf`, page 2 (Sheet 1), Fig. 1, Numerical Embodiment 1 at infinity, a 300 dpi CCITT
raster measured at native resolution. The axis is vertical on the sheet (object at the bottom) and leans about 4.5 px
over the lens; each element was centred on its own left and right edges. Axial scale: the vertex crossings S1 (y 2814)
to S18 (y 533.5) span 2280.5 px for 30.768 mm, 74.12 px/mm, and S1 to S14 gives 74.11 px/mm; every gap from S1 to S18
matches the prescription within 1 px. Lateral scale: circle fits to the S2 cap (R 5.896, both sides, rms 0.6 px) and
the C1 junction S4 (R 7.534, left side) give 73.1–73.5 px/mm; 73.3 px/mm is used. The S10 cap's sag at its end
(30.5 px) also returns its measured end height through R.

| Surface | Before sd | Figure | After | Evidence |
| --- | ---: | ---: | ---: | --- |
| 1 (L1 front) | 5.01 | edge 5.12 | 5.01 | edge 375.5 px; +2.3 %, noise |
| 2 (L1 rear) | 4.03 | cap 4.15, land to 5.12 | 4.03, `rimExtensionSd` 5.01 | cap ends 304/305 px each side (+3.1 %), flat flange to the edge; land costs no light |
| 3–5 (C1) | 4.03 | edge 4.13, square | 4.03 | 302.5 px; +2.4 %, noise |
| 6–8 (C2) | 3.41 | edge 3.49, square | 3.41 | 255.75 px; +2.3 %, noise |
| 10 (L6 front) | 3.32 | cap 2.38, land to 3.41 | 2.5, `rimExtensionSd` 3.32 | cap ends 173.5/175.5 px about the local axis; set to 2.5 by the light rule (below) |
| 11–12 (C3) | 3.32 | edge 3.41, square | 3.32 | 250.25 px; +2.8 %, noise |
| 13–14 (L8) | 4.93 | edge 5.02, square | 4.93 | 368 px; +1.8 %, noise |

All element edges read 1.8–2.8 % above the stored values, in the same order (L1 > L8 > C1 > C2 > C3), so they were kept.
The figure's S10 cap end (2.36–2.38 mm) is 28–29 % under the stored rim. Cutting S10 to 2.4 mm costs 2.9 points at 14.0°
on the app's twelve-field vignetting curve and 3.2 points at 15.4° on a 45-field curve, past the 3-point limit; 2.5 mm
costs at most 0.6 points (14.0°: 87.5 → 86.9 %), so the cap is 2.5 mm with a flat land to the C3 edge (3.32 mm). The
axial marginal ray at f/1.9 crosses S10 at 2.18 mm. Corner illumination at 30.8° stays 28.8 %, and every other field
is unchanged within 0.1 point. The rear plates carry no `sd` and were left alone; the stop is engine-derived.

Engine and audits after the change: EFL 8.500681, FOPEN 1.900, halfField 32.388° and stop radius 2.43577 mm, all as
before. Surface audit OK; aperture audit reports no rim limit; image circle no undersized surface; field coverage 100 %
to 30.8° (4.65 mm). Real-ray clearance at Y 4.65 and 3.835 mm shows no axial clip or blocked chief ray; at 30.8° the
lower rim ray is still lost, as before. The diagram's derived stop housing now follows the 2.5 mm S10 cap (it was
3.32 mm); Fig. 1 draws the stop ticks from about 2.45 to 3.5 mm.

The Impress construction drawing recorded in the deployment validation (8 elements / 5 groups; AL on the rear of L7
and on L8) also shows L1's concave rear face ending in a wide flange and a stepped rim on L6's front; it is a
production drawing, so its proportions were not used.

Open: none for the rims.

## 2026-11-11 — Glass coverage and metadata

- Added HOYA M-TAC60 (vendor AGF formula-1 row, HOYA20260707 catalogue including discontinued glasses) to the catalog.
  L7: `Unmatched (nd=1.75501, vd=51.2)` → `M-TAC60 (HOYA)`, Δnd 0, Δνd −0.04. L7 carries the aspheric surface 12, which
  fits a moulding glass. All eight elements and both plates now trace on catalog curves.
- `aperture.blades` 5, from Ricoh's product page for the 01 Standard Prime.

## 2026-11-11 — Second review: diagram, labels and movement

Compared the local page (infinity, `?el=1`–`8`, `?mv=focus`, `?focus=1`) with Fig. 1 (page 2, 300 dpi native raster) and the
patent text ¶0048–¶0081. The figure readings of the semi-diameter pass were re-checked on the S10 cap and the stop ticks
about the local axis (column 1472.5, 73.3 px/mm): the S10 cap meets its land at 2.38–2.45 mm (circle fit to the cap,
R 6.986, rms 0.55 px; the two sides differ by the axis lean), and the stop ticks run from 2.41 to 3.69 mm, 164 px
(2.21 mm) in front of the S10 vertex against the printed 2.205 mm.

Changes in the data file:

| Field | Before | After | Evidence |
| --- | --- | --- | --- |
| `focalLengthMm`, L1–L8 | missing (inspector "FL = —") | −11.47, −8.96, 6.67, 8.84, −15.12, −4.69, 6.49, 11.04 | each element alone in air, paraxial; matches the analysis table |
| L1 `role` | "Weak negative front element …" | "Negative front element …" | f −11.47 mm is stronger than either cemented pair in GF (C1 +20.0, C2 +18.0 mm); fL1/f −1.35 |
| Header S10 note | "drawn at about 2.36 mm … 2.5 mm, the smallest value that keeps the off-axis light within 3 points" | "drawn at about 2.4 mm … 2.5 mm, within the figure reading, where it costs at most 0.6 points" | 2.41 mm also passes (2.7 points on the app's twelve-field curve, 2.9 on 45 fields), so 2.5 is not the smallest value |

The analysis no longer calls L1 weak, and its glass table spells L7 "M-TAC60 (Hoya)" like the other rows. No rim changed.

Lands and cuts: the S2 land (cap 4.03, land 5.01) and the S10 land (land 3.32) cost nothing (`--noext` leaves every field
unchanged); the S10 cap at 2.5 mm costs 0.6 points at 14.0° against the baseline full-height rim, the worst loss on both
the twelve- and 45-field curves. Both lands stay as drawn. S10 stays at 2.5 mm: it is within about 4 % of the figure's
cap end, and a cap at the iris radius or below would shorten the drawn stop housing further.

Labels and tags found correct: GF (+) surfaces 1–8 and GR (+) 10–14 bracket elements 1–5 and 6–8 as Fig. 1 does; C1
3–5, C2 6–8 and C3 10–12 are the figure's C1–C3. Element types agree with the signs of R. The stop sits between C2 and C3.
The A markers sit on surfaces 12, 13 and 14 only, the three aspheric surfaces of Table 2. No `apd` tags: the patent names
no special-dispersion glass. All eight glass labels resolve exactly (largest |Δνd| 0.04, L7 M-TAC60).

Movement: the lens is static (no gaps), and the focus overlay reports no modelled movement. `focus.description` says
correctly that the patent focuses with L8 alone toward the object (¶0055) and prints no near spacing.

Colour: on Fig. 2A the paraxial C and g foci sit about +16.4 and −4.6 µm from d; the model gives +17.4 and −4.7 µm. At the
F1.93 rim the plot reads about −6 µm (d), −22 µm (g) and −2 µm (C); the model traces −15.3, −14.4 and +3.2 µm. The rim
difference is in the d-line spherical aberration and the spherochromatism, not the paraxial colour, so no glass label is
implicated. Fig. 2D reads about −9.2 % distortion at 30.8°; the model gives −8.3 % (a real chief ray at 30.8° lands at
4.649 mm, the printed Y).

Engine after the edits: EFL 8.500681 mm, FOPEN 1.900, halfField 32.388°, stop radius 2.43577 mm, as before. Surface audit
OK; aperture audit reports no rim limit; image circle no undersized surface; field coverage 100 % to 30.8°. Corner
illumination at 30.8° stays 28.8 %.

Open: the diagram's stop housing ends at 2.5 mm because the renderer takes it from the S10 `sd` and ignores the land;
Fig. 1 draws the ticks to 3.69 mm.
Closed (coordinator, same day): the aspheric surfaces are now labelled 12A, 13A and 14A, with C3 ending at 12A and GR
at 14A; engine numbers unchanged.
