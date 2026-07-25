# Fujifilm Fujinon GF35–70mm F4.5–5.6 WR

**Patent:** US 2022/0236544 A1  
**Application Number:** 17/580,109  
**Filed:** January 20, 2022  
**Published:** July 28, 2022  
**Priority:** JP 2021-008222 (January 21, 2021); JP 2021-182842 (November 9, 2021); JP 2021-200320 (December 9, 2021)  
**Inventor:** Ryosuke Nagami  
**Assignee:** FUJIFILM Corporation, Tokyo  
**Title:** Zoom Lens and Imaging Apparatus  
**Classification:** G02B 15/14, G02B 15/177, G02B 13/18  
**Embodiment analyzed:** Example 1, Tables 1–3; conditional-expression values from Table 31

## Patent Reference and Design Identification

The prescription transcribes **Example 1** of US 2022/0236544 A1. The patent describes a compact zoom lens consisting, in order from object side to image side, of a first negative lens group, a middle group, and a final group. In Example 1 the middle group is divided into a positive second group G2 and a negative third group G3, and the final group is a stationary positive fourth group G4. During focusing, the focus group is the whole third group G3; G1, G2, and G4 remain fixed relative to the image plane (¶0066–¶0074, ¶0136–¶0138).

The production match is the Fujifilm GF35–70mmF4.5–5.6 WR. The identification rests on these convergent checks.

1. **Element and group count.** Example 1 has eleven elements in nine air-separated groups: L11, L12, the cemented L13–L14 doublet, L21, L22, the cemented L23–L24 doublet, L31, L32, and L41. Fujifilm publishes the GF35–70mmF4.5–5.6 WR as 11 elements in 9 groups.
2. **Special-element count.** Example 1 has one aspherical element, L22, with aspherical surfaces 11 and 12, and two ED-class elements, L21 and L24, both with $n_d = 1.49700$ and $\nu_d = 81.61$. Fujifilm publishes the production lens as including one aspherical element and two ED elements.
3. **Focal-length range.** Table 2 gives $f = 36.046 / 49.434 / 67.893$ mm at the wide, middle, and telephoto design positions. This maps directly to the marketed 35–70 mm class; the production specification is the hard external specification, while the patent values are the paraxial design values.
4. **Aperture.** Table 2 gives $FNo. = 4.62 / 4.78 / 5.76$. This is consistent with the marketed F4.5–5.6 variable maximum aperture once commercial rounding is applied.
5. **Field.** Table 2 gives full field values of $2\omega = 77.8° / 58.4° / 43.8°$. Fujifilm publishes 76°–42.7° for the production lens, which is close after allowing for commercial specification rounding and effective image-circle conventions.
6. **Focus and stabilization.** Example 1 uses G3 as an inner-focus group and does not include an optical image-stabilization group. Fujifilm lists no lens OIS for this production lens and relies on GFX in-body stabilization where available.
7. **Timing.** The earliest priority date is January 21, 2021; Fujifilm announced the production lens in September 2021. That filing-to-product interval is consistent with a production-intent optical formula.

No sibling embodiment in the patent matches the same combination. Examples 2, 5, and 6 introduce a five-element first group and a vibration-proof element in G1; Examples 7–10 restructure the zoom into five moving/fixed groups. Those configurations do not match the production GF35–70mmF4.5–5.6 WR.

The patent conventions used in the transcription are explicit. The radius sign is positive for a surface convex toward the object (¶0032–¶0034). Indices are d-line values at 587.56 nm (¶0034). The patent's aspheric equation is

$$
Z_d = \frac{C h^2}{1 + \sqrt{1 - K_A C^2 h^2}} + \sum_m A_m h^m,
$$

where Example 1 includes both even and odd polynomial orders. Because the denominator lacks the standard $(1+K)$ multiplier, the tabulated $K_A = 1.0000000$ corresponds to a spherical base curve in the renderer's convention, i.e. standard $K = 0$.

## Optical Architecture

Example 1 is a **negative-lead four-group zoom**, not a strict retrofocus lens in the narrow back-focus sense. Its first group is negative and it uses inverted-telephoto wide-angle logic to place the entrance pupil toward the object side, but its wide-angle air-equivalent back focal length is 22.090 mm against a 36.046 mm paraxial focal length; $B_f/f = 0.613$, so $B_f$ is not longer than the focal length.

The group power sequence is:

| Group | Patent role | Power | Independently computed focal length |
|---|---:|---:|---:|
| G1 | First lens group | Negative | −54.339 mm |
| G2 / GMf | Middle front subgroup | Positive | +28.743 mm |
| G3 / GMr | Middle rear subgroup / focus group | Negative | −35.147 mm |
| G4 / GE | Final group | Positive | +117.283 mm |

G1 sets the wide field and entrance-pupil position. G2 contains the stop, the two ED positives, and the only aspherical element; it is the main aberration-correction group. G3 is a compact negative inner-focus group. G4 is a single stationary positive element that moderates the chief-ray incidence angle at the image plane, a recurring concern in the patent's discussion of large-image-circle compact zooms (¶0097, ¶0101, ¶0126–¶0127).

During zooming from wide to telephoto, G1, G2, and G3 move along the axis, while G4 remains stationary relative to the image plane (¶0073, ¶0137). The three variable air spaces are DD[7], DD[15], and DD[19]. DD[7] changes only with zoom. DD[15] and DD[19] change with both zoom and focus because the G3 focus group moves between G2 and G4.

## Element-by-Element Analysis

Standalone element focal lengths below are thick-lens-in-air paraxial values. They are useful for interpreting element sign and bending, but they are not a substitute for the in-situ group powers.

### L11 — Negative Meniscus, convex to object

$n_d = 1.80518$, $\nu_d = 25.46$. Glass: **Hoya FD60 / FD60-W dense flint**. $f = -66.13$ mm.

L11 is the front negative meniscus. Both radii are positive, so the element is convex toward the object and concave toward the image. The high refractive index lets the front negative power be obtained without extremely short radii, while the low Abbe number makes L11 the first group's principal lateral-chromatic contributor. The patent's conditional expression for the refractive index of the negative lens closest to the object side is satisfied by this element (¶0117).

### L12 — Negative Meniscus, convex to object

$n_d = 1.58313$, $\nu_d = 59.46$. Glass: **Hoya M-BACD12 / MC-BACD12 class**. $f = -69.12$ mm.

L12 is the second object-convex negative meniscus. It distributes the first group's negative power, allowing the first surface pair to remain less aggressive than a single stronger front negative would require. This matches the patent preference for two or more object-convex negative meniscus lenses in G1 to suppress wide-end astigmatism (¶0111).

### L13 + L14 — Cemented Front-Group Doublet

The cemented doublet nets $f = +100.84$ mm in air. It is positive as a cemented unit, even though it sits inside the net-negative G1 group.

**L13 — Plano-concave negative.** $n_d = 1.48749$, $\nu_d = 70.39$. Glass: **FC5 / N-FK5 fluorocrown class**. $f = -47.05$ mm. The object-side surface is flat and the cemented image-side surface has a positive radius. This element provides a high-Abbe negative component in the front achromat.

**L14 — Positive meniscus, convex to object.** $n_d = 1.91083$, $\nu_d = 35.26$. Glass: **Hoya TAFD35L / TAFD35 high-index tantalum flint**. $f = +31.57$ mm. L14 is the high-index positive member of the doublet and is the G1 positive lens corresponding to the patent's $N_{1p}$ condition (¶0112). The cemented interface is convex toward the object, as preferred in the patent for chromatic correction in G1 (¶0121).

### L21 — Biconvex Positive ED Element

$n_d = 1.49700$, $\nu_d = 81.61$. Glass: **Hoya FCD1 / S-FPL51-class ED fluorocrown**. $f = +26.70$ mm.

L21 is the first element behind the aperture stop and the strongest single positive element in the system. It is biconvex and carries high marginal-ray height, making it an efficient site for longitudinal-chromatic correction. The patent lists $\theta_{gF} = 0.53887$ for this glass, consistent with the ED/anomalous-dispersion role described by Conditional Expression (18).

### L22 — Biaspheric Negative Meniscus, convex to image

$n_d = 1.58313$, $\nu_d = 59.46$. Glass: **Hoya M-BACD12 / MC-BACD12 moldable crown class**. $f = -51.90$ mm.

L22 is the only aspherical element in Example 1. Both surfaces have negative radii, so it is a negative meniscus convex toward the image side. Its position immediately after the strong positive L21 makes it the principal high-order correction element in the front subgroup GMf. The M-BACD12 designation is consistent with a glass-molded asphere rather than a large polished asphere.

Both aspherical surfaces are transcribed exactly in the data file, including the patent's odd polynomial terms, which the renderer now supports natively. Earlier revisions used even-order least-squares refits with sub-0.024 µm maximum residual while the renderer was even-order only.

### L23 + L24 — Cemented Rear GMf Doublet

The cemented doublet nets $f = +44.88$ mm in air.

**L23 — Biconcave negative.** $n_d = 1.51741$, $\nu_d = 52.16$. Glass: **Hoya E-CF6**. $f = -26.01$ mm. This is the negative achromatizing partner for the rear positive ED member.

**L24 — Symmetric biconvex positive ED element.** $n_d = 1.49700$, $\nu_d = 81.61$. Glass: **Hoya FCD1 / S-FPL51-class ED fluorocrown**. $f = +17.93$ mm. The object and image radii are equal in magnitude and opposite in sign, making L24 a nearly symmetric biconvex element. This is the second ED element in the production match. It places anomalous-dispersion positive power at the rear of GMf, helping correct secondary spectrum before the rays enter the focus group.

### L31 — Negative Meniscus, convex to object

$n_d = 1.67790$, $\nu_d = 55.56$. Glass: **Hoya LAC12 lanthanum crown**. $f = -90.49$ mm.

L31 is the object-side negative lens in the rear subgroup GMr. Both radii are positive, so it is an object-convex negative meniscus. In the patent's terms this is the object-side negative lens whose object-side surface is convex, used to suppress spherical-aberration fluctuation in the rear subgroup (¶0093).

### L32 — Negative Meniscus, convex to image

$n_d = 1.64769$, $\nu_d = 33.84$. Glass: **Hoya E-FD2 flint**. $f = -64.54$ mm.

L32 is the image-side negative lens of GMr. Both radii are negative, so it is a negative meniscus convex toward the image side. The rear surface is the convex air-contacting surface described in the patent's discussion of the off-axis normal-angle condition and chief-ray incidence control (¶0082, ¶0093, ¶0101). Its Abbe number places it firmly in flint territory despite the moderate index.

### L41 — Plano-convex Positive Final Element

$n_d = 1.58144$, $\nu_d = 40.75$. Glass: **581-408 light-flint class, closest public equivalents including CDGM H-QF50A and Ohara S-TIL25**. $f = +117.28$ mm.

L41 is a single stationary final-group element. The object-side surface is flat and the image-side surface has a negative radius, so it is a plano-convex positive lens presented flat-side first. Its role is not to provide strong image-forming power, but to control the chief-ray angle and field behavior at the large 44×33 mm image circle. The exact vendor identity is not asserted: the 581-408 code lies closest to CDGM H-QF50A and Ohara S-TIL25, while Hoya E-FL5 is a nearby 581-409 light-flint reference.

## Glass Identification and Selection

The patent gives refractive index, Abbe number, partial-dispersion ratio, specific gravity, and thermal coefficient, but it does not name the glass vendor. The assignments below are catalog matches by six-digit code and optical family, with Hoya emphasized where the code appears directly in Hoya's cross-reference list.

| Element | $n_d$ | $\nu_d$ | $\theta_{gF}$ | Identification | Confidence | Optical role |
|---|---:|---:|---:|---|---|---|
| L11 | 1.80518 | 25.46 | 0.61572 | Hoya FD60 / FD60-W | High | Dense flint front negative |
| L12 | 1.58313 | 59.46 | 0.54336 | Hoya M-BACD12 / MC-BACD12 class | High | Moderate crown negative |
| L13 | 1.48749 | 70.39 | 0.53005 | FC5 / N-FK5 fluorocrown class | High by code | High-Abbe negative in D1 |
| L14 | 1.91083 | 35.26 | 0.58293 | Hoya TAFD35L / TAFD35 | High | High-index positive in D1 |
| L21 | 1.49700 | 81.61 | 0.53887 | Hoya FCD1 / S-FPL51 class | High | ED positive behind stop |
| L22 | 1.58313 | 59.46 | 0.54056 | Hoya M-BACD12 / MC-BACD12 class | High | Moldable biaspheric negative |
| L23 | 1.51741 | 52.16 | 0.56212 | Hoya E-CF6 | High | Negative partner in D2 |
| L24 | 1.49700 | 81.61 | 0.53887 | Hoya FCD1 / S-FPL51 class | High | ED positive in D2 |
| L31 | 1.67790 | 55.56 | 0.54672 | Hoya LAC12 class | High | Negative focus-group crown |
| L32 | 1.64769 | 33.84 | 0.59227 | Hoya E-FD2 | High | Negative focus-group flint |
| L41 | 1.58144 | 40.75 | 0.57841 | 581-408 light-flint class | Moderate | Final chief-ray corrector |

The chromatic design is a well-corrected achromat with reduced secondary spectrum, not an apochromat. Both ED elements are in G2/GMf, where marginal-ray height is high. L21 works against L22 and the rear doublet; L24 is cemented directly to the E-CF6 negative L23. The patent supplies $\theta_{gF}$ values, but it does not supply enough line-index data to support a stronger apochromatic claim.

## Focus Mechanism

The lens uses inner focus. The whole third group G3, identical to the negative rear subgroup GMr, translates toward the image plane as focus moves from infinity to a nearer object. The first group, second group, and final group remain fixed during focusing (¶0074, ¶0137). This matches the patent's general preference for using a relatively small-diameter part of the middle group as the focus group to reduce focus-unit size (¶0068, ¶0107).

Patent Table 2 gives close-focus spacings for $\beta = -0.1$ at the wide and telephoto ends. These are direct patent values:

| State | DD[15] in front of G3 | DD[19] behind G3 | Sum | G3 shift |
|---|---:|---:|---:|---:|
| Wide, infinity | 1.546 | 7.642 | 9.188 | — |
| Wide, $\beta=-0.1$ | 2.918 | 6.270 | 9.188 | +1.372 mm |
| Tele, infinity | 2.836 | 30.610 | 33.446 | — |
| Tele, $\beta=-0.1$ | 4.242 | 29.205 | 33.447 | +1.406 mm |

The `.data.ts` file uses the official production minimum focus distance of 0.35 m for its close-focus slider state. Because the patent only publishes $\beta=-0.1$ close values at wide and tele, the data-file close state was solved paraxially from object distance measured from the image plane. The resulting telephoto magnification is −0.282×, matching Fujifilm's published 0.28× telephoto maximum magnification closely.

| Data-file state | DD[15] | DD[19] | G3 shift | Paraxial magnification |
|---|---:|---:|---:|---:|
| Wide, 0.35 m | 3.515 | 5.673 | +1.969 mm | −0.142× |
| Middle, 0.35 m | 5.229 | 13.838 | +2.887 mm | −0.196× |
| Tele, 0.35 m | 6.928 | 26.518 | +4.092 mm | −0.282× |

The focus motion conserves the sum DD[15] + DD[19] at each zoom position, as expected for a rigid G3 group translating between fixed neighbors.

## Aspherical Surfaces

The patent marks surfaces 11 and 12, the two faces of L22, as aspherical. The patent coefficients are:

| Coefficient | Surface 11 | Surface 12 |
|---|---:|---:|
| $K_A$ | 1.0000000E+00 | 1.0000000E+00 |
| $A_3$ | 0.0000000E+00 | 0.0000000E+00 |
| $A_4$ | 1.9333299E−04 | 2.0939860E−04 |
| $A_5$ | −3.2634652E−06 | −2.7452878E−06 |
| $A_6$ | −1.3836702E−07 | −1.1927223E−07 |
| $A_7$ | 3.1412740E−08 | 2.9002318E−08 |
| $A_8$ | −1.7877300E−08 | −1.1774910E−08 |
| $A_9$ | 1.6054978E−09 | 6.5535125E−10 |
| $A_{10}$ | −2.4959670E−11 | 1.0444752E−11 |

In renderer convention, $K = 0$ for both surfaces. The polynomial is the correction. The positive $A_4$ terms steepen the peripheral sag relative to the spherical base, while the higher-order alternating terms keep the departure from running away at the adopted clear apertures.

The data file now transcribes the odd-order patent polynomial directly. Earlier revisions, when the renderer supported even-order aspheres only, used even-order least-squares refits over the adopted render semi-diameters: 9.6 mm for surface 11A and 9.8 mm for surface 12A.

| Surface | Adopted SD | Maximum refit residual | RMS residual | Patent edge departure | Refit edge departure |
|---|---:|---:|---:|---:|---:|
| 11A | 9.6 mm | 0.022 µm | 0.007 µm | 1159.987 µm | 1159.965 µm |
| 12A | 9.8 mm | 0.024 µm | 0.008 µm | 1459.367 µm | 1459.343 µm |

Those refit residuals were below any meaningful rendering scale; the table is retained as a record of the retired approximation and of the patent edge departures used to verify the exact transcription.

## Air Lenses and Ray-Angle Control

Two air lenses are structurally significant. First, the rear surface of L24 and the front surface of L31 form a biconcave air lens between GMf and GMr. The patent explicitly notes this configuration as advantageous for reducing the rear-subgroup diameter (¶0103). Second, the two negative menisci in G3 face each other with concave surfaces across the long internal G3 spacing. This keeps the focus group negative while allowing the rear surface of L32 to act on chief-ray height before G4.

The final positive L41 is weak in power but important in angle management. It is the only element after the moving middle group. Holding it stationary during zoom and focus reduces lateral-chromatic fluctuation and helps maintain the off-axis incidence geometry at the image plane (¶0126–¶0127).

## Conditional Expressions

Independent paraxial calculations reproduce the patent's key conditional-expression values for Example 1. Representative checks:

| Expression | Quantity | Computed value | Patent Table 31 value |
|---|---|---:|---:|
| (1) | $B_{fw}/(f_w \tan |\omega_w|)$ | 0.750 | 0.750 |
| (10) | $(R_{1f}+R_{1r})/(R_{1f}-R_{1r})$ | 2.521 | 2.521 |
| (11) | $N_{1p}$ | 1.91083 | 1.911 |
| (12) | $f_w/|f_1|$ | 0.663 | 0.663 |
| (13) | $f_w/f_{Mw}$ | 0.929 | 0.929 |
| (14) | $f_w/|f_{foc}|$ | 1.026 | 1.026 |
| (22) | $(R_{nor}+R_{nif})/(R_{nor}-R_{nif})$ | 0.049 | 0.049 |
| (27) | $f_w/f_E$ | 0.307 | 0.307 |
| (28) | $f_t/f_w$ | 1.884 | 1.884 |
| (30) | $\omega_w$ | 38.9° | 38.9° |

The Petzval sum was recomputed by the surface formula $\sum \phi/(n n')$, not by thin-lens element approximation. The result is $+8.4031 \times 10^{-4}\ \mathrm{mm}^{-1}$, corresponding to a Petzval radius of approximately 1190 mm. This is shallow relative to the 44×33 mm image circle, but not zero; final field flattening is achieved by the balance of G2, G3, and the weak positive final element rather than by a flat Petzval sum alone.

## Verification Summary

The corrected transcription reproduces the patent's paraxial focal lengths and back focal distance when the sensor cover plate is folded into the air-equivalent BFD and excluded from the data-file surface list.

| Zoom state | Patent EFL | Computed EFL | Patent Bf | Computed BFD |
|---|---:|---:|---:|---:|
| Wide | 36.046 mm | 36.04612 mm | 22.090 mm | 22.09037 mm |
| Middle | 49.434 mm | 49.43341 mm | 22.090 mm | 22.09031 mm |
| Tele | 67.893 mm | 67.89373 mm | 22.090 mm | 22.08946 mm |

The principal corrections relative to the earlier draft are analytical, not cosmetic: the design is no longer called a strict retrofocus lens; glass names have been tightened to code-matched catalog classes; L41 is treated as a 581-408 light-flint class rather than an asserted exact Hoya glass; and the aspherical surfaces are transcribed exactly, including the patent's odd-order polynomial terms.

## Sources

- US 2022/0236544 A1, “Zoom Lens and Imaging Apparatus,” FUJIFILM Corporation, Example 1, Tables 1–3 and Table 31.
- Fujifilm official GF35–70mmF4.5–5.6 WR specifications: https://www.fujifilm-x.com/en-gb/products/lenses/gf35-70mmf45-56-wr/specifications/
- Hoya Optical Glass Cross Reference Index: https://www.hoya-opticalworld.com/english/products/crossreference.html
- Hoya designation notes for molded optical glasses: https://www.hoya-opticalworld.com/english/technical/001.html
