# Audit Log - MINOLTA AF 100mm f/2

Patent: JP 1987-244010 A, Example 2

## 2026-08-11 - Glass opportunity audit

- Visually rechecked Example 2 in local `patents/JPA 1987244010-000000.pdf`; L2 is `1.69350 / 51.83` and L5 is
  `1.78100 / 44.55`. The patent names no supplier and publishes no secondary line indices or partial dispersion.
- Relabeled L2 to coefficient-backed OHARA S-LAL58 as the best combined coordinate match inside the project
  compatibility guard (`Δnd ≈ -0.000005`, `Δνd ≈ -1.019`). The annotation leaves the production supplier unspecified.
- L5 now carries an explicit unmatched disposition. The nearest reviewed candidate, OHARA S-LAH51, misses the
  d-line guard by about `0.00490`.
- No geometry or authored patent constants changed.

## 2026-11-14 — Finite conjugates from printed magnifications

| Zoom / keyframe | Printed magnification → `sourceMagnification` | Source locator | Solved object distance | Check |
| --- | --- | --- | --- | --- |
| 0 / 1 | “β＝−0.126; d11 0.88〜16.339” → `"0.126"` | JP 1987-244010 A, Example 2 (PDF p. 4) | 866.81 mm, first-surface | in focus 0.12570; at the declared distance 0.12570; −0.00 quarter waves |

The patent prints a magnification and no object distance for this state. Each distance is solved from the prescription under `LENS_DATA_SPEC.md` § Finite conjugates: the distance that focuses the state on its image plane when the magnification there rounds to the print, otherwise the distance at the nearest magnification that does. Two independent readings of the patent agree on the printed value and on the gaps of the matching state.

All radii, thicknesses, glasses, gaps, image-plane distances, existing conjugates and focus keyframes are retained.
