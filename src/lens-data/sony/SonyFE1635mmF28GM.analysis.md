# Sony FE 16-35mm f/2.8 GM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** WO 2018/139160 A1  
**Application Number:** PCT/JP2017/046864  
**Priority:** JP 2017-011423, filed 25 January 2017  
**Filed:** 27 December 2017  
**Published:** 2 August 2018  
**Inventors:** Kouji Katou, Hiromichi Nose  
**Applicant:** Sony Corporation  
**Title:** Zoom Lens and Imaging Device (ズームレンズおよび撮像装置)  
**Classification:** G02B 15/20, G02B 13/18  
**Embodiment analyzed:** Numerical Example 4 (数値実施例4), Fig. 13, Tables 13–16; conditions in Tables 21–22

The publication is a Japanese-language PCT application with five numerical examples of a five-group negative-lead
wide-angle zoom whose second and fourth groups both move for focusing. Example 4 is the prescription that corresponds
most closely to the production Sony FE 16-35mm F2.8 GM (SEL1635GM). The correlation rests on convergent evidence; Sony
does not publish the patent number, so it is an identification by the author, not a manufacturer confirmation.

1. **Element and group count.** Sony specifies 16 elements in 13 groups. Example 4 has 16 glass elements in 13
   air-separated groups when the 0.150 mm resin layer on L2 is counted as part of L2. It is the only example in the
   patent with that count: Examples 1 and 3 have 15 elements, and Examples 2 and 5 cement L3 to L4 (12 groups).
2. **Aspherical elements.** Sony's release states five aspherical elements, two of them XA (extreme aspherical), and
   identifies the front element as an XA element. Example 4 has seven aspherical surfaces on exactly five elements: L1
   (both faces), the L2 hybrid (resin face), L7 (both faces), L10 and L16 ([0113]). L1 is the front element, so the
   release's front XA element is consistent with L1. The patent does not use the XA designation; Sony's optical
   construction diagram marks the front element and a thin element just ahead of the stop as XA, positions that
   correspond to L1 and L7, and shows the other three aspherical elements where Example 4 places L2, L10 and L16.
3. **Low-dispersion elements.** Sony states two ED elements. Example 4 contains two elements with fluorophosphate-class
   coordinates, L11 (νd 75.5) and L13 (νd 81.6), and Sony's diagram places both ED elements in the rear group. L9
   (νd 70.4) is a fluor-crown coordinate that is conventionally not marketed as ED; this reading is an inference.
4. **Focus.** Sony describes a floating focus system with two independently driven groups and two DDSSM motors. The
   patent moves G2 and G4 toward the image for close focus ([0021], [0060]).
5. **Focal length, aperture and field.** Table 16 gives f = 16.5 / 22.91 / 33.95 mm, Fno = 2.88 at every station, and
   ω = 53.95° / 43.14° / 31.71°. The full field 2ω = 107.90°–63.42° agrees with Sony's 107°–63° angle of view. The image
   height in Figs. 14–16 is Y = 21.63 mm, the 35 mm full-frame half-diagonal.
6. **Timing.** The priority date (25 January 2017) precedes Sony's announcement of 17 May 2017.

The marketed 35 mm tele end is about 3 % longer than the patent's 33.95 mm. That difference is ordinary marketing
rounding and is kept separate from the design values throughout.

## Optical Architecture

Example 4 is a negative-positive-positive-positive-negative five-group zoom ([0018]). It is a retrofocus layout at
every station: the air-equivalent back focal distance from the last lens vertex (s31, cover glass included) is
20.18 / 27.93 / 38.48 mm at wide / intermediate / tele, which is 1.22, 1.22 and 1.13 times the computed EFL. The total
track from s1 to the image is 154.52 / 146.01 / 140.08 mm, so the optical system is longest at 16 mm.

| Group | Elements | Group focal length (computed) | Table 22 | Function |
|---|---|---:|---:|---|
| G1 | L1–L4 | −19.52 mm | — | Negative front group: field acceptance, distortion and field curvature |
| G2 | L5 | +66.53 mm | 66.53 | First focus group; main zooming lens |
| G3 | L6, L7 | +360.4 mm | — | Nearly afocal pre-stop corrector; carries the stop |
| G4 | L8–L10 | +42.63 mm | 42.63 | Second focus group; post-stop converging group |
| G5 | L11–L16 | −80.40 mm | −80.40 | Negative rear group: chromatic, field and off-axis correction |

The aperture stop (s16, IRIS) lies 3.100 mm behind L7 and therefore moves with G3. All five inter-group spacings vary.
Measured as vertex positions relative to the fixed image plane, from wide to tele:

| Group | Motion wide → tele | Note |
|---|---:|---|
| G1 | +14.44 mm (toward the image) | monotonic |
| G2 | −2.92 mm (toward the object) | reverses: −105.93 → −109.05 → −108.85 mm |
| G3 and stop | −14.86 mm | |
| G4 | −23.27 mm | |
| G5 | −18.41 mm | |

This reproduces the zoom kinematics stated in [0020] and [0059]: G2–G5 end farther toward the object at tele, and G1
ends farther toward the image. G4 closes on the stop (D(3) falls from 10.91 to 2.50 mm), while D(5) behind G5 grows
from 17.42 to 35.83 mm.

The defining choices are the split floating focus and the distribution of aspherical correction between the extreme
front and the extreme rear of the system. G2 is a single biconvex element of modest power working at a lateral
magnification of 6.320 at wide and 2.386 at tele. G4 is the stronger positive group behind the stop. The patent's
conditional expressions govern the power balance between the two focus groups and the rear group (see Conditional
Expressions).

## Element-by-Element Analysis

Focal lengths below are standalone thick-lens values in air, computed from each element's two radii and centre
thickness. Inside a cemented unit the in-situ contribution differs because the junction does not refract into air; the
net in-air value of each cemented unit is given where relevant. Aberration contributions quoted in this section are
computed from the prescription (third-order and primary-chromatic surface sums, or real-ray counterfactuals); the
method and its limits are described under Chromatic Correction Strategy and Aspherical Surfaces.

### L1 — Negative Meniscus, Two Aspherical Surfaces

nd = 1.768015, νd = 49.2. Glass: M-TAF101 (HOYA) class. f = −38.4 mm.

L1 is the largest element (modeled semi-diameter 29.2 mm) and the first of G1's three negative members. Both faces are
aspherical. The front surface 1A carries a conic constant K = +1.000 with a substantial even polynomial, and its
departure from the vertex sphere reaches +3.863 mm at the modeled rim. The rear surface 2A (K = +0.205) is the deep
concave face that accepts the 108° field.

Replacing 1A and 2A by their vertex spheres, with everything else unchanged, moves the real-ray distortion at the wide
49.56° field point from −5.05 % to −25.3 % and displaces the tangential focus there by +6.37 mm. L1's aspheres are
therefore the principal control of wide-end barrel distortion, as [0038]–[0039] describe for the aspheric front group.
The coordinate matches HOYA's moldable M-TAF101; whether the production element is molded is not established by the
sources. Sony's release identifies the front element as an XA element (see Patent Reference).

### L2 — Hybrid Negative Meniscus (Glass Body + Aspherical Resin Layer)

L2 glass: nd = 1.834805, νd = 42.7. Glass: S-LAH55V (OHARA) / TAFD5F (HOYA) class. f = −104.9 mm.  
L2 resin: nd = 1.5342, νd = 41.7. Glass: Unmatched (UV-cured resin layer). f = +2723 mm.  
Composite L2 (s3–s5): f = −108.8 mm.

The patent states that L2 is a hybrid lens (複合非球面, [0113]). A 0.150 mm resin layer on the image side of a
spherical lanthanum-flint meniscus carries the only aspherical surface, 5A. The resin layer has negligible power on
its own. The arrangement places an aspherical profile on the concave rear face while the high-index glass substrate
remains spherical. The data file models the glass body and the resin layer as two entries so that the resin
index applies between s4 and s5, which is why it lists 17 element entries for 16 physical elements.

The 5A counterfactual acts mainly on the outermost wide-angle field: without it the tangential focus at 49.56° moves
from +0.33 mm to −4.32 mm relative to the image plane, while distortion changes by about one percentage point.

### L3 — Biconcave Negative

nd = 1.7725, νd = 49.6. Glass: S-LAH66 (OHARA) / TAF1 (HOYA) class. f = −44.4 mm.

L3 completes G1's negative power. At the tele end it is the largest third-order spherical-aberration contributor in
G1 (+3385 µm transverse at f/2.88), and L4 behind it contributes with the opposite sign (−2961 µm).

### L4 — Positive Meniscus

nd = 1.912366, νd = 21.9. Glass: Unmatched (dense titanium flint class). f = +72.6 mm.

L4 is the only positive element of G1 and its only high-dispersion one. In the primary-chromatic decomposition at wide
it contributes +311 µm of lateral colour (F−C at Y = 21.63 mm), against a combined −539 µm from L1, the L2 hybrid and
L3. It is therefore the chromatic partner of the front negative elements. No catalog glass closely matches this coordinate.

### L5 — Biconvex Positive (Focus Group G2)

nd = 1.658436, νd = 50.9. Glass: S-BSM25 (OHARA) / BACED5 (HOYA) class. f = +66.5 mm.

L5 alone forms G2, the first focus group and the principal zooming element. Its standalone focal length equals the
group value 66.53 mm in Table 22. A single-element focus group is consistent with the patent's emphasis on a light
focus unit ([0025]). It contributes +169 µm of primary lateral colour at wide, the same sign as L4.

### L6 — Negative Meniscus, Convex to the Image

nd = 1.834287, νd = 39.1. Glass: Unmatched (lanthanum flint class). f = −82.3 mm.

L6 leads G3. Paired with the positive L7 it produces the nearly afocal group (+360.4 mm) that moves with the stop. No
catalog glass closely matches the coordinate.

### L7 — Biconvex Positive, Two Aspherical Surfaces

nd = 1.58313, νd = 59.5. Glass: M-BACD12 (HOYA) / L-BAL42 (OHARA) class. f = +68.1 mm.

L7 sits immediately ahead of the stop, where the axial and off-axis beams nearly coincide. Its aspherical departures
are modest (−0.425 mm on 14A and −0.222 mm on 15A at the modeled rim), but their effect on the axial beam is large:
replacing both faces by their vertex spheres changes the f/2.88 marginal-ray transverse aberration at tele from +20 µm
to −3145 µm. Among the aspherical surfaces, L7's pair has the largest effect on spherical aberration and almost none on
distortion. Sony's diagram marks this position as the second XA element.

### L8–L9 — Cemented Doublet in G4

L8: nd = 1.723417, νd = 38.0. Glass: S-BAH28 (OHARA) / BAFD8 (HOYA) class. f = −87.3 mm.  
L9: nd = 1.487489, νd = 70.4. Glass: S-FSL5 (OHARA) / FC5 (HOYA) class. f = +56.0 mm.  
Doublet (s17–s19): f = +171.5 mm.

The doublet is a weak positive meniscus pair convex to the object, placed just behind the stop. Its cemented junction
(R = 22.03 mm) carries strong, opposing chromatic terms, and the net primary lateral-colour contribution of the doublet
at wide is only +20 µm. G4 as a whole is not chromatically neutral (−107 µm lateral and −656 µm axial colour at wide),
so the doublet moderates rather than removes the focus group's colour.

### L10 — Biconvex Positive, Rear Aspherical Surface

nd = 1.6935, νd = 53.2. Glass: M-LAC130 (HOYA) / J-LAK13 (HIKARI) class. f = +52.5 mm.

L10 supplies most of G4's power. Its rear aspherical surface 21A is weak in departure (+0.148 mm at the modeled rim)
but, like L7, acts strongly on the axial beam: without it the f/2.88 marginal-ray aberration at tele becomes −2104 µm.
Because 21A moves with the focus group, it can contribute to holding spherical aberration as G4 travels, which is the
concern of condition (1) ([0027]); the patent does not publish close-focus data to quantify this.

### L11–L12 — Cemented Doublet, First Unit of G5

L11: nd = 1.550084, νd = 75.5. Glass: FCD705 (HOYA) class, fluorophosphate. f = +39.4 mm.  
L12: nd = 1.901747, νd = 34.6. Glass: Unmatched (lanthanum dense flint class). f = −22.0 mm.  
Doublet (s22–s24): f = −52.0 mm.

This net-negative doublet pairs a low-dispersion positive element with a high-index dense flint. It is the largest
single source of corrective lateral colour in the rear group: +325 µm at wide, opposing G1. The correction belongs to
the doublet as a unit; L11's own outer surface contributes with the same sign as G1, and the corrective term arises at
the cemented junction from the dispersion difference between the two glasses. This is the cemented rear-group lens the
patent recommends for chromatic correction ([0040]–[0041]).

### L13 — Biconvex Positive

nd = 1.496997, νd = 81.6. Glass: S-FPL51 (OHARA) / FCD1 (HOYA) class, fluorophosphate. f = +34.1 mm.

L13 is the strongest positive singlet of G5. Table 13 prints its index as 1.969970; the model uses 1.496997, the value
of the same position in Examples 2 and 5 (see Model Scope and Limitations). The low index and low dispersion matter in
different ways. The low index gives L13 the largest single positive Petzval term in the design (+20.2 × 10⁻³ mm⁻¹),
and the low dispersion keeps its chromatic contribution small for its power (−135 µm of lateral colour at wide).

### L14–L15 — Cemented Doublet, Second Unit of G5

L14: nd = 1.92286, νd = 20.9. Glass: E-FDS1 (HOYA) / H-ZF62 (CDGM) class. f = +25.1 mm.  
L15: nd = 1.903658, νd = 31.3. Glass: TAFD25 (HOYA) / H-ZLaF75A (CDGM) class. f = −18.8 mm.  
Doublet (s27–s29): f = −81.9 mm.

Both components are very high-index glasses, and here the positive element is the more dispersive one. The doublet is
therefore not a conventional achromat. Its net primary lateral colour is modest (−97 µm at wide), and it supplies
negative power with a net Petzval contribution of −6.8 × 10⁻³ mm⁻¹.

### L16 — Biconcave Negative, Front Aspherical Surface

nd = 1.882023, νd = 37.2. Glass: M-TAFD307 (HOYA) class. f = −79.6 mm.

L16 is the last element. Its Petzval contribution (−6.7 × 10⁻³ mm⁻¹) flattens the field, and its front aspherical
surface 30A (−1.173 mm departure at the 13.0 mm modeled rim) has the largest off-axis leverage of any surface in
the rear group. Replacing 30A by its vertex sphere moves the wide 49.56° distortion from −5.05 % to −18.1 % and the
tangential focus there by −9.30 mm; at tele 31.71° the tangential focus moves by −18.10 mm. Both the L1 aspheres and 30A act
against barrel distortion, but their effects on the tangential field are of opposite sign, so the front and rear
aspheres work as a balanced pair rather than as independent correctors.

## Glass Identification and Selection

The patent gives nd and νd only. Glass names below are coordinate-compatible catalog glasses from OHARA, HOYA, Schott,
HIKARI, CDGM and Sumita data; a name does not establish supplier or melt identity.

| Element | nd | νd | Catalog identification | Role |
|---|---:|---:|---|---|
| L1 | 1.768015 | 49.2 | M-TAF101 (HOYA) class | Front asphere, lanthanum flint |
| L2 | 1.834805 | 42.7 | S-LAH55V (OHARA) / TAFD5F (HOYA) class | Hybrid substrate |
| L2 resin | 1.5342 | 41.7 | Unmatched (UV-cured resin) | Aspherical layer |
| L3 | 1.7725 | 49.6 | S-LAH66 (OHARA) / TAF1 (HOYA) class | G1 negative power |
| L4 | 1.912366 | 21.9 | Unmatched (dense titanium flint class) | G1 chromatic partner |
| L5 | 1.658436 | 50.9 | S-BSM25 (OHARA) / BACED5 (HOYA) class | Focus group G2 |
| L6 | 1.834287 | 39.1 | Unmatched (lanthanum flint class) | G3 negative |
| L7 | 1.58313 | 59.5 | M-BACD12 (HOYA) / L-BAL42 (OHARA) class | Pre-stop asphere |
| L8 | 1.723417 | 38.0 | S-BAH28 (OHARA) / BAFD8 (HOYA) class | G4 doublet flint |
| L9 | 1.487489 | 70.4 | S-FSL5 (OHARA) / FC5 (HOYA) class | G4 doublet crown |
| L10 | 1.6935 | 53.2 | M-LAC130 (HOYA) / J-LAK13 (HIKARI) class | G4 asphere |
| L11 | 1.550084 | 75.5 | FCD705 (HOYA) class | Low-dispersion crown, G5 |
| L12 | 1.901747 | 34.6 | Unmatched (lanthanum dense flint class) | G5 doublet flint |
| L13 | 1.496997 | 81.6 | S-FPL51 (OHARA) / FCD1 (HOYA) class | Low-dispersion positive, G5 |
| L14 | 1.92286 | 20.9 | E-FDS1 (HOYA) / H-ZF62 (CDGM) class | High-dispersion positive |
| L15 | 1.903658 | 31.3 | TAFD25 (HOYA) / H-ZLaF75A (CDGM) class | High-index negative |
| L16 | 1.882023 | 37.2 | M-TAFD307 (HOYA) class | Rear asphere |

Three observations follow from the palette. First, every all-glass aspherical element (L1, L7, L10, L16) has a
coordinate matching a HOYA M-series moldable glass; this is consistent with precision-molded aspheres but does not prove
the production process. Second, high-index glass is used heavily: seven of the sixteen elements have nd > 1.83, which
allows a given power with shallower curvature. Third, the two fluorophosphate-class coordinates sit in the rear group,
not in G1.

Catalog partial-dispersion values for the named candidate rows, computed from catalog nF, nC and ng against the Schott
normal line, are ΔPgF ≈ +0.024 for FCD705 (L11), +0.032 for FCD1 (L13) and +0.030 for E-FDS1 (L14). These are
properties of the catalog glasses, not patent data. The patent publishes no line indices, so no secondary-spectrum or
apochromatic performance claim is made for the design.

## Focus Mechanism

The patent's focus is a floating inner focus: when the object distance changes from infinity to close, G2 (L5) and G4
(L8–L10) both move toward the image ([0021], [0060]), while G1, G3 and G5 stay fixed at a given zoom setting. The
patent's rationale is that a single focusing lens cannot hold aberrations from infinity to close at F2.8, while
focusing with three or more groups makes fast autofocus difficult ([0025]). The patent also seeks a small change of image
height while the focus group oscillates during mirrorless autofocus, since a large change would be visible ([0004]). Sony's production lens drives the two focus groups with two DDSSM
piezoelectric motors.

The patent publishes infinity states only, at three zoom stations, and no close-focus spacings for any example. The
data file therefore has **no internal focus travel**: its close-focus spacings repeat the infinity spacings, and the
0.28 m minimum focus distance is Sony's value. A paraxial analysis of the admissible motions at 0.28 m from the image
plane shows why the split cannot be reconstructed:

| Station | G2 travel if G4 is fixed | Magnification range, both groups image-ward |
|---|---:|---:|
| Wide | 2.58 mm | 0.093–0.110× |
| Intermediate | 2.67 mm | 0.118–0.145× |
| Tele | 2.77 mm | 0.172–0.208× |

G4 alone cannot focus closer, since it would have to move toward the object, contrary to [0021]. Sony's 0.19×
maximum magnification is reachable only at tele, where it selects G2 = 5.30 mm and G4 = 3.30 mm of image-ward travel;
that ratio cannot be reached at the other stations within their gap limits. The two-group focus law across the zoom
range is therefore undetermined by the available sources.

## Aspherical Surfaces

Seven surfaces are aspherical: 1A and 2A (L1), 5A (L2 resin layer), 14A and 15A (L7), 21A (L10) and 30A (L16). The
patent's equation ([0057]) is printed as

$$x = \frac{y^2c^2}{1+\sqrt{1-(1+K)y^2c^2}} + \sum A_i y^i .$$

The numerator $y^2c^2$ is dimensionally inconsistent and is read as the standard $y^2c$; real chief rays traced with
that reading land on the published image heights of Figs. 14–16. The conic term uses the $(1+K)$ form, so the tabulated
K is the standard conic constant (K = 0 is a sphere) and is used without conversion. Coefficients are even orders A4–A12
as printed in Table 15:

| Surface | Element | K | A4 | A6 | A8 | A10 | A12 |
|---|---|---:|---:|---:|---:|---:|---:|
| 1A | L1 front | 1.000 | 1.68E-05 | −2.85E-08 | 2.87E-11 | −1.66E-14 | 4.23E-18 |
| 2A | L1 rear | 0.205 | 1.13E-05 | 6.52E-09 | −2.52E-11 | −5.69E-14 | 0 |
| 5A | L2 resin | −0.810 | 9.84E-06 | −2.71E-08 | 5.12E-11 | 8.45E-14 | 0 |
| 14A | L7 front | 0 | −5.38E-06 | −7.41E-09 | 0 | 0 | 0 |
| 15A | L7 rear | 0 | −2.09E-06 | −7.10E-09 | 1.14E-12 | 0 | 0 |
| 21A | L10 rear | 0 | 3.62E-06 | −3.59E-09 | −3.40E-12 | 0 | 0 |
| 30A | L16 front | 0 | −2.77E-05 | −3.94E-08 | −2.35E-10 | 0 | 0 |

The patent does not tabulate clear apertures. Departures from the vertex sphere at the modeled semi-diameters (scaled
from Fig. 13) are +3.863 mm (1A at 29.2 mm), +1.467 mm (2A), +1.226 mm (5A), −0.425 mm (14A), −0.222 mm (15A),
+0.148 mm (21A) and −1.173 mm (30A at 13.0 mm). Surface 2A has a positive conic, so its conic domain limit is |R|/√(1+K) = 24.70 mm;
the modeled semi-diameter stays below it.

The table below measures each aspheric contribution by a counterfactual: the listed surfaces are replaced by their
vertex spheres, all other values unchanged, and real meridional rays are traced to the image plane. Paraxial quantities
do not change. The result is not an alternative design; it shows how much each aspheric profile is doing in the
published state.

| Surfaces replaced | Wide 49.56°: distortion / tangential focus | Tele 31.71°: distortion / tangential focus | Tele f/2.88 marginal ray |
|---|---|---|---:|
| none (design) | −5.05 % / +0.33 mm | +3.03 % / +0.13 mm | +20 µm |
| 1A + 2A (L1) | −25.34 % / +6.37 mm | −3.89 % / +12.13 mm | +75 µm |
| 5A (L2 resin) | −4.07 % / −4.32 mm | +3.51 % / −0.11 mm | −51 µm |
| 14A + 15A (L7) | −5.02 % / −0.20 mm | +3.05 % / −0.51 mm | −3145 µm |
| 21A (L10) | −5.72 % / −2.63 mm | +2.95 % / −1.71 mm | −2104 µm |
| 30A (L16) | −18.09 % / −9.30 mm | −6.43 % / −18.10 mm | −1649 µm |

Distortion is the real chief-ray height relative to f·tan A at the published angle A. Tangential focus is measured along
the axis from the image plane. The marginal-ray value is the transverse aberration at the paraxial image plane.

The division of labour is clear. The front pair (1A, 2A) and the rear surface 30A both act against barrel distortion
and have large, opposite-signed effects on the tangential field. The near-stop surfaces of L7 and L10 control spherical aberration and have little
effect on distortion. The resin asphere 5A acts mainly on the outer wide-angle field. This matches the patent's stated
purpose for aspheres in G1, which is to correct distortion and field curvature compactly ([0039]).

## Chromatic Correction Strategy

The analysis below uses primary (first-order) chromatic coefficients computed from nd and νd alone, with the F−C
dispersion of each glass taken as (nd − 1)/νd. These coefficients are exact to first order in dispersion but say nothing
about secondary spectrum. Lateral colour is evaluated at the full image height Y = 21.63 mm; positive and negative signs
indicate opposing contributions.

| Unit | Lateral colour, wide (µm) | Lateral colour, tele (µm) |
|---|---:|---:|
| L1 | −239 | −208 |
| L2 hybrid | −88 | −70 |
| L3 | −212 | −145 |
| L4 | +311 | +223 |
| L5 (G2) | +169 | +93 |
| L6 + L7 (G3) | −12 | −8 |
| L8+L9 | +20 | +17 |
| L10 | −127 | −75 |
| L11+L12 | +325 | +311 |
| L13 | −135 | −136 |
| L14+L15 | −97 | −108 |
| L16 | +82 | +104 |
| Total, incl. cover glass | −8.0 | −4.6 |

The negative front group generates a large lateral-colour term (G1: −228 µm at wide). It is balanced about equally by
two distant correctors: L4 inside G1 together with L5 in G2, and the L11+L12 doublet at the front of G5. The second
corrector holds nearly constant through the zoom range (+325 to +311 µm), while L5's contribution falls by almost half
(+169 to +93 µm). The low-dispersion elements L11 and L13 are not themselves the correctors: their value is that
they supply positive power in the rear group while adding little colour, which leaves the flint L12 free to supply the
corrective term.

The primary axial colour (F−C) of the whole system is −69 µm at wide, +35 µm at intermediate and +50 µm at tele. It is the
small residual of large group terms that change at different rates with zoom: from wide to tele, G2 goes from −652 to
−1297 µm, G4 from −656 to −1809 µm, and G5 from +955 to +2277 µm.

## Petzval Sum and Spherical-Aberration Balance

The Petzval sum, computed surface by surface as Σφ/(n·n′), is +0.001754 mm⁻¹, an equivalent Petzval radius of about
−570 mm. It is independent of zoom position. By group (×10⁻³ mm⁻¹): G1 −25.7, G2 +9.1, G3 +2.6, G4 +16.1 and G5 −0.4.
The negative front group alone supplies the negative Petzval contribution that offsets the three positive groups. G5,
despite its negative power, is nearly Petzval-neutral, because its positive elements are low-index (L13: +20.2) and its
negative elements are high-index.

The third-order spherical-aberration contributions show the same pattern of large opposing terms. At tele, with the
full f/2.88 aperture, the transverse third-order contributions are +1500 µm (G1), −1193 µm (G2), −1786 µm (G3),
−51 µm (G4) and +1604 µm (G5), summing to +76 µm. The real f/2.88 marginal ray at tele lands within +20 µm of the
paraxial focus, the difference reflecting higher-order terms. Third-order quantities are reported here only to show the
balance between groups; they are not predictions of image quality at full field.

## Conditional Expressions

The patent claims four conditions ([0026]–[0037]) and states narrower, more desirable ranges for each. Example 4 lies
inside both.

| Condition | Definition | Claimed range | Preferred range | Table 21 | Computed |
|---|---|---|---|---:|---:|
| (1) | \|2G/4G\| | 0.5–2.0 | 0.6–1.7 | 1.56 | 1.561 |
| (2) | t_2β/w_2β | −0.5–0.6 | −0.3–0.5 | 0.38 | 0.377 |
| (3) | 2G/(fw·ft)^½ | 2.1–3.0 | 2.2–2.9 | 2.81 | 2.813 |
| (4) | \|4G/5G\| | 0.3–1.6 | 0.35–1.5 | 0.53 | 0.530 |

The computed column uses the model's group focal lengths and G2 magnifications. For condition (3) it follows the patent
in using the Table 22 values fw = 16.48 mm and ft = 33.95 mm; with the model's own computed EFLs it evaluates to 2.806,
which rounds to the same printed 2.81.

Condition (1) sets the power of G4 relative to G2. The patent states that too weak a G4 makes spherical-aberration
correction during focus difficult and lengthens its travel, while too strong a G4 makes focus control too sensitive
([0027]). Condition (2) apportions the zoom ratio carried by G2; the computed G2 magnifications are 6.320 at wide and
2.386 at tele against 6.31 and 2.38 in Table 22 ([0030]). Condition (3) sets G2's power relative to the zoom range; too
strong a G2 shortens the wide-end back focus and forces a stronger G1, worsening distortion ([0033]). Condition (4)
balances G4 against G5; too strong a G5 makes coma correction difficult ([0036]).

## Model Scope and Limitations

- **Source correction, surface 25.** Table 13 prints Nd = 1.969970 with νd = 81.6 for L13. No catalog glass lies near
  that coordinate. With the printed value the system computes f = 7.91 mm at wide instead of 16.5 mm, and G5 becomes
  positive (+48.5 mm) although claim 1 requires a negative fifth group and Table 22 gives −80.40 mm. The same position
  in Examples 2 and 5 holds 1.496997 / 81.6, and that value reproduces Tables 16 and 22. The model uses 1.496997; the
  printed value is retained in the source record.
- **Focal length.** The computed EFL is 16.52 / 22.96 / 34.02 mm, which is +0.23 %, +0.23 % and +0.22 % above the
  published 16.48 (Table 22 fw) / 22.91 / 33.95 mm. The paraxial image falls +0.108 / +0.086 / +0.005 mm beyond the
  published BF of 1.00 mm. No single prescription value explains this uniform residual; the printed prescription is
  used unchanged and the difference is disclosed rather than adjusted away. G2, G4, G5 and all four conditions
  reproduce Tables 21–22 at printed precision.
- **Field points.** Real chief rays through the stop centre land within −0.038 to +0.045 mm of the printed image heights
  at all nine published (Y, A) points of Figs. 14–16; a stop-centre chief ray exists at every published field point. At
  the wide full field (53.95°) the chief ray meets the steep rear face 2A at a height of 19.42 mm, inside that surface's
  24.70 mm conic-domain limit, and reaches Y = 21.63 mm at 54.00°, within 0.05° of Table 16.
- **Distortion.** Real-ray distortion is −5.05 % at wide (49.56°), +0.73 % at intermediate (43.14°) and +3.03 % at tele
  (31.71°), relative to the computed focal length. This matches the barrel-to-pincushion progression of Figs. 14–16.
- **Modeled quantities.** The patent publishes neither semi-diameters nor a stop diameter. Semi-diameters are scaled
  from the to-scale Fig. 13 section (13.13 px/mm, about ±0.15 mm reading uncertainty); L3 stays 0.4 mm under
  the drawn rim for the gap-sag limit, and L15's rear face stops at 12.2 mm because it would meet L16's front face
  near 12.6 mm; L16 keeps the drawn 13.0 mm. The stop semi-diameter is calibrated to f/2.88 at each station by
  real-ray trace (9.165 / 11.410 / 14.965 mm), so the iris must open by a factor of 1.63 from wide to tele to hold a
  constant f-number. This calibration is not evidence of the physical iris diameter.
- **Modeling conventions.** The cover glass (2.5 mm, nd 1.516798) is carried as a rear plate with the 1.00 mm BF behind
  it. The design is used at patent scale; no scaling was applied.

## Design Heritage and Context

The patent positions its floating focus against two earlier approaches it cites. JP 2009-175509 focuses with the group
just ahead of the stop, which the patent describes as too heavy for fast video autofocus and as producing a visible
change of image height ([0014]). JP 2015-203734 focuses with a single element, with large aberration change at close
range and an open aperture of F5.6 ([0015]). The international search report additionally cites JP 7-151973 (Canon)
and JP 8-190052 (Nikon) as relevant prior art.

Within the patent, the five examples share the five-group power sequence and the G2/G4 focus, but differ in element
count and in the composition of G3–G5; only Example 4 has the production lens's 16/13 count. Sony's successor, the
FE 16-35mm F2.8 GM II (SEL1635GM2), is specified at 15 elements in 12 groups with a 0.22 m minimum focus distance, and is
therefore a different optical design rather than a revision of Example 4.

## Sources

1. WO 2018/139160 A1, *Zoom Lens and Imaging Device* (ズームレンズおよび撮像装置), Sony Corporation; inventors Kouji
   Katou and Hiromichi Nose; PCT/JP2017/046864, filed 27 December 2017, published 2 August 2018. Paragraphs [0004],
   [0013]–[0016], [0018]–[0041], [0055]–[0060], [0106]–[0113]; Tables 13–16 (printed pp. 28–29), Tables 21–22 (printed
   p. 34); Figs. 13–16; international search report.
2. Sony Europe, "FE 16-35mm F2.8 GM (SEL1635GM) — Full Specifications & Features," sony.co.uk,
   https://www.sony.co.uk/electronics/camera-lenses/sel1635gm/specifications (accessed 2 October 2026).
3. Sony of Canada and Sony Middle East & Africa, SEL1635GM specification pages,
   https://www.sony.ca/en/electronics/camera-lenses/sel1635gm/specifications and
   https://www.sony-mea.com/en/electronics/support/lenses-e-mount-lenses/sel1635gm/specifications (accessed
   2 October 2026).
4. Sony Electronics, "Sony Introduces Two New Wide-Angle Full-Frame E-Mount Lenses," press release, San Diego,
   17 May 2017, as reproduced by DPReview,
   https://www.dpreview.com/news/6266814476/sony-adds-16-35mm-f2-8-gm-to-g-master-pro-focused-lens-range (accessed
   2 October 2026).
5. Sony, SEL1635GM2 specifications, https://www.sony-asia.com/electronics/support/lenses-e-mount-lenses/sel1635gm2/specifications
   (accessed 2 October 2026).
6. Optical glass catalog data: OHARA (2025-03-12), HOYA (2026-04-01), Schott (2025-01-13), HIKARI, CDGM (2024-09) and
   Sumita (v14.01.03).
7. Sony Japan, SEL1635GM optical construction diagram, https://www.sony.jp/products/picture/y_SEL1635GM_lenscomposition.jpg.
