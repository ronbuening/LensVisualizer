## Patent Reference and Design Identification

**Patent:** JP 2013-250293 A  
**Application Number:** JP2012-122713  
**Filed:** 2012-05-30  
**Published:** 2013-12-12  
**Inventors:** Masashi Yamashita (山下 雅史); Mitsuaki Wada (和田 充晃)  
**Applicant:** Nikon Corporation (株式会社ニコン on the Japanese front page)  
**Title:** 撮影レンズ、光学機器、および撮影レンズの製造方法  
**Embodiment analyzed:** Example 1 / 第1実施例

The implemented prescription is a transcription of Example 1 in JP 2013-250293 A. The patent describes a long-focus photographic lens with positive first group G1, negative focusing group G2, and positive third group G3; G2 moves toward the image for closer focusing, while a subgroup of G3 shifts laterally for vibration reduction (¶0045–0050). Table 1 publishes the 38 source planes, the infinity system data, and three focus-spacing states.

The association with the production **AF-S NIKKOR 800mm f/5.6E FL ED VR** is a strong research correlation rather than a manufacturer-confirmed patent attribution. Several independent features converge:

1. Nikon specifies 20 lens elements in 13 groups plus one protective glass; Example 1 contains L1–L20 in 13 air-spaced lens groups plus the separate front protective glass HG. The LensVisualizer model therefore has 21 modeled glass entries and 14 air-spaced physical groups when HG is counted as an optical element.
2. Nikon specifies exactly two fluorite elements and two ED elements. Example 1 contains exactly two extreme low-index/high-Abbe elements at nd = 1.43382, νd = 95.13 and exactly two elements at nd = 1.49782, νd = 82.53. The mapping of those coordinates to the production special-element count is an inference; the patent itself does not name the materials.
3. The patent publishes f = 780.00 mm and FNO = 5.658, while Nikon markets the production lens as 800 mm f/5.6. The implemented paraxial EFL from the rounded prescription is 779.9213606 mm; the model does not rescale the patent to force 800 mm.
4. Nikon specifies internal focusing and lens-shift VR. Example 1 uses axial G2 motion for focusing and lateral G3b motion for stabilization.
5. The patent's closest published spacing state solves to approximately 5.798574 m from object to the source-model image plane with β = -0.155405. Nikon specifies 5.8 m minimum focus in manual focus and 1/6.4 = 0.15625 maximum reproduction in manual focus.
6. The application was filed on 2012-05-30, before Nikon announced the production lens on 2013-01-29 and before the Japanese on-sale date of 2013-05-31.

Those points support the correlation without establishing that Nikon has publicly identified this patent example as the production prescription.

## Optical Architecture

Example 1 is a three-group positive-negative-positive telephoto architecture. In the source model, G1 is positive, G2 is negative, and G3 is positive. G1 is subdivided into front subgroup G1a and rear subgroup G1b; G3 is subdivided into positive G3a, negative G3b, and positive G3c (¶0045–0049). The aperture stop lies between G3a and G3b at source surface 22.

The model has an infinity EFL of 779.9213606 mm and a first-surface-to-image physical track of 499.318 mm, giving track/EFL = 0.640216. Table 1 publishes TL = 499.319 mm (TL/EFL = 0.640217), which the model reproduces to source rounding. Paragraph 0051 labels TL as an air-equivalent lens total length, but the tabulated value numerically follows the direct physical D-sum rather than a full reduced-distance sum; this source label/value inconsistency is noted rather than silently resolved. Both ratios are below unity, so the design meets the project's quantitative definition of a telephoto lens. The last-surface back distance is 52.854 mm in the authored geometry and the computed BFL is 52.8355441 mm; BFD/EFL is far below unity, so the design is not retrofocus.

G1 is the large front collector. Patent ¶0031 states that the positive/negative composition of its separated front and rear subgroups is intended to facilitate correction of spherical and axial chromatic aberration. Within that group, G1a contains HG, L1, L2, and L3; the long 75 mm air space separates it from the cemented L4+L5 pair of G1b.

G2 is a compact negative group comprising L6 plus the cemented L7+L8 pair. It is the sole axial focusing group in the selected example. Patent ¶0030 attributes the moving negative group to maintaining correction, particularly spherical aberration, toward finite focus; the data model preserves the published movement rather than reconstructing a new focus law.

G3 contains the remaining relay and stabilization optics. G3a consists of cemented L9+L10 and L11, followed by the aperture stop. G3b consists of L12 and cemented L13+L14 and is the laterally movable VR subgroup. G3c contains cemented L15+L16, the exchangeable slip-in filter FL, L17, and the cemented L18+L19+L20 triplet.

The patent's exchangeable plane-parallel filter FL at source surfaces 31–32 (2.000 mm, nd = 1.51680, νd = 63.88) is modeled as a drawn plate at its source position, with the printed 9.000 mm air gaps on either side. Nikon's user's manual instructs that a filter be inserted whenever the slip-in holder is used and ships the holder with a neutral color (NC) filter in place, so the plate is part of the working prescription rather than an optional accessory. The patent itself treats FL as part of the design: condition (1) is defined on the object-side optics ahead of it, and ¶0049 lists NC, color, polarizing, ND, and IR-cut filters as interchangeable options for the same slot. The plate is not counted in `elementCount`, which follows Nikon's 20 lens elements plus protective glass.

The isolated functional-group focal lengths at infinity are approximately +285.282 mm for G1, -90.761 mm for G2, and +246.438 mm for G3. These are isolated paraxial group powers, not a statement that each group contributes independently by that amount in the assembled lens. In situ, each group receives the height and reduced angle produced by the preceding optics, so its effect on the system cannot be inferred by adding isolated focal powers.

## Element-by-Element Analysis

The focal lengths quoted below are the verified **standalone air-surrounded element focal lengths** stored in the final data file. They are useful shape-and-power descriptors, but they are not the same as the net power of a cemented stack and should not be read as direct measures of an element's aberration contribution in the assembled lens.

### HG — Front protective glass

**nd = 1.51680, νd = 64.07. Glass: J-BK7A (HIKARI). f = +2,481,772.924 mm.**

HG is an almost afocal front protective plate in G1a. The patent explicitly identifies it as protective glass of extremely weak, near-zero refractive power (¶0046). It is retained because it is part of the source optical path and part of the patent's object-side group definition, not because it supplies meaningful system power.

### L1 — Biconvex positive

**nd = 1.43382, νd = 95.13. Glass: CaF2 fluorite. f = +362.535 mm.**

L1 is the first powered lens of G1a. Its unusually low index and high Abbe number are consistent with a fluorite-class material, and Nikon specifies two fluorite elements in the production lens. The selected patent does not name L1 as fluorite, so the material identity remains an inference from the coordinate and production correlation.

### L2 — Biconvex positive

**nd = 1.43382, νd = 95.13. Glass: CaF2 fluorite. f = +383.515 mm.**

L2 repeats the same extreme nd/νd coordinate as L1 and is the second large positive lens in G1a. The pair accounts numerically for the two fluorite-class coordinates in the example, but the analysis does not assign separate chromatic roles to L1 and L2 beyond the patent's group-level statement about G1.

### L3 — Biconcave negative

**nd = 1.72000, νd = 50.17. Glass: J-LAK10 (HIKARI). f = -388.375 mm.**

L3 closes G1a as a weak negative element after the two large positive lenses. Its coordinate matches Hikari J-LAK10 (and the equivalent OHARA S-LAL10), but the supplier and melt are not established by the patent. The positive-positive-negative sequence is part of the patent's G1a construction; any more specific aberration assignment would be interpretive rather than source-stated.

### L4 + L5 — Cemented G1b pair (D1)

**L4:** nd = 1.69680, νd = 55.58. Glass: J-LAK14 (HIKARI). f = -197.270 mm.  
**L5:** nd = 1.49782, νd = 82.53. Glass: J-FKH1 (HIKARI). f = +168.484 mm.

L4 is a negative meniscus convex to the object; L5 is a positive meniscus convex to the object. They share a cemented interface and form G1b. Their standalone powers have opposite signs, but the cemented pair must be treated as one optical unit because the interface is glass-to-glass rather than glass-to-air. The verified cemented net focal length is about +1565.239 mm, much weaker than either standalone member.

The high-Abbe L5 coordinate is compatible with an extra-low-dispersion crown class. Nikon specifies two ED elements in the production lens, and Example 1 contains exactly two elements at this coordinate, L5 and L14. That correspondence is useful correlation evidence but does not prove Nikon's production glass identity for either element.

### L6 — Biconcave negative focus-group element

**nd = 1.79952, νd = 42.08. Glass: J-LASF02 (HIKARI). f = -128.696 mm.**

L6 is the first element of moving group G2. Together with D2 it forms a net negative focusing group with isolated group focal length about -90.761 mm. Its axial motion is specified by the patent; the analysis does not infer an independent aberration function for L6 from its sign or glass class.

### L7 + L8 — Cemented focus-group pair (D2)

**L7:** nd = 1.79504, νd = 28.70. Glass: J-LAFH3 (HIKARI). f = +103.941 mm.  
**L8:** nd = 1.69680, νd = 55.58. Glass: J-LAK14 (HIKARI). f = -78.800 mm.

L7 is a positive meniscus concave to the object and L8 is biconcave. They form the cemented rear portion of G2. Their verified cemented net focal length is about -321.477 mm. G2's system role is established by the patent as the translating focus group; the individual members' opposite standalone powers should not be mistaken for separate focus motions or independently verified aberration assignments.

### L9 + L10 — Cemented G3a pair (D3)

**L9:** nd = 1.48749, νd = 70.36. Glass: J-FK5 (HIKARI). f = +117.357 mm.  
**L10:** nd = 1.79504, νd = 28.70. Glass: J-LAFH3 (HIKARI). f = -142.529 mm.

L9 is biconvex and L10 is plano-concave with its concave face toward the object. Their cemented net focal length is about +610.214 mm. They begin G3a, the positive fixed section ahead of the stop. The strong dispersion contrast is evident from the nd/νd values, but no apochromatic or anomalous-partial-dispersion claim is justified because the patent provides no line-index or dPgF data for these elements.

### L11 — Biconvex positive before the stop

**nd = 1.51823, νd = 58.80. Glass: J-K3 (HIKARI). f = +178.994 mm.**

L11 follows D3 and completes G3a before the aperture stop. The isolated G3a focal length is about +141.487 mm. The patent does not assign a unique correction function to L11, so its role is described structurally rather than as a claimed spherical, coma, or field-correction element.

### L12 — Biconcave negative VR-group element

**nd = 1.69680, νd = 55.58. Glass: J-LAK14 (HIKARI). f = -68.874 mm.**

L12 is the first lens of G3b, immediately after the stop. G3b is the laterally shifted VR subgroup. The subgroup's isolated focal length is about -64.331 mm, agreeing with the patent's requirement that the stabilization group be negative (¶0037–0039).

### L13 + L14 — Cemented VR pair (D4)

**L13:** nd = 1.58144, νd = 40.96. Glass: J-LF5 (HIKARI). f = +51.320 mm.  
**L14:** nd = 1.49782, νd = 82.53. Glass: J-FKH1 (HIKARI). f = -48.911 mm.

L13 is a positive meniscus concave to the object and L14 is biconcave. The pair's verified cemented net focal length is about -1096.230 mm. L14 is the negative high-Abbe member that directly satisfies the patent's condition νdn > 65.0; its νd = 82.53 reproduces the tabulated condition value 82.5 within source rounding.

Patent ¶0037–0040 links the negative stabilization group and its high-Abbe negative lens to easier correction of decentered coma during vibration reduction. That is a patent-level statement about G3b; it should not be expanded into unverified element-by-element aberration allocations.

### L15 + L16 — Cemented G3c pair (D5)

**L15:** nd = 1.60342, νd = 37.96. Glass: J-F5 (HIKARI). f = +43.406 mm.  
**L16:** nd = 1.85026, νd = 32.36. Glass: J-LASF021 (HIKARI). f = -49.406 mm.

L15 is biconvex and L16 is a negative meniscus concave to the object. Their cemented net focal length is about +300.371 mm. In the source prescription this pair lies 9.000 mm ahead of the slip-in filter FL, which the data file models at its printed position.

### FL — Slip-in filter plate

**nd = 1.51680, νd = 63.88. Glass: J-BK7 (HIKARI). Plane-parallel, 2.000 mm; no power.**

FL is the exchangeable filter at source surfaces 31–32, with 9.000 mm of air on each side. Nikon's manual requires a filter in the slip-in holder whenever it is in use and ships the holder with a neutral color filter, so the plate is part of the working optical path. It adds no power, but in the converging beam it contributes a small longitudinal image shift and its own spherical and chromatic terms, which the model now traces directly. Patent condition (1) keeps the object-side optics nearly afocal at this position (f/fFL = 0.21), which is what lets NC, color, polarizing, ND, and IR-cut plates be exchanged with little performance change (¶0049). FL is drawn but not counted in the element total.

### L17 — Biconvex positive rear relay element

**nd = 1.51742, νd = 52.25. Glass: J-KF6 (HIKARI). f = +86.291 mm.**

L17 is the first powered element after the slip-in filter FL in G3c. It is a single biconvex lens separated by a long 34.8 mm air gap from the final cemented triplet. The term “relay” here describes its geometric place in the implemented rear optical train; the patent does not state a separate aberration-control role for L17.

### L18 + L19 + L20 — Cemented rear triplet (T1)

**L18:** nd = 1.48749, νd = 70.36. Glass: J-FK5 (HIKARI). f = +88.405 mm.  
**L19:** nd = 1.81600, νd = 46.56. Glass: J-LASF09A (HIKARI). f = -31.638 mm.  
**L20:** nd = 1.58144, νd = 40.96. Glass: J-LF5 (HIKARI). f = +111.277 mm.

The final three physical lenses are cemented into a positive-negative-positive triplet. Their verified cemented net focal length is about -90.267 mm despite the positive standalone powers of L18 and L20. This is a useful example of why standalone element focal lengths cannot be summed or used as direct proxies for in-situ group action: the glass-to-glass interfaces and ray state materially change the combined result.

## Glass Identification and Selection

The patent publishes d-line nd and νd coordinates but does not name glass vendors or melts. Every coordinate nevertheless matches a current catalog curve within 0.13 in νd and 3e-5 in nd, so the data file labels each element with that catalog equivalent and traces it on the catalog Sellmeier curve. Nikon's usual supplier, Hikari, is preferred wherever it has a matching row. These labels name the dispersion curve that reproduces the patent coordinate; they do not assert Nikon's production supplier or melt.

| Patent coordinate | Elements | Catalog equivalent (catalog nd / νd) |
|---|---|---|
| 1.51680 / 64.07 | HG | Hikari J-BK7A (1.51680 / 64.13) |
| 1.43382 / 95.13 | L1, L2 | CaF2 fluorite (1.43385 / 95.10); Nikon specifies two fluorite elements |
| 1.72000 / 50.17 | L3 | Hikari J-LAK10 (1.71999 / 50.27) |
| 1.69680 / 55.58 | L4, L8, L12 | Hikari J-LAK14 (1.69680 / 55.52) |
| 1.49782 / 82.53 | L5, L14 | Hikari J-FKH1 (1.49782 / 82.57) |
| 1.79952 / 42.08 | L6 | Hikari J-LASF02 (1.79952 / 42.09) |
| 1.79504 / 28.70 | L7, L10 | Hikari J-LAFH3 (1.79504 / 28.69) |
| 1.48749 / 70.36 | L9, L18 | Hikari J-FK5 (1.48749 / 70.32) |
| 1.51823 / 58.80 | L11 | Hikari J-K3 (1.51823 / 58.82) |
| 1.58144 / 40.96 | L13, L20 | Hikari J-LF5 (1.58144 / 40.98) |
| 1.60342 / 37.96 | L15 | Hikari J-F5 (1.60342 / 38.03) |
| 1.85026 / 32.36 | L16 | Hikari J-LASF021 (1.85026 / 32.35) |
| 1.51680 / 63.88 | FL | Hikari J-BK7 (1.51680 / 63.88) |
| 1.51742 / 52.25 | L17 | Hikari J-KF6 (1.51742 / 52.20) |
| 1.81600 / 46.56 | L19 | Hikari J-LASF09A (1.81600 / 46.59) |

The strongest special-material correlation is numerical rather than catalog-based. Nikon specifies two fluorite and two ED elements for the production lens. The patent has exactly two 1.43382/95.13 elements and exactly two 1.49782/82.53 elements, so those pairs are plausible counterparts. The correspondence remains inferential because neither the patent nor Nikon's product literature explicitly maps production material names to patent element labels. Nikon's lens-construction diagram confirms that placement: it colours the two large positives behind the protective glass as fluorite and marks as ED the image-side member of the G1b cemented pair and the rear member of the G3b VR pair, which are L1, L2, L5, and L14. The data file flags those four as anomalous-partial-dispersion elements (`apd: "inferred"`, since the identification comes from the manufacturer diagram rather than the patent); no dPgF value is authored for them.

No element carries authored nC, nF, ng, or dPgF values, and the patent supplies no Sellmeier coefficients; the runtime dispersion comes from the catalog-equivalent curves above. Accordingly, this analysis does not claim apochromatic correction or anomalous-partial-dispersion behavior from nd/νd alone. Nikon's production literature states that fluorite and ED elements are used to reduce chromatic aberration, but that product-level claim is distinct from a wavelength-resolved reconstruction of the patent prescription.

## Focus Mechanism

The focus model is **PUBLISHED**, not reconstructed. The patent states that G2 moves toward the image when focusing from infinity toward finite distance while the spacing between G1 and G3 remains fixed (¶0030, ¶0045). Table 1 publishes both variable gaps at three states.

| State | Published β | d11 (mm) | d16 (mm) | G2 imageward travel from infinity (mm) |
|---|---:|---:|---:|---:|
| Infinity | — | 52.967 | 27.187 | 0.000 |
| Intermediate | -0.033 | 56.441 | 23.713 | 3.474 |
| Closest | -0.155 | 69.174 | 10.980 | 16.207 |

At every state d11 + d16 = 80.154 mm, so the motion is a single-group translation rather than an independently floating pair of gaps. The final data preserves those three published values exactly.

The patent does not publish object distances for the two finite rows. Independent paraxial solution of the source prescription gives approximately 24.188275 m from object to source-model image plane for the intermediate state and 5.798574 m for the closest state, with β = -0.033321 and -0.155405 respectively. Those distances are computed modeling results, not patent quotations.

The LensVisualizer model carries the filter plate at its source position, so its object-to-image distances are the source-model values. The intermediate UI position is 0.2397855937, derived from the production 5.8 m manual-focus minimum divided by 24.188275 m. No internal spacing is inferred from that coordinate.

Nikon's production specification gives 5.9 m minimum focus in AF and 5.8 m in MF, with maximum reproduction 1/6.6 in AF and 1/6.4 in MF. The close patent state is therefore a strong correlation point, but the analysis does not assert that the patent's β row is a manufacturer-published production calibration.

## Chromatic Correction Strategy

The patent's own design rationale is group-level. It states that the positive and negative elements in the separated portions of G1 facilitate correction of spherical and axial chromatic aberration (¶0031). It also requires at least one negative lens in the VR subgroup to have νd > 65.0, with the stated purpose of maintaining correction during image stabilization (¶0038–0040).

The final prescription contains several large dispersion contrasts: the two 1.43382/95.13 front positives, the 1.49782/82.53 high-Abbe elements, and multiple higher-index lower-Abbe negative or flint-class partners. These coordinates establish a broad chromatic design palette, but because the dispersion curves are catalog equivalents rather than patent-published line indices, the analysis does not attribute secondary-spectrum correction to individual pairs.

The production lens is documented by Nikon as using two fluorite and two ED elements. That manufacturer fact supports the production correlation and explains why the extreme patent coordinates are notable. It does not by itself turn the catalog-equivalent labels into named production glasses.

## Conditional Expressions

Example 1 publishes three conditional expressions. The verifier recomputed their corresponding values from the final implemented prescription and native Abbe coordinate.

| Condition | Patent requirement | Final recomputation | Patent table |
|---|---|---:|---:|
| (1) | -1.00 < f / fFL < 0.80 | 0.207517 | 0.21 |
| (2) | 1.20 < f / f1 < 3.50 | 2.734135 | 2.73 |
| (3) | νdn > 65.0 | 82.53 | 82.5 |

For condition (1), fFL is the focal length of the object-side optics before the removable filter. In Example 1 that set is HG plus L1–L16 (¶0056). The independently computed isolated focal length of that object-side set is about 3758.734 mm, giving 780 / 3758.734 = 0.207517.

For condition (2), G1 has isolated focal length about +285.282 mm, so 780 / 285.282 = 2.734135. Both ratios reproduce the patent's two-decimal values within the rounding expected from the tabulated prescription.

Condition (3) is met directly by L14 at νd = 82.53. The patent's displayed 82.5 is a rounded value, not a different glass coordinate.

## Image Stabilization

The stabilization group is G3b, consisting of L12 plus cemented L13+L14. The patent specifies lateral motion perpendicular to the optical axis for image-blur correction and identifies G3b as a negative subgroup (¶0037, ¶0048, ¶0050). Nikon's Japanese production specification describes VR as a lens-shift system driven by a voice-coil motor; it does not identify the production moving element labels.

Paragraph 0050 contains an internal arithmetic inconsistency that is retained rather than silently corrected. It gives f = 780.0 mm, stabilization coefficient K = -1.98, rotation θ = 0.12°, and the formula (f tan θ) / K, but prints the required subgroup shift as -0.71 mm. Direct evaluation of the stated formula and inputs gives approximately **-0.825066 mm**. The axial prescription does not depend on this lateral-shift arithmetic, so no radius, spacing, group power, or K value is changed to force agreement.

The final data file does not encode a separate user-controlled VR decenter state; it represents the centered sequential prescription. The stabilization description here is therefore source architecture, not a claim that LensVisualizer has reproduced decentered VR aberrations.

## Verification Summary

The principal verified quantities from the final parsed data are:

| Quantity | Verified value | Basis |
|---|---:|---|
| Infinity EFL | 779.9213606 mm | final `.data.ts`, sequential/ABCD agreement |
| Computed BFL from last vertex | 52.8355441 mm | final `.data.ts` |
| Authored last gap | 52.854 mm | patent Table 1 BF |
| Modeled f-number | 5.658000 | calibrated stop and entrance-pupil mapping |
| Entrance-pupil diameter | 137.844002 mm | final paraxial stop mapping |
| Physical track | 499.318 mm | final `.data.ts`, FL plate at its source position |
| Petzval sum | -2.509135742e-4 mm^-1 | surface-by-surface φ/(n·n′) |
| Model track/EFL | 0.640216 | final `.data.ts` |
| Published TL/EFL | 0.640217 | Table 1 TL = 499.319 mm |

The modeled stop semi-diameter, 14.8162157 mm, is calibrated from the modeled EFL and the patent's FNO = 5.658. Its agreement with the target f-number is therefore a construction calibration, not independent evidence of the physical diaphragm diameter.

Likewise, all surface semi-diameters are modeled because the patent does not publish them. They follow the element rims drawn in Figure 1, measured at about 0.375 mm per 300-dpi pixel with the scale set from the drawn glass span and cross-checked against six element positions: HG and L1 about 70.3–70.5 mm, L2 62.7 mm, L3 60.6 mm, L4 42.2 mm stepping to 39.2 mm at the cemented L4/L5 junction, L6 24.6 mm, L7+L8 22.8 mm, G3a 23.0 mm, and the post-stop elements between 14.5 mm (L12) and 19.1 mm (L17), with FL at 17.4 mm. The drawing places the front group only about 1.5 mm outside the F/5.658 axial bundle (68.9 mm at HG) and draws the rear relay larger than the axial bundle alone requires, which is the silhouette the model now reproduces. Every value clears the exact axial marginal ray at all three published focus states. The L6-to-L7 air space is only 3.095 mm, so the file sets `gapSagFrac` to 0.98 to keep the drawn G2 rims. The minimum element edge thickness is 1.327 mm (L14), the maximum spherical rim slope is 37.01° (surface 10), and the maximum shared-gap sag-intrusion fraction is 0.975. These are construction checks, not measured production clear apertures.

The selected example is all-spherical/all-plane. No aspherical surfaces or coefficients are published for Example 1, and the final data correctly contains `asph: {}`. Patent ¶0084 permits aspheres generically as an optional embodiment variation; it does not make any Example-1 surface aspherical.

## Sources and References

1. Japan Patent Office. **JP 2013-250293 A**, 「撮影レンズ、光学機器、および撮影レンズの製造方法」, application JP2012-122713, filed 2012-05-30, published 2013-12-12. Example 1: ¶0045–0058, Table 1, Figure 1.
2. Nikon Corporation. **AF-S NIKKOR 800mm f/5.6E FL ED VR | F mount Lenses**. Product specifications and lens-construction diagram (fluorite and ED elements colour-coded). https://imaging.nikon.com/imaging/lineup/lens/f-mount/singlefocal/telephoto/af-s_800mmf_56g_fl_ed_vr/
3. Nikon Corporation. **AF-S NIKKOR 800mm f/5.6E FL ED VR / AF-S TELECONVERTER TC800-1.25E ED**, news release, 2013-01-29. https://www.nikon.com/company/news/2013/0129_lens_06.html
4. Nikon Corporation. **AF-S NIKKOR 800mm f/5.6E FL ED VR**, Japanese product overview, on-sale date 2013-05-31. https://nij.nikon.com/products/lineup/nikkor/fmount/af-s_nikkor_800mm_f56e_fl_ed_vr/
5. Nikon Corporation. **AF-S NIKKOR 800mm f/5.6E FL ED VR — Main Specifications**, Japanese specifications page; IF and voice-coil-motor lens-shift VR. https://nij.nikon.com/products/lineup/nikkor/fmount/af-s_nikkor_800mm_f56e_fl_ed_vr/spec.html
6. HIKARI GLASS CO., LTD. **General Optical Glass** catalog pages used for coordinate comparisons. https://www.hikari-g.co.jp/optical_glass/general_optical_glass/
7. OHARA INC. **Glass Type | Products and Service** catalog reference used for the S-LAL10 coordinate comparison. https://www.ohara-inc.co.jp/en/product/01000/
8. Nikon Corporation. **AF-S NIKKOR 800mm f/5.6E FL ED VR User's Manual**, "The Slip-in Filter Holder": a filter must be inserted when photographing with the slip-in holder; the holder ships with a neutral color (NC) filter in place. https://downloadcenter.nikonimglib.com/en/products/226/AF-S_NIKKOR_800mm_f_56E_FL_ED_VR.html
