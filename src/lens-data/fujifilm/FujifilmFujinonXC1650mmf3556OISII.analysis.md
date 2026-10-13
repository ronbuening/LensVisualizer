# FUJIFILM FUJINON XC 16-50mm f/3.5-5.6 OIS II

## Patent Reference and Design Identification

**Patent:** US 2014/0368925 A1
**Filed:** June 11, 2014
**Priority:** JP 2013-124347, June 13, 2013
**Published:** December 18, 2014
**Inventor:** Daiki Kawamura
**Applicant:** Fujifilm Corporation
**Title:** *Zoom Lens and Imaging Apparatus*
**Embodiment analyzed:** Example 1

The prescription analyzed here is Example 1 of US 2014/0368925 A1. The patent identifies Example 1 with Figure 1 and Tables 1–3, and describes it as a five-powered-group zoom with group powers positive–negative–positive–positive–positive. The numerical tables are d-line data, and the three published zoom states are all focused at infinity (US 2014/0368925 A1, ¶0121, ¶0169–¶0178; Fig. 1; Tables 1–3).

The correlation to the production **FUJIFILM FUJINON XC16-50mmF3.5-5.6 OIS II** is strong but not manufacturer-confirmed. FUJIFILM’s owner’s manual identifies the production lens as a 12-element/10-group X-mount zoom with three aspherical elements and one extra-low-dispersion element, while Example 1 contains 12 elements, two cemented pairs yielding 10 air-separated optical components, three bi-aspherical elements, and one very-high-Abbe element at L33. The following evidence converges without eliminating the remaining design-versus-product differences:

1. The patent and product both have 12 elements and 10 physical air-separated components/groups.
2. The patent has three aspherical elements—L22, L31, and L34—matching the manufacturer’s count of three aspherical elements.
3. L33 has $n_d=1.49700$ and $\nu_d=81.54$, consistent with the single ED/low-dispersion class indicated by the manufacturer, although the patent does not name a supplier or melt.
4. The patent design spans 16.49–48.56 mm with F No. 3.60–5.59; the production lens is marketed as 16–50 mm f/3.5–5.6.
5. The patent uses a dedicated transverse L34 stabilizing element, while the production lens is an OIS model. This is mechanism-level convergence, not proof that FUJIFILM used this exact embodiment unchanged.

The differences remain explicit. The patent gives full angles of view of 89.6° and 32.2° at its wide and long endpoints, whereas FUJIFILM specifies 83.2° and 31.7° for the production lens. The two focal endpoints also cannot be reconciled by one uniform scale: scaling 16.49 mm to 16 mm requires a factor below unity, while scaling 48.56 mm to 50 mm requires one above unity. The implemented model therefore remains at the patent’s native scale, $s=1.0$, while the data file stores marketing and design quantities separately. No cited primary source states that US 2014/0368925 A1 Example 1 is the production prescription.

Manufacturer reference: [FUJIFILM XC16-50mmF3.5-5.6 OIS II / XC50-230mmF4.5-6.7 OIS II Owner’s Manual, BL01874-200](https://dl.fujifilm-x.com/support/manual/lenses/lens_xc16-50-2_xc50-230-2_manual_01.pdf).

## Optical Architecture

Example 1 is a five-powered-group zoom with a **positive–negative–positive–positive–positive** power sequence. The final model contains 12 physical glass elements in 10 air-separated optical components, plus one aperture-stop plane. These 10 physical components should not be confused with the five powered zoom groups G1–G5 used by the patent.

| Powered group | Elements | Calculated group focal length | Patent role / motion |
|---|---|---:|---|
| G1 | L11 + L12, cemented | +91.6889 mm | Positive front group; moves during zoom. |
| G2 | L21 + L22 + L23 | -14.4252 mm | Negative variator group; moves during zoom. |
| G3 | L31 + L32/L33 + L34 | +24.8917 mm | Positive group; L34 is the transverse OIS element. |
| G4 | L41 + L42 | +100.3469 mm | Positive group; L41 focuses axially, L42 remains fixed during focus. |
| G5 | L5 | +91.2125 mm | Positive rear group; fixed during zoom and focus. |

These group focal lengths are calculated from the implemented prescription. They are compound group powers, not sums of the isolated element focal lengths. In particular, G4 is net positive even though its fixed L42 component is negative; the final group power depends on the actual two-element spacing and surface sequence.

The first group is a cemented negative/positive pair. The patent states that using only L11 and L12 in G1 is intended to reduce the size and weight of what would otherwise be a large-diameter front group (¶0124–¶0125). G2 contains two negative lenses followed by a positive lens. The patent describes this three-element negative group as a compact arrangement that also supports field-curvature correction at the wide end (¶0126–¶0127).

G3 is split functionally into a fixed positive subgroup L31+L32+L33 and the single negative L34. The calculated focal lengths are +17.6761 mm for the fixed subgroup and -36.7054 mm for L34, giving +24.8917 mm for G3 as a whole. The patent explicitly identifies L34 as the movable subgroup used for camera-shake correction (¶0128–¶0129). The stop lies between G2 and G3 and moves with G3 during zoom; the patent warns that the stop symbol in Figure 1 indicates axial position only and does not represent its physical size or shape (¶0130).

G4 contains positive L41 followed by negative L42. The patent assigns focus motion to L41 while L42 remains axially fixed during focusing (¶0132–¶0134). G5 is the final positive L5 and remains fixed in the three published infinity zoom states.

During zoom, G1 through G4 move axially, G3 and G4 move integrally in Example 1, and G5 remains stationary (¶0136–¶0137). Relative to the wide state and using the G5 front surface as a fixed reference, the verified motions are:

| State | G1 | G2 | Stop | G3 | G4 | G5 |
|---|---:|---:|---:|---:|---:|---:|
| Intermediate | -12.15 mm | -4.18 mm | -11.04 mm | -11.04 mm | -11.04 mm | +0.00 mm |
| Long end | -33.14 mm | -11.63 mm | -22.81 mm | -22.81 mm | -22.81 mm | +0.00 mm |

The G3-to-G4 front spacing remains 18.59 mm in all three source states, which independently reproduces the patent’s integral G3/G4 movement. No reversal is observed among the three published states; this statement is limited to those sampled source positions and does not assert behavior between them beyond the model’s interpolation.

## Element-by-Element Analysis

### L11 — Negative Meniscus, front member of D1

**$n_d$ = 1.92286, $\nu_d$ = 18.90. Glass: S-NPH2 class (OHARA coordinate match; supplier unconfirmed). Standalone $f$ = -124.1706 mm.**

L11 is the first, negative member of the cemented G1 doublet. Its isolated negative power does not make G1 negative: the cemented L11+L12 assembly is +91.6889 mm in the final first-order calculation.

The patent treats the two-element G1 architecture as a compact front group and identifies L11 as the negative member cemented to positive L12 (¶0124–¶0125). The class label is a coordinate match to OHARA S-NPH2; it is not evidence that FUJIFILM purchased that catalog glass.

### L12 — Positive Meniscus, rear member of D1

**$n_d$ = 1.83481, $\nu_d$ = 42.73. Glass: 835427 lanthanum class (supplier unconfirmed). Standalone $f$ = +51.7624 mm.**

L12 is the positive rear member of the first cemented pair. The cemented interface is represented directly: the junction surface carries L12 as the downstream medium rather than inserting a synthetic cement layer.

Its 835427 label is a coordinate/class description rather than a supplier assignment. No per-element C/F/g line indices are authored for L12 because the catalog evidence did not justify a unique spectral row.

### L21 — Negative Meniscus

**$n_d$ = 1.88300, $\nu_d$ = 40.76. Glass: S-LAH58 class (OHARA coordinate match; supplier unconfirmed). Standalone $f$ = -15.4767 mm.**

L21 begins the negative G2 group. Together with negative L22 and positive L23, it forms the three-element group the patent describes in ¶0126–¶0127.

The S-LAH58 designation is used only as a coordinate class. The runtime catalog supplies the selected class dispersion, but the patent itself publishes only d-line index and Abbe number.

### L22 — Biconcave Negative, bi-aspherical

**$n_d$ = 1.58254, $\nu_d$ = 59.47. Glass: Q-SK52S (HIKARI), near-coordinate spectral proxy; supplier unspecified. Standalone $f$ = -31.3597 mm.**

L22 is the second negative member of G2 and is aspherical on both surfaces 6A and 7A. Its standalone focal length is negative, while G2 as a whole calculates to -14.4252 mm.

The Q-SK52S spectral proxy has catalog nd=1.58286 and vd=59.51, differing by +0.00032 and +0.04. This close coordinate match supports a qualified dispersion model without identifying the production supplier or melt.

### L23 — Positive Meniscus

**$n_d$ = 1.94595, $\nu_d$ = 17.98. Glass: FDS18 class (HOYA coordinate match; supplier unconfirmed). Standalone $f$ = +33.1124 mm.**

L23 closes G2 as its positive member. The patent’s architectural description uses the two-negative/one-positive sequence as the complete second group (¶0126–¶0127).

The FDS18 label is a HOYA coordinate-class match and is not a supplier claim. No catalog line-index fields are authored because the evidence did not establish a sufficiently specific spectral identity for this element.

### L31 — Biconvex Positive, bi-aspherical

**$n_d$ = 1.80348, $\nu_d$ = 40.44. Glass: Unmatched (nd 1.80348 / νd 40.44; nearest audited S-LAH63 differs). Standalone $f$ = +21.1082 mm.**

L31 starts G3 and is aspherical on surfaces 11A and 12A. It belongs to the fixed L31+L32+L33 positive subgroup identified by the patent (¶0128–¶0129).

The stored d-line coordinate is not assigned a named catalog glass: the nearest audited S-LAH63 row is not exact enough to justify that identity. The model therefore leaves L31 `Unmatched`.

### L32 — Plano-Concave Negative, front member of D2

**$n_d$ = 1.80000, $\nu_d$ = 29.84. Glass: S-NBH55 class (OHARA coordinate match; supplier unconfirmed). Standalone $f$ = -16.3925 mm.**

L32 is the negative front member of the L32/L33 cemented pair. The pair has a calculated compound focal length of +57.3870 mm even though L32 by itself is -16.3925 mm, illustrating why isolated and cemented powers must be kept distinct.

The S-NBH55 label is a coordinate-class match. C/F/g indices resolve from the catalog curve at runtime with supplier unconfirmed.

### L33 — Biconvex Positive, rear member of D2

**$n_d$ = 1.49700, $\nu_d$ = 81.54. Glass: 497816 ED/low-dispersion crown class (S-FPL51 coordinate; supplier unconfirmed). Standalone $f$ = +13.9901 mm.**

L33 is the positive rear member of the G3 cemented pair. Its very high $\nu_d=81.54$ makes it the prescription coordinate that converges with FUJIFILM’s statement that the production lens contains one ED element.

The final label is `497816 ED/low-dispersion crown class`, with an S-FPL51 coordinate match. This supports a low-dispersion class identification but does not establish FUJIFILM’s supplier, melt, or an apochromatic performance claim.

### L34 — Biconcave Negative, bi-aspherical OIS element

**$n_d$ = 1.58517, $\nu_d$ = 59.41. Glass: L-BAL43 (OHARA), near-coordinate spectral proxy; supplier unspecified. Standalone $f$ = -36.7054 mm.**

L34 is the single negative movable subgroup at the rear of G3. The patent explicitly assigns transverse motion of this lens to camera-shake correction (¶0129, ¶0221). Its two surfaces, 16A and 17A, carry the strongest modeled aspheric rim behavior in the final geometry.

L-BAL43 supplies a qualified spectral proxy at nd=1.58572941, vd=59.69698 (residuals +0.00055941 and +0.28698). This is a moldable crown family approximation, not a production-material identification. The modeled stabilization section remains centered; no decentered LensVisualizer control is invented.

### L41 — Biconvex Positive focusing element

**$n_d$ = 1.61800, $\nu_d$ = 63.33. Glass: 618634 crown/phosphate-crown class (supplier unconfirmed). Standalone $f$ = +28.3301 mm.**

L41 is the positive movable member of G4 and is the element the patent says translates along the optical axis during focusing (¶0134). Its isolated focal length is +28.3301 mm.

The data labels its glass as a 618634 crown/phosphate-crown class with supplier unconfirmed. The model does not assign a finite-focus displacement because the patent’s numerical tables provide only infinity states.

### L42 — Plano-Concave Negative fixed focus partner

**$n_d$ = 1.54072, $\nu_d$ = 47.23. Glass: S-TIL2 class (OHARA coordinate match; supplier unconfirmed). Standalone $f$ = -33.5033 mm.**

L42 follows L41 and is fixed along the optical axis during focusing according to ¶0134. Its isolated power is negative, while the actual spaced L41+L42 G4 assembly is net positive at +100.3469 mm.

The S-TIL2 designation is a coordinate-class match; C/F/g indices resolve from the catalog curve at runtime with supplier unconfirmed.

### L5 — Plano-Convex Positive rear group

**$n_d$ = 1.71299, $\nu_d$ = 53.87. Glass: S-LAL8 class (OHARA near-coordinate match; supplier unconfirmed). Standalone $f$ = +91.2125 mm.**

L5 alone constitutes G5 in Example 1. The patent describes G5 as a positive group and Figure 1/Table 2 show it as the fixed rear group across the three published infinity zoom states (¶0133, ¶0136–¶0137).

The S-LAL8 label is a near-coordinate class match, differing only slightly in d-line index from the patent coordinate. Its runtime catalog dispersion is a spectral proxy rather than proof of the production melt.

## Glass Identification and Selection

The patent provides d-line refractive indices and Abbe numbers, not manufacturer glass names. The final labels below are therefore catalog coordinate classes or explicit unmatched records. They should be read as optical-coordinate identifications, not procurement history.

| Element | $n_d$ | $\nu_d$ | Final glass annotation | Dispersion model |
|---|---:|---:|---|---|
| L11 | 1.92286 | 18.90 | S-NPH2 class (OHARA coordinate match; supplier unconfirmed) | Runtime catalog proxy |
| L12 | 1.83481 | 42.73 | 835427 lanthanum class (supplier unconfirmed) | Runtime catalog proxy |
| L21 | 1.88300 | 40.76 | S-LAH58 class (OHARA coordinate match; supplier unconfirmed) | Runtime catalog proxy |
| L22 | 1.58254 | 59.47 | Q-SK52S (HIKARI), near-coordinate spectral proxy; supplier unspecified | Runtime catalog proxy |
| L23 | 1.94595 | 17.98 | FDS18 class (HOYA coordinate match; supplier unconfirmed) | Runtime catalog proxy |
| L31 | 1.80348 | 40.44 | Unmatched (nd 1.80348 / νd 40.44; nearest audited S-LAH63 differs) | Abbe fallback |
| L32 | 1.80000 | 29.84 | S-NBH55 class (OHARA coordinate match; supplier unconfirmed) | Runtime catalog proxy |
| L33 | 1.49700 | 81.54 | 497816 ED/low-dispersion crown class (S-FPL51 coordinate; supplier unconfirmed) | Runtime catalog proxy |
| L34 | 1.58517 | 59.41 | L-BAL43 (OHARA), near-coordinate spectral proxy; supplier unspecified | Runtime catalog proxy |
| L41 | 1.61800 | 63.33 | 618634 crown/phosphate-crown class (supplier unconfirmed) | Runtime catalog proxy |
| L42 | 1.54072 | 47.23 | S-TIL2 class (OHARA coordinate match; supplier unconfirmed) | Runtime catalog proxy |
| L5 | 1.71299 | 53.87 | S-LAL8 class (OHARA near-coordinate match; supplier unconfirmed) | Runtime catalog proxy |

Catalog-derived line indices are not authored as measured evidence. Eleven elements resolve to compatible catalog curves at runtime. L22 uses Q-SK52S (catalog nd=1.58286, vd=59.51; residuals +0.00032 and +0.04); L34 uses L-BAL43. Both are qualified near-coordinate spectral proxies. L31 remains explicitly unmatched. Production suppliers remain unspecified.

The design spans a broad dispersion range, from L23 at $\nu_d=17.98$ to L33 at $\nu_d=81.54$. The product manual’s single-ED-element statement converges with L33’s very-high-Abbe coordinate, and the compatible S-FPL51 catalog curve supports an inferred APD material tag (project-normal-line ΔPgF ≈ +0.0308). This is not a patent-listed APD designation or a whole-lens APO claim. No catalog-derived `dPgF` or line indices override the runtime catalog curves.

## Focus Mechanism

The patent uses an internal focusing arrangement within G4. L41 moves along the optical axis during focusing, while L42 is fixed (¶0134); G5 is also fixed in the zoom architecture. The production manual specifies a macro range reaching 0.15 m at the wide setting and 0.35 m at the long setting, but those external object-distance specifications do not determine the internal L41 travel uniquely.

Accordingly, the final model uses **`NO_INTERNAL_RECONSTRUCTION`**. Every numerical zoom state is an infinity-focus state, and each `var` focus pair repeats the same infinity spacing. `closeFocusM: 0.15` is retained only as marketed metadata. It must not be interpreted as a reconstructed 0.15 m optical state.

| Zoom state | DD(3) | DD(9) | DD(21) | Authored focus state |
|---|---:|---:|---:|---|
| Wide Angle End | 0.70 mm | 14.58 mm | 2.20 mm | Infinity only |
| Intermediate | 8.67 mm | 7.72 mm | 13.24 mm | Infinity only |
| Telephoto End | 22.21 mm | 3.40 mm | 25.01 mm | Infinity only |

Because no finite-focus spacing row or L41 travel is published, total focus travel and the focus law are intentionally not stated. The production MFD is insufficient to solve them without additional constraints.

## Aspherical Surfaces

Example 1 has six aspherical surfaces: 6A and 7A on L22, 11A and 12A on L31, and 16A and 17A on L34. The patent writes the conic denominator as

$$
Z_d = \frac{C h^2}{1+\sqrt{1-K_A C^2 h^2}} + \sum_{m=3}^{20} A_m h^m,
$$

with $C=1/R$. LensVisualizer uses $\sqrt{1-(1+K)(h/R)^2}$, so the equivalent conversion is **$K=K_A-1$**. Every Example 1 asphere has $K_A=1$, therefore all six modeled conics use $K=0$. The model is unscaled ($s=1$), so the published A3–A20 coefficients are copied without dimensional rescaling. Odd powers remain rotationally symmetric because $h$ is radial height (US 2014/0368925 A1, ¶0176–¶0178; Table 3).

The coefficient tables below reproduce the final verified data. Units are $\mathrm{mm}^{1-m}$ for $A_m$.

### Surface 6A

| Coefficient | Value |
|---|---:|
| A3 | 4.09333230e-04 |
| A4 | -6.08888670e-04 |
| A5 | 1.44199770e-04 |
| A6 | -1.46196760e-05 |
| A7 | 8.04161690e-08 |
| A8 | 6.12999990e-08 |
| A9 | 3.12922290e-09 |
| A10 | -1.76356050e-10 |
| A11 | -4.10029040e-11 |
| A12 | -3.41405830e-12 |
| A13 | -6.60940400e-14 |
| A14 | 2.45389150e-14 |
| A15 | 3.25518460e-15 |
| A16 | 3.53012370e-16 |
| A17 | -2.50503140e-17 |
| A18 | 3.15455940e-19 |
| A19 | -1.04555520e-19 |
| A20 | -1.23920070e-20 |

### Surface 7A

| Coefficient | Value |
|---|---:|
| A3 | -1.28117390e-04 |
| A4 | -2.64046110e-04 |
| A5 | 4.03817240e-05 |
| A6 | 5.57349930e-07 |
| A7 | -6.16030080e-07 |
| A8 | -1.56257820e-09 |
| A9 | 6.41873040e-09 |
| A10 | 5.32174930e-10 |
| A11 | -1.97898710e-11 |
| A12 | -9.63884630e-12 |
| A13 | -1.03197220e-12 |
| A14 | -1.32169140e-14 |
| A15 | 1.06433180e-14 |
| A16 | 1.74770130e-15 |
| A17 | 1.11091410e-16 |
| A18 | -1.31838650e-17 |
| A19 | -2.32111230e-18 |
| A20 | 1.14190890e-19 |

### Surface 11A

| Coefficient | Value |
|---|---:|
| A3 | 8.40794180e-05 |
| A4 | -1.58841170e-04 |
| A5 | 5.01636750e-05 |
| A6 | -8.34781990e-06 |
| A7 | -2.07593160e-06 |
| A8 | 8.76289960e-07 |
| A9 | -1.03819800e-07 |
| A10 | 3.92404830e-09 |
| A11 | -6.64392180e-10 |
| A12 | 5.22037710e-11 |
| A13 | 3.06355480e-11 |
| A14 | 1.27798070e-12 |
| A15 | -9.28259590e-13 |
| A16 | -1.44035260e-13 |
| A17 | -1.45963890e-14 |
| A18 | 4.01922230e-15 |
| A19 | 1.73536560e-15 |
| A20 | -2.00852970e-16 |

### Surface 12A

| Coefficient | Value |
|---|---:|
| A3 | 4.93360440e-05 |
| A4 | 1.65650530e-05 |
| A5 | -4.73770750e-05 |
| A6 | 2.73768190e-05 |
| A7 | -6.02410340e-06 |
| A8 | 2.55111120e-07 |
| A9 | -7.28669350e-09 |
| A10 | 2.02743180e-08 |
| A11 | -1.77814140e-10 |
| A12 | -5.00790190e-10 |
| A13 | -7.47186030e-11 |
| A14 | 7.03744460e-12 |
| A15 | 5.84064590e-12 |
| A16 | -8.23742300e-13 |
| A17 | -2.08274100e-14 |
| A18 | 2.23521610e-15 |
| A19 | 1.25069940e-15 |
| A20 | -8.59273880e-17 |

### Surface 16A

| Coefficient | Value |
|---|---:|
| A3 | -2.27184470e-04 |
| A4 | 2.51143460e-04 |
| A5 | -4.99658690e-05 |
| A6 | 1.96735610e-06 |
| A7 | 8.95711580e-07 |
| A8 | 8.14758580e-08 |
| A9 | -8.87322570e-09 |
| A10 | -4.07456010e-09 |
| A11 | -6.40294720e-10 |
| A12 | -3.11609210e-11 |
| A13 | 1.24254290e-11 |
| A14 | 4.50911540e-12 |
| A15 | 7.76131960e-13 |
| A16 | 5.12277600e-14 |
| A17 | -1.51289550e-14 |
| A18 | -6.52191520e-15 |
| A19 | -9.74005800e-16 |
| A20 | 2.46004070e-16 |

### Surface 17A

| Coefficient | Value |
|---|---:|
| A3 | 6.85495240e-05 |
| A4 | 8.85015340e-05 |
| A5 | -6.25646150e-06 |
| A6 | 5.61022570e-07 |
| A7 | -1.64125440e-07 |
| A8 | 7.83679300e-09 |
| A9 | 8.20518130e-09 |
| A10 | 1.62700420e-09 |
| A11 | 1.07341480e-10 |
| A12 | -3.24652460e-11 |
| A13 | -1.32401970e-11 |
| A14 | -2.72775810e-12 |
| A15 | -2.94605040e-13 |
| A16 | 1.87279860e-14 |
| A17 | 1.90931480e-14 |
| A18 | 4.96107310e-15 |
| A19 | 4.85468660e-16 |
| A20 | -2.12267610e-16 |

The verified geometry model supplies **modeled** semi-diameters, so aspheric departures can be evaluated at those apertures. These departures are computed model results, not values printed by the patent:

| Surface | Modeled semi-diameter | Departure from base conic | Rim angle |
|---|---:|---:|---:|
| 6A | 9.50 mm | -0.671495 mm | 27.50° |
| 7A | 9.50 mm | -0.810280 mm | 28.13° |
| 11A | 5.90 mm | -0.094293 mm | 16.91° |
| 12A | 6.15 mm | +0.026659 mm | 8.72° |
| 16A | 6.65 mm | +0.626293 mm | 60.58° |
| 17A | 6.55 mm | -0.201075 mm | 54.11° |

Surface 16A is the limiting high-slope asphere in the modeled geometry evaluation: at the modeled 6.65 mm semi-diameter its rim angle is 60.58°, while surface 17A reaches 54.11°. These values are used only to describe the verified modeled geometry; the patent does not publish clear apertures for Example 1.

## Chromatic Correction Strategy

The strongest source-grounded statement about chromatic design is the material distribution rather than a claimed performance class. The patent supplies a very-high-Abbe L33 ($\nu_d=81.54$) cemented to the much lower-Abbe L32 ($\nu_d=29.84$), while the production manual specifies one ED element. This pairing gives a clear dispersion contrast inside the fixed part of G3, but the evidence does not by itself establish which residual color terms dominate or whether the production lens uses the exact same melt.

The modeled prescription also spans high-index/low-Abbe materials such as L11 and L23 and moderate/high-Abbe crowns in later groups. Those coordinates are enough to define the paraxial d-line model and, for the eleven catalog-resolved elements, to supply qualified dispersion curves. L31 remains Abbe-only, and catalog matches do not establish production spectral performance or justify a general apochromatic claim.

## Conditional Expressions

The patent defines conditions around the power of the movable OIS lens L34, the fourth-group focusing component L41, the first group, and the wide-state back-focus/track ratio. Recomputed from the final parsed data, the seven Table 31 quantities reproduce the patent values to the printed two-decimal precision:

| Condition | Final-data value | Table 31 | Base patent bound |
|---|---:|---:|---|
| (1) `|f3IS/f3|` | 1.47460 | 1.47 | 0.8 < value < 2.6 |
| (2) `|f3IS/fw|` | 2.22600 | 2.23 | 1.2 < value < 3.5 |
| (3) `|f3IS/ft|` | 0.75564 | 0.76 | 0.3 < value < 1.3 |
| (4) `|f4F/f4|` | 0.28232 | 0.28 | 0.05 < value < 1.0 |
| (5) `f1/fw` | 5.56049 | 5.56 | 3.6 < value < 7.2 |
| (6) `f1/ft` | 1.88756 | 1.89 | 1.2 < value < 2.6 |
| (7) `BFw/TLw` | 0.24969 | 0.25 | 0.15 < value < 0.42 |

All base conditions and the patent’s preferred sub-bounds pass in the final-data recomputation. One source-reading detail matters: the rendered Eq. (1-2) reads **0.9 < |f3IS/f3| < 2.4**. Parsed text can merge the lower bound with adjacent layout and resemble `0.94`; the rendered equation was used, and the raw OCR risk remains documented rather than silently rewritten.

The condition values are compound-system quantities. For example, `|f3IS/f3|` compares the isolated L34 movable-subgroup focal length with the entire G3 focal length; `|f4F/f4|` compares L41 with the complete G4. They should not be interpreted as direct measures of an individual surface’s aberration contribution.

## Image Stabilization

The patent identifies L34 as the single-lens movable third subgroup that shifts perpendicular to the optical axis for camera-shake correction (¶0129). Table 32 gives the required L34 transverse movement for correction of a 0.3° camera-shake tilt in Example 1:

| Patent state | L34 transverse movement |
|---|---:|
| Wide angle end | 0.108 mm |
| Intermediate | 0.138 mm |
| Long end | 0.190 mm |

These are source-published decenter amounts, not quantities re-derived by the centered optical model. The data file therefore does not invent a decentered OIS control. FUJIFILM’s support material confirms that the production XC16-50mmF3.5-5.6 OIS II is an OIS lens and describes OIS generally as moving an optical unit to oppose camera shake, but it does not identify L34 or cite this patent embodiment.

Manufacturer reference: [FUJIFILM OIS support entry](https://digitalcamera-support-en.fujifilm.com/digitalcameraengpcdetail?aid=000008347).

## Verification Summary

The implemented prescription was evaluated with sequential height/reduced-angle tracing and a separate ABCD matrix path. Maximum matrix disagreement across the three published infinity states is `1.11 × 10^-16`. The calculated effective focal lengths are:

| State | Patent focal length | Final-data EFL | Residual | BFL from surface 23 |
|---|---:|---:|---:|---:|
| Wide | 16.49 mm | 16.489359 mm | -0.000641 mm | 16.252039 mm |
| Intermediate | 27.98 mm | 27.983449 mm | +0.003449 mm | 16.246283 mm |
| Long end | 48.56 mm | 48.575399 mm | +0.015399 mm | 16.253004 mm |

All focal-length residuals are within the 0.03 mm source-precision-aware tolerance. The surface-by-surface Petzval sum is +0.001356532862 mm⁻¹, computed as `Σ φ/(n·n′)` over the 23 active lens/stop surfaces. Its reciprocal is about 737.17 mm; that reciprocal is a first-order Petzval quantity, not a claim that the physical best-focus image surface is a sphere of that radius.

### Rear reference plane and traced PP

The source PP plate is traced through `rearPlates` and omitted only from the drawing and element count. Table 1 gives 11.95 mm of air followed by 2.85 mm of glass (nd=1.51680, vd=64.20), but no trailing image gap. The retained inferred image plane gives 2.421486317 mm after the plate, preserving the previous 16.2504420131 mm paraxial equivalent. This final gap is a modeling inference, not a patent-listed dimension.

The three source-state BFL values are 16.2520393, 16.2462829, and 16.2530038 mm. Their residuals against the fixed modeled spacing remain below about 0.0042 mm and are treated as source-rounding scatter rather than hidden with state-dependent invented rear gaps.

### Stop calibration and modeled apertures

The patent publishes F No. 3.60, 4.54, and 5.59 but no physical diaphragm diameter. The modeled base stop semi-diameter, **4.7532831889 mm**, is calibrated from the wide-state F No. and the modeled entrance-pupil magnification. Independent per-state calibrations would be 4.7532832, 4.7309891, and 4.6758679 mm. Agreement with the target F-numbers is therefore a calibration property of the model and not independent evidence for the manufactured diaphragm size. If the single stored wide-calibrated stop radius is held fixed through zoom, the corresponding first-order F-numbers are approximately 3.600, 4.519, and 5.499; the `nominalFno` array therefore records the published/model target schedule rather than asserting those values for one fixed physical diaphragm radius.

Every lens-surface semi-diameter is estimated because Example 1 has no clear-aperture table. The revised rims follow Fig. 1 at 600 dpi, excluding the OIS and focus arrows. Surface 5 is capped at 8.5 mm by gap clearance; the steep 16A/17A OIS asphere retains its smaller clear aperture. These limits take precedence over fitting the outer drawing ink.

The manufacturer-marketed field endpoints, 83.2° wide and 31.7° long, were also tested for exact-ray **reachability** with the inferred apertures. At least one clear ray per field sign reaches the image plane at both endpoints. This does not establish unvignetted throughput, and it does not establish that the modeled semi-diameters transmit the patent’s wider 89.6° wide field without clipping.

### Source-reading corrections

Three machine-extraction ambiguities were resolved against rendered patent pages during source transcription:

- Table 1 surface 10 spacing is **1.30 mm**, not the OCR-risk value 0.30 mm.
- Table 1 surface 20 radius is **-18.1159 mm**, not an OCR-collapsed -181.159 mm.
- Eq. (1-2) uses a lower bound of **0.9**, not an OCR/layout merge resembling 0.94.

These are transcription corrections to machine extraction, not proposed corrections to the patent. The raw extraction risks and rendered readings remain distinguished in the source-transcription record.

## Sources and References

1. **Daiki Kawamura, FUJIFILM Corporation.** US 2014/0368925 A1, *Zoom Lens and Imaging Apparatus*, published December 18, 2014. Primary prescription source. Key locations: Fig. 1; ¶0121–¶0138; ¶0165–¶0178; Tables 1–3; Table 31; ¶0221 and Table 32.
2. **FUJIFILM Corporation.** [XC16-50mmF3.5-5.6 OIS II / XC50-230mmF4.5-6.7 OIS II Owner’s Manual, BL01874-200](https://dl.fujifilm-x.com/support/manual/lenses/lens_xc16-50-2_xc50-230-2_manual_01.pdf). Product construction, focal range, aperture, field, focus range, magnification, weight, and filter size.
3. **FUJIFILM Corporation.** [OIS support / terminology entry](https://digitalcamera-support-en.fujifilm.com/digitalcameraengpcdetail?aid=000008347). Product OIS context and minimum-focus-distance comparison.
4. **FUJIFILM Corporation.** [X-T3 catalogue / X-mount lens lineup](https://dl.fujifilm-x.com/global/products/cameras/x-t3/pdf/x_t3_catalogue_01.pdf). X-system production context.
5. **OHARA Corporation.** [Detailed optical-glass data](https://oharacorp.com/wp-content/uploads/2024/02/all-detailed-data-20240131.pdf) and individual S-NPH2, S-LAH, S-NBH, S-FPL51, S-TIL, and S-LAL catalog pages, used for coordinate-class and line-index review.
6. **HOYA Corporation Optics Division.** [Optical Glass Data Download](https://www.hoya-opticalworld.com/english/datadownload/index.html) and FDS18 product/catalog material, used for coordinate-class review.
7. HIKARI, SCHOTT, CDGM, and SUMITA current optical-glass catalogs were also checked during the glass audit to avoid anchoring on a single supplier. Their use establishes candidate coordinate classes only; no FUJIFILM supplier attribution is made.
