# Audit Log - Ricoh GXR A12 18.3mm f/2.5

Patent: JP 2012-003015 A

## 2026-06-23 - Local patent table and SD review

- Local patent source: `patents/JP2012003015A.pdf` (untracked local file), Example 3.
- Rendered the patent pages containing Table 5 and Table 6 because text extraction dropped much of the tabular data. The table verifies f = 18.3 mm, Fno = 2.56, the surface radii/spacings, nd/vd values, aspherical coefficients, and floating-focus gaps used by the data file.
- Verified the focus/back-focus convention: patent cover glass is 2.5 mm at nd = 1.5168, so the data file correctly folds its 1.648 mm air-equivalent path into the last surface gap.

| Element | Patent nd/vd | Before | After | Disposition |
|---|---|---|---|---|
| L6 | 1.6727 / 32.2 | `S-TIF6 / N-SF5` | `E-FD5 (HOYA) / S-TIF6 or N-SF5 class (673322)` | Exact local Hoya six-digit class match for the patent row; keeps the older S-TIF6/N-SF5 family context. |

- The patent does not publish glass names or Pg,F values. No APD or dPgF values were added, and no element is treated as APD from this source.
- The patent does not publish semi-diameters. Existing SDs remain estimates. They were checked against the figure and prescription: large front aspheric apertures, reduced internal doublet apertures, a moderate stop, and rear asphere sizes are coherent and preserve the relative proportions needed for rendering.
- Companion analysis was updated so the L5/L6 cemented-pair discussion uses the corrected E-FD5 / S-TIF6 or N-SF5 class label.

## 2026-09-23 — First-added diagram audit, lens 92

Source: local `patents/JP2012003015A.pdf` (JP 2012-003015 A, 26 pp.). Pages used: 1 (bibliography, inventor, abstract
figure), 4–11 (claims, conditions, ¶0024 reference distance, ¶0051 image diagonal, ¶0056–0072 embodiment
descriptions), 12–13 (Example 1: ¶0089 sag formula, Table 1, ¶0094–0095 aspheres, Table 2, ¶0098 conditions), 15–16
(Example 3: Tables 5–6 and aspheres, re-read to confirm the previous transcription), 23 (Figs. 1–2). The tables are
images; every number was read off the rendered page. Production data: Ricoh's GR LENS A12 28mm F2.5 instruction
manual (specifications page) and Ricoh's GXR unit product page.

### Embodiment

- The file stored Example 3 (8 elements / 6 groups, 3 aspherical surfaces). Its transcription was correct: all rows,
  aspheres and D1/D2 values matched Tables 5–6, and EFL was 18.28 mm. Example 3 does not match the production lens,
  however. Ricoh's manual gives "9 elements in 6 groups (2 aspherical lens elements with 2 surfaces)". Example 1 is the
  only one of the seven examples with that construction (¶0059: L1, L2, L3+L4 | stop | L5+L6, L7+L8, L9; aspheres on
  surfaces 3 and 15 only). It is also the patent's representative figure (【選択図】図1). The file was re-based on
  Example 1. Key, file names, mount and format are unchanged.
- Remaining conflict: Ricoh also cites a "special low-dispersion lens". No 9-element example has one; Example 1's
  lowest-dispersion glass is νd 58.6. Only the 10-element Examples 4/5 use a νd 81.5 glass. The production glass set
  may therefore differ from Example 1.

### Before / after

| Item | Before | After | Evidence |
|---|---|---|---|
| Embodiment | Example 3 (8/6, 3 asph) | Example 1 (9/6, 2 asph) | Production construction; ¶0059; representative figure |
| Prescription | Ex. 3, 15 surfaces | Ex. 1 Table 1, 16 surfaces (plate 17–18 excluded) | Table 1 read on page 12; EFL 18.238 (patent 18.3); all seven condition values reproduce ¶0098 (0.324, −0.565, 3.248, 1.438, 0.566, 1.373, −0.440) |
| Aspheres | 1A, 2A, 15A | 3A (K 15.511 from k 16.511), 15A (K −1 from k 0), C4–C18 | ¶0094–0095; ¶0089 puts k in the (1+K) slot. Traced distortion at 38° is −1.54 %, matching Fig. 2 (≈ −1.6 %) |
| Last gap / back focus | D2 + t/n only (15.91 / 17.57; paraxial image 0.477 mm behind the stored plane in Ex. 3) | D2 + t/n + 0.447 mm = 16.196 / 17.876 | Table 1 gives "—" for plate-to-image. D2 + 2.5/1.5168 left the image 0.447 mm out of focus. The added distance is derived from the paraxial image (defocus now 0.0004 mm) |
| Focus description / prose | "Group 1 extends 2.18 mm, Group 2 1.66 mm"; "Group 1 moves farther" | Group 2 +1.68 mm, Group 1 +1.07 mm toward object (derived from Table 2) | ΔD2 = +1.68 at the fixed plate; ΔD1 = −0.61, so the groups close up. The old numbers and direction were wrong for Example 3 as well (G2 1.66, G1 1.14) |
| Gap labels | STO "D1", 15A "BF" | STO "D1", 16 "D2" | Patent names |
| closeFocusM | 0.2 (object distance) | 0.248 (object-to-image) | Tabulated gaps focus 198 mm in front of surface 1 (patent 200 mm, rounding), TL 49.9 mm; −0.092× (calculated); Ricoh "approx. 20 cm (from lens)" |
| nominalFno / series / maxFstop | 2.5, series from 2.5 to 22, maxFstop default 16 (f/22 unreachable) | 2.56, [2.56 … 22], maxFstop 22 | Patent Fno 2.56 (¶0091); production f/2.5–f/22 |
| Semi-diameters | Paraxial estimates for Ex. 3 | Measured on Fig. 1 at 400 dpi (16.8 px/mm from vertex crossings; lens spacings to ±0.15 mm): 9.4/7.4, 7.5/7.5, 6.7/6.7/6.5, STO 4.5, 7.6/7.6/7.6, 9.1/9.1/9.1, 9.9/9.9 | L3 front 7.0 → 6.7: at the figure's 7.0 mm rim it would cross L2 inside the 1.1 mm air space (Fig. 1 draws them touching). STO = traced f/2.56 iris 4.485 (figure ≈ 4.7) |
| gapSagFrac | default 0.90 | 0.98 | Figure rims at L1–L2 (90.3 % of the gap, 0.33 mm clearance) and L6–L7 (97.6 %, 0.07 mm clearance) |
| Glass labels | Ex. 3 set; L8 "S-LAH65V" (1.804/46.6 vs patent 1.8014/45.4) and L1 "N-BK7" (1.5168) did not match | S-LAL7, 806404 code (no catalog match), S-TIM3, S-LAH55V ×3, S-TIL27, S-TIH53, L-LAH85V | glasscheck: every labelled glass within Δnd ≤ 4e-5, Δνd ≤ 0.05; no patent APD statement, all `apd: false` |
| Element types / fl | Ex. 3 | L1 neg. meniscus, L2 biconvex (asph), L3/L6/L7 biconcave, L4/L5/L8 biconvex, L9 pos. meniscus convex to image (asph); thick-lens fl | R signs; element fl within 0.05 mm of thick-lens values |
| Metadata | 8/6, f 18.28, "3 ASPHERICAL SURFACES", 2ω 75.6° | 9/6, f 18.24, 2 aspherical surfaces, 2ω 76.0° (patent ω 38.0°) | Table 1; Fig. 2 |
| Analysis | Example 3 walk-through; wrong focus direction; "N-BK7/S-LAH65V" glass names | Rewritten for Example 1 with production evidence, focus table, back-focus note, asphere and condition tables | — |

Retained: patent number, inventor (窪田 高士, Takashi Kubota, sole inventor on the front page), applicant, year 2012,
`lensMounts: ["fixed-lens-camera"]` (the GXR unit is a sealed lens-plus-sensor module; the taxonomy has no GXR id),
`imageFormat: "aps-c"` (23.6 × 15.7 mm sensor; patent diagonal 28.6 mm).

### Checks on the result

- Paraxial: EFL 18.238 mm at infinity and 18.229 mm at close focus. Last-gap defocus is +0.0004 mm. The engine
  derives EFL 18.238, FOPEN 2.56 and stop radius 4.485 mm.
- Real-ray trace at f/2.56, Y = 14.3 mm: ω = 38.5° reaches the corner and nothing clips the axial beam or blocks the
  chief ray. The corner bundle is vignetted 2–3 % at L5 only. At close focus, ω = 37.3°.
- Surface validator passes with no errors. The image-circle check reports nothing undersized. Surface 3A's
  departure from the base sphere is within +21/−13 µm to the 7.5 mm rim. Surface 15A reaches −1.26 mm departure and a
  42° slope at 9.9 mm, below turnover.
- Glass check: eight labels resolve with matching nd/νd. L2 falls back to the Abbe model.
- Live view (headless render, local dev server): the infinity diagram matches the Fig. 1 silhouette. At close focus
  the D1/D2 readouts are 3.85/17.88. The group-movement overlay shows both groups advancing toward the object, with
  1.68 mm maximum travel. Production still shows the old Example 3 diagram. Off-axis rays were not checked
  (they need a click).

### Open limitations

- Semi-diameters come from the patent figure, not a table. The figure also draws the stop opening larger than the
  f/2.56 beam needs.
- The plate-to-image distance (0.447 mm) is derived. Only two focus states are published, so the intermediate states
  are interpolated.
- L2's glass (1.8061/40.4) has no catalog equivalent, and the aspherical elements' molded construction is inferred.
- The production special low-dispersion element does not appear in any 9/6 example.
