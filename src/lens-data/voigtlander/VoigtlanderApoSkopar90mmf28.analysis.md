# VOIGTLÄNDER APO-SKOPAR 90mm f/2.8 VM / SL IIs — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** JP 2023-049919 A  
**Application Number:** JP 2021-159942  
**Filed:** 2021-09-29  
**Published:** 2023-04-10  
**Inventor:** Yuki Shibata  
**Applicant:** Cosina Co., Ltd.  
**Title:** 撮像レンズ (Imaging Lens)  
**Embodiment analyzed:** Example 1

The prescription is the first numerical example of JP 2023-049919 A. It is associated here with the VOIGTLÄNDER APO-SKOPAR 90mm f/2.8 production design in its VM and SL IIs forms. This is a production correlation based on convergent technical evidence; the cited manufacturer material does not identify the patent or state that Example 1 is the production prescription.

1. Example 1 contains seven elements in seven air-spaced groups, matching both production versions.
2. Cosina's official VM and SL IIs optical diagrams are identical to one another and match Example 1's seven-element topology, meniscus sequence, stop placement, and separated rear pair.
3. The patent gives a design focal length of 87.30 mm, F/2.88, and a 27.44° full field. These values correspond to the marketed 90 mm and f/2.8 specifications, with published angles of view of 27.4° for the VM version and 27.5° for the SL IIs version.
4. The patent publishes unit focusing: all internal spacings remain fixed while the image-side gap increases. Cosina describes both production lenses as extending the complete lens assembly for focusing.
5. At the patent's close state, the object plane lies 800 mm before surface 1 and the image plane lies 50.34 mm after surface 15. After reference-plane normalization, the full object-to-image distance is 896.53 mm, consistent with a marketed 0.9 m minimum focus distance.
6. The independently traced close state gives a magnification magnitude of 0.12254×, or approximately 1:8.16, consistent with the SL IIs specification of approximately 1:8.1.
7. Cosina filed the application on 2021-09-29, before the announced 2021-11-30 release of both products.

The data file therefore records the common optical formula rather than the mechanical implementation of either mount. Marketing and design values remain separate: the public name uses 90 mm and f/2.8, `focalLengthDesign` stores the independently calculated 87.26085 mm focal length, `apertureDesign` preserves the patent's F/2.88, and `nominalFno` stores the 2.880007 value produced by the authored stop model.

## Optical Architecture

Example 1 is an all-spherical, marginally telephoto prime organized as a positive front functional group, an aperture stop, and a positive rear functional group. Its surface-1-to-image length of 85.83 mm is slightly shorter than its calculated 87.26085 mm focal length, giving a strict total-length ratio of about 0.984. It is not retrofocus: the 39.64 mm published back focus is far shorter than the focal length.

The front functional group comprises five air-spaced menisci. L1, L2, and L3 are positive; L4 and L5 are negative. The patent specifies that all ten refracting surfaces in this group bulge toward object space and that the object-side radii of L1, L2, and L3 decrease in sequence. This nested, same-direction curvature is presented as a means of reducing the axial gaps between successive elements and shortening the assembly (¶0032–0036).

The front group is weakly positive as a whole, with a calculated focal length of +227.98468 mm. Its three positive menisci are therefore substantially counterbalanced by the two negative menisci. The aperture stop follows L5 by 3.00 mm. A 14.19 mm stop-to-L6 air gap separates the front and rear functional groups.

The rear group consists of the strong biconvex L6 followed by the negative meniscus L7. Although L7 is negative as a standalone element, the pair remains positive, with a calculated group focal length of +74.67470 mm. The complete system combines this comparatively strong rear-group power with the weaker positive front group to produce the 87.26085 mm system focal length.

All seven elements are air spaced. There are no cemented doublets or triplets, no aspherical surfaces, and no internal moving group. The standalone focal lengths given below are thick-lens focal lengths of the isolated elements in air; they are not equivalent to each element's incremental in-situ contribution inside the assembled lens.

## Element-by-Element Analysis

### L1 — Positive Meniscus, convex to object

**nd = 1.72916, νd = 54.67. Glass: TAC8 optical equivalent; patent vendor unspecified. Standalone f = +80.72666 mm.**

L1 is the first positive collector and the largest-diameter glass element in the model. Its two positive radii form an object-convex meniscus. In the front-group power balance, it supplies moderate positive power before the two very-low-index, high-Abbe menisci.

The compatible TAC8 curve supplies dispersion without asserting that HOYA furnished the production glass; the patent names no supplier.

### L2 — Positive Meniscus, convex to object

**nd = 1.43700, νd = 95.10. Glass: FCD100 optical equivalent; patent vendor unspecified. Standalone f = +96.75289 mm.**

L2 is the first of the two elements expressly governed by Patent Conditions 1 and 2: nd is below 1.54 and νd is above 76. Its low refractive index and high Abbe number make it the clearest prescription-level expression of the patent's chromatic strategy (¶0024–0025, ¶0043).

L2 is air spaced from both L1 and L3. Its inferred 16.8 mm semi-diameter is not a patent value; it belongs to the validated geometric model described below.

### L3 — Positive Meniscus, convex to object

**nd = 1.43700, νd = 95.10. Glass: FCD100 optical equivalent; patent vendor unspecified. Standalone f = +86.32510 mm.**

L3 repeats the optical position of L2 and independently satisfies the same two patent conditions. It is somewhat stronger than L2 as an isolated element because of its more strongly curved surfaces and greater center thickness.

Together, L2 and L3 provide two high-Abbe positive components within the front group. The patent attributes the use of at least two such positive lenses to axial-color correction and to permitting a shorter back focus without relying on aspheres. The stored data support that statement only at the nd/νd level; they do not establish partial-dispersion behavior.

### L4 — Negative Meniscus, convex to object

**nd = 1.65412, νd = 39.68. Glass: N-KZFS5 optical equivalent; patent vendor unspecified. Standalone f = −29.83801 mm.**

L4 is the strongest negative standalone element in the lens. Its negative power sharply offsets the three preceding positive menisci and begins the negative portion of the front functional group described in ¶0032.

The glass label identifies a compatible public curve, not a confirmed production material. No dPgF or line-index data are stored, so the model does not treat L4 as independently demonstrated anomalous-dispersion glass.

### L5 — Negative Meniscus, convex to object

**nd = 1.90366, νd = 31.32. Glass: N-LASF46B optical equivalent; patent vendor unspecified. Standalone f = −83.55088 mm.**

L5 is a thin, high-index negative meniscus immediately before the aperture stop. Its high index permits useful negative power with relatively moderate surface curvature and a 1.20 mm center thickness.

In Example 1, L5 is a singlet. This distinguishes it from Examples 2 and 3, in which the corresponding negative component is formed as a cemented pair. The selected embodiment therefore preserves the seven-element, seven-group construction rather than the more complex sibling arrangements (¶0026, ¶0036, ¶0046).

### L6 — Biconvex Positive

**nd = 1.78590, νd = 43.94. Glass: NBFD11 optical equivalent; patent vendor unspecified. Standalone f = +28.61083 mm.**

L6 is the strongest positive standalone element. Its biconvex form supplies most of the rear group's positive power after the long stop-to-rear-group air space.

The patent permits either separated rear singlets or a cemented rear pair. Example 1 uses the separated form, so L6 and L7 remain independent air-spaced elements (¶0027, ¶0037).

### L7 — Negative Meniscus, convex to image

**nd = 1.78800, νd = 47.35. Glass: J-LASF014 optical equivalent; patent vendor unspecified. Standalone f = −42.84870 mm.**

L7 is the final refractive element. Its two negative radii form an image-convex negative meniscus. It reduces the very strong standalone power of L6 while leaving the rear pair positive at +74.67470 mm.

The last surface is weakly curved, with R = −388.64 mm. The published infinity image plane lies 39.64 mm behind that surface; this final air gap is also the sole focus variable in the data model.

## Glass Identification and Selection

The patent publishes nd and νd but no manufacturer glass names, line indices, Sellmeier coefficients, or anomalous-partial-dispersion values. The data file uses compatible public curves as optical equivalents while explicitly leaving the patent's production suppliers unspecified.

| Data-file glass label | nd | νd | Elements | Evidentiary status |
|---|---:|---:|---|---|
| TAC8 optical equivalent | 1.72916 | 54.67 | L1 | Compatible HOYA curve; supplier not identified |
| FCD100 optical equivalent | 1.43700 | 95.10 | L2, L3 | Compatible HOYA curve; supplier not identified |
| N-KZFS5 optical equivalent | 1.65412 | 39.68 | L4 | Compatible SCHOTT curve; no dPgF stored |
| N-LASF46B optical equivalent | 1.90366 | 31.32 | L5 | Compatible SCHOTT curve; supplier not identified |
| NBFD11 optical equivalent | 1.78590 | 43.94 | L6 | Compatible HOYA curve; supplier not identified |
| J-LASF014 optical equivalent | 1.78800 | 47.35 | L7 | Compatible Hikari curve; supplier not identified |

The product name contains “APO,” and Cosina's product literature describes abnormal-partial-dispersion glass in the production lenses. That product-level statement is not converted into element-level patent data here. Because the selected example supplies only nd and νd, the model does not assign `apd`, nC, nF, ng, or dPgF and does not claim that its Abbe-only spectral model independently demonstrates apochromatic correction.

## Focus Mechanism

The focus status is **PUBLISHED**. Example 1 uses unit focus: every spacing inside the optical assembly remains fixed, and the entire lens extends away from the image plane. The data file therefore varies only the final surface-15-to-image gap.

| State | Patent object gap ZD0 | Surface 15 to image | Change from infinity |
|---|---:|---:|---:|
| Infinity | Infinity | 39.64 mm | 0 mm |
| Published close state | 800 mm | 50.34 mm | +10.70 mm |

An independent finite-conjugate trace of the rounded prescription places the close image at 50.30683 mm behind surface 15, a −0.03317 mm residual from the published 50.34 mm. The calculated magnification is −0.12254×; the negative sign denotes image inversion, while the magnitude corresponds to approximately 1:8.16.

The patent's 800 mm ZD0 is measured from the object plane to the first optical surface. It is not the same reference as a marketed camera-to-subject minimum focus distance. Adding the lens track and the published close back focus gives 896.53 mm from object plane to image plane, explaining the production specification of 0.9 m after normal reference-plane differences and rounding.

## Chromatic Correction Strategy

The patent's chromatic strategy is concentrated in L2 and L3. Both use nd = 1.43700 and νd = 95.10, satisfying the explicit requirements nd < 1.54 and νd > 76. The patent states that these low-index, high-Abbe positive elements support axial chromatic correction while allowing the front group and back focus to remain compact (¶0024–0025).

The rest of the glass palette spans moderate- and high-index crown/flint classes, including the strong negative L4 and high-index L5. This distribution permits the front group to combine three positive menisci with two negative menisci while retaining a net positive focal length. The exact secondary-spectrum balance cannot be reconstructed from the published data because no partial-dispersion or wavelength-specific indices are provided.

## Conditional Expressions

The selected example satisfies all four conditions tabulated by the patent.

| Condition | Example 1 value | Result |
|---|---:|---|
| L2 and L3: nd < 1.54 | 1.43700 | Pass |
| L2 and L3: νd > 76 | 95.10 | Pass |
| 1.5 < f1/f < 3.5 | 2.61268 from the verified prescription | Pass |
| TTL/f < 1.2 | 0.98316 from the patent's rounded TTL and f | Pass |

The first two conditions define the low-index, high-Abbe positive lenses. The third constrains the positive front group's power relative to the complete lens. The fourth limits total optical length relative to focal length.

## Verification Summary

The prescription was checked by sequential reduced-angle tracing and an independently assembled ABCD matrix. The two matrices agreed exactly at double precision. Values below are computed from the final TypeScript arrays unless identified as published values.

| Quantity | Computed result | Patent value |
|---|---:|---:|
| Complete-system EFL | 87.26085 mm | 87.30 mm |
| Infinity BFD | 39.61400 mm | 39.64 mm |
| Front-group EFL | 227.98468 mm | 228.25 mm |
| Rear-group EFL | 74.67470 mm | 74.69 mm |
| Close-state BFD at ZD0 = 800 mm | 50.30683 mm | 50.34 mm |
| F-number from the authored stop | 2.880007 | 2.88 |
| Full-field chief-ray image height | 21.61048 mm | 21.63 mm plot coordinate |
| Petzval sum | +0.0019292861 mm⁻¹ | Not published |

The inferred semi-diameters passed the applicable spherical edge-thickness, actual rim-slope, shared-gap intrusion, off-axis containment, and render-trim surrogate checks at infinity and at the published close state. These checks validate the authored geometry; they do not convert inferred clear apertures into patent facts or establish zero corner vignetting across every pupil coordinate.

## Source and Modeling Qualifications

The patent publishes no semi-diameters and no physical stop diameter. The data file's semi-diameters are modeling inferences derived from the F/2.88 pupil solution, the Figure 1 section proportions, spherical edge geometry, shared-gap clearance, and representative on- and off-axis rays. The 8.8456 mm stop radius is reverse-derived from the modeled focal length and the published F-number; it is not a transcribed dimension. Its stored precision produces a modeled wide-open value of F/2.880007, which is used by `nominalFno`.

Paragraph 0041 permits protective glass and sensor-side filtering plates behind L7 but does not include them in Table 1. They are excluded from the active prescription. No dummy plane, flare-cutter surface, or mechanical component is modeled.

No dimensional scale factor was applied. Radii, center thicknesses, air gaps, and the image spacing preserve Example 1. The design is entirely spherical, so there are no aspheric coefficients and no coefficient scaling transformation.

Three source defects are interpreted rather than silently propagated. Claim 2 and ¶0011/¶0029 call the complete-system focal length `f1`, although the formula and the rest of the patent use `f`; the verified condition is TTL/f. Paragraph 0019 interchanges the descriptions of Figures 2 and 3; the rendered pages show Figure 2 as the aberration plots and Figure 3 as the condition table. Paragraph 0040 says Table 1 includes per-element focal lengths, but the rendered table contains no such column; the element focal lengths in the data file are independent computations.

## Sources

- Cosina Co., Ltd., JP 2023-049919 A, “撮像レンズ,” Example 1, especially ¶0032–0044, Table 1, and Figures 1–3.
- Cosina, “APO-SKOPAR 90mm F2.8 VM,” official product page: https://www.cosina.co.jp/voigtlander/en/vm-mount/apo-skopar-90mm-f2-8-vm/
- Cosina, “APO-SKOPAR 90mm F2.8 SL IIs,” official product page: https://www.cosina.co.jp/voigtlander/en/slr-mount/apo-skopar-90mm-f2-8-sl-iis/
- Cosina, official VM release-date notice: https://www.cosina.co.jp/news/フォクトレンダーブランド-apo-skopar-90mm-f2-8-vm-発売日の-お知らせ/
- Cosina, official SL IIs release-date notice: https://www.cosina.co.jp/news/フォクトレンダーブランド-apo-skopar-90mm-f2-8-sliis-発売日のお知らせ/
- OHARA, “Glass Type” and “Comparative Table of Recommended Glasses,” together with current HOYA, SCHOTT, HIKARI, CDGM, and Sumita optical-glass catalogs used for the class-level glass audit; no vendor identity was assigned where the patent remained silent.
