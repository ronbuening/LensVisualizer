# Audit Log — Samsung 20mm f/2.8

Patent: US 2012/0056976 A1, Example 1 / Figure 1 / Tables 1–3

## 2026-08-04 — Patent-figure SD, display-name, and glass audit

### Patent-figure semi-diameters

- Local working source: `patents/US20120056976A1.pdf` (untracked), PDF page 2 / Figure 1.
- The prescription is retained without dimensional scaling.
- Figure 1 is schematic and has no aperture dimensions. Hand-read element rims were compared after calibrating the
  figure from surface vertices; the automated rim detector was also run, but drawing labels and brackets contaminated
  several candidates.

| Element | Approx. figure rim | Authored maximum SD | Difference | Disposition |
|---|---:|---:|---:|---|
| L1 | 8.00 mm | 7.80 mm | -2.5% | Retained |
| L2 | 6.55 mm | 6.00 mm | -8.4% | Retained |
| L3 | 6.55 mm | 5.90 mm | -9.9% | Retained |
| L4 | 6.12 mm | 7.10 mm | +16.0% | Retained |
| L5 | 6.67 mm | 7.80 mm | +16.9% | Retained |
| L6 | 7.65 mm | 8.40 mm | +9.8% | Retained |

Every difference is below the repository's 25% schematic-figure change threshold. No SD was changed, avoiding
unsupported churn in values that already pass image-circle and geometric validation.

### Glass classification

The patent supplies only nd/vd coordinates. Compatible catalog curves are recorded as optical equivalents; none
identifies Samsung's production supplier.

| Element | Before | After | Disposition |
|---|---|---|---|
| L1 | `743492-class ... vendor unresolved` | `NBF1 catalog equivalent; production supplier unspecified` | Existing compatible HOYA curve |
| L2 | `518590-class ... vendor unresolved` | `E-C3 catalog equivalent; production supplier unspecified` | Existing compatible HOYA curve |
| L3 | `883408-class ... vendor unresolved` | `S-LAH58 catalog equivalent; production supplier unspecified` | Existing compatible OHARA curve |
| L4 | `804465-class ... vendor unresolved` | `N-LASF44 catalog equivalent; production supplier unspecified` | Existing compatible Schott curve |
| L5 | `699301-class ... vendor unresolved` | `E-FD15 catalog equivalent; production supplier unspecified` | Existing compatible HOYA curve |
| L6 | Explicitly unmatched | Unchanged | No unique public coefficient-backed match |

### Display name and analysis sync

- Changed `SAMSUNG NX 20mm f/2.8` to `SAMSUNG 20mm f/2.8`. Samsung's EX-W20NB support page calls the product
  “20mm F2.8”; NX remains correctly represented by `lensMounts: ["samsung-nx"]`.
- Updated the companion analysis to use the catalog-equivalent glass labels and to keep supplier/APO claims bounded.

### Verification

- `npm run audit:patent-figure -- src/lens-data/samsung/Samsung20mmf28.data.ts patents/US20120056976A1.pdf 2 0.20,0.42,0.54,0.70` — completed; final disposition uses the hand-read rims documented above because labels contaminated automated candidates.
- `npm run audit:image-circle -- src/lens-data/samsung/Samsung20mmf28.data.ts` — 1 checked, 0 undersized, 0 skipped.
- `npm run audit:surface -- src/lens-data/samsung/Samsung20mmf28.data.ts` — no validation errors.
- `npm run generate:glass-reports` — all 13 report tests passed; lens coverage remains 5/6 with no mismatch.
- `npm run typecheck`, `npm run format:check`, and `npm run lint` — passed.
- `npm run test` — 220 files / 2591 tests passed.
- `npm run build` — passed; 1008 routes prerendered.

## 2026-08-18 - L6 coefficient backfill

- Visually rechecked Example 1 / Table 1 on rendered page 17 of `patents/US20120056976A1.pdf`; L6 is confirmed at
  `1.68997 / 53.0`.
- The later-added K-VC80-M catalog curve is the unique compatible coefficient-backed entry for this coordinate, so
  L6 is now recorded as an optical equivalent with Samsung's production supplier unspecified.
- This supersedes the 2026-08-04 unresolved disposition. No patent constant, asphere, or geometry value changed.
