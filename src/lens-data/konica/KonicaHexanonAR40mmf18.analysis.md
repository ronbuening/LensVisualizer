## Patent Reference and Design Identification

**Patent:** JP1979-030821 (特開昭54-30821 / JPS54-30821A)\
**Application Number:** 昭52-73881\
**Filed:** 1977-06-23\
**Published:** 1979-03-07\
**Inventor:** Toshiko Shimokura\
**Applicant:** Konishiroku Photo Industry Co., Ltd.\
**Title:** Semi-wide Angle Lens (準広角レンズ)\
**Embodiment analyzed:** Example 1 (第1実施例; Fig. 1(A))

The selected prescription is Example 1 of JP1979-030821. The Japanese source gives the example in normalized form with
$f=1$, an aperture of F1.8, a full field angle of $2\omega=56^\circ$, and a back focal distance of
$f_B=0.8464f$ (JP1979-030821, PDF p. 4). Figure 1(A) shows the corresponding five-group, six-element form with L4 and
L5 cemented (PDF p. 6).

The LensVisualizer data file correlates this example with the KONICA HEXANON AR 40mm f/1.8 and applies a uniform
scale factor of 40 to the patent's normalized prescription. This is a production-correlation and modeling choice, not a
statement made by the patent. The correlation rests on several convergent facts:

1. The patent describes a compact semi-wide SLR objective in the approximately 40 mm class, with five groups and six
   elements, an aperture range reaching F1.8, and a 56° full field.
2. Example 1 itself is the F1.8, 56° embodiment and uses the cemented Fig. 1(A) rear pair.
3. The original Konica FS-1 instruction manual specifies the standard lens as the Konica Hexanon AR 40mm f/1.8, with
   five groups and six elements and a closest taking distance of 0.45 m.
4. Konica's own technical history identifies the FS-1 as a 1979 camera and illustrates it with a 40/1.8 lens, placing
   the product in the same period as the March 1979 Japanese publication.

Neither manufacturer source identifies JP1979-030821 as the production prescription. The patent/example relationship is
therefore the fixed correlation selected for this model rather than a manufacturer-confirmed attribution.

The data file separates marketed and modeled quantities. The marketed focal length is 40 mm, while the paraxial EFL
recomputed from the scaled, rounded Example-1 surface array is 39.993816 mm. The marketed and modeled maximum aperture
are both represented as f/1.8; the independently reconstructed entrance pupil gives a modeled value of approximately
f/1.800000.

## Optical Architecture

Example 1 is an all-spherical semi-wide SLR objective containing six elements in five air-separated groups. In physical
order those groups are L1, L2, L3, the cemented L4+L5 pair, and L6. The data file also uses two broader diagram
annotations—FRONT (L1–L3) and REAR (L4–L6)—for functional discussion; those annotations do not replace the physical
five-group count.

The front functional section has a positive-negative-positive sequence. The patent explicitly contrasts this arrangement
with a conventional Gauss-type front sequence and argues that moving the negative member forward allows the front
section to retain substantial positive power while increasing the emerging paraxial ray height needed for a long SLR
back focus. The design is therefore best described in the patent's own terms as a compact semi-wide objective rather
than forced into a retrofocus or telephoto label.

The rear functional section begins with the cemented negative/positive L4+L5 pair and ends with the positive L6 singlet.
The patent's statement that the rear group need not carry a large positive-power burden is comparative with the
prior-art difficulty it has just described; it is not a claim that an isolated rear-section matrix is weaker than an
isolated front-section matrix. Its rear-group conditions then use refractive index and Abbe-number separation to control
residual monochromatic and chromatic aberrations without adding more elements.

By the project's strict geometric definitions, the design is neither telephoto nor retrofocus: the first-surface-to-
image track is longer than the EFL, while the paraxial back focal distance is shorter than the EFL. This does not
conflict with the patent's discussion of retrofocus lenses, which appears as prior-art context rather than as a
classification of Example 1.

The aperture stop is in the broad air space between L3 and L4. Its axial location is published rather than inferred: the
Japanese Seidel-table note places the diaphragm 0.1001$f$ behind surface 6. In the scaled model this becomes 4.004 mm
from surface 6 to STO, leaving 4.112 mm from STO to surface 7. The patent does not publish a physical stop diameter; the
model derives a stop semi-diameter of 8.475971 mm so that the entrance pupil reproduces the modeled f/1.8 aperture.

## Element-by-Element Analysis

### L1 — Positive Meniscus

**nd = 1.71300, νd = 53.9. Glass: 713539 class (vendor unresolved). f = +73.7107 mm.**

L1 is the first positive member of the positive-negative-positive front section and is convex toward the object, as
shown in Fig. 1(A). The patent treats the two positive front elements collectively as a means of preserving substantial
front power despite the forward negative L2. No separate L1-specific aberration function is claimed in the selected
source, so its role is best limited to that system-level power allocation.

The focal length above is the element's standalone focal length in air as stored in the data file. It is not the in-situ
contribution of L1 inside the assembled objective, where spacing and the powers of the surrounding surfaces alter the
effective group behavior.

### L2 — Negative Meniscus

**nd = 1.58144, νd = 40.7. Glass: 581407 class (vendor unresolved). f = −69.0479 mm.**

L2 is a negative meniscus convex toward the object and is the key diverging member of the front section. The patent
makes its power an explicit design variable through the condition $1.4f<|f_2|<2.0f$. In the amended Example-1 material,
$f_2$ is given as −1.725$f$; the standalone value recomputed from the scaled data is consistent with that source value
to the precision expected from the rounded prescription.

The patent also couples the curvature of L2's rear surface to the small L2–L3 air gap and to the curvature of L3's front
surface. Its stated purpose is to balance the back-focus requirement against sagittal field curvature, spherical
aberration, coma, and higher-order spherical correction. This is the most explicit element-specific design logic in the
front section.

### L3 — Positive Meniscus

**nd = 1.67003, νd = 47.3. Glass: 670473 class (vendor unresolved). f = +123.3969 mm.**

L3 completes the positive-negative-positive front section. Its object-side surface is relatively strongly curved and is
paired by condition with the rear curvature of L2. The patent states that the L2–L3 spacing and the ratio of those two
curvatures must remain within a restricted range so that L3 can supply the required positive correction without driving
higher-order spherical aberration or field curvature excessively.

Although L3 has the weakest standalone positive power of the three positive singlets in the data file, that standalone
focal length should not be read as its in-situ contribution. Its importance lies in the coupled surface powers and
narrow air space that complete the front-section correction scheme.

### L4 — Negative Rear-Doublet Member

**nd = 1.75520, νd = 27.5. Glass: 755275 class (vendor unresolved). f = −17.5411 mm.**

L4 is the strong negative member at the front of the cemented D1 pair. Its object-side surface is strongly concave,
while its rear surface is the very weakly curved cemented junction to L5. The relatively high refractive index and low
Abbe number are consistent with the rear-group conditions stated by the patent.

The data file's −17.5411 mm value is the standalone focal length of L4 in air. It is not the net power of the cemented
L4+L5 group. At surface 8 the refractive transition is directly from L4 glass to L5 glass, so the pair's cemented net
power is a separate system quantity determined by all three bounding/interface surfaces.

### L5 — Positive Rear-Doublet Member

**nd = 1.67790, νd = 55.3. Glass: 678553 class (vendor unresolved). f = +23.1972 mm.**

L5 is the positive partner cemented directly to L4. Its front surface is nearly plano at the scale of the design, while
its rear surface provides strong positive curvature toward the image side. The large Abbe-number separation between L4
and L5 is deliberate: $\nu_5-\nu_4=27.8$, exceeding the patent's required lower bound of 20.

The patent describes that Abbe-number separation as a condition for achromatism within the fourth group. That statement
supports an ordinary chromatic-correction role for the cemented pair, but it does not justify an apochromatic or
anomalous-dispersion claim. The selected example publishes no per-element line indices or partial-dispersion deviations,
and the data therefore does not assign any.

As with L4, the +23.1972 mm value is a standalone-in-air element focal length. The cemented pair's net power and its
in-situ contribution to the complete rear section must be evaluated from the actual cemented prescription rather than by
combining the two standalone focal lengths algebraically.

### L6 — Biconvex Positive, Weak Front Surface

**nd = 1.88300, νd = 40.8. Glass: 883408 class (vendor unresolved). f = +38.5009 mm.**

L6 is the final positive singlet and uses the highest refractive index in Example 1. Its first surface is extremely
weak, while its rear surface supplies most of the element's curvature. The patent explicitly requires $n_6>1.8$ and
explains that a high-index final positive element permits useful rear-group power while retaining control of spherical
aberration and distortion.

The stored standalone focal length is again descriptive of L6 in air, not a direct measure of the rear functional
section's assembled power. In situ, L6 follows the cemented L4+L5 pair and completes the rear correction with the actual
pair spacing and surface powers included.

## Glass Identification and Selection

The patent gives only d-line refractive indices and d-line Abbe numbers. It does not identify glass manufacturers or
catalog names, and it supplies no `nC`, `nF`, `ng`, `PgF`, or `dPgF` values. A fresh authoritative-catalog audit found
coordinate-compatible counterparts for all six source pairs. OHARA catalog rows reproduce every patent `nd` to the
displayed precision, with absolute `νd` residuals no larger than 0.07, but that coordinate agreement does not identify
the historical supplier or melt. The data therefore retains neutral six-digit/class labels and does not import catalog
line indices. At runtime, all six classes resolve to coordinate-compatible coefficient curves;
those curves approximate dispersion without identifying the production supplier.

| Element | nd | νd | Data-file glass annotation | Design use supported by the source |
| --- | ---: | ---: | --- | --- |
| L1 | 1.71300 | 53.9 | `713539 class (vendor unresolved)` | First positive member of the front section |
| L2 | 1.58144 | 40.7 | `581407 class (vendor unresolved)` | Front diverging member constrained by conditions (1)–(2) |
| L3 | 1.67003 | 47.3 | `670473 class (vendor unresolved)` | Positive partner in the L2–L3 curvature/spacing balance |
| L4 | 1.75520 | 27.5 | `755275 class (vendor unresolved)` | Low-νd negative member of the cemented pair |
| L5 | 1.67790 | 55.3 | `678553 class (vendor unresolved)` | Higher-νd positive member of the cemented pair |
| L6 | 1.88300 | 40.8 | `883408 class (vendor unresolved)` | High-index final positive element; $n_6>1.8$ |

The strongest source-supported glass-selection statement is the contrast within the L4+L5 cemented pair and the high
index of L6. Example 1 satisfies both rear-group conditions: $n_6>1.8$ and $\nu_5-\nu_4>20$. Those conditions explain
why L4 is relatively dispersive while L5 is substantially less dispersive, and why L6 is unusually high in refractive
index. They do not establish any particular commercial glass designation.

## Focus Mechanism

The selected patent publishes only the infinity prescription and the infinity Seidel state. It does not provide a
finite-object spacing table, group travel, focus cam relation, back-focus change, or magnification state. The production
manual gives a closest taking distance of 0.45 m, but that mechanical/product specification does not determine how the
optical groups move.

The data file therefore uses `NO_INTERNAL_RECONSTRUCTION`: `var` and `varLabels` are empty, and no unit-focus,
inner-focus, rear-focus, or floating mechanism is invented. The 0.45 m value is retained only as the marketed closest-
focus distance. Any later finite-focus optical state would require an independent source that constrains the actual
motion.

## Conditional Expressions

The official correction material in the Japanese publication governs the conditions used for Example 1. In particular,
condition (3) includes the missing focal-length factor, and the correction material clarifies the d-line index
convention and supplies $f_2=-1.725f$ for Example 1. All six broad design conditions pass directly in the patent's own
normalized $f=1$ coordinates. Repeating the dimensional inequalities against the independently recomputed $0.999845f$
paraxial EFL does not change any pass/fail result.

| Condition | Design purpose stated by the patent | Example 1 |
| --- | --- | --- |
| $1.4f<|f_2|<2.0f$ | Limits L2 divergence to balance front power and required back focus | PASS |
| $0.23f<r_4<0.33f$ | Constrains the L2 rear curvature for sagittal-field and aberration control | PASS |
| $0.03f<d_4<0.08f$ | Restricts the L2–L3 air gap for compactness and correction balance | PASS |
| $0.8<r_4/r_5<1.0$ | Couples the L2 rear and L3 front curvatures | PASS |
| $1.8<n_6$ | Requires high index in the final positive element | PASS |
| $20<\nu_5-\nu_4$ | Requires sufficient Abbe separation in the L4+L5 cemented pair | PASS |

These expressions are more informative than applying a generic design-family label. They show that the patent's central
strategy is the power/spacing balance of L2 and L3 in the front section, followed by refractive-index and dispersion
constraints in the rear section.

## Verification Summary

The normalized Example-1 prescription is uniformly scaled by $s=40$. All radii, axial spacings, semi-diameters, stop
coordinates, and the image-plane distance are scaled by the same factor; refractive indices and Abbe numbers are
unchanged. The design is entirely spherical, so no aspheric coefficient transformation is applicable.

Independent reduced-angle tracing and an ABCD-matrix calculation from the actual data-file surface array agree to
machine precision. They give an EFL of 39.993816 mm and a paraxial BFL of 33.844006 mm. The model nevertheless
retains the patent-published image-plane spacing of $0.8464f$, or 33.856 mm at the chosen scale, rather than silently
replacing it with the focus implied by the rounded prescription. With positive axial distance toward the image, the first
principal plane is 23.839595 mm behind surface 1 and the second is 6.149810 mm in front of surface 11.

For power bookkeeping, isolated air-to-air matrices give EFLs of +128.068224 mm for the FRONT (L1–L3) annotation and
+37.631702 mm for the REAR (L4–L6) annotation. The cemented L4+L5 pair by itself is weakly negative at −200.908876 mm.
These subsystem values are not additive powers of the assembled lens and are distinct from the standalone element focal
lengths listed above.

The source publishes the stop position but not its diameter. The modeled stop semi-diameter of 8.475971 mm is therefore
a derived quantity. With that radius the entrance pupil is 22.218788 mm in diameter and gives f/1.7999999, consistent
with the authored `nominalFno: 1.8`. The entrance pupil lies 15.596904 mm behind surface 1; the exit pupil is
27.986854 mm in diameter and lies 16.532329 mm in front of surface 11.

The patent does not publish clear semi-diameters. Those values are modeling inferences derived from exact spherical ray
envelopes through the published stop and constrained by positive edge thickness, actual rim slope, cross-gap clearance,
off-axis containment, and the proportions of Fig. 1(A). They should not be interpreted as factory mechanical-aperture
measurements. The 2026-09-05 review of Fig. 1(A) reduces L1 from 16.75 to 13.3 mm and L6
from 13.6 to 11.3 mm. The drawn L1 rim measures about 12.5 mm, but 13.3 mm is retained to
contain the default 0.6-field fan. The central stepped/cemented surfaces retain their validated apertures.

The Petzval sum recomputed surface by surface as $\phi/(n n')$ is 0.208737 in the patent's normalized units, compared
with the patent's tabulated 0.2085. The residual is consistent with the source precision and supports the transcription,
including the positive sign of surface 8. No numerical correction to the Example-1 prescription was introduced; the
Japanese table itself shows $r_8=+38.9089$ and $r_9=-0.3966$.

No aspherical surface, cover glass, filter plate, inactive dummy plane, flare-cutter plane, mirror, or folded path is
present in the selected example. Consequently there is no omitted-plate air-equivalent correction and no asphere or
folded-path modeling layer in this transcription.

## Sources and References

1. **JP1979-030821 / 特開昭54-30821, 準広角レンズ**, Toshiko Shimokura, Konishiroku Photo Industry Co., Ltd.,
   published 1979-03-07. Primary prescription source. Relevant material: front page and conditions (PDF p. 1), Example 1
   and Seidel table (p. 4), Fig. 1(A) and aberration plots (p. 6), and official correction sheets (pp. 8–11).
2. **US4214815A, “Semi-wide angle objective lens.”** English family publication used only as a translation and
   architecture cross-check; the Japanese publication remains the numerical authority.
   <https://patents.google.com/patent/US4214815A/en>
3. **Konica FS-1 Instruction Manual.** Original Konica manual, scanned by Butkus; source for the 40mm f/1.8 standard
   lens identity, five-group/six-element specification, 0.45 m closest taking distance, 35 mm format, and Konica mount.
   <https://www.butkus.org/chinon/konica/konica_fs-1/konica_fs-1-splash.htm>
4. **KONICA TECHNICAL REPORT Vol. 6 (1993).** Konica technical-history source; §8 identifies the FS-1 as a 1979 model,
   and Fig. 13 shows the camera with a 40/1.8 lens.
   <https://research.konicaminolta.com/jp/pdf/technology_report/1993/pdf/2.pdf>
5. **OHARA optical-glass catalog and comparison data.** <https://www.ohara-inc.co.jp/en/product/01000/>
6. **SCHOTT Advanced Optics glass search.** <https://www.us.schott.com/shop/advanced-optics/en/search/>
7. **HIKARI optical-glass catalog.** <https://www.hikari-g.co.jp/optical_glass/catalog/>
8. **CDGM optical-glass database.** <https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&pageIndex=9&url=database>
9. **SUMITA optical-glass downloads / Data Book.** <https://sumita-opt.co.jp/en/download/>
10. **HOYA optical-glass data downloads.** <https://www.hoya-opticalworld.com/english/datadownload/index.html>
