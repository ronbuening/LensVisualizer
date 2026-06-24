# Nikon AF-P NIKKOR 70-300mm f/4.5-5.6E ED VR Patent Audit

## 2026-06-24 Patent Recheck

Reviewed local untracked patent file `patents/US20190353880A1.pdf`, First Example / Table 1 and FIGS. 1-5.

### Prescription, Zoom, Focus, And VR

- The data file remains aligned to First Example / Table 1: `f = 72.1 / 100.0 / 292.0 mm`, `FNO = 4.49 / 4.86 / 5.88`, and the five-group `G1(+), G2(-), G3(+), G4 focus(-), G5(+)` architecture.
- Table 1 confirms the stored variable distances for `d5`, `d13`, `d25`, `d29`, and `BF`. The focus table only changes `d25` and `d29`; BF remains zoom-state-dependent only.
- Paragraphs 0126-0130 confirm the 18-element layout, the four cemented pairs, and the stop at patent surface 20. No aspherical surfaces are published for Example 1.
- Paragraphs 0131-0133 confirm rear internal focus by imageward movement of G4 and VR correction by decentering the cemented L31/L32 positive group.

### Glass And APD

The patent gives `nd`/`νd` only. It does not name glass vendors and does not publish `θgF`, `Pg,F`, `dPgF`, `nC`, `nF`, or `ng` values.

| Element | Change | Reason |
|---|---|---|
| L12, L51 | `J-F2 (Hikari)` -> `F2 (Schott) / J-F2 class (Hikari)` | Patent row `nd=1.62004`, `νd=36.40` maps directly to coefficient-backed F2 while preserving the Hikari class note. |
| L13 | `apd: false` -> `apd: "inferred"`; label clarified as `J-FK01A (Hikari, ED fluorophosphate candidate)` | The patent row `nd=1.49700`, `νd=81.61` and Nikon's one-ED production specification make this the strongest ED counterpart; the patent has no partial-dispersion table. |
| L21 | `J-LAK14 (Hikari)` -> `S-LAL14 (OHARA) / J-LAK14 class (Hikari)` | Coefficient-backed lanthanum-crown surrogate for `nd=1.69680`, `νd=55.52`. |
| L22 | `J-SF11 (Hikari)` -> `SF11 (Schott) / J-SF11 class (Hikari; patent vd=25.64)` | Coefficient-backed dense-flint surrogate; the patent Abbe value remains stored. |
| L23, L42 | `J-LASF016 (Hikari)` -> `N-LAF34 (Schott) / S-LAH66 / J-LASF016 class` | `nd=1.77250`, `νd=49.62` matches N-LAF34 and the established S-LAH66/J-LASF016 class used elsewhere in Nikon files. |
| L32 | `J-LAK01 (Hikari)` -> `S-BSM81 (OHARA) / J-LAK01 class (patent vd=60.20)` | Best coefficient-backed class surrogate for `nd=1.64000`, with the patent Abbe value called out because the catalog `νd` is close but not exact. |
| L34 | `J-LASF03 (Hikari)` -> `H-ZLAF52A (CDGM) / J-LASF03 class` | Coefficient-backed dense-lanthanum-flint surrogate for `nd=1.80610`, `νd=40.97`. |
| L35 | `J-LASF010 (Hikari)` -> `S-LAH60 (OHARA) / J-LASF010 class` | Coefficient-backed high-index lanthanum-flint surrogate for `nd=1.83400`, `νd=37.18`. |
| L41 | `J-SF6 (Hikari)` -> `H-ZF7LA (CDGM) / S-TIH6 / J-SF6 class` | Coefficient-backed dense-flint surrogate closely matching `nd=1.80518`, `νd=25.45`. |
| L52 | `J-BAF10 (Hikari)` -> `N-BAF10 (Schott) / J-BAF10 class` | Coefficient-backed barium-flint surrogate for `nd=1.67003`, `νd=47.14`. |

The remaining J-series labels either already resolve to catalog coefficients or were not flagged by this pass. No patent-listed APD or line-index values were added.

### Semi-Diameters

- US 2019/0353880 A1 does not publish per-surface clear apertures or effective diameters for Example 1.
- Current SDs remain documented renderer estimates. They make rational sense against FIG. 1 and the production 67 mm filter constraint: largest front semi-diameter, reduced G2 variator apertures, stop at `sd = 11.2 mm`, compact rear-focus group, and moderate rear relay re-expansion.
- No SD values were changed in this pass.

### Analysis Sync

- Updated the element-by-element glass names, the glass-identification table, and the L13 APD/ED explanation in `NikonAFP70300mmf4556E.analysis.md`.
- Kept all focal length, zoom, focus, VR, conditional-expression, and verification values unchanged.

### Verification

- Pending batch verification after the current Nikon audit pass.
