# Samyang 100mm F2.8 ED UMC Macro: source audit

## Job and frozen references

The fixed source is KR20170073883A, Example 1, Table 1, Figure 1. The original sixteen-page PDF and original job card are preserved unchanged. The output stem is Samyang100mmf28EDUMCMacro.

Current main was verified on 2026-10-08 as b7deb22166991aacdbdcae249f67f4932cb28b6b. All 248 restored reference files match the recorded hashes at that commit. The controlling specifications, template, authoring guide, patent-audit guide, glass references, taxonomy and configuration are identified in evidence.json. The CHAT-1.0 workflow ZIP hash is ef9a25e06642c717e3cf4e8da327c3669260036082fdd5f5ef7d5631416b0224.

The fresh clearance CSV contains 67 rows and hashes to dc08b28cb653ebc2b2b1ebc8b2575dbb2e050b258d749cebb77a8a281dd3456b. It was read only. Its scoped approval is an authorization record, not source-internal evidence.

## Gate disposition

The final pair passes the independent technical review as the exact owner-approved infinity/d-line limited model. The final manifest binds READY_FOR_BATCH to the data/analysis, original inputs, source evidence, executable verifiers and clean-extraction checks. Full repository integration remains INTEGRATION_PENDING.

The initial Stage 1 hold and original frozen source baseline are preserved in private supporting evidence. Explicit owner approval resolved authorization for the stated limited model; it did not turn the remaining source contradictions into proved corrections. Stages 2 and 3 were executed in order, and their affected checks were rerun after the two non-optical Stage 4 review corrections.

## Extraction and conventions

All 28 numbered rows and OBJ were directly extracted and visually checked from PDF pages 10–11. Figure 1 on page 12 has fifteen spherical elements in twelve components. Cemented interfaces are rows 8, 11 and 14; the distinctive high-index E3 and low-dispersion E4 correspond to the manufacturer's HR and ED positions.

Positive radius means its center of curvature lies imageward. Native Nd/Vd are d-line by paragraph 0120. No scale or index conversion is applied. All original labels, radii, thicknesses, C values and material names are retained. Row 19(STO) is a powered glass entrance; row 18 is planar. Row 28 prints Dn=1.002 with no image row. No asphere equation or coefficient table applies.

Interpreting C as a radius has two different source-internal supports: the exact aperture is approximately f/2.904, consistent with printed f/2.9, and physical diameters 2C satisfy claim 1. This supports a uniform column convention, not an independently proved stop relocation. The source's visible-wavelength values printed with “mm” are retained literally; the figures label wavelengths NM. No spectral discrepancy is silently repaired.

## Calculated source quantities

- EFL: 98.043026198331 mm; printed 98.04 is reproduced at its displayed precision.
- Derived in-air BFD: 40.641334957119 mm from rear vertex 28; printed Bf=41.375 differs by 0.733665 mm.
- Literal D28=1.002 differs from the derived focus by 39.639335 mm. It is not accepted as a complete image distance.
- First-to-last vertex distance: 123.498002 mm. First vertex to derived image: 164.139336957119 mm.
- Principal planes: H1 is +52.621459609186 mm from the first vertex; H2 is −57.401691241212 mm from the last.
- Functional group EFLs: G1 −752.448606880491 mm; G2 +51.213201905747 mm; G3 −88.286183965629 mm.
- Petzval sum: +0.001053505836275079 mm⁻¹, calculated surface by surface, including cemented interfaces.
- Fifteen elements form twelve components. Standalone element powers and cemented net powers are calculated separately.

The printed f1/f2 summaries remain failed comparisons. No telephoto-ratio claim is made: total track/EFL is 1.674156. BFD is below EFL, so the design is not called retrofocus under that criterion.

Equation 8 (claim 3)'s literal T1/T2 is 0.362756543 and fails the stated range 2–3. Its reciprocal, 2.756669779, is a diagnostic observation, not a correction. Compound-group Nd/Vd aggregation is undefined; no effective group index is invented. A summation hypothesis is separately identified in the independent baseline.

## Aperture: correction to the clearance premise

At row 18, C=11.92834 interpreted as a radius gives paraxial f/2.802621859. Exact spherical Snell tracing instead gives an entrance radius of 16.879827035 mm and f/2.904147833. The exact result agrees with the patent's printed f/2.9.

The literal curved face 19 at C=10.7 gives almost the same exact f/2.904327. Aperture agreement therefore does not distinguish the stop planes and cannot prove moving STO from 19 to 18.

Imposing every raw C rim limits the axial entrance radius to 16.860875033 mm, or effective f/2.907412160, at row 9. Rays filling the full row-18 iris slightly exceed C at rows 8, 9, 10, 11 and 19. These source-limit observations are retained. The full nominal iris bundle does not pass every raw rim.

## Approved limited model, to be authored in Stage 2

The owner explicitly approved these exact choices on 2026-10-08:

1. Place the planar stop at row 18 while retaining the literal 19(STO) source conflict.
2. Use the exact iris-derived model aperture, approximately f/2.904148. Keep printed f/2.9 and marketed f/2.8 separately.
3. Use the derived all-air image gap of 40.641334957 mm. Preserve D28=1.002 and Bf=41.375 as unresolved source references; do not invent a cover glass.
4. Reduce exactly three modeled clear semi-diameters: S7 from 15.570 to 15.555 mm, S10 from 13.030 to 12.950 mm, and S26 from 13.230 to 12.720 mm. Leave all other C values and the physical stop radius unchanged. Retain the default 90% gap-sag allowance.

The raw 26→27 intrusion is 97.571414%, above the 97% ceiling, and raw 9→10 is 91.115151%. The specified reductions provide the required margin. They are modeled clear apertures, not corrected source values. The maximum proposed intrusion is 89.90726014%; no gap-sag override is necessary.

A hypothetical plate at assumed n=1.5168 would require about 2.1533 mm thickness to explain the BFD difference. Its material, dimensions and position are neither prescribed nor uniquely determined. It is not modeled or asserted to exist.

## Bounded diagnostic checks and tradeoff

The template calls for rays to first clip at exterior element edges or air gaps, rather than inside cemented groups. This is a modeling and containment rule, not proof that the patent's physical optics are impossible.

An earlier two-rim proposal preserved all raw-admitted axial rays and passed a 215,209-ray grid, but a denser independent grid found two first clips at cemented row 11 near 0.778° field. Its exact witness is inside an admitted axial-boundary ray at every preceding surface. A centered upstream rim reduction cannot remove that witness while preserving the entire raw-admitted axial bundle. The witness and rejected variant remain in evidence; no claim of continuum-wide absence is made.

The final bounded diagnostic therefore uses the conservative three-rim default-90% option above. Exact on-axis admission changes from entrance radius 16.860875033171 to 16.757622823560 mm. The corresponding admitted-aperture f-number changes from 2.907412160 to 2.925326200, a 1.221004992% geometric axial pupil-area reduction. The physical iris remains 11.92834 mm and its iris-derived nominal aperture remains f/2.904147833. The smaller admitted bundle must not be conflated with that iris setting or with marketed f/2.8.

Author sampling covers 215,209 exact d-line rays at infinity, 41 fields to the 36×24 mm diagonal at 12.443000°, 83 radial stations including dense rim annuli, and 64 azimuths except on axis. Independent sampling covers 1,679,697 rays on a different denser grid. Neither finds a first clip at a cemented interface for this fixed proposal. These finite grids cannot establish absence for all possible rays or fields.

On the independent grid, no previously admitted sample is lost at the default 0.6 field. The full diagonal loses 153 of 5,304 previously admitted samples. Added clipping occurs near the axis through 0.4 field at S7/S10 and from 0.9125 field to the edge at S26. Counts from a nonuniform grid are not flux percentages. Only the separate exact circular on-axis pupil calculation supports the 1.2210% area figure.

Actual frozen buildLens, validateLensData and production-path render diagnostics were rerun independently for the in-memory proposed transform. They pass, with zero hidden trim. This is not an authored candidate or an integration gate. No finite-focus or polychromatic validation is claimed. No additional rim exploration is planned before the owner decision.

## Glass audit

Thirteen distinct native coordinates were compared with freshly retrieved authoritative HOYA, OHARA, Schott, Hikari, Sumita and CDGM catalogs. The named HOYA families are coordinate-compatible within 4×10⁻⁶ in nd and 0.01 in Vd. Modern hyphenated catalog names are kept separately from the patent's literal names. Catalog matches do not establish production supplier or melt identity.

Relevant catalog rows, coefficients, residuals, retrieval URLs and hashes are preserved in evidence.json. No final spectra or glass annotations are authored yet. The independent reviewer has not yet performed the candidate's external-catalog review.

## Product correlation and focus

The fresh official product page, section and 2022 catalogue support the 15/12 construction, HR E3, ED E4, full-frame 100 mm f/2.8 identity, 67 mm filter and nine documented mount variants. The webpage rounds MFD to 0.30 m; the original card's 0.307 m remains a distinct source claim. Official launch on 2015-04-02 precedes patent filing on 2015-12-21. This chronology is recorded, not treated as identity proof or a legal conclusion. No production-exact prescription is asserted.

Focus status is NO_INTERNAL_RECONSTRUCTION. Only infinity is tabulated. Paragraphs 0051 and 0065 identify fixed G1 and objectward movement of E3–E15, but publish no relative travel or near-state gaps. Production 1:1 magnification and MFD do not supply a near prescription.

## Independent review and replay

The frozen source-first baseline fingerprint is 096d4cedc81952d2617db4f59b428705d06b7041bab5c06ef9c7858100df873e.

The reviewer separately transcribed Table 1 and wrote ABCD, angle-sequential and exact spherical code before candidate exposure. Original-card and assignment clues were disclosed. Its three programs replay byte-identically in a clean directory. The unchanged input text, original code, output texts, hashes and full review report are embedded in evidence.independentPass. The portable verifier reconstructs these into a temporary directory and reruns them without reading author results as inputs.

Both source passes conclude that stop relocation and terminal-plane replacement lack the required two eligible internal evidence categories. Figure 1 is structural, not an aberration figure. Owner approval could authorize a disclosed limited model; it would not transform these choices into proved source corrections. Any later diagnostic review is recorded separately from the frozen baseline.

## Quantitative claim map

- First-order quantities, group and element powers, Petzval and conditions: results.sourceModel, recomputed from evidence.rawPrescription.
- Exact iris aperture and raw geometry: results.sourceExactAndGeometry.
- Independent source computations: evidence.independentPass and executed results.independentBaseline.
- Proposed rim and ray diagnostics: evidence.modelingDecisions.MD05 and the supporting authoring archive.
- Product facts: evidence.productCorrelation and the primary-source URLs and hashes.
- No analysis-file claim map applies because Stage 3 has not begun.

## Pending integration

INTEGRATION_PENDING. Final-candidate typechecking, corpus checks, metadata generation and build/prerender are NOT_RUN. No Git write, PR, push or deployment was performed. Targeted in-memory diagnostics are separate from integration. The queue CSV, index, shared engine and specifications remain unchanged.

## Stage 2 construction record, 2026-10-08

The exact owner-approved bounded changes are implemented in the actual data file. No other source radius, glass thickness, air gap before S28, index or Abbe number changes. Every other C value is retained. The final TypeScript object is read back by a strict literal parser and checked against the transformation ledger; independent TypeScript AST parsing rejects duplicate keys, expressions, spreads and computed properties. Wrong-sign and collapsed-gap mutation tests fail as intended.

Exact spherical shared-band extrema give a maximum rim angle of 37.442196916°, minimum glass thickness of 2.000000 mm, maximum air-gap intrusion of 89.907260135%, and minimum air clearance of 0.100000 mm. The extrema check is analytic for these spherical surfaces, not only a sampled rim test. There are no conic-polynomial departures or aspheric domains to audit.

Parsed-file independent ray checks and the actual project exact tracer each cover 49,200 d-line rays at infinity: twelve fields and four aperture scales. All raw project results remain in the record. The engine reports 1,042 noBracket terminations before the first surface for rays outside the finite spherical clear cap. Its separate analytic cap-miss classifier proves all of these to be blocked aperture misses; there are zero unproven tracing failures. These are not hidden or relabeled as successful rays. No sampled first clip is at a cemented interface.

The same immutable infinity geometry is verified at focus-slider coordinates 0, 0.25, 0.5, 0.75 and 1. No finite-focus optical state or travel is claimed. All fifteen selected source-named glass families resolve in the actual runtime. Their explicitly stored C/F/g anchors are recalculated from authoritative HOYA coefficients; this algebraic spectral check is not a chromatic-performance certificate.

The real LensDataInput type compiles under TypeScript 5.9.3 without lifecycle hooks. Prettier 3.8.1 uses the frozen project configuration. Actual buildLens, validateLensData and production-path renderer checks pass with zero hidden trim.

### Separate current-main compatibility check

Main advanced to 14da71d94ed3ab6ccf7aef70066f1e49670440ed via PR 772. The original b7deb221 baseline is preserved. Changed relevant files were fetched at the new commit and checked against their Git blob identities; unchanged loaded files remain identified by the base snapshot and complete commit comparison.

The data specification now clarifies native e-line C′/e/F′ channels. This patent explicitly supplies d-line coordinates, so that change requires no conversion. A separate current-main run reproduces identical EFL, iris, all spectral indices, glass resolution, geometry, renderer and 49,200-ray results. No shared engine, catalog or specification was modified. This targeted compatibility check is not full repository integration.

## Stage 3 analysis record, 2026-10-08

The analysis was written only after the Stage 2 checkpoint passed clean replay. Data bytes remain unchanged at SHA256 0862624178d846e817eafa44a3aa87a28302b512593ffadb9cc0b3ba9d4f2450. It follows the required identification, architecture, element, glass and focus sections; an asphere section is correctly omitted for an all-spherical example.

The claim map in evidence.analysisClaimMap ties the optical prose to actual parsed-file calculations, the patent, manufacturer sources and primary catalog coefficients. The author manually checked each element's sign, shape and cemented role, the negative/positive/negative group architecture, the explicit source conflicts, and the difference between iris aperture and admitted beam. No aberration correction, APO status, production-exact match or 1:1-state performance is inferred from the prescription.

The analysis distinguishes the manufacturer's 0.30 m specification-table rounding from its 0.307 m prose, and makes clear that no near-focus travel is modeled. Patent diagrams, optional filters, source spectra and modern catalog approximations are not conflated. The modest axial loss and additional off-axis clipping are disclosed together with the finite, monochromatic infinity-state validation scope.

Paraxial pupil calculations were additionally recorded from the actual data: entrance position +91.516361480 mm from the first vertex with radius 17.491304773 mm; exit position −29.554228257 mm from the last vertex with radius 12.523195555 mm. These Gaussian pupil radii differ from the exact iris-derived axial launch radius and are not substituted for the operational aperture calculation.

Stage 3 structure and metadata preflight passes. Independent semantic review and final byte-bound package replay remain the Stage 4 gate. Full integration remains NOT_RUN.

## Stage 4 review corrections

R01: “Claim 8” was imprecise shorthand. The source has seven claims; equation 8 appears in claim 3 (PDF p. 4). The current data sourceErrata note, analysis and audit now identify equation 8 (claim 3). The frozen independent source baseline is unchanged, with this later annotation explaining its same shorthand. A recursive parsed-value comparison proves the only data-object change is the text of sourceErrata[3].note. All optical and layout values remain identical.

R02: The analysis now includes a complete table of all eight numbered conditions. Conditions 3–5 remain underdetermined because compound-group nd/νd aggregation is undefined. Condition 6 distinguishes the formal lower bound 0 from paragraph 0032's inconsistent 1, and separately reports printed-Bf versus derived-air evaluations. Condition 7 explicitly identifies the computed G2 denominator; its passing ratio does not correct the printed f2 summary. No source prescription or computed optics changed.

TypeScript AST, focused typechecking and both frozen/current-main runtime checks were rerun against the citation-corrected bytes. All prior geometry, iris, spectral and ray values remain unchanged. Dependent Stage 2/3 verification is rerun below before final approval.

## Final independent review and reproduction

The sole reviewer approved the exact corrected data/analysis pair under the lens-specific authorization. The original source-first baseline remains unchanged at fingerprint 096d4cedc81952d2617db4f59b428705d06b7041bab5c06ef9c7858100df873e. The later candidate-aware report is preserved verbatim in evidence.independentCandidateReview, separately from that baseline.

The reviewer independently retrieved the primary HOYA catalog, manufacturer section, catalogue page and launch notice. Its portable reviewer_verify.py reads the actual TypeScript with Node 24+, independent source inputs and thirteen relevant catalog excerpts; 231 assertions pass. Stored calculated answers are not used as computation inputs. Exact original PDF/card hashes and the frozen source-input fingerprint are checked. The main verifier also reruns all three unchanged independent baseline programs in a temporary directory.

Both independent portable review and the main source/model verifier reproduce their stable JSON in separate extraction directories. The twelve-file final dossier contains the canonical nine artifacts plus reviewer_verify.py, reviewer_inputs.json and reviewer_results.json. Python standard library and Node 24+ are declared replay dependencies. The recorded compiler and real-project renderer/tracer checks are not falsely described as rerun by Python alone.

Data SHA256: d0e4be71a758ea4c3df4ae76812e103a136d09f1a318c855535d8eba694db978.
Analysis SHA256: 32800d4419b58d8724ace9b90769122da175c5d1547b23c8d7ac8d77fbc771ea.

Final archive digests, clean extraction/member verification, independent sealed-package review and fresh Drive readback are reported in external verification receipts to avoid circular self-hashes. The originals, source mismatch observations and rejected two-rim counterexample remain available. No public repository, shared engine/specification, queue CSV or index change was made.
