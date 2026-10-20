# Carl Zeiss Sonnar Superachromat 250mm f/5.6 (Hasselblad V) — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 3,883,229
**Application Number:** US 332,416
**Filed:** February 14, 1973
**Priority:** Germany 2208163, February 22, 1972
**Granted:** May 13, 1975
**Inventors:** Fritz Determann, Heinz Zajadatz
**Assignee:** Carl-Zeiss-Stiftung, Oberkochen (printed "Carl Zeiss-Stiftung")
**Title:** Telephoto Lens Objective
**Classification:** U.S. Cl. 350/214; Int. Cl. G02b 9/00
**Embodiment analyzed:** Example II (Fig. 2; repeated as the table of claim 7)

The patent discloses five numerical examples of a four-part telephoto objective whose glasses are chosen by their relative partial dispersions in the near ultraviolet and near infrared. Two of them, Examples II and IV, have six elements and a relative aperture of 1:5.6. Example II is the one transcribed here. All values are published normalized to a focal length of 1.0.

The correlation of Example II with the Zeiss Sonnar Superachromat 5.6/250 is a research identification, not a manufacturer attribution. No primary source located for this analysis states that Example II is the production prescription. The evidence for the identification is convergent:

1. **Construction.** Example II has six air-spaced elements in six groups. The Zeiss CFE data sheet lists 6 elements in 6 groups. Examples III and V have seven elements, and Example I has five.
2. **Aperture and field.** The patent prints a relative aperture of 1:5.6 and a half field of 8.5°. The data sheet gives f/5.6 and an 18° diagonal field, a half field of 9°. Example IV, the other six-element f/5.6 example, covers only 5.4°, too narrow for the 6×6 format at this focal length.
3. **Crystal element.** Example II uses "Fluorspar" for L2. The data sheet states that "very special optical glasses and crystals" are used.
4. **Total track.** The modeled track, first vertex to image, is 221.16 mm at the 249.2 mm design focal length; this is the patent's structural length of .8875 at scale. The data sheet gives a vertex length of 103.9 mm and a back focal distance of 117.0 mm, which sum to 220.9 mm.
5. **Assignee and timing.** The assignee is the Zeiss foundation. The 1972 German priority coincides with the 1972 introduction of the C-series lens, as reported by the third-party lens-db.com.

The same data sheet also documents real differences. Example II's vertex length (98.41 mm) is 5.49 mm shorter than the production figure. Its back focal distance (122.76 mm) is 5.76 mm longer. Its principal planes lie 3.51 mm (H) and 5.65 mm (H′) closer to the vertices than the sheet states. The production lens is therefore best regarded as a close relative of Example II rather than this exact prescription.

## Optical Architecture

The patent defines the design as a converging first part (T1), a diverging second part (T2), a converging third part "at a larger distance" (T3), and a final diverging part (T4) (col. 1, ll. 1–6; claim 1). The power sequence is therefore positive–negative–positive–negative. In Example II the parts are:

- T1: L1 and L2.
- T2: L3.
- T3: L4 and L5.
- T4: L6.

Every element is separated by air, and all twelve surfaces are spherical. The iris lies in the last air space, between L5 and L6 (Fig. 2). The patent calls the design a "telephoto lens objective." "Sonnar" is the product designation; it should not be read as a description of the optical form.

The structural length is defined in the patent as the distance from the first vertex to the image plane (col. 1, ll. 10–14). At infinity it is 221.16 mm against an EFL of 249.21 mm. This gives a telephoto ratio of 0.8875, equal to the patent's printed structural length. The front principal plane lies 106.49 mm ahead of the first vertex. The rear principal plane lies 126.45 mm ahead of the last vertex, which places it in front of the lens altogether.

The telephoto action can be stated compactly. L1–L5 together form a positive front assembly of 93.00 mm focal length. That assembly focuses an axial infinity bundle 46.46 mm behind L6's front vertex. L6 (f = −73.7 mm) re-images that converging bundle with a lateral magnification of 2.68. This produces the 249.2 mm system focal length within a much shorter track.

The patent treats the four-part telephoto type as already known (col. 1, ll. 7–20). The distinguishing choice is the selection rule for the glasses. Each part draws its principal element from one of five narrow windows in the patent's $P^{**}$/$P^{*}$ partial-dispersion plane (col. 2, ll. 15–23). In addition, each part's power, multiplied by the structural length, must fall inside a prescribed band (col. 2, ll. 29–42).

| Part | Elements | Focal length (mm) | Role |
| --- | --- | --- | --- |
| T1 | L1 + L2 | +82.9 | Front collector: weak negative meniscus followed by the fluorite positive |
| T2 | L3 | −89.8 | Diverging member 2.00 mm behind T1 |
| T3 | L4 + L5 | +92.6 | Converging pair, 34.51 mm behind T2 |
| T4 | L6 | −73.7 | Rear negative behind the iris; telephoto magnifier |

The height-weighted share of system power shows where the convergence is actually produced. A paraxial marginal ray from infinity has relative heights of 0.967 at L2, 0.887 at L3, 0.803 at L4, 0.774 at L5, 0.541 at the stop and 0.500 at L6. With these heights, the contributions to the total power of 1/f are as follows:

- L2: +3.640
- L3: −2.451
- L6: −1.680
- L4: +1.328
- L5: +0.798
- L1: −0.635

L6 has the strongest standalone power in the system after L2. Its share is less than half of its standalone power because it works at half the entrance height.

## Element-by-Element Analysis

The patent publishes glass names, the partial dispersions $P^{**}$ and $P^{*}$, and each element's power multiplied by the structural length. It publishes no refractive indices or Abbe numbers. The `nd` values below were back-solved from the published thick-lens powers and the printed radii and thicknesses, then rounded to five decimals. Each one reproduces its published power within the five-decimal rounding of the index. The νd values are catalog values for the named Schott glass classes, taken from the 2008 Schott catalog file that still lists the obsolete glasses. They are not patent data. Focal lengths are standalone thick-lens values in air, at the 249.2 mm scale.

### L1 — Negative Meniscus, convex to object (T1)

nd = 1.73499, νd = 41.59. Glass: LaFN8 class (Schott, obsolete, 735416; patent "LaFN 8"). f = −392.3 mm.

L1 is the weakest element in the system. Both of its radii are convex to the object, and they are close in value (51.09 mm and 41.76 mm). It is the patent's glass-range-1 member with power characteristic A. Its published power × structural length is −.563798. The patent's tolerance for A is −0.74 ± 0.18, so this value sits 0.004 inside the edge of the band.

The back-solved index lies 2.1 × 10⁻⁴ below the catalog nd of Schott LaFN8, 1.73520. The 2008 catalog Sellmeier data and Robb and Mercado's 1983 fit of the 1980 Schott catalog agree on that value within 1 × 10⁻⁶. The difference is larger than for any other element, but L1's power is the small difference of two nearly equal curvatures. Rounding the printed radii and thickness to their last digit alone allows the back-solved index to move by up to ±3.0 × 10⁻⁴, against about ±1 × 10⁻⁵ for the other elements. The difference is therefore within the precision of the source and does not weigh against the LaFN 8 identification.

A 1.70 mm air meniscus separates L1 from L2; the two facing radii are 41.76 mm and 42.98 mm. The patent notes that a cemented interface is possible at this location (col. 3, ll. 14–17; col. 4, ll. 5–8), and Example I nearly closes this gap. In Example II the gap is kept open. Because L1 is the first element, the fluorite crystal in L2 has no exposed surface. The patent does not discuss any mechanical or environmental reason for this arrangement.

### L2 — Biconvex Positive (T1)

nd = 1.43388, νd = 95.0. Glass: calcium fluoride crystal (patent "Fluorspar"); catalog-derived ΔPgF = +0.0552. f = +66.7 mm.

L2 is the principal converging element. Its share of system power is +3.640/f, the largest in the lens. The back-solved index of 1.43388 differs from the catalog CaF₂ Sellmeier value by only 3 × 10⁻⁵. A search of current fluorophosphate glasses found none within the back-solve precision; S-FPL53 and FCD100, for example, miss by 3–5 × 10⁻³. This supports a crystal, not a fluorite-like glass, as the medium. The patent places fluorspar in glass range 2, with $P^{**} = -1.7237$ and $P^{*} = 1.7873$, and assigns it power characteristic B. Its published value of 3.317877 lies inside B = +3.08 ± 0.57.

L2 is 11.02 mm thick at the center. At the modeled semi-diameter of 22.2 mm its edge thickness is 1.76 mm, the thinnest edge in the model; Fig. 2 draws it with a narrow flat edge, no taller than L3. The semi-diameter is modeled, not published, so the edge value describes the model rather than the production part. Because of its low index, L2 is also the largest positive term in the Petzval sum (+2.68/f).

### L3 — Biconcave Negative (T2)

nd = 1.68247, νd = 48.20. Glass: LaF20 class (Schott, obsolete, 682482; patent "LaF 20"), traced on its coordinate equivalent HOYA LAFL20 (1.68248 / 48.20). f = −89.8 mm.

L3 alone forms part T2. It stands 2.00 mm behind L2, has a strongly curved front surface (−73.73 mm), and a nearly flat rear surface (+369.6 mm). Its published power, −2.46295, falls within characteristic C = −2.35 ± 0.59. Because it sits so close to T1, the first three elements form a compact block 22.6 mm long. Within it, the strong positive power of the crystal is largely cancelled by L3 and L1, so the block as a whole is only weakly positive (f = +450.3 mm). The large air space d6 (34.51 mm) then separates this block from T3, as the patent's description of the four parts requires. L3 provides the second-largest negative Petzval term (−1.64/f).

### L4 — Positive Meniscus, concave to object (T3)

nd = 1.62097, νd = 35.88. Glass: FN11 class (Schott, obsolete, 621362; patent "F 11"), traced on its coordinate equivalent OHARA TIM11 (1.62096 / 35.88). f = +148.3 mm.

L4 is the first member of T3 and carries power D1 = 1.491605 from glass range 4. Both of its radii are concave toward the object (−452.0 mm and −77.0 mm). Its power comes from the strongly curved rear surface (+2.01/f); the front surface is weakly negative (−0.34/f).

No catalog entry named "F 11" was found. Schott FN11 matches the back-solved index to 1 × 10⁻⁵. However, its catalog $P^{**}$ (−2.0645) differs from the patent's −2.0746 by 0.010. The label is therefore class-level. The model traces L4 on OHARA TIM11, which matches the back-solved index to 1.5 × 10⁻⁵ and the patent's $P^{**}$ and $P^{*}$ to 0.0006 and 0.0003.

A positive element made of a flint glass (νd ≈ 36) is unusual in a conventional achromatic pairing, where the flint normally carries negative power. The patent's selection criterion is partial dispersion, not Abbe number: range 4 is defined by $P^{**} = -2.091 \pm 0.021$ and $P^{*} = 1.727 \pm 0.010$.

### L5 — Positive Meniscus, convex to object (T3)

nd = 1.68248, νd = 48.20. Glass: LaF20 class (Schott, obsolete, 682482; patent "LaF 20"), traced on HOYA LAFL20. f = +245.2 mm.

L5 is the second member of T3 and is made of the same glass as L3. The two back-solved indices differ by only 1 × 10⁻⁵. The patent describes this arrangement explicitly: for a larger angle of view and a larger aperture, T3 may be split into a range-4 lens with power D1 followed by a range-3 lens with power D2. The sum D1 + D2 must then satisfy the D characteristic (col. 3, ll. 21–30; claim 3). Example II prints D2 = .901938 and D1 + D2 = 2.393543. This is within D = 2.63 ± 0.56.

### L6 — Biconcave Negative (T4)

nd = 1.56445, νd = 43.75. Glass: LF8 class (Schott, obsolete, 564438; patent "LF 8"). f = −73.7 mm.

L6 is the only element behind the iris and the telephoto's rear negative group. Its published power of −3.000638 satisfies E = −2.90 ± 0.69. Its contribution to system power (−1.680/f) is reduced by the low marginal height at which it works. The Petzval sum, however, depends only on surface power and index, not on ray height. L6 therefore supplies the largest negative Petzval term in the system (−2.16/f). Together with L3 and the weaker L1, it offsets the positive terms of L2, L4 and L5, leaving a net sum of +0.046/f. That corresponds to a Petzval radius of −5381 mm, about −21.6 f.

## Glass Identification

| Patent name | Model label | nd (back-solved) | νd (catalog) | ΔPgF (catalog) | Range | $P^{**}$ / $P^{*}$ (patent) | Elements |
| --- | --- | --- | --- | --- | --- | --- | --- |
| LaFN 8 | LaFN8 class (735416) | 1.73499 | 41.59 | −0.0029 | 1 | −1.9321 / 1.7489 | L1 |
| Fluorspar | CaF₂ crystal | 1.43388 | 95.23 | +0.0552 | 2 | −1.7237 / 1.7873 | L2 |
| LaF 20 | LaF20 class (682482) ≈ HOYA LAFL20 | 1.68247 / 1.68248 | 48.20 | −0.0021 | 3 | −1.8623 / 1.7634 | L3, L5 |
| F 11 | FN11 class (621362) ≈ OHARA TIM11 | 1.62097 | 35.88 | +0.0060 | 4 | −2.0746 / 1.7289 | L4 |
| LF 8 | LF8 class (564438) | 1.56445 | 43.75 | −0.0006 | 5 | −1.9217 / 1.7519 | L6 |

The patent's partial dispersions are measured against the F–C interval at the outer mercury lines: $P^{**} = (n_F - n_i)/(n_F - n_C)$ with i at 365.0 nm, and $P^{*} = (n_F - n_t)/(n_F - n_C)$ with t at 1014.0 nm (col. 1, ll. 36–42; claim 1). Only the glass name and these two ratios are printed, so the identifications combine three tests:

- the back-solved index;
- the name; and
- recomputation of $P^{**}$ and $P^{*}$ from catalog Sellmeier coefficients.

On the index test, LaF20, FN11 and LF8 agree with their catalog values within 1.3 × 10⁻⁵, and CaF₂ within 3.3 × 10⁻⁵. LaFN8 differs by −2.1 × 10⁻⁴, which is inside the ±3.0 × 10⁻⁴ rounding envelope of its back-solve (see L1).

For LaFN8, LaF20 and LF8, the catalog reproduces both ratios within 0.002. The largest differences are 0.010 in $P^{**}$ for FN11 and 0.016 in $P^{*}$ for CaF₂. The differences most likely reflect the gap between 1970s melt or crystal data and the 2008 catalog fits at the spectral extremes. All five glasses fall inside the patent's ranges (col. 2, ll. 18–23).

Two points about the palette stand out. First, the five ranges span much less of the $P^{**}$/$P^{*}$ plane than the full Schott catalog does. The patent gives the catalog's extent as $P^{**}$ from −2.24 to −1.698 and $P^{*}$ from 1.65 to 1.90 (col. 2, ll. 24–28). Second, only fluorite departs strongly from the normal partial-dispersion line. The other four glasses lie within ±0.006 of it in ΔPgF. All ΔPgF values are catalog-derived, measured from the line $P_{g,F} = 0.6438 - 0.001682\,\nu_d$; the patent publishes no g-line data. In the data file, only CaF₂ is identified with a material in a current catalog. The four obsolete Schott glasses are carried as class labels with their catalog νd and ΔPgF.

## Focus Mechanism

The patent publishes only the infinity state. Focusing is modeled as unit focusing: the entire optical unit translates on the Hasselblad V helicoid, so all internal spacings stay fixed and only the back focus changes. The mechanism is inferred from the lens architecture; the Zeiss data sheet does not state it in words. The close state is solved paraxially so that the object lies 3.0 m from the film plane, the minimum distance given in the data sheet and the Hasselblad instructions (2.75 m from the front of the lens).

| Quantity | Infinity | Close focus (reconstructed) |
| --- | --- | --- |
| Back focus, last vertex to image (mm) | 122.76 | 148.66 |
| Object distance from first vertex | ∞ | 2.753 m |
| Object to image | ∞ | 3.000 m |
| Lateral magnification | 0 | −0.1040 (1:9.62) |

The required extension is 25.91 mm. The modeled scale of 1:9.62 agrees with the data sheet's maximum scale of 1:9.6. That agreement is a consistency check: the 3.0 m distance is a manufacturer constraint applied to the Example II model, not a production focus table. The data sheet quotes a working distance of 2.7 m, measured from the mechanical front of the lens rather than the first vertex. It also states that the focusing ring rotates beyond infinity, so the lens can be used under a range of temperature conditions. That beyond-infinity travel is not modeled.

## Chromatic Correction Strategy

The patent identifies secondary spectrum as the decisive defect of earlier short telephotos. It notes that the defect affects not only the axial image but "all lateral picture errors" (col. 1, ll. 15–30; col. 2, ll. 1–8). It attributes the characterization of glasses by $P^{**}$ and $P^{*}$, and the rules for eliminating paraxial secondary spectrum, to Herzberger. It adds that Herzberger and Pulvermacher gave further rules for correcting the paraxial chromatic difference of magnification, that is, lateral color. It then argues that such paraxial rules are insufficient for a lens of the highest quality unless they are combined with full monochromatic correction (col. 1, ll. 43–68). The invention's two instruments are the five glass ranges and the A–E power bands. "Superachromasia" in Herzberger's sense means a focal-shift curve that brings four wavelengths to a common focus.

The prescription alone cannot show whether Example II reaches that condition, because the patent publishes no line indices. To examine the chromatic structure, a proxy model was built. Each element was given its catalog Sellmeier dispersion, shifted so that the index at the d-line equals the back-solved value. This proxy is catalog-derived and paraxial. It describes Example II, not the production lens.

**Balance of large terms.** The axial color of this design is the small residue of large opposing terms. A linearized, element-by-element breakdown of the paraxial F–C focal difference gives the following contributions:

- L1: +3.20 mm
- L2: −8.95 mm
- L3: +11.24 mm
- L4: −7.28 mm
- L5: −2.91 mm
- L6: +4.79 mm

The exact paraxial F–C difference of the proxy is +0.052 mm, which is under 0.5% of the largest single term. The first-order terms sum to +0.077 mm; the gap reflects second-order terms. Each element contributes with the sign expected from its power: the positive L2, L4 and L5 undercorrect, and the negative L1, L3 and L6 overcorrect. The balance therefore rests on assigning the positive power mainly to the low-dispersion crystal and the negative power to the lanthanum and flint glasses. The patent sets the secondary-spectrum balance through the partial-dispersion windows rather than by Abbe number alone.

**Shape of the focus curve.** Between 365 and 1014 nm the proxy's paraxial focus curve has two turning points: a maximum near 406 nm and a minimum near 656 nm. The relative focal positions at the patent lines and two visible lines are:

| Line | λ (nm) | Focus relative to d (µm) |
| --- | --- | --- |
| i | 365.0 | +16.4 |
| g | 435.8 | +83.4 |
| F | 486.1 | +45.4 |
| e | 546.1 | +12.5 |
| C | 656.3 | −6.8 |
| t | 1014.0 | +82.2 |

With two turning points, no more than three wavelengths can share a common focus. In this proxy the curve therefore has the apochromatic rather than the superachromatic form. Over 400–1000 nm the total spread is 0.103 mm. For comparison, the Rayleigh depth of focus at f/5.59 is ±0.037 mm at the d-line.

**Limits of the proxy.** Neither the size of these residuals nor the form of the curve should be taken as a property of Example II. The F–C residual can be nulled by a dispersion change of only 0.46% to 1.78% in any single element. For example, L4's νd would move from 36.18 to 35.92, or L2's from 95.23 to 94.68. The form of the curve is no more stable: a 1% change in the dispersion of L2, L3 or L4 alone removes both turning points within 365–1014 nm. Changes of that size are within the plausible difference between the 1970s materials and the 2008 catalog fits. The partial-dispersion mismatches noted above for FN11 and CaF₂ show that such differences are present for two of the materials concerned.

The proxy is also paraxial. It does not include spherochromatism, so it does not represent the zonal color balance a designer would actually optimize. Lateral color was not evaluated. The Zeiss data sheet states that the secondary spectrum of the production lens is corrected from 400 to 1000 nm to within the Rayleigh focusing tolerance. The proxy can neither confirm nor refute that statement.

## Conditional Expressions

The patent's conditions are the power characteristics A–E, expressed as part power × structural length. Example II prints the following values:

| Characteristic | Patent band | Example II (printed) | Margin to nearer limit | Satisfied |
| --- | --- | --- | --- | --- |
| A (T1 diverging member, range 1) | −0.74 ± 0.18 | −.563798 | 0.004 | Yes |
| B (T1 converging member, range 2) | +3.08 ± 0.57 | 3.317877 | 0.332 | Yes |
| C (T2, range 3) | −2.35 ± 0.59 | −2.462950 | 0.477 | Yes |
| D = D1 + D2 (T3, ranges 4 and 3) | +2.63 ± 0.56 | 2.393543 | 0.324 | Yes |
| E (T4, range 5) | −2.90 ± 0.69 | −3.000638 | 0.589 | Yes |

Each printed element power is reproduced by the transcribed model within the five-decimal rounding of its back-solved index. The glass condition is the range table already given: every element's printed $P^{**}$ and $P^{*}$ lie inside its assigned window.

Three source discrepancies affect these tables and are retained rather than silently resolved:

- **L1 power.** Claim 7 prints L1's power as −.56798. The description prints −.563798. The claim value would imply an index of about 1.741, which is incompatible with LaFN 8, so it is treated as a dropped digit.
- **Radius R3.** The description gives R3 as .17249 and claim 7 gives .17248. The two readings cannot be distinguished numerically, because L2's index is itself fixed by its published power. The description value is used.
- **Range 4 sign.** Claim 1 prints the range-4 $P^{**}$ as "2.091" without a minus sign. The description's −2.091 is used.

## Monochromatic Residuals

The patent stresses that superachromatic correction is worthwhile only alongside full monochromatic correction (col. 1, l. 50 – col. 2, l. 8). The following quantities depend only on the back-solved indices, the printed geometry and the modeled aperture. They are therefore more robust than the chromatic proxy.

**Spherical aberration.** Exact rays at the d-line with the full f/5.59 pupil show a balanced zonal residual. Relative to the paraxial focus, the 0.7 zone focuses 0.127 mm short, and the marginal ray focuses 0.084 mm long.

**Distortion.** The real chief ray at the model's 9.03° corner field gives +1.41% distortion, which is pincushion. At 6° the value is +0.63%, and at 3° it is +0.16%. These values change by less than 0.003% when the inferred stop is moved by ±0.05 of the L5–L6 gap. The figure is therefore not an artifact of the stop estimate.

**Petzval sum.** The Petzval sum is +1.859 × 10⁻⁴ mm⁻¹, giving the radius of about −21.6 f noted under L6.

## Model Scope and Limitations

| Quantity | Model | Patent (× 249.2) | Zeiss data sheet |
| --- | --- | --- | --- |
| EFL (mm) | 249.21 | 249.20 | 249.2 |
| Back focal distance (mm) | 122.76 | 122.76 | 117.0 |
| First to last vertex (mm) | 98.41 | 98.41 | 103.9 |
| Structural length / track (mm) | 221.16 | 221.165 | 220.9 |
| Telephoto ratio | 0.8875 | .8875 | 0.886 |
| f-number | 5.59 | 1:5.6 | f/5.6 (EP Ø 44.6 mm) |
| Half field (°) | 9.03 (6×6 diagonal used for modeling) | 8.5 | 9 (18° diagonal) |
| Entrance pupil behind first vertex (mm) | 130.67 | — | 136.8 |
| Exit pupil in front of last vertex (mm) | 4.93 | — | 8.1 |

Every printed radius and thickness was multiplied by exactly 249.2, the manufacturer's design focal length; the patent is normalized, so the scale is a free choice. The model's EFL of 249.21 mm and back focus of 122.76 mm reproduce the printed values (1.0 and .4926) to within their printed precision. There are no aspherical surfaces, so no coefficient conversion was needed.

The following quantities in the data file are modeling choices, not source facts:

- **Stop position.** The patent gives no stop position or diameter. The stop is placed 0.81 of the way across the L5–L6 gap from L5's rear surface, measured from the iris drawn in Fig. 2 (about ±0.05). Matching the data sheet's entrance pupil would require 0.90, and matching its exit pupil would require 0.63. The two requirements conflict, a further sign that production differs from Example II.
- **Stop diameter.** The stop semi-diameter (11.95 mm) is calibrated so that the entrance pupil equals the data sheet's 44.6 mm diameter. Its agreement with that figure is therefore calibration, not independent confirmation.
- **Semi-diameters.** These are not published. They are modeled from exact-ray envelopes of the axial pupil and the corner chief ray, with clearance added, and L2 is set to its proportion in Fig. 2. With them, the geometric transmission at infinity is about 71% at 60% field and 50% at full field, clipped mainly at the front surface. These figures describe the model, not the production barrel.
- **Excluded elements.** No cover glass, filter or dummy plane appears in the source, and none was added.

## Design Heritage and Context

Herzberger and McClure set out the superachromat concept in 1963: a lens corrected so that four wavelengths share a common focus, obtained through a suitable choice of glasses (Herzberger and McClure 1963). Herzberger and Pulvermacher treated the color correction of multiplets in 1970. US 3,883,229 refers to Herzberger and to Pulvermacher by name, without citing specific publications. It presents itself as the step from paraxial color rules to a fully corrected, shortened telephoto (col. 1, ll. 33–68).

Its cited prior art consists of earlier US telephoto patents: Reymond 2,778,272, the inventor printed as "Yamji" in 3,160,699, and Tolle 3,369,853. The five examples span half-fields from 3.7° to 8.6° and relative apertures from 1:6.3 to 1:4. In all five, fluorspar is the positive member of T1. Examples III and V add a second fluorspar element in T3.

According to lens-db.com, the 250 mm Superachromat appeared in the Hasselblad C series in 1972, in CF form in 1982 and in CFE form in 2001. The Zeiss CFE data sheet of 2002 describes the lens as the first photographic lens with superachromatic correction. It also states that the lens uses the T coating rather than T* to preserve infrared transmission. Both statements are attributed to the manufacturer and were not independently tested here. No located source compares the C, CF and CFE optics directly; the CF and CFE are both listed as 6 elements in 6 groups. Because the data sheet's vertex length and back focal distance differ from Example II, the production versions should be understood as members of the same design family rather than as realizations of this exact table.

## Sources

- US Patent 3,883,229, F. Determann and H. Zajadatz, "Telephoto Lens Objective," assigned to Carl Zeiss-Stiftung; filed February 14, 1973; granted May 13, 1975; priority DE 2208163 (February 22, 1972). The Example II table is in col. 4 and cols. 5–6 (PDF pp. 6–7), and repeated in claim 7 (cols. 9–10, PDF p. 9). Fig. 2 is on sheet 1 (PDF p. 2). Glass ranges and power characteristics are in col. 2, ll. 15–42, and claim 1 (cols. 7–8).
- Carl Zeiss, Camera Lens Division, "Sonnar Superachromat 5.6/250 CFE," lens data sheet, Cat. No. 10 45 50, printed May 29, 2002. Retrieved from the Hasselblad Historical archive: http://www.hasselbladhistorical.eu/pdf/lds/CFE250SA.pdf
- M. Herzberger and N. R. McClure, "The Design of Superachromatic Lenses," *Applied Optics* 2(6), 553–560 (1963). doi:10.1364/AO.2.000553
- M. Herzberger and H. Pulvermacher, "Die Farbfehlerkorrektion von Multipletts," *Optica Acta* 17, 349–361 (1970).
- SCHOTT AG, optical glass catalog data ("SCHOTT Preferred optical glasses," February 26, 2008, with obsolete glasses), Zemax AGF format, as redistributed in the KrakenOS repository (github.com/Garchupiter/Kraken-Optical-Simulator, file KrakenOS/Cat/SCHOTT.AGF). Used for the catalog Sellmeier coefficients of LaFN8, LaF20, FN11, LF8 and CaF₂; not a Schott-hosted copy.
- P. N. Robb and R. I. Mercado, "Calculation of refractive indices using Buchdahl's chromatic coordinate," *Applied Optics* 22, 1198 (1983). doi:10.1364/AO.22.001198. Visible-region fits of the 1980 Schott catalog; used as an independent check of the catalog nd and νd of LaFN8, LaF20, FN11 and LF8.
- lens-db.com, entries for the Carl Zeiss Sonnar 250mm f/5.6 Superachromat C, CF and CFE, e.g. https://lens-db.com/carl-zeiss-sonnar-250mm-f56-superachromat-cfe-2001/ (third-party source; used only for the production timeline).
