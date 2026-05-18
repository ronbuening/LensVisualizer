# Schneider Super-Symmar XL 5.6/110 Aspheric — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 5,870,234
**Inventor:** Hiltrud Ebbesmeier née Schitthof
**Assignee:** Jos. Schneider Optische Werke Kreuznach GmbH & Co. KG
**Priority:** DE 196 36 152.4, September 6, 1996
**Filed:** September 4, 1997
**Granted:** February 9, 1999
**Title:** Compact Wide-Angle Lens
**Embodiment analyzed:** Example 2 (Claim 3)

**US 5,870,234**, "Compact Wide-Angle Lens," assigned to Jos. Schneider Optische Werke Kreuznach GmbH & Co. KG (Bad Kreuznach, Germany). Inventor: Hiltrud Ebbesmeier née Schitthof. Filed September 4, 1997 (US); German priority DE 196 36 152.4, filed September 6, 1996. Granted February 9, 1999.

The patent discloses two numerical embodiments of a five-member compact wide-angle lens. Both embodiments are tabulated at the **e-line (546.1 nm)**, using refractive indices $n_e$ and e-line-referenced Abbe numbers $\nu_e$, as is conventional for German optical patents. All patent-derived optical values quoted in this analysis are e-line quantities unless stated otherwise.

**Example 2** (Claim 3) is identified as the basis for the production Schneider Super-Symmar XL 5.6/110 lens on the following convergent evidence:

1. **Focal length.** Paraxial ray trace of Example 2 at the e-line yields an effective focal length of 110.64 mm, consistent with Schneider's published EFL of 109.9 mm (the small difference reflects the shift from e-line to d-line, within the manufacturer's ±1% tolerance).
2. **Maximum aperture.** The patent specifies a maximum aperture ratio of at least 1:5.6, matching the production lens's f/5.6.
3. **Image angle.** The patent claims a 105° image angle. The production lens is rated at 105° coverage at f/22 with a 288 mm image circle, and paraxial field-angle computation yields $2 \times \arctan(144 / 109.9) \approx 105.3°$.
4. **Element and group count.** The patent prescription contains six glass elements in five air-separated members (L1, L2, L3, L4a+L4b cemented, L5). Schneider's published specification lists "6 elements, 4 groups" — see the discussion of the probable production cementation of L4b to L5 in §Optical Architecture below.
5. **Aspherical surface.** The patent designates one aspherical glass/air surface on the cemented member L4, consistent with the production lens's "Aspheric" designation. Schneider marketed the Super-Symmar XL series as the first aspherical lens design for large-format photography.
6. **Patent timing.** The German priority date (September 1996) and US grant date (February 1999) bracket the production introduction of the Super-Symmar XL series in 1997–1998.

Example 1 (Claim 2) is a related embodiment with the same architecture but different prescription values. Paraxial ray trace of Example 1 yields an EFL of 148.1 mm at the e-line, closely matching the production Schneider Super-Symmar XL 5.6/150 (published EFL 147.7 mm). The two examples thus represent the 150 mm and 110 mm members of the Super-Symmar XL family, respectively, sharing a common design architecture scaled to different focal lengths.

## Optical Architecture

The Super-Symmar XL 110 is a compact wide-angle lens of the negative-positive-positive–stop–positive-negative type. The power sequence across the five members is:

$$\text{L1}^{-} \;—\; \text{L2}^{+} \;—\; \text{L3}^{+} \;—\; [\text{stop}] \;—\; \text{L4}^{+}_{\text{cem}} \;—\; \text{L5}^{-}$$

The design descends from the Topogon/Biogon lineage of wide-angle objectives, in which a quasi-symmetrical arrangement of negative outer menisci flanking a positive central core suppresses distortion and lateral chromatic aberration across an extreme field of view. However, the Super-Symmar XL departs from strict symmetry in several respects: the front negative member (L1, $f = -53.2$ mm) is weaker than its rear counterpart (L5, $f = -50.6$ mm), the two positive elements ahead of the stop (L2 and L3) differ substantially in power, and the rear positive group is a cemented achromatic doublet rather than a singlet.

The lens contains six elements in five air-separated groups as described by the patent (L1 | L2 | L3 | [stop] | L4a–L4b | L5). Schneider's official specification for the production lens, however, states "6 elements / 4 groups." The most likely explanation is that the production lens cements L4b to L5, converting the last two patent members into a cemented triplet. The patent's radii on either side of the L4b–L5 air gap support this interpretation: $r_9 = -31.197$ mm and $r_{10} = -30.837$ mm differ by only 0.36 mm, and the separating air gap $d_9 = 1.360$ mm is thin enough to be replaced by optical cement without substantially altering the paraxial behavior. In the production lens, the rear component would then be a cemented triplet L4a–L4b–L5, yielding four air-separated groups: L1 | L2 | L3 | [stop] | L4a–L4b–L5.

The lens body spans 57.08 mm from the front vertex of L1 to the rear vertex of L5. The back focal distance from the last optical surface is 101.27 mm, giving a total track of approximately 158.4 mm — compact for a 110 mm focal length covering an image circle of 288 mm. The ratio BFD/EFL $\approx 0.92$ places this design squarely in the compact wide-angle category rather than a true retrofocus (which would require BFD > EFL).

The front principal plane H lies approximately 28.9 mm to the left of the front vertex (in object space), while the rear principal plane H′ lies approximately 9.4 mm to the right of the last vertex (in image space). This places H′ behind the physical lens body, a characteristic of compact wide-angle designs that enables the long back focal distance needed for bellows and shutter clearance.

The Petzval sum is exceptionally well corrected at $\sum \varphi_k / (n_k \cdot n'_k) = +0.00006 \;\text{mm}^{-1}$, yielding a Petzval radius of approximately 16,800 mm — effectively flat field. This near-zero Petzval sum is the fundamental prerequisite for useful image quality across a 105° field and is achieved by the strong negative elements L1 and L5 bracketing the positive core.

## Element-by-Element Analysis

The patent prescription uses e-line (546.1 nm) refractive indices and e-line-referenced Abbe numbers throughout. All $n_e$ and $\nu_e$ values quoted below are as published in the patent; the glass identifications reference the corresponding d-line catalog values where available. The data file preserves the patent's e-line values to maintain prescription fidelity.

### L1 — Negative Meniscus (convex to object)

$n_e = 1.52583$, $\nu_e = 51.25$. Glass: KF9 (Schott), $n_d = 1.5235$, $\nu_d = 51.5$. $f = -53.2$ mm.

L1 is a strongly curved negative meniscus presenting its convex face to the object ($r_1 = 169.672$ mm, $r_2 = 23.884$ mm). The large ratio $|r_1/r_2| \approx 7.1$ creates a deeply bent meniscus that intercepts off-axis bundles at a steep angle and refracts them inward toward the optical axis. The front surface is only gently curved ($r_1 = 169.7$ mm), reducing the angle of incidence for extreme off-axis rays and thus limiting higher-order aberration contributions from this first air-glass interface.

The choice of KF9 — a crown-flint glass of low refractive index — follows the patent's stipulation that the first and last members consist of "low refractivity crown glass." The low index keeps the surface powers modest despite the strong curvature of $r_2$, and the moderate Abbe number ($\nu_d \approx 51.5$) provides enough dispersion to partially compensate the axial color introduced by the positive elements downstream. The 3.0 mm center thickness produces a compact, lightweight element appropriate for the front of a large-format lens where filter-thread diameter constraints apply (the production lens uses a 67 mm front filter thread).

### L2 — Positive Meniscus (convex to object)

$n_e = 1.75844$, $\nu_e = 52.09$. Glass: N-LAK33B (Schott), $n_d = 1.7550$, $\nu_d = 52.3$. $f = +72.8$ mm.

L2 is a thick positive meniscus ($d_3 = 12.860$ mm center thickness) with both radii positive ($r_3 = 27.751$ mm, $r_4 = 44.624$ mm), presenting its steeper convex face to the object. It is the principal positive power element in the front group, contributing approximately 31% of the total positive power in the system (L2 + L3 + L4 cemented). The choice of N-LAK33B — a high-index lanthanum crown ($n_d = 1.755$, $\nu_d = 52.3$) — allows the element to achieve strong positive power while maintaining relatively gentle surface curvatures. The high refractive index is also beneficial for field flattening: because the Petzval contribution of a surface is $\varphi / (n \cdot n')$, a high-index positive element contributes less to the Petzval sum per unit of power than a low-index element of the same focal length. This makes it easier to balance the total Petzval sum to zero using the flanking negative elements L1 and L5.

The substantial center thickness (12.86 mm) creates significant thick-lens focal-length shortening relative to the thin-lens approximation. This thickness is driven by the mechanical requirement to maintain adequate edge thickness on a meniscus with a 27.75 mm front radius and a 44.62 mm rear radius — the element needs mass at the center to survive grinding and polishing without edge thinning.

L2 and L3 use the same glass type (N-LAK33B), which simplifies the glass palette and manufacturing logistics while maintaining design flexibility through different curvatures and thicknesses.

### L3 — Weak Positive Meniscus (convex to object)

$n_e = 1.75844$, $\nu_e = 52.09$. Glass: N-LAK33B (Schott), $n_d = 1.7550$, $\nu_d = 52.3$. $f = +167.3$ mm.

L3 is a thin positive meniscus ($d_5 = 2.400$ mm) with moderately similar positive radii ($r_5 = 28.382$ mm, $r_6 = 35.229$ mm, a ratio of 1.24), positioned immediately before the aperture stop. Its focal length is over twice that of L2, so it contributes only modest converging power to the system. Its primary role is aberration correction rather than power generation: positioned close to the stop, L3 controls the balance of spherical aberration and coma contributed by L2, and its weakly powered meniscus form acts primarily as an astigmatism corrector without strongly perturbing the axial ray path.

The air gap $d_6 = 4.535$ mm between L3 and the cemented member L4 contains the aperture stop (diaphragm 6 in the patent drawing). The patent does not specify the exact stop position within this gap; the data file places it approximately 2.3 mm from L3's rear surface, based on the iris position visible in the patent figure. The production lens positions the iris within a Copal No. 1 shutter assembly whose iris aperture sits approximately in this space.

### L4a — Biconvex Positive (cemented front)

$n_e = 1.59142$, $\nu_e = 61.03$. Glass: N-SK5 (Schott), $n_d = 1.5891$, $\nu_d = 61.3$. $f = +25.1$ mm (standalone); $f_{\text{L4}} = +40.0$ mm (cemented with L4b).

L4a is a thick biconvex element ($r_7 = 73.026$ mm, $r_8 = -17.622$ mm, $d_7 = 10.470$ mm) forming the convergent half of the cemented achromatic doublet L4. It is the most powerful single element in the system, with a standalone focal length of only 25.1 mm. Its strongly curved rear surface ($r_8 = -17.622$ mm) is the cemented interface with L4b and carries the bulk of the element's refractive power.

The glass choice is N-SK5, a dense crown with low dispersion ($\nu_d = 61.3$). This is the "low dispersion" convergent partner described by the patent. The relatively high Abbe number ensures that L4a's strong positive power contributes minimal chromatic aberration. Combined with L4b's high-dispersion glass, this pairing creates an achromatic doublet using the near-index, far-dispersion technique (described in §Chromatic Correction Strategy below).

### L4b — Negative Meniscus (cemented rear, aspherical outer surface)

$n_e = 1.62408$, $\nu_e = 36.12$. Glass: F2 class (Schott), $n_d \approx 1.620$, $\nu_d \approx 36.4$. $f = -72.0$ mm (standalone).

L4b is a divergent meniscus cemented to L4a at $r_8 = -17.622$ mm, with its rear glass/air surface at $r_9 = -31.197$ mm designated as aspherical. The center thickness is 3.500 mm. This is the "high dispersion" divergent partner in the cemented doublet.

The glass is identified as F2-class (Schott standard flint). The patent's e-line index ($n_e = 1.62408$) lies slightly above the current Schott F2 catalog value ($n_e = 1.62299$, $\Delta n_e = +0.001$). This small discrepancy may reflect a vintage melt batch, a deliberate proprietary formulation, or minor transcription rounding; in any case, the optical properties are within the F2 family. The Abbe number ($\nu_e = 36.12$) matches F2 closely.

The combined cemented doublet L4 has a focal length of approximately +40.0 mm and serves three critical functions: it provides the dominant positive power behind the stop, it corrects axial chromatic aberration through the SK5/F2 achromatic pairing, and its aspherical rear surface corrects residual higher-order aberrations — particularly oblique spherical aberration and coma — across the extreme 105° field of view.

### L5 — Biconcave Negative

$n_e = 1.50349$, $\nu_e = 56.13$. Glass: K10 (Schott), $n_d = 1.5014$, $\nu_d = 56.4$. $f = -50.6$ mm.

L5 is the rear negative member, with its front surface strongly concave toward the object ($r_{10} = -30.837$ mm) and its rear surface very weakly curved ($r_{11} = 152.036$ mm). The patent explicitly states that "the face of the last member which faces the plane of the image is concave," which is geometrically correct: $r_{11} = +152.036$ mm means the center of curvature lies to the right of the surface, and the surface sag at any height is positive (displaced toward the image), producing a surface that is concave when viewed from the image side. Although technically biconcave, the dominant curvature is on the front face; the rear surface is nearly plano.

K10 is a low-index crown glass ($n_d \approx 1.50$), satisfying the patent's requirement that the last member be of "low refractivity crown glass." The low refractive index keeps surface reflections to a minimum on the last air-glass interface — important because this surface faces the image plane and any ghost reflections could degrade contrast. The moderate Abbe number ($\nu_d \approx 56.4$) places K10 between L1's glass (KF9, $\nu_d \approx 51.5$) and a pure crown. This asymmetry between the first and last elements' dispersions is a deliberate design choice: L5's glass matches more closely the chromatic behavior of the dense crowns in the core of the lens, improving the balance of lateral color correction across the field.

L5 acts as a field flattener and negative power element, pulling the Petzval sum toward zero. Its strong concave front surface, positioned only 1.36 mm behind the aspherical surface of L4b (or cemented directly to L4b in the probable production variant), creates a powerful negative air lens in the patent embodiment that further assists in correcting field curvature and astigmatism.

## Glass Selection

The design employs four distinct Schott glasses — a compact palette for a six-element lens:

| Element | Patent $n_e$ | Patent $\nu_e$ | Identified Glass | $n_d$ | $\nu_d$ | Type | Role |
|---------|-------------|----------------|------------------|-------|---------|------|------|
| L1 | 1.52583 | 51.25 | KF9 (Schott) | 1.5235 | 51.5 | Crown-flint | Front negative meniscus |
| L2 | 1.75844 | 52.09 | N-LAK33B (Schott) | 1.7550 | 52.3 | Lanthanum crown | Primary positive power |
| L3 | 1.75844 | 52.09 | N-LAK33B (Schott) | 1.7550 | 52.3 | Lanthanum crown | Pre-stop corrector |
| L4a | 1.59142 | 61.03 | N-SK5 (Schott) | 1.5891 | 61.3 | Dense crown | Achromat convergent partner |
| L4b | 1.62408 | 36.12 | F2 class (Schott) | ~1.620 | ~36.4 | Standard flint | Achromat divergent partner |
| L5 | 1.50349 | 56.13 | K10 (Schott) | 1.5014 | 56.4 | Crown | Rear field flattener |

**Note on spectral convention.** The patent tabulates $n_e$ (refractive index at the e-line, 546.1 nm) and a corresponding e-line Abbe number, as is conventional for German optical patents. All patent values quoted in this analysis are e-line quantities. The $n_d$ and $\nu_d$ values in the table above are derived from the identified Schott catalog entries at the d-line (587.6 nm). The companion data file preserves the patent's e-line values in the surface prescription (labeled as `nd` per the file-format convention) to maintain prescription fidelity; d-line catalog values would alter the design's paraxial and aberration behavior.

**Note on L4b glass.** The patent's $n_e = 1.62408$ for L4b exceeds the current Schott F2 catalog value ($n_e = 1.62299$) by 0.001. This is a marginal match. It is possible that Schneider used a proprietary melt or an older Schott glass type that is no longer in the active catalog. The Abbe number match ($\nu_e = 36.12$ vs. 36.0 for F2) is good, and the optical behavior is consistent with a standard flint glass.

The glass palette divides into two functional groups. The outer menisci (L1 and L5) use low-index glasses (KF9 at $n_d = 1.52$, K10 at $n_d = 1.50$) to keep their surface powers and aberration contributions moderate despite steep curvatures. The inner convergent elements (L2, L3) use a single high-index lanthanum crown (N-LAK33B at $n_d = 1.755$) to generate the system's positive power efficiently from gentler curvatures. The cemented doublet (L4a + L4b) uses the near-index, far-dispersion technique: N-SK5 at $n_d = 1.589$ paired with F2 at $n_d \approx 1.620$ gives $\Delta n_d = 0.031$ (very small), while $\Delta\nu_d = 24.9$ (very large). This pairing minimizes monochromatic aberrations at the cemented interface while maximizing chromatic correction.

## Chromatic Correction Strategy

The patent identifies chromatic correction as a central design objective: "The chromatic correction is well defined and is very substantially independent of the distance of the object."

The primary mechanism for chromatic correction is the cemented achromatic doublet L4. The near-index, far-dispersion glass pairing (N-SK5 / F2) creates an interface at $r_8 = -17.622$ mm where the refractive-index step is only $\Delta n_e = 0.033$ but the dispersion step is $\Delta \nu_e = 24.9$. In a conventional achromat, the cemented interface must refract strongly to create the chromatic correction, which unavoidably introduces monochromatic aberrations (spherical, coma). By minimizing the index step while maximizing the dispersion step, the Super-Symmar XL achieves the same chromatic correction with much weaker refraction at the cement — reducing the monochromatic penalty and enabling a wider usable field.

The patent's claim that chromatic correction is "substantially independent of the distance of the object" is notable for a wide-angle lens. In most wide-angle designs, lateral color worsens rapidly at closer focusing distances because the chief ray path through the lens changes. The quasi-symmetrical negative-positive-positive–stop–positive-negative power arrangement inherently reduces lateral color by approximate symmetry, and the cemented doublet behind the stop provides fine correction of the residual axial and lateral components.

The outer elements L1 (KF9, $\nu_d \approx 51.5$) and L5 (K10, $\nu_d \approx 56.4$) also play a role in the chromatic balance. Their different Abbe numbers — intentionally asymmetric — allow the designer to fine-tune the lateral color correction across the field. A perfectly symmetric design would use identical glasses in L1 and L5; the asymmetry here reflects the asymmetric power distribution of the overall system.

## Focus Mechanism

The Schneider Super-Symmar XL 110 is a large-format view camera lens. Focusing is accomplished by adjusting the lens-to-film distance using the camera's bellows or rail mechanism. The entire lens assembly translates axially as a unit; there are no internal focusing groups. This is standard practice for large-format lenses mounted in leaf shutters (Copal No. 1 in this case).

The flange focal distance at infinity focus is 117.2 mm (Schneider published specification). The back focal distance from the last optical surface ($r_{11}$) to the image plane is 101.27 mm; the difference of approximately 16 mm represents the mechanical path through the rear cell and shutter body. The lens is rated for close focusing down to a 1:3 reproduction ratio "with no visible loss in image quality." At 1:3 magnification, the additional bellows extension beyond the infinity position is approximately $f \times M = 110.6 \times 0.333 \approx 36.9$ mm, giving a minimum focus distance of approximately 667 mm (0.67 m) from the film plane.

The patent does not provide variable-spacing data for different object distances, which is expected: in a unit-focusing lens where all elements move together, the optical prescription is fixed and only the object-to-lens and lens-to-image distances change.

## Aspherical Surface

The patent designates $r_9 = -31.197$ mm — the rear glass/air surface of L4b — as aspherical (marked with an asterisk in the prescription table). This is the only aspherical surface in the design.

### Aspherical coefficients

The patent **does not publish** the aspherical equation, conic constant, or polynomial coefficients for the aspherical surface. This omission is significant: it protects the proprietary correction profile while still disclosing the lens architecture for patent purposes. The radius value $r_9 = -31.197$ mm represents the base (vertex) radius of curvature of the aspherical surface. The companion data file includes the aspherical surface designation (label suffix "A") with a spherical baseline (K = 0, all polynomial coefficients zero) to document the patent's aspherical intent without fabricating departure data.

### Position and function

Surface $r_9$ sits immediately behind the aperture stop, at the exit face of the positive cemented doublet L4. This is a strategically critical location for an aspherical corrector. Off-axis ray bundles diverge substantially at this point — the 105° field means chief rays at the field edge pass through the rear group at steep angles. A spherical surface at this position would introduce significant oblique spherical aberration and coma that increase rapidly with field angle. The aspherical departure reshapes the wavefront to compensate for these off-axis errors, enabling the lens to maintain image quality out to the full 288 mm image circle.

The aspherical surface also helps control distortion, which is a critical specification for architectural photography (the primary application of this lens). The patent claims "very low" distortion.

### Manufacturing method

Contemporary sources describe the aspherical surface as aspherically ground, indicating that it is a ground and polished glass asphere rather than a press-molded or hybrid (resin-on-glass) construction. This is consistent with the era and application: in the late 1990s, precision CNC grinding and polishing of glass aspheres had become technically feasible for production optics, but the process remained demanding and expensive. The relatively large diameter of the aspherical element (rear group elements in the production lens have a mount diameter of 54 mm) made molding impractical; ground glass was the only viable manufacturing route. The Schneider brochure notes that aspheric technology had "only recently been used at reasonable cost in mass production" at the time of the lens's introduction.

## Petzval Sum and Field Curvature

The surface-by-surface Petzval sum of the Example 2 prescription is:

$$\sum_{k=1}^{11} \frac{\varphi_k}{n_k \cdot n'_k} = +0.00006 \; \text{mm}^{-1}$$

This corresponds to a Petzval radius of approximately 16,800 mm — for practical purposes, a perfectly flat Petzval surface. Achieving near-zero Petzval sum is the sine qua non of a wide-angle design covering a 105° field, because even a modest Petzval curvature would produce unacceptable defocus at the field edges on a flat film plane.

The near-zero sum is achieved through the balanced negative–positive–negative power architecture. The dominant positive contributions come from the N-LAK33B elements L2 and L3 and the biconvex L4a; these are offset by the negative contributions of L1 (KF9), L4b (F2), and L5 (K10). The high refractive index of N-LAK33B ($n_e = 1.758$) is particularly significant: because the Petzval contribution of a surface is $\varphi / (n \cdot n')$, a high-index glass reduces the Petzval contribution per unit of optical power, making it easier to balance the positive and negative contributions.

## Design Heritage and Context

The Super-Symmar XL 5.6/110 occupies a historically significant position as part of what Schneider describes as the first aspherical lens series for large-format photography. Prior to its introduction in the late 1990s, all large-format lenses relied exclusively on spherical surfaces — a constraint that limited the achievable combination of field angle, aperture, compactness, and image quality.

The inventor, Hiltrud Ebbesmeier née Schitthof, also designed the predecessor Super-Symmar HM series (US 4,773,745, patented 1988), an 8-element, 6-group wide-angle design with 80° coverage and all-spherical surfaces. The Super-Symmar XL represents a significant departure from the HM: the element count dropped from eight to six, the field angle increased from 80° to 105°, and an aspherical surface was introduced — a more compact and optically advanced design from the same hand.

The design sits within a broad lineage of compact wide-angle lenses for large format. The fundamental architecture of negative outer menisci flanking a positive core with a central stop traces back to designs such as the Topogon (Robert Richter, Carl Zeiss Jena, 1933) and the Biogon (Ludwig Bertele, originally designed at Wild Heerbrugg in the mid-1930s, later produced by Carl Zeiss). The Super-Symmar XL shares the same architectural DNA — negative-positive-positive–stop–positive-negative — but departs from these predecessors through its asymmetric power distribution, the cemented achromatic rear group with near-index/far-dispersion glass pairing, and the ground glass aspherical corrector surface.

Schneider's own wide-angle flagship prior to the Super-Symmar XL was the Super-Angulon (8 elements / 4 groups, up to 110° field, all-spherical). The Super-Symmar XL 110 achieved comparable 105° field coverage with two fewer elements and substantially lower weight. For context, the Super-Angulon 5.6/90 XL (the nearest comparable focal length in that series) weighs 665 g with a 259 mm image circle at f/22, while the 110 XL weighs approximately 425–430 g with a 288 mm image circle — a meaningful reduction in size and weight at a longer focal length and larger image circle, enabled by the aspherical corrector.

The production lens was manufactured in a Copal No. 1 shutter with aperture range f/5.6 to f/45, front filter thread M67, rear filter thread M52, and weighed approximately 425 g (Schneider specification). It covered film formats up to 5×7 inches when stopped down, with a maximum image circle of 288 mm at f/22 providing ±76 mm of shift on 4×5 inch film — sufficient for extreme architectural movements. The compact 54 mm rear barrel extends only 18.9 mm behind the lens board, facilitating mounting on a wide range of field and view cameras.

## Sources

1. US 5,870,234 (Ebbesmeier née Schitthof / Jos. Schneider Optische Werke Kreuznach), "Compact Wide-Angle Lens," granted February 9, 1999. German priority DE 196 36 152.4, filed September 6, 1996.
2. US 4,773,745 (Schitthof / Jos. Schneider Optische Werke Kreuznach), "Compact Wide-Angle Objective," granted September 27, 1988. Predecessor design: Super-Symmar HM series.
3. Schneider-Kreuznach, *Large Format Lenses* product brochure (catalog number 10811b), published specifications and technical data.
4. Schneider-Kreuznach official product specification for the Super-Symmar XL Aspheric 5.6/110 XL: EFL 109.9 mm ± 1%, 6 elements / 4 groups, image circle 288 mm at f/22 (105°), 186 mm at full aperture (80°), Copal No. 1 shutter, ≈425 g.
5. Schott AG, Optical Glass Catalog (current edition), for glass identification: KF9, N-LAK33B, N-SK5, F2, K10.
