# Canon EF 100mm f/2.8L Macro IS USM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 7,864,451 B2, *"Imaging Lens and Image Pickup Apparatus Including the Same"*
**Applicant:** Canon Kabushiki Kaisha (Tokyo, JP)
**Inventor:** Yoshiyuki Taki (Utsunomiya, JP)
**Filed:** December 16, 2009 (US); **Priority:** December 19, 2008 (JP 2008-324167)
**Granted:** January 4, 2011

**Embodiment used:** First Numerical Example (FIGS. 1A–1B, 2A–2B, 3A–3B).

The identification of this embodiment with the Canon EF 100mm f/2.8L Macro IS USM (marketed October 2009) rests on the following convergent evidence:

1. **Element/group count.** The patent example contains 15 elements in 12 air-separated groups, matching Canon's published specification exactly.
2. **Focal length and aperture.** The patent prescription yields f = 100.0 mm at F/2.92 (design). Canon markets the lens as 100 mm f/2.8.
3. **Image circle.** The patent states an image height of 21.64 mm, corresponding to the half-diagonal of a 36 × 24 mm full-frame sensor (21.63 mm nominal).
4. **Focus mechanism.** Inner focus with a floating two-group system — the second lens unit moves toward the image side and the fourth lens unit moves toward the object side — matching Canon's published inner-focusing description. The front element does not move, and the overall length remains constant during focus.
5. **Image stabilization.** The fifth-a lens unit (L5a), a cemented doublet, moves perpendicular to the optical axis to correct image blur. Canon's Hybrid IS technology, first introduced in this lens, is described in the patent as compensating for angular camera shake via decentering of L5a.
6. **UD element.** The design includes one element with nd = 1.497, νd = 81.5, identified as S-FPL51 (OHARA) — Canon's standard UD (Ultra-low Dispersion) glass. Canon's marketing confirms one UD element.
7. **Macro capability.** The patent shows variable gaps at magnifications of ∞, −0.5×, and −1×, matching the lens's published 1:1 life-size magnification and 0.3 m minimum focus distance.
8. **Patent timing.** The JP priority date (December 2008) precedes the product announcement (September 2009) by nine months, consistent with Canon's typical patent-to-product cadence.
9. **All-spherical design.** The patent provides no aspherical coefficient table, and no surfaces are designated aspherical. Canon's published specifications for this lens do not list any aspherical elements.

## Optical Architecture

The Canon EF 100mm f/2.8L Macro IS USM is a five-unit inner-focus macro lens with the power distribution positive–negative–positive–positive–negative (L1–L2–L3–L4–L5). The design is an all-spherical system — no aspherical surfaces are used — comprising 15 elements in 12 groups with a total optical track of approximately 163 mm at infinity focus.

The five lens units and their roles are:

- **L1 (positive, f ≈ +53.9 mm):** Front collector group of four elements. Fixed during focus. Provides the primary positive power of the front section and establishes the working distance.
- **L2 (negative, f ≈ −39.1 mm):** Diverging group of three elements (one singlet + one cemented doublet). Moves toward the image side during close-focus. This is the primary focusing group.
- **L3 (positive, f ≈ +252.7 mm):** A single weak positive element positioned behind the aperture stop (SP) and sub-stop (SP2). Fixed during focus. Contributes to spherical aberration correction that compensates for the reduced correction capacity of L4 at close focus.
- **L4 (positive, f ≈ +52.2 mm):** A converging group of three elements (one singlet + one cemented doublet). Moves toward the object side during close-focus. This is the second floating focusing group.
- **L5 (negative, f ≈ −113.5 mm):** Rear group comprising two sub-units. L5a (f ≈ −52.3 mm) is a cemented doublet that functions as the image stabilization (IS) element, decentering perpendicular to the optical axis to shift the image. L5b (f ≈ +120.4 mm) is a two-element sub-unit providing positive power to partially balance L5a's Petzval contribution.

The overall power distribution is front-heavy: the combined positive power of L1, L3, and L4 substantially outweighs the rear negative group L5. The back focal distance is 48.3 mm — sufficient for the SLR mirror box — and the total track at infinity is 162.9 mm. Since the total track exceeds the 100 mm focal length (ratio ≈ 1.63), this is not a telephoto-shortened design; the extra length accommodates the large internal air spaces required for the two-group focus travel and the IS sub-system. The front element does not move and the barrel does not extend during focusing, so the lens maintains a constant external length from infinity to 1:1 — a key ergonomic design goal for a hand-held macro lens.

## Element-by-Element Analysis

### L1 — Front Collector Group (Elements 1–4)

#### E1 — Biconvex Positive

nd = 1.72916, νd = 54.7. Glass: S-LAL18 (OHARA). f ≈ +89.0 mm.

The front element is a moderately strong biconvex (R1 = +131.95, R2 = −125.38 mm) that collects the incoming beam and begins converging it toward the aperture stop. S-LAL18 is a lanthanum crown with good transmission and adequate chemical durability for a front-exposed element. Its high index (1.729) keeps surface curvatures manageable despite the large clear aperture (~46 mm effective diameter), limiting surface contributions to spherical aberration.

#### E2 — Positive Meniscus, convex to object

nd = 1.72916, νd = 54.7. Glass: S-LAL18 (OHARA). f ≈ +70.3 mm.

The second element is a positive meniscus (R1 = +44.50, R2 = +319.50 mm) sharing the same glass as E1. Using the same glass for two successive positive elements in a front group is typical of Canon telephoto and macro designs — it simplifies procurement and reduces sensitivity to batch-to-batch index variation. E2 further converges the marginal ray while contributing minimal coma due to the gentle meniscus bending.

#### E3 — Biconcave Negative

nd = 1.801, νd = 35.0. Glass: Dense lanthanum flint (801/350 code). f ≈ −41.5 mm.

The third element is a strongly negative biconcave lens (R1 = −182.56, R2 = +40.76 mm) that serves as the primary dispersive corrector in L1. Paired against the two preceding S-LAL18 crowns, it provides chromatic correction for the front group. The high refractive index (1.801) allows the negative power to be achieved without excessively steep surface curvatures. This glass does not match any publicly cataloged OHARA type; it may be a restricted Canon/OHARA melt. The same glass reappears on E8 in L3.

#### E4 — Biconvex Positive (UD Element)

nd = 1.497, νd = 81.5. Glass: S-FPL51 (OHARA) — Canon's UD glass. f ≈ +61.3 mm.

This is the sole UD (Ultra-low Dispersion) element in the design. The patent provides nd = 1.497 and νd = 81.5, which match OHARA S-FPL51 exactly (catalog nd = 1.49700, νd = 81.54). S-FPL51 is a fluorophosphate crown widely used in Canon L-series lenses; its catalog-documented anomalous partial dispersion (positive ΔPgF) is the physical basis for secondary-spectrum correction, though the patent itself does not publish ΔPgF or per-line refractive indices for any element. Placed at the rear of L1, where the marginal ray height is still substantial (~31 mm), E4 provides the strongest chromatic correction leverage of any single element in the system. The biconvex shape (R1 = +38.34, R2 = −140.69 mm) makes it the most strongly curved positive element in L1, concentrating the achromatic correction in a single low-dispersion station.

The combination of E3 (801/350 flint) and E4 (S-FPL51 crown) forms the chromatic corrector pair for the front group. Canon's decision to keep the UD element in the fixed L1 group — rather than in a moving focus group — ensures that the chromatic correction remains stable across the entire focus range from infinity to 1:1.

### L2 — Focus Group A (Elements 5–7)

#### E5 — Biconcave Negative

nd = 1.72047, νd = 34.7. Glass: S-TIH11 (OHARA). f ≈ −34.2 mm.

The first element of the negative L2 group is a strongly negative biconcave (R1 = −248.52, R2 = +27.42 mm). S-TIH11 is a titanium flint with relatively high dispersion, used here to provide diverging power and to generate overcorrected chromatic aberration that interacts with the L1 group during focus travel. As L2 moves toward the image side during close-focus, the changing air gaps between L1 and L2 cause controlled variation in spherical and chromatic aberration that is balanced by L4's simultaneous motion.

#### E6 + E7 — Cemented Doublet (Negative–Positive)

E6: nd = 1.53172, νd = 48.8. Glass: S-TIL27 (OHARA). Biconcave negative, f ≈ −40.0 mm.
E7: nd = 1.84666, νd = 23.9. Glass: S-TIH53 (OHARA). Positive meniscus convex to object (nearly plano-convex; R2 = +1984 mm), f ≈ +35.8 mm.

The cemented doublet completes L2. E6 (S-TIL27, a light flint) provides negative power, while E7 (S-TIH53, a very dense titanium flint with extreme dispersion, νd = 23.9) provides partially compensating positive power. The combined doublet has weak positive power (f ≈ +327 mm) individually, but its role is to balance chromatic contributions within L2 and to control coma variation during the large focus travel. The high-index flint E7 keeps the cemented junction curvature moderate (R = 29.90 mm shared), which is important for minimizing higher-order chromatic error at the junction.

### L3 — Aperture Region (Element 8)

Between L2 and L3 sits a sub-aperture stop SP2 (surface 14) and the main aperture stop SP (surface 15). The patent describes SP2 as varying its diameter with imaging magnification to block stray light as the effective F-number increases at close focus — a feature related to the effective F-number relationship $F_{\text{eff}} = (1 - \beta) \cdot F_{\text{no}}$, where β is the imaging magnification.

#### E8 — Positive Meniscus, concave to object

nd = 1.801, νd = 35.0. Glass: Dense lanthanum flint (801/350 code), same as E3. f ≈ +252.7 mm.

This single element constitutes the entirety of L3. It is a weak positive meniscus (R1 = −64.03, R2 = −49.36 mm) with both surfaces concave to the object side. Its focal length of +253 mm is intentionally weak — the patent explains (¶ on Conditional Expression 1) that L3's role is to compensate for the reduction in L4's spherical aberration correction capacity that arises from the eccentric field curvature constraints imposed by the IS system. The conditional expression f3/f = 2.53 (within the 1.5–3.0 range) represents the balance point: too weak, and it cannot compensate; too strong, and overcorrected spherical aberration results.

L3 is fixed during focus, providing a stable aberration correction station between the two moving focus groups.

### L4 — Focus Group B (Elements 9–11)

#### E9 — Biconvex Positive

nd = 1.618, νd = 63.4. Glass: S-PHM52 (OHARA). f ≈ +73.0 mm.

The leading element of L4 is a biconvex (R1 = +124.81, R2 = −69.79 mm) in S-PHM52, a phosphate crown with low dispersion. Positioned after the aperture stop where the marginal ray height is rebuilding, this element provides the primary converging power of L4 and establishes the conjugate relay from the stop toward the image plane. The phosphate crown's low dispersion ensures minimal chromatic contribution from this strongly positive surface pair.

#### E10 + E11 — Cemented Doublet (Positive–Negative)

E10: nd = 1.72916, νd = 54.7. Glass: S-LAL18 (OHARA). Biconvex positive, f ≈ +42.1 mm.
E11: nd = 1.84666, νd = 23.9. Glass: S-TIH53 (OHARA). Biconcave negative, f ≈ −51.6 mm.

This is the strongest cemented doublet in the system, with the combined group focal length of approximately +192 mm. The classic crown–flint pairing (S-LAL18 / S-TIH53) provides aggressive chromatic correction behind the stop. E10 is the most steeply curved biconvex element in the design (R1 = +62.29, R2 = −58.32 mm), and its junction with E11 at R = −58.32 mm creates a strong achromatic interface. The use of S-TIH53 (the same extreme flint used in L2) ties the chromatic correction strategy between the front and rear halves of the lens together through shared glass dispersion profiles.

L4 moves toward the object side during close-focus. Combined with L2's image-ward motion, this two-group floating mechanism provides the necessary aberration compensation across the full focus range from infinity to 1:1 magnification.

### L5a — Image Stabilization Group (Elements 12–13)

#### E12 + E13 — Cemented Doublet (Positive–Negative), IS element

E12: nd = 1.84666, νd = 23.9. Glass: S-TIH53 (OHARA). Positive meniscus concave to object, f ≈ +110.6 mm.
E13: nd = 1.71999, νd = 50.2. Glass: S-LAM52 (OHARA). Biconcave negative, f ≈ −35.5 mm.

L5a is the vibration-reducing lens unit — the heart of Canon's Hybrid IS system. It consists of a single cemented doublet with overall negative focal length of approximately −52.3 mm. The patent describes E12 as a positive lens with a convex surface on the image side (R2 = −68.67 mm, convex toward image), and E13 as a biconcave negative lens (R1 = −68.67, R2 = +41.13 mm).

The cementing is essential: by bonding the positive flint (S-TIH53) to the negative crown (S-LAM52), the IS group maintains chromatic correction even when decentered perpendicular to the optical axis. If uncorrected, decentering would introduce lateral color proportional to the displacement. The cemented construction also makes L5a a compact, lightweight unit — the patent notes that a small driving mechanism suffices, which is critical for the low-friction ceramic ball bearing system that Canon uses for smooth IS operation.

The patent's Conditional Expression (2) constrains the ratio |f5a/f5b| = 0.435 (within 0.35–0.60). This ratio ensures that the Petzval sum of L5a and L5b approximately cancel, minimizing eccentric field curvature in the vibration-reducing (decentered) state. The theoretical condition for zero eccentric field curvature (Equation A in the patent, attributed to Matsui, 1989) requires either that the exit beam from L5a is afocal, or that the Petzval sum of the lens group on the image side of L5a is zero.

### L5b — Rear Group (Elements 14–15)

#### E14 — Negative Meniscus, concave to object

nd = 1.6134, νd = 44.3. Glass: S-NBM51 (OHARA). f ≈ −147.2 mm.

E14 is a weak negative meniscus (R1 = −57.78, R2 = −162.96 mm) with both surfaces concave to the object side. S-NBM51 is a niobium-containing barium flint glass. This element contributes negative Petzval curvature to partially flatten the field in the image plane, and its moderate dispersion interacts with E15 to provide local chromatic balance within L5b.

#### E15 — Biconvex Positive

nd = 1.7432, νd = 49.3. Glass: S-LAM66 (OHARA). f ≈ +67.8 mm.

The final optical element is a biconvex (R1 = +79.42, R2 = −134.42 mm) in S-LAM66, a lanthanum crown. This strong positive element provides the converging power needed to form the final image at the sensor plane, 48.35 mm behind the last surface. Its Petzval contribution (positive) partially offsets the negative Petzval from L5a, and the combined L5 sub-system (L5a + L5b) has an overall focal length of approximately −113.5 mm.

## Glass Identification and Selection

The design uses 10 distinct glass types across 15 elements. The glass palette is dominated by OHARA catalog entries, consistent with Canon's long-standing supplier relationship.

| Glass | nd | νd | Elements | Role | Confidence |
|-------|------|------|----------|------|-----------|
| S-LAL18 (OHARA) | 1.72916 | 54.7 | E1, E2, E10 | Lanthanum crown, primary positive elements | Confirmed |
| S-FPL51 (OHARA) | 1.49700 | 81.5 | E4 | UD fluorophosphate crown, chromatic corrector | Confirmed |
| S-TIH53 (OHARA) | 1.84666 | 23.9 | E7, E11, E12 | Dense titanium flint, achromatic partner | Confirmed |
| S-TIH11 (OHARA) | 1.72047 | 34.7 | E5 | Titanium flint, diverging element | Confirmed |
| S-TIL27 (OHARA) | 1.53172 | 48.8 | E6 | Light titanium flint, doublet component | Confirmed |
| S-PHM52 (OHARA) | 1.61800 | 63.4 | E9 | Phosphate crown, low-dispersion positive | Confirmed |
| S-LAM52 (OHARA) | 1.72000 | 50.2 | E13 | Lanthanum crown, IS doublet partner | Probable (Δnd = 1×10⁻⁵) |
| S-NBM51 (OHARA) | 1.61340 | 44.3 | E14 | Niobium barium flint, field flattener | Confirmed |
| S-LAM66 (OHARA) | 1.74320 | 49.3 | E15 | Lanthanum crown, rear positive | Probable |
| Dense LaF (801/350) | 1.80100 | 35.0 | E3, E8 | Dense lanthanum flint, chromatically active negative | Unmatched in public OHARA catalog |

The most notable design choices in the glass selection are:

**S-TIH53 (νd = 23.9) used three times.** This extreme-dispersion flint appears in three separate achromatic partnerships: with S-TIL27 in L2, with S-LAL18 in L4, and with S-LAM52 in L5a. Using the same flint glass across all three corrector stations ensures consistent dispersion behavior and simplifies the designer's ability to balance chromatic aberration across the entire system.

**S-FPL51 (UD) positioned in the fixed front group.** Placing the single UD element in L1 — which does not move during focus — provides stable secondary-spectrum correction independent of focus position. This is particularly important for a macro lens, where focus travel is extreme and even small variations in chromatic correction become visible at high magnifications.

**The 801/350 glass (E3, E8) is not publicly cataloged by OHARA.** It may be a Canon-specific restricted melt. HOYA TAFD25 and HIKARI E-LASF013 have matching nd/νd values; alternatively, this glass may be an older or special-order OHARA type. Its high index (1.801) combined with moderate dispersion (νd = 35) places it in the dense lanthanum flint family, intermediate between standard lanthanum crowns and high-dispersion titanium flints.

## Conditional Expressions

The patent defines four conditional expressions governing the power balance of the system. All four are satisfied by Example 1, as verified independently via ABCD matrix ray trace:

| Expression | Condition | Computed | Patent Table | Status |
|-----------|-----------|:--------:|:------------:|:------:|
| (1) f3/f | 1.5 < f3/f < 3.0 | 2.527 | 2.53 | Satisfied |
| (2) \|f5a/f5b\| | 0.35 < \|f5a/f5b\| < 0.60 | 0.435 | 0.435 | Satisfied |
| (3) f4/f | 0.50 < f4/f < 0.70 | 0.522 | 0.522 | Satisfied |
| (4) f4/f3 | 0.20 < f4/f3 < 0.30 | 0.206 | 0.206 | Satisfied |

**Expression (1)** constrains the focal length of L3 relative to the system. If L3 is too weak (ratio above 3.0), it cannot compensate for the reduced spherical aberration correction in L4 imposed by the IS Petzval balance constraint; if too strong (below 1.5), the spherical aberration overcorrects in the negative direction. The patent also defines tighter preferred bounds: 1.7 < f3/f < 2.8.

**Expression (2)** constrains the power ratio between the IS group (L5a) and its trailing group (L5b). This ratio controls the Petzval sum balance within L5, which determines the eccentric field curvature in the vibration-reducing (decentered) state. The preferred bounds are 0.40 < |f5a/f5b| < 0.50.

**Expression (3)** constrains L4's focal length relative to the system. If L4 is too weak, the spherical aberration from L2 cannot be corrected; if too strong, the Petzval balance condition (Expression A) for the IS group becomes unsatisfiable and the field curvature in the decentered state degrades.

**Expression (4)** constrains the power ratio between L4 and L3, ensuring that the spherical aberration correction is properly shared between the two groups that flank the aperture stop. The value of 0.206 sits at the lower bound (0.20–0.30), indicating that L4's power is relatively large compared to L3's — consistent with L3 being a weak single-element group and L4 being the primary post-stop corrector.

## Focus Mechanism

The lens uses a **dual-group floating inner focus** system. During focusing from infinity to close (1:1 magnification, MFD = 0.3 m):

- **L1 (fixed):** The front group does not move. This keeps the working distance predictable, the overall barrel length constant, and the front element protected.
- **L2 (moves image-ward):** The negative focus group translates toward the image side. The air gap between L1 and L2 (surface 8) increases from 1.31 mm at infinity to 20.32 mm at 1:1.
- **L3 (fixed):** The aperture group remains stationary, serving as a stable reference for aberration correction.
- **L4 (moves object-ward):** The positive focus group translates toward the object side. The air gap between L3 and L4 (surface 17) decreases from 18.54 mm at infinity to 1.91 mm at 1:1.
- **L5 (fixed):** The IS and rear groups do not move during focus (though L5a moves laterally for IS).

Canon's marketing literature describes the lens as having a "3-group floating system." The patent, however, is unambiguous: only two lens units move during focus (L2 toward the image side, L4 toward the object side; col. 6, lines 43–50). The "3-group" designation in Canon's marketing likely refers to the three groups whose mutual spacings participate in the aberration correction — L2, L3, and L4 — even though L3 itself is fixed. The predecessor EF 100mm f/2.8 Macro USM, by contrast, was described by Canon Camera Museum as using "three independently moving groups" — a genuinely different focus topology. The patent for the current L-IS design explicitly states three groups are fixed and two move.

| Gap | Surface | Infinity (mm) | −0.5× (mm) | −1× (mm) | Change |
|-----|---------|:---:|:---:|:---:|--------|
| L1–L2 | d8 | 1.31 | 9.90 | 20.32 | +19.01 |
| L2–L3 | d13 | 21.73 | 13.14 | 2.71 | −19.02 |
| L3–L4 | d17 | 18.54 | 9.21 | 1.91 | −16.63 |
| L4–L5 | d22 | 3.00 | 12.33 | 19.63 | +16.63 |
| L5a–L5b | d25 | 6.97 | 6.97 | 6.97 | 0.00 |
| BF | d29 | 48.35 | 48.35 | 48.35 | 0.00 |

The symmetry is notable: d8 and d13 change by nearly identical amounts (±19.0 mm) but in opposite directions, as do d17 and d22 (±16.6 mm). This reflects the two floating groups moving in opposite directions within a fixed-length barrel. The back focal distance (48.35 mm) remains constant at all focus positions — the image plane does not shift.

The total focus travel is substantial (approximately 19 mm per group), which is necessary to reach 1:1 magnification from a starting focal length of 100 mm. The floating design distributes the aberration correction burden between two moving groups, maintaining high performance across the entire focus range — a critical requirement for a macro lens that must deliver sharp imagery at every magnification from 0 to −1×.

The focusing is driven by Canon's ring-type USM (Ultrasonic Motor), which provides fast, quiet autofocus with full-time manual focus override.

## Aspherical Surfaces

**The design contains no aspherical surfaces.** All 29 optical surfaces (excluding the flat stops) are spherical. The patent does not include an aspherical coefficient table, and no surfaces carry an "A" designation.

This is notable because most competing designs from the same era (including Tamron's SP 90mm f/2.8 Di VC USD and Nikon's AF-S VR Micro-NIKKOR 105mm f/2.8G IF-ED) employ at least one aspherical surface. Canon's decision to use an all-spherical design for a 15-element f/2.8 macro likely reflects several considerations: the lens is designed to work at magnifications up to 1:1, where field curvature and chromatic aberration dominate over the spherical aberration and coma that aspherics primarily correct; the floating focus mechanism already provides strong higher-order aberration control via the variable air gaps; and the additional element count (15 vs. the typical 12–14) provides enough degrees of freedom for spherical surfaces alone to achieve adequate correction.

## Image Stabilization

The image stabilization system is implemented via the L5a sub-unit — a cemented doublet (E12 + E13) with overall negative focal length of −52.3 mm. During operation, L5a translates perpendicular to the optical axis, shifting the image position to compensate for camera shake.

The patent describes this as the first implementation of Canon's **Hybrid IS** technology, which compensates for both angular shake (rotation about the lens axis) and shift shake (parallel translation of the camera). Angular shake is detected by a conventional angular velocity sensor (gyroscope), while shift shake is detected by a dedicated acceleration sensor — a novel addition at the time of this lens's introduction. The shift correction is particularly valuable for macro photography, where the short working distance amplifies the effect of translational camera movements.

The patent's Conditional Expression (A) governs the Petzval balance required for good eccentric (decentered) performance:

$$\alpha_p' P_q - \alpha_p (P_p + P_q) = 0$$

where $P_p$ is the Petzval sum of the IS group, $P_q$ is the Petzval sum of the group behind it (L5b), and $\alpha_p$, $\alpha_p'$ are the entrance and exit ray angles at the IS group. To satisfy this condition without introducing excessive aberration, the design constrains the focal length ratio |f5a/f5b| = 0.435. This ensures that the positive Petzval contribution of L5b approximately cancels the negative Petzval of L5a as seen from the decentered state, minimizing eccentric field curvature.

The IS system provides approximately 4 stops of shake compensation at normal shooting distances, degrading to approximately 3 stops at 0.5× magnification and 2 stops at 1:1, as specified by Canon. The degradation at high magnification is inherent: the effective F-number increases as $(1 - \beta) \cdot F_{\text{no}}$, and the sensitivity to shift shake grows with magnification. The sub-aperture stop SP2 varies in diameter with magnification to block stray light as the effective aperture narrows.

## Verification Summary

Independent paraxial verification via ABCD transfer matrix ray trace confirms all patent-stated values:

| Parameter | Computed | Patent | Match |
|-----------|:--------:|:------:|:-----:|
| EFL | 100.00 mm | 100 mm | ✓ |
| F-number | 2.92 | 2.92 | ✓ |
| Half-field angle | 12.21° | 12.21° | ✓ |
| BFD | 48.33 mm | 48.35 mm | ✓ (rounding) |
| Total track | 162.92 mm | 162.90 mm | ✓ (rounding) |
| f3/f (Cond. 1) | 2.527 | 2.53 | ✓ |
| \|f5a/f5b\| (Cond. 2) | 0.435 | 0.435 | ✓ |
| f4/f (Cond. 3) | 0.522 | 0.522 | ✓ |
| f4/f3 (Cond. 4) | 0.206 | 0.206 | ✓ |

## Design Heritage and Context

The Canon EF 100mm f/2.8L Macro IS USM, introduced in October 2009, was Canon's third EF-mount 100mm macro lens, succeeding the EF 100mm f/2.8 Macro (1990) and the EF 100mm f/2.8 Macro USM (2000). It was the first Canon macro lens to receive the "L" designation and the first lens of any manufacturer to feature Hybrid Image Stabilization.

The optical formula is substantially new relative to its predecessor: the earlier EF 100mm f/2.8 Macro USM used 12 elements in 8 groups without IS, whereas this design expands to 15/12 to accommodate the IS sub-system and the floating focus mechanism required to maintain performance across the full macro range with image stabilization active.

The lens remained in Canon's lineup through the EF-mount era and continues to be usable on Canon RF-mount cameras via the EF–RF adapter. Canon subsequently released the RF 100mm f/2.8L Macro IS USM (2021), which introduced a new optical formula with SA (Spherical Aberration) control ring and a redesigned IS system.

## Sources

1. US 7,864,451 B2 (Taki, Canon Kabushiki Kaisha), granted January 4, 2011.
2. Canon Camera Museum, EF100mm f/2.8L Macro IS USM product page: https://global.canon/en/c-museum/product/ef405.html
3. Canon Camera Museum, EF100mm f/2.8 Macro USM product page (predecessor, "three-group floating" reference): https://global.canon/en/c-museum/product/ef357.html
4. Canon U.S.A., Inc., EF 100mm f/2.8L Macro IS USM product specifications.
5. OHARA Inc., Optical Glass Pocket Catalog (May 2023 edition), for glass identification reference.
6. B&H Photo, Canon EF 100mm f/2.8L Macro IS USM product description (UD element confirmation).
7. DPReview, "Canon EF 100mm F2.8L USM Macro with Hybrid IS" announcement article (September 2009), for Hybrid IS technology description.
8. DPReview, Canon EF 100mm F2.8 L IS USM Macro full review (November 2009), for IS performance characterization.
