## Patent Reference and Design Identification

**Patent:** US 2013/0314585 A1  
**Application Number:** US 13/860,205  
**Priority:** JP 2012-117124, May 23, 2012  
**Filed:** April 10, 2013  
**Published:** November 28, 2013  
**Inventors:** Atsushi Oohata; Hiroki Hagiwara  
**Applicant / Assignee:** Sony Corporation  
**Title:** *Zoom Lens and Image Capturing Apparatus*  
**Embodiment analyzed:** Example 3, Third Embodiment

The prescription modeled here is Example 3 of US 2013/0314585 A1. The patent describes a four-group zoom in the order negative-positive-positive-positive and gives the complete Example 3 numerical prescription in Tables 9–12, with the corresponding layout in Figure 9. The final data file retains that example at its published dimensional scale rather than forcing it to the marketed focal-length endpoints.

The production correlation is to the ZEISS Vario-Sonnar T* 10.4–37.1 mm f/1.8–4.9 used in the Sony DSC-RX100 and DSC-RX100M2. It is a strong research correlation, not a manufacturer-confirmed patent attribution. Several observations converge:

1. Sony identifies both cameras as using a ZEISS Vario-Sonnar T* 10.4–37.1 mm lens with a maximum aperture of f/1.8 at wide angle and f/4.9 at telephoto. Sony also identifies the capture format as a 1.0-inch type 13.2 × 8.8 mm sensor and gives a 3.6× marketed optical zoom ratio.
2. Example 3 publishes 11.007, 19.615, and 35.426 mm infinity-focus states with f-numbers 1.860, 3.469, and 5.070 (Table 11). These are close to, but not identical with, the marketed endpoints.
3. The patent half-field values combined with its focal lengths give paraxial image heights of about 7.14, 7.78, and 7.87 mm; the 13.2 × 8.8 mm Sony sensor has a half diagonal of about 7.93 mm. This is a useful format correlation, not proof that the numerical example is the manufactured prescription.
4. The patent priority date, May 23, 2012, places the filing in the same development period as the first RX100 generation.
5. Example 3 has the compact seven-element/four-group architecture and variable-aperture behavior expected of this class of retractable fixed-lens zoom.

There are also material limits to the identification. The marketed focal lengths would require different scale factors at the two endpoints: approximately 0.94485 at the wide end and 1.04725 at the telephoto end. A single uniform scale therefore cannot turn Example 3 into the advertised 10.4–37.1 mm range. The patent also calls the third embodiment a 3.4× zoom in paragraph 0103, whereas its own Table 11 endpoints give about 3.2185×; Sony specifies 3.6× for the production lens. These differences are preserved rather than reconciled by changing the prescription.

The data model applies one source-to-model normalization: patent surface 5 is a zero-thickness, air-to-air planar bookkeeping plane and is omitted. Patent surfaces 16–19 form the plane-parallel rear filter SG, two plates (0.300 mm, nd 1.516798 / νd 64.1983; 0.150 mm air; 0.500 mm, nd 1.556708 / νd 58.5624; 1.000 mm to the image). Both are modeled in `rearPlates`, traced by every analysis but not drawn, and the last lens surface keeps the printed D15 gap to the first plate. Paraxially the stack is equivalent to 1.668976 mm of air, so the physical track is 0.281 mm longer than that air-equivalent. No uniform scale is applied.

Primary patent references: US 2013/0314585 A1, Figure 9; Tables 9–13; paragraphs 0059–0061 and 0097–0114.

## Optical Architecture

Example 3 is a four-group negative-positive-positive-positive zoom with seven physical glass elements. The element order is:

- **GR1:** L11 negative meniscus + L12 positive meniscus.
- **GR2:** L21 positive single lens + cemented L22/L23 positive-negative pair.
- **GR3:** L31 single positive meniscus.
- **GR4:** L41 single positive biconvex lens.

The aperture stop lies between GR2 and GR3. Paragraph 0102 also places a wide-angle peripheral-ray mask on the image-side surface of L31 and a rear filter stack between GR4 and the image plane. The filter stack is traced as `rearPlates` but not drawn, as described above; the mask location is documented, but the undimensioned mask is not synthesized as a separate blocker.

The independently recomputed functional group powers at the fixed internal spacings are:

| Group | Members | Power (mm⁻¹) | Group focal length (mm) | Sign |
|---|---|---:|---:|---|
| GR1 | L11 + L12 | -0.03784938 | -26.4205 | Negative |
| GR2 | L21 + L22/L23 | +0.03868147 | +25.8522 | Positive |
| GR3 | L31 | +0.02074617 | +48.2017 | Positive |
| GR4 | L41 | +0.03358461 | +29.7755 | Positive |

These are first-order powers of the groups themselves, not claims about the contribution of any one group to a particular aberration. The signs reproduce the architecture stated in paragraph 0097.

The second group deserves a distinction that is easy to lose in a simplified description. L22 alone is a strong positive element and L23 alone is a stronger negative element. Their cemented pair has a net first-order power of -0.03903318 mm⁻¹, equivalent to a focal length of about -25.6192 mm. GR2 as a whole nevertheless remains positive because L21 and the separations within the group change the net group power. The data and analysis therefore keep standalone element power, cemented-pair power, and full-group behavior separate.

### Zoom kinematics

The patent states that all four groups move during zooming (paragraph 0103). With the implemented image plane fixed at z = 0, the verified front-vertex positions are:

| Group / plane | Wide (mm) | Intermediate (mm) | Tele (mm) | Wide → intermediate | Intermediate → tele |
|---|---:|---:|---:|---:|---:|
| GR1 | -62.4390 | -57.2760 | -61.9520 | +5.1630 | -4.6760 |
| GR2 | -30.3160 | -39.4090 | -52.8060 | -9.0930 | -13.3970 |
| STO | -19.8370 | -28.9300 | -42.3270 | -9.0930 | -13.3970 |
| GR3 | -19.1870 | -26.9780 | -41.2570 | -7.7910 | -14.2790 |
| GR4 | -9.7840 | -9.0900 | -8.3440 | +0.6940 | +0.7460 |

Negative z is toward the object. GR2, the stop, and GR3 move objectward through both intervals; GR4 moves slightly imageward. GR1 is non-monotonic: it moves imageward from wide to the intermediate state and then objectward toward telephoto, ending about 0.487 mm imageward of its wide-angle position. That reversal follows Table 12 and Figure 9 even though the patent's general description elsewhere can be read as implying simple objectward GR1 motion over the full zoom range. The selected numerical example governs the implemented kinematics.

The patent gives the four variable source spacings as D4, D11, D13, and D15. The final model retains all four directly; D15 is the physical gap from L41 to the first SG plate. The three authored zoom positions are the published 11.007, 19.615, and 35.426 mm control points; no additional source state is invented.

## Element-by-Element Analysis

### L11 — Biconcave Negative, Two Aspherical Surfaces

**nd = 1.851348, νd = 40.1045. Glass: 851401 class; HOYA M-TAFD305 is a close coordinate match, supplier unproven. Standalone f = -15.3825 mm.**

L11 is the front member of the negative first group. Paragraph 0098 calls it meniscus-shaped, but the selected Example 3 table gives R1 = −72.2917 mm and R2 = +16.0439 mm: the implemented surface pair is biconcave at the vertices. The inspector follows that numerical prescription and the rendered optical shape. Both surfaces are aspherical (paragraph 0106; Table 10).

The patent's general design discussion specifically prefers an object-side negative member of GR1 with refractive index at least 1.8, explaining that the high index permits strong negative power without requiring as much curvature (paragraph 0046). Example 3 satisfies that stated preference with nd = 1.851348. The implemented standalone power is -0.06500899 mm⁻¹; because L12 follows with positive power, the complete GR1 is less negative than L11 by itself.

The modeled semi-diameters are not patent values. L11 uses 12 mm at surface 1A and 10 mm at surface 2A, estimated from the optical outline in local Figure 9 after excluding the mechanical flange. They should be read as visualization and tracing apertures, not as manufacturing clear apertures.

### L12 — Positive Meniscus

**nd = 2.002700, νd = 19.3170. Glass: 002193 class; HOYA E-FDS2 is a close coordinate match, supplier unproven. Standalone f = +44.1364 mm.**

L12 is the rear element of GR1 and is described in paragraph 0098 as a positive meniscus convex toward the object. Unlike L11 it is spherical in the selected example.

Its very high refractive index and low Abbe number satisfy another explicit preference in paragraph 0046: the patent calls for the positive meniscus in the first group to have νd ≤ 25. The implemented value is 19.317. The analysis does not infer a specific melt supplier from this coordinate; the HOYA name is an equivalence candidate from catalog comparison.

L12 has a standalone positive power of +0.02265702 mm⁻¹. In first-order terms it moderates the much stronger negative L11 so that GR1 remains negative overall at -0.03784938 mm⁻¹.

### L21 — Positive Lens, Two Aspherical Surfaces

**nd = 1.773760, νd = 47.1670. Glass: 774472 class; HOYA M-TAF401 is a close coordinate match, supplier unproven. Standalone f = +17.3064 mm.**

L21 is the first element of the positive second group. Paragraph 0099 describes it as a positive single lens convex toward the object. Both surfaces are aspherical (source surfaces 6 and 7; modeled labels 6A and 7A).

The patent's general discussion of GR2 is unusually specific. Paragraph 0047 states that a positive single lens at the front of the group permits higher positive group power and a shorter system, and that making this element aspherical with the f-number stop nearby is desirable for aberration correction, especially spherical aberration. L21 is the element in Example 3 that directly matches that description.

The element's standalone power is +0.05778218 mm⁻¹. It is the positive contributor that allows the full GR2 to remain positive even though the following cemented L22/L23 pair is net negative in first order.

### L22 — Biconvex Positive Member of the Cemented Pair

**nd = 1.834810, νd = 42.7207. Glass: 835427 lanthanum-flint class; vendor ambiguous. Standalone f = +12.0965 mm.**

L22 is the positive member of the cemented pair in GR2. Paragraph 0099 describes it as double convex and joined directly to the following double-concave L23. The cemented interface is source surface 9, where the medium after the surface is L23; the implemented surface therefore correctly carries the downstream element identity and L23 index.

The standalone L22 power is +0.08266879 mm⁻¹. That number describes L22 isolated in air for comparison; it is not the power of the cemented pair and not the in-situ power of GR2.

Catalog coordinates do not establish a unique vendor. HOYA TAFD5G and OHARA S-LAH55V occupy closely related coordinate space, so the data intentionally stores a class-level description rather than assigning a supplier.

### L23 — Biconcave Negative Member of the Cemented Pair

**nd = 1.755200, νd = 27.5305. Glass: 755275 dense-flint class; vendor ambiguous. Standalone f = -7.1114 mm.**

L23 is the negative member of the same GR2 cemented pair. Paragraph 0099 identifies the physical form as double concave. Its standalone power, -0.14061914 mm⁻¹, is stronger in magnitude than L22's positive standalone power.

When L22 and L23 are evaluated together with their real cemented interface and thicknesses, the pair has net power -0.03903318 mm⁻¹, corresponding to approximately -25.6192 mm focal length. This does not make GR2 negative: L21 and the complete group geometry yield a positive GR2 power of +0.03868147 mm⁻¹.

Paragraph 0047 attributes the positive-single-plus-cemented-pair arrangement to chromatic control and reduced sensitivity to decenter/assembly error. That patent statement is the basis for describing the pair as a correction component; the analysis does not assign a more specific aberration contribution from glass class alone.

### L31 — Positive Meniscus, Two Aspherical Surfaces

**nd = 1.592014, νd = 67.0227. Glass: 592670 low-dispersion molding-glass class; HOYA M-PCD51 class is a coordinate candidate, supplier unproven. Standalone f = +48.2017 mm.**

L31 is the complete third group. Paragraph 0100 identifies it as a single positive meniscus convex toward the object; both surfaces are aspherical in Table 10. Its first-order focal length is +48.2017 mm, close to the rounded f3g = 48.000 mm used in the patent's Table 13 conditional-expression summary.

Paragraph 0102 places the wide-angle peripheral-ray mask on the image-side surface of this element, source surface 13. The patent's general discussion also prefers an aspherical image-side surface on GR3 because that surface is separated from the aperture stop and can act on off-axis aberrations (paragraph 0048). The implemented data identifies surface 13A as the mask plane but does not invent the mask opening because the source does not dimension it.

GR3 is also the group the patent most directly associates with possible image stabilization. Paragraphs 0039 and 0050 describe lateral shifting of GR3 as a compact vibration-isolation strategy. No lateral displacement magnitude is published for Example 3, and no stabilization displacement is authored in the data model; this point is discussed separately below.

### L41 — Biconvex Positive Lens, Two Aspherical Surfaces

**nd = 1.592014, νd = 67.0227. Glass: 592670 low-dispersion molding-glass class; HOYA M-PCD51 class is a coordinate candidate, supplier unproven. Standalone f = +29.7755 mm.**

L41 is the single element of the positive fourth group. Paragraph 0101 describes it as double convex, and both surfaces are aspherical in Example 3. It shares the same published nd/νd coordinate as L31.

The general patent discussion says GR4 is desirably a single lens and may be used, for example, for focusing (paragraph 0049). That sentence is not enough to establish the production RX100 focus mechanism or an Example 3 close-focus travel law. In the published zoom states, GR4 shifts slightly imageward as focal length increases; this is zoom motion, not a reconstructed focus motion.

The element's standalone power is +0.03358461 mm⁻¹, equivalent to +29.7755 mm focal length.

## Glass Identification and Selection

The patent publishes nd and νd coordinates, not supplier names, Sellmeier coefficients, line-index tables, or anomalous partial-dispersion data for the lens elements. The glass field in the data file therefore uses class-level or coordinate-equivalence labels. The catalog comparison checked current authoritative material from HOYA, OHARA, SCHOTT, HIKARI, CDGM, and SUMITA; a close coordinate match is not treated as proof of supplier or melt.

| Elements | Patent nd | Patent νd | Implemented disposition | Catalog evidence / limitation |
|---|---:|---:|---|---|
| L11 | 1.851348 | 40.1045 | 851401 class | HOYA M-TAFD305 family is a close coordinate match; supplier unproven. |
| L12 | 2.002700 | 19.3170 | 002193 class | HOYA E-FDS2 is a close coordinate match; supplier unproven. |
| L21 | 1.773760 | 47.1670 | 774472 class | HOYA M-TAF401 family is a close coordinate match; supplier unproven. |
| L22 | 1.834810 | 42.7207 | 835427 lanthanum-flint class | Multiple vendor families are plausible; the data intentionally does not force a vendor. |
| L23 | 1.755200 | 27.5305 | 755275 dense-flint class | CDGM H-ZF6 closely matches the coordinate, while equivalent families exist elsewhere; vendor remains ambiguous. |
| L31, L41 | 1.592014 | 67.0227 | 592670 low-dispersion molding-glass class | HOYA M-PCD51 is a class-level coordinate candidate; supplier unproven. |

The design uses a broad dispersion spread: L12 and L23 are comparatively low-νd materials, while L31 and L41 are high-νd positive elements. The patent itself discusses chromatic correction in connection with the GR2 positive-plus-negative cemented arrangement and prefers νd ≥ 50 for the positive third-group lens (paragraphs 0047–0048). Example 3's L31 value, 67.0227, satisfies that preference.

No APO or anomalous-partial-dispersion claim follows from these values. The selected example supplies nd and νd only. The data file therefore does not author nC, nF, ng, or dPgF, and the analysis does not promote catalog-derived line data into patent facts.

## Focus Mechanism

The implemented focus status is **NO_INTERNAL_RECONSTRUCTION**.

Example 3 publishes only infinity-focus wide, intermediate, and telephoto states. Tables 11 and 12 define zoom positions and variable gaps, and Figures 10–12 are explicitly infinity-focus aberration diagrams. No close-focus table supplies group travel, and the selected embodiment does not uniquely state which group or combination of groups performs production focusing.

The patent's general paragraph 0049 says the fourth group may be used for focusing, and paragraph 0127 says the camera's lens-driving unit moves predetermined lenses for focusing. Those statements leave the Example 3 mechanism underdetermined. They do not justify synthesizing a GR4-only focus law.

Sony's RX100 specification gives a product focus range of 1.97 inches to infinity at the wide end and 1.80 feet to infinity at the telephoto end. The data file records `closeFocusM: 0.05` as wide-end product metadata because 1.97 inches is approximately 0.05 m. That value is not used to create a close-focus optical state. Every focus pair in the zoom `var` table therefore repeats the same infinity spacing.

This distinction matters because a production minimum-focus distance does not uniquely determine internal group motion. Any future close-focus reconstruction would require additional mechanism constraints or published spacing data and would be a different modeling status.

## Aspherical Surfaces

Example 3 has eight aspherical surfaces: both surfaces of L11, L21, L31, and L41. The modeled labels are 1A, 2A, 6A, 7A, 12A, 13A, 14A, and 15A.

The patent defines the sag by the standard conic form

$$
x(y)=\frac{c y^2}{1+\sqrt{1-(1+K)c^2y^2}}+A_4y^4+A_6y^6+A_8y^8+A_{10}y^{10},
$$

where $c=1/R$. Because the patent explicitly uses the standard $(1+K)$ term, its tabulated K maps directly to the LensVisualizer conic constant. Every Example 3 asphere has K = 0, so the base conic is spherical and the departure is carried by the even polynomial coefficients.

The coefficients below are copied from Table 10 and are unchanged because the prescription is not scaled:

| Surface | Element | K | A4 | A6 | A8 | A10 |
|---|---|---:|---:|---:|---:|---:|
| 1A | L11 front | 0 | -1.27013e-5 | +2.33648e-7 | -1.18572e-9 | +2.70274e-12 |
| 2A | L11 rear | 0 | -3.15446e-5 | +1.57628e-7 | -5.07497e-10 | +9.20126e-13 |
| 6A | L21 front | 0 | -5.93351e-5 | +3.90662e-7 | -1.58802e-8 | +3.16018e-10 |
| 7A | L21 rear | 0 | -1.09305e-5 | +7.48060e-7 | -1.07073e-8 | +2.98355e-10 |
| 12A | L31 front | 0 | +2.93742e-5 | +3.24622e-6 | -7.05936e-8 | +2.04068e-9 |
| 13A | L31 rear | 0 | +1.82865e-4 | +6.01753e-6 | -1.65902e-7 | +5.31568e-9 |
| 14A | L41 front | 0 | +3.25663e-6 | +2.78857e-7 | -5.22524e-9 | +5.52448e-11 |
| 15A | L41 rear | 0 | +5.69900e-5 | -5.04925e-7 | +1.73218e-9 | +3.14415e-11 |

The placement of these surfaces follows the patent's stated correction strategy more clearly than the coefficient signs alone do. L21's two aspheres lie near the aperture stop, matching paragraph 0047's explicit discussion of using a nonspherical positive GR2 element near the stop for spherical-aberration correction. L31 carries aspheres on both sides, and paragraph 0048 specifically prefers an image-side nonspherical surface on GR3 for off-axis correction; source surface 13 is also the wide-angle mask plane. L11 places two aspheres in the strongly negative front group, while L41 gives the rear positive group two additional degrees of surface-shape freedom. The patent does not assign a unique aberration term to each of those four individual surfaces, so the analysis does not do so either.

Because the patent does not publish clear apertures, aspheric departure can only be quoted at the model-derived semi-diameters. The verifier gives:

| Surface | Modeled sd (mm) | Aspheric departure at modeled rim (mm) |
|---|---:|---:|
| 1A | 12.000 | +0.091804 |
| 2A | 10.000 | -0.199366 |
| 6A | 8.600 | +0.057670 |
| 7A | 8.400 | +0.464791 |
| 12A | 5.100 | +0.068977 |
| 13A | 4.900 | +0.175989 |
| 14A | 9.700 | +0.258975 |
| 15A | 9.800 | +0.482641 |

These departures describe the authored visualization/tracing model, not measured production rims.

## Conditional Expressions

The patent organizes the compact-zoom concept around four principal conditions. For Example 3, the final-model verifier evaluates the quantities as follows.

| Condition | Patent definition | Example 3 / verified value | Result and limitation |
|---|---|---:|---|
| (a) | $\Delta m_3/\sqrt{f_w f_t}<0.2$ | 0.0659349 | Satisfies the limit and reproduces the printed 0.066. |
| (b) | $d_{23,\max}/\sqrt{f_w f_t}<0.4$ | 0.230013 from the direct GR2-rear to GR3-front vertex gap | Satisfies the limit, but does **not** reproduce Table 13's printed 0.149. |
| (c) | $0.8<f_{3g}/f_t<3.5$ | 1.36063 from computed GR3 f = 48.2017 mm | Satisfies the limit; Table 13 uses rounded f3g = 48.000 mm and prints 1.355. |
| (d) | $L\,Fno_w/\sqrt{f_w f_t}<2.5$ | 0.459755 from the printed operands | Satisfies the limit arithmetically; L cannot be independently reconstructed because the mask reference geometry is not dimensioned. |

Condition (b) contains a source discrepancy that must remain visible. Table 13 prints $d_{23,\max}=2.952$ mm and a ratio of 0.149. Using the selected prescription's actual GR2-rear to GR3-front vertex separation, D10 + D11, gives 3.240, 4.542, and 3.660 mm across the three states, so the direct maximum is 4.542 mm and the ratio is about 0.2300. Both the printed and direct interpretations remain below 0.4, but the printed value is not described as geometrically reproduced.

The patent also prints f3g = 48.000 mm in Table 13. Recomputing GR3 from the Table 9 surface prescription gives about 48.2017 mm. This difference is consistent with a rounded condition-summary value and does not change compliance with condition (c).

Primary patent references: paragraphs 0030–0043 and Table 13.

## Image Stabilization Context

The patent repeatedly presents a laterally movable internal group as a way to implement vibration isolation in a compact zoom. Paragraph 0039 specifically discusses moving GR3 perpendicular to the optical axis, and paragraphs 0050–0051 say that either GR2 or GR3 can serve as a vibration-isolation group because ray heights there are relatively small.

Example 3 is structurally compatible with that concept: GR3 is a single positive meniscus located just behind the stop and uses two aspherical surfaces. However, the selected numerical example provides no lateral decenter state, stabilization stroke, actuator geometry, or off-axis shifted prescription. The LensVisualizer data therefore models only centered zoom states. It would be incorrect to infer a production stabilization travel or to claim that the patent numerically verifies RX100 stabilization from the supplied tables alone.

## Verification Summary

The normalized data file was recomputed from its parsed TypeScript payload rather than from a separate copy of the intended prescription. Sequential height/reduced-angle tracing and an independent ABCD implementation agree for the first-order calculations.

The resulting effective focal lengths are:

| State | Patent Table 11 f (mm) | Computed EFL (mm) | Residual (mm) |
|---|---:|---:|---:|
| Wide | 11.007 | 11.015040 | +0.008040 |
| Intermediate | 19.615 | 19.622001 | +0.007001 |
| Tele | 35.426 | 35.421539 | -0.004461 |

Those residuals are within the source-precision tolerance used for the rounded patent table. The `rearPlates` model reproduces the former air-equivalent fold's image-plane first-order matrix with a maximum absolute coefficient difference of approximately 7.1 × 10⁻15 over the three published states.

The surface-by-surface Petzval sum, computed as $\phi/(n n')$ for each refracting surface, is +0.00659428 mm⁻¹, corresponding to a reciprocal magnitude of about 151.65 mm. It is unchanged with zoom because the surface curvatures and indices remain fixed while only axial separations change.

The physical stop diameter is not published. The authored wide-state stop semi-diameter, 4.304772316 mm, is calibrated from the patent f/1.860 target and the computed entrance-pupil magnification; it is not an independent measurement of the iris. The effective stop radii required to match the three published f-numbers are about 4.3048, 3.3209, and 3.5042 mm. The model retains one stop plane and uses `zoomApertureModel: "from-nominal-fno"` to derive the physical iris schedule with the repository’s exact ray solver. This avoids retaining the wider wide-angle iris at the intermediate and telephoto states; the quoted paraxial radii above describe the authoring calculation, not the runtime exact-ray radii.

Surface semi-diameters are model-derived and reviewed against the optical rims in local Figure 9. The front group was reduced to match the drawing after excluding its mechanical flange. Repository surface validation checks the edited geometry, and the image-circle audit checks the rear aperture floor. These checks establish model consistency within their scope; they do not convert estimated semi-diameters into production measurements.

The patent's Figures 10–12 publish spherical-aberration, field-curvature, and distortion plots at the three infinity-focus states. Those plots are source evidence of the patent's own performance evaluation. This analysis does not reproduce the full aberration curves numerically and therefore does not turn them into independent performance claims.

## Sources and References

1. Atsushi Oohata and Hiroki Hagiwara, **“Zoom Lens and Image Capturing Apparatus,” US 2013/0314585 A1**, Sony Corporation, published November 28, 2013. Example 3 / Third Embodiment: Figure 9; Tables 9–13; paragraphs 0097–0114. General design discussion: paragraphs 0030–0053. Asphere convention: paragraphs 0059–0061.
2. Sony, **DSC-RX100 Specifications**, Sony USA: https://www.sony.com/electronics/support/compact-cameras-dsc-rx-series/dsc-rx100/specifications
3. Sony, **DSC-RX100M2 Specifications**, Sony USA: https://www.sony.com/electronics/support/compact-cameras-dsc-rx-series/dsc-rx100m2/specifications
4. HOYA GROUP Optics Division, **Optical Glass Data Download**: https://www.hoya-opticalworld.com/english/datadownload/index.html
5. OHARA Corporation, **Optical Glass Catalog**: https://www.ohara-inc.co.jp/en/product/catalog/
6. SCHOTT, **Optical Glass Downloads**: https://www.schott.com/en-us/products/optical-glass-p1000267/downloads
7. HIKARI GLASS CO., LTD., **Optical Glass Catalog**: https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf
8. CDGM GLASS CO., LTD., **Colourless Optical Glass / Optical Glass Database**: https://www.cdgmgd.com/go.htm?k=Colourless_Optical_Glass&url=goods
9. SUMITA OPTICAL GLASS, Inc., **Optical Glass Data Downloads**: https://www.sumita-opt.co.jp/en/download/

The catalog groups this Sony camera lens under Sony and preserves ZEISS Vario-Sonnar T* branding in the display name. Camera-family correlation and patent-assignee metadata remain separate from that manufacturer attribution.
