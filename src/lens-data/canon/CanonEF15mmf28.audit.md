# Audit Log — Canon EF 15mm f/2.8 Fisheye

Patent: JP S63-17421 A, Numerical Example 3. Original: `patents/JPA 1988017421-000000.pdf`.

## 2026-10-30 — Original-patent shape, concave-end and glass review

### Exact source and native measurements

The original title page confirms 昭63-17421, publication 25 January 1988, inventor Takashi Matsushita and Canon as applicant. Numerical Example 3 is on supplied page 3 (printed 171). The original page-2/page-4 figure descriptions identify Figure 2 as Example 3; Figure 2 and its aberration Figure 5 are on supplied page 4 (printed 172). The complete 16-row prescription includes one stop and eight media, with no filter, cover plate, extra cement medium or hybrid layer.

The original embeds 2866 × 3895 one-bit raster pages at approximately 347 ppi. Native figure and table details were inspected; no higher-resolution source is claimed. Figure 2's approximately 579 ± 2 native-pixel first-to-last vertex span corresponds to the 62.63 mm source stack: about 9.245 ± 0.032 px/mm. Edge picks have roughly ±1–2 native-pixel uncertainty; source proportions and stroke thickness give about ±0.3 mm practical semi-height uncertainty. Leaders, radius labels, axis and non-optical annotations were excluded.

The first curved face and its outer blank measure approximately 30 mm semi-height, far beyond the prior 17.8 mm. Its inner rear cap ends around half that drawn height and is followed by a clear vertical shoulder. The second and third menisci likewise have resolved rear shoulders. The pre-stop positive element's source caps are approximately 6.4 mm semi-height, substantially smaller than the former 9.5/8.5 mm; 6.8 mm is adopted conservatively after the source aperture and geometry checks.

### Shape changes and retained concave-end constraints

| Element / surfaces | Disposition | Source support and retained constraint |
|---|---|---|
| L1 / S1–S2 | Adjusted | Increase the curved S1 clear face to the measured 30.0 mm. Preserve S2 clear 14.25 mm and draw its resolved outer shoulder to 30.0 mm. The source's nearly vertical inner-cap endpoint cannot be reproduced under the retained slope guard. |
| L2 / S3–S4 | Adjusted at S4 | Preserve clear 13.6/11.4 mm caps; extend S4's resolved rear shoulder to 13.6 mm. No optical cap is enlarged merely to fill the blank. |
| L3 / S5–S6 | Adjusted at S6 | Preserve clear 11.5/10.0 mm caps and extend the resolved S6 rear shoulder to 11.5 mm. Native reinspection separates the outer vertical stroke from the R6 leader inside the glass. |
| L4 / S7–S8 | Adjusted | Reduce 9.5/8.5 mm to 6.8/6.8 mm, following the smaller nearly equal-height source positive element; the axial source aperture still passes. |
| L5 / S10–S11 | Retained | Meniscus caps retained; no separate vertical shoulder is resolved beyond the ordinary rim connector. |
| L6–L7 / S12–S14 | Retained | Continuous bonded doublet; no opaque S13 interface land. Larger fallback-ray intercepts are not proof of a centered chief or a reason to inflate the pair. |
| L8 / S15–S16 | Retained | Symmetric source radii remain; smaller figure/model height differences alone do not establish new clear apertures. Unconverged extreme-field fallback rays are not a source-diameter measurement. |

| Surface | Field | Before | After | Basis |
|---|---|---:|---:|---|
| S1 | `sd` | 17.8 mm | 30.0 mm | Source curved front face, not a mechanical flange; native span-calibrated measurement. |
| S2 | `sd` | 14.25 mm | 14.25 mm | Existing clear cap preserved at the retained slope constraint. |
| S2 | `rimExtensionSd` | absent | 30.0 mm | Resolved outer shoulder beyond the optical cap. |
| S4 | `sd` | 11.4 mm | 11.4 mm | Existing clear cap preserved. |
| S4 | `rimExtensionSd` | absent | 13.6 mm | Resolved outer shoulder, joined to the existing object-side height. |
| S6 | `sd` | 10.0 mm | 10.0 mm | Existing clear cap preserved. |
| S6 | `rimExtensionSd` | absent | 11.5 mm | Resolved rear shoulder, joined to the existing object-side height. |
| S7 | `sd` | 9.5 mm | 6.8 mm | Source small pre-stop positive element; source aperture still passes. |
| S8 | `sd` | 8.5 mm | 6.8 mm | Same source element; approximately equal cap heights. |

The native first cap-to-outer-height ratio is approximately 0.53–0.55; the adopted 14.25/30.0 ratio is 0.475 because the existing optical cap is retained. At S4 the source ratio is approximately 0.75–0.80, while the adopted clear/outer ratio is 11.4/13.6 ≈ 0.838. The adopted caps are distinct from the measured outer shoulders; the differences are not hidden as measurement precision. At S6, the separate outer vertical stroke is visible near x348, y212–253 in the retained native figure crop; the R6 leader approaches inside the glass and terminates lower on the curved cap. Leader overlap makes the precise cap-end pick less certain than the outer height, so the model preserves its existing larger 10.0 mm clear cap and draws only the conservative outer continuation to 11.5 mm. The initial no-land interpretation conflated that leader/curve junction with the separate outer stroke and is superseded by this native reinspection. The first reconstructed outer wall also has less axial cap depth than the source drawing. No inferred cut or `rimCutDepthSource` is authored.

Rejected trials and interpretations:

- A 31 mm preliminary front-height estimate was refined to approximately 30 mm after native vertex-span calibration; no table R/d was tuned to improve resemblance.
- S2 clear 14.9 mm would approach the source inner cap more closely, but its 69.6° rim slope exceeds the existing 64.2° threshold (2.68 > 2.06). It is rejected, and the guard remains unchanged.
- Enlarging rear caps to pass the engine's extreme-field fallback rays is rejected: those rays have not centered on the stop, so their later intercepts do not establish a correct chief-ray aperture floor. Source/table evidence does not support speculative rear inflation.
- Drawing opaque lands at the L6/L7 bonded interface or inventing a concave cut is rejected. The original shows neither, and fisheye vector fields are outside the inferred-cut validator's launch contract.

All source R/d and N/Abbe pairs, the stop, projection declaration, unit-focus endpoint and other clear apertures are preserved. The printed repeated `R5` label for the +22.35 mm row remains a separately documented historical source-label typo; this review does not newly change that numerical prescription.

### Runtime and source/model boundary

Actual SVGs were compared with the native Figure 2. Sampled focus layouts retain all eight connected finite element paths and show no hidden cap trimming. The source axial f/2.8 aperture passes and the image-circle floor has no undersized result. The generic field census skips this fisheye and is not used as field-clearance evidence.

Field probes use the public bounding-sphere **vector** chief launch, including at 90°; no scalar tangent launch is substituted. The source-supported front correction allows the 60° chief to converge and trace where the earlier model failed. In the one-degree sweep, converged traced chiefs reach 66° at infinity, mid-focus and close-focus layouts; the solver returns fallback status starting at 67°. The source 75–90° fields remain unable to center or trace under the retained cap constraints. A separate dense vector-offset scan around the bounding-sphere launches also fails to bracket a centered stop ray at those extreme fields. Scratch evidence retains the scan bounds, sampling and residuals.

The 180° diagonal is a source declaration and the equisolid mapping remains an inference; neither is a runtime coverage certificate. These are sampled collimated-vector checks over modeled focus layouts, not a finite-object edge-field or full skew-ray beam validation. The slope-limited first inner cap and approximate apertures remain explicit source/model limitations. Original-source review is complete for this record; the full extreme-field runtime reconstruction is unresolved.

### Glass and source-reference qualification

The original defines N and Abbe number ν without identifying their spectral reference (page 3, left column; page 1 claim definitions). The d/g aberration plots give context for an approximate d-line convention, but do not identify the table's reference or publish per-element line indices. No source partial-dispersion or APD quantity is present.

| Element(s) | Printed N / ν | Disposition |
|---|---|---|
| L1, L3 | 1.60311 / 60.7 | Preserved; Unmatched, reference unspecified |
| L2 | 1.61700 / 62.8 | Preserved; Unmatched, reference unspecified |
| L4, L6 | 1.84666 / 23.9 | Preserved; Unmatched, reference unspecified |
| L5 | 1.51112 / 60.5 | Preserved; Unmatched, reference unspecified |
| L7, L8 | 1.48749 / 70.2 | Preserved; Unmatched, reference unspecified |

Each medium now has an explicit `Unmatched` annotation and `indexReferenceNote`. The retained d-line tracing reference is approximate; the prior eight compatible catalog curves are disabled (8/8 → 0/8) while that uncertainty remains. No numeric pair or per-lens spectral value is altered, and no C/F/g indices, partials or APD are invented. Catalog names remain conditional comparisons, not historical supplier, melt or chemistry identifications. Data labels, public glass prose/table, shape notes and the extreme-field disclosure are synchronized.

## Runtime Launch Qualification - 2026-10-30

This is a runtime-only supplement to the dated source/shape/glass review above. No original PDF was reinspected for this supplement; source review dates, prescription values, controls and review counts remain unchanged. Earlier pupil/chief grids labeled near or close sampled **collimated rays through focus-adjusted geometry**. Those labels identify the control geometry, not finite-object illumination. Independently computed finite paraxial residuals and exact-working-f-number probes remain separate; the latter use the runtime distance-label object plane.

The explicit finite-object supplement samples 20 positive focus positions. The complete current ABCD matrix, including any rear plates, supplies the real Gaussian object plane. A paraxial entrance-stop seed and inverse chief solve target actual image heights 0, 10.8250 and 21.6500 mm; paraxial object-height scaling alone is not accepted as the actual image-edge solve. Geometric roots are solved before current-aperture classification. The 21.6500 mm edge is the viewer format corner, which may exceed the selected source's image height; these probes do not establish production illumination or source support for an inferred continuous cam.

Of 20 positive-real-object geometries, 40/60 target chiefs converge: 40 clear the current caps and 0 clip. The other 20 target solves remain unresolved, rather than proving that no physical chief exists. Across the converged fields, 193 current-iris samples per field give 7,286 passed, 434 clipped, 0 failed and 0 unaimed rays. Minimum sampled axial transmission is 193/193. No clear aperture, R/d, stop, cam, tolerance or source field is altered to clear those diagnostics.

Selected current close geometries, with Gaussian conjugates and their exact aimed bundle counts:

| Zoom control | Aberration control | Gaussian object-to-image (m) | Distance label (m) | Axis / half / edge passing of 193 | Chief result               |
| -----------: | -----------------: | ---------------------------: | -----------------: | --------------------------------- | -------------------------- |
|            0 |                  0 |                  0.200000000 |           0.200000 | 193 / 173 / unresolved            | clear / clear / unresolved |

The largest sampled relative difference between a positive Gaussian object-to-image conjugate and its distance label is 43.006412% at zoom 0, focus 0.05, aberration control 0: Gaussian 2.279743518 m versus label 4.000000000 m. This is a first-order conjugate/control distinction, not a new production-distance measurement. Nominal infinity controls remain in their separate collimated checks; their small rounding residual is not converted into a finite-source claim.

Finite rays leave explicit object points; no scalar tangent launch substitutes for the fisheye projection/vector path. The unresolved full-format edge targets retain the known extreme-field source/model limitation. The original source 180-degree specification is not certified by these finite probes.
