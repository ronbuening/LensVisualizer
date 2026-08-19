## Patent Reference and Design Identification

**Patent:** JP 2004-317867 A\
**Application Number:** JP 2003-112967\
**Filed:** 2003-04-17\
**Published:** 2004-11-11\
**Inventor:** Hiroshi Endo\
**Assignee:** Canon Inc.\
**Title:** Zoom Lens\
**Embodiment analyzed:** Numerical Example 1 (数値実施例1)

This file reconstructs Numerical Example 1 from the fixed local patent. The
job card associates that example with the Canon EF 70-300mm f/4.5-5.6 DO IS
USM, but neither the patent nor Canon's product page says that Example 1 is the
unchanged production prescription.

The association is strong but bounded. The example prints 72.2–290.3 mm,
f/4.6–5.8, a diffractive surface in the positive first group, transverse image
stabilization by the negative second group, and rear focusing by the negative
sixth group. It was published in the same year that Canon marketed the lens.
However, the patent model has 17 elements and seven functional zoom groups,
with a 1.5 m focus case; Canon lists the product as 18 elements in 12 groups,
a three-layer DO element, and 1.4 m minimum focus. Marketing values and patent
design values are therefore kept separate.

The source does not explicitly state the prescription length unit, radius-sign
convention, or spectral reference for `ni`. Millimetres, positive center of
curvature toward the image side, and d-line `nd/νd` are conventional modeling
interpretations consistent with the figure and numerical scale. The DOE
reference wavelength alone is explicitly identified as the d-line.

## Optical Architecture

The example is a seven-unit positive-negative-positive-negative-positive-
negative-positive zoom. The aperture stop lies between G3 and G4.

| Functional group | Surfaces |    Power | Wide-to-tele axial behavior                    | Modeled role                          |
| ---------------- | -------- | -------: | ---------------------------------------------- | ------------------------------------- |
| G1               | 1–5      | positive | moves objectward                               | front collector and effective DO pair |
| G2               | 6–10     | negative | fixed                                          | centered image-stabilization group    |
| G3               | 11–14    | positive | moves objectward                               | positive aspheric group before stop   |
| G4               | 16–17    | negative | reverses shallowly, then moves imageward       | negative group behind stop            |
| G5               | 18–25    | positive | fixed                                          | positive rear cluster                 |
| G6               | 26–31    | negative | moves objectward for zoom, imageward for focus | rear-focus group                      |
| G7               | 32–33    | positive | fixed                                          | terminal positive group               |

The patent's three printed infinity stations are 72.16, 139.54, and 290.26 mm.
The data also samples the printed 12-term motion cams at 18 intermediate
positions, with the source G4 turning point at cam parameter 0.0748998 included
explicitly. The three printed gap columns remain exact at schedule entries 1,
11, and 21. Their first-surface-to-image tracks are 143.77, 183.96, and
208.94 mm. Only the tele station has track/EFL below one
(`208.94/290.07 = 0.720`), so the long end has telephoto form. BFD is less than
EFL at every station, so the model is not retrofocus under that paraxial test.

`elementCount = 17` records refractive media. `groupCount = 14` records the
air-spaced physical assemblies after three direct material interfaces are
combined. The seven `groups` entries describe functional zoom units. Canon's
12-group product count is a separate production specification.

## Element-by-Element Analysis

The focal lengths below are isolated-in-air thick-element calculations. They
show sign and relative strength; they are not in-system or cemented-group focal
lengths. The glass names are either qualified current-catalog surrogates or
vendor-neutral coordinate classes, never patent-named identities.

| Element | Group | Patent nd/vd   | Isolated f mm | Glass disposition                         | Interpretation                             |
| ------- | ----- | -------------- | ------------: | ----------------------------------------- | ------------------------------------------ |
| L1      | G1    | 1.48749 / 70.2 |      +227.346 | S-FSL5 surrogate                          | weak positive front collector              |
| L2      | G1    | 1.83400 / 37.2 |      -126.309 | 834372 vendor-neutral class               | negative front member of bonded DO pair    |
| L3      | G1    | 1.51633 / 64.1 |       +91.815 | S-BSL7 surrogate                          | positive rear member of bonded DO pair     |
| L4      | G2    | 1.71300 / 53.9 |       -60.005 | S-LAL8 surrogate                          | front negative IS member                   |
| L5      | G2    | 1.62299 / 58.2 |       -32.872 | S-BSM15 surrogate                         | negative member of cemented rear pair      |
| L6      | G2    | 1.84666 / 23.9 |       +51.478 | 847239 vendor-neutral class               | positive partner; G2 remains net negative  |
| L7      | G3    | 1.58313 / 59.4 |       +31.188 | S-BAL42 surrogate                         | strong positive element with front asphere |
| L8      | G3    | 1.80518 / 25.4 |      -124.344 | S-TIH6 surrogate                          | weak negative partner                      |
| L9      | G4    | 1.75500 / 52.3 |       -39.188 | S-LAH97 surrogate                         | single moving negative group               |
| L10     | G5    | 1.51742 / 52.4 |       +61.310 | S-NSL36 surrogate                         | front positive member of fixed cluster     |
| L11     | G5    | 1.80518 / 25.4 |       -67.677 | S-TIH6 surrogate                          | principal negative member of fixed cluster |
| L12     | G5    | 1.48749 / 70.2 |       +53.201 | S-FSL5 surrogate                          | low-dispersion positive member             |
| L13     | G5    | 1.60311 / 60.6 |       +59.092 | S-BSM14 surrogate                         | rear positive member                       |
| L14     | G6    | 1.83481 / 42.7 |       -37.415 | 835427 vendor-neutral class               | front negative focus member                |
| L15     | G6    | 1.72825 / 28.5 |       +25.467 | S-TIH10 surrogate                         | positive member of direct L15/L16 assembly |
| L16     | G6    | 1.83481 / 42.7 |       -19.708 | same vendor-neutral class as L14          | strong negative partner                    |
| L17     | G7    | 1.58313 / 59.4 |      +151.176 | S-BAL42 surrogate                         | weak fixed terminal positive element       |

The repeated patent pairs use identical dispositions and runtime curves:
L1/L12, L7/L17, L8/L11, and L14/L16. No role statement attributes a specific
aberration correction without a differential source calculation.

## Glass Identification and Selection

The patent publishes 17 `n/ν` media rows but no vendor, glass names, six-digit
codes, C/F/g-line indices, Sellmeier coefficients, or relative partial
dispersion. A current coefficient-backed catalog comparison found 13 unique
coordinates. At the patent's printed precision, OHARA has an exact-rounding
candidate for all 13; Hikari, Hoya, and Schott each cover only three, Sumita
one, and CDGM none. That coherent whole-prescription fingerprint supports
OHARA as the preferred surrogate family for this Japanese patent, but it does
not prove supplier or melt identity.

| Patent nd/vd   | Final runtime disposition | Residual/ambiguity                                          |
| -------------- | ------------------------- | ----------------------------------------------------------- |
| 1.48749 / 70.2 | S-FSL5                    | coefficient-evaluated Δnd about -0.00000007, Δvd +0.036     |
| 1.83400 / 37.2 | 834372 class              | S-LAH60/S-LAH60V variant remains unresolved                 |
| 1.51633 / 64.1 | S-BSL7                    | also exact-rounding Sumita K-BK7                            |
| 1.71300 / 53.9 | S-LAL8                    | also exact-rounding Hoya LAC8                               |
| 1.62299 / 58.2 | S-BSM15                   | OHARA-family match preferred                                |
| 1.84666 / 23.9 | 847239 class              | legacy PBH53/S-NPH53 identity remains unresolved            |
| 1.58313 / 59.4 | S-BAL42                   | also exact-rounding Hikari J-SK12                           |
| 1.80518 / 25.4 | S-TIH6                    | also exact-rounding Schott/Hikari SF6 variants              |
| 1.75500 / 52.3 | S-LAH97                   | Schott N-LAK33B, Hoya TAC6L, and Hikari J-LASKH2 also round |
| 1.51742 / 52.4 | S-NSL36                   | preferred OHARA match                                       |
| 1.60311 / 60.6 | S-BSM14                   | also exact-rounding Schott N-SK14                           |
| 1.83481 / 42.7 | 835427 class              | S-LAH55 variants and Hoya alternatives remain non-unique    |
| 1.72825 / 28.5 | S-TIH10                   | preferred OHARA match                                       |

No catalog-derived `nC`, `nF`, or `ng` fields are authored because the patent
does not provide measured line indices. Thirteen elements resolve explicitly to
qualified OHARA Sellmeier surrogates. L2, L6, L14, and L16 use vendor-neutral
six-digit classes that select coordinate-compatible curves without choosing a
production vendor or vacuum-melt variant. All 17 elements therefore receive
Sellmeier dispersion while their patent identities remain unresolved. No
`dPgF` is authored, so this file does not support anomalous-partial-dispersion
or APO claims.

## Focus Mechanism

The patent moves G6 imageward from infinity to 1.5 m while preserving its
internal geometry: `d25` increases and `d31` decreases by the same amount. The
data samples the printed focus-cam polynomial at every authored zoom coordinate
rather than fitting a separate image-plane reference.

| Station | d25 infinity → close mm | d31 infinity → close mm | G6 imageward shift mm |
| ------- | ----------------------: | ----------------------: | --------------------: |
| Wide    |   15.780000 → 16.493980 |     3.000000 → 2.286020 |              0.713980 |
| Middle  |   12.430000 → 14.829338 |     6.340000 → 3.940662 |              2.399338 |
| Tele    |     1.470000 → 9.404380 |    17.310000 → 9.375620 |              7.934380 |

Paragraph [0036] defines `DX` as the paraxially calculated extension from
infinity and `DXC` as the focus-cam approximation. Table 2 publishes these
`DX / DXC` pairs:

| Focal position |  Infinity |     3.5 m |     2.2 m |     1.8 m |     1.5 m |
| -------------: | --------: | --------: | --------: | --------: | --------: |
|        72.2 mm | 0.00/0.00 | 0.29/0.29 | 0.48/0.48 | 0.60/0.61 | 0.71/0.71 |
|       119.5 mm | 0.00/0.00 | 0.76/0.76 | 1.23/1.22 | 1.52/1.51 | 1.81/1.82 |
|       206.5 mm | 0.00/0.00 | 1.97/1.97 | 3.18/3.19 | 3.92/3.94 | 4.67/4.68 |
|       290.3 mm | 0.00/0.00 | 3.37/3.37 | 5.41/5.41 | 6.67/6.67 | 7.93/7.93 |

Only the 72.2 and 290.3 mm rows correspond to authored zoom endpoints. The
119.5 and 206.5 mm rows are not prescription knots, and the authored 139.54 mm
middle station has no Table 2 row. Its 2.399338 mm travel is therefore a
cam-polynomial reconstruction at the six-gap least-squares zoom coordinate,
not a printed table value. The patent does not unambiguously define the
object-distance reference plane, so the file makes no exact close-conjugate
residual claim. Canon's marketed 1.4 m minimum distance remains product
metadata and does not alter this 1.5 m patent model.

## Aspherical Surface

Surface 11A, the front of L7, is the only asphere. The scan's denominator glyph
is poor, and no conic coefficient is printed. The standard spherical-base
interpretation is modeled as `K=0`:

$$
z(h)=\frac{h^2/R}{1+\sqrt{1-h^2/R^2}}+A_4h^4+A_6h^6+A_8h^8.
$$

| Surface |   K |     A4 mm^-3 |     A6 mm^-5 |      A8 mm^-7 |
| ------- | --: | -----------: | -----------: | ------------: |
| 11A     |   0 | -2.993677e-6 | +3.069170e-9 | -2.094142e-12 |

The source does not publish a clear aperture, so the modeled 12.5 mm
semi-diameter and any rim departure are not patent dimensions.

## Canon Diffractive Optical Element and Modeling Boundary

Surface 4 is the direct L2-to-L3 material interface at radius +49.800 mm. The
patent table prints radial coefficients `c2`, `c4`, and `c6`; the phase-equation
scan has an ambiguous prefactor glyph, but the dimensionally consistent Canon
convention is:

$$
W(h)=C_2h^2+C_4h^4+C_6h^6,\qquad
\Phi(h)=\frac{2\pi}{\lambda_0}W(h).
$$

| Term | Authored coefficient |
| ---- | -------------------: |
| C2   |    -7.27275e-5 mm^-1 |
| C4   |    -3.95105e-9 mm^-3 |
| C6   |   -3.14725e-12 mm^-5 |

The d-line reference is 587.6 nm and the modeled order is +1. LensVisualizer's
`radial-polynomial` stores `W(h)`, so the raw coefficients are used directly;
applying `2π/λ0` to them before authoring would double-convert the phase. At the
reference wavelength the paraxial diffractive power is +0.000145455 mm^-1 and
its Petzval contribution is about +0.000052304 mm^-1.

This is an ideal selected-order geometric phase model. It is not a physical
reconstruction of Canon's marketed three-layer element and does not model
grooves, blaze efficiency, other diffraction orders, coatings, polarization,
scatter, flare, coherent PSF, or diffraction-limited MTF.

## Image Stabilization

The patent assigns stabilization to a transverse displacement of the fixed
negative G2 unit. In the centered prescription its paraxial decenter
sensitivity at tele is about -3.384 mm of image shift per millimetre of G2
shift, producing the Table 3 sensitivity angle of 0.66792°. The patent does not
publish an actuator stroke for Example 1. The data therefore identifies the IS
group but does not invent a decentered state, stabilization range, or
decentered-aberration model.

## Semi-Diameters, Pupil, and Aperture

Numerical Example 1 gives no clear-aperture or stop-radius column. The
semi-diameters are modeling apertures inferred from the 600 dpi Figure 1
optical outlines, geometry constraints, and ray containment. The final
figure/data comparison has a median ratio of 0.976. Surface pairs 4/5 =
23.8/23.6 mm and 7/8 = 10.6/10.6 mm remain within the figure's optical rims and
contain the exact tele marginal ray. The 7-to-8 air gap retains 0.116 mm
physical rim clearance; `gapSagFrac = 0.97` records the validated per-lens
allowance needed for that source-consistent outline.

The endpoint f-numbers imply zoom-dependent physical stop radii. Paraxial
values at W/M/T are about 9.061, 9.094, and 10.224 mm; tracing the nominal
entrance-pupil marginal ray exactly gives 9.102, 9.158, and 10.408 mm.
`STO.sd = 10.5 mm` is a clearance envelope for the largest exact opening, not a
published iris radius. The 21-entry `nominalFno` schedule retains the printed
4.6 and 5.8 endpoints and uses a disclosed linear modeling policy through 5.2
at the middle station. Marketing f/4.5 remains metadata and is not exposed as a
model aperture stop.

The current viewer does not retain those per-zoom physical stops. Its scalar
wide-stop formula passes about 7.219 mm at tele wide open, corresponding to an
exact geometric f-number near 8.215 while the nominal label remains f/5.8.
This is an engine capability limit, not a prescription or aperture claim; the
data preserves the source f-number schedule and the clear apertures required
when per-zoom stop support is added.

## Source Normalization and Known Patent Defect

The fixed PDF controls over OCR. It visibly prints r4 = +49.800 mm and
r10 = -759.945 mm; those literal values are used.

Source rows 29 and 30 share radius -31.265 mm with `d29 = 0.00`. The data
collapses them to one direct L15-to-L16 interface at label 29 and retains
source `d30 = 0.95 mm`. The fresh verifier shows a maximum full-matrix change
of only 2.22e-16. No air, cement, or resin layer is invented.

The source calls the final 38.63 row `skinf` but does not define that label. It
is modeled as the final image-side spacing because the reconstructed BFD is
38.56–38.62 mm; this is a numerically supported interpretation, not an explicit
definition.

Paragraph [0052] illustrates a generic sixth-order motion series, while the
Example 1 tables explicitly label coefficients 1 through 12. At cam parameter
1, the rendered coefficient rows evaluate to G1 -65.18406, G3 -10.81255, G4
+7.72279, and G6 -14.31067 mm. All six resulting tele gaps agree with the
independently rounded table column within 0.01 mm. The sampled schedule uses
the 12 printed terms and includes G4's shallow initial reversal.

## Conditional Expressions

Table 3 prints 13 Example 1 condition values. The independent calculations use
the source prescription and the definitions in paragraphs [0024]–[0047].

| Condition                     | Printed | Computed | Printed bound | Result               |
| ----------------------------- | ------: | -------: | ------------- | -------------------- |
| `abs(ESW)`                    |    5.25 |  5.23904 | 2–6           | satisfies            |
| `abs(EST)`                    |    7.25 |  7.24115 | 3–10          | satisfies            |
| `abs(fF)/sqrt(fW fT)`         |    0.18 |  0.18246 | 0.1–0.4       | satisfies            |
| `abs(DXW/MF)`                 |   0.050 |  0.04989 | 0.04–0.07     | satisfies            |
| `abs(DXT/MF)`                 |    0.56 |  0.55446 | **0.05–0.08** | source contradiction |
| `abs(M1)/OTLW`                |    0.45 |  0.45329 | 0.4–0.55      | satisfies            |
| `f1/sqrt(fW fT)`              |    0.93 |  0.93305 | 0.8–1.1       | satisfies            |
| `abs(f2)/sqrt(fW fT)`         |    0.25 |  0.24824 | 0.18–0.3      | satisfies            |
| `f3/sqrt(fW fT)`              |    0.29 |  0.28775 | 0.2–0.35      | satisfies            |
| `abs(f4)/sqrt(fW fT)`         |    0.27 |  0.27078 | 0.25–0.35     | satisfies            |
| `f5/sqrt(fW fT)`              |    0.19 |  0.18942 | 0.15–0.25     | satisfies            |
| `abs(f6)/sqrt(fW fT)`         |    0.18 |  0.18246 | 0.16–0.25     | satisfies            |
| `abs(atan(TS2T/fT))`, degrees |    0.67 |  0.66792 | 0.4–1.0       | satisfies            |

The raw `0.05 < abs(DXT/MF) < 0.08` bound contradicts both the printed Example
1 value 0.56 and the independently reproduced 0.55446. A likely decimal-place
repair is not substituted for the published text.

## Verification Summary and Modeling Limits

The independent d-line paraxial reconstruction gives:

| Station | Patent focal mm | Computed EFL mm | Computed BFD mm | Track mm |
| ------- | --------------: | --------------: | --------------: | -------: |
| Wide    |           72.16 |        72.09997 |        38.57073 |   143.77 |
| Middle  |          139.54 |       139.54397 |        38.62298 |   183.96 |
| Tele    |          290.26 |       290.06786 |        38.56135 |   208.94 |

All 13 printed Table 3 condition values are independently reproduced, including
ESW 5.239, EST 7.241, DXW/MF 0.04989, DXT/MF 0.55446, and the IS sensitivity
angle 0.66792°. The paraxial Petzval sum including the DO term is
+0.000530942 mm^-1.

Targeted Stage 4 validation covers schema/defaulted build, TypeScript and
formatting, all 42 authored zoom-by-focus endpoint geometries, cross-gap and
render diagnostics, full axial marginal rays, off-axis/chromatic smoke traces,
glass-resolution dispositions, the phase-disabled control, surface-domain
validation, image-circle floor, and 600 dpi figure comparison. A dense scan of
the piecewise-linear schedule keeps infinity BFD between 38.539 and 38.771 mm;
the maximum departure from the printed 38.63 mm is 0.141 mm.

The model leaves these boundaries explicit:

- no production three-layer geometry, order efficiency, scatter, or flare;
- no decentered IS motion or stabilized-state aberration model;
- no source-backed surface apertures or zoom-dependent physical iris model;
- no direct continuous evaluation of the high-order cams between the 21 sampled knots;
- no proven glass supplier, partial dispersion, or APO designation;
- no claim that the patent example is the shipped 18-element product formula.

## Sources and References

1. [JP 2004-317867 A, “Zoom Lens”](https://patents.google.com/patent/JP2004317867A/en), Numerical Example 1, Tables 1–3, Figures 1–2, and paragraphs [0024], [0036], [0048], [0052]–[0055].
2. [Canon Camera Museum — EF 70-300mm f/4.5-5.6 DO IS USM](https://global.canon/en/c-museum/product/ef378.html), for product release, construction, minimum focus, and three-layer DO facts.
3. [Canon USA support — EF 70-300mm f/4.5-5.6 DO IS USM](https://www.usa.canon.com/support/p/ef-70-300mm-f-4-5-5-6-do-is-usm), for official product specification corroboration.
4. [OHARA optical-glass coordinate tables](https://www.ohara-inc.co.jp/en/product/01000/) and [official catalog downloads](https://www.ohara-inc.co.jp/en/product/catalog/), for current surrogate-family evidence.
5. [Canon US 6,208,474 B1](https://patents.google.com/patent/US6208474B1/en), for Canon optical-path/phase convention context only, not this zoom prescription.
