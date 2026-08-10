# TAMRON SP 70-300mm f/4-5.6 Di VC USD

## Patent Reference and Design Identification

**Patent:** US 8,228,605 B2<br>
**Application Number:** 13/016,045<br>
**Priority:** January 29, 2010 (JP 2010-019059)<br>
**Filed:** January 28, 2011<br>
**Granted:** July 24, 2012<br>
**Inventors:** Akio Arakawa; Lai Wei<br>
**Assignee:** Tamron Co., Ltd.<br>
**Title:** Anti-Vibration Zoom Lens Optics<br>
**Embodiment analyzed:** Example 2

The prescription is the second embodiment of US 8,228,605 B2, identified in the patent by the Figure 12–22 drawing and aberration set.[1] The production correlation is fixed to the Tamron SP 70-300mm f/4-5.6 Di VC USD, Model A005. Tamron lists the A005 as a 17-element, 12-group full-frame-compatible Di zoom offered in Canon EF, Nikon F, and Sony A variants.[2]

Several characteristics converge on that correlation without constituting a manufacturer statement that the patent example is the production prescription:

1. Example 2 contains 17 physical glass elements in 12 air-spaced groups, exactly matching Tamron's published construction count.[1][2]
2. The patent uses four functional zoom groups with positive, negative, positive, and positive refractive power. Its fourth group is divided into three subgroups, with the middle subgroup shifted transversely for vibration compensation.[1]
3. The unscaled Example 2 first-order range is 71.749901–292.014045 mm, close to but not identical with the marketed 70–300 mm range. The modeled maximum aperture likewise runs from f/4.121871 to f/5.852625 rather than reproducing the rounded f/4–5.6 product designation exactly.
4. The patent priority date precedes the A005 launch. Tamron dates the Nikon F version to August 26, 2010, the Canon EF version to September 25, 2010, and the Sony A version to May 20, 2011.[2]

No uniform scale is applied: the data use `s = 1.0`, and the marketed 70–300 mm designation remains separate from the patent-derived focal lengths. Example 2 itself prints `f = 71.75–150.0–292.00`, while the adjacent variable-spacing table prints `292.50` over the telephoto column. Independent tracing of the final data gives 292.014045 mm, so the model uses 292.00 mm as the third zoom control point and retains 292.50 only as a documented source error.[1]

The aperture stop is the patent's surface 13. The source prints `R = 0.0000` for that non-refracting stop plane; the data represent it as exactly one flat `STO` surface with `R = 1e15`. No sensor cover glass, filter, inactive dummy surface, or mechanical component is included. All refracting surfaces are spherical, so no aspheric coefficient conversion or scale transformation is applicable.

## Optical Architecture

Example 2 is a four-group positive-negative-positive-positive zoom. The first-order powers recomputed from the final prescription are:

| Functional group | Data span | Elements | Computed focal length | First-order role |
|---|---|---|---:|---|
| I | 1–5 | L101–L103 | +119.531 mm | Positive front group |
| II | 6–12 | L104–L107 | −29.759 mm | Strong negative variator group |
| III | 14–18 | L109–L111 | +54.839 mm | Positive group immediately behind the stop |
| IV | 19–30 | L112–L118 | +604.856 mm | Weakly positive rear group containing the VC subsystem |

The rear group is itself a three-part power sequence:

| Subgroup | Data span | Elements | Computed focal length | Patent function |
|---|---|---|---:|---|
| IV-1 / 141 | 19–23 | L112–L114 | +98.770 mm | Positive leading subgroup |
| IV-2 / 142 | 24–26 | L115–L116 | −61.094 mm | Transversely shifted anti-vibration subgroup |
| IV-3 / 143 | 27–30 | L117–L118 | +168.405 mm | Positive trailing subgroup |

These group focal lengths describe complete in-situ subassemblies. They are not interchangeable with the standalone focal lengths stored for individual elements or with the net powers of cemented pairs. The relatively weak positive power of Group IV, for example, results from the separated +/−/+ subgroup combination rather than from any single weak element.

The zoom motion is specified by four published variable air spaces. The final data preserve all three source states because the Group III-to-IV spacing reverses at the intermediate position:

| Variable gap | 71.75 mm | 150.00 mm | 292.00 mm | Trend |
|---|---:|---:|---:|---|
| D5 | 3.5000 mm | 32.0254 mm | 46.4397 mm | Increases |
| D12 | 31.2341 mm | 17.5696 mm | 2.5000 mm | Decreases |
| D18 | 4.3009 mm | 2.0000 mm | 6.0952 mm | Reverses |
| BF | 47.5369 mm | 62.6975 mm | 81.5776 mm | Increases |

The patent describes the corresponding kinematics qualitatively: the separation between Groups I and II increases toward telephoto, Groups II and III approach one another, and Groups III and IV move toward the object by different amounts.[1] The piecewise three-state model preserves the reversal that would be lost in a simple wide-to-tele interpolation.

Under the project's strict layout definition, only the telephoto state is telephoto in the geometrical sense: the total-track/EFL ratio is 0.812 at 292 mm, below unity. The wide and intermediate ratios are greater than unity. No state is retrofocus because the back focal distance remains smaller than the EFL throughout the modeled zoom range.

## Element-by-Element Analysis

### L101 — Biconvex Positive

**nd = 1.48749, νd = 70.2. Glass: 487702 class (vendor unspecified). Standalone f = +353.341 mm.**

L101 is a comparatively weak positive front element. Its large modeled clear aperture and modest standalone power make it the entrance member of the positive first group rather than the principal source of that group's refractive power. Group I as a whole is substantially stronger at +119.531 mm because L101 acts together with the following cemented pair and the intervening separation.

The element is not cemented. Its glass annotation is deliberately a coordinate class rather than a named melt because the patent publishes only `nd` and `νd`.

### L102 + L103 — D1 Cemented Pair

**L102:** nd = 1.69895, νd = 30.1. Glass: 699301 class (vendor unspecified). Standalone f = −239.073 mm.<br>
**L103:** nd = 1.43875, νd = 94.9. Glass: 439950 class (vendor unspecified). Standalone f = +99.396 mm.

L102 is a negative meniscus cemented directly to the strongly positive, very-low-dispersion-coordinate L103. The two elements have a computed cemented net focal length of +172.424 mm in air. That cemented result is distinct from both standalone powers above and from the +119.531 mm power of the complete first group.

L103 is the element that directly satisfies the patent's requirement for at least one positive element in Group I with an Abbe number of 80 or greater: its stored value is νd = 94.9.[1] The patent links that high-Abbe condition to chromatic correction toward the telephoto end. Tamron's official A005 optical-construction graphic marks the rear element of the corresponding front cemented pair as XLD.[4] Under the fixed Example 2 correlation, that position and shape align with L103; this is a product-to-patent diagram correlation, not a patent-specified glass name or melt identity.

### L104 — Biconcave Negative

**nd = 1.77250, νd = 49.6. Glass: 773496 class (vendor unspecified). Standalone f = −57.523 mm.**

L104 begins the strongly negative second zoom group. Its biconcave form and substantial negative standalone power are consistent with the group's variator role. The large zoom change in D5 occurs immediately in front of this element, so the axial position of Group II changes strongly relative to Group I as magnification increases.

No cemented interface is associated with L104. Its optical contribution must therefore be separated conceptually from the following D2 pair even though all three components participate in the same negative functional group.

### L105 + L106 — D2 Cemented Pair

**L105:** nd = 1.77250, νd = 49.6. Glass: 773496 class (vendor unspecified). Standalone f = −33.038 mm.<br>
**L106:** nd = 1.84666, νd = 23.8. Glass: 847238 class (vendor unspecified). Standalone f = +42.147 mm.

The D2 pair combines a negative L105 with a positive, high-index and low-Abbe L106. Its cemented net focal length is −169.906 mm in air. The pair therefore remains negative despite the positive standalone power of L106.

Within Group II, the D2 pair operates with the isolated L104 and L107 elements and with finite air separations. The complete group's computed focal length is only −29.759 mm, illustrating why standalone and cemented focal lengths should not be read as direct measures of in-situ group contribution.

### L107 — Negative Meniscus

**nd = 1.61800, νd = 63.4. Glass: 618634 class (vendor unspecified). Standalone f = −113.069 mm.**

L107 closes Group II immediately ahead of the variable D12 air space and the aperture stop. D12 contracts from 31.2341 mm at wide angle to 2.5000 mm at telephoto, so this rear negative element approaches the stop region markedly as the zoom moves toward its long end.

Its negative standalone power supplements the negative variator group while its relatively higher Abbe number distinguishes it from the dense low-Abbe L106 in the same group. No stronger chromatic attribution is made because no line-index or partial-dispersion data are authored.

### L109 — Biconvex Positive

**nd = 1.88300, νd = 40.8. Glass: 883408 class (vendor unspecified). Standalone f = +45.391 mm.**

L109 is the first refracting element behind the stop and the dominant isolated positive element of Group III. Its standalone focal length is close to the +54.839 mm focal length of the complete group, although the following cemented pair materially changes the net behavior.

The patent places the aperture stop one millimeter ahead of L109. That placement is source-defined; only the stop's clear semi-diameter is inferred in the data model.

### L110 + L111 — D3 Cemented Pair

**L110:** nd = 1.49700, νd = 81.5. Glass: K-PFK80 / MC-FCD1-M20 class (production supplier unspecified). Standalone f = +51.592 mm.<br>
**L111:** nd = 1.90366, νd = 31.3. Glass: 904313 class (vendor unspecified). Standalone f = −38.975 mm.

D3 combines a high-Abbe positive L110 with a high-index negative L111. The cemented pair by itself has a net focal length of −188.328 mm in air, yet Group III remains positive at +54.839 mm because of the separated positive L109 and the complete three-element geometry.

This sign reversal between cemented-pair power and full-group power is a useful example of the distinction between component power and in-situ system behavior. Tamron's official A005 optical-construction graphic marks the corresponding positive member of this Group III cemented pair as LD.[4] Under the fixed Example 2 correlation, that position and shape align with L110, but the data retain a neutral coordinate class because the patent itself does not assign the production trade designation or a melt identity to lens 110.

### L112 + L113 — D4 Cemented Pair

**L112:** nd = 1.48749, νd = 70.2. Glass: 487702 class (vendor unspecified). Standalone f = +58.318 mm.<br>
**L113:** nd = 1.91082, νd = 35.3. Glass: 911353 class (vendor unspecified). Standalone f = −35.124 mm.

D4 is the leading cemented pair of Group IV and of subgroup IV-1. Its isolated cemented net focal length is −97.621 mm in air. Subgroup IV-1 nevertheless becomes positive at +98.770 mm once the separated positive L114 is included.

The pair's strong index contrast provides a compact way to redistribute positive and negative power inside the rear group. The patent identifies IV-1 as the positive leading subgroup but does not assign individual aberration-correction duties to L112 or L113.[1]

### L114 — Biconvex Positive

**nd = 1.51742, νd = 52.2. Glass: 517522 class (vendor unspecified). Standalone f = +48.061 mm.**

L114 completes subgroup IV-1. Its positive standalone power reverses the negative net sign of D4 when the complete separated three-element subgroup is considered, yielding the verified +98.770 mm IV-1 focal length.

A 14.1294 mm air space follows L114 before the vibration-compensation doublet. This is the patent's `d41` clearance used in one of the design conditions.

### L115 + L116 — D5 / IV-2 Vibration-Compensation Doublet

**L115:** nd = 1.80610, νd = 33.3. Glass: 806333 class (vendor unspecified). Standalone f = +33.212 mm.<br>
**L116:** nd = 1.77250, νd = 49.6. Glass: 773496 class (vendor unspecified). Standalone f = −21.354 mm.

L115 and L116 form the complete IV-2 / 142 subgroup, so their cemented net focal length and the subgroup focal length are the same computed quantity: −61.094 mm. The patent specifies that this negative subgroup moves perpendicular to the optical axis to compensate for image blur.[1]

The subgroup's 11.80 mm modeled semi-diameter is an authoring inference rather than a patent dimension. It is deliberately smaller than the adjacent IV-1 aperture model and is constrained by positive physical edge thickness in L115. No physical VC decenter in millimeters is authored because the patent does not publish one for Example 2.

### L117 — Biconvex Positive

**nd = 1.80610, νd = 40.7. Glass: 806407 class (vendor unspecified). Standalone f = +55.287 mm.**

L117 begins the trailing IV-3 subgroup with relatively strong positive standalone power. It is air-spaced from L118, so the +168.405 mm power of IV-3 is a separated two-element result rather than a cemented doublet power.

The 3.5054 mm air clearance in front of L117 is the patent's `d42` spacing. Together with the 14.1294 mm `d41` gap, it fixes the axial location of the movable IV-2 group within the rear assembly.

### L118 — Negative Meniscus

**nd = 1.77250, νd = 49.6. Glass: 773496 class (vendor unspecified). Standalone f = −68.672 mm.**

L118 is the final glass element and the negative member of the positive IV-3 subgroup. The positive L117 and negative L118 are separated by 9.0657 mm of air, producing a net positive subgroup despite L118's negative standalone power.

The final surface of L118 is followed by the zoom-dependent back-focus spacing. The data therefore terminate at the patent's final refracting surface and use the variable `BF` distance to the image plane rather than adding any sensor cover or filter plate.

## Glass Identification and Selection

The validated data deliberately use generic six-digit coordinate classes. The patent supplies `nd` and `νd` values but no manufacturer glass names, so catalog coordinate matches are kept separate from melt identity. Current OHARA, HIKARI, HOYA, and SUMITA sources provide the following representative matches; the residual is catalog minus patent. [5][6][7][8]

| Data glass annotation | nd | νd | Elements | Representative catalog coordinate | Δn | Δνd |
|---|---:|---:|---|---|---:|---:|
| 487702 class (vendor unspecified) | 1.48749 | 70.2 | L101, L112 | OHARA S-FSL5, 1.48749 / 70.23 | 0.00000 | +0.03 |
| 699301 class (vendor unspecified) | 1.69895 | 30.1 | L102 | HIKARI J-SF15, 1.69895 / 30.13 | 0.00000 | +0.03 |
| 439950 class (vendor unspecified) | 1.43875 | 94.9 | L103 | OHARA S-FPL53, 1.43875 / 94.93 | 0.00000 | +0.03 |
| 773496 class (vendor unspecified) | 1.77250 | 49.6 | L104, L105, L116, L118 | HIKARI J-LASF016, 1.77250 / 49.62 | 0.00000 | +0.02 |
| 847238 class (vendor unspecified) | 1.84666 | 23.8 | L106 | HIKARI J-SF03, 1.84666 / 23.80 | 0.00000 | 0.00 |
| 618634 class (vendor unspecified) | 1.61800 | 63.4 | L107 | HOYA PCD4, 1.61800 / 63.398 | 0.00000 | −0.002 |
| 883408 class (vendor unspecified) | 1.88300 | 40.8 | L109 | HOYA TAFD30, 1.88300 / 40.806 | 0.00000 | +0.006 |
| K-PFK80 / MC-FCD1-M20 class (supplier unspecified) | 1.49700 | 81.5 | L110 | SUMITA K-PFK80, 1.49700 / 81.5; HOYA MC-FCD1-M20, 1.49690 / 81.51 | 0.00000 / −0.00010 | 0.00 / +0.01 |
| 904313 class (vendor unspecified) | 1.90366 | 31.3 | L111 | HOYA TAFD25, 1.90366 / 31.315 | 0.00000 | +0.015 |
| 911353 class (vendor unspecified) | 1.91082 | 35.3 | L113 | HOYA TAFD35L, 1.91082 / 35.254 | 0.00000 | −0.046 |
| 517522 class (vendor unspecified) | 1.51742 | 52.2 | L114 | HIKARI J-KF6, 1.51742 / 52.20 | 0.00000 | 0.00 |
| 806333 class (vendor unspecified) | 1.80610 | 33.3 | L115 | HOYA NBFD15, 1.80610 / 33.269 | 0.00000 | −0.031 |
| 806407 class (vendor unspecified) | 1.80610 | 40.7 | L117 | HOYA NBFD13, 1.80610 / 40.735 | 0.00000 | +0.035 |

The classes are therefore coordinate-compatible with current catalog materials, but that does not establish which vendor or melt Tamron used. The distinction is especially important for L110: SUMITA's K-PFK80 is code 497815 and exactly reproduces the patent's 1.49700 / 81.5 coordinate, while HOYA's coefficient-backed MC-FCD1-M20 row carries the same code at 1.49690 / 81.51. Both are kept as qualified equivalents; the neighboring 497816 family is not folded into the label.[8]

Tamron states that the A005 uses XLD together with LD material, and its official optical-construction graphic marks the element positions.[3][4] Under the fixed Example 2 correlation, the XLD-marked production position aligns with L103 and the LD-marked position aligns with L110. This remains a product-to-patent diagram correlation inference: neither the patent nor the catalog matches establish a production melt identity for those patent elements.

No `nC`, `nF`, `ng`, or `dPgF` fields are authored. Consequently, the analysis does not characterize the design as apochromatic and does not claim anomalous-partial-dispersion behavior from Abbe number alone.

## Focus Mechanism

The focus status is **NO_INTERNAL_RECONSTRUCTION**. Example 2 publishes zoom spacings at infinity but does not provide a focus-group designation, an object-distance spacing table, a close-focus prescription, or a mechanism constraint sufficient to solve internal focus travel.[1]

Tamron publishes a 1.5 m minimum object distance and a 1:4 maximum magnification ratio at 300 mm for the production A005.[2] The data retain `closeFocusM: 1.5` because the schema requires that production metadata, but the value is not used to generate a close-focus optical state. Every authored zoom-variable pair has identical infinity and close entries.

Accordingly, no moving focus group, focus travel, close-focus EFL, breathing value, or close-focus aberration result is asserted. Those quantities would require mechanism-constraining primary evidence beyond the available patent example and production MOD specification.

## Chromatic Correction Strategy

The patent explicitly requires at least one positive element in Group I to have an Abbe number of 80 or greater and describes that condition in the context of reducing telephoto chromatic error.[1] L103 satisfies the condition with νd = 94.9. The prescription also places a second high-Abbe positive element, L110 at νd = 81.5, in Group III.

Several cemented pairs combine markedly different index/Abbe coordinates, particularly D1, D3, and D4. At the first-order level this provides positive and negative refractive components within compact assemblies, but the available data do not support a more specific secondary-spectrum claim. Without validated line indices, `dPgF`, or a uniquely resolved Sellmeier glass identity, only conventional Abbe-level chromatic interpretation is warranted.

Tamron's production XLD/LD designations are therefore kept separate from the patent's exact glass coordinates.[3][4] The production optical-construction graphic supports the positional correlation of XLD with L103 and LD with L110, but it does not turn either patent coordinate into a vendor-specific melt assignment.

## Conditional Expressions

The patent places explicit limits on the rear-group geometry and power distribution. Recomputing the quantities from the final data gives:

| Patent condition | Computed value | Result |
|---|---:|---|
| `1 < d41/d42 < 4.5` | 4.030753 | Pass |
| `0 < f4` | +604.855951 mm | Pass |
| `−0.5 < f42/f43 < 0.2` | −0.362780 | Pass |
| `−1.0 < f4/f43 < 4.0` | +3.591675 | Pass |

Here `d41 = 14.1294 mm` is the air space after L114 and `d42 = 3.5054 mm` is the air space after the VC doublet. The focal-length ratios use the independently recomputed powers of Group IV, IV-2, and IV-3 rather than rounded source-table values.

The geometry condition places the movable IV-2 group much closer to IV-3 than to IV-1 while remaining inside the patent's permitted range. The power conditions preserve a positive rear group containing a negative vibration-compensation subgroup and a positive trailing subgroup, which is the architecture described in the patent claims.[1]

## Image Stabilization

The patent identifies IV-2 / subgroup 142, consisting of L115 and L116, as the anti-vibration unit. It moves perpendicular to the optical axis rather than longitudinally. In the centered prescription it is a negative cemented doublet with a computed focal length of −61.094 mm.[1]

Example 2 does not publish a physical transverse displacement in millimeters or a complete decentered surface table. The centered LensVisualizer data therefore do not invent a VC shift state. Patent Figures 20–22 document shifted-coma behavior qualitatively, but those plots are not converted into an unsupported decenter amplitude.

Tamron's production documentation requires one mount-specific qualification. The A005 specification lists Canon EF, Nikon F, and Sony A versions, but explicitly states that the Sony A version omitted the lens-based VC mechanism because Sony bodies provided in-body stabilization.[2] The data's three mount identifiers therefore describe production optical-formula variants; they should not be read as evidence that every mount variant contained identical stabilization hardware.

## Verification Summary

The final TypeScript prescription was traced independently with sequential height/reduced-angle matrices and a separate `(y,u)` ABCD formulation. The two methods agree to floating-point precision. The principal first-order results are:

| State | Computed EFL | Patent f | Computed BFD | Published BF | Modeled maximum f-number |
|---|---:|---:|---:|---:|---:|
| Wide | 71.749901 mm | 71.75 mm | 47.536995 mm | 47.5369 mm | f/4.121871 |
| Intermediate | 150.001585 mm | 150.00 mm | 62.698804 mm | 62.6975 mm | f/4.826957 |
| Tele | 292.014045 mm | 292.00 mm | 81.583349 mm | 81.5776 mm | f/5.852625 |

The modeled maximum f-numbers derive from a single inferred stop semi-diameter of 13.9203457 mm. The patent publishes the stop location and rounded f-numbers but not the stop diameter, so this semi-diameter is a modeling inference rather than a source dimension. It is the midpoint of the fixed-stop interval consistent with all three printed patent f-number rounding ranges.

The surface semi-diameters are likewise inferred rather than transcribed. They were constrained by the patent's Figure 12 optical section, paraxial ray envelopes, the production 62 mm filter context, and the current geometry rules. In the resulting model, the smallest physical edge thickness is 0.264587 mm at L115, the limiting 7→8 air-gap sag intrusion is 0.890846 of the gap, the largest spherical rim angle is 38.2975°, and the minimum clearance among the default modeled on-axis/off-axis ray fans is 0.562871 mm. These are validation results for the authored aperture model, not patent clear-aperture specifications.

The surface-by-surface Petzval sum is +0.00147875896 mm⁻¹, corresponding to a reciprocal magnitude of about 676.243 mm. No conic or aspheric limit is applicable because the design is entirely spherical.

The production designation remains deliberately separate from the design values. Tamron markets the lens as 70–300 mm f/4–5.6, whereas the unscaled patent model traces as 71.749901–292.014045 mm with modeled wide-open values of f/4.121871–5.852625. No endpoint scaling is used to force those quantities to the marketed numbers.

## Sources / References

1. Akio Arakawa and Lai Wei, **US 8,228,605 B2, “Anti-Vibration Zoom Lens Optics,”** Tamron Co., Ltd., granted July 24, 2012. Example 2 prescription and zoom table: patent pp. 9–10; claims: pp. 10–12; Figures 12–22: drawing sheets 12–22.
2. Tamron Co., Ltd., **SP 70-300mm F/4-5.6 Di VC USD (Model A005) — Specifications**: https://www.tamron.com/global/consumer/lenses/a005/spec.html
3. Tamron Co., Ltd., **SP 70-300mm F/4-5.6 Di VC USD (Model A005) — Product Overview**: https://www.tamron.com/global/consumer/lenses/a005/
4. Tamron Co., Ltd., **A005 Optical Construction**: https://www.tamron.com/product/pc_file/file/a005_lens-construction_en.svg
5. OHARA Corp., current optical-glass data for **S-FSL5** and **S-FPL53**: https://oharacorp.com/glass/s-fsl5/ and https://oharacorp.com/glass/s-fpl53/
6. HIKARI GLASS CO., LTD., current optical-glass catalog/data for **J-SF15, J-SF03, J-LASF016, and J-KF6**: https://www.hikari-g.co.jp/optical_glass/catalog/
7. HOYA GROUP Optics Division, **Optical Glass Data Download, 2026-06-01** and cross-reference data: https://www.hoya-opticalworld.com/english/datadownload/index.html
8. SUMITA OPTICAL GLASS, Inc., current **K-PFK80** product data and optical-glass data book: https://www.sumita-opt.co.jp/en/products/preform.html
