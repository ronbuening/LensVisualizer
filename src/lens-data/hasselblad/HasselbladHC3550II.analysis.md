# HASSELBLAD HC 50mm f/3.5 II — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 2012/0063011 A1\
**Application Number:** 13/230,018\
**Priority:** September 14, 2010\
**Filed:** September 12, 2011\
**Published:** March 15, 2012\
**Inventor:** Takashi Suzuki\
**Assignee:** Fujifilm Corporation\
**Title:** *Retrofocus-Type Wide Angle Lens and Camera Including the Lens*\
**Embodiment analyzed:** Example 1\
**Production correlation:** Hasselblad HC 3,5/50-II

Example 1 is the prescription used by the data file. The patent itself does not identify a Hasselblad product, and the
assignee is Fujifilm Corporation; the HC 3,5/50-II identification is therefore a project correlation rather than a
manufacturer-confirmed patent attribution.

Several independent characteristics converge on that correlation. The patent gives a focal length of 50.688 mm, which
agrees with Hasselblad's 50.7 mm actual focal-length specification at the published precision. Both sources describe an
11-element, 7-group lens with rear focusing. The prescription predicts an entrance-pupil position 133.970 mm in front
of the image plane at infinity, compared with Hasselblad's 134 mm specification. Finally, the patent permits the rear
G3 group to translate toward the object for close focus (¶0081); constraining that one permitted motion to Hasselblad's
0.60 m object-to-sensor minimum distance gives a paraxial scale of 1:8.830, consistent with the manufacturer's rounded
1:8.8 specification. These converging properties support the selected correlation without implying that either source
explicitly links the patent to the product.

The data file keeps product and design values separate. The lens is marketed as a 50 mm f/3.5 lens, while Example 1 has
a computed effective focal length of 50.688445 mm and the patent's aberration plot specifies Fno. = 3.60. No uniform
scale is applied: the model remains at the patent's native dimensions (`s = 1`).

A source-labeling contradiction is retained explicitly. Paragraph ¶0078 calls the stop-adjacent rear meniscus “L11,”
but Fig. 1, ¶0057, and Table 1 place L7 at S12–S13 and L11 at S18–S19. The data file follows the figure and numerical
table ordering; the discrepancy is treated as a patent text error, not as a reason to renumber the prescription.

## Optical Architecture

The patent defines a retrofocus wide-angle system composed, from object to image, of a negative first group G1, a
positive second group G2, the aperture stop, and a positive third group G3 (¶0055). The prescription contains 11
physical elements in seven air-separated groups. The three patent power groups are functional groupings rather than the
same quantity as the seven air-separated groups stored in `groupCount`.

G1 contains two negative menisci, L1 and L2. The patent identifies this front negative section as the principal means of
obtaining a wide field together with a long back focus (¶0056). Independent paraxial recomputation gives G1 an
air-bounded net power of −0.03033273 mm⁻¹, equivalent to about −32.97 mm focal length.

G2 consists of the cemented L3–L5 triplet followed by L6. The triplet is positive-negative-positive; L6 is a positive
meniscus between that triplet and the stop. The complete G2 group has net power +0.02304457 mm⁻¹, or about +43.39 mm.
The L3–L5 cemented triplet by itself remains positive, +0.01805428 mm⁻¹ (about +55.39 mm).

G3 begins with L7, continues through the cemented L8–L10 triplet, and ends with L11. The L8–L10 triplet is
negative-positive-negative and has a net air-bounded power of −0.00858632 mm⁻¹ (about −116.46 mm), but the full G3
assembly is positive at +0.01201764 mm⁻¹ (about +83.21 mm). This distinction is important: the sign of the cemented
triplet is not the sign of the complete rear group.

The design meets the retrofocus criterion directly. At infinity the computed effective focal length is 50.688445 mm
and the S19-to-image back focal distance is 61.834703 mm, so `BFD > EFL`; the corresponding ratio is 1.219903. This also
reproduces the patent's condition (4), which requires `Bf/f > 1.1` (¶¶0083–0086).

Example 1 is fixed-focal-length and all-spherical. Paragraph ¶0099 permits the examples to use only spherical lenses,
and Table 1 contains no aspheric coefficients. No conic conversion or coefficient transformation is therefore
applicable. The optional ghost-blocking means and filters mentioned in ¶0101 are not prescribed in Example 1 and are
not part of the modeled sequential optical system.

The stop position itself is published in Table 1, between S10 and S12. Its physical diameter is not. The data model's
stop semi-diameter, 9.911534 mm, is a modeling inference back-solved so that the authored prescription reproduces the
patent design aperture of f/3.60. Likewise, the patent does not tabulate lens clear semi-diameters; those dimensions in
the data file are inferred apertures rather than source measurements.

## Element-by-Element Analysis

### L1 — Negative Meniscus

`nd = 1.83481`, `νd = 42.7`. Glass: `835427 class (vendor unresolved)`. Standalone `f = −105.842473 mm`.

L1 is the front member of the negative G1 section. Its meniscus form is convex toward the object, matching the patent's
stated architecture for the first group (¶0055). Together with L2 it creates the negative front power required for the
retrofocus back focal distance; its quoted focal length is the element isolated in air, not its in-situ contribution to
G1.

### L2 — Negative Meniscus

`nd = 1.84666`, `νd = 23.9`. Glass: `847239 class (vendor unresolved)`. Standalone `f = −48.766884 mm`.

L2 is the stronger of the two isolated negative front elements. The second object-convex negative meniscus completes
G1's two-element negative section. The pair's combined, spaced behavior is represented by the G1 net power above and
cannot be obtained by simply adding the two standalone focal powers.

### L3 — Biconvex Positive, first element of T1

`nd = 1.88300`, `νd = 40.8`. Glass: `883408 class (vendor unresolved)`. Standalone `f = +36.608835 mm`.

L3 begins the cemented positive-negative-positive triplet in G2. The patent specifies this first member as biconvex
(¶¶0059–0060). Its high refractive index relative to the cemented negative partner L4 is part of the index separation
used by condition (3) to control lateral chromatic aberration across the field (¶¶0071–0075).

### L4 — Biconcave Negative, center element of T1

`nd = 1.48749`, `νd = 70.2`. Glass: `487702 class (vendor unresolved)`. Standalone `f = −37.915894 mm`.

L4 is the negative center member of the G2 cemented triplet. Its substantially lower index than L3 produces
`Nd21 − Nd22 = 0.39551`, well above the patent's 0.15 and preferred 0.25 thresholds. The patent associates this index
contrast with improved balance of lateral chromatic aberration between medium and maximum field angles (¶¶0071–0076).

### L5 — Positive Meniscus, final element of T1

`nd = 1.83481`, `νd = 42.7`. Glass: `835427 class (vendor unresolved)`. Standalone `f = +65.030678 mm`.

L5 completes the L3–L5 cemented triplet. In Example 1 it is a positive meniscus with its convex side toward the object,
consistent with the form described in ¶¶0059–0060. Although the three isolated elements include both positive and
negative power, the cemented assembly as a whole is positive, with a computed air-bounded focal length of about
+55.39 mm.

### L6 — Positive Meniscus before the stop

`nd = 1.62041`, `νd = 60.3`. Glass: `620603 class (vendor unresolved)`. Standalone `f = +108.393955 mm`.

L6 is air-spaced from the G2 triplet and lies immediately ahead of the stop. The patent describes this stop-facing
meniscus as a means of improving field-curvature correction (¶0077). Its comparatively weak standalone positive power
supplements the triplet without changing the fact that G2 must be assessed as a complete spaced group.

### L7 — Positive Meniscus after the stop

`nd = 1.84666`, `νd = 23.9`. Glass: `847239 class (vendor unresolved)`. Standalone `f = +119.597568 mm`.

L7 is the first optical element of G3 and occupies S12–S13 immediately behind the stop. This placement is unambiguous in
Fig. 1, ¶0057, and Table 1. Paragraph ¶0078 instead names L11 in this position; the model treats that passage as the
source's labeling error. The patent's intended stop-adjacent meniscus rationale is to improve field-curvature correction
and increase structural symmetry around the stop (¶¶0078–0079).

### L8 — Biconcave Negative, first element of T2

`nd = 1.80000`, `νd = 29.8`. Glass: `800298 class (vendor unresolved)`. Standalone `f = −31.237821 mm`.

L8 begins the negative-positive-negative cemented triplet in G3. The patent describes the first member of this rear
triplet as negative and concave toward the image side; Example 1 is biconcave (¶¶0061–0062). Its patent coordinate is
represented by the generic `800298` class. Multiple authoritative catalog families occupy the same rounded optical
neighborhood, so the data does not promote any one vendor glass to a production identity.

### L9 — Biconvex Positive, center element of T2

`nd = 1.49700`, `νd = 81.5`. Glass: `497815 class (low-dispersion crown; vendor unresolved)`. Standalone
`f = +25.456853 mm`.

L9 is the strongly positive center of the rear cemented triplet and is the high-Abbe element used in patent condition
(1). Its `νd = 81.5` exceeds the specified threshold of 75. The patent states that satisfying this condition facilitates
chromatic correction, including secondary-spectrum control in the design sense discussed in ¶0068. The available
prescription, however, does not publish `nC`, `nF`, `ng`, or `dPgF`, so the data file does not support an APO or
anomalous-partial-dispersion designation.

### L10 — Negative Meniscus, final element of T2

`nd = 1.70154`, `νd = 41.2`. Glass: `702412 class (vendor unresolved)`. Standalone `f = −49.446270 mm`.

L10 completes the G3 cemented triplet as a negative meniscus with its concave side facing the object, as prescribed in
¶¶0061–0062. Within the triplet, L8 has the higher refractive index of the two negative members. Comparing that value
with the positive L9 gives `Nd31 − Nd32 = 0.30300`, satisfying both the general and preferred forms of condition (2).
The complete L8–L10 triplet remains weakly negative even though L9 is strongly positive in isolation.

### L11 — Rear Positive Meniscus

`nd = 1.83481`, `νd = 42.7`. Glass: `835427 class (vendor unresolved)`. Standalone `f = +80.229303 mm`.

L11 is the final air-spaced element after the rear cemented triplet, at S18–S19. The patent does not assign it a separate
quantitative correction condition. In the computed group decomposition, its positive power, together with L7 and the
spacings around the negative T2 triplet, is sufficient to leave G3 positive overall. That statement is a model-derived
group-power result rather than a claim that L11 acts alone as the rear group's correcting element.

## Glass Identification and Selection

The patent publishes `nd` and `νd` only. It names no glass vendor and gives no per-element line indices or partial-
dispersion values. The data file therefore stores generic six-digit/class labels rather than assigning vendor-specific
trade names.

| Elements | Stored glass annotation | `nd` | `νd` | Design role / status |
|---|---|---:|---:|---|
| L1, L5, L11 | 835427 class (vendor unresolved) | 1.83481 | 42.7 | Reused high-index class in front, central, and rear positive/negative forms |
| L2, L7 | 847239 class (vendor unresolved) | 1.84666 | 23.9 | High-index, low-Abbe class used on opposite sides of the stop |
| L3 | 883408 class (vendor unresolved) | 1.88300 | 40.8 | High-index positive member of G2 triplet |
| L4 | 487702 class (vendor unresolved) | 1.48749 | 70.2 | Lower-index, high-Abbe negative partner in G2 triplet |
| L6 | 620603 class (vendor unresolved) | 1.62041 | 60.3 | Moderate-index stop-adjacent positive meniscus |
| L8 | 800298 class (vendor unresolved) | 1.80000 | 29.8 | Negative member of G3 triplet; generic class is catalog-supported, production vendor unresolved |
| L9 | 497815 class (low-dispersion crown; vendor unresolved) | 1.49700 | 81.5 | High-Abbe positive member required by condition (1) |
| L10 | 702412 class (vendor unresolved) | 1.70154 | 41.2 | Final negative member of G3 triplet |

The catalog audit behind these labels found families with nearby or matching `nd`/`νd` coordinates from several glass
manufacturers. L8 is no exception: its rounded 1.80000/29.8 coordinate is compatible with catalog classes including
OHARA S-NBH55 and NHG H-ZLaF57. That is insufficient to establish the production melt. A class label therefore
means only that the stored patent coordinate belongs to that optical neighborhood; it is not a vendor attribution.

No `nC`, `nF`, `ng`, or `dPgF` fields are authored. Consequently, chromatic discussion here is limited to what the
patent itself states about its index/Abbe conditions and to ordinary `nd`/`νd` relationships. No apochromatic or
anomalous-dispersion performance claim is made.

The diagram marks L9 as inferred APD: its compatible K-PFK80 catalog curve has ΔPgF approximately +0.030. This is a catalog-based classification, not a patent APD designation or production performance claim.

## Focus Mechanism

The patent permits rear focusing by translating only G3 toward the object as focus moves from infinity toward shorter
distances (¶¶0080–0082). It does not publish a numerical focus-spacing table. Hasselblad specifies rear focusing, a
minimum distance of 0.60 m measured from object to sensor plane, and a maximum image scale of 1:8.8. The data file
therefore marks the close state as `CONSTRAINED_RECONSTRUCTION`, not as a published patent state.

Only the two air spaces adjacent to the rigidly translating G3 assembly vary:

| Quantity | Infinity | Reconstructed 0.60 m endpoint |
|---|---:|---:|
| STO→S12 gap | 7.640000 mm | 1.7039463171 mm |
| S19→image gap | 61.835000 mm | 67.7710536829 mm |
| G3 objectward travel | 0 mm | 5.9360536829 mm |
| S1→sensor track | 173.395 mm | 173.395 mm |

The two adjacent gaps sum to 69.475 mm at both endpoints, which is the kinematic signature of one rigid group moving
inside a fixed overall track. At the reconstructed close endpoint, independent paraxial tracing gives an image scale of
1:8.830449 and an effective focal length of 49.901989 mm. The latter is a modeled focus-breathing change of −1.55155%
relative to the infinity EFL. Neither the 5.936 mm travel nor the breathing value is published by Hasselblad or the
patent; both are consequences of the stated one-group mechanism constrained to the manufacturer's rounded close-focus
specification.

## Chromatic Correction Strategy

The patent repeatedly identifies lateral chromatic aberration as the principal design problem for a long-back-focus
wide-angle lens (¶¶0005–0006). Its main structural response is to place a three-element cemented lens in both G2 and G3,
on opposite sides of the stop (¶¶0055–0056). In Example 1 those triplets have opposite sign patterns:
positive-negative-positive in G2 and negative-positive-negative in G3.

The two triplets also use complementary index and dispersion relationships. In G2, the high-index positive L3 and the
much lower-index negative L4 produce a large `Nd21 − Nd22` separation. In G3, the high-Abbe positive L9 sits between two
negative elements, while the higher-index negative L8 differs from L9 by 0.30300 in refractive index. The patent ties
these conditions to balancing lateral chromatic aberration between medium and maximum field angles and to suppressing
the secondary spectrum (¶¶0068–0076).

The patent's Fig. 6 evaluates Example 1 at d, C, and g lines, but the prescription table does not provide the element-
specific line indices needed to reproduce those dispersions exactly. The present model therefore preserves the patent's
`nd`/`νd` prescription and its qualitative chromatic rationale without upgrading the material model to a vendor-specific
Sellmeier or partial-dispersion solution.

## Conditional Expressions

Example 1 satisfies each of the patent's stated conditions. The values below are recomputed from the final data arrays;
they reproduce Table 6 at the patent's displayed precision.

| Condition | Recomputed value | Requirement | Result |
|---|---:|---:|---|
| (1) `ν3p` | 81.5 | `> 75` | PASS |
| (2) `Nd31 − Nd32` | 0.30300 | `> 0.13` | PASS |
| (2-1) `Nd31 − Nd32` | 0.30300 | `> 0.23` | PASS |
| (3) `Nd21 − Nd22` | 0.39551 | `> 0.15` | PASS |
| (3-1) `Nd21 − Nd22` | 0.39551 | `> 0.25` | PASS |
| (4) `Bf/f` | 1.219903 | `> 1.1` | PASS |

Condition (1) applies to L9, the positive element in the G3 triplet. Conditions (2) and (2-1) compare L8, the
higher-index negative member of that triplet, with L9. Conditions (3) and (3-1) compare the higher-index positive member
L3 of the G2 triplet with the negative member L4. Condition (4) formalizes the long-back-focus requirement for the
retrofocus architecture (¶¶0083–0086).

## Verification Summary

The data-file prescription has been independently evaluated by sequential height/reduced-angle tracing and an ABCD
matrix calculation. The two first-order methods agree to floating-point precision.

| Quantity | Computed from final data | Source comparison |
|---|---:|---:|
| Effective focal length | 50.688445329 mm | patent 50.688 mm |
| S19→image back focal distance | 61.834702914 mm | patent 61.835 mm |
| Design f-number | 3.59999999998 | patent Fno. 3.60 |
| Entrance pupil in front of sensor | 133.970225859 mm | Hasselblad 134 mm |
| Petzval sum `Σφ/(n·n′)` | +0.001857505371 mm⁻¹ | computed result |
| Reciprocal Petzval radius under the stored sign convention | +538.356451 mm | computed result |

The Petzval quantity is computed surface by surface as `φ/(n·n′)`, including both cemented interfaces in each triplet.
It is not derived from a thin-lens sum of standalone element powers.

The physical stop size and every clear semi-diameter are modeling quantities rather than patent dimensions. The final
clear apertures were chosen from exact meridional ray envelopes, the published field, the reconstructed close-focus
state, and the proportions of Fig. 1, then checked against edge thickness, actual spherical rim slope, shared-band
air-gap intrusion, and off-axis containment. A second comparison of the local diagram with the 600-dpi Fig. 1 reduces L7 (S12–S13) from 14.4 to 9.5 mm. The figure axis is near x=522 on the 1400-pixel page render; the two rims lie near x=482 and 564. The 497-pixel S1–S19 vertex span represents 111.56 mm, giving approximately 9.2 mm from the rim half-width. The independent comparison with the neighboring stop and L6 rims supports a rounded 9.5 mm inferred aperture. Ray and annotation lines outside the optical rim are excluded.

The modeled first-clipping boundaries are air-exposed surfaces rather than
the cemented interfaces, so the cemented triplets remain physically coherent in the traced model.

No sensor cover plate, filter, inactive dummy plane, or mechanical component has been inserted. The optional filter and
ghost-blocking language of ¶0101 is not a numerical part of Example 1. Because the model uses the patent dimensions
without scale change and contains no aspheres, there is no dimensional rescaling or aspheric-coefficient transformation
to disclose beyond `s = 1`.

## Sources / References

1. Takashi Suzuki, *Retrofocus-Type Wide Angle Lens and Camera Including the Lens*, US 2012/0063011 A1, published
   March 15, 2012. Example 1; Fig. 1; Fig. 6; Tables 1 and 6; especially ¶¶0055–0086 and ¶¶0099–0111.
2. Hasselblad, *H System Lenses*, HC 3,5/50-II technical data and lens booklet:
   <https://cdn.hasselblad.com/manuals/lenses/X_H_System_Lenses.pdf>.
3. Hasselblad, HC 3,5/50 II product page:
   <https://www.hasselblad.com/h-system/lenses/hc3550mm/>.
4. Glass-class cross-checks used in the upstream audit: OHARA optical-glass catalog, HOYA optical-glass cross-reference,
   SCHOTT optical-glass catalog, HIKARI optical-glass catalog, CDGM optical-glass database, and SUMITA optical-glass
   catalog. These sources were used only to test class-level compatibility; no vendor-specific production glass is
   asserted in the final data.

### Patent-rim review — 2026-09-12 UTC

US20120063011A1.pdf, page 2, Fig. 1 was visually inspected at 600 dpi. Automated crops were contaminated by ray bundles and leaders, so their scales were rejected. The direct vertex-span and optical-rim measurements described above support the L7 reduction to 9.5 mm; other apertures are retained. Surface validation and image-circle audits pass.
