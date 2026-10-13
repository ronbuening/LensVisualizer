# Lens Patent — Olympus M.Zuiko Digital ED 17mm F1.2 PRO — Stage 4 Audit

## Final disposition and exact revision
Fixed selection: US10073255B2, Example4, stem `OlympusMZuikoDigitalED17mmF12Pro`. Source selection was not reopened.
Final revision: Stage4-R1. Gate: READY_FOR_BATCH only with the matching final results and successful external archive-only replay/freeze receipt. Integration status: INTEGRATION_PENDING. Nothing here represents repository integration, enrollment or publication. [Closed 2026-10-13: the three files are now in the repository under `src/lens-data/olympus/`; the dated sections at the end record what changed there, and the hashes above describe the package as delivered, not the current files.]

- Final native SHA256: `77f7d2d5d1e334070cbedc0daacd9cbfb5ff5fa9d682e191be3eabd51cf9314b`
- Final analysis SHA256: `68b24b95995099f977e77c1c85a694c2e8ef16f43a3a9f6341bfc571eb570408`
- Original Stage3 native SHA256: `c91ec373b5029a1d6ebad1c68635983a76352d67b26f92d3b420a6940cd48ffb`
- Original Stage3 analysis SHA256: `aae8850be12af6bfe7e3ae9e357774191e32833901c9e4793685b5384ec7c797`
- Frozen PassA ZIP SHA256: `dd90a229d918178b4966cae3d2dfd9d61d5f002120819f36f9df04e9baad71c5` (2,300,841 bytes,12 members).
- Frozen independent fingerprint: `7207e38959af18112cdc3844fa6f5f9ed46252217a090272f9b046eba99dac46`.
- Frozen numerical sourceModel SHA256: `d2da329d88f56071cc67ff49325ed9526f37db78fdb4977575fc0917f8167c14`.

The final change set is limited to six source-figure SD corrections, one coordinate-class glass label, a conditional gap-sag margin, corresponding evidence/analysis/verifier/audit updates, and independent supplemental source comparisons. All source radii, thicknesses, glass nd/vd, asphere coefficients, iris, published focus states and physical plate gaps are unchanged. The actual parsed native object is compared with the original archive object plus precisely that approved delta; no extra numerical or metadata changes are accepted.

## Job, originals and controlling references
The unchanged PDF is3,349,729 bytes, SHA256 `b25983af5ce438f82a64ebd2117ab1bb29e00b0cbb52a3ab1f0ae5e513d69a05`. The unchanged four-field card is158 bytes, SHA256 `0415f4135e0fbf10128c01bc21c946d9539cb559813949965574521f23aa91f3`.
Main/source/runtime pin is33ec433d56ed0044db432d6b0ff0395554d14696, treef8be39d5dc880508b0cf77e892b4db4ba3ef4f51. Connected read-only GitHub checked main again on2026-10-12 at15:53UTC; unchanged. The earlier independent reference check authenticated20 controlling files by Git blobSHA1 against that tree. Original acquisition/ref manifest timestamps remain intact and are distinct from this review access date2026-10-12.
CHAT-1.0 protocol/dossier/Stage4 audit instructions and current project specifications, defaults, taxonomy, figure and integration procedures govern. The current physical rearPlates convention takes precedence over older generic air-fold wording. The actual pinned TypeScript compiler/schema, renderer, buildLens, validateLensData, glass resolver, adaptive conjugate and ray routines are executed offline; the source-index independent verifier is a separate implementation.

## Independence, freeze and exposure
The reviewer initially received only the authenticated52-member neutral ZIP:8,563,259 bytes, SHA256 `c07df138f7ca023d196934bdd18e5a20055433f7f5dc0991f1a40ee714762fa7`. Acquisition was shared/pre-curated; independent claims cover rendered-source re-entry, figure measurement, raw catalog parsing/matching, numerical code and classification, not wholly independent acquisition.
PassA was frozen before candidate disclosure. Coordinator private preservation/readback verification occurred at2026-10-12T15:26:06.694485UTC. First candidate content opening was2026-10-12T15:27:52Z. The preserved baseline archive, each member and numerical fingerprint remain unchanged. `independent_source.json` and `independent_verify.py` are exact-byte copies of the pre-disclosure source/code; the final verifier repeats their full computation and requires complete JSON equality with the frozen result, without timestamp normalization.
Before freeze, exposure included generic worked examples in project references, unrelated main-commit prose, adjacent patent examples while locating selected tables, and one sibling figure mistakenly viewed while finding Figure8. No target candidate arrays, prior numerical results, glass choices or rim values were opened. The coordinator supplied only generic f-number, physical-plate, figure/policy and issue779 cautions. The source-first baseline records its exact page review and exposure. After freeze, the complete author candidate/evidence/runtime/support and the primary issue were read. This is a two-pass review, not perpetual blindness.
The same independent reviewer authored the final supported corrections and validated them with the unchanged pre-disclosure numerical code plus actual project runtime. That correction validation is not described as a new blind third-reviewer audit. The coordinator’s separate archive replay remains an additional repeatability check, not a substitute for source judgment.

## Source extraction and reference conventions
Original pixel review: PDFp30/printedcols23–24 selected prescription, states, six aspheres, rounded unit focal lengths and condition table; p31/col25 higher-precision parameters; p28/col19 equation/definitions; pp27–28/cols18–19 architecture/focus; p6Fig4 optical section; p10Fig8 plots; p1 attribution. Source table strings, including zeros/exponents/infinity/blank/Variable, are retained separately from numerical interpretation.236 common source values were freshly compared with the author transcription and agree. Author-omitted p31 parameters and optional preferred conditions remain supplemental independent inputs, rather than being discarded to match the candidate.
Positive z is imageward, positive R has its center imageward, all dimensions are unscaled millimetres, native index reference is d. The sag is the standard conic with1+K under the square root plus A4h^4+A6h^6+A8h^8; nativeK equals patentk. No1+K remapping, coefficient fitting or scaling occurs. Coefficient units aremm^-3/mm^-5/mm^-7; supported higher even terms are explicitly zero-completed, not measured.
The15 powered elements form11 physical groups and four functional units; six aspheric faces occur onL2/L11/L12. Four cemented doublets areL3–4,L5–6,L9–10,L13–14. STOs13 is the literal28.98mm-diameter iris. The camera plateC is separately physical: s27air11.00, s28glass4.11 atnd1.51633/vd64.14, s29air2.05 to the fixed source sensor. It is excluded only from the15/11 count/drawn lens elements. Air-equivalent15.760491779mm is a diagnostic comparison, never the native rear distance.

## Original author trial history and source-first rim correction
The author disclosed s2/s3 reduction14.3→14.0 specifically to satisfy the default sag margin, and s9/s10 increase to the smallest12.3 radius passing the full iris. Such passing-motivated choices are retained as history and are not accepted merely because the checks pass. Source curve ends, mechanical flanges and ray crossings were rechecked at a fixed11.8000683px/mm axial scale, using original288dpi pixels and an equation overlay without fitting scale or prescription.
The high caps at s9/s10 and the separately higher cap at s11 were identified explicitly. The frozen baseline had assigned s9 to the lower neighboring outline; this is corrected after disclosure to12.7, with old point/value and new evidence preserved. Frozen s17/s24 readings used the taller adjacent blank at a shared cemented boundary; lower adjacent material supports15.2/10.6 respectively, and the existing candidate15.1/10.6 remains within ordinary uncertainty. Frozen s25 stopped at a ray/curve crossing; the curve continues to the cap near10.6, supporting the existing candidate. These are declared interpretation corrections, not edits to the immutable baseline.
`figure_reconciliation.png` shows original pixels, revised endpoint assignments and fixed-source-equation overlay. Ordinary endpoint/scale-reading uncertainty is approximately±0.3mm, increased to±0.5mm for s7/s8 and s19/s20 flange/leader ambiguity. The final model passes at its selected inferred values; no claim is made that all values in those uncertainty intervals pass every policy threshold or represent manufacturing apertures.

| Surface | Frozen independent SD | Original candidate SD | Final SD | Status |
|---|---:|---:|---:|---|

| 1 | 18.30 | 18.40 | 18.40 | retained; source/uncertainty reviewed |

| 2 | 14.30 | 14.00 | 14.30 | source-supported correction |

| 3A | 14.30 | 14.00 | 14.30 | source-supported correction |

| 4A | 12.20 | 12.00 | 12.20 | source-supported correction |

| 5 | 12.20 | 12.10 | 12.10 | retained; source/uncertainty reviewed |

| 6 | 12.00 | 12.10 | 12.10 | retained; source/uncertainty reviewed |

| 7 | 10.00 | 9.80 | 9.80 | retained; source/uncertainty reviewed |

| 8 | 10.00 | 9.80 | 9.80 | retained; source/uncertainty reviewed |

| 9 | 12.00 | 12.30 | 12.70 | source-supported correction |

| 10 | 12.70 | 12.30 | 12.70 | source-supported correction |

| 11 | 13.80 | 12.80 | 13.80 | source-supported correction |

| 12 | 13.80 | 13.80 | 13.80 | retained; source/uncertainty reviewed |

| STO | 14.49 | 14.49 | 14.49 | source-published iris |

| 14 | 16.20 | 16.20 | 16.20 | retained; source/uncertainty reviewed |

| 15 | 16.20 | 16.20 | 16.20 | retained; source/uncertainty reviewed |

| 16 | 15.50 | 15.50 | 15.50 | retained; source/uncertainty reviewed |

| 17 | 15.50 | 15.10 | 15.10 | retained; source/uncertainty reviewed |

| 18 | 15.20 | 15.10 | 15.10 | retained; source/uncertainty reviewed |

| 19A | 14.20 | 14.20 | 14.20 | retained; source/uncertainty reviewed |

| 20A | 14.20 | 14.20 | 14.20 | retained; source/uncertainty reviewed |

| 21A | 13.60 | 13.60 | 13.60 | retained; source/uncertainty reviewed |

| 22A | 13.60 | 13.60 | 13.60 | retained; source/uncertainty reviewed |

| 23 | 10.90 | 10.90 | 10.90 | retained; source/uncertainty reviewed |

| 24 | 10.90 | 10.60 | 10.60 | retained; source/uncertainty reviewed |

| 25 | 10.00 | 10.60 | 10.60 | retained; source/uncertainty reviewed |

| 26 | 11.60 | 11.60 | 11.60 | retained; source/uncertainty reviewed |

| 27 | 11.60 | 11.60 | 11.60 | retained; source/uncertainty reviewed |

### Gap policy versus physical clearance
Frozen PassA point estimates exceeded the default0.90 policy on2→3 (0.960236426,+0.249317609mm),4→5 (0.932494897,+0.278796075mm),7→8 (0.924693987,+0.447317717mm). All had positive physical clearance. Those values remain frozen; candidate reconciliation does not retroactively change them.
The actual final model retains source-faithful14.3mm for2/3. Shrinking it to14.0 solely to avoid the policy is rejected. Altering source gaps/radii, hiding render trim, or air-folding the plate is not an acceptable alternative. At0.001 allowance resolution,0.90,0.95 and0.96 fail;0.961 is the first passing step. The root reported a live custom-rule check at15:33UTC, revision5, confirming the conditional minimal allowance up to0.97. This reviewer did not directly access a separate rule endpoint. No other lens’s exception transfers.
Both independent sag evaluation and the actual validator execute all four stages. Validator text at the lower stages says “elements will overlap in rendering”; that generic policy warning is not used as proof of physical overlap. The computed clearances below are positive and the actual accepted-state production render has zero trim. Only the sag-fraction margin is increased: there is no rim-angle, conic-domain, edge-thickness, source-gap, iris or render exception.

| Final shared band | Radius mm | Source axial gap mm | Maximum intrusion mm | Fraction | Minimum physical clearance mm |
|---|---:|---:|---:|---:|---:|

| 2→3A | 14.30 | 6.27 | 6.020682391 | 0.960236426 | 0.249317609 |

| 4A→5 | 12.10 | 4.13 | 3.783159869 | 0.916019339 | 0.346840131 |

| 7→8 | 9.80 | 5.94 | 5.257721012 | 0.885138218 | 0.682278988 |

| 10→11 | 12.70 | 0.24 | 0.000000000 | 0.000000000 | 0.240000000 |

| 15→16 | 15.50 | 0.20 | 0.000000000 | 0.000000000 | 0.200000000 |

| 18→19A | 14.20 | 0.20 | 0.000000000 | 0.000000000 | 0.200000000 |

| 20A→21A | 13.60 | 2.66 | 1.013140039 | 0.380879714 | 1.646859961 |

| 22A→23 | 10.90 | 1.98 | 0.000000000 | 0.000000000 | 1.980000000 |

| 25→26 | 10.60 | 7.57 | 1.133186669 | 0.149694408 | 6.436813331 |

All source and four intermediate runtime states pass. The independent501-sample shared-band check is separate from the inherited4097-sample analytic-sag/derivative check and actual validator/render implementation. Minimum glass thickness is positive; maximum actual rim angle remains64.149796252°, below the unchanged64.158067237° default. Asphere real-domain, true rim slope, profile direction, positive edges, shared material band and surface trim checks remain active. The exact state-dependent gap rows are in results; the fixed2→3 band controls the override.

## Numerical results and source discrepancy dispositions
The unscaled source/native infinityEFL is16.671803331mm; CL1/CL2 are16.646492129/16.397180753mm. Physical first-vertex-to-image distances are104.99/104.99/105.00mm. Source finite object-to-image distances are918.33/199.99mm. Infinity air-BFD is15.782773433mm; physical-plate paraxialBFD is17.182281654mm, versus17.16mm geometrical last-lens-to-source-image distance. Plane labels are explicit; no optical distance is silently substituted for a geometrical one.
Scalar reduced-angle and separately implemented NumPyABCD paths agree. Source-only and actual-native calculations agree, with exactSnell/vector versus angle-form controls. The full frozen baseline, including all256 seeded unselected rounding trials, is replayed. Actual final values are fed through the unchanged independent code, not read from stored calculated answers.
Standalone element powers are in air; cemented/functional powers use their true internal media. G1/G2/G3/G4 are−36.714152684/+25.714484804/−35.498888105/+33.103413748mm; G12 is15.531123015mm. D1/D2/D3/D4 are+120.463463343/−39.377524972/+149.220814123/−35.498888105mm. All15 native element focal labels and all applicable physical/functional spans are checked. Per-interfacePetzval terms sum+0.003794418786mm^-1. This does not establish measured field flatness or an individual element’s aberration coefficient.
Whole-system retrofocus classification depends on reference: airBFD/EFL0.946674641 versus physical-plateBFD/EFL1.030619262. The negative-front architecture alone is not an unqualified retrofocus proof. Physicaltrack/EFL6.297459124 is not telephoto. The source’s “retro-focus type” description of a G2 subassembly is retained at that scope.

### Three distinct f-number quantities
At infinity, Gaussian entrance-pupil radius7.255755278mm givesF/1.148867533. Exact axial entrance radius6.723001245mm givesEFL/(2r)=F/1.2399077975. Image-space1/(2NA) givesF/1.238996135. The source says onlyF-number; no particular convention is specified. Exact numerical agreement with the printed1.24 is not proof of that definition. The literal iris is unchanged and nominalFno is derived from the exact entrance ray, not fitted.
CL1/CL2 exact image-NA values are1.241191000/1.253086078. Gaussian exit-pupil transfer includes the1.50mm stop-to-s14 gap; exit positions are Gaussian image positions, not physical rear apertures. All planes and per-state pupil values are retained.

### Precision, fields and literal conflicts
The original20 raw author comparison failures remain with their original tolerances. The independent set has21 failures, including higher-precisionp31 and finite-field tested-definition rows, with overlap between sets; they are not41 distinct discrepancies. The author’s two-decimal unit table onp30 is confirmed, and the separatep31 summaries retain all extra digits. ConditionalFNOm1.240 is additionally checked at its strict0.0005 half-digit tolerance using exactEFL/entrance diameter; residual−0.000092202499 passes. Gaussian and image-NA definitions remain separate.
Small EFL/unit/ratio residuals are preserved. Rounding sensitivity shows plausible effects, not a proof of intended unrounded inputs; no tolerance is widened and no selected perturbation is adopted. CL2Gaussian magnification−0.144600159 versus−0.15 remains an unresolved summary/definition precision issue and is not claimed fully explained by rounding. Fully tabulated source states can be represented without replacing that summary.
At source67.55° infinityfield, the exact chief givesIH10.489489899mm versus10.81; the diagnostic fullfield reaching10.81 is69.358847046°. That latter angle is a comparison, not a model input correction. Literal distortion is−5.926120% at the printed field, while printed field/IH implies−3.051659%; atIH10.81 the literal model gives−6.287235%. Fig8C approximately supports barrel distortion of that scale but does not prove a typo or authorize a fit. Source finite-field angle anchoring is unspecified; independent first-vertex interpretations and their residuals stay visible.
The positiveG2Abbe condition prints94.93/81.61 whereas selecteds17 is95.10. The prescription remains95.10; both satisfy>80 and<96. All eight broad conditions are evaluated; optional tighter preferences are not universal gates (e.g.67.55° does not meet70°). The degree-valued upper-limit paragraph’s condition-number mismatch is disclosed. Figure8panel values mapINF/CL1/CL2 top/middle/bottom despite reverse end-order prose. No stations are swapped.
Publishedd22+d25 is9.55/9.55/9.56mm. G3 travel fromd22 is2.67mm, rear-gap contraction2.66mm; the literal0.01mm G4/plate/image residual remains despite fixed-unit prose. It is not declared a reconstructed physical motion.

## Glass, spectra and production correlation
Independent raw catalog extraction reprocesses3,171 rows, including duplicate editions/formats, acrossOHARA/HOYA/Schott/HIKARI/CDGM/Sumita. Raw originals, versions, original acquisition dates, source worksheet/row/AGF-line identities and residual rankings are retained. It is not3,171 distinct species and not a unique-melt identification.
L3’s original “Unmatched” label is corrected to “Very-high-index TAFD55/TAFD55-W coordinate class; supplier and melt unconfirmed”. ActualHOYAAGFline5284 and workbook rows publish2.00100/29.13. TAFD55 is already in the pinned runtime; the original explicitUnmatched marker prevented resolution. The actual final proxy selectsTAFD55. This corrects catalog availability and runtime labeling, not the physical production-glass identity. The source nd/vd and d-line optical prescription do not change.
Every final runtime selected proxy is found in the independently matched raw catalogs. Direct C/d/F/g evaluation agrees with runtime coefficient evaluation to floating precision; maximum recorded line residual is2.22e−16. No supplier/melt/APO claim follows. The plate proxy is separately checked. ForL13 the nativeS-NBH57 coordinate description and actualH-ZLaF76(CDGM) spectral proxy remain distinct; the latter rawnd differs by−0.00012. HOYAFCD515 is near1.59282/68.63 at68.62, not an exactAbbe identity. OHARAS-/L-prefix distinctions and legacyFPL51 are retained.
No patentnC/nF/ng/ΔPgF exists. Actual runtime spectral channels use the selected catalog formula and may differ slightly atd from source. The optional frozen independent spectral demonstration instead anchors source nd and adds catalog dispersion differences; it is explicitly a different comparison, not evidence of actual material spectrum. L3’s proxy change is covered by the full spectral/runtime replay.
Manufacturer primary sources corroborate15/11,17mmf1.2,MicroFourThirds,20cm,.15×,ED-DSA, announcement2017-10-26 and January2018 launch. The2017.9 manual visually confirms65° marketing field and dimensions; marketing65° is distinct from patent67.55°. Product correlation remains inferred, with no manufacturer statement confirming this exact patent prescription or glass melts.

## Actual focus, ray and render execution
The actual source-index runtime runs seven focus states:0,0.108887872551,0.217775745103,0.4,0.6,0.8,1. The three tabulated stations retain source distances; four others are labeled interpolation diagnostics. No invented cam or new engine fix is applied. All runtime vertices, rearplate planes and sensor planes agree with independent construction. Render trim is0mm at all seven states, with no layout setting hiding geometry.
The full physical-iris axial ensemble is101/101 transmitted at every state: source conjugates at published endpoints and adaptive conjugates for intermediate diagnostics. Required exact chiefs to5.4mm, published-state imageheight and canonical10.82mm format corner all transmit. The printed-field infinity chief is tested separately from the printed-IH targeting chief. These mandatory ensembles have no unsolved, clipped or failed samples.
Viewer labels, source distances and adaptive ray conjugates remain distinct. AtCL1 the adaptive object-to-image distance is911.635mm while source/displayed label is918.330mm; atfocus0.4 the adaptive value is418.644mm versus label499.975mm. No universalzero-Gaussian-defocus continuum gate is imposed. A diagnostic computed at an estimated label is not attributed to the actual adaptive ray fan. Finite-state sampling is not continuum or throughput proof.
Across heterogeneous diagnostic ensembles:5,791 attempted =5,648 constructed +143 unsolved aims. Constructed =4,218 transmitted +1,399 clipped +31 failed. OriginalStage3 counts were4,190 transmitted/1,427 clipped with the same other denominators. The28 changed statuses follow the source-supported rim corrections; no rays are deleted or counted after a clip.
Every constructed launch is independently retraced using vectorSnell and closed-form sphere intersections. All4,218 transmissions and1,399 clips agree; maximum image-coordinate residual4.671818488e−13mm. The31 raw failed packets remain failed in primary runtime denominators: independent physical proof finds23 clear-aperture exclusions and8TIR. No failed packet is promoted to transmitted. The first diagnostic trial recorded17 asphere intersection failures when seeking hits on rays already outside a finite clear cylinder; the retained follow-up proves the forward ray cannot enter that cylinder before asking for an intersection. This is an independent geometric disposition, not a change to either frozen source code or production solver. Trial records remain archived.
All143 unresolved peripheral aiming attempts remain separate, including their reasons. They are not reclassified as physical clips, excluded from attempted denominators or required to support the full-iris/chief acceptance checks. The primary current issue779 describes missed short grazing sphere chords and explicitly leaves catalog incidence unknown. None of these packets is attributed to it without evidence. No solver change or generic completeness claim is made.

### Full state-by-ensemble denominators
Attempted includes unsolved aiming; constructed includes every trace result, including raw failure. These are heterogeneous diagnostic samples, not throughput integration.

| focusT | Ensemble/field | Attempted | Constructed | Unsolved | Transmitted | Clipped | Failed |
|---:|---|---:|---:|---:|---:|---:|---:|

| 0.000000000000 | axial_nominal_viewer | 101 | 101 | 0 | 101 | 0 | 0 |

| 0.000000000000 | axial_full_iris_stop_aimed | 101 | 101 | 0 | 101 | 0 | 0 |

| 0.000000000000 | viewer_default_axial | 6 | 6 | 0 | 6 | 0 | 0 |

| 0.000000000000 | viewer_default_offaxis | 5 | 5 | 0 | 4 | 1 | 0 |

| 0.000000000000 | source_infinity_printed_field | 1 | 1 | 0 | 1 | 0 | 0 |

| 0.000000000000 | field_chief_Y5.4 | 1 | 1 | 0 | 1 | 0 | 0 |

| 0.000000000000 | field_disk_viewer_Y5.4 | 121 | 121 | 0 | 92 | 29 | 0 |

| 0.000000000000 | field_disk_stop_aimed_Y5.4 | 121 | 121 | 0 | 98 | 23 | 0 |

| 0.000000000000 | field_chief_Y10.81 | 1 | 1 | 0 | 1 | 0 | 0 |

| 0.000000000000 | field_disk_viewer_Y10.81 | 121 | 121 | 0 | 74 | 47 | 0 |

| 0.000000000000 | field_disk_stop_aimed_Y10.81 | 121 | 112 | 9 | 59 | 52 | 1 |

| 0.000000000000 | field_chief_Y10.82 | 1 | 1 | 0 | 1 | 0 | 0 |

| 0.000000000000 | field_disk_viewer_Y10.82 | 121 | 121 | 0 | 74 | 47 | 0 |

| 0.000000000000 | field_disk_stop_aimed_Y10.82 | 121 | 112 | 9 | 59 | 52 | 1 |

| 0.000000000000 | spectral_proxy_R | 6 | 6 | 0 | 6 | 0 | 0 |

| 0.000000000000 | spectral_proxy_G | 6 | 6 | 0 | 6 | 0 | 0 |

| 0.000000000000 | spectral_proxy_B | 6 | 6 | 0 | 6 | 0 | 0 |

| 0.000000000000 | spectral_proxy_V | 6 | 6 | 0 | 6 | 0 | 0 |

| 0.108887872551 | axial_nominal_viewer | 101 | 101 | 0 | 99 | 2 | 0 |

| 0.108887872551 | axial_full_iris_stop_aimed | 101 | 101 | 0 | 101 | 0 | 0 |

| 0.108887872551 | viewer_default_axial | 6 | 6 | 0 | 6 | 0 | 0 |

| 0.108887872551 | viewer_default_offaxis | 5 | 5 | 0 | 4 | 1 | 0 |

| 0.108887872551 | field_chief_Y5.4 | 1 | 1 | 0 | 1 | 0 | 0 |

| 0.108887872551 | field_disk_viewer_Y5.4 | 121 | 121 | 0 | 90 | 31 | 0 |

| 0.108887872551 | field_disk_stop_aimed_Y5.4 | 121 | 121 | 0 | 98 | 23 | 0 |

| 0.108887872551 | field_chief_Y10.82 | 1 | 1 | 0 | 1 | 0 | 0 |

| 0.108887872551 | field_disk_viewer_Y10.82 | 121 | 121 | 0 | 72 | 49 | 0 |

| 0.108887872551 | field_disk_stop_aimed_Y10.82 | 121 | 112 | 9 | 59 | 52 | 1 |

| 0.108887872551 | spectral_proxy_R | 6 | 6 | 0 | 6 | 0 | 0 |

| 0.108887872551 | spectral_proxy_G | 6 | 6 | 0 | 6 | 0 | 0 |

| 0.108887872551 | spectral_proxy_B | 6 | 6 | 0 | 6 | 0 | 0 |

| 0.108887872551 | spectral_proxy_V | 6 | 6 | 0 | 6 | 0 | 0 |

| 0.217775745103 | axial_nominal_viewer | 101 | 101 | 0 | 97 | 4 | 0 |

| 0.217775745103 | axial_full_iris_stop_aimed | 101 | 101 | 0 | 101 | 0 | 0 |

| 0.217775745103 | viewer_default_axial | 6 | 6 | 0 | 6 | 0 | 0 |

| 0.217775745103 | viewer_default_offaxis | 5 | 5 | 0 | 4 | 1 | 0 |

| 0.217775745103 | field_chief_Y5.4 | 1 | 1 | 0 | 1 | 0 | 0 |

| 0.217775745103 | field_disk_viewer_Y5.4 | 121 | 121 | 0 | 90 | 31 | 0 |

| 0.217775745103 | field_disk_stop_aimed_Y5.4 | 121 | 121 | 0 | 98 | 23 | 0 |

| 0.217775745103 | field_chief_Y10.89 | 1 | 1 | 0 | 1 | 0 | 0 |

| 0.217775745103 | field_disk_viewer_Y10.89 | 121 | 121 | 0 | 68 | 53 | 0 |

| 0.217775745103 | field_disk_stop_aimed_Y10.89 | 121 | 112 | 9 | 59 | 50 | 3 |

| 0.217775745103 | field_chief_Y10.82 | 1 | 1 | 0 | 1 | 0 | 0 |

| 0.217775745103 | field_disk_viewer_Y10.82 | 121 | 121 | 0 | 70 | 51 | 0 |

| 0.217775745103 | field_disk_stop_aimed_Y10.82 | 121 | 112 | 9 | 59 | 50 | 3 |

| 0.217775745103 | spectral_proxy_R | 6 | 6 | 0 | 6 | 0 | 0 |

| 0.217775745103 | spectral_proxy_G | 6 | 6 | 0 | 6 | 0 | 0 |

| 0.217775745103 | spectral_proxy_B | 6 | 6 | 0 | 6 | 0 | 0 |

| 0.217775745103 | spectral_proxy_V | 6 | 6 | 0 | 6 | 0 | 0 |

| 0.400000000000 | axial_nominal_viewer | 101 | 101 | 0 | 93 | 8 | 0 |

| 0.400000000000 | axial_full_iris_stop_aimed | 101 | 101 | 0 | 101 | 0 | 0 |

| 0.400000000000 | viewer_default_axial | 6 | 6 | 0 | 6 | 0 | 0 |

| 0.400000000000 | viewer_default_offaxis | 5 | 5 | 0 | 4 | 1 | 0 |

| 0.400000000000 | field_chief_Y5.4 | 1 | 1 | 0 | 1 | 0 | 0 |

| 0.400000000000 | field_disk_viewer_Y5.4 | 121 | 121 | 0 | 90 | 31 | 0 |

| 0.400000000000 | field_disk_stop_aimed_Y5.4 | 121 | 121 | 0 | 100 | 21 | 0 |

| 0.400000000000 | field_chief_Y10.82 | 1 | 1 | 0 | 1 | 0 | 0 |

| 0.400000000000 | field_disk_viewer_Y10.82 | 121 | 121 | 0 | 70 | 51 | 0 |

| 0.400000000000 | field_disk_stop_aimed_Y10.82 | 121 | 114 | 7 | 65 | 46 | 3 |

| 0.400000000000 | spectral_proxy_R | 6 | 6 | 0 | 6 | 0 | 0 |

| 0.400000000000 | spectral_proxy_G | 6 | 6 | 0 | 6 | 0 | 0 |

| 0.400000000000 | spectral_proxy_B | 6 | 6 | 0 | 6 | 0 | 0 |

| 0.400000000000 | spectral_proxy_V | 6 | 6 | 0 | 6 | 0 | 0 |

| 0.600000000000 | axial_nominal_viewer | 101 | 101 | 0 | 89 | 12 | 0 |

| 0.600000000000 | axial_full_iris_stop_aimed | 101 | 101 | 0 | 101 | 0 | 0 |

| 0.600000000000 | viewer_default_axial | 6 | 6 | 0 | 4 | 2 | 0 |

| 0.600000000000 | viewer_default_offaxis | 5 | 5 | 0 | 4 | 1 | 0 |

| 0.600000000000 | field_chief_Y5.4 | 1 | 1 | 0 | 1 | 0 | 0 |

| 0.600000000000 | field_disk_viewer_Y5.4 | 121 | 121 | 0 | 88 | 33 | 0 |

| 0.600000000000 | field_disk_stop_aimed_Y5.4 | 121 | 110 | 11 | 96 | 14 | 0 |

| 0.600000000000 | field_chief_Y10.82 | 1 | 1 | 0 | 1 | 0 | 0 |

| 0.600000000000 | field_disk_viewer_Y10.82 | 121 | 121 | 0 | 72 | 49 | 0 |

| 0.600000000000 | field_disk_stop_aimed_Y10.82 | 121 | 112 | 9 | 67 | 42 | 3 |

| 0.600000000000 | spectral_proxy_R | 6 | 6 | 0 | 4 | 2 | 0 |

| 0.600000000000 | spectral_proxy_G | 6 | 6 | 0 | 4 | 2 | 0 |

| 0.600000000000 | spectral_proxy_B | 6 | 6 | 0 | 4 | 2 | 0 |

| 0.600000000000 | spectral_proxy_V | 6 | 6 | 0 | 4 | 2 | 0 |

| 0.800000000000 | axial_nominal_viewer | 101 | 101 | 0 | 85 | 16 | 0 |

| 0.800000000000 | axial_full_iris_stop_aimed | 101 | 101 | 0 | 101 | 0 | 0 |

| 0.800000000000 | viewer_default_axial | 6 | 6 | 0 | 4 | 2 | 0 |

| 0.800000000000 | viewer_default_offaxis | 5 | 5 | 0 | 4 | 1 | 0 |

| 0.800000000000 | field_chief_Y5.4 | 1 | 1 | 0 | 1 | 0 | 0 |

| 0.800000000000 | field_disk_viewer_Y5.4 | 121 | 121 | 0 | 86 | 35 | 0 |

| 0.800000000000 | field_disk_stop_aimed_Y5.4 | 121 | 108 | 13 | 94 | 14 | 0 |

| 0.800000000000 | field_chief_Y10.82 | 1 | 1 | 0 | 1 | 0 | 0 |

| 0.800000000000 | field_disk_viewer_Y10.82 | 121 | 121 | 0 | 70 | 46 | 5 |

| 0.800000000000 | field_disk_stop_aimed_Y10.82 | 121 | 110 | 11 | 67 | 40 | 3 |

| 0.800000000000 | spectral_proxy_R | 6 | 6 | 0 | 4 | 2 | 0 |

| 0.800000000000 | spectral_proxy_G | 6 | 6 | 0 | 4 | 2 | 0 |

| 0.800000000000 | spectral_proxy_B | 6 | 6 | 0 | 4 | 2 | 0 |

| 0.800000000000 | spectral_proxy_V | 6 | 6 | 0 | 4 | 2 | 0 |

| 1.000000000000 | axial_nominal_viewer | 101 | 101 | 0 | 81 | 20 | 0 |

| 1.000000000000 | axial_full_iris_stop_aimed | 101 | 101 | 0 | 101 | 0 | 0 |

| 1.000000000000 | viewer_default_axial | 6 | 6 | 0 | 4 | 2 | 0 |

| 1.000000000000 | viewer_default_offaxis | 5 | 5 | 0 | 4 | 1 | 0 |

| 1.000000000000 | field_chief_Y5.4 | 1 | 1 | 0 | 1 | 0 | 0 |

| 1.000000000000 | field_disk_viewer_Y5.4 | 121 | 121 | 0 | 80 | 41 | 0 |

| 1.000000000000 | field_disk_stop_aimed_Y5.4 | 121 | 100 | 21 | 94 | 6 | 0 |

| 1.000000000000 | field_chief_Y10.79 | 1 | 1 | 0 | 1 | 0 | 0 |

| 1.000000000000 | field_disk_viewer_Y10.79 | 121 | 121 | 0 | 72 | 49 | 0 |

| 1.000000000000 | field_disk_stop_aimed_Y10.79 | 121 | 108 | 13 | 71 | 34 | 3 |

| 1.000000000000 | field_chief_Y10.82 | 1 | 1 | 0 | 1 | 0 | 0 |

| 1.000000000000 | field_disk_viewer_Y10.82 | 121 | 121 | 0 | 70 | 51 | 0 |

| 1.000000000000 | field_disk_stop_aimed_Y10.82 | 121 | 108 | 13 | 69 | 34 | 5 |

| 1.000000000000 | spectral_proxy_R | 6 | 6 | 0 | 4 | 2 | 0 |

| 1.000000000000 | spectral_proxy_G | 6 | 6 | 0 | 4 | 2 | 0 |

| 1.000000000000 | spectral_proxy_B | 6 | 6 | 0 | 4 | 2 | 0 |

| 1.000000000000 | spectral_proxy_V | 6 | 6 | 0 | 4 | 2 | 0 |

### Every raw constructed failure
The full terminal points/normals/indices and independent physical exclusion bounds remain in results.runtimeFailureDispositions and results.independentPacketAudit.

| focusT | Ensemble | Ray | Raw failure | Physical disposition |
|---:|---|---:|---|---|

| 0.000000000000 | field_disk_stop_aimed_Y10.81 | 91 | noBracket | OUTSIDE_NEXT_CLEAR_APERTURE_MOVING_OUTWARD |

| 0.000000000000 | field_disk_stop_aimed_Y10.82 | 91 | noBracket | OUTSIDE_NEXT_CLEAR_APERTURE_MOVING_OUTWARD |

| 0.108887872551 | field_disk_stop_aimed_Y10.82 | 91 | noBracket | OUTSIDE_NEXT_CLEAR_APERTURE_MOVING_OUTWARD |

| 0.217775745103 | field_disk_stop_aimed_Y10.89 | 90 | noBracket | OUTSIDE_NEXT_CLEAR_APERTURE_MOVING_OUTWARD |

| 0.217775745103 | field_disk_stop_aimed_Y10.89 | 91 | noBracket | OUTSIDE_NEXT_CLEAR_APERTURE_MOVING_OUTWARD |

| 0.217775745103 | field_disk_stop_aimed_Y10.89 | 92 | noBracket | OUTSIDE_NEXT_CLEAR_APERTURE_MOVING_OUTWARD |

| 0.217775745103 | field_disk_stop_aimed_Y10.82 | 90 | noBracket | EXITS_CLEAR_APERTURE_BEFORE_REACHING_SURFACE |

| 0.217775745103 | field_disk_stop_aimed_Y10.82 | 91 | noBracket | OUTSIDE_NEXT_CLEAR_APERTURE_MOVING_OUTWARD |

| 0.217775745103 | field_disk_stop_aimed_Y10.82 | 92 | noBracket | EXITS_CLEAR_APERTURE_BEFORE_REACHING_SURFACE |

| 0.400000000000 | field_disk_stop_aimed_Y10.82 | 90 | noBracket | OUTSIDE_NEXT_CLEAR_APERTURE_MOVING_OUTWARD |

| 0.400000000000 | field_disk_stop_aimed_Y10.82 | 91 | noBracket | OUTSIDE_NEXT_CLEAR_APERTURE_MOVING_OUTWARD |

| 0.400000000000 | field_disk_stop_aimed_Y10.82 | 92 | noBracket | OUTSIDE_NEXT_CLEAR_APERTURE_MOVING_OUTWARD |

| 0.600000000000 | field_disk_stop_aimed_Y10.82 | 90 | noBracket | OUTSIDE_NEXT_CLEAR_APERTURE_MOVING_OUTWARD |

| 0.600000000000 | field_disk_stop_aimed_Y10.82 | 91 | noBracket | OUTSIDE_NEXT_CLEAR_APERTURE_MOVING_OUTWARD |

| 0.600000000000 | field_disk_stop_aimed_Y10.82 | 92 | noBracket | OUTSIDE_NEXT_CLEAR_APERTURE_MOVING_OUTWARD |

| 0.800000000000 | field_disk_viewer_Y10.82 | 89 | noBracket | OUTSIDE_NEXT_CLEAR_APERTURE_MOVING_OUTWARD |

| 0.800000000000 | field_disk_viewer_Y10.82 | 90 | noBracket | OUTSIDE_NEXT_CLEAR_APERTURE_MOVING_OUTWARD |

| 0.800000000000 | field_disk_viewer_Y10.82 | 91 | totalInternalReflection | PHYSICAL_TOTAL_INTERNAL_REFLECTION |

| 0.800000000000 | field_disk_viewer_Y10.82 | 92 | noBracket | OUTSIDE_NEXT_CLEAR_APERTURE_MOVING_OUTWARD |

| 0.800000000000 | field_disk_viewer_Y10.82 | 93 | noBracket | OUTSIDE_NEXT_CLEAR_APERTURE_MOVING_OUTWARD |

| 0.800000000000 | field_disk_stop_aimed_Y10.82 | 90 | noBracket | OUTSIDE_NEXT_CLEAR_APERTURE_MOVING_OUTWARD |

| 0.800000000000 | field_disk_stop_aimed_Y10.82 | 91 | totalInternalReflection | PHYSICAL_TOTAL_INTERNAL_REFLECTION |

| 0.800000000000 | field_disk_stop_aimed_Y10.82 | 92 | noBracket | OUTSIDE_NEXT_CLEAR_APERTURE_MOVING_OUTWARD |

| 1.000000000000 | field_disk_stop_aimed_Y10.79 | 90 | totalInternalReflection | PHYSICAL_TOTAL_INTERNAL_REFLECTION |

| 1.000000000000 | field_disk_stop_aimed_Y10.79 | 91 | totalInternalReflection | PHYSICAL_TOTAL_INTERNAL_REFLECTION |

| 1.000000000000 | field_disk_stop_aimed_Y10.79 | 92 | totalInternalReflection | PHYSICAL_TOTAL_INTERNAL_REFLECTION |

| 1.000000000000 | field_disk_stop_aimed_Y10.82 | 89 | noBracket | EXITS_CLEAR_APERTURE_BEFORE_REACHING_SURFACE |

| 1.000000000000 | field_disk_stop_aimed_Y10.82 | 90 | totalInternalReflection | PHYSICAL_TOTAL_INTERNAL_REFLECTION |

| 1.000000000000 | field_disk_stop_aimed_Y10.82 | 91 | totalInternalReflection | PHYSICAL_TOTAL_INTERNAL_REFLECTION |

| 1.000000000000 | field_disk_stop_aimed_Y10.82 | 92 | totalInternalReflection | PHYSICAL_TOTAL_INTERNAL_REFLECTION |

| 1.000000000000 | field_disk_stop_aimed_Y10.82 | 93 | noBracket | EXITS_CLEAR_APERTURE_BEFORE_REACHING_SURFACE |

## Correction, verification and history ledger
1. Before disclosure: fresh source extraction and numerical implementation; own exit-pupil code corrected to include stop-to-s14 propagation, before freezing. Original trials retained. No source fitting.
2. PassB original-candidate replay: exact fullJSON equality with Stage3 after removing only environment.timestampUTC. This confirms reproducibility, not source correctness.
3. Six native SDs corrected from source pixels/equation identity; all frozen/author values retained above. Shared-cement/flange readings corrected separately where appropriate, without changing source tables.
4. L3 coordinate-class label corrected from explicitUnmatched toqualifiedTAFD55/TAFD55-W; actual resolver/spectral channels rerun. No new glass data or engine code authored.
5. Minimal conditionalgapSagFrac0.961 adopted after0.90/0.95/0.96 independently and actually fail. Source2→3 physical gap remainspositive; no overlap/slopes/edges/domains/render waiver.
6. Supplemental strictp31 and conditionalFNO precision, finite-field definition and preferred-bound observations are added without changing original raw failures.
7. Final analysis regenerated from actual final values and separate independent baseline, with updated rims/glass/policy/denominators and definition limits. Unsupported full-sensor/source-summary equivalence or APO claims are not made.
8. The consolidated verifier replaces stale Stage3 unchanged-byte approval gates with exact original-history identities, authorized-delta checks and final-byte checks. Frozen baseline source/code/catalog remain exact; no historicalPASS is inherited as proof of the corrected model.
9. Actual-file negative fixtures compile/parse altered radius, rim, glass label and allowance and are rejected by the same source/delta predicates. Original strict TypeScript grammar/duplicate/arithmetic/spread/trailing/negative-schema fixtures remain. Fourteen actual analysis mutation fixtures target EFL, sign, field, focusplane, denominators, prefixes, asphere, attribution, structure, continuum, policy, source convention and unbound prose. RealPrettier rejects a malformed-format file.
10. A nonnumerical read-only helper reviewed dossier/gate/dependency requirements and current primary issue779. It performed no optical calculations or candidate-verifier execution. This reviewer was the only numerical worker in this lane.

## Quantitative and interpretive claim map
Every analysis block is regenerated from fresh source/native/runtime/independent values. The following map binds all blocks, including element roles and metadata, to stable factIDs and detailed result/source references. Text equality is a claim-binding test, not proof of an optical interpretation; manual review below independently checks the prose against the original source.

- **S4_F01** / `identification` → `rawPrescription.metadata`; `finalNative.patentNumber/patentAuthors/patentAssignees/patentYear`; `facts.F01-F06,F08`; `implementedModel.INF.metrics`; `implementedModel.CL2.metrics`; `evidence.productCorrelation`.

- **S4_F02** / `architecture` → `implementedModel.groupPowers`; `implementedModel.INF.cardinalLastLens`; `sourceModel.INF.plate`; `implementedModel.INF.physicalImagePlaneMm/cameraPlateAirEquivalentMm`; `finalNative.rearPlates/surfaces`; `evidence.conventions`; `facts.S2_F04`.

- **S4_F03** / `elements_intro` → `checks.STANDALONE_ELEMENT_FOCAL_LABELS`; `implementedModel.groupPowers`; `finalNative.elements`; `rawPrescription.elements`; `patent printed columns 18–19`.

- **S4_F04** / `element_L1` → `finalNative.elements.L1`; `checks.STANDALONE_ELEMENT_FOCAL_LABELS.computed.L1`; `implementedModel.groupPowers`; `patent printed columns 5–8,18–19`.

- **S4_F05** / `element_L2` → `finalNative.elements.L2`; `checks.STANDALONE_ELEMENT_FOCAL_LABELS.computed.L2`; `implementedModel.groupPowers`; `patent printed columns 5–8,18–19`.

- **S4_F06** / `element_L3` → `finalNative.elements.L3`; `checks.STANDALONE_ELEMENT_FOCAL_LABELS.computed.L3`; `implementedModel.groupPowers`; `patent printed columns 5–8,18–19`.

- **S4_F07** / `element_L4` → `finalNative.elements.L4`; `checks.STANDALONE_ELEMENT_FOCAL_LABELS.computed.L4`; `implementedModel.groupPowers`; `patent printed columns 5–8,18–19`.

- **S4_F08** / `element_L5` → `finalNative.elements.L5`; `checks.STANDALONE_ELEMENT_FOCAL_LABELS.computed.L5`; `implementedModel.groupPowers`; `patent printed columns 5–8,18–19`.

- **S4_F09** / `element_L6` → `finalNative.elements.L6`; `checks.STANDALONE_ELEMENT_FOCAL_LABELS.computed.L6`; `implementedModel.groupPowers`; `patent printed columns 5–8,18–19`.

- **S4_F10** / `element_L7` → `finalNative.elements.L7`; `checks.STANDALONE_ELEMENT_FOCAL_LABELS.computed.L7`; `implementedModel.groupPowers`; `patent printed columns 5–8,18–19`.

- **S4_F11** / `element_L8` → `finalNative.elements.L8`; `checks.STANDALONE_ELEMENT_FOCAL_LABELS.computed.L8`; `implementedModel.groupPowers`; `patent printed columns 5–8,18–19`.

- **S4_F12** / `element_L9` → `finalNative.elements.L9`; `checks.STANDALONE_ELEMENT_FOCAL_LABELS.computed.L9`; `implementedModel.groupPowers`; `patent printed columns 5–8,18–19`.

- **S4_F13** / `element_L10` → `finalNative.elements.L10`; `checks.STANDALONE_ELEMENT_FOCAL_LABELS.computed.L10`; `implementedModel.groupPowers`; `patent printed columns 5–8,18–19`.

- **S4_F14** / `element_L11` → `finalNative.elements.L11`; `checks.STANDALONE_ELEMENT_FOCAL_LABELS.computed.L11`; `implementedModel.groupPowers`; `patent printed columns 5–8,18–19`.

- **S4_F15** / `element_L12` → `finalNative.elements.L12`; `checks.STANDALONE_ELEMENT_FOCAL_LABELS.computed.L12`; `implementedModel.groupPowers`; `patent printed columns 5–8,18–19`.

- **S4_F16** / `element_L13` → `finalNative.elements.L13`; `checks.STANDALONE_ELEMENT_FOCAL_LABELS.computed.L13`; `implementedModel.groupPowers`; `patent printed columns 5–8,18–19`.

- **S4_F17** / `element_L14` → `finalNative.elements.L14`; `checks.STANDALONE_ELEMENT_FOCAL_LABELS.computed.L14`; `implementedModel.groupPowers`; `patent printed columns 5–8,18–19`.

- **S4_F18** / `element_L15` → `finalNative.elements.L15`; `checks.STANDALONE_ELEMENT_FOCAL_LABELS.computed.L15`; `implementedModel.groupPowers`; `patent printed columns 5–8,18–19`.

- **S4_F19** / `glass` → `finalNative.elements/rearPlates`; `runtime.glass`; `sourceModel.catalogRecomputedRows`; `evidence.glassEvidence`; `evidence.conventions.wavelengthsMicrometers`; `evidence.focus/productCorrelation`; `rawPrescription.states`; `implementedModel.focusMotions`; `implementedModel.CL1/CL2.metrics`.

- **S4_F20** / `adaptive_focus` → `runtime.states.focusT/conjugateK/inferredViewerObjectFirstVertexMm/estimatedObjectImageLabelMm/layout.imgZ`; `facts.S2_F03`; `checks.REAL_RUNTIME_ADAPTIVE_FOCUS`.

- **S4_F21** / `aspheres` → `finalNative.asph`; `rawPrescription.aspheres.rawText`; `evidence.conventions`; `implementedModel.INF.geometry.surfaces`; `manufacturer_announcement`.

- **S4_F22** / `chromatic` → `implementedModel.petzvalSumPerMm/perSurfacePetzval`; `implementedModel.conditions`; `rawPrescription.conditions/conditionsSource`; `patent printed columns 5–10,18–19,24`.

- **S4_F23** / `verification_optics` → `implementedModel.INF.exactAperture`; `sourceModel.INF.gaussianPupils`; `implementedModel.infinityField`; `sourceModel.infinityField`; `comparisons`; `evidence.discrepancyDispositions/stage2Construction.fieldSummaryReview`; `finalNative.sourceErrata`.

- **S4_F24** / `verification_sampling` → `runtime.states.tests`; `runtimeFailureDispositions`; `runtimeUnsolvedAims`; `implementedModel.*.geometry`; `runtime.states.renderDiagnostics`; `checks`; `stage2_support.issue779.json`.

- **S4_F25** / `independent_source_comparisons` → `independentBaseline.recomputed.sourceModel.comparisons`; `independentBaseline.recomputed.sourceModel.preferredConditions`; `independentBaseline.recomputed.sourceModel.sourceRoundingSensitivity`; `evidence.stage4SupplementalSource`; `checks.INDEPENDENT_BASELINE_REPLAY`.

- **S4_F26** / `sources` → `evidence.sources`; `evidence.rawPrescription.metadata`; `environment.runtimeCommit`.

Additional native-string bindings: patentNumber/authors/assignees/year, maker/key/name/mount/format and15/11 counts → originalcard/patentp1/manufacturer sources plusactualschema/taxonomy/source mapping; focalLengthDesign/nominalFno/specs → actualsourceEFL/exactiris/retained-sourcefield; elementtype/name/fl/cemented → originaltopology, independentstandalonepowers and cementedspans; glass strings → rawsix-makercoordinates/runtimeproxyrecords; focusDescription/closeFocusM/positions/conjugates → literalgaps/d0/referenceplanes and actualadaptive results; sourceErrata → unresolvedstrictcomparisons/figuredefinitions. Fullstrings are in the immutable governing native revision.
Manual interpretive review covered all12 required analysis sections and15 ordered element paragraphs: power/shape and unit membership, asphere-sign versus full-profile statements, patent-grounded group-level correction explanations, air-lens description, source/manufacturer inference boundaries, historical dates, physicalplate/referenceplanes, optical versus marketingfield/f-number, catalog proxies versusactualglass, source/label/adaptivefocus, every stated limitation and linked primary source. No individual aberration cancellation, manufacturing method, unique supplier, measuredMTF or APO claim is inferred from coordinate match or topology. Claimmap/manualreceipt is bound to the exact native and analysisSHA256 above.

## Portable dependencies, archive-only replay and pending integration
Canonical inventory is14 root files: the normal nine plus exact independent source/code, independent catalog parser/evidence and one essential reconciliation figure. No nestedZIP, cache, repeated draft or working log is inside the canonical dossier. All large shared raw sources and authenticated runtime/toolchain inputs are versioned archive dependencies listed by exactsize/SHA256 in evidence.stage4Dependencies and manifest.references.
Required sibling `archives/` contains the unchanged neutral sourceZIP, PassAZIP, Stage3ZIP and Stage3runtime-supportZIP. The complete verifier authenticates and safely extracts them under its external output working directory, then recomputes the actual final TypeScript values, independent source/final paths, raw catalogs, realruntime/schema/formatter, proof/negative fixtures and report. It never imports from the original job directory or reads stored calculated outputs as calculation inputs. Stored baseline/original results are only exact comparison references. All restored and canonicalinputbytes must remain unchanged.
Generic environment: Linuxx86-64; Python3.12.14, NumPy2.3.5, SciPy1.17.0, openpyxl3.1.5, Node24.19.0. Authenticated officialTypeScript5.9.3, Prettier3.6.2 and esbuild0.25.11 tarballs are restored without lifecycle scripts/networkfetch. PyMuPDF/Pillow were only used to inspect/render source figures and retain evidence; final numerical replay does not require them. Every custom runtime/report/reconciliation function is in the canonical verifier or declared exact baseline/parser files; restored author harness/source is identified by hash.

```text
python canonical/OlympusMZuikoDigitalED17mmF12Pro.verify.py --package-dir canonical --dependency-dir archives --output recomputed/results.json
```

Choose a new output directory each time; inputs are never overwritten. The final archive-only replay script creates a fresh empty destination from the canonicalZIP and fourversioneddependencies, authenticatesCRC/memberinventory/SHA256/originalPDF/card/JSON/UTF8, executes the above command, compares the complete resultingJSON after removing only environment.timestampUTC, and verifies all canonical/restoredinputs unchanged. No other numeric field is normalized. The external receipt binds finalarchive/hash/memberbytes and validationoutcomes. A changed finalfile requires rebuilding/replaying the archive.
Repository-wide typecheck/lint/tests, corpus-policy sweeps and fullproductionbuild/prerender remain exactlythree NOT_RUN integration checks. They were genuinely not attempted. Applicable observedFAIL cannot be converted to integrationNOT_RUN. The gate fails for anymandatoryFAIL/unperformedcheck, except those three declared repository-onlyNOT_RUN items. The exact final data/analysis fingerprints in results, manifest and the externalfreeze receipt govern this approval. [Closed 2026-10-13: those repository-wide checks belong to the repository's own integration and are not recorded in this log.]
No Mac/Library/Git write, sharedqueue/index mutation, integration, enrollment, publication or upload was performed by this reviewer. All unique source, trial, result, fixture and frozen records are retained; recoverable duplicate tool/source trees may be referenced through versioned dependencies in the history inventory. Final numerical work stops once the verified freeze is delivered to the coordinator.

## 2026-10-13 — Semi-diameter pass against the patent figure

Source: `patents/US10073255B2.pdf`, PDF page 6 (Sheet 4 of 16), FIG. 4, the infinity section of Example 4. The page is a 2560 × 3300 px one-bit scan at 300 dpi and was measured at that native resolution. No maker diagram was supplied for this pass and none was viewed; the patent figure governs.

Scale. Vertex crossings were read 10–20 px above the dash-dot axis and matched to the prescription at infinity: surface 1 at x = 641 px and surface 27 at 1719 px give 1078 px over 87.83 mm (12.274 px/mm); surface 1 to the image line at 1930 px gives 1289 px over 104.99 mm (12.277 px/mm); surfaces 3A to 12 give 368 px over 30.03 mm (12.254 px/mm). The adopted scale is 12.272 px/mm (81.5 µm per px). All 20 separately resolved vertices fall within 1.4 px of the prescription at that scale. The scan is rotated by about 0.2° (axis at y = 2099 px near x = 600, 2095 px near x = 1760), so every height below is half the distance between the upper and lower reading, which cancels the axis position.

Method. Cap heights are the centres of the flat rim lines above and below the axis. Curve ends are read two ways that agree to 0.05 mm: the row where the flat annulus line stops and the curve leaves it, and the height at which the prescription sag reaches the annulus centreline. Each surface equation was also drawn over the raster at the fixed scale to confirm which ink is glass and which is leader line.

| Element | Cap rows, upper / lower (px) | Cap height (mm) | Stored before |
| ------- | ---------------------------- | --------------: | ------------- |
| L1      | 1873 / 2322.5                |           18.31 | 18.4          |
| L2      | 1922 / 2273                  |           14.30 | 14.3          |
| L3      | 1945 / 2249                  |           12.39 | 12.1          |
| L4      | 1949 / 2245                  |           12.06 | 12.1          |
| L5      | 1951 / 2243                  |           11.90 | flange        |
| L6      | 1940 / 2252                  |           12.71 | 12.7          |
| L7      | 1928 / 2266                  |           13.77 | 13.8          |
| L8      | 1898 / 2294.5                |           16.15 | 16.2          |
| L9      | 1906 / 2287                  |           15.52 | 15.5          |
| L10     | 1910 / 2281                  |           15.12 | 15.1          |
| L11     | 1921.5 / 2269.5              |           14.18 | 14.2          |
| L12     | 1930 / 2260.5                |           13.47 | 13.6          |
| L13     | 1963 / 2228                  |           10.80 | 10.9          |
| L14     | 1966 / 2222                  |           10.43 | 10.6          |
| L15     | 1952 / 2236                  |           11.57 | 11.6          |

Five surfaces changed; 21 lens surfaces and the iris are retained.

| Surface | Before | Figure | After | Basis                                      |
| ------- | -----: | -----: | ----: | ------------------------------------------ |
| 5       |   12.1 |  12.39 |  12.4 | square-cut L3 cap                          |
| 6       |   12.1 |  12.39 |  12.4 | square-cut L3 cap, rear face               |
| 20A     |   14.2 |  13.30 |  13.3 | concave curve ends at a flat annulus       |
| 24      |   10.6 |  10.80 |  10.9 | square-cut L13, one height with surface 23 |
| 25      |   10.6 |   9.51 |   9.5 | concave curve ends at a flat annulus       |

Surfaces 5 and 6. L3 is drawn square-cut, 4 px above the L4 cap on both sides of the axis. The stored 12.1 mm was the L4 cap height, which left L3 0.1 mm below the rear rim of L2; the figure draws the L3 cap at or just above the end of the 4A curve, where both meet the L2 annulus. Both faces now carry L3's own height, as surfaces 9 and 10 already do for the square-cut L6. The 4A→5 shared band stays at 12.2 mm (fraction 0.93249, clearance 0.279 mm).

Surface 20A. The concave rear curve of L11 meets a flat annulus that rises to the 14.18 mm cap. The annulus ends at rows 1931 and 2257.5 (13.30 mm), and the sag reaches the annulus centreline at 13.33 mm. The old value drew the rear corner 0.7 mm behind the drawn one and put the L11 rear rim above the L12 cap, where the figure draws it below.

Surface 24. L13 is drawn square-cut, so both faces carry the retained 10.9 mm of surface 23. L14's own cap is lower (10.43 mm) and cannot be shown at a shared interface.

Surface 25. The concave rear curve of L14 meets a flat annulus that rises to the 10.43 mm cap. The annulus ends at rows 1979 and 2212.5 (9.51 mm), and the sag reaches the annulus centreline at 9.46 mm. This was the one rim more than 10 % from the drawing.

Retained, with the figure reading: surface 1 at 18.4 (18.31); 2 at 14.3 (ends at the L1 rear annulus level with the L2 cap, and 14.3 is also the 0.9 R rim-slope limit); 3A at 14.3 (14.30); 4A at 12.2 (12.35 from the upper side only, the lower side being crossed by a leader); 7 and 8 at 9.8 (10.1, where the two touching annuli split at rows 1973 and 2221; 3 %, same order as drawn); 9 and 10 at 12.7 (12.71, square-cut L6); 11 and 12 at 13.8 (13.77); 14 and 15 at 16.2 (16.15); 16 at 15.5 (15.52); 17 and 18 at 15.1 (15.12, square-cut L10; L9 is drawn 0.4 mm taller, and one shared interface cannot give both elements a square rim); 19A at 14.2 (14.18); 21A and 22A at 13.6 (13.47); 23 at 10.9 (10.80); 26 and 27 at 11.6 (11.57). The iris stays at the published 14.49 mm.

Clearance with the new rims. The exact full-iris axial marginal ray was traced from the source conjugates. Heights at the changed surfaces, INF / CL1 / CL2: surface 5, 8.306 / 8.235 / 7.795; surface 6, 8.502 / 8.441 / 8.065; 20A, 12.748 / 12.789 / 13.040; 24, 9.975 / 9.884 / 9.324; 25, 8.913 / 8.841 / 8.398. The smallest margin anywhere is 0.234 mm at 21A in CL2, unchanged by this pass; 20A keeps 0.260 mm in CL2 and 25 keeps 0.587 mm at infinity. The engine's own fan of 101 on-axis rays filling the iris transmits 101/101 at all seven focus states of the earlier audit, including with the object distance moved 15 % either way. The format-corner chief ray reaches 10.82 mm at 34.7° with no rim stopping it, and no chief-ray block appears at CL1 or CL2. On-axis longitudinal spherical aberration of the prescription is 0.010 mm at full pupil, so no rim was judged against an aberrated ray.

Engine values before and after are identical: EFL 16.6718 mm, wide-open f-number 1.2399, modeled half-field 37.063°. The validator accepts the file with the existing gap allowance; the controlling band is still 2→3A at 0.960236, and the new 20A→21A and 25→26 bands are 0.3569 and 0.1159 at infinity. Edge thickness is 1.699 mm for L3 and 1.301 mm for L13 at their rims.

Off-axis effect. The meridional bundle passed, as a share of the stop diameter, before → after: at infinity 12° 92.8 → 91.7, 20° 81.4 → 79.0, 27° 68.6 → 64.8, 30° 53.9 → 53.1, 34.7° 28.1 → 28.1; at CL2 20° 84.4 → 81.7, 30° 64.2 → 59.3, 34.7° 38.4 → 37.3. Surface 25 replaces 23/24 as the upper-ray limit at mid field. This is vignetting the drawing supports, and it is kept.

Aspheric follow-up. With 20A at 13.3 mm its rim departure from the base sphere is +1015.903 µm and its rim slope 36.282°; the analysis table row was updated from +1388.758 µm and 40.971°. The other five aspheric rims did not move.

Limitations. The renderer joins each element's front and rear rim with a straight edge, so the square flanges the figure draws on L1, L2, L4, L5, L11 and L14 appear as slopes, and the touching L4/L5 annuli appear as a notch. A cemented interface carries one height, so the 0.33 mm L3/L4, 0.81 mm L5/L6, 0.40 mm L9/L10 and 0.37 mm L13/L14 cap steps cannot all be shown. Surface 4A read 12.35 mm; it stays at 12.2 mm because that is inside the reading uncertainty, and 12.4 mm would need a gap allowance of 0.966. The peripheral ray-sample counts recorded earlier in this log were taken with the previous rims and were not regenerated.

## 2026-10-13 — Glass labels, key, metadata and wording pass

Source re-read. All 117 prescription values in the data file were checked against the text of PDF page 30 of `patents/US10073255B2.pdf` (Example 4): 26 radii, 25 fixed gaps and the two variable gaps at INF / CL1 / CL2, 15 indices and 15 Abbe numbers, six conic constants and 18 aspheric coefficients, the four camera-plate values and the two object distances. There are no mismatches. The page-31 parameter column (f 16.671, f1 -36.722, f2 25.717, f12 15.529, Dm 7.569, St 28.980, DA 31.6987, DL 56.1414) was read as well and matches the values the analysis quotes.

Patent against model. Printed f 16.67 / 16.65 / 16.39 mm at INF / CL1 / CL2 against computed 16.6718 / 16.6465 / 16.3972 mm. Printed FNO 1.24 against 1.2399 from the exact entrance pupil of the printed 28.98 mm iris. Printed unit focal lengths -36.72, 25.72, -35.50, 33.10 and f12 15.53 mm against -36.7142, 25.7145, -35.4989, 33.1034 and 15.5311 mm. Printed magnification -0.02 and -0.15 against Gaussian -0.020001 and -0.144600. The printed INF pair 2ω 67.55° and image height 10.81 mm is not reproduced together: the traced chief ray gives 10.48949 mm at that field and needs 69.35885° for 10.81 mm, as the data file's third source note records. FIG. 8C was viewed and shows about -6 % distortion at the edge, consistent with the traced prescription.

Maker diagram. None was supplied or viewed. This log records only that manufacturer sources corroborate 15 elements in 11 groups and the ED-DSA description; it holds no element-by-element special-glass map.

Glass labels (changed by the coordinator before this pass; checked here against the repository catalog). Every element now names one catalog glass, and each resolves within 2 × 10⁻⁶ in nd and 0.01 in νd of the patent coordinate: L1 S-FSL5 (OHARA, 1.48749 / 70.24), L2 and L12 FCD1 (HOYA, 1.49700 / 81.61), L3 TAFD55 (HOYA, 2.00100 / 29.13), L4 S-TIM5 (OHARA, 1.60342 / 38.03), L5 S-NBH52 (OHARA, 1.672999 / 38.15), L6, L8 and L15 FCD515 (HOYA, 1.59282 / 68.63), L7 S-LAM55 (OHARA, 1.762001 / 40.10), L9 S-TIH53 (OHARA, 1.84666 / 23.78), L10 FCD100 (HOYA, 1.43700 / 95.10), L11 S-LAM60 (OHARA, 1.743198 / 49.34), L13 S-NBH57 (OHARA, 1.850249 / 30.05), L14 S-TIM39 (OHARA, 1.66680 / 33.05) and plate C S-BSL7 (OHARA, 1.51633 / 64.14). Two dispersion curves changed. L2 and L12 now take HOYA FCD1 instead of CDGM H-FK61, which the earlier multi-name label had resolved to by index residual. L13 now takes OHARA S-NBH57 (PgF 0.5979, a row added to the repository catalog from OHARA's 2026-07-01 catalog) instead of CDGM H-ZLaF76 (nd 1.85013). The other twelve resolve to the same rows as before. Local vendor files give HOYA FCD515 as 68.62 in the 2026-07-07 catalog against 68.63 in the 2017 row the repository uses, OHARA L-LAM60 as 49.30, S-NBH52V as 38.26, L-BSL7 as 64.07 and S-FPL51 as 81.55; the analysis notes cite those figures.

Fields changed in the data file. By the coordinator: `key` to `olympus-mzuiko-digital-ed-17mm-f12-pro`, `subtitle`, `specs` and the 16 `glass` strings. In this pass: the header comment (process wording removed, glass line rewritten, conic convention and focus group stated), the three `sourceErrata` notes (plain wording, same numbers), `focusDescription` (leading PUBLISHED keyword, moving group, travel, both object distances and the 199.99 mm object-to-image distance against the marketed 0.2 m), and the comment above `gapSagFrac`, which now names the 2→3A pair. No `apd` tag was added. `groups`, `doublets`, `varLabels`, element `label` and `type` needed no change; the types agree with the signs of R.

Analysis. The per-element glass lines and the glass table now carry the data-file labels with patent and catalog nd / νd; the L3, L6, L10 and L13 paragraphs were corrected to match. The section formerly headed "Verification Summary" is now "Computed First-Order Values and Model Limits"; its two comparison tables were merged into one of printed against computed values with the same numbers, and the page-31 rows were checked against the patent. The peripheral ray-sample table, its failure breakdown, the interpolated-focus table of display-specific object distances, the reference to a tracer issue and the source entry naming a commit were removed. The aperture paragraph keeps the measured results of the semi-diameter pass: surface 25 limits mid-field upper rays, and the meridional bundle narrows by at most 3.8 points of stop diameter at infinity and 4.9 at CL2. The close-focus chief-ray heights the analysis quotes (10.2822602 and 8.8372037 mm) and the preferred field limits (64° and 70°) were re-derived from the prescription and the patent text.

Engine values before and after this pass are identical: EFL 16.671803 mm, wide-open f-number 1.239908, half-field 37.063°, stop radius 14.49 mm, infinity BFD 15.7828 mm, and the three focus keyframes. The surface validator accepts the file.

Closed 2026-10-13 (same day, after a further source search): OM SYSTEM's United Kingdom product page for the lens (explore.omsystem.com/gb/en/m-zuiko-ed-17mm-f1-2-pro, specifications) lists 15 elements in 11 groups with 1 SED, 3 ED, 1 ED-DSA, 1 aspherical glass and 1 Super HR element, 9 circular aperture blades and a 0.2 m closest focusing distance; the maker's Asia listing, as quoted in search results (the site itself refused connections), adds 1 EDA element. No construction diagram was found, so positions are a class-level match to the patent glasses: `apd: "inferred"` is now set on L10 (FCD100, the Super ED element), L6, L8 and L15 (FCD515, the three ED elements) and L2 and L12 (FCD1, both double-aspherical: the ED-DSA and EDA elements, order not published). `apertureBlades: 9` and `maxFstop: 16` were added. No optical value changed.
