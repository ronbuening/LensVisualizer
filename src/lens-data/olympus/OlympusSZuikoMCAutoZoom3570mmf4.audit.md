# OLYMPUS S ZUIKO MC AUTO-ZOOM 35-70mm f/4 — audit log

## Package audit of the 36 mm station file (historical)

The package delivered two fixed-station files (36 mm and 68.5 mm) with identical audits; this is the 36 mm one as
delivered. Both were folded into this single zoom file on 2026-11-10 (section below).

### Current endpoint audit: 36

Exact whole US4452512A E1 fixed endpoint; one family, two variants. Baseline9d121be76e14bc5098256ee78cd0a7545a1acf11,2253commits. Source R/d/n/v, midpoint d10 stop and independently derived infinity plane unchanged throughout; only inferred caps changed in prior stages. Source equality and final data hash are in final_verification.json. No zoom object, variable gaps, finite motion, camera plate or validation override. (Closed 2026-11-10: rebuilt as one zoom file with d6 and the back focus varying.)

### Current status

Current H3 data bytes are unchanged from verified private v3. Complete current-H3 reference geometric/diffraction matrix at axis/source intermediate/source edge/physical corner passes numerical convergence through40lp/mm, max128, original design plane. Default geometry, positive iris clearance, zero trim and officialF4 census remain exact-H3 evidence. These are scoped checks, not independent/integration/delivery approval. (Closed 2026-11-10: superseded by the deployment validation and zoom rebuild.) Assumed-d and missing measured partial dispersion limit spectral claims.

### Historical evidence, not current failures

H0 inferred rear caps made teleF4.134604 rim-limited. V2 rear-cap corrections restoredF4 but wideS1 clipped the31deg chief and physical corner was unavailable; tele geometric physical corner reached only10lp/mm at64-grid. V3 diagnosed S1 and staged common front-cap changes; all current source optics/planes/stops were retained. V3 wide source/corner and tele geometric corner converged at128, while its missing tele source/diffraction and axis cells were explicitly left pending. The present additive matrix fills those missing cells on exactH3 data. All previous archives/failures remain immutable for comparison, not substituted as current passes.

### Field semantics and pending gates

Physical cornerhypot(18,12)=21.633307652784mm, not rounded21.65mm taxonomy. Source edge31deg wide/17.5deg tele is distinct. Full actual angles, heights, ray counts, grids and per-record provenance are in complete_current_H3_matrix.json and CURRENT_HANDOFF.txt. Residual vignetting is retained. No full corpus/build/install, independent review or broad spectral qualification; NOT ready or delivered. (Closed 2026-11-10: pending gates replaced by the section below.)

## 2026-11-10 — Zoom rebuild and wording pass

**Source re-read.** US 4,452,512 (local copy, 27 pages, image only; read from page renders). Front page: granted
5 June 1984; inventor Hiroshi Takase; assignee Olympus Optical Co., Ltd.; application 505,891 filed 20 June 1983 as a
continuation of Ser. No. 187,448 (15 September 1980); Japanese priority 54-119830, 18 September 1979. Embodiment 1 is
on page 22 (column 4) with its focal lengths and conditional values at the top of page 23; claim 1 (page 24) repeats
the same numerical data. All 14 radii, 13 thicknesses (d6 at both printed states), 7 index/Abbe pairs and the stated
f = 36.0–68.5 mm agree with the file; there are no aspheres and no cemented surfaces. Figs. 2A–2C plot F/4 at the
wide, intermediate and tele settings, with half-fields 31°, 22.6° and 17.5°, for the d and g lines. The printed
"s/fw = 0.897" is r5/fw. The patent prints no back focus, no stop and no intermediate gaps.

**What changed.** The two station files became one zoom file: key `olympus-s-zuiko-mc-auto-zoom-35-70mm-f4`, name
"OLYMPUS S ZUIKO MC AUTO-ZOOM 35-70mm f/4", subtitle "US 4,452,512, Example 1 — probable production correlation",
specs "7 ELEMENTS / 7 GROUPS", "DESIGN f = 36–68.5 mm", "DESIGN F/4", "ALL SPHERICAL". Patent number in the corpus
form "US 4,452,512". Design focal lengths [36, 68.5]; marketing [35, 70]; F/4; 0.75 m marketing minimum focus;
`closeFocusM` 1e15 with an infinity-only focus description. Glass labels: S-BSM18 (L1, L2), S-TIM28 (L3), K-LaK11
(L5), S-TIH6 (L6) and S-TIM27 (L7) match the printed pairs within 0.03 in νd; L4 (1.65160 / 58.7) stays unmatched
(nearest J-LAK7R 58.62, S-LAL7 58.55). Element roles, header comment and analysis rewritten in plain terms; group
brackets G1 (surfaces 1–6) and G2 (7–14) added. The package-specific index notes were dropped; the d-line reading
rests on the d and g aberration curves.

**Zoom stations.** Eleven stations: 36 and 68.5 mm are the printed rows; 39, 42, 45, 48, 51, 54.5, 58, 61.5 and
65 mm are solved, paraxial and d-line, from the printed table without changing any radius, thickness or glass. Rule:
d6 = −39.538 + 2746.03 / f mm, from fM = −64.742 mm, fU = 42.415 mm and the group principal planes (H′ of G1
14.955 mm ahead of S6, H of G2 2.255 mm behind S7); BF = 45.998 + 0.65514 (f − 36) mm, the paraxial back focus,
which is exactly linear in f because the slope is −fU / fM. Total length is least (112.89 mm) at f = 64.74 mm, where G2
works at unit magnification; G1 reverses there by 0.14 mm. A 100-step and a 2000-step scan of the file's own gap
table give at most 0.039 mm defocus (near 37.5 mm, between the first two stations); the two printed rows alone would
give 3.40 mm.

**First order.** Printed vs model: f = 36.0 / 35.9999 mm and 68.5 / 68.5004 mm; fM −64.742 / −64.742; fU 42.415 /
42.415; f1–f7 −86.381, −59.207, 80.074, 51.948, 44.207, —, 42.524 / −86.38, −59.21, 80.07, 51.95, 44.21, −20.44, 42.52
(f6 is not printed); f45 24.238 / 24.238. All sixteen conditional values reproduce to the printed digits except
r12/fw, 0.578 printed and 0.577 from the table. Back focus 45.998 / 67.290 mm (derived); first vertex to image
127.93 / 113.03 mm. F/4 at all 11 stations; iris radius 6.75 to 9.10 mm (stop rule, middle of d10). Engine half-field
31.09° at 36 mm; field coverage reaches the 21.65 mm corner at every station (32.1° at 36 mm, 17.4° at 68.5 mm).

**Rims.** Fig. 1 (front page; drawn with d6 ≈ 10.7 mm, an intermediate setting) was measured at 72 dpi with
22.8 px/mm from the front-group vertex span (20.939 mm) and 23.4 px/mm from the rear-group span (24.249 mm). Readings
against the file: L1 front 21.4 (20.5), L1 rear 17.9 at a flat land (20.5), L2 front 19.8 and rear 17.3 (17.3),
L3 17.9 (16), L4 12.3 (10.4), L5 11.3 (10.1), L6 9.9 (10), L7 11.0 (10). Following the least-change rule, only the
surfaces a stated ray needs moved: a real F/4 marginal ray at 68.5 mm (entrance-pupil radius 8.56 mm, real stop
height 9.71 mm against the paraxial 9.10 mm) reaches 11.02, 10.97, 10.71 and 10.34 mm on S7–S10, so L4 rose from
10.4 to 11.1 mm and L5 from 10.1 to 10.8 mm, square rims kept. The engine's aperture census was already iris-limited
before the raise and still is. Effect: corner light at 68.5 mm 82.5 % to 88.4 %, at 51 mm 94.2 % to 97.6 %, 36 mm
unchanged; half-fields unchanged. Not changed: the L1 land (S2 below about 19.4 mm shrinks the engine's 36 mm
half-field from 31.09°, to 28.35° at 17.3 mm), and the larger figure readings for L2, L3 and L7, which no ray needs.

**Checks after the edits.** Surface validator: OK. Aperture census: 11 of 11 stations within 3 % of f/4, no rim
limit. Image circle: 0 undersized. Field coverage: corner reached at all 11 stations. Real-ray clearance at
Y = 21.63 mm: no axial clip and no blocked chief ray at any station. Prettier: clean.

**Maker diagram.** Olympus data sheet "S Zuiko MC Auto-Zoom 1:4 f=35~70mm" (imprint 0381; Zuikography OM archive):
7 elements in 7 groups, 63°–34°, F4–22, 0.75 m, 71 mm long at 70 mm, 55 mm filter, 380 g. Its section (drawn at
the 70 mm setting) shows L1–L3 ahead of the zoom space, L4 and L5 nearly touching, the diaphragm, then L6 and L7,
matching Fig. 1 and the model; its rim proportions put L1 near 21 mm and L4/L5 near 11.5–13 mm. The model's first
vertex at 68.5 mm sits 67.0 mm ahead of the 46 mm OM flange. No special-dispersion or aspherical element is claimed.

Open: which of the six embodiments went into production is not established; all share the construction. L4's glass
has no exact catalog row.

L4 glass relabelled from the Abbe fallback to J-LAK7R (Hikari 1.65160 / 58.62; Δnd 0, Δνd −0.08 against the printed
1.6516 / 58.7), the closest exact catalog row (S-LAL7 is Δνd −0.15, N-LAK7 −0.18). The other six labels and all eight
Pentax 28–50 labels resolve to rows within Δnd 3e-6 and Δνd 0.08.

## 2026-11-10 — Semi-diameter pass against the patent figure

**Source.** US 4,452,512, front page, Fig. 1 (the patent's only section; the sheet-1 copy is the same drawing), page
image at its native 72 dpi. It is drawn with d6 about 10.7 mm, an intermediate setting. The optical axis is tilted
1.82° on the scan, so heights were read from the tilted axis as half the top-to-bottom distance between stroke centres.
Ray-fan ends were read from the coma plots of Figs. 2A–2C (36 mm: 31° and 22.8°; intermediate: 22.6° and 16.2°;
68.5 mm: 17.5° and 12.4°).

**Scale.** Along the axis: 22.8 px/mm from the front-group vertex span (r1–r6, 478 px for 20.939 mm) and 23.4 px/mm
from the rear-group span (r7–r14, 567.5 px for 24.249 mm). Across it: 23.2 px/mm from the point where L1's rear face
meets L2's front face, 419 px off the axis in the figure and 18.07 mm by the prescription. Circle fits to the drawn
arcs give 24.0 (r2), 22.3 (r12) and 24.9 px/mm (r14), with no aspect stretch the fits can detect (best aspect
1.00–1.05). Front-group heights use 23.2 px/mm and rear-group heights 23.4 px/mm; the readings carry about ±3 %.

**Fan ends against the model.** Fan extent as a fraction of the real F/4 pupil at the stop (patent / baseline / final):
31° {0.60, 0.65} / {1.00, 0.54 at S5} / {1.00, 0.63 at S1}; 22.8° {0.94, 1.0} / {1.0, 1.0} / {1.0, 1.0}; 22.6°
{0.59, 1.0} / {0.88 at S14, 0.93 at S7} / {0.88, 1.0}; 16.2° {0.80, 1.0} / {1.0, 1.0} / {1.0, 1.0}; 17.5° {0.57, 0.90}
/ {0.79 at S14, 0.83 at S7} / {0.79, 0.90 at S7}; 12.4° {0.70, 0.94} / {0.92, 0.89} / {0.92, 0.95}. One side of every
patent fan is reproduced by S1 = 20.5 and S7 = 11.8 mm. The other side closes at 0.57–0.94 (0.57–0.65 at each setting's corner); a rim of
about 8.4 mm at S14 reproduces all six of those ends within 0.04 (0.64, 0.90, 0.60, 0.78, 0.56, 0.69), but Fig. 1 draws
L7 at 10.9 mm, so figure and fans disagree there and L7 is not changed.

| Surface | Baseline | Fig. 1 | Final | Evidence |
| --- | ---: | ---: | ---: | --- |
| S1 | 20.5 | 21.0 | 20.5 | within noise; S1 sets the patent's 31° fan end (0.63 against 0.60/0.65) |
| S2 | 20.5 | cap 18.1, land to 21.0 | 19.4, land to 20.5 | cap as low as the 36 mm half-field allows; land as drawn |
| S3 | 17.3 | 19.3 | 17.9 | most allowed beside S2 (gapSagFrac 0.98, faces 0.19 mm apart) |
| S4 | 17.3 | cap 17.6, land to 19.3 | 17.3, land to 17.9 | cap within noise; land squares L2's edge as drawn |
| S5, S6 | 16.0 | 17.4 | 17.4 | figure; fans need at least 16.4 for the 31° end |
| S7, S8 | 11.1 | 12.2 | 11.8 | fans close at 0.90 (17.5°) and 0.95 (12.4°) at 68.5 mm and stay open at 22.6°; figure within 3 % |
| S9, S10 | 10.8 | 11.2 | 10.8 | within noise; above the real F/4 marginal ray (10.71 / 10.34) |
| S11, S12 | 10.0 | 9.8 | 10.0 | within noise |
| S13, S14 | 10.0 | 10.9 | 10.0 | figure (larger) and fans (about 8.4) disagree |

**L1 and L2.** As drawn, L1's rear cap ends at 18.1 mm on L2's front face and L2's front face runs to 19.3 mm. That
set (S2 18.0 with a land to 20.5, S3 19.3, S4 17.3 with a land to 19.3, gapSagFrac 1.00) validates and costs no light,
but the engine's paraxial half-field drops from 31.09°, 32.38°, 33.68°, 35.00°, 36.32°, 37.64° and 39.20° to 29.31°,
30.61°, 31.93°, 33.26°, 34.61°, 35.98° and 37.60° at 36–54.5 mm (the real chief ray meets S2 at only 16.05 mm, and
field coverage still reaches the corner). A half-field shrink is not allowed in this pass, so S2 stops at 19.4 mm,
the lowest cap that keeps every station's half-field, and S3 at 17.9 mm, the most the S2–S3 gap then admits. Ron's
call whether the drawn set is worth the shorter traced field at the wide end.

**Clearance and light.** Surface validator: OK. Aperture census: 11 of 11 stations at f/4.00, no rim limit. Field
coverage: corner reached at all 11 stations. Image circle: 0 undersized. Engine half-field (31.09° to 36.19°) and
f/4 at every station unchanged. Real-ray trace at Y = 21.63 mm: no axial clip and no blocked chief ray. The S2 cut costs
0.0 points at every field of every station; all other changes are raises. Corner illumination, baseline → final:
36 mm 75.7 → 78.9 %, 39 mm 92.5 → 98.2 %, 42–48 mm unchanged (99.4, 99.0, 98.6 %), 51 mm 97.6 → 98.1 %, 54.5 mm 96.4 →
97.3 %, 58 mm 94.7 → 96.7 %, 61.5 mm 92.9 → 95.8 %, 65 mm 90.9 → 94.5 %, 68.5 mm 88.4 → 92.9 %; largest gain 8.3 points
(36 mm, 29.2°).

Open: the patent's fans show a vignetting limit of about 8.4 mm at L7's rear face that Fig. 1 does not draw, so the
model's corners are brighter than the patent's. Open: the drawn L1/L2 rims (above) wait on the half-field decision.
