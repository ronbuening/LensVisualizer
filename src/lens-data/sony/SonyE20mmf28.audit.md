# Audit Log - SONY E 20mm f/2.8

Source: US 2014/0204265 A1 — NUMERICAL EXAMPLE 4

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` 0.2 → 0.214 m. The close-focus distance now records where the authored close row focuses — its paraxial in-focus object-to-image distance — so the close-focus label and `closeFocusM` agree within 2 %. The old value was up to 6.8 % from that row. No gap, keyframe, published flag or other optical value changed.

- Why the old value differed: printed short-distance row states no distance; 0.2 m is the old (production) value.
- `catalog.closeFocusM.marketing` 0.2 m keeps the maker's figure; the focus readout names it beside the close-focus label where the two differ by more than 2 %.

## 2026-11-14 — Finite conjugates from printed magnifications

| Zoom / keyframe | Printed magnification → `sourceMagnification` | Source locator | Solved object distance | Check |
| --- | --- | --- | --- | --- |
| 0 / 1 | “β -0.122” → `"0.122"` | US 2014/0204265 A1, Embodiment 4 (PDF p. 22) | 163.02 mm, first-surface | in focus 0.11168; at the declared distance 0.12150; +19.26 quarter waves |

The patent prints a magnification and no object distance for this state. Each distance is solved from the prescription under `LENS_DATA_SPEC.md` § Finite conjugates: the distance that focuses the state on its image plane when the magnification there rounds to the print, otherwise the distance at the nearest magnification that does. Two independent readings of the patent agree on the printed value and on the gaps of the matching state.

All radii, thicknesses, glasses, gaps, image-plane distances, existing conjugates and focus keyframes are retained.
