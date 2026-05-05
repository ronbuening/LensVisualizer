# Minolta MD Rokkor 50mm f/1.4 — Patent Analysis

## Patent Reference and Design Identification

**US Patent 4,182,550**, "Modified Gauss Type Lens System." Inventor: Tamikazu Yamaguchi. Assignee: Minolta Camera Kabushiki Kaisha, Osaka, Japan. Filed March 15, 1978; granted January 8, 1980. Japanese priority date: March 23, 1977 (JP 52-32728). A Certificate of Correction was issued July 15, 1980, correcting condition (5) from $N_3 < 1.67, N_4 < 1.67$ to $N_3 > 1.67, N_4 > 1.67$.

The prescription used here is **Embodiment 2** (Table 2), the f/1.4 variant. The patent discloses three embodiments: Embodiment 1 at f/1.2 with 2ω = 46°, Embodiment 2 at f/1.4 with 2ω = 46°, and Embodiment 3 at f/1.8 with 2ω = 52°. Embodiment 2 is identified as the design corresponding to the production Minolta MD 50mm f/1.4 lens based on the following convergent evidence:

1. **Element and group count.** The patent specifies 7 elements in 6 groups; the production MD 50mm f/1.4 (MD-I and later MD-III versions) is documented at 7 elements in 6 groups.
2. **Aperture.** Embodiment 2 specifies f/1.4, matching the production lens exactly.
3. **Field angle.** The patent specifies 2ω = 46°; the production lens covers a 46–47° field on 35mm film.
4. **Focal length.** At the patent's normalized $f = 100$, a ×0.5 scale yields $f ≈ 50$ mm, matching the production focal length.
5. **Close focus distance.** The production lens focuses to 0.45 m, consistent with the MD series that succeeded the MC Rokkor-PG (which focused to 0.55 m).
6. **Back focal distance.** The patent states $f_b' = 72.35$ (72.4% of focal length). At production scale this gives 36.2 mm, which is physically compatible with the Minolta SR mount's 43.5 mm flange distance — the last surface sits approximately 7.3 mm inside the barrel from the mount flange.
7. **Patent timing.** The Japanese priority date of March 1977 aligns with the transition from the MC Rokkor-PG series (1973–1977, 5-group design) to the redesigned MD series.

The earlier MC Rokkor-PG 50mm f/1.4 used a 7-element, 5-group optical formula — one fewer air-separated group. The patent text notes that the six-group, seven-element modified Gauss topology was already established in the prior art, citing nine or more existing designs of this type. What distinguishes this patent from its predecessors is not the 6-group topology itself, but rather the specific set of seven design conditions (detailed in the Aberration Correction Strategy section below) that enable an unusually long back focal distance — exceeding 70% of the focal length even at f/1.2 — while maintaining well-corrected aberrations. The patent states that this combination "is not disclosed by any of the lens system in the aforementioned prior art."

---

## Optical Architecture

The design is a **modified double-Gauss** of the classic six-group, seven-element type. The power distribution across the system is positive–positive–negative | stop | negative–positive–positive, with the central air gap $D_6$ dividing the system into front and rear halves around the aperture stop. All thirteen optical surfaces are spherical — the design employs no aspherical surfaces, conic constants, or non-spherical profiles of any kind. This is consistent with the late-1970s era: glass-molded and polished aspherics were not yet commonplace in standard-lens production at Minolta. Aberration correction relies entirely on classical means — radii and glass selection, air-gap structure, cemented doublet chromatic correction, and power balancing across the stop symmetry plane.

The six groups, from object to image, are:

- **Group 1 (L1):** Positive meniscus, convex to object. Front collector.
- **Group 2 (L2):** Positive meniscus, convex to object. Secondary converging element.
- **Group 3 (L3):** Negative meniscus, convex to object. Flare-control and Petzval-sum compensator.
- **Group 4 (L4 + L5):** Cemented doublet, meniscus shaped, concave to object. Chromatic correction and diverging power behind the stop.
- **Group 5 (L6):** Positive meniscus, concave to object. Field correction and positive relay power.
- **Group 6 (L7):** Biconvex positive. Rear collector providing residual positive power and field flattening.

The front half (Groups 1–3) converges the marginal ray through surfaces R1 to R6, reducing the beam diameter from the full entrance pupil to a waist near the stop. The rear half (Groups 4–6) initially diverges the beam at the doublet, then re-converges it through L6 and L7 to form the image at the focal plane. The patent emphasizes that the ratio of rear-half to front-half path lengths — condition (4): $0.85 < (D_7 + D_8 + D_9 + D_{10}) / (D_1 + D_2 + D_3 + D_4 + D_5) < 1.1$ — is critical to achieving the long back focal distance required for SLR mirror clearance.

The computed effective focal length is $f = 99.98$ mm (patent states $f = 100$), confirming the prescription's internal consistency. The back focal distance is $f_b' = 72.32$ mm (patent states 72.35), yielding a BFD/EFL ratio of 72.3% — exceeding the patent's stated goal of $> 70\%$ for an f/1.4 system and approaching the 80% target that the patent claims is achievable only at f/1.8. At production scale (×0.5), the total track from R1 to the image plane is 78.7 mm, with a construction length (R1 to R13) of 42.6 mm.

---

## Element-by-Element Analysis

All data below is at the patent's normalized focal length $f = 100$. Production values at $f ≈ 50$ mm are obtained by applying a uniform scale factor of ×0.5 to all linear dimensions (R, d, sd). Element focal lengths for standalone (air-spaced) elements are computed by the thick-lens formula. For the cemented elements L4 and L5, the focal lengths given below are computed within the cemented doublet context — using the glass-to-glass refraction at the junction surface R8 — which represents their actual optical contribution more accurately than a hypothetical standalone-in-air calculation. The data file uses the standalone-in-air convention for display purposes.

### L1 — Positive Meniscus, Convex to Object

$n_d = 1.7885$, $\nu_d = 45.7$. Glass: **LAC14 (OHARA)** — exact match ($\Delta n_d < 0.0001$, $\Delta \nu_d = 0.02$). $f = +122.6$ mm.

L1 is the front collector element. Its strong positive curvature at R1 ($+75.00$ mm) gathers the incoming beam and begins converging it toward the stop. The rear surface R2 ($+314.55$ mm) is only weakly curved, giving the element a steep meniscus shape (Coddington shape factor $q = 1.63$). The meniscus form is characteristic of fast Gauss-type designs: because both surfaces curve in the same direction, the angle of incidence at each surface is reduced compared to a biconvex element of equivalent power. This lower obliquity suppresses higher-order spherical aberration — a critical consideration at f/1.4 where marginal rays are steep. The glass choice — a high-index lanthanum crown ($n_d = 1.789$, $\nu_d = 45.7$) — keeps the surface curvatures moderate relative to the power required, further controlling spherical aberration.

In the patent's Embodiment 1 (f/1.2), this same glass is used at three positions — L1, L5, and L6 — but Embodiment 2 uses distinct glasses at each. LAC14 recurs at the L1 position across all three embodiments, suggesting it was a preferred front-collector glass in Minolta's standard-lens designs of this period.

### L2 — Positive Meniscus, Convex to Object

$n_d = 1.7650$, $\nu_d = 46.3$. Glass: exact match to **E-LAF7 / TAFD5F (HOYA)** ($n_d = 1.7650$, $\nu_d = 46.30$). No current OHARA catalog glass matches within tight tolerance; this may be a HOYA-sourced element or a discontinued OHARA melt in the lanthanum crown family. Confidence: exact match to HOYA catalog; vendor attribution uncertain. $f = +153.4$ mm.

L2 provides supplementary positive power, sharing the converging burden with L1 so that neither element is overworked. Its meniscus form is even steeper than L1's ($q = 4.47$), with R3 ($+48.50$ mm) and R4 ($+76.46$ mm) both strongly curved. The air gap between L1 and L2 ($D_2 = 0.3$ mm) is vanishingly thin — in practice they sit almost in contact, and the gap serves primarily as a manufacturing tolerance boundary rather than an optically active air space.

The air gap $D_4 = 4.2$ mm between L2 and L3 is the structural feature that distinguishes the 6-group topology from the earlier 5-group Gauss type. In the original Gauss design, the elements corresponding to L2 and L3 formed a cemented doublet. The patent describes how separating them into an air-spaced pair introduces a strongly curved air lens (the concave rear of L2 facing the convex front of L3) that generates negative refractive power in the gap. This negative power is essential for correcting off-axial flare — an inherent weakness of the Gauss design at large apertures. The patent constrains this power via condition (1): $-0.4 < (\Phi_4 + \Phi_5) \cdot f < -0.24$. For Embodiment 2 this evaluates to $-0.337$, comfortably within the specified range.

### L3 — Negative Meniscus, Convex to Object

$n_d = 1.7006$, $\nu_d = 30.1$. Glass: nearest catalog match is **S-TIM35 (OHARA)** ($n_d = 1.69895$, $\nu_d = 30.13$; $\Delta n_d = 0.0017$). The residual suggests a possible proprietary melt or a variant glass code in the 700/301 family. Confidence: near match (OHARA titanium flint family). $f = -62.2$ mm.

L3 is the sole negative element in the front group and the primary Petzval-sum compensator ahead of the stop. Its concave rear surface R6 ($+30.38$ mm, steeply curved toward the axis) carries the most powerful negative refraction in the front half ($\Phi_6 = -0.02306$), closely matched in magnitude only by R7 ($\Phi_7 = -0.02324$) on the other side of the stop. This surface does heavy lifting in two ways: it bends the converging beam strongly, generating negative Petzval contribution to offset the positive Petzval from L1 and L2; and it introduces the controlled negative power that the patent's condition (1) constrains.

The glass choice — a titanium flint with high dispersion ($\nu_d = 30.1$) — is dictated by condition (6): $\nu_4 < \nu_3$. The relatively high dispersion of L3 works in concert with L4 (which has even higher dispersion, $\nu_d = 27.5$) to manage lateral chromatic aberration. The patent requires both L3 and L4 to have $n_d > 1.67$ (corrected condition 5), which keeps the Petzval sum under control even while these elements carry strong negative power.

### L4 — Biconcave Negative (cemented front element of doublet)

$n_d = 1.7552$, $\nu_d = 27.5$. Glass: **S-TIH4 (OHARA)** — exact match ($\Delta n_d < 0.0001$, $\Delta \nu_d = 0.01$). Equivalent: SF4 (Schott). $f = -43.0$ mm (L4 within cemented doublet, surfaces R7–R8).

L4 is the negative sub-element of the cemented doublet (Group 4) and carries the strongest negative power in the entire system. Its front surface R7 ($-32.49$ mm) faces the stop and is the most steeply curved surface on the image side. The rear surface R8 ($+800.0$ mm) is nearly flat — the junction with L5 is essentially a planar cemented interface. This nearly plano-concave shape concentrates virtually all of L4's refractive power at R7.

The glass is a dense flint (S-TIH4) with the lowest Abbe number in the system ($\nu_d = 27.5$), making it the most dispersive element. The patent's condition (7), $-0.1 < f/R_8 < 0.2$, constrains the junction radius to be nearly flat (here $f/R_8 = 0.125$), ensuring that the chromatic correction at the cemented interface is appropriately balanced — the junction surface contributes negligible power ($\Phi_8 = -0.000014$), so virtually all the achromatization occurs through the power difference between R7 and R9 acting on different dispersions.

### L5 — Biconvex Positive (cemented rear element of doublet)

$n_d = 1.7440$, $\nu_d = 45.0$. Glass: **S-LAM2 (OHARA)** — close match ($n_d$ exact, $\Delta \nu_d = 0.21$). Equivalent: LaF2 / LaFN2 (Schott). $f = +75.7$ mm (L5 within cemented doublet).

L5 is the positive sub-element of the cemented doublet. Its nearly flat front (junction at R8) and strongly concave rear surface R9 ($-56.32$ mm) give it a nearly plano-convex shape. The glass is a lanthanum flint ($\nu_d = 45.0$), significantly less dispersive than L4's S-TIH4, and this Abbe-number difference ($\Delta \nu_d = 17.5$) provides the chromatic correction at the doublet level.

The cemented doublet as a whole has a focal length of $f = -131.8$ mm — it is a **net-negative achromatic doublet**. This is unusual compared to the positive achromatic doublets common in telescopes. In a Gauss-type design, the rear group needs to contribute diverging power to extend the back focal distance (for SLR mirror clearance). By making the doublet net-negative, Yamaguchi simultaneously achieves chromatic correction and the power distribution required for the long BFD. The relatively thick center of L5 ($D_8 = 11.2$ mm) is notable and contributes to the physical separation of the diverging rear surfaces from the converging front surfaces — condition (4) governs this balance.

### L6 — Positive Meniscus, Concave to Object

$n_d = 1.7810$, $\nu_d = 44.5$. Glass: nearest catalog match is **S-NBH55 (OHARA)** ($n_d = 1.78000$, $\nu_d = 43.95$; $\Delta n_d = 0.001$, $\Delta \nu_d = 0.55$). This may be a proprietary Minolta melt or a discontinued glass in the lanthanum crown/flint borderland. Confidence: near match, 781/445 family. $f = +95.5$ mm.

L6 is the principal positive element of the rear group. Both surfaces are concave toward the object (R10 = $-232.68$ mm, R11 = $-57.45$ mm), forming a meniscus that curves around the diverging beam exiting the doublet. R11 carries strong positive refractive power ($\Phi_{11} = +0.01359$) and is the primary surface responsible for re-converging the beam toward the image plane.

The patent's conditions (2) and (3) constrain the power balance between the positive surfaces R9 and R11 and their respective negative counterparts. For condition (3): $(\Phi_9 + \Phi_{11}) / \Phi_7 = -1.153$, within the range $-1.21$ to $-1.13$. This ratio ensures that the rear group does not over-correct coma and distortion while maintaining adequate back focal distance.

### L7 — Biconvex Positive

$n_d = 1.7200$, $\nu_d = 50.2$. Glass: **S-LAL10 (OHARA)** — exact match ($\Delta n_d < 0.0001$, $\Delta \nu_d = 0.03$). Equivalent: LAC10 (HOYA), N-LAK10 (Schott). $f = +170.7$ mm.

L7 is the final element, a weakly biconvex lens ($R_{12} = +482.00$ mm, $R_{13} = -164.25$ mm). Its power is the weakest of all elements, contributing gentle positive correction as the beam exits the system. The weak front curvature and stronger rear curvature ($q = -0.49$) distribute the residual bending to minimize higher-order aberrations at the image plane.

The glass is a lanthanum crown (S-LAL10) with the highest Abbe number in the system ($\nu_d = 50.2$), making it the least dispersive element. This choice minimizes the chromatic aberration introduced by the final element, where any residual dispersion would directly affect the image quality without further opportunity for correction downstream.

---

## Glass Identification and Selection

The design uses seven distinct glasses spanning the lanthanum crown, lanthanum flint, and titanium flint families. All are high-index types ($n_d > 1.70$), a choice driven by the need to control the Petzval sum while maintaining strong surface powers at f/1.4.

| Element | $n_d$ | $\nu_d$ | Catalog Match | Confidence | Role |
|---------|-------|---------|---------------|------------|------|
| L1 | 1.7885 | 45.7 | LAC14 (OHARA) | Exact | Lanthanum crown; front collector |
| L2 | 1.7650 | 46.3 | E-LAF7 / TAFD5F (HOYA) | Exact | Lanthanum crown; secondary converter |
| L3 | 1.7006 | 30.1 | S-TIM35 class (OHARA) | Near ($\Delta n_d = 0.0017$) | Titanium flint; Petzval corrector |
| L4 | 1.7552 | 27.5 | S-TIH4 (OHARA) | Exact | Dense titanium flint; doublet flint |
| L5 | 1.7440 | 45.0 | S-LAM2 (OHARA) | Close ($\Delta \nu_d = 0.21$) | Lanthanum flint; doublet crown |
| L6 | 1.7810 | 44.5 | S-NBH55 class (OHARA) | Near ($\Delta n_d = 0.001$) | Lanthanum crown; rear relay |
| L7 | 1.7200 | 50.2 | S-LAL10 (OHARA) | Exact | Lanthanum crown; rear collector |

The chromatic strategy is straightforward: no ED or anomalous-dispersion glasses are used. Correction is achieved through the Abbe-number spread between the low-dispersion crowns ($\nu_d = 45$–$50$) and the high-dispersion flints ($\nu_d = 27$–$30$). The cemented doublet (L4 + L5) provides the primary achromatization, while the Abbe-number ordering across the front group (L1 at $\nu_d = 45.7$, L2 at $\nu_d = 46.3$, L3 at $\nu_d = 30.1$) manages lateral chromatic aberration as constrained by condition (6).

Two glasses — L3 ($n_d = 1.7006$) and L6 ($n_d = 1.7810$) — do not match any current OHARA catalog entry within tight tolerance. These may represent discontinued melts, proprietary Minolta formulations, or intermediate catalog codes from the 1970s OHARA range. Both are identified to their glass family with reasonable confidence, and the discrepancies are small enough to have negligible effect on chromatic modeling.

The Petzval sum of the complete system is $\Sigma = 0.001577$ mm$^{-1}$ (using the standard formula $\Sigma = \sum (n'_i - n_i) / (R_i \cdot n_i \cdot n'_i)$), yielding a Petzval radius of approximately 634 mm, or about 6.3× the focal length. This is a well-corrected value for a fast normal lens and reflects the benefit of using exclusively high-index glasses ($n_d > 1.70$) throughout the design.

---

## Focus Mechanism

The patent provides prescription data only at infinite conjugate. No close-focus variable-spacing tables, floating-element descriptions, or intermediate focus positions are given. Combined with the production lens's mechanical design — a helicoid barrel with the entire optical group translating as a unit — the focus mechanism is **unit focus**: the complete 7-element optical assembly moves forward to focus at closer distances, and only the back focal distance changes.

The production Minolta MD 50mm f/1.4 focuses to a minimum distance of 0.45 m (1.5 ft). This is an improvement over the earlier MC Rokkor-PG's 0.55 m minimum focus distance. At 0.45 m the reproduction ratio is approximately 1:8. No floating elements or differential focus groups are employed, which is consistent with the era — floating-element designs in standard lenses did not become widespread until the 1990s.

The data file models this as a single variable gap on the last surface (BFD): 36.18 mm at infinity, increasing to approximately 42.42 mm at 0.45 m close focus. The close-focus BFD is estimated from the thin-lens approximation ($\Delta = f^2 / (s - f)$ where $s = 450$ mm).

The absence of close-focus data in the patent is typical of 1970s normal-lens patents that emphasize the optical system geometry rather than the focusing mechanism. Performance degradation at close range due to uncorrected aberration changes (particularly spherical aberration and field curvature) is accepted as a design trade-off in unit-focus systems of this era.

---

## Aberration Correction Strategy

The patent's seven design conditions define the aberration-correction framework:

**Condition (1): $-0.4 < (\Phi_4 + \Phi_5) \cdot f < -0.24$. Evaluated: $-0.337$.**
Controls the negative refractive power of the air gap $D_4$ between L2 and L3. This gap — the defining structural feature of the six-group topology — generates the negative power that suppresses off-axial flare. Too much negative power (below $-0.4$) overcorrects the Petzval sum and degrades field curvature. Too little (above $-0.24$) fails to suppress the flare.

**Conditions (2) and (3): power ratios across the stop. Evaluated: $-1.140$ and $-1.153$.**
These balance the positive and negative surface powers within each half of the system. Condition (2) governs the front group (R1, R3 vs. R6); condition (3) governs the rear group (R9, R11 vs. R7). Both constrain coma and distortion while preserving the back focal distance.

**Condition (4): $0.85 < (D_7 + D_8 + D_9 + D_{10}) / (D_1 + D_2 + D_3 + D_4 + D_5) < 1.1$. Evaluated: $0.870$.**
This is a geometric constraint on the path-length ratio. The rear diverging path must be long enough relative to the front converging path to achieve adequate back focal distance for SLR mirror clearance. The value of 0.870 is near the lower bound, reflecting the design tension between compact size and sufficient BFD at f/1.4.

**Condition (5): $N_3 > 1.67$, $N_4 > 1.67$ (corrected). Satisfied: $1.7006$ and $1.7552$.**
High-index glasses at the negative elements L3 and L4 are required to control spherical aberration and off-axial flare while extending the BFD.

**Condition (6): $\nu_4 < \nu_3$. Satisfied: $27.5 < 30.1$.**
Corrects lateral chromatic aberration by ensuring the doublet's flint element (L4) is more dispersive than the adjacent negative meniscus (L3).

**Condition (7): $-0.1 < f/R_8 < 0.2$. Evaluated: $0.125$.**
Constrains the cemented junction radius to be nearly flat, managing short-wavelength aberrations (particularly g-line spherical aberration). Violation of this condition introduces aberrations for both axial and off-axial pencils at shorter wavelengths.

The aberration plots published in the patent (FIGS. 4a–4d for Embodiment 2) show well-corrected spherical aberration with moderate zonal residual at full aperture (typical of f/1.4 Gauss designs), astigmatism contained within ±0.5 mm across the 23° half-field, distortion under 2%, and lateral chromatic aberration (lateral color) within ±0.2 mm at the field edge.

---

## Design Heritage and Context

The six-group, seven-element modified Gauss type was well established by the late 1970s. The patent cites at least nine prior-art designs of this exact topology, including US patents by Marquardt (3,552,829), Shimizu (3,738,736), and Nakagawa (4,094,588), as well as German and Japanese publications. The patent's general description explains that the 6-group form derives from the original Gauss design by splitting the second cemented element into an air-spaced pair, creating the flare-control gap $D_4$ — a technique that the patent characterizes as already "known in the prior art."

What the patent claims as novel is the specific parametric framework — seven design conditions governing surface-power ratios, refractive indices, spacing proportions, and Abbe-number ordering — that together enable a back focal distance greater than 70% of the focal length at f/1.2 and approximately 80% at f/1.8, while maintaining acceptable aberration correction across a 46–52° field. The patent states this combination is "not disclosed by any of the lens system in the aforementioned prior art." In essence, the novelty lies not in the architecture but in the balance: Yamaguchi found a region of the parameter space where the long BFD demanded by SLR mirror clearance coexists with well-corrected spherical aberration, flare, and field curvature at extreme apertures.

Within Minolta's own product lineage, the transition from the MC Rokkor-PG (7 elements, 5 groups, introduced 1973) to the MD series (7 elements, 6 groups, introduced circa 1977) adopted the 6-group topology. Whether the MC Rokkor-PG's 5-group formula derived from a Minolta in-house design or a different patent is not established in this document. The MC Rokkor-PG had a minimum focus distance of 0.55 m and a 55 mm filter thread; the MD series improved the MFD to 0.45 m. All MD variants — MD-I (55 mm filter), MD-II, and MD-III/New MD (49 mm filter, lighter construction) — share the same 7-element, 6-group optical formula described in this patent.

---

## Verification Summary

The prescription was independently verified by ABCD-matrix paraxial ray trace in Python. All values below are at the patent's normalized $f = 100$ unless noted.

- **EFL:** Computed 99.98 mm (patent: 100). Match within 0.02%.
- **BFD:** Patent states $f_b' = 72.35$ mm. Ray trace with the tabulated BFD gives a residual image height of $y_{img} = -0.010$ mm, confirming focus. The exact paraxial BFD is 72.32 mm — the 0.03 mm discrepancy is within normal rounding tolerance of the patent's tabulation.
- **Condition (1):** $(\Phi_4 + \Phi_5) \cdot f = -0.337$. Within bounds $[-0.40, -0.24]$.
- **Condition (4):** $(D_7 + D_8 + D_9 + D_{10}) / (D_1 + D_2 + D_3 + D_4 + D_5) = 0.870$. Within bounds $[0.85, 1.10]$.
- **Condition (7):** $f / R_8 = 0.125$. Within bounds $[-0.10, 0.20]$.
- **Petzval sum:** $\Sigma = 0.001577$ mm$^{-1}$ → Petzval radius 634 mm (6.3× EFL).
- **Element focal lengths:** L1 = +122.6, L2 = +153.4, L3 = −62.2, L4 = −43.0 (cemented context), L5 = +75.7 (cemented context), L6 = +95.5, L7 = +170.7 mm. Doublet L4+L5 combined = −131.8 mm.

---

## Semi-Diameter Estimation Notes

The patent does not provide semi-diameter (clear aperture) values. The values used in the accompanying data file were estimated by paraxial marginal and chief ray tracing through the full Embodiment 2 prescription.

The marginal ray was launched at the entrance pupil semi-diameter of 35.71 mm ($= f / (2 \times 1.4) = 99.98 / 2.8$) and traced through all surfaces to determine the axial beam envelope. The chief ray was launched from the full half-field angle (23°) and constrained to pass through the center of the aperture stop. Semi-diameters were computed as the marginal ray height plus 50% of the chief ray height (allowing approximately 50% vignetting at the full-field edge — typical for a fast f/1.4 normal lens at maximum aperture), with 3% mechanical clearance added.

All estimated semi-diameters were verified against four constraints: sd/|R| < 0.88 for all surfaces (well within the 0.90 spherical limit, providing margin), positive edge thickness ≥ 0.3 mm at each element, cross-gap sag intrusion ≤ 90% of the air gap, and element front-to-rear SD ratio ≤ 1.25. Three surfaces required capping at their sd/|R| limits: R3 (L2 front, 0.83), R6 (L3 rear, 0.88), and R7 (L4 front, 0.78). R7 is further capped at 12.75 mm by the full S6→S7 central air-lens clearance across the stop gap, keeping the two strongly curved facing surfaces inside the renderer's 90% intrusion threshold. The most constrained elements by edge thickness are L1 (0.45 mm at the rim) and L7 (0.33 mm).

At production scale (×0.5), the front element semi-diameter is 21.8 mm (43.6 mm diameter), which is comfortably within both the 55 mm filter thread of the MD-I/MD Rokkor and the 49 mm filter thread of the later MD-III.

**Stop position.** The patent does not specify the aperture stop as a separate surface. It was placed 14 mm (patent scale) into the 29.3 mm air gap $D_6$ between L3 rear and L4 front, estimated from the Fig. 2 cross-section iris placement. This splits $D_6$ into 14.0 + 15.3 mm (patent), or 7.0 + 7.65 mm at production scale.

---

## Sources

1. US Patent 4,182,550, "Modified Gauss Type Lens System," T. Yamaguchi, Minolta Camera Kabushiki Kaisha, granted January 8, 1980; Certificate of Correction issued July 15, 1980.
2. Kamerastore product database: Minolta 50mm f/1.4 MD (7 elements, 6 groups); Minolta 50mm f/1.4 MC Rokkor-PG (7 elements, 5 groups).
3. Phillip Reeve, "Minolta MD Rokkor 50mm 1:1.4" review, phillipreeve.net — production specifications, MFD (0.45 m), and variant identification.
4. Black Market Camera product listing, MC Rokkor-PG 50mm f/1.4 specification sheet — MFD 0.55 m, 7 elements / 5 groups.
5. OHARA glass catalog (current edition) for glass identification cross-reference.
6. HOYA glass catalog — cross-reference for L2 glass identification (E-LAF7 / TAFD5F).
