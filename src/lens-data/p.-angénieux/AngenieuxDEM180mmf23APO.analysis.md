## Patent Reference and Design Identification

**Patent:** US 4,726,669
**Application Number:** US 06/803,976
**Filed:** 3 December 1985
**Granted:** 23 February 1988
**Inventor:** Pierre Angénieux
**Assignee:** None named in the US grant
**Title:** *High Relative Aperture Objective Lens System with Compound Focusing*
**Embodiment analyzed:** Example 1

The prescription represents the P. Angénieux DEM 180mm f/2.3 APO assignment fixed by the job card. The patent does not name the commercial lens, so the production identification rests on convergent evidence rather than an explicit manufacturer patent attribution.

1. Angénieux's historical timeline lists a 180mm f/2.3 fixed lens in 1986, immediately after the patent's December 1985 filing.
2. Example 1 is normalized to $F=100$ at f/2.3. Uniform scaling by exactly $s=1.8$ gives a computed design focal length of 179.927 mm while preserving the published f-number.
3. The patent's ±6.8° field gives a scaled paraxial image-circle diameter of 42.910 mm, consistent with the 135/full-frame format assigned in the data file. Angénieux separately describes the 180mm f/2.3 among its full-frame still-photography primes.
4. The eight-element, six-group prescription uses the patent's distinctive compound-focusing scheme: Components II and IV translate forward by substantially different amounts.
5. The patent timing, aperture, field, focal-length scaling, and unusual focus mechanism form a coherent match to the selected production identity.

The commercial `DEM` and `APO` labels come from the selected lens identity, not from the patent text. The data file keeps the marketed 180 mm value separate from the computed 179.927 mm design value. All dimensional prescription values are the patent's Example 1 values multiplied by 1.8. There are no aspherical coefficients, so no coefficient scaling is applicable; refractive indices, Abbe numbers, and any dispersion ratios remain unscaled.

Example 1 prints `V1 = 6.12` for the first element. The data file corrects this to $\nu_d=61.2$: Example 2 prints 61.2 for the same $n_d=1.589$ coordinate, and the catalog-coordinate matches cluster near that value. The raw patent entry remains a documented source error rather than a silent emendation.

## Optical Architecture

The design contains eight elements in six air-separated groups. Its four functional components have the power sequence positive–positive–negative–positive:

- **Component I:** L1, a positive front collector.
- **Component II:** the air-spaced L2/L3 pair, net positive and mobile during focusing.
- **Component III:** L4 followed by the diaphragm-containing air space and the cemented L5/L6 correction doublet, net negative and nominally fixed; the literal rounded close-focus table leaves a 0.018 mm coordinate residual.
- **Component IV:** the cemented L7/L8 rear doublet, net positive and mobile during focusing.

The architecture separates image formation, aberration balancing, and focus compensation. L1 supplies substantial front positive power. Component II is a weak positive moving component whose low-dispersion positive member is paired with a high-index negative member. Component III concentrates most of its negative power in L4, while the L5/L6 doublet is nearly afocal and therefore acts primarily as an aberration-correction unit. Component IV is a positive rear doublet whose larger focus travel carries most of the magnification change.

The patent calls the system a telephoto objective. Under the project's stricter geometric definition, however, the modeled first-surface-to-image track is 191.160 mm and the EFL is 179.927 mm, giving $TL/EFL=1.06243$. The modeled prescription is therefore not classified as telephoto by that rule. Its back focal distance is also shorter than the EFL, so it is not retrofocus.

All fourteen refracting surfaces are spherical or plano. The prescription contains no cover glass, filter, inactive dummy plane, flare-cutter plane, folded path, or mechanical component. Exactly one aperture stop is modeled inside the D8 air space, as required by Figure 1 and claim 7. The patent does not publish the stop's exact axial split or diameter; the data file places it at the midpoint of D8 and derives its semi-diameter from the published f/2.3.

## Element-by-Element Analysis

The focal lengths in this section are **standalone-in-air** values computed from each element's two physical radii, center thickness, and stored refractive index. They are not the same as the elements' behavior while cemented to a neighbor or embedded in the complete lens.

### L1 — Biconvex Positive

$n_d=1.589$, $\nu_d=61.2$. Glass: SK5 (Sumita catalog equivalent to patent 589612; production supplier unspecified). Standalone $f=+139.806$ mm.

L1 forms Component I and provides the principal front collecting action. Its strongly convex front surface and extremely weak rear curvature produce substantial positive power without placing a strongly curved air interface immediately behind the element. The moderate index and crown-like dispersion make it a conventional positive front member rather than the lens's special chromatic-correction glass.

The authored $\nu_d=61.2$ is the corrected interpretation of the patent's erroneous `6.12` entry. Sumita SK5 supplies a compatible coefficient curve at $1.58913/61.2$; it is an optical equivalent, not a vendor-specific production identity.

### L2 — Positive Meniscus

$n_d=1.497$, $\nu_d=81.6$. Glass: S-FPL51 (OHARA catalog equivalent to patent 497816; production supplier unspecified). Standalone $f=+125.693$ mm.

L2 is the positive member of moving Component II. Its low index and very high Abbe number identify it as the prescription's special low-dispersion glass. The data file stores line indices evaluated from the current OHARA S-FPL51 Sellmeier constants, $n_C=1.495136$, $n_F=1.501231$, and $n_g=1.504507$, together with $\Delta P_{gF}=+0.030941$ computed with the patent's normal-line formula and the authored $\nu_d=81.6$. The current catalog value is $\nu_d=81.54$, a residual of $+0.06$ from the patent row. These values satisfy the patent's anomalous-partial-dispersion condition, but they establish a catalog class rather than the production melt used by Angénieux.

The element's high front curvature supplies most of Component II's positive contribution. During close focusing, L2 moves with L3 as a rigid air-spaced pair; the pair's small total power and special dispersion allow it to alter aberration balance without becoming the principal magnification group.

### L3 — Plano-Concave Negative

$n_d=1.785$, $\nu_d=25.9$. Glass: K-SFLD11 (Sumita catalog equivalent to patent 785259; production supplier unspecified). Standalone $f=-166.985$ mm.

L3 is the negative partner in Component II. It follows L2 across a 0.108 mm air gap in the scaled model. The high refractive index and low Abbe number oppose L2's positive power and dispersion, leaving the complete L2/L3 component weakly positive rather than strongly converging.

Component II has a computed net focal length of $+395.443$ mm in its infinity configuration. That net value is not the arithmetic sum of the two standalone powers; it includes the actual element thicknesses, the small intervening air gap, and the in-situ refractive transitions.

### L4 — Negative Meniscus

$n_d=1.772$, $\nu_d=49.7$. Glass: S-LAH66 (OHARA catalog equivalent to patent 772497; production supplier unspecified). Standalone $f=-53.266$ mm.

L4 forms the front part of fixed Component III and supplies most of that component's negative power. Its weak front surface and strongly curved rear surface concentrate the negative refraction at the boundary leading into the diaphragm-containing air space. The radius of this rear surface is also the quantity used by the patent's fifth conditional expression.

The complete Component III has a computed focal length of $-57.117$ mm. Its proximity to L4's standalone value confirms that the component's first-order negative power is dominated by L4 rather than by the rear cemented doublet.

### L5 — Positive Meniscus, Front Member of L5/L6

$n_d=1.806$, $\nu_d=40.9$. Glass: S-LAH53 (OHARA catalog equivalent to patent 806409; production supplier unspecified). Standalone $f=+48.284$ mm.

L5 begins the cemented L5/L6 doublet in the rear part of Component III. Both physical radii are negative in the adopted sign convention, but the rear surface is more strongly curved; the resulting meniscus has positive standalone power. The high index permits substantial surface action within a compact axial thickness.

Its standalone focal length describes a hypothetical air-bounded element. In the actual lens, the rear surface is cemented directly to L6, so the interface changes from $n_d=1.806$ to $n_d=1.772$ rather than from glass to air. Schott P-LASF47 shares the same nominal `806409` coordinate but has materially negative partial dispersion; because the patent publishes no L5 line indices or partial-dispersion condition, the model conservatively uses the normal-dispersion S-LAH53 curve and does not classify L5 as APD.

### L6 — Negative Meniscus, Rear Member of L5/L6

$n_d=1.772$, $\nu_d=49.7$. Glass: S-LAH66 (OHARA catalog equivalent to patent 772497; production supplier unspecified). Standalone $f=-51.898$ mm.

L6 nearly cancels L5's standalone positive power. The actual cemented L5/L6 doublet has a computed net focal length of approximately $-10{,}247.429$ mm, making it weakly negative and effectively near-afocal compared with the complete lens.

This distinction is central to the component's function. L5 and L6 are individually strong in isolation, but their cemented combination contributes little net first-order power. In situ, the L5/L6 pair therefore serves mainly as an aberration-balancing structure behind L4 while Component III remains strongly negative because of L4.

### L7 — Negative Meniscus, Front Member of L7/L8

$n_d=1.728$, $\nu_d=28.4$. Glass: S-TIH10 (OHARA catalog equivalent to patent 728284; production supplier unspecified). Standalone $f=-156.698$ mm.

L7 is the negative front member of the moving rear doublet. Its relatively low Abbe number gives the cemented pair a dispersive counterweight to L8. The element is weakly negative as an isolated air-bounded lens, but its cemented interface with L8 is part of the actual group power and chromatic balance.

### L8 — Biconvex Positive, Rear Member of L7/L8

$n_d=1.772$, $\nu_d=49.7$. Glass: S-LAH66 (OHARA catalog equivalent to patent 772497; production supplier unspecified). Standalone $f=+61.755$ mm.

L8 supplies the dominant positive power in Component IV. Its positive front radius and weak negative rear radius make it biconvex in the adopted sign convention, with the rear surface only gently curved.

The cemented L7/L8 doublet has a computed net focal length of $+103.573$ mm. Unlike the nearly afocal L5/L6 pair, this pair is decisively positive. It is also the fourth functional component, so the cemented net power and the component power are the same. During close focusing it moves much farther than Component II and carries most of the change in image magnification.

## Glass Identification and Selection

The patent supplies $n_d$ and $\nu_d$ coordinates but names no glass manufacturer. Each element now uses a coordinate-compatible published curve as an optical equivalent while retaining the patent coordinate and leaving the production supplier unspecified. The L2 line data are explicitly representative rather than production provenance.

| Patent coordinate | Catalog-equivalent curve | Patent-minus-catalog $\Delta n_d$ | $\Delta \nu_d$ | Elements |
|---|---|---:|---:|---|
| 589612 crown | Sumita SK5 | −0.00013 | 0.00 | L1 |
| 497816 low-dispersion ED crown | S-FPL51 (497816) | 0.00000 | +0.06 | L2 |
| 785259 dense flint | Sumita K-SFLD11 | +0.00028 | 0.00 | L3 |
| 772497 high-index crown | OHARA S-LAH66 | −0.00050 | +0.10 | L4, L6, L8 |
| 806409 lanthanum dense crown | OHARA S-LAH53 | −0.00010 | −0.03 | L5 |
| 728284 dense flint | S-TIH10 (728285) | −0.00025 | −0.06 | L7 |

The chromatic strategy is concentrated in Component II and reinforced by the rear cemented pair. L2 combines very high $\nu_d$ with positive anomalous partial dispersion, while L3 supplies high-index, low-$\nu_d$ negative power. This allows the moving component to remain net positive while addressing secondary spectrum. The L7/L8 pair uses a lower-$\nu_d$ negative front member and a higher-$\nu_d$ positive rear member to provide a conventional cemented chromatic balance in the strongly positive rear component.

The commercial `APO` label is retained from the selected production identity. The model independently supports only the narrower statement that L2 satisfies the patent's ED/APD condition. It does not establish the production glass vendor or reproduce a complete measured apochromatic performance specification.

## Focus Mechanism

The focus status is **PUBLISHED**. The patent gives the three changing internal air gaps at infinity and at image magnification $\beta=-0.12$; no internal group trajectory is reconstructed beyond those published endpoints.

| Gap | Infinity | Close endpoint | Change |
|---|---:|---:|---:|
| D2, before Component II | 3.006 mm | 0.432 mm | −2.574 mm |
| D6, after Component II | 26.982 mm | 29.538 mm | +2.556 mm |
| D11, before Component IV | 17.982 mm | 0.576 mm | −17.406 mm |
| Rear image-space completion | 80.622 mm | 98.046 mm | +17.424 mm |

D2 contracts by 2.574 mm, placing Component II that distance toward the object. D6 expands by only 2.556 mm because the patent's normalized D2+D6 totals differ by 0.01; the literal scaled table therefore shifts the nominally fixed Component III coordinate forward by 0.018 mm. D11 contracts by 17.406 mm relative to Component III, while Component IV moves 17.424 mm relative to R1 after the table residual is included. The D11 travel is approximately 6.76 times the D2 travel.

The rear image-space value is not a published moving lens gap. It is the computed completion required to hold the image plane at 191.160 mm from the first surface while the patent-published internal groups move. At that fixed image plane, the authored close endpoint traces to magnification $-0.120513$ and an object-to-image distance of 1.788651 m. This is a model-consistent conjugate distance, not a manufacturer-published minimum focusing distance.

The patent states that the fourth component carries most of the magnification variation, while the second component's principal role is maintaining aberration correction, especially coma, at close distances. The relative travels and the computed component powers agree with that division of labor.

The diaphragm is inside D8, as published, but its precise position is not. The model splits D8 at its midpoint, 5.499 mm on either side of `STO`. The physical stop semi-diameter of 18.208695 mm is inferred from paraxial pupil geometry to reproduce the published f/2.3; it is not a patent dimension.

## Chromatic Correction Strategy

Condition 6 requires at least one positive element in Component II to use a special glass whose relative partial dispersion lies more than 0.02 above the normal line. L2 is the only positive element in that component and its 1.497/81.6 coordinates match the 497816 ED-crown class. With the stored representative line indices,

$$
P_{gF}=\frac{n_g-n_F}{n_F-n_C}=0.537490,
$$

and the normal-line value is 0.506549, giving

$$
\Delta P_{gF}=+0.030941.
$$

This exceeds the patent threshold and supplies a quantitative basis for describing L2 as an anomalous-partial-dispersion element. The result belongs to the catalog-class model; it does not prove a particular manufacturer or melt.

The L2/L3 pairing places the special positive ED crown against a high-index dense flint of much lower Abbe number. Because the pair moves during focusing, the chromatic balance also moves as a unit rather than being disturbed by a changing internal separation. The rear L7/L8 cemented pair provides a second conventional negative-flint/positive-crown correction pair within the power-bearing rear group.

## Aberration Correction Strategy

The patent's principal design objective is to preserve correction, particularly coma, while focusing a high-aperture lens from infinity to a finite conjugate. It addresses this by translating Components II and IV simultaneously rather than moving the entire lens or relying on a single internal group.

Component II has low net power and short travel. Its function is therefore primarily corrective: it changes ray bending and pupil relationships around the front positive section while limiting the focus-induced coma shift. Component IV has stronger positive power and far greater travel, so it supplies most of the conjugate change. Component III is fixed by the stated mechanism; the literal rounded endpoint produces only the disclosed 0.018 mm coordinate residual.

Within Component III, L4 provides nearly all of the negative first-order power. The nearly afocal L5/L6 doublet behind it contributes little net power but adds four refracting transitions, including a cemented index step, at a strategically important location around the stop. This allows aberration control without materially changing the component's power distribution.

The patent supplies separate spherical-aberration, sine-condition, astigmatism, and distortion plots for infinity and $\beta=-0.12$ in Figures 3a and 3b. Those plots establish the intended correction targets but do not provide sufficient numerical data for independent high-order aberration reconstruction. The present model therefore limits quantitative claims to the verified paraxial, dispersion, movement, pupil, Petzval, and geometry results.

## Conditional Expressions

The patent states six design conditions. Values below are recomputed from the final scaled TypeScript arrays; uniform scaling leaves the dimensionless ratios unchanged.

| Condition | Computed value | Result |
|---|---:|---|
| $f_3<f_1<f_2$ | $-57.117<139.806<395.443$ mm | Pass |
| $0.22<f_3/F<0.44$ as printed | $-0.317444$ | Fail |
| Magnitude-corrected reading, $0.22<|f_3|/F<0.44$ | $0.317444$ | Pass |
| $0.40<\phi/F<0.80$ | $0.555629$ | Pass |
| $0.25<R_{II}/F<0.50$ | $0.343689$ | Pass |
| $0.15<R_{III}/F<0.30$ | $0.223261$ | Pass |
| $P_{gF}-P_{gF,\mathrm{normal}}>0.02$ | $+0.030941$ | Pass |

Here $f_1$, $f_2$, and $f_3$ are the focal lengths of Components I, II, and III; $\phi$ is the focal length of the combined Components I and II at infinity; $R_{II}$ is the convex front radius of Component II; and $R_{III}$ is the magnitude of the strongly curved rear surface of L4.

The second condition is internally contradictory as printed because the patent defines Component III as negative and the reconstructed $f_3$ is negative. Interpreting the inequality as a magnitude condition makes the numerical example satisfy the stated range. The data and analysis preserve both the literal failure and the sign-corrected interpretation.

## Verification Summary

The final data arrays were independently traced in height/reduced-angle form and cross-checked with a separate height/angle ABCD implementation. The maximum matrix-element difference is $8.88\times10^{-16}$.

| Quantity | Verified result |
|---|---:|
| Design EFL | 179.927035 mm |
| Modeled wide-open f-number | 2.300000 |
| BFL from R14 | 80.475630 mm |
| Authored infinity rear spacing | 80.622000 mm |
| First surface to image plane | 191.160000 mm |
| Close-end magnification | −0.120513 |
| Petzval sum | $+4.24469948\times10^{-4}$ mm$^{-1}$ |
| Signed Petzval image-surface radius, $-1/P$ | −2355.879 mm |

The 0.146 mm difference between the computed BFL and the authored 80.622 mm rear spacing is the scaled residual of the patent's rounded prescription, not an added optical plate.

The patent publishes no semi-diameters. The modeled values are inferred from the f/2.3 marginal ray, the default 0.6-field chief-ray bundles, the full-frame image height, and geometry constraints. Both defined focus states retain positive edge thickness, acceptable actual rim slope, valid shared-gap clearance, and complete containment of the default 0.6-field ray fans. The minimum element edge thickness is 0.451 mm, the maximum rim angle is 54.37°, and the tightest positive shared-gap clearance is 0.0177 mm at the 0.108 mm L2–L3 air gap. Selected full-field peripheral rays vignette at front or rear physical apertures; the semi-diameters are not enlarged beyond valid element geometry merely to eliminate that modeled vignetting.

## Sources and References

1. Pierre Angénieux, *High Relative Aperture Objective Lens System with Compound Focusing*, US 4,726,669, filed 3 December 1985, granted 23 February 1988. Example 1, Figures 1a–1b and 3a–3b, claims 1–7. <https://patents.google.com/patent/US4726669A/en>
2. Angénieux, “History Timeline,” 1986 entry for the 180mm f/2.3 fixed lens. <https://www.angenieux.com/about-us/history/history-timeline/>
3. Angénieux, “Zooms and/or primes? The answer by Kees van Oostrum,” discussion of the 180mm f/2.3 and 200mm f/2.8 full-frame still-photography primes. <https://www.angenieux.com/zooms-and-or-primes-the-answer-by-kees-van-oostrum-asc-president-of-the-american-society-of-cinematographers/>
4. OHARA, S-FPL51 datasheet and current optical-glass tables, including Sellmeier constants and the nearest catalog-coordinate references used in the glass audit. <https://www.ohara-inc.co.jp/en/product/01000/>
5. SCHOTT, *Optical Glass Collection Datasheets*, March 2018, P-LASF47 data page.
6. SUMITA, all-glass Zemax catalog, 7 November 2025, including discontinued SK5 and K-SFLD11 rows.
