## Patent Reference and Design Identification

**Patent:** JP1974-023892 (特公昭49-23892)\
**Filed:** 7 October 1970\
**Published:** 19 June 1974\
**Inventor:** Masamichi Kitagawa\
**Applicant:** Konishiroku Photo Industry Co., Ltd.\
**Title:** *Compact High-Performance Telephoto Lens* (小型高性能望遠レンズ)\
**Embodiment analyzed:** Example 1

The model transcribes Example 1 of JP1974-023892. The patent normalizes the numerical prescription to `f = 1.0` and gives `F 1:6.3`, `fB = 0.1736`, `T = 0.586`, and `f1,2 = f/3.86`; the prescription itself is printed on patent page 3. The LensVisualizer data applies a literal scale factor of `s = 300.000` to the patent radii and axial spacings, without renormalizing the rounded source values to force an exact 300 mm effective focal length.

The selected production correlation is the KONICA FL-HEXANON AR 300mm f/6.3. Surviving Konica/Berkey literature describes the contemporary 300mm f/6.3 Automatic Telephoto Hexanon Fluorite as a 300 mm, f/6.3 lens with nine elements in five groups, an 8° angle of view, a 4.5 m minimum focus from the film plane, and plural laboratory-grown crystal-fluorite elements. Example 1 has the same nine-element/five-group structure, the same nominal focal length and aperture after scaling, an 8.25° patent field, and two identical front media with `nd = 1.43389` and `νd = 94.7`. These converging features establish the fixed correlation used here; the manufacturer literature does not itself identify JP1974-023892 as the source patent.

The production brochure also describes a separate protective optical flat for the fluorite. That plate is not present in the selected patent prescription and is therefore excluded from the active optical model rather than inserted as an additional element.

## Optical Architecture

Example 1 is an all-spherical, five-group telephoto design with nine glass elements. In front-to-rear order the groups are two separate positive menisci, a cemented negative-positive-negative triplet, a cemented negative-positive doublet, and a cemented positive-negative doublet. The isolated group powers therefore follow a `+ + − − +` sequence:

| Group | Elements | Isolated group EFL | Interpretation |
|---|---|---:|---|
| G1 | L1 | +197.239 mm | Positive front collector |
| G2 | L2 | +126.334 mm | Positive front collector |
| G3 | L3–L5 | −108.803 mm | Net-negative cemented triplet |
| G4 | L6–L7 | −44.519 mm | Strong net-negative rear doublet |
| G5 | L8–L9 | +154.229 mm | Net-positive final doublet |

These focal lengths are isolated-air group quantities, not in-situ incremental powers. The complete system is substantially more compact than its focal length: the independently traced effective focal length is 299.704746 mm, while the best-focus front-vertex-to-image track is 175.762347 mm, giving `TL/EFL = 0.586452`. This satisfies the project definition of a telephoto system. Its best-focus back focal distance is 51.982347 mm, or `BFD/EFL = 0.173445`, so it is not a retrofocus design.

A 65.7 mm air separation lies between the central triplet and the first rear doublet. Together with the strong positive front pair and the negative G3/G4 power, this spacing is a principal part of the telephoto power distribution. The final G5 doublet returns the last isolated group to positive net power; the rear assembly should therefore not be reduced conceptually to a single negative telephoto group.

The patent's Seidel calculation places the aperture stop at the tangent plane of the first optical surface. The data model retains that axial location exactly. The physical stop diameter is not published and is treated separately as a modeling inference.

## Element-by-Element Analysis

### L1 and L2 — Separated Positive Fluorite Menisci

**L1 — Positive meniscus:** `nd = 1.43389`, `νd = 94.7`. Glass: Fluorite (CaF₂ crystal; supplier unspecified). Standalone `f = +197.239 mm`.

**L2 — Positive meniscus:** `nd = 1.43389`, `νd = 94.7`. Glass: Fluorite (CaF₂ crystal; supplier unspecified). Standalone `f = +126.334 mm`.

L1 and L2 are air-separated positive menisci at the front of the lens. Their combined isolated focal length, including the 0.3 mm air separation, is 77.720248 mm. In normalized patent units this is `f1,2/f = 0.259067495`, reproducing the stated `f/3.86` front-pair condition to the precision expected from the rounded source prescription.

The patent constrains both front indices to less than 1.55 and discusses fluorite or an equivalently unusual low-dispersion material for this front section. In the selected production correlation, the manufacturer's use of plural crystal-fluorite elements supplies the material identification adopted in the data file. The identification is not used to infer unpublished line indices or a numerical anomalous-partial-dispersion term.

### L3–L5 — Cemented Negative–Positive–Negative Triplet

**L3 — Negative meniscus:** `nd = 1.80440`, `νd = 39.6`. Glass: 804396 class; S-LAH63Q coefficient proxy. Standalone `f = −38.587 mm`.

**L4 — Biconvex positive:** `nd = 1.51118`, `νd = 50.9`. Glass: 511509 class; KF8 coefficient proxy. Standalone `f = +30.048 mm`.

**L5 — Biconcave negative:** `nd = 1.49831`, `νd = 65.0`. Glass: 498650 class; BSL3 coefficient proxy. Standalone `f = −51.299 mm`.

The central cemented triplet combines two negative members around a strong positive biconvex center element. Considered as an isolated cemented group, G3 remains negative with `f = −108.803 mm`; the individual standalone powers should not be confused with that net group result or with the group's in-situ contribution to the complete lens.

The patent gives explicit index and Abbe-number constraints across this triplet: `n3 − n4 > 0.1`, `5 < ν4 − ν3 < 20`, `0 < n4 − n5 < 0.05`, and `0 < ν5 − ν4 < 20`. Those inequalities make the material relationships part of the patented design rather than incidental catalog substitutions. The current glass annotations therefore preserve optical classes and uncertainty instead of assigning unsupported historical suppliers.

### L6 and L7 — First Rear Cemented Doublet

**L6 — Biconcave negative:** `nd = 1.78650`, `νd = 50.1`. Glass: 787501 class; YGH52 coefficient proxy. Standalone `f = −29.419 mm`.

**L7 — Biconvex positive:** `nd = 1.59270`, `νd = 35.4`. Glass: 593354 class; FF5 coefficient proxy. Standalone `f = +88.274 mm`.

L6 and L7 form a negative-positive cemented doublet after the design's largest air space. Its isolated net focal length is `−44.519 mm`, making G4 the strongest net-negative group in the isolated group comparison. Existing OHARA YGH52 closely reproduces L6's patent coordinates and supplies a qualified coefficient proxy; this does not establish the material actually used for the 1970 application or the production lens.

### L8 and L9 — Final Positive Cemented Doublet

**L8 — Biconvex positive:** `nd = 1.59270`, `νd = 35.4`. Glass: 593354 class; FF5 coefficient proxy. Standalone `f = +30.333 mm`.

**L9 — Negative meniscus:** `nd = 1.81554`, `νd = 44.5`. Glass: 816445 class; HOYA TAFD10 coefficient proxy. Standalone `f = −36.005 mm`.

The last cemented pair combines a strong positive biconvex L8 with a negative meniscus L9. Despite the opposing standalone powers, the isolated doublet is positive overall, with `f = +154.229 mm`. This final positive group distinguishes the actual five-group power sequence from the simplified positive-front/negative-rear schematic often used to explain telephoto lenses.

## Glass Identification and Selection

The validated data deliberately separates source coordinates from supplier attribution. Only the front pair has a production-source material identification; the remaining glasses retain their patent coordinate classes while naming the selected catalog-equivalent coefficient curves as qualified proxies.

| Elements | Stored glass identification | `nd` | `νd` | Status |
|---|---|---:|---:|---|
| L1, L2 | Fluorite (CaF₂ crystal; supplier unspecified) | 1.43389 | 94.7 | Material class supported by production literature; APD tag inferred |
| L3 | 804396 class; S-LAH63Q proxy | 1.80440 | 39.6 | Production supplier unspecified |
| L4 | 511509 class; KF8 proxy | 1.51118 | 50.9 | Production supplier unspecified |
| L5 | 498650 class; BSL3 proxy | 1.49831 | 65.0 | Production supplier unspecified |
| L6 | 787501 class; YGH52 coefficient proxy | 1.78650 | 50.1 | Production supplier unspecified |
| L7, L8 | 593354 class; FF5 proxy | 1.59270 | 35.4 | Production supplier unspecified |
| L9 | 816445 class; TAFD10 coefficient proxy | 1.81554 | 44.5 | Production supplier unspecified |

The patent supplies d-line refractive indices and Abbe numbers but no per-element `nC`, `nF`, `ng`, `PgF`, or `dPgF`. Accordingly, the data file does not encode those spectral fields. CaF₂, S-LAH63Q, KF8, BSL3, YGH52, FF5, and the newly cataloged first-party HOYA TAFD10 row provide coordinate-compatible wavelength curves for all nine elements while retaining the patent coordinates and supplier uncertainty. L1 and L2 carry `apd: "inferred"` because the CaF₂ coordinate and Konica's two-fluorite production literature independently agree; that annotation is not a patent-published `dPgF` value. The design is not labeled apochromatic.

## Focus Mechanism

The selected patent publishes only the infinity prescription. It gives no close-focus spacing table, object-distance sequence, magnification sequence, or mechanical movement law from which a unique internal focus model could be solved. The validated data therefore retains `NO_INTERNAL_RECONSTRUCTION`, with empty focus `var` data.

Manufacturer literature gives a minimum focus of 4.5 m measured from the film plane. That value is stored as product metadata only. It does not identify which group moves, so no unit-focus, inner-focus, rear-focus, or floating-focus mechanism is assigned to the optical model. The 4.5 m endpoint should consequently not be interpreted as a traced LensVisualizer focus state.

## Chromatic Correction Strategy

The chromatic strategy is most explicit in the front pair and central triplet. The patent uses two very-low-index, very-high-Abbe front elements in Example 1 and constrains `n1` and `n2` below 1.55. Its text permits fluorite or a material of similar anomalous-dispersion character in this role; the selected production correlation specifically identifies crystal fluorite. The central triplet then uses prescribed index and Abbe separations between L3, L4, and L5, giving the designer independent refractive-power and dispersion contrasts within one cemented group.

This is sufficient to describe an intentional chromatic-correction strategy, but not to claim APO behavior. No C-, F-, or g-line indices or numerical partial-dispersion deviations are available for the patent melts, and the supplier identities of most elements remain unresolved.

## Conditional Expressions

The eight conditions stated by the patent all remain satisfied after uniform scaling because the dimensional inequalities are normalized to `f` and the refractive data are unchanged.

| Condition | Example 1 value | Result |
|---|---:|---|
| `f/4.2 < f1,2 < f/3.0` | `f1,2/f = 0.259067495` | PASS |
| `n1, n2 < 1.55` | `1.43389`, `1.43389` | PASS |
| `n3 − n4 > 0.1` | `0.29322` | PASS |
| `0.05f < r6 < 0.2f` | `r6/f = 0.10102` | PASS |
| `5 < ν4 − ν3 < 20` | `11.3` | PASS |
| `0 < n4 − n5 < 0.05` | `0.01287` | PASS |
| `0.05f < |r7| < 0.2f`, `r7 < 0` | `|r7|/f = 0.088`, negative radius | PASS |
| `0 < ν5 − ν4 < 20` | `14.1` | PASS |

## Verification Summary

The LensVisualizer prescription uses a literal `s = 300.000` scaling of the patent radii and spacings. The rounded source data trace to an effective focal length of 299.704746 mm rather than exactly 300 mm; the latter remains the marketed focal length. The data also retains the patent's published `fB = 0.1736` as a 52.080 mm final image-plane spacing, while independent paraxial focus is 51.982347 mm behind the last surface. The small difference is retained as source-rounding residue rather than removed by renormalization.

The modeled aperture stop is coincident with the patent-defined first-surface tangent plane. Its physical semi-diameter is not a source dimension: `23.786091 mm` is inferred from the traced EFL and the published f/6.3, giving a modeled f-number of 6.3. The data keeps `apertureMarketing` and `apertureDesign` as separate fields even though both evaluate to 6.3 for this reconstruction.

Surface semi-diameters are likewise modeling inferences because the patent does not tabulate them. They were constrained by the wide-open ray envelope, the patent's Figure 1 silhouette, positive edge thickness, actual spherical rim slope, shared-gap clearance, and off-axis containment. A 600-dpi Figure 1 review separates optical rims from the nearby `d9`–`d13` leader lines and sets both rear cemented cells to 13.2 mm; this corrects the oversized L6–L7 silhouette while preserving the near-equal rear-cell heights drawn in the patent. The resulting geometry passes the surface and image-circle audits; the standard rendered off-axis bundles remain clear.

The computed Petzval sum is `−1.88484911 × 10⁻⁴ mm⁻¹`, corresponding to a signed Petzval radius of approximately `−5305.46 mm`. Rescaled to the patent's normalized coordinates, the sum reproduces the printed Seidel-table value of approximately `−0.0565`. The front-pair condition, all eight patent inequalities, and the element standalone focal lengths also reproduce from the final TypeScript arrays.

No aspheric surface, zoom state, folded path, sensor plate, filter, or inactive dummy plane is included. The separate production protective flat is omitted because it is not part of Example 1. No patent numerical correction is incorporated, and no focus motion is invented beyond the published infinity state.

## Sources

1. **JP1974-023892 (特公昭49-23892)**, *小型高性能望遠レンズ* (*Compact High-Performance Telephoto Lens*), Masamichi Kitagawa / Konishiroku Photo Industry Co., Ltd.; especially pp. 1–3 for identification, conditions, and Example 1; p. 5 for the Seidel table; p. 6 for the infinity-object and first-surface stop reference; p. 7 for the Example 1 optical section; and p. 8 for the Example 1 aberration plots.
2. **Konica Division, Berkey Marketing Companies**, *Konica 300mm f6.3 Automatic Telephoto Hexanon Fluorite Lens*, Cat. No. 703-155, ©1980. Manufacturer literature scan: <https://www.pacificrimcamera.com/rl/02831/02831.pdf>.
3. **OHARA Optical Glass** catalog and equivalence resources: <https://www.ohara-inc.co.jp/en/product/optical/>.
4. **HOYA Optical Glass** data resources: <https://www.hoya-opticalworld.com/english/datadownload/index.html>.
5. **HIKARI Optical Glass** catalog resources: <https://www.hikari-g.co.jp/products/>.
6. **SCHOTT Optical Glass** catalog resources: <https://www.schott.com/en-gb/products/optical-glass-p1000267>.
7. **CDGM Optical Glass** catalog resources: <https://www.cdgmgd.com/>.
8. **Sumita Optical Glass** catalog resources: <https://www.sumita-opt.co.jp/en/products/optical/>.
