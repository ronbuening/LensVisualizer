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

## 2026-06-25 — Patent partial-dispersion and APD status recheck

Reviewed Example 4 Table 10 against the authored element metadata. Table 10 lists θgF for every glass row, but that does not mean every listed element should show the APD badge in the inspector. The data file now transcribes the patent partial-dispersion information as structured `dPgF` values using the project normal-line formula `ΔPgF = θgF - (0.6438 - 0.001682 * νd)`.

| Element(s) | Field | Before | After | Justification |
|---|---|---|---|---|
| L11-L33 | `dPgF` | omitted | patent-derived values from −0.00831 to +0.04980 | Table 10 publishes θgF for each material row; structured `dPgF` preserves that patent information for the chromatic fallback path, especially for unresolved code-only glasses such as 585587. |
| L13, L24, L26 | `apd` / `apdNote` | ED/Super ED rows flagged, no numeric ΔPgF in note | retained `apd: "patent"` and added ΔPgF notes | The two ED glasses are ΔPgF ≈ +0.031 and the Super ED glass is ΔPgF ≈ +0.0498, matching their role in Fujifilm's ED/Super ED count. |
| L15 | `apd` / `apdNote` | `apd: "patent"` from θgF row | retained `apd: "patent"` with ΔPgF ≈ +0.01642 | The dense flint's positive deviation is materially above the ordinary rows and supports the high-θgF chromatic-partner role in D1. |
| L14, L16, L17, L21, L22, L23, L32, L33 | `apd` / `apdNote` | `apd: "patent"` from θgF row | `apd: false`; ordinary θgF prose note removed | Their deviations are modest (about −0.0083 to +0.0053), so the patent θgF values are retained in `dPgF` without displaying them as APD special-glass rows. |

Notes:

- No radius, spacing, focus, surface-order, or glass-name changes were made.
- No semi-diameter edits were made. The existing `sd` values still follow the patent ED/2 values, except surfaces 7 and 25A where the file header documents the small render-clearance trims.
