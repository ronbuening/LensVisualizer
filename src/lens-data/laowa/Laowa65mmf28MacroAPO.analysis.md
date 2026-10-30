# Optical Analysis — CN 110161666A, Example 2
## Laowa 65mm f/2.8 2× Ultra Macro APO

---

## Patent Reference and Production Identification

**Patent:** CN 110161666A, "一种高倍率微距镜头" (A High-Magnification Macro Lens)
**Applicant:** 安徽长庚光学科技有限公司 (Anhui Changeng Optical Technology Co., Ltd.) — the corporate entity behind Laowa.
**Inventor:** 李大勇 (Li Dayong)
**Filed:** 2019-05-20; **Published:** 2019-08-23
**Classification:** G02B 15/20, G02B 27/00

The patent describes a three-group macro lens of layout G1 (fixed) — G2 (positive, focusing) — stop — G3 (negative, fixed), with an inner-focus mechanism capable of achieving ≥ 1.5× reproduction ratio (¶0004). Two numerical examples are provided. **Example 2** is identified as the embodiment corresponding to the production Laowa 65mm f/2.8 2× Ultra Macro APO on the following convergent evidence:

1. **Element and group count.** Example 2 has 14 elements in 10 groups. The production lens is specified as "14 elements in 10 groups" (Laowa product page; B&H; Digital Camera World review, March 2020).
2. **Focal length.** The patent states $f = 66.0242$ mm for Example 2 (¶0067). The marketed focal length is 65 mm — consistent with standard rounding. (Example 1 has $f = 50.96$ mm, which does not correspond to any known Laowa product at this element count.)
3. **Maximum aperture.** Patent: $F_{\text{no}} = 2.9$ (¶0068); production: f/2.8. The difference is typical of the gap between the patent's computed f-number (at the designed stop diameter) and the marketed value.
4. **Magnification.** Patent: 1.95× maximum (¶0070). Production: 2:1 (2.0×). The small discrepancy reflects the common practice of rounding the marketed specification.
5. **ED element count.** Three glasses in Example 2 share the code $(n_d = 1.49700,\ \nu_d = 81.61)$, matching the "3 Extra-Low Dispersion elements" claimed by Laowa.
6. **Focus mechanism.** Patent: inner focus with G2 moving from image side toward object side, G1 and G3 fixed (¶0056). Production: internal focus with fixed overall length — consistent.
7. **Image circle.** Patent half-field angle $\omega = 12.14°$ (¶0069) yields a half-image-height of $66.02 \times \tan(12.14°) \approx 14.2$ mm, giving a full image diagonal of $\approx 28.4$ mm — consistent with APS-C format ($\approx 28.3$ mm diagonal).
8. **Patent timing.** Filed May 2019; the production lens was announced and began shipping in early 2020.

Example 1, with its shorter focal length of 50.96 mm, shares the same 14-element-in-10-group topology as Example 2 but uses different glass selections at several positions (notably L3 and L10) and yields a significantly different focal length. It appears to be an earlier design study or a prescription for a different (unreleased) product. Example 2 is the production-matched embodiment throughout this analysis.

---

## Optical Architecture

The Laowa 65mm f/2.8 2× Macro is an **all-spherical, inner-focus macro prime** of the general type: nearly afocal positive front group — strong positive focusing group — aperture stop — negative rear relay group. The power distribution is:

| Group | Elements | Focal Length | Power |
|-------|----------|-------------|-------|
| G1 | L1–L2 (cemented doublet) | $f_{G1} \approx +1686$ mm | Very weak positive (nearly afocal) |
| G2 | L3–L9 (7 elements in 5 sub-groups) | $f_{G2} \approx +34.2$ mm | Strong positive (focusing group) |
| G3 | L10–L14 (5 elements in 4 sub-groups) | $f_{G3} \approx -101.6$ mm | Moderate negative (relay) |

This three-group inner-focus architecture places essentially all of the system's converging power in G2, with G3 acting as a negative relay that increases the back focal distance and provides field correction. G1 is an extremely weak front element — with $f_{G1} \approx 1686$ mm, its refractive contribution at infinity focus is negligible. Its primary function is to provide a nearly flat first surface to the incoming beam, while introducing a controlled amount of chromatic pre-correction before the long air gap to G2.

The system focal length of $f = 66.02$ mm arises from the interaction of the strong positive G2 and the negative G3, separated by the variable gap D(17). This positive-negative group arrangement is structurally analogous to the telephoto principle, but its purpose here is not to shorten the lens — the overall physical track from front surface to image (including the 2.0 mm cover glass) is approximately 111.6 mm, giving $\text{TL}/f \approx 1.69$, well above unity. Instead, the negative G3 serves to extend the back focal distance, providing clearance for APS-C mirrorless camera mounts (the physical distance from L14's rear surface to the sensor plane is $\approx 15.3$ mm, allowing the rear element to sit slightly inside the body cavity of mirrorless cameras with flange distances of 16–18 mm). The large G1-to-G2 air gap required for the 35 mm internal focus travel dominates the total track length.

The computed Petzval sum is $\Sigma P = +0.00307\ \text{mm}^{-1}$, giving a Petzval radius of $\approx -325$ mm. The product $\Sigma P \times f = 0.203$ — well-corrected for a macro design that must perform across a wide range of conjugates from infinity to beyond 2:1.

The selected design has **no aspherical surfaces**: the numerical examples supply spherical radii and no aspheric coefficient tables. All fourteen modeled lens elements are spherical. Their powers and source Abbe-number contrasts provide optical degrees of freedom; the source does not establish manufacturing costs, a price-driven design choice or a production correction outcome.

---

## Element-by-Element Analysis

The following walks through each element from front (object side) to rear (image side). Focal lengths are computed using the standalone thick-lens-in-air convention.

### Group G1 — Front Cemented Doublet (Fixed)

#### L1 — Negative Meniscus, convex to object (cemented with L2)

$n_d = 1.61800$, $\nu_d = 63.39$. Glass: S-PHM52 (OHARA) — phosphate crown. $f = -156.9$ mm.

L1 is the front element of the lens. It is a meniscus with both surfaces convex toward the object (R1 = +131.04, R2 = +55.57), meaning both centers of curvature lie on the image side. The rear surface is more steeply curved, giving the element net negative power. As a negative-power crown with $\nu_d = 63.4$, L1's chromatic contribution is small and opposite in sign to that of its cemented partner L2 — the two together form a weakly powered achromatic pair.

L1's front radius of 131 mm is deliberately gentle. With the production lens having a 52 mm filter thread (approximately 21 mm front element semi-diameter at the clear aperture), the front surface presents only a shallow curve, keeping Fresnel reflection losses low and facilitating multi-coating. The mild curvature also minimizes the spherical aberration contribution from this large-aperture surface.

#### L2 — Positive Meniscus, convex to object (cemented with L1)

$n_d = 1.60342$, $\nu_d = 38.01$. Glass: HOYA E-F5 catalog equivalent; production supplier unspecified. $f = +142.0$ mm.

L2 is cemented to L1, sharing the junction surface at R = +55.57. Its rear surface (R = +154.25) is more weakly curved than the junction, yielding net positive power. The pairing of a negative crown (L1) with a positive flint (L2) is an achromatic doublet with reversed power distribution compared to the conventional Fraunhofer form (which uses a positive crown and negative flint). The net result is extremely weak positive power ($f_{D1} \approx +1686$ mm) — the doublet is nearly afocal. Its primary purpose is chromatic pre-correction: the $\Delta\nu_d = 63.39 - 38.01 = 25.38$ between the crown and flint provides a degree of primary-color balancing in the model; it does not establish production apochromatic performance.

At infinity focus, the air gap D(3) behind this doublet is 36.05 mm — by far the largest spacing in the system. This gap acts as the "runway" for G2's focusing travel. When the lens focuses to maximum magnification (1.95×), D(3) collapses to just 1.05 mm as G2 advances forward.

### Group G2 — Positive Focusing Group (Moving)

G2 is the optical powerhouse of the design: seven elements in five sub-groups, carrying the entire system's converging power at $f_{G2} = 34.2$ mm. It moves as a rigid unit along the optical axis during focus.

#### L3 — Biconvex Positive

$n_d = 1.77250$, $\nu_d = 53.00$. Glass: **773530 — high-index lanthanum crown**, uncertain — no exact public catalog match at this $(n_d, \nu_d)$. $f = +52.3$ mm.

L3 is the leading element of the focusing group. Its strongly curved front surface (R = +45.53) provides the first substantial positive power the incoming beam encounters. The rear surface (R = −348.93) is nearly flat, making L3 a quasi-plano-convex element. The high refractive index ($n_d = 1.773$) keeps the surface curvatures moderate for the required power, reducing higher-order spherical aberration.

The L3 source coordinate remains 1.77250/53.00. It does not establish an exact commercial glass identity, and nearby catalog rows have appreciably different Abbe numbers. No proprietary-melt or supplier explanation is inferred.

#### L4 — Positive Meniscus, convex to object (ED)

$n_d = 1.49700$, $\nu_d = 81.61$. Glass: H-FK61 (CDGM) — ED fluorophosphate crown. $f = +66.7$ mm.

L4 is the first of three source 1.49700/81.61 ED-class assignments. Its meniscus radii are +25.18 and +100.27 mm. Its high Abbe number supports a relatively low primary-color contribution for its positive power. H-FK61 supplies a qualified spectral proxy; the patent does not identify anomalous partial dispersion or quantify secondary-spectrum correction.

H-FK61, S-FPL51 and FCD1 are compatible ED-class modeling alternatives. Coordinate compatibility identifies neither the production supplier nor material price, and does not establish that a particular glass is required for the marketed APO designation.

#### L5 — Biconcave Negative (cemented with L6)

$n_d = 1.80518$, $\nu_d = 25.46$. Glass: H-ZF7LA (CDGM) — dense flint. $f = -11.4$ mm.

L5 is a strongly negative biconcave element (R1 = −65.89, R2 = +10.70) that forms the front half of a cemented doublet with L6. With its short focal length of −11.4 mm and high dispersion ($\nu_d = 25.5$), it introduces substantial negative chromatic aberration that counterbalances the undercorrection from the preceding positive elements L3 and L4. The very tight rear radius of R = +10.70 mm creates a strongly diverging interface — this is one of the most steeply curved surfaces in the entire lens and is critical for Petzval sum correction. H-ZF7LA is the exact CDGM catalog match for this nd/νd pair.

#### L6 — Positive Meniscus, convex to object (cemented with L5)

$n_d = 1.92286$, $\nu_d = 20.88$. Glass: H-ZF72A (CDGM) — super-dense flint. $f = +25.6$ mm.

L6 is cemented to L5, sharing the junction at R = +10.70. Both surfaces are convex to the object (R1 = +10.70, R2 = +16.77), forming a positive meniscus. This is the highest-refractive-index glass in the design ($n_d = 1.923$), with extremely high dispersion ($\nu_d = 20.9$). It is equivalent to Schott N-SF66 / OHARA S-NPH2.

The L5–L6 pair has net negative standalone power ($f_{D2}\approx-17.6$ mm). Both source media are flint-like, with Abbe numbers 25.46 and 20.88. Their different indices and selected proxy spectra provide degrees of freedom for aberration balancing. The source does not isolate a measured secondary-spectrum contribution or establish the designer's intended distribution of correction.

#### L7 — Negative Meniscus, convex to object (cemented with L8)

$n_d = 1.80420$, $\nu_d = 46.50$. Glass: H-ZLAF50D (CDGM) — lanthanum dense flint. $f = -61.8$ mm.

L7 is a meniscus with both surfaces convex to the object (R1 = +15.20, R2 = +11.30); the rear surface is more steeply curved, giving net negative power. It is equivalent to Schott N-LASF44 / OHARA S-LAH64. As a lanthanum dense flint with moderate dispersion, L7 contributes negative power while adding controlled positive chromatic aberration — the opposite sign to its cemented partner L8.

#### L8 — Biconvex Positive (cemented with L7) (ED)

$n_d = 1.49700$, $\nu_d = 81.61$. Glass: H-FK61 (CDGM) — ED fluorophosphate crown. $f = +19.3$ mm.

L8 is the second ED-class coordinate assignment, a positive biconvex member with radii +11.30 and −54.04 mm. Its pair with L7 has net positive standalone power ($f_{D3}\approx+28.8$ mm) and a source Abbe-number difference of 35.11. This supports a primary-color-balancing interpretation. Neither that contrast nor its placement behind L5–L6 proves three-wavelength coincidence.

L8 has the shortest listed standalone focal length among the positive elements, +19.3 mm. This establishes substantial positive element power; the source provides no sensitivity or manufacturing-tolerance budget from which to rank its dominance.

#### L9 — Biconvex Positive (nearly plano-convex)

$n_d = 1.92286$, $\nu_d = 20.88$. Glass: H-ZF72A (CDGM) — super-dense flint. $f = +57.5$ mm.

L9 is a weakly biconvex element with a very gentle front surface (R1 = +249.31) and a more strongly curved rear (R2 = −67.18). It uses the same super-dense flint as L6. Despite being a high-dispersion glass, it is used here as a positive element — an unusual choice that exploits its extreme refractive index ($n_d = 1.923$) to provide positive power with minimal surface curvature. The weak front curvature means the element acts almost as a thick window on the front face, with the optical power concentrated at the rear surface.

L9's role is primarily to flatten the Petzval surface. At this point in the optical train, the beam has been partially converged by L3–L8, and L9 applies a final dose of positive power using a glass whose very high index deflects the Petzval contribution in the correcting direction. The high dispersion is tolerated because L9's power is moderate and is compensated by the ED elements flanking it.

After L9, a 1.2 mm air gap (including a 0.2 mm mechanical spacer noted as a separate surface in the patent) leads to the aperture stop.

### Aperture Stop

The stop is positioned immediately after G2 (surface labeled "STOP" in the patent, ¶0060). At infinity focus, the gap from the stop to G3 (D(17)) is 1.30 mm, placing the stop very close to the last element of G2. The stop moves with G2 as a rigid unit during focus. This placement is characteristic of macro lenses designed for extended focus travel: by locating the stop within the moving group, the effective f-number at the stop remains constant throughout the focus range, simplifying aperture control. The production lens features a 9-blade diaphragm with stops from f/2.8 to f/22, clicking at full-stop intervals.

### Group G3 — Negative Rear Relay (Fixed)

G3 is a five-element group with net negative power ($f_{G3} = -101.6$ mm). It acts as a relay/field-correction group, taking the converging beam from G2 and redirecting it toward the sensor while correcting field curvature, astigmatism, and residual lateral color.

#### L10 — Negative Meniscus, convex to object

$n_d = 1.72916$, $\nu_d = 57.67$. Glass: **729577 — high-index lanthanum crown**, uncertain — possibly a proprietary CDGM grade. $f = -27.6$ mm.

L10 is a meniscus with both surfaces convex to the object (R1 = +70.70, R2 = +15.60), the rear being far more steeply curved, giving strong negative power. It is the first element the beam encounters after crossing the variable gap from the stop.

The glass code 729577 does not correspond precisely to any widely published CDGM catalog entry. H-LAK52 has $n_d = 1.72916$ but $\nu_d = 54.68$ — matching the refractive index exactly but not the dispersion ($\Delta\nu_d = +3.0$). Example 1 uses $\nu_d = 57.00$ at the equivalent position, further suggesting this Abbe number is a deliberate design parameter rather than a catalog standard. This may be a proprietary CDGM melt or a less-commonly-published catalog grade. The high index with moderate-to-low dispersion places it in the lanthanum crown family.

L10's strong negative power diverges the beam exiting the stop. This is essential for two reasons: it increases the back focal distance (allowing the rear element to clear the mirrorless camera mount), and it provides negative Petzval contribution to flatten the field.

#### L11 — Biconcave Negative (cemented with L12)

$n_d = 1.76182$, $\nu_d = 26.61$. Glass: S-TIH14 (OHARA) — dense flint. $f = -14.8$ mm.

L11 is a negative biconcave member, with radii −40.27 and +15.90 mm, cemented to L12. Its 1.76182/26.61 coordinate has relatively high dispersion and is modeled with the compatible S-TIH14 proxy. Its exact contribution to the complete chromatic correction requires a wavelength-dependent calculation; it is not established as a separate third leg of production APO correction.

#### L12 — Biconvex Positive (cemented with L11)

$n_d = 1.90366$, $\nu_d = 31.31$. Glass: S-LAH95 / TAFD25 class (904313) — lanthanum dense flint. $f = +10.9$ mm.

L12 is positive, with radii +15.90 and −20.92 mm and standalone focal length +10.9 mm. Its pair with L11 is net positive ($f_{D4}\approx+28.4$ mm). The high source index affects both surface power and the computed Petzval sum. S-LAH95/TAFD25-class curves are compatible modeling proxies, without establishing a production glass or an intended cost/Petzval optimization.

Both L11 and L12 have flint-like source Abbe numbers, 26.61 and 31.31. Their selected catalog curves permit a model of their differing partial dispersions. The source does not publish those spectra or isolate the pair's secondary-spectrum, coma or field-curvature correction, so those roles remain interpretations rather than measured design facts.

#### L13 — Biconcave Negative (ED)

$n_d = 1.49700$, $\nu_d = 81.61$. Glass: H-FK61 (CDGM) — ED fluorophosphate crown. $f = -25.1$ mm.

L13 is the third source ED-class coordinate assignment, used in a negative element ($R_1=-17.18$, $R_2=+46.33$ mm). In a catalog-proxy calculation, that negative power can oppose the chromatic contribution of positive ED-class L4 and L8. The patent publishes no partial dispersion, so this is a correction hypothesis rather than proof of production three-wavelength balance; its APD flag remains inferred.

#### L14 — Plano-Convex Positive

$n_d = 1.51823$, $\nu_d = 58.96$. Glass: HOYA E-C3 catalog equivalent; production supplier unspecified. $f = +51.8$ mm.

L14 is the rearmost optical element. It has a curved front surface (R = +26.85) and a flat rear surface (R = ∞), making it a plano-convex field flattener. Sitting 12.30 mm ahead of the sensor cover glass (or approximately 15.3 mm ahead of the sensor plane), it is the last refractive element the beam passes through.

L14's function is straightforward field flattening. At this position near the image plane, the beam heights are small but the chief-ray angle is significant, and L14's positive power bends the marginal and chief rays to flatten the image surface and reduce telecentricity departure. The low-index, low-dispersion E-C3-equivalent crown minimizes any chromatic disturbance introduced so close to the image.

The center thickness of L14 is 7.0 mm — relatively thick for a crown element of this diameter. This thickness likely serves both optical (allowing the curved front surface to provide adequate sag without edge-thickness violations) and mechanical purposes (providing a robust rear barrel element for the internal-focus mechanism).

---

## Glass Identification and Selection

The source supplies d-line nd/νd coordinates, rather than production glass names. Twelve of fourteen lens elements and the physical rear plate resolve to compatible catalog spectra; L3 and L10 remain unmatched. The following table lists proxy assignments and coordinate classes. Supplier, melt and actual partial dispersion are unconfirmed; the manufacturer's location does not establish glass procurement.

| Element | $n_d$ | $\nu_d$ | Catalog proxy / disposition | Curve family / vendor | Class | Coordinate status |
|---------|-------|---------|-----------------|------------|-------|------------|
| L1 | 1.61800 | 63.39 | S-PHM52 | OHARA | Phosphate crown | Compatible proxy |
| L2 | 1.60342 | 38.01 | E-F5 | HOYA | Light flint | Compatible proxy; supplier unspecified |
| L3 | 1.77250 | 53.00 | 773530 — high-index lanthanum crown | — | Lanthanum crown | Uncertain |
| L4 | 1.49700 | 81.61 | H-FK61 | S-FPL51 / FCD1 | ED fluorophosphate crown | Compatible proxy |
| L5 | 1.80518 | 25.46 | H-ZF7LA | CDGM | Dense flint | Compatible proxy |
| L6 | 1.92286 | 20.88 | H-ZF72A | N-SF66 / S-NPH2 | Super-dense flint | Compatible proxy |
| L7 | 1.80420 | 46.50 | H-ZLAF50D | CDGM | Lanthanum dense flint | Compatible proxy |
| L8 | 1.49700 | 81.61 | H-FK61 | S-FPL51 / FCD1 | ED fluorophosphate crown | Compatible proxy |
| L9 | 1.92286 | 20.88 | H-ZF72A | N-SF66 / S-NPH2 | Super-dense flint | Compatible proxy |
| L10 | 1.72916 | 57.67 | Unmatched 729577 high-index crown | — | Lanthanum crown | Prior H-LAK52 candidate rejected ($\Delta\nu_d = +3.0$) |
| L11 | 1.76182 | 26.61 | S-TIH14 | OHARA | Dense flint | Compatible proxy |
| L12 | 1.90366 | 31.31 | S-LAH95 / TAFD25 class | 904313 class | Lanthanum dense flint | Compatible proxy |
| L13 | 1.49700 | 81.61 | H-FK61 | S-FPL51 / FCD1 | ED fluorophosphate crown | Compatible proxy |
| L14 | 1.51823 | 58.96 | E-C3 | HOYA | Crown | Compatible proxy; supplier unspecified |

**Unresolved coordinates.** L3 ($n_d=1.77250$, $\nu_d=53.00$) and L10 ($n_d=1.72916$, $\nu_d=57.67$) remain source-faithful unmatched rows. Nearby catalog classes differ substantially in Abbe number and are not identities. The source does not establish whether these values represent production melts or idealized design coordinates; no supplier explanation or correction is inferred.

---

## Focus Mechanism

The lens uses **inner focus** (internal focus). Group G2 (L3–L9, seven elements) translates as a rigid unit along the optical axis while G1 (L1–L2) and G3 (L10–L14) remain fixed. This is confirmed by the patent's variable-gap table (¶0070):

| Gap | Patent Surface | Infinity ($\beta = 0$) | Close ($\beta = 1.95\times$) | Change |
|-----|----------------|----------|-------|--------|
| G1–G2 | D(3) | 36.048 mm | 1.048 mm | −35.000 mm |
| G2–G3 | D(17) | 1.300 mm | 36.300 mm | +35.000 mm |
| BFD | D(28) | 1.000 mm | 1.000 mm | 0.000 mm |

Several features are evident:

**Conservation.** The sum D(3) + D(17) = 37.348 mm at both infinity and close focus, confirming that G2's forward travel is exactly compensated by the opening gap behind it. The overall optical length remains constant — a requirement for the internal-focus mechanism to maintain a fixed barrel length.

**Travel.** G2 moves 35.0 mm forward (toward the object) to achieve 1.95× magnification from infinity. This is an exceptionally large focus travel for an internal-focus design, driven by the need to reach beyond 2:1 reproduction. The production lens specifies a minimum focus distance of 170 mm (6.7 inches) at 2:1.

**Constant BFD.** The back focal distance D(28) = 1.0 mm (from the rear of the cover glass to the sensor plane) does not change during focus. Combined with the fixed G3, this means the image-side telecentricity and field correction from G3 remain undisturbed across the entire focus range.

**Drive system.** The production lens is manual-focus only, with a helicoid barrel. The focus ring provides approximately 270° of rotation from infinity to 2×, giving fine control — essential for macro work. There is no autofocus motor. The lens is available in Fujifilm X, Sony E, Canon EF-M, Canon RF, Nikon Z, and L-mount variants, all sharing the same optical formula.

---

## Chromatic Correction Strategy

The marketed APO designation is consistent with a prescription combining four cemented doublets and three 1.49700/81.61 ED-class elements. The front crown/flint pair and G2's crown/flint pair provide substantial Abbe-number contrast for primary-color balancing. The flint/flint pairs in G2 and G3 offer further spectral degrees of freedom, while negative ED-class L13 can oppose contributions from positive L4 and L8.

These are architectural interpretations. Example 2 publishes no $n_C$, $n_F$, $n_g$, $P_{g,F}$ or Sellmeier coefficients. Catalog-proxy curves cover twelve lens elements and the rear plate, with two unresolved lens materials; neither those proxies nor the inferred APD tags certify production secondary-spectrum correction or glass cost.

## Cover Glass and BFD Convention

The patent lists a final flat plate (surfaces 27–28) with $n_d = 1.51680$, $\nu_d = 64.20$ and 2.0 mm thickness (¶0060–0061). This is consistent with a sensor cover glass (equivalent to N-BK7 / H-K9L) and is not part of the interchangeable lens optics. The data file keeps the patent's physical 12.3 mm gap from L14 to the cover glass on its final surface and models the plate itself in `rearPlates` (2.0 mm, H-K9L class, followed by the 1.0 mm D(28) gap to the image). Every analysis traces through it, but it is not drawn in the cross-section. The paraxial air-equivalent of this stack is $12.3 + 2.0/1.5168 + 1.0 \approx 14.62$ mm; the physical L14-to-image distance is 15.3 mm, 0.68 mm longer.

---

## Verification Summary

Independent paraxial ray trace of the Example 2 prescription confirms:

| Parameter | Computed | Patent | Match |
|-----------|----------|--------|-------|
| System EFL | 66.024 mm | 66.0242 mm (¶0067) | ✓ ($\Delta = 0.0003$ mm) |
| Conditional (1): $\|F_2/F_3\|$ | 0.337 | 0.333 (¶0072) | ✓ |
| Conditional (2): $\|FL/S_2\|$ | 1.886 | 1.886 (¶0072) | ✓ |
| Conditional (3): $FL/F_2$ | 1.929 | 1.928 (¶0072) | ✓ |
| Conditional (4): $L/(A_t \times FL)$ | 0.867 | 0.867 (¶0072) | ✓ |
| Variable gap conservation | 37.348 = 37.348 | — | ✓ |
| Petzval sum ($\Sigma P$) | +0.00307 mm$^{-1}$ | — | — |
| Petzval radius | −325 mm | — | — |

The small discrepancy in conditional (1) (0.337 vs 0.333) arises from using the group focal length with slightly different air-gap boundary definitions; the patent likely uses the thin-lens group approximation. All conditional expressions from the patent claims (¶0008–0010, ¶0017, ¶0022) are satisfied.

---

## Sources

1. CN 110161666A, "一种高倍率微距镜头," filed 2019-05-20, published 2019-08-23. 安徽长庚光学科技有限公司 (Anhui Changeng Optical Technology Co., Ltd.), inventor 李大勇.
2. [Laowa product page, "Laowa 65mm f/2.8 2X Ultra-Macro APO."](https://www.venuslens.net/product/laowa-65mm-f-2-8-2x-ultra-macro-apo/)
3. Digital Camera World, "Laowa 65mm f/2.8 2x Ultra Macro APO review," March 2020.
4. CDGM glass catalog data accessed via refractiveindex.info (Zemax catalog 2022-06) and sinoptix.eu glass equivalency tables.
5. Hoya Glass Cross Reference Index, https://www.hoya-opticalworld.com/english/products/crossreference.html

Example 2 Figure 3 (PDF p. 12) now supplies concave cap-end lands on S17 and S18, with inferred cut depths 1.57 and 0.57 mm (clear radii 6.820 and 6.751 mm). Both clear the complete traced wide-open beams and required margins. S21 preserves its existing 8.5 mm cap with an opaque extension to the 9 mm outer rim. A proposed S8 trim was rejected because the traced beam reaches its full 9.5 mm cap; all remaining air and cemented faces retain their geometry.
