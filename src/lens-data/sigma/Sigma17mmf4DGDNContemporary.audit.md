# SIGMA 17mm f/4 DG DN | Contemporary — source and reconstruction audit

## 2026-11-02 — Whole-example construction and finite endpoint

- Transcribed JP 2024-062005 A, whole Example2, without radius, thickness, index, field, F-number or image-plane retuning. Alternative embodiments remain separate.
- Explicit d-line indices and conventional1+K terms retained; unprinted higher orders are implementation truncation, not source zeros.
- Literal infinity baseline is preserved separately. Added the printed finite endpoint with an explicit first-surface conjugate. Intermediate gap interpolation is implementation geometry; finite MTF is unavailable between documented states.
- G2, S12–S16, moves approximately1.655mm toward the object. The unequal1.6550/1.6551mm interval changes retain a0.0001mm track residual; no gap is adjusted to enforce exact fixed-front/fixed-rear motion. The printed stop is fixed before G2.
- Inferred caps were frozen from the source figures, independent first-order floors and geometry before tracing. Nominal/minus5% cases passed; plus5% source-geometry failures remain recorded. Native render trim is zero.
- Native reference/design diffraction validated the stated, qualified field scopes through sampled50lp/mm. Prior-grid arrays, raw pupil launch/hit records (not precomputed OPL arrays) and all rejected attempts remain in the reproducibility evidence. No independent physical-OPL or factory measurement claim follows.
- Near-angle, image-height and native-format scopes are distinguished; source residual defocus and strong inferred-cap clipping are preserved. Default UI refocus diagnostics are separate.

## 2026-11-03 — Deployment validation and cleanup

- Source re-read against the JP 2024-062005 A page images (PDF pages 10, 12–13, 23): 20 surface rows (R, d), 10 nd/νd pairs, the stop at S11, 48 aspheric values (K, A4–A16 on S1, S2, S15–S18, standard 1+K form per ¶0093) and d0, d11, d16 and BF at infinity and at the 126 mm state. No mismatches.
- First order, patent → model: f 17.50 → 17.4989 mm; F/4.09 → 4.09; TL 67.50 → 67.5000 mm; BF 1.0000 → 1.0000 mm behind the 2.1 mm plate; the 51.765° chief ray lands at 21.630 mm (printed Y 21.63). Group focal lengths −318.16 / 16.33 / −35.25 → −318.21 / 16.327 / −35.248 mm; conditions (1), (3), (4), (5) reproduce. Close state: d0 58.5 mm, magnification −0.2565, object to image 126.0001 mm. LSA −0.021 mm (infinity) and −0.30 mm (close) match Figs. 7–8; corner distortion −2.6% matches Fig. 7.
- Maker comparison: Sigma's section shows 9 elements / 8 groups with aspherical L1, L8, L9 and SLD L2, L6, matching Example 2. Examples 1 and 4 share the layout and fit equally on construction; Sigma's 103.7° is the nominal 2·atan(21.63/17) and does not discriminate. Example 2 has the largest printed close-up magnification (1:3.90 against 1:3.99 and 1:4.02; retail 1:3.6). Product released April 2023.
- Validators: surface audit clean; image circle 100%; aperture within 3%; no axial clipping; corner relative illumination 73%.
- Data step: `cemented` tags D1 → C1 (gaps are d-numbered), `doublets` C1 over S12–S14 added, `focus.description` now states the printed 126 mm state and the retail 0.12 m / 1:3.6. Coordinator relabelled all nine `glass` strings to HOYA catalog equivalents.
- Wording step: header comment, `subtitle`, `specs`, `source.example.label` (Numerical Example 2), element roles, conjugate and rear-plate source notes reworded; analysis corrected (L9 is biconcave, not a meniscus; example choice argued on magnification, not angle of view), glass named as catalog equivalents, process wording and run-together text removed. A sentence copied from another lens's audit was deleted from the section above. No optical values changed.

## 2026-11-03 — Semi-diameter pass against the patent figure

Source: JP 2024-062005 A, PDF p. 23, Fig. 6 (Numerical Example 2 section at infinity; the list of drawings on p. 4 names Fig. 6 as Example 2's lens construction), with Fig. 9 (p. 24) transverse aberration at infinity. Measured on the native 796 dpi CCITT raster. The section carries no ray bundles; the upper half is clean below the group brackets apart from the stop leader in the G1–G2 air space, the lower half carries the G2 focus bracket, and upper and lower rim readings agree to 1 px.

Scale: the axis is level across the sheet (page row 1847 at both ends). Axially, the S1 to image-plane span is 2144.5 px for 67.5 mm, 31.76 px/mm, and every vertex from S2 to the plate and image plane sits within 1 px of the infinity prescription at that scale. Radially the sheet is stretched: circle fits to S4 (R 9.73) and S13 (R −8.89) give 32.55 to 32.73 px/mm from 80 to 240 px off axis, the weaker surfaces scatter around 32.5, and the stop tick's inner end at 108 px gives 32.55 px/mm against the 3.317 mm stop radius. Heights use 32.6 px/mm; at the axial scale every rim would read 2.7 % high.

| Surface | Before | Fig. 6, mm | After | Evidence |
| --- | ---: | --- | ---: | --- |
| 1A | 15.5 | 14.75 | 15.5 | kept, 0.95 |
| 2A | 11.5, land 15.5 | curve end 11.1–11.2, edge 14.75 | 11.5, land 15.5 | kept; 11.2 costs 1.8 and 11.1 costs 4.7 corner points |
| 3 | 12.2 | 11.72 | 12.2 | kept, 0.96 |
| 4 | 8.5, land 12.2 | curve end 8.0, edge 11.72 | 8.2, land 12.2 | land 0.5 mm nearer the drawn position; 8.0 costs 3.7 points, 8.1 costs 0.6, 8.2 none |
| 5 | 8.7 | 8.37 | 8.7 | kept, 0.96 |
| 6 | 8.7 | curve end 7.5–7.65, land to 8.37 | 7.6, land 8.7 | drawn land; the beam needs about 7.3 (7.2 costs 1.0) |
| 7 | 7.1 | curve end 7.18 ± 0.12, land to 7.61 | 7.1, land 7.6 | drawn land; 7.0 costs 1.5 points; 7.2 would add 1.4 and is inside the reading, so the rim stays |
| 8 | 7.1 | 7.61 | 7.6 | L4 drawn taller than L5 |
| 9, 10 | 7.5 | 6.96 | 7.0 | L3, L4, L5 drawn stepping down; 6.5 costs 1.2 points |
| 12–14 | 7.4 | 7.45 (S12/S13), 7.58 (S14) | 7.4 | kept; the figure ends L6 at zero edge thickness, which the model's L6 reaches near 7.6 mm |
| 15A, 16A | 11.3 | 10.86 | 11.3 | kept, 0.96 |
| 17A | 11.7 | curve end 10.56 ± 0.1, land to 11.41 | 10.6, land 11.7 | drawn land; 10.5 still costs nothing |
| 18A | 11.7 | curve end 10.91 ± 0.1, land to 11.41 | 10.9, land 11.7 | drawn land; 10.7 costs 0.9 points |

Outer edges of L1, L2, L3, L8 and L9 read 0.95 to 0.98 of the file, a common ratio, so the drawn size order L1 > L2 > L9 > L8 > L3 > L4 > pair > L5 holds and those edges are kept. The starting file had L4 at 7.1 below L5 at 7.5, the reverse of the drawn step; L4 now rises to the figure and L5 comes down to it. The S2 and S4 curve ends sit on the corner beam, so the light rule holds them above the figure: the S2 land stays 0.28 mm and the S4 land 0.27 mm deeper than drawn (it was 0.77 mm), and L2's top flange is 3.71 mm long against 3.57 drawn (4.21 before). With the S7 land at sag(7.1) = −0.909 mm and S6 at +0.501 mm at 7.6 mm, L3 and L4 sit 0.14 mm apart at L4's rim; the figure draws 0.13 mm. The 1.410 mm combined sag in the 1.550 mm gap is refused at gapSagFrac 0.90 and admitted at 0.91, now set in `checks`; the faces do not cross. The added lands on L9 make its top 3.6 mm long, as drawn (4.1 mm before).

None of the six aspheric faces changes slope sign inside its rim (scanned to 12.5 mm, S1 to 17 mm and S2 to 16 mm). Departures at the new rims: S17 −173.926 µm at 10.6 mm, S18 124.646 µm at 10.9 mm; the analysis table carries them.

Fan check: Fig. 9's meridional fans, read in units of the 0 % half-width (152 px), end at −1.033/+1.007 (30 %), −1.132/+1.066 (50 %), −1.329/+1.053 (70 %), −1.408/+0.934 (90 %) and −1.270/+0.724 (100 %). The model, measured across the beam and normalised to its axial half-width, gives −1.063/+1.008, −1.127/+1.042, −1.180/+1.075 (all stop-limited), −1.046/+0.822 and −0.871/+0.666, with S7 ending the lower and S14 the upper fan at 90 % and 100 %. The stop-limited fields agree within 3 % except the 70 % lower end, which the figure draws 13 % past the model's stop limit, so the plot's pupil coordinate is not settled. Read at face value the patent passes more of the corner beam than the model on both sides, which argues against cutting any rim and is consistent with keeping S7 and S14; no rim moved on the fans.

Clearance and light: the F/4.09 axial marginal ray clears every rim at infinity and at the 126 mm state; no surface clips the axial beam or blocks the corner chief ray; the 51.765° chief ray lands at 21.630 mm; the image-circle check and traced field coverage pass at 100 %. Engine half-field 51.765°, F/4.09 and stop radius 3.317 mm are unchanged. Wide open, geometric transmission is 73.3 % at the 51.8° corner at infinity and 91.9 % at 51.4° at the 126 mm state, the same as the starting rims at every sampled field of both states, so the illumination quoted in the analysis stands and the beams at its MTF fields are unchanged. Taken alone against the unvignetted corner bundle, the S17 and S18 rims would trim 29 % and 35 % of one side; S14 removes those rays first. S14 remains the main corner limiter (opening it to 8.0 mm would add 5.6 points), then S7 (2.5 points at 7.6 mm). The near state is the printed one: d0 58.5 mm plus the 67.5001 mm track gives 126.0001 mm object to image, magnification −0.2564.

Maker check: Sigma's construction drawing (object at left, not to scale) shows 9 elements in 8 groups with L1, L8 and L9 aspherical and L2 and L6 SLD, the iris between L5 and L6, and L6 as the front member of the cemented pair, as in Example 2. Its proportions differ from Fig. 6: L3, L4 and L5 grow slightly toward the stop where Fig. 6 draws them stepping down; L1 and L2 are drawn with stepped outer flanges rather than single flat lands; L9's rim is a step on its rear face rather than lands on both faces; and L6 is drawn noticeably shorter than L7. The patent figure governs.
