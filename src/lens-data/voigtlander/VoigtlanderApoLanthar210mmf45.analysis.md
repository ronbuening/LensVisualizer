## Patent Reference and Design Identification

**Patent:** US 2,645,154\
**Filed:** September 9, 1950\
**Priority:** Switzerland, October 17, 1949\
**Granted:** July 14, 1953\
**Inventor:** Albrecht Wilhelm Tronnier\
**Assignee:** Voigtländer & Sohn Aktiengesellschaft\
**Title:** *Five-Lens Photographic Objective*\
**Embodiment analyzed:** Example 1

The prescription is the Example 1 five-lens objective in US 2,645,154, treated here as the fixed production correlation for the **VOIGTLÄNDER APO-LANTHAR 210mm f/4.5** specified by the project job card. The patent identifies the design as a Heliar-type objective and publishes a normalized prescription with $F=1.0000$, a relative aperture of f/4.5, five lenses in three air-separated members, and an image field described as almost 60° (US 2,645,154, Example, printed pp. 5–6).

The production identity is supported independently by a Carl Zeiss Inc., Photographic Division catalog effective May 15, 1965. Its Voigtländer professional-lens listing includes an Apo-Lanthar f/4.5 series, describes it as a five-element anastigmat, and lists a 210mm f/4.5 version in an X-Compound shutter. That catalog establishes the commercial 210mm f/4.5 five-element Apo-Lanthar configuration; it does not identify US 2,645,154 or Example 1 as the production prescription. The patent-to-product correspondence therefore remains the fixed project correlation rather than a manufacturer-confirmed patent match.

The data model separates marketed and modeled values. The commercial focal-length designation is 210mm and the marketed maximum aperture is f/4.5. The final scaled prescription recomputes to an effective focal length of **210.004074571 mm**, while `nominalFno` and `apertureDesign` remain **4.5** because the inferred physical stop was calibrated to the patent's f/4.5 statement. `lensMounts: ["large-format-lens-board"]` is a LensVisualizer taxonomy mapping for the documented shutter-mounted view-camera form, not a historical manufacturer mount name. No `imageFormat` is assigned because the available source set does not establish a sufficiently specific format or image-circle designation.

Example 1 is dimensionless. The fixed production correlation applies a uniform scale of **210 mm per patent $F$ unit** to the patent-prescribed radii, lens thicknesses, air spaces, and diaphragm-space split. The patent also states that a focal length of 200mm was assumed for the objective shown in the drawing; because the worked prescription itself is normalized to $F=1.0000$, that statement is an illustrative drawing scale rather than a second prescription. The modeled stop diameter and non-stop semi-diameters are inferred after the 210mm scaling, not scaled from published aperture data. The design is entirely spherical, so no aspherical coefficient transformation is applicable. The last air distance is independently recomputed as the paraxial infinity back focal distance of **181.934781630 mm**, rather than taken as the simple 210× scaling of the patent's rounded $p'_{\infty}=0.8663F$ value (**181.923000000 mm**). The **+0.011781630 mm** difference is retained as a source-rounding residual; no patent radius, thickness, refractive index, or Abbe number is renormalized to conceal it.

## Optical Architecture

The objective is a five-element, three-group Heliar-type design with member powers **positive – negative – positive**. The front and rear members are cemented doublets; an isolated biconcave negative lens occupies the center. The diaphragm lies in the air space between the central negative element and the rear cemented member. All refracting surfaces are spherical, with the rear surface of L2 genuinely plano rather than a dummy plane.

The front member combines positive L1 with negative L2 and has a computed cemented-member EFL of **+90.504353 mm** ($0.43097F$). The isolated L3 has a standalone EFL of **−61.814711 mm** ($-0.29436F$). The rear member combines negative L4 with the strong positive L5 and has a computed cemented-member EFL of **+124.886804 mm** ($0.59470F$). These values reproduce the patent's corresponding rounded member magnitudes of 0.431F, 0.294F, and 0.595F. They are assembly powers: they should not be substituted for the standalone air focal lengths of the component lenses, and neither standalone element power nor cemented-member power is equivalent to an individual surface's in-situ contribution in the complete objective.

Tronnier's central design choice is not merely the familiar Heliar grouping. The patent deliberately combines a distinctly positive front cemented member with an unequal-curvature, high-index negative central lens so that rays leaving the central lens are only weakly divergent, almost parallel, or at most weakly convergent before entering the strongly converging rear member. It also requires the cemented contact surfaces of both outer members to have converging effect and places emphasis on the glass selection of the strongest powered components for off-axis and chromatic correction (US 2,645,154, printed pp. 1–4).

The complete scaled model has a physical R1-to-R8 vertex length of **51.888900 mm** and an infinity track of **233.823682 mm**. Its first-order ratios are $TL/EFL=1.11342$ and $BFD/EFL=0.86634$, so it is neither telephoto under the project rule $TL/EFL<1$ nor retrofocus under the project rule $BFD>EFL$.

The patent publishes the stop position but not its diameter. Its diaphragm-space split is retained exactly: R5-to-stop is **8.1585 mm** and stop-to-R6 is **4.2924 mm** after scaling. The modeled stop semi-diameter, **19.507679 mm**, is an author inference from the final prescription and f/4.5 target, not a published mechanical aperture. The patent also gives no clear semi-diameters. The non-stop semi-diameters in the data file are therefore model-derived clear apertures based on exact spherical ray envelopes through the full f/4.5 pupil at 0° and ±18° object field, then enlarged to the common member rims shown in Fig. 2 and checked against edge-thickness, rim-slope, shared-gap, and containment constraints. They are not measurements of production lens cells or polished diameters.

## Element-by-Element Analysis

### L1 — Biconvex Positive

**nd = 1.65953, νd = 57.0. Glass: 660570 — barium crown / special barium crown class; vendor unresolved. f = +70.480418 mm.**

L1 is the converging front component of cemented doublet D1. The patent requires the front positive lens to use a yellow-line refractive index distinctly above 1.63 and describes the strong converging lenses of the outer members as barium-crown or special-barium-crown glasses. L1 satisfies the index requirement at 1.65953. Its standalone air focal length is much shorter than the +90.504353 mm net focal length of D1, showing that the cemented negative partner moderates the front member's positive power.

The first two surfaces also embody the patent's asymmetric power distribution: the strongly convex first surface performs most of the front collection, while the cemented R2 interface works together with L2 rather than acting as an ordinary air-glass boundary. Consequently, L1's standalone focal length is useful for comparing individual lens strength but does not describe its exact contribution in the cemented assembly.

### L2 — Plano-Concave Negative

**nd = 1.60266, νd = 38.4. Glass: 603384 — patent nd/νd coordinate; vendor and specific class unresolved. f = −295.138055 mm.**

L2 is the weak negative rear component of D1. It is cemented to L1 at surface 2 and ends at the patent's real plane surface R3. The final data therefore treats the plane as an optical glass-air boundary, not as a dummy surface. L2's relatively long negative standalone focal length is consistent with its role as a trimming element within a front member that remains distinctly converging overall.

The patent does not assign L2 the same explicit barium-crown or barium-flint class language used for L1, L3, and L5. The data consequently preserves the published coordinate pair with an F5 coordinate-compatible spectral proxy that does not identify the historical supplier. Its negative standalone air power should also not be confused with the refractive action of the cemented R2 interface in the actual L1-to-L2 index transition.

### L3 — Biconcave Negative

**nd = 1.64282, νd = 47.9. Glass: 643479 — highly refractive barium-flint class; vendor unresolved. f = −61.814711 mm.**

L3 is the isolated unequal-curvature negative lens at the center of the objective. It carries the strongest standalone negative power in the five-element set and is the element most tightly constrained by the patent's explicit glass and curvature conditions. Tronnier specifies a highly refractive barium-flint glass, an Abbe number above 42, and a front-to-rear curvature ratio within a defined range. The Example 1 values satisfy those requirements with $n_d=1.64282$, $ν_d=47.9$, and $|R_4|/R_5=2.34265$.

Its location is as important as its power. The front doublet and L3 are arranged so that the beam in the following diaphragm space is not strongly divergent before it reaches the rear positive member. The patent connects this balance to its attempt to improve lateral-field performance without introducing an additional correction element.

### L4 — Biconcave Negative

**nd = 1.60266, νd = 38.4. Glass: 603384 — patent nd/νd coordinate; vendor and specific class unresolved. f = −74.534368 mm.**

L4 begins cemented doublet D2 and shares the same published glass coordinate as L2. As an isolated air lens it is strongly negative, but the complete rear cemented member is positive because it is bonded to the still stronger positive L5. This is a useful example of why the negative standalone focal length of a cemented component cannot be read as the net sign of its group or as a direct measure of its in-situ contribution.

The front surface R6 is weakly curved relative to the other powered surfaces, while the cemented R7 interface is strongly curved. That distribution places much of the rear member's power management at and behind the cemented junction rather than at the air-facing front of L4.

### L5 — Biconvex Positive

**nd = 1.66867, νd = 47.5. Glass: 669475 — barium crown / special barium crown class; vendor unresolved. f = +48.558051 mm.**

L5 is the strongest standalone positive element in the prescription and completes cemented doublet D2. The patent explicitly requires the biconvex positive lens in the rear member to have a yellow-line refractive index distinctly above 1.63; Example 1 gives 1.66867. The patent further notes that this value is higher than L1's 1.65953.

Although L5 alone has a +48.558051 mm air focal length, its combination with negative L4 gives a much weaker +124.886804 mm rear-member focal length. The cemented pair thus supplies the strong final convergence required after the central negative lens while retaining a controlled net group power.

## Glass Identification / Selection

The data file deliberately preserves the patent's d-line coordinates instead of substituting modern catalog glasses. The patent describes L1 and L5 as barium-crown or special-barium-crown glasses and L3 as a highly refractive barium-flint; it does not publish vendor names for the Example 1 melts. L2 and L4 share one coordinate pair but receive no more specific class identification in the Example.

| Element(s) | nd | νd | Authored glass annotation | Status |
|---|---:|---:|---|---|
| L1 | 1.65953 | 57.0 | `660570 — barium crown / special barium crown class; vendor unresolved` | Patent class retained; exact vendor/melt unproven |
| L2, L4 | 1.60266 | 38.4 | `603384 — patent nd/νd coordinate; vendor and specific class unresolved` | Coordinate retained; specific class/vendor unproven |
| L3 | 1.64282 | 47.9 | `643479 — highly refractive barium-flint class; vendor unresolved` | Patent class retained; exact vendor/melt unproven |
| L5 | 1.66867 | 47.5 | `669475 — barium crown / special barium crown class; vendor unresolved` | Patent class retained; exact vendor/melt unproven |

A six-vendor catalog audit against OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA found coordinate analogues but no basis for assigning a specific historical supplier to all four source pairs. The final annotations preserve source classes and add K-LaK11, F5, BAF9, and S-BAH10 as compatible spectral proxies. K-LaK11 is a coordinate analogue only; it does not replace the patent's barium-crown composition statement. In particular, catalog proximity alone is not treated as evidence that a 1950 Voigtländer prescription used a particular modern or surviving catalog glass.

The patent publishes no per-element `nC`, `nF`, `ng`, $P_{gF}$, or `dPgF`, and the final data file intentionally contains none of those spectral fields. The product name **Apo-Lanthar**, the patent's own discussion of half-apochromatic or apochromatic correction, and the 1965 catalog's description of three-color correction are historical source statements. They are not converted here into a LensVisualizer APO or anomalous-partial-dispersion claim because coordinate-compatible proxy curves do not establish the original melts or their anomalous partial dispersion.

## Focus Mechanism

The focus status is **NO_INTERNAL_RECONSTRUCTION**. US 2,645,154 Example 1 publishes an infinity prescription only; it supplies no finite-object spacing table, internal focusing motion, minimum focus distance, or magnification state. The final data therefore has empty `var` and `varLabels` objects and does not move any lens group internally.

The cited 1965 commercial listing documents the 210mm f/4.5 version in an X-Compound shutter, consistent with a view-camera installation. Focusing motion belongs to the camera standards and bellows rather than to an internal lens group, so that external motion is not represented as an optical state here. The required `closeFocusM: 1.0` value is only a finite UI/schema placeholder used by the current corpus for this no-internal-reconstruction case. It is **not** a sourced or modeled 1.0 m minimum focusing distance and must not be interpreted as one.

## Conditional Expressions

US 2,645,154 gives explicit normalized ranges for the surface radii and principal member powers, together with refractive-index, Abbe-number, and central-lens curvature conditions. All applicable Example 1 conditions pass when evaluated from the final authored prescription. The patent's special curvature expression is written with $R_4/R_5$ but its own worked numerical substitution uses positive magnitudes despite the signed Example having $R_4<0$ and $R_5>0$. The analysis therefore follows the patent's worked meaning, $|R_4|/R_5$, without changing either radius sign.

| Patent condition | Example 1 value | Result |
|---|---:|---|
| $0.21F<R_1<0.42F$ | 0.29207F | Pass |
| $0.42F<-R_2<1.68F$ | 0.84699F | Pass |
| $F<|R_3|\leq\infty$ | $\infty$ | Pass |
| $0.42F<-R_4<0.84F$ | 0.63631F | Pass |
| $0.20F<R_5<0.36F$ | 0.27162F | Pass |
| $F<|R_6|\leq\infty$ | 2.42415F | Pass |
| $0.16F<R_7<0.32F$ | 0.23511F | Pass |
| $0.32F<-R_8<0.52F$ | 0.40597F | Pass |
| Front cemented member EFL, 0.35–0.55F | 0.430973F | Pass |
| $|f_{L3}|$, 0.20–0.40F | 0.294356F | Pass |
| Rear cemented member EFL, 0.45–0.75F | 0.594699F | Pass |
| $n_1>1.63$ | 1.65953 | Pass |
| $n_5>1.63$ | 1.66867 | Pass |
| $n_3>1.59$ | 1.64282 | Pass |
| $ν_3>42$ | 47.9 | Pass |
| $1.87<|R_4|/R_5<2.67$ | 2.342648 | Pass |
| $8.33<( |R_4|/R_5 )Z<12.00$, $Z=4.5$ | 10.541915 | Pass |

The final curvature-factor result agrees with the patent's worked value of 10.54192 at the source precision. The patent also discusses the Schwarzschild condition and Tronnier's residual image-field equation, but Example 1 supplies no numerical auxiliary-ray-height table or numerical $S_{1K}$ from which to reconstruct that residual field shell. No value is invented for it.

## Verification Summary

Independent first-order verification of the final TypeScript arrays gives the same system matrix from sequential height/reduced-angle tracing and explicit ABCD multiplication. The scaled prescription yields **EFL = 210.004074571 mm** and **BFD = 181.934781630 mm**, and the inferred stop size produces **f/4.500000000**. These are design-model results, separate from the marketed 210mm f/4.5 designation.

The project Petzval calculation, evaluated surface by surface as $\phi/(n n')$, gives a sum of **+0.001273142800 mm⁻¹**, corresponding to a reciprocal Petzval radius of **785.457845 mm**. This is a first-order Petzval quantity and is not Tronnier's separate Eq. (6) residual image-field shell.

The inferred clear apertures pass the project’s element-edge, actual-rim-slope, and shared-gap geometry checks after the common-rim refinement. Exact full-pupil rays remain within every authored semi-diameter at 0° and ±18° field. A 29° chief ray through the stop center also remains contained, but that latter check is only a qualitative comparison with the patent's rounded "almost 60°" full-field statement; it does not establish unvignetted full-pupil coverage at 29°.

No aspherical surface, sensor-cover plate, filter, inactive dummy plane, folded path, or internal focusing state is present in the modeled prescription. Those checks establish the internal geometric viability of the modeled clear apertures; they do not establish the production lens's manufactured clear apertures or cell dimensions.

## Design Heritage and Context

The patent explicitly identifies the objective as belonging to the Heliar family and credits H. Harting's 1899–1900 work as the origin of that type. Tronnier's contribution is framed as a refinement of the five-lens, three-member Heliar architecture rather than a new element-count topology. The stated goals are improved lateral-field image quality and finer correction of transverse chromatic aberration over a relatively wide spectral range, pursued through the power distribution and glass choices of the existing Heliar form rather than by adding more elements.

This historical context should not be confused with the separate first-order classifications used by LensVisualizer. Despite the Heliar lineage and the 210mm focal length, the modeled system does not meet the project's numerical definition of a telephoto lens, and its BFD likewise does not meet the project's retrofocus criterion.

## Sources / References

1. Albrecht Wilhelm Tronnier, **US 2,645,154, “Five-Lens Photographic Objective,”** filed September 9, 1950; Swiss priority October 17, 1949; granted July 14, 1953. Example 1 and Figures 1–2 are the prescription source.
2. Carl Zeiss Inc., Photographic Division, **“Voigtlander Professional Lenses,”** effective May 15, 1965, archival scan hosted by Pacific Rim Camera: https://www.pacificrimcamera.com/rl/01002/01002.pdf. The catalog lists the five-element Apo-Lanthar f/4.5 series and the 210mm f/4.5 lens in an X-Compound shutter.
3. OHARA optical-glass catalog resources: https://oharacorp.com/glass-catalog/
4. HOYA optical-glass data downloads: https://www.hoya-opticalworld.com/english/datadownload/index.html
5. SCHOTT optical-glass downloads: https://www.schott.com/en-us/products/optical-glass-p1000267/downloads
6. HIKARI optical-glass catalog/data: https://www.hikari-g.co.jp/
7. CDGM optical-glass catalog/download resources: https://www.cdgmgd.com/go.htm?k=Colourless_Optical_Glass&url=goods
8. SUMITA optical-glass data resources: https://sumita-opt.co.jp/en/download/
## Integration audit — 2026-09-11 UTC

US 2,645,154, Figs. 1–2, PDF p1 (600 dpi; Fig. 2 crop 0.385,0.60,0.67,0.78; axis 0.69). Direct comparison with the local SVG restores the horizontal member rims shown in the patent: S1–S3 share 31 mm, S4–S5 share 24.8 mm, and S6–S8 share 26 mm. These enlarge the smaller faces to each member’s existing ray-cleared maximum. The drawing’s uniform scale offset does not justify shrinking the f/4.5 ray envelope. Diagram labels now retain L1–L5. No internal focus travel is published or enabled.

Surface validation passed. The image-circle audit is skipped because the source does not establish a canonical image format; this is not a verified production coverage claim. Display names were checked against the shared all-caps maker/line, separated system-token, and aperture conventions; the existing titles already conform. Patent optical coordinates and inferred-focus qualifications were preserved.
