# Audit Log — Pentax FA 31mm F1.8 AL Limited

Patent: US 6,560,042 B2, Example 3

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/US6560042.pdf`.
- Example 3 row confirmed L4 / surface 7 nd = 1.80100, vd = 35.0.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L4 / S7 | `TAFD30 (HOYA)` | `S-LAM66 (OHARA)` | Public OHARA catalog row matches the rounded patent code more defensibly than TAFD30. |

### Analysis sync

- Updated the L4 element paragraph and glass table.

## 2026-06-23 — Pentax folder patent audit

### Patent evidence

- Rechecked local patent file `patents/US6560042.pdf`.
- Example 3 row confirmed L1 nd = 1.72916, vd = 54.7.
- Reviewed the first drawing sheet; it confirms the negative front group, positive rear group, stop placement, and aspherical L8 surface modeled in the data file.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L1 / S1 | `TAC8 (HOYA)` | `TAC8 / S-LAL18 (OHARA, 729547) class` | Current OHARA catalog includes S-LAL18 at the patent coordinate; TAC8 retained as historical Pentax/HOYA context. |

### APD and SD review

- APD status remains `false`; the phosphate-crown and lanthanum elements are useful chromatic glasses but the patent does not provide partial-dispersion data.
- No patent clear-aperture or semi-diameter table was found. Existing SDs remain unchanged after drawing review.

## 2026-07-29 - Remaining catalog-mismatch audit

- Rechecked US 6,560,042 B2 Example 3 surface 9; stored `R`, `d`, `nd=1.51742`, and `νd=52.40` agree with Table 3.
- Relabeled L5 from `S-NSL3` to exact-coordinate OHARA `S-NSL36`.
- Synchronized the analysis element description and glass table. No geometry changed.

## 2026-07-30 - Code 728403 source review

- Rendered and rechecked US 6,560,042 B2 Tables 1-3. All three embodiments print `nd=1.72750`, `νd=40.3` for the positive aspherical partner corresponding to L8; Table 3 surface 13 matches the stored prescription.
- Compared the coordinate with expanded current and discontinued-inclusive first-party OHARA, HOYA, Hikari, and SUMITA coefficient data plus the existing Schott, CDGM, and NHG catalog rows.
- No coefficient-backed row falls inside both runtime guards. The closest reviewed rows, HOYA M-LAF81 and OHARA L-LAM69 (`1.73077 / 40.50`), miss the patent index by `+0.00327`, outside the `±0.003` d-line limit.
- Marked L8 as explicit `Unmatched (728403 ...)`, corrected the analysis's obsolete NBFD13 comparison, and left the patent prescription and Abbe fallback unchanged.
