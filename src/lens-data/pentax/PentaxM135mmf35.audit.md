# PENTAX SMC M 135mm f/3.5 — audit log

## 2026-11-09 — Deployment validation

Independent check of US 4,134,645 Example 2 (PDF p. 6 and Claim 2's table, p. 7): 10 R, 9 d, 5 nd/νd and the back
focus agree with the file at one scale factor ×1.35; the stop splits d6 into 5.4 + 26.244 (= 23.44 × 1.35). Engine EFL
134.973 (135.0), f/3.5, half-field 9.0°, total length 109.458; F1.2.3 and F1.2.3.4 reproduce.

Attribution probable: the three examples fit the 1977 Pentax-M 120/2.8, 135/3.5 and 150/3.5 trio by aperture and field
(PhotonsToPhotos maps Example 2 to this lens); marketed 5/5 all-spherical, 1.5 m, 49 mm filter. No maker diagram found.
Open: `focus.closeFocusM` 10 is a placeholder (production 1.5 m); `fStops` stop at 22 (lens closes to 32); four of the
five glasses equal catalog d-line rows; package wording remains for the cleanup pass. No deployment changes. (All four
closed in the cleanup pass below.)

## 2026-11-09 — Cleanup and wording pass

Data file. Header comment rewritten in plain terms, keeping the source facts (patent, example, ×1.35 scale, printed
against derived values, stop and rim choices) and adding the Petzval-sum difference and the glass reading; the float
noise 54.41850000000001 is gone. `subtitle` "US 4,134,645 A, Example 2; qualified product association, inferred
apertures" → "US 4,134,645 A, Example 2 — probable match to the 1977 production lens". `specs` [5 ELEMENTS / 5
GROUPS, ALL SPHERICAL, QUALIFIED PATENT RECONSTRUCTION] → [5 ELEMENTS / 5 GROUPS, DESIGN f = 135 mm, DESIGN F/3.5, ALL
SPHERICAL, PATENT f = 100 SCALED × 1.35]. `catalog.focalLengthMm.design` 134.9726 → 135 (the patent's F = 100 × 1.35).
`catalog.closeFocusM.marketing` 1.5 added. `focus.closeFocusM` 10 → 1e15 with a plain description: the patent prints
the infinity state only and the 1.5 m retail minimum focus is not modeled. `aperture`: f/32 added to `fStops`,
`maxFNumber` 22 → 32, `blades` 8. The retail figures are from Cine Lens Wiki and the PentaxUser review, cited in the
analysis. Roles added to all five elements; group labels FRONT / REAR → Front / Rear.

Glass (catalog minus patent), each label checked with the resolver: L1 S-BSL7 (OHARA) Δnd 0, Δνd +0.04. L2 PBH23
(OHARA) Δnd +0.000002, Δνd +0.017; S-TIH23 (OHARA, +0.09) and SF56A (SCHOTT, −0.12) are also within the window, and the
closest row, the period lead flint, was kept, as PBH53 was for the M 28mm f/2.8. L4 S-TIH10 (OHARA) Δnd 0, Δνd −0.04.
L5 S-BSM81 (OHARA) Δnd −0.000001, Δνd −0.12; LACL60 (HOYA) and J-LAK01 (Hikari) are exact, and OHARA was kept for
consistency with L1, L2 and L4. L3 stays Unmatched: the nearest row, PC2 (HOYA, 1.51821 / 65.16), is 0.16 off in νd (closed 2026-11-09: OHARA BSL22 added to the catalog; see the glass coverage pass).
Four of five pairs pass the d-line coordinate test, so the five `indexReferenceNote` fields were removed.

Analysis. Removed: the evidence-JSON, SHA-256, MTF sample-grid and sibling-duplicate text, "qualified" and the 10 m
"schema placeholder". Added: the product (1977, 5/5, eight blades to f/32, 1.5 m, 49 mm), a five-point attribution
with its caveats (no maker diagram, one retailer's 7/3 count), the seven patent conditions, a glass table, the stop
and rim basis, a patent-against-model table and the sources. Corrected: the L5 text said a higher index reduces the
Petzval sum; the patent says n5 > 1.62 prevents a decrease in it (col. 3).

Engine before and after: EFL 134.9726 mm, f/3.500, half-field 9.0°, stop radius 15.3038 mm, paraxial BFD 54.4069 mm
against the kept printed 54.4185 mm, track 109.458 mm, all unchanged; only `closeFocusM` (10 → 1e15) and the largest
f-number (22 → 32) differ. Surface audit OK; the aperture audit is within 3 % of f/3.5 with no rim limit. Wide-open
transmission 91.3 % at 4.5° and 67.4 % at 9.0°, unchanged. Axial spherical aberration at 135 mm −0.111 / −0.163 /
−0.171 / −0.120 mm at pupil 1 / 0.85 / 0.7 / 0.5, in line with Fig. 4.

Open: L3's edge is about 0.01 mm thick at its 21.33 mm rim, and the L4–L5 air space is 0.39 mm at the 9.45 mm rear
rims. Fig. 3 reads about 21 mm for the front elements and about 11 mm for the rear pair, so the rear rims sit inside the
drawing; rims were left unchanged in this pass (rim items closed in the semi-diameter pass below). No Pentax
construction diagram was found, so the attribution stays probable. The printed Petzval sum (0.018) differs from the
surface sum (0.0125 at F = 100); the convention is unstated.

## 2026-11-09 — Semi-diameter pass against the patent figure

Source: `patents/US4134645.pdf`, PDF p. 3 (sheet 2), Fig. 3, the section of Example 2, a 300 ppi raster measured at
300 dpi. No Pentax construction diagram is known, so Fig. 3 governs. The scan is rotated by 1.4°: the axis runs from
y 1447.5 px at x 780 to y 1426.8 px at x 1640, and every height was taken from the local axis. Vertex crossings (line
centres, just above the axis): S1 926.5, S2 979, S3 1005, S4 and S5 1022, S6 1086, S7 1415.5, S8 1440, S9 1477.5, S10
1489 px. S1 to S10 is 562.5 px for 40.77 patent units, 13.80 px per unit, or 10.22 px per model mm. Single spans run
from 12.1 to 15.1 px per unit and the front group alone gives 13.27, so absolute heights carry about ±4 %. Arc fits of
S1, S5 and S6 suggest 15.0 to 15.5 px per unit vertically, but that would put L1 inside the 19.28 mm f/3.5 axial beam,
so the drawn curves are flatter than the printed radii rather than the figure being anamorphic, and the vertex scale
is used. Rims are outer ink edges averaged over both halves, read from column profiles and pixel dumps clear of the
leader lines and labels.

| Surfaces | Before (mm) | After (mm) | Fig. 3 top / bottom (px) | Fig. 3 (mm) | Evidence |
|---|---|---|---|---|---|
| S1, S2 (L1) | 21.6 | 20.6 | 210 / 212 | 20.65 | Tallest element, pointed tips |
| S3, S4 (L2) | 21.6 | 20.3 | 208 / 207.3 | 20.31 | Flat ends at one height with L3 |
| S5, S6 (L3) | 21.33 | 20.3 | 208.8 / 206.6 | 20.32 | Pointed tips as drawn; 0.79 mm edge at 20.3 mm, 0.008 mm at 21.33 |
| S7, S8 (L4) | 9.45 | 9.9 | 111.7 / 110.9 | 10.89 | Square-cut; held below the S8–S9 contact at 10.02 mm |
| S9, S10 (L5) | 9.45 | 9.9 | 110.7 / 110.4 | 10.81 | Square-cut at L4's height, as drawn |

The figure's rear-to-front height ratio, which needs no scale, is 0.53; the starting rims gave 0.44 and the new ones
0.48. The front rims were 5 to 7 % over the figure and the rear 13 % under it, and the render showed the rear pair
visibly too small. The rear cannot reach the drawn 10.9 mm: with R8 = 64.1385 mm and R9 = −20.871 mm the two faces meet
at 10.02 mm. At 9.9 mm they are 0.08 mm apart. The default `checks.gapSagFrac` of 0.9 stops near 9.5 mm (combined sag
3.27 mm against 3.013 mm allowed of the 3.348 mm gap at 9.9 mm), and 0.98 is the smallest two-decimal value that admits
9.9 mm. Fig. 3 leaves a small open gap there with a much flatter S9, which the printed radius cannot reproduce at the
drawn height.

Light, wide open at infinity, starting rims against new: 100 / 100 / 98.0 / 91.3 / 84.2 / 76.2 / 67.4 % against 100 /
100 / 100 / 96.1 / 89.2 / 81.1 / 71.9 % at 0, 1.5, 3.0, 4.5, 6.0, 7.5 and 9.0°; no field loses light. Restoring any
front element to its starting rim wins back 0.0 points, so the front reductions cost nothing, and the gain comes from
the rear pair.

After the edits the surface audit reports no errors, the aperture audit puts the lens within 3 % of f/3.5 with no rim
limit, the image circle is not undersized, and field coverage is 100 % (9.0° reaches 21.60 mm, corner clear). The
real-ray trace at 21.38 mm and at the 21.63 mm corner shows no axial clip or chief-ray block; the f/3.5 axial ray
crosses S1 at 19.28 mm, S3 at 18.78, S5 at 18.40 and S7 at 9.04, all inside the new rims. Engine values are unchanged:
EFL 134.973 mm, f/3.500, half-field 9.0°, stop radius 15.304 mm, paraxial BFD 54.4069 mm; the traced field limit rises
from 13.4° to 14.0°. The page was checked at infinity, the only printed state, and compared with an overlay of the
model on Fig. 3 at matched scale: the front elements now end where the drawing does, L3 shows an edge, and the rear
pair stands taller but meets at its rims where the drawing leaves a gap.

Open: Fig. 3 draws S9 much flatter than the printed R9, so the rear pair cannot match the drawing in height and rim
gap at once.

## 2026-11-09 — Glass coverage pass

L3 (1.51821 / 65.0) is labelled OHARA BSL22 (1.518206 / 65.04), a discontinued borosilicate crown added to the glass
catalog from the local OHARA 2026-07-01 AGF file; it equals the printed pair (Δνd 0.04), where the catalog's previous
nearest row, HOYA PC2, was 0.16 off in νd. All five elements now trace on catalog dispersion curves. A corpus-wide
resolution dump before and after the catalog addition showed no other element changing its resolved glass.

## 2026-11-09 — Second review: diagram, labels and movement

Compared the model outline with Fig. 3 of `patents/US4134645.pdf` (PDF p. 3, 300 ppi raster), and the Example 2 table and
claim 2 (PDF pp. 6–7). The live page could not be re-shot: the worktree dev server on port 5193 was not running during the
review, so the comparison rests on an overlay of the model on the figure at matched scale. Fresh measurements: the axis
runs from y 1448.5 px at x 750 to y 1426.5 at x 1670 (1.37°); vertex crossings S1 926.5, S2 979, S3 1005, S4/S5 1022, S6
1086, S7 1415.5, S8 1440, S9 1477.5, S10 1489 px, so S1 to S10 gives 13.80 px per patent unit (front group alone 13.27,
rear pair 13.84). Outer-ink rims at that scale: L1 210–212 px (20.6–20.7 mm), L2 about 207.5 (20.3), L3 about 208
(20.3), L4 and L5 about 111 (10.8–10.9), both rear elements square-cut at one height. The tip sag of S1 drawn on the
figure fits a perpendicular scale of about 14.2 px per unit, inside the spread of the axial spans, so the figure is
treated as isotropic. Every SD-pass reading reproduces within 2 %; no rim changed.

| Surfaces | Kind | Baseline (mm) | Final (mm) | Fig. 3 (mm) | Light cost (points) | Verdict |
| --- | --- | --- | --- | --- | --- | --- |
| S1, S2 (L1) | cut | 21.6 | 20.6 | 20.65 | 0.0 | keep: slight |
| S3, S4 (L2) | cut | 21.6 | 20.3 | 20.31 | 0.0 | keep: slight |
| S5, S6 (L3) | cut | 21.33 | 20.3 | 20.32 | 0.0 | keep: slight |
| S7–S10 (L4, L5) | raise | 9.45 | 9.9 | 10.85 | gains up to 5.0 | keep: figure height, held below contact |

The worst loss in the lands-and-cuts run against the baseline rims, with leave-one-out restores, is 0.0 points at every
field; restoring any element wins back 0.0 points. The lens has no lands. Wide-open transmission is 100 / 100 / 100 /
96.1 / 89.2 / 81.1 / 71.9 % at 0 to 9.0° in 1.5° steps, against 100 / 100 / 98.0 / 91.3 / 84.2 / 76.2 / 67.4 % on the
baseline rims. With the printed R8 = 47.51 and R9 = −15.46 (×1.35), S8 and S9 meet at 10.02 mm, and the surface
audit refuses the rear pair at 9.9 mm with `checks.gapSagFrac` 0.97 or the default 0.9 (combined sag 3.27 mm against
3.248 or 3.013 mm allowed of the 3.348 mm gap), so 0.98 stands and the SD-pass refusal was quoted correctly. The figure
draws S9 with roughly twice the printed radius, which is why it can show both the taller rear pair and an open rim gap.

Checks after the review: surface audit OK; aperture audit within 3 % of f/3.5 with no rim limit; image circle not
undersized; field coverage 100 % (9.0° reaches 21.60 mm, corner clear). Engine half-field 9.0° and f/3.5 against 9.0°
and f/3.5 on the baseline rims; traced field limit 14.0° against 13.4°.

Labels and movement. L1 to L5 are the patent's own designations from the claims; each `type` agrees with the signs of R
(L1 +47.40 / +417.0, L2 −176.7 / +163.1, L3 +28.28 / +66.84, L4 +36.09 / +64.14, L5 −20.87 / −70.47), every element
has a focal length (L5 −46.78 mm by the thick-lens formula), and the roles agree with cols. 2–3. The patent names no
groups; "Front" (S1–S6) and "Rear" (S7–S10) leave the modeled stop between them. No cemented pair, asphere or
special-glass tag, and the patent designates none. The patent prints the infinity state only and names no focusing
group, so no gap varies and the focus description says so; there is no movement to check.

Colour against the chromatic panel of Fig. 4 (d and g, F = 100, read from the panel's own axis line at 94.5 px per
0.2): the d-line spherical aberration agrees within 0.01 at every zone (model −0.082 / −0.120 / −0.126 / −0.089 at
pupil 1 / 0.85 / 0.7 / 0.5, figure about −0.08 / −0.13 / −0.13 / −0.09). The model's paraxial g focus lies +0.146
behind the d focus against about +0.156 on the plot, and the zonal g values run 0.004 to 0.010 low; at full aperture
the plot's g and d curves join near −0.08, where the model's g reads −0.105. S-TIH23 on L2 would bring paraxial g to
+0.154, but its νd of 26.29 does not round to the printed 26.2, so PBH23 stays. Glass labels all resolve; S-BSM81 on
L5 (νd 60.08) is the one label that does not reproduce the printed 60.2, which HOYA LACL60 matches exactly. The
assignee spelling equals the catalog's canonical "Asahi Kogaku Kogyo Co., Ltd." (front page: Asahi Kogaku Kogyo
Kabushiki Kaisha).

The analysis still said, in the glass section and the limitations list, that L3 traced on dispersion derived from its
printed pair; since the BSL22 label it traces on the catalog curve, and both sentences were corrected.

Open: the live page was not re-shot in this review (dev server down); the rims are unchanged from the SD pass, whose
page check stands.

Open: Fig. 3 draws S9 much flatter than the printed R9, so the rear pair cannot match the drawing in height and rim
gap at once (carried from the SD pass).

Coordinator follow-up, same day: L5 (1.64000 / 60.2) moves from OHARA S-BSM81 (νd 60.08, which does not round to the
printed 60.2) to HOYA LACL60 (1.64000 / 60.20), the exact row; the g-line change is negligible.
