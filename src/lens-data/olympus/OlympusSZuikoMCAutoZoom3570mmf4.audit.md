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
