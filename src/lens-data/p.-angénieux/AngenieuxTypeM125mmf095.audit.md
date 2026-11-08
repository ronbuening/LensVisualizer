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
not compared element by element with the patent drawing. The Angénieux space-history page could not be re-read
(certificate error) and the Grenier 1960 page was not re-viewed in this pass. The model's aperture settings stop at f/16
against the marketed f/22.
