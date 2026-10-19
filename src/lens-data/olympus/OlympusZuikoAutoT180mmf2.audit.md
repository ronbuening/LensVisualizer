# Audit Log — OLYMPUS ZUIKO AUTO-T 180mm f/2

Patent: JP H05-042643 B2 (family US 4,558,928 A), Example 1, scaled 1.8×

## 2026-10-19 — Deployment validation and wording pass

Source re-read: the JP scan (pp. 3–4, Fig. 1 on p. 5) and the US table (p. 16) were read directly. All 18 radii, 17
spacings, 10 nd/νd pairs, the stop position (5.22 behind r13, moving with IIb) and the three variable gaps at all three
printed states divide back from the file by 1.8 with no mismatches. There are no aspheres. The JP scan prints
φa = −0.828; the US prints −0.818, which the model reproduces (φb = −1.142 in both). Fig. 1 matches the element shapes,
the 10/8 construction, the cemented pairs and the stop position.

First-order, patent vs model: f = 100 vs 99.999 (179.998 mm scaled); F/2.0 vs F/2; 2ω = 13.7° vs a chief ray reaching
the 21.65 mm full-frame corner at 6.8°. The back focus is not printed; the Gaussian value is 57.720 mm (32.067 units). Traced
paraxially, the printed −3056 and −1031 gap rows focus at 3047 and 1031 units from the first surface. The printed
xa/xb table is the gap-derived movement transposed (Example 2 repeats the layout); the gap reading is used. The near-row
d13 is taken as 14.12 instead of 14.13 so the rear group stays fixed. The 1.6 m endpoint (magnification −0.140)
extrapolates a quadratic travel law about 37–40% past the last printed state (about 2.07 m, −0.102).

Scale and product: the JP description names 180 mm F/1.8 or F/2.0 telephotos; Example 1 is the F/2.0 design. The OM
Zuiko Auto-T 180mm f/2 is published as 10 elements in 8 groups with internal focus, ED glass, 1.6 m minimum focus and
a 100 mm filter (phillipreeve.net review; kamerastore listing), and the review measured about 1:7 maximum
magnification. No maker cross-section diagram was found to compare against.

Checks: audit:surface OK; audit:image-circle 0 undersized; audit:field-coverage 100% at the corner; real-ray clearance at
infinity shows no axial clipping or chief-ray blocking.

Fields changed in this pass: header comment, subtitle, specs, focus description and gap labels in the data file
(optics unchanged). In the analysis: title, production-correlation paragraph (citing the JP 180 mm F/2.0 statement),
element table with focal lengths and roles, glass note (L1/L4 ED-class, untagged), focus section (transposed table,
patent conditions, extrapolation), and the limits section; process history, test counts and the external archive
link were removed.

Closed (2026-10-19, semi-diameter pass below): the inferred front rim (50.98 mm semi-diameter) exceeded what a 100 mm
filter thread allows; it is now 45.0 mm from Fig. 1. Closed (2026-10-19, glass relabel below): the maker has not
published which elements are ED; L1 and L4, the only FCD1-class elements, now carry `apd: "inferred"`.

## 2026-10-19 — Semi-diameter pass against the patent figure

Source: JP H05-042643 B2 (local `JPH0542643B2.pdf`), Fig. 1 on PDF page 5 (printed page 19), the section of Example 1
at infinity, read at the scan's native 347 dpi. The figure prints no image plane at scale; the short line about
9.9 mm behind r18 is not the image surface and was not used.

Scale: worked in the file's 1.8×-scaled units. Vertex crossings on the axis put r1 at x = 841 px and r18 at 2256 px;
157.230 mm / 1415 px = 0.1111 mm/px. Checks: r1–r13 (98.586 mm / 884 px) gives 0.1115, r9–r18 (82.476 mm / 746 px)
0.1106, and the stop line falls 85 px (9.4 mm) behind r13 as printed. The figure is not anamorphic: the concave r6
(R 55.593 mm = 500 px) traced row by row lands within 1–2 px of the circle at heights of 50–270 px with the same
mm/px vertically, and the r1 arc agrees likewise. Rim heights are half the distance between each element's top and
bottom flat edges, so the axis position does not enter. Prescription LSA is 0.09 mm at full aperture, so the axial
floors below are not a misprint artefact.

| Surface | Before | Fig. 1 | Ray floor (F/2, ∞) | After | Evidence |
|---|---:|---:|---:|---:|---|
| 1, 2 (L1) | 50.98 | 43.5 | 45.00 / 44.16 | 45.0 | square rim; figure 3% under the marginal ray, floor governs |
| 3, 4 (L2) | 48.94 | 39.6 | 40.01 / 38.28 | 40.1 | square rim; floor governs at r3 |
| 5 (L3 front) | 47.25 | 36.7 | 36.79 | 36.8 | full flat-cut edge of L3; floor governs |
| 6 (L3 rear) | 39.13 | 30.9 | 31.77 | 31.8 | concave face ends at the drawn flange step; floor governs |
| 7, 8 (L4) | 39.13 / 40.01 | 31.0 | 31.52 / 30.51 | 31.6 | square rim; floor governs at r7 |
| 9, 10 (IIa, L5) | 30.0 | 26.2 | 25.43 / 23.97 | 26.2 | figure |
| 11–13 (IIb, L6–L7) | 30.0 | 22.6 | 22.58 / 22.08 / 20.39 | 22.6 | figure, equal to the floor at r11; one height across the pair as drawn |
| 14, 15 (L8) | 24.70 | 19.75 | 17.97 / 17.65 | 19.8 | figure |
| 16–18 (L9–L10) | 24.91 | 19.9 | 16.57 / 15.60 / 14.91 | 19.9 | figure; one height across the pair as drawn |

All 18 surfaces changed; the stop (derived, 20.03 mm) was not touched. Fig. 1 draws the front group 2–3% under the
F/2 axial marginal ray at infinity, so those five rims sit at the ray height rounded up; every other rim follows the
figure. The step order of the figure (L1 > L2 > L3 > L4 > IIa > IIb > L8 ≈ L9–L10) is kept; the previous values had
IIa equal to IIb. An overlay of the new outline on the scan matches every element edge, including L3's rear flange;
L1 and L4 stand 1.5 mm and 0.6 mm proud of the drawing because of the floor.

Clearance after the edit: the surface validator reports no errors; the image-circle check finds nothing undersized;
the traced chief ray reaches the 21.65 mm corner at 6.8° (patent 2ω = 13.7°) at 100%; the real-ray trace shows no
axial clipping or chief-ray blocking at infinity or at the 1.6 m keyframe; the aperture census is within 3% of F/2.
Geometric transmission at the 6.8° corner falls from 72.9% to 51.0% wide open (L1 now clips 58% of the upper side
of the corner bundle, the rear group about 40% of the lower side). The engine's paraxial half-field estimate falls
from 12.37° to 10.76°, still above the 6.85° patent field. EFL 180.00 mm and F/2 are unchanged.

Close focus: with the physical stop held, the on-axis cone at 1.6 m would need 52.0 mm at L1 and 44.3 mm at r5; the
front group now passes 83.4% of the stop radius (before: 98.0%). The image-side NA there is 0.224 against 0.265 for
the full stop and 0.250 at infinity, and stays above 0.219 = NA/(1 + β), the value to which the patent's claim 3
resizes the iris during focusing. This is recorded in the analysis file.

Resolved: the earlier open item on the front rim; the 90 mm clear diameter now fits inside the 100 mm filter thread.
No maker construction diagram was available for comparison (see the deployment pass above), so the patent figure is
the only drawing used.

Glass relabel (2026-10-19, same batch): the element `glass` labels were changed from "patent nd/vd" to catalog
equivalents matched on the printed nd/νd, with nd/νd left as printed: L1 and L4 HOYA FCD1, L2 OHARA S-PHM51, L3 OHARA
BPH5, L5 OHARA BSL21 (a discontinued row added to the glass catalog from the OHARA AGF, nd 1.503779 / νd 66.81),
L6 OHARA S-TIM28, L8 OHARA S-LAH64 (νd 47.37 against the printed 47.43), L9 HOYA E-F5 and L10 OHARA S-LAL12. L7
(1.52682 / 51.12) has no catalog row within printed precision (nearest HOYA CF2, 1.52630 / 51.05) and keeps the
patent pair. The trace now uses catalog dispersion curves for nine of ten elements. L1 and L4 are tagged
`apd: "inferred"` with FCD1's catalog P_g,F (0.5389, about +0.032 above the normal line): Olympus markets ED glass
for this lens without naming positions, and these are the only fluorophosphate-class elements. The analysis glass
section and scope note were rewritten to match; it quoted no chromatic figures, so none needed recomputing.
