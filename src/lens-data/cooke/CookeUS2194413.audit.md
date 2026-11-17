# Audit — US 2,194,413 Example 1 (Warmisham / Wynne f/2)

## Source

US 2,194,413 A, Arthur Warmisham and Charles Gorrie Wynne, assigned to Taylor, Taylor & Hobson Limited. Filed
December 3, 1938 (Serial No. 243,828), British priority December 11, 1937, granted March 19, 1940. Three-page scan:
Figs. 1 and 2 on PDF p. 1, Examples 1 and 2 on PDF p. 2, and the same tables repeated in claims 3 and 4 on PDF p. 3.
Each example is printed at an equivalent focal length of 1.000 and F/2. The model uses Example 1, which Fig. 1
illustrates, with every length multiplied by 100.

## Transcription check

Every printed value was read from the page images at 300–500 dpi: 10 radii, 6 thicknesses, 3 air gaps, and 6 index /
Abbe pairs. The tables on p. 2 and p. 3 agree with each other. The data file matches them exactly at ×100, including the
two cemented interfaces (R4 between L2 and L3, R7 between L4 and L5) and every radius sign. R8 is printed −.4091 and the
file carries −40.91. Each sign agrees with Fig. 1: R7 bulges towards the object, so L4 is biconcave and L5 biconvex.
The central air gap S2 = 19.21 mm is kept whole and split 9.605 / 9.605 mm around the modelled stop.

## First-order results

Paraxial EFL 100.04 mm, against the patent's 1.000 × 100, a difference of +0.04 %. An independent paraxial trace of the
printed values gives the same result, 1.0003866. f/2.0 with the modelled stop; paraxial back focus 68.40 mm; vertex
length 78.18 mm; total track 146.58 mm. The patent prints no back focus and no close-focus data.

The patent conditions are met: rear radius of L1 25.04 f (claim 1: > 6 f), concave R6 0.3047 f (0.25–0.31), convex R8
0.4091 f (0.35–0.42), rear collective index 1.6437 (claim 2: > 1.63).

## Inferred values

- Stop: not printed, and the figure draws no iris. It is placed midway through S2, with a radius of 16.54 mm set for f/2.
- Semi-diameters: estimates (`sdSource: "heuristic"`), 29 / 29 / 28 / 26 / 20.3 / 20.3 / 23 / 23 / 24 / 24 mm.
- Image distance: the calculated paraxial back focus, 68.40 mm.
- Focus: infinity only.

## Validator results

`audit:surface` reports no errors. `audit:aperture` finds no surface below the f/2 axial ray. `audit:image-circle` and
`audit:field-coverage` skip the file (hidden, no image format).

Real-ray clearance was checked at the 35 mm motion-picture frame on a 2-inch lens, scaled to image heights of 26.8 mm
(15.0°) and 30.6 mm (17.05°). It shows no axial clipping and no blocked chief ray. The outer rims cut up to 28 % / 33 %
(front / rear) of the oblique bundle's width on one side at 15°, and 36 % / 44 % at 17°.

## 2026-11-16 — Deployment validation

An independent check re-read the patent page images. It covered the front-page bibliography, both Example 1 tables,
Fig. 1 (element count, cemented pairs, radius signs, stop) and the patent text on purpose and distortion. It also
reran the first-order and clearance checks above. Verdict: valid, with integration fixes; the transcription is exact
and the EFL is within 0.04 %.

The product link is a family association only. The patent improves on US 1,955,591, which Cooke's history gives as
the Speed Panchro patent, and it targets a 2-inch F/2 lens for 35 mm motion-picture film. No source names a production
lens built to this example.

Changes made in this pass:

- Header: added a plain JSDoc header giving the source, example, ×100 scale and the inferred stop, rims and back focus.
- `maker`: `Taylor Hobson` → `Cooke`, the corpus maker for Taylor, Taylor & Hobson.
- `source.patentNumber`: `US 2,194,413` → `US 2,194,413 A`, the house form.
- `source.example`: `{ label: "Figure 1", id: "1" }` → `{ label: "Example 1", id: "1" }`, as the patent prints it.
- `source.assignees`: `Taylor, Taylor & Hobson Ltd.` → `Taylor, Taylor & Hobson Limited`, as printed and as used in
  the corpus.
- L4 `type`: `Negative Meniscus` → `Biconcave Negative` (R6 −30.47, R7 +45.0).
- L5 `type`: `Positive Meniscus` → `Biconvex Positive` (R7 +45.0, R8 −40.91).
- L6 `type`: `Biconvex` → `Biconvex Positive`, the house form.
- Cemented pairs: added `cemented: "D1"` to L2 and L3 and `cemented: "D2"` to L4 and L5. Added
  `doublets` D1 (surfaces 3–5) and D2 (surfaces 6–8).
- Float noise rounded: d after surface 3 `15.120000000000001` → `15.12`; R6 `-30.470000000000002` → `-30.47`;
  R8 `-40.910000000000004` → `-40.91`; design EFL `100.03865670644076` → `100.04`.
- Analysis: rewritten to the house section structure.
- Audit: the process log was replaced by this audit.

No radius, thickness, index, Abbe number, stop position or rim was changed.

After the changes, `built.mjs` gives EFL 100.04 mm, f/2.0 and stop radius 16.54 mm. `probe.mjs` gives back focus
68.40 mm with zero defocus. `audit:surface` reports no errors, `audit:aperture` reports no rim limit, and the
image-circle and field-coverage audits skip the file (hidden, no image format).

Open:

- Wording for the cleanup pass:
  - `key` still begins `taylor-hobson-`.
  - The subtitle reads "FIGURE 1; HIDDEN QUALIFIED REFERENCE".
  - Specs read "PATENT ONLY; NO RETAIL MATCH" and "ESTIMATED STOP AND RIMS".
  - `focus.description` uses "Computed paraxial BFD".
  - The name could state the patent and example.
- Rims for the SD pass: Fig. 1 is drawn to scale and shows about 26.5 mm for L1 and the front doublet, about 21 mm at
  R5 and R6, and about 23 mm for the rear doublet and L6. The file has 29 / 29 / 28 / 26 at the front and 24 / 24 at L6,
  so `sdSource` could become `figure-measured` after that pass.
- Glass labels: none are given. Optional catalogue equivalents (1.6468 / 33.8 lies in the SF2 region) are for the
  glass pass.
- Element `role` strings are absent.
- The viewer's default half-field (about 24°) exceeds the patent's 35 mm motion-picture coverage (about 15–17°).
