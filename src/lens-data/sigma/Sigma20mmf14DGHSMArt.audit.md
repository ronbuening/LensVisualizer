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

## 2026-09-24 — Semi-diameters raised to the traced format corner

Numerical Example 1 prints f = 20.69 mm, 2ω = 93.69° and Y = 21.63 mm (各種データ, p. 10, ¶0058), so the design covers
the full-frame corner (21.65 mm). The estimated front rims were sized for paraxial envelopes: rim 1 stopped the real
chief ray (solved through the stop centre) at 35.4° (67% of the corner), and the undersized E1/E2 rims also kept the
corner chief ray from solving past 38.0°. With those rims opened, the corner chief ray (46.87°; patent ω 46.85°)
crosses surface 1 at 31.67, 2 at 26.46, 3A at 24.62 and 4A at 21.37 mm, and clears every later rim. Each new value is
that height + ~0.5 mm, rounded up. E1 and E2 are strong menisci, so their rear surfaces take their own floors rather
than scaling with the front (scaling surface 2 with 1, to 31.2 mm, would also exceed its 28.97 mm rim-slope limit).
Surface 4A now exceeds its vertex radius (sd/|R| = 1.07), which its near-paraboloid base (K = −0.9479) allows: the rim
slope is 39.6°. No figure measurement was used.

| Surface | Before | After | Justification |
|---|---|---|---|
| 1 | 22.5 | 32.2 | corner chief ray 31.67 mm + clearance |
| 2 | 21.8 | 27.0 | corner chief ray 26.46 mm + clearance; strong meniscus, not scaled with surface 1 |
| 3A | 19.2 | 25.2 | corner chief ray 24.62 mm + clearance; no aspheric turnover to 30.2 mm |
| 4A | 18.2 | 21.9 | corner chief ray 21.37 mm + clearance; not scaled with 3A; rim slope 39.6°; no turnover to 26.3 mm |

The validator accepts the new values, the traced edge now reaches the 21.65 mm corner at 46.9° with every rim clear,
the image-circle floor still reports nothing undersized, and no render trim or gap overlap appears. Surface 3A departs
from its paraxial sphere by −2421.8 µm at 25.2 mm; 4A's base sphere ends at 20.43 mm, so its rim is given by sag
instead (10.707 mm at 21.9 mm). The analysis quotes neither and is unchanged.
