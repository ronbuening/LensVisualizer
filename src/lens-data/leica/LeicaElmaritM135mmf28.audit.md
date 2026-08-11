# Audit Log — Leica Elmarit-M 135mm f/2.8

Patent: US 3,108,152, Example 2 / Table II / claim 2

## 2026-06-24 — Folder audit

- Rechecked local `patents/US3108152.pdf` OCR for Table II and claim 2.
- Retained the current e-line glass labels and the Example 2 transcription. The patent explicitly tabulates `n_e` and `ν_e`, so the stored constants remain tied to the published e-line prescription rather than d-line catalog coefficients.
- Rechecked APD/high-index status: no partial-dispersion data are published and no APO claim is made, so all elements remain non-APD. High-index language is limited to ordinary high-index crown/flint roles implied by the e-line constants.
- No patent clear-aperture or semi-diameter table was found. Current SDs remain drawing/ray estimates sized for the f/2.8 long-focus beam and the stop position.

## 2026-07-30 - Reference-line metadata

- Added `indexReference: "e"` to all five elements because the stored `nd` / `vd` slots preserve patent
  `ne` / `νe` values.
- The runtime and generated reports now reject d-line catalog substitution structurally rather than relying on annotation wording.
- No source values or prescription geometry changed.

## 2026-08-11 — Phase 95 SF5 e-line recovery

- Re-rendered Example 2 / claim 2 on local patent PDF page 3 and confirmed L4 at `ne = 1.67764`, `νe = 32.0`.
- The legacy Schott SF5 curve reproduces `1.677639 / 31.971`, so L4 now uses its full catalog curve.
- Strict coverage rises by one surface. The N-SF8-class L5 remains unmatched; no source values or geometry changed.
