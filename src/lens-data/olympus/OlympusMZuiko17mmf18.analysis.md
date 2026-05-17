# Olympus M.Zuiko Digital 17mm f/1.8 — Patent Review

## Patent Reference and Design Identification

**Patent:** JP 2013-186458 A, 「インナーフォーカスレンズ系及びそれを備えた撮像装置」 (Inner Focus Lens System and Imaging Apparatus Comprising Same), published 2013-09-19.

**Applicant:** Olympus Imaging Corporation.

**Inventors:** Yamada Yasuharu (山田 康晴), Murakami Daichi (村上 大地), Kubota Yuki (窪田 勇樹).

**Filing date:** 2012-03-12 (Japanese application 特願2012-54267).

**Embodiment used:** Numerical Example 3 (数値実施例3, ¶0080).

Example 3 is the best match to the production Olympus M.Zuiko Digital 17mm f/1.8. The identification is convergent rather than explicit: the patent does not name the retail product. The matching evidence is as follows.

1. Example 3 is a 9-element, 6-air-space design, matching the production lens specification of 9 elements in 6 groups.
2. The patent prescription gives $f = 17.30$ mm and FNO = 1.716, consistent with the marketed 17 mm f/1.8 designation.
3. The patent image height is 10.82 mm, giving a 21.64 mm image-circle diameter, matching the Four Thirds / Micro Four Thirds diagonal.
4. Example 3 has one double-sided aspherical front element, one rear-surface aspherical element in the focusing group, and one double-sided rear focusing element: five aspherical surfaces on three aspherical elements. This matches the production description of one DSA element plus two aspherical glass elements.
5. The highest-index element in the prescription is L3 at nd = 1.91082, matching the production lens's single “Super HR” role.
6. The patent's focusing method translates the second lens group G2 as a unit toward the object while G1, the aperture stop, and G3 remain fixed. Example 3's G2 contains exactly three elements, matching Olympus's description of focusing by a small lightweight inner group.
7. The patent close condition is a 250 mm object-to-image distance case, matching the production 0.25 m closest focusing distance in AF operation.

Example 3 differs from Examples 1 and 2 in a mechanically important way: L6 and L7 are cemented together. That reduces the moving focus assembly from three separate air-spaced components to two air-separated components while retaining three glass elements. This is consistent with the patent's emphasis on a lightweight focus group for contrast-detect autofocus and video wobbling.

## Optical Architecture

The design is a compact positive-positive-negative inner-focus wide-angle lens: G1(+) — aperture stop — G2(+) — G3(−). It is not a classical retrofocus layout. The patent explicitly contrasts the invention with a system in which the pre-stop group is negative and the post-stop group is positive; here the pre-stop group G1 has positive power, which lowers post-stop ray heights and permits a smaller moving focus group.

The verified paraxial values for Example 3 are:

| Quantity | Code-verified value | Patent value |
|---|---:|---:|
| Effective focal length | 17.2989 mm | 17.30 mm |
| G1 focal length | +25.816 mm | +25.82 mm |
| G2 focal length | +21.874 mm | +21.87 mm |
| G3 focal length | −79.518 mm | −79.52 mm |
| G2+G3 combined focal length | +31.880 mm | — |
| Air-equivalent BFD from L9 rear to image | 14.2690 mm | implicit |
| Lens total track, with cover glass folded to air-equivalent BFD | 52.2659 mm | 52.27 mm |
| Exit pupil distance from paraxial image plane | −47.312 mm | −47.32 mm |
| Petzval sum | 0.0062689 mm⁻¹ | — |
| Petzval radius | 159.52 mm | — |

The front group G1 contains the wide-field collector and the primary chromatic correction stack: a negative aspherical meniscus followed by two cemented achromatizing components. G2 is the moving focus group: a negative-positive cemented doublet followed by a strong positive aspherical element. G3 is a single fixed negative meniscus, used for field correction, back-focus control, and the patent's stated acoustic-baffle function between the moving focus group and the camera microphone.

The computed back focal distance is shorter than the focal length: BFD/EFL = 14.2690/17.2989 = 0.825. This confirms that the design should not be described as retrofocus merely because it is a wide-angle lens for a mirrorless camera. Its compact back-focus requirement is consistent with the Micro Four Thirds mount and with the patent's positive-first-group premise.

## Element-by-Element Analysis

### L1 — Negative Meniscus, convex to object (DSA, 2× aspherical)

nd = 1.58313, νd = 59.38. Glass: L-BAL42 (OHARA low-Tg barium crown-class glass; exact patent nd match in OHARA low-softening catalog family). f = −25.86 mm.

L1 is the first lens component and the only negative component ahead of the two cemented doublets in G1. Its two aspherical surfaces make it the DSA element in the production special-element description. The front surface is extremely weak in base curvature (R = +670.392 mm), while the rear surface is strongly curved (R = +14.739 mm). The optical work is therefore concentrated at the rear surface, where the aspheric departure is large enough to redistribute the wide-angle off-axis bundles before they enter the positive doublet stack.

This element provides the limited negative front power needed to widen the field while avoiding a full retrofocus power distribution. It also pre-corrects field-dependent aberrations before G1's positive cemented components apply most of the convergence.

### L2 — Biconcave Negative, cemented front element of D1

nd = 1.56732, νd = 42.82. Glass: S-TIL26 (OHARA). f = −22.78 mm.

L2 is the negative member of the first cemented doublet. Its front surface is strongly concave toward the object and its rear cemented surface is nearly flat. The low index relative to L3 creates a strong refractive-index step at the cemented interface, which the patent identifies as useful for Petzval-sum and field-curvature control when a negative lens is cemented to a higher-index positive lens.

The L2+L3 component is only weakly positive as a cemented component (f = +275.42 mm). Its purpose is therefore not gross power generation; it is an aberration-balancing and chromatic-correction component inside a fast wide-angle front group.

### L3 — Biconvex Positive, cemented rear element of D1; Super-HR role

nd = 1.91082, νd = 35.25. Glass: TAFD35L (HOYA; ultra-high-index dense flint / tantalum-lanthanum family). f = +23.10 mm.

L3 is the highest-index element in the lens and is the best match to the production “Super HR” element. Its nd = 1.91082 allows strong positive power without extreme curvature. That is important in a fast f/1.8 wide-angle design because high marginal-ray height in the front group would otherwise make spherical aberration and sagittal coma difficult to control.

The catalog assignment is HOYA TAFD35L: OHARA S-LAH55V does not match the patent's nd/νd pair, while TAFD35L is the exact catalog match for nd = 1.91082 and νd = 35.25.

### L4 — Biconvex Positive, cemented front element of D2

nd = 1.81600, νd = 46.62. Glass: S-LAH59 (OHARA). f = +13.54 mm.

L4 is the strongest standalone positive element in the lens. It supplies most of the convergence within G1, following the weakly positive L2+L3 achromatizing pair. The high refractive index reduces curvature burden for a given positive power.

With νd = 46.62, this is better described as a high-index medium-dispersion lanthanum glass than as a conventional crown. It is paired with the much higher-dispersion L5 element to form the second cemented correction component in G1.

### L5 — Negative Meniscus, convex to image, cemented rear element of D2

nd = 1.75211, νd = 25.05. Glass: FF8 (HOYA fluor flint). f = −36.41 mm.

L5 is the high-dispersion negative member of the L4+L5 cemented doublet. The patent states that, in this third lens component, the positive element should be lower-dispersion than the negative element; L4 at νd = 46.62 and L5 at νd = 25.05 satisfy that requirement with a large margin.

The L4+L5 doublet has f = +20.63 mm and is the strongest positive component in G1. It is therefore both a power component and a chromatic-balancing component. The HOYA FF8 designation is retained because the patent constants exactly match the HOYA 752/251 fluor-flint catalog code.

### L6 — Biconcave Negative, cemented front element of D3; focus group

nd = 1.68893, νd = 31.07. Glass: S-TIM28 (OHARA). f = −10.92 mm.

L6 is the negative front element of the moving focus group. The patent recommends a negative component followed by one or two positive elements in G2 to keep the focus group small while controlling spherical aberration and chromatic aberration during focus travel.

Although L6 is strongly negative as a standalone element, it works inside a net positive moving group. It is cemented directly to L7 in Example 3, reducing air-glass surfaces and stabilizing chromatic behavior during the 1.4095 mm close-focus movement.

### L7 — Biconvex Positive, cemented rear element of D3; focus group, 1× aspherical

nd = 1.58313, νd = 59.38. Glass: L-BAL42 (OHARA low-Tg barium crown-class glass). f = +21.97 mm.

L7 is the positive member of the cemented L6+L7 focus-group doublet. Its rear surface is aspherical, making the L6+L7 cemented component a moving aberration-correction component rather than a simple chromatic pair.

The L6+L7 doublet has a combined focal length of −23.93 mm. The net positive power of G2 is therefore supplied mainly by L8 behind it. This negative-positive distribution inside the focus group gives the moving assembly a controlled internal power balance: enough net positive power for short focus travel, but with negative front power to reduce aberration variation as the group translates.

### L8 — Biconvex Positive, focus group, 2× aspherical

nd = 1.74320, νd = 49.34. Glass: S-LAM60 (OHARA; exact nd/νd match, with a closely related low-Tg L-LAM60 molding family in OHARA low-softening listings). f = +14.45 mm.

L8 is the strong positive rear element of the moving focus group. Both surfaces are aspherical, and together with L7's rear asphere they give G2 the three aspherical surfaces recommended by the patent for controlling spherical aberration, field curvature, and sagittal coma in a fast lens.

The exact catalog match for the patent constants is OHARA S-LAM60. Because the production lens identifies these as aspherical glass elements and OHARA lists a corresponding low-softening L-LAM60 family, the manufacturing interpretation should be stated cautiously: L8 is an aspherical glass element and is plausibly precision molded, but the exact patent nd/νd pair should be cataloged as S-LAM60 unless a manufacturing bill of materials identifies the low-Tg variant.

### L9 — Negative Meniscus, convex to image; fixed rear group

nd = 1.59270, νd = 35.31. Glass: S-FTM16 (OHARA fluor titanate flint). f = −79.52 mm.

L9 is the entire third lens group and remains fixed during focusing. Its weak negative power extends the air-equivalent back focus and contributes a final field-curvature correction. The patent also describes the fixed rear group as useful as a barrier between the focus/iris noise source and the camera body's microphone.

The element should not be described as a moving rear-focus component. It is fixed at all published focus positions, while G2 moves object-ward by reducing d9 and increasing d14.

## Glass Identification and Selection

| Element | nd | νd | Corrected catalog identification | Role |
|---|---:|---:|---|---|
| L1 | 1.58313 | 59.38 | L-BAL42 (OHARA low-Tg family) | DSA negative front meniscus |
| L2 | 1.56732 | 42.82 | S-TIL26 (OHARA) | Negative member of first cemented correction pair |
| L3 | 1.91082 | 35.25 | TAFD35L (HOYA) | Super-HR high-index positive element |
| L4 | 1.81600 | 46.62 | S-LAH59 (OHARA) | Strong positive member of second cemented pair |
| L5 | 1.75211 | 25.05 | FF8 (HOYA) | High-dispersion negative fluor flint |
| L6 | 1.68893 | 31.07 | S-TIM28 (OHARA) | Negative member of moving cemented focus doublet |
| L7 | 1.58313 | 59.38 | L-BAL42 (OHARA low-Tg family) | Positive moving aspherical element |
| L8 | 1.74320 | 49.34 | S-LAM60 (OHARA; low-Tg L-LAM60 family is adjacent) | Strong positive double-aspherical focus element |
| L9 | 1.59270 | 35.31 | S-FTM16 (OHARA) | Fixed negative rear field-correction element |

The glass set is mixed OHARA/HOYA. Most elements match OHARA catalog constants, but L3 and L5 are better treated as HOYA glasses. L3 is the most important catalog distinction: HOYA TAFD35L is an exact nd/νd match to the patent, while OHARA S-LAH55V is not compatible with nd = 1.91082. L2 matches OHARA S-TIL26 rather than S-TIM22. L8 matches OHARA S-LAM60; a low-softening L-LAM60 family exists in the same optical neighborhood but should not replace the exact S-LAM60 catalog match without bill-of-material evidence.

No ED or super-ED glass is present in the prescription. The chromatic correction strategy is instead conventional but highly optimized: two G1 cemented doublets divide chromatic and Petzval correction before the stop, while the L6+L7 moving cemented doublet stabilizes chromatic behavior during focus travel. The final S-FTM16 negative meniscus contributes both field correction and chromatic balancing in the converging rear beam.

The verified surface-by-surface Petzval sum is +0.0062689 mm⁻¹, corresponding to a Petzval radius of 159.5 mm, or about 9.2× the focal length. This is a comparatively flat paraxial field for a small, fast wide-angle lens and is consistent with the patent's emphasis on cemented front-group components and a fixed negative rear group.

## Focus Mechanism

The lens uses inner focus. G2, consisting of the cemented L6+L7 doublet and the separate L8 element, translates as one rigid unit toward the object for closer focus. G1, the aperture stop, and G3 remain fixed.

| Published focus state | d9: stop → G2 | d14: G2 → G3 | G2 travel from infinity |
|---|---:|---:|---:|
| Infinity | 7.1972 mm | 2.0857 mm | 0.0000 mm |
| β = −1/30 | 6.6121 mm | 2.6708 mm | 0.5851 mm |
| Object-image distance = 250 mm | 5.7877 mm | 3.4951 mm | 1.4095 mm |

The sum d9+d14 remains constant to rounding precision, confirming pure group translation rather than an internal floating split within G2. The 1.4095 mm full travel is short because G2 has substantial positive net power: f2/f = 1.264. This is within the patent's required 1.0–1.7 range and is the main reason the moving focus group can remain small and video-compatible.

For the production lens, Olympus lists an inner-focus screw-drive mechanism. The patent does not require a specific motor or mechanical clutch, so the data file records the optical kinematics rather than the retail barrel mechanism.

## Aspherical Surfaces

Example 3 has five aspherical surfaces: L1 front and rear, L7 rear, and both surfaces of L8. The patent uses the standard conic-plus-even-polynomial sag expression:

$$
Z(h) = \frac{h^2/R}{1 + \sqrt{1 - (1+K)(h/R)^2}} + A_4h^4 + A_6h^6 + A_8h^8 + A_{10}h^{10} + A_{12}h^{12}.
$$

The tabulated K is the standard conic constant: K = 0 is spherical, K = −1 is paraboloidal. The departures below are code-computed departures from the base sphere at the inferred data-file semi-diameter, not arbitrary small test heights.

| Surface | Element | R (mm) | K | A4 | A6 | A8 | A10 | A12 | SD used | Departure from sphere at SD |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 1A | L1 front | 670.392 | 10.0016 | 9.8615e-06 | −2.3574e-07 | 1.1769e-09 | 0 | 0 | 10.4 mm | −21.8 µm |
| 2A | L1 rear | 14.739 | 1.1120 | −2.1754e-05 | −4.8981e-07 | −1.9711e-09 | 0 | 0 | 9.4 mm | +344.1 µm |
| 12A | L7 rear | −35.600 | 4.5711 | −2.1910e-05 | 1.9461e-06 | 6.5052e-09 | −1.7209e-10 | 0 | 8.8 mm | +431.5 µm |
| 13A | L8 front | 48.560 | −10.0646 | −8.4836e-05 | 1.2594e-06 | −5.7141e-09 | 0 | 0 | 9.6 mm | −228.2 µm |
| 14A | L8 rear | −13.158 | −0.4054 | 2.8349e-05 | −4.6349e-07 | 3.2328e-09 | 0 | 0 | 10.0 mm | +551.3 µm |

The L1 rear surface is the strongest front-group asphere and carries most of the DSA element's correction. In G2, L7's rear asphere and both L8 aspheres work in the moving focus group, so their corrections must remain useful across the full focus stroke. Surface 13, with K = −10.0646, is a true hyperbolic conic under the standard convention, not an oblate ellipsoid. Surface 14, with −1 < K < 0, is a prolate ellipsoid.

## Conditional Expressions and Verification Summary

The following values were independently recalculated from the transcribed prescription using a y–ν paraxial ray trace. The cover glass was included for verification, then excluded from the delivered data file and folded into the final air-equivalent BFD.

| Patent condition | Formula | Code-verified value | Patent table value | Required range | Result |
|---|---|---:|---:|---:|---|
| (1) | f2/f | 1.264 | 1.26 | 1.0–1.7 | Satisfied |
| (2) | \|f/EXP\| | 0.366 | 0.37 | ≤ 0.43 | Satisfied |
| (5) | TL/f | 3.021 | 3.02 | 2–4 | Satisfied |
| (6) | CSD1/f | 0.571 | 0.57 | 0.3–1.0 | Satisfied |
| (7) | f23/f2 | 1.457 | 1.46 | 1.01–2.0 | Satisfied |

The values agree with the patent within the precision expected from rounded tabular radii, thicknesses, and refractive indices. The small difference between the folded air-equivalent BFD (14.2690 mm) and the paraxial image distance from the L9 rear surface (14.2750 mm) is also a rounding artifact of the published prescription.

## Data-File Transcription Notes

The delivered `.data.ts` file transcribes only the lens prescription from the first refracting surface through L9. The patent's sensor-side cover plate is omitted, as required by the LensVisualizer data specification. Its optical path is folded into the final air gap after surface 16:

$$
10.832 + \frac{4.082}{1.51633} + 0.745 = 14.269026 \text{ mm}.
$$

The aperture stop is labeled `STO`, with a semi-diameter of 6.40 mm derived from the patent FNO = 1.716 and the paraxial entrance-pupil magnification. Variable gaps are keyed as `STO` for d9 and `14A` for d14, and the infinity values in `var` exactly match the corresponding surface `d` values.

Semi-diameters are inferred because the patent does not publish clear apertures. They were chosen from a combined marginal/chief-ray trace, then reduced where necessary to satisfy the project constraints: sd/|R| < 0.90, front/rear semi-diameter ratio ≤ 1.25 for each element, positive edge thickness, and no cross-gap sag intrusion beyond 90% of the air gap. The limiting clearance is the L1 rear-to-L2 front gap; the delivered values keep it below the 90% intrusion limit.

## Sources

1. JP 2013-186458 A, Olympus Imaging Corporation, published 2013-09-19.
2. OM SYSTEM, product specification page for M.Zuiko Digital 17mm F1.8: production construction, focusing mechanism, angle of view, closest focus, special-element count, focal length, aperture, dimensions, and filter diameter.
3. OHARA optical glass catalog pages for L-BAL42, S-TIL26, S-LAH59, S-TIM28, S-LAM60, and S-FTM16.
4. OHARA low-softening-point optical glass catalog family listings for L-BAL42, L-LAM60, and related precision-molding glass families.
5. HOYA optical glass data for TAFD35L and FF8.
