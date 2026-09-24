# Audit Log — FUJIFILM GF55mmF1.7 R WR

Patent: US 2023/0341664 A1, Example 1 (Tables 1-3)

## 2026-05-19 — Six-digit Sellmeier source recheck

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L24 / S11-S12 | `glass` | `Unmatched (molded lanthanum-crown class, 772/493 code)` | `772493 — molded lanthanum-crown class (no exact public catalog match)` | Patent Table 1 row 11 gives nd=1.77210, vd=49.30 for the post-stop aspherical element. Public catalog searches did not locate a coefficient-backed 772493 match, so the unbroken code is retained for future resolver backfill. |

### Notes

- The local patent PDF is image-only; Table 1 was checked visually on page 34 of the local render.
- L34 remains a close E-FD8/M-FD80 class annotation; this pass only changed the unresolved L24 label.
- Updated [FujifilmGF55mmf17.analysis.md](FujifilmGF55mmf17.analysis.md) to use the 772493 code label consistently.
- Batch verification is recorded in [six-digit-glass-codes-missing-sellmeier-reviewed.md](../../../agent_docs/generated/six-digit-glass-codes-missing-sellmeier-reviewed.md).

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Re-read Example 1 Table 1 on PDF page 34 (printed page 8) at 250 dpi: surface 25 d = 17.4498; surfaces 26–27 are
  the optical member PP, 3.2000 mm, nd 1.51680, νd 64.20; 27 → Sim is 1.0582 mm. G3 is fixed, so the gap is the same
  at infinity and closest focus. Glass label N-BK7 (1.51680 / 64.2 class; resolver-compatible).
- Surface 25A now stores the patent's 17.4498 mm instead of the folded 20.6177046414 mm, with `rearPlates` PP and
  gapAfter 1.0582 mm. Paraxial check against the previous data: EFL identical and defocus unchanged at both focus
  keyframes (the old fold was exact). Physical track grows by 1.090 mm, matching the analysis's 122.508 mm physical
  front-vertex-to-focal-plane figure.
