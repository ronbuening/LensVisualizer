# Audit Log - Sigma 20mm F1.4 DG HSM | Art

Patent: JP 2019-117419 A, Numerical Example 1

## 2026-05-31 - Sigma last-commit patent glass audit

### Patent evidence

- Reviewed ignored local file `patents/JP2019117419A.pdf`.
- Example 1 table lists 15 glass elements with `nd` and `vd`; it does not publish `PgF`, `theta_gF`, or line-index data for the glass rows.
- Figure 1 shows the large retrofocus L1 front stack, a smaller floating L2, and a compact L3 rear imaging group.

### Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| E2 / S3A | `glass` | `M-LAC130 (Hoya)` | `M-LAC130 (HOYA)` | Added coefficient-backed HOYA `M-LAC130` catalog entry for patent nd/vd = 1.69350 / 53.20. |
| E14 / S24 | `glass` | `BAFD7 (Hoya)` | `BAFD7 (HOYA)` | Added coefficient-backed modern HOYA `BAFD7` entry for patent nd/vd = 1.70154 / 41.15. |
| E15 / S26A | `glass` | `Unmatched (764/491; probable Hoya M-TAF101 moldable lanthanum, non-unique)` | `764491 - L-LAM69 / moldable lanthanum-crown class (patent nd=1.76450, vd=49.10; no public Sellmeier match)` | Preserves the patent code and moldable-asphere class without asserting a non-unique catalog glass. |

### Spectral / metadata disposition

- No `dPgF` fields were added because the patent table only publishes `nd` and `vd`.
- E15 intentionally remains Abbe/code-based pending a coefficient-backed public match for 764491.

### Cross-section review

- Reviewed patent Figure 1 against the current semi-diameter progression. No SD edits were needed; the current file already shows the large L1 retrofocus front group and smaller L2/L3 groups.

### Analysis sync

- Updated E2/E14 labels to the catalog-backed HOYA names.
- Reworded E15 from a probable M-TAF101 claim to a code-preserving moldable lanthanum-crown class.

### Report status

- This lens is now 14/15 Sellmeier-covered, with only E15 / 764491 unresolved by design.

## 2026-06-23 - Semi-diameter raw-geometry audit

### SD corrections

| Surface | Before | After | Justification |
|---|---:|---:|---|
| S12 | 19.8 | 19.6 | Raw extended edge check showed L7 S12/S13 self-crossing by 0.005 mm at the larger authored endpoint. |
| S14 | 18.0 | 17.65 | Raw extended edge check showed L8 S14/S15 self-crossing by 0.129 mm at the larger authored endpoint. |

### Notes

- JP 2019-117419 A Example 1 does not publish a clear-aperture / effective-radius table.
- Edits reduce only the offending larger endpoint and keep the inferred SD progression otherwise unchanged.
- Temporary Sigma SD audit after the edits reported 0/27 Sigma files with raw SD/render issues.

## 2026-08-07 — L-LAH91 catalog recovery

- Visually rechecked Example 1 in local `patents/JP2019117419A.pdf`; E15 remains `1.76450 / 49.10`.
- OHARA's 2026-07-01 catalog publishes low-softening L-LAH91 at the same coordinate with vendor Sellmeier coefficients.
- Relabeled E15 as an L-LAH91 catalog equivalent while leaving Sigma's production supplier unspecified. No geometry changed.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent 27A gap with the patent's physical rear stack (Numerical Example 1, rendered p. 10):
  d27 = 36.5001 / 37.0527 mm (infinity / tabulated 959 mm state), then the LPF (surfaces 28–29) 1.4500 mm, nd 1.52301,
  νd 58.59 (no θgF printed; C12 (HOYA) coordinate-compatible proxy), and BF 0.9970 mm. BF is printed only as a symbol,
  so it stays derived from the stated 161.26 mm total track. The extrapolated close keyframe keeps its image plane:
  d27 = 41.518534 − 1.4500/1.52301 − 0.9970 = 39.569472 mm.
- Paraxial check against the previous data: EFL identical and defocus unchanged (worst |Δ| 3.5e-8 mm) at all three
  focus keyframes. Physical track grows by 0.498 mm and now matches the patent's 161.26 mm.
