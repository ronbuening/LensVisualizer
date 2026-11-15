# Audit Log - Mamiya Sekor AF 150mm f/2.8 IF D

Patent: JP 2001-183581 A, Example 1 / Figure 1
Catalog version: local working tree, 2026-08-07

## 2026-08-07 - Patent-figure, glass, and identity audit

### Figure evidence

- Rendered patent PDF page 7 at high resolution and isolated the lower Figure 1 optical section.
- The fixed front group and two moving rear groups agree with the patent silhouette within roughly 8–15%, which is inside raster, line-width, and crop uncertainty for this figure.
- No semi-diameter was changed. The current SDs remain ray- and geometry-constrained modeling inferences because the patent publishes no clear-aperture table.

| Region | Current SD range | Figure comparison | Decision |
|---|---:|---|---|
| Fixed G1 | 21.2–34.5 mm | Within approximately 8–15% | Retained |
| Moving G2 | 15.8–17.4 mm | Within drawing uncertainty | Retained |
| Moving G3 | 17.3–17.4 mm | Within drawing uncertainty | Retained |

### Glass review

- Canonicalized `S-NBH 8` to `S-NBH8` and `S-TIM 5` to `S-TIM5`, allowing the existing OHARA Sellmeier catalog entries to resolve.
- Marked L1 as `APD (INFERRED)` because the selected S-FPL51 catalog model supplies `dPgF = +0.0280`; the patent itself publishes only `nd` and `vd` and does not identify a supplier.
- Retained L7 as unmatched. The nearby public candidates do not reproduce both its stored `nd = 1.806098` and `vd = 40.34` closely enough to support an exact spectral identity.
- No new glass catalog entry was added because the remaining unmatched coordinate lacks a source-backed public identity and coefficients.

### Identity review

- Corrected the marketed display order from “D AF 150mm f/2.8 IF” to “AF 150mm f/2.8 IF D.”
- Romanized the patent inventor as Hideyuki Suga to satisfy catalog metadata conventions and match the existing author identity.
- Shortened the diagram's functional-group captions to the patent's `G1`, `G2`, and `G3`; fixed/focusing behavior remains documented in the focus model and analysis without crowding the element annotations.

## 2026-11-14 — Finite conjugates from printed magnifications

| Zoom / keyframe | Printed magnification → `sourceMagnification` | Source locator | Solved object distance | Check |
| --- | --- | --- | --- | --- |
| 0 / 1 | “撮影倍率 0.15” → `"0.15"` | JP 2001-183581 A, Example 1 (PDF p. 5) | 1029.31 mm, first-surface | in focus 0.15013; at the declared distance 0.15013; −0.00 quarter waves |

The patent prints a magnification and no object distance for this state. Each distance is solved from the prescription under `LENS_DATA_SPEC.md` § Finite conjugates: the distance that focuses the state on its image plane when the magnification there rounds to the print, otherwise the distance at the nearest magnification that does. Two independent readings of the patent agree on the printed value and on the gaps of the matching state.

All radii, thicknesses, glasses, gaps, image-plane distances, existing conjugates and focus keyframes are retained.
