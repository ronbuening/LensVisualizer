# NIKON AF MICRO-NIKKOR 60mm f/2.8D — US 5,751,485 First Embodiment

## Patent Reference and Design Identification

**Patent:** US 5,751,485
**Filed:** August 2, 1995
**Priority:** November 29, 1993 (earliest listed Japanese priority)
**Granted:** May 12, 1998
**Inventor:** Kenzaburo Suzuki
**Assignee:** Nikon Corporation
**Title:** *Lens Capable of Short Distance Photographing with Vibration Reduction Function*
**Embodiment analyzed:** First Embodiment / Table 1 (job-card designation: Example 1)

The selected prescription is the First Embodiment shown in Fig. 1 and tabulated in Table 1 of US 5,751,485. The patent gives an infinity focal length of 59.9998 mm, FNo = 2.82, a full field of 39.4°, three published focus states through 1:1, and an 8-element arrangement divided into three functional groups G1, G2, and G3. The first two groups move toward the object for close focus; G3 remains fixed axially. (US 5,751,485, PDF pp. 25–26, Fig. 1 and Table 1.)

The production correlation is strong for the centered optical formula but is not manufacturer-confirmed patent attribution. The principal converging evidence is:

1. Nikon specifies the production AF Micro-Nikkor 60mm f/2.8D as a 60 mm f/2.8 Nikon F / FX lens with 8 elements in 7 groups, 1.0× maximum reproduction, CRC focusing, and approximately 0.219–0.22 m minimum focus.
2. The patent model computes to 59.999843 mm EFL at infinity and reaches β = −1 at an object-to-image distance of 218.879660 mm, closely matching Nikon's 0.219 m brochure value.
3. Nikon's design history describes the optical system as a modified-Gauss-derived six-element front section with a two-element rear section, with the three elements before and the three elements behind the aperture moving independently during close-range correction. That architecture is consistent with Table 1's G1/G2 focusing and fixed two-element G3.
4. Nikon dates the underlying optical design to the 1989 AI AF Micro-Nikkor 60mm f/2.8S and the D encoder version to 1993. Because the patent's earliest listed priority is November 29, 1993, the patent should be treated as a later close-focus/vibration-reduction embodiment that strongly correlates with the production centered formula, not as proof that the patent originated the 1989 production design.
5. The production AF Micro-Nikkor 60mm f/2.8D is non-VR, whereas this patent embodiment explicitly proposes transverse motion of G3 for vibration reduction. That feature is therefore retained as patent context only and is not represented as a production-lens feature.

The implemented data uses Nikon F and 135 full-frame as production metadata, keeps marketed 60 mm / f/2.8 separate from the exact design values, and transcribes the centered optical prescription without scaling.

## Optical Architecture

The optical system contains eight glass elements in seven air-separated physical groups, organized by the patent into three functional groups: G1 positive, G2 positive, and G3 negative. The aperture stop lies between G1 and G2. In the implemented model, the paraxial focal lengths of the three functional-group subassemblies are +104.412 mm, +57.898 mm, and −169.193 mm respectively. These values are computed from each group’s prescribed surfaces and internal spacings; they are neither sums of standalone element powers nor a claim about the power of an isolated single element.

G1 contains L1–L3: two positive elements followed by a negative meniscus. G2 contains the cemented L4+L5 pair followed by positive singlet L6. G3 is the fixed rear pair L7+L8. The two moving positive groups straddle the stop and change their relative axial positions during close focusing, while G3 remains fixed along the optical axis. This is the source-defined focus architecture of the First Embodiment. (US 5,751,485, PDF pp. 25–26.)

Nikon's historical description calls the production design a modified Gauss with a two-element rear teleconverter section, and the patent itself says the negative rear group makes the lens a “telephoto lens type.” The implemented infinity model is not classified as telephoto under this project's quantitative rule, however: the first-surface-to-image track is 75.66746 mm for an EFL of 59.999843 mm, giving TL/EFL = 1.26113 rather than less than 1. Its BFD/EFL ratio is 0.65641, so it is not retrofocus under the project rule BFD > EFL either. The source terminology and the project classification are therefore kept distinct.

The patent does not numerically locate or size the aperture. Fig. 1 only places stop S within the d6 gap between G1 and G2. The data file inserts one neutral `STO` at the midpoint of that gap at every published focus keyframe. Its 8.245321 mm semi-diameter is calibrated so the modeled entrance pupil gives f/2.82. This is a model calibration, not a source-published diaphragm diameter or a measured production aperture.

The patent also does not publish surface semi-diameters. The data file therefore uses modeled semi-diameters derived from exact spherical-ray envelopes and the current geometry policy. Those dimensions describe the visualization/model, not manufacturing drawings.

## Element-by-Element Analysis

### L1 — Biconvex Positive

nd = 1.76684, νd = 46.79. Glass: J-LASFH2-class (coordinate-compatible spectral proxy; supplier unproven). f = +69.006 mm.

L1 is the front positive element of G1. Its standalone in-air power is positive, but the group behavior is determined by L1 together with L2, L3, their spacings, and the surrounding media. The patent identifies G1 as a positive focusing group and places this biconvex element first in the First Embodiment. (US 5,751,485, PDF p. 25.)

The 767468 coordinate is highly compatible with HIKARI J-LASFH2, but neither the patent nor Nikon's production literature establishes the production supplier or melt. The implemented label therefore remains a coordinate class rather than a supplier attribution.

### L2 — Positive Meniscus

nd = 1.71700, νd = 48.06. Glass: LAF3-class (coordinate-compatible spectral proxy; supplier unproven). f = +45.921 mm.

L2 is the second positive element of G1 and is a positive meniscus with its convex surface toward the object, matching the patent's prose description of the First Embodiment. Together, L1 and L2 provide the positive portion of G1 before the negative L3 component. (US 5,751,485, PDF p. 25.)

The 717480 coordinate is consistent with the LAF3/J-LAF3 family represented in the retained catalog evidence. Because more than one vendor family is compatible, the final data does not select a production supplier.

### L3 — Negative Meniscus

nd = 1.62588, νd = 35.70. Glass: S-TIM1-class (coordinate-compatible spectral proxy; supplier unproven). f = −29.862 mm.

L3 is the negative meniscus that completes positive group G1. The patent's general first-mode discussion requires each of the two moving positive groups to contain a negative lens component for chromatic correction at close focus; L3 is that negative component in G1. Condition (10) uses its νd = 35.70 as the minimum Abbe number of the negative component in G1. (US 5,751,485, PDF pp. 15–16 and Table 1 on PDF p. 26.)

The 1.62588 / 35.70 coordinate is closely matched by the catalog S-TIM1 curve, used as a supplier-neutral spectral proxy.

### L4 — Biconcave Negative, Cemented Pair D1

nd = 1.69895, νd = 30.05. Glass: E-FD15-class (coordinate-compatible spectral proxy; supplier unproven). f = −27.992 mm.

L4 is the negative member of the cemented L4+L5 doublet at the front of G2. Its rear surface is the cemented interface into L5, so the junction uses the downstream L5 refractive index rather than an air layer. The patent identifies this pair as a cemented biconcave/biconvex combination. (US 5,751,485, PDF p. 25.)

The E-FD15 catalog coordinate matches 1.69895 / 30.05. It supplies a qualified spectral proxy; the patent does not identify the production supplier.

### L5 — Biconvex Positive, Cemented Pair D1

nd = 1.71300, νd = 53.89. Glass: S-LAL8-class (coordinate-compatible spectral proxy; supplier unproven). f = +33.279 mm.

L5 is the positive member of the D1 cemented pair. Although L4 and L5 have substantial standalone in-air powers of opposite sign, the actual cemented pair has a computed net focal length of approximately −2688.56 mm and is therefore nearly neutral in paraxial power as a combined unit. That value is distinct from the powers of the individual elements and from the positive +57.898 mm focal length of G2 as a whole.

The patent's first-mode discussion associates a negative component in each moving positive group with chromatic correction; D1 is the explicit negative/positive cemented pair in G2. The analysis does not assign a more specific aberration contribution beyond that source statement.

### L6 — Biconvex Positive

nd = 1.76684, νd = 46.79. Glass: J-LASFH2-class (coordinate-compatible spectral proxy; supplier unproven). f = +66.734 mm.

L6 is the rear positive singlet of G2. In combination with the nearly neutral D1 pair and the internal spacings, it contributes to the net positive power of G2. L6 uses the same patent glass coordinate as L1, and the data therefore uses the same 767468-class label.

The rear surface of L6 borders the variable d11 air space leading to the fixed G3 section. This spacing grows substantially toward close focus and is one of the two source-published focusing intervals preserved in the model.

### L7 — Biconvex Positive

nd = 1.64831, νd = 33.75. Glass: S-TIM22-class (coordinate-compatible spectral proxy; supplier unproven). f = +52.653 mm.

L7 is the positive front singlet of G3. The source keeps G3 fixed axially during focusing, so L7 and L8 retain their internal relationship while G1 and G2 move. G3 as a complete group has negative power despite L7's positive standalone power.

The 648338 coordinate is close to OHARA S-TIM22 and the HOYA E-FD2 family. The residual is small enough for class-level compatibility but not exact enough to justify a specific production glass or supplier.

### L8 — Biconcave Negative

nd = 1.79631, νd = 40.90. Glass: NBFD2-class (coordinate-compatible spectral proxy; supplier unproven). f = −38.674 mm.

L8 is the negative rear singlet completing G3. Its high index and νd = 40.90 enter the patent's conditions (6) and (7), while the L7/L8 shapes enter the q+ and q− shape-factor conditions. G3's computed focal length is −169.193 mm, and the patent attributes part of its system-level role to balancing Petzval curvature and, in the experimental embodiment, providing the transversely shifted vibration-reduction group. (US 5,751,485, PDF pp. 14–16.)

NBFD2 (1.797199 / 41.143795) is a compatible spectral proxy for L8. The residual does not establish production-glass identity.

## Glass Identification and Selection

Patent refractive indices and Abbe numbers are preserved. Named catalog glasses below are coordinate-compatible spectral proxies, not identifications of the production supplier or historical melt. The runtime compatibility guards are unchanged; no catalog-derived line indices are copied into the prescription.

| Element | Patent nd | Patent νd | Runtime glass annotation |
|---|---:|---:|---|
| L1 | 1.76684 | 46.79 | J-LASFH2-class (coordinate-compatible spectral proxy; supplier unproven) |
| L2 | 1.71700 | 48.06 | LAF3-class (coordinate-compatible spectral proxy; supplier unproven) |
| L3 | 1.62588 | 35.70 | S-TIM1-class (coordinate-compatible spectral proxy; supplier unproven) |
| L4 | 1.69895 | 30.05 | E-FD15-class (coordinate-compatible spectral proxy; supplier unproven) |
| L5 | 1.71300 | 53.89 | S-LAL8-class (coordinate-compatible spectral proxy; supplier unproven) |
| L6 | 1.76684 | 46.79 | J-LASFH2-class (coordinate-compatible spectral proxy; supplier unproven) |
| L7 | 1.64831 | 33.75 | S-TIM22-class (coordinate-compatible spectral proxy; supplier unproven) |
| L8 | 1.79631 | 40.90 | NBFD2-class (coordinate-compatible spectral proxy; supplier unproven) |

No patent C/F/g line indices or partial-dispersion measurements are supplied for these elements. Unresolved rows retain the Abbe fallback; compatible rows use the catalog curve. None of these assignments establishes apochromatic performance.

## Focus Mechanism

The source publishes three complete focus states, so the focus status is `PUBLISHED`; no internal-focus reconstruction is used. G1 and G2 move toward the object as focus approaches macro distances, while G3 remains fixed along the optical axis. This is consistent with Nikon's production CRC description of two independently moving optical sections around the aperture, although the patent and production history are separate sources. (US 5,751,485, PDF pp. 25–26; Nikon, *The Thousand and One Nights No. 74*.)

The model preserves the source d6 and d11 values exactly. Because the inserted stop occupies the d6 gap, each source d6 value is represented as equal 6→STO and STO→7 halves. The midpoint stop trajectory is a modeling choice; the patent does not publish a diaphragm cam law.

| Published state | Total d6 | d11 | Computed object→image distance | Computed β | Configuration EFL |
|---|---:|---:|---:|---:|---:|
| Infinity | 6.04963 mm | 1.23344 mm | ∞ | 0 | 59.999843 mm |
| β = −0.5 | 10.97933 mm | 21.77380 mm | 255.524962 mm | −0.4999993 | 54.201066 mm |
| β = −1.0 | 15.91790 mm | 44.13920 mm | 218.879660 mm | −1.0000009 | 49.427326 mm |

The 218.879660 mm object-to-image distance at the 1:1 state agrees closely with Nikon's published 0.219 m minimum focus. The finite-focus configuration EFL values are first-order diagnostics of the changed optical configuration; they are not focal lengths printed in Table 1 or marketed production specifications.

The three source states are mapped to LensVisualizer focus coordinates 0, 0.857059122, and 1. Interpolation between them is piecewise linear and is a viewer/modeling interpolation, not a source-published continuous mechanical trajectory.

## Conditional Expressions

The First Embodiment's Table 1 prints corresponding values for conditions (1)–(11). The final parsed model independently reproduces those quantities within source-precision tolerances. The conditions are patent design constraints, not performance scores.

| Cond. | Patent expression | Recomputed value from final model | Disposition |
|---:|---|---:|---|
| (1) | `|βM| > 0.4` | 1.000000 | satisfied |
| (2) | `0.5 < |fL|/f < 5.0` | 2.819898 | satisfied |
| (3) | `ΔSL/|fL| < 0.1` | 0.00591039 | satisfied |
| (4) | `1.05 < βL < 2` | 1.199997 | satisfied |
| (5) | `L/f < 0.5` | 0.1200003 | satisfied |
| (6) | `1.7 < N−` | 1.79631 | satisfied |
| (7) | `30 < ν−` | 40.90 | satisfied |
| (8) | `−3 < q− < 5` | 0.679805 | satisfied |
| (9) | `−6 < q+ < 2` | −0.757705 | satisfied |
| (10) | `νm < 37` | G1 35.70; G2 30.05 | satisfied |
| (11) | `1.5 < f1/f2 < 2.5` | 1.803359 | satisfied |

Condition (7) contains a source-text inconsistency: the explanatory prose refers to an “upper limit,” while the rendered inequality is the lower-bound expression `30 < ν−` and Table 1 gives ν− = 40.90. The rendered formula and numerical table are retained; no patent value is silently changed. (US 5,751,485, PDF pp. 15–16 and 26.)

## Patent Vibration-Reduction Experiment

The patent's First Embodiment makes the whole rear G3 group the transverse vibration-reduction group while keeping it fixed axially during focusing. Table 1 specifies a 1.00 mm transverse group shift and a −0.20 mm image shift at each listed focus state. Recalculation from the final centered prescription gives −0.199997 mm image shift for a 1.00 mm rigid G3 decenter in the paraxial model, reproducing the patent value to the table precision.

This result is a verification of the patent experiment only. The production AF Micro-Nikkor 60mm f/2.8D is non-VR, and the data file does not add a stabilization control or decentered optical state. The implemented prescription remains centered. The patent's transverse-shift values therefore must not be read as production mechanical specifications.

## Verification Summary

The implemented infinity EFL is 59.999843052 mm, compared with the patent's 59.9998 mm. The infinity BFD is 39.384372959 mm measured from the vertex of surface 15 to the paraxial image plane, compared with the patent's 39.38439 mm. Sequential height/reduced-angle tracing and a separately coded ABCD matrix calculation agree for the parsed final data.

The surface-by-surface Petzval sum, using `φ/(n·n′)` on every refracting surface and zero contribution from the synthetic stop, is +0.002025606493 mm⁻¹. The patent explicitly discusses the negative rear group as part of its field-curvature balancing strategy; the numerical Petzval value here is the independent model result, while the causal interpretation remains the patent's statement.

The inferred stop has a modeled entrance-pupil semi-diameter of 10.638270 mm and produces f/2.820000 by construction. That agreement is calibration, not independent evidence for an unpublished physical aperture diameter.

The semi-diameters remain estimates. Figure 1 review sets surfaces 7–11 to a common 11.0 mm rim, matching the smaller middle group. Repository surface validation passes; the revised apertures can alter peripheral vignetting, so earlier portable ray-clearance counts are not presented as validation of this revision.

## Sources

- Suzuki, Kenzaburo. **US Patent 5,751,485**, *Lens Capable of Short Distance Photographing with Vibration Reduction Function*, Nikon Corporation, granted May 12, 1998. Primary prescription: Fig. 1 and First Embodiment/Table 1, supplied PDF pp. 2, 25–26; first-mode conditions, PDF pp. 13–16.
- Nikon USA, **AF Micro-Nikkor 60mm f/2.8D** product archive: https://www.nikonusa.com/p/af-micro-nikkor-60mm-f28d/1987/overview
- Nikon Imaging, **NIKKOR — The Thousand and One Nights No. 74: The AI AF Micro-Nikkor 60mm f/2.8S**: https://imaging.nikon.com/imaging/information/story/0074/
- Nikon USA, **NIKKOR Lens Brochure**: https://www.nikonusa.com/fileuploads/pdfs/Nikkor%20lens%20Broch_061017.pdf
- HIKARI GLASS CO., LTD. / Nikon, **OPTICAL GLASS 2023-9**: https://www.nikon.com/business/components/lineup/materials/optical-glass/assets/pdf/hikari_catalog2023.pdf
- OHARA Corporation, **Optical Glass Catalog**: https://oharacorp.com/glass-catalog/ and **S-TIM22 datasheet**: https://oharacorp.com/wp-content/uploads/2023/06/estim22.pdf
- HOYA GROUP Optics Division, **Optical Glass Data Download**: https://www.hoya-opticalworld.com/english/datadownload/index.html
- CDGM GLASS CO., LTD., **F-family optical-glass database**: https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&pageIndex=15&url=database and **H-ZF11 datasheet**: https://www.cdgmgd.com/webapp/pdf/H-ZF11.pdf
- SUMITA OPTICAL GLASS, Inc., **Optical Glass Data downloads**: https://www.sumita-opt.co.jp/en/download/
