## Patent Reference and Design Identification

**Patent:** JP 2007-003600 A\
**Application Number:** JP 2005-180673\
**Filed:** 2005-06-21\
**Published:** 2007-01-11\
**Inventor:** Takashi Shirasuna\
**Applicant:** Canon Inc.\
**Title:** *Zoom lens and imaging apparatus having the same* (ズームレンズ及びそれを有する撮像装置)\
**Embodiment analyzed:** Numerical Example 1

The prescription is Numerical Example 1 of JP 2007-003600 A. The production correlation used for this record is the
Canon EF 70-300mm f/4-5.6 IS USM. Canon does not identify the patent on its product page, so the connection is a
correlation rather than a manufacturer-confirmed patent assignment.

Several independent features converge on that correlation:

1. Numerical Example 1 contains **15 elements in 10 physical air-separated groups**, exactly matching Canon's published
   15-element/10-group construction for the production lens.
2. The patent's design range is **72.4-290.0 mm**, close to the marketed **70-300 mm** range. The computed Gaussian EFL
   endpoints from the final prescription are 72.398908 mm and 289.976889 mm.
3. The patent header gives **FNo 4.1-5.9**, whereas the production lens is marketed as **f/4-5.6**. The difference is
   retained as a design-versus-marketing distinction rather than reconciled by rescaling the prescription.
4. The aberration figures use **Y = 21.64 mm**. With the computed EFLs, this gives full fields of 33.2828° at the wide
   state and 8.5358° at the tele state, reproducing the patent's rounded 33.3°-8.5° header and supporting 135-format
   coverage.
5. The prescription contains one very-high-Abbe element, E7 at $n_d = 1.49700$, $\nu_d = 81.5$. Canon describes the
   production lens as using one UD element. This is consistent correlation evidence; it does not establish a supplier
   identity or prove that the production UD blank is literally the same catalog glass as E7.
6. Patent ¶0059 and ¶0062 describe image stabilization by decentering all or part of the second lens unit, L2. The
   production lens is an IS lens.
7. The application was filed in June 2005, shortly before Canon's October 2005 marketing date for the production lens.

The numerical example itself remains the authority for the prescription. Manufacturer specifications are used only for
product identity and marketed/mechanical facts.

## Optical Architecture

The design is an all-spherical six-unit 70-300 mm-class zoom with functional power sequence
**positive-negative-positive-negative-positive-negative**. These six patent units are not the same count as the 10
physical air-separated groups: the 10-group figure is the physical construction count, while L1-L6 are the moving/fixed
functional units used by the patent's zoom description.

The functional units are:

| Unit | Elements | Computed net focal length | Role in the centered prescription |
|---|---|---:|---|
| L1 | E1-E3 | +129.999 mm | Front positive unit; major zoom translation |
| L2 | E4-E6 | -40.264 mm | Fixed negative unit; image-stabilization unit |
| L3 | E7-E9 | +56.998 mm | Positive variator unit; stop moves with it |
| L4 | E10 | -199.236 mm | Weak fixed negative unit behind the stop |
| L5 | E11-E13 | +54.333 mm | Positive moving relay unit |
| L6 | E14-E15 | -49.230 mm | Rear negative moving unit |

These are **functional-unit net powers** calculated from each unit's actual internal thicknesses. They are distinct from
the standalone focal length of an individual element and from the net power of a cemented pair. Their behavior in the
complete zoom is determined by the changing separations among the units.

Patent ¶0031-¶0032 describes the wide-to-tele motion with L2 and L4 fixed. The final data reproduce that motion. Taking
the front of L2 (surface 6) as the fixed axial datum, L1 moves 54.40 mm toward the object, L3 and the stop move 27.51 mm
toward the object, L5 moves 6.98 mm toward the object on the sampled nonlinear trajectory, and L6 moves 23.51 mm toward
the object. L4 remains fixed to the 0.01 mm precision of the published spacing table.

The patent characterizes the wide-end power arrangement as close to a retrofocus type (¶0033) and the tele-end
arrangement as roughly telephoto-like (¶0034). Under the strict geometric classification applied to the data, those terms are narrower.
At the wide state, BFD/EFL is 0.58744, so the design is **not** classified as retrofocus because BFD is not greater than
EFL. At the tele state, total track/EFL is 0.81798, so the tele state **does** satisfy the strict telephoto criterion
$TL/EFL < 1$. The wide and middle states do not.

### Modeling boundaries

The prescription is retained at **1:1 scale**. Patent plane radii r15, r16, and r23 are represented by the model's
flat-radius sentinel; no physical curvature is introduced by that normalization. Numerical Example 1 contains no
aspheres.

The patent publishes the aperture-stop location as surface 16 but does not publish its diameter. The model therefore
uses an inferred constant physical stop semi-diameter of **12.4665706 mm**. That stop is paired with modeled wide-open
f-numbers **4.0333081, 4.74696994, and 5.94591516** at 72.4, 134.99, and 290.0 mm. These are model quantities used for
pupil geometry; the patent's displayed FNo 4.1-5.9 and the product's marketed f/4-5.6 remain separate source facts.

The patent also omits clear-aperture diameters. All surface semi-diameters in the data file are therefore inferred from
the verified ray envelope, patent Figure 1 proportions, and production mechanical constraints rather than transcribed
from a patent aperture table.

A second source limitation occurs at the rear of the prescription. Surface r26 is explicitly followed by variable d26,
but the Numerical Example 1 variable-spacing table omits the d26 row. The modeled infinity image gaps are reconstructed
as 42.530264, 54.062915, and 66.023940 mm from the paraxial image condition. No spacing from another embodiment is
substituted.

No sensor cover glass, filter, inactive dummy plane, flare-cutter plane, or mechanical component is present in this
numerical example or added to the optical sequence. No scale transformation or asphere-coefficient transformation is
required.

## Element-by-Element Analysis

### D1 — E1 Negative Meniscus + E2 Biconvex Positive

**E1:** $n_d = 1.74950$, $\nu_d = 35.3$. Glass: **750353 — high-index flint class (vendor unresolved)**. Standalone
$f = -119.350$ mm.

**E2:** $n_d = 1.48749$, $\nu_d = 70.2$. Glass: **487702 — low-dispersion crown class (vendor unresolved)**.
Standalone $f = +124.554$ mm.

E1 and E2 form the front cemented pair D1. Their standalone powers are of opposite sign and similar magnitude; once
combined with the actual cemented thickness, D1 is only weakly negative, with computed net $f = -2846.460$ mm. It is
therefore misleading to describe either element's standalone focal length as the power of the cemented component.

The patent places specific dispersion conditions on the negative member of this first pair and on the positive members
of L1. E1 supplies the negative, lower-Abbe side of that balance, while E2 supplies the positive, higher-Abbe side.
The complete L1 unit is not nearly afocal because the following positive E3 contributes substantial additional power.

### E3 — Biconvex Positive

$n_d = 1.51633$, $\nu_d = 64.1$. Glass: **516641 — borosilicate crown class (vendor unresolved)**. Standalone
$f = +124.536$ mm.

E3 is the positive singlet behind D1 and completes L1. Together, D1 and E3 give the complete front unit a computed net
$f = +129.999$ mm. In the full zoom, L1 is the unit with the largest sampled axial travel, moving 54.40 mm objectward
from wide to tele.

### E4 — Biconcave Negative

$n_d = 1.71300$, $\nu_d = 53.9$. Glass: **713539 — lanthanum crown class (vendor unresolved)**. Standalone
$f = -61.632$ mm.

E4 begins L2 with negative power. L2 is fixed during zoom and is the unit identified by the patent for stabilization
through lateral decenter. E4 is not a cemented member; its standalone power therefore remains distinct from the
following D2 pair and from the net L2 unit.

### D2 — E5 Biconcave Negative + E6 Biconvex Positive

**E5:** $n_d = 1.60311$, $\nu_d = 60.6$. Glass: **603606 — dense crown class (vendor unresolved)**. Standalone
$f = -40.685$ mm.

**E6:** $n_d = 1.84666$, $\nu_d = 23.9$. Glass: **847239 — high-index flint class (vendor unresolved)**. Standalone
$f = +62.077$ mm.

The pair remains net negative: D2 has computed $f = -121.665$ mm. Combined with E4, the complete L2 unit is substantially
stronger, at $f = -40.264$ mm. That distinction matters because image stabilization acts on the unit as positioned in the
complete zoom, not on E5 or E6 in isolation.

The very different Abbe numbers of the cemented members provide strong dispersion contrast. The data support that
statement directly; they do not, by themselves, justify an apochromatic or anomalous-partial-dispersion claim.

### E7 — Biconvex Positive

$n_d = 1.49700$, $\nu_d = 81.5$. Glass: **497815 — low-dispersion fluorophosphate / ED class (vendor unresolved)**.
Standalone $f = +67.445$ mm.

E7 begins the positive L3 unit and is the prescription's highest-Abbe element. Its coordinate is consistent with the
production lens's documented use of one UD element, but the patent does not name a supplier or a commercial glass type.
The data therefore retain an ED-class description rather than asserting an OHARA, HOYA, SCHOTT, HIKARI, CDGM, or SUMITA
identity.

### D3 — E8 Biconvex Positive + E9 Plano-Concave Negative

**E8:** $n_d = 1.48749$, $\nu_d = 70.2$. Glass: **487702 — low-dispersion crown class (vendor unresolved)**.
Standalone $f = +61.907$ mm.

**E9:** $n_d = 1.83400$, $\nu_d = 37.2$. Glass: **834372 — lanthanum flint class (vendor unresolved)**. Standalone
$f = -71.436$ mm.

D3 is weakly positive as a cemented component, with computed net $f = +397.349$ mm. E7 provides the stronger positive
contribution in front of it, so the complete L3 unit has net $f = +56.998$ mm. E9 ends on a planar rear surface directly
ahead of the stop gap.

The stop moves integrally with L3 in the patent zoom description. Consequently, the optical significance of L3 is not
only its positive net power but also its changing separation from the fixed L2 and L4 units while preserving its stop
relationship.

### E10 — Negative Meniscus

$n_d = 1.51633$, $\nu_d = 64.1$. Glass: **516641 — borosilicate crown class (vendor unresolved)**. Standalone
$f = -199.236$ mm.

E10 alone forms L4, so its standalone focal length is also the net focal length of the L4 unit. It is a comparatively weak
negative group immediately behind the aperture stop. Patent ¶0031-¶0032 keep this unit fixed through zooming while L3
and the stop move ahead of it and L5 moves behind it.

### D4 — E11 Biconvex Positive + E12 Negative Meniscus

**E11:** $n_d = 1.60311$, $\nu_d = 60.6$. Glass: **603606 — dense crown class (vendor unresolved)**. Standalone
$f = +52.451$ mm.

**E12:** $n_d = 1.80518$, $\nu_d = 25.4$. Glass: **805254 — dense flint class (vendor unresolved)**. Standalone
$f = -102.210$ mm.

D4 remains positive after cementing, with computed net $f = +108.852$ mm. E11 supplies the stronger positive standalone
power, while E12 reduces the pair's net power and introduces a large dispersion contrast. The pair is the front portion
of L5 rather than an independent zoom unit.

### E13 — Plano-Convex Positive

$n_d = 1.58913$, $\nu_d = 61.1$. Glass: **S-BAL35 — catalog-equivalent barium crown for patent 589611 (production supplier unspecified)**. Standalone $f = +107.251$ mm.

E13 follows D4 and completes the positive L5 unit. The full unit has computed $f = +54.333$ mm. Patent ¶0031-¶0032
describe L5 as following a nonlinear objectward trajectory during zooming; the three published states reproduce a
6.98 mm net objectward displacement without a sampled reversal.

### D5 / L6 — E14 Biconcave Negative + E15 Positive Meniscus

**E14:** $n_d = 1.77250$, $\nu_d = 49.6$. Glass: **773496 — high-index lanthanum class (vendor unresolved)**.
Standalone $f = -28.887$ mm.

**E15:** $n_d = 1.80518$, $\nu_d = 25.4$. Glass: **805254 — dense flint class (vendor unresolved)**. Standalone
$f = +69.669$ mm.

D5 is the complete L6 unit. The strong negative E14 dominates the positive E15, giving the cemented pair and functional
unit the same computed net $f = -49.230$ mm. L6 moves 23.51 mm toward the object from the wide state to the tele state.

The last refracting surface is followed by the reconstructed d26 image gap. That gap is part of the infinity-image model,
not a published finite-focus motion.

## Glass Identification and Selection

The patent publishes $n_d$ and $\nu_d$ but does not name a glass supplier. The data file therefore uses six-digit
coordinate classes derived from the published coordinates, plus a qualified S-BAL35 curve for E13, without asserting production suppliers. Eleven distinct
coordinate pairs occur across the 15 elements.

| Data-file glass class | $n_d$ | $\nu_d$ | Elements | Interpretation |
|---|---:|---:|---|---|
| 750353 — high-index flint class (vendor unresolved) | 1.74950 | 35.3 | E1 | Lower-Abbe negative glass in front D1 pair |
| 487702 — low-dispersion crown class (vendor unresolved) | 1.48749 | 70.2 | E2, E8 | High-Abbe positive crown class |
| 516641 — borosilicate crown class (vendor unresolved) | 1.51633 | 64.1 | E3, E10 | Moderate-index crown class |
| 713539 — lanthanum crown class (vendor unresolved) | 1.71300 | 53.9 | E4 | Higher-index negative-group crown class |
| 603606 — dense crown class (vendor unresolved) | 1.60311 | 60.6 | E5, E11 | Dense crown class used with lower-Abbe partners |
| 847239 — high-index flint class (vendor unresolved) | 1.84666 | 23.9 | E6 | Very high-index, low-Abbe partner in D2 |
| 497815 — low-dispersion fluorophosphate / ED class (vendor unresolved) | 1.49700 | 81.5 | E7 | Highest-Abbe element in the prescription |
| 834372 — lanthanum flint class (vendor unresolved) | 1.83400 | 37.2 | E9 | High-index negative partner in D3 |
| 805254 — dense flint class (vendor unresolved) | 1.80518 | 25.4 | E12, E15 | Low-Abbe high-index class in rear pairs |
| S-BAL35 — catalog-equivalent barium crown for patent 589611 (production supplier unspecified) | 1.58913 | 61.1 | E13 | Positive crown class in L5 |
| 773496 — high-index lanthanum class (vendor unresolved) | 1.77250 | 49.6 | E14 | Strong negative member of L6 |

The class strings are intentionally more conservative than catalog-name assignments. Multiple current manufacturers
publish glasses near several of these coordinates, so $n_d/\nu_d$ proximity alone cannot establish which supplier Canon
used for a proprietary design.

No element in the final data carries authored $n_C$, $n_F$, $n_g$, or schema-compatible `dPgF`. The patent's
$\Delta\theta_{gd}$ condition uses a different definition and is not interchangeable with the data schema's $dP_{gF}$.
Accordingly, the model does not claim APO behavior or a specific anomalous-partial-dispersion response.

## Focus Mechanism

The focus status is **NO_INTERNAL_RECONSTRUCTION**. Numerical Example 1 publishes infinity-focus zoom spacings only. It
does not provide a finite-object spacing table, a focus-unit travel table, or enough mechanism constraints to recover a
unique close-focus prescription.

Canon publishes a closest focusing distance of **1.5 m** and maximum magnification of **0.26×** for the production lens.
Those are production specifications, not patent prescription states. The data retain `closeFocusM: 1.5` as metadata, but
every authored infinity/close pair in the variable-gap table is identical. The interactive model therefore does not
simulate an internal focus motion or claim a focus-group identity that the selected numerical example does not publish.

This treatment also keeps the reconstructed d26 row separate from focus. d26 varies with zoom only in the authored model;
it is not used as a surrogate close-focus mechanism.

## Chromatic Correction Strategy

The prescription uses dispersion contrast repeatedly rather than concentrating all chromatic balancing in a single
cemented component. The front D1 pair combines a $\nu_d = 35.3$ negative element with a $\nu_d = 70.2$ positive element.
D2 combines $\nu_d = 60.6$ and 23.9, D3 combines 70.2 and 37.2, D4 combines 60.6 and 25.4, and the rear D5 pair combines
49.6 and 25.4. E7 adds a separate very-high-Abbe positive element at $\nu_d = 81.5$.

The patent makes the first-unit dispersion choice explicit through conditions (1)-(3), while Canon's production page
states that the marketed lens contains one UD element. The final data support a description of an achromatizing strategy
based on refractive-index and Abbe-number contrast. They do **not** support a stronger statement that the system is
apochromatic, nor do they establish a particular vendor's partial-dispersion curve.

## Conditional Expressions

The patent gives seven conditions relevant to Numerical Example 1. The quantities involving unit focal lengths were
recomputed from the final data arrays; the dispersion-coordinate quantities come directly from the selected example.

| Condition | Requirement | Example 1 value | Result |
|---|---|---:|---|
| (1) | $\nu_{d1n} < 40$ | 35.3 | Satisfied |
| (2) | $\Delta\theta_{gd1n} < 0.005$ | -0.004 | Satisfied |
| (3) | $\nu_{d1p} < 75$ | 70.2, 64.1 | Satisfied |
| (4) | $0.6 < |f_{1n}|/f_1 < 1.4$ | 0.918078 | Satisfied |
| (5) | $0.6 < f_1/\sqrt{f_w f_t} < 1.2$ | 0.897167 | Satisfied |
| (6) | $0.1 < |f_2|/\sqrt{f_w f_t} < 0.5$ | 0.277876 | Satisfied |
| (7) | $0.2 < f_3/\sqrt{f_w f_t} < 0.8$ | 0.393358 | Satisfied |

The source's $\Delta\theta_{gd}$ is defined in ¶0041-¶0042 as a deviation of $(N_g-N_d)/(N_F-N_C)$ from the K7-F2
normal line. It is not the same quantity as the data schema's `dPgF` field and is therefore not copied into the spectral
data model.

The rendered condition table on patent page 14 reads **0.918** for condition (4). An OCR reading of 0.913 is inconsistent
with both the page image and the independently calculated 0.918078 value.

## Image Stabilization

Patent ¶0059 and ¶0062 identify the second lens unit L2 as the stabilization unit: image shake is corrected by decentering
all or part of L2 in a direction perpendicular to the optical axis. In Numerical Example 1, L2 consists of E4-E6 and has
computed net $f = -40.264$ mm.

L2 is also one of the two units held fixed axially during zooming. That separation of axial zoom motion from transverse
stabilization is a defining part of the patent architecture: L1, L3, L5, and L6 provide the sampled zoom translations,
while L2 retains its axial station and supplies the decentered correcting action.

The centered prescription records the IS unit as `L2 / IS` but does not invent a lateral decenter range.
The patent establishes the stabilizing mechanism, while the data file remains the centered nominal optical state. Canon's
production page separately describes a three-stop Image Stabilizer; that is a marketed performance specification rather
than a prescription-derived value.

## Verification Summary

The final data arrays reproduce the patent's first-order zoom states within the precision expected from the printed
radii, indices, and 0.01 mm spacing table.

| Zoom state | Computed EFL | Paraxial BFD | Track to image | $TL/EFL$ | Modeled wide-open f/# |
|---:|---:|---:|---:|---:|---:|
| 72.40 mm | 72.398908 mm | 42.530264 mm | 182.810264 mm | 2.525042 | 4.033308 |
| 134.99 mm | 134.981918 mm | 54.062915 mm | 213.552915 mm | 1.582085 | 4.746970 |
| 290.00 mm | 289.976889 mm | 66.023940 mm | 237.193940 mm | 0.817975 | 5.945915 |

Sequential reduced-angle tracing and an independent ABCD multiplication give the same first-order matrices to better
than $10^{-12}$ in all three states. The EFL residuals relative to the patent's 72.40, 134.99, and 290.00 mm state labels
are -0.00109, -0.00808, and -0.02311 mm, respectively.

Using the patent figure's $Y = 21.64$ mm image height gives full fields of 33.2828°, 18.2161°, and 8.5358°, consistent
with the patent's rounded endpoint field values. The surface-by-surface Petzval sum, evaluated as
$\phi/(n n')$, is **+0.0008049076 mm⁻¹**, corresponding to a reciprocal magnitude of about 1242.38 mm.

The reconstructed d26 values agree with the independently calculated paraxial BFDs to less than $5\times10^{-7}$ mm after
storage rounding. Expressed relative to the fixed L2 datum, the three reconstructed infinity image planes span only
0.02898 mm, which is consistent with accumulated 0.01 mm rounding in the published variable-spacing table.

These checks support the transcription and the disclosed d26/stop modeling choices. They do not turn the inferred stop
diameter, inferred semi-diameters, production correlation, or absent finite-focus prescription into patent-published
facts.

## Sources / References

1. **JP 2007-003600 A**, Canon Inc., Takashi Shirasuna, *Zoom lens and imaging apparatus having the same*.
   Numerical Example 1 prescription and zoom table: patent pp. 11-12; conditional table: p. 14; optical section:
   Fig. 1 on p. 16. Relevant discussion includes ¶0031-¶0034, ¶0041-¶0042, ¶0059, ¶0062, and ¶0090-¶0091.
2. **Canon Camera Museum — EF70-300mm f/4-5.6 IS USM**,
   <https://global.canon/en/c-museum/product/ef388.html>. Used for production identity, October 2005 marketing date,
   15-element/10-group construction, one UD element, eight-blade diaphragm, 1.5 m closest focus, 0.26× maximum
   magnification, 58 mm filter diameter, and marketed Image Stabilizer information.

## September 2026 geometry and catalog audit

Figure 1 on page 16 was inspected at 600 dpi. The final L6 doublet has optical rims near 13.5 mm; surfaces 24–26 now share a 13.4 mm semi-diameter instead of 11.5 mm. Other rims remain within drawing uncertainty and are retained. The S-BAL35 catalog-equivalent curve resolves E13 (patent 589611), giving 15/15 coefficient-backed glass media without identifying a production supplier or changing patent nd/νd.

Canon documents one UD element on its [Camera Museum page](https://global.canon/en/c-museum/product/ef388.html). E7, the unique νd = 81.5 position, now carries an `inferred` APD/UD diagram tag. Its placement is a production correlation; no patent partial-dispersion value or measured APO performance is implied.
