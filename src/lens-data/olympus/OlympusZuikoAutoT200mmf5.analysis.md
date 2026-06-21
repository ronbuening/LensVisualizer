# Olympus F.Zuiko Auto-T 200mm f/5

## Patent Reference and Design Identification

**Patent:** US 3,804,494  
**Filed:** September 28, 1972  
**Granted:** April 16, 1974  
**Priority:** October 1, 1971 (Japan, 46-76236)  
**Inventor:** Keiichi Ito  
**Assignee:** Olympus Optical Company Limited, Tokyo, Japan  
**Title:** Telephoto Lens Systems Having Small Telephoto Ratio  
**Claims:** 3  
**Worked examples:** 2  
**Embodiment analyzed:** Example 1 / Claim 2, corresponding to FIG. 1 and FIGS. 2A-2D

The prescription transcribes Example 1 of US 3,804,494, scaled uniformly by 2x from the patent's normalized f = 100 mm prescription to the 200 mm production focal length. The patent identifies Example 1 as a six-lens telephoto system in which lenses 5 and 6 are slightly air-spaced; Claim 2 repeats the same f = 100 mm, 2ω = 12°10′, F/5, f123 = 69.75 mm, f4 = -80.48 mm, and back-focus 25.5 mm prescription.

The identification as the Olympus F.Zuiko Auto-T 200mm f/5 rests on convergent evidence:

1. **Element and group count.** Example 1 is six elements in five air-spaced groups: L1, L2+L3 cemented, L4, L5, and L6. Example 2 cements L5 and L6 and therefore gives six elements in four groups, which does not match the documented production formula.
2. **Focal length.** The patent prescription is normalized to 100 mm. Scaling all radii and thicknesses by 2x yields a 200 mm design.
3. **Maximum aperture.** The patent example is F/5, matching the production lens designation.
4. **Field coverage.** The patent field is 2ω = 12°10′. At the 200 mm scale, this corresponds to an image semi-field of about 21.3 mm, or 42.5 mm full diagonal coverage, close to the nominal 43.3 mm diagonal of the 135 format.
5. **Production specification match.** Archival Olympus-system specification tables list the F.Zuiko Auto-T 1:5 f = 200 mm as 6 elements in 5 groups, 12° angle of view, f/5-f/32, 2.5 m minimum focus, 49 mm filter, 105 mm length, and 62 mm maximum diameter. The optical track implied by the scaled patent prescription is 150 mm from first surface to film plane, which is consistent with a roughly 105 mm lens length plus the 46 mm OM flange distance.

## Optical Architecture

The design is a compact all-spherical telephoto with a positive front group and a negative rear group. Group I contains four elements: a positive low-index meniscus L1, a cemented negative-positive doublet L2+L3, and a high-index negative L4. Group II contains the strong negative relay pair L5 and L6, separated by a small air gap in Example 1.

At the patent scale, the front group has a computed focal length of +69.74 mm and the rear group has a computed focal length of -85.52 mm. The large 25 mm patent-scale air gap between L4 and L5 separates these powers. After 2x scaling, this becomes a 50 mm air gap, and the data file inserts a synthetic aperture stop at its midpoint because the patent gives F/5 but does not publish a diaphragm coordinate or stop surface.

The architectural purpose is stated directly by the patent: reducing telephoto ratio requires increasing positive front-group power and negative rear-group power, but that makes aberration correction harder. Example 1 reaches a telephoto ratio of 0.75 at the patent scale, since (49.5 + 25.5) / 100 = 0.75. The 2x production-scale file preserves the same ratio: the first-surface-to-image optical track is 150 mm for a 200 mm lens.

## Element-by-Element Analysis

### L1 — Positive Meniscus, Convex to Object

nd = 1.4875, νd = 70.2. Glass: S-FSL5 (OHARA) / N-FK5 class. f = +161.10 mm at production scale.

L1 is the low-index positive collector at the front of the system. Its object-side surface is the stronger surface, and the meniscus form bends the incoming beam without making the first element a high-index, high-curvature biconvex lens. The patent's first condition requires n1 < 1.55, and L1 satisfies that requirement.

The glass is a close catalog match to OHARA S-FSL5, with current catalog values nd = 1.48749 and νd = 70.23. This is also the N-FK5 class in the Schott cross-reference family. The low dispersion reduces the chromatic burden placed on the following cemented doublet.

### L2 + L3 — Cemented Doublet, Negative Meniscus + Positive Meniscus

L2: nd = 1.7283, νd = 28.5. Glass: S-TIH10 (OHARA) / SF10 class. f = -135.37 mm at production scale.  
L3: nd = 1.5014, νd = 56.4. Glass: K10 class (Schott; 501/564). f = +78.91 mm at production scale.  
Cemented net: f = +205.67 mm at production scale.

The cemented doublet is the main front-group chromatic corrector. L2 is a high-index, high-dispersion flint; L3 is a crown. Their cemented junction at the steep positive radius R4 provides a strong chromatic lever without adding an air-spaced surface.

The patent's second condition requires n2 - n3 > 0.2. The Example 1 prescription gives 1.7283 - 1.5014 = 0.2269, so the condition is satisfied. The patent states that this index contrast is used to correct spherical aberration associated with the first condition.

L2 matches OHARA S-TIH10 within ordinary rounding: the current catalog lists nd = 1.72825 and νd = 28.46. L3 matches Schott K10 class, with Schott listing nd = 1.50137 and νd = 56.41. No current OHARA, HOYA, Sumita, HIKARI, or CDGM catalog match was found at the same nd/νd pair, so the data file labels L3 as K10 class rather than as a Japanese catalog glass.

### L4 — Plano-Concave Negative

nd = 1.7440, νd = 44.8. Glass: S-LAM2 (OHARA) / LAF2 class. f = -160.94 mm at production scale.

L4 is the negative lens at the rear of the front group. It has a plane front surface and a concave rear surface, concentrating its negative power at the exit from Group I. In isolation it nearly cancels much of L1's positive power; in the full front group, however, it is essential to reaching the patent's f123 value and Petzval balance.

The patent's fourth condition uses f4 and f123. The table gives f123 = 69.75 mm and f4 = -80.48 mm at the patent scale. Direct paraxial tracing shows that the stated f123 corresponds to the full front group L1-L4, not the literal L1-L3 subsystem. The L1-L3 subsystem alone computes to about +45.46 mm, while L1-L4 computes to +69.74 mm. This is an internal notation weakness in the patent: the wording says "first, second and third lenses," but the numerical value is the front-group composite.

The glass matches OHARA S-LAM2 within rounding; current catalog data list nd = 1.74400 and νd = 44.78. Its high index allows strong negative power with a comparatively mild rear radius.

### L5 — Negative Meniscus, Concave to Object

nd = 1.7130, νd = 54.0. Glass: S-LAL8 (OHARA) / LAK8 class. f = -39.75 mm at production scale.

L5 is the dominant negative element of the rear telephoto group. The strong object-side concave surface supplies most of the negative relay power needed to move the rear principal point forward and shorten the physical track.

The glass matches OHARA S-LAL8 within rounding. Current OHARA data list nd = 1.71300 and νd = 53.87; older six-digit glass-code comparisons also place it in the 713/539 LAK8 family. In the patent's first condition, n5 - n6 must exceed 0.07. Example 1 gives 1.7130 - 1.5927 = 0.1203, so the rear-group index split satisfies the condition.

### L6 — Biconvex Positive

nd = 1.5927, νd = 35.5. Glass: S-FTM16 (OHARA) / F16 class. f = +58.78 mm at production scale.

L6 is the positive partner to L5. Its front surface is very weak, while its rear surface carries most of the positive power. The result is still a net negative rear group, but L6 moderates L5's aberrations and gives chromatic balancing leverage.

The patent's third condition requires 25 > ν5 - ν6 > 15. Example 1 gives 54.0 - 35.5 = 18.5, placing the rear pair inside the required interval. OHARA S-FTM16 is the closest catalog match; current catalog data list nd = 1.59270 and νd = 35.31. The patent's νd = 35.5 is slightly rounded relative to that catalog value, so this is treated as a close catalog match rather than a perfectly exact νd match.

## Glass Identification and Selection

| Element | Patent nd | Patent νd | Catalog identification | Catalog check | Role |
|---|---:|---:|---|---|---|
| L1 | 1.4875 | 70.2 | S-FSL5 (OHARA) / N-FK5 class | OHARA nd 1.48749, νd 70.23 | Low-dispersion positive collector |
| L2 | 1.7283 | 28.5 | S-TIH10 (OHARA) / SF10 class | OHARA nd 1.72825, νd 28.46 | Dense flint in cemented doublet |
| L3 | 1.5014 | 56.4 | K10 class (Schott; 501/564) | Schott nd 1.50137, νd 56.41 | Crown in cemented doublet |
| L4 | 1.7440 | 44.8 | S-LAM2 (OHARA) / LAF2 class | OHARA nd 1.74400, νd 44.78 | High-index negative front-group corrector |
| L5 | 1.7130 | 54.0 | S-LAL8 (OHARA) / LAK8 class | OHARA nd 1.71300, νd 53.87 | Strong negative rear relay |
| L6 | 1.5927 | 35.5 | S-FTM16 (OHARA) / F16 class | OHARA nd 1.59270, νd 35.31 | Positive rear-group partner |

The chromatic correction is split across two paired regions. The front doublet uses a dense flint against a moderate-dispersion crown to correct the positive front group. The rear group uses the νd separation between L5 and L6 to balance axial color against lateral color, exactly as condition (3) describes.

The data file includes catalog nC, nF, and ng values for the OHARA-matched glasses where current catalog values are available. The stored nd and νd remain the patent values, because the prescription itself is the primary source for tracing.

## Focus Mechanism

The patent publishes only the infinity-focus prescription. It gives no variable-spacing table and does not describe a focusing group. The production Olympus OM lens is a manual unit-focus telephoto with a 2.5 m minimum focus distance.

The data file therefore represents focusing as unit focus: the glass spacings remain fixed, and only the final back-focus gap varies. The infinity BFD is the scaled patent value of 51.0 mm. For the close-focus slider endpoint, the BFD is set to 71.04 mm, derived by solving the thick-lens finite-conjugate focus condition for a 2.5 m object distance measured from the film plane. This close-focus value is an implementation estimate, not patent-published data, and it does not alter any patent-published internal glass spacing.

## Conditional Expressions

The patent defines four conditions. Example 1 satisfies all of them.

**Condition 1:** n1 < 1.55, n3 < 1.55; n2 > 1.7, n4 > 1.7; n5 - n6 > 0.07.

| Sub-condition | Example 1 value | Result |
|---|---:|---|
| n1 < 1.55 | 1.4875 | satisfied |
| n3 < 1.55 | 1.5014 | satisfied |
| n2 > 1.7 | 1.7283 | satisfied |
| n4 > 1.7 | 1.7440 | satisfied |
| n5 - n6 > 0.07 | 0.1203 | satisfied |

**Condition 2:** n2 - n3 > 0.2. Example 1 gives 0.2269, so the condition is satisfied.

**Condition 3:** 25 > ν5 - ν6 > 15. Example 1 gives 18.5, so the condition is satisfied. The body text contains an OCR-prone line where the lower failure limit can read as "5" in text extraction, but the printed condition and claims state 15.

**Condition 4:** 0.8 < |f4 / f123| < 5.0. Using the patent's own f4 = -80.48 mm and f123 = 69.75 mm gives |f4 / f123| = 1.154, so the condition is satisfied. The computed f123 match requires treating f123 as the complete front-group focal length, as noted above.

## Verification Summary

The prescription was independently re-entered and checked by paraxial y-u tracing and ABCD matrix calculations before the corrected files were written.

| Quantity | Patent value | Computed at patent scale | Production-scale value used in data |
|---|---:|---:|---:|
| Effective focal length | 100.0 mm | 100.0096 mm | 200.019 mm |
| Back focal distance | 25.5 mm | 25.4969 mm | 51.0 mm patent-scaled BFD |
| First-surface-to-image track | 75.0 mm | 74.9969 mm | 150.0 mm |
| Telephoto ratio | 0.75 | 0.7499 | 0.75 |
| Front group focal length | 69.75 mm | 69.7408 mm | 139.482 mm |
| Rear group focal length | not stated | -85.5233 mm | -171.047 mm |
| L4 focal length | -80.48 mm | -80.4704 mm | -160.941 mm |
| Petzval sum | not stated | +0.0003352 mm^-1 | +0.0001676 mm^-1 after 2x scale |

The Petzval sum was computed surface-by-surface as Σ φ / (n n′). The patent's stated design problem is that the rear group's strong negative power drives the rear Petzval contribution negative; Example 1 counters that with a positive front-group contribution while holding telephoto ratio below 0.8.

The aperture-stop placement in the data file is not a patent value. It is a midpoint insertion in the L4-L5 air gap, and its semi-diameter is solved so that the computed entrance pupil corresponds to F/5. The patent does not provide clear apertures, so all surface semi-diameters in the data file are constrained estimates rather than transcribed patent values.

## Design Heritage and Context

US 3,804,494 is consistent with the compact telephoto priorities of the early Olympus OM system. The patent's purpose is not merely to make a 200 mm lens, but to make a telephoto lens whose telephoto ratio is less than 0.8 while maintaining workable aberration correction. Example 1 reaches that target with six spherical elements and without using a cemented rear doublet.

The production lens's compactness follows directly from the scaled patent track. A 150 mm optical track measured to the film plane corresponds closely to a 105 mm physical lens length plus the OM system flange distance. This agreement is a stronger identification point than barrel length alone, because it ties the patent's total track to the actual SLR mount geometry.

## Sources

- US 3,804,494, "Telephoto Lens Systems Having Small Telephoto Ratio," Keiichi Ito, assigned to Olympus Optical Company Limited, granted April 16, 1974.
- MIR-hosted Olympus OM-System Zuiko 200 mm f/5 specification page, used only for production-spec cross-checks: 6 elements / 5 groups, 12° angle of view, f/5-f/32, 2.5 m minimum focus, 49 mm filter, 105 mm length, 62 mm maximum diameter, and 380 g weight.
- OHARA current optical glass catalog entries for S-FSL5, S-TIH10, S-LAM2, S-LAL8, and S-FTM16.
- SCHOTT K10 optical glass datasheet / catalog entry for the 501/564 crown-glass match.
