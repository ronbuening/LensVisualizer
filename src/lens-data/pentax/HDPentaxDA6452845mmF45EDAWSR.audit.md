# Audit Log — HD PENTAX-DA645 28-45mm f/4.5 ED AW SR

Patent: JP 2015-87681 A, Numerical Example 1, Figure 1 and Tables 1–4

## 2026-08-14 — Patent-figure, metadata, and glass review

### Semi-diameters

No SD change was justified. A 600 dpi Figure 1 comparison gave a whole-lens figure/data median near 0.93, and the normalized element profiles stayed within the drawing's practical 15–25% measurement tolerance. The two authored resin/glass hybrid boundaries also match the source silhouette.

### Labels and glass

- Corrected the displayed model name to Ricoh's `HD PENTAX-DA645` styling.
- Added the official two-ED-element specification and inferred APD/ED diagram tags at patent positions L24 and L43, which map to Ricoh's identified physical lenses 8 and 15. The S-FPL51 identity remains a catalog-model equivalence, not a production-supplier claim.
- Seventeen of nineteen authored media have trusted catalog coverage. The two unmatched media are the patent's synthetic hybrid-asphere layers, whose chemistry is not published; no glass identity was fabricated for them.

### Motion

- Rechecked all three zoom stations and the constrained close-focus rows. Wide-to-tele order remains 28.699 / 34.999 / 43.874 mm; G2 and G4 move objectward, G1 moves slightly imageward, and G3 remains fixed to source rounding. Close focus moves G2a imageward by increasing d9 while decreasing d14 by the same amount.

## 2026-10-06 — Glass label canonicalization

The labels of L32, L34 and L45 were written with OHARA's spaced typography (`S-NBH 8`, `S-TIH 6`, `S-FSL 5`), which
the glass resolver does not tokenize, so the three labels matched no catalog row and the elements were covered
only through their authored C/F/g line indices. They now read `S-NBH8`, `S-TIH6` and `S-FSL5` in the data and
analysis files and resolve to the existing OHARA catalog rows (catalog 1.72047 / 34.71, 1.80518 / 25.43 and
1.48749 / 70.24 against the stored 34.7, 25.4 and 70.2). No index, Abbe number, line index or identification
changed, and the authored line indices still drive tracing; seventeen of the nineteen labels now match a catalog
row, the other two being the unpublished hybrid-asphere resin layers.

## 2026-10-07 — Display name

Display name changed from `HD PENTAX-DA645 28-45mm f/4.5 ED AW SR` to `PENTAX HD DA645 28-45mm f/4.5 ED AW SR`. The
2026-08-14 pass had adopted Ricoh's own styling; the catalog convention puts the maker first, as the other HD D FA
and HD DA* entries already did, so all Pentax names now start with PENTAX. The lens key is unchanged.
