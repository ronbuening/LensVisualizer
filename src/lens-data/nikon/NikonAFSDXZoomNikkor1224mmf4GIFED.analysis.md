## Patent Reference and Design Identification

**Patent:** US 6,940,655 B2

**Application Number:** US 10/463,802

**Priority:** JP 2002-180327, 20 June 2002

**Filed:** 18 June 2003

**Granted:** 6 September 2005

**Inventor:** Haruo Sato

**Assignee:** Nikon Corporation

**Title:** *Super Wide-Angle Zoom Lens System*

**Embodiment analyzed:** Example 1

The prescription is correlated with the **NIKON AF-S DX ZOOM-NIKKOR 12-24mm f/4 G IF-ED**. The patent/example selection is fixed for this analysis. The correlation is an author inference based on convergent optical and product evidence; Nikon does not state that the published Example 1 table is the final production prescription.

1. Example 1 computes to 12.300023–23.300055 mm with a table-level design aperture of f/4.1, corresponding to the marketed 12–24 mm f/4 range after ordinary product rounding.
2. The patent contains eleven glass elements in seven air-separated groups. The additional 0.1 mm bonded optical-resin layer is an optically active material layer but is not counted as a separate production glass element.
3. Five aspherical surfaces occur on three components: the front double-aspherical meniscus, the bonded hybrid asphere in the first group, and the rear double-aspherical meniscus. This corresponds to Nikon's specification of three aspherical lens elements.
4. Two positive elements have the identical low-dispersion coordinates $n_d=1.497820$, $\nu_d=82.52$, corresponding to Nikon's two-element ED count.
5. The patent specifies internal focusing by the first positive component L21 of the second group alone. Nikon describes the production lens as an IF lens driven by a Silent Wave Motor.

The manufacturer specification and the patent prescription are kept separate. Nikon's marketed values are 12–24 mm and f/4; the data model preserves the unscaled patent dimensions and the independently recovered design focal range of 12.300023–23.300055 mm.

## Optical Architecture

The design is a two-group negative-positive super-wide-angle zoom. The negative first group G1 is followed by a positive second group G2, and zooming is produced primarily by changing their separation. The rear-vertex back focal distance exceeds the effective focal length at all three modeled states, so the design is retrofocus under the project definition.

The physical production count is eleven glass elements in seven groups. The sequential model contains twelve material layers because the thin resin asphere bonded to L3 is represented explicitly. There is one aperture stop at patent surface 12 and no sensor cover, filter, inactive dummy plane, flare-cutter plane, mirror, or folded optical path.

The isolated paraxial group powers are:

| Group or component | Isolated EFL | Function |
| --- | ---: | --- |
| G1, surfaces 1A–8 | −18.467316 mm | Negative lead group; creates the wide field and provides zooming space. |
| H1 hybrid component, surfaces 3–6A | −20.883838 mm | Bonded glass/glass/resin negative component within G1. |
| L21, surfaces 9–11 | +51.983907 mm | Positive cemented focus component and front component of G2. |
| L22, surfaces 13–15 | +139.991704 mm | Weak positive cemented component behind the stop. |
| L23, surfaces 16–18 | +49.307645 mm | Positive cemented component carrying the second ED element. |
| L24, surfaces 19A–20A | −240.469845 mm | Weak rear negative aspherical component. |
| G2, surfaces 9–20A | +33.809588 mm | Positive master group and internal-focus assembly. |

These figures describe isolated vertex-bounded groups. They are not interchangeable with the full-system EFL or with the standalone focal lengths of the individual members.

Three zoom positions are retained: 12.3, 18.0, and 23.3 mm. This is necessary because the first group reverses direction between the middle and telephoto positions. With the image plane used as the reference, G2 moves monotonically objectward as focal length increases, while G1 first moves imageward and then reverses. The front-surface-to-image track is 134.03704 mm at wide, 128.39787 mm at the middle position, and 130.21076 mm at telephoto.

The modeled stop remains at patent surface 12. The patent publishes no physical stop diameter. The data file therefore uses an inferred wide/infinity base semi-diameter of 5.30516307 mm for the scalar f/4.1 model; the calculated runtime openings at 12.3, 18.0, and 23.3 mm are 5.305163, 6.089522, and 6.871073 mm. These are modeling results rather than patent dimensions.

## Element-by-Element Analysis

### L1 — Negative Meniscus, Double Aspherical

**$n_d=1.744429$, $\nu_d=49.55$. Glass: `Unmatched (744496 class; nd=1.744429, vd=49.55)`. Standalone $f_{air}=-35.736802$ mm.**

L1 is the front negative meniscus and the principal negative member of G1. Both surfaces, 1A and 2A, are aspherical. The patent publishes an effective full aperture only for L1, $\Phi=43.65$ mm, giving the authored semi-diameter of 21.825 mm.

The element supplies strong negative lead power without requiring a larger number of front elements. Its double-aspherical form is central to the patent's strategy of balancing distortion, astigmatism, coma, field curvature, peripheral illumination, and manufacturability in a super-wide-angle zoom.

### H1 / L2 — Biconvex Positive Glass Member

**$n_d=1.581440$, $\nu_d=40.75$. Glass: `581408 — optical-glass class (vendor unresolved)`. Standalone $f_{air}=+89.656209$ mm.**

L2 is the positive first glass member of the bonded H1 component. It is cemented directly to L3 at surface 4. Its standalone positive power does not describe the component's final behavior because it operates through two subsequent cemented media.

Together with L3 and the resin layer L3r, it forms a net negative component with isolated EFL −20.883838 mm. This compound structure distributes the required negative power across multiple refracting interfaces while reserving the outer resin surface for higher-order correction.

### H1 / L3 — Biconcave Negative Glass Member

**$n_d=1.772500$, $\nu_d=49.61$. Glass: `773496 — lanthanum-flint class (vendor unresolved)`. Standalone $f_{air}=-16.616518$ mm.**

L3 is the strong negative glass member of H1. Its higher index allows substantial negative surface power in a relatively compact cemented stack. The rear surface of L3 is the substrate interface for the 0.1 mm resin layer rather than an air boundary.

The focal length given above is the standalone air value. In the assembled H1 component, the L2/L3 junction and the glass/resin junction alter the effective power and aberration balance; the component's verified net EFL is −20.883838 mm.

### H1 / L3r — Bonded Hybrid Aspherical Resin Layer

**$n_d=1.553890$, $\nu_d=38.09$. Material: `Unmatched (hybrid aspherical optical resin; nd=1.553890, vd=38.09)`. Standalone $f_{air}=+2917.766448$ mm.**

L3r is an optically active 0.1 mm bonded resin layer. Its standalone paraxial power is extremely weak, but surface 6A carries a comparatively large aspherical departure. The layer therefore functions primarily as a shape-correction medium rather than as a conventional powered lens.

The production lens remains an eleven-glass-element design. The resin layer is represented separately only because its refractive index, thickness, and aspherical outer surface participate in the sequential optical model.

### L4 — Positive Meniscus

**$n_d=1.755200$, $\nu_d=27.51$. Glass: `755275 — dense-flint class (vendor unresolved)`. Standalone $f_{air}=+40.239236$ mm.**

L4 is the positive meniscus at the rear of G1. It moderates the strongly negative power of the preceding front components and completes the negative first zoom group.

Its low Abbe number distinguishes it from the low-dispersion positive members in G2. Within the complete group, L4 contributes positive power while the front meniscus and H1 maintain the negative group result of −18.467316 mm.

### L21 / L5 — Negative Meniscus Focus Member

**$n_d=1.741000$, $\nu_d=52.67$. Glass: `741527 — lanthanum-crown class (vendor unresolved)`. Standalone $f_{air}=-52.163500$ mm.**

L5 is the negative first member of the cemented L21 focus doublet. It is cemented to L6 at surface 10. The patent identifies the complete L21 component, not L5 alone, as the element that translates during internal focusing.

The negative member helps distribute the doublet's refractive and chromatic correction while permitting the assembled pair to remain positive. The verified net EFL of L21 is +51.983907 mm.

### L21 / L6 — Biconvex Positive Focus Member

**$n_d=1.548140$, $\nu_d=45.79$. Glass: `548458 — light-flint class (vendor unresolved)`. Standalone $f_{air}=+25.877081$ mm.**

L6 supplies the dominant positive power of L21. Cementing it to L5 reduces the number of air-glass interfaces and creates a compact translating focus component at the front of G2.

Only this cemented pair moves in the production-distance reconstruction. The stop, L22, L23, L24, and the image plane remain fixed during that focus movement.

### L22 / L7 — Positive Meniscus ED Member

**$n_d=1.497820$, $\nu_d=82.52$. Glass: `J-FKH1 (Hikari; patent code 498825)`. Standalone $f_{air}=+24.068893$ mm.**

L7 is the first of the two low-dispersion positive elements and the front member of the L22 cemented component. Nikon identifies two ED elements in the production lens; the prescription places one in each of the two middle positive components behind the stop.

The element's high Abbe number permits positive power with reduced primary axial color relative to ordinary crowns. The current Hikari J-FKH1 row has the same `nd` and a `νd` difference of only 0.05, so it is used as the published coordinate successor while the patent's 498825 code remains explicit.

### L22 / L8 — Negative Meniscus Partner

**$n_d=1.804000$, $\nu_d=46.58$. Glass: `804466 — lanthanum-flint class (vendor unresolved)`. Standalone $f_{air}=-29.956559$ mm.**

L8 is the high-index negative partner cemented to the ED positive L7. The patent specifically favors a higher refractive index in the negative member than in the positive member for the L22 and L23 components.

The cemented pair remains weakly positive, with a verified net EFL of +139.991704 mm. Its role is not equivalent to either standalone element: the strong opposite powers form a compact positive component with internal correction.

### L23 / L9 — Negative Meniscus Partner

**$n_d=1.804400$, $\nu_d=39.59$. Glass: `804396 — dense-lanthanum-flint class (vendor unresolved)`. Standalone $f_{air}=-25.651152$ mm.**

L9 is the negative front member of the L23 cemented component. Its high index and lower Abbe number form the dispersive counterpart to the following ED positive element.

The component order is the reverse of L22: negative first, positive second. This distributes positive power and chromatic correction across two differently oriented cemented pairs in the master group.

### L23 / L10 — Biconvex Positive ED Member

**$n_d=1.497820$, $\nu_d=82.52$. Glass: `J-FKH1 (Hikari; patent code 498825)`. Standalone $f_{air}=+18.589564$ mm.**

L10 is the second low-dispersion positive element. It is cemented to L9 at surface 17 and supplies the dominant positive power of L23.

The completed L23 component has a verified net EFL of +49.307645 mm. The matched ED coordinates of L7 and L10 establish the two low-dispersion elements directly from the prescription, but they do not establish anomalous partial dispersion or apochromatic correction.

### L24 / L11 — Rear Negative Meniscus, Double Aspherical

**$n_d=1.606020$, $\nu_d=57.44$. Glass: `Unmatched (606574 class; nd=1.606020, vd=57.44)`. Standalone $f_{air}=-240.469845$ mm.**

L11 is a weak negative meniscus at the rear of G2. Both surfaces, 19A and 20A, are aspherical. Its low paraxial power allows the rear component to modify residual off-axis aberrations without functioning as the principal power source of the master group.

The patent places this aspherical component at the image side of the lens, where its surfaces act late in the ray path. The complete G2 remains positive at +33.809588 mm despite the rear negative contribution.

## Glass Identification and Selection

The patent does not name glass vendors or melts. Most rows therefore retain six-digit optical classes or explicit `Unmatched (...)` labels. The two 498825 ED rows are mapped to current Hikari J-FKH1 because its published `nd = 1.497820` is exact and its `νd = 82.57` differs by only 0.05; the patent code remains in the annotation so this coordinate-based classification is not mistaken for melt provenance.

| Material slot | Authored glass description | $n_d$ | $\nu_d$ | Use |
| --- | --- | ---: | ---: | --- |
| L1 | Unmatched 744496 class | 1.744429 | 49.55 | Front double-aspherical negative meniscus |
| L2 | 581408 optical-glass class | 1.581440 | 40.75 | Positive member of H1 |
| L3 | 773496 lanthanum-flint class | 1.772500 | 49.61 | Negative member of H1 |
| L3r | Unmatched hybrid optical resin | 1.553890 | 38.09 | Bonded aspherical layer |
| L4 | 755275 dense-flint class | 1.755200 | 27.51 | Positive meniscus in G1 |
| L5 | 741527 lanthanum-crown class | 1.741000 | 52.67 | Negative member of L21 |
| L6 | 548458 light-flint class | 1.548140 | 45.79 | Positive member of L21 |
| L7, L10 | J-FKH1; patent code 498825 | 1.497820 | 82.52 | Current Hikari coordinate successor; low-dispersion positive members of L22 and L23 |
| L8 | 804466 lanthanum-flint class | 1.804000 | 46.58 | Negative partner in L22 |
| L9 | 804396 dense-lanthanum-flint class | 1.804400 | 39.59 | Negative partner in L23 |
| L11 | Unmatched 606574 class | 1.606020 | 57.44 | Rear double-aspherical meniscus |

Example 1 publishes $n_d$ and $\nu_d$ only. The data file consequently contains no authored $n_C$, $n_F$, $n_g$, or $\Delta P_{g,F}$ values. The J-FKH1 catalog model supplies source-backed dispersion for the two coordinate-matched ED rows, but the available evidence does not support an APO designation or a patent-specific anomalous-partial-dispersion claim.

## Focus Mechanism

The lens uses internal focusing. The patent states that close focusing is performed by moving only L21, the cemented L5/L6 positive component at the front of G2. Nikon's manual identifies the production lens as an IF design with an internal Silent Wave Motor and specifies a minimum focus distance of 0.30 m from the focal plane at every zoom position.

The patent publishes finite-conjugate rows, but those rows do not define the exact production 0.30 m state after the object-distance reference plane is normalized. The data file therefore uses `CONSTRAINED_RECONSTRUCTION`, not a claim of directly published production spacing.

The reconstruction preserves the published mechanism:

- L21 alone translates.
- The adjacent gaps satisfy $D8+D11=\text{constant}$ at each zoom position.
- The rear group and image plane remain fixed, so BF is unchanged.
- The object-to-focal-plane distance is solved to 300.0 mm.

| Zoom state | D8 infinity → 0.30 m | D11 infinity → 0.30 m | L21 shift toward image | Calculated $|\beta|$ |
| --- | ---: | ---: | ---: | ---: |
| 12.3 mm | 25.956630 → 27.883028 mm | 3.433770 → 1.507372 mm | 1.926398 mm | 0.063708× |
| 18.0 mm | 9.882030 → 11.618052 mm | 3.433770 → 1.697748 mm | 1.736022 mm | 0.091595× |
| 23.3 mm | 1.991780 → 3.807014 mm | 3.433770 → 1.618536 mm | 1.815234 mm | 0.120308× |

The telephoto reconstruction gives 0.120308×, consistent with the approximately 0.12× production specification. The patent's position-7 row lists $\beta=-0.07149$, whereas independent finite-conjugate tracing gives −0.074038 for the printed spacings. That anomalous row is preserved as a source discrepancy and is not used to calibrate the production close endpoint.

## Aspherical Surfaces

Five aspherical surfaces are authored: 1A and 2A on L1, 6A on the bonded resin layer L3r, and 19A and 20A on L11. The patent describes the front and rear menisci as double-aspherical components and the surface on L3r as a composite glass/resin asphere.

The source equation is

$$
X(y)=\frac{y^2/r}{1+\sqrt{1-k(y/r)^2}}+C_3|y|^3+\sum_{i=2,4,6,8,10,12,14}C_i y^i,
$$

with $R=1/(1/r+2C_2)$. Example 1 has $C_2=0$ on every asphere, so the tabulated paraxial radius equals the reference radius. LensVisualizer uses the standard conic denominator $\sqrt{1-(1+K)(y/R)^2}$; the conversion is therefore

$$K=k-1.$$

The patent's $C_3|y|^3$ terms are stored as radial `A3` coefficients. Odd radial orders remain rotationally symmetric and do not imply decentering or anamorphism.

| Surface | $K$ | $A_3$ | $A_4$ | $A_6$ | $A_8$ | $A_{10}$ | $A_{12}$ | $A_{14}$ |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 1A | −14.9624 | — | `7.0386e-7` | `1.2342e-10` | `2.3507e-13` | `4.7875e-16` | `1.3662e-19` | 0 |
| 2A | −1.6055 | `2.6968e-5` | `-4.777e-6` | `-3.1245e-9` | `1.2368e-12` | `3.3971e-15` | `1.6057e-17` | `4.1171e-21` |
| 6A | −0.6586 | `2.5582e-5` | `3.6794e-5` | `-6.9701e-8` | `7.1618e-10` | `-3.182e-12` | `1.9011e-17` | `3.2012e-18` |
| 19A | 0.4732 | `3.7935e-6` | `-3.8764e-6` | `-6.0202e-8` | `-9.0241e-10` | `-1.9062e-12` | 0 | 0 |
| 20A | −0.3597 | `-8.1158e-7` | `-1.9195e-6` | `-7.6231e-8` | `-3.7054e-10` | `-4.0392e-12` | 0 | 0 |

The large negative conic values on L1 permit strong departure from a spherical base across the published 21.825 mm semi-diameter. At that height, the verified edge thickness of L1 is 8.974189 mm against a 2.000000 mm center thickness, reproducing the patent's $d_{max}/d_0$ condition.

Surface 6A carries the largest fourth-order coefficient and is formed on the thin resin layer. Its material power is negligible compared with the H1 stack, so its principal contribution is higher-order surface shaping. The rear pair 19A/20A applies lower-amplitude correction near the image side after the main positive power of G2.

No uniform scaling was applied. The scale factor is $s=1$, all radii and spacings remain in patent units, and the aspherical coefficients are unchanged. Consequently, no transformation of the form $A_{p,scaled}=A_{p,patent}/s^{p-1}$ was required.

## Chromatic Correction Strategy

The main low-dispersion correction resides in L22 and L23. Each contains one J-FKH1-coordinate positive element with patent $\nu_d=82.52$, cemented to a high-index negative member. L22 uses the order positive ED / negative high-index, while L23 uses negative high-index / positive ED.

This paired arrangement spreads positive power and primary color correction across two components behind the stop. The negative members have higher refractive indices than their positive partners, matching the construction preferred by the patent for reducing residual aberration within each cemented component.

The evidence is limited to d-line index and Abbe number. It supports a two-ED-element achromatizing strategy but not a claim of secondary-spectrum cancellation, anomalous partial dispersion, or apochromatic performance.

## Conditional Expressions

The patent defines five design conditions. Four reproduce the printed values after independent calculation. The fifth satisfies the printed inequality but not the patent's stated numerical result.

| Condition | Patent range | Published | Calculated from Example 1 | Assessment |
| --- | --- | ---: | ---: | --- |
| $d_{max}/d_0$ | $2.0<\cdot<6.0$ | 4.49 | 4.487095 | Passes; rounds to 4.49. |
| $(|R_{max}|-|R_{min}|)/|R_{max}|$ | $0.6<\cdot<1.0$ | 0.749 | 0.748674 | Passes; rounds to 0.749. |
| $d_{12}/f_t$ | $0.5<\cdot<1.5$ | 0.715 | 0.714592 | Passes; rounds to 0.715. |
| $f_{asp}/f_w$ | $-7.0<\cdot<-1.0$ | −2.91 | −2.905431 | Passes; rounds to −2.91. |
| $d_{23}/d_{II}$ | $0.07<\cdot<0.2$ | 0.119 | 0.192875 | Passes the inequality but conflicts with the printed value. |

For condition 5, the literal spacing $d_{23}=6.95000$ mm and the literal G2 vertex length $d_{II}=36.03377$ mm give 0.192875. The published 0.119 is retained as a source value but is not substituted for the result calculated from the prescription. No silent correction is made to the optical table.

## Verification Summary

The final data arrays were checked by sequential height/reduced-angle tracing and an independent ABCD formulation. The two matrix methods agree below $10^{-12}$ at all three infinity states.

| State | Calculated EFL | Published focal length | Calculated rear-vertex BFL | Published BF |
| --- | ---: | ---: | ---: | ---: |
| Wide | 12.300023243 mm | 12.30000 mm | 37.996778055 mm | 37.99664 mm |
| Middle | 18.000035916 mm | 18.00000 mm | 48.432246121 mm | 48.43207 mm |
| Telephoto | 23.300054860 mm | 23.30000 mm | 58.135413746 mm | 58.13521 mm |

The table-level design f-number is 4.1 and is used as the scalar `nominalFno`. The aberration sheets label the three plotted positions as f/4.12, f/4.08, and f/4.10; those values are retained as source diagnostics rather than modeled as a variable maximum aperture.

The verified Petzval sum is +0.006784573 mm⁻¹. Surface-by-surface calculation uses $\phi/(n n')$ and produces a corresponding signed Petzval radius of approximately −147.393 mm under the audit convention.

The patent-figure semi-diameter pass enlarged the bonded H1 component's front glass envelope and the following L4 meniscus. The high-curvature resin boundary remains at its validated 10.6 mm aperture rather than following the mechanical housing outline. The final geometry passes edge-thickness, rim-slope, conic-domain, and cross-gap validation, and exact axial and configured 0.6-field ray bundles remain within the authored apertures in all six infinity/0.30 m endpoint states.

Only the semi-diameter of L1 is published. All other lens semi-diameters and the stop opening are modeling inferences constrained by exact-Snell ray envelopes, the patent optical section, and geometry validation. At the extreme 51.22° wide half-field, the formal stop-centered chief ray exceeds the published L1 effective aperture; the model preserves the source aperture rather than enlarging it. The configured 0.6-field rendered bundles remain contained.

The model omits no active lens surface and requires no cover-glass or filter correction. Sensor cover glass, filters, inactive dummy planes, flare cutters, and mechanical parts are absent from Example 1 and are not added.

## Sources

- Haruo Sato, *Super Wide-Angle Zoom Lens System*, US 6,940,655 B2, especially Example 1, Table 1, and Figures 1–4.
- Nikon Corporation, *AF-S DX Zoom-Nikkor ED 12-24mm f/4G IF User's Manual* — production identity, Nikon F/DX format, 11-element/7-group construction, three aspherical and two ED elements, IF/Silent Wave Motor focusing, seven-blade diaphragm, and 0.30 m minimum focus distance.
- Nikon Corporation, *NIKKOR — The Thousand and One Nights*, No. 68 — 2003 release context, Haruo Sato design attribution, and the production lens's two-group negative-lead construction with four elements in G1 and seven in G2.
- Nikon USA, *AF-S DX Zoom-Nikkor 12-24mm f/4G IF-ED* product specifications — marketed focal range and aperture, Nikon F mount, DX format, 11-element/7-group construction, two ED and three aspherical elements, internal focusing, and 0.12× maximum reproduction ratio.
- Authoritative optical-glass catalogs from OHARA, HOYA, Schott, HIKARI, CDGM, and Sumita were consulted for class-level residual matching. Hikari's 2023 J-FKH1 formula-3 row supplies the coordinate-successor dispersion model for patent code 498825: https://www.nikon.com/business/components/lineup/materials/optical-glass/assets/pdf/hikari_catalog2023.pdf
