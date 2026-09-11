## Patent Reference and Design Identification

**Patent:** US 2015/0168694 A1\
**Application Number:** US 14/635,536\
**Priority:** September 5, 2012 (JP 2012-194655)\
**Filed:** March 2, 2015\
**Published:** June 18, 2015\
**Inventors:** Takashi Suzuki; Kenichi Sato; Taiga Noda\
**Applicant:** FUJIFILM Corporation\
**Title:** *Wide Angle Lens and Imaging Apparatus*\
**Embodiment analyzed:** Example 1

The modeled prescription is the project-selected correlation between Example 1 of US 2015/0168694 A1 and the
production FUJIFILM FUJINON XF 14mm f/2.8 R. The patent does not identify Example 1 as that commercial lens, and
FUJIFILM's product literature does not identify the patent. The correlation is therefore an author/modeling inference,
held fixed for this analysis rather than a manufacturer-confirmed identification.

Several independent features converge on that correlation. Example 1 contains ten elements in seven air-separated
physical groups, with two double-sided aspherical elements; FUJIFILM specifies the production lens as ten elements in
seven groups with two aspherical and three ED elements. The patent gives a 14.47 mm nominal focal length, FNo. 2.88,
maximum image height Y = 14.2 mm, and an 89.0° full field, while the production lens is marketed as 14 mm f/2.8 for the
Fujifilm X APS-C system. FUJIFILM currently specifies a 90.8° angle of view, a 0.18 m minimum focusing distance measured
from the imaging-sensor plane, and 0.12× maximum magnification. The production lens was released on January 19, 2013,
after the patent family's September 2012 priority date and before the 2015 US publication.

The design values and marketed values are kept separate. The data file stores a computed design EFL of
14.466432570923 mm and uses the patent/model FNo. 2.88 for stop and pupil geometry; the catalog-facing values remain
14 mm and f/2.8. No uniform scaling is applied.

## Optical Architecture

Example 1 is a negative-leading wide-angle lens, not a conventional SLR retrofocus system. The patent itself contrasts
its architecture with conventional retrofocus wide angles and describes the design as G1 negative, G2 positive, an
aperture stop, then G3 positive (¶0044, ¶0048–¶0053). Independent subsystem calculations give patent-group focal
lengths of -11.190273136 mm for G1, +18.554646280 mm for G2, and +23.750198911 mm for G3. The complete system EFL is
14.466432571 mm.

The architecture contains ten physical glass elements in seven air-separated groups: L11; L12; cemented L21+L22;
cemented L31+L32; L33; L34; and cemented L35+L36. G1 comprises the two negative menisci L11 and L12. G2 is the
positive cemented doublet L21+L22. The stop follows G2. G3 then contains a near-stop cemented pair L31+L32, the positive
singlet L33, the double-sided aspheric positive meniscus L34, and the image-side cemented pair L35+L36.

The arrangement distributes chromatic correction around the stop rather than forcing the front negative section to
carry the full burden. The patent places one cemented pair before the stop and two after it, describing the near-stop
rear pair as useful for longitudinal chromatic correction and the far-rear pair as useful for lateral chromatic
correction (¶0051–¶0053). The aspheric elements are likewise split between the negative front group and the positive
rear group: L12 is associated with distortion control in G1, while L34 is positioned toward the rear to address
astigmatism and field curvature (¶0054, ¶0062–¶0063).

Under the project's classification rules, the system is neither telephoto nor retrofocus: the normalized
first-vertex-to-image track divided by EFL is 4.911746939, while BFD/EFL is 0.919746858 and BFD is shorter than EFL.
Accordingly, “negative-leading wide-angle” is the more precise architectural description here.

The patent includes an optional plane-parallel member PP near the image plane to represent cover/filter glass
(¶0045). That plate is not part of the modeled lens. Source surfaces 19–20 are omitted. The modeled surface-18 rear
spacing is the Gaussian air BFD of the rounded active prescription, 13.305455901 mm. Directly air-converting the
published 11.46 mm air gap plus the 2.80 mm PP at nd = 1.51680 gives 13.305991561 mm; the 0.000535661 mm difference is
below the precision of the rounded source table. The final active lens surface is source surface 18.

## Element-by-Element Analysis

### L11 — Negative Meniscus

**nd = 1.57135, νd = 53.0. Glass: S-BAL3 (OHARA equivalent; 571530 class). Standalone f = -33.620727844 mm.**

L11 is the object-side member of G1 and is a negative meniscus with its convex surface toward the object. Together with
L12 it forms the negative-leading front section required by the patent (¶0047, ¶0092). The patent associates the pair
of front negative menisci with achieving the wide field while controlling distortion and astigmatism without expanding
G1 to a larger lens count (¶0050, ¶0055–¶0056).

The stored S-BAL3 name is a coordinate-compatible OHARA equivalent used for reproducible dispersion modeling. It is not
a claim that the production element was made from OHARA S-BAL3. The patent itself publishes only d-line nd and νd.

### L12 — Neg. Meniscus (2× Asph)

**nd = 1.58312, νd = 59.4. Glass: S-BAL42 (OHARA equivalent; 583594 class). Standalone f = -20.624867328 mm.**

L12 is the second negative meniscus of G1 and is aspherical on both faces, corresponding to source surfaces 3 and 4.
Its stronger isolated negative power complements L11 while the aspheric surfaces give the front group additional
freedom to control off-axis shape errors. The patent specifically identifies an aspheric surface in G1 as advantageous
for distortion correction (¶0054).

The modeled surfaces are labeled 3A and 4A. Their semi-diameters are inferred modeling values rather than patent
apertures; the patent does not publish effective apertures for Example 1.

### L21 + L22 (D1) — Cemented Positive/Negative Pair

**L21:** nd = 1.88299, νd = 40.8. Glass: S-LAH58 (OHARA equivalent; 883408 class). Standalone f =
+11.078896447 mm.\
**L22:** nd = 1.59270, νd = 35.3. Glass: S-FTM16 (OHARA equivalent; 593353 class). Standalone f =
-20.927272876 mm.

L21 is biconvex and positive; L22 is biconcave and negative. They are cemented at source surface 6, which is assigned to
the downstream L22 medium in the data model. The pair constitutes all of G2. The patent describes the positive member at
the object side of G2 as converging the beam emerging from the negative front group so that ray height and associated
aberration generation can be suppressed (¶0057–¶0059).

The standalone focal lengths above describe each physical glass body in air and must not be confused with the bonded
pair's net power. Recomputed as a complete cemented stack in air, D1 has f = +18.554646280 mm. Because G2 consists only
of this pair, that same value is also G2's group-subsystem focal length for the patent's partition.

### L31 + L32 (D2) — Cemented Negative/Positive Pair

**L31:** nd = 1.54072, νd = 47.2. Glass: S-TIL2 (OHARA equivalent; 541472 class). Standalone f =
-17.617411017 mm.\
**L32:** nd = 1.49700, νd = 81.5. Glass: S-FPL51 (OHARA equivalent; 497816 class). Standalone f =
+21.279618663 mm.

D2 is the first optical unit of G3, immediately behind the stop. L31 is biconcave and negative; L32 is a positive
meniscus. The patent places this cemented pair near the stop and attributes that position to longitudinal chromatic
correction (¶0051, ¶0061–¶0062).

Again, component and pair powers differ. The isolated element powers are comparatively strong, but the complete D2
cemented stack is only weakly negative, with a recomputed net focal length of -101.153529550 mm. It therefore functions
inside the broader positive G3 rather than behaving as an independent strongly negative rear group.

L32 carries a high Abbe number, νd = 81.5. In the data file, its S-FPL51-equivalent dispersion curve is a
catalog-derived modeling property, not patent-published spectral data or a production-vendor identification.

### L33 — Biconvex Positive

**nd = 1.59522, νd = 67.7. Glass: S-FPM2 (OHARA equivalent; 595677 class). Standalone f =
+20.190486149 mm.**

L33 is the positive singlet between D2 and the rear aspheric element L34. The patent states that L33 can share positive
refractive power with L32 and associates that division of power with spherical-aberration correction (¶0062). Its
moderately high νd also keeps the additional positive power from carrying the same dispersion burden as a lower-Abbe
crown would.

The production literature's “three ED elements” count is a product specification. The mapping from that marketing count
to individual patent elements is not explicitly published by FUJIFILM; the project therefore treats L33's S-FPM2 name
as a catalog-equivalent modeling annotation, not as manufacturer confirmation of a particular ED glass.

### L34 — Pos. Meniscus (2× Asph)

**nd = 1.58312, νd = 59.4. Glass: S-BAL42 (OHARA equivalent; 583594 class). Standalone f =
+44.516479576 mm.**

L34 is a positive meniscus and is aspherical on both faces, corresponding to source surfaces 14 and 15. The patent places
this aspheric element second from the image side within G3 before the final cemented pair and states that moving the
aspheric correction farther from the stop improves its leverage on off-axis aberrations, particularly astigmatism and
field curvature (¶0061–¶0063).

The modeled labels 14A and 15A preserve the patent's paraxial radii while converting the patent-specific conic convention
to the project's standard form. As with the front asphere, its semi-diameters are inferred from the model and figure,
not transcribed from a patent aperture table.

### L35 + L36 (D3) — Cemented Negative/Positive Pair

**L35:** nd = 1.67300, νd = 38.1. Glass: S-NBH52 (OHARA equivalent; 673382 class; NR). Standalone f =
-16.773600978 mm.\
**L36:** nd = 1.49700, νd = 81.5. Glass: S-FPL51 (OHARA equivalent; 497816 class). Standalone f =
+22.899663550 mm.

L35 is biconcave and negative, while L36 is biconvex and positive. Their cemented interface is source surface 17. This
is the most image-side optical unit in the active lens. The patent deliberately places this cemented pair far from the
stop and close to the image plane for lateral chromatic correction (¶0051, ¶0060–¶0062). It also specifies a high-Abbe
positive member in this position through conditional expression (4), and Example 1 uses νd = 81.5 for L36.

The pair should not be described by adding the standalone powers of L35 and L36. Recomputed as the complete bonded D3
stack in air, it is weakly negative, f = -129.919728119 mm. The full G3 remains positive because D3 works in combination
with D2, L33, L34, and their internal spacings; the G3 group-subsystem focal length is +23.750198911 mm.

## Glass Identification and Selection

The patent does not identify glass manufacturers or catalog names. It supplies d-line nd and νd coordinates only. The
modeled `glass` strings therefore use coordinate-compatible OHARA equivalents, while the original patent coordinates
remain the prescription authority. Runtime dispersion uses the compatible catalog curves directly. Copied catalog
nC/nF/ng and catalog-derived dPgF overrides were removed during the integration audit; they are not patent measurements.

| Modeled glass | Patent nd | Patent νd | Elements |
| --- | ---: | ---: | --- |
| S-BAL3 equivalent | 1.57135 | 53.0 | L11 |
| S-BAL42 equivalent | 1.58312 | 59.4 | L12, L34 |
| S-LAH58 equivalent | 1.88299 | 40.8 | L21 |
| S-FTM16 equivalent | 1.59270 | 35.3 | L22 |
| S-TIL2 equivalent | 1.54072 | 47.2 | L31 |
| S-FPL51 equivalent | 1.49700 | 81.5 | L32, L36 |
| S-FPM2 equivalent | 1.59522 | 67.7 | L33 |
| S-NBH52 equivalent | 1.67300 | 38.1 | L35 |

The strongest chromatic pattern is the use of high-Abbe positive glass in G3 against lower-Abbe negative partners.
L32 and L36 both carry νd = 81.5, and L36 is the element explicitly governed by the patent's conditional expression (4).
L35/L36 then places the low-dispersion positive member at the image-side cemented pair where the patent seeks leverage
against lateral chromatic aberration. L31/L32 supplies a second positive/negative dispersion pairing nearer the stop,
where the patent emphasizes longitudinal chromatic correction.

Catalog curves provide a wavelength-dependent model without establishing a production supplier or APO designation.

## Focus Mechanism

The focus state is **CONSTRAINED_RECONSTRUCTION**. The patent does not publish a close-focus spacing table for Example 1.
It does, however, state that focusing from infinity toward proximity is preferably performed by moving only G3 toward
the object (¶0084). FUJIFILM specifies a 0.18 m minimum shooting distance measured from the image-sensor plane and a
rounded maximum magnification of 0.12×.

The modeled close-focus state therefore solves one degree of freedom: G3 translates as a rigid group toward the object
while G1, G2, the stop, and the image plane remain fixed. The code-solved travel from infinity to 0.18 m is
1.780420252 mm. The two variable air spaces change as follows:

| Spacing | Infinity | Reconstructed 0.18 m | Change |
|---|---:|---:|---:|
| STO → G3 front | 4.000000000 mm | 2.219579748 mm | -1.780420252 mm |
| Rear surface 18 → image plane | 13.305455901 mm | 15.085876153 mm | +1.780420252 mm |

The sum of those two spaces is conserved, so the image plane remains fixed while G3 translates. Independent paraxial
tracing of the reconstructed state gives |m| = 0.122940114, close to FUJIFILM's rounded 0.12× specification. This
agreement is a validation of the constrained reconstruction, not evidence that FUJIFILM published these exact internal
spacings or this exact travel.

No intermediate focus positions are claimed. The data file linearly interpolates only between the modeled infinity and
close endpoints required by the visualization.

## Aspherical Surfaces

Example 1 has four aspherical surfaces: 3A and 4A on L12, and 14A and 15A on L34. The patent writes the conic term as

$$
Z_d = \frac{C h^2}{1 + \sqrt{1-K_s C^2 h^2}} + \sum_{m=3}^{20} A_m h^m.
$$

Here $K_s$ denotes the coefficient called $K$ in the patent, to distinguish it from LensVisualizer's standard conic
constant. LensVisualizer uses the denominator containing $(1+K)$, so $K = K_s - 1$. Example 1 gives $K_s = 0$ on all
four surfaces; the data file therefore uses $K=-1$ for 3A, 4A, 14A, and 15A. This is a convention conversion, not a
correction to the patent. The polynomial includes both odd and even
powers of radial height. Because $h$ is radial height, the odd powers remain rotationally symmetric.

The coefficients below are the patent values retained in the data file. Units are mm^(1-m) for coefficient A_m.

| Coefficient | 3A | 4A | 14A | 15A |
|---|---:|---:|---:|---:|
| A3 | 1.0465349e-3 | -2.0064589e-4 | 6.6209788e-4 | 1.8582591e-3 |
| A4 | -1.4397107e-3 | 8.7627361e-4 | -3.0527109e-4 | -2.2581890e-3 |
| A5 | 1.0398983e-3 | -4.6280566e-4 | -3.7260454e-4 | 1.3297504e-3 |
| A6 | -3.1920537e-4 | 5.4357538e-5 | 5.0663981e-4 | -2.6424215e-4 |
| A7 | 9.8764948e-6 | 5.3965805e-5 | -2.4264898e-4 | -5.0654566e-5 |
| A8 | 2.0049033e-5 | -1.8881007e-5 | 3.8450732e-5 | 2.8177517e-5 |
| A9 | -4.5234440e-6 | -1.2980213e-6 | 9.5922739e-6 | -8.5212341e-7 |
| A10 | -1.2044515e-7 | 1.4300798e-6 | -4.7789385e-6 | -1.1794696e-6 |
| A11 | 1.6644987e-7 | -9.8782930e-8 | 4.4093736e-7 | 1.0703228e-7 |
| A12 | -1.5441504e-8 | -4.7407088e-8 | 1.0955244e-7 | 3.2734368e-8 |
| A13 | -2.0089199e-9 | 6.8759162e-9 | -2.6889472e-8 | -4.4313123e-9 |
| A14 | 4.2314856e-10 | 6.8689587e-10 | 5.1554995e-10 | -5.5463438e-10 |
| A15 | -4.4798993e-12 | -1.7107481e-10 | 4.1805549e-10 | 1.0524468e-10 |
| A16 | -4.0229593e-12 | -1.2623540e-12 | -4.3160704e-11 | 4.0137487e-12 |
| A17 | 2.6771169e-13 | 1.9335761e-12 | -6.5726519e-13 | -1.3923536e-12 |
| A18 | 8.8641130e-15 | -6.5410638e-14 | 3.3491667e-13 | 2.3442922e-14 |
| A19 | -1.4680780e-15 | -8.3761467e-15 | -1.8401488e-14 | 7.1987544e-15 |
| A20 | 4.1786408e-17 | 4.7807633e-16 | 2.8240933e-16 | -3.4821496e-16 |

The front pair 3A/4A supplies the aspheric correction the patent associates with distortion control in G1 (¶0054).
The rear pair 14A/15A lies substantially farther from the stop and is associated by the patent with astigmatism and
field-curvature correction (¶0062–¶0063). No aspheric departure is quoted here because the patent does not publish
aperture heights; the data file's surface semi-diameters are inferred modeling values.

## Chromatic Correction Strategy

The patent's chromatic strategy is structural as well as material. It distributes three cemented pairs across both sides
of the stop: D1 in G2, D2 near the stop in G3, and D3 at the image-side end of G3. The patent states that the rear pair
near the stop is advantageous for longitudinal chromatic correction, while the far-rear pair is advantageous for lateral
chromatic correction; the corresponding pair ahead of the stop helps balance those corrections across the system
(¶0051–¶0053).

The glass palette reinforces that layout. In D2 and D3, the positive elements L32 and L36 have νd = 81.5, substantially
higher than their negative partners L31 (νd = 47.2) and L35 (νd = 38.1). L36 is also the positive element targeted by
conditional expression (4), which requires ν3p > 75. The manufacturer separately markets the production XF14mmF2.8 R
as using three ED elements, but the patent does not label individual Example 1 elements as “ED,” and the manufacturer
does not publish a patent-to-element map. The data file's catalog-equivalent spectral fields should therefore be treated
as a reproducible modeling choice rather than as a production bill of materials.

No APO designation is inferred. The compatible catalog curves provide wavelength-dependent dispersion beyond
a simple Abbe approximation, but this does not establish the spectral
performance or glass sourcing of the manufactured lens independently of the patent's own aberration plots.

## Conditional Expressions

The patent defines five design conditions and publishes Example 1 values in Table 9. Independent recomputation from the
modeled prescription gives the following values. Small differences from Table 9 are consistent with the patent's stated
rounding of tabulated prescription and summary values.

| Condition | Patent requirement | Recomputed Example 1 | Patent Table 9 | Result |
|---|---|---:|---:|---|
| (1) | 1.3 < f3/f < 2.0 | 1.641745385 | 1.641 | Pass |
| (1), preferred | 1.5 < f3/f < 1.8 | 1.641745385 | — | Pass |
| (2) | 0.4 < Y/f3 < 0.9 | 0.597889729 | 0.598 | Pass |
| (2), preferred | 0.5 < Y/f3 < 0.8 | 0.597889729 | — | Pass |
| (3) | 0.8 < BF/f < 1.3 | 0.919746858 | 0.919 | Pass |
| (4) | 75 < ν3p | 81.5 | 81.5 | Pass |
| (5) | -0.3 < f/f12 < 0.5 | -0.012324587 | -0.012 | Pass |

For these computations, f = 14.466432571 mm, f3 = +23.750198911 mm, and the combined G1+G2 focal length is
f12 = -1173.786431659 mm. The near-afocal G1+G2 combination makes f12 unusually sensitive to the patent's rounded
surface data; the patent's Table 9 value is -1175.35 mm, so the small ratio difference does not justify changing a
source radius, thickness, or index.

## Verification Summary

Independent sequential y–ν tracing and an ABCD-matrix calculation agree exactly at the script's floating-point
cross-check. From the final TypeScript arrays, the infinity model gives EFL = 14.466432571 mm and air BFD =
13.305455901 mm. The patent's corresponding rounded values are 14.47 mm and 13.30 mm. Direct conversion of the rounded
PP row gives 13.305991561 mm, differing from the focus-normalized model gap by only 0.000535661 mm. The image-height/EFL
check gives a full paraxial field of 88.934990°, consistent with the patent's 89.0° value.

The surface-by-surface Petzval sum, using φ/(n·n′), is +0.009445565781 mm⁻¹. This scalar sign and magnitude are reported
as a paraxial result only; no best-fit focal-surface radius is inferred from it.

The patent does not publish a stop diameter. With the modeled FNo. 2.88, the inferred entrance-pupil semi-diameter is
2.511533432 mm and the corresponding physical stop semi-diameter is 4.142787701 mm. That stop size is therefore a
model-derived aperture constraint, not a patent dimension.

Surface semi-diameters are likewise inferred. They were selected to contain the modeled ray envelopes while respecting
the current geometry constraints and the proportions of Fig. 1. The locally verified maximum rim-slope angle is
62.913324340° at surface 2, the minimum computed element edge thickness is 2.066032172 mm at L22, and the most restrictive
shared-band air-gap check is the 0.15 mm gap between 15A and 16. These dimensions are modeling choices and should not be
attributed to the patent or manufacturer.

No patent numerical correction was required. Radius signs, d-line indices, Abbe numbers, thicknesses, and A3–A20
coefficients remain as published after reading the rendered Example 1 tables. The only transformations are explicit
modeling conventions: source PP is omitted with the rear air spacing set to the Gaussian BFD of the rounded active
prescription, the patent's source-convention K is converted to project K, close focus is a constrained reconstruction,
and semi-diameters are inferred. No scale transformation is
applied, so the aspheric coefficients retain their native Example 1 magnitudes.

## Sources / References

1. US 2015/0168694 A1, *Wide Angle Lens and Imaging Apparatus*, FUJIFILM Corporation, especially Fig. 1, ¶0044–¶0066,
   ¶0081–¶0102, and Tables 1, 2, and 9.
2. FUJIFILM, “XF14mmF2.8 R” specifications, current Japanese X-series lens specifications:
   https://www.fujifilm-x.com/ja-jp/products/lenses/xf14mmf28-r/specifications/
3. FUJIFILM, X-mount lens/accessory catalog, specification table for XF14mmF2.8 R:
   https://dl.fujifilm-x.com/ja-jp/products/brochure/x-mount-lens_accessory_202412.pdf
4. FUJIFILM Mall Japan, XF14mmF2.8 R product page, including release date and production specifications:
   https://mall-jp.fujifilm.com/shop/g/g16276481/
5. OHARA, optical-glass catalog resources used for the coordinate-compatible equivalents and line-index model:
   https://oharacorp.com/glass-type/s-fpm-s-bal/
6. OHARA, S-LAH optical glass:
   https://oharacorp.com/glass-type/optical-glass/s-lah/
7. OHARA, S-FTM16:
   https://oharacorp.com/glass/s-ftm16/
8. OHARA, S-TIL optical glass:
   https://oharacorp.com/glass-type/optical-glass/s-til/
9. OHARA, S-NBH optical glass:
   https://oharacorp.com/glass-type/s-nbh/
10. OHARA, detailed optical-glass data used for S-FPL51 and line-index checks:
    https://oharacorp.com/wp-content/uploads/2024/02/all-detailed-data-20240131.pdf


## Integration Audit — 2026-09-11 UTC

Inspected the exact local US 2015/0168694 A1, PDF page 2, Fig. 1 at 600 dpi; screening crop `0.26,0.265,0.695,0.43`. Retained the existing SDs: optical rims agree within approximately 15%, with small differences constrained by the rear cemented-pair clearance. All 10 elements use compatible catalog dispersion.

Display name checked against the manufacturer product designation; the existing FUJINON XF name, aperture and R/LM/OIS/WR suffixes are correct. Structured patent assignee metadata uses the existing canonical `Fujifilm Corporation` spelling.


## Diagram and Spectral Review — 2026-09-11 UTC

Rechecked the local section against Fig. 1. The stepped cemented G2 rim differs from a single shared clear aperture;
its source outline is not evidence for enlarging both cemented members to the same mechanical diameter. SDs are retained.
L32, L33 and L36 now carry inferred APD tags from their compatible S-FPL51/S-FPM2 catalog curves (approximately
+0.03074/+0.01431 dPgF). These are model inferences, not patent spectral measurements or production supplier claims.
No catalog-derived spectral overrides are reintroduced.

The fixed-image-plane movement profile confirms only G3 moves objectward, by 1.780420 mm, from infinity to close.
G1, G2 and the stop remain fixed. Source element labels and focus ordering are correct.
