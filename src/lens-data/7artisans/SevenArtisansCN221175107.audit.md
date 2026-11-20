# CN221175107U estimate authorization and audit

2026-11-15. Supersedes the stop-source hold only for an explicitly estimated representative reconstruction, following Ron's instruction to estimate placement for the40. It does not turn missing stop data into literal source data.

Fresh: original PDFp6 table rendered and visually reviewed; source table transcription used; native compile, geometry, aperture, exact projected rays, stop sensitivity, axial image-plane solve, geometric and diffraction MTF and targeted strict TypeScript. Source PDF, distributor snapshots and figure images were inherited from the recovered private stop-hold archive; no new factory confirmation.

Source radii:15.63,22.3,146.2,−8.2,28.9,32.6,−10.5,58.77,−60,−19.19,−11.6,−27.63mm.
Source internal distances:2.43,3.13,6,1,.1,4.26,2.6,.94,2.73,1.3,3mm. Native labels preserve1–12 with inserted STO splitting only3.13mm.
Literal element nd/Vd:1.755/52.33,1.497/81.6,1.62/36.35,2/28.32,1.728/28.3,2/28.32,1.805/25.4. No source contradictions silently repaired.

Source-absent/inferred: iris plane, iris diameter derived from the source pupil, clear apertures, infinity image gap. Source-present: Fig5 entrance-pupil radius3.5mm. Marketing f5.6 differs from reconstructed f5.775795; disclosed.

Geometry: default90% gap-sag, no override. Stop ±.5mm alternatives and additional front/rear hypotheses retained in stop-sensitivity.json. Some rejected rear alternatives fail due to unavailable chief rather than proving impossible optics. Pupil alternatives are conditional on the same source7mm entrance pupil, not optimized against output MTF.

Read analysis.md for quantitative results and remaining integration gates. No full-app regression or browser QA claim. Source claims about full-field MTF do not match all measured model values; not withdrawn or relabeled. Native interpolation is irrelevant: this is a fixed prime, infinity-only model.

Reproduce with pinned repository70600ffc23af48a81994cf8fc834048fdf9d21a1 placed in ./repo: python build.py; node --import ./repo/scripts/ts-js-specifier-hook-register.mjs plane.mjs; node --import ./repo/scripts/ts-js-specifier-hook-register.mjs test.mjs; node --import ./repo/scripts/ts-js-specifier-hook-register.mjs mtf.mjs. The plane solve resets its starting image gap explicitly; MTF runs at authored derived gap. Audit commands and logs supplied separately. No user-visible delivery or remote archive performed by this worker.
