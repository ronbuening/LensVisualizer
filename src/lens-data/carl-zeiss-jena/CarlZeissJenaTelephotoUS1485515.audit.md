# CARL ZEISS JENA TELEPHOTO 100mm f/6.3 (US 1,485,515 Design) — Audit Log

## Source

- US 1,485,515 A, Willy Merté, assignor to the firm of Carl Zeiss, Jena (corpus form `Carl-Zeiss-Stiftung`).
  *Telephoto Objective*, filed August 13, 1921 (Serial No. 492,122), granted March 4, 1924. German priority is
  June 16, 1919, and British Patent 145,548 is one of the listed foreign counterparts.
- Two-page scan: page 1 is the drawing sheet (one figure), page 2 the specification with the only numerical table.
  The table is "for the focal length 100", and the text gives an aperture ratio of 1:6.3. The patent has one example,
  recorded as `Sole example`.
- The table prints r1–r7 with their signs, the lens thicknesses dI–dIV, the air spaces b1–b3, and nD and nG′ for
  lenses I–IV. It prints no Abbe numbers, diameters, back focus or field angle.

## Transcription Check

All values were read from 300- and 400-dpi renders of the page images, not from the OCR text layer.

| Item | Printed | Data file |
|---|---|---|
| r1 … r7 | +18.091, −38.834, −36.679, +38.740, −10.396, −9.426, −17.130 | same |
| dI, b1, dII | 3.329, 0.130, 0.83 | same |
| b2 (r4 to iris), b3 (iris to r5) | 5.66, 18.25 | r4 → STO 5.66, STO → r5 18.25 |
| dIII, dIV | 1.89, 0.75 | same |
| nD (I–IV) | 1.59234, 1.59704, 1.62410, 1.49900 | same, `indexReference: "D"` |
| nG′ (I–IV) | 1.60464, 1.61718, 1.64732, 1.50840 | recorded in the analysis only |

There were no mismatches across the 7 radii, 7 axial distances and 4 indices. Lenses III and IV are cemented at r6,
and the file records them as cemented pair `C1` (surfaces 5–7).

The drawing marks the iris with a "×" at the b2/b3 boundary. At the drawing's axial scale (about 38.6 px per unit at
300 dpi) it sits about 10.1 units behind r1, against 9.949 from the table. The element shapes in the drawing match
the signed radii: I biconvex, II biconcave, III a positive meniscus, IV a negative meniscus, and the rear pair
concave toward the object.

## First-Order Results

| Quantity | Patent | Model |
|---|---:|---:|
| Focal length | 100 | 99.98 (−0.02 %) |
| Aperture | 1:6.3 | f/6.3 |
| Back focus | not printed | 49.63 (paraxial) |
| Vertex to focal plane | not printed | 80.47 |
| Rear principal point | in front of the first surface (claim) | 19.5 in front of r1 |
| Front member / rear member focal length | not printed | +55.93 / −71.43 |
| Cemented surface r6 | collective (claim) | +0.0133 per mm |

Element focal lengths: L1 +21.30, L2 −31.43, L3 +92.56, L4 −43.41.

## Values Not Printed in the Patent

- **Back focus:** the computed paraxial value, 49.6287. The patent prints none.
- **Stop diameter:** the paraxial f/6.3 size, 6.41 semi-diameter, with an entrance pupil radius of 7.93.
- **Clear semi-diameters:** estimated (`sdSource: "heuristic"`): 8.3 at r1, 8.1 at r2–r4, 5.2 at r5–r7.
  (Superseded 2026-11-17: now 8.1 / 8.1 / 8.1 / 7.4 / 6.2 / 7.1 / 7.1, from the figure and the f/6.3 beam floor.)
- **Dispersion:** no νd is authored because the patent prints only nD and nG′. The model is monochromatic.

## Validator Results

- `audit:surface`: OK.
- `audit:aperture`: no rim limit; f/6.3 within 3 %.
- `audit:image-circle` and `audit:field-coverage`: skipped (hidden file, no image format). Since the file became
  visible on 2026-11-17, both still skip it because it has no image format.
- `clearap.mjs`: no glass rim cuts the axial f/6.3 beam. The real marginal ray meets the stop plane at about 6.59,
  against the paraxial 6.41, so the outermost zone of the nominal beam is clipped at the iris.
- The rear rims at 5.2 vignette the off-axis beam by 19–35 % (one side) at 10 mm image height. (Superseded
  2026-11-17: the figure-based rear rims no longer vignette at 10 mm.)

## 2026-11-16 — Deployment validation

I re-read the patent independently from the page images. I checked every radius and sign, thickness, air space,
nD and nG′, the cemented pair, the printed iris position, and the element shapes in the drawing. I also checked the
first-order values against the patent's focal length 100 and its telephoto condition. The transcription is exact, and
the computed focal length is 99.98, −0.02 % from the printed 100.

Verdict: valid with notes. The patent names no product. The Contax Tele-Tessar K 18 cm f/6.3 has the same
four-element, three-group count (Pacific Rim Camera), but no source ties this patent to a specific Tele-Tessar. The
file remains a hidden patent reference with no production match. (Superseded 2026-11-17: the file is now visible as
CARL ZEISS JENA TELEPHOTO 100mm f/6.3 (US 1,485,515 Design), and the attribution is unchanged.)

Changes made:

- JSDoc header: replaced the process notes with a plain statement of the source, scale and inferred values.
- `maker`: `"Zeiss"` → `"Carl Zeiss Jena"` (house maker; file in `carl-zeiss-jena/`).
- `name`: `ZEISS MERTE …` → `ZEISS MERTÉ …` (accent only).
- `source.patentNumber`: `"US 1,485,515"` → `"US 1,485,515 A"` (house form).
- `source.assignees`: `["Carl Zeiss"]` → `["Carl-Zeiss-Stiftung"]` (corpus form for "the firm of Carl Zeiss").
- `catalog.focalLengthMm.design`: `99.97654348426373` → `99.98` (rounded).
- L3 `type`: `Negative Meniscus` → `Positive Meniscus`. The computed f is +92.56, and the drawing shows III thick at
  the axis and thin at the rim.
- L4 `type`: `Positive Meniscus` → `Negative Meniscus`. The computed f is −43.41.
- L1–L4 `role`: changed from the provenance note "Patent element; monochromatic sodium-D reference; no Vd supplied"
  to optical roles.
- `.analysis.md`: rewritten with patent metadata, architecture, element, glass, focus and aperture sections.
- `.audit.md`: replaced the copy of the analysis with this audit log.

No prescription value, rim or gap was changed.

After these changes, `built.mjs` reports EFL 99.9765, f/6.3, stop semi-diameter 6.4086 and total track 80.4677.
`probe.mjs` gives BFD 49.6287 with zero defocus. `audit:surface` is OK. `audit:aperture` shows no rim limit, with the
f-number within 3 %.

Open:

- **Wording (cleanup pass):** `name`, `subtitle` ("MONOCHROMATIC SODIUM D") and `specs` ("PATENT-ONLY MONOCHROME
  REFERENCE", "NO RETAIL FOCAL-LENGTH IDENTITY") need plain-English rewording. The element labels "Element 1–4" are
  generic. The `key` still reads `zeiss-merte-…`. (Closed 2026-11-17: the file was renamed and the key, name,
  subtitle and specs reworded; the generic "Element N" labels are the house form.)
- **Rims (SD pass):** the drawing shows the rear member about as tall as the front member (about 7.1 against 7.15
  units at the drawing's axial scale). The rear rims of 5.2 are therefore smaller than drawn and vignette the off-axis
  beam. The drawing's front member (about 7.15) is itself smaller than the f/6.3 entrance pupil (7.93), so the drawing
  is not to aperture scale. (Closed 2026-11-17 by the semi-diameter pass below.)
- **Dispersion (optional):** estimated νd values of about 61 / 39 / 35.7 / 66–67 come from modern glasses that match
  both printed nD and nG′. They would follow the estimated-Abbe precedent of the Tessar US 721,240 file. Otherwise the
  model stays monochromatic. (Closed 2026-11-17: the batch rule keeps nD-and-nG′-only files monochromatic; no Abbe
  number is authored.)

## 2026-11-17 — Cleanup and wording pass

Fields changed in the data file:

- `subtitle`: `"US 1,485,515 — MONOCHROMATIC SODIUM D"` → `"US 1,485,515 A, sole example — Merté telephoto objective"`.
- `catalog.specs`: `4 ELEMENTS / 3 GROUPS`, `PATENT-ONLY MONOCHROME REFERENCE`, `NO RETAIL FOCAL-LENGTH IDENTITY`,
  `ESTIMATED CLEAR APERTURES` → `4 ELEMENTS / 3 GROUPS`, `ALL SPHERICAL`, `DESIGN F/6.3`, `TELEPHOTO RATIO 0.80`.
  The ratio is the vertex-to-focus length, 80.47, divided by the computed focal length, 99.98.
- `focus.closeFocusM`: `1000000000000000.0` → `1e15` (same value). `focus.description`: "Infinity-only patent
  reference; no finite-focus motion modeled." → "Infinity focus only; the patent gives no close-focus data." There is
  no `catalog.closeFocusM.marketing`, because no product source exists.
- `glass` on L1–L4 (new): `Unmatched (nD …, nG′ …; no Abbe number printed)` with the printed values. No catalog row
  is claimed. `glasscheck.mjs` reports each as unresolved by design, so the elements keep their constant index.
- Header comment: dropped the "no scale factor is applied" clause, because the patent itself prints focal length 100.
- `type`, `label`, `role`, `cemented` (`C1` on L3 and L4) and `doublets` (`C1`, surfaces 5–7) were checked and kept.

The coordinator had already set the file name, `key`, `name`, `visible` and the plain object keys.

In the analysis, the H1 now uses the model name. The scale sentence and the leftover "patent reference",
"validation", "engine" and "data file" wording were removed. The Tele-Tessar family is stated once as the nearest
documented product, with its source. The element glass lines now match the new `glass` strings.

Engine numbers are identical before and after:

- `built.mjs`: EFL 99.97654348426364, f/6.3, half-field 11.0033°, stop semi-diameter 6.408569182636037, total track
  80.46767248922589.
- `probe.mjs`: BFD 49.6287 with zero defocus.

`audit:surface` is OK. `audit:aperture` shows no rim limit, with the f-number within 3 %. `audit:image-circle` and
`audit:field-coverage` skip the file because it has no image format.

Open:

- **Rims (SD pass):** the rear rims (5.2) are smaller than the drawing shows (about 7.1, the same as the front
  member), as recorded above. (Closed 2026-11-17 by the semi-diameter pass below.)
- **Metadata:** there is no `lensMounts`, `imageFormat` or `closeFocusM.marketing`. The patent states no format or
  field, and no product is documented.

## 2026-11-17 — Semi-diameter pass against the patent figure

The source is US1485515A.pdf, page 1, the only figure, which shows the sole example. It was rendered at 300 and 600 dpi.
The scan is tilted about 0.95°, so heights were measured from the local axis.

The drawing is to scale along the axis, at 38.62 px per unit at 300 dpi:

| Span | Table | Drawing |
|---|---:|---:|
| r1 → r7 | 30.839 | 1191 px (the scale) |
| r1 → r5 | 28.199 | 28.17 |
| r1 → stop "×" | 9.949 | about 10.1 |

The r1 arc also confirms the scale across the axis: R = 18.091 gives a sag of 1.47 at the drawn 7.15 height, against
1.53 measured. The drawing is therefore read at its absolute scale, not for proportions only.

Drawing readings, top and bottom of the axis:

| Item | Drawn height |
|---|---:|
| L1 (square-cut; r1 and r2 at one height) | 7.10–7.15 |
| L2 r3 | 7.1 |
| L2 r4 (chamfered down from the top edge) | 6.2 |
| Stop opening | 5.84 |
| L3 r5 (bevelled up to r6) | 6.2 |
| r6 and r7 (L4's flat edge) | 7.07–7.15 |

The whole front member is drawn smaller than the f/6.3 axial beam: the real marginal ray reaches 7.93, 7.81, 7.77 and
7.37 at r1–r4. The ray floor therefore governs the front, and the drawing governs the rear.

| Surface | Before | After | Evidence |
|---|---:|---:|---|
| r1 | 8.3 | 8.1 | L1 is drawn square-cut. r2 was kept and r1 matched to it (floor 7.93); raising r2 would close the 0.13 air lens. |
| r2 | 8.1 | 8.1 | kept (floor 7.81) |
| r3 | 8.1 | 8.1 | kept (floor 7.77) |
| r4 | 8.1 | 7.4 | The drawing shows r4 chamfered to 0.87 of the element height. The floor is 7.37, rounded up. |
| r5 | 5.2 | 6.2 | figure |
| r6 | 5.2 | 7.1 | figure |
| r7 | 5.2 | 7.1 | figure |

The stop is unchanged at the engine's 6.41. No `gapSagFrac` change was needed.

Results after the change:

- `audit:surface` is OK.
- `audit:aperture` shows no rim limit, with the f-number within 3 %.
- `audit:image-circle` and `audit:field-coverage` skip the file (no image format).
- clearap at 26.5 mm image height shows no CLIPS-AXIAL and no BLOCKS-CHIEF.
- `built.mjs`: EFL 99.9765 and f/6.3 are unchanged. The half-field rises from 11.00° to 14.87°, now limited by r7, the
  largest field the final rims pass unblocked.

Wide-open geometric illumination against the baseline rims, with leave-one-out restore costs from rimcost:

| Field | Baseline | Final |
|---|---:|---:|
| 3.8° | 96.5 % | 99.0 % |
| 5.6° | 82.2 % | 97.2 % |
| 7.5° | 66.3 % | 92.3 % |
| 9.4° | 49.9 % | 81.5 % |
| 11.3° | 34.1 % | 66.7 % |

There is no loss at any field. The r1 cut costs 1.4 points at 11.3°, and the r4 cut 0.2 points at 3.8°. Both are
within the 3-point rule and both match the drawn shape.

The overlay of the model on the figure at matched scale is in the session scratch (`sd/merte/overlay.png`). The rear
member and its r5 bevel coincide with the drawing. The front member stays about 1 unit taller than drawn because of
the f/6.3 beam.

Metadata: nothing was added. The model is the patent's f = 100 normalisation with no documented product or format, so
`lensMounts`, `imageFormat` and `imageCircleMm` stay unset. The `name` uses the patent's own title, "Telephoto
Objective". The nearest documented product name, Tele-Tessar, is not supported for this patent.

Open:

- L1's edge is thinner than drawn (0.56 at 8.1, against about 1.2 at the drawn 7.1). This is a consequence of the
  f/6.3 beam floor.
