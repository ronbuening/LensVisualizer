# Canon EF 14mm f/2.8L USM — Patent Example 2 Optical Analysis

## Patent Reference and Design Identification

**Patent:** JP H05-034592 A (特開平5-34592; JP 1993-034592)  
**Application Number:** JP H03-188669 (特願平3-188669)  
**Filed:** 29 July 1991  
**Published:** 12 February 1993  
**Inventor:** Hideki Ogawa (小川 秀樹)  
**Applicant:** Canon Inc. (キヤノン株式会社)  
**Title:** コンパクトなリアフォーカス方式の超広角レンズ (*Compact Rear-Focus Ultra-Wide-Angle Lens*)  
**Embodiment analyzed:** Numerical Example 2 (数値実施例2)  
**Production-lens correspondence:** Original Canon EF 14mm f/2.8L USM; strong design-family match, but the public record does not prove that Example 2 rather than Example 1 was the exact production prescription

Numerical Example 2 is printed on patent page 6 and is transcribed into the paired data file without any focal-length
scaling.[1] Its link to
the original EF 14mm f/2.8L USM rests on several convergent points:

1. **Focal length and aperture.** The patent gives $f=14.2\ \mathrm{mm}$ and `fno = 1:2.892`; the marketed lens is 14 mm
   f/2.8. These values are retained separately. No scale factor is applied.
2. **Construction.** The example contains 14 elements in 10 air-spaced groups. Canon publishes 14 elements in 10 groups
   for the December 1991 lens.[2]
3. **Asphere placement.** The only asphere is the object-side surface of L2. Canon identifies element 2 as the production
   lens's aspherical element.[2]
4. **Field coverage.** The Example 2 heading literally prints $w=113.4^\circ$, whereas Figs. 5 and 6 print
   $w=56.72^\circ$ at the edge of the aberration plots. Example 1 makes the intended convention explicit by printing
   $2w=113^\circ$ in its heading and $w=56.52^\circ$ in its figures. The coherent reading for Example 2 is therefore
   $w=56.72^\circ$ and $2w=113.44^\circ$, with the heading rounded to 113.4°. The Gaussian rectilinear height
   $2f\tan w=43.271596\ \mathrm{mm}$ is a paraxial, undistorted reference; it is not a finite-ray image-circle measurement.
5. **Focus architecture.** Claim 1 and ¶0016 specify a fixed negative front group and a complete positive rear group that
   translates for focus. Canon publishes a 0.25 m closest focus and 0.10× maximum magnification for the production lens.[2]
6. **Timing.** The application was filed in July 1991, and Canon records the lens as marketed in December 1991.[2]

The correspondence is therefore strong at the design-family level. It is not unique proof of factory implementation:
Examples 1 and 2 share the same 14-element/10-group layout, one asphere on L2, rear-focus architecture, and 25 cm
aberration plots. Example 2 is analyzed because it is the requested embodiment and its numerical values align especially
closely with the marketed specification.

The prescription cannot be confused with the later EF 14mm f/2.8L II USM. Canon's 2007 redesign has 14 elements in 11
groups, two glass-molded aspherical elements, and two UD elements.[3]

## Optical Architecture

Example 2 is a rectilinear retrofocus ultra-wide-angle prime for the 35 mm SLR format. Its paraxial power distribution is

$$
\text{Group I: fixed negative}\; +\; \text{Group II: translating positive}.
$$

The independently traced group focal lengths are

$$
f_1=-26.001835\ \mathrm{mm},\qquad f_2=+30.161313\ \mathrm{mm}.
$$

At infinity, the complete system has

$$
f=14.201254\ \mathrm{mm},\qquad \mathrm{BFD}=38.725812\ \mathrm{mm}
$$

from surface 25. Thus

$$
\frac{\mathrm{BFD}}{f}=2.726929>1,
$$

which satisfies the actual retrofocus criterion: the back focal distance is longer than the effective focal length.

The 14 elements form 10 air-spaced groups:

- **Group I, surfaces 1–11:** four separate image-facing negative menisci followed by a cemented negative-meniscus /
  biconvex pair. It contains L1–L6 in five air-spaced groups.
- **Group II, surfaces 12–25:** a positive cemented pair, a separate object-facing negative meniscus, the aperture stop,
  two further cemented pairs, and a final positive element. It contains L7–L14 in five air-spaced groups.

The defining architectural choice is the distribution of front negative power over five meniscus components. Patent
¶0011 explains that this prevents extreme incidence and exit angles within Group I, reducing the front diameter demanded
by a 14 mm retrofocus design and avoiding concentrated aberration generation. Group II is corrected well enough to move
as a rigid rear-focus unit while Group I remains fixed (¶0016).

The radius convention is object to image: $R>0$ places the center of curvature to the image side; $R<0$ places it to the
object side. The dimensions are millimetres rather than normalized units: a direct paraxial trace reproduces the stated
14.2 mm focal length without scaling.

## Element-by-Element Analysis

The focal lengths below are standalone thick-element focal lengths with each physical element placed independently in air.
For components of cemented pairs, these values must not be confused with the element's in-situ contribution inside the
cemented assembly.

### L1 — Negative Meniscus, concave to the image

**$n_d=1.69680$, $\nu_d=55.5$. Glass: S-LAL14 (OHARA) current catalog equivalent, code 697555. Standalone $f=-97.290\ \mathrm{mm}$.**

Both radii are positive, with the rear surface more strongly curved. L1 begins the gradual divergence of the fixed front
group. Its moderate power is consistent with the patent's strategy of avoiding a single highly stressed front element
(¶0011).

### L2 — Weak Negative Meniscus with object-side asphere

**$n_d=1.60311$, $\nu_d=60.7$. Glass: S-BSM14 (OHARA) current catalog equivalent, code 603607. Standalone $f=-1211.000\ \mathrm{mm}$.**

L2 is nearly afocal paraxially. Its design function is dominated by surface 3A, the sole asphere. Claim 2 and ¶0012 state
that positive refractive action increases with ray height, correcting the increasingly negative distortion of the extreme
field while limiting influence on spherical aberration.

### L3 — Negative Meniscus, concave to the image

**$n_d=1.69680$, $\nu_d=55.5$. Glass: S-LAL14 (OHARA) current catalog equivalent, code 697555. Standalone $f=-51.445\ \mathrm{mm}$.**

L3 carries more negative power than L1 or L2. Its placement continues the progressive rise in axial-ray height through
Group I described in ¶0011.

### L4 — Negative Meniscus, concave to the image

**$n_d=1.77250$, $\nu_d=49.6$. Glass: S-LAH66 (OHARA) current catalog equivalent, code 773496. Standalone $f=-47.798\ \mathrm{mm}$.**

The high index supports useful negative power without exceptionally short radii. With $\nu_d<50$, the catalog equivalent
is a dense lanthanum flint, not a crown.

### L5 — Negative Meniscus, front component of J1

**$n_d=1.69680$, $\nu_d=55.5$. Glass: S-LAL14 (OHARA) current catalog equivalent, code 697555. Standalone $f=-24.414\ \mathrm{mm}$.**

L5 is the fifth image-facing negative meniscus and the strongest negative element in Group I by standalone power. It is
cemented to L6 at surface 10. Patent ¶0011 places particular emphasis on this location: the high axial-ray height at L5's
front surface generates higher-order spherical aberration, and cementing L5 to L6 helps balance the lower, zonal, and
higher-order terms.

### L6 — Biconvex Positive, rear component of J1

**$n_d=1.59551$, $\nu_d=39.2$. Glass: S-TIM8 (OHARA) current catalog equivalent, code 596392. Standalone $f=+21.052\ \mathrm{mm}$.**

L6 is stronger than L5 in isolation, so the complete cemented pair is net positive:

$$
f_{J1}=+103.649747\ \mathrm{mm}.
$$

The pair closes Group I while providing the spherical-aberration balance described in ¶0011.

### L7 — Biconvex Positive, front component of J2

**$n_d=1.56732$, $\nu_d=42.8$. Glass: S-TIL26 (OHARA) current catalog equivalent, code 567428. Standalone $f=+16.495\ \mathrm{mm}$.**

L7 begins the converging rear group. It is cemented to L8, and the complete pair remains strongly positive:

$$
f_{J2}=+23.277637\ \mathrm{mm}.
$$

### L8 — Negative Meniscus, concave to the object, rear component of J2

**$n_d=1.77250$, $\nu_d=49.6$. Glass: S-LAH66 (OHARA) current catalog equivalent, code 773496. Standalone $f=-63.633\ \mathrm{mm}$.**

L8 is the first of the two object-facing negative menisci ahead of the stop required by Claim 1. Patent ¶0014 treats the
pre-stop menisci as a coordinated correction system for spherical aberration, coma, and astigmatism rather than assigning
a single isolated aberration to L8.

### L9 — Negative Meniscus, concave to the object

**$n_d=1.77250$, $\nu_d=49.6$. Glass: S-LAH66 (OHARA) current catalog equivalent, code 773496. Standalone $f=-30.293\ \mathrm{mm}$.**

L9 is the second pre-stop negative meniscus and is stronger than L8 in standalone power. Its strongly curved object-side
surface contributes to the positive-direction spherical correction discussed in ¶0014.

### L10 — Biconvex Positive, front component of J3

**$n_d=1.60311$, $\nu_d=60.7$. Glass: S-BSM14 (OHARA) current catalog equivalent, code 603607. Standalone $f=+65.166\ \mathrm{mm}$.**

L10 lies immediately behind the stop and is cemented to L11. Although L10 is positive in isolation, the complete pair is
weakly negative:

$$
f_{J3}=-241.240975\ \mathrm{mm}.
$$

### L11 — Biconcave Negative, rear component of J3

**$n_d=1.74320$, $\nu_d=49.3$. Glass: S-LAM60 (OHARA) current catalog equivalent, code 743493. Standalone $f=-48.571\ \mathrm{mm}$.**

L11 overcomes L10's positive power and makes J3 net negative. Its rear surface and the front surface of L12 bound the
strongly curved air lens that ¶0014 associates with sagittal-flare correction.

### L12 — Biconcave Negative, front component of J4

**$n_d=1.92286$, $\nu_d=21.3$. Glass: PBH71 exact historical catalog equivalent (OHARA), code 923213; actual patent vendor unspecified. Standalone $f=-29.224\ \mathrm{mm}$.**

OHARA's historical PBH71 row reproduces both the six-digit patent code and the printed optical coordinates: catalog
$n_d=1.922864$ and $\nu_d=21.288699$ round to the patent's 1.92286 / 21.3 pair.[5] This is an exact catalog equivalent,
not proof that Canon bought the production melt from OHARA. Its very high index and dispersion contrast strongly with L13.

### L13 — Biconvex Positive, rear component of J4

**$n_d=1.48749$, $\nu_d=70.2$. Glass: S-FSL5 (OHARA) current catalog equivalent, code 487702. Standalone $f=+24.923\ \mathrm{mm}$.**

L13 is the low-dispersion positive partner of L12. The cemented pair is net positive:

$$
f_{J4}=+104.596397\ \mathrm{mm}.
$$

Patent ¶0014 explicitly links this interface to axial and lateral color correction as well as spherical, coma, and
astigmatic correction. The available data support a strong achromatizing role, but not an apochromatic claim.

### L14 — Biconvex Positive rear element

**$n_d=1.80400$, $\nu_d=46.6$. Glass: S-LAH65V (OHARA) current catalog equivalent, code 804466. Standalone $f=+42.573\ \mathrm{mm}$.**

L14 is a dense lanthanum flint rather than a crown. Patent ¶0015 states that it shares the positive power otherwise
concentrated at the rear of J4 and thereby moderates undercorrected spherical aberration.

## Glass Identification and Selection

The patent publishes only $n_d$ and $\nu_d$; it does not name a supplier. The labels below are catalog equivalents, not
claims about Canon's historical procurement or production melts. The OHARA matches were checked against published
catalog coordinates and dispersion data. The paired data file carries measured line indices for the current-catalog
matches; historical PBH71 resolves through the coefficient-backed glass catalog.[4][5]

| Patent code | Patent $n_d$ | Patent $\nu_d$ | Current catalog equivalent | Catalog $\nu_d$ | Elements | Status |
|---|---:|---:|---|---:|---|---|
| 697555 | 1.69680 | 55.5 | S-LAL14 (OHARA) | 55.53 | L1, L3, L5 | Exact index; rounded Abbe match |
| 603607 | 1.60311 | 60.7 | S-BSM14 (OHARA) | 60.64 | L2, L10 | Exact index; rounded Abbe match |
| 773496 | 1.77250 | 49.6 | S-LAH66 (OHARA) | 49.60 | L4, L8, L9 | Exact match at patent precision |
| 596392 | 1.59551 | 39.2 | S-TIM8 (OHARA) | 39.24 | L6 | Exact index; rounded Abbe match |
| 567428 | 1.56732 | 42.8 | S-TIL26 (OHARA) | 42.82 | L7 | Exact index; rounded Abbe match |
| 743493 | 1.74320 | 49.3 | S-LAM60 (OHARA) | 49.34 | L11 | Exact index; rounded Abbe match |
| 923213 | 1.92286 | 21.3 | PBH71 (OHARA historical) | 21.29 | L12 | Exact match at patent precision |
| 487702 | 1.48749 | 70.2 | S-FSL5 (OHARA) | 70.23 | L13 | Exact index; rounded Abbe match |
| 804466 | 1.80400 | 46.6 | S-LAH65V (OHARA) | 46.58 | L14 | Exact index; rounded Abbe match |

The main chromatic lever is J4: very-high-dispersion L12 is cemented to low-dispersion L13. J1 and J2 also combine
substantially different dispersions, but the patent's explicit axial- and lateral-color discussion centers on J4 (¶0014).
No UD, ED, fluorite, or apochromatic designation is inferred from Abbe number alone.

## Focus Mechanism

The lens uses rear focus. Group I, surfaces 1–11, remains fixed; Group II, surfaces 12–25, moves as a rigid unit along the
axis (Claim 1; ¶0016). Closer focus requires Group II to move toward the object, reducing the Group I–II air gap and
increasing the final surface-to-image distance by the same amount when the image plane is held fixed.

The patent provides aberration plots at infinity and 25 cm but no variable-spacing table and no explicit datum for the
25 cm distance. Exact close-focus travel is therefore not a directly published patent value. Two paraxial interpretations
were solved independently:

| Distance convention | Object plane to surface 1 | $d_{11}$ | Group II shift | Surface 25 to fixed image | Magnification |
|---|---:|---:|---:|---:|---:|
| Infinity | $\infty$ | 3.250000 mm | 0 | 38.725812 mm | 0 |
| 25 cm from surface 1 | 250.000000 mm | 2.156518 mm | 1.093482 mm objectward | 39.819294 mm | −0.052506× |
| 25 cm from fixed image plane | 121.644188 mm | 1.101054 mm | 2.148946 mm objectward | 40.874758 mm | −0.100294× |

The image-plane convention reproduces Canon's 0.25 m / 0.10× production specification and is therefore used for the
paired data file's close-focus endpoint.[2] This is an explicitly documented inference, not a reconstructed patent spacing
table. The close-state paraxial EFL becomes $14.776247\ \mathrm{mm}$ because changing the separation between the two power
groups changes the complete system power.

The patent establishes the optical movement only. The production lens name and Canon literature establish USM drive; no
motor geometry is inferred from the prescription.

## Aspherical Surfaces

Only surface 3A, the object-side surface of L2, is aspherical. Paragraphs 0023–0024 define

$$
X(H)=R\left[1-\sqrt{1-\frac{H^2}{R^2}}\right]+AH^2+BH^4+CH^6+DH^8+EH^{10},
$$

with axial sag positive in the direction of light travel. The base term is spherical, corresponding to standard conic
constant $K=0$. The polynomial uses even powers only. Since the printed $A$ coefficient is zero, the polynomial does not
alter the paraxial curvature.

The renderer mapping is:

| Surface | $R$ | $K$ | $A_4$ | $A_6$ | $A_8$ | $A_{10}$ |
|---|---:|---:|---:|---:|---:|---:|
| 3A | +58.892 mm | 0 | $+9.62849\times10^{-6}$ | inferred $+2.04161\times10^{-9}$ | $-8.99200\times10^{-12}$ | $+1.96290\times10^{-14}$ |

The source line literally prints `C=2.04161D` with no exponent. The $10^{-9}$ exponent is a reconstruction, not a literal
transcription. It is supported by the neighboring Example 1 coefficient, which is printed as
$2.86527\times10^{-9}$, and by dimensional sanity: an exponentless coefficient would produce physically impossible sag.

At the data file's estimated $16.0\ \mathrm{mm}$ semi-diameter, the reconstructed polynomial adds
$+0.648227\ \mathrm{mm}$ to the base-sphere sag. The full local slope is $24.088^\circ$, well below the renderer's rim-angle
limit. The positive departure is consistent with ¶0012's statement that positive refractive action increases toward the
periphery.

## Independent Paraxial Verification

Two independently coded first-order traces were run: one with reduced angle $u=n\theta$ and one with ordinary angle
$\theta$. Their complete-system matrices agree to a maximum absolute difference of $2.84\times10^{-14}$.

For the reduced-angle vector $(y,u)$, refraction and translation are

$$
S=\begin{bmatrix}1&0\\-(n'-n)/R&1\end{bmatrix},\qquad
T=\begin{bmatrix}1&d/n\\0&1\end{bmatrix}.
$$

The infinity-focus matrix through surface 25 is

$$
M=\begin{bmatrix}
2.726928974 & 85.5934239\\
-0.0704163158 & -1.84352934
\end{bmatrix},
$$

with determinant 1.000000 to numerical precision. In air, $\mathrm{EFL}=-1/C$ and
$\mathrm{BFD}=-A/C$.

| Quantity | Patent value | Independent value | Difference |
|---|---:|---:|---:|
| Complete EFL at infinity | 14.2 mm | 14.201254 mm | +0.001254 mm |
| Group I focal length | −26.0 mm | −26.001835 mm | −0.001835 mm |
| Group II focal length | +30.16499 mm | +30.161313 mm | −0.003677 mm |
| BFD from surface 25 | not tabulated | 38.725812 mm | computed |
| Surface 1–25 vertex span | not tabulated | 89.630000 mm | computed |
| Surface 1 to image plane | not tabulated | 128.355812 mm | computed |
| Image diameter at $w=56.72^\circ$ | not tabulated | 43.271596 mm | computed |

Selected assembly focal lengths are:

| Assembly | Surfaces | In-situ focal length |
|---|---|---:|
| L1–L4 front menisci | 1–8 | −16.373646 mm |
| J1 | 9–11 | +103.649747 mm |
| Group II before stop | 12–16 | +81.961274 mm |
| Group II after stop | 18–25 | +33.584000 mm |
| J2 | 12–14 | +23.277637 mm |
| J3 | 18–20 | −241.240975 mm |
| J4 | 21–23 | +104.596397 mm |

These are assembly values in their stated media and separations. They are not sums of the standalone element powers.

## Conditional Expressions

Claim 1 and ¶0009 give two conditions:

$$
1.62<\frac{|f_1|}{f}<2.5,
$$

$$
0.78<\frac{|f_1|}{f_2}<2.38.
$$

Using the independently traced values:

| Condition | Patent Example 2 value | Independent value | Result |
|---|---:|---:|---|
| $|f_1|/f$ | 1.83 | 1.830953 | Satisfies the stated range |
| $|f_1|/f_2$ | 0.86 | 0.862092 | Satisfies the stated range |

Paragraphs 0018–0021 explain the bounds. Excessively strong negative Group I power increases focus travel, mechanical
interference, aberration variation, back focus, and the positive power demanded of Group II. Excessively weak Group I
power fails to preserve the required retrofocus back focus. The second ratio prevents Group II from becoming either too
weak and physically large or too strong to correct while maintaining back focus.

## Surface-by-Surface Petzval Sum

The Petzval sum was evaluated at every refracting surface rather than with an element-level thin-lens approximation:

$$
P=\sum_i\frac{\phi_i}{n_i n'_i},\qquad \phi_i=\frac{n'_i-n_i}{R_i}.
$$

The result is

$$
P=+0.008467314\ \mathrm{mm}^{-1},
$$

with reciprocal $+118.101209\ \mathrm{mm}$. The sign follows the stated object-to-image radius convention. This is a
paraxial scalar and is not substituted for the patent's finite-ray astigmatic field curves.

| Surface | Contribution ($\mathrm{mm}^{-1}$) | Surface | Contribution ($\mathrm{mm}^{-1}$) | Surface | Contribution ($\mathrm{mm}^{-1}$) |
|---:|---:|---:|---:|---:|---:|
| 1 | +0.009286853 | 10 | −0.002388699 | 19 | −0.000725542 |
| 2 | −0.015799298 | 11 | +0.007832973 | 20 | −0.005504388 |
| 3A | +0.006388176 | 12 | +0.006294661 | 21 | −0.002785417 |
| 4 | −0.007170323 | 13 | −0.006968290 | 22 | −0.004750032 |
| 5 | +0.011193484 | 14 | +0.030379556 | 23 | +0.017813163 |
| 6 | −0.023088685 | 15 | −0.029074390 | 24 | +0.001335984 |
| 7 | +0.009026097 | 16 | +0.010184019 | 25 | +0.011736353 |
| 8 | −0.021076753 | STO | 0 | — | — |
| 9 | +0.001999549 | 18 | +0.004328261 | — | — |

## Semi-Diameter and Data-File Implementation

The patent does not publish clear semi-diameters. The paired data file therefore uses renderer-oriented estimates rather
than presenting them as patent or production dimensions. The estimate combines:

- exact on-axis rays reaching the full design stop radius;
- exact bundles at the viewer's default $0.6\times56.72^\circ=34.032^\circ$ field using pupil samples at −0.75, 0,
  and +0.75 of the stop;
- the relative element proportions in the patent's Fig. 4;
- explicit geometric checks at infinity and the inferred close-focus state.

These values are sufficient for the default LensVisualizer ray display and geometry validation. They do not reconstruct
the full-field physical clear apertures or factory barrel dimensions, which the patent does not provide.

The design stop semi-diameter is $6.149168\ \mathrm{mm}$. It gives a paraxial entrance-pupil semi-diameter of
$2.455265\ \mathrm{mm}$ and therefore the patent design aperture $f/2.892$. The marketed `nominalFno` remains f/2.8 in
accordance with Canon's product specification.

The final estimates pass the following checks:

| Check | Verified result |
|---|---:|
| Default on-axis / 0.6-field displayed rays clipped | 0 / 0 |
| Minimum calculated element edge thickness | 1.664029 mm at L12 |
| Maximum front/rear SD ratio for one element | 1.104000 |
| Maximum positive signed cross-gap intrusion | 62.7980% of the nominal gap |
| Maximum rim slope | 52.065° |
| Maximum renderer trim | 0 mm |

The tightest signed cross-gap check is the 0.69 mm air lens between surfaces 20 and 21. At the common 6.8 mm
semi-diameter its remaining rim gap is $0.256694\ \mathrm{mm}$, so intrusion is 62.7980%, below the 90% project limit.
No cover glass or sensor stack is included.

## Aberration-Correction Strategy

The patent describes the correction as a coordinated architecture rather than a collection of isolated element claims:

- **Distributed front divergence:** five negative menisci spread Group I's power, limiting extreme internal ray angles and
  reducing front-element diameter (¶0011).
- **J1 spherical balance:** the cemented L5–L6 pair addresses lower-, zonal-, and higher-order spherical aberration where
  axial-ray height is greatest in Group I (¶0011).
- **Distortion asphere:** surface 3A increases positive action with height to correct extreme negative distortion while
  limiting spherical-aberration impact (¶0012).
- **Pre-stop negative menisci:** J2's negative component and L9 jointly correct spherical aberration, coma, and
  astigmatism (¶0014).
- **Post-stop pairs and air lens:** J3, J4, and the curved air space between them coordinate spherical, coma, astigmatic,
  axial-color, lateral-color, and sagittal-flare correction (¶0014).
- **Final positive element:** L14 distributes rear positive power and reduces spherical undercorrection (¶0015).
- **Rear-focus stability:** each main group is corrected sufficiently that translating only Group II produces limited
  aberration change (¶0016 and Figs. 5–6).

The finite-ray aberration plots remain the patent's authority for spherical aberration, sine-condition error, astigmatism,
distortion, and lateral color at infinity and 25 cm. The paraxial calculations above verify first-order structure; they do
not replace those plots.

## Sources

1. Japan Patent Office, **JP H05-034592 A**, *コンパクトなリアフォーカス方式の超広角レンズ*, Claims 1–2,
   ¶¶0001–0027, Numerical Examples 1–2, and Figs. 1–6. User-supplied publication scan.
2. Canon Camera Museum, **EF14mm f/2.8L USM**: December 1991 marketing date, 10-group/14-element construction,
   five blades, f/22 minimum aperture, 0.25 m closest focus, 0.10× magnification, and element-2 asphere.
   <https://global.canon/en/c-museum/product/ef306.html>
3. Canon Camera Museum, **EF14mm f/2.8L II USM**: September 2007 redesign, 11 groups/14 elements, two glass-molded
   aspheres, and two UD elements. <https://global.canon/en/c-museum/product/ef395.html>
4. OHARA Corporation, **Optical Glass Pocket Catalog**, current-catalog $n_d$, $\nu_d$, $n_C$, $n_F$, and $n_g$ values
   for S-LAL14, S-BSM14, S-LAH66, S-TIM8, S-TIL26, S-LAM60, S-FSL5, and S-LAH65V.
   <https://oharacorp.com/wp-content/uploads/2023/06/ohara-pocket-catalog-2023-05.pdf>
5. OHARA Zemax catalog 2017-11-30, **PBH71** dispersion coefficients and code 923213, mirrored by
   refractiveindex.info. <https://refractiveindex.info/?shelf=specs&book=OHARA-optical&page=PBH71>
