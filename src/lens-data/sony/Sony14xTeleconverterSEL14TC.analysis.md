# Sony 1.4x Teleconverter SEL14TC

## Patent Reference and Design Identification

**Patent:** WO 2017/134928 A1
**Application Number:** PCT/JP2016/086673
**Filed:** 2016-12-09
**Published:** 2017-08-10
**Priority:** 2016-02-01 (JP2016-016981)
**Inventors:** Yonghua Chen; Naoki Miyagawa
**Applicant:** Sony Corporation
**Title:** Teleconverter lens and optical apparatus
**Embodiment analyzed:** Example 6
**Model:** SONY 1.4x TELECONVERTER SEL14TC

The prescription represents the detachable rear converter in Example 6, rather than a self-contained taking
lens. Its authority is the original Japanese international publication, particularly Figure 7, paragraphs
¶0165–0169 and Tables 13–14. The source master in Figure 1 supplies the incident converging beam and aperture
stop. The converter is analyzed as a negative-power relay at that stated conjugate. A correction to the printed
sag numerator is required to preserve the listed signed vertex curvature; the literal printed branch and the
limits of the reconstructed branch are distinguished below. [Patent, PDF pp. 23–24, 41–42][P]

The identification with Sony’s SEL14TC is a production correlation, not a manufacturer-confirmed transcription
of its commercial prescription. Four observations support the selection:

1. Sony specifies 6 elements in 5 groups, matching the six glasses and five air-separated components in Example 6. The three patent power groups use a different grouping convention. [Sony specifications][SONY-SPEC]
2. The marketed multiplier is 1.4×. The source assigns the same nominal enlargement to Example 6, while the independently calculated relay magnification is retained separately. [Patent, ¶0166][P]
3. Sony’s construction graphic shows the same broad sequence of a front positive meniscus, an aspheric negative component, a cemented pair, a further negative component and a rear positive component. Its aspherical-element indication is consistent with the source’s single starred surface. The graphic is schematic and supplies no numerical clear aperture, radius or glass identity. [Sony construction graphic][SONY-FIG]
4. The Japanese priority date precedes Sony Canada’s announcement of 3 February 2016. Sony Japan’s later notice fixes regional availability at 28 October 2016. This chronology is consistent with the correlation; it does not establish optical identity. [Sony announcement][SONY-ANN]; [Japanese release notice][SONY-RELEASE]

Sony’s 62.4 mm external diameter, 33.6 mm overall length and 17.2 mm mount-reference length describe mechanical
envelopes. None is a prescribed optical track or an image-plane extension. The product is specified for Sony
E-mount and full-frame coverage, but a matching mount alone does not establish compatibility with a particular
host. The present numerical results concern the published source master and expressly identified reference
fixtures. [Sony specifications][SONY-SPEC]

## Optical Architecture

The converter has a positive–negative–positive distribution across functional groups G1, G2 and G3. G1 contains
the first glass; G2 contains the central four glasses, including the cemented pair; G3 contains the final glass.
This subdivision follows the source’s power architecture rather than the count of air-separated components. The
strong negative middle group gives the complete converter negative equivalent power despite positive groups at
both ends. [Patent, ¶0166–0169 and Figure 7][P]

| Functional group | Model surfaces | Computed isolated-group EFL (mm) | Group Petzval contribution (mm⁻¹) |
|---|---|---:|---:|
| G1 | 1–2 | +61.465137 | +0.008924920 |
| G2 | 3A–9 | -16.992031 | -0.024211423 |
| G3 | 10–11 | +46.351639 | +0.013950312 |

All computed powers use the patent’s native d-line indices and the curvature-preserving sag convention. The
converter-only equivalent focal length is -111.365901 mm and its first-to-last-vertex length is 30.2300 mm.
These are not the combined system’s focal length and not the marketed multiplier. Its BFD for parallel incident
rays is -142.945884 mm from the last vertex: that virtual focus is a separate conjugate from the real output
image formed from the source master’s converging input.

With the first converter vertex as origin and positive distances toward the image, its front principal plane is
at -5.799892 mm. The rear principal plane lies -31.579982 mm relative to the last vertex. The object-side
principal plane therefore lies before the converter front. This computed geometry is consistent with the
patent’s stated aim of accommodating a rear relay in a short available space; it is not a measurement of a
production mount clearance. [Patent, ¶0037 and ¶0046–0047][P]

The entrance condition is a virtual object: the source master, in the absence of the converter, would bring the
incident cone toward an image position behind the converter front. It is not a finite real object placed in
front of the isolated converter, and it is not an infinite-incident taking-lens test. In paraxial air
coordinates, a unit-height axial ray consequently enters with reduced slope −1/s, where s is the positive
downstream virtual-object distance.

The master’s reduced rear continuation is 24.9600 + 2.5/1.5168 + 1.0 mm. Subtracting the published junction gap
of 1.6082 mm gives s = 26.000006751 mm. The computed relay magnification is 1.399666909 and the paraxial relay
image is 12.929283322 mm beyond the last converter vertex. The prescribed terminal value remains 12.9982 mm in
air-equivalent coordinates. Their signed difference is -0.068916678 mm; the image plane has not been moved to
eliminate it. [Patent, Tables 1–2 and 13–14, ¶0166][P]

The plate normalization is essential. The master-only table includes a 2.5 mm plate at nd = 1.5168 followed by
1.0 mm of air. In the single-plate source-reference composition, that plate is retained once after the
converter. The converter’s own terminal d is air-equivalent and does not include an additional authored plate
object. The physical gap to the retained plate is obtained by subtracting its reduced thickness and final air
gap from the converter’s terminal value.

The resulting physical converter-to-plate air gap is 10.349993249 mm. With the first master vertex as origin,
the physical image coordinate is 233.228293249 mm, whereas the total reduced, air-equivalent coordinate is
232.3765 mm. Table 14 prints 233.23 under a total-length heading marked “in air”; it matches the physical
single-plate total at the printed precision, not the reduced total. Both interpretations remain visible rather
than being reconciled by shifting an interval. [Patent, Table 14][P]

The positive end groups and negative middle group make opposing Petzval contributions. The complete
surface-by-surface sum, using each refracting interface’s (n′−n)/(Rnn′), is -0.001336191 mm⁻¹. Its modest
residual reflects cancellation in this invariant. It does not by itself establish a flat tangential or sagittal
image surface, corrected astigmatism, or any measured corner resolution. The patent discusses those design goals
separately in the conditions governing group power and glass index. [Patent, ¶0037–0040 and ¶0061–0065][P]

## Element-by-Element Analysis

The model labels follow the converter alone: patent surfaces 43–53 become surfaces 1–11, and the starred patent
surface 45 becomes 3A. The focal lengths below are computed for each isolated physical element in air, using its
stated boundaries and native index. They are not additive in-situ powers, especially at the shared L3–L4
interface. Catalog names identify documented nominal equivalents, not original supplier or melt assignments.

### L1 Positive meniscus convex to the image

nd = 1.80809, νd = 22.76. Glass: FD225 (HOYA, catalog-equivalent; actual supplier unconfirmed). f = +61.465 mm.

L1 forms G1 on its own. Both boundary radii are negative in the left-to-right convention, with the more strongly
curved image-side boundary making the meniscus positive. The space after L1 separates this front positive
component from the strong negative core. Its isolated focal length is correspondingly the focal length of G1.
[Patent, ¶0167 and Table 13][P]

The low Abbe number of this positive element is significant in the patent’s stated chromatic strategy. Paragraph
¶0068 describes the front positive glass as participating in cancellation of the negative group’s chromatic
effect and constrains its dispersion through condition (12). This is a source-stated design rationale; the
recovered coordinates do not establish a measured longitudinal-color balance for the assembled commercial
product. FD225 and coordinate-compatible OHARA alternatives also need not share identical partial dispersion.
[Patent, ¶0066–0068][P]; [HOYA catalog][HOYA]; [OHARA catalog][OHARA]

### L2 Biconcave negative with an aspheric front

nd = 1.85135, νd = 40.10. Glass: M-TAFD305 (HOYA, catalog-equivalent; actual supplier unconfirmed). f = -22.103 mm.

L2 begins G2 and is the only aspheric element in this embodiment. The object-side surface is concave, and the
image-side surface completes a biconcave negative shape. Its substantial negative isolated power contributes to
the overall diverging action of the middle group, but the power of G2 also includes the following cemented pair,
intervening air spaces and L5. [Patent, ¶0168 and Table 13][P]

The high index is retained exactly from the source. M-TAFD305 is the selected catalog-equivalent spectrum; the
M-prefix is not dropped or silently exchanged for the MP- or MC-prefixed alternatives found at similar
coordinates. A catalog prefix is not proof of the manufacturing process used by Sony. The asphere supplies a
radial shape degree of freedom without changing the declared vertex radius; its actual correction profile is
described separately. No isolated spherical-aberration or coma contribution is assigned from the element’s power
sign. [HOYA catalog][HOYA]

### L3 Biconvex positive in the cemented pair

nd = 1.60342, νd = 38.01. Glass: E-F5 (HOYA, catalog-equivalent; actual supplier unconfirmed). f = +24.644 mm.

L3 is the positive member of the only cemented pair. Its rear surface is also L4’s front, so the physical system
refracts directly from L3 glass into L4 glass at surface 6. There is no air film or synthetic cement layer in
the prescription. The isolated focal length stated above replaces the external medium by air only for that
explicitly defined component calculation; it does not describe the actual shared boundary by itself. [Patent,
Table 13 and Figure 7][P]

E-F5 reproduces the nominal coordinate pair and provides one documented spectral surrogate. CDGM F1/H-F1 and
historical OHARA PBM5 match the printed coordinate pair; HIKARI J-F5 is only a near-match at νd = 38.03. These
alternatives illustrate why nominal or nearby nd/νd coordinates cannot uniquely identify the original material or
secondary spectrum. The positive lens remains central to the net-positive cemented component even though the
surrounding functional group is negative. [HOYA catalog][HOYA]; [HIKARI catalog][HIKARI]; [CDGM catalog][CDGM];
[OHARA catalog][OHARA]

### L4 Negative meniscus in the cemented pair

nd = 1.88100, νd = 40.14. Glass: TAFD33 (HOYA, catalog-equivalent; actual supplier unconfirmed). f = -48.285 mm.

L4 is a negative meniscus, concave toward the object and convex toward the image, cemented to L3. The interface
bends light between two finite glass indices, and its contribution therefore depends on their difference rather
than either glass-to-air contrast. The source topology and the medium-after-surface index are retained. [Patent,
¶0168 and Table 13][P]

The complete cemented pair has computed EFL +49.354040 mm and Petzval contribution +0.014959195 mm⁻¹. Thus the
pair is net positive in isolation despite L4’s negative isolated element power. Neither adding isolated focal
lengths nor inferring the sign of an individual aberration from them is appropriate.

The inferred clear radius at the common interface is smaller than the radius at L4’s rear edge, consistent with
the schematic’s wider rear contour. The outer material connection was checked using actual untrimmed element
outlines and sampled ray segments within the glass. That geometric result supports the modeled solid, without
turning the drawing into a manufacturing-tolerance specification.

### L5 Biconcave negative with a weakly curved rear

nd = 2.00100, νd = 29.13. Glass: TAFD55 (HOYA, catalog-equivalent; actual supplier unconfirmed). f = -33.554 mm.

L5 is the separate negative component at the rear of G2. Its image-side radius is 2331.0000 mm, much weaker in
curvature than its object-side surface; the finite source value is retained rather than replaced by a plane.
TAFD55 is the highest-index representative in this six-glass palette. Its native index supplies the G2 maximum
used by condition (10). [Patent, Table 13 and ¶0061–0065][P]

The placement of high-index negative power near the following positive group is consistent with the patent’s
Petzval-related index constraints. That consistency does not prove which individual lens corrects a particular
field aberration, because the in-situ ray heights and all neighboring surfaces participate. The source does not
identify an original TAFD55 melt, and the existence of a TAFD55-W candidate is preserved as a catalog
distinction rather than treated as an interchangeable commercial assignment. [HOYA catalog][HOYA]

### L6 Biconvex positive rear group

nd = 1.57135, νd = 52.95. Glass: S-BAL3 (OHARA, catalog-equivalent; actual supplier unconfirmed). f = +46.352 mm.

L6 alone forms G3. Its front surface is relatively weak and its image-side convex surface more strongly curved,
producing the final positive component after the negative core. Condition (1) constrains this element’s bending;
condition (11) constrains its index. The patent associates these choices with peripheral-ray behavior and the
overall correction balance, but no experimental separation of its coma or distortion contribution has been
established here. [Patent, ¶0031, ¶0033–0037, ¶0063–0065 and ¶0169][P]

S-BAL3 is retained with the OHARA S-prefix. It is the lower-index, higher-Abbe rear-positive representative
relative to the central negative glasses. Its power contributes to both the converter’s principal-plane
placement and the positive side of the Petzval cancellation. The converging output remains dependent on the
incident source-master cone; L6 does not make the converter an independent taking lens. [OHARA catalog][OHARA]

## Glass Identification and Selection

The six-supplier comparison used authoritative OHARA, HOYA, SCHOTT, HIKARI, CDGM and SUMITA catalog material.
The implemented representatives agree with the patent’s nominal nd/νd coordinates; that agreement is not a
supplier identification. The native patent indices and Abbe numbers remain unchanged. The following ΔPgF values
are computed catalog-derived properties under the application’s stated normal-line convention, not values
printed in the patent.

| Element | Implemented nominal equivalent | nd | νd | Catalog-derived ΔPgF |
|---|---|---:|---:|---:|
| L1 | HOYA FD225 | 1.80809 | 22.76 | +0.023143 |
| L2 | HOYA M-TAFD305 | 1.85135 | 40.10 | -0.006826 |
| L3 | HOYA E-F5 | 1.60342 | 38.01 | +0.002942 |
| L4 | HOYA TAFD33 | 1.88100 | 40.14 | -0.006196 |
| L5 | HOYA TAFD55 | 2.00100 | 29.13 | +0.004698 |
| L6 | OHARA S-BAL3 | 1.57135 | 52.95 | +0.000691 |

For this model, PgF = (ng−nF)/(nF−nC), and ΔPgF is measured relative to 0.6438−0.001682νd. The catalog
normal-line convention is identified explicitly because a vendor’s own partial-dispersion field need not use the
same baseline. The data file stores no separate nC, nF or ng values: each element carries the patent nd and νd
and resolves to its named catalog glass, whose dispersion formula supplies the other wavelengths.
[Pinned dispersion implementation][DISPERSION]

The source defines nd at its literal d-line wavelength of 587.6 nm. Catalog coefficient evaluation used the
separately identified canonical wavelengths C = 656.273 nm, d = 587.562 nm, F = 486.133 nm and g = 435.834 nm.
These are not silently represented as identical source wavelengths. Catalog coefficients and native coordinates
therefore have distinct provenance. The small differences between a coefficient-derived Abbe
number and the printed two-decimal source value are retained. [Patent, ¶0088 and ¶0067][P]; [HOYA
catalog][HOYA]; [OHARA catalog][OHARA]

The chromatic interpretation is consequently limited. The front positive glass’s substantial dispersion and the
negative middle group’s contrasting materials follow the patent’s stated cancellation strategy. They do not
establish apochromatic correction, a particular secondary-spectrum residual, or agreement with the published
chromatic plots. No glass is promoted to a special dispersion category solely because its name or index appears
suggestive. The alternative spectra at the same nominal coordinates, particularly for L1 and L3, are a material
uncertainty rather than a reason to overwrite the patent values.

## Focus Mechanism

The converter is a fixed detachable relay. It contains no independent diaphragm, translating focus group, zoom
schedule or decentered stabilization group in this prescription. The source master supplies those external
operating conditions. The modeled status is NO_INTERNAL_RECONSTRUCTION: no converter focus travel, close-focus
law or internal motion has been invented. [Patent, Figure 1 and Tables 1–2, Figure 7 and Tables 13–14][P]

The source gives Wide and Tele configurations of the master at infinity. Their tabulated master spacings can be
evaluated as those two discrete states, but they do not determine a unique continuous zoom cam or finite-object
focus trajectory. The reference calculations therefore use two separately fixed infinity prescriptions, not a
fabricated moving host. The private computational fixture’s required closeFocusM = 0 is an unused schema
sentinel and has no physical meaning as a minimum focusing distance.

The aperture stop is the master’s source surface 23. Its diameter is not published. Calibration begins with the
nominal entrance radius EFL/(2Fno), then differs according to the ray model: a paraxial calculation maps that
radius linearly to the stop, while the actual runtime uses a finite-ray Snell trace. The resulting stop radii
must not be conflated.

| Source infinity state | Native master Fno | Paraxial inferred stop radius (mm) | Finite-ray calibrated runtime stop radius (mm) |
|---|---:|---:|---:|
| Wide | 2.89 | 17.277780 | 18.013019 |
| Tele | 2.88 | 16.659886 | 17.415570 |

A separate exact-vector calculation reproduces the finite-ray stop calibration. Actual attachment preserves each
physical stop radius and rescales the combined nominal f-number by the computed focal-length ratio. Thus the
apparent aperture change is not produced by shrinking the iris. Calibration from a nominal f-number is
nevertheless not an independent measurement of an undocumented source or production diaphragm. [Pinned runtime
calibration][RUNTIME]; [Converter composition][TC-RUNTIME]

## Aspherical Surface

The sole converter asphere is the object-side surface of L2, model 3A and source 45. The original common
equation in ¶0090 prints c² in the numerator while ¶0091 defines c = 1/R. Written literally, the printed
relation is

$$
z_{\rm printed}(y)=\frac{c^2 y^2}{1+\sqrt{1-(1+K)c^2y^2}}+\sum_i A_i y^i.
$$

With c defined as reciprocal length, that numerator has the wrong dimension for sag and the quadratic term does
not preserve the signed vertex curvature. The reconstructed geometric model uses c in the numerator instead:

$$
z(y)=\frac{c y^2}{1+\sqrt{1-(1+K)c^2y^2}}+A_4y^4+A_6y^6+A_8y^8+A_{10}y^{10}.
$$

This is a minimal convention correction, not an official erratum. K retains the source’s 1+K denominator
convention. No uniform scaling was applied; radii, thicknesses and the aspheric coefficients remain native,
except the sign of A4, which is corrected as described below. The same common-equation interpretation is used at
the source master’s starred surfaces when the reference assembly is traced. [Patent, PDF pp. 23–24, ¶0090–0091][P]

| Surface 3A / source 45 parameter | Source value | Implemented value | Units |
|---|---:|---:|---|
| R | -24.5634 | -24.5634 | mm |
| K | -1.65 | -1.65 | dimensionless |
| A4 | 2.0600e-06 | -2.0600e-06 | mm⁻³ |
| A6 | -2.0120e-09 | -2.0120e-09 | mm⁻⁵ |
| A8 | 5.1320e-11 | 5.1320e-11 | mm⁻⁷ |
| A10 | -7.8900e-14 | -7.8900e-14 | mm⁻⁹ |

All listed polynomial terms are even powers of radial height. The A12 and A14 entries are explicit zeros in the
model. No thin resin shell, extra interface or manufacturing method is inferred from the coefficient list. The
source gives a geometric asphere and the catalog offers a spectral equivalent; neither proves how the production
surface was manufactured. [Patent, ¶0165, PDF p. 41][P]

The sign of A4 is a source erratum, corrected in the model. Paragraph ¶0165 prints A4 = 2.0600E−06; the model
uses −2.0600e−06 and keeps every other printed value. Two kinds of evidence from the patent itself reject the
printed sign and accept the reversed one, both traced through the source master and its 2.5 mm plate. First,
Table 14 states an image height of 21.63 mm at half angles of 12.34° and 4.58°: the chief ray lands at 21.326 mm
and 21.332 mm with the printed sign and at 21.631 mm and 21.649 mm with the corrected one. Second, Figure 15 plots
this example’s sagittal and meridional field curves within 0.11 mm of the paraxial plane and about −2.1% and
−0.5% distortion: the printed sign puts the meridional focus 2.2 mm from that plane at the corner with −3.38% and
−2.01% distortion, while the corrected sign follows all 29 readings of the four curves within 0.014 mm with
−2.00% and −0.55% distortion. A change of K to −1.15 would also restore the image height, but it leaves the
meridional focus 0.24 mm to 0.28 mm from the plotted curve and is rejected. The master alone and Example 7
reproduce their own plots under the same trace. The patent has no published correction, and the reading rests on
this publication alone. [Patent, Table 14, PDF p. 42; Figures 9, 15 and 16, PDF pp. 77, 83–84][P]

At the inferred surface radius y = 14.2 mm, the sag is -3.944647 mm. The polynomial contributes -0.041714 mm to
the specified conic base, and the full surface is displaced by +0.575784 mm relative to the sphere with the same
signed vertex radius; the surface slope there is 27.71°. The outer surface is therefore less negative in sag
than that reference sphere at this radius. This is a shape comparison at a modeled aperture, not a measured
correction of a particular aberration.

Keeping the printed c² numerator as a literal numerical millimetre branch instead produces converter EFL
+52.085968 mm and relay magnification 0.787634. Its virtual-object image lies -0.598519 mm relative to the last
vertex, on the wrong side for the source’s real output. These failures support the minimal curvature-preserving
reconstruction; they are not removed by changing the terminal spacing or forcing the nominal multiplier.

## Conditional Expressions

The broad conditions below follow the patent’s numbered expressions; the values are recomputed from the final
converter data, not copied from Table 17. Here f is the converter-only EFL; f1, f2 and f3 are isolated
functional-group EFLs; Lr is its first-to-last-vertex length; β is the source nominal multiplier; and d12 is the
air space between G1 and G2. Rb1 and Rb2 are the front and rear radii of the positive lens in G3. [Patent,
¶0033–0068][P]

BF denotes the authored image-side back focus in the source’s reduced convention, and h is the stated maximum
image height. The signed distance et_o runs from the front principal plane to the first vertex; et_i runs from
the last vertex to the rear principal plane. Consequently et_o is positive and et_i negative for the
reconstructed converter. Nd_G2m is the largest native index among the negative G2 elements, Nd_G3p is the
rear-positive index, and νd_G1 is the front-positive Abbe number. These definitions distinguish vertex
distances, principal planes and final image space.

| Condition | Source broad inequality | Recomputed value | Relation to bound |
|---|---|---:|---|
| (1) | $-3.5<(R_{b2}+R_{b1})/(R_{b2}-R_{b1})<-0.18$ | -0.668652 | Within the stated bound |
| (2) | $2.2<f_3/(-f_2)<7.2$ | 2.727846 | Within the stated bound |
| (3) | $0.05<-f_2/(L_r\beta)<0.45$ | 0.401494 | Within the stated bound |
| (4) | $L_r/(et_o+L_r)<1.13$ | 0.839026 | Within the stated bound |
| (5) | $0.3<BF/h<1.9$ | 0.600934 | Within the stated bound |
| (6) | $(BF-et_i)/(BF+L_r)>0.7$ | 1.031229 | Within the stated bound |
| (7) | $0.03<d_{12}/(-f)<0.2$ | 0.038881 | Within the stated bound |
| (8) | $0.3<\lvert f_1/f\rvert<1.5$ | 0.551921 | Within the stated bound |
| (9) | $0.05<f_2/f<0.4$ | 0.152578 | Within the stated bound |
| (10) | $N_{d,G2m}>1.85$ | 2.001000 | Within the stated bound |
| (11) | $N_{d,G3p}<1.65$ | 1.571350 | Within the stated bound |
| (12) | $15<\nu_{d,G1}<35$ | 22.760000 | Within the stated bound |

The conditions constrain bending, group-power distribution, principal-plane placement, intergroup spacing and
glass coordinates. Paragraph ¶0034 connects rear-element bending with peripheral coma and distortion balance;
¶0037 connects the G2/G3 power ratio with tangential and sagittal field correction; ¶0047 explains the
front-principal-plane requirement for limited rear space. Those are source-stated design objectives. Satisfying
their inequalities does not independently demonstrate the corresponding full aberration curves.

The index conditions distinguish high-index negative power in G2 from the lower-index rear positive element,
while the front-positive Abbe constraint addresses the chromatic balance described in ¶0068. The calculation
verifies all broad bounds without replacing small printed discrepancies: G1 recomputes to 61.465137 mm against
the source’s 61.46 mm, and Table 17 prints 1.571351 for condition (11) whereas the prescription’s rear index is
1.57135. The printed coefficient precision and the broad inequalities are different tests. The stricter primed
ranges are distinct preferred criteria, not substitutes for the broad conditions.

In particular, the recomputed value 0.401494 satisfies the broad condition (3) but exceeds the preferred (3)′
upper limit of 0.4. Paragraph ¶0041 specifies that narrower range as desirable. Rounding the value to the Table
17 display of 0.40 would hide the distinction; the unrounded result is not adjusted to enter the preferred
interval. [Patent, ¶0041, PDF p. 13][P]

## Reference-Host Verification and Limitations

The reference host is the source master at its two printed infinity stations. Native d-line first-order results
from the minimally corrected prescription are shown beside the original tabulation. The computed columns derive
from the exact final converter surfaces; no master prescription, object distance or sensor position was invented
to force the product name to fit.

| Infinity state | Master EFL source / computed (mm) | Combined EFL source / computed (mm) | Combined Fno source / computed calibration |
|---|---:|---:|---:|
| Wide | 72.08 / 72.080749 | 100.88 / 100.890771 | 4.04 / 4.045107 |
| Tele | 194.05 / 194.075920 | 271.64 / 271.743303 | 4.03 / 4.032549 |

Some residuals exceed the rounding interval of the printed tables. They are preserved as source/model
differences rather than removed by rescaling, changing an index, or applying corrective refocus. The source’s
output plane also need not coincide with the converter’s Gaussian relay image to arbitrary precision. The
applicable converter self-consistency check retains an image-side allowance derived from the longitudinal
magnification of source-master defocus; it is not evidence of diffraction-limited performance. [Patent, Tables 2
and 14][P]

The angular heading requires separate treatment. Tables 2 and 14 label their angular row 2ω, yet the listed
values behave more like half angles for the stated image height. The ambiguity is evaluated at the original
fixed plane, rather than resolved by silently renaming the source row.

| Combined state | Literal interpretation: half the printed 2ω / computed image height | Printed value used as half angle / computed image height |
|---|---:|---:|
| Wide | 6.170° / 10.866872 mm | 12.340° / 21.630664 mm |
| Tele | 2.290° / 10.860461 mm | 4.580° / 21.649438 mm |

An independent target-height solve for |y| = 21.63 mm gives reference-host half angles 12.339613° and 4.575810°,
which round to the printed 12.34° and 4.58°; the printed values therefore act as half angles. Those solved angles
are computational test inputs, not replacement patent values or a production angle-of-view measurement. Figure 15
marks image heights of 21.64 mm and 21.62 mm on its Wide and Tele plots; the Tele result of 21.649 mm lies at the
edge of what an angle printed to two decimals allows.

The engine’s terminal point is the final plate surface, and reachedImagePlane remains false in the raw trace
result. Image coordinates used here are obtained by propagating that terminal vector through the remaining final
air to the prescribed plane. Reporting the terminal surface intercept as though it were the sensor coordinate
would introduce a different, unphysical reference-plane error.

All converter clear radii are inferred semi-diameters. In front-to-rear surface order they are 13.6, 13.6, 14.2,
14.2, 14.4, 14.4, 16.0, 17.8, 17.8, 19.0, 19.0 mm. They follow the source schematic subject to exact ray and
solid-geometry checks. Measured on Figure 7 at 0.0970 mm per pixel, the drawn rims of L1 to L6 stand at 13.0,
13.9, 14.6, 16.1, 17.9 and 19.4 mm, so every stored radius lies within 5% of the drawing; the figure is a
schematic section and prints no clear aperture. It draws L2 and L5 with square-cut rims and ends their concave
front surfaces at flat annuli, near 12.4 and 15.0 mm; the modeled outlines carry those two curves to the rim
instead. Source-master clear radii are also inferred; its field vignetting is part of the reference model.

At these rims, the minimum sampled element thickness is 0.534886 mm, the maximum actual surface slope is
50.727076°, and the maximum shared-band gap-sag intrusion fraction is 0.294929, between L1 and the aspheric
front of L2. Conic domains remain real and no rim-slope, gap-sag or render-layout relaxation is applied. The
cemented pair’s wider rear contour passes material containment rather than being hidden by drawing trim.

The sampled ray and solid tests in the next two paragraphs were run with the printed sign of A4 and have not been
repeated with the corrected surface, which lies 0.17 mm further forward at its 14.2 mm rim and 0.03 mm at the
9.5 mm height of the corner chief ray. With the corrected surface the converter passes the data validation, and
on the four declared catalog hosts an exact meridional trace finds the axial beam and the corner chief ray clear
of every converter rim at every zoom station.

The bounded exact-ray tests compare bare and attached source hosts at identical incident coordinates. Both
native apertures and a separate f/2.8 reference setting were evaluated. The coarse grid contains 3,860 paired
incident samples and the denser grid 23,060; a further 5,184 boundary samples use an independently located
admitted radial boundary. The field tests include the axis, intermediate fields and the independently solved
image-height edge. No final sampled ray admitted by the bare reference host is additionally lost to the
converter; all sampled nominal-aperture axial rays pass. These counts are sampling coverage, not radiometrically
weighted transmission or a continuum proof.

Actual production outline functions produce zero trim at both source states. The six converter material polygons
have no improper self-intersection or overlap, allowing their shared cement interface. The fully admitted coarse
rays additionally pass 315,270 sampled in-glass segment tests. These tests address modeled optical clearance and
solid containment, not toleranced mechanical compatibility with an arbitrary production lens.

The f/2.8 lower host-f-number bound is supported within the disclosed source-reference scope. It is not a
production-host benchmark, and it does not authorize universal attachment. Beyond the source fixtures, five
catalog hosts on Sony’s accessory compatibility list declare this converter: FE 70-200mm F2.8 GM OSS, FE 70-200mm
F2.8 GM OSS II, FE 400mm F2.8 GM OSS, FE 400-800mm F6.3-8 G OSS and FE 70-200mm F4 Macro G OSS II. The first
four, composed with their catalog prescriptions, give 101.0 / 165.1 / 271.5 mm at f/4.03, 100.8 / 169.0 / 271.3 mm at f/4.03, 543.7 mm at f/4.08 and 559.3 / 776.3 /
1081.0 mm at f/8.95 / 10.23 / 11.48; on each the stop radius is unchanged and the axial beam and the corner chief
ray clear at every zoom station. Any other production host still requires its own compatible geometry and
supported declaration. The converter’s lack of an internal stop makes that distinction particularly important.

Sony also [lists SEL14TC for the FE 70–200mm F4 Macro G OSS II](https://www.sony.co.uk/electronics/support/lenses-e-mount-lenses/sel70200g2/specifications). Its native prescription composition retains the stop and corner-chief coverage at every zoom station, with no converter render trim. This host uses e-line indices while the converter uses d-line indices. All nineteen host glasses now have catalog curves after the MC-TAF115 backfill, permitting common-wavelength conversion. Composed simulated MTF uses L72’s qualified spectral proxy; its supplier and annealing remain unconfirmed.

Finally, aperture admission is not image-quality validation. The native monochromatic calculations retain
longitudinal and first-order residuals at the prescribed plane, while the uncertain spectral surrogates prevent
exact attribution of the source’s chromatic plots. No production-host MTF, resolution, distortion, vignetting
integral, apochromatic performance or finite-focus performance is claimed. The defensible result is a
source-constrained rear-converter reconstruction with explicit conjugates, preserved source discrepancies and a
bounded, executable reference-host geometry assessment.

## Sources and References

- [P] Chen, Yonghua; Miyagawa, Naoki. *Teleconverter lens and optical apparatus*. Sony Corporation. WO 2017/134928 A1, published 10 August 2017. Original supplied 99-page publication. Principal locators: front page; ¶0033–0068 (PDF pp. 11–19); ¶0088–0091 (PDF pp. 23–24); Tables 1–2 (PDF pp. 26–29); Example 6, ¶0165–0169 and Tables 13–14 (PDF pp. 41–42); Table 17 (PDF p. 45); Figures 1 and 7; aberration Figures 9, 15 and 16 (PDF pp. 77, 83–84). The original page images govern readings over OCR or translation. [Publication][P]
- Sony Japan. *SEL14TC specifications* and *Features / lens construction*. Manufacturer counts, mount, dimensions and schematic topology. [Specifications][SONY-SPEC]; [Construction][SONY-FIG]
- Sony Canada. *Sony Launches New G Master Brand of Interchangeable Lenses*, 3 February 2016. Manufacturer announcement distributed by Cision. [Announcement][SONY-ANN]
- Sony Japan. Release-date notice, 26 September 2016, specifying 28 October 2016 availability. [Notice][SONY-RELEASE]
- HOYA. Optical-glass catalog including obsolete entries, 7 July 2026. Nominal coordinates and dispersion coefficients for the disclosed HOYA representatives and alternatives. [AGF catalog][HOYA]
- OHARA. Optical-glass catalog, 1 July 2026. S-BAL3 and coordinate-compatible alternatives, preserving named prefixes. [Catalog archive][OHARA]
- SCHOTT. Optical-glass data workbook. Comparative six-supplier coordinate review; no SCHOTT representative is asserted as a production identity. [Workbook][SCHOTT]
- HIKARI. *HIKARI All Catalog Data*. Comparative material and spectral candidates. [Workbook][HIKARI]
- CDGM. ZEMAX optical-glass catalog, September 2026. Comparative material and spectral candidates. [Catalog][CDGM]
- SUMITA. Manufacturer optical-glass download collection. Comparative coordinate review. [Download][SUMITA]
- LensVisualizer. Pinned implementation d8b406ce112931ab0b2988b87acbd13b0b663c7e. Computational convention reference, not an additional patent authority: [runtime and aperture calibration][RUNTIME]; [dispersion hierarchy][DISPERSION]; [teleconverter composition][TC-RUNTIME].

[P]: https://patents.google.com/patent/WO2017134928A1/en

[SONY-SPEC]: https://www.sony.jp/ichigan/products/SEL14TC/spec.html

[SONY-FIG]: https://www.sony.jp/ichigan/products/SEL14TC/feature_1.html

[SONY-ANN]: https://news.cision.com/sony-canada/r/sony-launches-new-g-master--brand-of-interchangeable-lenses%2Cc9908311

[SONY-RELEASE]: https://www.sony.jp/ichigan/info2/20160926.html

[HOYA]: https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf

[OHARA]: https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip

[SCHOTT]: https://media.schott.com/api/public/content/7f5a58f7fa754445abab44cafc76acb3?v=a102056c&download=true

[HIKARI]: https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_ALL_Catalog_Data.xlsx

[CDGM]: https://www.cdgmgd.com/downloadFile.htm?uid=pvntrGdxCC64MZei1SX

[SUMITA]: https://www.sumita-opt.co.jp/en/download/

[RUNTIME]: https://github.com/ronbuening/LensVisualizer/blob/d8b406ce112931ab0b2988b87acbd13b0b663c7e/src/optics/runtimeLens.ts

[TC-RUNTIME]: https://github.com/ronbuening/LensVisualizer/blob/d8b406ce112931ab0b2988b87acbd13b0b663c7e/src/optics/prescription/teleconverter.ts

[DISPERSION]: https://github.com/ronbuening/LensVisualizer/blob/d8b406ce112931ab0b2988b87acbd13b0b663c7e/src/optics/dispersion.ts
