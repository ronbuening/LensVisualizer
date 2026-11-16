# Fresh vs inherited evidence
Fresh build and canonical schema/geometry validation: zero issues on checkout db50c52df466bbcf1b9654411b186a27d280f16e. Native source-station parity unchanged within floating arithmetic (<4e-15mm), aspheres and image planes identical. Solver conserves summed gap values at each state, never changes sensor gap to chase focus. Finite-focus columns identical and no finite-focus published rows.

Fresh native first-order sweep: VALIDATION.json (1,025 states, including all authored and between-row positions). SOLVER_SCREEN.json includes attempted translations of three different internal blocks; only d19/d22 translation solved every state within specified bounds and retained monotone EFL. Other choices have absent bounded solutions or nonmonotone EFL and were rejected. Native prepared geometry uses derived gaps, not a separate analytical model.

Fresh full 3D equal-area stop-lattice screen: RAYS.json; each original/intermediate row and midpoint on-axis (coarse 8-wide lattice), plus17 zoom values at0/.5/full test field using16-wide lattice (208 samples). No trimming of failed/clipped rays from counts. Maximum axial RMS at authored sensor2.9214µm. Edge RMS/throughput are model/aperture-dependent and do not establish retail performance. Source wide edge coarse lattice84 transmitted/124 clipped, previous dense source lattice346/466. Broad off-axis outcomes require integration review.

Inherited unchanged: primary source scan, original independent transcription, literal source geometry checks and dense source-station 3D rays in prior original archive SHA256 ef941479b53cf455c9a0dfd4c6b3f35d6857278ac05b20f76e754f17a34f7824. Prior three-station unified hold retained separately, never overwritten.

Closed 2026-11-15 (the items below were settled by the deployment validation and cleanup passes; the real zoom cam remains unknown). Not completed: TypeScript static typecheck, compiled browser/full app regression, current-main compatibility, canonical visible catalog generation, actual mechanical cam verification. No commit, PR, publish or deploy. No factory identity or production-performance claim.

Additional fresh geometry/selector audit: densifying the data to all257 source/calculated rows and between-row midpoints yields zero canonical geometry issues. Non-stop compiled apertures match every authored cap exactly (no trimming). Native `publishedZoomStations` returns precisely indices0/64/128 at zoom0/.5/1, and only infinity focus. d19 range2.85..26.52mm, no reversals; d22 range3.75..12.132645mm with3 sampled slope-sign reversals. Maximum correction displacement2.570145mm relative to baseline group location. These modeled reversals are unsupported as factory cam behavior and explicitly narrow the claim to a computed experimental path.

## 2026-11-15 — Deployment validation

Checked by an independent re-read of the page images of WO 2022/137385 A1 (the PDF has no text layer), Numerical
Example 2: all 27 surfaces (radius, thickness, nd, νd), the five aspheric surfaces (3, 4, 19, 23, 24: conic and 24
coefficients), the five variable gaps at the three printed zoom positions, the stop position, the front page
(publication date 30 June 2022, Olympus Corporation, inventors Zen, Nakagawa, Yamada) and the lens drawing (Fig. 3).
No transcription mismatch was found. The patent's asphere equation uses (1 + k), so its k is this file's K. The index
values are d-line; ten of the glasses match Ohara and Hoya catalogue entries exactly at the d-line.

Verdict: valid with notes. The model reproduces the patent's stated values at the three printed positions: focal
length 8.16 / 14.14 / 24.51 mm (model 8.1617 / 14.1433 / 24.5127), back focus 14.88 / 14.90 / 14.90 mm (paraxial
14.888 / 14.902 / 14.897), full field 112.09° / 76.17° / 46.44° (traced 112.2° / 76.2° / 46.4°), group focal
lengths f2 = 270.01 (269.98) and f4 = −40.81 (−40.81), and the three conditional values 33.08 / 2.26 / 2.76. The
product link is strong: the maker states 16 elements in 10 groups, and the maker's published construction diagram
matches the model element for element (dual-sided aspherical L12, Super ED L13, HR L14 and L34, aspherical ED L35
and L51, HD L41, Super HR L52, ED L53, same cemented pairs and stop position). Examples 1 to 3 of the patent share
this layout, so Example 2 is one of three equally good candidates.

Changes made at integration:

- `catalog.closeFocusM.marketing`: absent → 0.23 (maker's minimum focus distance, constant across the zoom range).
  `focus.closeFocusM` stays at the infinity-only placeholder; the patent tabulates no close-focus state.
- `source.errata`: the single "unresolved" total-length entry was removed. The printed gaps sum to 131.40 / 122.62 /
  124.79 mm against printed totals of 131.41 / 122.63 / 124.79 mm; with the unrounded paraxial back focus the model
  gives 131.408 / 122.622 / 124.787 mm, so the difference is rounding in the patent's table, not a source error.
- Zoom station `focalLengthMm`: the 126 calculated values were rounded from 15–16 digits to 5 decimals (for example
  8.222558865914236 → 8.22256). Binary float noise in the interpolated gap rows was removed (for example
  23.911093750000003 → 23.91109375). No prescription value, printed gap or solved gap changed beyond 1e-10 mm.
- Header comment replaced by one block comment stating the source, example, scale, and which values are inferred.
- Analysis note: the sentence on the total-length difference now says it is rounding only.
- Analysis rewritten to the house section skeleton.

After the changes: focal length 8.1617–24.5127 mm, f/4.08 at every station; paraxial focus error across all 129
stations between −0.008 and +0.003 mm. Surface validation: OK, no errors. Aperture audit: no surface below the
on-axis beam, no rim limit. Image-circle audit: not undersized. Field-coverage audit (run on a copy marked visible):
all 129 stations reach 100 % of the 10.815 mm image height (56.1° at wide, 38.1° at middle, 23.2° at tele).

Open:

- Rims: at the wide end the geometric transmission is 100 % to 44°, 76 % at 53° and 42 % at the 56.1° corner; the
  middle and tele positions stay at 98 % or better. The loss comes from the inferred semi-diameters of surfaces
  20–22 (9 mm) and surface 4 (11.5 mm), not from the design: trying 11 mm on 20–22 gives 61 % at the corner, and
  13 mm on surface 4 gives 48 %. No rim was changed here; this is for the semi-diameter pass, which must also check
  edge thickness and gap clearance for any raise.
- Calculated zoom stations: the focus group (surfaces 20–22) overshoots by 2.57 mm between the middle and tele
  positions (d22 peaks at 12.13 mm against printed 9.72 and 9.44 mm, with three slope reversals), because the
  other groups are interpolated in straight lines between three printed positions. Focus is held, but the path is
  not a real cam.
- Wording and naming for the cleanup pass: lens name and key ("representative Example 2"), missing subtitle, the
  five `specs` lines, element names "Published medium N" (patent names are L11–L14, L21–L22, L31–L35, L41–L42,
  L51–L53), element types and glass labels, station labels, `focus.description`, and the voice of the analysis note
  and of the earlier lines of this file.
- `visible` is still false. (Closed 2026-11-15: the lens is now visible.)

## 2026-11-15 — Cleanup and wording pass

Files were renamed to `OlympusMZuiko825mmf4PRO.*` and the key set to `olympus-mzuiko-8-25-f4-pro` before this pass.
The optics were not changed: every radius, thickness, index, Abbe value, asphere term, semi-diameter and gap value is
as before.

Fields changed in the data file:

- `subtitle`: none → "WO 2022/137385 A1, Example 2 — element-by-element match to the maker's construction diagram".
- `catalog.specs`: the five process lines → "16 ELEMENTS / 10 GROUPS", "1 DSA / 2 EDA / 1 SUPER ED / 1 ED",
  "1 SUPER HR / 2 HR / 1 HD", "DESIGN f = 8.16–24.51 mm, F/4.08", "MIN. FOCUS 0.23 m". The HR count follows the
  maker's diagram (two); the maker's English specification list says one.
- Elements: names "Published medium 1–16" → the patent's L11–L14, L21–L22, L31–L35, L41–L42, L51–L53; `type` "Lens"
  → shape names from the radii, with "(2× Asph)" on L12 and L51 and "(1× Asph)" on L35; `focalLengthMm` and `role`
  added; `cemented` C1–C6 on both members of the six cemented pairs.
- Surface labels of the five aspheric surfaces: 3, 4, 19, 23, 24 → 3A, 4A, 19A, 23A, 24A (house form); gap key 19
  → 19A. Gap labels D7, D11, D19, D22 and BF added.
- `groups` G1–G5 and `doublets` C1–C6 added, following the patent's group structure.
- Zoom station labels: "Source infinity …" and "Calculated infinity; not published …" removed; the first and last
  stations are labelled "Wide" and "Tele". `published` flags are unchanged (true on stations 0, 64 and 128 only).
- `aperture.fStops`: [4.08] → [4.08, 5.6, 8, 11, 16, 22] with `maxFNumber` 22 (the maker's minimum aperture).
- `focus.description` and the header comment rewritten in plain words; the facts are the same.

Glass labels (printed nd / νd against the catalogue row; Δnd, Δνd):

- L13 S-FPL55 (0, 0.00), L21 S-NBH5 (0.00001, 0.00), L31 S-BSL7 (0, 0), L33 S-LAH89 (0, 0), L42 S-LAL19 (0, 0.01),
  L53 S-FPL51 (0, 0.01): Ohara.
- L11, L22, L32 TAFD32 (0, 0), L14 TAFD45 (0, 0), L34 TAFD35 (0, 0), L41 FDS18 (0, 0), L52 TAFD55 (0, 0): Hoya.
- L12 (1.58253 / 59.32) and L35, L51 (1.49650 / 81.53) stay unmatched: the nearest rows are 0.0004 to 0.0006 away
  in nd.
- `apd: "inferred"` on L13 (Super ED), L35 and L51 (aspherical ED) and L53 (ED), the positions the maker's diagram
  marks, each with a one-line note.

Engine numbers before and after are identical: focal length 8.1617 / 14.1433 / 24.5127 mm at the printed positions,
f/4.08 at every station, stop semi-diameter 3.720 mm at wide, paraxial back focus 14.888 / 14.902 / 14.897 mm. The
only difference in the built lens is the maximum f-number (16 → 22).

Analysis: title line added, glass section brought in line with the new labels, "Verification Summary" replaced by
"Model Scope and Limitations", aspheric surface labels noted.

Open:

- Closed: after this pass the surface validation printed OK, the aperture audit found 129 of 129 stations within
  3 % of the stated f-number with no rim limit, the image-circle audit found nothing undersized, field coverage was
  ≥ 99 % at all 129 stations, and all thirteen catalog glass labels resolve (three elements stay Unmatched).
- Rims: at the wide end geometric transmission is 76 % at 53° and 42 % at the 56.1° corner, from the inferred
  semi-diameters of surfaces 20–22 (9 mm) and 4A (11.5 mm). No rim was changed.
- Calculated zoom stations: the focusing group overshoots by 2.57 mm between the middle and tele positions.
- Close focus is not modelled; the patent prints no near state.
- The earlier lines of this file keep the package's original wording as history.
