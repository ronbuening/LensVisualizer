# Audit Log - FUJIFILM FUJINON GF23mmF4 R LM WR

Patent: US 2018/0210178 A1, Example 1

## 2026-07-04 - Semi-diameter patent-diagram review

### Phase 2 - Retained-information audit

- Reviewed local `patents/US20180210178A1.pdf`. The patent publishes Example 1 prescription, focus data, asphere data, and Fig. 1 section, but no clear-aperture or semi-diameter table.
- Fig. 1 shows a large retrofocus front group, a smaller stop/focusing region, and a large final rear positive element near the sensor cover plate.
- Stored SDs match that run: the front group starts at 20.0 mm, the stop-adjacent and focusing lenses sit mostly around 10.8-16.8 mm, and the final rear element expands to 22.0-23.0 mm.
- No SD values changed. Current values remain inferred from the patent figure, wide-angle ray envelope, f/4 stop geometry, edge thickness, and cross-gap sag clearance.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 1 Table 1-continued on PDF page 12 (printed page 5) at 160 dpi: surface 26 d = 20.2074; surfaces 27–28
  are the optical member PP, 3.2000 mm, nd 1.51680, νd 64.20; 28 → image is 0.0000 mm. 20.2074 + 3.2/1.51680
  reproduces the previous folded 22.3171 mm exactly.
- Surface 26 now stores the patent's 20.2074 mm, with `rearPlates` PP (N-BK7 class, 1.51680 / 64.2) and gapAfter 0.
  Paraxial check against the previous data: EFL identical; defocus unchanged at infinity and at the 0.25 m state
  (worst difference 6e-16 mm). Physical track grows by 1.090 mm.

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` 0.25 → 0.379 m. The close-focus distance now records where the authored close row focuses — its paraxial in-focus object-to-image distance — so the close-focus label and `closeFocusM` agree within 2 %. The old value was up to 51.5 % from that row. No gap, keyframe, published flag or other optical value changed.

- Why the old value differed: the patent's 0.25 m closest-point state is not an object-to-image distance; the row focuses at 0.377 m object to image.

Text sync: analysis: the patent's 0.25 m closest-point state focuses at about 0.38 m object to image.

## 2026-11-14 — Published finite conjugate

Patent: US 2018/0210178 A1, Example 1, Tables 2/3, Closest Point (250 mm) column; PDF page 12.

| State | Field | Before | After | Source evidence |
| --- | --- | --- | --- | --- |
| Zoom 0 / keyframe 1 | `focus.conjugates` | absent | `250` mm, `first-surface` | Printed `Closest Point (250 mm)`; DD[12]=5.4732; DD[17]=5.9816 mm. |

The patent prints the distance without defining its endpoints. The conjugate audit identifies the
first-surface reference; the source string records that basis. The authored-plane paraxial
offset is +0.014401494 mm (+0.727977 diffraction depths); the other
reference gives +1.997557443 mm (+95.902456 depths).
The verdict is `consistent` and the reference is discriminated. The existing published flag and
all optical geometry remain unchanged.
