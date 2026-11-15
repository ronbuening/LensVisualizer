# Audit Log - Zeiss Touit Makro-Planar T* 50mm f/2.8 Macro

Patent: JP 2015-161792 A, Example 1  
Catalog version: local working tree, 2026-06-25

## 2026-06-25 - APD, high-index, and semi-diameter audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| All elements | `glass`, `nd`, `vd` | Existing OHARA/HOYA class labels and patent constants | Retained | The local `patents/` folder does not contain JP2015161792A, so the patent was checked from Google Patents and its downloadable PDF. The tables provide `nd`/`vd` but no clear-aperture data. The existing labels preserve the patent constants and current catalog-near assignments; the remaining generated-report issue is the unresolved S-BAH10 row. |

### Phase 2 - Retained-information audit

- Rechecked the patent description for Example 1. It defines the basic lens table, specifications table, moving-distance table, and aspheric coefficients, but no semi-diameter column.
- Stored SDs remain inferred values constrained by the f/2.88 stop, edge thickness, front/rear SD ratios, and cross-gap sag intrusion limits.
- The PP cover-glass exclusion and folded final BFD remain consistent with the data header and project convention.

### Phase 3 - Spectral / metadata enrichment

- Existing inferred APD metadata on S-FPM2 L12/L42 and S-PHM52 L43 was retained. The patent itself gives no `dPgF` or line-index columns; these APD flags are catalog-inferred.
- High-index status for the S-TIH53, E-FDS1/MP-FDS1, and related dense-flint elements is already represented in labels and role prose.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent fold (stored d26 = 24.6143248945 mm) with the patent's physical rear stack from Example 1
  Table 1 (PDF p. 15): d26 = 1.00 mm, then `rearPlates` PP 1.22 mm, nd 1.51680, νd 64.20 (N-BK7), and 22.81 mm to the
  image plane. The plate is traced by every analysis and hidden from the diagram and element lists. `closeFocusM` 0.15 m
  is the published specification and was left unchanged.
- Paraxial check against the previous data: EFL and defocus identical at all three focus keyframes (the old fold was
  stored unrounded). Physical track grows by 1.22 × (1 − 1/1.51680) = 0.416 mm, to the 95.37 mm first-surface-to-image
  length the analysis already quotes.

## 2026-11-14 — Finite conjugates from printed magnifications

| Zoom / keyframe | Printed magnification → `sourceMagnification` | Source locator | Solved object distance | Check |
| --- | --- | --- | --- | --- |
| 0 / 1 | “β=-0.5” → `"0.5"` | JP 2015-161792 A, Example 1 (PDF p. 15) | 102.44 mm, first-surface | in focus 0.49908; at the declared distance 0.49906; −0.06 quarter waves |
| 0 / 2 | “β=-0.98” → `"0.98"` | JP 2015-161792 A, Example 1 (PDF p. 15) | 58.79 mm, first-surface | in focus 0.98446; at the declared distance 0.98434; −0.34 quarter waves |

The patent prints a magnification and no object distance for these states. Each distance is solved from the prescription under `LENS_DATA_SPEC.md` § Finite conjugates: the distance that focuses the state on its image plane when the magnification there rounds to the print, otherwise the distance at the nearest magnification that does. Two independent readings of the patent agree on the printed value and on the gaps of the matching state.

All radii, thicknesses, glasses, gaps, image-plane distances, existing conjugates and focus keyframes are retained.
