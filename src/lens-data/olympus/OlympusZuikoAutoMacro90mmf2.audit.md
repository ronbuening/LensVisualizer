# Audit Log — Olympus Zuiko Auto-Macro 90mm f/2

Patent: US 4,792,219, Embodiment 3

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/US4792219.pdf`.
- Embodiment 3 row confirmed L9 / surface 17 nd = 1.65160, vd = 58.52.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L9 / S17 | `BSC7 (HOYA)` | `S-LAL7 (OHARA)` | Public OHARA catalog row matches the patent nd/vd pair. |

### Analysis sync

- Updated the L9 element paragraph and glass table.

## 2026-06-24 - Olympus patent glass-code audit

### Patent evidence

- Reviewed local patent file `patents/US4792219.pdf`.
- Embodiment 3 lists the full R/d/nd/vd prescription for L1-L9, but does not publish clear-aperture semi-diameters.
- The retained surface geometry, stop placement, focus spacings, and inferred SDs were left unchanged.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L1 / S1 | `TAC4 (HOYA)` | `S-LAL14 (OHARA) / TAC4 class (HOYA, 697555)` | Public coefficient-backed catalog row matches the patent nd/vd pair. |
| L2 / S3 | `TACL1 (HOYA)` | `N-LAK8 (Schott) / TACL1 class (HOYA, 713538)` | Public coefficient-backed catalog row matches the patent nd/vd pair. |
| L3 / S5 | `FD4 (HOYA)` | `S-TIH3 (OHARA) / FD4 class (HOYA, 740283)` | Public coefficient-backed catalog row matches the patent nd/vd pair. |
| L4 / S8 | `BACL1 (HOYA)` | `S-TIL26 (OHARA) / BACL1 class (HOYA, 567428)` | Public coefficient-backed catalog row matches the patent nd/vd pair. |
| L5 / S10 | `LAF7 (HOYA)` | `744447 - LAF7-class lanthanum flint (HOYA; no exact public catalog match)` | Code-labeled because no exact public Sellmeier/catalog match was found. |
| L6 / S12 | `TAFL3 (HOYA)` | `773497 - TAFL3-class lanthanum crown (HOYA; no exact public catalog match)` | Code-labeled because nearby catalog rows differ in Abbe value. |
| L7 / S14 | `CFKL2 (HOYA)` | `S-NSL36 (OHARA) / CFKL2 class (HOYA, 517524)` | Public coefficient-backed catalog row matches the patent nd/vd pair. |
| L8 / S16 | `FD5 (HOYA)` | `S-TIM35 (OHARA) / FD5 class (HOYA, 699301)` | Public coefficient-backed catalog row matches the patent nd/vd pair. |

### APD, high-index, and SD review

- No APD status changes: the patent does not identify anomalous partial dispersion glass for this example.
- L6 remains the highest-index element and the condition-(10) high-index crown; the analysis wording now uses the code label instead of forcing a modern catalog equivalent.
- No SD change: existing inferred semi-diameters remain rational for the patent Fig. 1 proportions and the patent does not provide a numerical clear-aperture table.

### Analysis sync

- Updated the L1-L8 element descriptions and the glass summary table to match the data-file labels.
