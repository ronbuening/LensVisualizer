# CARL ZEISS JENA 100mm f/1.2 (US 2,141,733 Design) — audit log

## Source

US 2,141,733 A, *Lens System*. Inventor Ludwig Bertele, Dresden; assignor to Zeiss Ikon Aktiengesellschaft, Dresden. Priority Germany July 20, 1937; filed in the US October 28, 1937 (Serial No. 171,459); granted December 27, 1938. Four claims, two numerical examples (Figs. 1 and 2). The patent states a focal length of 100 mm, a relative aperture of 1:1.2 and a picture angle of ±10°.

The model is the second example (Fig. 2), the lower table on the first page of the specification, at the patent's own scale. This is a patent design only; no production lens is identified with it.

## Transcription

Radii (mm): +92.28, +461.21, +53.61, +137.78, −271.11, +32.44, +52.17, flat, +286.33, flat.

Thicknesses and air spaces (mm): d1 14.44, l1 0.56, d2 16.39, d3 16.11, d4 12.78, l2 23.61, d5 10.00, l3 0.00, d6 5.56.

nd / ν: 1.6664 / 48.6, 1.6203 / 60.2, 1.4645 / 65.7, 1.7552 / 27.5, 1.7015 / 41.2, 1.7015 / 41.2. The patent labels the index nd, so the helium d line is used.

Surfaces 3 to 6 bound a cemented triplet. The two rear lenses are separate; the printed air space l3 = 0.00 means they touch on the axis only.

The first example (Fig. 1) prints R7 = +5.17 for its single rear lens, probably a misprint of +52.17. It is not modelled and nothing was taken from it.

## Values not printed in the patent

- Stop: placed 12 mm behind R6, splitting the printed 23.61 mm air space as 12 + 11.61. The patent draws no diaphragm.
- Semi-diameters (mm): 44, 44, 42, 42, 42, 28, 25, 25, 25, 25. All are estimates.
- Back focus: the computed paraxial value, 30.0533 mm.

## First-order results

Focal length 100.0095 mm (patent 100; +0.01 %). Back focus 30.0533 mm. First to last surface 99.45 mm; first surface to image 129.50 mm. f/1.2 with a stop semi-diameter of 18.06 mm and an entrance-pupil radius of 41.67 mm.

Claim limits: R6 / f = 0.32 (limits 0.28 to 0.5); meniscus thickness / f = 0.45 (limits 0.4 to 0.6).

## 2026-11-17 — Deployment validation

Checked against the patent page images (400 dpi crops of the Fig. 2 table and the drawing), independently of the original author's notes: all 10 radii with their signs, 6 thicknesses, 3 air spaces, 6 nd and 6 ν values, the cemented surfaces, the element shapes and count against Fig. 2, and the front-page names and dates. No transcription mismatch was found.

Verdict: valid, with integration fixes. The model reproduces the patent's 100 mm focal length to 0.01 %. No product link: published Sonnar histories list Bertele's f/2 and f/1.5 lenses but no f/1.2 lens, so the design is kept as a patent design without a product name (shown publicly since the cleanup pass of the same date).

Changes made:

- `maker`: "Zeiss Ikon" → "Carl Zeiss Jena", the house maker under which Bertele's other Zeiss Ikon patents are filed.
- `source.patentNumber`: "US 2,141,733" → "US 2,141,733 A" (house form).
- `source.assignees`: "Zeiss Ikon Aktiengesellschaft" → "Zeiss Ikon AG" (the spelling the other four files use).
- `catalog.focalLengthMm.design`: 100.0095292890771 → 100.01 (rounding).
- Last gap: 30.053277025514724 → 30.0533 (rounding; still the paraxial back focus).
- `closeFocusM`: 1000000000000000.0 → 1e15 (same value, plain form).
- Elements L2, L3, L4: added `cemented: "T1"`; `doublets`: empty → one entry spanning surfaces 3 to 6, because the patent states these three lenses are cemented.
- Added a header comment stating the source, scale and inferred values.
- Analysis rewritten to the house section layout; this audit replaces a copy of the package's process notes.

No radius, thickness, index, Abbe number, stop position or semi-diameter was changed.

After the changes: focal length 100.0095 mm, f/1.200, back focus 30.0533 mm (image plane at the paraxial focus), stop semi-diameter 18.06 mm.

Audit results:

- Surface validator: no errors.
- Aperture audit: no surface below the on-axis f/1.2 ray; no raise proposed.
- Real-ray clearance at f/1.2 and 17.63 mm image height (the patent's 10°): no axial clipping at any rim and the chief ray passes. The axial edge ray needs 41.67 mm at surface 1 (rim 44) and 19.97 mm at surface 6 (rim 28). The real edge ray reaches the stop at 19.21 mm against the 18.06 mm stop, so the stop trims the outermost part of the f/1.2 pupil. At 10° the lower edge of the beam is cut.
- Image-circle and field-coverage audits skip the file: it carries no image format (and was hidden at the time).

Open:

- Closed 2026-11-17 (renamed and reworded in the cleanup pass): key, file name, name, subtitle and specs still carried the delivered wording ("PATENT REFERENCE", "PATENT ONLY; RETAIL IDENTITY UNPROVED", "ESTIMATED STOP AND RIMS", "LITERAL ZERO AXIAL REAR AIR GAP"); `focus.description` likewise.
- Closed 2026-11-17 (cleanup pass): `closeFocusM: 1e15` kept as the infinity-only placeholder with a plain focus description.
- Closed 2026-11-17 (cleanup pass): element focal lengths and roles added. Rear elements stay L5 and L6 in order; the analysis notes the patent's L6 / L7 lettering.
- Semi-diameters are estimates and have not been compared with the proportions drawn in Fig. 2; `sdSource` is "heuristic".
- Closed in part 2026-11-17 (cleanup pass): glass names assigned where an exact row exists. No image format or mount assigned.

## 2026-11-17 — Cleanup and wording pass

Fields changed in the data file:

- `subtitle`: "1938 FIGURE 2; PATENT ONLY" → "US 2,141,733 A, Figure 2 — Bertele f/1.2 design".
- `specs`: the five delivered lines → "6 ELEMENTS / 4 GROUPS", "DESIGN F/1.2", "ALL SPHERICAL", "±10° FIELD" (the field is the patent's stated picture angle).
- `focus.description`: replaced by "Infinity focus only; the patent gives no close-focus data." `closeFocusM` stays 1e15.
- Elements: `label` "L1"–"L6" → "Element 1"–"Element 6"; `type` to the house shape names; `focalLengthMm` added (170.44, 131.66, 199.16, −37.68, 74.37, 408.17); a plain `role` on each.
- Cemented triplet id "T1" → "C1" on elements 2 to 4 and in `doublets` (one entry, surfaces 3 to 6).
- Header comment: one sentence reworded, and the Sonnar-family relation added.

Glass labels (printed value against the catalogue row):

- Element 3: none → "FK3 (Schott)", Δnd 0.0000, Δν +0.07.
- Element 4: none → "SF4 (Schott)", Δnd 0.0000, Δν +0.08.
- Elements 5 and 6: none → "BASF7 (Sumita)", Δnd +0.00004, Δν −0.05. The glass catalogue has this type only as Sumita BASF7 and Hoya BAFD7 rows; "BaSF7 (Schott)" resolves to the Sumita row.
- Element 1: "Unmatched (nd 1.6664 / V 48.6)". Nearest is the BaF11 type at 1.66672 / 48.4, Δnd 0.0003, outside the limit.
- Element 2: "Unmatched (nd 1.6203 / V 60.2)". Nearest is SK16 at 1.62041 / 60.3, Δnd 0.00011, just outside the limit.

No `apd` tags: the patent designates no special-dispersion glass.

Analysis: title set to the lens name; the glass section rewritten for the labels above; the product sentence reduced to one statement; the last section renamed "Patent Conditions and Model Scope".

Engine numbers before and after this pass are identical: focal length 100.0095 mm, f/1.2, default half-field 18.50°, stop semi-diameter 18.0567 mm, back focus 30.0533 mm. Surface validator: no errors. Aperture audit: within 3 % of the stated f-number, no rim, trace or iris limit.

Open:

- Semi-diameters are estimates (`sdSource` "heuristic") and have not been compared with Fig. 2. In the figure the front lens is slightly taller than the cemented meniscus and the rear pair is roughly half the front height; the present 44 / 42 / 25 mm follow that order. At the patent's 10° the lower edge of the beam is cut.
- No `lensMounts` or `imageFormat`: the patent states a ±10° picture angle but no format. The default half-field shown (18.5°) is wider than the patent's field.
- `groups` is empty.
- Elements 1 and 2 have no exact catalogue row.
- The rear elements are numbered 5 and 6, not the patent's L6 and L7.
