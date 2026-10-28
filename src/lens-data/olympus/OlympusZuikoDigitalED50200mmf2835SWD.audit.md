# Related-patent 50–200 mm audit — 26 October 2026

## Scope and source custody

Queue target 141 is the Four Thirds 2007 SWD product. This is a qualified related-2004-patent study, not
an exact product identification. The prior non-SWD source preference, middle-label hold and rejected
later diffractive family remain intact. Original A1 pp. 10–11, B2 p. 10, Fig. 3, SWD catalog and non-SWD
sheet were visually inspected. The independent source receipt is
`independent_source_review/20261026T105400Z/review_v002.json`.

The prior 6,187,958-byte source archive was recovered with SHA256
`3383d2b9f893b8a3777e790f44f69eba0912776fc97509b302498d0a29c3995c`; ZIP CRC and all 19 payload hashes
passed. Original documents and checkpoints are retained. The catalog's actual imprint is September 2010,
not the historical filename's 2011 label. Official October 2007 product evidence identifies the SWD model
but does not explicitly certify that the earlier prescription remained unchanged.

## Literal prescription and unresolved issues

All 34 optical/filter rows, image row 35, d-line indices and five gaps at three native zooms retain their
source values. Stop r24 travels with G5. The camera LF is 4 mm glass plus 1 mm air, traced by `rearPlates`.
Surface r14 is a cemented interface; there are no aspheres or published numerical clear apertures.

Both original publications print middle f = 101.227 mm. Independent calculations give 100.225234179 mm;
no 100.227 substitution is made. This unresolved source issue has an additive Section G queue row.
Source IH 11.14 mm, prose 11.1 mm and the intended Four Thirds field are kept distinct. The stated fixed
G3 has literal image-fixed drift of 0.011 mm: D17 + D23 + D32 = 57.308 / 57.309 / 57.298 mm. Its cause is
unresolved; nearest-0.001-mm rounding alone does not explain it. No source plane is moved to best focus.

## Rejected G2 trial and selected G4 interpolation

Literal three-point interpolation fails at 0.971656 mm added Gaussian defocus. The original 2,001-state
baseline is preserved. An earlier 33-control G2 compensation improved defocus but reversed G2 locally
imageward by about 1.161 mm. That trial is rejected as a source-mechanism interpretation and preserved,
with its exact model and validation, under `rejected/G2_cam_20261026T111800Z`.

An independent ordinary-angle alternative and the worker's reduced-angle reconstruction instead translate
G4 through opposite D17/D23 changes. G2 keeps its literal interpolation; all native anchors and source
image planes are unchanged. Maximum sampled G4 compensation is 0.699862 mm. Densities 3, 5, 9, 17, 33,
65 and 129 are retained: 17 fails at 0.033106 mm, while 33 is the first tested pass at 0.008875 mm against
the unchanged 0.0092129408 mm reference scale. This is inferred interpolation, not a factory cam.

The final 6,401-state screen confirms monotone objectward G1, G2, G4 and G5, monotone EFL, unchanged
native anchors and maximum actual-EFL readout error 0.050509 mm. The authored source-label error remains
1.012674 mm maximum because the native middle label is preserved. G3's unresolved source drift is not
counted as proof of exact stationarity. All focus endpoints are identical: 90 raw-URL geometry hashes
agree, physical focus availability is false, and no finite cam or marketed-MFD conjugate is invented.

## Clear rims and staged allowance

Approximate original Fig. 3A rims cause four cross-gap failures. A smaller default-safe trial clips the
native tele source marginal beam in G3. Both failures are preserved. The final explicit tapered G3 and
r26 apertures use source beam floors, positive physical clearance and approximate figure proportions;
no source R/d/index is altered and no hidden render trimming is used.

Native tele ray floors require at least 0.911103 and 0.914693 gap-sag intrusion at r12/r13 and r15/r16,
so a 0.90 allowance cannot retain those rays. The final G4 cam was retested at 0.90, 0.91, 0.92 and 0.93;
0.93 is the first passing tested 0.01 stage with 0.1 mm rim increments, not an unconstrained mathematical
minimum. Numerical ray-floor precision is not claimed as figure-measurement precision.

| Surface(s) | Initial radius, mm | Selected radius, mm | Basis |
|---|---:|---:|---|
| r1–r6 | 32.2 | 32.2 | Approximate front drawing; native beam clear. |
| r7–r10 | 22.6 / 21.0 | 20.0 | Opens the r8/r9 gap without clipping the source axial beam. |
| r11 / r12 | 13.2 / 13.2 | 12.2 / 11.5 | Explicit L31 taper; native floor 11.968 / 11.420 mm. |
| r13 / r14 | 13.2 / 13.2 | 11.5 / 12.2 | Explicit L32 taper; native floor 11.445 / 12.064 mm. |
| r14 / r15 | 13.2 / 13.2 | 12.2 / 12.1 | Explicit L33 taper; native floor 12.064 / 12.085 mm. |
| r16 / r17 | 14.0 / 14.0 | 12.1 / 12.8 | Explicit L34 taper; native floor 12.081 / 12.649 mm. |
| r25 / r26 | 15.6 / 15.6 | 14.0 / 13.5 | Clears the r26/r27 gap and native beam. |
| r27 / r28 | 14.8 / 14.8 | 13.5 / 13.5 | Retains positive neighboring clearance. |

The 1,935-state geometry check includes three iris radii and near-infinity raw focus values, with 65 radial
samples per surface pair. Minimum glass thickness is 1.602291 mm, minimum air clearance 0.045338 mm,
maximum gap-sag fraction 0.924242 and hidden trim zero. All 33 aperture census stations fall within 3%;
none is classified as rim-limited, failed, trace-limited or iris-limited.

## Field, ray and MTF scope

Canonical Four Thirds half-diagonal is 10.82 mm. Source IH 11.14 mm is separately checked with a field-only
reference change and identical physical optics. Native source half-angles trace chief-height magnitudes
11.153111 / 11.065010 / 11.065956 mm. No field is silently changed to force agreement.

The final exact-stop audit retains 7,760 transmitted rays, 340 physical clips, 135 unlaunched aiming
failures and zero launched trace failures. A failed aim is not reclassified as vignetting or a passed ray.
The MTF suite uses reference, C/d/F and photopic spectra at native and intermediate zooms, full aperture
and f/8. Best-axial results are diagnostic only. Wide-open photopic half-field T40 near 0.04756 is explicitly
weak; convergence is not production-quality evidence. Glass names are coordinate-compatible dispersion
proxies, not confirmed suppliers or melts. All 54 source-edge MTF requests converge, but the full-aperture
C/d/F source-edge T40 at z = 0.125 is only 0.028028. All 105 nonzero raw-focus requests are guarded as
finite-conjugate unavailable, including values below the first UI step.

## Reproduction and pending gates (closed 2026-10-28; see the deployment validation below)

The source-only harness rebuilds literal JSON, density selection and TypeScript from the original-pixel
transcription, explicit rim policy and pinned formatter. It does not use the candidate as construction
input. Optical outputs bind the exact candidate and source/control/rim hashes. The historical 77ad runtime
and installed dependencies are unchanged. No per-lens test or engine/UI/schema change is committed.

The independent changed-model review at `independent_model_review/20261026T112800Z/model_review.json`
accepts only the qualified infinity-only G4 reconstruction, with all unresolved source and quality limits retained.
Source-only replay is byte-exact. Combined corpus checks, actual viewer QA and verified finished private package
readback remain distinct coordinator gates. No deployment, public sharing or alternate-host action occurred.
(Closed 2026-10-28 by the deployment validation below.)

## 2026-10-28 — Deployment validation and wording pass

Source re-read: all 34 rows of Numerical data 3 (R, d, nd, νd), the stop, the cemented r14 and the five variable
gaps at the three printed states were checked against the A1 page images (pp. 10–11) and the B2 (p. 10); there are
no aspheres. Mismatches: none. The low-pass filter plate (4.000 mm, 1.51633/64.14, 1.000 mm to the image) matches
r33–r35. The front page (US 2004/0042087 A1, 4 March 2004, Hideyasu Takato, Olympus Optical Co., Ltd.) matches the
source fields.

Patent vs model: EFL 52.468 / 101.227 / 202.201 vs 52.466 / 100.225 / 202.191 mm; paraxial focus 0.002 / 0.002 /
0.005 mm ahead of the printed plane; total length 194.718 / 241.348 / 261.504 mm; Conditions (1)–(5) and (10)
reproduce exactly (3.629, 2.785, −0.110, 0.287, 1.939, 3.223). Chief rays at the printed half-fields land at
11.153 / 11.065 / 11.066 mm and exit at 7.42°–5.75° (patent |EW| 5.8–7.4°). Middle label: no single digit, sign or
transposition slip in any middle gap reproduces 101.227 mm in focus (closest D10 = 4.639: 101.263 mm, 0.58 mm
defocus); a radius or thickness slip would break the wide and tele values; the f-number-implied stop radii are
smooth with 100.225 mm and bump with 101.227 mm. The label is most likely a typo for 100.227 mm; it stays an
unresolved erratum. Zoom path: only D23 reverses (required by the printed 1.000 / 5.932 / 1.000); G1, G2, G4 and G5
move objectward; maximum paraxial defocus over stations and quarter points 0.0079 mm. Table 1's Δd/ft = 0.102 at
tele gives −0.254× about 1.05 m from the image, against the product's 1.2 m and 0.21×.

Maker comparison: Olympus lists the original and SWD versions identically (16 elements / 15 groups, 3 ED, 24°–6.2°,
1.2 m, 0.21×); the September 2010 catalog drawing and the original instruction sheet show the same 3 + 2 + 4 + 3 + 2
+ 2 layout, and the catalog colors L12, L43 and L51 as ED, exactly this example's νd 81.54 elements (Embodiments 1
and 2 have a fourth at L13). Photozone states the design was inherited by the SWD version. The two versions share
this optical design, so the earlier SWD-generation caveat is withdrawn.

Fields changed in this pass: numeric literals with more than 6 decimals rounded to 6 (element focal lengths,
intermediate station focal lengths and f-numbers, reconstructed gaps; printed values unchanged, engine values within
5e-6 mm); `name` → "OLYMPUS ZUIKO DIGITAL ED 50-200mm f/2.8-3.5 SWD"; `subtitle` → "US 2004/0042087 A1,
Embodiment 3 — probable production correlation"; `specs` replaced by the corpus form; header comment and the
erratum note rewritten in plain terms with the slip finding; element `name` set to the patent notation (L11–L54) and
`label` to "Element N"; `role` rewritten per element; `apd: "patent"` with notes on L12, L43 and L51 (¶0025 names anomalous-dispersion glass for G1, ¶0045 for G4 and G5 around the stop; each is its unit's only νd 81.54 element, read from the page images); glass
parenthetical shortened to "(catalog equivalent; supplier unconfirmed)" with identical resolved glass;
`focus.description` rewritten. The analysis now states the shared design, drops process vocabulary, and renames
"Verification Status" to "Model Scope and Limitations"; its half-field MTF figure was recomputed on the current engine
(T40 ≈ 0.043 at the wide end, f/2.8).

Open: the middle-label erratum needs its Section G queue row (added by the coordinator).

## 2026-10-28 — Semi-diameter pass against the patent figure

Source: `patents/US20040042087.pdf` (scan, no text layer), PDF p. 4 (Sheet 3 of 4), Fig. 3A, the wide state of
Numerical data 3 at infinity. Fig. 3C (tele, same sheet) draws the same rims and the same axial scale (G3 r11 to
r17 is 114.5 px in 3A and 114 px in 3C), so the readings below hold for every zoom state. The page is a 1-bit
2320 × 3408 raster measured at its native pixel size. The optical axis runs vertically, object at the bottom, and
each rim was read as half the distance between the two rim lines, so the slight tilt of the axis (602 to 599 px
down the panel) cancels.

Scale: r1 to r32 is 1017.5 px for 158.808 mm (6.407 px/mm) and r1 to the filter front is 1222 px for 189.718 mm
(6.441 px/mm); 6.42 px/mm is used. Single thicknesses are drawn loosely (L11 6.1, L12 5.8, L13 7.3 px/mm), but the
radial scale matches the drawn arcs. The sag of r7 at three heights fits R = 54.408 to within 1 px at
6.44 px/mm. The sags of r25 at 15.6 mm (23 px against 23.6 px) and r31 at 13.2 mm (20.5 px against 20.3 px) also
agree, so the drawing is taken as isotropic.

| Surface(s) | Before, mm | Fig. 3A rim (px → mm) | After, mm | Evidence |
|---|---:|---:|---:|---|
| r1–r6 (G1) | 32.2 | 205.8 → 32.0 | 32.2 | Square-cut rims agree within 1%; kept. |
| r7 / r8 (L21) | 20.0 / 20.0 | 145.3 → 22.6 | 22.6 / 22.6 | Drawn 13% larger and square-cut; L22 nests in its concave back. |
| r9 / r10 (L22) | 20.0 / 20.0 | 135.3 → 21.1 | 20.0 / 20.0 | r8/r9 cross at 20.9 mm and the drawing meets them at L22's rim; 20.3 is the 0.93 ceiling, within noise; kept. |
| r11 / r12 (L31) | 12.2 / 11.5 | 84.8 → 13.2 block | 12.2 / 11.5 | r12/r13 cross at 12.0 mm; the figure closes the gap at about 10.5 mm and draws a flat contact ring to the block outline; kept. |
| r13 / r14 (L32) | 11.5 / 12.2 | 13.2 block | 11.5 / 12.2 | As above; r14 is the cemented face; kept. |
| r14 / r15 (L33) | 12.2 / 12.1 | 13.2 block | 12.2 / 12.1 | r15/r16 cross at 12.6 mm; r15/r16 at 12.2 fails the 0.93 allowance; kept. |
| r16 / r17 (L34) | 12.1 / 12.8 | 90.3 → 14.0 | 12.1 / 12.8 | r16 meets the r15 plane at about 13.1 mm in the drawing, with a flat ring to 14.0; the r17 floor of 12.65 mm keeps the taper; kept. |
| r18–r23 (G4) | 15.6 | 100.3 → 15.6 | 15.6 | Agrees; kept. |
| r25 / r26 (L51) | 14.0 / 13.5 | 100.5 → 15.7 | 15.6 / 15.6 | Drawn at G4's rim, square-cut; r25 curve runs to the rim line. The r26/r27 check is at L52's 13.5 mm. |
| r27 / r28 (L52) | 13.5 / 13.5 | 94.5 → 14.7 | 13.5 / 13.5 | r26/r27 cross at 14.3 mm; 13.7 is the 0.93 ceiling (13.8 fails), within noise of 13.5; kept. |
| r29 / r30 (L53) | 15.6 | 100.3 → 15.6 | 15.6 | Agrees; kept. |
| r31 / r32 (L54) | 13.2 | 84.5 → 13.2 | 13.2 | Agrees; kept. |

Four surfaces changed (r7, r8, r25, r26); the stop, `checks` and every other field are untouched. Clearance after
the edit: the image-circle floor reports no undersized surface; field coverage reaches the 10.82 mm corner at all
33 stations. The surface validator passes, and the real-ray trace to Y = 11.15 mm (root nearest the paraxial
pupil) shows no clipped axial beam and no blocked chief ray. Ray floors at the changed surfaces: axial 14.92 /
14.23 mm and full bundle 19.43 / 18.24 mm at r7 / r8, axial 13.81 / 13.39 mm and full bundle 14.30 / 14.09 mm at
r25 / r26. L51's former 2% and 4% side clips are gone; r27 / r28 still clip 4%.

Engine values are unchanged: f/2.8 at the wide end, half-field 19.87°, stop radius 13.98 mm; only the drawn
stop-housing radius follows L51 (14.0 to 15.6 mm). The engine's wide-open vignetting curve rises by at most 0.3
points at any sampled field at the wide, middle and tele states (wide corner 87.1% to 87.2% at 11.8°). The
thinnest glass edge (L53, 1.60 mm), the smallest air clearance (r8/r9, 0.046 mm) and the largest gap-sag fraction
are unchanged. The new L21 edge is 4.56 mm and the new L51 edge 1.97 mm.

Open limitations: L22 and L52 stay 5% and 8% under their drawn rims and the G3 faces 8–14% under the drawn
block, because the printed radii cross where the drawing shows elements touching; the figure is not a scale
drawing there. The analysis's half-field MTF figure was not recomputed. The L51 change alone moves wide-open
transmission at 5.9° (wide) from 99.0% to 99.3%.

## 2026-10-28 — Second review: diagram, labels and movement

Compared: the local page at 52.47, 70.5, 101.2, 148.5 and 202.2 mm (infinity and `focus=1`, which draw the same
infinity-only state), the zoom-motion overlay at both ends and the inspector for L12, L32, L43, L51 and L52, against
Fig. 3A and Fig. 3C (A1 PDF p. 4, the native 2320 × 3408 raster at 72 dpi), ¶0025, ¶0045, ¶0075–0078, ¶0088–0092,
the Numerical data 3 zoom table (A1 p. 11), Table 1, and the Olympus catalogue drawing.

Scale, re-measured from vertex crossings 6 px either side of the axis: r1 at page row 1676 and r32 at row 658 give
1018 px for 158.808 mm (6.41 px/mm); r18 to r29 gives 348 px for 54.172 mm (6.42 px/mm). Rims are half the
distance between the two rim lines.

| Element | Fig. 3A half-height, px → mm | Model sd, mm | Model ÷ figure | Finding |
|---|---:|---:|---:|---|
| G1 | 207 → 32.3 | 32.2 | 1.00 | Agrees; square-cut as drawn. |
| L21 | 145.5 → 22.7 | 22.6 | 1.00 | Agrees; square-cut as drawn. |
| L22 | 136 → 21.2 | 20.0 | 0.94 | Held by the r8/r9 gap: 20.3 passes the 0.93 allowance, 20.4 fails. |
| L31–L33 block | 86 → 13.4 | 11.5–12.2 | 0.86–0.91 | Crossing faces and tele beam floor; see below. |
| L34 | 91.5 → 14.3 | 12.1 / 12.8 | 0.85 / 0.90 | Crossing faces and tele beam floor; see below. |
| G4 | 101.5 → 15.8 | 15.6 | 0.99 | Agrees. |
| L51 | 101.5 → 15.8 | 15.6 | 0.99 | Agrees; square-cut as drawn. |
| L52 | 95.8 → 14.9 | 13.5 | 0.90 | Held by the r26/r27 gap: 13.7 passes, 13.8 fails. |
| L53 | 101.5 → 15.8 | 15.6 | 0.99 | Agrees. |
| L54 | 86 → 13.4 | 13.2 | 0.99 | Agrees. |

The visible differences are in G3, L22 and L52. The figure draws L31–L33 as one flat block and L34 as a square
element taller than it; the site shows a waist at r12/r13 and slanted tops on L31, L32 and L34, and L22 and L52
stand lower beside L21 and L51 than drawn. All follow from the printed radii: r8/r9 cross at 20.9 mm, r12/r13 at
12.0 mm, r15/r16 at 12.6 mm and r26/r27 at 14.3 mm, while the tele beam needs 11.97 mm at r11, 12.06 mm at r14 and
12.65 mm at r17. Squaring L31 would need r11 at or below about 11.55 mm, L32 r14 likewise, and L34 r16 at or above
12.65 mm, so no face can be squared by `sd` alone. Raising L22 to 20.3 mm or L52 to 13.7 mm would gain 1.5%, inside
measurement noise. The drawn height order of neighbours is preserved everywhere. No `sd` was changed.

Fig. 3A draws two flat lands square to the axis: on L21's rear, where the r8 cap ends at 133 of 145.5 px (q = 0.914
left side, 0.917 right side), and on L34's front, where the r16 cap ends on r15's plane at q = 0.917 / 0.923. It
draws r12 and r13 meeting at the block outline and the r27 cap running to L52's edge, with no land. A scratch copy
with r8 `rimCutDepthMm` 5.44 (cut radius 20.68 mm, axial beam 14.23 mm there) and r16 at sd 12.8 with
`rimCutDepthMm` 2.14 (cut radius 12.155 mm; 2.12 at the old 12.1 mm is refused because the tele beam reaches
12.096 mm and the cut needs a 0.05 mm margin) passes the surface validator, leaves the aperture census and the
vignetting curves at the wide, middle and tele states identical, and keeps the half-field at 19.87°. That would draw
L21's land and square L34 at 12.8 mm. Rim cuts are outside this review's edit list and are not applied.

Labels checked and found correct: element names and diagram labels L11–L54 are the figure's L1₁–L5₄ and agree in the
inspector and on the diagram; brackets G1 (r1–r6), G2 (r7–r10), G3 (r11–r17), G4 (r18–r23) and G5 (stop to r32)
match the figure, whose G5 bracket starts at S (¶0077: the stop moves with G5); the L32–L33 doublet (r13–r15) is the
only cemented component; every `type` agrees with the radius signs; all 16 elements carry focal lengths; there are
no aspheres and no `A` labels; the stop sits between L43 and L51, 1.290 mm before r25. The gap labels D6, D10, D17,
D23 and D32 are the patent's and no bracket text collides with them.

Tags: ¶0025 (A1 p. 7) uses anomalous-dispersion glass in the first unit, and ¶0045 (A1 p. 8) in the fourth and fifth
units, placed before and behind the stop between them. L12 is G1's only νd 81.54 element; L43 and L51 are the
elements immediately before and after the stop and their units' only νd 81.54 elements; the Olympus drawing colours
exactly these three. The `apd: "patent"` tags stand. Every glass label resolves to a catalogue equivalent within
0.00001 in nd; the patent prints only nd and νd (¶0080), with no glass names, other line indices or partial
dispersions.

Movement, as group distance from the image plane (mm, wide → middle → tele, from the printed and reconstructed gaps):
G1 194.718 → 241.348 → 261.504, objectward 66.79 and monotone; G2 163.197 → 166.157 → 167.393, objectward 4.20,
monotone and less than G1 as ¶0075 states; G3 151.213 → 151.214 → 151.203, fixed within the printed 0.011 mm drift;
G4 108.737 → 117.492 → 133.125 and G5 with the stop 93.834 → 97.657 → 118.222, each objectward 24.39 and monotone, so
D23 widens from 1.000 to 5.932 mm and narrows back to 1.000 mm as ¶0075 describes. The stations ascend from 52.468 to
202.201 mm and every gap array follows that order; each gap is monotone within each reconstructed segment. The
overlay draws the same travel, maximum 66.79 mm. Focus: every gap pair is identical, the focus slider is disabled
with "Not modeled", and the focus text matches ¶0078 / ¶0091 and Table 1 (Δd/ft 0.102, MG −0.255).

Fields changed: the header's semi-diameter note and the analysis's clear-aperture paragraph said L22 sits just above
the tele axial beam; the beam reaches 14.21 mm at r9 against L22's 20.0 mm, so both now say L22 is held by the r8/r9
gap and name the figure's two lands. The analysis's L34 sentence now gives the reason for its 12.1 / 12.8 mm rims.

Engine values are unchanged: f/2.8 at the wide end, half-field 19.87°, stop radius 13.98 mm; the wide-open
vignetting curves are the same (wide corner 87.2% at 11.8°; on-axis 97.4% at the tele end, as in the first pass's
baseline). The surface validator, image-circle floor (no undersized surface), field coverage (10.82 mm corner at all
33 stations) and real-ray trace to Y = 11.15 mm (ω 12.20° to 3.12°, no clipped axial beam or blocked chief ray) all
pass. Open: the rim cuts above, and the G3, L22 and L52 shortfalls, which the printed radii force.

Coordinator follow-up, same day: the two figure lands the second review proposed are applied as inferred rim cuts —
r8 `rimCutDepthMm` 5.44 (land 20.68 mm) and r16 `sd` 12.1 → 12.8 with `rimCutDepthMm` 2.14 (land 12.155 mm, outside
the 12.096 mm tele beam by more than the 0.05 mm margin). The surface validator, including its rim-cut beam check,
reports no errors.
