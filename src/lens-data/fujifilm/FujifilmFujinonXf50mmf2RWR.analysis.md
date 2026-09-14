## Patent Reference and Design Identification

**Patent:** US 10,168,507 B2\
**Filed:** September 28, 2017\
**Priority:** October 4, 2016 (JP 2016-196360)\
**Granted:** January 1, 2019\
**Inventors:** Ryosuke Nagami; Tetsuya Ori\
**Assignee:** FUJIFILM Corporation\
**Title:** *Imaging Lens and Imaging Apparatus*\
**Embodiment analyzed:** Example 4

The prescription implemented here is Example 4 of US 10,168,507 B2. The patent does not name the commercial FUJINON
XF50mmF2 R WR, so the product identification is an inference rather than a manufacturer-confirmed patent attribution.
The correlation is nevertheless strong for several independent reasons. The patent example has nine elements in seven
air-separated groups, exactly matching FUJIFILM's published product configuration; it contains one dual-asphere,
very-low-dispersion element, while FUJIFILM describes one aspherical ED element; the patent's infinity state is
$f=48.52\ \mathrm{mm}$, FNo. 2.06, and $2\omega=32.2^\circ$, close to the marketed 50 mm, f/2, 31.7° lens; both use
inner focusing; and the 2016 priority date immediately precedes the lens's 2017 release period. The production lens is a
FUJIFILM X-mount APS-C prime. [US 10,168,507 B2, Fig. 4 and Tables 10–12; FUJIFILM XF50mmF2 R WR specifications]

The implemented model keeps marketing and design quantities separate. The marketed focal length and maximum aperture are
50 mm and f/2, while the verified infinity-state design EFL is 48.5190537 mm and the patent design aperture is FNo. 2.06.
No focal-length scaling has been applied.

## Optical Architecture

Example 4 is a positive-negative-positive three-group inner-focus lens. G1 is positive, G2 is negative, and G3 is
positive. The first group is subdivided into a front subgroup G1a, the aperture stop, and a rear subgroup G1b. G1a
contains L11, L12, and L13; G1b contains L14, L15, and L16; G2 is the single negative focusing element L21; and G3 is
the cemented L31+L32 pair. L15+L16 form the other cemented pair. [US 10,168,507 B2, Fig. 4; pp. 5–10; Table 10]

The verified infinity-state group focal lengths are approximately +37.610 mm for G1, +166.100 mm for G1a, +33.351 mm
for G1b, -39.248 mm for G2, and +48.628 mm for G3. The complete system EFL is 48.519 mm. These values describe paraxial
group behavior in the implemented prescription; they are not interchangeable with the standalone focal lengths of the
individual elements listed below.

The architecture deliberately confines focus movement to one lens. The patent states that G1 and G3 remain fixed with
respect to the image plane while only G2 moves toward the image side as focus is brought nearer. The resulting moving mass
is therefore optically simple even though the fixed groups contain most of the correction structure. [US 10,168,507 B2,
pp. 5–10]

Under the project's explicit classification rules, this model is neither telephoto nor retrofocus: the normalized total
track divided by EFL is 1.4864, while BFD divided by EFL is 0.4794. Those ratios are descriptive project metrics, not a
historical design-family label.

The patent places a plane-parallel optical member PP behind the powered lens. It consists of 20.28 mm of air, 2.85 mm of
glass at $n_d=1.51742$, and 1.10 mm of air to the image plane. Because the project excludes sensor-cover/filter plates,
the plate is omitted from the sequential model and replaced by a first-order air-equivalent rear translation of
23.25818798 mm. The raw plate path and normalized air path were verified to have the same reduced-angle ABCD translation
to numerical precision. [US 10,168,507 B2, Table 10; p. 5]

## Element-by-Element Analysis

### L11 — Biconvex Positive

$n_d=1.74400$, $\nu_d=44.9$. Glass: 744449/744448 LAF2/LAM2 class (supplier unspecified). Standalone
$f_{\mathrm{air}}=+46.70\ \mathrm{mm}$.

L11 is the leading positive element of G1a. Its position and positive power are source facts; no specific aberration is
assigned to L11 alone because the patent discusses the first group primarily as a coordinated subsystem rather than as a
set of independently optimized lenses. [US 10,168,507 B2, Fig. 4; Table 10]

### L12 — Positive Meniscus

$n_d=1.74400$, $\nu_d=44.9$. Glass: 744449/744448 LAF2/LAM2 class (supplier unspecified). Standalone
$f_{\mathrm{air}}=+71.92\ \mathrm{mm}$.

L12 is the second positive element in G1a and uses the same patent index/Abbe coordinate as L11. The patent specifically
requires two positive lenses followed by a negative lens in the front part of G1; L12 is the second member of that
sequence. [US 10,168,507 B2, claim 1; Table 10]

### L13 — Plano-Concave Negative

$n_d=1.63980$, $\nu_d=34.5$. Glass: 640345 S-TIM27 class (supplier unspecified). Standalone
$f_{\mathrm{air}}=-26.50\ \mathrm{mm}$.

L13 completes G1a immediately ahead of the stop. The patent describes the negative member following the two front positive
lenses as part of the first group's chromatic- and spherical-aberration balancing strategy, but the implemented analysis
does not attribute a measured aberration contribution to L13 in isolation. [US 10,168,507 B2, pp. 5–8]

### L14 — Dual-Asphere Positive

$n_d=1.49710$, $\nu_d=81.6$. Glass: 497816 low-dispersion / ED class (supplier unspecified). Standalone
$f_{\mathrm{air}}=+51.36\ \mathrm{mm}$.

L14 is the first powered element behind the aperture stop and is the only element with two aspherical surfaces, source
surfaces 8 and 9. Its very high Abbe number is consistent with the low-dispersion family represented by HOYA M-FCD1 and
SCHOTT N-PK52A coordinates. This catalog compatibility supports, but does not prove, the correlation with FUJIFILM's
statement that the production lens contains one aspherical ED element. [US 10,168,507 B2, Tables 10 and 12; FUJIFILM
XF50mmF2 R WR specifications]

### L15 — Biconcave Negative, front member of D1

$n_d=1.68893$, $\nu_d=31.2$. Glass: 689312 dense-flint class (supplier unspecified). Standalone
$f_{\mathrm{air}}=-14.26\ \mathrm{mm}$.

L15 begins the cemented L15+L16 pair in G1b. Its negative power and lower Abbe number are paired with a positive,
higher-index second member. The patent identifies a negative-positive cemented pair in the rear part of G1 as favorable
for chromatic correction, but that statement applies to the cemented subsystem rather than proving a separable L15-only
aberration contribution. [US 10,168,507 B2, pp. 5–8]

### L16 — Biconvex Positive, rear member of D1

$n_d=1.88300$, $\nu_d=39.2$. Glass: H-ZLaF68N class (supplier unspecified). Standalone
$f_{\mathrm{air}}=+13.57\ \mathrm{mm}$.

L16 is cemented directly to L15. The common interface is correctly assigned to the downstream L16 medium in the model.
Although the two isolated elements have strong opposite powers, the cemented pair has a much weaker positive net focal
length of +72.73 mm. This distinction is important: the pair's in-situ behavior is not described by either isolated
standalone focal length. [US 10,168,507 B2, Fig. 4; Table 10]

### L21 — Negative Meniscus, G2 focus element

$n_d=1.48749$, $\nu_d=70.2$. Glass: S-FSL5 coordinate-compatible proxy fluor-crown class (supplier unspecified). Standalone and group
$f=-39.25\ \mathrm{mm}$.

L21 is the entire second group and the sole moving optical element during focus. Its refractive power reproduces the
patent's $f_2=-39.25\ \mathrm{mm}$ value to the stated table precision. The relatively high Abbe number is also one of
the explicit patent conditions: $50<\nu_{G2}<75$. [US 10,168,507 B2, Tables 10 and 13]

### L31 — Biconcave Negative, front member of D2

$n_d=1.54072$, $\nu_d=47.2$. Glass: 541472 QF8/FEL2/TIL2/LLF2 class (supplier unspecified). Standalone
$f_{\mathrm{air}}=-38.97\ \mathrm{mm}$.

L31 is the negative member of the cemented third group. The patent describes the negative-positive cemented G3 form as
advantageous for lateral chromatic aberration and field curvature while retaining a compact two-element third group.
That is a patent-level design rationale for the pair, not a measured standalone performance claim for L31. [US
10,168,507 B2, pp. 8–10]

### L32 — Biconvex Positive, rear member of D2

$n_d=1.72916$, $\nu_d=54.7$. Glass: 729547/729545 LaK/LAL class (supplier unspecified). Standalone
$f_{\mathrm{air}}=+22.38\ \mathrm{mm}$.

L32 completes G3 and is cemented to L31 at source surface 16. The cemented pair has a verified net focal length of
+48.63 mm, essentially the value printed for $f_3$ in Table 13. As with D1, the pair's net power is the relevant group
quantity; the isolated L31 and L32 focal lengths are reported only as standalone element descriptors.

## Glass Identification and Selection

The patent publishes only d-line refractive index and Abbe number for each element. The implemented file therefore keeps
the patent coordinates and uses supplier-unspecified class labels. Authoritative OHARA, HOYA, SCHOTT, HIKARI, CDGM, and
SUMITA catalog rows were compared against the eight distinct patent coordinates, but a coordinate match is not evidence
of the production supplier or melt.

| Elements | Patent $n_d$ / $\nu_d$ | Defensible class label in data | Strong catalog-coordinate examples |
|---|---:|---|---|
| L11, L12 | 1.74400 / 44.9 | 744449/744448 LAF2/LAM2 class | SCHOTT N-LAF2; HIKARI J-LAF2; OHARA S-LAM2 |
| L13 | 1.63980 / 34.5 | 640345 S-TIM27 class | OHARA S-TIM27 |
| L14 | 1.49710 / 81.6 | 497816 low-dispersion/ED class | HOYA M-FCD1; SCHOTT N-PK52A |
| L15 | 1.68893 / 31.2 | 689312 dense-flint class | CDGM H-ZF10; OHARA S-TIM28 family |
| L16 | 1.88300 / 39.2 | H-ZLaF68N class | CDGM H-ZLaF68N |
| L21 | 1.48749 / 70.2 | S-FSL5 coordinate-compatible proxy fluor-crown class | OHARA S-FSL5; SUMITA K-FK5 is more distant in $\nu_d$ |
| L31 | 1.54072 / 47.2 | 541472 QF8/FEL2/TIL2/LLF2 class | CDGM H-QF8 |
| L32 | 1.72916 / 54.7 | 729547/729545 LaK/LAL class | CDGM H-LaK52; SCHOTT N-LAK34 family |

The data file intentionally does not copy candidate-catalog $n_C$, $n_F$, $n_g$, or partial-dispersion values onto the
elements. Those catalog values belong to possible equivalents, not to a source-identified production glass. Consequently,
this analysis makes no APO or anomalous-partial-dispersion performance claim. The chromatic discussion is limited to
patent d-line/Abbe relationships and to the manufacturer's identification of one aspherical ED element.

## Focus Mechanism

The patent uses inner focusing with only G2/L21 moving. G1 and G3 stay fixed relative to the image plane, and G2 moves
imageward as the object distance decreases. Table 11 publishes two spacing states: infinity and 1 m. Their adjacent focus
gaps always sum to 11.53 mm, so the published 1 m state corresponds to 1.71 mm of G2 imageward travel from infinity.
[US 10,168,507 B2, p. 5; Table 11]

| Focus state | Status | DD[12] (mm) | DD[14] (mm) | Verified EFL (mm) |
|---|---|---:|---:|---:|
| Infinity | Patent-published | 1.80 | 9.73 | 48.5191 |
| 1 m | Patent-published | 3.51 | 8.02 | 47.7877 |
| 0.39 m | Constrained reconstruction | 7.46457 | 4.06543 | 45.5220 |

FUJIFILM specifies a 0.39 m minimum focus distance measured from the imaging-sensor plane for the production lens. The
patent does not publish a 0.39 m spacing row, so the close endpoint in the model is a **CONSTRAINED_RECONSTRUCTION**, not
a patent transcription. With only one mechanical degree of freedom and the invariant 11.53 mm gap sum, the final-model
solver finds one admissible root: 5.66457 mm of G2 travel from infinity, giving the two close-focus gaps shown above.

The 1 m row is retained as an authored keyframe rather than being replaced by interpolation. Its normalized UI coordinate
is 0.39 because the project maps the source distance labels by $0.39/1.0$; this does not assert that the patent's “1 m”
datum is mechanically identical to FUJIFILM's sensor-plane distance convention. The patent's rounded prescription was
separately found to conjugate at approximately 1002.25 mm from the first-surface datum, which is consistent with the
published 1 m label without resolving that datum ambiguity.

FUJIFILM describes the commercial lens as using inner focusing with a lightweight focusing element driven by a stepping
motor. That mechanical statement is manufacturer information; the optical spacing law in the data file remains the
patent-plus-constraint model described above. [FUJIFILM XF50mmF2 R WR overview and specifications]

## Aspherical Surfaces

The two aspheres are the front and rear surfaces of L14, source surfaces 8 and 9, labeled `8A` and `9A` in the data file.
The patent uses

$$
Z_d=\frac{C h^2}{1+\sqrt{1-K_A C^2 h^2}}+\sum_{m=3}^{20} A_m h^m.
$$

LensVisualizer uses the standard conic form with $(1+K)$ under the radical, so the exact conversion is
$K=K_A-1$. Example 4 gives $K_A=1$ on both surfaces, hence the implemented conic constant is $K=0$ for both. No scale
conversion is required because the prescription is used at $s=1$. [US 10,168,507 B2, p. 12; Table 12]

Table 12 publishes coefficients through order 20 and includes nonzero odd radial powers. A3 is exactly zero on both
surfaces and is omitted from the authored object, while every nonzero supported coefficient from A4 through A20 is
retained:

| Order | 8A | 9A |
|---:|---:|---:|
| A4 | 3.8301909e-5 | 6.0101264e-5 |
| A5 | -3.6448618e-5 | -3.5495717e-5 |
| A6 | 1.0493217e-5 | 1.1205354e-5 |
| A7 | -1.0237599e-6 | -1.4431655e-6 |
| A8 | -6.0224440e-8 | 1.6798482e-9 |
| A9 | 9.1608206e-9 | 1.1491915e-8 |
| A10 | 1.1092113e-9 | 4.6018690e-10 |
| A11 | 4.8097099e-12 | -6.2653422e-11 |
| A12 | -1.3618641e-11 | -1.1066471e-11 |
| A13 | -1.2798017e-12 | -2.7818743e-13 |
| A14 | -5.1088995e-14 | 3.6535628e-14 |
| A15 | 1.5255626e-14 | 1.3125767e-14 |
| A16 | 2.1919837e-15 | 2.0008474e-16 |
| A17 | 9.4267473e-17 | 1.3360421e-17 |
| A18 | -1.5217809e-17 | -8.9014757e-18 |
| A19 | -4.1178124e-18 | -1.0615509e-18 |
| A20 | 2.9826588e-19 | 9.9600882e-20 |

At the modeled clear semi-diameters, the verified polynomial departure from the K=0 conic base is +0.1290 mm at 8A
($h=9.70$ mm) and +0.4138 mm at 9A ($h=9.65$ mm). Thus the rear asphere carries the larger modeled-rim departure. These
numbers are model-geometry results, not patent-published edge departures, because Example 4 does not publish clear
semi-diameters. No specific manufacturing process for the aspherical element is asserted here.

## Chromatic Correction Strategy

The patent distributes dispersion contrast across more than one subsystem. In G1b, the L15+L16 cemented pair combines
$\nu_d=31.2$ and 39.2; in G3, L31+L32 combine 47.2 and 54.7; and the moving negative G2 uses a much higher
$\nu_d=70.2$. The patent makes these relationships explicit through Conditions (3), (4), and (7), which constrain the
Abbe-number differences in the fixed cemented pairs and the Abbe number of the focus lens. [US 10,168,507 B2, pp. 3–10]

L14's $n_d/\nu_d=1.49710/81.6$ coordinate falls in a low-dispersion class and is the strongest optical-coordinate link
to FUJIFILM's “aspherical ED” product specification. Even so, neither the patent nor the implemented data establishes a
supplier-specific ED melt or enough production spectral data to support an apochromatic-performance claim.

## Conditional Expressions

The patent evaluates seven design conditions for Example 4 in Table 13. Recalculation from the source prescription
reproduces the focal-length-based conditions closely and preserves two small Abbe-number discrepancies caused by the
one-decimal component $\nu_d$ values printed in Table 10.

| Condition | Patent bound | Recalculated | Table 13 Example 4 |
|---|---|---:|---:|
| (1) $|f/f_2|$ | $0.4<x<1.3$ | 1.236208 | 1.24 |
| (2) $|(1-\beta_2^2)\beta_3^2|$ | $0.4<x<1.8$ | 1.405623 | 1.41 |
| (3) $\nu_{G1bp}-\nu_{G1bn}$ | $5<x<70$ | 8.00 | 8.07 |
| (4) $\nu_{G2}$ | $50<x<75$ | 70.20 | 70.20 |
| (5) $f/f_{1b}$ | $1<x<2$ | 1.454796 | 1.45 |
| (6) $f/f_3$ | $0.1<x<2$ | 0.997761 | 1.00 |
| (7) $\nu_{G3p}-\nu_{G3n}$ | $-10<x<50$ | 7.50 | 7.45 |

Conditions (3) and (7) are intentionally not “corrected” to the printed Table 13 values. Table 10 rounds the individual
Abbe numbers to one decimal, so its visible values give exactly 8.00 and 7.50; Table 13 evidently used higher-precision
values that are not printed in the US grant. Both recalculated values remain safely inside the stated patent bounds.
[US 10,168,507 B2, Tables 10 and 13]

## Verification Summary

The final authored prescription reproduces the patent's infinity EFL as 48.5190537 mm against 48.52 mm and the 1 m EFL
as 47.7877257 mm against 47.79 mm. The infinity back focal distance from source surface 17 is 23.2602392 mm, within
0.0021 mm of the normalized 23.2581880 mm image-plane spacing. Surface-by-surface Petzval summation using
$\phi/(n n')$ gives +0.003671389669 mm$^{-1}$, corresponding to the project's reported radius convention of
-272.3764 mm.

The aperture-stop axial plane is source-published, but its diameter is not. The modeled stop semi-diameter of
8.7876991 mm is therefore calibrated to the patent's infinity FNo. 2.06 using the computed entrance-pupil scale. Agreement
with FNo. 2.06 is a calibration constraint, not independent evidence of the physical production diaphragm diameter.

Clear semi-diameters are likewise absent from Example 4. The data file uses modeled values derived from exact meridional
ray envelopes across five focus states. The portable construction check traced 60 rays, verified positive sampled-ray
clearance outside the intentionally filled stop, and separately checked element edge thickness, actual rim slope, conic
domain, and shared-band air-gap intrusion. Those semi-diameters are model geometry and must not be read as patent or
production clear-aperture dimensions.

The model contains 17 sequential surfaces because the rear PP plate is excluded, not because the source prescription has
only 17 surfaces. The evidence record retains the original source surfaces 1–19 and the plate parameters. This distinction
keeps the patent transcription separate from the project normalization.

## Sources and References

- Nagami, Ryosuke, and Tetsuya Ori. **US 10,168,507 B2, _Imaging Lens and Imaging Apparatus_**. FUJIFILM Corporation,
  granted January 1, 2019. Example 4: Fig. 4; Tables 10–13; asphere equation on patent p. 12. Primary prescription source.
- FUJIFILM. **FUJINON XF50mmF2 R WR — Specifications.**
  https://www.fujifilm-x.com/ja-jp/products/lenses/xf50mmf2-r-wr/specifications/ — product focal length, aperture,
  9-element/7-group configuration, one aspherical ED element, 31.7° angle of view, 0.39 m minimum focus, and 0.15x
  maximum magnification.
- FUJIFILM. **FUJINON XF50mmF2 R WR — Product Overview.**
  https://www.fujifilm-x.com/ja-jp/products/lenses/xf50mmf2-r-wr/ — inner-focus and stepping-motor product description.
- FUJIFILM. **X Series product/system materials.** https://www.fujifilm-x.com/en-us/products/x-series/ — X-series lens
  family context; the project taxonomy records this lens as `fujifilm-x` / `aps-c`.
- OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA optical-glass catalogs, as retained in the dossier evidence, were used
  only for coordinate-equivalence checks. The implemented glass labels remain supplier-unspecified classes rather than
  claims about production melts.
