# Audit Log — Canon EF 50mm f/1.0L USM

Patent: US 4,717,245, Example 2 (Canon / Sadatoshi Takahashi, Jan 5, 1988)

---

## 2026-04-30 — Glass relabel (L1 S-BSL7 → S-BSM14; L2 S-BSM14 → S-LAL14)

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / surface 1 | `glass` | `S-BSL7 (OHARA)` | `S-BSM14 (OHARA)` | S-BSL7 is a BK7-class crown (nd=1.5163); stored nd=1.60311 matches S-BSM14 exactly (Δnd<1e-5). Confirmed by catalog-mismatches.generated.md surface 1 entry and glassRelabelCandidatesScan candidate report. |
| L2 / surface 3 | `glass` | `S-BSM14 (OHARA)` | `S-LAL14 (OHARA)` | S-BSM14 has nd=1.6031, not 1.6968; stored nd=1.69680 matches S-LAL14 exactly (Δnd<1e-5). Confirmed by catalog-mismatches.generated.md surface 3 entry and glassRelabelCandidatesScan candidate report. |

Other glass annotations verified correct or not in catalog:

- L3, L5: `S-NSL5 (OHARA)` (nd=1.51742, vd=52.4) — family identification plausible; S-NSL5 not in project catalog, falls back to Abbe approximation. Not flagged by mismatch scan.
- L4, L7, L9, L10: `S-LAH58 (OHARA)` (nd=1.883, vd=40.8) — catalog entry present, Sellmeier Δnd < 1e-5. No change.
- L6: `S-TIH53 (OHARA)` (nd=1.84666, vd=23.9) — catalog entry present, Sellmeier Δnd < 1e-5. No change.
- L8: `S-TIH6 (OHARA)` (nd=1.80518, vd=25.4) — catalog entry present, Sellmeier Δnd < 1e-5. No change.
- L11: `S-BSL10 (OHARA)` (nd=1.55963, vd=61.2) — family identification plausible; S-BSL10 not in project catalog, falls back to Abbe approximation. Not flagged by mismatch scan.

### Phase 2 — Retained-information audit

All surface radii and thicknesses back-calculated from the scaled data file and verified against US 4,717,245 Example 2 patent table. Scale factor 0.50008 applied uniformly (f=100→50 mm). Key verifications:

- R1–R19, D1–D19: all within ±0.001 mm of scaled patent value after accounting for OCR errors in the provided scan (R2 OCR read as 254.83; correct value 1254.83; D2 read as 0.9; correct 0.19; R3 read as 68.21; correct 168.21; R20 read as 42.39; correct 142.39; R21 read as 96.53; correct 961.53).
- Aspherical surface 5A (patent R5): R_eff=65.353 mm confirmed as 1/(2A)×scale = 1/(2×3.826e-3)×0.50008 = 65.35. Converted coefficients A4–A10 verified algebraically against patent B–E (R=∞ form). All within 1e-11 of calculated values.
- Aspherical surface 14A (patent R15): R_eff=−65.013 mm confirmed as 1/(2×(−3.846e-3))×0.50008 = −65.03. Converted coefficients verified similarly.
- Stop placement: D9=D10=17.88 (unscaled) = 8.941 mm (scaled); stop equidistant from L5 rear and L6 front. ✓
- ElemId assignments: cemented junction surfaces carry rear element's elemId (surface 6 → L4, id=4; surface 11 → L7, id=7). ✓
- Patent design conditions (1)–(5): all confirmed satisfied by Example 2 values (documented in analysis §7).

### Phase 3 — Spectral / metadata enrichment

Patent US 4,717,245 provides nd and vd only — no line indices (nC, nF, ng) or partial dispersion values are tabulated. No spectral enrichment is possible from this patent alone.

Existing metadata confirmed complete: subtitle, patentYear, focalLengthDesign, apertureDesign, elementCount, groupCount, maker, focusDescription all present.

### Phase 4 — Analysis sync

Updated [CanonEF50mmf1L.analysis.md](CanonEF50mmf1L.analysis.md):
- §4.1 glass table L1 row: "S-BSL7 (OHARA) / N-SK16 (SCHOTT)" + "Borosilicate crown" → "S-BSM14 (OHARA)" + "Borosilicate medium crown".
- §4.1 glass table L2 row: "S-BSM14 (OHARA) / S-BAH28 (OHARA)" + "Barium dense crown" → "S-LAL14 (OHARA)" + "Lanthanum crown". Six-digit code corrected 1696/555 → 1697/555 to match S-LAL14 code6="697555".
- §5 L1 section: glass line updated from "S-BSL7 type" to "S-BSM14 (OHARA)".
- §5 L2 section: glass line updated from "S-BSM14 type" to "S-LAL14 (OHARA)".
- §4.2 rationale: "barium dense crown (L2)" → "lanthanum crown (L2)".

### Verification

```
npm run typecheck && npm run format:check && npm run lint && npm run test
```
All passed. Catalog mismatch scan: canon-ef-50f10l surfaces 1 and 3 no longer appear in the mismatch report after relabeling.
