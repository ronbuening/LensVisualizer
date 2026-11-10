# Pentax DA15 E1 static reconstruction audit

Status: source/static and native checkpoints preserved below as chronological records. See the final integration entry and packaged gate summary for current delivery status.

- Baseline: 9d121be76e14bc5098256ee78cd0a7545a1acf11, 2253 real commits.
- Custody: correction addendum; original accepted archive retained unchanged.
- Visual checks: grant Fig. 1 and Table 1 pixels. Literal S11 −42.598 and S15 −17.739 confirmed. No source optical optimization.
- Roundtrip: 15 radii, source thicknesses, nine nd/Vd pairs including resin, all asphere terms, and recombined stop gap. Last source d15 remains null in source; separate derived air-focus gap is explicitly qualified.
- Identity: probable original smc DA15 family. Whole E1 is representative, not unique production identity; HD diagram is supporting architecture only.
- Caps: [13.5,11,11,9.3,9.3,5.7,5.7,4.9,4.9,4.9,5,5,5,5.5,5.5] mm. Rounded Fig.1 envelope hypotheses from approximately 10.28 pixels/mm. Not patent-listed apertures and not yet validated for field throughput.
- Stop: source position; radius not authored. Independent paraxial radius hypothesis 3.818070797 mm at source F4.1. Native aperture remains untested.
- Static checks: 101 radial samples per material interval and air gap. Minimum material thickness 0.18 mm (resin). Maximum rim slope 55.34737°, below default. Maximum air-gap intrusion fraction 0.379175, below 0.9. No gap override, cuts or extensions.
- Resin: ninth modeled material, preserving nd/Vd; catalog remains eight glass elements/six groups. Native cemented-interface and zero-trim checks pending.
- Not run: native build/aperture/iris/render/rays/MTF, full integration gates, installer.

Rebuild source/static outputs with `python evidence/pentax-da15/prepare.py`. Evidence scripts are local reproducibility artifacts, not per-lens corpus tests. No commits, pushes or publication performed.

## Bounded native pilot

Initial missing-layout ingest error is preserved in native-aperture-initial.log. Required display-only yScFill=0.35 was then added; the first cap hypothesis and entire optical prescription remain unchanged. Native buildLens, nine material-entry zero-trim diagnostics and iris placement pass. See evidence/pentax-da15/NATIVE_STATUS.json for distinct paraxial/finite-ray aperture measures and bounded field sampling. The corner unvignetted fraction is 24.04%, not a factory performance claim. MTF is unrun and spectral-blocked by unmatched low-dispersion glass. Full gates remain unrun. Native compute stopped at the requested boundary.

## Reference-only route preparation

Lightweight assessMtfSupport confirms d-line 587.5618 nm available with useResolvedReference=false. C/d/F and photopic remain unavailable. The prepared reference-mtf.mjs requires explicit release before its heavy compute branch. No MTF was computed during this preparation and no inferred material curve was added. Source paraxial F4.1, iris-relative no-extra-glass-clipping ratio 4.099999996, and EFL/exact-admitted-diameter ratio 4.250620867 are distinct. No iris adjustment was made.

## Released native d-line MTF

One 1536 MiB worker ran reference-mtf.mjs --run-mtf with explicit release. Both design and diagnostic best-axial results converge through the sampled 40 lp/mm upper frequency at all three requested format-height fields. Exact angles, grids, ray counts and convergence deltas are in NATIVE_STATUS.json. Source/data/authored bytes match the pre-MTF manifest. No cap, iris, source, material curve or authored image-plane adjustment occurred. C/d/F and photopic remain unsupported. Full integration has not run; compute stopped.

## Standalone integration

Metadata, TypeScript, repository format and lint checks pass. Focused corpus regression passes 23 files and 1609 tests in 200.70 s using one worker, a 3 GiB heap cap, cache disabled and unchanged timeouts. Production build prerenders 1875 routes and the SEO audit has zero errors/warnings; final documentation is rebuilt and checked separately. Exact source/native semantic equality passes after formatting. Guarded installer checks cover real pinned history, exact three-file overlay, idempotence, conflicting content, symlinks and missing history. No complete-suite claim, commit, push, deployment or optical retune is made. See packaged GATE_SUMMARY.json and final logs for final-byte verification.
