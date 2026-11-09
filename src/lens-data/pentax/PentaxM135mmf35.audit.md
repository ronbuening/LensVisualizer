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
consistency with L1, L2 and L4. L3 stays Unmatched: the nearest row, PC2 (HOYA, 1.51821 / 65.16), is 0.16 off in νd.
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
