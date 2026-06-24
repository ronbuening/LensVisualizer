# Audit Log — Laowa 15mm f/4 Wide Angle 1:1 Macro

Patent: CN 205427291 U, Example 2

## 2026-05-20 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L3 / S5 | `glass` | `H-ZLAF50D (CDGM)` | `S-LAH95 / TAFD25 class (904313)` | Patent Example 2 lists nd=1.90366, vd=31.31; OHARA S-LAH95 code 904313 matches. |
| L5 / S10 | `glass` | `H-ZLAF50D (CDGM)` | `S-LAH95 / TAFD25 class (904313)` | Same patent glass as L3. |
| L6 / S12 | `glass` | `H-FK71 (CDGM)` | `H-QK3L (CDGM)` | Patent Example 2 lists nd=1.48749, vd=70.44; CDGM H-QK3L matches. |
| L9a / S20 | `glass` | `H-ZLAF50D (CDGM)` | `S-LAH95 / TAFD25 class (904313)` | Same patent glass as L3. |
| L9b / S21 | `glass` | `H-FK71 (CDGM)` | `H-QK3L (CDGM)` | Same patent glass as L6. |

### Phase 2 — Retained-information audit

- Confirmed flagged rows against local `patents/CN205427291U.pdf`, Example 2 tables. Stored nd/vd values matched the patent.
- Non-flagged prescription fields were not fully rekeyed in this queue pass.

### Phase 3 — Spectral / metadata enrichment

- No catalog entries added; selected glasses already resolve through the project catalog.

### Phase 4 — Analysis sync

- Updated the analysis special-glass summary, element notes, and glass table for the relabeled rows.

### Verification

- `npm run generate:glass-reports` — passed; lens cleared from both glass mismatch queues.
- `npm run typecheck`, `npm run format:check`, `npm run lint`, and `npm run test` — passed.

## 2026-06-24 — Full local patent audit

### Phase 1 — Glass, APD, and high-index status

- Reopened local `patents/CN205427291U.pdf`; the PDF text layer is not usable for the tables, so Example 2 pages were rendered and checked visually.
- Reconfirmed the 2026-05-20 glass relabels for L3/L5/L9a to `S-LAH95 / TAFD25 class (904313)` and L6/L9b to CDGM `H-QK3L`.
- No APD or high-index metadata changes were made. The patent does not provide anomalous-partial-dispersion terms beyond the published nd/vd values.

### Phase 2 — Prescription and SD check

- Checked Example 2 at f = 16.0 mm, Fno = 4.1, half-field = 55.199 deg. Stored radii, thicknesses, nd/vd rows, and the published focus variables D13 and D22 match the patent table.
- The patent does not publish semi-diameters or effective diameters. The existing SDs remain renderer estimates, not patent-listed clear apertures.
- The SD envelope was checked against the rendered patent drawing and prescription geometry: the large first meniscus, narrow front negative section, stop, and compact rear macro-corrector doublets follow the drawing proportions without implausible clear-aperture jumps. No SD values were changed.

### Phase 3 — Spectral / metadata enrichment

- The patent publishes only nd and vd. No nC, nF, ng, PgF, theta_gF, dPgF, or Sellmeier coefficient source was found in the local patent.

### Phase 4 — Analysis sync

- No analysis text changes were required for this pass.

### Verification

- `npm run generate:glass-reports` — passed.
- `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm run test`, and `npm run build` — passed.
