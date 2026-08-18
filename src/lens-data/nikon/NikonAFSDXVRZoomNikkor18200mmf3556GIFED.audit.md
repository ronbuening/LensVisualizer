# Nikon AF-S DX VR ZOOM-NIKKOR 18–200mm f/3.5–5.6 G IF-ED Patent Audit

Patent: US 2006/0072213 A1, Example 2

## 2026-08-18 — Initial integration audit

- Reviewed the untracked local patent PDF `patents/US20060072213A1.pdf`; Figure 5 on PDF page 6 is the controlling optical section.
- The original negative G2 group was too narrow relative to the adjacent groups. The revised values move its outline toward the schematic while respecting the very steep surface 8 and the short internal air gaps.

| Surfaces | Before (mm) | After (mm) |
|---|---:|---:|
| 6A / 7 | 12.8 / 12.8 | 15.0 / 15.0 |
| 9 / 10 | 9.4 / 9.2 | 9.8 / 9.7 |
| 11 / 12 | 9.2 / 8.7 | 10.5 / 10.0 |
| 13 / 14 | 8.5 / 8.5 | 9.5 / 9.5 |

- Surface 8 remains at 10.0mm: enlarging it toward the drawn outline would approach a 90-degree rim and fail the physical surface validator. The changed 6A asphere remains monotonic and validator-safe at 15.0mm, with a computed rim departure of approximately `+0.2592mm`.
- The glass audit retained the two bonded resin layers and the L41 coordinate as unmatched; the remaining class-coded rows already obtain compatible catalog curves. No speculative vendor relabel was made.
- The display name was reviewed and already follows the project convention.

### Verification

- `npm run audit:surface -- src/lens-data/nikon/NikonAFSDXVRZoomNikkor18200mmf3556GIFED.data.ts --scan 6A 15`
- `npm run audit:image-circle -- src/lens-data/nikon/NikonAFSDXVRZoomNikkor18200mmf3556GIFED.data.ts`
- Full repository checks are recorded in the integrating commit.
