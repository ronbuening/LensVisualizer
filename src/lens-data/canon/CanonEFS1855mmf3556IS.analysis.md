# Canon EF-S 18–55 mm f/3.5–5.6 IS — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 2007/0058265 A1\
**Application Number:** 11/466,150\
**Filed:** 2006-08-22\
**Published:** 2007-03-15\
**Priority:** JP 2005-263889, 2005-09-12\
**Inventor:** Takeshi Nishimura\
**Assignee:** Canon Inc.\
**Title:** Zoom Lens and Image-Pickup Apparatus Having the Same\
**Example details:** Numerical Example 2, PDF pp. 24–25; Fig. 4, PDF p. 5; Figs. 5A/B, PDF p. 6

This prescription is transcribed from Numerical Example 2 of Canon's image-stabilized negative-lead zoom patent. The production identification is the Canon EF-S 18–55 mm f/3.5–5.6 IS rather than the later IS II or STM variants. The match rests on convergent evidence: the patent example has 11 elements in 9 groups; a design focal-length range of 18.69–53.27 mm; a patent maximum-aperture range of Fno 3.63–5.86; one aspherical surface; a single positive IS lens in the second group; and APS-C image height Y = 13.6 mm in the aberration plots. Canon's published product page for the EF-S18-55mm f/3.5-5.6 IS gives the same 9-group/11-element construction, six-blade diaphragm, 0.25 m closest focusing distance, 0.34× maximum magnification, and 58 mm filter diameter, with marketing beginning in September 2007.

The catalog associates this published research prescription with the production lens from the convergent features above. That does not establish identity of production surface tables, media or mechanics. No geometric scale factor is applied.

## Optical Architecture

The lens is a four-group negative-lead APS-C DSLR zoom. From object to image, the group powers are negative, positive, negative, and positive. The negative front group gives the wide-angle end its retrofocus behavior; the rear three groups provide positive resultant power at the wide end and move during zooming to vary magnification while maintaining a long SLR back focus.

The patent states that, during zooming from wide to telephoto, the spacing between the first and second groups decreases, the spacing between the second and third groups increases, and the spacing between the third and fourth groups decreases. Numerical Example 2 implements this with D8 = 33.62 → 13.53 → 3.23 mm, D14 = 3.30 → 6.19 → 8.96 mm, and D17 = 7.34 → 4.45 → 1.68 mm. The aperture stop is located immediately behind Group 2 and moves integrally with Group 2 during zooming.

The patent describes the telephoto-end arrangement as becoming more telephoto-like because Group 1 approaches Group 2 and Group 3 approaches Group 4. In strict photographic-design terminology, however, the complete lens is not a compact telephoto design: the telephoto-end first-surface-to-image track is about 119.12 mm for a 53.30 mm EFL, so TL/EFL remains greater than 1. The safer description is that the telephoto-end grouping shortens the system relative to what a simple negative-lead zoom would otherwise require, not that the whole prescription satisfies the strict TL/EFL < 1 telephoto criterion.

### Verified First-Order Values

| Quantity              |      Wide |       Mid |      Tele |
| --------------------- | --------: | --------: | --------: |
| Patent focal length   |  18.69 mm |  32.08 mm |  53.27 mm |
| Computed EFL          | 18.693 mm | 32.076 mm | 53.300 mm |
| Patent Fno            |      3.63 |         — |      5.86 |
| Patent full field, 2ω |     72.2° |         — |     28.7° |
| Computed back focus   | 35.266 mm | 46.875 mm | 66.284 mm |
| D8                    |  33.62 mm |  13.53 mm |   3.23 mm |
| D14                   |   3.30 mm |   6.19 mm |   8.96 mm |
| D17                   |   7.34 mm |   4.45 mm |   1.68 mm |

The wide-end BFD/EFL ratio is 35.266 / 18.693 = 1.887, which is the operative retrofocus evidence for the DSLR mirror-box clearance.

### Group Focal Lengths

| Group            | Verified focal length | Role                                    |
| ---------------- | --------------------: | --------------------------------------- |
| Group 1, L11-L14 |            -27.281 mm | Negative front group and focusing group |
| Group 2, L21-L23 |            +25.406 mm | Positive variator group with IS unit    |
| L2A, L21         |            +78.625 mm | Single-lens image stabilizer            |
| L2B, L22-L23     |            +35.427 mm | Cemented achromatizing subcomponent     |
| Group 3, L31-L32 |            -34.629 mm | Negative compensator group              |
| Group 4, L41-L42 |            +43.031 mm | Rear positive relay/field group         |

## Element-by-Element Analysis

Catalog glass names below describe current compatible spectral proxies. Historical supplier, melt and chemistry are unspecified; only the printed d-ray index/Abbe pairs are established.

### Group 1 — Front Negative Group

Group 1 contains four air-spaced singlets and carries the front-group negative power. It is also the focusing group. The patent states that focusing may be performed by moving the first group, but it does not publish finite-distance spacing tables.

#### L11 — Positive Meniscus

nd = 1.51633, νd = 64.1. Glass: S-BSL7 (OHARA/BK7-class crown). f = +164.1 mm.

L11 is a weak positive meniscus with a very shallow rear surface. Its optical power is small relative to the following negative elements, but it moderates the entrance bundle and helps keep the first strongly negative surface from bearing the entire off-axis correction burden. The element also gives the front group a more manufacturable profile than a purely negative-front layout.

#### L12 — Negative Meniscus

nd = 1.62299, νd = 58.2. Glass: S-BSM15 (OHARA). f = -29.4 mm.

L12 is the first strong negative component of the retrofocus front group. Its steep rear radius, R4 = +14.601 mm, supplies much of the wide-angle divergence. The nd/νd pair corresponds to OHARA S-BSM15, code 623582. S-BSM22 has a materially lower Abbe number and does not match this prescription.

#### L13 — Biconcave Negative

nd = 1.62299, νd = 58.2. Glass: S-BSM15 (OHARA). f = -34.9 mm.

L13 shares the same printed index/Abbe pair and compatible proxy as L12 and provides the second major negative contribution in Group 1. The two-lens negative pair spreads the retrofocus burden across multiple surfaces, reducing the need for a single extreme front element and giving the designer more degrees of freedom for distortion and lateral color.

#### L14 — Positive Meniscus

nd = 1.80518, νd = 25.4. Glass: S-TIH6 (OHARA). f = +45.3 mm.

L14 is a high-index dense flint positive meniscus. It partially offsets the negative power of L12 and L13 while contributing strong dispersive correction inside the front group. Its high index permits meaningful positive power without a thick element, and its low Abbe number gives Group 1 a controlled crown/flint balance rather than leaving chromatic correction entirely to the rear groups.

### Group 2 — Positive Variator and Image Stabilizer

Group 2 is the main positive variator group and contains the IS unit. The patent divides it into L2A, a single positive lens, and L2B, a cemented negative-positive doublet whose resultant power is positive.

#### L21 / L2A — Positive Meniscus IS Lens

nd = 1.48749, νd = 70.2. Glass: S-FSL5 (OHARA). f = +78.6 mm.

L21 is the single positive lens used for image stabilization. It is laterally displaced to shift the image in a direction substantially perpendicular to the optical axis. The patent's central design decision is to make the IS component a single lens, reducing the moving mass and drive load compared with a multi-lens stabilizer.

S-FSL5 is a low-index, low-dispersion crown. It should not be described as fluorite crystal. Its high νd is useful because a single decentered positive lens cannot internally achromatize its own lateral color; the glass choice reduces the chromatic penalty of using such a lightweight IS component.

#### L22-L23 / L2B — Cemented Positive Doublet

L22: nd = 1.84666, νd = 23.9. Glass: S-TIH53 (OHARA). Standalone f = -60.0 mm.  
L23: nd = 1.48749, νd = 70.2. Glass: S-FSL5 (OHARA). Standalone f = +21.9 mm.  
Cemented doublet focal length: +35.4 mm.

L2B is a high-dispersion negative lens cemented to a low-dispersion positive lens. The doublet's net power is positive, but its internal dispersion contrast is large. It corrects the second group's chromatic balance and offsets the residual color introduced by the single-lens IS component.

The thin L22 flint element provides the dispersive counter-power, while L23 supplies most of the positive refractive power. The strong cemented interface at R12 = +12.277 mm is a key chromatic-correction surface.

### Group 3 — Negative Compensator Doublet

#### L31-L32 — Cemented Negative Group

L31: nd = 1.63980, νd = 34.5. Glass: S-TIM27 (OHARA). Standalone f = -13.7 mm.  
L32: nd = 1.78472, νd = 25.7. Glass: S-TIH11 (OHARA). Standalone f = +22.0 mm.  
Cemented doublet focal length: -34.6 mm.

Group 3 is a net-negative cemented doublet and serves as the compensator. It moves toward the object as the lens zooms from wide to telephoto while the G2-G3 gap expands. This motion controls image-plane position and balances aberration variation through the zoom range.

The glass identifications are S-TIM27 and S-TIH11. S-NBH51 / S-TIH18-style assignments are not supported by the nd/νd pairs. L31's code is 640345, matching S-TIM27, while L32's code is 785257, matching S-TIH11. The positive element is still a dense flint by Abbe number; νd = 25.7 is not crown territory.

### Group 4 — Rear Relay and Field Group

Group 4 is the rearmost positive group. It contains a weak negative aspherized element followed by a stronger positive element. It is close enough to the image plane that it has strong leverage over field-dependent aberrations, including distortion, astigmatism, and field curvature.

#### L41 — Weak Negative Meniscus with Rear Asphere

nd = 1.58306, νd = 30.2. Material: POLYCARB qualified numerical polymer proxy; source composition and supplier unspecified. f = -212.0 mm.

L41 is a weak negative element. Its rear surface, Surface 19, is the only aspherical surface in the patent example. The printed numerical pair corresponds to the 583302 coordinate neighborhood, but does not identify a glass, polymer or chemistry. It does not match OHARA S-TIM28; current OHARA cross-reference data place S-TIM28 near code 689311, which is far from the stored prescription value. The 2026-10-31 follow-up enables the published MISC POLYCARB curve as a qualified numerical spectral proxy. Its nd difference +0.002409922 and νd difference −0.290815018 fit the existing guards, while the source pair remains unchanged. This curve does not establish polycarbonate chemistry in the selected example.

#### L42 — Positive Biconvex Rear Lens

nd = 1.48749, νd = 70.2. Glass: S-FSL5 (OHARA). f = +36.4 mm.

L42 supplies most of Group 4's positive power. Its very weak front radius and steep rear radius place much of the bending at the last medium-air interface, contributing to the exit-pupil and image-side relay geometry. The use of S-FSL5 again pairs a low-dispersion crown with flint elements elsewhere in the system.

## Glass Identification / Selection

The exact original defines Ni/νi at the d-ray in ¶0116 (PDF p. 23, printed p. 6). All eleven numerical pairs were checked again on 2026-10-30. The source names no historical supplier, melt or chemistry, and gives no position-specific numeric C/F/g line indices, partial dispersion or APD values. All eleven media now have qualified spectral proxies after the 2026-10-31 POLYCARB follow-up. N10 source chemistry remains unspecified. No unsupported per-lens override was present or added.

| Element(s)    |      nd |   νd | Compatible proxy / unresolved medium | Coordinate disposition    | Note                                                              |
| ------------- | ------: | ---: | ------------------------------------ | ------------------------- | ----------------------------------------------------------------- |
| L11           | 1.51633 | 64.1 | S-BSL7 (OHARA), BK7-class            | Compatible proxy          | Standard borosilicate crown match                                 |
| L12, L13      | 1.62299 | 58.2 | S-BSM15 (OHARA)                      | Compatible proxy          | Code 623582; S-BSM22 does not match                               |
| L14           | 1.80518 | 25.4 | S-TIH6 (OHARA)                       | Compatible proxy          | Dense flint, code 805254                                          |
| L21, L23, L42 | 1.48749 | 70.2 | S-FSL5 (OHARA)                       | Compatible proxy          | Low-dispersion crown, code 487702                                 |
| L22           | 1.84666 | 23.9 | S-TIH53 (OHARA)                      | Compatible proxy          | Heavy flint, code 847238                                          |
| L31           | 1.63980 | 34.5 | S-TIM27 (OHARA)                      | Compatible proxy          | Code 640345                                                       |
| L32           | 1.78472 | 25.7 | S-TIH11 (OHARA)                      | Compatible proxy          | Code 785257                                                       |
| L41           | 1.58306 | 30.2 | POLYCARB published MISC curve        | Qualified numerical proxy | Source chemistry unspecified; Δnd +0.00241; E-F3 remains rejected |

The numerical palette combines low-dispersion and high-dispersion coordinates for first-order chromatic balancing. Repeated compatible S-FSL5 proxies at L21/L23/L42 do not identify a historical supplier or chemistry. No fluorite, position-specific anomalous partial dispersion or production APO performance is established by the patent. L41 retains an unspecified source composition and uses the published POLYCARB curve only as a numerical proxy. The earlier obsolete HOYA E-F3-class candidate remains rejected and supplies no active curve.

## Focus Mechanism

The patent states that focusing can be performed by moving the first lens group. The production product page gives a closest focusing distance of 0.25 m at all focal lengths. The patent does not publish a finite-distance spacing table, so the data file uses a paraxial inferred model: Group 1 is translated objectward, represented by increasing D8 while the rear groups and image plane remain fixed for each zoom position.

| Zoom position | Infinity D8 | Inferred close-focus D8 at 0.25 m |    Travel |
| ------------- | ----------: | --------------------------------: | --------: |
| Wide          |   33.620 mm |                         38.244 mm | +4.624 mm |
| Mid           |   13.530 mm |                         17.916 mm | +4.386 mm |
| Tele          |    3.230 mm |                          7.872 mm | +4.642 mm |

These values are not patent data; they are data-file approximations used to make the focus slider behave consistently with Canon's published MFD.

## Aspherical Surface

The patent specifies one aspherical surface: Surface 19, the rear surface of L41. The patent equation is:

$$
X = \frac{(1/R)H^2}{1 + \sqrt{1 - (H/R)^2}} + AH^2 + BH^4 + CH^6 + DH^8 + EH^{10} + FH^{12}.
$$

There is no conic-constant term in the denominator. In the standard renderer convention, this is a spherical base with K = 0, plus even-order polynomial coefficients. For Numerical Example 2:

| Quantity       |        Value |
| -------------- | -----------: |
| Surface        |          19A |
| R              |  -437.245 mm |
| K              |            0 |
| A2 / patent A  |            0 |
| A4 / patent B  |   3.76648e-5 |
| A6 / patent C  |   3.00374e-8 |
| A8 / patent D  |  7.60709e-10 |
| A10 / patent E | -8.99719e-12 |
| A12 / patent F |            0 |

At the data-file clear semi-diameter of 8.0 mm, the polynomial departure from the base sphere is +165.3 µm. The total sag at 8.0 mm is +92.1 µm because the spherical base sag is negative while the polynomial departure is positive. The sign therefore shifts the rim imageward relative to the spherical base.

| Height | Polynomial departure |
| -----: | -------------------: |
| 4.0 mm |              +9.8 µm |
| 6.0 mm |             +50.9 µm |
| 8.0 mm |            +165.3 µm |

The surface sits close to the image plane, immediately before a nearly contacting positive rear element. This is an efficient location for field-dependent correction. Canon's product page describes the production lens as having a precision aspherical element; the patent placement indicates that the asphere also participates in rear-group field and distortion correction, not only axial spherical correction.

## Image Stabilization

The IS lens is L21, the second group's single positive L2A component. The patent explicitly describes image stabilization by moving L2A with a component perpendicular to the optical axis. The reason for using one lens is mechanical: lower moving mass, reduced actuator load, and faster response.

The patent aberration drawings for Example 2 include stabilization cases correcting a deflection inclination of 0.3°. At the computed telephoto EFL of 53.300 mm, this angular shake corresponds to a paraxial image displacement of:

$$
53.300 \tan(0.3^\circ) = 0.279\text{ mm}.
$$

The optical design is built around the ratio f2/f2A = 0.323. This keeps the IS lens strong enough to shift the image effectively, but weak enough that coma and lateral color from decentering remain manageable for a single-element stabilizer.

## Conditional Expressions

The patent defines nine conditional expressions. Values below use the transcribed prescription and independently computed thick-lens/group values.

| Cond. | Expression    | Computed | Patent Table 1 | Broad range | Result |
| ----- | ------------- | -------: | -------------: | ----------: | ------ |
| (1)   | f2/f2A        |    0.323 |           0.32 |     0.2-0.6 | Pass   |
| (2)   | LP/fw         |    0.562 |           0.56 |     0.4-1.0 | Pass   |
| (3)   | d2A/fw        |    0.102 |           0.10 |    0.05-0.2 | Pass   |
| (4)   | V2A           |     70.2 |           70.2 |       55-85 | Pass   |
| (5)   | (Vp - Vn)/V2A |    0.660 |           0.59 |     0.4-0.7 | Pass   |
| (6)   | ft/fw         |    2.850 |           2.85 |     2.4-4.0 | Pass   |
| (7)   | fw/bfw        |    0.530 |           0.53 |   0.30-0.70 | Pass   |
| (8)   | d23w/fw       |    0.230 |           0.23 |   0.15-0.40 | Pass   |
| (9)   | f4/fw         |    2.303 |           2.30 |     1.5-2.6 | Pass   |

Two patent-table issues require caution. First, expression (5) computes to 0.659544 from the patent's own values Vp = 70.2, Vn = 23.9, and V2A = 70.2; Table 1 lists 0.59. The computed value still satisfies the broad condition, although it is slightly above the narrower preferred upper value of 0.65 printed in paragraph 0114. Second, ¶0092, preferred form ¶0114 and Table 1 all print condition (9) as fw/f4, while the value 2.30 matches the inverse f4/fw=2.302328. Literal fw/f4 is 0.434343. The verbal explanation ¶0113 describes the two focal lengths but does not justify silently replacing the printed formula. These definition/table discrepancies remain in `source.errata`; no optical value is changed. A mismatch with a preferred condition is not itself proof of an incorrect numerical prescription.

## Petzval and Field Curvature

Using the project convention, the surface-by-surface Petzval sum is:

$$
P = \sum \frac{\phi_i}{n_i n'_i}, \quad \phi_i = \frac{n'_i - n_i}{R_i}.
$$

For the 20 refracting surfaces plus one stop row in Numerical Example 2, the verified sum is:

> P = +0.002620 mm^-1, corresponding to a Petzval radius of +381.6 mm under this sign convention.

The sign is positive under the formula above. The magnitude remains modest: at the 13.6 mm APS-C corner image height used in the patent plots, the Petzval-only sag estimate is approximately h²/(2R) = 0.242 mm before astigmatic and aspherical correction.

## Data-File Implementation Notes

The data file transcribes all refracting surfaces through Surface 21. The selected source lists no camera-side cover plate, filter or separate cement-index medium; none is invented. The aperture stop is represented as `STO` between Surfaces 13 and 15. The variable gaps are D8, D14, D17, and the computed back focus. D8 is both a zoom and inferred-focus variable; D14, D17, and the back focus are zoom-only in the delivered data model.

The patent omits clear diameters. The 2026-10-30 heights now follow native Fig. 4 optical rims with explicit uncertainty, rather than treating the production filter thread as an optical rim. Surface 4 retains clear sd=12.2 mm with a 17.2 mm outer shoulder. Surface 19A and Surface 20 retain 8.0 mm clear caps across the printed 0.03 mm air gap; their outer shoulders improve the blank contour without restoring a larger transmitted aperture. These remain separate air-facing surfaces, not an invented cemented or hybrid layer.

## Verification Summary

The following quantities were independently re-run with a Python paraxial ray trace using y / n·u coordinates:

| Check                               | Result                                            |
| ----------------------------------- | ------------------------------------------------- |
| EFL at 18.69 mm setting             | 18.693 mm                                         |
| EFL at 32.08 mm setting             | 32.076 mm                                         |
| EFL at 53.27 mm setting             | 53.300 mm                                         |
| Wide back focus                     | 35.266 mm                                         |
| Mid back focus                      | 46.875 mm                                         |
| Tele back focus                     | 66.284 mm                                         |
| Group focal lengths                 | G1 -27.281, G2 +25.406, G3 -34.629, G4 +43.031 mm |
| IS subcomponent focal length        | L2A +78.625 mm                                    |
| L2B focal length                    | +35.427 mm                                        |
| Petzval sum                         | +0.002620 mm^-1                                   |
| Surface 19A departure at h = 8.0 mm | +165.3 µm                                         |

Calculated EFLs remain within 0.03 mm of the source table. Accumulated source rounding is a plausible, unconfirmed explanation of the small residuals; the printed 18.69/32.08/53.27 values now supply station labels and catalog design endpoints rather than substituting computed EFLs.

## 2026-10-30 Original Shape, Glass and Runtime Review

The exact local original was checked directly: Numerical Example 2, PDF pp. 24–25
(printed pp. 7–8), Fig. 4 / PDF p. 5 (sheet 4), Figs. 5A/B / PDF p. 6 and Table 1 /
PDF p. 26. The table is interleaved across columns: R19/D19 continues at ¶0119 on
PDF p. 25; the R20/R21 block and aspheric coefficients are on PDF p. 24. All 21
surface rows, 17 fixed distances, three zoom-gap schedules, eleven index/Abbe
pairs and the six source A–F coefficients were checked. Project K=0 implements
the printed spherical-base equation. No R/d, asphere, computed image gap or
reconstructed focus travel is changed.

Native Fig. 4 is a 2560×3300 raster at **300 ppi**. Rotation preserves the source
pixels; enlarged displays add no native resolution. Its approximately 1490 px
first/last-vertex span corresponds to 81.23 mm, about **18.35 px/mm**. Optical-rim
uncertainty is about **±0.6 mm**, rising to **±0.8 mm** at the front blanks.
Leaders, unit brackets, rays and mechanical/filter dimensions were excluded.

| Surfaces     | Prior clear sd  | Adopted clear sd | Outer shoulder | Figure disposition                          |
| ------------ | --------------- | ---------------- | -------------- | ------------------------------------------- |
| 1 / 2        | 21 / 19         | 20.3 / 19        | S2: 20.3       | Front positive blank                        |
| 3 / 4        | 15.5 / 12.2     | 17.2 / 12.2      | S4: 17.2       | Resolved tall rear shoulder on L12          |
| 5 / 6        | 13 each         | 12.6 each        | none           | L13 optical rims                            |
| 7 / 8        | 14.2 / 14       | 12.6 each        | none           | L14 blank                                   |
| 9 / 10       | 8.2 each        | 7.1 each         | none           | Single IS element                           |
| 11 / 12 / 13 | 8.2 / 8.6 / 8.6 | 7.5 each         | none           | L2B common blank and optical bond           |
| 15 / 16 / 17 | 8.4 / 8.7 / 8.7 | 6.5 each         | none           | L3 common blank and optical bond            |
| 18 / 19A     | 8 each          | 8.5 / 8          | S19A: 8.5      | L41 front blank, rear optical cap preserved |
| 20 / 21      | 8 / 9.8         | 8 / 9            | S20: 9         | L42 blank, front optical cap preserved      |

All values are millimeters: 16 clear caps change and four free-end shoulders are
added. The bonded interfaces remain optical curves, with no opaque lands or
unsupported equal-height blocks. No inferred cut, resin wing or mechanical flange
is introduced. S19A/S20 remain two separate air-facing surfaces across D19=0.03 mm.

Full 17.2 mm optical sd on S4 exceeds its 14.601 mm spherical radius and fails
both slope and gap guards. The retained 12.2 cap plus outer 17.2 shoulder gives
7.140522 mm maximum sag intrusion across D4=7.99 mm, below the unchanged 7.191 mm
guard allowance, with 0.849478 mm minimum physical separation. Raising the clear
cap to 12.37 mm to clear the reconstructed finite corner is rejected: the land
intrusion becomes 7.405 mm, above that guard. The shoulder improves the outline
without restoring a larger optical aperture or clearing that finite field.

At S19A/S20, full 8.5 mm optical caps give 0.041760 mm intrusion across 0.03 mm,
physically overlapping by 0.011760 mm. Retained 8 mm caps with the outer shoulders
give 0.015376 mm intrusion and **0.014624 mm** physical separation, within the
unchanged 0.027 mm guard allowance. Source R/d and the positive aspheric departure
are preserved. No guard or tolerance is relaxed.

The source states **18.69 / 32.08 / 53.27 mm**; these now supply station labels and
catalog endpoints. Figs. 5A/B publish **f/3.63 / f/5.86**, correcting the old retail
endpoint targets 3.5 / 5.6. The retained middle **f/4.5** is explicitly unpublished;
its geometry is source-tabulated, its aperture target is a reconstruction.
The current paraxial rule gives f/3.63 / 4.5 / 5.86; independent real-beam values
are f/3.658751 / 4.562802 / 5.967194. No physical iris dimensions are published.
These source/metadata corrections are separate from figure-height fitting.

All ten active catalog curves remain the same qualified spectral proxies, and
N10 stays an unmatched optical medium. Source ¶0116 defines the d-ray reference;
¶0066 identifies the d/g/F plot lines but gives no position-specific numerical
line indices or partial dispersion. No APD evidence or per-lens spectral override
is supplied. Supplier, melt and historical chemistry remain unspecified. The
June 25 unmatched-medium conclusion is reused with its actual date; the old
obsolete-glass candidate is not treated as a fresh source identification.

Surface and image-circle checks pass. All 65 sampled zoom positions pass aperture
checks within 3% and chief-field coverage reaches ≥99% of the 14.175 mm APS-C
corner. The source plots use 13.6 mm; its height was separately checked at the
three tabulated geometries (middle case uses the inferred aperture): **873 rays**,
all chiefs and axial bundles clear, with 93 ordinary off-axis clips.

The 65 zoom × seven focus × three field × 97 pupil actual-conjugate census traces
**132,405 rays**. All real axial bundles clear, all finite conjugates are positive,
and there are zero aim or intersection failures. It records 10,661 ordinary
off-axis clips and three clipped format-corner chiefs at the retained S4 cap:
zoom/focus 0/0.75, 0/1 and 0.015625/1. The actual close endpoints remain 250 mm
from the image plane; their inferred travel is not source-published focus data.

A separate positive-object supplement at image-plane distance 250 mm / focus
also traces **132,405 rays**, all axial bundles clear, with 10,821 ordinary
off-axis clips, the same three restricted corner chiefs and no aim/intersection
failures. These positive objects need not be focused. Public field/chief/pupil
solvers use each current state's iris; a small image-height search-bracket margin
prevents numerical endpoint truncation without changing the target or geometry.

The 65-position infinity first-order census reaches **−3.027618 mm** BF displacement
at zoom 0.78125 (EFL 41.125274 mm, computed BF 54.765041 mm, modeled image gap
57.792659 mm). Linear interpolation is illustrative, not a focus-preserving zoom
cam. Nine actual SVG views were compared with native Fig. 4; the 65 zoom × 21 focus
contour census has 1,365 sets of eleven finite, closed, connected paths, zero
hidden renderer trimming and zero diagnostic-clone geometry/iris difference.
Only centered IS is checked; transverse stabilizer travel, continuous 3D clearance
and identity with a production prescription remain unvalidated.

## Sources

1. US 2007/0058265 A1, Takeshi Nishimura / Canon Kabushiki Kaisha, "Zoom Lens and Image-Pickup Apparatus Having the Same," Numerical Example 2.
2. Canon Camera Museum, "EF-S18-55mm f/3.5-5.6 IS," product page: https://global.canon/en/c-museum/product/ef394.html
3. OHARA Corporation / OHARA GmbH optical-glass data sheets and cross-reference tables for S-BSL7, S-BSM15, S-TIH6, S-FSL5, S-TIH53, S-TIM27, and S-TIH11.
4. HOYA Group Optics Division, Glass Cross Reference Index: https://www.hoya-opticalworld.com/english/products/crossreference.html

## 2026-10-31 — Published POLYCARB numerical proxy follow-up

US 2007/0058265 A1, Numerical Example 2, PDF page 24 / printed 7 R18/N10; paragraph 0116, PDF page 23 / printed 6, defines the d-ray reference. The source pair, geometry and original review dates are unchanged; this is catalog-source work, not a repeat shape inspection. The actual June 25 unmatched-source finding and October 30 review remain dated history. The new curve does not prove the old E-F3 suggestion or identify a historical material.

The permission-bearing [RadiantZemax MISC.AGF archival copy](https://github.com/uasal/zmx2yaml/blob/36f3cd24da467375821b0a66698274fd84e19f6d/AGF_files/misc.agf) publishes a replayable POLYCARB Schott polynomial, cited to _Handbook of Optics Vol. II_. The [official Ansys source table](https://ansyshelp.ansys.com/public/Views/Secured/Zemax/v251/en/OpticStudio_User_Guide/OpticStudio_Help/topics/Glass_Catalog_Sources.html) independently confirms that attribution. This is a published numerical material curve, not a direct material-manufacturer fetch or proof of the selected patent medium's chemistry, formulation, supplier or Canon process. The handbook coefficient table was not directly inspected; its chapter/page is not invented.

The native row uses $n^2=a_0+a_1\lambda^2+a_2\lambda^{-2}+a_3\lambda^{-4}+a_4\lambda^{-6}+a_5\lambda^{-8}$, with wavelength in µm, reference temperature 20 °C and valid range 0.365–1.014 µm. At C/d/F/g it evaluates 1.579863774 / 1.585469922 / 1.599438695 / 1.611520588; computed νd is 29.909184982. Its own-row residuals, −0.00000007757 in nd and −0.00000001834 in νd, pass strict 0.00003/0.11 guards. All 1,001 sampled wavelengths are finite and normally dispersive. Relative to the source 1.583060/30.2 pair, the comparatively large nd difference +0.002409922 and νd difference −0.290815018 fit the existing ±0.003/±2 compatibility windows. The runtime retains the authored source index; the curve supplies only qualified spectral variation. No per-lens C/F/g indices, partials, coefficients or new APD badge are authored.

L41 / N10 now uses this qualified curve; current spectral coverage is 11/11 media. All source pairs, published values, source errata, aperture/focus/zoom controls, physical gaps and shape conclusions remain unchanged.
