# Audit Log — FUJIFILM FUJINON GF 110mm f/2 R LM WR

Patent: US 2018/0100988 A1, Example 1 (Tables 1-3)

## 2026-05-19 — Patent glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L11 / S1 | `glass` | `S-LAH79 (OHARA)` | `TAFD45 (HOYA; S-LAH98 equivalent)` | Patent Table 1 row 1 gives nd=1.95375, vd=32.32. Current catalog S-LAH79 is nd=2.00330; code 954323 resolves exactly to TAFD45 / S-LAH98 class glass. |
| L13 / S5 | `glass` | `S-BAM4 (OHARA)` | `567428 — high-index barium glass (patent nd=1.56732, νd=42.81)` | Patent Table 1 row 5 gives nd=1.56732, vd=42.81. No current catalog entry matches within tolerance, so the code annotation avoids a false catalog hit. |
| L14 / S6 | `glass` | `TAFD25 (HOYA)` | `883392 — high-index lanthanum glass (patent nd=1.88300, νd=39.22)` | Patent Table 1 row 6 gives nd=1.88300, vd=39.22. Current catalog TAFD25 is nd=1.90366, vd=31.32; nearby catalog glasses have vd about 40.1-40.8, outside tolerance. |
| L15 / S8 | `glass` | `S-NBM51 (OHARA)` | `S-TIM27 (OHARA)` | Patent Table 1 row 8 gives nd=1.63980, vd=34.49, matching S-TIM27 nd=1.63980, vd=34.47 within patent rounding. |
| L21 / S12 | `glass` | `S-TIH53 (OHARA)` | `S-NPH3 (OHARA)` | Patent Table 1 row 12 gives nd=1.95906, vd=17.47, matching S-NPH3 exactly. |
| L22 / S13 | `glass` | `S-LAH64 (OHARA)` | `S-LAH89 (OHARA)` | Patent Table 1 row 13 gives nd=1.85150, vd=40.78, matching S-LAH89 exactly. |
| L32 / S16 | `glass` | `S-TIM25 (OHARA)` | `E-FD8 (HOYA)` | Patent Table 1 row 16 gives nd=1.68893, vd=31.16, matching E-FD8 exactly. |

### Phase 2 — Retained-information audit

- Table 1 surfaces 1-24 were checked against `R`, `d`, and `nd`; no radius, spacing, element assignment, or refractive-index corrections were needed.
- Surface 24 was visually checked on the PDF page because OCR rendered it as `-1638.9992`; the patent table image reads `-163.9992`, matching the data file.
- Patent rows 25-26 are the cover glass / image-side stack. The data file intentionally stores the air-equivalent BF at surface 24 (`26.97` mm), matching Table 2 BF=26.97 and the analysis calculation.
- Table 3 moved spacings were confirmed at infinity and 110 cm: DD[11] 4.7000 -> 13.31 and DD[14] 18.1900 -> 9.58, with the 22.890 mm gap sum conserved.
- No aspherical block is present in the patent for Example 1; `asph: {}` remains correct.

### Phase 3 — Spectral / metadata enrichment

- No patent line-index or partial-dispersion columns are provided, so no `nC`, `nF`, `ng`, or `dPgF` fields were added.
- Existing metadata already records the patent reference, patent year, design focal length/F-number, element count, group count, mount, image format, and focus description.

### Phase 4 — Analysis sync

- Updated the element narratives and glass-selection table in [FujifilmGF110mmf2RLM.analysis.md](FujifilmGF110mmf2RLM.analysis.md) to reflect the corrected glass labels.
- Removed the unsupported claim that L14 matched HOYA TAFD25 exactly.
- Reframed vendor attribution: the patent provides nd/vd, not glass names; L13 and L14 remain code-only pending a catalog source.

### Verification

- `npm run typecheck` — passed.
- `npm run format:check` — passed.
- `npm run lint` — passed.
- `npm run test` — passed, 129 test files / 1664 tests.
- `npm test -- catalogMismatchScan glassRelabelCandidatesScan unresolvedGlassScan` — passed. Regenerated output removed this lens from `catalog-mismatches.generated.md` and `glass-relabel-candidates.generated.md`; only the two deliberate unresolved code annotations remain in `unresolved-glass.generated.md`. Generated report files were restored afterward to preserve unrelated pre-existing edits.
- After the files were overwritten by an external save, the same scoped audit edits were reapplied and `npm run typecheck` was rerun successfully.
