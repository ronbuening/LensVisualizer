## Patent Reference and Design Identification

**Patent:** US 4,493,536
**Application Number:** 362,031
**Priority:** 1981-03-31, JP 56-48684
**Filed:** 1982-03-25
**Granted:** 1985-01-15
**Inventor:** Yoshinobu Kudo
**Assignee:** Minolta Camera Co., Ltd.
**Title:** *Inverted Telephoto Type Lens System*
**Embodiment analyzed:** Example 1 / Embodiment 1

The prescription is taken from Example 1 of U.S. Patent 4,493,536. The patent publishes a five-component, five-element
wide-angle objective with normalized focal length `f = 100`, `FNo. = 2.8`, full field `2ω = 76°`, and `L.B. = 127.68`.
Table 1 gives ten spherical radii, nine axial spacings, and five refractive-index/Abbe coordinates; claim 4 repeats the
same Example 1 prescription. The source drawing and description specify left-to-right propagation and the same radius
sign convention used by the model. The visually verified value of `r7` is `-283.61` in both Table 1 and claim 4.
(US 4,493,536, PDF pp. 7–9, especially Table 1 on p. 8 and claim 4 on p. 9.)

The LensVisualizer model applies a uniform scale of `0.28` to the patent prescription. This maps the patent's normalized
`f = 100` design to the 28 mm production class without changing refractive indices, Abbe numbers, or dimensionless
conditions. The resulting Gaussian EFL is `28.0119039362 mm`; this computed design value is kept separate from the
marketed `28 mm` focal length.

The production correlation is strong but not manufacturer-confirmed for this exact optical formula. A primary Minolta
SLR-system brochure establishes the MD 28 mm f/2.8 product family, 75° marketed field, 0.3 m minimum focus, and Minolta SR
system context, but the brochure describes an earlier seven-element/seven-group version. Secondary sources identify the
later plain-MD/New-MD 28 mm f/2.8 as a five-element/five-group variant, matching the patent's element/group count,
aperture, focal-length class, field, and early-1980s timing. The attribution therefore remains a production correlation,
not proof that Minolta explicitly designated Example 1 as the production prescription.

## Optical Architecture

The patent calls the design an "inverted telephoto" system and describes it as a negative front component followed by a
convergent rear group. In the implemented model it is classified as a retrofocus objective: the rear-vertex BFD is
`35.7553855419 mm` while the Gaussian EFL is `28.0119039362 mm`, giving `BFD/EFL = 1.2764353906`. The complete first-surface
to image-plane track is `84.1337855419 mm`, or `TL/EFL = 3.0035011449`; under the project terminology it therefore does
not meet the ordinary telephoto criterion `TL/EFL < 1`.

All five elements are single, air-spaced spherical elements. L1 is a strong negative meniscus. L2 is a positive biconvex
singlet separated by a large air space from the compact rear set. L3 is a negative biconcave singlet, followed by positive
menisci L4 and L5. There are no cemented interfaces. Computed as standalone thick singlets, the powers alternate
negative-positive-negative-positive-positive, while the L2–L5 rear functional block is convergent with net EFL
`+29.7256879616 mm`.

The patent specifically links the high index of the first component to the wide field and long back focal distance, and
uses dimensional conditions involving the L3 thickness, rear spacing, and L2/L3 focal powers to control the balance of
spherical aberration, field curvature, distortion, and coma. These are source-stated design constraints rather than
aberration assignments inferred solely from element power. (US 4,493,536, PDF pp. 7–8, detailed description of
conditions (1)–(8).)

The patent does not publish a physical aperture-stop location. The model therefore inserts one neutral flat `STO` at the
midpoint of the scaled L2–L3 air gap (`d4`), `4.0628 mm` from either side of that gap. This location is a deterministic
modeling choice, not a source claim about the production iris.

## Element-by-Element Analysis

### L1 — Negative Meniscus

`nd = 1.78831`, `νd = 47.32`. Glass: `S-LAH64 class (coordinate-compatible spectral proxy; native d 1.78831/47.32; supplier/melt unproven)`. Standalone EFL:
`-40.1814674098 mm`.

L1 supplies the front negative power that establishes the inverted-telephoto/retrofocus layout. The patent requires
`N1 > 1.69` in the detailed description and claims and explains that relatively high refractive power in the first
component supports the increased field angle and back focal distance. The implemented coordinate `1.78831 / 47.32`
satisfies that condition directly. (US 4,493,536, PDF p. 7, condition (1) and accompanying discussion.)

The glass identity cannot be reduced to a defensible supplier melt from the patent coordinate alone. Current authoritative
catalogs contain nearby high-index lanthanum-flint families, and S-LAH64 is used as a coordinate-compatible spectral proxy without identifying the historical supplier.

### L2 — Biconvex Positive

`nd = 1.80500`, `νd = 44.53`. Glass: `Unmatched (805445 coordinate; supplier unresolved)`. Standalone EFL:
`+26.2096153953 mm`.

L2 is the first positive element behind L1 and is separated from L3 by the design's conspicuously large air interval. The
patent explicitly treats this spacing as part of the architecture and later couples the focal power of L2 with the
magnitude of L3's negative focal power in condition (5). The implemented standalone powers reproduce the patent's
normalized relation `(f2 + |f3|) / f = 1.5597313092` after scaling.

No authoritative catalog match close enough to the `1.80500 / 44.53` coordinate was established. The model therefore
uses the source coordinate and Abbe number directly and leaves the glass unmatched rather than importing spectral data
from a merely similar catalog row.

### L3 — Biconcave Negative

`nd = 1.75000`, `νd = 25.14`. Glass: `Unmatched (750251 coordinate; supplier unresolved)`. Standalone EFL:
`-17.4628612617 mm`.

L3 is the negative element inside the rear convergent assembly. Its thickness is the patent's `d5`, so conditions (2)
and (4) directly constrain this element relative to the following rear distances and the system focal length. The patent
states that these bounds are used in balancing spherical aberration, field curvature, distortion, and coma; the model
preserves the published geometry rather than assigning a separate unsupported correction role to L3 from its low Abbe
number alone. (US 4,493,536, PDF pp. 7–8.)

The `1.75000 / 25.14` coordinate did not support a defended public-catalog identity in the reviewed OHARA, HOYA, SCHOTT,
HIKARI, CDGM, and SUMITA sources. It remains explicitly unmatched.

### L4 — Positive Meniscus

`nd = 1.77250`, `νd = 49.77`. Glass: `N-LAF34 class (coordinate-compatible spectral proxy; native d 1.7725/49.77; supplier/melt unproven)`. Standalone EFL:
`+31.8547545565 mm`.

L4 restores positive power immediately behind L3 and forms part of the compact convergent rear block described by the
patent. The coordinate lies close to the familiar `773496` catalog family, but the patent's `ν = 49.77` is not identical
to those catalog rows. The model uses an N-LAF34 spectral proxy while retaining the source coordinates and supplier uncertainty.

Because the patent supplies only `N` and `ν`, no supplier-specific line indices or partial-dispersion behavior are carried
into the model.

### L5 — Positive Meniscus

`nd = 1.69680`, `νd = 56.47`. Glass: `H-LaK12 class (coordinate-compatible spectral proxy; native d 1.6968/56.47; supplier/melt unproven)`. Standalone EFL:
`+47.1819728509 mm`.

L5 is the final positive element of the rear convergent block. Its weaker standalone positive power follows L4 and brings
the five-element sequence to the final rear surface from which the model's paraxial image plane is measured. The source
coordinate is consistent with a historical lanthanum-crown class, but the available cross-vendor rows do not establish a
specific manufacturer melt. H-LaK12 is used only as a coordinate-compatible spectral proxy.

## Glass Identification and Selection

The patent labels its glass coordinates only as `N` and `ν`; it does not explicitly state d-line or e-line notation in the
U.S. text. The model uses `indexReference: "d"` as a disclosed catalog-supported inference because the coordinates align
with the six-digit `nd`/`νd` convention used by Japanese optical-glass catalogs. This convention is not rewritten as an
explicit patent statement.

| Element | Stored coordinate | Model glass label | Identification status |
|---|---:|---|---|
| L1 | `1.78831 / 47.32` | `S-LAH64 spectral proxy` | supplier unresolved |
| L2 | `1.80500 / 44.53` | `Unmatched (805445 coordinate)` | no defended catalog match |
| L3 | `1.75000 / 25.14` | `Unmatched (750251 coordinate)` | no defended catalog match |
| L4 | `1.77250 / 49.77` | `N-LAF34 spectral proxy` | close to 773496 family, not identical |
| L5 | `1.69680 / 56.47` | `H-LaK12 spectral proxy` | supplier unresolved |

No `nC`, `nF`, `ng`, or `dPgF` values are published for Example 1. Runtime dispersion uses compatible catalog curves for L1, L4, and L5; L2 and L3 retain Abbe fallback. It does not
support an APO or anomalous-partial-dispersion claim.

## Focus Mechanism

The selected patent example publishes only the nominal/infinity prescription. It gives no finite-object spacing table,
focus-group motion, floating-element law, or magnification state. The model therefore uses
`NO_INTERNAL_RECONSTRUCTION`: `var` is empty and no optical spacing changes with the focus control.

The `0.3 m` minimum-focus value is production metadata from Minolta product literature for the MD 28 mm f/2.8 family and
secondary reporting of the later variant. It is not used to infer an internal focusing mechanism or close-focus optical
prescription. Any finite-distance performance prediction would require additional source constraints not present in this
embodiment.

## Conditional Expressions

The detailed description and claims use the following eight conditions. Values below are recomputed from the final parsed
0.28× model, using the correspondingly scaled patent reference `f = 28` for dimensionless ratios.

| Condition | Final-model value | Result |
|---|---:|---|
| `N1 > 1.69` | `1.78831` | pass |
| `0.72 < d5/(d6+d7+d8+d9) < 2.2` | `0.8616666667` | pass |
| `0.26 < d4/f < 0.43` | `0.2902` | pass |
| `0.14 < d5/f < 0.30` | `0.1551` | pass |
| `1.51 < (f2+|f3|)/f < 2.2` | `1.5597313092` | pass |
| `0.12 < d3/f < 0.40` | `0.2805` | pass |
| `0.92 < r3/f < 2.0` | `1.0809` | pass |
| `1.71 < -r4/f < 4.0` | `2.2` | pass |

The patent is internally inconsistent about three lower bounds. The Summary of the Invention prints `N1 > 1.68`,
`0.67 < d5/(d6+d7+d8+d9)`, and `0.13 < d5/f`, while the abstract, detailed preferred-embodiment discussion, and claims
use `1.69`, `0.72`, and `0.14`. Both versions are preserved in the dossier; the repeated detailed/claim values govern the
main check. Example 1 satisfies both sets, so this source discrepancy does not require a prescription correction.
(US 4,493,536, PDF pp. 1, 6–9.)

## Verification Summary

The final parsed prescription independently reproduces the scaled system with Gaussian EFL `28.0119039362 mm` and
rear-vertex BFD `35.7553855419 mm`. The directly scaled printed `L.B.` is `35.7504 mm`; the `+0.0049855419 mm` residual is
the scaled form of the source-precision mismatch already present in the patent-normalized replay. The implemented image
plane uses the recomputed paraxial BFD so that the stored infinity prescription is focused in the model coordinate system.

The patent publishes `FNo. = 2.8` but no physical diaphragm. With the inferred midpoint-d4 stop, the calibrated stop
semi-diameter is `6.5418108625 mm`. The corresponding entrance-pupil semi-diameter is `5.0021257029 mm`, giving modeled
`f/2.8` paraxially. This is a calibration result: it verifies consistency of the modeled stop with the published f-number,
not the physical diameter or axial location of Minolta's production iris.

The patent publishes no clear-aperture semi-diameters. The authored surface apertures are therefore modeled values. Exact
spherical-ray verification at the infinity state includes axial stop-edge rays, the default on-axis fan, the default
0.6-field off-axis fan, 38° patent-half-field chief rays, and chief rays reaching the 135-format half diagonal of
`21.65 mm`. The smallest positive glass-surface clearance in this finite sample is `0.0813095063 mm`. The minimum modeled
edge thickness is `1.0836215111 mm`, the maximum spherical rim angle is `41.7273693454°`, and the minimum shared-gap
policy margin is `0.0204899461 mm`.

At the modeled stop, the exact 38° chief ray reaches image height `21.2919894630 mm`. A chief ray reaching the 135-format
half diagonal of `21.65 mm` requires `38.4578347926°` in this model. Because the stop location and clear apertures are
inferred, these figures describe the implemented optical model rather than an independently measured production field.

The surface-by-surface Petzval sum, evaluated as `φ/(n·n′)` over the ten refracting surfaces, is
`+0.00560763715 mm⁻¹`; the neutral stop contributes zero. This is a first-order Petzval quantity and is not presented as
an actual tangential or sagittal image-surface radius.

The design is entirely spherical. No aspherical coefficient table or conic convention applies to Example 1.

## Sources / References

1. Yoshinobu Kudo, *Inverted Telephoto Type Lens System*, U.S. Patent 4,493,536, filed March 25, 1982, granted
   January 15, 1985. Primary prescription and conditions: supplied patent scan, PDF pp. 6–9; Example 1 Table 1 on p. 8;
   claim-4 repetition on p. 9.
2. Minolta Camera Co., Ltd., *Minolta SLR System — MD lens specifications*, manufacturer brochure scan:
   https://minolta.suaudeau.eu/ressources_iconographiques/system_SLR_MD1.pdf . Used only for MD 28 mm f/2.8 family
   marketed specifications; the brochure's 28 mm design is the earlier 7/7 construction and does not prove the 5/5 match.
3. Lens QA Works, *Minolta MD 28mm 1:2.8 – 5 elements 5 groups – review*:
   https://minolta.su/minolta-md-28mm-f2-8-5el5gr/ . Secondary evidence for the later 5/5 production variant.
4. Casual Photophile, *Minolta MD 28mm f/2.8 Lens Review*:
   https://casualphotophile.com/2021/08/04/minolta-md-28mm-f-2-8-lens-review/ . Secondary evidence for the later variant's
   timing and marketed specifications.
5. Optical-glass catalog review: OHARA (https://www.ohara-inc.co.jp/en/product/catalog/), HOYA
   (https://www.hoya-opticalworld.com/english/datadownload/index.html), HIKARI
   (https://www.hikari-g.co.jp/), SCHOTT optical-glass datasheets, CDGM
   (https://www.cdgmgd.com/database/toWebDatabase.htm?k=Products_Data&pageIndex=25&url=database), and SUMITA
   (https://www.sumita-opt.co.jp/download_files/en/data/zemax.agf). Catalog comparisons are used only to bound glass-class
   interpretations; they do not establish supplier identity for the patent elements.
