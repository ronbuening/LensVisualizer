# Optical Design Analysis: Hasselblad XCD 2,5/90V

## Patent Reference and Production Identification

**Patent:** JP 2022-99402 A (Japanese Patent Application Laid-Open)
**Title:** 撮像光学系と、撮像光学系を用いる撮像装置およびカメラシステム
("Imaging optical system, and imaging device and camera system using imaging optical system")
**Applicant:** Panasonic IP Management Co., Ltd.
**Inventor:** Nishioka Takehiro (西岡 毅洋)
**Filed:** 23 December 2020
**Published:** 5 July 2022
**Embodiment analyzed:** 数値実施例１ (Numerical Example 1), corresponding to 実施の形態１ (Embodiment 1)

### Patent-to-Production Matching

This patent is filed by Panasonic IP Management, not by Hasselblad (Victor Hasselblad AB) or its parent DJI. The prescription in Example 1 is normalised to a full-frame image circle ($\text{IH}_\text{max} = 21.633\;\text{mm}$, corresponding to a 43.27 mm diagonal). The Hasselblad XCD 2,5/90V is a medium-format lens covering a 43.8 × 32.9 mm sensor (diagonal ≈ 54.78 mm). The production lens is identified with this patent by uniform geometric scaling and convergent specification matching:

1. **Focal length.** The patent's EFL = 71.28 mm. Scaling by the factor $90/71.28 = 1.2626$ yields 90.0 mm, matching the production focal length exactly. The Hasselblad product page also cites a 71 mm full-frame equivalent focal length.
2. **Maximum aperture.** The patent's F/2.56 corresponds to the marketed f/2.5 (typical rounding from a design value).
3. **Element and group count.** The patent describes 9 elements. Counting air-separated groups: L1 | L2–L3 | L4 | L5–L6 | L7–L8 | L9 yields 6 groups. Hasselblad states "nine elements in six groups."
4. **Special elements.** The patent places one ED glass (S-FPL51 class, $\nu_d = 81.6$) at L2 and one double-aspherical element at L9 made from a moldable glass (L-BBH1 class). Hasselblad describes "one ED element and one specially made large-diameter aspherical element."
5. **Focus mechanism.** The patent's G2 (L5–L6 cemented doublet) moves toward the image during close focus, with G1 and G3 fixed. Hasselblad describes "a lighter, smaller focusing lens group" driven by a linear stepping motor — consistent with the compact two-element cemented focus group.
6. **Half-field angle.** The patent's 17.10° matches Hasselblad's stated 34° diagonal field of view (half = 17°).
7. **Scaled image height.** $21.633 \times 1.2626 = 27.31\;\text{mm}$, versus the medium-format half-diagonal of 27.39 mm — a 0.08 mm discrepancy, well within design tolerance.
8. **Patent timing.** Filed December 2020, published July 2022. The XCD 2,5/90V was announced in 2023, consistent with a 2–3 year development pipeline from patent publication to product launch.

The community has independently noted this correspondence (see DPReview forum thread "Hasselblad Lens Manufacturers List," October 2025), attributing the optical design to Panasonic with Hasselblad licensing the design and integrating it into their mechanical and electronic lens platform.

**Throughout this document, all dimensions refer to the patent's full-frame normalisation unless otherwise noted.** To convert any dimension to the production Hasselblad lens, multiply by approximately 1.263.

---

## Optical Architecture

The design is a three-group inner-focus prime with positive–negative–positive power distribution:

$$G1(+) \;\;—\;\; \text{STO} \;\;—\;\; G2(-) \;\;—\;\; G3(+)$$

The group focal lengths are: $f_\text{G1} = +52.9\;\text{mm}$, $f_\text{G2} = -37.1\;\text{mm}$, $f_\text{G3} = +56.8\;\text{mm}$.

The total track is 83.21 mm for $f = 71.28\;\text{mm}$, giving $\text{TL}/f = 1.167$. This ratio exceeds unity, so the design is not telephoto in the strict sense (telephoto requires $\text{TL}/f < 1$, where the physical length is shorter than the focal length). Instead, the total track is approximately 17% longer than the focal length — a compact but conventional configuration typical of moderate-aperture portrait-length primes. The back focal distance from the last glass surface (L9 rear) to the paraxial image is 12.43 mm (air-equivalent), providing adequate clearance for the Hasselblad XCD mount flange distance when scaled.

**Group G1 (positive, 4 elements):** Front collector comprising L1 (positive meniscus), L2–L3 (cemented doublet), and L4 (positive meniscus). The L2–L3 cemented pair is a net-negative achromatic doublet ($f \approx -69\;\text{mm}$), with ED-crown L2 ($f = +55.2$) providing chromatic correction and dense-flint L3 ($f = -28.7$) providing the achromatising negative power. G1's overall positive power ($f_\text{G1} = +52.9\;\text{mm}$) derives from L1 (+58.5) and L4 (+60.5) overwhelming the negative L2–L3 core. The positive–positive–negative–positive arrangement within G1 distributes the converging power over multiple surfaces, reducing surface-by-surface aberration contributions.

**Aperture stop:** Located between G1 and G2, after L4. This mid-system stop placement allows both groups to share aberration correction responsibilities and yields a relatively symmetrical aberration profile about the stop.

**Group G2 (negative, 2 elements):** The inner-focus group, consisting of L5–L6 cemented doublet (positive ultra-high-dispersion flint + negative ultra-high-index glass, $f_\text{G2} = -37.1\;\text{mm}$). This group provides the system's only negative power contribution between the two positive groups, creating a diverging intermediate beam that G3 then re-converges. During focusing from infinity to close distance, G2 translates toward the image along the optical axis, expanding the G1–G2 gap (d9) while compressing the G2–G3 gap (d13).

**Group G3 (positive, 3 elements):** Rear relay comprising L7–L8 cemented doublet (positive lanthanum crown + negative dense flint) and L9 (negative aspherical meniscus field flattener). This group relays the intermediate image formed by G1+G2 to the sensor plane, corrects residual field curvature and astigmatism, and provides the final chromatic balancing.

The overall Petzval sum is $+0.001656\;\text{mm}^{-1}$, corresponding to a Petzval radius of approximately 604 mm — a gently inward-curving field that L9's negative meniscus shape and aspherical profiles correct for flat-field performance across the medium-format image circle.

---

## Element-by-Element Analysis

### L1 — Positive Meniscus, Convex to Object

$n_d = 1.72916$, $\nu_d = 54.7$. Glass: S-LAH55V (OHARA) — lanthanum crown. $f = +58.5\;\text{mm}$.

L1 is the front positive collector. Its meniscus form (R1 = +37.42, R2 = +286.33) bends the incoming collimated beam inward while distributing the refraction across both surfaces to minimise spherical aberration at this large-aperture position. The lanthanum crown provides the necessary refractive index ($n_d = 1.729$) to achieve useful power with moderate curvatures, keeping the element diameter manageable. At $\nu_d = 54.7$ this glass contributes relatively little chromatic error on its own, but its contribution is balanced against L2–L3 in the achromatic scheme.

### L2 — Biconvex Positive (Cemented with L3)

$n_d = 1.49700$, $\nu_d = 81.6$. Glass: S-FPL51 (OHARA) — ED fluorophosphate. $f = +55.2\;\text{mm}$.

L2 is the extra-low-dispersion (ED) element identified by Hasselblad as the lens's single ED component. S-FPL51 is OHARA's workhorse fluorophosphate crown with extremely low dispersion ($\nu_d = 81.54$ per catalog; the patent rounds to 81.6) and anomalous partial dispersion, enabling correction of secondary spectrum when paired with an appropriate flint. Its low refractive index ($n_d = 1.497$) necessitates strong curvatures (R1 = +28.69, R2 ≈ flat at −587.6), which is why it carries the most steeply curved front surface in G1.

The biconvex shape concentrates positive power at the beam's widest cross-section within G1, where the marginal ray height is largest. This placement maximises the chromatic leverage of the ED glass — axial colour correction is proportional to $y^2 \cdot \phi / \nu_d$, and the high marginal ray at L2 amplifies the ED glass's benefit.

### L3 — Biconcave Negative (Cemented with L2)

$n_d = 1.77047$, $\nu_d = 29.7$, $P_{g,F} = 0.5951$. Glass: Unmatched dense flint (770/297). $f = −28.7\;\text{mm}$.

L3 provides the negative power that achromatises L2's positive contribution. The cement interface with L2 shares the radius $R = −587.60\;\text{mm}$ (nearly flat), meaning the chromatic correction at this junction relies primarily on the $\Delta n$ across the cement rather than curvature. The strongly curved rear surface (R = +22.97) carries most of L3's diverging power. Because L3's negative power ($f = -28.7$) is substantially stronger than L2's positive power ($f = +55.2$), the cemented L2–L3 pair is a net-negative achromatic doublet ($f \approx -69\;\text{mm}$). G1 achieves its overall positive power through L1 and L4, which together overwhelm the negative core.

The glass is a dense flint with $\nu_d = 29.7$ and patent-published $P_{g,F} = 0.5951$. No current OHARA, Schott, or HOYA catalog glass matches this exact ($n_d$, $\nu_d$) pair; the closest OHARA entry is S-TIH4 ($n_d = 1.7552$, $\nu_d = 27.5$), which differs by $\Delta n_d = 0.015$. The glass may be a special-order or discontinued melt, or it may belong to a vendor catalog not publicly indexed (CDGM, HIKARI). The patent's publication of $P_{g,F} = 0.5951$ is significant: it allows evaluation of condition (5), which constrains the anomalous dispersion of G1's negative element to ensure that the G1 achromatic pair also suppresses secondary spectrum. Computing condition (5):

$$P_{g,F} + 0.001802 \times \nu_{d,\text{G1n}} - 0.64832 = 0.5951 + 0.001802 \times 29.7 - 0.64832 = +0.0003$$

This value is almost exactly zero — meaning L3's glass falls very near the Schott normal line for $P_{g,F}$ versus $\nu_d$. In other words, L3 is a conventional (non-anomalous) flint. The secondary-spectrum correction in G1 comes not from anomalous flint, but from the anomalous positive dispersion of the ED crown (L2, S-FPL51), which pulls the secondary spectrum in the opposite direction from a normal crown. This is a well-known design strategy: pair an anomalous crown with a *normal* flint to correct secondary spectrum, rather than the alternative approach of using a KZFS-class anomalous negative flint.

### L4 — Positive Meniscus, Convex to Object

$n_d = 1.77047$, $\nu_d = 29.7$. Glass: same as L3, dense flint (770/297). $f = +60.5\;\text{mm}$.

L4 uses the same glass as L3, which is unusual for a positive element — dense flints are typically selected for negative elements where their high dispersion is leveraged for achromatisation. Here, L4 serves a different purpose: positioned as the last element before the aperture stop, it completes the convergence of the marginal ray bundle while introducing controlled higher-order spherical aberration to balance L1's contribution. Its meniscus form (R1 = +31.93, R2 = +97.67) keeps both surfaces at moderate incidence angles, limiting the amount of coma generated at this off-axis-sensitive position near the stop.

The choice of a high-index ($n_d = 1.770$) dense flint for a positive element is justified by the patent's conditional expressions: the chromatic balance in G1 is governed by conditions (4) and (5), which constrain the *maximum* $\nu_d$ among G1's positive elements (condition 4 is satisfied by L2's $\nu_d = 81.6$) and the partial dispersion of G1's negative element (condition 5). L4's low Abbe number means it introduces some positive chromatic contribution that partially offsets L2's ED correction — but this is deliberate, because the moving focus group G2 also manages chromatic balance, and the patent's conditions (1)–(3) tightly constrain G2's dispersion properties to control focus-dependent colour shift. Over-correcting axial colour in G1 would leave the system vulnerable to colour shift during focusing.

### L5 — Biconvex Positive (Cemented with L6, Focus Group)

$n_d = 1.85896$, $\nu_d = 22.7$. Glass: S-NPH4 (OHARA) — ultra-high-dispersion flint. $f = +24.6\;\text{mm}$.

L5 is the positive element of the inner-focus cemented doublet G2. Its biconvex form (R1 = +154.18, R2 = −24.27) places most of the converging power on the strongly curved rear surface. S-NPH4 is an extraordinary glass choice for a positive element: with $\nu_d = 22.7$, it is among the most dispersive glasses in the OHARA catalog, and its refractive index of 1.859 enables strong curvature power with physically reasonable radii.

The rationale for this counter-intuitive glass selection is explained by patent conditions (1) and (2). Condition (1) requires $15 < \nu_{d,\text{G2p}} < 27$: the positive focus element *must* be highly dispersive. Condition (2) requires the Abbe-number difference between G2's negative and positive elements to fall in the range $7.5 < \nu_{d,\text{G2n}} - \nu_{d,\text{G2p}} < 16$. Together, these conditions mean G2 is a "reverse" achromatic pair where the positive element has *lower* Abbe number than the negative. This reverse-dispersion architecture suppresses chromatic focus shift — as G2 moves during focusing, it introduces approximately equal but opposite colour contributions from L5 and L6, keeping the axial colour balance stable across the focus range. The patent text (¶0118–0121) explicitly states that violating these bounds makes it difficult to correct both axial and lateral colour while maintaining stable chromatic performance across focus distances.

### L6 — Biconcave Negative (Cemented with L5, Focus Group)

$n_d = 1.91082$, $\nu_d = 35.2$. Glass: Unmatched ultra-high-index glass (911/352). $f = −14.6\;\text{mm}$.

L6 is the negative element of the focus doublet. Its ultra-high refractive index ($n_d = 1.911$) — among the highest in the prescription — allows strong negative power ($f = −14.6\;\text{mm}$) with a biconcave form (R1 = −24.27, R2 = +29.63) whose radii are moderate enough to control higher-order aberrations. The net power of the L5–L6 cemented pair is negative ($f_\text{G2} \approx -37\;\text{mm}$, estimated from paraxial group trace), which is the defining characteristic of G2 as stated in the patent.

The glass does not match any current public catalog entry. The closest candidate is L-LAH86 (OHARA, $n_d = 1.901$, $\nu_d = 35.0$), which differs by $\Delta n_d = 0.010$. The six-digit code 911/352 places this glass in the ultra-high-index lanthanum region of the glass map. It may be a proprietary Panasonic formulation or a catalog glass from a vendor not fully indexed in public sources.

Condition (3) constrains $1.70 < n_{d,\text{G2n}} < 2.1$: the negative focus element needs high index to maintain gentle curvatures that minimise aberration sensitivity to decentering during focus travel. A focus group that moves along the optical axis is susceptible to manufacturing tolerances, and elements with steep curvatures amplify tilt and decenter errors. The high-index glass in L6 is thus both an optical and a mechanical design choice.

### L7 — Biconvex Positive (Cemented with L8)

$n_d = 1.69680$, $\nu_d = 55.5$. Glass: S-LAL14 (OHARA) — lanthanum crown. $f = +23.0\;\text{mm}$.

L7 is the most powerful positive element in the entire system ($f = +23.0\;\text{mm}$) and anchors G3's relay function. Its biconvex form (R1 = +44.49, R2 = −23.39) concentrates converging power on the strongly curved rear surface. S-LAL14 is a moderate-index lanthanum crown with good colour correction properties ($\nu_d = 55.5$), providing the bulk of G3's positive power while generating manageable chromatic contributions.

### L8 — Negative Meniscus, Convex to Image (Cemented with L7)

$n_d = 1.84666$, $\nu_d = 23.8$. Glass: S-TIH53 (OHARA) — dense flint. $f = −135.4\;\text{mm}$.

L8 is cemented to L7's rear surface and provides the achromatising negative contribution for the G3 relay doublet. Its meniscus form (R1 = −23.39, R2 = −33.89) makes it a weakly negative element ($f = −135\;\text{mm}$) — far weaker than L7. This asymmetry means the L7–L8 doublet is a net positive achromat with only partial colour cancellation, which is deliberate: the residual positive chromatic contribution from this doublet balances the colour shifts introduced by the focus group G2 and the aspherical field flattener L9.

S-TIH53 ($\nu_d = 23.8$) is a high-dispersion dense flint — the same glass family used in many Panasonic and other Japanese optical designs for achromatising positions. Its exact match to the OHARA catalog ($\Delta n_d = 0$) is confirmed.

### L9 — Negative Meniscus, Convex to Image (2× Aspherical)

$n_d = 1.68863$, $\nu_d = 31.2$. Glass: L-BBH1 (OHARA) — moldable barium borate glass. $f = −36.3\;\text{mm}$.

L9 is the "specially made large-diameter aspherical element" described by Hasselblad. Both surfaces are aspherical. It is the rearmost glass element, positioned 12.31 mm after L8 and 10.68 mm (plus cover glass) before the image plane — deep in the diverging beam where field-angle-dependent aberrations (field curvature, astigmatism, distortion) are most pronounced and most accessible to aspherical correction.

The meniscus form (R1 = −16.52, R2 = −51.60) is convex toward the image, consistent with the patent's description (¶0034). The negative focal length ($f = −36.3\;\text{mm}$) satisfies condition (7): $f_\text{G3n}/f = -36.3/71.28 = -0.509$, within the required range $-1.2 < f_\text{G3n}/f < -0.2$.

**Glass and manufacturing.** L-BBH1 is an OHARA low-Tg (L-prefix) glass specifically formulated for precision glass molding (PGM). The low glass transition temperature allows the aspherical profiles to be directly pressed into the glass during hot molding, rather than requiring expensive diamond-turning or polishing of a free-form surface. This is consistent with Hasselblad's description of the element as "specially made" — the mold itself is the precision tool, and each element is formed to the aspherical specification in a single pressing operation.

---

## Glass Selection Summary

| Element | $n_d$ | $\nu_d$ | Glass | Vendor | Role |
|---------|-------|---------|-------|--------|------|
| L1 | 1.72916 | 54.7 | S-LAH55V | OHARA | Lanthanum crown, front collector |
| L2 | 1.49700 | 81.6 | S-FPL51 | OHARA | **ED fluorophosphate** — primary chromatic corrector |
| L3 | 1.77047 | 29.7 | Unmatched (770/297) | — | Dense flint, achromatising partner to L2 |
| L4 | 1.77047 | 29.7 | Unmatched (770/297) | — | Dense flint, positive pre-stop converger |
| L5 | 1.85896 | 22.7 | S-NPH4 | OHARA | Ultra-high-dispersion flint, focus group positive |
| L6 | 1.91082 | 35.2 | Unmatched (911/352) | — | Ultra-high-index glass, focus group negative |
| L7 | 1.69680 | 55.5 | S-LAL14 | OHARA | Lanthanum crown, relay positive |
| L8 | 1.84666 | 23.8 | S-TIH53 | OHARA | Dense flint, relay achromatiser |
| L9 | 1.68863 | 31.2 | L-BBH1 | OHARA | **PGM moldable** barium borate, aspherical field flattener |

The glass palette divides naturally into three functional tiers. In G1, the ED crown S-FPL51 paired with the 770/297 dense flint provides primary chromatic and secondary-spectrum correction. In G2, the reverse-dispersion pair (ultra-high-dispersion S-NPH4 positive + ultra-high-index 911/352 negative) ensures chromatically stable inner focusing. In G3, the conventional S-LAL14/S-TIH53 achromatic pair handles relay colour correction, while the PGM-moldable L-BBH1 enables cost-effective aspherical field flattening.

Five of the nine elements use confirmed OHARA catalog glasses; three elements use glasses with no exact public catalog match (marked with six-digit codes); and one element (L9) uses a confirmed OHARA PGM glass. The three cemented interfaces (L2–L3, L5–L6, L7–L8) are modelled in the patent as thin layers with $n_d = 1.56732$, $\nu_d = 42.8$, and $d = 0.01\;\text{mm}$, consistent with a UV-cure optical adhesive (¶0022, ¶0025, ¶0028).

---

## Chromatic Correction Strategy

Hasselblad describes the XCD 2,5/90V as delivering "an apochromatic effect for accurate colour correction." The patent prescription allows a partial evaluation of this claim.

The primary chromatic correction occurs in G1's cemented doublet: the ED crown L2 (S-FPL51, $\nu_d = 81.6$) provides anomalous positive partial dispersion ($\Delta P_{g,F} > 0$), enabling secondary-spectrum reduction beyond what a conventional crown achieves. The achromatising flint L3 has $P_{g,F} = 0.5951$, which condition (5) evaluates to $+0.0003$ — essentially zero deviation from the Schott normal line. This means L3 is a *normal-dispersion* flint, not an anomalous one.

The chromatic strategy thus relies on an anomalous crown paired with a normal flint. This is a well-established approach: the ED crown's anomalous partial dispersion pulls the secondary spectrum in one direction, and since the flint is normal (sitting on the reference line), the net partial-dispersion mismatch is reduced compared to a normal-crown + normal-flint pair. However, full apochromatic correction (three-wavelength coincidence at focus) typically requires both elements in the achromatic pair to be anomalous, or a more complex multi-element correction scheme.

The focus group G2 adds a second layer of chromatic control. The reverse-dispersion pairing (conditions 1–3) ensures that as G2 moves during focusing, the colour contributions of L5 and L6 track each other, minimising chromatic focus shift across the object-distance range. The G3 relay doublet (L7–L8, S-LAL14 / S-TIH53) provides a third conventional achromatic correction stage.

The patent's aberration plots (Figure 2) show the d-line, F-line, and C-line spherical aberration curves closely grouped with small residual separation at F/2.56, consistent with well-corrected chromatic performance. Hasselblad's use of "apochromatic *effect*" — rather than "apochromatic design" — is a careful characterisation that reflects the improved but not necessarily full-APO level of correction achievable with a single anomalous element. The full-aperture patent data ($n_d$ and $\nu_d$ only, with $P_{g,F}$ published for one element) does not provide enough spectral information to fully quantify the residual secondary spectrum; a definitive APO assessment would require Sellmeier coefficients or measured line indices across the full design.

---

## Focus Mechanism

The lens uses inner focusing via Group G2 (L5–L6 cemented doublet). During focusing from infinity to close distance:

- **G1 (L1–L4): fixed** relative to the image plane.
- **Aperture stop: fixed.**
- **G2 (L5–L6): moves toward the image** along the optical axis.
- **G3 (L7–L9): fixed** relative to the image plane.

This produces three variable air gaps:

| Gap | Location | Description |
|-----|----------|-------------|
| d9 | After stop, before L5 | Expands as G2 moves toward image |
| d13 | After L6, before L7 | Compresses as G2 moves toward image |
| d19 | After L9 (BFD) | Remains fixed (G3 is stationary) |

The patent's Figure 1(b) labels these as d9, d13, and d19. However, since G3 is fixed relative to the image plane, d19 does not change during focus — only d9 and d13 are true variable gaps. The focus mechanism is therefore a two-gap inner-focus system.

**Advantages of this architecture:**

1. **Compact focus travel.** The L5–L6 doublet is small and light (only 2 elements, cemented), enabling rapid autofocus with Hasselblad's linear stepping motor.
2. **No front-element rotation.** The front group is stationary, so filter orientation is preserved during focus — important for polariser and graduated-filter use.
3. **Chromatically stable focus.** The reverse-dispersion glass pair in G2 (conditions 1–3) minimises colour shift across the focus range.
4. **No overall length change.** Since G1 and G3 are both fixed, the lens's physical length does not change during focusing, which simplifies weather sealing.

The Hasselblad product specification lists a minimum focus distance of 0.67 m (26.4 inches). Computing the close-focus gap values (via paraxial conjugate root-finding at the patent-scale MFD of 530.6 mm), the G2 focus travel is 7.43 mm, with the following air-gap values:

| Gap | Infinity focus | Close focus (0.67 m) |
|-----|---------------|---------------------|
| d9 (STO → L5) | 1.998 mm | 9.431 mm |
| d13 (L6 → L7) | 12.103 mm | 4.671 mm |

The close-focus EFL drops from 71.28 mm to approximately 59.8 mm (a ~16% reduction), consistent with the effective focal-length shortening typical of negative inner-focus groups at close conjugates. In the scaled production lens, the G2 focus travel is approximately 9.4 mm.

---

## Aspherical Surfaces

The design contains two aspherical surfaces, both on L9 (the rear field-flattening element). No other element in the system is aspherical.

### Aspheric Equation Convention

The patent (¶0180–0181) defines the sag as:

$$Z = \frac{h^2 / r}{1 + \sqrt{1 - (1+\kappa)(h/r)^2}} + \sum A_n \cdot h^n$$

where $\kappa$ is the conic constant and $A_n$ are the polynomial aspheric coefficients. Comparing with the standard form $Z = ch^2/[1 + \sqrt{1-(1+K)c^2 h^2}] + A_4 h^4 + \ldots$, the mapping is $\kappa_\text{patent} = K_\text{standard}$ directly.

### Surface 18 (L9 Front)

$R = -16.518\;\text{mm}$, $K = -0.05677$

| Coeff. | Value |
|--------|-------|
| $A_4$ | $-3.73353 \times 10^{-6}$ |
| $A_6$ | $+4.97385 \times 10^{-7}$ |
| $A_8$ | $-3.47042 \times 10^{-9}$ |
| $A_{10}$ | $+8.05580 \times 10^{-12}$ |
| $A_{12}$ | $+6.51315 \times 10^{-14}$ |
| $A_{14}$ | $-4.34322 \times 10^{-16}$ |
| $A_{16}$ | $+7.82725 \times 10^{-19}$ |

The conic constant $K = -0.057$ makes this a weakly prolate ellipsoidal base — very close to spherical, but slightly flattened at the rim compared to a sphere. Decomposing the total aspherical departure into conic and polynomial contributions reveals that both contribute to the net profile. The weakly prolate conic produces a modest positive departure (flattening) that grows with height — approximately $+24\;\mu\text{m}$ at $h = 10\;\text{mm}$. Among the polynomial terms, $A_6$ ($+4.97 \times 10^{-7}$) dominates at heights above about 4 mm: at $h = 10\;\text{mm}$ it contributes $+497\;\mu\text{m}$ of flattening, but this is partially cancelled by $A_8$ ($-347\;\mu\text{m}$) and $A_4$ ($-37\;\mu\text{m}$), yielding a net polynomial contribution of $+223\;\mu\text{m}$. The combined conic + polynomial departure at $h = 10\;\text{mm}$ is approximately $+247\;\mu\text{m}$ (the aspheric surface is flatter than the base sphere by about a quarter-millimetre at the rim), increasing rapidly to $+647\;\mu\text{m}$ at $h = 12\;\text{mm}$.

This front surface primarily corrects higher-order field curvature and astigmatism. Its position deep in the diverging beam means that off-axis ray bundles intercept it at progressively larger heights, giving the aspherical correction strong field-angle dependence.

### Surface 19 (L9 Rear)

$R = -51.601\;\text{mm}$, $K = 0$ (spherical base)

| Coeff. | Value |
|--------|-------|
| $A_4$ | $-2.66877 \times 10^{-5}$ |
| $A_6$ | $+3.78516 \times 10^{-7}$ |
| $A_8$ | $-2.94650 \times 10^{-9}$ |
| $A_{10}$ | $+1.24284 \times 10^{-11}$ |
| $A_{12}$ | $-2.45662 \times 10^{-14}$ |
| $A_{14}$ | $+9.31552 \times 10^{-18}$ |
| $A_{16}$ | $+2.28212 \times 10^{-20}$ |

The rear surface has a spherical base ($K = 0$) with a dominant $A_4$ coefficient that is an order of magnitude larger than surface 18's ($-2.67 \times 10^{-5}$ versus $-3.73 \times 10^{-6}$). Since this is a concave surface ($R < 0$), the negative $A_4$ makes the rim *more* deeply concave than the base sphere. At $h = 10\;\text{mm}$, the departure is $-82\;\mu\text{m}$, reaching $-123\;\mu\text{m}$ at $h = 12\;\text{mm}$.

This surface is the closest optical element to the image plane (only 10.68 mm of air plus cover glass separate it from the sensor). At this location, the chief ray height is large relative to the marginal ray height, making it the optimal position for correcting distortion and lateral colour. The sign of its departure (making the surface more concave at the rim) corresponds to a progressive strengthening of negative power at the periphery — consistent with field-flattening duty.

### Manufacturing Method

Both aspherical surfaces are on L9, which uses OHARA L-BBH1 — a glass with the "L-" prefix denoting low glass-transition temperature, specifically formulated for precision glass molding (PGM). In PGM, a precision-machined mold (typically tungsten carbide or silicon carbide) with the inverse aspherical profile is heated above the glass's softening point, and the glass preform is pressed into shape in a single operation. This method produces aspherical surfaces with sub-micron form accuracy at a fraction of the cost of conventional polishing or diamond-turning, and is the standard manufacturing route for high-volume consumer and professional camera lenses with molded aspherics.

---

## Conditional Expressions

The patent defines nine conditional inequalities that govern the optical design. Example 1 satisfies all of them:

| Condition | Expression | Value | Range | Status |
|-----------|-----------|-------|-------|--------|
| (1) | $\nu_{d,\text{G2p}}$ | 22.7 | 15–27 | ✓ |
| (2) | $\nu_{d,\text{G2n}} - \nu_{d,\text{G2p}}$ | 12.5 | 7.5–16 | ✓ |
| (3) | $n_{d,\text{G2n}}$ | 1.91082 | 1.70–2.10 | ✓ |
| (4) | $\nu_{d,\text{G1p,max}}$ | 81.6 | 65–100 | ✓ |
| (5) | $P_{g,F} + 0.001802 \nu_{d,\text{G1n}} - 0.64832$ | +0.0003 | −0.07 to +0.015 | ✓ |
| (6) | TL / $f$ | 1.167 | 0.9–1.4 | ✓ |
| (7) | $f_\text{G3n}$ / $f$ | −0.509 | −1.2 to −0.2 | ✓ |
| (8) | $(R_{21}+R_{22})/(R_{21}-R_{22})$ | 0.728 | 0.3–1.0 | ✓ |
| (9) | BF / IH$_\text{max}$ | 0.58 | 0.4–1.8 | ✓ |

Conditions (1)–(3) are the core innovation of this patent: they jointly constrain the focus group's glass selection to achieve chromatically stable inner focusing with a compact, lightweight doublet. Condition (5) constrains the secondary-spectrum correction strategy in G1 by bounding the anomalous dispersion of the negative flint. Condition (6) ensures the design remains physically compact (total length between 0.9× and 1.4× the focal length). Condition (7) ensures L9 has sufficient negative power for field flattening without over-correcting. Condition (8) constrains the shape factor of L5 to control aberration sensitivity. Condition (9) bounds the back focal distance relative to the image height for sensor clearance.

---

## Design Heritage and Context

The positive–stop–negative–positive three-group architecture with inner-focus via the negative group is not unique to this patent — it descends from a well-established family of telephoto and portrait-length prime designs. Patent references (¶0003) cite JP 2016-173398, JP 2016-173397, and JP 2018-060079 as prior art, all describing similar G1(+)–G2(−)–G3(+) inner-focus systems.

What distinguishes this patent is the specific glass constraints for the focus group. The requirement for an ultra-high-dispersion positive element ($\nu_d < 27$) paired with a moderately dispersive negative element in a "reverse" achromatic configuration is the patent's primary claim. This approach yields a focus group that is simultaneously compact (only 2 cemented elements), lightweight (suitable for fast AF with a linear motor), and chromatically stable across the entire focus range from infinity to the 0.67 m MFD.

The Hasselblad XCD 2,5/90V production lens builds on this optical foundation by adding Hasselblad's mechanical platform: the integrated leaf shutter (capable of 1/4000s with full flash sync), the linear stepping motor focus drive with PDAF compatibility, and the push-pull MF/AF clutch ring. The optical prescription is scaled uniformly from the patent's full-frame normalisation to medium format, with the cover glass and sensor-side components adapted to the Hasselblad X-system mount geometry.

---

## Sources

- JP 2022-99402 A. "撮像光学系と、撮像光学系を用いる撮像装置およびカメラシステム." Panasonic IP Management Co., Ltd. Published 5 July 2022. All numerical data, conditional expressions, and figure references in this document cite this patent.
- Hasselblad product page: "XCD 2,5/90V." https://www.hasselblad.com/x-system/lenses/xcd-90v/. Specifications for element/group count, ED and aspherical element count, focal length, MFD, and focus mechanism description.
- Hasselblad XCD 90V datasheet (PDF). Focal length 90 mm, equivalent 71 mm, 34° diagonal FOV, 9 elements / 6 groups.
- DPReview forum thread: "Hasselblad Lens Manufacturers List," October 2025. Community discussion of Panasonic patent attribution for XCD V-series lenses.
- OHARA Pocket Catalog, May 2023 edition. Glass identification for S-LAH55V, S-FPL51, S-NPH4, S-LAL14, S-TIH53, L-BBH1.
