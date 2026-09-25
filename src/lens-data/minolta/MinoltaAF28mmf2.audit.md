# Audit Log - Minolta AF 28mm f/2

Patent: US 4,258,985, Example 4 / Table 4 / claim 9

## 2026-06-24 - Folder-wide patent audit

### Patent evidence

- Local patent file checked: `patents/US4258985.pdf`.
- Table 4 gives nd/vd rows only; no vendor names, partial-dispersion data, line indices, or clear-aperture table are published.
- The stored prescription, stop placement in d8, and f=100 to 28 mm scale factor remain consistent with the patent table and drawing.

### Glass and APD disposition

- Replaced catalog-neighbor prose with code fallback labels for all glass rows:
  - `694536`, `511605`, `762404`, `750504`, `805252`, `773501`, and `697558`.
- No ED, fluorite, fluorophosphate, anomalous-dispersion, or APD status is supported by the patent, so all elements remain `apd: false`.

### Semi-diameter disposition

- The patent gives no clear apertures.
- Existing SDs were reviewed against the retrofocus drawing and the fast f/2 marginal/chief-ray envelope. The front meniscus apertures, inserted stop, rear positive group apertures, and sag/edge constraints remain rational for rendering, so no SD edits were made.

## 2026-08-18 — Hoya NBFD5 coefficient backfill

- Visually rechecked local `patents/US4258985.pdf`, PDF page 10, claim 9. The two air-spaced N4 rows are both `nd = 1.7620`, `νd = 40.38`.
- Added Hoya NBFD5 from the first-party 2026-07-07 obsolete-inclusive AGF; its polynomial evaluates to `1.762001 / 40.263`.
- Relabeled L4a and L4b to NBFD5 as catalog equivalents while retaining patent code `762404` and the unspecified production supplier. Geometry and APD status are unchanged.

## 2026-08-21 — Existing-catalog six-digit-code recovery

- Visually rechecked local `patents/US4258985.pdf`, PDF page 10, claim 9. The printed N1-N8 coordinates remain the source of truth; the patent still supplies no vendor names or partial-dispersion data.
- Assigned qualified catalog-equivalent curves to L1 (`H-LaK6A`, `Δnd = 0.000000`, `Δνd = -0.230`), L2/L3 (`NSL7`, `+0.000021 / -0.004`), L6 (`S-TIH6`, `-0.000019 / +0.215`), and L8 (`K-LaK14`, `0.000000 / -0.200`). Patent coordinates are retained and the production suppliers remain unspecified.
- L5 `750504` and L7 `773501` remain unresolved. Their current candidates cannot be distinguished from `nd`/`νd` alone without inventing line-index or partial-dispersion evidence.
- No geometry or APD metadata changed.

## 2026-09-24 — Semi-diameters raised to the traced format corner

Table 4 (Embodiment 4, PDF p. 8, col. 6) prints f = 100, FNo = 2.0, 2ω = 75°, and FIG. 8b/8c (sheet 4, PDF p. 5) plot
astigmatism and distortion out to 37.5°. At the ×0.28 production scale that is 28 tan 37.5° = 21.49 mm, 99.3% of the
24 × 36 corner (21.65 mm): the nominal diagonal field of a 28 mm lens, as the analysis notes. The design's barrel
distortion (FIG. 8c) puts the traced chief ray at 20.95 mm at 37.5° and the corner at 38.39°. The estimated front rims
of L2 and L3 (surfaces 3–5) clipped the real chief ray (solved through the stop centre) from 33.6°, leaving the analysis
field at 84% of the corner, and the corner solve failed past 38.2°. With surfaces 3–5 opened the corner chief ray solves
at 38.39° and is then clipped at surface 1 (16.20 mm against 16.0), which the earlier triage had judged sufficient. The
corner needs surface 1 ≥ 16.20, 3 ≥ 12.37, 4 ≥ 10.18 and 5 ≥ 9.64 mm; values are floor + ~0.5 mm. L1 (weak biconvex)
was scaled as one element, taking surface 2 from 15.2 to 15.9 mm, well inside the 55 mm filter thread. L2 and L3 are
strong negative menisci, so surfaces 3 and 4 take their own floors, and surface 6 (crossed at 8.30 mm, rim 11.5) is
unchanged. Every element keeps the header's ≤ 1.25 front/rear SD ratio. No figure measurement was used.

| Surface | Before | After | Justification |
|---|---|---|---|
| 1 | 16.0 | 16.7 | corner chief ray 16.20 mm + clearance |
| 2 | 15.2 | 15.9 | corner chief ray 14.82 mm; L1 scaled with surface 1 |
| 3 | 11.25 | 12.9 | corner chief ray 12.37 mm + clearance; strong-meniscus front, own floor |
| 4 | 9.0 | 10.7 | corner chief ray 10.18 mm + clearance; strong-meniscus rear, own floor |
| 5 | 9.2 | 10.2 | corner chief ray 9.64 mm + clearance; surface 6 unchanged |

The validator accepts the new values, the traced edge now reaches 21.65 mm at 38.4° with every rim clear (100%), and the
image-circle floor still reports nothing undersized. All surfaces are spherical. The analysis quotes no semi-diameters,
and the constraints it states (≤ 1.25 SD ratio, positive edges, ≤ 90% gap intrusion) still hold.
