# Audit Log - Hasselblad HC 80mm f/2.8

Patent: US 2001/0050819 A1

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/US20010050819A1.pdf`; local text confirms the queued rows for 1.72825 / 28.5 and 1.74330 / 49.3.
- Updated L3 to `S-TIM5 (OHARA)`, L4 to `S-TIH10 (OHARA)`, and L6 to `S-LAM60 (OHARA)`.
- The lens is now fully covered by trusted Sellmeier data.

## 2026-06-24 - APD, high-index, and SD audit

- Rechecked `patents/US20010050819A1.pdf`, Embodiment 3 / Table 3, against the current data file.
- Confirmed there are no ED, fluorophosphate, KZFS, or patent-published partial-dispersion elements to mark as APD, and no elements at nd >= 1.8.
- Rendered and reviewed the patent drawing. The current SD taper matches the six-element Gaussian proportions: the largest clear apertures are in L1/L2, the stop-side negative elements narrow toward the aperture, and the rear positive elements expand moderately toward the image side. No SD edits were made.
- Synced the analysis markdown to the already-corrected glass labels `S-TIM5`, `S-TIH10`, and `S-LAM60`.
- Verification: `npm run generate:glass-reports`, `npm run typecheck`, `npm run format:check`, `npm run lint`, `npm run test`, and `git diff --check` passed.
