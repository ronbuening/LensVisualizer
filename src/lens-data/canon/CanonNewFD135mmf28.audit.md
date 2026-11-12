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
