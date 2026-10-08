# Sigma 28mm F1.4 DG HSM | Art: consolidated source and model audit

## Job and controlling references

The unchanged original job card selects JP2019219472A, Numerical Example 5,
with stem Sigma28mmf14DGHSMA. The original PDF/card hashes are unchanged.
The controlling project revision is main 53470da5a5cbda1807d1e523fbc71963e5a1adc7,
with CHAT-1.0 protocol/dossier/Stage 4 instructions. Current physical rearPlates,
conic, actual-rim, shared-band and aperture semantics control.

The Stage 3 parent archive SHA-256 is
8ef7b6c338067f45ee344e266ebda1fddc145d59e31fe8d27016a745563e0106;
its manifest is1520c673ccafda06bb8124d140dde9b0ffad022c89b0dc61ad398beab8a8d800.
The originally reviewed data hash is
51b03e8bf14528021ef4285b6b4a7be43f33840951ff91079ca063d7827812a8.
Exact original-candidate file hashes remain in evidence.independentPass.
Final approval binds only to the final manifest's exact bytes.

## Independent source-first review

Before candidate exposure, the reviewer rendered and manually re-entered the
original Example 5 tables, equation, conditions and focus data. The original
card contained only four identity fields and no numerical conclusions. No author
handoff, prior calculations, candidate file, pairing/queue note or other-lens
model supplied baseline inputs. Adjacent examples appeared incidentally on the
same patent sheets. Coordinate searches also returned unrelated patent snippets;
those patents were not used as this prescription's source.

Source locators: PDF20–22/printed19–21, paragraph0084 prescription/aspheres/states;
PDF12/printed11 paragraphs0050–0053 index/asphere definitions; PDF26/printed25
Example 5 condition column; Figure21 PDF29; identity PDF1–2 including the PAJ
wrapper. The source uses nd/vd at587.56nm, signed imageward-positive radii and
millimetres, without scaling. K already appears as1+K in the sag equation;
no conic conversion is warranted.

The immutable baseline fingerprint is
b340a789c8eb80213cb8228216c884fe9c0621787d40e82e9f37def4e6e4af8c.
Its manifest SHA-256 is
e49598116791bf21cbbe0493be98d0a7bef2f52fd412941d67ea7d9aaeec784e;
its 13-file checkpoint archive SHA-256 is
462274a811a9a753b0ad0d9a34f8b8aad60e9f145106e8a644303a62eaea3b8a.
The fingerprint canonicalization and original inventory are retained in evidence.
The complete fresh source code and exact source/catalog inputs are preserved
inside the consolidated verifier/evidence and rerun on every portable replay.
The frozen baseline is not retroactively altered after reconciliation.

Pass B necessarily saw author methods. Its additional candidate checks use a
separate strict JSON-only reader for this exact literal TypeScript envelope,
feeding the frozen scalar reduced-angle trace and separate y/angle ABCD path.
These are distinct from the author's parser and reduced-angle matrix code.
Fresh procedural input/method independence is disclosed; no cryptographic proof
of blindness or independence from shared mathematical conventions is claimed.

## Corrections and reconciled observations

### A4-COND9: adjacent-column transcription

The candidate evidence, data header and analysis attributed1.88 to condition9
of Example5 and presented a failed comparison to1.88519501189984 as an unexplained
source discrepancy. A new600dpi rendering of the original condition table
clearly shows Example5=1.89 and Example6=1.88. The frozen independent Pass A had
already entered1.89 before the candidate was opened.

Corrected the source transcription/reference from1.88 to1.89, removed the
unsupported discrepancy claim from the clean pair, and reran the comparison:
observed1.88519501189984, reference1.89, residual-0.00480498810016,
tolerance0.005, PASS. The prior failed observation against1.88 is retained only
in this correction history and evidence.correctionRegister. It is not a surviving
patent inconsistency. No radius, spacing, index, coefficient or aperture changed.

The verifier previously hard-coded the erroneous1.88 comparison and a desired
failed status. It now computes the observed/reference comparison from the corrected
raw source value and derives its status normally. No tolerance was widened.

### Reference-plane and execution clarifications

The analysis now explicitly separates the computed physical paraxial BFD
38.978944616mm from the authored last-powered-vertex-to-image spacing38.9788mm.
Both retain the physical1.45mm LPF. The lens-only air BFD38.481006651mm and the
full physical system's rear principal plane remain distinctly labeled.

The author had already corrected an earlier ambiguous rear-principal-plane
label: lens-only+9.762800632mm versus full-system+10.260738597mm, both from
source30. This distinction was independently confirmed and retained.

Actual targeted application optics checks became available during Pass B.
Their results replace the corresponding NOT_RUN entries, while type checking,
Prettier, production renderer/hidden trim and integration-wide checks stay NOT_RUN.
No new workflow exception, aperture alteration or source repair was introduced.

## Source/model reconciliation and numerical methods

Every final radius, glass index/Abbe coordinate, physical spacing, focus endpoint
and asphere coefficient matches the frozen independent prescription. The source
LPF surfaces31–32 map to rearPlates with physical thickness1.45mm, nd1.52301,
vd58.59 and gapAfter1mm. Source30 retains its physical air gap. Source22 maps to
exactly one STO. Cemented junctions carry downstream element identifiers. There
are17 elements,12 air-separated groups,3 cemented doublets,1 triplet,6 aspheric
surfaces on3 elements, and2 physical motion groups.

Two separately implemented first-order paths agree at about10^-14. Analytic
interface, translation, thin-lens and flat Snell reference fixtures are retained.
Final-data independent reconciliation at five focus states differs from the author
calculation by at most2.85e-14 in tested EFL/track/Petzval quantities.

Infinity EFL28.7182060184mm, physical track152.0603mm and the printed group EFLs
reproduce source precision. The exact unclipped chief at37.375degrees maps to
21.6301271679mm. Per-surface Petzval sum0.002839171570mm^-1 includes every real
cemented transition using phi/(n*nPrime). Standalone thick-element focal lengths,
cemented net powers and functional-group powers are checked separately.

Published close focus translates source15–30, including STO,0.7338mm objectward;
the front group, LPF and image remain fixed. The two variable gaps conserve
43.5203mm. d0+physical track=1274.9682mm supports the integer1275mm caption.
Close-state EFL28.6584550326mm, best-focus magnification-0.025000656 and axial
best-focus residual+0.000152027mm are reproduced. No source spacing is adjusted
to force zero residual. Three intermediate spacing samples are diagnostic
interpolants, not measured states or a reconstructed production focus law.
No state at the manufacturer's0.28m minimum distance is invented.

Both BFD definitions exceed EFL at infinity, supporting retrofocus geometry;
physical track/EFL=5.294909 does not support a telephoto designation.

## Conditions, glass and spectral behavior

Thick standalone element powers reproduce conditions1–3 and6. The front-pair
power/Abbe sums have opposite signs, +0.000447933621 and-0.000943260881;
their absolute sum is0.000495327260. The triplet absolute sum is0.001156173097.
Condition8=1.852237823 and corrected condition9=1.885195012 reproduce1.85/1.89.
Conditions5/7 retain their source-provided spectral inputs; neither is represented
as an independently measured spectrum. The frozen baseline also retains thin-
element alternatives and their nonmatching condition2 observation as a method
comparison, not an unexplained source error.

The reviewer repeated the complete supplied primary HOYA catalog coordinate scan
and targeted OHARA source lookup without prior labels. HOYA's2019 revision log
explains the0.01 Abbe changes for FCD10A and FCD515 caused by wavelength-digit
updates. S-prefix distinctions remain explicit. Alternative candidates, residuals,
raw coefficients and catalog coverage limits remain in evidence. Other vendor
catalogs were not comprehensively ruled out. The LPF is not assigned a nearby
material solely from proximity in nd/vd.

The patent's L11 deviation0.0283 uses0.64833-0.0018*vd. At vd20.88 it implies
absolute PgF0.639046; the application baseline yields dPgF0.03036616. The source
anomalous-material annotation is supported. Individual patent-melt line indices
were not invented. The separate catalog-proxy triplet result0.053019376 uses
rounded OHARA line indices; the frozen review's0.053006235 uses the catalog's
published relative-dispersion value. Both reproduce source0.053 at its precision,
and their small difference is explicitly due to distinct catalog input precision.

Actual pinned runtime resolution of all17 class labels was executed. Some selected
equivalents differ from the source comparison table: J-LASFH21, H-ZLaF4LA,
J-KZFH9, N-LASF44, N-SF66 and H-FK61 appear among the resolved curves. The analysis
now identifies that behavior without promoting it to supplier identity. The LPF
uses Abbe approximation. L11's g-channel reconstruction preserves PgF0.639046
despite catalog resolution, verified numerically to1e-12. No APO-performance or
complete measured-spectrum claim is earned.

## Aperture, geometry, rays and visual review

The stop's axial location is source-published; its14.0416215372mm radius is inferred
by exact axial tracing from EFL/(2*1.46). The paraxial-only radius13.8410329703mm
is not substituted. F-number agreement after calibration is not independent
physical iris evidence.

Per-surface clear apertures are inferred. Figure21 and the freshly downloaded
manufacturer drawing were independently viewed; the manufacturer's exact image
hash isb86f3722073aa50c4fd3f8f7e60396a1b02e2827f4a606bfcf5477318b91d3b1.
The three aspheric and2FLD/3SLD positions support architectural correlation only.
A new true-sag section with actual-runtime default fan was visually inspected
against the source figures. It is not the application's production renderer.
Mechanical flange steps and optical extents are distinguished; tapered cemented
rims and inferred aperture departures from the schematic remain model limitations.

The author's derivative-root extrema checks were rerun. The independent path uses
analytic sag/slope plus4097-point radial scans at all five focus samples. Both
pass conic domain, actual rim slope, shared-band edge thickness, independent-rim
closure and gap-intrusion rules without exceptions. Minimum independent rim
closure is0.068661436mm; maximum rim angle63.600576895degrees remains below the
unchanged64.158067degree default. No layout tuning hides a geometry failure.

The4263 diagnostic3D rays aim at physical-iris coordinates and are retained as
that grid only. The real default display fan is different. Genuine pinned core
helpers were separately executed for150 default launches: five focus settings,
three aperture settings, five default fractions and both focus-tracking choices.
All traversed32 source-expanded surfaces without clipping or optical failure.

The sequential runtime returns at the last LPF face with terminationReason
sequential-return and reachedImagePlane=false. The probe therefore records a
separate finite straight-air intercept at the authored image plane; it does not
misinterpret that flag as either an image hit or a blocked ray. The independent
frozen meridional trace reproduces the actual launch intercepts within
1.01e-9mm. Its160650 interior material samples (63 per17 elements per150 rays)
show no excursion; the closest sampled margin is0.015615659mm. This does not
prove clearance over a continuum or measure real production vignetting.

The application core's buildLens/validateLensData, runtime catalog resolution
and default-fan tracing actually ran under Node24.19.0 with built-in TypeScript
stripping. All75 source-module byte hashes match the identified pinned server
Git blobs. No package lifecycle command, typecheck, full build, corpus sweep,
React UI or production render test was executed. An early read-only validator
copy differed only by a trailing blank line; final checks were rerun using the
exact pinned bytes. This normalization changed no source logic or lens value.

## Quantitative claim map and manual prose review

| Analysis material | Governing evidence/results |
|---|---|
| Identity, dates, attribution, construction counts | Original card/PDF1–2; raw prescription; facts.dataMetadata/counts |
| Production correlation, mounts, marketed values | Primary Sigma specification and freshly viewed construction image; evidence.productCorrelation |
| EFL/BFD/track and principal planes | implementedModel[*].firstorder plus independentBaseline.finalCandidate; explicit physical/lens-only planes |
| Functional/cemented group powers | firstorder.groups and independent baseline group matrices |
| Per-element values and roles | Final parsed elementMetadata; thick standalone powers; source paragraphs0081–0084 |
| Glass candidates and actual catalog choices | evidence.glassEvidence; recordedRuntimeExecution.execution.glass; supplier limits in prose |
| Published focus motion and finite conjugate | Raw two-state table, firstorder.finiteConjugate, independent baseline |
| Complete asphere table and rim departures | Raw coefficient rows, final data.asph, geometrySummary, independent geometry |
| Conditions1–9 and spectral normal lines | Corrected raw condition table; sourceModel.conditions/spectral; correctionA4-COND9 |
| Stop calibration,4263 diagnostic rays | implementedModel.aperture and per-state geometry/rays; inferred aperture disclosure |
|150 actual default fan rays and material containment | runtime-validation exact execution; independentBaseline.actualDefaultFanIndependentContainment |
| Remaining limitations and pending real checks | Evidence openIssues; results limitations; manifest checks |

Manual review covered the complete final analysis and all element-role prose.
It distinguishes source facts, catalog analogs and inferences, avoids assigning
unique aberration functions from power signs, maintains the published-close-
state/production-MFD distinction, and makes no manufacturing-process or supplier
claim from glass coordinates alone. Primary citations and source page numbers
were checked. Every shared quantitative claim has an executed result or explicitly
identified source assertion. The new runtime claims are bounded to actual checks.

## Final disposition and replay

The inherited construction and analysis checks were rerun after the transcription
correction and execution-scope updates. The independent review passed on the final
bytes. The canonical archive contains12 files: the nine dossier files plus the
runtime evidence record, generic Node loader and targeted runtime probe. It
includes the unmodified original PDF/card and root-level data/analysis pair.

The consolidated portable command is:

python Sigma28mmf14DGHSMA.verify.py --package-dir <extracted-directory> --output <external-results.json>

It recalculates source and final models, both ray grids' portable evidence,
independent baseline, geometry and all claim cross-checks. Recorded genuine-runtime
results remain exact-data-bound evidence; offline replay explicitly does not
claim to rerun absent shared application modules. The separate included runtime
probe can rerun them with the75 identified raw source dependencies. A clean
archive extraction, member hash verification and external-output portable replay
must all pass before the final manifest's READY_FOR_BATCH gate is accepted.

READY_FOR_BATCH is pre-integration readiness only. INTEGRATION_PENDING remains.
Project type checking, Prettier, production rendering/hidden trim and the later
user-controlled corpus/build integration gates are NOT_RUN. No integration or
publication is claimed.

## 2026-10-08 — Deployment validation against patent and maker diagram

Independent re-read of JP 2019-219472 A Example 5: 30 surface rows, 17 glass pairs, 6 aspheric surfaces and both focus states agree; engine f 28.718 mm and total length 152.0603 mm against the printed 28.72 and 152.06. Among the four 28 mm examples only Example 5 places the νd 95 and 90 glasses at L4 and L13 and the νd 68 to 82 glasses at L7, L15 and L16, which is Sigma's published two-FLD, three-SLD map; the aspheric elements L2, L10 and L17 also agree.

Changed at deployment: display name set to the catalog form `SIGMA 28mm f/1.4 DG HSM | Art`.

## 2026-10-08 — Semi-diameter pass against the patent figure and maker diagram

Source: `patents/JP2019219472A.pdf`, PDF page 29 (printed page 28), Figure 21, which the list of drawings captions as the Example 5 lens construction at infinity focus. The figure is a 400 dpi bilevel raster with the optical axis horizontal; it was measured at native resolution on the axis row and on both sides of the axis.

Scale: all 30 vertex crossings were read on the axis. Surface 1 sits at 371.5 px and surface 30A at 958.5 px, 587 px for the 113.0815 mm infinity vertex span, so 0.1926 mm/px. The spans 1 to 14 and 15 to 30A give 0.1929 mm/px each, and every vertex falls within 1 px of its prescription position. The 14 to 15 air gap measures 37 px (7.1 mm), the infinity value 6.9915 mm and not the close-focus 6.2577 mm, so the drawn state is infinity. Flat-top readings are outer ink less half a line width; one pixel is 0.19 mm.

| Surface | Before | Figure | After | Evidence |
|---|---:|---:|---:|---|
| 11 (L6/L7 junction) | 21.4 | 20.6 to 20.7 | 20.6 | D2 is drawn with a flat top at 107 to 108 px and the junction runs to that top. The old value put the junction 0.8 mm above L7's rear face and left L7 a 0.07 mm knife edge; L7 is square-cut in both drawings and now carries one height. |
| 21 (L12 rear) | 18.9 | 15.3 to 15.4 | 15.4 | The concave face leaves a flat rear annulus at 79.5 to 80 px on both sides of the axis; the annulus plane lies 1.6 mm ahead of the stop. At 18.9 the modeled rim reached 0.85 mm behind the stop plane. Maker diagram about 15.6. |
| 25 (L14/L15 junction) | 20.4 | 16.7 | 16.7 | T1 is drawn with a flat top at 86.5 to 87 px from the L13 knife edge to the rear face; the old junction stood 3.7 mm above it. |
| 26 (L15 rear) | 17.5 | 16.7 | 16.7 | Same flat top; L15 is square-cut. Both drawings put the rear of T1 about 0.9 mm below L16. |

Values retained, with the figure reading in mm: 1 28.8 (28.9); 3A 23.6 (23.8); 5 and 6 21.8 (22.05); 8 and 9 21.3 (21.7); 12 20.6 (20.6 to 20.7); 13 and 14 22 (22.0); 15 and 16 21 (21.1); 17A and 18A 20.3 (20.1); 19 and 20 18.9 (19.0); 23 14.5 (curve ends at 14.45, flat annulus above); 24 16 (16.2 to 16.4); 27 and 28 17.5 (17.6); 29A and 30A 17.7 (17.8). All agree within 2 %. The stop tick's inner end reads 14.45 mm against the calibrated 14.04 mm; the stop was not touched.

Values retained below the drawn rim:

- Surface 2 (21.4): the figure ends the concave face at 22.0 to 22.5 mm under L1's square flange. The shared-gap rule to 3A admits at most about 21.6 (22.0 gives 8.99 mm of intrusion against 8.466 allowed).
- Surface 4A (19.6): the figure draws the asphere up to the top edge of L2 at 23.8 mm, wrapped around L3. The prescription profiles of 4A and 5 meet near 21.2 mm, and the shared-gap rule admits at most about 19.7 (19.8 gives 6.73 mm against 6.704). The maker diagram ends this face near 20.7 mm under a mounting flange. The 4A polynomial has no turnover to 24.5 mm; its slope peaks at 18.4 mm.
- Surface 7 (19.2): the figure runs the concave face to the top-left corner of D1 at 21.7 mm, touching L3. The profiles of 6 and 7 meet near 20.4 mm and the shared-gap rule admits at most 19.4 (19.5 gives 3.44 mm against 3.424).
- Surface 10 (18.3): the figure ends the concave face at 19.2 to 19.8 mm under a short flat annulus and the maker diagram near 19.4 mm, 5 to 8 % above the file. That is inside the reading band, and this rim sets the front-side vignetting from 0.5 to 0.85 of the image height, so it was left as authored. A trial at 19.6 would widen the transmitted tangential bundle from 81.5, 66.6 and 53.8 % to 83.6, 70.9 and 55.5 % of the stop diameter at 0.5, 0.7 and 0.85 of the image height.

Maker diagram (Sigma's published construction drawing, unscaled; about 0.171 mm/px from the first to last vertex): 17 elements in 12 groups with the same cemented sets as Example 5 (L4+L5, L6+L7, L11+L12, L13+L14+L15). Aspherical outlines mark L2, L10 and L17; the two yellow elements are L4 and L13 and the three blue elements are L7, L15 and L16, matching Sigma's two FLD and three SLD elements. Relative heights agree with Figure 21 to a few percent: L1 tallest at about 29.4 mm, L3 21.8, L8 21.2, L9 20.2, L10 19.9, L16 17.0, L17 16.8, stop tick 14.3. The maker draws mounting flanges on L2, L4, L6, L12 and L14 where the patent figure draws plain flat tops, and draws L5 and L7 about 1 to 2 mm lower than the patent does; the patent figure of the modeled example governs. The two drawings agree on the points changed here: L12's rear face ends near 15.5 mm (the maker chamfers down to it from the flange), and L15 sits below L16.

Clearance after the change, exact d-line meridional trace with the LPF in place: the axial stop-edge ray is at 17.10, 14.46, 14.60 and 14.93 mm on surfaces 11, 21, 25 and 26 at infinity and 16.90, 14.45, 14.68 and 15.01 mm at the 1122.9079 mm object distance; the chief ray to 21.63 mm (half-field 37.375°, patent 37.37°) is at 12.54, 3.14, 6.23 and 7.59 mm. No surface clips the on-axis beam or the corner chief ray at either state. The transmitted tangential bundle is 94.1, 81.5, 66.6, 53.8 and 38.1 % of the stop diameter at 0.3, 0.5, 0.7, 0.85 and 1.0 of the image height at infinity (94.5, 82.5, 67.7, 55.0 and 40.0 % at close focus), identical before and after at 20 image heights; the limiting rims remain 13/14, 10 and 2 on the front side and 28 and 30A on the rear side. Engine values are unchanged: half-field 37.375° (37.166° at the close-focus end), f/1.46, edge geometric transmission 58.3 % (62.8 % at close focus). The surface validator reports no errors, the image-circle check lists no undersized surface, field coverage is 100 % at 21.63 mm, the aperture audit is within 3 % of the stated f-number, and no element needs render trim.

Analysis prose: no aspheric semi-diameter changed, so the quoted rim departures stand. The smallest independent rim closure moved from 0.068661 mm (L7) to 0.312796 mm (L13); the largest rim slope is still 63.600577° on surface 24.

Open limitations: the renderer joins an element's two rim points with a straight line, so the square flanges of L1 and L2, the square front corners of D1 and D2 and the square rear shoulder of L12 appear as tapers. The 4,263-ray and 150-launch samples recorded above were taken with the earlier values of surfaces 11, 21, 25 and 26. Semi-diameters remain estimates from a schematic figure; no clear-aperture table is published.

## 2026-10-08 — Integration: glass labels and metadata

- Glass. The twelve six-digit class labels now name the coordinate-equal vendor row beside the code: FCD100 (L4), FCD10A (L13), FCD1 (L15), M-PCD51 (L2), FCD515 (L7, L16), M-TAF101 (L10, L17), TAF3D (L8), TAFD35L (L5), E-FDS1-W (L11) and TAFD45L (L3) from HOYA, and S-NBH53V (L6, L12, L14) and S-LAH96 (L1, L9) from OHARA, the rows this file's analysis already tabulated. Bare codes had sent L3 to a HIKARI row, L5 and L15 to CDGM rows and L8 and L11 to Schott rows at the same coordinates. Stored nd and νd are unchanged.
- The LPF plate (1.52301 / 58.59) is labelled with the nearest HOYA row, C12 (1.52307 / 58.64), as on the SIGMA 105mm f/1.4 DG HSM | Art model; it had no label and traced on the Abbe estimate. All seventeen elements and the plate now trace on catalog curves.
- `apd: "inferred"` added to L4 and L13 (FLD by count on Sigma's diagram) and L7, L15 and L16 (SLD by count); L11 keeps its patent tag.
- `specs` added (17 elements / 12 groups, design f = 28.72 mm, design F/1.46, six aspherical surfaces on three elements); the file had none. Missing spaces repaired in `focusDescription` and two `source` strings; subtitle punctuated.
- Display name, mounts (Sigma SA, Canon EF, Nikon F, Sony FE, L-Mount), format and the nine-blade count reviewed and left as authored. `closeFocusM` stays at the patent's 1.275 m test state, the only finite state the source tabulates.
