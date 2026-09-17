## Patent Reference and Design Identification

**Patent:** US 2,824,495
**Filed:** July 3, 1956
**Priority:** Germany, July 5, 1955
**Granted:** February 25, 1958
**Inventor:** Günter Klemt
**Assignee:** Jos. Schneider & Co.
**Title:** *Wide-Angle Photographic and Cinematographic Objective*
**Embodiment analyzed:** Example 1, the single preferred numerical embodiment

US 2,824,495 describes a seven-element wide-angle objective whose numerical example is normalized to a focal length of 100, an aperture ratio of 1:4, and an angle of view of about 75°. The prescription is printed twice in the patent and is the source for the optical model. [US 2,824,495, PDF p. 2 (printed p. 2), numerical table; repeated on PDF p. 3 (printed p. 4).]

The LensVisualizer record applies a uniform scale of 0.28 to every dimensional prescription value, mapping the normalized patent example to the represented 28 mm production correlation. The implemented first-order effective focal length is 28.0012899 mm, while `focalLengthMarketing` remains 28 mm. No aspheric coefficient transformation is involved because all thirteen refracting surfaces are spherical.

The production identification is a convergent research correlation rather than a manufacturer-confirmed patent mapping. Eastman Kodak's *Retina Reflex S* manual lists a **RETINA Curtagon f:4/28 mm** among the system's interchangeable wide-angle lenses. A 1969 Eastman Kodak brochure lists the Retina Curtagon 28 mm f/4 as a seven-element lens focusing from 3 ft to infinity and describes the compatible lenses as using quick-change bayonet mounts. These product facts agree with the patent's Schneider ownership, seven-element count, f/4 aperture, wide-angle coverage, and the 28 mm scale used here. No primary Schneider source located for this dossier explicitly states that US 2,824,495 Example 1 became the production Curtagon 28 mm f/4, so that final identification remains inferred rather than asserted as a direct manufacturer attribution.

The data record deliberately scopes product metadata to the Retina interchangeable-lens variant: `lensMounts: ["dkl"]`, `imageFormat: "135-full-frame"`, and `closeFocusM: 0.9144`. Eastman Kodak's *Customer Service Series* technical data for the Retina Reflex S specifies Kodak No. 135 film with a 24×36 mm negative, lists the 28 mm f/4 lens as focusing from 3 ft to infinity, and states that it stops down to f/22. This primary manufacturer source directly supports the represented format, close-focus metadata, and `maxFstop = 22`. The `dkl` identifier remains the LensVisualizer taxonomy mapping for the relevant Deckel-family quick-change bayonet; it is not terminology printed in the Kodak literature. Exakta and M42 Curtagon variants are not mixed into this record.

## Optical Architecture

The prescription is a seven-element, six-group, all-spherical retrofocus wide-angle; the final group is the cemented L6/L7 pair. The patent itself describes two macro-groups: a front group I of two air-spaced negative menisci and a rear collective group II containing two positive components before the diaphragm-region negative lens and a final cemented compound. [US 2,824,495, PDF p. 2, description and numerical table.]

Computed from the final data revision as isolated functional assemblies, patent macro-group I has a focal length of -27.5244454 mm and macro-group II has a focal length of +23.6145595 mm. These are standalone group powers; they are not additive in-situ powers and should not be summed to obtain the complete lens power. The front negative pair followed by the positive rear assembly is consistent with the patent's own description of an "inverted telephoto attachment" preceding the collective rear system.

The implemented EFL is 28.0012899 mm and the back focal distance from the final refracting vertex is 36.5011608 mm, giving BFD/EFL = 1.3035528. Under the LensVisualizer terminology rule, the lens is therefore retrofocus because BFD exceeds EFL. The first-to-last refracting-vertex track is 36.4392 mm, giving track/EFL = 1.3013400; it is consequently not telephoto under the separate project rule that reserves that term for track/EFL < 1.

The patent labels the air space between r8 and r9 as the "diaphragm space" and draws an iris inside it, but it supplies neither the exact axial split nor an aperture diameter. [US 2,824,495, PDF p. 1, optical section; PDF p. 2, numerical table.] The model places one `STO` at a figure-derived, deliberately rounded 73% of that gap measured from r8. After scaling, r8-to-stop is 3.264268 mm and stop-to-r9 is 1.207332 mm, preserving the full 4.4716 mm source gap exactly. The physical stop semi-diameter, 4.4756501 mm, is then calibrated to the published f/4 target. Agreement with f/4 is therefore a calibration result, not independent evidence for the production iris diameter.

All surface semi-diameters are likewise modeled because the patent gives no clear-aperture dimensions. They were constrained against the current edge-thickness, rim-slope, shared-gap, and sampled ray-containment checks rather than presented as patent measurements.

## Element-by-Element Analysis

### L1 — Negative Meniscus

**nd = 1.6228, νd = 56.9. Glass: 623569 — SK10-class crown (supplier unresolved). Standalone f = -60.0301 mm.**

L1 is the first of the two negative menisci forming patent macro-group I. Its front placement and negative isolated power are source-consistent with the patent's dispersive front group. The analysis does not assign a specific aberration correction to L1 independently of the rest of the group; the verified result is its negative standalone power and its participation in the net-negative front assembly.

### L2 — Negative Meniscus

**nd = 1.6230, νd = 58.1. Glass: 623581 — SK15-class crown (supplier unresolved). Standalone f = -54.2065 mm.**

L2 is the second air-spaced negative meniscus. Together L1 and L2 constitute the patent's front macro-group I, whose isolated net focal length is -27.5244454 mm. The long air space after L2 separates this negative attachment from the positive rear system and is the dominant inter-group gap in the prescription.

### L3 — Biconvex Positive

**nd = 1.6261, νd = 39.1. Glass: 626391 — BaSF/BaF-class (supplier unresolved). Standalone f = +31.7294 mm.**

L3 is the first positive component of patent macro-group II. It begins the rear collective system after the large separation from the negative front pair. Its positive standalone power is substantial, but the quoted focal length is an isolated-element quantity and should not be interpreted as its in-situ contribution after interaction with the preceding group.

### L4 — Positive Meniscus

**nd = 1.4707, νd = 67.2. Glass: Unmatched (legacy low-index crown / FK-QK class; patent nd=1.4707, νd=67.2). Standalone f = +42.6705 mm.**

L4 is the strongly curved positive meniscus immediately ahead of the diaphragm space. The patent specifically calls for this pre-biconcave collective component to use a low refractive index, approximately below 1.50, and to turn its concave side toward the following biconcave lens. [US 2,824,495, PDF p. 2, descriptive text.] The duplicated numerical table assigns L4 the low index 1.4707.

No exact modern catalog coordinate was found for 1.4707 / 67.2 in the authoritative catalogs checked for the dossier, so the data deliberately retains an `Unmatched` class annotation rather than forcing a supplier or glass name.

### L5 — Biconcave Negative

**nd = 1.6990, νd = 30.1. Glass: 699301 — SF15-class dense flint (supplier unresolved). Standalone f = -14.5136 mm.**

L5 is the biconcave negative component immediately behind the diaphragm space and is the strongest negative isolated element in the rear macro-group. Its table value is 1.6990 / 30.1. A prose sentence below the patent table instead associates the approximately 1.47 index with the biconcave member; that statement conflicts with the duplicated numerical table and with the preceding element description. The LensVisualizer data preserves the table and does not transfer L4's low index to L5.

### L6 — Negative Meniscus, Front Member of Cemented Compound

**nd = 1.6727, νd = 32.2. Glass: 673322 — SF5-class flint (supplier unresolved). Standalone f = -168.3545 mm.**

L6 begins the cemented rear compound and is only weakly negative when evaluated as an isolated element. It is cemented directly to L7 at r12; there is no synthetic cement layer in the model. At that junction the downstream L7 glass owns the medium after the surface, matching the physical cemented-interface convention used by LensVisualizer.

### L7 — Biconvex Positive, Rear Member of Cemented Compound

**nd = 1.6779, νd = 55.3. Glass: 678553 — LAK12/LAL12-class crown (supplier unresolved). Standalone f = +16.8676 mm.**

L7 supplies the dominant positive isolated power of the cemented rear pair. The L6/L7 compound has a verified isolated net focal length of +18.6978536 mm. This compound value is distinct from either member's standalone focal length and from the pair's behavior in the complete lens.

The numerical table gives L6 = 1.6727 and L7 = 1.6779, so the rear member has the slightly higher index. This is opposite to one prose/claim statement that says the forward member has greater refractivity. The table values are retained because the same table is duplicated and reproduces the patent's first-order focal length and image distance.

## Glass Identification and Selection

The patent supplies only d-line refractive indices and Abbe numbers. It does not publish per-element `nC`, `nF`, `ng`, `dPgF`, Sellmeier coefficients, or supplier names. The data therefore uses conservative coordinate/class labels rather than claiming historical supplier identity.

| Element | nd | νd | Authored glass annotation |
|---|---:|---:|---|
| L1 | 1.6228 | 56.9 | 623569 — SK10-class crown (supplier unresolved) |
| L2 | 1.6230 | 58.1 | 623581 — SK15-class crown (supplier unresolved) |
| L3 | 1.6261 | 39.1 | 626391 — BaSF/BaF-class (supplier unresolved) |
| L4 | 1.4707 | 67.2 | Unmatched legacy low-index crown / FK-QK class |
| L5 | 1.6990 | 30.1 | 699301 — SF15-class dense flint (supplier unresolved) |
| L6 | 1.6727 | 32.2 | 673322 — SF5-class flint (supplier unresolved) |
| L7 | 1.6779 | 55.3 | 678553 — LAK12/LAL12-class crown (supplier unresolved) |

The wide spread in νd values is real source data—for example, L4 is 67.2 while adjacent L5 is 30.1—but Abbe number alone does not establish anomalous partial dispersion or apochromatic correction. The model therefore makes no APO or anomalous-dispersion claim. Modern catalog matches used to classify these coordinates are equivalence evidence only; they are not evidence that Schneider purchased a particular supplier's melt.

## Focus Mechanism

The selected patent publishes one fixed numerical prescription and no focus-spacing table, floating-group law, helicoid travel, or close-focus conjugate. The data therefore uses **NO_INTERNAL_RECONSTRUCTION**: every internal spacing remains at the published fixed design and `var` is empty.

The represented Retina variant's `closeFocusM = 0.9144 m` comes from Eastman Kodak's 3 ft-to-infinity product specification. It is catalog metadata, not a reconstructed optical state. Consequently the viewer should not interpret the close-focus value as evidence that this data file traces the production lens at 0.9144 m, nor does the record assert a particular internal or unit-focusing mechanism that the selected patent does not document.

## Patent Conditions and Source Discrepancies

Several descriptive conditions in the patent can be checked against the final model because uniform scaling leaves their dimensionless ratios unchanged.

| Patent condition or description | Verified value | Reading |
|---|---:|---|
| Image distance greater than 5/4 focal length | BFD/EFL = 1.3035528 | Satisfied |
| Physical length approximately image distance | track/BFD = 0.9983025 | About 0.17% shorter |
| d4 approximately one-third of physical length | d4/track = 0.3461657 | About 3.85% above one-third |
| Image distance approximately 3·d4 | 3·d4/BFD = 1.0367342 | About 3.67% high |
| Low-index pre-biconcave meniscus | L4 nd = 1.4707 | Below 1.50 |
| Cemented-pair index sum / difference | 3.3506 / 0.0052 | Sum > 3.3; difference < 0.01 |

Three patent-text contradictions are preserved rather than harmonized silently. First, prose below the table assigns the approximately 1.47 index to biconcave L5, whereas the repeated table places 1.4707 on L4 and 1.6990 on L5. Second, prose/claim language says the forward cemented member has greater refractivity, whereas the table has L6 = 1.6727 and L7 = 1.6779. Third, claim continuation says the cemented-index sum is "at most substantially 3.3," while the numerical table gives 3.3506 and the descriptive paragraph says the sum is greater than 3.3. The implemented prescription follows the repeated numerical table in all three cases.

## Verification Summary

The final data revision was recomputed from the parsed TypeScript literal rather than from a separate hard-coded copy. Sequential height/reduced-angle tracing and a separately implemented `[y, θ]` ABCD calculation agree to floating-point precision.

At the published fixed state, the key first-order results are EFL = 28.0012899 mm, BFD = 36.5011608 mm from r13, and first-to-last refracting-vertex track = 36.4392 mm. Surface-by-surface Petzval summation using `φ/(n·n′)` gives +0.0055026706 mm⁻¹. The Petzval value is a first-order curvature quantity and is not an exact best-image field-curvature result.

The final authored image distance after r13 is 36.5008 mm, exactly 130.36 × 0.28. The independently computed BFD differs by +0.0003608 mm, consistent with the precision of the rounded patent prescription rather than being used to overwrite the published image plane.

The inferred physical stop semi-diameter of 4.4756501 mm produces a paraxial entrance-pupil semi-diameter of 3.5001612 mm and, by construction, modeled f/4. The aperture result is therefore a calibration check. It does not independently verify the unpublished production iris size.

The rear-doublet rims are 5.3 mm at r11, r12, and r13, replacing the larger 6.5/7.0/7.5 mm ray-envelope estimates.
The optical outline on patent p. 1 supports roughly 5.0–5.3 mm after axial scaling; leader lines are excluded.
The revised apertures retain the on-axis f/4 bundle while allowing partial off-axis vignetting at the rear as well as
at the front group. Chief rays remain transmitted through the approximate 37.5° patent half-field. These inferred
clear apertures are not production mechanical measurements or a claim of an unvignetted full pupil.

## Sources and References

1. Günter Klemt, *Wide-Angle Photographic and Cinematographic Objective*, US Patent 2,824,495, assigned to Jos. Schneider & Co., filed July 3, 1956, granted February 25, 1958. Dossier source: `US_2824495_A.pdf`. The optical section is on PDF p. 1; the principal description and first numerical table are on PDF p. 2; the repeated table is on PDF p. 3.
2. Eastman Kodak, *Kodak Retina Reflex S instruction manual*, "Wide-Angle Lenses," PDF p. 43 / printed p. 42: [cameramanuals.org](https://www.cameramanuals.org/kodak_pdf/kodak_retina_reflex_s.pdf).
3. Eastman Kodak, *Kodak Instamatic Reflex Camera ... does simply everything, and everything simply* (January 1969), product-lens table and quick-change-bayonet description: [Pacific Rim Camera archive](https://www.pacificrimcamera.com/rl/01987/01987.pdf).
4. Eastman Kodak, *Kodak Customer Service Series — KODAK RETINA REFLEX S CAMERA, Technical data*, film and lens specifications: [Pacific Rim Camera archive](https://www.pacificrimcamera.com/rl/00818/00818.pdf). The sheet specifies Kodak No. 135 film, 24×36 mm negatives, 28 mm f/4 focusing from 3 ft to infinity, and f/22 minimum aperture.
5. Science Museum Group Collection, *Kodak Retina Reflex S camera (Type 034)*, secondary 35 mm / 24×36 mm format corroboration: [Science Museum Group](https://collection.sciencemuseumgroup.org.uk/objects/co8084656/kodak-retina-reflex-s-camera-type-034-35mm-camera).
6. Glass-coordinate classification was checked against authoritative current or archival catalogs from [SUMITA](https://www.sumita-opt.co.jp/download_files/en/data/zemax.agf), [OHARA S-BSM](https://oharacorp.com/glass-type/s-bsm/) and [S-LAL](https://oharacorp.com/glass-type/s-lal/), [SCHOTT](https://media.schott.com/api/public/content/820eba3413cc4e788433a3751f8edba9?download=true&v=97b3ea2b), Nikon/HIKARI ([SK](https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/sk.html), [SF](https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/sf.html), [LAK](https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/lak.html)), [CDGM](https://www.cdgmgd.com/database/toWebDatabase.htm?typeId=2&url=database), and [HOYA](https://www.hoya-opticalworld.com/english/datadownload/index.html). These comparisons establish class/equivalence candidates only, not historical supplier identity.
