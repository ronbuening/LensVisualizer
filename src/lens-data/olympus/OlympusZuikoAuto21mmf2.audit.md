# Audit Log — Olympus OM Zuiko Auto-W 21mm f/2

Patent: US 4,210,388, Example 1

## 2026-05-20 — Glass relabel follow-up

### Patent evidence

- Reviewed local patent file `patents/US4210388.pdf`.
- Example 1 row confirmed L3 / surface 5 nd = 1.7725, vd = 49.6.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L3 / S5 | `LAC12 / LaK10 (OHARA / Schott)` | `S-LAH66 (OHARA)` | Public OHARA catalog row matches the patent nd/vd pair. |

### Analysis sync

- Updated the L3 glass identification.

## 2026-06-24 - Olympus patent glass-code audit

### Patent evidence

- Reviewed local patent file `patents/US4210388.pdf`.
- Example 1 confirms the existing R/d/nd/vd prescription for L1-L10. The patent does not list clear-aperture semi-diameters.
- The retained flare-stop placement, focus approximation, surface geometry, and inferred SDs were left unchanged.

### Glass corrections

| Element / surface | Before | After | Disposition |
|---|---|---|---|
| L1 / S1 | `LAC14 / BaLF5 (OHARA / Schott)` | `639449 - LAC14 / BaLF5-class barium lanthanum flint (no exact public catalog match)` | Code-labeled because no exact public coefficient-backed match was found. |
| L2 / S3 | `LAC10 / LaK9 (OHARA / Schott)` | `S-LAL59 (OHARA, 734515) / LaK9 class` | Public coefficient-backed catalog row matches the patent nd/vd pair. |
| L5 / S11 | `LAC7 / LaK8 (OHARA / Schott)` | `S-LAL14 (OHARA, 697555) / LaK8 class` | Public coefficient-backed catalog row matches the patent nd/vd pair. |
| L6 / S12 | `LF7 (Schott)` | `593348 - LF7-class light flint (no exact public catalog match)` | Code-labeled because no exact public Sellmeier/catalog match was found. |
| L7 / S14 | `LaF3 / LAF2 (Schott / HOYA)` | `S-LAM52 (OHARA, 720437) / LaF3 class` | Public coefficient-backed catalog row matches the patent nd/vd pair. |
| L8 / S15 | `SF57 (Schott)` | `S-NPH53 (OHARA, 847239) / SF57 class` | Public coefficient-backed catalog row matches the patent nd/vd pair. |
| L9 / S17 | `LaK21 / LAC11 (Schott / HOYA)` | `713539 - LaK21 / LAC11-class lanthanum crown (no exact public catalog match)` | Code-labeled because no exact public coefficient-backed match was found. |
| L10 / S19 | `LaK14 / LAC9 (Schott / HOYA)` | `S-LAL10 (OHARA, 720502) / LaK14 class` | Public coefficient-backed catalog row matches the patent nd/vd pair. |

### APD, high-index, and SD review

- No APD status changes: the patent does not publish anomalous partial dispersion metadata for the Example 1 glasses.
- The high-index dense-flint correction role remains with L8 (nd = 1.84666); this pass only clarifies the catalog family.
- No SD change: the existing inferred clear apertures remain consistent with the retrofocus drawing and the patent omits numerical clear apertures.

### Analysis sync

- Updated the affected element descriptions to use catalog-backed labels or six-digit code labels consistently.
