## Current status: staging documentation correction v2, 2026-11-09

The original standalone has status QUALIFIED_SOURCE_RECONSTRUCTION_STANDALONE_INTEGRATION_COMPLETE in its preserved GATE_SUMMARY.json. Final-visible metadata, typecheck, format and lint, the 23-file/1,609-test focused regression, build, SEO audit, exact data/analysis readback, raw rebuild verification and guarded three-file installer checks passed. This was not the entire repository test suite; the historical lint failure and subsequent passing recheck remain preserved. These receipts apply to the original standalone files, not a new combined integration or validation of this documentation correction.

The preserved evidence/summicron-dr/source-peripheral-128-summary.json records the later bounded source-plane refinement at 587.5618 nm: axial/midpoint reference MTF is supported through 40 lp/mm, with midpoint 64-to-128 convergence; edge continuous convergence reaches 20 lp/mm. Geometric sagittal 30/40 lp/mm and diffraction sagittal 30 lp/mm remain unconverged at the unchanged 0.01 tolerance; all sampled tangential frequencies pass. The edge admitted 8,046/12,892 pupil samples, and the midpoint admitted 11,740/12,892. The earlier best-focus diagnostic remains separate. No factory identity, measured mechanical apertures, broadband accuracy or finite-focus validation is established.

Supporting original members: GATE_SUMMARY.json and evidence/summicron-dr/source-peripheral-128-summary.json, recoverable through evidence/provenance.json; exact hashes and mappings are recorded in corrections/documentation_v2.json.

## Historical audit, preserved verbatim below

The remaining text is historical checkpoint evidence. Its UNFINISHED/NOT RUN statements and older 64-grid conclusions describe those earlier stages, not the current standalone status. Every historical failure and limitation is retained.

# DE939956B / rigid–DR Summicron source/static audit

2026-11-09. UNFINISHED. No native or integration gate has run.

- Whole sole example, 13 refracting interfaces, seven elements/six groups. Original accepted PDF SHA256: 8cd6559ab06f1ffae7b08ea059ccf1ba5b2f02bdc58aa3b3ff7f1d807afcaf08.
- Table pixels inspected directly: lowercase nd and positive r7 in body and claim. No source erratum is applied.
- Model scales every source length ×0.5, never fits to exact marketed EFL. Glass nd/v remain literal. No fabricated aspheres, cover plates, finder optics or focus motion.
- Initial caps: 15,15,14,14,13,11,11,10,10,12,14,14,14mm. L3–L4 thin air-gap intrusion failed default static allowance. Only faces 6/7 were reduced in 0.05mm steps to 10.05mm; every unsuccessful candidate is preserved in static_report.json.
- Current caps are hypotheses awaiting exact admission and rendering checks. The gap-sag allowance stays at 0.9. No override, rim cut or extension was introduced.
- Stop midpoint at 21.2485mm is inferred; original central 9.08mm total air gap is unchanged. Source BFL absent: computed 30.73780955627864mm.
- Source roundtrip and independent static spherical edge/gap/rim calculations completed. Exact rays, native iris-in-air, zero trim, aperture census and MTF NOT RUN.
- Next bounded pilot: use verified native loader; build only this lens, assess native geometry/trim/iris and the standard aperture census before field/MTF work. Distinguish paraxial F/N convention from nonlinear admitted-diameter diagnostic. Never declare pass from a coarse pupil grid.
- Native findings may justify changes to inferred caps/stop only, retaining source R/d/glass and all total air gaps. Keep failed hypotheses. Do not invent factory accuracy.
- Baseline: 9d121be76e14bc5098256ee78cd0a7545a1acf11, 2253 commits. Bounded prior alias/numerical dedup found no matching family; separate existing R50/SL50/V5 files are not this family.

## Bounded native pilot addendum

UNFINISHED NATIVE PILOT, 2026-11-09. No MTF or integration gates run.
First native build refused missing required focus metadata; failure retained. Added required closeFocusM=1 normal retail range label with explicit NO_INTERNAL_RECONSTRUCTION description. No surface/plane/gap changed and no finite-focus model is asserted.
Native build now passes. EFL 50.02660182975827mm; image plane 66.02730955627865mm; stop radius 8.140863387830885mm; zero hidden trim.
Iris clearance f2: front1.486882829mm, rear2.601102422mm, pass.
Official aperture census is within3%: stated2, traced2.0039714364, limiter6, diagnosis ok. This is a tolerance pass, NOT proof of an unclipped iris beam.
Exact ghost-ray boundary: iris-admitted entrance radius12.440408912mm; fully clear radius12.415754722mm. Face6 needs10.072609344mm and face7 needs10.058579421mm versus current10.05mm each. Preserve these slight real clipping failures; next suggested minimum rounded caps10.072610/10.058580mm remain below default0.9 gap-sag allowance. No modification yet, native recheck required.
Separate nonlinear iris-only EFL/(2\*admitted entrance radius)=2.0106494161; not the repository paraxial F/N definition.
F2.8 is iris limited with iris-relative f-number2.7999999972.
Bounded12-grid unvignetted fractions at angles0,11.25,18,22.5deg: f2=1,.928571,.803571,.625; f2.8=1,1,.964286,.785714. No failed samples. Not a precise throughput convergence result or aperture proof. Full45deg is a retail-field hypothesis, not printed patent field.
Pilot compute ended. Await next native release. Source R/d/nd/v and total gaps preserved. No fitting or gap-sag override.

## Native refinement and bounded reference MTF

UNFINISHED NATIVE REFINEMENT / REFERENCE MTF CHECKPOINT v3. Integration NOT RUN.
Original source drawing and generated native silhouette reviewed. Caps remain inferred mechanics; figure does not dimension them. Retained first-cap failure showed actual clipping at faces6/7. Only those caps increased from10.05/10.05 to10.075/10.060mm, a2.39/1.42micrometre margin above measured full-iris boundary. No other caps, sourceR/d/nd/v, stop position, stop rule, image plane, or total air gaps changed. Shared gap-sag remains below unchanged0.9 allowance. No rim cuts/extensions.
Native build passes; zero hidden trim; f2 iris clearance front1.486882829/rear2.601102422mm. Exact standard boundary now iris-limited at f2 and f2.8: f2 iris-relative f-number1.999999998. Official census passes. Separate nonlinear iris-only diameter ratio remains approximately2.010649; not source/standard aperture mismatch.
Bounded12-grid field throughput is diagnostic only; actual maker-hypothesis fields0/11.25/18/22.5deg. No failed rays. Source has no numerical field.
Reference587.5618nm f2 MTF, geometric and diffraction, maxGrid64, frequencies0/10/20/30/40lp/mm, actual angles0/11.2499997075/22.4999993181deg. All four axial curves converge. Design-plane geometric and diffraction midpoint/edge unconverged. Best-axial geometric midpoint/edge unconverged; best-axial diffraction midpoint converged, edge unconverged. No failed rays. Limits retained, not treated as optical invalidity or a converged peripheral pass.
Authored paraxial image plane remains66.0273095563mm. Best-axial diagnostic shifts evaluation plane by-0.1349907220mm; this is NOT written into the prescription. Default engine format-corner half-angle23.1755179712deg is distinct from the requested maker22.5deg hypothesis, and was not claimed tested here.
Engine photopic capability check available only with all7 glasses using estimated normal-line nd/v dispersion. Broadband not executed; exact factory broadband/secondary spectrum unsupported. Reference MTF available and executed as above.
Compute stopped at this boundary. No integration, installer, MTF128 or full-suite checks. Priorv2 retains immutable originalv1 and exact initial failures. No commits/push/publication.

## 2026-11-10 — Deployment validation

Independent check against DE 939 956 B (page 2 body table and claim table, 300/400-dpi renders) at ×0.5: 13 radii,
12 thicknesses and 7 nd/ν pairs agree; the two tables agree with each other and r7 = +145.08 is printed positive in
both. Engine EFL 50.027 (patent scale 100.05 against the printed f = 100), F/2. Front page: Ernst Leitz GmbH,
inventors Otto Zimmermann and Gustav Kleineberg. Attribution moderate to strong: 7 elements in 6 groups, a 1954
filing aimed at quality below 1 m, ahead of the 1956 rigid and Dual-Range lenses; the collapsible lens is a different
patent (US 2,622,478). `audit:aperture` passes.

Deployment change: `catalog.closeFocusM.marketing` 1 (standard rigid range).

Open: inferred rims at surfaces 5 and 10–13 exceed the patent figure (L7's edge is 0.53 mm at sd 14); focus text,
subtitle, specs, element prose and glass wording.
