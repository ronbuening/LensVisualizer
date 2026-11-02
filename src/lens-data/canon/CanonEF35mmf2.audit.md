# Source and numerical audit

Representative probable-family prescription; source literal millimetres retained.

- Native model SHA256: `f9ce41d39b845d02cf8b0069378229f60db2f7758f1dc95478a3c56141aebeab`.
- Source archive SHA256: `75cd50f5cecad32aa64ac2446a3b19921da6cbe636a8388876615b055a6c9787`.
- Source CSV LF separator-only transport hash retained separately from original bytes.
- First-order methods agree; source/computed image-plane distinction retained.
- Geometry and all24 native format-reference fields pass at every advertised aperture; max delta0.0092475561.
- All raw clipping and64 aim-blocked engine failures remain in the evidence. No applied refocus or optical tuning.
- Type checking, corpus and compiled-viewer receipts are produced by the separate final integration run; this source writer does not assert those results. (Closed 2026-11-02: left to the batch integration run.)

## 2026-11-02 — Deployment validation and wording pass

Source re-read: page images of JP H04-015611 A, Numerical Example 1, at 500 dpi. All 13 surfaces, 12 thicknesses, 7 N/ν pairs, the stop row and both cemented joints checked; no mismatches. The patent has no aspheres or variable gaps, and no example prints a back focus or total length.

First-order, patent vs model: F 35.51 / 35.508; Fno 2 / 2; 2ω 62.7° / 62.7°; Ff/FR 0.429 / 0.429; R4/F -0.56 / -0.557. Computed back focus 37.828 mm and image plane 85.228 mm reproduced independently. Reading Figure 4 vs model: d spherical aberration at the top of the pupil -0.11 / -0.109 mm; ΔM, ΔS at full field -0.35, +0.24 / -0.39, +0.20 mm; distortion -2.0% / -1.92%.

Line test: 7 of 7 pairs reproduce a catalog nd/νd within |Δn| ≤ 6e-5 and |Δν| ≤ 0.15, and 0 of 7 reproduce a catalog ne/νe, so the table is d-line and `indexReferenceNote` is removed from all seven elements.

Maker diagram: Canon's section at about 3.2 px/mm, checked against its 67.4 × 42.5 mm barrel. Fitted surface stations give rms 0.76 px for Example 1, 1.26 px for Example 3 and 3.55 px for Example 2. L5 is drawn 1.12 mm thick; the examples print 1.10, 2.20 and 1.70 mm for Examples 1, 2 and 3. Canon draws S3 steeper (R about 26 mm) and S5 flat, which no example does. Example 3 computes F 35.498 against its printed 35.51.

Fields changed: S8 `sd` 9.0 → 9.05, the largest value inside the default S8→S9 gap limit, which clears the axial beam at the stop's 9.05 mm marginal height (`vig.mjs` 100.0% on axis; corner 36.7% unchanged). `closeFocusM` 1e15 → 0.25, static, because neither the patent nor Canon's page states a focus motion. `subtitle`, `specs`, header comment, element roles and `diagramLabel` L1–L7 reworded or added; the "tentative" inventor line is removed, leaving Tsunefumi Tanaka as the corpus form. The US 4,629,294 name-comparator reference is dropped from the analysis.

L4 label: S-TIM25 (νd 32.10) gives paraxial g−d +0.011 mm and top-of-pupil g−d +0.291 mm; E-FD5 (νd 32.17, inside the 0.25 window) gives +0.002 and +0.279 mm; Figure 4 reads about 0 and +0.266 mm. E-FD5 is closer, by less than the ±0.02 mm plot-reading error. PBM25, the exact period row, is not in the repo catalog.

Open: unit extension of +8.13 mm (last gap 45.96 mm) gives 0.229× at 250 mm, matching retail 0.25 m and 0.23×, but no source states the mechanism, so it is not authored. Rims have not been refitted to the figures.
