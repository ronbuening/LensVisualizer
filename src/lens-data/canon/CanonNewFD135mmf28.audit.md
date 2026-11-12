# Canon New FD135/2.8 representative bounded authoring audit

Status: historical hidden draft status closed by the deployment validation below; now visible. The independently reviewed R7 boundary correction is retained. Off-axis and production-correspondence limitations remain.

Inherited: original US4206976 whole tables and explicit sodium-D wording; primary Canon retail evidence plus named secondary MIR optical-section comparison; all four radius vectors screened against1221 verified main/open-PR bodies with zero aliases/numerical hits. Table4 source-plane contradiction preserved separately; Table1 selected first by convention, never stitched or selected by better performance.

Fresh admission: main e3434b unchanged, eleven open PR heads unchanged from dedup snapshot. Room exact patent search empty, broad Canon1352.8 only two current research reports, cursor null. Saved FRESH_ADMISSION_DEDUP records scope. These searches are not a claim to have searched binary attachment contents.

Fresh construction: root-level ../types import with virtual placement; strict TS diagnostics zero; module exports equal diagnostic JSON; native construction pass. EFL135.0080695, source-fixed plane119.1645; no refocus. V1 PRETRACE_INFERENCE records original schematic component rims and approximate secondary-image iris inference before native/ray runs. All literal R/d/n/V unchanged except declared1.35 dimensional scale and splitting one airgap with zero-thickness iris. Native sodiumD without conversion; no gap-sag or other overrides.

Fresh sparse diagnostics: axis26,4.55degree26,6.825degree21ok5clip,9.1degree16ok9clip1blocked. Chief rays and sparse bundles available. This does not measure integrated throughput or validate MTF. No post-trace cap tuning occurred.

Inherited engine equivalence: 325 optics/types/utilities/package files in retained747785 baseline previously hash-verified equivalent to e3434b. This is not a claim that the entire baseline checkout is current.

NOT RUN at authoring: full current-corpus integration, application build, compiled viewer/rendered comparisons, dense ray sweep, polychromatic MTF, finite-focus reconstruction or factory-mechanical verification. Independent source/boundary review identified the R7 bevel issue addressed below; the pending source-archive lookup is closed by the local patent PDF used in deployment validation. No commit, PR, publication or delivery performed at authoring.

## Additive v2 R7-only correction
Independent original Figure1 review locates R7 opticalface endpoint at~96px halfheight, distinct from110px componentrim. PRETRACE_R7_CORRECTION.json freezes native SD12.4 (scaled16.74mm) before rerun. All other input is byte-structurally identical, including sourceR/d/nV, nativeD, stop, projection and fixed119.1645mm plane. Strict semanticTS zero diagnostics; actualmodule/input parity and native construction pass. Sparse counts unchanged at all four fields, chief/bundles available. No source or cap tuning, no overrides, no fullacceptance claim. V1 receipts and images retained in adjacentv1 folder.

## Deployment validation (2026-11-12)

- Source: US 4,206,976 A (Google Patents PDF, `patents/US4206976A.pdf`). Table 1: 11 R, 10 d, 6 nd/νd and the cemented
  R6 interface match the page images; scale × 1.35 checked on every length. EFL 135.008, F/2.8, back focus 40.560 vs
  40.547 from the printed total length (defocus −0.013 mm).
- Product: Canon Museum confirms 6 elements / 5 groups, June 1979, 1.3 m MFD; the MIR section matches the shapes,
  the cemented pair and the stop position. Probable family match (Tables 1 and 2 both fit).
- Integration fixes:
  - Assignee "Canon Kabushiki Kaisha" → "Canon Inc." (registry form); patent number → `US 4,206,976 A`.
  - `indexReference` D → d on all six glasses (BACD14 1.603111 at d vs 1.603022 at D; N-SF6 1.805180 vs 1.804906).
  - Added `imageFormat` 135-full-frame, `lensMounts` canon-fd, `catalog.closeFocusM` 1.3 m; focus sentinel 1e15.
- No rim changes: no axial or chief-ray clipping at the 9.1° retail field.

## 2026-11-12 — Cleanup and wording pass

The deployment report and retained MIR section were re-read. The report found no mismatch in the 11 radii,
10 internal thicknesses/spacings, six index/Abbe pairs or cemented R6 interface; no aspheres or variable gaps
are present. The MIR drawing agrees with the element shapes and L3/L4 cemented pair, but only suggests the iris
position. Canon Museum's New FD135mm f/2.8 entry confirms six elements/five groups, eight blades, f/32 and
1.3 m close focus; MIR's product section documents helicoid focusing. Both sources remain cited in the analysis.

Public text now uses a patent/Table 1 subtitle, five short specification lines, shape names and element roles.
The header explains the scale, helium d interpretation, fixed image plane and inferred rims/iris. The focus
description states infinity-only scope and separates the production helicoid/1.3 m specification from the model's
unchanged 1e15 m placeholder. The aperture series is now f/2.8, 4, 5.6, 8, 11, 16, 22, 32, with maximum f/32
and eight blades. The design focal-length metadata is 135 mm, the scaled stated patent value, following the
stated-value convention of the sibling Canon FD 400mm entry; computed EFL remains 135.0081 mm.
Both L3 and L4 now carry `cemented: "C1"`, with one C1 doublet spanning surfaces 5–7. No APD tags were added:
the cited maker material supplies no special-dispersion element positions. Mount, format, identity and visibility
were already set by the coordinator and remain unchanged.

Glass labels changed from “Literal d-line index and Abbe pair; no melt identity” to catalog equivalents.
Signed differences below are catalog-curve minus printed patent values, evaluated at helium d:

| Elements | Catalog equivalent | Δnd | Δνd |
| --- | --- | --- | --- |
| L1, L2, L5 | BACD14 (Hoya) | +0.000000816 | −0.005370 |
| L3 | PBH6 (Ohara) | −0.000003052 | +0.035012 |
| L4 | FD3 (Hoya) | −0.000000953 | −0.054952 |
| L6 | BAFD8 (Hoya) | −0.000003208 | −0.005897 |

Every final label resolves with `trylabel.mjs`; all differences meet the cleanup tolerances. These older Hoya/Ohara
names are compatible spectral counterparts, without an assertion of historical supplier or melt. No copied
`nC`/`nF`/`ng` fields were present. Printed indices and Abbe numbers remain unchanged.

The analysis corrects its superseded sodium-D interpretation to helium d, states the Table 1/2 ambiguity and
Table 4 back-focus discrepancy plainly, retains the source links, and removes process terminology, sparse-ray
counts and stale hidden/unperformed-integration claims. Element focal lengths are identified as values in air.
The patent's condition (4) conflict is now explicit: n3 − n4 = 0.06518 exceeds the stated 0.06 bound.
Historical authoring statements above remain history; the sodium-D interpretation was superseded at deployment.

Before → after: EFL 135.00806953544296 → 135.00806953544296 mm; FOPEN 2.8 → 2.8;
halfField 9.1° → 9.1°; physical stop radius 13.280146720239957 → 13.280146720239957 mm;
paraxial BFD 40.5601 → 40.5601 mm; stored image gap 40.5472 → 40.5472 mm;
total track 119.1645 → 119.1645 mm. Both reported focus-key probes and their gaps are identical.
The surface audit reports “OK — no validation errors”; the aperture audit finds one station within 3% of the
stated aperture, with zero rim, trace, iris or failed stations. No optical or rim fields changed.
The page-capture command produced macOS power-monitor and DNS-watch diagnostics but no screenshot, so rendered
title/specifications/focus text could not be reviewed. No sandbox or approval denial occurred.
Prettier was skipped as directed by the addendum because these paths are ignored.

Open:
- The iris location is inferred from the secondary MIR section, not specified numerically by the patent.
- Tables 1 and 2 both fit the rounded 0.88 production telephoto ratio; Table 1 is not uniquely established.
- Table 4's unscaled back focus is 30.285 mm from printed length versus about 31.19699 mm from its prescription;
  no single misprinted row is known. Table 1 itself conflicts with condition (4), as noted above.
- Figure-derived rims, including R7's pre-bevel endpoint, retain about ±0.6 mm unscaled uncertainty; peripheral
  bundle vignetting remains. Production clear apertures and glass supplier/melt identities are unconfirmed.
- No finite-focus spacings or travel law are printed; the model remains infinity-only.
- A maker-hosted optical section remains unverified; the optical-section comparison relies on MIR.
- Rendered-page review remains incomplete because the capture command produced no image.

## 2026-11-12 — Semi-diameter pass against the patent figure

Source: local `patents/US4206976A.pdf`, PDF page 2, Fig. 1 (Table 1), rendered at 300 dpi. The model scales all
lengths ×1.35. The baseline is `.lens-work/base1122sd/CanonNewFD135mmf28.data.ts`, after the cleanup pass.
No numerical rim change is warranted: the clean optical endpoints agree within approximately 2%, below the
5–8% measurement-noise band. No cut, land, rim extension, stop change or geometry override was introduced.

The first/last vertices are approximately x=768/1667 px: 899 px / 78.61725 mm = 11.435 px/model-mm.
A second span, R1–R7, is approximately 303 px / 26.6382 mm = 11.375 px/model-mm; the long R7–R8 gap gives
530 px / 46.07955 mm = 11.502 px/model-mm. The local axis slopes from approximately y=1111 at x=770 to
y=1100 at x=1700; paired top/bottom rim readings avoid using a fixed horizontal axis. An independent circular
fit to clean portions of R1, y=900–1000 and 1210–1280, yields a 508.21 px radius. Against R1=44.6094 mm,
this gives 11.392 px/mm, within 0.4% of the full-track scale and supporting the transverse scale. The figure
does not print an iris tick, so no stop-based calibration is claimed.

All values below are model millimetres; figure readings exclude lettering, leaders and the R7 bevel.

| Surfaces | Before → after sd | Fig. 1 optical estimate | Figure / stored | Decision |
| --- | --- | --- | --- | --- |
| 1, 2 | 24.57 → 24.57 each | ≈24.4 | ≈0.993 | Keep the square front rim; half-height ≈279 px. |
| 3, 4 | 21.87 → 21.87 each | ≈21.4 | ≈0.979 | Keep the square meniscus rim; half-height ≈245 px. |
| 5, 6 | 19.305 → 19.305 each | ≈19.3 | ≈1.000 | Keep the common doublet/component rim; half-height ≈221 px. |
| 7 | 16.74 → 16.74 | ≈16.5–17.0 | ≈0.99–1.02 | Optical arc ends before the mechanical bevel; do not extend to the component's outer edge. |
| 8, 9 | 13.635 → 13.635 each | ≈13.7 | ≈1.005 | Keep the square rear-meniscus rim; half-height ≈157 px. |
| 10, 11 | 14.715 → 14.715 each | ≈14.8 | ≈1.006 | Keep the slightly larger final singlet; half-height ≈170 px. |

The surface audit returns “OK — no validation errors.” The image-circle audit checks one lens with zero
undersized surfaces and zero skips. Full-frame field coverage solves one station with ≥99% coverage and no
unsolved station. The aperture audit has one station within 3% of stated f/2.8, with zero rim, trace, iris or
failed stations. The `clearap.mjs --Y 21.6333` trace reaches the corner at ω≈9.02° without CLIPS-AXIAL or
BLOCKS-CHIEF flags. Its closest axial-rim margin is at R5: 19.305 − 19.09 ≈0.22 mm; R7 has ≈0.62 mm.
The tightest chief-ray margin is R9: 13.635 − 9.68 ≈3.96 mm. This nominal-beam diagnostic solves a 13.764 mm
stop radius, whereas the app uses 13.28015 mm; the engine aperture/coverage audits separately pass with its
actual stop. Meridional side-extent losses remain approximately 20–62%; these are not pupil-area illumination.

The engine remains EFL 135.0080695 → 135.0080695 mm, FOPEN 2.8 → 2.8, half-field 9.1° → 9.1°,
tracing half-field 11.771927° → 11.771927°, and stop radius 13.2801467 → 13.2801467 mm. The
`rimcost.mjs --loo` baseline/file/trial curves coincide: 100.0, 99.9, 96.7, 92.6, 87.9, 74.3 and 56.0%
at the displayed fields 0.0°, 1.5°, 3.0°, 4.5°, 6.0°, 7.5° and 9.0°. Corner-sample illumination is
56.0% → 56.0%; maximum loss is 0.0 percentage points. There are no reduced faces or lands to restore.
The model has only the fixed infinity state; no finite-focus law or zoom stations are supplied.

The matched-scale sketch was rendered and viewed alongside Fig. 1 at 11.435 px/model-mm. It preserves the
front-to-rear size order, cemented L3/L4 boundary and larger final singlet. Straight joins at R7 omit the drawn
mechanical bevel, as intended. The retained MIR optical section was also viewed: six elements/five groups,
L3/L4 cemented pair, long gap and rear pair agree; its shorter-looking gap and mechanical outlines do not
supply clear-aperture measurements. It marks no aspherical or special-dispersion element positions; the patent
embodiment is all spherical. This is a secondary construction image, not a maker-hosted optical diagram.

Comparison artifact:
`/private/tmp/claude-501/-Users-ronbuening--claude-spares-spare-JJvsUM/5d6b978d-236f-4b6b-95b4-43ea08b0f623/scratchpad/sd/nfd135/overlay.png`.
The live-page check is reserved for the coordinator; the sketch does not settle that earlier open item.
No new name/metadata defect was found. The front page (PDF page 1) reads Nozomu Kitagishi, Canon Kabushiki
Kaisha, US 4,206,976, June 10, 1980; the current canonical `Canon Inc.` attribution is consistent with the
existing deployment record. Table 1/2 production ambiguity, the inferred iris and uncertified production clear
apertures remain open. No sandbox or approval refusal occurred. The render queue initially rejected relative
path arguments as invalid input; the documented absolute paths succeeded.
