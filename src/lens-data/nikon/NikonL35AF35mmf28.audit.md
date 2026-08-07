# Audit Log — Nikon L35AF 35mm f/2.8

Patent: US 4,457,596, Embodiment 1

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/US4457596.pdf`.
- Patent rows confirmed L2 / surface 3 and L4 / surface 7 both use nd = 1.77279, vd = 49.4.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L2 / S3 | `TAF5 (1773/494)` | `S-LAH66 (OHARA)` | Public OHARA catalog row is the closest coefficient-backed Sellmeier match. |
| L4 / S7 | `TAF5 (1773/494)` | `S-LAH66 (OHARA)` | Same repeated patent glass as L2. |

### Analysis sync

- Updated the L2/L4 glass discussion from historical TAF5 wording to the coefficient-backed S-LAH66 relabel.

## 2026-07-29 - Remaining catalog-mismatch audit

- Rechecked US 4,457,596 Embodiment 1 surface 5 before the documented 0.350007 scale: `R=-264.361`, `d=2.5762`, `nd=1.68893`, and `νd=31.1` agree with the stored scaled row.
- Relabeled L3 from the invalid `FD60 / S-TIM28 (1689/311)` wording to OHARA `S-TIM28`, whose exact code is 689311.
- Synchronized the L3 analysis and code table. No geometry or scale changed.

## 2026-08-07 - Near-complete glass opportunity

- Visually rechecked Embodiment 1 in local `patents/US4457596.pdf`; L1 is `nd=1.713`, `νd=54.0` and the data already identifies the historical LaK 8 family.
- Relabeled L1 to coefficient-backed Schott N-LAK8 (`nd=1.71300`, `νd=53.83`) as the modern catalog spectral equivalent to the rounded patent coordinate.
- The annotation leaves the production melt unspecified. No geometry or authored patent constants changed.
