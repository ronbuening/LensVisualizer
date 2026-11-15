# Audit Log — Pentax FA 645 120mm f/4 Macro

Patent: US 6,154,324, Example 1 / Table 1

## 2026-06-23 — Pentax folder patent audit

### Patent evidence

- Local file `patents/US6154324.pdf` was not present, so this pass used the public Google Patents page/PDF for US 6,154,324.
- Checked the public patent text and drawing sheets for the two-group macro layout, independently moving aperture, and Example 1 prescription.
- The lens-section drawing supports the current positive front group, stop, negative rear group, and large rear working-distance proportions.

### Disposition

- Glass labels remain unchanged; current OHARA-class labels match the patent nd/vd coordinates used in the data and analysis files.
- APD status remains `false`. L4 remains described as the probable production ED element by high Abbe number and marketing context, but the patent itself does not supply partial-dispersion data.
- The patent publishes focus-dependent F-number and aperture movement data, but not element clear apertures. The current stop SD is retained from the paraxial entrance-pupil reconstruction for Example 1 F/3.8; other SDs remain ray-envelope estimates.

## 2026-11-14 — Finite conjugates from printed magnifications

| Zoom / keyframe | Printed magnification → `sourceMagnification` | Source locator | Solved object distance | Check |
| --- | --- | --- | --- | --- |
| 0 / 1 | “M = 0–1.000” → `"1.000"` | US 6,154,324, Embodiment 1 (PDF p. 18) | 170.8 mm, first-surface | in focus 0.99998; at the declared distance 0.99993; −0.10 quarter waves |

The patent prints a magnification and no object distance for this state. Each distance is solved from the prescription under `LENS_DATA_SPEC.md` § Finite conjugates: the distance that focuses the state on its image plane when the magnification there rounds to the print, otherwise the distance at the nearest magnification that does. Two independent readings of the patent agree on the printed value and on the gaps of the matching state.

All radii, thicknesses, glasses, gaps, image-plane distances, existing conjugates and focus keyframes are retained.
