# Optical Analysis: Hasselblad HC 3.5/50 (Mark I)

## US 2003/0011895 A1 — Example 4

---

## 1. Patent Reference and Design Identification

**Patent:** US 2003/0011895 A1, *Retrofocus Imaging Lens*
**Applicant:** Fuji Photo Optical Co., Ltd., Saitama City, Japan
**Inventor:** Masao Mori
**Filed:** July 11, 2002 (US); priority July 12, 2001 (JP 2001-211937)
**Published:** January 16, 2003
**Embodiment used:** Example 4 (Numerical Example 4, FIG. 4 / FIG. 8)

### Production Identification

Example 4 is identified as the optical formula for the original **Hasselblad HC 3.5/50** (Mark I) through the following convergent evidence:

1. **Element and group count.** Example 4 contains 10 elements in 9 groups (one cemented doublet). The original HC 50mm f/3.5 is documented as "ten elements in nine groups" by KEH (citing Hasselblad's original specification). This distinguishes it from the later HC 50mm f/3.5 II, which was redesigned to 11 elements in 7 groups.
2. **Focal length and f-number.** The patent states f = 1.0 (normalized), Fno = 3.5. At a scale factor of ×50.0, the production EFL is 50.0 mm at f/3.5.
3. **Field angle.** The patent states 2ω = 69.4°. For a 50 mm lens on the 645 format (diagonal ≈ 69.7 mm), the diagonal half-angle is arctan(34.85/50) = 34.9°, giving 2ω ≈ 69.8° — consistent within rounding of the image circle.
4. **Focus mechanism.** The patent describes a rear-focus system using the second lens group (G2) as the focusing unit. The production HC 50mm f/3.5 is specified as rear-focusing.
5. **Minimum focus distance.** The manufacturer's MFD of 0.6 m is consistent with the patent's normalized focusing amount of 0.1177 (≈ 5.88 mm at production scale), which represents the G2 travel from infinity to closest focus.
6. **Assignee and timing.** The assignee is Fuji Photo Optical Co., Ltd. — the optical division that designed and manufactured all Hasselblad HC lenses. The filing date (July 2002) aligns with the H-system launch year.
7. **Design type.** Both the patent and the manufacturer describe a retrofocus wide-angle design with integral lens shutter space, consistent with the HC system's leaf-shutter architecture.

---

## 2. Optical Architecture

The HC 3.5/50 is a **retrofocus imaging lens** of 10 elements in 9 groups, arranged in two principal groups separated by an aperture stop. The design follows a retrofocus architecture in which a negative front subgroup (G1A) creates the long back focal distance, while the overall first group (G1) retains net positive power — an unusual feature that distinguishes this design from simpler negative-positive retrofocus types.

**Group structure:**

The first lens group **G1** has a positive refractive power as a whole (f_{G1} = +195.2 mm at production scale) and is divided into two subgroups. The front-side first lens group **G1A** (L11–L13, 3 elements / 3 groups) has a negative refractive power (f_{G1A} = −83.3 mm), functioning as the diverging front group that creates the retrofocus geometry. The rear-side first lens group **G1B** (L14–L16, 3 elements / 2 groups, including a cemented doublet) has a positive refractive power (f_{G1B} = +84.7 mm), acting as the collecting relay that converges the divergent beam from G1A.

The second lens group **G2** (L21–L24, 4 elements / 4 groups) has a positive refractive power (f_{G2} = +74.2 mm) and serves a dual purpose: it completes the image formation and functions as the rear-focus unit. G2 is separated from G1 by the aperture stop and a travelling flare-cut aperture.

**Key architectural metrics (production scale):**

| Parameter | Value |
|---|---|
| EFL | 50.0 mm |
| BFD (infinity) | 65.0 mm |
| Total track | 172.0 mm |
| BFD / EFL | 1.30 (retrofocus: BFD > f) |
| TL / f | 3.44 |
| Petzval radius | 622 mm (backward-curving) |

The back focal distance of 65 mm — roughly 30% longer than the focal length — provides the clearance needed for the HC mount's integral leaf shutter, mirror mechanism, and film/sensor registration distance. The TL/f ratio of 3.44 is characteristic of a moderately compact retrofocus design; the lens avoids the extreme front-group divergence (and concomitant front-element diameter growth) seen in more aggressive wide-angle retrofocus designs.

---

## 3. Element-by-Element Analysis

All radii and thicknesses below are given at production scale (×50.0). Element types and focal lengths are derived from thick-lens ABCD traces of the normalized prescription unless otherwise noted.

### Group G1A — Front Diverging Group (negative)

#### L11 — Negative Meniscus, convex to object

nd = 1.80610, νd = 40.9. Glass: S-LAH53 (OHARA) — lanthanum dense flint. f = −82.9 mm.

L11 is the front element of the lens and the first of two negative meniscus lenses that form the core diverging pair of G1A. Its high refractive index (nd = 1.806) enables strong negative power in a meniscus shape (R1 = +65.8 mm, R2 = +32.5 mm), which keeps the angle of refraction moderate for oblique rays entering at large field angles. The meniscus geometry gradually bends the wide-angle light flux toward the optical axis, suppressing the angle of incidence at each surface. Per ¶0068, this progressive bending strategy is central to the patent's approach to controlling both the diameter of the front group and the coma flare from the lower part of oblique incident light. As the first surface the light encounters, L11's front radius is the primary contributor to the lens's maximum clear aperture.

#### L12 — Negative Meniscus, convex to object

nd = 1.80610, νd = 40.9. Glass: S-LAH53 (OHARA) — lanthanum dense flint. f = −65.2 mm.

L12 uses the same glass as L11 but with a weaker front surface (R1 = +109.8 mm) and a more strongly curved rear surface (R2 = +35.2 mm), producing a more steeply meniscus profile and a shorter negative focal length. Together, L11 and L12 form a synthetic negative doublet with a combined focal length of approximately −34.4 mm (normalized f_n/f_{1a} = 0.41, per patent conditional expression (3)). The two-element decomposition of the negative power — rather than concentrating it in a single strong negative lens — is the patent's principal strategy for distributing the aberration load: it limits the maximum surface curvatures while keeping each element's contribution to coma and lateral chromatic aberration manageable. The patent notes (¶0068) that this arrangement prevents any single surface from imposing an "extremely large incident angle or outgoing angle" on the oblique ray bundle.

#### L13 — Biconvex Positive

nd = 1.78470, νd = 26.3. Glass: S-NPH4 (OHARA) — niobium phosphate heavy flint. f = +86.9 mm.

L13 is the positive lens at the rear of the negative front group, a distinctive feature of the first-embodiment design (¶0061, ¶0067). Its role is twofold: it partially offsets the strong negative distortion introduced by L11 and L12 (by adding positive power into the diverging subgroup), and it steers the divergent ray bundle from the meniscus pair toward a more manageable cone before the beam enters G1B. The patent's conditional expression (3) — which constrains the ratio f_n/f_{1a} to the range 0.35–0.65 — governs the balance between L13's positive contribution and the meniscus pair's negative power. A violation below the lower limit would overcorrect the distortion while worsening lower-oblique coma; a violation above would leave the distortion uncorrected (¶0076).

The choice of S-NPH4 — a niobium phosphate heavy flint with very high dispersion (νd = 26.3) — is notable. In the front group's diverging geometry, this high-dispersion positive element generates a positive contribution to the lateral chromatic aberration that partially counteracts the negative lateral color introduced by the negative meniscus pair. The glass's high refractive index (1.785) also minimizes the surface curvatures needed for the required positive power. The NPH (niobium phosphate) glass family achieves its high dispersion through niobium oxide additions rather than the titanium oxide used in the TIH family, giving somewhat different partial-dispersion characteristics.

### Group G1B — Rear Collecting Group (positive)

#### L14 + L15 — Cemented Doublet (negative meniscus + biconvex positive)

**L14:** nd = 1.80810, νd = 22.8. Glass: S-NPH1 (OHARA) — niobium phosphate heavy flint. f = −145.9 mm (standalone in-air value).
**L15:** nd = 1.71300, νd = 53.9. Glass: S-LAL8 (OHARA) — lanthanum crown. f = +34.1 mm (standalone in-air value).
**Cemented doublet:** f = +46.0 mm (thick-lens).

This cemented doublet is the optical engine of G1B. L14 is a weakly negative meniscus (both radii positive: R = +51.4 / +34.2 mm) made of S-NPH1, the most dispersive glass in the entire system (νd = 22.8). Like L13, L14 uses a niobium phosphate glass rather than a titanium flint — S-NPH1 achieves its extreme dispersion through niobium oxide additions while maintaining a very high refractive index (nd = 1.808). L15, cemented to its rear, is a strongly positive biconvex element (R = +34.2 / −70.4 mm) of S-LAL8 lanthanum crown. The combination forms a classic achromatic doublet — a positive crown paired with a negative flint — that provides the primary positive power in the front half of the lens while correcting axial chromatic aberration.

The focal length of −145.9 mm stated for L14 is its standalone in-air value — the focal length the element would have if extracted from the cemented assembly and measured in isolation. Within the cemented pair, L14's in-situ optical behavior is modified by the direct glass-glass contact at the junction surface, and the cemented doublet as a unit has a positive focal length of +46.0 mm. This distinction is analytically significant: the standalone value characterizes the glass and curvature choices, while the cemented value characterizes the doublet's contribution to the system.

The Δn at the cemented interface (1.80810 − 1.71300 = 0.0951) produces a weak but non-trivial refractive contribution at the junction surface. The large Abbe number difference (Δνd = 53.9 − 22.8 = 31.1) provides strong axial chromatic correction. The cemented construction eliminates two glass-air surfaces, reducing ghost reflections — an important consideration given the patent's stated goal of minimizing ghost flare (¶0006).

The patent allows G1B's first two elements (L14, L15) to be either air-separated or cemented (¶0063). In Example 4, they are cemented (the junction thickness D8 = 0.2702 in the normalized table represents the interior of L15, not an air gap, since it carries nd = 1.71300). This is confirmed by the FIG. 4 cross-section, which shows R7 and R8 in contact.

#### L16 — Negative Meniscus, convex to object

nd = 1.51742, νd = 52.4. Glass: S-NSL36 (OHARA) — normal crown. f = −75.3 mm.

L16 is the last element of G1B and the most weakly refractive element in the front half of the system. Its extremely weak front surface (R = +306.9 mm, nearly flat) and more strongly curved rear surface (R = +34.5 mm) create a meniscus whose primary function is to flatten the field curvature contribution of the preceding doublet. By placing a negative element at the rear of the positive G1B subgroup, the designer reduces the Petzval sum without significantly compromising G1B's overall positive power. The low-index, moderate-dispersion S-NSL36 glass minimizes the element's contribution to chromatic aberration while providing the required curvatures for field correction.

### Aperture Stop and Flare-Cut System

Between G1B and G2, the design interposes three elements in sequence: a flare-cut aperture (fc1), the aperture stop (St), and a second flare-cut aperture (fc2). At production scale, the total axial distance from L16's rear surface to L21's front surface spans 24.5 mm — the space that accommodates the HC system's integral leaf shutter mechanism.

The patent describes the flare-cut system in detail (¶0060, ¶0074–0075). The fc2 aperture, positioned between the stop and G2, travels with the focus group during focusing. Its function is to suppress coma flare from the upper part of oblique incident light, which otherwise increases at close-focus distances as G2 moves forward. The fc1 aperture, positioned between G1B and the stop, is fixed and suppresses coma flare from the lower part of oblique incident light. This dual flare-cut arrangement is one of the patent's contributions to image quality over the focusing range.

The aperture stop semi-diameter at full aperture sets the system's f/3.5 speed. The leaf shutter blades would be co-located with or adjacent to the stop position.

### Group G2 — Rear Positive Group / Focus Group

#### L21 — Positive Meniscus, convex to image

nd = 1.77250, νd = 49.6. Glass: S-LAH66 (OHARA) — lanthanum dense flint. f = +74.9 mm.

L21 is the first element of the focus group. Its meniscus shape (R = −116.9 / −39.2 mm, both concave to the object) with the more strongly curved rear surface directed toward the image creates positive power while presenting a concave surface to the incoming beam. This geometry is well suited to the position immediately after the stop: the beam converging from the stop encounters a gently curving front surface before being more strongly refracted at the rear. S-LAH66 is a lanthanum dense flint (νd = 49.6, straddling the crown-flint boundary by the νd ≈ 50 convention) that provides the needed positive power with moderate surface curvatures. Its relatively low dispersion for a high-index glass helps limit axial chromatic aberration within the focus group.

#### L22 — Negative Meniscus, concave to object

nd = 1.63980, νd = 34.5. Glass: S-NBH52 (OHARA) — niobium phosphate heavy flint. f = −32.9 mm.

L22 is the sole negative element in G2 and plays a critical role defined by the patent's architecture: it introduces negative power into the converging (rear) group to correct negative distortion (¶0067). The general retrofocus lens generates large negative distortion from its inherently asymmetric power distribution; the patent's strategy is to insert a negative element in the convergent rear group to partially balance this asymmetry. Both radii are negative (R1 = −20.4 mm, R2 = −691.7 mm), making L22 a meniscus — not a biconcave — with its strongly concave surface facing the object. The patent describes it as "a negative lens having a concave surface directed to the object side" (¶0064). The strongly concave front surface is the most steeply curved surface in the entire rear group and handles the bulk of L22's distortion-correcting action.

The choice of S-NBH52 — a niobium phosphate heavy flint with νd = 34.5 — is driven by chromatic considerations. The patent requires that G2 correct its own chromatic aberration of magnification independently from G1 (¶0071), so L22's high dispersion is paired against the low-dispersion positive elements L23 and L24 to achieve achromatization within the focus group alone. This independence ensures that when G2 moves during focusing, the lateral color does not change.

The rear surface (R = −691.7 mm) is nearly flat, giving L22 a quasi-plano-concave cross-section despite its meniscus classification — almost all of its negative power comes from the front surface.

#### L23 — Positive Meniscus, convex to image

nd = 1.61800, νd = 63.3. Glass: S-PHM52 (OHARA) — phosphate crown. f = +75.6 mm.

L23 is the third element of G2 and one of the two low-dispersion positive elements that the patent's conditional expression (5) requires to have νd > 60. With νd = 63.3, S-PHM52 satisfies this condition and provides the chromatic counterweight to L22's high-dispersion negative power within G2. The meniscus shape (R = −68.1 / −28.5 mm) with the more strongly curved rear surface continues the converging action while maintaining moderate angles of incidence. L23 and L24 together share the chromatic correction burden, which is why both are required to have νd > 60.

#### L24 — Positive Meniscus, convex to image

nd = 1.49700, νd = 81.5. Glass: S-FPL51 (OHARA) — fluorophosphate ED crown. f = +73.0 mm.

L24 is the final optical element before the image plane. It is made of S-FPL51, a fluorophosphate extra-low-dispersion (ED) glass with the highest Abbe number in the system (νd = 81.5). This element serves as the primary field-flattening and chromatic correction element at the rear of the optical train. Its meniscus shape (R = −254.7 / −32.1 mm) with a strongly curved rear surface facing the sensor provides substantial positive power while the low dispersion of S-FPL51 ensures that this power does not reintroduce chromatic aberration.

The placement of the ED element at the very rear of the system — where it handles rays at their final convergence — is a deliberate choice. At this position, L24 primarily affects the marginal ray (axial chromatic aberration) and the chief ray at large field angles (lateral chromatic aberration). The very low dispersion of S-FPL51 means that L24 can contribute significant positive power without degrading either type of chromatic correction. This is essential for the rear-focus architecture: since G2 moves as a unit, L24's chromatic contribution must remain well-balanced with L22's at all focus positions.

---

## 4. Glass Identification and Selection

All 10 elements resolved to matches against the OHARA optical glass catalog with Δnd = 0 (exact nd match) and Δνd < 0.2 for all entries. The lens uses nine distinct glass types from OHARA's catalog, consistent with Fuji Photo Optical's established sourcing from OHARA for the HC lens system.

| Element | nd | νd | Glass | Vendor | Family | Role |
|---|---|---|---|---|---|---|
| L11 | 1.80610 | 40.9 | S-LAH53 | OHARA | Lanthanum dense flint | High-index negative meniscus pair |
| L12 | 1.80610 | 40.9 | S-LAH53 | OHARA | Lanthanum dense flint | High-index negative meniscus pair |
| L13 | 1.78470 | 26.3 | S-NPH4 | OHARA | Niobium phosphate heavy flint | Positive corrector in front group |
| L14 | 1.80810 | 22.8 | S-NPH1 | OHARA | Niobium phosphate heavy flint | Cemented doublet (flint component) |
| L15 | 1.71300 | 53.9 | S-LAL8 | OHARA | Lanthanum crown | Cemented doublet (crown component) |
| L16 | 1.51742 | 52.4 | S-NSL36 | OHARA | Normal crown | Field flattener in G1B |
| L21 | 1.77250 | 49.6 | S-LAH66 | OHARA | Lanthanum dense flint | Lead positive in focus group |
| L22 | 1.63980 | 34.5 | S-NBH52 | OHARA | Niobium phosphate heavy flint | Negative corrector in focus group |
| L23 | 1.61800 | 63.3 | S-PHM52 | OHARA | Phosphate crown | Low-dispersion positive |
| L24 | 1.49700 | 81.5 | S-FPL51 | OHARA | Fluorophosphate ED crown | ED field flattener / chromatic corrector |

**Chromatic strategy.** The design employs two distinct chromatic correction zones:

In **G1** (the fixed group), the cemented doublet L14/L15 provides primary axial chromatic correction. The large Abbe number difference (Δνd = 31.1 between S-NPH1 and S-LAL8) creates an effective achromatic pair. The high-dispersion positive element L13 (S-NPH4, νd = 26.3) in the front subgroup provides an additional chromatic balancing contribution — its positive power in the diverging front section generates lateral chromatic aberration of the opposite sign to that produced by the negative meniscus pair (L11, L12), partially self-correcting G1A's lateral color.

In **G2** (the focus group), the negative element L22 (S-NBH52, νd = 34.5) is achromatized against L23 (S-PHM52, νd = 63.3) and L24 (S-FPL51, νd = 81.5). The patent's conditional expression (5) requires at least one of the third or fourth elements in G2 to have νd > 60; in this example, both satisfy the condition. This over-satisfaction ensures that G2's chromatic aberration of magnification is fully corrected internally, so that focus-dependent lateral color shift is minimized (¶0071, ¶0078).

**Glass family note.** The design makes extensive use of OHARA's niobium phosphate (NPH/NBH) glass families rather than the titanium-based (TIH) flints that might superficially appear to match based on similar refractive index ranges. Three of the four high-dispersion elements — L13 (S-NPH4), L14 (S-NPH1), and L22 (S-NBH52) — are niobium phosphate glasses. This is a deliberate design choice: NPH/NBH glasses offer different partial-dispersion characteristics compared to TIH glasses, which matters for controlling secondary chromatic aberration in a 10-element system operating over a 70° field. The lone exception is the ED element L24 (S-FPL51), which is a fluorophosphate — the preferred glass family for anomalous partial dispersion correction.

---

## 5. Focus Mechanism

**Type:** Rear focus (inner focus variant — G2 moves as a unit toward the object).
**Focus group:** G2 (L21–L24), 4 elements / 4 groups.
**Drive:** Motorized autofocus with manual override.

The second lens group G2 translates toward the object along the optical axis as the object distance decreases from infinity to the closest range. The flare-cut aperture fc2 travels with G2, maintaining a fixed 2.59 mm spacing between fc2 and L21's front surface at all focus positions.

| Parameter | Infinity | Close focus (0.6 m) |
|---|---|---|
| Gap: Stop → G2 (folded) | 12.40 mm | 6.52 mm |
| BFD | 64.97 mm | 70.85 mm |
| G2 travel | — | 5.88 mm (toward object) |

Gap conservation is satisfied: the sum of the two variable air gaps (stop-to-G2 plus BFD) remains constant at 77.37 mm across the entire focus range. The focus travel of 5.88 mm is small relative to the total track (3.4% of TL), which the patent identifies as a key design advantage (¶0070): the small travel prevents the focus group from interfering with the leaf shutter mechanism housed near the stop, and it limits aberration fluctuations during focus because the outgoing light flux from G1 is close to an afocal state (¶0069).

The patent's conditional expression (2) — 2.0 < f₁/f < 6.0 — directly controls this property. With f₁/f = 3.90, the first lens group has a relatively long focal length (195 mm) compared to the system EFL (50 mm), meaning G1's outgoing beam is only weakly converging. This near-afocal condition at the G2 input ensures that small axial translations of G2 produce focus changes with minimal aberration variation, which is the fundamental optical advantage of the rear-focus architecture described in the patent.

---

## 6. Conditional Expressions

The patent defines six conditional expressions in total; five apply to Example 4. Expression (6), which constrains f₅/f_{1a}, is specific to the second embodiment's front-group configuration (Example 5) and is not applicable here. The five applicable expressions govern the power balance, chromatic correction, and focus behavior of the design. Example 4 satisfies all of them.

| Expression | Formula | Range | Example 4 Value | Status |
|---|---|---|---|---|
| (1) | f_{1a}/f_{1b} | −1.25 to −0.75 | −0.983 | ✓ |
| (2) | f₁/f | 2.0 to 6.0 | 3.902 | ✓ |
| (3) | f_n/f_{1a} | 0.35 to 0.65 | 0.414 | ✓ |
| (4) | f₁/f₂ | 1.0 to 4.0 | 2.629 | ✓ |
| (5) | ν_{2-i} (i=3 or 4) | > 60 | 63.3 and 81.5 | ✓ (both) |

Expression (3) is the ratio of the negative meniscus pair's combined focal length to the front subgroup's focal length. The value of 0.414 (close to the lower bound of 0.35) indicates that the positive corrector L13 contributes a relatively large share of the power within G1A, giving this design a stronger distortion correction capability than examples with higher ratios.

Expression (4) — the ratio of G1's focal length to G2's focal length — equals 2.629, placing Example 4 in the mid-range. This indicates a balanced power split between the fixed and moving groups, ensuring that neither group carries an excessive aberration burden.

---

## 7. Petzval Sum and Field Curvature

The surface-by-surface Petzval sum, computed using the exact formula φ/(n·n′) at each interface, is:

$$\text{Petzval sum} = +0.0803 \text{ (normalized)}$$

This corresponds to a Petzval radius of 622 mm at production scale. The positive sign indicates backward-curving field (image surface curves toward the lens). For a 645-format medium-format sensor with a half-diagonal of ≈34.9 mm, the Petzval field sag at the corner is approximately:

$$\Delta z \approx \frac{h^2}{2 R_P} = \frac{34.9^2}{2 \times 622} \approx 0.98 \text{ mm}$$

This is a moderate value for a wide-angle retrofocus design, and the aberration plots in the patent (FIG. 16B) confirm that the astigmatism is well controlled at less than ±0.01 mm (normalized) across the field. The negative elements L16 (in G1B) and L22 (in G2), together with the ED element L24 at the rear, collectively flatten the field curvature against the inherent positive Petzval sum of the overall positive system.

---

## 8. Design Heritage and Context

The Hasselblad H system was launched in 2002 as a collaboration between Hasselblad (Sweden) and Fuji Photo Optical Co., Ltd. (Japan, now Fujifilm). Fuji Photo Optical designed and manufactured the HC lens line, which featured integral leaf shutters — a distinctive requirement that shaped every HC lens design. The space between the first and second lens groups in this patent (24.5 mm at production scale between L16's rear surface and L21's front) was explicitly designed to accommodate the shutter mechanism (¶0011, ¶0070).

The all-spherical, 10-element retrofocus architecture reflects the state of the art circa 2001 for medium-format wide-angle lenses. The patent does not include any aspherical surface table or coefficient listing for any of its five numerical examples — all 19 optical surfaces in Example 4 are spherical. By choosing high-quality OHARA glasses (including an ED fluorophosphate element in the critical rear position) and distributing the negative front power across two meniscus elements rather than concentrating it in a single strong negative, the designer achieved a well-corrected 70° field at f/3.5 without requiring aspherical departure. This suggests that the design prioritized manufacturability and cost control (spherical surfaces are substantially easier and cheaper to produce in volume than precision aspherics), accepting the higher element count as the trade-off. The aberration charts in the patent (FIGS. 16A–16D and FIGS. 17A–17G), plotted for the normalized f = 1.0 system, show spherical aberration within ±0.01 mm, distortion under −2%, and lateral chromatic aberration under ±0.001 mm. At the production focal length of 50 mm, the transverse aberrations scale proportionally — levels consistent with medium-format professional use where pixel pitches are typically 5–6 µm and diffraction-limited performance is not expected at full aperture.

The Mark II version of the lens (HC 50mm f/3.5 II, circa 2010) added an 11th element and reduced the group count to 7, which strongly suggests a redesign that incorporated additional cemented groups and may have included aspherical surfaces to improve performance while simplifying the optical train. That redesign is covered by a separate, later patent and is outside the scope of this analysis.

---

## 9. Verification Summary

Independent paraxial ray trace (ABCD matrix method) of the normalized patent prescription confirms:

| Parameter | Computed | Patent | Match |
|---|---|---|---|
| EFL | 1.0006 | 1.0 | ✓ |
| BFD | 1.2998 | 1.2993 | ✓ (Δ = 0.04%) |
| f_{1a}/f_{1b} | −0.983 | −0.98 | ✓ |
| f₁/f | 3.902 | 3.87 | ✓ |
| f_n/f_{1a} | 0.414 | 0.41 | ✓ |
| f₁/f₂ | 2.629 | 2.60 | ✓ |

Small differences between computed and patent-tabulated conditional values are consistent with the patent's use of rounded intermediate results. All values fall within the specified conditional expression ranges.

**Element focal lengths (independently verified at production scale):**

| Element | f (mm) | Note |
|---|---|---|
| L11 | −82.9 | |
| L12 | −65.2 | |
| L13 | +86.9 | |
| L14 | −145.9 | Standalone in-air value |
| L15 | +34.1 | Standalone in-air value |
| L14+L15 | +46.0 | Cemented doublet |
| L16 | −75.3 | |
| L21 | +74.9 | |
| L22 | −32.9 | |
| L23 | +75.6 | |
| L24 | +73.0 | |

---

## Sources

1. US 2003/0011895 A1, "Retrofocus Imaging Lens," Masao Mori / Fuji Photo Optical Co., Ltd. Published January 16, 2003.
2. Hasselblad HC 50mm f/3.5 product specification — KEH Camera: 10 elements / 9 groups, MFD 0.6 m, rear focus, 77 mm filter thread.
3. OHARA Optical Glass Pocket Catalog (current edition) — glass identification cross-reference for S-LAH53, S-NPH4, S-NPH1, S-LAL8, S-NSL36, S-LAH66, S-NBH52, S-PHM52, S-FPL51. All identifications verified against authoritative nd/νd catalog values (Δnd = 0, Δνd < 0.2 for all 10 elements).
