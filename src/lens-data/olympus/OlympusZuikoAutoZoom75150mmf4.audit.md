# OLYMPUS ZUIKO AUTO-ZOOM 75-150mm f/4 — audit log

Replaces the hidden endpoint pair `OlympusZuiko75150mmf4PatentWide` / `OlympusZuiko75150mmf4PatentTele` (US 3,796,481
Example 4, native scale, validated 2026-11-09). That check found every R, d and nd/νd of Example 4 correct at both
printed rows, the dB2 1.96 → 2.96 mm correction justified, and a strong construction match to the production lens, but
two hidden fixed endpoints publish nothing and the D3-midpoint stop would be crossed by the compensator in mid-zoom.

## 2026-11-09 — Cleanup and wording pass

Rebuilt as one visible zoom file. Prescription unchanged from the validated endpoints: 26 radii, 22 fixed thicknesses,
15 nd/νd pairs and both printed dA5/dB7/dC3 rows (2.086/25.371/6.707 and 26.433/1.024/6.707 mm), with dB2 = 2.96 mm.

Zoom: two printed stations (76.5, 153 mm; `published: true`) and 13 solved stations (80, 85, 90, 95, 100, 106, 112,
118, 124, 130, 136, 142, 148 mm; `published: false`). Each solved station keeps dA5 + dB7 + dC3 = 34.164 mm (the printed
sum), sets dA5 for the target EFL and dC3 for a paraxial image on the fixed plane. G1–G3 trace afocal at every station
(axial slope after G3 below 1e-5), so G4 forms every image at its own back focus. Engine EFLs 76.5244, 80.0000 … 148.0000,
153.0494 mm; BFD 44.3928 mm at every solved station, 44.3930 / 44.3927 at the printed rows (±0.00015 against the fixed
plane). Worst defocus from linear interpolation between stations 0.033 mm (near 103 mm, between 100 and 106 mm);
interpolating the printed rows alone gives 5.2 mm. G3 travels up to 4.18 mm toward G4 (dC3 minimum 2.53 mm near 108 mm).

Image plane: the last gap is 44.392815 mm, the mean of the two printed rows' paraxial back focus (the endpoint files
carried 44.392961 and 44.392669).

Stop: moved from the midpoint of dC3 (3.3535 mm ahead of surface 16) to 1.0 mm ahead of surface 16, fixed with G4, as
the MIR construction diagram draws the iris; G3 comes no closer than 1.544 mm (station 106 mm). Gap 15 is now
dC3 − 1.0. `apertureModel: "fixed-iris"`: stop radius 11.9213 mm from F/4 at the wide station; engine f-number 4.000 at
all 15 stations (EP radius exactly EFL/8). audit:aperture: 15 stations within 3 % of f/4, no rim limit.

Rims: the validated endpoint semi-diameters are kept unchanged; no station clips the f/4 axial beam (largest axial
heights: S1 19.13 / 22.5, S6 12.81 / 15, S9 12.13 / 13, S15 12.01 / 13.5 mm). Field coverage 100 % with the corner chief
ray clear at all 15 stations; clearap at Y = 21.63 shows no axial clipping or chief-ray block. audit:surface OK.

Focus: the endpoint placeholder `closeFocusM: 1` is replaced by the static form (1e15) with
`catalog.closeFocusM.marketing: 1.6` (MIR specification). The patent prints infinity only and names no focus group.

Errata: the dB2 correction is kept, with evidence `source-summary` and `sibling-example` (Example 4's text says only
group D differs from Example 3; Examples 1 and 3 and claim 4 print 2.96). With 2.96: fB −34.4316 (printed −34.432),
endpoint BFDs equal to 0.0003 mm; with 1.96: fB −34.471, image shift 0.74 mm, L5 edge vanishes at about 14 mm radius.
The German family print DE 2221118 A1 reads 2.96 in its OCR text only, so it is not cited as evidence. The endpoint
files' `unresolved` entry (an attribution disclaimer, not a source contradiction) is dropped.

Glass: all 15 `Unmatched` labels replaced by exact catalog equivalents (|Δnd| ≤ 0.00001, |Δνd| ≤ 0.12; 12 of 12
distinct pairs, so the table reads as d-line): L1 S-BSL7, L2/L8 S-TIH13, L3 PC2, L4/L7 N-PSK53A, L5 PBH23, L6 S-BAL11,
L9 S-BSM22, L10/L12 BSL21, L11 BK4, L13 S-LAM2, L14 BAFD3, L15 J-BASF6; each confirmed with trylabel. No `apd`: the
maker publishes no special-dispersion element.

Wording: subtitle "US 3,796,481, Example 4 — strong construction match to the production lens"; specs "15 ELEMENTS /
11 GROUPS", "DESIGN f = 76.5–153 mm", "DESIGN F/4", "ALL SPHERICAL"; `focalLengthMm` [75, 150] / [76.5, 153]; roles
rewritten per element; `cemented` tags D1–D4 added to match the four drawn doublets; groups G1–G4; gap labels use the
patent's dA5, dB7, dC3. The analysis is rewritten as a zoom analysis: attribution with caveats, afocal-plus-relay
architecture and station table, the patent's twelve conditions (all met), the erratum, and the MIR diagram comparison.

Open: `aperture.blades` is not set (only a retailer listing gives 8 blades). Corner vignetting with the moved stop was
not re-measured; the inferred rims are unchanged from the endpoint files. (Vignetting closed: measured in the
semi-diameter pass below.)

## 2026-11-09 — Semi-diameter pass against the patent figure

Source: `patents/US3796481.pdf`, page 3, Fig. 2 (the Example 4 layout; one panel, drawn near mid-zoom with dA5 ≈ 16,
dB7 ≈ 14.6 and dC3 ≈ 1.4 mm), native 300 dpi scan rotated 1.26°. Scale 9.0 px/mm from the S1–S26 vertex span (1023.5 px
for 114.144 mm, a span that does not change with zoom); arc fits give 9.3 (S1, S16) and 8.8 (S23) px/mm, so heights carry
about ±4 %. Group spans read 8.5–9.5 px/mm: the drawing is schematic in its spacings. Each half-height is the mean of the
top and bottom ink (top only where leader lines for LB1–LB4 do not reach), so the axis offset cancels.

Figure readings at 9.0 px/mm against the starting rims: L1 22.9 (22.5), L2 22.2 (21.3), L3 rear 20.6 (21.3), L4 15.5 (15),
L5 13.8 (15), L6 13.9 (13), L7 13.4 (13), G3 12.7 (13.5), L10 12.5 (13.5), L11 12.5 (14.5), L12/L13 11.6 (14), L13 rear
concave face 9.2 (12, beyond it a bevel to 11.6), L14 15.5 (14.8), L15 16.4 (15.2).

Changed: S5 21.3 → 20 (L3 drawn 1.5 mm below L2 on both sides; 20 matches the 9.3 px/mm reading and costs 1.2 points
where 19.8 cost 2.0); S8 15 → 13.8 (L5 drawn level with L6, below L4); S13–S15 13.5 → 12.7 (G3 drawn level with the relay
menisci); S16–S17 13.5 → 12.5 and S18–S19 14.5 → 12.5 (L10 and L11 drawn equal; the model had L11 taller); S20–S21 14 →
11.6 and S22 12 → 9.6 (the cemented pair drawn below the menisci, with L13's rear face ending inside a bevel). S22 at the
figure's 9.2 mm lost 5.4 points (6.8° at 148 mm); 9.5 lost 3.3; 9.6 is the least that meets the 3-point rule. Kept: L1,
L2 front and interface, L4, L6/L7 (13 mm: the facing deep concave faces leave 0.59 mm at 13 mm, 88.8 % sag intrusion
against the 90 % limit, and the figure's 13.4–13.9 is inside the noise), L14 (15.5 mm would give L14 a negative edge; 14.8 equals
the reading at the relay's own 9.42 px/mm span scale) and L15 (+4 % at that scale). No raise was needed for a clip.

Floors at the f/4 axial beam, maximum over all 15 stations: S5 17.88, S8 12.43, S15 12.01, S16 12.00, S18 11.63, S20
10.72, S22 8.45 mm; every new rim clears them. Light, against the starting rims at every station (all 13 solved and both
printed), worst loss 2.5 points at 6.6° and 153 mm; corner 53.2 → 53.0 % at 76.5 mm, 61.5 → 61.3 % at 90 mm, 57.0 →
57.0 % at 106 mm, 48.3 → 47.9 % at 153 mm. Restoring one element at a time wins back 1.2 (S5), 1.7 (L12/L13), 0.2 (L5,
G3) and 0.0 points (L10, L11). Engine half-field 20.77° to 9.87° and f/4.000 at all stations are unchanged; validator,
aperture audit (15 stations within 3 % of f/4), image circle and field coverage (corner chief ray clear at all 15
stations) pass, with no axial clip or chief-ray block at Y = 21.63 mm. The rendered section at 76.5, 108 and 153 mm
matches the figure's step order; the MIR production drawing agrees on order (G3 about level with the relay front, the
relay's cemented pair smaller with a bevelled rear, the rear pair the tallest relay elements).

## 2026-11-09 — Second review: diagram, labels and movement

Compared the live page at 76.5, 90, 108, 124 and 153 mm, the zoom-movement overlay at 76.5, 106 and 153 mm and the
element inspector with Fig. 2 (page 3), re-measured at 300 dpi along the local axis line (tilt 0.0224). Scale: the
S1–S26 vertex span is 1023.5 px for 114.144 mm (8.97 px/mm); arc fits give 9.25 (S1), 9.51 (S11), 9.27 (S16), 9.06
(S22) and 9.10 (S23) px/mm, so heights carry about ±4 %. Half-heights at 9.0 px/mm (mean of top and bottom ink, bottom
only under the LB1–LB4 leaders): L1 22.9, L2/L3 22.1, L3 rear 20.6, L4 15.2–15.5, L5 rear about 14 (drawn as a knife
edge meeting L4's rear corner), L6 13.9, L7 13.6, G3 12.6, L10 12.4, L11 12.5, L12/L13 11.6, L13's concave rear face
9.2 inside the bevel, L14 15.4, L15 16.5 mm. Every rim is within 10 % of these readings and the step order on the page
matches the figure; L15 is the closest call (15.2 mm against 16.0–16.5 mm at 9.25–9.0 px/mm) and is kept.

Changes:

- S22 9.6 → 9.52 mm. The semi-diameter pass tested one decimal. In both light runs (every station, and the zoom
  fractions between them) S22 at 9.50 loses 3.3 points, 9.51 loses 3.1, 9.52 loses 2.97 and 9.6 loses 2.54, all at
  6.6° and 153 mm. 9.52 is the least two-decimal raise inside the 3-point budget, 0.3 mm above the figure's 9.2 mm and
  clear of the 8.45 mm axial beam. The validator passes and the corners do not move.
- `focalLengthMm` added to all 15 elements (thick lens in air, 185.13 to −19.73 mm, as quoted in the analysis); the
  inspector showed "FL = —" before.

Lands and cuts against the rims before the semi-diameter pass (no lands):

| Faces   | Baseline | Final | Figure | Restore wins (points) | Verdict                     |
| ------- | -------: | ----: | -----: | --------------------: | --------------------------- |
| S5      |     21.3 |  20.0 |   20.6 |                   1.2 | keep: slight                |
| S8      |     15.0 |  13.8 |    ~14 |                   0.2 | keep: slight                |
| S13–S15 |     13.5 |  12.7 |   12.6 |                   0.2 | keep: slight                |
| S16–S17 |     13.5 |  12.5 |   12.4 |                   0.0 | keep: costs nothing         |
| S18–S19 |     14.5 |  12.5 |   12.5 |                   0.0 | keep: costs nothing         |
| S20–S21 |     14.0 |  11.6 |   11.6 |        2.2 (with S22) | keep: slight                |
| S22     |     12.0 |  9.52 |    9.2 |    2.2 (with S20–S21) | partly raised to the budget |

Worst loss for the whole lens is 2.97 points at 6.6° and 153 mm in both runs. Corners stay at 53.0 % (76.5 mm), 61.3 %
(90 mm), 57.0 % (106 mm) and 47.9 % (153 mm). Engine half-field 20.77° to 9.87° and f/4.000 at all 15 stations are
unchanged; aperture audit, image circle, field coverage (corner chief ray clear at all 15 stations) and the real-ray
check at Y = 21.63 mm pass.

Movement: G1 and G4 (with the stop) are fixed; dA5 + dB7 + dC3 is 34.164 mm at all 15 stations. G2 moves toward the
image monotonically: 0, 2.12, 7.29, 13.54, 18.64, 22.45 and 24.35 mm at 76.5, 80, 90, 106, 124, 142 and 153 mm. G3
moves toward G4 and back: 0, 1.01, 3.00, 4.16, 3.54, 1.62 and 0 mm at the same stations. This matches the patent text
(G2 moved "as shown by an arrow", G3 reciprocated "as shown by a curved arrow") and Fig. 2's straight arrow under LB
and return arrow under LC. Stations ascend and every gap lists them in that order. The overlay shows G2 travelling
24.35 mm toward the image, G3 a short excursion that returns at 153 mm, and G1 and G4 as single points; the slider ends
read 76.5 and 153 mm. Focus is static and the slider reads "Not modeled".

Labels: element types agree with the signs of R; roles are true; no aspheric surface or special-glass tag (the patent
and the MIR listing name none). Brackets G1–G4 span surfaces 1–5, 6–12, 13–15 and 16–26; D1–D4 sit over the four
cemented pairs; the stop is drawn between L9 and L10; the gap labels dA5, dB7 and dC3 are the patent's.

Colour against Figs. 6a–6c (d, F and g at 76.5, 108.18 and 153 mm, read on the local axis): d and the F margin agree
within about 0.03 mm. The model's paraxial g focus lies +0.16, +0.17 and +0.17 mm behind d against the plots' +0.10,
+0.13 and +0.10 mm; paraxial F is −0.03, −0.04 and −0.07 mm against −0.06, −0.06 and −0.09 mm. No single relabel
explains the g offset: L13 is the strongest lever (0.054 mm per 0.01 of PgF) and its candidate rows differ by at most
0.003 in PgF.

Glass for the coordinator: L3's PC2 (νd 65.16) is 0.12 from the printed 65.04, while OHARA BSL22 (1.518206 / 65.040)
matches to the printed digits. L4 and L7 carry SCHOTT N-PSK53A, a lead-free glass much later than this 1971 design;
HOYA PCD4 (1.618 / 63.40) and OHARA S-PHM52 (1.618 / 63.33) sit in the same window.

Open: the model's paraxial g focus sits 0.04–0.07 mm behind the patent's Figs. 6a–6c; no catalog row available here
accounts for it.

Coordinator follow-up, same day: L3 (1.51821 / 65.04) moves from HOYA PC2 (νd 65.16) to OHARA BSL22 (65.04), the exact
row added to the catalog for this batch; L4 and L7 (1.61800 / 63.38) move from SCHOTT N-PSK53A, a modern glass, to HOYA
PCD4 (1.618 / 63.4), a dense phosphate crown of the design's period with the same coordinates. Every element still traces
on a catalog curve.
