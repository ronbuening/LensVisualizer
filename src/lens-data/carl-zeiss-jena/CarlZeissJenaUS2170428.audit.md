# Audit — US 2,170,428 (Robert Richter, Carl Zeiss), sole example

## Source and transcription

- Source: US 2,170,428, the drawing sheet (figure and table) and the specification page with the same table. The
  values refer to a focal length of 100 mm and are used without scaling.
- Transcribed: radii r1–r8 with their printed signs, thicknesses d1–d4, air spaces l1–l3, nd and ν for each lens. No
  source radius, thickness, air space or index was changed.
- Kept as a hidden patent reference: one configuration, no production lens identified.

## Inferred values

- Iris: midway in the 19 mm air space between L3 and L4 (9.5 mm behind r6). The patent prints no diaphragm.
- Clear semi-diameters: estimated (28, 28, 28, 19, 19, 19, 22, 22 mm). A first estimate of 25 mm at r4 and r5 made
  the L2 and L3 rims cross inside the 4.5 mm air space, so those rims were reduced to 19 mm; no rim overlap setting is
  used.
- Image plane: the computed paraxial back focus. The patent prints none.
- Dispersion: from the printed nd and ν on the normal line; no line indices are printed.

## Limits

- The estimated iris trims roughly the outer 4 % of the f/1.9 pupil radius, because the real marginal ray crosses the
  stop plane above the paraxial one.
- Oblique bundles at 10° and 20° are partly vignetted by the estimated rims. Image quality over the patent's 40° field
  is not claimed.

## 2026-11-16 — Deployment validation

Checked against the patent page images rendered at 300 dpi: all eight radii and their signs, the seven thicknesses and
air spaces, four indices and four Abbe numbers in both printed copies of the table (drawing sheet and specification).
The two copies agree, and the model matches them with no mismatch. Also checked: the front-page bibliography (Robert
Richter, assignor to the firm of Carl Zeiss, Jena; Serial No. 209,640 filed May 24, 1938; German priority May 31, 1937;
granted August 22, 1939; one claim) and the figure (four singlets, nothing cemented, every radius sign as drawn, L2
drawn with a bevelled rear rim, no diaphragm drawn).

Verdict: valid with notes. The patent describes the example as a projection objective. No catalogue, museum record or
collector reference found links it to a named Zeiss product, so the file stays a patent reference.

Changes:

- `source.patentNumber`: `US 2,170,428` → `US 2,170,428 A` (house form).
- `source.assignees`: `Carl Zeiss Jena` → `Carl-Zeiss-Stiftung` (the corpus form for "the firm of Carl Zeiss, Jena").
- `catalog.focalLengthMm.design`: 99.77549430250204 → 99.78 (rounded; still the computed EFL).
- Back focus (r8 to image): 63.210155829439294 → 63.2102 (rounded computed paraxial back focus).
- `focus.description`: rewritten in plain words. The iris is in the L3–L4 air space (it previously read "final air
  gap"), and the word "reciprocal" is dropped because the model keeps the patent's own photographing order.
- Plain-English header comment added to the data file.
- Analysis rewritten to the house section skeleton, with the bibliographic rows; this audit rewritten from process
  notes into a plain log.

First order after the changes (`built.mjs` / `probe.mjs`): EFL 99.7755 mm against the stated 100 mm (−0.22 %, within
the rounding of the printed radii; a single-digit misprint scan found no convincing candidate), f/1.9, paraxial back
focus 63.2102 mm, r1 to r8 60.70 mm, r1 to image 123.9102 mm, stop semi-diameter 16.61 mm, rim-limited half-field
25.08°. Element focal lengths: L1 +119.43, L2 +155.07, L3 −37.94, L4 +58.66 mm.

Audits: `audit:surface` OK. `audit:aperture`: within 3 % of the stated f-number, no rim limit, `--raise` lists no
surface. `audit:image-circle` and `audit:field-coverage` skip the file (hidden, no image format). Real-ray clearance at
the patent's 20° half-field (image height 36.3 mm): no axial clipping, chief ray clear at every surface; L4's 22 mm rims
vignette about 25 % of the oblique bundle on one side; tightest axial margins at r4 (18.53 against 19) and r5 (18.18
against 19).

Open:

- Name, subtitle and specs wording ("PATENT ONLY", "PATENT REFERENCE; RETAIL IDENTITY UNPROVED") and the key, for the
  cleanup pass.
- Optional glass label for L3: Schott SF1 matches at the d line (1.71736 / 29.51). The crown 1.6138 / 56.3 has no
  catalogue match.
- Rims against the figure, for the semi-diameter pass. The drawing shows L1 and L2 at about the same height, with L3 at
  about 0.74 and L4 at about 0.81 of L1's height; the model has 0.68 and 0.79. Figure readings are not applied here.
- Optional `catalog.imageCircleMm` (about 72.6 mm from the 40° field) so the image-circle audits can run.
- `aperture.fStops` gives a projection objective an iris scale. This is harmless, but the patent shows no iris.
