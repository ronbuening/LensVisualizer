# PENTAX Optio S representative Embodiment 6: derived infinity zoom

## Patent Identification
**Patent:** [US20030197949A1](https://patents.google.com/patent/US20030197949A1/en) (grant alias US6917476B2)
**Published:** 2003
**Inventor:** Masaru Eguchi
**Assignee:** Pentax Corporation
**Example details:** Table 6, Figure 21, paragraphs 0182–0183; three exact source stations: 5.8/9.6/17.4mm, f/2.7/3.5/5.3;126 additional calculated control rows.

This is a representative patent design, not an exact factory Optio S prescription. The [OEM Nomura/Eguchi paper, Figure 7](https://www.jstage.jst.go.jp/article/photogrst1964/67/3/67_3_275/_pdf) supports a 2+3+1 architecture and double-sided aspheric second and third elements. However, the retail G3 stays fixed during zoom while this table changes its rear gap. Retail f/2.6–4.8 also differs from source f/2.7–5.3. No exact factory cam or finite-focus claim is made.

## Optical Architecture
Six powered elements in five air-separated groups form negative G1 (L1–L2), positive G2 (L3–L5), positive G3 (L6). L4–L5 are cemented at source surface 8. Four aspheric surfaces are on L2 and L3. The explicit stop lies 0.50mm ahead of surface 5. A 2mm camera-side plate follows the last powered surface, with printed fB=0. One file represents this single physical patent design. Three source positions are labeled published;126calculated rows describe a hypothetical infinity zoom trajectory.

## Element-by-Element Analysis
| Element | Form | nd | Vd | Role |
|---|---|---:|---:|---|
| L1 | Negative Meniscus | 1.883 | 40.8 | G1 front group |
| L2 | Positive Meniscus (2x Aspheric) | 1.84666 | 23.8 | G1 front group |
| L3 | Biconvex Positive (2x Aspheric) | 1.58913 | 61.2 | G2 central group |
| L4 | Positive Meniscus | 1.834 | 37.2 | G2 central group |
| L5 | Negative Meniscus | 1.84666 | 23.8 | G2 central group |
| L6 | Biconvex Positive | 1.6516 | 58.5 | G3 rear group |

Glass names remain explicitly unmatched; literal d-line nd/Vd are retained without vendor substitution or invented partial dispersion. The sparse aspheric coefficients use the printed even-power convention, K=0, on surfaces 3–6.

## Focus, Aperture, and Model Limits
Infinity-only operation uses the supported large-distance convention. No optical gap varies with the focus slider. Zoom changes only the three source variable gaps, using the derived motion described below. No finite-focus reconstruction is claimed. The stop radius is derived by the engine from the source f-number. Clear semi-diameters (5.5, 4.85, 2.35, 2.15 and 4.2mm by physical group) are diagram-informed heuristic values, not literal source dimensions. Field-dependent vignetting remains; a coarse pupil experiment is not a throughput measurement.

## Validation and Qualifications
Targeted native ingest, geometry, axial aperture and chief-ray checks passed at all three source nodes. Reference-wavelength geometric and diffraction MTF convergence was checked at the authored image plane, four source-range fields and 0–40lp/mm. This is numerical convergence, not measured factory performance. Full application/typecheck/regression, current-main compatibility, polychromatic and compiled-viewer/browser QA remain pending integration. No geometry override, source-node repair, image-plane refocus or source-plane substitution was used; intermediate group motion is explicitly derived.

## Sources
- [Original primary patent PDF](https://patentimages.storage.googleapis.com/68/f0/e0/e895d678783a08/US20030197949A1.pdf), Table 6 PDF page 30; Figure 21 PDF page 12.
- [Pentax OEM development paper](https://www.jstage.jst.go.jp/article/photogrst1964/67/3/67_3_275/_pdf), Figure 7 and discussion of fixed G3.
- Photons to Photos supplied the discovery lead; transcription is from the primary patent, not a redistribution of its peer record.


## Derived zoom compensator
Source glass, radii, thicknesses, aspheres, cover plate, 0.50mm stop-to-G2 distance and all three source states remain unchanged. Only source-variable gaps d4, d9, d11 vary between them. All six elements stay rigid within G1/G2/G3; the stop moves with G2.

At each of the 126 calculated rows, the rear gap d11 (G3 to plate) is interpolated linearly between the printed values (2.40 to 2.27 from wide to middle, 2.27 to 2.02 from middle to tele). The target EFL is piecewise-linear between the literal prescription's paraxial EFLs (5.8017, 9.6009, 17.3936mm), and the target focus residual is piecewise-linear between the printed stations' own paraxial residuals (0.0001, 0.0007, 0.0122mm behind the plate). d4 and d9 are then solved for those two targets, so total track is a result, not a constraint. The sensor plane and glass are unchanged, and the three printed stations keep every original value.

Across all 129 rows EFL and d9 rise monotonically, d4 and d11 fall monotonically, and the largest paraxial defocus is the printed tele station's own 0.0122mm. Total track falls from 34.64mm at wide to a minimum of 30.12mm near 11.2mm and rises to 31.99mm at tele, the usual U-shaped first-group path of a negative-lead three-group zoom. These are plausible derived optical motions, not a recovered factory mechanism: the OEM paper states the retail third group is fixed during zoom, while this table moves it by 0.38mm. No claim of mechanical packaging clearance beyond optical gap/geometry checks is made.

## Fresh consolidated validation
After the 2026-11-15 re-solve of the calculated rows, the repository audits were re-run on all 129 rows: surface validation passes, every row is within 3% of its stated f-number with no rim, trace or iris limit, and the 1/2.55-inch-type image circle and corner coverage are met at every row (129 of 129 at 100%). The largest paraxial defocus is 0.0122mm, at the printed tele station. The ray-intercept and MTF convergence samples reported for the earlier calculated rows were not repeated for the new rows; the three printed stations they included are unchanged.

Native published-position selection returns exactly three infinity buttons at0/.5/1 despite129control rows. Ordinary mode now uses the qualified derived optical path; Patent Positions chooses the original rows. No engine changes are required for this experimental cam model. Full-app regression, current-main reconciliation, production render/browserQA and broader spectral validation remain integration work.
