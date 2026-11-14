# Audit Log — VILTROX AF 33mm f/1.4 E

Patent: CN 211826699 U, Example 1, Figure 1 (PDF p. 16).

## 2026-09-10 — Optical rims, diagram annotations and spectral proxies

The existing S8/S10 11.3 mm rims preserve the tight pre-stop clearance; remaining optical rims retain their inferred apertures. L31 travels 3.94 mm imageward. The published 0.01 mm D1+D2 rounding difference remains disclosed. L14/L23 are described as anomalous dispersion in paragraph 0075, but its index-versus-wavelength wording conflicts with the positive Abbe numbers; it does not establish anomalous partial dispersion. No APD color is assigned. L11, L13, L14, L21 and L42 remain unmatched because their rounded coordinates do not establish a compatible ordinary glass.

The diagram uses the source element order and functional groups. This is a fixed-focal-length design; there is no zoom travel schedule. Clear apertures remain modeling inferences.

## 2026-09-25 — MTF image-plane census

Source: local `patents/CN211826699U.pdf`, Example 1 Tables 1–2, PDF pp.7–8, associated prose on p.6. Visually checked every R/d/nd row, all ten Abbe numbers, and infinity D1=1/D2=6.24 versus close 4.94/2.29. All match at native scale; no aspheres. Preserved the already documented source STP label correction (physical stop row 9; cemented surface 11).

**Cause: folded source plate plus source contradiction.** GL is 2.00 mm / 1.52 / 64.2 with 17.01 mm before and 1.00 mm after. Replaced the hand fold with rearPlates. Independent EFL is 33.754005791 mm versus source 33.21. Air BFL 19.691687796 becomes physical BFL 20.375898322 mm versus source image distance 20.01. Coarse source indices are a plausible contributor, but no single source-backed misprint resolves the mismatch. Keep source values. Runtime offset **+0.365898 → +0.365898 mm**. Section E row deleted; changelog records restored physical plate.

**Tier A:** L14/source S7 is 1.51/81.59. The patent labels L14/L23 anomalous-dispersion glass, but supplies no numeric θgF, ΔPgF, nC/nF/ng or vendor identity. F/d/C wavelengths in the aberration discussion are not indices. Removed the completed Tier A patent-search row while retaining the missing spectral-data limitation and existing glass uncertainty.

Validation: focused runtime/paraxial check; full corpus gates at the ten-lens checkpoint.

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` 0.4 → 0.467 m. The close-focus distance now records where the authored close row focuses — its paraxial in-focus object-to-image distance — so the close-focus label and `closeFocusM` agree within 2 %. The old value was up to 16.8 % from that row. No gap, keyframe, published flag or other optical value changed.

- Why the old value differed: the published 0.4 m state is not an object-to-image distance; the row focuses at 0.467 m object to image.
- `catalog.closeFocusM.marketing` 0.4 m keeps the maker's figure; the focus readout names it beside the close-focus label where the two differ by more than 2 %.

## 2026-11-03 — Image-plane consistency (re-solve)

Source: CN 211826699 U Example 1, Tables 1–2 (PDF pp. 7–8) and Table 9 (p. 14); Example 2 Table 3 (p. 9). The file
matches the print; the printed rows did not focus with the printed two-decimal indices. Back focus first, per
LENS_DATA_SPEC Image-Plane Consistency: the S20 air gap is re-solved for paraxial infinity focus, the change is
carried to the 0.4 m row, and L31 is then moved so that row focuses at 0.4 m object to image.

| Field | Before | After | Justification |
| --- | --- | --- | --- |
| S20 `d` | 17.01 | 17.375898 | Back focus re-solved for paraxial infinity focus; GL and its 1.00 mm air unchanged |
| D1 (gap after S14), 0.4 m | 4.94 | 5.220467 | L31 moved for paraxial focus at 0.4 m object to image |
| D2 (gap after S16), 0.4 m | 2.29 | 2.009533 | Same move; the row's printed D1 + D2 = 7.23 mm is kept |
| `focus.closeFocusM` | 0.467 | 0.4 | The re-solved row's object-to-image distance |
| `catalog.closeFocusM.marketing` | 0.4 | 0.4 | Viltrox's figure, now equal to the modeled one |

- Residual at infinity: +0.365898 → 0.000000 mm (159 depths at f/1.4). L31 travel 3.94 → 4.220467 mm. EFL
  33.754006 mm unchanged at infinity; 0.4 m EFL 32.607944 → 32.513290 mm (printed 32.08). Track 85.98 → 86.345898 mm.
- Close focus: the 0.467 m relabel measured the residual. With the residual removed, the printed travel focuses at
  0.422 m object to image (index-rounding spread 0.415–0.428 m), against 0.486 m for a first-vertex reading.
  Re-solved at 0.4 m object to image, β = −0.102, matching Viltrox's 0.1×. The sibling CN 211826700 U (filed the same
  day) prints a 0.3 m row that focuses at 0.3 m object to image.
- Cause: the indices are printed to two decimals, and rounding them spreads infinity focus by σ ≈ 0.41 mm. The printed
  f = 33.21 mm is the outlier rather than the prescription: Table 9's F1a/F −1.24 and F1b/F 0.84 reproduce with 33.754
  mm (−1.252, 0.843), not with 33.21 mm (−1.272, 0.857). L14 prints 1.51/81.59, which matches no catalog glass, and
  1.50 would leave +0.019 mm. Example 2 prints the same 1.51, so no erratum is claimed.
- The two printed rows remain about 0.2 mm (image side) apart in their residuals, beyond rounding. Re-solving both rows
  by L31 alone would close the S16/S17 rim to −0.07 mm at h = 11.8, which the back-focus route avoids.
- Clearance: D2 rim minimum 4.631 / 0.401 mm at infinity / 0.4 m (was 0.681 mm at 0.4 m); D1 1.000 / 5.220 mm.
  Aperture, image-circle, field-coverage and surface-probe audits are unchanged.

Follow-ups: none for the image plane.
