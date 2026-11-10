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
- Rims: semi-diameters remain the package's rounded Fig. 1 readings; compare with the figure in the rim pass.
- `aperture.blades: 7` is published by Ricoh but not added in this pass.
