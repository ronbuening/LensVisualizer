# Source and reconstruction audit

All five supplied transport packets passed exact byte-count/SHA256 checks, and all12embedded source members were decoded and verified. The original packets are retained. Full primary originals remain unchanged in the source archives linked by the cards; local Nokton/Macro access is the selected primary numerical/figure pages, not a claim of viewing every full-PDF pixel here.

Patent PDF5 and maker1978 crop directly viewed; front meniscus, cemented pair, separated inner negative and rear positive pair. Cap endpoints distinguished from beveled/outer envelope. Nominal stop55% of central axial gap is schematic-inspired, not printed/calibrated.

Native source radius/interval/index/Abbe values remain literal, with only the declared Pancolar0.5 dimensional scale. All three authored image planes follow printed source intervals. Source residuals and raw/failed/rejected hypotheses remain explicit.

The50% and60% alternatives retain the same source optics, total central air gap, frozen SDs and printed image plane. Their wide-open native source-angle MTF runs each converge at0°/11.5°/23°. These are stop-hypothesis sensitivities, not evidence that either plane was historically used.

Current geometry accepts the frozen nominal case with zero hidden trim; exact operating-disk checks cover every advertised modeled aperture. Normal source-angle pupils retain losses and overlapping raw/certified categories. Native MTF is reference/design and conditional; no SD/stop/source-plane choice was selected by more favorable contrast.

Finite tables are preserved outside the initial infinity-only implementation. Canonical closeFocusM1e15 is used without a UI patch (closed 2026-11-02: `closeFocusM` is now 0.35, static). Modeled stop-down controls are not asserted to prove the minimum retail aperture.

The reviewed1978 maker crop names Praktica variants but does not explicitly identify a camera fitting. Mount metadata is left unset pending an explicit primary fitting source (closed 2026-11-02: `lensMounts` is now `["m42"]`); the50mm/f1.8 MC six/five model is distinct from prior f/2 and six/four entries.

## 2026-11-02 — Deployment validation and wording pass

Source re-read from the 300 dpi scan of DD 77 830: 11 radii, 10 thicknesses and air spaces, s′ and 6 nd/νd pairs from the single table on Blatt I, no mismatches at the 0.5× scale. Nineteen of the 21 R and d cells back out to round millimetre values at k = 1.9119 (f ≈ 52.30 mm, s′ = 38.025 mm), which confirms those digits independently; r6 and r7 are not round. The patent prints no close-focus data and no aberration plots. All claim 1 conditions hold: l3 = 0.038 f, r3 + r5 + |r6| + |r9| = 1.646 f, nII − nIII = 0.0784, νdII − νdIII = 20.3, νdV − νdIV = 23.3.

First-order values, patent then model at 0.5×: f 50.00 and 50.0229 mm; F/1.8 and 1.800; back focus 36.350 mm and 36.3805 mm paraxial, with the final gap held at the printed 36.350 mm; half-field 23° and a chief ray of 20.85 mm at 23.00°. Real-ray LSA is +0.189 / −0.089 / −0.152 / −0.115 mm at pupil 1 / 0.85 / 0.7 / 0.5.

The residuals of −0.0305 mm in back focus and +0.0229 mm in EFL are larger than table rounding explains. A single-slip search over 3087 digit, sign, transposition, dropped-digit and column-swap variants found one joint fit: n3 1.5995 → 1.5992 gives f 100.003 and s′ 72.698 at f = 100, or 50.0017 and 36.3488 mm here. The scan reads 1,5995 clearly, the claim limit on nII − nIII does not separate the two values, and chance is not excluded, so the printed value stands. L3 is also the only element with no catalog equivalent.

The patent figure is isotropic by the r1 and r11 sags. Vertices agree with the table, and the iris is drawn at 56.5–57.3 % of l2, against the modeled 55 %. The 1978 catalogue section shows the same six elements in five groups, the same bevels on the rear of III and the front of IV, and the same nearly flat r7 and r8. Read from the upscaled crop, IV sits about 2 to 2.5 units rearward at f = 100 and the IV–V air space reads about 2.5 against 3.824; the line width of about 1.4 units limits that reading. The catalogue draws no stop.

Fields changed in this pass: data header comment, `subtitle`, `specs`, the six element `role` strings and `focus.description`. The analysis lost its process wording, test-run counts and solver columns, and its first-order heading was renamed. Its contrast table was rounded to three decimals from the earlier run and was not recomputed. Its glass text now follows the catalog-equivalent labels, and its focus text follows the static model.

Open: rim pass. An isotropic figure reading at 0.5× gives S1–2 14.6, S3–4 13.2, S5 about 10.4, S6 cap 9.2–9.4, S7–9 11.3 and S10–11 12.7 mm; current rims run 4–5 % larger, and S6 10.6 exceeds the figure, whose cap falls below the 9.57 mm axial beam. A trial at 14.6/14.6/13.2/13.2/10.4/9.7/11.3/11.3/11.3/12.7/12.7 gives vignetting of 47 % and 34 % at 20.9° and 23.8°, against 55 % and 41 % now. A rim change must refresh the rim list, the transmission figures and the contrast table in the analysis.

Open: production scale. The design scale is 0.52304×, the model uses 0.5× for the marketed 50 mm, and no measured focal length was found.

Open: MC in Exakta is unconfirmed, so `lensMounts` stays `["m42"]`. No maker source states the focus mechanism, so the model stays static.
