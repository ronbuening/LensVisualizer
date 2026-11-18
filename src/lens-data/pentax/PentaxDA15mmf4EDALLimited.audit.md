# Audit Log — PENTAX DA 15mm f/4 ED AL Limited

Patent: US 7,843,651 B2, Embodiment 1

## Package reconstruction record

Status: source/static and native checkpoints preserved below as chronological records. See the final integration entry and packaged gate summary for current delivery status.

- Baseline: 9d121be76e14bc5098256ee78cd0a7545a1acf11, 2253 real commits.
- Custody: correction addendum; original accepted archive retained unchanged.
- Visual checks: grant Fig. 1 and Table 1 pixels. Literal S11 −42.598 and S15 −17.739 confirmed. No source optical optimization.
- Roundtrip: 15 radii, source thicknesses, nine nd/Vd pairs including resin, all asphere terms, and recombined stop gap. Last source d15 remains null in source; separate derived air-focus gap is explicitly qualified.
- Identity: probable original smc DA15 family. Whole E1 is representative, not unique production identity; HD diagram is supporting architecture only.
- Caps: [13.5,11,11,9.3,9.3,5.7,5.7,4.9,4.9,4.9,5,5,5,5.5,5.5] mm. Rounded Fig.1 envelope hypotheses from approximately 10.28 pixels/mm. Not patent-listed apertures and not yet validated for field throughput (closed: field sampling in the native pilot below).
- Stop: source position; radius not authored. Independent paraxial radius hypothesis 3.818070797 mm at source F4.1. Native aperture remains untested (closed: native pilot below).
- Static checks: 101 radial samples per material interval and air gap. Minimum material thickness 0.18 mm (resin). Maximum rim slope 55.34737°, below default. Maximum air-gap intrusion fraction 0.379175, below 0.9. No gap override, cuts or extensions.
- Resin: ninth modeled material, preserving nd/Vd; catalog remains eight glass elements/six groups. Native cemented-interface and zero-trim checks pending (closed: passed in the native pilot below).
- Not run: native build/aperture/iris/render/rays/MTF, full integration gates, installer (closed: run in the sections below).

Rebuild source/static outputs with `python evidence/pentax-da15/prepare.py`. Evidence scripts are local reproducibility artifacts, not per-lens corpus tests. No commits, pushes or publication performed.

## Bounded native pilot

Initial missing-layout ingest error is preserved in native-aperture-initial.log. Required display-only yScFill=0.35 was then added; the first cap hypothesis and entire optical prescription remain unchanged. Native buildLens, nine material-entry zero-trim diagnostics and iris placement pass. See evidence/pentax-da15/NATIVE_STATUS.json for distinct paraxial/finite-ray aperture measures and bounded field sampling. The corner unvignetted fraction is 24.04%, not a factory performance claim. MTF is unrun and spectral-blocked by unmatched low-dispersion glass (closed: d-line MTF run below; the 2026-11-10 glass relabel gives every glass element a catalog curve). Full gates remain unrun (closed: standalone integration below). Native compute stopped at the requested boundary.

## Reference-only route preparation

Lightweight assessMtfSupport confirms d-line 587.5618 nm available with useResolvedReference=false. C/d/F and photopic remain unavailable. The prepared reference-mtf.mjs requires explicit release before its heavy compute branch. No MTF was computed during this preparation and no inferred material curve was added. Source paraxial F4.1, iris-relative no-extra-glass-clipping ratio 4.099999996, and EFL/exact-admitted-diameter ratio 4.250620867 are distinct. No iris adjustment was made.

## Released native d-line MTF

One 1536 MiB worker ran reference-mtf.mjs --run-mtf with explicit release. Both design and diagnostic best-axial results converge through the sampled 40 lp/mm upper frequency at all three requested format-height fields. Exact angles, grids, ray counts and convergence deltas are in NATIVE_STATUS.json. Source/data/authored bytes match the pre-MTF manifest. No cap, iris, source, material curve or authored image-plane adjustment occurred. C/d/F and photopic remain unsupported (closed: catalog glass labels added 2026-11-10). Full integration has not run; compute stopped (closed: standalone integration below).

## Standalone integration

Metadata, TypeScript, repository format and lint checks pass. Focused corpus regression passes 23 files and 1609 tests in 200.70 s using one worker, a 3 GiB heap cap, cache disabled and unchanged timeouts. Production build prerenders 1875 routes and the SEO audit has zero errors/warnings; final documentation is rebuilt and checked separately. Exact source/native semantic equality passes after formatting. Guarded installer checks cover real pinned history, exact three-file overlay, idempotence, conflicting content, symlinks and missing history. No complete-suite claim, commit, push, deployment or optical retune is made. See packaged GATE_SUMMARY.json and final logs for final-byte verification.

## 2026-11-10 — Deployment validation

Independent check against US 7,843,651 B2 Embodiment 1 (PDF p. 21 page image): 15 surfaces (R, d, nd, νd), the
printed resin layer (S2: d 0.18, nd 1.52972, νd 42.7), the stop 3.13 mm before S11 and the S3 asphere (K = −1, A4–A8)
agree. Engine EFL 15.449 (printed 15.45), F/4.1, fB 37.490 (printed 37.49); the 42.96° chief ray lands at 14.237 mm
(printed Y 14.24); the Table 9 conditions reproduce. Front page: Hoya Corporation, inventor Yasuo Kanazashi.
Attribution strong: Ricoh's 2009 release gives 8 elements in 6 groups with one hybrid asphere and one ED element,
0.18 m and 0.15×; the printed near state (d10 4.57, fB 39.83) gives m −0.142 at about 0.18 m. `audit:aperture`
passes.

Deployment change: `catalog.closeFocusM.marketing` 0.18.

Open: subtitle, specs, element role and glass prose; exact catalog glasses exist for all eight glass elements (closed:
cleanup pass below).

## 2026-11-10 — Cleanup and wording pass

Data file. Header comment rewritten in plain terms with every fact kept (source, resin modeling, S11/S15 as printed,
conic form, stop split, inferred semi-diameters, derived back focus, no cover plate, infinity only, one of eight
embodiments). `subtitle` "…probable original smc family; not a certified factory prescription" → "US 7,843,651 B2,
Embodiment 1 — probable production correlation". `specs` → "8 ELEMENTS / 6 GROUPS", "DESIGN f = 15.45 mm", "DESIGN
F/4.1", "1 ASPHERICAL SURFACE / 1 ELEMENT" (dropped "SOURCE 15.45 mm / F4.1" and "PROBABLE ORIGINAL smc FAMILY").
Element labels "Glass Ln" → "Element n" (resin: "Element 1 resin layer"); the nine boilerplate roles replaced with
specific ones. Cemented ids HYBRID/D1/D2 → H1/C1/C2 on elements and `doublets`. Last-gap label → "Back focus
(paraxial; d15 is blank in the patent)". `focus.closeFocusM` 1000 → 1e15 with a plain infinity-only description that
states the printed near state and the marketed 0.18 m (0.15×). `aperture.fStops` end 22 and `maxFNumber` 22 from
Ricoh's lens archive page (minimum aperture f/22).

Glass relabels (Δ = catalog − patent): L1 and L5 S-LAH65V (OHARA), Δnd −5e-7, Δνd −0.02; L2 E-F2 (HOYA), Δnd −2e-7,
Δνd 0.00; L3 TAFD5F (HOYA), Δnd −5e-6, Δνd +0.02; L4 E-FD15 (HOYA), Δnd −2e-7, Δνd −0.05; L6 FD60 (HOYA), Δnd +8e-7,
Δνd +0.06; L7 FCD1 (HOYA), Δnd −2e-7, Δνd +0.01; L8 S-FSL5 (OHARA), Δnd −1e-7, Δνd +0.04. HOYA rows where exact (the
applicant's own catalog), OHARA otherwise. The resin keeps an `Unmatched (…)` label stating nd 1.52972 / νd 42.7. No
`nC`/`nF`/`ng` were present. L7 tagged `apd: "inferred"`: Ricoh's construction diagram marks the positive member of the
rear cemented doublet as ED, and nd 1.49700 / νd 81.6 is an FCD1-class ED crown.

Analysis. Identification rewritten as numbered evidence (construction, special elements, field, close focus, timing)
with the priority date added; the embodiment family noted (Embodiments 1–6 resin hybrids, 7–8 asphere on glass);
glass lines and focal lengths filled in from the relabels and the paraxial element focal lengths; a glass table,
asphere interpretation and a Conditional Expressions section (Table 9, headings printed transposed) added. The
"Validation Status and Limitations" section, with its run, grid, MTF and gate text, became "Model Scope and
Limitations": infinity only, inferred rims with heavy corner vignetting, chief ray 14.237 mm at 42.96°, real entrance
radius 1.817 mm against paraxial 1.884 mm, and the spectral model. Removed the private Drive link and the
earlier-transcription remarks; added Ricoh's 2009 and 2013 releases, the archive page and the construction-diagram URL.

Engine numbers before and after are identical: EFL 15.448921555776751, FOPEN 4.1, half-field 42.96° (tracing
40.5288°), stop radius 3.8180707970008445 mm, BFD 37.4903, total track 79.31026159908342. `audit:surface` OK;
`audit:aperture` within 3 % of the stated f-number with no rim limit.

Open:

- Near focus: the patent prints d10 5.19 → 4.57 mm and fB 37.49 → 39.83 mm at β −0.142 (about 0.18 m object to
  image). Modeling it would make the 2.06 mm pre-stop gap and the back focus variable.
- Rims: semi-diameters remain the package's rounded Fig. 1 readings; compare with the figure in the rim pass (closed:
  semi-diameter pass below).
- `aperture.blades: 7` is published by Ricoh but not added in this pass.

## 2026-11-10 — Semi-diameter pass against the patent figure

Source: `patents/US7843651B2.pdf`, page 2 (sheet 1), Fig. 1, which is Embodiment 1 at infinity focus. The page is a
300 dpi CCITT scan. The optical axis is at page row 1204, and the top side of the figure is clean apart from the "S"
and r15 labels.

Scale: the S1 vertex is at page column 753 and the S15 vertex at 1754. That is 1001 px for 41.82 mm, so 23.94 px/mm.
Every intermediate vertex lands within 0.1 mm of the prescription (S4 9.13/9.14, S6 18.38/18.43, S9 27.40/27.49,
S11 34.29/34.31, S14 39.89/39.89 mm). The stop tick sits at 31.12 mm, against 31.18 mm printed. The vertical scale was checked by
fitting the S1 arc: the drawn sag at the rim is 68 px against 71 px computed for R 32.044.

Rims were read with `figprofile.mjs` on both sides and with 600 dpi zooms of the L1 and L3 rim corners. Figure values
are in mm, given as top / bottom side:

| Surface | Stored | Figure | Ratio | Decision |
|---|---|---|---|---|
| 1 | 13.5 | 13.49 / 13.37 | 0.99 | kept |
| 2 | 11 | 10.9 (cap end at the rear flat) | 0.99 | kept |
| 3A | 11 | 10.4 (cap end at the rear flat) | 0.95 | kept: inside the noise band, and trimming to 10.4 would cost 0.8 points at 42.8° |
| 4, 5 | 9.3 | 9.48 / 9.40 | 1.02 | kept |
| 6 | 5.7 | 5.85 / 5.81 | 1.02 | kept |
| 7 | 5.7 | cap ends at 4.93, flat land to 5.85 | 0.86 | sd 4.9, `rimExtensionSd` 5.7 |
| 8–10 | 4.9 | 4.85 / 4.91 (square doublet) | 1.00 | kept |
| 11–13 | 5.0 | 5.10 / 5.18 (square doublet) | 1.03 | kept |
| 14, 15 | 5.5 | 5.47 / 5.56 | 1.00 | kept |

One native pixel is 0.042 mm, so the S7 cap end reads 4.93 ± 0.04 mm. The land keeps L3's outer edge equal to S6, at
5.7 mm, which matches the square top edge the figure draws.

L1's glass has a flat rear flange from the end of the S2 cap (10.9 mm) out to its 13.4 mm edge, at about 7.35 mm behind
S1. The model cannot draw it: the flange sits behind the cemented glass/resin junction, and `rimExtensionSd` is not
allowed on a cemented interface. The figure gives no lateral-aberration ray fans, so there is no independent rim
evidence.

Clearance and light: `audit:surface` OK; `audit:aperture` within 3 % with no rim limit; `audit:image-circle` 0
undersized; `audit:field-coverage` 100 % (14.17 of 14.18 mm at 42.8°, clear). Engine EFL 15.4489, F/4.1, half-field
42.96° (tracing 40.53°) and stop radius 3.8181 mm are unchanged. Corner illumination against the package rims, by
`rimcost.mjs --loo`: 27.8 → 27.8 % at 42.8°, 55.6 → 55.6 % at 40.0°, 73.3 → 73.2 % at 37.1°. The worst loss is
0.1 points, so the S7 land stays under the lands rule.

The model-against-figure overlay at matched scale is in the session scratch area. Every surface curve lies on the
drawn curve.

Open: the S2/S3 resin rims (closed: the second review below keeps 11.0 mm) and the L1 flange, as above.

## 2026-11-10 — Second review: diagram, labels and movement

Compared: the live page (infinity, the element inspector for every element, the focus-movement overlay) against
Fig. 1 of `patents/US7843651B2.pdf` page 2, re-read at 600 dpi (47.88 px/mm, axis row 2407, S1 vertex column 1506),
and against Ricoh's HD construction diagram. Element and group counts agree (8/6 plus the resin layer); the maker
marks the hybrid front element as aspherical and the positive member of the rear cemented doublet as ED.

Rims: no change. The 600 dpi readings confirm the semi-diameter pass. L1 top 13.43 mm, L2 9.4, L3 5.8 with the S7
cap ending at 4.91 and a flat land out to the top edge, the L4/L5 doublet 4.8 to 4.9, the L6/L7 doublet 5.05 to 5.15
and L8 5.4 to 5.5. The step order L3 > L8 > L6/L7 > L4/L5 renders as drawn, and L2, L3, both doublets and L8 render
square as drawn. At the L1 flange the figure ends S2 at 10.85 to 10.9 mm and the resin's S3 at 10.35 to 10.4 mm,
both on the flange plane 7.34 mm behind S1. The model keeps 11.0 / 11.0, so the resin's rim tip sits 0.57 mm behind
the glass rim. Trimming S3A to 10.4 passes `audit:surface` and costs 0.8 points at 42.8° (27.8 → 27.0 %), but the
engine's traced field falls from 40.53° to 39.25° (S3A becomes the limiting rim ahead of S2). That is not worth a
3 px detail, so 11.0 stays. The header note and the analysis now name this exception. L1's square edge and flat rear
flange still cannot be drawn: a land is refused on the cemented S2.

Lands and cuts: S7 is the only one, a cut from baseline 5.7 to 4.9 with `rimExtensionSd` 5.7. `rimcost.mjs --loo`
gives a worst loss of 0.1 points (73.3 → 73.2 % at 37.1°); with the land removed (`--noext 7`) the curve is the same,
so the land itself costs nothing. Kept: slight, and the figure draws the land. Final worst loss 0.1 points. Engine
half-field 42.96° (tracing 40.53°), F/4.1 and stop radius 3.8181 mm unchanged.

Labels and tags. The resin element's `name` changed from "Resin" to "L1r", the corpus convention for a resin layer
(47 files), pairing it with L1 in the inspector; the analysis prose and glass table follow. Every `type` agrees with
the signs of R. L1, L3 and L5 are negative menisci; L2 is a positive meniscus; L4, L7 and L8 are biconvex; L6 is
biconcave. The resin layer has f −96.24 mm in the inspector, which is consistent with a 0.18 mm meniscus of
R 13.372 / 10.544. Only S3 carries the `A` suffix and an asphere, matching the patent's single asterisk. The stop
sits 3.13 mm ahead of S11, and its tick in the figure is at 31.12 mm against 31.18 mm. Groups G1 (S1–S5), G2
(S6–S10) and G3 (S11–S15) match the patent's lens groups 10, 20 and 30. The doublet brackets H1, C1 and C2 cover the
hybrid and the two cemented pairs, and none collides with a gap label. Every element shows a focal length.
L7 `apd: "inferred"` stands. The patent names no special glass, and the maker diagram colours exactly this element
as ED.

Movement: infinity only, no variable gap, and the overlay reports no modeled movement. `focus.description` matches
the patent text and Table 1. G1 and G2 move together toward the object, G3 and the stop move faster, d10 goes from
5.19 to 4.57 mm, fB from 37.49 to 39.83 mm, and M is −0.142. The near state stays unmodeled.

Glass: every glass label is exact. L1/L5 S-LAH65V Δνd −0.02, L2 E-F2 0.00, L3 TAFD5F +0.02, L4 E-FD15 −0.05, L6 FD60
+0.06, L7 FCD1 +0.01 and L8 S-FSL5 +0.04, all with |Δnd| ≤ 5e-6. No HOYA row fits 1.80400/46.6; the equally exact
J-LASF015 (Hikari) and K-LaSFn6 (Sumita) give no reason to switch. The resin's 1.52972 / 42.7 recurs in ten other
Pentax/Hoya files, so it is a real production resin. It has no vendor AGF row and keeps its `Unmatched` label on the
Abbe model; colour stays on for the whole lens, and no medium is nd-only. The patent prints only nd and νd: there is
no line index or ΔPgF to add.

Colour against Fig. 2B (d, g and C; 268 px/mm at 600 dpi, reading error about 0.008 mm), relative to paraxial d:

| Line | Patent paraxial / 0.5 / top | Model paraxial / 0.5 / top |
|---|---|---|
| C | +0.037 / −0.034 / about −0.05 | +0.040 / −0.038 / −0.048 |
| d | 0 / −0.060 / about −0.05 | 0 / −0.069 / −0.050 |
| g | −0.073 / −0.086 / about +0.05 | −0.098 / −0.124 / +0.027 |

The C and d lines agree within about 0.01 mm. The g line focuses 0.025 to 0.038 mm short of the plot. By paraxial
sensitivity, the dense flints L4 (−36 µm per +0.01 PgF) and L6 (+29 µm) are the likely carriers. The exact
alternatives for them (S-TIM35, S-TIH6, K-SFLD6) and for L7 (S-FPL51) move PgF by at most 0.0014, which is under
5 µm, so no relabel closes the gap.

Assignee "Hoya Corporation" matches the front page and the corpus spelling.

Open: the model's g-line focus sits about 0.03 mm short of Fig. 2B; this is a partial-dispersion difference that no
catalog equivalent removes.
