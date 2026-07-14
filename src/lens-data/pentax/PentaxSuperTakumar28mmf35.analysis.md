## Patent Reference and Design Identification

**Patent:** US 3,506,339\
**Filed:** September 8, 1967\
**Priority:** September 10, 1966 (Japan 41/59,723)\
**Granted:** April 14, 1970\
**Inventor:** Tomokazu Kazamaki\
**Assignee:** Asahi Kogaku Kogyo Kabushiki Kaisha\
**Title:** _Compact Retrofocus Wide Angle Objective Lens System_\
**Embodiment analyzed:** Table 1, the patent's sole numerical example

The patent gives one seven-element prescription normalized to $F=100\,\text{mm}$ at $f/3.5$. The numerical table and
claim specify fourteen spherical refracting surfaces, seven air-separated elements, and the complete set of axial
thicknesses and refractive data. The companion data file applies a uniform scale factor of $0.28$, producing a paraxial
effective focal length of $28.0002\,\text{mm}$ [1, Table 1 and claim 1].

The most probable production match is the second optical version of the Super-Takumar 28mm f/3.5, commonly assigned
Asahi product number 43871. The identification is strong but remains inferential because the patent does not name a
commercial product.

1. The patent prescribes a 7-element/7-group, all-spherical retrofocus objective. Collector documentation distinguishes
   the later 49 mm-filter version from the earlier 58 mm-filter lens and records a redesigned 7/7 optical arrangement.
2. The Japanese priority date is September 1966, coincident with the documented introduction period of the later optical
   version.
3. The patent aperture is $f/3.5$. Figure 2(d) extends to a half-field of $37^\circ15'$, equivalent to a full field of
   $74^\circ30'$. Period manufacturer literature lists 28 mm, $f/3.5$, seven elements, a $75^\circ$ field, minimum
   aperture $f/16$, and a minimum focus of $15\tfrac{3}{4}$ inches for the Super-Takumar 28mm [2, p. 12].
4. The assignee is Asahi Kogaku, the manufacturer of Pentax cameras and Takumar lenses.

The patent's numerical prescription is authoritative. Figure 1 is schematic, and the patent gives no numerical aperture-
stop station within the L4-L5 air gap. The data implementation therefore places the stop at the midpoint of that gap as
an explicit modeling assumption.

## Optical Architecture

The design is an inverted-telephoto, or retrofocus, wide-angle objective with seven elements in seven groups. All
fourteen refracting surfaces are spherical. The patent identifies L1-L2 as the front negative group, L3 as an unusually
thick zero- or low-power lens, and L4-L7 as the principal converging portion [1, col. 2, lines 11-58; col. 3, lines 8-43].
For power bookkeeping, L1-L3 remains net negative:

| Subsystem       | Patent-scale focal length | Production-scale focal length |
| --------------- | ------------------------: | ----------------------------: |
| L1-L2           |     $-189.823\,\text{mm}$ |          $-53.151\,\text{mm}$ |
| L1-L3           |     $-218.620\,\text{mm}$ |          $-61.214\,\text{mm}$ |
| L4-L7           |     $+108.405\,\text{mm}$ |          $+30.353\,\text{mm}$ |
| Complete system |     $+100.001\,\text{mm}$ |         $+28.0002\,\text{mm}$ |

The infinity back focal distance is $135.555\,\text{mm}$ at patent scale, or $37.9555\,\text{mm}$ after scaling. Thus
$\mathrm{BFD}/\mathrm{EFL}=1.3555>1$, satisfying the optical criterion for a retrofocus system. This ratio is independent
of the mechanical mount datum and establishes that the rear focal clearance exceeds the effective focal length.

L3 is nearly afocal as a standalone element but is optically consequential. Its $57.00\,\text{mm}$ patent-scale center
thickness supplies much of the axial separation required for the long back focus, while its two refracting surfaces
participate in aberration control. The patent expressly ties L3's thickness, the objectward curvature of its front
surface, and the surrounding air spaces to the compromise among back focus, front diameter, and correction [1, col. 2,
lines 37-58].

The aperture stop lies somewhere in the $14.50\,\text{mm}$ patent-scale air space between L4 and L5. The data model
splits that space evenly. With this assumed station, a stop semi-diameter of $18.89795\,\text{mm}$ at patent scale
($5.291427\,\text{mm}$ after scaling) gives a paraxial entrance-pupil diameter corresponding to $f/3.5$.

## Element-by-Element Analysis

### L1 — Positive Meniscus, convex to the object

$n_d=1.67003$, $\nu_d=47.2$. Glass: S-BAH10 class (OHARA equivalent; supplier unconfirmed). Standalone
$f=+225.002\,\text{mm}$.

L1 is a weak positive meniscus ahead of the strongly negative L2. Its low positive power moderates the ray angles entering
L2 without negating the front pair's required negative resultant power. Its Abbe number places it in flint territory;
OHARA S-BAH10 has $n_d=1.67003$ and $\nu_d=47.23$, the closest authoritative catalog match located [3].

### L2 — Negative Meniscus, convex to the object

$n_d=1.62041$, $\nu_d=60.3$. Glass: S-BSM16 class (OHARA equivalent; supplier unconfirmed). Standalone
$f=-42.007\,\text{mm}$.

L2 supplies most of the negative power of the patent-defined front group. The rear surface at
$r_4=+11.9669\,\text{mm}$ after scaling is the dominant diverging surface. Together, L1 and L2 have
$f=-53.151\,\text{mm}$ at production scale and satisfy condition (1). OHARA S-BSM16 reproduces the patent values to
the published precision: $n_d=1.62041$, $\nu_d=60.29$ [4].

### L3 — Thick Positive Meniscus, concave to the object, near-zero power

$n_d=1.65160$, $\nu_d=58.5$. Glass: N-LAK7 class (SCHOTT equivalent; supplier unconfirmed). Standalone
$f=+3346.0\,\text{mm}$.

L3 has nearly matched negative radii and therefore only weak positive standalone power. Its production-scale center
thickness is $15.96\,\text{mm}$, almost three times that of L1, the next-thickest element. The patent permits zero, small
positive, or small negative power and uses this element primarily as a thick optical bridge between the front negative
pair and rear converging group. SCHOTT N-LAK7 has $n_d=1.65160$ and $\nu_d=58.52$ [5].

### L4 — Biconvex Positive

$n_d=1.72000$, $\nu_d=42.0$. Glass: S-LAM58 (OHARA exact 720/420 match; supplier unconfirmed). Standalone
$f=+28.226\,\text{mm}$.

L4 is the strongest positive element in the rear group and lies immediately ahead of the stop. Most of its power is
carried by the $r_7=+22.4\,\text{mm}$ production-scale front surface; the rear surface is much weaker. OHARA lists S-LAM58 with code 720420, $n_d=1.72000$, and $\nu_d=41.98$, matching the patent pair
$n_d=1.72000$, $\nu_d=42.0$ at the published precision. OHARA marks the type non-recommended [6].
S-LAM58 is a lanthanum-flint-family glass, consistent with the element's $\nu_d<50$.

### L5 — Biconcave Negative

$n_d=1.69895$, $\nu_d=30.0$. Glass: E-FD15/FD15 class (HOYA equivalent; supplier unconfirmed). Standalone
$f=-17.810\,\text{mm}$.

L5 is the highest-dispersion and strongest negative element in the system. It lies behind the stop and interacts with the
positive elements on both sides to balance axial color and off-axis aberrations. The correction is system-level: L4 and
L5 are separated by the stop and a substantial air space and do not constitute a cemented doublet. HOYA E-FD15 has
code 699301 and is the closest current catalog equivalent to the patent pair [7].

### L6 — Positive Meniscus, concave to the object

$n_d=1.62041$, $\nu_d=60.3$. Glass: S-BSM16 class (OHARA equivalent; supplier unconfirmed). Standalone
$f=+30.306\,\text{mm}$.

L6 restores positive power after L5. The patent's condition (5) leaves the L1-L5 subsystem net negative, so L6 is the
first of two rear positive menisci that complete convergence. Its exact individual aberration contribution is not
isolated in the patent; it functions as part of the coupled rear group.

### L7 — Positive Meniscus, concave to the object

$n_d=1.62041$, $\nu_d=60.3$. Glass: S-BSM16 class (OHARA equivalent; supplier unconfirmed). Standalone
$f=+53.982\,\text{mm}$.

L7 completes the rear converging group. Its front surface is nearly flat relative to its rear surface, so most of the
standalone power is generated at $r_{14}=-29.9816\,\text{mm}$ after scaling. The patent assigns no independent
field-flattener identity to L7; it is part of the rear group's combined correction.

## Glass Identification

The prescription uses five distinct index/Abbe pairs. Three elements share the 620/603 barium-crown glass. The catalog
names below are present-day or legacy equivalents established from authoritative manufacturer data; they do not prove
the supplier or melt used in the 1960s production lens.

| Elements   | Patent $n_d/\nu_d$ | Patent code | Best catalog match                                     | Classification  |
| ---------- | -----------------: | ----------: | ------------------------------------------------------ | --------------- |
| L1         |     1.67003 / 47.2 |     670/472 | S-BAH10 (OHARA, 1.67003 / 47.23)                       | Barium flint    |
| L2, L6, L7 |     1.62041 / 60.3 |     620/603 | S-BSM16 (OHARA, 1.62041 / 60.29)                       | Barium crown    |
| L3         |     1.65160 / 58.5 |     652/585 | N-LAK7 (SCHOTT, 1.65160 / 58.52)                       | Lanthanum crown |
| L4         |     1.72000 / 42.0 |     720/420 | S-LAM58 (OHARA, 1.72000 / 41.98; non-recommended type) | Lanthanum flint |
| L5         |     1.69895 / 30.0 |     699/300 | E-FD15 (HOYA, code 699301)                             | Dense flint     |

The patent publishes only $n_d$ and $\nu_d$. These values support ordinary achromatic modeling but do not establish
apochromatic correction, ED glass, fluorite, or anomalous partial dispersion. The data file therefore carries no APD
claim or explicit line-index data.

## Focus Mechanism

The patent provides no variable internal spacing table. It evaluates the same prescription at infinity and at an object
distance of $50F$, which establishes finite-conjugate performance but not a mechanical focusing system [1, Fig. 3 and
col. 4, lines 20-29]. The data model therefore uses the least-assumptive implementation: unit focusing, with the complete
seven-element assembly translating rigidly and only the final back-focus gap changing. This is a modeling inference.

Using the production minimum focus distance of $0.400\,\text{m}$ as the object-to-image-plane distance gives:

| Quantity                         |             Infinity |              0.400 m focus |
| -------------------------------- | -------------------: | -------------------------: |
| Rear-surface-to-image BFD        | $37.9555\,\text{mm}$ |       $40.4258\,\text{mm}$ |
| Unit-focus extension             |                  $0$ |        $2.4703\,\text{mm}$ |
| First-surface-to-image distance  | $84.0939\,\text{mm}$ |       $86.5642\,\text{mm}$ |
| Object-to-first-surface distance |             $\infty$ |       $313.436\,\text{mm}$ |
| Paraxial lateral magnification   |                  $0$ | $-0.08822$ (about 1:11.34) |

For the patent's $50F$ finite conjugate, interpreted as $5000\,\text{mm}$ from the first surface at patent scale, the
calculated image BFD is $137.550\,\text{mm}$. This is an extension of $1.994\,\text{mm}$ at patent scale, or
$0.558\,\text{mm}$ after production scaling.

## Conditional Expressions

All six patent conditions are satisfied. Values are shown at the patent's $F=100\,\text{mm}$ scale [1, col. 2,
lines 11-36].

| Condition | Patent expression                                              |                    Recomputed value | Result    |
| --------- | -------------------------------------------------------------- | ----------------------------------: | --------- |
| (1)       | $\lvert F_{1,2}\rvert\ge F/0.75$, $F_{1,2}<0$                  |       $F_{1,2}=-189.823\,\text{mm}$ | Satisfied |
| (2)       | $\infty\ge\lvert r_5\rvert\ge0.7F$, $r_5<0$                    |           $r_5=-180.000\,\text{mm}$ | Satisfied |
| (3)       | $d_3\ge0.3F$                                                   |             $d_3=57.000\,\text{mm}$ | Satisfied |
| (4)       | $1.5F\ge t_2+d_3+t_3\ge0.5F$                                   | $0.53+57.00+33.70=91.23\,\text{mm}$ | Satisfied |
| (5)       | $F/1.5\le\lvert F_{1\ldots5}\rvert\le F/0.5$, $F_{1\ldots5}<0$ |  $F_{1\ldots5}=-104.338\,\text{mm}$ | Satisfied |
| (6)       | $0.5F<r_{10}<2F$                                               |         $r_{10}=112.600\,\text{mm}$ | Satisfied |

Conditions (1)-(4) govern the front negative pair, L3 curvature and thickness, and the axial separation used to obtain
long back focus without excessive front diameter. Conditions (5) and (6) constrain the power through L5 and the rear
radius of L5; the patent explicitly associates those two conditions with astigmatism correction.

## Verification Summary

The patent prescription was independently re-entered and traced with reduced-angle paraxial matrices. Surface powers,
principal-plane behavior, group focal lengths, finite conjugates, and the surface-by-surface Petzval sum were recomputed
from Table 1.

| Quantity                                         |                   Patent scale |              Production scale |
| ------------------------------------------------ | -----------------------------: | ----------------------------: |
| Effective focal length                           |          $100.0008\,\text{mm}$ |         $28.00023\,\text{mm}$ |
| Infinity BFD                                     |          $135.5554\,\text{mm}$ |         $37.95552\,\text{mm}$ |
| Internal vertex track, S1-S14                    |          $164.7800\,\text{mm}$ |         $46.13840\,\text{mm}$ |
| S1-to-image track at infinity                    |          $300.3354\,\text{mm}$ |         $84.09392\,\text{mm}$ |
| $F_{1,2,3}$                                      |         $-218.6197\,\text{mm}$ |         $-61.2135\,\text{mm}$ |
| $F_{1,2,3,4,5}$                                  |         $-104.3382\,\text{mm}$ |         $-29.2147\,\text{mm}$ |
| $F_{4,5,6,7}$                                    |         $+108.4053\,\text{mm}$ |         $+30.3535\,\text{mm}$ |
| $F_{6,7}$                                        |          $+70.1020\,\text{mm}$ |         $+19.6286\,\text{mm}$ |
| Petzval sum, $\sum\phi/(nn')$                    | $+0.001677758\,\text{mm}^{-1}$ | $+0.00599199\,\text{mm}^{-1}$ |
| Petzval radius under the adopted sign convention |          $-596.034\,\text{mm}$ |         $-166.889\,\text{mm}$ |

The computed EFL differs from the patent's stated $100\,\text{mm}$ by $0.0008\,\text{mm}$. As a separate transcription
check, multiplying each computed Petzval contribution $\phi/(nn')$ by $F=100\,\text{mm}$ reproduces all fourteen
entries in Table 2's $P$ column to the patent's printed three-decimal precision. The computed sum is $0.167776$, compared
with the printed sum $0.167$. This verifies the radius signs, refractive-index transitions, and surface order independently
of the EFL calculation.

Figure 2(d)'s maximum infinity field label is $37^\circ15'$, giving a full field of $74^\circ30'$. Figure 3 uses finite-
conjugate field-height labels rather than the angular labels used in Figure 2.

The inferred clear apertures were checked geometrically. The limiting spherical surface is S4, with
$\mathrm{SD}/\lvert R\rvert=0.877<0.90$. The minimum calculated common-aperture edge thickness is
$0.491\,\text{mm}$ at L6, the largest front/rear semi-diameter ratio is $1.248$ at L2, and every signed cross-gap sag
intrusion remains below 90% of the corresponding air gap. The chosen apertures intentionally permit wide-open
vignetting near the extreme $37^\circ15'$ field while passing the viewer's default 60%-field, 75%-pupil ray bundle.
Figure 1 also shows the unusually thick L3 bridge with nearly equal front and rear clear heights, so surfaces 5 and 6
use the same $10.4\,\text{mm}$ semi-diameter rather than tapering the rear face inward.

## Design Heritage and Context

The prescription's priority date and construction are consistent with the 1966 redesign of the Super-Takumar 28mm
f/3.5. The patent's distinctive design strategy is not merely the familiar negative-front/positive-rear retrofocus split.
It combines a moderately powered L1-L2 negative pair with a very thick, nearly afocal L3 whose front surface curves
toward the object. This arrangement lengthens the back focus while controlling front-element diameter and preserving
acceptable coma, astigmatism, and peripheral illumination [1, col. 2, lines 37-63].

The patent characterizes the resulting design as having low astigmatism and distortion without an abrupt change at the
largest field angles [1, col. 4, lines 20-29]. Those statements are supported by the published aberration plots but should
not be generalized into modern MTF or resolution claims, which the patent does not provide.

## Sources

1. Tomokazu Kazamaki, [US 3,506,339, _Compact Retrofocus Wide Angle Objective Lens System_](https://patents.google.com/patent/US3506339A/en), granted April 14, 1970. Prescription: Table 1 and claim 1; Seidel coefficients: Table 2; infinity and finite-conjugate plots: Figures 2-3.
2. Honeywell Pentax, [_Lenses for the Honeywell Pentax_](https://allphotolenses.com/public/files/pdfs/5ae9f363f57fe1de87b6c209bc6fda63.pdf), p. 12. Manufacturer literature used for shared marketed specifications; the illustrated Cat. No. 741 lens is the earlier physical version and is not treated as proof of the later 7/7 prescription.
3. OHARA, [S-BAH10](https://oharacorp.com/glass/s-bah10/) manufacturer data.
4. OHARA, [S-BSM16](https://oharacorp.com/glass/s-bsm16/) manufacturer data.
5. SCHOTT, [N-LAK7](https://www.schott.com/shop/advanced-optics/en/Optical-Glass/N-LAK7/c/glass-N-LAK7) manufacturer data.
6. OHARA, [S-LAM58](https://oharacorp.com/s-lam-4/) manufacturer data; code 720420 and non-recommended status.
7. HOYA, [Optical Glass Cross Reference Index](https://www.hoyaoptics.eu/glass-cross-reference-index) and [pressed-blank glass list](https://www.hoyaoptics.eu/glass-lenses-pressed-blanks), including E-FD15 code 699301.
8. Takumar Field Guide, [Super-Takumar 1:3.5/28 Model II (43871)](https://takumarguide.weebly.com/1--35--28-model-ii-43871.html), used only for production-version chronology and construction cross-checking.
