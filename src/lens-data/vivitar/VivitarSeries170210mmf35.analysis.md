# Vivitar Series 1 70–210mm f/3.5 VMC Macro Focusing Auto Zoom

## Patent Reference and Design Identification

**Patent:** JP S51-63635 (特開昭51-63635; JPA 1976063635)  
**Original Japanese application:** JP 46-41643  
**Filed in Japan:** 18 June 1971, as printed on the Japanese publication  
**Published:** 2 June 1976  
**Inventors:** Rinzō Watanabe (渡辺 林蔵); Ellis I. Betensky  
**Applicant:** Kino Precision Industries Co., Ltd. (キノ精密工業株式会社)  
**Title:** Zoom Lens (ズームレンズ)  
**Embodiment analyzed:** Table 1, the sole numerical example  
**English counterpart:** US 3,817,600, *Zoom Lens Having Close-Up Focusing Mode of Operation*, granted 18 June 1974

The Japanese publication and the US counterpart disagree slightly on the earliest application date. The Japanese cover page prints 18 June 1971, while the US cover claims Japanese foreign priority from 14 June 1971 under application 46-41643. The Japanese date is used for the metadata of JP S51-63635; the US date is retained only as patent-family information.

Table 1 on patent pages 3–4 defines a 15-element, four-principal-group zoom with nominal focal length $f = 70$–$205$ mm and relative aperture 1:3.65. The prescription is identified with high confidence as the optical basis of the first Vivitar Series 1 70–210mm f/3.5 VMC Macro Focusing Auto Zoom for the following convergent reasons:

1. The production specification is 15 elements in 10 groups; the patent contains 15 physical elements in 10 air-separated groups.
2. The production range is 70–210 mm at f/3.5; the patent states 70–205 mm at 1:3.65. Direct paraxial tracing of the unscaled table gives 72.6621 mm and 204.9403 mm.
3. Both sources describe tele-end macro operation. The patent moves Groups II and III together at a fixed 6.000 mm separation and permits an object distance of approximately 80 mm from the front surface. The reconstructed limiting state gives 54.3490 mm EFL and 1:2.230 paraxial magnification, closely matching the production 54 mm macro focal length and 1:2.2 ratio.
4. The patent specifies normal focusing by Group I to approximately 1.8 m from the front lens, consistent with a production minimum distance of approximately 2.0 m when measured from the film plane.
5. Kino Precision’s authorship and the 1971–1976 patent chronology are consistent with the first production version.

This is a high-confidence design match, not proof of the exact factory bill of materials. The patent does not identify production glass suppliers, clear apertures, coating details, tolerances, or mount-specific mechanical dimensions.

No focal-length scale factor is applied. The marketed 70–210 mm and f/3.5 values are retained only as product metadata; every radius and axial thickness in the data file remains at the native Table 1 scale.

## Optical Architecture

The lens is a mechanically compensated four-principal-group zoom with positive–negative–negative–positive power distribution:

- **Group I, surfaces 1–5:** positive front focusing group; three elements in two air-separated groups.
- **Group II, surfaces 6–10:** negative variator; three elements in two air-separated groups.
- **Group III, surfaces 11–13:** negative compensator; one cemented doublet.
- **Group IV, surfaces 14–25:** positive fixed master group; seven elements in five air-separated groups.

The stop is immediately after surface $r_{21}$. The note beside the continuation of Table 1 on patent page 4 states this directly. The data file therefore assigns zero distance after surface 21 and inserts a separate `STO` plane carrying the published 49.846 mm spacing to surface 22.

The zoom-variable air gaps are $d_5$, $d_{10}$, and $d_{13}$. Their endpoint sums are 55.054 and 55.055 mm; the 0.001 mm difference is table rounding. The first-to-last glass-surface track is correspondingly 160.000 and 160.001 mm, agreeing with the US counterpart’s stated 160.000 mm overall glass track.

From wide to tele, both Groups II and III move imageward relative to the fixed Groups I and IV. Group II advances 45.514 mm, while Group III advances 22.889 mm; consequently, their mutual air gap contracts from 28.624 to 6.000 mm. The US counterpart’s Figure 8 confirms that the two groups follow different nonlinear zoom trajectories.

| Quantity | Wide patent state | Tele patent state |
|---|---:|---:|
| Patent nominal focal length | 70 mm | 205 mm |
| Independently traced EFL | 72.6621 mm | 204.9403 mm |
| $d_5$ | 2.041 mm | 47.555 mm |
| $d_{10}$ | 28.624 mm | 6.000 mm |
| $d_{13}$ | 24.389 mm | 1.500 mm |
| Paraxial BFL | 40.8616 mm | 40.8859 mm |

The patent omits the final distance from surface 25 to the image plane. The data file uses 40.873732 mm, the mean of the independently traced endpoint BFLs. This leaves endpoint longitudinal residuals of only $±0.012143$ mm without inventing a focal-length-dependent image plane.

The complete first-surface-to-image track at tele is 200.8747 mm, giving $TL/EFL = 0.9802$. The complete system therefore satisfies the strict telephoto criterion $TL/EFL < 1$ narrowly at the long endpoint. The patent separately describes Group IV itself as a telephoto-type master objective.

The patent supplies no numerical intermediate zoom spacings. Page 4 plots aberrations at 70, 130, and 205 mm, and the US Figure 8 shows the nonlinear group-motion curves, but neither source tabulates the corresponding intermediate values of $d_5$, $d_{10}$, and $d_{13}$. The data file therefore treats only the 70 and 205 mm states as prescription-grounded. Continuous slider interpolation between them is schematic and does not reproduce the physical zoom cam exactly.

## Element-by-Element Analysis

The element focal lengths below are standalone thick-lens values in air calculated from each element’s two bounding radii, center thickness, and patent $n_d$. They are not the in-situ powers of components inside cemented assemblies.

### L1 + L2 — Cemented Positive Achromat

**L1:** $n_d = 1.71736$, $\nu_d = 29.5$. Glass: SF1 dense flint, exact legacy SUMITA match. $f = -159.9$ mm.

**L2:** $n_d = 1.58913$, $\nu_d = 61.2$. Glass: SK5 dense crown, exact legacy SUMITA match. $f = +114.4$ mm.

L1 is a negative meniscus convex to the object; L2 is biconvex and positive. Cemented at surface 2, the pair has a net paraxial focal length of approximately +400.2 mm in air. It provides weak positive power and the first major chromatic correction of Group I.

### L3 — Positive Meniscus

$n_d = 1.51009$, $\nu_d = 63.4$. Glass: BK1 crown, exact legacy SUMITA match. $f = +182.4$ mm.

L3 supplies the remaining positive power of Group I. Its rear radius of +3376.49 mm is nearly planar, concentrating most of its power at surface 4. The complete group has $F_1 = +125.9999$ mm.

The English counterpart’s prose calls the final Group-I singlet double-convex, but the numerical prescription has both radii positive and is unambiguously a positive meniscus. The Table 1 radii control the transcription.

### L4 + L5 — Nearly Afocal Cemented Doublet

**L4:** $n_d = 1.78472$, $\nu_d = 25.7$. Glass: SF11 dense flint, exact legacy SUMITA match. $f = +76.4$ mm.

**L5:** $n_d = 1.66672$, $\nu_d = 48.4$. Glass: BAF11 barium flint, exact legacy SUMITA match. $f = -79.6$ mm.

The cemented pair has a net focal length of approximately +1458 mm and is nearly afocal. It principally redistributes chromatic and monochromatic aberration within Group II rather than supplying the group’s net negative power.

### L6 — Biconcave Negative

$n_d = 1.66672$, $\nu_d = 48.4$. Glass: BAF11 barium flint, identical in the patent to L5. $f = -60.3$ mm.

L6 supplies most of the negative power of the variator. Together with the weakly positive L4–L5 doublet, it gives Group II $F_2 = -63.8983$ mm.

### L7 + L8 — Negative Compensator Doublet

**L7:** $n_d = 1.52249$, $\nu_d = 59.6$. Glass: K5 crown, exact legacy SUMITA match. $f = -37.7$ mm.

**L8:** $n_d = 1.62588$, $\nu_d = 35.6$. Glass: F1 flint, exact legacy SUMITA match. $f = +68.1$ mm.

This cemented doublet is Group III in its entirety and has $F_3 = -82.8897$ mm. The patent’s conditions link L7’s standalone focal length, radius $r_{11}$, and the 24.0-point Abbe-number difference directly to maintaining aberration balance in both zoom and macro operation.

### L9 + L10 — Positive Cemented Achromat

**L9:** $n_d = 1.48749$, $\nu_d = 70.0$. Glass: FK5 class; SUMITA FK5 and HIKARI J-FK5 match $n_d$ but list $\nu_d$ near 70.3–70.4. $f = +54.0$ mm.

**L10:** $n_d = 1.80518$, $\nu_d = 25.5$. Glass: SF6 dense flint, exact legacy SUMITA match. $f = -134.4$ mm.

The pair has a net focal length of approximately +90.5 mm. The large dispersion separation provides strong achromatization. The English counterpart also specifies that L9, L11, and L12 have $n_d < 1.52$ as part of Group IV’s Petzval correction strategy.

FK5 is a fluor-crown-class optical glass. The patent does not establish modern ED behavior, anomalous partial dispersion, or crystalline fluorite. Because the patent $\nu_d=70.0$ is not an exact match to the available FK5 catalog values, the data file does not import catalog $n_C$, $n_F$, or $n_g$ values for L9, L11, and L12.

### L11 — Positive Meniscus

$n_d = 1.48749$, $\nu_d = 70.0$. Glass: FK5 class, identical in patent data to L9 and L12. $f = +158.9$ mm.

L11 adds weak positive relay power between the two cemented achromats in the front section of Group IV. Its low index assists field-curvature control while its high Abbe number limits added longitudinal color.

### L12 + L13 — Cemented Positive Achromat

**L12:** $n_d = 1.48749$, $\nu_d = 70.0$. Glass: FK5 class. $f = +58.5$ mm.

**L13:** $n_d = 1.64328$, $\nu_d = 47.8$. Glass: BAF9 barium flint, exact legacy SUMITA match. $f = -77.0$ mm.

The pair has a net focal length of approximately +206.9 mm. It completes the positive front section of Group IV immediately before the stop. Together, surfaces 14–21 have a paraxial focal length of +44.7671 mm.

### L14 — Negative Meniscus, Concave to Object

$n_d = 1.69700$, $\nu_d = 48.5$. Glass: LAFN2 dense lanthanum flint, exact legacy SUMITA match. $f = -47.5$ mm.

L14 is the strong negative element behind the long stop gap. Its Abbe number places it in flint territory despite the lanthanum family name. It supplies the principal negative power of Group IV’s rear section and offsets the positive Petzval contribution of the forward relay elements.

### L15 — Biconvex Positive

$n_d = 1.58921$, $\nu_d = 41.0$. Glass: LF2 light flint, exact legacy SUMITA match. $f = +65.8$ mm.

L15 partially offsets L14. The separated L14–L15 pair remains net negative at approximately −211.4 mm, while the complete Group IV remains positive at $F_{IV}=+44.1873$ mm.

## Glass Identification and Selection

The prescription contains 12 distinct $n_d$/$\nu_d$ pairs. Catalog names identify optical-constant matches, not proven production suppliers. The official SUMITA all-glass catalog is especially useful because it retains discontinued standard glass types with dispersion coefficients.

| Elements | Patent $n_d$ | Patent $\nu_d$ | Catalog identification | Assessment |
|---|---:|---:|---|---|
| L1 | 1.71736 | 29.5 | SF1 (SUMITA) | Exact at patent precision |
| L2 | 1.58913 | 61.2 | SK5 (SUMITA) | Exact at patent precision |
| L3 | 1.51009 | 63.4 | BK1 (SUMITA) | Exact at patent precision |
| L4 | 1.78472 | 25.7 | SF11 (SUMITA) | Exact at patent precision |
| L5, L6 | 1.66672 | 48.4 | BAF11 (SUMITA) | Exact at patent precision |
| L7 | 1.52249 | 59.6 | K5 (SUMITA) | Exact at patent precision |
| L8 | 1.62588 | 35.6 | F1 (SUMITA) | Exact at patent precision |
| L9, L11, L12 | 1.48749 | 70.0 | FK5 class | Exact $n_d$; catalog $\nu_d$ differs by 0.3–0.4 |
| L10 | 1.80518 | 25.5 | SF6 (SUMITA) | Exact at patent precision |
| L13 | 1.64328 | 47.8 | BAF9 (SUMITA) | Exact at patent precision |
| L14 | 1.69700 | 48.5 | LAFN2 (SUMITA) | Exact at patent precision |
| L15 | 1.58921 | 41.0 | LF2 (SUMITA) | Exact at patent precision |

The repeated FK5-class elements form the principal low-dispersion set in Group IV. The design is properly described as a strongly achromatized all-spherical zoom. The patent does not publish partial-dispersion data sufficient to claim apochromatic correction.

The exact legacy SUMITA vendor-polynomial records are now present for all previously missing types in this prescription. Strict catalog coverage is therefore 15/15 elements; at runtime, the complete author-supplied $n_C$/$n_F$/$n_g$ line indices remain the higher-priority dispersion source and independently cross-check the catalog assignments.

## Focus Mechanism

The lens has two mechanically distinct focus modes.

**Normal focus:** Group I moves axially while Groups II–IV retain the zoom-specific spacings. With the image plane fixed at the inferred 40.873732 mm BFD, a paraxial object 1.8 m in front of surface 1 requires Group-I objectward travel of 9.420944 mm at wide and 9.462059 mm at tele.

**Macro focus:** The mechanism first reaches the tele endpoint and the Group-I 1.8 m focus position. Groups II and III then move objectward equally while $d_{10}$ remains fixed at 6.000 mm. Consequently, $d_5$ decreases and $d_{13}$ increases by the same amount.

| State | $d_5$ | $d_{10}$ | $d_{13}$ |
|---|---:|---:|---:|
| Wide, infinity | 2.0410 mm | 28.6240 mm | 24.3890 mm |
| Wide, normal minimum focus | 11.4619 mm | 28.6240 mm | 24.3890 mm |
| Tele, infinity | 47.5550 mm | 6.0000 mm | 1.5000 mm |
| Tele, normal minimum focus | 57.0171 mm | 6.0000 mm | 1.5000 mm |
| Tele, maximum macro | 11.7804 mm | 6.0000 mm | 46.7367 mm |

The macro assembly moves 45.2367 mm objectward from the tele normal-focus position. The resulting configuration has 54.3490 mm EFL. For an object 80 mm in front of surface 1, the paraxial lateral magnification is −0.44843, or 1:2.230, and the object-to-image-plane distance is 290.3368 mm.

The data format supplies one interpolated focus interval at each zoom control point. It therefore stores the wide normal-focus endpoint and the tele maximum-macro endpoint. Those endpoint states are verified; intermediate focus-slider states are diagrammatic and do not reproduce the physical two-stage focus and macro cam.

## Conditional Expressions

The Japanese patent states three conditions. Absolute values are used because Groups II and III and element L7 are negative.

### Condition A — Group-Power Balance

$$0.45F_1 \le |F_2| \le 0.55F_1, \qquad |F_4| \le 0.3F_1$$

Here $F_4$ is the combined focal length of Groups II and III at the 6.000 mm macro spacing. Independent values are:

- $F_1=+125.9999$ mm
- $F_2=-63.8983$ mm
- $F_4=-34.6203$ mm

Therefore:

$$56.7000 \le 63.8983 \le 69.3000$$

$$34.6203 \le 37.8000$$

### Condition B — Compensator Geometry

$$0.4|F_3| \le |f_7| \le 0.5|F_3|$$

$$0.55|F_3| \le |r_{11}| \le 0.6|F_3|$$

With $F_3=-82.8897$ mm, $f_7=-37.6930$ mm, and $r_{11}=-47.69$ mm:

$$33.1559 \le 37.6930 \le 41.4449$$

$$45.5893 \le 47.6900 \le 49.7338$$

### Condition C — Group III Dispersion Difference

$$23.0 \le |V_7-V_8| \le 25.0$$

$$|59.6-35.6|=24.0$$

All three Japanese conditions are satisfied. The US claims preserve the lower dispersion bound but do not reproduce the Japanese upper bound of 25.0.

## Verification Summary

All results were recomputed from a literal transcription of Table 1 using a reduced-angle $[y,n\theta]$ ABCD trace. The patent values were not scaled.

| Quantity | Patent statement | Independent result |
|---|---:|---:|
| Group I focal length | +126.000 mm | +125.9999 mm |
| Group II focal length | −63.900 mm | −63.8983 mm |
| Group III focal length | −82.888 mm | −82.8897 mm |
| Group IV focal length | approximately +44.04 mm | +44.1873 mm |
| Groups II+III at 6.000 mm | −34.620 mm | −34.6203 mm |
| Wide EFL / BFL | nominal 70 mm / not stated | 72.6621 / 40.8616 mm |
| Tele EFL / BFL | nominal 205 mm / not stated | 204.9403 / 40.8859 mm |
| Fixed data-file BFD | not stated | 40.873732 mm |
| Stop semi-diameter for 1:3.65 | not stated | 14.457801 mm |
| Endpoint f-numbers | 3.65 | 3.64950 / 3.65050 |
| First-to-last glass track | 160.000 mm | 160.000 / 160.001 mm |
| Petzval sum, $\sum \phi/(nn')$ | not stated | +0.000340709 mm$^{-1}$ |
| Petzval-radius magnitude | not stated | 2935.1 mm |
| Maximum-macro EFL | not stated | 54.3490 mm |
| Maximum macro magnification | not stated | 0.44843× = 1:2.230 |

The wide-end difference between the patent’s nominal 70 mm and the 72.6621 mm result follows directly from the rounded numerical prescription. It is treated as ordinary nominal or table rounding rather than corrected by uniform scaling. The tele endpoint reproduces 205 mm within 0.06 mm.

The full-frame diagonal fields computed from the paraxial EFLs are 33.16° at wide and 12.05° at tele. These are approximate Gaussian fields and do not include distortion.

## Data-File Construction Notes

The patent does not publish clear semi-diameters. The data-file apertures were inferred from combined paraxial marginal and chief rays at the two zoom endpoints, normal close focus, and tele macro, then constrained by physical surface geometry, the production 67 mm accessory diameter, and the proportions of the patent's wide/tele section drawing. They are renderer estimates, not measured production apertures.

The selected values give:

- maximum $sd/|R|=0.7925$ at surface 22;
- minimum calculated edge thickness = 0.3510 mm at L2;
- maximum same-element semi-diameter ratio = 1.2188 at L6;
- limiting signed cross-gap sag intrusion = 5.3110 mm across the 6.000 mm gap from surfaces 10 to 11, or 88.52%;
- next-limiting intrusion = 2.2754 mm across the 2.700 mm gap from surfaces 8 to 9, or 84.27%.

The revised apertures make the front group taper from 31.8 to 28.8 mm and keep the master group near 17 mm before stepping down to 16 mm behind the stop. That closer match to the patent silhouette still passes every edge, rim-slope, cross-gap, and rendered-collision check.

Surface-20 thickness is read directly as 1.023 mm on patent page 4. This value also reproduces the published tele endpoint and the stated 160 mm glass track.

The patent supplies only endpoint zoom gaps. An attempted exact intermediate reconstruction would require assumptions about the unpublished nonlinear cam and clear apertures. No such inferred cam points are stored; the data file preserves the two directly published states.

## Design Heritage and Context

The US counterpart describes separate cam paths for zoom and macro operation. During zooming, Groups II and III follow different trajectories; in macro operation, the two mounts move equally and retain constant separation. This dual use of the variator and compensator is the defining mechanism of the patent.

The production owner’s manual specifies a 70–210mm f/3.5 lens with 15 elements in 10 groups, 1:2.2 macro capability, and a 67 mm accessory size. Together with the patent prescription and kinematics, those specifications establish the high-confidence match to the first Series 1 version.

## Sources

- JP S51-63635 (特開昭51-63635), *Zoom Lens*, published 2 June 1976. Table 1 appears on pages 3–4; the stop note, optical diagram, and endpoint aberration plots appear on page 4.
- US 3,817,600, *Zoom Lens Having Close-Up Focusing Mode of Operation*, Rinzō Watanabe and Ellis I. Betensky, granted 18 June 1974. Used for the English group descriptions, published group focal lengths, nonlinear motion curves, and mechanical cam explanation.
- Vivitar, *Vivitar Series 1 70mm–210mm f3.5 Macro Focusing Auto Zoom Lens — Owner’s Manual*, dated March 1975.
- SUMITA Optical Glass, official all-glass Zemax catalog, including discontinued standard types SF1, SK5, BK1, SF11, BAF11, K5, F1, FK5, SF6, BAF9, LAFN2, and LF2.
- HIKARI Glass Co., Ltd., official optical-glass catalog, used as an independent cross-check for current J-series equivalents where available.
