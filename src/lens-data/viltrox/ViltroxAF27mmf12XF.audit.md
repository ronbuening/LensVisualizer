# Audit Log — VILTROX AF 27mm f/1.2 PRO XF

Patent: CN 115840281 A, Example 4, Tables 10–13; Figure 4-1 (PDF p. 33).

## 2026-09-10 — Optical rims, diagram annotations and spectral proxies

| Element / surface | Field | Before | After | Evidence |
| --- | --- | --- | --- | --- |
| S1 / S2 | `sd` | 20 / 18.5 mm | 23.5 / 23.5 mm | Equal optical rims in Figure 4-1. |
| S3 / S4 | `sd` | 17 / 14 mm | 20.1 / 15.5 mm | Curved optical endpoints; exclude the taller rear mechanical blank. |

All glass curves remain coordinate-compatible proxies. L54 alone has two aspheric surfaces; source labels L11–L54 and five functional groups are retained. L41 travels 5.09 mm imageward from infinity; D1+D2 stays 6.96 mm.

The diagram uses the source element order and functional groups. This is a fixed-focal-length design; there is no zoom travel schedule. Clear apertures remain modeling inferences.

## 2026-09-25 — MTF image-plane census

Classification: hand-folded source cover plate plus a small published-plane/paraxial residual.

Visually inspected local `patents/CN115840281A.pdf`, Example 4 Tables 10–12 on PDF pp. 13–14 (introduced p. 12). Every radius, thickness, nd/vd pair for the 15 lenses, both conics and all A4/A6/A8/A10/A12 terms match. No scaling. Table 11 explicitly gives infinity D1=0.94/D2=6.02 and nearest focus D1=6.03/D2=0.93; both states match. The 0.158 m near reference remains qualified separately and does not enter this infinity census.

Table 10 ends with S27 gap 13.929, plane GL S28 thickness 2.800, nd=1.517/vd=64.199, and S29 gap 0.500 to IMAGE. Replaced the manually folded 16.274748187 mm air path with **13.929 mm + `rearPlates` GL 2.8 mm + 0.5 mm**. No supplier, line indices or physical spectral curve are supplied for GL; none is invented. It is traced but hidden from drawing. Physical last-lens-to-image distance is 17.229 mm and first-surface-to-image track 109.046 mm. The change affects finite-aperture propagation even though it conserves paraxial reduced distance.

Independent EFL 27.706644932 mm agrees with printed 27.7. Air-only BFL 16.299375117 plus the plate correction 0.954251813 gives physical BFL 17.253626930 mm. Offset **+0.024626930 → +0.024626930 mm**, above the 0.016921780 mm limit. No further miscopied prescription value was found. The source's aberration plots and good-imaging statement do not specify how its image plane was selected. With the restored plate, the reference-index axial geometric diagnostic (732 surviving rays, pupil grid 32, 10/20/40 lp/mm) selects +0.010873129 mm, score 0.921189 → 0.987091. A finite-aperture compromise is plausible but remains an interpretation. Retain the physical source plane; delete the completed Section E row and add a changelog entry for restoring the plate.

Validation: focused runtime/paraxial check; full corpus gates at the ten-lens checkpoint.

## 2026-11-03 — Image-plane consistency (kept as best-focus plane)

Source: CN 115840281 A Example 4, Tables 10–12 (PDF pp. 13–14); Examples 1 and 2 focus tables on PDF pp. 8 and 10.
The image plane is kept under LENS_DATA_SPEC Image-Plane Consistency: the real-ray axial best focus lies within 10
depths of the authored plane.

| Field | Before | After | Justification |
| --- | --- | --- | --- |
| Header | "Preserve the source plane and document the residual." | Best-focus-plane line with the offset, best focus and rounding spread | Spec rule for a kept plane |
| Optical values | — | unchanged | Class C: no gap, keyframe or `closeFocusM` change |

- Residual: paraxial infinity offset +0.024627 mm (14.6 depths at f/1.2); real-ray axial best focus +0.010873 mm
  from the plane (6.4 depths). The indices are printed to three decimals. A ±0.0005 rounding of each index spreads
  paraxial focus by σ ≈ 0.045 mm, so the offset is within rounding.
- Close focus: Table 11's "最近(0.158m)" is boilerplate. Examples 1, 2 and 4 all print 0.158 m with different
  spacings, and no reference reproduces it. The printed near row focuses 173.4 mm from the first vertex, 225.4 mm
  from the front principal point, 196.8 mm from the front focal point and 282.5 mm object to image (EFL 28.608 mm
  against the printed 28.6). With the infinity residual removed by back focus, the printed rows focus at 0.2813 m
  object to image, matching Viltrox's 0.28 m. `closeFocusM` stays 0.28 (label 0.2825).
- Travel (5.09 mm) and EFL (27.706645 mm) are unchanged. Aperture, image-circle, field-coverage and surface-probe
  audits are unchanged.

Follow-ups: none.
