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

## 2026-10-07 — Zoom iris and station f-numbers against the patent

Read against US 2019/0353880 A1, First Example, Table 1 (PDF page 45, printed page 7) and the spherical-aberration legends of FIGS. 2A, 3, and 4A (sheets 2-4, PDF pages 3-5).

| Field | Before | After | Source |
|---|---|---|---|
| `nominalFno[0]` (wide, 72.1 mm) | 4.5 | 4.49 | Table 1, [Various data], FNO row, W column (PDF p. 45, printed p. 7) |
| `nominalFno[2]` (tele, 292.0 mm) | 5.6 | 5.88 | Table 1, [Various data], FNO row, T column (same page); FIG. 4A legend FNO=5.88 (sheet 4, PDF p. 5) |
| `apertureDesign` | absent | 4.49 | Table 1, [Various data], FNO row, W column |
| `fstopSeries[0]` | 4.5 | 4.49 | Follows `nominalFno[0]`, the wide-open value the series starts from |

- `zoomApertureModel: "fixed-iris"` is kept. The patent states no stop diameter and says nothing about the stop changing with zoom: Table 1 row 20 prints only `∞ / 14.110 / (Stop S)`, ¶0128 places stop S between the L33/L34 and L35/L36 cemented pairs in G3, and ¶0136 says the legend FNO is the maximum-aperture value. The single opening rests on the printed f-numbers: by the real marginal ray, 4.49 / 4.86 / 5.88 need stop radii of 11.6075 / 11.6209 / 11.6202 mm, a spread of 0.12 %, and any radius from 11.6103 to 11.6204 mm satisfies all three within print rounding.
- The fixed iris is the radius traced from the wide value, 11.6075 mm. It sits 0.02 % below that common window, so the middle and tele stations trace one count high in the last printed digit: f/4.49 at 72.1 mm (0.0 %), f/4.87 at 100.0 mm (+0.1 %), f/5.89 at 292.0 mm (+0.1 %). The iris limits the on-axis beam at all three stations; no element rim does.
- The marketed f/4.5-5.6 remains in the lens name and the `specs` line "Marketed 70-300 mm f/4.5-5.6".
- Confirmed unchanged: example identity (all 33 [Lens data] rows of Table 1 match the file's R, D, and nd, from s1 `109.4870 / 4.600 / 1.48749` to s33 `-106.0000 / BF`); focal lengths 72.1 / 100.0 / 292.0 mm (computed EFL 72.0992 / 99.9974 / 292.0075 mm); d5, d13, d25, and d29 at infinity and at short distance; BF 39.12 / 46.45 / 67.12 mm; stop at surface 20 with 2.700 mm before it and 14.110 mm after it; `nominalFno[1]` = 4.86, as printed in the M column.
- No semi-diameter changed. The STO row keeps `sd: 11.2`, a paraxial estimate rather than a patent value (the paraxial radii for the printed f-numbers are 11.1940 / 11.2011 / 11.1715 mm); it does not size the wide-open iris, which is traced from `nominalFno`. The 2026-06-24 note "stop at `sd = 11.2 mm`" refers to that authored row.
- Open: the patent prints a second f-number set in the figure legends, FIG. 2A FNO=4.48, FIG. 3 FNO=4.87, FIG. 4A FNO=5.88, differing from Table 1 by 0.01 at wide and middle. The file follows Table 1. The legend set needs real-ray radii of 11.6355 / 11.5951 / 11.6202 mm (spread 0.35 %) and has no common radius within print rounding.
- Open: the file has no `apertureMarketing`. Nikon's marketed wide aperture is f/4.5, 0.2 % from the design 4.49; the field is not added in this pass.
- Open: `closeFocusM: 1.2` is paired with the Table 1 short-distance gaps, but the patent prints no object distance for that state (FIGS. 5A-5C give numerical apertures only). The analysis note reconstructs it as β ≈ -0.033 at about 2.10 / 2.91 / 8.55 m from the first surface. Not addressed in this pass.
