# Audit Log — SIGMA APO 80–400 mm f/4.5–5.6 EX OS

Patent: JP 2004-061605 A, Numerical Example 1.

## Controlling source/model decisions, consolidated 2026-10-30

- Original `patents/JP2004061605A.pdf`: d-line definition ¶0014 PDF p. 5, Example 1 prescription/states pp. 6–7, Figure 1 p. 15 and front-page copy p. 2. All 35 source rows retained, twenty elements/fourteen groups, stop row 20, six variable gaps and Bf at three infinity/3000 mm states. Examples 2/3 have a different 19/13 layout and are excluded.
- Literal source EFL 81.24/180.52/389.46 mm, Bf 54.14/65.99/89.18 mm, full fields 29.8/13.4/6.2°. Printed 3000 mm rows close at object-to-image distance, and that reference is retained. G7 moves imageward by 1.02/3.91/12.32 mm. Production 1.8 m minimum focus is not reconstructed; published 3 m state is the modeled limit.
- Existing 41 station model preserves all 3 source rows, uses paraxially solved G4/G6 intermediate positions, interpolates other gaps and derives intermediate G7 focus. Intermediate F is modeled through 4.46/5.3/5.83; middle 5.3 comes from Figure 3. No factory cam or finite-distance MTF reference. OS groupG3B centered only, not shifted.
- NativeFigure 1 is about 0.1829 mm/px at 300 dpi; its vertex positions agree with the wide infinity prescription and its rim ordering is retained. Source steps at S9/S12 do not authorize extending the powered curves. Preserve first group 37/37/35, G3A18.5 with S9 cap 16.4, G3B16 with S12 cap 14.9, L8S13/S14=14.7, G4 outer 17.5 and rear 12–13.2 mm ordering. L8 14.7 supersedes old 14.0 and uses the existing approved gapSagFrac 0.98; positive air remains. No further expansion of that tolerance.
- Heavy wide-end corner-bundle clipping follows the inferred front rims; a clear chief ray is not full pupil transmission. Printed two-decimal Bf leaves image-plane residual below 0.048 mm. Construction-based correlation with the original 2002 non-DG lens is qualified; laterDGformula identity is not claimed.

## 2026-10-30 — Fresh F-mount rims, concave ends and glass

- Reopened original definition/table/state pages above and selectedFigure 1 at native/page and 600 dpi. All 20 nd/νd pairs agree; all 20 retain compatible coefficient models. Source explicitly defines d-line; no actual C/F/g index, PgF/theta or Sellmeier coefficient row supplied. No per-lens catalog spectral copies. Three 1.49700/81.6 family APD tags remain inferred, without source anomalous-material identification. Supplier/melt unresolved.
- Inspected every convex/concave airface and compound boundary. S9 has an oblique bevel. S12 ends at a stepped shoulder inside the compound outline; extending only the final face to its partner's outer edge or inventing an opaque shared interface land would misrepresent that joint. Retain the constrained cap, connected compounds and remaining source-relative heights. Few-pixel corners on later menisci do not prove new flat lands. No new geometry, cuts or source exemption.
- Canonical/surface checks pass, image-circle zero undersized, centered corner clear at all 41 infinitystations, all nominal axial apertures within 3%. Actual 9-view production SVG inspected;729 renderstates across all 9 focuskeyframes and zoom half-stations finite with zero hidden trim. Common-field 16×16 lattice at all 9 focuskeyframes,3 zoompositions and 5 fieldfractions:23,826 retained,0 lost,0 gained, sampled counts not flux. No R/d/media/stop/aperture/focus/zoom/tolerance change; production 1.8 m and shiftedOS remain outside modeled evidence.

## 2026-11-14 — Published finite-conjugate certification

Patent: JP2004061605A, Numerical Example 1.

| State (zoom/keyframe) | Field | Before | After | Source and axial residual |
|---|---|---|---|---|
| 0/8 | `focus.conjugates` | absent | 3000 mm, `image-plane` | PDF p.7 (printed p.6), ¶0018 [有限距離撮影時の変倍における可変間隔], f=81.24 column, 撮影距離 row: 撮影距離 = 3000.0; d4=1.3782; d6=2.0675; d14=51.1803; d19=19.3339; d23=10.7260; d30=10.6216; Bf=53.12 mm. Offset +0.001757581 mm (+0.075093 diffraction depths), `consistent`; other reference -0.171863677 mm (-7.373131 depths). |
| 20/8 | `focus.conjugates` | absent | 3000 mm, `image-plane` | PDF p.7 (printed p.6), ¶0018 [有限距離撮影時の変倍における可変間隔], f=180.52 column, 撮影距離 row: 撮影距離 = 3000.0; d4=11.6019; d6=49.7449; d14=25.6674; d19=23.4097; d23=6.9444; d30=17.4055; Bf=62.08 mm. Offset -0.003314289 mm (-0.098903 diffraction depths), `consistent`; other reference -0.956600039 mm (-29.142125 depths). |
| 40/8 | `focus.conjugates` | absent | 3000 mm, `image-plane` | PDF p.7 (printed p.6), ¶0018 [有限距離撮影時の変倍における可変間隔], f=389.46 column, 撮影距離 row: 撮影距離 = 3000.0; d4=17.3730; d6=91.7874; d14=10.7351; d19=27.3230; d23=3.5447; d30=13.3101; Bf=76.86 mm. Offset +0.001336602 mm (+0.029470 diffraction depths), `consistent`; other reference -4.453921446 mm (-107.250663 depths). |

The patent labels the finite state with photographing distance but does not define its datum. The conjugate audit identifies the image-plane reference (`referenceBasis: audit-resolved`), with `referenceDiscriminated: true` at every declared state.

The audit uses the open physical stop and the authored image plane. Published flags already include these keyframes. Prescription values, gap schedules and image position are retained.
