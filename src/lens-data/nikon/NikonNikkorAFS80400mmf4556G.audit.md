# Nikon AF-S NIKKOR 80-400 mm f/4.5-5.6G ED VR Patent Audit

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

## 2026-07-29 - Remaining catalog-mismatch audit

- Rechecked US 2020/0049962 A1 Example 1 surface 6; stored `R`, `d`, `nd=1.80100`, and `νd=34.90` agree with the patent.
- Relabeled L21 from incorrect OHARA `S-LAH52` to Hikari `J-LAF016`, the exact Nikon/Hikari 801349 coordinate.
- Synchronized the analysis glass table. No prescription geometry changed.

## 2026-10-30 — Fresh original-figure and glass reinspection

- Directly viewed `patents/US20200049962A1.pdf`: Example 1 Fig. 1 PDF 2 at 600 dpi; every Table 1 medium and d587.6 nm definitions, Table 2 source infinity gaps, PDF 50. All 20 physical-glass nd/νd pairs are retained. Table 1 publishes no θgF/PgF or C/F/g anchors; production ED/Super ED assignments remain qualified inferences.
- Reviewed every convex/concave and shared face. S7 continuous cap grows26→27 mm; S8 retains its22.4 mm concave optical cap and gains `rimExtensionSd:27`. Fig. 1 has a resolved straight land, q≈.85±.007 (native scale≈10.5 px/mm from the193.636 mm vertex span; native edge≈263px); adopted q=.82963 preserves the old cap and 27 mm working rim. No new numeric cut or inward cap change.
- Rejected coupled full-height trials at the VR shared interface/rear (S10/11→22.4, L24 edge−2.307 mm), focusing doublet (S17/18→20.3, L33−.844 mm), G5 triplet (S27/28→17.6, L54−1.910 mm), and rear doublet (S29/30→15, L55−1.567 mm). The source’s schematic common outlines cannot be imposed with the literal profiles. No cement-interface lands or speculative cuts were invented; other caps remain.
- Removed only L31/L33’s eight catalog-derived override copies: dPgF.0135 and C/F/g indices on each. They were not source observations. Both now follow their existing J-PSKH1 curve directly; actual channel deltas on each: R−1.55280e−7, G0, B+3.24710e−9, V+4.49609e−7. Source nd/νd remain1.59319/67.9; inferred APD remains qualified. All 20 current curves are unchanged, with S-NSL36 explicitly nonidentical (nativeν52.430903/source 52.2). Corrected the stale public L32 name to its actual S-LAH95 curve; qualified every catalog identity and supplier.
- Focused surface/image-circle/aperture/field checks pass: all 3 aperture stations, all 3≥99% field. Nine actual SVG states have zero trim. Resolver/catalog consistency passes with 20/20 coefficient curves. All source R/d, every nd/νd pair, APD flags and source controls remain unchanged; no engine or tolerance change.
