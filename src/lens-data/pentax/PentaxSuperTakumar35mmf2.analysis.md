## Patent Reference and Design Identification

- **Patent:** US 3,506,336
- **Priority:** Japan, September 30, 1966 (41/64,565)
- **Filed:** September 27, 1967
- **Granted:** April 14, 1970
- **Inventor:** Yasuo Takahashi
- **Assignee:** Asahi Kogaku Kogyo Kabushiki Kaisha
- **Title:** Wide Angle Lens System
- **Embodiment analyzed:** Preferred embodiment; the patent contains one numerical example

US 3,506,336 does not identify a commercial product by name. Its association with the compact Asahi Pentax Super-Takumar 35mm f/2 is therefore strong but inferential rather than patent-stated.

1. Figure 1 and Table 1 disclose an eight-element, seven-group, all-spherical retrofocus objective. When the manufacturer manual's small optical section is read in its illustrated image-to-object direction, its sequence and principal element shapes agree with the patent: a large isolated front negative meniscus, six rear groups, and a cemented negative-positive pair.
2. Asahi's Spotmatic II system manual lists the production Super-Takumar 35mm f/2 as an eight-element lens with a 0.40 m minimum focusing distance, a 62° angle of view, and a minimum aperture of f/16.
3. The patent normalizes the numerical example to $F=100$. Independent paraxial tracing gives $F=99.999623$; uniform scaling by $0.35$ gives $f=34.999868\ \mathrm{mm}$.
4. Figure 2 labels the aperture as 1:2.0 and plots aberrations through approximately $32^\circ$ half-field, consistent with a 35 mm f/2 objective covering the 135 format.
5. The assignee, Asahi Kogaku, is the manufacturer of the Takumar series, and the 1966 priority date is consistent with the later compact production design.

The prescription-to-product match is sufficiently strong for catalog use, but the analysis retains the distinction between direct patent facts and production identification. No commercial order number is treated as patent evidence.

## Optical Architecture

The objective is an inverted-telephoto, or retrofocus, wide-angle design with eight elements in seven groups. L6 and L7 form the sole cemented group; the other six inter-group separations are air spaces. The front-to-rear power sequence is:

$$
-\;|\;+\;|\;+\;|\;+_{\text{very weak}}\;|\;-\;|\;(-/+)_{\text{cemented}}\;|\;+.
$$

L1 is the isolated negative front group. L2-L8 constitute the positive main group, whose in-air assembled focal length is $+35.374572\ \mathrm{mm}$ after production scaling. The complete objective has

$$
\frac{\mathrm{BFD}}{\mathrm{EFL}}=\frac{36.386628}{34.999868}=1.039622,
$$

so its back focal distance exceeds its effective focal length and it meets the optical criterion for a retrofocus lens. This classification does not rely on comparing optical BFD with the M42 flange distance, because those dimensions are referenced to different planes.

The cumulative power distribution also reproduces the patent's design logic. L1-L3 have an in-air assembled focal length of $+38.888810\ \mathrm{mm}$ after scaling, whereas L1-L5 are net negative at $-70.001051\ \mathrm{mm}$. The rear positive section restores the full system to the 35 mm class while preserving the extended back focus.

The patent states only that the diaphragm lies between L4 and L5. It supplies no dimensioned axial coordinate. The companion data file places the stop at the midpoint of the scaled 6.30 mm L4-L5 air gap. This is a transparent modeling assumption, not a patent value.

## Element-by-Element Analysis

The focal lengths below are standalone in-air values calculated from each element's radii, center thickness, and $n_d$. For L6 and L7, these standalone values are analytically distinct from their in-situ behavior at the cemented interface.

### L1 — Negative Meniscus, Convex to Object

$n_d=1.58913$, $\nu_d=61.2$. Glass: S-BAL35 current counterpart (OHARA; $\Delta\nu_d=-0.06$; historical melt unconfirmed). $f=-58.334\ \mathrm{mm}$.

L1 establishes the retrofocus geometry. Its image-side surface is much more strongly curved than its object-side surface, concentrating the negative refraction at the rear face. The 16.45 mm production-scale air gap to L2 separates the diverging front group from the positive main group and is central to the long-back-focus construction governed by patent conditions (1), (2), (6), and (7).

### L2 — Positive Meniscus, Concave to Object

$n_d=1.76200$, $\nu_d=40.3$. Glass: S-LAM55 current counterpart (OHARA; $\Delta\nu_d=-0.20$; historical melt unconfirmed). $f=+153.435\ \mathrm{mm}$.

L2 is weakly positive and begins the transition into the main positive group. Its Abbe number differs from L3 by only 9.3, so the pair is not a conventional crown-flint achromat. L2 chiefly manages power and ray height ahead of L3. The 0.70 mm air space keeps the two elements optically close without cementing them.

### L3 — Biconvex Positive

$n_d=1.77252$, $\nu_d=49.6$. Glass: S-LAH66 current counterpart (OHARA; $\Delta n_d=-0.00002$, $\Delta\nu_d\approx0.00$; historical melt unconfirmed). $f=+38.569\ \mathrm{mm}$.

L3 supplies the strongest standalone positive power among the air-spaced positive elements. Patent condition (4) constrains its first radius, $r_5$, and the specification explicitly links that bound to spherical-aberration and coma control for high-angle rays. Its weak rear curvature places most of the positive refraction at the object-side surface.

### L4 — Very Weak Positive Meniscus, Convex to Object

$n_d=1.53172$, $\nu_d=48.9$. Glass: S-TIL6 current counterpart (OHARA; $\Delta\nu_d=-0.06$; historical melt unconfirmed). $f=+612.389\ \mathrm{mm}$.

L4 is nearly afocal. The patent permits the fourth lens to be positive, negative, or effectively powerless; the worked example selects a very weak positive meniscus. Its closely matched radii make it chiefly an aberration-balancing element immediately before the diaphragm rather than a major source of system power.

### L5 — Biconcave Negative

$n_d=1.74077$, $\nu_d=27.7$. Glass: S-TIH13 current counterpart (OHARA; $\Delta\nu_d=+0.09$; historical melt unconfirmed). $f=-22.039\ \mathrm{mm}$.

L5 is the strongest negative element and uses the most dispersive glass in the prescription. It begins the rear correction section after the stop. Patent condition (9) requires $n_5>1.65$; the worked-example value of 1.74077 permits substantial negative power without requiring still steeper curvatures.

### L6-L7 — Cemented Negative/Positive Doublet

- **L6:** $n_d=1.83400$, $\nu_d=37.2$. Glass: S-LAH60V current counterpart (OHARA; $\Delta\nu_d=+0.01$; historical melt unconfirmed). Standalone $f=-32.136\ \mathrm{mm}$.
- **L7:** $n_d=1.77252$, $\nu_d=49.6$. Glass: S-LAH66 current counterpart (OHARA; $\Delta n_d=-0.00002$, $\Delta\nu_d\approx0.00$; historical melt unconfirmed). Standalone $f=+18.901\ \mathrm{mm}$.
- **Cemented pair:** in-air assembled focal length $f=+40.687\ \mathrm{mm}$.

The doublet is net positive despite L6's negative standalone power. Its cemented-junction index step is

$$
n_6-n_7=1.83400-1.77252=0.06148,
$$

which lies within patent condition (10), $0.01\le n_6-n_7\le0.12$. The patent links this range to coma control and, together with condition (11), to avoidance of spherical-aberration overcorrection.

The pair should not be called a crown-flint doublet. Both glasses have $\nu_d<50$ and therefore lie in conventional flint territory. Their useful chromatic differential is real, but it is smaller than the terminology “crown-flint” would imply.

### L8 — Positive Meniscus, Concave to Object

$n_d=1.77252$, $\nu_d=49.6$. Glass: S-LAH66 current counterpart (OHARA; $\Delta n_d=-0.00002$, $\Delta\nu_d\approx0.00$; historical melt unconfirmed). $f=+60.923\ \mathrm{mm}$.

L8 is the final positive meniscus. It adds positive power behind the cemented doublet, while its meniscus form provides relatively moderate terminal curvatures for balancing field curvature and astigmatism. The patent does not assign a separate named function to L8; this role is inferred from its position and paraxial power.

## Glass Identification

The patent specifies only $n_d$ and $\nu_d$; it does not publish manufacturer glass names. The table therefore lists the nearest current OHARA counterparts used as dispersion references in the data file. These are not identifications of the undocumented 1960s production melts.

| Element(s) | Patent $n_d$ | Patent $\nu_d$ | Current OHARA counterpart | Catalog $n_d$ | Catalog $\nu_d$ | $\Delta n_d$ | $\Delta\nu_d$ |
|---|---:|---:|---|---:|---:|---:|---:|
| L1 | 1.58913 | 61.2 | S-BAL35 | 1.58913 | 61.14 | 0.00000 | -0.06 |
| L2 | 1.76200 | 40.3 | S-LAM55 | 1.76200 | 40.10 | 0.00000 | -0.20 |
| L3, L7, L8 | 1.77252 | 49.6 | S-LAH66 | 1.77250 | 49.60 | -0.00002 | 0.00 |
| L4 | 1.53172 | 48.9 | S-TIL6 | 1.53172 | 48.84 | 0.00000 | -0.06 |
| L5 | 1.74077 | 27.7 | S-TIH13 | 1.74077 | 27.79 | 0.00000 | +0.09 |
| L6 | 1.83400 | 37.2 | S-LAH60V | 1.83400 | 37.21 | 0.00000 | +0.01 |

L1 is the only element clearly on the crown side of the conventional $\nu_d\approx50$ boundary. L5 supplies the strongest dispersion. L6 and L7 form a differential-dispersion cemented pair, while L3, L7, and L8 reuse one optical specification. Reuse simplifies the glass palette but does not make the elements optically interchangeable.

The surface-by-surface Petzval sum was evaluated as

$$
P=\sum_i\frac{\phi_i}{n_i n'_i},
$$

not by adding thin-element powers. At production scale it is $0.00621942\ \mathrm{mm}^{-1}$, corresponding to a reciprocal magnitude of $160.786757\ \mathrm{mm}$.

## Focus Mechanism

The patent publishes only the infinity prescription and gives no internal focusing movement. For the companion data file, the complete optical assembly is translated as a unit and only the image-side gap is varied. This is a modeling choice for the production manual-focus lens rather than a movement table transcribed from the patent.

The manufacturer specifies a 0.40 m minimum focusing distance measured from the film plane. Solving the complete paraxial conjugate condition at that fixed object-to-image distance gives:

| State | Last-surface BFD | Unit-focus extension | Paraxial magnification |
|---|---:|---:|---:|
| Infinity | 36.3866 mm | 0 | 0 |
| 0.40 m | 40.3837 mm | 3.9971 mm | $-0.1142$ (about 1:8.76) |

These close-focus quantities are computed values. Neither the patent nor the manufacturer manual supplies the extension or magnification.

## Conditional Expressions

The patent states eleven inequalities. Ten are internally unambiguous. Condition (3) is printed as a positive-radius inequality, $\infty\ge r_4>F$, even though the same worked example gives $r_4=-292.234$. That is a patent-internal sign or missing-magnitude inconsistency. The table records the printed form and tests the coherent magnitude interpretation, $|r_4|>F$; under that interpretation the numerical example satisfies all eleven conditions.

| No. | Patent condition | Computed value at $F=100$ | Result |
|---:|---|---:|---|
| 1 | $F/0.3>|F_1|>F/0.9$, $F_1<0$ | $F_1=-166.667704$ | Pass |
| 2 | $0.6F>t_1>0.3F$ | $t_1=47.000$ | Pass |
| 3 | Printed: $\infty\ge r_4>F$; tested as $|r_4|>F$ | $r_4=-292.234$; $|r_4|=292.234$ | Pass with source caveat |
| 4 | $4F>r_5>0.8F$ | $r_5=95.700$ | Pass |
| 5 | $0.5F>d_2+t_2+d_3>0.2F$ | $30.000$ | Pass |
| 6 | $F/0.7>F_{1,2,3}>F/1.2$ | $111.110887$ | Pass |
| 7 | $F/0.2>|F_{1\ldots5}|>F/0.8$, $F_{1\ldots5}<0$ | $-200.003003$ | Pass |
| 8 | $1.5F>r_{10}>0.7F$ | $98.025$ | Pass |
| 9 | $n_5>1.65$ | $1.74077$ | Pass |
| 10 | $0.12\ge n_6-n_7\ge0.01$ | $0.06148$ | Pass |
| 11 | $n_6,n_7,n_8>1.65$ | $1.83400, 1.77252, 1.77252$ | Pass |

## Stop and Semi-Diameter Modeling

The patent omits clear apertures. The data-file semi-diameters are inferred rather than transcribed.

Table 2 states only that the diaphragm is positioned between L4 and L5. Splitting that air gap at its midpoint gives a front-to-stop paraxial height coefficient of 1.05227388. An f/2 entrance-pupil semi-diameter of 8.749967 mm therefore requires a physical stop semi-diameter of 9.207362 mm at the assumed station. A different stop position within the same patent-specified gap would require different physical stop and clear-aperture dimensions without changing the refracting prescription.

The semi-diameters were checked with combined marginal- and chief-ray envelopes. The 22.5 mm front semi-diameter fits within the manufacturer's 49 mm filter envelope. At the viewer's standard 60% field setting, the largest paraxial ray-height-to-aperture ratio is 0.755, so that displayed bundle clears every modeled refracting surface.

Figure 1 shows the rear face of L7 ending at approximately the same height as the cemented surface 12, followed by a
distinct step out to the larger L8. Surface 13 therefore uses $sd=12.6\ \mathrm{mm}$ rather than extending to the L8
diameter.

Independent geometry checks give:

- minimum modeled edge thickness: 0.568 mm at L7;
- maximum front/rear semi-diameter ratio within one element: 1.201 at L3;
- maximum spherical rim angle: $49.73^\circ$ at surface 2;
- maximum positive cross-gap sag intrusion: 72.49% of the surface 10-11 air gap.

These values validate the inferred rendering model against the project limits. They do not establish the production lens's undocumented clear apertures.

## Verification Summary

The prescription was re-entered from both Table 1 and Claim 1. After the modeled stop split is collapsed, all fifteen radii, fourteen prescribed inter-surface dimensions, eight refractive indices, and eight Abbe numbers agree with the patent; the inferred BFD, stop location, and semi-diameters are the only optical-model additions.

Two independent paraxial implementations were then run: reduced-angle ABCD matrix multiplication and direct $y$-$u$ ray propagation. Their final system matrices agree to a maximum absolute element difference of $7.1\times10^{-15}$.

| Quantity | Verified value |
|---|---:|
| Patent-normalized EFL | 99.999623 |
| Patent-normalized BFD | 103.961793 |
| Production-scale EFL | 34.999868 mm |
| Production-scale BFD | 36.386628 mm |
| First-to-last optical vertex | 55.650000 mm |
| First vertex to image plane | 92.036628 mm |
| BFD / EFL | 1.039622 |
| L2-L8 main-group focal length | +35.374572 mm |
| L1-L3 assembled focal length | +38.888810 mm |
| L1-L5 assembled focal length | -70.001051 mm |
| L6-L7 cemented-pair focal length | +40.686523 mm |
| Petzval sum | $0.00621942\ \mathrm{mm}^{-1}$ |
| Petzval reciprocal magnitude | 160.786757 mm |
| 36 × 24 mm geometric diagonal half-field | $31.720080^\circ$ |
| Patent conditions | 11 of 11 under the stated condition (3) interpretation |

The manufacturer-published angle of view is 62°, whereas the geometric diagonal field for a nominal 36 × 24 mm frame at the computed focal length is approximately 63.44°. The manufacturer value remains authoritative for the production specification; the difference need not imply a prescription error because catalog angle, usable image area, distortion, and nominal focal-length conventions are not identical to a Gaussian geometric estimate.

## Sources

1. Yasuo Takahashi, **US 3,506,336, “Wide Angle Lens System,”** assigned to Asahi Kogaku Kogyo Kabushiki Kaisha, granted April 14, 1970. Figure 1 supplies the topology; Figure 2 supplies the f/2 and field context; Table 1 and Claim 1 independently repeat the numerical prescription.
2. Asahi Optical Co., **Asahi Pentax Spotmatic II operating manual**, printed pp. 27 and 35. The lens page supplies the manufacturer optical section, eight-element count, 0.40 m minimum distance, 62° angle of view, f/16 minimum aperture, and 242 g weight; the system table supplies the 49 mm filter size. https://www.cameramanuals.org/pentax_pdf/pentax_spotmatic_ii.pdf
3. OHARA Inc., **Glass Type**, current catalog table accessed July 2026. Used only to identify nearest current counterparts for the patent's $n_d/\nu_d$ pairs. https://www.ohara-inc.co.jp/en/product/01000/
