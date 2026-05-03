# Sony Sonnar T* FE 35mm F2.8 ZA — Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP 2015-41012 A (P2015-41012A), "インナーフォーカス式レンズおよび撮像装置" (Inner Focus Lens and Imaging Device).
**Applicants:** Tamron Co., Ltd. (Saitama) and Sony Corporation (Tokyo).
**Inventor:** Takahiko Sakai (坂井 隆彦).
**Filed:** August 22, 2013 (特願2013-172618). **Published:** March 2, 2015.

The prescription used is **Example 1** (実施例1, ¶0072–0086), which corresponds to the production Sony Sonnar T\* FE 35mm F2.8 ZA (model SEL35F28Z). The identification rests on the following convergent evidence:

1. **Element and group count.** Example 1 contains seven elements in three functional lens groups (¶0072–0075). When counted by air-separated groups — splitting G1 at the aperture stop — this becomes seven elements in five groups, matching Sony's published specification.
2. **Focal length and aperture.** The patent states $f = 36.06$ mm and $F_{\text{no}} = 2.884$ (¶0080). The production lens is marketed as 35 mm f/2.8.
3. **Three double-sided aspherical elements.** Elements L113, L121, and L133 each carry aspheric profiles on both surfaces (¶0073–0075). Sony's product literature specifies "three double-sided aspherical elements."
4. **Close focus distance.** Example 1 tabulates variable spacings at an object distance of 350 mm (¶0079). The production lens has a minimum focus distance of 0.35 m.
5. **Image circle.** The patent specifies an image height $Y = 21.6$ mm (¶0080), consistent with a 43.2 mm image circle covering the full 35 mm format (36 × 24 mm sensor diagonal = 43.27 mm).
6. **Internal focusing with single-element focus group.** The second lens group (G12) is a single negative element that moves from object to image to focus (¶0074), consistent with Sony's specification of an internal focus mechanism with linear AF motor.
7. **Patent timing.** Filed August 2013, preceding the lens's commercial announcement alongside the Sony α7 and α7R in October 2013.

The joint filing by Tamron and Sony reflects their cooperative development arrangement; Tamron designed and manufactured the optical assembly.

## Optical Architecture

The design is a compact three-group inner-focus wide-angle prime of the form positive–negative–positive. The patent describes the groups as:

- **G1** (positive, fixed): Three elements — a cemented negative–positive doublet (L111 + L112), the aperture stop, and a biconvex positive singlet (L113). G1 serves as both the front collector and the primary power group. The aperture stop sits within G1, between the cemented doublet and the biconvex singlet.
- **G2** (negative, focus): A single negative meniscus (L121), convex to the object, with both surfaces aspherical. G2 moves from object toward image during focus from infinity to close distance. Its light weight (a single element of moderate-index crown glass) enables fast, quiet AF and wobbling for video applications.
- **G3** (positive, fixed): Three elements — a cemented positive–negative doublet (L131 + L132) followed by a negative meniscus field flattener (L133) with both surfaces aspherical. G3 acts as the relay and field-correcting group.

In terms of air-separated groups — the conventional optics industry count — G1 splits into two groups at the stop, giving five total groups. Sony's published specification of 7 elements / 5 groups aligns with this count.

The overall power distribution places the majority of positive power in G1 ($f_{\text{G1}} \approx +21.4$ mm) and G3 ($f_{\text{G3}} \approx +62.5$ mm), with G2 contributing negative power ($f_{\text{G2}} \approx -27.8$ mm; patent states $f_2 = -27.55$ mm at ¶0084). The total optical track from the first vertex to the image plane is 47.58 mm, yielding a track-to-focal-length ratio of approximately 1.32 — remarkably compact for a 35 mm full-frame lens.

The back focal distance of 20.03 mm exceeds the Sony E-mount flange distance of 18.0 mm, providing adequate mechanical clearance without requiring a retrofocus (inverted telephoto) configuration. The ratio $\text{BFD}/\text{EFL} = 0.556$ confirms that this is not a retrofocus design; the back focus is shorter than the focal length.

The system Petzval sum is $0.00258\;\text{mm}^{-1}$, corresponding to a Petzval radius of approximately $388$ mm — well-corrected for a 35 mm f/2.8 prime. The dominant field-flattening contribution comes from L133: its front surface (r12, $R = -10.55$ mm) contributes $-0.0384\;\text{mm}^{-1}$ to the Petzval sum, the largest single-surface contribution in the system. Without L133, the Petzval sum of the preceding twelve surfaces would be approximately $+0.012\;\text{mm}^{-1}$ (radius ~$80$ mm), which would produce pronounced inward field curvature. L133's role as a Petzval flattener is thus essential to the design's ability to cover the full 43 mm image circle with acceptable field flatness.

The design invokes the Sonnar heritage primarily through its rear-heavy power distribution and use of a thick cemented doublet in G3, which recalls the original Bertele Sonnar's strategy of minimizing air–glass surfaces through cementation. The three-group positive–negative–positive inner-focus architecture with PGM aspherical elements, however, is a thoroughly modern construction optimized for AF and video wobbling, distinct from the classical Sonnar's cemented-multiplet architecture.

## Element-by-Element Analysis

### L111 — Negative Meniscus, Concave to Object

$n_d = 1.80$, $\nu_d = 25.46$. Glass: dense flint, 800/255 class — S-TIH6 (OHARA) or FD60 (Hoya). $f = -39.8$ mm.

L111 is the first optical surface the incoming light encounters. It is a thin negative meniscus ($d = 0.80$ mm) with its concave side facing the object ($R_1 = -23.10$ mm, $R_2 = -85.23$ mm). Its strong negative curvature on the front surface serves two functions: it diverges the incoming ray bundle to establish a wide field of view, and it introduces negative Petzval contribution that helps flatten the field. The patent identifies $r_1/f = -0.64$ (¶0086), falling within the conditional expression (6) range of $-1.96 \leq r_1/f \leq -0.38$ (¶0049), which governs the balance between field curvature correction and element diameter.

The high-dispersion flint glass ($\nu_d = 25.46$) pairs chromatically with the adjacent lower-dispersion L112, forming an achromatic cemented doublet.

### L112 — Positive Meniscus, Concave to Object (Cemented to L111)

$n_d = 1.83$, $\nu_d = 42.72$. Glass: high-index lanthanum (LASF class), 830/427 — S-LAH55V (OHARA) or TAFD5F (Hoya). $f = +99.9$ mm.

L112 is cemented to L111, sharing the junction surface at $R_2 = -85.23$ mm. It is a weakly positive meniscus ($R_1 = -85.23$ mm, $R_2 = -42.36$ mm), with both surfaces concave to the object. Its primary role is to provide partial achromatic correction in partnership with L111, while adding moderate positive power to the front group. The large Abbe number difference ($\Delta\nu_d = 42.72 - 25.46 = 17.26$) between L112 and L111 provides the dispersion lever for longitudinal chromatic aberration correction.

The use of a high-index lanthanum glass ($n_d = 1.83$) minimizes the curvatures required to achieve the target power, which in turn reduces higher-order spherical and coma contributions from this junction.

The cemented doublet L111 + L112 has a combined focal length of approximately $-68.8$ mm, net negative. This negative-leading front subgroup is characteristic of wide-angle designs; it provides the divergence needed to achieve the $2\omega \approx 62.6°$ field angle.

### Aperture Stop (S)

The aperture stop is positioned in the air space between the cemented doublet and L113, at surface r4 ($R = \infty$, $d = 1.40$ mm). Its placement within G1 — behind the negative front pair and before the positive biconvex element — creates an asymmetric power distribution around the stop. This mid-group stop location is a deliberate choice: it keeps the stop small and places the negative focus group (G2) entirely behind the stop, which minimizes breathing (magnification change during focus) and wobbling artifacts during video recording (¶0038).

### L113 — Biconvex Positive (2× Aspherical)

$n_d = 1.76$, $\nu_d = 49.24$. Glass: lanthanum flint (LAF class), 760/492 — no exact catalog match (see Glass Identification). $f = +17.7$ mm.

L113 is the primary positive power element in G1 and the strongest element within that group. Its biconvex form ($R_1 = +18.59$ mm, $R_2 = -45.03$ mm) with both surfaces aspherical makes it the workhorse for spherical aberration correction. The front surface ($R_1 = +18.59$ mm) carries a negative $A_4$ coefficient ($-3.7579 \times 10^{-5}$), which flattens the peripheral zone relative to the paraxial sphere, directly correcting spherical aberration of the converging ray bundle. The rear surface ($R_2 = -45.03$) has a much smaller aspherical departure (0.41% at $h = 5$ mm vs. 3.52% on the front), providing fine-tuning of coma and higher-order spherical residuals.

Given that both surfaces are aspherical, this element is almost certainly fabricated by precision glass molding (PGM). The glass type ($n_d = 1.76$, $\nu_d = 49.24$) is consistent with PGM-compatible lanthanum formulations.

### L121 — Negative Meniscus, Convex to Object (2× Aspherical) — Focus Element

$n_d = 1.58$, $\nu_d = 59.46$. Glass: barium crown, 580/595 class — L-BAL42 (OHARA), a confirmed PGM glass. $f = -27.8$ mm.

L121 constitutes the entirety of G2, the focus group. It is a negative meniscus with both radii positive ($R_1 = +119.57$ mm, $R_2 = +14.18$ mm), convex to the object, with both surfaces aspherical. The patent states a group focal length of $f_2 = -27.55$ mm (¶0084), and the conditional expression (4) requires $-1.91 \leq f_2/f \leq -0.57$; the realized value of $f_2/f = -0.76$ falls comfortably within this range (¶0084).

The patent places particular emphasis on the design of G2. The single-element construction minimizes the mass of the focus group, enabling fast wobbling for contrast-detect autofocus in video mode (¶0038). The conditional expression (5) governs the ratio of the front and rear radii: $r_{a2}/r_{b2} = 119.57 / 14.18 = 8.43$ (¶0085), within the prescribed range of $1.95 \leq r_{a2}/r_{b2} \leq 10.22$. This ratio controls the sensitivity of the focus mechanism — too high and the driving control becomes difficult; too low and the focus travel becomes excessive (¶0046).

The aspherical surfaces on L121 are critical for maintaining image quality across the focus range. The front surface ($R = 119.57$ mm) has a very large aspherical departure relative to its spherical base (28.5% at $h = 5$ mm), indicating that the aspherical profile substantially redefines the surface shape. Both surfaces carry positive $A_4$ coefficients, steepening the marginal zone to preserve the diverging power at higher ray heights.

L-BAL42 (OHARA) is a low-softening-temperature glass explicitly designed for PGM, with $n_d = 1.58313$ and $\nu_d = 59.46$ — matching the patent values after standard two-decimal truncation. Its moderate index and low dispersion make it well suited for a focus element that must maintain chromatic correction across the focus range.

During focusing from infinity to the close-focus distance of 350 mm, L121 moves 1.64 mm toward the image plane. The air gap D(6) ahead of L121 increases from 1.49 mm to 3.13 mm, while the air gap D(8) behind it decreases from 5.53 mm to 3.89 mm, conserving the total gap sum at 7.02 mm.

### L131 — Biconvex Positive (Cemented Front of G3 Doublet)

$n_d = 1.83$, $\nu_d = 42.72$. Glass: high-index lanthanum (LASF class), 830/427 — S-LAH55V (OHARA) or TAFD5F (Hoya); same glass type as L112. $f = +10.5$ mm.

L131 is the strongest individual element in the entire system ($|f| = 10.5$ mm). Its biconvex shape ($R_1 = +51.20$ mm, $R_2 = -10.02$ mm) with a very steep rear surface concentrates most of G3's positive power. The thick center ($d = 5.36$ mm) — the thickest element in the design — is characteristic of Sonnar-derived relay constructions, where a dense positive high-index element collects the diverging beam from the focus group and reconverges it toward the image.

The use of the same high-index lanthanum glass as L112 ($n_d = 1.83$, $\nu_d = 42.72$) is noteworthy. It allows the steep $R_2 = -10.02$ mm surface to achieve the required power without driving the surface curvature to optically unmanageable values. The high index also reduces the Petzval contribution per unit of power, which is important for this strongly positive element.

### L132 — Biconcave Negative (Cemented Rear of G3 Doublet)

$n_d = 1.63$, $\nu_d = 34.57$. Glass: niobium-containing dense flint, 630/346 class — NBFD11 (Hoya) or equivalent. $f = -14.2$ mm.

L132 is cemented to L131 at the junction surface $R = -10.02$ mm. Its biconcave form ($R_1 = -10.02$ mm, $R_2 = +86.11$ mm) provides strong negative power that partially counterbalances L131. The cemented doublet L131 + L132 has a combined focal length of approximately $+35.2$ mm — the net is positive, but substantially less than L131 alone ($+10.5$ mm). This power tempering is the hallmark of an achromatic doublet: the lower-dispersion positive partner (L131, $\nu_d = 42.72$) paired with the higher-dispersion negative partner (L132, $\nu_d = 34.57$) corrects longitudinal chromatic aberration in the relay group.

The Abbe number difference $\Delta\nu_d = 42.72 - 34.57 = 8.15$ is modest, reflecting the use of moderate-dispersion glasses rather than the extreme-dispersion pairings found in apochromatic designs. The glass code 630/346 is consistent with Hoya NBFD11 ($n_d = 1.63980$, $\nu_d = 34.57$), a niobium-containing flint with moderate anomalous partial dispersion — a pragmatic choice for a compact, cost-effective design.

### L133 — Negative Meniscus, Concave to Object (2× Aspherical) — Field Flattener

$n_d = 1.68$, $\nu_d = 31.16$. Glass: flint, 680/312 class — S-TIM28 (OHARA) or E-FDS2 (Hoya). $f = -68.1$ mm.

L133 is the final element before the image plane, separated from the cemented doublet by a 4.95 mm air gap. Its negative meniscus form ($R_1 = -10.55$ mm, $R_2 = -14.19$ mm) with both surfaces concave to the object places it in the classic field-flattener position. The negative power reduces the system's Petzval sum, directly flattening the image surface.

Both surfaces carry strong aspherical profiles. At $h = 5$ mm, the aspherical departure is 18.2% on the front surface and 22.6% on the rear — the largest aspherical contributions in the entire system. The positive $A_4$ coefficients on both surfaces counteract the steep base curvatures, effectively "opening up" the peripheral zones to correct astigmatism and field curvature across the full 35 mm format. This is where the three double-sided aspherical elements earn their keep: L133's aspherics carry the bulk of the field-correction burden that would otherwise require additional elements.

The relatively high-dispersion glass ($\nu_d = 31.16$) in the field-flattener position does not significantly degrade chromatic correction, because L133 operates in a region of the optical path where the marginal ray height is small relative to the chief ray height — the element sees primarily field-dependent aberrations rather than axial chromatic errors.

## Glass Identification and Selection

The design uses a palette of seven glass types. The patent truncates refractive indices to two decimal places, which introduces some ambiguity in exact catalog identification. The identifications below are ranked by confidence.

| Element | $n_d$ | $\nu_d$ | Code | Best candidate | Confidence |
|---------|-------|--------|------|---------------|------------|
| L111 | 1.80 | 25.46 | 800/255 | S-TIH6 (OHARA) / FD60 (Hoya) | Medium-high — $n_d$ consistent after truncation; $\nu_d$ close but not exact ($\Delta\nu_d = 0.04$ vs. catalog 25.42) |
| L112 | 1.83 | 42.72 | 830/427 | S-LAH55V (OHARA) / TAFD5F (Hoya) | High — exact $\nu_d$ match, standard La high-index |
| L113 | 1.76 | 49.24 | 760/492 | Lanthanum flint class (LAF), unresolved | Medium — no exact catalog match; PGM-compatible melt likely |
| L121 | 1.58 | 59.46 | 580/595 | L-BAL42 (OHARA) | High — exact $\nu_d$ match, confirmed PGM glass |
| L131 | 1.83 | 42.72 | 830/427 | S-LAH55V (OHARA) / TAFD5F (Hoya) | High — same glass as L112 |
| L132 | 1.63 | 34.57 | 630/346 | NBFD11 (Hoya) | Medium-high — exact $\nu_d$, $\Delta n_d = 0.010$ |
| L133 | 1.68 | 31.16 | 680/312 | S-TIM28 (OHARA) / E-FDS2 (Hoya) | High — exact $\nu_d$ match |

The glass selection reflects a design philosophy of pragmatic cost and manufacturability over exotic materials. There are no ED (extra-low dispersion) or fluorophosphate glasses in the prescription. Chromatic correction is achieved through conventional achromatic doublet pairings (L111+L112 in G1, L131+L132 in G3) rather than through anomalous-dispersion elements. This is consistent with the lens's positioning as a compact, moderately-priced wide-angle prime.

**L113 glass ambiguity.** The $n_d = 1.76$, $\nu_d = 49.24$ combination does not resolve to any standard public catalog entry within tight tolerance. Candidates include OHARA S-LAM54 ($n_d = 1.75700$, rounds to 1.76, but $\nu_d = 47.82$ differs by 1.42) and OHARA L-LAH83 ($n_d = 1.77250$, $\nu_d = 49.60$, close but $n_d$ rounds to 1.77). Since L113 requires PGM compatibility for its double-sided aspherical surfaces, the glass may be a low-softening-temperature melt not represented in public catalog editions, or a custom variant. The classification as a lanthanum flint (LAF family) is secure.

**L111 glass note.** Among the other elements in this patent, four have exact $\nu_d$ matches to known catalog entries (L112, L121, L132, L133), suggesting the patent reports Abbe numbers at catalog precision. The $\Delta\nu_d = 0.04$ discrepancy between the patent's 25.46 and S-TIH6's published 25.42 is small but notable in this context. No alternative glass with $n_d \approx 1.80$ and $\nu_d = 25.46$ has been identified in the OHARA, Hoya, Schott, Sumita, or CDGM catalogs; S-TIH6 remains the best candidate, possibly from a slightly different catalog edition or production batch.

## Focus Mechanism

The lens uses inner focus with a single moving element (G2 = L121), as described in ¶0024 and ¶0074. Groups G1 and G3 are fixed on the optical axis.

| Parameter | Infinity | Close (350 mm) | Change |
|-----------|----------|---------------|--------|
| D(6) — gap ahead of L121 | 1.49 mm | 3.13 mm | +1.64 mm |
| D(8) — gap behind L121 | 5.53 mm | 3.89 mm | −1.64 mm |
| Sum D(6)+D(8) | 7.02 mm | 7.02 mm | 0.00 mm |

The gap sum is conserved (7.02 mm at both extremes), confirming that only L121 moves and the overall length of the lens remains constant — a requirement for the internal-focus architecture.

The total focus travel of 1.64 mm is extremely short, consistent with the patent's emphasis on fast, low-inertia focusing for video wobbling (¶0037–0038). The production lens uses a linear autofocus motor to drive this movement.

The focus element moves from object toward image for near-focus, which is the standard direction for a negative inner-focus group: as the object distance decreases, the diverging G2 must shift rearward to increase the divergence presented to G3, thereby lengthening the effective back focus.

## Aspherical Surfaces

Six surfaces across three elements are aspherical. The patent specifies the standard aspherical sag equation (¶0153–0154):

$$Z(h) = \frac{ch^2}{1 + \sqrt{1 - (1+k)\,c^2 h^2}} + A_4 h^4 + A_6 h^6 + A_8 h^8 + A_{10} h^{10}$$

where $c = 1/r$ is the base curvature and $k$ is the conic constant. All six surfaces use $k = 0$ (spherical base curve), so the aspherical character is carried entirely by the polynomial coefficients.

### L113 (Surfaces 5 and 6) — Spherical Aberration Corrector

| Coefficient | Surface 5 ($R = +18.59$) | Surface 6 ($R = -45.03$) |
|-------------|-------------------------|-------------------------|
| $K$ | 0 | 0 |
| $A_4$ | $-3.7579 \times 10^{-5}$ | $-5.9027 \times 10^{-6}$ |
| $A_6$ | $-1.0389 \times 10^{-8}$ | $+5.5887 \times 10^{-7}$ |
| $A_8$ | $-2.0023 \times 10^{-10}$ | $-1.1004 \times 10^{-8}$ |
| $A_{10}$ | $-4.1163 \times 10^{-11}$ | $+3.9911 \times 10^{-11}$ |

The front surface (S5) has predominantly negative polynomial coefficients, flattening the converging wavefront at the periphery — a direct attack on undercorrected spherical aberration. The rear surface (S6) has a much smaller departure and mixed-sign coefficients, indicating fine-tuning of residual coma and oblique spherical aberration.

### L121 (Surfaces 7 and 8) — Focus Group Aspherics

| Coefficient | Surface 7 ($R = +119.57$) | Surface 8 ($R = +14.18$) |
|-------------|--------------------------|-------------------------|
| $K$ | 0 | 0 |
| $A_4$ | $+7.4881 \times 10^{-5}$ | $+1.0857 \times 10^{-4}$ |
| $A_6$ | $-1.1023 \times 10^{-6}$ | $-1.6255 \times 10^{-6}$ |
| $A_8$ | $-1.6439 \times 10^{-9}$ | $+9.5546 \times 10^{-9}$ |
| $A_{10}$ | $+9.2542 \times 10^{-11}$ | $+7.7733 \times 10^{-11}$ |

Both surfaces carry positive $A_4$ coefficients, which steepen the marginal zone relative to the sphere. On S7, the aspherical departure is 28.5% of the spherical sag at $h = 5$ mm — the surface shape is defined more by the asphere than by the base sphere. This is consistent with a weakly curved base ($R = 119.57$ mm) that the polynomial terms reshape into a substantially different profile. The aspherics on L121 must maintain aberration correction as the element moves during focus; the large $A_4$ on S7 likely compensates for the variation in spherical aberration that would otherwise appear as the air gaps change.

### L133 (Surfaces 12 and 13) — Field Flattener Aspherics

| Coefficient | Surface 12 ($R = -10.55$) | Surface 13 ($R = -14.19$) |
|-------------|--------------------------|--------------------------|
| $K$ | 0 | 0 |
| $A_4$ | $+4.5713 \times 10^{-4}$ | $+4.1193 \times 10^{-4}$ |
| $A_6$ | $-4.2921 \times 10^{-6}$ | $-3.8255 \times 10^{-6}$ |
| $A_8$ | $+2.8083 \times 10^{-8}$ | $+2.1891 \times 10^{-8}$ |
| $A_{10}$ | $-5.6441 \times 10^{-11}$ | $-5.6738 \times 10^{-11}$ |

L133 carries the strongest aspherical departures in the design. Both surfaces have large positive $A_4$ (order $10^{-4}$), which counteracts the steep negative base curvatures. The alternating signs of higher-order coefficients ($A_6$ negative, $A_8$ positive, $A_{10}$ negative) indicate a complex correction profile that shapes the wavefront across the full field. These aspherics are principally responsible for controlling astigmatism and field curvature over the ~63° field of view (¶0073, ¶0075).

All three aspherical elements are manufactured by precision glass molding (PGM), consistent with the use of PGM-compatible glass types and the high-volume consumer production requirements of the lens.

## Conditional Expressions

The patent defines six conditional expressions (¶0026–0053). All are satisfied by Example 1:

| Expression | Formula | Value | Required range | Tighter range | Status |
|-----------|---------|-------|---------------|---------------|--------|
| (1) | $L_1 / L$ | 0.27 | 0.13–0.43 | 0.19–0.33 (1b) | ✓ |
| (2) | $\tan\omega$ | 0.61 | 0.47–0.74 | — | ✓ |
| (3) | $\beta_3$ | 0.49 | 0.34–0.94 | 0.49–0.72 (3b) | ✓ |
| (4) | $f_2 / f$ | −0.76 | −1.91 to −0.57 | −1.60 to −0.72 (4b) | ✓ |
| (5) | $r_{a2} / r_{b2}$ | 8.43 | 1.95–10.22 | 2.44–8.51 (5b) | ✓ |
| (6) | $r_1 / f$ | −0.64 | −1.96 to −0.38 | −1.63 to −0.47 (6b) | ✓ |

Expression (1) governs the ratio of G1's length to the total lens length; its tightest range (1b: 0.19–0.33) bounds the balance between compactness and aberration control. Expression (4) constrains the focus group's focal length relative to the system, balancing focus sensitivity against travel distance for video wobbling. Expression (5), which governs the curvature ratio of G2's front and rear surfaces, is near the upper bound of its tightest range (5b: 2.44–8.51 vs. realized 8.43), indicating that the design pushes toward a strong bending of the focus element for minimal focus travel.

## Verification Summary

Independent paraxial ray trace (y-nu method, all 13 surfaces) yields:

| Parameter | Computed | Patent (¶0080) | Agreement |
|-----------|----------|----------------|-----------|
| EFL | 35.95 mm | 36.06 mm | 0.11 mm (0.3%) |
| Half-field angle $\omega$ | 31.0° | 31.28° | 0.28° |
| BFD | 20.03 mm | 20.03 mm | Exact |
| $L_1$ (G1 vertex length) | 7.52 mm | 7.52 mm | Exact |
| $L$ (total vertex length) | 27.55 mm | 27.55 mm | Exact |
| Gap sum conservation | 7.02 mm (both) | — | Perfect |
| G2 focal length | −27.81 mm | −27.55 mm (¶0084) | 0.26 mm (0.9%) |

The 0.3% EFL discrepancy and 0.9% G2 focal length discrepancy are within the range attributable to the patent's two-decimal truncation of refractive indices.

## Design Heritage and Context

The Sonnar T\* FE 35mm F2.8 ZA was one of the first native lenses for the Sony α7-series full-frame mirrorless system, announced in October 2013. Its 120 g weight and 36.5 mm length made it the most compact full-frame 35 mm autofocus lens available at launch.

The "Sonnar" designation in the modern Zeiss/Sony nomenclature is applied loosely. The classical Sonnar, designed by Ludwig Bertele in 1929, was characterized by a cemented triplet rear group that minimized air–glass reflections — critical in the era before effective anti-reflection coatings. The SEL35F28Z preserves the philosophical essence — a rear group dominated by a thick cemented positive element, asymmetric power distribution, and a design that privileges compactness over absolute aberration correction — but the three-group inner-focus architecture with three PGM double-sided aspherical elements is a thoroughly modern construction.

The joint Tamron–Sony development is consistent with the cooperative model in which Tamron provides optical design and manufacturing expertise for several Sony E-mount lenses, with Zeiss contributing optical quality standards and the T\* coating specification.

## Sources

- JP 2015-41012 A (P2015-41012A), published March 2, 2015. Japan Patent Office.
- Sony SEL35F28Z product specification page (sony.co.uk/electronics/camera-lenses/sel35f28z/specifications).
- OHARA Optical Glass catalog (pocket edition, May 2023) — for glass identification and PGM designation cross-reference.
- Hoya Glass Cross Reference Index — for NBFD11 and FD60 identification.
