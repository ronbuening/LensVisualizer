# TAMRON SP 70-200mm f/2.8 Di VC USD — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 8,867,144 B2  
**Application number:** US 13/760,973  
**Priority:** JP 2012-024296, February 7, 2012  
**Filed:** February 6, 2013  
**Granted:** October 21, 2014  
**Inventor:** Hisayuki Yamanaka  
**Assignee:** Tamron Co., Ltd.  
**Title:** *Inner Focusing Telephotographing Zoom Lens*  
**Embodiment analyzed:** Example 1 / Embodiment 1

The modeled prescription is the user-selected correlation between Example 1 of US 8,867,144 B2 and the
production Tamron SP 70–200mm f/2.8 Di VC USD, Model A009. The patent is the numerical source for the optical
prescription, while Tamron's product material supplies the production identity and marketed specifications. The
correlation is fixed for this analysis, but it is not presented as a manufacturer statement that the published patent
example is the literal production prescription.

Several independent features converge on that correlation:

1. Example 1 contains **23 physical elements in 17 air-separated groups**, exactly matching Tamron's published A009 construction.[2]
2. The patent design covers **71.8000–194.5000 mm at FNo. 2.90**, while the production lens is marketed as 70–200mm f/2.8. The final data file keeps these as separate design and marketing fields.
3. The patent publishes a **1.3 m** close-object condition. Tamron specifies a 1.3 m minimum object distance and 1:8 maximum magnification at 200mm and 1.3 m.[2]
4. The patent assigns axial focusing to LG3 and transverse vibration compensation to negative subset 5B. The production A009 uses Tamron's USD focus drive and VC optical stabilization on the Canon EF and Nikon F versions.[3]
5. Tamron's optical-construction drawing marks **one XLD and four LD elements**.[3][4] The selected patent example contains one $n_d=1.43700$, $\nu_d=95.10$ element and four $n_d=1.49700$, $\nu_d=81.61$ elements. In the data model these are annotated as the HOYA-coordinate equivalents FCD100 and FCD1, respectively.
6. The patent priority date precedes the A009 production releases; Tamron lists November 22, 2012 for Nikon F, March 28, 2013 for Canon EF, and June 27, 2013 for Sony A.[2]

The final data file is **unscaled**. No sensor-cover plate, filter, dummy plane, flare cutter, or folded optical path is
inserted or removed from Example 1. The prescription is entirely spherical, so no aspherical coefficients or conic
conversion apply. The patent publishes the aperture-stop plane but not its diameter, and it publishes no clear
semi-diameters. Consequently, the stop radius and surface semi-diameters in the model are explicitly author-derived
geometry values rather than patent or factory dimensions. The HOYA glass names and their stored spectral fields are
catalog-equivalent annotations: the patent publishes only $n_d$ and $\nu_d$ and does not identify a glass manufacturer.

## Optical Architecture

Example 1 is a five-functional-group, all-spherical inner-focusing zoom with the first-order power sequence
**positive – negative – negative – positive – positive**. The patent labels those groups LG1 through LG5, with LG5
further divided into positive 5A, negative 5B, and positive 5C. The final data file preserves this division directly in
its group annotations.

Computed in isolation from the final surface arrays, the functional group focal lengths are:

| Group | Surfaces | Isolated focal length | Function in the published architecture |
|---|---:|---:|---|
| LG1 | 1–7 | +115.555123 mm | Fixed front positive group |
| LG2 | 8–10 | -83.661394 mm | Negative zoom group |
| LG3 | 11–17 | -53.152775 mm | Negative zoom variator and sole axial focus group |
| LG4 | 18–22 | +76.841662 mm | Positive zoom compensating group |
| LG5 | 24–41 | +88.202286 mm | Fixed rear positive group |
| 5A | 24–30 | +57.079526 mm | Positive front subset of LG5 |
| 5B | 31–35 | -36.276807 mm | Negative transverse vibration-compensation subset |
| 5C | 36–41 | +57.684494 mm | Positive rear subset of LG5 |

These are isolated paraxial group powers, not substitutes for the in-situ behavior of the complete zoom. In the actual
system the group separations change with zoom, so the complete focal length emerges from the coupled five-group
arrangement rather than by addition of the isolated powers.

At infinity focus, LG1 and LG5 remain fixed while LG2, LG3, and LG4 move toward the image plane from wide to telephoto,
as the patent specifies. The LG2–LG3 separation is deliberately non-monotonic: the modeled `d10` spacing changes from
20.5031 mm at wide angle to 13.5000 mm at the intermediate state, then increases to 18.9574 mm at telephoto. The groups
themselves continue to move imageward; it is their relative separation that reverses. This kinematic choice is one of
the architecture's defining features and is explicitly described by the patent as a means of controlling field
curvature through the zoom range.[1]

The aperture stop is the patent's surface 23, represented by the single `STO` plane immediately ahead of LG5. Its
**17.292248 mm** semi-diameter is not published. It is the fixed modeled value that best reproduces FNo. 2.90 across
the three infinity zoom states. The resulting paraxial f-numbers are 2.901416, 2.896536, and 2.902048 from wide to
telephoto.

The patent title uses the term "telephotographing," but the project reserves the architectural label **telephoto** for
a system with total track divided by EFL below unity. At the telephoto design state the S1-to-image-plane track is
233.6215 mm and the computed EFL is 194.498327 mm, giving a ratio of about 1.20115. This modeled prescription therefore
does not receive the project's strict telephoto label. It likewise is not retrofocus under the project's criterion
that back focal distance exceed EFL.

## Element-by-Element Analysis

The element discussion follows the final data file's labels, shapes, refractive indices, glass annotations, standalone
focal lengths, and cemented relationships. The focal length on each element line is the **standalone element power in
air**. When a cemented pair is discussed, a separate net focal length is given for that pair. Neither quantity should be
confused with the element's in-situ contribution inside the complete zoom.

All HOYA names in this section are catalog-coordinate equivalents selected by the data file. They are useful for
spectral modeling because the file also carries HOYA line indices and $dP_{gF}$, but they are not claims about the
actual production melts.

### D1 — L1 + L2: weak positive front cemented pair in LG1

**L1 — Negative Meniscus:** $n_d = 1.80610$, $\nu_d = 33.27$. Glass: NBFD15-W (Hoya) — catalog-equivalent annotation. Standalone $f = -231.302011$ mm.

**L2 — Positive Meniscus:** $n_d = 1.43700$, $\nu_d = 95.10$. Glass: FCD100 (Hoya) — catalog-equivalent annotation. Standalone $f = +205.604442$ mm.

The cemented pair has a computed isolated net focal length of **+2053.541779 mm**. The front member L1 is individually negative, while the low-dispersion L2 is individually positive.
Their cemented combination is therefore nearly afocal compared with the full LG1 focal length of
+115.555123 mm. In situ, D1 forms the leading correction pair of the fixed front group rather than acting as a
standalone weak lens.

The first group in the patent is expressly arranged around a negative element followed by multiple positive elements.
The patent associates that choice with control of residual spherical aberration over the zoom range.[1] Example 1
implements that pattern with L1 negative and L2, L3, and L4 positive.

L2's FCD100-equivalent annotation has $\nu_d=95.10$ and catalog $dP_{gF}=+0.0564$. Tamron marks one XLD element in
the production construction drawing; under the selected correlation, L2 is the position and coordinate pair that
correspond to that count. This is correlation evidence rather than an assertion that the production element is HOYA
FCD100.

### L3 — positive meniscus in LG1

**L3 — Positive Meniscus:** $n_d = 1.49700$, $\nu_d = 81.61$. Glass: FCD1 (Hoya) — catalog-equivalent annotation. Standalone $f = +380.997734$ mm.

L3 is the first of four FCD1-equivalent elements in the modeled prescription. Its relatively weak standalone positive
power follows the front cemented pair and continues the fixed LG1 convergence without requiring a strongly powered
surface pair. The element remains fixed axially throughout both zoom and focus in the published states.

The production construction drawing marks four LD elements. The four $1.49700/81.61$ elements in the patent example —
L3, L4, L15, and L17 — provide a one-for-one numerical and positional correlation with that published count.[3][4]
Again, the data file treats FCD1 as a catalog equivalent, not as a production-melt identification.

### L4 — positive meniscus completing LG1

**L4 — Positive Meniscus:** $n_d = 1.49700$, $\nu_d = 81.61$. Glass: FCD1 (Hoya) — catalog-equivalent annotation. Standalone $f = +174.034148$ mm.

L4 is stronger than L3 as a standalone positive element and completes the fixed front group immediately before the
variable `d7` gap. Together with D1 and L3 it produces the computed isolated LG1 focal length of
+115.555123 mm.

Because `d7` is a zoom-only variable gap, L4 itself does not move relative to the rest of LG1. The large change in `d7`
is instead the axial separation between the fixed front group and moving LG2.

### D2 — L5 + L6: negative LG2 cemented zoom group

**L5 — Positive Meniscus:** $n_d = 1.90366$, $\nu_d = 31.31$. Glass: TAFD25 (Hoya) — catalog-equivalent annotation. Standalone $f = +124.402681$ mm.

**L6 — Biconcave Negative:** $n_d = 1.69680$, $\nu_d = 55.46$. Glass: LAC14 (Hoya) — catalog-equivalent annotation. Standalone $f = -49.825149$ mm.

The cemented pair has a computed isolated net focal length of **-83.661394 mm**. In this pair the positive high-index L5 is outweighed by the much stronger negative L6. D2 is not
merely part of LG2: it **is** the complete second functional group, so its cemented-pair net power and the isolated LG2
power are the same quantity.

The patent requires LG2 to be negative and to move imageward during zooming. The final data file reproduces that
behavior through changes in `d7` and `d10`. Because L5 and L6 are cemented, no synthetic cement layer is introduced at
their shared interface; the junction carries the downstream L6 medium and element identity.

### L7 — front negative meniscus of the LG3 focus group

**L7 — Negative Meniscus:** $n_d = 1.61800$, $\nu_d = 63.39$. Glass: PCD4 (Hoya) — catalog-equivalent annotation. Standalone $f = -133.058375$ mm.

L7 is the first member of the moving LG3 focus group. It is individually negative and precedes the D3 cemented pair.
The patent's preferred third-group form is a front negative meniscus, a cemented negative-positive pair, and a rear
negative element. Example 1 follows that structure exactly.[1]

LG3 is the only group translated for axial focusing. L7 therefore participates directly in the published focus motion,
but its internal spacing to D3 remains fixed; focus is modeled as translation of the entire functional group through
compensating changes in the air gaps on its two sides.

### D3 — L8 + L9: positive cemented core inside negative LG3

**L8 — Negative Meniscus:** $n_d = 1.48749$, $\nu_d = 70.44$. Glass: FC5 (Hoya) — catalog-equivalent annotation. Standalone $f = -91.103951$ mm.

**L9 — Positive Meniscus:** $n_d = 1.80518$, $\nu_d = 25.46$. Glass: FD60 (Hoya) — catalog-equivalent annotation. Standalone $f = +60.876570$ mm.

The cemented pair has a computed isolated net focal length of **+188.010092 mm**. The pair itself is positive even though L8 is negative, because L9's positive contribution and the
cemented geometry dominate the two-element combination. This is an important distinction: **D3 is positive in
isolation, while LG3 as a whole is negative** at -53.152775 mm because L7 and L10 flank it with negative
power.

The patent discusses the negative-meniscus / cemented-pair / rear-negative construction as a way to reduce focus-induced
astigmatic variation at close distances.[1] The analysis therefore attributes that rationale to the **group
architecture**, not to any single glass in D3.

### L10 — rear biconcave negative element of LG3

**L10 — Biconcave Negative:** $n_d = 1.83481$, $\nu_d = 42.72$. Glass: TAFD5G (Hoya) — catalog-equivalent annotation. Standalone $f = -61.718456$ mm.

L10 closes the negative focus group and is the last optical element before the variable `d17` gap. Its standalone
negative power reinforces L7 so that the complete LG3 remains substantially negative despite D3's positive net power.

During focusing, `d10` decreases and `d17` increases by the same amount at each zoom position. L10 therefore moves with
the rest of LG3 toward the object while the following LG4 remains axially fixed for a given zoom setting.

### L11 — front biconvex positive element of LG4

**L11 — Biconvex Positive:** $n_d = 1.77250$, $\nu_d = 49.62$. Glass: TAF1 (Hoya) — catalog-equivalent annotation. Standalone $f = +97.092797$ mm.

L11 provides the principal positive contribution at the front of LG4. It is followed by the weak positive D4 cemented
pair, and the complete group has an isolated focal length of +76.841662 mm.

LG4 moves imageward during zooming but does not move during the published focus operation. Its fixed position during
focus is independently confirmed by the equality of the infinity and close-focus axial station of surface 18 at each
zoom state.

### D4 — L12 + L13: weak positive cemented pair completing LG4

**L12 — Biconvex Positive:** $n_d = 1.48749$, $\nu_d = 70.44$. Glass: FC5 (Hoya) — catalog-equivalent annotation. Standalone $f = +53.859844$ mm.

**L13 — Biconcave Negative:** $n_d = 1.83481$, $\nu_d = 42.72$. Glass: TAFD5G (Hoya) — catalog-equivalent annotation. Standalone $f = -56.993683$ mm.

The cemented pair has a computed isolated net focal length of **+461.833896 mm**. The individual positive and negative powers nearly cancel, so D4 is weakly positive in isolation.
Combined with L11, however, the complete LG4 remains distinctly positive.

L12 uses the FC5-equivalent coordinate set with $\nu_d=70.44$, while L13 uses the denser TAFD5G-equivalent set at
$\nu_d=42.72$. The cemented interface therefore joins materials of substantially different dispersion while avoiding
an intervening air surface. The exact chromatic effect in the production lens remains dependent on the actual melts; the
modeled spectral behavior follows the catalog equivalents stored in the data file.

### L14 — biconvex positive front element of LG5 / subset 5A

**L14 — Biconvex Positive:** $n_d = 1.72916$, $\nu_d = 54.67$. Glass: TAC8 (Hoya) — catalog-equivalent annotation. Standalone $f = +47.424167$ mm.

L14 is the first element behind the aperture stop and the first member of fixed subset 5A. Its relatively strong positive
standalone power begins the converging rear/master section immediately after the diaphragm.

The patent places the stop adjacent to or within the fifth group and keeps it fixed during focus so that the aperture
ratio remains essentially constant through zooming.[1] The data file follows that published stop position; only the stop
semi-diameter is inferred.

### L15 — low-dispersion positive meniscus in subset 5A

**L15 — Positive Meniscus:** $n_d = 1.49700$, $\nu_d = 81.61$. Glass: FCD1 (Hoya) — catalog-equivalent annotation. Standalone $f = +123.858442$ mm.

L15 is another FCD1-equivalent positive element and the third low-dispersion positive element encountered from the
front. It lies between L14 and the D5 cemented pair, separated from D5 by the 1.8091 mm air space following surface 27.

The patent's discussion of subset 5A emphasizes a cluster of positive power with a negative member arranged to converge
the beam before the vibration-compensation subset and to control spherical and comatic aberration.[1] L15 contributes
to that group-level architecture; the analysis does not assign a unique aberration term to L15 alone.

### D5 — L16 + L17: negative cemented pair inside positive subset 5A

**L16 — Biconcave Negative:** $n_d = 1.80610$, $\nu_d = 33.27$. Glass: NBFD15-W (Hoya) — catalog-equivalent annotation. Standalone $f = -25.791243$ mm.

**L17 — Biconvex Positive:** $n_d = 1.49700$, $\nu_d = 81.61$. Glass: FCD1 (Hoya) — catalog-equivalent annotation. Standalone $f = +41.780761$ mm.

The cemented pair has a computed isolated net focal length of **-74.473774 mm**. Although L17 is a strong positive element, L16 is still stronger in the opposite sense, so the
cemented pair is net negative. This pair provides the negative component within 5A while L14 and L15 keep the entire
subset positive at +57.079526 mm.

L17 is the fourth FCD1-equivalent element and completes the four-element $1.49700/81.61$ set that correlates with
Tamron's four LD markings in the A009 construction drawing.[3][4]

### D6 — L18 + L19: cemented front pair of transverse VC subset 5B

**L18 — Positive Meniscus:** $n_d = 1.80518$, $\nu_d = 25.46$. Glass: FD60 (Hoya) — catalog-equivalent annotation. Standalone $f = +53.828264$ mm.

**L19 — Biconcave Negative:** $n_d = 1.56883$, $\nu_d = 56.04$. Glass: BAC4 (Hoya) — catalog-equivalent annotation. Standalone $f = -43.586293$ mm.

The cemented pair has a computed isolated net focal length of **-218.248371 mm**. The pair is net negative, despite the positive standalone power of L18. D6 is followed by the separate
negative L20, producing a substantially stronger negative 5B subset with isolated focal length
-36.276807 mm.

The patent assigns subset 5B to image stabilization by transverse displacement approximately perpendicular to the
optical axis.[1] The centered prescription in the data file represents the neutral VC position; it does not introduce a
synthetic decenter state into the ordinary sequential surface table.

### L20 — rear biconcave negative element of subset 5B

**L20 — Biconcave Negative:** $n_d = 1.60342$, $\nu_d = 38.01$. Glass: E-F5 (Hoya) — catalog-equivalent annotation. Standalone $f = -44.461186$ mm.

L20 reinforces D6's negative net power and completes the three-element vibration-compensation subset. The patent's
condition on $f_{5B}/f_5$ is therefore a condition on the **whole 5B subset**, not on L20's standalone focal length.
The final data arrays give $f_{5B}/f_5=-0.411291$, consistent with the patent's rounded Example-1 value of -0.41.

### L21 — biconvex positive front element of subset 5C

**L21 — Biconvex Positive:** $n_d = 1.69680$, $\nu_d = 55.46$. Glass: LAC14 (Hoya) — catalog-equivalent annotation. Standalone $f = +42.996061$ mm.

L21 begins the positive rear subset 5C after the transverse VC group. Its relatively strong positive standalone power is
partly opposed by L22 before the final positive L23.

The complete 5C subset remains positive with an isolated focal length of +57.684494 mm. Because 5C is fixed
axially in the published zoom and focus states, its in-situ role is that of the rear portion of the fixed rear group.

### L22 — high-index negative meniscus in subset 5C

**L22 — Negative Meniscus:** $n_d = 1.90366$, $\nu_d = 31.31$. Glass: TAFD25 (Hoya) — catalog-equivalent annotation. Standalone $f = -45.473562$ mm.

L22 is a negative meniscus with high refractive index and relatively low Abbe number. It sits between two positive
members of 5C. In the modeled catalog assignment it uses TAFD25, the same coordinate-equivalent family used by L5,
though the patent itself does not name either glass.

Its negative standalone power should not be confused with the sign of 5C: the positive L21 and L23 contributions leave
the complete rear subset positive.

### L23 — final biconvex positive element in subset 5C

**L23 — Biconvex Positive:** $n_d = 1.84666$, $\nu_d = 23.78$. Glass: FDS90 (Hoya) — catalog-equivalent annotation. Standalone $f = +63.698882$ mm.

L23 is the final glass element and is followed by the published 57.0050 mm back-focus spacing to the image plane. Its
$\nu_d=23.78$ is the lowest Abbe number among the positive elements in 5C and directly satisfies the patent's condition
that at least one positive 5C element have $\nu_d\le 30$.[1]

The patent links that low-Abbe positive member to correction of chromatic aberration of magnification and off-axis coma
across the zoom range.[1] In the data model L23 is annotated as FDS90 (HOYA equivalent), with explicit catalog line
indices and $dP_{gF}=+0.0137$; the production melt remains unidentified.

## Glass Identification and Selection

The patent gives only d-line refractive index and Abbe number. The final data file therefore treats every trade name as a
**catalog-coordinate equivalent**, not as a source-published melt. A six-vendor Stage-1 comparison found that all 14
distinct patent coordinate pairs coincide especially closely with the HOYA catalog family. Stage 2 consequently chose
HOYA labels consistently and then transcribed `nC`, `nF`, `ng`, and `dPgF` from HOYA's official 2026-06-01 optical-glass
workbook.[5]

The stored patent $n_d/\nu_d$ values and the selected HOYA rows agree with maximum $|\Delta n_d|=0.00000$ and maximum
$|\Delta\nu_d|=0.01$. That coordinate agreement is strong evidence for a compatible glass family, but it does not
establish that Tamron purchased the named HOYA melts for production.

| HOYA-equivalent annotation | $n_d$ | $\nu_d$ | $dP_{gF}$ | Elements |
|---|---:|---:|---:|---|
| NBFD15-W | 1.80610 | 33.27 | +0.0000 | L1, L16 |
| FCD100 | 1.43700 | 95.10 | +0.0564 | L2 |
| FCD1 | 1.49700 | 81.61 | +0.0374 | L3, L4, L15, L17 |
| TAFD25 | 1.90366 | 31.31 | +0.0028 | L5, L22 |
| LAC14 | 1.69680 | 55.46 | -0.0060 | L6, L21 |
| PCD4 | 1.61800 | 63.39 | +0.0059 | L7 |
| FC5 | 1.48749 | 70.44 | +0.0090 | L8, L12 |
| FD60 | 1.80518 | 25.46 | +0.0132 | L9, L18 |
| TAFD5G | 1.83481 | 42.72 | -0.0067 | L10, L13 |
| TAF1 | 1.77250 | 49.62 | -0.0086 | L11 |
| TAC8 | 1.72916 | 54.67 | -0.0046 | L14 |
| BAC4 | 1.56883 | 56.04 | +0.0010 | L19 |
| E-F5 | 1.60342 | 38.01 | +0.0029 | L20 |
| FDS90 | 1.84666 | 23.78 | +0.0137 | L23 |

Two numerical clusters are especially important to the production correlation. L2's very high-Abbe coordinate pair is
the sole $1.43700/95.10$ element, while L3, L4, L15, and L17 form a four-element $1.49700/81.61$ cluster. Tamron's
construction diagram marks one XLD and four LD elements in corresponding portions of the optical train.[3][4] The
matching counts and positions support the selected patent/product correlation without proving trade-name identity.

The stored line data also permits the modeled chromatic behavior to use more than an Abbe-only approximation. That does
not justify calling the production lens apochromatic, nor does it convert the equivalent-glass assignment into source
fact. It simply means the LensVisualizer model has explicit C-, F-, and g-line indices and partial-dispersion deviation
for the selected catalog equivalents.

## Focus Mechanism

The focus status is **PUBLISHED**. No close-focus state was reconstructed. Example 1 supplies both infinity and close
spacing tables at all three zoom positions, and the final `var` arrays transcribe those six states directly.

LG3 alone moves axially for focusing. From infinity to the published close state, its surface-11 station shifts toward
the object by the following amounts:

| Zoom state | LG3 shift, close minus infinity | $\Delta d10$ | $\Delta d17$ |
|---|---:|---:|---:|
| Wide | -2.2674 mm | -2.2674 mm | +2.2674 mm |
| Intermediate | -5.2959 mm | -5.2959 mm | +5.2959 mm |
| Telephoto | -12.0000 mm | -12.0000 mm | +12.0000 mm |

At every zoom position, the decrease in `d10` is exactly balanced by the increase in `d17`, so the sum of the two
adjacent air gaps is conserved. LG4 remains fixed during the focus operation. This is the direct kinematic signature of
a single translating internal focus group rather than a floating two-group reconstruction.

The patent's close table gives `d0 = 1065.7 mm`. That value is the object-plane to surface-1 distance, not the complete
object-plane to image-plane distance. Adding the modeled S1-to-image-plane track of approximately 233.6215 mm yields
about 1299.3215 mm, reconciling the table with the patent's rounded 1.3 m description without altering a source value.

At telephoto close focus, the independently traced first-order lateral magnification is -0.125242, or approximately
1:7.98 in absolute terms. This is consistent with Tamron's marketed 1:8 maximum magnification at 200mm and 1.3 m.[2]
The comparison is a correlation check; the patent and product figures remain separately sourced.

## Chromatic Correction Strategy

The patent's architecture distributes both high- and low-dispersion materials across multiple functional groups rather
than concentrating all chromatic control in the front group. The selected catalog-equivalent model makes that strategy
visible at three levels.

First, LG1 combines the FCD100-equivalent L2 and FCD1-equivalent L3/L4 with the denser negative L1. That arrangement
places the highest-Abbe materials in the fixed front group, where ray heights are large. The patent itself attributes the
front-group sign pattern primarily to spherical-aberration control; the chromatic interpretation here follows the final
glass annotations rather than an explicit patent claim for specific trade names.

Second, the moving LG3 and LG4 groups use alternating crown/flint-like coordinate sets inside cemented and air-spaced
combinations. D3 pairs FC5-equivalent L8 with FD60-equivalent L9; D4 pairs FC5-equivalent L12 with TAFD5G-equivalent
L13. Their opposite standalone powers and substantial dispersion differences provide modeled first-order mechanisms for
controlling axial and lateral color while the zoom groups change separation.

Third, the rear master group uses the remaining FCD1-equivalent elements in 5A and finishes 5C with the unusually
low-Abbe positive L23 required by patent condition (4). The patent specifically ties that positive 5C low-Abbe member to
chromatic aberration of magnification and coma control.[1]

Because the data file carries catalog $n_C$, $n_F$, $n_g$, and $dP_{gF}$ values, LensVisualizer can evaluate the
selected equivalent-glass model beyond a simple $n_d/\nu_d$ approximation. No claim is made that these line indices
were measured from the A009 production lens, and no APO designation is inferred.

## Image Stabilization

The patent divides LG5 into 5A, 5B, and 5C and assigns transverse motion to the negative 5B subset. In Example 1, 5B is
formed by the cemented D6 pair plus L20 and has a computed isolated focal length of
**-36.276807 mm**. Its neighboring 5A and 5C subsets remain positive.

The centered data file models the nominal optical position of 5B. It does not add a decenter variable because the
ordinary LensVisualizer prescription remains a centered sequential model; the transverse VC function is retained as a
source-grounded architectural annotation.

Tamron's A009 product material identifies VC as the stabilization system for the Canon EF and Nikon F versions and
describes a three-coil moving optical group. The Sony A version was marketed without VC because stabilization was
provided in the camera body.[2][3] These are production-mechanism facts and are separate from the patent's optical
prescription.

## Conditional Expressions

Example 1 supplies reference values for five patent conditions. Independent computation from the final TypeScript arrays
reproduces the rounded values and keeps each within the claimed interval:

| Patent condition | Computed from final data | Example-1 value | Required range | Result |
|---|---:|---:|---|---|
| $f_2/f_t$ | -0.430136 | -0.43 | $-0.6 \le f_2/f_t \le -0.2$ | Pass |
| $f_3/f_t$ | -0.273279 | -0.27 | $-0.5 \le f_3/f_t \le -0.1$ | Pass |
| $f_{5B}/f_5$ | -0.411291 | -0.41 | $-0.7 \le f_{5B}/f_5 \le -0.2$ | Pass |
| Positive 5C element $\nu_d$ | 23.78 | 23.78 | $\nu_d \le 30$ | Pass |
| Wide full field $2\omega$ | 33.71° | 33.71° | $20° \le 2\omega \le 50°$ | Pass |

The first three ratios are group-level quantities. They therefore describe LG2, LG3, and the complete 5B subset relative
to the complete lens or LG5; they should not be substituted with the standalone focal length of a single element. The
fourth condition is satisfied specifically by positive L23 in the final data file.

## Verification Summary

Independent reduced-angle tracing of the final TypeScript surface and `var` arrays reproduces the patent's three
infinity design focal lengths to within 0.0017 mm:

| Infinity zoom state | Patent focal length | Computed EFL | Error |
|---|---:|---:|---:|
| Wide | 71.8000 mm | 71.799857836 mm | -0.000142 mm |
| Intermediate | 118.0000 mm | 117.999660757 mm | -0.000339 mm |
| Telephoto | 194.5000 mm | 194.498327255 mm | -0.001673 mm |

The three published close-focus states likewise compute as 67.895681369, 101.544711966, and 135.463201469 mm against
source values of 67.8957, 101.5451, and 135.4638 mm. The finite-conjugate image solutions differ from the patent's
rounded 57.0050 mm back-focus value by +0.1232, +0.1314, and +0.3598 mm. Those residuals are retained as source-precision
effects; no hidden plate or unsupported spacing correction is inserted.

A separately assembled ABCD matrix agrees with sequential reduced-angle tracing to floating-point roundoff. The
surface-by-surface Petzval sum, using $\phi/(n n')$ for every interface, is
**+0.001494337857 mm$^{-1}$**.

The inferred fixed stop radius gives entrance-pupil radii of approximately 12.3732, 20.3691, and 33.5105 mm from wide
to telephoto and reproduces the patent's FNo. 2.90 within about five thousandths at all three states. These pupil and
stop dimensions are computed model quantities, not published mechanical dimensions.

The modeled semi-diameters also remain author inferences. Under the current geometry policy, the smallest element edge
thickness is 0.423867 mm, the largest actual spherical rim angle is 37.430°, and the maximum shared-band cross-gap
intrusion ratio is 0.882172 against the 0.90 limit. No conic check applies because the design is all-spherical. The
modeled geometry requires no hidden trimming. One outer configured off-axis ray at telephoto/infinity first clips at
the front surface; that is retained as modeled front-element vignetting rather than concealed by enlarging the inferred
clear aperture.

## Sources and References

1. **US 8,867,144 B2**, Hisayuki Yamanaka, *Inner Focusing Telephotographing Zoom Lens*, Tamron Co., Ltd., granted October 21, 2014. Example 1 numerical prescription and spacing tables are on patent pp. 10–11; architecture and conditional-expression discussion are on pp. 3–8.
2. **Tamron, A009 specifications**, *SP 70-200mm F/2.8 Di VC USD (Model A009)* — production construction count, 1.3 m MOD, 1:8 maximum magnification, nine rounded blades, mount variants, and release dates. [Tamron specification page][tamron-spec]
3. **Tamron, A009 product overview**, *SP 70-200mm F/2.8 Di VC USD (Model A009)* — VC/USD description and one-XLD/four-LD statement. [Tamron product page][tamron-product]
4. **Tamron, A009 optical-construction drawing** — relative element layout and XLD/LD markings. [Manufacturer SVG][tamron-construction]
5. **HOYA GROUP Optics Division, Optical Glass Data Download** — `HOYA20260601.xlsx`, updated June 1, 2026, used for the catalog-equivalent `nC`, `nF`, `ng`, and `dPgF` fields. [HOYA data-download page][hoya-data]

[tamron-spec]: https://www.tamron.com/global/consumer/lenses/a009/spec.html
[tamron-product]: https://www.tamron.com/global/consumer/lenses/a009/
[tamron-construction]: https://www.tamron.com/product/pc_file/file/a009_lens-construction_en.svg
[hoya-data]: https://www.hoya-opticalworld.com/english/datadownload/index.html
