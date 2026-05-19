# Audit Log — FUJIFILM FUJINON GF 20-35mm f/4 R WR

Patent: US 2022/0236544 A1, Example 10 (Tables 28-30)

## 2026-05-19 — Six-digit Sellmeier source recheck

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L22 / S10-S11 | `glass` | `Unmatched (light dense flint, 689/312; no exact public catalog match confirmed)` | `E-FD8 (HOYA, 689312 code)` | Patent Table 28 row 10 gives nd=1.68863, vd=31.20, θgF=0.60109. HOYA's cross-reference lists E-FD8 and M-FD80 at code 689312, and the project already has coefficient-backed E-FD8; the 0.00030 nd offset is small enough to use as a code-family Sellmeier source. |

### Notes

- No changes were made to L34 / 496813; it remains an unmatched ED fluorophosphate near the FCD1/S-FPL51 family.
- Updated [FujifilmGF2035mmf4.analysis.md](FujifilmGF2035mmf4.analysis.md) to distinguish the E-FD8 code-family assignment from a patent-confirmed exact melt.
- Batch verification is recorded in [six-digit-glass-codes-missing-sellmeier-reviewed.md](../../../agent_docs/generated/six-digit-glass-codes-missing-sellmeier-reviewed.md).
