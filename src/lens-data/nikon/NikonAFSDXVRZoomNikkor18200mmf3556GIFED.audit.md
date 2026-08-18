# Nikon AF-S DX VR ZOOM-NIKKOR 18–200mm f/3.5–5.6G IF-ED Patent Audit

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
- The glass audit retained only the two bonded resin layers as unmatched and recovered L41 with compatible OHARA `S-LAL12`; no new catalog row was required.
- Normalized the display name to `NIKON AF-S DX VR ZOOM-NIKKOR 18-200mm f/3.5-5.6G IF-ED`.

### Verification

- `npm run audit:surface -- src/lens-data/nikon/NikonAFSDXVRZoomNikkor18200mmf3556GIFED.data.ts --scan 6A 15`
- `npm run audit:image-circle -- src/lens-data/nikon/NikonAFSDXVRZoomNikkor18200mmf3556GIFED.data.ts`
- Full repository checks are recorded in the integrating commit.

## 2026-08-18 — Screenshot follow-up

- Rechecked the supplied wide-state rendering against Figure 5. The revised G2 envelope remains the closest validator-safe silhouette, and no further SD edit was supported.
- Confirmed published W→T zoom order: G1/G2/G3/G4 all move objectward (`−64.3574`, `−6.4274`, `−34.0274`, and `−41.1274mm`). G2 also moves objectward during focus (`−0.9548mm` wide and `−9.4218mm` tele).
- Restored the source's 16 physical element numbers by labeling the two bonded resin media `4r` and `11r`, marked L12/L32 as the two inferred ED positions, and shortened the rear VR tag to avoid collision in the diagram.
