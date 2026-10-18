# Fujifilm NATURA S 24mm f/1.9 — consolidated Stage 4 audit

## Job, revision and main provenance

Fixed card: US20060007561A1, Example 1; Fujifilm NATURA S Super EBC Fujinon 24mm f/1.9; output stem FujifilmNaturaS24mmf19. Original patent and card bytes are unchanged. CHAT-1.0 protocol/dossier/Stage 4 and current controlling LensVisualizer references govern. The candidate targets main commit 5c25e4289c6e090eb44177e907d901dfe3cef76c. The coordinator rechecked main and all 13 pinned reference hashes at 2026-10-04 01:06:30 UTC; it remained unchanged. No other branch feature, Git write, metadata generation, corpus sweep, full build, publication or integration was used.

Original Stage 3 archive SHA256: 698838d48f486061427ba8b3c5fffc38775ee1350cc3e0fdf3a9f34e1566fb41. Original manifest SHA256: 4275ce36cb623b75f524066dd9533a48eb7dd8eb03d23da790ef11a06b05bd49. Every original member hash is preserved in evidence.independentPass.originalCandidateHashes. Final approval binds the final manifest inventory, not those earlier bytes.

## Independent Pass A and exposure

The reviewer re-rendered the original patent, re-entered Table 1 and the full Table 2, established the native equation/conventions, reviewed manufacturer sources, repeated a targeted authoritative glass audit, and wrote a fresh Python calculation before opening the candidate. Exposure was limited to fixed job selection, paths/names, general instructions and controlling references, primary source materials and fresh vendor results. No prior qualification report, extraction array, lens calculation, author pair or author reasoning was read before freeze.

Frozen fingerprint: 72768399367d9e6f07a2c6dca8e0f815e9e4798de472aca578f591b204e8c8c4. Freeze chronology and exact source/code/results identities remain in evidence.independentPass. The original independent script is embedded verbatim in verify.py and is materialized with the frozen inputs and rerun during portable replay; its complete stable JSON must equal the frozen result. Fingerprints record a checkpoint, not cryptographic proof of blindness. Pass B geometry work is a separate independent implementation, not a second blind extraction.

## Extraction and transformations

The patent is image-only. Rendered PDF p10 / printed p4 contains equation (A), paragraph 0054 and Table 1; p11 / printed p5 contains all Table 2 coefficients, stop paragraph 0057 and Table 3. PDF p2 upper Fig. 1 supplies topology. Front-page attribution was read from p1.

All 13 refracting rows, signed radii, spacings and d-line nd/vd remain exact. Surface 4 is the L2/L3 shared boundary and carries downstream element 3 and its index. There are 7 physical elements, 6 air-separated components and 4 functional groups. The final Table 1 D cell remains raw null; separately stated Bf = 7.98 mm supplies the source image plane. No source surface, filter, dummy plane or cement layer was invented or removed. No dimensional scaling was applied.

Equation (A) uses sqrt(1 − Kpatent·h²/R²), requiring Kmodel = Kpatent − 1. All A3–A20 odd/even terms remain on surfaces 6, 7, 10 and 11. Coefficients have mm^(1−p) units; h is a nonnegative radial coordinate. The apparent VA18 heading is interpreted as A18 from the explicit continuous A3–A20 definition, with the printed text retained. Current rearPlates policy overrides older omission guidance but has no effect because this example lists no plate.

The source explicitly puts the stop 0.90 mm before surface 6. D5 = 2.06 mm becomes 1.16 + 0.90 mm, preserving every axial station. Production 24 mm/f1.9 and 0.4 m autofocus are not substituted for the published 24.06 mm/f1.96 or used to invent motion. Focus is NO_INTERNAL_RECONSTRUCTION; fixed infinity geometry is verified at both application control endpoints.

## Numerical reconciliation

Every source R/d/nd/vd, asphere constant and all 72 polynomial coefficients agree with the frozen independent transcription. Independent scalar y–ν and separately implemented physical-angle ABCD matrices agree within 5.33e−15. The final TypeScript is loaded directly and recalculated by the independent path; EFL and BFD residuals against the source baseline are zero.

EFL = 24.0557233437 mm; last-vertex BFD = 7.9839534800 mm. Both fall within half the last published 0.01 mm unit. Vertex span = 23.75 mm, source-plane track = 31.73 mm, Gaussian track = 31.7339534800 mm. H1 = −2.9383594393 mm from the first vertex; H2 = −16.0717698637 mm from the last vertex. Surface-by-surface Petzval sum is +0.005772596489 mm⁻¹ using φ/(n·n′), including the cemented boundary. This sum does not determine the complete astigmatic image surface.

Functional-group EFLs I–IV: −28.35290488, +13.57778905, +26.97825033, −21.26208126 mm. Standalone element EFLs are independently checked and kept separate from cemented/group behavior. All seven source condition bounds pass; rounded ratio residuals remain visible with explicit precision propagation. Source-plane TL/EFL > 1 and BFD/EFL < 1 support neither telephoto nor retrofocus labels.

## Aperture-model correction

Authored STO SD = 5.285960794911748 mm is a paraxial calibration to f/1.96. Actual main runtimeLens.ts derives a nominal entrance-pupil SD = 6.136664118287659 mm and retraces its exact marginal ray, replacing the ordinary air-stop SD with 5.608870208237988 mm. The fresh independent exact path reproduces this second value. FOPEN = 1.96 is a calibration output in both constructions, not independent measured diaphragm evidence.

The original candidate did not sufficiently distinguish these two iris models. Data header, analysis, evidence and results now state both conventions. Portable physical-stop-aimed checks use the authored iris; actual runtime entrance-pupil launches use the exact-recalibrated iris. No optical input was changed to disguise the distinction.

## Geometry, field coverage and bounded acceptance

The original 301/501-point profile sweep is retained but augmented by independently implemented outward-rounded mpmath.iv geometry. Forty-decimal interval arithmetic covers each entire radial material interval with 2048 adjoining closed cells, using the complete Horner polynomial and derivative. All radicands, positive-K margins, slope magnitudes, element thicknesses, SD ratios and shared-band gap limits pass throughout the modeled radii. No relaxed gap/rim policy is used. The portable geometry script is included and rerun by verify.py; mpmath 1.3.0 is its declared dependency.

Actual main validateLensData and buildLens pass. Every render boundary has zero hidden trim. The original runtime script called a ±0.75 axial sample the default fan; it was corrected to the six actual axial fractions including ±0.83. All six axial and five off-axis rays pass. The stricter 0.6 × 41.8° off-axis fan and the renderer's trace-safe default off-axis fan both clear. Every successful required ray crosses all 14 physical planes. Actual source-plane propagation uses the last-vertex ray plus 7.98 mm, not an inappropriate generalized-image-plane flag.

At 41.8°, the clear chief reaches image-height magnitude 21.599387663 mm. Source Y = 21.633 mm is reached at 41.846197028°, within the rounding interval of the printed one-decimal field angle. The runtime's rounded 43.3 mm format corner is reached at 41.869542055° without a rim clip. Neither source field nor image plane was adjusted to erase these differences.

The larger diagnostic pupil sampling has substantial failures: 7242/8181 meridional and 317/384 skew samples pass. These counts are finite, unweighted diagnostics, not illumination percentages. Outer edge-pupil rays exhibit clipping and some TIR. Their failures are retained in runtime.json and the clean analysis. The accepted model is bounded to valid fixed geometry and documented required/default/source-covered chief-ray containment; it does not certify full-pupil unvignetted f/1.96 film coverage, production illumination, aberration quality or MTF.

## Preserved discrepancy resolutions

1. Patent paragraph 0041 says group III has greater positive power than group II. Table 1 gives group II about +0.07365 mm⁻¹ and group III +0.03707 mm⁻¹. The numerical source is retained and the unsupported prose claim is not repeated.
2. The actual main image-circle proxy exits 1 and flags surfaces 11A/12/13. This raw FAIL is retained in results.comparisons and evidence. Its hardcoded exit-slope bound is 1 here, while the exact edge chief has slope magnitude about 1.32988. Actual exact source/canonical-corner chiefs clear the same rims. A separate resolution check passes because the proxy assumption fails; no real geometry or clipping failure is relabeled a pass.
3. Surface 6A's literal native profile smoothly reverses radial slope before its modeled rim. A generic SD figure-fit runbook says to cap at any turnover; that blanket rule would remove the region traversed by a valid default ray. The authoritative data specification's actual slope/domain/thickness/gap criteria all pass continuously. The confirmed native profile supports a proposed source-preserving exception, but the cap is in the current-main runbook and no explicit supersession clause was found. The user subsequently authorized a narrow qualified-delivery exception; blanket compliance with that sentence and ordinary READY_FOR_BATCH are not claimed.
4. Human-readable spacing was cleaned, and the L6 statement was narrowed from universal absence of compatible catalog material to absence of an established material among checked catalogs. Parsed-value comparison shows only two display strings changed; every optical input remained identical.

## Glass and product evidence

The author retained parsed six-vendor catalog rows and identities. The fresh independent audit checked actual OHARA, Schott, CDGM and HIKARI primary data, an archived vendor-authored SUMITA catalog, and available HOYA type/code leads, recording the exact scope and limitations. Six coordinate pairs have defensible catalog candidates; L6 remains unresolved. In particular, S-TIM28 is 1.68893/31.07, while checked L-TIM28 is 1.68948/31.02. S-/L-prefix and newer suffix differences are not collapsed. No coordinate match proves the historical supplier or melt.

Source-supported candidate nC/nF/ng and absolute PgF values are preserved in the independent glass evidence as optional proxy information, not declared properties of the patent's unnamed materials. The model retains explicit class/code labels and the runtime's documented coordinate-compatible dispersion proxies, with Abbe fallback for L6. Vendor anomaly values are not copied into runtime dPgF under a different normal-line convention. No APO, exact polymer identity or measured production chromatic performance is claimed.

Official NATURA specs and FUJIFILM R&D No.50 support 7 elements/6 components, two aspheric elements, the distinctive topology, 24 mm/f1.9, 24×36 mm film, 0.4 m autofocus and October 2004 introduction. Their convergence supports correlation, not manufacturer confirmation that Example 1 is the exact production formula. January 2006 is the cited patent publication year, not product release year.

## Quantitative-claim map and prose review

- Identification and dates → original patent p1; unchanged manufacturer report/specs; evidence.productCorrelation and independentPass.inputs.productCorrelation.
- Counts/topology/source planes → rawPrescription, parsed surfaces/elements and independentBaseline counts/transcription checks.
- EFL/BFD/tracks/cardinal planes/ratios → results.sourceModel, implementedModel and independentBaseline independent calculations; reference planes explicitly named.
- Element/group powers → implementedModel.elements/functionalGroups, independently reconciled; no isolated/in-situ conflation.
- Authored iris, pupils and actual-runtime iris → implementedModel.pupils, actualRuntimeAperture and independent exact-stop check; calibration dependence disclosed.
- Glass/material/dispersion assertions → raw coordinates, retained vendor rows, independent glass audit and runtime.glass selections; no supplier proof.
- Petzval → per-surface terms and sum, with image-quality limitation.
- Every asphere term/profile/rim departure → frozen Table 2, final parsed asph, native-model full-profile comparison, asphereDepartures and continuousGeometry.
- Focus/disclosures → unchanged single source state, empty var, explicit sentinel, runtime noFocusMovement and manufacturer range; no finite-conjugate claim.
- Field/geometry/proxy/turnover statements → portable interval results, actual runtime full hit paths and diagnostics, preserved official audit observations and separate resolutions.

Required analysis structure, metadata, citations, scholarly third-person prose, rounded quantitative statements and disclosure completeness were manually reviewed against those facts. Stage 2 and 3 mandatory checks were rerun on the final revision rather than transferred by lens name.

## User-authorized qualified disposition

The earlier held packet was preserved unchanged (ZIP SHA256 `2eb08339022556ce99a3deb00cd2eef0e473c1a75ef6bb05a37c3037983bc203`). The user explicitly approved qualified delivery in reply to the question disclosing both the image-circle proxy failure and the current-main blanket turnover-cap conflict. The exact question/answer and message identities are retained in `independentPass.workflowDecision.permissionEvidence`. Approval message: `Sentinel_5b37def582388191bfc3b4253fedbc1b`; answer: “Yes, go ahead”.

Disposition: USER_APPROVED_QUALIFIED_DELIVERY_TWO_AUDIT_HEURISTICS. The standard last gate remains READY_FOR_AUDIT; ordinary READY_FOR_BATCH is not awarded. This is a model-specific delivery exception, not a source correction, general audit-rule relaxation, current-main edit, integration or publication approval. The raw image-circle script exit1/UNDERSIZED observation and the absolute turnover-cap conflict remain visible alongside the exact-ray and interval physical evidence. Substantial edge-pupil clipping/TIR is not recast as full illumination.

The independently reviewed data SHA256 remains `40e61f3b3d0ae4b39046f86fbb044b4c699a640546bfed6d69e3e6c268c47adc`. Data, analysis, runtime runner/results, interval geometry script, original PDF/card and manufacturer sources are byte-identical to the reviewed held packet. Only authorization/disposition records and their verifier binding have changed. The source-first reviewer’s frozen inputs, code, results, exposure note and fingerprint remain unchanged. The coordinator verified this metadata-only transition; no fresh optical independence is claimed for recording approval.

Main was rechecked on 2026-10-04 at01:52:05 UTC and remains `5c25e4289c6e090eb44177e907d901dfe3cef76c`. No other branch, main code change, Git write or integration was used. Hasselblad H1.7x remains separately held.

## Reproduction and limits

The dossier contains14 members, including original patent/card and complete portable independent/author calculations. The optional runtime script reproduces recorded targeted application checks only with Node24+ and the identified main snapshot. Portable replay does not claim to rerun those external project tools.

Command: python FujifilmNaturaS24mmf19.verify.py --package-dir <extracted-directory> --output <external-results.json>

Python standard library and mpmath1.3.0 are required. Results remain unchanged inside the package; clean replay writes outside it and compares complete deterministic JSON. The portable verifier exits0 only when technical checks and the explicit approval/data binding pass; that replay success is not ordinary batch readiness. The raw heuristic FAIL remains a separate comparison. TypeScript compiler, Prettier, corpus tests and production build remain NOT_RUN at integration scope. INTEGRATION_PENDING is unchanged.


## V2 conversion — 2026-10-17

Converted by Spot, without a Codex worker, using the repository's deterministic converter and schema at main c810aa6139e35ad5ee87675731ac2d1b933476cc. The included equivalence receipt states the exact checks and any metadata normalization. All source optical values and pre-existing optical limitations are retained. Dropped derived stop radii and zero aspheric terms are listed in the conversion report; these do not change the canonical optical prescription. The original package is preserved intact. Historical verifier hashes apply to that original package, not the converted file. The converter performs output type checking; 147 shared converter tests passed. Full-catalog end-to-end testing is not claimed for this format-conversion batch. This format conversion is not deployment or complete optical acceptance.

Retained package status: QUALIFIED_AUDIT_EXCEPTIONS: infinity-only focus, two previously user-approved audit-heuristic exceptions, L6 glass fallback, extreme-edge clipping/TIR and inferred stop/rims remain; no new optical approval.

## Deployment review — 2026-10-18

Reviewed the supplied A1 facsimile directly: Fig. 1 (PDF p2), Table 1 and asphere equation (p10),
Table 2 and the 0.90 mm stop placement (p11). The radii, native spacings, seven nd/vd pairs,
and all A3–A20 coefficients agree; runtime K correctly equals the patent's K minus one.
Fujifilm's public Research & Development No. 50 report, Fig. 8 (p4), confirms the distinctive
biconcave first element, L2/L3 doublet, and L4/L6 aspheric-element placement. This supports
correlation, not exact production identity or precision measurements from its small bitmap.

Fresh checkout checks: surface validation passes; aperture census is within 3% of f/1.96;
exact field coverage reaches 21.60 mm at the declared 41.8° half-field and solves a clear
21.65 mm corner chief near 41.9°. Render diagnostics show zero hidden material trim.
Computed EFL is 24.0557233437 mm. No optical numbers were changed for integration.

The image-circle proxy still exits 1 at 11A/12/13. Its slope bound is insufficient for this
short-back-focus design; the exact transmitted chief establishes coverage separately.
Surface 6A retains its source-defined slope reversal near 4.162 mm and 5.9 mm inferred rim.
This is a qualified research integration, not an ordinary all-heuristics pass. Full-pupil
edge transmission, historical glass identity, and production autofocus remain unverified.
The current user explicitly allowed clearly qualified research reconstructions; earlier
permission statements inside the supplied dossier were treated as provenance, not authority.
The normalized display name adds the camera maker; numerical prescription stays unchanged.
The analysis now distinguishes the historical V1 stop value from the V2 derived stop and
states the retained image-circle proxy and slope-reversal qualifications directly.

Public comparison: https://asset.fujifilm.com/www/jp/files/2019-10/6d7be2098b3b5354f88309eda64035ed/rd_report_ff_rd050_002.pdf

## Source-rim, metadata and glass audit — 2026-10-18 UTC

Inspected Fig. 1 of the exact local `patents/US20060007561A1.pdf`, PDF p2, including a
600-dpi close view. Automated figure-envelope screening is contaminated by R/D leaders,
labels and group brackets; crop-edge warnings were rejected, not used as measurements.
The optical rim topology and unchanged geometry/trace guards drive these inferred edits:

| Surfaces | Before SD (mm) | After SD (mm) | Reason |
|---|---|---|---|
| 1 / 2 | 8.3 / 8.1 | 8.3 / 8.3 | Square L1 rim in Fig. 1 |
| 3 / 4 / 5 | 8.0 / 7.1 / 6.8 | 8.0 / 8.0 / 8.0 | Common rim of the L2/L3 doublet |
| 8 / 9 | 7.4 / 8.3 | 8.3 / 8.3 | Square L5 rim |
| 12 / 13 | 10.2 / 12.6 | 12.6 / 12.6 | Square L7 rim, preserving its larger existing boundary |

No aspheric SD, coefficient, radius, spacing, source index or Abbe number changed. The
aspheric slope reversal and outer-pupil/TIR qualifications remain. Surface validation
passes with zero hidden material trim. Exact field coverage still reaches the 21.65 mm
corner near 41.9°. The conservative image-circle proxy still flags 11A, 12 and 13; this
is recorded separately from successful exact chief tracing. Aperture census passes.

Replaced six code-only glass labels with the exact curves they already resolved to:
E-FD2, S-LAH58, J-SF03, S-TIM28, TAC8 and S-BAL3, each explicitly a spectral proxy.
This naming change does not change the selected curves. L6 (1.49023 / 57.5) has no
compatible catalog entry. A short exact-coordinate and PMMA source search found no
source-backed historical material/spectrum identification; it remains Unmatched with
Abbe fallback rather than assigning an unidentified resin a new glass identity.

Normalized the camera name to Natura S under the fixed-camera display convention.
Catalog design focal length now uses the source 24.06 mm rather than computed
24.0557233437 mm. Fixed-camera mount and 135 full-frame format remain correct.
Removed focus sentinels, V1/V2 implementation history and unavailable dossier references
from public prose. Browser review confirms the revised silhouette and disabled focus.

Current default-ray replay uses the actual UI pupil estimate 6.511541399 mm, not the
6.136664 mm EFL/(2f-number) target radius. All six axial and five off-axis default rays
complete all physical surfaces without clipping. The analysis now distinguishes these
quantities after the V2 exact stop calibration. Sequential traces return at the final
physical surface; their `reachedImagePlane=false` flag is not a clipping event.

Final local verification for this audit: metadata generation, `assertCatalogConsistent`,
all eight glass-report suites (9 checks), typecheck, format check, lint, and all 5,125
tests across 301 files passed. Production build prerendered 1,687 routes. All six axial
and five off-axis default rays complete the physical prescription without clipping;
render diagnostics report zero hidden trim. Exact field coverage passes independently
of the retained heuristic/aperture limitations above. Changelog entries use 2026-10-18
UTC. Source PDFs/JPG and scratch renders are excluded from the commit.

## Second live-site review — 2026-10-18 UTC

Compared the final local-site section with the exact Fig. 1 at 600 dpi. The 8.0 mm
L2/L3 common rim was slightly too tall relative to L1 and the rear group. Refined
surfaces 3/4/5 to a common 7.6 mm inferred SD; a 7.4 mm candidate clips one actual
default ray and was rejected. Surface 10A grows from 9.8 to 10.1 mm to share L6's
square optical rim with 11A. This remains an inference, not a published effective diameter.

Surface 10A at 10.1 mm has same-radius-sphere departure −2.451109819 mm and slope
−0.458914898. The public analysis table was recomputed, redundant “supplier unconfirmed”
phrases were removed, and the old interval-arithmetic claim was not extended to the new
rim. Runtime surface checks pass; exact format-chief coverage and the native aperture
census still pass. All six axial and five off-axis default rays transmit; there is zero
hidden trim. The image-circle proxy's previously documented warning is retained.

In the actual color view, checked element numbers, groups I–IV, D1 on L2/L3 only,
the four aspheric markers, both ASPH ×2 inspector badges, native nd/νd and catalog versus
Abbe provenance. All six named proxies resolve to their intended existing curves. L6's
1.49023/57.5 pair still has no catalog match. Exact-coordinate and PMMA source research
found generic resin models, not a sourceable identity or complete measured spectrum for
this element. No nominal resin was added merely to complete the catalog; L6 remains
explicitly Unmatched and its inspector says Abbe estimate.

This is a prime, so no zoom order applies. Production autofocus reaches 0.4 m, but the
patent provides no finite-focus spacings or established group travel. The disabled focus
control and fixed layout at normalized focus/zoom 0, 0.5 and 1 remain correct.
Fujinon Corporation is the canonical 2006 assignee; its October 2004 predecessor rename
is preserved in the corporate-history registry, separately from Fuji Photo Film.
No additional changelog entry was added.

The final 7.6 mm candidate also passes the actual default fan in each R/G/B/V channel
(44 physical rays total), matching the absence of clips at the former 8.0 mm rim.
This is a default-fan containment check, not a full-pupil illumination certificate.

Second-pass final local gates: typecheck, format check, lint, 5,131 tests across 301 files,
eight glass-report suites (9 checks), and production build (1,687 prerendered routes)
passed. Source limitations above remain qualified; no heuristic failure was relabeled
as a pass. Existing UTC changelog entries are unchanged. No patent or scratch file is staged.
