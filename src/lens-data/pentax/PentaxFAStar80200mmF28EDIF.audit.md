# PENTAX SMC FA* 80-200mm f/2.8 ED [IF]: audit log

The source package carried no audit log; this file starts at deployment validation.

## 2026-10-29 — Deployment validation and wording pass

- Source: US 5,572,276 A (Jun Hirakawa, Asahi Kogaku Kogyo K.K.), filed 1994-11-10, granted 1996-11-05, JP priority
  5-283617 (1993-11-12). First Embodiment, Table 1, col. 5–6 (PDF p. 19); Fig. 1 (PDF pp. 1–2); Table 6 (PDF p. 21).
  Local copy: `patents/US5572276.pdf` (22 pages, scanned; no text layer).
- Transcription: all 29 surfaces (R, d, nd, νd), the three variable gaps D8 / D15 / D20 in three states and
  fs = 47.47 were checked against the page image; zero mismatches. Cemented interfaces S12, S19, S24; no aspheric
  surfaces. The model's STO row splits the printed d25 = 7.88 into 4.40 + 3.48.
- First order, patent vs model: f 81.63 / 135.00 / 196.00 vs EFL 81.631 / 135.025 / 196.014 mm; F 2.8 vs f/2.8 at
  every station; fs 47.47 kept literally against Gaussian BFD 47.485 / 47.489 / 47.486 mm; front vertex to image
  233.52 mm in all states (D8 + D15 + D20 = 43.04). Printed ω 15.2 / 9.0 / 6.2°. Table 6 f1 = 104.57 and
  f1-1 = −849.26 (calculated 104.569 and −849.24), f1/f1-1 = −0.123; G1-2 mean νd 88.3 (condition ν1-2 > 75).
- On-axis LSA (`lsa.mjs`, d-line, full pupil): −0.037 / +0.161 / −0.225 mm at 81.63 / 135 / 196 mm, the same
  sign pattern as Figs. 2–4. The patent prints no close-focus gaps (Figs. 5–6 are 1.5 m plots only), so the model
  stays infinity-only; 1.4 m is Pentax's rated minimum focus.
- Product match: Ricoh's discontinued 35 mm lens page lists 16 elements / 13 groups, four ED elements, inner zoom and
  inner focus, 1.4 m, minimum f/32, K mount. Table 1 is 16 / 13 with high-Abbe glass at L1, L3, L4 and L12, the four
  positions the maker's construction drawing (`tz-faz80-200f28.jpg`) marks ED; the drawing also puts the iris right
  behind the G4 cemented doublet, as Fig. 1 does. Embodiment 5 is also 16 / 13 but has a 1.69680 / 55.5 front element
  and three high-Abbe elements; Embodiment 2 is 16 / 14 and Embodiments 3–4 are 17 / 15. Embodiment 1 is kept as a
  qualified production correlation. L1/L4/L12 (FCD1) and L3 (S-FPL53) carry `apd: "inferred"`.
- Values not printed by the patent: iris 4.40 mm behind S25 (Fig. 1 measures about 4.3–4.5 mm; the package read
  4.368 mm and also traced 3.7–5.1 mm), radius from f/2.8 (14.866 mm); rims from Fig. 1 with tenth-mm beam floors.
  S11–S13 stays at 18.2 mm (0.73 mm air left at the S10–S11 rim). The package's alternatives, an S11 floor of
  19.167 mm (99.94 % of the 7.01 mm gap in sag) and a square 19.581 mm S11–S13 rim (104.6 %, overlap), were not used.
- The package claimed a tele axial pupil of 85.95 % of nominal area (about f/3.020). Validation found this to be a
  measurement artefact: the engine stop already limits the real axial beam at every station, and the tele beam that
  fills it clears the 18.2 mm rims. The claim is removed from header, specs and analysis; no replacement figure.
- Package records not re-run and dropped from the public text: the intermediate zoom cam uses 33 controls (straight
  interpolation of the three printed rows added up to 2.832 mm BFD error; 9 / 17 / 33 controls cut the added error
  to 0.225 / 0.060 / 0.0153 mm); reference-wavelength MTF40 on axis 0.069 / 0.514 / 0.418 at the printed plane
  (0.831 / 0.668 / 0.668 after −0.087 / +0.045 / −0.072 mm best-axial shifts), measured before the glass names
  resolved; 651 of 8,274 sampled launch rays over 42 reference fields found no intersection: 650 meet the S1 sphere
  at 37.9–61.7 mm, outside its 35.2 mm rim, and one meets S28 at 22.22 mm, outside its 18.4 mm rim.
- Fields changed in this pass: data header rewritten in plain terms (all facts kept; process notes and the f/3.020
  claim removed); `subtitle` to "US 5,572,276 A, Embodiment 1 — qualified production correlation"; `specs` to five
  standard lines (16 / 13, design f, F/2.8, all spherical, 4 ED); element labels to "Element N" with a `role` each;
  the four `apdNote` texts reworded; focus description rewritten. Analysis: patent number and spacing fixed,
  identification rewritten as a numbered list, group powers and zoom motion stated, "unmatched" glass lines replaced
  by the catalog equivalents plus a glass table, process sections (cam residual screens, ray-sample counts, MTF
  diagnostics, outstanding-gate scope, file hash) removed. No optical value changed; `built.mjs` and `probe.mjs`
  output is identical before and after.
- Diagram labels: cemented brackets D1–D3 renamed C1–C3 so they do not read like the gap labels D8/D15/D20;
  the first group label shortened to "G1-1" so it no longer runs into "G1-2 (focus)".
- Open: production identity is not confirmed beyond construction matching. Open: no close-focus state (no printed
  finite spacings).

## 2026-10-29 — Semi-diameter pass against the patent figure

- Source: `patents/US5572276.pdf`, Fig. 1 on PDF p. 2 (Sheet 1 of 15), the First Embodiment drawn at the wide
  state; its aberration plots (Figs. 2a–2e) are labelled 1:2.8 and W = 15.2°. The page is a 72 ppi bitonal scan
  (2320 × 3408 px), measured at native resolution. The drawn D8 / D15 / D20 read about 2.4 / 31.2 / 7.4 mm against
  the printed wide values 2.81 / 32.51 / 7.72 mm. The scan is rotated about 0.48°, so each rim was read as half the
  full top-to-bottom height rather than from an assumed axis row.
- Scale: least squares over 24 vertex crossings (S1–S29, S11 and S12 resolved separately) gives 0.1612 mm/px with
  residuals of 5 px or less; the S1→S29 span gives 0.1600 and the S1→S16 span 0.1613 mm/px. Drawn lines are about
  4–5 px thick, so outer-ink heights were reduced by 2.25 px to the line centre. Reading uncertainty is about
  ±0.3 mm per rim.
- Figure readings against stored values (line centre, mm). The f/2.8 column is the real axial marginal ray at the
  nominal f-number, maximum over the 33 zoom stations; the stop-limited column is the same ray at f/3.03, about the
  beam the engine's 14.866 mm stop passes.

| Surfaces | Element | Stored sd | Fig. 1 | Fig./stored | f/2.8 axial | Stop-limited axial | Decision |
|---|---|---|---|---|---|---|---|
| S1 / S2 | L1 | 35.2 | 34.9 | 0.99 | 35.00 / 34.67 | 32.35 / 31.99 | keep |
| S3 / S4 | L2 | 35.2 | 34.9 | 0.99 | 34.50 / 33.52 | 31.85 / 31.02 | keep |
| S5 / S6 | L3 | 34.3 | 33.3 | 0.97 | 34.21 / 33.94 | 31.64 / 31.30 | keep; at the f/2.8 floor |
| S7 / S8 | L4 | 32.8 | 31.8 | 0.97 | 32.80 / 32.29 | 30.40 / 29.74 | keep; at the f/2.8 floor |
| S9 / S10 | L5 | 20.9 | 20.0 | 0.96 | 20.82 / 19.17 | 19.21 / 17.84 | keep; S9 at the f/2.8 floor |
| S11–S13 | L6 / L7 | 18.2 | 18.9 | 1.04 | 19.17 / 19.57 / 19.58 | 17.80 / 18.12 / 18.14 | keep; gap-limited |
| S14 / S15 | L8 | 20.3 | 19.9 | 0.98 | 19.58 / 20.21 | 18.16 / 18.69 | keep |
| S16 / S17 | L9 | 22.0 | 21.5 | 0.98 | 21.02 / 21.18 | 19.39 / 19.58 | keep |
| S18–S20 | L10 / L11 | 21.7 | 21.4 | 0.99 | 21.33 / 21.27 / 21.31 | 19.70 / 19.60 / 19.64 | keep |
| S21 / S22 | L12 | 20.7 | 20.4 | 0.99 | 20.60 / 20.30 | 19.03 / 18.62 | keep |
| S23–S25 | L13 / L14 | 18.9 | 18.5 | 0.98 | 18.80 / 18.22 / 17.30 | 17.46 / 16.74 / 15.90 | keep |
| S26 / S27 | L15 | 14.1 | 13.7 | 0.97 | 14.09 / 12.54 | 12.92 / 11.62 | keep |
| S28 / S29 | L16 | 18.4 | 18.5 | 1.00 | 9.11 / 8.63 | 8.41 / 7.96 | keep; corner chief ray 13.57 / 13.89 |

- Result: no semi-diameter changed. The median figure/stored ratio is 0.98 and every element lies within 6 % of it
  (the G2 doublet, +6 %, is the largest departure), inside the drawing's noise. Where the drawing is slightly smaller (L3, L4, L5,
  L15), the stored rim sits on the f/2.8 axial ray and the ray floor governs.
- G2 doublet S11–S13: Fig. 1 draws it about 18.9 mm (19.2 mm to the outer ink), 4 % above the stored 18.2 mm, with
  its S11 rim meeting the S10 rim of L5 and its S13 rim meeting the S14 rim of L8. The nominal f/2.8 ray would need
  19.17–19.58 mm, but the S10–S11 air closes at 19.17 mm, so no square rim can clear that beam; the stop-limited
  beam needs 18.14 mm and clears 18.2 mm. A figure-matched 18.9 mm square rim is refused by the default cross-gap
  check: S10→S11 combined sag 6.80 of 7.01 mm (0.21 mm air at the rim; 0.970 of the gap) and S13→S14 3.11 of
  3.40 mm (0.914). The smallest two-decimal `checks.gapSagFrac` that admits it is 0.97; 18.8 mm needs 0.96. With
  18.9 mm and 0.97 the vignetting trial gives 97.7 % instead of 95.7 % at 1.0° at 196 mm and 85.2 % instead of
  83.5 % at 12.6° at 81.63 mm, with no change on axis. Not applied: the difference is within the drawing's noise
  and the engine's beam does not clip.
- Stop check: the Fig. 1 iris marks sit 27.7 px behind the S25 vertex crossing, 4.33–4.43 mm on the local and
  global scales, consistent with the model's 4.40 mm.
- Clearance at the stored values: the image-circle check reports nothing undersized; the traced corner chief ray
  reaches 21.65 mm at all 33 stations; the validator reports no errors. The real-ray trace flags the f/2.8 axial ray
  at S11–S13 only, the known stop-limited case above. Engine values are unchanged: wide half-field 18.836°, f/2.8
  at every station, stop radius 14.866 mm; geometric transmission at the printed field is 54.8 % at 15.2° (81.63 mm)
  and 30.0 % at 6.2° (196 mm).
- Live render at 81.63, 135 and 196 mm and at the focus=1 keyframe (identical spacings): the silhouette follows
  Fig. 1. The large L1–L4 front, the smaller G2 block, G3 slightly taller than G2 and the G4 rims all read in the
  same proportions. G2 shows a larger L5/doublet step (2.7 mm against about 1.1 mm drawn) because L5 is held at its
  ray floor and the doublet at its gap limit.
- Maker drawing (`tz-faz80-200f28.jpg`, tele state): same order and grouping as Fig. 1: L1–L4, a three-unit G2
  block, G3 singlet plus doublet, and G4 with the iris directly behind the L13/L14 doublet, then L15 and the
  isolated L16. Blue-marked ED elements are 1, 3, 4 and 12, with no aspherical marking. Relative to L1, its G2,
  L15 and L16 heights are about 0.56, 0.36 and 0.49, against 0.52–0.59, 0.40 and 0.52 in the model.
- Open: whether the G2 doublet should take the figure's 18.9 mm with `gapSagFrac` 0.97 is left to the coordinator.
