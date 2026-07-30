# Audit Log — Leica Elmarit-R 35mm f/2.8

Patent: FR 1 471 493, single numerical prescription

## 2026-06-24 — Folder audit

- Rendered local image-only `patents/FR_1471493_A.pdf` and checked the table and optical-section drawing pages.
- Retained the current e-line prescription and glass labels. The patent table visibly publishes `n_e` and `ν_e`, not d-line constants.
- Rechecked APD/high-index status: no partial-dispersion data or APO claim are present, so all elements remain non-APD. The high-index barium/dense-flint roles remain family-level inferences from the patent constants.
- The drawing supports the existing large negative front element, compact rear cluster, and narrow stop-region throat. No clear-aperture or semi-diameter table is published, so current SDs remain drawing/ray estimates.

## 2026-07-29 - E-line catalog-mismatch disposition

- Rechecked the single prescription in local `patents/FR_1471493_A.pdf`; R, d, ne, and νe remain unchanged.
- S6 `SK16 / N-SK16 class` -> explicit unmatched SK16-class e-line crown at 1.62410 / 60.10.
- S10 `BaF13-class` -> explicit unmatched BaF13-class e-line barium flint at 1.67340 / 46.90.
- Modern d-line catalog rows remain family comparisons only; the companion analysis now states that distinction.

## 2026-07-30 - Reference-line metadata

- Added `indexReference: "e"` to all seven elements because the stored `nd` / `vd` slots preserve patent
  `ne` / `νe` values.
- The runtime and generated reports now reject d-line catalog substitution structurally rather than relying on annotation wording.
- No source values or prescription geometry changed.
