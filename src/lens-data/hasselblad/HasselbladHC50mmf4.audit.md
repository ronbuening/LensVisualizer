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
