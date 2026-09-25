# Audit Log - Hasselblad HC 3.5/50

Patent: US 2003/0011895 A1

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/US20030011895A1.pdf`; local text confirms the queued rows.
- Updated surface 5 to `S-TIH23 (OHARA)` for nd=1.78470, vd=26.30.
- Updated surface 14 to `S-TIM27 (OHARA)` for nd=1.63980, vd=34.50.
- The lens is now fully covered by trusted Sellmeier data.

## 2026-06-24 - APD, high-index, and SD audit

- Rechecked `patents/US20030011895A1.pdf`, Example 4 / Figure 4, against the current data file.
- Marked L23 `S-PHM52 (OHARA)` and L24 `S-FPL51 (OHARA)` as inferred APD elements. The patent gives nd/vd only for these rows, so the APD status comes from the catalog glass classes and their G2 chromatic-correction role, not from patent line-index data.
- Confirmed the high-index elements are L11/L12 `S-LAH53` and L14 `S-NPH1` (nd >= 1.8). These are ordinary high-index correction glasses, not APD elements.
- Rendered and reviewed the patent drawing. The stored SDs intentionally reflect trace and edge-thickness constraints for a vignetted retrofocus design rather than the outer mechanical silhouette; the broad fixed front group, stop/shutter gap, and rear focus group proportions remain rational. No SD edits were made.
- Synced the analysis markdown to the 2026-05-20 glass labels `S-TIH23` and `S-TIM27`, replacing stale `S-NPH4` / `S-NBH52` discussion.
- Verification: `npm run generate:glass-reports`, `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm run test`, and `git diff --check` passed.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Patent Example 4 prints f = 1.0, Fno = 3.5, 2ω = 69.4° (FIG. 8 lens-data table, sheet 8, PDF p. 9), so at the ×50
production scale (f = 50.03 mm) ω = 34.7° reaches f·tanω = 34.64 mm, 99.4% of the 645 corner (34.85 mm). The estimated
L11, L12 and L22 rims clipped the real chief ray (solved through the stop centre) from 25.2°, leaving the analysis field
at 67% of the corner; the corner solve itself failed because the first-surface hit search is bounded by surface 1's rim
sag. A trace with the blocking rims opened puts the corner at 35.13° and needs surface 1 ≥ 23.58, 2 ≥ 20.51,
3 ≥ 19.48, 4 ≥ 17.94, 14 ≥ 8.34 and 15 ≥ 9.78 mm. Values are floor + ~0.5 mm. L11 and L12 are strong negative menisci
whose edge thickness grows outward, so each surface takes its own floor rather than its partner's factor; surface 1
stays well inside the ~36.5 mm bound of the 77 mm filter thread. L22 is nearly plano-concave, so surface 14 was scaled
with surface 15 as one element. No figure measurement was used.

| Surface | Before | After | Justification |
|---|---|---|---|
| 1 | 16.2 | 24.1 | corner chief ray 23.58 mm + clearance |
| 2 | 16.2 | 21.1 | corner chief ray 20.51 mm + clearance; strong-meniscus rear, not scaled with surface 1 |
| 3 | 13.6 | 20.0 | corner chief ray 19.48 mm + clearance |
| 4 | 13.6 | 18.5 | corner chief ray 17.94 mm + clearance; strong-meniscus rear, not scaled with surface 3 |
| 14 | 7.0 | 10.3 | corner chief ray 8.34 mm; L22 scaled with surface 15 |
| 15 | 7.0 | 10.3 | corner chief ray 9.78 mm + clearance |

The validator accepts the new values, the traced edge now reaches 34.85 mm at 35.1° with every rim clear (100%), and
the image-circle floor still reports nothing undersized. All surfaces are spherical, and the analysis quotes none of the
changed semi-diameters.
