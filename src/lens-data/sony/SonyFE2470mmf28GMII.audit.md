# Audit Log — Sony FE 24-70mm f/2.8 GM II

Patent: WO 2023/181666 A1, Example 4

## 2026-06-04 — Sweep 2 catalog source pass

- Resolver support for slash-form codes lets the existing HOYA NBFD15 catalog entry resolve the L44 / `806/333` row.
- Relabeled L44 to `NBFD15 (HOYA, 806333)`.
- Relabeled L72 / `911/352` to existing coefficient-backed `TAFD35 (HOYA, 911353; patent rounds vd to 35.2)`, whose d-line index matches the stored nd=1.91082.

## 2026-05-20 — Glass relabel audit

### Phase 1 — Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L22 / S8A | `glass` | `S-LAH52 class (OHARA)` | `770494 — lanthanum crown` | Patent Table 16 lists nd=1.77002, vd=49.4; no unique public match found. |
| L32 / S18 | `glass` | `S-FPM2 (OHARA)` | `FCD100 (HOYA)` | Patent Table 16 lists nd=1.43700, vd=95.1; HOYA cross-reference supports FCD100. |
| L33 / S19 | `glass` | `S-LAH52Q (OHARA)` | `S-LAH66 (OHARA)` | Patent Table 16 lists nd=1.77250, vd=49.6; OHARA S-LAH66 datasheet matches. |
| L41 / S22 | `glass` | `S-NPH5 (OHARA)` | `S-LAH99 (OHARA)` | Patent Table 16 lists nd=2.00100, vd=29.1; OHARA S-LAH99 is the catalog-backed match. |
| L43 / S25 | `glass` | `S-FPM2 (OHARA)` | `FCD100 (HOYA)` | Same patent nd/vd pair as L32. |
| L71 / S34 | `glass` | `S-NPH4 (OHARA)` | `FDS18 (HOYA)` | Patent Table 16 lists nd=1.94595, vd=18.0; HOYA class match selected. |

### Phase 2 — Retained-information audit

- Confirmed flagged rows against local `patents/WO2023181666A1.pdf`, Table 16. Stored nd/vd values matched the patent.
- Non-flagged prescription fields were not fully rekeyed in this queue pass.

### Phase 4 — Analysis sync

- Updated element narratives and glass identification table for L22, L32, L33, L41, L43, and L71.

## 2026-06-23 - Sony folder patent audit / APD + SD review

- Rechecked local `patents/WO2023181666A1.pdf`; the PDF is image-only for text extraction, so this pass relied on rendered-table checks already reflected in the data and analysis sidecar.
- Existing R/d/nd/vd, zoom/focus spacings, high-index/code-backed labels, APD metadata, and SD profile remain consistent with the patent-backed prescription and prior relabel pass.
- No APD, high-index, glass-label, spacing, or SD edits were needed in this pass.
- Current generated glass reports show no active Sony catalog-mismatch row for this lens.

## 2026-07-29 - Catalog expansion follow-up

- Corrected L24 from `S-LAH79` to HOYA `TAFD40L-W`, the exact 2.00069 / 25.46 row.

## 2026-07-30 - Patent 770494 catalog-equivalent recovery

- Rechecked L22 at the patent coordinate `nd = 1.77002`, `vd = 49.4`.
- HOYA MC-TAF101-100 (`1.76902 / 49.29`, code `769493`) is the closest coefficient-backed catalog row and is
  inside the runtime d-line safety window.
- Relabeled L22 as the MC-TAF101-100 optical equivalent while leaving the production supplier unspecified.
  No prescription, asphere, zoom, focus, aperture, or semi-diameter values changed.

## 2026-11-03 — Close-focus endpoint relabel

`focus.closeFocusM` 0.21 → 0.21 m, with per-station `closeFocusM` 0.21 / 0.322 / 0.319 m. The close-focus distance now records where the authored close row focuses — its paraxial in-focus object-to-image distance — so the close-focus label and `closeFocusM` agree within 2 %. The old value was up to 53.2 % from that row. No gap, keyframe, published flag or other optical value changed.

- Why the old value differed: printed close rows already reach 0.21 m at wide; per-station values record them.
- `catalog.closeFocusM.marketing` 0.21 / 0.3 m (wide / tele) keeps the maker's figure; the focus readout names it beside the close-focus label where the two differ by more than 2 %.

Text sync: closeFocusM comment: nearest station row; Sony's 0.21 / 0.30 m is catalog metadata.

## 2026-11-14 — Source finite object distances

Patent: WO 2023/181666 A1, Example 4.

| Zoom / keyframe | Field | Before | After | Source and gap mapping |
| --- | --- | --- | --- | --- |
| 0 / 1 | `focus.conjugates` | No declaration | 74 mm, `first-surface` | Table 18 Wide beta=-0.229, d20=8.37 and fixed d21=-1.10 map exactly to file gap 20=7.27; all other gaps match, and printed d0=74.00 mm passes. |
| 1 / 1 | `focus.conjugates` | No declaration | 171.81 mm, `first-surface` | Table 18 Mid beta=-0.182, d20=4.24 and fixed d21=-1.10 map exactly to file gap 20=3.14; all other gaps match, and printed d0=171.81 mm passes. |
| 2 / 1 | `focus.conjugates` | No declaration | 151.21 mm, `first-surface` | Table 18 Tele beta=-0.292, d20=1.98 and fixed d21=-1.10 map exactly to file gap 20=0.88; all other gaps match, and printed d0=151.21 mm passes. |

The declarations retain the authored prescription and image plane. The axial consistency diagnostics are 0/1: +0.004619763 mm (+0.488790 quarter-wave depths), other reference unavailable, 1/1: +0.054340432 mm (+5.493510 quarter-wave depths), other reference +1423.661428 depths, 2/1: -0.084841548 mm (-8.227594 quarter-wave depths), other reference unavailable. No production minimum-focus distance or calculated object distance is certified.
