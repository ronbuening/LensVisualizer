# Audit Log — Laowa 24mm f/14 2x Macro Probe

Patent: CN 210573001 U, Example 1

## 2026-05-20 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L7 / patent row | `glass` | `H-ZF7LA (CDGM)` | `N-SF66 / E-FDS1 class (923209)` | Example 1 lists nd=1.92286, vd=20.88; the previous CDGM label resolves to 805/255, not 923/209. |
| L11 / patent row | `glass` | `H-ZF6 (CDGM)` | `H-ZF7LA (CDGM)` | Example 1 lists nd=1.80518, vd=25.46; CDGM H-ZF7LA matches. |
| L14 / patent row | `glass` | `H-ZF6 (CDGM)` | `H-ZF7LA (CDGM)` | Same patent glass as L11. |
| L19 / patent row | `glass` | `H-ZF7LA (CDGM)` | `N-SF66 / E-FDS1 class (923209)` | Same patent glass as L7. |
| L22 / patent row | `glass` | `H-ZF6 (CDGM)` | `H-ZF7LA (CDGM)` | Same patent glass as L11. |

### Phase 2 — Retained-information audit

- Confirmed flagged rows against local `patents/CN210573001U.pdf`, Example 1 tables. Stored nd/vd values matched the patent.
- Non-flagged prescription fields were not fully rekeyed in this queue pass.

### Phase 3 — Spectral / metadata enrichment

- No catalog entries added; selected labels already resolve or fall through through known code-based classes.

### Phase 4 — Analysis sync

- Updated the analysis glass summary and affected element notes for the swapped 923/209 and 805/255 classes.

### Verification

- `npm run generate:glass-reports` — passed; lens cleared from both glass mismatch queues.
- `npm run typecheck`, `npm run format:check`, `npm run lint`, and `npm run test` — passed.

## 2026-06-24 — Full local patent audit

### Phase 1 — Glass, APD, and high-index status

- Reopened local `patents/CN210573001U.pdf` and checked Example 1 against the data file using the text layer plus rendered table pages.
- Reconfirmed the 2026-05-20 relabels for the swapped dense-flint rows: L7/L19 use the `N-SF66 / E-FDS1 class (923209)` annotation and L11/L14/L22 use CDGM `H-ZF7LA`.
- No APD or high-index metadata changes were made. ED and high-index roles remain supported by nd/vd class only where the data file already records them.

### Phase 2 — Prescription and SD check

- Checked Example 1 at f = 23.7059 mm, Fno = 14, half-field = 44.6 deg. Stored radii, thicknesses, nd/vd rows, published variables D44 and D46, and fixed BFD match the patent table after the intended data-file reductions.
- Confirmed the intentional model reductions: P1 internal flats are collapsed into a single 12 mm rod, P2 and P3 remain plane plates, the blank patent row 43 is omitted, and the single L23 focus element carries the published focus motion.
- The patent does not publish semi-diameters or effective diameters. The existing SDs remain renderer estimates, not patent-listed clear apertures.
- The SD envelope was checked against the rendered probe drawing and prescription geometry. The tiny objective section, long relay rod/plate train, larger post-relay macro section, stop placement, and rear focus-element clear apertures follow the drawing proportions and avoid irrational scaling in the viewer. No SD values were changed.

### Phase 3 — Spectral / metadata enrichment

- The patent publishes only nd and vd. No nC, nF, ng, PgF, theta_gF, dPgF, or Sellmeier coefficient source was found in the local patent.

### Phase 4 — Analysis sync

- No analysis text changes were required for this pass.

### Verification

- `npm run generate:glass-reports` — passed.
- `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm run test`, and `npm run build` — passed.
