# NIKON AI AF-S NIKKOR 500mm f/4 D IF-ED

## Patent Reference and Design Identification

**Patent:** US 5,745,306 A\
**Application Number:** 08/634,032\
**Priority:** May 26, 1995 (Japan 7-152709)\
**Filed:** April 17, 1996\
**Granted:** April 28, 1998\
**Inventor:** Susumu Sato\
**Assignee:** Nikon Corporation\
**Title:** *Internal Focusing Telephoto Lens*\
**Embodiment analyzed:** Example 2 / second embodiment, Fig. 4 and Table 2

The prescription is the second embodiment of US 5,745,306 A. The patent publishes a 490.0 mm, f/4.08 internal-focusing telephoto system in which a positive first group G1, negative focusing group G2, and positive rear group G3 form the principal power sequence. Table 2 is a d-line prescription: its refractive indices and Abbe numbers refer to 587.6 nm. The companion data file retains that native patent scale; no uniform rescaling is applied.

The production correlation is fixed to the NIKON AI AF-S NIKKOR 500mm f/4 D IF-ED named in the job card. It is a correlation rather than a manufacturer statement that this patent example is the production prescription. Several independent features converge:

1. The modeled prescription contains 11 elements in 9 air-separated groups after exclusion of the patent's front and rear plane-glass filter plates. Nikon's official legacy product page specifies 11 elements in 9 groups plus one protective glass.
2. The patent's three elements at L11, L12, and L14b use the same very-low-dispersion coordinate pair, nd = 1.497820 and νd = 82.52. Nikon specifies three ED elements at production positions 1, 2, and 5, which are the corresponding active-element positions in this model.
3. The patent embodiment is entirely spherical, and Nikon specifies zero aspherical elements for the production lens.
4. The patent header gives F = 490.0 mm and f/4.08; independent paraxial computation from the final data gives EFL = 489.960550 mm. These are design values and remain separate from the marketed 500 mm and f/4 designation.
5. The final prescription gives a full paraxial field of 5.0485° for the patent's 21.6 mm image height, consistent with Nikon's rounded 5° marketed angle of view.
6. The patent's closest state is R = 5000 mm with β = -0.1107. Nikon specifies a 5 m minimum focus distance and 1/9 maximum reproduction ratio.
7. Nikon specifies a 52 mm drop-in filter and a front protective glass. The patent separately shows plane-glass filters ahead of G1 and behind G3; those source planes are deliberately omitted from the active LensVisualizer prescription, so the production protective-glass correlation remains an identification inference rather than a source label.

Two source-text contradictions are kept distinct from the modeled prescription. First, the infinity row of Table 2 prints `F, β = 580.4190`; this cannot be the design focal length because the same table header gives F = 490.0 mm, the prescription computes 489.960550 mm, and the patent's own condition (6) is reproduced only with F near 490 mm. The value is therefore not used as an EFL. Second, the patent's general description once calls L11 a “biconcave positive” lens, while the embodiment-specific description and Table 2 radii establish the biconvex positive geometry used here.

The patent also describes transverse decentering of G3 by as much as ±1.74 mm for vibration correction in this embodiment. Nikon's official page for the exact non-II production lens does not identify a production VR mechanism. The data file therefore models G3 as a centered fixed group and does not present the patent-only decenter capability as a production feature.

## Optical Architecture

The design is a long-focus positive-negative-positive internal-focusing telephoto. The 11 physical elements form 9 air-separated groups, but the patent organizes them into three functional power groups:

- **G1, positive:** the front collector and primary converging assembly, comprising G11 and the cemented rear subgroup G12/L14.
- **G2, negative:** the compact internal-focus group, comprising L21 and cemented L22.
- **G3, positive:** a fixed rear three-element relay behind the aperture stop.

Independent computation from the final data gives G1 an in-situ EFL of +218.995054 mm, G2 an EFL of -71.999217 mm, and G3 an EFL of +161.088605 mm. The combined G1+G2 power is extremely small, corresponding to an EFL of about +5.73×10^6 mm. That near-zero combined power is the numerical expression of the patent's stated “substantially afocal” front/focus combination; it should not be confused with the standalone power of any individual element.

The authored surface-3-to-image track is 421.440765 mm. With EFL = 489.960550 mm, TL/EFL = 0.860152, so the system satisfies the project's telephoto criterion `TL/EFL < 1`. The Gaussian back focal distance from the last active powered surface is 160.422016 mm, well below the EFL; the lens is therefore not retrofocus under the project's `BFD > EFL` definition.

The active sequential model corresponds to patent source surfaces 3 through 23, with source surface 17 represented by the single `STO`. Source surfaces 1–2 are the patent's front plane-glass filter, surface 24 is field stop S2, surfaces 25–26 are the rear filter, and the prose-only S3 has no numerical table entry. These inactive planes are not represented as ordinary LensVisualizer surfaces. The omitted rear plate/filter path is instead normalized to an air-equivalent surface-23-to-image spacing of 160.421965401 mm, which differs from the independently computed Gaussian BFD by only about 0.00005 mm.

All powered surfaces are spherical. There is no asphere equation, conic convention, diffractive phase surface, fold, mirror, zoom mechanism, or perspective-control motion in the selected embodiment. Because the model is kept at scale factor `s = 1`, no length scaling or aspheric-coefficient transformation is required.

## Element-by-Element Analysis

### L11 — Biconvex Positive

nd = 1.497820, νd = 82.52. Glass: J-FKH1 catalog equivalent (patent 498825; production supplier unspecified). Standalone f = +331.037085 mm.

L11 is the first positive collector in G11. Its strong object-side convex surface and weak negative rear radius make it a relatively mild biconvex positive element. The patent explains that the first positive element should present a convex surface toward the object and approach a minimum-deflection form for the nearly axial rays encountered by a long-focus telephoto system.

The production correlation places an ED element at this first active position. J-FKH1 supplies a compatible public dispersion curve, but the assignment does not identify a production supplier or turn catalog partial-dispersion data into a patent-published value.

### L12 — Biconvex Positive

nd = 1.497820, νd = 82.52. Glass: J-FKH1 catalog equivalent (patent 498825; production supplier unspecified). Standalone f = +324.178322 mm.

L12 is the second positive collector in G11. The patent describes it as biconvex with the stronger curvature facing the object side, again using a minimum-deflection rationale while continuing the convergence established by L11.

L11 and L12 together form the positive core of G11. Their identical high-Abbe coordinate pair reduces the chromatic burden carried by the strong front positive power. Nikon's production specification identifies the first two active elements as ED positions, which is consistent with this coordinate pattern but does not establish the actual glass supplier.

### L13 — Biconcave Negative

nd = 1.802180, νd = 44.69. Glass: Unmatched (nd=1.802180, νd=44.69). Standalone f = -283.637464 mm.

L13 follows the two front positive elements and provides negative power within G11. The patent explicitly connects the Abbe number of this negative element to condition (4), `νa < 48`, for control of second-order chromatic aberration. The authored value, 44.69, satisfies that condition.

The element also participates in the shape relation of condition (5) with the image-side surface of L12. The computed value of that condition is -0.03124, within the patent's permitted range. No public glass identity is assigned because the final data file treats the 1.802180/44.69 coordinate pair as unresolved.

### L14a + L14b — Cemented G12 Positive Group

L14a: nd = 1.658440, νd = 50.84. Glass: J-SSK5 catalog equivalent (patent 658508; production supplier unspecified). Standalone f = -209.181267 mm.\
L14b: nd = 1.497820, νd = 82.52. Glass: J-FKH1 catalog equivalent (patent 498825; production supplier unspecified). Standalone f = +128.727534 mm.

The two elements form the cemented rear subgroup G12/L14. L14a is a negative meniscus followed directly by the positive meniscus L14b at the cemented interface. Their standalone powers have opposite signs, but the cemented assembly is net positive: its independently computed in-situ EFL is +357.331921 mm.

The patent identifies this negative-meniscus/positive-meniscus cemented structure as a means of improving aberration characteristics, especially chromatic correction, while contributing to spherical-aberration control in G1. The production correlation places the third ED element at L14b, the fifth active element in the model.

G11 and G12 have computed EFLs of +353.602858 mm and +357.331921 mm respectively. Their near-equal positive powers reproduce the patent's condition (3), which calls for the two subgroups of G1 to have approximately comparable power.

### L21 — Biconcave Negative

nd = 1.772789, νd = 49.45. Glass: lanthanum-flint class; supplier unproven. Standalone f = -131.631005 mm.

L21 is the first element of the translating negative focus group G2. The patent seeks a small, light focusing group and specifically allows this object-side portion of G2 to be a single negative element rather than a more complex compound component.

Its shape is governed by condition (8), which constrains the relation between the two radii to manage spherical-aberration behavior. Its Abbe number is also governed by condition (9), `νb > 45`; the authored value is 49.45. These constraints describe the patent's balancing of low focusing mass against spherical and lateral-chromatic correction.

### L22a + L22b — Cemented Negative Focus Component

L22a: nd = 1.846660, νd = 23.82. Glass: J-SF03 catalog equivalent (patent 847238; production supplier unspecified). Standalone f = +138.645313 mm.\
L22b: nd = 1.518601, νd = 69.98. Glass: J-PKH1 catalog equivalent (patent 519700; production supplier unspecified). Standalone f = -76.093941 mm.

L22 is a cemented negative component: a positive meniscus L22a is followed by a biconcave negative L22b. Although the first component is positive in isolation, the cemented pair has a net EFL of -165.733631 mm. Together with L21 it produces the complete G2 focus-group EFL of -71.999217 mm.

The high index and low Abbe number of L22a are deliberately paired with the much higher Abbe number of L22b. The patent's conditions (10) and (11) constrain the index difference and Abbe-number difference across this cemented interface. The final prescription gives `Nc - Nd = 0.328059` and `νd - νc = 46.16`, both within the stated ranges. The patent describes these conditions as controlling the achromatic-interface power and wavelength-dependent spherical aberration.

### L3a — Biconvex Positive

nd = 1.518601, νd = 69.98. Glass: J-PKH1 catalog equivalent (patent 519700; production supplier unspecified). Standalone f = +141.624548 mm.

L3a is the first powered element after the aperture stop and begins the fixed positive rear group G3. It is a conventional biconvex positive element and supplies the strongest positive component of the rear relay before the negative meniscus L3b.

The patent groups L3a, L3b, and L3c as the positive lens group L3 within G3 for the embodiment that can be decentered transversely. In the production-correlated data model, however, these elements remain centered and fixed during ordinary focusing.

### L3b — Negative Meniscus

nd = 1.804540, νd = 39.61. Glass: NBFD3 catalog equivalent (patent 805396; production supplier unspecified). Standalone f = -130.830757 mm.

L3b introduces negative power between the two positive rear elements. Its concave surfaces face the object side in the patent's description. In combination with L3a and L3c, it shapes the net positive G3 power without requiring any axial movement during focus.

NBFD3 supplies the closest coefficient-backed catalog-equivalent curve while the patent d-line coordinate remains unchanged and the production supplier stays unspecified.

### L3c — Positive Meniscus

nd = 1.518601, νd = 69.98. Glass: J-PKH1 catalog equivalent (patent 519700; production supplier unspecified). Standalone f = +148.544853 mm.

L3c is the final positive element of G3. Its weak object-side negative radius and much stronger negative image-side radius give a positive meniscus form. With L3a and L3b it produces the computed net G3 EFL of +161.088605 mm.

The final element is followed, in the authored model, by the air-equivalent rear spacing that represents the omitted field-stop/filter region and brings the active prescription to the normalized image plane.

## Glass Identification and Selection

The patent does not identify glass vendors. The final data retains the patent's numerical nd/νd coordinates and uses compatible public catalog curves as optical equivalents. The two coordinates without a sufficiently close identification remain unresolved.

| Data-file glass annotation | nd | νd | Elements | Status in the model |
|---|---:|---:|---|---|
| J-FKH1 equivalent (498825) | 1.497820 | 82.52 | L11, L12, L14b | Compatible ED curve; production supplier unspecified |
| Unmatched | 1.802180 | 44.69 | L13 | No defensible public catalog identity assigned |
| J-SSK5 equivalent (658508) | 1.658440 | 50.84 | L14a | Exact coordinate match |
| Lanthanum-flint class | 1.772789 | 49.45 | L21 | Unresolved coordinate class |
| J-SF03 equivalent (847238) | 1.846660 | 23.82 | L22a | Exact index and compatible Abbe match |
| J-PKH1 equivalent (519700) | 1.518601 | 69.98 | L22b, L3a, L3c | Exact index and compatible Abbe match |
| NBFD3 equivalent (805396) | 1.804540 | 39.61 | L3b | Compatible coefficient-backed curve |

The low-dispersion 1.497820/82.52 material is used three times, matching the three production ED positions identified by Nikon. That positional agreement supports the product correlation, but the data does not turn it into a vendor-specific glass identification.

No `nC`, `nF`, `ng`, or `dPgF` values are authored as patent data. Runtime chromatic tracing uses the named catalog-equivalent curves, but the analysis does not claim apochromatic correction, historical production melts, or source-published anomalous partial dispersion.

## Focus Mechanism

The lens uses the patent's published internal-focus mechanism. G1 and G3 remain axially fixed; the negative G2 assembly, comprising L21 and cemented L22, translates toward the image as the object distance is reduced. Because one published endpoint spacing is internally inconsistent, the modeled closest state is classified `CONSTRAINED_RECONSTRUCTION` rather than `PUBLISHED`.

| Gap | Infinity | Closest state | Change |
|---|---:|---:|---:|
| G1–G2 (`d11`) | 39.9396 mm | 50.7759 mm | +10.8363 mm |
| G2–STO (`d16`) | 19.2602 mm | 8.4240 mm | -10.8362 mm |

The adjacent-gap sum is effectively conserved: 59.1998 mm at infinity and 59.1999 mm at the closest state. This is the expected kinematic signature of a single translating group between fixed neighbors.

Table 2 prints the closest `d16` as 18.4240 mm. That number is not used in the model. The constrained 8.4240 mm value is fixed by the patent's 10.84 mm G2 travel, conservation of the two adjacent gaps, and the stated R = 5000 mm object-to-image close-focus distance. Using the source reference planes, the corrected row gives 5000.0038 mm object-to-image, whereas the printed row gives 5010.0038 mm. The independently traced corrected state gives β = -0.11070585, reproducing the published -0.1107 to source precision. Magnification is only a consistency check here: because G1+G2 is nearly afocal, the printed spacing also produces almost the same β and therefore does not diagnose the source error. The corrected endpoint is mechanism-constrained and code-verified, so the focus status is `CONSTRAINED_RECONSTRUCTION`.

The production lens is specified by Nikon with a 5 m minimum focus distance and 1/9 maximum reproduction ratio, consistent with the patent endpoint. Nikon also identifies an SWM autofocus drive and M/A operation. Those are product-mechanism facts; the optical data file models only the axial G2 displacement.

## Chromatic Correction Strategy

The chromatic strategy is visible at the Abbe-number level even without supplier-specific line data. The front positive power is concentrated in three high-Abbe elements at L11, L12, and L14b, while negative or correcting components use substantially lower Abbe numbers. This follows the production lens's three-ED-element pattern but does not by itself prove anomalous partial dispersion.

Within G11, condition (4) requires the negative L13 element to have νd below 48. The prescription gives 44.69. The patent explicitly associates this limit with maintaining second-order chromatic correction across the image field.

The cemented G12 pair combines L14a at νd = 50.84 with L14b at νd = 82.52. The patent describes this cemented negative-meniscus/positive-meniscus structure as favorable for axial and magnification chromatic correction while also helping spherical-aberration balance.

The focus group uses an even stronger dispersion contrast at L22: νd = 23.82 for the positive meniscus and 69.98 for the biconcave negative component. Conditions (10) and (11) constrain both the refractive-index difference and the Abbe-number difference across that interface. Their independently computed values, 0.328059 and 46.16, sit within the patent's allowed ranges and reproduce its rounded tabulated values.

These observations support an achromatizing strategy in the patent's own terms. They do not support an APO label, because the final data lacks measured C/F/g indices, partial-dispersion deviation, or a supplier-specific Sellmeier assignment for the relevant materials.

## Conditional Expressions

The patent gives twelve design conditions for the preferred architecture. Conditions (1)–(11) can be recomputed directly from the final prescription and its independently calculated group powers. Condition (12) uses the front effective diameter; because Table 2 does not publish a per-surface aperture table, the authored front semi-diameter was deliberately anchored to the patent's published condition-(12) value and is therefore not an independent confirmation.

| No. | Expression | Final-model value | Patent range | Result |
|---:|---|---:|---|---|
| 1 | `abs(f1·f3/(f2·F))` | 1.000024 | 0.7 < x < 1.3 | Pass |
| 2 | `abs(f2)/f1` | 0.328771 | 0.24 < x < 0.41 | Pass |
| 3 | `f11/f12` | 0.989564 | 0.7 < x < 1.4 | Pass |
| 4 | `νa` | 44.69 | x < 48 | Pass |
| 5 | `(Rb-Ra)/(Rb+Ra)` | -0.031236 | -0.46 < x ≤ 0 | Pass |
| 6 | `f1/F` | 0.446965 | 0.35 < x < 0.60 | Pass |
| 7 | `f22/f21` | 1.259077 | 0.7 < x < 1.8 | Pass |
| 8 | `(Rd+Rc)/(Rd-Rc)` | -0.956403 | -1.4 < x < -0.4 | Pass |
| 9 | `νb` | 49.45 | 45 < x | Pass |
| 10 | `Nc-Nd` | 0.328059 | 0.1 < x < 0.35 | Pass |
| 11 | `νd-νc` | 46.16 | 25 < x | Pass |
| 12 | `Φ/f1` | 0.562022 | 0.55 < x < 0.72 | Pass; aperture-anchored |

The computed values reproduce the patent's rounded corresponding values for the second embodiment. Condition (1) is especially important architecturally because it formalizes the near-afocal G1+G2 relationship; conditions (2), (6), and (7) constrain the distribution of power among the moving and fixed groups; conditions (4), (9), (10), and (11) constrain glass dispersion or index relationships.

## Verification Summary

The final data file was independently recomputed with sequential height/reduced-angle tracing and an ABCD matrix check. Both methods give EFL = 489.960550314 mm and Gaussian BFD = 160.422015851 mm from the last active powered surface. The EFL differs from the patent's rounded 490.0 mm header by -0.03945 mm, well within the precision implied by the tabulated prescription.

The modeled stop is inferred because the patent does not publish a stop diameter. With physical stop semi-diameter 19.739770 mm, the final prescription gives an entrance-pupil diameter of 120.088370 mm and f/4.080000 at infinity. This verifies internal consistency with the published f/4.08, but it is not an independent recovery of a source-published aperture diameter.

Semi-diameters are likewise modeled where the patent is silent. Surface 3 uses a 61.54 mm semi-diameter so that its 123.08 mm diameter reproduces the published condition-(12) ratio at the independently calculated G1 focal length. Surface 12 uses a 21.15 mm semi-diameter, directly matching the patent's stated 42.3 mm G2 effective diameter. Remaining apertures are constrained by paraxial marginal/chief rays, Fig. 4 proportions, edge thickness, actual rim slope, shared-gap clearance, and off-axis containment.

For both defined focus states, the authored geometry has positive element edge thickness, acceptable spherical rim slopes, and no conic-limit issue. The tightest shared air gap is between surfaces 13 and 14: the modeled rim-sag intrusion is 3.209551 mm across a 3.5400 mm axial gap, leaving 0.330449 mm of physical clearance. Representative off-axis bundles first vignette, when they vignette at all, at the front surface rather than at a cemented junction or internal group surface.

The Petzval sum, computed surface by surface as `φ/(n·n′)`, is +1.32804563×10^-5 mm^-1. The small positive total results from substantial cancellation among individual positive and negative surface contributions; it is a computed first-order field-curvature quantity rather than a direct patent claim.

## Sources

1. Susumu Sato, **US 5,745,306 A**, *Internal Focusing Telephoto Lens*, Nikon Corporation, granted April 28, 1998. Selected source: second embodiment, Fig. 4 and Table 2; patent discussion of G1/G2/G3 architecture, focus travel, conditions (1)–(12), and optional G3 decentering.
2. Nikon Imaging Japan, **AI AF-S Nikkor ED 500mm F4D (IF)**, official legacy product page: https://nij.nikon.com/products/lineup/nikkor/fmount/ai_af-s_nikkor_ed_500mm_f4d_if/ . Used only for production identity and marketed specifications such as 11 elements/9 groups plus protective glass, three ED positions, zero aspheres, 5° angle of view, 5 m minimum focus, 1/9 reproduction, SWM operation, nine blades, and the 52 mm drop-in filter.
3. HIKARI GLASS CO., LTD., **OPTICAL GLASS** current catalog: https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf . Used only for independent `nd`/`νd` coordinate comparisons and glass-class plausibility; it does not establish Nikon supplier provenance.
4. HOYA Corporation, Optics Division, **Optical Glass Data** downloads: https://www.hoya-opticalworld.com/english/datadownload/index.html . Current optical-glass tables were used only for independent coordinate/candidate checks.
5. OHARA INC., current **Optical Glass Data / Catalog** downloads: https://www.ohara-gmbh.com/dialog-downloads/downloads.html . Used for independent catalog-coverage and coordinate checks, without assigning an OHARA family to the patent.
6. SCHOTT, current optical-glass product data, including **N-SSK5**: https://us.shop.schott.com/advanced-optics/en/Optical-Glass/N-SSK5/c/glass-N-SSK5 . Used to check broad glass-class terminology, not to claim a supplier-specific match.
7. CDGM GLASS CO., LTD., current **Colourless Optical Glass** data downloads: https://www.cdgmgd.com/go.htm?k=Colourless_Optical_Glass&url=goods . Used for independent catalog-coverage checks.
8. SUMITA OPTICAL GLASS, INC., current optical-glass data downloads: https://www.sumita-opt.co.jp/en/download/ . Used for independent catalog-coverage checks.
