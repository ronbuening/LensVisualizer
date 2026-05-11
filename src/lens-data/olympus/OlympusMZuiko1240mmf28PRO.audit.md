# Audit Log — Olympus M.Zuiko Digital ED 12-40 mm f/2.8 PRO

Patent: US 2014/0139720 A1, Example 5 (Numerical Example 5, ¶0259; cross-section FIGS. 5A-5C)
Catalog version: ab3a508

## 2026-05-11 — Patent audit, glass relabel, and SD refinement

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L2 / S2 | `glass` | `TAC4 class (HOYA) — lanthanum crown (697/555)` | `S-LAL14 (OHARA) — lanthanum crown (697555)` | Patent ¶0259 row 2 gives nd=1.69680, vd=55.53; catalog S-LAL14/code 697555 round-trips to the stored constants. |
| L3 / S4 | `glass` | `Lanthanum class (743/493), moldable` | `S-LAM60 (OHARA) — lanthanum (743493)` | Patent ¶0259 row 4 gives nd=1.74320, vd=49.29; catalog S-LAM60/code 743493 matches the stored nd and nominal Abbe code. |
| L6 / S9 | `glass` | `S-LAM66 (OHARA) / TAF1 class (HOYA) — (773/496)` | `S-LAH66 (OHARA) — high-index lanthanum (773496)` | Patent ¶0259 row 9 gives nd=1.77250, vd=49.60; the old label resolved to S-LAM66 (nd=1.801), while S-LAH66/code 773496 matches. |
| L9 / S16 | `glass` | `TAFD30 class (HOYA) — dense flint (805/254)` | `S-TIH6 (OHARA) / SF6 (Schott) — dense flint (805254)` | Patent ¶0259 row 16 gives nd=1.80518, vd=25.42; the old label resolved to TAFD30 (nd=1.883), while S-TIH6/SF6 code 805254 matches. |
| L11 / S19 | `glass` | `LAH class (806/409), likely moldable` | `S-LAH53 (OHARA) — high-index lanthanum (806409)` | Patent ¶0259 row 19 gives nd=1.80610, vd=40.88; catalog S-LAH53/code 806409 matches the stored nd and nominal Abbe code. |
| L12 / S20 | `glass` | `Extreme dense flint (946/180), TAFD45 class (HOYA)` | `946180 — extreme high-dispersion dense flint (patent nd=1.94595, νd=17.98)` | Patent ¶0259 row 20 gives nd=1.94595, vd=17.98. No current catalog entry matches; the code-based label avoids the false TAFD45 match. |
| L13 / S22 | `glass` | `Ultra-high-index dense flint (2001/255)` | `TAFD40 (HOYA) — ultra-high-index dense flint (001255)` | Patent ¶0259 row 22 gives nd=2.00069, vd=25.46; catalog TAFD40/code 001255 matches. |

### Phase 2 — Retained-information audit

- Surface radii, axial spacings, refractive indices, Abbe numbers, zoom gaps, focus gaps, and focal-length rows were rechecked against Patent ¶0259 Example 5.
- The cover glass remains intentionally excluded: patent S24 d=12.5585, S25 cover d=4.000 at nd=1.51633, and S26 d=0.800 are folded to the stored air-equivalent BFD of approximately 15.997 mm.
- Aspherical coefficients for S4, S5, S12, S13, S18, and S19 match the patent's Example 5 aspherical table.
- Patent Example 5 lists no numerical semi-diameters. SDs were refined against FIG. 5B while retaining validator geometry limits:

| Surface | `sd` before | `sd` after | Justification |
|---|---:|---:|---|
| 1 | 29.5 | 26.0 | Reduces G1 from the mechanical/filter-thread cap toward the FIG. 5B clear-aperture silhouette. |
| 2 | 29.5 | 26.0 | Keeps the G1 cemented junction matched to S1. |
| 3 | 26.0 | 24.2 | Preserves the slight rear taper drawn on the G1 doublet. |
| 4A | 18.0 | 18.5 | Opens the DSA front outline toward FIG. 5 while staying below the rim-slope limit. |
| 5A | 9.5 | 9.6 | Uses the remaining safe clearance before the tight S5→S6 air-gap limit. |
| 8 | 8.0 | 8.3 | Uses the remaining safe clearance before the tight S8→S9 air-gap limit. |
| 9 | 13.0 | 12.8 | Softens L6's height so the rear of G2 does not dominate the FIG. 5B group outline. |
| 10 | 13.5 | 12.8 | Keeps L6 front/rear SDs visually balanced. |
| 12A | 12.5 | 11.5 | Shrinks the first G3 element to match the smaller FIG. 5B L7 silhouette. |
| 13A | 13.0 | 11.5 | Keeps L7 front/rear SDs matched. |
| 14 | 13.0 | 12.2 | Differentiates L8 from the larger rear G3 cemented pair while retaining edge clearance. |
| 15 | 12.7 | 12.2 | Keeps L8 front/rear SDs matched and safely below the L8 edge-thickness limit. |
| 19A | 8.5 | 10.2 | Opens the focus group toward the visibly taller FIG. 5B G4 outline. |
| 20 | 8.5 | 10.2 | Keeps the cemented G4 junction matched to S19. |
| 21 | 8.0 | 10.0 | Opens the G4 rear while preserving G4→G5 clearance at close-focus wide. |
| 22 | 11.0 | 13.2 | Enlarges the stationary rear doublet to match FIG. 5B proportions. |
| 23 | 11.0 | 13.2 | Keeps the G5 cemented junction matched to S22/S24. |
| 24 | 12.0 | 13.2 | Enlarges the rear surface outline while preserving positive L14 edge thickness. |

### Phase 3 — Spectral / metadata enrichment

- The patent provides nd/vd values only; no dPgF or C/F/g-line indices are listed for Example 5.
- Relabeling L2, L3, L6, L9, L11, and L13 to catalog-resolved glass entries upgrades those elements from plain Abbe/descriptive labels to catalog Sellmeier dispersion where a reliable match exists.
- L12 remains code-based and unresolved by design, so it continues to use the patent nd/vd Abbe approximation until a 946180 catalog entry is added.

### Phase 4 — Analysis sync

- Updated `OlympusMZuiko1240mmf28PRO.analysis.md` element narratives and glass table for the relabeled glasses above.
- Removed the unsupported TAFD45 attribution for L12 and described it as an unmatched 946180 dense flint.
- Updated the source list to reflect the OHARA/HOYA catalog labels now used by the data file.

### Verification

- `npm test -- catalogMismatchScan glassRelabelCandidatesScan` before edits — passed; this lens appeared in both generated reports.
- `npm test -- catalogMismatchScan glassRelabelCandidatesScan` after edits — passed; generated scan output removed this lens from the mismatch/candidate reports. Generated report files were restored afterward to keep the working tree scoped to this lens only.
- `npm run typecheck` — passed.
- `npm run format:check` — passed.
- `npm run lint` — passed.
- `npm run test` — passed (120 files, 1566 tests).
- `npm test -- validateLensData elementRenderDiagnostics buildLens` after FIG. 5B SD follow-up — passed.
- `npm run typecheck && npm run format:check && npm run lint && npm run test` after FIG. 5B SD follow-up — passed.
