# JP 2021-96331 A — optical reconstruction and modeling audit

## Status

One physical lens with TC OUT and TC IN configurations; exact production-prescription identity remains unproven. The independent patent validation passed on 2026-10-26 with reconstruction notes. Interactive rendering is assigned to the coordinator. This wording pass changes no engine, runtime, UI or deployment behavior.

## Original and missing-cell reconstruction

Original page 82, Example 5, surface15: d literally **可変**, not a numeric thickness. No d15 row is present in the variable-gap schedule on page82. All printed radii, remaining spacings, nd/νd coordinates and both asphere coefficient sets were reviewed against original page images81–84.

Applied d15 is **1.5 mm, reconstructed**, supported independently by:

1. Same-source sibling Example6 prints1.5000 at surface15; ¶0564 explicitly pairs Example6 with Example5 plus the built-in TC.
2. Example5 air-equivalent total length closes at1.4999952972 /1.4997952972 /1.4999952972mm after subtracting all other terms. Using the printed BF directly instead of the physical plate calculation gives1.4999mm at all three stations.

The original transcription preserves the literal. `source.errata.status='corrected'` requires `printed:number`; supplying 0, 1.5, NaN or another fictional value would misrepresent the source. The field cannot express this missing nonnumeric cell without a schema change, which is outside scope. The visible analysis and data header disclose the reconstruction; no source.errata entry or new runtime feature was added.

## Geometry and rims

All radii/signs and native gaps are unscaled. Camera plate C remains physical through rearPlates. Stop12 is STO with default f-number-derived radius. No gap-sag override; default0.90 applies.

The first figure-automation attempt on the annotated wide drawing was contaminated by leader lines and a crop-edge warning; its measurements are invalid for quantitative use and retained for the record. The clean middle panel was then measured with a diagnostic-only temporary prescription whose first state repeats the middle spacings (never a catalog target). ENV/RIM agreement and high-resolution visual review support the relative outline. Initial G4/G5 estimates were too large: corrected to13.5 and9.6mm respectively; rear pair11.9mm. Common G2 forward rims6–8 remain16.8mm; the stepped rear face9 and following singlet10–11 use15.6mm. Those values clear the stated axial beam and respect the cross-gap limit.

Source-only110 sampled zoom/focus states: minimum glass thickness0.223727mm, minimum air clearance0.337042mm, maximum gap intrusion0.8818624, maximum renderer trim0, no invalid SVG paths or nonfinite geometry. These are sampled states, not a proof over every continuous control position.

## Rays and focus

Close focus is reconstructed G4 translation at manufacturer1.3m, not a published finite conjugate. D19+D22 stays constant. The first custom finite-ray audit used an inadequate20mm seed and had27 aim misses; preserved v001 is superseded, not an optical-failure conclusion. Independent paraxial stop-plane seeds correct initialization without changing the engine or prescription. v002 samples666 exact finite-object rays with improved aiming. v003 additionally uses the true prepared zoom-stop radius rather than the scalar wide-stop value; all666 aims converge with no trace failures/nonfinite hits. The final inferred-cam audit expands this to1,998 finite rays across9zoom samples:1,916 clear and82 rim-clipped, with zero failed/nonfinite rays. No certified finite MTF data is invented.

Both configurations pass all six native infinity f-number and full-format chief-ray stations. Stated source angular field and format corner are not interchangeable; the audit explicitly targets the Four Thirds format corner.

## Integration and viewer history

The earlier three-station model passed its separately recorded integration checks. The previous pending optical-validation item is closed by the independent 2026-10-26 report. Reference-wavelength infinity calculations are supported; photopic calculations lack spectral data and finite-focus MTF is unavailable. The report distinguishes computed results from convergence limitations; this pass does not claim a fresh full integration or MTF run.

The configuration-family contract in the existing parity test specifies 33 leading surfaces, insertion after 33, 3 retained trailing surfaces and independently solved close-focus endpoints. The independent validation confirmed this contract; this wording pass leaves it unchanged.

Static engine SVGs record optical sections. The earlier interactive-viewer item is transferred to the coordinator for rendering; no interactive result is claimed here.

## Intermediate zoom-path reconstruction

The earlier three-station model's interpolation sweep found up to 10.89494 mm intermediate infinity defocus despite accurate printed states. This is not an error in the printed source rows; linear interpolation does not recover the compensating zoom cam.

The model has 101 uniformly spaced stations: exactly 3 printed source states at indices 0/50/100 and 98 reconstructed intermediates. G2/G5 follow piecewise-linear source positions; a rigid G4 shift (at most0.97444mm beyond that linear baseline) maintains the interpolated native infinity image-plane residual. D19+D22 is invariant and both TC states share every infinity front spacing. All original radii, thicknesses, glasses, aspheres, source focal anchors and native gaps remain unchanged. Close endpoints independently reconstruct manufacturer1.3m MFD and are never marked published or certified finite conjugates.

A staged21/51/101-station experiment gave worst sampled intermediate infinity residuals0.13653/0.02121/0.004451mm. The101-station choice gives sampled inferred close object-to-image distances1299.95787–1300.00009mm. These are numerical reconstruction results, not evidence of exact production mechanics. An independent review of unchanged source values passed 4,427 checks with 0 failures.

The clean Figure5 middle-panel outline and manufacturer diagram support the common rear pair11.9mm rim. Figure6 draws that physically reused pair smaller; both configurations deliberately preserve one shared physical rim and disclose the figure uncertainty rather than inventing an interchangeable rear lens. No gap-sag override is used.

## Final sampled optical checks

The final model has 2,010 sampled zoom/focus geometry states with minimum glass thickness0.223727mm, minimum air clearance0.337042mm, maximum gap intrusion0.8818624 (default allowance0.90), and zero render trimming/nonfinite geometry. All202 authored stations across both configurations pass the stated axial aperture and full-format chief-ray checks; the source image-circle floor reports no undersized surface.

The final infinity ray audit samples 3,996 trials at9zoom positions, wide-open/f8 and angular field fractions0/.5/1:3,841 clear and155 blocked. Nine of the blocked trials do not yield converged requested stop-pupil targets because the launched rays miss the finite front-surface domain. Their minimum radius over the full first-surface axial envelope exceeds the real44.5mm front rim; these are explicitly retained as front-missed trials, never counted transmitted or converged. There are no unblocked trace failures, nonfinite coordinates or hidden post-clip failures. The preserved v001 report left these9trials unclassified; v002 adds the explicit geometric boundary diagnosis without changing the lens or engine.

The earlier three-station reference-wavelength geometric MTF converged at all 18 sampled fields with a 64-grid cap; this does not establish convergence at every intermediate zoom position. Photopic and finite-focus MTF remain unsupported for the documented source-data reasons. Interactive rendering is assigned to the coordinator.

## 2026-10-26 — Deployment validation and wording pass

The supplied independent patent review re-read the original tables and figures on PDF pp. 81–84 and 106: 87 surface rows, 16 polynomial coefficients, four conics and 36 printed scheduled gap values, with no unexplained mismatches. Example 5 d15 is printed as “variable” without scheduled values. The 1.5 mm reconstruction is supported by Example 6 and Example 5 total-length closure of 1.499995 / 1.499795 / 1.499995 mm. No optical correction was required.

At wide/middle/tele infinity, patent → model EFL is 153.00 / 245.55 / 391.96 → 153.0016 / 245.5490 / 391.9590 mm for TC OUT and 191.62 / 307.53 / 490.90 → 191.6202 / 307.5283 / 490.8911 mm for TC IN. The model retains the patent f-numbers 4.59 and 5.75 respectively. Air-equivalent BF is 29.0642 / 29.0640 / 29.0642 → 29.0641 / 29.0643 / 29.0640 mm OUT and 29.0640 / 29.0637 / 29.0640 → 29.0631 / 29.0635 / 29.0629 mm IN. Air-equivalent total length is 322.5887 / 322.5885 / 322.5887 → 322.5887 / 322.5889 / 322.5886 mm OUT and 322.5885 / 322.5882 / 322.5885 → 322.5877 / 322.5881 / 322.5875 mm IN; physical total length remains 323.9876 mm. Patent angular half-fields are 4.03 / 2.51 / 1.57 → 4.0310 / 2.5102 / 1.5705° OUT and 3.175 / 1.98 / 1.24 → 3.1750 / 1.9776 / 1.2379° IN. These source-field calculations are distinct from the viewer's field setting.

The independent comparison with the [maker construction drawing](https://jp.omsystem.com/content/000113783.jpg) agrees on the front singlet/pair, variator triplet, EDA L8, Super ED L3/L10/L11/L15, focus doublet and rear converter. The [maker specifications](https://jp.omsystem.com/product/lens/zoom/pro/150-400_45ispro/spec.html) confirm 28 elements / 18 groups including the 7-element / 4-group converter, hence 21 / 14 without it; one EDA, four Super ED, two ED, two HR and one HD; and 1.3 m minimum focus. The [feature page](https://jp.omsystem.com/product/lens/zoom/pro/150-400_45ispro/feature.html) confirms MC-14 / MC-20 compatibility. These correspondences support the product association without proving exact production identity.

Both data files received plain-language headers, patent/example/assignee subtitles with the converter state, concise design specs, specific element roles and a focus description distinguishing the three printed infinity states from the 98 reconstructed intermediate positions and 1.3 m focus. L3/L8/L10/L11/L15 received inferred dispersion annotations consistent with their patent coordinates and the maker drawing; no spectral indices or glass identities changed. The analyses retain their patent metadata, technical values and source citations while replacing process terminology with plain model limitations and removing obsolete viewer-status text and checksum language. No private Drive links were present. The audit histories retain their optical findings and close the stale optical-validation item.

Before/after built and probe outputs are identical for both configurations, including all 101 zoom stations and both focus keyframes: EFL, f-number, field, stop radius and BFD are unchanged. Both surface audits report OK. Surface arrays, gaps, all optical numbers and the configuration contract remain unchanged: 33 shared leading surfaces, insertion after surface 33, and 3 shared trailing surfaces. The independent review also found all 202 authored stations reach the format corner, with zero axial/chief clips; its 3,996-ray sweep retained 3,841 clear, 146 converged clipped and nine unconverged front-missed trials.

Open: exact production glass identities and the production zoom/focus cam remain unknown. The two additional maker ED positions are closed: the 2026-10-26 maker-drawing check located them at L17 and the converter's L23, which now carry inferred ED tags. HR/HD receive no anomalous-dispersion tags. Rims, zoom-dependent iris and finite-focus travel remain reconstructed; image stabilization is modelled centred. Spectral and finite-focus MTF limitations remain. Interactive page rendering belongs to the coordinator; this pass ran no browser, full test suite, formatting, metadata generation, commit or deployment.

## 2026-10-26 — Semi-diameter pass against the patent figure

Source: the local `patents/JP2021096331A.pdf`, PDF page 106, Figure 5 (Numerical Example 5, TC OUT) and Figure 6 (Numerical Example 6, TC IN). Each figure has wide, middle and long-end infinity panels, all on the native 300 ppi raster. The tables on pp. 81–84 print no effective diameters, so every rim is still an inference. Front page checked: JP 2021-96331 A, published 2021-06-24; application 2019-226608, filed 2019-12-16; applicant Olympus Corporation; inventors Yuki Kubota and Yasuharu Yamada. All of these match the data files.

Method and scale. The wide panels carry r/d leader lines on both sides of the axis. Each rim was therefore read on the clean sides of the other two panels: the upper side of the middle panel and the lower side of the long-end panel. Where its rim lines are readable, the wide panel served as a check. Fixed and moving elements are drawn the same in every panel. A rim height is half the centre-to-centre distance between an element's top and bottom rim lines, measured against a fitted dash-dot axis, which is tilted slightly on the scan. The scale comes from vertex crossings at each panel's own zoom state, measured from the first vertex to surface 34 and to the plate front. It is 0.4901 mm/px for the wide panel, 0.4877 for the middle panel and 0.4861 for the long-end panel. The first-to-fifth-vertex span agrees within 1 %. Figure 6 crossings fit the TC IN prescription at the same scales. For every Figure 5 element the three panels agree within about ±0.5 mm.

Before/after, shared surfaces (both files). "Figure" is the Figure 5 mean. "Floor" is the largest f/4.59 axial marginal height over all 101 stations, at infinity and at 1.3 m.

| Surfaces | Element | Before | Figure | Figure/before | Floor | After | Evidence |
|---|---|---:|---:|---:|---:|---:|---|
| 1–2 | L1 | 44.5 | 42.8 | 0.96 | 42.70 | 44.5 | within noise, kept |
| 3–4 | L2 | 43 | 38.7 | 0.90 | 38.78 | 38.8 | figure; square rim; floor at 391.96 mm decides the rounding |
| 5 | L3 rear | 43 | 37.2 | 0.87 | 36.72 | 37.2 | figure; L3 is drawn stepped below L2 |
| 6–8 | L4–L6 | 16.8 | 16.9 | 1.01 | 16.80 | 16.8 | agrees |
| 9–11 | L6 rear, L7 | 15.6 | 15.7 | 1.01 | 15.48 | 15.6 | agrees |
| 13–14 | L8 (aspheric) | 18 | 16.7 | 0.93 | 16.24 | 18 | noise band, kept |
| 15–17 | L9/L10 | 17.5 | 16.7 | 0.95 | 15.77 | 17.5 | kept |
| 18–19 | L11 | 17.5 | 16.75 | 0.96 | 15.30 | 17.5 | kept |
| 20–22 | L12/L13 | 13.5 | 12.8 | 0.95 | 12.33 | 13.5 | kept |
| 23–24 | L14 | 9.6 | 8.9 | 0.93 | 8.08 | 8.9 | step-order fix: drawn level with L15, would otherwise overhang it |
| 25–26 | L15 | 11 | 8.7 | 0.79 | 7.74 | 8.7 | figure |
| 27–29 | L16/L17 | 10.5 | 9.3 | 0.89 | 7.19 | 9.3 | figure |
| 30–31 | L18 | 10.5 | 9.2 | 0.88 | 6.44 | 9.2 | figure |
| 32–33 | L19 | 11 | 9.75 | 0.89 | 6.45 | 9.8 | figure; Figure 6 draws 8.9, the larger rim is kept |
| 34–36 (OUT), 45–47 (IN) | rear pair | 11.9 | 11.3 | 0.95 | 3.57 | 11.9 | kept; Figure 6 draws about 8.4, the maker drawing draws it large |

TC IN converter (surfaces 34–44 of the TC IN file). Values come from the middle and long-end panels of Figure 6. The floor is the f/5.75 axial marginal height.

| Surfaces | Element | Before | Figure 6 | Figure/before | Floor | After |
|---|---|---:|---:|---:|---:|---:|
| 34–35 | L20 | 10.5 | 8.65 | 0.82 | 6.06 | 8.7 |
| 36–38 | L21/L22 | 10.5 | 8.1 | 0.77 | 5.17 | 8.1 |
| 39–42 | L23–L25 | 9.8 | 7.5 | 0.77 | 4.12 | 7.5 |
| 43–44 | L26 | 10.5 | 7.35 | 0.70 | 3.26 | 7.4 |

The drawing sets the G1 pair at almost exactly the long-end axial beam: L1 is drawn at 42.8 mm against a 42.70 mm floor, and L2 at 38.7 mm against 38.78 mm. The L2 front therefore carries the smallest clearance in the lens, 0.02 mm at 391.96 mm. No aspheric rim changed. L8 keeps 18 mm, so the analysis departure prose needed no recomputation. The opticalConfiguration parity contract still holds: the first 33 and last 3 surfaces are identical apart from `d`, labels and medium numbers. No `gapSagFrac` change was needed.

Clearance after the edit. Both configurations were traced at all 101 stations, at infinity and in the 1.3 m state. No surface clips the stated axial beam or blocks the chief ray. The chief ray reaches 10.82 mm at every station at ω = 4.03 / 2.51 / 1.57° (TC OUT) and 3.18 / 1.98 / 1.24° (TC IN), matching the patent. The aperture census traces 101 of 101 stations at the stated f-number in each configuration. The surface validator reports no errors, the image-circle floor finds no undersized surface, and TC OUT corner coverage is 101 of 101 stations at 99 % or better. That census skips the hidden TC IN file, whose corner chief ray is covered by the trace above.

Engine values. TC OUT is unchanged: EFL 153.00 mm, f/4.59, half-field 5.19°. TC IN keeps f/5.75, but its engine half-field falls from 5.64° to 4.45° at 191.62 mm (2.19° to 1.73° at 490.90 mm). The limit is now the L26 rim (surface 44) instead of the rear pair, still 1.40 times the patent's 3.175° half-field.

Corner transmission at full aperture and infinity (engine geometric vignetting at the format corner) falls as follows:

| Configuration | Focal length | Before | After |
|---|---|---:|---:|
| TC OUT | 153 mm | 85.4 % | 79.2 % |
| TC OUT | 245.55 mm | 86.5 % | 79.2 % |
| TC OUT | 391.96 mm | 72.9 % | 64.6 % |
| TC IN | 191.62 mm | 90.6 % | 82.3 % |
| TC IN | 307.53 mm | 90.6 % | 82.3 % |
| TC IN | 490.90 mm | 81.3 % | 70.8 % |

The loss comes from the smaller L15–L19 rims. L2/L3 add about one point at the long end. The converter rims add none inside the format field.

Rendered check. Local renders were compared at all printed stations of both configurations, at infinity and at 1.3 m, and overlaid on the wide panels of Figures 5 and 6. The stepped L2/L3 silhouette and the compact G6 front cluster now follow the drawing. G3, G4 and L1 still render 4–7 % taller than drawn, inside the noise band. The TC IN rear pair renders taller than Figure 6 by design.

Maker drawing (OM System construction drawing, 28 elements including the converter). It shows 7 converter elements in 4 groups. Its special glasses sit at EDA L8, Super ED L3/L10/L11/L15, ED L17 and L23, HR L21 and L25, and HD L28, in front-to-rear TC IN numbering. These agree with the patent coordinates 593686, 550755, 954323, 900374 and 946180. Scaled to L1, the drawing gives L2/L3 about 0.89 L1, which supports the reduction, and draws the rear pair large. It draws G3 about 10 % and the converter about 5–30 % larger than the patent figures. It is a proportion check only.

Half-field alternative (applied by the coordinator; see the follow-up below). This set keeps the TC IN half-field at 5.57° with the same format-field vignetting at the wide and long ends, and it passes the validator: surfaces 36–38 at 8.6, 39–42 at 8.8, 43 at 9.4 and 44 at 9.8 mm, with 34–35 unchanged at 8.7. It sits between Figure 6 and the old values and is close to the maker drawing's converter proportions. Rims stay inferred, and the production barrel apertures are unknown.

Coordinator follow-up, same day. Three changes were applied after this pass. First, the TC IN converter takes the half-field-preserving set above (36–38 at 8.6 mm, 39–42 at 8.8, 43 at 9.4, 44 at 9.8; 34–35 stay at 8.7; shared surfaces unchanged), because rim changes must not shrink the traced field and the maker drawing's converter proportions support it. Rechecked on the edited file, the engine half-field is 5.57° / 3.47° / 2.17° at 191.62 / 307.53 / 490.90 mm (5.64° / 3.51° / 2.19° before this pass, 4.45° / 2.77° / 1.73° with the Figure 6 set). f/5.75 holds at all 101 stations, and no rim clips the axial beam or blocks the chief ray at infinity or 1.3 m (the pupil-seeded trace agrees). The chief ray reaches 10.82 mm at every station, format-corner transmission equals the Figure 6 set (82.3 / 82.3 / 70.8 %), and the parity contract holds. Second, L17 (1.59282 / 68.63) in both files and L23 (1.55032 / 75.5) in TC IN carry inferred ED tags, the positions this pass found on the maker drawing. Third, the glass labels in both files now name OHARA or HOYA catalog equivalents, with the production supplier unspecified. All 28 resolve in the repo catalog within 6 × 10⁻⁶ in nd and 0.01 in νd of the printed pairs; before the relabel, L2, L3, L10, L11, L15 and the rear positive L20 (L27 with the converter in) did not resolve. The analysis prose, glass tables and TC IN data header now match.

## 2026-10-26 — Second review: diagram, labels and movement

This independent second review compares the local viewer with the original JP2021096331A.pdf, Numerical Examples 5/6, printed tables on PDF pp. 81–84, movement and construction text on pp. 67–69 (especially ¶0553–0568), and Figures 5/6 on p. 106. The supplied local OM System maker image, `scratchpad/sd/maker/olympus-150400.jpg`, was viewed directly. The coordinator's converter rims and inferred ED tags were retained.

### Changes and source evidence

| Field / elements | Before | After | Evidence |
|---|---|---|---|
| TC OUT diagramLabel, every L1–L21 | absent; viewer displayed 1–21 | explicitly L1–L21, respectively | Figure 5 labels the individual lenses L1–L21; name already held those identifiers but does not control the diagram text |
| TC IN diagramLabel, every L1–L28 | absent; viewer displayed 1–28 | explicitly L1–L28, respectively | Figure 6 labels the inserted converter L20–L26 and retained rear pair L27/L28 |
| G4 group text, both files | G4 (−) Focus | G4 (−) Zoom/Focus | ¶0561 gives reversing zoom travel; ¶0562 gives imageward near-focus travel |
| L12 role, both files | Negative member of the G4 focus doublet | Negative member of the G4 zoom and focus doublet | Same source paragraphs; no power or physical grouping changed |
| L13 role, both files | Positive member of the G4 focus doublet | Positive member of the G4 zoom and focus doublet | Same source paragraphs |
| focus.description, both files | opened with the imageward near-focus statement | also states that G4 first moves imageward then objectward during zoom | ¶0561; the existing three published / 98 reconstructed stations, separate TC focus solves, invariant D19+D22, centred IS and finite-focus-MTF limitation are retained |
| Analysis, both files | G4 architecture-table function mentioned focus only | names zoom compensation and focus; explains explicit L identifiers and Zoom/Focus label | Keeps public prose consistent with the diagram |
| TC OUT analysis rim prose | described L14–L19 collectively as front G6 elements | distinguishes G5 L14 from front G6 L15–L19 | ¶0556–0557 and Figure 5 group brackets |

No sd, stop radius, policy, glass, APD tag, numeric gap, focal anchor, focus endpoint, radius, index or asphere coefficient changed. No movement-array reordering was warranted.

### Independent silhouette check

The new 300 dpi page render is `review-p106-106.png`. Native middle-panel Figure 5 vertex crossings give S1 x≈428.5, S5 x≈518.5 and S34 x≈1018.5 px. The prescription spans 43.9577 and 287.2226 mm give 0.48842 and 0.48682 mm/px, agreeing within 0.33%. Air-gap axis samples locate the slightly tilted line at y≈1054–1057 px; a single constant y would bias small rims by up to about 1.5 mm. The upper clean side was profiled independently; the middle/tele panels and both rim sides were inspected to reject leaders, brackets and lands. The annotated wide panel is a qualitative check, not a trusted envelope measurement. Figure 6's shared front vertices supply the same scale. Thick ink, tilt and short converter edges leave about 0.5 mm uncertainty.

All elements were inspected. The front singlet remains slightly taller than drawn; L2 is taller than the rear edge of L3, as drawn. G2's rear L6 face steps down toward L7; it is not a square component accidentally bevelled by one isolated rim. L8, the following G3 cluster and G4 are modestly taller than the figure, without a new clear >10% discrepancy. G5 and the front G6 cluster retain the drawn small-rim ordering. No new bowl wrapping, crossing or missed bracket was seen through zoom or near focus.

| Optical component | Stored sd retained, mm | Independent figure reading, approximate mm | Decision |
|---|---:|---:|---|
| L1 | 44.5 / 44.5 | about 43 | retain within scan/measurement tolerance |
| L2 and L3 | 38.8 / 38.8 / 37.2 | about 39, stepping to 37 | preserve the source-drawn stepped rear edge and axial floor |
| L4/L5/L6 | 16.8 through S8; S9 15.6 | about 17, stepping to 16 | retain the drawn rear reduction |
| L7 | 15.6 | about 16 | retain |
| L8 | 18 | about 16.5–17 | below a clear 10% correction threshold; retain both aspheric rims |
| L9/L10/L11 | 17.5 | about 16.5–17 | retain |
| L12/L13 | 13.5 | about 13 | retain |
| L14 | 8.9 | about 9 | retain |
| L15 | 8.7 | about 9 | retain |
| L16/L17 and L18 | 9.3 and 9.2 | about 9–9.5 | retain |
| L19 | 9.8 | about 9.5–10 in Figure 5, smaller in Figure 6 | one shared physical rim; retain |
| Rear pair L20/L21 OUT, L27/L28 IN | 11.9 | about 11.5 in Figure 5, about 8–8.5 in Figure 6 | preserve parity and the coordinator's shared-rim decision |
| Converter L20 | 8.7 | about 8.5 | retain |
| Converter L21/L22 | 8.6 | about 8–8.5 | retain |
| Converter L23/L24/L25 | 8.8 | about 7.5–8 | coordinator field-preserving exception retained |
| Converter L26 | S43 9.4, S44 9.8 | about 7–7.5 | coordinator field-preserving exception retained, including its slight bevel |

Square-rim trial, report only: changing TC IN S43 from 9.4 to **9.8 mm**, leaving S44 at 9.8, squares L26 and prints **“OK — no validation errors”**. The substituted-rim clearap trace at all 101 stations has no CLIPS-AXIAL / BLOCKS-CHIEF. Engine half-fields and format-corner transmission remain 5.57 / 3.47 / 2.17° and 82.3 / 82.3 / 70.8%. This would move even farther above Figure 6's approximately 7.4 mm optical rim and changes the explicitly supplied 9.4/9.8 coordinator decision, so it was **not applied**. No gapSagFrac or other policy trial was needed. The current pair also passes the validator.

### Labels, stop, aspheres and maker tags

Group brackets are correct: G1 S1–5; G2 S6–11; G3 S13–19; G4 S20–22; G5 S23–24; G6 S25–36 OUT / S25–47 IN. STO is source surface 12, between L7 and L8, 1.8 mm before S13 and fixed with G3, as ¶0560–0561 require. The camera plate is traced separately and is not counted as a drawn lens.

Every cemented component has one consistent C-prefixed bracket: S3–5, S6–9 (triplet), S15–17, S20–22, S27–29 and S34–36 OUT / S45–47 IN; TC IN additionally has S36–38 and S39–42 (triplet). Corresponding cemented IDs and surface ranges agree. All element shape strings agree with their surface-radius signs and net isolated powers. Meniscus labels are generic but true. Both aspheres are on L8, source surfaces 13/14; their V2 asphere objects generate the two visible A markers. No other element receives an aspheric marker.

The supplied maker image shows 28 elements / 18 construction groups, including the seven converter elements in four groups, consistent with 21 / 14 OUT. Front-to-rear TC IN positions are EDA L8, Super ED L3/L10/L11/L15, ED L17/L23, HR L21/L25 and HD L28. All six OUT and seven IN inferred APD tags agree with those positions; HR/HD carry no APD tag. Neither the patent's nd/νd coordinates nor the maker's category colours establish a production melt or supplier. The maker draws a proportionally larger converter than Figure 6; it supports the retained compromise but is not a substitute optical-rim measurement.

All 13 tagged-element inspector requests were rendered (including the dual-aspheric L8 in both configurations); `review-tagged-inspectors.png` records their actual type, index, Abbe, focal-length, catalog-equivalent glass and inferred badges. For example L8 is biconvex positive / ASPH ×2, FCD1, +72.25 mm; L17 is biconcave negative, FCD515, −39.75 mm; converter L23 is biconcave negative / triplet C39, FCD705, −23.03 mm. Their roles and APD notes were cross-checked against the data and source grouping. The fixed 900-pixel render viewport clips lower inspector prose, particularly L8's coefficient/role section; no claim is made to having scrolled those cards. No interactive browser surface was available to this sandbox.

Both toggle labels are correct in the new screenshots: **TC OUT** and **TC 1.25× IN**. Published zoom labels match the three table anchors in each file, all 98 intervening station labels say inferred cam, and D5/D11/D19/D22/D24 correctly label their source gaps.

### Zoom and focus direction

Object-to-image z is positive. The following displacements relative to wide/infinity are identical in both configurations and match ¶0561 and the printed gaps on pp. 82–84. All 101 focal stations ascend, with exactly indices 0/50/100 marked published.

| Group | Wide / middle / tele z displacement, mm | Zoom verdict | Near-focus verdict |
|---|---|---|---|
| G1 | 0 / 0 / 0 | fixed | fixed |
| G2 | 0 / +28.4606 / +54.6149 | monotonic imageward | fixed at a given zoom |
| G3 and stop | 0 / 0 / 0 | fixed | fixed |
| G4 | 0 / +1.5867 / −2.2938 | imageward to station 50, then objectward; middle-to-tele −3.8805 | only focusing group; imageward |
| G5 | 0 / −1.4280 / −0.3175 | objectward to station 50, then imageward by 1.1105 | fixed at a given zoom |
| G6, including inserted TC | 0 / 0 / 0 | fixed | fixed |

D5 = 56.5303 / 84.9909 / 111.1452 and D11 = 56.7653 / 28.3047 / 2.1504 mm confirm G2's direction and fixed G3. D19 = 5.2138 / 6.8005 / 2.9200; D22 = 23.3087 / 20.2940 / 25.2850; D24 = 2.3050 / 3.7330 / 2.6225 mm confirm both compensation reversals and fixed G6. No reversed station list or exchanged infinity/near index was found.

Near-focus index 1 increases D19 and decreases D22 equally, moving only S20–22. Travel at the printed stations is +3.064651 / +7.992559 / +20.529278 mm OUT and +3.064546 / +7.992439 / +20.529136 mm IN. All 101 near endpoints have positive travel, every other group stays fixed, and D19+D22 is invariant. Probe retains the reconstructed approximately 1.3 m object-to-image distance; both live sliders read 1.30 m at the near endpoint. The source publishes direction but no finite-conjugate amount, so these travel numbers remain reconstructed rather than patent measurements.

### Validation, transmission and rendered evidence

Before and after, both surface validators print **OK — no validation errors** and image-circle checks report 0 undersized / 0 skipped. TC OUT field coverage reaches the 10.82 mm corner at all 101 stations, at least 99%, with no unsolved station. The field-coverage census skips hidden TC IN; its separate clearap trace covers all 101 stations and reaches Y=10.82 mm. Both configurations have zero CLIPS-AXIAL / BLOCKS-CHIEF at infinity and with focus-key 1 substituted. The latter tool still launches infinity-conjugate rays through the near geometry; it is not a fresh finite-object pupil certification. Printed angular half-fields are recovered (OUT 4.03 / 2.51 / 1.57°, IN approximately 3.175 / 1.98 / 1.24°), so --Y did not over-drive the intended source field.

| Engine quantity at wide / middle / tele | Before | After |
|---|---|---|
| TC OUT half-field | 5.19 / 3.23 / 2.02° | identical |
| TC IN half-field | 5.57 / 3.47 / 2.17° | identical |
| TC OUT nominal f-number | 4.590 at all stations | identical |
| TC IN nominal f-number | 5.750 at all stations | identical |
| OUT corner geometric transmission | 79.2 / 79.2 / 64.6% | identical |
| IN corner geometric transmission | 82.3 / 82.3 / 70.8% | identical |

The full before/after vignetting outputs, including all sampled intermediate field angles, compare byte-for-byte equal. Both built calls succeed; every numeric runtime scalar is unchanged. A direct contract comparison confirms all first 33 shared surfaces and the three retained trailing surfaces, including sd, signs, aspheres and media coordinates, agree after normalization of labels/element numbering and the converter insertion gap. Shared infinity gaps remain equal at all 101 stations; the independently solved near endpoints remain distinct. No full test, typecheck, lint, build, metadata generation, server lifecycle or git-state command was run.

The render queue completed **229 successful / 0 failed** new page requests: all 202 authored infinity zoom states, six printed-station near states, zoom/focus overlays at both ends in both configurations, and all 13 tagged-element inspectors. Every infinity station image was inspected in ordered contact sheets; the six source states and near/motion views were also compared directly. The new L identifiers remain readable with packed rows, the group labels identify the proper components, A/A and STO are correctly placed, and no new rim overlap appeared. The retained converter and TC IN rear-pair excess over Figure 6 remain visible and intentional. Views sample authored states rather than proving every continuous slider position.

The saved side-by-side comparison is:
`/private/tmp/claude-501/-Users-ronbuening-Programming-Code-LensVisualizer-LensVisualizer/1168ee07-3a95-429a-8228-c96717740b52/scratchpad/r2/oly150400/oly150400-second-review-comparison.png`.
Supporting contact sheets, individual PNGs, native figure crops, profiles, pre/post numerical outputs, parity/glass checks and the unadopted S43 trial remain in the same scratch folder.

### Glass and remaining source limitations

Every one of the 21 OUT and 28 IN element glass labels, plus each physical camera plate, resolves both by name and by coordinate-compatible catalog lookup. There are **zero Unmatched / unresolved elements**. Current maximum differences from catalog rows are about 3×10⁻⁶ in nd and 0.0063 in νd. No glass string or APD tag was found wrong. The relevant tables on pp. 81–84 supply nd/νd and asphere coefficients, but no supplier glass names, extra spectral-line indices or partial-dispersion measurements; there is no additional unresolved identification to recover for an unmatched element.

The known Example 5 d15 “variable” cell on p. 82, without a corresponding schedule, remains disclosed as the sibling-supported 1.5 mm reconstruction; no forbidden thickness correction was made. No new radius, spacing, index, marketing or bibliographic mismatch was found. The viewed title page gives JP 2021-96331 A, 2021-06-24, application 2019-226608 filed 2019-12-16, Olympus Corporation, and inventors Kubota / Yamada, consistent with the existing data's Yuki Kubota / Yasuharu Yamada. Production cam, production glass identity, exact physical rims and decentered IS remain unproven. The only rim refinement left for coordinator judgment is the explicitly unadopted S43 square-rim trial above.

Coordinator follow-up (same day): the aspheric surfaces on L8 are now labelled 13A and 14A in both configuration files (corpus A-suffix convention; parity unchanged). Converter S43 rises 9.4 → 9.8 mm so L26 is square-cut at 9.8 / 9.8 mm as the review proposed; audit:surface reports no errors and the engine half-field stays 5.572°.
