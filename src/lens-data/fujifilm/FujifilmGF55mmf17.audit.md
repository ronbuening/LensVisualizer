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
