# MEYER OPTIK GÖRLITZ DOUBLE-PLASMAT 135mm f/4.5 (patent model)

## Patent Reference and Design Identification

**Patent:** GB 135,853 A\
**Application Number:** GB 29,466/19\
**Priority / Convention date:** 14 March 1918\
**Filed:** 26 November 1919\
**Published:** 26 November 1919\
**Inventor:** Paul Rudolph\
**Title:** *Spherically and Chromatically Corrected Objective with Anastigmatic Planeing of the Image and of Great Intensity of Light*\
**Embodiment analyzed:** Example 2 / Fig. 2

The implemented prescription is the second numerical example in GB 135,853 A. The patent describes Fig. 2 as a symmetrical double objective made from two identical single objectives, with a median diaphragm, a represented focal distance of 135 mm, relative aperture 1/4.5, and a 30 mm “efficacious aperture.” The numerical table itself is normalized to a 100 mm double-objective focal distance, so the implemented model scales every patent length by 1.35.[^patent]

The supplied public-inspection scan states that the application became void and that the complete specification was not accepted. Modern indexing nevertheless identifies the document as publication GB135853A and dates the filing/publication event to 26 November 1919; the 1922 date printed in the supplied scan is treated as the print-copy date rather than `patentYear`.[^patent-index]

The fixed project identity associates this embodiment with a Meyer Optik Görlitz 135 mm f/4.5 Double-Plasmat. That correlation remains provisional. Meyer Optik Görlitz's present historical account confirms cooperation with Paul Rudolph from about 1920 to 1942 and the development of Plasmat lenses, but it does not identify GB 135,853 A or a 135 mm f/4.5 Double-Plasmat as a specific production model.[^meyer] More importantly, a scanned historical Meyer catalog lists the Meyer-Doppel-Plasmat at f/4 and f/5.5 while listing the Meyer-Satz-Plasmat at f/4.5.[^meyer-catalog] A secondary historical account gives the same nomenclature distinction.[^optik-verlag] The job-card name is therefore retained as the fixed research target. The production correlation remains not manufacturer-confirmed and is not treated as a manufacturer-confirmed product designation.

## Optical Architecture

The design is a six-element, four-group, all-spherical symmetrical double objective. Each half is a three-element single objective. From the outside toward the central diaphragm, each half comprises a cemented positive/negative pair followed by an air-spaced positive meniscus. The two near-stop menisci face one another across the median diaphragm.

The patent tabulates each half locally from the diaphragm outward. To obtain a single object-to-image sequence, the implemented object-side half is therefore reversed and its radius signs are inverted, while the image-side half retains the patent's local order and signs. This is a coordinate normalization rather than a correction to the source values.[^patent]

After the source-mandated 1.35 scale, the first-to-last refracting-vertex track is 40.284 mm and the computed equivalent focal length is 133.959785 mm. The track/EFL ratio is 0.300717. The infinity-focus back focal distance, measured from the final refracting vertex, is 115.801545 mm; this rear distance is computed from the rounded prescription and is not printed in the patent.

The central stop position is source-published, but its physical diameter is not. The modeled stop semi-diameter, 12.445770 mm, is calibrated so that the paraxial entrance-pupil diameter is 30.000 mm, matching the patent's represented “efficacious aperture” by construction. With the computed EFL, this gives the implemented wide-open value f/4.465326. The patent's f/4.5 remains the published relative aperture, not an independent measurement of the modeled physical diaphragm.

## Element-by-Element Analysis

### L3′ — Object-side outer biconvex positive element

**nd = 1.62070 (source nD), νd = 56.9. Glass: Unmatched (621569 — historical D-line crown-class coordinate; supplier unresolved). f = +49.938 mm.**

L3′ is the outer positive member of the object-side cemented pair. In the final left-to-right model it is the first glass element encountered. Its standalone focal length is substantially shorter than that of the near-stop positive meniscus, but its action in the complete objective cannot be inferred from standalone power alone.

L3′ is cemented to L2′ at surface 2. The complete L3′+L2′ cemented pair has a verified net focal length of -754.015 mm, so the strong positive and negative constituent powers nearly cancel within the bonded pair.

### L2′ — Object-side biconcave negative element

**nd = 1.53980 (source nD), νd = 47.3. Glass: Unmatched (540473 — historical D-line low-index flint / LLF-FEL-class coordinate; supplier unresolved). f = -41.230 mm.**

L2′ is the negative member of the first cemented pair. The patent explicitly describes the corresponding L2 component as a double-concave lens of lower refractive index than its neighboring positive members.[^patent] The final data preserve that relationship without assigning a historical supplier or melt.

An air gap separates L2′ from L1′. This separation is part of the published three-element single-objective construction rather than a modeled cement layer or synthetic interface.

### L1′ — Object-side positive meniscus adjacent to the stop

**nd = 1.62230 (source nD), νd = 53.2. Glass: Unmatched (622532 — historical D-line SSK/BSM-class coordinate; supplier unresolved). f = +150.480 mm.**

L1′ is the positive meniscus nearest the diaphragm on the object side. The patent describes the corresponding L1 as a highly refracting concavo-convex lens turned toward the diaphragm.[^patent] Its standalone positive power is weaker than that of L3′, while the complete three-element front single objective is positive with a computed focal length of 222.297684 mm.

The rear surface of L1′ is followed by the published median diaphragm spacing. The modeled clear aperture of this element is inferred from the verified ray envelope; the patent does not provide a semi-diameter.

### L1 — Image-side positive meniscus adjacent to the stop

**nd = 1.62230 (source nD), νd = 53.2. Glass: Unmatched (622532 — historical D-line SSK/BSM-class coordinate; supplier unresolved). f = +150.480 mm.**

L1 is the mirror-symmetric counterpart of L1′. It begins the image-side single objective immediately after the central diaphragm. Its index, dispersion coordinate, shape, thickness, and standalone focal length match L1′ after the global sign/order transformation.

The two L1 menisci establish the symmetric near-stop portion of the design. Their equality is a direct consequence of the patent's construction from two identical single objectives rather than an independently imposed optimization.

### L2 — Image-side biconcave negative element

**nd = 1.53980 (source nD), νd = 47.3. Glass: Unmatched (540473 — historical D-line low-index flint / LLF-FEL-class coordinate; supplier unresolved). f = -41.230 mm.**

L2 repeats the negative element used in the object-side half. It is air-separated from L1 and cemented to L3 at surface 9. The L2+L3 cemented pair has the same verified net focal length as its front counterpart, -754.015 mm.

The negative standalone power should not be read as a claim that L2 alone is responsible for a particular residual aberration. The patent presents correction as a property of the combined single objective and of the symmetrical double objective.

### L3 — Image-side outer biconvex positive element

**nd = 1.62070 (source nD), νd = 56.9. Glass: Unmatched (621569 — historical D-line crown-class coordinate; supplier unresolved). f = +49.938 mm.**

L3 is the final positive element and the symmetric counterpart of L3′. It completes the second cemented pair and the image-side single objective. The image-side three-element half computes to the same 222.297684 mm equivalent focal length as the object-side half within floating-point precision.

The final refracting vertex is followed in the model by the calculated 115.801545 mm infinity-focus BFD. That image-plane spacing is a derived reference-plane quantity, not a dimension printed in Example 2.

## Glass Identification and Selection

The patent gives three distinct historical glass coordinates and repeats them symmetrically. It prints uppercase `nD`, an `nG′` value, and a dispersion number. The implementation preserves the numerical `nD` values in the schema's `nd` slot, while treating the source D line as the historical sodium D line near 589.3 nm. The patent's G′ line is near 434.0 nm and is not silently stored as modern `ng` at 435.8 nm.

| Patent glass | Elements | Stored nD | ν | Authored identification |
|---|---|---:|---:|---|
| G1 | L1′, L1 | 1.62230 | 53.2 | `Unmatched (622532 — historical D-line SSK/BSM-class coordinate; supplier unresolved)` |
| G2 | L2′, L2 | 1.53980 | 47.3 | `Unmatched (540473 — historical D-line low-index flint / LLF-FEL-class coordinate; supplier unresolved)` |
| G3 | L3′, L3 | 1.62070 | 56.9 | `Unmatched (621569 — historical D-line crown-class coordinate; supplier unresolved)` |

Current catalog coordinates provide class-level analogues for these points, but they do not establish which historical manufacturer or melt Rudolph used. For G1, OHARA S-BSM22 (nd 1.622296, νd 53.17), SCHOTT N-SSK2 (1.62229, 53.27), and CDGM H-ZBaF1 (1.622300, 53.17) closely bracket the patent coordinate.[^ohara-bsm22][^schott-nssk2][^cdgm-zbaf1] For G2, OHARA S-TIL2 (1.54072, 47.23) and HIKARI J-LLF2 (1.540720, 46.97) are near rather than exact; HOYA cross-references E-FEL2 as code 541-472.[^ohara-glass][^hikari][^hoya] For G3, CDGM H-ZK10L (1.622800, 56.91) and HOYA E-BACD10 code 623-569 are similarly near crown-class analogues.[^cdgm-zk10l][^hoya] SUMITA's current optical-glass download index was also checked, without establishing a coordinate-specific exact match for these historical points.[^sumita] The data therefore do not author `nC`, `nF`, `ng`, `dPgF`, or anomalous-partial-dispersion flags. No apochromatic or anomalous-dispersion performance claim is made from the available spectral evidence.

The source's use of a lower-index negative L2 between higher-index positive members is explicit in the patent. Beyond that source description, the analysis does not assign specific chromatic-aberration contributions to individual glasses without line-resolved calculations.

## Focus Mechanism

The focus status is **NO_INTERNAL_RECONSTRUCTION**. Example 2 supplies one fixed prescription and no finite-object table, variable spacing, moving group, minimum focusing distance, or lens-specific focusing mechanism. Accordingly, `var` and `varLabels` are empty.

The required `closeFocusM` field is 1.0 m only as a documented LensVisualizer UI/schema placeholder for this static prescription. It is not a production MFD and is not used to generate a finite-focus optical state. Any focusing by translating the complete objective or camera standard lies outside the implemented internal-spacing model.

## Conditional Expression and Numerical Verification

The patent states that the magnitude of the ray-collecting cemented-surface radius r4 must be at least the equivalent focal length of the double objective.[^patent] In the scaled implementation, |r4| is 190.215 mm while the computed EFL is 133.959785 mm. The ratio is 1.419941, so Example 2 satisfies the stated condition.

The rounded source prescription does not reproduce the nominal focal distances exactly. The final scaled model computes 133.959785 mm rather than the patent's represented 135 mm, a residual of -1.040215 mm or -0.7705%. One complete single-objective half computes 222.297684 mm rather than the represented nominal 224 mm. No source radius, spacing, or refractive index has been changed to force either nominal value.

Surface-by-surface Petzval evaluation using φ/(n·n′) gives a total of +0.001091986688 mm⁻¹ for the scaled prescription. Its reciprocal is 915.762079 mm. This is reported as a paraxial Petzval result, not as a direct prediction of the final best-focus image surface or off-axis production performance.

The patent publishes no clear apertures. The authored surface semi-diameters are therefore modeling inferences. A 600 dpi review of Fig. 2 supports enlarging the two near-stop menisci to 16.5 mm at S4/S7 and 15.8 mm at S5/S6, replacing the initial 14.5/13.25 mm estimates. The near-stop faces remain capped below the approximately equal drawn rims to avoid hidden rendering trims at the split stop gap. The outer cemented assemblies retain their geometry-limited apertures. Portable checks on the final data verify positive edge thickness, actual spherical rim slopes, spherical-domain validity, and shared-gap sag clearance. An exact 2D spherical Snell trace also passes 51 rays across -15°, 0°, and +15° stress fields using 17 pupil fractions per field. Those field angles are geometry stress samples only; the patent supplies no image format or field angle from which production coverage could be claimed.

The implemented prescription is entirely spherical. No aspherical coefficients, diffractive phase terms, filters, sensor cover glass, inactive dummy surfaces, or synthetic cement layers are included.

## Sources / References

[^patent]: Paul Rudolph, *Spherically and Chromatically Corrected Objective with Anastigmatic Planeing of the Image and of Great Intensity of Light*, GB 135,853 A. Supplied public-inspection scan: design description and condition on p. 1; Example 2 numerical table and 135 mm / f/4.5 / 30 mm statements on p. 2; Fig. 2 on p. 3.

[^patent-index]: Google Patents, “GB135853A - Spherically and Chromatically Corrected Objective with Anastigmatic Planeing of the Image and of Great Intensity of Light,” https://patents.google.com/patent/GB135853A/en . Used for the modern publication identifier and 1918-03-14 priority / 1919-11-26 filing-publication indexing; legal-status labels are not relied upon.

[^meyer]: Meyer Optik Görlitz, “History | Meyer Optik Görlitz,” https://www.meyer-optik-goerlitz.com/en/history/ . The manufacturer history places cooperation with Paul Rudolph in the 1920–1942 period and associates that cooperation with Plasmat development; it does not identify the exact 135 mm f/4.5 job-card variant.

[^meyer-catalog]: Historical Hugo Meyer & Co. catalog scan hosted by the Ihagee archive, `HMG5-193X-SatzPlasmat.pdf`, https://www.ihagee.org/Lenzen/HMG5-193X-SatzPlasmat.pdf . The catalog table lists Meyer-Doppel-Plasmat f/4 and f/5.5 and Meyer-Satz-Plasmat f/4.5; it does not confirm a 135 mm f/4.5 Double-Plasmat.

[^ohara-bsm22]: OHARA Corporation, “S-BSM22,” https://oharacorp.com/wp-content/uploads/2023/02/S-BSM22-2008.pdf . Current catalog coordinates nd 1.622296, νd 53.17; used only as a coordinate/class analogue.

[^schott-nssk2]: SCHOTT Advanced Optics, “N-SSK2,” https://www.us.schott.com/shop/advanced-optics/en/Optical-Glass/N-SSK2/c/glass-N-SSK2 . Current catalog coordinates nd 1.62229, νd 53.27; used only as a coordinate/class analogue.

[^cdgm-zbaf1]: CDGM, “H-ZBaF1 622532” optical-glass data sheet, https://www.cdgmgd.com/accessory/2022-06-28/client/www.cdgmgd.com/9b32dd2c-55f4-4d4c-b2d2-48f52c9d5f07.pdf . Current coordinates nd 1.622300, νd 53.17; used only as a coordinate/class analogue.

[^ohara-glass]: OHARA INC., “Glass Type,” https://www.ohara-inc.co.jp/en/product/01000/ . S-TIL2 is listed at nd 1.54072, νd 47.23.

[^hikari]: HIKARI GLASS CO., LTD. / Nikon, *OPTICAL GLASS 2023-9-1*, https://www.nikon.com/business/components/lineup/materials/optical-glass/assets/pdf/hikari_catalog2023.pdf . J-LLF2 is listed at nd 1.540720, νd 46.97.

[^hoya]: HOYA GROUP Optics Division, glass-type listings and cross references, https://www.hoya-opticalworld.com/english/products/kenma.html and https://www.hoya-opticalworld.com/english/products/press_01.html . Used for E-FEL2 code 541-472 and E-BACD10 code 623-569.

[^cdgm-zk10l]: CDGM, “H-ZK10L 623569” optical-glass data sheet, https://www.cdgmgd.com/accessory/2021-09-01/client/www.cdgmgd.com/006fb98b-22a8-479f-9aab-93b958af435f.pdf . Current coordinates nd 1.622800, νd 56.91; used only as a coordinate/class analogue.

[^sumita]: SUMITA OPTICAL GLASS, “Downloads — Optical Glass Data,” https://www.sumita-opt.co.jp/en/download/ . Current catalog/download index checked; no historical supplier identity is inferred.

[^optik-verlag]: Optik-Verlag, “100 Jahre Plasmat – Photographie,” 24 February 2023, https://optik-verlag.com/2023/02/24/100-jahre-plasmat-photographie/ . Secondary historical source used only for the Doppel-Plasmat / Satz-Plasmat nomenclature caution.
