# Sony FE 70-200mm F2.8 GM OSS II — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** JP 2023-039817 A, "Zoom Lens and Imaging Device" (ズームレンズ、および撮像装置).
**Applicant:** Sony Group Corporation (ソニーグループ株式会社).
**Inventors:** Naoki Miyakawa (宮川 直己), Shūgo Takahashi (高橋 周吾).
**Filed:** September 9, 2021. **Published:** March 22, 2023.
**Embodiment analyzed:** Example 2 (実施例2, Numerical Example 2).

The identification of Example 2 as the production Sony FE 70-200mm F2.8 GM OSS II (SEL70200GM2) rests on the following convergent evidence:

1. **Element and group count.** The patent embodiment has 17 elements. Sony's published specification for the SEL70200GM2 states 17 elements in 14 groups. Air-separated group count from the prescription yields 14 groups when the patent's 8 mechanically-linked "lens groups" (GR1–GR8) are subdivided at every air gap.
2. **Focal length and aperture.** The patent gives $f$ = 72.14–193.95 mm at F/2.88, corresponding to the marketed 70–200 mm F/2.8 range. The zoom ratio is 2.69×.
3. **Special elements.** Sony specifies 1 XA element, 2 aspherical elements (including the XA), 1 ED aspherical element, 2 ED elements, and 2 Super ED elements. The patent embodiment contains exactly 3 elements with aspherical surfaces (5 aspherical surfaces total), 2 elements of $\nu_d$ ≈ 95 (Super ED class), and 3 elements of $\nu_d$ = 81.6 (ED class), one of which carries aspherical surfaces.
4. **Image circle.** Image height $Y$ = 21.64 mm yields a diagonal of ≈ 43.3 mm, consistent with a 135 full-frame design for Sony E-mount.
5. **Internal zoom.** The optical total length $L$ = 215.07 mm is constant across all zoom positions, consistent with the production lens's non-extending barrel.
6. **Floating focus.** The patent describes two independently-moving focus groups (GR6 and GR7) driven in opposite directions, matching Sony's description of "floating focus" with four XD Linear Motors (two per focus group).
7. **Filing date.** The application was filed September 9, 2021; the SEL70200GM2 was announced in October 2021. The timing is consistent with typical pre-announcement patent filings.
8. **Close focus distance.** The patent uses 1000 mm close focus for its numerical example; the production lens achieves 0.40 m at 70 mm and 0.82 m at 200 mm. The patent likely describes only the telephoto-end close focus model, with the production lens's shorter MFD at the wide end achieved through additional cam-controlled motion not fully described by the three-position patent table.

Examples 3 and 4 share the same general architecture (identical group structure, same element count) but differ in prescription details (radii, spacings, glass choices), suggesting they represent alternative optimizations explored during the design process. Example 1 uses a different variator topology (the strongest-power variator group is GR4 with negative power, rather than GR2), and has more elements in GR5, indicating a substantially different design branch.


## Optical Architecture

The design is a positive-lead telephoto zoom of the form **+[−, −, +]+ · (−)(+) · −**, where the bracket denotes the three-group variator block placed ahead of the aperture stop, the parentheses mark the two floating focus groups, and the trailing negative group acts as a field-flattening relay.

The eight mechanically-linked groups, front to rear, are:

| Group | Power    | Role                               | Elements | Fixed/Moving        |
|-------|----------|-------------------------------------|----------|---------------------|
| GR1   | Positive | 1st fixed group (front collector)   | 3        | Fixed during zoom   |
| GR2   | Negative | Variator — negative                 | 1        | Zoom (moves image-ward W→T) |
| GR3   | Negative | Variator — negative                 | 2        | Zoom (moves image-ward W→T) |
| GR4   | Positive | Variator — positive                 | 1        | Zoom (moves image-ward W→T) |
| GR5   | Positive | 2nd fixed group (relay, contains stop) | 5     | Fixed during zoom   |
| GR6   | Negative | 1st focus group                     | 2        | Focus + zoom (image-ward for close) |
| GR7   | Positive | 2nd focus group                     | 1        | Focus + zoom (object-ward for close) |
| GR8   | Negative | Fixed rear group (field flattener)  | 2        | Fixed               |

The first group (GR1, $f$ = +131.5 mm) collects light from the object and provides the telephoto "lead" power. The variator block (GR2 + GR3 + GR4) lies entirely ahead of the aperture stop and changes the system focal length by translating three sub-groups along different cam tracks. All three sub-groups move toward the image side from wide to tele, with no reversals (¶0033). At the wide end the variator gaps are large; at the tele end the three groups close up toward GR5. The second fixed group (GR5, $f$ = +54.3 mm) contains the aperture stop and provides strong positive power that converges the axial beam, thereby reducing the diameter of the focus groups and the rear relay. After GR5, two focus groups (GR6, GR7) move in opposite directions along the optical axis to implement floating focus with aberration-compensated close-focus performance. Finally, GR8 ($f$ = −45.9 mm) acts as a fixed negative field-flattening group that controls Petzval curvature and telecentricity.

The overall Petzval sum at the wide-angle position is 0.000110 mm⁻¹, corresponding to a Petzval radius of approximately 9100 mm — an exceptionally flat field for a telephoto zoom, achieved primarily through the strong negative power of GR8 and the distributed negative elements within the variator.

The design achieves a constant aperture of F/2.88 across the zoom range. The total track length is fixed at 215.07 mm, with the sum of the four zoom-variable gaps (d6 + d8 + d11 + d13) conserved at 67.56 mm across all zoom positions, and the sum of the three focus-variable gaps (d23 + d26 + d28) conserved at 34.28 mm.


## Element-by-Element Analysis

### GR1 — Front Collector (Fixed, Positive)

#### L11 — Negative Meniscus, convex to object

$n_d$ = 1.77660, $\nu_d$ = 29.7. Glass: dense flint (six-digit 777/297, no confident catalog match). $f$ = −398 mm.

L11 is a weakly negative meniscus at the front of the lens. Its high-index, high-dispersion glass keeps the surface curvatures moderate despite the large 67 mm clear aperture. The nearest catalog glasses are FD110 (HOYA) and S-NPH4 (OHARA) at $n_d$ = 1.78472, $\nu_d$ = 26.1, but the index and dispersion offsets are both significant ($\Delta n_d$ = 0.008, $\Delta \nu_d$ = 3.6), so the patent values likely represent a proprietary melt or deliberate obfuscation. The element's primary role is to introduce negative Petzval contribution at the largest beam diameter, counterbalancing the strong positive power of L12 and L13 and flattening the field. The relatively high index ($n_d$ = 1.776) also minimizes surface reflections from the steep meniscus shape. As the first optical surface, it bears Sony's fluorine coating for environmental protection.

#### L12 — Biconvex Positive (Super ED)

$n_d$ = 1.43810, $\nu_d$ = 95.1. Glass: S-FPL55 class (OHARA) or FCD100 (HOYA) — fluorite-equivalent super-extra-low-dispersion crown. $f$ = +197 mm.

L12 is the first of two Super ED elements in GR1. With $\nu_d$ = 95.1 it lies at the extreme low-dispersion end of the glass map, in the fluorophosphate crown family near crystalline calcium fluoride. The biconvex shape provides strong positive power at a height where the axial marginal ray is near its maximum, making it the primary contributor to GR1's positive focal length and the primary corrector of axial chromatic aberration. The R4 surface (rear of L12) has an extremely large radius of −9920.911 mm, making it nearly flat — the element is effectively plano-convex, which simplifies manufacturing for this large-diameter Super ED blank.

#### L13 — Positive Meniscus, convex to object (Super ED)

$n_d$ = 1.43810, $\nu_d$ = 95.1. Glass: S-FPL55 class (OHARA) or FCD100 (HOYA) — same Super ED glass as L12. $f$ = +191 mm.

L13 completes the front collector with additional positive power in the same fluorite-class glass. The meniscus shape (R5 = +78.201, R6 = +1122.581) directs the convergence of the off-axis beam while preserving the achromatism established by L12. Using two Super ED elements rather than one allows the total positive power of GR1 to be split across four refracting surfaces, keeping the individual surface powers moderate and reducing higher-order spherical aberration. The combined effect of L11 + L12 + L13 is a compact achromatic positive group ($f_{GR1}$ = +131.5 mm) that establishes the telephoto ratio and provides first-order chromatic correction for the entire system.

### GR2 — First Variator (Moving, Negative)

#### L21 — Negative Meniscus, convex to object

$n_d$ = 1.77621, $\nu_d$ = 49.6. Glass: S-LAH66 class (OHARA) — lanthanum crown. $f$ = −61.8 mm.

L21 is a single-element group with the strongest negative power of any variator sub-group ($f_{GR2}$ = −62.1 mm). It is the group with the largest absolute refractive power in the variator block, and per the patent's claim structure (¶0024, ¶0084), it is composed of a single lens — the minimum element count that keeps weight low while maintaining sufficient zoom leverage. The closest catalog match is OHARA S-LAH66 ($n_d$ = 1.77250, $\nu_d$ = 49.6), with $\Delta n_d$ = 0.004 and exact Abbe number agreement. With $\nu_d$ = 49.6 the glass sits at the crown–flint boundary in the lanthanum family, providing enough negative power for zooming without introducing excessive chromatic variation during zoom motion. The meniscus shape (both radii positive: R7 = +481.705, R8 = +43.542) bends the beam strongly at the rear surface where light exits to the long air gap d8 that follows.

### GR3 — Second Variator (Moving, Negative)

#### L31 — Biconcave Negative (ED)

$n_d$ = 1.49845, $\nu_d$ = 81.6. Glass: S-FPL51 class (OHARA) — extra-low-dispersion fluorophosphate crown. $f$ = −69.3 mm.

#### L32 — Positive Meniscus, convex to object

$n_d$ = 1.86290, $\nu_d$ = 24.8. Glass: TAFD30 (HOYA) or S-TIH53 equivalent — ultra-high-index dense flint. $f$ = +100.9 mm.

L31 and L32 form a cemented doublet with a combined group focal length of $f_{GR3}$ = −214.8 mm. The cemented interface at R10 = +63.489 mm is the achromatizing surface: the transition from the low-index, low-dispersion ED crown (L31) to the high-index, high-dispersion dense flint (L32) produces a strong negative chromatic contribution that compensates for zoom-induced color shifts. The ED + dense flint pairing ($\nu_d$ = 81.6 vs. 24.8, a span of 56.8 Abbe units) provides more effective achromatization per unit of power than a conventional crown–flint doublet. The overall negative power of GR3 supplements GR2's zooming action, while the cemented construction eliminates the air-gap alignment sensitivity that would otherwise arise in a moving group.

### GR4 — Third Variator (Moving, Positive)

#### L41 — Positive Meniscus, convex to object

$n_d$ = 1.79191, $\nu_d$ = 25.7. Glass: dense flint (six-digit 792/257, no confident catalog match). $f$ = +192.5 mm.

L41 is a single positive meniscus element that forms the positive sub-group of the variator. Its role is to partially converge the beam exiting the two preceding negative groups, reducing the diameter of the axial bundle before it enters the fixed GR5 relay. At the wide-angle position, where the beam diameter in the variator is largest, L41 sits farthest from GR5 (d13 = 18.00 mm); at the telephoto end, it closes up to d13 = 1.49 mm. The patent notes (¶0035) that positioning the positive variator group on the image side of the variator block — where the axial ray height is highest at the wide end — is advantageous for reducing the diameter of subsequent groups. The nearest catalog matches — S-NPH4 (OHARA) and FD110 (HOYA), both at $n_d$ = 1.78472, $\nu_d$ = 26.1 — are offset by $\Delta n_d$ = 0.007, suggesting a proprietary formulation. The high refractive index allows strong curvature with minimal thickness and weight, consistent with the patent's emphasis on lightweight variator construction (¶0024).

### GR5 — Fixed Relay (Positive, Contains Aperture Stop)

GR5 is the most complex group in the system, containing five elements and the aperture stop. It has the strongest positive power of any single group ($f_{GR5}$ = +54.3 mm) and serves as the system's "power house" — converging the axial beam from the variator, establishing the f-number, and relaying the image toward the focus groups with controlled aberration balance.

#### L51 — Biconvex Positive, 2× Aspherical (ED Aspherical Element)

$n_d$ = 1.49856, $\nu_d$ = 81.6. Glass: S-FPL51 class (OHARA) — ED fluorophosphate crown. $f$ = +65.1 mm.

L51 is positioned immediately ahead of the aperture stop and is the single most powerful positive element in GR5. Both surfaces (S14, S15) are aspherical. This is the "ED aspherical element" cited in Sony's marketing — an element that simultaneously corrects chromatic aberration (through its ED glass composition) and spherical aberration (through the aspherical surface profiles). The aspherical coefficients on S14 are small (A4 = −1.544 × 10⁻⁷), indicating gentle correction of residual spherical aberration at the full aperture. S15's coefficients extend to A14 (−5.779 × 10⁻²⁰), showing that the rear surface provides higher-order correction. The biconvex shape with both surfaces aspherical suggests this element is a precision glass-molded (PGM) aspherical element manufactured from a moldable ED glass formulation.

#### Aperture Stop (STO)

The aperture stop sits between L51 and L52 at surface S16, within GR5. This position — behind the strongest positive element in the relay — places the stop near the point of maximum axial ray convergence, minimizing the stop diameter required for a given f-number. At wide-open F/2.88, the stop semi-diameter is approximately 17.1 mm (half of $\phi_{16}$ = 34.14 mm). The production lens uses a newly developed 11-blade diaphragm that remains nearly circular from wide open through two stops of closure.

#### L52 — Biconcave Negative

$n_d$ = 1.86290, $\nu_d$ = 24.8. Glass: TAFD30 (HOYA) — ultra-high-index dense flint, same glass as L32. $f$ = −47.5 mm.

L52 follows the stop and provides strong negative power to achromatize GR5 against the positive ED element L51. The $\nu_d$ = 24.8 flint paired with the $\nu_d$ = 81.6 ED crown yields a chromatic lever of 56.8 Abbe units, identical to the GR3 doublet pairing. L52's biconcave shape (R17 = −192.404, R18 = +52.285) places the stronger curvature on the rear surface, which faces toward the incoming converging beam from the stop, maximizing its effectiveness at correcting spherical and coma contributions from L51.

#### L53 + L54 — Cemented Doublet (OIS Group)

**L53** — Negative Meniscus, convex to object.
$n_d$ = 1.86290, $\nu_d$ = 24.8. Glass: TAFD30 (HOYA). $f$ = −145.7 mm.

**L54** — Biconvex Positive, 1× Aspherical (rear surface S21).
$n_d$ = 1.58547, $\nu_d$ = 59.4. Glass: S-BAL41 (OHARA) — barium crown, exact catalog match. $f$ = +40.7 mm.

The cemented L53 + L54 doublet is identified by the patent (¶0091) as the optical image stabilization (OIS) group: "the cemented lens composed of L53 and L54 can be used as the stabilization lens group by moving perpendicular to the optical axis." This is the "decentering" element that shifts laterally to counteract hand-shake blur. The cemented construction ensures that L53 and L54 move as a rigid unit during OIS operation without introducing decenter-induced coma from an air gap.

L54's rear surface (S21) is aspherical with significant higher-order terms (A4 = 2.771 × 10⁻⁶, A6 = 1.119 × 10⁻⁸, extending through A14). The aspherical profile on this surface compensates for the residual coma and astigmatism introduced when the doublet is decentered during stabilization. This is a common technique in modern OIS designs: placing the aspherical correction on the stabilization group itself ensures that the aberration balance is maintained during image stabilization, not just on-axis.

The net power of the cemented pair ($f$ ≈ +56 mm) is positive, contributing to the overall convergence of GR5.

#### L55 — Biconvex Positive, 2× Aspherical (XA Element)

$n_d$ = 1.58547, $\nu_d$ = 59.4. Glass: S-BAL41 (OHARA) — same barium crown as L54. $f$ = +126.2 mm.

L55 is a standalone biconvex element with both surfaces (S22, S23) aspherical. This is the XA (Extreme Aspherical) element, manufactured to 0.01-micron surface precision per Sony's specification. The XA designation indicates a glass-molded aspherical element with surface accuracy an order of magnitude tighter than standard aspherical elements, specifically designed to suppress "onion ring" bokeh patterns that arise from periodic surface irregularities in conventional aspherics. The S-BAL41 barium crown glass ($n_d$ = 1.58547) is well-suited to precision glass molding (PGM), with a glass transition temperature and thermal expansion compatible with high-accuracy molding processes.

S22 has very weak base curvature (R = +325.773 mm) but significant aspherical departure (A4 = 6.525 × 10⁻⁶), functioning almost as a Schmidt-plate-type corrector that manages field-dependent spherical aberration. S23 has stronger base curvature (R = −95.070) with aspherical terms extending to A14, providing combined sagittal and tangential field correction. Together, L55's two aspherical surfaces fine-tune the wavefront across the field at all zoom positions, balancing sharpness against bokeh quality — a hallmark of the G Master design philosophy.

### GR6 — First Focus Group (Moving, Negative)

#### L61 + L62 — Cemented Doublet

**L61** — Plano-Convex, convex to image.
$n_d$ = 1.93323, $\nu_d$ = 20.9. Glass: S-NPH53 (OHARA) — ultra-high-index ultra-dense flint, exact catalog match. $f$ = +58.6 mm.

**L62** — Biconcave Negative.
$n_d$ = 1.65803, $\nu_d$ = 39.7. Glass: S-TIM22 (OHARA) — titanium flint, exact catalog match. $f$ = −29.7 mm.

GR6 is the first of two floating focus groups, with a combined group focal length of $f_{GR6}$ = −61.0 mm. During focusing from infinity to close range, GR6 moves toward the image side (¶0091). At the telephoto end, GR6's focus travel is largest: d23 increases from 2.30 mm (infinity) to 11.53 mm (close focus at 1000 mm), corresponding to 9.23 mm of rearward motion. At the wide end the travel is much smaller (1.14 mm), consistent with the reduced sensitivity of the system to focus shifts at shorter focal lengths.

L61's flat front surface (R24 = ∞) simplifies manufacturing and alignment, while its ultra-high-index S-NPH53 glass ($n_d$ = 1.933, $\nu_d$ = 20.9) provides strong positive surface power at the cemented junction (R25 = −54.730). The junction transition from $n_d$ = 1.933 to $n_d$ = 1.658 produces a large index step (Δ$n$ = 0.275) that is the primary source of GR6's chromatic correction. The net negative power of the doublet provides divergence that is partially compensated by GR7's convergence, and the floating relationship between GR6 and GR7 controls the aberration balance (particularly spherical aberration and field curvature) as the object distance changes.

Two of the lens's four XD Linear Motors are dedicated to driving GR6.

### GR7 — Second Focus Group (Moving, Positive)

#### L71 — Biconvex Positive

$n_d$ = 1.61669, $\nu_d$ = 44.3. Glass: E-FEL6 class (HOYA) — eco-friendly flint, or equivalent ($\Delta n_d$ = 0.0001 from catalog). $f$ = +50.5 mm.

L71 is a single biconvex positive element forming the second focus group ($f_{GR7}$ = +50.8 mm). During focusing, GR7 moves toward the object side — opposite to GR6's direction. This counter-motion is the essence of the floating focus mechanism: by varying the separation between GR6 (negative) and GR7 (positive), the system adjusts focus while simultaneously correcting for the spherical aberration and field curvature shifts that would occur with single-group focusing. The patent states (¶0039) that this dual-group arrangement allows the lens to maintain high optical performance from infinity to close focus.

At the wide end, GR7 moves 1.15 mm toward the object for close focus; at the telephoto end, the travel is 5.33 mm. The ratio of GR6 to GR7 travel varies with zoom position, providing zoom-dependent aberration compensation. The condition expression (3) from the patent gives $|f_{f1}/f_{f2}|$ = $|-61.03/50.78|$ = 1.20, which falls within the prescribed range of 0.5–3.0 (¶0040–0042).

Two XD Linear Motors drive GR7 independently from GR6.

### GR8 — Rear Group (Fixed, Negative)

#### L81 — Biconcave Negative (ED)

$n_d$ = 1.49845, $\nu_d$ = 81.6. Glass: S-FPL51 class (OHARA) — ED fluorophosphate crown. $f$ = −104.9 mm.

L81 is an ED glass element in a negative role — an unusual but deliberate choice. Placing a low-dispersion glass in a negative element at the rear of the system provides negative chromatic contribution that helps balance the residual lateral color from the variator and relay groups. The biconcave shape provides substantial negative Petzval contribution, flattening the field at the image plane. The use of ED glass rather than a conventional crown minimizes the lateral chromatic aberration penalty that a negative rear element would otherwise introduce.

#### L82 — Negative Meniscus, convex to image

$n_d$ = 2.00912, $\nu_d$ = 29.1. Glass: FD225 (HOYA) — ultra-high-index dense flint, exact catalog match. $f$ = −84.5 mm.

L82 is the rearmost glass element, made of the highest-index glass in the system ($n_d$ = 2.009). The meniscus shape (both radii negative: R31 = −44.639, R32 = −95.059) curves toward the image, creating a divergent effect on the converging beam. Its primary role is to control the exit pupil position and telecentricity for the digital sensor, while contributing additional negative Petzval curvature. The ultra-high index minimizes the surface curvatures needed for a given power, keeping the element thin and the sag manageable at the ~32 mm semi-diameter.

The combined GR8 power ($f_{GR8}$ = −45.9 mm) is the strongest negative group in the system, dominating the Petzval balance and ensuring flat-field performance across the image circle.


## Glass Identification and Selection

The design employs glasses from at least two vendors (OHARA and HOYA), which is typical of Sony's optical engineering practice.

| Element | $n_d$   | $\nu_d$ | Glass Identification       | Role               | Confidence |
|---------|---------|---------|----------------------------|---------------------|------------|
| L11     | 1.77660 | 29.7    | Dense flint (777/297)      | Dense flint         | Uncertain  |
| L12     | 1.43810 | 95.1    | S-FPL55 (OHARA) / FCD100 (HOYA) | Super ED crown  | Close      |
| L13     | 1.43810 | 95.1    | S-FPL55 (OHARA) / FCD100 (HOYA) | Super ED crown  | Close      |
| L21     | 1.77621 | 49.6    | S-LAH66 class (OHARA)     | Lanthanum crown     | Close      |
| L31     | 1.49845 | 81.6    | S-FPL51 class (OHARA)     | ED crown            | Close      |
| L32     | 1.86290 | 24.8    | TAFD30 (HOYA)              | Ultra-dense flint   | Exact      |
| L41     | 1.79191 | 25.7    | Dense flint (792/257)      | Dense flint         | Uncertain  |
| L51     | 1.49856 | 81.6    | S-FPL51 class (OHARA)     | ED crown (moldable) | Close      |
| L52     | 1.86290 | 24.8    | TAFD30 (HOYA)              | Ultra-dense flint   | Exact      |
| L53     | 1.86290 | 24.8    | TAFD30 (HOYA)              | Ultra-dense flint   | Exact      |
| L54     | 1.58547 | 59.4    | S-BAL41 (OHARA)            | Barium crown        | Exact      |
| L55     | 1.58547 | 59.4    | S-BAL41 (OHARA)            | Barium crown (XA)   | Exact      |
| L61     | 1.93323 | 20.9    | S-NPH53 (OHARA)            | Ultra-dense flint   | Exact      |
| L62     | 1.65803 | 39.7    | S-TIM22 (OHARA)            | Titanium flint      | Exact      |
| L71     | 1.61669 | 44.3    | E-FEL6 class (HOYA)        | Eco flint (617/443) | Close      |
| L81     | 1.49845 | 81.6    | S-FPL51 class (OHARA)     | ED crown            | Close      |
| L82     | 2.00912 | 29.1    | FD225 (HOYA)               | Ultra-dense flint   | Exact      |

The chromatic correction strategy is built on three tiers of low-dispersion glass. The two Super ED elements (L12, L13, $\nu_d$ = 95.1) handle primary axial color correction in GR1, where the marginal ray height is largest. Three ED elements (L31, L51, L81, $\nu_d$ = 81.6) provide secondary color correction distributed across the variator, relay, and rear groups. The achromatizing partners are consistently ultra-high-dispersion dense flints: TAFD30 ($\nu_d$ = 24.8) appears in three elements (L32, L52, L53), providing chromatic lever arms of 56.8 Abbe units against the ED crowns. The use of HOYA FD225 ($n_d$ = 2.009) in L82 pushes the index to the extreme high end of the glass map, allowing very compact negative elements at the rear of the system.

Two elements — L11 (1.77660/29.7) and L41 (1.79191/25.7) — resist confident identification against any public catalog. The nearest matches (S-NPH4 / FD110 at $n_d$ = 1.78472, $\nu_d$ = 26.1) fall short on both index and Abbe number, suggesting proprietary melt compositions or deliberate obfuscation in the patent. L21 (1.77621/49.6) matches S-LAH66 (OHARA) in Abbe number exactly ($\nu_d$ = 49.6) with $\Delta n_d$ = 0.004, a reasonable class match for a lanthanum crown. Elements marked "Close" in confidence have $\Delta n_d$ in the range 0.001–0.004 from their nearest catalog match. For the Super ED elements (L12, L13), S-FPL55 from OHARA ($n_d$ = 1.43875, $\nu_d$ = 95.0) is the closer match by refractive index ($\Delta n_d$ = 0.00065), while HOYA FCD100 ($n_d$ = 1.43700, $\nu_d$ = 95.1) matches the Abbe number exactly ($\Delta \nu_d$ = 0). Either glass is plausible; Sony patents have used both OHARA and HOYA Super ED glasses in different designs. For the ED elements (L31, L51, L81), S-FPL51 / FCD1 ($n_d$ = 1.49700, $\nu_d$ = 81.6) is the clear family match, with the 0.0015 index offset likely reflecting a modified melt or patent obfuscation.


## Focus Mechanism

The lens employs a **floating inner focus** system with two independently-driven groups:

| Parameter              | GR6 (1st Focus Group)      | GR7 (2nd Focus Group)      |
|------------------------|----------------------------|----------------------------|
| Composition            | L61 + L62 (cemented)       | L71 (single element)       |
| Group power            | $f$ = −61.0 mm (negative)  | $f$ = +50.8 mm (positive)  |
| Focus direction (∞→close) | Toward image            | Toward object              |
| Drive                  | 2× XD Linear Motors        | 2× XD Linear Motors        |

The variable gaps during focusing are d23 (GR5→GR6), d26 (GR6→GR7), and d28 (GR7→GR8). The total path d23 + d26 + d28 is conserved at 34.28 mm across all zoom and focus positions, maintaining the constant overall length.

Focus travel increases substantially with focal length. At 200 mm, GR6 moves 9.23 mm rearward and GR7 moves 5.33 mm forward for a 1000 mm object distance, compared to 1.14 mm and 1.15 mm respectively at 70 mm. This zoom-dependent focus sensitivity is characteristic of positive-lead telephoto zoom designs. The production lens achieves a minimum focus distance of 0.40 m at 70 mm and 0.82 m at 200 mm, with a maximum magnification of 0.30×.

The floating focus approach — with GR6 (negative) and GR7 (positive) moving in opposition — enables the system to independently control the image plane position and the residual spherical aberration as the conjugate changes. This is a direct consequence of the two groups having opposite sign: moving them in opposite directions changes the focus while simultaneously adjusting the balance of under- and over-corrected spherical aberration. The patent's conditional expression (3) constrains the ratio $|f_{f1}/f_{f2}|$ to the range 0.5–3.0 to ensure that neither group dominates the focus correction too heavily. The Example 2 value of 1.20 sits near the center of this range, indicating a well-balanced distribution.


## Aspherical Surfaces

The design uses five aspherical surfaces distributed across three elements. The patent's aspheric equation (¶0058) uses the standard form:

$$Z(h) = \frac{c \cdot h^2}{1 + \sqrt{1 - (1+k) \cdot c^2 \cdot h^2}} + A_4 h^4 + A_6 h^6 + A_8 h^8 + A_{10} h^{10} + A_{12} h^{12} + A_{14} h^{14}$$

All conic constants $k$ are zero (spherical base curves); the aspherical departure comes entirely from the polynomial terms.

### S14 and S15 — L51 (ED Aspherical Element)

| Coeff. | S14              | S15              |
|--------|------------------|------------------|
| $k$    | 0                | 0                |
| $A_4$  | −1.54432 × 10⁻⁷ | +5.42944 × 10⁻⁶ |
| $A_6$  | +5.58124 × 10⁻¹⁰| −4.00709 × 10⁻⁹ |
| $A_8$  | +4.63363 × 10⁻¹³| +1.18539 × 10⁻¹¹|
| $A_{10}$| 0               | −4.01118 × 10⁻¹⁴|
| $A_{12}$| 0               | +7.61194 × 10⁻¹⁷|
| $A_{14}$| 0               | −5.77873 × 10⁻²⁰|

S14 (front of L51) has very gentle asphericity — only A4 through A8 are non-zero, with A4 < 0 indicating mild flattening of the convergent surface at the periphery to reduce zonal spherical aberration. S15 (rear of L51) carries more complex aspherical correction extending to the 14th order, with alternating-sign coefficients that shape a complex profile addressing both spherical aberration and coma across the full aperture. The asymmetry in complexity between the two surfaces is consistent with PGM manufacturing: the simpler front surface serves as the reference, while the more complex rear surface carries the bulk of the correction.

### S21 — L54 rear surface (Aspherical, OIS group element)

| Coeff. | S21              |
|--------|------------------|
| $k$    | 0                |
| $A_4$  | +2.77126 × 10⁻⁶ |
| $A_6$  | +1.11872 × 10⁻⁸ |
| $A_8$  | −1.24574 × 10⁻¹⁰|
| $A_{10}$| +6.42677 × 10⁻¹³|
| $A_{12}$| −1.62172 × 10⁻¹⁵|
| $A_{14}$| +1.60781 × 10⁻¹⁸|

The positive A4 on S21 indicates that the rear surface of L54 becomes progressively more steeply curved toward the rim compared to its spherical base (R = −79.003 mm). This profile specifically addresses the off-axis aberrations introduced when the L53+L54 doublet is decentered during OIS operation. The full 14th-order polynomial provides fine control over the wavefront in the tangential and sagittal planes during stabilization shifts.

### S22 and S23 — L55 (XA Element)

| Coeff. | S22              | S23              |
|--------|------------------|------------------|
| $k$    | 0                | 0                |
| $A_4$  | +6.52518 × 10⁻⁶ | +3.54582 × 10⁻⁶ |
| $A_6$  | +2.38380 × 10⁻¹⁰| −7.39037 × 10⁻⁹ |
| $A_8$  | −4.20105 × 10⁻¹¹| +6.16827 × 10⁻¹¹|
| $A_{10}$| +1.79781 × 10⁻¹³| −3.49819 × 10⁻¹³|
| $A_{12}$| −2.30019 × 10⁻¹⁶| +1.13261 × 10⁻¹⁵|
| $A_{14}$| +5.26712 × 10⁻²⁰| −1.35854 × 10⁻¹⁸|

L55 is the XA (Extreme Aspherical) element, manufactured to 0.01-micron surface precision. S22 has a very weak spherical base (R = +325.773 mm, nearly flat) with strong A4 departure (+6.53 × 10⁻⁶), functioning as an aspherical corrector plate that manages field-dependent aberrations — similar in principle to a Schmidt corrector. S23 has a stronger base (R = −95.070 mm) with complex higher-order terms whose signs alternate, indicating a carefully shaped profile that balances resolution (sharpness at the center and corners) against bokeh quality (smoothness of out-of-focus rendering). This is the defining element of the G Master design philosophy: the XA surface precision ensures that the aspherical profile is reproduced without the micro-ripple artifacts that conventional aspherics can imprint on out-of-focus highlights.

### Aspherical Departure Summary

The total aspherical departure (polynomial terms only, evaluated at each surface's semi-diameter) gives physical context for the correction magnitude:

| Surface | Semi-diameter | Spherical sag | Asph. departure | Departure / Sag |
|---------|---------------|---------------|-----------------|-----------------|
| S14     | 19.4 mm       | 4.13 mm       | +17 µm          | 0.4%            |
| S15     | 19.0 mm       | −1.88 mm      | +594 µm         | 32%             |
| S21     | 16.3 mm       | −1.69 mm      | +214 µm         | 13%             |
| S22     | 15.9 mm       | 0.39 mm       | +380 µm         | 97%             |
| S23     | 15.6 mm       | −1.29 mm      | +188 µm         | 15%             |

S14's departure is negligible (17 µm), confirming its role as a gentle spherical-aberration trimmer. S15 and S22 have the largest departures: S15 at 594 µm fundamentally reshapes the rear of L51 from its spherical base, while S22's 380 µm departure on a nearly flat base (0.39 mm sag) makes the aspherical polynomial the dominant contributor to the surface shape — the element's optical function is defined almost entirely by its aspherical figuring. These large departures are characteristic of precision glass-molded elements where the mold tooling can encode complex profiles that would be impractical to achieve by polishing.


## Image Stabilization

The patent identifies the cemented doublet L53 + L54 within GR5 as the OIS (Optical SteadyShot) element group (¶0091). This group shifts perpendicular to the optical axis to compensate for angular camera shake. The stabilization group is positioned between the aperture stop and the rear of GR5, where the beam diameter is moderate (semi-diameters of ~33–34 mm) and the principal ray height is sufficient to provide effective angular compensation.

The production lens provides three OSS modes: Mode 1 (standard), Mode 2 (panning), and Mode 3 (moving subjects with emphasis on viewfinder stability). The aspherical surface on L54's rear (S21) is specifically designed to maintain image quality during decentered operation, minimizing the coma and astigmatism that would otherwise degrade the stabilized image.


## Conditional Expressions

The patent defines three conditional expressions. Example 2 satisfies all of them:

| Expression | Formula                                    | Range           | Example 2 Value | Satisfied |
|------------|--------------------------------------------|-----------------|-----------------|-----------|
| (1)        | $f_{fix}/f_{zp}$                          | 0.05 ≤ · < 0.67 | 0.28            | Yes       |
| (2)        | $(f_{f1}/|f_{f1}|) \cdot (d_w - d_t)/d_w$ | 0.0 ≤ · ≤ 1.0   | 0.06            | Yes       |
| (3)        | $|f_{f1}/f_{f2}|$                         | 0.5 < · < 3.0   | 1.20            | Yes       |

where $f_{fix}$ = 54.25 mm (GR5 focal length), $f_{zp}$ = 194.31 mm (strongest positive variator group = GR4), $f_{f1}$ = −61.03 mm (GR6), $f_{f2}$ = 50.78 mm (GR7), $d_w$ = 74.89 mm, $d_t$ = 79.18 mm.

Expression (1) ensures the relay group GR5 is sufficiently powerful relative to the variator's positive group to converge the beam and reduce the focus group diameters. Expression (2) constrains the focus group's zoom-dependent position shift to keep the total stroke (zoom + focus) compact. Expression (3) balances the two focus groups' focal lengths for effective floating-focus aberration correction.


## Design Heritage and Context

The SEL70200GM2, announced October 2021, represented a generational shift in Sony's telephoto zoom engineering. It reduced the element count from 23 (in the original SEL70200GM, 2016) to 17, cutting weight by 29% (from 1480 g to 1045 g) while improving optical performance. The weight reduction was achieved through a fundamental redesign of the zoom architecture: the original lens used a more conventional multi-group variator with more elements per moving group, while the MK II adopted the lightweight three-group variator topology described in this patent, with the strongest-power variator sub-group limited to a single element (GR2, one lens). This aligns with the patent's core claim that limiting the highest-power variator group to three or fewer elements enables weight reduction without sacrificing correction quality (¶0024).

The design also reflects Sony's vertically integrated glass and manufacturing capabilities, with precision glass-molded XA aspherical elements and ED aspherical elements that were not feasible in the 2016 design generation.


## Sources

1. JP 2023-039817 A, Sony Group Corporation, published March 22, 2023. Example 2.
2. Sony Corporation, "FE 70-200mm F2.8 GM OSS II" official product specifications, https://www.sony.com/.
3. OpticalLimits review of the Sony FE 70-200mm f/2.8 GM OSS II, June 2024.
4. OHARA Optical Glass catalog (S-FPL51, S-FPL55, S-LAH66, S-NPH53, S-NPH4, S-BAL41, S-TIM22).
5. HOYA Optical Glass catalog (TAFD30, FD110, FD225, FCD100, E-FEL6).
