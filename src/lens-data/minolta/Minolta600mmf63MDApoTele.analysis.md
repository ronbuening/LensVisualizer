## Patent Reference and Design Identification

## Catalog spectral model

The catalog preserves the source index and Abbe coordinates. The following names select compatible dispersion curves for simulation; they do not identify the historical supplier, melt, or annealing state. Catalog compatibility includes tolerances and is not an exact material identification.

| Element record | Current spectral annotation |
|---|---|
| 1 | N-BK7 spectral proxy (source line unspecified; approximate d-line interpretation; production material unconfirmed) |
| 2 | CaF2 spectral proxy (source line unspecified; approximate d-line interpretation; production material unconfirmed) |
| 3 | H-LaF6LA spectral proxy (source line unspecified; approximate d-line interpretation; production material unconfirmed) |
| 4 | PC1 spectral proxy (source line unspecified; approximate d-line interpretation; production material unconfirmed) |
| 5 | LAFL23 spectral proxy (source line unspecified; approximate d-line interpretation; production material unconfirmed) |
| 6 | N-BK7 spectral proxy (source line unspecified; approximate d-line interpretation; production material unconfirmed) |
| 7 | K-LaK11 spectral proxy (source line unspecified; approximate d-line interpretation; production material unconfirmed) |
| 8 | S-TIM8 spectral proxy (source line unspecified; approximate d-line interpretation; production material unconfirmed) |

All eight records now carry qualified spectral proxies. Added historical HOYA LAFL23 from its official 2026-07-07 AGF, including obsolete types, for L5. The source line is unspecified; all matches depend on the disclosed approximate d-line interpretation. Fluorite/APO production branding does not validate spectral performance.

Coefficient source: [HOYA official catalog including obsolete glasses, 2026-07-07](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf), checked 2026-10-17.


**Patent:** US 4,126,378 A
**Application Number:** 779,297
**Filed:** March 21, 1977
**Granted:** November 21, 1978
**Priority:** March 26, 1976, Japan 51-34011
**Inventor:** Shuji Ogino
**Assignee:** Minolta Camera Kabushiki Kaisha
**Title:** Telephoto lens system having an improved focusing capability
**Embodiment analyzed:** Example 3, Table 5 and Fig. 7

The analyzed prescription is the selected patent correlation for the MINOLTA MD 600mm f/6.3 APO TELE. The patent supplies eight powered elements, two published focus states and a split rear focusing arrangement. It does not identify a commercial lens by name. The production association is therefore a supported correlation rather than manufacturer confirmation that the marketed lens exactly implements Table 5.

The following features converge:

1. The patent belongs to Minolta, and its filing and grant precede the March 1981 Minolta literature used here.
2. The selected table specifies f/6.3. Its nominal focal length of 100 is scaled uniformly by 6× to the marketed 600 mm class; the calculated infinity EFL is 599.639 mm.
3. The patent has eight powered elements in seven groups. Minolta's catalog gives nine elements in eight groups including one filter, which accounts for the count difference without adding an unsupported powered element.
4. The low-index, high-Abbe second element agrees qualitatively with the manufacturer's identification of a crystalline calcium-fluoride element in that position.
5. The manufacturer describes internal focusing with constant external length. The patent's two moving rear components leave both the front assembly and final cemented doublet stationary.

The patent's full field is 4°13′; the manufacturer gives 4°10′. The manufacturer's approximately 5 m minimum-focus specification does not establish a patent spacing row at that distance. The implemented close endpoint is the scaled published 12 m state. The manufacturer's required integral filter has no corresponding numerical prescription in this patent, so its thickness, material and placement are not invented. [1,2]

## Optical Architecture

The design is an all-spherical telephoto with a positive fixed front assembly followed by negative, positive and negative rear components. The source identifies the moving negative singlet as group I, the moving positive singlet as group II and the stationary cemented rear pair as group III. The model's L1–L8 labels correspond respectively to the patent's G1–G8 labels. [1, Fig. 7 and columns 10–11]

At infinity, the first refracting vertex to paraxial image distance is 410.432 mm, while EFL is 599.639 mm. Their ratio, 0.684465, establishes the telephoto description. BFD from the last refracting vertex is 155.282 mm. These optical distances do not represent barrel length or mount register.

The standalone fixed-front assembly has EFL 289.489 mm. The rear component focal lengths, with each component bounded by air, are -107.386 mm for group I, 97.399 mm for group II and -135.533 mm for the cemented group III. Their separated arrangement, rather than the algebraic sum of isolated powers, determines the system power.

A numerical source discrepancy is material to interpreting the architecture. Body equation (2) prints an upper bound on the absolute combined front-plus-I focal length, whereas the abstract and claim 3 give a lower bound. The calculated value supports the lower-bound formulation. Numerical thresholds below use the calculated f = 99.939784 native units; using the table nominal f = 100 instead gives 15, 120 and 80 for conditions (1), (2) and (4), with the same truth values. Both statements are retained in the discussion of conditional expressions below.

The aperture stop and clear semi-diameters are inferred model quantities. No iris position is explicitly labelled in Table 5 or Fig. 7. Table 6 nevertheless supplies per-surface Seidel coefficients, whose coma-to-spherical ratios constrain the paraxial chief ray. A least-squares fit of ten strong-surface ratios places its zero at 205.911 mm behind the first vertex, within the long gap before group I. This is an approximate optical inference, not a measured mechanical stop location. Its diameter is calibrated to the published infinity f/6.3; that agreement is not independent aperture evidence. The iris is held at this fixed axial station during modeled focus as an explicit visualization assumption. No source establishes its mechanical location or motion law. An independently implemented fit and an alternative weighted form give 205.911 and 205.877 mm respectively. Joint perturbation of printed prescription and Seidel values gives a sampled range of 205.803–206.020 mm; this is sensitivity evidence, not a manufacturing tolerance or a confidence interval. [1, Table 6; 3, equations 29-21–29-25]

## Element-by-Element Analysis

The source calls its columns n and ν without naming a spectral line. The nd and νd notation below denotes the implementation's d-line proxy only; it must not be read as evidence that the patent explicitly used that line. All focal lengths are standalone thick-element values in air at the uniformly scaled dimensions. They differ from each element's behavior when cemented or embedded in the complete system.

### L1 — Negative Meniscus

nd (proxy) = 1.51680, νd (proxy) = 64.0. Glass: N-BK7 spectral proxy (source line unspecified; approximate d-line interpretation; production material unconfirmed). f = -2552.550 mm.

The first element is a weak negative meniscus convex toward the object. It belongs to the stationary front assembly, rather than to either moving rear component. Its modest isolated negative power contrasts with the positive net power of the front assembly.

The patent does not assign a unique aberration correction to this element alone. Its power and placement are descriptive results of the prescription, not sufficient evidence for a specific coma or spherical-aberration role.

### L2 — Biconvex Positive

nd (proxy) = 1.43390, νd (proxy) = 95.0. Glass: CaF2 spectral proxy (source line unspecified; approximate d-line interpretation; production material unconfirmed). f = +196.690 mm.

The second element is strongly positive and has the highest source Abbe value in the prescription. Its refractive coordinates are consistent with the fluorite-class material identified in the production literature, but the patent does not name a supplier, crystal batch or line-index set.

The contrast in dispersion between this element and neighboring negative glass provides a plausible chromatic design strategy. The absence of source spectral-line indices prevents a calculation-based claim of apochromatic correction or secondary-spectrum performance for this exact prescription.

### L3 — Biconcave Negative

nd (proxy) = 1.75700, νd (proxy) = 47.7. Glass: H-LaF6LA spectral proxy (source line unspecified; approximate d-line interpretation; production material unconfirmed). f = -213.515 mm.

This negative biconcave element follows the low-dispersion positive element in the fixed front assembly. Their complementary signs and different dispersion coordinates are consistent with a chromatic-balancing pair, but no independent spectral correction is established by the retained n/ν values alone.

The intervening air spacing is retained exactly. It is not converted into a cemented interface or replaced by a thin-element approximation.

### L4 — Plano-Convex

nd (proxy) = 1.50380, νd (proxy) = 66.8. Glass: PC1 spectral proxy (source line unspecified; approximate d-line interpretation; production material unconfirmed). f = +294.617 mm.

The fourth element is plano-convex, with the plane face toward the image. It completes the fixed positive front assembly and is followed by the long air space leading to the rear components.

The source infinite radius is modeled as a flat surface. No front or rear accessory filter is attached to this element, and no extra plane is introduced to imitate the manufacturer's undocumented filter prescription.

### L5 — Negative Meniscus

nd (proxy) = 1.68900, νd (proxy) = 49.4. Glass: LAFL23 spectral proxy (source line unspecified; approximate d-line interpretation; production material unconfirmed). f = -107.386 mm.

This negative meniscus forms group I. The source moves it toward the object during focusing, while the front assembly remains stationary. Its speed is lower than that of group II over the two published endpoints.

The patent explains that spreading negative power between group I and the stationary group III reduces the burden on the moving negative component in a compact telephoto. The accompanying adjustment of group I is intended to help manage changes in spherical aberration while group II performs the principal focusing movement. This is the patent's design rationale, not an isolated-element aberration measurement. [1, columns 5–6 and 11]

### L6 — Biconvex Positive

nd (proxy) = 1.51680, νd (proxy) = 64.0. Glass: N-BK7 spectral proxy (source line unspecified; approximate d-line interpretation; production material unconfirmed). f = +97.399 mm.

This positive biconvex singlet forms group II. Its published objectward movement is greater than that of group I. The source's focusing rationale emphasizes this component's motion while using the slower negative component to moderate aberration changes.

The object-side surface is weaker in curvature than the image-side surface in absolute radius, satisfying the patent's radius-magnitude condition for group II. The component remains a singlet throughout the modeled range. [1, equations (3)–(4)]

### L7 — Biconcave Negative

nd (proxy) = 1.65830, νd (proxy) = 57.3. Glass: K-LaK11 spectral proxy (source line unspecified; approximate d-line interpretation; production material unconfirmed). f = -44.401 mm.

This biconcave element is the negative member of the fixed rear doublet. Its shared interface with L8 has the next glass's refractive index in the sequential prescription, rather than an intervening air layer.

The quoted focal length is computed after conceptually isolating this element in air. It must not be substituted for its contribution at the actual glass-to-glass interface. The combined doublet, identified as group III, remains negative and stationary.

### L8 — Plano-Convex

nd (proxy) = 1.59550, νd (proxy) = 39.4. Glass: S-TIM8 spectral proxy (source line unspecified; approximate d-line interpretation; production material unconfirmed). f = +66.388 mm.

The last element is plano-convex when considered alone, with its plane face toward the image. It is cemented to L7 and partly offsets that element's negative power; the net group III remains negative.

The final image distance is derived from the complete infinity matrix because Table 5 provides no last-surface-to-image gap. It is held fixed while the published internal focus spacings change. No rear filter plate is added without source dimensions.

## Glass Identification and Selection

No glass supplier or melt is named by the patent, and the native spectral line is unspecified. The implementation therefore retains source n/ν values and explicitly qualified catalog spectral proxies. Coordinates were screened against freshly retrieved OHARA, HOYA and SUMITA AGF catalogs and relevant HIKARI, CDGM and SCHOTT catalog rows. This establishes candidate families, not the identity of the materials used by Minolta.

The palette includes a borosilicate-crown-class coordinate shared by L1 and L6; a low-dispersion fluorite-class coordinate at L2; a higher-index medium-dispersion material at L3; a low-index crown at L4; a separate medium-dispersion coordinate at L5; and dissimilar crown/flint-class materials in the rear cemented doublet. The candidate list preserves differences between OHARA S- and L-series glasses. The runtime uses the disclosed compatible catalog curves, including historical HOYA LAFL23 for L5, while retaining source n/ν. These are spectral proxies, not recovered production materials.

The production name APO TELE and the manufacturer's fluorite claim are retained as product facts. The patent supplies no nC, nF, ng or ΔPgF values, and a coordinate-compatible vendor row alone does not establish exact dispersion. This model consequently does not independently certify APO correction, secondary spectrum, longitudinal color, or wavelength-specific focus.

## Focus Mechanism

The focus state is PUBLISHED. The patent supplies infinity and a photographic distance of 2,000 native length units without explicitly naming its reference plane. Finite-conjugate consistency supports interpreting this as object-to-image distance; uniform 6× scaling makes that interpreted endpoint 12 m. The following source gaps are in scaled millimetres; the inserted inferred stop merely divides d8 and does not change its total.

| Source gap                    | Infinity | Published close state |
| ----------------------------- | -------: | --------------------: |
| d8, front assembly to group I |  176.484 |               167.364 |
| d10, group I to group II      |   10.650 |                 5.178 |
| d12, group II to group III    |    2.214 |                16.806 |

The three gaps retain a total of 189.348 mm. Group I moves 9.120 mm objectward and group II moves 14.592 mm objectward. The front assembly and rear doublet do not move. The quoted movement describes the two source endpoints; the application linearly interpolates between them without claiming that a real focusing cam follows that law.

With the source values rounded as printed, the finite conjugate calculation places the close image 0.005874 mm from the fixed infinity image plane. The small nonzero residual is retained. It does not justify altering the published gaps.

The production catalog's approximately 5 m minimum focus is outside the published numerical range. No extrapolated gaps or reconstructed production MFD are included. Figure 9a also labels its close-focus aberration curve f/7.6; that curve's aperture is preserved as a source fact, but the patent does not specify a physical iris-motion law or establish that the chart aperture is the unchanged maximum aperture.

## Conditional Expressions

All quantities in this section are evaluated from the rounded Table 5 infinity prescription. Original native units are used so that the patent's normalization remains clear.

- The front-to-rear gap d′ is 29.414, greater than 0.15f = 14.990968.
- The combined front-plus-group-I focal length is 209.097569; its magnitude is greater than 1.2f = 119.927740. This agrees with the abstract and claim 3. The body equation (2), which prints the opposite inequality, is not numerically satisfied and should not be quoted as verified.
- For group II, the radius magnitudes are 36.83 and 10.809, so the object-side magnitude exceeds the image-side magnitude.
- The group-II focal length is 16.233212, below 0.8f = 79.951827.

The conflicting sign in condition (2) is resolved interpretively by the abstract, claim wording and calculation. The numerical prescription itself is not corrected, and the failed body comparison remains a distinct observation.

## Verification Summary

Independent implementations of sequential reduced-angle tracing and ABCD multiplication agree for the published source states. The current project engine reproduces the scaled EFL and passes its schema and geometric checks. The f/6.3 setting is a calibration of the inferred stop.

All clear semi-diameters are inferred. They preserve positive edge thickness and are sized against the tested exact rays, including the full axial pupil throughout focus. Spherical rim slope, domain, edge thickness and shared-band air-gap clearance are checked across 101 uniformly spaced focus samples; linear-gap extrema also occur at the endpoints. Production render diagnostics require no hidden material trimming at the tested focus samples. Independent quadratic sphere-intersection/vector-Snell tracing tests 9,750 rays across five focus states, six aperture settings, five field fractions, five pupil fractions and sixteen azimuths at nonzero pupil. First physical clipping terminates a ray; hypothetical surface continuation used for stop aiming is never counted as transmitted light. The project tracer separately checks these launches: 9,265 are transmitted, 400 are clipped, and 85 are reported as noBracket before the first hit because their extrapolated sphere intersections lie outside the first clear aperture and beyond the engine’s bounded search. These 85 raw failed statuses are preserved as expected physical misses; no transmitted ray has an unexplained failure. Engine image-plane intersections agree with the independent tracer to better than 0.000001 mm. No full axial pupil, chief ray, representative primary bundle, or first clip at a cemented internal interface fails the corrected sampled model; 485 outer-field/pupil rays are clipped at exposed surfaces. These are finite geometric samples, not a proof of unvignetted full-field performance or of the source aberration plots.

## Sources

1. Shuji Ogino, Minolta Camera Kabushiki Kaisha, [US 4,126,378 A, Telephoto lens system having an improved focusing capability](https://patents.google.com/patent/US4126378A/en), granted November 21, 1978. Original supplied PDF: cover page 1; Fig. 7 and Figs. 8–9 on page 4; conditions in columns 4–6 on pages 7–8; Table 5 and Table 6 in column 10 on page 10; focus-state prose in column 11 on page 11; claim 3 and repeated Table 5 on page 12.
2. Minolta, [Minolta Lenses](https://www.pacificrimcamera.com/rl/00052/00052.pdf), March 1981, printed page C7, PDF page 7. Original manufacturer document in an archival host; production specifications, internal-focus statement, fluorite identification and optical section.
3. Herbert Gross, ed., [Handbook of Optical Systems, Vol. 3, Chapter 29, Aberrations](https://www.wiley-vch.de/books/sample/3527403795_c01.pdf), Wiley-VCH, 2007, section 29.4.4, equations 29-21–29-25. Basis for the Seidel chief/marginal invariant inference; not a claim that the patent documents a mechanical iris.
4. [OHARA vendor catalog](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip), July 2026; [HOYA catalog including obsolete glasses](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf), July 2026; [SUMITA catalog downloads](https://www.sumita-opt.co.jp/ja/download/), retrieved October 2, 2026. Relevant coordinate rows and residuals are retained in the evidence record.
5. [HIKARI Optical Glass Catalog](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf); [CDGM Optical Glass Data Sheet](https://www.cdgmgd.com/accessory/2021-04-28/client/www.cdgmgd.com/06789484-5388-440e-8899-2ce35334f8b4.pdf); [SCHOTT Optical Glass](https://media.schott.com/api/public/content/ff189abcb12f498aa221f54fd0b2055c?v=f6ee045d), retrieved October 2, 2026. Candidate coordinate comparisons do not establish historical supplier identity.
