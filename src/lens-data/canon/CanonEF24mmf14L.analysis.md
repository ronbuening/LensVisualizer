# CANON EF 24mm f/1.4 L USM — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** JP 1999-030743 A (特開平11-30743)  
**Application Number:** JP H09-202367  
**Filed:** 11 July 1997  
**Published:** 2 February 1999  
**Inventor:** Makoto Misaka (三坂 誠)  
**Applicant:** Canon Inc.  
**Title:** レトロフォーカス型レンズ (_Retrofocus-Type Lens_)  
**Example details:** Numerical Example 6, Table 6 (PDF page 10; caption on page 9), Figure 7 (PDF page 13)\
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

### Patent-table inconsistencies and retained correction

L7’s printed νd = 28.64 conflicts with its printed d/C/F values, which imply
(1.728250−1)/(1.746453−1.720865) = 28.4606065. The source’s genuinely printed Abbe number is restored literally;
the earlier normalization is removed. Native sibling examples do not reuse this medium, and a second independent
source evidence kind for changing ν has not been established. The source-erratum remains unresolved. S-TIH10 is an
explicitly approximate spectral proxy to the printed pair, with all published C/F/g values retained.

L10’s printed nd = 1.613112 exceeds its printed F-line index 1.610018. The retained correction to 1.603112 is
supported by two independent source kinds. The source summary gives f = 24.6 mm and f2b/f = 1.47; corrected values
reproduce those quantities. Native Figure 14’s near-axis relative chromatic BFL span is roughly 0.10–0.13 mm
(±0.02 mm reading uncertainty). Published C/F/g plus corrected d give a 0.099819 mm span, whereas printed d gives
0.598914 mm. The structured corrected entry identifies source-summary and aberration-figure. Its source-derived
νd = 60.6996779 is consistent with the printed rounded 60.70.

The absolute final image-plane offset remains unresolved. No radius, spacing or asphere is tuned to fit the drawing.

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
| Complete B1                |             1–6 | $-118.754\ \mathrm{mm}$ |
| B2a                        |            7–14 |  $+81.513\ \mathrm{mm}$ |
| B2b                        |           16–22 |  $+36.235\ \mathrm{mm}$ |
| Complete B2                |            7–22 |  $+33.457\ \mathrm{mm}$ |
| Cemented L4/L5             |             7–9 |  $-97.559\ \mathrm{mm}$ |
| Cemented L8/L9             |           16–18 |  $-43.916\ \mathrm{mm}$ |

Both cemented pairs are net negative despite containing a positive component. This distinction matters: the standalone
in-air focal length of an individual component is not its in-situ contribution after cementing to a glass of different
index.

The corrected complete prescription has $\mathrm{EFL}=24.599\ \mathrm{mm}$ and a Gaussian back focal length of
$38.134\ \mathrm{mm}$ from surface 22. Thus $\mathrm{BFL}/\mathrm{EFL}=1.550>1$, the defining long-back-focus geometry
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

**L5: $n_d=1.496999$, $\nu_d=81.61$. Glass: qualified 497/816 anomalous-medium coordinate; historical chemistry unconfirmed. Standalone
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

**$n_d=1.728250$, printed $\nu_d=28.64$. Glass: S-TIH10, approximate spectral proxy to the printed pair. Standalone
$f=-48.914\ \mathrm{mm}$.**

The negative front radius and positive rear radius establish a biconcave form. L7 moderates the strongly positive power
of B2a immediately before the stop gap. The printed Abbe number remains literal despite the independent d/C/F ratio of 28.4606065. This unresolved
redundant-data inconsistency is disclosed; the complete source line indices remain the spectral authority.

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

The patent publishes $n_d$, $\nu_d$, and d/g/C/F line indices but no vendor names. Paragraph 0041 explicitly identifies d/g/C/F indices, so the d-line reference is confirmed. All 33 C/F/g
values are genuine selected-example measurements and are retained. Glass labels are therefore qualified catalog
**spectral proxies or classes**, not assertions about Canon's historical supplier, production melts or chemistry. Identifications were checked against official
OHARA, HOYA, SCHOTT, and HIKARI catalog data without seeding the search with a desired product name.

| Element | Patent or corrected optical position | Preferred catalog class | Qualification                                         |
| ------- | -----------------------------------: | ----------------------- | ----------------------------------------------------- |
| L1, L2  |                              697/555 | S-LAL14 class           | Exact six-digit position; vendor not disclosed        |
| L3      |                              713/538 | N-LAK8 class            | Full spectral match                                   |
| L4      |                              847/238 | S-TIH53 / N-SF57 class  | Dense flint; multiple vendor equivalents              |
| L5      |                              497/816 | FCD1 / S-FPL51 class    | FCD1 exactly matches $\nu_d$; vendor remains inferred |
| L6      |                              804/466 | S-LAH65V class          | Dense lanthanum flint                                 |
| L7 | Printed 1.728250 / 28.64 | S-TIH10 approximate proxy | Published C/F/g imply ν = 28.4606065; source inconsistency unresolved |
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
| Numerical prescription |                   Table 6 |                           Not published |
| B1 motion              | Fixed in preferred scheme |               Fixed in preferred scheme |
| B2a/B2b motion         |  Single infinity position | Objectward; mutual separation decreases |
| Minimum focus distance |                         — |         0.25 m production specification |
| Maximum magnification  |                         — |          0.16× production specification |

No close-focus spacings, subgroup travels, or finite-object magnifications are tabulated. The companion data file
therefore authors no variable focus gaps. The production MFD is retained only as catalog
metadata.

## Aspherical Surfaces

Surface 18A, the rear surface of L9, is the only asphere. Paragraph 0042 gives the base form

$$
X=\frac{h^2/r}{1+\sqrt{1-(h/r)^2}}+Ah^2+Bh^4+Ch^6+Dh^8+Eh^{10}.
$$

The radicand is the standard conic expression with $K=0$, so the base is spherical rather than a shifted Japanese
$\kappa$ convention. Table 6 adds a coefficient F even though the printed equation stops at E. The dimensionally
consistent interpretation is that F multiplies $h^{12}$; this assignment is an editorial inference and is identified as
such.

| Standard coefficient | Patent column     |                    Value |
| -------------------- | ----------------- | -----------------------: |
| $K$                  | implicit          |                      $0$ |
| $A_4$                | B                 |  $+2.04769\times10^{-5}$ |
| $A_6$                | C                 |  $+2.22129\times10^{-8}$ |
| $A_8$                | D                 | $-2.10838\times10^{-11}$ |
| $A_{10}$             | E                 | $-1.48493\times10^{-13}$ |
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
the independently calculated 24.599 mm EFL.

| No. | Patent expression          |          Example 6 result | Patent correspondence | Status    |
| --: | -------------------------- | ------------------------: | --------------------: | --------- |
| (1) | $1.6<n_{1N}$               |                  1.696797 |                1.6968 | Satisfied |
| (2) | $46<\nu_{1N}$              |                     55.53 |                  55.5 | Satisfied |
| (3) | $\nu_{1N}-\nu_{1P}<10$     | 1.69 from rounded entries |                  1.68 | Satisfied |
| (4) | $75<\nu_{2aNF}$            |                     81.61 |                  81.6 | Satisfied |
| (5) | $0.5<S_{2aNF}/f<2.0$       |     $25.812/24.6=1.04927$ |                 1.049 | Satisfied |
| (6) | $P_{g,F}>-0.0016\nu+0.645$ |       $0.537603>0.514424$ |                     — | Satisfied |
| (7) | $2.0<f_{2a}/f<5.0$         |     $81.513/24.6=3.31354$ |                  3.31 | Satisfied |
| (8) | $-10<f_1/f<-2.0$           |  $-118.754/24.6=-4.82741$ |                 −4.83 | Satisfied |
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

## Source Consistency and Runtime Limits

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
| Literal Table 6, including impossible L10 $n_d$ | 24.285845 mm |                   −0.314155 mm |          37.593888 mm |                     +1.126888 mm |
| Corrected material data used in the files       | 24.599402 mm |                   −0.000598 mm |          38.133626 mm |                     +1.666626 mm |

Correcting the transcribed S2 gap from 5.050 to the printed 6.050 mm reproduces the stated 24.6 mm EFL within 0.000598 mm with the justified material emendation. S18's A10 also changes from −1.46493e−13 to the printed −1.48493e−13; this higher-order coefficient does not change paraxial focus. The literal L10 index cannot represent a physically consistent glass and fails the patent's condition-(9) correspondence, so the corrected material value is retained.

The 1.666626 mm BFL/image-plane difference remains a source inconsistency after those corrections. The source lists no rear plate and no further supported transcription change resolves it. The data preserves the printed final spacing $d_{22}=36.467\ \mathrm{mm}$ rather than tuning it to focus.

The axial track is 82.171 mm from surface 1 to surface 22 and 118.638 mm from surface 1 to the printed image plane.

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

- The current derived f/1.45 physical stop radius is approximately 11.50728 mm; its strict infinity axial beam clears.
- Native Figure 7 resolves S2/S4/S9/S16 shoulders. Clear caps and outer radii remain separate; five inferred caps are
  corrected from the native height ratios and local scale, as recorded in the audit. Source R/d and the asphere remain unchanged.
- Actual SVGs across the complete control grid have eleven finite closed connected element paths and zero hidden trim.
  Focus and zoom controls repeat the sole published infinity layout because no finite cam is reconstructed.
- A 49-point stop-aimed sample passes all 49 axial rays. The 0.6-field and source-edge samples pass 36 and 17 rays;
  every chief clears and no sample is unaimed. This records substantial peripheral vignetting, including some first clips
  at bonded S17, without inventing an opaque interface feature.
- Source half-field 41.35° reaches approximately 20.922 mm on the retained printed image plane, 96.7% of the format
  half-diagonal. The runtime's separate full-frame corner solve reaches 21.65 mm near 42.3°. A passing corner solve
  does not remove the source plane's 1.666626 mm paraxial defocus.
- The first S2 cap trial of 22.5 mm with its shoulder exceeded the existing 90% gap guard: 5.451 mm versus 5.445 mm
  allowed across 6.050 mm. The adopted 22.4 mm cap fits the native reading uncertainty and retains the unchanged guard.
  No source radius, spacing, coefficient or image plane is tuned to fit the drawing.

These semi-diameters are engineering reconstructions, not patent-published dimensions. The native Figure 7 raster
is 677 × 461 pixels at about 201 × 199 dpi; the local scale is approximately 7 px/mm with roughly ±0.5 mm reading
and schematic uncertainty. A shoulder identifies an outer blank outline, not additional optical transmission.

## Sources

1. JP 1999-030743 A (特開平11-30743), Canon Inc., _レトロフォーカス型レンズ_. Numerical Example 6: Table 6 and
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
