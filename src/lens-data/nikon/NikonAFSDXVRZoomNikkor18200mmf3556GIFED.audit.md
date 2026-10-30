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

## 2026-08-18 — Screenshot follow-up

- Rechecked the supplied wide-state rendering against Figure 5. The revised G2 envelope remains the closest validator-safe silhouette, and no further SD edit was supported.
- Confirmed published W→T zoom order: G1/G2/G3/G4 all move objectward (`−64.3574`, `−6.4274`, `−34.0274`, and `−41.1274mm`). G2 also moves objectward during focus (`−0.9548mm` wide and `−9.4218mm` tele).
- Restored the source's 16 physical element numbers by labeling the two bonded resin media `4r` and `11r`, marked L12/L32 as the two inferred ED positions, and shortened the rear VR tag to avoid collision in the diagram.

## 2026-10-29 — F-mount surface and glass reinspection

Fresh original source `patents/US20060072213A1.pdf`: Example2 Figure5, PDF page6, directly reviewed at600dpi; Table2 page36 and continuationpage37; d-line definitionspage34. Inspected all18media faces and six material interfaces (four ordinary cemented pairs and two resin bonds). Embedded figure is300dpi. Approximately2660px across the102.82mm first-to-last vertex span gives about25.9px/mm at600dpi,12.9nativepx/mm.

Added the L21 bulk-glass rear S8 opaque extension10.0→15.0mm. Both the complete resin/glass interfaceS7 and resin frontS6A already span15.0mm, so this is a connected complete hybrid outline rather than a resin-only wing. The source depicts the rear concave seat; no optical radius is enlarged. Other concave air faces meet their rims without a resolved cap-end land; no speculative extra cut is inferred. The published S21A effective diameter15.0mm, both resin layers, source R/d/aspheres and existing documented wide-BF/focus reconstruction remain unchanged.

All18source nd/νd pairs match Table2 at d-line587.6nm:16physical glass elements plus two explicit resin layers. No source θgF/extra line indices or dispersion coefficients are published. The two qualified ED/APD inferences remain; no source measurement is invented. Current coverage16/18 is confirmed. No compatible catalog row exists for the two1.55389/38.09resin layers. All glass labels already qualify the supplier/proxy distinction and are retained.

| Medium | Source nd / νd | Current coefficient-backed proxy |
|---|---|---|
| L11 | 1.850260 / 32.35 | J-LASF021 |
| L12 | 1.497000 / 81.61 | H-FK61 |
| L13 | 1.603000 / 65.47 | S-PHM53 |
| L21r | 1.553890 / 38.09 | Unresolved |
| L21 | 1.816000 / 46.63 | J-LASF09A |
| L22 | 1.816000 / 46.63 | J-LASF09A |
| L23 | 1.846660 / 23.78 | J-SF03 |
| L24 | 1.788000 / 47.38 | J-LASF014 |
| L31 | 1.603000 / 65.47 | S-PHM53 |
| L32 | 1.497000 / 81.61 | H-FK61 |
| L33 | 1.850260 / 32.35 | J-LASF021 |
| L34r | 1.553890 / 38.09 | Unresolved |
| L34 | 1.772500 / 49.61 | J-LASF016 |
| L35 | 1.805180 / 25.43 | S-TIH6 |
| L41 | 1.676974 / 54.52 | S-LAL12 |
| L42 | 1.487490 / 70.24 | S-FSL5 |
| L43 | 1.834000 / 37.17 | S-LAH60 |
| L44 | 1.516800 / 64.12 | N-BK7 |

Absolute-path candidate surface, image-circle and aperture audits pass; resolver/`assertCatalogConsistent()` pass. Nine native SVG focus/zoom states were rendered and visually inspected with zero hidden rim trim. All source indices, actual spectral constraints, and selected qualified curves are retained; no tolerance is relaxed. Shared dispersion/partial-dispersion suites passed2files/93tests earlier in this wave. Coordinator records full gates/commit integration.
