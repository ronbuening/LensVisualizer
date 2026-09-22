# Audit Log - Fujifilm XF 90mm f/2 R LM WR

Patent: US 2016/0274335 A1

## 2026-05-20 - Glass relabel pass

- Opened the data, analysis, and local patent PDF `patents/US20160274335A1.pdf`; local OCR confirms at least the 1.63854 / 55.38 row and the table context for the queued rows.
- Updated L6 to `S-BSM18 (OHARA)`, L9 to `S-TIM25 (OHARA)`, and L10 to `S-LAL8 (OHARA)`.
- One unrelated no-catalog row remains, so the lens is improved but not yet fully covered.

## 2026-07-29 - Remaining catalog-mismatch audit

- Rechecked US 2016/0274335 A1 Example 1 surface 19; stored `R`, `d`, `nd=1.51742`, and `νd=52.43` agree with the patent.
- Relabeled L35 from `S-NSL3` to exact-coordinate OHARA `S-NSL36`.
- Synchronized the analysis glass table. No prescription geometry changed.

## 2026-07-29 - Incompatible named-label audit

- Rechecked US 2016/0274335 A1 Example 1, Table 1, surface 6: `R=-138.92000`, `d=3.000`,
  `nd=1.74950`, `νd=35.33`, and `θgF=0.58189` match the stored L14 prescription.
- Relabeled L14 from incompatible OHARA S-NBH53 (1.73800 / 32.26) to exact-coordinate OHARA
  S-NBH51 (1.749504 / 35.33, code 750353).
- Synchronized the analysis glass table. No prescription geometry changed.

## 2026-09-21 — First-added diagram audit, lens 49

Source: local `patents/US20160274335A1.pdf` (26 pages, 300 dpi 1-bit scans with an OCR text layer). Front page p. 1;
FIG. 1 p. 2 (sheet 1/11, axis horizontal, drawn at infinity focus); Example 1 text ¶0097–0103 p. 20–21; Tables 1–2
p. 21; Table 12 (Example 6, same glass rows) p. 23; Table 14 p. 24. All numbers were read from the rendered page
images, not from the OCR layer.

### Retained after re-reading the source

- Front page: US 2016/0274335 A1, published Sep. 22, 2016, inventor Daiki Kawamura, applicant and assignee FUJIFILM
  Corporation. `patentNumber`, `patentAuthors`, `patentAssignees`, `patentYear` and the Example 1 `subtitle` are right.
- All 20 stored rows of `R`, `d`, `nd`, `νd` match Table 1, including the stop at surface 8 between G1 and G2 and the
  flat surface 4. No aspheres exist in Example 1. The printed R1 is 134.54219 (Table 12 repeats it); only the OCR layer
  reads "134,542.19", which would give EFL 106.6 mm.
- Cover plate: Table 1 rows 21–22 (PP, d = 2.850, nd = 1.51633) are excluded. The stored last gap 24.663 mm is the
  patent's air-converted Bf = 20.784 + 2.850/1.51633 (1.880) + a derived 1.999 mm behind the plate; FIG. 1 draws
  about 2.0 mm between PP and Sim.
- Paraxial EFL 87.4998 mm against f = 87.495; BFD 24.674 against Bf 24.663 (defocus −0.011 mm); TL/f 1.315,
  |f2|/f 0.549, Bf/f 0.282, D23/TL 0.163 all reproduce Table 14. Calculated group focal lengths G1 +70.38,
  G2 −48.07, G3 +57.50 mm; every stored element `fl` equals its thick-lens value to the stored precision.
- Focus gaps: infinity DD[8] 4.600 / DD[11] 18.753 and proximal 12.696 / 10.657 match Table 2 (sum 23.353 mm both).
- All eleven glass labels resolve to catalog entries compatible with the patent pairs (largest Δnd 5e-6,
  largest Δνd 0.02). The patent names no glasses and never calls an element ED or anomalous, so `apd: "inferred"`
  stays on L12, L13 and L31.
- Semi-diameters (no change). FIG. 1 scale 10.80 px/mm at 300 dpi from the surface 1 → surface 20 vertex span
  (976.5 px / 90.403 mm); intermediate vertices, the plate and Sim land within 2 px of the prescription. Lower-side
  rims: L11 265 px = 24.5 mm (stored 27.0), L12 238 px = 22.0 (24.5 / 23.5), L13–L14 222 px = 20.6 (22.5),
  G2 154 px = 14.3 (14.5), L31 160 px = 14.8 (16.5 / 16.0), L32–L33 162 px = 15.0 (16.0), L34 178 px = 16.5
  (16.0 / 15.5), L35 162 px = 15.0 (13.5). Every ratio lies between 0.90 and 1.11, inside the 15 % noise band.
  The stop symbol is 153 px = 14.2 mm, equal to the stored STO value (paraxial f/2.05).

### Changes

| Field | Before | After | Evidence |
|---|---|---|---|
| `nominalFno`, `fstopSeries`, `maxFstop` | 2.0; series from 2; default 16 | 2.06; series from 2.06; explicit 16 | Table 2 FNo. 2.06. Production minimum aperture f/16. Engine iris radius 14.93 → 14.48 mm. |
| `closeFocusM` | 0.6 | 0.815 | Table 2 proximal state is β = 0.14 with no printed distance. The tabulated gaps focus an object 700.0 mm from surface 1 (calculated, β = −0.136); 700 + 115.07 mm track = 0.815 m. The 0.6 m label was the production MFD, which these gaps do not reach. |
| `focusDescription`, `var` comment | "moves 8.1 mm" to 0.6 m | names the proximal state and says 0.6 m / 0.2× is not modeled | Same. |
| `varLabels` | `D(St)`, `BF₂` | `DD[8]`, `DD[11]` | Table 2 row names. |
| L21 `type` | Negative Meniscus | Positive Meniscus | R9 −99.967, R10 −53.995, nd 1.92286; thick-lens f = +123.85 mm. |
| L35 `role` | "directs off-axis rays for telecentricity" | directs off-axis rays away from the axis, shortens total length | ¶0067 and ¶0070. |
| `dPgF` | L12 0.032, L13 / L31 0.014 only | all eleven elements: −0.00061, +0.03234, +0.01438, −0.00248, +0.03759, −0.00207, +0.01438, −0.00708, +0.00910, −0.00732, +0.00088 | Table 1 θgF column; calculated as θgF − (0.6438 − 0.001682·νd). |
| Header | boxed note calling R1 an "OCR correction"; SD and cover-glass notes | plain notes on R1, focus, SD basis with figure comparison, cover-plate arithmetic, partial dispersion | Findings above. |
| Analysis | §2 "OCR Correction" (also speculated about Example 2); glass table listed S-BAM4 / S-TIM22 / S-LAM60; closest focus "0.6 m (β = 0.14)" | §2 prescription check and cover plate; glass table synced to the data labels with ΔθgF column and catalog-equivalent wording; focus section and summary state the proximal conjugate; metadata block normalized | Data-file sync. |

### Checks on the result

- Surface validator reports no errors; image-circle floor check reports 0 undersized surfaces.
- Exact meridional trace at f/2.06, Y = 14.2 mm: field angle 9.19° at infinity (patent ω = 9.2°) and 8.02° at the
  proximal state (patent 8.0°). No surface clips the axial beam (largest demand 21.24 mm on surface 1 against 27.0;
  13.33 mm on surface 9 against 14.5) or blocks the chief ray; corner-bundle vignetting grows from about 1 % per
  side on G1 to 56–60 % on L35 at infinity. The f/2.0 beam (21.88 mm) also clears.
- With the image plane held at the infinity best-focus offset the proximal gaps focus 699.99 mm from surface 1,
  object-to-image 815.07 mm, β = −0.1361, EFL 86.46 mm.
- Live: the production baseline screenshot (infinity, f/2.0, on-axis) shows the same silhouette as FIG. 1. The
  local page after the edits loads without console errors and reports the focus range ∞ → 82 cm, aperture
  f/2.06 → f/16 and an off-axis bundle at 6.5°; the browser pane stopped compositing, so the local closest-focus and
  off-axis states were confirmed from the page text only, not from screenshots. Geometry is unchanged from the
  baseline because no `R`, `d` or `sd` moved.

### Open limitations

- Production close focus (0.6 m, 0.2×) lies beyond the patent's proximal state. A single-group paraxial solve would
  need about 12.3 mm of G2 travel (β ≈ −0.20, inside the 18.75 mm gap), but the patent does not publish it, so it is
  not stored.
- Semi-diameters remain estimates; FIG. 1 suggests G1 is drawn about 9 % smaller and L35 about 11 % larger than
  stored, both inside measurement noise.
- The engine's half-field estimate (10.9°) exceeds the patent's 9.2° because the rear rims admit a larger image
  circle than APS-C; the format diagonal governs the analysis field.
- Glass names are catalog equivalents; the patent names none.
