# CANON EF 24mm f/1.4 L USM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** JP 1999-030743 A (特開平11-30743)  
**Application Number:** JP H09-202367  
**Filed:** 11 July 1997  
**Published:** 2 February 1999  
**Inventor:** Makoto Misaka (三坂 誠)  
**Applicant:** Canon Inc.  
**Title:** レトロフォーカス型レンズ (_Retrofocus-Type Lens_)  
**Embodiment analyzed:** Numerical Example 6, Table 7, Figure 7  
**Worked examples:** 7  
**Claims:** 3

Numerical Example 6 is the strongest prescription match to the first-generation Canon EF 24mm f/1.4 L USM. The
identification rests on several independent correspondences rather than the nominal focal length alone.

1. Example 6 contains eleven elements in nine air-spaced groups. Canon's official production record gives the same
   11-element/9-group construction.
2. The example contains one 497/816 low-dispersion element in the front cemented pair and one aspherical positive
   element in the rear cemented pair. Canon's production diagram marks one UD element and one ground-and-polished
   aspherical element in those same positions.
3. The patent header gives $f=24.6\ \mathrm{mm}$, $F/1.45$, and $2\omega=82.7^\circ$. The production lens was marketed as
   24 mm f/1.4. The prescription is therefore retained at its published scale; no 24.6-to-24.0 mm rescaling is applied.
4. The paraxial rectilinear image height implied by the patent header is
   $24.6\tan(41.35^\circ)=21.650\ \mathrm{mm}$, agreeing with the 21.64 mm maximum ordinate in the Example 6 aberration
   plot and with 135-format coverage.
5. Canon records a December 1997 production release, five months after the July 1997 patent filing. The timing is
   consistent with a near-production design.
6. The official production cross-section and patent Figure 7 agree in the sequence of two front negative menisci, the
   front UD cemented pair, the post-stop aspherical cemented pair, and the two rear positive menisci.
7. The later EF 24mm f/1.4 L II USM is excluded: Canon records a different 13-element/10-group design with two UD and two
   aspherical elements.

The identification is architectural, optical, and chronological. It does not imply that Canon disclosed the production
melt names or the complete production focusing cam in the patent.

### Patent-table corrections required by internal consistency

Two entries in Table 7 cannot be used literally without contradicting other numbers in the same patent.

- **L7 Abbe number:** Table 7 prints $\nu_d=28.64$. The published d-, C-, and F-line indices give
  $\nu_d=(1.728250-1)/(1.746453-1.720865)=28.4606$. The corrected value also corresponds to the 728/285 S-TIH10/SF10
  glass class. The data file uses 28.4606.
- **L10 d-line index:** Table 7 prints $n_d=1.613112$, which is greater than its printed F-line index 1.610018 and is
  therefore spectrally impossible for a normal optical glass. Reading the value as **1.603112** gives
  $\nu_d=60.6997$, identifies the 603/607 S-BSM14/J-SK14 class, and reproduces the patent's own condition-(9)
  correspondence value $f_{2b}/f=1.47$. The data file uses 1.603112 while preserving the printed value in the patent-consistency
  discussion.

These are emendations of demonstrable typographical defects, not adjustments made to force the complete-lens focal
length toward 24 mm.

## Optical Architecture

Example 6 is a two-group retrofocus wide-angle lens. A negative front group B1 precedes a positive rear group B2. B2 is
subdivided into a positive front subgroup B2a, the aperture stop, and a positive rear subgroup B2b. A neutral flare
cutter C lies within B2a.

The eleven elements form nine air-spaced groups:

- **B1:** two air-spaced negative menisci followed by a biconvex positive element;
- **B2a:** a cemented positive/negative pair, a biconvex positive element, and a biconcave negative element;
- **B2b:** a cemented negative/positive pair followed by two positive rear menisci.

The corrected d-line paraxial powers are:

| Assembly                   | Patent surfaces |            Focal length |
| -------------------------- | --------------: | ----------------------: |
| B1 negative-only component |             1–4 |  $-47.771\ \mathrm{mm}$ |
| Complete B1                |             1–6 | $-118.406\ \mathrm{mm}$ |
| B2a                        |            7–14 |  $+81.513\ \mathrm{mm}$ |
| B2b                        |           16–22 |  $+36.235\ \mathrm{mm}$ |
| Complete B2                |            7–22 |  $+33.457\ \mathrm{mm}$ |
| Cemented L4/L5             |             7–9 |  $-97.559\ \mathrm{mm}$ |
| Cemented L8/L9             |           16–18 |  $-43.916\ \mathrm{mm}$ |

Both cemented pairs are net negative despite containing a positive component. This distinction matters: the standalone
in-air focal length of an individual component is not its in-situ contribution after cementing to a glass of different
index.

The corrected complete prescription has $\mathrm{EFL}=24.815\ \mathrm{mm}$ and a Gaussian back focal length of
$38.215\ \mathrm{mm}$ from surface 22. Thus $\mathrm{BFL}/\mathrm{EFL}=1.540>1$, the defining long-back-focus geometry
of a retrofocus SLR wide-angle. It is not a telephoto system; its front group is strongly negative and its image-side
clearance exceeds its focal length.

## Element-by-Element Analysis

### L1 — Negative Meniscus, Convex to Object

**$n_d=1.696797$, $\nu_d=55.53$. Glass: S-LAL14-equivalent 697/555 lanthanum-crown class. Standalone
$f=-86.618\ \mathrm{mm}$.**

Both radii are positive in the patent convention, with the rear surface more strongly curved, so L1 is a negative
meniscus convex to the object. It begins the negative-only component required by claim 3. Its relatively high index
supports front-group divergence without the very low Abbe number that would intensify negative lateral color.

### L2 — Negative Meniscus, Convex to Object

**$n_d=1.696797$, $\nu_d=55.53$. Glass: S-LAL14-equivalent 697/555 lanthanum-crown class. Standalone
$f=-114.839\ \mathrm{mm}$.**

L2 repeats L1's glass but has weaker standalone negative power. The air separation between L1 and L2 provides additional
control over front-group distortion, astigmatism, and pupil geometry. The patent's conditions (1) and (2) apply to the
average properties of these two negative elements rather than assigning either element an isolated correction role.

### L3 — Biconvex Positive

**$n_d=1.712995$, $\nu_d=53.84$. Glass: N-LAK8-equivalent 713/538 lanthanum-crown class. Standalone
$f=+97.419\ \mathrm{mm}$.**

L3 is the positive component completing B1. Paragraphs 0016–0018 describe the positive member of the leading negative
group as balancing the negative distortion and negative lateral chromatic aberration generated by that group.
Condition (3) limits the dispersion difference between the negative and positive members.

The patent's full C-, d-, F-, and g-line indices match the 713/538 N-LAK8 catalog position. Vendor identity remains
inferred because the patent names no glass manufacturer.

### L4/L5 — Cemented Positive/Negative Pair in B2a

**L4: $n_d=1.846660$, $\nu_d=23.78$. Glass: S-TIH53/N-SF57-equivalent 847/238 dense-flint class. Standalone
$f=+98.343\ \mathrm{mm}$.**

**L5: $n_d=1.496999$, $\nu_d=81.61$. Glass: FCD1-equivalent 497/816 fluorophosphate ED class. Standalone
$f=-47.578\ \mathrm{mm}$.**

L4 and L5 share the weakly curved surface 8. L4 is a positive meniscus; L5 is a negative meniscus despite its almost
plane front interface. The cemented assembly has $f=-97.559\ \mathrm{mm}$ in air.

L5 is the patent's element F, the most object-side negative element in B2a. Conditions (4)–(6) govern its high Abbe
number, its distance from the stop, and its anomalous partial dispersion. Paragraphs 0020–0026 place this low-dispersion
negative element before the stop to reduce the residual lateral color from B1 while maintaining separation between
axial and off-axis ray bundles. Canon's production diagram marks this location as the lens's single UD element.

### L6 — Biconvex Positive

**$n_d=1.804000$, $\nu_d=46.58$. Glass: S-LAH65V-equivalent 804/466 dense lanthanum-flint class. Standalone
$f=+25.927\ \mathrm{mm}$.**

L6 is the strongest standalone positive element in the system and supplies much of B2a's converging power after the
negative cemented pair. Its $\nu_d<50$ places it in dense lanthanum-flint territory, not crown territory, despite the
lanthanum family name.

### L7 — Biconcave Negative

**$n_d=1.728250$, corrected $\nu_d=28.4606$. Glass: S-TIH10/SF10-equivalent 728/285 dense-flint class. Standalone
$f=-48.914\ \mathrm{mm}$.**

The negative front radius and positive rear radius establish a biconcave form. L7 moderates the strongly positive power
of B2a immediately before the stop gap. Its corrected Abbe number is obtained directly from the patent's spectral
indices; retaining 28.64 would create an internally inconsistent material record.

### L8/L9 — Cemented Negative/Positive Pair in B2b

**L8: $n_d=1.805181$, $\nu_d=25.42$. Glass: S-TIH6/SF6-equivalent 805/254 dense-flint class. Standalone
$f=-20.161\ \mathrm{mm}$.**

**L9: $n_d=1.834807$, $\nu_d=42.72$. Glass: S-LAH55V-equivalent 835/427 dense lanthanum-flint class. Standalone
$f=+42.451\ \mathrm{mm}$.**

L8 is biconcave and L9 is biconvex. Their nearly plane cemented interface is surface 17; the combined pair has
$f=-43.916\ \mathrm{mm}$. Surface 18, the rear face of L9, is the sole asphere. The official production diagram marks
the positive member of this same pair as the aspherical element.

The asphere's correction should be attributed to the compact cemented assembly rather than to a single named
aberration. The patent supplies non-spherical freedom at a high-power post-stop location but does not assign surface 18
exclusive responsibility for one aberration.

### L10 — Positive Meniscus, Convex to Image

**Corrected $n_d=1.603112$, $\nu_d=60.6997$. Glass: S-BSM14/J-SK14-equivalent 603/607 crown class. Standalone
$f=+43.604\ \mathrm{mm}$.**

Both radii are negative, with the rear surface much more strongly curved, so L10 is a positive meniscus convex to the
image. The corrected d-line value is independently supported by the patent's C, F, and g indices and by official
603/607 catalog data.

L10 is the only positive B2b element satisfying both optional conditions (10), $n>1.6$, and (11), $\nu>60$. Its partial
dispersion falls short of optional condition (12), so Example 6 does not realize the complete optional three-condition
set.

### L11 — Positive Meniscus, Convex to Image

**$n_d=1.772499$, $\nu_d=49.60$. Glass: S-LAH66-equivalent 773/496 lanthanum-flint class. Standalone
$f=+56.798\ \mathrm{mm}$.**

L11 is the final positive meniscus and completes B2b's positive net power. Its Abbe number lies just below the usual
crown/flint boundary, so it is properly described as a lanthanum flint. Together with L10 it provides the rearward
convergence and long image-side clearance required by the EF SLR mount.

## Glass Identification and Selection

The patent publishes $n_d$, $\nu_d$, and d/g/C/F line indices but no vendor names. Glass labels are therefore catalog
**equivalents or classes**, not assertions about Canon's production melts. Identifications were checked against official
OHARA, HOYA, SCHOTT, and HIKARI catalog data without seeding the search with a desired product name.

| Element | Patent or corrected optical position | Preferred catalog class | Qualification                                         |
| ------- | -----------------------------------: | ----------------------- | ----------------------------------------------------- |
| L1, L2  |                              697/555 | S-LAL14 class           | Exact six-digit position; vendor not disclosed        |
| L3      |                              713/538 | N-LAK8 class            | Full spectral match                                   |
| L4      |                              847/238 | S-TIH53 / N-SF57 class  | Dense flint; multiple vendor equivalents              |
| L5      |                              497/816 | FCD1 / S-FPL51 class    | FCD1 exactly matches $\nu_d$; vendor remains inferred |
| L6      |                              804/466 | S-LAH65V class          | Dense lanthanum flint                                 |
| L7      |                              728/285 | S-TIH10 / SF10 class    | Requires $\nu_d=28.4606$ emendation                   |
| L8      |                              805/254 | S-TIH6 / SF6 class      | Dense flint                                           |
| L9      |                              835/427 | S-LAH55V class          | Dense lanthanum flint                                 |
| L10     |                    corrected 603/607 | S-BSM14 / J-SK14 class  | Printed $n_d=1.613112$ is impossible                  |
| L11     |                              773/496 | S-LAH66 class           | Full spectral match; not the later S-LAH66N variant   |

The strongest chromatic design choice is L5. From its patent line indices,

$$
P_{g,F}=\frac{n_g-n_F}{n_F-n_C}=0.537603,
$$

while the SCHOTT normal-line value $0.6438-0.001682\nu_d$ is 0.506532. Thus
$\Delta P_{g,F}=+0.031071$. L10 lies close to the normal line, with
$P_{g,F}=0.540862$ and $\Delta P_{g,F}=-0.000841$. The prescription therefore supports a deliberate
secondary-spectrum correction strategy centered on L5, but it does not by itself establish apochromatic performance for
the complete lens.

## Focus Mechanism

Paragraph 0039 permits several focusing arrangements and identifies one as preferable for autofocus: B1 remains fixed,
while B2a and B2b move toward the object and approach one another. At the published infinity state, the axial distance
from surface 14 to surface 16 through the stop is $5.098+7.843=12.941\ \mathrm{mm}$.

Canon describes the production lens as using rear focus, a floating system, and ring-type USM. Those production terms
are broadly consistent with the patent's divided B2 architecture, but the patent does not publish enough finite-focus
data to prove the exact production cam law.

| Quantity               |  Published infinity state |                       Close-focus state |
| ---------------------- | ------------------------: | --------------------------------------: |
| Numerical prescription |                   Table 7 |                           Not published |
| B1 motion              | Fixed in preferred scheme |               Fixed in preferred scheme |
| B2a/B2b motion         |  Single infinity position | Objectward; mutual separation decreases |
| Minimum focus distance |                         — |         0.25 m production specification |
| Maximum magnification  |                         — |          0.16× production specification |

No close-focus spacings, subgroup travels, or finite-object magnifications are tabulated. The companion data file
therefore leaves `var` empty rather than inventing a focus model. The production MFD is retained only as catalog
metadata.

## Aspherical Surfaces

Surface 18A, the rear surface of L9, is the only asphere. Paragraph 0042 gives the base form

$$
X=\frac{h^2/r}{1+\sqrt{1-(h/r)^2}}+Ah^2+Bh^4+Ch^6+Dh^8+Eh^{10}.
$$

The radicand is the standard conic expression with $K=0$, so the base is spherical rather than a shifted Japanese
$\kappa$ convention. Table 7 adds a coefficient F even though the printed equation stops at E. The dimensionally
consistent interpretation is that F multiplies $h^{12}$; this assignment is an editorial inference and is identified as
such.

| Standard coefficient | Patent column     |                    Value |
| -------------------- | ----------------- | -----------------------: |
| $K$                  | implicit          |                      $0$ |
| $A_4$                | B                 |  $+2.04769\times10^{-5}$ |
| $A_6$                | C                 |  $+2.22129\times10^{-8}$ |
| $A_8$                | D                 | $-2.10838\times10^{-11}$ |
| $A_{10}$             | E                 | $-1.46493\times10^{-13}$ |
| $A_{12}$             | F, inferred order | $+2.10282\times10^{-16}$ |

At the inferred semi-diameter $h=15.7\ \mathrm{mm}$, the base sphere has sag $-3.6365\ \mathrm{mm}$ and the complete
asphere has sag $-2.2237\ \mathrm{mm}$. The departure is therefore $+1.4128\ \mathrm{mm}$ toward the image relative to
the base sphere, producing a substantially flatter peripheral profile. The calculated rim slope is $7.63^\circ$.

Canon identifies the production element as a ground-and-polished glass asphere, not a molded plastic or hybrid
aspherical layer.

## Conditional Expressions and Claims

Claims 1–3 define the negative B1 / positive B2 architecture, the split of B2 around the stop, the material limits, and
the normalized group powers. Claim 3's definition sentence mistakenly describes $f_{2b}$ as the focal length of the
"front subgroup." The symbol, Figure 1, paragraphs 0030–0032, and the correspondence table establish that it is the
focal length of the **rear subgroup B2b**.

The patent normalizes group powers by its stated $f=24.6\ \mathrm{mm}$, so the same denominator is used below rather than
the independently calculated 24.815 mm EFL.

| No. | Patent expression          |          Example 6 result | Patent correspondence | Status    |
| --: | -------------------------- | ------------------------: | --------------------: | --------- |
| (1) | $1.6<n_{1N}$               |                  1.696797 |                1.6968 | Satisfied |
| (2) | $46<\nu_{1N}$              |                     55.53 |                  55.5 | Satisfied |
| (3) | $\nu_{1N}-\nu_{1P}<10$     | 1.69 from rounded entries |                  1.68 | Satisfied |
| (4) | $75<\nu_{2aNF}$            |                     81.61 |                  81.6 | Satisfied |
| (5) | $0.5<S_{2aNF}/f<2.0$       |     $25.812/24.6=1.04927$ |                 1.049 | Satisfied |
| (6) | $P_{g,F}>-0.0016\nu+0.645$ |       $0.537603>0.514424$ |                     — | Satisfied |
| (7) | $2.0<f_{2a}/f<5.0$         |     $81.513/24.6=3.31354$ |                  3.31 | Satisfied |
| (8) | $-10<f_1/f<-2.0$           |  $-118.406/24.6=-4.81324$ |                 −4.83 | Satisfied |
| (9) | $1.0<f_{2b}/f<2.0$         |     $36.235/24.6=1.47295$ |                  1.47 | Satisfied |

For condition (5), $S_{2aNF}$ is measured from the rear surface of L5, surface 9, to the stop:
$d_9+d_{10}+d_{11}+d_{12}+d_{13}+d_{14}=25.812\ \mathrm{mm}$.

Paragraph 0035 gives optional rear-positive-element conditions (10)–(12). L10 satisfies $n>1.6$ and $\nu>60$, but its
$P_{g,F}=0.540862$ is below the condition-(12) threshold 0.543880 by 0.003018. L9 and L11 fail the $\nu>60$ condition.
The complete optional set is therefore not realized in Example 6.

## Chromatic Correction Strategy

The patent distributes chromatic correction between the front negative group and the first negative element of B2a.

B1 uses two 697/555 negative menisci and a 713/538 positive element. Their closely matched Abbe numbers keep
$\nu_{1N}-\nu_{1P}$ small, which paragraphs 0016–0018 connect to controlling color-dependent distortion while the
positive component offsets the negative distortion and negative lateral color of the front group.

L5 then uses 497/816 ED glass with strong positive anomalous partial dispersion. Its placement 25.812 mm ahead of the
stop is part of the patented strategy: the designer obtains chromatic leverage over the high off-axis bundles without
placing the ED glass in the frontmost, largest-diameter elements. This is a secondary-spectrum correction mechanism, not
evidence that the finished lens is apochromatic.

## Verification Summary

### Paraxial trace and residual patent inconsistency

The independent trace uses the reduced-angle vector $[y,n\theta]^T$ with surface and translation matrices

$$
S_i=\begin{bmatrix}1&0\\-(n_i'-n_i)/r_i&1\end{bmatrix},\qquad
T_i=\begin{bmatrix}1&d_i/n_i'\\0&1\end{bmatrix}.
$$

For $M=\begin{bmatrix}A&B\\C&D\end{bmatrix}$ from object-side air to surface 22,
$\mathrm{EFL}=-1/C$ and $\mathrm{BFL}=-A/C$.

| Trace                                           |          EFL | Difference from patent 24.6 mm | Gaussian BFL from s22 | Difference from printed $d_{22}$ |
| ----------------------------------------------- | -----------: | -----------------------------: | --------------------: | -------------------------------: |
| Literal Table 7, including impossible L10 $n_d$ | 24.498246 mm |                   −0.101754 mm |          37.673189 mm |                     +1.206189 mm |
| Corrected material data used in the files       | 24.815116 mm |                   +0.215116 mm |          38.214989 mm |                     +1.747989 mm |

The literal table happens to reproduce the nominal EFL more closely, but it cannot represent a physically consistent
L10 glass and fails the patent's own condition-(9) correspondence. The corrected material value is therefore retained.
The remaining 0.874% EFL difference and the 1.748 mm BFL/image-plane difference are disclosed rather than "repaired" by
an unsupported radius or spacing change. The data file preserves the patent's printed final spacing
$d_{22}=36.467\ \mathrm{mm}$.

The axial track is 81.171 mm from surface 1 to surface 22 and 117.638 mm from surface 1 to the printed image plane.

### Petzval curvature

The Petzval sum was recomputed surface by surface,

$$
P=\sum_i\frac{\phi_i}{n_i n_i'},\qquad \phi_i=\frac{n_i'-n_i}{r_i},
$$

rather than by a thin-lens element approximation. With the corrected L10 index,
$P=+0.004467475\ \mathrm{mm}^{-1}$, corresponding under the stated sign convention to a signed Petzval radius of
$-223.840\ \mathrm{mm}$.

### Semi-diameter and rendering checks

The patent publishes no clear apertures. The companion data file uses inferred semi-diameters derived from an exact
meridional trace: the on-axis marginal ray sets the f/1.45 stop, while the 41.35° chief ray and a mechanically vignetted
edge-field pupil set the off-axis envelope. The resulting apertures are then constrained against mechanical and geometric
limits.

- The corrected paraxial EFL at f/1.45 requires an entrance-pupil semi-diameter of 8.5569 mm. Exact spherical/aspherical
  tracing places the corresponding on-axis marginal ray at 8.3468 mm on the surface-1 vertex plane and gives the adopted
  physical stop semi-diameter of 11.5174 mm.
- At the full 41.35° half-field, the exact chief ray clears every surface. The inferred apertures transmit 51.6% of the
  on-axis pupil width at that extreme field; the remaining clipping is explicit mechanical vignetting rather than an
  unstated full-pupil assumption.
- The largest inferred clear aperture is 26.2 mm at surface 1, or 52.4 mm diameter, within the production lens's 77 mm
  filter envelope.
- The maximum $sd/|R|$ is 0.724 at surface 16.
- The maximum front/rear semi-diameter ratio within one element is 1.248 at L1.
- The minimum calculated edge thickness is 0.572 mm at L11.
- The tightest signed cross-gap clearance is 10.75% of the axial gap between surfaces 2 and 3, leaving the sag intrusion
  below the 90% project limit.
- Surface 18A was checked with its full polynomial sag. No surface requires hidden rim trimming to satisfy the stated
  limits.

These semi-diameters are engineering reconstructions, not patent-published dimensions.

## Sources

1. JP 1999-030743 A (特開平11-30743), Canon Inc., _レトロフォーカス型レンズ_. Numerical Example 6: Table 7 and
   Figure 7; claims on page 2; conditions and focusing discussion in ¶0011–0039; asphere equation in ¶0042; correspondence
   table in ¶0050.
2. Canon Camera Museum, “EF24mm f/1.4 L USM”: production date, 9-group/11-element construction, 0.25 m minimum focus,
   0.16× maximum magnification, 77 mm filter, seven blades, one UD element, one ground-and-polished asphere, floating
   system, rear focus, and ring USM. <https://global.canon/en/c-museum/product/ef341.html>
3. Canon Camera Museum, “EF24mm f/1.4 L II USM”: later redesign's 10-group/13-element construction and two UD/two
   aspherical elements. <https://global.canon/en/c-museum/product/ef400.html>
4. OHARA optical-glass data sheets and cross-reference tables: S-LAL14, S-TIH53, S-LAH65V, S-TIH10, S-TIH6,
   S-LAH55V, S-BSM14, and S-LAH66 catalog positions. <https://oharacorp.com/glass/>
5. HOYA, optical-glass catalogue/data and cross-reference index: FCD1 497/816 and BACD14 603/607 positions.
   <https://www.hoyaoptics.eu/optical-glass> and <https://www.hoyaoptics.eu/glass-cross-reference-index>
6. SCHOTT, N-LAK8 optical-glass data sheet: independent verification of the 713/538 spectral position.
   <https://media.schott.com/api/public/content/efc13fa680cf4cca84b8ed29b87d8744?v=fb43de21>
7. HIKARI, J-SK14 optical-glass data: independent verification of the corrected 603/607 L10 position.
   <https://www.hikari-g.co.jp/optical_glass/general_optical_glass/document/SK/J_SK14.pdf>
