# Audit Log — Pentax-F 85mm f/2.8 Soft

Patent: US 5,267,086, Example 1

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/US5267086.pdf`.
- Example 1 row confirmed L4 / surface 6 nd = 1.80440, vd = 39.6.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L4 / S6 | `TAFD25 (HOYA)` | `S-LAH63 (OHARA)` | Public OHARA catalog row matches the patent nd/vd pair. |

### Analysis sync

- Updated the L4 element paragraph and glass table.

## 2026-06-23 — Pentax folder patent audit

### Patent evidence

- Rechecked local patent file `patents/US5267086.pdf`.
- Example 1 rows confirmed L1 nd = 1.65844, vd = 50.9; L2 nd = 1.78472, vd = 25.7; and L3 nd = 1.72825, vd = 28.5.
- Reviewed the first drawing sheet; it confirms the oversized soft-focus front doublet and compact rear group modeled by the current SDs.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L1 / S1 | `BACD14 (HOYA)` | `BACD14 (HOYA) / N-SSK5 equivalent (658509)` | Retains historical HOYA label and adds coefficient-backed equivalent. |
| L2 / S2 | `FD110 (HOYA)` | `FD110 (HOYA) / S-TIH11 equivalent (785257)` | Retains historical HOYA label and adds coefficient-backed equivalent. |
| L3 / S4 | `FD60 (HOYA)` | `FD60 (HOYA) / S-TIH10 equivalent (728285)` | Retains historical HOYA label and adds coefficient-backed equivalent. |

### APD and SD review

- APD status remains `false`; the soft-focus behavior is spherical-aberration design, not anomalous partial dispersion.
- No patent clear-aperture or semi-diameter table was found. Existing SDs remain unchanged because the drawing supports the large front/small rear proportions.
