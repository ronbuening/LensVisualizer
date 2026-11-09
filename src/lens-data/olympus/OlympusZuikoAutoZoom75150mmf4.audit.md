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
not re-measured; the inferred rims are unchanged from the endpoint files.
