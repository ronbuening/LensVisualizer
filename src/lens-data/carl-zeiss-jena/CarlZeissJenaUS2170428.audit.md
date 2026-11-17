# Audit — US 2,170,428 (Robert Richter, Carl Zeiss), sole example

## Source and transcription

- Source: US 2,170,428, the drawing sheet (figure and table) and the specification page with the same table. The
  values refer to a focal length of 100 mm and are used without scaling.
- Transcribed: radii r1–r8 with their printed signs, thicknesses d1–d4, air spaces l1–l3, nd and ν for each lens. No
  source radius, thickness, air space or index was changed.
- Kept as a hidden patent reference: one configuration, no production lens identified. (Closed 2026-11-17: the file
  is now visible as CARL ZEISS JENA 100mm f/1.9 (US 2,170,428 Design); still no production lens identified.)

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
  cleanup pass. (Done 2026-11-17.)
- Optional glass label for L3: Schott SF1 matches at the d line (1.71736 / 29.51). The crown 1.6138 / 56.3 has no
  catalogue match. (Done 2026-11-17: L3 labelled SF1; the crown does match Hoya BACD6, see below.)
- Rims against the figure, for the semi-diameter pass. The drawing shows L1 and L2 at about the same height, with L3 at
  about 0.74 and L4 at about 0.81 of L1's height; the model has 0.68 and 0.79. Figure readings are not applied here.
  (Closed 2026-11-17 by the semi-diameter pass below.)
- Optional `catalog.imageCircleMm` (about 72.6 mm from the 40° field) so the image-circle audits can run.
- `aperture.fStops` gives a projection objective an iris scale. This is harmless, but the patent shows no iris.
  (Closed 2026-11-17: fixed f/1.9 aperture.)

## 2026-11-17 — Cleanup and wording pass

Fields changed in the data file:

- `subtitle`: "1939 FOUR-LENS PROJECTION OBJECTIVE; PATENT ONLY" → "US 2,170,428 A, sole example — Ernostar-type
  projection objective".
- `catalog.specs`: "4 ELEMENTS / 4 GROUPS", "PATENT REFERENCE; RETAIL IDENTITY UNPROVED", "ESTIMATED STOP AND RIMS",
  "INFINITY ONLY" → "4 ELEMENTS / 4 GROUPS", "DESIGN F/1.9", "ALL SPHERICAL", "PROJECTION OBJECTIVE".
- `focus.closeFocusM`: 1000000000000000.0 → 1e15 (same value). `focus.description` → "Infinity focus only; the patent
  gives no close-focus data." The iris position and the paraxial image plane stay stated in the header comment and the
  analysis.
- Element `type`: L1 and L4 "Biconvex" → "Biconvex Positive"; L3 "Biconcave" → "Biconcave Negative"; L2 stays
  "Positive Meniscus". Labels stay L1–L4, the patent's own lens numerals.
- Element `role`: added a plain optical role to each lens.
- Glass labels (exact rows, checked against the printed nd / ν):
  - L1, L2, L4: none → "BACD6 (Hoya)", nd 1.613753 / νd 56.378 against 1.6138 / 56.3 (Δnd −0.00005, Δνd +0.08).
  - L3: none → "SF1 (Schott)", nd 1.71736 / νd 29.51 against 1.7174 / 29.5 (Δnd −0.00004, Δνd +0.01).
  - The trace keeps the printed nd; the labels supply the dispersion curves.
- Header comment: Ernostar-type arrangement and "no production lens documented" stated once; glass paragraph updated
  for the two labels; "the aperture audit finds no rim limit" reworded as "no rim cuts the f/1.9 axial beam".

Analysis: H1 now uses the lens name; the "patent reference" wording is removed; the no-product statement is one sentence;
the glass lines and glass table name BACD6 and SF1 as catalogue equivalents; "Verification Summary" is renamed "Model
Scope and Limitations", and the misprint-scan wording now describes the source, not the check.

Engine numbers before and after are identical: EFL 99.7755 mm, f/1.9, paraxial back focus 63.2102 mm, stop
semi-diameter 16.611 mm, rim-limited half-field 25.08°, total length 123.9102 mm. `audit:surface` OK; `audit:aperture`
within 3 % of the stated f-number, no rim limit, and its raise list is empty.

Open:

- Rims against the figure (semi-diameter pass): the drawing shows L3 at about 0.74 and L4 at about 0.81 of L1's height;
  the model has 0.68 and 0.79. (Closed 2026-11-17 by the semi-diameter pass below.)
- `aperture.fStops` (1.9 to 16) is not sourced: the patent describes a projection objective and shows no iris.
  (Closed 2026-11-17: fixed f/1.9 aperture.)
- Optional `catalog.imageCircleMm` (about 72.6 mm from the 40° field) so the image-circle audits can run.
- The page was not viewed in the running site: the dev server serves the main checkout, not this worktree.

## 2026-11-17 — Semi-diameter pass against the patent figure

Source: the figure on the drawing sheet of US 2,170,428 (page 1), the only cross-section, of the sole example. It was
measured at 600 dpi on the lower side of the axis (the upper side carries the r1–r8 leader lines), with the upper side
used as a check. The drawn element tops sit about 15 px above the axis line for L1 and L2, so each half-height is half
the full drawn height.

Scale: the drawn vertices fall at 1672, 1838, 1850, 2245, 2345, 2385, 2795 and 2960 px along the axis. The spans give
21.6, 20.8, 22.2, 20.0, 21.6 and 20.6 px/mm for d1, d2, l2, d3, l3 and d4, and 21.2 px/mm from r1 to r8 (60.7 mm), so
the drawing is to scale axially within about 5 %. The scale across the axis agrees: at the drawn rim of L4, the r7
and r8 arcs meet the edge where the printed radii put them (drawn edge 1.27 mm, computed 1.19 mm at the drawn height),
and L1's front sag at the rim matches r1 within reading error.

| Surface | Before | Drawn | Ratio | After | Evidence |
|---|---:|---:|---:|---:|---|
| 1, 2 (L1) | 28 | 26.8 | 0.96 | 28 | within noise; kept |
| 3 (L2 front) | 28 | 25.4 | 0.91 | 25.4 | the front curve meets L2's cylindrical edge at 25.4 |
| 4 (L2 rear) | 19 | 20.7 | 1.09 | 20.7 | the bevel meets the rear curve at 20.7 (top 21.0, bottom 20.5) |
| 5, 6 (L3) | 19 | 19.8 | 1.04 | 19 | within noise; 19.8 would also need a looser L2/L3 gap check |
| 7, 8 (L4) | 22 | 21.5 | 0.98 | 22 | within noise; kept |

L2 is the one element changed. The drawing shows it with a front rim lower than L1's, a cylindrical edge, and a bevel
down to a rear rim that stands above L3's. The previous 28 / 19 pair drew it as tall as L1 with its rear corner level
with L3. The new pair puts L2's front-to-rear rim ratio at 1.23 (drawn 1.23, previously 1.47), and the step from L2's
rear face down to L3 now runs the way the drawing has it. No `gapSagFrac` was needed: the L2/L3 gap check reads at
L3's 19 mm rim.

Clearance and light: the f/1.9 axial marginal ray reaches 23.99 mm at surface 3 and 18.53 mm at surface 4, below the
new rims. At the patent's 20° half-field the chief ray clears every surface and the full oblique bundle reaches
19.51 mm at surface 3 and 10.51 mm at surface 4. Corner illumination is unchanged: 79.0 % at 12.2°, the edge of the
default analysis field, and 41.4 % at 19.9° on a scratch copy given the patent's 40° field. Both are the same before
and after; the restore test wins back 0.0 points for either face. The engine half-field stays 25.08° (limited by
L1's front rim), and f/1.9 and the 16.61 mm stop radius are unchanged. The surface validator reports no errors, and
the aperture audit finds no rim limit and lists nothing to raise.

Metadata, sourced from the patent text, which describes the example as a projection objective and draws no iris:
- `catalog.lensMounts`: none → `projection-lens`.
- `aperture.fStops`: 1.9 to 16 → `[1.9]`, with `maxFNumber` 1.9 (fixed aperture).
- `imageFormat` stays unset: the patent names no film or slide format.
- `imageCircleMm` stays unset: the patent gives only an approximate angular field (about 40°, about 72.6 mm at
  f = 100), not a printed image diameter.

Name: no product name is documented for this example, so the descriptive `name` stands.

Open:

- `catalog.imageCircleMm`: only if a source states an image diameter or film format. Without it the analysis tabs
  sample to 12.2°, the default 135-format corner, not to the patent's 20°.
