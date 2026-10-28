# Audit Log — OLYMPUS ZUIKO DIGITAL ED 7-14mm f/4.0

Patent: US 7,280,284 B2, Example 3 (Atsujiro Ishii / Olympus Corporation; filed 2005-09-07, granted 2007-10-09;
priority JP 2004-259416). Family prints: US 2006/0050406 A1, JP 4632724 B2.

## 2026-10-28 — Deployment validation and wording pass

### Source re-read

The Example 3 table (US B2 p.16, columns 11–12) was re-read from 300 dpi page images. All 31 surfaces were checked
(R, d, nd, νd, the stop at r19 and the six cemented interfaces), along with the 4 aspheres × 6 values (K, A4–A12) and
the 5 variable gaps × 3 zoom states × 2 focus states. There were no mismatches. The JP 4632724 B2 text layer gives the
same table and spacing rows. The certificate of correction (US B2 p.19, 2008-07-08) changes only columns 13–16 (the
claims). The front page matches `patentNumber`, `patentYear`, `authors` and `assignees`.

Asphere equation: the US B2, the USPTO copy, the A1 (p.15) and the JP B2 (p.8) all print
`x = (y²/r)/[1+{1−(K+1)(y/r)²}^1/2] A4y⁴ + A6y⁶ + …` with no operator before A4y⁴; in the JP text the break falls at a
line wrap. With the usual "+", LSA at full pupil is −0.090 / −0.103 / −0.037 mm (wide / middle / tele), with a
+0.055 mm zone at tele. This matches the Figure 7 SA curves on their ±0.20 mm scale. Subtracting A4 on S27/S28 gives
−7.4 / −13.1 / −27.8 mm, and subtracting it on S3/S4 does not build. The omission is a typesetting gap and not a
self-contradiction of the source, so the earlier `unresolved` errata entry was removed; the reading is explained in
the header.

### First-order check (patent vs model)

| Quantity | Patent | Model |
|---|---|---|
| EFL (mm) | 7.1 / 9.6 / 13.7 | 7.127 / 9.586 / 13.742 |
| F-number | 4 / 4 / 4 | 4 at every station |
| d31 vs paraxial BFD (mm) | 33.6 / 40.4 / 51.8 | 33.531 / 40.343 / 51.854 |
| Total track (mm) | — | 154.4 / 151.5 / 154.4 (front group returns, as the text states) |
| Condition (1)/(2), fR/\|fF\| | 2.77 | 27.32 / 9.86 = 2.77 |
| Condition (3), d8/d2 | 0.02 | 0.2 / 8.3 = 0.024 |
| 2ω at FIY 10.59 / 11.45 / 11.45 (°) | 114.7 / 97.9 / 78.2 | 112.2 / 99.4 / 78.4 |
| Close state, IO (mm) | 250 / 250 / 250 | 249.5 / 246.6 / 249.6 (image plane at the infinity offset) |
| Close magnification | — | −0.055 / −0.074 / −0.107 (Olympus: 0.11×) |

The printed 2ω at wide and middle does not follow from the patent's own FIY and distortion plots, so it is treated
as nominal. Zoom path: the printed stations are byte-identical to the source. No gap reverses across the 33 stations.
The front group reverses once (the concave path the text requires) and the stop moves steadily toward the object.
Interpolating between neighbouring stations adds at most 0.0067 mm of defocus.

### Maker-diagram comparison

Olympus specifies 18 elements in 12 groups, two double-sided glass-molded aspheres (the large concave L2 and an ED
rear element), 2 Super ED + 2 ED elements, inner focus, 0.25 m minimum focus and 0.11× magnification. The September
2010 catalog drawing marks the following positions:
- L2: pink (aspherical) large negative meniscus.
- L4 and L6: purple (Super ED).
- L14: cyan (ED).
- L16: red (ED glass-molded aspherical).

These are exactly the patent's aspheric elements (S3/S4, S27/S28) and its four nd 1.497 / νd 81.54 elements with
θgF 0.54. Example 1 (9.5–18.3 mm) and Example 2 (17 elements / 11 groups) fit the product less well. The patent prints
one glass for all four low-dispersion positions, so the Super ED/ED split is not in the source.

### Fields changed in this pass

| Field | Before | After | Reason |
|---|---|---|---|
| `gaps["4"]`, `gaps["15"]` close column | 11.6, 6.8 (infinity repeated) | 17.3, 1.1 at every station | Printed IO 250 mm rows; identical at the three printed stations, so interpolation gives the same values between them |
| `zoom.stations[0, 16, 32].publishedFocus` | absent | `[1]` | Printed close states |
| `focus.conjugates` | absent | stations 0/16/32, keyframe 1, 250 mm, `image-plane` | Printed IO row (object to image) |
| `focus.description` | infinity-only text | `PUBLISHED` close-focus description | — |
| S2 `sd` | 23.7 | 24.2 | Chief ray needs 23.9 mm for the 10.59 mm FIY and 24.12 mm for the 10.82 mm corner. Fig. 3(a) (USPTO scan at about 8.9 px/mm) draws r2 to about 24.5–25 mm |
| `checks.maxRimAngleDeg` | default ≈ 64.2 | 67 | S2 slope at 24.2 mm is 66.5° |
| `source.errata` | one `unresolved` entry | removed | See the asphere-equation note above |
| L4, L6, L14, L16 `apd` / `apdNote` | none / process text | `"patent"` / condition (4) and maker-drawing note | the patent names the nd 1.497 / νd 81.54 glass as satisfying its anomalous-dispersion condition (4) |
| `name` | `… f/4` | `… f/4.0` | Corpus form |
| `subtitle`, `specs`, header comment, `role` ×18, station and gap labels | process vocabulary | plain wording | — |
| `glass` ×18 | `Unmatched (literal patent …; melt unproven)` | `Unmatched (patent nd=…, νd=…; supplier unconfirmed)` | Resolution unchanged (none resolves before or after) |
| Derived floats | up to 17 decimals | at most 6 decimals | Printed values unchanged; engine numbers agree to 5e-7 |

The analysis file was updated to describe the close-focus state, the S2 aperture and the asphere-equation reading. The
pipeline and process text was removed.

After the changes, the surface validator reports no errors at infinity and with the close spacings. Field coverage
reaches the 10.82 mm corner at 33 of 33 stations (before: 31 of 33, with the wide end clipped at S2 at 10.38 mm). The
image-circle check reports 0 undersized.

Open: with the close spacings and infinity-launched chief rays, the wide end reaches 94–98% of the corner (limit at
S4, 16.2 mm). This is not a finite-object test. Recheck S4 against Fig. 3(a) if a finite-object coverage check is
added.

Closed: the patent's condition (4) text and its table of right-hand terms for nd 1.497 / νd 81.54 identify that
glass as anomalous-dispersion material, so L4/L6/L14/L16 carry `apd: "patent"`.

Open: L18 (νd 70.23) has no printed partial dispersion, so colour MTF stays at the reference wavelength.
