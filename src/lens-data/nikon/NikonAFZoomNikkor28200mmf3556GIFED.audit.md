# Audit Log — Nikon AF Zoom-Nikkor 28-200mm f/3.5-5.6 G IF-ED

Patent: US 6,621,643 B2, Example 1 / Figure 1.

## 2026-07-29 — Patent-figure SD, display-name, and glass audit

### Semi-diameter review

The patent does not publish clear apertures for these elements, so the revised values remain Figure 1-derived
visualization estimates constrained by the exact surface validator.

| Surfaces | Before | After | Figure evidence |
|---|---:|---:|---|
| 4–5 | 23.3, 23.3 mm | 19.0, 19.0 mm | Figure 1 shows L12 appreciably narrower than the leading cemented L11 pair. |
| 6A–8 | 10.2, 10.2, 10.2 mm | 12.5, 12.5, 12.5 mm | The hybrid L21 component is broader in the patent section than in the original model. |

The leading L11 pair and the remaining rear groups were already within the visual-measurement tolerance of Figure 1
and were left unchanged.

The post-edit figure screen has a `1.113` whole-lens median figure/data ratio. After normalizing by that scale, both
revised components read `1.00`: L12 is `1.000`, and the two material layers of hybrid L21 are `0.999` and `1.004`.

### Glass classification

| Elements | Before | After | Disposition |
|---|---|---|---|
| L11b | `640601 — lanthanum crown class` | `J-LAK01 (Hikari; patent code 640601)` | Current Hikari J-LAK01 retains `nd = 1.640000`; the final code digit reflects the catalog's rounded `νd = 60.20` rather than patent `60.09`. |
| L12, L31, L32 | `498825 — ED glass (catalog unresolved)` | `J-FKH1 (Hikari; patent code 498825)` | Current Hikari J-FKH1 has identical `nd = 1.497820` and a `νd` difference of only 0.05. |

Added the previously absent J-LAK01 formula-3 row to the shared glass catalog. The labels retain the patent codes and
the analysis identifies both assignments as coordinate successors rather than proof of the historical melts.

### Metadata and analysis sync

- Normalized the display name to separate the aperture from the `G` designation.
- Updated the analysis heading, element descriptions, glass table, chromatic discussion, SD provenance, and Hikari source.

### Verification

- Stored prescription: `npm run audit:surface -- <data-file>` — passed.
- Image-circle floor: `npm run audit:image-circle -- <data-file>` — passed.
- `npm test -- elementRenderDiagnostics` — passed (6 tests).
- `npm run typecheck`, `npm run format:check`, and `npm run lint` — passed; lint retained three unrelated pre-existing warnings.
- `npm run test` — passed (209 files, 2450 tests).
- `npm run build` — passed (966 routes prerendered).
- In-app browser screenshots were unavailable; visual comparison used the rendered 300 dpi patent page plus the passing full-catalog render diagnostics.
