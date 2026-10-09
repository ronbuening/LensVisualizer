## Patent Reference and Design Identification

**Patent:** JP 2008-020656 A  
**Application Number:** JP 2006-192240  
**Filed:** 2006-07-13  
**Published:** 2008-01-31  
**Inventors:** Yutaka Kamimura; Ai Hoshina  
**Applicant:** Sigma Corporation  
**Title:** Macro Lens  
**Embodiment analyzed:** Numerical Example 1

The prescription represents the selected design correlation with the SIGMA MACRO 70mm f/2.8 EX DG.
This is the earlier DSLR lens, not the later 70mm Art design. The correlation is strong but
not manufacturer-confirmed as an exact factory prescription. Its principal evidence is:

1. The source and Sigma product both have ten elements in nine air-separated groups. Sigma's
   official section marks three SLD elements in positions corresponding to the source's rear
   part of the first moving block. Counts alone do not uniquely identify an embodiment. [1–3]
2. The two-block extending floating mechanism described by the patent agrees with named Sigma
   designers' account of the older production model. Their interview also identifies helicoid
   extension and says the model ended when production of a glass it used ceased. [1,5]
3. Native infinity f = 68.9061 mm and F = 2.8823 are close to the marketed 70mm f/2.8, but
   the native prescription is retained with no scaling. The design's nearest object-to-image
   distance computes to 255.0809 mm, versus the distinct marketed minimum distance of 257 mm;
   its published magnification is −1.0157 rather than an exact −1. [1,2]
4. The July 2006 market introduction is consistent with the patent's July 2006 filing. [1,4]

The production lens was offered in Sigma SA, Canon EF, Nikon F, Pentax K and Sony A mounts
for the full-frame DSLR format. These are production metadata, not proof of numerical identity
for every mount. Source ¶0022–0023, PDF pages 7–8 / printed pages 6–7, governs the optical table.

## Optical Architecture

This is an all-spherical, two-block floating macro design. Its positive first moving block
(the patent's first group) contains a negative front lens group G1 followed by positive G2; a
net-negative second block (the patent's second group) follows the variable D16 gap. G2 combines the positive pre-stop subgroup L1, the net-negative
cemented L2 subgroup and the positive L3 pair. These names follow Fig.1 and ¶0005, rather than
counting the two moving blocks as the nine air-separated components.

Calculated standalone group focal lengths are +55.501 mm for the first block and −285.212 mm
for the second. Within the first block, G1 is −71.590 mm and G2 is +49.742 mm. The cemented
L2 pair is −217.691 mm, while the air-spaced L3 pair is +49.037 mm. These are isolated
subassembly powers in air; they do not assign a unique in-situ aberration contribution to an element.

At infinity the computed Gaussian EFL is 68.906148 mm, the last-vertex paraxial BFD is
55.815748 mm, and the source first-vertex-to-image track is 124.8557 mm. Thus the full lens
is neither telephoto by track/EFL nor retrofocus by BFD/EFL. This does not contradict the
patent's discussion of a retrofocus-like front arrangement in its background.
The surface-by-surface d-line Petzval sum is +0.001473667 mm⁻¹, using φ/(n n′) at every
refracting interface. This sum alone is not a measured sagittal/tangential field-curvature result.

Source S9 is the air stop. Source S17 is an actual plane refracting into the ninth element,
not a cover plate or an inactive plane. Both source zero radii use the application's flat
sentinel, while the finite 1000.0000 mm radii at S7 and S13 are retained. No source optical
surface is omitted and no rear plate is invented or folded into an air-equivalent spacing.

## Element-by-Element Analysis

The following focal lengths are calculated for each glass element alone in air, including
its center thickness. Cemented partners' isolated powers are not their powers in situ.
The patent uses the letter L for sub-groups (L1, L2, L3) and names only four lenses (L2A, L2B, L3A, L3B),
so model elements are labelled E1–E10 in physical order; the patent designation is given where one exists.

### E1 — Negative Meniscus

nd = 1.54072, νd = 47.2. Glass: E-FEL2 (HOYA, coordinate equivalent). f = -71.590 mm.

The front negative meniscus is the patent’s G1. Its stronger positive-radius rear face makes the isolated element negative. The first moving block nevertheless has positive net power after G2 is included. The broad front aperture follows the relative extent in Fig.1; it is inferred rather than a published dimension.

### E2 — Biconvex Positive

nd = 1.77250, νd = 49.6. Glass: TAF1 (HOYA, coordinate equivalent). f = +45.215 mm.

This biconvex element begins the source’s positive L1 subgroup, ahead of the stop. Its large positive isolated power is part of the positive G2 block. No individual spherical-aberration correction claim is inferred merely from that sign.

### E3 — Positive Meniscus

nd = 1.69680, νd = 55.5. Glass: LAC14 (HOYA, coordinate equivalent). f = +80.720 mm.

The positive meniscus is the middle member of the source L1 subgroup. Its two positive radii are distinct; the stronger front curvature makes it positive. The thin following air interval is retained exactly and does not create a cemented interface.

### E4 — Negative Meniscus

nd = 1.60342, νd = 38.0. Glass: E-F5 (HOYA, coordinate equivalent). f = -38.577 mm.

This negative meniscus is the final member of the pre-stop L1 subgroup. Its source front radius is finite, 1000.0000 mm, and its much stronger rear curvature faces the stop. The patent discusses the opposing concave meniscus regions around the stop in ¶0010.

### E5 (L2A) — Biconcave Negative

nd = 1.58144, νd = 40.9. Glass: E-FL5 (HOYA, coordinate equivalent). f = -36.614 mm.

This is source L2A, the negative partner in the single cemented pair. Its concave object-side face enters condition (2). Source ¶0008 discusses constraining this curvature for coma-flare control; that statement is a patent design rationale, not a simulated aberration result for this isolated element.

### E6 (L2B) — Biconvex Positive

nd = 1.56045, νd = 71.6. Glass: Unmatched (anomalous-dispersion crown; catalog identity unresolved). f = +47.340 mm.

This is source L2B, cemented to E5 (L2A) at source S11. The interface carries this downstream element’s index and owner ID. Its higher Abbe number and source-identified anomalous partial dispersion are paired with L2A under conditions (3) and (4). The assembled pair remains negative despite this partner’s positive isolated power (¶0010–0014).

### E7 (L3A) — Biconvex Positive

nd = 1.56045, νd = 71.6. Glass: Unmatched (anomalous-dispersion crown; catalog identity unresolved). f = +90.223 mm.

This is source L3A, the first of two positive lenses after the cemented pair. Its weak but finite object-side curvature is retained. Source ¶0015–0017 identifies anomalous partial dispersion in this region as part of the close-focus chromatic strategy. The named material cannot be recovered from the audited public catalog coordinates.

### E8 (L3B) — Biconvex Positive

nd = 1.49700, νd = 81.6. Glass: FCD1 (HOYA, coordinate equivalent). f = +105.729 mm.

This is source L3B, the higher-Abbe positive partner in L3. The source’s stronger anomalous-dispersion condition (6) is satisfied by this element, while condition (5) is satisfied by L3A. Paragraph ¶0020 describes the intended lateral-chromatic correction at infinity. That intention is not an independent APO-performance certification.

### E9 — Plano-Concave

nd = 1.64000, νd = 60.2. Glass: LACL60 (HOYA, coordinate equivalent). f = -82.531 mm.

The true plano-concave element begins the second moving block. Source radius 0.0 at S17 is a plane entry into glass; the curved exit gives substantial negative power. Removing it as a supposed sensor plate would destroy the prescribed rear-block power.

### E10 — Biconvex Positive

nd = 1.83481, νd = 42.7. Glass: TAFD5G (HOYA, coordinate equivalent). f = +121.405 mm.

The final positive biconvex element partly balances the preceding negative lens, leaving the second block net negative. Its front radius is weak but finite. The block moves objectward relative to the fixed image plane during focusing, by less than the first block.

## Glass Identification and Selection

The patent supplies d-line coordinates, not supplier names. Eight elements carry the
coordinate-equal HOYA row listed below, so the model traces them on that catalog dispersion curve;
E6 and E7 (L2B, L3A) keep an explicit unmatched designation. The HOYA names are coordinate equivalents and are
not asserted as the production glass. Additional alternatives and coefficient checks are retained
in the supporting evidence. [6–11]

| Model elements | Native nd / νd | Representative catalog alternative | Catalog-minus-source Δnd / Δνd |
|---|---|---|---|
| E1 | 1.54072 / 47.2 | E-FEL2, HOYA | 0 / 0.00 |
| E2 | 1.77250 / 49.6 | TAF1, HOYA | 0 / +0.03 |
| E3 | 1.69680 / 55.5 | LAC14, HOYA | 0 / −0.04 |
| E4 | 1.60342 / 38.0 | E-F5, HOYA | 0 / +0.01 |
| E5 | 1.58144 / 40.9 | E-FL5, HOYA | 0 / −0.01 |
| E6, E7 | 1.56045 / 71.6 | Unmatched in the six reviewed catalogs | No identity assigned |
| E8 | 1.49700 / 81.6 | FCD1, HOYA | 0 / +0.01 |
| E9 | 1.64000 / 60.2 | LACL60, HOYA | 0 / 0.00 |
| E10 | 1.83481 / 42.7 | TAFD5G, HOYA | 0 / +0.02 |

Current and historical OHARA, HOYA, SCHOTT, SUMITA, HIKARI and CDGM catalogs were checked.
Catalog prefixes matter: historical OHARA FPL51 and current S-FPL51 must not be equated simply
because their refractive indices are close. The bounded search does not prove that an unmatched
material never existed as a custom or discontinued grade.

The patent defines θgF = (ng − nF)/(nF − nC) and uses its own normal line:
δpatent = θgF + 0.002νd − 0.6575 (¶0011–0012; Fig.7).
Its values 0.0285 for E6/E7 (L2B, L3A) and 0.0443 for E8 (L3B) therefore imply θgF = 0.5428 and 0.5386.
The current application's Schott normal-line convention is 0.6438 − 0.001682νd, so the
authored dPgF values are respectively 0.0194312 and 0.0320512. [13] The original source deviations
remain the quantities used to evaluate the patent's conditions.

Catalog coordinates do not fully settle spectral behavior: none of the precision-compatible
E8 candidates reproduces the native four-decimal partial-dispersion deviation. Source-derived
dPgF is retained directly on the elements. No candidate nC/nF/ng is passed off as measured
production data. The patent's correction strategy is documented, but no independent APO,
secondary-spectrum or chromatic-image-quality performance claim is made.

## Focus Mechanism

Focus status is PUBLISHED for three stations. The first block spans S1–S16 and the second
S17–S20. Both extend objectward relative to the fixed image, while D16 grows. The production
mechanism is independently described as two-group extending floating focus in the Sigma
interview. It is not internal focusing merely because two modeled gaps vary. [1,5]

| Quantity | Infinity | Intermediate | Closest |
|---|---:|---:|---:|
| Published D0, object to first vertex (mm) | ∞ | 150.0000 | 79.0000 |
| Published D16 (mm) | 1.5000 | 16.8000 | 31.0000 |
| Published BF, last vertex to image (mm) | 55.8157 | 65.7028 | 77.5409 |
| Published F | 2.8823 | 3.8824 | 5.0151 |
| Published β | — | −0.4953 | −1.0157 |
| Computed first-vertex-to-image track (mm) | 124.8557 | 150.0428 | 176.0809 |
| Computed object-to-image distance (mm) | ∞ | 300.0428 | 255.0809 |

Relative to infinity, first-block extension is 25.1871 mm at the intermediate state and
51.2252 mm at closest; second-block extension is 9.8871 and 21.7252 mm. No reversal occurs
among the three published stations. Their Gaussian EFLs compute to 68.906148, 64.603461 and
61.064564 mm. Finite conjugate image gaps compute to 65.702807 and 77.540911 mm, and
magnifications to −0.495300 and −1.015681; the printed image gaps are not adjusted.

The model's closeFocusM = 0.2550809 uses the computed native object-to-image distance.
Its middle focus coordinate is 255.0809/300.0428 = 0.8501483788. The vectors preserve all
published spacings; between them, piecewise-linear gap interpolation is an application model,
not a published cam law or certified intermediate conjugate. The product's 0.257 m MFD is
retained as separate manufacturer information.

### Qualified aperture model

The patent does not publish a physical iris diameter. One inferred fixed iris is used for
all focus states. Following the current application's documented convention, Gaussian EFL
and nominal infinity F = 2.8823 define an incoming pupil radius of 11.953326832 mm;
exact axial Snell tracing to S9 gives a physical stop radius of 10.496829817 mm. [12]
This is a calibration, not independent evidence of the production diaphragm diameter.

Finite-focus published F-number reproduction remains unverified. For this same fixed iris,
paraxial working F at the three authored image planes is 2.851390, 3.859563 and 4.930468;
exact emergent marginal-ray 1/(2NA) is 2.880771, 3.891509 and 4.967105. The reported nominal
infinity F remains 2.8823 because the nominal incoming-pupil convention differs from the
paraxial image of a finite aperture. Neither calculated sequence is substituted for the
published 2.8823, 3.8824 and 5.0151. The discrepancy remains explicit and no focus-dependent
iris schedule is invented to force agreement.

All clear semi-diameters are estimated from the Fig.1 element outlines and floor-checked by
real-ray tracing at the three published focus states; the five elements behind the stop follow
the drawn staircase of rim heights (13.4, 13.8, 14.1, 14.4 and 15.0 mm). Exact spherical
ray sampling covers the three source stations and representative interpolated positions,
including on-axis edge rays, off-axis skew bundles and chief rays at paraxial format-corner
field targets. This supports
the stated sampled containment, not full-field edge-pupil vignetting or continuous-focus
image-quality certification. No physical aperture dimension is claimed as patent-published.

## Conditional Expressions

The following values use native source conventions. Table1 values are rounded independently
of the five-decimal prescription. ΦL2A here denotes front-surface curvature, not element power.

| Condition | Source requirement | Calculated/source-supported disposition |
|---|---|---|
| (1) | 0.75 < fF/f < 0.9 | Calculated 0.805453; printed 0.8055 |
| (2) | 1.0 < −ΦL2A fG2 < 3.5 | Calculated 1.841610; printed 1.8416 |
| (3A) | νd(L2B) − νd(L2A) > 20 | 30.7 |
| (3B) | δpatent(L2B) > 0.02 | Source 0.0285 |
| (4A) | 1.50 < nd(L2B) < 1.60 | Native 1.56045; Table1 rounds to 1.5605 |
| (4B) | abs(nd(L2A) − nd(L2B)) < 0.05 | 0.02099; Table1 rounds to 0.0210 |
| (5) | At least one L3 lens: 1.50 < nd < 1.60 and δpatent > 0.02 | L3A: 1.56045 and 0.0285 |
| (6) | At least one L3 lens: 1/νd < 0.013 and δpatent > 0.035 | L3B: 0.012255 and 0.0443 |

L3B's nd = 1.49700 does not satisfy the index part of (5), and L3A's 1/νd = 0.013966
does not satisfy (6). The claims expressly allow at least one member of the pair, so the
roles must not be collapsed into a requirement that both elements meet both conditions.
The partial-dispersion entries are source assertions with a verified convention conversion,
not independent spectrometric measurements.

## Sources

1. [JP 2008-020656 A, Macro Lens](https://patents.google.com/patent/JP2008020656A/en).
   The supplied unchanged Japanese PDF governs: PAJ wrapper PDF p1; Example1 ¶0022–0023,
   PDF pp7–8 / printed pp6–7; Table1 ¶0027, PDF p9 / printed p8; Fig.1 and Fig.7,
   PDF p10 / printed p9. The English web translation is a navigation aid.
2. [Sigma MACRO 70mm F2.8 EX DG product archive](https://www.sigma-global.com/en/lenses/70_28/).
   Production specification and mount listing; dimensional figures are qualified for Sigma SA.
3. [Sigma official construction diagram](https://www.sigma-global.com/lenses/70_28_specification_01_01.jpg).
4. [Sigma product award announcement](https://press.sigmaphoto.com/corporate/08/sigma-macro-70mm-f2-8-ex-dg-lens-receives-prestigious-european-award/), confirming July 2006 introduction.
5. [Sigma designers' macro-lens interview, 2018-08-14](https://dc.watch.impress.co.jp/docs/news/interview/1136724.html).
   Named company representatives discuss the old model's mechanism and discontinued glass.
6. [OHARA optical-glass catalog](https://www.ohara-inc.co.jp/en/product/catalog/), 2026-07-01 all-products data, including discontinued grades.
7. [HOYA official downloads](https://www.hoya-opticalworld.com/english/datadownload/index.html), 2026-07-07 data including obsolete grades.
8. [SCHOTT optical glass](https://www.schott.com/en-gb/products/optical-glass), official preferred/special/legacy data, June-2025-B filename.
9. [SUMITA official downloads](https://www.sumita-opt.co.jp/en/download/), 2026-08-26 all-glasses data.
10. [HIKARI official catalog](https://www.hikari-g.co.jp/optical_glass/catalog/), workbook revision history beginning 2025-06-01.
11. [CDGM official downloads](https://www.cdgmgd.com/go.htm?k=ge_lei_xia_zai&url=downList), AGF header updated September 2026.

12. [Pinned application aperture convention](https://github.com/ronbuening/LensVisualizer/blob/53470da5a5cbda1807d1e523fbc71963e5a1adc7/src/optics/runtimeLens.ts#L617-L671), read as implementation reference; not executed runtime validation.
13. [Pinned application normal-line definition](https://github.com/ronbuening/LensVisualizer/blob/53470da5a5cbda1807d1e523fbc71963e5a1adc7/src/optics/dispersion.ts#L63-L65).

Catalog access and comparison date: 2026-10-04. None of these catalog matches establishes a
production supplier or melt identity.
