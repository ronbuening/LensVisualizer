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

Open: exact production glass identities and the production zoom/focus cam remain unknown. The two additional maker ED positions were not explicitly located in the supplied comparison and remain untagged; HR/HD receive no anomalous-dispersion tags. Rims, zoom-dependent iris and finite-focus travel remain reconstructed; image stabilization is modelled centred. Spectral and finite-focus MTF limitations remain. Interactive page rendering belongs to the coordinator; this pass ran no browser, full test suite, formatting, metadata generation, commit or deployment.

