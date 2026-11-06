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

## 2026-11-03 — Image-plane consistency (re-solve)

Source: CN 211955965 U Example 1, Tables 1–2 (PDF pp. 7–8; "最近(0.63m)" on p. 8). The file matches the print; the
printed rows did not focus with the printed two-decimal indices. Back focus first, per LENS_DATA_SPEC Image-Plane
Consistency: the S20 air gap is re-solved for paraxial infinity focus, the change is carried to the close row, and L31
is then moved so that row focuses at 0.63 m object to image.

| Field | Before | After | Justification |
| --- | --- | --- | --- |
| S20 `d` | 13.67 | 14.180324 | Back focus re-solved for paraxial infinity focus; GL and its 1.00 mm air unchanged |
| D1 (gap after S14), 0.63 m | 5.01 | 5.175783 | L31 moved for paraxial focus at 0.63 m object to image |
| D2 (gap after S16), 0.63 m | 3.85 | 3.684217 | Same move; D1 + D2 = 8.86 mm kept |
| `focus.closeFocusM` | 0.711 | 0.63 | The re-solved row's object-to-image distance |
| `catalog.closeFocusM.marketing` | 0.6 | 0.6 | Viltrox's figure, unchanged |

- Residual at infinity: +0.510324 → 0.000000 mm (218 depths at f/1.41). L31 travel 4.01 → 4.175783 mm. EFL
  56.234583 mm unchanged at infinity; close EFL 53.3112 → 53.169196 mm (printed 55.90 / 52.89). Track 85.99 →
  86.500324 mm.
- Close focus: the 0.63 m is read as object to image. With the residual removed, the printed travel focuses at
  0.652 m object to image (index-rounding spread 0.643–0.662 m), against 0.716 m for a first-surface reading. The
  re-solved state's β −0.101 matches Viltrox's 0.1× (first-surface reading: −0.087). The printed row with its residual
  did land 625.4 mm from surface 1, so the first-surface reading is not excluded; it would need 3.62 mm of travel
  (−10%) against 4.18 mm (+4%) here. The 0.711 m relabel measured the residual.
- Cause: the indices are printed to two decimals, which spread infinity focus by σ ≈ 0.51 mm; EFL 56.23 against the
  printed 55.90 mm is within the matching σ ≈ 0.50 mm.
- Clearance: D2 rim minimum 6.919 / 2.743 mm at infinity / 0.63 m (was 2.909 mm at 0.63 m); D1 1.000 / 5.176 mm.
  Aperture, image-circle, field-coverage and surface-probe audits are unchanged.

Follow-ups: none for the image plane.
