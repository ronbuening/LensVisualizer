# Audit Log - SONY FE 24mm f/1.4 GM

Patent: JP WO2019/073744 A1, Numerical Example 1 / FIG. 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/JPWO2019073744A1.pdf`. Numerical Example 1 is shown by FIG. 1 on PDF page 37.
- The patent does not publish clear apertures. Stored SDs are estimated by combined paraxial marginal/chief-ray tracing and limited by element edge thickness, element SD ratio, the tight S20-S21 air gap, and the project sd/|R| convention.
- FIG. 1 shows the large front XA element as the dominant aperture, a mid-lens stop, and rear GR2/GR3 sections that step down from the front group. Current SDs preserve that patent silhouette, including the binding L11 rear-surface constraint documented in the data file.
- No SD values changed.

### Verification

- `npm test -- elementRenderDiagnostics`

## 2026-08-18 — Hoya M-TAFD305 coefficient assignment

- Visually rechecked local `patents/JPWO2019073744A1.pdf`, PDF page 14, Numerical Example 1 / Table 1. Surface 21 (L27) remains `nd = 1.85235`, `νd = 40.1` and is aspherical on both faces.
- Re-sourced Hoya M-TAFD305 / MC-TAFD305 from the vendor's first-party 2026-07-07 AGF; its curve evaluates to `1.851348 / 40.104`.
- Relabeled L27 to M-TAFD305 as a catalog equivalent while retaining patent code `852401` and the unspecified production supplier. No geometry changed.
- Kept L11 unresolved after checking the retained MC-TAF115 row: its nominal `nd = 1.777047` conflicts with its
  polynomial (`nd = 1.770473`). The polynomial is tempting for the patent's `1.77002 / 49.4` coordinate, but the
  internally inconsistent vendor record is not accepted as coefficient evidence.
