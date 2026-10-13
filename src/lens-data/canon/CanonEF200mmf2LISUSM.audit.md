# Audit Log - Canon EF 200mm f/2L IS USM

Patent: JP 2008-145584 A, Numerical Example 1

## 2026-06-25 - Canon folder patent audit

### Phase 1 - Glass corrections

- Rechecked the local patent PDF `patents/JP2008145584A.pdf`, data file, and analysis sidecar.
- No glass label changes were needed. The powered elements match the patent nd/vd table; the rear 2.00 mm plane-parallel filter plate remains omitted per project convention and folded into final BFD.
- High-index elements L7, L12, L15, and L16 remain correctly described by their dense-flint / dense-lanthanum glass labels and nd values.

### Phase 2 - Retained-information audit

- The text extraction did not expose a usable patent clear-aperture column for Numerical Example 1, so the existing SDs remain geometry estimates from the f/2.05 entrance pupil, drawing proportions, and renderer constraints.
- Retained the existing stop SD solution, which gives the documented entrance-pupil semi-diameter and design F-number.

### Phase 3 - Spectral / metadata enrichment

| Element | Field | Before | After | Justification |
|---|---|---|---|---|
| L2 | `apd` / `apdNote` | omitted | `inferred` | Fluorite nd/vd signature and production special-glass count identify the anomalous-dispersion front element. |
| L3 | `apd` / `apdNote` | omitted | `inferred` | S-FPL51 UD-class element already has line-index fields; the badge metadata now matches the analysis. |
| L6 | `apd` / `apdNote` | omitted | `inferred` | Second S-FPL51 UD-class element in the front chromatic-correction doublet. |

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Read Numerical Example 1 (Table 1, PDF page 9) at 160 dpi: surface 28 D = 3.27; surfaces 29–30 are the plane drop-in
  filter F (designated `F` in the patent's reference list), 2.00 mm, nd 1.51633, νd 64.1; surface 30 → image 60.36.
  Only the infinity table is printed, so the last gap is not variable.
- Surface 28 now stores the patent's 3.27 mm, with `rearPlates` F (S-BSL7, resolver-compatible) and gapAfter 60.36 mm.
  Paraxial check against the previous data: EFL identical; defocus unchanged at both focus keyframes (worst difference
  1e-7 mm, since the old 64.948974 fold was exact). Physical track grows by 0.681 mm and now equals the 231.47 mm
  first-surface-to-image sum already quoted in the analysis.

## 2026-10-04 — Drop-in filter drawn as an element

- The rear drop-in filter plate F moved out of `rearPlates` into the drawn prescription: surfaces 29–30 and element 17
  (`Plane-Parallel Plate`), with the same thickness, index and gaps. The lens is computed with the filter in place and
  a teleconverter mounts behind it, so it is part of the lens rather than a camera-side plate.
- The source lists no clear aperture for the plate. Its semi-diameter, 21.5 mm, is a ray-trace estimate: the largest
  height on the plate of any ray that reaches the 135 format or the diagram's off-axis field at infinity, mid and
  close focus (20.21 mm), plus 5%, rounded up to 0.5 mm. Not figure-audited.
- Before/after check: EFL, entrance pupil, stop radius, image plane, half-field, analysis half-field and the traced
  axial, mid-field, corner and diagram bundles are unchanged. `npm run audit:field-coverage` still reports 100% of the
  corner.

## 2026-10-12 — Semi-diameter pass for the stated axial beam

- Symptom. The patent prints no effective diameters, so every `sd` here is inferred. The widest clear on-axis ray gave
  f/2.23 against the stated f/2.05 (+8.8 %), stopped by the rim of surface 9, and the aperture audit's raise list was
  empty with the flag that the stated ray could not be traced.
- What stopped the stated ray. Nothing in the prescription. The tracer looks for a surface no further than 1 mm past
  that surface's sag at its stored rim. With surface 9 at 32 mm that limit sat at z = 56.970 mm, and the f/2.05 ray,
  which leaves surface 8 at 36.41 mm with a slope of -0.409, meets surface 9 at 34.76 mm, z = 57.033 mm, 0.06 mm past
  it; entrance heights above 47.3 mm of the 47.559 mm pupil failed this way. Because the stated ray could not be
  followed to the stop, the wide-open iris had fallen back to its paraxial radius, 19.921 mm.
- Prescription check, independent of the engine (exact meridional trace of the ray entering at 47.5588 mm). It meets
  every surface and refracts at every one (largest incidence 40.0° at surface 7), reaches the stop at 20.382 mm and
  crosses the axis 0.040 mm short of the paraxial focus (0.020 mm at 0.85 of the pupil), consistent with FIG. 2. No
  facing pair or element edge closes below the ray: surfaces 6 and 7 (0.10 mm apart on axis) meet at 40.99 mm and the
  ray passes at 39.81 mm with 0.0057 mm of air; surfaces 20 and 21 (3.93 mm apart) meet at 17.83 mm and the ray passes
  at 17.27 mm with 0.246 mm of air; the nearest element edges are L6 at 32.41 mm (ray 29.56) and L12 at 21.37 mm (ray
  17.31).
- Rule applied. `agent_docs/patent-figure-sd-audit-procedure.md`, "A clipped stated beam": only the clipping surfaces
  rise, each to the height the stated ray reaches at infinity focus, rounded up to 0.1 mm. Nothing was lowered,
  nothing was widened to the figure, and `STO` was not touched.
- Figure. FIG. 1 of JP 2008-145584 A (PDF page 14, a 400 dpi one-bit image). Scale from vertex crossings: surface 1 to
  surface 30 (171.11 mm) is 577 px, 3.372 px/mm; surface 1 to 14 (91.98 mm) gives 3.381 px/mm and surface 16 to 30
  (48.21 mm) 3.371 px/mm. 3.375 px/mm (0.2963 mm/px) is used. Heights are half the top-to-bottom extent. The vertical
  scale was checked against a drawn sag: surface 9 reaches its rim about 24 px (7.1 mm) behind its vertex, a height
  of about 35.6 mm on R = 92.975, against 35.3 mm read vertically. The stop blades are drawn 138 px apart, a 20.4 mm
  semi-diameter.
- Figure readings (top / bottom px, then mm; element names are the data file's L1 to L16, not the patent's group
  names). L1 184 / 181, 54.1. L2 174 / 171, 51.1. L3 151 / 147, 44.1, with a
  square rim on both faces. L4 143 / 139, 41.8, a square block whose front face is drawn in contact with L3's rear
  face. L5 and L6 share an outer rim at 121 / 117, 35.3 mm, which the front face of L5 reaches; the cemented curve ends
  at about 29 to 30 mm and the rear curve of L6 at about 27 to 28 mm, with flat lands outside. L7 and L8 85 / 81,
  24.6. L9 and L10 71 / 68, 20.6. L11 65 / 62, 18.8, square. L12 and L13 are one square block, 61 / 58, 17.6, whose
  front corner meets the rear face of L11. L14 and L15 67.5 / 64, 19.5. L16 72 / 68, 20.7. F 70 / 66, 20.1. No
  element is drawn smaller than the stated ray needs.
- Changes. Ray heights are from the exact trace of the ray at the stated entrance-pupil radius, 47.5588 mm, at
  infinity focus.

  | Surface | Element face | Before | Ray height (mm) | FIG. 1 (mm) | After | Raise |
  |---|---|---:|---:|---:|---:|---:|
  | 6 | L3 rear | 38 | 39.810 | 44.1 | 39.9 | 5.0 % |
  | 7 | L4 front | 38 | 39.806 | 41.8 | 39.9 | 5.0 % |
  | 8 | L4 rear | 38 | 36.406 | 41.8 | 39.9 | 5.0 % |
  | 9 | L5 front | 32 | 34.761 | 35.3 | 34.8 | 8.8 % |
  | 20 | L11 rear | 16.5 | 17.269 | 18.8 | 17.3 | 4.8 % |
  | 21 | L12 front | 16.5 | 17.254 | 17.6 | 17.4 | 5.5 % |
  | 22 | L12 / L13 junction | 16.5 | 17.309 | 17.6 | 17.4 | 5.5 % |
  | 23 | L13 rear | 16.5 | 16.948 | 17.6 | 17.4 | 5.5 % |

- Square rims. L4 carried one value on both faces and is drawn as a square block, so surface 8 takes surface 7's
  height although its own ray height is 36.41 mm. L12 and L13 carried one value on all three surfaces and are drawn
  as one square block, so 21 to 23 take the highest of the three ray heights. L3, L5 and L11 already carried
  different values on their two faces and are raised on the clipping face only; FIG. 1 draws the junction behind L5
  ending well below L5's front face.
- `gapSagFrac` 0.95 (default 0.90), needed by two pairs that FIG. 1 draws meeting at the rim. Surfaces 6 and 7: at
  39.9 mm the sags differ by 0.0947 mm of the 0.100 mm gap, so 0.0053 mm of air is left and the faces do not cross;
  they touch at 40.99 mm. Surfaces 20 and 21: at 17.3 mm the sags differ by 3.698 mm of the 3.930 mm gap, 0.232 mm of
  air left; they touch at 17.83 mm. 0.94 allows 0.0940 and 3.694 mm and is refused for both pairs; 0.95 is the
  smallest two-decimal value that admits them. With the new rims the next largest intrusions are 20.6 % (surfaces 11
  and 12), 13.6 % (23 and 24) and 13.0 % (28 and 29), so no other pair uses the wider limit. No element needs display
  trimming at infinity, mid or close focus.
- Kept. Surfaces 1 to 5 (56, 55, 52, 51, 45 mm; ray 47.56, 47.43, 46.77, 45.61, 41.59), 10 and 11 (31; ray 29.56 and
  28.50), 12 to 14 (27; ray 24.22, 23.97, 22.03), 16 to 18 (22; ray 19.94, 19.37, 18.83), 19 (18; ray 17.97, the
  closest) and 24 to 30 (ray 17.05 falling to 15.18) pass the stated ray.
- Result. The widest clear on-axis ray gives f/2.05, with the iris as the limiter (f/2.23 on the rim of surface 9
  before). The focal length (194.9911 mm), the stated entrance-pupil radius (47.5588 mm) and the back focal distance
  are unchanged. The wide-open iris is now set by the real marginal ray, 20.382 mm (was the 19.921 mm paraxial
  fallback); the stored `STO` value is unchanged. On-axis longitudinal spherical aberration at 1 / 0.85 / 0.7 / 0.5 of
  the pupil is -0.040 / -0.020 / -0.006 / 0.001 mm; before, the full-pupil value could not be traced. The repo
  validator reports no errors, the image-circle check lists no surface, and the corner chief ray reaches 21.65 of
  21.65 mm at 6.4°, as before.
- Side effects. The engine's rim-limited half-field estimate rises from 10.58° (set by surface 9) to 10.87° (set by
  surface 3); the patent's half angle is 6.33°. The diagram's off-axis field moves from 6.35° to 6.52°. The aperture
  panel's estimated wide-open entrance pupil reads ⌀ 97.32 mm with a ⌀ 40.76 mm stop (was 95.12 and 39.84 mm): that
  readout images the iris paraxially, and the pupil of the stated f/2.05 beam is still 95.12 mm.
- Vignetting, wide open at infinity, as the share of the meridional pupil that passes relative to the axis, at 0 /
  1.1 / 2.1 / 3.2 / 4.2 / 5.3 / 6.4°: 100 / 95.5 / 87.5 / 79.5 / 71.6 / 63.6 / 54.5 % before and 100 / 92.7 / 86.5 /
  80.2 / 71.9 / 63.5 / 56.3 % after. Before, the axial beam it is measured against was itself cut to about 92 % of
  the stated pupil diameter; as a share of the stated pupil the 6.4° value goes from about 50 % to 56 %. The off-axis
  vignetting is kept.
- Teleconverter. With the Extender EF 2x the composed system is 390.6144 mm at f/4.107 before and after, and the 0.8
  pupil ray passes unclipped both times. Before, the host's surface 9 cut the composed axial beam to f/4.47; now the
  iris limits it at f/4.107 and the stated ray clears every converter rim.
- Analysis file. The lens has no aspheres, so no rim departure is quoted. The stop sentence under Optical
  Architecture (19.92 mm for a 47.56 mm pupil) is a paraxial statement and stays true; it does not mention the 20.38
  mm real-ray iris.
- Open: at the reconstructed 1.9 m focus position the same iris cannot be filled on axis. That ray would need 43.7 mm
  on surfaces 6 and 7, above the 40.99 mm at which they touch, and 38.0 mm on surface 9, where FIG. 1 draws 35.3 mm.
  The widest clear ray there reaches 91.2 % of the iris radius (85.5 % before), stopped by surface 9. Nothing was
  raised for it: the patent prints no close-focus spacing and its f-number is an infinity value. The model also
  stays below FIG. 1 at L3's rear face (39.9 against 44.1 mm, capped by the 40.99 mm contact height), L4 (39.9
  against 41.8 mm), the rear of the L5 and L6 doublet (31 against a 35.3 mm outer rim) and L11's rear face (17.3
  against 18.8 mm), and above it at L7 and L8 (27 against 24.6 mm); none of these clips the stated beam.
