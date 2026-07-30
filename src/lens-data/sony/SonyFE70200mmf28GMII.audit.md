# Audit Log — Sony FE 70-200mm F2.8 GM OSS II

Patent: JP 2023-039817 A, Example 2

## 2026-05-20 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L32 / S10 | `glass` | `TAFD30 (HOYA)` | `863248 — ultra-dense flint` | Patent Table 6 lists nd=1.86290, vd=24.8; no unique public coefficient-backed match found. |
| L52 / S17 | `glass` | `TAFD30 (HOYA)` | `863248 — ultra-dense flint` | Same patent row value as L32. |
| L53 / S19 | `glass` | `TAFD30 (HOYA)` | `863248 — ultra-dense flint` | Same patent row value as L32. |
| L54 / S20 | `glass` | `S-BAL41 (OHARA)` | `585594 — barium crown` | Patent Table 6 lists nd=1.58547, vd=59.4; catalog candidates were not unique. |
| L55 / S22A | `glass` | `S-BAL41 (OHARA)` | `585594 — barium crown` | Same patent row value as L54. |
| L61 / S24 | `glass` | `S-NPH53 (OHARA)` | `933209 — ultra-dense flint` | Patent Table 6 lists nd=1.93323, vd=20.9; no unique public coefficient-backed match found. |
| L62 / S25 | `glass` | `S-TIM22 (OHARA)` | `658397 — short flint` | Patent Table 6 lists nd=1.65803, vd=39.7; candidates were ambiguous. |

### Phase 2 — Retained-information audit

- Confirmed the flagged glass rows against local `patents/JP2023039817A.pdf`, Table 6. Stored nd/vd values matched the patent rows, so only labels changed.
- Non-flagged prescription fields were not fully rekeyed in this queue pass.

### Phase 3 — Spectral / metadata enrichment

- No catalog entries added. Patent-code labels preserve future upgrade paths for unsourced glasses.

### Phase 4 — Analysis sync

- Updated the companion analysis file to remove unsupported exact-match claims for L32/L52/L53, L54/L55, L61, and L62.

### Verification

- `npm run generate:glass-reports` — passed; lens cleared from `catalog-mismatches.generated.md` and `glass-relabel-by-lens.generated.md`.
- `npm run typecheck`, `npm run format:check`, `npm run lint`, and `npm run test` — passed.

## 2026-06-23 - Sony folder patent audit / APD + SD review

- Rechecked local `patents/JP2023039817A.pdf` and the current analysis sidecar against the data file.
- Prior Table 6 glass corrections remain valid; the current generated glass reports show no active Sony catalog-mismatch row for this lens.
- Updated L12 and L13 to `apd: "inferred"` for Super ED fluorophosphate class, and L31, L51, and L81 to `apd: "inferred"` for ED fluorophosphate class. The patent publishes nd/vd only for these rows, so no dPgF values are assigned.
- No R/d/nd/vd, spacing, high-index, or SD edits were needed in this pass.

## 2026-07-29 - Remaining unmatched-glass disposition

- Rechecked Example 2 / Table 6 in local `patents/JP2023039817A.pdf`; S7 remains 1.77621 / 49.60 and its R/d
  values are unchanged.
- S7 `S-LAH66 class (OHARA)` -> explicit unmatched 776496 lanthanum-glass coordinate. S-LAH66 matches νd
  but misses nd by about 0.0037, outside the resolver tolerance.
- Synchronized the L21 element narrative and glass table while retaining S-LAH66 only as a family comparison.

## 2026-07-29 - Incompatible named-label audit

- Rechecked JP 2023-039817 A Example 2, Table 6, surface 27: `R=53.755`, `d=6.52`,
  `nd=1.61669`, and `νd=44.3` match the stored L71 prescription.
- Replaced the incompatible `E-FEL6 class (HOYA)` annotation with unresolved code `617443`.
  HOYA E-FEL6 is 1.53172 / 48.84 (532488), so it cannot represent this patent row; no exact
  coefficient-backed public catalog match was found.
- Synchronized the element narrative, glass table, and source note. No prescription geometry changed.

## 2026-07-30 — L41 / 792257 source review

### Patent evidence

- Rendered and visually checked local `patents/JP2023039817A.pdf`, PDF page 21, Example 2 / Table 6.
- Surface 12 / L41 is explicitly listed under the table's `ndi` and `νdi` columns as `1.79191 / 25.7`.
- The patent supplies no glass name, supplier, secondary line index, or partial-dispersion value for this row.

### Catalog disposition

- Current first-party OHARA, HOYA, SUMITA, and Hikari coefficient data contain no d-line glass inside the runtime
  compatibility window.
- Hikari J-SF11 has the superficially similar e-line coordinate `ne = 1.791929`, `νe = 25.43`, but its published
  d-line coordinate is `nd = 1.784720`, `νd = 25.64`. Table 6 is explicitly d-line data, so that row is not a safe
  match.
- Replaced the uncertain family wording with
  `Unmatched 792257 dense flint (patent-listed; supplier unidentified)`. Prescription geometry and optical
  coordinates are unchanged; the element remains on its patent-coordinate Abbe fallback.

### Analysis sync

- Updated the L41 narrative and glass table to document the source-confirmed d-line coordinate and the rejected
  reference-line coincidence.

### Verification

- `npm run generate:glass-reports` — passed (8 files / 10 tests); active source queue reduced to four elements
  across three code families.
- `npm test -- dispersion.test.ts lensDataTyping.test.ts validateLensData.test.ts buildLens.test.ts` — passed
  (4 files / 237 tests).
- `npm run typecheck`, `npm run format:check`, and `git diff --check` — passed.
