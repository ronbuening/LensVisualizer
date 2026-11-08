# Audit Log — SAMSUNG 60mm f/2.8 Macro ED OIS SSA

Patent: US 8,203,795 B2, Embodiment 5 / Tables 10–12 / Fig. 12 (PDF pp. 37 and 27)

## 2026-11-07 — Package history

The lens arrived in a reviewed lens package and was added as received. What the package established:

- Source: US 8,203,795 B2, Embodiment 5, transcribed whole and unscaled; image plane 106.0 mm behind S1. The S23–S24
  plate (2.8 mm, 1.51680/64.2) and the 1.0 mm gap G are kept as printed in `rearPlates`.
- Printed: radii, thicknesses, nd/νd, the S4 asphere (K = 0, A = −1.4452e−6, B = −2.54447e−9, C = D = 0), the stop
  row between S14 and S16, and Table 11's gaps at M = 0, −0.5 and −1.0. A transcription that had dropped a digit of
  the S4 B term (−2.5447e−9) was corrected to the printed −2.54447e−9 before any tracing.
- Derived: semi-diameters (none printed), estimated from the axial entrance-pupil envelope with clearance and rough
  Fig. 12 proportions, one value per group (12, 10.7, 8.8, 8.8, 9.4, 9.4, 10.4, 10.2, 10.2 mm front to rear), fixed
  before any pupil tracing. A uniform −5 % cap variant passed the geometry checks; +5 % failed them. The iris follows
  from F/2.86.
- First order: EFL 59.265 mm (patent 59.3); paraxial back focus behind the plate 0.972 mm against G = 1.0 mm, the
  0.028 mm residual kept.
- Focus: modelled at infinity only. Table 11's finite states were kept as evidence; the package's paraxial conjugates
  were 125.49 and 79.75 mm from S1 against the printed 124.92 and 79.41 mm.
- Vignetting: with the estimated rims, pupil sampling at 0°, 6.75° and 13.5° passed 208, 152 and 22 of 208 cells.
- Glass: all twelve elements were left unmatched with their printed nd/νd.
- Metadata: Samsung NX mount, APS-C, marketed 60 mm f/2.8, 0.187 m minimum focus, 12 elements / 9 groups. The
  inventor is written in the corpus form "Jae Myung Ryu" (the patent prints Jae-myung Ryu).

## 2026-11-08 — Deployment validation and production cleanup

Source re-read. Tables 10–12 (PDF p. 37) were re-read from 200 and 400 dpi renders: 24 surface rows (R, d, nd, νd),
the stop row, the three cemented pairs (S1–S3, S8–S10, S16–S18), the S4 asphere and Table 11's seven distances A–G in
three states. No mismatches against the file. The column heads print nd and νd and the text defines the d-line as
587.6 nm, so `indexReference: "d"` is correct. Table 11 heads the third column "M = 1.0" without its minus sign; the
text and Fig. 12 give M = −1.0. B + C = 12.94 mm and D + E = 33.72 mm in all three states, so G1, G3 and G5 are fixed.
Table 13 gives f3/f = 1.26, Expression 3 νd = 81.6 and a marginal ray ratio of 32.1 for Embodiment 5.

First order, patent / model: f 59.3 / 59.265 mm; F-number 2.86 / 2.86; 2ω 27.0° / 27.0°; track 106.0 / 106.0 mm;
G 1.0 / paraxial 0.972 mm; f3/f 1.26 / 1.255. Real-ray LSA at infinity 0.058 mm at full pupil, so no misprint is
suspected. Group focal lengths: G1 +31.33, G2 −20.09, G3 +74.42, G4 +40.63, G5 −73.82 mm. At the printed object
distances (124.9239 and 79.4080 mm from S1) the paraxial magnifications are −0.5007 and −1.0033, with the image 0.14
and 0.34 mm behind the printed plane. With the plane held, the engine's 0.5× and 1:1 rows focus at 125.60 and
79.78 mm from S1 (m −0.497 and −0.994), 231.57 and 185.75 mm object to image.

Maker-diagram comparison. No Samsung construction drawing was found; the only section is the patent's Fig. 12, drawn
to scale (stop about 8.5 mm against the engine's 8.48 mm). Read against it, the rims are 12–20 % small in G1, G4 and
G5: L1/L2 about 13.7 mm drawn (file 12), L3 about 11.3 (10.7), G4 12.2–12.7 (10.2–10.4), L12 about 11.8 (10.2). They
were not widened, because the repository does not fit rims to a figure reading. G2's rim (8.8) sits close to where S7
and S8 meet (y ≈ 9.35). Marketed construction (Imaging Resource, LensTip): 12 elements / 9 groups, 1 aspherical and
1 ED lens, 7 rounded blades, 0.187 m at 1:1, 52 mm filter, 84 mm length, 26.4° diagonal, released 2011. The model has
12/9, one asphere (S4) and one ED-class glass (L8). Embodiments 1–3 are all spherical; Embodiment 4 has the same counts
and length, and Embodiment 5 is kept.

Fields changed in this pass:

- Focus: `d` removed from S5, S10, STO and S20; `gaps` D5, D10, D15, D20 hold Table 11's B, C, D, E in the order
  ∞ / 0.5× / 1:1. `focus.closeFocusM` 1e15 (infinity only) → 0.185408 m, the printed A = 79.408 mm plus the 106.0 mm
  track; keyframes [0, 0.8029, 1], the middle one 185.408 / 230.9239 mm; `published: [1, 2]`; two first-surface
  conjugates at the printed A (124.9239 and 79.408 mm); the description rewritten. `catalog.closeFocusM.marketing`
  stays 0.187 because the model's 0.1854 m differs.
- Header comment replaced with the house block; `visible: true` added.
- `subtitle`: "US 8,203,795 B2 — Embodiment 5; qualified infinity-only patent reconstruction" → "US 8,203,795 B2,
  Embodiment 5 — probable production design".
- `specs`: nine qualifying lines → "12 ELEMENTS / 9 GROUPS", "DESIGN f = 59.3 mm", "DESIGN F/2.86",
  "1 ASPHERICAL SURFACE / 1 ELEMENT", "1:1 MACRO".
- Elements: labels "Source Ln" → "Element n"; specific roles; L3 type → "Pos. Meniscus (1× Asph)"; focal lengths added;
  `cemented` D1–D3. Ten glass labels → HOYA catalog equivalents (FDS90 ×4, BAC4, BSC7, FCD1, LAC14, TAF1, FC5), each
  matching the printed nd to five decimals and νd within 0.04. L2 (1.61780/63.4) and L3 (1.73968/49.0) stay unmatched
  (nearest catalog rows 1.61800/63.4 and 1.74330/49.2).
- L8: `apd: "inferred"` with a note. Samsung lists one ED element; 1.49700/81.6 is the only ED-class glass and the G3
  lens that Expression 3 sets for the OIS shift.
- `aperture.blades: 7`; rear plate label CG → FL (the text calls it a filter) and its source citation rewritten.
- `groups` G1 (S1–S5), G2 (S6–S10), G3 (S11–S14), G4 (S16–S20), G5 (S21–S22) and `doublets` D1–D3 added; top-level
  groups put in specification order.
- Analysis rewritten to the house skeleton: per-element sections, glass table, focus table, Image Stabilization and the
  Fig. 12 rim statement corrected (the rims do not follow Fig. 12); sources now cite the patent, Imaging Resource,
  LensTip and the NX flange distance. "Powered plane interface" for the flat S6 removed.

Results: EFL, FOPEN, half-field, stop radius (8.4827 mm) and infinity back focus unchanged; `audit:surface` OK;
`audit:aperture` within 3 % of the stated f-number with no rim limit; `audit:image-circle` and the field-coverage
audit do not flag the lens.

Open:

- Rims 12–20 % inside Fig. 12 in G1, G4 and G5 are kept, so the full-field corner is probably more heavily vignetted
  than the patent's marginal ray ratio of 32.1 implies.
- A paraxial-iris clear-aperture check flags S6 (8.8 mm against an 8.84 mm axial height with an 8.61 mm iris); with the
  engine's 8.48 mm iris the beam clears. Rim clearance at the 0.5× and 1:1 states was not traced separately.
- No source decides between Embodiments 4 and 5 for the production lens.
- The OIS shift of L8 is not modelled.
