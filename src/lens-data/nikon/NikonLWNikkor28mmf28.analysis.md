# Nikon LW-Nikkor 28mm f/2.8 — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 4,203,653
**Application Number:** 918,592
**Filed:** June 23, 1978
**Priority:** June 29, 1977 (Japan 52-77329)
**Granted:** May 20, 1980
**Inventor:** Ikuo Mori
**Assignee:** Nippon Kogaku K.K.
**Title:** Inverted telephoto type wide angle lens system
**Classification:** Int. Cl. G02B 9/60; U.S. Cl. 350/216
**Total claims:** 5
**Worked examples:** 2
**Embodiment analyzed:** Example 1 (the "First Embodiment", col. 3; reprinted as claim 4, col. 4)

US 4,203,653 discloses a five-element inverted-telephoto (retrofocus) wide-angle lens with a relative aperture of 1:2.8, a 74° angle of view, and a back focus of at least 1.29 times the focal length (col. 1, Summary). Example 1 is published at f = 1.0 together with its aberration curves (Figs. 2A–2C). Example 2 (col. 3; claim 5, cols. 5–6) shares the construction but uses different glasses and is not illustrated.

The link between Example 1 and the Nikonos LW-Nikkor 28mm f/2.8 rests on convergent evidence rather than on a manufacturer attribution:

1. **Construction.** Example 1 consists of five air-spaced singlets. Nikon's NIKONOS-V instruction manual lists the LW-Nikkor 28mm f/2.8 as 5 elements in 5 groups (p. 72).
2. **Aperture.** The patent's relative aperture of 1:2.8 equals the lens's maximum aperture; the manual gives an aperture range of f/2.8 to f/22.
3. **Angle of view.** The patent's 74° equals the manual's 74° picture angle on land.
4. **Assignee.** Nippon Kogaku K.K. is the manufacturer.
5. **Timing.** The 1977 priority date and 1980 grant precede the lens's 1983 introduction, which Nikon dates in its _Thousand and One Nights_ series (No. 8).
6. **Back focus.** The printed B.f. = 1.295 (col. 3) reflects a single-lens-reflex requirement; the patent ties condition (2) to securing the back focus needed for an SLR lens (col. 2). A Nikonos body does not need it. That is consistent with secondary reports that the LW-Nikkor reuses the optics of the Series E 28mm f/2.8 SLR lens, but it is not proof.

No primary source connects this patent to the LW-Nikkor or to the Series E 28mm. Whether production used Example 1 exactly, Example 2, or a later re-optimization of the same five-singlet form is unknown. The marketed focal length is 28 mm; the modeled focal length is 28.03 mm.

**Source discrepancy at r5.** The description table prints r5 = 0.563; the claim 4 table prints r5 = −0.563. All other values of the two printings agree. The data file adopts −0.563, supported by claim 4, the text's description of L3 as a negative lens (col. 1), the biconcave L3 drawn in Fig. 1, and Example 2's r5 = −0.588. The first-order check is decisive: −0.563 reproduces f = 1.0011 and B.f. = 1.2948, whereas the printed +0.563 gives f = 0.299 and B.f. = 0.215.

## Optical Architecture

The lens is an inverted telephoto of the simplest kind. A single negative meniscus (L1) forms the divergent group. Four singlets (L2–L5) form the convergent group, with the iris between L2 and L3. The power sequence is negative, then positive–(stop)–negative–positive–positive. All ten surfaces are spherical, and there are no cemented interfaces.

| Quantity (infinity focus)                 | Model value                   |
| ----------------------------------------- | ----------------------------- |
| Effective focal length                    | 28.03 mm                      |
| Back focal distance (r10 vertex to image) | 36.25 mm                      |
| Back focus / focal length                 | 1.293                         |
| Rear principal plane                      | 8.22 mm behind the r10 vertex |
| Lens length (r1 to r10)                   | 37.60 mm                      |
| Total track (r1 to image)                 | 73.86 mm                      |
| Entrance pupil (paraxial)                 | 16.35 mm behind r1            |

The back focal distance exceeds the focal length, as it must in a retrofocus design; with a track-to-focal-length ratio of 2.63 the lens is not telephoto. The 1.293 ratio meets the patent's stated objective of a back focus "1.29 times or greater" than the focal length.

The patent frames its contribution against prior practice (cols. 1–2). Earlier retrofocus wide-angles corrected the strong barrel distortion of the divergent group by adding a positive member to that group, or built the group from two negative lenses. Example 1 instead uses one negative meniscus and assigns the distortion-correcting role to the positive lens L2 behind it. The patent describes the air space d4 between L2 and L3 as the only convergent air space affecting distortion and makes it large under condition (1) (col. 2). It notes that a large d4 overcorrects astigmatism and counters this with condition (3), which limits L2's centre thickness relative to d4.

As standalone elements in air, L1 has f = −38.95 mm and the convergent group L2–L5 has f = +27.32 mm. Together with L1's negative power, the 16.13 mm air space d2 separating them produces the long back focus. Paraxial ray heights show how the work is shared. The f/2.8 axial ray enters L1 at 5.01 mm and reaches L2 at 6.97 mm, so L1 enlarges the axial beam by 39 % before the convergent group. A 37° paraxial chief ray crosses L1 at 12.32 mm from the axis but L2 at only 3.46 mm. L1 therefore meets the oblique beam far from the axis, while L2 sits close to the stop.

**Model notes.** Every radius and spacing is scaled by s = 28.0 from the patent's f = 1.0 values; the computed focal length is 28.03 mm. The image plane is the computed paraxial back focus, 36.253 mm, against the printed 1.295 × 28 = 36.26 mm; the difference is within source rounding. The patent tabulates no stop. The model places it at 0.50 of d4, inferred from Fig. 1, where the iris marks and the axis crossing of the 37° principal ray fall between 0.49 and 0.52 of d4. The stop semi-diameter (6.286 mm) is calibrated to f/2.8 at infinity and is not a published diaphragm size. No semi-diameters are published. The modeled values follow the optical rims drawn in Fig. 1, scaled from the r1–r10 vertex span, wherever exact ray tracing and the drawing rules allow; the exceptions are noted under L1 and L4. The entrance-pupil position above follows from the inferred stop.

## Element-by-Element Analysis

The third-order contributions cited below come from a Seidel decomposition of the data-file model, tabulated in the Aberration Correction Strategy section. They are not values published by the patent.

### L1 — Negative Meniscus, convex to object

nd = 1.67025, νd = 57.5. Glass: 670575 lanthanum-crown class (coordinate-compatible with J-LAK02, HIKARI, and S-LAL52, OHARA; supplier unconfirmed). f = −38.95 mm.

L1 is the whole divergent group. Its strongly curved rear surface (R = 14.70 mm) has 2.4 times the power of the front surface, with opposite sign. Condition (4), given for sufficient back focus, bounds its focal length between f and 2f; the model gives |f1|/f = 1.389. Consistent with the oblique beam crossing L1 far from the axis, its third-order distortion contribution is barrel, −10.9 % at 37°. Its Petzval term is negative (−0.0160 mm⁻¹), and its spherical-aberration term (+0.46 mm) is opposite in sign to the system total.

L1 is the largest element. Its modeled front semi-diameter of 14.4 mm follows the Fig. 1 rim and passes rays to the 135-format corner. The rear surface is modeled at 11.8 mm, wider than the roughly 10.4 mm drawn inside the mounting flange of Fig. 1, because a smaller rear aperture would cut into the oblique beam at the format corner.

### L2 — Biconvex Positive, more strongly curved toward the object

nd = 1.60323, νd = 42.5. Glass: 603425 barium-flint class (K-BaSF5, SUMITA; supplier unconfirmed). f = +26.13 mm.

The patent calls L2 "a kind of distortion correcting lens" (col. 2) and bounds its focal length by condition (5); the model gives f2/f = 0.932. The decomposition supports that description. L2's third-order distortion contribution is +10.6 %, which offsets L1's −10.9 % to within about 5 % of its magnitude across the measured stop-position range. In the same pair, L2's lateral-colour term (+0.52 %) largely offsets L1's (−0.63 %).

Two other patent features apply here. The front surface is more strongly curved than the rear (r3 < |r4|, ratio 0.486), which the patent gives for sine-condition correction (col. 3). The centre thickness is small: condition (3) gives d3/d4 = 0.312. The patent contrasts this with earlier lenses of the type, whose positive lens before the diaphragm tended to be thick and was sometimes built from two plano-convex lenses (col. 2).

The modeled semi-diameter of 7.9 mm follows the Fig. 1 rim and leaves an edge thickness of 0.58 mm.

### L3 — Biconcave Negative

nd = 1.7847, νd = 26.1. Glass: 785261 dense-flint class (SF56A, SCHOTT / ZF51, CDGM; supplier unconfirmed). f = −15.83 mm.

L3 is the strongest element and the only high-dispersion glass; every other element has νd above 42. Its front rim, modeled at 7.3 mm from the Fig. 1 outline, lies 2.42 mm behind the stop plane. In the decomposition it has the largest Petzval term of any element (−0.0348 mm⁻¹), which by itself nearly cancels the combined +0.0341 mm⁻¹ of L4 and L5. It also supplies the dominant overcorrecting axial-colour term (+2.48 mm F−C, against −0.19 mm for the whole lens). Its distortion term (+21.7 %) is balanced chiefly by L4 and L5, and its astigmatism term, the largest in the system, chiefly by L2 and L4.

The front radius is the corrected r5 (−15.76 mm). The rear surface (R = 63.64 mm) faces L4 across an air space of only 0.728 mm. The patent recommends that this space d6 be less than half the centre thickness of each of L3, L4 and L5 for sagittal-field correction (col. 3); in the model d6 is 0.356 of the thinnest of the three.

### L4 — Positive Meniscus, convex to image

nd = 1.80411, νd = 46.6. Glass: 804466 lanthanum-dense-flint class (J-LASF015, HIKARI / S-LAH65V, OHARA; supplier unconfirmed). f = +31.86 mm.

L4 is the first of two rear positive menisci, which the patent prefers with their more strongly curved surfaces toward the image "to provide much better correction of the distortion" (col. 3). In the model the rear radius (−18.12 mm) is much stronger than the front (−58.74 mm). In the decomposition L4 contributes −16.9 % distortion and an astigmatism term of opposite sign to L3's.

The tight d6 gap limits the apertures of L3's rear surface and L4's front surface. Fig. 1 draws the two elements with a common outer height of about 7.3 mm and their facing surfaces meeting at the rim, but with the tabulated radii the two surfaces touch at a height of 6.67 mm. The figure is therefore not to scale at this gap, and both surfaces are modeled at 6.6 mm, just inside the contact height, where 0.013 mm of air remains (98.2 % of the gap is used), while L3's front surface and L4's rear surface take the drawn 7.3 mm. These rims clear the exact f/2.8 marginal ray, which reaches 6.44 mm at r6 and 6.45 mm at r7, at infinity and at the reconstructed 0.5 m state alike, since unit focus leaves the heights inside the lens unchanged. The real lens may have rim contact or a thin spacer here; the patent gives no mechanical detail.

### L5 — Positive Meniscus, convex to image

nd = 1.732, νd = 51.0. Glass: 732510 lanthanum-crown class (nearest catalog glass LAKN12, a discontinued SUMITA type; TAC4, HOYA, is the alternate; supplier unconfirmed). f = +33.64 mm.

L5 completes the rear group with a standalone power similar to L4's. Its index is printed to only three decimals. In the decomposition it contributes −10.5 % distortion. With L2 it is one of the two largest undercorrecting spherical-aberration contributors (−0.70 mm versus −0.73 mm for L2).

## Glass Identification and Selection

The patent prints indices and Abbe numbers without naming the spectral line. The d-line is inferred because L3 and L4 coincide with d-line catalog coordinates to within 0.0002 in index; e-line indices of these glasses would be noticeably higher. Candidates below come from an unseeded search of HIKARI, HOYA, OHARA, SCHOTT, SUMITA and CDGM catalog data, including the discontinued SUMITA type LAKN12. These are coordinate matches, not supplier identifications.

| Element | nd / νd        | Code   | Class                 | Nearest current glass (Δnd, Δνd)                                      | Match                  |
| ------- | -------------- | ------ | --------------------- | --------------------------------------------------------------------- | ---------------------- |
| L1      | 1.67025 / 57.5 | 670575 | lanthanum crown       | J-LAK02, HIKARI (−0.00025, −0.15); S-LAL52, OHARA (−0.00025, −0.17)   | Equivalent             |
| L2      | 1.60323 / 42.5 | 603425 | barium flint          | K-BaSF5, SUMITA (+0.00002, +0.08)                                     | Close                  |
| L3      | 1.7847 / 26.1  | 785261 | dense flint           | SF56A, SCHOTT; ZF51, CDGM (0.0000, −0.02)                             | Exact coordinates      |
| L4      | 1.80411 / 46.6 | 804466 | lanthanum dense flint | J-LASF015, HIKARI (−0.0001, −0.002); S-LAH65V, OHARA (−0.0001, −0.02) | Exact coordinates      |
| L5      | 1.732 / 51.0   | 732510 | lanthanum crown       | LAKN12, SUMITA, discontinued (+0.0015, +0.22); TAC4, HOYA (+0.0020, +0.05) | Close             |

Every positive element uses a glass of index 1.60 or higher, and both rear menisci use lanthanum glasses above 1.73. For a given power, a higher index lowers an element's Petzval contribution; the decomposition shows the resulting rear-group terms are nearly cancelled by L3 alone. L3 is the only strongly dispersive glass in the system.

L1, L2 and L5 have no exact current-catalog match and may be 1970s melts since withdrawn. L5's index residuals of +0.0015 to LAKN12 and +0.0020 to TAC4 are three and four times the half-unit of its last printed digit, so neither is the printed glass; LAKN12 is used only as the nearest dispersion curve. The patent publishes no partial-dispersion data, and the chromatic statements in this analysis are limited to the primary (F−C) spectrum computed from νd. Chromatic correction is of the ordinary primary kind, through L3's dispersion set against the positive elements; no secondary-spectrum or apochromatic claim is supported.

## Focus Mechanism

The patent publishes the infinity state only, and the manual does not describe the focusing mechanism beyond a manual focusing ring with a distance scale. The data file therefore uses an assumed unit focus: the five elements move together and only the last air space changes. The close state is a reconstruction solved paraxially for the manual's 0.5 m minimum distance. The manual measures Nikonos subject distances from the film plane (p. 25), so the 0.5 m is taken from object to film plane.

| Quantity                         | Infinity  | 0.5 m (reconstructed) |
| -------------------------------- | --------- | --------------------- |
| Object to r1 vertex              | ∞         | 424.30 mm             |
| Last air space d10 (r10 to film) | 36.253 mm | 38.100 mm             |
| Magnification                    | 0         | −0.0659 (1:15.2)      |

The extension is 1.847 mm. Intermediate positions in the viewer interpolate d10 linearly between the two states and are not published states.

## Aberration Correction Strategy

The patent explains its correction strategy only in qualitative terms. To make the element roles concrete, the data-file model was decomposed into third-order (Seidel) contributions at infinity focus. The table uses the d-line, the f/2.8 axial ray and a 37° paraxial chief ray. The colour columns use the (nd − 1)/νd dispersion proxy.

| Element   | Transverse SA at f/2.8 (mm) | Astigmatic difference zT − zS at 37° (mm) | Petzval term (mm⁻¹) | Distortion at 37° (%) | Axial colour F−C (mm) | Lateral colour F−C at 37° (%) |
| --------- | --------------------------- | ----------------------------------------- | ------------------- | --------------------- | --------------------- | ----------------------------- |
| L1        | +0.46                       | +1.10                                     | −0.0160             | −10.9                 | +0.34                 | −0.63                         |
| L2        | −0.73                       | −14.56                                    | +0.0242             | +10.6                 | −1.38                 | +0.52                         |
| L3        | +1.02                       | +28.51                                    | −0.0348             | +21.7                 | +2.48                 | +1.09                         |
| L4        | −0.19                       | −13.02                                    | +0.0170             | −16.9                 | −0.87                 | −0.58                         |
| L5        | −0.70                       | −1.21                                     | +0.0171             | −10.5                 | −0.76                 | −0.62                         |
| **Total** | **−0.13**                   | **+0.83**                                 | **+0.0076**         | **−5.9**              | **−0.19**             | **−0.23**                     |

Negative transverse spherical aberration denotes undercorrection: the marginal ray crosses the axis before the paraxial focus. Negative distortion is barrel.

Three readings follow:

- **Distortion.** L2 cancels L1's term almost exactly, as the patent's description of L2 implies. The net barrel is then set by the balance between L3 and the two rear menisci.
- **Field.** L2, L3 and L4 carry astigmatism terms an order of magnitude larger than the net value, so the flat field is a balance of large opposing terms. The total Petzval sum is 0.0076 mm⁻¹, equivalent to a Petzval radius of −132 mm, or about 4.7 times the focal length.
- **Spherical aberration.** The third-order total is small, and higher orders nearly cancel it at the f/2.8 rim. An exact ray through the rim of the modeled f/2.8 stop meets the paraxial image plane −0.016 mm from the axis, consistent with the small residual plotted graphically in Fig. 2A.

The third-order total distortion (−5.9 %) is larger than the exact-ray value at 37° (−2.29 %), because higher-order terms are significant at this field. The exact-ray value agrees with the roughly −2 % read graphically from Fig. 2C.

The stop-dependent columns (distortion, astigmatism, lateral colour) depend on the inferred stop position. Recomputing with the stop at 0.48 and 0.53 of d4 changes no sign in these columns and preserves the L1/L2 distortion cancellation. Each decomposition total was checked against an independent calculation on the same model: the surface-by-surface Petzval sum, two-wavelength paraxial traces, and exact rays extrapolated to small field and aperture.

## Conditional Expressions

The patent's three governing conditions (claim 1), the two focal-length conditions (claim 2) and the three supplementary preferences (claims 2–3) all hold in the model. Values use the computed focal length.

| Condition                              | Patent range | Model value |
| -------------------------------------- | ------------ | ----------- |
| (1) d4/f                               | 0.25 to 0.5  | 0.3007      |
| (2) d2/d4                              | 1.6 to 2.5   | 1.914       |
| (3) d3/d4                              | below 0.5    | 0.312       |
| (4) \|f1\|/f                           | 1 to 2       | 1.389       |
| (5) f2/f                               | 0.8 to 1.1   | 0.932       |
| r3/\|r4\| (sine condition)             | below 1      | 0.486       |
| d6 / min(d5, d7, d9) (sagittal field)  | below 0.5    | 0.356       |
| L4 and L5 more curved toward the image | qualitative  | satisfied   |

The patent explains the limits of condition (1) (col. 2). Above the upper limit, distortion is further corrected but astigmatism is heavily overcorrected. Below the lower limit, barrel distortion increases and the divergent group can no longer be a single negative lens. Condition (2) balances distortion against the SLR back focus: a longer d2 increases barrel distortion and bulk, and a shorter one shortens the back focus. Condition (3) prevents the astigmatic overcorrection that condition (1) can introduce.

## Verification Summary

| Quantity                                         | Patent                          | Model                        | Comment                                                    |
| ------------------------------------------------ | ------------------------------- | ---------------------------- | ---------------------------------------------------------- |
| Focal length                                     | f = 1.0                         | 1.0011 normalized (28.03 mm) | +0.11 %, within source rounding                            |
| Back focus                                       | B.f. = 1.295 (36.26 mm)         | 36.253 mm                    | −0.007 mm, within source rounding                          |
| Relative aperture                                | 1:2.8                           | f/2.80                       | Calibrated through the stop semi-diameter; not independent |
| Distortion at 37°                                | about −2 % (Fig. 2C, graphical) | −2.29 % (exact chief ray)    | Consistent                                                 |
| Conditions (1)–(5) and supplementary preferences | stated                          | all satisfied                | See Conditional Expressions                                |

The patent's 74° is a nominal full angle. At 28.03 mm a distortion-free 37° field reaches 21.12 mm, short of the 21.63 mm half-diagonal of the 135 format, whose corner lies at 38.26° in the exact model. Focal length and back focus were computed by two independent methods, a sequential paraxial trace and a transfer-matrix product, which agree to floating-point precision.

## Design Heritage and Context

Nikon's account of the NIKKOR-H Auto 2.8cm f/3.5 (1960) attributes to Zenji Wakimoto a retrofocus rear group ordered convex, stop, concave, convex, convex. It also notes that the conventional retrofocus front group paired a distortion-correcting positive lens with a negative lens (_Thousand and One Nights_ No. 12). Example 1 keeps that rear-group order exactly: L2, iris, L3, L4, L5. It removes the positive front member and moves its distortion-correcting duty to L2. This is the present analysis's comparison; the patent does not cite the Nikkor-H.

The patent cites US 3,936,153 (Ogura, assigned to Minolta; 1976), a five-component, five-lens retrofocus lens for SLR use with a back focus above 0.9 times the focal length and a field over 64°. It also cites British patent 931,063 (1963). Against those stated minimums, Example 1 pursues the same parts count at a wider 74° and a longer back focus.

Nikon confirms that its Series E line included a 28mm f/2.8 lens, not sold in Japan. Nikon also reports that this lens performed on par with the contemporary AI Nikkor 28mm f/2.8, though with slightly greater distortion and some flare (_Thousand and One Nights_ No. 57). Nikon does not identify the Series E lens's patent or construction there. The same source describes the replacement AI Nikkor 28mm f/2.8S (1981) as an 8-element design with a convex front element that holds barrel distortion to about 1 %. That is a different response to the problem Example 1 addresses.

For the Nikonos system, Nikon describes separate 28 mm lenses for land and underwater use, with the LW-Nikkor 28mm f/2.8 (1983) reserved for use on land (_Thousand and One Nights_ No. 8). Secondary sources state that the LW-Nikkor reuses the Series E 28mm optics. This is the basis of the product correlation above, and it is not manufacturer-confirmed.

## Sources

- Mori, Ikuo. _Inverted Telephoto Type Wide Angle Lens System._ US Patent 4,203,653, assigned to Nippon Kogaku K.K., granted May 20, 1980; filed June 23, 1978 (Appl. No. 918,592); priority Japan 52-77329, June 29, 1977. Cited by printed column: front page; Figs. 1 and 2A–2C (drawing sheet); cols. 1–2 (background, summary, conditions (1)–(3)); cols. 3–4 (conditions (4)–(5), supplementary conditions, Examples 1 and 2, claims 1–4); cols. 5–6 (claim 5).
- Nikon Corporation. _NIKONOS-V Instruction Manual_ (English), pp. 25, 34, 72. Copy hosted by the Pacific Rim Camera reference library: <https://www.pacificrimcamera.com/rl/01301/01301.pdf>.
- Ohshita, Kouichi. "NIKKOR – The Thousand and One Nights No. 8: W Nikkor 35mm f/2.5." Nikon Imaging. <https://imaging.nikon.com/imaging/information/story/0008/>. Japanese edition: <https://nij.nikon.com/enjoy/life/historynikkor/0008/index.html>.
- Ohshita, Kouichi. "NIKKOR – The Thousand and One Nights No. 12: NIKKOR-H Auto 2.8cm f/3.5." Nikon Imaging. <https://imaging.nikon.com/imaging/information/story/0012/>.
- Ohshita, Kouichi. "NIKKOR – The Thousand and One Nights No. 57: AI Nikkor 28mm f/2.8S." Nikon Imaging. <https://imaging.nikon.com/imaging/information/story/0057/>.
- Ogura, Toshinobu. _Retrofocus Type Objective Lens System._ US Patent 3,936,153, assigned to Minolta Co., Ltd., granted February 3, 1976. <https://patents.google.com/patent/US3936153>.
- Rørslett, Bjørn. "Lenses for Nikonos (I–V) Mount." naturfotograf.com (secondary). <http://www.naturfotograf.com/lens_nikonos.html>.
- "Ai AF Nikkor 28mm F2.8S〈New〉." こだわりカメラ (blog; secondary). <http://kodawaricamera.blogspot.com/2013/07/ai-af28mm-f28snew.html>.
- Glass coordinates: HIKARI, HOYA, OHARA, SCHOTT, SUMITA and CDGM current-production catalog data as redistributed with the `opticalglass` 2.0.2 Python package.
