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
unchecked) (closed: semi-diameter pass below). `catalog.focalLengthMm.design` carries the traced 35.00106523898182
rather than the stated 35 (not changed in this pass).

## 2026-11-10 — Semi-diameter pass against the patent figure

Source: GB 1,066,527 A, Fig. 1 (drawing sheet 1). The PDF holds the sheet twice: reduced on PDF p. 21 (axis vertical,
object at the bottom, axis tilted 0.9°) and larger across PDF pp. 19–20 (axis horizontal). Both are 300 dpi native
scans. Rims were measured on p. 21 as the half-width between the left and right outline at each element's rim, which
cancels the axis position, and checked on pp. 19–20: the half-heights of LIII, LIV, LV, the cemented pair, LVIII and LIX
stand in one ratio (1.432–1.445) between the two renderings, and LI's and LII's cap-end/edge ratios agree (0.87 and
0.90 on both).

Scale (p. 21): axial 15.81 px/mm from the first vertex (y 2503.8, arc fit) to the last (y 1417.5) over 68.7085 mm,
with intermediate vertices within 0.8 %. Transverse 15.65 px/mm from circle fits to r1, r2 and r5 (817.8, 368 and
583.8 px against 52.48, 23.89 and 37.96 mm; 15.72, 15.62, 15.61). The drawn iris reaches about 12.2 mm, close to the
real-ray f/1.8 stop radius (12.26 mm), not the paraxial one (11.37 mm).

The figure draws most elements with a short cylindrical edge and 45° chamfers. `sd` follows each curved face's end:
the edge where a face runs into it, and the chamfer's inner end where the face stops short.

| Surface | Before | Figure | After | Evidence |
|---|---:|---:|---:|---|
| 1 / 2 (L1) | 20 / 20 | 18.3 / 16.0 | 20 / 20 | kept: the drawn rims cost 11.3 points at 26.2°, and surface 2 under 18.7 shortens the engine half-field (35.0° → 31.1° at 16.0) |
| 3 / 4 (L2) | 17 / 17 | 12.7 / 11.4 | 16.2 / 14.9 | figure, raised to the light budget (the drawn rims cost 28.4 points at 23.3°) |
| 5 / 6 (L3) | 17 / 17 | 14.85 square-cut | 15.7 / 15.7 | figure, raised to the light budget (7.6 points at 20.4° at the drawn rim) |
| 7 / 8 (L4) | 14 / 14 | 13.3 / 12.8 | 14 / 14 | kept: within 9 % |
| 9 / 10 (L5) | 10.75 / 10.5 | 11.45 / 11.2 | 11.6 / 11.2 | figure; surface 9 at the real-ray f/1.8 axial height (11.60) so `clearap` at f/1.8 shows no clip |
| 11 / 12 / 13 (L6–L7) | 13 / 13 / 13 | 11.0 / 11.6 / 10.85 | 12.1 / 12.7 / 12.0 | figure, raised to the light budget (10.9 points at 17.5°); surface 13 needs 10.9 for the axial beam |
| 14 / 15 (L8) | 13 / 13 | 12.4 / 12.6 | 13 / 13 | kept: within 5 % |
| 16 / 17 (L9) | 13 / 13 | 13.8 square-cut | 13 / 13 | kept: within 6 % |

The light-budget values come from a greedy raise of the figure set toward the baseline rims until the worst loss at
any field was under 3 points (L2 and L3 alternately, then the cemented chain; L2 keeps the figure's 1.3 mm front/rear
step). No lands or cuts were added; `checks.gapSagFrac` is unchanged.

Engine before and after: EFL 35.0011 mm, FOPEN 1.8, halfField 35.015° (limited by surface 1), stop semi-diameter
11.3653 mm, all unchanged; only the drawn stop housing follows surface 9 (11.37 → 11.6 mm). Wide-open transmission
(full-pupil lattice, base → final): 0° 100 → 100, 8.7° 98.8 → 100, 14.6° 96.8 → 98.0, 20.4° 92.4 → 89.7 (worst,
−2.7), 26.2° 68.9 → 68.4, 29.2° 51.5 → 51.4, corner 32.1° 33.1 → 33.1. At 31°: 39.9 → 39.8 % at f/1.8 and 47.0 → 47.0
% at f/2; at 15.5°: 96.4 → 96.9 % and 100 → 100 %. Restoring each element from the final set wins back at most 1.7
points (cemented pair at 14.6°). `audit:surface` OK; `audit:aperture` no rim limit; `audit:image-circle` 0 undersized;
`audit:field-coverage` 100 % to the 21.65 mm corner; `clearap` at f/1.8 (Y 21.03 mm) and f/2 (Y 21.63 mm) flags no
axial clip or blocked chief ray (the baseline flagged surfaces 9 and 10 at f/1.8).

Open: the drawn edges and chamfers are not modeled (straight rim joins); L1, L2, L3 and the cemented pair stay larger
than drawn because the drawn rims would cost corner light. Overlay of the final rims on the figure:
scratch `sd/distagon35/overlay.png` (not in the repo).
