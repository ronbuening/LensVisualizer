# Audit Log - Mamiya-Sekor Macro C 80mm f/4

Patent: JP S55-24081 B2, Example 1 / Figure 1
Catalog version: local working tree, 2026-08-07

## 2026-08-07 - Patent-figure semi-diameter audit

### Figure evidence

- Rendered patent PDF page 5 at high resolution and isolated the Figure 1 optical section from labels and leader lines.
- The original front floating doublet and rear cemented group were visibly oversized against the patent silhouette.
- The central elements and stop region agreed closely enough with the drawing to remain unchanged.
- The patent does not tabulate clear apertures, so the revised values are rounded figure-constrained inferences rather than source dimensions.

| Surfaces | Before | Figure estimate | After | Decision |
|---|---:|---:|---:|---|
| 1 | 16.5 mm | approximately 12.8 mm | 12.8 mm | Tightened to the front-doublet silhouette |
| 2 | 15.2 mm | approximately 12.8 mm | 12.8 mm | Tightened to the front-doublet silhouette |
| 3 | 10.5 mm | approximately 12.8 mm | 12.8 mm | Matched the shared rear rim shown for the doublet |
| 8 | 14.3 mm | approximately 10.6 mm | 10.6 mm | Tightened to the rear-group silhouette |
| 9 | 15.3 mm | approximately 11.4 mm | 11.4 mm | Tightened to the cemented-interface silhouette |
| 10 | 17.0 mm | approximately 12.8 mm | 12.8 mm | Tightened to the rear-group silhouette |

### Geometry and tracing checks

- The revised surfaces preserve positive edge thickness and valid spherical domains.
- Exact tracing retains clearance for the complete 0.6-field diagnostic bundles at infinity and the represented `beta = -1/2` state.

### Glass review

- Retained the six-digit patent-coordinate glass classes. The patent gives only `nd` and `vd`, and no unique coefficient-backed production identities were established.

### Screenshot follow-up

- A tighter repeat measurement against patent Figure 1 found L1–L6 figure/data mean-height ratios of approximately `1.007`, `0.996`, `0.941`, `0.991`, `1.118`, and `0.996`. Every element is within approximately 12% of the patent silhouette, so no further semi-diameter change is justified.
- Element shapes, D1/D2 boundaries, rounded Abbe badges, and the production display name remain correct.
- Shortened the diagram captions to `G1`–`G4`; the floating/fixed behavior remains explicit in the focus model, variable-gap labels, top-line specification, and analysis while no longer colliding beneath the compact rear group.

## 2026-11-14 — Finite conjugates from printed magnifications

| Zoom / keyframe | Printed magnification → `sourceMagnification` | Source locator | Solved object distance | Check |
| --- | --- | --- | --- | --- |
| 0 / 1 | “撮影倍率 β＝−1/2; d3＝3.53、d5＝7.78、d7＝2.1” → `"1/2"` | JP S55-24081 B2, Sole example (PDF p. 2) | 210.81 mm, first-surface | in focus 0.50000; at the declared distance 0.50001; +0.02 quarter waves |

The patent prints a magnification and no object distance for this state. Each distance is solved from the prescription under `LENS_DATA_SPEC.md` § Finite conjugates: the distance that focuses the state on its image plane when the magnification there rounds to the print, otherwise the distance at the nearest magnification that does. Two independent readings of the patent agree on the printed value and on the gaps of the matching state.

All radii, thicknesses, glasses, gaps, image-plane distances, existing conjugates and focus keyframes are retained.
