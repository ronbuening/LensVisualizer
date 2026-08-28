## Patent Reference and Design Identification

**Patent:** JPS5134741A (特開昭51-34741)\
**Application Number:** JP10796874A\
**Filed:** 1974-09-19\
**Published:** 1976-03-24\
**Inventor:** Tadashi Kojima\
**Applicant:** Konishiroku Photo Industry Co., Ltd.\
**Title:** 準広角ズームレンズ (approximately “quasi-wide-angle zoom lens”)\
**Embodiment analyzed:** Example 1

The LensVisualizer prescription corresponds to Example 1 of JPS5134741A and is presented as the selected production
correlation for the **KONICA UC ZOOM HEXANON AR 45–100mm f/3.5**. The primary Japanese publication scan controls the
historical applicant attribution: its front page names 小西六写真工業株式会社, normalized in the data file as
Konishiroku Photo Industry Co., Ltd. The searchable Google Patents record is useful for dates and inventor metadata, but
its modern assignee normalization is not substituted for the applicant printed on the original publication.

The production correlation rests on several convergent properties rather than on a manufacturer statement explicitly
identifying the patent:

1. Konica's UC HEXANON lens leaflet identifies a **UC ZOOM HEXANON AR 45–100mm F3.5** with **10 groups / 11 elements**.
2. Example 1 is likewise an **11-element / 10-group** zoom and publishes **FNo 1:3.5**.
3. The patent's three zoom control points are **46.76, 67.38, and 99.18 mm**, close to but not identical with the marketed
   45–100 mm range; no uniform scaling is applied.
4. The patent gives a maximum image height of **21.63 mm**, corresponding to a 43.26 mm full image diameter and therefore
   the diagonal of the 24 × 36 mm format represented in the data file as `135-full-frame`.
5. The Konica leaflet gives a marketed closest distance of **0.35 m**, but the patent does not publish the internal focus
   spacings needed to reproduce that distance optically.

The production and patent focal-length figures are therefore kept separate. The data file stores the marketed range as
45–100 mm and the independently computed design endpoints as 46.814620785–99.190322558 mm. The intermediate patent
zoom control point remains 67.38 mm. The model is not uniformly rescaled to force the patent endpoints onto the marketing
numbers.

## Optical Architecture

Example 1 is an all-spherical, four-component zoom with a **positive–negative–positive–positive** component sequence.
The patent divides the optical train into C1 through C4. C1 and C4 remain fixed during zooming; C2 is the principal
negative variator; C3 is a positive compensating component whose motion reverses between the middle and long-focal-length
states. This gives the design a classical mechanically compensated zoom structure without requiring any aspherical
surfaces.

The front component C1 contains the cemented L1/L2 pair followed by L3. Independent paraxial computation from the final
data gives C1 an air-to-air focal length of **+81.850471 mm**, reproducing the patent's published `f1 = 81.85 mm` to the
source precision. C2 consists of L4, L5, and L6 and computes to **−30.039201 mm**, matching the published
`f2 = −30.04 mm`. C3 is the single positive element L7 and computes to **+87.140208 mm**, matching the patent's
`f3 = 87.14 mm`. The fixed rear component C4, L8 through L11, computes to **+71.350874 mm**; this value is a model-derived
quantity rather than a separately published patent component focal length.

The zoom kinematics are defined by the patent's three variable air gaps. At 46.76 / 67.38 / 99.18 mm, source `d5` is
1.8 / 15.0 / 24.6 mm, source `d11` is 25.0 / 15.8 / 1.6 mm, and source `d13` is 6.5 / 2.5 / 7.1 mm. Their sum remains
33.3 mm at every state, preserving the fixed C1-to-C4 envelope. Measured from the first surface, the front of C2 moves
from z = 13.9 mm to 27.1 mm and then 36.7 mm, a total imageward translation of **22.8 mm**. The front of C3 moves from
51.7 mm to 55.7 mm and then back to 51.1 mm: **+4.0 mm** imageward from wide to middle, followed by **−4.6 mm** toward
the object from middle to tele. That reversal is retained directly in the piecewise zoom interpolation.

The design is not labeled globally as either telephoto or retrofocus. Using the project's strict definitions, its total
track is longer than its EFL at every modeled zoom state, so it does not satisfy `TL/EFL < 1`. The independently computed
back focal distance exceeds EFL only at the wide state, not across the zoom as a whole.

### Modeled aperture stop and clear apertures

The patent drawing places the diaphragm in the `d13` air space between surfaces r13 and r14, but Example 1 does not
numerically tabulate either the diaphragm's axial split or its physical diameter. The LensVisualizer model therefore
introduces one explicit `STO` as a disclosed modeling inference. It is fixed with C4, **2.0 mm in front of r14**. The
remaining r13-to-stop spacing is consequently 4.5 mm at wide, 0.5 mm at the middle state, and 5.1 mm at tele; adding the
fixed 2.0 mm stop-to-r14 spacing reconstructs the patent's original `d13` value exactly at all three zoom positions.

The modeled stop semi-diameter is **10.2029784318 mm**. With the final TypeScript prescription this produces paraxial
f-numbers of **3.500000000**, **3.498983119**, and **3.497334575** at wide, middle, and tele. The small drift is consistent
with rounding in the printed prescription, so the constant-aperture data field remains `nominalFno: 3.5`.

The patent likewise gives no tabulated surface semi-diameters. The clear apertures in the data file are therefore model
quantities rather than measurements of the production lens. They were constrained by the modeled stop, the patent's
21.63 mm image height, exact spherical marginal rays, finite edge-field transmission, and the relative optical-rim
proportions in Figure 1. The final front cemented pair uses a common 19.5 mm rim, and L8/L9 were enlarged to 13.0 mm to
restore the stepped rear-group silhouette. No physical clear-aperture dimensions are claimed for the manufactured lens.

## Element-by-Element Analysis

### L1 — Negative Meniscus, cemented front member

**nd = 1.80518, νd = 25.4. Glass: S-TIH6 coefficient proxy (patent 805254; production supplier unspecified). f = −133.708363 mm.**

L1 is the negative first member of the cemented front pair. Its standalone focal length is negative even though the
complete C1 component is strongly positive. The relatively high index and low Abbe number provide a high-power flint-like
coordinate class at the front of the zoom, but the patent does not identify a supplier and supplies no line-index or
partial-dispersion data.

L1 must not be interpreted in isolation as the power of the cemented pair. Combined with L2 across their shared r2
interface, the L1/L2 cemented pair has a computed net air-to-air focal length of **+468.611834 mm**: a weak positive
combination. Once L3 and the internal spacing are included, the in-situ C1 component becomes **+81.850471 mm**.

### L2 — Positive Meniscus, cemented rear member of D1

**nd = 1.62299, νd = 58.2. Glass: S-BSM15 coefficient proxy (patent 623582; production supplier unspecified). f = +101.457330 mm.**

L2 is the positive crown-class partner cemented directly to L1. The data file correctly assigns the shared r2 junction to
L2, the downstream element, rather than inserting a synthetic cement layer. Its positive standalone power opposes L1's
negative standalone power while the large difference in Abbe number supplies a conventional chromatic-balancing degree of
freedom. That statement concerns the sign and dispersion pairing only; the available patent data do not support an APO or
anomalous-partial-dispersion classification.

### L3 — Positive Meniscus

**nd = 1.62299, νd = 58.2. Glass: S-BSM15 coefficient proxy (patent 623582; production supplier unspecified). f = +95.728858 mm.**

L3 is the separate positive singlet that completes C1. Its independently computed focal length reproduces the patent's
published `f1p = 95.729 mm`. Together with the weakly positive cemented front pair it supplies the bulk of C1's positive
power. C1 remains fixed during zooming, so L3 provides a stationary front-group contribution while C2 and C3 alter the
system focal length behind it.

### L4 — Negative Meniscus

**nd = 1.62299, νd = 58.2. Glass: S-BSM15 coefficient proxy (patent 623582; production supplier unspecified). f = −29.429675 mm.**

L4 begins the negative C2 variator. Its computed standalone focal length agrees with the patent's
`f2N = −29.431 mm`. The element is strongly negative and sits at the front of the moving variator, so its translation
changes the conjugate relationship between the fixed front component and the remainder of the system. The patent's
conditional expressions explicitly constrain this negative member relative to the total C2 power.

### L5 — Biconcave Negative

**nd = 1.62299, νd = 58.2. Glass: S-BSM15 coefficient proxy (patent 623582; production supplier unspecified). f = −64.268750 mm.**

L5 supplies additional negative power inside C2. Unlike L4, it is biconcave, with both surfaces contributing to the
negative standalone result. Because L4 and L5 share the same patent `nd/νd` coordinate class, their differing optical
roles arise primarily from curvature and spacing rather than from a change of glass dispersion class.

### L6 — Positive Meniscus

**nd = 1.80518, νd = 25.4. Glass: S-TIH6 coefficient proxy (patent 805254; production supplier unspecified). f = +65.561244 mm.**

L6 is the positive rear member of the negative C2 component. Its independent focal-length calculation reproduces the
patent's `f2p = 65.560 mm` to the source precision. It uses the same dense-flint coordinate class as L1, but here the
positive sign partly offsets the two preceding negative elements. The resulting three-element C2 block remains negative
at **−30.039201 mm** and acts as the principal variator.

### L7 — Biconvex Positive

**nd = 1.62299, νd = 58.2. Glass: S-BSM15 coefficient proxy (patent 623582; production supplier unspecified). f = +87.140208 mm.**

L7 is C3 by itself. Its focal length reproduces the patent's `f3 = 87.14 mm`. This element is the compensator: as the
negative C2 variator moves steadily imageward, L7 first moves imageward and then reverses toward the object. The reversal
allows the system to maintain the published rear-focus condition across the three tabulated zoom states without moving
C1 or C4.

### L8 — Biconvex Positive

**nd = 1.51823, νd = 59.0. Glass: E-C3 coefficient proxy (patent 518590; production supplier unspecified). f = +56.144127 mm.**

L8 is the first element of the fixed rear component C4 and is its strongest standalone positive element. In architectural
terms it begins the rear positive relay/basic lens after the moving C3 compensator and inferred diaphragm. Its specific
aberration allocation is not separately stated by the patent; the interpretation here is limited to its position, shape,
and computed power within the fixed positive rear block.

### L9 — Biconcave Negative

**nd = 1.69895, νd = 30.1. Glass: E-FD15 coefficient proxy (patent 699301; production supplier unspecified). f = −27.602855 mm.**

L9 introduces a strong negative contribution inside C4 and uses the lowest-Abbe rear-group glass coordinate. Its
negative power opposes the positive L8, L10, and L11 contributions while adding a large dispersion contrast within the
rear group. The data support that power and dispersion relationship; they do not establish a specific historical glass
maker or anomalous-dispersion behavior.

### L10 — Positive Meniscus

**nd = 1.51633, νd = 64.1. Glass: K-BK7 coefficient proxy (patent 516641; production supplier unspecified). f = +51.620313 mm.**

L10 is a positive, relatively high-Abbe crown-class element in C4. Its sign and dispersion coordinate complement the
preceding negative low-Abbe L9. The combination gives the rear block another conventional chromatic-balancing pair, but
no claim is made about secondary-spectrum correction beyond what `nd` and `νd` alone can establish.

### L11 — Biconvex Positive

**nd = 1.56732, νd = 42.8. Glass: S-TIL26 coefficient proxy (patent 567428; production supplier unspecified). f = +100.576035 mm.**

L11 is the final glass element and a positive biconvex member. Together with L8 through L10 it completes the fixed C4
component, whose computed net power is positive. Its location makes it part of the rear relay and back-focus formation;
any more specific attribution to field flattening, coma correction, or distortion correction would be an inference not
explicitly supported by the selected patent text and is therefore not asserted here.

## Glass Identification and Selection

The patent publishes six distinct `nd/νd` coordinate pairs but no glass maker or commercial glass designation. The data
file preserves the patent coordinates and names already-cataloged curves only as coefficient proxies, with the production
supplier explicitly unspecified.

| Data-file glass class | nd | νd | Elements | Interpretation |
|---|---:|---:|---|---|
| S-TIH6 coefficient proxy (805254) | 1.80518 | 25.4 | L1, L6 | High-index, low-Abbe flint-like class |
| S-BSM15 coefficient proxy (623582) | 1.62299 | 58.2 | L2, L3, L4, L5, L7 | Moderate-high-index crown class used across C1–C3 |
| E-C3 coefficient proxy (518590) | 1.51823 | 59.0 | L8 | Crown-class positive rear element |
| E-FD15 coefficient proxy (699301) | 1.69895 | 30.1 | L9 | High-index, low-Abbe negative rear element |
| K-BK7 coefficient proxy (516641) | 1.51633 | 64.1 | L10 | High-Abbe crown-class rear positive element |
| S-TIL26 coefficient proxy (567428) | 1.56732 | 42.8 | L11 | Intermediate-dispersion positive rear element |

The selected proxy curves stay inside the catalog compatibility guard, and each reproduces the corresponding patent
coordinate closely. Multiple modern vendors remain plausible for several rows, so these assignments improve chromatic
tracing without identifying the historical Konishiroku glass supplier. In particular, L10 uses the closer 516641 K-BK7
curve rather than silently renaming the coordinate to current SCHOTT N-BK7.

The selected patent does not publish `nC`, `nF`, `ng`, `PgF`, or `dPgF`. Those fields are therefore absent from the final
data file; the catalog curves supply spectral behavior only after coordinate validation. The analysis does not claim
apochromatic or anomalous-partial-dispersion behavior.

## Focus Mechanism

The focus model is **`NO_INTERNAL_RECONSTRUCTION`**. Example 1 provides zoom spacings only. It does not publish an object-
distance table, focus-dependent variable gaps, image magnification states, or another constraint that would determine a
unique close-focus movement law.

Konica's UC lens leaflet gives a marketed closest distance of **0.35 m** for the production 45–100 mm lens. That figure is
stored as `closeFocusM: 0.35`, but it is product metadata rather than a reconstructed patent focus state. Every zoom
variable in the data file therefore has identical infinity and close-focus entries. No unit-focus, inner-focus, rear-focus,
or floating close-focus travel is invented from the production MFD.

The absence of an internal focus reconstruction is important when interpreting the viewer: the optical geometry is an
infinity/nominal zoom model at the three patent focal-length control points, not a simulation of the manufacturer's
0.35 m focusing configuration.

## Conditional Expressions

The patent defines a set of component, element-power, radius, and spacing conditions for the proposed zoom architecture.
Using the published Example 1 component values and the independently verified prescription, all twelve applicable
conditions are satisfied.

| # | Patent condition | Example 1 |
|---:|---|---|
| 1 | `0.4 fB < |f2| < 1.0 fB` | PASS |
| 2 | `2.0|f2| < f1 < 4.0|f2|` | PASS |
| 3 | `2.0|f2| < f3 < 4.0|f2|` OR `0.7|f2| < f3 < 1.2|f2|` | PASS |
| 4 | `0.8|f2| < |f2N| < 1.2|f2|` | PASS |
| 5 | `1.5|f2| < f2p < 2.5|f2|` | PASS |
| 6 | `3.0|f2| < |r6| < ∞` | PASS |
| 7 | `0.5|f2| < r10 < 1.5|f2|` | PASS |
| 8 | `0.03|f2| < d9 < 0.15|f2|` | PASS |
| 9 | `1.0 f1 < f1p < 1.4 f1` | PASS |
| 10 | `0.5 f1 < r1 < 1.9 f1` | PASS |
| 11 | `0.4 f1 < r4 < 0.7 f1` | PASS |
| 12 | `5 f2 < r8 < 1.5 f2` with `f2 < 0` | PASS |

These inequalities are source design constraints; the PASS results are independent computations. They should not be
read as production tolerances or as evidence that the manufacturer publicly identified Example 1 as the released lens.

## Verification Summary

Sequential height/reduced-angle tracing and an independent slope-form ABCD calculation were applied to the final authored
surface arrays at every zoom state. The two formulations agree to a worst absolute matrix-element difference of
**4.441 × 10⁻16**, and the determinants remain unity to floating-point precision.

| Zoom state | Patent control point (mm) | Computed EFL (mm) | Computed BFD (mm) | Modeled f/# |
|---|---:|---:|---:|---:|
| Wide | 46.76 | 46.814620785 | 63.284367390 | 3.500000000 |
| Middle | 67.38 | 67.432230924 | 63.258150401 | 3.498983119 |
| Tele | 99.18 | 99.190322558 | 63.215648063 | 3.497334575 |

The patent gives one back-focus value, **63.24 mm**. The computed BFD residuals are +0.044367 mm, +0.018150 mm, and
−0.024352 mm at wide, middle, and tele respectively, consistent with the source precision of the printed prescription.
The first-to-last refracting-surface span remains **83.70 mm** at every zoom position.

With the first and last refracting vertices as reference planes and positive z directed toward image space, the computed
first-principal-plane positions are **+61.819879, +83.529449, and +82.045097 mm** from the first vertex at wide, middle,
and tele. The second-principal-plane positions are respectively **+16.469747, −4.174081, and −35.974674 mm** from the
last refracting vertex. The corresponding Gaussian first-surface-to-image tracks are **146.984367, 146.958150, and
146.915648 mm**; each remains longer than EFL, so none satisfies the project's telephoto criterion.

Under the inferred stop model, the entrance-pupil semi-diameters are **6.687803, 9.635975, and 14.180846 mm**, at
**+39.292739, +66.503042, and +91.970899 mm** from the first refracting vertex. The fixed rear component makes the modeled
exit pupil invariant across zoom at **−26.951778 mm** from the last refracting vertex, with semi-diameter **12.890878 mm**.
These pupil quantities follow from the disclosed inferred stop and are model results rather than measured production
pupil dimensions.

A surface-by-surface d-line Petzval evaluation using $\phi/(n n')$ gives a total of
**+2.563553 × 10⁻3 mm⁻1** (reciprocal magnitude **390.083606 mm**). The component contributions are C1
**+8.022018 × 10⁻3**, C2 **−2.230925 × 10⁻2**, C3 **+7.102278 × 10⁻3**, and C4
**+9.748509 × 10⁻3 mm⁻1**. These values are sums of surface Petzval terms, not substitutes for the standalone-element,
cemented-combination, or in-situ component powers quoted elsewhere.

The inferred semi-diameter model passes the surface validator and image-circle floor after the Figure 1 refinements. Exact
spherical off-axis tests at the patent's 21.63 mm image-height reference transmit the defined finite pupil band at all
three zoom positions. These are validation results for modeled clear apertures, not measurements of the production barrel
or physical lens rims.

No aspheric-surface section is present because the selected embodiment is entirely spherical. No sensor cover glass,
filter, dummy plane, flare-cutter plane, or other inactive optical bookkeeping surface is present in the selected
prescription, and no omitted plate requires an air-equivalent rear-spacing correction.

The only structural addition to the patent's refracting prescription is the explicit inferred `STO` inside source `d13`.
No patent radius, center thickness, refractive index, Abbe number, zoom control point, or source variable-gap total is
rescaled or otherwise altered.

## Sources / References

- **JPS5134741A**, 準広角ズームレンズ, Tadashi Kojima, applicant 小西六写真工業株式会社, published 1976-03-24.
  Original 12-page Japanese publication scan supplied with the lens-patent job. Example 1 prescription and component data
  are on the numerical-example pages; Fig. 1 on the patent drawing page shows the four-component layout and diaphragm
  between C3 and C4. Searchable metadata cross-check: <https://patents.google.com/patent/JPS5134741A/ja>.
- **Konica, UC HEXANON lenses leaflet**, section “UC ZOOM HEXANON AR 45-100mm.” The manufacturer literature gives the
  marketed 45–100 mm identity, f/3.5, 10 groups / 11 elements, 52°–24° taking angle, 0.35 m closest distance, 55 mm
  filter, pull-out hood, and 570 g weight. Archival scan: <https://cameramanuals.org/lenses/konica_uc_hexanon_lenses.pdf>.
- **OHARA optical-glass catalog:** <https://www.ohara-inc.co.jp/en/product/01000/>.
- **HOYA optical-glass catalog and technical data:** <https://www.hoya-opticalworld.com/english/products/press_01.html>.
- **SCHOTT optical-glass catalog / technical information:**
  <https://www.schott.com/en-us/products/optical-glass-p1000267>.
- **HIKARI optical-glass catalog:** <https://www.hikari-g.co.jp/optical_glass/general_optical_glass/j-sf/>.
- **CDGM optical-glass database:** <https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database>.
- **SUMITA Optical Glass Data Book:** <https://www.sumita-opt.co.jp/download_files/en/data/glassdatabook_ver14.02.00.pdf>.
