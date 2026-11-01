# Audit Log — Minolta MD 50mm f/1.7

Patent figure: `JPS60111215A.pdf, p. 6 Fig. 2 (unnumbered taking lens)` in local `patents/`.

## 2026-11-01 — Deployment validation and cleanup

### Patent re-read

The publication is an image-only scan, so the taking-lens table (PDF p. 4) was read from page renders at 300 and 600 dpi. Eleven radii, ten axial spacings and six N/ν pairs were checked with no mismatches; d6 = 11.62 mm equals the model's 6.09 + 5.53 mm split at STO. The front page agrees with the source fields: JP S60-111215 A, published 1985-06-17, filed 1983-11-21 (application S58-219768), Minolta Camera, inventor 福島 省. "Sho" is the Google Patents reading and was not confirmed elsewhere.

The table is headed 撮影レンズ例 and carries no number, so `source.example` stays absent and the lens stays in `agent_docs/patent-example-queue.md`.

### Patent against model

| Quantity | Patent | Model |
|---|---|---|
| Power | φM = 0.0194 | 0.019418 (EFL 51.498 mm) |
| F-number | 1.73 | 1.73 |
| Half-field | 22.8° (2ω = 45.6°) | 22.8° |
| Back focus | Not printed; 36.85–36.90 mm implied by Examples 1–4 | 36.884 mm |
| Focal length | Not printed in mm; 51.47–51.50 mm implied by Examples 1–4 | 51.498 mm |
| Closest focus | dM = 7.65 mm, whole extension | 450.17 mm object to image, 1:6.73 |

Master plus each converter prescription reproduces e1 within 0.02 mm and β1, β2 within 0.002 for all four examples. The computed converter powers round to the printed φc. R11 = −43.293 mm is confirmed by the sag of r11 in Figure 2 and by this converter data.

### Figure 2 and rims

Figure 2 is scaled at 14.42 px/mm from the 34.18 mm track. Fits to the drawn curves give about 13.2 px/mm radially, so rim readings are ranges. The iris marks sit at z = 18.34 mm with a radius of 9.6–11.4 mm; the model has z = 18.4 mm and 10.36 mm.

| Surface | Package sd | Figure 2 rim | Result |
|---|---|---|---|
| S3 | 15.6 | 13.2–14.4 | 14.2 |
| S6 | 12.1 | 10.2–11.2 | 11.0 |
| S8 | 11.0 | 11.4–12.4 | 11.4 |

The other eight rims lie in range and are unchanged. S8 clipped the axial beam, with an effective f/1.76 and 95.2 % transmission; the beam needs 11.33 mm there. The S3 and S6 cuts lose 0.0 points at every field. Transmission at 0° / 11.4° / 22.8° went from 95.2 / 75.1 / 32.2 % to 100.0 / 75.3 / 32.2 %.

### Public diagram comparison

The Lens QA Works section (https://minolta.su/wp-content/uploads/2018/06/md5017_tony_optical_design2.png) shows the same element order, with the cemented pair behind the stop. It is not a Minolta drawing and cites no source. Minolta's guide (https://minolta.suaudeau.eu/ressources_iconographiques/system_SLR_MD1.pdf, printed p. 19) gives 6/5, 47°, 0.45 m, 49 mm and f/1.7–f/16. Both readings came from the coordinator's review; neither file was opened in the cleanup step.

### Fields changed

Data: `sd` on S3, S6 and S8; last gap moved to `gaps` with 36.883734 and 44.533734 mm; `focus.closeFocusM` to 0.45; `focus.description`; `subtitle`; `catalog.specs`; a `role` on every element; `cemented` and `doublets` text from D1 to C1; the header comment. Prescription radii, spacings, indices and `source` are unchanged.

Analysis: corrected the focus account and added the converter cross-check. Removed status lines, process history, the diffraction study (its results predate the rim changes) and all non-public source links. The glass section was rewritten from the current labels.

### Open items

Open: the patent cannot separate the 1981 New MD from the 1985 AF 50mm f/1.7, so the exact production version is unresolved.

Open: L6 (1.7810/44.55) has no catalog row and stays unmatched.

## 2026-11-01 — Semi-diameter pass against the patent figure

Source: `patents/JPS60111215A.pdf`, PDF p. 6, Figure 2, read at the native 347 dpi. Readings are line centres. The heights in px are half the distance between the top and bottom edges, so they do not depend on where the drawn axis falls; the elements sit 2–6 px above it.

### Scale

Along the axis, eleven vertex positions from the arc fits regress to 14.29 px/mm with 1.3 px rms, and the S1–S11 span gives 14.33 px/mm. This pass uses 14.3 px/mm, which replaces the 14.42 px/mm above.

Across the axis, fitting each known R to its drawn arc with the axial scale fixed gives 13.25 (S1), 13.55 (S3), 13.40 (S4), 13.70 (S6), 13.95 (S7), 13.80 (S9) and 13.50 (S11) px/mm, with residuals of 0.3–0.6 px. The mean is 13.6 px/mm and the standard deviation 0.24. S2, S5, S8 and S10 are too flat to fit. A single isotropic scale on the same arcs spreads over 12.3–13.6 px/mm and never reaches the axial 14.3, so the figure is not uniform.

The print accounts for part of this. Ten printed circled numerals on the front page measure 43.0 × 41.9 px on average, an aspect of 1.026, which puts the radial scale at 13.9–14.0 px/mm before any drafting effect. The rest lies in the drawn arcs. Heights are read between 13.6 and 14.0 px/mm, a band of ±1.5 % in place of the ±4.4 % above.

Edge thickness needs only the axial scale, so it gives a second reading of the square-cut rims: L1 16.2–16.6 mm, L2 14.0–14.2 mm, L5 11.9–12.7 mm and L6 12.0–12.5 mm.

### Rims

The axial column is the engine trace of the ray to the 10.355 mm iris rim: at infinity, then at focus = 1 with the object 371.45 mm ahead of S1.

| Surface | Package | Before | Figure 2 | Axial beam | After |
|---|---|---|---|---|---|
| S1 | 16.4 | 16.4 | 15.7–16.6 | 14.93 / 14.28 | 16.4 |
| S2 | 15.6 | 15.6 | 15.7–16.6 | 14.58 / 13.96 | 16.4 |
| S3 | 15.6 | 14.2 | 13.6–14.2 | 13.40 / 13.06 | 14.0 |
| S4 | 13.8 | 13.8 | 13.6–14.2 | 12.77 / 12.43 | 14.0 |
| S5 | 12.7 | 12.7 | 12.4–12.8 | 12.20 / 11.91 | 12.7 |
| S6 | 12.1 | 11.0 | 10.6–10.9 at the curve end, 12.4–12.8 at the top | 10.51 / 10.40 | 11.0, land to 12.7 |
| S7 | 10.8 | 10.8 | 10.3–10.6 at the curve end, 11.7–12.1 at the top | 10.18 / 10.31 | 10.8, land to 11.7 |
| S8 | 11.0 | 11.4 | 11.7–12.1 at L4's top, 12.1–12.5 at L5's | 11.34 / 11.69 | 11.7 |
| S9 | 12.0 | 12.0 | 12.1–12.5 | 11.81 / 12.18 | 12.3 |
| S10 | 11.9 | 11.9 | 12.0–12.4 | 11.68 / 12.21 | 12.3 |
| S11 | 11.8 | 11.8 | 12.0–12.4 | 11.65 / 12.20 | 12.3 |

S8–S11 clipped the axial beam at closest focus. With the iris unchanged, the beam runs wider behind the stop than at infinity, by 0.53 mm at S10, and the app's on-axis rays follow focus. The four rims rise to the ray, rounded up to 0.1 mm, and all four land in the figure's range. S9 alone would stop at 12.2 mm; it takes 12.3 mm so that L5 is not drawn under L6, since the figure has L5 1.5 px the taller. S7 needs 10.31 mm at closest focus and clears.

L1 and L2 are drawn square-cut and were stored with two heights. S2 rises to S1's 16.4 mm, which is the edge-thickness reading (16.38 mm) and leaves S1 uncut. L2 takes 14.0 mm on both faces, where the height and thickness readings meet.

Figure 2 draws flat tops on L3 and L4 with a short chamfer to each concave curve. A straight edge from S5 to S6 and from S7 to S8 ran well under those tops, so S6 and S7 keep their clear radii and gain `rimExtensionSd` at 12.7 and 11.7 mm. The corner is square where the figure chamfers it. The land has no effect on the trace.

S1, S5, S6 and S7 stay. S6 and S7 sit 1–2 % over the top of their ranges, inside the noise, and S6 stays 0.2 mm above S7 as drawn (0.27 mm in the figure).

### Clearance and light

The surface validator passes with no `gapSagFrac` or `maxRimAngleDeg` change, and the image-circle floor reports nothing. Field coverage stays 22.8° to 21.46 mm of 21.65 mm. The aperture census has the lens within 3 % of its stated f-number with no limiter, and the traced table shows no `CLIPS-AXIAL` or `BLOCKS-CHIEF`. At focus = 1 the ray to the iris rim now clears every surface; S8 has the least margin, 0.008 mm. EFL 51.498 mm, f/1.73, half-field 22.8° and stop radius 10.355 mm are unchanged, and the tracing half-field goes from 27.37° to 27.96°.

| Transmission % at | 0° | 2.9° | 5.7° | 8.6° | 11.4° | 14.3° | 17.1° | 19.9° | 22.8° |
|---|---|---|---|---|---|---|---|---|---|
| Package rims | 95.2 | 95.0 | 91.0 | 84.0 | 75.1 | 66.3 | 55.5 | 44.4 | 32.2 |
| Before this pass | 100.0 | 97.6 | 92.0 | 84.5 | 75.3 | 66.3 | 55.5 | 44.4 | 32.2 |
| This pass | 100.0 | 99.8 | 96.1 | 89.3 | 81.2 | 71.6 | 60.6 | 48.9 | 36.2 |

The gain comes from the rear rims and S2. Vignetting at the corner is now set mainly by S1 and S11: opening S1 by 1 mm adds 2.3 points at 22.8°, opening S11 adds 1.1, and no other surface adds any. The two remaining cuts against the package, S3 and S6, win back 0.0 points when restored, at every field. With the sliders at focus = 1 the app's curve goes from 74.5 % at 11.7° and 41.9 % at 20.5° to 80.3 % and 46.3 %.

### Comparison with the Lens QA Works section

Read at 12.6 px/mm from its S1–S11 span, at which its stop marks give about 10.3 mm, the section shows the same element order and the same chamfers on L3 and L4 as Figure 2. Its rims read about 16.4 mm for L1, 14.3 mm for L2, 10.8 mm for S6, 10.6 mm for S7, 12.5 mm for L4–L5 and 12.3 mm for L6, close to the values above. Its L3 reaches 14.5–15.5 mm, past L2, where Figure 2 keeps L3 well inside L2; the patent figure governs. The image is low resolution and was not fitted.

### Limits

The chamfers on L3 and L4 are drawn as square corners. S8 is a cemented face and takes no land, so one straight edge joins the S8 and S9 rims, where the figure has L5 stepped about 0.4 mm past L4.
