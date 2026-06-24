# Audit Log - Leica Elmarit-R 28mm f/2.8

Patent: US 3,591,257

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/US3591257.pdf`; local text confirms the repeated nd=1.81265, vd=25.24 rows.
- Public catalog lookup did not find a defensible exact coefficient-backed match for the historical high-index flint pair.
- Converted both repeated `SF6 (SCHOTT)` annotations to code-only `813252` patent-glass labels to avoid resolving to the wrong modern catalog glass.

## 2026-06-24 — Folder audit recheck

- Rechecked local `patents/US3591257.pdf` OCR for Example 3. The repeated L4/L7 row remains nd=1.81265, vd=25.24.
- Synced the companion analysis and L7 role text so they no longer describe L4/L7 as resolved SF6 catalog glass.
- Rechecked APD/high-index status: no partial-dispersion data or APO claim are present, so all elements remain non-APD. L3, L4/L7, and L6 remain high-index/high-dispersion historical glass roles based on the patent constants.
- No patent clear-aperture or semi-diameter table was found. Existing SDs remain inferred from f/2.8 ray envelopes and the patent drawing's relative element apertures.
