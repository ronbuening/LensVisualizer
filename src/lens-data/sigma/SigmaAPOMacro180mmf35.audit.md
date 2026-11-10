# Build audit

Status: source-qualified infinity representative. Native and reference-MTF qualifications are recorded below; integration outcomes belong to the accompanying package validation manifest. Closed 2026-11-10: superseded by the deployment validation and cleanup sections below.

- Pinned baseline 9d121be76e14bc5098256ee78cd0a7545a1acf11, 2253 commits. Isolated repository; no commits, pushes, publication or delivered-package edits.
- Exact patent numbers and first-radius fingerprints absent in baseline lens source search. Broader completed-package absence remains bounded search evidence.
- Literal whole source retained; no hidden retuning, invented glass, plate, finite motion or factory identity.
- H0 static rim failures preserved; current inferred rims pass bounded geometry without override.
- Source-row mapping and deterministic generator retained separately.
- Required layout and infinity-sentinel focus fields present. (Closed 2026-11-10: the infinity placeholder is now the house 1e15 m.)
- Native geometry, zero trim, iris clearance, official aperture census, sampled rays and spectral-support assessment completed. Reference MTF completed with retained source/format distinctions and bounded convergence limitations; integration outcomes are recorded separately.
- Non-optical initial identity-schema failure preserved; corrected lowercase key and spaced patent number. No source optical values changed.

- Primary-pixel aperture confirmation: physical PDF page 4/printed page 3, E1 row F explicitly gives infinity 3.6069 (D(0)=∞); paragraph 0019 defines F as F-number. Finite F4.7197/5.8594 also literal. Runtime/design 3.6069 versus retail marketing 3.5 is a faithful distinction, not a model defect or derived substitution.

- Reference MTF findings are recorded in the companion analysis and optical-quality evidence. Max grid 128, no source-plane shift, no finite runtime states, no source retuning. (Closed 2026-11-10: the MTF paragraphs were removed from the analysis in the cleanup pass.)

## Deployment validation (2026-11-10)

Independent check against a 300 dpi render of PDF p. 4: 25 rows plus 4 variable gaps × 3 states, D(0), BF and F; no
mismatches. EFL 178.6538, F 3.6069, BF 54.1414 and the printed conditional values reproduce exactly. Example 1 is the only
13/10 example; Sigma's published 13/10 construction with two SLD elements (the patent's two 1.497/81.6 elements) and 1:1 at
46 cm make the association strong. The staged 2010 Sigma catalogue does not list this lens and is not evidence.

Applied: patent number to house form `JP 2001-033704 A`; `catalog.lensMounts` (Canon EF, Nikon F, Pentax K, Sony A, Sigma
SA); `catalog.closeFocusM.marketing` 0.46.

Open: the patent prints β −0.505 and −1.002 states (D9, D14, D15, D20) that the model omits; with the image plane fixed the
1:1 row focuses at 460.8 mm object-to-image (matches 0.46 m); L13 (sd 13.5) cuts 39–43 % of the corner bundle, but a wider
L13 needs a land on S23/S24; every glass pair matches a HOYA row exactly yet is labelled `Unmatched`; public wording and
package-process prose need a cleanup pass. (Glass labels and wording closed 2026-11-10 in the cleanup pass below; the L13
item closed 2026-11-10 in the semi-diameter pass below.)

## 2026-11-10 — Cleanup and wording pass

Data file. The header comment was rewritten in plain terms and keeps every fact: example and pages, unscaled rows, the
STO/FS21 rows, the inferred rims and FS21 radius, the omitted finite states and their printed inconsistencies. It also
records the patent's L1–L4 group naming against the element names L1–L13. Other changes:

- `subtitle` → `JP 2001-033704 A, Example 1 — construction-based production correlation`.
- `specs` → 13 ELEMENTS / 10 GROUPS, DESIGN f = 178.65 mm, DESIGN F/3.61, ALL SPHERICAL.
- `catalog.focalLengthMm.design` 178.65381528674706 → 178.6538, the patent's printed f, following the Sigma folder
  convention (for example 174.86, the printed f, on the APO MACRO 180mm f/5.6 UC).
- `focus.closeFocusM` 1e9 → 1e15 (placeholder); `focus.description` is now plain text naming the moving groups (G2
  toward the image, about 31.2 mm; G3 toward the object, about 16.0 mm; G1 and G4 fixed) and the unmodelled printed
  states.
- `aperture.fStops` extended to 22 and 32, with `maxFNumber` 32 and `blades` 9, from the Sigma February 2008 catalogue
  specification table (p. 14).
- `groups` G1–G4 (S1–S9, S10–S14, S16–S20, S22–S25) and `doublets` C1–C3 (S5–S7, S12–S14, S18–S20) were added.
- Cemented ids D1–D3 → C1–C3. Element labels → "Element N", with short roles. Every `indexReferenceNote` was dropped:
  ¶0019 prints ND/Vd, and every pair matches a d-line catalog row.
- `apd: "inferred"` with an `apdNote` on L2 and L4 (1.49700/81.6). The Sigma catalogue drawing (p. 11) marks the second
  and fourth elements as SLD.

Glass relabels, from `Unmatched (literal source n/v; catalog identity unproved)`; Δ is catalog minus patent:

- L1, L5: FC5 (HOYA), Δnd 0, Δνd +0.05.
- L2, L4: FCD1, Δnd 0, Δνd +0.01.
- L3: NBFD10, Δnd 0, Δνd +0.04.
- L6, L7: TAF1, Δnd 0, Δνd +0.03.
- L8: FDS90, Δnd 0, Δνd −0.02.
- L9, L10: BACD14, Δnd 0, Δνd 0.00.
- L11: E-FD10, Δnd 0, Δνd +0.02. FD10 has no catalog row.
- L12, L13: BSC7, Δnd 0, Δνd 0.00.

HOYA was chosen over tied Ohara rows for consistency with the neighbouring Sigma 180mm f/5.6 file. Every label resolves
in the repo catalog, and no `nC`/`nF`/`ng` were present.

Analysis. The process sections and vocabulary were removed: the "Model Qualification and Verification" section,
reference-MTF census and grid paragraphs, pinned-baseline precedents naming other files, sentinel wording, and the
repeated boilerplate in each element section. The claim that the PDF lacks a bibliographic header is corrected: the PAJ
front page carries it. The 2008 Sigma catalogue citation was re-checked (p. 11, 10 groups / 13 elements, 46 cm, SLD
drawing; p. 14, 13.7°, nine blades, F32) and kept. The staged 2010 catalogue does not list the lens and is not cited. New
content: the 2000 EX IF HSM predecessor sharing the 13/10 construction, a printed focus table, a Conditional Expressions
section, and "Model Scope and Limitations" replacing the verification heading. The added sources are DPReview and
Reviewed.com (the 18 May 2005 release), Imaging Resource and CameraReviews.com.

Engine numbers, identical before and after: EFL 178.65381528674706, FOPEN 3.6069, halfField 8.598094998146246, stop
semi-diameter 14.669118370750633, BFD 54.1414. Only `closeFocusM` (1e9 → 1e15) and the maximum f-stop (16 → 32) changed.
The surface audit prints OK, and the aperture audit reports no rim limit.

Open:

- The patent prints −0.5050× and −1.0021× spacings (D9, D14, D15, D20) that the model does not carry. With the image
  plane held at the printed BF they focus objects 391.9 and 240.1 mm from S1 (460.8 mm object to image at 1:1), and they
  passed the surface audit in a scratch build.
- L13 (sd 13.5) clips 39–43 % of one side of the full-aperture corner bundle at S24/S25, against the 16.6–16.9 mm it
  needs. Fig. 1 and Sigma's drawing show L12 and L13 at similar heights, but S23 and S24 meet near a 15.1 mm radius
  across the 2.54 mm gap, so a wider L13 needs a land on S23 or S24. (Closed 2026-11-10: L13 raised to 15.0 mm in the
  semi-diameter pass below; a land cannot gain light here.)

## 2026-11-10 — Semi-diameter pass against the patent figure

Source: JP 2001-033704 A, Fig. 1 (Example 1, infinity), PDF p. 7, a 1-bit CCITT raster at native 200 dpi.

Scale. Along the axis, the vertex crossings put S1 at x = 423.5 px and S25 at x = 1071.5 px: 648 px for 166.5209 mm, or
0.2570 mm/px. Two more spans agree within 0.2 %: S1–S22 gives 0.2572 and S4–S20 gives 0.2574. Across the axis, which
sits at y = 1332, the evidence is weaker:

- Arc fits of the drawn S11 (R 55.6) give 0.245–0.250 mm/px.
- The stop line (±59 px) against the engine stop radius 14.67 mm gives 0.249.
- S13 and S19 give 0.23, but those interfaces are drawn flatter than their radii.

The rims below therefore use 0.25 mm/px, with a ±5 % band (0.24–0.257). Each element is read on both sides of the axis,
less 1 px for line width.

| Element / surface | Model sd before | Figure (0.25 mm/px) | Before / figure | After |
|---|---|---|---|---|
| L1, S1–S2 | 32 | 32.0 | 1.00 | 32 |
| L2, S3–S4 | 31 | 30.6 | 1.01 | 31 |
| C1, S5–S7 | 26 | 26.3 | 0.99 | 26 |
| L5, S8–S9 | 23 | 22.3 | 1.03 | 23 |
| L6, S10–S11 | 20 | 19.1 | 1.05 | 20 |
| C2, S12–S14 | 18 | 16.8 | 1.07 | 18 |
| L9 and C3, S16–S20 | 20 | 19.5 | 1.03 | 20 |
| FS21 (fixed stop line, x 990–991, −65 to +67 px) | 20 | 16.5 | 1.21 | 16.5 |
| L12, S22–S23 | 18 | 16.9 | 1.07 | 18 |
| L13, S24–S25 | 13.5 | 17.5 | 0.77 | 15 |

L1–L12 are kept: each lies within the 5–8 % noise band, and within 5 % at the 0.257 horizontal scale.

FS21 drops to the drawn half-height. It does not touch the axial beam (marginal 12.24 mm there). Leave-one-out against
the package rims: restoring 20 mm would win back 1.7 points at 5.7° and 0.2 at 6.9°, under the 3-point limit, so the
cut stays.

L13 is drawn square-cut at about 17.5 mm, and taller than L12 by 2–3 px on both sides. The corner bundle needs 16.6 mm
at S24 and 16.9 mm at S25. But S23 (R +179.48) and S24 (R −61.36) bend toward each other across a 2.5415 mm gap: their
sags sum to 2.49 mm at 15.0 mm and to the full gap near 15.15 mm. A cut or land cannot help, for these reasons:

- An inferred cut on S24 or S23 must clear every traced beam, so it cannot sit inside the beam it would have to admit.
- A `rimExtensionSd` on S24 would run into S23 above about 15.6 mm, and the gap rule stops it at 15.0 mm.
- Cutting L12 instead would cost more light than it gains.

Both faces of L13 therefore rise together to 15.0 mm. At the default `gapSagFrac` 0.90 the limit is 14.3 mm, and 0.98 is
the smallest two-decimal value that admits 15.0; the faces keep 0.05 mm of clearance there. The drawn step order (L13
taller than L12) cannot be reproduced without cutting L12 below its beam, so it stays reversed in the model.

Clearance after the change:

- The surface audit is OK. The aperture audit reports no rim limit.
- The image-circle audit shows 0 undersized, and field coverage is 100 % (6.9° to 21.65 mm, clear).
- The real-ray trace at Y = 21.63 mm shows no axial clip or chief-ray block. Side vignetting of the full corner bundle
  is 19 % at FS21, 20 % at S24 and 24 % at S25, where S24/S25 had 39–43 % before.
- Engine half-field 8.598°, F 3.6069 and stop radius 14.669 mm are unchanged.

Corner illumination, wide open at infinity (engine vignetting curve), before → after:

| Field | Before | After |
|---|---|---|
| 0–4.6° | unchanged | unchanged |
| 5.7° | 61.0 % | 66.9 % |
| 6.9° | 37.4 % | 48.7 % |

Open: L13 stays about 2.5 mm under the drawn height and below L12, because Fig. 1 draws the L12/L13 pair overlapping,
which the printed radii and gap rule out. A production lens would need a land or a different edge profile there, but the
patent does not show one.

## 2026-11-10 — Second review: diagram, labels and movement

A fresh look at the live page (the coordinator's shots, a new shot from the worktree's dev server, and the inspector for
all 13 elements). It was compared with Fig. 1 (PDF p. 7, native 200 dpi), the Example 1 table (PDF p. 4), ¶0019, the
PAJ front page, and the Sigma 2008 catalogue drawing rendered in the cleanup pass. No change was needed. The data and
analysis files are unchanged.

Rims. Each element was re-read on both sides of the local axis line, less 1 px for line width. The scan is rotated by
about 0.4°: the axis runs from y 1329.5 at x 405 to y 1334.5 at x 1100. At 0.25 mm/px the readings are:

| Element | Figure | Model | Model / figure |
|---|---|---|---|
| L1 | 32.0 | 32 | 1.00 |
| L2 | 30.6 | 31 | 1.01 |
| C1 | 26.0 | 26 | 1.00 |
| L5 | 22.3 | 23 | 1.03 |
| L6 | 19.1 | 20 | 1.05 |
| C2 | 16.8 | 18 | 1.07 |
| L9, C3 | 19.5 | 20 | 1.03 |
| FS21 | 16.3 | 16.5 | 1.01 |
| L12 | 16.9 | 18 | 1.07 |
| L13 | 17.5 | 15 | 0.86 |

These agree with the semi-diameter pass to 0.3 mm. The arcs cannot tighten the vertical scale. S1 is drawn with about
half its true sag, and fits on S6 give 0.226–0.250 mm/px depending on height. At the isotropic 0.257 mm/px every figure
value rises 3 %, and no element crosses the 10 % line. Every element the figure draws square-cut (L1, L2, C1, L5, L6, C2,
L9, C3, L12, L13) is square in the model. The drawn height order holds everywhere except L12/L13.

L13 and `gapSagFrac`. At 15.0 mm, S23 and S24 sag 0.628 and 1.862 mm into their 2.5415 mm gap, 0.9795 of it. The
surface audit refuses 15.0 mm at 0.97 (2.49 mm against 2.465 mm allowed) and refuses 15.05 mm at 0.98. So 15.0 mm and
0.98 are the largest rim and the smallest fraction that go together. Fig. 1 itself draws the two rims overlapping by
2–3 px, which is where the printed radii put them at the drawn 17–17.5 mm. A rim extension on S24 buys no light and would
meet S23 just past 15 mm, so none is added. The Open line above stands.

FS21. Row 21 (固定絞り) sits at D 15.1580, fixed relative to G4. Its drawn line (x 990–991, y 1267 to about 1399, where
a leader joins it) spans about 65 px each side: 16.3 mm at 0.25 mm/px, 16.7 mm at 0.257. The 16.5 mm radius stays. The
real-ray trace at Y 21.63 mm shows FS21 trimming 19 % of one side of the corner bundle and clearing the axial beam
(marginal ray 12.24 mm).

Lands and cuts. `rimcost.mjs --loo` against the rims before the semi-diameter pass puts the one cut, FS21 (20 → 16.5), at 1.7 points at
5.7°, inside the 3-point budget, so it is kept as slight. With L13 raised, the whole lens loses 0.0 points against
baseline at every field, and gains 5.9 points at 5.7° and 11.3 at 6.9°. There are no lands.

The page draws no line for FS21, because the diagram draws flat air surfaces only for the STO. The trace still uses it.

Labels and tags:

- Element types agree with the radius signs for all 13 elements, the roles are true, and every inspector shows a focal
  length.
- Groups G1 (S1–S9), G2 (S10–S14), G3 (S16–S20) and G4 (S22–S25) bracket the same surfaces as the patent's L1–L4 brackets
  under Fig. 1. The G names avoid a clash with the element names L1–L13, as the header says.
- Doublets C1–C3 match the three cemented interfaces. The STO sits between G2 and G3 (¶0019). There are no aspheres, and
  none is marked.
- `apd: "inferred"` on L2 and L4 is right. The patent text designates no glass. The Sigma drawing shades the second
  element and the rear element of the first cemented pair. Both inspectors show APD (INFERRED) and FCD1 equivalent
  (HOYA).

Movement. The model is static, `focus.description` says so, and the slider reads "Not modeled". The description's
directions and amounts match the Example 1 table:

- D9 9.9681 → 41.1292: G2 moves 31.16 mm toward the image.
- D15 23.1829 → 7.1902 and D20 5.5193 → 21.5611: G3 moves 15.99 mm toward the object.
- G1 and G4 stay fixed.

The infinity and closest-focus group brackets under Fig. 1 show the same shifts.

Glass and colour. All 13 labels resolve to exact HOYA rows (|Δnd| ≤ 3.2e-6, |Δνd| ≤ 0.05). There are no unmatched
glasses and no nd-only media. Figs. 2–4 plot spherical aberration with a single line, plus astigmatism and distortion,
so no per-line colour comparison is possible. The patent prints no line indices or partial dispersions.

Front page and assignee. The PAJ front page gives SIGMA CORP and inventors Ogawa Shinji and Koyama Takehisa. The
application is 11-202390, filed 16 July 1999 and published 9 February 2001. All of this matches the file, and "Sigma
Corporation" is the spelling the other Sigma files use.

The engine numbers are unchanged: EFL 178.654 mm, F 3.6069, half-field 8.598° and stop radius 14.669 mm. The surface
audit is OK, the aperture audit finds no rim limit, the image-circle audit finds 0 undersized, and field coverage is
100 %.
