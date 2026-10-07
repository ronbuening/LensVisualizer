# Author record: FUJINON XC50-230mmF4.5-6.7 OIS II

## Job and reference versions

US 10,095,009 B2, Example 6; exact stem FujifilmFujinonXC50230mmf4567OISII.
The unchanged supplied recovered card and reacquired selected patent are included. The reacquired PDF
SHA-256 is c4f4f01c1fc86035353f2bcf7517afe3ea3a54e075d0a6279c6bbc269fde884e;
it differs from the prior unavailable download. The card was recovered from retained canonical text;
pre-interruption card bytes cannot be verified. Recovery status was inspected solely for source identity,
not reused as an optical conclusion. No previous target model or analysis was read.

Controlling project references are pinned at 5c25e4289c6e090eb44177e907d901dfe3cef76c.
Exact identities are in the manifest. CHAT-1.0 protocol and dossier contract govern the workflow.
Current rearPlates, physical-gap, conic, 90% shared-gap, actual-rim and 0.25mm render-trim policy supersede
older generic exclusion wording. Candidates are not integrated into the shared read-only runtime.

## Extraction and conventions

The PDF has no usable text layer. A local OCR pass was only a locator aid. Actual source images were
inspected at PDF pp1,8,15,21,22,25,26, including a260dpi close view of the complete Table16.
Tables16–19 were transcribed visually. The source has33 planes including final image surface33,
13 glass lenses in10 air-separated groups, six functional zoom groups, one stop at surface11,
two aspheric faces12/13, and rear plates on surfaces 25–32: a 0.600 mm plate (25–26), a 1.550 mm member
printed as three contiguous layers of index 1.54763 (27–30) and a 0.700 mm plate (31–32). Tables16–18 are
the only numerical inputs. No values were borrowed from sibling examples. (Plate description corrected
2026-10-06; the first transcription counted four plates.)

Lengths are millimetres; positive radius locates center to image side. Native nd/νd are d-line values
at587.56nm. The printed asphere equation uses KA rather than1+K, hence K=KA−1=0 on both faces.
Table18 publishes even terms throughA12; all printed odd terms vanish. No uniform scaling is applied.

## Model transformations

The current schema retains surfaces1–24, maps11 toSTO and12/13 to12A/13A, and places the source rear
plates in rearPlates. Surface24's17.840mm gap is physical. Table 16 rows 25–32 give glass thicknesses
0.600 / 0.350 / 0.600 / 0.600 / 0.700 mm (rows 25, 27, 28, 29, 31) with indices 1.54763 for the first four
and 1.49784 for the last, and air gaps of 0.810 mm (row 26), 0.500 mm (row 30) and 1.120 mm (row 32).
Rows 27, 28 and 29 each carry an index, so they are three contiguous layers totalling 1.550 mm; they are
authored as one 1.550 mm plate, which is optically identical. rearPlates therefore holds three plates:
0.600 mm + 0.810 mm air, 1.550 mm + 0.500 mm air, 0.700 mm + 1.120 mm air. No air-equivalent distance is
authored in place of that stack. (Corrected 2026-10-06; the first transcription read row 28 as a 0.600 mm
air gap and authored four plates.)

Only infinity-focus states at51.53/107.31/223.44mm are published. G4 objectward focusing is described
in columns9–10, but no finite-conjugate spacings are supplied. NO_INTERNAL_RECONSTRUCTION is used;
closeFocusM1e15 is a software sentinel, not the product's1.1m minimum focus distance. All focus gap
pairs repeat the published infinity spacing. Interpolation between zoom stations is a model assumption.

Physical semi-diameters and iris diameters are not printed. Stage2 will infer rims from Figure6,
manufacturer diagram proportions and traced clearance, subject to unrelaxed current geometry policy.
Native Table17 f-numbers4.63/5.76/6.92 will calibrate the modeled iris schedule. Such agreement is
calibration, not independent verification of a measured physical diaphragm.

## Glass review

The author parsed primary OHARA, HOYA, SCHOTT, HIKARI, CDGM and SUMITA catalogs and rechecked the
stored catalog hashes and raw AGF blocks. Per-coordinate compatible candidates and nearest-per-vendor
residuals are preserved in evidence. This does not establish supplier or melt identity. No candidate
spectral coefficients or line indices are transferred into this model. Six-digit d-line coordinate
class labels use decimal half-up rounding. Plate pairs1.54763/54.98 and1.49784/54.98 have no candidate
within the discovery window; they remain source-only. No APO or anomalous-partial-dispersion claim is made.

## Numerical and geometry results

Executed sequential height/reduced-angle and separately multiplied ABCD reproduce EFL51.553678,
107.325142 and223.486289mm; the printed values are51.53,107.31 and223.44mm. The explicit original
EFL tolerance is0.08mm. Independently calculated half-last-digit sensitivity estimates are also retained
and are not confused with floating-point replay precision. The two methods agree to numerical precision
and determinant1 is checked. A separate thick-lens analytic fixture exercises the power implementation.

Functional-group powers yield focal lengths+119.150652,−28.037019,+42.091032,+62.296888,−39.200780
and+110.740411mm. Table19 f1/f2 computes−4.2497618 and d1w/f1 computes0.1102806, consistent with
its−4.250 and0.110 printed values. All applicable basic and preferred inequalities are evaluated.
Per-surface Petzval, standalone in-air element powers, cemented-group powers, principal planes,
track and pupil-calibration quantities are computed in the portable verifier, not hand-entered answers.
Stage1 leaves actual rim geometry and runtime tracing as explicit Stage2 work.

## Correction and discrepancy register

No patent value has been corrected. Table18 surface12 A8 is NEGATIVE−1.4041431E−09; visual reading
rather than the imperfect OCR determines the sign. The source prose says “signs of refractive indices”
while describing curvature signs; the positive glass indices and signed Ri table remain authoritative.

The physical image plane is 0.023903 / 0.011826 / 0.039492 mm objectward of the computed paraxial image
at wide/middle/tele (corrected 2026-10-06). The first transcription reported 0.188408 / 0.200485 /
0.172818 mm imageward. That offset was not a source discrepancy: it came from reading Table 16 row 28
(0.600 mm, Nd 1.54763) as air, which lengthened the reduced rear path by 0.600 × (1 − 1/1.54763) =
0.212310 mm. The earlier statement that a high-resolution reread confirmed every source gap and index was
wrong for that row. The source prints no separate numerical BFD or zero-defocus assertion. The remaining
residual is smaller than the 0.08 mm tolerance of the original zero-defocus diagnostic and smaller than
the Stage1 half-last-digit sensitivity sums 0.043/0.065/0.111 mm; those sums were not re-derived in the
2026-10-06 review. The source image plane is preserved and no gap is adjusted. All analyses must use the
authored physical image plane unless a distinct diagnostic best-focus position is explicitly named.

## Independent review

Not performed. This is the author's Stage1–3 record. A separate fresh reviewer must own Stage4.

## Gate disposition

Stage1 READY_FOR_DATA: complete primary extraction, conventions and source-preserving first-order
model are reproducible. Unpublished SD/iris modeling remains Stage2 work. No finite-focus law is invented.
The paraxial image-plane residual is carried as an explicit source-model limitation.

## Quantitative claim map

- System EFL, BFD, principal planes and track: results.sourceModel.states, computed from Table16/17.
- Element and cemented-group focal lengths: results.facts.elements / cementedGroups.
- Six-group sign distribution and powers: results.facts.groups.
- Source conditions: results.facts.conditions and results.comparisons.
- Surface Petzval: results.facts.petzval. No aberration attribution follows from its sign alone.
- Source image offset: source_image_* comparison and source_image_retention_* checks.
- Pupil/stop calibration: sourceModel.states[*].pupilInference; dependent on source f-number.

## Pending integration

TypeScript project typecheck, Prettier, corpus tests, metadata generation and full build are NOT_RUN
at integration scope. They are not replaced by this portable verifier. Integration remains pending.

## Stage2 construction record

The actual literal-only TypeScript file is read by the portable verifier's strict JSON-literal parser,
within the exact imported-type / satisfies / export wrapper. Duplicate keys, spreads, NaN, malformed
wrappers and trailing executable statements are intentionally rejected. A radius mutation fails
source-to-model comparison. Actual project validation also executes through buildLens().

All source radii, lens gaps, lens indices and nonzero asphere coefficients are unchanged. The rear plate
media were not: this stage carried row 28 as air (corrected 2026-10-06, see the last section).
The13 front-entry elemId values correctly pass downstream ownership at cemented interfaces4,9,21.
Author irisSD7.14740029439mm is the paraxial wide-state calibration. Runtime recalibrates it to
7.16587026934mm and uses inferred station iris radii7.16587026934/7.15121689632/7.15885783626mm.
These are not patent-published diaphragm measurements.

SDs are modeled quantities. The manufacturer source crop is included, unmodified. Element half-heights
were approximately read around the y435.5px axis as142/135/135/63/63/57/60/63/69/59/71/71/102px,
with about±4px read uncertainty. Relative-to-L11 comparisons are executed in facts.diagramRatios;
none exceeds the25% gross-mismatch screen. That screening tolerance is not metrological precision.
The G2 shared surface7/8 band uses7.1mm due to the1.200mm airgap and current90% policy; no published
aperture is shrunk, no gap policy is relaxed and no rim-slope/layout exception is used.

Portable geometry checks run at9 zoom samples, including each published station and three intermediate
samples in each interval. Both focus endpoints are identical. Minimum element thickness0.800mm,
minimum90%-gap margin0.043584mm, maximum actual rim angle31.4953°. Exact derivative and501-point
shared-band/edge scans are used. Actual production render diagnostics, invoked with prepareRuntimeState
at the same9 zoom positions and both focus endpoints, require0.000mm hidden trim.

The actual targeted runtime probe traces480 rays:9 zoom positions ×2 focus endpoints ×2 aperture
settings (wide-open andF/16), current axial fractions[-.83,-.5,-.17,.17,.5,.83], and current off-axis
fractions[-.75,-.375,0,.375,.75] at0.60 of the ACTUAL runtime half-field. Separate full-source-field
samples use15.4°/7.3°/3.5° at the three source stations, not runtime half-field. Of480 rays,28 are
clipped at exterior surfaces or the stop (6 default off-axis and22 source-full-field samples). No
sampled default axial ray clips, and no sampled clip is inside a cemented group. This is not an
all-rays-pass or continuous-field certification. Exact chief solves and clip-event locations are saved.
The sequential trace API returns after the final surface; it reports reachedImagePlane=false by design.
The report verifies traversal of all32 physical/expanded surfaces and explicitly propagates through the
final airgap to the source image plane, rather than relabeling that API flag. (That count belongs to the
four-plate stack and 9.0 mm L31 rims of this stage; the corrected model expands to 30 surfaces, and the
ray sample was not repeated after the 2026-10-06 corrections.)

Runtime half-fields21.058745°/10.095707°/4.216495° are geometry-limited values and must not be called
patent-published field angles or a proof of production coverage. The native Table17 full fields remain
30.8°/14.6°/7.0°. Runtime F numbers reproduce their calibration targets only.

Six-digit coordinate labels resolve12 of13 lens entries to the runtime's catalog dispersion proxies;
L31 remains Abbe-only, and actual per-surface decisions are preserved in runtime.glassResolution.
The phrase “no catalog spectral assignment” in the extraction refers to no author transfer of catalog
line indices into source fields. The runtime may automatically resolve classes to catalog proxies;
that behavior is explicitly disclosed and cannot prove actual supplier identity, partial dispersion
of the actual melt, or APO performance. No spectral performance claim is made.

Stage2 READY_FOR_ANALYSIS is bound by the manifest checkpoint to the final data/evidence/verifier/results
fingerprints. The complete Stage2 ZIP must clean-replay before analysis begins. All repository-wide
checks remain NOT_RUN at integration scope; actual build/validation, rays, glass resolution and render
checks above are targeted per-lens executions against the pinned project code.

## Stage3 analysis consistency and claim map

The analysis was authored only after the complete Stage2 checkpoint and both clean replays passed.
The data file did not change during Stage3: SHA-256
fa0d854da7655bab5b17e3d057c38572a2b34c681f619d0bdd9b18f611607dab.
The portable verifier was strengthened with explicit plate/reduced-distance equivalence, vd/name
source checks, literal-style preflight and recomputed rounded-analysis tokens. This changed verifier
bytes, not the model. The Stage2 checkpoint was replaced and clean-replayed before final Stage3
approval, so no earlier verifier/results hash is silently carried forward.

The following is the final quantitative-claim map. All computed claims refer to the data revision
above; source assertions refer to the cited raw evidence, not a model-derived production claim.

| Analysis section / claim | Fact or executed result | Governing source / data |
|---|---|---|
| Patent block, ownership and dates | evidence.sources[patent].metadata | Patent front page |
| 13 lenses / 10 air groups / 6 functional groups | facts.architecture; source_completeness | Table16 and Figure6 |
| Source 51.53–223.44mm, F/4.63–6.92, fields | evidence.rawPrescription.zoomTable | Table17 |
| Marketed 50–230mm, F/4.5–6.7, field, MFD and magnification | evidence.productCorrelation.marketed | Fujifilm model-specific manual/specifications |
| Each functional-group focal length | facts.groups | Parsed final TS, exact internal spacings |
| G1–G6 image-relative positions and wide-to-tele motion | facts.zoomMovements | Parsed final TS zoom states and physical plates |
| Track 127.22/158.19/193.23mm and telephoto endpoint | facts.stateResults; sourceModel.states[*].tlOverEfl | Front vertex to authored physical image plane |
| All 13 individual focal lengths | facts.elements | Isolated thick elements in air, not in-situ powers |
| Cemented-pair focal lengths | facts.cementedGroups | Actual downstream media at shared interfaces |
| Each nd, νd, glass code and candidate residual | element_mapping checks; glassEvidence.coordinates | Native d-line source and cited primary catalog excerpts |
| 12/13 runtime catalog proxies, L31/plates Abbe-only | implementedModel.runtimeReport.glassResolution | Actual pinned runtime execution |
| NO_INTERNAL_RECONSTRUCTION, sentinel and unchanged focus gaps | focus_no_motion; evidence.focus | No source finite-focus tables |
| All zoom gap numbers | source_mapping | Actual final var values vs Table17 |
| Exact KA and A3–A12 coefficient table | source_mapping; evidence.rawPrescription.aspheres | Table18 and source equation in column12 |
| 8.6mm aspheric rim departures and slopes | Recomputed 2026-10-06 with the surface audit scan (was 9mm, facts.asphereRims) | Actual polynomial+conic functions, inferred SDs |
| Conditions and stronger preferred intervals | facts.conditions | Isolated G1/G2 powers and Table19 |
| EFL values and small source differences | sourceModel.states / comparisons | Separate sequential, ABCD and real runtime |
| Petzval +0.0016752421/mm | facts.petzval terms and sum | Every applicable surface φ/(n n′) |
| Reduced rear path 22.126561mm | Recomputed 2026-10-06 from the corrected rearPlates (was 22.338871mm, facts.rearPlateAirEquivalentMm) | Final physical rearPlates; comparison only |
| Image-plane offsets | Recomputed 2026-10-06 (supersedes the source_image_* comparisons) | Preserved source image plane, no numerical focus repair |
| Authored and runtime stop radii/schedule | sourceModel.states[*].pupilInference; runtime.summary | F-number-dependent calibration |
| Minimum thickness, gap margin and maximum rim angle | facts.geometryExtrema | 501-point geometry scans at nine zoom samples |
| Zero actual renderer trim | actual_render_trim | prepareRuntimeState + computeElementRenderDiagnosticsForState2 |
| 480 rays, 28 exterior clips, 6 default-off-axis / 22 source-field | runtime.rays and actual_default_ray_sampling | Current default fractions and explicit separate source fields |
| Runtime half-fields | runtime.summary.halfFieldsDeg | Real runtime, not substituted for source fields |

Manual interpretation and citation review: PASS. The element descriptions distinguish standalone,
cemented and functional-group power. Patent aberration rationale is attributed to columns5–11 and
not recast as a new performance result. No APO, finite-focus, supplier/melt, stabilization-stroke,
physical-aperture or manufacturer-confirmed-patent claim is introduced. The metadata and all13
headings match the final data. Asphere signs, conic convention, raw native scale, three physical plates
(four before the 2026-10-06 correction), image-plane offset, proxy dispersion and natural exterior
vignetting are explicitly disclosed.
The full coefficient table is checked against the visually read Table18. Conventional URLs and
PDF/table/column locators replace chat-only citations. The analysis does not claim integration.

Final Stage3 disposition: READY_FOR_AUDIT, subject to the packaged clean replay and hashes. Stage4
has not begun in this authoring context. The independent reviewer must conduct a fresh source-first
pass before reading these author conclusions. Integration remains INTEGRATION_PENDING.


## Stage4 source-first independent review

Pass A was frozen before candidate access on 2026-10-03T18:26:45Z. The immutable content
fingerprint is 8d0a9244c73e99e3f31300b4526a1206a3e7bc762f2b3c174546747247d7ba09.
The inventory and exact UTF-8 contents of the independently re-entered source, fresh code,
results, six-vendor matching, provenance and exposure statement are embedded under
evidence.independentPass. The fingerprint records bytes and does not itself prove blindness.
Only source/card selection, controlling policies, filenames and a legacy survey status from
the required identity index were exposed before freezing. No candidate numerical values,
prior author verifier/results, AUTHOR_* content, or inherited catalog parser seeded Pass A.

Independent sequential and separately composed NumPy matrices reproduce all three EFLs,
principal planes, groups, standalone and cemented powers, Petzval, pupils and source
conditions. All 32 refracting/bookkeeping planes, all three published gap states, and the
KA-to-K and coefficient mappings match the exact final TypeScript. The unchanged 1.120mm
final gap is confirmed. The plate media were not: this pass reproduced the reading of row 28
as air (corrected 2026-10-06). Catalog comparison was freshly repeated from
raw OHARA/HOYA/SCHOTT/HIKARI/CDGM/SUMITA bytes. The source-first HIKARI check derived
Abbe from its line-index columns; author tables use the directly published rounded νd
column. Their small differences are rounding representation, not contradictory glass data.
No labels need replacement because the final model uses explicitly qualified coordinate
classes and no unsupported spectral measurements.

This pass reported an image-plane mismatch of 0.17–0.20 mm that source precision did not
explain, and accepted it as a source-preserving limitation. That finding is superseded: both
passes read row 28 the same way, so they agreed with each other but not with Table 16. With
the corrected plate stack the residual is 0.012–0.039 mm (see the 2026-10-06 section). No
separate numerical patent BFD or explicit zero-paraxial-defocus requirement is published,
and no source value is altered.

The original 480-ray/runtime probe was rerun from these candidate bytes against the actual
pinned project. A separately written probe tested 544 rays at 17 zoom positions, wide-open
and F/16, both signs of the default 0.60 runtime half-field and the actual default fractions.
There are 0 axial clips, 0 first-physical clips at cemented interfaces, 10 exterior off-axis
clips and 0 mm native render trim. Clipping occurs first at surface 7 near wide or surface 1
near tele. Ghost continuations can produce later clips; those are preserved separately and
are not mistaken for first physical obstructions. The gate is the current template's edge/
airgap-versus-cemented-group rule, not a universal no-vignetting requirement. Finite samples
do not certify a continuum. The independent runtime code, full report and data fingerprint
are in evidence.independentPass; the original standalone runtime probe remains reproducible.

No data or analysis correction was made at this stage. Data SHA256 was
fa0d854da7655bab5b17e3d057c38572a2b34c681f619d0bdd9b18f611607dab; that fingerprint and the
Stage3 one describe the file before the 2026-10-06 corrections.
The portable verifier now also invokes the packaged independent companion and incorporates
its re-executed source/candidate comparison, preserving all frozen content unchanged.
A complete package must pass clean extraction, original-byte/hash checks and external-output
replay before READY_FOR_BATCH binds to the manifest. Repository integration remains pending.

## 2026-10-06 — Integration review corrections

Source: US 10,095,009 B2, rendered page images of PDF p. 25 (Table 16, also Table 13), p. 26 (Tables 17–19),
p. 22 (Table 1 and the asphere equation), p. 8 (Figure 6) and pp. 19–21 (columns 5–10). Product facts:
Fujifilm specification page for the XC50-230mmF4.5-6.7 OIS II (13 elements in 10 groups, 1 aspherical,
1 ED, F4.5–6.7, minimum aperture F22, 7 blades, 1.1 m, 0.2×).

Re-read and retained without change: all 24 lens rows of Table 16 (R, d, Nd, νd), the stop at surface 11,
KA = 1 on both aspheric faces with every A4–A12 coefficient and zero odd terms, all 15 zoom gaps and the
f / F No. / 2ω rows of Table 17. Focus by G4 toward the object and stabilization by G2 agree with columns
9–10. Example 6 is the only example with a single-lens G4, so it is the only 13-element, 10-group example;
Examples 1–5 use a cemented two-lens G4.

| Field | Before | After | Evidence |
|---|---|---|---|
| `rearPlates` | Four plates: 0.600 / 0.350 / 0.600 / 0.700 mm with gaps 0.810 / 0.600 / 0.500 / 1.120 mm | Three plates: 0.600 mm + 0.810 mm air; 1.550 mm + 0.500 mm air; 0.700 mm + 1.120 mm air | Table 16 rows 27, 28 and 29 each print Nd 1.54763 and νd 54.98; only rows 26, 30 and 32 are air. Row 28 (0.600 mm) had been entered as air. Tables 1 and 13 print the same member of Examples 1 and 5 as one 1.550 mm plate between the same 0.810 and 0.500 mm gaps. |
| `maxFstop` | Absent (default 16) | 22 | Fujifilm lists minimum aperture F22; the existing `fstopSeries` entry 22 was unreachable under the default limit. |
| `sd` of 12A and 13A | 9.0 mm | 8.6 mm | The slope of 13A changes sign at h = 8.83 mm (−0.39° at 9.0 mm); 12A does so at 9.06 mm. The axial marginal ray needs 7.36 / 7.44 mm and the full-field bundle 7.76 / 8.24 mm. Figure 6 draws L31 at about 8.9 mm half-height. |

The three contiguous layers of rows 27–29 share one index, so a single 1.550 mm plate traces identically;
the `source` string of PP2 records the merge. The physical rear path is unchanged at 23.120 mm, so the
track stays 127.22 / 158.19 / 193.23 mm and no group position in the analysis moves. The reduced rear path
changes from 22.338871 mm to 22.126561 mm, a difference of 0.600 × (1 − 1/1.54763) = 0.212310 mm.

Image plane: the computed air-equivalent paraxial back focal distances from surface 24 are 22.150463 /
22.138386 / 22.166053 mm at wide / intermediate / telephoto. Against the corrected 22.126561 mm stack the
authored image plane lies 0.023903 / 0.011826 / 0.039492 mm objectward of the paraxial image; before the
correction it was 0.188408 / 0.200485 / 0.172818 mm imageward. A near-axis exact Snell ray at h = 0.01 mm
reproduces the three corrected values. The earlier "source image-plane offset" limitation was therefore a
transcription error, and the header, analysis and earlier sections of this log were restated.

Asphere rims at 8.6 mm: departure from the base sphere −0.2962 mm on 12A and +0.0110 mm on 13A, rim slopes
3.0° and 0.5° (previously quoted at 9.0 mm as −0.386919 / −0.005568 mm and 0.475° / 0.388°, the last of
which was a negative slope past the turnover of 13A).

Results on the corrected file: the engine builds with 30 surfaces (24 lens surfaces and six plate faces);
EFL 51.5537 / 107.3251 / 223.4863 mm and open apertures F/4.63 / 5.76 / 6.92 are unchanged, and the
aperture limit is now F/22. The surface validator reports no validation errors and the image-circle check
reports 0 undersized. An exact meridional clear-aperture trace for a 14.2 mm image height shows no clipped
axial bundle and no blocked chief ray. Traced to the true image plane behind the plates, the half-field
reaching 14.2 mm is 15.36° / 7.33° / 3.55°, against the patent's 15.4° / 7.3° / 3.5°.

Not repeated in this pass: the 480-ray and 544-ray runtime samples and the render-trim sweep of the earlier
stages, which used the four-plate stack and 9.0 mm L31 rims. Rays that pass the wide-open iris stay below
8.24 mm on L31, so those rims are not a first clipping surface at either value, but the counts themselves
are unverified for the corrected file. The local site render was not viewed. The glass labels, the
`fstopSeries` entries, the `closeFocusM` sentinel and the authored stop semi-diameter were left as authored.

## 2026-10-06 — Semi-diameter pass against the patent figure

Source: `patents/US10095009B2.pdf`, PDF p. 8 (Sheet 6 of 14, FIG. 6, "EXAMPLE 6"), wide-angle panel, with
the telephoto panel of the same sheet as a second reading. The page is a 300 dpi one-bit scan
(2560 × 3300 px) and was measured at that native resolution; both sides of the axis are free of leader
lines in the wide panel and the group brackets lie outside the search window.

Scale: the wide-panel axis is the row y = 1438 px. Drawn vertex crossings are at x = 1027 (surface 1),
1106 (surface 5), 1358 (stop) and 1707.5 (surface 24). Surface 1 to surface 24 is 680.5 px for 104.10 mm,
or 6.537 px/mm (0.1530 mm/px); stop to surface 24 is 349.5 px for 53.51 mm, or 6.531 px/mm; surface 1 to
surface 5 is 79 px for 12.11 mm, or 6.52 px/mm. Every Table 16 vertex at the wide spacings falls within
about 1 px of a drawn crossing, so the panel is Example 6 at the wide end and is drawn to scale. The stop
tick is 47 px (7.2 mm) tall against the 7.15 mm authored stop. Rim readings are the outermost ink of each
flat rim less 1 px for half of the 3 px stroke; ±1 px is ±0.15 mm.

| Surfaces | Stored `sd` | Drawn rim, px (wide upper / wide lower / tele) | Drawn mm | Drawn ÷ stored | Decision |
|---|---|---|---|---|---|
| 1, 2 (L11) | 20.5 | 134–136 / 135–137 / 134–136 | 20.4 | 1.00 | Retained. |
| 3, 4, 5 (L12 + L13) | 20.0 | 128 / 129 / 128–130 | 19.5 | 0.98 | Retained. |
| 6 (L21 front) | 8.2 → 9.0 | 60 / 60 / 59–61 | 9.0 | 1.10 | Changed. The nearly flat front face is drawn as one continuous line to the top of the 9.0 mm blank. |
| 7, 8 (L21 rear, L22 front) | 7.1 | Curves merge at about 45–50 px, then one flat line to 60 px | Optical zone about 6.9–7.6; blank 9.0 | — | Retained. The two concave faces close the 1.200 mm airgap at h = 7.64 mm, and the figure draws flat edge contact outside that height. A trial 7.3 mm is rejected by the surface validator (combined sag 1.10 mm against 1.080 mm allowed). |
| 9, 10 (L22/L23 junction, L23 rear) | 8.0 | 54 / 54 / hidden by the "St" label | 8.1 | 1.01 | Retained. L22 is drawn 9.0 mm tall and L23 steps down to 8.1 mm; the junction follows the smaller L23 because glass meets glass only that far. |
| 12A, 13A (L31) | 8.6 | 58–59 / 57–59 / 58–59 | 8.8 | 1.02 | Retained, inside the 8.83 mm slope turnover of 13A. |
| 14, 15 (L32) | 9.4 | 61–62 / 62 / 61 | 9.3 | 0.99 | Retained. |
| 16, 17 (L33) | 9.5 | 65–67 / 66–67 / 65–66 | 10.0 | 1.05 | Retained. The rear face is drawn curved to roughly 48–55 px (7.3–8.4 mm) and then as a flat annulus to the edge. The modeled rear corner sits 3.11 mm behind the surface 16 vertex at 9.5 mm; the drawn corner is about 2.7 mm behind it at 10.0 mm. Splitting the two faces would replace the flat edge with a chamfer and move that corner farther from the drawing. |
| 18, 19 (L41) | 8.8 | 56–57 / 57 / 56 | 8.5 | 0.97 | Retained. |
| 20, 21, 22 (L51 + L52) | 10.2 | 68–69 / 68–69 / 67–69 | 10.3 | 1.01 | Retained. |
| 23, 24 (L61) | 14.7 | 97–98 / 98 / 98 | 14.8 | 1.01 | Retained. |

One `sd` value changed. The stop semi-diameter and both aspheric rims are untouched, so the asphere
departures and slopes quoted at 8.6 mm stand.

Clearance on the edited file, exact meridional trace at F/4.63 / 5.76 / 6.92 and the patent half-fields
15.4° / 7.3° / 3.5°, worst station per surface: the axial marginal ray needs 16.15 mm on surface 1
(stored 20.5), 6.67 mm on surface 6 (9.0), 6.60 mm on surface 7 (7.1), 7.44 mm on 13A (8.6) and 7.80 mm
on surface 15 (9.4); the full-field chief ray needs at most 13.43 mm on surface 1 and 12.09 mm on
surface 24 (14.7). No axial bundle is clipped and no chief ray is blocked at any station, also with the
field over-driven to 16.46° / 7.67° / 3.63°. The unvignetted full-field bundle needs 9.39 mm on surface 6,
so its side clipping there falls from 28% to 9%; surface 7 still clips 46% of that side and remains the
rim that limits the wide-end field (21.1°), so no additional ray reaches the stop.

Engine values are identical before and after: runtime half-fields 21.059° / 10.096° / 4.216°, open
apertures F/4.63 / 5.76 / 6.92 and stop radii 7.1659 / 7.1512 / 7.1589 mm. The surface validator reports
no validation errors, the image-circle check 0 undersized, and the traced field-coverage check 100% at all
three stations (15.3° / 7.3° / 3.5° reaching 14.17 of 14.18 mm). Renderer diagnostics give 0.000 mm hidden
trim at nine zoom samples and both focus endpoints. The local page was viewed at 51.53, 107.31 and
223.44 mm and at the far focus endpoint, which is identical because no focus motion is modeled.

Open limitations: at 0.153 mm/px a one-pixel reading error is about 2% of the G2 and G3 rims, so the
retained differences of 1–5% are inside measurement noise. The modeled G2 has a waist at surfaces 7 and 8
that the patent draws as a solid block, because one `sd` per surface cannot carry a flat mounting annulus;
the same limit applies to the L22-to-L23 step and to the flat annulus behind L33. The 480-ray and 544-ray
runtime samples of the earlier stages were taken with surface 6 at 8.2 mm and were not repeated.

## 2026-10-06 — Glass labels and focus metadata

Glass labels. All thirteen elements carried six-digit code labels. The bare codes resolved by code lookup to a
mixed set of rows that share the code but not always the patent's νd (K-PFK80 at 81.35 for L32's 81.54, N-SF66
for L51, J-F5 and J-LAF7 for L12 and L21), and L31 resolved to nothing. Each label now names one catalog row whose
published coordinates equal the patent pair:

| Elements | Patent nd / νd | Label | Catalog nd / νd |
|---|---|---|---|
| L11, L13 | 1.48749 / 70.23 | S-FSL5 (OHARA) | 1.48749 / 70.24 |
| L12 | 1.60342 / 38.03 | S-TIM5 (OHARA) | 1.60342 / 38.03 |
| L21 | 1.74950 / 35.33 | S-NBH51 (OHARA) | 1.74950 / 35.33 |
| L22 | 1.78590 / 44.20 | S-LAH51 (OHARA) | 1.78590 / 44.20 |
| L23 | 1.92286 / 18.90 | S-NPH2 (OHARA) | 1.92286 / 18.90 |
| L31 | 1.65296 / 36.79 | K-PG395-M (SUMITA K-PG395(M)) | 1.65296 / 36.80 |
| L32 | 1.49700 / 81.54 | S-FPL51 (OHARA) | 1.49700 / 81.55 |
| L33 | 1.84666 / 23.78 | S-TIH53 (OHARA) | 1.84666 / 23.78 |
| L41 | 1.59282 / 68.63 | FCD505 (HOYA) | 1.59283 / 68.66 |
| L51 | 1.92286 / 20.88 | E-FDS1 (HOYA) | 1.92286 / 20.88 |
| L52 | 1.62299 / 58.16 | S-BSM15 (OHARA) | 1.62299 / 58.17 |
| L61 | 1.61293 / 37.00 | S-TIM3 (OHARA) | 1.61293 / 37.01 |

K-PG395(M) is SUMITA's molding-state row for a precision-molding glass; it was added to the project catalog from
the vendor AGF (formula-1 polynomial, coefficient-evaluated 1.652960 / 36.80) without the base-glass product code
658369, which does not encode the molding-state pair. It is the only row in the OHARA, HOYA, SUMITA and HIKARI
catalogs at L31's coordinates, and L31 is the design's only aspheric element. The patent names no glass, so every
label remains a coordinate equivalent and not a supplier identification. All thirteen elements now trace on
catalog dispersion curves; stored nd and νd are unchanged.

Focus metadata. `closeFocusM` was the placeholder 1e15 rather than a distance. It is
now 1.1, Fujifilm's minimum focus distance, carried as product metadata in the same way as the other catalog
zooms whose patents tabulate infinity only. Both focus endpoints of every variable gap remain identical, so no
focus movement is modelled; the header, `focusDescription` and analysis say so.

Display tag. L32 (1.49700 / 81.54, S-FPL51 class, catalog ΔPgF +0.031 against the engine normal line) now carries
`apd: "inferred"`, because it sits where Fujifilm's construction diagram marks the single ED element. The patent
publishes no partial dispersion, so no `dPgF` is authored and the tag is a display inference only.

Spec lines. `specs` now reads design f = 51.53–223.44 mm and design F/4.63–6.92 in the catalog's usual form, with
the inferred ED element added.

## 2026-10-06 — Second review: diagram, labels and movement

Compared: the local lens page at 51.53, 80, 107.31, 150 and 223.44 mm, at the far focus endpoint, with the element
inspector open on L21, L31, L32 and L41 and with the group-movement overlay at both zoom ends, against
`patents/US10095009B2.pdf` — FIG. 6 wide and telephoto panels (PDF p. 8), Table 16 (p. 25), Table 17 (p. 26),
columns 9 and 10 (p. 21), claims 5 and 6 (p. 27) and the front page. The figure was re-measured independently at the native
300 dpi: axis row y = 1438, 6.537 px/mm on the surface 1 to surface 24 span, readings less 1 px for the stroke.

Re-measured rims (upper / lower side of the wide panel, px): L11 134–136; L12 + L13 128; L21 and L22 60 with L23
stepping down to 54; stop 47; L31 58–59; L32 61–62; L33 65–67 / 65–67; L41 56–57; L51 + L52 68–69; L61 97–98.
These agree with the first pass to within 1 px on every element, so its scale and its retained values stand.

| Field | Before | After | Evidence |
|---|---|---|---|
| `sd` of surface 7 (L21 rear) | 7.1 | 9.0 | The site drew L21 as a wedge, 9.0 mm tall in front and 7.1 mm behind, where the figure draws a squared plate 60 px (9.0 mm) tall on both faces. The cross-gap check compares only the band the two facing surfaces share, so one of the pair can carry the blank height while surface 8 keeps 7.1 mm; the surface validator accepts it and the renderer needs 0.000 mm trim. The modeled L21 edge is 1.84 mm thick against about 1.6 mm drawn (front rim at x = 1189–1191, contact line at x = 1200–1201). |
| `sd` of surfaces 16 and 17 (L33) | 9.5 | 10.0 | Drawn edge 65–67 px on both sides of the wide panel and 65–66 px in the telephoto panel, 10.0 ± 0.15 mm, three readings 3 px above the stored value. L33 is drawn 0.7 mm taller than L32 and 0.3 mm shorter than L51 + L52; the site showed it level with L32. The traced full-field bundle needs 9.24 and 8.96 mm, so neither value clips. |
| `diagramLabel` of all 13 elements | absent (diagram showed 1–13) | L11, L12, L13, L21, L22, L23, L31, L32, L33, L41, L51, L52, L61 | FIG. 6 telephoto panel leader labels; the text of columns 6–7 uses the same designations. |
| `groups` text of G2 and G4 | G2, G4 | G2 (OIS), G4 (FOCUS) | Column 10 lines 33–60 and claims 5 and 6: focusing by moving the fourth lens group along the axis, image-blur correction by moving the second lens group with a component perpendicular to the axis. The patent names no other stabilizing group; G5 has no such role in it. Power-sign suffixes were tried and dropped because adjacent labels touch between 80 and 107 mm. |
| `role` of L21 | Negative leading element of G2. | Adds that the patent shifts G2 across the axis for camera-shake correction. | Same passage. |
| `focusDescription` | Began with the workflow token NO_INTERNAL_RECONSTRUCTION. | Plain statement that focus travel is not modeled, that the patent moves G4 (L41) toward the object, and that 1.1 m is Fujifilm's figure. | Readability on the focus panel; no fact changed. |

Why surface 7 and not surface 8. Raising surface 8 to 9.0 mm instead leaves the engine values untouched but keeps
L21 a wedge and tucks its slanted edge inside a 9.0 mm L22 front, which reads as two nested wedges. Raising
surface 7 gives L21 the drawn plate shape and leaves L22 with the front chamfer (7.1 mm in front, 8.0 mm at the
cemented junction) it already had. Both facing surfaces cannot reach 9.0 mm: their sags sum to 1.67 mm there
against a 1.200 mm gap, and they meet at h = 7.64 mm.

Engine values before and after: runtime half-field 21.059° / 10.096° / 4.216° before and 22.478° / 10.096° / 4.216°
after; open apertures F/4.63 / 5.76 / 6.92 and stop radii 7.1659 / 7.1512 / 7.1589 mm unchanged. The wide-angle
half-field rises because its limiting rim moves from surface 7 to surface 8, 1.2 mm closer to the stop, at the same
7.1 mm. The drawn contact height of about 7.6 mm on surface 7 would give 22.4°, so the new value is the one the
figure supports; the earlier 21.06° reflected the 90% gap rule holding both rims at 7.1 mm. The patent half-field is
15.4°, and the default off-axis fan moves from 12.64° to 13.49°.

Clearance on the edited file, exact meridional trace at the patent half-fields 15.4° / 7.3° / 3.5°: the axial
marginal ray needs 6.60 mm on surface 7 (stored 9.0), 6.59 mm on surface 8 (7.1) and 7.20 / 6.92 mm on surfaces
16 / 17 (10.0); the chief ray needs 4.86, 4.63, 2.23 and 2.27 mm. The full-field bundle needs 8.99 mm on surface 7,
now clear, and 9.12 mm on surface 8, which clips 45% of that side where surface 7 clipped 46%. No axial bundle is
clipped and no chief ray is blocked at any station, also with the field over-driven to 16.46° / 7.67° / 3.63° and
at the far focus endpoint. The surface validator reports no validation errors, the image-circle check 0 undersized,
the traced field-coverage check 100% at all three stations (15.3° / 7.3° / 3.5° reaching 14.17 of 14.18 mm), and
the renderer diagnostics 0.000 mm hidden trim at nine zoom samples and both focus endpoints.

Checked and found correct, no change:

- Table 16 rows 1–32 against the file: every R, d, Nd and νd, the stop at row 11, the asterisks on rows 12 and 13
  only, and the plate rows 25–32. Table 17: f 51.53 / 107.31 / 223.44, F 4.63 / 5.76 / 6.92, 2ω 30.8 / 14.6 / 7.0,
  and all 15 DD values in wide, intermediate, telephoto order, the order of `zoomPositions` and of every `var` array.
- Group brackets: G1 surfaces 1–5, G2 6–10, G3 12A–17, G4 18–19, G5 20–22, G6 23–24, as bracketed in FIG. 6, with
  the stop drawn between L23 and L31. Cemented brackets D1 (3–5, L12 + L13), D2 (8–10, L22 + L23) and D3 (20–22,
  L51 + L52) match the three shared-index rows of Table 16 and the `cemented` fields.
- Element `type` strings against the signs of R for all 13 elements; L31 is the only aspheric element and carries
  both `A` suffixes and both `asph` entries. Inspector values read on the page for L21, L31, L32 and L41 match the file.
- Zoom direction. Relative to the fixed image plane, wide to intermediate to telephoto: G1 moves 30.97 then 35.04 mm
  toward the object (66.01 mm), G2 6.88 then 10.32 mm (17.20 mm), G3 18.28 then 15.58 mm (33.86 mm), G4 9.31 then
  2.24 mm (11.55 mm), G5 9.81 then 16.08 mm (25.89 mm), and G6 does not move. No group reverses. FIG. 6 draws
  object-ward trajectories for G1–G5 and a straight vertical line for G6, and the text states G6 is fixed against the
  image surface, the G2–G3 distance decreases throughout, the G3–G4 distance is shortest at the wide end, the G4–G5
  distance is shorter and the G5–G6 distance longer at the telephoto end; DD[10] 20.55 / 9.15 / 3.89, DD[17]
  6.18 / 15.15 / 28.49, DD[19] 17.24 / 16.74 / 2.90 and DD[22] 5.93 / 15.74 / 31.82 agree. The page overlay shows
  the same six tracks with a 66.01 mm maximum.
- Focus. Both entries of every `var` pair are equal, the focus slider is shown as not modeled, the overlay offers
  no focus mode, and the diagram at the far focus endpoint is pixel-identical to infinity. The patent gives the
  direction (G4 toward the object for nearer subjects) but no close-focus spacing.
- `apd: "inferred"` on L32: the patent text assigns no dispersion class or glass name to any element, so no
  `"patent"` tag applies. L32 is the only glass of the prescription with νd above 71, and the product has one ED
  element. Fujifilm's construction diagram could not be opened from this session, so its ED position was not re-read.
- `varLabels` DD[5], DD[10], DD[17], DD[19], DD[22] are the patent's own symbols. Front page: US 10,095,009 B2,
  Oct. 9, 2018, Tetsuya Ori and Michio Cho, FUJIFILM Corporation.

Open limitations: the front of L22 stays 1.9 mm below its drawn 9.0 mm blank and its rear face ends at the L23 step,
because one `sd` per surface cannot carry a flat annulus; raising the lens-level gap fraction from 0.90 to 1.00
would allow about 7.6 mm on surface 8 and was not in scope. The modeled rear rim of L33 sits about 0.8 mm behind the
drawn corner for the same reason. On the page the STO label overlaps the `A` marker of surface 12A, 1.0 mm behind
the stop, and the L12 label sits on the lower rim of G1; both come from the label layout, not from this file. The
480-ray and 544-ray samples of the earlier stages were not repeated at the new rims.
