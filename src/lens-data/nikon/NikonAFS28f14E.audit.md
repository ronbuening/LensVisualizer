# Audit Log - Nikon AF-S NIKKOR 28mm f/1.4E ED

Patent: JP2017-227799A, Example 1

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/JP2017227799A.pdf`; local text confirms the queued nd/vd rows.
- Updated L11 to `S-TIM28 (OHARA)`, L24 to `J-KZFH9 (Hikari)`, and L28 to `S-LAL13 (OHARA)`.
- Remaining coverage misses were the composite resin layer and an unrelated `S-LAL61` row.

## 2026-07-29 - Dispersion-coordinate follow-up

- Corrected L22 from `S-LAL61 (OHARA)` to `S-LAL14 (OHARA)`. S-LAL14 exactly matches the authored 1.69680 / 55.5 coordinate; newly cataloged S-LAL61 is the distinct 1.74100 / 52.64 glass.
- Synchronized both L22 analysis-table references.

## 2026-07-29 - Catalog expansion follow-up

- Corrected L26 from `S-LAH60V` to OHARA `L-LAH90`, the exact 1.83220 / 40.10 row.

## 2026-07-29 - Remaining catalog-mismatch audit

- Rechecked JP 2017-227799 A Example 1 surfaces 8 and 21; stored `R`, `d`, `nd`, and `νd` agree with the patent.
- Surface 8: replaced speculative `S-BAL2` with explicit unmatched 569560 barium-crown wording because multiple vendors occupy the coordinate.
- Surface 21: replaced `S-TIH6` with code-first `806333` dense flint; the coordinate matches coefficient-backed NBFD15, but the patent does not identify a vendor.
- Synchronized the L14/L25 analysis entries. No geometry changed.

## 2026-08-07 — N-BAK4 catalog recovery

- Visually rechecked Example 1 in local `patents/JP2017227799A.pdf`; L14 remains `1.56883 / 56.0`, code 569560.
- Schott N-BAK4 reproduces the coordinate and already has coefficient-backed catalog coverage in the project.
- Relabeled L14 as an N-BAK4 catalog equivalent while leaving Nikon's production supplier unspecified. The UV-cured composite element remains intentionally non-Sellmeier; no geometry changed.

## 2026-09-08 — Source and live-view audit

Original local JP2017227799A Example1: all27 rows pp.14–15, four conics/22 polynomial coefficients and equation p.13 verified; Figure1 p.21 rendered600dpi. Source uses1+K, so no conic changes. BF already air-equivalent under paragraph62; no cover/filter conversion or added planes. Retained the0.05mm compound resin layer, which is part of L12.

- Source object leg105.61 plus near track144.40 gives0.25001m object-to-image, replacing0.28m. Published D12/BF endpoints retained including0.02mm residual; fixed-image Gr2/stop motion−6.30mm and Gr1−0.02mm documented. Matrix gives105.570861mm near object leg, beta−.219053524; infinity EFL28.409897 and track144.38 reproduce summary.
- Figure-supported rims refined using105.91mm vertex span, separating front mechanical shoulders from optical arcs. Resin exit remains21.8mm because23mm trial gives negative0.203mm edge. This limitation remains follow-up. Adopted rims pass surface/image-circle and renderer no-trim checks.
- All isolated medium powers recalculated (source-listed L14/L15/L16 match). Source28.41/75.42 labels and f1.45 shortcut corrected. Glass names are inferred counterparts, unsupported ED/APD/production/process claims removed. Source pre-stop L24 PgF.5899 retained via runtime dPgF.0004286; copiedL23/L27 departures.014 removed.
- Three source regressions pass. Production baseline and local infinity/near/half/f16 viewed. Near25cm D12 1.42 BF44.77 EFL27.79; half50cm D12 4.56 BF41.62 EFL28.10; f16 stop2.42mm. Resin interface and both motion groups remain visible.

Batch21–30 full checks and commit pending.

## 2026-10-29 — F-mount surface and glass reinspection

Direct original-source review: `patents/JP2017227799A.pdf`, Example 1 Figure 1 on PDF page21 (600 dpi vector crop), prescription and coefficients on pages14–15, d-line/air-equivalent-BF definitions on page13. Inspected every convex/concave face, including the three cemented pairs and L12 hybrid interface. Approximately1120px across the105.91mm vertex span gives about10.6px/mm on the600dpi working raster; there is no embedded native figure bitmap.

Added S2 rear concave rim extension24.2→30.5mm, preserving its optical cap. Rejected S5A extension21.8→25mm: its opaque land crosses the glass/resin interface at23mm and produces−1.182mm edge thickness. The prior23mm clear-cap trial already failed at−0.203mm. No arbitrary partial land or thickness repair is substituted. Other concave faces meet their rims without a resolved cap-end land, so no additional cuts are inferred. All source R/d, aspheres, optical caps and published focus endpoints remain unchanged; BF remains source-defined air equivalent.

All15 source nd/νd pairs agree:14 physical elements plus the explicit0.05mm resin layer. Source d-line is587.56nm. The actual pre-stop L24 θgF=0.5899 on page15 remains converted to dPgF0.0004286 using0.6438−0.001682×32.3. Other media have no source spectral overrides/APD claims. Current14/15 coefficient coverage is retained; resin identity and curing process remain unspecified, so the unsupported UV-curing label was qualified. L25 continues to resolve to J-LASFH6 under its code-level qualified annotation; no supplier identity is asserted.

| Medium | Source nd / νd | Current coefficient-backed proxy |
|---|---|---|
| L11 | 1.688930 / 31.2 | S-TIM28 |
| L12 | 1.713000 / 53.9 | N-LAK8 |
| L12r | 1.513800 / 53 | Unresolved |
| L13 | 1.846660 / 23.8 | S-TIH53 |
| L14 | 1.568830 / 56 | N-BAK4 |
| L15 | 1.883000 / 40.8 | S-LAH58 |
| L16 | 1.772500 / 49.6 | S-LAH66 |
| L21 | 1.729160 / 54.7 | S-LAL18 |
| L22 | 1.696800 / 55.5 | S-LAL14 |
| L23 | 1.592820 / 68.6 | S-FPM2 |
| L24 | 1.738000 / 32.3 | J-KZFH9 |
| L25 | 1.806100 / 33.3 | J-LASFH6 |
| L26 | 1.832200 / 40.1 | L-LAH90 |
| L27 | 1.592820 / 68.6 | S-FPM2 |
| L28 | 1.693500 / 53.2 | S-LAL13 |

Selected coefficient curves remain unchanged and qualified spectral proxies; source indices and actual source partial dispersion remain authoritative. No tolerance was relaxed. Absolute-path candidate surface, image-circle and aperture audits pass; resolver/`assertCatalogConsistent()` pass. Nine actual native SVG focus/zoom states were rendered and visually inspected, with zero hidden rim trim. Shared dispersion/partial-dispersion suites passed2files/93tests for this wave. Coordinator records full gates and commit integration.
