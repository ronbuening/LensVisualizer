# Audit Log - Canon EF 70-200mm f/2.8L IS II USM

Patent: US 2009/0296231 A1, Numerical Embodiment 2

## 2026-06-25 - Canon folder patent audit

### Phase 1 - Glass corrections

- Rechecked the local patent PDF `patents/US20090296231A1.pdf`, data file, and analysis sidecar.
- No glass label changes were needed. The patent gives nd/vd values only; the OHARA-equivalent labels remain nearest public catalog matches, not Canon material disclosures.
- High-index rows are already represented by their nd/vd values and dense-flint / dense-lanthanum labels.

### Phase 2 - Retained-information audit

- No clear-aperture/effective-diameter table was found for Numerical Embodiment 2 in the local PDF text. Existing SDs remain inferred from marginal/chief-ray envelopes and renderer limits as documented in the file header.
- Retained the infinity-only zoom model; the patent does not tabulate close-focus spacings.

### Phase 3 - Spectral / metadata enrichment

- Retained existing `apd: "patent"` metadata on the PR/N2 fluorophosphate elements and the fluorite/UD elements already identified in the file.
- No new dPgF values were added because S-FPL51 elements already carry line-index data and the patent provides only the conditional theta_gF inequality for the PR/N2 material family.

## 2026-10-12 - Semi-diameter pass for the stated axial beam

Rule: "A clipped stated beam" in `agent_docs/patent-figure-sd-audit-procedure.md` and the 2026-10-08 entry on clipped inferred rims in `agent_docs/decisions.md`. Only `sd` values and `gapSagFrac` changed. `R`, `d`, `nd`, `vd`, glass labels, `nominalFno` and the `STO` row are as before, and no semi-diameter was lowered. The prescription was checked first: its on-axis longitudinal spherical aberration at the full f/2.9 pupil is -0.094 / +0.144 / -0.018 mm at 72.14 / 135 / 193.97 mm (largest zonal value -0.148 mm), so the clipped beam is a rim matter and not a misprint.

### Starting point

The stated ray is the f/2.9 on-axis marginal ray (the patent table prints F-number 2.9 at 72.14, 135.00 and 193.97 mm). Before this pass the file traced f/2.991 at 72.14 mm and f/2.991 at 135 mm, both stopped by surface 28, and f/3.008 at 193.97 mm, stopped by surface 16. An exact meridional real-ray trace per station found nine surfaces below the ray and no others; the repo's proposal listing names the same nine with the same values, a largest raise of 3.8 %, no flag and an empty square-rim column. Every one of the nine needs most at 193.97 mm. Behind the variator the ray height barely changes with zoom (the iris radius for f/2.9 is 17.656 / 17.652 / 17.658 mm), which is why surfaces 21-29 clipped at all three stations.

| Surface | Face | Before | Ray at 72.14 / 135 / 193.97 mm | After | Raise | FIG. 4 draws |
| --- | --- | ---: | --- | ---: | ---: | --- |
| 12 | L6 rear | 15.5 | 9.632 / 12.870 / 15.676 | 15.7 | +1.3 % | curve runs out to the L7 rim, about 16.7; L6 outer rim 17.8 |
| 13 | L7 front (D1) | 15.5 | 9.989 / 13.020 / 15.697 | 15.7 | +1.3 % | D1 block 16.7 |
| 15 | L8 rear (D1) | 15.7 | 10.460 / 13.517 / 16.276 | 16.3 | +3.8 % | D1 block 16.7 |
| 16 | L9 front | 15.7 | 10.590 / 13.555 / 16.276 | 16.3 | +3.8 % | curve runs out to the L8 rim, about 16.7; L9 outer rim 17.4 |
| 21 | L11 rear | 16.85 | 17.320 / 17.338 / 17.341 | 17.35 | +3.0 % | L11/L12 block 18.1 |
| 22 | L12 front | 16.85 | 17.320 / 17.337 / 17.340 | 17.34 | +2.9 % | L11/L12 block 18.1 |
| 23 | L12 rear | 17.5 | 17.617 / 17.635 / 17.638 | 17.7 | +1.1 % | L11/L12 block 18.1 |
| 28 | L14 rear | 15.9 | 16.435 / 16.434 / 16.437 | 16.5 | +3.8 % | curve meets the flat L15 face at the rim, between the L15 rim (16.8) and the L14 rim (17.3) |
| 29 | L15 front (D2) | 15.9 | 16.411 / 16.410 / 16.414 | 16.5 | +3.8 % | D2 block 16.8 |

Values are rounded up at the precision each surface was stored at: 0.01 mm for 21 and 22, 0.1 mm for the rest. The new rims stand 0.024 / 0.0035 / 0.024 / 0.024 / 0.009 / 0.0002 / 0.062 / 0.063 / 0.086 mm above the ray at 193.97 mm, in the table's order. The other 33 glass surfaces keep their values; the closest of them to the ray are 20 (0.054 mm clear), 26 (0.061), 8 (0.118), 9 (0.138) and 31 (0.145).

### Which rule set each value

No element with a raised face carried one value on both faces, so the square-rim rule (one value kept on both faces) had nothing to act on and every element was raised face by face. The equal values in the old table sat across air spaces, not across elements.

- L6 (11 / 12), 18.5 / 15.5 before: FIG. 4 draws the rear face narrower than the outer rim, with the rear corner cut back to the L7 rim. Face by face: 12 rises to 15.7; 11 clears the ray (16.741 mm) and stays.
- L7 (13 / 14) and L8 (14 / 15), cemented D1, 15.5 / 18.0 / 15.7 before: 13 rises to 15.7 and 15 to 16.3, each to its own ray height. The shared junction 14 clears the ray (16.317 mm) and keeps 18.0 for both partners.
- L9 (16 / 17), 15.7 / 17.8 before: 16 rises to 16.3; 17 clears (16.730 mm) and stays.
- L11 (20 / 21), 17.4 / 16.85 before: 21 rises to 17.35; 20 clears by 0.054 mm (ray 17.346 mm) and stays.
- L12 (22 / 23), 16.85 / 17.5 before: both faces clipped and each rises to its own ray height, 17.34 and 17.7.
- L14 (27 / 28), 17.4 / 15.9 before: 28 rises to 16.5; 27 clears (17.025 mm) and stays.
- L15 (29 / 30) and L16 (30 / 31), cemented D2, 15.9 / 16.0 / 15.3 before: 29 rises to 16.5. The shared junction 30 clears the ray (15.559 mm) and keeps 16.0 for both partners; 31 clears (15.155 mm) and stays.

### How FIG. 4 draws the rims

FIG. 4 (Sheet 4 of 13, PDF p. 5 of `patents/US20090296231A1.pdf`) is the wide-angle-end section of Numerical Embodiment 2. It is a single panel; the patent draws no telephoto panel for this embodiment. The page image is 2560 x 3300 px at 300 dpi. The axis runs up the page with the object at the bottom and leans 0.3 degrees (x = 1387 px at y = 620, 1375 px at y = 2850), so each half-height is half the distance between the left and right rim lines.

Scale: the surface-1 vertex is at y = 2770.5 px and the surface-43 vertex at y = 1098.5 px, 1672 px for 184.76 mm, 0.1105 mm/px. Two spans check it: surfaces 1 to 17, 563 px for 61.89 mm (0.1099 mm/px), and surfaces 25 to 43, 556.5 px for 62.34 mm (0.1120 mm/px). The inner ends of the stop bars are 315 px apart, a 17.4 mm half-opening against the 17.66 mm the f/2.9 iris needs, an agreement of 1.5 %. Readings are rim-line centres (outermost ink less 2 px for half of the 4 px line) and are good to about 0.3 mm.

| Element | Rim as drawn | Half-height | Stored now (front to rear) |
| --- | --- | ---: | --- |
| L6 (11-12) | square outer rim, rear corner cut back to the L7 rim | 160.75 px, 17.8 mm | 18.5 / 15.7 |
| L7 + L8 (13-15) | one square-cut block | 151.5 px, 16.7 mm | 15.7 / 18.0 / 16.3 |
| L9 (16-17) | square-cut; front curve meets the L8 rear face at the L8 rim | 157.5 px, 17.4 mm | 16.3 / 17.8 |
| L10 (18-19) | square-cut | 164.5 px, 18.2 mm | 18.3 / 18.2 |
| L11 + L12 (20-23) | one square-cut block; the 0.09 mm air space is a single line | 164 px, 18.1 mm | 17.4 / 17.35 / 17.34 / 17.7 |
| L13 (25-26) | square-cut | 166.25 px, 18.4 mm | 18.0 / 17.5 |
| L14 (27-28) | square-cut; rim rests on the flat front of L15 | 156.75 px, 17.3 mm | 17.4 / 16.5 |
| L15 + L16 (29-31) | one square-cut block | 151.75 px, 16.8 mm | 16.5 / 16.0 / 15.3 |

The drawing shows every raised element at or above its new height, so it does not contradict any raise, and no value was widened to a figure reading.

### Cross-gap limit

The eight pair faces had been held at 89 % of their air gaps by the default cross-gap limit, which is what put them under the ray. The validator refused the raised values on all four pairs at the default 0.90, and on 15/16 and 28/29 at 0.96. `gapSagFrac` is therefore 0.97, the smallest two-decimal value that admits the set. No pair crosses at the new rims, and FIG. 4 draws all four meeting at the rim.

| Air pair | Axial gap | Before: rim, share of gap | After: rim, share of gap | Air left at the rim | Faces would touch at |
| --- | ---: | --- | --- | ---: | ---: |
| 12 / 13 (L6 rear, L7 front) | 5.79 mm | 15.5 mm, 89.4 % | 15.7 mm, 91.9 % | 0.471 mm | 16.35 mm |
| 15 / 16 (L8 rear, L9 front) | 2.84 mm | 15.7 mm, 89.0 % | 16.3 mm, 96.0 % | 0.113 mm | 16.63 mm |
| 21 / 22 (L11 rear, L12 front) | 0.09 mm | 16.85 mm, 89.3 % | 17.34 mm, 95.2 % | 0.004 mm | 17.72 mm |
| 28 / 29 (L14 rear, L15 front) | 1.70 mm | 15.9 mm, 89.3 % | 16.5 mm, 96.2 % | 0.064 mm | 16.82 mm |

What else 0.97 loosens: nothing at the stored values. The other air gaps stand at 89.3 % (2/3), 88.9 % (8/9), 82.7 % (34/35) or lower and pass at 0.90 as before; the higher limit only means a later edit to them would be accepted up to 97 %. The drawing uses the same limit and hides no part of any rim (largest render trim 0.000 mm at the three stations). With the Extender EF 2x mounted the composed prescription inherits 0.97; no converter gap is above 85 %, and the converter is still validated on its own at the default.

### Result

| Station | Traced f-number before | Limited by | Traced f-number after | Limited by |
| --- | ---: | --- | ---: | --- |
| 72.14 mm | f/2.991 | surface 28 | f/2.900 | iris |
| 135 mm | f/2.991 | surface 28 | f/2.900 | iris |
| 193.97 mm | f/3.008 | surface 16 | f/2.900 | iris |

- The surface validator reports no errors, the image-circle floor lists nothing, and the traced corner chief ray reaches 100 % of 21.65 mm at all three stations, as before.
- Engine EFL 72.138 / 134.981 / 193.973 mm, f/2.9 and the iris radius are unchanged. The engine half-field is 17.50 / 9.17 / 6.49 degrees before and after.
- Vignetting curve at 72.14 mm, wide open, as a share of the on-axis beam at 0 / 2.9 / 5.7 / 8.6 / 11.4 / 14.3 / 17.2 degrees: 100 / 96.7 / 92.4 / 82.6 / 68.5 / 46.7 / 23.9 % before, 100 / 96.9 / 90.6 / 79.2 / 67.7 / 45.8 / 22.9 % after. The curve is normalized to the axis, and the on-axis beam grew 6.3 % in area (f/2.991 to f/2.900), so the lower mid-field shares reflect the larger reference and not new clipping. The full-field bundle of the patent's half angles (16.7 / 9.1 / 6.35 degrees) is still cut by most rims, most at surfaces 2-3 (77 % of one side), 12-13 (54-56 %) and 39-43 (54-92 %); on the nine raised surfaces the cut eased by 1 to 7 points and was otherwise left alone. No chief ray is blocked.
- Canon Extender EF 2x on this host: composes before and after with no axial clip at the wide, middle and tele settings, corner coverage 100 % bare and mounted, composed f/5.800 / 5.802 / 5.801 both times.
- Local page viewed at 72.14, 135 and 193.97 mm: no elements overlap, the four air pairs close toward the rim without touching, L3 and L13 are the tallest elements behind the variator and the rear elements step down as in FIG. 4, and the drawn on-axis fan passes every rim.

Open:

- The "Data-File Semi-Diameters" paragraph of the analysis note still says the diameters at the d21 air space and other tight gaps were reduced for the cross-gap policy. Four of those pairs now stand at the f/2.9 ray height under `gapSagFrac` 0.97; the paragraph was not edited in this pass.
- The D1 junction (surface 14) is stored at 18.0 mm, above the 16.7 mm block FIG. 4 draws. It was not lowered: nothing is lowered in this pass, and the difference is inside the 15 % band the procedure treats as noise.
- L15 now runs 16.5 mm at its front face to 16.0 mm at the junction, where FIG. 4 draws D2 as one square block near 16.8 mm. Squaring it would move junction 30, which does not clip.
- Surface 22 clears the stated ray by 0.0002 mm and surface 13 by 0.0035 mm; they are exact to the stored precision, with no allowance.
- The patent tabulates no close-focus spacings for this embodiment, so the pass covers infinity focus only.
