# Lee US 2,012,822 A Example 1 audit

Status: hidden patent reference. No production lens is identified with this example.

## Literal source

Example 1 table on PDF page 3 (printed specification page 2); Figure 1 on PDF page 1. Signed normalized radii:
+1.2147, +3.107, +0.7327, +1.1855, +0.5042, −1.0516, +0.2903, +0.5939, −1.9062. Thicknesses D1–D5: 0.0881, 0.0838,
0.337, 0.0339, 0.1372. Separations S1–S3: 0.005, 0.005, 0.2294. nD / V: 1.6135 / 59.4, 1.6135 / 59.4, 1.6062 / 59.8,
1.6945 / 30.7, 1.6135 / 59.4. All lengths are scaled by exactly 100. The signs of R6 and R9 are read from the page
image, not from the OCR text. Five elements in four groups; sodium D-line indices.

## Authored choices

- Hidden patent reference; no marketed lens, mount or format is claimed.
- Iris 18 mm after R7 within S3, inferred only to give a physically clear iris position. The patent does not locate
  the stop.
- Iris radius set by the engine from the nominal f/1. Because of pupil aberration, real axial rays at exactly the full
  paraxial pupil radius are stopped by the iris; rays at up to 90 % of the radius pass.
- Clear semi-diameters estimated from exact on-axis ray heights plus a margin: 51, 50.5, 49, 48.5, 43.5, 41.5, 26, 25
  and 23.5 mm. No source semi-diameters are asserted.
- Back focus 32.17678887228511 mm, computed paraxially, with no refocus for best performance. EFL 100.14870855218444 mm,
  0.149 % above the nominal scale.
- Infinity focus only; `closeFocusM` uses the 1e15 placeholder.
- Historical nD / V retained, with no modern glass substitution. Colour is estimated from nD and V, so secondary colour
  is approximate.

## Package checks

The data file passed schema and geometry validation with no errors, and the engine EFL matched an independent
paraxial calculation. No element needed render trimming. Across the iris opening, the smallest clearance to the
preceding face (R7) is 8.91 mm and the clearance to the following face is 4.94 mm. Axial rays at 0, ±50 %, ±75 % and
±90 % of the pupil radius pass; ±100 % are stopped at the iris. Fans at 5°, 10° and 19.2° show vignetting. MTF curves
were not computed.

## 2026-11-16 — Deployment validation

Independent re-read of the patent page images rendered at 300 dpi (front page, Figure 1, Example 1 table, and the
Example 2 and 3 tables for comparison). Checked every value against the page image: 9 radii with their printed signs
(the patent prints + and − explicitly), 5 thicknesses, 3 separations, 5 nD, 5 V, the cemented L3/L4 interface and the
×100 factor on every length. No mismatches. Examples 1 and 2 print identical R1–R7, D1–D4 and S1–S3, which
cross-confirms the shared values. Front page: Horace William Lee, Leicester, assignor to Kapella Limited, Leicester;
Serial No. 736,161, filed July 20, 1934, British priority July 22, 1933; patented August 27, 1935.

Verdict: valid with notes. The transcription is exact and the model is 0.15 % from the patent's unit focal length
(Example 2 traces to −0.15 %, so this is table rounding). No production lens is documented. Kaprelian's 1949 survey
in the Journal of the SMPE (vol. 53, p. 91, Fig. 2i, reference 18) cites this patent as Lee's f/1 design. Lee was a
Taylor, Taylor & Hobson designer from 1913 to 1936, and Kapella Limited is the assignee of his other patents of that
period, such as GB 355,452.

First order (independent paraxial trace and the engine agree): EFL 100.149 mm, back focus 32.177 mm, R1–R9 length
91.94 mm, total length 124.117 mm, iris radius 21.098 mm at f/1. Printed glass type numbers: Chance 8065 for L1, L2 and
L5; 4317 for L3; L4 marked "not yet in the catalogue". Spherical aberration along the axis from the paraxial focus,
at pupil fractions 1.0 / 0.85 / 0.7 / 0.5: +9.42 / +1.27 / −0.17 / −0.37 mm. Example 2 shows +10.7 mm at full
aperture, so the overcorrected margin belongs to the design, not to a misprint. Real axial rays pass the paraxially
sized iris to about 91 % of the pupil radius; the full-radius ray reaches 24.12 mm at the iris plane, so the working
aperture is about f/1.1. Rims play no part in this.

Changes made:

- `maker`: "Kapella" → "Cooke". Lee worked at Taylor, Taylor & Hobson, and his other Kapella-assigned patents are filed
  under Cooke. `source.assignees` stays `["Kapella Limited"]`.
- `catalog.focalLengthMm.design`: 100.14870855218445 → 100.15 (rounded).
- JSDoc header rewritten in plain English (source, example, ×100 scale, D-line glass data, inferred iris, rims and
  back focus). No prescription value changed.
- Analysis rewritten to the house section order: identification with the product-link evidence, architecture with
  the patent's stated conditions, element-by-element notes, glass, focus and aperture, clear apertures, sources. The
  process section and the source-lead remark were removed.
- This audit: process wording removed from the earlier sections and the reproduction-instructions section dropped.

After the changes, `built.mjs` gives EFL 100.1487 mm, f/1 (FOPEN 1), iris radius 21.098 mm, default half-field
19.21°. `audit:surface`: OK, no validation errors. `audit:aperture --raise`: no surface below the on-axis beam.
`audit:image-circle` and `audit:field-coverage` skip the file (hidden, no image format). At f/1.1, `clearap.mjs`
reports no axial clipping and no blocked chief ray at 5°, 10° or 19.2°; at 19.2° the corner beam is vignetted 36 % at
R8 and 49 % at R9. Geometric transmission is 100 % to 4°, 86 % at 10° and 78 % at 12.2°.

Open:

- Name, key and subtitle still read "KAPELLA LEE 100mm f/1 PATENT REFERENCE". This looks like a retail 100 mm lens, and
  Kapella was the patent holder, not a lens brand. Rename, for example "H. W. LEE f/1 OBJECTIVE (US 2,012,822
  Example 1)".
- Specs "PATENT-ONLY RECONSTRUCTION" and "ESTIMATED STOP AND CLEAR APERTURES" → for example "DESIGN f = 1 (×100)",
  "F/1", "ALL SPHERICAL".
- `focus.description` says "Sentinel is not a product MFD"; reword in plain English.
- Glass labels → house form: `Unmatched (Chance 8065, nD 1.6135 / V 59.4)`, `Unmatched (Chance 4317, nD 1.6062 /
  V 59.8)`, `Unmatched (Chance unnumbered new glass, nD 1.6945 / V 30.7)`. All three resolve to no catalogue glass
  either way. Note that the Lee files on the 261123 branch use `indexReference` "d" for Chance nD, while this file uses
  "D", the patent's line.
- Rims vs Figure 1 (drawn close to scale, about 415 px per unit): L1, L2 and the cemented pair agree within about 3 %.
  The figure draws L5 at about 29 mm semi-diameter with a roughly 3 mm edge, against the model's 25 / 23.5 mm.
  Widening it gains at most 1.3 points of transmission at 12°. Leave it to the semi-diameter pass.
- No Cooke maker profile exists yet on this branch; it arrives with the 261123 Cooke files.
