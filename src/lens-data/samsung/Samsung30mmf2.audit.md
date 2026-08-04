# Audit Log — Samsung 30mm f/2

Patent: US 2010/0149663 A1, First Embodiment / Figure 1 / Table 1

## 2026-08-04 — Patent-figure SD, display-name, and glass audit

### Patent-figure semi-diameters

- Local working source: `patents/US20100149663A1.pdf` (untracked), PDF page 2 / Figure 1.
- The prescription is retained without dimensional scaling.
- Figure 1 is schematic and has no aperture dimensions. Strongly overlapping rims made the automated detector
  unreliable for L3 and L5, so the final comparison uses hand-read full-element rims after vertex calibration.

| Element | Approx. figure rim | Authored maximum SD | Difference | Disposition |
|---|---:|---:|---:|---|
| L1 | 8.61 mm | 9.40 mm | +9.2% | Retained |
| L2 | 6.96 mm | 7.85 mm | +12.8% | Retained |
| L3 | 6.96 mm | 6.70 mm | -3.7% | Retained |
| L4 | 8.21 mm | 9.00 mm | +9.6% | Retained |
| L5 | 10.81 mm | 10.20 mm | -5.6% | Retained |

Every difference is below the repository's 25% schematic-figure change threshold. No SD was changed, avoiding
unsupported churn in values that already pass image-circle and geometric validation.

### Glass classification

The patent supplies only nd/vd coordinates. Compatible catalog curves are recorded as optical equivalents; none
identifies Samsung's production supplier.

| Element | Before | After | Disposition |
|---|---|---|---|
| L1 | `697555 lanthanum-crown class` | `J-LAK14 catalog equivalent; production supplier unspecified` | Existing exact Hikari coordinate |
| L2 | Explicitly unmatched | Unchanged | No unique public coefficient-backed match |
| L3 | `785257 dense-flint class` | `H-ZF13 catalog equivalent; production supplier unspecified` | Existing compatible CDGM curve |
| L4 | `804465 high-index lanthanum class` | `N-LASF44 catalog equivalent; production supplier unspecified` | Existing compatible Schott curve |
| L5 | `883408 high-index lanthanum-flint class` | `S-LAH58 catalog equivalent; production supplier unspecified` | Existing compatible OHARA curve |

### Display name and analysis sync

- Retained `SAMSUNG 30mm f/2`: Samsung's EX-S30NB support page calls the product “30mm F2.0,” and NX is already
  represented by `lensMounts: ["samsung-nx"]`.
- Updated the companion analysis to use the catalog-equivalent glass labels and to keep supplier/APO claims bounded.

### Verification

- `npm run audit:patent-figure -- src/lens-data/samsung/Samsung30mmf2.data.ts patents/US20100149663A1.pdf 2 0.32,0.20,0.61,0.44` — completed; final disposition uses the hand-read rims documented above because overlapping elements contaminated automated candidates.
- `npm run audit:image-circle -- src/lens-data/samsung/Samsung30mmf2.data.ts` — 1 checked, 0 undersized, 0 skipped.
- `npm run audit:surface -- src/lens-data/samsung/Samsung30mmf2.data.ts` — no validation errors.
- `npm run generate:glass-reports` — all 13 report tests passed; lens coverage remains 4/5 with no mismatch.
- `npm run typecheck`, `npm run format:check`, and `npm run lint` — passed.
- `npm run test` — 220 files / 2591 tests passed.
- `npm run build` — passed; 1008 routes prerendered.
