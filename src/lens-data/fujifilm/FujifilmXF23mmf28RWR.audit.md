# Audit Log - FUJINON XF23mmF2.8 R WR

Patent: US 2026/0118637 A1, Example 4

## 2026-06-15 - New-lens patent audit

### Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L21 / S6 | `glass` | `NBFD32 (HOYA, 730/322)` | `730322 - NBFD32 (HOYA dense barium flint; no Sellmeier catalog entry)` | Patent Table 10 gives nd=1.73037, vd=32.23, theta_g,F=0.5900; the unbroken code keeps the known glass-code pair future-upgradable. |
| L26 / S14-S15 | `glass` | `M-NBFD130-class moldable dense barium flint (HOYA 806/407)` | `NBFD13 / M-NBFD130 (HOYA, 806407 code)` | Patent Table 10 gives nd=1.80610, vd=40.73; the local catalog has coefficient-backed HOYA NBFD13 for the 806407 code family. |

### Retained-information audit

- Surface radii, infinity spacings, nd/vd values, theta_g,F values, and DD[15] focus spacing were checked against Tables 10-11.
- Effective-diameter values were checked against Table 10 and Fig. 4; data-file SDs use ED/2 except the documented S12 enlargement from 5.240 mm to 5.520 mm for renderer clearance.
- Asphere surfaces S1, S2, S14, and S15 were checked against Table 12; the data file keeps the documented even-order fit for project renderer compatibility.

### Analysis sync

- Updated L21 and L26 glass descriptions and source wording in the companion analysis.
