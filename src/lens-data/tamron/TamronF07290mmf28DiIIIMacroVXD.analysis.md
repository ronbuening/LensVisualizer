# TAMRON 90mm f/2.8 Di III MACRO VXD

## Patent reference and design identification

**Patent:** JP 2026-57675 A
**Application Number:** JP 2024-164765
**Filed:** 2024-09-24
**Published:** 2026-04-03
**Inventor:** Tomohiro Kobayashi (小林 知広)
**Applicant:** Tamron Co., Ltd.
**Title:** Optical system and imaging apparatus (光学系及び撮像装置)
**Embodiment analyzed:** Numerical Example 1

The prescription transcribes Example 1, retaining its native dimensions and d-line glass coordinates. The numerical table in ¶0076, system and spacing tables in ¶0077–0079, and Figure 1 control the optical model. The selected production correlation is the Tamron Model F072, released for Sony E and Nikon Z full-frame cameras.

The correlation rests on several convergent observations:

1. Both the numerical example and the manufacturer specification have 15 lens elements in 12 air-separated components. The camera cover plate is excluded from this production lens count.
2. All lens surfaces in the example are spherical, consistent with the manufacturer’s description of the F072.
3. The computed infinity focal length is 87.3062 mm, with a source nominal aperture of F/2.9093, reasonably near the marketed 90 mm and F/2.8. No uniform rescaling was applied.
4. Source image height 21.633 mm gives a 43.266 mm diameter, consistent with the full-frame target.
5. The close-spacing example is near life size at the calculated conjugate described below. The marketed minimum object distance is 0.23 m and maximum magnification is 1:1; the exact patent/model distance and magnification remain distinct.
6. The application was filed two days before the F072 announcement of September 26, 2024. Tamron states an October 24, 2024 release date.
7. Four elements of the example have glass coordinates in low-dispersion (ED) classes: L3 and L5 (FCD515 class), L7 (FCD1 class) and L13 (FCD100 class). Tamron describes the F072 as having four LD (Low Dispersion) elements. Only the count is compared; Tamron’s text does not say which elements they are, and the patent names no special glass.

This is a convergent design attribution, not manufacturer confirmation of the exact production prescription. The patent’s close-distance and aperture assertions contain material inconsistencies; they are retained and discussed rather than forced into agreement.

## Optical architecture

The system uses five motion groups with positive–negative–positive–negative–positive power distribution. G2 is a single negative focusing element, the patent’s first focus group F1; G4 is a negative cemented doublet, the second focus group F2. G1, G3 and G5 are nominally stationary. G3 is the patent’s positive lens group P, and its front cemented pair is the negative subgroup PN. The aperture stop lies immediately before the refracting elements of G3 and is listed as the first member of that group (¶0066). Both negative focus groups move imageward toward close focus (¶0062–0068). The diagram labels follow Figure 1: G1, G2 (F1), G3 (P), G4 (F2), G5, with PN marked on the D2 pair.

| Motion group | Active source surfaces | Calculated group focal length (mm) | Construction and motion |
|---|---|---:|---|
| G1 | 1–9 | +47.3446 | Five elements including D1; nominally fixed |
| G2 (F1) | 10–11 | -52.6772 | One negative element; first focus group, moves imageward |
| G3 (P) | 13–19 | +38.6247 | Stop plus four elements including negative pair PN/D2; nominally fixed |
| G4 (F2) | 20–22 | -42.2130 | Two cemented elements D3; second focus group, moves imageward |
| G5 | 23–28 | +228.7999 | Three air-separated elements; nominally fixed |

The front cemented pair D1 has calculated net focal length +124.5713 mm. The G3 front pair D2 is the patent’s negative subgroup PN, at −42.4368 mm, even though its first constituent is positive. D3 is also the whole of G4, at −42.2130 mm. These are assembled-pair powers; the element focal lengths below are separate isolated-in-air calculations.

The first vertex to physical image-plane track is 138.9986 mm at infinity and 138.9982 mm at the close-spacing state. The source’s 2.5000 mm cover plate, nd = 1.51633 and νd = 64.14, is retained physically after the last lens, with 19.4558 mm of preceding air and 1.0000 mm of following air. It is traced as camera-side optics and excluded from the drawn lens-element count.

The d-line surface-by-surface Petzval sum is 0.0013158 mm⁻¹, using each interface’s power divided by the product of its incident and transmitted indices. This first-order sum does not by itself establish a best-focus field map or flat-field image quality.

## Element-by-element analysis

Element identifiers L1–L15 follow the model’s physical glass order. Every focal length on the first line is the thick element’s standalone focal length in air. A cemented interface changes the in-situ refractive power, so isolated element powers are not added as a substitute for a doublet calculation. Glass names identify coordinate-compatible spectral proxies; no supplier or melt identity is established.

### L1: Biconvex Positive

nd = 1.92119, νd = 23.96. Glass: FDS24-W class (HOYA; coordinate-compatible). f = +54.5 mm.

This biconvex high-index element begins positive G1. Its published index and low Abbe number distinguish it from the lower-index, higher-Abbe negative element that follows. The patent gives no separate aberration budget for this element; its role here is stated through its shape, position and positive power.

### L2: Biconcave Negative

nd = 1.58913, νd = 61.25. Glass: BACD5 class (HOYA; coordinate-compatible). f = -33.5 mm.

The biconcave negative element follows L1 across an air gap. Its negative power counteracts part of the front positive power within G1. The BACD5-class coordinate match is more precise than treating every glass of this region as an interchangeable generic crown.

### L3: Biconvex Positive

nd = 1.59282, νd = 68.62. Glass: FCD515 class (HOYA; coordinate-compatible) — inferred ED class. f = +32.6 mm.

L3 is the positive member of cemented doublet D1, sharing source surface 6 with L4. Its higher Abbe number contrasts with L4’s more dispersive glass. The assembled pair remains weakly positive at +124.5713 mm; a measured chromatic correction claim would require more than the two Abbe numbers.

### L4: Negative Meniscus

nd = 1.85451, νd = 25.15. Glass: NBFD25 class (HOYA; coordinate-compatible). f = -42.5 mm.

This negative meniscus has an object-side concave surface and forms the rear member of D1. Its front interface is cemented directly to L3 and uses the downstream material index in the surface model. No synthetic cement layer or extra optical surface is introduced.

### L5: Biconvex Positive

nd = 1.59282, νd = 68.62. Glass: FCD515 class (HOYA; coordinate-compatible) — inferred ED class. f = +43.8 mm.

This air-separated biconvex element closes G1 at source surface 9 and repeats L3’s printed glass coordinates. Paragraph ¶0064 also describes a following biconcave within its G1 list, but the numerical G1 range and Figure 1 contain only five elements. The following biconcave is L6 in G2; no additional lens is invented.

### L6: Biconcave Negative

nd = 1.59349, νd = 67.00. Glass: PCD51 class (HOYA; coordinate-compatible). f = -52.7 mm.

L6 alone forms negative G2, the first focus group. Its absolute imageward travel between the published spacing endpoints is 13.4002 mm. PCD51 and HIKARI J-PSKH4 are both coordinate-compatible candidates; the implemented spectral proxy is PCD51 class, without a supplier attribution.

### L7: Positive Meniscus

nd = 1.49700, νd = 81.61. Glass: FCD1 class (HOYA; coordinate-compatible) — inferred ED class. f = +85.7 mm.

The first member of PN/D2 is a positive meniscus with a very weak concave object surface, R = −4147.1302 mm. Paragraph ¶0066 calls the element biconvex, but its signed radii and Figure 1 support the meniscus classification. Its positive isolated power does not contradict the negative power of the complete PN pair.

### L8: Biconcave Negative

nd = 1.80809, νd = 22.76. Glass: FD225 class (HOYA; coordinate-compatible). f = -28.3 mm.

L8 is the strongly negative member of PN, cemented to L7 at source surface 14. Paragraphs ¶0025–0028 relate the PN/G3 power balance to the intended spherical-aberration and coma correction. That source explanation is a design rationale, not a quantitative claim that this reconstructed model reproduces the patent’s aberration plots.

### L9: Positive Meniscus

nd = 1.89286, νd = 20.36. Glass: S-NPH4 class (OHARA; coordinate-compatible). f = +65.3 mm.

This positive meniscus follows PN across the narrow source gap D15 = 2.0585 mm. Its nearly flat front surface and the convex rear face provide positive power within G3. The inferred rims at this gap require the explicitly limited clearance treatment described below.

### L10: Biconvex Positive

nd = 1.75500, νd = 52.32. Glass: TAC6L class (HOYA; coordinate-compatible). f = +33.6 mm.

L10 is the biconvex rear component of G3. Together with L9 it makes G3 net positive despite the negative PN pair. Its inferred 15.0 mm rim is supported by the relative Figure 1 outline and the exact close-focus central-ray requirement; it is not a published semi-diameter.

### L11: Positive Meniscus

nd = 1.86966, νd = 20.02. Glass: FDS20-W class (HOYA; coordinate-compatible). f = +78.3 mm.

This positive meniscus begins cemented doublet D3 in moving G4. Its high-index, low-Abbe material precedes the negative, higher-Abbe L12. The sign of the complete moving group comes from the assembled doublet, not the first element alone.

### L12: Biconcave Negative

nd = 1.69680, νd = 55.53. Glass: S-LAL14 class (OHARA; coordinate-compatible). f = -27.6 mm.

L12 supplies the negative member of D3. The complete group moves imageward by 15.0002 mm in absolute source coordinates. The adjacent D19 gap grows by 15.0003 mm; the 0.0001 mm difference comes from accumulated upstream source rounding and is not removed by modifying a spacing.

### L13: Biconvex Positive

nd = 1.43700, νd = 95.10. Glass: FCD100 class (HOYA; coordinate-compatible) — inferred ED class. f = +50.0 mm.

L13 begins fixed rear group G5 and has the highest source Abbe number among the lens elements. The FCD100-class candidate supplies supported catalogue spectral coordinates, but the prescription and a catalogue match alone do not establish apochromatic production performance.

### L14: Biconcave Negative

nd = 1.71300, νd = 53.94. Glass: LAC8 class (HOYA; coordinate-compatible). f = -27.7 mm.

This biconcave negative component lies between two positive elements in G5. The complete positive–negative–positive rear group has relatively weak net positive power, +228.7999 mm. No individual field-flattening or aberration-correction contribution is assigned solely from this element’s negative sign.

### L15: Positive Meniscus

nd = 1.48749, νd = 70.44. Glass: FC5 class (HOYA; coordinate-compatible). f = +83.6 mm.

The final positive meniscus closes G5 at surface 28. The much larger magnitude of its rear radius than its front radius makes the rear face relatively weakly curved. The following plane-parallel glass is retained separately as camera-side cover optics rather than a sixteenth production lens element.

## Glass identification and selection

The patent publishes d-line index/Abbe coordinates but does not name suppliers. Current official catalogue review found at least one exact displayed-coordinate candidate for each of the 15 distinct coordinate classes, including the cover plate. Multiple vendor names can share a coordinate pair. The following selections are reproducible spectral proxies rather than declarations of factory materials.

| Model element(s) | Catalogue-compatible proxy | nd | νd | Catalogue ΔPgF (normalized) |
|---|---|---:|---:|---:|
| L1 | FDS24-W class (HOYA; coordinate-compatible) | 1.92119 | 23.96 | +0.016701 |
| L2 | BACD5 class (HOYA; coordinate-compatible) | 1.58913 | 61.25 | -0.000478 |
| L3, L5 | FCD515 class (HOYA; coordinate-compatible) | 1.59282 | 68.62 | +0.015619 |
| L4 | NBFD25 class (HOYA; coordinate-compatible) | 1.85451 | 25.15 | +0.008802 |
| L6 | PCD51 class (HOYA; coordinate-compatible) | 1.59349 | 67.00 | +0.005494 |
| L7 | FCD1 class (HOYA; coordinate-compatible) | 1.49700 | 81.61 | +0.032368 |
| L8 | FD225 class (HOYA; coordinate-compatible) | 1.80809 | 22.76 | +0.023182 |
| L9 | S-NPH4 class (OHARA; coordinate-compatible) | 1.89286 | 20.36 | +0.029746 |
| L10 | TAC6L class (HOYA; coordinate-compatible) | 1.75500 | 52.32 | -0.008398 |
| L11 | FDS20-W class (HOYA; coordinate-compatible) | 1.86966 | 20.02 | +0.033374 |
| L12 | S-LAL14 class (OHARA; coordinate-compatible) | 1.69680 | 55.53 | -0.006999 |
| L13 | FCD100 class (HOYA; coordinate-compatible) | 1.43700 | 95.10 | +0.049758 |
| L14 | LAC8 class (HOYA; coordinate-compatible) | 1.71300 | 53.94 | -0.008873 |
| L15 | FC5 class (HOYA; coordinate-compatible) | 1.48749 | 70.44 | +0.005280 |
| Camera cover plate | S-BSL7 class (OHARA; coordinate-compatible) | 1.51633 | 64.14 | -0.000617 |

The patent prints only Nd and the Abbe number, so the data file stores no nC, nF, ng or dPgF fields: authored line indices are reserved for values a source publishes for the actual prescription. Dispersion is instead taken at run time from the catalogue curve each proxy label resolves to, including HOYA BACD5 for L2 and PCD51 for L6. The source nd/νd pair is preserved.

The table’s last column is a reference value, not stored data: each catalogue’s published PgF normalized to ΔPgF = PgF − (0.6438 − 0.001682νd), rather than a vendor-specific deviation whose reference line differs. The proxy labels make the selected approximation visible; they do not remove uncertainty about the actual design melt.

The patent identifies no element or material as low-dispersion or anomalous-dispersion, so no element carries a patent-listed tag. Four elements are tagged as inferred low-dispersion glass from their coordinates alone: L3 and L5 (FCD515 class), L7 (FCD1 class) and L13 (FCD100 class). All four are positive elements; L3 and L7 are the crown members of D1 and PN, each cemented to a dense flint. Their number equals the four LD elements in Tamron’s description of the F072, which is a count comparison, not a confirmed element-by-element identification. The PCD51-class L6 and FC5-class L15 have near-normal catalogue partial dispersion (ΔPgF about +0.005) and are left untagged, as are the dense flints L1, L8, L9 and L11 despite their positive catalogue ΔPgF.

HOYA’s current values for FCD505/FCD515 use νd = 68.62, and FC5 uses 70.44, following its published wavelength-precision correction. The cover-plate pair matches OHARA S-BSL7 at 1.51633/64.14; L-BSL7 has a different Abbe number and is not silently substituted. Catalogue coverage and nearby alternatives are retained in the technical evidence.

## Focus mechanism

The source publishes the infinity and close spacing endpoints. G2 and G4 translate imageward while G1/G3/G5 remain nominally stationary. The manufacturer identifies VXD linear-motor autofocus and an internal-focusing system, but does not confirm that this exact numerical embodiment is the production mechanism.

| Variable air gap | Infinity (mm) | Published close spacing (mm) |
|---|---:|---:|
| D(9) | 2.1000 | 15.5002 |
| D(11) | 18.5258 | 5.1255 |
| D(19) | 2.1000 | 17.1003 |
| D(22) | 17.6506 | 2.6500 |

Measured from surface 1, G2 (F1) moves 13.4002 mm and G4 (F2) 15.0002 mm toward the image between the two published states, as ¶0063 and the arrows of Figure 1 describe. The gap ahead of each focus group opens by almost exactly what the gap behind it closes: D9 +13.4002 against D11 −13.4003 mm, and D19 +15.0003 against D22 −15.0006 mm. The combined D9 + D11 spacing therefore changes by −0.0001 mm, and D19 + D22 by −0.0003 mm at source precision. Those small residuals are retained. No gaps are adjusted to make the nominally fixed groups or overall track exactly stationary.

The source states EFL 87.3000 mm at infinity and 38.8752 mm at close. The unchanged decimal-input model computes 87.3062 and 38.8765 mm respectively. The focal-length reduction follows the internal group movements and is separate from the marketed focal length.

The printed 227.4085 mm object-to-image distance is not conjugate to the published close-spacing model and unchanged sensor. It leaves paraxial best focus 2.900066 mm in front of that sensor; the best-image magnification at that printed object plane is −0.919461. The model therefore labels the close endpoint using the calculated d-line paraxial image-reference distance **224.235550734 mm**, giving signed magnification −0.994057713, approximately **0.99406×**. This is a calculated endpoint, not a correction to the patent or a measured production minimum-focus distance.

Only that endpoint has an explicit finiteConjugates entry. Intermediate variable gaps are linearly interpolated; slider distance labels and intermediate cam positions are approximations. Calculated intermediate conjugates used to test geometry do not become additional published or certified focus stations. The physical cover plate and image plane remain at their source positions.

## Aperture model and inferred clear apertures

The physical diaphragm diameter is unpublished. The model uses a **fixed physical iris** with authored semi-diameter 12.981452 mm, inferred by exact infinity marginal-ray calibration to the source nominal F/2.9093. The native construction recalculates the same radius to numerical precision. Agreement with that target is calibration, not independent evidence of a measured diaphragm diameter.

At the calculated close endpoint, the exact axial marginal image-cone definition N = 1/(2 sin u′) gives about **F/3.38**, while the patent prints **Fno 5.8166**. No unpublished shrinking-iris schedule is introduced to force that value. The finite image-cone definition, entrance-pupil ratios and camera displayed effective aperture are distinct quantities. Tamron’s documentation notes camera-dependent aperture display conventions but supplies no physical iris schedule for this patent.

Numerical lens semi-diameters are also absent. All rims are modeled estimates informed by Figure 1 and ray/geometry constraints. The coupled middle doublet D2 uses a common **13.7 mm** radius at surfaces 13–15; L10 uses 15.0 mm at surfaces 18–19. No separately widened cement seam is added.

Measured on the infinity panel of Figure 1 at 0.1694 mm per pixel, the modeled outer rims agree with the drawing to about 0.1 mm except where a constraint governs. D1 stays at 15.8 mm against a drawn 16.2 mm because the L3 edge thickness turns negative there: the drawing ends L3 in a knife edge, which the prescription places at 16.02 mm, and 15.8 mm keeps 0.22 mm of edge. D2 stays at 13.7 mm against 14.15 mm because of the surface 15–16 gap, which the drawing closes to rim contact; L10 stays at 15.0 mm against 14.8 mm because the close-focus axial marginal ray reaches 14.946 mm. L9 uses the drawn 14.5 mm. The drawing ends the concave faces 4, 11, 22, 25 and 26 in flat annuli, with the curves stopping near 13.7, 13.7, 11.3, 14.0 and 14.4 mm. The model carries those faces to the element rim instead, because the diagram joins an element’s front and rear rims with a straight edge and cannot draw a flat annulus. Its mid-field vignetting is therefore somewhat lighter than those drawn optical zones would give, and the rear corners of L2, L6 and L12 and both corners of L14 reach 0.3–2.3 mm further along the axis than the drawn annuli.

The narrow gap between surface 15 (R = +50.4880 mm) and surface 16 (R = −2099.2589 mm) has source axial spacing 2.0585 mm. At the 13.7 mm shared radius, exact spherical intrusion is 1.938999570 mm and real remaining air is **0.119500430 mm**. The lens-specific **0.95** gap limit is above the required 0.941947812 fraction and leaves 0.016575430 mm policy reserve. This is positive physical separation, with no hidden geometry trim.

The nominal close central marginal ray has 0.040151 mm radial margin at surface 15 and 0.053747 mm at surface 18. Source half-digit sensitivity tests are much smaller than those central margins, but they are not manufacturing tolerances. Inferred-rim uncertainty matters more than the printed last digits; the chosen radii are nominal modeling values rather than precise drawing measurements.

Significant wide-open corner vignetting remains. Exact sampled central pupils and corner chiefs pass, while the complete format-corner pupil is not asserted clear. Some surface-based clip labels at cemented interfaces correspond to an earlier exit from a modeled exterior cylindrical sidewall. Those native labels remain in the record; a nearest-boundary classification is sensitive to source rounding. Unresolved unconstrained stop-target aims and attempted-ray counts are not proofs of mathematical impossibility or radiometric throughput percentages.

## Conditional expressions

Conditions (1)–(8b) in ¶0025–0057 concern group powers, focus sensitivity and travel ratios. The source’s Table 1 (¶0104) gives several numerical values that disagree with its own unchanged prescription. The actual nine inequalities hold, while the printed summary comparisons below remain distinct.

| Condition | Printed Example 1 | Calculated | Numerical summary |
|---|---:|---:|---|
| (1) | 0.910 | 0.910169 | Consistent at source precision |
| (2) | 1.124 | 1.127619 | Differs; inequality holds |
| (3) | 1.413 | 1.423392 | Differs; inequality holds |
| (4) | 0.442 | 0.442404 | Consistent at source precision |
| (5) | -0.603 | -0.603361 | Consistent at source precision |
| (6) | -0.537 | -0.483505 | Differs; inequality holds |
| (7) | 0.542 | 0.542282 | Consistent at source precision |
| (8a) | -0.254 | -0.254383 | Consistent at source precision |
| (8b) | -0.320 | -0.355346 | Differs; inequality holds |

For example, the source group table gives G4 = −42.2133 mm and infinity EFL = 87.3000 mm; their ratio cannot equal the printed condition (6) value −0.537. The computed ratio is −0.483505. These inconsistencies do not justify changing a radius, index or spacing. Table 1’s magnification assertion is discussed with the conjugate discrepancy above.

## Verification scope and limitations

The implemented file was parsed directly and checked against all source radii, thicknesses, medium indices, variable-gap endpoints and camera-side plate. Separately coded matrix and sequential first-order calculations agree. The computations include standalone and cemented powers, group movement, pupils, per-surface Petzval, spherical edge/gap geometry and exact ray diagnostics.

Actual LensVisualizer construction, validation and production-shape diagnostics were also executed on the adopted file. Sampled focus states are 0, 0.25, 0.5, 0.75 and 1, with wide-open and F8-equivalent physical apertures. Physical finite-object bundles are distinguished from the viewer’s collimated-at-near diagram convention. Native module execution is not a full application/browser or corpus-integration test.

The numerical model retains the approved source limitations: calculated close distance, approximately life-size magnification, inferred fixed iris, catalogue spectral proxies, inferred rims, the localized gap reserve and off-axis vignetting. It does not certify production performance, complete continuous-field/focus coverage, manufacturing tolerances or a factory optical prescription.

## Sources

1. Japan Patent Office. JP 2026-57675 A, *Optical system and imaging apparatus*, published April 3, 2026. Example 1: ¶0062–0079, PDF pp11–13; Table 1: ¶0104, p17; Figure 1: p19. Source equation definitions: ¶0025–0057. The original supplied publication controls the prescription.
2. [Tamron F072 specifications](https://www.tamron.com/global/consumer/lenses/f072/spec.html), production counts, mounts, format, minimum distance and release date.
3. [Tamron F072 launch announcement](https://www.tamron.com/global/news/detail/f072_20240926.html), September 26, 2024.
4. [Tamron F072 product description](https://www.tamron.com/global/consumer/lenses/f072/), all-spherical construction, four LD elements and effective-aperture display note.
5. [Tamron F072 owner manual](https://s3-ap-northeast-1.amazonaws.com/tamron-docs/consumer/support/download/inst/f072/f072_inst_2410_en.pdf), TLM-F072-EN-C/T-2410-02, internal focusing and camera aperture-display caveats.
6. [HOYA optical glass data, 2026-06-01](https://www.hoya-opticalworld.com/common/xls/HOYA20260601.xlsx), selected coordinate and spectral rows; [2019 value update](https://www.hoya-opticalworld.com/japanese/datadownload/data_up2019.html).
7. [OHARA six-decimal S-series data, 2026-04-02](https://www.ohara-inc.co.jp/wp-content/uploads/2022/02/OHARA_20260402_6.csv), selected S-NPH4, S-LAL14 and S-BSL7 rows.
