# Olympus M.Zuiko Digital ED 75mm F1.8

## Patent Reference and Design Identification

**Patent:** JP 2013-161076 A  
**Application Number:** JP 2012-034472  
**Filed:** 2012-02-03  
**Published:** 2013-08-19  
**Inventor:** Yukihiro Yamamoto  
**Applicant:** Sigma Corporation  
**Title:** Inner focus type telephoto lens  
**Embodiment analyzed:** Numerical Example 1, paragraph 0093 and Figure 1

The model transcribes Example 1 at native millimetre scale. Its correlation with the Olympus production lens is a research interpretation, not a manufacturer-confirmed prescription. Several features converge:

1. Both have ten elements in nine air-separated groups, including a cemented rear doublet.
2. Three low-dispersion positive elements occupy L2, L3 and L5; high-index positive members occupy L8 and L10, matching the colored positions in the supplied production section.
3. The source gives 74.56 mm, F/1.79, full field 16.47° and image height 10.80 mm. Olympus markets 75 mm F1.8 for Micro Four Thirds with a 16° diagonal field.
4. A single negative element focuses internally while the front and rear groups remain fixed, consistent with Olympus's single-element MSC focusing description.
5. The filing predates the May 2012 product announcement. Timing alone does not establish a commercial connection between Sigma and Olympus.

The supplied 460×340 diagram particularly supports Example 1's fixed-front-group spacing. Its L2–L3 gap is approximately 15 pixels across a 279-pixel first-to-last vertex span, about 5.38%. The native ratios are 5.20% for Example 1 and 1.70% for Example 2. G2 focus motion cannot explain a difference inside fixed G1a. The almost planar final face also resembles Example 1. Conversely, the drawn middle L5/L6 faces look flatter than Example 1's weakly curved surfaces and more literally resemble Example 2. Unknown focus, artwork simplification and finite line-width precision prevent an exact production determination.

The production specification states 0.84 m minimum focus and 0.1× maximum magnification. Neither value is used to alter patent gaps. The marketed 69 mm barrel length has different reference planes from the source optical track. No manufacturing, licensing or design-supply relationship is inferred from the cross-brand correlation.

## Optical Architecture

The system has positive G1, negative G2 and positive G3 functional powers. G1 divides into positive G1a (L1–L4), the stop at source surface 9, and positive G1b (L5). Calculated functional focal lengths are G1 +59.088747 mm, G2 −39.723588 mm and G3 +46.753290 mm; G1a and G1b are +95.456716 and +81.800977 mm.

Paragraphs 0022–0026 describe the power arrangement and lightweight single-element focusing group. The stop lies between G1a and G1b. The patent discusses locating the exit pupil objectward to limit magnification changes during small focus motions. Reproducing the pupil location does not independently establish every claimed aberration benefit.

The computed infinity EFL is 74.561693 mm. First-to-last vertex distance is 69.8400 mm and first-vertex-to-prescribed-image track is 86.8408 mm. TL/EFL = 1.164684, so the prescription does not satisfy the strict optical telephoto-ratio test TL/EFL < 1. The patent title's “telephoto” remains a photographic category. BFD/EFL = 0.228001 is not retrofocus.

Gaussian infinity BFD is 17.000154 mm from the last vertex. The unchanged source image gap is 17.0008 mm, retaining +0.000646 mm source-rounded defocus. The front principal plane is +33.156588 mm from the first vertex and the rear principal plane is −57.561540 mm from the last. The paraxial entrance pupil is +44.533516 mm from the first vertex; the exit pupil is −64.691539 mm from the prescribed image plane. Positive coordinates are imageward.

## Element-by-Element Analysis

The following focal lengths are standalone thick-lens values in air. L7/L8 member values are hypothetical isolated powers, not in-situ powers across the cemented interface. The actual cemented pair is separately calculated at +28.593086 mm.

### L1 — Positive Meniscus

nd = 1.58913, νd = 61.25. Glass: BACD5 (HOYA; published nC/nF/ng equal the catalog values; supplier unconfirmed). f = +108.072842 mm.

Fixed G1a starts with this positive collector. Its weak positive rear curvature makes it a meniscus, not exactly plano-convex. Its glass contributes to the positive-lens mean in the chromatic condition despite not being an ED-highlighted member.

### L2 — Positive Meniscus

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA; published nC/nF/ng equal the catalog values; supplier unconfirmed). f = +111.741359 mm.

This low-dispersion positive meniscus is the first ED-highlighted member of G1a. Source C/F/g indices support a more specific spectral description than nd/νd alone. Paragraphs 0058–0060 discuss high-Abbe positive members as part of the group chromatic strategy.

### L3 — Positive Meniscus

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA; published nC/nF/ng equal the catalog values; supplier unconfirmed). f = +108.653923 mm.

The second high-Abbe positive member has the same printed glass coordinates and spectra as L2 but distinct curvature and thickness. Its separation from L2 is a useful production-section comparison feature.

### L4 — Negative Meniscus

nd = 1.67270, νd = 32.17. Glass: E-FD5 (HOYA; published nC/nF/ng equal the catalog values; supplier unconfirmed). f = -40.126797 mm.

The negative meniscus completes G1a. Paragraph 0058 compares average positive and negative material coordinates. A specific isolated Seidel contribution is not inferred solely from its negative power.

### L5 — Positive Meniscus

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA coordinate equivalent; supplier unconfirmed). f = +81.800977 mm.

L5 alone forms positive G1b behind the stop. Paragraphs 0042–0046 discuss limiting the focusing-group diameter through G1b power while balancing aberrations. Example 1 retains its weak rear curvature. Its nd/νd match L2/L3, but their spectral rows are not copied to L5.

### L6 — Negative Meniscus

nd = 1.58913, νd = 61.25. Glass: BACD5 (HOYA coordinate equivalent; supplier unconfirmed). f = -39.723588 mm.

L6 alone forms negative G2. Its weakly curved front and more strongly concave image-side face are preserved. It translates imageward at close focus. Paragraphs 0062–0063 specify a high-Abbe focusing glass. Its coordinates match L1, but L1’s additional spectra are not automatically assigned.

### L7 — Negative Meniscus

nd = 1.80518, νd = 25.46. Glass: FD60 (HOYA coordinate equivalent; supplier unconfirmed). f = -25.588654 mm.

This is the negative front member of the cemented L7/L8 pair. At source surface 15, the downstream medium and element identity belong to L8. No artificial cement layer is modeled.

### L8 — Biconvex Positive

nd = 1.90366, νd = 31.32. Glass: TAFD25 (HOYA coordinate equivalent; supplier unconfirmed). f = +14.255165 mm.

This high-index positive member completes the positive cemented pair. Paragraphs 0064–0066 discuss strong positive rear-group members as a means of limiting group diameter; this source rationale does not allocate every aberration to one element.

### L9 — Biconcave Negative

nd = 1.74950, νd = 35.04. Glass: E-LAF7 (HOYA coordinate equivalent; supplier unconfirmed). f = -22.164061 mm.

The biconcave negative member lies between positive contributions in fixed G3. Specific field-flattening or coma claims would require an aberration decomposition and are not established by shape alone.

### L10 — Plano-Convex Positive

nd = 1.91082, νd = 35.25. Glass: TAFD35 (HOYA coordinate equivalent; supplier unconfirmed). f = +33.724556 mm.

The numerical table gives an infinite rear radius at surface 20, and Figure 1 depicts a planar face. Paragraph 0068 calls it a positive meniscus; the table and figure control the modeled plano-convex shape. No weak curvature is invented to reconcile that prose.


## Glass Identification and Selection

Native glass coordinates are preserved. Each element is labelled with the HOYA catalog row at its coordinate; the label selects a dispersion curve and does not identify a vendor, melt or production formulation. Coordinate-first searches cover primary HOYA, OHARA, SCHOTT, HIKARI and SUMITA catalogs plus the complete CDGM June 2022 data-sheet collection. Multiple compatible current or historical entries occur at most coordinates.

| Source nd / νd | Elements | Coordinate-compatible examples | Qualification |
|---|---|---|---|
| 1.58913 / 61.25 | L1, L6 | HOYA BACD5; OHARA BAL35 variants; SCHOTT SK5 variants | Prefixes and legacy variants remain distinct |
| 1.49700 / 81.61 | L2, L3, L5 | HOYA FCD1; OHARA FPL51; HIKARI FK01 variants | Current S-FPL51 entries require their actual νd to be checked |
| 1.67270 / 32.17 | L4 | HOYA FD5 variants; OHARA S-TIM25; SCHOTT SF5 variants | Published ng 1.69999 equals HOYA E-FD5; OHARA S-TIM25 gives 1.70011 |
| 1.80518 / 25.46 | L7 | HOYA FD6/FD60; OHARA PBH6/TIH6; SCHOTT SF6 variants | N-SF6 is a near-coordinate alternative, not identical νd |
| 1.90366 / 31.32 | L8 | HOYA TAFD25/TAFD25L; OHARA S-LAH95; SCHOTT N-LASF46 variants | No unqualified brand substitution |
| 1.74950 / 35.04 | L9 | HOYA LAF7 variants; SCHOTT LAFN7 | Several supplier candidates |
| 1.91082 / 35.25 | L10 | HOYA TAFD35/TAFD35L | Agreement does not prove melt identity |

The broad candidate screen and stricter source-rounding match remain separate in the evidence. HOYA is the one vendor with a row at all seven coordinates to the printed precision, and the published nC, nF and ng of L1–L4 equal the HOYA BACD5, FCD1 and E-FD5 catalog values to five decimals. The data file therefore names BACD5, FCD1, E-FD5, FD60, TAFD25, E-LAF7 and TAFD35. Catalog coefficients do not replace source numbers: L1–L4 trace on their published line indices, and L5–L10 trace on the HOYA curves at the source nd.

Only L1–L4 carry published nC, nF and ng values. Separately printed θgF values are 0.5403, 0.5388, 0.5388 and 0.5962. Ratios from the five-decimal indices differ slightly; propagated source-rounding intervals contain the printed values. Corresponding ΔPgF relative to 0.6438 − 0.001682νd are −0.00047750, +0.03226802, +0.03226802 and +0.00650994. These material-coordinate deviations do not certify full-lens apochromatic performance.

Paragraph 0087 explicitly defines nd at 587.56 nm; paragraph 0061 uses the rounded 587.6 nm label. The published indices are used without wavelength conversion. C/F/g labels are 656.3/486.1/435.8 nm. The remaining six elements have no published spectra and use the catalog curves of their coordinate-equal HOYA rows. APO performance is not established.

## Focus Mechanism

Focus status is PUBLISHED. The source gives infinity and |β| = 0.10 mechanical states. G2, the single L6 element between surfaces 12 and 13, moves +5.9170 mm imageward; G1, G3 and the image plane stay fixed.

| Air gap | Infinity | Published near state |
|---|---:|---:|
| d11, before G2 | 2.6700 mm | 8.5870 mm |
| d13, after G2 | 11.2400 mm | 5.3230 mm |
| Sum | 13.9100 mm | 13.9100 mm |

At the unchanged near spacings and image plane, the rounded prescription gives EFL 70.467437 mm and magnification −0.10002215. The calculated object lies 760.086022 mm before the first vertex, or 846.926822 mm from object to image. The application endpoint uses 0.846926822 m. This calculated patent conjugate is distinct from the production specification of 0.84 m.

Intermediate positions interpolate the two gaps. No published intermediate distance law exists. The application's closeFocusM/focusT labels remain approximate; independent physical probes use the Gaussian conjugate of each tested interpolated prescription. Olympus describes its product's single-element internal MSC mechanism as shaft-and-screw driven. That supports the architecture, not the exact patent dimensions.

## Chromatic and Aberration Strategy

Paragraphs 0058–0061 explain the front-group dispersion relationship. L2 and L3 have νd = 81.61, above the specified high-Abbe threshold. The positive-member mean includes L1 as well as L2/L3. Their mean partial-dispersion/Abbe contrast with negative L4 is 0.001334, below 0.0018. Excluding L1 would misapply condition 8.

The surface-by-surface Petzval sum is +0.002326144 mm⁻¹. It is not a complete field-curvature, astigmatism or MTF evaluation. This numerical example has spherical surfaces and one planar rear face, with no aspheres, diffractive surfaces or rear plate; no asphere conversion or dimensional scaling is applied.

## Conditional Expressions

EXP is measured from the unchanged prescribed image plane. Bf is the source's physical air image gap, not a refitted Gaussian BFD.

| Condition | Calculated Example 1 | Source bounds |
|---|---:|---|
| EXP/Bf | −3.805206 | −25 < value < −2.45 |
| f1/f | 0.792481 | 0.55 < value < 1.00 |
| Absolute f2/f | 0.532761 | 0.25 < value < 0.85 |
| f1b/f | 1.097091 | 0.40 < value < 6.00 |
| D23/Bf | 0.661145 | 0.30 < value < 3.00 |
| Bf/f | 0.228010 | 0.05 < value < 0.40 |
| Two G1a positive-member Abbe numbers | 81.61 | each > 65 |
| Mean dispersion contrast | 0.001334 | < 0.0018 |
| Focusing-element νd | 61.25 | > 60 |
| Selected positive G3 index, L10 | 1.91082 | > 1.80 |

All ten bounds hold and the printed conditional values reproduce to source precision. These broad conditions do not establish an exact production match.

## Verification and Model Limits

The actual data file is checked against the source transformation ledger and propagated using separate scalar and matrix implementations. Radii, gaps, indices and image plane are unchanged. Clear semi-diameters are inferred from sections and exact rays, not factory measurements, and were then checked against the patent's Fig. 1. That sheet is drawn about 8.5% taller than wide (11.66 px/mm along the axis and 12.65 px/mm across it at 400 dpi, the latter fixed by the drawn curvatures and by the stop marks, which sit 11.9 mm from the axis). Element rims agree with the figure within 4%. Fig. 1 draws L3, L4 and L6 square-cut, each concave rear surface ending at a flat annulus inside the rim. L6 carries its drawn 10.1 mm rim on both faces, the 0.9 mm annulus being drawn through as on L2 and L9. Surfaces 6 and 8 stop where the drawn curves end (14.5 and 13.0 mm), because carried to the rim the rear face of L3 would pass 0.37 mm behind the front corner of L4 and the rear face of L4 0.19 mm behind the stop plane, where the figure keeps both in front; the renderer joins those unequal faces with a straight edge where the figure shows a flat annulus and a cylindrical rim. The fixed iris radius 11.993173 mm is inferred by exact infinity entrance-pupil calibration to F/1.79; agreement with that target is calibration, not independent iris-diameter evidence.

A paraxial reconstruction of the published near f-number gives 1.932075 with an infinity-only paraxial iris inference, whose implied physical radius is 11.611156 mm. The patent does not specify the physical iris diameter or precise pupil-aberration/numerical-aperture convention. Under the implemented nonlinear infinity-calibrated iris, near image-space NA corresponds to 1.917549. The current application's approximate effective-f-number display instead gives 1.977239. Neither latter diagnostic reproduces the printed 1.93 within 0.005. The conventions remain separate; no focus-dependent iris schedule is fitted and exact finite-conjugate exposure is not certified.

The application's inferred clear-chief-ray half-field is 10.557823°, distinct from the source half-field 8.235°. Native tests at image heights 6.48 and 10.8 mm therefore use separately aimed physical bundles, rather than claiming the runtime field limit is the patent field.

Actual current LensVisualizer code accepts the data and produces zero material render trim at 21 sampled focus positions. With the rims as revised against Fig. 1, the exact F/1.79 axial ray clears every surface (smallest margin 0.25 mm, at surface 6) and the chief ray to the 10.80 mm image height is unobstructed at both focus endpoints. A skew-ray census of the pupil passes 83% of the on-axis pupil area at that image height at infinity and 94% at |β| = 0.10, and 97% at 7.2 mm at infinity; the rear group (surfaces 14–20) limits the corner bundle, and L6 with the rear face of L3 limits the mid-field bundle. Off-axis losses remain explicit; finite samples do not certify a continuous full pupil, factory throughput or production image quality.

## Sources

1. [JP 2013-161076 A, original publication](https://depatisnet.dpma.de/DepatisNet/depatisnet?action=pdf&docid=JP2013161076A). Numerical Example 1, ¶0093, PDF17–18 (printed16–17); conditions ¶0102, PDF28; mechanism ¶0068–0069; Figure 1, PDF29. The supplied complete original includes the PAJ wrapper.
2. [Olympus product announcement, 24 May 2012](https://www.olympus.co.jp/jp/news/2012a/nr120524zuikoj.html). Construction, MSC mechanism, July 2012 Japanese release schedule and marketed specifications.
3. [OM SYSTEM specifications](https://explore.omsystem.com/gb/en/m-zuiko-ed-75mm-f1-8), retrieved 2026-10-06.
4. Supplied 460×340 production-construction JPEG. Its source webpage, physical scale and focus setting are not established by the image alone.
5. [HOYA downloads](https://www.hoya-opticalworld.com/english/datadownload/index.html), 2026-07-07 obsolete-inclusive AGF; [OHARA catalog](https://oharacorp.com/glass-catalog/), 2026-07-01; [SCHOTT downloads](https://www.schott.com/en-gb/products/optical-glass-p1000267/downloads), preferred/special June-2025-B AGF.
6. [Nikon/HIKARI optical glass](https://www.nikon.com/business/components/lineup/materials/optical-glass/); [SUMITA AGF](https://www.sumita-opt.co.jp/download_files/en/data/zemax.agf); [CDGM June 2022 data sheets](https://www.cdgmgd.com/accessory/2022-06-28/client/www.cdgmgd.com/9b32dd2c-55f4-4d4c-b2d2-48f52c9d5f07.pdf). Primary catalog bytes and relevant coordinate excerpts checked 2026-10-06.
