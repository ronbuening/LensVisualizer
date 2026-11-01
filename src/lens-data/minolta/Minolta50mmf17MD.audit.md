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

Open: all rims except the three above come from the paraxial rule rather than Figure 2, and the figure's two scales limit how far they can be tightened.
