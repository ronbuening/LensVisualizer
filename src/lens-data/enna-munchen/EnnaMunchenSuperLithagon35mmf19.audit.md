# Audit Log - ENNA MÜNCHEN SUPER-LITHAGON 35mm f/1.9

Patent: US 3,036,499 A, sole example (Table 1)

## 2026-11-11 - Authoring (external lens package, second revision)

- Authored against engine commit e3434b282 from Table 1, all 17 radii and 16 spacings uniformly scaled by 0.35
  (f = 100 → 35 mm); nd/νd as printed; design f/2.0. Element data matched the first revision.
- Stop: the first revision placed the stop a quarter of the way into l5; the second revision replaced that with the
  station read from the drawing, 11.1 + 6.9 units of the 18-unit gap (3.885 + 2.415 mm), measured from the R10 vertex.
- Semi-diameters read from the inner rims of the patent drawing (191-unit vertex span as scale, smaller side, bevels
  excluded); no rays were used to size them. Image gap is the paraxial back focus. Infinity only.
- A small pupil-grid trace at 0/16/24/32° found strong corner vignetting at 32°, mainly at the front surface and the
  cemented L7/L8 pair; the rims were not enlarged to remove it.
- Pending at hand-off (rim and stop review, repository checks, field qualification): closed by the deployment
  validation and cleanup pass below; rim fidelity remains open.

## Deployment validation (2026-11-11)

- Source: US 3,036,499 A (Google Patents PDF), kept as `patents/US3036499A.pdf`. All 17 R, 16 d and 9 nd/νd were read
  from the 300 dpi page image (the text layer drops "+" signs): an exact 0.35× transcription, no mismatches. EFL
  35.001 mm (100.003 at patent scale); design f/2.0, retail f/1.9 kept as `fNumber.marketing`.
- Index line: d (helium) confirmed; SF11, LaK9 and SK10 give the printed nd at 587.6 nm. DE 1,102,435 B (same family)
  shows R1 −250 / R3 −270 in Google's OCR; those are OCR sign errors (EFL 89.4 / 101.6), the US signs give 100.003.
- Product: Super-Lithagon 35mm f/1.9 (1958), 9 elements / 8 groups, Exakta and M42. The patent figure matches the
  element count, the cemented L7/L8 pair, plane R11 and R14 and the stop between L5 and L6. No public maker diagram found.
- Integration fix: `catalog.lensMounts` ["exakta", "m42"].
- Open for the cleanup pass: public wording (header, subtitle, specs, glass/type strings, focus description, analysis
  process prose and archive.org link), `EnnaMunchen…` file prefix; R1 is drawn near 19.5 mm against `sd` 17.4 (SD pass).
  (Wording and file prefix closed 2026-11-11; R1 rim carried to the Open list below.)

## 2026-11-11 — Cleanup and wording pass

- Header: replaced the package note with a box comment that keeps every fact (sole example, 0.35 scale from
  f = 100, d-line indices, patent f/2.0 against marketed f/1.9, drawing-read stop split, drawing-read rims, paraxial
  back gap 36.583 mm, infinity placeholder) and adds the OCR sign note for R1/R3.
- `subtitle`: "US3036499A sole example — qualified scaled representative; source f/2" → "US 3,036,499 A, sole
  example — Lautenbacher / Enna-Werk, matching the 9/8 production layout".
- `specs`: three package lines → "9 elements / 8 groups", "f ≈ 35.0 mm", "f/1.9 (patent f/2.0)", "2ω ≈ 63.4°",
  "all-spherical", following the sibling Lithagon files.
- `catalog.focalLengthMm.design`: 35 → 35.0011, the rounded traced EFL, as in the sibling Lithagon 35mm f/3.5
  (35.0008) and Ultra-Lithagon 28mm f/3.5 (28.00055) files.
- `focus`: `closeFocusM` written as 1e15 (same value); description is now "Infinity focus only; the patent gives no
  close-focus data, so no focus travel is modeled." No `catalog.closeFocusM.marketing`: no maker figure was confirmed.
- Element types: L6/L7 "Plano-concave Negative" → "Plano-Concave Negative", L8 "Plano-convex Positive" →
  "Plano-Convex Positive" (house spelling; shapes already matched the signs of R). Roles rewritten per element.
- Glass labels (all resolve to the named catalog row; Δ = catalog − patent): L1/L2 PC2 (Hoya), Δnd 0, Δνd −0.02;
  L3 LF2 (Sumita), Δnd 0, Δνd 0.00; L4 SK10 (Schott) → N-SK10, Δnd −0.00002, Δνd +0.10; L5 K5 (Sumita), Δnd 0,
  Δνd +0.01; L6/L7 SF11 (Schott), Δnd 0, Δνd +0.05; L8/L9 N-LAK9 (Schott), Δnd 0, Δνd −0.09. Rejected: S-BSM10 for
  L4 (Δνd +0.17). The period name "LaK9 (Schott)" does not resolve, so L8/L9 use N-LAK9; there is no Schott K5 row,
  so L5 names the Sumita row it resolves to.
- Analysis: removed workflow prose (revision history of the stop, JSON file names, pixel logs, ray-grid counts,
  package status lines) and the archive.org link; fixed run-together numbers; renamed "Inferred Apertures and
  Verification Limits" to "Model Scope and Limitations"; dropped the empty aspherical section; added the DE
  1,102,435 B family and its OCR sign errors, the patent's own conditions with their values (L5 power ratio 0.24,
  ν7/ν8 0.47, index-mean margin 0.113, intercept 1.045 f, length 2.96 f), the glass table and cited the M42 Lens
  Database and JAPB.
- Engine numbers before and after (identical): EFL 35.0011 mm, FOPEN 2, halfField 32°, stop radius 9.75497 mm, BFD
  36.5833 mm, total track 103.4333 mm. Surface audit OK; aperture audit within 3 % of the stated f-number, no rim
  limit.
- Open: R1 is drawn near 19.5 mm in the patent figure against `sd` 17.4 (the R2 rim); corner vignetting at 32° is
  heavy (front surface and cemented L7/L8 pair); maker minimum focus distance not confirmed (the Enna brochure scan
  at ihagee.org was unreachable during this pass, so its focus distances and 64° figure were not re-read).
  (R1 rim and corner vignetting closed 2026-11-11 by the semi-diameter pass below; the minimum focus distance stays open.)

## 2026-11-11 — Semi-diameter pass against the patent figure

- Source: `patents/US3036499A.pdf`, page 1, the single drawing (axis vertical, object at the bottom), native 300 ppi
  CCITT raster, measured at 300 dpi.
- Scale: R1 vertex at y = 2503 px and R17 vertex at y = 836.5 px span the 191-unit vertex length, so 8.725 px per
  patent unit, 0.04011 mm per px at the 0.35 scale. Intermediate vertices (R2 2445, R4 2126, R9 1633, R13 1121, R15
  972) fall within 1–2 units of their prescription stations. Transverse check by arc fits (rim height from the
  drawn sag and the printed radius): R2 8.60, R4 8.49, R9 8.88, R10 8.42 px per unit; drawn sags of R3, R7, R12 and
  R13 match the printed radii at the measured rims. The stop tick sits 11.1 units into l5, as modeled.
- Readings (outermost ink on the clean left side, checked against the right side where leader lines allow; mean of
  both where clean), in mm at the 0.35 scale, against the baseline `sd`:

  | Surface | Figure | Baseline | Ratio | Evidence | New |
  |---|---:|---:|---:|---|---:|
  | 1 | 19.4–19.6 (outer edge) | 17.4 | 1.12 | convex front runs to the drawn edge on both sides (483 / 488 px) | 19.5 |
  | 2 | 17.2–17.5 (bevel) | 17.4 | 1.00 | concave rear ends at a 45° bevel (429 / 436 px) | 17.4 |
  | 3 | 14.6 (outer edge) | 13.5 | 1.08 | same pattern as L1 (363–366 px); restores the drawn front/rear step | 14.6 |
  | 4 | 13.6–13.8 (bevel) | 13.5 | 1.01 | 338 / 343 px | 13.5 |
  | 5, 6 | 12.7 | 12.6 | 1.01 | square edge, 316–317 px | 12.6 |
  | 7, 8 | 12.7 | 12.6 | 1.01 | square edge, 317–318 px | 12.6 |
  | 9 | 12.3 | 11.8 | 1.04 | 307 px | 11.8 |
  | 10 | 11.75 | 11.8 | 1.00 | 293 px at the chord | 11.8 |
  | 11 | 9.5–9.7 (flat face, bevel) | 9.7 | 1.00 | 237–241 px | 9.7 |
  | 12 | 10.15 | 9.7 | 1.05 | 253–254 px | 9.7 |
  | 13 | 11.1–11.4 (bevel) | 11.1 | 1.01 | 277 / 284 px | 11.1 |
  | 14 | 12.2–12.5 (edge) | 11.1 | 1.11 | cemented face runs to the edge (305 / 311 px) | 12.4 |
  | 15 | 12.2–12.5 (edge) | 11.1 | 1.11 | L8 rear meets the edge (305 / 311 px) | 12.4 |
  | 16, 17 | 14.7–15.1 | 14.7 | 1.01–1.03 | 366 / 376 px | 14.7 |

- Kept within noise (under about 5 %): surfaces 2, 4–13, 16, 17. Changed: R1 and the cemented R14/R15 depart by
  11–12 %; R3 departs by 8 % and is raised with them because the drawing gives L2 the same convex-edge / concave-bevel
  step as L1, which the square 13.5 / 13.5 rim hid. No face moved below its baseline value, so no cut or land is
  involved; the corner gains light.
- Clearance: surface audit OK; aperture audit within 3 % of the stated f-number with no rim limit; image-circle
  floor clear; traced field coverage 100 % (32.0° to 21.61 of 21.65 mm). The real-ray f/2.0 cone traced at the
  nominal entrance pupil reaches 9.78 mm at surface 11 (`sd` 9.7), as before; the engine's f-number stop (9.755 mm)
  trims that cone first, so no rim limits the axial beam in the model.
- Engine: EFL 35.0011 mm, FOPEN 2, halfField 32°, stop radius 9.755 mm unchanged; tracing half-field 32.83° → 34.73°.
  Geometric transmission at 32°: 11.8 % → 32.9 % (26.2°: 43.9 → 61.6 %; 20.4°: 68.9 → 80.8 %).
- Model sketch against the drawing at matched scale (12 px/mm) agrees for every element; the sketch joins rims with
  straight lines, so the drawn 45° bevels on L1, L2 and L7 appear as one diagonal from rear rim to front rim.
- Open: the drawn L6 sits about 0.45 mm larger at R12 (10.15 mm) and L5 about 0.5 mm larger at R9, both inside noise
  and left unchanged.

## 2026-11-11 — Metadata check

- `catalog.specs` angle line changed from "2ω ≈ 63.4°" to "2ω ≈ 64°" so it agrees with `projection.fullFieldDeg` 64.
- Open: no maker or reputable reference states the minimum focus distance or blade count (a retailer listing gives 9
  blades); both stay unset.

## 2026-11-11 — Second review: diagram, labels and movement

- Compared the local page (infinity view and the nine element inspectors) with the sole drawing on page 1 of
  `patents/US3036499A.pdf`, re-measured at 300 dpi on the clean left side with the element labels excluded, and on the
  right side where the R leaders allow. The first pass's scale (0.04011 mm per px) reproduces every rim below to within
  4 %.

  | Surface | Figure, this review (mm) | File | Ratio | Verdict |
  |---|---:|---:|---:|---|
  | 1 | 19.4 (483–484 px, convex face to the outer edge) | 19.5 | 0.99 | keep |
  | 2 | 17.3 (431 px, at the 45° bevel) | 17.4 | 0.99 | keep |
  | 3 | 14.6–14.7 (364–367 px, outer edge) | 14.6 | 1.00 | keep |
  | 4 | 13.5–13.6 (337–340 px, at the bevel) | 13.5 | 1.00 | keep |
  | 5–8 | 12.7–12.9 (316–323 px, square edges) | 12.6 | 1.01–1.02 | keep |
  | 9 | 12.0–12.3 (300 / 306 px, convex face to the edge) | 11.8 | 1.03 | keep, inside noise |
  | 10 | 11.7 (291 px, at the 45° bevel) | 11.8 | 0.99 | keep |
  | 11 | 9.4 (235 px, plane face at its bevel) | 9.7 | 0.97 | keep |
  | 12 | 10.1 (251–252 px, concave face to the edge) | 9.7 | 1.04 | keep, inside noise |
  | 13 | 11.3 (281 px, at the bevel) | 11.1 | 1.02 | keep |
  | 14, 15 | 12.3 (307–308 px, common edge of L7/L8) | 12.4 | 0.99 | keep |
  | 16, 17 | 14.8–15.0 (368 / 373 px) | 14.7 | 1.01–1.02 | keep |

- Rims: no change. The drawn height order L1 > L9 ≥ L2 > L3 = L4 > L7/L8 > L5 > L6 holds on the page; the first
  pass's front-larger steps on L1, L2 and the cemented pair match the drawing. Lands and cuts: none (no face
  below its `.lens-work/base1121sd` value, no `rimExtensionSd` or `rimCutDepthMm`); the light-rule trace shows a worst
  loss of 0.0 points against the baseline rims and a gain of 21.1 points at 32°.
- Element focal lengths: the inspector showed "FL = —" for all nine elements. Added `focalLengthMm`, thick-lens values
  in air at the d-line from the prescription, the same as the analysis quotes: L1 −88.26, L2 −95.54, L3 +69.09,
  L4 +70.00, L5 +142.91, L6 −31.67, L7 −82.51, L8 +45.08, L9 +51.35 mm.
- Group brackets: none → F (surfaces 1–4) and H (5–17). The patent names the negative front part F and the positive
  main part H in the text (col. 1, lines 44–46) and brackets them in the drawing; the sibling Ultra-Lithagon
  28mm f/3.5 uses the same letters.
- Checked and found correct: names L1–L9 follow the patent text ("L1, L2, etc."; the drawing writes LI–LIX); every
  `type` agrees with the signs of R; roles are true; the stop sits between L5 and L6, and the drawn tick lies 61 % of
  the drawn l5 behind R10 (model 61.5 %); C1 brackets surfaces 13–15 (L7/L8 on the plane R14); no aspheric surfaces
  and no `apd` tags, as the patent names no special glass. Movement: static, no `gaps` block, `closeFocusM` 1e15 as an
  infinity placeholder; no source states the production focusing method, so `focus.description` does not name one.
- Engine before and after: EFL 35.0011 mm, FOPEN 2, half-field 32°, stop radius 9.755 mm, tracing half-field 34.73°,
  all unchanged. Surface audit OK; aperture within 3 % of the stated f-number with no rim limit; image circle clear;
  traced field coverage 100 %.
- Glass: all nine labels resolve within the exact window (largest |Δνd| 0.10, L4 SK10 through its N-SK10 alias). The
  patent prints only nd and νd for its single example: no glass names, line indices or partial dispersions. Neither
  the repository catalog nor the local Hoya, Ohara, Sumita and Hikari AGF files hold a Schott PK2, LF2 or K5 row, so
  the Hoya PC2 and Sumita LF2 and K5 labels stay. The only other in-window rows are the obsolete Ohara BSL22
  (1.51821/65.04) and PBL22 (1.58921/41.08), both further from the printed νd than the current labels. No nd-only
  medium.
- Colour: the patent prints no aberration curves, so no per-line focus comparison is possible.
- Assignee: "Enna-Werk Optische Anstalt Dr. Appelt K.G." matches the patent's heading (page 2) and the corpus
  spelling.
- Open: the bevels on L1, L2, L5 and L7 render as straight joins from rim to rim; the drawn L5 front (R9) and L6
  rear (R12) stay 3–4 % above the file, inside the reading noise.
