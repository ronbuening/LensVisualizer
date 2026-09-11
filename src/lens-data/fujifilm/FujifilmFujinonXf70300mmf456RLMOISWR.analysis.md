# FUJIFILM FUJINON XF 70-300mm f/4-5.6 R LM OIS WR

## Patent Reference and Design Identification

**Patent:** US 2021/0286156 A1\
**Application Number:** US 17/188,021\
**Priority:** March 11, 2020 (JP 2020-042283)\
**Filed:** March 1, 2021\
**Published:** September 16, 2021\
**Inventors:** Taiga Noda; Ryosuke Nagami\
**Assignee:** FUJIFILM Corporation\
**Title:** *Zoom Lens and Imaging Apparatus*\
**Embodiment analyzed:** Example 6

The prescription modeled here is Example 6 of US 2021/0286156 A1. The patent does not name the production lens. The
association with the **FUJIFILM FUJINON XF 70-300mm f/4-5.6 R LM OIS WR** is therefore a fixed production correlation,
not a claim of explicit manufacturer patent confirmation. The correlation is supported by several independent points of
convergence:

1. FUJIFILM specifies the production lens as 17 elements in 12 groups; Example 6 contains 17 physical glass elements in
   12 air-separated physical groups.
2. The production specification states one aspherical element and two ED elements. Example 6 places two aspheric
   surfaces on the single L31 element and uses two H-FK61 elements, L13 and L33, with very high Abbe number
   ($\nu_d=81.59$), matching the special-element count without requiring prescription scaling.
3. The production lens is marketed as 70–300 mm f/4–5.6. Example 6 publishes 72.053–291.097 mm at f/4.12–5.77. These
   are close but deliberately remain separate in the data file as marketing and design quantities.
4. Example 6 assigns the transverse image-stabilization subgroup to L22–L24 and the focusing function to G4. The
   production lens is specified with optical image stabilization and linear-motor autofocus.
5. FUJIFILM specifies a minimum focus distance of 0.83 m measured from the focal plane and a maximum telephoto
   magnification of 0.33×. A G4-only close-focus reconstruction constrained to that focal-plane distance produces
   0.329922× at the telephoto endpoint.
6. The patent claims priority on March 11, 2020. FUJIFILM announced the production lens on January 27, 2021, placing
   the numerical design in the appropriate development interval.

Example 6 is defined in ¶0143, with the numerical prescription in Tables 16–18 and the conditional-expression values in
Table 19. The design uses the d line at 587.56 nm as its reference wavelength (¶0029). Figure 12 shows the six powered
groups and their movement loci; Figure 13 gives the corresponding aberration plots at wide, middle, and telephoto
positions.

Rendered Table 16 controls ambiguous machine text. In particular, surface 21 is **S-TIM27.OHARA**; the OCR-like form
`S-T1M27` is not a source value. No numerical patent value in Tables 16–18 was corrected. The data file preserves the
patent scale with $s=1$.

## Optical Architecture

Example 6 is a six-powered-group refractive zoom with power sequence

$$
+\; -\; +\; +\; -\; +.
$$

The 17 glass elements form 12 air-separated physical groups. The powered grouping is different from the physical-group
count: G1 through G6 are functional zoom groups, while the 12-group product count follows air-separated glass units and
cemented assemblies. The aperture stop is placed at the front of G3, exactly where Example 6 places surface 13 (`STO`).

Independent paraxial calculation from the final TypeScript arrays gives the following isolated group focal lengths. These
are group powers evaluated between air boundaries; they are not the same quantity as the standalone focal length of an
individual element, a cemented subassembly, or the in-situ magnification of that group within the zoom.

| Powered group | Isolated EFL (mm) | Principal function in this design |
|---|---:|---|
| G1 | +154.554779 | Positive front collector and long-range front variator |
| G2 | −33.038759 | Negative zoom group; contains the L22–L24 OIS subgroup |
| G3 | +43.694194 | Main positive refracting group; contains `STO` and the only aspherical element |
| G4 | +43.457138 | Positive internal focusing group |
| G5 | −26.159591 | Negative compensating group moving integrally with G3 |
| G6 | +92.331669 | Fixed positive rear group adjacent to the image side |

The patent states that G1–G5 move during zooming, G6 remains stationary with respect to the image plane, and G3 and G5
move integrally (¶¶0049–0051). The final model reproduces those kinematics. From wide to middle, G3 and G5 each move
7.016 mm objectward; from middle to telephoto, each moves 11.695 mm objectward. G2 reverses direction: it moves
0.998 mm imageward from wide to middle, then 3.755 mm objectward from middle to telephoto. G6 remains fixed relative to
the modeled image plane.

The strict project telephoto criterion is $TL/EFL<1$. Using the PP-normalized first-vertex-to-image track, the ratios are
2.0264 at wide, 1.3979 at middle, and 0.7523 at telephoto. The design therefore meets the project definition of
**telephoto only at the telephoto endpoint**. The corresponding rear-distance ratios are 0.4059, 0.2289, and 0.1005, so
none of the three published states is retrofocus under the project criterion $BFD>EFL$.

### Reference-plane normalization and model boundaries

The patent inserts a plane-parallel optical member `PP` between the lens and image plane and explicitly states that this
member can represent filters or cover glass and may be omitted (¶0047). The LensVisualizer model omits `PP`, as required
for an ordinary lens prescription, but preserves its first-order reduced propagation. The source rear path

$$
26.284 + 2.850 + 1.123\ \mathrm{mm}
$$

is replaced by the air-equivalent distance

$$
26.284 + \frac{2.850}{1.54763} + 1.123 = 29.2485254292\ \mathrm{mm}.
$$

That value is the authored spacing after surface 30. It is a model reference-plane normalization, not a change to the
active optical prescription.

No uniform focal-length scaling is applied: $s=1$. Consequently, radii, axial spacings, image-plane coordinates, and
asphere coefficients remain at the patent scale. The general scaling rule $A_p\rightarrow A_p/s^{p-1}$ therefore leaves
every coefficient unchanged, while $K$ remains unchanged by definition.

Example 6 does not publish clear apertures. All surface semi-diameters in the data file, including the maximum stop
semi-diameter of 9.676 mm, are modeling inferences. They were constrained by paraxial marginal/chief-ray envelopes, the
APS-C field, Figure 12 proportions, the production barrel/filter envelope, and the current edge/slope/cross-gap rules.
The stop **position** is source-published; only its clear radius is inferred.

## Element-by-Element Analysis

Standalone element focal lengths below are computed with each element isolated in air. Cemented-component focal lengths,
when quoted, are computed for the bonded pair as a unit between air boundaries. Neither should be read as the in-situ
power or magnification of the complete powered group.

### L11 — Negative Meniscus

**$n_d=1.80610$, $\nu_d=33.27$. Glass: NBFD15-W (HOYA). Standalone $f=-210.372$ mm.**

L11 is the front negative element of G1 and is cemented to L12 as D1. The patent favors a negative/positive cemented
pair in the first group because it provides a chromatic-correction degree of freedom while retaining positive net power
for the group (¶¶0057–0059). L11 supplies high index with moderate dispersion at the first surface, allowing the front
pair to bend the entering beam without placing all of the G1 power in a single positive crown.

Together with L12, D1 has a computed isolated net focal length of **+541.459 mm**. This weak positive cemented result is
distinct from L11's standalone negative power and from the complete G1 focal length of +154.555 mm.

### L12 — Biconvex Positive

**$n_d=1.48749$, $\nu_d=70.42$. Glass: H-QK3L (CDGM). Standalone $f=+151.760$ mm.**

L12 is the positive, high-Abbe partner in D1. Its lower index and substantially higher Abbe number relative to L11 give
the cemented interface useful chromatic leverage. In the final data, the D1 pair remains only weakly positive as a
cemented component; the rest of G1's positive action comes from L13 and the separated geometry of the group.

The current CDGM catalog coordinate used in the glass audit has the same $n_d$ and a $\nu_d$ higher by only 0.02; the
patent's $n_d$ and $\nu_d$ remain authoritative in the prescription.

### L13 — Positive Meniscus

**$n_d=1.49700$, $\nu_d=81.59$. Glass: H-FK61 (CDGM). Standalone $f=+215.681$ mm.**

L13 is the separated rear positive element of G1. Its very high Abbe number places comparatively low chromatic power in
a surface pair that still contributes positive refractive action. Together, D1 and L13 form the positive G1 group while
allowing the front group to carry both power and longitudinal-color correction over the fourfold zoom ratio.

H-FK61 is used again at L33. The two occurrences are structurally consistent with FUJIFILM's published count of two ED
elements, although the production literature does not identify their prescription positions.

### L21 — Biconvex Positive

**$n_d=1.48749$, $\nu_d=70.42$. Glass: H-QK3L (CDGM). Standalone $f=+184.751$ mm.**

L21 is the first element of the net-negative G2 group. Its positive standalone power precedes the much stronger negative
subsystem formed by L22–L24. The patent identifies G2 as a principal zooming group (¶0060); Example 6 modifies the general
embodiment to four elements L21–L24 (¶0143).

Because L21 is not part of the transverse stabilization subgroup, it provides a stationary optical reference within G2
while L22–L24 decenter for image stabilization.

### L22 — Plano-Concave Negative

**$n_d=1.83481$, $\nu_d=42.74$. Glass: S-LAH55VS (OHARA). Standalone $f=-21.916$ mm.**

L22 begins the three-element OIS subgroup and is cemented to L23. Its strong negative standalone power is a major source
of the net negative action in G2. The front face is plano in the paraxial prescription, while the rear cemented surface
has a short positive radius.

D2, the L22+L23 cemented component, has a computed isolated focal length of **−49.505 mm**. That value is not the same as
the full G2 focal length, because L21, L24, and the internal separations change the group power and conjugates.

### L23 — Positive Meniscus

**$n_d=1.89286$, $\nu_d=20.36$. Glass: S-NPH4 (OHARA). Standalone $f=+36.792$ mm.**

L23 is the positive, very high-index and low-Abbe partner of D2. The strong dispersion contrast between L22 and L23 is
one of the principal chromatic degrees of freedom inside the stabilization subgroup. The explicit spectral model also
retains the patent's high partial-dispersion ratio for this glass rather than reducing it to an Abbe-only approximation.

L23 moves transversely together with L22 and L24 for stabilization; its positive power therefore participates directly
in the lateral sensitivity of the OIS subgroup.

### L24 — Negative Meniscus

**$n_d=1.91082$, $\nu_d=35.25$. Glass: TAFD35 (HOYA). Standalone $f=-54.395$ mm.**

L24 is the rear negative element of the OIS subgroup and completes G2. Its high index permits substantial bending in a
compact element. Together with the negative D2 component, it makes G2 strongly negative despite the positive L21 at the
front.

Example 6 explicitly identifies L22–L24 as the image-stabilization lens group (¶0143). The data model does not invent an
OIS decenter range because the patent does not publish one.

### L31 — Positive Meniscus, Two Aspherical Surfaces

**$n_d=1.58313$, $\nu_d=59.38$. Glass: L-BAL42 (OHARA). Standalone $f=+42.371$ mm.**

L31 is the first powered element after the aperture stop and the only aspherical element in the final model. Both of its
surfaces, `14A` and `15A`, carry the Example 6 aspheric polynomial. Its standalone focal length is close to the complete
G3 focal length because it supplies most of the positive action before the weak L32+L33 cemented correction pair.

The patent describes G3 as a principal positive refracting group (¶0064) and favors a positive first lens followed by a
negative/positive cemented pair (¶0066). L31's double asphere provides shape-control freedom near the stop, where changes
in marginal-ray angle have strong influence on spherical aberration and coma balance.

### L32 — Negative Meniscus

**$n_d=1.88300$, $\nu_d=39.22$. Glass: H-ZLAF68N (CDGM). Standalone $f=-26.444$ mm.**

L32 is the negative front member of the D3 cemented pair. It has high index and substantially lower Abbe number than its
H-FK61 partner L33, producing a strong chromatic contrast at the cemented interface.

The isolated L32+L33 pair has a net focal length of **−893.161 mm**—almost afocal compared with either individual lens.
Its role in G3 is therefore primarily corrective rather than to supply the group's main positive power.

### L33 — Biconvex Positive

**$n_d=1.49700$, $\nu_d=81.59$. Glass: H-FK61 (CDGM). Standalone $f=+27.119$ mm.**

L33 is the high-Abbe positive partner of D3. Its standalone positive power nearly balances L32's negative power once the
cemented interface and thickness are included. The large $\nu_d$ separation between the pair is exactly the kind of
negative/positive contrast addressed by the patent's G3 material conditions (27) and (28).

The D3 pair's weak net power lets it alter chromatic and higher-order balance without materially replacing L31 as G3's
principal positive element.

### L41 — Biconvex Positive

**$n_d=1.78800$, $\nu_d=47.37$. Glass: S-LAH64 (OHARA). Standalone $f=+46.573$ mm.**

L41 is the separated front positive element of G4. G4 is the only focusing group in the data model and has a computed
isolated focal length of +43.457 mm. L41 therefore supplies most of the positive power of the translating focus unit.

The patent favors a compact G4 because reducing the focusing-group diameter and mass supports faster motor-driven focus
(¶¶0052–0053). That statement is a design rationale in the patent; no mechanical mass is inferred from the optical data.

### L42 — Biconcave Negative

**$n_d=1.63980$, $\nu_d=34.47$. Glass: S-TIM27 (OHARA). Standalone $f=-18.346$ mm.**

L42 is the negative member of the D4 cemented pair. Its two short, opposite-sign radii make it a strong negative lens in
isolation. It is paired with the nearly equal-and-opposite positive power of L43.

The rendered patent table confirms the glass label S-TIM27. The apparent `S-T1M27` string in machine-extracted text is
an OCR error, not a patent correction.

### L43 — Biconvex Positive

**$n_d=1.87070$, $\nu_d=40.73$. Glass: TAFD32 (HOYA). Standalone $f=+18.424$ mm.**

L43 is the positive partner in D4. The L42+L43 cemented component has a computed isolated focal length of
**+351.630 mm**, a weak positive result despite the large opposing powers of the individual elements. Together with L41
and the internal air spacing, the complete G4 becomes a much stronger +43.457 mm group.

This distinction matters during focus: G4 translates as a complete in-situ group, so the focus sensitivity depends on the
full group's conjugates rather than on either cemented member alone.

### L51 — Negative Meniscus

**$n_d=1.74100$, $\nu_d=52.64$. Glass: S-LAL61 (OHARA). Standalone $f=-34.107$ mm.**

L51 is the separated front negative element of G5. The patent assigns negative power to G5 and states that this choice
helps suppress astigmatism variation during zooming (¶0071). In Example 6, G5 remains at a fixed axial separation from
G3 because the two groups move integrally.

L51 supplies most of G5's negative action before the weaker D5 cemented pair.

### L52 — Biconvex Positive

**$n_d=1.64769$, $\nu_d=33.79$. Glass: S-TIM22 (OHARA). Standalone $f=+21.832$ mm.**

L52 is the positive front member of the D5 cemented pair. Its relatively low Abbe number and positive power are balanced
by L53, which has a higher Abbe number and negative standalone power.

The D5 pair has an isolated net focal length of **−125.782 mm**. The full G5 group is considerably stronger at
−26.160 mm because L51 and the air spacing contribute substantial additional negative power.

### L53 — Plano-Concave Negative

**$n_d=1.78800$, $\nu_d=47.37$. Glass: S-LAH64 (OHARA). Standalone $f=-18.534$ mm.**

L53 is the rear negative member of D5. Its rear face is plano in the paraxial prescription. The reuse of S-LAH64 here and
at L41 places the same glass in two different power contexts: positive at the front of G4 and negative at the rear of G5.

This is a useful reminder that a glass designation does not determine optical sign; element shape and surrounding
indices determine the paraxial power.

### L61 — Positive Meniscus, Convex to Image

**$n_d=1.91082$, $\nu_d=35.25$. Glass: TAFD35 (HOYA). Standalone $f=+92.332$ mm.**

L61 is the single element of G6 and therefore its standalone and isolated group focal lengths are identical. Both
surfaces are convex toward the image side in the patent convention. G6 remains fixed with respect to the image plane
during zooming.

The patent assigns the rear positive group two design functions: reducing the peripheral chief-ray incidence angle at the
image plane and avoiding a rear surface concave toward the sensor, which it discusses in the context of reflected-light
stray paths (¶¶0074–0077). Those are patent design rationales rather than performance measurements of the production lens.

## Glass Identification and Selection

The final data retains the vendor names published by Example 6 rather than substituting cross-vendor equivalents. All
13 distinct named glasses pass the independent coordinate audit at the stored d-line reference. Current-catalog $n_d$
values match the patent values; the only catalog-version Abbe-number drifts are +0.02 for H-QK3L and H-FK61 and −0.01
for S-TIM27. The prescription therefore keeps the patent coordinates rather than silently replacing them with current
catalog rounding.

The `dPgF` column below is the **modeled** deviation from the project Schott normal line,
$P_{g,F}(normal)=0.6438-0.001682\nu_d$. It is not a separately published patent column. The patent supplies
$\theta_{gF}$, while the final data retains that partial-dispersion evidence as `dPgF`. Compatible catalog curves supply C/d/F.

| Glass | $n_d$ | $\nu_d$ | Modeled $dPgF$ | Elements | Optical use in this prescription |
|---|---:|---:|---:|---|---|
| NBFD15-W (HOYA) | 1.80610 | 33.27 | +0.000610 | L11 | High-index negative front member of D1 |
| H-QK3L (CDGM) | 1.48749 | 70.42 | +0.005036 | L12, L21 | High-Abbe positive glass in G1 and G2 |
| H-FK61 (CDGM) | 1.49700 | 81.59 | +0.030444 | L13, L33 | Very-high-Abbe positive glass; two occurrences |
| S-LAH55VS (OHARA) | 1.83481 | 42.74 | −0.007011 | L22 | Strong negative member of OIS doublet D2 |
| S-NPH4 (OHARA) | 1.89286 | 20.36 | +0.029886 | L23 | Very-high-index, low-Abbe positive D2 partner |
| TAFD35 (HOYA) | 1.91082 | 35.25 | −0.002270 | L24, L61 | High-index negative OIS element and positive rear element |
| L-BAL42 (OHARA) | 1.58313 | 59.38 | −0.001553 | L31 | Substrate of the two-surface aspherical positive element |
| H-ZLAF68N (CDGM) | 1.88300 | 39.22 | −0.004882 | L32 | High-index negative member of D3 |
| S-LAH64 (OHARA) | 1.78800 | 47.37 | −0.008144 | L41, L53 | Positive focus element and negative G5 element |
| S-TIM27 (OHARA) | 1.63980 | 34.47 | +0.006509 | L42 | Negative member of focus-group doublet D4 |
| TAFD32 (HOYA) | 1.87070 | 40.73 | −0.007042 | L43 | Positive member of focus-group doublet D4 |
| S-LAL61 (OHARA) | 1.74100 | 52.64 | −0.008500 | L51 | Separated negative element in G5 |
| S-TIM22 (OHARA) | 1.64769 | 33.79 | +0.006965 | L52 | Positive member of D5 |

The glass palette is not interpreted as proof of apochromatic correction. The model has enough explicit line data to
represent the patent's partial-dispersion structure, but neither the production literature nor the patent identifies the
lens as apochromatic. The defensible conclusion is narrower: the design deliberately combines large Abbe-number and
partial-dispersion contrasts in the front and G3 cemented pairs, and the patent explicitly constrains those relationships
through conditions (23)–(28).

## Focus Mechanism

The patent specifies G4 as the focusing lens group and states that it moves toward the object when focus changes from
infinity toward the closest object (¶0053). Example 6 does not publish close-focus spacing values. The final data file
therefore uses **CONSTRAINED_RECONSTRUCTION**, not `PUBLISHED`, for its near-focus state.

The reconstruction imposes only the disclosed mechanism: G4 translates as a unit, D18 decreases by the same amount that
D23 increases, and $D18+D23$ remains 21.595 mm at every zoom position. The object plane is placed 0.83 m in front of the
PP-normalized image plane, matching the production minimum-focus-distance reference. The required G4 travel is solved
from the final 30-surface model after removal of `PP`.

| Zoom state | D18 infinity (mm) | D18 close (mm) | D23 infinity (mm) | D23 close (mm) | G4 objectward shift (mm) | Reconstructed $|m|$ |
|---|---:|---:|---:|---:|---:|---:|
| Wide | 9.041 | 7.190313 | 12.554 | 14.404687 | 1.850687 | 0.097671 |
| Middle | 9.390 | 4.803983 | 12.205 | 16.791017 | 4.586017 | 0.167423 |
| Tele | 19.307 | 3.553977 | 2.288 | 18.041023 | 15.753023 | 0.329922 |

Only the telephoto 0.33× production maximum magnification is an external manufacturer specification. The wide and
middle magnifications in the table are predictions of the constrained paraxial reconstruction, not published product
specifications. The reconstructed telephoto value differs from 0.33× by less than 0.0001 in absolute magnification.

FUJIFILM identifies the production lens as using a linear motor for autofocus. The patent describes motor-driven G4
focusing as the preferred mechanism, but the numerical optical prescription by itself does not establish the exact
production actuator hardware.

## Aspherical Surfaces

Only L31 is aspherical, and both of its surfaces are aspheres: source surfaces 14 and 15, authored as `14A` and `15A`.
The patent writes the sag as

$$
Z_d=\frac{Ch^2}{1+\sqrt{1-K_A C^2h^2}}+\sum A_m h^m,\qquad C=1/R.
$$

LensVisualizer uses the standard conic form containing $(1+K)$, so the conversion is $K=K_A-1$. Example 6 gives
$K_A=1$ on both surfaces; therefore both authored surfaces have **$K=0$**. The source polynomial includes radial powers
through $A_{10}$. Its $A_3$ term is explicitly zero, so the data file omits that zero-valued odd term. Nonzero odd powers
$A_5$, $A_7$, and $A_9$ remain rotationally symmetric because $h$ is radial height.

| Coefficient | `14A` | `15A` |
|---|---:|---:|
| $K$ | 0 | 0 |
| $A_4$ | −1.6557317e−6 | +8.5826551e−6 |
| $A_5$ | −8.7163585e−7 | −1.0801504e−6 |
| $A_6$ | +2.3497768e−7 | +2.9070569e−7 |
| $A_7$ | −3.3880102e−8 | −4.3057170e−8 |
| $A_8$ | +2.0590459e−9 | +3.2719258e−9 |
| $A_9$ | +7.5024950e−12 | −9.0431876e−11 |
| $A_{10}$ | −5.2428804e−12 | −2.1725090e−12 |

Because $s=1$, none of these coefficients is rescaled. The source provides no clear aperture for L31; the data file's
10.2 mm semi-diameter is inferred. At that modeled radius, the independently calculated polynomial departure from the
base sphere is **−0.052405 mm** on `14A` and **+0.055235 mm** on `15A`. These are model-edge departures, not
patent-published aperture-edge values.

The patent and cited production sources establish one aspherical element but do not establish the manufacturing process
of L31. No glass-molding, hybrid-resin, or polished-asphere process is assigned here.

## Chromatic Correction Strategy

The design distributes chromatic correction across several widely separated groups rather than relying on a single
low-dispersion front element. In G1, the cemented D1 pair combines NBFD15-W ($\nu_d=33.27$) with H-QK3L
($\nu_d=70.42$), while L13 adds H-FK61 at $\nu_d=81.59$. The patent states that a cemented negative/positive pair in G1
is advantageous for correcting longitudinal chromatic aberration, particularly at the telephoto end (¶0058).

G3 uses a different strategy. L31 supplies the principal positive power, while the D3 pair couples high-index H-ZLAF68N
($\nu_d=39.22$) with H-FK61 ($\nu_d=81.59$). The pair is nearly afocal as an isolated cemented component, which allows
substantial dispersion contrast without adding much net paraxial power. Patent conditions (27) and (28) directly bound
the refractive-index and Abbe-number differences of that negative/positive cemented pair.

The data retains patent-derived `dPgF` on every element. Compatible catalog curves supply C/d/F, and the engine
preserves the patent's partial dispersion at g. Synthetic absolute nC/nF/ng overrides were removed so reconstructed
indices are not treated as measured line data. CDGM's September 2023 catalog, printed page 276, supplies the newly
added H-ZLaF68N Sellmeier curve. All 17 elements now resolve to catalog dispersion.

The largest positive modeled `dPgF` values occur on H-FK61 (+0.030444) and S-NPH4 (+0.029886), while several high-index
OHARA/HOYA glasses carry negative deviations. These values justify treating the partial-dispersion structure explicitly;
they do **not** by themselves justify an APO label.

## Image Stabilization

Example 6 identifies L22–L24 as the image-stabilization lens group (¶0143). These three elements form the rear portion of
G2: the cemented L22+L23 component followed by L24. The subgroup moves in a direction intersecting the optical axis while
L21 remains outside the moving stabilization unit. The production lens is specified by FUJIFILM as having optical image
stabilization, which is one of the structural correlations between Example 6 and the production lens.

The patent devotes conditions (20)–(22) to stabilization sensitivity. They use the lateral magnification of the OIS
subgroup and the combined magnification of the groups behind it at the wide and telephoto endpoints. The independent
calculation gives −2.132805 for condition (20), −3.897321 for condition (21), and 1.827322 for condition (22), all within
the patent's primary bounds and all agreeing with the Example 6 Table 19 values at its printed precision.

No transverse decenter range is published for Example 6, so the data file does not assign one. The analysis therefore
describes the subgroup identity and sensitivity conditions without inventing a stabilization stroke or angular rating.

## Conditional Expressions

US 2021/0286156 A1 defines 40 primary conditional expressions, and Table 19 prints the values for Examples 1–6. The
selected Example 6 prescription was independently evaluated from the source data. The final TypeScript prescription
preserves the same active radii, fixed thicknesses, infinity zoom spacings, $n_d$, $\nu_d$, and $\theta_{gF}$ values used
by those expressions, so the independent condition evaluation remains applicable to the final model. All 40 primary
bounds pass. Thirty-seven computed values round to the corresponding Table 19 entries at the displayed precision.
Conditions (1), (39), and (40) differ from the printed entries by 0.000545, 0.000735, and 0.000732, respectively;
these sub-0.001 residuals are consistent with the patent's statement that numerical table values are rounded to
predetermined decimal places (¶0136).

| No. | Quantity | Primary patent bound | Computed | Table 19 | Result |
|---:|---|---|---:|---:|:---:|
| 1 | $f_3/f_4$ | 0.12 < value < 1.24 | 1.005455 | 1.006 | Pass |
| 2 | $f_2/f_4$ | -1 < value < -0.12 | -0.7602608 | -0.760 | Pass |
| 3 | $f_2/f_1$ | -0.3 < value < -0.07 | -0.2137673 | -0.214 | Pass |
| 4 | $f_5/f_4$ | -0.79 < value < -0.1 | -0.601963 | -0.602 | Pass |
| 5 | $f_6/f_1$ | 0.25 < value < 1 | 0.5974042 | 0.597 | Pass |
| 6 | $\{(X_{t1}-X_{w1})-(X_{t2}-X_{w2})\}/f_1$ | 0.35 < value < 0.55 | 0.4543761 | 0.454 | Pass |
| 7 | $D_{b35}/f_4$ | 0.11 < value < 0.96 | 0.6832249 | 0.683 | Pass |
| 8 | $D_{3f5r}/T_4$ | 3.06 < value < 12.74 | 6.704175 | 6.704 | Pass |
| 9 | $f_{31}/f_3$ | 0.5 < value < 2.8 | 0.9697084 | 0.970 | Pass |
| 10 | $\nu_{31}$ | 45 < value < 97 | 59.3800 | 59.38 | Pass |
| 11 | $\nu_{1p,ave}$ | 60 < value < 97 | 76.0050 | 76.01 | Pass |
| 12 | $\beta_{4t}/\beta_{4w}$ | 0.5 < value < 2.1 | 1.754709 | 1.75 | Pass |
| 13 | $\beta_{2t}/\beta_{2w}$ | 2 < value < 5 | 4.261023 | 4.26 | Pass |
| 14 | $\beta_{3t}/\beta_{3w}$ | 0.25 < value < 1.4 | 0.430361 | 0.43 | Pass |
| 15 | $(\beta_{2t}/\beta_{2w})/(\beta_{3t}/\beta_{3w})$ | 1.5 < value < 14 | 9.901044 | 9.90 | Pass |
| 16 | $(\beta_{3t}/\beta_{3w})/(\beta_{4t}/\beta_{4w})$ | 0.15 < value < 1.5 | 0.2452607 | 0.25 | Pass |
| 17 | $(1-\beta_{4w}^2)\beta_{4Rw}^2$ | 2 < value < 6.5 | 3.75878 | 3.76 | Pass |
| 18 | $(1-\beta_{4t}^2)\beta_{4Rt}^2$ | 4 < value < 12 | 5.068658 | 5.07 | Pass |
| 19 | $[(1-\beta_{4t}^2)\beta_{4Rt}^2]/[(1-\beta_{4w}^2)\beta_{4Rw}^2]$ | 1.1 < value < 2.7 | 1.348485 | 1.35 | Pass |
| 20 | $(1-\beta_{isw})\beta_{isRw}$ | -3.6 < value < -1.8 | -2.132805 | -2.13 | Pass |
| 21 | $(1-\beta_{ist})\beta_{isRt}$ | -7.5 < value < -3.2 | -3.897321 | -3.90 | Pass |
| 22 | $[(1-\beta_{ist})\beta_{isRt}]/[(1-\beta_{isw})\beta_{isRw}]$ | 1.5 < value < 2.4 | 1.827322 | 1.83 | Pass |
| 23 | $\theta_{1n}-\theta_{1p}$ | -0.05 < value < 0.08 | 0.05475 | 0.0548 | Pass |
| 24 | $\theta_{12n}-\theta_{12p}$ | 0 < value < 0.025 | 0.0192225 | 0.0192 | Pass |
| 25 | $N_{1n}-N_{1p}$ | 0.01 < value < 0.48 | 0.31861 | 0.3186 | Pass |
| 26 | $\nu_{1p}-\nu_{1n}$ | 20 < value < 70 | 37.1500 | 37.15 | Pass |
| 27 | $N_{3n}-N_{3p}$ | 0.1 < value < 0.5 | 0.386 | 0.3860 | Pass |
| 28 | $\nu_{3p}-\nu_{3n}$ | 20 < value < 65 | 42.3700 | 42.37 | Pass |
| 29 | $f_w/f_1$ | 0.36 < value < 0.5 | 0.4661972 | 0.466 | Pass |
| 30 | $f_w/f_2$ | -3 < value < -1.8 | -2.180863 | -2.181 | Pass |
| 31 | $f_w/f_3$ | 1.3 < value < 3.2 | 1.649029 | 1.649 | Pass |
| 32 | $f_w/f_4$ | 0.6 < value < 2.2 | 1.658025 | 1.658 | Pass |
| 33 | $f_w/f_5$ | -3.8 < value < -2.2 | -2.754363 | -2.754 | Pass |
| 34 | $f_w/f_6$ | 0.5 < value < 0.9 | 0.7803715 | 0.780 | Pass |
| 35 | $f_t/f_1$ | 1.7 < value < 1.96 | 1.883455 | 1.883 | Pass |
| 36 | $f_t/f_2$ | -12 < value < -8 | -8.810773 | -8.811 | Pass |
| 37 | $f_t/f_3$ | 5 < value < 12 | 6.662144 | 6.662 | Pass |
| 38 | $f_t/f_4$ | 2.5 < value < 8 | 6.698485 | 6.698 | Pass |
| 39 | $f_t/f_5$ | -15 < value < -10 | -11.1277 | -11.127 | Pass |
| 40 | $f_t/f_6$ | 2 < value < 4 | 3.152732 | 3.152 | Pass |

Conditions (1)–(9) constrain group power and axial packaging; (10)–(11) constrain high-Abbe positive glass in G3 and G1;
(12)–(19) constrain zoom and focus-group magnification behavior; (20)–(22) constrain OIS sensitivity; (23)–(28) constrain
partial dispersion and cemented-pair material contrasts; and (29)–(40) normalize the six group focal lengths to the wide
and telephoto system focal lengths. The Table 19 comparison is an internal check on group identification, material
assignment, and variable-gap transcription rather than an additional source of prescription data. The three small
residuals identified above are consistent with source-table rounding and do not require a prescription correction.

## Verification Summary

The final data file was recomputed from its actual TypeScript arrays with reduced-angle sequential tracing and an
independent ABCD matrix check. The resulting effective focal lengths are:

| Zoom state | Patent focal length (mm) | Computed EFL (mm) | Difference (mm) | Patent FNo. |
|---|---:|---:|---:|---:|
| Wide | 72.053 | 72.053026443 | +0.000026443 | 4.12 |
| Middle | 127.769 | 127.767570640 | −0.001429360 | 4.90 |
| Tele | 291.097 | 291.099455038 | +0.002455038 | 5.77 |

The ABCD determinant is unity to floating-point precision in all three states. The PP-normalized rear spacing is
29.2485254292 mm; the active-lens BFL from surface 30 differs from that value by −0.000307 mm, −0.002083 mm, and
+0.000033 mm at wide, middle, and telephoto respectively. These residuals are consistent with the patent's rounded zoom
spacing and focal-length tables.

The surface-by-surface Petzval sum, computed as $\phi/(n n')$ over the 30 active surfaces, is
**0.001005442071 mm⁻¹**. Under the audit sign convention, $-1/P$ corresponds to **−994.587385 mm**. This is a paraxial
field-curvature quantity, not a claim about the final best-focus surface after higher-order aberration correction.

The inferred clear-aperture geometry also passes the independent geometry checks: the minimum computed
element edge thickness is 0.829025 mm, the maximum actual rim-slope angle is 42.4841°, and the minimum margin against the
90% shared-band cross-gap policy is 0.007293 mm at the 20→21 gap. Full APS-C half-diagonal chief rays remain contained in
all six wide/middle/tele × infinity/close states. A separate diagnostic bundle shows six clipped marginal rays out of 36,
concentrated at surface 21 in demanding field/focus combinations; this is retained as modeled vignetting rather than
hidden with layout controls.

These geometry figures depend on inferred semi-diameters and should not be mistaken for patent-published clear-aperture
dimensions. The active radii, fixed axial distances, infinity zoom gaps, glass coordinates, and aspheric coefficients are
the source-transcribed quantities; the PP-normalized rear spacing, close-focus gaps, stop radius, and all surface
semi-diameters are explicitly modeled quantities.

## Sources / References

1. **US 2021/0286156 A1**, Taiga Noda and Ryosuke Nagami, *Zoom Lens and Imaging Apparatus*, FUJIFILM Corporation,
   published September 16, 2021. Relevant material: ¶¶0029, 0047–0077, 0079–0118, 0126–0138, 0143–0144; Figure 12;
   Tables 16–19.
2. **FUJIFILM**, “FUJIFILM Announces New FUJINON XF70-300mmF4-5.6 R LM OIS WR Lens,” January 27, 2021:
   <https://www.fujifilm-x.com/en-us/news/fujifilm-announces-new-fujinon-xf70-300mmf4-5-6-r-lm-ois-wr-lens/>.
3. **FUJIFILM**, *XF70-300mmF4-5.6 R LM OIS WR Owner's Manual*:
   <https://dl.fujifilm-x.com/support/manual/lenses/lens_xf70-300mmf4-56_r_lm_ois_wr_manual_01.pdf>.
4. **OHARA**, current optical-glass family/catalog data for S-LAH, S-TIM/S-NPH, S-LAL, and low-Tg L-series glasses:
   <https://oharacorp.com/glass-type/optical-glass/s-lah/>, <https://oharacorp.com/glass-type/s-tih-s-nph/>,
   <https://oharacorp.com/glass-type/s-lal/>.
5. **HOYA**, optical-glass catalog and six-vendor cross-reference:
   <https://www.hoya-opticalworld.com/english/products/crossreference.html>.
6. **CDGM**, official optical-glass database:
   <https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&url=database>.


## Integration Audit — 2026-09-11 UTC

Inspected the exact local US 2021/0286156 A1, PDF page 13, Fig. 12 at 600 dpi; screening crop `0.348,0.443,0.74,0.6`. Retained the existing SDs. Enlarged inspection rejects leader-line overreads in G2, G4 and G5. Thin air gaps constrain the optical rims; the front and final elements agree within approximately 10%. Table 16 explicitly names the glasses; the H-ZLaF68N addition brings catalog coverage to 17/17 while retaining patent-derived dPgF.

Display name checked against the manufacturer product designation; the existing FUJINON XF name, aperture and R/LM/OIS/WR suffixes are correct. Structured patent assignee metadata uses the existing canonical `Fujifilm Corporation` spelling.
