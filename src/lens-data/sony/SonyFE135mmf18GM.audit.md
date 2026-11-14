# Audit Log — Sony FE 135mm F1.8 GM

Patent: WO 2019/187633, Example 1

## 2026-06-04 — Sweep 2 catalog source pass

- Resolver support for slash-form codes lets the existing HOYA NBFD15 catalog entry resolve the G11 / `806/333` row.
- Relabeled G11 / S20 from `Lanthanum heavy flint (806/333, vendor uncertain)` to `NBFD15 (HOYA, 806333)`.

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local equivalent patent file `patents/JPWO2019187633A1.pdf`.
- Example 1 rows confirmed L15 nd = 1.58313, vd = 59.38 and L23 nd = 1.72916, vd = 54.67.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L15 / S9A | `S-BAL35 (OHARA)` | `S-BAL42 (OHARA)` | Public OHARA catalog match for the patent nd/vd pair. |
| L23 / S14 | `S-LAL14 (OHARA)` | `S-LAL18 (OHARA)` | Public OHARA catalog match for the patent nd/vd pair. |

### Analysis sync

- Updated the G5/G8 element text and glass table.

## 2026-06-23 - Sony folder patent audit / APD + SD review

- Rechecked `patents/JPWO2019187633A1.pdf` and the existing analysis sidecar against the current data file.
- Existing R/d/nd/vd, group movement, high-index labels, and estimated SD profile remain consistent with the patent-backed prescription and prior relabel passes.
- Updated L14 from `apd: false` to `apd: "inferred"` for the S-FPM2 ED fluorophosphate class; the patent publishes nd/vd only for that element.
- Updated L21 from `apd: "inferred"` to `apd: "patent"` because the existing note cites patent condition (3), theta-gF = 0.660, for the anomalous flint.
- Current generated glass reports show no active Sony catalog-mismatch row for this lens.

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Example 1 Table 1 on PDF page 17 (printed page 17) at 160 dpi: surface 24 d = 17.8946; surfaces 25–26 are the
  filter FL (¶0111), 2.5000 mm, nd 1.51680, νd 64.20; 26 → IMG is 1.0000 mm. 17.8946 + 2.5/1.5168 + 1.0 = 20.5428
  reproduces the legacy folded value exactly. Glass N-BK7 (1.51680 / 64.2 class; `resolveCompatibleGlass` true).
- Surface 24 now stores the patent's 17.8946 mm with `rearPlates` FL and gapAfter 1.0 mm. Paraxial check against the
  previous data: EFL identical; defocus changes by ≤ 0.00001 mm at all three focus keyframes (rounding only).
- Physical track grows by 0.852 mm to 145.0 mm, matching the patent's Table 3 L = 145. `closeFocusM` (0.7 m) is
  Sony's published value and is unchanged.

## 2026-11-14 — Published finite conjugates

Patent: JP WO2019/187633 A1 (WO 2019/187633 A1), Numerical Example 1, Tables 1/4, PDF pp. 17-18.

| Zoom / keyframe | Field | Before | After | Source and conjugacy residual |
| --- | --- | --- | --- | --- |
| 0 / 1 | `focus.conjugates` | Undeclared | `3944.8322` mm, `first-surface` | PDF p. 18, Table 4, 撮影倍率 -0.03 column, d0 row; offset +0.018351168 mm (+4.461743 diffraction depths), alternate +44.910895 depths; `consistent`. |
| 0 / 2 | `focus.conjugates` | Undeclared | `559.6264` mm, `first-surface` | PDF p. 18, Table 4, 撮影倍率 -0.25 column, d0 row; offset +0.090449389 mm (+19.647254 diffraction depths), alternate +1853.941590 depths; `consistent`. |

The surface table lists `d0` on the object-plane row immediately before surface 1, defining the first-surface reference. The existing focus gaps match the finite column at the authored precision; only the conjugate declarations are added.
