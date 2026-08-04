## Patent Reference and Design Identification

**Patent:** US 2012/0056976 A1\
**Application Number:** 13/089,518\
**Priority:** KR 10-2010-0087662, September 7, 2010\
**Filed:** April 19, 2011\
**Published:** March 8, 2012\
**Inventors:** Yong-jae Lee; Young-woo Park\
**Assignee:** Samsung Electronics Co., Ltd.\
**Title:** *Wide Angle Lens System and Photographing Apparatus*\
**Embodiment analyzed:** First Embodiment, Example 1, FIG. 1 and Tables 1–3

Example 1 is the fixed patent correlation for the SAMSUNG 20mm f/2.8. The evidence is strongly convergent, although
neither the patent nor Samsung's product specification identifies the worked example as the production prescription.

1. **Focal length and aperture.** The patent publishes an effective focal length of 20.2634 mm and an f-number of
   2.8563; Samsung markets the lens as 20 mm f/2.8. Independent tracing of the rounded prescription gives a modeled EFL
   of 20.289767 mm.
2. **Construction.** The embodiment and Samsung's product specification both identify six elements in four air-spaced
   groups. The patent places one aspherical surface on the rear lens, while Samsung specifies one aspherical lens in the
   production construction.
3. **Format and field.** Samsung identifies the product as a Samsung NX-mount APS-C lens and specifies a 70.2° angle of
   view. The patent gives a 37.5393° half-viewing angle, or 75.0786° full field, for its ray model. These are not
   identical field definitions and remain separate.
4. **Close focus.** The published movement table, after a disclosed paraxial closure normalization, gives a modeled
   near-state magnification of 0.179746×. Restoring the patent's physical rear plates and published object distance
   gives a 169.459 mm object-to-image distance. These values correspond to Samsung's rounded 0.18× and 0.17 m
   specifications.
5. **Timing.** Samsung introduced the 20 mm f/2.8 pancake lens with the NX100 on September 14, 2010, seven days after
   the Korean priority filing. The timing supports the correlation but does not constitute manufacturer confirmation.

No dimensional scaling is applied. The data file stores the independently modeled 20.289767 mm EFL in
`focalLengthDesign`, retains 20.2634 mm as the patent-published value in the source discussion, and keeps both separate
from the marketed 20 mm designation.

## Optical Architecture

The design is a compact retrofocus wide-angle with a negative first power group and a positive second power group. The
aperture stop lies between them, as shown in FIG. 1 and described in ¶0046–0050. The physical prescription contains four
air-spaced groups:

| Physical group | Contents | Construction |
|---|---|---|
| 1 | L1 | Air-spaced negative meniscus |
| 2 | L2–L3 | Cemented negative–positive pair |
| 3 | L4–L5 | Cemented positive–negative pair |
| 4 | L6 | Air-spaced positive meniscus with rear asphere |

The patent instead organizes these four physical groups into two functional power groups. G1 contains L1 through L3
and has a computed in-situ focal length of −57.163 mm. G2 contains L4 through L6 and has a computed in-situ focal length
of +20.701 mm. Neither cemented pair has the same power as its surrounding patent group: D1 is +55.581 mm and D2 is
+53.644 mm when each pair is evaluated separately in air.

The active S1-to-11A track is 24.910 mm. The computed back focal length from 11A is 24.727 mm, longer than the computed
20.290 mm EFL, so the prescription meets the project's strict retrofocus criterion, $BFD>EFL$. It is not telephoto under
the corresponding $TL/EFL<1$ test because $TL/EFL=1.2277$.

With positive distances measured toward the image, the front principal plane lies 17.651 mm behind S1 and the rear
principal plane lies 4.437 mm behind 11A. The front focal point is 2.639 mm in front of S1. This cardinal-point
placement, rather than the sign of any one element, accounts for the long rear clearance.

The arrangement around the stop is intentionally quasi-symmetric in lens type rather than geometrically symmetric:
negative meniscus, cemented negative–positive pair, stop, cemented positive–negative pair, positive meniscus. The patent
states that this organization assists aberration control while keeping the inter-group spacing short (¶0049–0051).

## Element-by-Element Analysis

### L1 — Negative Meniscus

$n_d=1.74330$, $\nu_d=49.2$. Glass:
`NBF1 catalog equivalent; production supplier unspecified`. Standalone
$f=-25.431$ mm.

L1 is a negative meniscus convex toward the object. Its standalone negative power begins the divergent front section
that produces the extended rear clearance characteristic of the retrofocus layout. The patent directly establishes the
element's negative power and meniscus shape in ¶0047 and ¶0049; its field-bending role is a prescription-based
interpretation.

L1 is not part of a cemented assembly. It is the dominant standalone negative component in G1, whereas the following
L2–L3 cemented pair is weakly positive when isolated in air.

### L2 — Biconcave Negative, Front Member of D1

$n_d=1.51823$, $\nu_d=59.0$. Glass: `E-C3 catalog equivalent; production supplier unspecified`.
Standalone $f=-18.047$ mm.

L2 is the lower-index, lower-dispersion negative member of the first cemented pair. The patent permits the second and
third lenses to be cemented to reduce spacing and total length (¶0022 and ¶0051), and explicitly describes the second
lens as biconcave (¶0025 and ¶0049).

The standalone focal length does not describe the cemented assembly. Refraction at the L2–L3 junction couples the two
glasses, and the complete pair has a computed focal length of +55.581 mm in air.

### L3 — Biconvex Positive, Rear Member of D1

$n_d=1.88300$, $\nu_d=40.8$. Glass:
`S-LAH58 catalog equivalent; production supplier unspecified`. Standalone
$f=+14.060$ mm.

L3 is a high-index positive element cemented directly to L2. Its stronger standalone positive power exceeds L2's
negative power, leaving D1 weakly positive when evaluated separately in air. The differing Abbe numbers support ordinary
chromatic balancing across the cemented interface, but the patent supplies no line indices or partial-dispersion data
from which a stronger spectral claim could be made.

The D1 pair remains inside the negative in-situ G1. The group result arises from L1, D1, and their separation together;
it cannot be inferred from the sign of the cemented pair alone.

### L4 — Biconvex Positive, Front Member of D2

$n_d=1.80420$, $\nu_d=46.5$. Glass:
`N-LASF44 catalog equivalent; production supplier unspecified`. Standalone
$f=+9.064$ mm.

L4 is the strongest positive standalone element and is placed immediately behind the stop. The patent states that a
convex object-side surface at this position supplies substantial refraction while helping reduce the system length
(¶0048). Its location makes it a principal contributor to the transition from the negative front group to the positive
rear group.

L4 is cemented to L5. Although L4 is strongly positive by itself, the complete D2 pair is only weakly positive, with a
computed focal length of +53.644 mm in air.

### L5 — Biconcave Negative, Rear Member of D2

$n_d=1.69895$, $\nu_d=30.1$. Glass:
`E-FD15 catalog equivalent; production supplier unspecified`. Standalone $f=-9.826$ mm.

L5 nearly cancels L4's strong standalone power. Its lower Abbe number makes the L4–L5 pair the clearest conventional
positive lower-dispersion / negative higher-dispersion pairing in the prescription. This supports ordinary chromatic
correction but does not establish anomalous partial dispersion or apochromatic correction.

The pair's weak positive net power is not the same as its in-situ behavior. Together with L6 and the intervening air
gap, it forms the patent's substantially stronger positive G2.

### L6 — Positive Meniscus with Rear Asphere

$n_d=1.68997$, $\nu_d=53.0$. Glass:
`Unmatched (nd=1.68997, vd=53.0; no close public catalog identity is uniquely defensible)`. Standalone
$f=+27.818$ mm.

L6 is a positive meniscus concave toward the object and is the final air-spaced physical group. Its image-side surface,
11A, is the design's sole asphere. The patent assigns the rear asphere the task of controlling coma and distortion
(¶0052), which is particularly relevant at the published 37.5393° half field.

Within G2, L6 combines with D2 and the L5–L6 separation to produce the computed +20.701 mm in-situ group focal length.

## Glass Identification and Selection

The patent publishes only $n_d$ and $\nu_d$ values and does not name vendors or melts. Independent comparison against
current OHARA, HOYA, SCHOTT, HIKARI, CDGM, and Sumita catalogs finds compatible coefficient-backed curves for L1–L5.
The selected names identify optical equivalents for chromatic tracing; they do not identify Samsung's production
supplier or melt.

| Element | Stored $n_d$ | Stored $\nu_d$ | Data-file glass annotation |
|---|---:|---:|---|
| L1 | 1.74330 | 49.2 | NBF1 catalog equivalent; production supplier unspecified |
| L2 | 1.51823 | 59.0 | E-C3 catalog equivalent; production supplier unspecified |
| L3 | 1.88300 | 40.8 | S-LAH58 catalog equivalent; production supplier unspecified |
| L4 | 1.80420 | 46.5 | N-LASF44 catalog equivalent; production supplier unspecified |
| L5 | 1.69895 | 30.1 | E-FD15 catalog equivalent; production supplier unspecified |
| L6 | 1.68997 | 53.0 | Unmatched; no uniquely defensible public-catalog identity |

NBF1 is the closest current coefficient-backed curve at L1's coordinate; E-C3 reproduces L2's stored d-line index;
S-LAH58 reproduces L3's coordinate; N-LASF44 reproduces L4's d-line index; and E-FD15 closely reproduces L5. These
matches establish compatible dispersion models, not the actual production melts.

The first cemented pair combines a negative crown-like glass with a positive high-index, higher-dispersion glass. The
second pair reverses that power/dispersion relationship: L4 is positive and less dispersive, while L5 is negative and
more dispersive. Chromatic correction is therefore distributed across both cemented interfaces.

No measured `nC`, `nF`, `ng`, or `dPgF` values are available. Catalog-equivalent curves improve chromatic tracing but
do not justify describing the design as APO, ED, fluorite-based, or anomalous-dispersion corrected.

## Focus Mechanism

The focus status is **PUBLISHED**. The patent states that G1 and G2 move together (¶0029, ¶0050, ¶0053, and claim
16), so all six elements translate as one rigid optical unit while the rear plates and image plane remain fixed. There
is no
internal-gap change and no reconstructed movement law.

The rounded surface table places infinity focus 0.028234980 mm beyond the raw air-equivalent rear spacing. The data
model therefore adds that same paraxial closure to every published focus state. This normalizes the image reference
plane
without changing the source's 0.337 mm intermediate travel or 3.647 mm near travel.

| State | Patent D1, S11-to-first-plate | Raw air-equivalent gap | Authored normalized gap | Unit motion from infinity |
|---|---:|---:|---:|---:|
| Infinity | 22.539 mm | 24.698895 mm | 24.727129 mm | 0 mm |
| Intermediate | 22.876 mm | 25.035895 mm | 25.064129 mm | 0.337 mm toward the object |
| Near | 26.186 mm | 28.345895 mm | 28.374129 mm | 3.647 mm toward the object |

The viewer defines the published infinity and near endpoints. The intermediate row remains a source verification point
rather than a third authored slider endpoint.

With the normalized near gap, the rounded prescription solves to an object distance of 115.519 mm from S1 and
$|m|=0.179746$. The patent gives 115.583 mm, a 0.064 mm difference attributable to source precision. Using the patent's
physical rear plates and published object distance gives a 169.459 mm object-to-image distance, consistent with
Samsung's rounded 0.17 m minimum focus and 0.18× maximum magnification specifications.

The patent does not identify a focus motor or drive technology, so none is assigned.

## Aspherical Surfaces

Surface 11A, the image-side face of L6, is the sole asphere. The patent uses the standard conic form

$$
 z(h)=\frac{c h^2}{1+\sqrt{1-(1+K)c^2h^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10},
 \qquad c=1/R.
$$

Under this convention, $K=0$ is a sphere and $K=-1$ is a paraboloid. No conic conversion or dimensional scaling is
required.

| Surface | $K$ | $A_4$ (mm⁻³) | $A_6$ (mm⁻⁵) | $A_8$ (mm⁻⁷) | $A_{10}$ (mm⁻⁹) |
|---|---:|---:|---:|---:|---:|
| 11A | −1 | +3.28982×10⁻⁵ | +9.45759×10⁻⁸ | +5.80525×10⁻⁹ | 0 |

At the model-derived 8.4 mm semi-diameter, 11A has a sag of −1.810306 mm. The same-radius sphere would have a sag of
−2.314547 mm, so the asphere is 0.504240 mm less negative at that height. Its actual rim-slope angle is 15.292°. These
are model-rim calculations, not patent-published clear-aperture values.

The patent establishes the optical purpose of the asphere but does not state whether the production surface was molded,
polished, or formed by a bonded resin process. No manufacturing method is inferred.

## Conditional Expressions

The patent provides ten compactness, spacing, shape, power-distribution, and image-height conditions. The selected
prescription was recomputed from the rounded table values.

| Condition | Evaluated expression | Value | Printed range | Result |
|---|---|---:|---:|---|
| 1 | $f/D_{all}$ | 0.813464 | 0.60 to 1.00 | Pass |
| 2 | $d_1/f_1$ | −0.066827 | −0.10 to −0.03 | Pass |
| 3 | $d_2/f_2$ | 0.084055 | 0.03 to 0.10 | Pass |
| 4 | $d_{12}/f$ | 0.317814 | 0.25 to 0.35 | Pass |
| 5 | $(R_{1B}-R_{2A})/(R_{1B}+R_{2A})$ | −2.065186 | −2.0 to −1.5 | Outside printed bound |
| 6 | $(R_{3B}-R_{4A})/(R_{3B}+R_{4A})$ | 2.933414 | −5.0 to 4.0 | Pass |
| 7, as printed | $(R_{5B}-R_{6A})/(R_{5B}+R_{6A})$ | −1.630590 | 0.5 to 0.8 | Contradiction |
| 7, Table-16-consistent | $(R_{6A}-R_{6B})/(R_{6A}+R_{6B})$ | 0.729819 | 0.5 to 0.8 | Reproduces Table 16 |
| 8 | $f_1/f$ | −2.820993 | −4.5 to −2.7 | Pass |
| 9 | $f_2/f$ | 1.021581 | 0.8 to 1.1 | Pass |
| 10 | $D_{all}/HT$ | 3.20 | 3.0 to 3.3 | Pass as reported in Table 16 |

Condition 5 is a direct source inconsistency: Table 16 itself rounds Example 1 to −2.07, outside the printed lower
bound, and the tabulated radii are not imprecise enough to close the difference. Condition 7 contains a subscript or
formula
error. The printed expression cannot produce Table 16's 0.73, whereas the sixth-lens shape factor shown above evaluates
to 0.729819. The prescription is not changed to conceal either defect.

Condition 10's value is taken from the patent's rounded Table 16 result. It implies $HT=7.784375$ mm when combined with
the 24.91 mm active track, but the patent does not directly tabulate that image height for Example 1.

## Verification Summary

The final data arrays preserve every patent radius, center thickness, refractive index, Abbe number, and asphere
coefficient. Only model-dependent quantities—the stop, clear apertures, and rear reference-plane closure—are inferred or
normalized, with each disclosed above.

| Quantity | Verified value | Interpretation |
|---|---:|---|
| Computed EFL | 20.289767 mm | +0.1301% relative to the patent's 20.2634 mm headline value |
| Front principal plane | +17.650769 mm from S1 | Positive direction is toward the image |
| Rear principal plane | +4.437362 mm from 11A | Lies in the rear air space |
| BFL from 11A | 24.727129 mm | Longer than EFL; strict retrofocus configuration |
| Active S1-to-11A track | 24.910000 mm | $TL/EFL=1.2277$; not telephoto |
| Entrance pupil | 7.103514 mm diameter at +7.397151 mm from S1 | Produces the modeled f/2.8563 aperture |
| Exit pupil | 14.360951 mm diameter, 16.292056 mm objectward of 11A | Rear-group image of the stop |
| Physical stop semi-diameter | 4.414435 mm | Model inference; patent does not publish stop size |
| Petzval sum | +0.004330918 mm⁻¹ | Surface-by-surface $\phi/(n n')$ calculation |
| Near-state magnification | 0.179746× | Closure-normalized modeled value |

The semi-diameters pass the applicable geometry checks. The minimum computed element edge thickness is 0.191839 mm at
L4. The maximum actual rim-slope angle is 48.433° at S2. The tightest air-gap clearances are 0.415089 mm between S2 and
S3 and 0.210804 mm between S9 and S10, corresponding to shared-band sag intrusions of 89.134% and 87.885% of their
center gaps; both remain below the 90% limit. The $K=-1$ rear asphere has no finite conic-height singularity.

Exact meridional tracing at the viewer's 0.60 field fraction clears every authored surface for the tested pupil bundle.
At the full 37.5393° patent field, natural vignetting reduces the accepted stop-coordinate band to approximately
−3.552 to +2.792 mm; accepted rays remain inside the stored clear apertures. No layout control is used to hide invalid
geometry, and the calculations require no surface trim.

Patent surfaces S12–S15 are two plane-parallel filters and their intervening gaps. They are excluded from the ordinary
sequential model. Their raw optical-path effect is retained through the air-equivalent rear spacing, and the disclosed
+0.028235 mm closure aligns the rounded active prescription with its computed infinity focal plane.

## Sources

- [US 2012/0056976 A1, *Wide Angle Lens System and Photographing Apparatus*](https://patents.google.com/patent/US20120056976A1/en)
- [Samsung EX-W20NB/KR official product support and specifications](https://www.samsung.com/sec/support/model/EX-W20NB/KR/)
- [Samsung Newsroom, NX100 and 20 mm f/2.8 launch, September 14, 2010](https://news.samsung.com/kr/459)
- [OHARA optical-glass catalog](https://oharacorp.com/glass-catalog/)
- [HOYA optical-glass cross-reference](https://www.hoyaoptics.eu/glass-cross-reference-index)
- [SCHOTT optical-glass catalog downloads](https://www.schott.com/en-us/products/optical-glass-p1000267/downloads)
- [HIKARI optical-glass catalog](https://www.hikari-g.co.jp/products/optical_glass/catalog/)
- [CDGM optical-glass catalog](https://www.cdgmgd.com/go.htm?k=Colourless_Optical_Glass&url=goods)
- [Sumita optical-glass downloads](https://www.sumita-opt.co.jp/en/download/)
