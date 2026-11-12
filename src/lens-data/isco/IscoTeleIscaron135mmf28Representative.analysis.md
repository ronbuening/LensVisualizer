## Patent Reference / Design Identification

**Patent:** [US 2,972,285](https://patents.google.com/patent/US2972285A/en)
**Filed:** November 13, 1958
**Granted:** February 21, 1961
**Inventor:** Rudolf Solisch
**Assignee:** Isco Optische Werke GmbH
**Title:** Photographic or cinematographic high-speed tele-objective
**Example details:** Whole Table A, Figure 1; literal nominal scale 1.35 from source f = 100 to the 135 mm product-family hypothesis.

The [dealer catalog, PDF page 9](https://www.pacificrimcamera.com/rl/03283/03283.pdf) names automatic and preset Tele-Iscaron 135 mm f/2.8 products, both with four elements and an 18.2° full field. Its optical section supports a probable family association, not an exact factory prescription. The catalog does not assign Table A or B to either retail mechanism. Table A is selected by an explicit first-embodiment convention, not because its computed back focus agrees more closely with the printed value. Table B remains a distinct four-air-spaced-element prescription, not a second retail lens or a source of replacement values.

## Optical Architecture

Table A has four spherical glass elements in three groups: a front positive meniscus, a thick cemented middle pair and a separated rear positive plano-convex element. The complete seven-radius prescription, six internal spacings and four index/Abbe pairs are preserved. Scaling by 1.35 is a representative nominal mapping, not measured factory dimensions or EFL renormalization. Native computed EFL is 134.9893 mm. The printed back focus becomes 57.78 mm and fixes the image plane at 137.7 mm from the first vertex; computed paraxial back focus of approximately 57.8282 mm is a diagnostic residual, not a replacement image gap.

Figure 1 draws an iris within the long gap before the last element. On the retained 2200-pixel-high rendering, its x-coordinate is approximately 795, versus axial vertices 731 and 832. The inferred native split is 12.2 + 7.05 = 19.25, scaled without changing the total gap. Approximate rim half-heights 98, 90 and 72 pixels, calibrated against the 59.2-unit axial track spanning approximately 304 pixels, motivate native component semi-diameters 19.1, 17.5 and 14.0. These are schematic boundary hypotheses with approximately ±0.8 native-unit measurement/model uncertainty, not published clear apertures. They were frozen before ray tracing and are not fitted to make the field pass. In additive v2, independent Figure 1 review distinguishes R5’s optical face from its beveled outer rim: its endpoint half-height is approximately 70–72 pixels, motivating a separately frozen 13.8-native-unit semi-diameter (18.63 mm scaled), rather than the component rim’s 17.5 units. Only R5’s cap changed. This remains a schematic inference with the same uncertainty, not factory dimensional evidence; the v1 source and results are retained.

Dealer coverage is 18.2° full field; the patent describes 28° full field. The model projection uses the dealer field, with an attempted 14° half-field diagnostic for the patent claim (unavailable under this retail projection). The mismatch is retained, not silently converted into equivalent coverage.

## Element-by-Element Analysis

### L1: Positive meniscus
nd = 1.58913, νd = 61.2. Glass: Unmatched published pair; no vendor or melt identity. Isolated-element focal length is not asserted.
The first weakly curved rear face and positive front curvature form the front positive component. The catalog topology agrees qualitatively; no independent measured factory radii are available.

### L2: Positive middle element
nd = 1.58900, νd = 48.6. Glass: Unmatched published pair; no vendor or melt identity. Isolated-element focal length is not asserted.
This thick element shares its rear surface with L3 in Table A. Its cemented interface is preserved exactly, rather than borrowing Table B's intervening air space.

### L3: Negative cemented member
nd = 1.74077, νd = 27.7. Glass: Unmatched published pair; no vendor or melt identity. Isolated-element focal length is not asserted.
The higher-index, lower-Abbe member supplies the negative part of the middle combination. Detailed aberration allocation is not established by the sparse diagnostic; no unsupported performance attribution is assigned.

### L4: Positive plano-convex rear element
nd = 1.67270, νd = 32.2. Glass: Unmatched published pair; no vendor or melt identity. Isolated-element focal length is not asserted.
The final plane surface is literal. The long preceding air gap contains the inferred iris station. Neither the final curvature nor the printed image gap has been adjusted for computed focus.

## Glass Identification / Selection

The source prints lower-case nd and describes yellow-light indices. This model explicitly adopts the conventional helium d-line interpretation at 587.6 nm, rather than claiming independently verified wavelength metrology or performing a sodium-to-helium conversion. All four numerical index/Abbe pairs are literal. Real melt identities, partial dispersion and factory substitutions remain unknown; normal-dispersion modeling cannot establish a production MTF match.

## Focus Mechanism

This is an infinity-only representative. The catalog's finite near-focus distance is not a published movement law and is not synthesized into an arbitrary translation. The supported static sentinel documents that limitation. The image plane remains the scaled printed source plane, without numerical refocusing. No auto/preset mechanism assignment is made.

## Aspherical Surfaces

All seven refracting surfaces are spherical or plane. No aspherical coefficients, floating correction, additional plate or hidden source repair has been introduced. Validation results and remaining integration gates are recorded below and in the audit; hidden status does not imply a finished or delivery-ready lens.

Fresh bounded diagnostics pass native construction and strict TypeScript, not full integration. A 25-point pupil grid plus separately counted chief ray gives 26/26 transmitted at 0°, 21 transmitted and 5 clipped at 4.55°, and 15 transmitted, 6 clipped and 5 blocked launches at the 9.1° retail edge. These sparse counts are not throughput percentages or MTF validation. The attempted 14° patent-field diagnostic is unavailable because it lies outside the configured retail projection; no trace success or physical failure is inferred there. Boundary uncertainty and substantial off-axis loss remain explicit review holds. The source-grounded R5-only reduction was frozen before the v2 rerun; the sparse counts were unchanged. No cap was enlarged, no stop coordinate changed and no value was tuned to ray performance.
