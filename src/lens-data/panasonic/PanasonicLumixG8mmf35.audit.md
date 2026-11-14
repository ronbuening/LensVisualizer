# Audit Log - PANASONIC LUMIX G FISHEYE 8mm f/3.5

Source: US 2012/0147254 A1 Example 4 — Panasonic / Adachi, Imaoka

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` 0.1 → 0.996 m. The close-focus distance now records where the authored close row focuses — its paraxial in-focus object-to-image distance — so the close-focus label and `closeFocusM` agree within 2 %. The old value was up to 895.5 % from that row. No gap, keyframe, published flag or other optical value changed.

- Why the old value differed: rows reproduce the patent's 1 m state; focus description gives the production 0.1 m MFD.
- `catalog.closeFocusM.marketing` 0.1 m keeps the maker's figure; the focus readout names it beside the close-focus label where the two differ by more than 2 %.

## 2026-11-14 — Published finite-conjugate certification

Patent: US 2012/0147254 A1.

| Zoom / keyframe | Field | Before | After | Source locator |
| --- | --- | --- | --- | --- |
| 0 / 1 | `focus.conjugates` | No declaration | 930.741 mm, `first-surface` | PDF p. 21; US 2012/0147254 A1, Numerical Example 4 / Embodiment 4, Table 8, 1 m column: d0 930.741. d16=4.405 mm, d18=2.214 mm, BF=16.169 mm. |

- State 0/1: paraxial image offset -0.00021520816864 mm (-0.0154977462255 diffraction depths); alternate reference +0.00485894416178 mm (+0.349835749805 depths). Verdict: `ambiguous-reference`; reference discriminated: false. Reference evidence: Table 7 (same PDF p. 21): "Object surface" has d="Variable" immediately before surface 1; Table 8 identifies that object-side interval as d0.

The declaration retains the first-surface reference because the object-surface row explicitly defines d0; the trace alone does not discriminate the two references.
