# Audit Log — CANON EF 70-200mm f/4 L USM

Patent: JP 2000-284174 A, Numerical Example 1

## 2026-10-08 — Stated on-axis ray at the long end

Scope: why the stated f/4.1 on-axis ray cannot be traced at 194.57 mm. No data value changed. The data-file header
and three paragraphs of the analysis note were reworded to state the present trace; see "Prose" below.

Rule in force (maintainer, 2026-10-08): an inferred rim that clips the on-axis beam of the f-number the source prints
rises only to the height that ray reaches there, on the surfaces that clip. The rule needs a ray height at each
surface; at the long end this lens does not give one behind surface 4.

### The stated ray, station by station

The patent prints Fno 4.1 at all three stations (Example 1 header, PDF p. 6: Fno = 4.1 ~ 4.1; Fno/4.1 on Figs. 2-4,
pp. 8-9) and prints no semi-diameters. The stated ray is the axis-parallel ray at each station's entrance-pupil radius
(computed focal length / 8.2), followed through the engine's unclipped trace at infinity focus.

| Station | Computed focal length | Entrance height | Outcome |
|---:|---:|---:|---|
| 71.92 mm | 71.9010 mm | 8.7684 mm | Reaches the image plane. Stop plane at 14.3750 mm (iris 14.3750 mm). No surface below the ray. |
| 118.29 mm | 118.2644 mm | 14.4225 mm | Reaches the image plane. Stop plane at 14.3736 mm. No surface below the ray. |
| 194.57 mm | 194.5405 mm | 23.7244 mm | Ends after surface 4: no intersection with surface 5 (`noBracket`). |

At 71.92 and 118.29 mm the surface nearest the ray is 20 (ray 14.523 mm, `sd` 15), so no rim clips there.

The 194.57 mm ray, as far as it can be followed:

| Surface | Ray height | `sd` | Sphere limit \|R\| | Outcome |
|---|---:|---:|---:|---|
| 1 | 23.7244 mm | 26 | 175.317 | Passes, 2.276 mm inside the rim |
| 2 | 23.6106 mm | 25.6 | 604.892 | Passes, 1.989 mm inside the rim |
| 3 | 22.7908 mm | 25.8 | 89.957 | Passes, 3.009 mm inside the rim |
| 4 | 22.2972 mm | 21 | 58.007 | 1.2972 mm (6.2 %) above the rim; 38 % of \|R\|, so the sphere itself is met |
| 5 | none | 21 | 59.256 | No forward intersection |

### Why surface 5 is never met

Surfaces 4 and 5 are the two faces of the air space between E2 and E3: R4 = 58.007, R5 = 59.256, D4 = 0.10 (PDF p. 6,
read again at 400 dpi). Both are convex to the object and R5 is the flatter, so the air space is widest on axis and
closes toward the rim.

| Height | Air space between surfaces 4 and 5 |
|---:|---:|
| 0 mm | 0.1000 mm |
| 21 mm (the file's shared rim) | 0.0112 mm |
| 22.036 mm (f/4.15 ray) | 0.0012 mm |
| 22.1518 mm | 0 (the two spheres meet) |
| 22.2972 mm (stated f/4.1 ray) | -0.0015 mm |

The stated ray leaves surface 4 at z = 25.0766 mm from the front vertex. Surface 5 at that height lies at
z = 25.0751 mm, 0.0015 mm behind the point the ray starts from, so the ray is already inside the sphere of surface 5
and has no forward crossing of its front cap. The ray's position 4.357 mm beyond the vertex plane of surface 5 is not
the cause: the f/4.13 ray leaves surface 4 at 4.291 mm beyond that plane and still meets surface 5.

Finding: this is a limit of the printed prescription, not of a rim. At that height the rear face of E2 and the front
face of E3 would overlap by 0.0015 mm, so the stated beam cannot pass whatever the rims are. Surface 4 is the first rim
below the ray and the ray's height there rounds up to 22.3, but 22.3 is above the 22.1518 mm at which the two faces
meet and a raise there does not let the ray through. Surface 5 and everything behind it have no ray height at all, so
the rule has no usable value for this station.

An independent meridional trace of the printed table that allows a backward transfer between surfaces 4 and 5, as
lens-design software does, reproduces the engine to surface 4 (22.2972 mm), reaches surface 5 at 22.2971 mm after a
-0.0015 mm transfer, surfaces 13 and 14 at 13.124 and 13.128 mm (`sd` 12.8), the stop plane at 14.3790 mm and surface
20 at 14.528 mm. That is a ray through overlapping glass, not a beam the printed lens can pass.

### What the prescription does pass at 194.57 mm

- Largest on-axis ray that can be followed with every rim and the iris ignored: entrance height 23.5656 mm (0.67 %
  under the stated 23.7244 mm), f/4.128. It meets surfaces 4 and 5 at 22.1518 mm, surfaces 13 and 14 at 13.036 and
  13.040 mm, and the stop plane at 14.2808 mm, inside the 14.3750 mm iris. At this station the contact ring of E2 and
  E3 limits the beam before the iris does.
- The printed 4.1 stands for 4.05 to 4.15. The f/4.15 ray (entrance 23.4386 mm) meets surfaces 4 and 5 at 22.036 mm,
  surfaces 13 and 14 at 12.966 and 12.971 mm, and the stop plane at 14.2024 mm. The printed table and the printed
  f-number therefore agree only for f/4.128 to f/4.15, with E2 and E3 clear to within 0.12 mm of edge contact.
- The printed D4 carries two decimals. The air space is open at 22.2972 mm from D4 = 0.1015 upward; the contact
  height runs from 21.650 mm at D4 = 0.095 to 22.637 mm at D4 = 0.105.
- Tele f-number against a shared rim on surfaces 4 and 5, other rims ignored: 21 gives f/4.360, 21.1 f/4.339,
  22.0 f/4.157, 22.1 f/4.138, 22.15 f/4.128. Surfaces 13 and 14 at 12.8 bound the beam at f/4.206, so any shared rim
  above 21.75 mm makes them the limiter.
- The file sets no `gapSagFrac`. Under the default 0.90 the shared rim can be at most 21.13 mm: 21.1 builds and 21.2
  is rejected as cross-gap overlap. The current 21 uses 88.8 % of the air space; 22.1 would use 99.5 %.

### Figure check

Fig. 1 (PDF p. 8) draws Example 1 at the wide end. Read at 600 dpi: the axis runs from y = 3378.5 px at E1 to
3373.5 px at x = 3500 px (about 0.13 degree of scan tilt). Scale from the front vertex (x = 1316.5 px) to the image
plane (x = 3746 px), 212.831 mm over 2429.5 px: 11.415 px/mm; 11.37 to 11.45 px/mm from the vertices of surfaces 3,
16 and 30. Half-heights are to the outer edge of the stroke, mean of both sides; the strokes are about 8 px (0.7 mm)
wide.

| Drawn body | Half-height | File `sd` |
|---|---:|---|
| E1 | 313 px = 27.4 mm | 26 (surface 1), 25.6 (surface 2) |
| E2 and E3, one shared height | 301 px = 26.4 mm | 25.8 (surfaces 3 and 6), 21 (surfaces 4 and 5) |
| E4 | 283 px = 24.8 mm | 24.2 (surfaces 7 and 8) |
| E14 / E15 / E16 | 175.5 / 181.5 / 189 px = 15.4 / 15.9 / 16.6 mm | 15.3 / 15.8 / 16.4 |

- E2 is drawn with a flat edge at full height, from surface 3 to the surface 4/5 stroke: 46 px (4.0 mm) between
  stroke centres, 54 px (4.7 mm) over the strokes. The printed radii give E2 an edge 4.5 mm thick at 26.3 mm. E3
  ends on the rear corner of that edge.
- Surfaces 4 and 5 are drawn as a single stroke from the axis to that corner. The stroke follows the printed radius
  (within 1 px of R4 at 21.7 and 23.5 mm) and runs to the full height, about 26 mm from the axis. The figure gives
  no separate clear aperture for the pair and does not draw it smaller than the 22.3 mm the stated ray reaches.
- At 26 mm the printed surfaces would overlap by 0.045 mm, 0.5 px at this scale, so the drawing cannot show where
  the two faces meet. It is consistent with an edge-contact pair and settles nothing about 21 against 22.15 mm.
- No value was raised, so no raised value stands above what the figure draws. Every file rim in the table is within
  7 % of the drawn half-height except the shared 21 on surfaces 4 and 5, which is about 20 % below the height to
  which the figure draws that interface.

### Render check

Rendered section at 71.92 mm, the state Fig. 1 draws. Element order and grouping match the figure: E1; E2, E3, E4;
E5, the E6+E7 doublet, E8; the E9+E10 doublet; stop; E11, the E12+E13 doublet, the long air space, E14, E15, E16;
image plane. Front-group heights are in the ratio 1 : 0.99 : 0.93 (E1 : E2/E3 : E4) against 1 : 0.96 : 0.90 in the
figure.

One standing difference, not changed here: the figure gives E2 a flat edge at full height with E3 ending on it, while
the render carries surfaces 4 and 5 only to 21 mm and slants each element back to its 25.8 mm outer face, leaving a
notch between the two at the rim.

### Values as they stand

| Station | Stated | Traced | Limiter |
|---:|---:|---:|---|
| 71.92 mm | f/4.1 | f/4.10 | iris (`STO`) |
| 118.29 mm | f/4.1 | f/4.10 | iris (`STO`) |
| 194.57 mm | f/4.1 | f/4.36 (+6.3 %) | rim of surface 5 (`sd` 21) |

- Every `sd`, the `STO` row (14.25845124506584), every radius, thickness and index, the `var` gaps, `nominalFno` 4.1
  and `zoomApertureModel` are as they were. The fixed wide-open iris is 14.3750 mm.
- The raise listing names no surface for this file and keeps its flag that the stated ray cannot be traced at a
  station.
- The file builds and the validator reports nothing. Traced field coverage is 100 % at all three stations (17.2,
  10.3 and 6.2 degrees to 21.65 mm); the image-circle floor lists no surface.

### Prose

No data value moved; these edits make the header and the note describe the trace as it stands.

- Data-file header, stop paragraph: the 14.25845124506584 mm on the `STO` row was called the physical stop
  semi-diameter. It now reads as the authored paraxial f/4.1 radius, with the traced fixed iris of 14.3750 mm beside
  it.
- Data-file header, semi-diameter paragraph: the sentence that front-group values were reduced where the marginal-ray
  rule over-sizes R4/R5 is replaced by the present state: the shared 21 mm rim, the 21.13 mm ceiling of the default
  cross-gap rule, f/4.10 on the iris at 71.92 and 118.29 mm, f/4.36 on the R5 rim at 194.57 mm, and the 22.30 mm ray
  height against the 22.15 mm contact height. The box borders of the whole header are aligned at 83 columns.
- Analysis note, stop paragraph in "Optical Architecture": the same correction as the header.
- Analysis note, "Verification Summary": the table column headed "Fixed-stop f-number" is headed "Paraxial f-number,
  `STO`-row radius" (values unchanged); the stop paragraph marks the 14.258451 mm stop and the 8.768094 / 14.422345 /
  23.725566 mm entrance-pupil semi-diameters as paraxial and adds the traced values (iris 14.3750 mm; f/4.10, f/4.10,
  f/4.36; entrance height 22.309 mm at 194.57 mm).
- Analysis note, semi-diameter paragraph: the two sentences narrating earlier figure passes now state what Figure 1
  draws and what the data holds, and the paragraph adds the long-end limit and its cause.

### Left open

- Maintainer ruling on the 194.57 mm station. The rule's value for surfaces 4 and 5 (22.3) cannot be used: the faces
  meet at 22.1518 mm. The choices are to keep the shared rim at 21 and the station at f/4.36, or to model E2 and E3 as
  an edge-contact pair. The second means surfaces 4 and 5 at about 22.1 (+5.2 %), `gapSagFrac` near 0.995 on this
  file, and surfaces 13 and 14 from 12.8 to 13.1; it gives f/4.14 at tele, inside the rounding of the printed 4.1 but
  not the stated ray.
- Stop radius and stated f-number. One f-number the prescription passes at every station lies between 4.128 and 4.15.
  The fixed iris of 14.3750 mm is the f/4.100 real-ray radius at 71.92 mm, which the long end cannot fill. The
  authored `STO` value 14.25845 mm corresponds to f/4.134 by real ray at 194.57 mm, with surfaces 4 and 5 met at
  22.119 mm, under the contact height. This is a stop and f-number question, outside a rim pass.
- The header and note sentences listed under "Prose" above quote f/4.36, the 21 mm shared rim and the 21.13 mm cross-gap
  ceiling. They need the new values if the ruling on the first item changes surfaces 4, 5, 13 or 14 or sets
  `gapSagFrac`.
