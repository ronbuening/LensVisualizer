# MAMIYA-SEKOR MACRO C 80mm f/4

## Patent Reference and Design Identification

**Patent:** JP S55-24081 B2 (特公昭55-24081)<br>
**Earlier publication reference:** JP S53-87728, corresponding to job-card identifier JP1978-087728<br>
**Filed:** 12 January 1977<br>
**Published:** 26 June 1980<br>
**Inventor:** Masayoshi Okazaki<br>
**Applicant:** Mamiya Koki Co., Ltd.<br>
**Title:** *Modified Gauss-Type Lens* (変形ガウス型レンズ; literal technical translation)<br>
**Embodiment analyzed:** Example 1

The selected correlation is Example 1 of the supplied examined Japanese publication. The job card fixes that embodiment as the source for the Mamiya-Sekor Macro C 80mm f/4; it is not presented as a manufacturer-issued patent identification. Several independent characteristics nevertheless converge:

1. Example 1 states $f=80.12\ \mathrm{mm}$ and $F/4$, while the production lens is marketed as 80mm f/4.
2. Both sources specify six elements in four groups. The patent's 35mm semi-image height and computed 80.121mm focal length give a 47.195° rectilinear full field, consistent with the manufacturer's rounded 47° specification.
3. The patent publishes floating geometries at $\beta=0$, $-1/2$, and $-1$. The manufacturer describes a built-in floating system, a 1:2 limit with the lens alone, and a 1:1 configuration using the optional Auto Macro Spacer.
4. The applicant is Mamiya Koki Co., Ltd., directly linking the source disclosure to the production maker.

The exact prescription is taken from patent page 3. No uniform scale is applied: the independently computed infinity-focus EFL is 80.121319mm, so the modeled scale factor is $s=1$.

## Optical Architecture

The patent identifies the design as a modified Gauss-type lens. It contains six meniscus elements in four air-separated groups, with a functional power sequence of weak positive / positive / negative / positive. The aperture stop lies between the fixed central positive group and the floating negative group.

The first group is a cemented crown/flint pair whose strong standalone positive and negative components nearly cancel, leaving only weak positive net power. The second group is a fixed positive meniscus ahead of the stop. The third group is a negative meniscus behind the stop and acts as the second floating compensator. The fourth group is a fixed cemented crown/flint pair with positive net power and supplies the principal rear convergence.

The distinguishing feature is the double-floating correction. During close focusing, the front cemented group and the post-stop negative element move objectward relative to the fixed second and fourth groups. This changes the aberration balance without requiring the entire optical system to retain a single rigid spacing pattern.

## Element-by-Element Analysis

### L1 — Positive Meniscus, Front Component of D1

$ n_d=1.72000$, $\nu_d=50.2$. Glass: `720502 — lanthanum crown (vendor unspecified)`. Standalone $f=+37.424084\ \mathrm{mm}$.

L1 supplies the positive component of the front floating doublet. Its steep front surface performs most of the local convergence, while the very weakly curved cemented interface limits the power added at the L1–L2 junction. The quoted focal length is the element isolated in air; it is not the power of cemented group D1 or the element's effective contribution in the complete lens.

### L2 — Negative Meniscus, Rear Component of D1

$ n_d=1.57501$, $\nu_d=41.5$. Glass: `575415 — light flint / TIL27-LF7 class (vendor unspecified)`. Standalone $f=-31.318793\ \mathrm{mm}$.

L2 is cemented directly to L1 and supplies the opposing negative power. The pair's individual powers are large compared with its weak positive cemented net power, so D1 functions primarily as a floating compensator rather than as the main image-forming group. The lower Abbe number provides an ordinary crown/flint chromatic pairing, but the available data do not support an apochromatic or anomalous-dispersion claim.

### L3 — Positive Meniscus, Fixed Pre-Stop Group

$ n_d=1.62041$, $\nu_d=60.3$. Glass: `620603 — SK16 / barium crown class (vendor unspecified)`. Standalone $f=+142.034289\ \mathrm{mm}$.

L3 is the fixed positive group immediately ahead of the aperture stop. Its moderate positive power establishes part of the central convergence and provides a stable reference for the two floating compensators. Because the modeled stop is fixed with this group, the surface-5-to-stop spacing remains unchanged throughout the represented focus range.

### L4 — Negative Meniscus, Floating Post-Stop Group

$ n_d=1.69895$, $\nu_d=30.1$. Glass: `699301 — SF15 / TIM35 dense flint class (vendor unspecified)`. Standalone $f=-305.571812\ \mathrm{mm}$.

L4 is a weak negative element positioned behind the stop. The patent assigns its floating displacement to control the close-range change in coma and related off-axis aberrations. Its high index permits the required surface bending with relatively modest standalone power, while its low Abbe number makes it an important part of the design's ordinary chromatic balance.

### L5 — Positive Meniscus, Front Component of D2

$ n_d=1.72000$, $\nu_d=50.2$. Glass: `720502 — lanthanum crown (vendor unspecified)`. Standalone $f=+29.752714\ \mathrm{mm}$.

L5 is the strong positive member of the fixed rear cemented group. It receives the converging bundle after the floating negative element and supplies most of D2's positive contribution. Its optical coordinate is intentionally the same generic 720502 class used for L1; the data do not establish that the production elements used the same vendor or melt.

### L6 — Negative Meniscus, Rear Component of D2

$ n_d=1.67270$, $\nu_d=32.1$. Glass: `673321 — SF5 / TIM25 dense flint class (vendor unspecified)`. Standalone $f=-51.125740\ \mathrm{mm}$.

L6 is cemented to L5 and moderates the rear group's positive power while providing the lower-dispersion-number partner in the rear crown/flint pair. D2 remains net positive in cemented form. Its role should therefore not be inferred from L6's negative standalone focal length alone.

## Glass Identification and Selection

The patent publishes only $n_d$ and $\nu_d$ coordinates. The data file therefore retains six-digit optical-coordinate codes and generic glass classes rather than assigning a production vendor.

| Elements | $n_d$ / $\nu_d$ | Data-file glass annotation | Design use |
|---|---:|---|---|
| L1, L5 | 1.72000 / 50.2 | 720502 — lanthanum crown, vendor unspecified | Positive members of the front and rear cemented pairs |
| L2 | 1.57501 / 41.5 | 575415 — light flint / TIL27-LF7 class, vendor unspecified | Negative member of the weak front compensator |
| L3 | 1.62041 / 60.3 | 620603 — SK16 / barium crown class, vendor unspecified | Fixed central positive group |
| L4 | 1.69895 / 30.1 | 699301 — SF15 / TIM35 dense flint class, vendor unspecified | Floating negative post-stop group |
| L6 | 1.67270 / 32.1 | 673321 — SF5 / TIM25 dense flint class, vendor unspecified | Negative member of the rear cemented pair |

Each stored six-digit coordinate has an exact or rounding-compatible OHARA catalog match: S-LAL10 for 720502, S-TIL27 for 575415, S-BSM16 for 620603, S-TIM35 for 699301, and S-TIM25 for 673321. HIKARI independently supplies rounding-compatible J-LF7, J-SK16, and J-SF15 coordinates for 575415, 620603, and 699301. These comparisons identify coordinate families, not the production melt supplier. No element carries `nC`, `nF`, `ng`, or `dPgF`, and the generic annotations are not treated as validated production Sellmeier identities. Consequently, the analysis makes no APO, secondary-spectrum, or anomalous-partial-dispersion claim.

## Focus Mechanism

The focus status is **PUBLISHED**. The bare-lens data model uses the patent's $\beta=0$ and $\beta=-1/2$ internal spacings; no internal focus position is reconstructed.

| Quantity | Infinity | Bare-lens 1:2 | Provenance |
|---|---:|---:|---|
| $d_3$ after front group | 1.93mm | 3.53mm | Patent-published |
| Total $d_5$ around the stop | 9.38mm | 7.78mm | Patent-published |
| $d_7$ after floating L4 | 0.50mm | 2.10mm | Patent-published |
| Last vertex to image plane | 62.698155mm | 102.884636mm | Independently solved conjugate |
| Object to image plane | infinity | 358.097941mm | Independently solved conjugate |

From infinity to 1:2, the front cemented group moves 1.60mm objectward relative to fixed L3, and L4 moves 1.60mm objectward within the fixed L3-to-D2 backbone. The stop is modeled as fixed with L3. The last spacing represents the computed extension needed to place the finite conjugate on the image plane; it is not a patent-published internal gap.

The manufacturer's close-up table gives 18.3cm from the front of the lens barrel to the subject at 1:2. That working-distance reference is not interchangeable with the model's 0.358098m object-to-image-plane distance. The patent's $\beta=-1$ state is not included in this bare-lens file because the manufacturer assigns 1:1 operation to the optional Auto Macro Spacer.

## Conditional Expressions

The four patent conditions are satisfied by the selected prescription. Values below are recomputed from the final data arrays, using the air-bounded cemented D1 power for $f_1$ and the isolated L4 group power for $f_3$.

| Patent condition | Computed value | Result |
|---|---:|---|
| $|f/f_1|<0.2$ | 0.00207684 | Pass |
| $0.25<r_1/f<0.45$ | 0.32450789 | Pass |
| $|f/f_3|<0.4$, $f_3<0$ | 0.26220128; $f_3<0$ | Pass |
| $0.15<|r_6|/f<0.4$, $r_6<0$ | 0.21155418; $r_6<0$ | Pass |

The first condition permits the front floating group to remain a weak compensator. The third and fourth constrain the negative post-stop group so that its floating correction is substantial without making that group excessively strong.

## Modeling Boundaries and Source Corrections

The patent figure places the aperture stop in the $d_5$ air space but does not publish its exact axial station or diameter. The model places it 25% of the way from surface 5 toward surface 6 at infinity and solves a physical semi-diameter of 7.553198mm to reproduce the published f/4. This stop placement is an authoring inference, not a tabulated patent value.

The patent also omits clear semi-diameters. The data-file values are inferred from the solved stop, the 35mm image height, meridional marginal and chief rays at both represented focus states, the Figure 1 silhouette, and the current geometry limits. A rendered Figure 1 audit tightened surfaces 1–3 to 12.8mm and the rear cemented group to 10.6, 11.4, and 12.8mm at surfaces 8–10. The complete 0.6-field diagnostic bundles clear in both states. At the extreme 35mm semi-image-height corner, mild modeled vignetting begins at surface 3; this is disclosed rather than concealed through layout controls.

All ten powered surfaces are spherical, so no conic convention or asphere coefficient transformation applies. No sensor cover, filter, inactive dummy plane, flare cutter, or mechanical part is included. No dimensional scaling is applied.

The high-resolution patent table reads $r_2=658.4\ \mathrm{mm}$. A low-resolution reading of 65.84mm is inconsistent with the rendered source and the patent focal length and is not used. For the unmodeled $\beta=-1$ accessory state, the prose prints $t_1=t_2=2.3$, whereas the explicit gap row implies 2.2mm and 2.3mm. The explicit gap row is retained in the audit as the geometrical source, but the contradiction does not affect the selected bare-lens endpoint.

## Verification Summary

The final data arrays give an infinity EFL of 80.121319mm, an infinity BFL of 62.698155mm, and a modeled wide-open f-number of exactly 4. The first-to-last powered-vertex track is 42.800mm at infinity and 44.400mm at 1:2. Independent height/reduced-angle and height/slope matrix calculations agree within $1.5\times10^{-14}$.

Surface-by-surface Petzval summation using $\phi/(n n')$ gives $+0.001368058316\ \mathrm{mm}^{-1}$, with a reciprocal magnitude of 730.963mm under the adopted sign convention. The inferred geometry passes the current edge-thickness, actual-rim-slope, and shared-band cross-gap checks in both focus states; the maximum spherical rim angle after the figure audit is 47.0°.

## Sources

- JP S55-24081 B2, *Modified Gauss-Type Lens*, Example 1, supplied examined-publication scan. Patent pages 1–3 provide the bibliographic data, architecture, focus conditions, and prescription; Figure 1 on page 5 provides the optical section.
- Mamiya Camera Co., Ltd., *Mamiya-Sekor Macro C 80mm f/4 for Mamiya M645 — Instructions*, supplied manufacturer-manual scan. Page 1 supplies the production identity, six-element/four-group construction, 47° field, f/4–f/22 range, floating-system description, and 1:2/1:1 configuration distinction; page 4 supplies the close-up distance table.
- OHARA, *Optical Glass Pocket Catalog*, May 2023, and current S-TIL27, S-TIM35, and S-TIM25 product data, consulted for coordinate-class comparison.
- HIKARI GLASS Co., Ltd., *Optical Glass Catalog*, 1 June 2025, consulted for the J-LF7, J-SK16, and J-SF15 coordinate comparisons. No catalog is asserted as the production supplier.
