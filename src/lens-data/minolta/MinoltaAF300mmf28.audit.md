# Audit Log - Minolta AF APO TELE 300mm f/2.8

Patent: US 4,518,229, Example 8 / Tables 8-9

## 2026-06-24 - Folder-wide patent audit

### Patent evidence

- `patents/` did not contain this PDF, so the audit used a temporary Google Patent Images copy at `/tmp/minolta-patent-text/US4518229.pdf`.
- Table 8 rows were checked from extracted patent text:
  - L1 and L2: nd = 1.49520, vd = 79.74.
  - L3: nd = 1.68150, vd = 36.64.
  - L8: nd = 1.67000, vd = 57.07.
- Table 9 remains the source for the inner-focus subunit movement to the patent's 3 m endpoint.

### Glass and APD disposition

- Changed L1/L2 to `495797` fluorophosphate ED-class code labels and explicitly noted that the row is not current S-FPL51.
- Changed L3 to `682366` dense-flint class and L8 to `670571` high-index crown / lanthanum-crown class.
- Kept APD as `inferred` for L1/L2 because Minolta production literature supports AD glass, but the patent publishes only nd/vd and no partial-dispersion ratios.

### Semi-diameter disposition

- The patent does not publish a stop coordinate or per-surface clear apertures.
- Existing SDs remain inferred from the f/2.9 marginal envelope, the 114 mm production filter constraint, edge thickness, and signed cross-gap sag. They match the large telephoto front collector and smaller inner-focus/rear groups in the patent drawing, so no SD edits were made.

## 2026-07-29 - `670571` catalog-equivalent review

- Rechecked Table 8 L8 at `nd = 1.67000`, `vd = 57.07`; its stored prescription row remains unchanged.
- Official OHARA all-products data publish discontinued S-LAL52 with coefficients at `nd = 1.669999`,
  `vd = 57.327972`, code `670573`.
- Relabeled L8 from unresolved `670571` class prose to
  `S-LAL52 (OHARA catalog-equivalent to 670571; patent vendor unspecified)`. This selects a
  coefficient-backed dispersion model without claiming an OHARA production blank.
- Synchronized the analysis narrative and table. No geometry, APD status, or semi-diameter changed.

## 2026-11-14 — Published finite-conjugate certification

Patent: US_4518229_A.pdf; source locators below use one-based PDF pages.

| Zoom / keyframe | Field | Before | After | Source and paraxial residual |
|---|---|---|---|---|
| 0 / 1 | `focus.conjugates` | Absent | 3000 mm, `image-plane` | PDF p. 14, Table 9, Example 8 row, col. 10; Table 8 at the same page gives infinity d10=3.000 and d15=22.00; offset -0.00790610807519 mm (-0.730741771 depths), other reference -291.202279 depths; `consistent`, reference discriminated. |

State 0/1: reference basis is audit-resolved. The finite gaps D10=14.76 and D15=10.24 mm follow the explicitly printed 11.760 mm movement. The patent gives no explicit distance reference. First-surface initially yields other-reference; image-plane recheck yields consistent. The distance, focus gaps and image plane are retained without adjustment.
