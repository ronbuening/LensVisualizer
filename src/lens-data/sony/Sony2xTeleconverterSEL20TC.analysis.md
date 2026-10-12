## Patent Reference and Design Identification

**Patent:** WO 2017/134928 A1  
**Application Number:** PCT/JP2016/086673  
**Filed:** 2016-12-09  
**Priority:** 2016-02-01  
**Published:** 2017-08-10  
**Inventors:** Yonghua Chen; Naoki Miyagawa  
**Applicant:** Sony Corporation  
**Title:** Teleconverter lens and optical apparatus  
**Embodiment analyzed:** Example 3, Tables 7–8 and Figure 4  
**Associated model:** SONY 2x TELECONVERTER SEL20TC

The prescription is a rear-mounted teleconverter, used with a taking lens rather than as an independent camera lens. The selected production correlation is Sony's SEL20TC. It is supported by the following convergent evidence, but is not manufacturer confirmation that the published prescription is the manufactured optical design.

1. The patent and Sony's construction illustration agree on eight elements in five air-separated components and an aspheric first element.
2. Both show a thin front singlet, a negative–positive–negative triplet, a positive–negative doublet, and two separated rear menisci. This comparison concerns topology and relative shape, not drawing-derived precision radii.
3. The published twofold factor agrees with the independently calculated converter conjugate magnification discussed below.
4. The Sony applicant, early-2016 priority and Sony announcement on 2016-02-19 are chronologically consistent. Sony's later release notice gives 2016-09-30 as the Japanese SEL20TC release date. [1–5]

Sony identifies an E-mount, full-frame converter with nominal 2× magnification and a two-stop light loss. Its specified diameter is 62.4 mm, overall length 42.7 mm, mount-reference length 27.2 mm and approximate mass 207 g. These are product specifications, not reconstructed optical quantities. In particular, neither mechanical length is used to fit the modeled 40.888 mm first-to-last optical vertex distance. [2, 4, 6]

The announcement's intended host was SEL70200GM; that historical statement is not an exhaustive current compatibility list. Sony warns that incompatible rear optics or adapter parts can collide, including the named SEL70200G and LA-EA4 exclusions. The modeled mount identifier `sony-fe` and minimum host f-number 2.8 do not establish universal compatibility. Four catalog hosts declare the converter: FE 70-200mm F2.8 GM OSS, FE 70-200mm F2.8 GM OSS II, FE 400mm F2.8 GM OSS and FE 400-800mm F6.3-8 G OSS. [2, 4]

## Optical Architecture

The converter has positive–negative–positive functional-group power. Its eight glass elements occupy five physical components, whereas the patent's G1, G2 and G3 designate functional optical groups. The model's thirteen refracting boundaries, labeled 1–13 with 2A marking the asphere, map in order to native surfaces 43–55. A shared cemented boundary belongs to the material entered after refraction; it is not duplicated as two separated surfaces. [1, Table 7; ¶0138–0140]

| Functional group | Elements / physical components | Isolated focal length (mm) |
|---|---|---|
| G1 | L1 / front singlet | +68.215450619 |
| G2 | L2–L7 / triplet, doublet, rear negative singlet | -12.551707128 |
| G3 | L8 / rear positive singlet | +46.458326064 |

G1 is a positive entrance singlet. G2 supplies the dominant negative power through its triplet, nearly compensated doublet and rear negative meniscus. G3 is a broad positive terminal meniscus. Their spacing and finite thickness matter: isolated powers cannot simply be added to obtain the full converter power. The computed isolated converter focal length is -64.859937931 mm in air. That negative focal length describes a converter intercepting a convergent host beam, not a standalone taking lens specification.

The cemented L2–L4 triplet has net isolated focal length -19.670944074 mm. The L5–L6 doublet has net isolated focal length 1116.378701 mm, weakly positive despite much stronger opposed individual powers. These are paraxial component results with air outside each complete component; they are not in-situ aberration allocations.

### Conjugate and camera-cover convention

All axial distances use millimeters, positive toward the image. The converter is unscaled. The patent master alone has an air-equivalent rear image distance

$$B_{\mathrm{master}}=24.9600+\frac{2.5}{1.5168}+1=27.608206751055\ \mathrm{mm}.$$

The converter's first vertex is separated from the last powered master vertex by the published 1.6082 mm. Therefore the still-converging host beam has its nominal bare-master image at

$$L=B_{\mathrm{master}}-1.6082=26.000006751055\ \mathrm{mm}$$

behind the converter's first vertex. This is `masterImageDistanceMm`, a positive virtual-object distance for the converter, not a new physical air gap. The terminal prescription distance remains the source air-equivalent back focus 12.9482 mm. [1, Tables 1, 2, 7]

The actual composed fixture carries the master camera cover exactly once: 10.299993248945 mm of air after the last converter vertex, then a 2.5 mm plate of index 1.5168, then 1 mm of air to the image. Its reduced distance equals the terminal air-equivalent back focus. The physical-minus-air-equivalent image displacement is $t-t/n=0.851793248945$ mm. There is no second cover plate in the converter data.

The fixed image coordinate is 243.836293248945 mm from the first master vertex with that plate, or 242.9845000 mm in the all-air-equivalent representation. Converter vertices and equivalent focal power agree in both representations. No image plane is silently refocused to remove a residual.

Independent ABCD and sequential paraxial calculations give virtual-conjugate magnification 2.000019845087 and image distance 12.867647530488 mm behind the last converter vertex. The residual from the source terminal distance is -0.080552469512 mm. It lies inside the actual specialty runtime's 0.2 mm tolerance at 2×; this runtime acceptance criterion does not make the source's stricter printed-summary comparisons exact. [7]

## Element-by-Element Analysis

All focal lengths in the first lines below are isolated thick-element focal lengths in air, evaluated with the final signed vertex radii, center thickness and source d-line index. For cemented constituents this convention deliberately replaces neighboring glass with air; the numbers describe isolated elements, not their in-situ interface powers. Catalog names identify representative coordinate-compatible classes, not actual production supplier or melt.

### L1 — Biconvex (rear asphere)

nd = 1.68893, νd = 31.16. Glass: E-FD8 class (HOYA catalog; production supplier unconfirmed). f = +68.22 mm.

L1 forms G1 alone. Its rear boundary is native 44*, modeled 2A; the front surface is spherical. The positive singlet is the entrance member of the converter's positive–negative–positive architecture. The patent explicitly places the asphere on this element. Its detailed correction profile and the apparent printed equation defect are treated below, rather than assigning an unmeasured spherical-aberration benefit from shape alone. [1, ¶0136, ¶0138]

### L2 — Biconcave

nd = 1.80420, νd = 46.50. Glass: TAF3D class (HOYA catalog; production supplier unconfirmed). f = -15.17 mm.

L2 is the negative entrance member of the cemented triplet, bounded by native surfaces 45 and 46. The shared rear interface enters L3 without an air gap. Its relatively higher Abbe number contrasts with the positive middle element, providing a material contrast within the negative triplet. That pairing is a structural observation, not a measured secondary-spectrum result. [1, ¶0139; Table 7]

### L3 — Biconvex

nd = 1.59270, νd = 35.45. Glass: FF5 class (HOYA catalog; production supplier unconfirmed). f = +15.01 mm.

L3 is the positive middle element of the triplet, between the two negative members. Both curved interfaces are cemented. It has the lowest d-line index within that triplet and stronger dispersion than L2 or L4 according to the tabulated Abbe numbers. Its strongly curved boundaries make its peripheral thickness an important aperture constraint; the inferred triplet junction radius is geometry-limited rather than enlarged to erase peripheral vignetting. [1, ¶0139; Table 7]

### L4 — Biconcave

nd = 1.83481, νd = 42.71. Glass: S-LAH55 / H-ZLaF55C class (OHARA and CDGM catalogs; production supplier unconfirmed). f = -18.30 mm.

L4 closes the negative–positive–negative triplet at native surface 48. The source value νd = 42.71 is retained exactly in the data; the dispersion curve is that of OHARA S-LAH55 (νd = 42.71) at the same nd; HOYA TAFD5G is 42.72. Its high-index negative contribution belongs to G2, but L6, not L4, supplies the maximum negative-element index used in condition (10). No individual off-axis aberration contribution is inferred solely from its sign or catalog class. [1, ¶0139; Tables 7, 17]

### L5 — Biconvex

nd = 1.67270, νd = 32.17. Glass: E-FD5 class (HOYA catalog; production supplier unconfirmed). f = +18.55 mm.

L5 opens the second cemented component, separated from the triplet by a short air interval. The positive member and following negative meniscus share native surface 50. The computed near-cancellation of the complete doublet depends on that interface and finite thickness; it is not an assertion that either element has negligible action within the converter. [1, ¶0139; Table 7]

### L6 — Negative Meniscus

nd = 2.00100, νd = 29.13. Glass: TAFD55-W class (HOYA catalog; production supplier unconfirmed). f = -18.01 mm.

L6 is the negative meniscus of the doublet, with its convex side toward the image. Its source index is the largest among G2's negative elements and directly satisfies condition (10). The selected HOYA TAFD55-W spectrum is a representative class; the runtime's compatible alias TAFD55 does not prove which catalog formulation was manufactured. [1, ¶0139; Tables 7, 17; 9]

### L7 — Negative Meniscus

nd = 1.95375, νd = 32.32. Glass: S-LAH98 class (OHARA catalog; production supplier unconfirmed). f = -59.90 mm.

L7 is the separated negative meniscus near the rear of G2, convex toward the image, following the larger air interval behind the doublet. Its representative S-LAH98 coordinate differs from S-LAH79; the latter is not silently substituted. The relatively large modeled rim follows the rearward opening seen in Figure 4, subject to the explicit geometry and sampled-ray checks below. [1, ¶0139; Figure 4; 8]

### L8 — Positive Meniscus

nd = 1.51742, νd = 52.15. Glass: E-CF6 class (HOYA catalog; production supplier unconfirmed). f = +46.46 mm.

L8 alone forms positive G3. Both native radii are negative: R54 = −450 mm and R55 = −23 mm. In the object-left/image-right convention these produce a positive meniscus convex toward the image. The patent prose calls the element biconvex, but the numerical signs are preserved. They give +46.458326064 mm focal length, consistent with printed f3 = 46.46 mm. Reversing only R54 to +450 mm gives +42.610531787 mm and loses that agreement; that counterfactual is rejected, not adopted as a source correction. [1, ¶0140; Tables 7, 17]

The terminal element's relatively lower index is explicitly constrained by condition (11). Its meniscus curvature ratio is condition (1). These are verifiable source constraints; a separate field-flattening or distortion contribution cannot be quantified from these conditions alone.

## Glass Identification and Selection

The patent publishes d-line nd and νd, but no supplier, melt or complete spectral formula. Matching used authoritative OHARA, HOYA, HIKARI, SCHOTT, CDGM and SUMITA catalogs, considering the exact converter coordinates independently of the separately audited master coordinates. Twenty-five distinct master/plate/converter coordinates were searched. Equality at a published coordinate is catalog equivalence, not manufacturer identity. [8–13]

The eight representative selections and their catalog line indices are:

| Element | Representative catalog class | nd / νd | nC | nF | ng | ΔPgF |
|---|---|---|---|---|---|---|
| L1 | HOYA E-FD8 class | 1.68893 / 31.16 | 1.682510 | 1.704620 | 1.717860 | +0.007435182 |
| L2 | HOYA TAF3D class | 1.80420 / 46.50 | 1.799000 | 1.816300 | 1.825940 | -0.008361566 |
| L3 | HOYA FF5 class | 1.59270 / 35.45 | 1.587820 | 1.604540 | 1.614450 | +0.008530249 |
| L4 | CDGM H-ZLaF55C class | 1.83481 / 42.71 | 1.828983 | 1.848528 | 1.859568 | -0.007111435 |
| L5 | HOYA E-FD5 class | 1.67270 / 32.17 | 1.666610 | 1.687520 | 1.699990 | +0.006675315 |
| L6 | HOYA TAFD55-W class | 2.00100 / 29.13 | 1.991050 | 2.025400 | 2.046000 | +0.004905539 |
| L7 | OHARA S-LAH98 class | 1.95375 / 32.32 | 1.945140 | 1.974650 | 1.992070 | +0.000870610 |
| L8 | HOYA E-CF6 class | 1.51742 / 52.15 | 1.514440 | 1.524360 | 1.529900 | +0.002384042 |

Here $P_{gF}=(n_g-n_F)/(n_F-n_C)$ and $\Delta P_{gF}=P_{gF}-(0.6438-0.001682\nu_d)$. The latter uses the pinned runtime's normal line, not an unexamined supplier deviation convention. Display wavelengths are d = 587.6 nm, C = 656.3 nm, F = 486.1 nm and g = 435.8 nm; catalog coefficient checks retain native line precision, including HIKARI's 435.835 nm g-line convention where supplied. [7–13]

The model preserves the patent's nd and νd and stores no nC, nF or ng: each glass label resolves to catalog dispersion data, anchored to the authored index. Finite catalog rounding means recomputing νd from the rounded line indices need not return precisely the nominal source νd. This is most visible for TAF3D, TAFD55-W and E-CF6; the nominal values are not refitted. Raw-workbook cell values and coefficient-based checks are retained separately.

All eight modeled elements resolve to catalog dispersion data through their glass labels. CDGM H-ZLaF55C has no entry in the runtime resolver, so L4 is labeled S-LAH55 / H-ZLaF55C class and takes the OHARA S-LAH55 curve; the L4 row above lists the CDGM values. That resolver limitation is not a license to replace its source coordinate or invent a catalog record.

Conditions (10)–(12) govern the maximum negative-element index in G2, the lower-index positive G3 and G1's Abbe range. The opposed powers and material contrasts provide a plausible design freedom for chromatic balance, but the present d-line geometry and representative spectra do not establish APO performance, production chromatic correction or a specific element-by-element aberration allocation.

## Focus Mechanism

The converter is a rigid detachable assembly. It has no independently authored stop, focus actuator, moving optical group, zoom variable or finite-focus reconstruction. Its aperture is governed by the taking lens.

The patent's master is a separate zoom design. Paragraph ¶0101 describes G1R and the rear negative L24 of G20 moving objectward, while G50 moves imageward for closer focus. It does not publish the finite-focus spacings or travel needed to reconstruct that mechanism numerically. Thus no close-focus travel, minimum object distance, continuous focusing law or manufactured motor type is assigned to this converter. [1, PDF pp26–27]

For zooming, ¶0100, Table 2 and Figure 1 identify fixed G1F/G40/G60 and moving G20/G30/G50, with distinct G2F and G2R trajectories. Only the two printed infinity endpoints supply the spacings used here. Ephemeral reference fixtures reproduce those endpoints; they are not new production-host data files. Neither a guessed cam law nor an arbitrary zero-defocus condition over intermediate zoom positions is imposed.

Actual composition propagates a host's available state law. Future registration therefore requires validation against the particular host's real zoom/focus mechanisms and compatible mechanical clearance. The present endpoint checks cannot establish unprovided finite states or all intermediate zoom states. Sony's statement that compatible combinations retain autofocus is a manufacturer claim, not an independently executed autofocus test. [4, 7]

## Aspherical Surfaces

Native surface 44*, on L1's rear, is modeled as 2A. With $c=1/R$ and the usual conic convention $K=0$ for a sphere, the implemented sag is

$$z(y)=\frac{c y^2}{1+\sqrt{1-(1+K)c^2y^2}}+A_4y^4+A_6y^6+A_8y^8.$$

The original equation instead prints $c^2y^2$ in the numerator. The radical's $c^2$ remains correct and unchanged. The numerator is interpreted as $cy^2$ for three independent reasons: dimensional consistency of sag, recovery of the signed tabulated vertex curvature, and agreement with the patent's printed first-group power and claimed condition (8). This is an explicitly disclosed apparent source correction, not an official erratum. The literal printed branch remains calculated and documented. [1, ¶0088–0091, PDF pp23–24; claim 9, PDF p58]

| Surface | R (mm) | K | A4 (mm⁻³) | A6 (mm⁻⁵) | A8 (mm⁻⁷) |
|---|---|---|---|---|---|
| 44* → 2A | -62.4251 | 0.13 | -7.90520E-06 | +3.13613E-10 | +1.60328E-11 |

No odd-order coefficients are supplied. Unprinted A10, A12 and A14 are zero in the model, not measured zero departures. The scale factor is 1, so no dimensional coefficient conversion is applied; for a hypothetical uniform scale s, the convention would be $A_{p,\mathrm{scaled}}=A_{p,\mathrm{source}}/s^{p-1}$ with K unchanged. The source does not establish a particular molding, polishing or composite-layer manufacturing process for this prescription. [1, ¶0136]

At the inferred radius 8.7 mm, the actual sag is -0.654236537115 mm and departure from the signed vertex sphere is -0.045017263753 mm. The net peripheral departure is toward negative z; the negative A4 contribution is partly offset by higher positive terms. This geometric statement does not by itself establish a measured aberration improvement. The square-root radicand is 0.978051822930 and the mathematical conic radius limit is 58.724594281 mm, beyond the adopted clear radius.

| Equation branch | G1 f (mm) | Virtual magnification | Virtual BF (mm) | abs(f1/f), required 0.3–1.5 |
|---|---|---|---|---|
| Interpreted cy² | 68.215450619 | 2.000019845 | 12.867647530 | 1.051734750 |
| Literal printed c²y² | 286.099430320 | 3.896990375 | 66.197872801 | 7.217603578 |

The literal numerator changes the vertex curvature rather than merely adding a high-order correction. Its G1 focal length and condition (8) disagree strongly with the independent source constraints. The interpreted branch recovers them without altering any radius, thickness, refractive index, conic constant or polynomial coefficient. No power fitting to the marketed 2× value is performed.

## Conditional Expressions

The following conditions use the reconstructed Example 3 at the d-line. Rb1/Rb2 are the two G3 surface radii, Lr is the converter first-to-last vertex extent, h is the source image height 21.63 mm, BF is the source air-equivalent back focus, and β is the nominal converter factor 2. The directed principal-plane quantities are $et_o=-H$ from the first vertex and $et_i=H'$ from the last vertex; here H = -6.430283999 mm and H′ = -51.993577551 mm. The symbols f, f1, f2 and f3 denote the isolated converter and functional-group focal lengths, not host-plus-converter focal lengths. [1, condition definitions, PDF pp11–18; Table 17, PDF p45]

| No. | Expression | Strict bounds | Calculated | Table 17 | Disposition |
|---|---|---|---|---|---|
| 1 | (Rb2+Rb1)/(Rb2-Rb1) | -3.5 < value < -0.18 | -1.107728337 | -1.11 | Satisfied |
| 2 | f3/(-f2) | 2.2 < value < 7.2 | 3.701355169 | 3.7 | Satisfied |
| 3 | -f2/(Lr*beta) | 0.05 < value < 0.45 | 0.153488886 | 0.15 | Satisfied |
| 4 | Lr/(et_o+Lr) | value < 1.13 | 0.864105723 | 0.86 | Satisfied |
| 5 | BF/h | 0.3 < value < 1.9 | 0.598622284 | 0.6 | Satisfied |
| 6 | (BF-et_i)/(BF+Lr) | 0.7 < value | 1.206284573 | 1.21 | Satisfied |
| 7 | d12/(-f) | 0.03 < value < 0.2 | 0.053425891 | 0.05 | Satisfied |
| 8 | abs(f1/f) | 0.3 < value < 1.5 | 1.051734750 | 1.05 | Satisfied |
| 9 | f2/f | 0.05 < value < 0.4 | 0.193520184 | 0.19 | Satisfied |
| 10 | Nd_G2m | 1.85 < value | 2.001000000 | 2.001 | Satisfied |
| 11 | Nd_G3p | value < 1.65 | 1.517420000 | 1.51742 | Satisfied |
| 12 | νd_G1 | 15 < value < 35 | 31.160000000 | 31.2 | Satisfied |

All inequalities are strict. Each computed value lies inside its stated bounds and rounds consistently to Table 17. The preferred subranges for (1), (2), (3), (7) and (8) are also satisfied. The source's broader performance discussion motivates these constraints, but satisfying them is not a substitute for an aberration-performance calculation. The literal printed asphere branch fails condition (8), as shown above.

## Verification Summary

### Independent calculations and printed-summary residuals

Independent sequential and ABCD calculations use source-preserving signed geometry; actual targeted runtime checks separately import and build the final converter, compose the source endpoint fixtures, construct production outlines and trace rays. Runtime and independent calculations serve different purposes. A successful build does not erase a disagreement with a rounded patent summary.

Twelve comparisons exceed half of the last printed unit, 0.005 in the displayed source units. The following table preserves every such comparison. Residual means calculated minus printed. None is reclassified as a rounding match or suppressed by relaxing the printed-precision threshold.

| State and quantity | Printed | Calculated | Residual | Disposition |
|---|---|---|---|---|
| Combined Wide — EFL (mm) | 144.23 | 144.169001996 | -0.060998004 | Exceeds 0.005 |
| Combined Wide — air BF (mm) | 12.95 | 12.873113436 | -0.076886564 | Exceeds 0.005 |
| Combined Wide — air total (mm) | 242.97 | 242.984500000 | +0.014500000 | Exceeds 0.005 |
| Combined Wide — Fno | 5.77 | 5.780360929 | +0.010360929 | Exceeds 0.005 |
| Combined Wide — rectilinear full field (°) | 8.62 | 17.065145654 | +8.445145654 | Exceeds 0.005 |
| Master Tele — EFL (mm) | 194.05 | 194.075920241 | +0.025920241 | Exceeds 0.005 |
| Master Tele — air BF (mm) | 27.61 | 27.637972651 | +0.027972651 | Exceeds 0.005 |
| Combined Tele — EFL (mm) | 388.50 | 388.512292115 | +0.012292115 | Exceeds 0.005 |
| Combined Tele — air BF (mm) | 12.95 | 12.986822879 | +0.036822879 | Exceeds 0.005 |
| Combined Tele — air total (mm) | 242.97 | 242.984500000 | +0.014500000 | Exceeds 0.005 |
| Combined Tele — Fno | 5.76 | 5.766119048 | +0.006119048 | Exceeds 0.005 |
| Combined Tele — rectilinear full field (°) | 3.20 | 6.373181316 | +3.173181316 | Exceeds 0.005 |

The EFL and back-focus residuals remain small but unresolved source-versus-detailed-prescription discrepancies at the stated printing precision. They may involve accumulated prescription rounding, but no complete rounding-error bound proves that explanation. The total-length discrepancy follows directly from the detailed air-equivalent distances. Both are retained without fitting geometry or moving the image.

The f-number entries above are source-calibrated paraxial diagnostics using rounded bare-master f/Fno. They are not independent measurements of the physical iris and are not identical to the actual runtime's nominal composed f-number calculation. The field rows are rectilinear paraxial diagnostics, not exact distorted chief rays; their large differences require the separate heading test below.

### Angular-header ambiguity

Table 8 prints the heading 2ω but gives 8.62° at Wide and 3.20° at Tele. Both a literal full-angle interpretation and a numerical-half-angle hypothesis were traced at the same fixed physical image plane with the single camera cover. The absolute exact chief-ray heights are:

| State | Hypothesis | Launch half-angle (°) | Absolute image height (mm) |
|---|---|---|---|
| Wide | Literal 2ω | 4.31 | 10.840444571 |
| Wide | Numerical half-angle | 8.62 | 21.630327784 |
| Tele | Literal 2ω | 1.60 | 10.833240480 |
| Tele | Numerical half-angle | 3.20 | 21.633796947 |

All four chief-ray aims converge and all four traces reach the image plane. Inverting exact image height 21.63 mm instead gives half angles 8.619874866782° and 3.199430424191°. The numerical-half-angle interpretation is consistent with that height; the literal heading gives approximately half-height. This is evidence for an apparent heading/numeral inconsistency, not an official corrected heading. Both hypotheses remain preserved, with no silent change to the printed source.

### Inferred apertures, material geometry and rendering

The source contains no clear semi-diameter table. Figure 4 supports only approximate relative rims. Coarse inferred component radii 8.7/10/12/16/18.5 mm initially produced negative peripheral thickness in L3 and L5. Reducing the common triplet and doublet bands to 9.4 and 11.2 mm was the source-preserving remedy; no optical prescription parameter was altered. A later reading of the figure raised the rear faces of L4 and L6 to the drawn height, and the final surface semi-diameters are [8.7, 8.7, 9.4, 9.4, 9.4, 10.1, 11.2, 11.2, 11.9, 16, 16, 18.5, 18.5] mm.

Read at 0.107 mm per pixel, with the thirteen vertices matching Table 7 to about 0.2 mm, Figure 4 draws L1 at 8.7 mm, L2 at 9.4, L3 at 9.3, L4 at 10.1, L5 to a knife edge at 11.2, L6 at 11.9, L7 at 15.8 and L8 at 18.4; the modeled rims follow those readings to within about 1.5%. L4 and L6 stand about 0.7 mm proud of their cemented partners. L3 and L5 close up at 9.8 and 11.4 mm, so the cemented junctions stay at 9.4 and 11.2 mm and only the rear faces of L4 and L6 carry 10.1 and 11.9 mm; the rendered rim of each is the straight line between its two face heights, where the figure draws a flat land outside the junction and a square top. L7's front face is drawn curved to about 14 mm with a flat land beyond; the model keeps 16 mm on both faces of the square-cut element. [1, Figure 4; Table 7]

An exploratory enlargement intended to transmit the entire peripheral pupil was rejected. It would erase ordinary vignetting without source support and also admitted trajectories with no forward intersection through the thin positive L3 edge. Those failed trials remain evidence; they are not the final model. The final choice retains the figure-based rims and modeled peripheral vignetting.

The minimum positive glass thickness over the full component bands is 0.297962582797 mm. The largest actual rim angle is 53.547318226°, below the current default 64.158067237°. Mathematical domains, the applicable positive-K 98% domain policy, common cemented support and shared-band air-gap checks pass. The largest positive gap-intrusion fraction is 0.203286327135, in the air space behind L6 at its 11.9 mm rear rim, below 0.9; no gap-sag or rim override is used. The gap checks search the complete common radial band, not only its endpoint.

Actual production render diagnostics report zero trimming. Independent tests of the actual 96-subdivision outlines find no self-crossing, interelement crossing or forbidden strict containment for the eight converter elements and adjacent last-master/cover geometry. Their diagram was visually compared with Figure 4. Those outline tests used the earlier 9.4 and 11.2 mm rear faces of L4 and L6; with 10.1 and 11.9 mm the render diagnostics still report zero trimming on the four declared hosts, and the rear rims of L4 and L6 stand 1.19 and 5.03 mm clear of the next element. This finite rendering and numerical geometry evidence is not manufacturing-tolerance or browser-viewer certification.

### Physical iris and sampled-ray coverage

The reference fixtures use the patent master at Wide and Tele infinity, first at source f/2.89 and f/2.88 respectively, then at diagnostic f/2.8. The runtime obtains physical-stop radius by source-calibrated entrance rays. Exact equality before and after converter composition is checked; doubling nominal f-number alone would not establish preserved iris geometry.

| Master endpoint | Host f-number | Bare stop radius (mm) | Composed stop radius (mm) |
|---|---|---|---|
| Wide | 2.89 | 18.013018939701 | 18.013018939701 |
| Wide | 2.80 | 18.649773681755 | 18.649773681755 |
| Tele | 2.88 | 17.415570340319 | 17.415570340319 |
| Tele | 2.80 | 17.961999203097 | 17.961999203097 |

Each configuration samples nine source-image-height fractions [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1] of 21.63 mm. Each field has 577 physical-stop targets: the center and 12 radial rings × 48 azimuths. Ring fractions are 1/12 through 1; the outer ring is moved inward by a fractional 10⁻⁹ solely to avoid floating-point boundary classification. The same converged incident ray is traced through the bare and composed fixtures.

| Classification | Count | Denominator / meaning |
|---|---|---|
| Attempted pupil targets | 20,772 | All four configurations |
| Unresolved target solves | 432 | Of 20,772 attempted |
| Converged target solves | 20,340 | Of 20,772 attempted |
| Traced bare-host clips | 396 | Of 20,340 converged |
| Bare-host admitted | 19,944 | Of 20,340 converged |

The 432 unresolved pupil-target solves are neither physical aperture clipping nor successful transmission. They consist of 371 line-search failures and 61 Jacobian misses, all at Tele fields 0.375–1. The last valid iterate reaches the stop but misses the requested pupil coordinate; it is not substituted as a valid target ray. Rejected derivative/search traces report `noBracket` at pre-stop master surfaces 1, 2, 4, 5, 6 or 7. An intersection-failure diagnostic's internal clipped flag does not establish a physical aperture encounter.

| Tele aperture | Image-height fraction | Unresolved targets | Target radial rings (of 12) |
|---|---|---|---|
| native | 0.375 | 7 | 12 |
| native | 0.5 | 13 | 12 |
| native | 0.625 | 26 | 11, 12 |
| native | 0.75 | 37 | 10, 11, 12 |
| native | 0.875 | 49 | 10, 11, 12 |
| native | 1 | 64 | 9, 10, 11, 12 |
| 2.8 | 0.375 | 13 | 12 |
| 2.8 | 0.5 | 22 | 11, 12 |
| 2.8 | 0.625 | 32 | 11, 12 |
| 2.8 | 0.75 | 45 | 10, 11, 12 |
| 2.8 | 0.875 | 56 | 9, 10, 11, 12 |
| 2.8 | 1 | 68 | 9, 10, 11, 12 |

The full ray records retain exact azimuths, ring coordinates, solver reasons and continuation attempts. Each bare-host-admitted ray was traced on through the converter and either admitted or stopped at a converter rim. A converter clip is a separately traced physical rim encounter: modeled peripheral vignetting, not an unresolved launch. Neither category counts as transmission; the raw counts are not area-weighted throughput estimates.

The split of the 19,944 bare-admitted rays between converter clips and admitted rays is not quoted here. It was sampled with the rear faces of L4 and L6 at 9.4 and 11.2 mm, and the fixtures have not been resampled since those faces were raised to the drawn 10.1 and 11.9 mm. In that sample every converter clip fell on a face of L1 or on one of those two rear faces, most of them on L1. L1 is unchanged, so its clips stand; a ray that was stopped at the rear of L4 or L6 is now either admitted or still stopped, there or at a later rim, and no ray admitted before is lost. On the four declared catalog hosts, with the current rims, a meridional fan to the 21.63 mm image corner is stopped inside the converter only by L1.

All 2,308 on-axis samples and all 36 field-chief checks have valid admitted traces, which wider rear faces cannot change. Containment was tested only on the rays admitted through the composed fixtures in that earlier sample: every glass segment of those rays, at sampled points inside the curved material and inside the rendered polygons, stayed in glass, with zero escapes. Those rays remain admitted, the material they crossed is unchanged and the rendered outlines of L4 and L6 have only grown, so the result still holds for them; rays that only the raised rear faces admit have not been tested for containment. No required axial, chief, valid-geometry, zero-trim or admitted-ray containment conclusion depends on an excluded target solve.

The unresolved samples do limit any claim of complete off-axis pupil throughput. Neither full pupil transmission, continuous field/pupil clearance, all zoom/focus states nor production performance is established. The finite valid coverage is sufficient for the stated axial/chief and admitted-ray acceptance basis without treating an untraced ray as clear.

### Runtime and integration boundary

The executed source-only runtime is pinned at commit d8b406ce112931ab0b2988b87acbd13b0b663c7e. Its actual converter schema, construction, composition, dispersion, production-render and targeted trace mechanisms were exercised on this exact data. Negative controls detect changed radii, shifted reference planes, wrong spectra, oversized rims, illegal converter stops and unsupported lens-only fields. [7]

A Node TypeScript import is not a TypeScript compiler check. Compiler, formatter, repository lint, full build, browser viewer and production chromatic-performance checks have not been claimed. Four catalog hosts are registered (see the first section). The reference master is a source-derived diagnostic fixture, not evidence that any unregistered production host has passed its own mechanism and mechanical-fit validation.

## Sources and References

[1] WIPO, Sony Corporation, [WO2017134928A1, *Teleconverter lens and optical apparatus*](https://patentimages.storage.googleapis.com/ae/1a/f6/2651b2e6cd74fe/WO2017134928A1.pdf). Primary unchanged Japanese publication. PDF p1: identity/dates; pp23–24: equation and line convention; pp26–29: master mechanism and Tables 1–2; pp34–36: Example 3, Tables 7–8 and ¶0136–0140; p45: Table 17; p58: claim 9; p72: Figure 1; p74: Figure 4; p80: Figure 12. PDF page numbers are file-page locators, not a substituted printed numbering scheme.

[2] Sony, [SEL20TC features](https://www.sony.jp/ichigan/products/SEL20TC/feature_1.html). Retained original manufacturer HTML, byte-verified against the approved source archive; product counts, mechanical dimensions, light loss and compatibility caveats.

[3] Sony, [SEL20TC optical construction diagram](https://www.sony.jp/products/picture/y_SEL20TC_comosition.jpg). Retained original image; topology and first-element asphere, not exact production prescription evidence.

[4] Sony, [2016-02-19 Japanese announcement](https://www.sony.jp/CorporateCruise/Press/201602/16-0219/). Original HTML retrieval recorded as 2026-10-11T08:23:42.933366+00:00. Launch context, intended host and autofocus statement.

[5] Sony, [2016-09-26 release-date notice](https://www.sony.jp/ichigan/info2/20160926.html). Original HTML retrieval recorded as 2026-10-11T08:24:35.817200+00:00. The SEL20TC release date is distinct from SEL14TC's release date.

[6] Sony, [SEL20TC specifications](https://www.sony.jp/ichigan/products/SEL20TC/spec.html). Official page read preserved as a read record, not a downloaded raw HTML body.

[7] LensVisualizer [public source tree at commit d8b406ce112931ab0b2988b87acbd13b0b663c7e](https://github.com/ronbuening/LensVisualizer/tree/d8b406ce112931ab0b2988b87acbd13b0b663c7e): converter schema/build/composition, asphere geometry, dispersion and production outlines. Exact file/Git-blob identities and executable targeted replay are supplied in the companion dossier. This pin identifies the executed source, not an assertion of current remote-main freshness.

[8] OHARA, authoritative optical-glass data: [ohara_s_5d.xlsx](https://oharacorp.com/wp-content/uploads/catalogs/ohara-20260402-5.xlsx) (original retrieval 2026-10-11T00:34:00.021177+00:00); [ohara_l_5d.xlsx](https://oharacorp.com/wp-content/uploads/catalogs/ohara-20250312-L5.xlsx) (original retrieval 2026-10-11T00:34:00.021905+00:00); [ohara_all_20260701_extracted/OHARA_260701.AGF](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip) (original retrieval 2026-10-11T00:34:00.020635+00:00).

[9] HOYA, authoritative optical-glass data: [hoya.xlsx](https://www.hoya-opticalworld.com/common/xls/HOYA20260601.xlsx) (original retrieval 2026-10-11T00:34:00.024797+00:00); [hoya_include_obsolete.agf](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf) (original retrieval 2026-10-11T00:34:00.024357+00:00).

[10] HIKARI, authoritative optical-glass data: [hikari.xlsx](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_ALL_Catalog_Data.xlsx) (original retrieval 2026-10-11T00:34:04.479288+00:00).

[11] SCHOTT, authoritative optical-glass data: [schott.xlsx](https://media.schott.com/api/public/content/7f5a58f7fa754445abab44cafc76acb3?v=a102056c&download=true) (original retrieval 2026-10-11T00:34:05.438866+00:00); [schott_extracted/schott glasses preferred and special June-2025-B.AGF](https://media.schott.com/api/public/content/a79c07aa61da4c05a2c0bbab93d09a7f?v=3b65e351&download=true) (original retrieval 2026-10-11T00:34:04.492622+00:00).

[12] CDGM, authoritative optical-glass data: [CDGM202609.xlsx](https://www.cdgmgd.com/downloadFile.htm?uid=d5ilBXjFgXCK9VxoDmb) (original retrieval 2026-10-11T00:34:00.019365+00:00); [CDGM-ZEMAX202609.AGF](https://www.cdgmgd.com/downloadFile.htm?uid=pvntrGdxCC64MZei1SX) (original retrieval 2026-10-11T00:34:00.018716+00:00).

[13] SUMITA, authoritative optical-glass data: [sumita_download_extracted/sumita-opt-dl-data-20261011003410/glassdata_ver14.02.00_en.xlsx](https://www.sumita-opt.co.jp/en/wp/wp-content/themes/sumita-opt-en-v2026/download-files.php) (original retrieval 2026-10-11T00:34:00.020388+00:00); [sumita_download_extracted/sumita-opt-dl-data-20261011003410/zemax.agf](https://www.sumita-opt.co.jp/en/wp/wp-content/themes/sumita-opt-en-v2026/download-files.php) (original retrieval 2026-10-11T00:34:00.020388+00:00).

### Source availability and interpretation limits

The authoritative patent and job card are unchanged originals. Manufacturer feature/diagram/launch/release bytes and raw supplier catalogs were reused from identified archives and freshly byte-verified; their original retrieval dates remain recorded rather than relabeled as new downloads. Feature and diagram archive reuse does not have a newly asserted retrieval timestamp. The patent's prior approved research record is supporting correction history, not an official erratum and not a substitute for Example 3 calculations.

A fresh Sony raw-download attempt encountered tunnel/reset/refusal errors and a tool-reported cancellation. It was not retried or routed around. Available evidence consists of the retained original manufacturer files and the prior official specification-page read; a fresh raw specification HTML body and exhaustive current compatibility list are unavailable. These limitations do not negate the identified original sources, but prevent a claim of fresh complete manufacturer acquisition.
