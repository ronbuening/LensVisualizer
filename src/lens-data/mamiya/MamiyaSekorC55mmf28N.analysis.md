## Patent Reference and Design Identification

**Patent:** JP S55-45883 B2<br>
**Application / laid-open publication:** JP S54-107336 (JP1979-107336)<br>
**Filed:** 10 February 1978<br>
**Laid open:** 23 August 1979<br>
**Published as examined patent:** 20 November 1980<br>
**Inventor:** Yusuke Arisaka<br>
**Applicant:** Mamiya Camera Co., Ltd.<br>
**Title:** Retrofocus-type wide-angle lens<br>
**Embodiment analyzed:** Example 1

The prescription is Example 1 of the Japanese publication supplied for transcription. The patent gives an all-spherical
retrofocus lens normalized to $f=100$, with an aperture ratio of 1:2.8 and a full field of $66^\circ$. The data file
applies a uniform scale factor of $s=0.55$, producing a computed design focal length of 54.999905 mm. Patent radii,
center thicknesses, and air spacings are scaled by this factor. The exact image plane and the modeled stop, focus, and
semi-diameter quantities are then solved in the resulting 55 mm coordinate system rather than transcribed from the
patent. Refractive indices and Abbe numbers are unchanged. Because the design has no aspherical surfaces, no polynomial
coefficient transformation is required. The general scaling rule would be

$$A_{p,\mathrm{scaled}}=\frac{A_{p,\mathrm{patent}}}{s^{p-1}},$$

but it is not applied to this all-spherical prescription.

The selected production correlation is the MAMIYA-SEKOR C 55mm f/2.8 N. The identification is based on convergent
features rather than a manufacturer statement that names this patent:

1. The patent example and the production lens both use eight elements in six air-separated groups.
2. Scaling the patent's $f=100$ prescription by 0.55 gives an independently traced EFL of 54.999905 mm while preserving
   the published f/2.8 aperture.
3. The scaled prescription gives a 64.7206° rectilinear full field across the nominal 56 × 41.5 mm frame, consistent with
   the manufacturer's rounded 65° specification.
4. A constrained rigid-unit focus solution at the manufacturer's 0.45 m minimum distance gives 0.178736× magnification,
   consistent with the published 0.18× value.
5. The manufacturer's M645 literature identifies the 55mm f/2.8 N as an eight-element, six-group lens for the Mamiya
   645 system and places the N-series version in the M645 Super-era system.

This agreement supports the fixed production assignment used here, but it is not presented as documentary manufacturer
confirmation of the patent relationship.

The source table contains one important transcription issue. Patent spacing $d_{11}$ is printed as 10.0, not 1.0; the
10.0 reading reproduces the published thickness sum and the patent's first-order results. It becomes 5.5 mm after
scaling. The patent's separate third-order table also contains an unresolved internal contradiction: its fourteen printed
P-column entries sum to 0.1678, whereas the printed total is 0.1274. By comparison, the printed-row sums for columns
III and V differ from their printed totals by only 0.0002, which is consistent with row rounding. The much larger P-column
discrepancy is retained as unresolved; neither P value is silently altered in the model.

## Optical Architecture

The lens is an eight-element, six-group retrofocus wide-angle prime with fourteen refracting surfaces and one aperture
stop. Its air-separated power sequence, using standalone or cemented-group focal lengths in air, is approximately:

$$-65.04,\quad +189.42,\quad +77.87,\quad +68.30,\quad -71.96,\quad +85.24\ \mathrm{mm}.$$

These values describe isolated groups, not additive in-situ contributions. The complete prescription has a computed EFL
of 54.999905 mm. Its back focal distance is 60.786417 mm, so $\mathrm{BFD}/\mathrm{EFL}=1.10521$. It therefore meets
the project definition of a retrofocus lens. The first-surface-to-image track is 122.154867 mm, giving
$\mathrm{TL}/\mathrm{EFL}=2.22100$; it is not telephoto under the criterion $\mathrm{TL}/\mathrm{EFL}<1$.

The large front negative meniscus L1 establishes the long rear clearance characteristic of the architecture. A weak
positive meniscus L2 and the positive-net cemented pair L3–L4 then rebuild converging power ahead of the iris. The stop
lies in the large air space after L4. Behind it, positive meniscus L5 is followed by the negative-net cemented pair L6–L7
and a final positive meniscus L8. This alternating rear power distribution allows the image-side section to complete the
required convergence while providing opposing powers for correction.

The architecture is entirely spherical. It contains no aspheres, diffractive surfaces, mirrors, filters, sensor cover
plates, inactive dummy planes, or flare-cutter planes. No omitted plate requires an air-equivalent rear-spacing
correction.

## Element-by-Element Analysis

### L1 — Negative Meniscus

**$n_d=1.51633$, $\nu_d=64.1$. Glass: 516641 catalog-equivalent class, vendor unresolved. Standalone
$f=-65.042872$ mm.**

L1 is the large front negative meniscus. Its negative power and substantial diameter accept the wide field while moving
the principal-plane structure forward relative to the image plane. This is the element most directly associated with the
prescription's retrofocus clearance. The standalone focal length describes L1 in air; its influence in the assembled lens
depends on the long following air gap and the positive groups behind it.

### L2 — Positive Meniscus

**$n_d=1.58144$, $\nu_d=40.7$. Glass: 581407 catalog-equivalent class, vendor unresolved. Standalone
$f=+189.415330$ mm.**

L2 is a weak positive meniscus placed after the largest internal air space. Its curvature is mild on the object-side
surface and stronger on the image-side surface. It begins restoring positive power without abruptly reversing the wide
ray bundle established by L1. The patent's second condition relates its focal length to that of the following cemented
pair; the computed ratio $f_2/f_3=2.43259$ lies within the specified 1.5–4.0 interval.

### L3 — Biconvex Positive Member of D1

**$n_d=1.77250$, $\nu_d=49.6$. Glass: 773496 catalog-equivalent class, vendor unresolved. Standalone
$f=+20.570317$ mm.**

L3 is the strongest standalone positive element in the lens and forms the front member of cemented doublet D1. Its high
index permits substantial positive power with comparatively moderate surface curvature. In isolation its focal length is
+20.57 mm, but that value must not be confused with the net focal length of the complete cemented pair.

### L4 — Biconcave Negative Member of D1

**$n_d=1.56732$, $\nu_d=42.8$. Glass: 567428 catalog-equivalent class, vendor unresolved. Standalone
$f=-23.213313$ mm.**

L4 is cemented directly to L3 at surface 6. Its strong negative power opposes L3, leaving D1 with a much weaker positive
net focal length of +77.865735 mm in air. The differing indices, Abbe numbers, and opposite powers provide first-order
chromatic balancing within the pair, but the available $n_d/\nu_d$ data do not support a claim of anomalous partial
dispersion or apochromatic correction.

### L5 — Positive Meniscus

**$n_d=1.69350$, $\nu_d=53.2$. Glass: 694532 catalog-equivalent class, vendor unresolved. Standalone
$f=+68.296137$ mm.**

L5 is the first refracting element behind the stop. Its positive meniscus shape resumes convergence after the iris and
forms the first part of the rear correction block. Because it is air separated, its standalone and group focal lengths
are the same; its actual system effect nevertheless depends on the stop position and the negative cemented pair that
follows.

### L6 — Biconcave Negative Member of D2

**$n_d=1.72342$, $\nu_d=38.0$. Glass: 723380 catalog-equivalent class, vendor unresolved. Standalone
$f=-21.668451$ mm.**

L6 is a high-index, relatively dispersive negative element and the front member of cemented doublet D2. It supplies the
strong negative component of the rear section. The patent explicitly constrains the index difference between L6 and L7;
the modeled value $n_6-n_7=0.20709$ lies inside the required 0.15–0.35 range.

### L7 — Biconvex Positive Member of D2

**$n_d=1.51633$, $\nu_d=64.1$. Glass: 516641 catalog-equivalent class, vendor unresolved. Standalone
$f=+36.308629$ mm.**

L7 is cemented to L6 at surface 11. Its positive power and higher Abbe number oppose the negative, lower-Abbe L6. The
complete D2 cemented pair remains negative, with a computed net focal length of −71.964903 mm in air. This distinction is
important: L7 is positive as a standalone element, D2 is negative as a cemented group, and the group's influence in the
full prescription is further modified by the adjacent positive menisci.

### L8 — Positive Meniscus

**$n_d=1.69350$, $\nu_d=53.2$. Glass: 694532 catalog-equivalent class, vendor unresolved. Standalone
$f=+85.238773$ mm.**

L8 is the final positive meniscus. It follows a very short air gap after D2 and supplies the last positive group before
the long image-space distance. Its image-side surface is comparatively strong, completing convergence toward the image
plane while working against the negative power of D2.

## Glass Identification and Selection

The patent publishes only d-line refractive indices and Abbe numbers. It does not identify manufacturers, trade names,
melts, line indices, or partial-dispersion values. Current catalog searches find positional equivalents for all six
coordinate pairs, but those matches do not establish the historical glass vendor or composition. The data therefore uses
six-digit coordinate classes rather than vendor-specific names.

| Glass class | $n_d$ | $\nu_d$ | Elements | Use in the prescription |
|---|---:|---:|---|---|
| 516641 | 1.51633 | 64.1 | L1, L7 | low-index, higher-Abbe negative front meniscus and positive D2 member |
| 581407 | 1.58144 | 40.7 | L2 | weak positive meniscus ahead of D1 |
| 773496 | 1.77250 | 49.6 | L3 | high-index positive member of D1 |
| 567428 | 1.56732 | 42.8 | L4 | negative member of D1 |
| 694532 | 1.69350 | 53.2 | L5, L8 | matching positive menisci in the rear half |
| 723380 | 1.72342 | 38.0 | L6 | high-index, lower-Abbe negative member of D2 |

The two cemented pairs use opposite powers and different dispersions. D1 combines a strong positive L3 with
a strong negative L4 and remains positive as a pair. D2 combines a negative L6 with a positive L7 and remains negative as
a pair. This is consistent with ordinary achromatic balancing, but no APO, anomalous-dispersion, or secondary-spectrum
claim is made. The data file contains no $n_C$, $n_F$, $n_g$, or $\Delta P_{gF}$ values, and none can be recovered from the
selected patent.

## Focus Mechanism

The patent publishes only the infinity prescription. The manufacturer gives a minimum focusing distance of 0.45 m and a
maximum magnification of 0.18×, but it does not provide a close-focus spacing table for this lens. The same manufacturer
literature explicitly identifies floating systems for several other M645 lenses without identifying the 55mm as one of
them. That omission supports, but does not prove, a unit-focus interpretation. The data therefore uses a
**CONSTRAINED_RECONSTRUCTION** based on rigid unit focus rather than inventing undocumented internal group movement.

All internal spacings remain fixed. Only the rear air distance from surface 14 to the fixed film plane changes:

| State | Rear air distance | Change from infinity |
|---|---:|---:|
| Infinity | 60.786417 mm | 0 mm |
| 0.45 m | 70.616867 mm | +9.830450 mm |

The finite-conjugate solution treats the manufacturer's 0.45 m distance as object plane to film plane. It produces a
magnification magnitude of 0.178736×, close to the rounded 0.18× specification. This state is a code-solved production
model, not a patent-published focus position and not evidence of hidden internal focusing.

## Conditional Expressions

Example 1 satisfies all five patent conditions after scaling. Uniform scaling changes dimensional focal lengths and radii
but leaves these normalized ratios unchanged.

| Patent condition | Evaluated value | Required interval | Result |
|---|---:|---:|---|
| $f<|f_1|<1.4f$, $f_1<0$ | $|f_1|/f=1.182600$ | 1.0–1.4 | Pass |
| $1.5f_3<f_2<4f_3$ | $f_2/f_3=2.432589$ | 1.5–4.0 | Pass |
| $0.15<n_6-n_7<0.35$ | 0.207090 | 0.15–0.35 | Pass |
| $f<r_{11}<5f$ | $r_{11}/f=1.761543$ | 1.0–5.0 | Pass |
| $1.3/f<1/f_4+1/f_6<1.6/f$ | $f(1/f_4+1/f_6)=1.450560$ | 1.3–1.6 | Pass |

## Verification Summary

Independent height/reduced-angle and height/angle matrix traces agree to $4.44\times10^{-16}$ in their system matrices.
The data arrays give an EFL of 54.999905 mm, an infinity BFD of 60.786417 mm, and a computed f-number of
2.800000000007. The modeled 645 full field is 64.720610°, consistent with the manufacturer's rounded 65° figure.

The stop is not numerically located in the patent. Its modeled station is inferred from Figure 1 at 67.6% of the air gap
from surface 7 to surface 8. The resulting split is 6.288997 mm before the stop and 3.014253 mm after it. A physical stop
semi-diameter of 10.402161 mm is solved to reproduce f/2.8; the corresponding entrance-pupil semi-diameter is
9.821412 mm. These are modeling results, not published mechanical dimensions.

The patent likewise gives no clear semi-diameters. The values in the data file are inferred from exact spherical ray
tracing, the published 32.9° aberration field, Figure 1 proportions, and the geometry constraints used by the viewer. The
most restrictive modeled air lens is the gap between surfaces 9 and 10, which retains 0.061205 mm of calculated rim
clearance and requires the disclosed `gapSagFrac: 0.95`. These semi-diameters represent a validated optical model, not a
claim about production barrel machining.

The surface-by-surface Petzval calculation, using $\phi/(n n')$, sums to 0.002316052 mm⁻¹, with a reciprocal of
431.769186 mm under the implemented sign convention. This paraxial sum is not substituted for measured tangential or
sagittal field-curvature performance.

No aspherical coefficient, spectral line index, partial-dispersion value, internal close-focus movement, cover plate, or
dummy surface has been introduced. The modeled quantities that are not directly published—the production scale,
production correlation, exact paraxial BFD, stop geometry, semi-diameters, and close-focus state—are kept distinct from
source facts.

## Sources

1. **JP S55-45883 B2**, “Retrofocus-type wide-angle lens,” especially Example 1 on patent pages 11–12, the continued
   first-order and third-order tables on pages 12–13, and Figure 1 on page 16 of the printed publication. The job-card
   identifier JP1979-107336 is the laid-open publication of the same application.
2. **Mamiya-Sekor C Interchangeable Lenses / M645 Super system literature**, manufacturer-origin scan, especially the
   lens specification table and system chart identifying the 55mm f/2.8 N, Mamiya 645 mount, eight-element/six-group
   construction, 65° field, 0.45 m minimum focus, and 0.18× maximum magnification.
3. **OHARA Optical Glass — Glass Type / comparative glass tables**, used to verify current catalog coordinates such as
   516641, 581407, 567428, and 694532 without assigning those modern catalog names to the historical Mamiya melts.
4. **HIKARI Optical Glass J-series catalog (Nikon Business)**, used as an independent current-catalog check for coordinate
   classes including 773496, 694532, and 723380; these matches likewise do not establish historical vendor identity.
