# Audit Log — LEICA SUMMICRON 50mm f/2 Rigid / Dual Range

Patent: DE 939956 B, sole example — scaled ×0.5; probable production correlation, not a factory prescription

## Package status at delivery, 2026-11-09 (superseded by the 2026-11-10 sections below)

The original standalone has status QUALIFIED_SOURCE_RECONSTRUCTION_STANDALONE_INTEGRATION_COMPLETE in its preserved GATE_SUMMARY.json. Final-visible metadata, typecheck, format and lint, the 23-file/1,609-test focused regression, build, SEO audit, exact data/analysis readback, raw rebuild verification and guarded three-file installer checks passed. This was not the entire repository test suite; the historical lint failure and subsequent passing recheck remain preserved. These receipts apply to the original standalone files, not a new combined integration or validation of this documentation correction.

The preserved evidence/summicron-dr/source-peripheral-128-summary.json records the later bounded source-plane refinement at 587.5618 nm: axial/midpoint reference MTF is supported through 40 lp/mm, with midpoint 64-to-128 convergence; edge continuous convergence reaches 20 lp/mm. Geometric sagittal 30/40 lp/mm and diffraction sagittal 30 lp/mm remain unconverged at the unchanged 0.01 tolerance; all sampled tangential frequencies pass. The edge admitted 8,046/12,892 pupil samples, and the midpoint admitted 11,740/12,892. The earlier best-focus diagnostic remains separate. No factory identity, measured mechanical apertures, broadband accuracy or finite-focus validation is established.

Supporting original members: GATE_SUMMARY.json and evidence/summicron-dr/source-peripheral-128-summary.json, recoverable through evidence/provenance.json; exact hashes and mappings are recorded in corrections/documentation_v2.json.

## Historical audit, preserved verbatim below

The remaining text is historical checkpoint evidence. Its UNFINISHED/NOT RUN statements and older 64-grid conclusions describe those earlier stages, not the current standalone status. Every historical failure and limitation is retained.

## DE939956B / rigid–DR Summicron source/static audit

2026-11-09. UNFINISHED. No native or integration gate has run. (Closed: native checks followed the same day; integrated 2026-11-10.)

- Whole sole example, 13 refracting interfaces, seven elements/six groups. Original accepted PDF SHA256: 8cd6559ab06f1ffae7b08ea059ccf1ba5b2f02bdc58aa3b3ff7f1d807afcaf08.
- Table pixels inspected directly: lowercase nd and positive r7 in body and claim. No source erratum is applied.
- Model scales every source length ×0.5, never fits to exact marketed EFL. Glass nd/v remain literal. No fabricated aspheres, cover plates, finder optics or focus motion.
- Initial caps: 15,15,14,14,13,11,11,10,10,12,14,14,14mm. L3–L4 thin air-gap intrusion failed default static allowance. Only faces 6/7 were reduced in 0.05mm steps to 10.05mm; every unsuccessful candidate is preserved in static_report.json.
- Current caps are hypotheses awaiting exact admission and rendering checks. (Closed: checked in the pilot below.) The gap-sag allowance stays at 0.9. No override, rim cut or extension was introduced.
- Stop midpoint at 21.2485mm is inferred; original central 9.08mm total air gap is unchanged. Source BFL absent: computed 30.73780955627864mm.
- Source roundtrip and independent static spherical edge/gap/rim calculations completed. Exact rays, native iris-in-air, zero trim, aperture census and MTF NOT RUN.
- (Closed: done in the pilot below.) Next bounded pilot: use verified native loader; build only this lens, assess native geometry/trim/iris and the standard aperture census before field/MTF work. Distinguish paraxial F/N convention from nonlinear admitted-diameter diagnostic. Never declare pass from a coarse pupil grid.
- Native findings may justify changes to inferred caps/stop only, retaining source R/d/glass and all total air gaps. Keep failed hypotheses. Do not invent factory accuracy.
- Baseline: 9d121be76e14bc5098256ee78cd0a7545a1acf11, 2253 commits. Bounded prior alias/numerical dedup found no matching family; separate existing R50/SL50/V5 files are not this family.

## Bounded native pilot addendum

UNFINISHED NATIVE PILOT, 2026-11-09. No MTF or integration gates run. (Closed: superseded by the refinement below.)
First native build refused missing required focus metadata; failure retained. Added required closeFocusM=1 normal retail range label with explicit NO_INTERNAL_RECONSTRUCTION description. No surface/plane/gap changed and no finite-focus model is asserted.
Native build now passes. EFL 50.02660182975827mm; image plane 66.02730955627865mm; stop radius 8.140863387830885mm; zero hidden trim.
Iris clearance f2: front1.486882829mm, rear2.601102422mm, pass.
Official aperture census is within3%: stated2, traced2.0039714364, limiter6, diagnosis ok. This is a tolerance pass, NOT proof of an unclipped iris beam.
Exact ghost-ray boundary: iris-admitted entrance radius12.440408912mm; fully clear radius12.415754722mm. Face6 needs10.072609344mm and face7 needs10.058579421mm versus current10.05mm each. Preserve these slight real clipping failures; next suggested minimum rounded caps10.072610/10.058580mm remain below default0.9 gap-sag allowance. No modification yet, native recheck required. (Closed: caps raised to 10.075/10.060 mm in the refinement below.)
Separate nonlinear iris-only EFL/(2\*admitted entrance radius)=2.0106494161; not the repository paraxial F/N definition.
F2.8 is iris limited with iris-relative f-number2.7999999972.
Bounded12-grid unvignetted fractions at angles0,11.25,18,22.5deg: f2=1,.928571,.803571,.625; f2.8=1,1,.964286,.785714. No failed samples. Not a precise throughput convergence result or aperture proof. Full45deg is a retail-field hypothesis, not printed patent field.
Pilot compute ended. Await next native release. (Closed.) Source R/d/nd/v and total gaps preserved. No fitting or gap-sag override.

## Native refinement and bounded reference MTF

UNFINISHED NATIVE REFINEMENT / REFERENCE MTF CHECKPOINT v3. Integration NOT RUN. (Closed: integrated 2026-11-10.)
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
subtitle, specs, element prose and glass wording. (Wording items closed in the cleanup pass below; rims closed in
the semi-diameter pass below.)

## 2026-11-10 — Cleanup and wording pass

Data file. The header comment is rewritten in plain terms with every fact kept: source table and claim, ×0.5 scale,
r7 sign, d-line reading of nd/ν, midpoint stop, estimated rims, derived back focus, infinity only.

- `subtitle`: "DE 939956 B sole example, scaled ×0.5; probable family, not factory prescription" → "DE 939956 B, sole
  example — probable production correlation, scaled ×0.5".
- `specs`: "7 ELEMENTS / 6 GROUPS", "50.0266 mm DESIGN EFL", "INFINITY-ONLY QUALIFIED HYPOTHESIS" → "7 ELEMENTS / 6
  GROUPS", "DESIGN f = 100 mm (SCALED 0.5× TO 50 mm)", "DESIGN F/2", "ALL SPHERICAL".
- `catalog.focalLengthMm.design` 50.0266 → 50 (printed f = 100 × 0.5).
- `focus.closeFocusM` 1 → 1e15 placeholder; `catalog.closeFocusM.marketing` stays 1. `focus.description` is plain
  text naming the 1 m rigid range and the 0.88–0.48 m Dual Range near range (Leitz 1960 list, p. 4).
- Seven identical `role` strings replaced with per-element roles; cemented id D1 → C1 on L5, L6 and the doublet.
- Glass: L1, L3, L6, L7 → J-LAK9 (Hikari), Δnd 1e-8, Δνd +0.03 (Ohara S-LAL9 also fits at −0.08; Schott N-LAK9 is
  −0.19 off in νd). L5 → LF5 (Schott), Δnd 4e-7, Δνd +0.05. L2 (1.62237 / 36.1) and L4 (1.60140 / 38.3) keep
  `Unmatched` labels that state the printed values; the nearest rows (TIM11, F5) are 1.4e-3 and 2.0e-3 off in nd. No
  catalog-copied nC/nF/ng to drop. No `apd` tags: the maker publishes no special-dispersion element.

Analysis. The "Verification Status" section (gate names, test counts, MTF grids, cap history) is replaced by "Model
Scope and Limitations". Evidence-packet wording and run-together numbers are gone. Glass lines carry the catalog
equivalents and element focal lengths. The identification list gains the 1954 date and close-range aim, with
Merklinger (Shutterbug, June 1994) cited for the rigid lens being a new design. The 1960 list is no longer said to
show the matching architecture; it shows a pictogram only.

Engine before and after (built.mjs, probe.mjs): EFL 50.02660182975827, FOPEN 2, halfField 30.628971215637616, stop
radius 8.140863387830885, BFD 30.7378, TL 66.0273, identical; only `closeFocusM` moved (1 → 1e15). `audit:surface`
OK; `audit:aperture` within 3 % of the stated f-number, no rim limit.

Open:

- Rims: surfaces 5 (13 mm) and 10–13 (12 / 14 / 14 / 14 mm) are larger than both the patent figure and the published
  rigid-lens scheme (allphotolenses, about 11 / 10 / 10 / 11 / 11 mm); L7's edge is 0.53 mm at sd 14. Left for the
  rim pass. (Closed in the semi-diameter pass below: surface 5 and the doublet reduced; L7 kept at 14 mm.)
- `lensMounts`: the 1960 list names a screw-thread version (SOSTA) but does not show it carries the rigid optical
  cell; `leica-ltm` left out.
- Patent kind code: DEPATISnet lists DE 939956 B, Google Patents DE939956C; the file keeps "DE 939956 B".

## 2026-11-10 — Semi-diameter pass against the patent figure

Source: `patents/DE939956B.pdf`, page 3, the only figure (the sole example), a 300 ppi CCITT scan. The figure draws
no optical axis and no stop; heights are half the distance between each element's top and bottom rim lines. The
scan tilts by about 0.8° (rim midpoints drift from y 1541 to 1528 px across the section).

Scale. The figure is not to scale along the axis: the three thin air spaces (0.192, 0.515, 0.192 at f = 100) are
each drawn about 60 px wide. Element thicknesses plus the central gap give 12.32 px per patent unit at 300 dpi
(822.5 px over 66.78 units). Circle fits to the strongly curved faces give 11.96 (r5), 11.83 (r8), 12.06 (r11) and
12.13 (r13) px per unit, residuals under 5 px. Adopted 12.15 ± 0.2 px per unit, i.e. 24.3 px per model mm at ×0.5.
An overlay of the model outlines on the figure at that scale, each element shifted to its drawn vertex, lines up
the drawn curvatures of r1, r5, r8, r11 and r13.

| Surface | Before | Figure | After | Evidence and reason |
|---|---:|---:|---:|---|
| 1, 2 (L1) | 15 / 15 | 16.2 | 15 / 15 | +8 %, within noise; the drawn 1.7 mm edge fits about 15.3 |
| 3, 4 (L2) | 14 / 14 | 14.5 | 14 / 14 | +4 %, kept |
| 5 (L3 front) | 13 | 11.6 | 11.6 | knife-edge tip at 280.8 px; costs no corner light |
| 6 (L3 rear) | 10.075 | 10.7 | 10.075 | small chamfer below the tip; the air space to L4 closes near 10.6 mm |
| 7 (L4 front) | 10.06 | 11.5 | 11.5 | flat rim at 280.5 px; validator OK, no light change |
| 8 (L4 rear) | 10 | 8.5 | 8.5 | chamfer corners 207.5 px; axial marginal ray 8.3 mm; costs no light |
| 9 (L5 front) | 10 | 7.8 | 8.8 | chamfer corners 190 px; 7.8 meets the axial marginal ray (7.84 mm) and costs 13 points at 20.3°; raised to meet the 3-point rule |
| 10, 11 (L5/L6 flat rim) | 12 / 14 | 10.1 | 11.6 / 11.6 | flat rim at 245 px, square-cut; 10.1 costs 17 points at the corner |
| 12, 13 (L7) | 14 / 14 | 11.0 | 14 / 14 | flat rim at 266.5 px; any cut of 13 narrows the engine half-field (13.5 gives 30.20° against 30.63°) |

Light and field. Corner transmission at f/2, infinity, from the full-pupil lattice against the package rims: 23.2°
58.6 → 55.7 %, 20.3° 71.8 → 69.2 %, 17.4° 80.4 → 79.3 %, 14.5° 86.6 → 86.5 %, unchanged below. Worst loss 2.9
points at 23.2°. Restoring the doublet alone wins back 2.9 points; restoring L3 or L4 wins nothing. The figure's
own rear rims (doublet 10.1, L7 11.0, surface 9 at 8.0) cost 23 points at the corner and the smallest raise
within 3 points is the set above. Engine half-field 30.63° and f/2.000 unchanged; EFL, BFD and stop radius
unchanged. The repo validator passes; the aperture audit reports no rim limit; image-circle and field-coverage are
unchanged (100 % at the corner). The real-ray trace at the 21.63 mm corner shows no clipped chief ray. It still
flags surface 6 at 10.13 mm under its real-ray pupil convention (stop 8.18 mm), as before; the engine's paraxial
f/2 beam clears it by about 2 µm and the LSA trace (−0.06 mm at full pupil) shows no misprint. Raising surface 6
is refused by the closing air space.

Maker diagram: no maker image was viewed in this pass. The deployment validation above compared the public
allphotolenses scheme for the rigid lens: 7 elements in 6 groups, one cemented pair behind the stop, no aspherical
or special-dispersion elements, and a rear group drawn smaller than the front, as in the patent figure.

Open: the doublet and L7 remain larger than both drawings because of the corner-light and field rules; a later
decision to accept the light loss would set them to about 10.1 and 11.0 mm.

## 2026-11-10 — Second review: diagram, labels and movement

Compared: the coordinator's shots of the live page (infinity, the seven element inspectors, the movement overlay)
against page 3 of `patents/DE939956B.pdf` at its native 300 dpi, and the semi-diameter pass's overlay, whose model
outline uses the current rims. Light is from `rimcost.mjs` against the rims before the semi-diameter pass (full-pupil
lattice, f/2, infinity).

Rims: no change. Independent readings at 24.3 px per model mm, centre of the drawn rim line top to bottom: L1 16.19
mm (787 px), the doublet's flat rim 10.07 mm (489.5 px), L7 10.97 mm (533 px). Each is within 0.1 mm of the
semi-diameter pass. L1 stays at 15 (−7 %). Its drawn edge is 42 px (1.73 mm) wide. The model's edge reaches that width
near 15.3 mm, so at L1 the drawing does not agree with its own scale.

The doublet and L7 sit above the drawing because of light, and no other split of the 3-point budget is closer to the
figure:

| Trial | Worst loss | Engine half-field | Note |
|---|---:|---:|---|
| Current (face 9 8.8, doublet 11.6, L7 14) | 2.9 at 23.2° | 30.63° | |
| L7 13.5 | 3.1 at 23.2° | 30.20° | over budget |
| L7 13.7 | 2.9 at 23.2° | 30.37° | a 2 % move, inside the reading noise |
| Doublet back to 10 / 12 / 14, L7 13 | 6.2 at 23.2° | 29.73° | over budget |
| Face 9 10, doublet 12, L7 13.5 | 2.7 at 23.2° | 30.20° | doublet +19 % and face 9 +28 % over the figure |
| Figure doublet 7.8 / 10.1 / 10.1 | 16.9 at 23.2° | 29.46° | over budget |
| Figure L7 11.0 | 23.0 at 23.2° | 27.52° | over budget |

Lands and cuts: no lands. Faces 5 and 8 are free cuts. Faces 9–11 cost the whole 2.9 points at 23.2°
(58.6 → 55.7 %), within the budget, so they stay. Worst loss 2.9 points at 23.2°.

Step order: the figure runs L1 > L2 > L3 ≈ L4 > L7 > doublet. The model keeps L1 > L2 > L3 ≈ L4 and L7 above
the doublet. The light-held rear rims bring the doublet level with L4 (11.6 against 11.5; drawn 10.1 against 11.5)
and L7 level with L2 (14 and 14; drawn 11.0 and 14.5). Across the stop gap, L4's rear corner (8.5 mm) sits 0.3 mm
below L5's front face (8.8 mm), where the figure draws 8.5 over 7.8. The two flips across the stop are 0.1 and
0.3 mm, 1 to 3 px on the page. Both come from the rims the light rule holds, so they stay.

Labels and tags, checked and correct: every `type` agrees with the signs of R. The stored focal lengths match the
paraxial probe (+50.52, −106.26, +33.64, −25.14, −24.22, +28.41 and +51.77 mm; the cemented pair −450 mm). The C1
bracket spans 9–11 and L5 and L6 carry `cemented: "C1"`. FRONT 1–8 and REAR 9–13 bracket the four members that the
patent describes in words: a split front positive member, two negative menisci around the stop and a rear positive
member. The patent numbers none of them. No asphere is printed and none is modelled. No `apd` tag is set, because the
patent names no glass and the maker marks none. The stop sits between L4 and L5; the figure draws none. The patent
labels the thicknesses d1–d7 and the air spaces L1–L5, and it names no lenses. L1–L7 stay as the lens names, and the
analysis now says the patent's L-labels are spacings.

Text: the header comment and the analysis no longer say that the doublet's front face follows the figure. It sits at
8.8 mm against the drawn 7.8.

Movement: the lens is static. The overlay reports no modelled movement, the slider's far end reads "Not modeled", and
`focus.description` says the patent publishes no focusing movement.

Glass and colour: J-LAK9 is exact for L1, L3, L6 and L7 (Δνd +0.03). The other rows in the window, S-LAL9 (−0.08)
and K-LaK9 (−0.14), are no better, and N-LAK9 is 0.19 off. LF5 (Schott) is exact for L5 (Δνd +0.05) and is the most
plausible vendor for a German 1954 lens. L2 1.62237 / 36.1 and L4 1.60140 / 38.3 have no row inside |Δnd| ≤ 1e-4 in
the repo catalog or the vendor AGF files. The nearest are Hoya F11 (obsolete) and Ohara TIM11, 1.4e-3 off, and F5,
2.0e-3 off. The patent prints only nd and ν (page 2): no line indices, no partial dispersion and no aberration
curves, so there is nothing to compare for colour. 1.60140 / 38.3 also appears in Zeiss US 2,720,140 (the Sonnar
150 mm file), so it is a real period glass and not an optimizer value. 1.62237 / 36.1 recurs nowhere in the corpus.
No medium is constant or nd-only, and there is no catalog row to propose.

Assignee: the front page prints "Ernst Leitz G. m. b. H., Wetzlar"; the file's "Ernst Leitz GmbH" is the corpus
spelling. Engine before and after: half-field 30.63°, f/2.000, EFL 50.0266 mm, unchanged. The surface validator
passes, the aperture audit reports no rim limit, and field coverage is 100 % at the 23.2° corner.

The semi-diameter pass's open line on the doublet and L7 stays open. Setting them to the figure would cost 16.9
points for the doublet (with face 9 at 7.8) and 23.0 points for L7 at 23.2°.
