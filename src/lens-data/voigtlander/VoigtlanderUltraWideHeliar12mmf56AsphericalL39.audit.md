# Voigtländer ULTRA WIDE-HELIAR 12mm F5.6 Aspherical L(L39) — consolidated technical record

## Scope and identity
JP2001124985A, Example 1. Original card and recovered patent retained unchanged. Stage 3 author work only. No Stage 4 review or independent approval has occurred. Integration remains pending.

Patent SHA-256: `bf2ce556e9b4eb999d8d0e398cd9343a3121364ed5d534b9dc50f8119486f44d`. Recovery changed the bytes from the prior archived hash `268a2832e8ddb92efea4f6b3c283c9d640b73357d185d28718da725d82fa60ac`; this author re-extracted the actual recovered pages rather than trusting prior optical conclusions.

## Primary extraction
Inspected actual rendered PDF pages [1, 4, 5, 11]; PDF p5 / printed p4 Table 1 rows1–19 and image plane20; PDF p5 / printed p4 Table 2; PDF p5 ¶0017. Literal rows, signs, zeros and exponents are preserved in evidence. Source blank index cells at exits mean air; cemented junctions are explicitly indexed. All glass and stop planes are retained. The image plane is after the final tabulated spacing. No plate is listed, and none is invented.

The patent uses the standard 1+K conic form, so K is copied unchanged. Indices use the d-line convention supported by the source reference plots, without a spectral conversion. A fourth-order or higher asphere has no first-order paraxial power beyond its vertex radius.

## Executed first-order verification
The portable verifier independently implements sequential height/reduced-angle propagation and 2×2 refraction/translation matrix multiplication. An analytic thin biconvex reference and determinant invariant check test the implementations. Final vertex EFL is 0.998104728786 mm and last-vertex BFD is 1.13098988875 mm. Vertex track is 3.88 mm; source first-vertex-to-image distance is 5.01 mm. Every refracting surface has a separate Petzval contribution. Standalone singlet focal lengths are evaluated in air, while cemented groups are traced with the real shared interfaces; they are not interchangeable quantities.

Published comparisons (residual = computed minus source):
- EFL: 0.998104728786 versus 1.0, residual -0.00189527121449, tolerance 0.005; PASS.
- BFD: 1.13098988875 versus 1.13, residual 0.000989888745057, tolerance 0.005; PASS.
- functionalGroup2Ratio: 1.06370603059 versus 1.06, residual 0.00370603059258, tolerance 0.005; PASS.
- frontPairRatio: 0.872603542713 versus 0.87, residual 0.00260354271291, tolerance 0.005; PASS.
- BFD/EFL: 1.13313749161 versus 1.13, residual 0.00313749161497, tolerance 0.005; PASS.

## Glass evidence
Fresh primary OHARA, HOYA, Schott, Sumita and Hikari catalogs were searched broadly; evidence preserves per-coordinate competing rows and source hashes. The Stage 1 author checked raw AGF row presence and file hashes. CDGM September 2026 primary catalog is included in the six-vendor review. Candidate residuals are recomputed from their native coordinates. Coordinate equivalence does not prove supplier or melt identity. No catalog spectral curves are falsely promoted to source-published element properties.

## Production correlation and limits
The official Cosina discontinued-product record and supplied optical section establish the marketed focal length, aperture, lens count, mount, release period, and outline topology. They do not explicitly name this patent. Product correlation is therefore supported but unconfirmed. Later M-mount versions are not substituted for the selected L39 product.

## Focus and aperture
The source publishes a single prescription and no finite-focus motion law. The chosen disposition is NO_INTERNAL_RECONSTRUCTION; future data uses the established closeFocusM=1e15 infinity-only sentinel and empty var. Production minimum focus remains marketing context only. The physical diaphragm radius and numerical lens clear apertures are absent. A Stage 2 iris calibrated to source f-number is an inference, not independent f-number verification.

## Limitations and open issues
- focus-limitation (optional source limitation): No finite-focus spacing law or constrained reconstruction; infinity-only sentinel.

## Transformation ledger
- scale-to-marketing: Apply s=12 to all source lengths; A_p -> A_p/12^(p-1); K and nd/vd unchanged. Patent uses f=1 normalization, while selected production lens is 12 mm. Source rounding is preserved.
- group-definition: Use 10 physical elements and 8 air-separated groups; separately preserve patent functional groups G1-G4. Patent group definitions contain air-spaced components; metadata groupCount means air-separated groups.
- stop-calibration: Set physical model iris radius=abs(front-to-stop A)*scaled EFL/(2*5.66). Published Fno but no physical stop diameter; dependent calibration.
- semi-diameters: Apertures initialized from source optical sections and sequential ray geometry, constrained by actual profile geometry. Source first two negative menisci show edge bevels/steps; front and rear clear apertures need not equal drawn blank diameter. No published numerical SDs.
- rectilinear-field: Set published fullFieldDeg=121 and maxTraceFieldDeg=60.5 for unusually wide rectilinear design. Current project spec permits published coverage for unusual rectilinear ultrawides; individual ray clipping remains physical and visible.
- stop-plane-literal: Preserve source literal 絞り (stop), normalize to optically neutral flat plane for tracing. Source explicitly names the aperture stop rather than printing a numeric radius; a neutral plane is the physical diaphragm convention.
- front-meniscus-clearance-refinement: Enlarge first meniscus rear clear radius and reduce following front clear radius to ray-supported values within source silhouette proportions. Exact spherical intersection and Snell tracing at published 60.5-degree half field gives rear-surface2 heights 10.905–11.258 mm, and next-front-surface3 heights 9.906–10.771 mm. Updated radii retain real rim-angle/edge/gap margins and remove artificial front clipping without geometry exceptions.
- sample-coverage: Use actual current axial fractions [-.83,-.5,-.17,.17,.5,.83]; off-axis fractions [-.75,-.375,0,.375,.75] at .60 and optional1.0 of published60.5degree half-field. Distinguish current axial default fan from the off-axis fan; finite meridional samples do not establish continuum clearance.

## Claim-to-result map
- System EFL/BFD/principal planes/track: results.sourceModel.
- Standalone/cemented powers: results.sourceModel.elements and airSeparatedGroups.
- Per-surface Petzval: results.sourceModel.petzval.
- Native prescription and coefficient claims: evidence.rawPrescription, checked against cited pages.

## Completed Stage 2 construction and geometry
The final TypeScript literal is parsed by a strict limited JSON grammar with exact wrapper checking. Duplicate keys, trailing code and arithmetic fixtures reject; a first-radius mutation alters EFL as expected. The real pinned project separately imports the final TypeScript file. Geometry is calculated from those final parsed values, not an intended-model copy.
Inferred stop radius 1.801254309 mm calibrates f/5.660000; entrance-pupil radius 1.058061550 mm. Minimum sampled edge thickness 0.960000000 mm. Actual rim angles, conic domain, shared-band intrusion, and all sampled edges passed. Asphere departures apply only at modeled apertures.
The independent exact meridional tracer and real project trace both pass the current default on-axis/off-axis pupil fans. Optional full-field diagnostics are retained; a finite fan does not establish unvignetted continuous-field/full-pupil performance. No cemented-interface first clipping remains in the tested fan. Actual state-native project render diagnostics show no trim. No diagnostic exceptions were added.
Real project typechecking, Prettier, corpus tests and full build remain NOT_RUN at integration. No metadata generation, integration, project edits, commits, pushes or publication took place.

## Stage 3 claim and citation review
The data and evidence exactly match the replacement Stage 2 checkpoint. Stage 3 extends the verifier only to add analysis checks. No geometry or source numeric values changed during this Stage 3 authoring. The completed upstream correction/normalization ledger is retained; all data and evidence were revalidated before the prose was finalized.
Metadata claims map to the source cover and manufacturer record. Architecture numerics map to implementedModel EFL/BFD/track/principal planes and airSeparatedGroups. Every element first line maps to parsed elements and implementedModel.elementFacts. Stop and asphere-rim claims map to implementedModel.aperture and geometry. Each copied token is explicitly checked with declared rounding in analysis-numerical-claims.
Manual review: patent paragraph references support stated architecture and the cited whole-design rationale; individual element paragraphs avoid unsupported aberration allocations. Product correlation remains qualified. Glass candidate examples agree with captured primary catalog coordinates, with supplier and spectral limits explicit. Focus, inferred aperture, no-scaling, published stop and asphere convention disclosures are consistent with final data. Conventional primary URLs and one-based PDF locators are usable outside the conversation.

## Disposition
READY_FOR_AUDIT. No implied integration or Stage 4 approval. The clean extraction replay must retain the same numerical content and expected exit status.

# Stage 4 source-first independent review

## Authority, exposure and baseline integrity
Current field/schema authority: project commit 5c25e4289c6e090eb44177e907d901dfe3cef76c. Workflow: CHAT-1.0 protocol, dossier contract and actual Stage 4 prompt. The preceding author sections are the historical input record, not the independent approval. The Stage 3 sentence “no-scaling” is a stale audit phrase: this lens explicitly and consistently uses uniform s=12, as its transformation ledger and final analysis state.

The reviewer first read the canonical card and actual source, re-entered the selected Table 1/2 numerical rows from rendered pages, established conventions, wrote fresh reduced-angle sequential and separate physical-angle ABCD paths, and independently parsed all six raw vendor catalog families. This baseline froze at 2026-10-03 16:21 UTC with fingerprint `cff39b4ded9d466b984268e2de9ce649a570e40f35cbcfe6ce97b97a2db84d64`. Candidate exposure began at 16:56 UTC, after the unrelated Ultron reconciliation. Baseline bytes remain intact. Evidence preserves exact frozen inputs, results, audit, glass excerpts and catalog-scan code; the consolidated verifier embeds the original fresh numerical program and replays it separately. The post-exposure geometry/ray harness shares the reviewer's generic Ultron code and is not claimed blind. No cryptographic blindness claim is made.

Candidate archive SHA-256: `41b1f889263b21d9ad1204220e68de0b1d0204ad851d087077e5dcc14db58ee1`. Candidate and final unchanged data SHA-256: `ad2b57405fbd4f8695def6c6713a5513a64bc7b2a9788c25563fba1027ce2615`.

## Four-view reconciliation and source transformations
All 19 source optical/stop rows reproduce the final TypeScript after multiplying source R/d by 12; the source final gap 1.130 remains 13.56 mm rather than being replaced by a recomputed image plane. Source asphere 19 maps to 19A, K=0 unchanged and A_p/12^(p−1). No coordinate, sign, exponent, index, cemented junction or stop position changed. The source image plane is the endpoint after the final gap, not an omitted refracting surface. Exactly one STO, ten physical elements, eight air-separated groups, four functional groups and two cemented pairs agree with source and analysis. No rear plate or finite-focus motion is invented.

Native first-order results are EFL 0.998104728785513 and BFD 1.13098988874506; scaled results are 11.9772567454262 mm and 13.5718786649407 mm. Native Petzval 0.110168561517620 becomes 0.0091807134598017 mm⁻¹. Independent standalone/group powers, both principal planes, pupil mappings and all native source conditions agree. f2/f=1.06370603059258, |f12|/f=0.872603542712911 and BFD/f=1.13313749161497 satisfy their strict source bounds. The distinction between first two negative lenses and all three G1 components is checked. BFD>EFL supports retrofocus; TL/EFL>1 does not support telephoto. Printed normalization and coarse source-rounding residuals remain visible, with no scaling by computed EFL.

## Corrections and discrepancy register
- No numerical/data-file correction was required.
- The frozen reviewer metadata contains the spelling “Yoshihisa Yomoigida.” A fresh visual reread of the actual PAJ cover (PDF p1) reads YOMOGIDA YOSHIHISA; candidate “Yoshihisa Yomogida” is correct. This is recorded as a separate post-freeze annotation. Frozen inputs/results were not rewritten.
- Final analysis clarifies that generic N/ν source headings are interpreted at d using Figure 2 d/g references and matching catalog coordinates. No wavelength conversion is claimed.
- Current buildLens recalibrates the authored paraxial stop radius 1.801254309 mm to runtime exact radius 1.8082902608185651 mm from the nominal entrance-pupil edge. Fresh exact angular-Snell code reproduces the runtime value within 1e-8 mm. Analysis records both dependent calibrations and does not imply a measured source iris.
- Actual format audit stops at the explicit source/manufacturer-derived 60.5° field, reaching 20.6931454286 mm, 95.5803484% of 21.65 mm. The corner chief at 61.5813935651° clears all rims but is outside the declared field. The diagnostic is “declared,” not “clip/blocked”; the image-circle floor reports zero undersized surfaces. Source Figure 2 marks 60.65°, and manufacturer documentation says 121° full field. The narrower angular prescription is retained and disclosed, without widening the field, resizing apertures, changing scale, or claiming an exact manufactured prescription/full-format image circle. This is a supported bounded model limitation, not a validator failure relabeled integration-only.
- Final source citation now says canonical recovered PDF. The lost original download bytes and original per-card byte identity are not claimed verified; existing recovery records remain unchanged.
- Initial reviewer Newton-only wide-angle ray iteration left the sphere domain. The reviewer implemented exact sphere roots with physical-sheet selection and a physically valid chief-ray bracket, keeping the original polynomial equation for the asphere. This was a numerical harness limitation, not evidence to alter a source radius or aperture.

All changed prose/evidence dependencies were rerun through the inherited Stage 1–3 checks plus the new independent Stage 4 checks on the exact final files.

## Geometry, pupils, rays and actual application checks
The reviewer independently evaluates actual profiles and derivatives on 1025-radius grids with additional derivative-root extrema. Minimum element thickness is 0.960000000 mm; the maximum actual rim angle is 63.9664102054°, below the current default. Asphere 19A rim slope angle is 20.8975427803°, with positive conic domain 0.3562976134 at sd=7.5 mm. Every shared-band gap passes, including the close front 4→5 gap (maximum intrusion 3.77284660447 mm versus limit 3.888 mm). No legacy universal sd/R cap or obsolete 1.25 aperture ratio was imposed.

Fresh exact angular-Snell and physical-profile intersections confirm actual default axial fractions ±0.83, ±0.50, ±0.17 and off-axis ±0.75, ±0.375, 0 at fields 0%,30%,60%,100% of 60.5° across all five authored f-stops. Both stored-stop and runtime-stop versions pass all 105 independent static rays. The real project executes 315 rays across focusT=0,0.5,1, with no clipping. Additional focus samples 0.25/0.75 show identical axial coordinates, consistent with NO_INTERNAL_RECONSTRUCTION. No finite focusing law or magnification is fabricated.

Actual current validateLensData and buildLens pass. All real state-native render diagnostics show zero trim. Targeted image-circle and field-coverage scripts were run against only this explicit file. Runtime C/d/F/g resolution was inspected for every element; proxies are J-LASF016 (L1/L2), J-SF6, J-SF03, H-K9L, N-FK5, NBFD10, SF1, E-F2 and N-SK5. Each passes native-coordinate tolerances, without identifying a supplier/melt. Independent broad catalog residuals and relevant coefficient round-trips reproduce from original-vendor excerpts. OHARA S/L families remain separate.

The actual patent Fig. 1 and Cosina L-S-wide PDF p1 were visually reread; topology, first negative-meniscus steps/bevels, both rear cemented groups and final image-side asphere agree. Source drawings support inferred optical clear-radius proportions, not precise manufactured diameters. Current source F/5.66, marketed F/5.6, normalized focal length and 12 mm marketing remain separate.

## Quantitative-claim map and interpretive review
- Metadata and original variant: source cover plus primary manufacturer page/PDF; the reviewer spelling correction is separately annotated.
- Element n/ν/classes/f: parsed elements, implementedModel.elementFacts and independentBaseline.recomputed.elements with scale=12.
- Architecture EFL/BFD/track/principal planes/Petzval: implementedModel and independent baseline sourceModel with declared dimensional transforms.
- G1–G4 powers and condition ratios: implementedModel.functionalGroups and independentBaseline.recomputed.functionalGroups/conditions. All eight air-separated groups are separately retained.
- Source and transformed asphere coefficients: independentPass.inputs.aspheres, independent-dimensional-scaling and actual asph object. Rim departure/total sag: implementedModel.geometry at actual stored sd=7.5 mm.
- Both stop conventions: implementedModel.aperture and runtime-stop-calibration. They are calibrations, not independent f-number validation.
- Default/optional rays and focus samples: independentReview.exactRayChecks plus actual projectExecutionRecord.rays/states.
- Declared angle, 20.693145 mm height, 95.580% coverage and clear corner at 61.581394°: fieldCoverageAudit and source/manufacturer citations. Every printed field number is checked against that executed record.
Manual prose review finds no unsupported manufacturing/APO/supplier claims, no unverified unit-focus law, and no conflation of standalone and cemented/in-situ power. Paragraph locators support design rationale without claiming an element-isolated aberration budget. Source citation pages and public manufacturer links are correct.

## Replay and gate disposition
Portable command: `python <stem>.verify.py --package-dir <extracted-directory> --output <external-results.json>`. It uses Python standard library only and includes the exact independent source-first calculation. Optional current-project command: `node --import <runtime>/scripts/ts-js-specifier-hook-register.mjs <stem>.runtime.mjs <data.ts> <external-runtime.json> <runtime-root>`. Targeted field/image-circle script commands and bound results are also recorded; portable Python replay does not pretend to re-execute those project dependencies.

READY_FOR_BATCH is earned only with the final manifest/inventory/hash and clean-extraction replay checks. This is pre-integration; integrationStatus stays INTEGRATION_PENDING. Actual applicable project checks passed. Typecheck, Prettier, corpus tests and full build remain NOT_RUN at integration, with no metadata generation, integration, Git writes, publication or uploads performed. Source precision, unknown manufacturing apertures, finite meridional sampling, spectral proxies and unconfirmed exact production attribution remain explicit limitations.


## Stage 4 metadata correction

The current NOT_RUN integration-check reason incorrectly said no authored model existed at Stage 1. It now states the actual pre-integration toolchain/corpus/build status and distinguishes already-executed targeted real checks. This changes explanatory metadata only; data, analysis, primary sources, optical results, runtime records and frozen baseline remain unchanged. The original final dossier/ZIP is preserved. Original ZIP SHA256: 22de63e39a4893d10708ab5497949b31062ddd4e1e639d9b29ff0a70eb54c6ee. The final verifier and bound results/manifest are rebuilt and clean-replayed for this replacement.

## 2026-10-08 — Deployment validation against patent and maker diagram

Independent re-read of JP 2001-124985 A Example 1 from page images: 19 surface rows times the factor 12, ten glass pairs and the surface 19 asphere (A through D divided by 12 to the powers 3, 5, 7 and 9) agree. Engine f 11.977 mm against the normalized 1.00, inside the rounding of a three-decimal table. The rendered section matches Cosina's diagram: 10 elements in 8 groups with the asphere on the last surface.

No data change at deployment.

## 2026-10-08 — Semi-diameter pass against the patent figure and maker diagram

Source: JP 2001-124985 A, PDF page 11 (printed page 10), 【図1】, the lens section of Example 1, optical axis
horizontal. The sheet is a 200 dpi bilevel raster; it was read at native resolution and at 400 dpi. Secondary
reference: the Cosina construction diagram for the 12mm F5.6 Aspherical (a 190 × 113 px copy), used for count,
grouping and coarse proportions only.

Scale. Vertex crossings on the axis at 400 dpi: surface 1 at x = 918.5 px, surface 19 at 1760.5 px, image plane at
2010.5 px. First to last vertex is 842 px for 46.56 mm (0.05530 mm/px); first vertex to image plane is 1092 px for
60.12 mm (0.05505 mm/px). The two spans agree to 0.4 %, and all 19 drawn vertices sit within 0.18 mm of the ×12
prescription, so the figure is drawn to the modeled example's axial scale. Heights use 0.0553 mm/px; one native
pixel is 0.11 mm, so a reading carries about ±0.15 mm. Rim heights are half the distance between the upper and lower
flat rim lines; the extent of a concave that ends in a flat annulus is the height where the annulus line starts,
cross-checked against the sag of the prescription sphere at the annulus position.

| Surface | Before | Figure reading (mm) | After | Evidence and decision |
|---|---:|---|---:|---|
| 1 | 17 | 17.4 (rim lines 630 px apart) | 17 | Within 3 %; retained. |
| 2 | 11.3 | 11.5–11.7 (concave meets L1's rear annulus) | 11.3 | Held at the rim-slope limit 0.9·R = 11.32; retained. |
| 3 | 10.9 | 12.6 (front face runs to the corner of the L2 block; rim lines 455 px apart) | 10.9 | Not admitted: the 2→3 gap check reports 6.06 mm of sag against 5.94 mm allowed at h = 11.3. The largest admitted value is 11.2, a 3 % step inside reading noise; retained. See limitations. |
| 4 | 8.5 | 8.9–9.05 (concave meets L2's rear annulus) | 8.5 | At the 4→5 cross-gap limit (8.6 is rejected); retained. The prescription sphere meets L3's front at h ≈ 8.9, which is where the figure starts the annulus. |
| 5, 6 | 10 | 9.7 | 10 | Within 3 %; retained. |
| 7 | 6.5 | 8.05 (front convex runs to L4's flat top; rim lines 291 px apart) | 8 | Figure, +23 %. |
| 8 | 6.5 | 6.55–6.75 (concave meets L4's rear annulus) | 6.5 | Within 3 %; retained. L4 is drawn stepped, so its faces are sized separately. |
| 9, 10 | 6 | 6.9 (both curves reach L5's flat top; rim lines 249 px apart) | 6.9 | Figure, +15 %; square-cut, one height on both faces. |
| 11, 12 | 4.8 | 5.1 | 4.8 | +6 %, inside reading noise; retained. |
| 14, 15 | 4.2 | 4.2–4.3 | 4.2 | Agree; retained. |
| 16 | 4.2 | 4.9 (L8 rim lines 176 px apart; L8 stands 0.65 mm proud of L7) | 4.9 | Figure, +17 %. The cemented junction keeps L7's height. |
| 17 | 7.5 | 4.7 (L9's flat front annulus starts 84.75 px from the axis; sphere-sag cross-check 4.75) | 4.7 | Figure, −37 %: the concave is a shallow dimple in a flat face, not a bowl around the L7–L8 doublet. |
| 18, 19A | 7.5 | 8.25 (block rim lines 298.5 px apart; the aspheric flank is drawn to the block corner) | 8.2 | Figure, +9 to +10 %; cemented pair kept at one height, and it keeps the drawn order of the rear block standing level with L4. |

Seven surfaces changed (7, 9, 10, 16, 17, 18, 19A); the stop was not touched.

Maker diagram. Cosina's section shows the same 10 elements in 8 groups: six singlets, then the cemented pairs
L7+L8 and L9+L10, with the only marked special surface the aspheric (非球面) rear face of the last element, L10.
No special-glass element is marked. Element heights relative to L1, read pixel by pixel from the small copy (L1
is 26.5 px tall), are L2 0.74, L3 0.58, L4 0.49, L5 0.41, L6 0.28, L7 0.25, L8 0.28 and L9/L10 0.47; the patent
figure gives 0.72, 0.56, 0.46, 0.40, 0.29, 0.24, 0.28 and 0.47. The two drawings agree within the maker copy's
resolution (about ±0.04), including L8 standing one pixel taller than L7, the L9/L10 block standing level with L4
and above L5, and L9 drawn as a flat-fronted block. No tie had to be broken and no disagreement was found.

Clearance, by exact meridional trace at f/5.66 with the stop filled (stop radius 1.808 mm). The axial marginal ray
stays below 2.12 mm on every surface. At the declared 60.5° field the chief ray and the outer rim ray reach, on the
changed surfaces: surface 7, 5.66 and 7.10 mm against 8; surface 9, 4.27 and 5.98 against 6.9; surface 10, 2.73 and
5.24 against 6.9; surface 16, 3.02 and 4.17 against 4.9; surface 17, 3.71 and 4.47 against 4.7; surface 18, 5.09 and
6.01 against 8.2; surface 19A, 6.69 and 7.32 against 8.2. No surface clips the axial beam or blocks the chief ray.
The stop-filling meridional bundle passing at 60.5° is 73.8 % before and after, cut by surface 2 at its rim-slope
limit. At 55° and 58° it was 93.8 % and 85.8 %, cut by surface 7 at 6.5 mm, and is now 100 %; that follows from
drawing L4's front as the figure does, not from a clearance target. The application's own vignetting curve is
unchanged: geometric transmission 97–98 % and relative illumination 5.7–5.8 % (about −4.1 EV) at the 60.5° edge.
Engine focal length 11.977 mm, f/5.66, runtime stop radius 1.80829 mm, declared half-field 60.5° and tracing
half-field 40.98° are the same before and after. Field coverage still reaches 20.69 mm of 21.65 mm at 60.5° with
the corner chief ray at 61.6° clear, the image-circle floor reports no undersized surface, the validator reports no
error, and the render diagnostics report no trim. Minimum element thickness stays 0.96 mm (L8 centre); the new rim
thicknesses are 1.83 mm on L5 and 1.66 mm on L10.

Asphere 19A at the new rim. At 8.2 mm the departure from the base sphere is 2.217327288 mm and the total sag
−2.642342956 mm (previously 1.373213385 mm and −2.394902745 mm at 7.5 mm); the rim slope angle is 18.80° and the
conic domain term 0.2305. A scan to 9.2 mm shows no slope sign change; the slope magnitude has a local minimum near
8.1 mm, which matches the nearly straight flank the figure draws. The analysis file's aspheric paragraph was updated
to these values.

Open limitations.

- The front of L2 (surface 3) stays 1.7 mm below the 12.6 mm block that both drawings show. The figure draws L2's
  front rim seated on L1's rear annulus, and the surfaces do not cross (0.54 mm apart at h = 11.3), but the default
  cross-gap fraction refuses it. A per-lens `gapSagFrac` of 0.92 admits 12.6 (0.91 does not) with no change to the
  traced bundle; that field is outside this pass, which changed semi-diameters only. Applied the same day: see the
  integration section below.
- Surface 2 cannot reach the drawn 11.5–11.7 mm inside the rim-slope limit, and surface 4 cannot reach 8.9 mm inside
  the cross-gap limit, so L1's and L2's rear concaves stay 2–5 % short of the drawing.
- The renderer joins unequal front and rear rims with a straight edge. L1, L2, L4, L8 and L9 are drawn in the patent
  with a flat top and a flat annulus; they render with a slanted edge instead, most visibly L9, which shows as a
  truncated cone rather than a flat-fronted block.
- The zone of surface 19A between 7.32 mm and 8.2 mm is drawn glass that no traced ray uses.

Live check. The local page was rendered before and after each rim edit and compared with 【図1】: the staircase of
heights from L4 back to L6, the taller L8, the rear block level with L4 and the doublet standing in front of L9
now follow the figure. The lens has no focus or zoom states, so one section covers the model.

## 2026-10-08 — Integration: front rim and metadata

- Surface 3 (L2 front) raised from 10.9 mm to the 12.6 mm blank that FIG. 1 and the Cosina section both draw, with `gapSagFrac` 0.92, the smallest two-decimal limit that admits it (combined sag 6.06 mm of the 6.60 mm gap; the faces stay 0.54 mm apart). Engine focal length, f-number and the 60.5° half-field are unchanged, and the validator and image-circle audits report no error. L2 now renders at about three quarters of L1's height, as drawn.
- `specs` restated in the catalog form (design f = 11.98 mm, design F/5.66, 2ω = 121°, one aspherical surface on one element, infinity prescription only); `apertureBlades` 9 added; the subtitle states the ×12 scale.
- Glass labels reviewed and left as authored: the patent prints νd to one decimal, so the six-digit code labels are the honest form, and all ten resolve to catalog curves. Neither drawing marks a special glass, so no `apd` tag is set.
- Display name, mount (`leica-ltm`) and format reviewed and left as authored. The focus control reads "Not modeled" for this infinity-only prescription.

## 2026-10-08 — Second review: diagram, labels and movement

Compared: the local lens page (section at infinity and with the focus parameter forced to its far end, both movement
overlays, the inspector of elements 1, 6, 9 and 10) against JP 2001-124985 A 【図1】 (PDF page 11), the claim and
¶0010–0012 (PDF pages 3–4), Table 1 and Table 2 (PDF page 5), the front page, and the 190 × 113 px copy of Cosina's
section. The figure was re-measured independently at its native 200 dpi; the first pass's readings were not reused.

Element names. Sections above this one use the sequential names L1–L10. The patent gives reference numerals, not
letters, so the elements now carry them: L1–L3 are L11, L12, L13 (first lens group 10), L4–L6 are L21, L22, L23
(second lens group 20), L7–L8 are L31, L32 (third lens group 30) and L9–L10 are L41, L42 (fourth lens group 40).
The rest of this section uses the new names.

Figure scale. Axis at row 917.5. Vertex columns: surface 1 at 458.5, surface 19 at 881, image plane at 1005.5, so
422.5 px for 46.56 mm (0.1102 mm/px) and 547 px for 60.12 mm (0.1099 mm/px); 0.110 mm/px is used and one pixel is
0.11 mm. Rim heights are half the distance between an element's upper and lower flat rim lines.

| Element | Rim lines apart (px) | Figure (mm) | Stored before | Now |
|---|---:|---:|---|---|
| L11 | 316 | 17.38 | 17 front | 17 |
| L12 | 229 | 12.60 | 12.6 front | 12.6 |
| L13 | 176.5 | 9.71 | 10 | 10 |
| L21 | 146.5 | 8.06 | 8 front | 8 |
| L22 | 125.5 | 6.90 | 6.9 | 6.9 |
| L23 | 93 | 5.12 | 4.8 | 5.1 |
| L31 | 77.5 | 4.26 | 4.2 | 4.2 |
| L32 | 89 | 4.90 | 4.9 rear | 4.9 |
| L41 + L42 | 150 | 8.25 | 8.2 | 8.2 |

Curve ends, each read where the concave leaves the flat annulus line and cross-checked by the sag of the prescription
sphere at the annulus position: surface 2 at 11.5 and 11.55 mm (stored 11.3, rim-slope limit), surface 4 at 8.7 and
9.0 mm (stored 8.5, cross-gap limit), surface 8 at 6.77 and 6.62 mm (stored 6.5), surface 17 at 4.79 and 4.82 mm.

Changes to semi-diameters.

| Surface | Before | After | Evidence |
|---|---:|---:|---|
| 11, 12 (L23) | 4.8 | 5.1 | The figure draws L23 at 5.12 mm, 2 px a side taller than L32 (4.90 mm); at 4.8 it rendered 0.1 mm shorter than L32, reversing the drawn order across the stop. Square-cut, one height on both faces; rim thickness 1.81 mm against about 2.0 mm drawn. The full-field bundle reaches 4.29 and 3.26 mm here, so nothing traced changes. |
| 17 (L41 front) | 4.7 | 5.2 | See below. |

Surface 17. The figure ends L41's concave at 4.8 mm, level with L32's top corner, and continues the face as a flat
annulus 1.43 mm ahead of the vertex out to the 8.25 mm rim: a flat-fronted block. The outline joins the front and
rear rim of an element with one straight edge, so any value below the 8.2 mm rear rim renders a truncated cone and
no value renders the block. The trial renders were 4.7, 4.9, 5.2, 6.0, 6.5 and 7.5 mm, all accepted by the validator
(8.2 is refused for rim slope). L32's rear rim lies 1.704 mm ahead of vertex 17; the sag of surface 17 is 1.693 mm
at 5.2 and 1.767 mm at 5.3, so 5.2 is the largest value whose front rim does not pass in front of the doublet.
At 6.0 the rim stands 0.65 mm ahead of L32's rear rim and at 7.5 it wraps the whole doublet. Against the drawn
outline, the area between the rendered and drawn half-section of L41 falls from 4.85 mm² at 4.7 to 3.80 mm² at
5.2 (3.05 mm² at 6.0, 4.21 mm² at 7.5), the front face grows from 9.4 to 10.4 mm of the drawn 16.5 mm, and the
edge slants 46° from the axis in place of 54°. The cost is a concave drawn 0.4 mm taller than the figure's. The full-field bundle reaches
4.47 mm on this surface, so the change is to the picture only.

Clearance and engine values, before and after: focal length 11.977 mm, f/5.66, runtime stop radius 1.80829 mm,
declared half-field 60.5°, tracing half-field 40.98°; meridional stop-filling bundle 100 % at 30°, 45°, 55° and 58°
and 73.8 % at 60.5°, cut by surface 2; the application's vignetting curve is identical at all 22 field samples
(96.9 % geometric transmission and 5.7 % relative illumination at 60.5°). The validator reports no error, the
image-circle floor reports no undersized surface, and field coverage still reaches 20.69 mm of 21.65 mm at 60.5°.
No surface clips the axial beam or blocks the chief ray. The stop and surface 3 with its `gapSagFrac` were not
touched.

Labels changed.

- Elements: `name` L11 … L42, `diagramLabel` 11 … 42 (the diagram now prints the numerals of 【図1】), `label`
  Element 11 … Element 42, and a `role` for each stating its place in the patent's groups and, where one applies,
  the condition it enters. f12 = −10.45 mm and the group focal lengths −21.53, +12.74, −58.24 and +123.34 mm quoted
  in the roles were recomputed paraxially.
- Group brackets: G1 (−), G2 (+), G3 (−), G4 (+). G1–G4 abbreviate the patent's first to fourth lens groups 10–40;
  the signs are the claimed negative, positive, negative, positive powers and agree with the computed focal lengths.
- `focusDescription` rewritten in plain words; it began with the internal status token.

Checked and found correct.

- Bracket ranges against Table 1's row blocks and 【図1】: 10 = surfaces 1–6 (lenses 11, 12, 13), 20 = 7–12 (21, 22,
  23), 30 = 14–16 (31, 32), 40 = 17–19 (41, 42). Stop 50 is table row 13, drawn between lenses 23 and 31.
- Cemented brackets D1 (surfaces 14–16) and D2 (17–19A): ¶0012 states that 31 and 32, and 41 and 42, are cemented.
- Element types against the signs of R and ¶0012: 11 and 12 negative menisci convex to the object, 13 biconvex,
  21 negative meniscus convex to the object, 22 and 23 biconvex, 31 positive meniscus concave to the object,
  32 negative meniscus concave to the object, 41 biconcave (R = −8.832 and +1759.704), 42 biconvex.
- Aspheric marker: Table 1 stars only surface 19 and ¶0012 names surface 42b; only 19A carries the suffix and an
  `asph` entry. Table 2 gives K = 0 and A through D as stored after the ×12 scaling.
- All 19 radii and spacings of Table 1 times 12, and the ten index and Abbe pairs, re-read from the page image.
- No `apd` tag: neither the patent text nor Cosina's section designates a special glass.
- Front page: publication 2001-124985 A of 11 May 2001, application 11-307371 filed 28 October 1999, applicant
  Cosina Co Ltd, inventor Yomogida Yoshihisa; the file's patent fields agree.
- Movement: the patent publishes one infinity prescription, `var` and `varLabels` are empty, the focus control
  reads "Not modeled", and both movement overlays state that the lens has no modeled focus or zoom group movement.
  The section with the focus parameter forced to 1 is identical to the infinity section.

Maker diagram. Heights relative to L11 (26.5 px), read from the pixels: L12 0.74, L13 0.58, L21 0.49, L22 0.40,
L23 0.28, L31 0.25, L32 0.28, L41 + L42 0.47; the patent figure gives 0.72, 0.56, 0.46, 0.40, 0.29, 0.24, 0.28 and
0.47. Cosina draws L23 and L32 the same height to the pixel where the patent draws L23 0.2 mm taller; one maker
pixel is 0.65 mm, so the patent figure decides. Cosina also draws L41 as a flat-fronted block and marks only the
rear surface of L42 (非球面).

Open limitations.

- L41 still renders as a truncated cone. Drawing the block needs an outline with a flat annulus, which the element
  outline does not have; no semi-diameter supplies it.
- L11, L12, L21 and L32 are likewise drawn with a flat top and a flat annulus and render with a slanted edge.
  Surface 2 is at its rim-slope limit and surface 4 at its cross-gap limit.
- With `?focus=1` in the address the focus readout prints the infinity sentinel as "1000000000000000 m". The
  slider cannot be moved to that state by hand; the readout belongs to the application, not to this file.
- The element names L31–L42 sit beside the product name's mount designation L39, which is not an element.
