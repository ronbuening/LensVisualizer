# Audit Log — Vivitar Series 1 35-85mm f/2.8 VMC

Patent: US 3,975,089, Table I / Fig. 1

## 2026-06-23 — Vivitar folder patent audit

### Phase 1 — Glass reconciliation

- Reviewed local patent file `patents/US3975089.pdf` against `VivitarSeries13585mmf28.data.ts`.
- Updated L2 to `531621 — BSM-type crown (no exact public catalog match)` so the six-digit patent code is explicit.
- Updated L5 from a generic `LaSF5` label to `834373 — dense flint (M-NBFD10 catalog match; LaSF5/S-LAH60 class)`. The local 834373/M-NBFD10 row is a much closer Sellmeier match to the patent's 1.834 / 37.3 glass than the generic family name.
- L6 now uses OHARA BSL3 as the nearest coefficient-backed catalog equivalent for 1.49800 / 65.10; the production supplier remains unspecified.
- Updated L11 to `639451 — BaSF52-type barium dense flint (no exact public catalog match)` so the six-digit patent code is explicit.

### Phase 2 — Prescription, SD, APD, and high-index review

- Rechecked the Table I radii, axial spacings, nd/vd rows, and zoom variable gaps. No numeric prescription changes were made.
- Confirmed from the scanned table that L6 is νd = 65.1 and that the third variable gap is represented in the data as the patent gap split around the inserted stop.
- The patent publishes no semi-diameter table. Fig. 1 supports the existing large-front / smaller-rear aperture progression, and no element proportions looked inconsistent with the drawing. No SD edits were made.
- The patent publishes no abnormal partial dispersion, dPgF, theta-gF, line-index set, apodization, or gradient-filter data. All elements remain `apd: false`; no APD status was inferred.
- High-index status is supported for the dense flint and high-index rows, especially L3/L7/L10/L12 SF6, L4 SF57, L5 834373, and L11 639451.

### Phase 3 — Analysis sync

- Updated the analysis glass-palette summary to avoid overstating the count of distinct glass types and to call FK5 a fluor crown rather than a fluorite crown.

## 2026-06-23 — SD proportion refinement

- Adjusted the L6/L7 cemented interface SD from 9.0 mm to 10.2 mm to make the Group III compensator doublet read as a more coherent pair in the SVG diagram.
- This is a visual/proportional refinement, not a patent-derived SD; US 3,975,089 does not publish semi-diameter data.
- The new value stays below the edge-thickness limit for the steep L7 rear surface pair.
- Verification: `npm run typecheck` and focused `buildLens` / `elementRenderDiagnostics` tests passed; computed L7 edge thickness remains positive at about 0.246 mm.

## 2026-08-07 — Legacy BSC6 and BAF12 catalog recovery

- Visually rechecked US 3,975,089 Table I: L2 remains `1.531 / 62.1` (531621) and L11 remains `1.639 / 45.1`
  (639451).
- HOYA BSC6 (`1.531128 / 62.075664`) exactly covers L2. Existing SUMITA BAF12 (`1.6393 / 45.0`) covers the
  rounded L11 coordinate. Both labels state catalog equivalence and leave the production suppliers unspecified.
- Strict and trusted catalog coverage are now complete at `12/12`; no geometry changed.

## 2026-09-21 — First-added diagram audit, lens 51

Source: `patents/US3975089.pdf` (9 pages; front page and Fig. 1 on p. 1, Fig. 1/Fig. 3 on p. 2, Fig. 2/Fig. 4 on p. 3,
Table I on pp. 4–5 with the claim copies on pp. 7–8, Certificate of Correction on p. 9). Production data for the
close-focus and mount checks: camera-wiki and the JAPB data sheet (12/9, 0.26 m at 35 mm and 0.9 m at 85 mm from the
film plane, 1:3 at 35 mm, f/2.8–16, 72 mm filter; mounts Canon FD, Konica AR, M42, Minolta SR, Nikon F, Olympus OM,
Pentax K).

### Re-verified and retained

- Front page: inventor Ellis I. Betensky (Toronto), assignee Ponder & Best, Inc., granted Aug. 17, 1976; no kind code
  printed on a 1976 US grant. `patentNumber`, `patentAuthors`, `patentAssignees`, `patentYear` unchanged.
- Table I read row by row on the 300 dpi crop: all 21 radii (signs included), all thicknesses, all nd/νd rows and the
  three variable-gap footnotes ((1) 0.47–19.48, (2) 15.94–5.01, (3) 9.33–1.19) match the data file. Claim 8's copy
  prints R21 as −35.95 where Table I, claim 7 and claim 17 print −35.59; the three-to-one reading is kept. The
  Certificate of Correction only changes claim 17's "5.93" to 5.98 (already the stored value) and the claim-6 inequality.
- Group travels from the stored gaps: Group II 19.07 mm and Group III 8.14 mm (Table II exact); Group I net 0.06 mm
  with the forward-then-back motion of Fig. 2. Group powers from the stored rows: I 0.0158, II −0.0395, III −0.0100,
  IV 0.0319 mm⁻¹ (Table III: 0.0157, −0.0395, −0.0098, 0.0333). Computed EFL 38.46 / 89.08 mm, back focus 45.82 /
  46.37 mm against the text's 36–83 mm and 40.06 mm. A single-parameter search over every printed R, d and n found no
  one value whose correction reproduces EFL, back focus and Group IV power together (the closest, d19 = 7.9 mm, is
  contradicted by the Certificate of Correction), so the table stays as printed and the discrepancy is documented as a
  Group IV inconsistency rather than a scale error. Element `fl` values match thick-lens values to 0.1 mm.
- Glass: every label resolves to a catalog entry within Δnd ≤ 5e-4 and Δνd ≤ 0.14 of the stored patent pair; no
  relabels. The patent gives no glass names, θgF or partial-dispersion data; all `apd: false` retained.
- Element types agree with the R signs (L9 is a positive meniscus by its −502.33 mm front radius although the patent
  prose calls it bi-convex).

### Changes

| Field | Before | After | Evidence |
|---|---|---|---|
| Stop position | Between L7 and L8, splitting gap (3) as 8.83/0.69 + 0.50 | Between L10 and L11: surface 17 d = 4.15, STO d = 7.38 (sum = patent 11.53); surface 12 d and `var["12"]` restored to the patent 9.33 / 1.19 | Fig. 1 (pp. 1 and 2) draws the iris symbol — a vertical line broken at the axis — in the R17–R18 gap, 0.36 of the way from R17 at the drawing's Group IV scale. The old position had no figure support. |
| STO sd | 12.0 (paraxial f/2.5) | 11.6 | Real-ray f/2.8 marginal height at the new stop: 11.583 mm (wide) / 11.580 mm (tele); one fixed iris gives f/2.8 at both stations. |
| sd 1 / 2 | 18.0 / 17.5 | 32.5 / 32.0 | Fig. 1 L1 flat rim 449 px above and below the axis at ≈13.7 px/mm (32.8 mm); 72 mm filter thread bounds the front element near 33 mm; chief ray at Y = 21.6 needs 29.2 / 26.2 mm. |
| sd 3 / 4 | 18.0 / 18.0 | 28.5 / 28.5 | Fig. 1 L2 tip 391 px (28.5 mm); chief 25.6 / 24.6 mm; edge thickness 1.35 mm. |
| sd 5 / 6 | 18.0 / 16.5 | 25.8 / 25.8 | Fig. 1 L3 tip 355–361 px (26.1 mm) drawn as a knife edge; zero-edge height 26.4 mm; chief 21.8 / 20.7 mm. |
| sd 7 / 8 | 10.5 / 10.5 | 15.8 / 15.8 | Fig. 1 L4/L5 rim 220–225 px (16.2 mm); L4 zero-edge height 16.0 mm (0.11 mm edge at 15.8). |
| sd 9 | 8.5 | 9.2 | Fig. 1 L5 rear clear aperture ≈125 px (9.1 mm) with a flat annulus outside; f/2.8 axial ray 9.0 mm; the facing L5/L6 bowls touch at h ≈ 8.9 mm at the tele 5.01 mm gap. |
| sd 10 | 10.5 | 8.5 | Same tele bowl-contact limit; the validator's 0.9 gap-intrusion rule caps the common height at 8.5 mm. |
| sd 11 / 12 | 10.2 / 11.0 | 10.4 / 10.4 | Fig. 1 L6/L7 rim 130–139 px (9.8 mm); L7 zero-edge height 10.5 mm (0.13 mm edge at 10.4). |
| sd 13 / 14 | 11.0 / 11.0 | 11.3 / 11.3 | L8 zero-edge height 11.5 mm; figure 137–147 px (10.3 mm). |
| sd 15 / 16 / 17 | 10.5 / 10.5 / 10.5 | 11.0 / 11.0 / 11.5 | L9 zero-edge height 11.2 mm; figure 154–160 px (11.5 mm); axial ray 11.0–11.5 mm. |
| sd 18 / 19 | 11.0 / 11.0 | 11.7 / 11.7 | L11 zero-edge height 11.9 mm; figure 156–162 px (11.6 mm); axial ray 11.7 mm. |
| sd 20 / 21 | 9.0 / 9.0 | 12.2 / 12.2 | Figure 166–168 px (12.2 mm); chief 4.9 / 5.3 mm, axial 8.6 mm. |
| `closeFocusM` | 0.30 (applied as 0.30 m from the first surface at both stations, i.e. 0.44 / 0.47 m object-to-image with 4.6 / 28.8 mm extensions) | 0.26, plus `zoomCloseFocusM: [0.26, 0.885]` | Published 0.26 m (film plane) at 35 mm and 0.9 m at 85 mm; unit focus means one extension for both stations. |
| `var["21"]` close values | 50.41 / 75.21 | 57.00 / 57.55 | Infinity back focus + one calculated 11.18 mm extension: object-to-image 260.0 mm at wide (m = −0.291, published 1:3) and 885.2 mm at tele (published 0.9 m). |
| `focalLengthDesign` | [36, 83] | [38.5, 89.1] | Computed Gaussian EFL of the stored table; the patent's 36–83 mm stays in `zoomPositions`, `specs` and the header. |
| `imageFormat` / `lensMounts` | absent | `135-full-frame`; canon-fd, konica-ar, m42, minolta-sr, nikon-f, olympus-om, pentax-k | Patent: 24×36 mm frame; production mount list. |
| `subtitle` | "… Example 1 …" | "… Table I …" | The patent has one prescription and no numbered examples. |
| Header / `focusDescription` / L11 role | Old stop and SD notes | Rewritten for the figure-derived stop, figure-based SDs, EFL discrepancy and unit-focus extension | — |

### Checks on the result

- Surface validator: no errors; edge thicknesses 0.11 mm (L4), 0.13 (L7), 0.14 (L8), 0.16 (L11), 0.27 (L9), 0.39 (L3),
  1.35 (L2); maximum rim angle 47.6° (R16). Image-circle floor: 0 undersized. Prettier clean.
- Paraxial: EFL 38.461 / 89.077 mm, back focus 45.820 / 46.372 mm, defocus of the stored gaps ≤ 0.003 mm; close-focus
  object-to-image 260.0 / 885.2 mm. Engine build: FOPEN 2.8 at both stations, working iris radius 11.583 mm,
  paraxial half-field estimate 21.7° (wide, limited by surface 9) and 15.6° (tele).
- Real-ray clearance at f/2.8, Y = 21.6 mm: no surface blocks the chief ray in Group I or Group IV; the wide-end
  corner chief ray is intercepted at surfaces 7–9 (16.3 / 16.3 / 11.7 mm needed against the knife-edge and
  bowl-contact limits above), clearing everything only to Y ≈ 15.5 mm. At the computed 89 mm tele EFL the f/2.8 axial
  ray exceeds surfaces 10–17 by 0.02–0.6 mm (largest at L6 front and L7); with f/2.8 pupils sized for the patent's
  nominal 36 / 83 mm every surface clears except surface 10 by 0.01 mm.
- Live check (dev server, read from the page SVG because the shared browser pane could not composite screenshots):
  production baseline drew L1–L3 at 134 px and the rear elements at 67–78 px (front/rear ratio 1.7); the local page
  draws L1 at 242 px, L2 212, L3 192, L4/L5 118, L6/L7 77, L8 84, L9/L10 82–86, L11 87, L12 91 px (front/rear ratio
  2.7, Fig. 1 measures 2.7), the stop marker between L10 and L11, gaps D6/D9/D12 0.47/15.94/9.33 → 19.48/5.01/1.19,
  BF 45.82 → 57.00 (wide) and 46.37 → 57.55 (tele), focus labels 26 cm and 89 cm, EFL 38.46 / 89.08 mm, stop
  diameter 23.17 mm at both stations. Off-axis rays (13.0° wide, 9.3° tele) reach the image plane; one lower rim ray
  of the wide bundle is clipped at Group II, as the clearance trace predicts.

### Open limitations

- The printed Table I does not reproduce the stated 36–83 mm / 40.06 mm back focus / 133.7–135.7 mm front-vertex
  distance; the inconsistency is in the Group IV rows and cannot be resolved from the patent alone.
- Semi-diameters remain figure-and-trace estimates; the figure is schematic in its axial gaps (Group II/III spacings
  are exaggerated) even though Groups I and IV are drawn to a consistent transverse scale.
- The stop's exact position inside the 11.53 mm gap (4.15 mm behind R17) is read from the drawing.
- Only the two tabulated zoom stations exist; intermediate gaps are interpolated and cannot follow the curved cam
  paths of Fig. 2.
- The close-focus extension is calculated from production data; the patent publishes no near-conjugate state.

## 2026-10-07 — Patent-audit queue: Table I prescription re-read

Source: `patents/US3975089.pdf` (300 dpi one-bit scan, read from 600 dpi crops). Queue row: the stored prescription
computes 38.46 / 89.08 mm where the patent states 36–83 mm, and Group IV computes 0.0319 against Table III's .0333.
No prescription value changed; the file already matches the print.

| Field | Before | After | Source |
|---|---|---|---|
| `sourceErrata` | absent | one `unresolved` entry: Table I computes f = 38.46 / 89.08 mm and back focus 45.82 mm against the stated 36–83 mm and 40.06 mm; Group IV 0.0319 against .0333; no single Group IV value reproduces the stated values together | Table I, p. 4 col. 2 and p. 5 col. 3; "36-83mm" at p. 4 col. 2 l. 51–54 and p. 5 col. 3 l. 48–50; Table III and "back focal length … 40.06mm" at p. 6 col. 5 l. 25–43 |
| Header, Certificate of Correction sentence | "fixes only claim 17's 5.93 → 5.98" | one table value (claim 17's 5.93 → 5.98) plus a formula and a claim dependency | Certificate, p. 9: col. 6 l. 25 expression; claim 17 "claim 13" → "claim 9"; col. 10 l. 30 "5.93" → "5.98" |
| Header, EFL-discrepancy note | "Table III group powers I–III … match the printed rows"; "the claim tables repeat Table I verbatim" | computed powers beside the printed ones (III −.0100 against −.0098, I–III −.0306 against −.0301); claim 8's R21 −35.95 named; front-vertex distances added | Table III, p. 6 col. 5; claim 8 table, p. 7 col. 8 l. 56 |
| Analysis note, overview and discrepancy section | the same two statements | the same corrections, with the row-for-row match and the unresolved erratum stated | as above |
| Header, Table II / Fig. 2 sentence | "Table II travels (19.07 / 8.14 mm) and the Fig. 2 cam plot are reproduced by these gaps" | Group II / III travels and the ends of their Fig. 2 curves reproduced; Group I curve about 0.7 mm above the R6–R13 distance | Table II, p. 6 col. 5; Fig. 2, p. 3 |
| Analysis note, Table II sentence | "the data file's variable gaps reproduce all three figures" | Group II and Group III figures reproduced exactly; Group I's two end positions differ by 0.06 mm | Table II, p. 6 col. 5; R6–R13 distance 34.04 / 33.98 mm from the printed gaps |

- Table I, Group IV first: R13 53.32 / 2.90 / 1.620 / 60.3; R14 −42.06 / 2.00; R15 −502.33 / 5.00 / 1.487 / 70.4; R16
  −14.89 / 0.90 / 1.805 / 25.5; R17 −45.59 / 11.53 (stored as 4.15 + 7.38 around the stop); R18 125.96 / 3.50 / 1.639
  / 45.1; R19 −25.90 / 5.98; R20 −19.40 / 1.296 / 1.805 / 25.5; R21 −35.59. Groups I–III: all twelve radii, nine fixed
  distances and seven Nd/Vd pairs, and footnotes (1) .47–19.48, (2) 15.94–5.01, (3) 9.33–1.19. Every value equals the
  file. The file applies no scale factor.
- The three claim copies were read the same way. Claim 7 (p. 7) is identical to Table I. Claim 8 (p. 7 col. 8) differs
  only in R21, printed −35.95. Claim 17 (p. 8 col. 10) differs only in the R19–R20 distance, printed 5.93 and changed
  to 5.98 by the Certificate. The Certificate's first item is the expression at description column 6 line 25, not a
  claim 6 inequality as the 2026-09-21 entry has it.
- Computed from the stored rows (own paraxial trace; the zoom-iris helper prints the same focal lengths): EFL 38.461 /
  89.077 mm, back focus 45.820 / 46.372 mm, front-vertex distance 138.91 / 139.40 mm, R1–R21 length 93.086 / 93.026
  mm. Powers: I 0.01578, II −0.03949, III −0.00997, I–III at wide −0.03059, IV 0.03192, whole lens at wide 0.02600,
  against Table III's .0157, −.0395, −.0098, −.0301, .0333, .0277. `focalLengthDesign`, the element `fl` values and
  the stored back focus agree with these and stay.
- The stated values agree with one another and not with the table: Table III's whole-lens .0277 is the power of a
  36.1 mm lens; the back focus exceeds the focal length over 8.6 % of a 36–83 mm range ("over 8 percent"; the table
  gives 14.5 %); 135.7 / 83 = 1.63 as the text says (table 1.565); R9 = 17.98 is half of 36 (claim 2). One of them
  does not fit the rest: a front-vertex distance growing 2.0 mm from 133.7 to 135.7 mm cannot come from Table II's net
  Group I travel of 0.09 mm with a single back focus.
- Errata standard: only one kind of evidence is available (`source-summary`), and it does not isolate a value. The
  patent has no aberration plots and no second example; the claim copies carry the same Group IV rows; the printed
  rows satisfy every claimed condition (back focus above the short focal length; R9, R10 at 0.47 / 0.43 of it; Ra
  62.29; Ra/FLm 1.06; short focal length 0.889 of the 43.27 mm diagonal; zoom ratio 2.32). No value was corrected.
- Single-value search over Group IV, each value solved for f = 36.00 at wide. Every solution gives 83.2–83.4 mm at
  tele, so the tele focal length does not discriminate. None also gives back focus 40.06 mm and power .0333. The
  radius and index solutions leave the back focus long: R13 47.54 (40.94 mm, power 0.03305), L8 index 1.652 (41.03,
  0.03304), R14 −38.59 (41.12, 0.03301), R15 +1412 (41.29, 0.03297), all others 41.5 mm or more. Of the distance
  solutions only R19–R20 = 8.00 mm comes near (39.27 mm, 0.03332), and the Certificate confirms 5.98 there. Reading
  R15 as +502.33, which the text's "L9 is bi-convex" would suggest, gives 34.94 / 80.86 mm, back focus 39.34 mm and
  power 0.03346, past the stated values on the other side. Claim 8's R21 gives 38.86 / 90.02 mm.
- In Groups I–III the only single value that brings Group III to −.0098 and I–III to −.0301 is an L7 thickness of
  about 6.1 mm in place of 3.10. It leaves Group IV at 0.0319 and the back focus at 42.2 mm, and Fig. 2 excludes it:
  the Group II curve runs from 29.3 to about 10 mm ahead of R13, where the printed distances give 29.37 and 10.30 mm.
- Fig. 2 (p. 3), read at 300 dpi against its 1 mm grid at 36 and 83 mm: Group II 29.3 / 10.1 and Group III 9.3 / 1.3
  mm, against R9–R13 29.37 / 10.30 and R12–R13 9.33 / 1.19 mm from the printed gaps; Group I 34.7 / 34.7 mm, against
  an R6–R13 distance of 34.04 / 33.98 mm. Table II's 19.07 and 8.14 mm follow exactly from the gaps; the two stations
  put Group I 0.06 mm apart and cannot show its 3.24 / 3.15 mm out-and-back motion.
- Fig. 1 (p. 2), a figure reading only and not counted as evidence: the section is drawn near the tele gaps, and
  R1–R21 measures about 1270 px at 300 dpi, 93 mm at the 13.6 px/mm that the drawn Group I length gives, against the
  table's 93.03 mm; the L11–L12 gap is drawn at about 5.8 mm. The drawing gives no sign that an axial distance is
  misprinted. The image plane is drawn about 37 mm behind R21, nearer the stated 40.06 mm than the computed 46.37 mm.
- Left open: which Group IV value or values the text's 36–83 mm design differs in. Settling it needs a second printing
  of the prescription, such as a foreign counterpart of application 462,366; this patent alone cannot. The Section G
  row of `agent_docs/sd-audit-queue.md` and the Section F row marked "needs a corrected Table I" stay open on that.
- The tele rim limit is as before: f/2.8 stated, f/3.01 traced at 83 mm (surface 10 rim) and f/2.84 at 36 mm (surface
  14 rim), with the fixed iris at 11.583 mm limiting at neither station. No semi-diameter was touched.
