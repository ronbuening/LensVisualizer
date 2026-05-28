# Sony E 35mm F1.8 OSS — Optical Design Analysis

## 1. Patent Reference and Design Identification

**Patent:** JP 2014-89352 A (公開特許公報 / Kōkai Tokkyo Kōhō, laid-open publication)  
**Application Number:** 特願2012-239551 (P2012-239551)  
**Filed:** 30 October 2012  
**Published:** 15 May 2014  
**Inventor:** Sakai Takahiko (坂井 隆彦)  
**Applicant:** Tamron Co., Ltd. (株式会社タムロン)  
**Title:** インナーフォーカス式レンズ ("Inner-Focus-Type Lens")  
**Embodiment analyzed:** Example 1 (実施例1, ¶0050-0066)

JP 2014-89352 A describes a compact positive-negative-positive inner-focus standard lens intended for still and video cameras. Example 1 is the closest match to the production Sony E 35mm F1.8 OSS (SEL35F18). The identification rests on convergent numerical and architectural evidence rather than on an explicit Sony product name in the patent.

1. **Format and field:** Example 1 gives image height $Y = 14.20$ mm and full field $2\omega = 44.664^\circ$ (¶0059), matching APS-C diagonal coverage.
2. **Focal length:** Example 1 gives $f = 34.914$ mm at infinity (¶0058), matching Sony's marketed 35 mm focal length.
3. **Aperture:** The patent gives $FI = 1.861$ (¶0059), matching the marketed f/1.8 class.
4. **Construction:** The patent lens contains L111-L134: eight patent lens elements in six air-separated groups, with L113 implemented as a hybrid composite asphere. Sony publishes 8 elements in 6 groups.
5. **Special elements:** Example 1 contains one very-low-dispersion focus element ($n_d = 1.497$, $\nu_d = 81.608$) and two aspherical patent elements: L113, with a composite asphere on the object-side face, and L134, with both surfaces aspheric (¶0051, ¶0053, ¶0056-0057). Sony describes the production lens as using ED glass and two aspherical lens elements.
6. **Focus mechanism:** The patent fixes G11 and G13 and moves only G12, a single negative element, toward the image side for close focus (¶0021, ¶0052). This is the production lens's internal-focus architecture.
7. **Optical stabilization:** L131 is a positive element in G13 that is decentered perpendicular to the optical axis for image-blur correction (¶0054), matching the production Optical SteadyShot configuration at the level of optical architecture.
8. **Close focus and magnification:** The patent table lists a 300 mm close-object entry and the close-focus variable spacings D(7) and D(9) (¶0058). Independent conjugate tracing of those close-focus spacings gives approximately 0.146x magnification, consistent with Sony's published 0.15x maximum magnification. The patent table does not explicitly define the distance reference plane, so the production match is based primarily on magnification and the common 0.30 m class rather than on an asserted front-vertex distance.

The match is therefore strong enough to treat JP 2014-89352 A Example 1 as the working optical prescription for the Sony E 35mm F1.8 OSS. The data file models the thin L113 resin layer as its own optical medium because it has distinct $n_d$ and $\nu_d$ values, while the production element count remains the conventional 8 elements / 6 groups.

## 2. Optical Architecture

Example 1 is a **positive-negative-positive three-group inner-focus standard lens**. It is not a retrofocus design: the patent back focal distance is 18.140 mm while the focal length is 34.914 mm, so $BFD/f = 0.520$. It is also not a true telephoto in the strict first-order sense: the surface-1-to-image optical track is 57.500 mm, giving $TL/f = 1.647 > 1$.

| Group | Power | Elements | Function |
|---|---:|---|---|
| G11 | $f_1 \approx +24.61$ mm | L111-L112 cemented doublet, L113 hybrid positive element, aperture stop | Front collector, distortion control, main positive power |
| G12 | $f_2 \approx -29.59$ mm | L121 | Single-element inner-focus group, ED correction |
| G13 | $f_3 \approx +42.91$ mm | L131, L132-L133 cemented doublet, L134 | Stabilization, rear power distribution, field correction |

The unusual feature is the rear-of-front-group stop position. The stop is part of G11 and sits immediately behind L113. The patent uses condition (1) to control the incidence angle of the maximum-field chief ray at the moving focus group; the stated purpose is to suppress image-height variation during focus changes, which is a video-oriented concern (¶0023-0025).

The first group is not a simple positive front collector. The L111-L112 cemented doublet is net negative in isolation, with a verified focal length of approximately -231.9 mm. Most of the front-group positive power is supplied by L113, whose glass body is a strong high-index positive element. The front doublet's chief role is therefore not to provide positive power but to support distortion and color correction ahead of the stop.

## 3. Element-by-Element Analysis

### L111 — Biconcave Negative

$n_d = 1.762$, $\nu_d = 26.609$. Glass: **FD140 / S-TIH14 class** (762/266 heavy flint; vendor not named in patent). $f \approx -18.13$ mm.

L111 is the object-side negative element of the front cemented doublet. Its first surface has $R_1 = -28.141$ mm, a concave-to-object form that the patent explicitly links to distortion correction through condition (5) (¶0043-0044). The glass is a high-index, high-dispersion heavy flint class. HOYA's cross-reference table places 762/266 glass at FD140 / N-SF14 / S-TIH14-class equivalents; the patent itself provides only $n_d$ and $\nu_d$, not a manufacturer name.

In isolation L111 is strongly negative. In the cemented pair, it is partly offset by L112 but the doublet remains weakly negative. Its role is best read as a distortion-correcting and chromatic-balancing prefix rather than a collector element.

### L112 — Biconvex Positive

$n_d = 1.835$, $\nu_d = 42.722$. Glass: **TAFD5G / TAFD5F / S-LAH55VS class** (835/427 lanthanum dense flint class). $f \approx +21.55$ mm.

L112 is the positive partner in the front cemented doublet. The patent gives $n_d = 1.835$ and $
u_d = 42.722$; HOYA's cross-reference assigns the corresponding 835/427 code to TAFD5G / TAFD5F and to the S-LAH55VS class. This is a lanthanum dense-flint class rather than a conventional crown.

The element recovers part of L111's negative power and supplies a higher-Abbe partner across the cemented interface. The Abbe-number separation between L111 and L112 is about 16.1, enough to make the pair a useful first-order achromat even though its net power remains negative.

### L113r — Composite Aspheric Resin Layer

$n_d = 1.540$, $\nu_d = 41.200$. Glass: **UV-curable optical resin, vendor unspecified**. $f \approx +560$ mm as an isolated thin layer.

The patent states that the object-side surface of L113 carries a composite asphere (複合非球面) (¶0051). The prescription expresses this as a thin 0.200 mm medium ahead of the high-index L113 glass body. Its optical power is very weak; its function is geometric, providing the replicated aspheric surface.

The data file models this resin as a separate optical medium so that the refractive step at surfaces 4A and 5 is preserved. It should not be counted as a separate production glass lens element when comparing against Sony's 8-element construction.

### L113g — High-Index Positive Body of the Hybrid Element

$n_d = 1.911$, $\nu_d = 35.250$. Glass: **TAFD35L / TAFD35 class** (HOYA 911/353 or closely equivalent high-index lanthanum flint class). $f \approx +25.67$ mm.

Public cross-reference data place $n_d pprox 1.91082$, $
u_d pprox 35.25$ in the HOYA TAFD35L / TAFD35 family, with CDGM H-ZLaF4LA and Sumita K-LaSFn23 as close equivalents. OHARA S-LAH93 is a nearby cross-reference but has a lower catalog index and should be treated as a near class reference rather than an exact identity.

L113g supplies nearly all of G11's positive power. Treating the resin and glass together, the L113 hybrid element has $f \approx +24.6$ mm. The object-side asphere weakens the marginal refraction relative to the spherical base and is the primary front-group spherical-aberration correction surface.

### Aperture Stop S

The stop is placed after L113, with D(7) = 1.799 mm from the stop to L121 at infinity (¶0056, ¶0058). The entrance-pupil semi-diameter implied by the patent $f/FI$ is approximately 9.38 mm; paraxial tracing through G11 gives a physical stop semi-diameter of approximately 8.70 mm.

The stop belongs mechanically and optically to G11 in the patent description (¶0021). Its placement is central to condition (1), which constrains the chief-ray incidence angle on the moving G12 group.

### L121 — Negative ED Meniscus, Focus Group

$n_d = 1.497$, $\nu_d = 81.608$. Glass: **FCD1 / S-FPL51 class** (497/816 ED fluorocrown). $f \approx -29.59$ mm.

L121 is the entire second lens group. The focus mechanism moves this single negative element from the object side toward the image side as focus is pulled from infinity to the close-focus setting (¶0052). Its rear surface, $R = +13.699$ mm, carries most of the element's negative power.

The very high Abbe number identifies the element as an ED fluorocrown class. The use of ED glass in the moving focus element is a compactness trade: it gives axial color correction where the marginal ray height is still significant while keeping the moving group to a single small element.

Surface-by-surface Petzval accounting shows L121 as the largest negative Petzval contributor in the system, mostly through surface 9 where the medium drops from $n_d = 1.497$ to air at a short positive radius. This field-flattening contribution is an optical consequence of the design, although the patent frames the element primarily through focus mechanics and the conditional expressions.

### L131 — Positive Meniscus, Optical Stabilization Element

$n_d = 1.911$, $\nu_d = 35.250$. Glass: **TAFD35L / TAFD35 class**. $f \approx +98.77$ mm.

L131 is the vibration-reduction group. The patent states that L131 is decentered in a direction approximately perpendicular to the optical axis to correct image blur caused by vibration (¶0054). Its weak positive power limits the aberration penalty of decentering while still providing image displacement sensitivity.

For Example 1, the patent lists $\beta_{vr} = 0.300$ and $\beta_r = 0.803$ (¶0059). Thus $(1-\beta_{vr})\beta_r = 0.562$, while the conditional expression uses its inverse, 1.779 (¶0063). A 0.3 degree image-angle correction corresponds to about 0.183 mm at the image plane and about 0.325 mm of L131 decenter by this paraxial sensitivity estimate.

### L132 — Biconvex Positive Member of Rear Cemented Doublet

$n_d = 1.911$, $\nu_d = 35.250$. Glass: **TAFD35L / TAFD35 class**. $f \approx +12.65$ mm.

L132 is a strong rear positive element with a weak object-side surface and a steep cemented rear interface at $R = -12.000$ mm. It begins the L132-L133 cemented doublet.

Despite L132's strong individual positive power, the cemented doublet formed with L133 is net negative in isolation. This is not a contradiction: the strongly curved cemented interface and the thicknesses of the two high-index elements determine the net thick-lens behavior. The verified isolated focal length of the L132-L133 pair is approximately -82.3 mm.

### L133 — Biconcave Negative Member of Rear Cemented Doublet

$n_d = 1.762$, $\nu_d = 26.609$. Glass: **FD140 / S-TIH14 class**. $f \approx -10.66$ mm.

L133 is the negative high-dispersion member of the rear cemented doublet. It shares the same heavy-flint class as L111, simplifying the glass palette while giving the rear group a second chromatic-balancing pair.

The L132-L133 pair functions as a negative achromat between positive elements L131 and L134. Its Abbe-number separation is only about 8.6, so this is not a classical large-split crown/flint achromat; instead, it uses high indices and strong curvature to manage color and off-axis aberrations in a compact rear group.

### L134 — Positive Meniscus with Two Aspheric Surfaces

$n_d = 1.851$, $\nu_d = 40.105$. Glass: **M-TAFD305 / MC-TAFD315 class** (851/401 moldable lanthanum glass class). $f \approx +37.52$ mm.

The previous draft identified L134 as M-TAFD405. That was incorrect: HOYA lists M-TAFD405 at the 952/298 code, not at 851/401. The 851/401 moldable class is listed by HOYA as M-TAFD305 / M-TAFD315 and by Nikon as Q-LASFH58S; OHARA's table cross-references it near L-LAH85V but not as an identical $n_d, \nu_d$ match.

L134 is the terminal field-correction element. Both surfaces are aspheric (¶0053, ¶0057). Its position near the image side makes it effective for trimming field curvature, astigmatism, distortion, and residual coma. The patent does not assign a separate aberration function to each of surfaces 15 and 16; those functions are inferred from the geometry and coefficients.

## 4. Glass Identification and Selection

The patent does not name glass manufacturers. The table below gives catalog-class matches from public manufacturer cross-reference data and notes the remaining uncertainty where the public cross-reference is a near class rather than an exact identity.

| Position | Patent $n_d$ | Patent $\nu_d$ | Corrected catalog-class identification | Notes |
|---|---:|---:|---|---|
| L111, L133 | 1.762 | 26.609 | FD140 / N-SF14 / S-TIH14 class, 762/266 | Heavy flint pair members |
| L112 | 1.835 | 42.722 | TAFD5G / TAFD5F / S-LAH55VS class, 835/427 | Positive member of the front cemented pair |
| L113 resin | 1.540 | 41.200 | UV-curable resin, vendor unspecified | Composite asphere medium, not catalog glass |
| L113g, L131, L132 | 1.911 | 35.250 | TAFD35L / TAFD35 class, 911/353 | Shared high-index lanthanum-flint class |
| L121 | 1.497 | 81.608 | FCD1 / S-FPL51 class, 497/816 | ED fluorocrown focus element |
| L134 | 1.851 | 40.105 | M-TAFD305 / MC-TAFD315 class, 851/401 | Moldable rear aspheric glass class |

The design uses a deliberately small glass palette. Two heavy flint elements, L111 and L133, serve as the negative members of the front and rear cemented pairs. Three elements, L113g, L131, and L132, share the $n_d = 1.911$, $\nu_d = 35.250$ high-index lanthanum-flint class. L121 is the only ED element. L134 uses a moldable high-index glass class appropriate for a two-surface precision-molded aspheric element.

The chromatic strategy is distributed rather than apochromatic. The front and rear doublets provide first-order axial color balancing, while the ED focus element reduces residual axial color without requiring a heavier multi-element moving group. The patent does not publish partial-dispersion data, so apochromatic behavior is not claimed.

## 5. Focus Mechanism

The lens uses single-element inner focus. G11 and G13 remain axially fixed, while G12, consisting only of L121, translates toward the image side from infinity to the close-focus setting (¶0021, ¶0052).

| Spacing | Infinity | Close-focus table value | Change |
|---|---:|---:|---:|
| D(7), stop to L121 | 1.799 mm | 4.719 mm | +2.920 mm |
| D(9), L121 to L131 | 8.353 mm | 5.434 mm | -2.919 mm |

The equal-and-opposite change confirms single-group internal focus with constant total optical track. The system focal length changes from the patent value 34.914 mm at infinity to 33.351 mm at the close table value, a -4.48% change. Independent conjugate tracing of the close-focus prescription gives approximately 0.146x magnification, matching the production 0.15x specification within normal rounding.

The patent's condition (1) is the main focus-breathing control condition. It limits the chief-ray incidence angle at the object-side surface of G12 relative to the stop-to-G12 spacing and focal length. Example 1's value is 140.438, inside the tight preferred range 100-180 (¶0060).

## 6. Image Stabilization

Image stabilization is implemented by decentering L131 perpendicular to the optical axis (¶0054). The group is a single weak positive meniscus, minimizing mass and limiting the aberrational cost of lateral movement.

The patent's stabilization condition is

$$1.33 \leq \left|\frac{1}{(1-\beta_{vr})\beta_r}\right| \leq 4.00.$$

For Example 1, $\beta_{vr}=0.300$ and $\beta_r=0.803$, so the conditional value is 1.779 (¶0059, ¶0063). The forward image-shift sensitivity is the reciprocal quantity, approximately 0.562 mm of image displacement per 1 mm of L131 decenter. The patent's transverse-aberration figures show correction for image-angle shifts of $\pm0.3^\circ$ (¶0066), corresponding paraxially to about 0.183 mm of image-plane shift and approximately 0.325 mm of L131 decenter.

## 7. Aspherical Surfaces

Example 1 has three aspherical surfaces on two patent lens elements: surface 4 on the composite aspheric face of L113, and surfaces 15 and 16 on L134 (¶0051, ¶0053, ¶0057). The patent uses the standard sag form with light traveling in the positive axial direction (¶0102):

$$Z(h)=\frac{c h^2}{1+\sqrt{1-(1+k)c^2h^2}} + A h^4 + B h^6 + C h^8 + D h^{10},$$

where $c = 1/R$. In this patent convention, $k=0$ is a spherical base conic. All three Example 1 aspheres have $k=0$.

| Surface | Element | R (mm) | k | A4 | A6 | A8 | A10 |
|---|---|---:|---:|---:|---:|---:|---:|
| 4A | L113 resin | +27.040 | 0 | -1.759e-5 | -2.541e-8 | +2.140e-11 | 0 |
| 15A | L134 front | +28.017 | 0 | +4.393e-5 | -5.539e-8 | +1.026e-9 | -4.000e-13 |
| 16A | L134 rear | +217.238 | 0 | +6.097e-5 | -6.809e-8 | +1.937e-9 | -2.882e-12 |

Using the estimated data-file clear semi-diameters, the polynomial departures from the base conic are approximately -496 µm at surface 4A ($h = 12.4$ mm), +483 µm at surface 15A ($h = 10.0$ mm), and +812 µm at surface 16A ($h = 10.3$ mm). These are verified at the semi-diameters used in the prescription file; they should not be read as patent-published clear-aperture values, because the patent does not list semi-diameters.

Surface 4A has negative fourth-order departure on a positive-power surface and reduces marginal power relative to the spherical base. Surfaces 15A and 16A both use positive fourth-order departures and are located in the rear group, where they act chiefly on oblique-field correction. The patent does not explicitly divide distortion, coma, astigmatism, and field-curvature correction among these two surfaces.

## 8. Conditional Expressions

Example 1 satisfies all five patent conditions and all of the tightest preferred ranges.

| # | Patent expression | Patent value | Independently recomputed |
|---|---|---:|---:|
| 1 | $1/(\tan\alpha_1/LS_1/f)$ | 140.438 | 140.421 |
| 2 | $f_1/f$ | 0.703 | 0.7027 |
| 3 | $FI \cdot f_1/f$ | 1.307 | 1.3077 |
| 4 | $|1/((1-\beta_{vr})\beta_r)|$ | 1.779 | 1.7790 |
| 5 | $r_1/f$ | -0.806 | -0.8060 |

Condition (1) is the focus-breathing/video condition. Conditions (2) and (3) constrain first-group power and speed. Condition (4) constrains the stabilization-group decenter sensitivity. Condition (5) forces the front surface into the concave-to-object regime used for distortion correction (¶0043-0044).

## 9. Verification Summary

Independent paraxial tracing used a reduced-angle $y, n u$ scheme with refraction and transfer at every patent surface. The data file transcribes Example 1 without scaling.

| Quantity | Patent | Verified | Difference |
|---|---:|---:|---:|
| EFL at infinity | 34.914 mm | 34.941 mm | +0.077% |
| BFD at infinity | 18.140 mm | 18.167 mm | +0.149% |
| G11 focal length | 24.533 mm | 24.612 mm | +0.32% |
| G12 focal length | not separately tabulated | -29.591 mm | — |
| G13 focal length | not separately tabulated | +42.907 mm | — |
| L121 focus stroke | from D(7)/D(9) | 2.920 mm | — |
| Close magnification | Sony spec 0.15x | 0.146x | rounding-level match |
| Petzval sum | not tabulated | +0.0033498 mm^-1 | $R_P \approx 298.5$ mm |

The Petzval sum was computed surface by surface as

$$P=\sum\frac{n'-n}{n n' R}.$$

The front group contributes +0.017185 mm^-1, the focus group contributes -0.022612 mm^-1, and the rear group contributes +0.008777 mm^-1. The net result is $P = +0.0033498$ mm^-1, corresponding to a Petzval radius of approximately 298.5 mm.

Semi-diameters in the data file are estimated because the patent does not publish clear apertures. They were set from paraxial marginal/chief-ray envelopes, the patent cross-section, the 49 mm production filter constraint, edge-thickness checks, and signed cross-gap sag checks. The rear cemented doublet necessarily clips some wide-open off-axis marginal rays; this is treated as ordinary mechanical vignetting rather than as a transcription error.

## 10. Sources

- JP 2014-89352 A, Tamron Co., Ltd., Sakai Takahiko, published 15 May 2014. Primary source for prescription, group motion, stabilization description, aspheric coefficients, and conditional expressions.
- Sony Corporation, E 35mm F1.8 OSS / SEL35F18 official specifications and feature page. Source for production focal length, format, 6/8 construction, f/1.8 aperture, 0.30 m MFD, 0.15x maximum magnification, Optical SteadyShot, and ED/aspherical-element description.
- HOYA Group Optics Division, Glass Cross Reference Index. Source for FCD1 / S-FPL51, TAFD5G / S-LAH55VS, TAFD35L / S-LAH93-class, and M-TAFD305 / Q-LASFH58S-class cross references.
- HOYA Group Optics Division, Glass Molded Lenses and Preforms for Precision Moldings pages. Source for moldable glass code 851/401 and the separate 952/298 M-TAFD405 entry.
- OHARA optical glass data pages and catalog download pages. Source for S-TIH14, S-LAH55V/S-LAH55VS-class, S-FPL51, and low-Tg L-glass reference data.
- Nikon optical glass Q-series catalog page. Cross-check for Q-LASFH58S code 851401 as the moldable 1.851 / 40.1 class.
