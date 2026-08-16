# NIKON AF-S NIKKOR 400mm f/2.8E FL ED VR — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** JP 2015-215559 A\
**Application Number:** 特願2014-99624\
**Filed:** 2014-05-13\
**Published:** 2015-12-03\
**Inventors:** Kazumasa Tanaka; Toshinori Take; Tetsushi Miwa\
**Applicant:** Nikon Corporation\
**Title:** 光学系、光学装置、光学系の製造方法 (*Optical system, optical apparatus, and method of manufacturing an optical system*)\
**Embodiment analyzed:** Example 1 / 第1実施例\

The prescription is the first numerical embodiment in JP 2015-215559 A, described in ¶0122–0133 and tabulated in
Table 1. The production correlation is to the **NIKON AF-S NIKKOR 400mm f/2.8E FL ED VR**. This correlation is an
analytical identification of the selected patent embodiment; Nikon does not publish a statement identifying Example 1
as the production prescription.

Several independent features converge on that identification:

1. The source embodiment gives a precise infinity focal length of 392.003 mm and F-number 2.88, close to the marketed
   400 mm and f/2.8 values. After the project-required removal of the front protective glass and rear filter, the final
   active model has an independently verified EFL of 391.496520967 mm and modeled f-number of 2.881515520.
2. Excluding the separately identified front protective glass, Example 1 contains 16 active elements in 12
   air-separated groups. Nikon specifies 16 elements in 12 groups plus one meniscus protective glass element for the
   production lens.
3. The patent gives a 6.27° full field and 21.60 mm image height. Nikon specifies a 6°10′ angle of view on FX format.
4. The patent publishes a close-focus magnification of β = −0.173 and, in the unnormalized source model, an
   object-to-image distance of 2.598906 m. Nikon specifies 2.6 m minimum focus distance and 0.17× maximum reproduction.
5. L11 and L12 share the unusual source pair nd = 1.43385 and νd = 95.25. The final data model correlates these two
   elements with the two fluorite elements specified by Nikon for the production lens.
6. Both the patent and production lens use internal focusing and vibration reduction. In Example 1 the complete G2
   group moves axially for focus, while G3b moves transversely for vibration reduction (¶0127).
7. The patent was filed on 2014-05-13, one day before Nikon's 2014-05-14 product announcement.

No uniform dimensional scaling is applied. The marketed 400 mm and f/2.8 specifications remain separate from the
plate-normalized design values stored in the data file.

The patent's first example also includes two source-only auxiliary optical components that are not retained as ordinary
elements in the LensVisualizer model. The front FLG meniscus protective glass at source surfaces 1–2 is explicitly
described as substantially powerless, and the rear plane filter FL occupies source surfaces 32–33 (¶0123, ¶0128–0130).
Under the current data specification both are omitted. The rear plane filter's optical effect is folded into the final air
spacing, and removal of the weak-power front protective meniscus requires a small paraxial image-plane refocus. These are
modeling normalizations, not corrections to the patent.

## Optical Architecture

Example 1 is a three-group **positive–negative–positive** long-focus system: G1 is positive, G2 is negative, and G3 is
positive, with the aperture stop between G2 and G3 (¶0122). G1 is subdivided into positive G1a and positive G1b; G3 is
subdivided into positive G3a, negative G3b, and positive G3c. The final active model contains 16 glass/crystal elements,
12 air-separated groups, four cemented pairs, and no aspherical surfaces.

The project defines a telephoto system strictly by total track divided by EFL. In the plate-normalized active model,
source surface 3 to the image plane is 390.337849396 mm while EFL is 391.496520967 mm, giving TL/EFL = 0.997040404.
The normalized model therefore qualifies **narrowly** as telephoto under that definition. Its BFD/EFL is 0.209296494,
so it is not retrofocus. This classification applies to the normalized active model; the raw source model including both
omitted plates has a slightly longer track and does not cross the project's telephoto threshold.

The independently recomputed paraxial group powers show the intended distribution:

| Group | Constituents | In-situ focal length |
|---|---|---:|
| G1 | G1a + G1b, source surfaces 3–11 | +179.735748 mm |
| G1a | L11, L12, L13 | +355.225446 mm |
| G1b | cemented L14/L15 | +194.360118 mm |
| G2 | L21 + cemented L22/L23 | −67.943095 mm |
| G3 | G3a + G3b + G3c | +163.661422 mm |
| G3a | L31, L32 | +125.972734 mm |
| G3b | cemented L33/L34 + L35 | −58.558761 mm |
| G3c | L36 + cemented L37/L38 | +69.945826 mm |

G1 provides the large front collecting power and carries the two fluorite-correlated positive elements. G2 is a compact
negative inner-focus unit. The stop follows G2, after which G3 combines a fixed positive front section, a negative
transverse VR section, and a final positive section. The architecture therefore separates axial focusing from transverse
stabilization: focus is accomplished without translating the large front assembly, while VR is assigned to the smaller
rear negative subgroup (¶0127, ¶0046–0047).

Four cemented pairs appear in the final data: D1 = L14/L15, D2 = L22/L23, D3 = L33/L34, and D4 = L37/L38. The numerical
surface model preserves the patent's true cemented interfaces; there are no synthetic cement layers.

The patent's coating invention is not represented as separate optical layers in the prescription. Example 1 specifies the
special anti-reflection coating on source surface 24, the rear surface of L34, and source surface 27, the front surface of
L36 (¶0126, ¶0133). Those surface numbers remain identifiable in the normalized data model.

## Element-by-Element Analysis

The focal lengths below are **standalone thick-element focal lengths in air** unless a cemented net power is explicitly
stated. They should not be confused with the focal lengths of the in-situ subgroups listed above.

### L11 — Biconvex Positive

**Standalone:** nd = 1.43385, νd = 95.25. Glass: Fluorite (CaF2; Malitson 1963 spectral model). f = +409.944 mm.

L11 is the first active positive collector after omission of the protective FLG plate. Its exceptionally low dispersion is
consistent with the patent's preference that a positive element in G1 have 80 < νd < 110 and that the most object-side
positive element satisfy the same interval (¶0034–0041). The final model correlates L11 with one of the production lens's
two fluorite elements.

Its optical role is principally established by position and power: it begins the positive G1a collector and works with L12
before the negative L13 member. The patent attributes the high-νd G1 positive elements to axial and lateral chromatic
correction; it does not assign a unique aberration term to L11 alone.

### L12 — Biconvex Positive

**Standalone:** nd = 1.43385, νd = 95.25. Glass: Fluorite (CaF2; Malitson 1963 spectral model). f = +284.780 mm.

L12 repeats the same low-dispersion material coordinates as L11 but has substantially stronger standalone positive power.
Together the two elements form the dominant positive part of G1a before L13. The final data correlates L12 with the
second fluorite element specified for the production lens.

The pair's matching dispersion coordinates and separated curvatures provide two independent positive bending locations
rather than a single very strong front element. The patent's condition on G1 positive-glass dispersion again supports a
chromatic-correction role without specifying an element-by-element apochromatic claim.

### L13 — Biconcave Negative

**Standalone:** nd = 1.61266, νd = 44.46. Glass: J-KZFH1 (HIKARI). f = −297.844 mm.

L13 closes G1a with negative power after the two fluorite-correlated positive elements. Its source index satisfies the
patent's condition 1.50 < nd1n < 1.75 for at least one negative element in G1. The patent states that this range supports
coma and field-curvature correction while avoiding the mass penalty associated with still denser glass (¶0042–0045).

The HIKARI name is a catalog-derived coordinate match to the stored nd/νd pair; it is not a statement that Nikon has
identified HIKARI as the production supplier.

### L14 — Negative Meniscus, D1 Front Member

**Standalone:** nd = 1.79500, νd = 45.31. Glass: J-LASF017 (HIKARI). f = −207.021 mm.

L14 begins G1b as the negative member of the cemented D1 pair. It is directly cemented to L15 at source surface 10. The
high-index negative meniscus by itself is negative, but the complete L14/L15 cemented component has a verified net focal
length of **+194.360118 mm**.

The patent specifically prefers a cemented negative/positive pair at the rear of G1 and attributes that configuration to
control of decentering aberration (¶0048). The final data preserves that order exactly.

### L15 — Positive Meniscus, D1 Rear Member

**Standalone:** nd = 1.49782, νd = 82.57. Glass: J-FKH1 (HIKARI). f = +97.400 mm.

L15 supplies the positive power that makes D1 net positive. Its νd = 82.57 also satisfies the patent's 70 < νd1bp < 110
condition for the positive element in G1b (¶0054–0057). The patent links that range to axial and lateral chromatic
correction.

The contrast between L14's high index/moderate dispersion and L15's much higher Abbe number gives the cemented pair
substantially different refractive and dispersive leverage at a shared interface. The statement is a reading of the final
catalog-resolved data; the patent itself specifies only nd and νd, not catalog glass names.

### L21 — Biconcave Negative

**Standalone:** nd = 1.77250, νd = 49.62. Glass: J-LASF016 (HIKARI). f = −142.323 mm.

L21 is the first element of the translating G2 inner-focus group. Its negative standalone power is consistent with the
net G2 focal length of −67.943095 mm. It is air-spaced from the cemented L22/L23 pair behind it.

Because the entire G2 group moves imageward for close focus, L21 participates directly in the 15.400 mm published focus
translation rather than serving as an independently floating element.

### L22 — Positive Meniscus, Concave to Object, D2 Front Member

**Standalone:** nd = 1.84666, νd = 23.80. Glass: J-SF03 (HIKARI). f = +147.527 mm.

L22 is positive by itself but is cemented to the strongly negative L23. The complete D2 component has a verified net focal
length of **−135.770130 mm**, so the pair reinforces rather than cancels G2's overall negative function.

Its νd = 23.80 lies inside the patent's 15 < νd2p < 30 interval for a positive G2 element. The patent explicitly connects
this high-dispersion positive member to axial and lateral chromatic correction (¶0059–0062; ¶0090–0093).

### L23 — Biconcave Negative, D2 Rear Member

**Standalone:** nd = 1.51823, νd = 58.82. Glass: J-K3 (HIKARI). f = −70.664 mm.

L23 is the rear negative member of D2 and the strongest negative standalone element in that cemented pair. Its
nd = 1.51823 satisfies the second invention's 1.45 < nd2n < 1.65 condition for a negative element in G2 (¶0086–0089).
The patent associates that index range with keeping the focus group relatively light while retaining coma and
field-curvature correction capability.

The G2 arrangement—negative L21 followed by a net-negative cemented pair that contains a positive high-dispersion member—
is exactly the sort of multi-component negative focus group described in ¶0058 and ¶0085.

### L31 — Biconvex Positive

**Standalone:** nd = 1.48749, νd = 70.31. Glass: J-FK5 (HIKARI). f = +75.627 mm.

L31 is the first refracting element behind the stop and the dominant positive member of G3a. Together with L32 it forms a
verified +125.972734 mm subgroup.

The patent does not assign a separate aberration function to L31. In the final architecture its position immediately
behind the stop and its strong positive standalone power make it the principal converging element of fixed G3a.

### L32 — Negative Meniscus, Concave to Object

**Standalone:** nd = 1.84666, νd = 23.80. Glass: J-SF03 (HIKARI). f = −185.343 mm.

L32 follows L31 as the negative member of G3a. Its J-SF03 catalog match repeats the high-index, low-Abbe material used for
L22, L33, and L38 in the final data. The positive L31/negative L32 combination retains net positive power while providing
an additional opposing refractive contribution within G3a.

No claim is made that L32 is one of Nikon's two marketed ED elements; the production material count does not uniquely map
those ED labels onto individual patent elements.

### L33 — Biconvex Positive, D3 Front Member

**Standalone:** nd = 1.84666, νd = 23.80. Glass: J-SF03 (HIKARI). f = +113.570 mm.

L33 begins the vibration-reduction subgroup G3b and is cemented directly to L34. Although L33 is positive standalone, the
L33/L34 cemented component has a verified net focal length of **−134.128652 mm**.

This inversion from positive standalone power to negative cemented power is important when describing the mechanism:
G3b is not a positive stabilizer simply because its first element is positive. The full subgroup, including L35, is
negative at −58.558761 mm.

### L34 — Biconcave Negative, D3 Rear Member

**Standalone:** nd = 1.59319, νd = 67.90. Glass: J-PSKH1 (HIKARI). f = −60.817 mm.

L34 provides the strong negative member of D3. Its rear surface is source surface 24, one of the two surfaces on which
Example 1 explicitly applies the patent's anti-reflection coating (¶0126). The coating is a source fact but is not modeled
as a separate thin-film stack in the LensVisualizer prescription.

L34 and L33 move together with the rest of G3b during vibration reduction; their cemented interface does not introduce an
air gap or an independent movement coordinate.

### L35 — Biconcave Negative

**Standalone:** nd = 1.75500, νd = 52.34. Glass: J-LASKH2 (HIKARI). f = −106.452 mm.

L35 is the second negative component in G3b and is air-spaced from D3. Its contribution keeps the complete stabilization
subgroup negative even though D3 contains a positive front element.

The patent states that making G3b the transverse VR group permits a smaller-diameter moving unit and helps suppress
aberrations induced by decentering (¶0046–0047). The final data does not invent a VR decenter distance, because the
selected example publishes the group identity but no numerical transverse shift range.

### L36 — Biconvex Positive

**Standalone:** nd = 1.77250, νd = 49.62. Glass: J-LASF016 (HIKARI). f = +120.865 mm.

L36 begins the fixed rear subgroup G3c with positive power. Its front surface is source surface 27, the second surface in
Example 1 explicitly assigned the patent's anti-reflection coating (¶0126, ¶0133).

Its glass coordinates match L21, but the geometry and sign of power are different: L21 is a negative focus-group element,
whereas L36 is a positive rear-group element. The shared material identification does not imply a shared optical role.

### L37 — Biconvex Positive, D4 Front Member

**Standalone:** nd = 1.64000, νd = 60.20. Glass: J-LAK01 (HIKARI). f = +90.428 mm.

L37 is the positive front member of the final cemented pair. Together with L38, D4 has a verified net focal length of
**+166.933940 mm**.

D4 therefore remains positive despite the negative L38 member. Combined with L36, it gives G3c its comparatively strong
+69.945826 mm in-situ focal length.

### L38 — Biconcave Negative, D4 Rear Member

**Standalone:** nd = 1.84666, νd = 23.80. Glass: J-SF03 (HIKARI). f = −190.875 mm.

L38 is the final glass element in the active prescription and the negative rear member of D4. The repeated J-SF03
material gives the design another high-index, low-Abbe refractive contribution while the cemented pair remains net
positive.

The final image spacing follows source surface 31. The source rear filter is not represented as an element; its optical
path contribution has already been incorporated into the normalized air spacing.

## Glass Identification and Selection

The patent publishes nd and νd for the numerical example but does not name commercial glass grades. The HIKARI names in
the final data are therefore **catalog-derived coordinate matches**, not supplier statements from Nikon. Ten distinct
active optical-glass coordinate pairs match current HIKARI catalog entries; L11 and L12 are treated separately as
crystalline CaF2 because their source coordinates and the production specification converge on fluorite.

The final data also carries nC, nF, ng, and dPgF on every element. For the HIKARI-resolved entries these are catalog
enrichments. The current HIKARI catalog contains both J-SF03 and the optically coordinate-identical J-SF03HS variant at
nd = 1.84666 and νd = 23.80; the data uses the base J-SF03 label as a catalog-family annotation, not as a determination
of the production quality variant. For L11/L12, the line indices come from the Malitson CaF2 dispersion relation while
the patent's nd = 1.43385 and νd = 95.25 remain the prescription authority. The Malitson C/F indices imply νd ≈ 94.996, a difference of
about −0.254 from the patent value, so the spectral model is supplemental rather than a replacement for the source pair.

| Glass identification in final data | nd | νd | dPgF | Elements |
|---|---:|---:|---:|---|
| Fluorite (CaF2; Malitson 1963 spectral model) | 1.43385 | 95.25 | +0.05507 | L11, L12 |
| J-KZFH1 (HIKARI) | 1.61266 | 44.46 | −0.0058 | L13 |
| J-LASF017 (HIKARI) | 1.79500 | 45.31 | −0.0085 | L14 |
| J-FKH1 (HIKARI) | 1.49782 | 82.57 | +0.0327 | L15 |
| J-LASF016 (HIKARI) | 1.77250 | 49.62 | −0.0093 | L21, L36 |
| J-SF03 (HIKARI) | 1.84666 | 23.80 | +0.0171 | L22, L32, L33, L38 |
| J-K3 (HIKARI) | 1.51823 | 58.82 | −0.0008 | L23 |
| J-FK5 (HIKARI) | 1.48749 | 70.31 | +0.0027 | L31 |
| J-PSKH1 (HIKARI) | 1.59319 | 67.90 | +0.0135 | L34 |
| J-LASKH2 (HIKARI) | 1.75500 | 52.34 | −0.0090 | L35 |
| J-LAK01 (HIKARI) | 1.64000 | 60.20 | −0.0056 | L37 |

The strongest source-level chromatic strategy is visible in the patent's own conditional expressions. G1 uses very
high-Abbe positive material—L11 and L12 at νd = 95.25 and L15 at 82.57—while G2 intentionally includes a much more
dispersive positive member, L22 at νd = 23.80. The patent explicitly states that both choices contribute to axial and
lateral chromatic correction (¶0034–0041, ¶0054–0062, ¶0090–0101).

The final spectral enrichment is sufficient for line-index and partial-dispersion tracing, but the analysis does not label
the prescription apochromatic. Nikon markets two ED glass elements in addition to two fluorite elements. The viewer maps
the two ED tags inferentially to L15 (`νd = 82.57`) and L31 (`νd = 70.31`), the only non-fluorite positive elements with
exceptionally low dispersion in the selected example. That positional mapping is useful for the diagram, but it is not a
patent-stated surface assignment or a production-melt identification.

## Focus Mechanism

The focus status is **PUBLISHED**. No internal focus reconstruction is used.

The patent states that the complete negative G2 group moves imageward to focus from infinity toward a near object
(¶0127). In the published endpoint table, d11 increases from 19.530 to 34.930 mm while d16 decreases from 36.219 to
20.820 mm. The principal G2 translation is therefore 15.400 mm imageward; the 0.001 mm difference in the sum of the two
adjacent gaps is attributable to the published decimal precision.

The source table also changes Bf from 71.551 to 71.575 mm, a +0.024 mm shift, even though the prose describes focus by
G2 translation. The final data preserves this explicit endpoint difference as a +0.024 mm change in the normalized rear
air spacing. It is not interpreted as a second moving lens group.

| Variable spacing in final data | Infinity | Close endpoint | Change |
|---|---:|---:|---:|
| d11, before G2 | 19.530 mm | 34.930 mm | +15.400 mm |
| d16, after G2 | 36.219 mm | 20.820 mm | −15.399 mm |
| normalized rear spacing after surface 31 | 81.938849 mm | 81.962849 mm | +0.024 mm |

The original source geometry, including FLG and rear FL, corresponds to an object-to-image distance of 2.598906 m and
β = −0.173. After the project-required omission of these auxiliary optics and exact infinity refocus, retaining the published
internal G2 endpoint yields a verified paraxial object-to-image distance of **2.590180 m** and magnification **−0.173643**. The data
file retains Nikon's marketed `closeFocusM` value of 2.6 m rather than replacing it with the normalized model's more
precise computational result.

The final model uses a physical stop radius of 18.573431 mm inferred from the patent FNO and the source pupil trace.
After removal of FLG, preserving that physical stop gives the modeled f-number 2.881515520 used by `nominalFno` and
`apertureDesign`. The stop diameter is therefore a modeling inference, not a patent-published aperture diameter.

Nikon identifies the production lens as an AF-S internal-focus lens using SWM. The optical data model represents only the
published G2 motion; it does not model autofocus motor mechanics.

## Chromatic Correction Strategy

The patent's chromatic strategy is distributed across several groups rather than concentrated in a single cemented front
achromat. The front of G1 uses two low-index, very high-Abbe positive elements, followed by a moderate-dispersion negative
member. G1b then combines a dense negative meniscus with a high-Abbe positive meniscus. The moving G2 group reverses the
pattern by combining negative power with a positive element of very low νd. The rear groups continue to alternate
low/moderate-dispersion crowns with repeated high-index J-SF03-class material.

This arrangement is consistent with the patent's repeated emphasis on both axial and lateral chromatic correction. The
source conditions do not merely demand low dispersion everywhere: they deliberately specify high-Abbe positive material
in G1 and a low-Abbe positive material in G2. That separation gives different groups opposite chromatic leverage while
preserving the required net powers.

The final data's direct line indices and dPgF values allow the LensVisualizer dispersion engine to model more than an
Abbe-only approximation. Those spectral values are catalog/model enrichments layered onto the patent prescription, and
they should not be read as evidence that the patent itself disclosed the commercial glass grades or full dispersion
curves.

## Conditional Expressions

Example 1 satisfies the material and power conditions emphasized by the patent. Values below are taken from the final
data where the quantity is unchanged by plate normalization, or are explicitly identified as source-defined where the
omitted FLG changes the original geometric definition.

| Patent condition | Final/source value | Required interval | Status |
|---|---:|---:|---|
| (1-1), (2-1): f/f12 | 0.380028, active normalized model | 0.10–0.55 / 0.10–0.85 | satisfied |
| (1-2), (2-4): νd1p, L11 | 95.25 | 80–110 | satisfied |
| (1-2), (2-4): νd1p, L12 | 95.25 | 80–110 | satisfied |
| (1-2), (2-4): νd1p, L15 | 82.57 | 80–110 | satisfied |
| (1-3), (2-5): νd1pf | 95.25 | 80–110 | satisfied |
| (1-4), (2-6): nd1n, L13 | 1.61266 | 1.50–1.75 | satisfied |
| (1-5), (2-7): TL1a/TL1 | 0.47 published; 0.45088 normalized geometric counterpart | 0.30–0.70 | satisfied |
| (1-6), (2-8): νd1bp, L15 | 82.57 | 70–110 | satisfied |
| (1-7), (2-3): νd2p, L22 | 23.80 | 15–30 | satisfied |
| (2-2): nd2n, L23 | 1.51823 | 1.45–1.65 | satisfied |

The TL1a/TL1 entry requires special care. The patent's G1a definition includes the front protective glass FLG, so the
published corresponding value 0.47 belongs to the full source model. Once FLG is intentionally omitted, the analogous
surface-3-to-8 length divided by the active surface-3-to-11 G1 length is about 0.45088. Both lie inside the patent interval,
but only 0.47 is the patent's formally defined Example 1 value.

## Image Stabilization

The patent assigns vibration reduction to G3b, which consists of cemented L33/L34 followed by L35. G3b has a verified
in-situ focal length of −58.558761 mm. During stabilization this subgroup moves with a component transverse to the optical
axis (¶0127).

The patent states that using G3b as the moving stabilization group allows the moving unit to remain comparatively small
and limits decenter-induced aberration during vibration reduction (¶0046–0047). This is a source-level functional claim.
The final centered sequential prescription does not encode a transverse VR displacement because Example 1 supplies no
numerical decenter range. No synthetic stabilization state is therefore introduced.

Nikon independently identifies the production lens as a VR lens and specifies NORMAL and SPORT operating modes. These
product features support the production correlation but do not alter the centered patent prescription analyzed here.

## Verification Summary

The final analysis is based on the normalized active `.data.ts` file, not on the raw source table alone. Independent
sequential y–ν tracing and an ABCD matrix give the same infinity EFL to machine precision. The principal verified values
for the authored model are:

| Quantity | Verified final-model value |
|---|---:|
| EFL | 391.496520967 mm |
| BFL from source surface 31 | 81.938849396 mm |
| Source surface 3 to image track | 390.337849396 mm |
| TL/EFL | 0.997040404 |
| Entrance-pupil diameter | 135.864796918 mm |
| Modeled f-number | 2.881515520 |
| Active f/f12 | 0.380027758 |
| Petzval sum | 0.000252158506 mm⁻¹ |
| Equivalent Petzval radius | 3965.759537 mm |
| Normalized close object-to-image distance | 2.590179567 m |
| Normalized close magnification | −0.173642730 |

The clear semi-diameters in the data file are not patent-published dimensions. They were inferred from the modeled
marginal/chief-ray envelopes, the source optical section, and physical geometry constraints. In the final arrays the
minimum computed element edge thickness is 0.612926 mm and the maximum spherical rim-slope angle is 44.178815°; all
infinity and close-focus air gaps pass the current shared-band sag-intrusion check used by the Stage 2 verifier. These
results validate the authored geometry but do not convert the inferred semi-diameters into source facts.

There are no aspherical surfaces in the selected embodiment and no scaling transformation. The patent's generic statement
that other embodiments may use aspheres does not change Example 1's all-spherical numerical prescription.

## Sources

1. **JP 2015-215559 A**, Nikon Corporation, filed 2014-05-13, published 2015-12-03. Example 1: ¶0122–0133; Table 1;
   Figure 1. The prescription, focus states, group structure, coating locations, and patent conditional expressions come
   from this publication.
2. **Nikon Corporation**, “AF-S NIKKOR 400mm f/2.8E FL ED VR / AF-S TELECONVERTER TC-14E III,” 2014-05-14.
   <https://www.nikon.com/company/news/2014/0514_lens_02/>
3. **Nikon Imaging**, “AF-S NIKKOR 400mm f/2.8E FL ED VR.” Production specifications used for the marketed 400 mm f/2.8,
   FX coverage, 16-element/12-group construction plus protective glass, two fluorite and two ED elements, 2.6 m MFD,
   0.17× reproduction ratio, nine rounded blades, IF, SWM, and VR.
   <https://imaging.nikon.com/imaging/lineup/lens/f-mount/singlefocal/telephoto/af-s_400mmf_28e_fl_ed_vr/>
4. **HIKARI Glass**, current optical-glass catalog data. Used for catalog matching and supplemental C/F/g line indices and
   dPgF values on the HIKARI-resolved elements.
   <https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_ALL_Catalog_Data.xlsx>
5. **I. H. Malitson**, “A Redetermination of Some Optical Properties of Calcium Fluoride,” *Applied Optics* 2(11), 1963.
   Used only for supplemental CaF2 spectral indices on L11/L12; the patent nd/νd pair remains authoritative.
   <https://opg.optica.org/ao/fulltext.cfm?uri=ao-2-11-1103>
