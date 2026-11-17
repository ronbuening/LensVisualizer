# BAUSCH & LOMB 100mm f/1.5 (US 2,124,356 Design) — audit log

## Source

US 2,124,356, Wilbur B. Rayton, assignor to Bausch & Lomb Optical Company, Rochester, N.Y. Filed February 8, 1937
(Serial No. 124,599); granted July 19, 1938. Two scanned pages: the drawing sheet, which carries the section and a
prescription table, and the specification with the same table in col. 1 and four claims. The patent has one numerical
example, headed "1:15" (f/1.5, the decimal point lost in print), "f = 100" and "field = 42°". The model transcribes it
unscaled.

## Transcription

Every value was read from the page images, not the OCR text layer, which corrupts several numbers. The drawing-sheet
table and the specification table agree.

- Radii R1–R10: 67.20, 309.2, 38.36, 107.22, 269.2, 23.68, 207.0, 23.4, 57.0, 224.2. The scan prints magnitudes only.
  The signs (+, +, +, +, −, +, +, −, +, −) follow the figure and the text: L1 and L2 are positive menisci convex to
  the object; L3, L5 and L7 are biconvex; L4 and L6 are biconcave; R8 is "concave toward the diaphragm"; claim 3 gives
  the other rear junction as convex toward the front.
- Thicknesses T1–T7: 10.8, 12.1, 7.8, 2.0, 22.7, 3.6, 8.0. Air spaces: S1 = 0.52; S2 = 12.32 (L4 to the diaphragm);
  S3 = 4.08 (diaphragm to L5).
- Indices D and Abbe numbers ν: 1.6369/56.0, 1.6707/47.4, 1.4644/66.0, 1.6890/30.9, 1.6574/50.8, 1.54832/53.3,
  1.6574/50.8. "D" is the sodium D line, so the elements use the sodium-D index reference.
- Cemented groups: L2–L4 and L5–L7 (claims 1–4).

There are no mismatches. There are no aspheres and no focus states.

## Values not printed by the patent

- Back focus: the computed paraxial back focal distance, 41.193 mm from R10.
- Clear radii: estimated (sdSource heuristic). L1 36 mm; R3–R5 30 mm; R6 20.77 mm; R7–R10 21 mm. The R7–R10 values
  are held by the rim-slope limit of the steep R8 (−23.4 mm). (Superseded 2026-11-17: R6 19.3 mm and R7 19.4 mm with
  a land to 21 mm, from the semi-diameter pass below.)
- Stop radius: sized for f/1.5 (paraxial 18.91 mm). The patent prints the diaphragm position but not its diameter.
- Aperture scale (f/1.5 to f/16) and the infinity-only focus marker.

## First-order check

EFL 100.12 mm against the printed f = 100 (+0.12 %, within four-figure table rounding). f/1.5 with an entrance-pupil
radius of 33.37 mm. The chief ray at the patent's 21° half-field lands 38.22 mm from the axis. Group focal lengths:
L1 +132.5 mm, front triplet −137.1 mm, rear triplet +83.0 mm. Claim 2's thickness relation holds: L5 is 22.7 mm of the
34.3 mm rear group, 0.66. The stronger of L5 and L7 (f +33.3 against +69.9 mm) faces the diaphragm, as the text says.

## Section figure

The drawing shows seven elements in three groups, two cemented triplets, the element shapes and the diaphragm X in the
air space between the triplets, all as modelled. Measured at the figure's own scale (about 16.9 px per mm from the
element thicknesses), the drawn radii are about 33.7 mm for L1, 29.3 mm for the front triplet, 18.6 mm for the R6
opening and 22.1 mm for the rear triplet. The figure draws S1 several millimetres wide, so it is only approximately to
scale. (Corrected 2026-11-17: re-measured at 600 dpi the scale is 32.7 px/mm, 16.35 at 300 dpi, and the drawn radii are
about 34.9, 30.4, 19.3 and 23.1 mm; see the semi-diameter pass below.)

## 2026-11-16 — Deployment validation

The validation was an independent re-read of both page images at 300 dpi. It covered the bibliographic data, every
radius with its sign, every thickness and air space, all indices and Abbe numbers, the printed stop position, the
cemented groups and the section figure. A separate paraxial trace and a three-dimensional real-ray trace checked the
model. Verdict: a faithful transcription of the sole example, valid as a hidden patent reference (closed 2026-11-17:
the coordinator has since made the file visible). No Bausch & Lomb
product is documented for this example: the Bausch & Lomb Raytar, Baltar and Super Cinephor lines are rated f/2.0 or
slower (Eastman Museum records, CineLensWiki), and Rayton's 1937 f/0.59 lens is a different astronomical design.

Changes:

- `source.patentNumber`: "US 2,124,356" → "US 2,124,356 A" (house form).
- R6 `sd`: 21 → 20.77. At 21 mm the rim of the deep concave R6 reached 0.42 mm behind the printed diaphragm plane.
  20.77 mm is the largest radius that keeps it in front: the stop-plane contact height is 20.777 mm. The real f/1.5
  axial ray meets R6 at 19.27 mm, and no traced field ray reaches 20.77 mm there, so no light is lost. A rim cut would
  clip at the same height, so the smaller radius is the simpler change.
- Element types: L3, L5, L7 "Biconvex" → "Biconvex Positive"; L4, L6 "Biconcave" → "Biconcave Negative".
- Cemented tags added: L2–L4 `cemented: "T1"`, L5–L7 `cemented: "T2"`. `doublets` added: T1 (3–6) and T2 (7–10).
- Spec "PATENT REFERENCE; NOT A VERIFIED RETAIL BALTAR" → "PATENT REFERENCE". No source links this example to the
  Baltar line.
- `catalog.focalLengthMm.design`: 100.12374408983965 → 100.12. Last gap: 41.193019275680484 → 41.193 (the paraxial
  back focus, rounded).
- Added a JSDoc header stating the source, the example, the unscaled transcription and the inferred values.
- Rewrote the analysis, which had been a copy of the package notes, to the analysis specification. Replaced this file,
  which was a byte copy of the analysis, with this audit log.

After the changes, `built.mjs` gives EFL 100.124 mm, f/1.5 (stop radius 18.91 mm), back focal distance 41.193 mm and
total length 125.113 mm. `audit:surface`: OK, no validation errors. `audit:aperture`: no surface below the on-axis ray;
within 3 % of the stated f-number; no rim, trace or iris limit. `audit:image-circle` and `audit:field-coverage` skip the
lens because it is hidden and has no image format. A real-ray grid trace with these rims passes about 92 % of the
f/1.5 bundle at 10.5° and 29 % at 21°; the chief ray is not blocked.

Open:

- Name, key and subtitle wording ("RAYTON 100 mm f/1.5 PATENT REFERENCE", "1938 SOLE EXAMPLE; RETAIL IDENTITY
  UNPROVED"), the specs "SOURCE STOP; ESTIMATED RIMS" and the `focus.description` text are for the cleanup pass. A
  maker-led name would read "BAUSCH & LOMB …". (Closed 2026-11-17: the coordinator set the name and key, and the
  cleanup pass below rewrote the subtitle, specs and focus text.)
- The maker "Bausch & Lomb" needs a `MAKER_PREFIXES` entry (prefix "BAUSCH & LOMB", slug `bausch-lomb`) and a maker
  details entry. Without them, the slug derives as "bausch" or "bausch-&-lomb". (Prefix closed 2026-11-17; the maker
  details entry is still open.)
- Rims against the figure, for the SD pass: L1 36 mm against about 33.7 mm drawn; R6 20.77 mm against about 18.6 mm
  drawn (the real axial ray needs 19.27 mm); the rear triplet 21 mm against about 22.1 mm drawn, with R8 limiting it.
  (Closed 2026-11-17 in the semi-diameter pass below.)
- Element labels ("L1" to "L7") and roles; optional glass-class labels (SK18, BaF10, FK3, SF8, SSK5 and BaLF5 types are
  the nearest coordinates, none an exact historical identification). (Closed 2026-11-17 in the cleanup pass below.)
- Optional: `catalog.imageCircleMm` about 76.9 mm from the patent's 42° field at f = 100, if the analysis tabs should
  use the patent field.

## 2026-11-17 — Cleanup and wording pass

The optics are unchanged: no radius, thickness, index, Abbe number, rim, stop or gap was edited.

Data file:

- `subtitle`: "1938 SOLE EXAMPLE; RETAIL IDENTITY UNPROVED" → "US 2,124,356 A, sole example — Sonnar-type 1-3-3
  objective".
- `specs`: ["7 ELEMENTS / 3 GROUPS", "PATENT REFERENCE", "SOURCE STOP; ESTIMATED RIMS", "INFINITY ONLY"] →
  ["7 ELEMENTS / 3 GROUPS", "ALL SPHERICAL", "DESIGN F/1.5", "TWO CEMENTED TRIPLETS"].
- `focus.closeFocusM`: 1000000000000000.0 → 1e15 (same value). `focus.description`: "Infinity-only patent reference;
  computed paraxial BFD; retail identity not established." → "Infinity focus only; the patent gives no close-focus
  data."
- Cemented ids T1/T2 → C1/C2 on L2–L4 and L5–L7, and the two `doublets` texts to match.
- Roles added to all seven elements. Labels stay "L1" to "L7", the patent's own numerals.
- Glass labels added. L3 → "FSL3 (OHARA)": at the sodium D line the catalogue curve gives nD 1.46444 and
  νD 65.93 against the printed 1.4644 and 66.0 (Δn +0.00004, Δν −0.07). Schott FK3 and Hoya FC3 fail the Abbe window
  (Δν −0.24). No catalogue row matches the other six within |Δn| ≤ 1e-4 and |Δν| ≤ 0.15. The nearest are SK18 type
  for L1 (Δn +0.0015), BaF10 type for L2 (Δn −0.0008), SF8 type for L4 (Δn −0.0003, Δν +0.17), SSK5 type for L5
  and L7 (Δn +0.0009) and BaLF5 type for L6 (Δn −0.0010). These keep "Unmatched (<class>, nD … / V …)" labels with
  the printed values.
- Header comment: dropped "unscaled" (the patent itself prints f = 100) and "patent reference only"; added the
  Sonnar-type arrangement and the glass note.

Analysis: the H1 is now the model name. The product paragraph is condensed to one statement that no production lens
is documented, with the Raytar and Super Cinephor evidence; the Baltar mention is removed. The glass section and the
element glass lines follow the new labels. "Model Verification" is renamed "Model Scope and Limitations". The
CineLensWiki source line no longer names the Baltar series.

Engine numbers, identical before and after this pass (`built.mjs`, `probe.mjs`): EFL 100.124 mm, f/1.5, stop radius
18.91 mm, back focal distance 41.193 mm, half-field 24.16°, total length 125.113 mm. `audit:surface`: OK, no
validation errors. `audit:aperture`: within 3 % of the stated f-number; no rim, trace or iris limit.

Open:

- Bausch & Lomb maker details entry (`makerDetails.ts`).
- Rims against the figure, for the SD pass: L1 36 mm against about 33.7 mm drawn; R6 20.77 mm against about 18.6 mm
  drawn (the real f/1.5 axial ray needs 19.27 mm); the rear triplet 21 mm against about 22.1 mm drawn, held by R8's
  rim-slope limit. (Closed 2026-11-17 in the semi-diameter pass below.)
- The `fStops` list (f/1.5 to f/16) is a conventional scale; the patent prints only f/1.5.
- Optional: `catalog.imageCircleMm` about 76.9 mm from the patent's 42° field at f = 100.

## 2026-11-17 — Semi-diameter pass against the patent figure

Source: US2124356A.pdf, page 1, the single section drawing of the sole example, rendered at 600 dpi. The drawing has
no dash-dot axis, so the axis is the midline of L1's flat top and bottom edges (row 2669). Scale: vertex crossings
on the axis row give L1 352 px for 10.8 mm, the front triplet 721 px for 21.9 mm and the rear triplet 1121 px for
34.3 mm, that is 32.6, 32.9 and 32.7 px/mm; 32.7 px/mm is used. The R6 arc from its vertex to its drawn end (sagitta
321 px, half-chord 631 px) fits a radius of 23.9 mm against the printed 23.68, which confirms the same scale across
the axis. The air spaces are not to scale (S1 is drawn about 5 mm wide against 0.52 mm), so only the element heights
are read. The earlier reading of 16.9 px/mm at 300 dpi was about 3 % too large, so the earlier figure radii were
about 3 % too small.

| Surface | Before | Drawing | After | Evidence and decision |
|---|---:|---:|---:|---|
| 1, 2 (L1) | 36 | 34.9 | 36 | 3 % from the drawing, within noise. Kept. |
| 3–5 (front triplet) | 30 | 30.4 | 30 | Within noise. Kept. |
| 6 (L4 rear) | 20.77 | 19.3 | 19.3 | The drawn end of the deep concave face, 2.1 mm in front of the diaphragm stroke. It is just above the real f/1.5 axial ray (19.27 mm); no light is lost. |
| 7 (L5 front) | 21 | 19.4, chamfer to 23.1 | 19.4, land to 21 | The drawing ends the optical face at 19.4 mm and chamfers the edge. A `rimExtensionSd` land to 21 mm keeps the element edge at the triplet height. |
| 8–10 (rear triplet) | 21 | 23.1 | 21 | The drawing takes R8 almost to a hemisphere. At 23.1 mm R8's rim slope is 80.8° against the 64.2° limit, so the validator refuses it. The square rear triplet stays at 21 mm, the largest height R8 allows. |

Light, against the committed rims (app vignetting curve, full pupil, wide open, 0–12.2°): unchanged to 4.1°. Worst
loss 1.4 points at 8.1° (96.1 → 94.7 %). Corner 82.6 → 82.1 %. All of the loss comes from the R7 cut: restoring R7
wins back 1.4 points and restoring R6 wins back none. This is within the 3-point allowance, and the cut matches a
feature the drawing shows. A separate real-ray grid at the patent's own field: 10.5° 91.9 → 90.6 %, 21° 28.7 → 28.7 %,
24° 12.6 → 12.6 %. The chief ray is unblocked out to 24°.

After the change: `built.mjs` gives EFL 100.124 mm, f/1.5, stop radius 18.91 mm, back focal distance 41.193 mm and
half-field 24.16°, all as before. `audit:surface` is OK. `audit:aperture` reports no surface below the on-axis ray and
no rim, trace or iris limit. `audit:image-circle` and `audit:field-coverage` skip the lens because no image format is
set. The scratch tool `clearap.mjs` cannot trace this lens: its intersection search starts at the vertex plane, where
the ray height exceeds R6's radius. The independent sphere-intersection trace above stands in for it.

Metadata: no change. No production lens is documented, so no mount, image format or marketing focal length or
f-number can be sourced. The patent states a 42° field but no image diameter, so `catalog.imageCircleMm` (about
76.8 mm at f = 100) stays unset. The `fStops` scale is kept, because the patent describes a photographic objective with
a diaphragm. The name "BAUSCH & LOMB 100mm f/1.5 (US 2,124,356 Design)" names the patent design and no product; no
product name exists to match.

Open:

- The drawn 23.1 mm rear triplet would need `checks.maxRimAngleDeg` 81 for R8. It would also gain corner light: in the
  real-ray grid, 10.5° goes from 90.6 to 94.3 % and 21° from 28.7 to 39.3 %. This is the coordinator's call. (Closed
  2026-11-17: applied, see the next paragraph. The 94.3 % at 10.5° assumed R7 at 23.1 too; with the R7 face kept at
  19.4 it is 90.6 %.)
- Bausch & Lomb maker details entry (`makerDetails.ts`).

Follow-up on the coordinator's instruction, the same day. The rear triplet now takes the drawn height: R8, R9 and R10
go from 21 to 23.1 mm, and R7's land (`rimExtensionSd`) goes from 21 to 23.1 mm. R7's optical face stays at 19.4 mm,
where the drawing starts its chamfer. At 23.1 mm, R8 (−23.4 mm) meets the rim at a slope of 80.8°. `checks.maxRimAngleDeg`
is set to 81, the smallest whole degree that admits it; 80 is refused. The rows above for surfaces 7 and 8–10 therefore
read "land to 23.1" and "23.1" in the final file. With the final rims, `built.mjs` gives EFL 100.124 mm, f/1.5, stop
radius 18.91 mm and back focal distance 41.193 mm. The engine half-field rises from 24.16° to 25.73°, because R10 no
longer limits it. `audit:surface` is OK and `audit:aperture` reports no rim, trace or iris limit. `clearap.mjs` at
Y = 38.39 mm (ω 21.09°) shows no BLOCKS-CHIEF, with the chief ray at 11.0, 14.2 and 16.0 mm on R8–R10; its axial
search still cannot start past R6, the tool limit described above. `rimcost --loo` against the committed rims gives a
worst loss of 1.4 points at 8.1°, all from the R7 face cut, and the corner (12.2°) goes from 82.6 to 84.9 %. The
real-ray grid at the patent's field, against the committed rims: 10.5° 91.9 → 90.6 %, 15° 68.6 → 77.7 %,
18° 49.9 → 60.3 %, 21° 28.7 → 39.3 % and 24° 12.6 → 21.1 %.
