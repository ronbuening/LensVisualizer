# Audit Log — Leica Elmar-M 135mm f/4

Patent: DE 1 183 707 B, single worked prescription

## 2026-06-24 — Folder audit

- Rendered local image-only `patents/DE_1183707_B.pdf` and checked both the claim table and drawing pages.
- Confirmed the patent publishes e-line constants. L2 is `n_e = 1.58403`, `ν_e = 41.4`, near light-flint territory but not a verified exact public catalog match.
- Updated L2 to an explicit `Unmatched (...)` e-line label so the resolver does not treat `584/414` as a d-line six-digit glass code.
- Rechecked APD/high-index status: the patent explicitly aims for ordinary inexpensive glasses and gives no partial-dispersion data, so all elements remain non-APD and no high-index/APO upgrade is supported.
- The drawing supports the existing broad front/central groups, narrow post-r6 stop throat, and smaller rear meniscus proportions, but no clear-aperture or semi-diameter table is published. Current SDs remain drawing/ray estimates.

## 2026-07-29 - Remaining e-line mismatch disposition

- Rechecked the single worked prescription in local `patents/DE_1183707_B.pdf`; S5 remains ne=1.60718,
  νe=37.80 and its R/d values are unchanged.
- S5 `F5 class (Schott)` -> explicit unmatched F5-class e-line flint. The modern F5 d-line row remains a
  comparison only. Synchronized the L4 element description and glass table.

## 2026-07-30 - Reference-line metadata

- Added `indexReference: "e"` to all five elements because the stored `nd` / `vd` slots preserve patent
  `ne` / `νe` values.
- The runtime and generated reports now reject d-line catalog substitution structurally rather than relying on annotation wording.
- No source values or prescription geometry changed.

## 2026-08-11 — Phase 95 F5 e-line recovery

- Re-rendered the worked table on local patent PDF page 1 and confirmed L4 at `ne = 1.60718`, `νe = 37.8`.
- With e-line-aware resolution now available, the legacy Schott F5 curve reproduces `1.607182 / 37.766`; removed
  the obsolete unmatched guard from L4.
- Strict coverage rises by one surface. L2 and the N-SF8-class L5 remain unmatched; no source values or geometry
  changed.
