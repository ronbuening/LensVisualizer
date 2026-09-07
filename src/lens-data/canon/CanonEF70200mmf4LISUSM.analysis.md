## Patent Reference and Design Identification

**Patent:** JP2008070450A\
**Application Number:** JP2006246771A\
**Filed:** 2006-09-12\
**Published:** 2008-03-27\
**Inventor:** Yoshiyuki Taki (source front page: 滝 慶行)\
**Applicant:** Canon Inc.\
**Title:** Zoom Lens\
**Embodiment analyzed:** Example 1 / Numerical Example 1

The modeled prescription is the unscaled Example 1 of JP2008070450A. The patent describes a four-group zoom in which the fourth group is a fixed relay divided into positive Gf, negative Gm, and positive Gr subgroups; Gm is displaced transversely for image stabilization. The numerical example publishes a d-line design of approximately 72.11–194.29 mm at Fno. 4.1, while its variable-spacing table labels the tele control point 194.28 mm. The data file preserves that discrepancy rather than silently reconciling it and uses the spacing-table control points 72.11, 134.92, and 194.28 mm. [JP2008070450A, ¶¶0015–0020, ¶0030; Numerical Example 1](https://patents.google.com/patent/JP2008070450A/en)

The production correlation is strong but remains an identification inference rather than a Canon statement that this patent example is the shipping prescription. The evidence converges in several independent respects:

1. Canon specifies the EF 70-200mm f/4L IS USM as a 20-element, 15-group Canon EF lens marketed in November 2006; Example 1 also resolves to 20 physical elements in 15 air-separated groups. [Canon Camera Museum](https://global.canon/en/c-museum/product/ef391.html)
2. The patent's design range is 72.11–194.28 mm at Fno. 4.1, close to the marketed 70–200 mm f/4 designation without applying any scale factor. The Example 1 aberration plot uses an image height of 21.6 mm, consistent with 135/full-frame coverage; Canon specifies a 34°–12° diagonal field on full-frame cameras. [JP2008070450A, Fig. 2](https://patents.google.com/patent/JP2008070450A/en) [Canon U.S.A. support](https://www.usa.canon.com/support/p/ef-70-200mm-f-4l-is-usm)
3. Canon's documentation for the 2018 successor states that the predecessor optical design contained one fluorite element and two UD elements. The modeled Example 1 contains one fluorite-like material coordinate and two elements whose d-line coordinates closely match S-FPL51-class low-dispersion glass. This is a correlation between production material count and the patent prescription, not a patent declaration of glass trade names. [Canon Camera Museum, EF70-200mm f/4L IS II USM](https://global.canon/en/c-museum/product/ef467.html)
4. Example 1 contains a net-negative Gm subgroup in the fixed relay and explicitly assigns it the image-stabilization function. Canon identifies the production lens as an IS model. [JP2008070450A, ¶¶0017–0020](https://patents.google.com/patent/JP2008070450A/en)
5. The application was filed on 2006-09-12, shortly before Canon's November 2006 market date for the lens. Timing alone does not prove identity, but it is consistent with the other optical correspondences. [JP2008070450A](https://patents.google.com/patent/JP2008070450A/en) [Canon Camera Museum](https://global.canon/en/c-museum/product/ef391.html)

The structured data therefore keeps the production and design quantities separate: marketed 70–200 mm f/4 versus computed design endpoints 72.107560–194.283716 mm and patent Fno. 4.1. The prescription is not scaled to the marketed focal-length labels.

## Optical Architecture

Example 1 is a four-principal-group zoom with power sequence positive L1, negative L2, positive L3, and positive L4. The modeled prescription contains 20 elements in 15 air-separated groups with five cemented doublets. The aperture stop lies between L3 and L4 at source surface 19, represented by the single `STO` plane in the data file. The design is entirely spherical.

The front zoom section consists of L1 through L3. L1 is the large positive front group. L2 is a compact, strongly negative group that serves both as the principal zooming group and, in the patent description, as the focus group. L3 is a positive cemented doublet that compensates image-plane movement during zooming. The patent states that L2 moves toward the image while L3 follows an image-side-convex trajectory. The authored zoom states reproduce that behavior: the front of L2 is +25.059 mm from its wide position at the middle state and +34.110 mm at tele, while the front of L3 moves +8.813 mm at the middle state and returns to +1.959 mm at tele. [JP2008070450A, ¶0018, ¶0021](https://patents.google.com/patent/JP2008070450A/en)

The three published variable gaps satisfy `d8 + d15 + d18 = 46.559 mm` at every control point. Consequently the stop and L4 remain at the same axial station through the modeled zoom. This fixed relay is the defining structural feature of the design. Its front subgroup Gf is positive, its stabilization subgroup Gm is negative, and its rear subgroup Gr is positive. Independent isolated-group calculations from the final data give focal lengths of +72.202030 mm for Gf, −44.199798 mm for Gm, +65.825556 mm for Gr, and +104.637319 mm for L4 as a whole. These are isolated subgroup powers; they should not be interpreted as the in-situ effective power of the complete lens.

The patent explains the relay allocation directly. Gf converges the beam and reduces the diameter required for the stabilization group. Gm is given suitable negative power to obtain useful stabilization sensitivity when moved transversely. Gr then supplies positive power and shares correction of aberrations introduced by the stabilization subgroup. [JP2008070450A, ¶0020](https://patents.google.com/patent/JP2008070450A/en)

Although the patent text uses the general term “telephoto zoom lens,” the project applies a stricter quantitative architectural label: `TL/EFL < 1` is required for “telephoto.” With the authored 213.464 mm reference track, the ratios are 2.96036, 1.58220, and 1.09872 at wide, middle, and tele respectively. The modeled prescription therefore is not labeled telephoto under that project definition. Its Gaussian back focal distance is also smaller than EFL at all three states, so it is not labeled retrofocus.

## Element-by-Element Analysis

The focal lengths in this section are standalone air-to-air element focal lengths computed from the final prescription. For cemented components, the net cemented focal length is stated separately where relevant. Neither quantity is the same as an element's contribution while embedded in the complete zoom.

### Element 1 — L1-1, Positive Meniscus

`nd = 1.48749`, `νd = 70.23`. Glass: S-FSL5 (OHARA catalog equivalence). `f = +404.507 mm`.

Element 1 is the weak positive front collector of L1. Its modest standalone power spreads the initial refraction over a large aperture rather than concentrating it at the first surface. In the assembled front group it works with the following negative and low-dispersion positives to produce L1's computed isolated focal length of +100.766721 mm.

### Element 2 — L1-2, Negative Meniscus

`nd = 1.698947`, `νd = 30.13`. Glass: S-TIM35 (OHARA catalog equivalence). `f = −200.877 mm`.

The second element introduces negative power within the net-positive front group. Its substantially lower Abbe number than the adjacent positive low-dispersion elements provides a conventional d-line/Abbe basis for chromatic balancing. The data do not assign a stronger wavelength-dependent claim to this element because the patent supplies no line-index or partial-dispersion values for it.

### Element 3 — L1-3, Positive Meniscus

`nd = 1.43387`, `νd = 95.1`. Glass: Fluorite (CaF2), inferred. `f = +168.148 mm`.

The third element is a strong low-dispersion positive member of L1. The `nd`/`νd` coordinate is fluorite-like, and Canon independently states that the production optical design contains one fluorite element. The data therefore label this element as inferred fluorite rather than as a patent-stated material. Its placement in the large front group is consistent with the production lens's documented use of fluorite for chromatic correction, but the patent Example 1 itself names no glass vendor or chemical composition.

### Element 4 — L1-4, Biconvex Positive

`nd = 1.496999`, `νd = 81.54`. Glass: S-FPL51 (OHARA catalog equivalence). `f = +142.137 mm`.

Element 4 closes L1 with substantial positive power and high Abbe number. Its d-line coordinate is an essentially exact S-FPL51 catalog match in the catalog screening. Together with Element 3 it concentrates low-dispersion positive power in the front group, while Element 2 supplies higher-dispersion negative balance. The S-FPL51 label is a catalog equivalence, not a Canon or patent identification of the actual production melt.

### Element 5 — L2-1, Biconcave Negative

`nd = 1.804`, `νd = 46.57`. Glass: S-LAH65 (OHARA legacy catalog equivalence). `f = −41.267 mm`.

Element 5 is the strongest leading negative member of L2. L2 as a complete isolated group has `f = −32.149095 mm`, so its dominant function is clearly negative even though the middle cemented pair is slightly positive. The patent assigns L2 the primary zoom motion and also identifies it as the focus group. [JP2008070450A, ¶0018, ¶0021](https://patents.google.com/patent/JP2008070450A/en)

### Elements 6–7 — D1, Cemented Pair in L2

**Element 6 — Biconcave Negative:** `nd = 1.51633`, `νd = 64.14`. Glass: S-BSL7 (OHARA catalog equivalence). `f = −48.838 mm`.\
**Element 7 — Biconvex Positive:** `nd = 1.84666`, `νd = 23.93`. Glass: 847239 — high-index flint class (vendor unresolved). `f = +42.719 mm`.

These components share the surface-12 cemented interface. Their standalone powers are opposite in sign, but the cemented pair is only weakly positive as a unit: `f_D1 = +309.613641 mm`. The pairing places a relatively low-index/high-Abbe negative component against a very high-index/low-Abbe positive component. That combination can balance power and chromatic contribution within the moving negative group without requiring the cemented pair itself to carry L2's net negative power.

The E7 material is deliberately retained as the six-digit 847239 high-index-flint class because the patent coordinates do not justify a unique current vendor assignment.

### Element 8 — L2-4, Negative Meniscus

`nd = 1.800999`, `νd = 34.97`. Glass: S-LAM66 (OHARA catalog equivalence). `f = −110.764 mm`.

Element 8 is the rear negative member of L2. It restores negative power after the weakly positive D1 pair and closes the compact moving group before the large zoom-dependent gap to L3. In the patent's focusing rationale, L2 is favored because the axial beam height through it is smaller than in a front-focus arrangement, permitting a smaller and lighter focusing unit. [JP2008070450A, ¶0021](https://patents.google.com/patent/JP2008070450A/en)

### Elements 9–10 — D2 / L3, Positive Cemented Doublet

**Element 9 — Biconvex Positive:** `nd = 1.603112`, `νd = 60.64`. Glass: S-BSM14 (OHARA catalog equivalence). `f = +42.291 mm`.\
**Element 10 — Negative Meniscus:** `nd = 1.749497`, `νd = 35.3`. Glass: S-LAM7 (OHARA catalog equivalence). `f = −71.293 mm`.

D2 constitutes the entire L3 group. Although its second component is negative, the cemented combination remains positive with `f_D2 = +104.218456 mm`, identical to the isolated L3 group focal length. During zooming L3 changes axial position non-monotonically: it moves imageward to the middle control point and then returns toward its wide-end position by tele. The patent assigns this trajectory to compensation of image-plane movement caused by the zooming action of L2. [JP2008070450A, ¶0018](https://patents.google.com/patent/JP2008070450A/en)

### Element 11 — Gf-1, Positive Meniscus

`nd = 1.834807`, `νd = 42.72`. Glass: S-LAH55V (OHARA catalog equivalence). `f = +61.607 mm`.

Element 11 supplies most of Gf's positive power before the weakly negative D3 pair. The patent describes Gf as the relatively strong positive front portion of the relay and assigns it the task of converging the beam so that the following stabilization group can remain smaller in diameter. [JP2008070450A, ¶0020](https://patents.google.com/patent/JP2008070450A/en)

OHARA S-LAH55V (code 835427) reproduces the patent `nd` at six-decimal precision and differs by only +0.01 in `νd` (catalog 42.73 versus patent 42.72). The label is therefore used as a catalog equivalence, not as a claim that Canon specified an OHARA melt.

### Elements 12–13 — D3, Cemented Pair in Gf

**Element 12 — Negative Meniscus:** `nd = 1.749497`, `νd = 35.3`. Glass: S-LAM7 (OHARA catalog equivalence). `f = −40.154 mm`.\
**Element 13 — Positive Meniscus:** `nd = 1.496999`, `νd = 81.54`. Glass: S-FPL51 (OHARA catalog equivalence). `f = +44.703 mm`.

The D3 pair is a useful example of why standalone and cemented power must be separated. Its two components are individually strong, but their cemented net focal length is `−305.734776 mm`, a weak negative contribution. Combined with Element 11, Gf remains strongly positive at `+72.202030 mm`.

Element 13 is the second S-FPL51-coordinate member in the prescription. Together with Element 4, its count corresponds to Canon's statement that the production optical design contains two UD elements. That production correspondence supports the patent match but does not establish that Canon used OHARA S-FPL51 specifically.

### Elements 14–15 — D4, Cemented Pair in Gm

**Element 14 — Biconvex Positive:** `nd = 1.834`, `νd = 37.16`. Glass: S-LAH60 (OHARA catalog equivalence). `f = +30.400 mm`.\
**Element 15 — Biconcave Negative:** `nd = 1.696797`, `νd = 55.53`. Glass: S-LAL14 (OHARA catalog equivalence). `f = −32.048 mm`.

D4 is a nearly self-canceling positive/negative pair with a weak positive net focal length of `+381.996627 mm`. Its role is not to define Gm's sign by itself; the following Element 16 makes the three-element subgroup net negative. The cemented architecture also reduces the number of air interfaces inside the transversely moving stabilization unit.

### Element 16 — Gm-3, Biconcave Negative

`nd = 1.712995`, `νd = 53.87`. Glass: S-LAL8 (OHARA catalog equivalence). `f = −38.136 mm`.

Element 16 supplies the dominant negative contribution after D4, bringing Gm to `f = −44.199798 mm` as an isolated subgroup. The patent identifies Gm as the stabilization group and specifies transverse displacement relative to the optical axis in the illustrated embodiment. Its negative power is therefore both a first-order property and part of the stabilization architecture, rather than merely a local element-shape description. [JP2008070450A, ¶0017](https://patents.google.com/patent/JP2008070450A/en)

### Element 17 — Gr-1, Biconvex Positive

`nd = 1.48749`, `νd = 70.23`. Glass: S-FSL5 (OHARA catalog equivalence). `f = +132.361 mm`.

Element 17 begins the positive rear relay subgroup Gr. Its moderate positive power precedes another weakly positive cemented pair and the final positive meniscus. The patent attributes to Gr both positive relay power and correction of aberrations associated with Gm's stabilization action. [JP2008070450A, ¶0020](https://patents.google.com/patent/JP2008070450A/en)

### Elements 18–19 — D5, Cemented Pair in Gr

**Element 18 — Biconvex Positive:** `nd = 1.48749`, `νd = 70.23`. Glass: S-FSL5 (OHARA catalog equivalence). `f = +40.029 mm`.\
**Element 19 — Negative Meniscus:** `nd = 1.806098`, `νd = 40.92`. Glass: S-LAH53 (OHARA catalog equivalence). `f = −44.310 mm`.

D5 again combines strong opposite-sign standalone components into a weak net positive doublet, `f_D5 = +394.531578 mm`. Its higher-Abbe positive member and lower-Abbe negative partner provide another conventional dispersion-balancing pair in the relay. Because the patent provides only d-line index and Abbe number, the analysis does not assign apochromatic or anomalous-partial-dispersion behavior to this pair.

### Element 20 — Gr-4, Positive Meniscus

`nd = 1.834`, `νd = 37.16`. Glass: S-LAH60 (OHARA catalog equivalence). `f = +164.969 mm`.

The final positive meniscus completes Gr and the fixed L4 relay. Gr as a whole has `f = +65.825556 mm`, while the entire Gf–Gm–Gr relay has `f = +104.637319 mm` in isolation. The element is followed by the modeled rear image-space distance rather than by additional cover glass or filter planes.

## Glass Identification and Selection

The patent publishes `nd` and `νd` at the d line but does not name glass manufacturers or trade types. The glass strings in the data file are therefore catalog-derived equivalences established by multi-vendor catalog screening. Named OHARA glasses are coordinate matches; E7 and E11 remain vendor-unresolved classes; E3 is an inferred fluorite identification supported by the production correlation. None of these labels should be read as a patent statement that Canon purchased a particular vendor melt.

| Data glass label | nd | νd | Elements | Status / role |
|---|---:|---:|---|---|
| S-FSL5 (OHARA) | 1.48749 | 70.23 | E1, E17, E18 | High-Abbe crown-class material in front and rear positive members |
| S-TIM35 (OHARA) | 1.698947 | 30.13 | E2 | Lower-Abbe negative member of L1 |
| Fluorite (CaF2), inferred | 1.43387 | 95.1 | E3 | Very-low-dispersion positive member; production-correlation inference |
| S-FPL51 (OHARA) | 1.496999 | 81.54 | E4, E13 | Low-dispersion positive members; count aligns with two production UD elements |
| S-LAH65 (OHARA legacy) | 1.804 | 46.57 | E5 | High-index negative member of L2 |
| S-BSL7 (OHARA) | 1.51633 | 64.14 | E6 | Negative component of D1 |
| 847239 — high-index flint class (vendor unresolved) | 1.84666 | 23.93 | E7 | Vendor unresolved; positive component of D1 |
| S-LAM66 (OHARA) | 1.800999 | 34.97 | E8 | Rear negative member of L2 |
| S-BSM14 (OHARA) | 1.603112 | 60.64 | E9 | Positive component of L3/D2 |
| S-LAM7 (OHARA) | 1.749497 | 35.3 | E10, E12 | Negative components in L3 and Gf |
| S-LAH55V (OHARA) | 1.834807 | 42.72 | E11 | Catalog equivalence; OHARA code 835427, catalog `νd = 42.73` |
| S-LAH60 (OHARA) | 1.834 | 37.16 | E14, E20 | Positive members in Gm and Gr |
| S-LAL14 (OHARA) | 1.696797 | 55.53 | E15 | Negative component of D4 |
| S-LAL8 (OHARA) | 1.712995 | 53.87 | E16 | Strong negative member of Gm |
| S-LAH53 (OHARA) | 1.806098 | 40.92 | E19 | Negative component of D5 |

The chromatic strategy visible from the d-line prescription is distributed rather than confined to one group. Very-high-Abbe positive elements occur in L1 and Gf, and several cemented pairs combine positive and negative components with materially different Abbe numbers. Canon's production documentation independently identifies one fluorite and two UD elements in the predecessor optical design. This supports the production correlation and the interpretation of E3, E4, and E13 as the principal low-dispersion members.

No `nC`, `nF`, `ng`, `PgF`, or `dPgF` values are authored because Example 1 does not publish them. All 20 elements resolve to coordinate-compatible catalog Sellmeier curves, including the supplier-unresolved six-digit class; this is spectral coverage rather than a production supplier identification. The analysis makes no APO or anomalous-partial-dispersion claim from Abbe number alone.

## Focus Mechanism

The patent identifies L2, surfaces 9–15 in the modeled sequence, as the focus lens group. Its stated design rationale is mechanical as well as optical: compared with front-group focusing, the lower axial ray height at L2 permits a smaller moving group, which the patent presents as advantageous for rapid autofocus. [JP2008070450A, ¶0021](https://patents.google.com/patent/JP2008070450A/en)

Example 1 does not publish finite-focus gap values, focus travel, a magnification table, or a close-focus numerical state. Canon specifies 1.2 m as the production minimum focusing distance and 0.21× as the maximum magnification, but those are product specifications and do not determine the internal patent movement uniquely. [Canon Camera Museum](https://global.canon/en/c-museum/product/ef391.html)

Accordingly, the data carries the focus status `NO_INTERNAL_RECONSTRUCTION`. The three zoom-dependent gaps repeat their infinity values at the close-focus endpoint so the viewer does not imply an invented internal motion. The 1.2 m value is retained only as production metadata. No numerical focus travel or traced close-focus optical state is asserted in this analysis.

## Chromatic Correction Strategy

The front group contains the prescription's highest-Abbe materials: E3 at `νd = 95.1` and E4 at `νd = 81.54`, while the relay adds E13 at the same `νd = 81.54` coordinate. These low-dispersion positive elements are interleaved with lower-Abbe negative power rather than grouped in a single corrective cell. The arrangement is consistent with conventional longitudinal and lateral color balancing over a zoom range, and Canon's production literature confirms the use of one fluorite and two UD elements in the corresponding 20/15 predecessor optical design. [Canon Camera Museum, successor description](https://global.canon/en/c-museum/product/ef467.html)

The cemented groups also show deliberate index/Abbe contrast. D1 pairs E6 (`νd = 64.14`) with E7 (`νd = 23.93`); D2 pairs E9 (`νd = 60.64`) with E10 (`νd = 35.3`); D3 pairs E12 (`νd = 35.3`) with E13 (`νd = 81.54`); and D5 pairs E18 (`νd = 70.23`) with E19 (`νd = 40.92`). These differences support achromatic balancing, but the available patent data do not support a stronger claim about secondary-spectrum suppression in the modeled prescription itself.

The patent's aberration plots reference d, F, C, and g lines, confirming that chromatic behavior was evaluated in the source design, but the numerical material table retains only d-line index and Abbe number. [JP2008070450A, ¶0016](https://patents.google.com/patent/JP2008070450A/en)

## Conditional Expressions

The patent places two explicit constraints on the fixed relay. Their values were recomputed from the final data rather than copied from the patent's result table.

For the most image-side lens of Gf, using `r1 = 19.400 mm` and `r2 = 136.753 mm`, the first condition is

$$
1.00 < \frac{|r_1+r_2|}{|r_1-r_2|} < 1.50.
$$

The modeled value is `1.3306264007`; the patent table rounds this to `1.331`. The patent states that this shape constraint permits favorable aberration correction while limiting the number of lenses in L3 and Gf; crossing the upper bound tends to lengthen the system, while crossing the lower bound leaves spherical aberration under-corrected. [JP2008070450A, ¶¶0023–0026](https://patents.google.com/patent/JP2008070450A/en)

The second condition is

$$
0.90 < \left|\frac{f_{Gr}}{f_w}\right| < 2.00.
$$

Using the independently computed isolated `f_Gr = +65.825556 mm` and wide-state `f_w = 72.107560 mm` gives `0.9128800961`, compared with the patent table's rounded `0.91`. The patent links this range to the trade between relay length, rear-relay aberration burden, and stabilization performance. [JP2008070450A, ¶¶0027–0029](https://patents.google.com/patent/JP2008070450A/en)

Both computed values lie inside the published bounds.

## Image Stabilization

The stabilization architecture is contained inside the fixed L4 relay. Gm, comprising E14–E16, has an isolated focal length of `−44.199798 mm`. The patent specifies that this subgroup is displaced with a component perpendicular to the optical axis so that the image formed by the complete system shifts in the corresponding transverse direction. In the illustrated embodiment the subgroup is translated rather than rotated. [JP2008070450A, ¶0017](https://patents.google.com/patent/JP2008070450A/en)

The relay is arranged so that Gf reduces the beam diameter incident on Gm, allowing a smaller stabilization group. The patent then assigns Gr positive power and an aberration-correction role after Gm. This division keeps the stabilization motion internal to a relay whose axial position does not change during zooming. [JP2008070450A, ¶0020](https://patents.google.com/patent/JP2008070450A/en)

No transverse displacement magnitude is authored in the data because Example 1 does not provide a production IS travel calibration suitable for the LensVisualizer prescription. The patent's lateral-aberration figures compare centered and stabilization states, but the data file models only the centered sequential prescription.

## Verification Summary

The final data were independently recomputed from the TypeScript arrays. The three Gaussian EFL values are 72.107560, 134.916047, and 194.283716 mm, agreeing with the patent variable-table headers to within 0.004 mm. The patent's Example 1 header prints 194.29 mm at the tele endpoint whereas the spacing table prints 194.28 mm; the latter is retained as the zoom control point, and both source values remain documented.

The patent does not publish a stop diameter. The authored `STO` semi-diameter of 14.1567907067 mm is therefore a paraxial modeling inference calibrated to the patent's Fno. 4.1 at the wide state. With the same physical stop, the recomputed modeled f-numbers are 4.100000, 4.100047, and 4.100193 across the three control points. This is consistent with the source's one-decimal Fno. 4.1 statement without treating the inferred diameter as patent data.

The patent also omits the final surface-to-image spacing. The data use a fixed 54.495 mm rear air distance, derived from the mean of the three independently computed Gaussian BFDs from the rounded source rows. The individual computed BFDs are 54.492664, 54.493981, and 54.498014 mm. Holding the authored rear distance fixed preserves the patent's fixed-relay/image-plane architecture rather than encoding a few micrometres of artificial zoom motion from source rounding.

Surface semi-diameters are likewise modeling values rather than source dimensions. They were constructed from the modeled F/4.1 marginal rays, the patent's `Y = 21.6 mm` field, the source optical section, and production mechanical bounds. A 600 dpi audit of Figure 1(a) on local PDF page 10 enlarged Gm to an 11.1 mm common rim, Gr-1 to 13.4 mm, the Gr-2/Gr-3 cemented pair to 15.0 mm, and Gr-4 to 18.0 mm. Gm remains smaller than the roughly 12.5–13.0 mm drawn envelope because that radius would overlap the surfaces across D27; 11.1 mm passes the default cross-gap policy. Surface and image-circle audits pass for the revised geometry. One outer-pupil sample at the tele state clips at the first surface; it is retained as ordinary off-axis vignetting rather than concealed by enlarging the prescription.

The surface-by-surface Petzval sum, computed as `φ/(n·n′)`, is `+0.001187166661 mm⁻¹`, corresponding to an algebraic reciprocal of approximately `+842.342 mm`. This is a computed paraxial property of the modeled prescription, not a patent table value.

No scaling is applied, no aspheric coefficients exist, and no sensor cover glass, filter, inactive dummy plane, or synthetic cement layer is included. The model contains exactly one stop. The lack of a finite-focus numerical state is preserved rather than filled with an underdetermined reconstruction.

## Sources and References

- [JP2008070450A — “Zoom Lens”](https://patents.google.com/patent/JP2008070450A/en), Canon Inc., filed 2006-09-12, published 2008-03-27. The numerical prescription and worked example are taken from this publication.
- [Canon Camera Museum — EF70-200mm f/4L IS USM](https://global.canon/en/c-museum/product/ef391.html): market date, 20-element/15-group construction, 1.2 m minimum focus, 0.21× maximum magnification, eight diaphragm blades, 67 mm filter, and IS product identity.
- [Canon U.S.A. — EF 70-200mm f/4L IS USM support](https://www.usa.canon.com/support/p/ef-70-200mm-f-4l-is-usm): 70–200 mm f/4 marketed specification, 20/15 construction, full-frame angle of view, focus specification, and dimensions.
- [Canon Camera Museum — EF70-200mm f/4L IS II USM](https://global.canon/en/c-museum/product/ef467.html): explicit statement that the predecessor optical design used 20 elements in 15 groups including one fluorite and two UD elements.
- [OHARA optical glass catalog](https://oharacorp.com/glass-catalog/), [HOYA optical glass downloads](https://www.hoya-opticalworld.com/english/datadownload/index.html), [SCHOTT optical glass downloads](https://www.schott.com/en-us/products/optical-glass-p1000267/downloads), [HIKARI optical glass catalog](https://www.nikon.com/business/components/lineup/materials/optical-glass/assets/pdf/hikari_catalog2023.pdf), [CDGM optical glass database](https://www.cdgmgd.com/database/toWebDatabase.htm?pageIndex=28&url=database), and [Sumita optical glass downloads](https://www.sumita-opt.co.jp/en/download/): catalog sources used to establish the glass-equivalence labels and unresolved classes.
