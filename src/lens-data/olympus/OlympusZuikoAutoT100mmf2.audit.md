# OLYMPUS ZUIKO AUTO-T 100mm f/2 — source audit

Package authoring note (kept as history; the "hidden" and "no integration" status is closed: the lens was integrated
and made visible on 2026-11-11, see below).

Inherited: whole E5 numerical-table pixel review, original source custody, live dedup and independent production-association admission. Fresh: original first-page metadata visual review; Fig1 rim picks before any rays; exact R/d/n/V authoring; strict TypeScript0diagnostics; native construction/geometry passes, no overrides; focused26-ray counts retained. Figure caps and midpoint stop are hypotheses, not factory dimensions. No caps changed after tests. Estimated conventionald dispersion cannot establish anomalous-partial-dispersion performance. No different-embodiment floating-focus law. No full integration/viewer acceptance, package or delivery.

## Deployment validation (2026-11-11)

- Source: US 4,435,049 A (Google Patents PDF), Embodiment 5, kept as `patents/US4435049A.pdf`. 13 R, 12 d and 7 n/ν
  pairs checked against the page image and claim 8: an exact ×100 scaling of the f = 1 print, no mismatches. The
  example's stated conditions reproduce (f1234/f 1.857, fB123/r6 0.869, f3/f 2.636, f56/f 9.462).
- Product: OM Zuiko Auto-T 100mm f/2, 7 elements / 6 groups, 0.7 m (OM-4 brochure). The MIR construction drawing
  (three positive menisci, a negative meniscus, a long gap, a cemented biconcave/biconvex pair and a biconvex singlet)
  matches Fig. 1. The association holds at family level: all five embodiments are 7/6 with similar track and back
  focus, so the choice of Embodiment 5 is unconfirmed. Floating focus is unverified and does not affect the static model.
- Integration fixes: `catalog.lensMounts` ["olympus-om"], `catalog.closeFocusM` 0.7 m.
- Open for the cleanup pass (closed 2026-11-11, next section): public wording; the analysis line about not borrowing
  another embodiment's floating focus (no embodiment prints one).

## 2026-11-11 — Cleanup and wording pass

Data file. Header comment rewritten as a house box comment with the same facts (source, ×100 scale, d-line reading,
paraxial back gap, midpoint stop, Fig. 1 rims, infinity-only focus). `subtitle` "US4435049 Embodiment5 qualified
representative; inferred stop, caps and spectral reference" → "US 4,435,049 A, Embodiment 5 — seven-element F/2
telephoto associated with the production lens". `specs` (three process lines) → "7 ELEMENTS / 6 GROUPS", "DESIGN f =
100 mm", "DESIGN F/2", "ALL SPHERICAL", following `OlympusEZuikoAutoT200mmf4`. `catalog.focalLengthMm.design` stays
100, the scaled patent f, as in the neighbouring OM Zuiko files (traced EFL 99.995 mm). Element `type` from the signs of
R: L1–L3 Positive Meniscus, L4 Negative Meniscus, L5 Biconcave Negative, L6 and L7 Biconvex Positive. Added `role`,
paraxial in-air `focalLengthMm`, and `cemented: "C1"` on L5/L6. `focus.closeFocusM` written as 1e15 (same value);
`focus.description` "NO_INTERNAL_RECONSTRUCTION: static infinity-only sentinel. Retail.7m not a motion law." → plain
infinity-only text naming the 0.7 m production minimum and the unverified floating group.

Glass relabels (exact rows, Δ = catalog − patent): L1 S-PHM51 (OHARA) Δnd +0.000001, Δνd +0.001; L2 FCD1 (HOYA)
Δnd 0, Δνd +0.01 (ties with S-FPL51 at −0.05; FCD1 is the closer row and the name of the period); L3 S-BSM36 (OHARA)
Δnd −0.000005, Δνd −0.03; L4 S-TIH14 (OHARA) Δnd +0.00002, Δνd +0.02; L5 PBL25 (OHARA) Δnd +0.00004, Δνd −0.05
(lead-glass period row, ties with S-TIL25); L6 S-LAM58 (OHARA) Δnd 0, Δνd −0.02; L7 S-LAL14 (OHARA) Δnd −0.000003,
Δνd +0.03. Each label resolves with `trylabel.mjs`. No catalog nC/nF/ng were present. L2 `apd: "patent"`: the patent
names the second component an anomalous-dispersion glass (condition 3 and col. 3); it prints no θgF, so L2 traces on
the FCD1 catalog curve. No Olympus table marks an ED element; MIR's "ED glass in the front elements" is cited in the
analysis only.

Analysis. Removed the pixel-span log, the ray-count paragraph, the TypeScript and acceptance-gate passage, "hidden
draft", "qualified representative", "sentinel" and run-together numbers. Replaced the "does not borrow floating-focus
movement" sentence: the embodiment choice is unconfirmed (all five embodiments are 7/6) and floating focus is
unverified. Added the OM-4 brochure lens-table data and the MIR sectional drawing and dating, merged the two element
tables into one with shapes, glass and focal lengths, and added the patent's conditions per element.

Engine numbers before and after (identical): EFL 99.99457053751037, FOPEN 2, halfField 12, stop radius
13.0432148998115, BFD 44.9090, TL 115.9990. audit:surface OK; audit:aperture within 3 % of the stated f-number, no rim
limit.

Open:
- Semi-diameters read about 3–4 % under Fig. 1 (L1 about 26.4 mm against 25.5 mm at the 71.09 mm track scale); rims
  unchanged in this pass. Closed 2026-11-11: a stroke-centre measurement puts every edge within 2 % of the file (next
  section).
- Floating focus: MIR describes floating rear elements; the OM-4 brochure table does not mark the 100mm F2 with its
  close-distance correction symbol. No close-range state is modelled.
- Embodiment choice: no Olympus source selects Embodiment 5 over Embodiments 1–4.

## 2026-11-11 — Semi-diameter pass against the patent figure

Source: `patents/US4435049A.pdf`, page 2 (sheet 1), Fig. 1, a 300 ppi CCITT raster measured at native resolution. It is
one drawing for all five embodiments. Axis row 1523.5. Vertex crossings (r1 at x 935 to r13 at x 1635) give 700 px for
the 71.09 mm Embodiment 5 track, 9.847 px/mm; a least-squares fit over all thirteen vertices gives 9.97 px/mm for
Embodiment 5 (rms 4.9 px). The drawing's spacings fit Embodiment 3 best (rms 3.0 px, against 3.9 for Embodiment 4 and
6.9–7.4 for Embodiments 1–2), so it was probably drawn from Embodiment 3. L1's front sag, 55–60 px at its 254 px edge
against 53 px predicted for R1 at this scale, shows the drawing is to scale vertically as well.

Element edges (mean of upper and lower outline stroke centres, at 9.847 px/mm), against the file:

| Element | Figure px | Figure mm | File `sd` | Ratio |
| --- | --- | --- | --- | --- |
| L1 | 253.5 | 25.7 | 25.5 | 1.01 |
| L2 | 232.5 | 23.6 | 23.4 | 1.01 |
| L3 | 213.5 | 21.7 | 21.4 | 1.01 |
| L4 | 168.5 | 17.1 | 17.0 | 1.01 |
| L5/L6 | 163.8 | 16.6 | 16.3 | 1.02 |
| L7 | 183 | 18.6 | 18.5 | 1.00 |

All edges are within 2 % (within 1 % at the least-squares scale), inside measurement noise, so every `sd` is kept. The
step order (L1 > L2 > L3 > L4, doublet < L7) matches. L1, L2, the doublet and L7 are drawn square-cut and keep one
value per element.

Lands. Fig. 1 ends three concave caps short of the element edge with a stroke square to the axis. Each is authored as
an inferred rim cut at q × `sd`, where q = cap end / edge on the figure (one native pixel moves q by about ±0.01):

| Surface | q upper / lower | q used | Depth (mm) | Cut radius (mm) | `sd` | Axial max | Beam limit |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6 (L3 rear) | 0.864 / 0.841 | 0.85 | 3.96 | 18.21 | 21.4 | 16.94 | a 17.6 mm cut passes |
| 8 (L4 rear) | 0.822 / 0.887 | 0.85 | 5.07 | 14.50 | 17.0 | 13.87 | a 14.0 mm cut passes |
| 9 (L5 front) | 0.864 / 0.888 | 0.88 | 2.97 | 14.30 | 16.3 | 12.03 | beams reach 13.81 mm at 6.6° |

Every cut clears the traced wide-open beams by the validator margin, so none costs light. Engine vignetting at
0/2/4/6/8/10/12° is 100/96.3/91.2/85.7/77.9/66.3/53.5 % before and after, and rimcost reports 0.0 points of change at
every field. Stop-plane clearance rises from 2.965 to 5.280 mm for S8 and from 6.439 to 7.380 mm for S9. No other concave face
carries a land: S2 and S4 run square into their edges.

After the change: audit:surface OK; audit:aperture within 3 % of the stated f-number, no rim, trace, iris or failed
row; audit:image-circle 0 undersized; field coverage unchanged (declared 12°, corner 12.2°). clearap at Y 21.63 shows no
CLIPS-AXIAL or BLOCKS-CHIEF. The engine values are unchanged: EFL 99.99457, F/2.000, half-field 12°, tracing half-field
19.12°, stop radius 13.043 mm. The live page draws the three lands as Fig. 1 does.

Open: corner side-vignetting at S1 (53 % of the unvignetted 12° bundle) comes from the figure-matched front rims and is
kept.
