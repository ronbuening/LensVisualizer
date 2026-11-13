# Viltrox AF35mm f/1.2 LAB

## Patent Reference and Design Identification

**Patent:** CN 115826211 A\
**Filed:** 2023-02-17\
**Published:** 2023-03-21\
**Granted:** 2023-05-19 (CN 115826211 B)\
**Inventor:** Chen Baofeng\
**Applicant:** Shenzhen Leiying Photoelectric Technology Co., Ltd.\
**Title:** 超大光圈全画幅广角自动对焦镜头 (*Large-aperture full-frame wide-angle autofocus lens*)\
**Example details:** Tables 4–6; Figure 2-1; native millimetre scale, no scaling.

This model transcribes Example 2 of CN 115826211 A. The corresponding grant, CN 115826211 B, contains the same numerical prescription. Several features support an association with the Viltrox AF 35mm f/1.2 LAB:

1. The maker specifies a full-frame 35 mm f/1.2 lens with 15 elements in 10 air-separated groups, matching the patent construction and aperture. Example 2 prints an infinity focal length of 34.5 mm.
2. The maker's construction diagram places five ED elements at L1, L7, L9, L10 and L13; three HR elements at L3, L5 and L12; and two UA aspherical elements at L4 and L15. These positions agree with the patent arrangement, including its five cemented pairs and stop after L8.
3. The maker's connected optical section agrees with the patent's two moving focus groups. The maker lists Sony FE and Nikon Z versions with a 0.34 m minimum focus distance. The calculated near endpoint is compatible with that rounded distance, subject to the reference-plane uncertainty below.

These features support an association with the LAB optical family. They do not uniquely distinguish Example 2 from the patent's other examples or establish the exact retail prescription of either mount version. The FE manual documents the FE version specifically. Example 2 is the selected patent model, not a manufacturer-confirmed factory prescription.

## Optical Architecture

The patent describes five functional groups with a **positive / negative / negative / positive / negative** power sequence: G1, G2, G3, the aperture stop, G4 and G5 (¶0005, ¶0020). These functional groups differ from the ten air-separated physical assemblies in the maker's construction count.

| Functional group | Elements | Published power sign | Focus role |
| --- | --- | --- | --- |
| G1 | L1–L4 | Positive | Fixed front group |
| G2 | L5–L6 | Negative | Moves toward the image during close focusing |
| G3 | L7–L8 | Negative | Fixed group before the stop |
| G4 | L9–L11 | Positive | Moves toward the object during close focusing |
| G5 | L12–L15 | Negative | Fixed rear group |

The cemented pairs are L2/L3, L5/L6, L7/L8, L10/L11 and L13/L14. L4 and L15 each have two aspherical faces (¶0010–¶0014, ¶0049). The two moving groups provide separate variables for compensating aberration changes with object distance (¶0015).

The camera-side GL filter is traced as a rear plate rather than counted among the 15 lens elements. Its physical placement is 15.575 mm of air after surface 26, 2.500 mm of glass, then 0.500 mm of air to the image plane. The pre-GL gap is fixed at both published endpoints. The first-vertex-to-image track remains 136.068 mm. The plate and final air space are retained without replacing their optical effect with an adjusted image plane.

## Element-by-Element Analysis

The descriptions follow the patent's element powers and group membership (¶0005, ¶0010–¶0014). Material identities remain unresolved: the model stores the printed d-line indices and Abbe numbers with approximate dispersion. Standalone element focal lengths and quantitative aberration contributions are not established by the source review.

### L1 — Negative Meniscus, G1

**nd = 1.487, νd = 70.440. Glass: unmatched low-dispersion class.**

L1 is the negative front member of net-positive G1. Its high Abbe number is consistent with the maker's ED designation at this position. That agreement does not identify a supplier, melt or anomalous-partial-dispersion curve.

### L2/L3 — Cemented Negative/Positive Pair, G1

**L2: nd = 1.847, νd = 23.785. Glass: unmatched high-index, high-dispersion class.**\
**L3: nd = 1.883, νd = 40.805. Glass: unmatched high-index class.**

Negative L2 is cemented to positive L3. Their differing Abbe numbers provide a chromatic-balancing pair within the fixed front group. The maker identifies L3 as HR; the model retains the patent coordinates without assigning a commercial glass.

### L4 — Positive Two-Sided Asphere, G1

**nd = 1.810, νd = 40.993. Glass: unmatched high-index class.**

L4 completes G1 immediately before the first variable gap. Both faces, surfaces 6 and 7, carry the printed aspheric terms. Its position matches the maker's first UA element. The source does not separate its correction into an element-specific aberration budget.

### L5/L6 — Cemented Positive/Negative Pair, Moving G2

**L5: nd = 1.946, νd = 17.942. Glass: unmatched high-index, high-dispersion class.**\
**L6: nd = 1.603, νd = 38.011. Glass: unmatched class.**

Positive L5 and negative L6 form the complete negative G2 focus assembly. Its motion changes the air spaces on either side while preserving the cemented interface. The maker identifies L5 as HR. The large dispersion difference is consistent with chromatic balancing inside a moving assembly, without proving a particular secondary-spectrum correction.

### L7/L8 — Cemented Positive/Negative Pair, Fixed G3

**L7: nd = 1.593, νd = 68.624. Glass: unmatched low-dispersion class.**\
**L8: nd = 1.689, νd = 31.161. Glass: unmatched higher-dispersion class.**

Positive L7 and negative L8 form the fixed negative group immediately before the stop. L7 occupies an ED position in the maker's diagram. The contrasting Abbe numbers provide another chromatic-balancing pair; G3 remains fixed as adjacent G2 moves.

### L9 — Positive Element, Moving G4

**nd = 1.593, νd = 68.624. Glass: unmatched low-dispersion class.**

L9 begins positive G4 immediately after the stop and its variable air gap. It shares the printed material coordinates of L7 and L13 and occupies another maker-designated ED position. It moves together with L10/L11.

### L10/L11 — Cemented Positive/Negative Pair, Moving G4

**L10: nd = 1.569, νd = 71.304. Glass: unmatched low-dispersion class.**\
**L11: nd = 1.847, νd = 23.785. Glass: unmatched high-index, high-dispersion class.**

Positive L10 and negative L11 complete G4. L10 is an ED element in the maker's diagram, paired with a much more dispersive negative element. This carries chromatic balancing into the second moving assembly, consistent with the patent's distributed correction strategy.

### L12 — Positive Element, Fixed G5

**nd = 1.946, νd = 17.942. Glass: unmatched high-index, high-dispersion class.**

L12 begins the fixed rear group. Its material coordinates repeat those of L5, and it occupies the maker's third HR position. The patent's rear-group chromatic condition combines L12 with the following L13/L14 pair rather than treating it as an isolated corrector (¶0009).

### L13/L14 — Cemented Positive/Negative Pair, Fixed G5

**L13: nd = 1.593, νd = 68.624. Glass: unmatched low-dispersion class.**\
**L14: nd = 1.847, νd = 23.785. Glass: unmatched high-index, high-dispersion class.**

Positive L13 and negative L14 form the final cemented pair. L13 is the fifth ED position in the maker's diagram. Their material contrast, considered together with L12, supports the patent's rear-group chromatic-balancing strategy; it does not establish apochromatic performance.

### L15 — Negative Two-Sided Asphere, Fixed G5

**nd = 1.810, νd = 40.993. Glass: unmatched high-index class.**

L15 is the last lens element, with aspheric surfaces 25 and 26. Its material coordinates repeat those of L4, and it matches the maker's second UA position. The rear aspheres provide additional shape variables after the final cemented pair. Their individual aberration contributions and manufacturing process are not established by the numerical tables.

## Glass Identification and Selection

The source indices are rounded to three decimal places. The d-line reference is supported by the patent's 587.6 nm reference and the independent source review. All material assignments remain unmatched; dispersion derived from nd and νd is approximate. No supplier, historical melt or factory glass identity is established.

| Elements | nd | νd | Maker construction designation |
| --- | ---: | ---: | --- |
| L1 | 1.487 | 70.440 | ED |
| L2, L11, L14 | 1.847 | 23.785 | No special designation established |
| L3 | 1.883 | 40.805 | HR |
| L4, L15 | 1.810 | 40.993 | UA aspheres |
| L5, L12 | 1.946 | 17.942 | HR |
| L6 | 1.603 | 38.011 | No special designation established |
| L7, L9, L13 | 1.593 | 68.624 | ED |
| L8 | 1.689 | 31.161 | No special designation established |
| L10 | 1.569 | 71.304 | ED |
| GL rear plate | 1.517 | 64.199 | Camera-side filter |

The repeated low-dispersion positive elements and more dispersive negative partners distribute chromatic balancing across fixed and moving assemblies. The patent explicitly relates combinations involving L1/L5/L6 and L12/L13/L14 to power-weighted Abbe-number conditions (¶0008–¶0009). The available nd/νd coordinates do not establish anomalous partial dispersion, secondary-spectrum performance or an APO classification.

## Focus Mechanism

The design uses two moving internal focus groups. G2 moves imageward while G4 moves objectward; G1, G3, G5 and the image plane remain fixed (¶0020). Only the two printed endpoints are enabled. An intermediate focus cam or source-certified finite conjugate has not been established.

| Variable gap | Location | Infinity | Published near row |
| --- | --- | ---: | ---: |
| D1 | After surface 7, before G2 | 2.332 mm | 8.483 mm |
| D2 | After surface 10, after G2 | 14.868 mm | 8.717 mm |
| D3 | After the stop, before G4 | 7.857 mm | 2.791 mm |
| D4 | After surface 19, after G4 | 1.901 mm | 6.967 mm |

The source labels the near row 0.206 m without specifying its distance datum. The literal spacings calculate a conjugate 205.016025 mm before the first vertex, or 341.084025 mm object-to-image. The model records the latter endpoint as 0.341084 m; the maker's separate 0.34 m minimum focus distance is retained as product context. These values support a possible reference-plane explanation but do not prove the patent's intended datum.

An alternative finite-object launch 206 mm before the first vertex retains every source value and gives an axial RMS spot radius of 0.011021 mm, compared with 0.006371 mm at the calculated conjugate. This comparison does not certify either distance as the source's intended datum.

## Aspherical Surfaces

Both faces of L4 and L15 are aspherical: surfaces 6, 7, 25 and 26 (Example 2, Table 6; ¶0049). The equation uses the standard conic factor (1 + K), so K = 0 represents a spherical base. All four conics are zero; the even-order polynomial coefficients are copied without scaling or refitting.

$$
z(h) = \frac{h^2/R}{1 + \sqrt{1 - (1 + K)h^2/R^2}} + A_4 h^4 + A_6 h^6 + A_8 h^8 + A_{10} h^{10} + A_{12} h^{12}.
$$

| Surface | Element | K | A4 | A6 | A8 | A10 | A12 |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 6 | L4 front | 0 | -8.851e-7 | -3.047e-10 | -2.722e-12 | +7.196e-15 | -9.418e-18 |
| 7 | L4 rear | 0 | +6.952e-7 | -1.170e-9 | +1.399e-12 | -1.855e-15 | -1.948e-18 |
| 25 | L15 front | 0 | -1.477e-5 | +7.957e-8 | -1.838e-10 | +2.647e-13 | -2.700e-16 |
| 26 | L15 rear | 0 | -5.075e-6 | +8.786e-8 | -1.546e-10 | +2.816e-13 | -2.239e-16 |

The leading polynomial terms have opposite signs on the L4 faces and negative signs on both L15 faces. Higher-order terms also contribute, so those signs alone do not assign a unique aberration correction or establish the profile over an unknown factory clear aperture. The maker's UA labels confirm two aspherical elements without establishing their manufacturing process.

## Clear Apertures and Throughput Limitations

No numerical clear apertures are published. The modeled rims are geometry-limited physical-group bounds, not proportional measurements of the manufacturer or patent drawings. Their broad-front, narrow-rear envelope is qualitatively consistent with those drawings, but the drawings do not establish these dimensions.

Initial larger candidates violated glass-rim, slope and facing-sag bounds. Reducing those candidates to valid bounds, and enlarging unconstrained intermediate groups enough to transmit the nominal axial pupil, produced the retained profile. No source curvature, thickness or material coordinate was changed. The model uses the default 90% gap-sag limit with no override or aperture stop-down. The f/1.2 iris semi-diameter is calculated as 17.343540796 mm rather than published by the patent. The authored and traced rim bounds agree at both endpoints; they remain inferred dimensions.

At the infinity half-field angle of 32.1°, only **142/812 equally weighted stop-lattice samples reach the image: 17.49% transmitted and 82.51% blocked**. At half that field, 650/812 samples pass (80.05%); all 812/812 axial samples pass. These are severe modeled off-axis losses, not evidence of full edge-pupil transmission.

The earlier near calculation launched finite-object rays from 205.016 mm before the first vertex. It passed 302/812 edge samples (37.19%, or 62.81% blocked), 726/812 half-field samples (89.41%) and 812/812 axial samples. This calculation used a different finite-object launch convention from the current application. The validator reports 330/812 samples at 27.13° under the current convention; the earlier near fractions must not be presented as a reproduction of that result.

An independent check of the full incident ray lines classified 190 infinity and 34 near attempts without a surface intersection as misses of the inferred first-surface rim, rather than unexplained numerical failures. These fractions describe the model's inferred apertures and sampling. They are not measurements of illumination, coatings or retail vignetting.

## Verification Summary and Remaining Limits

The source review checked all 28 printed surface rows, the four aspheric surfaces and both sets of variable gaps without finding transcription mismatches. Source radii and distances are already in millimetres; no scaling, sign repair, optical refit, filter omission or image-plane replacement was applied.

The literal model gives infinity EFL 34.502313485 mm and near EFL 35.495891329 mm, compared with the printed 34.5 mm and 35.5 mm. The authored image plane retains the infinity paraxial residual of −0.045257835 mm. The printed terminal air space is 0.500 mm, whereas the calculated infinity back focal distance from the plate rear is 0.454742 mm. No refocus is used to conceal this difference.

The audit distinguishes back focal distance from finite-object imaging. From the last lens vertex, the calculated collimated-light back focal distance is 18.529742165 mm at infinity and 12.653785708 mm at the near configuration. The latter is not the finite-object image distance. At the literal near image plane, calculated object-to-image distance is 341.084025185 mm and magnification is −0.166814075. A diagnostic that shifts the image plane to the infinity best-focus offset reports 342.68 mm instead; that shifted result does not define the modeled endpoint.

The recorded surface, aperture and image-circle checks pass. Chief-ray field coverage reaches 21.52 mm of the 21.65 mm full-frame semi-diagonal (99.4%), and the corner chief ray clears at 32.2°. These checks do not establish transmission across the full corner pupil or remove the clipping limitation above.

The model remains hidden pending application validation. Full-application regression, compatibility with the current application and compiled-browser validation are not established by this optical review. The factory prescription, numerical factory rims, near-distance datum, intermediate focus cam and historical glass identities remain unproved.

## Sources / References

1. [CN 115826211 A](https://patents.google.com/patent/CN115826211A/zh), front-page bibliography; ¶0005–¶0015 and ¶0020; Example 2, Tables 4–6 and Figure 2-1.
2. [CN 115826211 B](https://patents.google.com/patent/CN115826211B/zh), corresponding grant and Example 2 tables.
3. [Viltrox AF 35/1.2 LAB FE manual](https://www.lensrentals.com/product-assets/af4b9713-7282-4d72-b039-d0a9994df17c/AF_35-1.2_LAB_FE_Manual.pdf), manufacturer-authored PDF hosted by Lensrentals; connected optical section on PDF page 4 / EN-3.
4. [Viltrox AF 35mm f/1.2 FE product page](https://viltrox.com/products/af-35mm-f1-2-fe).
5. [Viltrox AF 35mm f/1.2 Z product page](https://viltrox.com/products/af-35mm-f1-2-z).
6. [Viltrox manufacturer construction diagram](https://cdn.shopify.com/s/files/1/0104/0380/7298/files/AF_35mm_F1.2_LAB_FE_-MTF.jpg?v=1744770040), ED, HR and UA positions.
