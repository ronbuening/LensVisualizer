# NIKON AF-S DX MICRO-NIKKOR 40mm f/2.8G — Patent Analysis

## Patent Reference and Design Identification

**Patent:** US 2011/0170195 A1\
**Application Number:** 13/006,210\
**Priority:** January 14, 2010 (JP 2010-005516); October 21, 2010 (JP 2010-236640)\
**Filed:** January 13, 2011\
**Published:** July 14, 2011\
**Inventors:** Mami Muratani; Issei Tanaka\
**Assignee:** Nikon Corporation\
**Title:** *Imaging Lens, Optical Apparatus Including Imaging Lens and Method for Manufacturing Imaging Lens*\
**Embodiment analyzed:** Example 1

The prescription transcribed here is the job-card-selected Example 1 of US 2011/0170195 A1. The patent describes a 40.00 mm macro lens with a design f-number of 2.68, a full field of 39.0°, and published infinity, −0.5×, and −1.0× focus states (Table 1; ¶¶0096–0108). The LensVisualizer model retains those exact design quantities where the source publishes them and keeps them separate from the production lens's marketed 40 mm f/2.8 specification.

The production correlation is supported by several convergent points, but it is not presented as manufacturer confirmation that Example 1 is the final mass-production prescription:

1. **Focal length and field.** Example 1 gives $f=40.00$ mm and $2\omega=39.0°$. Nikon specifies the production lens as 40 mm with a 38°50′ angle of view on DX format.[^nikon-spec]
2. **Macro range.** Example 1 publishes a close state at $\beta=-1.0$; Nikon specifies 1.0× maximum reproduction.[^nikon-spec]
3. **Focus architecture.** The patent moves G1 and G2 objectward with changing separation while G3 remains fixed (¶¶0099, 0104). Nikon's design retrospective describes the production lens as a three-group system in which the third group is fixed and the first and second groups move with focusing.[^nikon-story]
4. **Timing.** The patent priorities begin in January 2010 and the publication appeared on July 14, 2011. Nikon states that production-lens design work began in spring 2009, was finalized in spring 2010, and the lens was released in August 2011; Nikon USA announced it on July 12, 2011.[^nikon-story][^nikon-release]
5. **Construction discrepancy.** The active patent prescription contains nine glass elements in eight air-separated glass assemblies, with one cemented L21/L22 pair. Nikon's production specification is nine elements in seven groups.[^nikon-spec] This is a genuine construction mismatch, not a terminology-only difference.

The last point limits the correlation. The patent's labels G1, G2, and G3 are power and kinematic groups rather than the physical group count used in the product specification, but the patent still has eight air-separated glass assemblies. The data file therefore records `elementCount: 9` and `groupCount: 8` for the modeled prescription while explicitly preserving Nikon's 9-element/7-group production specification as separate product metadata.

Nikon's retrospective credits the production optical design to Motohisa Mouri, whereas the selected patent names Mami Muratani and Issei Tanaka as inventors.[^nikon-story] The present identification is therefore a fixed optical and chronological correlation selected by the job card, not a claim that Nikon has identified Example 1 as Mouri's final manufacturing prescription.

No scale factor is applied. Example 1 is already a 40.00 mm design, and the computed model EFL is 40.001074 mm.

## Optical Architecture

Example 1 is a three-power-group macro lens with a positive–positive–negative sequence: G1 is positive overall, G2 is positive, and G3 is negative (¶¶0092, 0096–0099). G1 is itself divided into a negative front subgroup G1F and a positive rear subgroup G1R. Independent paraxial calculation from the final data gives focal lengths of approximately −681.94 mm for G1F, +186.44 mm for G1R, +222.05 mm for G1, +34.10 mm for G2, and −170.52 mm for G3.

The front section is best described as a modified-Gaussian, retrofocus-derived architecture rather than labeling the entire lens a retrofocus system. The patent states that the G1/G2 balance gives a retrofocus effect to a modified Gaussian arrangement (¶0038), and Nikon's retrospective likewise describes the production first and second groups as retrofocus-based.[^nikon-story] Under the project's strict whole-system criterion, however, the modeled rear focal distance does not exceed the EFL: the normalized S18 back focal distance is 39.070621 mm versus a 40.001074 mm EFL. The complete modeled lens is therefore not classified as retrofocus under the strict $BFD>EFL$ definition. It is also not telephoto: the patent infinity total track is much longer than the EFL.

G1 contains four air-spaced elements in negative/positive/positive/negative order. The patent uses the front negative-positive pair to control ray angles and off-axis behavior, while the positive rear subgroup restores net positive power (¶¶0040–0057). G2 lies immediately behind the aperture stop and contains the only cemented pair, L21/L22, followed by positive L23. G3 is a fixed two-element negative-positive rear group that receives the converging beam from G1/G2 and leaves the image plane stationary during focusing (¶¶0058–0059, 0098–0099).

The modeled aperture stop occupies the patent-published axial station between G1 and G2. Its diameter is not published. The data therefore uses an inferred physical stop semi-diameter of 7.430942 mm, solved from the exact front prescription to reproduce the Table-1 design f-number of 2.68. The resulting entrance-pupil semi-diameter is 7.462887 mm and the independently recomputed model f-number is 2.6799999. These pupil dimensions are model geometry, not patent dimensions.

The patent also does not publish clear semi-diameters. All element semi-diameters in the data file are therefore inferred geometry constrained by traced on-axis and off-axis bundles and by the current edge-thickness, rim-slope, conic-domain, cross-gap, and containment tests. They should not be read as production mechanical apertures.

## Element-by-Element Analysis

The focal length on each element line below is the **standalone thick-lens focal length in air** stored by the validated data file. These values are not the same as an individual element's in-situ contribution when it borders another glass at a cemented interface. Where relevant, cemented net power is stated separately.

### L11 — Negative Meniscus, concave to image

**nd = 1.48749, νd = 70.40. Glass: FK5 (SUMITA catalog equivalent; production supplier unspecified). Standalone f = −35.974 mm.**

L11 is the object-side negative meniscus required by the patent's basic architecture (¶¶0011, 0090, 0096). Its image-side surface has the stronger curvature, so the element sends off-axis rays outward before L12 collects them. The patent's discussion of conditional expression (3) explicitly treats the L11–L12 spacing as part of the control of off-axis ray angles and the division of corrective work between the first three members of G1 (¶¶0040–0043).

The patent further treats the air space between the rear of L11 and the front of L12 as a meniscus-shaped “air lens.” Its shape-factor condition is intended to restrain changes in ray angle from infinity to close focus and thereby stabilize coma; the patent also connects the lower side of this condition with axial and lateral chromatic behavior at the g line (¶¶0048–0050). Those statements describe the pair's system role rather than assigning an isolated aberration correction to L11 alone.

### L12 — Biconvex Positive

**nd = 1.80604, νd = 40.77. Glass: NBFD13 (HOYA catalog correlation; patent vendor unspecified). Standalone f = +42.951 mm.**

L12 is the positive second member of G1F. Together with L11 it forms a front subgroup that remains slightly negative overall; independent calculation gives G1F a focal length of about −681.94 mm. The strong positive surface powers of L12 oppose the angular expansion produced by L11 while leaving the subgroup's net sign negative.

The high refractive index permits substantial positive power without requiring still stronger curvature. The relatively low νd compared with the 487704 crown in L11 also shows that the pair is not a conventional crown-positive/flint-negative achromat. The patent instead emphasizes the geometric balance of this pair and the spacing onward to L13 for controlling spherical aberration, coma, and field-dependent behavior over the macro focus range (¶¶0040–0050).

### L13 — Biconvex Positive

**nd = 1.61272, νd = 58.73. Glass: BACD4 (HOYA catalog correlation; patent vendor unspecified). Standalone f = +23.873 mm.**

L13 is the strongest standalone positive element in G1 and begins the positive rear subgroup G1R. The air gap between L12 and L13 is the denominator term in the patent's $D_a/D_b$ condition. The patent states that retaining sufficient separation here helps keep spherical aberration under control while preserving the balance from infinity to near focus (¶¶0040–0043).

G1R is positive overall, with an independently computed focal length of about +186.44 mm. In system terms, L13 supplies most of the subgroup's positive convergence before L14 moderates that power and sets the beam for the aperture-stop region.

### L14 — Biconcave Negative

**nd = 1.61293, νd = 37.00. Glass: F3 (SUMITA catalog equivalent; production supplier unspecified). Standalone f = −24.057 mm.**

L14 is the negative second member of G1R and the last powered element before the stop. The combination of positive L13 and negative L14 remains positive as a subgroup; the patent explicitly assigns G1R positive refractive power and describes its balance with negative G1F as part of the correction strategy across focus (¶¶0053–0057, 0096).

Its low νd contrasts with the crown-like L13. That dispersion contrast can support ordinary primary chromatic balancing inside G1, but the available data does not contain the line indices or partial-dispersion measurements needed to make an anomalous-dispersion or apochromatic claim.

### L21 — Biconcave Negative, cemented front member of D1

**nd = 1.61293, νd = 37.00. Glass: F3 (SUMITA catalog equivalent; production supplier unspecified). Standalone f = −21.025 mm.**

L21 is the negative front member of the only cemented pair in Example 1. Its front surface is strongly negative, while its shallow cemented rear surface joins directly to L22. In the LensVisualizer prescription the shared surface carries the downstream L22 index and element identity, matching the actual glass-to-glass boundary.

The standalone focal length above describes L21 isolated in air. At the cemented interface its in-situ span is different because the rear medium is L22 rather than air. The distinction matters here: the L21/L22 pair as a whole has a computed net focal length of **−142.509 mm**, even though L22 is a strong positive element.

### L22 — Biconvex Positive, cemented rear member of D1

**nd = 1.62041, νd = 60.29. Glass: N-SK16 (SCHOTT catalog equivalent; production supplier unspecified). Standalone f = +27.928 mm.**

L22 is the positive rear member of the cemented D1 pair. Its νd is substantially higher than L21's 37.00, so the pair combines opposite powers with a large Abbe-number separation. That is consistent with primary chromatic balancing, but the patent gives no vendor glass names and no per-line dispersion data from which to infer higher-order chromatic behavior.

The pair's weak net negative power must not be confused with G2's function. G2 also contains L23, and the complete group is strongly positive: independent calculation gives G2 an effective focal length of about +34.10 mm. The patent's conditions (2) and (7) specifically constrain G2's focal length relative to G1 and the whole lens because excessive or insufficient G2 power compromises back focus, spherical aberration, coma, or working-distance behavior (¶¶0037–0039, 0051–0052).

### L23 — Biconvex Positive with rear asphere

**nd = 1.61881, νd = 63.73. Glass: M-PCD4 (HOYA catalog correlation; patent vendor unspecified). Standalone f = +31.536 mm.**

L23 is the positive rear member that turns the weakly negative cemented L21/L22 pair into the net-positive G2 assembly. It is also the only element carrying an aspherical surface: the image-side surface is `14A` in the data file, corresponding to patent surface 14*.

The patent does not assign one named aberration exclusively to surface 14. A system-level interpretation is therefore more defensible: the asphere modifies the converging beam immediately before the variable G2→G3 spacing, giving the design an additional correction degree of freedom as the first two groups move through the macro range. The exact equation and verified departure are discussed in the asphere section below.

### L31 — Negative Meniscus, concave to image

**nd = 1.48749, νd = 70.40. Glass: FK5 (SUMITA catalog equivalent; production supplier unspecified). Standalone f = −58.213 mm.**

L31 begins the fixed rear group G3. It is a negative meniscus with its concavity directed toward the image, as specified in the patent's Example-1 construction (¶¶0090, 0098). G3 receives a converging beam from the positive front groups and remains fixed relative to the image plane while G1 and G2 move.

The group is net negative even after the following positive L32; the independently computed G3 focal length is about −170.52 mm. The fixed negative rear group is part of the patent's strategy for reducing overall length while preserving back focus without requiring the image plane to move during focusing (¶¶0008–0011, 0034).

### L32 — Positive Meniscus, concave to object

**nd = 1.74400, νd = 44.79. Glass: J-LAF2 (HIKARI catalog equivalent; production supplier unspecified). Standalone f = +93.164 mm.**

L32 is the final powered element and is a positive meniscus concave toward the object. It partially offsets L31 while leaving G3 negative overall. The patent specifically states that placing a positive lens closest to the image side in G3 can move the exit pupil farther away and facilitate coma correction (¶0058).

The high index of 1.74400 allows this weak positive correction to be obtained with relatively gentle curvatures, particularly at the very weak object-side surface. Its νd of 44.79 is intermediate within the palette and does not, by itself, establish anomalous partial dispersion.

## Glass Identification and Selection

The patent publishes only d-line refractive index and Abbe number (`nd`, `νd`) for the active elements. It does not identify the optical-glass manufacturer. The final data uses checked catalog equivalents for dispersion modeling while explicitly leaving the production supplier unspecified.

| Data-file glass annotation | nd | νd | Elements | Interpretation |
|---|---:|---:|---|---|
| FK5 (SUMITA catalog equivalent; production supplier unspecified) | 1.48749 | 70.40 | L11, L31 | Low-index, high-νd crown used in negative menisci |
| NBFD13 (HOYA catalog correlation; patent vendor unspecified) | 1.80604 | 40.77 | L12 | Catalog-compatible high-index positive member of G1F |
| BACD4 (HOYA catalog correlation; patent vendor unspecified) | 1.61272 | 58.73 | L13 | Catalog-compatible crown-like positive member of G1R |
| F3 (SUMITA catalog equivalent; production supplier unspecified) | 1.61293 | 37.00 | L14, L21 | Lower-νd negative members in G1R and G2 |
| N-SK16 (SCHOTT catalog equivalent; production supplier unspecified) | 1.62041 | 60.29 | L22 | Higher-νd positive half of the cemented pair |
| M-PCD4 (HOYA catalog correlation; patent vendor unspecified) | 1.61881 | 63.73 | L23 | Catalog-compatible positive rear member of G2 and asphere carrier |
| J-LAF2 (HIKARI catalog equivalent; production supplier unspecified) | 1.74400 | 44.79 | L32 | High-index positive final meniscus |

The independent glass audit found close coordinate matches in more than one manufacturer family for several rows. The selected entries reproduce the patent coordinates within the project compatibility window and provide verified dispersion curves. They are modeling choices, not evidence that Nikon purchased those melts for this design.

No element in the final data directly authors `nC`, `nF`, `ng`, or `dPgF`; compatible catalog names let the runtime derive curves for the correlated rows. Those curves improve modeled chromatic coverage but do not establish historical melts or justify an APO claim. The patent `nd/νd` pattern remains sufficient to discuss ordinary dispersion contrast—most clearly across the L21/L22 cemented pair.

## Focus Mechanism

The focus state is **PUBLISHED** rather than reconstructed. Example 1 gives explicit INF, MID ($\beta=-0.5$), and CLD ($\beta=-1.0$) spacings. G1 and G2 move toward the object, their separation changes, the aperture stop moves with G2, and G3 remains fixed relative to the image plane (¶¶0099, 0104).

The patent divides the G1→G2 interval around the stop into `d1a` and `d1b`. The stop-to-G2 spacing `d1b` stays fixed at 4.00000 mm, so the stop is kinematically tied to G2. The published states are:

| State | β | d1a: G1→STO (mm) | d1b: STO→G2 (mm) | d2: G2→G3 (mm) |
|---|---:|---:|---:|---:|
| INF | 0 | 2.96840 | 4.00000 | 1.21000 |
| MID | −0.5 | 3.21650 | 4.00000 | 13.37100 |
| CLD | −1.0 | 5.33230 | 4.00000 | 25.70880 |

Taking infinity as the zero position, independent kinematic calculation gives G2 objectward travel of 12.1610 mm at MID and 24.4988 mm at CLD. G1 travels 12.4091 mm at MID and 26.8627 mm at CLD. The G1 travel reproduces the patent's conditional value $X_1/f=0.672$ after source-precision rounding.

The runtime focus control stores INF, MID, and CLD as exact keyframes. The published MID pair does not lie on a single endpoint interpolation: its normalized position is 0.104954 along `d1a` but 0.496392 along `d2`. At `focusT = 0.9106579317813288`, both gaps now reach the source row together. Recalculation at the published MID spacings gives lateral magnification −0.500004; the published CLD endpoint gives −0.999991.

Product and patent close-distance numbers are intentionally separated. Nikon specifies a production minimum focus distance of **0.163 m from the focal plane**.[^nikon-spec] The patent's CLD geometry gives an object-to-image-plane distance of **0.15264661 m** after the source reference planes are normalized. The 10.35 mm difference is one of the reasons the selected embodiment is treated as a strong production correlate rather than silently equated with every production dimension.

Nikon's retrospective says the production first group moves “just over 3 cm.”[^nikon-story] Example 1's independently derived G1 travel is 26.8627 mm. This is another direct production-to-patent difference and is not corrected in the model.

The production lens uses Nikon's Silent Wave Motor for autofocus and provides M/A and M focus modes.[^nikon-spec] Those are mechanical product features; they do not alter the patent's optical focus-state data.

## Aspherical Surfaces

Example 1 has one aspherical surface: patent surface 14*, the rear surface of L23. LensVisualizer labels it `14A` to follow the current surface-label convention.

The patent writes the sag equation as

$$
S(y)=\frac{y^2/r}{1+\sqrt{1-k\,y^2/r^2}}
+A_4y^4+A_6y^6+A_8y^8+A_{10}y^{10},
$$

with $A_2=0$ (¶¶0094–0095; Table 1). LensVisualizer's standard conic equation instead places $(1+K)$ under the radical. The required convention conversion is therefore

$$
K=k-1.
$$

For patent $k=0.3210$, the stored standard conic constant is **K = −0.6790**. This is a convention conversion only; it is not a correction to the patent.

The source coefficients, in millimeter units, are:

- $A_4=+4.54813\times10^{-6}\ \mathrm{mm}^{-3}$
- $A_6=+5.40478\times10^{-9}\ \mathrm{mm}^{-5}$
- $A_8=-5.17090\times10^{-12}\ \mathrm{mm}^{-7}$
- $A_{10}=+5.14254\times10^{-15}\ \mathrm{mm}^{-9}$

No dimensional scaling is applied, so the coefficients are stored without scale transformation and $K$ remains unchanged.

The patent does not publish a clear-aperture height for surface 14. The data file's 9.0 mm semi-diameter is an inferred, Figure-1-refined, and independently geometry-validated modeling aperture. At that verified semi-diameter, the modeled asphere sag is −1.580828 mm versus −1.650574 mm for the reference sphere, a **+0.069746 mm departure**; in other words, the asphere is about 0.070 mm shallower than its spherical reference at the modeled rim. This departure is a computed property of the validated model, not a patent-published aperture specification.

## Conditional Expressions

The patent supplies ten explicit design conditions. Recalculation from the selected prescription reproduces the published Example-1 values at the source's three-decimal precision and satisfies every stated inequality.

| No. | Patent condition | Computed | Published |
|---:|---|---:|---:|
| 1 | $0.50\le(-\beta)$ | 1.000000 | 1.000 |
| 2 | $0.07<f_2/f_1<0.35$ | 0.153581 | 0.154 |
| 3 | $0.10<D_a/D_b<2.00$ | 0.507111 | 0.507 |
| 4 | $0.40<X_1/f<0.90$ | 0.671568 | 0.672 |
| 5 | $0.35<f/TL<1.20$ | 0.460537 | 0.461 |
| 6 | $0.90<(r_2+r_1)/(r_2-r_1)<2.50$ | 1.663138 | 1.663 |
| 7 | $0.30<f(-\beta)/f_2<1.50$ | 1.172943 | 1.173 |
| 8 | $0.05<f_p/(-f_n)<0.60$ | 0.273391 | 0.273 |
| 9 | $0.04<f/(-f_n)<0.40$ | 0.058656 | 0.059 |
| 10 | $0.07<f/f_p<0.80$ | 0.214551 | 0.215 |

These conditions explain several structural choices without requiring an element-by-element attribution that the source does not make. Conditions (2) and (7) constrain G2 power; (3) and (6) constrain the spacing and shape relationship around L11/L12/L13; (4) constrains G1 focus travel; and (8)–(10) constrain the balance between the negative G1F and positive G1R subgroups (¶¶0037–0057).

## Verification Summary

Independent calculation was rerun from the final TypeScript surface and element arrays rather than copied from the extraction notes. The load-bearing results are:

| Quantity | Final-model result | Source or model reference |
|---|---:|---|
| EFL | 40.001074 mm | Patent $f=40.00$ mm |
| Modeled wide-open f-number | 2.6799999 | Patent FNO = 2.68 |
| S18 paraxial BFL | 39.070621 mm | Independent calculation |
| Modeled S18→IMG air gap | 39.071320 mm | Normalized from patent INF ACTL |
| Infinity active track | 86.173720 mm | Patent ACTL = 86.17372 mm |
| MID magnification | −0.500004 | Patent $\beta=-0.5$ |
| CLD magnification | −0.999991 | Patent $\beta=-1.0$ |
| Petzval sum | +0.003020087 mm⁻¹ | Surface-by-surface $\phi/(n n')$ calculation |

The low-pass plate published as patent surfaces 19–20 is intentionally excluded from the active lens model. Its optical effect is folded into a **39.07132 mm air-equivalent S18→IMG spacing**, derived from the published infinity ACTL. The patent's raw `Bf`/`ACBf` entries exhibit an internal reference-plane inconsistency; the analysis therefore follows the normalized data model instead of silently substituting either raw value.

The stop axial position is source-published, but its diameter is inferred from the modeled f-number. All element semi-diameters are likewise modeling inferences because the patent supplies no clear apertures. Independent Stage-2 geometry checks found positive edge thicknesses, acceptable actual rim slopes, a valid conic domain, no prohibited cross-gap intrusion, and containment of all 42 representative on-axis/off-axis rays across INF, MID, and CLD. These checks validate the authored geometry as a LensVisualizer model; they do not convert inferred semi-diameters into production dimensions.

## Sources

- US 2011/0170195 A1, Mami Muratani and Issei Tanaka, *Imaging Lens, Optical Apparatus Including Imaging Lens and Method for Manufacturing Imaging Lens*, published July 14, 2011. Example 1, especially Figs. 1–3, ¶¶0092–0110, and Table 1.
- Nikon Corporation, [AF-S DX Micro NIKKOR 40mm f/2.8G — specifications](https://imaging.nikon.com/imaging/lineup/lens/f-mount/specialpurpose/micro/af-s_dx_micro40mmf_28g/).
- Nikon Corporation, [NIKKOR — The Thousand and One Nights No. 88: AF-S DX Micro NIKKOR 40mm f/2.8G](https://imaging.nikon.com/imaging/information/story/0088/).
- Nikon Inc., [July 12, 2011 press release for the AF-S DX Micro NIKKOR 40mm f/2.8G](https://www.nikonusa.com/press-room/get-closer-to-clarity-the-new).

[^nikon-spec]: Nikon Corporation, *AF-S DX Micro NIKKOR 40mm f/2.8G* product specification.
[^nikon-story]: Nikon Corporation, *NIKKOR — The Thousand and One Nights No. 88*.
[^nikon-release]: Nikon Inc., July 12, 2011 product announcement.
