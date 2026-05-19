# Olympus M.Zuiko Digital ED 40-150mm f/2.8 PRO — Patent Optical Analysis

## Patent Reference and Production Identification

**Patent:** US 2015/0168697 A1, "Zoom Lens and Zoom Lens Apparatus Using the Same"
**Applicant:** Olympus Imaging Corp., Tokyo (JP)
**Inventor:** Yasuji Ogata
**Filed:** December 16, 2014 (US); **Priority:** JP 2013-259561, December 16, 2013
**Published:** June 18, 2015
**Embodiment analyzed:** Example 4 (Numerical Example 4, ¶0316)

The following evidence converges to identify Example 4 as the prescription underlying the production Olympus M.Zuiko Digital ED 40-150mm f/2.8 PRO:

1. **Element and group count.** Example 4 comprises 16 glass elements whose surfaces form 10 air-separated lens components, arranged into six zoom-unit groups (G1–G6). The production lens is marketed as 16 elements in 10 groups.
2. **Focal length range.** The patent states $f = 40.81$–$147.00\;\text{mm}$, a 3.60× zoom ratio. On the Micro Four Thirds sensor (image height 10.82 mm, matching the patent's $\text{IH} = 10.82\;\text{mm}$), this yields a 35mm-equivalent range of approximately 82–294 mm, consistent with the marketed 80–300 mm.
3. **Constant f/2.8 aperture.** The patent specifies $F_\text{NO} = 2.88$ at all three tabulated zoom positions. The production lens is marketed as constant f/2.8.
4. **Minimum focus distance.** The patent provides variable-gap tables for a 0.7 m object-to-image distance; the production lens specifies an MFD of 0.7 m.
5. **Dual VCM autofocus.** The patent describes G4 and G5 as independent focusing groups (¶0124, ¶0178), driven by separate motors. Olympus markets the 40-150mm f/2.8 PRO as featuring the "world's first Dual VCM (voice coil motor) AF," with two independently controlled focusing lens groups.
6. **Internal zoom — constant overall length.** Example 4 maintains a constant total track of 179.90 mm across all zoom positions; G1, G3, and G6 are stationary. The production lens maintains a constant physical length of 160 mm (the difference reflects the mechanical barrel, not optical track).
7. **Special glass count.** The manufacturer specifies 1 Super ED element, 1 EDA element, 3 ED elements, and 1 HD element. Example 4 contains L3 (Super ED, $\nu_d = 94.93$), L8 (EDA, $\nu_d = 81.61$, both surfaces aspherical), L2 and L11 (ED, $\nu_d = 81.61$), and L1 (HD, $n_d = 1.785$, $\nu_d = 26.29$). The manufacturer's total of "5 ED elements" counts all ED-class glass (including the Super ED and EDA), which aligns with 4–5 elements in the prescription depending on how the counting convention handles the EDA overlap.
8. **Three aspherical elements, four aspherical surfaces.** L8 (2 surfaces), L13 (1 surface), L15 (1 surface) — consistent with the manufacturer's "one aspherical ED element, two aspherical elements."
9. **Patent timing.** The JP priority date of December 2013 precedes the lens's September 2014 announcement at Photokina by nine months, consistent with standard optical-patent filing practice.

## Optical Architecture

The M.Zuiko 40-150mm f/2.8 PRO is a six-unit telephoto zoom with the power distribution positive–negative–positive–negative–negative–positive across G1–G6. The design belongs to the class of long-range telephoto zooms that place a strong positive third unit immediately behind the aperture stop to contract the beam diameter entering the rear groups, enabling a physically compact barrel despite the 3.6× zoom ratio and f/2.8 aperture.

At 16 elements in 10 air-separated components, the layout is:

| Unit | Elements | Power | Role | Zoom motion |
|------|----------|-------|------|-------------|
| G1 | L1–L3 (3 elements, 2 components) | Positive ($f_1 \approx +126$ mm) | Front collector; chromatic pre-correction | Fixed |
| G2 | L4–L7 (4 elements, 2 components) | Negative ($f_2 \approx -36$ mm) | Variator — principal zoom group | Moves image-ward monotonically |
| G3 | L8–L11 (4 elements, 3 components) | Positive ($f_3 \approx +28$ mm) | Strong positive relay; spherical aberration and coma correction | Fixed |
| G4 | L12–L13 (2 elements, 1 component) | Negative ($f_4 \approx -34$ mm) | Compensator / primary focus group (VCM 1) | Convex locus (zoom); image-ward (focus) |
| G5 | L14 (1 element, 1 component) | Negative ($f_5 \approx -43$ mm) | Secondary focus group (VCM 2) | Slight motion (zoom); independent (focus) |
| G6 | L15–L16 (2 elements, 1 component) | Positive ($f_6 \approx +32$ mm) | Field-flattener and exit-pupil control | Fixed |

The aperture stop is located immediately before G3 and moves with it (i.e., is stationary during zoom). G1 and G6 are fixed relative to the image plane, creating sealed endpoints that prevent dust ingress and sound leakage — a deliberate design choice for video use (¶0306–0307). G3 is also fixed, simplifying the zoom cam mechanism (¶0308).

Zooming is accomplished primarily by the image-ward travel of G2, which increases the G1–G2 air gap from 2.56 mm (wide) to 53.88 mm (tele) while collapsing the G2–G3 gap from 53.23 mm to 1.91 mm. G4 executes a compensating convex locus to correct the image-plane shift caused by G2's motion. The sum of all five variable air gaps is conserved at 78.67 mm across all zoom positions, confirming the internal-zoom, constant-length design.

The focal-length ratio $|f_2|/f_3$ is the design's signature parameter. The patent's conditional expression (1) requires $1.1 < |f_2|/f_3 < 1.8$; the patent's conditional expression table gives 1.308 for Example 4 (confirmed by independent ABCD ray trace at 1.307), well within the preferred range of 1.26–1.60 (¶0194–0195). Note that the patent's separately tabulated "unit focal lengths" ($f_2 = -35.94$, $f_3 = 28.37$) yield a different ratio of 1.267; this discrepancy arises because the unit focal lengths and the conditional expression table use different computation methods — the conditional expression values, which match the thick-lens ABCD computation, are authoritative. This ratio encodes the balance between G2's zoom leverage (shorter $|f_2|$ = stronger magnification change per mm of travel) and G3's converging power (shorter $f_3$ = tighter beam entering G4–G6, enabling smaller rear elements).

## Element-by-Element Analysis

### G1 — Front Collector Group

#### L1 — Negative Meniscus (HD Glass)

$n_d = 1.78470$, $\nu_d = 26.29$. Glass: S-TIH23 (OHARA). $f \approx -307\;\text{mm}$.

L1 is a negative meniscus with its convex surface facing the object. Its high refractive index ($n_d = 1.785$) and high dispersion ($\nu_d = 26.3$) qualify it as an HD (High Refractive Index and Dispersion) element in Olympus's nomenclature. It is cemented directly to L2 to form the first lens component, a classic negative–positive achromatic doublet that provides the initial correction of axial chromatic aberration at the front of the system where the marginal ray height is greatest. The strong curvature mismatch between its surfaces ($R_1 = +137.03$, $R_2 = +86.65$) creates the negative meniscus form that bends marginal rays inward without introducing excessive higher-order spherical aberration.

#### L2 — Biconvex Positive (ED Glass)

$n_d = 1.49700$, $\nu_d = 81.61$. Glass: FCD1 (HOYA) / S-FPL51 class (OHARA). $f \approx +138\;\text{mm}$.

L2 is the positive partner of the L1–L2 cemented doublet. Its very low dispersion ($\nu_d = 81.61$) provides the chromatic counterbalance to L1's high-dispersion glass, correcting longitudinal chromatic aberration at the entry to the system. The patent's conditional expression (4) requires the average Abbe number of positive lenses in G1 to be $70 \leq \bar{\nu}_{1p} \leq 100$; with L2 ($\nu_d = 81.61$) and L3 ($\nu_d = 94.93$), the average is 88.27, well within this range and indicating that the design prioritizes strong chromatic correction in G1 (¶0128–0131). The biconvex form ($R_1 = +86.65$, $R_2 = -321.61$) distributes positive power across both surfaces, minimizing spherical aberration contribution from any single surface.

#### L3 — Positive Meniscus (Super ED Glass)

$n_d = 1.43875$, $\nu_d = 94.93$. Glass: S-FPL53 (OHARA). $f \approx +260\;\text{mm}$.

L3 is the only Super ED element in the design. The manufacturer's marketing materials describe the lens as incorporating "Super EDA glass" for the first time in an M.Zuiko lens; this terminology likely refers to the lens containing both Super ED glass (L3) and EDA technology (L8) rather than to a single element that is simultaneously Super ED and aspherical, since in Example 4 the Super ED element (L3) is all-spherical and the aspherical ED element (L8) uses standard ED glass. S-FPL53 is a fluorophosphate crown with extremely low dispersion ($\nu_d = 94.93$), approaching the performance of crystalline fluorite ($\nu_d \approx 95.2$). Its anomalous partial dispersion ($\Delta P_{g,F}$ strongly positive) makes it effective for secondary-spectrum correction — particularly important in this telephoto zoom where residual longitudinal chromatic aberration at the tele end directly degrades contrast.

L3 is a positive meniscus with both surfaces convex-to-object ($R_1 = +96.82$, $R_2 = +624.25$), contributing modest positive power ($f \approx +260\;\text{mm}$) while keeping the beam diameter manageable for the downstream groups. It is air-spaced from the L1–L2 cemented doublet by only 0.15 mm, forming a near-contact triplet that functions as a single achromatized front component.

### G2 — Variator (Zoom) Group

#### L4 — Positive Meniscus

$n_d = 1.80810$, $\nu_d = 22.76$. Glass: S-NPH1 (OHARA). $f \approx +99\;\text{mm}$.

L4 is the first element of G2 and crucially is a *positive* lens, which is a deliberate and unusual design choice. It is a positive meniscus with its convex surface facing the image side ($R_1 = -227.21$, $R_2 = -59.41$; both radii negative, confirming the meniscus is concave toward the object). Note: the patent text at ¶0266 describes L4 as having "a convex surface directed toward the object side," but this appears to be a transcription error — the corresponding description in Examples 1–3 (¶0228, ¶0240, ¶0253) correctly states "toward an image side" for the same surface-radius pattern.

The patent (¶0108, ¶0135) explains that by placing a positive lens at the object side of the negative variator group, the incident converging beam from G1 is initially deflected further inward before encountering the strongly negative elements deeper in G2. This delays the divergence effect, reducing the ray height entering G3 and consequently shrinking the diameter of all downstream elements. This arrangement is central to the lens's compact barrel diameter.

L4 is cemented with L5 and L6 to form a triplet. The patent (¶0142) notes that because the positive lens on the object side of G2 generates large aberration contributions (particularly astigmatism, distortion, and lateral color at the wide end, plus spherical aberration and coma at the tele end), cementing it to the subsequent negative and positive elements eliminates decentering sensitivity that would otherwise degrade performance severely.

#### L5 — Biconcave Negative

$n_d = 1.48749$, $\nu_d = 70.23$. Glass: S-FSL5 (OHARA). $f \approx -41\;\text{mm}$.

L5 is the strongest negative element in G2 and provides the core diverging power that enables zooming. Its low refractive index ($n_d = 1.487$) and moderate Abbe number ($\nu_d = 70.23$) make it a relatively low-dispersion crown, which helps limit the chromatic aberration swing as G2 moves during zoom. Its biconcave form distributes the negative power symmetrically across both surfaces. L5 is the central element of the L4–L5–L6 cemented triplet.

#### L6 — Positive Meniscus

$n_d = 1.80000$, $\nu_d = 29.84$. Glass: S-NBH55 (OHARA). $f \approx +158\;\text{mm}$.

L6 is the rear element of the cemented triplet. It is a weak positive meniscus that provides lateral-color correction within G2. Its high-index, high-dispersion glass ($n_d = 1.800$, $\nu_d = 29.84$) opposes L5's dispersion characteristics across the cemented interface. The patent's conditional expression (6) requires $18 < \bar{\nu}_{2p} < 28$ for the positive lenses in G2; with L4 ($\nu_d = 22.76$) and L6 ($\nu_d = 29.84$), the average is 26.30, satisfying this bound.

#### L7 — Biconcave Negative

$n_d = 1.83481$, $\nu_d = 42.73$. Glass: S-LAH55V (OHARA). $f \approx -54\;\text{mm}$.

L7 is an air-spaced biconcave negative that provides additional diverging power at the rear of G2. Its lanthanum-crown glass ($n_d = 1.835$, $\nu_d = 42.73$) contributes to field curvature control through its high refractive index, which produces a smaller Petzval contribution per unit of power compared to lower-index alternatives. L7 completes the G2 variator; together, the four elements of G2 yield a group focal length of approximately $-35.9\;\text{mm}$.

### G3 — Positive Relay Group (with Aperture Stop)

The aperture stop is positioned immediately in front of G3 and moves with it (both are stationary during zoom). The stop's physical diameter increases from wide to tele to maintain a constant f/2.88, meaning the entrance pupil diameter grows from approximately 14.2 mm at 40 mm to approximately 51.0 mm at 147 mm.

G3 is the strongest positive group in the system ($f_3 \approx +28\;\text{mm}$) and bears the primary responsibility for converging the divergent beam from G2 into a compact cone that fits through the small-diameter G4–G6 groups. This is the architectural key to the lens's compact barrel: by making G3 powerful, the beam diameter downstream is kept small, leaving room for the autofocus motors and cam mechanisms (¶0075).

#### L8 — Biconvex Positive (EDA — ED Aspherical)

$n_d = 1.49700$, $\nu_d = 81.61$. Glass: FCD1 (HOYA) / S-FPL51 class (OHARA). $f \approx +56\;\text{mm}$. **Both surfaces aspherical (surfaces 13 and 14).**

L8 is the first element after the aperture stop and the single most optically significant element in G3. Its biconvex form provides strong positive power, and its ED-class glass ($\nu_d = 81.61$) reduces the longitudinal chromatic aberration that the large convergence angle would otherwise generate. The patent designates both surfaces as aspherical (¶0267), making this the EDA (Extra-low Dispersion Aspherical) element cited in Olympus's marketing materials.

The aspherical coefficients on both surfaces serve complementary roles. The front surface (surface 13: $K = 0$, $A_4 = -3.125 \times 10^{-6}$) carries a negative fourth-order term that flattens the outer zone relative to the spherical baseline, reducing the undercorrected spherical aberration that a biconvex element at this position would otherwise produce. The rear surface (surface 14: $K = 0$, $A_4 = +1.005 \times 10^{-5}$) carries a positive fourth-order term that flattens the concave outer zone relative to its spherical baseline, reducing the surface's peripheral negative power to create an overcorrection that compensates the zonal residual from surface 13. Together, these two aspheric surfaces allow a single biconvex element to do the work that would otherwise require two or three spherical elements, directly contributing to the compact element count in G3.

The patent (¶0148) explicitly states that using an aspherical surface on the first positive lens component of G3 is "effective" for "reducing the spherical aberration" and "achieving both of securing a favorable imaging performance and making an aperture large."

#### L9 — Negative Meniscus (cemented with L10)

$n_d = 1.84666$, $\nu_d = 23.78$. Glass: S-TIH53 (OHARA). $f \approx -74\;\text{mm}$.

L9 is a negative meniscus with its convex surface facing the object, cemented to L10 to form a positive doublet. Its high-index, high-dispersion glass provides chromatic correction within the doublet: by opposing L10's low-dispersion crown, the cemented pair achieves positive power with reduced chromatic error. L9 also contributes to coma correction through the meniscus form, which generates a controlled amount of negative coma that partially cancels the positive coma from L8.

#### L10 — Biconvex Positive

$n_d = 1.59282$, $\nu_d = 68.63$. Glass: FCD515 (HOYA). $f \approx +35\;\text{mm}$.

L10 is the positive partner in the L9–L10 cemented doublet. Its moderate-index borosilicate crown ($n_d = 1.593$) provides the convergence needed to further reduce the beam diameter heading toward G4. The doublet is positioned with the "maximum air space" in G3 separating it from L8 — the patent's conditional expression (9) requires $0.1 < d(A)/f_3 < 0.5$, and the patent's conditional expression table gives $d(A)/f_3 = 0.284$ for Example 4, where $d(A) = 7.98\;\text{mm}$ is the air gap between L8 and the L9–L10 doublet (¶0155, ¶0163–0164). This spacing gives L8 room to converge the beam partially before the doublet refines the correction.

#### L11 — Biconvex Positive (ED Glass)

$n_d = 1.49700$, $\nu_d = 81.61$. Glass: FCD1 (HOYA) / S-FPL51 class (OHARA). $f \approx +110\;\text{mm}$.

L11 is the third and rearmost lens component in G3, providing moderate additional positive power while contributing chromatic correction through its ED glass. It is positioned in close proximity to the L9–L10 doublet (air gap of only 0.15 mm), and together with the doublet forms the "second and third positive lens components" described in the patent (¶0145). The weak convergence from L11 completes the beam contraction before the light enters the variable-gap region between G3 and G4.

### G4 — Compensator and Primary Focus Group (VCM 1)

G4 is a cemented negative doublet ($f_4 \approx -34\;\text{mm}$) that serves two functions: it compensates for image-plane shift during zoom (by tracing a convex locus toward the image side), and it acts as the primary autofocus group. This is the first of the two VCM-driven groups, and its compact two-element construction minimizes mass for high-speed focus response.

#### L12 — Biconvex Positive

$n_d = 1.92286$, $\nu_d = 18.90$. Glass: S-NPH2 (OHARA; confirmed exact match, catalog code 923189). $f \approx +85\;\text{mm}$.

L12 uses an ultra-high-index glass ($n_d = 1.923$) — the highest in the entire system. The patent's conditional expression (11) requires $1.80 < n_{4p} < 2.00$; L12's index of 1.923 is deep within this range. The high index allows strong curvature with physically small radii, keeping the element thin and light — critical for a focus group that must accelerate rapidly during wobbling-style continuous AF used in video recording (¶0185–0189). The low Abbe number ($\nu_d = 18.90$) is compensated by L13's moderate dispersion across the cemented interface.

#### L13 — Biconcave Negative (Rear Surface Aspherical)

$n_d = 1.74320$, $\nu_d = 49.29$. Glass: S-LAM60 (OHARA). $f \approx -23\;\text{mm}$.

L13 is the negative partner in the G4 cemented doublet. Its rear surface (surface 22) is aspherical with a mild conic constant ($K = -0.0326$) and a negative fourth-order coefficient ($A_4 = -2.585 \times 10^{-6}$). This aspherical correction suppresses residual spherical aberration and field curvature that would otherwise fluctuate during focus travel. The patent's conditional expression (12) requires $15 < \Delta\nu_4 < 40$; the difference $\nu_{d,\text{L13}} - \nu_{d,\text{L12}} = 49.29 - 18.90 = 30.39$ satisfies this, confirming adequate chromatic achromatization within G4 to suppress focus-induced chromatic shifts (¶0174).

### G5 — Secondary Focus Group (VCM 2)

#### L14 — Biconcave Negative

$n_d = 1.62004$, $\nu_d = 36.26$. Glass: S-TIM2 (OHARA). $f \approx -43\;\text{mm}$.

L14 is a single biconcave negative lens that constitutes the entire G5 unit. It is the second VCM-driven focusing group, and its minimal mass (one small-diameter element) enables the extremely high-speed reciprocating motion needed for wobbling AF during video recording. At the wide end, L14 moves toward the image side during close-focus; at the tele end, its locus reverses — the patent tabulates these position-dependent movements (¶0319).

The dual-group floating focus architecture (G4 + G5 moving independently) provides two degrees of freedom for aberration control during focusing. The patent's conditional expression (13) requires $0.2 < |\Delta G_{5(W)}|/|\Delta G_{4(W)}| < 3.0$; Example 4 yields a ratio of 0.916 (¶0319), meaning G5's focus travel is comparable to G4's at the wide end. This balanced division of labor enables the design to maintain well-corrected field curvature and astigmatism across the entire focus range from infinity to 0.7 m.

### G6 — Field-Flattener and Exit-Pupil Relay

G6 is the final optical group, fixed relative to the image plane throughout zoom and focus. It has a positive net focal length ($f_6 \approx +32\;\text{mm}$) and serves primarily to draw the exit pupil away from the image plane, reducing the angle of incidence on the sensor's microlens array to minimize shading at the edges of the Micro Four Thirds sensor (¶0115).

#### L15 — Biconvex Positive (Front Surface Aspherical)

$n_d = 1.80610$, $\nu_d = 40.88$. Glass: L-LAH53 (OHARA). $f \approx +18\;\text{mm}$.

L15 is the strongest individual element in G6 and carries the group's positive power. Its front surface (surface 25) is aspherical with a significant conic constant ($K = -0.7171$, a prolate ellipsoid trending toward a paraboloid) that flattens the field curvature across the image circle. The negative $K$ reduces the spherical sag at the rim compared to a pure sphere, enabling a large clear aperture without excessive rim-angle steepness.

Notably, L15's glass is designated L-LAH53 — the "L-" prefix in OHARA's nomenclature indicates a glass formulated for precision glass molding (PGM). This is consistent with the aspherical surface being manufactured by glass molding rather than polishing, a cost-effective method for producing moderate-precision aspherical surfaces on high-index lanthanum-crown substrates.

#### L16 — Plano-Concave Negative

$n_d = 1.64769$, $\nu_d = 33.79$. Glass: S-TIM22 class (OHARA, six-digit code 648/338). $f \approx -37\;\text{mm}$.

L16 is cemented to L15 and provides the chromatic balance within G6. Its high-dispersion flint ($\nu_d = 33.79$) opposes L15's moderate-dispersion crown, achromatizing the field-flattener doublet. The plano rear surface ($R = \infty$) simplifies manufacturing and provides a flat exit surface before the back-focal distance to the sensor.

## Glass Selection Strategy

The design uses an aggressive chromatic correction strategy centered on ED-class fluorophosphate crowns paired with high-index, high-dispersion flints. The glass palette spans an unusually wide range of refractive indices, from $n_d = 1.439$ (L3, Super ED) to $n_d = 1.923$ (L12), reflecting the competing demands of chromatic correction, compactness, and light weight.

| Element | Glass | Vendor | $n_d$ | $\nu_d$ | Olympus Designation | Role in Design |
|---------|-------|--------|-------|---------|---------------------|----------------|
| L1 | S-TIH23 | OHARA | 1.78470 | 26.29 | HD | Chromatic partner for L2 in front doublet |
| L2 | FCD1 / S-FPL51 | HOYA/OHARA | 1.49700 | 81.61 | ED | Primary axial-color corrector in G1 |
| L3 | S-FPL53 | OHARA | 1.43875 | 94.93 | Super ED | Secondary-spectrum correction in G1 |
| L4 | S-NPH1 | OHARA | 1.80810 | 22.76 | — | Beam-height reducer at G2 entry |
| L5 | S-FSL5 | OHARA | 1.48749 | 70.23 | — | Core negative power in G2 |
| L6 | S-NBH55 | OHARA | 1.80000 | 29.84 | — | Lateral-color corrector in G2 triplet |
| L7 | S-LAH55V | OHARA | 1.83481 | 42.73 | — | Supplementary negative power, Petzval |
| L8 | FCD1 / S-FPL51 | HOYA/OHARA | 1.49700 | 81.61 | EDA | SA/coma corrector after stop (2× asph) |
| L9 | S-TIH53 | OHARA | 1.84666 | 23.78 | — | Chromatic partner for L10 in G3 doublet |
| L10 | FCD515 | HOYA | 1.59282 | 68.63 | — | Convergence and coma correction |
| L11 | FCD1 / S-FPL51 | HOYA/OHARA | 1.49700 | 81.61 | ED | Chromatic correction at G3 exit |
| L12 | S-NPH2 | OHARA | 1.92286 | 18.90 | — | Ultra-high-index focus element (light weight) |
| L13 | S-LAM60 | OHARA | 1.74320 | 49.29 | — | Focus doublet negative (asph rear) |
| L14 | S-TIM2 | OHARA | 1.62004 | 36.26 | — | Single-element secondary focus group |
| L15 | L-LAH53 | OHARA | 1.80610 | 40.88 | — | PGM-molded asph, field flattener |
| L16 | S-TIM22 class | OHARA | 1.64769 | 33.79 | — | Chromatic balance in G6 doublet |

The three instances of $n_d = 1.49700$, $\nu_d = 81.61$ (L2, L8, L11) represent the same glass type (FCD1 or S-FPL51), which simplifies procurement while providing consistent ED correction at three critical positions: G1 entry, G3 post-stop, and G3 exit.

## Focus Mechanism

Focusing from infinity to the minimum object distance (0.7 m object-to-image) is accomplished by moving G4 and G5 independently. Each group is driven by its own voice coil motor (VCM), with no mechanical gears — the patent describes this as enabling "extremely fast" and "nearly friction-free and incredibly quiet" autofocus (¶0124–0125).

The focus motions at each zoom position are:

| Zoom | G4 ($\Delta d_{19}$, toward image) | G5 ($\Delta d_{24}$) | G4 travel | G5 travel |
|------|---|---|---|---|
| Wide (40.8 mm) | +0.620 mm | −0.568 mm | 0.620 mm image-ward | 0.568 mm object-ward |
| Standard (77.3 mm) | +2.357 mm | −0.646 mm | 2.357 mm image-ward | 0.646 mm object-ward |
| Tele (147 mm) | +8.829 mm | +0.852 mm | 8.829 mm image-ward | 0.852 mm image-ward |

At the wide end, G5 moves in the opposite direction to G4 (object-ward vs. image-ward), while at the tele end both move image-ward but by very different amounts. This non-linear, position-dependent behavior is the hallmark of a floating-focus system: the two degrees of freedom allow the design to correct both defocus and field curvature simultaneously across the focus range.

The patent notes that wobbling AF — used during video recording to maintain continuous focus — requires the focusing groups to reciprocate rapidly at the camera's frame rate (¶0185–0187). The total mass of G4 (two thin cemented elements) and G5 (one thin element) is minimized by using ultra-high-index glass (L12: $n_d = 1.923$) and small-diameter elements, consistent with the design's emphasis on rear-group compactness.

## Aspherical Surfaces

The design employs four aspherical surfaces distributed across three elements. All use the standard even-power sag equation:

$$Z(h) = \frac{h^2/R}{1 + \sqrt{1 - (1+K)(h/R)^2}} + A_4 h^4 + A_6 h^6 + A_8 h^8 + A_{10} h^{10}$$

The conic constant convention is standard ($K = 0$ = sphere, $K = -1$ = paraboloid).

### Surface 13 — L8 Front (EDA Element)

| Parameter | Value |
|-----------|-------|
| $R$ | +39.4392 mm |
| $K$ | 0 |
| $A_4$ | $-3.1251 \times 10^{-6}$ |
| $A_6$ | $-3.8756 \times 10^{-10}$ |
| $A_8$ | $+5.5927 \times 10^{-11}$ |
| $A_{10}$ | $-1.4099 \times 10^{-13}$ |

The negative $A_4$ flattens the outer zone of this convex surface, reducing undercorrected spherical aberration from the strong positive power immediately after the stop. This is the primary SA-correction surface in the design.

### Surface 14 — L8 Rear (EDA Element)

| Parameter | Value |
|-----------|-------|
| $R$ | −87.6954 mm |
| $K$ | 0 |
| $A_4$ | $+1.0047 \times 10^{-5}$ |
| $A_6$ | $-3.0390 \times 10^{-10}$ |
| $A_8$ | $+5.4533 \times 10^{-11}$ |
| $A_{10}$ | $-1.3296 \times 10^{-13}$ |

The positive $A_4$ flattens the outer zone of this concave surface relative to the spherical baseline — the positive polynomial term opposes the negative spherical sag, making the surface less deeply concave at the rim. This reduces the surface's negative refraction at the periphery, creating an overcorrection effect that partially compensates the zonal residual from surface 13. Together, surfaces 13 and 14 create a "zonal aspheric pair" that corrects spherical aberration more completely than either surface alone.

### Surface 22 — L13 Rear (G4 Focus Doublet)

| Parameter | Value |
|-----------|-------|
| $R$ | +21.6608 mm |
| $K$ | −0.0326 |
| $A_4$ | $-2.5854 \times 10^{-6}$ |
| $A_6$ | $+2.4119 \times 10^{-9}$ |
| $A_8$ | $-7.1028 \times 10^{-11}$ |
| $A_{10}$ | $+1.4991 \times 10^{-13}$ |

The mild conic ($K = -0.033$, a barely prolate ellipsoid) combined with a negative $A_4$ flattens the outer zone of this strongly curved rear surface of the focus doublet. This correction suppresses the focus-dependent spherical aberration and field curvature that would otherwise degrade close-focus performance.

### Surface 25 — L15 Front (G6 Field Flattener)

| Parameter | Value |
|-----------|-------|
| $R$ | +31.6086 mm |
| $K$ | −0.7171 |
| $A_4$ | $+7.9298 \times 10^{-7}$ |
| $A_6$ | $-2.8322 \times 10^{-9}$ |
| $A_8$ | $+2.5344 \times 10^{-12}$ |
| $A_{10}$ | 0 |

This is the most aggressively aspherical surface in the design, with $K = -0.717$ — a prolate ellipsoid well on its way toward a paraboloid ($K = -1$). The strong conic significantly reduces the sag at the rim compared to a sphere of the same vertex radius, flattening the field curvature across the entire image circle. The small positive $A_4$ provides a fine correction to the field shape at intermediate heights. This surface is manufactured by precision glass molding (PGM), as indicated by the L-LAH53 glass designation.

## Conditional Expression Verification

| Expression | Formula | Example 4 Value | Required Range | Status |
|------------|---------|-----------------|----------------|--------|
| (1) | $\|f_2\|/f_3$ | 1.308 | 1.1–1.8 | ✓ |
| (2) | $\Delta G_1 / \Delta G_2$ | 0.000 | −0.5 to +0.5 | ✓ (G1 fixed) |
| (3) | $\Delta G_2 / f_3$ | 1.828 | 0.8–2.8 | ✓ |
| (4) | $\bar{\nu}_{1p}$ | 88.27 | 70–100 | ✓ |
| (5) | $(r_1 + r_2)/(r_1 - r_2)$ | 1.708 | 0.9–2.2 | ✓ |
| (6) | $\bar{\nu}_{2p}$ | 26.30 | 18–28 | ✓ |
| (7) | $\bar{\nu}_{3p}$ | 77.28 | 65–100 | ✓ |
| (8) | $f_{3F}/f_{3R}$ | 1.345 | 0.5–2.0 | ✓ |
| (9) | $d(A)/f_3$ | 0.284 | 0.1–0.5 | ✓ |
| (10) | $\bar{n}_{3p}$ | 1.545 | 1.45–1.65 | ✓ |
| (11) | $n_{4p}$ | 1.923 | 1.80–2.00 | ✓ |
| (12) | $\Delta\nu_4$ | 30.39 | 15–40 | ✓ |
| (13) | $\|\Delta G_{5(W)}\|/\|\Delta G_{4(W)}\|$ | 0.916 | 0.2–3.0 | ✓ |

All 13 conditional expressions are satisfied, confirming that Example 4 is a well-centered realization of the patent's design space.

## Petzval Analysis

The surface-by-surface Petzval sum (computed via $\Sigma \;\phi_i / (n_i \cdot n'_i)$ for each refracting surface) is $0.000922\;\text{mm}^{-1}$, yielding a Petzval radius of curvature of approximately 1085 mm. The product $\text{Petzval sum} \times f_\text{wide} = 0.0376$ is a moderate value for a telephoto zoom, indicating a gently curved Petzval surface that the aspherical field flattener on L15 can readily compensate to produce a flat image field across the Micro Four Thirds sensor diagonal.

## Design Heritage and Context

The M.Zuiko 40-150mm f/2.8 PRO was announced at Photokina in September 2014 as the second lens in Olympus's PRO zoom lineup, following the M.Zuiko 12-40mm f/2.8 PRO. Together, these two lenses provide continuous coverage from 24 mm to 300 mm (35mm equivalent) at a constant f/2.8 aperture — a capability that was unprecedented for the Micro Four Thirds system and directly competitive with the full-frame "trinity" of f/2.8 zooms at approximately half the size and weight.

The six-unit zoom architecture with a positive–negative–positive–negative–negative–positive power distribution and dual rear focusing groups was novel at the time of filing. Prior Olympus telephoto zooms (including the Four Thirds HG and SHG designs) used four- or five-unit layouts with single-group inner focusing. The dual VCM focus mechanism — splitting the focusing function between G4 and G5, each with its own linear motor — was an engineering first in interchangeable-lens cameras and set a precedent that subsequent Olympus/OM System designs have followed.

## Sources

1. US 2015/0168697 A1 — full patent text and numerical examples (primary source for all optical data).
2. Olympus press release, September 2014 (Photokina announcement); production specifications from OM System product pages.
3. Robin Wong, "Olympus M.Zuiko 40-150mm F2.8 PRO Lens Review," robinwong.blogspot.com, October 2014 — first-party review confirming 5 ED elements, 1 Super ED, 1 EDA, 1 HD, and dual VCM AF.
4. Reef Photo product listing — element-type breakdown: "One aspherical ED element, two aspherical elements, one Super ED element, three ED elements, and one HD element."
5. OHARA Glass Catalog (ohara-inc.co.jp) — Sellmeier data and glass designations for S-FPL53, S-FPL51, S-TIH18, S-NPH2, L-LAH53, and other identified glasses.
6. HOYA Optical Glass Catalog — FCD1 glass data.
