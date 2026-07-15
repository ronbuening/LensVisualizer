# Sony 70-400mm f/4-5.6 G SSM II — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 8,049,968 B2  
**Application Number:** 12/318,515  
**Priority:** January 11, 2008 (JP 2008-004557 and JP 2008-004558)  
**Filed:** December 30, 2008  
**Granted:** November 1, 2011  
**Inventors:** Hisayuki Yamanaka and Dayong Li  
**Assignee:** Tamron Co., Ltd.  
**Title:** *Zoom Lens*  
**Worked examples:** Six  
**Embodiment analyzed:** Embodiment 6, the second six-group example

US 8,049,968 does not identify a commercial Sony lens. The production attribution is therefore an evidence-based match, not an explicit statement by either Tamron or Sony. Embodiment 6 is the strongest candidate for the Sony SAL70400G and SAL70400G2 for the following reasons:

1. The prescription has 18 elements in 12 air-separated groups, matching Sony's published 18-element, 12-group construction.
2. L12 and L13 use the same $n_d=1.49700$, $\nu_d=81.61$ ED-class fluorophosphate crown, matching Sony's statement that the lens contains two ED elements.
3. The computed focal-length range is 72.0562–388.0924 mm, close to the marketed 70–400 mm range.
4. The patent gives f/4.11–5.79, close to the marketed f/4–5.6 endpoint specification.
5. The patent image height is 21.633 mm, corresponding to a 43.266 mm image circle and the 135 full-frame diagonal.
6. Embodiment 6 focuses by moving the net-positive fifth group, which is the patent's explicitly described inner-focus configuration. Sony describes the production lens as internal focusing.
7. A paraxial close-focus solution at Sony's specified 1.5 m minimum focus distance gives 0.2731× at the telephoto end, closely reproducing Sony's 0.27× maximum-magnification specification.
8. The second zoom group is effectively stationary in an image-plane-fixed coordinate system: its position changes by only 0.048 mm from wide to tele. This agrees with the patent's statement that the second group may remain stationary in the six-group form.
9. Sony states that the SAL70400G2 retains the predecessor's optical design while adding Nano AR coating and revised autofocus electronics. The same prescription can therefore represent both versions at the paraxial-design level.

Embodiment 5 remains a plausible alternative because its 70.7231 mm wide-end focal length and f/4.05 wide-end aperture are closer to the marketed endpoints. It is a weaker overall match, however: it uses rear focus by the negative sixth group and gives only 0.2598× when independently solved at 1.5 m. Embodiment 6 is selected because focus architecture and close-focus magnification are more discriminating than small patent-to-production differences in nominal focal length or f-number.

Sony's published production specifications take precedence where they differ from the patent: 70–400 mm, f/4–5.6, 1.5 m minimum focus, 0.27× maximum magnification, 77 mm filter thread, nine aperture blades, Sony A mount, 135 full-frame coverage, and body-integrated rather than lens-based stabilization. The companion data file therefore uses production nominal maximum apertures of f/4.0, f/4.5, and f/5.6 at its wide, 167 mm, and tele control points. The middle value follows the documented production aperture interval of f/4.5 from 100 through 200 mm; the patent's f/4.11, f/5.18, and f/5.79 remain design values rather than `nominalFno` values.

## Optical Architecture

The prescription is a six-zoom-group telephoto zoom with a positive–negative–positive–positive–positive–negative power sequence. The 18 elements form 12 air-separated physical groups:

| Zoom group | Net power | Elements | Air-separated groups | Principal function |
|---|---:|---|---:|---|
| G1 | +172.0316 mm | L11–L13 | 2 | Front collector and primary axial-color correction |
| G2 | −52.5524 mm | L21–L23 | 2 | Negative variator |
| G3 | +189.0866 mm | L31–L33 + stop | 3 | Positive compensator and stop carrier |
| G4 | +228.1124 mm | L41–L42 | 1 | Auxiliary positive relay and spherical-aberration-control doublet |
| G5 | +69.8075 mm | L51–L54 | 2 | Main positive relay, composite spherical-aberration corrector, and focus group |
| G6 | −65.9427 mm | L61–L63 | 2 | Rear negative relay group |

At the telephoto position, total track is 330.1648 mm and EFL is 388.0924 mm, giving $\mathrm{TL}/\mathrm{EFL}=0.8507$. The tele end is therefore a genuine telephoto construction. At the wide position the ratio is 3.3325, so the same statement does not apply across the full zoom range.

With the image plane fixed, zooming from wide to tele moves G1, G3, G4, G5, and G6 toward the object. G2 is nearly stationary. The principal variable gaps are:

| Gap | Wide | Middle | Tele | Trend |
|---|---:|---:|---:|---|
| G1–G2, $d_5$ | 2.5000 mm | 47.2958 mm | 92.4906 mm | Increases |
| G2–G3, $d_{10}$ | 46.1612 mm | 18.4655 mm | 2.0000 mm | Decreases |
| Stop–G4, $d_{17}$ | 17.1294 mm | 10.9430 mm | 6.3591 mm | Decreases |
| G4–G5, $d_{20}$ | 2.8519 mm | 11.5811 mm | 13.0322 mm | Increases |
| G5–G6, $d_{26}$ | 21.9339 mm | 18.2572 mm | 2.5000 mm | Decreases |
| Back focus, $d_{31}$ | 66.1963 mm | 94.9192 mm | 130.4291 mm | Increases |

The aperture stop follows G3. The distinctive feature is the division of the positive rear relay into G3, G4, and G5. G4 contains an auxiliary cemented doublet, while G5 contains a nearly afocal negative–positive–negative triplet followed by a positive singlet. The patent states that the diverging cemented interfaces in these groups deliberately over-correct the focus-induced spherical-aberration change that would otherwise remain under-corrected at short subject distances.

The design is all-spherical. No aspherical coefficients are listed for Embodiment 6.

## Element-by-Element Analysis

The focal lengths below are independently computed standalone in-air values for each physical element. For cemented components, these values describe the isolated element and must not be confused with its in-situ behavior in the cemented assembly.

### L11 — Negative Meniscus, convex to object

$n_d=1.80420$, $\nu_d=46.50$. Glass: TAF3 (Hoya catalog equivalent, 804-465), dense lanthanum flint. $f=-158.37$ mm.

L11 is the negative front component of the cemented L11–L12 pair. Its moderate Abbe number supplies the dispersive counterweight to the ED positive component. The complete L11–L12 cemented pair is almost afocal, with a computed focal length of approximately +218 m, showing that its principal task is chromatic and aberrational rather than net power generation.

### L12 — Biconvex Positive ED element

$n_d=1.49700$, $\nu_d=81.61$. Glass: FCD1 (Hoya catalog equivalent, 497-816), ED fluorophosphate crown. $f=+158.60$ mm.

L12 is the first of the two ED elements. Cementing it to L11 combines high positive low-dispersion power with a dense-flint negative partner. The interface at $R=91.0103$ mm is diverging in the paraxial sense because the refractive index decreases from 1.80420 to 1.49700 at a positive radius.

### L13 — Biconvex Positive ED element

$n_d=1.49700$, $\nu_d=81.61$. Glass: FCD1 (Hoya catalog equivalent, 497-816), ED fluorophosphate crown. $f=+172.54$ mm.

L13 is separated from the cemented pair by 0.3000 mm. It supplies most of the remaining positive power of G1 while retaining the same low-dispersion glass as L12. Locating both ED elements in the front group is consistent with the need to control longitudinal color where front-group power is strongly magnified at long focal lengths.

### L21 — Negative Meniscus, convex to object

$n_d=1.61800$, $\nu_d=63.39$. Glass: PCD4 (Hoya catalog equivalent, 618-634), phosphate crown. $f=-75.38$ mm.

L21 is the leading negative element of the variator. Its front radius, 198.4362 mm, satisfies the patent's curvature condition relative to the wide-end focal length. The convex-forward meniscus avoids the strongly concave object-side surface that the patent associates with excessive wide-end field-curvature variation during focusing.

### L22 — Biconcave Negative

$n_d=1.48749$, $\nu_d=70.44$. Glass: FC5 (Hoya catalog equivalent, 487-704), fluor crown. $f=-61.38$ mm.

L22 is the low-index, low-dispersion negative component of the G2 cemented pair. Its high Abbe number limits the chromatic burden normally associated with a strong negative variator.

### L23 — Positive Meniscus, convex to object

$n_d=1.80610$, $\nu_d=33.27$. Glass: NBFD15 (Hoya catalog equivalent, 806-333), dense flint. $f=+89.14$ mm.

L23 is cemented to L22. The pair has a net focal length of −195.01 mm, so it remains negative overall while using a large glass-index and dispersion contrast to control chromatic behavior inside G2.

### L31 — Biconvex Positive

$n_d=1.61800$, $\nu_d=63.39$. Glass: PCD4 (Hoya catalog equivalent, 618-634), phosphate crown. $f=+84.63$ mm.

L31 is the principal positive element of G3. It receives the diverging bundle from G2 and begins the reconvergence toward the stop. Its moderate index and high Abbe number provide positive power without adding the very strong dispersion used later in L33.

### L32 — Biconcave Negative

$n_d=1.83481$, $\nu_d=42.72$. Glass: TAFD5F (Hoya catalog equivalent, 835-427), dense lanthanum flint. $f=-41.57$ mm.

L32 is the strongest negative singlet in G3. It counterbalances L31 and L33, moderating the group's net power and providing additional degrees of freedom for spherical aberration, astigmatism, and longitudinal color.

### L33 — Biconvex Positive

$n_d=1.84666$, $\nu_d=23.78$. Glass: FDS90 (Hoya catalog equivalent, 847-238), dense flint. $f=+59.27$ mm.

L33 lies immediately before the aperture stop. It is one of four FDS90 elements in the design. Its high index permits substantial positive power with manageable curvature, while its very low Abbe number makes it a strong chromatic-control component. It satisfies Formula (3) under the summary and claim wording, which requires a qualifying positive element after G1, but not under the narrower detailed-description wording that places the element after the stop. L54 is the unambiguous qualifying element under either reading.

### L41 — Near-Plano Biconcave Negative

$n_d=1.84666$, $\nu_d=23.78$. Glass: FDS90 (Hoya catalog equivalent, 847-238), dense flint. $f=-46.43$ mm.

L41 begins the cemented G4 doublet. Its first surface is extremely weak ($R=-5925.0049$ mm), while the cemented rear surface is strongly curved. The interface with L42 is diverging and supplies the auxiliary spherical-aberration effect described by the patent.

### L42 — Biconvex Positive

$n_d=1.59551$, $\nu_d=39.22$. Glass: Ref.E-F8 (Hoya reference equivalent, 596-392), flint. $f=+40.24$ mm.

L42 supplies the positive power of G4. The complete cemented pair has $f=+228.1124$ mm. The relatively weak net power compared with the individual components indicates substantial internal cancellation, allowing the junction curvature and glass contrast to influence aberrations more strongly than the group's net focal power alone would suggest.

### L51 — Negative Meniscus, convex to object

$n_d=1.84666$, $\nu_d=23.78$. Glass: FDS90 (Hoya catalog equivalent, 847-238), dense flint. $f=-77.06$ mm.

L51 is the front negative member of the cemented focusing triplet. It shares FDS90 with L33, L41, and L54, concentrating high-index, high-dispersion glass around the stop and the principal spherical-aberration-control group.

### L52 — Biconvex Positive

$n_d=1.61800$, $\nu_d=63.39$. Glass: PCD4 (Hoya catalog equivalent, 618-634), phosphate crown. $f=+33.21$ mm.

L52 is the positive core of the triplet. Its two cemented junctions are both diverging under the patent's sign convention. The strong positive standalone power is almost cancelled by the adjacent negative components when the triplet is evaluated as a cemented assembly.

### L53 — Negative Meniscus, concave to object

$n_d=1.80610$, $\nu_d=33.27$. Glass: NBFD15 (Hoya catalog equivalent, 806-333), dense flint. $f=-54.37$ mm.

L53 completes the negative–positive–negative triplet. The computed triplet focal length is approximately −17.1 m, effectively afocal relative to the complete lens. Its importance is therefore the pair of high-power cemented interfaces and their influence on focus-dependent spherical aberration, not significant net group power.

### L54 — Biconvex Positive

$n_d=1.84666$, $\nu_d=23.78$. Glass: FDS90 (Hoya catalog equivalent, 847-238), dense flint. $f=+69.55$ mm.

L54 is air-spaced 0.2000 mm behind the triplet and turns G5 into a net-positive group. It is the clearest element satisfying Formula (3): it is positive, lies in a positive group after both G1 and the stop, and has $\nu_d=23.78$ within the required 20–35 range. G5's total focal length is +69.8075 mm.

### L61 — Negative Meniscus, convex to object

$n_d=1.61800$, $\nu_d=63.39$. Glass: PCD4 (Hoya catalog equivalent, 618-634), phosphate crown. $f=-93.31$ mm.

L61 is the leading negative singlet of G6. G6 does not move for focusing in Embodiment 6, but it translates during zooming and forms the rear negative relay that establishes the long back focus and telephoto shortening at the tele end.

### L62 — Positive Meniscus, concave to object

$n_d=1.74077$, $\nu_d=27.76$. Glass: E-FD13 (Hoya catalog equivalent, 741-278), dense flint. $f=+65.76$ mm.

L62 is the positive component of the final cemented pair. Its low Abbe number is paired with the more moderate-dispersion TAF3 negative component behind it, adding a final chromatic balancing degree of freedom near the image plane.

### L63 — Biconcave Negative

$n_d=1.80420$, $\nu_d=46.50$. Glass: TAF3 (Hoya catalog equivalent, 804-465), dense lanthanum flint. $f=-51.49$ mm.

L63 closes the optical system. The L62–L63 cemented pair has $f=-236.43$ mm, and the complete G6 group has $f=-65.9427$ mm after combination with L61 and the intervening air gap.

## Glass Identification and Selection

The patent publishes $n_d$ and $\nu_d$ but does not name a glass supplier or catalog type. Each of its nine distinct index/dispersion pairs has an exact six-digit match in Hoya's official cross-reference, where the first three digits encode rounded $n_d$ and the last three encode rounded $\nu_d$. The names below are therefore **Hoya catalog equivalents**, not proof that the production melts were supplied by Hoya; Hoya itself cautions that matching cross-reference codes do not establish identical glass composition. PCD4 appears in Hoya's polished-glass table, while the 1.59551/39.22 pair is specifically listed as the reference entry Ref.E-F8.

| Patent $n_d/\nu_d$ | Hoya catalog equivalent | Elements | Classification and role |
|---|---|---|---|
| 1.80420 / 46.50 | TAF3, 804-465 | L11, L63 | Dense lanthanum flint; negative achromatizing components |
| 1.49700 / 81.61 | FCD1, 497-816 | L12, L13 | ED fluorophosphate crown; front-group low-dispersion positive power |
| 1.61800 / 63.39 | PCD4, 618-634 | L21, L31, L52, L61 | Phosphate crown; moderate-index, low-dispersion power |
| 1.48749 / 70.44 | FC5, 487-704 | L22 | Fluor crown; low-dispersion negative variator component |
| 1.80610 / 33.27 | NBFD15, 806-333 | L23, L53 | Dense flint; cemented chromatic partners |
| 1.83481 / 42.72 | TAFD5F, 835-427 | L32 | Dense lanthanum flint; strong negative G3 corrector |
| 1.84666 / 23.78 | FDS90, 847-238 | L33, L41, L51, L54 | Very high-index dense flint; power and chromatic control around the stop |
| 1.59551 / 39.22 | Ref.E-F8, 596-392 | L42 | Reference flint; positive member of auxiliary G4 doublet |
| 1.74077 / 27.76 | E-FD13, 741-278 | L62 | Dense flint; rear-group chromatic correction |

Seven elements have $\nu_d\geq50$ and eleven have $\nu_d<50$. The design's chromatic strategy is not simply “ED at the front.” The two FCD1 elements reduce the chromatic cost of strong positive G1 power, while dense low-Abbe glasses in G3–G6 provide compensating chromatic contributions and lateral-color control. The prescription does not publish wavelength-specific line indices or partial-dispersion values, so claims beyond an ED-assisted, well-corrected achromatic design are not justified from the patent table alone.

## Focus Mechanism

Embodiment 6 is an inner-focus design. G5, the rearmost positive group, moves toward the object while G1, G2, G3, G4, and G6 remain fixed relative to the image plane at a selected zoom position. Back focus remains constant. The two adjacent gaps change by equal and opposite amounts, confirming rigid-body motion of G5.

The patent's “1.6 m” table is internally consistent only when 1.6 m is interpreted as the object-to-image-plane conjugate: the tabulated object distance $d_0$ plus total track equals 1600 mm at every zoom position. It is not 1.6 m measured from the front element.

For the data file, the focus gaps were independently re-solved at Sony's official 1.5 m MFD while preserving $d_{20}+d_{26}$ and the patent's fixed back focus:

| Position | $d_{20}$ at infinity | $d_{20}$ at 1.5 m | $d_{26}$ at infinity | $d_{26}$ at 1.5 m | G5 objectward travel | Paraxial magnification |
|---|---:|---:|---:|---:|---:|---:|
| Wide | 2.8519 mm | 1.9103 mm | 21.9339 mm | 22.8755 mm | 0.9416 mm | 0.0548× |
| Middle | 11.5811 mm | 8.2282 mm | 18.2572 mm | 21.6101 mm | 3.3529 mm | 0.1247× |
| Tele | 13.0322 mm | 1.2304 mm | 2.5000 mm | 14.3018 mm | 11.8018 mm | 0.2731× |

The tele-end result closely matches Sony's 0.27× specification. Sony identifies the drive as SSM, but the patent prescription establishes only the optical moving group; it does not specify the production motor or control electronics.

## Chromatic Correction Strategy

G1 carries two FCD1 ED positive elements and one TAF3 negative element. This arrangement places low-dispersion positive power at the front of the system, where axial-color errors become increasingly consequential toward the telephoto end.

G2 combines a high-Abbe FC5 negative element with a dense-flint NBFD15 positive partner. G3 through G5 then use four FDS90 elements with $\nu_d=23.78$. Their positions on both sides of the stop provide leverage over both axial and lateral chromatic balance. L54 supplies the low-Abbe positive element that satisfies Formula (3) even under the detailed description's narrower post-stop wording.

The final G6 pair reverses the usual dispersion ordering: low-Abbe positive E-FD13 precedes moderate-Abbe negative TAF3. This gives the rear group a local chromatic correction mechanism while preserving its required net negative power.

## Conditional Expressions

The patent presents five substantive conditions. Formula (6) is a restatement of Formula (1) in another claim formulation, not an additional independent optical condition.

### Formula (1): diverging-junction strength

$$2 < \frac{\sum \phi}{\phi_t} < 10$$

For G5, the two triplet junction contributions in the patent's signed expression are both positive:

- At surface 22: $(1.84666-1.61800)/47.3325=0.00483093\ \mathrm{mm}^{-1}$
- At surface 23: $(1.61800-1.80610)/(-33.6393)=0.00559167\ \mathrm{mm}^{-1}$

With $f_t=388.0927$ mm, the ratio is **4.0449**, reproducing the patent's tabulated 4.04.

### Formula (2): first-group negative-element dispersion

$$40 < \nu_{d1} < 55$$

L11 has $\nu_d=46.50$, so the condition is satisfied.

### Formula (3): positive-element dispersion

$$20 < \nu_{d2} < 35$$

The patent is not perfectly consistent in defining the eligible element: the summary and claim 5 refer to a positive element in a positive group succeeding G1, while the detailed description narrows the wording to a positive group succeeding the aperture stop. L54 has $\nu_d=23.78$ and satisfies both readings. L33 has the same glass but lies before the stop, so it satisfies only the broader wording.

### Formula (4): second-group front-surface curvature

$$1 < \frac{R}{f_{\mathrm{wide}}} < 8$$

Using $R=198.4362$ mm and $f_{\mathrm{wide}}=72.0562$ mm gives **2.7539**, satisfying the condition.

### Formula (5): telephoto-zoom field limit

$$2\omega_{\mathrm{wide}} < 40^\circ$$

The patent gives $2\omega_{\mathrm{wide}}=33.610^\circ$, satisfying the condition.

## Verification Summary

All prescription-derived values below were recomputed with an independent paraxial $y$–$n\theta$ ABCD trace rather than copied from the prior analysis.

| Quantity | Patent | Computed | Difference |
|---|---:|---:|---:|
| EFL, wide | 72.0562 mm | 72.05623 mm | +0.00003 mm |
| EFL, middle | 167.0619 mm | 167.06188 mm | −0.00002 mm |
| EFL, tele | 388.0927 mm | 388.09236 mm | −0.00034 mm |
| BFD, wide | 66.1963 mm | 66.19633 mm | +0.00003 mm |
| BFD, middle | 94.9192 mm | 94.91918 mm | −0.00002 mm |
| BFD, tele | 130.4291 mm | 130.42892 mm | −0.00018 mm |
| G1 focal length | +172.0317 mm | +172.0316 mm | −0.0001 mm |
| G2 focal length | −52.5524 mm | −52.5524 mm | <0.0001 mm |
| G3 focal length | +189.0866 mm | +189.0866 mm | <0.0001 mm |
| G4 focal length | +228.1124 mm | +228.1124 mm | <0.0001 mm |
| G5 focal length | +69.8075 mm | +69.8075 mm | <0.0001 mm |
| G6 focal length | −65.9427 mm | −65.9427 mm | <0.0001 mm |
| Total track, wide | 240.127 mm | 240.1265 mm | −0.0005 mm |
| Total track, tele | 330.165 mm | 330.1648 mm | −0.0002 mm |
| Formula (1) | 4.04 | 4.0449 | +0.0049 |

The surface-by-surface Petzval sum, calculated as $\sum \phi/(n n')$, is $+0.000751680\ \mathrm{mm}^{-1}$. Its reciprocal curvature magnitude is 1330.35 mm. Under the usual left-to-right optical radius convention, the corresponding Petzval image-surface radius is $R_P=-1/P=-1330.35$ mm, with its center of curvature toward the object. The Petzval value should not be interpreted as a direct prediction of the final tangential or sagittal field curvature, which also includes astigmatic contributions.

The inferred semi-diameters in the companion data file are not patent data. They begin with paraxial ray-envelope estimates and are shaped to match the group outlines in patent FIG. 6, most visibly the stepped taper across G1. The final checks give a 1.281 mm minimum edge thickness, 1.042 maximum same-element SD ratio, 0.479 maximum $sd/|R|$, 28.60° maximum rim angle, and 89.5% maximum signed sag intrusion at the surface 12–13 air gap. Wide, middle, and tele layouts at both focus endpoints render without surface trimming.

## Design Context

The patent's purpose is to preserve short-distance optical performance in a long telephoto zoom while moving only one relatively small internal group for focus. Its solution is not merely the use of ED glass. The central design mechanism is the deliberate use of high-power diverging cemented interfaces in a positive group containing two negative components. As G5 moves toward the object, ray height through the triplet changes, causing G5 to over-correct the focus-induced spherical-aberration shift that the preceding groups tend to leave under-corrected.

G4 supplies an auxiliary diverging junction, and the widening G4–G5 separation during zoom provides an additional astigmatism-control degree of freedom. This explains why the six-group examples differ structurally from the five-group examples even though both use the same general positive-leading telephoto-zoom concept.

For the SAL70400G2, Sony retained the predecessor's optical design and changed coating and autofocus-control details. Those changes do not alter the paraxial prescription represented here.

## Sources

- Yamanaka, Hisayuki, and Dayong Li. **US 8,049,968 B2, “Zoom Lens.”** Tamron Co., Ltd., granted November 1, 2011. Embodiment 6 prescription and variable-spacing tables are on patent pages 16–17; the six-group operating description is on pages 18–19.
- Sony UK. [70–400mm F4–5.6 G SSM II — Full Specifications](https://www.sony.co.uk/electronics/camera-lenses/sal70400g2/specifications). Production focal length, aperture, construction, MFD, magnification, filter, blades, mount, format, and stabilization.
- Sony UK. [70–400mm F4–5.6 G SSM II — Product Features](https://www.sony.co.uk/electronics/camera-lenses/sal70400g2). Internal focus, two ED elements, SSM, and retention of the predecessor's optical design.
- Hoya Optics Europe. [Glass Cross Reference Index](https://www.hoyaoptics.eu/glass-cross-reference-index). Official six-digit $n_d/\nu_d$ cross-reference and catalog-equivalent names; the page cautions that matching codes do not prove identical composition.
- Imaging Resource. [Sony 70-400mm f/4-5.6 G SAL-70400G](https://www.imaging-resource.com/lenses/sony-70-400mm-f-4-5-6-g-sal-70400g/). Production maximum-aperture intervals: f/4 from 70–100 mm, f/4.5 from 100–200 mm, f/5 from 200–300 mm, and f/5.6 from 300–400 mm.
