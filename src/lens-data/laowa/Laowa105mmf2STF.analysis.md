# LAOWA 105mm f/2 Smooth Trans Focus (STF)

## Patent Reference and Design Identification

**Patent:** CN 104991330 B  
**Application Number:** 201510417065.0  
**Filed:** 2015-07-13  
**Granted:** 2017-10-20  
**Inventor:** Xiaohua Zhang (张小华)  
**Applicant:** Anhui Changgeng Optics Technology Co., Ltd. (安徽长庚光学科技有限公司)  
**Title:** 一种新型摄影镜头 (A new photographic lens)  
**Embodiment analyzed:** Example 1, ¶0033–0046, Figure 1

The prescription is Example 1 of the granted B publication, correlated with the Laowa
105 mm f/2 Smooth Trans Focus lens on construction. It is not a manufacturer-confirmed
production prescription, and no other publication or numerical example is blended into its
table. The manufacturer's 2021 catalogue and launch material support the correlation
[1, 2, 5]:

1. The catalogue section has eleven elements in eight groups, with the same sequence of
   positive and negative elements and the same three contacting pairs.
2. The apodization element sits ahead of its positive partner, as in Figure 1; in Example 2
   it follows its partner. The catalogue draws the element concave-front with a biconvex
   partner where Example 1 has plane outer faces, so the production lens reads as a
   refinement of Example 1, not a copy of it.
3. The catalogue lists distinct F-stop and T-stop blade counts, consistent with two stops,
   without publishing their dimensions or control law.
4. The patent's 102.263 mm focal length, F/2.05 and 23.84° full field are close to the
   marketed 105 mm, f/2 and 23°. Marketing values are not substituted for the patent table.

The catalogue lists full-frame coverage and Canon EF, Nikon F, Sony A, Sony FE and Pentax K
variants. Its 0.9 m minimum focusing distance is distinct from the patent's 0.15× state.
These are production metadata, not constraints used to adjust the model.

The catalogue legend labels the light-blue second element “Glass Aspherical.” That element
is L2 (nd = 1.92286), which Laowa's launch material identifies as the design's single
high-refractive element; that material lists no aspherical element [5]. The patent contains
no aspheric mark, conic constant or polynomial coefficient for either example, so the model
is all-spherical.

## Optical Architecture

The patent describes two positive lens groups, Gr1 and Gr2, rather than eight
independently moving groups. Gr1 contains L1–L6 and Gr2 contains L7–L11. The eight
air-separated groups consist of five singlets and three contacting doublets. The patent's
twenty-two surface rows include two stop planes and the L2/L3 interface printed twice as S4/S5.

The key architectural feature is a powered neutral-gray negative lens inside the rear
group. The APD's radial thickness controls intensity transmission; its refracting power
also remains part of the prescription. A positive lens is cemented behind it, and the patent's
aperture stop ST2 follows that pair. The light-blocking stop ST1 precedes the rear group
[1, ¶0005, ¶0034, Figure 1].

At infinity the isolated Gr1 and Gr2 focal lengths are +250.420682 mm and
+80.054767 mm, calculated in air. The printed table gives EFL 102.270950 mm,
BFD 39.647903 mm from S22, and 125.1106 mm from the first vertex to the patent's
image plane. TL/EFL is 1.223325 and BFD/EFL is 0.387675, so the design is neither a
telephoto (TL/EFL < 1) nor a retrofocus (BFD > EFL) construction.

## Element-by-Element Analysis

The focal lengths below are standalone thick-element values in air. A shared-interface
power in the assembled system is different; the separately stated doublet values account
for the actual adjoining media. Named glasses are coordinate-equivalent dispersion proxies,
not established production suppliers or melts.

### L1 — Positive Meniscus

nd = 1.48749, νd = 70.44. Glass: FC5 (HOYA; coordinate equivalent). f = +185.707722 mm.

The first positive meniscus is convex toward the object. It supplies positive power ahead
of the first contacting pair. Its high Abbe number identifies comparatively low primary
dispersion at the published coordinates; that observation does not establish anomalous
partial dispersion or a specific chromatic-aberration allocation.

### L2 — Positive Meniscus

nd = 1.92286, νd = 20.88. Glass: E-FDS1 (HOYA; coordinate equivalent). f = +70.446746 mm.

This high-index positive meniscus is the front member of D1. Its rear face S4 is followed
by the separately printed S5 at the same radius and axial position, with D4 = 0. The model
keeps both rows as printed, without an added air space or cement layer. This is the element
Laowa identifies as high-refractive; the catalogue's “Glass Aspherical” swatch on it is not
supported by any aspheric data in the patent.

### L3 — Negative Meniscus

nd = 1.69449, νd = 29.84. Glass: Unmatched (flint; source nd 1.69449, vd 29.84). f = -49.811617 mm.

The negative meniscus is the rear member of D1. Its stronger rear curvature produces
negative standalone power. Together L2 and L3 have a calculated net focal length of
-229.765183 mm; the positive focal length of L2 alone must not be used to call the entire
pair positive. The contacting construction is supported by Figure 1, while the repeated
source boundary is retained literally.

### L4 — Positive Meniscus

nd = 1.80420, νd = 46.50. Glass: TAF3 (HOYA; coordinate equivalent). f = +129.511160 mm.

The separated positive meniscus lies between the two front doublets. Both radii are
positive, with the stronger curvature on the object side. Its inferred front clear radius
is constrained by the narrow preceding air gap; the physical prescription itself is
unchanged. No individual spherical-aberration correction is assigned from power sign alone.

### L5 — Biconvex Positive

nd = 1.55102, νd = 66.41. Glass: Unmatched (crown; source nd 1.55102, vd 66.41). f = +50.270486 mm.

This biconvex positive element is the front member of D2. It pairs relatively low primary
dispersion with the more dispersive negative L6. Such complementary powers are consistent
with a primary chromatic-balancing role, but the patent does not quantify the individual
contributions and the unmatched L5 material has no verified spectral curve.

### L6 — Biconcave Negative

nd = 1.78472, νd = 25.72. Glass: SF11 (Schott; coordinate equivalent). f = -30.798184 mm.

The biconcave negative partner shares S10 with L5; that interface carries L6's medium in
the data. D2 has calculated net focal length -124.653883 mm in air. Its negative net power
is distinct from the positive front member and from the positive power of Gr1 as a whole.
The Schott SF11 label is an equivalent with an Abbe residual of +0.04, not an exact melt match.

### L7 — Biconvex Positive

nd = 1.80420, νd = 46.50. Glass: TAF3 (HOYA; coordinate equivalent). f = +102.535704 mm.

The first rear-group element is an asymmetric biconvex positive lens. It sits
immediately behind ST1 and in front of the absorbing pair. The source gives the same
index/Abbe coordinates as L4; using the same coordinate-equivalent label does not establish
that two manufactured parts share a melt.

### L8 — Plano-Concave

nd = 1.50400, νd = 63.00. Glass: Unmatched (neutral-gray apodization glass; source nd 1.50400, vd 63.00). f = -59.523810 mm.

The APD element has a plane object-side face S15 and a concave image-side boundary S16.
Its center thickness is 1.0000 mm and its rear radius is 30.0000 mm. Its thickness increases
radially, so the source attenuation is stronger toward the rim. Its negative power is
retained; it is not replaced with a powerless neutral-density plate. The published bulk
transmission information is separate from dispersion and does not identify a vendor glass.

### L9 — Plano-Convex

nd = 1.67128, νd = 56.37. Glass: Unmatched (crown; source nd 1.67128, vd 56.37). f = +44.690740 mm.

The positive plano-convex compensator follows the APD and shares the curved S16 interface.
Its plane rear surface is S17. The L8/L9 pair has calculated net focal length +179.340029 mm,
so it is not afocal. Only L8 is assigned absorption; L9 receives no copied attenuation
coefficient. The source's aperture stop ST2 lies behind this pair.

### L10 — Biconcave Negative

nd = 1.62004, νd = 36.30. Glass: E-F2 (HOYA; coordinate equivalent). f = -39.933804 mm.

The separated biconcave negative lens follows ST2. Its power is evaluated in the complete
rear group rather than taken as proof of a particular field-curvature or distortion
correction. The HOYA E-F2 label is supported as a coordinate equivalent; the patent does
not identify the actual supplier.

### L11 — Biconvex Positive

nd = 1.81538, νd = 36.87. Glass: Unmatched (high-index glass; source nd 1.81538, vd 36.87). f = +49.972461 mm.

The final biconvex positive lens completes Gr2. Its source index and Abbe combination
remains explicitly unmatched in the checked catalogs. The following variable D22 is the
physical final-vertex-to-image gap, not an omitted cover-glass equivalence. No sensor plate
or other unlisted optical element is added.

## Glass Identification and Selection

The patent's ten distinct d-line index/Abbe pairs were compared with the OHARA, HOYA,
Schott, HIKARI, CDGM and Sumita catalogues. Agreement in nd and νd does not identify the
supplier. An equivalent name is given only where a catalogue glass matches closely;
otherwise the element is marked Unmatched.

| Elements | Patent nd / νd | Glass assignment |
|---|---|---|
| L1 | 1.48749 / 70.44 | FC5, HOYA coordinate equivalent |
| L2 | 1.92286 / 20.88 | E-FDS1, HOYA coordinate equivalent |
| L3 | 1.69449 / 29.84 | Unmatched flint |
| L4, L7 | 1.80420 / 46.50 | TAF3, HOYA coordinate equivalent |
| L5 | 1.55102 / 66.41 | Unmatched crown |
| L6 | 1.78472 / 25.72 | SF11, Schott coordinate equivalent; catalog νd 25.76 |
| L8 | 1.50400 / 63.00 | Unmatched neutral-gray APD material |
| L9 | 1.67128 / 56.37 | Unmatched crown |
| L10 | 1.62004 / 36.30 | E-F2, HOYA coordinate equivalent |
| L11 | 1.81538 / 36.87 | Unmatched high-index glass |

The five named glasses, on six elements, carry catalogue dispersion curves; the five
unmatched elements are modeled from nd and νd alone. The patent's nd/νd values are used
unchanged.

The patent gives no nC, nF, ng or partial-dispersion data, and none is assigned. Laowa marks
L4, L5 and L9 as Low Dispersion [2, 5]. Only L5 (νd = 66.41 at nd = 1.55102, in the
phosphate-crown region) is consistent with a low-dispersion crown, and it carries the
viewer's inferred anomalous-partial-dispersion tag. L4 (νd = 46.50, matching the lanthanum
flint TAF3) and L9 (νd = 56.37, in the lanthanum-crown region) are ordinary lanthanum glasses
and are left untagged. Neither apochromatic performance nor anomalous partial dispersion is
established. Elsewhere in this text APD means apodization.

## Focus Mechanism

The patent tabulates two focus states, infinity and 0.15×; it gives no intermediate state
or cam law [1, PDF p. 6, ¶0046].

| Patent state | D11, mm | D22, mm |
|---|---:|---:|
| Infinity | 13.5722 | 39.6422 |
| 0.15× | 7.0000 | 55.5496 |

Relative to the image plane, Gr1 moves 9.3352 mm toward the object and Gr2 moves 15.9074 mm
toward the object, so D11 closes by 6.5722 mm. This agrees with the two objectward arrows in
Figure 1. The stops and the APD element travel with the rear group at fixed internal
spacings.

At the 0.15× spacings the calculated EFL is 98.953260 mm and the lateral magnification is
-0.149981. The paraxial object lies 720.809451 mm ahead of the first vertex, or
855.255251 mm from the image plane. That calculated distance is the model's close-focus
limit. The patent does not print it, and it is not the manufacturer's 0.9 m minimum
focusing distance.

The model interpolates D11 and D22 linearly between the two published states. Intermediate
positions and their distance labels are interpolated, not taken from the production focus
mechanism.

## Apodization and the Two Stop Planes

The patent defines intensity transmission at the d line, 587.56 nm, by

$$T=A^{D/2},\qquad A=0.5,$$

where A is transmission through 2 mm of the neutral-gray glass and D is local thickness in
millimetres. Equivalently, its bulk coefficient is

$$\alpha=-\ln(A)/(2\,\mathrm{mm})=0.346573590280\,\mathrm{mm}^{-1}.$$

For the element's plane front and R = 30 mm rear surface,

$$D(h)=1+30-\sqrt{30^2-h^2}\;\mathrm{mm},$$

with h in millimetres. This reproduces all fifteen samples printed in Figure 3 to their
displayed precision. The center transmits 0.7071; at h = 14 mm the axial thickness is
4.467 mm and the transmission is 0.2126. These are local material values, not whole-lens
T-stops.

The model assigns absorption only to L8 and attenuates each ray over its actual
three-dimensional path through that element: an axial 1 mm path transmits 0.7071, and an
oblique 1.338 mm path transmits 0.6290. The patent's radial table uses axial thickness, so
it is not a substitute for the oblique path length.

The coefficient is applied equally at all wavelengths. This is a limitation: the patent
establishes the d-line relation, not a wavelength-dependent absorption curve. No production
coating loss, diffraction pattern, scatter, integrated T-number or measured bokeh
performance is inferred from the coefficient.

Both of the patent's stop planes are kept:

- S12, ST1: the patent's light-blocking stop, modeled as a fixed clipping plane.
- S18, ST2: the patent's aperture stop, labeled STO; it is the model's one adjustable
  aperture and the only one drawn with the stop symbol.

Both radii are inferred because the patent publishes neither diameter. ST2's 11.923 mm
semi-diameter is set paraxially from F/2.05, so agreement with that f-number is not
independent evidence of the diameter. ST1's 14.5 mm radius passes the full axial beam.
Figure 1 is schematic and does not establish either radius as a manufactured opening.

The manufacturer's catalogue lists separate F-stop and T-stop blade counts. The model does
not reproduce two independently adjustable production diaphragms, their aperture ranges or
their blade shapes.

## Conditional Expressions

The patent's conditions concern the complete focal length F, the standalone APD focal
length FA, and the isolated group focal lengths F1 and F2 [1, ¶0006–0024, ¶0062–0063].

| Patent condition | Calculated Example 1 value | Result |
|---|---:|---|
| 0.5 ≤ abs(F/FA) ≤ 2.5 | 1.718151960006 | Satisfied |
| 1 ≤ abs(F1/F2) ≤ 4 | 3.128117067109 | Satisfied |
| 0.3 ≤ A ≤ 0.7 | 0.5 | Satisfied |

The calculated ratios round to the printed 1.718 and 3.128. The patent relates these bounds
to APD power, relative group power and useful transmission. They do not, by themselves,
prove a measured aberration or bokeh result for the production lens.

## Model Scope and Limitations

The patent table is used without scaling, optimization, added cement layers, a sensor cover
plate or an adjusted image plane. At infinity the front principal plane lies 51.612 mm
behind the first vertex and the rear principal plane 62.623 mm ahead of the last vertex.
The Petzval sum is 0.001324 mm⁻¹.

The table computes to an EFL 0.008 mm longer than the printed 102.2630 mm, and to a paraxial
back focus 0.006 mm longer than the printed 39.6422 mm image gap, which the model keeps.
Rounding of the printed table has not been shown to account for the focal-length difference,
and no value is adjusted to remove it.

The patent publishes no clear apertures, so every semi-diameter is inferred. The values
follow the element heights drawn in Figure 1, scaled from its 85.47 mm vertex span, and each
is at least the height the F/2.05 axial ray reaches on that surface. The concave rear faces
of L3 and L6 stop at 20.7 mm and 15.6 mm, where Figure 1 ends the curves at a flat annulus;
the viewer joins the unequal rims of those two elements with a straight edge where the
figure draws a square block.

S7 is tightly bounded: the axial marginal ray reaches 20.38 mm there, while the default rule
that surface sag may take up at most 90 % of an air gap caps it at 20.53 mm in the 2.08 mm
S6/S7 space. The model uses 20.5 mm. This is a modeling choice, not a recovered mechanical
dimension.

The patent's 11.92° half-field corresponds to the corner of the 135-format frame. The
model's wider geometric field limit of 14.5° follows from its inferred apertures, not from
the patent.

## Sources and References

1. China National Intellectual Property Office, [CN 104991330 B](https://patents.google.com/patent/CN104991330B/en),
   original thirteen-page PDF, granted 2017-10-20. Front-page identity; pp. 3–4 conditions
   and attenuation definition; pp. 5–6 selected prescription and states; pp. 7–8 condition
   summaries; p. 9 Figure 1; p. 11 Figure 3.
2. Venus Optics / Laowa, [2021 Product Catalogue](https://laowa.nl/wp-content/uploads/sites/15/2025/05/LAOWA_Product-catalogue_2021.pdf),
   PDF p. 11, printed p. 19: optical section with its legend, and marketed specifications.
3. HOYA, [Optical Glass Zemax catalogue, 2026-07-07, including obsolete entries](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf):
   FC5, E-FDS1, TAF3 and E-F2 coordinates and formula coefficients.
4. Schott, preferred and special optical glasses, June 2025, revision B,
   [official catalogue archive](https://media.schott.com/api/public/content/a79c07aa61da4c05a2c0bbab93d09a7f?download=true&v=3b65e351):
   SF11 coordinates and Sellmeier coefficients.
5. Venus Optics / Laowa, launch material for the 105mm f/2 Smooth Trans Focus (2016): press
   release as reproduced by [Photography Blog](https://www.photographyblog.com/news/us_pricing_announced_for_laowa_105mm_f_2_stf_lens)
   and construction diagram as reproduced by [Photo Rumors](https://photorumors.com/2016/03/06/venus-optics-laowa-stf-105mm-f2-lens-officially-announced).
   One high-refractive, three low-dispersion and one apodization element; no aspherical element.
