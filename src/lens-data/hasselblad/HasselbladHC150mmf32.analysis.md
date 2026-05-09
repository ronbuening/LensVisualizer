# Hasselblad HC 150mm f/3.2

## Patent Reference and Design Identification

**US 2002/0075570 A1**, "Inner-Focus-Type Lens." Inventor: Hiromitsu Yamakawa (Saitama City, Japan). Filed September 13, 2001; published June 20, 2002. Priority: JP 2000-293710, filed September 27, 2000. The prescription used is **Embodiment 1** (Table 1, FIG. 1, aberration plots FIGS. 3A–3H).

The patent was filed by Yamakawa through the correspondence firm Arnold International. Yamakawa is a prolific optical designer whose subsequent patents — covering wide-angle, imaging, and ultra-wide-angle lenses — were assigned to Fujinon Corporation and later Fujifilm Corporation. The Hasselblad H-system lenses were jointly developed with Fujifilm and manufactured by Fujinon; the HC lenses were also sold under Fujinon branding for the Fujifilm GX645AF platform. This patent therefore represents a Fujinon-designed lens produced for the Hasselblad H system.

The following evidence converges on Embodiment 1 as the production HC 3.2/150:

1. **Element and group count.** Embodiment 1 has 9 elements in 3 functional groups (positive–negative–positive). The production lens is specified as 9 elements in 8 air-separated groups — exactly the count when each standalone element in G1 and G3 is counted as its own group, with the cemented L5+L6 pair as a single group.
2. **Focal length and f-number.** The patent prescription is normalized to $f = 1$ with $F/3.2$ and $\omega = 13.1°$. Scaling to match the 645 format half-diagonal ($\approx 34.9$ mm) yields $f = 34.9 / \tan(13.1°) \approx 150$ mm — the production focal length. The f-number matches exactly.
3. **Field angle.** $2\omega = 26.2°$ at the patent design. Hasselblad publishes 26° for the 645 film format and 23° for certain digital sensor configurations (smaller than full 645 frame), both consistent.
4. **Inner-focus mechanism.** The patent describes focusing by moving the second lens group (a cemented negative doublet) as a unit. The production HC 150mm uses internal focusing with constant overall length — consistent with only G2 translating while G1 and G3 remain fixed.
5. **MFD and magnification.** The patent aberration plots show close-focus performance at an object distance of 8.5$f$ from the first surface, corresponding to an MFD of approximately 1.46 m (image plane to object). Hasselblad specifies MFD = 1.3 m with magnification 1:6.8. The minor difference reflects the practical design margin between the patent's normalized design and the production unit's actual focus travel.
6. **Patent timing.** The Japanese priority date (September 2000) aligns with the H-system development period; the Hasselblad H1 was announced in 2002.
7. **All-spherical design.** The patent describes no aspherical surfaces in any of its eight embodiments. The production lens likewise does not advertise aspherical elements.

## Optical Architecture

The HC 3.2/150 is a three-group, all-spherical, inner-focus prime lens of positive–negative–positive power distribution. In photographic terms it is a moderate telephoto for the 645 format (equivalent to roughly 93 mm on 135 full-frame). It comprises 9 elements arranged in 8 air-separated groups:

- **Group 1 (G1, positive):** Four elements — L1 through L4 — all meniscus-shaped with their convex surfaces facing the object. G1 contains two ED fluorophosphate crowns (L2, L4) paired with a dense flint (L3) and a lanthanum crown (L1). G1 is the front collector and provides the bulk of the system's converging power, with a group focal length of $f_1 = 102.5$ mm ($f_1/f = 0.684$).

- **Group 2 (G2, negative, focusing):** A cemented doublet of L5 (biconcave) and L6 (positive meniscus), forming a negative achromatic unit with group focal length $f_2 = -72.8$ mm ($f_2/f = -0.486$). This group translates along the optical axis for focusing while G1 and G3 remain fixed.

- **Aperture stop:** Located in the air gap between G2 and G3 (¶0040), consistent with FIG. 1 of the patent.

- **Group 3 (G3, positive):** Three elements — a biconvex L7, a negative meniscus L8 with its convex surface toward the image, and a positive meniscus L9 also convex toward the image. G3 serves as the relay group, forming the final image with group focal length $f_3 = 101.1$ mm ($f_3/f = 0.674$).

At the design scale of $f = 150$ mm, the total optical track from the first surface to the image plane is approximately 181.2 mm, yielding a track-to-EFL ratio of 1.21. The back focal distance is approximately 76.8 mm. The Hasselblad H mount has a flange focal distance of 61.63 mm, placing the rear element about 15 mm ahead of the mount flange — comfortably within the lens barrel. A central leaf shutter is housed within the lens barrel, as is standard for HC lenses.

The Petzval sum computed surface-by-surface at the d-line is $\Sigma = 0.00114$ mm$^{-1}$ (0.171 normalized to $f = 1$), giving a Petzval radius of approximately $-877$ mm. For a 150 mm lens covering the 645 format, this represents well-controlled field curvature — the negative meniscus L8 and the strong negative power of G2 are the principal Petzval correctors.

## Element-by-Element Analysis

All radii, thicknesses, and semi-diameters below are stated at the production scale ($f = 150$ mm) unless otherwise noted. The patent tabulates refractive indices at the e-line ($\lambda = 546.1$ nm), designated $N_e$, and Abbe numbers at the d-line ($\lambda = 587.6$ nm), designated $\nu_d$. Estimated d-line refractive indices ($n_d$) are provided for glass identification purposes; the patent's e-line values are authoritative.

### L1 — Positive Meniscus, convex to object

$N_e = 1.77621$, $\nu_d = 49.6$. Glass: **S-LAH66 (OHARA)** — $n_d = 1.77250$, $\nu_d = 49.6$. $f = +91.5$ mm.

L1 is the front collector element. Its relatively strong positive power ($f_{11}/f = 0.607$, Condition 4) is constrained by the patent to the range $0.5 < f_{11}/f < 1.2$ to balance spherical aberration and curvature of field variation across the focus range (¶0044). The meniscus form — both radii positive, with $R_1 = 63.5$ mm and $R_2 = 578.9$ mm — bends the on-axis bundle gently, distributing refraction across a strongly curved front surface and a nearly flat rear surface. The lanthanum crown S-LAH66 offers high refractive index ($n_d = 1.77$) with moderate dispersion ($\nu_d = 49.6$), enabling the strong curvature needed for power while keeping the Petzval contribution manageable.

### L2 — Positive Meniscus, convex to object (ED)

$N_e = 1.49845$, $\nu_d = 81.6$. Glass: **S-FPL51 (OHARA)** — $n_d = 1.49700$, $\nu_d = 81.6$. $f = +132.6$ mm.

L2 is the first of two ED (extra-low dispersion) fluorophosphate elements in G1, forming a chromatic correcting pair with L3. Its low refractive index and very high Abbe number make it an effective positive crown for achromatizing the front group. Despite the low index, the meniscus shape ($R_1 = 45.8$ mm, $R_2 = 141.8$ mm) provides useful positive power while keeping refraction angles moderate. L2 satisfies Condition 6 of the patent ($N_e + 0.015 \nu_d = 2.722 > 2.58$, ¶0046), ensuring sufficient lateral chromatic aberration correction for the large 645 image circle.

### L3 — Negative Meniscus, convex to object

$N_e = 1.69416$, $\nu_d = 31.2$. Glass: **Dense flint, 689/312 code** — no confident catalog match; possibly a discontinued or proprietary melt. $f = -58.0$ mm.

L3 is the sole negative element in G1. Its strong negative power ($f_{1N}/f = -0.384$, Condition 5) corrects the chromatic aberration introduced by the three positive elements, functioning as the achromatizing flint partner to L2. The meniscus shape ($R_1 = 322.6$ mm, $R_2 = 35.4$ mm) concentrates most of the refraction at the steeply curved rear surface. The patent constrains $f_{1N}/f$ to the range $-0.6$ to $-0.3$ (¶0045): too strong and L3 generates excessive astigmatism and lateral color; too weak and the aberration budget shifts unfavorably to the other positive elements.

### L4 — Positive Meniscus, convex to object (ED)

$N_e = 1.49845$, $\nu_d = 81.6$. Glass: **S-FPL51 (OHARA)** — same glass as L2. $f = +161.7$ mm.

L4 is the rearmost element of G1 and the second ED element. Together with L2, it bookends the negative L3, creating a symmetric-like color correction within the front group. The use of two S-FPL51 elements — one on each side of the flint — allows the lateral color generated at L3 to be balanced more evenly across the aperture, a strategy the patent specifically identifies through Condition 6 (¶0046). L4's meniscus form ($R_1 = 63.3$ mm, $R_2 = 289.2$ mm) is similar to L1's, contributing gentle positive power while keeping higher-order aberrations low.

### L5 — Biconcave Negative (cemented to L6)

$N_e = 1.67380$, $\nu_d = 57.2$. Glass: **Lanthanum crown, 670/572 code** — plausible match to CDGM H-LAK6A ($n_d = 1.67003$, $\nu_d = 57.3$); no exact match in OHARA's current S-prefix catalog. $f = -36.5$ mm.

L5 is the first element of the cemented focusing doublet G2. Its biconcave form ($R_1 = -1185.3$ mm, $R_2 = +25.0$ mm) places almost all of the diverging power on the rear surface, which serves as the cemented junction with L6. The lanthanum-crown-class glass ($\nu_d = 57.2$) combined with L6's higher-dispersion lanthanum crown creates an achromatic cemented pair with net negative power ($f_2 = -72.8$ mm). The near-flat front surface ($R = -1185$ mm) minimizes the sensitivity of the design to positional tolerances during focusing — a critical consideration since this group translates axially.

### L6 — Positive Meniscus, convex to object (cemented to L5)

$N_e = 1.83932$, $\nu_d = 37.2$. Glass: **S-LAH60 (OHARA)** — $n_d = 1.83400$, $\nu_d = 37.2$. $f = +67.5$ mm.

L6 is the positive partner in the G2 cemented doublet. Its high refractive index ($N_e = 1.84$) and moderate dispersion ($\nu_d = 37.2$) provide partial color correction within the focusing group. The cemented interface at $R = 25.0$ mm (shared with L5's rear surface) carries the strongest refraction in G2, achromatizing the doublet while maintaining the net negative power required for the telephoto-like power distribution. Because G2 translates as a rigid unit during focusing, the cemented construction ensures that the critical junction alignment is preserved mechanically.

### L7 — Biconvex Positive

$N_e = 1.56433$, $\nu_d = 45.3$. Glass: **Barium light flint, 561/453 code** — no confirmed catalog match; likely a proprietary or discontinued melt. $f = +83.4$ mm.

L7 is the front element of G3 and the only biconvex element in the design ($R_1 = +121.0$ mm, $R_2 = -74.8$ mm). Positioned immediately behind the aperture stop, it collects the diverging cone from G2 and begins reconverging it toward the image plane. The biconvex form provides strong positive power with relatively balanced refraction across both surfaces, minimizing spherical aberration contribution at this point in the optical train. The moderate-dispersion glass ($\nu_d = 45.3$) places L7 between the crown and flint families — an unusual choice that allows fine-tuning of the chromatic balance in G3 without the extreme curvatures that a high-$\nu_d$ crown would require.

### L8 — Negative Meniscus, convex to image

$N_e = 1.72538$, $\nu_d = 34.7$. Glass: **S-NBH8 (OHARA)** — $n_d = 1.72047$, $\nu_d = 34.7$; Schott equivalent N-KZFS8 (code 720/347). A KZFS-class glass with anomalous partial dispersion: catalog $\Delta P_{gF} \approx -0.002$. $f = -51.1$ mm.

L8 is the critical chromatic corrector of G3 and arguably the most optically significant glass choice in the entire design. Its meniscus shape ($R_1 = -33.1$ mm, $R_2 = -331.9$ mm, convex toward the image) generates strong negative power that corrects field curvature (Petzval sum) while the KZFS-class glass provides anomalous partial dispersion for axial color correction.

The patent specifies Condition 7 ($\theta_{gF} + 0.0019\nu_d < 0.650$) for this element's glass (¶0047). The spectral line indices published in Embodiments 2–7 for this glass — $N_g = 1.74721$, $N_F = 1.73511$, $N_C = 1.71436$, $N_d = 1.72047$ — give $\theta_{gF} = (N_g - N_F)/(N_F - N_C) = 0.01210/0.02075 = 0.5831$, and $\theta_{gF} + 0.0019 \times 34.7 = 0.649 < 0.650$, satisfying the condition at the boundary. This anomalous dispersion (low $\theta_{gF}$ relative to normal glasses at this Abbe number) reduces secondary spectrum — the residual chromatic error that remains after primary achromatization. For the large 645 image circle (69.7 mm diagonal), even small secondary spectrum contributions produce visible color fringing in prints; the patent explicitly warns that exceeding Condition 7 causes excessive axial chromatic aberration for film sizes larger than "Brogne" — a transliteration of the Japanese term ブローニー (*burōnī*), referring to 120 roll film / medium format (¶0047).

### L9 — Positive Meniscus, convex to image

$N_e = 1.77621$, $\nu_d = 49.6$. Glass: **S-LAH66 (OHARA)** — same glass as L1. $f = +61.0$ mm.

L9 is the final element, a strong positive meniscus ($R_1 = -198.5$ mm, $R_2 = -38.9$ mm) that performs the last convergence of the image-forming cone. Its steeply curved rear surface carries the strongest individual refraction in G3. The choice of S-LAH66 — the same high-index lanthanum crown used for L1 — allows the needed curvature without driving the Petzval contribution excessively positive. The meniscus form, concave toward the object, acts as a mild field-flattening element, bending the image surface inward to partially compensate the residual Petzval curvature from the positive groups.

## Glass Identification and Selection

The design uses 6 distinct glass types across 9 elements. Two elements (L2, L4) share one ED glass and two (L1, L9) share a lanthanum crown, giving 6 unique compositions.

| Element | $N_e$ | $\nu_d$ | Glass (candidate) | Vendor | Role |
|---------|-------|---------|-------------------|--------|------|
| L1, L9 | 1.77621 | 49.6 | S-LAH66 | OHARA | Lanthanum crown; high-$n$ meniscus for power and Petzval control |
| L2, L4 | 1.49845 | 81.6 | S-FPL51 | OHARA | ED fluorophosphate crown; primary chromatic corrector |
| L3 | 1.69416 | 31.2 | Dense flint (689/312) | Uncertain | Achromatizing flint partner to L2 in G1 |
| L5 | 1.67380 | 57.2 | Lanthanum crown (670/572); cf. H-LAK6A | CDGM (inferred) | Crown partner in G2 cemented doublet |
| L6 | 1.83932 | 37.2 | S-LAH60 | OHARA | High-$n$ lanthanum crown in G2 cemented doublet |
| L7 | 1.56433 | 45.3 | Barium light flint (561/453) | Uncertain | Biconvex positive; main relay power in G3 |
| L8 | 1.72538 | 34.7 | S-NBH8 (≡ N-KZFS8) | OHARA | KZFS-class; anomalous $\Delta P_{gF}$ for secondary spectrum correction |

The chromatic strategy is layered. Primary achromatization in G1 uses the classic ED-crown / dense-flint pairing (S-FPL51 paired with the 689/312 flint). The G2 cemented doublet provides local achromatization of the focusing group. In G3, the KZFS-class S-NBH8 at L8 addresses secondary spectrum — the residual longitudinal color that persists after primary correction. This three-tier chromatic architecture is essential for a 150 mm lens covering the 645 format, where the image diagonal is 1.6× that of 135 format and chromatic errors scale proportionally.

The patent's Condition 6 ($N_e + 0.015\nu_d > 2.58$) selects specifically for the ED glasses at L2 and L4 — it defines a curve in the $N_e$–$\nu_d$ diagram that excludes ordinary crowns and accepts only fluorophosphate or fluorite-class materials. S-FPL51 satisfies this comfortably at $1.498 + 0.015 \times 81.6 = 2.722$.

For L3, L5, and L7, where the patent's e-line indices do not match any single current catalog entry within tight tolerance, the glasses may be proprietary Fujinon melts, early-catalog designations since superseded, or glasses from vendors (HIKARI, Sumita, CDGM) whose catalog data was not publicly indexed at the time of filing. L5 at 670/572 is plausibly CDGM H-LAK6A ($n_d = 1.67003$, $\nu_d = 57.3$). L3 at 689/312 and L7 at 561/453 remain unconfirmed; the six-digit codes are reported in lieu of catalog names.

## Focus Mechanism

Focusing is performed by translating the second lens group G2 — the cemented doublet of L5 and L6 — as a rigid unit along the optical axis (¶0041). G1 and G3 are fixed relative to the lens barrel and camera mount. The aperture stop, positioned between G2 and G3, is also fixed.

The patent does not publish explicit variable-gap tables for close focus. However, paraxial ray tracing of the scaled prescription allows computation of the focus travel. The two variable gaps are D8 (the air space between L4 and L5, i.e., G1→G2) and D11 (the air space between L6 and the aperture stop, i.e., G2→STO). When G2 moves toward the image by distance $\Delta$, D8 increases by $\Delta$ and D11 decreases by $\Delta$, keeping the total track constant. The gap from stop to L7 (STO→G3) is fixed at 18.97 mm.

| Parameter | Infinity focus | Close focus (MFD ≈ 1.3 m) |
|-----------|---------------|--------------------------|
| D8 (G1→G2) | 4.99 mm | 15.71 mm |
| D11 (G2→STO) | 18.97 mm | 8.25 mm |
| G2 travel | — | 10.72 mm (toward image) |

At the production MFD of 1.3 m (image plane to subject), the computed magnification is approximately 1:6.5, reasonably close to Hasselblad's published 1:6.8. The small discrepancy reflects the difference between paraxial computation at the d-line and the actual polychromatic focus position, plus any mechanical limits on the production focus travel.

The patent notes (¶0041) that inner focus simplifies the mechanical design because only the small, lightweight G2 doublet moves, reducing the required driving force and enabling rapid autofocus. The cemented construction of L5+L6 eliminates the need for multi-element alignment within the moving group, further improving reliability.

## Aspherical Surfaces

The design is entirely spherical. None of the eight embodiments in the patent employ aspherical surfaces. This is consistent with the production HC 150mm f/3.2, which does not advertise aspherical elements.

The all-spherical construction is notable for a modern medium-format lens. At $f/3.2$ and 150 mm, the relatively slow aperture (compared to 35mm-format f/1.4–f/2 telephoto primes) keeps higher-order aberrations manageable without aspherics. The 9-element count — generous by 35mm standards but modest for 645 — provides enough degrees of freedom for aberration correction through glass selection and curvature optimization alone. The KZFS-class glass at L8 performs much of the role that an aspherical surface would play in a more aggressive design: fine chromatic correction without adding a dedicated corrector plate.

## Chromatic Correction Strategy

The design employs a three-tier chromatic correction architecture — an interpretive framework not stated in the patent text, but consistent with the conditional expressions and glass choices — designed for the 645 format's 69.7 mm image diagonal, where chromatic aberrations are proportionally more visible than in smaller formats.

**Tier 1 — Primary achromatization in G1:** The two S-FPL51 elements (L2, L4) bracket the dense flint L3. This arrangement distributes the positive crown power on both sides of the flint, balancing lateral color more evenly across the pupil than a single crown-flint pair would achieve. The patent's Condition 6 ensures that only ED-class materials are used here.

**Tier 2 — Local achromatization in G2:** The cemented doublet L5+L6 is chromatically corrected within itself. Because this group translates during focusing, any residual chromatic contribution from G2 varies with focus position. The cemented achromatization minimizes this variation, maintaining consistent color correction from infinity to close focus.

**Tier 3 — Secondary spectrum correction in G3:** The KZFS-class S-NBH8 at L8 has anomalous partial dispersion ($\theta_{gF} = 0.583$, slightly below the Schott normal line for its Abbe number; catalog $\Delta P_{gF} \approx -0.002$). Although mild compared to stronger KZFS variants (e.g. N-KZFS11 at $\Delta P_{gF} = -0.009$), this is sufficient to reduce secondary spectrum — the residual longitudinal color that persists after primary (F-C) achromatization. The patent's Condition 7 ($\theta_{gF} + 0.0019\nu_d < 0.650$) quantifies this requirement.

The aberration plots for Embodiment 1 (FIGS. 3A–3D) show lateral color below $\pm 0.0005$ (normalized to $f = 1$ m, corresponding to $\pm 0.075$ mm at $f = 150$ mm) across the full $\omega = 13.1°$ half-field, confirming the effectiveness of this strategy. The spherical aberration curves (FIG. 3A) show modest longitudinal color separation between the e, g, and C lines — roughly $\pm 0.002$ normalized ($\pm 0.3$ mm at $f = 150$ mm) — typical of a well-corrected design without fluorite.

## Conditional Expressions

The patent specifies seven conditional expressions governing the power distribution and glass selection. All are satisfied by Embodiment 1:

| Condition | Expression | Required range | Embodiment 1 value | Status |
|-----------|-----------|---------------|-------------------|--------|
| (1) | $f_1/f$ | $0.58 < \cdot < 0.84$ | 0.684 | ✓ |
| (2) | $f_2/f$ | $-0.58 < \cdot < -0.4$ | −0.483 | ✓ |
| (3) | $f_3/f$ | $0.54 < \cdot < 1.2$ | 0.671 | ✓ |
| (4) | $f_{11}/f$ | $0.5 < \cdot < 1.2$ | 0.607 | ✓ |
| (5) | $f_{1N}/f$ | $-0.6 < \cdot < -0.3$ | −0.384 | ✓ |
| (6) | $N_e + 0.015\nu_d$ (L2, L4) | $> 2.58$ | 2.722 | ✓ |
| (7) | $\theta_{gF} + 0.0019\nu_d$ (L8) | $< 0.650$ | 0.649 | ✓ (at boundary) |

Condition 7 is notable for being satisfied at the extreme boundary ($0.649$ vs. the limit of $0.650$). The patent text for Embodiment 1 (¶0055) explicitly verifies only Conditions (1)–(6); Condition 7 is not claimed for this embodiment. However, Embodiments 2–4 and 6–7 use the identical glass at L8 ($N_d = 1.72047$, $\nu_d = 34.7$) and publish the spectral-line indices that yield $\theta_{gF} = 0.5831$, confirming that the glass satisfies Condition 7. It is reasonable to infer that Embodiment 1 uses the same glass, with the e-line index differing slightly due to the normalization and rounding of the prescription table.

## Design Heritage and Context

The Hasselblad HC 3.2/150 was part of the launch lineup for the Hasselblad H system in 2002. The H system represented Hasselblad's departure from its long association with Carl Zeiss for lens manufacturing, partnering instead with Fujifilm/Fujinon. The lenses were manufactured by Fujinon in Japan, while the central leaf shutters were manufactured by Hasselblad in Sweden.

The three-group positive–negative–positive architecture with inner focus at G2 is a well-established telephoto topology. The patent's innovation lies in the specific glass selection — particularly the dual-ED strategy in G1 and the KZFS-class corrector in G3 — optimized for the 645 format's demanding image-circle requirements. The patent explicitly acknowledges (¶0001–0002) that inner-focus designs are common for smaller formats but rare for large-format lenses due to the difficulty of correcting aberrations that scale with image size.

The design was later refreshed as the HC 3.2/150 N ("N" for the updated shutter mechanism and environmental compliance), but the optical formula remained unchanged. The lens remains compatible with current Hasselblad X-system cameras via the XH Lens Adapter and XH Converter 0.8.

## Sources

- US 2002/0075570 A1: Primary patent source for all prescription data, conditional expressions, and design rationale.
- Hasselblad official product page (hasselblad.com/h-system/lenses/hc32150mm): Production specifications — 150 mm, f/3.2, 9 elements / 8 groups, MFD 1.3 m, 77 mm filter thread, internal focus.
- FDTimes lens mount FFD chart (Issue 81-82, Apr-Jun 2017): Hasselblad H mount flange focal distance = 61.63 mm.
- KEH product listing (keh.com): Production specifications including leaf-shutter sync speed details and Fujifilm GX645 cross-compatibility.
- OHARA optical glass catalog (cross-referenced via refractiveindex.info): S-LAH66 ($n_d = 1.77250$, $\nu_d = 49.6$), S-FPL51 ($n_d = 1.49700$, $\nu_d = 81.6$), S-LAH60 ($n_d = 1.83400$, $\nu_d = 37.2$), S-NBH8 ($n_d = 1.72047$, $\nu_d = 34.7$).
