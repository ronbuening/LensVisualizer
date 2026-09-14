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
