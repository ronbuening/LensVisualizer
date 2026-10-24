# SMC PENTAX-FA 28-105mm f/4-5.6 Power Zoom: audit log

The source package carried no audit log; this file starts at deployment validation.

## Deployment validation (2026-10-23 UTC)

- Source: US 5,264,965 A (Jun Hirakawa, Asahi Kogaku Kogyo), Embodiment 4, Tables 7-8 (PDF p. 19), Figure 14.
- Transcription: 24 refracting surfaces, 13 N/ν pairs, nine variable-gap cells and three BF values checked against
  the scanned tables; no mismatches. No aspheric surfaces.
- First order (patent → model, wide/middle/tele): EFL 29.02/57.00/101.60 → 29.017/57.001/101.601 mm; BF
  40.22/53.04/76.73 → 40.225/53.046/76.722 mm; F 4.1/4.9/5.8 nominal; half-field 38.0/20.7/11.9° →
  38.01/20.71/11.87°. Group I focal length −39.648 mm and the condition ratio 0.533 reproduce the patent.
- Embodiment choice: E1 35.7-101.6 (13/11), E2 29-82 (13/11), E3 29-101.6 (14/12), E4 29.02-101.6 (13/11, four
  powered groups). E4 fits the production lens best.
- Product match: Ricoh's discontinued-lens page lists the FA 28-105mm F4-5.6 (Power Zoom) as 13 elements / 11
  groups, four-group non-linear zoom, 0.43 m, 0.33x; its construction image (`sz-faz28f4-105f56.jpg`) agrees with
  Figure 14 in element count and grouping. Association is strong; the factory prescription is not confirmed.
- Values not printed by the patent: clear radii, the iris position 1 mm before group II, the iris-diameter
  schedule and 254 interpolated cam nodes (three printed stations retained).
- Validators: surface audit OK; image circle OK; field coverage 257/257 stations. Real-ray launch at the nominal
  f-number overshoots the iris by 0.022-0.036 mm at the printed stations.
- Open: iris calibration overshoot above. Visibility closed by the coordinator (`visible: true`); public wording
  closed by the wording pass, 2026-10-23.

## 2026-10-23 — Semi-diameter pass against the patent figure

Source: US 5,264,965 A, PDF page 15 (sheet 14 of 15), FIG. 14, the only drawn state (wide, infinity). FIGS. 15-17
(F 4.1/4.9/5.8, ω 38.0/20.7/11.9°) tie it to Embodiment 4, the example the file uses. The sheet is a 1-bit scan at
2320 × 3408 px; it was measured at native resolution. The drawn axis tilts 0.35° (8 px over 1315 px), so every height
is half the top-to-bottom distance between line centres (outer ink less the ~2 px line half-width).

A full-pupil spherical-aberration check first: 0.10 mm at wide, at most 0.25 mm anywhere in the range, varying with
zoom. That is design residual, not a misprint signature.

Scale: vertex crossings r1 at x = 705.5 px and r24 at 1919.5 px span the 114.62 mm wide track, giving 10.59 px/mm
(94.4 µm/px). Check spans: r1-r8 211.5 px over 19.75 mm (10.71 px/mm), r8-r9 453.5 px over 42.90 mm (10.57) and
r9-r24 549 px over 51.97 mm (10.56). Only the thinnest elements (L1, L2) are drawn slightly over-thick. A model outline
drawn on the scan at this scale falls on the drawn surface curves for every element.

| Surfaces | Element | Before (mm) | FIG. 14 (mm) | After (mm) | Evidence |
| --- | --- | --- | --- | --- | --- |
| r1, r2 | L1 | 25 | 23.7 | 25 | ratio 0.95, inside noise; kept |
| r3 | L2 front | 20 | 20.4 | 20 | flat-topped front rim; kept |
| r4 | L2 rear | 16.5 | 16.7 | 16.5 | rear face ends where a flat annulus steps out to the front rim; kept |
| r5, r6 | L3 | 20 | 16.5 | 16.5 | ratio 0.83; drawn rim corners sit where the R/sag at 16.5 mm puts them |
| r7, r8 | L4 | 18 | 16.0 | 16 | ratio 0.89; drawn edge thickness 1.5 mm matches 16 mm (0.7 mm at 18) |
| r9, r10 | L5 | 14 | 11.95 | 12 | ratio 0.85; tele axial floor 11.89 mm at r10 |
| r11-r13 | L6/L7 | 13 | 11.85 | 12 | ratio 0.91; FIG. 14 draws group II as one equal-height block; floor 11.71 mm |
| r14-r16 | L8/L9 | 9.5 | 8.26 | 8.4 | ratio 0.87; square-cut; kept above L10 as drawn; floor 8.04 mm |
| r17, r18 | L10 | 8.3 | 7.9 | 8.3 | ratio 0.95; kept |
| r19, r20 | L11 | 14 | 13.3 | 14 | ratio 0.95; kept |
| r21, r22 | L12 | 14 | 13.7 | 14 | ratio 0.98; kept |
| r23, r24 | L13 | 13.3 | 14.2 | 13.5 | wide corner chief ray grazed r24 (13.30 mm); raised to the gap-sag cap |

Clearance after the edit, maximum over all 257 zoom stations at Y = 21.63 mm: no axial clip and no blocked chief ray.
The tightest margins are r10 (axial 11.89 mm, rim 12), r11 (11.71, rim 12), r14 (8.04, rim 8.4) and r24 (chief
13.30, rim 13.5). The viewer's slightly wider paraxial-pupil launch (+0.2 % at tele) stays inside every changed rim.
The image-circle floor is clear, traced corner coverage stays 257/257 stations and the aperture census stays 257
stations within 3 % of the stated f-number. Engine half-field is unchanged at wide (33.97°, paraxially limited by r4)
and tele (21.59°), and rises from 25.72° to 26.06° at the middle station. Wide-open f/4.1 and the 8.144 mm wide iris
radius are unchanged. Wide-open geometric transmission at wide is 89.6/74.0/40.1 % at 32.2/35.1/38.0° (was
86.5/70.8/37.0 %); middle and tele curves are unchanged.

Off-axis vignetting at wide stays strong. It follows the drawn rims, not undersized estimates: L2's rear rim, which
FIG. 14 draws at 16.7 mm, and L13 cut the 38° bundle. The analysis note's package ray counts (65 × 65 disks,
noBracket events) predate this pass.

Open:

- FIG. 14 draws L13 about 0.5 mm taller than L12, its concave front meeting L12's rear face at the rim. At the default
  gap-sag allowance of 0.9, r23 can only reach 13.5 mm. At 14.0 mm the r22 and r23 faces are still 0.055 mm apart.
  `checks.gapSagFrac` 0.98 is the smallest two-decimal value that admits r23/r24 = 14.0 mm (0.97 is refused). With it,
  wide 38° transmission rises to 49.5 %. Closed: applied by the coordinator, 2026-10-23.
- The viewer joins L2's 20 mm front rim to its 16.5 mm rear rim with a straight slope; FIG. 14 draws a flat top and a
  vertical step.
- FIG. 14's S marker sits about 1.6 mm before r9; the model's iris offset is 1.0 mm. Both are drawing-level
  estimates, and the d values were not changed.
- The iris overshoot recorded above comes from the paraxial versus real entrance pupil. Rim values cannot fix it.

## 2026-10-23 — Deployment validation and wording pass

Re-read the local US 5,264,965 A, Embodiment 4, Tables 7–8 (PDF page 19) and FIG. 14 (PDF page 15).
The comparison covered 24 refracting surface rows, 13 N/ν pairs, nine variable-gap cells and three printed BF
values, with zero mismatches and zero aspheric coefficients. D8 includes the model's inferred 1.0 mm iris-to-r9
gap: its stored values plus that gap reproduce the printed 42.90/14.11/2.90 mm separations.

Patent versus model at wide/middle/tele: focal length 29.02/57.00/101.60 mm versus
29.017001717/57.000854804/101.600968015 mm; BF 40.22/53.04/76.73 mm versus Gaussian BFD
40.224463117/53.046210987/76.721554758 mm. The earlier deployment entry's 40.225 mm wide BF is superseded by
this more precise calculation. Nominal f-numbers remain 4.1/4.9/5.8. Printed half-fields are 38.0/20.7/11.9°;
the engine's drawing half-fields are 33.969655219/26.888963765/21.591686517°, a separate aperture-dependent
quantity. Iris radii remain 8.143954022/9.150411048/11.270312969 mm. The saved Ricoh construction image agrees
with FIG. 14 in 13 elements, 11 groups, four functional components and two cemented doublets; production
correlation remains probable rather than a confirmed factory prescription. Ricoh's discontinued-lens page
confirms the original Power Zoom's specifications and distinguishes the later 15/12 IF lens.

The coordinator's L13 radius of 14.0 mm and 0.98 gap-sag allowance are retained. The calculated r22/r23 clearance
is 0.055 mm, with maximum gap-sag fraction 0.974721481. The earlier semi-diameter section records its historical
13.5 mm state. Its L13 open item is now closed; the header and public rim prose describe the current state.

Changed the data header, subtitle, five specification lines, all 13 element roles, focus description and priority-date
erratum wording. The coordinator's name, key, visibility and glass labels remain unchanged; no APD tags were added.
The analysis now names each catalog equivalent while leaving production melts unidentified, removes package
history and obsolete ray/test counts, and explains focus, pupil, rim and spectral limitations in technical prose.
The earlier visibility/wording item is closed in place. The interpolation residuals and separate calculated
0.43 m focus travels were reproduced; these calculations do not add finite focus stations to the model.

Before/after built summaries and all 514 probe lines (257 zoom positions, two focus keyframes) are identical.
EFL, FOPEN, half-field, stop radius, BFD, focus keyframes and all protected prescription fields are unchanged.
The surface audit reports OK with no validation errors. Screenshot review is assigned to the coordinator.

Open: L2's rendered straight sloping edge approximates FIG. 14's flat top and vertical step. The inferred iris
offset remains 1.0 mm versus approximately 1.6 mm in the figure. The paraxial entrance pupil still slightly
overfills the real iris. The production prescription, melt identities and detailed factory cam/focus laws remain
unconfirmed; the table's spectral line and priority-year discrepancy remain unresolved.

## 2026-10-23 — Second review: diagram, labels and movement

Independently compared the live local page with the local US 5,264,965 A, Embodiment 4: Figure 14 on PDF p. 15,
Tables 7–8 and focus text on PDF p. 19, the movement description on PDF p. 18 and Figure 1 on PDF p. 2.
The patent's only E4 section is wide/infinity; the middle/tele checks use its tabulated prescription, not invented
section drawings. Scratch evidence is in `scratchpad/r2/pentax/review/` and `scratchpad/r2/pentax/renderq/` under
the assigned batch scratch directory. The first-pass overlays were not used as measurement input.

### Independent silhouette measurements and decisions

Measured the original 2320 × 3408 raster at 72 PDF dpi, rather than upsampling it. The r1/r24 axis crossings were
read at approximately x = 706/1919 px: 1213 px for the 114.62 mm glass track, or 0.094493 mm/px. Independent
subspans r1–r8 (211 px / 19.75 mm) and r8–r9 (454 px / 42.90 mm) agree within about 1%. Optical-rim heights use
half the top-to-bottom span minus approximately 2 px of line half-width; this also removes the tilted-axis bias.
The measured flat-edge column windows and pixel bounds are reproduced by `review/measure.py`.

| Element / surfaces | Stored before (mm) | Independently measured figure (mm) | Retained / after (mm) |
| --- | --- | --- | --- |
| L1 / r1–r2 | 25 / 25 | 23.67 | 25 / 25; roughly 5% discrepancy, retained |
| L2 / r3–r4 | 20 / 16.5 | 20.46 outer land / approximately 16.7 rear curve-end | 20 / 16.5; retained stepped approximation |
| L3 / r5–r6 | 16.5 / 16.5 | 16.54 | unchanged |
| L4 / r7–r8 | 16 / 16 | 16.02 | unchanged |
| L5 / r9–r10 | 12 / 12 | 11.95 | unchanged; tele axial floor 11.89 |
| L6 / r11–r12 | 12 / 12 | 11.81 | unchanged |
| L7 / r12–r13 | 12 / 12 | 11.76 | unchanged; common square doublet rim |
| L8 / r14–r15 | 8.4 / 8.4 | 8.27 | unchanged |
| L9 / r15–r16 | 8.4 / 8.4 | 8.27 | unchanged; common square doublet rim |
| L10 / r17–r18 | 8.3 / 8.3 | 7.89 | unchanged; roughly 5% discrepancy |
| L11 / r19–r20 | 14 / 14 | 13.32 | **13.3 / 13.3** |
| L12 / r21–r22 | 14 / 14 | 13.70 | **13.7 / 13.7** |
| L13 / r23–r24 | 14 / 14 | 14.22 | unchanged; approximately 1.6% discrepancy |

Visible differences before editing: L2's rim is a slanted join instead of the figure's flat land and cylindrical
step; L11/L12/L13 have equal height instead of the drawn increasing order; L1 and L10 are approximately 5% taller
than the scan. The latter two are within figure/measurement tolerance and were retained. L3 remains taller than
L4, L5/L6/L7 share a square rim, and L8/L9 remain slightly taller than L10 as drawn. No other visible bowl,
cemented-edge, rim-thickness or overlap discrepancy justified changing a rim. Reducing L11/L12, rather than
raising L13 or modifying policy, restores the rear height order with four changed surfaces. Each singlet keeps
equal front/rear radii. Their validator trial printed `OK — no validation errors`, and the all-station clearance
trial had no `CLIPS-AXIAL` or `BLOCKS-CHIEF` flags before the edit.

L2 was independently considered for squaring. The flat annulus appears in native columns x = 826–828,
y approximately 858–901. A trial r4 = 20 mm passes the surface validator, but extends the spherical rear face to
x = 14.718986 mm behind r1, beyond L3's x = 13.600000 mm front vertex. At the retained 16.5 mm curve-end it reaches
only x = 11.002953 mm, before L3's x = 12.075193 mm rim at that height. The full-height spherical bowl would wrap
around its neighbour instead of reproducing the annulus. It would also change the engine wide half-field
33.969655° → 37.63° and sampled wide-edge transmission 49.5% → 54.2%. This trial was rejected; the unequal rims
remain, with the straight-join rendering limitation documented. No rim was widened for illumination.

### Labels, brackets, stop and tags

| Field | Before | After | Evidence |
| --- | --- | --- | --- |
| `groups`, r1–r8 | absent | `I (−)` | Figure 14's I bracket, four front singlets |
| `groups`, r9–r13 | absent | `II (+)` | Figure 14's II bracket, singlet and cemented pair |
| `groups`, r14–r18 | absent | `III (−)` | Figure 14's III bracket, cemented pair and singlet |
| `groups`, r19–r24 | absent | `IV (+)` | Figure 14's IV bracket, three rear singlets |
| `doublets`, r11–r13 | absent | `D1` | Table 7 shared r12; L6/L7 already carry `cemented: D1` |
| `doublets`, r14–r16 | absent | `D2` | Table 7 shared r15; L8/L9 already carry `cemented: D2` |
| L1–L13 `diagramLabel` | absent, numeric 1–13 fallback | explicit `L1`–`L13` | Editorial sequential element labels agree with existing names; patent names groups I–IV only |
| Header and analysis rim/annotation prose | previous equal rear heights, no bracket legend | current rim ordering and explicit annotation spans | Independent measurements and Figure 14 |
| Analysis movement prose | unspecified III reversal | numerical directions, reversal amount and schematic qualification | Table 8 / Figure 1 comparison below |

Checked all element types against Table 7's radius signs and isolated powers. L1/L5/L6/L11/L12 are biconvex
positive; L3/L7/L9/L10 are biconcave negative; L2 and L13 are negative menisci; L4 and L8 are positive menisci.
The qualitative roles agree with their positions and powers. All 24 refracting faces are spherical: no `A`
suffix, asphere entry or aspheric inspector was required. No `apd` tags were present or added. The patent's
general high-index preference (PDF p. 18) is not an anomalous-dispersion or named-special-glass designation.

The stop remains between I and II, just before r9, and moves rigidly with II. Figure 14 suggests an offset of
approximately 1.6 mm before r9; the model uses an explicitly inferred 1.0 mm. No numeric stop placement is
published, and changing its gap is outside this review's edit list. The gap labels D8/D13/D18/BF are legible;
the visible D8 value excludes the separately authored 1.0 mm stop-to-r9 gap. Wide/Tele labels and focal endpoints
29.02/101.60 mm are correct. The readable focus description explicitly discloses infinity-only geometry.

Maker evidence is quoted from the existing deployment record, not a newly viewed or downloaded maker image:
“its construction image (`sz-faz28f4-105f56.jpg`) agrees with Figure 14 in element count and grouping.” The later
record specifies “13 elements, 11 groups, four functional components and two cemented doublets.” The current
analysis records no maker-designated special-dispersion positions. This review did not independently view a maker
image and makes no new claim about its markings or proportions.

### Zoom and focus travel

Table 8, PDF p. 19, reads in ascending f = 29.02 / 57.00 / 101.60 mm order. The model preserves that order across
all 257 stations and both focus columns. The printed gaps match: D8 = 42.90 / 14.11 / 2.90 mm (stored pre-stop
gap 41.90 / 13.11 / 1.90 plus 1.0); D13 = 2.42 / 9.18 / 15.11; D18 = 15.09 / 8.33 / 2.40; BF =
40.22 / 53.04 / 76.73. D13 + D18 is 17.51 mm throughout. No station or gap-pair order needed correction.

Positions below are first vertices in millimetres relative to the fixed image plane, positive toward the image:

| Group | Wide | Middle | Tele | Direction verdict |
| --- | --- | --- | --- | --- |
| I / r1 | −154.84 | −138.87 | −151.35 | imageward 15.97, then objectward 12.48; reversing as Figure 1 |
| II / r9 | −92.19 | −105.01 | −128.70 | monotonically objectward 36.51 overall |
| III / r14 | −77.97 | −84.03 | −101.79 | table stations objectward 23.82 overall; interpolated path briefly reverses |
| IV / r19 | −55.78 | −68.60 | −92.29 | monotonically objectward 36.51, coupled to II |

The interpolated III path reaches −84.352796 mm at station 110 (49.788253 mm), returns imageward by 0.322796 mm
to the middle station, then resumes objectward travel. That excursion is a calculated cam-path feature, not a
published station. Figure 1's generic III sketch shows initial imageward movement, whereas E4 Table 8 places its
wide/middle first vertices 6.06 mm objectward. The prose on PDF p. 18 says the four-group case has the same
movements as Figure 1. This schematic/numeric qualification is recorded rather than reversing a correct E4
table. The II/IV coupling and the decreasing I–II / III–IV separations match the patent text and arrows.

For focus, every stored pair has equal first/last values. I, II, III and IV therefore have **0 mm modeled focus
travel**, at every zoom. PDF p. 19 instead states approximately 5 mm group-I travel to 0.43 m at every focal
length. Independent calculated front-group travel cited in the analysis is 4.995/4.745/4.929 mm objectward,
holding II–IV fixed; those are not authored finite keyframes. No reversal of equal endpoints can supply that
missing motion. The live control shows infinity and “Not modeled”; requesting `focus=1` leaves the optical
geometry unchanged. The focus-motion option is disabled and `mv=focus` opens the zoom movement plot instead.
This is an explicit model/UI limitation, not a reversed focus table.

### Clearance, engine quantities and sampled transmission

After editing, the surface audit again printed `OK — no validation errors`; the image-circle audit found
0 undersized surfaces; traced field coverage was 257/257 stations at ≥99%, with 0 unsolved. All 257 zoom states
at `Y = 21.65 mm`, for focus indices 0 and 1, had no axial or chief-ray flags. Changed-surface maxima were:
r19 axial 7.75 / chief 11.53 mm; r20 7.92 / 12.25; r21 7.70 / 12.76; r22 7.17 / 12.76. These remain below
their new 13.3/13.7 mm rims. Both focus runs are identical, as expected for this static-focus model.

Cross-checked the printed source fields with `clearap` on the three published stations at
`--omega 38,20.7,11.9`: chief image heights were 21.608/21.636/21.701 mm and no axial/chief clips appeared.
The all-node Y solve gives approximately 38.05/20.72/11.87° at those stations, so it does not grossly overdrive
the source field. No asphere-turnover check applies. The existing `checks.gapSagFrac = 0.98` and every other
policy value were retained; no policy change is requested.

With the reduced L12 rim, the r22/r23 common-band height is 13.7 mm. Their computed clearance rises to
0.161987 mm and gap-sag fraction falls to 0.927360; the earlier section's 14 mm / 0.974721 value describes the
previous equal-height rear group. The analysis has been updated to this current common band.

A structural comparison with the pre-review HEAD object confirms that every protected numeric, source, glass,
catalog, stop, focus and zoom field is unchanged. Only r19–r22 `sd`, the thirteen `diagramLabel` additions and the
new group/doublet annotations differ in the data object. The read-only whitespace diff check is clean.

| Runtime quantity, wide / middle / tele | Before | After |
| --- | --- | --- |
| Engine half-field, degrees | 33.969655 / 26.888964 / 21.591687 | 33.969655 / 26.742480 / 21.591687 |
| Nominal FOPEN | 4.1 / 4.9 / 5.8 | 4.1 / 4.9 / 5.8 |
| Real axial entrance radius, mm | 3.538659 / 5.816414 / 8.758704 | unchanged |
| EFL, mm | 29.017002 / 57.000855 / 101.600968 | unchanged |

The 0.146484° reduction of the middle aperture-derived half-field is intentional: it follows Figure 14's rear
height ordering. The resulting 26.742480° still exceeds the source 20.7°, and traced corner coverage is unchanged.
The wide engine estimate was already below the source 38°; real tracing at the source angle remains clear.
`built.mjs` did not throw; all 514 before/after probe lines were byte-identical. Probe's middle/tele reported
stop f-numbers use the wide engine-stop radius rather than the zoom schedule; the runtime/vignetting tools and
live page, which use the actual schedule, are the authorities for f/4.9 and f/5.8.

The requested engine `vig.mjs` before/after curves, wide open at infinity, give:

| Zoom / field angle | Before geometric transmission | After |
| --- | --- | --- |
| Wide / 0° | 100.0% | 100.0% |
| Wide / 29.3° | 99.0% | 94.8% |
| Wide / 32.2° | 95.3% | 87.5% |
| Wide / 35.1° | 82.3% | 78.6% |
| Wide / 38.1° | 49.5% | 49.5% |
| Middle / 20.7° | 87.6% | 87.6% |
| Tele / 11.9° | 89.9% | 89.9% |

Middle and tele sampled curves are unchanged. Values just above 100% in some off-axis samples (up to 101.2%)
are the tool's sampling/normalization result, not a physical illumination claim. Strong wide-edge vignetting is
retained. Full curves and both clearance logs are saved in scratch.

### Live-page and glass observations; open limitations

The post-edit wide, middle and tele pages show square rear rims with L11 < L12 < L13, correct I–IV spans, D1/D2,
explicit sequential L labels and the stop before II. The zoom overlay shows four groups and 36.51 mm maximum
travel at both ends. Closest-requested focus leaves the diagram unchanged and is labelled “Not modeled.”
Element inspectors L2, L6, L8, L11 and L13 show the expected meniscus/biconvex types and qualified TAF1, S-LAL8,
FD60, S-FSL5 and S-LAH65 catalog labels; L6/L8 show D1/D2 badges. Each displays `FL = —`, because no
`focalLengthMm` is authored. That field is outside the permitted edits. Isolated calculated values are
−42.93/+22.94/+18.99/+41.90/−45.52 mm respectively; Table 7 does not tabulate individual element focal lengths.
The 900-pixel screenshots cut off the role paragraph below the inspector; roles were checked against the source
and data, not claimed as visually read in that cropped portion.

All thirteen glass strings resolve in the current catalog: L1 LAC14; L2/L3 TAF1; L4 FDS90; L5 PCD4; L6 S-LAL8;
L7/L8 FD60; L9 S-LAH60; L10 TAFD5F; L11/L12 S-FSL5; L13 S-LAH65. There are **no Unmatched or unresolved
elements**. Table 7 (PDF p. 19) supplies only N and ν, with no glass trade names, extra line indices or partial
dispersion. No current glass label or APD tag was established wrong; catalog matches remain spectral proxies,
not historical material identities. The unspecified spectral line remains disclosed.

Remaining limitations: L2's straight-join step approximation; approximate inferred 1.0 mm iris offset versus
approximately 1.6 mm by figure measurement; absent approximately 5 mm group-I finite focus; the generic III
schematic versus E4 numerical direction; missing inspector focal-length values and clipped role text in the fixed
screenshot viewport; existing paraxial-pupil iris overshoot. These do not justify changing protected prescription
numbers or widening a rim.

Completed the post-edit screenshot sweep at **all 257 authored zoom stations**, infinity focus. Every coordinator
render returned a PNG and completion marker; full pages are archived in `review/zoom/`. Viewed the diagram crops
for all 257 states in numbered contact sheets (`review/zoom-*.png`), as well as full wide/middle/tele pages,
closest-requested focus, both zoom-overlay endpoints, both requested focus-overlay endpoints and the five
inspectors listed above. No additional silhouette overlap, missing group, changing rim order or label defect
appeared during the sweep. Extra UI/inspector/overlay renders are archived in `review/live/`. No maker image was
downloaded or viewed, and no prohibited build/test/generation command or git mutation was run.


## 2026-10-23 — Monotonic zoom-path regeneration

Regenerated only the 254 unpublished gap rows; retained all 257 stations in their original order. The entire
`zoom` block, including every EFL, nominal f-number, `published` flag and label, is byte-identical to the session
baseline. Every printed gap row at indices **0 / 128 / 256** is byte-identical, including its original numeric
spelling. Fixed surface spacings, focus columns, inferred 1 mm iris-to-group-II offset, and
`checks.gapSagFrac: 0.98` are unchanged. Only the four gap `values` arrays and the header zoom note changed.
No comments were added inside `gaps` or `zoom`.

### Reconstruction law and focus residual

Use a monotone, C1 piecewise cubic Hermite law for **D13 versus traced EFL**, through the three printed
configurations. Its endpoint slopes are the shape-preserving PCHIP estimates; its common middle slope makes
`d(D8 + BF)/dEFL = 0` at the printed middle station. The D13 slopes, in mm/mm at wide/middle/tele, are
**0.2834405739972215 / 0.1960188170464561 / 0.06622342611988204**. This prevents an extra group-I turnaround
inside either segment while preserving its printed imageward-then-objectward motion. Group III now moves
objectward throughout. The generating curves share first derivatives at the middle station.

Set **D18 = 17.51 − D13** exactly. For each existing EFL node, solve **D8** from the paraxial system power:
the final ray slope C is affine in D8, so D8 = (−1/EFL − C(0))/(C(1) − C(0)). The previous linear-D8 and linear-BF
laws are replaced; the existing nonuniform EFL spacing is retained verbatim, with no station redistribution.
Use the traced EFLs of the literal printed configurations as the three interpolation abscissae:
29.017001717372 / 57.000854804396 / 101.600968015018 mm. Unpublished station EFLs are solved to their stored values.

Compute BF from the traced Gaussian BFD plus a C1, shape-preserving PCHIP of the three literal printed
`BF − BFD` offsets: **−0.004463117411 / −0.006210987427 / +0.008445241874 mm**. Thus reconstructed stations blend
smoothly into the printed focus offsets, rather than jumping from exact zero defocus to each retained printed
BF. Every offset remains below the requested 0.01 mm infinity-focus tolerance. This is an inferred cam law,
not an additional patent or production prescription.

The nominal f-number schedule is unchanged: linear in station index separately over 0–128 (4.1→4.9) and
128–256 (4.9→5.8). There are no authored per-station `stopSemiDiameter` fields; the retained
`apertureModel: "from-nominal-fno"` derives the iris radii from that schedule and the regenerated optics.

### Numerical proof

Fresh engine-loader tracing of every station and both identical focus columns gives:

| Quantity | Result |
| --- | ---: |
| Maximum absolute BF − BFD, all stations | **0.008445241874 mm** |
| Maximum absolute BF − BFD, reconstructed stations | **0.008054627283 mm** |
| Maximum absolute stored-EFL − traced-EFL, all stations | **0.002998282628 mm** |
| Maximum absolute stored-EFL − traced-EFL, reconstructed stations | **1.0232 × 10⁻¹² mm** |
| Minimum adjacent traced-EFL increment | **0.105322128046 mm** |
| Minimum adjacent stored-EFL increment | **0.102323845417 mm** |
| Maximum absolute (D13 + D18 − 17.51), all stations | **0 mm** |
| Minimum adjacent objectward group-III motion | **0.015839959699 mm** |

Per-gap direction patterns below use `|` to separate wide→middle and middle→tele. Direction-change counts
are sign transitions; the regenerated gaps have none, matching the printed pattern.

| Gap | Baseline pattern | Regenerated pattern | Printed pattern | Baseline → regenerated direction changes |
| --- | --- | --- | --- | ---: |
| D8 | ↓ \| ↓ | ↓ \| ↓ | ↓ \| ↓ | 0 → **0** |
| D13 | ↑ \| ↓↑ | ↑ \| ↑ | ↑ \| ↑ | 2 → **0** |
| D18 | ↓ \| ↑↓ | ↓ \| ↓ | ↓ \| ↓ | 2 → **0** |
| BF | ↑ \| ↑ | ↑ \| ↑ | ↑ \| ↑ | 0 → **0** |

Group vertices relative to the fixed image plane: I is imageward | objectward, with its sole turnaround at
index 128; II, III and IV are objectward | objectward. II and IV remain exactly coupled. No group reverses
within either printed segment. An additional 20,000-interval sampling of the continuous generating curve
found all four gaps strictly monotonic; minimum signed steps for D8/D13/D18/BF were
0.000460880263 / 0.000240358740 / 0.000240358740 / 0.001573538912 mm.

`probe.mjs` was run before and after through `node --import ./scripts/ts-js-specifier-hook-register.mjs`.
Filtering both logs with `^zoom\[(0|128|256)\]` and running `diff -u` produced **no output, exit 0**:
all **six lines** (three printed indices × two focus columns) are byte-identical. Infinity-column values are:

| Index / stored EFL | Traced EFL | BFD | Stored BF | BF − BFD |
| --- | ---: | ---: | ---: | ---: |
| 0 / 29.02 | 29.0170 | 40.2245 | 40.2200 | −0.0045 |
| 128 / 57.00 | 57.0009 | 53.0462 | 53.0400 | −0.0062 |
| 256 / 101.60 | 101.6010 | 76.7216 | 76.7300 | +0.0084 |

### Requested runtime and clearance checks

All commands ran from the repository root against this data file:

- Surface validator: **OK — no validation errors**.
- Field coverage (all stations, below 101 %): **257/257 OK**, 257 at ≥99 % coverage, **0 unsolved**, 0 skipped.
- Image circle: **1 checked, 0 undersized, 0 skipped**.
- `.lens-work/audit-tools/clearap.mjs` at `--Y 21.6333`, all 257 stations, using the existing per-station design
  nominal f-number schedule (4.1 / 4.9 / 5.8 at the anchors, without a constant f-number override):

  | Flag / failure | Before surface list | After surface list |
  | --- | --- | --- |
  | CLIPS-AXIAL | **none (0)** | **none (0)** |
  | BLOCKS-CHIEF | **none (0)** | **none (0)** |
  | Chief / upper / lower ray-solve failures | **none (0)** | **none (0)** |

  Both clearance runs exited 0. Existing corner-bundle vignetting remains; it is not an axial clip or blocked
  chief ray. No semi-diameter was altered.
- `.lens-work/audit-tools/built.mjs`: **OK**, exit 0; all reported numeric fields finite, 257 runtime zoom nodes.
  Wide `FOPEN = 4.1`, `stopPhysSD = 8.143954021644374 mm`, half-field = 33.9696552193359°.

Session evidence and replay scripts are in `/private/tmp/pentax-*` (before/after probe and clearap logs,
validator logs, `pentax-verification.json`, and `pentax-regenerate-slopes.mjs`). These are scratch artifacts,
not repository additions. This section supersedes the earlier audit's interpolated group-III reversal and
old linear-D8/BF reconstruction; the three literal printed configurations remain unchanged.

## 2026-10-23 — Coordinator follow-up to the second review

Added element `focalLengthMm` values (in-air thick-lens focal length from each element's own faces) so the element inspector shows them; optics unchanged.
