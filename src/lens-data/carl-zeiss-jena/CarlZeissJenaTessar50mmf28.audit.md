# Audit Log — Carl Zeiss Jena Tessar 50mm f/2.8

Patent: FR 1.066.698, Example 1

## 2026-05-19 — Six-digit Sellmeier source recheck

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L3 / rear doublet front element | `glass` | `574425 LF` | `574425 — light flint (no exact public catalog match)` | FR 1.066.698 Example 1 lists L3 as nd=1.57380, vd=42.5. Public catalog searches did not locate a coefficient-backed 574425 match; the closest historic LF references remain family-level only. |

### Notes

- The patent PDF is image-only locally, so the Example 1 table was checked visually on page 1.
- L1 and L4 retain their existing modern-reference annotations; L3 remains code-labeled to avoid a speculative catalog resolution.
- Batch verification is recorded in [six-digit-glass-codes-missing-sellmeier-reviewed.md](../../../agent_docs/generated/six-digit-glass-codes-missing-sellmeier-reviewed.md).

## 2026-06-25 - Full-folder patent recheck

### Source Note

- Rechecked the local FR 1.066.698 PDF visually because the file is image-only. Example 1 remains the source for the current data file.
- Confirmed the f=100 table values and the 0.500568 scale used in the data file, including the explicit b1 / b2 stop placement around the diaphragm.

### Phase 1 - Glass / APD / high-index status

- Retained L1 and L4 modern-reference annotations because they remain close catalog-family matches for the patent nd/vd pairs.
- Retained L2 and L3 as unresolved code / family-level labels. No new coefficient-backed public match or APD line-index data was identified.

### Phase 2 - SD review

- The patent drawing does not publish clear apertures. Existing SDs remain consistent with the drawing proportions and the rendered runtime layout.
- Temporary Zeiss Jena diagnostic test - passed; runtime trim diagnostics empty for this lens.
