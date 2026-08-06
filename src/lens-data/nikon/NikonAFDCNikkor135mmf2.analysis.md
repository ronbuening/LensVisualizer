## Patent Reference and Design Identification

**Patent:** US 4,908,639 A
**Application Number:** US 07/334,157
**Priority:** April 11, 1988 (Japan 63-88454)
**Filed:** April 6, 1989
**Granted:** March 13, 1990
**Inventor:** Masaaki Yanagisawa
**Assignee:** Nikon Corporation
**Title:** *Optical System Having a Variable Out-of-Focus State*
**Embodiment analyzed:** Example 2 / Second Embodiment

The prescription transcribes Example 2 of US 4,908,639 A without dimensional scaling. The patent identifies the example
as a 135 mm, f/2 system with an 18° full field, seven elements in six groups, a positive forward assembly, a stop, and a
positive three-element rear group. The prescription is correlated with the Nikon AF DC-Nikkor 135mm f/2 optical family; the data-file display
identity uses the later f/2D variant. The patent does not name a commercial product, so the identification remains a correlation
rather than a claim of manufacturer-confirmed patent assignment. [1]

Several independent characteristics support the fixed correlation:

1. Example 2 has the same 135 mm focal-length class, f/2 aperture, and 18° full field as the production lens.
2. Both use seven elements in six groups, with a cemented front pair and a long air space before the following elements.
3. The patent focuses by translating the rear three-element group; Nikon describes the production lens as a rear-focus
   design in which only the rear three elements move.
4. Both vary the separation between the cemented positive front group and the following positive-negative pair to alter
   spherical aberration while compensating the image plane with the rear group.
5. The patent priority, filing, and grant dates precede Nikon's 1991 introduction of the original AF DC 135mm f/2S.

Nikon's retrospective describes the commercial optical form as a modified Gaussian with seven elements in six groups,
a cemented front pair, rear-three-element focusing, and Defocus-image Control. The later D-version manual retains the
same focal length, aperture, 18° field, 7/6 construction, Nikon F mount, and rear-focus designation. [2][3]

The source prescription is retained at its native d-line reference, 587.6 nm. No numerical patent value was corrected.
Rendered patent pages were used where OCR dropped minus signs, digits, decimal points, or symbols; the rendered front page
also establishes the inventor's family name as Yanagisawa. The 0.0001 mm total-track difference in the printed 3-pos row
is retained as source rounding rather than silently normalized.

## Optical Architecture

The model is an all-spherical, modified-Gaussian long-focus design. Its seven elements form six air-separated groups:

- **G1:** a positive cemented doublet, L1-L2;
- **G2:** an air-spaced positive-negative pair, L3-L4;
- **STO:** the aperture stop between G2 and the rear group;
- **GR:** a positive rear group of three air-spaced elements, L5-L7.

G1 and G2 together form the patent's positive forward group GF. Computed as isolated first-order group matrices in the
corrected infinity configuration, G1 has EFL +99.864818 mm, G2 has EFL -100.549211 mm, GF has EFL +218.753033 mm, and
GR has EFL +105.245726 mm. These are standalone group powers, not additive in-situ surface contributions. Their axial
separation and principal-plane locations are essential to the complete system's EFL of 134.820643667 mm.

The positive and negative powers in G1 and G2 nearly balance in magnitude, leaving a relatively weak positive forward
assembly ahead of the stop. GR then supplies a strong positive relay and the moving focus function. The architecture is
therefore distinguished less by a conventional compact long-focus shortening ratio than by the division of a Gaussian
form into a fixed front collector, a movable aberration-control pair, and a light rear focusing group.

Using the adopted structural criterion, the prescription is not a telephoto-form system: the corrected-infinity
first-surface-to-image track is 158.7332 mm, giving TL/EFL = 1.177366. It is also not retrofocus because the published
61.1450 mm back focal distance is well below the 134.820643667 mm EFL.

Figure 4 fixes the stop's order between G2 and GR but supplies neither its coordinate nor its diameter. The data model
places the stop 8.0000 mm behind the S7 vertex and assigns the remaining 29.2882 mm of the published infinity `d7` gap to
the stop-to-S8 spacing. This split is a geometry-derived modeling inference: a stop at the S7 vertex would intersect the
strongly curved S7 surface at the physical radius required for f/2. The inferred stop station is held fixed while G2 moves
around it during DC adjustment. Its semi-diameter, 19.032357 mm, produces an entrance-pupil radius of 33.705160 mm and a
modeled f-number of 2.000000030.

The patent publishes no clear apertures. All surface semi-diameters are inferred from the modeled f/2 axial bundle and
the viewer's 0.6-field bundle across the four published states, then constrained by edge thickness, actual rim slope,
shared-gap intrusion, and the qualitative proportions of Figure 4. They are model geometry, not source prescription
values. The production manual separately lists a protective glass; it is absent from Example 2's active prescription and
is excluded, as are mechanical components. No dummy optical planes are present. No scaling was applied, and the design
contains no aspheric surfaces or aspheric coefficients requiring transformation.

## Element-by-Element Analysis

The focal length stated for each element below is its thick-lens focal length when isolated in air. It does not represent
the element's in-situ contribution inside the complete lens.

### L1 - Biconvex Positive, front member of D1

**nd = 1.620409, νd = 60.14. Glass: J-SK16 (HIKARI; coordinate-compatible current-catalog match). Standalone f = +85.608194 mm.**

L1 supplies the principal positive power of the cemented front doublet. Its strongly convex first surface accepts the
large f/2 entrance bundle, while its much weaker rear curvature forms the cemented interface with L2. The relatively high
Abbe number makes it the crown-like member of the pair.

Nikon's retrospective attributes improved longitudinal chromatic correction to the cemented front configuration. That
statement supports an achromatizing role for D1, but it does not establish the present-day J-SK16 designation as the
historical production melt. [2]

### L2 - Biconcave Negative, rear member of D1

**nd = 1.648311, νd = 33.75. Glass: S-TIM22 (OHARA special-order; code 648338 coordinate match). Standalone f = -537.323355 mm.**

L2 is a weak negative element despite its biconcave form because both radii are long. Cementing it to L1 introduces a
high-dispersion negative partner without an intervening air surface. The isolated L1 and L2 focal lengths should not be
combined arithmetically; the verified cemented-doublet net EFL is +99.864818 mm.

OHARA’s special-order catalog lists S-TIM22 with the exact d-line code `648338`, `nd = 1.647689`, and `νd = 33.79`.
Relative to the patent row, the residuals are -0.000622 in index and +0.04 in Abbe number. The data file therefore
uses S-TIM22 as a coordinate-and-code match and carries its C-, F-, and g-line data, while making no claim that OHARA
supplied Nikon’s historical production melt. [5]

### L3 - Positive Meniscus, first element of G2

**nd = 1.713000, νd = 53.93. Glass: J-LAK8 (HIKARI; coordinate-compatible current-catalog match). Standalone f = +105.814046 mm.**

L3 begins the air-spaced second group. Its positive meniscus power partly reconverges the bundle after the long `d3` gap
from G1. That gap is the primary DC variable: increasing `d3` moves G2 imageward relative to fixed G1 and produces the
patent's under-corrected state; decreasing it moves G2 objectward and produces the over-corrected state.

The element's role is therefore inseparable from its position. Its isolated positive focal length does not describe the
net behavior of G2, which becomes negative after L4 is included.

### L4 - Negative Meniscus, second element of G2

**nd = 1.749501, νd = 35.19. Glass: J-LAF7 (HIKARI; coordinate-compatible current-catalog match). Standalone f = -45.544000 mm.**

L4 is the strongest negative standalone element in the prescription. Together with L3 it gives G2 an isolated EFL of
-100.549211 mm. The combination causes the marginal-ray height and vergence entering the stop region to respond strongly
to small changes in `d3`, which is the mechanical basis of the DC function described by the patent.

Its rear surface S7 has the greatest modeled rim-slope angle, 39.388595°, and its substantial positive sag is the reason
the inferred stop cannot coincide with the S7 vertex at the required aperture radius.

### L5 - Negative Meniscus, leading element of GR

**nd = 1.688930, νd = 31.08. Glass: J-SF8 (HIKARI; coordinate-compatible current-catalog match). Standalone f = -59.292864 mm.**

L5 is the negative leading member of the rear focusing group. Its placement after the long stop-to-S8 air space begins a
three-element relay whose net power remains positive. The negative first member helps control the vergence delivered by
the forward assembly before the two positive rear elements restore convergence.

Because the entire L5-L7 assembly translates for focusing and DC image-plane compensation, L5's in-situ effect changes
with conjugate and group position even though its surface prescription is fixed.

### L6 - Positive Meniscus, central element of GR

**nd = 1.766840, νd = 46.80. Glass: J-LASFH2 (HIKARI; coordinate-compatible current-catalog match). Standalone f = +88.382325 mm.**

L6 is a high-index positive meniscus separated from L5 by 7.0000 mm. It restores much of the convergence removed by L5
while retaining a compact five-millimeter center thickness. The air separation allows the pair to act as more than a
simple cemented achromat and contributes to the rear group's principal-plane placement.

Its current-catalog coordinate match supplies explicit C-, F-, and g-line indices to the data model, but those values are
catalog-derived annotations rather than patent-published spectral data.

### L7 - Biconvex Positive, final element of GR

**nd = 1.796681, νd = 45.37. Glass: J-LASF017 (HIKARI catalog equivalent to patent 797454; production supplier unspecified). Standalone f = +94.683964 mm.**

L7 completes the rear group with positive power on both surfaces and provides the final convergence toward the image
plane. L5, L6, and L7 together have an isolated group EFL of +105.245726 mm. The group value, rather than the individual
standalone focal lengths, governs the rear-focus travel and the image-plane compensation required by the DC movement.

HIKARI J-LASF017 differs from the patent row by `Δnd = −0.001681` and `Δνd = −0.06`. It is used as a
coefficient-backed optical equivalent while the model preserves the patent coordinates and makes no production-supplier claim.

## Glass Identification and Selection

The patent publishes only d-line refractive indices and Abbe numbers. The glass names in the data file are present-day
catalog coordinate matches used for identification and spectral modeling; they are not claims about Nikon's historical
supplier or melt designation. Current HIKARI coordinates closely reproduce L1 and L3-L6. The OHARA special-order
catalog supplies an exact six-digit-code match for L2; J-LASF017 supplies the closest compatible HIKARI equivalent for L7. [4][5]

| Element | Patent nd / νd | Data-file glass annotation | Catalog status | Explicit line data in model |
|---|---:|---|---|---|
| L1 | 1.620409 / 60.14 | J-SK16 | Coordinate-compatible current HIKARI match | nC, nF, ng, dPgF |
| L2 | 1.648311 / 33.75 | S-TIM22 (OHARA special-order; code 648338) | Exact six-digit code; coordinate-compatible | nC, nF, ng, dPgF |
| L3 | 1.713000 / 53.93 | J-LAK8 | Coordinate-compatible current HIKARI match | nC, nF, ng, dPgF |
| L4 | 1.749501 / 35.19 | J-LAF7 | Coordinate-compatible current HIKARI match | nC, nF, ng, dPgF |
| L5 | 1.688930 / 31.08 | J-SF8 | Coordinate-compatible current HIKARI match | nC, nF, ng, dPgF |
| L6 | 1.766840 / 46.80 | J-LASFH2 | Coordinate-compatible current HIKARI match | nC, nF, ng, dPgF |
| L7 | 1.796681 / 45.37 | J-LASF017; patent 797454 | Coordinate-compatible HIKARI equivalent; supplier unspecified | Catalog power-series model |

The explicit `nC`, `nF`, `ng`, and `dPgF` fields for the six catalog-matched rows are copied from the cited HIKARI and
OHARA datasets after round-trip checks against the stored d-line coordinates. They improve runtime dispersion resolution
for those elements, while L7 uses the catalog power-series model at runtime. None of these classifications establishes
the production supplier or historical melt. The evidence does not support an APO designation or a general anomalous-dispersion claim.

The principal chromatic strategy visible from the prescription is conventional pairing: the higher-Abbe positive L1 is
cemented to the lower-Abbe negative L2, while the remaining positive and negative powers distribute higher- and
lower-dispersion glasses through G2 and GR. Nikon specifically identifies the cemented front pair as beneficial to
longitudinal chromatic correction. [2]

## Focus Mechanism

The patent and production description use rear focusing. G1 and G2 remain fixed during ordinary corrected focusing, while
the complete L5-L7 rear group moves objectward from infinity to the published short-distance state. Nikon's production
manual identifies the commercial mechanism as Nikon Rear Focusing and specifies a 1.1 m minimum indicated focus distance.
The modeled patent state is different: its object-to-image-plane distance is 4.0967736 m and its magnification is
β = -0.0333. The data file does not reconstruct the unreported production 1.1 m internal spacings. [1][3]

From corrected infinity to the patent's corrected close state, GR moves 6.8090 mm objectward. The published total `d7`
gap decreases by the same amount, from 37.2882 to 30.4792 mm, while back focus increases from 61.1450 to 67.9540 mm.
The image-plane station remains fixed because the rear-group translation is balanced by the rear air space.

| Published state | Condition | d3 (mm) | Total d7 (mm) | Bf (mm) |
|---|---|---:|---:|---:|
| 1-pos | Infinity, corrected | 10.0000 | 37.2882 | 61.1450 |
| 2-pos | β = -0.0333, corrected | 10.0000 | 30.4792 | 67.9540 |
| 3-pos | β = -0.0333, under-corrected | 10.2000 | 30.6648 | 67.5683 |
| 4-pos | β = -0.0333, over-corrected | 9.9000 | 30.3875 | 68.1457 |

The four rows are source-published states. The viewer, however, presents continuous focus and DC controls. It linearly
interpolates corrected focus between 1-pos and 2-pos, then layers the published close-state DC spacing deltas onto the
current focus position. Intermediate focus values, DC-at-infinity, and mixed focus×DC positions are therefore a
mechanism-constrained visualization reconstruction, not a patent-published two-dimensional motion table. The inferred
stop remains at a fixed axial station throughout this reconstruction.

## Defocus-Image Control Mechanism

The patent varies the spacing between positive G1 and negative G2 to alter spherical aberration and coma. It also permits
astigmatism to vary with those changes so that the marginal image surface follows the altered central best-focus position.
GR then shifts to restore the image plane. This differs from an ordinary soft-focus arrangement that merely leaves the
main subject globally softened; the stated aim is to preserve a sharp in-focus subject while changing the foreground or
background defocus distribution. [1]

Using imageward motion as positive, the verified close-state movements relative to 2-pos are:

| DC state | G2 shift | GR shift | Optical result |
|---|---:|---:|---|
| R / under | +0.2000 mm | +0.3856 mm | Under-corrected spherical aberration |
| 0 / sharp | 0 | 0 | Corrected spherical aberration |
| F / over | -0.1000 mm | -0.1917 mm | Over-corrected spherical aberration |

The under-corrected GR shift is +0.3856 mm from the printed `d3` and `d7` rows. The accompanying `Bf` change
implies +0.3857 mm of image-plane compensation; the 0.0001 mm difference is the retained independent rounding
residue in the patent table.

The direction labels follow Nikon's production convention. Turning the ring toward R prioritizes softer background
defocus and corresponds to under-correction; turning it toward F prioritizes foreground defocus and corresponds to
over-correction. Nikon also instructs that the DC ring be positioned before focusing because changing the ring after
focus shifts the subject plane. [2][3]

The patent's 3-pos and 4-pos rows establish exact close-state endpoints, but they do not define the production ring's full
aperture-number scale or its motion at every focus distance. The model therefore uses normalized R-under / center-sharp /
F-over endpoints rather than claiming a mechanical calibration to every engraved DC-ring value.

## Conditional Expressions

The patent constrains the balance of G1, G2, the complete system, and GR. The verified values below use the isolated group
EFLs and the complete corrected-infinity EFL calculated from the final data arrays.

| Patent condition | Verified value | Patent Table 3 | Result |
|---|---:|---:|---|
| `0.5 < |f2/f| < 1.0` | 0.745800 | 0.74 | Pass |
| `0.5 < |f1/f2| < 1.5` | 0.993193 | 0.99 | Pass |
| `0.7 < fR/f < 0.9` | 0.780635 | 0.78 | Pass |

The small differences from Table 3 are consistent with the patent rounding the ratios to two decimal places. The first
condition keeps G2 sufficiently strong for useful aberration change with small motion; the second balances G1 and G2;
the third limits the rear-focus travel and the aberration change introduced during focusing. [1]

## Verification Summary

The numerical checks were rerun from the final TypeScript `elements`, `surfaces`, focus `var`, and DC-control arrays.
Sequential height/reduced-angle tracing, a direct basis-ray trace, and an independent height/slope ABCD construction agree
to a maximum matrix difference of 2.842 × 10^-14.

| Quantity | Verified result | Source comparison |
|---|---:|---:|
| Corrected-infinity EFL | 134.820643667 mm | Patent headline 135 mm |
| Corrected-infinity BFL | 61.146066241 mm | Published Bf 61.1450 mm |
| Modeled wide-open f-number | 2.000000030 | Patent FN = 2 |
| Corrected-infinity total track | 158.7332 mm | Sum of published spacings |
| Finite-conjugate Bf residual | 0.000906-0.000986 mm | Within source precision |
| Finite-conjugate β residual | at most 0.000100142 | Published β = -0.0333 |
| Minimum modeled element edge thickness | 1.016321 mm | Positive at all checked elements |
| Maximum actual rim-slope angle | 39.388595° | Below current geometric limit |
| Maximum shared-gap intrusion fraction | 0.891823908 | Below 0.90 policy limit |
| Minimum non-stop traced-ray clearance | 0.271557 mm | Positive across published anchors |

A 25-position focus×DC geometry grid also retained non-negative spacings and stayed within the shared-gap policy. The
containment test covers the viewer's default 0.6-field bundle, not a claim that the full 9° semi-field is mechanically
unvignetted at every pupil coordinate. The first-order Petzval sum is +0.001059368 mm^-1, whose algebraic reciprocal is
+943.959 mm in the adopted sign convention; this is not a prediction of the optimized tangential or sagittal best-focus
surface after astigmatism and higher-order aberrations.


## Design Heritage and Context

Nikon describes the production lens as the conjunction of two earlier developments: the rear-three-element focusing
concept used in the AF 85mm f/1.8 and a new method of varying the spacing within the front Gaussian assembly to control
defocus rendering. The original AF DC 135mm f/2S was introduced in 1991, followed by the D-version represented by the
validated data-file name and manual. [2][3]

The prescription's historical distinction is therefore mechanical and aberrational rather than dependent on aspheres,
ED labels, or a compact telephoto-form ratio. It obtains variable defocus behavior with spherical elements, small axial
motions, a fixed image plane, and a conventional multi-glass Gaussian architecture.

## Sources

1. [Masaaki Yanagisawa, *Optical System Having a Variable Out-of-Focus State*, US 4,908,639 A, Example 2, Fig. 4 and Tables 2-3](https://patents.google.com/patent/US4908639A/en)
2. [Nikon, *The Thousand and One Nights No. 32: Ai AF DC Nikkor 135mm F2S*](https://imaging.nikon.com/imaging/information/story/0032/)
3. [Nikon, *AF DC-Nikkor 135mm f/2D User's Manual*](https://downloadcenter.nikonimglib.com/en/products/306/AF_DC-Nikkor_135mm_f_2D.html)
4. [HIKARI Glass, *Optical Glass Catalog*](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf)
5. [OHARA, *Optical Glass Data: Special-Order Glass, Six-Decimal CSV*](https://www.ohara-inc.co.jp/en/product/catalog/)
