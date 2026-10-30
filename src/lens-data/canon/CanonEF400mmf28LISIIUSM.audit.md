# Audit Log - CANON EF 400mm f/2.8 L IS II USM

Patent: US 2011/0090576 A1, Example 2

## 2026-08-19 - Patent-figure, metadata, and glass audit

### Glass classification

- Rechecked the patent coordinates and generated reports. All 15 active glass elements already select coordinate-compatible Sellmeier curves.
- Retained vendor-neutral six-digit class labels because several coordinates admit multiple compatible commercial curves; the inspector's chromatic detail still shows the selected modeling curve without presenting it as Canon's production identity.
- Retained the separately documented CaF2 production-correlation inference for L12/L14. No new catalog row or source-defensible production-material identity was needed.
- Added the missing patent-backed APD badge to L25 positive / Gp2 because the patent explicitly selects its partial dispersion under condition (6); ordinary rows that merely have tabulated `X` remain untagged.
- The patent-authored `dPgF` values remain authoritative for the violet channel over each catalog-equivalent curve, preserving the source's partial-dispersion evidence.

### Semi-diameter review

- Inspected PDF page 3, Figure 3, at 600 dpi:
  `npm run audit:patent-figure -- src/lens-data/canon/CanonEF400mmf28LISIIUSM.data.ts patents/US20110090576A1.pdf 3 0.20,0.245,0.70,0.45 --dpi=600`.
- Reliable front optical rims measured 71.39, 55.75, 55.11, 47.04, 38.32, 33.96, and 33.96 mm versus modeled maxima of 72.0, 58.0, 52.5, 44.48, 40.5, 32.45, and 32.135 mm.
- Label leaders, group brackets, and the separate rear `G` plate contaminated automated rear measurements. Manual 600 dpi readings put the rear optical rims within about 20% of the modeled values.
- Retained all SDs. A trial wholesale rear enlargement was rejected because it produced negative edge thickness and shared-gap overlap.

### Diagram labels and travel ordering

- Retained numeric 1-15 physical-element identifiers below the diagram. Figure 3 names cemented units L16, L21, L22, and L25 rather than their individual positive/negative members; the existing unit annotations above the diagram reproduce those source labels without inventing member identifiers.
- Confirmed the remaining diagram annotations against Figure 3: LF spans L11-L16, LR spans L21-L25, and L22 plus L23 is the transverse stabilization unit. The separate rear plate `G` remains intentionally excluded and is stated in the header.
- Verified focus endpoint ordering through the runtime layout. `focusT = 0` places L16 at 183.710-191.170 mm; `focusT = 1` places it at 212.639-220.099 mm, a +28.929 mm imageward shift toward the fixed stop at 234.900 mm, matching paragraph 52. The visible specification now states `L16 IMAGEWARD INNER FOCUS`; this fixed-focal-length design has no zoom travel to order.

### Identity and metadata

- Verified that `CANON EF 400mm f/2.8 L IS II USM` matches Canon's product identity after repository spacing normalization.
- Normalized the patent assignee to the catalog's canonical `Canon Inc.` spelling, resolving the patent-metadata test failure.

## 2026-10-04 — Drop-in filter drawn as an element

- Patent check (US 2011/0090576 A1, Second Numerical Embodiment): rows 28–29 tabulate glass block G as two flat
  surfaces, 2.2 mm thick, nd 1.51633, νd 64.14, θgF 0.5352, X −0.0007, effective diameter 36.00 mm, 15.00 mm behind
  row 27. The description calls G "a glass block, such as an optical filter or a faceplate" and defines back focus
  with it absent.
- The file had excluded G and carried the 70.72 mm plate-absent back focus on surface 27. G is now drawn: surfaces
  28–29 and element 16 (`Plane-Parallel Plate`). Surface 27 keeps the patent's 15.00 mm, and
  70.72 − 15.00 − 2.2/1.51633 = 54.269129 mm of air follows the plate, which makes the authored track the patent's
  Lt = 372.00 mm.
- Semi-diameter: half the patent's effective diameter (18.0 mm) would cut the model's corner transmission from 0.670
  to 0.605 and the half-field from 6.19° to 4.82°, because the model's front apertures are larger than the patent's
  ray envelopes. The plate instead takes 21.5 mm, a ray-trace estimate: the largest height on the plate of any ray
  that reaches the 135 format or the diagram's off-axis field at infinity, mid and close focus (20.01 mm), plus 5%,
  rounded up to 0.5 mm. Not figure-audited.
- Before/after check: EFL, stop radius, paraxial focus and the vignetting curve are unchanged. The plate now clips the
  chief ray at 5.65° (the half-field was 6.19°, set by another rim); the format corner is 3.16°, so coverage is
  unaffected, and the diagram's off-axis field narrows from 3.72° to 3.39°.

## 2026-10-30 — Scoped reopening for G and the current configuration

### Prior coverage reused and source identification

- Reuse the unchanged active-15 shape/glass review dated **2026-08-19**. Preserve that date and its rejected wholesale
  rear-enlargement trial; this is not a new inspection claim for those old conclusions. G was added **2026-10-04**,
  and that note explicitly left its shape unreviewed. The current 16-medium configuration and reproducibly stale
  “G omitted” analysis justify this scoped reopening. This is one reviewed lens entry, with no extra reused-entry count.
- Original `patents/US20110090576A1.pdf`: first page confirms US 2011/0090576 A1, April 21, 2011, Shigenobu Sugita,
  Canon. Second Numerical Embodiment / normalized Numerical Embodiment 2: prescription and all 16 material rows in
  ¶0059, PDF page 10 / printed page 5; Figure 3 and matching infinity aberration Figure 4 on PDF page 3 / sheet 2.
  Definitions ¶0021–0022 are PDF pages 6–7; prescription d-reference ¶0057 is PDF page 9; conditional Table 1 is PDF page 11.
- Native embedded pages are 2560 × 3300 one-bit at 300 ppi. The earlier 600 dpi image is an upsample, not native
  resolution. Current native Figure 3 calibration is about 1152 px / 300.53 mm = 3.83 px/mm, using active first vertex
  to Re. Practical height reading uncertainty is ±0.8 mm; undimensioned schematic scale adds an independent limitation.

### G shape and source hierarchy

- The original column header is **Effective diameter**, not radius. Both G rows 28–29 print **36.00 mm**, giving a
  source optical half-diameter of **18.00 mm**. Restore both clear `sd` values from 21.5 to 18.0 mm. The former radius
  was a runtime bundle estimate; its larger transmitted bundle does not override the original aperture column.
- Preserve the printed flat faces, 2.2 mm glass thickness and 15.00 mm leading air gap. The final 54.269129 mm air gap
  remains the existing derived value `70.72 − 15.00 − 2.2/1.51633`; row 29 does not print that distance. Paragraph 0021
  defines 70.72 mm BF with G absent. Current physical G-included track is 371.999129 mm versus source Lt 372.00 mm.
- Native G blank measures about ±119 px, or outer half-height ~31 mm at the active-system scale. It is a plain flat
  rectangle without a resolved optical-cap/opaque-land junction. Reject using ~31 mm as a clear aperture and reject
  a fabricated flat-face opaque extension. Its taller outline remains an explicit SVG/source drawing limitation.
- The restored cap passes surface/image-circle checks and all 21 focus corner chiefs. In the 193-sample infinity
  corner pupil, 136 pass versus 141 at 21.5 mm; five now clip row 28. Close remains 134/193 in both. Source clipping
  is retained, rather than enlarging the clear cap to fit the model's inferred upstream apertures.
- No new rim extensions or cuts; no inferred-cut beam exemption, interface land or disconnected wing. Reuse active
  element/cemented-interface constraints and the prior rejection of wholesale rear inflation. No R/d, asphere, stop,
  focus, aperture, stabilization or grouping controls change.

### Glass and genuine source partials

- Directly verify G row 28: nd 1.51633, νd 64.14, θgF 0.5352, printed X −0.0007. G remains vendor unresolved;
  S-BSL7 is only a compatible spectral proxy. No APD claim follows from that ordinary partial value.
- The active-15 reused source qualification remains valid: all 16 `dPgF` values correspond to **printed X cells** in
  the original table. Retain them all. No catalog-derived per-lens absolute C/F/g override or unsupported partial
  is present or removed. Source partials by row: 1/9 +0.0043; 3/7 +0.0534; 5/21 −0.0083; 11 +0.0150; 12 −0.0083;
  15 +0.0117; 16 +0.0021; 18 +0.0167; 19 −0.0048; 23 +0.0069; 25 −0.0033; 26 +0.0251; 28 −0.0007.
- Table footnote: `X = θgF − (0.6438 − 0.001682νd)`. Paragraph 0022 explicitly defines d 587.6 nm, F 486.1 nm,
  C 656.3 nm and g 435.8 nm, `νd = (Nd − 1)/(NF − NC)`, `θgF = (Ng − NF)/(NF − NC)`. Paragraph 0057 explicitly
  ties prescription nd/νd to d. No unknown-reference suppression is warranted for this publication.
- All 16 compatible curves and all source numeric glass values remain. Retain the four patent APD designations
  on Gp1/Gp2/Gn1 and qualified CaF2 production correlation. Catalog compatibility is not proof of supplier, melt,
  chemistry, cement, coating or manufacturing history. Unidentified historical materials remain unresolved.

### Runtime, actual SVG and retained reconstruction limits

- Surface check passes; image-circle check finds zero undersized; infinity aperture census passes at 2.900000;
  format-corner field coverage passes. Existing derived iris radius is 23.251414 mm. The source's one 48.31 mm stop
  effective-diameter cell does not establish a physical iris schedule, so no aperture/control correction is made.
- Real aimed iris-rim working f-number at infinity is 3.006744, +3.680818% versus 2.90, a different criterion from
  the paraxial-iris/beam-clearance aperture census. Do not describe both as a three-percent pass.
- Actual 21-focus × eight-preset working census: 156 traced / 12 vignetted in both configurations; at wide open,
  S8 clips focus 0.45 and S7 clips 0.50–1.00. The 193-ray pupil grid over 63 focus/field states has valid aimed
  chiefs throughout; axial endpoints 193/193 and 145/193. G adds only the disclosed corner losses above.
- Current first-order check includes physical G. Infinity BF after G is 54.327581 mm versus retained air54.269129 mm
  (residual +0.058452 mm). Close 2.7 m finite-conjugate residual is −0.0000244 mm and magnification magnitude0.165704×.
  At focus0.5/display5.4 m, the retained linearly interpolated L16 position gives −3.822759 mm conjugate defocus.
  Finite spacing and intermediate focus are illustrative reconstruction, not a published or focus-preserving cam.
- Compare actual SVG with native Figure 3, including changed G rectangle and all cemented elements. At 21 focus
  positions, 336 finite connected closed paths have zero hidden renderer trimming. No source silhouette is claimed
  for the unmodeled taller G blank; no slope/cap/clearance guard is relaxed.
- Correct stale public analysis claiming G is omitted and a 0.75 mm normalized runtime plane shift. Current G is
  physical and drawn. Source fidelity, sampled runtime clearance and production correlation remain separate conclusions.
- No full finite-focus or transverse-IS source schedule is published. No claimed production illumination or continuous
  focus calibration follows from these samples. Full repository gates are coordinated with the three-review batch.

## Runtime Launch Qualification - 2026-10-30

This is a runtime-only supplement to the dated source/shape/glass review above. No original PDF was reinspected for this supplement; source review dates, prescription values, controls and review counts remain unchanged. Earlier pupil/chief grids labeled near or close sampled **collimated rays through focus-adjusted geometry**. Those labels identify the control geometry, not finite-object illumination. Independently computed finite paraxial residuals and exact-working-f-number probes remain separate; the latter use the runtime distance-label object plane.

The explicit finite-object supplement samples 20 positive focus positions. The complete current ABCD matrix, including any rear plates, supplies the real Gaussian object plane. A paraxial entrance-stop seed and inverse chief solve target actual image heights 0, 10.8250 and 21.6500 mm; paraxial object-height scaling alone is not accepted as the actual image-edge solve. Geometric roots are solved before current-aperture classification. The 21.6500 mm edge is the viewer format corner, which may exceed the selected source's image height; these probes do not establish production illumination or source support for an inferred continuous cam.

Of 20 positive-real-object geometries, 60/60 target chiefs converge: 60 clear the current caps and 0 clip. Across the converged fields, 193 current-iris samples per field give 9,696 passed, 1,878 clipped, 6 failed and 0 unaimed rays. Minimum sampled axial transmission is 169/193. Failed traces are retained numerical/path outcomes, separately from clipping: `noBracket @ ?` (6). No clear aperture, R/d, stop, cam, tolerance or source field is altered to clear those diagnostics.

Selected current close geometries, with Gaussian conjugates and their exact aimed bundle counts:

| Zoom control | Aberration control | Gaussian object-to-image (m) | Distance label (m) | Axis / half / edge passing of 193 | Chief result          |
| -----------: | -----------------: | ---------------------------: | -----------------: | --------------------------------- | --------------------- |
|            0 |                  0 |                  2.699999110 |           2.700000 | 169 / 166 / 140                   | clear / clear / clear |

The largest sampled relative difference between a positive Gaussian object-to-image conjugate and its distance label is 19.008837% at zoom 0, focus 0.05, aberration control 0: Gaussian 43.735227986 m versus label 54.000000000 m. This is a first-order conjugate/control distinction, not a new production-distance measurement. Nominal infinity controls remain in their separate collimated checks; their small rounding residual is not converted into a finite-source claim.
