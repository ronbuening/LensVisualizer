# Audit Log - Canon EF-M 22mm f/2 STM

Patent: US 8,854,747 B2, First Numerical Example

## 2026-06-25 - Canon folder patent audit

### Phase 1 - Glass corrections

- Rechecked the local patent PDF `patents/US8854747.pdf`, data file, and analysis sidecar.
- No glass label changes were needed. The six-digit OHARA code annotations remain useful where the patent constants map to catalog/code identities.
- High-index elements L12, L21p, and L23 remain correctly marked by their nd values and lanthanum glass labels.

### Phase 2 - Retained-information audit

- The patent does not publish clear-aperture semi-diameters. Existing SDs remain ray-envelope and drawing-proportion estimates constrained by the 43 mm filter diameter and renderer safety checks.
- Retained the patent-tabulated floating focus endpoints; the production 0.15 m MFD is not extrapolated into extra optical states.

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` 0.2217 → 0.264 m. The close-focus distance now records where the authored close row focuses — its paraxial in-focus object-to-image distance — so the close-focus label and `closeFocusM` agree within 2 %. The old value was up to 19.3 % from that row. No gap, keyframe, published flag or other optical value changed.

- Why the old value differed: patent close state is beta = -0.1; focus description gives the production 0.15 m MFD.
- `catalog.closeFocusM.marketing` 0.15 m keeps the maker's figure; the focus readout names it beside the close-focus label where the two differ by more than 2 %.

## 2026-11-14 — Finite conjugates from printed magnifications

| Zoom / keyframe | Printed magnification → `sourceMagnification` | Source locator | Solved object distance | Check |
| --- | --- | --- | --- | --- |
| 0 / 1 | “−0.1x” → `"0.1"` | US 8,854,747 B2, Example 1 (PDF p. 22) | 221.72 mm, first-surface | in focus 0.09973; at the declared distance 0.09973; +0.00 quarter waves |

The patent prints a magnification and no object distance for this state. Each distance is solved from the prescription under `LENS_DATA_SPEC.md` § Finite conjugates: the distance that focuses the state on its image plane when the magnification there rounds to the print, otherwise the distance at the nearest magnification that does. Two independent readings of the patent agree on the printed value and on the gaps of the matching state.

All radii, thicknesses, glasses, gaps, image-plane distances, existing conjugates and focus keyframes are retained.
