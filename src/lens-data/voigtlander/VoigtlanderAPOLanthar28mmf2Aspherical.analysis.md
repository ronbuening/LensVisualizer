## Patent Reference and Design Identification

**Patent:** JP 2026-98935 A\
**Application Number:** JP 2024-212943\
**Filed:** 2024-12-06\
**Published:** 2026-06-18\
**Inventor:** Nozomu Mishima\
**Applicant:** Cosina Co., Ltd.\
**Title:** 光学レンズ系 (*Optical lens system*)
**Embodiment analyzed:** Example 2 (第2実施形態; Fig. 3, Tables 5–8)

The data file correlates Example 2 with the **VOIGTLÄNDER APO-LANTHAR 28mm f/2 Aspherical VM**. This is a fixed author correlation, not a statement by Cosina that the production prescription is identical to the patent example. The identification rests on a convergent set of source facts:

1. The production lens is marketed as a 28 mm f/2 lens; Example 2 states $f=28.84\ \mathrm{mm}$ and F/2.06.
2. The manufacturer gives a 74.0° angle of view; Example 2 gives a 37.02° half field, or 74.04° full field.
3. Both sources specify 12 elements in 8 groups.
4. The manufacturer identifies six anomalous-partial-dispersion elements, two double-sided aspherical elements, and a floating mechanism. Example 2 contains four aspherical surfaces on two elements, publishes $\Delta P_{gF}$ for every glass, and moves G1 and G2 independently during close focusing.
5. The production VM lens focuses to 0.5 m. Example 2 normalizes to about 0.50085 m from object to image plane when the printed D0 and close-state track are combined.
6. The patent application was filed before the VM lens entered production; Cosina lists the VM release date as 2025-07-24.

The VM scope is deliberate. Cosina's later Sony E- and Nikon Z-mount versions specify 0.28 m minimum focus and mount-optimized optics, whereas Example 2 provides a 0.5 m-class focus endpoint. A common published section drawing does not establish numerical identity across those variants.

The manufacturer values remain marketing specifications: 28 mm, f/2, 74.0°, 0.5 m, and 12/8 construction. The data model retains the patent F-number of 2.06 and uses the paraxial EFL recomputed from the authored arrays, 29.126006 mm, as `focalLengthDesign`. The patent summary value of 28.84 mm is preserved as a source fact rather than substituted for the array result.

## Optical Architecture

Example 2 is a two-unit wide-angle design consisting of positive G1, a central aperture stop, and positive G2. Each macro-group contains negative and positive subassemblies, so the design is better described by its published power distribution than by forcing it into a classical named family.

G1 is divided into:

- **G1a:** the double-sided-aspherical negative meniscus L9;
- **G1b:** the net-negative cemented meniscus pair L10f/L10r;
- **G1c:** the positive singlet L11 followed by the net-positive cemented doublet L12f/L12r.

G2 is divided into:

- **G2a:** the net-negative cemented doublet L13f/L13r;
- **G2b:** the strong positive biconvex singlet L14;
- **G2c:** the net-negative cemented doublet L15f/L15r followed by the weak negative, double-sided-aspherical L16.

Independent d-line tracing of the final data gives G1 an EFL of +58.393064 mm and G2 an EFL of +54.220839 mm. The ratio is 1.07695, close to the near-symmetric stop-side power balance described by the patent in connection with condition (3). The front negative subsections G1a+G1b have a combined air-to-air EFL of −29.801877 mm; they expand the angular field before G1c restores positive power. Behind the stop, the negative G2a and G2c sections bracket the strong +20.625740 mm G2b singlet.

The complete authored prescription has an EFL of 29.126006 mm, a first-surface-to-image track of 71.25 mm, and a BFL from S21A of 18.582765 mm. Under the project definitions it is neither telephoto ($TL/EFL=2.4463$) nor retrofocus ($BFD/EFL=0.6252<1$). The important architectural feature is instead the approximately balanced pair of positive floating macro-groups around the stop.

The optical path contains no sensor cover, filter, inactive dummy plane, flare cutter, folded-path surface, or synthetic cement layer. Surface 11 is absent only because the active aperture plane is labeled `STO` and carries the patent's D11 spacing.

## Element-by-Element Analysis

### L9 — Front Negative Meniscus, Double-Sided Asphere

**nd = 1.51680, νd = 64.20. Glass: H-K9LGT (CDGM) equivalent, 517642. Standalone f = −42.901440 mm.**

L9 forms G1a and supplies the first negative action of the wide-angle front section. Both surfaces, 1A and 2A, are aspherical. The first surface is weakly convex toward the object, while the much stronger second surface turns the element into a negative meniscus. Its role is not simply to add negative focal power; it establishes the entrance-bundle geometry before the high-index G1b cemented pair.

The patent identifies the first negative lens as an asphere and associates this placement with compactness and aberration control (¶0050). CDGM's H-K9LGT row exactly reproduces the patent's 1.51680/64.20 tuple and supplies the stored line indices. The equivalent label identifies the catalog curve used by the model; the patent still does not prove that Cosina used that production melt.

### L10 — Cemented Net-Negative Meniscus Pair

#### L10f — Positive Meniscus

**nd = 1.85150, νd = 40.78. Glass: S-LAH89 (OHARA) equivalent, 852408. Standalone f = +52.423822 mm.**

L10f is the positive front half of G1b. Its high refractive index allows substantial refraction within a short axial distance. The patent conditions require the first positive lens of G1b to have $n_d>1.76$ and $\nu_d>29$; this element satisfies both limits.

#### L10r — Negative Meniscus

**nd = 1.78880, νd = 28.43. Glass: S-NBH58 (OHARA) equivalent, 789284. Standalone f = −36.365402 mm.**

L10r is cemented directly to L10f and provides the negative action that makes G1b net negative. The patent places its index between 1.76 and 1.86 and its Abbe number between 28.4 and 30, a narrow glass region intended to combine strong bending with controlled chromatic behavior.

The cemented L10 pair has a net air-to-air EFL of −98.936654 mm. This value must not be inferred by adding the two standalone air-lens powers: the shared cemented interface and thick-lens geometry determine the net unit power.

### L11 — Strong Positive Biconvex Singlet

**nd = 2.00100, νd = 29.13. Glass: TAFD55 (HOYA) equivalent, 001291. Standalone f = +33.291042 mm.**

L11 begins G1c and recovers positive power after G1a and G1b. Its very high index produces strong positive power with limited curvature and axial thickness. It works with the following L12 doublet to make G1 positive overall, even though the front two subsections are negative.

The glass has modest positive $\Delta P_{gF}=+0.0036$. Its primary role in this model is strong compact positive power rather than the large anomalous-dispersion leverage found in L13r and L15f.

### L12 — Cemented Net-Positive Doublet Before the Stop

#### L12f — Positive Biconvex Element

**nd = 1.90043, νd = 37.37. Glass: TAFD37A (HOYA) equivalent, 900374. Standalone f = +28.982846 mm.**

L12f is a strong positive element placed immediately before the stop. It provides converging power within G1c and helps establish the near-balanced G1/G2 power distribution.

#### L12r — Negative Biconcave Element

**nd = 1.85451, νd = 25.15. Glass: NBFD25 (HOYA) equivalent, 855252. Standalone f = −39.294469 mm.**

L12r is the low-Abbe negative partner. Its $\Delta P_{gF}=+0.0072$ differs from L12f's −0.0044, giving the pair an additional chromatic degree of freedom beyond their ordinary Abbe contrast.

The cemented L12 unit has a net air-to-air EFL of +98.774343 mm. The positive sign is a property of the complete cemented doublet, not of either element considered in isolation.

### L13 — Cemented Net-Negative Doublet Behind the Stop

#### L13f — Strong Negative Biconcave Element

**nd = 1.72047, νd = 34.71. Glass: S-NBH8 (OHARA) equivalent, 720347. Standalone f = −12.673277 mm.**

L13f is the strongest standalone negative element in the design. It begins G2a immediately behind the stop and carries $\Delta P_{gF}=-0.0025$. Its index and partial-dispersion sign satisfy the patent's negative-glass conditions for G2.

#### L13r — Positive Biconvex Element

**nd = 1.62846, νd = 59.17. Glass: J-PSKH8 (HIKARI) equivalent, 628592. Standalone f = +19.316970 mm.**

L13r is the positive partner with $\Delta P_{gF}=+0.0139$. This is one of the patent's explicitly emphasized positive anomalous-dispersion glasses. It opposes the strong negative power of L13f while providing a large partial-dispersion difference across the cemented interface.

The complete L13 doublet remains net negative, with a net air-to-air EFL of −47.894535 mm. This agrees with the patent's $f_{2abal}$ value to the printed precision and satisfies conditions (14)–(17).

### L14 — Principal Positive Rear-Group Singlet

**nd = 1.90525, νd = 35.04. Glass: S-LAH93 (OHARA) equivalent, 905350. Standalone f = +20.625740 mm.**

L14 forms G2b and is the strongest positive component in the rear macro-group. The patent requires $f_2/f_{2b}>2.5$ and $\Delta P_{gF}>-0.001$ for the strongest positive lens in G2. The authored array gives a ratio of 2.62879 and L14 has $\Delta P_{gF}=-0.0005$.

Its high index and symmetric biconvex form concentrate positive power near the center of G2, between two net-negative subassemblies.

### L15 — Cemented Net-Negative Rear Doublet

#### L15f — Low-Dispersion Positive Biconvex Element

**nd = 1.55032, νd = 75.50. Glass: FCD705 (HOYA) equivalent, 550755. Standalone f = +33.532749 mm.**

L15f carries the largest positive anomalous-partial-dispersion value in the prescription, $\Delta P_{gF}=+0.0277$. Its high Abbe number and large positive deviation make it the clearest low-dispersion chromatic corrector in the rear group.

#### L15r — Negative Biconcave Element

**nd = 1.72047, νd = 34.71. Glass: S-NBH8 (OHARA) equivalent, 720347. Standalone f = −23.541155 mm.**

L15r repeats the L13f glass class and its $\Delta P_{gF}=-0.0025$ sign. Cementing it to L15f produces a large partial-dispersion contrast while making the pair net negative.

The L15 cemented EFL is −80.346997 mm. It therefore contributes negative rear-section power despite the positive component's lower dispersion and positive standalone power.

### L16 — Weak Negative Biconcave Element, Double-Sided Asphere

**nd = 1.80610, νd = 40.73. Glass: Unmatched 806407 class; HIKARI Q-LASF03S line-index proxy, with no joint $n_d$/$ν_d$/$ΔP_{gF}$ catalog match. Standalone f = −129.492431 mm.**

L16 closes G2c and the complete prescription. Its paraxial power is weak, but its position near the image plane gives its two aspherical surfaces substantial leverage over field-dependent and higher-order residuals. Surface 20A has a large positive conic constant and the greatest verified departure from the same-radius sphere in the model.

The patent gives $n_d$, $\nu_d$, and $\Delta P_{gF}=-0.0056$ but no glass vendor. No public candidate found in the audited catalogs matches all three quantities jointly. The data therefore retains an explicit unmatched 806407-class label, while `nC`, `nF`, and `ng` use Q-LASF03S only as a disclosed spectral proxy rather than as proof of the production melt.

## Glass Identification and Selection

The patent publishes $n_d$, $\nu_d$, and $\Delta P_{gF}$ for every element but names no vendor. The data file therefore uses qualified catalog equivalents or class labels. The stored patent constants remain authoritative; catalog line indices are derived results, with a disclosed proxy only for L16.

| Element(s) | Catalog-equivalent label | nd | νd | ΔPgF | Function in the prescription |
|---|---|---:|---:|---:|---|
| L9 | H-K9LGT equivalent | 1.51680 | 64.20 | +0.0031 | Front aspheric crown meniscus |
| L10f | S-LAH89 equivalent | 1.85150 | 40.78 | −0.0054 | High-index positive member of G1b |
| L10r | S-NBH58 equivalent | 1.78880 | 28.43 | +0.0037 | Low-Abbe negative member of G1b |
| L11 | TAFD55 equivalent | 2.00100 | 29.13 | +0.0036 | Strong compact positive power |
| L12f | TAFD37A equivalent | 1.90043 | 37.37 | −0.0044 | Positive member of pre-stop doublet |
| L12r | NBFD25 equivalent | 1.85451 | 25.15 | +0.0072 | Negative chromatic partner in L12 |
| L13f, L15r | S-NBH8 equivalent | 1.72047 | 34.71 | −0.0025 | Negative anomalous-dispersion partners |
| L13r | J-PSKH8 equivalent | 1.62846 | 59.17 | +0.0139 | Positive anomalous-dispersion member of L13 |
| L14 | S-LAH93 equivalent | 1.90525 | 35.04 | −0.0005 | Principal positive G2b singlet |
| L15f | FCD705 equivalent | 1.55032 | 75.50 | +0.0277 | Strong positive low-dispersion corrector |
| L16 | Unmatched 806407 class; Q-LASF03S line-index proxy | 1.80610 | 40.73 | −0.0056 | Terminal aspheric negative element |

All twelve elements carry numeric $\Delta P_{gF}$ because the patent prints those values. Those numerical fields are separate from the `apd` classification: Cosina's production section marks six positions, which map by the matching Example 2 topology to L10r, L12r, L13f, L13r, L15f, and L15r. The data records those six flags as `inferred`, because the patent-to-production correlation is strong but not manufacturer-confirmed. The other six elements remain unflagged even though their patent $\Delta P_{gF}$ values are retained.

## Focus Mechanism

The patent describes a two-unit floating focus system. G1 and G2 both move toward the object during close focusing, but G2 moves farther. The data status is **PUBLISHED**: it transcribes the two endpoint gaps without solving or substituting a reconstructed state.

| Variable spacing | Infinity | Published close | Change |
|---|---:|---:|---:|
| D11, STO to S12 | 3.83 mm | 3.36 mm | −0.47 mm |
| D21, S21A to image plane | 18.21 mm | 20.28 mm | +2.07 mm |

These changes encode approximately 1.60 mm forward travel for G1 and 2.07 mm for G2, compared with the patent summary values $X_1=1.61$ mm and $X_2=2.08$ mm. The 0.01 mm differences are consistent with the displayed precision of the spacing table.

The printed endpoint is internally inconsistent at first order. With D0 = 428.00 mm, D11 = 3.36 mm, and D21 = 20.28 mm, the object-to-image matrix has $B=+6.097174$ mm rather than zero. Holding the two internal gaps would require D0 = 539.855548 mm; holding D0 and D11 would require D21 = 20.700829 mm. Neither diagnostic replacement is adopted. The analysis therefore treats the movement as published kinematics, not as a validated exact paraxial conjugate.

No focus reconstruction extends Example 2 to the 0.28 m endpoints of the E- or Z-mount production versions.

## Aspherical Surfaces

The asphere equation uses the standard conic constant $K$:

$$
z(h)=\frac{ch^2}{1+\sqrt{1-(1+K)c^2h^2}}+A_4h^4+A_6h^6+A_8h^8+A_{10}h^{10}+A_{12}h^{12}+A_{14}h^{14},
\qquad c=1/R.
$$

No conic conversion is applied. The prescription is unscaled, so the patent radii and coefficients are stored directly and no $A_p/s^{p-1}$ transformation is required.

| Surface | K | A4 | A6 | A8 | A10 | A12 | A14 |
|---|---:|---:|---:|---:|---:|---:|---:|
| 1A | 0 | 1.5630E−05 | −2.0081E−07 | 1.7924E−09 | −8.9064E−12 | 1.8450E−14 | 0 |
| 2A | 1.111 | −2.4287E−06 | −3.6870E−07 | 2.3518E−09 | −1.5366E−11 | 0 | 0 |
| 20A | 52.843 | −3.2860E−05 | 0 | 0 | 0 | 0 | 0 |
| 21A | 0 | 4.4019E−06 | 4.5548E−08 | −6.0419E−11 | 1.0810E−12 | −4.5187E−15 | 0 |

The patent gives no clear apertures. The stored semi-diameters are model-derived from the F/2.06 pupil model, meridional ray envelopes, Fig. 3, and the current geometry rules. At those verified semi-diameters, the departure from the same-radius sphere is:

| Surface | Verified semi-diameter | Departure from sphere |
|---|---:|---:|
| 1A | 11.50 mm | +0.095582 mm |
| 2A | 9.66 mm | +0.067686 mm |
| 20A | 12.00 mm | −0.807967 mm |
| 21A | 12.00 mm | +0.227948 mm |

The front pair shapes the wide-angle entrance bundle and is the limiting region for full-field vignetting. The rear pair, especially 20A, provides stronger higher-order correction near the image plane. These functional descriptions are modeling interpretations; the patent publishes the surfaces and coefficients but does not assign a separate aberration term to each coefficient.

## Chromatic Correction Strategy

The production lens is marketed as APO-LANTHAR, and the manufacturer explicitly describes an apochromatic design. In this model, the chromatic discussion is supported by more than the name: every element stores patent $\Delta P_{gF}$, and the catalog-resolved elements carry `nC`, `nF`, and `ng` line indices.

The rear half contains the clearest complementary pairings. L13 combines negative S-NBH8-class glass at $\Delta P_{gF}=-0.0025$ with positive J-PSKH8-class glass at +0.0139. L15 combines FCD705-class low-dispersion glass at +0.0277 with the same −0.0025 negative partner. These pairs place opposite-signed anomalous partial dispersion in cemented units that remain net negative, allowing chromatic power to be adjusted without requiring those units to become positive.

The front half supplements this with the −0.0054 L10f glass, the +0.0037 L10r partner, and the −0.0044/+0.0072 L12 pair. The patent's conditions do not merely call for low Abbe number or high index; they select signed $\Delta P_{gF}$ regions in G2 and constrain the power of the L13 and L14 sections. This supports describing the design as an anomalous-partial-dispersion correction system rather than inferring apochromatism from Abbe numbers alone.

The analysis does not claim that the catalog-equivalent vendor names are the actual production melts. The chromatic model is anchored to the patent constants, with catalog line data used where the equivalence is defensible and a disclosed proxy used only for L16.

## Conditional Expressions

The following values were recomputed from the authored TypeScript arrays and stored element constants, rather than copied from the patent summary table. All nineteen conditions pass.

| No. | Condition | Authored-model value | Result |
|---:|---|---:|:---:|
| 1 | $X_2-X_1>0$ | 0.4700 | Pass |
| 2 | $2<TL/f<2.5$ | 2.44627 | Pass |
| 3 | $1<f_1/f_2<1.14$ | 1.07695 | Pass |
| 4 | $f_1/f_{1ab}<-1.95$ | −1.95938 | Pass |
| 5 | $TL_{ab}/TL\leq0.15$ | 0.146947 | Pass |
| 6 | $n_{d1bp}>1.76$ | 1.85150 | Pass |
| 7 | $1.86>n_{d1bm}>1.76$ | 1.78880 | Pass |
| 8 | $\nu_{d1bp}>29$ | 40.78 | Pass |
| 9 | $30\geq\nu_{d1bm}>28.4$ | 28.43 | Pass |
| 10 | $\Delta P_{gF2p}>0.013$ | +0.0139 | Pass |
| 11 | $n_{d2p}>1.62$ | 1.62846 | Pass |
| 12 | $n_{d2m}<1.73$ | 1.72047 | Pass |
| 13 | $\Delta P_{gF2m}<-0.002$ | −0.0025 | Pass |
| 14 | $-55<f_{2abal}<0$ | −47.89453 mm | Pass |
| 15 | $f_{2abal}/f_{2abalm}>3.75$ | 3.77918 | Pass |
| 16 | $\Delta P_{gF2abalp}>0.013$ | +0.0139 | Pass |
| 17 | $\Delta P_{gF2abalm}<-0.002$ | −0.0025 | Pass |
| 18 | $f_2/f_{2b}>2.5$ | 2.62879 | Pass |
| 19 | $\Delta P_{gF2bp}>-0.001$ | −0.0005 | Pass |

The recomputed ratios differ slightly from the patent's Table 5 ratios because the raw prescription produces EFL and subgroup powers that do not exactly reproduce every printed summary value. The pass/fail conclusions are unchanged.

## Verification Summary

The final data file was checked against the patent tables and independently traced at the d line. The height/reduced-angle and conventional ABCD matrices agree to $3.55\times10^{-15}$, and the air-to-air determinant is 1.000000.

| Quantity | Authored-array result | Patent comparator |
|---|---:|---:|
| EFL | 29.126006 mm | 28.84 mm summary value |
| BFL from S21A | 18.582765 mm | D21 = 18.21 mm |
| S1-to-image track | 71.250000 mm | TL = 71.19 mm |
| Modeled f-number | 2.060000 | F/2.06 |
| Petzval sum $\sum\phi/(nn')$ | 0.002241700 mm⁻¹ | not tabulated |
| Petzval radius | 446.089996 mm | not tabulated |

The discrepancies between Table 5 and the raw prescription are retained rather than silently reconciled. A source-precision sensitivity analysis does not bring the patent's 28.84 mm EFL or 18.21 mm BFL inside the range produced by the printed prescription.

The stop diameter is not published. The authored `STO.sd` of 7.914161 mm is an inference selected to make the 29.126006 mm model operate at F/2.06; it is not a measured production aperture. The remaining semi-diameters are also model-derived. Their relative sequence was measured from Figure 3 and the final values pass the repository's edge-thickness, rim-slope, conic-domain, shared-gap, and image-circle-floor checks at both focus states.

At the full 37.02° half field, the verified sampled pupil range is approximately −0.40 to +0.70. The front aspheric meniscus limits negative-side pupil samples, while L14 limits the most positive samples. This is a model-containment result, not a manufacturer vignetting specification.

Two patent text errors are interpreted without changing numerical data. The Example 2 definitions on p. 14 copy forward L5/L5f from Example 1; the surrounding Example 2 description and ¶0065 require L13/L13f. Paragraph ¶0048 also refers to optical system 100 where the context requires system 200. No radius, spacing, index, Abbe number, $\Delta P_{gF}$ value, or asphere coefficient is altered.

No uniform scale was applied, no plate was omitted and replaced by an air-equivalent gap, and no inactive optical surface was removed from Example 2.

## Sources

- Cosina Co., Ltd., **JP 2026-98935 A**, *光学レンズ系*, Example 2, especially Fig. 3, Tables 5–8, and ¶0047–¶0071.
- Cosina, [VOIGTLÄNDER APO-LANTHAR 28mm F2 Aspherical VM product page](https://www.cosina.co.jp/voigtlander/en/vm-mount/apo-lanthar-28mm-f2-aspherical/).
- Cosina, [Japanese VM product page and release specification](https://www.cosina.co.jp/voigtlander/vm-mount/apo-lanthar-28mm-f2-aspherical/).
- Cosina, [Sony E-mount product page](https://www.cosina.co.jp/voigtlander/en/e-mount/apo-lanthar-28mm-f2-aspherical/) and [Nikon Z-mount product page](https://www.cosina.co.jp/voigtlander/en/z-mount/apo-lanthar-28mm-f2-aspherical/), consulted only to delimit the VM-specific correlation.
- OHARA, [Optical-glass catalog download](https://www.ohara-inc.co.jp/en/product/catalog/).
- HOYA Optics Division, [Optical-glass data and characteristic diagrams](https://www.hoya-opticalworld.com/english/).
- HIKARI GLASS, [Optical Glass Catalog](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf) and [J-PSKH8 data sheet](https://www.hikari-g.co.jp/optical_glass/general_optical_glass/document/PSK/J-PSKH8.pdf).
- CDGM, [H-K9LGT data sheet](https://www.cdgmgd.com/webapp/pdf/H-K9LGT.pdf).
