# Audit Log - SONY FE 24mm f/1.4 GM

Patent: JP WO2019/073744 A1, Numerical Example 1 / FIG. 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/JPWO2019073744A1.pdf`. Numerical Example 1 is shown by FIG. 1 on PDF page 37.
- The patent does not publish clear apertures. Stored SDs are estimated by combined paraxial marginal/chief-ray tracing and limited by element edge thickness, element SD ratio, the tight S20-S21 air gap, and the project sd/|R| convention.
- FIG. 1 shows the large front XA element as the dominant aperture, a mid-lens stop, and rear GR2/GR3 sections that step down from the front group. Current SDs preserve that patent silhouette, including the binding L11 rear-surface constraint documented in the data file.
- No SD values changed.

## 2026-08-18 — Hoya M-TAFD305 coefficient assignment

- Visually rechecked local `patents/JPWO2019073744A1.pdf`, PDF page 14, Numerical Example 1 / Table 1. Surface 21 (L27) remains `nd = 1.85235`, `νd = 40.1` and is aspherical on both faces.
- Re-sourced Hoya M-TAFD305 / MC-TAFD305 from the vendor's first-party 2026-07-07 AGF; its curve evaluates to `1.851348 / 40.104`.
- Relabeled L27 to M-TAFD305 as a catalog equivalent while retaining patent code `852401` and the unspecified production supplier. No geometry changed.
- Kept L11 unresolved after checking the retained MC-TAF115 row: its nominal `nd = 1.777047` conflicts with its
  polynomial (`nd = 1.770473`). The polynomial is tempting for the patent's `1.77002 / 49.4` coordinate, but the
  internally inconsistent vendor record is not accepted as coefficient evidence.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Numerical Example 1 prints ω = 42.36° (Table 3, PDF p. 15), and the Fig. 2 aberration plots run to Y = 21.63 mm (PDF
p. 37), within 0.02 mm of the full-frame corner (21.65 mm), so the design covers the format. The L31 rims, estimated for
a 0.4 field, clipped the real chief ray (solved through the stop centre) at surface 24 from 39.0°, leaving the analysis
field at 88% of the corner (19.08 mm). The traced corner chief ray (42.37°, the patent ω) needs surface 23 ≥ 12.92 and
surface 24 ≥ 13.44 mm; every other rim is clear (surface 1A keeps 0.20 mm). Surface 24 takes its floor + ~0.5 mm and
surface 23 is scaled with it as one element (×1.148), which keeps the stored S23 > S24 relationship. Fig. 1 (0.0995
mm/px) draws L31 to about 17.1 mm, so both values stay inside the drawn outline; the figure was used only as that bound.

| Surface | Before | After | Justification |
|---|---|---|---|
| 23 | 12.4 | 14.2 | L31 scaled with surface 24 (×1.148); corner chief ray 12.92 mm |
| 24 | 12.2 | 14.0 | corner chief ray 13.44 mm + clearance |

The validator accepts the new values, the traced edge now reaches 21.65 mm at 42.4° with every rim clear, and the
image-circle floor still reports nothing undersized. No aspheric surface changed; the analysis's quoted rim departures
and tightest checks (the S2 rim and the S20-S21 air gap) are unaffected.
