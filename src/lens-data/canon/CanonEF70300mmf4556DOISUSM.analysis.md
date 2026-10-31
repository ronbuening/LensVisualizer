## Patent Reference and Design Identification

**Patent:** JP 2004-317867 A\
**Application Number:** JP 2003-112967\
**Filed:** 2003-04-17\
**Published:** 2004-11-11\
**Inventor:** Hiroshi Endo\
**Assignee:** Canon Inc.\
**Title:** Zoom Lens\
**Example details:** 数値実施例1

This file reconstructs Numerical Example 1 from the fixed local patent. The
job card associates that example with the Canon EF 70-300 mm f/4.5-5.6 DO IS
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

The source does not explicitly state the prescription length unit or
radius-sign convention, and the patent names no spectral line for `ni`.
Millimetres and positive center of curvature toward the image side are
conventional modeling interpretations consistent with the figure and numerical
scale. The bulk pairs are read as d-line $n_d$ and $\nu_d$ because all 17 match
catalog d-line coordinates (see Glass Identification and Source
Qualifications). The DOE reference wavelength alone is explicitly identified as
the d-line.

## Optical Architecture

The example is a seven-unit positive-negative-positive-negative-positive-
negative-positive zoom. The aperture stop lies between patent groups L3 and
L4. The group annotations follow the source's `L1`–`L7` notation; the
element-by-element table independently uses neutral `E1`–`E17` identifiers
because the patent does not name the individual glass members.

| Functional group | Surfaces |    Power | Wide-to-tele axial behavior                    | Modeled role                          |
| ---------------- | -------- | -------: | ---------------------------------------------- | ------------------------------------- |
| L1               | 1–5      | positive | moves objectward                               | front collector and effective DO pair |
| L2               | 6–10     | negative | fixed                                          | centered image-stabilization group    |
| L3               | 11–14    | positive | moves objectward                               | positive aspheric group before stop   |
| L4               | 16–17    | negative | reverses shallowly, then moves imageward       | negative group behind stop            |
| L5               | 18–25    | positive | fixed                                          | positive rear cluster                 |
| L6               | 26–31    | negative | moves objectward for zoom, imageward for focus | rear-focus group                      |
| L7               | 32–33    | positive | fixed                                          | terminal positive group               |

The patent's three printed infinity stations are 72.16, 139.54, and 290.26 mm.
The data also samples the printed 12-term motion cams at 18 intermediate
positions, with the source L4 turning point at cam parameter 0.0748998 included
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
lengths. The patent names no spectral line for the bulk pairs; they are read as d-line (see Glass Identification and Source Qualifications). The glass names below are catalog spectral proxies, never patent-named identities.

| Element | Group | Printed $n_d$ | Printed $\nu_d$ | Isolated f mm | Glass                                                                                                          | Interpretation                             |
| ------- | ----- | ------------: | --------------: | ------------: | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| E1      | L1    |       1.48749 |            70.2 |      +227.346 | S-FSL5 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)    | weak positive front collector              |
| E2      | L1    |       1.83400 |            37.2 |      -126.309 | J-LASF010 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified) | negative front member of bonded DO pair    |
| E3      | L1    |       1.51633 |            64.1 |       +91.815 | S-BSL7 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)    | positive rear member of bonded DO pair     |
| E4      | L2    |       1.71300 |            53.9 |       -60.005 | S-LAL8 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)    | front negative IS member                   |
| E5      | L2    |       1.62299 |            58.2 |       -32.872 | S-BSM15 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)   | negative member of cemented rear pair      |
| E6      | L2    |       1.84666 |            23.9 |       +51.478 | S-NPH53 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)   | positive partner; L2 remains net negative  |
| E7      | L3    |       1.58313 |            59.4 |       +31.188 | S-BAL42 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)   | strong positive element with front asphere |
| E8      | L3    |       1.80518 |            25.4 |      -124.344 | S-TIH6 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)    | weak negative partner                      |
| E9      | L4    |       1.75500 |            52.3 |       -39.188 | S-LAH97 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)   | single moving negative group               |
| E10     | L5    |       1.51742 |            52.4 |       +61.310 | S-NSL36 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)   | front positive member of fixed cluster     |
| E11     | L5    |       1.80518 |            25.4 |       -67.677 | S-TIH6 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)    | principal negative member of fixed cluster |
| E12     | L5    |       1.48749 |            70.2 |       +53.201 | S-FSL5 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)    | low-dispersion positive member             |
| E13     | L5    |       1.60311 |            60.6 |       +59.092 | S-BSM14 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)   | rear positive member                       |
| E14     | L6    |       1.83481 |            42.7 |       -37.415 | J-LASF05 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)  | front negative focus member                |
| E15     | L6    |       1.72825 |            28.5 |       +25.467 | S-TIH10 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)   | positive member of direct E15/E16 assembly |
| E16     | L6    |       1.83481 |            42.7 |       -19.708 | J-LASF05 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)  | strong negative partner                    |
| E17     | L7    |       1.58313 |            59.4 |      +151.176 | S-BAL42 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)   | weak fixed terminal positive element       |

The repeated patent pairs retain identical source values and the same catalog curves:
E1/E12, E7/E17, E8/E11, and E14/E16. No role statement attributes a specific
aberration correction without a differential source calculation.

## Glass Identification and Source Qualifications

Fresh original inspection on **2026-10-30** confirms all 17 bare printed pairs in Numerical Example 1, PDF/printed pages 14–15. Paragraph 0052 on pages 12–13 defines ni/vi without a reference wavelength; the patent names no spectral line for them. Only the DOE phase reference in paragraph 0054 is explicitly d-line; it does not define every bulk index. 17 of 17 printed pairs match catalog d-line coordinates and none match the e-line, so the table is read as d-line. 17 media use catalog curves as spectral proxies; supplier, melt and chemistry stay unspecified.

The glass names in the element table are coordinate matches, not claims of historical supplier, melt or chemistry. The whole-prescription coordinate fingerprint establishes the reference line, not a production vendor.

No printed C/F/g indices, partial dispersion or APD values are supplied for this example. The 17 literal pairs remain in the element table above. No measured normal/anomalous dispersion or Canon UD identity is inferred. No resin thickness, additional hybrid-medium pair or physical three-layer grating prescription is supplied; the direct E2/E3 interface remains the macroscopic phase boundary, with no disconnected resin wings.

## Focus Mechanism

The patent moves group L6 imageward from infinity to 1.5 m while preserving its
internal geometry: `d25` increases and `d31` decreases by the same amount. The
data samples the printed focus-cam polynomial at every authored zoom coordinate
rather than fitting a separate image-plane reference.

| Station | d25 infinity → close mm | d31 infinity → close mm | L6 imageward shift mm |
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

Surface 11A, the front of E7, is the only asphere. The scan's denominator glyph
is poor, and no conic coefficient is printed. The standard spherical-base
interpretation is modeled as `K=0`:

$$
z(h)=\frac{h^2/R}{1+\sqrt{1-h^2/R^2}}+A_4h^4+A_6h^6+A_8h^8.
$$

| Surface |   K |     A4 mm^-3 |     A6 mm^-5 |      A8 mm^-7 |
| ------- | --: | -----------: | -----------: | ------------: |
| 11A     |   0 | -2.993677e-6 | +3.069170e-9 | -2.094142e-12 |

The native equation on page 13 shows an undefined H before the denominator square root. The retained standard spherical-base K=0 interpretation is an authored normalization, not a separately printed conic coefficient; this literal-equation limitation is recorded as unresolved source errata. All b/c/d values remain literal. The source does not publish a clear aperture, so the modeled 12.5 mm
semi-diameter and any rim departure are not patent dimensions.

## Canon Diffractive Optical Element and Modeling Boundary

Surface 4 is the direct E2/E3 interface, source R=+49.800 mm. The original table on page 15 gives c2=-7.27275e-5, c4=-3.95105e-9 and c6=-3.14725e-12. These numerical values and the existing +1 order remain unchanged. The DOE reference is explicitly d-line; 587.6 nm is its authored standard-line conversion, separate from the bulk glass pairs, for which the patent names no line.

The selected original's actual paragraph 0054/page 13 visibly prints a multiplication prefactor `2πλ0` and `C1·a²` in the leading term, followed by h⁴/h⁶. It does **not** literally print the division prefactor previously asserted in the header. The retained implementation adopts the existing optical-path interpretation W(h)=c2h²+c4h⁴+c6h⁶, with phase 2πW/λ0. Reproduction of the source focal/back-focus scale supports this interpretation, but the printed prefactor/radial-symbol inconsistency is recorded as unresolved source errata. No numerical phase edit or borrowed publication substitutes for the original.

This is an ideal selected-order macroscopic phase model. It does not reconstruct Canon's commercial three-layer microgeometry, material thicknesses, blaze efficiency, other orders, polarization, scatter, flare, coherent PSF or diffraction-limited MTF. No opaque interface land or additional resin medium is drawn.

## Image Stabilization

The patent assigns stabilization to a transverse displacement of the fixed
negative L2 unit. In the centered prescription its paraxial decenter
sensitivity at tele is about -3.384 mm of image shift per millimetre of L2
shift, producing the Table 3 sensitivity angle of 0.66792°. The patent does not
publish an actuator stroke for Example 1. The data therefore identifies the IS
group but does not invent a decentered state, stabilization range, or
decentered-aberration model.

## Semi-Diameters, Pupil, and Aperture

Fresh native Figure 1 on page 25 is 1162 × 651 px at about 400 dpi; the numerical table images are about 200 dpi. Previous 600 dpi views were upsampled. All 17 elements, concave ends, cemented interfaces and the phase boundary were checked against a new actual SVG. Optical rims were separated from the SP leader, seven group brackets, axis and motion diagrams. The source prints no clear apertures. Inferred-scale outline uncertainty is approximately ±0.3–0.6 mm plus schematic error; exact source dimensions are not claimed.

The native connected DO-pair outline reaches the same height at the E2 front, bonded S4 and E3 rear. S4/S5 are restored from 23.8/23.6 to 27.0 mm optical SD, with no land at the bonded boundary. A27.2 mm full-height trial produces negative E3 edge thickness−0.052 mm and is rejected;27.0 mm retains a positive thin edge and zero renderer trimming. No R/d or phase coefficient is changed to fit the picture.

S21/S22 are raised from 10.5 to 11.0 mm within the native rear-cluster envelope and the unchanged literal-gap guard. The previous inferred caps clipped finite wide-state boundary rays; maximum sampled axial radii are10.512559/10.521551 mm. The adopted conservative heights remove that unintended clipping. They remain inferred clear apertures, not a printed dimension or an opaque block.

The tight negative IS ends S7/S8 remain10.6 mm rather than becoming full-height12 mm blocks. The source finite gap constrains those caps; the existing gapSagFrac0.97 is unchanged. All other optical SDs are retained, no outer extension is uniquely resolved beyond a clear cap, and no inferred cut or cut-source exemption is added.

The stop is inferred from source endpoint f/4.6/f/5.8 and an explicitly interpolated f/5.2 middle. No stop radius is printed. Current prepared-state iris radii are used in every pupil check; the base wide-state physical radius is insufficient for this variable-iris zoom. The absent old STO.sd=10.5 claim is historical, not the current schema. Marketing f/4.5 remains separate.

## Source Normalization and Known Patent Defect

The fixed PDF controls over OCR. It visibly prints r4 = +49.800 mm and
r10 = -759.945 mm; those literal values are used.

Source rows 29 and 30 share radius -31.265 mm with `d29 = 0.00`. The data
collapses them to one direct E15-to-E16 interface at label 29 and retains
source `d30 = 0.95 mm`. The fresh verifier shows a maximum full-matrix change
of only 2.22e-16. No air, cement, or resin layer is invented.

The source calls the final 38.63 row `skinf` but does not define that label. It
is modeled as the final image-side spacing because the reconstructed BFD is
38.56–38.62 mm; this is a numerically supported interpretation, not an explicit
definition.

Paragraph [0052] illustrates a generic sixth-order motion series, while the
Example 1 tables explicitly label coefficients 1 through 12. At cam parameter
1, the rendered coefficient rows evaluate to L1 -65.18406, L3 -10.81255, L4
+7.72279, and L6 -14.31067 mm. All six resulting tele gaps agree with the
independently rounded table column within 0.01 mm. The sampled schedule uses
the 12 printed terms and includes L4's shallow initial reversal.

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

Current first-order results use the d-line reading of the bulk indices; the patent names no spectral line for them:

| Station | Patent focal mm | Computed EFL mm | Computed BFD mm | Track mm |
| ------- | --------------: | --------------: | --------------: | -------: |
| Wide    |           72.16 |        72.09995 |        38.57069 |   143.77 |
| Middle  |          139.54 |       139.54381 |        38.62281 |   183.96 |
| Tele    |          290.26 |       290.06617 |        38.56060 |   208.94 |

Earlier first-order work compared all 13 Table 3 values, including
ESW 5.239, EST 7.241, DXW/MF 0.04989, DXT/MF 0.55446, and the IS sensitivity
angle 0.66792°. The paraxial Petzval sum including the DO term is
+0.000530942 mm^-1.

Targeted Stage 4 validation covers schema/defaulted build, TypeScript and
formatting, all 42 authored zoom-by-focus endpoint geometries, cross-gap and
render diagnostics, full axial marginal rays, off-axis/chromatic smoke traces,
glass-resolution dispositions, the phase-disabled control, surface-domain
validation, image-circle floor, and earlier upsampled 600 dpi figure comparison. The new native-source review is recorded below. A dense scan of
the piecewise-linear schedule keeps infinity BFD between 38.539 and 38.771 mm;
the maximum departure from the printed 38.63 mm is 0.141 mm.

The model leaves these boundaries explicit:

- no production three-layer geometry, order efficiency, scatter, or flare;
- no decentered IS motion or stabilized-state aberration model;
- no source-backed surface apertures or iris radii;
- no direct continuous evaluation of the high-order cams between the 21 sampled knots;
- no proven glass supplier, partial dispersion, or APO designation;
- no claim that the patent example is the shipped 18-element product formula.

## Sources and References

1. [JP 2004-317867 A, “Zoom Lens”](https://patents.google.com/patent/JP2004317867A/en), Numerical Example 1, Tables 1–3, Figures 1–2, and paragraphs [0024], [0036], [0048], [0052]–[0055].
2. [Canon Camera Museum — EF 70-300 mm f/4.5-5.6 DO IS USM](https://global.canon/en/c-museum/product/ef378.html), for product release, construction, minimum focus, and three-layer DO facts.
3. [Canon USA support — EF 70-300 mm f/4.5-5.6 DO IS USM](https://www.usa.canon.com/support/p/ef-70-300 mm-f-4-5-5-6-do-is-usm), for official product specification corroboration.
4. [OHARA optical-glass coordinate tables](https://www.ohara-inc.co.jp/en/product/01000/) and [official catalog downloads](https://www.ohara-inc.co.jp/en/product/catalog/), for the catalog coordinate matches.
5. [Canon US 6,208,474 B1](https://patents.google.com/patent/US6208474B1/en), for Canon optical-path/phase convention context only, not this zoom prescription.

## 2026-10-30 — Complete State and Source-Cam Review

The original front page confirms filed 2003-04-17, published 2004-11-11, Hiroshi Endo / Canon Inc. Example 1 prescription is on pages 14–15; 12-term motion coefficients continue on page 16, focus/compensation cams on page 17. Table 2's actual rotated grid is on page 10, after the page 9 introduction; its endpoint 1.5m shifts round to 0.71/7.93 mm. Table 3's actual condition grid is page 24. Figure 1/page 25 is the wide section; Figure 2 is a first-order movement diagram, not a tele section. No original tele cross-section is invented.

Independent evaluation of the newly read original coefficients gives source tele shifts L1−65.184060, L3−10.812550, L4+7.722790 and L6−14.310666 mm. Across the 21 retained knots, all six gap residuals against the independently rounded source-cam reconstruction stay below 0.008824 mm. The three printed spacing columns remain literal. Recovered L4 turning-point coordinate is0.0748997827. All 21 source focus-cam shifts agree within 1e-9 mm; W/M/T are0.713980/2.399338/7.934380 mm. The unknown precise source object-distance reference and linear slider interpolation remain qualified. Paraxial object-to-image distances for the current close endpoints are approximately1485.547/1504.948/1505.883 mm; these are diagnostic model conjugates, not additional printed targets.

The full union of65 uniform zoom positions and all 21 authored knots has81 zoom coordinates, including the L4 turning point. Across 21 focus positions it gives 1,701 states,250,047 aimed pupil launches,83,349/83,349 clear axial rays and5,103/5,103 clear chiefs. All 17 element paths remain finite, closed and connected, with zero hidden renderer trimming. The actual current-state iris is sampled. Peripheral transmission remains partial:

| Zoom z | Focus            | Axial /0.6-field /corner survivors of49 |
| ------ | ---------------- | --------------------------------------- |
| 0      | Infinity         | 49 / 44 / 31                            |
| 0      | Source-cam close | 49 / 44 / 31                            |
| 0.5    | Infinity         | 49 / 48 / 28                            |
| 0.5    | Source-cam close | 49 / 46 / 26                            |
| 1      | Infinity         | 49 / 37 / 27                            |
| 1      | Source-cam close | 49 / 40 / 22                            |

The independent65-position infinity aperture/chief/first-order census has no aperture difference above 3%; maximum Gaussian defocus against the retained 38.63 mm image gap is+0.121533 mm at z=0.96875. These interpolated positions remain approximations to the printed high-order cams. No source radius, asphere, phase term, stop schedule, focus cam or guard is fitted to remove residuals. Centered IS only, and patent17/14 versus production18/12 correlation remain separate limitations. No cuts are present.

The directly printed endpoint half-fields 16.7°/4.25° have clear chiefs at 21.652893/22.322699 mm, 100.09%/103.19% of the format semi-diagonal; these source-angle heights remain distinct from the runtime format-corner solve.

## 2026-10-30 — Source-Stated Catalog Design Metadata

This metadata-only follow-up preserves the original review date and source inspection. The catalog design focal range is 72.16–290.26 mm, taken directly from Numerical Example1, PDF p15 / printed15: source station row72.16/139.54/290.26mm. The p14 heading rounds the overall range72.2–290.3; the more precise station row is retained. The prior computed model EFL range 72.099975–290.06786 mm remains a calculated result, separately qualified in this analysis; it is not a printed source target.

All R/d, media, spectral values, stops, apertures, gaps, focus/zoom controls, source-errata dispositions and retained limitations are unchanged. This correction adds no fresh shape/glass review and makes no claim to resolve an authored reconstruction or production correlation.
