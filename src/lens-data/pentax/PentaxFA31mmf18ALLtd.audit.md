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
