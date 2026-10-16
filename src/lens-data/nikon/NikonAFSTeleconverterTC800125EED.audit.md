# TC800-1.25E ED production audit

## Disposition and governing sources
The selected design is JP2013250290A Example 1, correlated with the Nikon AF-S TELECONVERTER TC800-1.25E ED. CHAT-1.0 September 11 controls the dossier. Current LensVisualizer main e1bd097c2d95de9468a184d061d7a0b433656653 was freshly verified at 16:48 UTC on 13 October 2026. This is a source-correlated data package ready for integration, with full repository integration gates still NOT_RUN (closed: integrated 2026-10-14, see the last section). It is not certification of factory optics or an enrollment of any catalog host.

## Original extraction and exact source transformations
The unchanged 26-page Japanese publication and four-field job card are included. Original page 1 identifies Akiko Furuta, Nikon Corporation, filing 30 May 2012 and publication 12 December 2013. Table 1, pages 9–10, specifies the 46-surface combined system. The 38-surface master contains its physical stop at source 22 and plane filter at 31–32. Converter source surfaces 39–46 become local labels 1–8. Five spherical elements form three air-separated groups, with the central negative–positive–negative cemented triplet. No aspheric coefficients, internal motion laws, optical rescale or source-summary repair are added.

The standalone hidden source master replaces only its final image distance with its independently calculated native air back focus, 52.854075228 mm. All other source radii, spacings, nd/vd and glass/material ownership remain source-faithful. Plane infinity uses the project's 1e15 mm sentinel. Subtracting the literal 4.0708 mm source junction gives converter masterImageDistanceMm 48.783275228. The converter's final image gap remains the printed 42.27895 mm.

The native master is 779.998096604 mm by literal-table calculation, versus printed 780.00037 mm; combined EFL is 975.013227500 mm versus 975.01926 mm; combined BFD is 42.278324291 mm versus 42.27895 mm. These small residuals remain explicit. Summed half-last-digit sensitivities are local estimates, not rigorous intervals or recovered unrounded values. Neither the marketed 800 mm master nor marketed 1000 mm combination is used as a rescale target. Group powers, finite-thickness element powers, Petzval and all three conditions are independently recomputed from the original prescription.

## Physical rims and stop
All converter semi-diameters are inferred 16 mm modeling rims. Minimum sampled edge thickness is 0.496293324 mm in the positive middle member. Its spherical zero-edge boundary is about 16.5291 mm. Maximum actual-rim angle is 24.690841650 degrees. The two converter air gaps retain positive clearances and zero positive sag intrusion; no converter override is needed. Real renderer diagnostics trim no surface.

The source specifies F/5.65772 but does not give a stop diameter. The exact-ray entrance pupil is 68.932193234 mm in semi-diameter and calibrates source stop 22 to 14.9399454155 mm. The paraxial estimate 14.819236679 mm is separately reported. This calibration is not independent diaphragm measurement. Attachment preserves the physical stop exactly and yields F/7.072263204.

Only the validation master needs gapSagFrac 0.94. Source surface 14 requires axial radius 22.306858514 mm, already implying gap 13–14 intrusion 0.933261696. The chosen 22.35 mm rim gives 0.936902550 and positive physical clearance 0.195286608 mm. The 0.93 stage fails and 0.94 passes; a 21.9 mm alternative meets default geometry but clips the required axial ray. Independent 14 mm rims at source 23–24 avoid a second override. The related catalog 800 mm lens's 0.98 exception is not transferred, nor is the MC14 limited-host exception.

The actual pinned application runs all three validators, composition, buildLens, 27 render elements and 485 exact rays over five field fractions. All 97 axial samples and all five chief rays pass. At the printed +/-1.26263-degree field the chief reaches +/-21.633037241 mm, covering source Y=21.633 mm. Eighty outer-field pupil rays clip. A separate independent 1,015-ray review records 839 transmitted and 176 clipped rays, with zero backward segments among transmitted rays, all axial/chief coverage intact. Mathematical backward intersections in unbounded source-only outer rays are excluded from clear-aperture requirements. No unvignetted-field or finite-focus claim is made.

## Glass and spectral qualifications
All 17 distinct native coordinates were scanned against original OHARA, HOYA, SCHOTT, HIKARI, CDGM and SUMITA sources. The parser sees 3,179 records including overlapping workbook/AGF entries. Independent reconciliation gives 2,174 vendor/name identities after case/spacing normalization and two coefficient-verified SCHOTT aliases. Relevant original cells, line numbers, coefficients, residuals and alternative candidates remain available.

The runtime converter resolves J-LF5, J-PSKH1, J-LF5, unresolved and J-KF6 respectively. J-LASFH9A remains a coordinate-class candidate for L23 but is absent from the pinned compatible spectral resolver. Supplier, melt and historical use are unproven. Authored optical coordinates and default monochromatic tracing preserve native d-line indices. The application's chromatic G channel uses selected catalog d-line values, while its arbitrary-wavelength path separately anchors compatible dispersion to the authored reference. The final analysis corrects an earlier overly broad statement that spectral curves never replace d-line values. No optical data changed for that prose correction.

## Independent audit, historical gaps and final controls
Pass A was frozen before any candidate exposure. Its fingerprint ff6ac3ca54e67b622cf8da618bf06c53531b1f966bb4e34cc860ee5143fafb55 binds the seven-file source-only checkpoint and 30 governing workflow/reference records. The exact frozen independent verifier is preserved and freshly reruns its 22 checks from reconstructed immutable inputs during each final verification. Source surfaces and computed results are compared with the actual parsed converter and master.

Pass B independently accepted the original optical numbers with 27 checks, 4,001-point geometry and 1,015 rays. Its Stage 3 review fingerprint is 57dc596a667ec291891756d3c004402d4512ed35cdef4ccb6171b8e60d435810. Stage 3 had 45 portable and nine real-runtime checks, but those historical checks did not enforce every master property, runtime array shape/computed value, or final manifest binding. Completed historical regression records demonstrate those limitations; they are retained without rewriting the earlier archives or claiming they were already covered.

The final verifier pins the approved converter, source master, analysis and executed runtime bytes. It additionally forbids unsourced master aspheres/state laws, checks material ownership, requires all 485 rays/five chiefs/27 render records, derives checks from their actual records, compares runtime EFL/F-number/track with freshly recomputed source quantities, and binds every canonical member plus the governing reference inventory. Required files, frozen independent code and all mandatory runtime booleans are checked separately. The manifest self-entry omits its own hash; every other canonical member has a byte count and SHA-256. There is no optional bypass for these controls.

One supplemental worker's attempted final-preview regression was stopped by a platform content flag. It was not retried or reproduced by another route. Its exact notification is preserved separately. Final byte-identity/invariant code was independently inspected, but that particular fresh-runtime asphere/focus-law regression remains NOT_RUN against the final preview. This distinction does not alter the positive optical results or the other completed negative fixtures.

## Replay, lineage and limits
The manifest records all three original stage ZIP hashes, source-first fingerprint and Stage 3 review fingerprint. Clean extraction checks ZIP CRC, all 14 members and their hashes, reruns the portable verifier, and independently reruns the real application runner with byte-identical outputs. The support archive contains source originals, catalogs, all controlling references/workflow, pinned runtime sources, source-first and later reviews, stage ZIPs and completed fixture reports.

Full TypeScript compiler, formatter, lint, corpus sweep, host enrollment/exclusion sweep, metadata, UI, production build and SEO checks are NOT_RUN (closed: run at repository integration). Nikon specifies this converter solely for its AF-S NIKKOR 800mm f/5.6E FL ED VR. Shared Nikon F mount does not imply physical compatibility. The existing catalog lens is based on related JP2013250293A with different precision, spacings and finite-focus states; it is not substituted or enrolled here (superseded: its infinity master matches Table 1 at printed precision, and it now declares acceptsTeleconverters). No repository change or deployment is part of this delivery.

## Quantitative and interpretive claim map
Architecture, placement, source residuals, group powers, conditions and Petzval map to results.sourceModel and the unchanged independentBaseline. Element values map to actual parsed teleconverter bytes and raw source 39–46. Rim, edge and gap statements map to implementedModel.geometry and the denser independent geometry audit. Stop calibration, physical stop preservation, F-number, rays and zero trim map to the executed runtime records, not only stored booleans. Glass claims map to evidence.glassEvidence, original catalogs and actual runtime.glassResolution. Bibliographic and commercial claims map to original page 1 and the cited Nikon primary pages. The source paragraph interpretations and spectral/factory-identity qualifications were reviewed manually; prose string checks are supplemental consistency checks only.

## 2026-10-14 — Deployment validation and wording pass

Source re-read: page 1 (JP 2013-250290 A, published 2013-12-12, filed 2012-05-30, inventor Akiko Furuta, applicant Nikon) matches the patent fields. All 8 converter rows of Table 1 (surfaces 39–46: R, d, nd, νd) were checked against the text layer and a 200 dpi image of page 10; no mismatches. Example 1 has no aspheres and no variable gaps.

First-order, from an independent master + converter table: master f = 779.998 mm (printed 780.00037), back focus in air 52.8541 mm; combined f = 975.013 mm (printed 975.01926), back focus 42.2783 mm (printed 42.27895), ratio 1.25002. masterImageDistanceMm = 52.8541 − 4.0708 = 48.7833 mm, as authored. Converter fc = −181.645 mm (printed −181.64441); f2 = −36.577 mm, f2/fc = 0.2014 (printed 0.201), f3/(−f2) = 2.7488 (printed 2.749). With the stop set for F/5.65772 the combination traces to about F/7.072 (printed 7.07229).

Catalog host: the AF-S NIKKOR 800mm f/5.6E FL ED VR (JP 2013-250293 A) prints the same master radii and spacings as Table 1, with indices rounded to five decimals. tcprobe on that host: EFL 779.92 → 974.79 mm, F/5.658 → F/7.0717, junction gap 4.07 mm, no axial clip, corner coverage 100 % mounted and bare. The host now declares acceptsTeleconverters. Its F/5.658 clears minHostFno 5.65772 by 0.0003.

Maker diagram: Nikon's TC800-1.25E ED construction image (pic_004.jpg on the 800mm product page) shows 5 elements / 3 groups with the second element, a biconcave negative, marked ED. In Example 1 that is L21 (1.59319/67.96, the converter's only high-Abbe glass). Example 4 of the same patent is also 5/3, but its low-dispersion glass is the rear element, so Example 1 remains the better fit.

Fields changed in this pass: header comment rewritten in plain terms with run-together numbers fixed (all facts kept; the package's validation-master notes dropped); subtitle "JP2013250290A EXAMPLE1 — PUBLISHED-DESIGN CORRELATION" → "JP 2013-250290 A, Example 1 — production correlation"; specs "1.25×; DEDICATED800mm HOST" and "INFINITY-ONLY SOURCE VALIDATION; INFERRED RIMS" → "1.25× REAR CONVERTER" and "ALL SPHERICAL"; element labels "Source L11…L31" → "Element 1…5"; diagramLabel removed; roles rewritten; glass strings "(catalog-coordinate proxy; supplier unproven)" → "(supplier unconfirmed)", with glass resolution unchanged (checked with trylabel); L21 tagged apd "inferred" with an apdNote citing Nikon's diagram (J-PSKH1 curve θgF ≈ 0.544, above the normal line); cemented "T1" on L21–L23 and the triplet's doublets text "G2 TRIPLET" → "T1". Optics unchanged: tcprobe output on the host was identical before and after. The analysis was reworded throughout. Process vocabulary was removed, a numbered correlation list and a glass table were added, and the "different spacings" statement about the catalog host was corrected. The verification sections became "Model Scope and Limitations".

Open: semi-diameters (16 mm) remain inferred from Figure 1. L23's J-LASFH9A coordinate has no catalog dispersion curve. Host exclusions (incompatibleLensKeys) for other F-mount lenses are left to the integration pass.


## 2026-10-14 — Patent-rim, dispersion and metadata audit

Source: Figure 1, PDF page 22; Example 1, Table 1 surfaces 39–46.

| Field | Before | After | Evidence |
|---|---|---|---|
| L11 surfaces 1/2 sd | 16 / 16 mm | 11.0 / 11.0 mm | Smaller front singlet in Figure 1; full-frame chief needs at most 10.4784 mm here. |
| Triplet surfaces 3–6 sd | 16 mm | 12.4 mm | Shared rim kept square; full-frame chief needs at most 11.8471 mm here. |
| L31 surfaces 7/8 sd | 16 / 16 mm | 13.3 / 13.3 mm | Slightly taller rear element in Figure 1; chief needs at most 12.7987 mm here. |
| L23 dispersion | J-LASFH9A label, no curve | Sourced J-LASFH9A catalog curve | Hikari 2025-06-01 catalog, PDF page 151: exact nine-term power series, nd 1.90265 / νd 35.77, d-code 903358. Source νd 35.73 stays unchanged. |

The exact 600 dpi figure shows the uniform 16 mm rims are excessive. Absolute figure readings of about 8–10 mm would clip the stated 21.633 mm image-height chief ray, so the selected group rims retain at least 0.5 mm above the traced chief instead. The full axial beam still clears every surface; off-axis pupil clipping remains modeled, not certified production vignetting. The current J-LASFH9A curve remains distinct from legacy J-LASFH9 (d-code 903357). All five glasses now use catalog dispersion. Nikon F mount, dedicated 800 mm host, attribution and display name are retained.


## 2026-10-14 — Local-viewer review

The magnified local composed diagram was compared with JP2013250290A Figure 1 (PDF page 22), converter surfaces 39–46. The 11.0/12.4/13.3 mm group rims from the prior pass remain: the smaller figure-scale estimate would clip the supported host's full-frame chief ray. All five lenses retain compatible catalog curves, including the distinct J-LASFH9A entry; the single ED position remains inferred from Nikon's production diagram. The converter remains stationary during host focus. Nikon Corporation and Nikon F metadata are canonical.

## Dedicated-host guard — 2026-10-14

The newly declared 500mm f/5.6E PF and 180–400mm internal-converter-in configuration meet this converter's numerical f-number cutoff, but TC800-1.25E ED is dedicated to the 800mm f/5.6E host. Both are explicitly excluded so broader TC-20E III declarations do not expose this dedicated converter on unrelated lenses. Its sole offered host remains unchanged.
