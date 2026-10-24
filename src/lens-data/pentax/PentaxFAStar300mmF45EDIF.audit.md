# smc PENTAX-FA* 300mm F4.5 ED [IF]: audit log

The source package carried no audit log; this file starts at deployment validation.

## Deployment validation (2026-10-24 UTC)

- Source: US 4,812,026 (Mitsunori Iima, Asahi Kogaku Kogyo K.K.), filed 1988-02-08, granted 1989-03-14, JP
  priority 62-26787 (1987-02-06). Example 2, table in col. 4–5 (PDF pp. 7–8), repeated in claim 6 (PDF pp. 8–9);
  section FIG. 5 (PDF p. 4, sheet 3). Local copy: `patents/US4812026.pdf` (9 pages, single US publication).
- Transcription: 16 radii, 15 thicknesses, 9 N/ν pairs, printed fB and the two β = −1/6 focus rows checked against the
  page images; zero mismatches. d1 reads 5.01 (OCR "5.0") and N5 reads 1.58144 (OCR "1.58.44"). Claim 6 prints
  ν1 = 8.6, an obvious misprint of the 81.6 in the example table. No aspheric surfaces.
- Scale: uniform ×3 of the f = 100 normalized table. EFL 300.0635 mm (printed 100 × 3); Gaussian BFD 61.0595 mm
  against printed fB 61.02 mm (−0.0395 mm, kept as printed). Full-pupil LSA 0.046 / −0.003 / −0.038 / −0.038 mm at
  pupil 1 / 0.85 / 0.7 / 0.5: design residual, no misprint signature (`lsa.mjs`).
- Conditions recomputed from the table: |r5/r6| = 6.777, (n6 − n5)/r10·f = −1.892, r14/f = 0.142, r15/f = 0.210,
  f7,8/f = −60.61/300.06 = −0.202. All match the printed Example 2 values.
- Embodiment choice: Examples 1 and 2 are both 9/7 with 1.49700/81.6 at L1, L2 and L4. Example 2 fits the maker's
  drawing better: r2 666.381 vs 138.854, r8 −259.715 vs −82.282, r12 −5892.525 vs −236.315 (all near-flat in the
  drawing) and d4 4.40 vs 8.06 (compact front cell).
- Product match: Ricoh's discontinued 35 mm lens page (index35_others.html), FA★300mm F4.5 ED[IF]: 9 elements /
  7 groups, three ED elements, inner focus, 8.2°, 2.0 m, 0.17×, 67 mm filter, 72.5 × 160 mm, 935 g, minimum F32.
  The construction image (`t-fa300f45.jpg`) shows ED (blue) at elements 1, 2 and 4, a cemented pair before the iris,
  a small cemented pair after it and a rear meniscus. Element-height ratios in that image (L2/L1 0.90, L3/L1 0.74,
  L4/L1 0.68) agree with FIG. 5 (0.91, 0.72, 0.68). The front-vertex-to-flange length of 158.5 mm matches the 160 mm
  barrel; the printed β = −1/6 state solves to 2.063 m object-to-image (rated 2.0 m, 0.17×). Photozone and Lenstip
  also list 9/7 for the FA★. Association is strong; the factory prescription is not confirmed. The earlier F★ 300/4.5
  probably shares the formula (not documented here).
- Values not printed by the patent: clear radii (below), the iris position (midpoint of infinity d11, 2.64 + 2.64 mm,
  fixed with groups 1–2), and the intermediate focus law (paraxial conjugate law between the printed infinity and
  inner-focus β = −1/6 rows). The whole-group rear-focus row (d11 6.05, fB 16.05 native) is not modelled.

## 2026-10-24 — Semi-diameter pass against FIG. 5

The source package sized rims from ray envelopes, not the figure. That made L2 (39.99 mm) larger than L1 (38.16 mm)
and L3 (33.48 mm) much too tall, contradicting both FIG. 5 and the Ricoh drawing. The rims were re-measured.

FIG. 5 was rendered at 300 dpi (2320 × 3408 px). Vertex crossings measured 10–20 px from the axis: r1 x = 675,
r16 x = 1709. The 1034 px span over 142.92 mm gives 7.235 px/mm (0.1382 mm/px). Checks: d1 108 px = 14.9 mm
(15.03), d8 130 px = 18.0 mm (17.85), d14 312 px = 43.1 mm (43.11). Heights are half the distance between the
centres of the top and bottom flat rim lines; the axis drifts by about 2 px across the figure.

| Surfaces | Element | Before (mm) | FIG. 5 (mm) | After (mm) | Note |
| --- | --- | --- | --- | --- | --- |
| r1, r2 | L1 | 38.162 | 36.7 | 36.7 | edge 1.54 mm (drawn ≈ 2 mm) |
| r3, r4 | L2 | 39.988 | 33.5 | 33.5 | edge 3.9 mm |
| r5 | L3 front | 33.484 | 26.75 | 26.75 | flat top of the blank |
| r6 | L3 rear | 33.484 | ≈24.6 (chamfer end) | 24.6 | drawn chamfer; renderer joins with a straight slope |
| r7, r8 | L4 | 25.148 | 24.95 | 24.6 | 25.15 left a 0.25 mm edge; 24.6 gives 0.80 mm (drawn ≈ 0.8) |
| r9, r10 | L5 / L6 | 17.289 | 19.0 | 18.5 | L5 edge 0.62 mm (19.0 would be 0.03 mm) |
| r11 | L6 rear | 17.289 | ≈16.9 (chamfer) | 17.29 | unchanged |
| r12–r14 | L7 / L8 | 12.094 | 14.24 | 14.2 | edges 1.83 / 7.18 mm |
| r15, r16 | L9 | 18.344 | 20.25 | 20.25 | edge 3.03 mm (drawn ≈ 2.9) |

Clearance (`clearap.mjs`, Y = 21.6 mm) at infinity and at the close keyframe: no axial clip at f/4.5 and no blocked
chief ray. The tightest axial margins were r1 (33.34 / 36.7; superseded below), r7 (21.53 / 24.6) and r11 (12.92 / 17.29). The 4.1° corner
bundle is cut 30–48 % on one side by L1–L5, following the drawn rims. Air gaps at the rim stay ≥ 2.0 mm (r6→r7 2.04 mm).
The engine's tracing half-field rises from 6.23° to 6.73°; EFL, FOPEN 4.5, stop radius 12.374 mm and BFD are
unchanged. `audit:surface`: OK, no validation errors. `audit:image-circle`: 0 undersized.

## 2026-10-24 — Strings, glass labels and focus sampling

- Name `PENTAX SMC FA* 300mm f/4.5 ED [IF]` (folder style uses `*`); subtitle, specs, header, focus description and
  all nine element types/roles rewritten. `catalog.focalLengthMm.design` set to 300.06. Float artefacts of the ×3
  scaling (e.g. 55.617000000000004) were written as their exact decimals; no prescription value changed.
- Glass labels (all previously `Unmatched`), each resolving to an exact coordinate match (`glasscheck.mjs`):
  L1/L2/L4 FCD1 (HOYA) / S-FPL51 class ED (Δνd 0.01), `apd: "inferred"` with note as in the A★ 200 Macro; L3 S-LAH52
  (OHARA) (Δνd 0.03); L5 S-TIL25 (OHARA) / E-FL5 class (0.05); L6/L8 TAF1 (HOYA) / S-LAH66 class (0.02); L7 S-LAH60
  (OHARA) / NBFD10 class (−0.04); L9 LLF4 (SUMITA) class (0.08). The patent states d-line indices (col. 4).
- Focus: 41 keyframes thinned to 11 (every fourth sample of the same paraxial law, coordinates rounded to 4 decimals).
  The printed close state stays the last keyframe (published [10], conjugate 1859.512 mm from the first vertex).
  `probe.mjs` values at the retained keyframes are identical to the corresponding original samples.
- Analysis rewritten to LENS_ANALYSIS_SPEC: patent conditions (1)–(9) with printed values, element roles, glass table,
  focus spacing table for both patent branches, rim basis and limitations; package-process references removed.

## 2026-10-24 — Front rims limited by the production barrel

FIG. 5's L1 height (36.7 mm, Ø73.4) cannot fit the production lens. Ricoh's catalog entry gives a 67 mm filter and a
72.5 × 160 mm barrel, and Lenstip also lists 67 mm. Physical evidence outranks the schematic, so L1 must sit inside the
67 mm filter thread.

| Surfaces | Element | Before (mm) | After (mm) | Basis |
| --- | --- | --- | --- | --- |
| r1, r2 | L1 | 36.7 | 33.5 | Ø67.0, at the filter thread; f/4.5 axial beam 33.34 at r1, 32.36 at r2 |
| r3, r4 | L2 | 33.5 | 30.5 | FIG. 5 L2/L1 = 0.91 kept; axial 29.70 / 27.93 |

33.4 mm would also clear the axial beam (0.06 mm margin); 33.5 was taken for a 0.16 mm margin within the Ø67 limit.
Edges are now L1 4.09 mm and L2 4.70 mm. Order L1 > L2 > L3 > L4 (33.5 > 30.5 > 26.75 > 24.6) is kept. L3/L1 becomes
0.80 against FIG. 5's 0.73; L3–L9 were not changed. `clearap.mjs` at infinity and close focus: no axial clip, no
blocked chief ray. The corner bundle is now cut 46–55 % on one side at L1/L2 (previously 38–48 %), which is real
mechanical vignetting. `audit:aperture`: within 3 % of f/4.5, no rim/trace/iris failures. `audit:surface` OK,
`audit:image-circle` 0 undersized. EFL, f-number, stop radius and BFD are unchanged.

Open:

- L1 has only 0.16 mm over the f/4.5 axial beam; the production front cell may trim extreme marginal rays slightly.
- The iris position is a midpoint assumption; the maker drawing places the iris between the cemented pairs but gives
  no dimension.
- The intermediate focus law, and the choice of the pair-only branch over the whole-group branch, are inferences
  (the retail [IF] name fits either).
- Visibility and screenshot review are left to the coordinator.
