# Audit Log — Nikon AF-S DX Zoom-Nikkor 12-24mm f/4 G IF-ED

Patent: US 6,940,655 B2, Example 1 / Figure 1.

## 2026-07-29 — Patent-figure SD and glass audit

### Semi-diameter review

The patent publishes only L1's effective diameter, so surface 1A/2A remains fixed at `43.65 / 2 = 21.825 mm`.
The other values remain figure-derived visualization estimates.

| Surfaces | Before | After | Figure evidence and constraint |
|---|---:|---:|---|
| 3–4 | 14.5, 13.5 mm | 17.0, 17.0 mm | Figure 1 shows the front portion of bonded component H1 materially wider than the original envelope. |
| 7–8 | 10.5, 10.0 mm | 12.7, 12.7 mm | The following L4 meniscus is also visibly broader in Figure 1. |

The apparent housing width around surfaces 5/6A was not used as an optical aperture. Enlarging those high-curvature
surfaces to the housing outline crosses the spherical domain and produces negative edge thickness, so both remain at
their validated 10.6 mm semi-diameter.

The post-edit figure screen has a `1.004` median figure/data ratio. Relative to that scale, the revised L2/L3
envelope is `0.89` and L4 is `0.86`, both within the procedure's figure-measurement tolerance. The resin boundary's
larger apparent outline remains validator-limited as noted above.

### Glass classification

| Elements | Before | After | Disposition |
|---|---|---|---|
| L7, L10 | `498825 — ED fluorophosphate class (vendor unresolved)` | `J-FKH1 (Hikari; patent code 498825)` | Current Hikari J-FKH1 has identical `nd = 1.497820` and `νd = 82.57`, only 0.05 above the patent row. The patent code remains explicit because this is a coordinate-successor classification, not melt provenance. |

The shared catalog already contained J-FKH1, so this relabel raises source-backed formula-3 coverage without adding
a duplicate glass record. The remaining proprietary/code-only rows stay unresolved.

### Analysis sync

- Updated both ED element descriptions, the glass table, chromatic discussion, SD provenance, and Hikari source.
- The production display name already followed the repository's designation-spacing convention.

### Verification

- Stored prescription: `npm run audit:surface -- <data-file>` — passed.
- Image-circle floor: `npm run audit:image-circle -- <data-file>` — passed.
- `npm test -- elementRenderDiagnostics` — passed (6 tests).
- `npm run typecheck`, `npm run format:check`, and `npm run lint` — passed; lint retained three unrelated pre-existing warnings.
- `npm run test` — passed (209 files, 2450 tests).
- `npm run build` — passed (966 routes prerendered).
- In-app browser screenshots were unavailable; visual comparison used the rendered 300 dpi patent page plus the passing full-catalog render diagnostics.

## 2026-08-18 — Hoya M-NBF1 coefficient assignment

- Visually rechecked local `patents/US6940655.pdf`, PDF page 14, Example 1 / Table 1. L1 remains `nd = 1.744429`, `νd = 49.55`.
- Added Hoya M-NBF1 from the first-party 2026-07-07 obsolete-inclusive AGF. Its polynomial evaluates to `1.743300 / 49.326`, within the repository's catalog-equivalent tolerances.
- Relabeled L1 to M-NBF1 while retaining patent code `744496` and the unspecified production supplier. The other unresolved optical-glass and resin rows are unchanged.
