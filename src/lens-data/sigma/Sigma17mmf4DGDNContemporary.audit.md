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
