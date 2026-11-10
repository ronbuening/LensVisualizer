# Contarex Distagon 35mm f/2 static preparation audit

2026-11-09. Baseline 9d121be76e14bc5098256ee78cd0a7545a1acf11, 2,253 real commits. Isolated checkout; no commits, push, deployment or changes to handed-off lenses.

The accepted Nov 2 GB addendum resolves the earlier unread DE R5. The old hold is retained in immutable original evidence and is not reinstated. This is a recovered source, not a new research discovery.

Viewed the actual GB_table.png pixels, including every radius, separation and d-line glass pair. Direct R5 +1.0845 and main R2 +0.6827 readings agree with literal_example.json. Whole main table controls. Claim-copy R2 +0.06827 remains disclosed.

Exactly 35× scale, unchanged normalized prescription, printed BFL, whole d8 and spherical topology. L6/L7 cementation follows main table. Midpoint iris and caps are provisional. No rim cuts, hidden trim authority, gap-sag override, catalog glass substitution, source-plane refocus or finite-focus law.

Initial L5 cap 13 mm caused actual R10/R11 gap collision (-0.582 mm separation) and was rejected. Current L5 caps 10.5 mm give 1.039 mm minimum gap separation and 73.684% sag intrusion. Native beam clearance remains unresolved (closed: resolved by the surface 9 cap below). The model is visible:false until qualified (closed: catalog-visible since standalone integration).

Rebuild: adjacent delivery work directory rebuild.py emits the data from literal_example.json, validates the emitted values against the literal source and produces source_mapping.json and static_report.json. Dependent package-lock SHA256 matches the untouched shared baseline dependencies; no installation was performed.

Completed: source pixel inspection, source mapping, roundtrip, independent paraxial matrix and sampled static spherical checks. Pending: native build/geometry and iris sizing, full actual-aperture and representative rays, stop/cap sensitivity, vignetting and spectral MTF, source-plane versus diagnostic focus, silhouette/hidden-trim review, metadata/type/format/lint/focused regression/build/SEO and guarded standalone install. (Closed: completed in the sections below.)

## Native stage update

Minimal surface9 cap10.75mm formally adopted; surface10 unchanged10.5mm. Original10.5mm native clipping and rejected13mm static cap remain archived. Whole main table, total d8, iris station, source plane, glasses and all other caps unchanged. Original GB Fig.1 (PDF21) and maker drawing viewed against native SVG silhouette; topology supported, caps not measured reproduction and L5 is visibly shorter. buildLens passes, zero trim, positive iris clearance; official audit-aperture reports1.7999999984587864, STO-limited. This is the paraxial/image-space convention; separate exact entrance-diameter ratio1.918277 is not a hard hold. Additive APERTURE_CONVENTION_REVIEW records the correction to the earlier pilot wording.

Bounded reference587.5618nm geometric/diffraction MTF runs complete at nominal1.8/2 and source/best-axial planes. Source angles0/15.499916/30.999999degrees verified via image-height fractions. All edge results unconverged at64-grid cap; axial results converged. No spectral catalog identity assumed, no source-plane refit, no tolerance changes. Earlier32.068deg format-corner run retained separately. Full integration has not run (closed: see Standalone integration completion).

## Single128-cap source-plane refinement

Source-plane-only reference587.5618nm geometric/diffraction peripheral cases now converge at all requested0/10/20/30/40lp/mm samples within unchanged0.01. Source file hash verified unchanged. Seven cases required128; nominalF1.8 geometric15.5deg remained at64. Source31deg sampled transmission40.1024%(F1.8)/47.3317%(F2); zero failed/unaimed. Frequency masks and deltas are in evidence/distagon35/source-peripheral-128-summary.json. Prior64-grid, format-corner and best-focus outputs retained; best-focus peripheral results not refined. No full integration (closed: see Standalone integration completion).

## Standalone integration completion

2026-11-09. Exact source roundtrip and native authored-object equality pass; only catalog visibility differs from the qualified native checkpoint. Metadata, typecheck, format and full lint pass. The first lint run found evidence-script global declaration errors only; its failure is retained and the corrected recheck passes. Focused regression passes 23 files / 1,609 tests with unchanged criteria/timeouts and one 3 GiB worker. Build prerenders 1,874 routes; SEO reports zero errors and zero warnings. This is the documented focused suite, not the entire repository test suite.

The guarded installer writes only this lens's three data/analysis/audit files. Clean pinned history, exact overlay bytes, idempotence, conflicting-file preservation, symlink refusal and missing-history refusal were checked. The standalone package retains all 2,253 real commits in its pinned baseline bundle. No commits, pushes, publication, old delivered-model edits or optical retuning occurred. The package gate summary and receipts control final verification status; earlier checkpoint entries above describe their historical scope.

The product association, source-native f/1.8 versus retail f/2, inferred caps/stop, source-plane versus diagnostic focus, single reference wavelength, substantial off-axis vignetting and unrefined best-focus peripheral MTF qualifications remain unchanged by integration success.

## 2026-11-10 — Deployment validation

Independent check against GB 1,066,527 Table I (PDF p. 2 page image) at ×35: 17 radii, 16 thicknesses plus back
focus, 9 nd/νd pairs and the L6/L7 cement agree; the Δn/r column recomputes for all 17 surfaces. The claims' repeat of
Table I prints r2 = 0.06827f, a misprint: the claims' own Δn/r and the DE 1,447,288 A1 family member give 0.6827f,
which the file uses. Engine EFL 35.001, back focus 36.994 (printed 1.0569f = 36.992), F/1.8 (patent; marketed f/2).
Applicant Carl-Zeiss-Stiftung (GB prints no inventor; the DE family member names Erhard Glatzel). Attribution strong:
9 elements in 8 groups, Glatzel's 1963 filing, f/1.8 marketed as f/2 (Marco Cavina's history of the lens).
`audit:aperture` passes.

Deployment change: none.

Open: `catalog.closeFocusM.marketing` (sources give 0.22 m and 9 in from the film plane); glass labels (Schott d-line
matches exist for all nine); subtitle, specs, focus text and prose wording. (Closed: all four in the cleanup pass below.)

## 2026-11-10 — Cleanup and wording pass

Data file. Header comment rewritten as plain statements of the same facts (×35 scaling, f/1.8 and ±31° kept, printed
back focus, midpoint stop in d8, inferred semi-diameters with L5 smaller than Fig. 1, the claims-copy r2, patented
rather than factory design). Subtitle "GB 1,066,527 A TABLE I — QUALIFIED F/1.8 SOURCE DESIGN" → "GB 1,066,527 A,
Table I — strong production correlation; patented at f/1.8". Specs "35× NORMALIZED SOURCE", "SOURCE F/1.8; RETAIL
F/2" and "SOURCE FULL FIELD 62°" → "DESIGN f = 35.00 mm" and "DESIGN F/1.8" (element count and "ALL SPHERICAL" kept).
Erratum note reworded with its evidence (both tables' Δn/r −0.88338/f, the printed back focus, the DE family member;
0.06827f would give f = 0.37). Element roles added from the patent's description of each component. Cemented id
D1 → C1. `focus.closeFocusM` 1000 → 1e15 with a plain description; `catalog.closeFocusM.marketing` 0.23 from the
Zeiss Ikon Contarex booklet (closest focus 9 in from the film plane; Cavina gives 0.22 m).

Glass relabels (all from "Unmatched (patent nd/vd; catalog identity unverified)"; Δnd = 0 for every row): L1 SK14 →
N-SK14 (Δνd −0.08); L2, L4, L7, L8, L9 SK16 → N-SK16 (+0.03); L3 LaK9 → N-LAK9 (−0.09); L5 LF5 (+0.05); L6 SF4
(+0.05). Each label resolves to the named Schott row. No `apd` tags: the maker publishes no special-dispersion element.

Analysis. Process sections removed (MTF grid runs and convergence, gate report, roundtrip and cap history, the
Drive-hosted addendum link); the status section renamed "Model Scope and Limitations" and kept to model properties
(stop and semi-diameter basis, image plane and best focus, real-ray aperture about f/1.92 at the f/1.8 setting,
vignetting). Identification rewritten around the evidence (booklet drawing, Cavina, timing, LaK9 L3, the other five
examples, Pacific Rim's conflicting 10/9). Elements gained glass names and focal lengths; the patent's design rules
are checked against Table I. Sources: Cavina, DE 1,447,288 A1 and Pacific Rim added.

Engine before and after (identical): EFL 35.0011 mm, FOPEN 1.8, halfField 35.015°, stop semi-diameter 11.3653 mm,
paraxial BFD 36.9943 mm, total track 105.700 mm. `audit:surface` OK; `audit:aperture` reports no rim limit.

Open: semi-diameters against Fig. 1 for the rim pass (L5, surfaces 9–10, drawn larger in the figure; front caps
unchecked). `catalog.focalLengthMm.design` carries the traced 35.00106523898182 rather than the stated 35 (not
changed in this pass).
