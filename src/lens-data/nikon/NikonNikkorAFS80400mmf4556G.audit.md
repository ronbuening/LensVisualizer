# Nikon AF-S NIKKOR 80-400mm f/4.5-5.6G ED VR Patent Audit

## 2026-06-24 Patent Recheck

Reviewed local untracked patent file `patents/US20200049962A1.pdf`, Example 1 / Table 1 and FIGS. 1-5.

### Prescription, Zoom, Focus, And VR

- The data file remains aligned to Example 1: `f = 81.6 / 200.0 / 392.0 mm`, `FNO = 4.56 / 5.38 / 5.85`, and the five-group `G1(+), G2(-), G3(+ focus), G4(-), G5(+)` telephoto zoom architecture.
- Table 1 confirms the stored surface radii, thicknesses, `nd`/`νd` values, all-spherical construction, stop at patent surface 22, and the group focal lengths used by the analysis.
- Table 2 confirms the infinity zoom variables `D1`, `D2`, `D3`, `D4`, and `BF`. The close-focus spacings remain paraxial estimates from the production 1.75 m AF minimum-focus distance, because the patent table publishes infinity zoom spacings only.
- Paragraphs 0216-0218 confirm G3 focusing and the L23/L24 vibration-reduction subgroup.

### Glass And APD

| Element | Change | Reason |
|---|---|---|
| L11, L42 | `LaH dense flint (1903/357)` -> `J-LASFH9 (Hikari, 903357 high-index lanthanum flint)` | Patent row `nd=1.90265`, `νd=35.7` matches an existing Hikari catalog entry. |
| L12, L22 | `S-FPL51 class (ED)` -> `J-FKH1 (Hikari, 498826 ED fluorophosphate)` | Exact catalog match for `nd=1.49782`, `νd=82.6`; keeps ED status inferred from Nikon's four-ED production specification. |
| L31, L33 | `Phosphate crown (ED)` -> `J-PSKH1 (Hikari, 593679 ED phosphate crown)` | Exact catalog match for `nd=1.59319`, `νd=67.9`; added catalog-derived `dPgF`, `nC`, `nF`, and `ng` helper fields matching existing Nikon J-PSKH1 usage. |
| L53 | `TAFD45 (HOYA)` -> `J-LASFH15 (Hikari, 950294) / TAFD45 class` | Stored patent row `nd=1.95000`, `νd=29.4` matches the existing Hikari catalog entry better than Hoya TAFD45. |
| L55 | `S-TIF6 (OHARA)` -> `S-TIM22 (OHARA) / S-TIF6 class (patent vd=33.7)` | Existing catalog coefficient surrogate for `nd=1.64769`; patent Abbe is retained in the data. |
| L56 | `Phosphate crown (proprietary)` -> `S-PHM53 (OHARA) / phosphate crown class` | Existing catalog class for `nd=1.60300`, `νd=65.4`; no ED/APD flag introduced. |

The patent gives only `nd`/`νd` rows. It has no `θgF`, `Pg,F`, or line-index table. APD remains inferred for Nikon's four ED rows and one Super ED row only; ordinary low-dispersion or high-index rows remain `apd: false`.

### Semi-Diameters

- US 2020/0049962 A1 does not publish per-surface clear apertures or effective diameters for Example 1.
- Current SDs remain documented renderer estimates. They make rational sense against FIG. 1 and the production 77 mm filter constraint: a capped large front group, tightened fixed G2/VR apertures, a large moving stop near G5, and compact rear field-corrector groups.
- No SD values were changed in this pass.

### Analysis Sync

- Updated the glass-identification section and group tables in `NikonNikkorAFS80400mmf4556G.analysis.md`.
- Removed unsupported anomalous-dispersion wording from L56; it remains a low-dispersion crown partner with `apd: false`.

### Verification

- Pending batch verification after the current Nikon audit pass.
