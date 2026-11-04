# VIVITAR SERIES 1 90mm f/2.5 MACRO — reconstruction audit (received as TOKINA AT-X 90mm f/2.5 MACRO (Historical))

## 2026-11-03 — Sixth batch, whole-embodiment build

- Whole US 3,942,875 Table VII retained without scale, radius, spacing, glass, F-number or source-plane retuning. Grade B probable family, not exact factory formula.
- Missing caps and stop hypotheses were frozen by source figures/first-order/normal exact geometry before MTF. Rejected initial seeds, plus5% invalid branches and the pre-native Tokina S5 correction remain recorded. The Sigma500 required-filter envelope exception was completed before MTF.
- Native geometry, source-endpoint conjugates, finite-ray back-projection, independent first-order checks, raw full-lattice ray records, clipping by surface and analytic saved-failure witnesses are retained. No unsupported continuous cam is claimed.
- Native reference/design scalar diffraction retains all snapshots/prior-grid curves. Default compiled UI and source fields have separate evidence. No physical-OPL, continuum or factory measurement claim.
- Tokina nativeF1.9 differs retailF2.5; printed404.6mm datum is unresolved, and the derived404.917166mm film distance is explicitly labeled. Sigma500 source residual defocus remains unchanged at both endpoints. DP1 has no numerical near state and is held at the printed edge on the frozen inferred caps.
- This research audit does not claim a clean integration result before the external terminal receipts; see the package’s final report for fresh commands, counts, failures and exact release holds. (Closed 2026-11-04: integrated and checked in this repository; see the section below.)

## 2026-11-04 — Wording, glass and metadata pass

**Re-attribution.** The package delivered these three files as `TokinaATX90mmf25MacroHistorical.*` (key `tokina-at-x-90mm-f25-macro-historical`, maker Tokina). On 2026-11-04 they were moved to `vivitar/VivitarSeries190mmf25Macro.*` and re-attributed to the Vivitar Series 1 90mm f/2.5 VMC Macro (key `vivitar-series1-90f25-macro`, maker Vivitar). Reason: US 3,942,875 is a Ponder & Best patent by Ellis I. Betensky, and the collector list of Series 1 patents (forum.mflenses.com, thread t34231) identifies the FIG. 10 design as the production Series 1 90/2.5 — Tokina-made, 8 elements / 7 groups, 1:2 at about 0.39 m, front unit extending ahead of a fixed rear corrector, introduced about 1975–77. Tokina's later AT-X 90mm f/2.5 Macro is linked to it only by reviewer consensus, and Tokina lists 9 elements / 7 groups for its AT-X M90, so the package's Tokina name described a later relative rather than the lens the patent was filed for. A repository-wide search found no other file referring to the old key.

**Source and first order (from the earlier validation pass).** Table VII and its repetition as claim 5 were re-read: 15 radii, 15 axial distances, 8 Nd/Vd pairs, D11 = 0.3 → 44.76 mm and BF 40.50 mm all match the data file. EFL 90.013 mm against the patent's 90 mm; paraxial BFD 40.54 mm against the printed 40.50 mm (kept); close state 404.8–404.9 mm object to film at −0.499× against the printed 404.6 mm and 0.5×, a rounding difference. The printed L7/L8 data compute to a corrector EFL of −1283 mm, while the text gives +1250 mm (ratio 13.89); the magnitude agrees, the sign does not, and no radius was changed.

**Fields changed in the data file.**

- `key` `tokina-at-x-90mm-f25-macro-historical` → `vivitar-series1-90f25-macro`; `maker` Tokina → Vivitar; `name` "TOKINA AT-X 90mm f/2.5 MACRO (Historical)" → "VIVITAR SERIES 1 90mm f/2.5 MACRO".
- `subtitle` "US 3,942,875 — whole Table VII; probable family reconstruction" → "US 3,942,875 Table VII (FIG. 10) — Betensky / Ponder & Best".
- `specs`: seven process lines → "8 ELEMENTS / 7 GROUPS", "DESIGN f = 90 mm", "DESIGN F/1.9", "ALL SPHERICAL", "1:2 MACRO, FIXED REAR CORRECTOR".
- `catalog.lensMounts` added: canon-fd, m42, minolta-sr, nikon-f, olympus-om, pentax-k, from lens databases, collector pages and dealer listings of the Series 1 90/2.5. Konica AR (listed for the 200mm) was not found for this lens and is omitted.
- `catalog.closeFocusM.marketing` 0.39 added (m42lens.com: 39 cm, 39.2 cm without the Macro Adapter; lens-db: 0.39 m).
- `aperture.nominalFNumber` 1.9 → 2.5, `fStops` [1.9 … 32] → [2.5, 2.8, 4, 5.6, 8, 11, 16, 22], `maxFNumber` 32 → 22 (the Series 1 range is f/2.5–22; f/32 came from the Tokina AT-X brochure). `catalog.fNumber` stays design 1.9 / marketing 2.5. Reason: with the inferred rims the f/1.9 axial beam clipped at surfaces 5, 8 and 9. Surface 5 cannot be widened (0.16 mm of air between L2 and L3 at its 17.5 mm rim, about 0.01 mm at the 18.53 mm the beam needs), and surfaces 8/9 at 18.15 mm would leave L5 a 0.40 mm edge. The optional 18.15 mm widening of surfaces 8/9 was therefore not made; at f/2.5 it is not needed.
- Header comment rewritten in plain terms (scale, corrector conflict, aperture, focus, stop, semi-diameters); `focus.description` and the conjugate `source` text rewritten without process vocabulary or run-together numbers; all eight element roles replaced with specific ones; group labels "Main" / "Corrector" → "FRONT UNIT (L1–L6)" / "CORRECTOR (L7–L8)".
- Glass labels (catalog − printed): L1, L2, L6 → LAC12 (HOYA), Δnd −0.0001, Δνd +0.02; L4 → S-TIL27 (OHARA), Δnd +0.00001, Δνd +0.01; L5 → N-LAK9 (SCHOTT), Δnd 0.00000, Δνd +0.01. The patent prints no partial dispersions, so there is no PgF to compare. L3 (nearest rows nd 1.6727, Δnd −0.0003) and L7/L8 (nearest rows nd 1.5168, Δnd −0.0002) are outside the 0.0001 index window and stay Unmatched, now labelled by glass family and printed nd/νd.

**Engine before → after.** EFL 90.0130 mm, BFD 40.5415 mm, half-field and both focus keyframes unchanged (close state EFL 86.982 mm, object 240.59 mm from R1, m = −0.4995). Stop radius 15.901 → 12.085 mm and FOPEN 1.9 → 2.5, from the aperture change; maximum f-stop 32 → 22. Surface audit OK; image circle not undersized; field coverage 100 % (21.65 of 21.65 mm); the aperture audit, which reported a 5.0 % rim limit (f/1.90 → f/2.00 at surface 9), now finds the lens within 3 % of f/2.5. The clear-aperture check at the 21.633 mm half-diagonal shows no axial clipping, no chief-ray block and no vignetting flag at f/2.5 (before: axial clipping at surfaces 5, 8 and 9).

**Analysis.** Rewritten as a Vivitar Series 1 page: patent and identification evidence, architecture, elements, glasses, focus, the f/1.9 design versus the f/2.5 product, and the Tokina AT-X note. The MTF tables, process vocabulary and the cross-references to other lenses of the package were removed.

Open: the corrector sign conflict above. A blade count of 8 appears only in third-party data, so `aperture.blades` was not added. The mount list rests on third-party databases and listings, not on Vivitar literature.
- 2026-11-04 coordinator note: L3 relabelled SF5 (Schott) and L7/L8 N-BK7 (Schott). The patent prints three-decimal indices, so 1.6727 → 1.673 and 1.5168 → 1.517 are exact at printed precision (Δνd +0.01 / −0.03).

## 2026-11-04 — Final diagram, rim and label review

**Compared.** The local page at infinity, at closest focus (`focus=1`) and with the focus motion overlay, against US 3,942,875 FIG. 10 (sheet 4 of 4, PDF page 5, native 300 dpi raster). No Vivitar construction diagram was found, so the patent figure governs. Before this pass the file carried the package rims unchanged.

**Figure scale.** Vertex crossings on the axis (native px): R1 610, R4 799, R13 1255, R15 1370, film plane 1755. R1→R15 760 px for 79.201 mm (9.60 px/mm), R1→film plane 1145 px for 119.701 mm (9.57), R4→R13 456 px for 47.566 mm (9.59); 9.57 px/mm is used. The drawn axis tilts about 0.6°, so each height is half the element's top-to-bottom span. Cross-check: the figure draws L2's rear meeting L3's front exactly at L3's corner (174.75 px), and the prescription's R4/R5 air gap closes at about 18.6 mm, which needs at least 9.40 px/mm, consistent with the axial scale. The hand-drawn curves are flatter than the radii (for example R6 drawn with about 3.7 mm of sag at its cap end, where the prescription gives 4.6 mm), so only rim heights and land positions were read from it.

**Silhouette differences before the change.** L1, L2, L6, L7 and L8 rendered 11–17 % taller than drawn; L6 rendered taller than L4/L5, while the figure draws them equal (167.75 against 169.5 px); L3 rendered as a bevel (front 17.5, rear 20.5 mm) whose R6 bowl reached 2.2 mm past the stop plane, while the figure draws a square block with a flat land 2 mm ahead of the stop; L4's front showed no land, while the figure draws one.

| Element (faces) | Figure span/2 | Figure height | Before sd | After sd | Corner light alone vs package (13.5°, f/2.5) |
| --- | --- | --- | --- | --- | --- |
| L1 (1, 2) | 223.25 px | 23.33 mm | 26.5 | 24.8 | −1.49 pts |
| L2 (3, 4) | 213.5 px | 22.31 mm | 25.0 | 22.3 | 0.00 |
| L3 (5 / 6) | 174.75 px | 18.26 mm | 17.5 / 20.5 | 17.5 / 17.5 | 0.00 |
| L4/L5 (7, 8, 9) | 169.5 px | 17.71 mm | 17.0 | 17.0 (kept, −4 %) | — |
| L6 (10, 11) | 167.75 px | 17.53 mm | 19.5 | 17.5 | −1.49 pts |
| L7 (12, 13) | 174.75 px | 18.26 mm | 21.0 | 18.3 | −1.36 pts |
| L8 (14, 15) | 175.75 px | 18.36 mm | 21.5 | 18.4 | −1.12 pts |

L1 at its drawn 23.3 mm with the other changes would lose 7.6 points at the corner. In the final state the corner loss for L1 = 24.6 / 24.7 / 24.8 / 24.9 / 25.0 mm is 3.4 / 3.2 / 2.97 / 2.79 / 2.5 points, so 24.8 mm is the smallest value that keeps the loss within 3 points. L3's front stays at 17.5 mm: the drawn 18.3 mm leaves 0.05 mm of air to L2, and the validator refuses it at the default `gapSagFrac` 0.90 ("combined surface sag (1.36 mm) exceeds allowed gap intrusion (1.260 mm of 1.400 mm)"; 0.97 would admit it). At 4 % below the drawing this is within measurement noise, so no policy change is proposed; L3's rear was brought down to the same 17.5 mm to square the block. L4/L5 (−4 %) were left alone.

**Lands.** FIG. 10 ends L3's rear (R6) and L4's front (R7) in short strokes square to the axis, top and bottom. Both are authored as inferred rim cuts.

| Face | Cap end span/2 | Edge span/2 | q (±1 px) | sd | Depth | Cut radius | Axial max (all focus) | Stop-plane clearance |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| R6 (L3 rear) | 150.0 px | 174.75 px | 0.858 ± 0.011 | 17.5 | 4.20 mm | 15.02 mm | 12.31 mm | 2.12 mm (figure 19.5 px = 2.0 mm) |
| R7 (L4 front) | 143.75 px | 169.5 px | 0.848 ± 0.011 | 17.0 | 3.98 mm | 14.41 mm | 11.95 mm | 2.34 mm (figure 15 px = 1.6 mm) |

The full-field f/2.5 bundle reaches 13.40 mm at R6 and 13.14 mm at R7, below both cut radii; the inferred-cut beam rule passes, and the corner transmission is the same with and without the two cuts (97.03 %), so the lands cost no light. No other face of the figure carries a land: R4 (L2 rear), R12 and R14 (corrector fronts) run to their element edges.

**Light and clearance, before → after.** Engine transmission at infinity, f/2.5: 100 % at every field → 100 % to 11.3° and 97.0 % at 13.5°. The rim-cost tool gives a worst loss of 2.97 points against the package rims, at 13.5°. At half and full focus travel the engine curve stays 100 % at every field. The real-ray clear-aperture check at the 21.633 mm half-diagonal shows no axial clipping or chief-ray block at infinity or at the close keyframe. Surface audit OK; image circle not undersized; field coverage 100 % (21.65 of 21.65 mm); the aperture audit finds the lens within 3 % of f/2.5. The engine's rim-derived half-field falls from 24.61° to 21.86° (surface 15 limits it, as before), still well beyond the 13.5° frame corner; f-number 2.500, stop radius 12.085 mm and EFL 90.013 mm are unchanged. With the new rims the patent's f/1.9 axial beam would also clip at L6 and inside both lands; the model's f/2.5 beam clears them with at least 2.4 mm to spare.

**Labels.** Group bracket "FRONT UNIT (L1–L6)" → "OBJECTIVE (L1–L6)": the patent's own term ("the objective elements move for focusing", "movable objectives while maintaining a corrector lens group") and the house style of the sister Series 1 200mm file; "CORRECTOR (L7–L8)" kept. The patent's Group I/II/III subdivision (I = L1, L2; II = L3; III = L4–L6) is described in the analysis rather than bracketed.

**Checked and found correct.** Element names L1–L8 are the patent's; element types agree with the radius signs (L1 plano-convex, L2 and L3 menisci convex to the object, L4 biconcave, L5 and L6 biconvex, L7 and L8 menisci concave to the object) and the roles are true; the CD1 bracket spans surfaces 7–9 (L4/L5, the only cemented pair); no aspheric markers, as the patent has none; the stop is drawn between L3 and L4 as A in FIG. 10. No `apd` tags: the patent designates no anomalous-dispersion glass and the 1970s design has no ED element. All eight inspectors show a resolved catalog glass (LAC12 for L1, L2, L6; SF5 for L3; S-TIL27 for L4; N-LAK9 for L5; N-BK7 for L7, L8), each within the printed three-decimal index and 0.03 in νd. Focus: index 0 is infinity (D11 0.30 mm) and the last keyframe the close state (D11 44.76 mm, 404.8 mm object to film, m −0.4995); the overlay shows the objective L1–L6 moving 44.46 mm objectward and the corrector fixed; the slider's far end reads 40 cm, with the marketed 39 cm beside it.

**Remaining limitations.** The figure is hand-drawn and its curves are flatter than the prescription, so rim heights are good to a few percent at best. L1 stays 6 % taller than drawn because of the light rule. L3 and L4/L5 stay 4 % below the drawing. The corrector-power sign conflict recorded above is unchanged.
- 2026-11-04 coordinator note: doublet labels renamed from the CD series to D1… (corpus convention).
