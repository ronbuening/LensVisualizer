## Patent Reference and Design Identification

**Patent:** US 2017/0068075 A1  
**Priority:** September 7, 2015  
**Filed:** August 30, 2016  
**Published:** March 9, 2017  
**Inventor:** Tatsuyuki Onozaki  
**Applicant/Assignee:** Ricoh Imaging Company, Ltd.  
**Title:** *Zoom Lens System*  
**Embodiment analyzed:** Numerical Embodiment 2, Tables 5–8 and Figs. 7–12D  
**Correlation target:** HD PENTAX-D FA 28-105mm F3.5-5.6ED DC WR

The data file treats Numerical Embodiment 2 as the fixed production correlation specified by the job card. Neither the
patent nor the manufacturer identifies the commercial lens by patent number, so the relationship remains a documented
modeling identification rather than a manufacturer-confirmed disclosure.

The identification rests on several convergent features:

1. The patent embodiment covers 28.70–102.38 mm at f/3.6–5.7, while the commercial lens is marked 28–105 mm at
   f/3.5–5.6. The small differences are retained as design-versus-marketing values; no scale factor is applied.
2. Both sources specify 15 physical elements in 11 air-spaced groups.
3. The patent contains two physical aspherical elements with three aspherical surfaces: the hybrid L21 element and the
   two-sided aspherical L51 element. Ricoh describes the product as using two aspherical optical elements.
4. The patent uses a 21.64 mm image height, corresponding to a 35 mm full-frame diagonal, and gives full fields of
   76.2° and 23.4° at the zoom endpoints. Ricoh publishes rounded full-frame angles of 75° and 23.5°.
5. Ricoh announced the KAF3 full-frame zoom on February 18, 2016, after the Japanese priority filing and before the US
   publication.
6. Ricoh describes one ED element. The embodiment contains a 1.49700 / 81.6 positive crown in L33, which is the clear
   ED-class candidate, although the patent does not identify a production vendor or melt.

The production name, K-mount identity, full-frame format, marketed focal and aperture ranges, 0.5 m minimum focus,
0.22× maximum reproduction, nine diaphragm blades, DC autofocus, and weather-resistant construction are manufacturer
facts. The radii, spacings, refractive indices, Abbe numbers, group powers, aspherical coefficients, and exact zoom states
come from the patent and the independently verified data model.

## Optical Architecture

Numerical Embodiment 2 is a positive-lead five-group zoom with the power sequence positive–negative–positive–negative–
positive. The patent places the diaphragm between G2 and G3, 0.910 mm in front of surface 16, and states that the
diaphragm moves with G3 (¶¶0067–0069). The architecture is not a simple variator/compensator arrangement with only
two moving bodies: all five powered groups move toward the object during zooming, while G3 and G5 have identical axial
motion to source precision. The patent specifies this integral motion but does not identify a particular shared barrel
carrier.

| Group | Physical elements | Material entries | Verified functional-group EFL | Principal structural role |
|---|---:|---:|---:|---|
| G1 | 3 | 3 | +116.810260 mm | Weak positive front collector and long-travel front group |
| G2 | 4 | 5 | −18.436798 mm | Strong negative variator; includes the resin/glass hybrid L21 |
| G3 | 3 | 3 | +27.543319 mm | Positive group immediately behind the diaphragm |
| G4 | 2 | 2 | −52.592750 mm | Cemented negative compensating group within the span bounded by G3 and G5 |
| G5 | 3 | 3 | +53.627769 mm | Positive rear group; begins with the double-aspherical L51 |

The optical system contains 15 physical optical elements. The `elements` array contains 16 material entries because the
0.150 mm synthetic-resin layer and the glass body of L21 are represented separately. They form one physical hybrid lens,
not two marketed optical elements. The group EFLs above are functional-group focal lengths calculated from each group's
own surfaces with air on either side. They are distinct from isolated element powers, cemented-net powers, and the
state-dependent effect of each group inside the complete zoom.

### Zoom kinematics

With the image plane fixed, all group motions from wide to tele are objectward. Negative values below denote motion
toward the object relative to the wide state.

| Moving body | Wide-to-tele motion |
|---|---:|
| G1 | −50.530 mm |
| G2 | −15.544 mm |
| Diaphragm and G3 | −31.160 mm |
| G4 | −23.594 mm |
| G5 | −31.160 mm |

No group reverses over the three published states. G3 and G5 move integrally to the source precision. The internal span
between them is preserved by `d20 + d23`, which is 11.566, 11.567, and 11.566 mm at wide, intermediate, and tele.
G4 changes position within that nearly fixed optical span.

The variable gaps perform distinct functions. The G1–G2 separation `d5` grows from 3.978 to 38.964 mm; the G2-to-stop
spacing `d14` contracts from 17.516 to 1.900 mm; `d20` expands while `d23` contracts; and the rear air distance increases
from 43.84 to 75.00 mm. These are published infinity-focus zoom motions, not reconstructed focus motions.

Under the strict architecture tests used by the project, none of the three states is telephoto because total track divided
by EFL is 4.483, 2.731, and 1.750, all greater than one. The state-specific retrofocus test `BFD > EFL` is satisfied at
wide and intermediate focal lengths but not at tele. The complete zoom therefore should not be described simply as a
retrofocus or telephoto design.

## Element-by-Element Analysis

The focal lengths stated in the first lines below are standalone thick-element focal lengths computed with each material
entry isolated in air. They are not the powers of the cemented assemblies or the in-situ zoom groups. Cemented-net and
group powers are stated separately where relevant.

### G1 — Front positive group

#### D1: L11 and L12

**L11:** nd = 1.84666, νd = 23.8. Glass: 847238 optical-glass class, vendor unresolved. Isolated f = −143.482 mm.  
**L12:** nd = 1.81600, νd = 46.6. Glass: 816466 optical-glass class, vendor unresolved. Isolated f = +111.875 mm.

L11 is a weak negative meniscus cemented to the biconvex positive L12. The two isolated powers do not add directly:
the complete cemented D1 stack has a verified net focal length of +501.765 mm in air. D1 is therefore only weakly
positive as an assembly, despite containing a negative front member and a substantially stronger positive rear member.
The cemented interface eliminates an air surface while pairing substantially different dispersion values.

The patent describes the first group as a cemented negative/positive pair followed by a separate positive element
(¶0073). In the complete group, D1 and L13 produce a verified functional-group focal length of +116.810 mm.

#### L13

**L13:** nd = 1.81600, νd = 46.6. Glass: 816466 optical-glass class, vendor unresolved. Isolated f = +152.958 mm.

L13 is a positive meniscus separated from D1 by a 0.100 mm air gap. It supplies the second positive contribution in G1
and completes the weak positive front group. Its glass class is the same as L12, but its separate air boundaries and
meniscus form give it a distinct paraxial contribution.

### G2 — Negative variator group

#### H1: L21R resin layer and L21G glass body

**L21R:** nd = 1.52972, νd = 42.7. Material: unmatched synthetic-resin aspherical layer. Isolated f = −568.439 mm.  
**L21G:** nd = 1.88300, νd = 40.8. Glass: 883408 optical-glass class, vendor unresolved. Isolated f = −21.725 mm.

The front member of G2 is a hybrid negative meniscus. The 0.150 mm resin layer forms aspherical surface 6A and is bonded
to the high-index glass body at surface 7. The patent expressly identifies this construction as a synthetic-resin
aspherical layer on the object side of a glass element (¶¶0018, 0074).

The resin layer has little standalone power compared with the glass substrate. The complete hybrid H1 assembly has a
verified focal length of −20.911 mm in air, close to the glass body's isolated value but not identical. This distinction is
important: L21R and L21G are separate material entries for tracing, while H1 remains one physical optical element.

#### L22

**L22:** nd = 1.72916, νd = 54.7. Glass: 729547 optical-glass class, vendor unresolved. Isolated f = −31.304 mm.

L22 is the second negative element in G2 and is biconcave. The patent assigns the first two negative elements a role in
controlling spherical aberration and coma, with the concave object-side surface of L22 specifically contributing to that
correction (¶¶0096–0097). The statement is a patent design rationale; the data file does not claim a separately measured
aberration contribution for L22 alone.

#### L23

**L23:** nd = 1.72825, νd = 28.5. Glass: 728285 optical-glass class, vendor unresolved. Isolated f = +20.931 mm.

L23 is the sole positive element inside the otherwise negative four-element G2. Its low Abbe number makes it a
high-dispersion positive member rather than an ED element. The patent states that this positive element is used to
counter the negative Petzval and lateral chromatic contributions of the preceding negative elements (¶0097). An air
space before L23 supplies an additional bending degree of freedom, which the patent associates with spherical-aberration
correction (¶0098).

#### L24

**L24:** nd = 1.78800, νd = 47.4. Glass: 788474 optical-glass class, vendor unresolved. Isolated f = −42.048 mm.

L24 is the rear negative meniscus of G2. The patent attributes astigmatism and lateral-chromatic correction to the
concave object-side surface of this member (¶0097). Together, H1, L22, L23, and L24 form the verified −18.437 mm G2
variator group.

### G3 — Positive group behind the diaphragm

#### L31

**L31:** nd = 1.69680, νd = 55.5. Glass: 697555 optical-glass class, vendor unresolved. Isolated f = +38.117 mm.

L31 is a biconvex positive element placed 0.910 mm behind the diaphragm. It is the first powered surface encountered
after the stop and provides a substantial positive contribution within G3.

#### D2: L32 and L33

**L32:** nd = 1.80000, νd = 29.9. Glass: 800299 optical-glass class; OHARA S-NBH55 is a candidate, vendor unresolved.
Isolated f = −32.873 mm.  
**L33:** nd = 1.49700, νd = 81.6. Glass: 497816 ED-crown class; vendor unresolved. Isolated f = +24.248 mm.

L32 and L33 form a cemented negative/positive pair. Their isolated focal lengths are similar in magnitude and opposite
in sign, but the cemented D2 stack remains positive with a verified net focal length of +93.532 mm. In combination with
L31, the complete G3 power is +27.543 mm.

The large dispersion separation between L32 and L33 is consistent with a chromatically corrective cemented pair. L33 is
the only 1.49700 / 81.6 element in the embodiment and is the probable counterpart of Ricoh's marketed ED element. The
patent does not identify its vendor, and the data therefore retains the 497816 class rather than selecting S-FPL51,
FCD1, N-PK52A, or J-FK01A as the production melt.

### G4 — Cemented negative group

#### D3: L41 and L42

**L41:** nd = 1.60311, νd = 60.7. Glass: 603607 optical-glass class, vendor unresolved. Isolated f = −25.344 mm.  
**L42:** nd = 1.84666, νd = 23.8. Glass: 847238 optical-glass class, vendor unresolved. Isolated f = +48.118 mm.

G4 consists only of this cemented negative/positive pair, so its cemented-net and group focal lengths are both
−52.593 mm. The lower-index, higher-Abbe negative element is paired with a high-index, low-Abbe positive meniscus. The
patent states that the cemented fourth group suppresses fluctuations of chromatic aberration and field curvature during
zooming (¶0099).

G4 moves independently within the nearly constant optical span bounded by G3 and G5. Its optical contribution
therefore changes in context as the adjacent air gaps vary, even though the cemented assembly's standalone paraxial
power remains fixed.

### G5 — Positive rear group

#### L51

**L51:** nd = 1.58913, νd = 61.2. Glass: 589612 optical-glass class, vendor unresolved. Isolated f = +31.917 mm.

L51 is a biconvex positive element with aspherical surfaces on both sides, 24A and 25A. It supplies the principal positive
standalone power in G5 before the rear cemented pair. The patent identifies both surfaces as aspherical for the first,
second, and fourth embodiments (¶0084), but does not specify a production molding or polishing process for this glass
element.

#### D4: L52 and L53

**L52:** nd = 1.72047, νd = 34.7. Glass: 720347 optical-glass class; S-NBH8/N-KZFS8 equivalents, vendor unresolved.
Isolated f = −23.101 mm.  
**L53:** nd = 1.61800, νd = 63.4. Glass: 618634 optical-glass class, vendor unresolved. Isolated f = +33.670 mm.

L52 and L53 form a cemented negative/positive rear pair with a standalone net focal length of −70.493 mm. This negative
cemented assembly follows the strongly positive L51, and the complete G5 remains positive at +53.628 mm.

The 720347 class has catalog equivalents associated with anomalous-dispersion glass families, but the patent publishes
no `nC`, `nF`, `ng`, or `dPgF` values. The data therefore does not identify L52 as Ricoh's marketed anomalous-dispersion
element and does not assign anomalous-partial-dispersion behavior to it.

## Glass Identification and Selection

The patent publishes only d-line refractive index and Abbe number. It does not identify a vendor or commercial glass
name. The data consequently uses six-digit classes, an explicit unmatched description for the resin, and limited catalog
cross-references where the `(nd, νd)` pair supports them.

| Stored class or material | nd | νd | Elements | Data-level identification |
|---|---:|---:|---|---|
| 847238 | 1.84666 | 23.8 | L11, L42 | High-index flint class; vendor unresolved |
| 816466 | 1.81600 | 46.6 | L12, L13 | High-index crown/lanthanum class; vendor unresolved |
| Synthetic resin | 1.52972 | 42.7 | L21R | Unmatched hybrid-asphere material |
| 883408 | 1.88300 | 40.8 | L21G | Very-high-index glass class; vendor unresolved |
| 729547 | 1.72916 | 54.7 | L22 | Lanthanum-crown class; vendor unresolved |
| 728285 | 1.72825 | 28.5 | L23 | High-dispersion flint class; vendor unresolved |
| 788474 | 1.78800 | 47.4 | L24 | High-index lanthanum class; vendor unresolved |
| 697555 | 1.69680 | 55.5 | L31 | Lanthanum-crown class; vendor unresolved |
| 800299 | 1.80000 | 29.9 | L32 | OHARA S-NBH55 candidate only; vendor unresolved |
| 497816 | 1.49700 | 81.6 | L33 | ED crown class; probable marketed ED element |
| 603607 | 1.60311 | 60.7 | L41 | Crown class; vendor unresolved |
| 589612 | 1.58913 | 61.2 | L51 | Crown class; vendor unresolved |
| 720347 | 1.72047 | 34.7 | L52 | S-NBH8/N-KZFS8-equivalent class; no APD assignment |
| 618634 | 1.61800 | 63.4 | L53 | Phosphate/high-index crown class; vendor unresolved |

The 497816 class matches the index/Abbe region represented by OHARA S-FPL51, HOYA FCD1, SCHOTT N-PK52A, HIKARI
J-FK01A, and comparable glasses. Because the patent does not name the supplier, the data records the shared ED class
rather than selecting one vendor.

The 720347 class is compatible with OHARA S-NBH8 and SCHOTT N-KZFS8 at d-line precision. Those catalog associations are
not enough to establish the production melt or its partial-dispersion behavior. Ricoh's statement that the commercial
lens uses one anomalous-dispersion element is retained as a product fact, but the model does not map that statement to a
specific element.

No element carries `nC`, `nF`, `ng`, or `dPgF`. Chromatic traces that rely on the final data file must therefore use
catalog resolution where a class can be resolved or fall back to Abbe-based dispersion. The available data does not
support an APO claim.

## Focus Mechanism

The focus status is **NO_INTERNAL_RECONSTRUCTION**. The patent publishes only infinity-focus zoom states and supplies no
finite-object spacing table, focusing-group designation, object-distance series, or close-focus magnification for the
numerical embodiment. Ricoh's 0.5 m minimum focus and 0.22× maximum reproduction are rounded product specifications and
do not uniquely determine an internal optical mechanism.

Accordingly, every `[infinity, close]` pair in the zoom `var` table is identical. The model displays the three published
zoom states without inventing a close-focus group motion. The `closeFocusM: 0.5` field is catalog metadata, not a traced
or solved finite-conjugate state.

Ricoh documents a built-in DC autofocus motor and Quick-Shift manual override. Those are mechanical product features;
they do not identify which optical group moves during focusing. The analysis therefore does not classify the design as
front focus, inner focus, rear focus, or floating focus.

## Aspherical Surfaces

The patent uses the standard even-order rotationally symmetric sag equation:

$$
Z(h)=\frac{c h^2}{1+\sqrt{1-(1+K)c^2h^2}}
+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}+A_{12}h^{12},
$$

where $c=1/R$. The tabulated `K` is the standard conic constant; no conversion is required. All three surfaces have
`K = 0`, so the conic base is spherical and the polynomial terms provide the aspheric departure. Coefficient units are
mm$^{1-p}$ for order $p$.

| Surface | Physical element | K | A4 | A6 | A8 | A10 |
|---|---|---:|---:|---:|---:|---:|
| 6A | L21 resin layer | 0 | +1.315e−5 | +7.792e−9 | −1.085e−10 | +6.816e−13 |
| 24A | L51 object side | 0 | −1.280e−5 | −1.703e−8 | +6.628e−10 | +4.269e−13 |
| 25A | L51 image side | 0 | +9.220e−6 | +2.232e−8 | −1.534e−10 | +3.866e−12 |

A12 is zero because the numerical table omits it and the patent states that unlisted coefficients are zero. A14 is zero
in the data schema because the patent equation publishes no fourteenth-order term. No scaling was applied, so the
coefficients are entered directly and were not transformed.

Surface 6A is the object-side surface of the thin synthetic-resin layer bonded to L21G. Surfaces 24A and 25A are the two
sides of L51. This produces three aspherical surfaces on two physical aspherical optical elements, consistent with the
manufacturer's element count without treating the resin coating as a separate marketed element.

The patent does not publish clear semi-diameters. At the final inferred model apertures, the verified departures from the
base spheres are:

| Surface | Inferred semi-diameter | Model-edge departure | Actual rim angle |
|---|---:|---:|---:|
| 6A | 9.600 mm | +0.114493 mm | 9.467° |
| 24A | 10.300 mm | −0.074701 mm | 9.452° |
| 25A | 10.800 mm | +0.215927 mm | 18.786° |

These are computed model-edge values at inferred apertures. They are not patent-published clear-aperture departures and
should not be used as manufacturing tolerances.

## Chromatic Correction Strategy

The chromatic strategy combines dispersion-separated cemented pairs with one clearly identifiable ED-class positive
element. D2 places the low-Abbe negative L32 against the very-high-Abbe positive L33. D3 reverses the pattern by pairing
a high-Abbe negative element with a low-Abbe positive element. D4 again pairs a lower-Abbe negative member with a
higher-Abbe positive member. These pairings provide chromatic degrees of freedom while preserving the required group
powers.

Within G2, the patent explicitly assigns the positive L23 a role in correcting the lateral chromatic and Petzval effects
of the negative elements ahead of it (¶0097). In G4, the patent attributes suppression of chromatic-aberration and
field-curvature variation during zooming to the cemented pair (¶0099).

Ricoh markets one ED element and one anomalous-dispersion element. The 497816 L33 class is the defensible ED candidate.
No specific element can be assigned the anomalous-dispersion role from `nd` and `νd` alone, and the final data file makes
no such assignment.

## Conditional Expressions

The patent defines the group-power conditions with `f1`, `f3`, `f4`, and `f5` denoting the focal lengths of G1, G3, G4,
and G5.

| Condition | Required interval | Verified value | Result |
|---|---|---:|---|
| (1) `f1 / f5` | `1.60 < f1/f5 < 2.46` | +2.178167 | Satisfied |
| (2) `f4 / f3` | `−2.46 < f4/f3 < −1.80` | −1.909456 | Satisfied |
| (2′) `f4 / f3` | `−2.20 < f4/f3 < −1.80` | −1.909456 | Satisfied |

The parsed text of the publication loses the prime mark and presents condition (2′) as a duplicate condition (2). The
rendered patent page governs: the tighter lower bound is −2.20. The verified ratios above use the independently
recomputed group powers from the final prescription; Table 29 rounds the Embodiment 2 results to 2.18 and −1.91.

## Modeling and Source-Normalization Disclosures

- **Scaling:** No uniform scale was applied. All radii, spacings, image-plane distances, and aspherical coefficients are
  the published Embodiment 2 values.
- **Marketing versus design:** The commercial 28–105 mm f/3.5–5.6 markings remain separate from the patent's exact
  28.70–102.38 mm f/3.6–5.7 states. The difference is not treated as a scale transformation.
- **Stop:** The stop position is patent-published. Its physical semi-diameter, 8.106239 mm, is inferred as the mean of the
  three radii independently required by the printed f-numbers.
- **Semi-diameters:** The patent does not publish clear apertures. The model semi-diameters were inferred from on-axis and
  off-axis paraxial envelopes across all three states, expanded by approximately 5–8%, and checked against Figs. 7 and
  10. They are modeling values, not source facts.
- **Focus:** No internal focus motion was reconstructed. The 0.5 m product specification is metadata only.
- **Spectral data:** The patent publishes `nd` and `νd` but not `nC`, `nF`, `ng`, or `dPgF`; none were invented.
- **Excluded planes:** No sensor cover glass, filter, inactive dummy plane, flare cutter, or mechanical plane occurs in
  the selected prescription. No plate correction or air-equivalent replacement is required.
- **OCR normalization:** Leading `1.` digits and decimal punctuation damaged in extracted Tables 5–8 were re-read from
  rendered pages. The condition (2′) prime was likewise recovered from the rendered page.
- **Published rounding:** The intermediate track sums to 150.187 mm and rounds to the table's 150.19 mm. The computed
  tele EFL and BFD are 102.3664 mm and 74.9880 mm versus the printed 102.38 mm and 75.00 mm; the source radii and
  spacings were not altered to force agreement.

## Verification Summary

The final TypeScript arrays were re-evaluated with sequential height/reduced-angle tracing and an independent ABCD
matrix multiplication. The maximum matrix disagreement over the three zoom states is 1.421e−14.

| State | Computed EFL | Patent EFL | Computed BFD | Patent BFD | Summed track |
|---|---:|---:|---:|---:|---:|
| Wide | 28.699795 mm | 28.70 mm | 43.834965 mm | 43.84 mm | 128.650 mm |
| Intermediate | 54.989484 mm | 54.99 mm | 57.554152 mm | 57.56 mm | 150.187 mm |
| Tele | 102.366405 mm | 102.38 mm | 74.988048 mm | 75.00 mm | 179.180 mm |

The fixed 8.106239 mm stop radius gives entrance-pupil radii of 3.976727, 6.018664, and 8.940170 mm. The corresponding
modeled f-numbers are f/3.6085, f/4.5682, and f/5.7251, consistent with the patent's one-decimal f/3.6, f/4.6, and f/5.7
values.

Surface-by-surface Petzval calculation using $\phi/(n n')$ yields a total of +1.254586e−3 mm$^{-1}$ and a signed
Petzval radius of −797.075 mm under the model's sign convention. This is a paraxial field-curvature quantity, not a
measurement of final image-plane flatness after higher-order correction.

The inferred apertures pass the geometry checks for every defined zoom state. The minimum non-stop ray clearance is
0.465134 mm, the minimum element rim thickness is 0.191084 mm in the L21 resin layer, the maximum actual rim angle is
41.457°, and the largest cross-gap intrusion uses 67.816% of its physical gap. The aspherical conic limits are
unrestrictive because all three surfaces use `K = 0`.

## Sources

1. US 2017/0068075 A1, *Zoom Lens System*, Tatsuyuki Onozaki, Ricoh Imaging Company, Ltd.; Numerical Embodiment 2,
   Tables 5–8 and Figs. 7–12D.
2. Ricoh Imaging product page, “HD PENTAX-D FA 28-105mmF3.5-5.6ED DC WR”:
   https://www.ricoh-imaging.co.jp/english/products/lens/k/standard/hdpentax-dfa-28-105/
3. Ricoh Imaging launch release, February 18, 2016:
   https://news.ricoh-imaging.co.jp/rim_info2/2016/20160218_019316.html
4. OHARA Optical Glass Pocket Catalog, May 2023:
   https://oharacorp.com/wp-content/uploads/2023/06/ohara-pocket-catalog-2023-05.pdf
5. HIKARI Optical Glass Catalog, June 1, 2025:
   https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf
6. SCHOTT optical-glass catalog and downloads:
   https://www.schott.com/en-gb/products/optical-glass-p1000267/downloads
7. HOYA optical-glass catalog and official cross-reference index:
   https://www.hoyaoptics.eu/download/optical-glass-catalogue and
   https://www.hoyaoptics.eu/glass-cross-reference-index
