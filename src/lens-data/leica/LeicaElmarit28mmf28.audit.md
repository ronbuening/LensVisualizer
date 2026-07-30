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

## 2026-07-29 - E-line catalog-mismatch disposition

- Rechecked Example 3 in local `patents/US3591257.pdf`; stored R, d, ne, and νe remain unchanged.
- S5 `LaF21 (SCHOTT)` -> explicit unmatched LaF21-class e-line glass at 1.79227 / 47.15.
- S13 `F2 (SCHOTT)` -> explicit unmatched F2-class e-line glass at 1.62408 / 36.11.
- The modern N-LAF21 and F2 d-line rows remain useful comparisons but are not assigned as spectral identities.
  Synchronized the companion analysis accordingly.

## 2026-07-30 - Reference-line metadata

- Added `indexReference: "e"` to all eight elements because the stored `nd` / `vd` slots preserve patent
  `ne` / `νe` values.
- The runtime and generated reports now reject d-line catalog substitution structurally rather than relying on annotation wording.
- No source values or prescription geometry changed.
