## Patent Reference and Design Identification

**Patent:** US 2025/0389929 A1
**Application Number:** 19/243,548
**Filed:** Jun. 19, 2025
**Published:** Dec. 25, 2025
**Priority:** JP 2024-101168, Jun. 24, 2024
**Inventor:** Takahiro Saito (Tochigi, JP)
**Applicant:** Canon Kabushiki Kaisha (Tokyo, JP)
**Title:** Optical System and Imaging Apparatus Including Same
**Embodiment analyzed:** Numerical Example 2 (FIG. 3; aberration diagrams FIGS. 4A/4B)

The patent discloses seven numerical examples spanning roughly 14–24 mm wide-angle mirrorless-camera objectives. All share a three-group (L1–L2–L3) architecture with inner focus via L2; L1 and L2 are positive in every example, while L3 is negative in six of seven examples (Example 6 alone has a weakly positive L3). Example 2 is identified as the Canon RF 20mm F1.4 L VCM on the following convergent evidence:

1. **Focal length.** Patent 20.60 mm; Canon specifies 20 mm.
2. **Maximum aperture.** Patent F/1.46; Canon specifies f/1.4.
3. **Element and group count.** Patent prescription contains 16 individual optical members in 11 air-separated groups. Canon specifies 15 elements in 11 groups. The difference of one is accounted for by G9, a 0.70 mm thick Canon BR (Blue Spectrum Refractive) organic layer (nd = 1.57060, νd = 20.1) that the patent counts as a separate lens but Canon marketing does not count as a discrete element.
4. **Special-element count.** The prescription contains exactly 1× Super UD glass (G3, νd = 94.7), 2× UD glasses (G11 and G13, both νd = 81.7), 1× BR organic element (G9), and 2× GMo (glass-molded) aspherical elements (G2 with one aspherical surface, G14 with two aspherical surfaces — three aspherical surfaces total on two elements). Canon specifies 1× Super UD, 2× UD, 1× BR, 2× GMo Aspherical.
5. **Field coverage.** Patent Example 2 is tabulated at image height 18.90 mm and half-field angle 42.54°. This is slightly wider than the 18.00 mm full-frame horizontal semiformat, but it is not the 21.64 mm full-frame diagonal semiformat. Canon's production specifications nevertheless state full-frame coverage and a 94° diagonal angle of view; this is treated as an identification caveat rather than a direct patent diagonal-field match.
6. **Focus type.** L2 moves toward the object during close focusing; L1 and L3 remain stationary (¶0032, ¶0137). Canon specifies inner focus with a Voice Coil Motor (VCM).
7. **No optical image stabilization.** The patent does not describe an IS group for this embodiment, consistent with the production lens (IBIS only, no in-lens OIS).
8. **Patent timing.** Priority June 24, 2024; the lens was announced in March 2025. This timeline is typical for Canon L-series filings.

No other example in this patent matches the production lens. Examples 1 and 5 have f = 14.42 mm (14 mm class). Example 3 has f = 20.60 mm but F/1.85. Example 7 has f = 20.44 mm at F/1.85 with a different element configuration. Example 4 has f = 24 mm. Example 6 has f = 20.6 mm at F/1.50 with a positive L3. Only Example 2 matches the production specification across all criteria simultaneously.

## Optical Architecture

The RF 20mm F1.4 L VCM is a negative-front wide-angle design comprising 16 optical members (15 elements in Canon's marketing count, excluding the BR layer) in 11 air-separated groups. It is not a strict retrofocus design: Example 2 has an air-equivalent back focus of 18.44 mm against f = 20.60 mm, so sk/f = 0.895 rather than greater than 1. The design is divided into three lens groups:

**L1 (front group, positive, f₁ = 45.15 mm):** Surfaces 1–18, containing G1 through G10. This group collects the wide-angle field (half-angle 42.54°) and delivers a converging beam to L2. It includes three negative meniscus lenses closest to the object (G1, G2, G3), a cemented doublet (G4+G5), a strong equi-biconvex element (G6), a negative meniscus (G7), a cemented triplet containing the BR element (G8+G9+G10), and the aperture stop (surface 14). The stop is located inside L1, between G7 and the cemented triplet (¶0046, ¶0121).

**L2 (focus group, positive, f₂ = 32.25 mm):** Surfaces 19–25, containing G11 through G14. This group moves 1.61 mm toward the object when focusing from infinity to β = −0.1. It contains a cemented doublet (G11+G12), a biconvex singlet (G13), and a biconvex doubly-aspherical element (G14). The concave object-side surface of the lens closest to the object plane in L2 makes the off-axis beam substantially concentric to the surface, reducing variations in astigmatism, coma, and angle of view during focusing (¶0047, ¶0169).

**L3 (rear group, negative, f₃ = −85.88 mm):** Surfaces 26–28, a single cemented doublet (G15+G16). This group acts as a negative field flattener, increasing the exit angle of off-axis rays toward the image plane and reducing the diameter of L3 (¶0049, ¶0152). The negative lens closest to the image plane assists Petzval-sum correction.

The three consecutively arranged negative lenses at the front of L1 (G1, G2, G3) are a defining feature of the patent claims (Claim 1, ¶0042). Distributing the negative refractive power among three elements suppresses barrel distortion and field curvature that would otherwise dominate at 20 mm and f/1.4 (¶0043). The patent notes that no positive lens is disposed between these three negative elements (¶0043), preserving a continuously diverging front section that helps maintain adequate rear clearance for a short-flange mirrorless mount.

## Element-by-Element Analysis

### G1 — Negative Meniscus, convex to object

nd = 1.60311, νd = 60.6. Glass: S-BSM14 (Ohara) — dense barium crown. f = −53.14 mm.

The outermost element collects the ultra-wide field evaluated by the patent at 42.54° half field; the production lens is specified for a 94° diagonal full-frame angle of view. Its meniscus form with the convex surface toward the object provides negative power while controlling the angle of incidence of off-axis rays on the steep rear surface. The moderate-index crown glass keeps the element lightweight at the large front diameter.

### G2 — Negative Meniscus (Asph rear), convex to object

nd = 1.58313, νd = 59.4. Glass: J-SK12 (Hikari) — barium crown. f = −83.73 mm. Surface 4 is aspherical (K = −4.88704; coefficients through A14).

G2 is one of the two GMo aspherical elements. Its rear surface carries a strong negative conic (K ≈ −4.89), which flattens the peripheral curvature relative to the paraxial zone. The aspherical departure corrects distortion and astigmatism across the wide field (¶0154). The choice of a Hikari barium crown — closely matched to Ohara S-BSM14 in index but slightly softer — may reflect moldability requirements for glass-molded asphere production.

### G3 — Negative Meniscus, concave to object (convex to image)

nd = 1.43875, νd = 94.7. Glass: S-FPL55 (Ohara) — fluorophosphate, Canon Super UD designation. f = −70.04 mm.

The third of the three consecutive front negative lenses, and the only Super UD element in the design. Its extremely low dispersion (νd = 94.7) provides strong negative chromatic contribution that opposes the positive chromatic aberration of the downstream high-index positive elements. The concave object-side surface (¶0155) increases the negative air-lens power formed between G2 and G3, contributing to Petzval-sum reduction.

### G4+G5 — Cemented Doublet (positive net, f = +56.66 mm)

**G4** — Biconvex positive. nd = 1.75500, νd = 52.3. Glass: H-LaK53A (CDGM) — lanthanum crown. f = +24.46 mm.

**G5** — Negative meniscus, concave to object. nd = 1.85478, νd = 24.8. Glass: S-NBH56 (Ohara) — dense niobium flint. f = −42.84 mm. θgF = 0.6122 (patent Table 2).

This cemented pair forms a classic crown–flint achromatic doublet. The high-index lanthanum crown of G4 provides strong positive power in a compact form. G5 serves as the achromatizing partner and is one of the negative lenses Gn satisfying conditional expressions (6) and (7) for g-line chromatic correction. Its anomalous partial dispersion deviation ΔθgFn ≈ 0.0000 — essentially on the Schott normal line — provides classical achromatic correction without over- or under-correcting on the g-line (¶0079–¶0084).

### G6 — Equi-Biconvex Positive

nd = 1.90043, νd = 37.4. Glass: TAFD37A (Hoya) — dense tantalum flint. f = +40.12 mm.

An equi-biconvex element (|R₁| = |R₂| = 70.946 mm) providing strong positive power. The nd = 1.90 index is among the highest in the design, enabling the element to bend rays strongly while keeping surface curvatures moderate. The symmetric biconvex form distributes refraction equally between the two surfaces.

### G7 — Negative Meniscus, convex to object

nd = 1.54072, νd = 47.2. Glass: S-TIL2 (Ohara) — light titanium flint. f = −129.29 mm.

A weakly negative meniscus placed immediately before the aperture stop. Its low index and moderate dispersion contribute a gentle negative power step that fine-tunes the Petzval sum without introducing significant chromatic imbalance.

### G8+G9+G10 — Cemented Triplet (weakly positive net, f = +229.45 mm)

**G8** — Biconvex positive. nd = 2.00069, νd = 25.5. Glass: TAFD40-W (Hoya) — ultra-dense tantalum flint. f = +51.55 mm.

**G9** — Meniscus, concave to object, weakly positive. nd = 1.57060, νd = 20.1. Glass: Unmatched — Canon BR (Blue Spectrum Refractive) organic material. f = +304.54 mm. θgF = 0.7782 (patent Table 2).

**G10** — Biconcave negative. nd = 1.66565, νd = 35.6. Glass: H-ZBaF4 (CDGM), Close match (Δnd = +0.00139, Δνd = +0.13). f = −53.51 mm. θgF = 0.5824 (patent Table 2).

This cemented triplet is the chromatic correction heart of the design. G8, at nd = 2.00069, is the highest-index element in the system, contributing powerful positive refraction while its ultra-high dispersion (νd = 25.5) would normally produce severe axial chromatic aberration. The BR organic layer G9 — a 0.70 mm thick layer with anomalous partial dispersion (ΔθgFp = +0.1443, satisfying conditional expression (15): 0.050 < ΔθgFp < 0.250) — selectively converges shorter wavelengths toward the g-line, compensating for the excessive secondary spectrum that primary achromatization alone cannot correct (¶0085–¶0086, ¶0115–¶0119). G10 is the negative achromatizing partner, satisfying both CE(6) (ΔθgFn = −0.0026) and CE(7) (Ndn line value = −0.1033), within the prescribed ranges.

The triplet is located on the image side of the aperture stop and remains stationary during focusing (¶0121, ¶0122). Its placement where the axial ray height is large enhances its chromatic correction effectiveness.

### G11+G12 — Cemented Doublet (negative net, f = −39.79 mm)

**G11** — Positive meniscus, concave to object. nd = 1.49700, νd = 81.7. Glass: J-FK01A (Hikari) — fluorophosphate, Canon UD designation. f = +61.63 mm.

**G12** — Negative meniscus, concave to object. nd = 1.77047, νd = 29.7. Glass: NBFD29 (Hoya) — niobium dense flint. f = −25.49 mm. θgF = 0.5951 (patent Table 2).

This doublet is the first element of focus group L2, located closest to the object plane within L2. Its concave object-side surface creates a substantially concentric configuration with respect to the off-axis beam incident from L1, reducing astigmatism, coma, and angle-of-view variations during focusing (¶0047, ¶0162, ¶0166). G12 is a negative lens Gn satisfying CE(6) (ΔθgFn = −0.0047) and CE(7), providing chromatic correction within the moving focus group to reduce variations in axial chromatic aberration during focusing (¶0089, ¶0163). G11 carries the UD classification (νd = 81.7 satisfies CE(12): 60.00 < νd2p < 100.00), contributing to magnification chromatic aberration correction.

### G13 — Biconvex Positive

nd = 1.49700, νd = 81.7. Glass: J-FK01A (Hikari) — fluorophosphate, Canon UD designation. f = +38.67 mm.

The second UD element, providing positive power in L2 with low dispersion. The biconvex form distributes refraction across both surfaces. The fluorophosphate glass matches G11, simplifying manufacturing logistics while maintaining the low-dispersion character needed throughout the focus group.

### G14 — Biconvex Positive (both surfaces aspherical)

nd = 1.80400, νd = 46.5. Glass: S-LAH65VS (Ohara) — dense lanthanum flint. f = +42.45 mm. Surfaces 24 and 25 are both aspherical (K = 0 on both; polynomial coefficients through A12).

The second GMo aspherical element, and the only element with two aspherical surfaces. Although it is a positive element, νd = 46.5 places S-LAH65VS on the dense lanthanum-flint side of the crown/flint boundary, not among ordinary crowns. Located at the rear of L2, it corrects spherical aberration, astigmatism, and coma generated by the fast f/1.4 beam converging toward the image plane (¶0170). The patent notes that configuring one of the positive-lens surfaces in L2 as aspherical is preferred for reducing surface-shape errors during molding (¶0170).

### G15+G16 — Cemented Doublet (L3, negative net, f = −85.88 mm)

**G15** — Biconvex positive (near plano-convex). nd = 1.59282, νd = 68.6. Glass: FCD515 (Hoya) — fluorophosphate crown. f = +46.39 mm.

**G16** — Biconcave negative. nd = 1.66565, νd = 35.6. Glass: H-ZBaF4 (CDGM), Close match (Δnd = +0.00139, Δνd = +0.13). f = −29.75 mm.

L3 consists of this single cemented doublet acting as a negative field-flattening group. The positive element G15 uses a mid-dispersion fluorophosphate crown, while G16 (same glass as G10) provides the dominant negative power. The negative net focal length of L3 increases the exit angle of off-axis rays, reducing the required diameter of L3 (¶0049) and contributing to the compact 76.5 × 99.3 mm form factor. The Petzval contribution of this negative rear group partially cancels the positive Petzval sum of L1+L2, yielding a computed system Petzval radius of approximately 443 mm.

## Glass Identification and Selection

Glass identification was checked against manufacturer catalog data from Ohara, Hoya, Schott, Sumita, Hikari, and CDGM using nd/νd matching at the d-line (587.6 nm). The identifications below are catalog matches or explicitly marked unmatched/close; the Canon BR layer remains proprietary and unmatched.

| Element | nd | νd | Best Match | Catalog | Δnd | Δνd | Label |
|---|---|---|---|---|---|---|---|
| G1 | 1.60311 | 60.6 | S-BSM14 | Ohara | 0.00000 | −0.02 | Exact |
| G2 | 1.58313 | 59.4 | J-SK12 | Hikari | 0.00000 | 0.00 | Exact |
| G3 | 1.43875 | 94.7 | S-FPL55 | Ohara | 0.00000 | +0.08 | Exact |
| G4 | 1.75500 | 52.3 | H-LaK53A | CDGM | 0.00000 | 0.00 | Exact |
| G5 | 1.85478 | 24.8 | S-NBH56 | Ohara | 0.00001 | +0.01 | Exact |
| G6 | 1.90043 | 37.4 | TAFD37A | Hoya | 0.00000 | +0.04 | Exact |
| G7 | 1.54072 | 47.2 | S-TIL2 | Ohara | 0.00000 | −0.01 | Exact |
| G8 | 2.00069 | 25.5 | TAFD40-W | Hoya | 0.00000 | +0.05 | Exact |
| G9 | 1.57060 | 20.1 | — | — | — | — | Unmatched (Canon BR organic) |
| G10 | 1.66565 | 35.6 | H-ZBaF4 | CDGM | +0.00139 | +0.13 | Close |
| G11 | 1.49700 | 81.7 | J-FK01A | Hikari | 0.00000 | +0.09 | Exact |
| G12 | 1.77047 | 29.7 | NBFD29 | Hoya | 0.00001 | −0.02 | Exact |
| G13 | 1.49700 | 81.7 | J-FK01A | Hikari | 0.00000 | +0.09 | Exact |
| G14 | 1.80400 | 46.5 | S-LAH65VS | Ohara | 0.00000 | −0.01 | Exact — dense lanthanum flint |
| G15 | 1.59282 | 68.6 | FCD515 | Hoya | 0.00000 | 0.00 | Exact |
| G16 | 1.66565 | 35.6 | H-ZBaF4 | CDGM | +0.00139 | +0.13 | Close |

The glass palette draws from four vendors (Ohara, Hoya, Hikari, CDGM), with no Schott or Sumita glasses identified. Fourteen of sixteen elements yield exact or near-exact catalog matches. G9 is the Canon BR organic proprietary material with no catalog equivalent. G10 and G16 share the same glass code (nd = 1.66565, νd = 35.6); H-ZBaF4 from CDGM is the closest match, labeled Close due to a +0.00139 index residual.

Canon's published special-element designations map onto the prescription as follows (element positions are inferred from glass identity):

- **Super UD:** G3 (S-FPL55, νd = 94.7) — 1 element, matching Canon's specification of 1× Super UD.
- **UD:** G11 and G13 (both J-FK01A, νd = 81.7) — 2 elements, matching Canon's specification of 2× UD.
- **BR:** G9 (organic, νd = 20.1) — 1 element, matching Canon's specification of 1× BR.
- **GMo Aspherical:** G2 (1 aspherical surface) and G14 (2 aspherical surfaces) — 2 elements, matching Canon's specification of 2× GMo Aspherical.

## Focus Mechanism

The lens employs inner focusing via L2 (G11–G14), driven by a Voice Coil Motor (VCM). L1 and L3 remain stationary with respect to the image plane during focusing (¶0032).

| Parameter | Infinity | β = −0.1 |
|---|---|---|
| Object distance from S1 | ∞ | 300.024 mm |
| d18 (L1–L2 gap) | 9.05 mm | 7.44 mm |
| d25 (L2–L3 gap) | 2.20 mm | 3.81 mm |
| Total optical length | 117.50 mm | 117.50 mm |

L2 moves 1.61 mm toward the object from infinity to β = −0.1. The gap changes are exactly complementary (Δd18 = −1.61, Δd25 = +1.61), confirming that L1 and L3 are stationary and total track is invariant. The patent's Table 1 value M₂ = −1.614 mm represents L2's focus travel (negative sign indicating movement toward the object side per ¶0108).

Canon specifies a minimum focusing distance of 0.20 m with 0.19× maximum magnification. The patent's close-focus conjugate at β = −0.1 places the object plane 300.024 mm in front of the first surface, or about 417.5 mm from the patent image plane when the 117.50 mm total optical length is included. Canon's production specification of 0.20 m with 0.19× maximum magnification is therefore substantially closer than the patent's tabulated finite-conjugate state.

## Aspherical Surfaces

Three aspherical surfaces appear on two elements, both manufactured as glass-molded (GMo) aspheres. The patent's aspherical sag equation (¶0176) is:

$$x = \frac{(h^2/R)}{1 + \sqrt{1 - (1+K)(h/R)^2}} + A4 \cdot h^4 + A6 \cdot h^6 + A8 \cdot h^8 + A10 \cdot h^{10} + A12 \cdot h^{12} + A14 \cdot h^{14} + A16 \cdot h^{16}$$

where $x$ is the sag from the vertex, $h$ is the radial height, $R$ is the paraxial radius of curvature, $K$ is the conic constant, and $A4$–$A16$ are the aspherical coefficients. The conic constant convention is standard (K = 0 for a sphere).

**Surface 4 (G2 rear):** R = 17.890 mm, K = −4.88704. Coefficients: A4 = 9.85206e−05, A6 = −4.60796e−07, A8 = 2.61477e−09, A10 = −1.06987e−11, A12 = 2.62680e−14, A14 = −2.76184e−17. The strong negative conic (K ≈ −4.89, hyperbolic departure) significantly flattens the surface at the periphery, correcting distortion and astigmatism across the wide field. At the data-file semi-diameter h = 13.8 mm, the verified total sag is 5.927 mm, or −0.579 mm relative to the best-fit spherical base at the same radius.

**Surface 24 (G14 front):** R = 87.489 mm, K = 0. Coefficients: A4 = −8.28107e−06, A6 = 7.81678e−09, A8 = −5.60781e−11, A10 = 2.06771e−13, A12 = −4.03084e−16. The negative A4 on this weakly curved converging surface flattens the outer zones, correcting residual spherical aberration from the fast f/1.4 beam. At h = 18.0 mm, surface 24 has a verified departure of −0.949 mm relative to its spherical base.

**Surface 25 (G14 rear):** R = −54.320 mm, K = 0. Coefficients: A4 = 6.09726e−06, A6 = 5.11495e−09, A8 = −1.22444e−11, A10 = 1.38078e−13, A12 = −2.89951e−16. The positive A4 term adds curvature at the periphery of this diverging surface, working in concert with surface 24 to balance higher-order spherical aberration and coma. At h = 18.0 mm, surface 25 has a verified departure of +0.837 mm relative to its spherical base.

## Chromatic Correction Strategy

The design employs a multi-layered chromatic correction approach spanning all three lens groups, with particular emphasis on controlling axial chromatic aberration on the g-line — a challenge noted in the patent as characteristic of large-diameter lenses (¶0085).

**Primary achromatization** is provided by conventional crown–flint cementing: the G4+G5 doublet in L1, the G11+G12 doublet in L2, and the G15+G16 doublet in L3.

**Secondary-spectrum correction on the g-line** is addressed through two mechanisms. First, negative lenses Gn satisfying conditional expressions (6) and (7) are distributed across both L1 and L2: G5 and G10 in L1, and G12 in L2 (¶0086–¶0088). These lenses have low anomalous partial dispersion (|ΔθgFn| < 0.015 for all three), meaning they lie close to the Schott normal line and do not over-correct on the g-line. Second, the BR element G9 — with its strongly anomalous positive partial dispersion (ΔθgFp = +0.1443) — selectively converges g-line radiation that would otherwise diverge excessively through the triplet. The patent characterizes this as enabling favorable correction of excessive axial chromatic aberration at shorter wavelengths (¶0116–¶0119).

**Low-dispersion elements** (G3 Super UD, G11 and G13 UD) carry the positive refractive power needed for image formation while contributing minimal chromatic aberration of their own. The Super UD glass S-FPL55 (νd = 94.7) in G3 is placed at the front of L1 where it can influence both axial and lateral chromatic aberration across the full field.

No apochromatic claim is made for this design. While the BR element provides g-line correction beyond what classical achromatization achieves, the patent does not publish sufficient ΔPg,F data across enough elements to confirm three-wavelength apochromatic convergence.

## Conditional Expressions

The patent defines 17 conditional expressions (¶0034–¶0128) governing the optical system's architecture. Example 2 satisfies all applicable expressions. Values were independently computed and cross-checked against Table 1:

| CE | Expression | Computed | Patent (Table 1) | Range |
|---|---|---|---|---|
| (1) | $f_2 / f$ | 1.566 | 1.566 | 0.50 – 3.00 |
| (2) | $sk / f$ | 0.895 | 0.895 | 0.20 – 1.20 |
| (3) | $f_1 / f_2$ | 1.400 | 1.400 | 0.30 – 3.00 |
| (4) | $f / f_3$ | −0.240 | −0.240 | −1.50 – 1.50 |
| (5) | $(R_{22} - R_{21}) / (R_{22} + R_{21})$ | 0.261 | 0.261 | −1.50 – 1.50 |
| (8) | $(1 - \beta_2^2) \times \beta_3^2$ | 1.249 | 1.249 | 0.50 – 2.50 |
| (9) | $sk / |f_3|$ | 0.215 | 0.215 | 0.00 – 0.80 |
| (10) | $\Sigma D_{air} / (L - sk)$ | 0.450 | 0.450 | 0.20 – 0.70 |
| (11) | $L / f$ | 5.704 | 5.704 | 2.00 – 15.00 |
| (13) | $M_2 / D_{SP}$ | −0.032 | −0.032 | −0.200 – −0.005 |
| (16) | $(D_{SP} + sk) / L$ | 0.581 | 0.581 | 0.30 – 0.80 |
| (17) | $f_1 / f$ | 2.192 | 2.192 | 0.50 – 5.00 |

Conditional expressions (6), (7), (12), (14), and (15) are glass-property expressions evaluated per element rather than per system. Their satisfaction was verified from Table 2 values:

- **CE(6)** ΔθgFn: G5 = 0.0000, G10 = −0.0025, G12 = −0.0047 — all within (−0.015, 0.015). ✓
- **CE(7)** Ndn line: G5 = −0.07182, G10 = −0.10331, G12 = −0.08434 — all within (−0.20, 0.05). ✓
- **CE(12)** νd2p (positive lens G2p in L2): G11 = 81.65, G13 = 81.65 — both within (60.00, 100.00). ✓
- **CE(14)** νd1n (negative lens G1n in L1): G3 = 94.66 (from Table 2 data) — within (60.00, 100.00). ✓
- **CE(15)** ΔθgFp (positive lens Gp): G9 = 0.14427 — within (0.050, 0.250). ✓

Expressions (8) and (13) depend on finite-ray quantities (β₂, β₃, M₂) that are not recoverable from a paraxial trace; the values above are reported on the patent's authority from Table 1.

## Verification Summary

Independent y-nu paraxial ray traces confirm the patent's stated values to within rounding tolerance:

| Quantity | Computed | Patent | Δ |
|---|---|---|---|
| System EFL | 20.598 mm | 20.600 mm | 0.002 |
| L1 focal length | 45.14 mm | 45.15 mm | 0.01 |
| L2 focal length | 32.25 mm | 32.25 mm | 0.00 |
| L3 focal length | −85.88 mm | −85.88 mm | 0.00 |
| Total track | 117.50 mm | 117.50 mm | 0.00 |
| Back focal distance | 18.44 mm | 18.44 mm | 0.00 |
| Half-field angle | 42.54° | 42.54° | 0.00 |
| Petzval sum | 0.002258 | — | — |
| Petzval radius | 442.9 mm | — | — |

The data file uses inferred, renderer-conservative semi-diameters because the patent does not publish clear apertures. The chosen values were checked by code against sd/|R| and aspherical slope limits, edge thickness ≥ 0.30 mm, element front/rear semi-diameter ratio ≤ 1.25, and signed cross-gap sag intrusion ≤ 90% of the adjacent air gap. They should not be read as patent-published clear apertures or Canon production mechanical diameters.

All 16 individual element focal lengths were independently verified to ≤ 0.01 mm agreement with the patent's single-lens data table. One OCR discrepancy was detected and corrected during extraction: G10's focal length read as "−51.51" in OCR text but is clearly "−53.51" on the rasterized page 30 image, matching the independent computation of −53.51 mm.

All 12 system-level conditional expressions match Table 1 exactly. All glass-property conditional expressions (6), (7), (12), (14), (15) are satisfied for the identified elements per Table 2. Focus kinematics are self-consistent: the sum of variable-gap changes is exactly zero, confirming L1 and L3 stationarity.

## Design Heritage and Context

The RF 20mm F1.4 L VCM is part of Canon's L VCM hybrid prime series, which also includes the RF 24mm, 28mm, and 35mm f/1.4L VCM lenses. The VCM designation refers to a Voice Coil Motor focus actuator, offering fast, quiet autofocus optimized for hybrid photo/video use. The lens includes an iris ring for direct manual aperture control during video recording.

The three-consecutive-negative-front-element architecture builds on Canon's tradition of ultra-wide negative-front designs but is distinct from the earlier EF 20mm f/2.8 USM (which used a simpler negative–positive–negative front group). The incorporation of a BR element into an f/1.4 ultra-wide is notable for addressing secondary spectrum at a focal length and aperture where g-line chromatic aberration is particularly challenging.

The patent's prior-art reference to JP 2023-008471 (¶0002) describes a three-group all-positive architecture whose focus group has limited refractive power, resulting in difficulty focusing at close distances and correcting aberrations during focusing (¶0050). The present design addresses these limitations with a stronger positive L2 and a negative L3 that assists field-curvature correction.

## Sources

- US 2025/0389929 A1, "Optical System and Imaging Apparatus Including Same," Saito, Canon Kabushiki Kaisha, published Dec. 25, 2025. Primary source for all prescription data, conditional expressions, and design rationale.
- Canon official specifications: Canon's regional RF 20mm F1.4L VCM specification pages. Source for production full-frame coverage, 84°/62°/94° angle of view, 15/11 element-group count, 1× Super UD / 2× UD / 1× BR / 2× GMo special optics, 0.20 m MFD, 0.19× maximum magnification, 11-blade diaphragm, and absence of optical image stabilization.
- Glass catalogs: Ohara (S-BSM14, S-FPL55, S-NBH56, S-TIL2, S-LAH65VS), Hoya (TAFD37A, TAFD40-W, NBFD29, FCD515), Hikari (J-SK12, J-FK01A), CDGM (H-LaK53A, H-ZBaF4). Accessed via the `opticalglass` Python library for catalog cross-referencing.
