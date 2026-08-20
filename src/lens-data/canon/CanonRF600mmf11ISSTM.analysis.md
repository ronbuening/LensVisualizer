## Patent Reference and Design Identification

**Patent:** JP 2020-173349 A
**Application Number:** 特願2019-75405
**Filed:** 2019-04-11
**Published:** 2020-10-22
**Inventors:** Maki Yokoya (横谷 真樹); Tomohiro Ino (井野 友裕)
**Applicant:** Canon Inc.
**Title:** Imaging optical system and imaging apparatus (結像光学系および撮像装置)
**Embodiment analyzed:** Numerical Example 1 / 実施例1

The prescription modeled here is Numerical Example 1 of JP 2020-173349 A. The patent describes a long-focus imaging
system built from three lens units: positive L1, positive L2, and negative L3. L2 is a single-element focusing unit,
and a diffractive optical surface is placed in the front lens unit. Example 1 is published as a 581.65 mm, f/11.31
design with a 21.64 mm image height and a 286.87 mm front-surface-to-image track. The data file retains the native
patent scale rather than rescaling the prescription to the marketed 600 mm focal length. The source-precision authored
infinity state recomputes to 581.639114 mm, while the marketed production value remains separately recorded as 600 mm.

The production correlation is the fixed correlation selected for this model; it is not a Canon statement that this
specific patent example is the production prescription. The identification rests on several converging facts:

1. Example 1 has 10 elements in 7 air-separated groups, matching Canon's published 10-element/7-group production
   specification.
2. The patent places the diffractive surface in the frontmost lens assembly. Canon describes the production lens as
   using a front, gapless double-layer DO lens, which is architecturally consistent with the cemented front pair in the
   selected example.
3. The patent's 581.65 mm and f/11.31 design values are close to the production lens's marketed 600 mm and fixed f/11
   identity without requiring a uniform prescription scale.
4. The published near-focus spacing row, traced with the fixed image plane, gives a 4.494738 m object-to-image distance
   and |m| = 0.141990. Canon publishes 4.5 m minimum focus and 0.14x maximum magnification.
5. The application was filed in April 2019 and the production lens was introduced in July 2020, consistent with the
   patent chronology.

The patent's numerical prescription remains the authority for the optical model. Canon sources are used only for the
production identity, RF mount, 135-format use, marketed focal length/aperture, minimum-focus specification, DO
terminology, STM drive, and optical stabilization.

## Optical Architecture

The design is a three-unit telephoto-type system with the power sequence positive-positive-negative. The 10 physical
elements form seven air-separated groups, while the patent's three lens units describe the focusing architecture rather
than the physical group count. These two classifications are therefore kept separate.

L1 spans the front cemented DO pair E1-E2 and the air-spaced negative meniscus E3. Its independently recomputed unit EFL
is +384.245675 mm, versus the patent's printed +384.29 mm. L2 is the single plano-convex positive element E4, with an
isolated EFL of +201.044124 mm; it translates along the axis for focus. L3 begins at the aperture stop and contains two
cemented pairs followed by two air-spaced rear elements. The complete L3 unit is negative, with a recomputed EFL of
-86.514216 mm, versus -86.51 mm in the patent.

The front-surface-to-image track is 286.87 mm. Using the authored infinity EFL of 581.639114 mm gives TL/EFL = 0.49321,
so the prescription is telephoto under the project definition. The corresponding BFD/EFL is 0.237356, so the design is
not retrofocus. This agrees with the patent's own description of the positive-front/negative-rear arrangement as a
telephoto-type power distribution (¶0028).

The aperture stop is the patent-published surface 8, represented by the single required `STO` plane. The stop's axial
location is therefore source data, not an inferred placement. Its semi-diameter, like the clear semi-diameters of the
refracting surfaces, is a modeling inference because Example 1 publishes no clear-aperture table.

No sensor cover glass, filter plate, dummy surface, flare cutter, blocker, or mechanical component is included. Patent
¶0016 states only that image-side filters or faceplates may be added generically; none appears in the selected numerical
prescription. S18 therefore retains the patent's 138.06 mm air spacing to the image plane without an additional omitted-
plate correction.

No uniform scaling is applied. There are also no geometric aspheres, so no aspheric coefficient scaling transformation
is applicable.

## Element-by-Element Analysis

### DOE — E1 + E2, front cemented diffractive pair

**E1:** nd = 1.48749, νd = 70.2. Glass: 487702 patent coordinate; S-FSL5 catalog spectral proxy. Standalone f = +89.475 mm.
**E2:** nd = 1.59551, νd = 39.2. Glass: 596392 patent coordinate; E-F8 catalog spectral proxy. Standalone f = -246.071 mm.

E1 is the front biconvex positive element. Its rear surface, S2, is the cemented interface into E2 and also carries the
patent's diffractive phase interaction. E2 is a biconcave negative element behind that interface. The isolated EFLs above
refer to each refractive element considered separately in air and do not describe the power of the cemented pair.

Including the refractive interface and the first-order diffractive power at S2, the complete DOE group has a net EFL of
+133.273634 mm. In situ it is only the front portion of L1; the complete L1 unit includes the long air space and E3 and
has the much weaker net EFL of +384.245675 mm. This distinction is important because neither the standalone element
powers nor the cemented-pair power can be substituted for the power of the assembled L1 unit.

The patent explicitly places the DOE in the first lens unit and, for Examples 1, 3, and 5, in association with the
frontmost lens (¶0037). The data file therefore treats S2 as a refracting cemented interface plus a diffractive phase
interaction, not as a geometrically deformed aspheric surface.

### E3 — negative meniscus completing L1

nd = 1.83481, νd = 42.7. Glass: 835427 patent coordinate; S-LAH55 catalog spectral proxy. Standalone f = -97.029 mm.

E3 is an air-spaced negative meniscus at the rear of the fixed L1 unit. Its standalone power is negative, but it operates
behind the strongly positive front DOE group and a 59.15 mm air space. The complete L1 unit remains positive. The data
file therefore assigns E3's functional role from its location and measured paraxial contribution without treating its
isolated focal length as the power of L1.

### E4 — single-element positive focus unit L2

nd = 1.48749, νd = 70.2. Glass: 487702 patent coordinate; S-FSL5 catalog spectral proxy. Standalone f = +201.044 mm.

E4 is a plano-convex positive element and is the entire L2 focus unit. Its isolated EFL reproduces the patent's published
L2 value of 201.04 mm to about 0.004 mm. Patent ¶0036 states that the second lens unit moves toward the object when
focusing from infinity to a near object; the authored focus model follows that direction exactly.

Because L2 consists of one element, its standalone element power and functional-unit power are the same. Its in-situ
behavior still depends on the two adjacent air gaps, which are the quantities varied by the focus model.

### D2 — E5 + E6, first rear cemented pair

**E5:** nd = 1.90043, νd = 37.4. Glass: 900374 patent coordinate; TAFD37A catalog spectral proxy. Standalone f = -23.603 mm.
**E6:** nd = 1.65412, νd = 39.7. Glass: 654397 patent coordinate; N-KZFS5 catalog spectral proxy. Standalone f = +27.149 mm.

E5 is biconcave and E6 is biconvex. They share S10 as a cemented interface, with the downstream E6 index and element ID
used at the junction. The pair's net EFL is -341.995856 mm, far weaker in magnitude than either isolated element because
of cancellation across the strong opposing powers and the cemented interface.

D2 is only one subassembly of L3. Its weak net negative power should not be confused with the full L3 unit power of
-86.514216 mm, which results after D3, E9, E10, and their intervening spacings are included.

### D3 — E7 + E8, second rear cemented pair

**E7:** nd = 1.65412, νd = 39.7. Glass: 654397 patent coordinate; N-KZFS5 catalog spectral proxy. Standalone f = +28.540 mm.
**E8:** nd = 1.59282, νd = 68.6. Glass: 593686 patent coordinate; FCD515 catalog spectral proxy. Standalone f = -34.943 mm.

E7 is biconvex positive and E8 is biconcave negative, sharing S13 as the cemented interface into E8. Considered as a
cemented group, D3 has a net EFL of +146.121347 mm. Its positive group power therefore differs in sign from the complete
negative L3 unit in which it operates.

The high νd of E8 is a source coordinate, but no vendor-specific glass identity or anomalous partial-dispersion property
is assigned. The analysis therefore does not infer ED, APO, or anomalous-dispersion behavior from νd alone.

### E9 — air-spaced negative rear corrector

nd = 1.80400, νd = 46.5. Glass: 804465 patent coordinate; TAF3D catalog spectral proxy. Standalone f = -39.371 mm.

E9 is a biconcave negative element after D3. It contributes substantial negative standalone power within L3. Its
specific aberration-correction role is not individually stated by the patent, so the model limits the interpretation to
its measured power, position, and contribution to the assembled negative rear unit.

### E10 — final positive rear element

nd = 1.59551, νd = 39.2. Glass: 596392 patent coordinate; E-F8 catalog spectral proxy. Standalone f = +98.012 mm.

E10 is the final biconvex positive element. It is followed by the long 138.06 mm air space to the image plane. In the
assembled rear unit its positive power partly offsets the preceding negative members; the complete L3 unit nevertheless
remains negative at -86.514216 mm.

## Glass Identification and Selection

The selected patent publishes only d-line refractive indices and Abbe numbers. It does not identify glass manufacturers
or production catalog products, and it does not publish per-element nC, nF, ng, or dPgF values. The catalog audit does,
however, find a compatible full-coefficient spectral proxy for every physical element. The data file keeps the patent
coordinate first and labels each proxy explicitly so that a catalog match is not mistaken for a production-glass claim.

| Patent coordinate | nd | νd | Elements | Catalog spectral proxy |
|---|---:|---:|---|---|
| 487702 | 1.48749 | 70.2 | E1, E4 | S-FSL5 |
| 596392 | 1.59551 | 39.2 | E2, E10 | E-F8 |
| 835427 | 1.83481 | 42.7 | E3 | S-LAH55 |
| 900374 | 1.90043 | 37.4 | E5 | TAFD37A |
| 654397 | 1.65412 | 39.7 | E6, E7 | N-KZFS5 |
| 593686 | 1.59282 | 68.6 | E8 | FCD515 |
| 804465 | 1.80400 | 46.5 | E9 | TAF3D |

Those proxies provide Sellmeier curves for visualization while the production suppliers remain unspecified. Because the
patent does not identify the actual melts or publish partial-dispersion data, no apochromatic or anomalous-partial-
dispersion claim is made.

## Focus Mechanism

**Focus status:** `CONSTRAINED_RECONSTRUCTION`.

The patent uses inner focus by the single positive L2 element E4. L1 and L3 remain fixed while E4 translates objectward
for closer focus (¶0019, ¶0036). The two adjacent air gaps change by equal and opposite amounts, which preserves their
sum and therefore represents one rigid translating element rather than two independent motions.

A source inconsistency requires a disclosed constrained reconstruction at infinity. The patent prints d5 = 16.25 mm and
d7 = 22.19 mm for the infinity state, but direct paraxial reconstruction of that row misses the patent's own focal
length, back focal distance, principal points, and entrance-pupil position by amounts far beyond source rounding. Holding
the published single-L2 mechanism constraint d5 + d7 = 38.44 mm and solving the one remaining degree of freedom gives an
unrounded infinity solution of d5 = 18.440755893 mm and d7 = 19.999244107 mm. The data file uses the disclosed
source-precision values 18.44 mm and 20.00 mm.

| Focus state | d5 (mm) | d7 (mm) | Status |
|---|---:|---:|---|
| Patent printed infinity row | 16.25 | 22.19 | preserved as source record; not authored as the working infinity state |
| Authored infinity base | 18.44 | 20.00 | constrained reconstruction |
| Published near row | 3.50 | 34.94 | direct patent transcription |

From the authored infinity state to the published near row, L2 moves 14.94 mm toward the object. The near row traces to
an object-to-image-plane distance of 4.494738 m with paraxial magnification -0.141990. These computed results closely
match Canon's rounded 4.5 m MFD and 0.14x maximum magnification, but they remain calculations from the patent model rather
than manufacturer confirmation of the patent prescription.

The production lens uses lead-screw STM focusing according to Canon. The patent does not name STM, so the motor type is
product metadata rather than part of the optical reconstruction.

## Diffractive Phase Surface

Example 1 has no geometric aspherical sag surfaces. The table heading translated as “aspherical data” on the patent's
Numerical Example 1 page contains the coefficients of the diffractive phase function on S2, not coefficients of a conic
or polynomial sag surface. The data file therefore keeps `asph` empty and stores the terms under the S2 diffractive
interaction.

The patent defines the rotationally symmetric phase form as

$$
\psi(h,m)=\frac{2\pi m}{\lambda_0}\left(C_2h^2+C_4h^4+C_6h^6+C_8h^8+C_{10}h^{10}+\cdots\right),
$$

with first-order power at diffraction order $m=+1$ given by $\phi_{DOE}=-2C_2$. The patent states that the d-line may be
used as the reference wavelength. The data model therefore adopts 587.6 nm as a disclosed modeling choice rather than
claiming that the numerical table explicitly fixed a different wavelength.

| Radial power | Coefficient |
|---:|---:|
| 2 | -4.69717e-5 mm^-1 |
| 4 | +1.13471e-8 mm^-3 |
| 6 | -2.69625e-12 mm^-5 |
| 8 | -4.35136e-15 mm^-7 |
| 10 | +2.95662e-18 mm^-9 |

The quadratic term gives a verified first-order diffractive power of +9.39434e-5 mm^-1 and a corresponding DOE focal
length of 10644.707345 mm at the modeled reference condition. This phase interaction changes ray momentum and paraxial
power but does not alter the geometric outline, rim slope, edge thickness, or clear-aperture sag of S2.

## Chromatic Correction Strategy

The patent's chromatic strategy explicitly depends on the diffractive surface. It states that a positively powered DOE
can compensate longitudinal and lateral chromatic aberration generated by the first lens unit and can share positive
power with that unit (¶0022-¶0024). The selected example places that diffractive interaction at the front cemented pair,
where paraxial ray height is large.

This patent statement is distinct from a production-glass claim. The authored patent data have only nd and νd, while
compatible catalog proxies supply full Sellmeier curves for visualization. The analysis does not infer APO correction,
secondary-spectrum behavior, or anomalous partial dispersion for any individual production glass. The patent-specified
diffractive phase surface remains the only source-explicit higher-order chromatic mechanism.

## Conditional Expressions

The patent defines six principal design conditions for the disclosed architecture. Independent computation reproduces
the rounded Example 1 values in Table 1:

| Condition | Computed value | Patent bound | Result |
|---|---:|---:|---|
| $d_{DOE}/f$ | 0.020974813 | 0.00 < value <= 0.13 | pass |
| $f_{DOE}/f$ | 18.300880848 | 3.3 <= value <= 33.2 | pass |
| $f_1/f$ | 0.660689418 | 0.14 <= value <= 1.56 | pass |
| $f_3/f$ | -0.148732055 | -0.55 <= value <= -0.06 | pass |
| $f_2/f$ | 0.345637411 | 0.14 <= value <= 0.70 | pass |
| $L/f$ | 0.493200378 | 0.35 <= value <= 0.70 | pass |

These computations use the patent-defined quantities and its printed focal length where the condition definitions call
for $f$, which is why the displayed $L/f$ value differs slightly from a ratio formed with the authored 581.639114 mm EFL.

Two source-text errors are retained as corrections rather than silently repeated. Paragraph ¶0020 prints “DOE/f” for
condition (1), while claim 1, the definition of the distance term, the subsequent prose, and Table 1 establish that the
intended numerator is $d_{DOE}$. Paragraph ¶0033 refers to “condition (7)” while the displayed inequality is labeled
(6b) and concerns the same $L/f$ condition (6).

## Image Stabilization

Canon identifies the production RF600mm F11 IS STM as an optically stabilized lens. Numerical Example 1 of the selected
patent, however, publishes no decentered stabilization group, transverse shift law, or alternate IS state. The data file
therefore contains no invented IS motion. Stabilization remains production/mechanical metadata only and does not enter
the sequential optical model analyzed here.

## Modeling Inferences: Stop and Semi-Diameters

The axial stop position is patent-published, but its physical clear radius is not. The data file uses an inferred stop
semi-diameter of 8.31053 mm, obtained from the modeled f/11.31 condition and the traced entrance-pupil magnification.
This is a consistency-derived modeling value, not a patent aperture measurement.

All refracting-surface semi-diameters are likewise inferred because Numerical Example 1 contains no clear-aperture
column. They were set from marginal/chief-ray envelopes at infinity and the published near state, the rendered Fig. 1
silhouette, the production 82 mm filter diameter as an outer mechanical bound, and the current geometry constraints.
The filter diameter is not treated as a front-element clear aperture.

A 600 dpi review of Fig. 1 found the E3 and E4 optical rims distinctly smaller than the initial ray-envelope estimates.
Their paired surface semi-diameters are therefore tightened from 16.5 to 12.2 mm and from 15.8 to 12.7 mm,
respectively. The front DO pair, rear L3 group, and pupil-calibrated stop remain unchanged because their reliable
figure measurements agree with the modeled silhouette within the drawing's uncertainty.

The final Stage 2 geometry check found a maximum actual rim angle of 31.033 degrees, a minimum element edge thickness of
0.8080 mm, and a worst shared-gap case at S14-S15 using 96.93% of the current 0.90-gap sag allowance. Default on-axis and
0.60-field ray bundles remain contained in both defined focus states. These checks validate the authored geometry as a
rendering/tracing model; they do not convert the inferred semi-diameters into source facts.

## Verification Summary

The final data arrays were independently re-evaluated with both sequential reduced-angle tracing and a 2x2 ABCD matrix.
The two methods agree to the recorded floating-point precision for the tested infinity state. The principal results from
the authored source-precision infinity base are:

| Quantity | Patent | Authored model |
|---|---:|---:|
| EFL | 581.65 mm | 581.639114 mm |
| BFD | 138.06 mm | 138.055489 mm |
| Front principal point | -1102.24 mm | -1102.204200 mm |
| Rear principal point | -443.59 mm | -443.583625 mm |
| Entrance pupil position | 399.66 mm | 399.697988 mm |
| Exit pupil position | -24.31 mm | -24.314251 mm |
| Front surface to image | 286.87 mm | 286.87 mm |

The small residuals are consistent with authoring the reconstructed infinity gaps to the patent's two-decimal spacing
precision rather than storing the unrounded EFL root. The near endpoint independently gives 4.494738 m and
|m| = 0.141990 as described in the focus section.

Surface-by-surface Petzval summation, using $\phi/(n n')$ and treating the S2 refractive and diffractive powers
separately, gives -0.000791398428 mm^-1. The six patent conditions all pass. No scale transform, conic conversion,
geometric-asphere departure, cover-glass correction, or folded-path treatment is present in this model.

## Sources / References

- JP 2020-173349 A, Numerical Example 1. Prescription and variable-spacing table: p. 9; lens-unit data: pp. 9-10;
  DOE equation and power convention: ¶0021-¶0024; architecture and focusing: ¶0019, ¶0028, ¶0035-¶0038; rendered
  Example 1 optical section: Fig. 1 on p. 15.
- Canon Camera Museum, “RF600mm F11 IS STM”: https://global.canon/en/c-museum/product/rf492.html
- Canon U.S.A., RF600mm F11 IS STM product/specification page: https://www.usa.canon.com/shop/p/rf600mm-f11-is-stm
- Canon official RF600mm F11 IS STM specifications PDF:
  https://downloads.canon.com/nw/camera/products/lenses/rf600/RF600mm_ISSTM_specifications.pdf
- Canon U.S.A., July 9, 2020 launch release: https://www.usa.canon.com/newsroom/2020/20200709-camera
