# Z TC-1.4x source extraction and qualification audit

## Governing sources and scope
CHAT-1.0 September 11 governs. Current LensVisualizer main is 712f09476bf13a7db269c2aaaebdd5392a5764ef; its standards and core are equivalent to the previous e1bd097c pin. Three refreshed catalog files are separately pinned. Frozen independent source audits retain their original provenance.

The approved four-field card selects JP2021189311A Example 1. Complete original publication, 33 pages, remains unchanged. Table 2 gives the 20-surface master; Tables 3–5 give the 12-surface converter, source spacing, image plane and asphere. Figure 3 depicts six glass lenses in four functional groups; two additional 0.01 mm cement media retain both equal-curvature boundaries. Original front page and continuation page 33 establish the joint applicants and three Japanese inventor names. Unverified romanizations are omitted.

## Single authorized correction
The source master surface 19 prints nd=1.58600 and vd=69.89. Literal calculation gives master EFL268.175072135 mm/BFD97.738276598 mm and combined EFL347.880420288 mm/BFD−5.486597596 mm, materially incompatible with source summaries. Both independent first-order methods and exact paraxial tracing agree; printed precision cannot explain the discrepancy.

Older primary publications JP2015102733A/JP2015102734A contain a matching master coordinate nd1.518601. The later grant JP7386128B2 still prints1.58600; no official erratum is established. On October13 at17:14 UTC the user expressly authorized using1.51860 for this qualified reconstruction. Only that nd changes in the constructed master. vd69.89, all other selected-source coordinates, source78.83 mm junction and converter11.42 mm image plane remain. No older plates, alternative glass coordinates or unrounded precision are imported. The evidence rawPrescription is the literal source branch; the correction is separately recorded.

## Fresh extraction and independent source replay
Author and independent reviewer reentered the original tables separately. Blank terminal d cells are distinguished from the separately printed master106.97 mm BFD and converter11.42 mm BFD. The author's terminal master d78.83 represents the selected combined configuration, not a printed Table2 terminal number; its rawText remains blank and its note cites Table3.

The independent literal fingerprint is4748be8ba370e7780b202b1ce759533435612c010ec971e285d2169b728ab311. The authorized reconstruction supplement fingerprint isdb7e33b8f3a5d42ef8af829c90311dabbcae652dfdbd1bf6ed6431ef77262297. Both were frozen and clean-replayed before candidate exposure. Literal incompatibility remains disclosed; passing checks on the authorized branch never imply that the original printed master was consistent.

## Conventions and material qualification
Native millimetres and d-line coordinates remain unscaled. Original equation uses1+K, so conventional K30 and A4…A10 map directly; A12/A14 are zero. Twelve boundaries and eight material segments preserve six counted glass lenses and two explicit cement layers. Source field, image height and Table33/Table34 condition conventions remain separately represented.

The author freshly scanned3,179 overlapping original catalog records from six vendors. Independent catalog replay resolves2,174 normalized identities. Catalog names are coordinate-compatible proxies, not identified factory suppliers or melts. The two cement media have no justified catalog glass or spectral curve. All original catalog bytes, raw rows/cells, coefficients, matches and alternatives remain in supporting evidence.

## Staged gate and limitations
Stage1 runs fresh source matrices, sequential recurrence, element/group powers, conditions, digit sensitivities and strict correction-boundary checks. It is READY_FOR_DATA only after its portable clean replay. Source diameter is absent; aperture/rim decisions and actual project runtime checks belong to Stage2. Analysis and independent candidate acceptance follow in Stages3–4. Infinity only; no finite-focus model, host catalog enrollment, repository edit or deployment.


## Stage 2 construction and actual runtime
Only the approved master surface19 nd changes. Source master final gap becomes its calculated106.96136455865943 mm air BFD; converter masterImageDistanceMm is28.131364558659428 mm, preserving78.83 mm separation and11.42 mm source image plane. Plane infinity uses1e15 mm. No asphere or focus law is introduced into the master. Converter10 maps to10A and all twelve boundaries/eight media remain.

The exact F/2.88 beam calibrates stop14 to inferred19.320691893811958 mm radius. The stop remains physical and unchanged after composition. Converter rims14/17/21 mm pass default geometry. Source master-only gapSagFrac0.93 is the smallest hundredth-step allowance admitting the necessary20.254319 mm axial radius atS11: chosen shared rim20.27 mm yields0.929851729 sag fraction and0.316368701 mm clearance. Actual0.92 fails;0.93 passes. Default with19.9 mm rims passes geometry but clips24 of97 axial rays. Independent19.4 mm rims atS16–17 avoid a second override. These inferred apertures are not published factory dimensions.

Actual pinned project validators, composer, buildLens, exact tracer and renderer run under712f094. All ten targeted checks pass. Nineteen material bodies/38faces show zero trims. Source field sample485rays has transmission97/79/75/66/39 overfivefractions; separate21.70 mm format-coverage sample485rays has97/79/75/66/35. All axial and chief rays are clear; off-axis clipping and noBracket intersection failures are retained. The source5.99-degree fullfield gives21.544319 mm absolute chiefheight. Its approximately−0.608% relative to f*tan(theta) is consistent with negative distortion shown in originalFigure4; separately solved6.033695668-degree coverage is never substituted for sourcefield.

All six counted converter glasses resolve to qualified catalog proxies; both source cement media remain unresolved. Native d-line tracing retains authored nd. Proxy chromatic routing and unresolved master/cement spectra do not recover factory dispersion. Source-derived master has no commercial enrollment or arbitrary-host fit claim. Full compiler, corpus, UI and production gates remain NOT_RUN (closed 2026-10-14: these run with the repository integration).


## Stage 3 analysis and candidate-review clarifications
The analysis follows the controlling section structure and distinguishes literal source, authorized reconstruction, commercial correlation and inferred runtime geometry. Original Figure4's negative distortion supports, but does not quantitatively prove, the nominal-versus-distorted image-height interpretation. All residuals and both field conventions remain.

Independent initial PassB clarified descriptions without changing optics: corrected master element11 no longer calls its nd a native source coordinate. The two thin optical media are explicitly published as coordinates, while their bonding/cement identity is an interpretation. TAFD30 fresh-catalog nominal vd40.81 is distinguished from historical fitted runtime metadata40.80 and evaluated40.817976443. The reference fixture's schema requires numeric closeFocusM; its4m UI bound is inactive in every accepted infinity test and is not published data or a close-focus optical claim.

A quantitative and interpretive claim map binds source tables, calculated powers/conditions/residuals, apertures, actual runtime glass roundtrips, ray counts and both source/coverage fields. Automated section/numeric checks supplement manual review. Full integration gates remain NOT_RUN (closed 2026-10-14: these run with the repository integration).

Initial candidate review also caught a source-inventory case mismatch: the declared patent source ID is now lowercase “patent”, matching every raw source record. Independent geometric review resolves21 first-surface noBracket terminations per field sweep as analytic first-sphere intersections beyond the53mm aperture. They remain rejected outer-pupil paths, never successful transmitted rays. Ordinary downstream aperture clipping is separately retained.


## Final consolidation and independently distinct sampling
The final dossier keeps the frozen literal and qualified-source supplement in one self-contained baseline JSON, with the exact independent source script at root. Reconstruction verifies original member byte counts/hashes before rerunning both source branches. It compares new independent calculations to actual parsed final converter and master; the source-only audit is not replaced by an author expectation file.

Independent candidate review runs a different physical-stop pupil grid:1,015rays at each of the source and format-coverage fields,2,030total. It transmits739/1,015 and721/1,015 respectively; all remaining paths encounter stored rims. All290 axial samples and14chiefs pass, with no unblocked backward paths or numerical failures. These independent counts are not interchangeable with the application's two485ray sweeps.

Final code binds the exact approved data, master, analysis, runtime runner/results, baseline and independent code. Every mandatory file and runtime flag is required; actual surface-hit positions, normals, path directions, stop, element ownership,32surface sequence, ray-grid identities, chief interception, transmission counts, render identity and zero trims are also inspected. Fresh numerical calculations bind EFL, f-number, track, source residual and both chief fields. All14 root members are hash/size-bound except the explicit manifest self-entry. Stage is fixed; absence of a file cannot downgrade it.

Final evidence expands only source provenance to include preserved Nikon page originals and catalog inventory, and removes a duplicate card alias. Current712f094runtime bytes and30original governing references remain explicit. No formerly delivered package is mutated by the main freshness supplement.

Only bounded permitted negative controls are used: missing mandatory files, strict data syntax, optical/material changes, runtime records/flags and manifest corruption. The previously platform-flagged supplemental master-asphere/focus-law regression is not rerun, rephrased or delegated here; those new fixture classes remain NOT_RUN. Read-only review and exact final byte binding are separate from that absent test.

Clean replay verifies ZIP CRC, exact14members, every canonical hash, fresh portable output and byte-identical actual runtime output. Final independent exact-package acceptance and the permitted negative-control report are preserved in supporting evidence. READY_FOR_BATCH means this qualified source reconstruction is packaged for later integration, not that full compiler/corpus/UI/build or factory validation has run.

Final read-only review corrected one displayed-precision reporting threshold: Table1 masterEFL293.80 has half-last-digit0.005mm, not the0.05mm retained in immutable Stage3's comparison metadata. The final comparison reports0.005mm. No optical data, reconstruction result, source raw value or gate outcome changes; the actual master residual−0.001044mm remains inside that corrected display threshold.

## 2026-10-14 — Deployment validation and wording pass

Source re-read from the original JP 2021-189311 A PDF (page images, not the text layer): all 12 rows of Table 4 (R, d, nd, νd), Table 5 (K and A4–A10 of surface 10) and Tables 1–3 checked against the file; no mismatches. Equation (AS) uses the (1 + K) form, so K = 30 maps directly. Bibliography (pp. 1 and 33: filed 2020-05-29, published 2021-12-13, Konica Minolta and Nikon, three inventors) matches the file.

First-order, independent paraxial trace of master + converter: with the printed master nd 1.58600 at surface 19 the master is 268.18 mm (BF 97.74) and the combination focuses at −5.49 mm, so the misprint is confirmed. With 1.51860 (the index printed at master surface 15 for the same νd 69.89) the master is 293.799 / BF 106.961 mm (printed 293.80 / 106.97) and the combination 414.30 mm / BF 11.385 mm / ratio 1.410 (printed 414.47 / 11.42 / 1.41). Converter f = −149.406 mm (Table 33: −149.41). CL1 −41.92, CL2 −33.46, L11 48.24 and L16 52.29 mm, and conditions (2-1) 0.28 and (7-1) 1.253, match Tables 33–34. masterImageDistanceMm 28.1314 = 106.961 − 78.83; the printed BF would give 28.14. The JP 2015-102733 A reading (1.518601) cited in the analysis was not re-read in this pass.

Maker comparison: Nikon publishes 6 elements / 4 groups with 1 aspherical element (https://imaging.nikon.com/imaging/lineup/lens/z-mount/z_tc_14x/). Its drawing (…/z_tc_14x/img/lensconstruction.jpg) shows a front singlet, two cemented doublets with the aspherical element fifth (L15), and a large rear positive element, the topology of Example 1. Examples 2–5 share that layout, so Example 1 is a reasonable but not unique choice. Figure 3 element heights agree with the 14 / 17 / 21 mm rims.

Hosts: Nikon's page lists Z 70-180mm f/2.8, Z 70-200mm f/2.8 VR S, Z 100-400mm f/4.5-5.6 VR S, Z 180-600mm f/5.6-6.3 VR, Z 400mm f/2.8 TC VR S, Z 400mm f/4.5 VR S, Z 600mm f/4 TC VR S and Z 800mm f/6.3 VR S. Catalog hosts given `acceptsTeleconverters: true` in this pass, each passing the converter host probe with no axial clipping: nikkor-z-70-200f28 (junction 4.42 mm), nikkor-z-100-400-f4556 (2.54 mm), nikon-nikkor-z-180-600mm-f56-63-vr (17.74 mm), nikon-nikkor-z-800mm-f63-vr-s (46.44 mm). The 800 mm host reports 0 % corner coverage both bare and mounted; that is a property of the host model's rims, not of the converter, and is left open for the host. nikkor-z-70-200f28-vr-s-ii was already flagged; Nikon's converter page predates it and lists only the first version, while third-party compilations from the lens manual list it as compatible. The other Nikon-listed lenses are not in the catalog. Not flagged: four Laowa lenses (12mm f/2.8 Zero-D, both 180mm f/4.5 Ultra Macro APO, 24mm f/14 Probe) pass the geometry but are not Nikon-listed; every other Z-mount catalog lens is rejected as faster than f/2.8 (host-too-fast) or with too little rear clearance (clearance), and none of those is on Nikon's list.

Fields changed: minHostFno 2.88 → 2.8 (the f/2.8 hosts on Nikon's list; the first-version Z 70-200 at F/2.864 was rejected at 2.88 and passes at 2.8 with no axial clip). Header comment added. Subtitle → "JP 2021-189311 A, Example 1 — production correlation"; specs → "6 ELEMENTS / 4 GROUPS", "1.4× REAR CONVERTER", "1 ASPHERICAL SURFACE / 1 ELEMENT" (the master-correction spec line removed; the misprint is recorded in the header and analysis). Element labels "Element 1–6"; roles added; diagramLabel removed; glass parentheticals → "(coordinate candidate; supplier unconfirmed)", with resolved glass unchanged (E-FD1L, TAFD30, E-FD8, TAFD55, M-BACD12, BSC7, all Hoya); cement layers → "Optical Cement Layer" / "Optical cement (patent nd=1.51400, vd=42.83)", no `cemented` tag and no fl; cemented tags D1 / D2; groups "L11 (+)", "CL2 (−)", "CL1 (−)", "L16 (+)"; doublets "D1: L12 + L13", "D2: L14 + L15". Converter probe output identical before and after. Analysis: process vocabulary and run counts removed, the reference-master rim allowance (not part of the converter) dropped, "Verification" heading renamed to "Model Scope and Limitations".

Open: none for the converter. Host-side: Z 800mm f/6.3 VR S corner coverage.


## 2026-10-14 — Patent-rim, dispersion and metadata audit

Source: Figure 3, PDF page 27; Example 1, Tables 3–5.

The 600 dpi exact figure was visually inspected. Two automated crops produce inconsistent axial span/axis readings because the short converter outline is surrounded by labels; these readings are rejected. The drawing supports the 14/17/21 mm relative rim ordering. The selected compatible host's corner chief reaches about 12.90/16.09/18.21 mm at the group exits, so an absolute reduction based on the contaminated figure readings is not justified. Existing SDs and the quoted aspheric departure stay unchanged.

Six lens glasses already reach coordinate-compatible catalog curves. Both 0.01 mm cement bodies remain unresolved because 1.51400 / 42.83 has no defensible catalog curve. The Nikon Z TC-1.4x display name, Z mount, counts and authors/assignees are complete. Image format is inherited from the composed host.


## 2026-10-14 — Local-viewer review

The magnified local composed diagram was compared with JP2021189311A Figure 3 (PDF page 27). The six lens bodies, two explicit cement films, two doublets and rear asphere agree in order and orientation; the 14/17/21 mm inferred rims are retained. The converter remains fixed through host focus and zoom, with no independent movement law or stop. All six glasses have compatible catalog curves. The cement's N/ν and thickness alone cannot identify a commercial adhesive or its spectral curve, so both films remain unresolved. The joint Konica Minolta, Inc. / Nikon Corporation attribution and Nikon Z mount are correct.
