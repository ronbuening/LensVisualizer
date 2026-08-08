# PENTAX SMC DA 18-55mm f/3.5-5.6 AL

## Patent Reference and Design Identification

**Patent:** US 7,307,794 B2
**Application Number:** US 11/223,915
**Priority:** 2004-09-17 (JP 2004-271931; JP 2004-271932)
**Filed:** 2005-09-13
**Published application:** US 2006/0061873 A1, 2006-03-23
**Granted:** 2007-12-11
**Inventor:** Masakazu Saori
**Assignee:** Pentax Corporation
**Title:** *Zoom Lens System*
**Embodiment analyzed:** Example 1 / Embodiment 1, Table 1

The prescription is the first numerical embodiment of US 7,307,794 B2. The patent does not name a retail product, so the connection to the original smc PENTAX-DA 18-55mmF3.5-5.6AL is a production-correlation inference rather than a manufacturer statement. The correlation is nevertheless unusually specific.

1. The production lens is specified as 12 elements in 9 groups, and the selected patent example contains the same 12 physical glass elements arranged as 9 air-separated optical components.[2]
2. The production focal range is 18-55 mm, while the patent publishes 19.10-55.16 mm. The telephoto endpoint is essentially the marketed value, while the wide endpoint is modestly longer; no uniform scale can reconcile both endpoints simultaneously.
3. The production maximum aperture is f/3.5-5.6, while the patent publishes f/3.5-5.7. The model therefore keeps the patent values for stop and pupil geometry and treats the retail f/3.5-5.6 designation as marketing metadata.[2]
4. The production diagonal angle of view is 76°-29°. Example 1 publishes half-fields of 37.9° and 14.3°, corresponding to full fields of 75.8° and 28.6°, which round directly to the manufacturer figures.[2]
5. The production lens is identified by PENTAX as using an aspherical lens, and Example 1 has one aspherical surface, surface 6, in the negative first group.[2]
6. The production lens is specified at 0.25 m minimum focus and 0.34× maximum reproduction. The mechanism-constrained reconstruction described below reproduces 0.345× at the tele endpoint without introducing any moving group other than the patent-specified first focusing group.[2]

The timing is also consistent with a direct production relationship. PENTAX's 2004 release archive dates the product announcement to 2004-09-15, two days before the Japanese priority date of the patent.[3] This chronology supports contemporaneous development but is not treated as proof that PENTAX formally identified Example 1 as the commercial prescription.

The prescription remains at patent scale. The numerical zoom positions are 19.10 and 55.16 mm, and independent Gaussian tracing of the final data arrays gives 19.101867 mm and 55.144895 mm. The marketed 18-55 mm range is stored separately. No uniform scale factor is applied, and the aspherical coefficients therefore require no scale transformation.

## Optical Architecture

The design is a four-functional-group, negative-lead zoom with power sequence **negative-positive-negative-positive**. Its 12 elements form 9 air-separated optical components, matching the production construction count, but the patent organizes those components into four mechanically significant zoom groups:

- **G1, negative:** four separate meniscus elements, L11-L14. G1 is also the focusing group.
- **G2, positive:** positive singlet L21 followed by cemented doublet L22-L23.
- **G3, negative:** cemented doublet L31-L32.
- **G4, positive:** positive singlet L41 followed by cemented doublet L42-L43.

Independent first-order decomposition of the final data gives functional-group focal lengths of **-26.937 mm, +25.678 mm, -27.344 mm, and +32.509 mm** for G1 through G4 respectively. These are group powers in isolation from the other zoom-group spacings; they are not the same quantity as the standalone focal length of an individual element or the net power of a cemented pair.

The architecture is explicitly intended for a digital SLR with a comparatively long back focal distance. At the modeled infinity endpoints, the recomputed BFD is 37.696 mm at the wide position and 58.099 mm at the tele position. Under the project's classification rule, BFD exceeds EFL at both endpoints, so the design qualifies as retrofocus in both states. It is not telephoto by the separate track/EFL test because total track remains substantially longer than EFL.

Two non-refracting aperture planes are optically significant. The patent places a fixed-aperture diaphragm **FS** 0.30 mm before surface 9 and the variable-aperture diaphragm **S** 0.36 mm before surface 14. The data model preserves both axial positions, but only S is labeled `STO`, as required by the sequential model. The patent describes FS as a limiter of off-axis bundles and S as the variable imaging aperture.

The diaphragm positions are source facts; their clear radii are not. The patent publishes neither diaphragm diameter nor any surface semi-diameter. The authored semi-diameters, including the FS opening and the baseline STO radius, are therefore modeling inferences derived from ray envelopes, the patent optical section, and geometry validation. They are not patent dimensions.

Zooming from wide to tele follows the movement scheme shown in Fig. 37. G2, G3, and G4 move monotonically toward the object. G1 first moves toward the image and then reverses toward the object, giving the first group a U-turn path. The published numerical table contains only the wide and tele endpoint spacings, so the final data correctly represents only those endpoint relations. Linear interpolation between the two modeled states must not be interpreted as the unpublished intermediate G1 trajectory.

The principal published endpoint spacing changes are substantial: the G1-G2 separation contracts, the G2-G3 separation expands, the G3-G4 separation contracts, and the rear distance grows. After the two aperture planes are inserted without changing their axial stations, the variable modeled gaps are 25.78→2.70 mm after surface 8, 3.00→15.90 mm after surface 13, 15.40→2.50 mm after surface 16, and 37.71→58.13 mm after surface 21.

One sentence in the patent's descriptive text calls group 40 a “negative fourth lens group.” This conflicts with the abstract, claims, repeated architecture statements, the element forms, and the computed +32.509 mm group focal length. It is treated as a drafting error in the prose; no prescription value is altered to resolve it.

Example 1 contains no sensor-cover plate, filter, inactive dummy plane, flare cutter, mirror, or folded path. Consequently, the data makes no air-equivalent rear-spacing correction for an omitted optical plate. Mechanical barrel and aperture-blade structures are outside the sequential prescription.

## Element-by-Element Analysis

### L11 — Negative Meniscus

**nd = 1.60311, νd = 60.7. Glass: 603607 class (SK/BACD family; patent vendor unspecified). Standalone f = -37.584 mm.**

L11 is the front member of G1 and is one of four menisci that the patent describes as convex toward the object. Its negative standalone power is stronger than that of L12 and far stronger than the very weak L13. Together with the following negative menisci, it establishes the negative-lead character needed for the wide field and long SLR back focus.

The glass annotation is intentionally class-level. Current catalogs contain exact or near-exact 603607-family positions, but the patent does not identify a manufacturer; the data therefore does not convert the class match into a production-glass claim.

### L12 — Negative Meniscus

**nd = 1.62299, νd = 58.2. Glass: 623582 class (OHARA S-BSM15 optical position; patent vendor unspecified). Standalone f = -60.032 mm.**

L12 continues the negative front-group bending with weaker standalone power than L11. The patent keeps L11 and L12 as separate air-spaced menisci rather than combining them into a cemented front component, allowing the front group to distribute power and ray height across several surfaces.

The 623582 coordinate is an exact current OHARA S-BSM15 position and lies close to equivalent crown-family entries from other vendors. Because the patent provides only nd and νd, the model retains the optical-position description rather than asserting OHARA provenance.

### L13 — Weak Negative Meniscus with Rear Asphere

**nd = 1.52538, νd = 56.3. Glass: Unmatched (nd=1.52538, vd=56.3; code position 525563). Standalone f = -416.940 mm.**

L13 has very weak standalone negative power compared with L11 and L12, but its rear surface 6A is the sole asphere in Example 1. The patent specifically associates the first-group asphere with correction of wide-end distortion and astigmatism and with reducing field-curvature variation through the zoom range.

The glass position does not have a defensible current public-catalog identity within the project's matching discipline. It is therefore left explicitly unmatched instead of being assigned the nearest catalog neighbor.

### L14 — Positive Meniscus

**nd = 1.84666, νd = 23.8. Glass: 847238 class (dense-flint family; patent vendor unspecified). Standalone f = +88.656 mm.**

L14 is the positive rear member of the otherwise negative G1. Its high index and low Abbe number contrast strongly with the preceding crown-like members. In first-order terms, its positive standalone contribution partially offsets the three negative elements while leaving the complete group at -26.937 mm.

The 847238 position is populated by closely corresponding dense-flint glasses in several current catalogs. The data deliberately records the family rather than selecting a vendor not named by the patent.

### L21 — Biconvex Positive

**nd = 1.51601, νd = 49.9. Glass: Unmatched (nd=1.51601, vd=49.9; code position 516499). Standalone f = +50.315 mm.**

L21 begins G2 as a separate positive singlet. It is followed by a short air gap and then the L22-L23 cemented pair. The combination gives G2 a computed standalone group focal length of +25.678 mm, making it one of the principal converging groups in the zoom system.

The stored optical coordinates do not justify assigning the nearest 517522-family catalog glasses as exact equivalents, so the element remains `Unmatched` in the data.

### L22 — Biconvex Positive, Cemented D1 Front Member

**nd = 1.48749, νd = 70.2. Glass: 487702 class (OHARA S-FSL5 optical position; patent vendor unspecified). Standalone f = +25.808 mm.**

L22 is the positive component of the first cemented pair. Its relatively high Abbe number contrasts with the much lower-νd negative L23 behind it. That contrast supplies ordinary first-order chromatic balancing within the cemented component, but no claim of anomalous partial dispersion or apochromatic correction is justified from nd and νd alone.

The quoted +25.808 mm value is the standalone thick-lens focal length of L22 in air. Once cemented to L23, the pair must be treated as a single compound component, and its net power is not obtained by simply adding the two standalone powers.

### L23 — Negative Meniscus, Cemented D1 Rear Member

**nd = 1.84333, νd = 24.2. Glass: Unmatched (nd=1.84333, vd=24.2; code position 843242). Standalone f = -48.035 mm.**

L23 is the negative member of the L22-L23 cemented component. The interface at source surface 12 correctly changes directly from L22 glass to L23 glass; the final data assigns that junction to the downstream element rather than inserting an artificial cement layer.

The compound L22-L23 component is net positive, whereas L23 by itself is strongly negative. Its behavior within G2 is therefore distinct from the standalone -48.035 mm value quoted above, and G2 as a whole remains substantially more positive because L21 contributes separately ahead of the doublet.

### L31 — Positive Meniscus, Cemented D2 Front Member

**nd = 1.84700, νd = 24.0. Glass: 847240 class (nearest current family 847238; patent vendor unspecified). Standalone f = +30.553 mm.**

L31 is the positive member of the two-element third functional group. The patent describes it as a positive meniscus with its convex surface facing the image. Despite the positive standalone power of L31, the complete cemented G3 is negative because L32 is substantially stronger in the opposite sense.

The glass annotation is a family-level match only. Its nd and νd lie close to the 847238 dense-flint family, but the stored patent pair is retained exactly and no vendor-specific identity is asserted.

### L32 — Biconcave Negative, Cemented D2 Rear Member

**nd = 1.77249, νd = 49.4. Glass: 773496 class (lanthanum-flint family; patent vendor unspecified). Standalone f = -14.678 mm.**

L32 is the strongest negative standalone element in the prescription. Cemented to L31, it drives D2 to a net negative component; because G3 consists only of this cemented pair, the compound component and the complete third functional group share the same -27.344 mm first-order focal length.

This is a useful example of why standalone element power and in-situ group behavior must remain distinct. L31 is individually positive and L32 individually negative, yet their cemented interface and thickness produce the final negative group power used in the patent's conditional ratios.

### L41 — Biconvex Positive

**nd = 1.64118, νd = 58.9. Glass: Unmatched (nd=1.64118, vd=58.9; code position 641589). Standalone f = +33.558 mm.**

L41 is the principal positive singlet at the front of G4. The complete fourth group has a computed standalone group focal length of +32.509 mm, close to L41's own +33.558 mm, because the cemented pair behind it is designed to have only weak residual positive power as a compound component.

No specific current catalog glass reproduces the patent coordinate closely enough to justify a named production identity. The nearest lanthanum-crown families are therefore not substituted into the data.

### L42 — Biconvex Positive, Cemented D3 Front Member

**nd = 1.51601, νd = 50.6. Glass: Unmatched (nd=1.51601, vd=50.6; code position 516506). Standalone f = +25.743 mm.**

L42 begins the rear cemented pair with substantial positive standalone power. It is directly cemented to the negative L43. The patent states that the cemented component in G4 may be positive or negative but preferably has positive refractive power; the final prescription satisfies that preference with a very weak net positive compound component.

The standalone +25.743 mm value should not be read as the power of D3. Cementing L42 to L43 produces near cancellation, after which L41 remains the dominant positive contributor to G4.

### L43 — Negative Meniscus, Cemented D3 Rear Member

**nd = 1.75589, νd = 28.8. Glass: 756288 class (nearest current dense-flint family 755275/276; patent vendor unspecified). Standalone f = -25.379 mm.**

L43 is the final physical element of the lens and the negative member of D3. The patent prefers the last element of G4 to be a negative meniscus with its convex surface facing the image, associating that form with field-curvature correction.

Its standalone power almost cancels the positive standalone power of L42, leaving the cemented component only weakly positive. In situ, however, D3 works after L41 and as part of the complete +32.509 mm fourth functional group, so the individual -25.379 mm figure is not a description of the rear group's total behavior.

## Glass Identification and Selection

The patent publishes d-line refractive index and Abbe number but no glass manufacturer, catalog designation, C/F/g-line indices, partial-dispersion ratio, or anomalous-dispersion deviation. The data therefore uses class/code labels only where current catalogs support the optical position and `Unmatched (...)` where they do not. The catalog audit used current OHARA, HOYA, HIKARI, SCHOTT, SUMITA, and CDGM material data.[4][5][6][7][8][9]

| Element | nd | νd | Authored glass annotation | Catalog interpretation |
|---|---:|---:|---|---|
| L11 | 1.60311 | 60.7 | 603607 class (SK/BACD family; patent vendor unspecified) | Exact 603607-class positions exist in current Japanese catalogs; vendor not established |
| L12 | 1.62299 | 58.2 | 623582 class (OHARA S-BSM15 optical position; patent vendor unspecified) | Exact OHARA position; near-equivalent 623581 family elsewhere |
| L13 | 1.52538 | 56.3 | Unmatched (nd=1.52538, vd=56.3; code position 525563) | No defensible current exact family |
| L14 | 1.84666 | 23.8 | 847238 class (dense-flint family; patent vendor unspecified) | Strong cross-vendor dense-flint position |
| L21 | 1.51601 | 49.9 | Unmatched (nd=1.51601, vd=49.9; code position 516499) | Nearest 517522-family entries are too dispersed for exact identification |
| L22 | 1.48749 | 70.2 | 487702 class (OHARA S-FSL5 optical position; patent vendor unspecified) | Exact OHARA S-FSL5 position; close cross-vendor equivalents |
| L23 | 1.84333 | 24.2 | Unmatched (nd=1.84333, vd=24.2; code position 843242) | Nearest 847238 family differs too much in index for an exact identity |
| L31 | 1.84700 | 24.0 | 847240 class (nearest current family 847238; patent vendor unspecified) | Family-level dense-flint match only |
| L32 | 1.77249 | 49.4 | 773496 class (lanthanum-flint family; patent vendor unspecified) | Strong 773496-class cross-vendor position |
| L41 | 1.64118 | 58.9 | Unmatched (nd=1.64118, vd=58.9; code position 641589) | Nearest 640601/602 and 641601 families are not exact |
| L42 | 1.51601 | 50.6 | Unmatched (nd=1.51601, vd=50.6; code position 516506) | Nearest 517522-family entries remain non-exact |
| L43 | 1.75589 | 28.8 | 756288 class (nearest current dense-flint family 755275/276; patent vendor unspecified) | Class-level dense-flint match only |

The strongest first-order dispersion contrast occurs in the cemented components, particularly L22-L23. That contrast is sufficient to discuss ordinary achromatizing balance at the Abbe-number level, but it is not evidence of apochromatic correction. The final data intentionally contains no `nC`, `nF`, `ng`, `dPgF`, or APD flag, and no APO or anomalous-partial-dispersion claim is made.

Catalog similarity also must not be confused with production provenance. A catalog entry that reproduces the patent's nd and νd is evidence for an optical class or possible equivalent, not evidence that PENTAX purchased that specific manufacturer's glass for the retail lens.

## Focus Mechanism

The patent explicitly assigns focusing to G1. It does not publish a finite-distance spacing table for Example 1. The close-focus states in the final data are therefore marked **CONSTRAINED_RECONSTRUCTION**, not source-published states.

The reconstruction uses a single degree of freedom at each zoom endpoint:

- G1 translates toward the object.
- G2, G3, and G4 remain fixed at the selected zoom endpoint.
- The image plane remains fixed.
- The manufacturer's 0.25 m minimum focusing distance is interpreted as image-plane referenced.
- The imaging condition is solved numerically rather than estimated from the patent drawing.

| Zoom state | S8→FS at infinity | S8→FS at reconstructed 0.25 m | G1 objectward travel | Reconstructed |m| |
|---|---:|---:|---:|---:|
| Wide | 25.780000 mm | 30.370939 mm | 4.590939 mm | 0.121636× |
| Tele | 2.700000 mm | 7.232077 mm | 4.532077 mm | 0.345167× |

The tele reconstruction is close to the manufacturer's rounded 0.34× maximum reproduction specification.[2] That agreement is a cross-check on the one-group focus model, not evidence that the patent itself publishes the 0.25 m state.

The finite-distance solution also changes the effective first-order focal length because front-group focusing alters the complete system matrix. That behavior is a consequence of the reconstructed moving-group model and should not be confused with the fixed infinity design endpoints stored in `zoomPositions`.

The manufacturer documents the production lens's Quick-Shift Focus System.[2] That is a mechanical/user-interface feature of the retail lens. The optical model represents only the prescription-level G1 translation and does not encode the focus-drive mechanism.

## Aspherical Surfaces

Example 1 has one aspherical surface: the rear surface of L13, source surface 6 and authored surface **6A**. The patent defines the sag as

$$
Z(h)=\frac{c h^2}{1+\sqrt{1-(1+K)c^2h^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10},
$$

with $c=1/R$. This is already the standard conic-constant convention used by LensVisualizer; no conversion from a patent-specific $\kappa$ form is required.

For 6A:

- **R = +19.048 mm**
- **K = 0**
- **A4 = -3.2236 × 10^-5 mm^-3**
- **A6 = -7.1389 × 10^-8 mm^-5**
- **A8 = +8.8889 × 10^-11 mm^-7**
- **A10 = -7.2416 × 10^-13 mm^-9**
- **A12 = 0, A14 = 0** in the authored schema

The patent states that first-group aspherization is used particularly to improve distortion and astigmatism at the short focal-length end and to reduce field-curvature fluctuation during zooming. Because K=0, the conic base is spherical and the polynomial terms alone give the departure from that base.

The patent does not publish a clear semi-diameter. At the final inferred and geometry-validated 6A semi-diameter of 14.4 mm, the polynomial departure from the spherical base is **-2.135884 mm** and the actual modeled rim-slope angle is **21.958°**. Those are model-evaluation results at an inferred aperture, not source dimensions.

No scale factor is applied to the prescription, so the coefficients are transcribed directly. Had the lens been uniformly scaled, each $A_p$ would require division by $s^{p-1}$; no such transformation occurs here.

The patent does not state that the Example 1 asphere is hybrid, molded, or polished. Other embodiments explicitly discuss hybrid resin aspheres, but that manufacturing description is not transferred to Example 1.

## Aberration Correction Strategy and Aperture Control

The patent's design rationale centers on obtaining a compact negative-lead four-group digital-SLR zoom while simplifying G3 and G4. It specifically identifies several mechanisms rather than attributing correction generically to every individual surface.

The fixed diaphragm FS is placed close to the front of G2 to restrict the off-axis bundle at the short focal-length end. The patent links this placement to easier off-axis correction, reduced demand on G1 diameter, and maintenance of peripheral illumination when G1 is used for focusing.

The variable diaphragm S lies between G2 and G3 and moves with G3. The patent associates this placement with reducing aperture-dependent coma fluctuation. In the final model it is the only `STO` plane.

The asphere on L13 addresses wide-angle distortion and astigmatism and reduces field-curvature change during zooming. This is a direct patent statement and is distinct from any catalog-derived glass interpretation.

G3 is reduced to one cemented positive-negative pair, and G4 to one positive singlet followed by one cemented positive-negative pair. The patent treats these structures as a way to simplify the rear system while controlling higher-order aberration changes. It also prefers the G4 cemented pair to retain positive net power and the final L43 to be a negative image-convex meniscus for field-curvature control. The computed prescription is consistent with both preferences.

The modeled wide-open f-number is intentionally the patent value **f/3.5 at wide and f/5.7 at tele**, because those values govern the reconstructed pupil geometry. The retail lens is marketed as **f/3.5-5.6**.[2] The 0.1 difference at tele is therefore retained rather than silently changing the optical model to match the engraved specification.

## Conditional Expressions

The patent defines seven first-order power-distribution conditions. Recalculation from the final data reproduces the rounded Table 10 values and satisfies each stated interval.

| Condition | Patent interval | Final-data result | Table 10 | Result |
|---|---|---:|---:|---|
| (1) $|f_3|/f_w$ | $1.0 < |f_3|/f_w < 2.5$ | 1.431632 | 1.43 | Pass |
| (2) $f_4/f_w$ | $1.3 < f_4/f_w < 2.5$ | 1.702045 | 1.70 | Pass |
| (3) $|f_1|/f_{Bw}$ | $0.4 < |f_1|/f_{Bw} < 0.8$ | 0.714321 | 0.71 | Pass |
| (4) $f_4/f_2$ | $1.0 < f_4/f_2 < 1.8$ | 1.266039 | 1.27 | Pass |
| (5) $|f_1|/\sqrt{f_wf_t}$ | $0.5 < |f_1|/\sqrt{f_wf_t} < 1.2$ | 0.829891 | 0.83 | Pass |
| (6) $|f_1|/f_w$ | $1.0 < |f_1|/f_w < 1.8$ | 1.410316 | 1.41 | Pass |
| (7) $f_2/f_w$ | $1.2 < f_2/f_w < 1.8$ | 1.344386 | 1.34 | Pass |

These conditions describe the power balance among the four functional zoom groups. They do not specify production glass types, semi-diameters, or close-focus movement.

## Verification Summary

Independent first-order tracing of the final TypeScript arrays was performed in height/reduced-angle coordinates and cross-checked with ABCD composition in both reduced-angle and ordinary-angle forms. The three formulations agree to numerical precision.

| Quantity | Wide | Tele |
|---|---:|---:|
| Patent focal length | 19.10 mm | 55.16 mm |
| Recomputed EFL | 19.101867 mm | 55.144895 mm |
| Patent back focal distance | 37.71 mm | 58.13 mm |
| Recomputed BFD | 37.696384 mm | 58.099082 mm |
| Surface-1-to-image track | 118.260000 mm | 115.600000 mm |
| Front principal plane from surface 1 | +34.838560 mm | +35.284332 mm |
| Rear principal plane from surface 21 | +18.594517 mm | +2.954188 mm |

The small EFL and BFD residuals are consistent with the precision of the published radii, indices, and variable spacings. No patent radius, thickness, refractive index, Abbe number, or asphere coefficient was altered to force exact agreement.

Surface-by-surface Petzval summation, using $P_i=\phi_i/(n_i n'_i)$ at every refracting interface including cemented glass-to-glass boundaries, gives **ΣP = +0.005749530 mm^-1** in the adopted sign convention.

The inferred semi-diameters pass the project's current edge-thickness, actual rim-slope, conic, shared-band cross-gap, and off-axis-containment checks for both infinity and reconstructed close-focus states at the two authored zoom endpoints. This validation supports the modeled geometry but does not convert those semi-diameters into patent facts.

The focus reconstruction closes the finite-object imaging condition to numerical precision and gives 0.121636× at the wide endpoint and 0.345167× at the tele endpoint. The latter is consistent with the manufacturer's 0.34× rounded specification, while remaining explicitly a constrained model result rather than a published patent row.[2]

No spectral claim in this analysis depends on unmodeled anomalous dispersion. The glass discussion is limited to nd/νd class matching and ordinary first-order dispersion contrast because the selected example supplies no nC, nF, ng, or dPgF data.

## Sources

1. **US 7,307,794 B2**, Masakazu Saori, *Zoom Lens System*, Pentax Corporation. Example 1 / Table 1; Figs. 1, 3, and 37; Table 10; granted 2007-12-11.
2. **RICOH IMAGING**, archived product page for the original smc PENTAX-DA 18-55mmF3.5-5.6AL. Manufacturer source for production identity, APS-C coverage, 18-55 mm focal range, f/3.5-5.6 maximum aperture, 76°-29° angle of view, 12 elements / 9 groups, six diaphragm blades, 0.25 m minimum focus, 0.34× maximum reproduction, and Quick-Shift Focus System.
   https://www.ricoh-imaging.co.jp/english/products/lens/k/standard/smcpentax-da18-55al/
3. **RICOH IMAGING / PENTAX**, 2004 press-release archive, entry dated 2004-09-15 for the smc PENTAX-DA Zoom 18-55mm F3.5-5.6 AL.
   https://www.ricoh-imaging.co.jp/japan/press/2004.html
4. **OHARA INC.**, current optical-glass catalog downloads and glass-type tables.
   https://www.ohara-inc.co.jp/en/product/catalog/
5. **HOYA Corporation**, optical-glass data downloads and cross-reference resources.
   https://www.hoya-opticalworld.com/english/datadownload/index.html
6. **HIKARI GLASS CO., LTD.**, optical-glass catalog data.
   https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_ALL_Catalog_Data.xlsx
7. **SCHOTT**, optical-glass catalog and data downloads.
   https://www.schott.com/en-gb/products/optical-glass-p1000267/downloads
8. **SUMITA Optical Glass, Inc.**, optical-glass catalog downloads.
   https://www.sumita-opt.co.jp/en/download/
9. **CDGM Glass Co., Ltd.**, colourless optical-glass data and catalog resources.
   https://www.cdgmgd.com/go.htm?k=Colourless_Optical_Glass&url=goods
