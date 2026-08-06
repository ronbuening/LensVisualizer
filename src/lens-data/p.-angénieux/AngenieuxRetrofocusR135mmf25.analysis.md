## Patent Reference and Design Identification

**Patent:** GB 673,358 A
**Filed:** 12 December 1950
**Priority:** France, 17 February 1950 and 5 July 1950
**Published:** 4 June 1952
**Inventor:** Pierre Angénieux
**Applicant:** Pierre Angénieux
**Title:** *Improvements in Wide-Angle Objectives*
**Embodiment analyzed:** Example I, Table I, Fig. 1

The modeled prescription is the first numerical embodiment of GB 673,358 A. The patent gives this example a relative
aperture of 1:2.5, a full field of 65°, and a nominal normalization of $F=100$. Its section and table describe six glass
elements in five air-spaced groups, with a cemented doublet at the rear. Example I is the selected production correlation for the P. Angénieux Retrofocus Type R1 35mm f/2.5.

The correlation rests on several convergent points:

1. Angénieux's historical material identifies the R1 as a 1950 Retrofocus lens with a 35mm focal length and f/2.5
   maximum aperture for reflex photography.
2. Example I has the same nominal aperture and a 65° field appropriate to a 35mm rectilinear lens on the 24×36mm
   format.
3. The patent's defining architecture—a large front negative meniscus separated from a rear convergent member—is the
   architecture represented by the production R1 designation.
4. The patent priority and filing dates coincide with the product's documented introduction period.

This evidence supports the assignment, but no cited manufacturer source explicitly states that the production R1 used
“Example I” or reproduces Table I. The example-to-product identification is therefore the selected correlation,
not a claim of direct manufacturer confirmation.

The data file preserves the patent's $F=100$ prescription through a uniform scale factor of $s=0.35$. All radii,
center thicknesses, air spaces, semi-diameters, and the modeled image-plane distance are in millimeters after scaling;
refractive indices and Abbe values are unchanged. The marketed focal length remains 35mm, while paraxial tracing of the
scaled prescription gives a design EFL of 35.37154355mm. The example is entirely spherical, so no aspheric coefficient
transformation is required.

The British table prints a back focal length of 104.98 in its stated $F=100$ normalization, equivalent to 36.743mm
under the file's direct $s=0.35$ scale. The rounded prescription rows themselves trace to EFL 101.06155299 and BFL
106.15136552. Renormalizing that trace to exact EFL 100 gives BFL 105.03634902, only 0.05635 above the printed value;
most of the apparent difference is therefore a common normalization offset rather than a separate rear-spacing error.
The modeled final image gap uses the direct scaled traced value, 37.15297793mm, so that the image plane lies at
paraxial infinity focus.

## Optical Architecture

The design is a strongly asymmetric retrofocus objective: a large, isolated negative meniscus is followed across a
long air space by a net-positive rear member. Independent tracing gives $\mathrm{BFD}/\mathrm{EFL}=1.05036$, satisfying
the quantitative retrofocus criterion $\mathrm{BFD}>\mathrm{EFL}$. It is not a telephoto system.

The six elements form the following front-to-rear sequence:

- L1: isolated negative meniscus;
- L2: biconvex positive singlet;
- L3: positive meniscus;
- L4: biconcave negative singlet;
- L5a–L5b: cemented positive doublet formed by a negative meniscus and a strong biconvex positive element.

The patent describes L2 through L5b collectively as the convergent member. L2 and L3 build positive power before the
stop; L4 introduces strong negative power immediately after it; and the cemented rear doublet restores positive power
near the image side. This alternating distribution permits a back focal distance slightly longer than the complete
system focal length while retaining a 65° field and f/2.5 aperture.

Fig. 1 places the diaphragm in the air space between the rear surface of L3 and the front surface of L4, but the patent
does not tabulate its axial station or diameter. The model divides that 3.192mm scaled gap at its midpoint and solves a
7.56213201mm stop semi-diameter from the final prescription and the published f/2.5 aperture. The resulting entrance-
pupil semi-diameter is 7.07430871mm. Both the station and physical stop diameter are modeling inferences.

The patent also omits clear apertures. The authored semi-diameters were inferred from on-axis and meridional off-axis
ray containment, then limited by edge thickness, actual spherical rim slope, cross-gap intrusion, and cemented-group
continuity. They are not patent dimensions. No filter, cover plate, inactive dummy plane, flare cutter, or mechanical
part appears in the selected example, and none is included in the model.

## Element-by-Element Analysis

The focal lengths below are standalone thick-element values in air unless a cemented-net value is explicitly identified.
They do not represent each element's effective contribution after separation and interaction with the rest of the
objective.

### L1 — Negative Meniscus, convex toward the object

**$n_d=1.6145$, $\nu_d=59.8$. Glass: BACD4 (HOYA catalog equivalent to patent 615598 barium-crown coordinate; production supplier unspecified). Standalone
$f=-91.9152$mm.**

L1 is the defining front negative component. Its large diameter and long separation from L2 expand the back focal
clearance required by a reflex camera while allowing the following positive member to form the final image. The patent
makes the separation between this meniscus and the rear member a central condition of the design and requires it to
exceed one-half of the equivalent focal length.

The element has moderate refractive index and the highest Abbe number in the prescription. HOYA BACD4 is used as a
coefficient-backed barium-crown equivalent, not as a historical production identification. The large front semi-diameter is an inferred
clear aperture chosen to contain useful wide-field rays while keeping the steep rear surface within the modeled
rim-slope limit.

### L2 — Biconvex Positive Singlet

**$n_d=1.6243$, $\nu_d=46.8$. Glass: E-BAF8 (Hikari catalog equivalent to patent 624468 barium-flint coordinate; production supplier unspecified). Standalone $f=+50.6180$mm.**

L2 begins the rear convergent member. Its biconvex form supplies positive power after the long front air space, turning
the diverging bundle from L1 back toward convergence. The short following air gap separates it from L3 without creating
a cemented pair.

Its Abbe value lies between L1 and the lower-$\nu_d$ negative elements farther rearward. The patent's barium-flint
context and the compatible Hikari E-BAF8 curve support a class-consistent optical equivalent, while the historical
melt and supplier remain unknown.

### L3 — Positive Meniscus, convex toward the object

**$n_d=1.6226$, $\nu_d=53.0$. Glass: SSK2 (Sumita catalog equivalent to patent 623530 dense-crown coordinate; production supplier unspecified). Standalone
$f=+52.8054$mm.**

L3 is the second positive singlet of the convergent member and the last glass element before the diaphragm. Its front
surface carries substantially more curvature than its rear surface, producing a positive meniscus that continues the
pre-stop convergence while avoiding another strongly curved rear interface immediately adjacent to the stop.

The modeled stop follows L3 at the midpoint of the published L3–L4 air gap. Because the patent shows but does not
measure the diaphragm location, any interpretation of L3's exact stop-relative aberration balance remains model-
dependent.

### L4 — Biconcave Negative Singlet

**$n_d=1.6141$, $\nu_d=37.0$. Glass: F3 (Sumita catalog equivalent to patent 614370 flint coordinate; production supplier unspecified). Standalone
$f=-18.4865$mm.**

L4 is the strongest negative standalone element in the objective and lies immediately behind the stop. It interrupts
the positive progression of L2 and L3 before the final doublet. In architectural terms, this negative power helps
redistribute convergence within the rear member rather than allowing all positive power to accumulate ahead of the
image plane.

Its relatively low Abbe number places it among the design's more dispersive materials. The patent's preferred condition
that this element have $n_d<1.58$ is not satisfied: Example I uses $n_d=1.6141$. The patent expressly states that Example
I does not employ that preferred condition, so the value is not a transcription error.

### L5a–L5b — Cemented Positive Doublet

#### L5a — Negative Meniscus, front member

**$n_d=1.6287$, $\nu_d=35.3$. Glass: F1 (Sumita catalog equivalent to patent 629353 flint coordinate; production supplier unspecified). Standalone
$f=-23.9090$mm.**

L5a is a thin negative meniscus with the lowest Abbe number in the prescription. Its rear surface is cemented directly
to L5b. The standalone focal length describes L5a isolated in air and must not be added directly to the power of L5b.

#### L5b — Biconvex Positive, rear member

**$n_d=1.6391$, $\nu_d=55.8$. Glass: K-SK18 (Sumita catalog equivalent to patent 639558 dense-crown coordinate; production supplier unspecified).
Standalone $f=+13.3653$mm.**

L5b is the strongest positive standalone element. Its biconvex form supplies the dominant positive contribution of the
rear cemented group and places a strongly converging surface close to the image side.

Together, L5a and L5b form a cemented group with a computed net focal length of $+26.5824$mm in air. This is the proper
net value for the intact doublet; it differs from either isolated-member focal length and from the doublet's behavior
inside the complete objective. The opposite element powers and contrasting $\nu_d$ values are consistent with ordinary
cemented chromatic compensation, but the available data do not support an apochromatic or anomalous-partial-dispersion
claim.

## Glass Identification and Selection

The patent supplies only $n_d$ and $\nu_d$. It gives no manufacturer names, historical melt designations, line indices,
or $\Delta P_{g,F}$ values. The surrounding patent text does identify crown, barium-crown, barium-flint, and flint
roles. Those class cues and the coordinate audit support the following coefficient-backed optical equivalents; none
is evidence of the glasses actually sourced in France in 1950.

| Element | Patent $n_d$, $\nu_d$ | Catalog-equivalent curve | Patent-minus-catalog residual $(\Delta n_d, \Delta \nu_d)$ |
|---|---:|---|---:|
| L1 | 1.6145, 59.8 | HOYA BACD4, barium crown | $(+0.001780,+1.220)$ |
| L2 | 1.6243, 46.8 | Hikari E-BAF8, barium flint | $(+0.000560,-0.244)$ |
| L3 | 1.6226, 53.0 | Sumita SSK2, dense crown | $(+0.000300,-0.100)$ |
| L4 | 1.6141, 37.0 | Sumita F3, flint | $(+0.001170,+0.100)$ |
| L5a | 1.6287, 35.3 | Sumita F1, flint | $(+0.002820,-0.300)$ |
| L5b | 1.6391, 55.8 | Sumita K-SK18, dense crown | $(+0.000560,+0.300)$ |

All six selected curves fall inside the project's catalog-resolution window and agree with the patent's stated glass
classes. They improve wavelength-dependent tracing while leaving the patent's authored d-line coordinates unchanged.
The relative Abbe-number pattern is consistent with ordinary cemented chromatic compensation, most clearly in the
final doublet, but it does not establish apochromatic correction or anomalous partial dispersion.

## Focus Mechanism

GB 673,358 A publishes one fixed prescription and no object-distance table, magnification, moving-group description, or
focus-dependent spacing. The data therefore has the status `NO_INTERNAL_RECONSTRUCTION` and authors no variable focus spacings. It does
not model unit extension, an internal floating group, or any close-focus optical state.

The required catalog field `closeFocusM` is 0.914m, taken as representative metadata for an Exakta production specimen.
It is not a patent value, does not establish a universal R1 minimum-focus distance across mounts or production variants,
and does not alter the infinity prescription. The production focusing mechanism is consequently outside the modeled
optical data.

## Conditional Expressions

The dimensional conditions below are evaluated in the patent's original $F=100$ normalization. Uniform scaling leaves
their ratios and pass/fail results unchanged.

| Patent condition | Example I value | Result |
|---|---:|---|
| $|f_{L1}|<4F$ | $262.615<400$ | Satisfied |
| Front separation $e_2>0.5F$ | $93.18>50$ | Satisfied |
| Rear radius of L1, $R_2<1.5F$ | $84.06<150$ | Satisfied |
| Preferred $R_3>R_2$ | $114.40>84.06$ | Satisfied |
| Preferred $e_8<e_9+e_{10}$ | $10.13<18.48$ | Satisfied |
| Preferred $n_d(L4)<1.58$ | $1.6141<1.58$ | Not satisfied; expressly omitted in Example I |
| Preferred final compound lens is a triplet | Final group is a doublet | Not satisfied; expressly omitted in Example I |

The two failed preferred conditions are not contradictions. The patent specifically notes that Example I does not
comply with those conditions and uses a doublet rather than the preferred triplet.

## Verification Summary

Independent reduced-angle ABCD tracing and sequential paraxial tracing of the final data arrays agree on an EFL of
35.37154355mm and a BFL of 37.15297793mm. The reduced-angle matrix determinant is unity within floating-point precision,
and the authored last gap places a parallel paraxial ray on the modeled image plane to numerical precision.

The solved entrance pupil and stop geometry reproduce f/2.5. All on-axis test rays and the representative 19.5° off-axis
bundle pass the modeled apertures. At the patent's 32.5° half-field, extreme pupil rays vignette at physical element
boundaries; no tested full-field ray first clips at the internal cemented interface. The chief ray reaches approximately
22.35mm image height, close to the 22.53mm paraxial rectilinear value derived from the design EFL and field angle.

The inferred geometry satisfies the modeled validation constraints: minimum computed edge thickness
0.3738mm, maximum spherical rim-slope angle 60.08°, and maximum shared-gap intrusion fraction 0.5551 against the 0.90
policy. The surface-by-surface Petzval sum, computed as $\phi/(n n')$, is $+0.00662175\,\mathrm{mm}^{-1}$, corresponding
to an image-surface radius of $-151.02$mm under the convention $1/R_P=-\sum P_i$.

These results verify the authored prescription and inferred apertures, not measured production performance. They do not
supply MTF, distortion calibration, chromatic line data, or a close-focus model.

## Design Context

The R1 represents Angénieux's early application of a separated front negative meniscus to a wide-angle reflex-camera
objective. The patent's long front separation and net-positive rear member address the mechanical problem stated in the
specification: a conventional short-focus wide-angle objective cannot place its rear components sufficiently far from
the focal plane to clear a reflex mirror. Angénieux's own historical timeline identifies the 1950 35mm f/2.5 R1 as the
first lens in its Retrofocus line.

The patent's quantitative architecture remains the relevant distinction. Its back focal distance is slightly greater
than its effective focal length, whereas the complete first-vertex-to-image track is much longer than either. The term
“retrofocus” is therefore supported here by the computed back-focus relation, not used as a general stylistic label.

## Sources

- Pierre Angénieux, *Improvements in Wide-Angle Objectives*, GB 673,358 A, filed 12 December 1950, published 4 June
  1952, especially Example I, Table I, and Fig. 1.
- Angénieux, [“Inventions signed Pierre Angénieux”](https://www.angenieux.com/our-story/inventions-signed-pierre-angenieux/).
- Angénieux, [“History timeline”](https://www.angenieux.com/about-us/history/history-timeline/).
- Kamerastore, [P. Angénieux 35mm f/2.5 Retrofocus Type R1, Exakta specimen](https://kamerastore.com/en-fi/products/angenieux-35mm-f2-5-retrofocus-type-r1-exakta), used only for the representative 0.914m catalog field.
- OHARA, [Optical Glass Catalog Download](https://www.ohara-inc.co.jp/en/product/catalog/), used for current coordinate comparison only.
- SCHOTT, [Downloads for Optical Glass](https://www.schott.com/en-us/products/optical-glass-p1000267/downloads), used for current coordinate comparison only.
- HOYA, [Optical Glass Data](https://www.hoyaoptics.eu/download/optical-glass-data) and [Glass Cross Reference Index](https://www.hoyaoptics.eu/glass-cross-reference-index), used for current coordinate comparison only.
- HIKARI, [Optical Glass Catalog Download](https://www.hikari-g.co.jp/optical_glass/catalog/), used for current coordinate comparison only.
- CDGM, [Colourless Optical Glass](https://www.cdgmgd.com/go.htm?k=Colourless_Optical_Glass&url=goods), used for current coordinate comparison only.
- SUMITA, [Downloads](https://www.sumita-opt.co.jp/en/download/), consulted as a current manufacturer-catalog source; no historical identity is assigned.
