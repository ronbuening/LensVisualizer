# Audit Log — Tamron SP 70-200mm f/2.8 Di VC USD (A009)

Patent: US 8,867,144 B2, Example 1, Figure 1

## 2026-08-17 — Patent-figure, display-name, movement, and glass review

### Semi-diameters

- Figure 1's wide, middle, and telephoto rows were rendered from the local patent at 300 dpi and checked directly.
- The modeled group envelopes track the source drawing across the three zoom states. No SD change was justified, and the image-circle audit is clean.

### Display name and glass

- Verified the displayed name against Tamron's official `SP 70-200mm F/2.8 Di VC USD` product designation.
- Added first-party Hoya formula-3 rows for PCD4, TAFD5G, and BAC4. All 23 physical glasses now have strict coordinate-compatible Sellmeier coverage.
- L2 now carries the construction drawing's single XLD classification, and L3, L4, L15, and L17 carry its four LD classifications, all as inferred diagram tags.

### Movement and diagram labels

- Recomputed every published infinity and close-focus state. LG3 alone moves objectward for closer focus; LG2, LG3, and LG4 retain their imageward wide-to-tele travel relative to fixed LG1 and LG5.
- Replaced long power/focus descriptions with the patent's concise `LG1`-`LG5` labels.

### Verification

- `npm run audit:image-circle -- src/lens-data/tamron/TamronSPA00970200mmf28VC.data.ts` — zero undersized surfaces.
- `npm run generate:glass-reports` — passed.
