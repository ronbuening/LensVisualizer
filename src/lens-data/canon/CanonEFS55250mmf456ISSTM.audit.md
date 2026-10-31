# Audit Log - Canon EF-S 55-250mm f/4-5.6 IS STM

Patent: US 2014/0211029 A1, Numerical Embodiment 3

## 2026-06-25 - Canon folder patent audit

### Source note

- The exact patent PDF was missing from the local `patents/` tree at the start of this pass. The Google Patents PDF link was fetched to `patents/US20140211029A1.pdf` and validated with `pdfinfo` before use.

### Phase 1 - Glass corrections

- Rechecked the local PDF, data file, and analysis sidecar.
- No glass label changes were needed. The HOYA NBFD15 row and the OHARA-equivalent labels match the patent nd/vd values.
- High-index rows L22, L23, L31, L33, and L41 remain correctly represented by nd values and dense-flint / high-index labels.

### Phase 2 - Retained-information audit

- Confirmed the patent `Effective diameter` column is present for Numerical Embodiment 3. The stored `sd` values are half of those printed full diameters.
- Retained the documented d28 value for the 135.16 mm column because it is internally consistent with the variable-gap row and paraxial BFD check.

### Phase 3 - Spectral / metadata enrichment

| Element | Field             | Before  | After      | Justification                                                                |
| ------- | ----------------- | ------- | ---------- | ---------------------------------------------------------------------------- |
| L32     | `apd` / `apdNote` | omitted | `inferred` | S-FPL51 UD fluorophosphate element matching Canon's one-UD production count. |

- Retained L22 `apd: "patent"` and `dPgF: 0.025` from the patent theta_gF condition.

## 2026-10-30 — Original shape-and-glass review

Exact local original: `patents/US20140211029A1.pdf`, Numerical Embodiment 3,
PDF p. 27 / printed p. 10; Fig. 5 / PDF p. 6 / sheet 5; Figs. 6A/B / PDF p. 7;
Table 2 and Claim 4 / PDF p. 32 / printed p. 15. Paragraphs 0019–0021/0039 on
PDF p. 19 explicitly map the figures; Fig. 7 belongs to Embodiment 4. All 28
surface rows, 22 fixed distances, six five-column gap schedules, 27 non-stop
clear diameters and fifteen nd/νd pairs were checked directly. No publication
was substituted. Source R/d, all clear caps, stop placement and controls are unchanged.
The front page confirms filing 2014-01-21, publication 2014-07-31, Canon Kabushiki
Kaisha (normalized Canon Inc.) and Tetsuichirou Okumura (normalized Tetsuichiro).

### Native figure, every element and all interfaces

The original is a 2560×3300 raster at 300 ppi. Rotation and native crops preserve
pixels; enlargements supply no new resolution. Fig. 5 has an approximately 1450 px
active vertex span for 115.32 mm, about 12.6 px/mm. Practical rim uncertainty is
±0.8 mm, ±1.0 mm at the broken-ink front blanks. Brackets, leaders, stop/image-plane
lines and focus/zoom arrows are excluded from optical-rim measurements.

All fifteen elements, concave ends and three cemented interfaces were inspected.
There is no separately prescribed hybrid, cement medium, source filter or rear plate.
The following free-end shoulders are conservatively anchored to existing optical
cap heights; they are not claimed as precise subpixel full-blank measurements:

| Surface | Retained clear sd | Adopted outer sd |
| ------- | ----------------: | ---------------: |
| 2       |            20.375 |            20.52 |
| 5       |            18.995 |           19.215 |
| 8       |              8.73 |             8.86 |
| 9       |              8.73 |             8.89 |
| 15      |              9.66 |             9.83 |
| 22      |              8.31 |             8.62 |

All values are millimeters. All other ends keep their printed clear caps. Source
flat free-end shoulders support this topology; the drawing's larger flat bonded
blanks remain a retained outline limitation. Replacing effective clear diameters
with full blank heights or fabricating opaque bonded lands/equal-height blocks is
rejected. No disconnected wings, resin or inferred concave cuts are introduced.
The S18/19 air gap retains 0.069274 mm minimum physical separation across the
common clear cap; S20/21 keeps its source 0.10 mm air gap. Actual generated SVGs
were compared with the native Fig. 5 crop at matched axial scale; every element
stays connected and no renderer trimming hides a surface problem.

L21 changes type label from negative meniscus to biconcave, following R6<0/R7>0.
L23 changes plano-concave to biconcave while preserving finite R10=+66857.597 mm.
These are descriptive corrections, not changes to the source curvatures.

### Every glass medium and published spectral evidence

All fifteen source nd/νd pairs remain. The table notation and paragraph 0076,
PDF p. 22, identify d/C/F/g definitions; paragraph 0043, PDF p. 19, prints d=587.56,
g=435.8 and F=486.1 nm. No individual numerical nC/nF/ng values or supplier identities
are supplied. All fifteen existing coordinate-compatible curves remain selected
and now carry explicit spectral-proxy / historical supplier, melt and chemistry
qualifications. No unsupported per-lens override was present; zero are removed.

Table 2 row 3 prints νd=22.8, θgF=0.6307 and ΔPgF=+0.025. Paragraphs 0076–0079
and Claim 4 govern the positive lens in L2. Only L22 is positive in the selected
L2, so the mapping is unique: retain its genuine `apd: "patent"` and `dPgF: 0.025`.
The normal-line computation from rounded θ/ν gives +0.0252496, a 0.0002496
difference within the unchanged 0.0003 retention tolerance. No catalog value is
promoted into source evidence. L32 retains inferred APD only: its compatible
S-FPL51 curve and low-dispersion coordinate do not prove fluorophosphate chemistry
or the production UD position. The June 25 audit remains dated history; its
unqualified chemistry and BF rationale are superseded by this original check.

### Source contradictions, sixth column and runtime boundaries

Two source discrepancies are recorded as unresolved: BF=57.35 versus literal
d28=57.95 in the 135.16 mm column (PDF p. 27), and “fifth lens unit L3” in
paragraph 0047 / PDF p. 20 versus L5 in paragraph 0088 / PDF p. 23 and Fig. 5.
The model retains literal d28=57.95; computed BF=57.896315 is not proof of an erratum.

The sixth column prints f=57.92 / F/4.18, zero half-field and image height, track 154.99,
and d5/d10/d16/d22/d26/d28 = 6.97/24.67/19.72/4.06/11.90/39.06 mm. No object
distance is stated, and no dedicated full-field figure applies. It is separately
checked rather than called a published 0.85 m focus state: calculated EFL 57.895699,
BF 39.018696, fifteen finite connected closed paths, zero trim, passing surface and
aperture checks, and 97/97 stop-aimed collimated axial pupil rays. A separate
paraxial input-radius grid passes 73/clips 24 at the iris; the launch conventions
are distinct. No finite-object or full-field claim follows from this column.

The five full-field stations remain source focal/F-number values. Their derived
iris radii are 9.342583/9.288702/8.918339/8.732041/8.448858 mm, with paraxial
F/# 4.16/4.44/5.18/5.58/5.88 and real collimated iris F/# 4.235739/4.522865/
5.276387/5.683194/5.981009. The printed stop effective diameter 19.04 is not a
proven station-specific physical schedule; the existing derived rule is retained.

Surface/image-circle checks pass; aperture and ≥99% format-corner chief coverage
pass 5/5 source stations and 65/65 sampled zooms. The diagnostic 65-station clone
matches all current positions and iris radii exactly. All 1365 zoom/focus renders
have fifteen finite closed connected paths and zero hidden trim. The repeated
focus checks establish a no-op control, not finite-object focusing; 0.85 m is
production metadata only. IS remains centered.

The independent 65-position collimated pupil census samples 18,915 rays across axis,
half and full 14.175 mm format corner. All axial pupils and chiefs clear; 3956
ordinary off-axis marginal clips and 746 first-surface misses remain. Exact sphere
intersection classifies every miss beyond S1's retained clear cap. No unexplained
first/interior miss, failed seed or unaimed ray remains. The source image height
is 13.66 mm; chief coverage does not imply full-pupil transmission.

The five numerical stations are source evidence; linear intervals remain
illustrative. Worst sampled BF displacement is +1.859044 mm at zoom 0.640625
(EFL 171.921882, BF 62.964669, image gap 61.105625 mm). Sampled clearance/contour
results do not validate a production cam, finite focusing, moved IS or historical
material identity. Required local narrow checks and explicit candidate formatting/
diff checks pass; the coordinator owns the full repository gates and commit.
