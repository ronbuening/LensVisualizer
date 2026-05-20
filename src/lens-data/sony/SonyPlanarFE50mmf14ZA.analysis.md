# Sony Planar T\* FE 50mm F1.4 ZA — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** WO 2017/138250 A1 (JP republication of PCT/JP2016/087415).
**Title:** 撮像レンズおよび撮像装置 (*Imaging Lens and Imaging Apparatus*).
**Applicant:** Sony Corporation (000002185), Tokyo.
**Inventor:** Hosoi Masaharu (細井 正晴).
**Filed:** 15 December 2016 (international); priority 12 February 2016 (JP 2016-024597).
**Published:** 17 August 2017 (international); 13 December 2018 (JP republication).
**Embodiment analyzed:** Numerical Example 2 (数値実施例2), Tables 6–10 (¶0079–0091).

Convergent evidence linking Example 2 to the production Sony Planar T\* FE 50mm F1.4 ZA (SEL50F14Z):

1. **Element and group count.** Example 2 has 12 elements in 9 air-separated groups, matching the manufacturer specification exactly.
2. **Aspherical surface count.** Two aspherical surfaces — one on the front surface of the second element (Lp1) and one on the rear surface of the twelfth element (L34) — matching Sony's advertised "1 AA (advanced aspherical) + 1 aspherical element."
3. **ED glass count.** One element (Lp3) uses a fluorophosphate-class glass with νd = 68.6, consistent with Sony's "1 ED (Extra-low Dispersion) element."
4. **Focal length and aperture.** Patent: f = 50.29 mm, Fno = 1.45, ω = 23.19° (2ω = 46.38°). Production: f = 50 mm, F1.4, 2ω = 47°. The minor differences are standard rounding from design to marketing values.
5. **Minimum focus distance and magnification.** Patent close-focus β = 0.15 at the third variable-gap column. Sony: MFD = 0.45 m, maximum magnification 0.15×. Exact match.
6. **Focus mechanism.** Patent specifies inner focus by movement of the second lens group (GR2) only — two elements moving as a unit. Sony: "Ring Drive SSM" inner-focus system, consistent with a compact, lightweight focus group.
7. **Aperture blade count.** Not specified in the patent, but Sony states 11 blades.
8. **Patent timing.** Priority date 12 February 2016 precedes the product announcement (11 July 2016) by five months, consistent with a design patent filed shortly before production release.

All six examples share the same overall positive–negative–positive three-group architecture, with the same element/group count (12/9) and the same focus mechanism (GR2 inner focus). Examples 1–5 are ~50 mm designs; Example 6 is an 82.5 mm variant. Among the five 50 mm examples, the GR2 glass choices vary significantly — Example 2 uses nd = 1.995 and 1.946, while Example 5 pushes to nd = 2.001 and 2.104. The convergent-evidence match above identifies Example 2 as a strong candidate for the production lens, but without teardown data confirming the specific GR2 glass choices, the identification carries some uncertainty. The analysis below proceeds from Example 2's prescription.

## Optical Architecture

The SEL50F14Z is a modified double-Gauss (Planar-type) design comprising three groups in a positive–negative–positive power distribution. The total track length at infinity focus is approximately 118.7 mm, with a back focal distance of 15.506 mm — compatible with the Sony E-mount 18 mm flange distance with sensor-stack accommodation.

**Group structure and power:**

- **GR1 (surfaces 1–11): f = +50.0 mm.** Six elements in four air-separated sub-groups, carrying the system's entire positive collecting power. Contains the aperture stop between the third and fourth sub-groups. This group is fixed during focusing.
- **GR2 (surfaces 12–15): f = −112.1 mm.** Two air-separated elements — one biconcave negative (L21) and one biconvex positive (L22) — forming the inner-focus group. The group has weak negative power (f₂/f = −2.22), providing sufficient focus sensitivity while keeping aberration variation small during travel. Moves axially during focusing; all other groups are fixed.
- **GR3 (surfaces 16–22): f = +122.6 mm.** Four elements in three air-separated sub-groups, serving as a relay and field-flattening group. Fixed during focusing.

The Petzval sum of the complete system is +0.00136 mm⁻¹, yielding a Petzval radius of approximately +738 mm. For reference, an uncorrected thin lens of the same focal length would have a Petzval sum of 1/f ≈ 0.020 mm⁻¹; the design reduces this by over 93%, indicating very extensive Petzval correction. The mildly positive residual corresponds to a gently forward-curving Petzval surface, which the field-flattening work in GR3 (particularly the L32+L33 cemented doublet and the L34 aspherical meniscus) further corrects to produce the flat field consistent with the Planar designation.

## Element-by-Element Analysis

### L11 — Biconvex Positive (front collector)

nd = 1.72341, νd = 37.9. Glass: S-BAH28 (OHARA) — barium heavy flint. f = +175.0 mm.

The front element has a nearly flat object-facing surface (R₁ = 9999 mm) and a moderately concave image-facing surface (R₂ = −128.2 mm). Although the patent classifies it as biconvex (両凸レンズ, ¶0082) — both surface signs satisfy R₁ > 0, R₂ < 0 — the extremely weak front curvature makes it functionally near-plano. It acts as a weak positive collector, bending off-axis ray bundles gently inward while contributing minimal on-axis spherical aberration due to its low power. The near-plano front minimizes refraction at the entrance surface, reducing sensitivity to tilt and coma. The barium heavy flint glass (nd = 1.723, νd = 37.9) provides sufficient refractive index to keep curvatures gentle while contributing moderate dispersion — this element is not tasked with chromatic correction. It is separated from the rest of GR1 by a 2.55 mm air gap, functioning as an independent sub-group.

### Lp1 + Ln1 — Cemented Doublet (positive–negative, sub-group G1a front pair)

**Lp1:** nd = 1.85134, νd = 40.1. Glass: high-index lanthanum crown, 851/401 class (probable HIKARI E-LASFH13 or equivalent). f = +68.5 mm. Front surface aspherical (surface 3).

**Ln1:** nd = 1.51679, νd = 64.1. Glass: S-BSL7 (OHARA) / N-BK7 (Schott) equivalent — borosilicate crown. f = −43.6 mm.

**Doublet:** f = −133.5 mm (net negative).

This cemented doublet is the first element of the patent's sub-group G1a (¶0064). Lp1 is a biconvex positive (R₁ = +114.5, R₂ = −116.4 mm) of high-index glass, cemented to Ln1, a biconcave negative (R₁ = −116.4, R₂ = +28.1 mm) of borosilicate crown. The large Abbe-number difference (Δνd = 24.0) provides strong achromatic correction for axial colour across GR1.

Lp1 carries one of the two aspherical surfaces in the design (surface 3). Given the high index of 1.85134, precision-molding this asphere requires Sony's Advanced Aspherical (AA) manufacturing technology — consistent with the AA element Sony advertises. The aspherical profile on the front surface of Lp1 corrects spherical aberration generated by the fast f/1.4 aperture, where the marginal ray height is near its maximum. The aspheric coefficients are moderate (A4 = −4.514 × 10⁻⁶, A6 = −1.752 × 10⁻⁹, A8 = +1.830 × 10⁻¹⁴), indicating a gentle departure from the spherical base — the correction is primarily fourth-order.

The net negative power of this doublet (f = −133.5 mm) means it acts as a diverging corrector: it absorbs some of the convergence provided by L11 and Lp2's half of the double-Gauss, while performing the bulk of axial colour correction in GR1's front half. The strongly curved image-side surface of Ln1 (R = +28.1 mm) presents a steeply convex face toward the following air gap, while the object-side surface of Ln2 (R = −51.9 mm) presents a concave face from the same gap. Together they create a powerful diverging air space at the 8.84 mm gap between this doublet and the Ln2+Lp2 doublet — the longest air gap in GR1, and central to the double-Gauss design's coma and distortion correction via the quasi-symmetric arrangement around the stop (¶0034).

### Ln2 + Lp2 — Cemented Doublet (negative–positive, sub-group G1a rear pair)

**Ln2:** nd = 1.71735, νd = 29.5. Glass: S-TIH1 (OHARA) — dense titanium flint. f = −33.1 mm.

**Lp2:** nd = 1.72916, νd = 54.6. Glass: S-LAL18 (OHARA) — lanthanum crown. f = +35.4 mm.

**Doublet:** f = +838.2 mm (nearly afocal, net very weakly positive).

This doublet sits on the object side of the aperture stop, completing the sub-group G1a described at ¶0043–0044. Ln2 is a biconcave negative of dense flint (R₁ = −51.9, R₂ = +44.7 mm), cemented to Lp2, a biconvex positive of lanthanum crown (R₁ = +44.7, R₂ = −54.9 mm). The Abbe-number difference (Δνd = 25.1) provides the second chromatic correction station in GR1.

The doublet is nearly afocal (f ≈ +838 mm), meaning its primary function is chromatic correction and coma balancing rather than power contribution. The near-symmetry of the two cemented doublets in G1a about the central air gap — positive–negative followed by negative–positive — creates the quasi-symmetric Gauss-type arrangement that the patent identifies as essential for distortion and coma correction (¶0043). The cemented construction of both doublets reduces decentering sensitivity (¶0044), improving manufacturing yield for a large-aperture lens.

### Lp3 — Biconvex Positive (ED element)

nd = 1.59282, νd = 68.6. Glass: fluorophosphate crown, 593/686 class (probable HOYA E-FEL6 or equivalent) — ED glass. f = +52.6 mm.

Lp3 sits immediately after the aperture stop and is the strongest single positive element in GR1 (f = +52.6 mm). Its biconvex form (R₁ = +68.1, R₂ = −54.5 mm) provides the bulk of the system's convergence at this position, where the marginal ray is at moderate height and the chief ray crosses the axis. This is the ED (Extra-low Dispersion) element advertised by Sony. The high Abbe number (68.6) and the fluorophosphate glass class indicate anomalous partial dispersion (positive ΔP_{g,F}), which enables secondary-spectrum correction beyond what the two achromatic cemented doublets upstream can achieve alone. The element's position just after the stop, where on-axis and off-axis bundles are well-separated, makes it effective at correcting both axial and lateral chromatic aberration simultaneously.

The spacing between Lp3's rear surface and L21's front surface (D11) is the first variable gap in the focus mechanism — it increases from 2.442 mm at infinity to 12.782 mm at close focus.

### L21 — Biconcave Negative (focus group, GR2 front element)

nd = 1.99502, νd = 29.3. Glass: ultra-high-index lanthanum-niobium heavy flint, 995/293 class (probable CDGM ZLAF92 or equivalent). f = −37.6 mm.

L21 is the negative element of the two-element focus group GR2. Its biconcave form (R₁ = −243.9, R₂ = +44.3 mm) is strongly asymmetric — the image-side surface is much more steeply curved, concentrating the diverging power there. The ultra-high refractive index (nd ≈ 2.0) is the distinguishing feature of this design, governed by the patent's conditional expression (1): 1.75 < nn < 2.20. As ¶0025 explains, the high index allows the radii of curvature to remain relatively large despite the strong negative power (f = −37.6 mm), which suppresses the spherical aberration and coma that would otherwise be generated by a tightly curved focus-group element. This directly benefits AF speed: less aberration change during focus travel means the lens maintains sharp performance across the focus range without requiring additional compensating elements.

The nd = 1.995 value pushes close to the upper practical limit of available optical glasses. At this index level the glass is likely a lanthanum-niobium oxide composition with high density, which the patent acknowledges as a trade-off: exceeding the upper conditional limit (nn > 2.20) would make the element unacceptably heavy for high-speed AF actuation (¶0025).

### L22 — Biconvex Positive (focus group, GR2 rear element)

nd = 1.94594, νd = 17.9. Glass: ultra-high-dispersion titanium heavy flint, 946/179 class (probable CDGM H-ZF88 / HIKARI E-FDS3-W or equivalent). f = +66.2 mm.

L22 is the positive element of GR2, separated from L21 by a 5.45 mm air gap. Its biconvex form (R₁ = +105.9, R₂ = −150.8 mm) has a shape factor of −0.175, placing it slightly toward the equi-convex form as governed by conditional expression (5) (¶0036–0037). The extremely low Abbe number (17.9) is noteworthy — this is one of the most dispersive glasses available. Its role is chromatic correction within GR2: paired with the high-index L21 (νd = 29.3), the Δνd = 11.4 between the two GR2 elements — modest compared to the cemented doublets elsewhere in the system, but sufficient given the high powers involved — enables the focus group to remain nearly achromatized despite having only two elements, preventing focus-dependent colour shift.

The high refractive index (nd = 1.946) again follows the patent's conditional expression (2): 1.70 < np < 2.20, keeping curvatures gentle to control spherical aberration within the focus group (¶0027–0028). The spacing after L22 (D15) is the second variable gap, decreasing from 12.684 mm at infinity to 2.344 mm at close focus — the complementary motion to D11 that keeps the total gap sum conserved at 15.126 mm.

### L31 — Biconvex Positive (GR3 front element)

nd = 1.80419, νd = 46.5. Glass: S-LAH65V (OHARA) or equivalent — dense lanthanum crown. f = +47.2 mm.

L31 is the first element of the fixed rear group GR3. Its biconvex form (R₁ = +93.6, R₂ = −62.0 mm) provides strong positive power, serving as the primary relay element that re-converges the divergent beam exiting GR2 toward the image plane. The moderate Abbe number (46.5) makes it a balanced choice — neither a strong chromatic contributor nor corrector — consistent with its relay role.

### L32 + L33 — Cemented Doublet (positive–negative, GR3 relay)

**L32:** nd = 1.80419, νd = 46.5. Glass: S-LAH65V (OHARA) — same glass as L31. f = +31.9 mm.

**L33:** nd = 1.80518, νd = 25.4. Glass: S-TIH6 (OHARA) — dense titanium flint. f = −22.2 mm.

**Doublet:** f = −101.3 mm (net negative).

This cemented doublet provides the final achromatic correction station in the system. L32 is a biconvex positive (R₁ = +70.5, R₂ = −37.6 mm), cemented to L33, a biconcave negative (R₁ = −37.6, R₂ = +34.9 mm). The Abbe-number difference (Δνd = 21.1) gives effective chromatic correction. The net negative power of the doublet (f ≈ −101 mm) contributes to the Petzval-sum correction — the negative power here counteracts the positive Petzval contributions from L31 and the system's overall positive power, flattening the field. Both elements use dense glasses (nd > 1.80), which keeps the curvatures moderate despite the strong individual powers. The same glass (S-LAH65V) appearing in both L31 and L32 simplifies the lens bill of materials.

### L34 — Negative Meniscus, concave to object (GR3 field flattener)

nd = 1.58312, νd = 59.3. Glass: S-BAL42 (OHARA) — barium crown. f = −92.4 mm. Rear surface aspherical (surface 22).

L34 is the final optical element, a negative meniscus with its concave side facing the object (R₁ = −34.3, R₂ = −96.2 mm). It serves as the field-flattening element, correcting residual field curvature and astigmatism at the image periphery. Its moderate negative power (f = −92.4 mm) and position far from the stop — where the chief ray height is maximum — give it strong leverage over off-axis aberrations with minimal effect on on-axis performance.

The rear surface (surface 22) carries the second aspherical profile in the design. The aspheric coefficients (K = 0, A4 = +7.338 × 10⁻⁶, A6 = +1.654 × 10⁻⁹, A8 = +2.119 × 10⁻¹¹, A10 = −1.561 × 10⁻¹⁴) show a positive fourth-order departure, meaning the surface becomes less steeply concave toward the periphery than the spherical base. This directly corrects the field curvature and astigmatism that accumulate from the preceding 11 elements. The relatively low index of S-BAL42 (nd = 1.583) makes this element straightforward to mold or polish as a standard aspherical element — consistent with it being the "aspherical" (non-AA) element in Sony's designation.

## Glass Selection

| Element | nd | νd | Glass | Vendor | Role |
|---|---|---|---|---|---|
| L11 | 1.72341 | 37.9 | S-BAH28 | OHARA | Barium heavy flint — front collector |
| Lp1 | 1.85134 | 40.1 | 851/401 class | (uncertain) | High-index lanthanum crown — AA aspherical element |
| Ln1 | 1.51679 | 64.1 | S-BSL7 / N-BK7 | OHARA / Schott | Borosilicate crown — achromatic partner to Lp1 |
| Ln2 | 1.71735 | 29.5 | S-TIH1 | OHARA | Dense titanium flint — achromatic partner to Lp2 |
| Lp2 | 1.72916 | 54.6 | S-LAL18 | OHARA | Lanthanum crown — achromatic partner to Ln2 |
| Lp3 | 1.59282 | 68.6 | 593/686 class (ED) | (uncertain) | Fluorophosphate crown — **ED element** |
| L21 | 1.99502 | 29.3 | 995/293 class | (uncertain) | Ultra-high-index heavy flint — focus group negative |
| L22 | 1.94594 | 17.9 | 946/179 class | (uncertain) | Ultra-high-dispersion flint — focus group positive |
| L31 | 1.80419 | 46.5 | S-LAH65V | OHARA | Dense lanthanum crown — GR3 relay |
| L32 | 1.80419 | 46.5 | S-LAH65V | OHARA | Dense lanthanum crown — GR3 doublet positive |
| L33 | 1.80518 | 25.4 | S-TIH6 | OHARA | Dense titanium flint — GR3 doublet negative |
| L34 | 1.58312 | 59.3 | S-BAL42 | OHARA | Barium crown — field flattener, aspherical |

The design uses four chromatic correction stations, each pairing a crown with a flint of significantly different Abbe number: Lp1+Ln1 (Δνd = 24.0), Ln2+Lp2 (Δνd = 25.1), L21+L22 (Δνd = 11.4), and L32+L33 (Δνd = 21.1). The first, second, and fourth stations are cemented doublets; the third (GR2) uses an air-spaced pair to allow independent movement during focusing while still maintaining achromatization.

The most distinctive glass choice is in GR2, where both elements use ultra-high-index glasses (nd ≈ 2.0 and 1.95). The patent does not name specific glass vendors. The nd = 1.99502 glass exceeds the standard OHARA catalog range and is tentatively identified as CDGM ZLAF92 class; the nd = 1.94594 / νd = 17.9 glass matches CDGM H-ZF88 or HIKARI E-FDS3-W. These identifications carry uncertainty — the actual production glasses may be proprietary melts or vendor-specific formulations unavailable in public catalogs.

The ED element (Lp3, νd = 68.6) is a fluorophosphate-class glass with probable anomalous partial dispersion (positive ΔP_{g,F}), which enables secondary-spectrum correction beyond what the cemented achromats alone can achieve. Its closest catalog match is HOYA E-FEL6 (nd = 1.59270, νd = 68.63); however, the actual production glass may be an equivalent from OHARA or another supplier.

## Focus Mechanism

The lens uses inner focus: only GR2 (L21 + L22, two elements) moves axially during focusing; GR1 and GR3 are fixed. This is consistent with Sony's RDSSM (Ring Drive Super Sonic wave Motor) implementation, which drives the lightweight focus group with high speed and precision for both stills and video AF (¶0023).

| Parameter | Infinity (β = 0) | Intermediate (β = 0.03) | Close (β = 0.15) |
|---|---|---|---|
| D11 (Lp3 → L21) | 2.442 mm | 4.592 mm | 12.782 mm |
| D15 (L22 → L31) | 12.684 mm | 10.534 mm | 2.344 mm |
| D22 (BFD) | 15.506 mm | 15.506 mm | 15.506 mm |

The total gap sum D11 + D15 is conserved at 15.126 mm across all focus positions, confirming that GR2 translates as a rigid unit without changing the spacing between GR1 and GR3. The focus travel is 10.34 mm (D11 increases by this amount as GR2 moves toward the image). The constant BFD (D22 = 15.506 mm at all positions) confirms that the image-plane registration does not shift during focusing — essential for a mirrorless interchangeable lens.

At close focus (β = 0.15), the minimum focus distance is 0.45 m from the image plane, matching the manufacturer specification. The maximum reproduction ratio of 0.15× is moderate for a 50mm prime, reflecting the design's optimization for general photography and portraiture rather than close-up work.

The patent motivates the inner-focus approach at ¶0023: GR2 sits behind the positive GR1, where convergent light reduces the beam diameter. This keeps GR2's elements small in diameter and light in weight — critical for fast, responsive AF suitable for video recording. The use of ultra-high-index glasses in both GR2 elements further reduces the required curvatures, which in turn reduces element thickness and weight.

## Aspherical Surfaces

The design uses two aspherical surfaces, both with the standard conic-polynomial sag equation:

$$Z(h) = \frac{h^2 / R}{1 + \sqrt{1 - (1+K)(h/R)^2}} + A_4 h^4 + A_6 h^6 + A_8 h^8 + A_{10} h^{10} + A_{12} h^{12}$$

The conic constant K = 0 for both surfaces (spherical base), so all aspherical departure comes from the polynomial coefficients.

### Surface 3 — Front surface of Lp1 (AA element)

| Coefficient | Value |
|---|---|
| K | 0 |
| A4 | −4.5136 × 10⁻⁶ |
| A6 | −1.7517 × 10⁻⁹ |
| A8 | +1.8300 × 10⁻¹⁴ |
| A10 | 0 |
| A12 | 0 |

The negative A4 on a converging surface (R = +114.5 mm, positive power) means the surface becomes flatter toward the periphery than the spherical base — i.e., the outer zones contribute less convergence than a sphere would. This directly corrects residual spherical aberration at the fast f/1.4 aperture, where the marginal ray height is near its maximum. The correction is dominated by the fourth-order term; the sixth-order coefficient provides a small additional correction at the extreme periphery. The vanishing A10 and A12 indicate that the asphere was designed with a four-term polynomial — sufficient for the moderate beam diameter at this surface.

This surface is on a high-index glass (nd = 1.85134), requiring Sony's Advanced Aspherical (AA) precision molding process. The AA process achieves tighter surface-form tolerances than standard glass-molded aspheres, which is critical here because the surface sits in the high-ray-height zone of the front group where form errors translate directly into wavefront aberration.

### Surface 22 — Rear surface of L34 (aspherical field flattener)

| Coefficient | Value |
|---|---|
| K | 0 |
| A4 | +7.3383 × 10⁻⁶ |
| A6 | +1.6537 × 10⁻⁹ |
| A8 | +2.1185 × 10⁻¹¹ |
| A10 | −1.5608 × 10⁻¹⁴ |
| A12 | 0 |

The positive A4 on a concave surface (R = −96.2 mm, diverging) means the surface becomes less deeply concave at the periphery, reducing the diverging power at the image edge. This corrects field curvature and astigmatism in the outer field. The progressive positive terms through A8 indicate that the aspherical departure increases monotonically with height through the eighth order, with a small negative A10 providing a correction at the extreme corners. The glass (S-BAL42, nd = 1.583) is a conventional barium crown, straightforward to mold as a standard (non-AA) glass-molded aspherical element.

This surface's position at the very rear of the optical system — far from the aperture stop and close to the image plane — gives it maximum leverage over field-dependent aberrations with minimal influence on on-axis image quality.

## Conditional Expressions

The patent defines six conditional expressions governing the design (¶0024–0041). Example 2 satisfies all six, including the tighter preferred ranges:

| Expression | Condition | Example 2 Value | Preferred Range | Status |
|---|---|---|---|---|
| (1) nn | 1.75 < nn < 2.20 | 1.995 | 1.78 < nn < 2.05 | ✓ |
| (2) np | 1.70 < np < 2.20 | 1.946 | 1.80 < np < 2.15 | ✓ |
| (3) D2a/f | 0 < D2a/f < 0.40 | 0.11 | 0.05 < D2a/f < 0.30 | ✓ |
| (4) D1a/D1 | 0.05 < D1a/D1 < 0.50 | 0.18 | 0.10 < D1a/D1 < 0.35 | ✓ |
| (5) (Rp1+Rp2)/(Rp1−Rp2) | −1.2 < SF < 0.2 | −0.17 | −1.0 < SF < 0.0 | ✓ |
| (6) f2/f | −3.0 < f2/f < −1.50 | −2.22 | −2.6 < f2/f < −1.8 | ✓ |

Expression (1) is the design's defining constraint: the ultra-high refractive index of the GR2 negative element. At nn = 1.995, Example 2 sits near the top of the preferred range, representing one of the more aggressive glass choices among the six examples for minimizing GR2 curvature and weight (only Example 5, at nn = 2.001, is higher).

## Verification Summary

Paraxial ray trace (y-nu method) of the complete 22-surface prescription confirms:

| Parameter | Computed | Patent | Δ |
|---|---|---|---|
| System EFL | 50.31 mm | 50.29 mm | +0.02 mm |
| BFD | 15.51 mm | 15.506 mm | +0.004 mm |
| GR1 focal length | +50.05 mm | +49.989 mm | +0.06 mm |
| GR2 focal length | −111.66 mm | −112.081 mm (Table 10) / −111.67 mm (Table 31) | +0.01 mm vs Table 31 |
| GR3 focal length | +121.58 mm | +122.6 mm | −1.02 mm |

Residuals are within expected rounding tolerance for the patent's four-decimal-place prescription data. The variable-gap sum D11 + D15 = 15.126 mm is conserved across all three tabulated focus positions to six significant figures, confirming the rigid-body motion model for GR2.

## Sources

1. WO 2017/138250 A1, *撮像レンズおよび撮像装置*, Sony Corporation, published 17 August 2017. Numerical Example 2, Tables 6–10.
2. Sony product page for SEL50F14Z (Planar T\* FE 50mm F1.4 ZA): optical specifications, element/group count, special element designations (AA, aspherical, ED).
3. OHARA Optical Glass Catalog — cross-reference for S-BAH28, S-BSL7, S-TIH1, S-LAL18, S-LAH65V, S-TIH6, S-BAL42. Glass codes verified against OHARA pocket catalog cross-reference tables.
4. Glass identifications for Lp1 (851/401), Lp3 (593/686), L21 (995/293), and L22 (946/179) are tentative assignments based on nd/νd matching against available public catalogs (OHARA, HOYA, CDGM, HIKARI, Schott). The actual production glasses may differ.
