# ZEISS SONNAR T* 35mm f/2 (Sony DSC-RX1 family)

## Patent Reference and Design Identification

**Patent:** US 2014/0071333 A1<br>
**Application Number:** 13/962,048<br>
**Priority:** September 11, 2012<br>
**Filed:** August 8, 2013<br>
**Published:** March 13, 2014<br>
**Inventors:** Fumikazu Kanetaka; Hisashi Uno<br>
**Applicant / Assignee:** Sony Corporation<br>
**Title:** *Imaging Lens and Image Pickup Apparatus*<br>
**Embodiment analyzed:** Numerical Example 4

The prescription is transcribed from Numerical Example 4 of US 2014/0071333 A1. The patent assigns that example to
its fourth configuration, FIG. 13, and describes four functional lens groups with negative, positive, positive, and
negative power in object-to-image order. Tables 13–16 provide the complete prescription, five aspherical surfaces, and
three published focus states. [Patent, ¶¶0093–0097; PDF pp. 23–24, printed pp. 9–10.]

The production identification is a strong correlation rather than a manufacturer-confirmed patent attribution. Sony's
RX1-family specifications identify a fixed full-frame ZEISS Sonnar T* 35 mm F2 lens. For the RX1R II, Sony specifies
8 elements in 7 groups, 3 aspherical elements, 0.15× standard maximum magnification, and approximately 0.30 m normal-mode
focus from the focal plane. Those published product facts converge with Example 4's 8-element / 7-group architecture,
three elements carrying aspherical surfaces, 33.99 mm and F/2.05 infinity design values, and 0.15× shortest-state
magnification. The independently traced shortest patent state images an object at 299.782 mm object-to-image, closely
matching Sony's 0.30 m standard-mode specification. [Sony RX1R II specifications; Patent, Tables 13–16.]

The timing is also consistent but is not proof: the patent claims Japanese priority on September 11, 2012, one day before
Sony's September 12, 2012 RX1 announcement date. The correlation retains two explicit limits. First, Example 4 publishes
a 32.48° infinity half-angle, or 64.96° full field, whereas Sony markets 63°. Second, no reviewed Sony source explicitly
identifies US 2014/0071333 A1 Example 4 as the production prescription. Current Sony material confirms the RX1R III's
fixed ZEISS Sonnar T* 35 mm F2 identity but does not republish the exact 8/7/3 optical formula, so unchanged prescription
continuity to that model remains inferential.

No uniform scaling is applied. The data file keeps the marketed 35 mm f/2 designation separate from the modeled infinity
EFL of 34.02619 mm and the patent's F/2.05 design aperture.

## Optical Architecture

Numerical Example 4 is an eight-element, seven-air-separated-group fixed-focal-length design organized into four
functional groups: GR1 negative, GR2 positive, GR3 positive, and GR4 negative. The verified infinity functional-group
focal lengths are approximately −292.065 mm, +33.893 mm, +46.467 mm, and −41.842 mm respectively. These are in-situ
functional-group powers from the prescription, not sums of isolated element focal lengths.

GR1 is a fixed front negative meniscus. GR2 contains a negative biconcave element followed by a strong positive biconvex
asphere and moves during focusing; the aperture stop lies immediately behind GR2 and moves with it. GR3 is the second
moving group and contains a cemented negative-positive pair followed by a positive element. GR4 is fixed and negative,
consisting of a two-sided aspherical negative element followed by a weak positive plano-convex element. The patent
explicitly describes GR2 and GR3 as the moving groups and GR4 as the rearmost fixed negative group. [Patent, ¶0094.]

The patent describes its overall concept as "telephoto-type" because the rearmost group has negative refractive power and
uses that arrangement as part of its compactness argument. Under this project's stricter terminology, however, the
verified infinity total-track-to-EFL ratio is 1.76364, so the model is not labeled telephoto. Its BFD/EFL ratio is 0.14750,
so it is not labeled retrofocus either. The patent's wording is retained as source terminology rather than converted into
a project classification. [Patent, ¶¶0036, 0041–0042; verified parsed model.]

From the first lens vertex to the source image plane, the modeled infinity track is 60.010 mm versus the patent's rounded
60.00 mm. The infinity BFD is 5.01896 mm measured from surface 16, the last lens vertex, with the rear plate stack included.
The surface-by-surface Petzval sum, computed as `phi/(n*nPrime)`, is +0.001397959 mm⁻¹, corresponding to a reciprocal radius
of approximately +715.33 mm under the recorded sign convention.

The source-listed filter/cover stack behind G8 is not counted as lens elements. In the data model, source surfaces 17–21
are represented as three `rearPlates`, preserving the published physical thicknesses, indices, Abbe numbers, and air gaps.
No air-equivalent substitution is used in the final model.

## Element-by-Element Analysis

### G1 — Negative Meniscus, convex toward the object

`nd = 1.5168`, `νd = 64.20`. Glass: **517-642 / BSC7 class (supplier unconfirmed)**. Isolated `f = −292.065 mm`.

G1 is the sole element of fixed GR1. Its weak negative isolated power makes GR1 the least powerful of the four functional
groups. The patent identifies the element as a negative meniscus with its convex surface toward the object. Its glass label
is a coordinate-class identification from the stored d-line `nd/νd`; it is not a claim that Sony or Zeiss used a particular
HOYA melt. [Patent, ¶0094, Table 13.]

### G2 — Biconcave Negative

`nd = 1.8052`, `νd = 25.46`. Glass: **805-255 / FD60 class (supplier unconfirmed)**. Isolated `f = −69.705 mm`.

G2 is the negative member of moving GR2. Its isolated negative power is paired with the much stronger positive G3, so the
complete GR2 matrix remains positive at about +33.893 mm focal length. That group-level result is distinct from the
standalone focal length of either element. [Patent, ¶0094, Table 13; verified group matrix.]

### G3 — Biconvex Positive, two aspherical surfaces

`nd = 1.8820`, `νd = 37.22`. Glass: **882-372 / M-TAFD307 class (supplier unconfirmed)**. Isolated `f = +23.093 mm`.

G3 supplies the dominant positive power within GR2. Both surfaces 5A and 6A are aspherical. The placement of those aspheres
inside a moving focus group is consistent with the patent's general rationale that an aspherical surface in a traveling
group can reduce aberration variation with shooting distance; the example itself establishes the geometry, while the
specific division of aberration correction among surfaces is not inferred solely from power sign. [Patent, ¶0039, ¶0095.]

### G4–G5 — Cemented negative-positive pair in GR3

**G4:** `nd = 1.9229`, `νd = 20.88`. Glass: **923-209 / E-FDS1 class (supplier unconfirmed)**. Isolated
`f = −12.807 mm`.
**G5:** `nd = 1.8820`, `νd = 37.22`. Glass: **882-372 / M-TAFD307 class (supplier unconfirmed)**. Isolated
`f = +23.063 mm`.

The two elements share the cemented interface at source surface 9. G4 is biconcave and G5 is biconvex; the rear face of G5,
10A, is aspherical. Although G5 is positive, the verified cemented G4+G5 pair has a net paraxial focal length of
approximately −32.877 mm. This is a useful distinction from GR3 as a whole: after the following positive G6 is included,
the complete functional group is positive at approximately +46.467 mm. [Patent, ¶0094, Tables 13–14; verified matrices.]

### G6 — Biconvex Positive

`nd = 2.0010`, `νd = 29.13`. Glass: **001-291 / TAFD55-W / S-LAH99 class (supplier unconfirmed)**. Isolated
`f = +23.559 mm`.

G6 is the rear positive element of moving GR3. It follows the net-negative G4–G5 cemented pair and brings the complete GR3
matrix to positive power. HOYA TAFD55-W matches the patent's displayed `nd = 2.0010`, `νd = 29.13` coordinates and 001-291
class; OHARA S-LAH99 shares code 001291 and `nd = 2.00100` but lists `νd = 29.14`. The patent does not name a supplier,
so the data retains class-level rather than melt-level identification. [Patent, ¶0094, Table 13.]

### G7 — Biconcave Negative, two aspherical surfaces

`nd = 1.5831`, `νd = 59.46`. Glass: **583-595 / M-BACD12 class (supplier unconfirmed)**. Isolated
`f = −29.417 mm`.

G7 is the negative member of fixed rear group GR4 and carries aspherical surfaces 13A and 14A. Its isolated focal length
reproduces the patent's `fra` quantity within the expected rounding residual. The patent specifically links an aspherical
surface in the rearmost group to correction of off-axis aberration, especially distortion and field curvature, and uses
the rearmost negative group in its compactness conditions. Those are patent-stated design objectives, not deductions from
G7's glass class alone. [Patent, ¶¶0037, 0044–0047; Tables 13–17.]

### G8 — Plano-Convex Positive

`nd = 1.9037`, `νd = 31.31`. Glass: **904-313 lanthanum-flint class (TAFD25L / S-LAH95 near match; supplier
unconfirmed)**. Isolated `f = +103.178 mm`.

G8 is the weak positive final element. Together with G7 it forms the fixed negative GR4, whose verified focal length is
−41.842 mm versus the patent's rounded −41.74 mm. The planar image-side face is followed by the source-listed rear optical
stack rather than directly by the image plane. [Patent, ¶0094, Tables 13 and 17.]

### Rear plate stack — source FL planes, not lens elements

The final model preserves the patent's rear FL stack through three `rearPlates`: 1.43 mm at `nd = 1.5490`, 0.59 mm at
`nd = 1.5190`, and 0.70 mm at `nd = 1.5168`, with the published intervening/trailing air spaces. These plates are included
in paraxial propagation and BFD but excluded from the eight-element count and from the ordinary rendered lens-element
sequence. [Patent, Table 13; current LensVisualizer rear-plate normalization.]

## Glass Identification and Selection

The patent publishes only d-line refractive index and Abbe number. It does not identify glass vendors or melts, and it does
not publish `nC`, `nF`, `ng`, or `dPgF`. The glass names in the data file are therefore coordinate classes established by
comparison with authoritative optical-glass catalogs; they are not supplier attributions.

| Element | Patent `nd` | Patent `νd` | Data-file class | Coordinate disposition |
|---|---:|---:|---|---|
| G1 | 1.5168 | 64.20 | 517-642 / BSC7 class | exact class coordinates |
| G2 | 1.8052 | 25.46 | 805-255 / FD60 class | Δn ≈ −0.00002, Δν = 0.00 |
| G3 | 1.8820 | 37.22 | 882-372 / M-TAFD307 class | Δn ≈ +0.00002, Δν = 0.00 |
| G4 | 1.9229 | 20.88 | 923-209 / E-FDS1 class | Δn ≈ −0.00004, Δν = 0.00 |
| G5 | 1.8820 | 37.22 | 882-372 / M-TAFD307 class | same coordinates as G3 |
| G6 | 2.0010 | 29.13 | 001-291 / TAFD55-W / S-LAH99 class | HOYA exact at displayed precision; OHARA Δn = 0, Δν = +0.01 |
| G7 | 1.5831 | 59.46 | 583-595 / M-BACD12 class | Δn ≈ +0.00003, Δν = 0.00 |
| G8 | 1.9037 | 31.31 | 904-313 lanthanum-flint class | Δn ≈ −0.00004, Δν ≈ +0.01 |

The close coordinates make these labels useful for classification and catalog cross-checking, but they do not establish
which supplier Sony or Zeiss used. Catalog line indices retained in the dossier for especially close G6 and G8 candidates
are replay evidence only and are deliberately not authored as element properties. The runtime uses the compatible catalog curves as spectral proxies, with source nd and νd retained. This does not establish production glass identity, APO correction, or anomalous partial dispersion.

The same coordinate guard supports spectral proxies for rear plates FL2 (BK7G18, Δn = +0.00075, Δν = −0.62) and FL3 (N-BK7, Δn = 0, Δν = −0.03). These are supplier-unconfirmed model choices; FL2 is not identified as radiation-resistant production glass. The [SCHOTT BK7G18 vendor coefficients](https://refractiveindex.info/?shelf=specs&book=SCHOTT-optical&page=BK7G18) agree with the existing catalog row. FL1 (1.549 / 64.2) has no compatible catalog curve and remains explicitly unresolved. The plate dimensions and physical gaps are unchanged.

## Focus Mechanism

Example 4 uses two independently moving positive functional groups. GR2, together with the aperture stop, moves objectward
as focus is brought closer; GR3 also moves objectward, by a different amount. GR1 and GR4 remain fixed. The source publishes
all three variable gaps, D2, D7, and D12, at infinity, an intermediate state, and the shortest-distance state, so the focus
status is **PUBLISHED** and no internal focus reconstruction is required. [Patent, ¶0097, Table 16.]

| State | Model `focusT` | D2 (mm) | D7 (mm) | D12 (mm) | GR2 shift (mm) | GR3 shift (mm) | Published `f` (mm) | Published Fno | Magnification |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Infinity | 0.000000 | 7.33 | 7.86 | 14.60 | 0.00 | 0.00 | 33.99 | 2.05 | — |
| Intermediate | 0.465722 | 6.04 | 7.56 | 16.19 | −1.29 | −1.59 | 32.68 | 2.10 | 0.06× |
| Shortest | 1.000000 | 4.08 | 7.11 | 18.60 | −3.25 | −4.00 | 30.87 | 2.18 | 0.15× |

The negative shifts above mean objectward motion relative to the infinity coordinate. Across all three source states,
`D2 + D7 + D12 = 29.79 mm`, which keeps GR4 at the same axial station. The intermediate and shortest prescriptions produce
paraxial object-to-image conjugates of 644.161 mm and 299.782 mm respectively; the latter is the independent numerical
basis for the close-focus product correlation.

The intermediate `focusT = 0.4657219849` value is not a patent actuator coordinate. It is a UI/model coordinate derived from
the verified intermediate conjugate relative to the 0.30 m product endpoint. The three source spacing rows themselves are
not altered. Representative `focusT = 0.25` and `0.75` states were sampled only for geometry validation and are not presented
as patent-published focus stations.

The physical stop diameter is also not published. The modeled stop semi-diameter, 7.662022 mm, is calibrated paraxially to
the patent's infinity F/2.05. With that same fixed stop, the independently replayed intermediate and shortest states predict
F/2.1039 and F/2.1844, compared with the patent's F/2.10 and F/2.18. The infinity match is calibration, not independent
evidence of the manufactured diaphragm diameter.

## Aspherical Surfaces

The patent defines its asphere by the standard even-order sag equation

`x = c y² / (1 + sqrt(1 - (1 + K)c²y²)) + A y⁴ + B y⁶ + C y⁸ + D y¹⁰`.

Accordingly, the patent's `K` is already the standard conic constant used by the data model, and no conic conversion is
required. The source coefficients `A`, `B`, `C`, and `D` map directly to `A4`, `A6`, `A8`, and `A10`. Because the model uses
scale factor 1.0, no coefficient rescaling is applied. [Patent, ¶¶0066–0068; PDF p. 19, printed p. 5.]

Numerical Example 4 places aspheres on both faces of G3, the rear face of G5, and both faces of G7. [Patent, ¶0095,
Table 14.]

| Surface | Element | K | A4 | A6 | A8 | A10 |
|---|---|---:|---:|---:|---:|---:|
| 5A | G3 | +3.1491E-01 | −2.2869E-06 | −2.3122E-09 | +5.0257E-10 | −4.1528E-12 |
| 6A | G3 | 0.0000E+00 | +1.1201E-05 | −1.2788E-08 | +4.7065E-10 | −4.6757E-12 |
| 10A | G5 | −2.5312E-01 | −5.1489E-06 | +1.8946E-07 | −5.4584E-10 | +1.6124E-12 |
| 13A | G7 | −1.1868E+00 | +2.5789E-05 | −2.4014E-07 | +7.2212E-10 | −6.0888E-13 |
| 14A | G7 | 0.0000E+00 | +2.0510E-05 | −1.2562E-07 | +2.2322E-10 | −1.1277E-13 |

Departures are quoted only at the final verified modeled semi-diameters. Relative to the patent conic base, the polynomial
contributions are −0.06548 mm at 5A (`sd = 11.6 mm`), +0.11969 mm at 6A (`11.6 mm`), +0.49208 mm at 10A (`12.8 mm`),
+0.39104 mm at 13A (`18.3 mm`), and −0.08523 mm at 14A (`18.3 mm`). A sphere-relative departure is intentionally not
quoted for 13A because an 18.3 mm rim lies outside the real radial domain of the corresponding reference sphere.

The patent does not identify a molding, polishing, or hybrid manufacturing process for these specific surfaces. No such
manufacturing method is inferred from the glass-class labels.

## Conditional Expressions

The patent's six conditions define rear-group power, the negative rear element's power and shape, rear-group position,
aggregate lens thickness, and total optical length. Recalculation from the rounded prescription reproduces the published
Example 4 values within the dossier's source-precision tolerances. [Patent, ¶¶0041–0053, Table 17.]

| Condition | Verified value | Published | Patent range | Status |
|---|---:|---:|---|---|
| (1) `ft/fr` | −0.81320 | −0.81 | `−2 < ft/fr < −0.45` | satisfied |
| (2) `fra/fr` | +0.70304 | +0.70 | `0.64 < fra/fr ≤ 1` | satisfied |
| (3) `(R1+R2)/(R1−R2)` | −0.95027 | −0.95 | `−2 < … < −0.5` | satisfied |
| (4) `Lr/Y` | +0.47804 | +0.48 | `0.2 < Lr/Y < 1` | satisfied |
| (5) `TD/Y` | +1.00601 | +1.01 | `0.5 < TD/Y < 1.4` | satisfied |
| (6) `TL/Y` | +2.77439 | +2.77 | `2.0 < TL/Y < 3.5` | satisfied |

For condition (1), the verified infinity EFL is 34.02619 mm and the verified GR4 focal length is −41.84218 mm; the source
prints 33.99 mm and −41.74 mm. For condition (2), the verified isolated G7 focal length is −29.41667 mm versus the patent's
rounded `fra = −29.30 mm`. The analysis retains these small residuals rather than replacing computed values with the
rounded summary table.

## Verification Summary and Modeling Limits

The final `.data.ts` was independently replayed by sequential height/reduced-angle propagation and by a separately coded
ABCD matrix implementation. At infinity the parsed prescription gives 34.02619 mm EFL versus the patent's 33.99 mm; at the
intermediate state it gives 32.71662 mm versus 32.68 mm; at the shortest state it gives 30.91204 mm versus 30.87 mm. The
residuals are consistent with the source's rounded radii, thicknesses, indices, and summary values and remain visible in
the verification record.

The patent publishes no clear lens semi-diameters. The authored semi-diameters are therefore modeling inferences, not source
facts. They were sized from exact meridional spherical/aspherical ray envelopes through the physical stop and checked at
all three published focus states plus representative `focusT = 0.25` and `0.75` states. The verification sampled 549 exact
rays. The minimum non-stop ray-envelope allowance is about 6.07% at surface 5A; the smallest positive element edge thickness
is 0.08518 mm at G3; the largest actual rim slope is 44.62° at surface 8. The current conic-domain and shared-band cross-gap
checks also pass.

These portable checks do not substitute for the production LensVisualizer renderer. Real project type checking,
`buildLens()` / `validateLensData()`, runtime glass resolution, Prettier, and production render-trim diagnostics were not
run because the repository/toolchain is not present in this authoring environment. Those items remain integration-pending;
no production-render pass is claimed here.

The model also normalizes source flat radii `R = 0` to the application's flat-surface representation where required and
renames the five source aspheres with the `A` suffix. Raw patent values remain preserved in the dossier. The rear optical
stack is preserved physically through `rearPlates`, not silently omitted or folded into an air-equivalent distance.

## Sources and References

1. **US 2014/0071333 A1**, Fumikazu Kanetaka and Hisashi Uno, *Imaging Lens and Image Pickup Apparatus*, Sony Corporation,
   published March 13, 2014. Primary prescription: Numerical Example 4, FIG. 13, Tables 13–17, ¶¶0093–0101. Asphere equation:
   ¶¶0066–0068. Design conditions and stated rationale: ¶¶0031–0054.
2. **Sony USA, DSC-RX1 specifications.** Fixed ZEISS Sonnar T* 35 mm F2, 63° angle of view, full-frame sensor.
   https://www.sony.com/electronics/support/compact-cameras-dsc-rx-series/dsc-rx1/specifications
3. **Sony USA, DSC-RX1RM2 specifications.** ZEISS Sonnar T*, 8 elements in 7 groups with 3 aspherical elements; 35 mm F2;
   0.15× standard maximum magnification; approximately 30 cm normal focus from the focal plane.
   https://www.sony.com/electronics/support/compact-cameras-dsc-rx-series/dsc-rx1rm2/specifications
4. **Sony Group, CEATEC 2012 Sony Booth Overview.** Records September 12, 2012 as the RX1 announcement date.
   https://www.sony.com/en/SonyInfo/News/Press/201210/12-148E/
5. **Sony, RX1R III product page.** Current product identity for the fixed ZEISS Sonnar T* 35 mm F2; the reviewed page does
   not republish the exact 8/7/3 prescription.
   https://electronics.sony.com/imaging/compact-cameras/all-vlog-compact-cameras/p/dscrx1rm3b
6. **HOYA Optical Glass.** Current/historical optical-glass lists, cross-reference material, and relevant data sheets.
   https://www.hoya-opticalworld.com/english/products/kenma.html
7. **OHARA Optical Glass.** Current optical-glass catalog pages used for class-coordinate cross-checks.
   https://oharacorp.com/glass-type/optical-glass/s-lah/
8. **SCHOTT Optical Glass.** Current optical-glass catalog/search used for cross-vendor coordinate checks.
   https://www.schott.com/en-us/products/optical-glass-p1000267
9. **HIKARI Glass.** Current J-SF optical-glass catalog used for coordinate checks.
   https://www.hikari-g.co.jp/optical_glass/general_optical_glass/j-sf/
10. **SUMITA Optical Glass.** Current catalog/download endpoint; no supplier attribution is made from the incomplete indexed
    coverage available during the source audit. https://www.sumita-opt.co.jp/en/download/
11. **CDGM optical glass.** Current catalog/distributor endpoint; no supplier attribution is made where an authoritative
    direct row was unavailable during the source audit. https://cdgmglass.com/

The catalog lists this Sony fixed-camera lens under Sony and retains ZEISS Sonnar T* branding in its display name. The patent correlation remains inferred.
