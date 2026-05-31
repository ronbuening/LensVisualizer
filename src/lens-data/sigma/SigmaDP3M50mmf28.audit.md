# Audit Log — Sigma DP3 Merrill 50mm f/2.8

Patent: JP 2014-126652 A, Example 3

## 2026-05-19 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L1 / 1 | `glass` | `S-LAH55 (Ohara) / TAC8 (Hoya) — Δnd = 0, ΔVd = +0.04` | `S-LAH58 (OHARA)` | Patent Example 3 row 1 lists nd=1.88300, vd=40.80; S-LAH58 round-trips the pair. |
| L2 / 3 | `glass` | `S-PHM52 (Ohara) — exact match` | `FCD515 (HOYA)` | Patent Example 3 row 3 lists nd=1.59282, vd=68.62; FCD515/FCD505 code family matches, and FCD515 is the catalog target selected. |
| L4 / 7 | `glass` | `S-NPH2 (Ohara) — exact match` | `S-LAH95 (OHARA)` | Patent Example 3 row 7 lists nd=1.90366, vd=31.32; S-LAH95 matches the 904313 code family. |
| L5 / 8 | `glass` | `S-LAH58 (Ohara) / TAC4 (Hoya) — exact match` | `S-LAH55 (OHARA)` | Patent Example 3 row 8 lists nd=1.83481, vd=42.72; S-LAH55 is the standard Ohara match. |
| L9 / 16 | `glass` | `TAFD37 (Hoya) — tentative; S-LAH65 (Ohara): Δnd = +0.0002` | `S-LAH65 (OHARA)` | Patent Example 3 row 16 lists nd=1.80420, vd=46.50; TAFD37 no longer round-trips this pair, while S-LAH65 is the nearest catalog match. |

### Phase 2 — Retained-information audit

- Checked the flagged Example 3 rows against the patent; stored `R`, `d`, `nd`, and surface labels match.
- No asphere or focus-variable spacing edits made.

### Phase 3 — Spectral / metadata enrichment

- Updated L2 APD note from the old S-PHM52 wording to FCD515.
- No new patent line-index values were available.

### Phase 4 — Analysis sync

- Updated element prose and the glass selection summary for L1, L2, L4, L5, and L9.

### Verification

- `npm test -- dispersion` — passed.
- `npm run typecheck` — passed.
- `npm run generate:glass-reports` — passed; lens removed from the relabel-by-lens queue.

## 2026-05-31 - Catalog mismatch remainder audit

### Phase 1 - Glass correction

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L3 / 4 | `glass` | `H-ZF52 (CDGM) — exact match, unconfirmed in Ohara/Hoya/Schott` | `NBFD15 (HOYA)` | Patent Example 3 row 4 lists nd=1.80610, vd=33.27. The coefficient-backed H-ZF52 catalog entry in this project is the 1.84666 / 23.78 dense-flint row, so the label was resolving to the wrong glass. Hoya NBFD15 round-trips the patent pair. |

### Phase 2 - Patent and SD review

- Checked the local `patents/JP2014126652A.pdf` Example 3 table. Row 4 gives R=-133.1738, d=0.8000, nd=1.80610, and vd=33.27, matching the stored cemented L2/L3 junction surface and L3 element values.
- Rendered Figure 11, the Example 3 lens-section figure. The figure matches the 10-element layout, internal stop, and rear aspherical L10 used by the data file.
- The patent does not publish clear apertures or semi-diameters. Existing SDs are inferred from ray and gap constraints, so no SD edits were made.

### Phase 3 - Analysis sync

- Updated the L3 glass prose and glass-summary table from the erroneous H-ZF52 exact-match claim to Hoya NBFD15.
