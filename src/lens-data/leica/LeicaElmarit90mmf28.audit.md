# Audit Log — Leica Elmarit 90mm f/2.8

Patent: US 2,995,980, sole numerical example / claim prescription

## 2026-06-24 — Folder audit

- Rechecked local `patents/US2995980.pdf` OCR for the sole numerical table and claim table.
- Corrected L3 from malformed `1640/346` notation to the unbroken six-digit `640346` code. The patent row is d-line nd=1.63980, vd=34.6; no exact coefficient-backed public catalog match was verified.
- Retained L1/L2/L4/L5 catalog-class assignments and the claim-table r1 choice already documented in the analysis.
- Rechecked APD/high-index status: the patent gives no partial-dispersion data or APO claim, so all elements remain non-APD. L1 and L5 remain high-index lanthanum glass roles by patent nd/vd.
- No patent clear-aperture or semi-diameter table was found. Current SDs remain inferred from the f/2.8 marginal ray, full-field chief ray, E39 front constraint, stop placement, and Fig. 1 proportions.

## 2026-08-18 - Sole-example coefficient backfill

- Visually rechecked the sole prescription table on rendered page 2 of `patents/US2995980.pdf`; it confirms all
  five stored d-line index/Abbe coordinates.
- Assigned K-LaK9 to L1, SF4 to L2, F1 to L4, and N-LAF2 to L5 as same-coordinate or same-family optical equivalents.
  Assigned E-FD7 to L3: its six-digit code is the patent's exact `640346`, resolving the row left open in the
  2026-06-24 audit and replacing the prior unsupported BaSF1 guess for L4 with an exact-coordinate curve.
- All assignments leave the production supplier unspecified. No prescription or geometry value changed.
