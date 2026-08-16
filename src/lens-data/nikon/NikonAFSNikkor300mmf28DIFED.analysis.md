## Patent Reference and Design Identification

**Patent:** US 5,745,306 A\
**Application Number:** US 08/634,032\
**Priority:** May 26, 1995 (JP 7-152709)\
**Filed:** April 17, 1996\
**Granted:** April 28, 1998\
**Inventor:** Susumu Sato\
**Assignee:** Nikon Corporation\
**Title:** *Internal Focusing Telephoto Lens*\
**Embodiment analyzed:** Example 1 (Fig. 1 and Table 1)

This prescription is the project-selected correlation for the **NIKON AI AF-S NIKKOR 300mm f/2.8 D IF-ED**. The patent
itself does not identify a commercial product by model name, and the cited Nikon product material does not explicitly
state that US 5,745,306 is the production patent. The identification therefore rests on convergent correspondence rather
than a manufacturer-published patent cross-reference.

1. Nikon records the AF-S Nikkor 300mm f/2.8D IF-ED as a November 1996 release, after the patent's May 1995 Japanese
   priority and April 1996 US filing and before the April 1998 US grant.
2. Nikon specifies 11 elements in 8 groups, plus one front protection glass. Example 1 has 11 active powered elements in
   8 air-spaced groups, with a plane-parallel protection plate ahead of the powered train.
3. Nikon specifies three ED elements at active positions 1, 2, and 5. The data file places the same high-Abbe material,
   $n_d=1.497820$, $\nu_d=82.52$, at L11, L12, and L14b, which are active element positions 1, 2, and 5.
4. Nikon specifies no aspherical elements; Example 1 and the data file are entirely spherical or plane.
5. The marketed designation is 300mm f/2.8, whereas the patent gives $F=294.0$ mm and $F/2.88$. Independent tracing of
   the final data arrays gives 294.129638 mm at infinity, so the patent prescription is retained without scaling and the
   marketed 300mm/f/2.8 values remain separate metadata.
6. Nikon specifies a 2.5 m minimum focus distance and maximum reproduction ratio of 1/7. Example 1 publishes a closest
   state labeled $R=2500$ mm with $\beta=-0.1413$ and directly tabulates the internal focusing spacings used in the model.
7. Nikon specifies a 52 mm drop-in filter. Example 1 includes a plane-parallel rear filter before its final image-side
   reference planes, although that plate is omitted from the active sequential model as described below.

The patent's general descriptive text contains one internal shape contradiction: it describes L11 in one passage as a
"biconcave positive" element, while Fig. 1, Table 1, and the specific Example 1 description show the positive L11 as
biconvex. The numerical table and embodiment figure govern the data file. Table 1 was also checked against the rendered
patent page because the machine-readable text drops several decimal points and signs; those OCR artifacts are not treated
as source values.

No dimensional scaling is applied. The scale factor is $s=1.000000$, so the patent radii and center thicknesses are used
at source scale. There are no aspherical coefficients to transform.

## Optical Architecture

The active model is an **11-element, 8-group, positive-negative-positive internal-focusing long-focus design**. Its three
major functional groups are G1(+), G2(-), and G3(+), matching the patent's stated power sequence. G1 is subdivided into
the positive front group G11 and positive rear group G12; G2 is the translating negative focus group; G3 is the fixed
positive rear group immediately behind the aperture stop.

Independent paraxial computation from the final data arrays gives the following effective focal lengths for the major
units at infinity:

| Unit | Computed EFL | Function in the patent architecture |
|---|---:|---|
| G11 | +235.059 mm | Front positive collector |
| G12 | +289.005 mm | Rear positive component of G1 |
| G1 | +150.028 mm | Main converging group |
| G2 | -57.006 mm | Internal focus group |
| G3 | +111.739 mm | Positive rear imaging group |

With the actual inter-group spacing included, G1+G2 has an effective focal length of about +92.3 m. This quantitatively
supports the patent's description of G1 and G2 as a substantially afocal pair: G1 strongly converges the incoming beam,
G2 largely removes that convergence, and G3 receives a beam close to collimated while forming the final image. This
arrangement permits focusing by moving the relatively small negative G2 rather than translating the full optical system.

The patent title and Nikon product literature use the word *telephoto*, but the project taxonomy applies that term only
when normalized $TL/EFL<1$. With the excluded rear plate represented by its air-equivalent spacing, the active model has
$TL/EFL=1.068894$; it is therefore **not classified as telephoto under the project criterion**. Its back focal distance is
also smaller than its EFL, so it is not retrofocus under the corresponding project test.

The data model begins at patent surface S3, the front surface of L11. The plane-parallel S1-S2 front protection glass is
excluded because it is not part of the active powered prescription. At the rear, inactive field-stop planes S23 and S26
and the S24-S25 filter plate are omitted. Their axial optical effect is represented by the final S22-to-image
air-equivalent spacing of **106.9520654 mm**. The resulting normalized active train preserves the patent's image-plane
location to source precision.

The patent publishes the aperture-stop position at S16, retained as the single `STO`. It does **not** publish the physical
stop diameter. The modeled stop semi-diameter, 19.356356 mm, is therefore an authoring quantity back-solved from the final
prescription so that the infinity model evaluates to $F/2.88$; it is not a Nikon or patent aperture measurement.

Likewise, Table 1 does not publish clear semi-diameters for the powered surfaces. The data file's semi-diameters are
model-derived from ray envelopes, the patent's 43.4 mm G2 effective-diameter statement and condition (12), Fig. 1, the
52 mm rear-filter constraint, and the current edge-thickness/rim-slope/cross-gap validation rules. They should be read as
validated modeling apertures, not manufacturing dimensions.

## Element-by-Element Analysis

### L11 — Biconvex Positive

$n_d=1.497820$, $\nu_d=82.52$. Glass: J-FKH1 catalog equivalent (patent 498825; production supplier unspecified). Standalone $f=+297.570$ mm.

L11 is the first positive element of G11 and the first of the three high-Abbe ED-class elements in the active train. The
patent explains that the object-side positive element is shaped so the incident axial rays encounter a form close to
minimum deflection: its object-side surface is strongly convex, while the rear surface is comparatively mild. In the
final prescription this produces a biconvex positive element that begins the main convergence without concentrating all
of G1's power at a single surface. [US 5,745,306 A, cols. 7–10; Fig. 1; Table 1]

The standalone focal length above is an isolated-air value used for element inspection. L11 operates in situ as part of
G11 and should not be interpreted as contributing that isolated power directly to the complete lens.

### D1 — L12 Biconvex Positive + L13 Biconcave Negative

**L12:** $n_d=1.497820$, $\nu_d=82.52$. Glass: J-FKH1 catalog equivalent (patent 498825; production supplier unspecified). Standalone
$f=+210.237$ mm.\
**L13:** $n_d=1.804109$, $\nu_d=46.54$. Glass: TAF3D catalog equivalent (patent 804465; production supplier unspecified). Standalone
$f=-240.539$ mm.

L12 is the second positive ED-class element in G11 and is cemented directly to the negative L13 at surface 6. The patent
specifically calls for L12 to be biconvex with its stronger curvature toward the object and places the negative element
immediately behind it to control the spherical and chromatic aberration that would otherwise accompany the two strong
positive front elements. Condition (4) limits the Abbe number of L13, while condition (5) constrains the shared
L12/L13 curvature relationship. [US 5,745,306 A, cols. 5–8]

The isolated powers of L12 and L13 are substantial and opposite in sign, but the cemented pair is only weakly positive in
net. This distinction matters: the two standalone focal lengths describe the individual pieces in air, whereas D1's
cemented behavior is governed by the shared interface and the surrounding G11 spacing.

### D2 — L14a Negative Meniscus + L14b Biconvex Positive

**L14a:** $n_d=1.744000$, $\nu_d=45.00$. Glass: H-LaF3B catalog equivalent (patent 744450; production supplier unspecified). Standalone
$f=-175.442$ mm.\
**L14b:** $n_d=1.497820$, $\nu_d=82.52$. Glass: J-FKH1 catalog equivalent (patent 498825; production supplier unspecified). Standalone
$f=+107.791$ mm.

D2 is the positive rear component G12 of the first major group. Its front member is a negative meniscus; its rear member
is the third ED-class element of the active train. The patent describes the rear component as a cemented positive lens and
attributes to it a role in distributing the strong power of G1 while improving spherical and chromatic correction. The
large air interval between G11 and G12 lets the two positive subgroups share first-group power rather than forcing G11 to
carry the entire convergence. [US 5,745,306 A, cols. 8–10]

Computed as the cemented G12 unit, D2 has EFL $+289.005$ mm. That cemented net is the relevant quantity for group-power
discussion; the individual standalone focal lengths above remain element-isolation values.

### L21 — Biconcave Negative

$n_d=1.516800$, $\nu_d=64.10$. Glass: J-BK7A catalog equivalent (patent 517641; production supplier unspecified). Standalone $f=-92.912$ mm.

L21 is the object-side negative element of the translating G2 focus group. The patent deliberately keeps this component
a single negative lens so that the focusing group can remain small and light. Condition (8) constrains its shape factor,
and condition (9) requires sufficiently high Abbe number to limit chromatic magnification error, particularly toward the
short-wavelength side. [US 5,745,306 A, cols. 5–7]

Its standalone power is negative, but the relevant focus-group behavior is the combined in-situ G2 power, computed as
EFL $-57.006$ mm after L21, the cemented L22 component, their internal spacing, and the actual boundary media are all
included.

### D3 — L22a Positive Meniscus + L22b Biconcave Negative

**L22a:** $n_d=1.803840$, $\nu_d=33.89$. Glass: E-LAFH2 catalog equivalent (patent 804339; production supplier unspecified).
Standalone $f=+67.595$ mm.\
**L22b:** $n_d=1.589130$, $\nu_d=61.09$. Glass: S-BAL35 catalog equivalent (patent 589611; production supplier unspecified). Standalone $f=-47.922$ mm.

L22a and L22b form the cemented negative L22 component of G2. The positive front member combines high index with
relatively low Abbe number, while the negative rear member has substantially higher Abbe number. The patent explicitly
uses the index difference $N_c-N_d$ and Abbe-number difference $\nu_d-\nu_c$ in conditions (10) and (11) to regulate the
power of the cemented achromatizing surface and its wavelength-dependent spherical-aberration contribution.
[US 5,745,306 A, cols. 7–8]

The pair is negative in cemented net despite the positive standalone power of L22a. Together with L21 it forms the
compact negative G2 focus group; describing L22a alone as the focus power would therefore be misleading.

### L31 — Biconvex Positive

$n_d=1.518601$, $\nu_d=69.98$. Glass: J-PKH1 catalog equivalent (patent 519700; production supplier unspecified). Standalone $f=+120.250$ mm.

L31 is the first powered element after the aperture stop and the leading positive element of G3. The patent places G3
after the nearly afocal G1+G2 combination and assigns the major rear group positive power. L31 supplies much of that
positive convergence while working with the following negative and positive menisci as a three-element rear group.
[US 5,745,306 A, cols. 3–4 and 9–10]

### L32 — Negative Meniscus

$n_d=1.795040$, $\nu_d=28.56$. Glass: J-LAFH3 catalog equivalent (patent 795286; production supplier unspecified). Standalone
$f=-180.849$ mm.

L32 is the negative middle element of G3. Its high index and low Abbe number provide an opposing refractive and
dispersive contribution between two positive rear elements. The data file describes its role as rear-group aberration
balancing; this is a modeling interpretation consistent with its position and material contrast, while the patent treats
G3 principally as the final positive group rather than assigning a separate named correction function to L32.

### L33 — Positive Meniscus

$n_d=1.487490$, $\nu_d=70.41$. Glass: N-FK5 catalog equivalent (patent 487704; production supplier unspecified). Standalone $f=+153.052$ mm.

L33 is the final positive element of G3 and the last powered element in the active model. Its high Abbe number contrasts
with the low-Abbe L32 immediately ahead of it, completing the positive-negative-positive sequence within the rear group.
The final surface is followed by the normalized air-equivalent image spacing rather than by the patent's explicit rear
filter and field-stop planes.

## Glass Identification and Selection

The patent publishes only d-line refractive index and Abbe number; it does not name glass suppliers. The final data file
therefore uses compatible public catalog curves as optical equivalents while retaining every patent coordinate and
explicitly leaving production suppliers unspecified. The equivalent names provide coefficient-backed chromatic models;
they are not claims about Nikon's historical melts.

| Catalog-equivalent model | $n_d$ | $\nu_d$ | Elements | Design role |
|---|---:|---:|---|---|
| J-FKH1 (patent 498825) | 1.497820 | 82.52 | L11, L12, L14b | Three high-Abbe positive elements in G1 |
| TAF3D (patent 804465) | 1.804109 | 46.54 | L13 | Negative partner in D1 |
| H-LaF3B (patent 744450) | 1.744000 | 45.00 | L14a | Negative member of positive D2/G12 |
| J-BK7A (patent 517641) | 1.516800 | 64.10 | L21 | Negative focus element |
| E-LAFH2 (patent 804339) | 1.803840 | 33.89 | L22a | Positive meniscus in negative D3/L22 |
| S-BAL35 (patent 589611) | 1.589130 | 61.09 | L22b | Negative high-Abbe partner in D3/L22 |
| J-PKH1 (patent 519700) | 1.518601 | 69.98 | L31 | Positive front element of G3 |
| J-LAFH3 (patent 795286) | 1.795040 | 28.56 | L32 | Negative dispersive element in G3 |
| N-FK5 (patent 487704) | 1.487490 | 70.41 | L33 | Positive high-Abbe final element |

The ED designation on L11, L12, and L14b follows the selected production correlation and Nikon's specification of three
ED elements at positions 1, 2, and 5. The patent itself supplies the unusually high $\nu_d=82.52$ coordinate but does not
name an ED trade glass or supplier.

No per-element `nC`, `nF`, `ng`, or `dPgF` values are presented as patent data. Runtime chromatic tracing uses the named
catalog-equivalent curves, while the authored d-line coordinates remain the source prescription.

No element carries authored $n_C$, $n_F$, $n_g$, or $dP_{gF}$ data. The patent's aberration plots identify multiple
spectral lines, but they do not publish per-element line indices or anomalous partial-dispersion values. Consequently,
the model supports an Abbe-level discussion of glass pairing but does **not** support an APO or anomalous-dispersion
claim.

## Focus Mechanism

The focus state is **PUBLISHED**, not reconstructed. The patent performs internal focusing by translating the complete
negative G2 group toward the image side while G1 and G3 remain fixed. The two adjacent air gaps change by equal and
opposite amounts, so G2 translates rigidly without changing its internal element spacings.

| Gap | Infinity | Published close state | Change |
|---|---:|---:|---:|
| D10, G1→G2 | 29.5505 mm | 40.3744 mm | +10.8239 mm |
| D15, G2→STO | 19.2807 mm | 8.4568 mm | -10.8239 mm |
| D10 + D15 | 48.8312 mm | 48.8312 mm | 0 within numerical precision |

The group therefore moves **10.8239 mm imageward** from infinity to the published closest-distance state. Independent
first-order tracing of the final data arrays gives EFL 294.129638 mm at infinity and 289.797144 mm at the close state, a
change of -4.332494 mm in system power as G2 moves.

The data file uses Nikon's marketed 2.5 m minimum focus distance for `closeFocusM`, while the optical movement comes
directly from Table 1. The patent labels the closest state $R=2500$ mm, but its exact published $D_0=2195.6253$ mm plus
the full source-plane physical track sums to 2515.3000 mm. The finite-conjugate trace closes with the tabulated $D_0$ and
spacings, so the table values are retained and the 2500 mm statement is treated as a nominal close-distance label rather
than a value to force by altering the prescription.

The production lens uses Nikon's built-in Silent Wave Motor autofocus system. That drive mechanism is manufacturer
product metadata; it does not change the published optical focus spacings represented in the data file.

## Chromatic Correction Strategy

Chromatic correction is concentrated in the front positive group and in the cemented interfaces rather than in a single
rear corrector. The three ED-class elements occupy L11, L12, and L14b, all within G1. L12 is cemented to the higher-index,
lower-Abbe negative L13, and L14b is cemented to the negative L14a. This distributes chromatic balancing across both
positive subgroups G11 and G12 while retaining the strong positive power needed in the front half of the lens.

The patent explicitly ties several conditions to chromatic behavior. Condition (4) restricts L13's Abbe number to limit
second-order chromatic aberration. Conditions (10) and (11) regulate the refractive-index and Abbe-number differences
across the L22a/L22b cemented interface in the moving G2 group. Condition (9) requires sufficiently high Abbe number for
L21 to control chromatic magnification error. These statements are patent-grounded; the more specific element-role
interpretations above are consistent with the final prescription but should not be mistaken for manufacturer glass
assignments.

Because only $n_d$ and $\nu_d$ are available per element, the analysis does not infer secondary-spectrum or
apochromatic performance beyond what the patent's qualitative aberration discussion supports.

## Conditional Expressions

US 5,745,306 defines twelve design conditions for the positive-negative-positive architecture and its component shapes.
Conditions (1)–(11) can be independently recomputed from the final prescription and agree with the patent's corresponding
values to source precision. Condition (12) depends on the front effective diameter $\Phi$, which Table 1 does not tabulate;
the project's modeled front semi-diameter was itself informed by the patent's published condition-(12) value, so it is not
an independent check.

| Condition | Patent range | Recomputed from final prescription | Status |
|---:|---|---:|---|
| (1) | $0.7<\left|f_1f_3/(f_2F)\right|<1.3$ | 0.999817 | Pass |
| (2) | $0.24<|f_2/f_1|<0.41$ | 0.379966 | Pass |
| (3) | $0.7<f_{11}/f_{12}<1.4$ | 0.813341 | Pass |
| (4) | $\nu_a<48$ | 46.54 | Pass |
| (5) | $-0.46<(R_b-R_a)/(R_b+R_a)\leq0$ | 0.000000 | Pass |
| (6) | $0.35<f_1/F<0.60$ | 0.510075 | Pass |
| (7) | $0.7<f_{22}/f_{21}<1.8$ | 1.728302 | Pass |
| (8) | $-1.4<(R_d+R_c)/(R_d-R_c)<-0.4$ | -0.432803 | Pass |
| (9) | $45<\nu_b$ | 64.10 | Pass |
| (10) | $0.1<N_c-N_d<0.35$ | 0.214710 | Pass |
| (11) | $25<\nu_d-\nu_c$ | 27.20 | Pass |
| (12) | $0.55<\Phi/f_1<0.72$ | 0.681206 from modeled $\Phi=102.2$ mm | Pass, but not independent |

The near-unity value in condition (1) is consistent with the independently computed near-afocal G1+G2 combination.
Condition (12)'s modeled value should not be treated as a recovered manufacturing aperture: the data file's front clear
aperture is an authoring model constrained in part by this same patent condition.

## Patent-Only Lateral Decentering Provision

The patent also describes changing image position by laterally decentering the positive G3 group, presenting this as a
vibration-correction option. This is a patent feature of the embodiment family, not a production feature encoded in the
LensVisualizer data. The cited Nikon documentation for the 1996 AF-S D lens identifies SWM autofocus, M/A operation,
focus lock, and a focus limiter but does not identify the lens as a VR product.

Accordingly, the data file models G3 only on axis and does not expose an image-stabilization movement. The optional patent
decenter is retained as design context rather than being promoted to a production mechanical specification.

## Verification Summary

The final analysis is tied to the final TypeScript arrays rather than to a restated patent table. Fresh y–$\nu$ tracing
and an independent ABCD matrix assembly agree for the sequential active system. At infinity the final arrays give EFL
**294.129638 mm**, only +0.129638 mm from the patent's rounded 294.0 mm value. The modeled stop gives
**F/2.879999968**, consistent with `nominalFno: 2.88`.

At the published close state, finite-conjugate tracing gives transverse magnification **-0.141397**, compared with the
patent's $\beta=-0.1413$. The G2 focus translation remains 10.8239 mm and the two focus-adjacent gaps conserve their sum
to numerical precision.

The Petzval sum, evaluated surface by surface as $\phi/(n n')$, is
$+4.3659987\times10^{-4}\ \mathrm{mm}^{-1}$. Under the explicitly stated convention $R_P=-1/P$, this corresponds to a
Petzval-surface radius of about -2290.43 mm. This is a computed design quantity, not a patent-published field-curvature
radius.

The modeled semi-diameters satisfy the applicable edge-thickness, actual rim-slope, shared-band cross-gap, and
representative-ray containment checks in both published focus states.

## Sources

- Sato, Susumu. *Internal Focusing Telephoto Lens*. US 5,745,306 A, Nikon Corporation, granted April 28, 1998. Example 1,
  Fig. 1 and Table 1 are the prescription source.
- Nikon Imaging Japan. "AI AF-S Nikkor ED 300mm F2.8D (IF)." Archived product page. Specifies 11 elements in 8 groups
  plus one protection glass, three ED elements at positions 1/2/5, zero aspheres, 2.5 m minimum focus, 1/7 maximum
  reproduction, nine diaphragm blades, and a 52 mm drop-in filter.
  https://nij.nikon.com/products/lineup/nikkor/fmount/ai_af-s_nikkor_ed_300mm_f28d_if/
- Nikon Imaging. *NIKKOR — The Thousand and One Nights No. 11*. Records the AF-S Nikkor 300mm f/2.8D IF-ED as a November
  1996 release with a renewed optical system and built-in SWM.
  https://imaging.nikon.com/imaging/information/story/0011/
