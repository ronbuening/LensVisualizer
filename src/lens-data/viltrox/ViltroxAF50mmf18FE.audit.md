# Audit Log — VILTROX AF 50mm f/1.8 FE

Patent: CN 211955966 U, Example 1, Tables 1–3; Figure 1 (PDF p. 18).

## 2026-09-10 — Optical rims, diagram annotations and spectral proxies

| Element / surface | Field | Before | After | Evidence |
| --- | --- | --- | --- | --- |
| L12 / L13 | `glass` | Unmatched | M-TAF31 approximate spectral proxy | Catalog 1.80139 / 45.45 versus patent 1.80 / 46.6, within the existing compatibility window. |
| L42 | `glass` | Unmatched | N-SF5 approximate spectral proxy | Catalog 1.67271 / 32.25 versus patent 1.67 / 33.1, within the existing compatibility window. |

Catalog names identify modeled spectral curves, not production suppliers. The existing catalog already contains these curves, so no duplicate glass entries are added. Patent nd/vd remain authored; no surrogate line indices or partial-dispersion values are introduced. L11, L14 and L41 remain unmatched. Optical-rim SDs, L21/L22 cementing, and the four L23/L31 aspheric surfaces are retained. L31 travels 5.75 mm imageward with D1+D2 conserved.

The diagram uses the source element order and functional groups. This is a fixed-focal-length design; there is no zoom travel schedule. Clear apertures remain modeling inferences.

## 2026-09-25 - MTF census and Tier A spectral-source review

Source: local `patents/CN211955966U.pdf`, Example 1 Tables 1-3 on PDF
pages 7-9; paragraphs 0075-0095. Every R/d/nd/vd entry on S1-S24 matches.
Infinity D1=1.00 / D2=8.61 from Table 2 is selected; no scaling. Every
K/A4-A12 coefficient matches Table 3, retaining the source-supported mapping
of printed rows 13-16 to physical S15-S18 (Table 1 and paragraph 0087).

| Rear path | Before | After |
|---|---|---|
| S22 d | 30.75578947368421 mm air-equivalent fold | 28.44 mm physical air |
| GL | Folded | `rearPlates`: t 2.00 mm, nd 1.52, vd 64.2, air after 1.00 mm |
| Image distance from S22 | 30.755789 mm | 31.44 mm physical |
| Offset | +0.988687 mm | +0.988687 mm |

Independent ABCD gives EFL 49.073753 mm versus source 49 mm, and
31.744476 mm air-equivalent BFL versus source 30.755789 mm. Physical BFL
with GL is 32.428687 mm versus 31.44 mm. No single further source-supported
misprint resolves this contradiction. Retain all published values, disclose
it in the header and analysis, and delete the investigated Section E row.

**Tier A closed as source exhausted, not spectrally upgraded.** L41 (source
S19) is exactly 1.51 / 81.4. Tables 1-3 supply only Nd/Vd and aspheres;
paragraphs 0066 and 0095 identify wavelengths but provide no line indices,
theta-gF, delta-PgF, or glass identity. The low-dispersion wording does not
supply a numeric partial dispersion. Do not manufacture dPgF or infer a
supplier from the rounded coordinates. Leave L41 unresolved and its spectral
MTF limitation intact. Delete the requested Tier A research row; reopen only
with new source evidence. The source plate likewise has nd/vd only.

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` 0.5 → 0.72 m. The close-focus distance now records where the authored close row focuses — its paraxial in-focus object-to-image distance — so the close-focus label and `closeFocusM` agree within 2 %. The old value was up to 44.1 % from that row. No gap, keyframe, published flag or other optical value changed.

- Why the old value differed: the patent's 0.5 m state has no defined reference plane; the row focuses at 0.720 m object to image.

## 2026-11-03 — Image-plane consistency (re-solve)

Source: CN 211955966 U Example 1, Tables 1–2 (PDF pp. 7–8). The file matches the print; the printed rows did not
focus with the printed two-decimal indices. Back focus first, per LENS_DATA_SPEC Image-Plane Consistency: the S22 air
gap is re-solved for paraxial infinity focus, the change is carried to the close row, and L31 is then moved so that
row focuses at 500 mm from the first vertex.

| Field | Before | After | Justification |
| --- | --- | --- | --- |
| S22 `d` | 28.44 | 29.428687 | Back focus re-solved for paraxial infinity focus; GL and its 1.00 mm air unchanged |
| D1 (gap after S16A), 0.5 m | 6.75 | 6.691799 | L31 moved for paraxial focus 500 mm from the first vertex |
| D2 (gap after S18A), 0.5 m | 2.86 | 2.918201 | Same move; D1 + D2 = 9.61 mm kept |
| `focus.closeFocusM` | 0.72 | 0.594 | The re-solved row's object-to-image distance (0.5935 m) |
| `catalog.closeFocusM.marketing` | absent | 0.55 | Viltrox AF 50/1.8 FE minimum focus distance (0.1×; Lenstip and retailer specifications) |

- Residual at infinity: +0.988687 → 0.000000 mm (260 depths at f/1.8). L31 travel 5.75 → 5.691799 mm. EFL 49.073753
  mm unchanged at infinity; 0.5 m EFL 46.687632 → 46.712158 mm (printed 49 / 46.48). Track 92.50 → 93.488687 mm.
- Close focus: the 0.5 m is read from the first vertex. With that reading the printed rows carried the same residual,
  +0.989 mm at infinity and +0.943 mm at 0.5 m, as index rounding would. With the residual removed, the printed travel
  focuses 495 mm from the first vertex (index-rounding spread 484–506 mm). β −0.0967 matches Viltrox's 0.1×. The
  image-plane reading would leave residuals of +0.99 and +2.04 mm and need 7.07 mm of travel, which runs the L31 and
  L41 rims into each other. The 0.72 m relabel measured the residual.
- Cause: the indices are printed to two decimals, which spread infinity focus by σ ≈ 0.84 mm; L41's 1.51/81.4 is not
  the cause (1.497 makes the offset +1.69 mm). Re-solving both rows by L31 alone instead would close the S18A/S19 rim
  to −0.36 mm at h = 13.6, which the back-focus route avoids.
- Clearance: D2 rim minimum 6.623 / 0.932 mm at infinity / 0.5 m (was 0.873 mm at 0.5 m); D1 1.000 / 6.692 mm.
  Aperture, image-circle, field-coverage and surface-probe audits are unchanged.

Follow-ups: none for the image plane. Conditions (1), (4) and (6) stay as recorded in the analysis.
