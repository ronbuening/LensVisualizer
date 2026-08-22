# Audit Log — Nikon NIKKOR Z 40mm f/2

Patent: JP 2021-189351A, Example 4

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/JP2021189351A.pdf`.
- Example 4 rows confirmed surface 2 nd = 1.71736, vd = 29.57 and surface 6 nd = 1.80400, vd = 46.60.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L12 / S2 | `S-TIH23 (OHARA)` | `S-TIH1 (OHARA)` | Public OHARA catalog match for the patent nd/vd pair. |
| L22 / S6 | `S-LAH64 (OHARA)` | `S-LAH65 (OHARA)` | Public OHARA catalog match for the patent nd/vd pair. |

### Analysis sync

- Updated L12/L22 labels and the chromatic-pair discussion.

## 2026-08-21 — Near/close catalog-candidate review

- Rechecked Example 4's L21 coordinate at `nd = 1.75520`, `vd = 27.57` against the current catalog.
- Rejected the prior `PBM18Y (OHARA)` / `S-TIM27` attribution: current OHARA PBM18Y is
  `1.595509 / 38.767`, so this is not a normalization-only difference.
- Relabeled L21 as an unresolved `755276` dense-flint class and deliberately left it without a Sellmeier curve;
  the patent coordinate is unchanged.
