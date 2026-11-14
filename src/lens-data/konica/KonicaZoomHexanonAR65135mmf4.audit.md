# Audit Log — KONICA ZOOM-HEXANON AR 65-135mm f/4

Patent: JP 1983-149014 A (JP S58-149014 A), Example 3

## 2026-11-10 — Metadata fill

- `catalog.fNumber.design` stays unset. Example 3 (printed p. 69, PDF p. 5: the 実施例3 text, Table 7 and its zoom
  table) prints the focal lengths 66.288 / 92.433 / 135.090 mm, back focus and variable gaps, but no F-number. No
  other page of the publication (pp. 65–74: description, other examples, figure list, Figs. 1–10) states one; the
  f/4 is the marketed aperture only. No value changed.

## 2026-11-14 — Published finite conjugates

Patent: JP 1983-149014 A, Example 3.

Table 8 (PDF p. 5, printed p. 69), headed “物像間距離Ｕと全系の焦点距離ｆに対する移動量”, defines U as object-to-image distance. The U=1500 mm column prints extensions of 4.694 mm at f=66.288 and 22.040 mm at f=135.090. Table 7 on the same page supplies the matching infinity spacings; the inferred stop splits d13 without changing its total.

| Zoom / keyframe | Field | Before | After | Matching source gaps (mm) | Paraxial offset (mm / depths) | Other reference (depths) |
|---|---|---|---|---|---|---|
| 0 / 1 | `focus.conjugates` | Undeclared | 1500 mm, `image-plane` | d3 3.576; d8 25.574; d13-to-STO 8.194; BFD 71.139 | +0.003403746 / +0.181032 | -20.162001 |
| 2 / 1 | `focus.conjugates` | Undeclared | 1500 mm, `image-plane` | d3 26.048; d8 3.102; d13-to-STO 48.012; BFD 70.888 | +0.004033043 / +0.215591 | -135.118247 |

Every added declaration is `consistent` with `referenceDiscriminated: true`. The source-published flags already include these states.
