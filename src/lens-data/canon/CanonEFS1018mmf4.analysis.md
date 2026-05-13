# Canon EF-S 10-18mm f/4.5-5.6 IS STM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** JP 2015-31869 A, "ズームレンズ及びそれを有する撮像装置" (Zoom Lens and Imaging Apparatus Having the Same).
**Applicant:** Canon Inc. (キヤノン株式会社), Tokyo, Japan.
**Inventor:** Makoto Nakahara (中原 誠).
**Filing date:** 5 August 2013 (Priority: 特願2013-162437).
**Publication date:** 16 February 2015.
**Embodiment used:** Numerical Example 1 (数値実施例１), corresponding to the lens cross-section in Figure 1.

### Production Lens Identification

The following convergent evidence identifies Numerical Example 1 as the design basis for the Canon EF-S 10-18mm f/4.5-5.6 IS STM (released June 2014):

1. **Element and group count.** The prescription yields 14 elements in 11 air-separated groups, matching Canon's published specification exactly.
2. **Focal length range.** The patent's computed EFL range of 10.30–17.46 mm is consistent with the marketed 10–18 mm range after rounding.
3. **Maximum aperture.** The patent's F/4.64 (wide) through F/5.71 (tele) matches the marketed f/4.5-5.6 variable aperture.
4. **Image circle.** The patent's half-image-height of 13.66 mm yields a diagonal of 27.32 mm, consistent with APS-C coverage (Canon APS-C diagonal ≈ 26.8 mm for the 22.3 × 14.9 mm sensor, with minor margin).
5. **Zoom group structure.** The patent describes a negative-positive-negative-positive four-group zoom system (¶0020), matching Canon's marketed "4 group optical zoom system."
6. **Image stabilization.** The patent places the IS group (Ls) as a single positive element within Group 2, ahead of the aperture stop. Canon's specification confirms IS with approximately 4-stop correction.
7. **Focus mechanism.** The patent designates Group 3 as the rear-focus group (LF), moving image-ward for close focus (¶0021). Canon describes the lens as having a "rear focus system."
8. **Special elements.** The Canon Camera Museum entry for product code EF431 states the lens contains "one UD (Ultra-low Dispersion) and two aspherical lens elements — one of which is a high-precision large-diameter PMo (Plastic-Molded) lens." The patent prescription contains exactly one element with UD-class dispersion (L11, νd = 81.5) and two aspherical surfaces on two separate elements (surfaces 4 and 26).
9. **Patent timing.** Filed August 2013, 10 months before the lens's June 2014 commercial release — consistent with Canon's typical patent-to-product timeline.

## Optical Architecture

The Canon EF-S 10-18mm f/4.5-5.6 IS STM is a negative-lead (retrofocus-type) zoom lens comprising, from object to image, four zoom groups with power distribution negative–positive–negative–positive:

- **Group 1 (surfaces 1–10):** Negative power, f = −13.43 mm. Five elements (four negative menisci and one positive biconvex). Functions as the front diverging group characteristic of retrofocus wide-angle designs, providing the long back focal distance required for SLR mirror clearance. Two of the menisci use high-index dense lanthanum flint (L1 and L3, nd = 1.77250), while L2 is a large-diameter PMo plastic asphere (nd = 1.530, low index) and L4 uses low-dispersion fluorophosphate crown to control lateral color; L5 is a high-dispersion biconvex flint that provides counterbalancing positive power. Moves in a convex (image-ward then object-ward) trajectory during zooming from wide to telephoto.

- **Group 2 (surfaces 11–21):** Positive power, f = +19.23 mm. Six elements including two cemented doublets. Contains the image-stabilization element (Ls = L6), the aperture stop, and the primary chromatic-correcting UD element (L11). This is the main converging group. Moves object-ward during zooming.

- **Group 3 (surfaces 22–23):** Negative power, f = −26.67 mm. Single biconcave element serving as the focus group (LF). Moves image-ward for close focusing. Moves object-ward during zooming together with Groups 2 and 4 (see Focus Mechanism).

- **Group 4 (surfaces 24–26):** Positive power, f = +58.19 mm. Cemented doublet (negative flint + positive crown with aspherical rear surface). Functions as a field-flattening relay group. Moves object-ward during zooming.

The zoom ratio is 1.70× (10.30–17.46 mm). The total track length varies from 117.61 mm at the wide end to a minimum of 114.39 mm at mid-zoom, reflecting Group 1's non-monotonic convex trajectory (¶0020). The back focal distance increases substantially from 35.35 mm (wide) to 49.42 mm (tele), a consequence of the negative-lead architecture.

The lens produces an image circle for the APS-C format (image height 13.66 mm, diagonal ≈ 27.3 mm) and covers a half-field angle range of 52.98° (wide) to 38.04° (tele).

## Element-by-Element Analysis

### Group 1 — Front Negative Group (5 elements, surfaces 1–10)

#### L1 — Negative Meniscus, Convex to Object

nd = 1.77250, νd = 49.6. Glass: S-LAH66 class (OHARA) — dense lanthanum flint (νd = 49.6, just below the conventional crown/flint boundary at νd ≈ 50). f = −37.6 mm.

The outermost element is a steeply curved negative meniscus (R1 = +56.0, R2 = +18.9 mm) that begins the strong negative divergence characteristic of a retrofocus front group. Its high refractive index (nd = 1.77250) allows the meniscus to achieve its required negative power with less extreme curvature than a lower-index alternative, reducing higher-order aberrations. The element contributes −0.0152 to the Petzval sum, helping to flatten the field — a critical function in wide-angle designs where the natural Petzval curvature of the converging rear groups would otherwise produce a strongly curved image surface.

#### L2 — Negative Meniscus (1× Asph), Convex to Object

nd = 1.52996, νd = 55.8. Material: PMo optical plastic (plastic-molded aspherical element, confirmed by Canon Camera Museum). f = −80.0 mm.

This is one of the design's two aspherical elements and is identified by Canon as the "high-precision large-diameter PMo (Plastic-Molded) lens." Its rear surface (surface 4) carries an aspherical profile with a conic constant K = −0.476 (prolate ellipsoidal base, between a sphere at K = 0 and a paraboloid at K = −1) plus polynomial coefficients through the 12th order. The aspherical departure from a best-fit sphere is strongly negative, reaching approximately −1.14 mm at h = 10 mm, with roughly 56% of the departure contributed by the conic and 44% by the polynomial terms. This surface primarily corrects field curvature and astigmatism across the wide field of view, flattening the strongly diverging wavefront as it exits the front group. The large negative departure effectively reduces the surface's curvature at the periphery, compensating for the high oblique ray heights in this ultra-wide-angle configuration.

The low refractive index and moderate dispersion of the PMo plastic are consistent with cyclo-olefin polymer or acrylate-based optical resins commonly used by Canon in consumer-grade zoom lenses. The plastic material allows cost-effective precision molding of the aspherical profile on a large-diameter element — a critical cost consideration for a lens in this price segment.

#### L3 — Negative Meniscus, Convex to Object

nd = 1.77250, νd = 49.6. Glass: S-LAH66 class (OHARA) — same dense lanthanum flint as L1. f = −27.5 mm.

The strongest negative element in Group 1 (the same glass as L1). Its steep curvature differential (R5 = +27.1, R6 = +11.7 mm) produces the bulk of the group's negative refractive power. Positioned after the large air gap following L2 (d4 = 14.0 mm), it intercepts the diverging beam at a substantial height and bends it further, establishing the wide field of view. The high-index glass again limits the curvature required for the needed power, controlling coma and higher-order field aberrations.

#### L4 — Negative Meniscus, Concave to Object

nd = 1.59522, νd = 67.7. Glass: S-FPM2 class (OHARA) — fluorophosphate crown, low dispersion. f = −34.6 mm.

A concave-to-object negative meniscus made from a fluorophosphate crown with unusually low dispersion for a negative element (νd = 67.7). Its role within the front negative group is partly structural — contributing additional negative power — but the choice of low-dispersion glass is deliberate: it minimizes the lateral chromatic aberration (chromatic difference of magnification) that negative elements in a wide-angle front group introduce. In a negative-lead zoom, each negative element contributes lateral color proportional to both its power and the reciprocal of its Abbe number; L4's high νd = 67.7 keeps its contribution small relative to L1 and L3 (νd = 49.6 each). The thin air gap preceding L4 (d8 = 0.15 mm) places it close to L5, and the pair (L4 + L5) functions as a loosely coupled lateral-color reducer: L4 minimizes the lateral color contributed by its own negative power, while L5's positive power at high dispersion (νd = 34.7) provides an opposing lateral color contribution that partially compensates the other negative elements in the group.

#### L5 — Biconvex Positive

nd = 1.72047, νd = 34.7. Glass: S-TIM27 class (OHARA) — titanium flint, high dispersion. f = +27.9 mm.

The sole positive element in Group 1. Its relatively high dispersion (νd = 34.7) is intentional: as a positive element, it contributes lateral color of the opposite sign to the negative elements (L1–L4). The high dispersion amplifies this compensating effect, making L5 the most effective single-element lateral-color corrector in the front group. The glass choice is thus driven by the lateral color budget: a low-dispersion positive element would contribute less correction. L5's positive power also reduces the total negative power of Group 1, preventing excessive divergence that would demand impractically large rear elements.

### Group 2 — Main Positive Group (6 elements, surfaces 11–21)

#### L6 — Positive Meniscus (IS Element, Ls), Concave to Object

nd = 1.48749, νd = 70.2. Glass: S-FSL5 class (OHARA) — fluorosilicate crown, low dispersion. f = +160.4 mm.

This is the image-stabilization element (防振群 Ls), confirmed by Table 1 of the patent which lists νdLs = 70.23. It is a weak positive meniscus (f = +160 mm) made of low-dispersion glass, and it moves perpendicular to the optical axis to correct image blur from camera shake.

The patent discusses the rationale for this design choice in ¶0027–¶0042. The IS group is deliberately kept as a single element to minimize weight and the size of the driving mechanism (¶0038). The weak positive power (condition (1): fLs/fw = 15.58, within the range 6.0–30.0) ensures that the IS sensitivity is low enough to maintain good optical performance during stabilization — stronger power would increase sensitivity but worsen decentering aberrations, particularly decentering coma and astigmatism (¶0027). The low-dispersion glass (νd = 70.2, satisfying condition (4): νdLs > 35.0, and indeed > 60.0 per the tightened condition (4b)) suppresses lateral chromatic aberration during IS decentering (¶0040). When a single lens is decentered, it introduces chromatic aberration proportional to its power and the dispersion of the glass; a low-dispersion material minimizes this effect.

The IS group is positioned ahead of the aperture stop (¶0019, ¶0046), which places it in the converging beam between Group 1 and the stop. The patent argues this is optimal for compactness because the IS mechanism (which requires radial space around the element for actuators) benefits from being in a region where the beam diameter is relatively small, while still being ahead of the stop where the principal ray height is moderate (¶0048–¶0051). The sequence of防振装置 (IS mechanism), 開口装置 (aperture mechanism), and 合焦装置 (focus mechanism) from object to image is described as the most space-efficient arrangement.

#### L7 + L8 — Cemented Doublet (Negative Meniscus + Biconvex Positive)

**L7:** nd = 1.91082, νd = 35.3. Glass: S-LAH55V class (OHARA) — dense lanthanum flint. f = −19.9 mm (standalone).
**L8:** nd = 1.60342, νd = 38.0. Glass: S-TIM22 class (OHARA) — titanium flint. f = +14.5 mm (standalone).
**Doublet net focal length** (computed from cemented system, surfaces 13–15): approximately +53.5 mm.

This cemented doublet sits between the IS element and the aperture stop. L7 is a steeply curved negative meniscus of very high-index dense lanthanum flint (nd = 1.911), while L8 is a biconvex positive of moderate-index titanium flint. Together they form a net positive doublet that serves as the first power-contributing unit in Group 2.

The glass pairing is notable: both elements have relatively high dispersion (νd = 35.3 and 38.0 respectively), which means the doublet does not function as a classical achromatic pair. Instead, the cemented interface (R14 = +10.275 mm, a strongly convex surface from the L7 side) acts primarily as a coma and spherical aberration corrector. The steep cemented interface creates a large angular deflection at the junction, and the refractive index step (1.91082 → 1.60342, a negative Δn of −0.307) generates significant correction of the monochromatic aberrations introduced by the converging beam geometry.

#### Aperture Stop (Surface 16)

The aperture stop is a flat surface (R = ∞) positioned in the air gap between the L7–L8 doublet and the L9–L10 doublet, within Group 2. The stop location is fixed relative to Group 2 and moves with it during zooming. The stop diameter governs the f-number, which varies from F/4.64 (wide) to F/5.71 (tele) at maximum aperture.

#### L9 + L10 — Cemented Doublet (Biconcave Negative + Biconvex Positive)

**L9:** nd = 1.83481, νd = 42.7. Glass: S-LAH59 class (OHARA) — lanthanum flint. f = −10.6 mm (standalone).
**L10:** nd = 1.64769, νd = 33.8. Glass: S-TIM5 class (OHARA) — titanium flint, high dispersion. f = +14.3 mm (standalone).
**Doublet net focal length:** approximately −44.8 mm (net negative).

This doublet is positioned immediately behind the aperture stop (separated by 4.04 mm). L9 is a strong biconcave negative of high-index lanthanum flint, and L10 is a biconvex positive of high-dispersion titanium flint. The net power of the cemented pair is weakly negative — the strong negative L9 (f = −10.6 mm) slightly overwhelms L10 (f = +14.3 mm).

Like the L7–L8 doublet, the L9–L10 pair does not function as a traditional crown-flint achromatic doublet (both glasses are technically flints, with νd < 50). Instead, the cemented interface at R18 = +10.223 mm provides a strong correcting surface. The refractive index step at the junction (1.83481 → 1.64769, Δn = −0.187) combined with the steep curvature creates substantial spherical aberration and coma correction in the converging post-stop beam. The net negative power of this doublet also contributes a negative Petzval term (−0.0080 total), helping to flatten the field — a useful counterbalance to the strong positive Petzval contribution from L11 immediately behind it.

#### L11 — Biconvex Positive (UD Element)

nd = 1.49700, νd = 81.5. Glass: S-FPL51 (OHARA) — ED fluorophosphate crown, ultra-low dispersion. f = +17.3 mm.

This is Canon's marketed "UD (Ultra-low Dispersion)" element. The glass is S-FPL51 or its equivalent (FCD1 from HOYA), one of the most widely used ED glasses in the optical industry. Its extremely low dispersion (νd = 81.5) and moderate anomalous partial dispersion make it the design's primary chromatic aberration corrector.

L11 is a symmetric biconvex lens (R20 = +16.445, R21 = −16.445 mm — perfectly symmetric radii), which is a deliberately symmetric shape that minimizes coma at the design conjugate. Positioned as the last element of Group 2 and just ahead of the zoom gap to Group 3, L11 acts as the final converging element before the diverging focus group. The primary value of UD glass in this position is that it supplies strong positive power (f = +17.3 mm) with minimal chromatic penalty: the axial color contribution of a lens element scales as φ/ν, and L11's very high Abbe number (νd = 81.5) means its chromatic contribution per unit of power is far less than that of a conventional crown. This allows the design to concentrate convergence in a single element without overwhelming the chromatic aberration budget — a critical enabler for the compact overall architecture.

The Petzval contribution of L11 is significant: the two surfaces contribute +0.0202 each to the Petzval sum (total +0.0404), the single largest positive Petzval contribution in the system. This is the inherent cost of using a strong positive low-index element for chromatic correction — the low refractive index means the Petzval contribution per unit of power is larger than it would be for a high-index crown. The design offsets this with negative Petzval contributions from the numerous high-index negative elements and net-negative cemented groups elsewhere (L1, L2, L3, L4, L9+L10, and L12 collectively contribute −0.0917).

### Group 3 — Focus Group (1 element, surfaces 22–23)

#### L12 — Biconcave Negative (Focus Element, LF)

nd = 1.91082, νd = 35.3. Glass: S-LAH55V class (OHARA) — dense lanthanum flint. f = −26.7 mm.

This single biconcave element constitutes the entire focus group (¶0021). It moves image-ward along the optical axis when focusing from infinity to the minimum focus distance of 0.22 m. The use of a single lightweight element as the focus group is consistent with the STM (Stepping Motor) drive system, which benefits from a low-inertia moving element for fast, quiet autofocus performance during both stills and video.

The element's high refractive index (nd = 1.911) keeps its physical size compact while maintaining the required negative power. Its position between Groups 2 and 4 — in the converging beam after the stop — means it acts as a field-lens-type diverging element that spreads the converging cone from Group 2 before it enters the final relay group. During focusing, the axial displacement of L12 changes the spacing d21 (Group 2 to Group 3 gap) and d23 (Group 3 to Group 4 gap) in complementary directions: d21 increases while d23 decreases as L12 moves image-ward for close focus.

The zoom variable spacing data show that d21 and d23 change during zooming (d21: 1.25 → 1.57 → 1.90; d23: 3.80 → 3.48 → 3.15 from wide to tele), but their sum is constant at 5.05 mm across all zoom positions. This means the distance from the rear of Group 2 to the front of Group 4 is invariant during zooming. The patent prose states that Groups 2, 3, and 4 move with "mutually different trajectories" (¶0020), but in this specific numerical example the data show that Group 3's infinity-focus position is fully determined by the constraint d21 + d23 = constant. Whether Group 3 rides on an independent cam or moves rigidly with the G2–G4 assembly during zoom cannot be determined from the infinity-focus data alone — the distinction would only manifest in close-focus cam profiles at different zoom positions.

### Group 4 — Rear Positive Group (2 elements, surfaces 24–26)

#### L13 + L14 — Cemented Doublet (Negative Meniscus + Biconvex Positive, 1× Asph)

**L13:** nd = 1.91082, νd = 35.3. Glass: S-LAH55V class (OHARA) — dense lanthanum flint. f = −16.8 mm (standalone).
**L14:** nd = 1.58313, νd = 59.4. Glass: S-BSM14 class (OHARA) — barium crown. f = +14.5 mm (standalone).
**Doublet net focal length:** +58.2 mm (= Group 4 focal length).

This cemented doublet functions as the final field-flattening relay group. L13 is a negative meniscus of high-index dense lanthanum flint (the same glass used in L7 and L12, used three times total in the design), and L14 is a biconvex positive of barium crown glass. The pairing is a classic Fraunhofer-type achromatic doublet: the higher-dispersion negative flint (νd = 35.3) is paired with a lower-dispersion positive crown (νd = 59.4), giving the doublet both net positive power and partial achromatization.

The rear surface of L14 (surface 26) carries the design's second aspherical profile. Unlike surface 4 which has a significant conic constant, surface 26 uses a spherical base (K = 0) with purely polynomial correction through the 12th order. At h = 10 mm the total aspherical departure is +0.219 mm (the surface is less concave than a best-fit sphere at the periphery). The polynomial contributions show a complex oscillating pattern with alternating-sign terms of increasing magnitude at high ray heights, indicating that the surface corrects multiple orders of aberration simultaneously — primarily residual field curvature and distortion at the edge of the APS-C image field.

As the last optical surface before the image plane, surface 26 has a privileged position for correcting field-dependent aberrations: rays from different field angles arrive at different heights, so the aspherical correction can be tailored to act differently on axial and off-axis beams. The positive departure (less concave than a sphere) at the periphery has the effect of slightly reducing the negative power of the outer zone of the rear surface, which flattens the tangential field curvature.

## Glass Selection

The design uses a palette of 8 distinct glasses plus one optical plastic, deployed across 14 elements:

| Element(s) | nd | νd | Glass (probable) | Category | Count |
|---|---|---|---|---|---|
| L1, L3 | 1.77250 | 49.6 | S-LAH66 (OHARA) | Dense lanthanum flint | 2 |
| L2 | 1.52996 | 55.8 | PMo optical plastic | Cyclo-olefin polymer / acrylate resin | 1 |
| L4 | 1.59522 | 67.7 | S-FPM2 (OHARA) | Fluorophosphate crown | 1 |
| L5 | 1.72047 | 34.7 | S-TIM27 (OHARA) | Titanium flint | 1 |
| L6 | 1.48749 | 70.2 | S-FSL5 (OHARA) | Fluorosilicate crown | 1 |
| L7, L12, L13 | 1.91082 | 35.3 | S-LAH55V (OHARA) | Dense lanthanum flint | 3 |
| L8 | 1.60342 | 38.0 | S-TIM22 (OHARA) | Titanium flint | 1 |
| L9 | 1.83481 | 42.7 | S-LAH59 (OHARA) | Lanthanum flint | 1 |
| L10 | 1.64769 | 33.8 | S-TIM5 (OHARA) | Titanium flint | 1 |
| L11 | 1.49700 | 81.5 | S-FPL51 (OHARA) | ED fluorophosphate (UD) | 1 |
| L14 | 1.58313 | 59.4 | S-BSM14 (OHARA) | Barium crown | 1 |

Glass identifications are based on six-digit code matching (nd × 1000 / νd × 10) against the OHARA catalog. Canon patents typically use OHARA or HOYA glasses; OHARA equivalents are listed here. Cross-vendor equivalents include S-FPM2 ≈ FCD10 (HOYA) for L4, and S-FPL51 ≈ FCD1 (HOYA) for L11. The PMo plastic element (L2) has no catalog glass equivalent — its nd/νd values are characteristic of injection-molded optical polymers.

The most notable feature of the glass palette is the heavy use of S-LAH55V (nd = 1.91082), appearing in three elements (L7, L12, L13). This very high-index dense lanthanum flint allows strong negative power in compact element forms, and its relatively moderate dispersion for its index (νd = 35.3) makes it suitable for both field-flattening negative elements and the achromatizing negative partner in the L13–L14 doublet.

## Focus Mechanism

The lens employs a rear-focus system with Group 3 (L12, a single biconcave element) as the focus group. During focusing from infinity to the minimum focus distance of 0.22 m, L12 moves image-ward along the optical axis (¶0021).

The single-element focus group is an intentional weight optimization: the Canon Camera Museum notes the STM (Stepping Motor) drive, and a light focus group minimizes the inertia the motor must overcome, enabling the fast, smooth, quiet autofocus performance required for Canon's EOS Movie Servo AF during video recording. The STM system uses a lead-screw mechanism that converts rotary motor motion into linear element translation.

The patent publishes only infinity-focus variable spacings at each zoom position. No explicit close-focus air gap data is given in the numerical example. The zoom-dependent variable gaps flanking Group 3 are:

| Zoom position | d21 (G2→G3) | d23 (G3→G4) |
|---|---|---|
| Wide (10.3 mm) | 1.25 mm | 3.80 mm |
| Mid (14.0 mm) | 1.57 mm | 3.48 mm |
| Tele (17.5 mm) | 1.90 mm | 3.15 mm |

During focusing, d21 increases and d23 decreases by equal amounts (maintaining constant overall length within the sub-assembly), as L12 translates toward the image plane.

Close-focus spacings were computed independently via ABCD system-matrix ray trace at MFD = 0.22 m (220 mm from image plane). At each zoom position, the focus-group travel δ was solved such that the finite-conjugate image distance from the last surface equals the mechanically fixed BFD. The results confirm L12 moves image-ward (positive δ), consistent with the patent's description (¶0021):

| Zoom position | δ (mm) | d21 close | d23 close |
|---|---|---|---|
| Wide (10.3 mm) | +0.280 | 1.53 mm | 3.52 mm |
| Mid (14.0 mm) | +0.445 | 2.01 mm | 3.04 mm |
| Tele (17.5 mm) | +0.637 | 2.54 mm | 2.51 mm |

The increasing focus travel at longer focal lengths is expected: at telephoto the system magnification is higher, so a given change in object distance produces a larger image shift, requiring greater compensating movement of the focus group.

## Image Stabilization

The IS group (Ls = L6) is a single positive meniscus element (f = +160.4 mm) positioned ahead of the aperture stop within Group 2. It decenters perpendicular to the optical axis to shift the image and compensate for camera shake.

The patent establishes two key conditions governing the IS group:

- **Condition (1):** fLs / fw = 160.44 / 10.30 = 15.58, within the specified range 6.0 < fLs/fw < 30.0 (and within the tightened range 7.0–16.0 per condition (1b)). This ensures the IS group's refractive power is weak enough to maintain good optical performance during decentering, while strong enough that the required physical displacement remains within practical limits for the driving mechanism.

- **Condition (4):** νdLs = 70.23, satisfying νdLs > 35.0 (and the tightened νdLs > 60.0 per condition (4b)). The low dispersion of the IS element suppresses the lateral chromatic aberration that would otherwise be introduced when a single lens is decentered from the axis (¶0040).

Canon rates the IS system at approximately 4 stops of shake correction (CIPA standard).

## Aspherical Surfaces

The design incorporates two aspherical surfaces on two separate elements, as confirmed by the Canon Camera Museum entry:

### Surface 4 — Rear Surface of L2 (PMo Plastic-Molded Asphere)

This surface uses the aspherical sag equation from the patent (¶0058):

$$Z(h) = \frac{h^2/R}{1 + \sqrt{1 - (1+K)(h/R)^2}} + B \cdot h^4 + C \cdot h^6 + D \cdot h^8 + E \cdot h^{10} + F \cdot h^{12}$$

where the patent's coefficients B, C, D, E, F correspond to the standard A4, A6, A8, A10, A12 notation.

| Parameter | Value |
|---|---|
| R | +12.302 mm |
| K | −4.75949 × 10⁻¹ |
| A4 | −3.84236 × 10⁻⁵ |
| A6 | −7.63390 × 10⁻⁸ |
| A8 | −6.26237 × 10⁻¹⁰ |
| A10 | +3.48984 × 10⁻¹² |
| A12 | −1.12759 × 10⁻¹⁴ |

The conic constant K = −0.476 defines a prolate ellipsoidal base surface (between a sphere at K = 0 and a paraboloid at K = −1). This alone flattens the curvature at the periphery relative to a sphere — the prolate ellipsoid has less sag than a sphere at a given ray height. At h = 10 mm, the conic departure is −0.642 mm and the polynomial departure is −0.500 mm, for a total departure of −1.142 mm. The departure grows rapidly at higher ray heights, reaching −2.70 mm at h = 11.5 mm.

The strongly negative departure (the surface is flatter than a sphere at the edge) is consistent with the element's role in correcting field curvature and astigmatism across the ultra-wide field of view. In the front group of a retrofocus wide-angle lens, oblique ray bundles pass through the outer zones of the front elements at steep angles, and the aspherical flattening reduces the effective curvature encountered by these marginal rays, suppressing the tangential and sagittal field curvature that would otherwise dominate the image quality at the field edge.

This element is manufactured by plastic injection molding (PMo), a process that enables high-precision aspherical profiles at large diameters at much lower cost than glass molding. The trade-off is reduced thermal stability compared to glass, but for a consumer-grade lens in this price range, the cost savings are decisive.

### Surface 26 — Rear Surface of L14 (Glass-Molded Asphere)

| Parameter | Value |
|---|---|
| R | −19.588 mm |
| K | 0.00000 |
| A4 | +1.25041 × 10⁻⁵ |
| A6 | −1.14292 × 10⁻⁷ |
| A8 | +4.98491 × 10⁻⁹ |
| A10 | −1.03089 × 10⁻¹⁰ |
| A12 | +7.40509 × 10⁻¹³ |

The conic constant is zero (spherical base), so all correction is carried by the polynomial terms. The departure from the base sphere is positive (the surface is less concave than a sphere at the periphery), reaching +0.219 mm at h = 10 mm.

The individual polynomial contributions at h = 10 mm are:

| Term | Contribution (mm) |
|---|---|
| A4 · h⁴ | +0.125 |
| A6 · h⁶ | −0.114 |
| A8 · h⁸ | +0.498 |
| A10 · h¹⁰ | −1.031 |
| A12 · h¹² | +0.741 |

The alternating signs and increasing magnitudes of the higher-order terms indicate a complex multi-zone correction profile. At moderate ray heights the correction is dominated by the positive A4 term (reducing peripheral curvature), but at higher heights the A8 and A12 terms provide additional inflections that fine-tune the field curvature and distortion correction across the full APS-C image field.

As the last refracting surface before the image plane, surface 26 is uniquely positioned to correct field-dependent residual aberrations. Rays from different field angles arrive at different heights on this surface, allowing the aspherical polynomial to apply differential correction to axial vs. off-axis beams — effectively acting as a post-stop field corrector.

The glass element (L14, nd = 1.58313) hosting this asphere is a barium crown with moderate refractive index, suitable for precision glass molding (PGM/GMo) processes.

## Conditional Expressions

The patent defines five conditional expressions governing the design. Their values for Numerical Example 1 are:

| Condition | Expression | Range | Value (Ex. 1) | Status |
|---|---|---|---|---|
| (1) | fLs / fw | 6.0 – 30.0 | 15.58 | ✓ Satisfied |
| (2) | fLr / f1 | −3.0 – −2.0 | −2.47 | ✓ Satisfied |
| (3) | T1smin / fw | 0.5 – 1.4 | 0.98 | ✓ Satisfied |
| (4) | νdLs | > 35.0 | 70.23 | ✓ Satisfied |
| (5) | BFw / fw | 2.2 – 5.0 | 3.43 | ✓ Satisfied |

All five conditions also satisfy the tightened ranges (1a)–(5a) and (1b)–(5b) as documented in ¶0031–¶0044.

- **Condition (1)** constrains the IS group power to balance stabilization sensitivity against decentering aberration (¶0027).
- **Condition (2)** relates the rear subsystem focal length to Group 1's focal length, governing the balance between back focal distance and overall length in the negative-lead architecture (¶0028–¶0030).
- **Condition (3)** ensures adequate physical space between Group 1 and the aperture stop for the IS mechanism (¶0035–¶0036).
- **Condition (4)** limits the IS element's dispersion to control decentering lateral chromatic aberration (¶0039–¶0041).
- **Condition (5)** constrains the back focal distance to ensure sufficient clearance for the SLR mirror and rear optical components (filter stack, etc.) without excessive overall length (¶0042–¶0044).

## Petzval Sum and Field Curvature Budget

The surface-by-surface Petzval sum for the full system is +0.00684, corresponding to a Petzval radius of +146.3 mm. For a wide-angle lens with EFL = 10.3 mm, this yields a Petzval radius / EFL ratio of 14.2, indicating a well-flattened Petzval surface. The negative-lead architecture is instrumental here: the four negative elements in Group 1 (L1–L4) contribute large negative Petzval terms, and additional negative contributions from the L9+L10 doublet and L12 compensate for the strong positive contributions from the converging elements elsewhere — particularly L11, whose low refractive index (nd = 1.497) produces the largest positive Petzval term in the system.

The largest individual Petzval contributions by element are:

| Element(s) | Petzval contribution |
|---|---|
| L3 (surfaces 5–6) | −0.0210 (largest negative) |
| L11 (surfaces 20–21) | +0.0404 (largest positive) |
| L12 (surfaces 22–23) | −0.0196 |
| L4 (surfaces 7–8) | −0.0182 |
| L5 (surfaces 9–10) | +0.0212 |
| L7+L8 (surfaces 13–15) | +0.0168 |
| L13+L14 (surfaces 24–26) | +0.0161 |
| L1 (surfaces 1–2) | −0.0152 |

The design achieves its flat field through a global balance: the six elements with net negative Petzval contributions (L1, L2, L3, L4, L9+L10, L12) collectively contribute −0.0917, while the five elements with net positive contributions (L5, L6, L7+L8, L11, L13+L14) contribute +0.0986, yielding a near-neutral net of +0.0068.

## Design Heritage and Context

The Canon EF-S 10-18mm f/4.5-5.6 IS STM was announced in June 2014 as a compact, affordable alternative to the existing Canon EF-S 10-22mm f/3.5-4.5 USM (released 2004), which lacked IS and used a ring USM focus motor. The 10-18mm was the first Canon EF-S wide-angle zoom to include image stabilization and was designed from the outset for Canon's EOS Movie Servo AF video autofocus system via the STM motor.

The four-group negative-lead zoom architecture is a well-established design family for wide-angle zooms dating to Tokina and Tamron designs of the 1980s and 1990s. The patent's primary contribution is the integration of a single-element IS group within the second (positive) zoom group, placed ahead of the aperture stop, combined with a single-element rear-focus group — a configuration optimized for compactness and compatibility with the STM drive system.

The lens was discontinued following Canon's transition to the RF mount system, with the Canon RF-S 10-18mm f/4.5-6.3 IS STM serving as its mirrorless successor.

## Sources

1. JP 2015-31869 A (Canon Inc., published 16 February 2015). Full patent text and numerical examples.
2. Canon Camera Museum, product entry EF431: "EF-S10-18mm f/4.5-5.6 IS STM." Confirms 1 UD element, 2 aspherical elements (1 PMo), and IS specification.
3. Canon U.S.A. product page: EF-S 10-18mm f/4.5-5.6 IS STM. Published specifications: 14 elements / 11 groups, f/4.5-5.6, MFD 0.22 m, filter 67 mm, 240 g.
4. OHARA Optical Glass Catalog (current edition). Glass identification cross-references for S-LAH66, S-FPM2, S-TIM27, S-FSL5, S-LAH55V, S-TIM22, S-LAH59, S-TIM5, S-FPL51, S-BSM14.
