# CANON EF-M 15-45mm f/3.5-6.3 IS STM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** JP 2016-118658 A\
**Application Number:** JP 2014-258167\
**Filed:** 2014-12-22\
**Published:** 2016-06-30\
**Inventor:** Taku Inoue\
**Applicant:** Canon Inc.\
**Title:** Zoom lens and imaging apparatus including the same\
**Embodiment analyzed:** Numerical Example 8

The prescription is the complete Numerical Example 8 of JP 2016-118658 A. The patent describes a negative-lead zoom
in which the first four functional groups have negative, positive, negative, and negative power, followed by a positive
rear group. The third group is the focus group, and a positive subunit within the second group provides image
stabilization by moving in a direction with a component perpendicular to the optical axis [JP, ¶¶0023–0025, 0034,
0055–0058]. Numerical Example 8 appears on patent pages 26–28, with its lens section in Figure 15 on page 32.

The selected production correlation is the Canon EF-M 15-45mm f/3.5-6.3 IS STM. This is a correlation between the
patent embodiment and the production lens, not a claim that Canon identifies the patent on its product page. Several
independent features converge:

1. Canon specifies the production lens as 10 elements in 9 groups. Numerical Example 8 contains 10 glass elements, with
   one cemented pair, and therefore 9 air-separated physical groups.
2. Canon specifies three aspherical lens elements. Example 8 has three double-sided aspherical elements: E2, E7, and
   E9, giving six aspherical surfaces in the model.
3. The patent design points are 15.45, 30.00, and 44.45 mm at f/3.58, f/4.96, and f/6.44. These remain separate from
   the marketed 15–45mm f/3.5–6.3 designation.
4. The patent provides a transverse L2a image-stabilization subunit. Canon's production block diagram identifies an IS
   unit, while the product specification confirms optical image stabilization.
5. The patent was filed in December 2014, before Canon marketed the EF-M 15-45mm in October 2015.

Canon additionally specifies a 0.25 m closest focusing distance over the zoom range, 0.25× maximum magnification at
45 mm, seven diaphragm blades, a retracting barrel, and lead-screw STM. Those are production specifications rather than
patent prescription data. The reconstructed finite-focus model described below uses the 0.25 m specification as its one
external calibration constraint.

No dimensional scaling is applied. The data model has scale factor `s = 1.0`, so radii, spacings, semi-diameters, image
coordinates, and aspheric coefficients retain the patent scale. Consequently the general asphere scaling rule
`A_p,scaled = A_p,patent / s^(p-1)` leaves every coefficient unchanged here; the conic constant `K` is also unchanged.

## Optical Architecture

The design is a five-functional-group, negative-lead zoom with power sequence `− + − − +`:

- **L1:** three-element negative front group, E1–E3.
- **L2:** positive variator group. L2a is the single-element IS subunit E4; L2b contains the E5/E6 cemented pair,
  the aperture stop, and E7.
- **L3:** single negative meniscus E8, used for focusing.
- **L4:** single weak negative, double-sided aspherical meniscus E9.
- **L5:** fixed positive rear element E10.

The data file reports 10 elements and 9 air-separated physical groups, while the patent's zoom architecture is most
naturally discussed as five functional groups L1–L5. These are different counting conventions rather than a
contradiction. E5 and E6 share a cemented interface, so they are two glass elements but one air-separated physical unit.

The patent explicitly treats this as a negative-lead zoom. That terminology refers to the negative first functional
group; it should not be conflated with the project's stricter retrofocus classification. Independent first-order checks
find back focal distance below effective focal length at each of the three authored zoom stations, so the model is not
classified as retrofocus under that criterion.

At infinity focus, L5 is fixed while L1–L4 change axial position during zooming. L1 follows a reversing path: it first
moves imageward between the wide and middle samples and then returns objectward by the telephoto sample. In the final
model, the wide-to-tele normalized group movements relative to fixed L5 are −2.17 mm for L1, −25.00 mm for L2,
−23.46 mm for L3, −25.00 mm for L4, and 0 mm for L5. The patent states that L2, L3, and L4 follow mutually different
trajectories [JP, ¶0025]. The three published Example 8 samples nevertheless give the same net wide-to-tele displacement
for L2 and L4. This sampled equality does not establish identical continuous cam curves between the tabulated stations.

The aperture stop lies within the L2 functional assembly, between E6 and E7, and the patent states that it moves with L2
during zooming [JP, ¶0030]. The source table labels the stop row with an effective diameter of 9.40 mm. That number is
not used as the physical wide-open iris diameter because doing so would contradict the patent f-numbers. The authored
wide-end physical stop semi-diameter is 4.222262 mm, solved from the prescription and f/3.58. The corresponding modeled
wide-open stop semi-diameters at the middle and telephoto states are 4.411653 and 4.496347 mm.

The source also contains a fixed-diameter flare-cut plane `FS` 0.20 mm behind the final glass surface, followed by
10.60 mm to the image plane [JP, ¶0022; Numerical Example 8]. Because this plane is an inactive flare cutter rather than
a refracting surface or an authored blocker, it is omitted from the sequential model. Its axial effect is preserved by
combining the two rear air segments into the 10.80 mm final image-space distance.

## Element-by-Element Analysis

The focal lengths quoted on the element first lines are the standalone per-element values stored in the final data file,
corresponding to the patent's single-lens data. They are not the powers of the complete functional groups and should not
be interpreted as in-situ contributions without the surrounding spacings and interfaces.

### E1 — Negative Meniscus

**nd = 1.80400, νd = 46.6. Glass: 804466 — high-index lanthanum glass class (vendor unresolved). f = −21.71 mm.**

E1 is the first and strongest negative element of L1. Its positive front and rear radii form a negative meniscus in the
prescription sign convention. Together with E2 and E3 it establishes the negative-lead front group required by the
patent architecture.

The relatively high refractive index allows substantial surface power without an extreme center thickness. The data
file deliberately stops at a vendor-neutral coordinate class: several public catalogs contain very close or exact
`nd/νd` coordinates, but the patent does not identify the actual glass supplier.

### E2 — Negative Meniscus, Double-Sided Asphere

**nd = 1.52996, νd = 55.8. Glass: Unmatched (nd=1.52996, nu_d=55.8; no exact defensible public-catalog identity found). f = −142.86 mm.**

E2 is a weak negative meniscus between the stronger negative E1 and positive E3. Both surfaces, 3A and 4A, are
aspherical. Its standalone paraxial power is small compared with E1, so much of its design significance lies in surface
shape rather than gross group power. That interpretation follows from the prescription; the patent does not assign a
separate named aberration-correction function to E2.

The same `nd/νd` pair reappears in E9. The catalog audit did not find a defensible exact public identity, so both elements
remain explicitly `Unmatched` rather than being forced onto a speculative vendor glass.

### E3 — Positive Meniscus

**nd = 1.92286, νd = 18.9. Glass: 923189 — very-high-index flint class (vendor unresolved). f = +80.71 mm.**

E3 is the positive rear member of L1. It partially offsets the two preceding negative elements while the complete L1
group remains negative. Independent calculation from the full prescription gives L1 an in-situ group focal length of
−25.3467 mm, reproducing the patent's rounded −25.34 mm group value.

Its very high index and low Abbe number contrast strongly with E1 and E2. This combination provides a first-order route
to balancing power and axial color inside the front group, but no apochromatic or anomalous-partial-dispersion claim is
made: the patent supplies only `nd` and `νd` for this element.

### E4 / L2a — Biconvex Positive IS Element

**nd = 1.48749, νd = 70.2. Glass: 487702 — low-dispersion crown class (vendor unresolved). f = +75.37 mm.**

E4 is the complete L2a subunit. The patent specifies that L2a moves in a direction containing a component perpendicular
to the optical axis during image stabilization [JP, ¶¶0023, 0055]. It is therefore both a positive-power lens and the
transverse stabilization member.

The element's standalone focal length is +75.37 mm; independent calculation gives +75.3719 mm. Because L2a is a single
element, those quantities coincide to source precision. Its `νd = 70.2` coordinate is low-dispersion relative to the
neighboring L2b glasses, but the patent does not publish line indices from which secondary-spectrum behavior could be
evaluated.

### E5 — Biconvex Positive, Front Member of Cemented Doublet D1

**nd = 1.69350, νd = 53.2. Glass: S-LAL13 (spectral proxy; production supplier unspecified). f = +16.59 mm.**

E5 is the strong positive front component of the cemented E5/E6 pair in L2b. Surface 10 is the bonded interface and is
owned by downstream element E6 in the data model, matching the actual medium transition rather than introducing a
synthetic cement layer.

The element's high positive standalone power is moderated by the negative E6 behind it. The `νd` contrast between E5
and E6 provides conventional first-order chromatic balancing inside the positive L2b assembly; it does not by itself
establish anomalous dispersion or apochromatic correction.

### E6 — Biconcave Negative, Rear Member of Cemented Doublet D1

**nd = 1.84666, νd = 23.9. Glass: 847239 — dense flint class (vendor unresolved). f = −35.06 mm.**

E6 is the negative rear component of D1. Its dense-flint-like coordinates and lower Abbe number make it the dispersive
partner to E5. The two standalone element focal lengths, +16.59 mm and −35.06 mm, should not be algebraically combined:
the bonded interface and finite thickness matter.

A direct matrix calculation of the actual cemented E5/E6 pair gives a net focal length of +28.0680 mm. The larger L2b
assembly, after adding E7 and the real separations around the stop, has an in-situ focal length of +18.4642 mm, matching
the patent's rounded +18.46 mm group value. These three quantities—standalone E5/E6 power, cemented-pair power, and
complete L2b power—describe different optical objects.

### E7 — Biconvex Positive, Double-Sided Asphere

**nd = 1.58313, νd = 59.4. Glass: 583594 — crown class (vendor unresolved). f = +37.96 mm.**

E7 is the positive rear element of L2b and sits immediately imageward of the aperture stop. Both surfaces, 13A and 14A,
are aspherical. As a prescription-based interpretation, the near-stop location gives these profiles leverage over
pupil-dependent ray errors while E7 also contributes positive power to L2b.

The complete positive L2 functional group, including L2a and L2b in their wide-state spacing, has a computed in-situ
focal length of +15.3954 mm. This value is a property of the assembled group and should not be substituted for E7's
standalone +37.96 mm value.

### E8 / L3 — Negative Meniscus Focus Group

**nd = 1.90366, νd = 31.3. Glass: 904313 — high-index lanthanum flint class (vendor unresolved). f = −25.69 mm.**

E8 is the entire third functional group and the sole focusing element. The patent repeatedly specifies that L3 moves
imageward when focusing from infinity toward near objects [JP, ¶¶0025, 0034, 0040–0041, 0057]. Keeping the focus group
to one element is part of the patent's strategy for reducing moving mass [JP, ¶¶0031–0033, 0057].

Independent calculation gives L3 a focal length of −25.6863 mm, reproducing the patent's rounded −25.69 mm. The high
index allows a relatively strong negative focus group in a small physical element, while the patent's conditional limits
constrain that power so focus travel and aberration variation do not become excessive.

### E9 / L4 — Negative Meniscus, Double-Sided Asphere

**nd = 1.52996, νd = 55.8. Glass: Unmatched (nd=1.52996, nu_d=55.8; no exact defensible public-catalog identity found). f = −93.70 mm.**

E9 forms the complete fourth functional group. It is a weak negative meniscus with aspherical surfaces 17A and 18A.
Independent calculation gives −93.7131 mm, consistent with the patent's −93.70 mm group value.

The patent gives L4's asphere a specific architectural rationale: L4 is relatively close to the stop, and wide- and
telephoto-end off-axis rays separate there, allowing an aspherical surface on this small group to correct aberrations
effectively across the zoom range [JP, ¶¶0055–0057]. Example 8 uses both L4 surfaces as aspheres, going beyond the
patent's minimum statement that L4 should have at least one.

### E10 / L5 — Positive Meniscus Rear Field Group

**nd = 1.61405, νd = 55.0. Glass: 614550 — crown class (historical OHARA S-BSM9 coordinate match; vendor unresolved). f = +61.12 mm.**

E10 is the fixed positive fifth group. The patent describes this rear group as a field-lens element that reduces the
angle at which off-axis rays reach the image plane without requiring another multi-element moving group [JP, ¶0058].
The Example 8 group data give +61.12 mm; independent calculation gives +61.1210 mm.

Because L5 is fixed during the authored zoom states, it also supplies a stable axial reference for describing the motion
of L1–L4. Its large semi-diameter relative to the central groups is consistent with the rear field-lens role shown in
Figure 15.

## Glass Identification and Selection

The patent supplies `nd` and `νd` coordinates but no glass manufacturer, catalog name, C-line index, F-line index,
g-line index, `PgF`, or `dPgF` for Numerical Example 8. The final data file therefore uses vendor-neutral coordinate
classes or explicit `Unmatched (...)` labels. Candidate catalog equivalences found during the glass audit are not
promoted to vendor identities in the prescription.

| Data-file glass label | nd | νd | Elements | Status |
|---|---:|---:|---|---|
| 804466 — high-index lanthanum glass class (vendor unresolved) | 1.80400 | 46.6 | E1 | Coordinate class; vendor unresolved |
| Unmatched (nd=1.52996, nu_d=55.8; no exact defensible public-catalog identity found) | 1.52996 | 55.8 | E2, E9 | Explicitly unmatched |
| 923189 — very-high-index flint class (vendor unresolved) | 1.92286 | 18.9 | E3 | Coordinate class; vendor unresolved |
| 487702 — low-dispersion crown class (vendor unresolved) | 1.48749 | 70.2 | E4 | Coordinate class; vendor unresolved |
| S-LAL13 (spectral proxy; production supplier unspecified) | 1.69350 | 53.2 | E5 | Qualified spectral proxy; supplier unspecified |
| 847239 — dense flint class (vendor unresolved) | 1.84666 | 23.9 | E6 | Coordinate class; vendor unresolved |
| 583594 — crown class (vendor unresolved) | 1.58313 | 59.4 | E7 | Coordinate class; vendor unresolved |
| 904313 — high-index lanthanum flint class (vendor unresolved) | 1.90366 | 31.3 | E8 | Coordinate class; vendor unresolved |
| 614550 — crown class (historical OHARA S-BSM9 coordinate match; vendor unresolved) | 1.61405 | 55.0 | E10 | Historical coordinate match; vendor unresolved |

The stored `νd` values support discussion of first-order Abbe-number balancing only: stronger positive members are
paired with lower-dispersion crowns where useful, while dense/high-index flints supply negative or balancing power. The
E5/E6 cemented pair is the clearest example, with `νd = 53.2` and `23.9` on its positive and negative components. Abbe
number alone cannot establish secondary-spectrum correction, so the available data do not support an APO, super-ED,
fluorite, or anomalous-partial-dispersion classification.

E5 now uses the coordinate-compatible S-LAL13 spectral proxy, raising catalog coverage to 8/10 elements. E2 and E9 remain unmatched at nd = 1.52996 and νd = 55.8; no compatible published curve is established. Production suppliers remain unspecified.

## Focus Mechanism

The patent publishes the focus mechanism but not a finite-object spacing table. L3/E8 alone moves imageward from
infinity toward near focus, while adjacent groups retain their focus-state positions [JP, ¶0025]. The final data file
therefore marks focus as `CONSTRAINED_RECONSTRUCTION`, not `PUBLISHED`.

Canon specifies a closest focusing distance of 0.25 m throughout the zoom range and a maximum magnification of 0.25× at
45 mm. Canon's camera documentation defines lens minimum focusing distance from the camera's focal-plane mark to the
subject, so the reconstruction uses 0.25 m as the subject-to-image-plane distance and solves one scalar L3 translation
at each of the three patent zoom stations. The reference plane is therefore manufacturer-defined; the finite-focus
spacings remain a constrained reconstruction because the patent publishes no finite-focus spacing table.

The mechanism constraint is exact within the model: L3 translation changes only the two adjacent gaps, and
`d14 + d16 = 7.72 mm` is conserved at every authored state.

| Zoom station | L3 imageward travel | d14 infinity → close | d16 infinity → close |
|---|---:|---:|---:|
| 15.45 mm | 0.490302 mm | 1.500000 → 1.990302 mm | 6.220000 → 5.729698 mm |
| 30.00 mm | 1.117516 mm | 2.650000 → 3.767516 mm | 5.070000 → 3.952484 mm |
| 44.45 mm | 1.653862 mm | 3.040000 → 4.693862 mm | 4.680000 → 3.026138 mm |

Sequential finite-conjugate calculation drives the imaging-matrix `B` term to numerical zero at all three close states.
At the telephoto close state the modeled paraxial magnification is −0.253064, whose magnitude is about 1.2% above
Canon's rounded 0.25× production specification. This agreement supports the constrained reconstruction but does not
turn the reconstructed rows into patent-published focus data.

The production lens uses a lead-screw-type stepping motor. That manufacturer fact establishes the production AF drive
technology, but the available product source does not explicitly identify the production moving glass element as the
same L3 element represented in the patent. The optical model therefore preserves the patent's L3 focus motion without
claiming a manufacturer-confirmed actuator-to-group mapping.

## Aspherical Surfaces

Example 8 uses six aspherical surfaces on three double-sided aspherical elements:

- E2: 3A and 4A.
- E7: 13A and 14A.
- E9/L4: 17A and 18A.

The patent's printed asphere equation contains a source error in the conic numerator: it shows a term proportional to
`1/R` where the standard rotational sag requires `h²/R`. Taken literally, the printed form is dimensionally inconsistent
and would give a nonzero axial sag at `h = 0`. The model therefore uses the intended standard form

`Z(h) = (h²/R) / [1 + sqrt(1 - (1+K)(h/R)²)] + Σ A_p h^p`.

The denominator contains `(1+K)`, so `K` is the standard conic constant rather than a `κ` parameter requiring an offset.
The patent's general equation also includes an `A2 h²` term. Numerical Example 8 lists no `A2` coefficient for any of
its six aspheres, so `A2 = 0` throughout and is absent from the authored schema. Every Example 8 asphere has `K = 0`,
making the base conic spherical and placing the non-spherical correction entirely in the higher-order polynomial terms.

With radial height `h` in millimeters, `A_p` has units of `mm^(1-p)`. The data-file coefficients are:

| Surface | K | A4 | A6 | A8 | A10 | A12 |
|---|---:|---:|---:|---:|---:|---:|
| 3A | 0 | −5.68175e−5 | +5.45347e−7 | −6.57928e−9 | +5.78459e−11 | −2.54252e−13 |
| 4A | 0 | −8.63252e−5 | +4.59440e−7 | −6.01240e−9 | +4.24996e−11 | −2.01423e−13 |
| 13A | 0 | −2.34601e−4 | −4.86415e−6 | +4.06780e−7 | −8.54092e−9 | 0 (source omitted) |
| 14A | 0 | −1.06387e−4 | −3.29772e−6 | +4.04274e−7 | −9.45901e−9 | 0 (source omitted) |
| 17A | 0 | −2.34140e−4 | +1.26198e−5 | −9.96591e−7 | +3.44462e−8 | −4.36551e−10 |
| 18A | 0 | −9.12180e−5 | +7.47765e−6 | −4.31892e−7 | +1.19972e−8 | −1.18378e−10 |

The schema also carries `A14 = 0` on each of the six surfaces. Those zeros are schema padding, not patent-published
14th-order coefficients. Likewise, the patent stops at A10 for 13A and 14A; their A12 values are modeled as zero rather
than silently inventing an unprinted coefficient.

At the patent effective semi-diameters, independently evaluated polynomial departures from the `K = 0` base are
−0.434852 mm (3A), −0.967741 mm (4A), −0.092431 mm (13A), −0.031206 mm (14A), −0.163397 mm (17A), and −0.028123 mm
(18A). The E2 pair therefore carries the largest polynomial departure of the three aspherical elements. The actual rim
slope remains within the model's geometric limit on every surface; the largest rim angle in the prescription is
58.476° on spherical surface 2 rather than on an asphere.

No coefficient rescaling is present because `s = 1.0`. Had the prescription been uniformly scaled, each polynomial
coefficient would require `A_p / s^(p-1)` while `K` remained unchanged; here that transformation is numerically the
identity.

## Zoom Kinematics and Aperture Behavior

The authored zoom control points are the patent's three infinity-focus focal lengths: 15.45, 30.00, and 44.45 mm. Four
air gaps vary with zoom. D6 and D18 are zoom-only gaps; D14 and D16 also participate in the reconstructed L3 focusing
motion.

At infinity focus the source gap values are:

| Gap | 15.45 mm | 30.00 mm | 44.45 mm | Function |
|---|---:|---:|---:|---|
| D6 | 24.49 mm | 7.10 mm | 1.66 mm | Zoom only |
| D14 | 1.50 mm | 2.65 mm | 3.04 mm | Zoom + focus |
| D16 | 6.22 mm | 5.07 mm | 4.68 mm | Zoom + focus |
| D18 | 4.05 mm | 16.16 mm | 29.05 mm | Zoom only |

The final `nominalFno` array is `[3.58, 4.96, 6.44]`, exactly following Numerical Example 8 rather than the rounded
marketed f/3.5–6.3 designation. This separation matters because stop and pupil geometry are controlled by the modeled
f-number, not the product name.

The full first-to-image track is 77.88 mm at wide, 72.60 mm at the middle station, and 80.05 mm at telephoto, exactly
matching the sums of the published spacings. L1's reversal is consequently retained instead of imposing a monotonic
interpolation on the front group.

## Image Stabilization

The patent divides L2 into L2a and L2b. L2a consists of E4 alone, and image stabilization is obtained by moving this
subunit in a direction having a component perpendicular to the optical axis [JP, claims 8–9; ¶¶0023, 0055]. The data
file therefore identifies E4 as `L2a / IS`.

Canon's production material independently identifies an IS unit in the EF-M 15-45mm block diagram and specifies optical
image stabilization. This is consistent with the selected patent correlation. The patent does not publish a numerical
transverse IS displacement range for Example 8, and the data file consequently does not invent one or expose a modeled
IS-decenter state.

## Conditional Expressions

The patent defines nine first-order conditions for the architecture [JP, ¶¶0036–0054]. Recalculation from the final
authored surface and movement arrays reproduces Example 8's Table 1 values after the patent's two-decimal rounding.
All nine also lie within the patent's stated primary ranges.

| Eq. | Patent condition | Computed | Table 1 | Result |
|---:|---|---:|---:|---|
| 1 | `0.85 < |f3/fw| < 3.15` | 1.662541 | 1.66 | Pass |
| 2 | `−1.60 < m3/fw < −1.00` | −1.518447 | −1.52 | Pass |
| 3 | `1.20 < f4/f3 < 11.50` | 3.648374 | 3.65 | Pass |
| 4 | `−1.80 < m4/fw < −1.25` | −1.618123 | −1.62 | Pass |
| 5 | `0.07 < dp3/fw < 0.45` | 0.318447 | 0.32 | Pass |
| 6 | `0.03 < TD3/fw < 0.14` | 0.045307 | 0.05 | Pass |
| 7 | `−0.80 < (R3i−R3o)/(R3i+R3o) < −0.30` | −0.516208 | −0.52 | Pass |
| 8 | `1.30 < |f1/fw| < 1.83` | 1.640561 | 1.64 | Pass |
| 9 | `0.70 < f2/fw < 1.28` | 0.996466 | 1.00 | Pass |

The values also satisfy the patent's narrower preferred ranges. In architectural terms, conditions 1–4 constrain the
power and zoom travel of the two negative groups around the focus mechanism; conditions 5–7 constrain stop-to-focus
group spacing, focus-group thickness, and L3 shape; conditions 8–9 constrain the negative front group and positive L2
power balance.

## Verification Summary

Independent sequential height/reduced-angle tracing and a separately assembled ABCD matrix give the same system matrix
to machine precision at each of the three infinity zoom stations. The resulting first-order quantities are:

| Station | Patent EFL | Computed EFL | Patent BF | Computed BF |
|---|---:|---:|---:|---:|
| Wide | 15.45 mm | 15.447314 mm | 10.80 mm | 10.787538 mm |
| Middle | 30.00 mm | 29.997039 mm | 10.80 mm | 10.790936 mm |
| Telephoto | 44.45 mm | 44.442360 mm | 10.80 mm | 10.732604 mm |

The small back-focus residual grows to about −0.067 mm at telephoto. The patent rounds radii and spacings to three
decimal places and BF to two decimal places, so the derived residual is retained rather than used to alter the source
prescription.

A separate source inconsistency is also preserved: the Example 8 group table lists the L2b construction length as
9.44 mm, while the raw surface spacings from surface 9 through surface 14 sum to 9.45 mm. The data model follows the
raw prescription and does not force the 0.01 mm group-table value onto the surface sequence.

The surface-by-surface Petzval sum, calculated as `Σ φ/(n·n′)`, is +0.0035052203 mm⁻¹. With the project's sign convention
`R_P = −1/ΣP`, this corresponds to −285.289 mm. This is a computed model property, not a patent-published radius.

Geometry checks over wide, middle, and telephoto at both infinity and reconstructed close focus retain positive element
edge thickness throughout. The minimum verified edge thickness is 0.979348 mm, and the maximum actual rim-slope angle
is 58.476°. All authored aspheres have `K = 0`, so no positive-K conic-height limit is active. Shared-band cross-gap
checks remain within the current 0.90-gap policy at all six defined states.

The semi-diameters on ordinary optical surfaces are half of the patent's published effective diameters. They are not
enlarged to force every edge-of-field paraxial sample through every element; this preserves the source apertures rather
than using layout data to conceal natural vignetting. The physical aperture stop is the exception because the patent's
9.40 mm stop-row value is an effective diameter inconsistent with the published f-number if interpreted as the physical
iris opening.

## Sources and References

1. Canon Inc., **JP 2016-118658 A**, *Zoom lens and imaging apparatus including the same*, filed 2014-12-22,
   published 2016-06-30. Numerical Example 8, pp. 26–28; Figure 15, p. 32.
   https://patents.google.com/patent/JP2016118658A/en
2. Canon Camera Museum, **EF-M15-45mm f/3.5-6.3 IS STM**. Production specifications, October 2015 release,
   construction, focusing distance, magnification, aspherical-element count, retracting mechanism, STM, and IS block
   diagram. https://global.canon/en/c-museum/product/ef453.html
   Japanese product page (states 0.25 m MFD over the full zoom range): https://global.canon/ja/c-museum/product/ef453.html
3. Canon, **Close-up Shooting** product-manual guidance. Lens minimum focusing distance is measured from the camera's
   focal-plane mark to the subject. https://cam.start.canon/fa/C022/manual/html/UG-02_ShootingStill_0130.html
4. OHARA, optical-glass catalog portal. https://oharacorp.com/glass-catalog/
5. HOYA, optical-glass data download portal. https://www.hoya-opticalworld.com/english/datadownload/index.html
6. SCHOTT, optical-glass catalog/download portal.
   https://www.schott.com/en-us/products/optical-glass-p1000267/downloads
7. HIKARI, optical-glass catalog. https://www.hikari-g.co.jp/optical_glass/catalog/
8. CDGM, optical-glass catalog portal. https://www.cdgmgd.com/
9. SUMITA Optical Glass, catalog/download portal. https://sumita-opt.co.jp/en/download/
