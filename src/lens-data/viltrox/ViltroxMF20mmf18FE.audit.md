# Viltrox MF 20mm F1.8 FE — technical audit record

## Job and reference versions
CN209606699U, Example 1, stem ViltroxMF20mmf18FE. Original card and PDF bytes retained.
Read-only LensVisualizer snapshot commit 3d44a1be91db853725ac841b65a9e228f2c544ef.
Reference identities and hashes are in the manifest; workflow CHAT-1.0 (2026-09-11).
No existing lens data or prior lens results seeded the extraction. This record is author construction verification;
it is not the separate Stage 4 independent audit. No Git writes, integration, metadata generation or full build ran.

## Extraction and conventions
Original PDF text was extracted with pdftotext and compared against rendered PDF pp10,12,13,15.
The first numerical embodiment is §0090 on PDF p12, specification 7/9; its coefficient table is §0092 on p13.
Indices are the native Nd/Vd coordinates from §§0078–0089, not substituted catalog precision.
All radii/thicknesses/gaps retain literal source text and locators in evidence. Positive radius centres lie imageward.
The standard sag equation, including (1+K), was read from the rendered equation §0098. K is unchanged;
A4 through A12 retain their printed values. The A10 term is present in the equation/table although prose §0097
omits order10 from its short list. The source supplies no exact BFD, EFL, per-surface SD or physical stop diameter.
The stop is 3.54 mm after L22 rear within the 10.13 mm M5 gap. No plates or dummy planes were found.

## Model transformations and approved approximation
L13 and L14 are explicitly cemented in §0074 and Fig1, yet §0090 prints −70.25 and −70.15 mm for their common surface.
Both readings were visually confirmed. Parallel invention CN110045484B (same title/inventors/applicant and filing date),
rendered p12 §0090, repeats the discrepancy. Example2's different common boundary does not correct Example1.
No exact shared sphere can preserve both values; no averaging, adhesive layer or alternate example is introduced.
The user conditionally authorized a sufficiently accurate approximation. The model retains the first printed radius,
−70.25 mm, explicitly as an approximate interface rather than a uniquely corrected patent. Both source values remain.
The acceptance scope is a geometric visualization/model at the published base state, not fabrication or production MTF.
The comparison criterion is 0.01 mm for EFL, BFD, fixed-image intercept displacement and surface-hit displacement:
one printed length least digit, a transparent model-sensitivity criterion rather than a claim of source uncertainty.
The source's two-decimal indices further limit fidelity. The physical stop radius and image plane are held fixed across the two ray comparisons.
Both endpoint models must pass the same geometry and sampled
ray-containment checks. The raw source mismatch remains FAIL as an observation; a distinct acceptance check resolves
its treatment. Computed infinity BFD locates the image; no exact image distance is claimed to have been published.
Stop size is calibrated to F1.8. Matching this target is calibration, not independent physical diaphragm evidence.
SDs are inferred from exact sampled ray envelopes and current rim/edge/gap rules; the front diameter is modeled at56 mm,
consistent with the source >54 mm statement. Clearance is constrained at L31 and M4; blanket clearance ratios were
not imposed in place of physical checks. Neither these SDs nor their figure resemblance establishes production hardware.

## Glass review
Seven native coordinate pairs remain unchanged. Primary publisher coordinate text was checked for HOYA FCD1,
OHARA S-TIM22 (S prefix preserved), Schott SF1, and CDGM H-ZF52/H-ZLaF75B/D-K59. Candidate residuals are computed.
The six vendor project shards were screened for leads; HIKARI E-LAKH1 remains a secondary project-catalog lead, not a
verified primary identity. A targeted Sumita search returned no usable matching primary row; this is not a catalog-wide
absence proof. Coverage is explicitly partial. Generic Unmatched class labels are retained throughout. Some candidate
indices lie outside the project's narrow runtime match window despite rounding compatibility; no values are replaced.
No catalog spectrum is assigned as measured prescription data, and no supplier, melt, fluorite crystal, APO or secondary
spectrum performance is claimed. Manufacturer wording “fluorite glass” is not treated as a CaF2 material identification.

## Numerical and geometry results
Portable verifier reads evidence and, when present, the actual final data file. Scalar reduced-angle propagation and a
separate ABCD multiplication agree, with an analytic thick-lens reference test. All applicable refractions contribute
phi/(n*nPrime) to the surface-by-surface Petzval sum. Standalone element powers and cemented/group powers are separate.
Both junction choices satisfy the source's total-track upper bound and first condition. The field is a lower-bound
statement, not an exact 94° full-field datum: condition2 is reported as a feasible half-field interval, with47° only a
boundary diagnostic. These inequalities cannot uniquely select the radius.
The exact 3D vector Snell calculation tests 300 rays per variant: fields0°,14.1°,28.2°; aperturesF1.8/F4/F8/F16;
stop radial fractions0,0.5,1 and pupil azimuths every30°. Sampling represents the usual0.6 half-field domain. It is not
proof over every field/pupil coordinate. Full-field exploratory tracing/aiming had inaccessible rays and is not certified.
Geometry checks actual sag/slope, conic domain and current conic margin, own-rim thickness, shared radial material bands,
and air-gap intrusion. Stationary extrema use512 derivative brackets plus bisection, with endpoints. This is portable
geometry checking, not LensVisualizer rendering or proof of a global root-isolation theorem.
The accepted numerical sensitivity is in results.comparisons.interfaceSensitivity; all values derive from execution.

## Focus
NO_INTERNAL_RECONSTRUCTION. Patent §0070 fixes G1/G2 and moves G3 for focusing, but supplies no finite-distance spacing
states or travel. The manufacturer says manual focus and 0.25 m shooting distance. That endpoint does not establish a
focus law, so no internal motion, endpoint state, breathing or close-focus performance is invented.

## Correction and discrepancy register
1. Raw shared-radius disagreement retained. Approved approximation −70.25 mm, alternate−70.15 mm tested; no unique correction.
2. No source index substitutions. Rounded native Nd/Vd govern first order and exact ray checks.
3. No claim that product optical geometry exactly equals this embodiment; correlation is convergent, not manufacturer-confirmed.
4. Product page's16 mm flange entry mixes E/Z context; not used as Sony E optical BFD.
5. Exact field/throughput, production MTF and full spectral performance unavailable; no conclusions claimed from paraxial agreement.
6. Current project rearPlates rule supersedes workflow's legacy generic omission language if plates exist; none exist here.

## Quantitative claim map
F01/F02: element/group counts from extracted topology. F03: computed EFL/BFD/track/principal planes/Petzval.
F04: approved interface sensitivity. F05: raw conic/asphere coefficients. F06: inferred SD/geometry disclosures.
F07: final-data standalone element powers. F08: focus mechanism and absence of travel. F09: product marketing values.
F10: first-order group and cemented powers, patent condition calculations. Stage3 extends this map to its exact prose.

## Gate disposition
Stage1 readiness binds to the approximate-model scope and exact final hashes; it does not repair the patent text.
Subsequent stages require their own parsed-data and analysis checks before advancement.

## Pending integration
Real TypeScript, Prettier, buildLens/validateLensData, runtime glass resolution and render-trim diagnostics are NOT_RUN.
Full build and batch-wide checks remained open at packaging. Closed 2026-10-20: integrated and checked in the repository.

## Stage 2 checkpoint and Stage 3 reconciliation
The data revision is unchanged during analysis authoring:
SHA256 `6b258a87d0f66ce1ca1c6860d229d563a8b6e59b2bbd12e2ebeaebcbf767c45e`.
Verification was extended with computed pupils, stricter element ownership and asphere/source matching, a non-finite
numeric parser fixture, and numerical analysis checks. The Stage2 checkpoint was reopened and clean-replayed after
these verifier additions; approval is bound to the final checkpoint hashes, not the earlier verifier bytes.
The module loader accepts only a documented JSON-literal subset with the exact type import/const/satisfies/default-export
envelope. It rejects duplicate keys, expressions, identifiers, spreads, non-finite literals and leftover text. It is not
a general TypeScript parser or compiler. An intentional radius mutation is detected by the source-mapping branch.
The final data is the implemented-model input: radius, spacing, medium, aperture, element ownership and aspheres are
compared against source transformations, then independently recomputed. No hand-edited duplicate application object
is used as the numerical substitute for the final file.

## Stage 3 claim-to-fact map and manual prose review
| Analysis claim or section | Evidence / executed fact | Governing revision |
|---|---|---|
| Patent metadata and Example1 | Original PDF p1 and §0090; data metadata | final data hash above |
| 12 elements / 9 air-separated groups; three functional groups | F01/F02; extracted cemented topology | final data, evidence |
| System EFL/BFD/vertex track/image track/principal planes/Petzval | F03; implementedModel.firstOrder | final data |
| G1/G2/G3 and G1+G2 powers; pair/triplet powers | F10; sourceModel.diagnosticVariants[0].groups; exact source-transform equality | final data/source approximation |
| All 12 nd/νd/glass/focal-length first lines | F07; implementedModel.standaloneElements; analysis-element-numerics | final data |
| Per-element shapes and group membership | Source §§0074–0089 and actual bounding curvatures | final data |
| Glass candidate rows and residuals | comparisons.glassCoordinates and primary-source IDs | evidence; no values transferred |
| Focus mechanism and no travel | F08; source §0070; empty var | final data/evidence |
| Asphere convention/coefficient table | F05; source §0092/0098; parsed-data source mapping | final data |
| Source total-track/conditional inequalities | F10; executed variant comparison; exact field remains unknown | source and final approximate model |
| Stop SD and nominal F1.8 | implementedModel.stopSdMm/pupils; calibration disclosure | final data |
| Geometry checks and finite ray scope | F06; implementedModel.geometry/rayChecks | final data |
| Interface EFL/BFD/image/hit changes | F04; comparisons.interfaceSensitivity | both declared source-radius alternatives |
| Marketed20 mm/F1.8/0.25 m and manual focus | F09; Viltrox primary product page | metadata only |

Manual review distinguishes power sign from aberration contribution, avoids a retrofocus label when BFD<EFL,
preserves the source radius conflict and its approximation status, and states the absence of full-field/MTF/spectral
certification. Sources are conventional patent locators and primary URLs, without chat-only citation markers.
No asphere departure is quoted at an unverified published rim. No vendor identity is inferred from brand or country.
The finished analysis describes the final data revision and contains no readiness badges or integration claims.

## Stage 4: independent source-first audit, 2026-10-02

PASS A was completed and frozen before opening the candidate pair/dossier. Only the job, original PDF,
controlling references, and knowledge that an unspecified conditional approximation approval existed were exposed.
Rendered original PDF pp10–13/15 independently established the prescription, cementing contradiction, asphere
coefficients and equation. A fresh source array, scalar reduced-angle trace and separate matrix calculation are retained
verbatim in evidence.independentPass; the independent computation is also preserved as stage4_frozen() in the verifier.
Frozen fingerprint: 16b3054f842ea96df6246963e1abb67d0054e546627ff2c89a40addd072facb5.
This records bytes and sequence, not a cryptographic proof of blindness.

Candidate archive SHA256: 8f60a1035c236ad5e133c5a7ded7fa0ec37b4e101e26422b80f7c0d2559c4eee.
Candidate data SHA256: 6b258a87d0f66ce1ca1c6860d229d563a8b6e59b2bbd12e2ebeaebcbf767c45e.
The original candidate hashes were checked before reconciliation. The user’s conditional approval permits a sufficiently
accurate bounded junction approximation; it does not establish a unique patent correction or authorize production claims.
The adopted −70.25mm shared boundary remains a labeled approximation; −70.15mm is preserved as raw source/comparison.
No optical value was changed by this audit. The paraxial baseline adopted branch agrees with final-model EFL/BFD/track,
principal planes, standalone/group powers and per-boundary Petzval. The alternative and nonphysical zero-air source
branches remain frozen rather than retrospectively overwritten.

### Independent exact-ray reconciliation

A newly written Stage4 implementation uses tangent/normal vector Snell decomposition, Newton sag intersections,
a fixed launch plane z=−50mm, and 21-stage field/pupil continuation. It does not call the author's meridional aimer.
After candidate exposure, the sample grid intentionally matches the author's grid for direct comparison; this is
method independence, not a second blind prescription extraction. At the authored iris it reproduces maximum fixed-image
shift0.0032713405mm and maximum surface-hit displacement0.0033591372mm for300 rays per alternative. All samples clear.
The declared0.01mm criterion is a one-source-length-digit geometric criterion, not a diffraction or production-quality limit.

### Runtime aperture finding and preserved failure

Actual LensVisualizer expands the iris to11.110053110746845mm using exact on-axis calibration; stored10.721716386631805mm
is a paraxial calibration only. Fresh exact calibration independently reproduces the runtime radius within1e−8mm.
The analysis now distinguishes these values. The runtime half-field is41.20859967687304degrees. At its actual default
0/0.3/0.6 field fractions (0/12.3625799/24.7251598degrees),300 rays per branch at f/1.8,f/4,f/8,f/16 pass, minimum
non-stop clearance0.19741265mm; maximum image/surface differences0.0029963513/0.0030181686mm.

The expanded runtime-iris test at0/14.1/28.2degrees FAILS an all-rays-clear assertion. The outer meridional f/1.8 sample
at28.2degrees hits surface13 at12.91005884mm/12.91000068mm, outside its modeled12.8mm clear aperture in both radius
alternatives. Both outcomes are physically CLIPPED. Continuing through extrapolated geometry causes backward surface14
intersections−0.01907408mm/−0.01898999mm. That continuation is not a valid ray through the model's material.
The other299 samples transmit; their maximum image/surface differences are0.00329612/0.00341734mm. The failed
no-clipping observation is retained in comparisons.runtimeExpandedNoClipping with a separate passing disposition:
both alternatives clip at the identical modeled aperture, and no full-field transmission is claimed. This is not a
geometry-validator failure converted to NOT_RUN, nor an aperture adjustment made to conceal invalid material.
The contract permits a limited model with disclosed, verified scope; the required modeled material geometry and
actual default-display sampled clearance pass. Full-field throughput remains uncertified and integration must retain
this limitation. No new user decision is needed for this already-authorized bounded approximation.

### Corrections and evidence additions

- Data display wording: “INFERRED STOP AND CLEAR APERTURES” becomes “INFERRED IRIS DIAMETER AND CLEAR APERTURES”
  because the stop location is actually published. Header/analysis add exact runtime-iris and vignetting disclosures.
- Updated glass coverage: Sumita primary K-PBK40 provides1.51760/63.5 as an additional L36 coordinate candidate;
  HIKARI2025 catalog p30 establishes E-LAKH1 discontinued2009-09-01. Its historical numeric row remains unverified.
  No glass label, source index, spectral field or supplier identity was substituted.
- Data/analysis formatted with actual Prettier3.8.1 and controlling config. Portable parser expanded to a fail-closed
  literal grammar accepting quoted/unquoted keys and trailing commas; malformed/executable inputs still fail.
  Seven semantic mutation fixtures cover radius/sign/index/conic/exponent/cement/gap corruption.
- Parallel CN110045484B detail remains an author-recorded primary-source check; this auditor's network retrieval failed.
  Its conclusion is not essential: the original selected patent itself visibly contains the repeated radius conflict.

### Targeted project execution and scope

Actual checkout HEAD at verification was b3cf7d645ca21a4c3eec8c0f3fb20839fb2399f8. A read-only git diff against pinned
3d44a1be91db853725ac841b65a9e228f2c544ef showed no differences in src/optics,src/types,defaults or lens taxonomy; the newer
commit concerns unrelated article referrers. Tested source hashes and runner source are retained in evidence.
Node24.19.0, rolldown1.0.3, TypeScript5.9.3, Prettier3.8.1 were used. No checkout writes, lifecycle scripts, metadata,
corpus sweep or full build were run. Actual buildLens/validateLensData pass; all12 render elements have zero hidden trim;
real LensDataInput type checking passes; resolveCompatibleGlass returns null for all12 intentionally Unmatched labels.
These are targeted runtime checks, not a complete integration gate. Historical runtime results are bound to exact final
data bytes. The standalone Python replay recomputes independent source/model/ray checks but does not impersonate a Node
runtime re-execution. Full build/corpus/publication had not run at packaging (closed 2026-10-20: integrated).

Final packaging: canonical nine files only, original PDF/card unchanged, manifest hashes final bytes, fresh ZIP extraction
and portable replay required. Batch readiness applied only to this disclosed bounded static approximation and was
separate from integration/publication. Stable replay output is compared without overwriting the packaged results.

Clean extraction/replay completed successfully. All nine root members, original bytes and manifest hashes were verified.
The extracted verifier returned zero; regenerated JSON matched packaged results exactly, including preserved FAIL observations.
The packaged results were not overwritten during replay. Closed 2026-10-20: integrated into the repository.

## 2026-10-20 — Deployment validation and wording pass

Source re-read from the original PDF (text layer spot-checked against 150 dpi renders of pp.12–13): all 22 surfaces
(R, d, nd, νd), the stop position (3.54 mm after L22, 6.59 mm to L31 from M5 = 10.13 mm), both cemented groups and
the 12 asphere values (K, A4–A12 on both L36 faces; (1+K) convention, K used directly) match. Gaps M1–M8 come from
§§0074–0077, whose narrow radius ranges fit Example 1 only. No variable-gap table is printed; the model is infinity-only.
No transcription mismatches. The −70.25 / −70.15 mm cemented-interface conflict is a source inconsistency, retained as
disclosed.

First order: the patent prints no EFL, F-number or back focus for the example. Model EFL 20.3135 mm (marketed 20 mm),
paraxial BFD 17.788 mm, first-vertex-to-image 115.258 mm against the stated L ≤ 116 mm. An independent exact
meridional trace puts the chief ray at the 21.63 mm corner at a half-field of 47.1° (2ω ≈ 94.2°; patent "> 94°";
LensTip 94.5°). Conditional expressions: FL12 = 164.63 mm, S = 56.79 mm, (|FL12|+S)/BFL = 12.448 (10.6–12.5) and
12.448/tan 47.1° = 11.567 (9.9–11.6). audit:surface OK; audit:image-circle 0 undersized; audit:field-coverage 100 %.

Product comparison: Viltrox, LensTip and photozone list 12 elements / 9 groups, matching the patent figure and the
model. Viltrox lists four ED elements (the four 1.50/81.6 positions), one double-sided asphere (L36) and one
high-transmission element (not identifiable from the patent), F1.8, 0.25 m, 14 blades and Sony E / Nikon Z versions.
No public optical-construction diagram was found, so no element-by-element diagram comparison was possible.

Fields changed in this pass: header comment (process vocabulary removed, facts kept), `subtitle`, `specs` (two
model-scope lines replaced by computed f, design F-number and asphere count), element roles for L13, L14, L22, L31,
L33 and L36, `apd: "inferred"` with `apdNote` on L14, L22, L31 and L33, `focus.description`, doublet label C1. The
analysis gained romanized inventor and applicant names and lost references to the production pipeline, runtime
checks and integration status. No optical value changed.

Closed the same day: `name` is now "VILTROX MF 20mm f/1.8" and `lensMounts` adds `nikon-z`; Viltrox sells the same
optics in Sony E and Nikon Z mounts. Open: glass strings remain "Unmatched"; the patent prints two-decimal indices.
