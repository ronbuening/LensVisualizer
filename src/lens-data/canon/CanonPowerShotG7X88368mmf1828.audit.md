# Audit Log - CANON POWERSHOT G7 X 8.8-36.8mm f/1.8-2.8

Patent: US 2016/0062096 A1, Numerical Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US20160062096A1.pdf`. The patent publishes both Fig. 1 and an "Effective diameter" column in the Numerical Example 1 surface table.
- The table lists full effective diameters, and the stored `sd` values are one half of those entries, including the stop. The rendered table confirms the leading digits that OCR drops on several rows.
- Fig. 1 supports the same envelope: a large front L1 group, a smaller variator group, a tight stop, compact L3/L4/L5 groups, and only modest re-expansion at the rear.
- No SD values changed because the data already preserve the patent-published effective diameters.

### Verification

- `npm test -- elementRenderDiagnostics`
