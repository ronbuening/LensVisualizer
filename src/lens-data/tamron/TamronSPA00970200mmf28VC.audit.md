# Audit Log — Tamron SP 70-200mm f/2.8 Di VC USD (A009)

Patent: US 8,867,144 B2, Example 1, Figure 1

## 2026-08-14 — Patent-figure, display-name, and glass review

### Semi-diameters

- Figure 1's wide, middle, and telephoto rows were rendered from the local patent at 300 dpi and checked directly.
- The modeled group envelopes track the source drawing across the three zoom states. No SD change was justified, and the image-circle audit is clean.

### Display name and glass

- Verified the displayed name against Tamron's official `SP 70-200mm F/2.8 Di VC USD` product designation.
- Added first-party Hoya formula-3 rows for PCD4, TAFD5G, and BAC4. All 23 physical glasses now have strict coordinate-compatible Sellmeier coverage.

### Verification

- `npm run audit:image-circle -- src/lens-data/tamron/TamronSPA00970200mmf28VC.data.ts` — zero undersized surfaces.
- `npm run generate:glass-reports` — passed.
