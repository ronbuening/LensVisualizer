# ZEISS MERTÉ 100mm f/6.3 PATENT REFERENCE — Audit Log

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
- **Dispersion:** no νd is authored because the patent prints only nD and nG′. The model is monochromatic.

## Validator Results

- `audit:surface`: OK.
- `audit:aperture`: no rim limit; f/6.3 within 3 %.
- `audit:image-circle` and `audit:field-coverage`: skipped (hidden file, no image format).
- `clearap.mjs`: no glass rim cuts the axial f/6.3 beam. The real marginal ray meets the stop plane at about 6.59,
  against the paraxial 6.41, so the outermost zone of the nominal beam is clipped at the iris.
- The rear rims at 5.2 vignette the off-axis beam by 19–35 % (one side) at 10 mm image height.

## 2026-11-16 — Deployment validation

I re-read the patent independently from the page images. I checked every radius and sign, thickness, air space,
nD and nG′, the cemented pair, the printed iris position, and the element shapes in the drawing. I also checked the
first-order values against the patent's focal length 100 and its telephoto condition. The transcription is exact, and
the computed focal length is 99.98, −0.02 % from the printed 100.

Verdict: valid with notes. The patent names no product. The Contax Tele-Tessar K 18 cm f/6.3 has the same
four-element, three-group count (Pacific Rim Camera), but no source ties this patent to a specific Tele-Tessar. The
file remains a hidden patent reference with no production match.

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
  generic. The `key` still reads `zeiss-merte-…`.
- **Rims (SD pass):** the drawing shows the rear member about as tall as the front member (about 7.1 against 7.15
  units at the drawing's axial scale). The rear rims of 5.2 are therefore smaller than drawn and vignette the off-axis
  beam. The drawing's front member (about 7.15) is itself smaller than the f/6.3 entrance pupil (7.93), so the drawing
  is not to aperture scale.
- **Dispersion (optional):** estimated νd values of about 61 / 39 / 35.7 / 66–67 come from modern glasses that match
  both printed nD and nG′. They would follow the estimated-Abbe precedent of the Tessar US 721,240 file. Otherwise the
  model stays monochromatic.
