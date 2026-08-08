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
