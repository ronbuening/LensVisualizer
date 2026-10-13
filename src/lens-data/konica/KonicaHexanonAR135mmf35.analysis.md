## Patent Reference and Design Identification

**Patent:** JPS54-55423A\
**Application Number:** JP52-121371 / JP12137177A\
**Filed:** 1977-10-12\
**Published:** 1979-05-02\
**Inventor:** Toshiko Shimokura\
**Applicant:** Konishiroku Photo Industry Co., Ltd.\
**Title:** 望遠写真レンズ (*Telephoto photographic lens*)\
**Embodiment analyzed:** Example 1

The prescription is JPS54-55423A Example 1, correlated here with the **KONICA HEXANON AR 135mm f/3.5**. The patent itself does not name the production lens, so this identification is a production-correlation inference rather than a manufacturer-confirmed patent mapping. The native JPO front page identifies the historical applicant as Konishiroku Photo Industry Co., Ltd.; later patent databases may normalize ownership to a successor entity.

Several source facts converge on the selected correlation. Example 1 is a four-element, four-group objective normalized to $f=1$, with $F=3.5$ and a full field of $18°$. Uniform scaling by $s=135$ places its computed paraxial focal length at 134.988819 mm. Konica's Autoreflex T4 system manual lists a 135mm f/3.5 telephoto with an 18° angle of view and 4-group/4-element construction for the 24 × 36 mm Konica bayonet system. The patent's outer aberration-chart image height, $Y=0.1602f$, becomes 21.627 mm after the same scale, corresponding to a 43.254 mm image-circle diameter and therefore to the 35 mm still-frame diagonal. These are mutually consistent optical and format markers, but they do not turn the patent into an explicit product announcement.

The patent prescription is dimensionless with $f=1$. The data file applies a uniform scale of ×135 to all dimensional prescription quantities. There are no aspherical surfaces, so no aspheric-coefficient transformation is required. The marketed focal length remains 135 mm, while the independently recomputed design focal length is 134.988819 mm.

## Optical Architecture

The patent describes the design as an improvement of the four-group, four-element **Ernostar-type telephoto**. Its power sequence is positive–positive–negative–positive: two positive menisci form the strong front section, a compact high-index negative meniscus supplies the principal negative power, and a positive rear meniscus reconverges the beam after the long rear separation.

This distribution is telephoto in the strict geometric sense. The infinity-focus S1-to-image track is 120.833990 mm, giving `track/EFL = 0.895140732`, below unity. The design is not retrofocus: its 59.152490 mm back focal distance is well below the 134.988819 mm EFL. The patent itself prints $T=0.895f$ and $f_B=0.438f$; the small differences from the recomputed values arise from the rounded Example 1 table.

The first two positive elements are close together and act as a much stronger compound front section than either singlet alone. Including their real air gap, L1+L2 has a computed focal length of 49.035936 mm, or $0.363229f$. Adding the negative L3 weakens the cumulative front-three-lens block to 294.365922 mm, or $2.180488f$. These are in-situ cumulative-group values; none of the four elements is cemented.

The patent places the aperture stop $0.067f$ behind surface 6. The model therefore splits the published $d_6=0.2296f$ air space at that axial station. Stop position is a source fact; stop diameter is not. To reproduce the modeled f/3.5 entrance pupil, the data file uses an inferred physical stop semi-diameter of 10.165538 mm.

The patent does not publish clear-aperture semi-diameters. The modeled glass semi-diameters—21.3 mm for L1, 20.1 mm for L2, 13.0 mm for L3, and 13.2 mm for L4—are therefore authoring inferences constrained by the patent optical section, ray containment, and the production lens's 55 mm filter specification. They are not source prescription values. The 2026-09-05 Fig. 1 review enlarges L4 from 11.0 to
13.2 mm; its optical rim measures about 13.2 mm when scaled by the source axial span.

## Element-by-Element Analysis

### L1 — Positive Meniscus

`nd = 1.51633, νd = 64.1. Glass: 516641 — crown class (vendor unresolved). Standalone f = +101.545031 mm.`

L1 is the first positive collector and carries the strongest object-side curvature of the front pair. Its standalone focal length describes the isolated singlet in air; it should not be confused with the much stronger L1+L2 cumulative front-section power. The patent constrains the total axial build through L3 and separately constrains the front pair's combined focal length, indicating that compactness is achieved through the paired front positives rather than by an unusually strong single front element.

The high Abbe number is source data. It places L1 in the low-dispersion crown side of the patent's glass split, but the data do not contain measured line indices or an identified production-glass identity, so no anomalous-dispersion or apochromatic behavior is assigned to it.

### L2 — Positive Meniscus

`nd = 1.51633, νd = 64.1. Glass: 516641 — crown class (vendor unresolved). Standalone f = +91.768928 mm.`

L2 repeats the L1 refractive-index and Abbe coordinate but is the stronger singlet of the pair. Together L1 and L2 compute to $f_{12}=0.363229f$, inside the patent's required $0.33f<f_{12}<0.39f$ interval. The patent's discussion ties this front-section power and compact axial spacing to achieving a telephoto ratio below 0.9 without allowing the front assembly to become excessively thick.

Because L1 and L2 are separated by air, their 49.035936 mm cumulative focal length is an in-situ two-element result, not a cemented-doublet power and not the arithmetic combination of their standalone focal lengths.

### L3 — Negative Meniscus

`nd = 1.76180, νd = 27.1. Glass: 762271 — dense-flint class (vendor unresolved). Standalone f = −32.814296 mm.`

L3 supplies the dominant negative power of the telephoto construction. It changes the strongly positive L1+L2 front section into a weakly positive three-lens cumulative block: $f_{123}=2.180488f$ from the rounded prescription. The patent explicitly constrains this value to $2.0f<f_{123}<2.6f$ and states that the limit is associated with balancing the telephoto effect against coma and distortion correction.

Its index and dispersion coordinates are likewise bounded by the patent: $n_3>1.72$ and $ν_3<30$. The selected Example 1 values, 1.76180 and 27.1, satisfy both. These constraints establish a high-index, low-Abbe negative member, but they do not identify a glass manufacturer.

### L4 — Positive Meniscus

`nd = 1.80518, νd = 25.4. Glass: 805254 — dense-flint class (vendor unresolved). Standalone f = +113.290650 mm.`

L4 is the separated rear positive meniscus. Its standalone focal length computes to $0.839190f$, closely matching the patent's printed $0.839f$. The long air space ahead of L4 allows the rear positive element to reconverge the beam while the overall physical track remains shorter than the focal length.

The lens is unusual only in the limited sense that this positive rear element also has a low Abbe number. That is a direct prescription fact, not evidence of anomalous partial dispersion. The patent requires $ν_4<30$ as part of its chromatic-correction conditions; the final data retain only the published d-line index and Abbe number.

## Glass Identification and Selection

The patent names no glass vendor. The final data therefore preserve coordinate-based class labels rather than promoting modern catalog equivalents to source identities.

| Element(s) | Stored glass annotation | nd | νd | Source / interpretation |
|---|---|---:|---:|---|
| L1, L2 | `516641 — crown class (vendor unresolved)` | 1.51633 | 64.1 | Patent d-line coordinates; low-dispersion crown class |
| L3 | `762271 — dense-flint class (vendor unresolved)` | 1.76180 | 27.1 | Patent d-line coordinates; high-index, low-Abbe negative member |
| L4 | `805254 — dense-flint class (vendor unresolved)` | 1.80518 | 25.4 | Patent d-line coordinates; high-index, low-Abbe rear positive member |

The six-digit labels are coordinate descriptions derived from the stored `nd/νd` pairs, not proof of a particular supplier. Independent catalog comparison finds close OHARA coordinate-family matches: code 516641 corresponds to S-BSL7 (`nd = 1.51633`, `νd = 64.14`), legacy code 762271 to PBH25 (`nd = 1.76180`, `νd = 27.1`), and code 805254 to S-TIH6 (`nd = 1.80518`, `νd = 25.42`). Because the patent names no glass vendor, the data retain unresolved-vendor class annotations while the runtime resolves compatible coefficient curves for all four elements. These
curves approximate spectral behavior without identifying the historical glass supplier. The final element records intentionally omit `nC`, `nF`, `ng`, and `dPgF`. Consequently, any discussion of chromatic behavior is limited to the patent's Abbe-number strategy; the model does not support an APO or anomalous-partial-dispersion claim.

The patent's own conditions divide the glass palette into $ν_1,ν_2>60$ for the two front positive elements and $ν_3,ν_4<30$ for the rear negative/positive pair, while separately requiring the negative L3 index to exceed 1.72. This is a deliberate crown-versus-dense-flint dispersion distribution. The exact secondary-spectrum behavior cannot be reconstructed from Abbe numbers alone.

## Focus Mechanism

The data model contains **no reconstructed focus state**. JPS54-55423A Example 1 publishes the infinity prescription and does not provide a focus-spacing table, group travel, magnification series, or mechanical focusing kinematics. Accordingly, `var` is empty and the model status is `NO_INTERNAL_RECONSTRUCTION`.

Konica's product manual gives a 1.5 m closest focusing distance for the 135mm f/3.5. The data file stores that value as product metadata only. It is not converted into an optical object distance and is not used to invent a unit-focus or internal-focus movement. The analysis therefore describes only the infinity optical state.

## Conditional Expressions

The four families of inequalities are central to the patent's design argument. Recalculation from the final scaled prescription, expressed back in the patent's normalized units, gives the following results.

| Patent condition | Final value | Result |
|---|---:|---|
| $0.19 < d_1+d_2+d_3+d_4+d_5 < 0.22$ | 0.2051 | satisfied |
| $0.10 < d_2+d_4 < 0.12$ | 0.1089 | satisfied |
| $0.33 < f_{12} < 0.39$ | 0.363229 | satisfied |
| $(n_1+n_2)/2 < 1.55$ | 1.51633 | satisfied |
| $n_3 > 1.72$ | 1.76180 | satisfied |
| $2.0 < f_{123} < 2.6$ | 2.180488 | satisfied |
| $0.22 < d_6 < 0.25$ | 0.2296 | satisfied |
| $0.35 < R_7 < 0.60$ | 0.5132 | satisfied |
| $ν_1>60$ | 64.1 | satisfied |
| $ν_2>60$ | 64.1 | satisfied |
| $ν_3<30$ | 27.1 | satisfied |
| $ν_4<30$ | 25.4 | satisfied |

The patent uses these limits to control compactness, telephoto ratio, aberration correction, and the distribution of refractive power and dispersion. The final prescription satisfies every published inequality without altering a patent radius, thickness, index, or Abbe number.

## Verification Summary

Independent reduced-angle tracing and an ABCD calculation from the final TypeScript arrays give an EFL of 134.988819 mm, a back focal distance of 59.152490 mm, and an S1-to-image track of 120.833990 mm. The matrix determinant is 1.0 and the two first-order methods agree to machine precision.

The rounded patent table prints $f_B=0.438f$ and $T=0.895f$, corresponding after ×135 scaling to 59.130 mm and 120.825 mm. The final data file does not alter the published optical prescription to force those rounded numbers. Instead, its last air spacing is 59.152490 mm so that the modeled image plane closes at the paraxial infinity focus of the rounded surface table.

The modeled physical stop semi-diameter of 10.165538 mm produces an entrance-pupil diameter of 38.568234 mm and a computed f-number of 3.50000000001. This agreement is a model closure, not an independent source measurement, because the stop diameter was solved from the patent's f/3.5 design value.

Surface-by-surface Petzval evaluation using $\phi/(nn')$ sums to 0.135098 in normalized units, compared with the patent Seidel table's 0.1347. The residual is consistent with the patent's rounded prescription and is retained rather than "corrected." The more noticeable cumulative-group difference is likewise preserved: the rounded table gives $f_{123}=2.180488f$ versus the printed $2.17f$.

A source-precision sensitivity check supports treating both discrepancies as rounding effects. Allowing each printed input used by the respective calculation to vary by half of its last displayed digit gives $2.16343f \le f_{123} \le 2.19782f$ and $0.133767 \le \Sigma P \le 0.136429$; the patent's printed $2.17f$ and $0.1347$ both fall inside those envelopes.

All surfaces are spherical. No cover glass, filter, dummy optical plane, or mechanical component has been introduced into the sequential optical model. The only added plane is `STO`, inserted at the stop position explicitly published by the patent.

## Sources

1. Japan Patent Office, **JPS54-55423A**, *望遠写真レンズ* (*Telephoto photographic lens*), published 1979-05-02. Example 1 prescription and focal quantities: p. 143; Seidel coefficients and stop position: p. 144; Example 1 optical section and aberration plots: p. 145. Google Patents family/metadata view: https://patents.google.com/patent/JPS5455423A/en
2. Konishiroku Photo Industry Co., Ltd., **Konica Autoreflex T4 instruction manual**, camera/mount and 24 × 36 mm format information on p. 3; interchangeable-lens table for the 135mm f/3.5 on p. 77. Archival scan: https://butkus.org/chinon/konica/konica_t4/konica_T4_multi-language.pdf
3. OHARA INC., current optical-glass tables for S-BSL7 (code 516641) and S-TIH6 (code 805254): https://www.ohara-inc.co.jp/en/product/01000/ ; archival OHARA optical-glass catalog for PBH25 (code 762271): https://wp.optics.arizona.edu/optomech/wp-content/uploads/sites/53/2016/10/Ohara_Glass_Catalog.pdf
4. Independent calculations from `KonicaHexanonAR135mmf35.data.ts`, using sequential reduced-angle tracing, ABCD reconstruction, surface-by-surface Petzval evaluation, pupil tracing, and geometry checks. Quantitative values in this analysis are taken from the verified prescription rather than from marketing specifications.
