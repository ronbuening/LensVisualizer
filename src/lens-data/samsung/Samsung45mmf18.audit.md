# Audit Log — Samsung 45mm f/1.8

Patent: US 2013/0314588 A1, Example 1 / Figure 1 / Tables 1 and 5

## 2026-08-04 — Patent-figure SD, display-name, and glass audit

### Patent-figure semi-diameters

- Local working source: `patents/US20130314588A1.pdf` (untracked), PDF page 2 / Figure 1.
- The prescription is retained without dimensional scaling.
- Figure 1 is schematic and has no aperture dimensions. A stable calibrated crop produced mutually consistent
  envelope and rim measurements for all seven elements.

| Element | Approx. figure rim | Authored maximum SD | Difference | Disposition |
|---|---:|---:|---:|---|
| L1 | 12.93 mm | 15.20 mm | +17.6% | Retained |
| L2 | 11.60 mm | 14.00 mm | +20.7% | Retained |
| L3 | 11.60 mm | 13.00 mm | +12.1% | Retained |
| L4 | 10.55 mm | 10.70 mm | +1.4% | Retained |
| L5 | 10.65 mm | 11.20 mm | +5.2% | Retained |
| L6 | 10.36 mm | 11.10 mm | +7.1% | Retained |
| L7 | 10.26 mm | 9.45 mm | -7.9% | Retained |

Every difference is below the repository's 25% schematic-figure change threshold. No SD was changed, avoiding
unsupported churn in values that already pass image-circle and geometric validation.

### Glass classification

The patent supplies only nd/vd coordinates. Compatible catalog curves are recorded as optical equivalents; none
identifies Samsung's production supplier.

| Element | Before | After | Disposition |
|---|---|---|---|
| L1 | Explicitly unmatched | Unchanged | No unique public coefficient-backed match |
| L2 | `714532 — lanthanum crown class` | `MP-LAC8-30 catalog equivalent; production supplier unspecified` | Added discontinued HOYA formula-3 row (`1.71330 / 53.95`) |
| L3 | `798451 — lanthanum dense-crown/flint class` | `Q-LASFPH3S catalog equivalent; production supplier unspecified` | Existing compatible Hikari curve |
| L4 | `618634 — phosphate crown class` | `S-PHM52 catalog equivalent; production supplier unspecified` | Existing compatible OHARA curve |
| L5, L6 | `835427 — lanthanum dense-flint class` | `S-LAH55 catalog equivalent; production supplier unspecified` | Existing compatible OHARA curve |
| L7 | Explicitly unmatched | Unchanged | No unique public coefficient-backed match |

The new MP-LAC8-30 curve raises this lens from 3/7 to 5/7 Sellmeier-covered elements together with the corrected L3
classification. `apd: false` remains appropriate because the patent provides no measured partial-dispersion data.

### Display name and analysis sync

- Changed `SAMSUNG NX 45mm f/1.8` to `SAMSUNG 45mm f/1.8`. Samsung's EX-S45ANB support page calls the product
  “45mm F1.8”; NX remains correctly represented by `lensMounts: ["samsung-nx"]`.
- Updated the companion analysis to use the catalog-equivalent glass labels and to keep supplier/APO claims bounded.

### Verification

- `npm run audit:patent-figure -- src/lens-data/samsung/Samsung45mmf18.data.ts patents/US20130314588A1.pdf 2 0.22,0.36,0.64,0.565` — envelope and rim estimates agreed for all seven elements.
- `npm run audit:image-circle -- src/lens-data/samsung/Samsung45mmf18.data.ts` — 1 checked, 0 undersized, 0 skipped.
- `npm run audit:surface -- src/lens-data/samsung/Samsung45mmf18.data.ts` — no validation errors.
- `npm run generate:glass-reports` — all 13 report tests passed; lens coverage is 5/7 with no mismatch.
- `npm run typecheck`, `npm run format:check`, and `npm run lint` — passed.
- `npm run test` — 220 files / 2591 tests passed.
- `npm run build` — passed; 1008 routes prerendered.
