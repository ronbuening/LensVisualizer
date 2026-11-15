# Audit Log — VILTROX AF 56mm f/1.4 E

Patent: CN 211955965 U, Example 1, Figure 1 (PDF p. 16).

## 2026-09-10 — Optical rims, diagram annotations and spectral proxies

Optical-rim SDs and the ten compatible spectral proxies are retained. All ten elements are spherical; no aspheric tags are assigned. L31 travels 4.01 mm imageward with complementary focus gaps. High Abbe number alone does not justify an APD tag or production-glass identity.

The diagram uses the source element order and functional groups. This is a fixed-focal-length design; there is no zoom travel schedule. Clear apertures remain modeling inferences.

## 2026-09-25 — MTF image-plane census

Source: local `patents/CN211955965U.pdf`, Example 1 Tables 1–2, PDF pp.7–9. Visually compared all 20 powered/stop rows, all ten nd/νd pairs and final plate rows 21–22. Infinity D1=1.00/D2=7.86 and close 5.01/3.85 match. No aspheres or scaling. Retained the previously documented stop label correction (physical row 9 is STO, printed STP is the powered cemented interface 11).

**Cause: folded rear plate plus source contradiction.** Restored GL (2.00 mm, nd=1.52, νd=64.2), D20=13.67 mm before and D22=1.00 mm after, in rearPlates. Independent EFL 56.234583059 mm does not reproduce printed 55.9; air BFL 16.496113322 becomes physical BFL 17.180323848 mm, versus source 16.67 mm image distance. Two-decimal source indices plausibly explain the discrepancy, but catalog sensitivity is not proof of the original melt; no unsupported replacement was made. No single source-backed misprint resolves both residuals. Runtime offset **+0.510324 → +0.510324 mm**. Section E row deleted, physical plate restoration recorded in changelog.

Validation: focused runtime/paraxial check; full corpus gates at the ten-lens checkpoint.

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` 0.63 → 0.711 m. The close-focus distance now records where the authored close row focuses — its paraxial in-focus object-to-image distance — so the close-focus label and `closeFocusM` agree within 2 %. The old value was up to 12.9 % from that row. No gap, keyframe, published flag or other optical value changed.

- Why the old value differed: the patent's 0.63 m state focuses at 0.711 m object to image; focus description gives the marketed 0.6 m.
- `catalog.closeFocusM.marketing` 0.6 m keeps the maker's figure; the focus readout names it beside the close-focus label where the two differ by more than 2 %.

Text sync: analysis: the patent's 0.63 m state focuses at about 0.71 m object to image.

## 2026-11-14 — Published finite-conjugate certification

| Zoom / keyframe | Field | Before | After | Source and conjugate residual |
| --- | --- | --- | --- | --- |
| 0 / 1 | `focus.conjugates` | No entry | 630 mm, `first-surface` | 物距 最近(0.63m); Example 1, Table 2, ¶0079–0081, 最近 column; 物距/D1/D2 rows; PDF p. 8/9. Paraxial image minus authored plane -0.035074284 mm (-14.181235 diffraction depths); other reference +284.786547 depths; `consistent`, reference discriminated. Basis: audit-resolved. |

The printed object-distance label leaves its reference plane undefined. The conjugate residual identifies the retained reference; the source string records that qualification.
