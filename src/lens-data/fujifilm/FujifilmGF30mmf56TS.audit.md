# Audit Log — FUJIFILM FUJINON GF30mmF5.6 T/S

Patent: WO 2024/195273 A1, Example 4 (Tables 10-12)

## 2026-05-19 — Six-digit Sellmeier source recheck

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L11 / S1-S2 | `glass` | `Unmatched moldable glass (585/587; patent-listed)` | `585587 — moldable aspherical glass (patent-listed; no exact public catalog match)` | Example 4 Table 10 lists surface 1 with nd=1.58480, vd=58.71, θgF=0.54116. No coefficient-backed public catalog match was found, so the unbroken six-digit code is retained for future resolver backfill. |
| L25 / S20-S21 | `glass` | `Unmatched moldable glass (585/587; patent-listed)` | `585587 — moldable aspherical glass (patent-listed; no exact public catalog match)` | Example 4 Table 10 lists surface 20 with the same nd=1.58480, vd=58.71, θgF=0.54116. Same disposition as L11. |
| L31 / S24-S25 | `glass` | `Unmatched moldable glass (585/587; patent-listed)` | `585587 — moldable aspherical glass (patent-listed; no exact public catalog match)` | Example 4 Table 10 lists surface 24 with the same nd=1.58480, vd=58.71, θgF=0.54116. Same disposition as L11. |

### Notes

- The local WO PDF is image-only; the Example 4 table was cross-checked against the searchable US family publication text surfaced by Justia.
- Updated [FujifilmGF30mmf56TS.analysis.md](FujifilmGF30mmf56TS.analysis.md) to use the unbroken 585587 code label consistently.
- Batch verification is recorded in [six-digit-glass-codes-missing-sellmeier-reviewed.md](../../../agent_docs/generated/six-digit-glass-codes-missing-sellmeier-reviewed.md).
