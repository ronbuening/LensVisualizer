# Audit Log - Warmisham Example II 100.4 mm f/2

Patent: US 2,130,760 A, Example II / Figure 6  
Data stem: `Warmisham1938ExampleII`

## 2026-11-17 - Patent design reference, first authoring

### Source review and transformations

- Read the patent table (PDF page 5) and Figure 6 (PDF page 3) from the page images.
- Transcribed the printed signed radii, eight nD/V pairs, thicknesses and separations. Multiplied every length by 100; the two 0.001 air gaps became 0.1 mm.
- Used the calculated paraxial back focus, 71.1054 mm, for the infinity image plane; the patent prints none.
- Placed the stop at the midpoint of the central air space and estimated the clear rims. The first, wider rim estimates produced negative edge thickness and were reduced; no printed radius, thickness or index was changed.
- No production lens identified and no glass maker claimed. The example is a different design from US 2,012,822 and US 2,194,413.

### Checks at authoring

| Check | Outcome |
|---|---|
| Repository surface validation | No errors |
| Element drawing | No rim trimmed |
| Iris opening and closing | Smallest clearance to glass 0.725 mm in front, 2.172 mm behind |
| Edge thickness and air clearance between neighbouring surfaces | All positive; smallest 0.0375 mm (edge of L2) |
| Axial rays over the inner 90 % of the f/2 pupil | All pass |
| Separate paraxial calculation | EFL 100.401 mm; back focus 71.1054 mm |
| Separate real-ray calculation | Seven image heights agree with the engine to better than 1e-13 mm |

### Limits recorded at authoring

- Axial rays in the outer few percent of the f/2 pupil are cut by the estimated rims, so a full f/2 real-ray aperture is not claimed.
- At 10° and 20° off axis part of the bundle is clipped. The patent prints no field or image circle to compare with.
- Colour comes from the printed index and Abbe number only.
- The file is hidden (`visible: false`).

### Duplicate check

No other lens in the collection cites US 2,130,760. No foreign family member was checked.

## 2026-11-17 — Deployment validation

An independent re-read of the patent page images at 300 dpi checked the front page (inventor, assignee, dates), the Example II table (12 radii with their printed signs, 8 thicknesses, 3 separations, 8 indices, 8 Abbe numbers, the printed focal length 1.004 and aperture F/2) and Figure 6 (element count, cemented triplets, radius signs). There are no transcription differences.

Verdict: valid, with integration fixes. The file is an exact ×100 copy of Example II and reproduces the printed focal length to 0.001 %. No production lens is documented for this design: the patent improves on US 1,955,591, the six-element Speed Panchro type, and the Speed Panchro lenses described by Cooke Optics and Cine Lens Wiki are six-element lenses, so the file stays a hidden patent design reference.

Changes:

- `maker`: "Kapella" → "Cooke". Kapella Limited held the patents of Taylor, Taylor & Hobson; the collection files those under Cooke.
- `source.patentNumber`: "US 2,130,760" → "US 2,130,760 A" (house form).
- `catalog.focalLengthMm.design`: 100.40104104780512 → 100.4 (rounding).
- Last gap `d`: 71.10541418018414 → 71.1054 (rounding; still the calculated paraxial back focus).
- `closeFocusM`: 1000000000000000.0 → 1e15 (same value).
- Elements L2, L3, L4: added `cemented: "T1"`; L5, L6, L7: added `cemented: "T2"`. Empty `groups` and `doublets` replaced by `doublets` T1 (surfaces 3 to 6) and T2 (surfaces 7 to 10). The cemented triplets were not marked.
- Added `focalLengthMm` to all eight elements (150.88, 78.55, −39.19, 117.58, 97.85, −31.68, 52.68, 109.7).
- Added a header comment stating the source, scale, inferred values and the aperture reached.
- Analysis rewritten in plain language with the standard patent block; process notes removed. This log's earlier section was reworded to remove process notes; its findings are unchanged.
- No rim was changed. No radius, thickness, index or Abbe number was changed.

First-order values after the changes: EFL 100.401 mm, paraxial f/2.000, stop semi-diameter 17.377 mm, back focus 71.1054 mm, front vertex to image 131.005 mm.

Aperture reached: the real f/2 marginal ray (entering at 25.10 mm) needs 23.16 mm at surface 3, 23.19 mm at surface 4, 18.0 mm at surface 5, 19.6 mm at surface 9 and 19.5 mm at surface 10. The edge of L2 reaches zero thickness at about 23.06 mm and the edge of L7 at about 18.4 mm, so surfaces 3, 4, 9 and 10 cannot be raised to pass it; surfaces 3 and 4 were left at 23 mm for that reason. With the stored rims the widest axial ray that passes enters at 23.39 mm, about f/2.15, limited at surface 10. Longitudinal spherical aberration at the full f/2 height is +0.050 mm.

Audit results: surface validation prints OK. The aperture audit proposes no rim raise and flags that the stated f/2 on-axis ray cannot be traced, which is the edge-thickness limit above. Real-ray clearance at f/2 marks surfaces 3 and 4 as clipping the axial beam; at f/2.2 nothing clips on axis, and the chief ray is not blocked out to 22.65° (image height 41.6 mm). The image-circle and field-coverage audits skip the file because it has no image format and is hidden.

Open:

- Key, file name, name, subtitle and specs still carry the delivered wording ("PATENT-ONLY RECONSTRUCTION", "PATENT ONLY; NO RETAIL MATCH", "ESTIMATED STOP AND RIMS", "INFINITY ONLY", key beginning "kapella-warmisham"); the cleanup pass should bring them to the house form used by the other Kapella-assigned Cooke designs.
- Rims are estimates. Figure 6 has not been measured; the SD pass should compare the outer elements (L1 at 28 mm, L8 at 25 mm) and the triplet edges with the drawing, and could take surface 10 up to about 18.3 mm, which is as far as the L7 edge allows.
- Decide whether the nominal f/2 should stay as the stated aperture when the model passes about f/2.15.
- Elements carry no `role` or glass label; no period glass names were looked up for the four printed nD/V pairs.
- `closeFocusM: 1e15` is a stand-in for infinity-only focus.
