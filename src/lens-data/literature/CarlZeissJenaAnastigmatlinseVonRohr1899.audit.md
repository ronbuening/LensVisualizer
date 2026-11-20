# Carl Zeiss Jena Anastigmatlinse 1:12.5 (von Rohr 1899, Fig. 140) — audit log

## 2026-11-18 — Literature reconstruction audit

### Pages and figure used

- Table, caption and figure: von Rohr (1899), printed p. 379, Fig. 140 (e-rara 4637944.pdf, PDF page 135); context on
  p. 380 (PDF page 136). The table sits beside Fig. 141 (Satz-Anastigmat Series VIIa) on the same page.
- Bibliography: p. 425 (e-rara 4637806.pdf, PDF page 28), entries Rudolph (10.) and (11.). The bibliography pages
  supplied with the package (pp. 415 and 430) hold the von Höegh and Steinheil entries, not Rudolph's.
- Patent: GB 19,509 of 1894, five pages, read from DEPATISnet (GB000189419509A).

### Values read from the page

Every value was read on a 400–600 dpi render of the page image; the OCR text layer was not used.

| Item | Printed | Staged | Result |
| --- | --- | --- | --- |
| r1 / r2 / r3 / r4 / r5 | 14.7 / 23.4 / 11.2 / 7.4 / 15 4 | 14.7 / 23.4 / 11.2 / 7.4 / 15.4 | match; r5's point is broken in the scan |
| b1 (stop to r1) | 1.9 | 1.9 | match |
| d1 / d2 / d3 / d4 | 1.3 / 1.7 / 1.7 / 1.3 | same | match |
| nD L1 / L2 / L3 / L4 | 1.51743 / 1.61002 / 1.51156 / 1.58254 | same | match |
| Reduced focal length | fD = 100 mm | design 100 | match |
| Rated aperture | 1 : 12.5 | 12.5 | match |
| Computed for | 1 : 10.5, ω = 34° | field 34 | match |
| Source line | "Angaben des Verfassers" | — | no earlier work named; `after` left out |
| Glass names, dispersion | none printed | — | nD only |

No transcription error was found. Von Rohr marks no value as assumed; the caption says the drawing is only
approximate. On p. 380 he states the spherical correction is complete within about 1:11.4 with a zone of −0.8 mm.

### Radius signs

Signs −, +, −, −, − (r1 to r5). Basis: the figure shows a meniscus block concave to the front stop, with L1 thin at the
centre and L2 thick at the centre; the patent's Figure 1 type (biconcave L1, biconvex L2, concavo-convex collecting L3,
convexo-concave dispersing L4) has the same sign pattern. Element types in the file follow from the signs.

### First order

| Quantity | Model | Printed |
| --- | --- | --- |
| EFL | 100.714 mm | 100 mm (+0.71 %, radius rounding) |
| Paraxial back focus | 112.1928 mm, last gap stored as 112.193 | not printed |
| f-number at the stop | 12.50 | 1 : 12.5 |
| LSA at 1:12.5, pupil 1.0 / 0.85 / 0.7 / 0.5 | −0.113 / −0.707 / −0.760 / −0.509 mm | — |
| Largest zone | about −0.78 mm | −0.8 mm |
| Marginal zero crossing | about 1:12.3 | about 1:11.4 |

The crossing difference is within radius rounding: r4 ± 0.05 mm moves the 1:11.4 marginal LSA from +0.83 mm to
+0.09 / +1.67 mm. The 1:10.5 marginal ray reaches r2 at 5.11 mm, above the 4.974 mm height where r2 and r3 meet (L2
zero edge), so von Rohr's computation aperture cannot be traced in the rounded data; this is a property of the
rounded prescription, not a transcription error.

### Rims

Clearance at the rated stop and the printed field (exact meridional trace): axial marginal 4.03 / 4.25 / 4.28 / 4.35 /
4.53 mm at r1 to r5; chief ray at 34° 1.25 / 1.87 / 2.41 / 2.97 / 3.59 mm. No on-axis clip and no blocked chief ray at
4.8 mm, so the least-change rule keeps the staged rims.

Figure measurement at 600 dpi (axis-to-rim and vertex positions): drawn rim 106 px from the axis; vertices at 226 / 240
/ 277 / 303 / 314 px and the stop line at 173.5 px. Scale from the printed glass thickness (6.0 mm over 88 px) gives a
7.2 mm rim; scale from stop to last vertex (7.9 mm over 140.5 px) gives 6.0 mm. The drawn element thicknesses (0.95,
2.5, 1.8, 0.75 mm) and stop distance (3.6 mm) differ from the print by up to a factor of two, and both rim readings
exceed L2's 4.974 mm zero-edge height. The figure therefore fixes only the form: one square-edged block, all faces to
one height. `sdSource` is "heuristic".

| Surface | sd before | sd after | Edge thickness of the following element at 4.8 mm |
| --- | --- | --- | --- |
| 1 | 4.8 | 4.8 | L1 2.603 mm |
| 2 | 4.8 | 4.8 | L2 0.122 mm |
| 3 | 4.8 | 4.8 | L3 1.013 mm |
| 4 | 4.8 | 4.8 | L4 2.301 mm |
| 5 | 4.8 | 4.8 | — |

Field: printed ω 34°; traced field 34° (unchanged; it is the printed angle, not a cap). The chief ray passes to the
paraxial rim limit of 38.9° (r5). Meridional transmission across the 1:12.5 stop: 93 % at 10°, 82 % at 20°, 65 % at
34°; the cut rays are on the upper side of the pencil at r2, r4 and r5 (part of that side cannot pass L2 at any rim
size). Kept as ordinary vignetting.

### Structure and identity fixes

- Added `cemented: "Q1"` on all four elements, a `doublets` entry Q1 over surfaces 1–5, and one `groups` entry G1.
- Replaced the placeholder labels with index-relationship labels (lower/higher-index negative or positive, new or old
  pair); the book names no glasses. Added the D5 glass string to every element.
- Added `subtitle`, `source.sdSource`, the locator "p. 379, Fig. 140" and the e-rara page URL (PDF page 135).
- Rounded the last gap from 112.1927965… to 112.193 mm (defocus 0.0002 mm).
- Focus description reworded; aperture (12.5 / 16 / 22, maximum 22) and catalog counts (4 elements, 1 group) kept.
- Maker kept as Carl Zeiss Jena: the book places Series VII in the Zeiss history (introduced 1895) and its bibliography
  titles Rudolph's 1896 paper on the Series VIIa as "der Firma Carl Zeiss". Designer: Paul Rudolph.
- Key kept. The form's own design date is not stated (later than the October 1894 patent), so no year token can be
  added on evidence.

### Patent check (D6)

Von Rohr's bibliography names E.P. 19,509 of 13 October 1894 "on Ser. VII" (Paul Rudolph; accepted 17 November 1894).
The patent prints three numerical examples (unit focal length, nD and nG′): Example 1 (Figure 1 type, the type of
Fig. 140) r = −0.132, +0.237, −0.116, −0.071, −0.138; d = 0.0053, 0.0169, 0.0148, 0.0106; stop 0.0158; nD 1.51000 /
1.60852 / 1.51000 / 1.58250; aperture 0.091. Example 2 is the Figure 2 type, Example 3 a symmetric pair of Figure 1
lenses. Result: **table differs** in every value, as von Rohr himself says on p. 380 (a later, longer-focus form). The
file stays a literature reconstruction.

### Open limitations

- Rims are a modelling estimate; the approximate drawing cannot supply a measured diameter.
- Von Rohr's 1:10.5 computation aperture is not traceable through the rounded prescription.
- Field curvature and astigmatism were not compared with von Rohr's statements or with his Plate IV, which is not in
  the supplied pages.
- nD only; chromatic behaviour is not modelled.
