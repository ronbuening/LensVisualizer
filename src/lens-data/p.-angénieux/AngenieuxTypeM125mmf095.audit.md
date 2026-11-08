# Source Audit — P. ANGÉNIEUX TYPE M1 25mm f/0.95

Patent: US 2,701,982, sole numerical example (page 2, repeated in claim 4; drawing on page 1).

## 2026-11-07 — Package history

The lens arrived in the SixLens package of November 7, 2026, as a hidden, infinity-only model titled as a conditional
patent model of the M1 family.

- Source: US 2,701,982, the sole numerical example. The patent prints F = 100, relative aperture 1:1, back focal length
  56 and indices for the D line; the claim-4 table repeats the example and is not a second one.
- Scaling: every length ×0.25; indices and Abbe numbers unchanged. The package computed EFL 24.9849 mm and a paraxial
  back focus of 13.9943 mm, and kept the printed 14 mm (56 × 0.25) as the last gap with no refocus.
- Derived values: stop at 0.60 of e7 from R7 (the package read 0.588 on the drawing, with a 0.56–0.62 reading range),
  stop radius 7.126 mm from f/1, inferred semi-diameters with straight bevels, and `checks.gapSagFrac` 0.94. The full
  R7 and R8 caps fill 93.79 % of e7 (0.476 mm of air); 0.94 was the smallest whole-percent value that keeps them, and
  no stop position inside the measured range passed the f/1 beam at the default 0.90.
- Glass: all eight elements kept the printed nD/ν as `Unmatched` with Abbe-number dispersion and a note on the D-line
  reference; no catalog names.
- Focus: infinity only, with the 1e15 close-focus placeholder. Format: 16 mm cinema (12.7 mm diagonal) assumed for the
  field.
- Product link: the Grenier 1960 catalog lists the M1 at 25 mm f/0.95 and M42 Mount Spiral cites the patent. The package
  treated the association as plausible but unconfirmed, kept the patent's f/1 as the design aperture and recorded the
  marketed f/0.95 separately.
- Package checks covered MTF and pupil runs and an independent ray trace on the repo engine, standalone type checking,
  lint and formatting of the data file, and component render checks, all in the package's own checkout. The repo test
  suite, production build and viewer were not run.
- Open at hand-over: production identity, factory stop and clear apertures, glass dispersion and finite focus.

## 2026-11-08 — Deployment validation and production cleanup

**Source re-read.** The validation read both tables from page renders (description table on page 2, claim-4 table on
page 3; they are identical): 14 radii, 13 thicknesses and air spaces, 8 nD/ν pairs, the image distance, the two cemented
interfaces (R6, R9) and every sign. There are no aspheres and no variable gaps, and there were no mismatches; e7 = 30.66
scales to 7.665 mm = 4.599 + 3.066 mm across the stop. Front page: Serial No. 367,003, filed July 9, 1953, French
priority March 26, 1953, granted February 15, 1955, inventor Pierre Angénieux, no assignee. Every radius, spacing and
index condition of claims 1 and 2 holds (R3 1.001F, R5 0.580F, R7 0.324F, R8 0.404F, R10 0.555F, e7 0.307F, R11 and R12
1.930F and 2.253F, n5 = n6 = 1.6913).

**Patent against model.**

| Quantity | Patent, scaled ×0.25 | Model |
| --- | --- | --- |
| Focal length | 25 mm | EFL 24.985 mm (−0.06 %) |
| Relative aperture | 1:1 | f/1.000 wide open |
| Back focal length | 14.000 mm | paraxial 13.994 mm; last gap 14.000 mm |
| Total length | not printed | 45.668 mm, first vertex to image |
| Half-field | not printed | 14.4° at the 16 mm frame corner; 20.76° traceable |
| LSA at pupil 1 / 0.85 / 0.7 / 0.5 | not printed | −0.024 / −0.078 / −0.070 / −0.041 mm |

The full-pupil LSA is small and of the expected sign, so no sign misprint is suspected. A real axial ray that fills the
f/1 stop enters 13.17 mm from the axis (paraxial pupil 12.49 mm) and meets the rims of S5, S10 and S11 at the same
height: EFL over that diameter is f/0.949 and the ray's image-side sine f-number is 0.970. The marketed f/0.95 against
the patent's 1:1 is read as rating rounding. The clear-aperture tool cannot run at f/1, because its intersection starts
at the vertex plane, where the beam at S6 is wider than R7; at f/1.4 it finds no axial clip or blocked chief ray and
13–25 % one-side vignetting at L7 and L8.

**Stop and rims against the drawing.** The dashed iris in the drawing measures 0.594 of e7 from R7, against 0.60 in the
model. The semi-diameters agree with the drawn outline within about 0.5 mm (L7 9.45 mm against about 9.0 mm drawn).
L7 and L8 keep 0.26 mm and 0.37 mm edges, close to the pointed edges drawn. No rim was changed: the aperture audit
reports no rim limit.

**Maker comparison.** No manufacturer section was found. M42 Mount Spiral
(https://spiral-m42.blogspot.com/2020/06/pangenieux-25mm-f095.html) shows a section of the Bell & Howell – Angénieux
Type M1 1 inch f/0.95 and gives 8 elements in 6 groups, a development of the Gauss type, a 1953 design, C mount, 16 mm
format, f/0.95–f/22, close focus about 0.45 m, the Filmo 70 pairing and Ranger 7. It lists US 2,701,982 among its
references but does not say its section comes from the patent; the earlier analysis's "explicitly associates" was
softened accordingly. The Science Museum Group record (object 1990-5036/4855) gives F 25 mm f/0.95 and helical focusing
to 18 in. Film and Digital Times (July 31, 2014) states that the Ranger 7 pictures were made with Angénieux 25 mm f/0.95
M1 lenses. A 50 mm f/0.95 M1 for 35 mm cine cameras exists, but no construction source ties it to this table, and the
patent is normalized, so the ×0.25 scale stands. Association: moderate to strong (inventor, date, 8/6 Gauss
construction, secondary citation); there is no other example to choose from.

**Fields changed in this pass.**

- `key`: `angenieux-m1-family-patent-research-probe` → `angenieux-type-m1-25mm-f095`; `name`: "P. ANGÉNIEUX M1 FAMILY
  25mm f/1 (conditional patent model)" → "P. ANGÉNIEUX TYPE M1 25mm f/0.95"; `visible`: false → true.
- `subtitle`: "US 2,701,982, sole example; conditional M1 association; inferred stop and clear apertures" → "US
  2,701,982, sole example — correlated to the 1953 Type M1 cine lens".
- `catalog`: `lensMounts: ["c-mount"]`, `focalLengthMm.marketing: 25` and `closeFocusM.marketing: 0.45` added;
  `fNumber` unchanged (marketing 0.95, design 1); the eight disclaimer `specs` lines replaced by "8 ELEMENTS / 6 GROUPS",
  "DESIGN f = 25 mm", "DESIGN F/1.0", "ALL SPHERICAL" and "SCALED FROM F = 100". `source` keys put in schema order.
- Elements: `type` "Source spherical representative" → Positive Meniscus (L1–L3), Negative Meniscus (L4), Biconcave
  Negative (L5) and Biconvex Positive (L6–L8), each checked against the signs of R; `label` "Source glass Ln" → "Element
  n"; `focalLengthMm` (isolated thick-lens values) and `role` added; `indexReferenceNote` reworded.
- Glass: L6 → "J-SK16 (Hikari catalog equivalent to patent 620602; production supplier unspecified)", the label the
  Retrofocus R11 file uses for the same coordinate; it resolves with Δnd 1.0 × 10⁻⁵ and Δνd 0.05. At the sodium D line
  J-SK16 reads 1.62032, 0.8 × 10⁻⁴ below the printed 1.6204. The other seven elements stay Unmatched with Abbe-number
  dispersion, relabeled in the Cine Tele-Anastigmat pattern "Unmatched (vintage <class>; native sodium D
  coordinates)": their nearest catalog rows miss the printed index by 0.0002–0.0024 or νd by up to 0.9.
- `doublets` D1 (surfaces 5–7) and D2 (8–10) added, matching the elements' `cemented` names.
- `focus.description` rewritten; `focus.closeFocusM` stays the 1e15 placeholder, since the patent prints no finite
  state.
- Header comment replaced by the house block (source, scaling, index reference, stop, semi-diameters, gap allowance,
  focus).
- Analysis rewritten to the analysis-spec skeleton: conditional-model and research wording removed, the run-log
  verification section replaced by "Model Scope and Limitations", the M42 Mount Spiral attribution softened, product
  facts added with sources (M42 Mount Spiral, Science Museum Group, Film and Digital Times), and the patent conditions
  tabulated.
- No `R`, `d`, `nd`, `vd`, `sd`, stop position or gap changed. `built.mjs` output is identical before and after (EFL
  24.98494 mm, f/1.000, half-field 20.756°, stop radius 7.12604 mm), and `probe.mjs` gives the same paraxial back focus,
  13.9943 mm. The surface audit reports OK, the aperture audit is within 3 % with no rim limit, the image-circle audit
  lists no undersized surface, and field coverage is 100 % at the 6.35 mm corner.

Open: the production prescription, glass, stop and clear apertures are unpublished. The M42 Mount Spiral section was
not compared element by element with the patent drawing. (Closed 2026-11-08: it has the drawing's elements, cemented
pairs and relative rim heights; see the second review below.) The Angénieux space-history page could not be re-read
(certificate error) and the Grenier 1960 page was not re-viewed in this pass. (Grenier closed 2026-11-08: page 60 lists
the Angénieux M1 at f/0.95, 25 mm, focusing to 0.50 m; see the third review below. The space-history page still fails
with a certificate error.) The model's aperture settings stop at f/16 against the marketed f/22.

## 2026-11-08 — Second review: diagram, labels and movement

Compared: the live page at infinity, at the closest-focus slider end and with the movement overlay, against the patent's
single, unnumbered drawing on page 1 (native 300 dpi raster), the table on page 2 and the M42 Mount Spiral section.

**Scale.** The dash-dot axis lies on row 1752 ± 1 px across the figure. The R1 and R14 vertices are 1024.5 px apart
against 31.6675 mm, or 32.35 px/mm; the R5 and R10 to R14 vertices fall within 0.7 % of that scale, while the drawing
makes e7 about 3.5 % short and D2 about 4.5 % long. Circle fits to the R7 and R8 arcs (rms under 0.4 px) give 31.8 to 32.1 px/mm
across the axis, so the drawing is isotropic within about 1 %, and the readings below use 32.0 to 32.35 px/mm. Each
rim is the mean of the upper and lower outer stroke edges.

| Rim | Drawn | Reading | Model `sd` | f/1 axial beam |
| --- | --- | --- | --- | --- |
| L1 (S1, S2) | 461 px | 14.25–14.40 mm | 14.125 mm | 13.17 mm |
| L2 (S3, S4) | 423.5 px | 13.09–13.23 mm | 13.025 mm | 12.55 mm |
| D1 edge (S5, S6) | 345.5 px | 10.68–10.80 mm | 10.9 mm | 10.900 mm |
| R7 (S7) | 224.5 px | 6.94–7.02 mm | 7.175 mm | 7.162 mm |
| Iris tick | 220.5 px | 6.82–6.89 mm | stop 7.126 mm | — |
| R8 (S8) | 217.5 px | 6.72–6.80 mm | 7.125 mm | 7.107 mm |
| D2 edge (S9, S10) | 298.25 px | 9.22–9.32 mm | 9.325 mm | 9.323 mm |
| L7 (S11, S12) | 288.5 px | 8.92–9.02 mm | 9.45 mm | 9.445 mm |
| L8 (S13, S14) | 287 px | 8.87–8.97 mm | 9.025 mm | 9.001 mm |

**Rims.** No rim differs from its reading by 10 %; the largest gaps are R8 and L7, 5–6 % above the drawing. Every air-facing
face from S5 to S13 lies within 0.025 mm of the real f/1 axial ray through the 7.126 mm stop, so none can come down to the
drawing, and L1 and L2 read 1–2 % above the model, inside the reading error. The drawing's step order is L1 > L2 > D1 >
D2 > L7 = L8, with L7 0.05 mm above L8 and D2 0.30 mm above L7. The model has L7 0.125 mm above D2 and 0.425 mm above L8.
The rim out of order is L7, held at the beam (0.005 mm margin at S11). Restoring the drawn order would mean raising L8 to
9.45 mm and D2 to about 9.75 mm, 5–6 % above their own readings, which already lie below the stored values, so neither
raise has figure support and none was made. The drawn edge shapes match the model: L1, L2, L7 and L8 end both faces
together, D1 runs flat across the cement and bevels straight down to the R7 rim, and D2 runs flat across L6. The one
shape the outline cannot follow is L5's front corner: the drawing bevels at about 45° from the R8 rim to the full edge
height near 19.6 mm from R1 and runs a short cylinder back to the cement, while the straight rim join from R8 to R9 leaves
up to 0.8 mm less glass there. Only a land would add it, and the drawing shows a bevel, not a land. Laid over the
drawing at 32.35 by 32.1 px/mm, the model outline follows every drawn arc.

**Lands and cuts.** There are none: the file has no `rimExtensionSd` or `rimCutDepthMm`, and every `sd` equals its
package value. The full-pupil transmission at f/1 is 100.0, 95.1, 89.6, 83.0, 74.5, 64.1 and 52.6 % at 0, 2.4, 4.8, 7.2,
9.6, 12.0 and 14.4° for both the package and the final rims; worst loss 0.0 points.

**Gap allowance.** The surface validator does not measure across the stop, so it passes this file at any
`checks.gapSagFrac`. The renderer treats e7 as one 7.665 mm gap, into which the two caps reach 7.189 mm at the shared
7.125 mm rim (0.9379). At 0.93 it would draw both caps cut to about 7.10 mm; 0.94 is the smallest two-decimal value
that draws them whole, and it stays.

**M42 Mount Spiral section.** Viewed through the blogger image URL in the validator report; nothing was saved in the repo. It shows
eight elements in six groups with the same two cemented pairs, the stop between R7 and R8, L5's bevel and flat edge, and
L7 and L8 at one height. Scaled on the R1 to R14 length (about 19.9 px/mm), its rims read L1 14.3, L2 13.3, D1 10.65,
R7 7.1, iris 6.95, R8 6.8, D2 9.25, L7 8.95 and L8 8.95 mm, within about 0.2 mm of the patent drawing throughout. It
follows the patent drawing and adds no independent evidence of the production rims.

**Found correct.** Names L1 to L8 are sequential; the patent numbers only radii (R1–R14), spacings (e1–e13) and the six
components. Types follow the signs of R: L1 to L3 positive menisci convex to the object (R1, R2, R3, R4, R5, R6 all
positive), L4 a negative meniscus (R6 +637.8, R7 +8.10), L5 biconcave (R8 −10.105, R9 +48.245), L6 to L8 biconvex. The
stored focal lengths equal the isolated thick-lens values (+85.08, +67.71, +21.40, −12.15, −11.89, +18.16, +37.89 and
+34.35 mm), and the roles are true. Doublet brackets D1 (S5–S7) and D2 (S8–S10) match the patent's cemented third and
fourth components and the elements' `cemented` names; the lens has no gap labels and the patent calls its spacings e,
so they do not clash. The patent names no groups, and the file has none. It marks no asphere and names no glass or
special glass, and the file has no aspheric surface and no `apd` tag. The stop sits in e7 between L4 and L5. The
inspector shows L4 as Negative Meniscus, FL −12.15 mm, Unmatched dense flint in D1, and L6 as Biconvex Positive, FL
+18.16 mm, J-SK16 in D2.

**Movement.** The lens is static: `gaps` is empty, the focus description says the infinity prescription is the only
state, the movement overlay reads "no modeled focus or zoom group movement" over six groups, the focus slider's far end
reads "Not modeled", and the closest-focus view matches infinity.

**Colour and glass.** The patent prints no aberration curves, so there is nothing to compare by line; on-axis LSA from
the paraxial focus is −0.024, −0.078, −0.070 and −0.041 mm at pupil 1, 0.85, 0.7 and 0.5. The seven Unmatched elements
have only nD and ν in the page 2 table and its claim 4 repeat on page 3: no glass name, no other line and no partial
dispersion. The patent has one example. Within it 1.6751 / 32.3 serves L1 and L4 and 1.6913 / 53.8 serves L3, L7 and
L8, which reads as stocked glass rather than floated values. The 1.6913 / 53.8 coordinate lies in the lanthanum-crown
field (LaK9 1.691 / 54.7), not among the dense crowns its label names; the label was not changed.

Engine values are unchanged: EFL 24.985 mm, f/1.000, stop radius 7.126 mm and half-field 20.756°. Field coverage is
100 % at the 6.35 mm corner and the corner chief ray clears every rim. Text: the header's semi-diameter note now gives the
beam margins, the L7 step and the reason for 0.94; the analysis gains the L7 and L8 heights, 53 % corner light and the
M42 Mount Spiral comparison.

Open: the drawing shows L7 level with L8 and 0.3 mm below D2; with the inferred f/1 stop the beam holds L7 at 9.45 mm,
so the model draws L7 above both. A smaller or moved stop would settle it, but neither is printed. (Closed 2026-11-08:
the drawn iris, R7, R8 and L7 fit a real-ray 1:1 beam through a 6.83 mm stop, while the paraxial f/1 stop rule keeps L7
at 9.45 mm; see the third review below.)

## 2026-11-08 — Glass backfill

The dense flints now borrow catalog dispersion curves while the trace keeps the printed nD: L1 and L4 (1.6751 / 32.3)
take SF5 (Schott, 1.6727 / 32.21), the label the Retrofocus R11 file already uses for the same coordinate, and L5
(1.6992 / 30.2) takes SUMITA's legacy lead flint SF15 (1.69895 / 30.05). The Abbe numbers agree within 0.15; the patent
prints no chromatic curves to compare. L2 (1.6689 / 46.7) and L3, L7, L8 (1.6913 / 53.8) stay Unmatched, 0.4 and 0.9 off
the nearest rows in νd; the latter's label now says lanthanum crown, the class its coordinates sit in, instead of dense
crown.

## 2026-11-08 — Third review: diagram, labels and movement

Compared the live page (infinity, the closest-focus end, the movement overlay and all eight inspectors) with the page 1
drawing at its native 300 dpi, on a scale proved afresh: the R1 to R14 vertex strokes give 32.38 px/mm and R5 to R10
32.15 px/mm along the axis, and circle fits to R5, R7, R8 and R10 give 31.8 to 32.6 px/mm across it. At 32.2 px/mm the
rims read L1 14.30, L2 13.15, D1 10.71, D2 9.25, L7 8.95 and L8 8.90 mm, with the iris at 6.93, R7 at 6.83 and R8 at
6.62 mm, within 0.15 mm of the second review. The largest excesses, R8 (7.6 %) and L7 (5.6 %), sit on the f/1 beam, so no
rim, label, tag or movement changed. Second-review land and cut verdicts re-measured: unchanged; worst loss 0.0 points.
The engine is unchanged (EFL 24.985 mm, f/1.000, stop radius 7.126 mm, half-field 20.756°, coverage 100 % at 6.35 mm).
The R7 and R8 caps fill 0.938 of e7 at their shared 7.125 mm band and 0.93 would trim them to about 7.10 mm, so
`checks.gapSagFrac` 0.94 stays.

**L7 and the stop.** A real axial ray entering at 12.5 mm, half the focal length, crosses the stop plane at 6.83 mm and
meets R7 at 6.93, R8 at 6.77 and R11 at 8.84 mm: the drawn iris, R7, R8 and L7 within the reading error, while the other
drawn rims stand 0.3 to 1.8 mm clear of it. The paraxial f/1 rule gives 7.126 mm, whose real ray enters at 13.17 mm and
needs L7 at 9.45 mm. A 6.83 mm stop would read f/1.04, and the data spec derives an ordinary prime's stop from its
f-number, so L7 stays. Restoring the drawn order would take L8 to 9.45 mm and D2 to about 9.75 mm, 6 % above their own
readings; not done. The header note and the analysis now give the real-ray reading.

**Labels and glass.** The inspectors show the types, focal lengths, glasses and roles listed in the second review; D1
and D2 bracket L3–L4 and L5–L6, the stop is in e7, and there are no aspheres or `apd` tags. SF5 (L1, L4) and SF15 (L5)
resolve at Δνd −0.09 and −0.20; SF5 is 0.0024 below the printed index, so "nearest catalog row" wording was proposed to
the coordinator. Each is the lead flint nearest its coordinate (PBM25 is 0.20 off; N-SF5, E-FD5, H-ZF2, S-TIM25,
S-TIM35 and E-FD15 are lead-free). No row lies within the resolver window of 1.6689 / 46.7 or 1.6913 / 53.8.

**Movement and sources.** The lens is static: the overlay reports no group movement and the focus slider's far end
reads "Not modeled". Grenier 1960, page 60, lists the Angénieux M1 at f/0.95, 25 mm, focusing to 0.50 m, among the 9.5
and 16 mm normal focal lengths; the analysis now cites it.

Open: the model's stops end at f/16 against the marketed f/22. The Angénieux space-history page still fails with a
certificate error.
