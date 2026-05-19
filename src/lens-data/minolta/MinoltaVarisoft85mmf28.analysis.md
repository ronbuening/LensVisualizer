# Minolta Varisoft Rokkor 85mm f/2.8 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 4,124,276, "Soft Focus Lens System," granted November 7, 1978.
**Assignee:** Minolta Camera Kabushiki Kaisha, Japan.
**Inventors:** Yukio Okano, Akiyoshi Nakamura, Toshinobu Ogura.
**Filed:** December 15, 1976. **Priority:** JP 50/154540 (December 22, 1975), JP 51/109281 (September 10, 1976).
**Embodiment analyzed:** Embodiment 3 (Table 6, FIG. 8).

A second related patent, US 4,214,814A (Ogino, Ogura, Okano, Nakamura, 1977), covers an alternative variable soft focus mechanism using the same optical concept. Minolta marketing literature and a published lens diagram confirm that the production Varisoft Rokkor is based on the first patent, with the rearmost element moved to control spherical aberration.

The identification of Embodiment 3 as the production basis rests on the following convergent evidence:

1. **Element and group count.** Embodiment 3 has 6 elements in 5 groups, matching the manufacturer specification (6 elements, 5 groups).
2. **Focal length.** The patent prescription is normalized to $f = 100$ mm. Scaling by 0.85 yields the production 85 mm focal length.
3. **Maximum aperture.** $F/2.8$, matching the manufacturer specification.
4. **Field angle.** $2\omega = 28°$, corresponding to a diagonal image height of $\approx 21.2$ mm at $f = 85$ mm — consistent with the 35 mm format half-diagonal of 21.63 mm.
5. **Focus mechanism.** Embodiment 3 uniquely divides the front group into sub-groups AI and AII with an internal focus gap ($d_{A7}$), matching the patent's description of a design where focus is maintained during soft-focus adjustment. The production lens has two independent control rings (focus and soft-focus) consistent with this two-variable-gap architecture.
6. **Soft focus control mechanism.** The patent text explicitly states that in Embodiment 3, the air space $d_{A7}$ is used for focusing (sub-group AI moves), while $d_{B0}$ is varied for soft-focus control — matching the production lens's four-position click-stopped softness ring that moves the rearmost element.

## Optical Architecture

The Minolta Varisoft 85mm f/2.8 is a modified Tessar-type design with a rear divergent soft-focus control group, arranged as positive–negative–(stop)–positive cemented doublet | positive meniscus | negative meniscus across three mechanical groups.

The system divides into three groups:

**Group AI** (front, moves forward independently for focusing; moves with AII as a unit during soft-focus operation): Contains four elements in three air-separated units — a strong positive singlet (L1), a biconcave negative singlet (L2), and a cemented positive doublet (L3 + L4). The aperture stop lies in the air gap between L2 and the doublet (7.39 mm at patent scale). The patent does not specify the exact stop position within this gap; for the data file, the stop is placed at 54% of the gap from L2's rear surface, a position constrained by the cross-gap sag intrusion limit against L2's strongly curved rear surface ($r_4 = +35.967$, which bulges toward the stop). This group carries the majority of the system's refracting power and is responsible for primary aberration correction at the "sharp" ($\#0$) setting. Its optical construction is a classic Tessar arrangement: a front positive collector, a biconcave negative disperser adjacent to the stop, and a rear cemented doublet that provides achromatization and field flattening.

**Group AII** (middle, stationary during focusing; moves with AI as a unit during soft-focus adjustment): A single positive meniscus element (L5), concave toward the object. This element sits in the converging beam between the stop and the image and acts as a field-flattening relay. The meniscus-shaped air gap between AI and AII ($d_{A7}$) is the focusing variable; it widens as the lens focuses closer because Group AI advances toward the object while AII and Group B remain fixed. During soft-focus adjustment, $d_{A7}$ is held constant — AII moves with AI so the internal spacing of Group A does not change.

**Group B** (rear, moves for soft-focus control): A single negative meniscus element (L6), also concave toward the object. The meniscus-shaped air gap between AII and B ($d_{B0}$) is the soft-focus control variable. As $d_{B0}$ is increased from its "sharp" value (2.44 at $f = 100$ scale), the height at which the converging marginal ray strikes L6's front surface decreases, altering the balance of third- and fifth-order spherical aberration while leaving astigmatism, coma, and distortion substantially unchanged.

The total prescription (at patent scale $f = 100$) spans a total optical track of 56.04 mm from the first lens vertex to the last, with a computed effective focal length of 100.00 mm and a back focal distance of $\approx 75.8$ mm. At production scale ($\times 0.85$), the total track is $\approx 47.6$ mm.

## Element-by-Element Analysis

### L1 — Strong Positive Singlet (Group AI, front collector)

$n_d = 1.7495$, $\nu_d = 50.1$. Glass: 749501 lanthanum crown, likely proprietary Minolta melt. $f \approx +66.6$ mm (patent scale), $\approx +56.6$ mm production.

Surfaces: $r_1 = +47.717$ (strongly convex to object), $r_2 = +995.518$ (nearly flat). Center thickness: 8.64 mm. Shape: nearly plano-convex, convex to object.

L1 is the primary positive power source and entrance collector. Its strongly curved front surface gathers the incoming marginal ray bundle. The nearly flat rear surface minimizes surface contributions to coma while keeping the element's manufacturing complexity low. The high-index ($n_d = 1.7495$) lanthanum crown glass reduces the surface curvatures required for a given power, lowering both monochromatic and chromatic aberration contributions. As the fastest positive element in the system, L1 is the dominant contributor of under-corrected spherical aberration — the same aberration the lens is designed to manipulate.

### L2 — Biconcave Negative (Group AI, disperser)

$n_d = 1.6398$, $\nu_d = 34.7$. Glass: S-TIM27 (OHARA) or equivalent titanium flint. $f \approx -37.0$ mm (patent scale), $\approx -31.4$ mm production.

Surfaces: $r_3 = -71.607$, $r_4 = +35.967$. Center thickness: 3.22 mm. Shape: biconcave.

L2 acts as the Tessar's negative dispersing element, positioned immediately before the aperture stop. Its relatively high-dispersion flint glass ($\nu_d = 34.7$) pairs chromatically with L1's crown: the negative power of L2 at high dispersion partially corrects the longitudinal chromatic aberration introduced by L1's positive power at lower dispersion. The biconcave shape distributes the negative power across two strongly curved surfaces, which helps control higher-order spherical aberration and coma. The front surface ($r_3 = -71.607$) faces the converging beam from L1, while the strongly curved rear surface ($r_4 = +35.967$) is concave toward the stop — a configuration that contributes to the Petzval sum correction and assists in flattening the field.

### Cemented Doublet L3 + L4 (Group AI, achromatizing relay)

Combined doublet: $f \approx +53.7$ mm (patent scale), $\approx +45.6$ mm production. The doublet provides the second major positive power concentration in the system and is the primary achromatizing component behind the stop.

#### L3 — Weak Negative Meniscus (front element of doublet)

$n_d = 1.54072$, $\nu_d = 46.8$. Glass: 541468 light flint, probable Minolta proprietary melt. No exact coefficient-backed match was found in public OHARA, Schott, HOYA, HIKARI, CDGM, or refractiveindex.info catalog searches. In any event, the glass is a low-index, moderate-dispersion light flint.

Surfaces: $r_5 = +650.716$ (nearly flat front), $r_6 = +35.711$ (junction with L4). Center thickness: 2.53 mm. Shape: meniscus, convex to object, thin.

In isolation (removed from the doublet), L3 would be a moderate negative element ($f \approx -70$ mm at patent scale, $\approx -60$ mm production). Within the cemented pair, however, the junction surface sees a glass-to-glass transition rather than glass-to-air, and L3's in-context focal length becomes weakly positive ($f \approx +145$ mm production). L3's role is to contribute negative chromatic dispersion at the junction surface ($r_6$), where the transition from L3's lower-index light flint to L4's higher-index lanthanum crown creates a converging (positive) surface power of $(1.72 - 1.54072) / 35.711 \approx +0.00502$ mm$^{-1}$. The light flint's moderate $\nu_d$ provides the Abbe-number differential needed for achromatization within the doublet.

#### L4 — Strong Positive Crown (rear element of doublet)

$n_d = 1.72$, $\nu_d = 52.1$. Glass: lanthanum crown, nearest catalog match is Schott LaK10 ($n_d = 1.72000$, $\nu_d = 50.41$) or OHARA S-LAL10/S-LAL54 ($n_d = 1.72000$, $\nu_d = 50.23$). The $\nu_d$ discrepancy of $\approx 1.7{-}1.9$ units suggests either a Minolta proprietary melt or a production variant not represented in modern catalogs. Confidence: class-level (720/521 code).

Surfaces: $r_6 = +35.711$ (junction with L3), $r_7 = -54.216$ (rear, convex to image). Center thickness: 10.69 mm. Shape: biconvex, strongly positive.

L4 is the thickest and most powerful element behind the stop. Its biconvex shape and high-index lanthanum crown glass make it the dominant source of positive power in the rear half of Group AI. The thick center section (10.69 mm at $f = 100$) is characteristic of Tessar-type designs where the cemented doublet must carry substantial power while maintaining chromatic correction. L4's rear surface ($r_7 = -54.216$) is the last surface of Group AI and forms one boundary of the focusing meniscus air space $d_{A7}$. This surface is concave toward the diaphragm — a patent-mandated condition (¶ Column 8, lines 45–55) that ensures focusing via $d_{A7}$ variation introduces minimal off-axis aberration change.

### L5 — Positive Meniscus (Group AII, field relay)

$n_d = 1.6968$, $\nu_d = 55.5$. Glass: S-LAL14 (OHARA) — confirmed. Exact match: $n_d = 1.69680$, $\nu_d = 55.53$ ($\Delta n_d = 0.00000$, $\Delta\nu_d = +0.03$). Cross-references: N-LAK14 (Schott), LAC14 (HOYA). $f \approx +143.1$ mm (patent scale), $\approx +121.7$ mm production.

Surfaces: $r_8 = -49.647$, $r_9 = -34.730$. Center thickness: 5.78 mm. Shape: positive meniscus, concave toward the object.

L5 is the sole element of Group AII. Its meniscus form — both surfaces concave to the object, with the rear surface more strongly curved — acts as a weak positive relay that bends the converging beam toward the image while contributing to Petzval sum correction. The surface $r_8 = -49.647$ forms the image-side boundary of the focusing air space $d_{A7}$, and is concave toward the diaphragm as required by the patent's design principle. Surface $r_9 = -34.730$ forms the object-side boundary of the soft-focus control air space $d_{B0}$.

L5 is mechanically stationary during focusing — it does not move relative to L6 or the image-side reference. L5 serves as the fixed pivot point around which the two variable air spaces operate.

### L6 — Negative Meniscus (Group B, soft-focus control)

$n_d = 1.57616$, $\nu_d = 41.4$. Glass: 576414 light flint, probable Minolta proprietary melt. No exact coefficient-backed public catalog match was found in the 2026-05-19 audit. $f \approx -166.8$ mm (patent scale), $\approx -141.8$ mm production.

Surfaces: $r_{10} = -31.559$, $r_{11} = -48.743$. Center thickness: 3.22 mm. Shape: negative meniscus, concave toward the object.

L6 is the optical heart of the variable soft-focus mechanism. Its front surface ($r_{10} = -31.559$) is the more strongly curved of the pair and is concave toward the diaphragm, forming the second boundary of the meniscus air space $d_{B0}$ together with L5's rear surface ($r_9$). As detailed in the patent's aberration coefficient tables (Tables 2–4 for the analogous Embodiment 1), the surfaces bounding this meniscus air space carry very large (and opposite-sign) third-degree spherical aberration coefficients, while their contributions to coma, astigmatism, and distortion are much smaller. When $d_{B0}$ is varied, the height of the marginal ray striking $r_{10}$ changes, modifying the balance of low-order and high-order spherical aberration. This is the fundamental mechanism by which the Varisoft lens shifts between a corrected ("sharp") state and a soft-focus state while keeping astigmatism, Petzval sum, and coma essentially constant.

The patent demonstrates (Column 6, lines 5–35) that widening $d_{B0}$ produces under-corrected spherical aberration, while narrowing it produces over-corrected spherical aberration.

## Glass Identification and Selection

The prescription uses six distinct glasses. Minolta was one of the few camera manufacturers to produce its own optical glass (in addition to sourcing from OHARA and other vendors), and several of the glass types in this design appear to be Minolta proprietary melts with no exact match in publicly available catalogs.

| Element | $n_d$ | $\nu_d$ | Identification | Confidence | Role |
|---------|-------|--------|----------------|------------|------|
| L1 | 1.7495 | 50.1 | 749501 proprietary lanthanum crown | Class | Front positive collector — high index reduces curvature |
| L2 | 1.6398 | 34.7 | S-TIM27 (OHARA) or equivalent | Confirmed ($\Delta n_d = 0.000$, $\Delta\nu_d = 0.27$) | Biconcave flint — chromatic correction partner for L1 |
| L3 | 1.54072 | 46.8 | 541468 proprietary light flint | Class | Doublet front — Abbe differential for achromatization |
| L4 | 1.72 | 52.1 | Lanthanum crown, LaK10 family (720/521) | Class (Δνd ≈ 1.7–1.9 from Schott/OHARA) | Doublet rear — primary positive power behind stop |
| L5 | 1.6968 | 55.5 | S-LAL14 (OHARA) | Confirmed ($\Delta n_d = 0$, $\Delta\nu_d = 0.03$) | Stationary field relay meniscus |
| L6 | 1.57616 | 41.4 | 576414 proprietary light flint | Class | Soft-focus control — low index keeps higher-order SA controllable |

The chromatic correction strategy pairs a high-$\nu_d$ crown (L1, L4, L5) against moderate-$\nu_d$ flints (L2, L3, L6). The two confirmed catalog glasses — S-TIM27 for L2 and S-LAL14 for L5 — are both standard OHARA production glasses that were widely available in the 1970s. The remaining four glasses are likely Minolta in-house melts, consistent with the company's well-documented practice of producing its own optical glass.

The choice of a low-index light flint ($n_d = 1.57616$) for L6 is optically motivated: a low-index glass produces smaller surface contributions to higher-degree spherical aberration per unit of curvature, giving the designer finer control over the balance between third-order and fifth-order spherical aberration — the exact balance that the patent claims is critical for producing a soft-focus image with a sharp core and a controlled peripheral halo rather than an undifferentiated blur.

## Focus Mechanism

Focus type: **inner focus** via Group AI axial translation.

- **Focusing group:** Sub-group AI (elements L1 through L4) moves forward along the optical axis as a unit, driven by the lens barrel's helicoid.
- **Stationary during focusing:** Sub-group AII (L5) and Group B (L6) do not move relative to each other or to the image-side reference.
- **Focus variable gap:** $d_{A7}$ (between $r_7$ and $r_8$), the meniscus-shaped air space between AI and AII, widens as the lens focuses closer. The patent mechanism and FIG. 28 describe AI alone shifting forward for focus; the back focal distance is therefore held fixed in the visualization.

| Condition | $d_{A7}$ (patent) | $d_{A7}$ (production) | BFD (patent) | BFD (production) |
|-----------|:---:|:---:|:---:|:---:|
| Infinity focus | 2.76 mm | 2.35 mm | 75.80 mm | 64.43 mm |
| Close focus ($\beta \approx -0.11$) | 13.45 mm | 11.43 mm | 75.80 mm | 64.43 mm |

The focus travel of $d_{A7}$ is substantial ($\approx 10.7$ mm at patent scale, $\approx 9.1$ mm production) and represents a significant forward shift of the heavy four-element front group. The patent text (Column 8, line 60 through Column 9, line 5) states that the two surfaces defining this meniscus air space — $r_7 = -54.216$ (rear of L4) and $r_8 = -49.647$ (front of L5) — are both concave toward the diaphragm. This geometric condition minimizes the variation in off-axis aberrations during focusing, because the symmetry of the meniscus air space about the stop position partially cancels the coma and astigmatism changes that would otherwise accompany a large shift of the front group.

The close-focus distance of 0.8 m (manufacturer specification) corresponds to $\beta \approx -0.11$ at $f = 85$ mm, consistent with the patent's test condition for FIGS. 10a and 10b.

## Soft Focus Control Mechanism

Soft focus is controlled by varying the meniscus-shaped air gap $d_{B0}$ between Group AII and Group B. The production lens has a four-position click-stopped control ring:

| Setting | Effect |
|---------|--------|
| **0** | Spherical aberration corrected — sharp, normal telephoto |
| **1** | Mild soft focus |
| **2** | Moderate soft focus |
| **3** | Maximum soft focus |

The patent (Column 8, lines 45–55) specifies that during soft-focus adjustment, **the entire Group A (AI and AII locked together, maintaining constant $d_{A7}$) and Group B move along the optical axis at different rates**. Only $d_{B0}$ varies; $d_{A7}$ is held constant. The differential movement is accomplished via separate cam slots in the lens barrel (FIG. 28 of the patent): a fixed cylinder carries two cam profiles — one driving AI's inner cylinder and one driving B's inner cylinder — actuated by the rotation of the aberration control ring. AII is mechanically coupled to AI through a helicoid (part 19 in FIG. 28), so it moves with AI as a unit. This differential cam action compensates for the slight change in total focal length that accompanies the variation in $d_{B0}$, maintaining focus on the subject without the user needing to refocus after changing the softness setting.

A Minolta dealer notebook (1981) and published lens diagram describe the production mechanism more simply: "the rearmost element moved to control aberration." This may reflect a simplified production implementation in which only Group B moves for soft-focus control (with the slight resulting focal length shift considered acceptable in the soft-focus state), or it may be an abbreviated description of the patent's full mechanism.

The patent's FIGS. 11a and 11b show the aberration state at maximum soft focus ($d_{B0} = 8.19$ at patent scale), where the spherical aberration curve shows strong over-correction — the marginal ray is displaced by several millimeters from the paraxial focus.

The visualizer models this as a lens-specific **SOFT** slider. At the sharp end it uses the Table 6 spacing $d_{B0} = 2.44$ (2.074 mm after scaling to the 85 mm production focal length). At the maximum-soft end it uses the FIG. 11 spacing $d_{B0} = 8.19$ (6.962 mm production scale) and a compensated image-side spacing solved from the patent's infinity-focus condition. This keeps the aberration-control movement separate from the focus slider, which continues to vary only $d_{A7}$.

### Physics of the Soft Focus Effect

The patent's key insight is that the meniscus-shaped air space, placed where the light rays are convergent (between the stop and the image), introduces a differential between the third-order ($\Sigma I$) and fifth-order ($\Sigma I^*$) spherical aberration coefficients. As the air gap $d_{B0}$ changes:

- The third-order spherical aberration changes substantially (the marginal ray shifts).
- The fifth-order spherical aberration changes at a different rate.
- Coma, astigmatism, Petzval sum, and distortion remain nearly constant.

The patent quantifies this with a figure of merit: $\Sigma I^* / \Sigma I > 20$ for the fixed (non-variable) embodiments. A high ratio means the zonal rays (intermediate height) carry relatively little spherical aberration compared to the marginal rays (full aperture), so the zone contributes to a sharp core while the margin creates the peripheral halo. This produces the characteristic Varisoft rendering: every image point has a sharp nucleus surrounded by a soft glow, rather than the undifferentiated blur of a conventional soft filter.

The patent contrasts this with a reference Tessar design (Table 14, FIG. 32) that has the same marginal spherical aberration but a ratio of only $\Sigma I^* / \Sigma I \approx 16.3$ — resulting in an image with weaker core definition and more diffuse halo.

## Aspherical Surfaces

**There are no aspherical surfaces in this design.** All eleven optical surfaces across the six elements are spherical. This is consistent with the patent date (1975/1978) and Minolta's manufacturing capabilities of the era. The soft-focus effect is achieved entirely through the controlled introduction of spherical aberration via the variable meniscus air space, not through aspherical surface profiles.

## Patent Conditional Expressions

The patent specifies two conditions governing the curvatures of the surfaces bounding the meniscus-shaped air space, expressed as ratios with the system focal length $f$:

$$0.20 < |r_A| / f < 0.65 \quad \text{(1)}$$
$$0.18 < |r_B| / f < 0.45 \quad \text{(2)}$$

For the soft-focus control air space $d_{B0}$ in Embodiment 3:
- $r_A = r_9 = -34.730$ (rear surface of L5): $|r_A|/f = 0.347$ — satisfies condition (1).
- $r_B = r_{10} = -31.559$ (front surface of L6): $|r_B|/f = 0.316$ — satisfies condition (2).

The patent explains these bounds as follows:
- **Condition (1):** When $|r_A|/f$ approaches the upper limit (0.65), the refracting power of $r_A$ weakens and the high-order spherical aberration coefficients diminish, reducing the designer's control over the soft-focus effect. When it approaches the lower limit (0.20), the positive power of $r_A$ becomes too strong and the third-order spherical aberration dominates, upsetting the balance with the fifth-order term.
- **Condition (2):** When $|r_B|/f$ approaches the upper limit (0.45), the Petzval sum increases and image-plane flatness degrades. When it approaches the lower limit (0.18), coma becomes positive and the symmetry of the off-axis aberration correction is lost.

## Verification Summary

A paraxial ABCD-matrix ray trace of the Embodiment 3 prescription (all surfaces at patent-published values) was performed independently.

| Parameter | Computed | Patent |
|-----------|:--------:|:------:|
| Effective focal length | 100.00 mm | 100.0 mm |
| Back focal distance | 75.80 mm | 66.90 mm |
| Petzval sum ($\times f$) | 0.188 | — |
| Half-field angle | 14.3° | 14° ($2\omega = 28°$) |

The EFL matches the patent value to within 0.002%, confirming that the radii and refractive indices are correctly transcribed. At production scale ($\times 0.85$): EFL = 85.00 mm, BFD = 64.43 mm, track (front vertex to rear vertex) = 47.6 mm.

**Close-focus verification.** A paraxial ABCD-matrix check at $d_{A7} = 13.45$ (patent scale), with BFD held at the corrected infinity value of 75.80 mm, gives $\beta \approx -0.110$. This matches the patent's stated close-focus condition for FIGS. 10a and 10b. In the fixed-image-plane viewer this means Group AI moves forward by the $d_{A7}$ increase, while L5, L6, and the image plane remain fixed.

**BFD discrepancy analysis.** To determine whether the 8.9 mm BFD discrepancy reflects a methodological error or a patent error, the same ABCD-matrix trace was applied to six other embodiments and the reference design in the patent:

| Embodiment | EFL computed | BFD computed | BFD patent | ΔBFD |
|:---:|:---:|:---:|:---:|:---:|
| 1 | 99.99 | 75.84 | 75.96 | −0.12 |
| 4 | 100.00 | 81.13 | 81.40 | −0.27 |
| 9 | 99.29 | 59.51 | 60.17 | −0.67 |
| 10 | 100.00 | 80.87 | 80.86 | +0.01 |
| Reference | 99.99 | 74.19 | 74.22 | −0.03 |

Four of these match to within ±0.3 mm, with Embodiment 10 essentially exact (±0.01 mm). This confirms the ray-trace methodology. The Embodiment 3 BFD discrepancy of +8.9 mm is anomalous and isolated to this embodiment.

A corrected BFD of 75.80 mm would produce ΔBFD = −0.003 mm, consistent with the best-matching embodiments. A plausible single-digit misprint — "66.90" for "75.80" or "75.90" — would explain the entire discrepancy. The patent's Certificate of Correction already documents eight separate typographical errors across the patent text, including column misalignments in Table 2, a mislabeled embodiment number in Table 5, a sign error in a Table 15 coefficient, and missing absolute-value notation in the conditional expressions. A BFD misprint in Table 6 is consistent with this pattern.

No alternative measurement convention (BFD from the stop, BFD from the rear of Group AI) produces a value near 66.90, nor does the soft-focus condition at $d_{B0} = 8.19$ explain the discrepancy. The conclusion is that the patent's stated BFD of 66.90 is a typographical error; the correct value is approximately **75.80 mm** at $f = 100$ scale (≈ 64.4 mm at $f = 85$ production scale, comfortably above the 43.5 mm Minolta SR mount flange distance).

## Design Heritage and Context

The Minolta Varisoft Rokkor 85mm f/2.8, introduced in 1978, was the first 35mm SLR lens to offer continuously variable soft-focus control through an optical mechanism rather than a removable filter. Prior soft-focus approaches relied on apodization plates (perforated discs, as shown in FIG. 35 of the patent) that sacrificed light transmission and could produce visible hole-pattern artifacts at bright point sources. The Varisoft's cam-controlled meniscus air space eliminated both drawbacks, delivering full-aperture transmission at all softness settings.

The lens remained in the Minolta catalog until the mid-1990s, spanning both the MC Rokkor and late-MD cosmetic generations. Its successors — the Minolta AF 100mm f/2.8 Soft Focus (1995, A-mount) and the Sony/Minolta STF 135mm f/2.8 [T4.5] — adopted different mechanisms for image softening (apodization filter element) but continued the tradition of in-lens soft-focus control that the Varisoft pioneered.

## Sources

1. US 4,124,276A. Okano, Nakamura, Ogura. "Soft Focus Lens System." Filed December 15, 1976; granted November 7, 1978. Assigned to Minolta Camera Kabushiki Kaisha.
2. US 4,214,814A. Ogino, Ogura, Okano, Nakamura. "Variable Soft Focus Lens System." Filed August 30, 1978; granted July 29, 1980. Assigned to Minolta Camera Kabushiki Kaisha.
3. "Minolta Dealer Notebook, Part 4 (Lenses)." Minolta Corporation, 1981.
4. "A Guide to the Minolta SLR System of Creative Photography." Minolta Camera Co., Ltd. September 1979.
5. Wikipedia, "Minolta Varisoft Rokkor 85mm f/2.8." Accessed May 2026. Confirms Embodiment 3 identification and production details.
6. Kamerastore product listing: 6 elements, 5 groups, 8 aperture blades, 55mm filter, MFD 0.8 m.
