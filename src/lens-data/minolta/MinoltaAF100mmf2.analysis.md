## Patent Reference and Design Identification

**Patent:** JP S62-244010 A<br>
**Application Number:** JP S61-89032<br>
**Filed:** 17 April 1986<br>
**Published:** 24 October 1987<br>
**Inventors:** Naoshi Okada; Hisashi Tokumaru<br>
**Applicant:** Minolta Co., Ltd.<br>
**Title:** 中望遠レンズ (Medium Telephoto Lens)<br>
**Embodiment analyzed:** Example 2<br>
**Lens:** MINOLTA AF 100mm f/2

The prescription is Example 2 of Minolta Co., Ltd.'s Japanese publication JP S62-244010 A. The numerical example publishes a nominal focal length of 100.0 mm, an f-number of 2.0, seven glass elements, and the focus-variable spacing used in this model. The production correlation adopted for this entry is the Minolta AF 100mm f/2. It is a technical correlation rather than a manufacturer statement that the patent is the production prescription.

The correlation is supported by several convergent features:

1. The patent example and Minolta service data both describe seven elements in six groups.
2. The patent example is nominally 100 mm at f/2, matching the production lens designation.
3. Both sources describe the same floating-focus topology: L1-L6 move together while L7 remains fixed.
4. The patent changes the L6-L7 air gap from 0.880 mm at infinity to 16.339 mm at close focus and prints close-focus magnification $\beta=-0.126$. With the data file's fixed image plane, independent tracing gives 1000.039 mm object-to-image distance and $\beta=-0.125704$, consistent with the production 1.0 m minimum-focus specification and the patent's rounded magnification.
5. Minolta's service documentation classifies the production optical construction as “Gauss,” consistent with the broad architecture of the selected example.

The production service manual specifies an automatic diaphragm from f/2 to f/32 with nine blades. Those aperture-control limits are manufacturer specifications; the wide-open modeled f-number remains the independently solved design quantity.

The data file preserves the patent's d-line prescription without scaling. The nominal 100 mm product/source value is kept separate from the prescription's computed infinity EFL of 98.502381 mm.

## Optical Architecture

The lens is a seven-element, six-group, all-spherical Gauss-derived medium-telephoto design. In physical group order it consists of three air-spaced elements before the stop, a cemented L4-L5 pair immediately behind the stop, a positive L6 singlet, and a weak positive L7 rear singlet. The group-power sequence is therefore broadly positive / positive / negative / weakly negative cemented pair / positive / weak positive.

The patent title uses “medium telephoto” as a focal-length/application category. Under the geometric criterion used here, however, the modeled lens is not a telephoto optical layout: the infinity front-vertex-to-image track is 117.771149 mm, giving $TL/EFL=1.195617>1$. It is also not retrofocus because the 47.041149 mm back focal distance is smaller than the 98.502381 mm EFL.

The principal focusing division is between L6 and L7. L1-L6 form a positive moving assembly with a computed paraxial focal length of +110.062415 mm, while L7 is a much weaker positive element with a standalone focal length of +463.237152 mm. The complete infinity configuration has a computed EFL of +98.502381 mm. This distinction between the power of an isolated element, a cemented group, and the assembled lens is important to the design's interpretation.

The patent draws the aperture stop inside the 24.000 mm air space between L3 and L4 but does not publish its exact station or diameter. The data model therefore treats stop geometry as an explicit inference: the gap is split into 11.25 mm before the stop and 12.75 mm after it, and the physical stop semi-diameter is 14.536343 mm. That stop size gives a modeled paraxial f-number of 1.99999994. The clear semi-diameters of the refracting surfaces are likewise modeled rather than patent-published dimensions; they are not production barrel diameters.

No uniform scale is applied ($s=1$). All 13 refracting surfaces are spherical, so there are no conic constants or aspheric polynomial coefficients to transform. The patent does not publish a post-r13 image-plane spacing; the data file uses the independently derived infinity BFD of 47.041149 mm. No sensor cover glass, filter, inactive dummy plane, or flare-cutter plane is part of the modeled Example 2 prescription.

## Element-by-Element Analysis

### L1 — Positive Meniscus

nd = 1.71300, νd = 53.93. Glass: 713539 — optical-glass coordinate class (vendor unresolved). Standalone $f=+70.904$ mm.

L1 is the first strong positive member at the front of the system and serves as the initial collector in the L1-L6 moving assembly. Its substantial positive standalone power is moderated in the complete lens by the following positive and negative elements rather than acting as an isolated objective.

### L2 — Positive Meniscus

nd = 1.69350, νd = 51.83. Glass: 694518 — optical-glass coordinate class (vendor unresolved). Standalone $f=+109.639$ mm.

L2 adds positive power ahead of the stop and is separated from L1 and L3 by air. Together with L1 and L3, it forms a front three-element subsystem whose computed paraxial focal length is +165.653 mm. The patent's third conditional expression constrains the ratio between the whole-system focal length and this front subsystem.

### L3 — Negative Meniscus

nd = 1.71736, νd = 29.42. Glass: SF1 (SCHOTT catalog equivalent; patent 717294; production supplier unspecified). Standalone $f=-38.743$ mm.

L3 is the strongest isolated negative element in the prescription and sits immediately in front of the aperture-stop gap. Its relatively low νd distinguishes it from the two positive elements ahead of it. In first-order terms, it counteracts part of the front positive power before the beam reaches the stop and rear groups.

### L4 — Biconcave Negative, Cemented Pair D1

nd = 1.65446, νd = 33.66. Glass: FD9 (HOYA catalog equivalent; patent 654337; production supplier unspecified). Standalone $f=-44.799$ mm.

L4 begins the cemented pair immediately behind the stop. It is a strong negative element in isolation. Its rear surface is also the cemented interface to L5, so the downstream L5 index—not air—governs the interface power in the assembled pair.

### L5 — Biconvex Positive, Cemented Pair D1

nd = 1.78100, νd = 44.55. Glass: 781446 — high-index mid-dispersion glass (catalog unresolved). Standalone $f=+53.104$ mm.

L5 is the positive member of D1 and uses a relatively high refractive index. Although L4 and L5 have large and opposite standalone powers, their cemented combination is only weakly negative in first-order terms: the independently computed cemented-pair focal length is -825.427 mm. The pair therefore must not be interpreted by simply combining the isolated focal-length signs or magnitudes.

### L6 — Biconvex Positive

nd = 1.83400, νd = 37.05. Glass: S-LAH60 (OHARA catalog equivalent; patent 834371; production supplier unspecified). Standalone $f=+121.695$ mm.

L6 is the final element of the moving L1-L6 assembly. It has the highest refractive index in the prescription and supplies positive power immediately before the focus-variable L6-L7 air gap. Because L6 moves with L1-L5 while L7 remains fixed, the spacing behind L6 is the sole authored focus variable.

### L7 — Biconvex Positive, Fixed Rear Element

nd = 1.72000, νd = 50.31. Glass: 720503 — optical-glass coordinate class (vendor unresolved). Standalone $f=+463.237$ mm.

L7 is a weak positive rear element that remains fixed during focusing. Its low standalone power relative to the preceding elements is consistent with the patent's first condition, which constrains $f/f_7$. Altering the L6-L7 separation changes the complete system's first-order behavior while leaving the internal geometry of the L1-L6 moving assembly unchanged.

## Glass Identification and Selection

The patent publishes only nd and νd values and does not identify glass manufacturers or melt names. The data file therefore preserves source-honest coordinate-class labels rather than assigning speculative vendor products. L5 is explicitly marked unmatched because no surveyed public catalog candidate is close enough to justify a named glass assignment from its stored coordinate pair.

| Element | nd | νd | Data-file glass annotation |
|---|---:|---:|---|
| L1 | 1.71300 | 53.93 | 713539 — optical-glass coordinate class (vendor unresolved) |
| L2 | 1.69350 | 51.83 | 694518 — optical-glass coordinate class (vendor unresolved) |
| L3 | 1.71736 | 29.42 | SF1 catalog equivalent (patent 717294) |
| L4 | 1.65446 | 33.66 | FD9 catalog equivalent (patent 654337) |
| L5 | 1.78100 | 44.55 | 781446 — high-index mid-dispersion glass (catalog unresolved) |
| L6 | 1.83400 | 37.05 | S-LAH60 catalog equivalent (patent 834371) |
| L7 | 1.72000 | 50.31 | 720503 — optical-glass coordinate class (vendor unresolved) |

The spread in nd/νd provides ordinary first-order achromatizing leverage between positive and negative members; that interpretation is a modeling inference. The source does not publish nC, nF, ng, dPgF, or equivalent partial-dispersion data, so no anomalous-partial-dispersion or apochromatic claim is supported by this model.

## Focus Mechanism

The focus state is **PUBLISHED**, not reconstructed. The patent's numerical table gives the L6-L7 spacing at both endpoints, and Minolta service documentation independently describes the same mechanical division: the first six elements move together while the seventh remains fixed.

| Quantity | Infinity | Close focus |
|---|---:|---:|
| L6-L7 air gap $d_{11}$ | 0.880 mm | 16.339 mm |
| Relative L1-L6 translation | 0 mm | 15.459 mm objectward |
| Computed system EFL | 98.502381 mm | 101.534882 mm |
| Computed transverse magnification | approaches 0 | -0.125704 |

With L7 and the image plane fixed, increasing $d_{11}$ by 15.459 mm moves the entire L1-L6 assembly objectward by the same amount. At the close endpoint, tracing to the same fixed image plane gives an object-to-image distance of 1000.039 mm and magnification -0.125704, reproducing the patent's rounded $\beta=-0.126$ and the production 1.0 m minimum-focus specification within source precision.

The changing separation also changes the first-order focal length from 98.502381 mm at infinity to 101.534882 mm at close focus. This is a consequence of the published floating geometry, not a separately authored zoom or focal-length control.

## Conditional Expressions

Example 2 publishes seven design inequalities. Recomputing them from the final data-file prescription and the traced infinity EFL reproduces the patent's tabulated values to its printed precision.

| No. | Patent condition | Computed | Patent printed | Result |
|---|---|---:|---:|---|
| 1 | $0.21 < f/f_7 < 0.35$ | 0.212639 | 0.213 | Pass |
| 2 | $2.0 < (r_5+r_4)/(r_5-r_4) < 3.0$ | 2.141975 | 2.142 | Pass |
| 3 | $0.45 < f/f_{123} < 0.65$ | 0.594631 | 0.595 | Pass |
| 4 | $1.0 < f/f_1 < 1.4$ | 1.389243 | 1.389 | Pass |
| 5 | $0.9 < f/f_{4567} < 1.25$ | 1.025793 | 1.03 | Pass |
| 6 | $0.1 < (N_5-N_4)/(r_8/f) < 0.2$ | 0.117550 | 0.118 | Pass |
| 7 | $0.12 < (r_7-r_9)/f < 0.25$ | 0.243852 | 0.244 | Pass |

Condition 1 formalizes the deliberately weak positive power of fixed L7. Conditions 3-5 constrain first-order power distribution among the front and rear portions of the system. Conditions 2, 6, and 7 constrain specific curvature/index relationships around the central air spaces and cemented rear-of-stop structure. The data retains the printed $r_8=+106.036$ mm without correction.

## Verification Summary

The patent's nominal 100.0 mm focal length and f/2 designation are source values; they are not substituted for computed design quantities. Sequential reduced-angle tracing and an independent ABCD product applied to the final data arrays give an infinity EFL of 98.502381 mm. The derived back focal distance from surface 13 is 47.041149 mm, and the modeled stop yields f/1.99999994.

Surface-by-surface Petzval evaluation using $\phi/(nn')$ gives a total of +0.001152605 mm$^{-1}$, equivalent to a signed Petzval radius of approximately +867.600 mm under the model's convention. The value describes first-order field curvature tendency; it is not a measured production image-surface radius.

The inferred clear apertures were checked against both published focus endpoints. The minimum modeled element edge thickness is 1.835486 mm and the maximum actual spherical rim-slope angle is 53.418629°. The modeled air gaps retain adequate rim clearance, and representative off-axis ray bundles remain within the modeled clear apertures at both infinity and close focus. These checks validate the authored geometry but do not convert the inferred semi-diameters into manufacturer-published dimensions.

The prescription has no aspherical, diffractive, folded-path, stabilization, perspective-control, or aberration-control surfaces. No source correction or production scaling is applied. The only non-published geometric quantities introduced by the model are the inferred stop station and diameter, inferred clear semi-diameters, and derived surface-13-to-image spacing.

## Sources

- Minolta Co., Ltd., **JP S62-244010 A**, 「中望遠レンズ」, filed 17 April 1986, published 24 October 1987. Example 2 prescription on patent p. 50; the Example 2 optical layout in Fig. 4 on p. 51.
- Minolta Co., Ltd., **AF 100mm F2 Service Manual**, code 2598-100. Production specifications and focusing documentation used for product identity, 7-element/6-group construction, Gauss designation, f/2 aperture, 1.0 m minimum focus, nine-blade diaphragm, and the L1-L6/L7 floating-focus relationship.
- Public optical-glass catalog coordinates from OHARA, HOYA, Schott, HIKARI, CDGM, and Sumita were used only to test coordinate compatibility. No historical vendor identity is assigned from nd/νd alone.
