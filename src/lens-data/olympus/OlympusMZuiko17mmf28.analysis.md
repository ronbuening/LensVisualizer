# Olympus M.Zuiko Digital 17mm f/2.8 — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 8,755,132 B2 — “Wide Angle Optical System and Image Pickup Apparatus Using the Same”  
**Application Number:** 12/657,537  
**Filed:** January 23, 2010  
**Published:** August 12, 2010 as US 2010/0201782 A1  
**Priority:** JP 2009-029563, February 12, 2009  
**Granted:** June 17, 2014  
**Inventors:** Yasuharu Yamada; Hirohiko Kimata  
**Assignee:** Olympus Imaging Corp.  
**Embodiment analyzed:** Example 1, f = 17.30 mm, Fno = 2.9, ω = 36.4°

The prescription transcribed here is Example 1 of US 8,755,132 B2. The patent gives four worked numerical examples: Example 1 at f = 17.30 mm, Example 2 at f = 20.38 mm, Example 3 at f = 14.28 mm, and Example 4 at f = 12.33 mm. Example 1 is the only worked example matching the Olympus M.Zuiko Digital 17mm f/2.8 pancake in focal length, nominal speed, physical scale, and Micro Four Thirds digital-imager requirements.

The production identification rests on several independent checks. First, the patent’s f = 17.30 mm and Fno = 2.9 correspond to the marketed 17 mm f/2.8 once normal product rounding is applied. Second, the patent formula is a six-element, four-group layout: a front negative singlet, two cemented doublets, and a rear positive singlet. Olympus’s official instruction manual lists the product as 4 groups and 6 lenses, with 17 mm focal length, f/2.8 maximum aperture, 64.9° image angle, 0.2 m minimum focus, 57 × 22 mm dimensions, 71 g mass, and 37 mm filter thread. Third, the rear singlet L25 has two aspherical faces but is one physical aspherical element, matching the product’s known special-element count. Fourth, the optical track from surface 1 through surface 11 is 22.114 mm, essentially the published 22 mm barrel length. That length agreement is supporting evidence rather than proof, since mechanical barrel length is not identical to optical vertex track.

The patent’s Example 1 also includes a 4.082 mm plane-parallel cover-glass stack with nd = 1.51633 and a 0.745 mm final air gap before the image plane. That is consistent with a digital Micro Four Thirds imaging path, but the project data file omits the cover glass and folds it into the final air-equivalent BFD. The folded infinity BFD used in the data file is 17.229 + 4.082 / 1.51633 + 0.745 = 20.6660 mm. A direct paraxial trace of the lens surfaces alone gives an ideal air BFD of 20.6736 mm; the 0.0075 mm difference is rounding in the patent table.

Example 2 is excluded by focal length. Examples 3 and 4 are also excluded by focal length, and Example 4 differs in special-surface configuration because it adds an aspheric rear surface to the front negative meniscus. A Four Thirds SLR interpretation is implausible: the product is a Micro Four Thirds lens, and the official instruction manual identifies the mount as Micro Four Thirds.

## Optical Architecture

The design is a compact retrofocus wide-angle with negative–positive group power distribution. The patent explicitly frames the negative-front / positive-rear form as advantageous for a wide angle of view with a long back focal length, and it identifies telecentricity at the electronic image plane as a principal design requirement.

The two main groups are:

- **G1:** L11, a single negative meniscus convex to the object. The computed standalone group focal length is f₁ = −21.96 mm.
- **G2:** SU21 + stop + SU22 + L25, a positive rear group. The computed group focal length is f₂ = +16.19 mm.

The complete system EFL from the paraxial y–ν trace is 17.2985 mm. Since the folded air-equivalent BFD is about 20.67 mm, the design is genuinely retrofocus: BFD/EFL ≈ 1.19.

The patent’s architectural signature is the pair of cemented doublets arranged around the aperture stop. SU21 lies before the stop and SU22 after it. The patent treats the combined diaphragm clearance as the largest air-space region, and the group boundary is the next large non-diaphragm space, the 2.478 mm air gap after L11. The previous wording “two largest air spaces straddling the diaphragm” is too loose for Example 1 if the front and rear diaphragm clearances are treated separately; the technically correct reading is the patent’s combined diaphragm-clearance convention.

The rear biconvex L25 is the terminal field and pupil-control element. Its double-aspheric profile reduces positive power toward the rim, and its position at the image side moves the exit pupil away from the sensor. The computed exit pupil is approximately 42.73 mm in front of the image plane, giving |IH/EXP| = 0.268 for IH = 11.45 mm.

## Element-by-Element Analysis

Elements are described from object to image. Focal lengths below are standalone thick-lens-in-air values, except for the cemented-group focal lengths, which are computed for the cemented assembly in air. Radius signs follow the patent convention used in the numerical table: positive radius means the center of curvature lies to the image side.

### L11 — Negative Meniscus, convex to object

nd = 1.48749, νd = 70.23. Glass: S-FSL5 (OHARA), FK5-class fluor crown. f = −21.96 mm.

L11 is the entire first group. Both radii are positive, 58.585 mm and 9.004 mm, so the surface pair forms a negative meniscus with its convex side facing the object. Its strong rear curvature gives the retrofocus front group enough negative power to reduce the off-axis principal-ray angle entering G2 while preserving back focus.

The glass is a low-index, high-Abbe fluor crown. Its high νd limits the chromatic cost of using a strongly curved negative front element. It is not an ED or anomalous-dispersion element in the modern marketing sense; it is a conventional low-dispersion crown used in a high-leverage front position.

### SU21 — Cemented Doublet before the stop, positive

Computed cemented-group focal length: +20.57 mm.

**L21 — Biconvex Positive.** nd = 1.83400, νd = 37.16. Glass: S-LAH60 (OHARA), dense lanthanum flint. f = +11.28 mm. L21 has symmetric radii of +18.088 mm and −18.088 mm. The very high index allows strong positive power with moderate curvatures and helps keep the Petzval contribution under control. Its Abbe number places it on the flint side despite the lanthanum family name.

**L22 — Biconcave Negative.** nd = 1.57501, νd = 41.50. Glass: S-TIL27 (OHARA), light flint. f = −22.74 mm. L22 shares the −18.088 mm cemented surface with L21 and exits through a +47.964 mm rear surface. The patent’s condition (1) uses the SU21 cemented radius together with the SU22 cemented radius to balance field curvature.

SU21 is not independently achromatic in the usual crown-positive / flint-negative sense. The positive member has lower νd than the negative member. This is deliberate at the system level: chromatic residuals are balanced against SU22 across the stop rather than being fully neutralized inside SU21 alone.

### Aperture Stop

The stop is in air between SU21 and SU22. The patent table places it after a 1.841 mm gap from surface 5 and before a 4.212 mm gap to surface 7. From the computed front-system magnification and patent FNO = 2.897, the entrance-pupil radius is about 2.986 mm and the physical stop semi-diameter is about 3.20 mm. The data file uses 3.202 mm, matching the patent design FNO to rounding.

### SU22 — Cemented Doublet after the stop, weakly positive

Computed cemented-group focal length: +105.67 mm.

**L23 — Biconcave Negative.** nd = 1.75211, νd = 25.05. Glass: FF8 (HOYA) class dense short flint. f = −10.46 mm. The −10.211 mm front radius makes L23 a strong negative element, while the +35.401 mm cemented surface pairs it with L24. Its high dispersion supplies most of SU22’s chromatic correction.

**L24 — Biconvex Positive.** nd = 1.72916, νd = 54.68. Glass: S-LAL18 (OHARA), lanthanum crown. f = +11.89 mm. L24 uses the +35.401 mm cemented surface and a −10.810 mm rear surface. Unlike SU21, SU22 is a conventional high-Abbe positive / low-Abbe negative achromatizing pair. Its net optical power is weakly positive, but its chromatic leverage is significant because it sits after the aperture stop at different ray heights from SU21.

### L25 — Rear Biconvex Positive, double aspheric

nd = 1.80610, νd = 40.88. Glass: high-index lanthanum 806/409 class, closest to S-LAH53 (OHARA) and P-LASF47 (Schott). f = +30.00 mm.

L25 is the terminal positive field element. Both faces are aspheric: surface 10 has R = +44.588 mm and surface 11 has R = −51.256 mm. The element’s positive power is relatively mild compared with L21 and L24, but its position near the image plane gives it strong leverage over field curvature, distortion, and exit-pupil position.

The glass match is best treated as an 806/409 class identification. OHARA S-LAH53 gives nd = 1.80610 with νd ≈ 40.92, while Schott P-LASF47 carries the same 806409 code and is explicitly a precision-molding glass. The patent does not name the glass manufacturer or the production process, so “glass-molded asphere” remains an inference from material class, element location, and double-aspheric prescription, not a directly published manufacturing statement.

## Glass Identification and Selection

The glass palette was checked against published OHARA, HOYA, and Schott catalog data by nd/νd code. The analysis cites manufacturer catalog matches directly rather than relying on circular, name-seeded lookup.

| Element | nd | νd | Catalog identity | Status | Optical role |
|---|---:|---:|---|---|---|
| L11 | 1.48749 | 70.23 | S-FSL5 (OHARA) | Exact | Low-dispersion negative front meniscus |
| L21 | 1.83400 | 37.16 | S-LAH60 (OHARA) | Exact | High-index positive power, Petzval control |
| L22 | 1.57501 | 41.50 | S-TIL27 (OHARA) | Exact | Negative member of SU21 |
| L23 | 1.75211 | 25.05 | FF8 (HOYA) | Exact by 752/251 code | High-dispersion negative member of SU22 |
| L24 | 1.72916 | 54.68 | S-LAL18 (OHARA) | Exact | High-Abbe positive member of SU22 |
| L25 | 1.80610 | 40.88 | S-LAH53 / P-LASF47 class | Close code match | Rear double-aspheric field element |

The system is a compact, well-corrected achromat. It contains no fluorite, no νd > 80 super-low-dispersion crown, and no patent-published partial-dispersion data sufficient to support an apochromatic claim. The most aggressive chromatic correction comes from the layout: two cemented doublets on opposite sides of the aperture stop, with opposite residual chromatic tendencies.

## Chromatic Correction Strategy

The patent attributes chromatic and field-curvature suppression to the two cemented doublets arranged around the stop. SU21 and SU22 do not perform the same correction. SU21 uses an unusual pairing in which the positive member has lower Abbe number than the negative member. SU22 then restores the conventional high-Abbe-positive / low-Abbe-negative relationship. The two doublets therefore carry different residual color signatures and are balanced at the system level.

L11’s S-FSL5 front glass keeps the negative first group from adding unnecessary longitudinal color. L23’s FF8 dense flint supplies strong color correction in the rear doublet, while L24’s S-LAL18 supplies high-index positive power without imposing excessive dispersion. The strategy is economical: the design uses ordinary catalog glasses rather than exotic ED media and relies on symmetry, stop placement, and group power distribution.

## Aberration Correction and Design Philosophy

The patent’s stated design goal is a compact wide-angle optical system of roughly 60° class coverage, with few elements, manageable distortion, corrected chromatic aberration and field curvature, and a telecentric exit bundle for an electronic imager. It explicitly accepts that distortion can be corrected to some extent by electronic image processing, which explains the large residual barrel distortion shown in the patent aberration plots.

A surface-by-surface Petzval calculation using Σ[(n′ − n)/(R n n′)] gives +7.155 × 10⁻³ mm⁻¹, corresponding to a Petzval radius of approximately −139.8 mm. This is a relatively flat Petzval result for such a short, retrofocus 17 mm pancake formula. The high-index positive elements and paired cemented doublets are the main contributors.

Against a rectilinear f·tan(ω) reference, the patent’s Example 1 image height FIY = 11.45 mm is substantially below the ideal 17.30 · tan(36.4°) = 12.75 mm. That implies roughly −10% barrel distortion at the patent field edge, in line with the distortion plot. For the production lens, Olympus’s official 64.9° image angle is the hard product specification; the patent’s 36.4° half field and 11.45 mm image height describe the worked optical example’s evaluated field.

## Focus Mechanism

The patent describes focus by moving the entire optical system along the axis. It also describes moving the optical system toward the image pickup element beyond the infinity position in the non-operating, retracted state. No internal floating group is present in the numerical prescription.

The official instruction manual gives a shooting range of 0.2 m to infinity and AF/MF switching. The data file models this as unit focus with a single variable BFD. With the cover glass omitted and folded into air, the infinity BFD is 20.6660 mm. Solving the thick-lens equation for a 0.2 m object distance measured from the image plane gives a close-focus BFD of 22.6101 mm, i.e. about 1.944 mm of whole-unit extension. The associated paraxial magnification is approximately 0.112×, consistent with the lens’s commonly published 0.11× class close-focus specification.

| Focus state | Folded BFD used in data file | Basis |
|---|---:|---|
| Infinity | 20.6660 mm | Patent d11 + cover glass / nd + final air gap |
| 0.2 m | 22.6101 mm | Thick-lens unit-focus solve from official minimum shooting distance |

## Aspherical Surfaces

The aspherical surfaces are surfaces 10 and 11, both on L25. The patent’s equation is the standard even-order conic asphere:

$$
X(H)=\frac{H^2/r}{1+\sqrt{1-(1+K)(H/r)^2}}+A_4H^4+A_6H^6+A_8H^8+A_{10}H^{10}.
$$

The conic coefficient is direct: K = 0 is a sphere. There is no Japanese κ-to-K offset in this patent. The polynomial contains only even-order terms, and A10 is unused for Example 1.

**Surface 10, L25 object side:** K = −13.0866, A4 = −4.046E−06, A6 = +9.8902E−08, A8 = +1.4424E−11, A10 = 0.

**Surface 11, L25 image side:** K = −8.3127, A4 = −6.2139E−06, A6 = +8.9444E−08, A8 = +5.679E−10, A10 = 0.

The data-file semi-diameters are 9.25 mm for surface 10 and 9.65 mm for surface 11. At those verified heights, the aspheric departure from the spherical base is −0.078 mm on surface 10 and +0.122 mm on surface 11. This paired departure weakens the element’s positive power toward the rim, matching the patent’s statement that the positive refractive power decreases with distance from the optical axis.

## Conditional Expressions

The patent publishes the conditional-expression values for all four examples. The Example 1 values below were recomputed directly from the transcribed prescription. The small difference in condition (4), 35.09 computed versus 35.069 tabulated, is attributable to rounding in the printed radii R45f = −10.211 and R45r = −10.810.

| # | Quantity | Recomputed | Patent table | Result |
|---|---|---:|---:|---|
| (1) | (R45 + R23) / (R45 − R23) | 0.324 | 0.324 | Satisfied |
| (2) | (R6r + R6f) / (R6r − R6f) | 0.070 | 0.070 | Satisfied |
| (3) | (R3r + R3f) / (R3r − R3f) | 0.452 | 0.452 | Satisfied |
| (4) | (R45r + R45f) / (R45r − R45f) | 35.09 | 35.069 | Satisfied |
| (5) | f2 / f | 0.936 | 0.936 | Satisfied |
| (6) | |f1 / f2| | 1.356 | 1.356 | Satisfied |
| (5)′ | f2 / f | 0.936 | 0.936 | Not within 1.0–1.4 subrange |
| (7) | HD12 / f | 0.855 | 0.855 | Not within 1.3–1.8 subrange |
| (8) | |IH / EXP| | 0.268 | 0.268 | Satisfied |

Example 1 satisfies the main shape, power-balance, and telecentricity conditions. It does not satisfy the narrower preferred subrange formed by (5)′ and (7), which describes a different preferred relationship with a stronger second-group separation.

## Verification Summary

All load-bearing numerical claims were recomputed from the patent prescription using an independent paraxial y–ν ray trace and a surface-by-surface Petzval calculation.

| Quantity | Recomputed | Patent / source value |
|---|---:|---:|
| EFL | 17.2985 mm | 17.30 mm |
| Patent FNO / figure FNO | 2.9 / 2.897 | 2.9 / 2.897 |
| G1 focal length | −21.96 mm | Implied by condition (6) |
| G2 focal length | +16.19 mm | f2/f = 0.936 |
| SU21 focal length | +20.57 mm | Computed |
| SU22 focal length | +105.67 mm | Computed |
| L25 standalone focal length | +30.00 mm | Computed |
| Optical vertex track s1→s11 | 22.114 mm | Manufacturer overall length 22 mm |
| Folded cover-glass BFD | 20.6660 mm | Patent d11, d12, d13 |
| Ideal paraxial air BFD from s11 | 20.6736 mm | Computed |
| Exit pupil distance from image plane | −42.73 mm | |IH/EXP| = 0.268 |
| Petzval sum | +7.155 × 10⁻³ mm⁻¹ | Computed |
| Petzval radius | −139.8 mm | Computed |

The data and analysis use the patent prescription as the numerical source, omit the patent cover glass from the data surfaces by folding it into the final air-equivalent BFD, and distinguish the patent’s design FNO from the marketed f/2.8 specification.

## Design Heritage and Context

This lens belongs to the first generation of compact Micro Four Thirds wide-angle primes. Its design priorities are traditional for a digital mirrorless pancake: few elements, short physical length, a negative front group for back focus, rear telecentricity for the sensor stack, and reliance on electronic correction for residual barrel distortion.

The design is not a scaled-down symmetrical wide-angle in the classic Biogon sense. It is a deliberately asymmetric retrofocus formula using high-index positive elements and cemented doublets to hold field curvature and chromatic aberration while accepting distortion. In that respect it reflects the early mirrorless shift from purely optical rectilinear correction toward an optical-electronic imaging system.

## Sources and References

- US 8,755,132 B2, “Wide Angle Optical System and Image Pickup Apparatus Using the Same,” Yamada and Kimata, Olympus Imaging Corp. Primary source for the Example 1 prescription, aspheric data, conditional expressions, claims, and design rationale.
- Olympus / OM System, *M.ZUIKO Digital 17mm F2.8 Instructions (Multilingual)*. Primary manufacturer source for Micro Four Thirds mount, 17 mm focal length, f/2.8–22 aperture range, 64.9° angle of view, 4 groups / 6 lenses, 0.2 m shooting range, AF/MF switching, 71 g weight, 57 × 22 mm dimensions, and 37 mm filter thread.
- OHARA published glass datasheets for S-FSL5, S-LAH60, S-TIL27, S-LAL18, and S-LAH53.
- HOYA published optical-glass catalog/cross-reference data for FF8, code 752/251.
- Schott published P-LASF47 product data, code 806409, used as a class cross-reference for the rear aspherical element.
