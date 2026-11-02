# Voigtländer ULTRON 35mm F1.7 Aspherical L(L39) — consolidated technical record

## Scope and identity
JP2000321490A, Example 1. Original card and recovered patent retained unchanged. Stage 3 author work only. No Stage 4 review or independent approval has occurred. Integration remains pending.

Patent SHA-256: `74629eeae31f55043ed06b09ead43ce7bf3281236bdd86acfe369d3d1353c4f7`. Recovery changed the bytes from the prior archived hash `d905d9dc5a27232f7fe2b68f39946cf720c087706c44509b485383be57e25965`; this author re-extracted the actual recovered pages rather than trusting prior optical conclusions.

## Primary extraction
Inspected actual rendered PDF pages [1, 3, 4, 7]; PDF p4 / printed p3 Table 1 rows1–15; PDF p4 / printed p3 Table 2; PDF p4 ¶0015. Literal rows, signs, zeros and exponents are preserved in evidence. Source blank index cells at exits mean air; cemented junctions are explicitly indexed. All glass and stop planes are retained. The image plane is after the final tabulated spacing. No plate is listed, and none is invented.

The patent uses the standard 1+K conic form, so K is copied unchanged. Indices use the d-line convention supported by the source reference plots, without a spectral conversion. A fourth-order or higher asphere has no first-order paraxial power beyond its vertex radius.

## Executed first-order verification
The portable verifier independently implements sequential height/reduced-angle propagation and 2×2 refraction/translation matrix multiplication. An analytic thin biconvex reference and determinant invariant check test the implementations. Final vertex EFL is 36.0506518586 mm and last-vertex BFD is 19.0006551627 mm. Vertex track is 45 mm; source first-vertex-to-image distance is 64 mm. Every refracting surface has a separate Petzval contribution. Standalone singlet focal lengths are evaluated in air, while cemented groups are traced with the real shared interfaces; they are not interchangeable quantities.

Published comparisons (residual = computed minus source):
- EFL: 36.0506518586 versus 36.05, residual 0.000651858624515, tolerance 0.01; PASS.
- BFD: 19.0006551627 versus 19.0, residual 0.000655162655185, tolerance 0.005; PASS.

## Glass evidence
Fresh primary OHARA, HOYA, Schott, Sumita and Hikari catalogs were searched broadly; evidence preserves per-coordinate competing rows and source hashes. The Stage 1 author checked raw AGF row presence and file hashes. CDGM September 2026 primary catalog is included in the six-vendor review. Candidate residuals are recomputed from their native coordinates. Coordinate equivalence does not prove supplier or melt identity. No catalog spectral curves are falsely promoted to source-published element properties.

## Production correlation and limits
The official Cosina discontinued-product record and supplied optical section establish the marketed focal length, aperture, lens count, mount, release period, and outline topology. They do not explicitly name this patent. Product correlation is therefore supported but unconfirmed. Later M-mount versions are not substituted for the selected L39 product.

## Focus and aperture
The source publishes a single prescription and no finite-focus motion law. The chosen disposition is NO_INTERNAL_RECONSTRUCTION; future data uses the established closeFocusM=1e15 infinity-only sentinel and empty var. Production minimum focus remains marketing context only. The physical diaphragm radius and numerical lens clear apertures are absent. A Stage 2 iris calibrated to source f-number is an inference, not independent f-number verification.

## Limitations and open issues
- focus-limitation (optional source limitation): Finite-focus law unpublished; NO_INTERNAL_RECONSTRUCTION, no invented motion.

## Transformation ledger
- design-marketing-aperture: Use source f/1.64 for aperture calibration; retain marketed f/1.7 separately. No proof that the exact patent prescription was manufactured unchanged.
- stop-calibration: Paraxial iris radius = abs(front-to-stop A)*computed EFL/(2*source Fno). Source publishes aperture ratio but not physical diaphragm diameter. This calibration is dependent, not independent verification.
- semi-diameters: Set model clear radii from on-axis pupil geometry and refine against source section and exact off-axis containment. No published numerical clear apertures. Values remain modeling estimates; geometry and actual runtime tests govern admissibility. D2 clear radii were increased from an initial 12.5 to 13.35 mm: the optional full-field -0.75 ray otherwise first clipped at cemented interface 10. New boundary radii pass edge/gap/rim checks and move that vignetted ray to legitimate entrance surface 12; no diagnostic exception added.
- literal-authoring: Use JSON-literal subset inside canonical TypeScript wrapper. Portable strict JSON grammar rejects duplicate keys and arbitrary expressions; real Node TypeScript import separately executes the final file.
- glass-code-rounding-correction: Replace generated half-even rounded label with six-digit code present in primary catalog rows. nd=1.77250 νd=49.6 is code 773496 in Sumita K-LaSFn7, HOYA TAF1, Schott N-LAF34 and OHARA S-LAH66. No optical numeric field changes.

## Claim-to-result map
- System EFL/BFD/principal planes/track: results.sourceModel.
- Standalone/cemented powers: results.sourceModel.elements and airSeparatedGroups.
- Per-surface Petzval: results.sourceModel.petzval.
- Native prescription and coefficient claims: evidence.rawPrescription, checked against cited pages.

## Completed Stage 2 construction and geometry
The final TypeScript literal is parsed by a strict limited JSON grammar with exact wrapper checking. Duplicate keys, trailing code and arithmetic fixtures reject; a first-radius mutation alters EFL as expected. The real pinned project separately imports the final TypeScript file. Geometry is calculated from those final parsed values, not an intended-model copy.
Inferred stop radius 10.973970880 mm calibrates f/1.640000; entrance-pupil radius 10.991052396 mm. Minimum sampled edge thickness 0.135221391 mm. Actual rim angles, conic domain, shared-band intrusion, and all sampled edges passed. Asphere departures apply only at modeled apertures.
The independent exact meridional tracer and real project trace both pass the current default on-axis/off-axis pupil fans. Optional full-field outer-rim vignetting is retained; no unvignetted full-field claim is made. No cemented-interface first clipping remains in the tested fan. Actual state-native project render diagnostics show no trim. No diagnostic exceptions were added.
Real project typechecking, Prettier, corpus tests and full build remain NOT_RUN at integration. No metadata generation, integration, project edits, commits, pushes or publication took place.

## Stage 3 claim and citation review
The data and evidence exactly match the replacement Stage 2 checkpoint. Stage 3 extends the verifier only to add analysis checks. No geometry or source numeric values changed in Stage 3; the class-code correction from 772496 to 773496 was made upstream, documented and revalidated before this prose was finalized.
Metadata claims map to the source cover and manufacturer record. Architecture numerics map to implementedModel EFL/BFD/track/principal planes and airSeparatedGroups. Every element first line maps to parsed elements and implementedModel.elementFacts. Stop and asphere-rim claims map to implementedModel.aperture and geometry. Each copied token is explicitly checked with declared rounding in analysis-numerical-claims.
Manual review: patent paragraph references support stated architecture and the cited whole-design rationale; individual element paragraphs avoid unsupported aberration allocations. Product correlation remains qualified. Glass candidate examples agree with captured primary catalog coordinates, with supplier and spectral limits explicit. Focus, inferred aperture, no-scaling, published stop and asphere convention disclosures are consistent with final data. Conventional primary URLs and one-based PDF locators are usable outside the conversation.

## Disposition
READY_FOR_AUDIT. No implied integration or Stage 4 approval. The clean extraction replay must retain the same numerical content and expected exit status.

# Stage 4 source-first independent review and final disposition

## Reference versions and exposure
The controlling project is 5c25e4289c6e090eb44177e907d901dfe3cef76c. CHAT-1.0 protocol/dossier and actual Stage 4 prompt govern this review. The preceding sections are retained historical Stage 1–3 author records; their READY_FOR_AUDIT is the input gate, not this review's conclusion.

The reviewer read original canonical card/publication, rendered Tables 1–2 and Figure 1, freshly re-entered all numerical source inputs, wrote reduced-angle ray and separate physical-angle ABCD implementations, and independently scanned raw OHARA, HOYA, Schott, Hikari, Sumita and CDGM files. The Pass A was frozen before candidate exposure. Fingerprint: `d15c17c13db55b5fa4fa2f3393834159c5143e7d11e6563d4fbd50f2be15b369`. The candidate was first opened on 2026-10-03 at 16:41 UTC, after freeze at 16:21 UTC. Evidence preserves exact baseline text, computed results, glass excerpts, catalog-scan code and exposure; the consolidated verifier embeds the exact original fresh code and reruns it separately using stdlib temporary files. Fingerprints preserve bytes; they do not establish cryptographic blindness. Post-exposure exact geometry/ray code is freshly written but is not claimed blind.

Input archive SHA-256: `ea0b1cd1af1532afb376615f809f629156e5dce7fbe9c8c449473d30945e8ba4`. Input and final data SHA-256: `7a89f45b5f55d8a3976f4d574ca15b09bb8ca340da93053149393469fa4c6de4`. The data file is unchanged. All original-candidate member hashes remain in evidence.

## Four-view reconciliation
Every R, d and n in the exact final TypeScript matches both the raw patent table and the frozen independent inputs. All source Abbe numbers, element shapes, two downstream glass-to-glass junctions, one STO at source plane 8, and all four nonzero asphere orders agree. No source radius, gap, material coordinate, conic, exponent or scale was corrected. Raw final d=19.0000 remains source truth, separately from the calculated BFD. There is no plate, dummy plane, synthetic cement or hidden focus movement.

Fresh source-first EFL 36.0506518586245 mm, BFD 19.0006551626552 mm, Petzval 0.00278578683649951 mm⁻¹, all eight standalone powers, six air-group powers, both principal planes and pupil geometry agree with implemented-file results. TL/EFL=64/36.0506518586 > 1 and BFD/EFL < 1 support neither a telephoto nor retrofocus label. Patent focal range 33–38 mm is satisfied. Finite-conjugate quantities are unavailable because no mechanism law is supplied; NO_INTERNAL_RECONSTRUCTION is retained.

## Corrections and dependent reruns
1. Author coverage called an on-axis ±0.75 fan the default. Actual current defaults are ±0.83, ±0.50 and ±0.17. The reviewer reran these exact fractions, every off-axis default fraction, fields 0%, 30%, 60% and diagnostic 100%, all eight f-stops, and static focusT=0,0.5,1. All 504 actual runtime rays at required default/intermediate fields pass; optional raw full-field losses remain recorded. The newly written independent exact angular-Snell trace confirms required clearances and matching runtime rays. No aperture change was needed.
2. The author omitted an actual project transformation: runtimeLens.ts lines 636–659 maps the nominal entrance-pupil edge through exact front-group refraction and replaces the runtime stop radius. Authored paraxial radius is 10.973970880 mm; runtime exact radius is 11.46011789790444 mm. A new independent exact calculation reproduces the latter within 1e-8 mm. The initial all-ray equality check failed on one optional f/4, 100% raw-field +0.75 ray because it compared the authored stop with the larger runtime stop. This was a harness reference-state mismatch, not a failed required validator: required default rays passed with both stops. Both versions remain in results, including the authored-stop iris loss. Analysis now explicitly distinguishes both calibrations and neither is claimed source-measured.
3. Analysis now states the d-line interpretation is inferred from Figure 2's 587.6 nm reference and coordinate compatibility, not an explicit subscript on the N/ν table. No spectral conversion or field change was made.
4. “Original supplied JPO/DPMA PDF” is clarified to “canonical recovered JPO/DPMA PDF.” The reacquired PDF differs from lost download bytes, and original pre-interruption card byte identity is unverified. Current canonical card/PDF hashes are preserved exactly; no prior lost-file identity is claimed.

These evidence/prose changes reopen dependent consistency checks. The final verifier reruns every Stage 1/2/3 mandatory check and the new Stage 4 reconciliation. It consumes actual final TypeScript, not a parallel intended application object. A real Node import is also compared against the strict JSON-subset parser. Duplicate keys, trailing code and expressions are negative fixtures; an optical radius mutation changes EFL.

## Geometry and actual application execution
New reviewer sag/derivative code samples 1025 radial points and adds 50-bisection derivative sign-change roots for extrema. Minimum glass thickness remains 0.13522139100085 mm; all actual rim slopes, conic domains, aperture ratios and shared-band air gaps pass. Finite radial/meridional sampling is not continuum or full-pupil proof.

Actual pinned project validateLensData and buildLens pass. State-native render diagnostics report zero trim; focus positions 0,0.25,0.5,0.75,1 have identical axial coordinates. Actual image-circle audit reports zero undersized surfaces. Actual format-corner audit reaches 21.6499983931 mm of 21.65 mm at 31.6166378742°, with clear corner chief ray. This format-aware field is distinct from the raw vignetting-limited 37.1086697564° field. Source Figure 2 covers image height 21.99 mm, so the modeled full-frame corner is within the published field extent. Patent Figure 1 and the original manufacturer SVG were visually compared; clear-radius proportions are compatible and do not establish manufacturing rim dimensions.

The reproducible optional runtime command is:
`node --import <runtime>/scripts/ts-js-specifier-hook-register.mjs <stem>.runtime.mjs <data.ts> <external-output.json> <runtime-root>`.
Additional executed commands used the real scripts audit-image-circle.mjs and audit-field-coverage.mjs with only this explicit candidate path; the latter used `--below=1.01 --json=<external-results>`. Their records remain in runtime.json. No corpus sweep, metadata generation, integration, full build or Git action occurred.

## Glass and source review
The independent six-family scan is frozen, and relevant primary coefficient round-trips are recomputed offline. Actual runtime six-digit resolution gives LLF1, J-LASF016, N-LASF44, E-FD2, E-FD15, N-LASF44, NBFD13 and LAC13 for L1–L8. Each proxy meets the actual runtime native-coordinate window. These are catalog proxies, not supplier or historical-melt findings. OHARA S/L prefix distinctions remain in source evidence. No source spectral values or APO claims are invented.

## Quantitative claim map and manual review
- Identification metadata, application/date/name/counts/mount/MFD/launch: raw cover plus frozen primary manufacturer metadata; recovered-source distinction preserved.
- Architecture EFL/BFD/track/principal planes/Petzval: implementedModel and independentBaseline.recomputed.sourceModel.
- Each L1–L8 inline n/ν/class/f: implementedModel.elementFacts and independentBaseline.recomputed.elements; glass equivalents checked against independentPass.glass.
- Cemented group powers/sign sequence: implementedModel.airSeparatedGroups and independentBaseline.recomputed.functionalGroups.
- Source coefficients/conic/scaling: rawPrescription and independentPass.inputs.aspheres, exact final-file comparison.
- Authored stop, entrance pupil and asphere departures: implementedModel.aperture/geometry.
- Runtime stop and field values: runtime-stop-calibration and stage4-analysis-claim-map; fieldCoverageAudit; no circular aperture validation claim.
- Minimum thickness and contour claims: independentReview.geometry plus actual render diagnostics; no production rim claim.
- Default/optional fan, aperture and focus claims: independentReview.exactRayChecks and projectExecutionRecord.rays/states.
Manual interpretive review confirms patent paragraph attributions, conservative element-role statements, distinction between standalone and cemented powers, qualified production correlation, fixed infinity-only focus, and no APO/manufacturing/process claims. Sources remain primary, with exact patent locators and public manufacturer URLs.

## Gate and pending integration
All mandatory scoped checks pass on final files, contingent on the completed inventory/hash and clean extraction replay recorded in the manifest. READY_FOR_BATCH is pre-integration only. IntegrationStatus remains INTEGRATION_PENDING. Real typecheck, Prettier, corpus tests and production build were not available/executed in this scoped task and remain NOT_RUN at integration. Existing actual runtime checks passed; no observed validator failure was relabeled integration-only. The independent baselines remain frozen and unchanged outside the package.


## Stage 4 metadata correction

The current NOT_RUN integration-check reason incorrectly said no authored model existed at Stage 1. It now states the actual pre-integration toolchain/corpus/build status and distinguishes already-executed targeted real checks. This changes explanatory metadata only; data, analysis, primary sources, optical results, runtime records and frozen baseline remain unchanged. The original final dossier/ZIP is preserved. Original ZIP SHA256: fda08fb8bd2fb5775e95cdd91a6a915978b5fbb08e0e7535ca2baf65726c0c8d. The final verifier and bound results/manifest are rebuilt and clean-replayed for this replacement.

## 2026-10-08 — Deployment validation against patent and maker diagram

Independent re-read of JP 2000-321490 A Example 1 from page images: 15 of 15 surface rows, eight glass pairs and the surface 14 asphere agree; engine f 36.05 mm and F/1.64 as printed. The rendered section matches Cosina's diagram: biconcave front element, two cemented pairs around the stop and an aspherical concave front on the last element.

No data change at deployment.

## 2026-10-08 — Semi-diameter pass against the patent figure and maker diagram

Source: `patents/JP2000321490A.pdf`, PDF page 7 (printed page 6), FIG. 1 — the lens section of the first
embodiment, which is the example this file models. The sheet is a 200 dpi raster with ray bundles for the axis
and three off-axis image heights; it was measured at 400 dpi from straight ink runs (rim edges, flat annuli,
vertex tangents) and confirmed on zoomed crops. The automatic figure screen is unusable on this sheet: the rays
defeat it and it takes an element edge for the axis.

Scale. Vertex crossings at 400 dpi: surface 1 at x = 979, surface 9 at 1486.5, surface 15 at 1927.5, image plane
at 2326.5. Against the stored prescription (no scaling; 24.0435, 45 and 64 mm from surface 1) these give 21.11,
21.08 and 21.05 px/mm; 21.06 px/mm was used. The drawn axial marginal ray enters 231 px above the axis, 10.97 mm,
against 10.99 mm traced at f/1.64, so the vertical scale agrees. The sheet is rotated 0.8°, so each height is
half the top-to-bottom span.

| Surface | Before | FIG. 1 | After | Evidence |
|---|---:|---|---:|---|
| 1 | 14.0 | 13.10 outer rim; curve ends at 11.0, flat annulus beyond | 13.1 | figure; L1 drawn 0.9 mm lower than L2 |
| 2 | 14.0 | 13.10 outer rim; curve ends near 11.7 | 13.1 | square-cut with surface 1 |
| 3, 4 | 14.2 | 14.03 | 14.2 | retained, 1.2 % |
| 5, 6 | 15.0 | 15.48, knife edge | 15.0 | retained; the prescription's knife edge is at 15.14 |
| 7 | 15.0 | 15.08 | 15.0 | retained |
| 9, 10, 11 | 13.35 | 12.61 outer rim; surface 9 curve ends at 11.1 | 12.6 | figure; level with L7 |
| 12, 13 | 12.5 | 12.49 | 12.5 | retained |
| 14A | 13.2 | 12.44 outer rim; curve ends at 10.2, flat annulus beyond | 12.4 | figure; level with L7 |
| 15 | 13.2 | 12.44 | 12.4 | square-cut with surface 14A |

Four of the seven rim heights already matched the drawing within about 1 %, so the 6 % excess on L1, the rear
cemented pair and L8 is not measurement scatter. The ledger above records that the rear pair was raised from
12.5 to 13.35 mm to contain an off-axis ray, and 13.2 mm on L8 coincides with the unvignetted full-field bundle
height at surface 14A (13.14 mm). Rims are not held above the drawing to contain off-axis fans, so all three
return to the drawn heights. Side effects of the old values that the drawing does not show: the L5 front rim
stood 0.28 mm in front of the stop plane (now 0.30 mm behind it; FIG. 1 draws about 1 mm), the L6 rim was a
0.135 mm knife edge (now 0.85 mm; drawn about 1 mm), L1 stood within 0.2 mm of L2 where FIG. 1 draws a 0.9 mm step,
and the rear pair and L8 stood above L7 where FIG. 1 draws all three level.

Flat annuli. FIG. 1 ends surfaces 1, 9 and 14A at flat mounting annuli. Both options were rendered: concave
faces cut to the curve end (11.0, 11.1, 10.3 mm) with the opposite face at the outer rim turned L1, L5 and L8
into wedge-topped trapezoids; both faces at the drawn outer rim keeps the square-cut boxes of the drawing and
was kept. The cost is that the three concave faces run 0.6, 0.7 and 1.3 mm forward of the drawn annulus
planes, so rim thicknesses stay above the drawing: L1 6.68 mm (was 7.45; drawn 5.7) and L8 5.41 mm (was 6.07;
drawn 4.3).

Maker diagram (Cosina construction drawing, local image, 1134 × 756 px). Eight elements in six groups with the
same grouping as Example 1: biconcave single, biconvex single, cemented biconvex plus negative meniscus, stop
gap, cemented biconcave plus biconvex, biconvex single, and a rear negative element whose concave front is the
only marked surface ("Aspherical Surface"). No special glass is marked. Vertex spacings follow Table 1 within
about 0.4 mm at 15.12 px/mm. Heights relative to L3, maker against FIG. 1: L1 0.90 / 0.85, L2 0.92 / 0.91,
L4 0.97 / 0.97, rear pair 0.81 / 0.81, L7 0.81 / 0.81, L8 0.87 / 0.80. The maker drawing agrees with the figure
on L2, L4, the rear pair and L7, also ends surfaces 1, 9 and 14A at flat annuli, and also draws the rear pair
level with L7. It draws L1 and L8 relatively taller than FIG. 1; at its own axial scale they read 12.7 and
12.3 mm, close to the figure's 13.1 and 12.4 mm, while L2 to L7 read about 9 % smaller than the figure. The
patent figure of the modeled example governs.

Clearance after the change. Axial marginal ray at f/1.64 against the rim: 10.99 / 13.1 at surface 1,
11.69 / 13.1 at 2, 13.60 / 15.0 at 5, 10.79 / 12.6 at 9, 11.07 / 12.6 at 10, 6.59 / 12.4 at 14A. Corner chief ray
(Y = 21.63 mm, 31.59°): 6.07 at surface 1, 8.41 at 14A, 9.49 at 15. The validator reports no errors, the
image-circle floor reports none undersized, and the traced corner coverage is unchanged at 21.65 of 21.65 mm
with a clear chief ray. Engine f-number 1.64 and runtime stop radius 11.4601 mm are unchanged. The engine's
rim-limited half-field moves from 37.11° to 35.40° (surface 15 limits it), still above the 31.6° format corner.
The meridional share of the stop diameter that passes wide open goes from 85 % to 81 % at 22.3° and from 68 % to
56 % at the corner; the clear apertures FIG. 1 draws at surfaces 1 and 12 (about 11.1 and 11.3 mm) would pass
about 47 %, so the model is still more open than the drawing. At the default off-axis field (21.24°) the
outermost default ray on the L1 side now stops at the L1 rim (13.46 mm against 13.1 mm).

Asphere. Surface 14A at 12.4 mm: sag −3.449954303 mm, departure from the base sphere −1.354977963 mm (was
−4.109019202 and −1.725637825 mm at 13.2 mm); the slope stays monotonic to 14 mm. The analysis file's asphere,
semi-diameter, minimum-edge (now 0.185094548 mm at the L3 rim) and half-field statements were updated to match.

Open limitations. The renderer has no flat annulus, so the front tips of L1, L5 and L8 are sharper than drawn.
L3 cannot reach the drawn 15.5 mm, and both drawings put its apex about 0.4 mm above L4 where the model has
both at 15.0 mm. The outer 2 mm of surface 14A extends the aspheric polynomial past the zone FIG. 1 draws as
curved.

## 2026-10-08 — Integration: glass labels and metadata

- `specs` restated in the catalog form (design f = 36.05 mm, design F/1.64, one aspherical surface on one element, infinity prescription only); `apertureBlades` 10 added.
- Glass labels reviewed and left as authored: the patent prints νd to one decimal, so the six-digit code labels are the honest form, and all eight resolve to catalog curves. Neither drawing marks a special glass, so no `apd` tag is set.
- Display name, mount (`leica-ltm`) and format reviewed and left as authored. The focus control reads "Not modeled" for this infinity-only prescription.

## 2026-10-08 — Second review: diagram, labels and movement

Compared: the local page (infinity view, `focus=1`, both movement overlays and the inspector for elements 1, 3,
4, 5 and 8) against `patents/JP2000321490A.pdf` — FIG. 1 on PDF page 7, Tables 1 and 2 on PDF page 4, claims 1–3
and ¶0009–0010 on PDF page 3 — and against the Cosina construction drawing.

### Semi-diameters: re-measured, no change

FIG. 1 was read again from the native 816 × 528 px, 200 dpi bitmap embedded in the PDF, without resampling.
Each rim is a straight ink run that the drawn rays cross but do not follow, so top and bottom were read
separately.

Scale. Vertex strokes on the axis: surface 1 at x = 135.5, surface 9 at 388, surface 15 at 609, image plane at
808. Against 24.0435, 45 and 64 mm these give 10.50, 10.52 and 10.51 px/mm. The vertical scale was checked on
two features that do not depend on any rim: the outermost bundle meets the image plane 231.5 to 232.3 px above
the axis, which taken as the 21.99 mm maximum image height of FIG. 2 gives 10.53 to 10.56 px/mm, and the two
axial marginal rays enter 233 px apart, which is the traced 2 × 10.99 mm at 10.60 px/mm. The drawing is
isotropic within 1 %; 10.53 px/mm is used below and the range 10.51 to 10.60 moves no reading by more than
0.1 mm. The sheet is rotated 0.75° (the axis shifts 0.0132 px per px), so each height is taken from the fitted
axis at that element.

| Element | Top edge (px) | Bottom edge (px) | Above / below axis (px) | FIG. 1 (mm) | Stored | Pre-first-pass |
|---|---:|---:|---|---:|---:|---:|
| 11 (L1), surfaces 1, 2 | 146.5 | 422.0 | 137.9 / 137.6 | 13.08 | 13.1 | 14.0 |
| 12 (L2) | 136.0 | 431.5 | 147.8 | 14.03 | 14.2 | 14.2 |
| 13a (L3) apex | 119.5 | 445.5 | 163.0 | 15.48 | 15.0 | 15.0 |
| 13b (L4) | 123.5 | 441.3 | 158.9 | 15.09 | 15.0 | 15.0 |
| 14 (L5 + L6), surfaces 9–11 | 148.0 | 414.0 | 132.9 / 133.1 | 12.63 | 12.6 | 13.35 |
| 15 (L7) | 148.5 | 411.3 | 131.4 | 12.48 | 12.5 | 12.5 |
| 16 (L8), surfaces 14A, 15 | 147.5 | 409.3 | 131.1 / 130.8 | 12.43 | 12.4 | 13.2 |

The three first-pass values hold. The rim edges of L1, the rear cemented pair and L8 are 61, 115 and 46 px long
and symmetric about the fitted axis within half a pixel; the earlier 14.0, 13.35 and 13.2 mm would sit 9.7, 7.6
and 8.1 px outside those edges, against a reading error of about 1 px. The flat annuli were also re-read: the
curve of surface 1 ends 115 px (10.9 mm) from the axis, where the drawn axial marginal ray enters; surface 2
near 12.0 mm; surface 9 at 11.2 mm; surface 14A at 10.3 to 10.4 mm, with the annulus plane 2.2 mm in front of
the vertex as the asphere's sag at that height requires. Curve-end heights on the concave faces were looked at
again in the first-pass renders and again rejected: the renderer joins unequal rim points with a straight
edge and turns the three square blocks of the drawing into wedge-topped trapezoids.

Cosina drawing, measured independently from its rim edges at 15.13 px/mm (surface 1 to surface 15, 681 px):
L1 12.7 mm and L8 12.3 mm, the rear pair and L7 level at 11.4 mm, L2 13.0 mm, L3 14.0 mm. Its vertex spacings
follow Table 1 within about 0.6 mm. It supports the lowered L1 and L8 in absolute terms and the level rear pair
and L7 in relative terms; it draws L8 taller than L7 where FIG. 1 draws the two level, and the figure of the
modeled example governs.

Nothing in the ray floors changes because no `sd` changed: engine half-field 35.40° and f/1.64 before and
after, validator clean, image-circle floor clean, traced corner coverage 21.65 of 21.65 mm.

### Labels

| Item | Before | After | Evidence |
|---|---|---|---|
| `groups` | none | G1 − (1–2), G2 + (3–4), G3 + (5–7), G4 − (9–11), G5 + (12–13), G6 − (14A–15) | Claim 1 and ¶0009: first to sixth lens groups 11–16 with negative, positive, positive, negative, positive, negative power. Traced group focal lengths −31.24, +84.32, +25.40, −46.98, +28.44, −55.50 mm carry the same signs |
| `diagramLabel` | none (the diagram showed 1 to 8) | 11, 12, 13a, 13b, 14a, 14b, 15, 16 | FIG. 1 numerals; ¶0010 names biconvex lens 13a, negative meniscus lens 13b, biconcave lens 14a and biconvex lens 14b |
| `focusDescription` | opened with the pipeline token NO_INTERNAL_RECONSTRUCTION | plain sentence: infinity-only, close focus not modeled, production lens focuses to 0.9 m | readability on the page |

Element `name` stays L1 to L8: the patent designates only the four cemented components individually, and
numerals 11, 12, 15 and 16 are group numerals that each cover one lens. Numeral 16a in FIG. 1 is the aspherical
object-side surface of the sixth group (¶0009), which is surface 14A here, so no element carries it.

Checked and left as found. Cemented brackets D1 (surfaces 5–7) and D2 (9–11) span the cemented third and
fourth groups of claims 2 and 3. The stop is Table 1 surface 8, drawn between 13b and 14a as numeral 17 is.
Element types agree with the signs in Table 1: L1 biconcave (−30.95 / +38.97), L2 biconvex, L3 biconvex, L4
negative meniscus concave to the object (−28.27 / −106.75), L5 biconcave, L6 biconvex, L7 biconvex, L8 negative
meniscus concave to the object (−37.74 / −2000). Table 1 marks only surface 14 with an asterisk and Table 2
gives K = 0 and four coefficients for it; the file has one `asph` entry, 14A, with the same values. All fifteen
rows of Table 1 were read again from the page image and agree with the file. The patent names no glass and no
special dispersion, and the Cosina drawing marks only "Aspherical Surface" on the front of the last element,
so no `apd` tag is right. Front-page inventor, applicant, number and year agree with the file.

### Movement

The patent publishes one infinity prescription and no focusing data, so there is no direction or order to
check. `var` is empty, the focus slider is disabled with "Not modeled" at its far end, and the movement overlay
reports six groups with no modeled movement.

### Open limitations

- A URL carrying `focus=1` still moves the disabled slider and prints the `closeFocusM` sentinel as
  "1000000000000000 m" in the focus readout. This is viewer behaviour for every infinity-only lens, not data.
- FIG. 1 draws the L3 apex at 15.48 mm with a 0.75 mm land, which Table 1 does not allow (the faces meet at
  15.14 mm); the model stays at 15.0 mm.
- The renderer has no flat annulus, so the front tips of L1, L5 and L8 remain sharper than drawn and the L5
  front rim stands 0.3 mm behind the stop plane where FIG. 1 draws about 1.0 mm.
