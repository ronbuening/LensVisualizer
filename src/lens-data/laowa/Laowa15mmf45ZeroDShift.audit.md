# CN110955036B E1 source/static audit

Status: UNFINISHED, hidden, zero ready-count increase (closed 2026-11-10: deployed and visible after the validation below). Baseline9d121be76e14bc5098256ee78cd0a7545a1acf11, 2253 commits. Original packet preserved. No common-engine changes, no install work, no native/MTF/typecheck/full-test/build execution.

Original physical pages5–7 visually inspected in this task. All29 surface records, stop S15, D4/D14/D29 endpoint rows, four K/A4–A12 rows, d-line definition and literal image row verified against retained images. E2 not mixed. Maker section inspected; probable family only.

Rebuilder maps each of the17 glass intervals to one element and preserves all literal radii, thicknesses, indices, Abbe values, aspheres and source gap endpoints. Gaps are authored once; fixed surfaces have d. No phantom plate. Glass IDs deliberately unmatched. Native stop will derive from nominal4.6; no printed iris dimension exists.

Caps S1–S29: [20, 19, 16, 16, 11, 11, 8.5, 8.5, 8.5, 8, 8, 8, 7, 7, None, 6.5, 6.5, 6.5, 6.5, 7, 7, 7, 8.5, 8.5, 9, 9, 9, 9, 9]. Inferred, not measured or traced clear apertures; no claim of off-axis sufficiency. Qualitative front-large/rear-small section shape guided the initial caps, not a dimensional manufacturer measurement. Initial failed hypothesis S2=20mm violated sampled rim-slope bound. Only S2 reduced to19mm; prescription unchanged. Sampled static geometry checks all glass thicknesses and adjacent air gaps excluding the nonmaterial stop at infinity and finite states, using90% air-gap allowance. Analytic/native checks remain pending (closed: run in v2/v3 below);257 samples do not prove global extrema.

Local baseline publication/Laowa15Shift alias screen found no collision before authoring. Source dedup.json retains prior1095-file scaled first-six screen. Opaque/private archives not universally excluded.

See static_report.json for scalar results and PENDING_CHECKS.txt for release gates. This is an unfinished custody checkpoint, not a qualified delivery package (closed 2026-11-10).

## Native preflight metadata derivative

Publication display normalized to CN 110955036 B and inventor to canonical Dayong Li, following baseline LaowaArgus45mmf095FF precedent. Source Chinese identity remains in original evidence and analysis. Original literal assignee retained unchanged as instructed. Optical object excluding source is byte-equivalent under canonical JSON; no optical, cap, focus, iris, field or plane change.

## Bounded native checkpoint v2: not delivery-qualified

Native geometry passed using unchanged provisional caps and default90% gap-sag allowance. No rim-angle exception, cuts, extensions or hidden trim. Both printed endpoint layouts have zero rendered trim. Source plane z145.8582mm at infinity and145.8509mm finite retained. EFL15.490484956350366mm; derived stop radius5.727628424923961mm. The official aperture census at literalF4.6 returns4.599999995547843, limiter STO, diagnosis ok. Adjacent full-cap sampled iris-plane clearance remains positive: S14→STO4.7930/4.4451mm and STO→S16 at least1.5000mm.

Bounded d-line geometric MTF, source infinity plane: axial converged through40lp/mm at32grid,812valid rays,0blocked/failed/unaimed. Axial MTF at10/20/30/40lp/mm is0.986822/0.947997/0.885604/0.802952. Best-axial diagnostic shifts0.044465385mm and gives0.998002/0.992029/0.982142/0.968441; this diagnostic does not move the authored plane. Source-plane residual remains−0.000933853425mm.

Coverage HOLD: provisional caps' modeled edge is19.449022mm at51.282835°, with chief edge17.999200mm at49.095091°. Both the real36×24mm corner21.633308mm and source ymax31.3mm return outside-modeled-field. Exact source63.66° pupil probe returns unavailable. This is a limitation of the unfinished aperture hypothesis, not evidence disproving the source or retail lens. The in-memory62.6mm image-circle value used only to normalize diagnostic targets to source ymax was never authored into the model and is not coverage proof. Caps were not enlarged blindly; source/ray-backed rim reconstruction remains necessary.

Broadband/CDF/photopic unavailable because Vd81.61 glasses lack partial-dispersion data (closed 2026-11-10: they now resolve to the FCD1 catalog curve). No fabricated glass identity or dispersion. Diffraction MTF, native finite-conjugate certification, retail20cm, shift mechanics and retail image circle remain unvalidated. No full suite/build/typecheck run. No qualification or ready-count increase. Only one native process at a time, Node heap cap1536MiB; all native work stopped after bounded findings.

## Bounded unshifted infinity follow-up v3: integration pending

The v2 field-edge HOLD was partly caused by provisional apertures, not a proof of the literal prescription's coverage. Native checked rays identify S1 as the first limiter: at51° the chief meets radius20.823566mm outside the original20mm cap. The only adopted geometry change is inferred S1 semi-diameter20→23mm. No radii, thicknesses, indices, Abbe values, aspheres, focus gaps, stop location/nominalF4.6, printed plane or common engine changed. This larger first face is qualitatively supported by original Figure1 (physical page10), whose front face is much taller than the following groups; the figure was not treated as a dimensioned mechanical drawing. Original failedS2=20mm rim-slope hypothesis remains retained. Default90% gap-sag and default rim angle remain unchanged.

Both printed gap states pass native geometry with zero render trim. Official aperture census remains stated4.6/traced4.5999999955, limiterSTO. No cuts, extensions, iris override or re-tuned focus. Native measured chief heights at the printed infinity plane: half-frame10.816653377mm at34.877613926° and corner21.633214563mm at54.249665384°, versus requested actual36×24mm corner21.633307653mm. The height residual is0.00009309mm. Source half-angle63.66°, source ymax31.3mm and the actual full-frame corner are separate quantities.

At axis/half/corner, reference d-line geometric and diffraction MTF converge through40lp/mm. Axis geometric/diffraction uses32grid; half geometric64 and diffraction32; corner both require256grid. Corner geometric maxDelta0.00169797 and diffraction0.00184596. Corner9600valid/41868blocked/0failed/0unaimed/0unresolved-in-beam rays. Failed/unconverged64 and128grid cases are retained. All results use the printed image plane, no authored best-focus shift. Earlier best-axial values remain diagnostic only.

Native vignetting/Rimmer simulation at128grid: axis1/1, half-frame pupil-transmission0.868910953 and relative illumination0.791165553, corner pupil-transmission0.185851691 and relative illumination0.117370008. At64grid the corresponding half/corner relative illuminations are0.789498251/0.118997013; no failed or unaimed rays or Rimmer unavailable reason in either run. These are calculated values for inferred clear apertures, not measured retail irradiance, measured coatings or manufactured barrel vignetting. Strong modeled corner falloff is disclosed, not corrected by inventing source dimensions.

The updated model's API edge is23.596359mm at56.622013°, with chief edge22.130861mm at54.875675°. It does NOT establish source31.3mm or shift coverage. Source63.66° still lacks a standard chief/pupil solve. Additional nonauthored cap probes show sequential limitations: S3 radius16.4421mm exceeds16mm at56°; at58° S2 requires19.31435mm, S5 requires11.56352mm and S7 requires8.59642mm. A diagnostic S2=19.38mm (still default-slope-valid), S1=28mm/S3=19mm probe lets unchecked rays/root searches reach59°/25.799054mm and60°/26.807235mm, but those rays need S2 radii19.537866/19.750650mm exceeding that cap and the default spherical rim limit of approximately19.38258mm. The standard chief solve and intersection accessibility depend on cap search bounds; an API failure is not proof of an impossible optical source. No S2 rim-angle exception has enough dimensional evidence here. These broader cap probes were NOT adopted. Source-field and shifted-use qualifications remain HOLD.

Diagnostic image-circle normalization (62.6mm for source targets,43.266615mm for actual-frame targets) was confined to in-memory copies. No image-circle, shift mechanism or format-coverage metadata has been added merely from normalization. The model stays hidden (closed 2026-11-10: visible). A future explicitly unshifted infinity/full-frame qualification may be useful after independent review and aggregate gates. Broadband remains blocked by missing partial dispersion forVd81.61 (closed 2026-11-10: FCD1 relabel); native finite performance/conjugate certification, retail20cm, retailF4.5, factory-prescription identity and shift mechanics are not established. No full suite/build/typecheck executed. No ready-count increase. Exclusive native slot released after the bounded follow-up.

## 2026-11-10 — Deployment validation

Independent check against CN 110955036 B Embodiment 1 (PDF pp. 5–7 page images): 29 surfaces (R, d, nd, νd), the
stop, five cemented interfaces, four aspheres (K, A4–A12) and three variable gaps at both states agree. Engine EFL
15.4905 (printed 15.4908), F/4.6, BF 51.762 (printed 51.763); conditions (1)–(4) reproduce. Front page: 安徽长庚光学科技
有限公司 (Anhui Changgeng Optics Technology Co., Ltd.), inventor 李大勇 (Dayong Li). Attribution strong: 17 elements in 11
groups, aspheres on L2 and L17 and νd 81.6 glass on L3/L14/L16 match Venus Optics' published construction (two
aspherical, three ED elements). `audit:aperture` passes.

Deployment change: assignee in the corpus's English form; `catalog.lensMounts` (the nine mounts on the Venus Optics
specification table), `imageFormat` "135-full-frame" and `closeFocusM.marketing` 0.2 added.

Open: inferred rims are 20–35 % under the patent figure, which limits shift to about 0.9 mm; widen to the figure,
then declare `perspectiveControl` (±11 mm) and the 65 mm image circle. "Unmatched" glass labels on exact HOYA codes;
key, name, subtitle, specs and prose wording (closed in the cleanup and wording pass below; rims and shift closed in
the semi-diameter pass below).

## 2026-11-10 — Cleanup and wording pass

Data file. Header comment rewritten as plain facts (printed example values, asphere convention, both spacing states and
their 0.0073 mm sum difference, inferred rims with S1 at 23 mm, stop from F/4.6, glass basis, why shift is not
declared). `subtitle` "UNFINISHED: unshifted infinity reference checks; source-field/shift coverage held" → "CN
110955036 B, Example 1 — construction-based product association". `specs` ["UNFINISHED STATIC HYPOTHESIS", "17
ELEMENTS / 11 GROUPS", "PROBABLE FAMILY, NOT FACTORY PRESCRIPTION"] → ["17 ELEMENTS / 11 GROUPS", "DESIGN f = 15.49
mm", "DESIGN F/4.6", "4 ASPHERICAL SURFACES / 2 ELEMENTS", "3 ED POSITIONS (MAKER DIAGRAM)"]. `focus.description`
rewritten with the PUBLISHED keyword, the printed gap changes, the group motions and the calculated 1.64 m
object-to-image distance of the 0.01× state; `focus.closeFocusM` (1.637 m, the calculated distance of the printed
state), `keyframes`, `step` and `published` unchanged, since the model has a printed finite state. Seventeen
boilerplate roles replaced with element-specific ones. Cemented ids D1, D2, T1, D3, D4 → C1–C5. `groups` (G1 S1–S4,
G2 S5–S14, G3 S16–S29, the patent's focus groups) and `doublets` (C1–C5) added.

Glass relabels (patent nd/νd against the catalog row; tolerance |Δnd| ≤ 1e-4, |Δνd| ≤ 0.15):

- L2 1.58444/59.16 → K-CSK120-M (SUMITA): Δnd 0.00000, Δνd −0.04. Only exact row; a moulding glass for the
  double-aspheric element.
- L3, L14, L16 1.49700/81.61 → FCD1 (HOYA): Δnd 0, Δνd 0. Ties with CDGM H-FK61; HOYA chosen because E-F5 and E-FL6
  below match HOYA-specific values.
- L4, L9 1.60342/38.01 → E-F5 (HOYA): Δ 0 / 0.
- L6 1.72825/28.32 → E-FD10 (HOYA): Δ 0 / 0.
- L7 1.92286/20.88 → E-FDS1 (HOYA): Δ 0 / 0.
- L8 1.68893/31.16 → E-FD8 (HOYA): Δ 0 / 0.
- L10 1.88300/40.80 → TAFD30 (HOYA): Δ 0 / 0.
- L11 1.56732/42.84 → E-FL6 (HOYA): Δ 0 / 0.
- L12 1.84666/23.78 → FDS90 (HOYA): Δ 0 / 0.
- L13 1.91082/35.25 → TAFD35 (HOYA): Δ 0 / 0.
- L1, L5 1.90000/43.00, L15 1.90366/28.00 and L17 1.80781/40.97 keep `Unmatched (native nd=…, vd=…)` labels: nearest
  rows are TAFD37 (1.90043/37.4), TAFD25 (1.90366/31.3) and D-ZLaF81-25 (1.80757/40.97, Δnd 2.4e-4).

No element carried catalog-copied nC/nF/ng. `apd: "inferred"` with a one-line note on L3, L14 and L16, the three
positions the Venus Optics section diagram marks as extra-low dispersion glass.

Analysis rewritten to the analysis-spec skeleton: process history (checkpoint versions, MTF and vignetting grids,
census numbers, heap and slot notes, hidden/ready status) removed; identification evidence, group focal lengths
(−24.37 / −105.98 / +36.93 mm), the four conditional expressions, the focus table, the asphere table with profile
interpretation, a glass table and "Model Scope and Limitations" added; sources now cite the patent PDF, the Venus
Optics product page and construction diagram, and the Newsshooter launch report.

Engine numbers before and after (identical): EFL 15.490484956350366 mm, FOPEN 4.6, halfField 42.733063821909106°,
stop radius 5.727628424923961 mm, BFD 51.7624 mm (infinity) and 51.9214 mm (0.01× state); `audit:surface` OK;
`audit:aperture` reports no rim limit.

Open:

- Rims. Figure 1 is drawn to scale (about 9.45 px/mm at 300 dpi). It shows S1 ≈ 28.6, S2 ≈ 21, S3 ≈ 22, S4 ≈ 17.6,
  L3 ≈ 16.9 (S6 ≈ 11.3 with a flat land), C1 ≈ 11.9, C2 ≈ 9.7, L8 ≈ 8.1, C3 ≈ 6.9, C4 ≈ 10, L14 ≈ 11.4, C5 ≈ 11.8 and
  L17 ≈ 12.4 mm, 20–35 % above the inferred rims; the Venus Optics diagram has the same proportions. A scratch copy
  with rims near the figure reached 29.2 mm (±11 mm shift corner), 31.3 mm (patent Ymax, at 63.9°) and 32.4 of 32.5
  mm (65 mm circle), but needed `checks.maxRimAngleDeg` about 73° for S2 and relief on the 2→3 and 6→7 gap-sag checks
  (or rim lands). (Closed in the semi-diameter pass below.)
- Shift. After the rim pass, declare `perspectiveControl` { shiftRangeMm: [-11, 11], tiltRangeDeg: [0, 0] } from the
  Venus Optics specification and `imageCircleMm` 65; with the current rims the model supports only about 0.9 mm.
  (Closed in the semi-diameter pass below.)
- L15's printed νd 28.00 matches no glass at nd 1.90366 (TAFD25 is νd 31.3); possibly a misprint, kept as printed.
  (Closed in the second review below: Example 2 prints the same pair and Fig. 2 confirms 28.00; not a misprint.)
- The marketed 0.2 m minimum focus is not modelled; only the printed 0.01× state is.

## 2026-11-10 — Semi-diameter pass against the patent figure

Source: `patents/CN110955036B.pdf`, PDF page 10 (drawing sheet 1/5), Fig. 1, the section of Example 1 at infinity. The
sheet is a 727 × 402 px JPEG at 150 ppi; measurements were made on 300 dpi renders (2 px per native pixel, about
0.21 mm per native pixel).

Scale. Ink crossings 1 mm off the axis give all 29 vertices; S1 at x = 575 px and S29 at x = 1463.5 px span 94.0949 mm,
so 9.443 px/mm, and every intermediate vertex falls within 1.5 px of its prescription position. The vertical scale
agrees: the S1 arc fits at three heights within the line width, S4's sag at 17.1 mm (7.81 mm) lands on the drawn rear
flat of L2, S29's sag at 12.4 mm lands on the drawn rim, the S26/S27 intersection (11.75 mm) is the drawn knife edge
of L16, and S1 meets the plane of L1's rear flat at 28.60 mm, where the figure draws L1's corner. The figure is an
accurate CAD section.

| Surface | Before | After | Fig. 1 | Evidence |
| --- | --- | --- | --- | --- |
| 1 | 23 | 28.4 | 28.6 (knife edge on L1's rear flat) | Figure; 28.4 keeps a 0.4 mm edge and the default 64.2° slope |
| 2 | 19 | 20.7 | 20.8–21.1 (cap end) | Figure; the chief ray to 32.5 mm needs ≥ 20.65 (20.6 clips it by 0.01 mm) |
| 3 | 16 | 21.2, land to 22.2 | 21.2 cap, chamfer to a 22.2 flat top | Figure |
| 4 | 16 | 17.1, land to 22.2 | 17.1 cap, rear flat to 22.2 | Figure |
| 5 | 11 | 16.9 | 16.9 (L3 flat top) | Figure |
| 6 | 11 | 11.2, land to 16.9 | 11.2 cap, rear flat to 16.9 | Figure |
| 7 | 8.5 | 10.7 | ≈ 11.2 (meets L3's rear flat) | Figure; S6 and S7 cross near 11.15 mm, and 10.7 is the largest value the 6→7 gap admits at 0.9 |
| 8 | 8.5 | 12.0 | 12.0 (C1 flat top) | Figure |
| 9 | 8.5 | 8.5, land to 12.0 | 8.5–8.7 cap, rear flat to 12.0 | Figure; cap kept, S9 and S10 meet near 8.6 mm |
| 10 | 8 | 8 (kept) | ≈ 8.5 | Within noise; the 0.2986 mm 9→10 gap governs |
| 11, 12 | 8 | 9.7 | 9.7 (C2 square top) | Figure |
| 13, 14 | 7 | 8.1 | 8.1 (L8 square) | Figure |
| 16–19 | 6.5 | 6.5 (kept) | 6.9 | Within noise (+6 %) |
| 20–22 | 7 | 10.0 | 10.0 (C4 square top) | Figure |
| 23, 24 | 8.5 | 11.3 | 11.3 (L14, about 0.7 mm edge) | Figure |
| 25–27 | 9 | 11.4 | 11.75 (L15 top, L16 knife edge) | Figure; 11.4 leaves L16 a 0.53 mm edge |
| 28 | 9 | 11.3, land to 12.4 | 11.3 cap, front flat to 12.4 | Figure |
| 29 | 9 | 12.4 | 12.4 | Figure |

The stop keeps its derived radius (5.7276 mm). All lands are `rimExtensionSd` on faces bordering air, none on a
cemented junction, each at least 1 mm tall. There are no rim cuts and no rim below its baseline value.

Checks. S2 at 20.7 mm has a 74.0° rim slope, so `checks.maxRimAngleDeg` is 74. The S2/S3 rim intrusion is 9.19 mm of
the 9.8966 mm gap, so `checks.gapSagFrac` is 0.93, the smallest two-decimal value that admits it. The faces stay
0.71 mm apart at the rim, and Fig. 1 draws L1 and L2 touching there. The scans show no slope sign change on S3 (to 22.5
mm; its slope peaks near 19 mm), S4 (to 18 mm), S28 (to 12.6 mm; the K > 0 limit is 12.98 mm) or S29 (to 13.5 mm).

Clearance and coverage. `audit:surface` OK; `audit:aperture` reports no rim limit; `audit:image-circle` none undersized.
`audit:field-coverage` traces the chief ray to 32.50 of 32.50 mm at 64.8°, the edge of the 65 mm image circle. Before
this pass it reached the 21.65 mm full-frame corner at 54.3°, and with a 62.6 mm circle only 22.12 mm (clipped at S3).
A scratch check with a 58.4 mm circle confirms the ±11 mm shifted corner (29.2 mm from the lens axis) at 62.2°.
`clearap` cannot launch chief rays past about 45° on this lens. At 45° it flags no axial clip or chief-ray block, and
the triplet C3 vignettes 3–16 % of one side of the bundle.

Engine numbers. EFL 15.490484956 mm, FOPEN 4.6, stop radius 5.7276 mm and BFD 51.7624 / 51.9214 mm are unchanged.
halfField moves from 42.733° to 45.186°.

Illumination (wide open, infinity, engine vignetting lattice). No field loses light against the baseline. At the
36 × 24 mm corner (54.9°) transmission goes from 12.6 % to 70.1 %, and at 46.2° from 68.6 % to 90.8 %. On the 65 mm
circle it is 44.1 % at 61.8° and 30.7 % at 64.8°.

Metadata added in this pass: `catalog.imageCircleMm` 65 and `perspectiveControl` (shift ±11 mm, tilt [0, 0], 0.1 mm
step) from Venus Optics' specification, now that the rims pass the shifted corner. The data-file header and the
analysis's architecture and model-scope notes were updated to match.

An overlay of the model section on the Fig. 1 render at 9.443 px/mm shows vertices, arcs and rim heights coinciding;
the sketch joins rims straight, so the drawn lands appear only in the app. The maker-diagram comparison stands as
recorded in the deployment validation above: 17 elements in 11 groups, aspherical L2 and L17, ED L3, L14 and L16. The
Venus Optics section has the same proportions as Fig. 1.

Open:

- The live page was not viewed; the section with its lands still needs a look in the app. (Closed in the second review
  below.)
- S7 (10.7 mm) stays 0.5 mm under the drawing, held by the 6→7 gap; C3 (6.5 mm) and S10 (8.0 mm) stay within noise of
  the drawing. (S10 closed in the second review below: raised to 9.7 mm.)
- The ±8 mm medium-format shift is not modelled.

## 2026-11-10 — Second review: diagram, labels and movement

Compared the coordinator's shots of the live page (infinity, the 0.01× state, the focus-movement overlay, +11 mm shift
and the inspector of all 17 elements) with Fig. 1 (PDF page 10, 300 dpi render; axis row 614.5 px, S1 vertex x = 575
px, 9.443 px/mm as established in the semi-diameter pass), and drew a new overlay of the final model on the figure at
that scale.

| Item | Before | After | Evidence | Verdict |
| --- | --- | --- | --- | --- |
| S10 `sd` | 8.0 | 9.7 | Fig. 1: L6's front curve leaves L5's rear flat at 8.5 mm (x = 932 px) and runs 1–2 px right of the flat to C2's top at 9.74 mm near x = 935 px; S10 at 9.7 mm sits at 936 px. The live page drew L6 pointed, with a 1.5 mm bevel from S10 at 8.0 mm to S11 at 9.7 mm, where the figure draws C2 square. Stored rim 18 % under the reading | Figure-driven raise; C2 square as drawn |
| `checks.gapSagFrac` | 0.93 | 0.96 | S9 and S10 are 0.012 mm apart at 8.5 mm (they cross at 8.65 mm), so L5's rear flat intrudes 0.286 mm into the 0.2986 mm 9→10 gap (95.8 %); 0.95 refuses (allowed 0.284 mm). Fig. 1 draws L5 and L6 touching there | Smallest two-decimal value |
| G3 bracket | S16–S29 | STO–S29 | Fig. 1's G3 bracket starts at x = 643 px, ahead of the stop at 651 px; the stop keeps its 1.5 mm spacing to S16 in both printed states, so it moves with G3 | The patent's mechanical group |
| Glass label wording, 13 elements | `NAME (VENDOR, coordinate equivalent; supplier unconfirmed)` | `NAME (VENDOR catalog equivalent; production supplier unspecified)` | Corpus label form; every label resolves to the same catalog row as before | Wording only |

Lands and cuts. No face is below its pre-pass value, so there are no cuts. Removing all five lands (S3, S4, S6, S9,
S28) changes no field's transmission; Fig. 1 draws all five, so they stay. `rimcost` against the pre-pass rims: worst
loss 0.0 points at every field to 54.9°. The S10 raise adds light where the old rim clipped the outer field: 77.3 %
against 70.1 % at the 54.9° frame corner, 84.8 % against 79.2 % at 52.0°, and 48.0 % against 42.6 % at the 62.2°
corner of the frame at full shift. Engine EFL 15.4905 mm, FOPEN 4.6, stop radius 5.7276 mm and halfField 45.186° are
unchanged; `audit:surface` OK, `audit:aperture` no rim limit, `audit:image-circle` none undersized, and
`audit:field-coverage` traces 32.50 of 32.50 mm.

Re-checked and found correct. Element types agree with the signs of R for all 17 elements; the patent names no
elements, so L1–L17 stay; every element carries a focal length; the A markers sit on S3, S4, S28 and S29 only (the
starred surfaces); the stop is drawn between L8 and L9; C1–C5 bracket the five cemented components; G1 and G2 match
the figure's brackets. `apd: "inferred"` stays on L3, L14 and L16: the patent text names no special glass, and the
three νd 81.61 positions are the maker's ED elements as the deployment validation records. S7 (10.7 mm against about
11.2 mm in the figure) stays: S6 and S7 cross at 11.15 mm, and a land on S7 up to C1's 12.0 mm top would cut into L3.
C3 (6.5 against 6.75 mm) and S2 (20.7 against 21.0 mm) stay within the reading error. The shift view at +11 mm
draws the whole unit displaced with its rays reaching the image.

Movement. Keyframe 0 is infinity and keyframe 1 the printed 0.01× state. G1 stays fixed; G2 moves 0.0218 mm toward
the image (D4 7.9482 → 7.9700); G3 with the stop moves toward the object, 0.3261 mm relative to G1 (D14 4.7930 →
4.4451) and 0.3188 mm relative to the image (D29 51.7633 → 52.0821), as claim 1 and ¶0042 state. The overlay shows
a 0.32 mm maximum travel and the slider's far end reads 1.64 m. The near state is launched with parallel beams; at
β = −0.0103 a real object point was not traced.

Glass and colour. The thirteen catalog labels match the printed values within Δnd 4e-6 and Δνd 0.04 (L2 K-CSK120-M
Δνd −0.04, L10 TAFD30 +0.02, all others 0.00). HOYA is kept throughout: E-F5 (38.01) and E-FL6 (42.84) match HOYA
to the printed digits, where Ohara's S-TIM5 and S-TIL26 differ by 0.02 in νd. The patent prints d-line nd and νd only
(no glass names, line indices or partial dispersions). Example 2 (PDF page 8) repeats 1.90000/43.00 (its L5),
1.90366/28.00 (L15) and 1.80781/40.97 (L17). No catalog or vendor AGF row falls inside the exact window for any of
the four unmatched pairs (nearest: TAFD37A 1.90043/37.37; TAFD25, S-LAH95 and J-LASFH13 at 1.90366/31.3; D-ZLaF81-25
1.80757/40.97 and MC-NBFD135 1.80834/40.92), so no row is proposed. No element uses an nd-only medium.

On-axis colour against Fig. 2 (PDF page 11; 259 px/mm, reading error about ±0.006 mm), focus relative to the d-line
paraxial focus:

| Line | Model paraxial | Fig. 2 paraxial | Model, 0.6 pupil | Fig. 2, 0.6 pupil | Model, full pupil | Fig. 2, full pupil |
| --- | --- | --- | --- | --- | --- | --- |
| d | 0 | 0 | +0.075 | +0.077 | +0.024 | +0.027 |
| C | −0.014 | −0.012 | +0.055 | +0.066 | −0.004 | +0.006 |
| g | −0.130 | −0.100 | −0.060 | −0.031 | −0.134 | −0.098 |

With L15 at TAFD25's νd 31.32 the same trace gives C +0.147, F −0.407 and g −0.867 mm paraxial, far from the
plot. Together with Example 2, the plot confirms the printed νd 28.00: no erratum. The g line sits 0.03 mm short of
the plot at every pupil height. Raising one estimated glass's partial dispersion by 0.01 moves the g focus +0.053 mm
for L15, +0.018 for L5, +0.010 for L17 and +0.001 for L1, so L15 (dPgF about +0.006 would close it) is the likely
source; the patent gives nothing to set it from.

Assignee and inventor: the front page's 安徽长庚光学科技有限公司 and 李大勇 match the corpus's "Anhui Changgeng Optics
Technology Co., Ltd." and "Dayong Li".

Open:

- The model's g-line focus lies 0.03 mm nearer the lens than Fig. 2, most likely from L15's estimated partial
  dispersion.
