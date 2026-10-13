# SCHNEIDER-KREUZNACH TELE-VARIOGON 80-240mm f/4 — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** US 3,336,094<br>
**Priority:** German application Sch 30,859, 20 January 1962<br>
**Filed:** 16 January 1963<br>
**Granted:** 15 August 1967<br>
**Inventor:** Karl Heinrich Macher<br>
**Assignee:** Jos. Schneider & Co., Optische Werke<br>
**Title:** *Varifocal Teleobjective with Movable Negative Components*<br>
**Embodiment analyzed:** Job-card Example 2, corresponding to Figure 2 / Table B

The implemented prescription is based on the second representative embodiment in the patent, Figure 2 and Table B. The patent describes both representative embodiments as 80–240 mm varifocal objectives with a relative aperture of 1:4 and a 24 × 36 mm image size. Figure 2 changes the first moving negative component to a cemented doublet and the fourth front component to a single biconvex element. The numerical Table B prescription contains 14 glass elements in nine air-separated groups and is entirely spherical. ([US 3,336,094](US3336094A.pdf), PDF pp. 2–3, Figure 2 and Table B.)

The correlation with the production Schneider Tele-Variogon 4/80-240 mm is strong but is not treated as manufacturer confirmation that the production lens used this exact patent embodiment. The convergent evidence is:

1. The patent is assigned to Jos. Schneider & Co., Optische Werke, while Schneider-Kreuznach's historical Variogon material identifies a Tele-Variogon 4/80-240 mm.
2. The patent's 80–240 mm range and f/4 relative aperture match the production model designation.
3. Figure 2 / Table B has 14 elements in nine air-separated groups; an archived Schneider/Burleigh Brooks brochure lists the Tele-Variogon 4/80-240 as a 14-element, nine-component lens for 35 mm SLR use.
4. The patent makes two negative inner components responsible for focal-length variation while maintaining a nominally stationary image plane. Manufacturer literature likewise describes zooming without the need for refocusing and a mechanically compensated system.

No located Schneider primary source explicitly identifies US 3,336,094 Figure 2 / Table B as the production prescription. The production-to-patent identification therefore remains a documented correlation rather than a source assertion. The manufacturer literature also describes an interchangeable socket/adapter system rather than one unique mount. The data records brochure-supported systems that have current canonical LensVisualizer taxonomy identifiers, including `zeiss-contarex` for the brochure's Contarex socket; historical adapters without an unambiguous current taxonomy ID remain unset. [Schneider-Kreuznach historical Variogon article](https://schneiderkreuznach.com/en/industrial-optics/knowledge-hub/what-is-a-variogon-lens); [Schneider *Variogon - Zoom Lenses*](https://schneiderkreuznach.com/application/files/6115/0781/8896/variogon-zoom-lenses.pdf); [Schneider/Burleigh Brooks SLR brochure](https://www.pacificrimcamera.com/rl/00068/00068.pdf).

The patent rows are representative, rounded data rather than a numerically exact stationary-image-plane model when traced as printed. The unmodified Table B spacings produce paraxial EFLs of 80.6572, 161.2418, and 244.4155 mm, with a 0.8208 mm span in BFL. The LensVisualizer data therefore uses a disclosed `CONSTRAINED_RECONSTRUCTION`: at each of the three published zoom stations, the sum of the three variable spaces is preserved, while the individual spaces are solved to 80, 160, and 240 mm EFL and one common 39.28854 mm BFL. The same constraints are solved at modeled 2.5 mm EFL intervals so that the viewer's linear zoom interpolation remains close to the stationary-image, constant-f/4 path between the published stations. The largest change from a printed source-station gap is 0.64911 mm at the 240 mm `d11′` value. These extra control points are modeling choices, not assertions of Schneider's unpublished production spacings.

No uniform scale is applied. The patent dimensions are retained in millimeters. No sensor cover glass, rear filter plate, dummy plane, or other omitted optical plate is part of this embodiment, so no air-equivalent rear-spacing correction is required.

## Optical Architecture

The design is a five-component zoom architecture in the patent's component notation: fixed positive component I′, movable negative component II′, movable negative component III′, fixed positive component IV′, and fixed rear component V′. In terms of physical air-separated groups, the complete system has nine groups because several of those patent components contain multiple separated members. ([US 3,336,094](US3336094A.pdf), PDF pp. 2–3.)

The fixed front component I′ consists of positive singlet L1′ followed by the cemented L2′/L3′ pair. Its independently recomputed isolated component focal length is +151.447 mm, closely reproducing the patent's +151.45 mm value. Components II′ and III′ are both cemented negative doublets with isolated EFLs of −78.151 mm and −81.849 mm. Fixed component IV′ is the single biconvex L8′ at +95.975 mm. The four-member rear component V′ has an isolated EFL of +122.764 mm. These are isolated-component first-order values; they do not assign a complete in-situ aberration contribution to any component.

In the reconstructed model, both negative components translate imageward as focal length increases. The front vertex of II′ moves from 24.681 mm at 80 mm to 79.565 mm at 240 mm, a 54.884 mm displacement. The front vertex of III′ moves from 63.116 mm to 90.491 mm, a 27.375 mm displacement. Components IV′ and V′ remain fixed to the 0.01 mm precision inherited from the source spacing sums. The inter-component gap `d8′` decreases to about 5.025 mm at the modeled 197.5 mm control point and then increases toward 240 mm, so the relative spacing reverses while both moving components continue imageward monotonically.

| Implemented zoom state | `d5′` (mm) | `d8′` (mm) | `d11′` (mm) | EFL (mm) | BFL from r23′ (mm) |
|---|---:|---:|---:|---:|---:|
| 80 mm | 3.530889 | 33.935061 | 29.984050 | 80.000000 | 39.288538 |
| 160 mm | 42.665437 | 6.782533 | 18.012030 | 160.000000 | 39.288538 |
| 240 mm | 58.415265 | 6.425628 | 2.609107 | 240.000000 | 39.288538 |

The patent calls the system a telephoto objective throughout. Under the LensVisualizer project's stricter diagnostic definition, however, “telephoto” requires total first-vertex-to-image track divided by EFL to be less than one. The reconstructed ratios are 2.853 at 80 mm, 1.427 at 160 mm, and 0.951 at 240 mm. Thus only the 240 mm modeled state satisfies that project criterion. None of the three states is retrofocus by the complementary project test `BFD > EFL`.

The large rear air space between L11′ and L12′ corresponds to the region in which the patent says the analogous embodiment may accommodate a diaphragm and/or shutter. The exact stop plane and physical aperture diameter are not dimensioned. LensVisualizer therefore places one modeled `STO` at the midpoint of the 51.00 mm space and calibrates its 9.50656 mm semi-diameter to the source f/4 statement. The f/4 agreement is consequently a calibration result, not independent evidence for the manufactured iris diameter.

## Element-by-Element Analysis

The focal lengths in this section are standalone thick-element EFLs in air recomputed from the finalized data. They describe each element's intrinsic first-order power, not its in-situ power inside the complete zoom. The patent does not allocate individual higher-order aberration corrections element by element, so the discussion is restricted to source-described structure and verified first-order relationships.

### Component I′ — fixed positive front component

#### L1′ — Biconvex Positive

nd = 1.52542, νd = 64.6. Glass: PC3 — coordinate-compatible spectral proxy (supplier unresolved). Standalone f = +192.11 mm.

L1′ is the first positive singlet and the first member of fixed component I′. Its two powered surfaces precede the small 0.15 mm air space to the L2′/L3′ cemented pair. The element's positive standalone power is therefore part of the fixed entrance section rather than either moving zoom component. No supplier or modern named glass is assigned because the patent gives only the optical coordinate.

#### L2′ — Positive Meniscus

nd = 1.50378, νd = 76.7. Glass: Unmatched (raw patent coordinate nd=1.50378, νd=76.7). Standalone f = +163.36 mm.

L2′ is the positive member of cemented pair D1. Its rear surface is the cemented junction to L3′, so the interface medium after that surface is L3′ glass rather than air. The pair's isolated net EFL is +844.014 mm, much weaker than either standalone member; this is a first-order statement about the cemented pair, not a claim about a specific aberration it corrects.

The printed `νd = 76.7` is retained deliberately. Table B and the claim-table repetition both show 76.7, even though the analogous Table A coordinate is 66.7 and the checked modern catalog context does not support 76.7 at `nd = 1.50378`. The data therefore treats the value as a probable source typo that is preserved rather than silently repaired. ([US 3,336,094](US3336094A.pdf), PDF pp. 3–4, Table B.)

#### L3′ — Negative Meniscus

nd = 1.78470, νd = 26.1. Glass: 785261 — SF56A-class dense flint (supplier unproven). Standalone f = −191.82 mm.

L3′ is the negative member of D1 and completes fixed component I′. Its high-index, low-Abbe coordinate is close to modern SCHOTT SF56A in `nd`/`νd`, but the data uses only a class/code description because that coordinate match does not establish Schneider's historical supplier or melt. Together L1′ and D1 produce the fixed positive first component whose recomputed EFL is +151.447 mm.

### Component II′ — first movable negative component

#### L4′ — Positive Meniscus

nd = 1.50137, νd = 56.5. Glass: 501565 — K10-class crown (supplier unproven). Standalone f = +256.82 mm.

L4′ is the positive first member of cemented pair D2. Although its standalone power is positive, the pair as a whole is negative because of the much stronger L5′ contribution. The patent explicitly requires the glasses of the first movable component to have refractive indices below 1.6; L4′ has `nd = 1.50137` and therefore satisfies that source condition.

#### L5′ — Biconcave Negative

nd = 1.48749, νd = 70.0. Glass: 487700 — FK5-class crown (supplier unproven). Standalone f = −60.06 mm.

L5′ is the negative member of D2 and dominates the sign of the cemented component. The recomputed isolated EFL of the L4′/L5′ pair is −78.151 mm, close to the patent's printed −78.65 mm component value. L5′ also satisfies the patent's `nd < 1.6` condition for component II′. The coordinate lies near modern FK5-family catalog entries, but no historical supplier identity is asserted.

### Component III′ — second movable negative component

#### L6′ — Biconcave Negative

nd = 1.73350, νd = 51.0. Glass: TAC4 — coordinate-compatible spectral proxy (supplier unresolved). Standalone f = −29.27 mm.

L6′ is the strongly negative front member of D3. Its front surface is the patent's `r9′ = −62.70 mm`, the radius used in one of the patent's explicit design conditions. The element’s production glass remains unidentified; TAC4 supplies a coordinate-compatible spectral proxy.

#### L7′ — Positive Meniscus

nd = 1.78470, νd = 26.1. Glass: 785261 — SF56A-class dense flint (supplier unproven). Standalone f = +45.55 mm.

L7′ is the positive cemented partner to L6′. D3 remains negative as a cemented pair, with a recomputed isolated EFL of −81.849 mm versus the patent's −82.12 mm printed component focal length. As with L3′ and L11′, the 785261 coordinate is class-compatible with modern SF56A but is not evidence of a specific production melt.

### Component IV′ — fixed positive component

#### L8′ — Biconvex Positive

nd = 1.62041, νd = 60.3. Glass: 620603 — SK16/BSM16-class crown (supplier unproven). Standalone f = +95.98 mm.

L8′ is the entire fixed fourth front component in Figure 2. Its standalone EFL is therefore also the isolated EFL of component IV′, +95.975 mm, close to the patent's +95.60 mm value. Modern SCHOTT N-SK16 and OHARA S-BSM16 both lie close to the patent coordinate, but the data stops at a class-level identification.

### Component V′ — fixed rear component

#### L9′ — Biconvex Positive

nd = 1.52542, νd = 64.6. Glass: PC3 — coordinate-compatible spectral proxy (supplier unresolved). Standalone f = +143.98 mm.

L9′ is the first member of the fixed rear component and is air-spaced from D4. It repeats the same patent glass coordinate used by L1′. The rear component remains fixed during the modeled zoom and is treated as a compound positive subsystem rather than as a single thin lens.

#### L10′ — Biconvex Positive

nd = 1.62280, νd = 56.9. Glass: 623569 — SK10/BSM10-class crown (supplier unproven). Standalone f = +50.05 mm.

L10′ is the positive member of cemented pair D4. The patent coordinate is close to modern OHARA S-BSM10 and CDGM H-ZK10L coordinates, but no supplier is selected. The pair must be considered together because L11′ begins immediately at the cemented interface.

#### L11′ — Biconcave Negative

nd = 1.78470, νd = 26.1. Glass: 785261 — SF56A-class dense flint (supplier unproven). Standalone f = −44.72 mm.

L11′ is the negative member of D4. The isolated L10′/L11′ cemented pair has a very long positive EFL of approximately +6612 mm, so its net first-order power in air is small despite the substantial and opposite standalone powers of its two members. That near-neutral pair remains embedded in the larger positive rear component V′; it should not be confused with V′'s +122.764 mm isolated component power.

#### L12′ — Biconvex Positive

nd = 1.53172, νd = 48.9. Glass: S-TIL6 — coordinate-compatible spectral proxy (supplier unresolved). Standalone f = +93.19 mm.

L12′ follows the 51.00 mm rear-group air space. The modeled stop is inserted halfway through that space for visualization and f-number calibration, but the stop location is not a source-published surface. L12′ itself remains the same spherical positive singlet printed in Table B.

#### L13′ — Biconcave Negative

nd = 1.74400, νd = 44.9. Glass: 744449 — LAF2/LAM2-class lanthanum glass (supplier unproven). Standalone f = −36.99 mm.

L13′ is the negative first member of the final cemented pair D5. Its coordinate is close to modern SCHOTT N-LAF2 and OHARA S-LAM2, but the analysis retains only the class relationship. It is cemented directly to L14′ and therefore should not be interpreted in isolation when discussing the power of the final rear member.

#### L14′ — Biconvex Positive

nd = 1.69895, νd = 30.1. Glass: 699301 — TIM35/SF15-class flint (supplier unproven). Standalone f = +68.60 mm.

L14′ is the final glass element. Together with L13′ it forms cemented pair D5, whose recomputed isolated net EFL is −82.582 mm. The complete rear component V′ nevertheless remains positive because D5 operates with L9′, D4, L12′, and their air spaces; this illustrates why standalone and cemented-pair powers cannot be substituted for in-situ subsystem behavior.

## Glass Identification / Selection

The patent publishes `nd` and `νd`, not trade names or supplier melts. The data therefore uses six-digit optical coordinates, class names, or `Unmatched (...)` labels. Modern catalog candidates were checked against SCHOTT, OHARA, HOYA, HIKARI, CDGM, and SUMITA sources, but coordinate agreement is used only to describe a class or possible equivalent. No catalog-derived `nC`, `nF`, `ng`, or `dPgF` value is copied onto the production elements because the patent does not publish those spectral data and no historical supplier identity is established.

| Element(s) | Patent nd | Patent νd | Data-file glass description | Catalog-coordinate context |
|---|---:|---:|---|---|
| L1′, L9′ | 1.52542 | 64.6 | PC3 spectral proxy | Δnd approximately zero; Δνd +0.02 |
| L2′ | 1.50378 | 76.7 | Unmatched | Raw patent value retained; 66.7 remains an unapplied correction candidate |
| L3′, L7′, L11′ | 1.78470 | 26.1 | 785261, SF56A-class | SCHOTT SF56A is coordinate-close |
| L4′ | 1.50137 | 56.5 | 501565, K10-class | SCHOTT K10 is coordinate-close |
| L5′ | 1.48749 | 70.0 | 487700, FK5-class | SCHOTT N-FK5 and SUMITA K-FK5 are coordinate-close |
| L6′ | 1.73350 | 51.0 | TAC4 spectral proxy | Δnd +0.000499; Δνd +0.05 |
| L8′ | 1.62041 | 60.3 | 620603, SK16/BSM16-class | SCHOTT N-SK16 and OHARA S-BSM16 are coordinate-close |
| L10′ | 1.62280 | 56.9 | 623569, SK10/BSM10-class | OHARA S-BSM10 and CDGM H-ZK10L are coordinate-close |
| L12′ | 1.53172 | 48.9 | S-TIL6 spectral proxy | Δnd −0.000003; Δνd −0.06 |
| L13′ | 1.74400 | 44.9 | 744449, LAF2/LAM2-class | SCHOTT N-LAF2 and OHARA S-LAM2 are coordinate-close |
| L14′ | 1.69895 | 30.1 | 699301, TIM35/SF15-class | OHARA S-TIM35 is coordinate-close |

The available evidence does not support an APO or anomalous-partial-dispersion performance claim. Thirteen of fourteen elements resolve to validated compatible catalog curves; L2′ retains an Abbe-level estimate. These spectral proxies do not establish historical supplier identity.

## Focus Mechanism

The patent publishes zoom-compensation states, not finite-object focus states. Manufacturer literature describes focusing by the front knurled ring and gives a production focusing range down to 180 cm, but it does not provide enough optical spacings to identify uniquely which internal optical surfaces move during focusing or by how much.

The LensVisualizer model therefore uses `NO_INTERNAL_RECONSTRUCTION`. `closeFocusM: 1.8` is retained as product metadata, while every zoom-controlled `var` pair repeats the same infinity and close values. The viewer does not invent an internal close-focus state from the minimum-focus distance alone. Consequently, the analysis makes no quantitative claim about focus-group travel, close-focus EFL, breathing, or close-focus aberration behavior.

This distinction is separate from the published zoom motion. Components II′ and III′ do move for focal-length variation; the absence of a finite-focus reconstruction does not remove or simplify that zoom mechanism.

## Conditional Expressions

The patent states several first-order restrictions for this varifocal architecture. They are evaluated on the source prescription and published component focal lengths rather than on guessed production data. ([US 3,336,094](US3336094A.pdf), PDF pp. 1–3.)

| Patent condition | Verified source quantity | Result |
|---|---|---|
| `d5′ + d8′ + d11′ < fmin` | Published sums 67.45, 67.46, 67.45 mm; `fmin = 80 mm` | Satisfied |
| `fV′ < fI′ < 2 fV′` | 123.48 < 151.45 < 246.96 mm | Satisfied |
| `|fII′|, |fIII′|, |fIV′| < fV′` | 78.65, 82.12, 95.60 < 123.48 mm | Satisfied |
| Both glasses in II′ have `nd < 1.6` | 1.50137 and 1.48749 | Satisfied |
| `|r9′| > 0.65 |fIII′|` | 62.70 mm > 53.378 mm | Satisfied |

The constrained zoom reconstruction preserves the three variable-gap sums, so it does not alter the first of these conditions. The other conditions depend on unchanged surface/glass data or the patent's printed component focal lengths.

## Verification Summary

The finalized `.data.ts` was parsed with a TypeScript compiler AST literal loader and then recomputed from the parsed values. A sequential height/reduced-angle trace and an independently implemented ABCD product agree across all 65 authored zoom control points within floating-point tolerance. The three published source stations remain the reference anchors shown below.

| Quantity | 80 mm | 160 mm | 240 mm |
|---|---:|---:|---:|
| Computed EFL | 80.000000 mm | 160.000000 mm | 240.000000 mm |
| BFL from r23′ | 39.288538 mm | 39.288538 mm | 39.288538 mm |
| First vertex to modeled image | 228.238538 mm | 228.248538 mm | 228.238538 mm |
| `TL/EFL` | 2.852982 | 1.426553 | 0.950994 |
| Modeled f-number | 4.000000 | 4.000000 | 4.000000 |

The f-number result is not an independent recovery of the production aperture because the stop semi-diameter was calibrated from the patent's f/4 statement. The exact stop coordinate is likewise inferred, not published.

The surface-by-surface Petzval calculation uses `φ/(n·n′)` at all 23 refracting surfaces. Its sum is +0.0002161451 mm⁻¹; under the project's `R_P = −1/ΣP` convention this corresponds to −4626.52 mm. This is a paraxial Petzval quantity and should not be read as a measured or exact field-curvature surface.

Surface semi-diameters are also modeled rather than source-published. On the finalized model, the smallest computed element edge thickness is 1.3721 mm, the largest spherical rim-slope angle is 27.12°, and the minimum shared-band cross-gap clearance margin is 0.2102 mm under the current portable geometry policy. The continuous-zoom audit covers all 65 modeled control points plus all 64 inter-node midpoints; the midpoint linear interpolation departs from its nominal focal-length coordinate by at most 0.0081 mm and from the common BFL by at most 0.0050 mm, while the modeled f-number deviates from f/4 by less than 0.0003. Exact spherical meridional chief rays at 0.6 of the 24 × 36 mm diagonal field clear all modeled surfaces at every control point and midpoint. Representative exact five-ray pupil bundles are also recorded at 80, 160, 197.5, and 240 mm, with physical edge clipping retained as vignetting rather than disguised as clearance. These checks establish internal consistency of the authored geometry; they do not substitute for LensVisualizer's production render diagnostics or a continuum proof of full-bundle clearance.

The all-spherical prescription has no aspherical surfaces or diffractive phase terms, so no asphere section is applicable.

## Sources / References

1. Karl Heinrich Macher, *Varifocal Teleobjective with Movable Negative Components*, US Patent 3,336,094, filed 16 January 1963, German priority 20 January 1962, granted 15 August 1967. Primary prescription: Figure 2 / Table B and the Figure 2 variable-spacing table. Dossier copy: [US3336094A.pdf](US3336094A.pdf).
2. Schneider-Kreuznach, “What Is a Variogon Zoom Lens? Vario-Optics Explained,” historical manufacturer overview: https://schneiderkreuznach.com/en/industrial-optics/knowledge-hub/what-is-a-variogon-lens
3. Schneider-Kreuznach, *Variogon - Zoom Lenses*, manufacturer historical publication: https://schneiderkreuznach.com/application/files/6115/0781/8896/variogon-zoom-lenses.pdf
4. Schneider / Burleigh Brooks Inc., *Schneider Vario Lens Systems for SLR Cameras*, archived manufacturer brochure: https://www.pacificrimcamera.com/rl/00068/00068.pdf
5. SCHOTT Advanced Optics, optical-glass collection datasheets used for coordinate-candidate checks: https://www.schott.com/en-gb/products/optical-glass/-/media/Project/OnEx/Products/O/optical-glass/Downloads/schott-optical-glass-collection-datasheets-english-may2019.pdf
6. OHARA, S-BSM, S-LAM, and S-TIM35 catalog pages/datasheets used for coordinate-candidate checks: https://oharacorp.com/
7. SUMITA Optical Glass, K-FK5 datasheet used for coordinate-candidate checks: https://www.sumita-opt.co.jp/abbe/pdf/k-fk5.pdf
8. HOYA, HIKARI, and CDGM current catalog portals were checked for coordinate coverage; no supplier identity is inferred from their modern catalogs.


## Integration audit

The October 2, 2026 UTC audit reviewed the exact local patent figure, checked optical rims against edge and gap constraints, and reviewed compatible catalog dispersion. The sibling audit log records retained dimensions, changes and unresolved source limits. Catalog curves are qualified spectral proxies, with production supplier/melt identity unconfirmed.
