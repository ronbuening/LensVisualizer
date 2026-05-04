# Optical Analysis: US 4,758,073 Example 4 — Vivitar Series 1 70–210 mm f/2.8–4

## Patent Reference and Design Identification

**Patent:** US 4,758,073, "Zoom Lens," granted July 19, 1988.
**Inventor:** Jacob Moskovich (Cincinnati, Ohio).
**Assignee:** Vivitar Corporation, Santa Monica, California.
**Filed:** April 5, 1984. Continuation-in-part of Ser. No. 189,591 (Oct. 1, 1980, issued as US 4,462,664), itself a CIP of Ser. No. 082,010 (Oct. 5, 1979, abandoned).

**Embodiment used:** Example 4 (Table IV, FIG. 4).

The patent discloses eight numerical examples of a three-group telephoto zoom lens in a plus–minus–plus configuration. Example 4 — the fourth of the eight — is the embodiment that was adopted for the production Vivitar Series 1 70–210 mm f/2.8–4 VMC Macro Focusing Zoom, the fourth-generation variant of Vivitar's flagship telephoto zoom. The identification rests on the following convergent evidence:

1. **Element and group count.** Example 4 specifies 14 elements in 10 air-separated groups — matching the published specification of the Series 1 70–210 f/2.8–4 (Version 4, serial prefix 09, manufactured by Cosina).
2. **Focal length range.** EFL 72.13–203.79 mm, consistent with the marketed 70–210 mm designation.
3. **Aperture range.** f/2.9–f/4.0, consistent with the marketed f/2.8–4 specification.
4. **All-spherical design.** Example 4 specifies no aspherical surfaces, unlike Example 3 which uses an aspheric on S21. The production lens is known to be all-spherical.
5. **Design firm attribution.** The lens was designed at Opcon Associates, the optical design consultancy co-founded by Moskovich and Ellis Betensky that designed most Vivitar Series 1 optics. NOC Sensei (Marco Cavina, 2023) confirms that Example 4 was the embodiment selected for production.
6. **Patent timing.** The filing date of April 5, 1984, aligns with the lens's commercial introduction circa 1984.

---

## Optical Architecture

The design is a three-group telephoto zoom of the type **positive–negative–positive**, comprising 14 elements in 10 air-separated groups across three mechanically distinct units.

**Group G1 (positive, f = 69.6 mm):** 3 elements / 2 groups. A cemented flint–crown doublet (L1 + L2) followed by an air-spaced positive meniscus (L3). G1 is stationary during zooming and moves axially only for focusing. Its strong positive power (F₁ < Fs, per the patent's first conditional expression) permits short-travel front-group focusing down to approximately 1:2 magnification.

**Group G2 (negative, f = −26.8 mm):** 4 elements / 2 groups. Two cemented doublets — L4 + L5 and L6 + L7 — separated by a 6.21 mm air space. G2 moves rearward (toward the image) during zooming from wide to telephoto, increasing the D1 gap.

**Group G3 (positive, f = 43.3 mm):** 7 elements / 6 groups, internally divided into two subgroups by a wide air space D3 (25.96 mm) that contains the aperture stop:

- **G3a (front subgroup, f = 52.4 mm):** L8, L9, and the cemented doublet L10 + L11. This subgroup carries the majority of G3's positive power and keeps G3's principal planes close to the front of the group, shortening overall track.
- **G3b (rear subgroup, f ≈ −512 mm):** L12, L13, L14. This subgroup has weak negative power — about 10× weaker than G3a — and functions primarily as a field flattener and residual-aberration corrector. The patent describes G3b as having "low optical power" and notes it "may comprise as little as one element" (col. 2, lines 50–52).

G3 moves forward (toward the object) during zooming from wide to telephoto, closing the D2 gap. The opposing motions of G2 and G3 ("in opposite directions relative to each other," col. 2, lines 3–5) produce the focal-length change with monotonic cam curves, which the patent emphasizes as a manufacturing advantage over conventional four-group telephoto zooms.

The aperture stop is located 6.70 mm after surface S18, within the D3 airspace between G3a and G3b.

---

## Element-by-Element Analysis

### Group G1 — Positive Focusing Group

#### L1 — Negative Meniscus, Convex to Object

nd = 1.78500, νd = 26.1. Glass: dense flint (785/261, SF11 class). f = −169.2 mm.

L1 is a steeply curved negative meniscus that forms the front (object-side) half of a cemented doublet with L2. Its high dispersion (νd = 26.1) paired against L2's low dispersion (νd = 70.4) provides the primary achromatic correction for G1. With a front radius of 58.32 mm and a rear radius of 39.61 mm (both positive — concentric meniscus convex to the object), L1 also contributes negative spherical aberration that partially balances the positive spherical aberration introduced by the strong positive element L2. As the first surface of the entire lens system, S1's curvature directly controls the height and angle of the marginal ray entering the rest of the optics.

The patent's stored nd/νd values (1.785/26.1) are closest to Schott SF11 (nd = 1.78472, νd = 25.76), with a νd discrepancy of 0.34 that exceeds typical rounding tolerance. This glass type differs from L1 in several other examples of the patent (e.g. Examples 1 and 2 use 1.805/25.5, i.e. SF6), suggesting Moskovich explored different flint choices across embodiments. The identification is labeled as "SF11 class" rather than a confident catalog match.

#### L2 — Biconvex Positive

nd = 1.48749, νd = 70.4. Glass: FK5 (Schott) / S-FSL5 (Ohara) — fluor crown. f = +67.6 mm.

L2 is the principal power element of G1 and the strongest single element in the entire front group (f = 67.6 mm). FK5 fluor crown glass was selected for its very low dispersion, which is critical in a telephoto zoom whose chromatic aberration burden is set predominantly by the front group's power. The element is thick (12.0 mm center thickness on a clear aperture that includes the full entrance pupil at the wide end) — a consequence of the biconvex shape needed to produce strong positive power from a low-index glass (nd = 1.487). The cemented interface with L1 at S2 (R = 39.608 mm) eliminates an air–glass reflection, improving transmission and reducing ghost images.

#### L3 — Positive Meniscus, Convex to Object

nd = 1.48749, νd = 70.4. Glass: FK5 (Schott) / S-FSL5 (Ohara) — fluor crown. f = +164.3 mm.

L3 is separated from the L1–L2 doublet by only 0.10 mm and provides supplementary positive power to bring G1's combined focal length to 69.6 mm. Using the same FK5 glass as L2, L3 extends the chromatic correction of the group without introducing new glass types. Its meniscus shape (both radii positive: R₁ = 61.45, R₂ = 258.51 mm) bends the diverging ray bundle gently inward while contributing minimal higher-order aberrations. The weak positive power (f = 164.3 mm) means L3's primary role is fine-tuning the ray bundle for handoff to G2 rather than carrying significant optical power itself.

### Group G2 — Negative Zooming Group

#### L4 + L5 — Cemented Doublet (f = −46.9 mm)

**L4 — Positive Meniscus, Concave to Object.** nd = 1.83400, νd = 37.3. Glass: S-LAH55 (Ohara) — lanthanum dense flint. f = +81.2 mm.

**L5 — Biconcave Negative.** nd = 1.77300, νd = 49.6. Glass: S-LAH65 class (Ohara) — lanthanum crown. f = −29.6 mm.

This doublet is the primary power carrier of G2. L5's strong biconcave shape (R₁ = −59.69, R₂ = 37.58 mm) generates the bulk of the group's negative power. L4, although individually positive, is paired with L5 to form a net-negative cemented group while correcting chromatic aberration across the G2 complex. Both elements use lanthanum-series rare-earth glasses — L4 is a lanthanum dense flint (S-LAH55) and L5 is a lanthanum crown (S-LAH65 class). The high refractive indices (1.834 and 1.773) permit the strong curvatures needed for a short, powerful negative group while controlling Petzval sum contributions.

The junction surface at S7 (R = −59.685 mm) transitions from nd = 1.834 to nd = 1.773. This modest index step produces relatively little refraction at the cemented interface; the interface instead serves primarily to correct longitudinal chromatic aberration by exploiting the difference in dispersion between L4 (νd = 37.3) and L5 (νd = 49.6).

#### L6 + L7 — Cemented Doublet (f = −71.6 mm)

**L6 — Biconcave Negative.** nd = 1.64048, νd = 60.2. Glass: S-BSM71 (Ohara) — barium crown. f = −31.7 mm.

**L7 — Positive Meniscus, Convex to Object.** nd = 1.80518, νd = 25.5. Glass: SF6 (Schott) / S-TIH6 (Ohara) — dense flint. f = +57.2 mm.

Separated from L4–L5 by a 6.21 mm air gap, this second doublet carries additional negative power. L6 provides the diverging action while L7 partially compensates in power and provides chromatic correction: SF6 has very high dispersion (νd = 25.5), making it an effective chromatic partner to L6's lower-dispersion barium crown. The doublet's combined focal length (−71.6 mm) is weaker than L4–L5 (−46.9 mm), so G2's power distribution is front-loaded. The air space between the two doublets gives Moskovich a degree of freedom for correcting coma and astigmatism across the zoom range — in a single-doublet negative group, these aberrations would be harder to balance at both zoom extremes.

G2's total focal length is −26.84 mm, making it the strongest (in absolute power) of the three groups. The patent notes that if the ratio |F₁/F₂| exceeds 2.85, "the distortion and the spherical aberration introduced by the negative zooming group becomes extremely difficult to correct" (col. 3, lines 27–30). For this design |F₁/F₂| = 2.59, comfortably within the specified 2.0–2.85 range.

### Group G3 — Positive Zooming Group

#### Subgroup G3a — Main Power Subgroup (f = 52.4 mm)

##### L8 — Biconvex Positive

nd = 1.48749, νd = 70.4. Glass: FK5 (Schott) / S-FSL5 (Ohara) — fluor crown. f = +128.6 mm.

L8 is a relatively weak positive biconvex element (R₁ = 115.15, R₂ = −135.83 mm) at the front of G3. Using FK5 glass continues the chromatic correction strategy established in G1: low-dispersion crowns carry the positive power while high-dispersion flints correct. L8 gently converges the ray bundle before it enters the stronger elements downstream.

##### L9 — Positive Meniscus, Convex to Object

nd = 1.58913, νd = 61.3. Glass: SK5 (Schott) — barium crown. f = +148.7 mm.

Another weak positive element, L9 uses a higher-index glass than the FK5 elements (nd = 1.589 vs. 1.487), permitting flatter curvatures for the same power contribution. Its meniscus shape (R₁ = 63.23, R₂ = 222.51 mm) contributes to controlling oblique aberrations. SK5 is a classic barium crown glass frequently used in telephoto relay groups for its combination of moderate index, low dispersion, and excellent chemical stability.

##### L10 + L11 — Cemented Doublet (f = +230.1 mm)

**L10 — Biconvex Positive.** nd = 1.48749, νd = 70.4. Glass: FK5 — fluor crown. f = +55.5 mm.

**L11 — Biconcave Negative.** nd = 1.80518, νd = 25.5. Glass: SF6 (Schott) / S-TIH6 (Ohara) — dense flint. f = −69.2 mm.

This cemented achromatic doublet is the strongest subassembly in G3a. L10 is a thick biconvex FK5 element (7.70 mm center thickness) that provides vigorous positive power, while L11 is a thinner SF6 flint that partially cancels L10's chromatic aberration. The doublet's net focal length (+230.1 mm) is considerably weaker than the individual elements because L11 subtracts substantial positive power while correcting color. This FK5/SF6 pairing — identical in glass type to the classic Fraunhofer achromat — appears three times in this design (L2/L1, L10/L11, and conceptually L8 alone which relies on the same FK5 low-dispersion strategy), underscoring Moskovich's emphasis on chromatic control for a telephoto zoom covering a 2.83× ratio.

#### Aperture Stop

The stop is located 6.70 mm after surface S18, within the 25.96 mm D3 airspace separating G3a from G3b. At the wide-angle setting (72 mm), the stop semi-diameter corresponds to f/2.89; at the telephoto end (204 mm), it corresponds to f/4.01. The variable f-number arises because the entrance pupil diameter, set by G1 and G2 ahead of the stop, does not grow in proportion to the focal length increase during zooming.

#### Subgroup G3b — Field Corrector (f ≈ −512 mm)

##### L12 — Biconvex Positive

nd = 1.60342, νd = 38.0. Glass: F5 (Schott) / S-TIM5 (Ohara) — barium flint. f = +77.6 mm.

L12 is an unusual choice: a moderate-power positive element in a high-dispersion barium flint glass. F5 (νd = 38.0) is not normally selected for positive power because its high dispersion would increase chromatic aberration. Its presence here, 26 mm behind the stop in the diverging cone, suggests a deliberate design trade: L12's positive power converges the ray bundle before it reaches the strong negative corrector L13, while its dispersion is used to pre-correct lateral (transverse) chromatic aberration that the rear elements cannot otherwise reach. The biconvex shape (R₁ = 251.28, R₂ = −57.14 mm) concentrates most of the refraction at the steeper rear surface S20.

##### L13 — Negative Meniscus, Concave to Object

nd = 1.83400, νd = 37.3. Glass: S-LAH55 (Ohara) — lanthanum dense flint. f = −39.2 mm.

L13 is the strongest negative element in G3b (and one of the strongest in the entire system after L5) despite being part of a subgroup the patent describes as "low optical power." Its role is field flattening: positioned close to the image plane — only 4.80 mm of glass (L14) and the BFL separate it from the focal plane — L13's strong negative power counteracts the Petzval field curvature accumulated by the preceding positive groups. The lanthanum dense flint glass (nd = 1.834) provides the high refractive index needed to produce strong curvature in a compact element (2.20 mm center thickness). Both surfaces are concave to the object (R₁ = −25.51, R₂ = −120.29 mm), forming a meniscus that is steeply curved at the front (S21) where it intercepts the diverging ray bundle at relatively large angles.

##### L14 — Biconvex Positive

nd = 1.76182, νd = 26.6. Glass: SF14 (Schott) / S-TIH14 (Ohara) — dense flint. f = +140.8 mm.

L14 is the final element before the image plane. Like L12, it uses a high-dispersion glass (νd = 26.6) in a positive element — an unconventional pairing that signals a deliberate lateral chromatic correction strategy. L14's weak positive power (f = 140.8 mm) partially compensates L13's strong negative contribution, keeping G3b at low net power as a unit (f ≈ −512 mm). Its high-dispersion glass corrects the lateral color introduced by the asymmetry of the stop position relative to G3a and G3b. The biconvex shape (R₁ = 321.05, R₂ = −160.61 mm) distributes refraction gently across both surfaces, minimizing higher-order aberrations at the last optical surface before the image.

---

## Glass Identification and Selection

The design uses 9 distinct glass types across 14 elements. The palette is dominated by two glass families: fluor crowns (FK5, four elements) and dense flints (SF6/SF14, three elements), supplemented by three lanthanum-series rare-earth glasses and three conventional crowns/flints.

| Element(s) | nd | νd | Glass | Vendor | Family | Role |
|---|---|---|---|---|---|---|
| L2, L3, L8, L10 | 1.487 | 70.4 | FK5 / S-FSL5 | Schott / Ohara | Fluor crown | Low-dispersion positive power carriers |
| L7, L11 | 1.805 | 25.5 | SF6 / S-TIH6 | Schott / Ohara | Dense flint | Achromatic correctors (high dispersion) |
| L4, L13 | 1.834 | 37.3 | S-LAH55 | Ohara | Lanthanum dense flint | High-index elements for Petzval/field correction |
| L5 | 1.773 | 49.6 | S-LAH65 class | Ohara | Lanthanum crown | High-index moderate-dispersion negative |
| L1 | 1.785 | 26.1 | Dense flint (785/261, SF11 class) | Schott (probable) | Dense flint | Front achromatic corrector |
| L14 | 1.762 | 26.6 | SF14 / S-TIH14 | Schott / Ohara | Dense flint | Lateral color corrector |
| L12 | 1.603 | 38.0 | F5 / S-TIM5 | Schott / Ohara | Barium flint | Lateral color / field corrector |
| L9 | 1.589 | 61.3 | SK5 | Schott | Barium crown | Relay positive element |
| L6 | 1.640 | 60.2 | S-BSM71 | Ohara | Barium crown | Negative power in G2 |

L1's glass (nd = 1.785, νd = 26.1) differs from that used in several other examples of the patent (Examples 1, 2, and 6 use nd = 1.805/νd = 25.5, i.e. SF6, for L1). The closest catalog match for the Example 4 values is Schott SF11 (nd = 1.78472, νd = 25.76), with a νd discrepancy of 0.34 that slightly exceeds typical rounding tolerance for a confident assignment. The glass is therefore identified at the class level with the six-digit code 785/261.

The chromatic correction strategy is conventional in its broad strokes — FK5 crowns carry positive power while SF6-class flints correct — but shows sophistication in two areas. First, the use of three lanthanum-type rare-earth glasses (L4, L5, L13) provides high refractive indices that control Petzval sum and permit compact, high-power elements in G2 and G3b without the surface curvatures that an equivalent design in conventional glasses would require. Second, the deliberate use of high-dispersion glasses (F5, SF14) in positive elements near the image plane (L12, L14) corrects lateral chromatic aberration — a technique that is effective only for elements positioned well away from the aperture stop.

An Italian analysis by Marco Cavina (NOC Sensei, 2023) notes that Moskovich's original computation specified four lanthanum-type glasses, but the production lens may have substituted conventional equivalents for some positions to reduce cost. The patent prescription retains three such glasses (L4, L5, L13), all in positions where high refractive index is structurally essential — the strong negative group G2 and the field-flattening corrector in G3b.

---

## Focus Mechanism

G1 moves axially as a unit for focusing; G2 and G3 are stationary during focusing. This is a front-group unit-focus design.

The patent states that the strong power of G1 (F₁ = 69.6 mm, shorter than the minimum system EFL of 72.1 mm) "permits a simple short focusing travel by the first group while focusing to magnification of 1:2 or closer" (col. 2, lines 9–11). Because G1 is the only moving group during focusing and is stationary during zooming, the mechanical design is simpler than competing four-group zooms where the front group moves for both zoom and focus.

The variable gaps in the patent are D1 (between G1 and G2) and D2 (between G2 and G3), which change during zooming, plus BFL (back focal length to the image plane). Focus adjustment changes the position of G1 relative to the camera body, effectively adding a small extension to the front of the lens and increasing D1 while the image plane shifts accordingly. The patent does not publish close-focus spacing data for Example 4, so the precise focus travel and close-focus D1 values cannot be determined from this document alone.

The marketed minimum focus distance for the production lens was approximately 0.9 m, with a maximum reproduction ratio of approximately 1:2.5. At the wide-angle end (70 mm), the minimum focus distance was longer — approximately 1.6 m — because the same mechanical focus travel produces less focal-length-normalized defocus at wider angles. The variation of MFD with focal length is a characteristic of front-group unit-focus designs where the focus extension is independent of the zoom setting.

---

## Aspherical Surfaces

Example 4 is an all-spherical design. No aspherical surfaces are specified in Table IV.

Of the eight examples in the patent, only Example 3 (Table III, FIG. 3) incorporates an aspherical surface — surface S21 with conic constant K = −0.010 and polynomial coefficients D through G. All other examples, including Example 4, are entirely spherical.

The patent's aspherical sag equation (col. 4, lines 36–42) uses the standard even-polynomial form with a conic constant K and deformation coefficients D (4th order), E (6th), F (8th), and G (10th). This equation was not applied to any surface in Example 4.

---

## Zoom Mechanism and Variable Spacings

Zooming is accomplished by moving G2 rearward and G3 forward simultaneously, in opposite directions. G1 remains stationary during zoom. The variable gaps are:

| | Wide (72.1 mm) | Mid (134.9 mm) | Tele (203.8 mm) |
|---|---|---|---|
| f-number | f/2.89 | f/3.49 | f/4.01 |
| D1 (G1–G2) | 2.500 mm | 10.692 mm | 14.468 mm |
| D2 (G2–G3) | **37.49 mm*** | 15.947 mm | 0.500 mm |
| BFL | 38.997 mm | 52.352 mm | 64.025 mm |
| EFL (verified) | 72.0 mm | 135.0 mm | 205.0 mm |

**\*Typographical error in patent.** The published value for D2 at the wide position is 3.490 mm. A paraxial ray trace using D1 = 2.500, D2 = 3.490, and BFL = 38.997 yields an EFL of approximately 381 mm — irreconcilable with the patent's own stated EFL of 72.132 mm at this zoom position. Total-track conservation across the three zoom positions requires D2 ≈ 37.49 mm at wide, yielding EFL = 72.0 mm in agreement with the patent's stated value. The mid and tele zoom positions, where the published data is internally consistent, verify to within 0.1 mm and 1.2 mm respectively.

The same anomaly appears in Table III (Example 3): D2 at wide is listed as 4.17 mm, producing a variable-gap total approximately 37 mm shorter than the mid and tele positions. This suggests a systematic typesetting issue in which a digit was dropped from D2 at the wide-angle position in at least two of the eight tables.

As supporting evidence, the corrected D2 restores monotonically decreasing behavior (37.49 → 15.95 → 0.50 mm) consistent with the patent's description of G3 moving toward G2 during zoom-to-telephoto. The Certificate of Correction appended to the patent (August 15, 1989) corrects several typographical errors in the specification and claims — including a dropped digit in Claim 4's L14 thickness — but does not address the D2 wide-angle value.

D1 increases monotonically from 2.5 to 14.5 mm (G2 moves rearward), D2 decreases monotonically from 37.5 to 0.5 mm (G3 moves forward and converges toward G2), and BFL increases monotonically from 39.0 to 64.0 mm (the image plane moves further from G3 as the system focal length increases). The zoom ratio is 203.8/72.1 = 2.83:1.

---

## Conditional Expressions

The patent specifies three structural conditions that govern the balance of group powers. All are satisfied by Example 4:

**Condition 1: F₁ < Fs** (col. 3, lines 13–15)

F₁ = 69.6 mm < Fs = 72.1 mm. ✓ Satisfied.

The focal length of the focusing group is shorter than the system's shortest EFL. This ensures a short focusing travel to reach close-focus magnifications.

**Condition 2: F₃ < F₁ < 1.85 F₃** (col. 3, lines 40–43, as corrected)

43.3 < 69.6 < 80.1 (= 1.85 × 43.3). ✓ Satisfied.

This brackets F₁ relative to F₃: too low and G3 cannot correct the aberrations introduced by strong G1 and G2; too high and G3's travel becomes excessive.

**Condition 3: 2.0 < |F₁/F₂| < 2.85** (col. 3, lines 24–25)

|69.6 / (−26.8)| = 2.59. ✓ Satisfied.

This constrains the power ratio of the focusing group to the zooming group. Exceeding 2.85 makes distortion and spherical aberration from G2 uncorrectable; falling below 2.0 requires excessive G2 travel.

**Power-ratio conditions** (col. 4, lines 1–6):

| Ratio | Computed | Patent Table X | Required Range |
|---|---|---|---|
| K₁/K_M | 1.74 | 1.73 | 1.4–2.2 |
| \|K₂\|/K_M | 4.52 | 4.50 | 3.4–4.8 |
| K₃/K_M | 2.80 | 2.78 | 2.3–2.9 |

All ratios fall within the patent's specified ranges. K_M = √(K_S · K_L) = 0.00825 mm⁻¹.

---

## Verification Summary

Independent paraxial ray traces (y-nu method) were performed on the full 24-surface prescription using the patent's published radii, thicknesses, and refractive indices. Results:

| Quantity | Computed | Patent | Δ |
|---|---|---|---|
| EFL at wide (published D2 = 3.490) | **~381 mm** | 72.132 mm | **+309 mm** |
| EFL at wide (corrected D2 = 37.490) | 72.0 mm | 72.132 mm | −0.1 mm |
| EFL at mid | 135.0 mm | 134.911 mm | +0.1 mm |
| EFL at tele | 205.0 mm | 203.786 mm | +1.2 mm |
| G1 focal length (F₁) | 69.60 mm | 69.4 mm | +0.2 mm |
| G2 focal length (F₂) | −26.84 mm | −26.8 mm | −0.04 mm |
| G3 focal length (F₃) | 43.31 mm | 43.3 mm | +0.01 mm |
| G3a focal length | 52.44 mm | — | — |
| G3b focal length | −511.9 mm | — | — |
| Petzval sum | 0.000890 mm⁻¹ | — | — |
| Petzval radius | 1124 mm | — | — |
| Total track (all positions) | 182.54 ± 0.003 mm | — | — |

The group focal lengths match the patent's Table IX values to within rounding of the three-decimal-place nd values. The EFL match at mid-zoom is excellent (Δ = 0.1 mm). The slightly larger deviation at the tele end (Δ = 1.2 mm) is consistent with the accumulated effect of rounding in the published nd and radius values over a long optical path.

The total track is conserved across all three zoom positions to within ±0.003 mm, confirming the corrected D2 value and validating the zoom-gap conservation model.

The Petzval radius of 1124 mm indicates a gently curved field — typical for a telephoto zoom of this era and acceptable for 35 mm film where the tolerable depth of focus is approximately ±30 µm.

---

## Design Heritage and Context

The Vivitar Series 1 70–210 mm lineage is one of the most commercially significant telephoto zoom families of the manual-focus era. The original f/3.5 version, designed by Ellis Betensky (US 3,817,600, 1974) and manufactured by Kino Precision, was the first macro-focusing zoom lens — an innovation subsequently adopted by every major lens manufacturer. The original lens used a conventional four-group telephoto zoom architecture and was notable for its mechanical complexity, which led to reliability issues through several production revisions.

Moskovich's redesign for US 4,758,073 represented a fundamental architectural change: reducing from four groups to three (plus–minus–plus) and shifting both zooming groups behind a stationary front group. This simplified the cam mechanism (monotonic cam curves for both zooming groups), reduced manufacturing tolerances, and produced a more compact lens while retaining the macro-focus capability. The trade-off was a variable maximum aperture (f/2.8–4 vs. the original's constant f/3.5), though the wider maximum aperture at the short end (f/2.8 at 70 mm vs. f/3.5) partially compensated.

The production lens was manufactured by Cosina (serial prefix 09) and was sold from approximately 1984 through the early 1990s. The Cosina version was produced with both 58 mm and 62 mm filter threads, the 62 mm variant being the later and more common production run. A Q-Dos variant (Version 5) added an internal anaglyphic stereo filter system using half red/half cyan filters at the aperture stop position. A gold-plated commemorative edition was produced for the Vivitar Series 1 50th anniversary set.

---

## Sources

1. US Patent 4,758,073, "Zoom Lens," J. Moskovich, granted July 19, 1988. Certificate of Correction, August 15, 1989.
2. US Patent 4,462,664, "Zoom Lens," J. Moskovich, granted July 31, 1984 (parent patent).
3. US Patent 3,817,600, "Zoom lens having close-focusing mode of operation," R. Watanabe and E. I. Betensky, granted June 18, 1974 (original Series 1 70–210 f/3.5).
4. Camera-wiki.org, "Series 1 70-210mm f/2.8-4 VMC Macro Focusing Zoom (Cosina)," retrieved May 2026.
5. Camera-wiki.org, "Vivitar Series 1 70-210mm f/3.5 VMC Macro Focusing Zoom," retrieved May 2026.
6. M. Cavina, "Vivitar Series 1 70-210mm Macro (seconda parte)," NOC Sensei, July 2023 (identifies Example 4 as the production embodiment and discusses glass substitutions).
7. M. Roberts, "Vivitar 70-210 Series 1 Macro Zoom Lenses," robertstech.com (version comparison and manufacturing data).
8. Lens-DB.com, "Vivitar Series 1 70-210mm F/2.8-4 Q-Dos VMC Macro [III]," serial number and manufacturer identification.
