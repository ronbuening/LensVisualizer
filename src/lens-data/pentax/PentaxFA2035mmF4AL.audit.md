# Continuous-zoom review, 2026-10-23

Status: candidate awaiting independent repository integration and verified cloud delivery. Not deployed or manufacturer-validated.

US6246529B1 Example5, PDF17 col3 and Fig25/PDF15: G1 first moves imageward then objectward. Keep D10 and rear image distance piecewise linear and solve D7. The source-required reversal emerges near normalized zoom0.794. This is one constrained inferred visualization path, not unique recovered cam dimensions. No finite focus reconstructed.

All added zoom nodes are explicitly unpublished. Native source stations, fixed radii, thicknesses, glass/media and asphere coefficients are retained, as are native image-plane residuals. Interpolating those residuals does not erase source rounding or claim perfect manufacture. Piecewise path slopes may have corners; this is a continuous visualization reconstruction, not a mechanically C1 factory cam. Intermediate EFL labels use the computed prescription EFL.

Full diffraction MTF uses the unmodified engine with maxGridSize256, five fields and requested0–100lp/mm at21 zoom states, plus five off-node zoom states. Returned per-field trustworthy bandwidths govern; no blanket100lp/mm claim. Photopic and finite-conjugate unavailability is retained where the source cannot support them. Exterior aperture clipping is not a failed cemented interface. Raw diagnostics accompany this review.

The original analysis/audit below records the historical source-station-only model. Its linear-interpolation limitations are superseded ONLY by this explicitly inferred variant and the current test outputs; source identity and uncertainty statements remain applicable.

# Pentax FA 20–35mm F4 AL: independent qualified Stage4 audit

## Disposition

The corrected pair is approved only as USER_APPROVED_QUALIFIED_DELIVERY_LINEAR_ZOOM_APPROXIMATION. Last standard gate: READY_FOR_DATA. The standard zoom-reversal-keyframes and intermediate-parfocality checks remain FAIL. This is not READY_FOR_BATCH. Integration is INTEGRATION_PENDING.

The exact user approval, preceding question, and bounded scope remain in qualification.json. Approval permits the two native endpoints and linear interpolation with limitations. It does not waive native optical, aperture, geometry, source or analysis checks.

## Source, references and independence

The fixed card selects US6246529B1, Example5. Original patent and card bytes are unchanged. Tables5/7, Figures17/19/25, definitions and motion prose were independently re-extracted from rendered original pages before candidate access. Frozen baseline fingerprint:4feb42b7851e9ebda8147800b38008be6bc52af863b993f64a1d9202216079b7.

The baseline includes independent sequential and matrix calculations, complete original source rows/aspheres, source-precision results and fresh six-manufacturer catalog review. Its full code, inputs, results and hash manifest are preserved in evidence.independentPass. No prior author values were used to establish that baseline. Candidate dossiers were read only afterward. This continuation has prior-review exposure and does not claim a second blind pass.

Controlling project snapshot5c25e4289c6e090eb44177e907d901dfe3cef76c, source/reference hashes and exact file inventories are retained. The final verifier embeds a separately identified independent implementation, replays the original source baseline in an isolated temporary directory, independently parses the literal final data, and calculates final native optics, apertures and geometry. Actual Node execution is separately recorded and hash-bound; portable replay does not claim to rerun the app.

## Submitted failure and justified aperture correction

The first submitted qualified Stage3 archive was9f0fabd00453543428a5d97cabee377cc337bc4edb4574bb90000fcfe24c3ada, data7d7b6907c7a836ecf52da6c6fa305e1b3c5acfcca5e131f9281a5d0c80fd06c1. Its default fan passed, but independent native checks failed: the wide47.8degree chief hit exterior1 at16.268279934mm against15.5mm; the tele fullf/4ray first clipped exterior10, with source12 ultimately limiting the opening to approximatelyf/4.45247. These were unrelated to the approved motion approximation. The failed review and exact traces are preserved in evidence; they were not waived.

The author corrected only unpublished inferred clear radii, constrained by original Figures17/19, exact required ray envelopes, physical surfaces and current geometry policy. Front1 was increased15.5→17.6mm while rear2 stayed15.5mm; the rear surface's spherical-domain bound does not apply to the front cap. Other affected faces are enumerated below. No published radius, medium, aspheric term, spacing, endpoint, image plane or source quantity changed. The native iris remains an explicitly inferred existing from-nominal-fno schedule.

| Surface | Earlier inferred SD mm | Corrected inferred SD mm |
|---|---:|---:|
| 1 | 15.5 | 17.6 |
| 8 | 8.5 | 8.9 |
| 9 | 8.5 | 9.1 |
| 10 | 8.5 | 9.3 |
| 11 | 8 | 9.6 |
| 12 | 8 | 9.7 |
| 13 | 8 | 9.4 |
| 14 | 8 | 8.9 |
| 15 | 8 | 8.7 |
| 16 | 7 | 7.7 |
| 17 | 7 | 7.3 |
| 19A | 7.5 | 7.9 |

The corrected Stage3 archive511484b08b5e0c5e3c842f47fe94e3bc0496458726d97be1a4f9aed1945b402d and manifest2ae3c0ec3e444f3e8b9ed3f7653c07fbd6564dc333b95cb9b1000279b066e0a1 preserve the author handoff. Final data remains byte-identical to corrected data9f4a32eedaeb4ed81e86ac14905833ed4c26a60d2f1f3e1cb6fef86e3d2e5214. Stage4 updates review/disclosure and verification artifacts only.

## Numerical source and motion review

Literal EFLs are20.603183309272/34.011153284341mm and BFDs36.909248900752/53.149395471527mm. Source image gaps36.90/53.15 remain literal. Standalone component/group powers, pupils, reference planes, Petzval contributions and optical counts independently agree. Ten photographic elements/eight groups require eleven material entries because the hybrid resin layer remains separate.

Condition1 computes0.528337061894 from printed endpoints against0.529, a strict half-unit FAIL. Its native rounded-input interval[0.527868852459,0.528805970149] overlaps the printed interval. Independently, a shared physical-table witness within0.782185907332 source half-units simultaneously matches both EFL/BFD summaries and condition1. Nonlinear condition1=.528510004792; all native EFL/BFD residuals remain within0.005mm. The portable verifier recomputes this witness from the perturbed source parameters and actual printed tolerances. It does not adopt those perturbations or erase literal failures. Condition2 and both governing broad inequalities pass.

Three rigid optical groups and two independent internal gaps leave one function undetermined after focal length and fixed-image infinity constraints. Fixed stop-to-G3 spacing adds no missing constraint. Independent source-only trajectories demonstrate nonunique reversal locations; no unique source cam was recovered. The user instead authorized literal endpoint linear interpolation. The real midpoint defocus is+2.098128mm; the21-point sampled maximum is+2.134752mm. G1's described reversal remains absent. No compensating focus or invented midpoint is inserted. Both source states are infinity;1e15m is a UI sentinel, not marketed MFD.

## Geometry, aperture and current runtime

Independent21-state,513-radius-per-band calculations retain positive edge thickness, actual rim slopes within the unchanged cap, and shared-band air-gap intrusion within the unchanged0.90reserve. The minimum sampled glass edge thickness is0.275271mm. The actual state-native renderer reports zero hidden trim across21zoom stations and both infinity-sentinel controls.

Independent exact stop-aiming confirms native source chiefs and full nativef/4axial edges clear. Full current physical-iris axial rays and exact format-corner chiefs also clear across21zoom samples. The minimum inferred-SD/required-envelope ratio is1.080231529 at11, preserving at least8percent clearance. These finite checks are not continuum proof.

Current taxonomy uses43.3mm diagonal, radius21.65mm. Its exact endpoint corner angles are47.831725322/32.660354183degrees. The geometric36×24mm corner radius21.633307653 was checked separately, with endpoint angles47.810284498/32.640499203degrees. Native source angles47.8/32.6 remain distinct and unchanged.

Actual normal UI rays use shared defaults: six axial fractions and five off-axis fractions at0.6field. All default axial rays transmit. Across21zoom×2focus settings, twelve off-axis rays first clip at exterior16/17; none first clips inside a cemented group. This matches the documented exterior-vignetting criterion. Full source-field outer-pupil diagnostics retain losses: at wide only the chief among the five tested edge-field pupil samples survives; tele retains four. No universal full-field/full-pupil illumination or production-vignetting claim is made. First physical clips remain separate from later ghost continuation.

Inferred endpoint iris radii are6.781221979842/8.753142418938mm from exact nativef/4calibration. Calibration is not independent source diaphragm evidence. No source aperture, application policy or ray margin exception was adopted.

## Glass, aspheres, metadata and analysis

All source nd/Abbe values and the hybrid boundary remain unchanged. The two native conics map directly to runtimeK; coefficients and geometric departures at corrected SDs were rechecked. Raw catalogs from six manufacturers were independently reviewed; no supplier/melt, line indices, anomalous dispersion or APO claim was adopted. Numerical Fraunhofer wavelengths are clearly model conventions, since the patent prints line labels without numerical wavelengths.

Primary Ricoh facts support the qualified production correlation; exact patent-to-production identity and release timing remain unconfirmed. Metadata, every material label/value and stored power, counts, focus scope, source conditions, aspheres, references and quantitative prose were reconciled against the final data and independent results. The analysis distinguishes source values, inferred apertures, calculated working values and approved interpolation.

## Reproduction and remaining work

The consolidated verifier retains genuine stage2FAILs for intermediate-parfocality and zoom-reversal-keyframes and returns nonzero accordingly. Every independent stage4check must pass. Manifest blockers explicitly preserve those accepted failures and their scope. This separate qualified approval cannot be interpreted as a normal Stage2/3/4gate advancement.

Original source and frozen baseline bytes remain immutable. Clean extraction, full inventory/content hash checks, stable numerical replay and actual pinned-runtime record binding are required before final handoff. Typecheck, Prettier, corpus tests, full build, metadata generation and integration remain NOT_RUN. No repository change, unmerged code adoption, upload or publication occurred.

## Quantitative claim map

- Original identities, prescriptions, source locators, catalog records: evidence.rawPrescription and independentPass.frozenArtifacts.
- Independent source optics/powers/Petzval/pupils/motion: results.independentBaseline, recalculated on every replay.
- Corrected actual data mapping, full iris, native/format chiefs,21-state geometry and aperture margins: results.independentFinalModel and independent stage4checks.
- Source compatibility witness: results.independentSourcePrecisionWitness, with raw comparisons retained separately.
- Actual defaults, physical and ghost events, renderer and taxonomy-corner checks: runtime.json, bound by data/evidence/script/project hashes.
- Rejected undersized submission, exact first clips, old/new inferred values and independent runtime corroboration: evidence.independentPass.postExposureArtifacts.
- Scope of qualification and retained normal failures: qualification.json and manifest.blockers.


## V2 conversion — 2026-10-18

Converted by Spot, without a Codex worker, using the repository's deterministic converter and schema at main c810aa6139e35ad5ee87675731ac2d1b933476cc. The included equivalence receipt states the exact checks and any metadata normalization. All source optical values and pre-existing optical limitations are retained. Dropped derived stop radii and zero aspheric terms are listed in the conversion report; these do not change the canonical optical prescription. The original package is preserved intact. Historical verifier hashes apply to that original package, not the converted file. The converter performs output type checking; 147 shared converter tests passed. The earlier full-catalog test attempt on a prior revision was resource-killed and is not a pass; no full-catalog pass is claimed here. This format conversion is not deployment or complete optical acceptance.

Retained package status: Qualified endpoint-linear zoom approximation. Standard gate READY_FOR_DATA; reversal-keyframe and intermediate-parfocality FAIL. Not READY_FOR_BATCH.

Current frozen-candidate results: 2005 dense geometry states, zero geometry failures or image-plane inconsistency flags. 5555 default UI rays, 170 clips, all remaining clips on exterior surfaces; sphere-root proofs distinguish out-of-rim misses from in-aperture intersection failures. Maximum engine image-plane offset 0.009248900752240274mm (source/runtime spectral conventions retained). Full/reference and off-node outcomes are in VALIDATION_SUMMARY.json; only returned bands are trustworthy.
