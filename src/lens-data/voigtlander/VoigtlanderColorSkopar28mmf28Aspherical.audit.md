# VoigtlanderColorSkopar28mmf28Aspherical — Independent Stage 4 Audit

## Job card and scope

| Field | Fixed value |
|---|---|
| Patent | JP 2023-032663 A |
| Production lens | Voigtländer COLOR-SKOPAR 28mm F2.8 Aspherical SL IIs |
| Embodiment | Example 1 |
| Output stem | `VoigtlanderColorSkopar28mmf28Aspherical` |
| Focus status | `CONSTRAINED_RECONSTRUCTION` |
| Stage gate | `READY_FOR_BATCH` subject to deferred repository-only checks |

The prescription and embodiment were treated as fixed. The independent first pass was completed from the patent, job
card, current data file, and current analysis file before the previous audit conclusions were consulted. The prior audit
was then used only as a difference check; it did not supply the fresh prescription or calculations.

## Independent source extraction

The numerical source is Example 1, Table 1 on patent page 7. The table was re-read from the rendered patent page rather
than copied from the existing TypeScript file. The patent states `f = 29.4 mm`, F/2.88, and image height 21.63 mm in
paragraph 0034. Paragraphs 0023–0033 and Figure 1 establish the negative front group, positive rear group, stop between
`Gsa` and `Gsb`, and rigid whole-lens translation. Page 8 gives the standard conic equation
`sqrt(1 - (1 + K)c²h²)`; no shifted-kappa conversion is required.

The active prescription was re-entered as follows. The `nd` and `νd` cells for surface 5 are genuinely blank in the
patent image; the separately printed standalone focal length for that element is -15.32 mm.

| Surface | R (mm) | d (mm) | nd after surface | Patent note |
|---|---:|---:|---:|---|
| 1 | 46.15 | 2.65 | 1.77250 | `νd = 49.63`, FL +65.23 mm |
| 2 | 535.08 | 0.15 | 1.00000 | Air |
| 3 | 21.31 | 1.00 | 1.49700 | `νd = 81.61`, FL -35.49 mm |
| 4 | 9.50 | 4.87 | 1.00000 | Air |
| 5 | -27.90 | 1.00 | blank | FL -15.32 mm |
| 6 | 14.36 | 2.72 | 1.87070 | `νd = 40.73`, FL +14.47 mm |
| 7 | -93.58 | 2.77 | 1.00000 | Air |
| STO | Infinity | 6.60 | 1.00000 | Aperture stop |
| 9 | -10.53 | 1.00 | 1.84666 | `νd = 23.78`, FL -27.05 mm |
| 10 | -20.35 | 0.15 | 1.00000 | Air |
| 11 | -2886.42 | 4.57 | 1.59349 | `νd = 67.00`, FL +25.44 mm |
| 12 | -15.03 | 0.15 | 1.00000 | Air |
| 13A | -48.45 | 3.01 | 1.61035 | `νd = 57.90`, FL +43.43 mm |
| 14A | -17.54 | ZD14 | 1.00000 | ZD14 = 38.498 mm at infinity |

The re-extracted asphere coefficients match the data file exactly:

| Surface | K | A4 | A6 | A8 | A10 |
|---|---:|---:|---:|---:|---:|
| 13A | -1.3663 | -7.2117E-06 | 2.3332E-08 | 2.6242E-09 | 5.8120E-13 |
| 14A | -1.2708 | 1.1229E-06 | 7.1873E-08 | 1.4566E-09 | 9.7907E-12 |

No optional filter, cover plate, dummy plane, or mechanical surface occurs in the numerical table. None is retained in
the sequential model. Surface 6 is the cemented junction and correctly carries the downstream `Lp2` element id.

## Source correction at surface 5

Solving the thick-lens equation from `R1 = -27.90 mm`, `R2 = 14.36 mm`, center thickness 1.00 mm, and
`f = -15.32 mm` gives one physical refractive-index root above unity:

`nd = 1.6133114659206549`.

The data value differs only by floating-point rounding (`-2.22E-16`). This source correction is necessary to
preserve the
patent's illustrated biconcave element and printed standalone focal length. It does not recover `νd`, line indices,
partial dispersion, or a supplier identity. The existing `Unmatched (...)` annotation is therefore retained.

## Independent paraxial calculation

A fresh height/reduced-angle trace and a separately accumulated ABCD matrix gave the same matrix to zero at stored
double precision:

| Quantity | Independent result |
|---|---:|
| A | 1.3092733878194145 |
| B | 27.91527515955127 mm |
| C | -0.03397859092257283 mm⁻¹ |
| D | 0.03931820912382966 |
| Determinant | 1.0000000000000002 |
| EFL | 29.430296338030 mm |
| Paraxial BFD | 38.532303791021 mm |
| Patent infinity ZD14 | 38.498000000000 mm |
| BFD residual | +0.034303791021 mm |
| Front focal distance, signed from first vertex | -1.157146545995 mm |
| H1, right of first vertex | 28.273149792035 mm |
| H2, objectward of last vertex | 9.102007452992 mm |
| First-to-last vertex track | 30.640000 mm |
| First vertex to authored image plane | 69.138000 mm |
| Patent condition-table LA | 69.150000 mm |

The 0.012 mm `LA` discrepancy and 0.034 mm paraxial BFD residual are consistent with the source precision and the
inferred surface-5 index. The final files preserve the patent's published infinity spacing rather than forcing a
paraxial best-focus replacement.

`TL/EFL = 1.041104026`, so the design is not telephoto under the project definition. `BFD/EFL = 1.308107793`, and the
published BFD exceeds the EFL, so it is retrofocus.

## Standalone, cemented, and functional-group powers

Standalone element powers were recalculated from each element's own two surfaces and center thickness. All printed
patent focal lengths are reproduced within 0.015 mm; the `Ln1` result is necessarily tautological because its index is
solved from that printed focal length.

| Element | Independent standalone FL (mm) | Patent FL (mm) | Residual (mm) |
|---|---:|---:|---:|
| Lp1 | +65.225975 | +65.23 | -0.004025 |
| L1 | -35.488230 | -35.49 | +0.001770 |
| Ln1 | -15.320000 | -15.32 | approximately 0 |
| Lp2 | +14.468062 | +14.47 | -0.001938 |
| L2 | -27.035690 | -27.05 | +0.014310 |
| L3 | +25.442252 | +25.44 | +0.002252 |
| Le | +43.441518 | +43.43 | +0.011518 |

The assembled matrices give `Gf = -86.645570 mm`, cemented `Gsa/J1 = +176.415141 mm`, `Gsb = +29.017007 mm`, and
complete `Gs = +26.830423 mm`. These are isolated assembled-group equivalents, not standalone member powers and not
surface-by-surface in-situ angle contributions.

## Petzval audit

Petzval was recomputed at every refracting surface as `φ/(n·n′)`. The sum is
`+0.003974841890970 mm⁻¹`, with reciprocal `+251.582333947 mm`. The stop contributes zero. The calculation is stored
surface by surface in the Stage 4 results JSON; no element-level approximation is used.

## Pupil and f-number

The physical stop radius is a modeled quantity because the patent does not publish a diameter. With the existing
5.424770527805 mm stop radius, paraxial imaging through the front section gives a 5.109426447575 mm entrance-pupil
radius and F/2.880000000000. This agrees with the modeled `nominalFno` and keeps the design value separate from the
marketed f/2.8 name.

## Focus audit and correction

The patent's finite row gives `ZD0 = 180.000 mm` and `ZD14 = 43.330 mm`. The fresh model predicts
43.375339594892 mm for that object-space row, a +0.045339594892 mm source-precision residual.

At the production 0.15 m object-plane-to-image-plane normalization, rigid unit focus produces two positive reciprocal
finite-conjugate roots:

| Branch | Object plane to first vertex (mm) | BFD (mm) | Travel from infinity (mm) | m |
|---|---:|---:|---:|---:|
| Retained production branch | 67.838403914102 | 51.521596085898 | 13.023596085898 | -0.441357849261 |
| Rejected reciprocal branch | 14.146438840872 | 105.213561159128 | 66.715561159128 | -2.265735166314 |

The retained branch is continuous from infinity, has `|m| < 1`, and predicts approximately 1:2.266, consistent with the
manufacturer's rounded 1:2.3 maximum reproduction. The high-extension `|m| > 1` root is mathematically valid but is not
the production operating branch. The existing numeric `var["14A"]` close value was already the correct retained root;
the correction was to disclose the reciprocal solution and selection basis explicitly in both final files.

## Asphere and geometry audit

At the authored 10.6 mm semi-diameters:

| Surface | Sag (mm) | Same-radius spherical sag (mm) | Departure (mm) | Rim slope | Rim angle |
|---|---:|---:|---:|---:|---:|
| 13A | -0.783790507 | -1.173763898 | +0.389973391 | +0.092973329 | 5.311710° |
| 14A | -2.603834170 | -3.565322902 | +0.961488732 | -0.172811106 | 9.804513° |

All conic radicands remain positive. The maximum actual rim angle is 55.190305° at surface 4, below the 64.2° default.
The minimum physical edge thickness is 0.821009 mm in `Lp2`. The tightest positive sag-intrusion case is gap 4→5,
which leaves 0.135543 mm against the 90% gap limit. The tightest default paraxial ray margin is 0.112075 mm at surface
10. The independent render-trim proxy is 0.000 mm.

The generated full-track diagnostic SVG was visually inspected. It shows the intended seven-element/six-group layout,
no crossing element boundaries, no hidden wings, a stop between `Gsa` and `Gsb`, and all default on-axis and 0.60-field
rays inside the authored semi-diameters. This is an independent diagnostic, not the unavailable repository runtime
renderer.

## Independent glass audit

The patent names no supplier. The generic six-digit class annotations were checked without using the existing labels as
catalog search keys. The official HOYA 2026-06-01 workbook contains exact optical-position examples for TAF1
(1.77250/49.63), FCD1 (1.49700/81.61), TAFD32 (1.87070/40.73), FDS90 (1.84666/23.78), and PCD51
(1.59349/67.00). SCHOTT's official precision-molding table lists P-SK60 at 1.61035/57.90. These exact examples confirm
the six-digit classes but do not establish the production supplier. The vendor-unresolved class labels are retained.

No `nC`, `nF`, `ng`, or `dPgF` values are authored. No APO or anomalous-partial-dispersion claim is made. The complete
catalog residual table is in `VoigtlanderColorSkopar28mmf28Aspherical.stage4-glass-audit.csv`.

Authoritative catalog sources:

- HOYA optical glass workbook: <https://www.hoya-opticalworld.com/common/xls/HOYA20260601.xlsx>
- SCHOTT, *Optical Materials for Precision Molding*, official precision-molding glass table.

## Data and analysis consistency

The final data and analysis agree on the patent, Example 1, seven elements, six groups, Nikon F/Ai-S production mount,
135 full-frame format, design EFL, design F-number, asphere surfaces and coefficients, rigid unit focus, source-5 index
correction, glass uncertainty, Petzval result, retrofocus classification, and all four patent conditions. Marketing and
design quantities remain separated.

The analysis retains the required section order and a synchronized metadata block. It contains no unsupported supplier,
APO, internal-focus, telephoto, or production-asphere-manufacturing claim. Its references distinguish patent facts,
manufacturer specifications, catalog examples, and modeling inferences.

## Corrections made in Stage 4

### Correction 1 — data header focus disclosure

- Old wording: the 0.15 m normalization “gives a close BFD of 51.521596085898 mm.”
- Corrected wording: the fixed-total conjugate has two reciprocal roots; the branch continuous from infinity is retained
  at BF 51.521596085898 mm and the BF 105.213561159128 mm, `|m| > 1` branch is rejected.
- Source location: patent paragraph 0033 and Table 1 focus rows on page 7; manufacturer 0.15 m MFD and 1:2.3 maximum
  reproduction.
- Independent evidence: fresh quadratic finite-conjugate solve in the Stage 4 verification script.
- Downstream consequence: disclosure only. Prescription, `var`, EFL, BFD, pupil, geometry, and close-state numbers are
  unchanged.

### Correction 2 — `focusDescription`

- Old wording: the production endpoint “is solved at BF = 51.521596 mm.”
- Corrected wording: the reciprocal `|m| > 1` root is rejected and the branch continuous from infinity gives the stored
  BF and magnification.
- Source location and evidence: same as Correction 1.
- Downstream consequence: metadata disclosure is now complete; no numerical field changed.

### Correction 3 — analysis focus section

- Old wording: the 0.15 m reconstruction “solves only the rear spacing,” with only one root shown.
- Corrected wording: both positive roots are tabulated, the retained/rejected status is stated, and the selection is
  identified as a mechanism- and product-constrained inference.
- Source location and evidence: same as Correction 1.
- Downstream consequence: the analysis no longer implies mathematical uniqueness; all previously stated retained-branch
  quantities remain valid.

### Correction 4 — focus terminology copyedit

- Old wording: “inner, rear, or floating-focus mechanism.”
- Corrected wording: “inner-, rear-, or floating-focus mechanism.”
- Source location: analysis, Focus Mechanism section.
- Independent evidence: the patent specifies rigid whole-lens translation, not any of those mechanisms.
- Downstream consequence: prose only.

No prescription, asphere, semi-diameter, glass-class, structured-metadata, or quantitative optical correction was
required.

## Targeted final gate

| Check | Result |
|---|---|
| Fresh patent/table/asphere extraction | PASS |
| TypeScript object parse and round-trip | PASS |
| Strict temporary `LensDataInput` TypeScript typecheck | PASS |
| Exactly one `STO`, element references, cemented junction, var/base-d | PASS |
| Sequential y–ν / ABCD cross-check | PASS |
| Determinant and paraxial quantities | PASS |
| Infinity and reconstructed close-focus states | PASS |
| Reciprocal focus-root disclosure | PASS |
| Pupil and modeled F/2.88 | PASS |
| Surface-by-surface Petzval | PASS |
| Element, cemented, and functional-group powers | PASS |
| Asphere convention, departures, and conic limits | PASS |
| Edge thickness, rim slope, cross-gap intrusion | PASS |
| Default on/off-axis containment | PASS |
| Independent render SVG and visual inspection | PASS |
| Independent glass class/residual audit | PASS |
| Analysis section order, metadata, and quantitative agreement | PASS |
| Manual `.prettierrc.json` style audit | PASS |
| Repository Prettier executable | UNAVAILABLE |
| Actual `buildLens()` / `validateLensData()` | NOT RUN — repository unavailable |
| Runtime `computeElementRenderDiagnostics()` | NOT RUN — repository unavailable |
| Repository glass-mismatch report and pairing tests | NOT RUN — repository unavailable |
| `generate:metadata`, full corpus tests, full build, Git | Intentionally not run |

The deferred items are local integration checks, not unresolved optical contradictions. The clean pair and its audit
package are ready for batch integration.

## 2026-08-02 integration review

The repository renderer was checked directly against patent Figures 1 and 4. The staged semi-diameters reproduce the
published silhouette closely, remain fully contained by the existing spherical/aspherical geometry checks, and need no
revision. The official product name is retained as `COLOR-SKOPAR 28mm F2.8 Aspherical SL IIs`, and the existing Yuki
Shibata romanization is used consistently.

The glass audit now records compatible public curves instead of leaving six resolvable rows as numeric classes:
N-LAF34, H-FK61, TAFD32, H-ZF52, J-PSKH4, and P-SK60. The patent does not identify production suppliers, so every label
is explicitly an optical equivalent. P-SK60 is newly added from SCHOTT's official coefficients and exactly reproduces
the final element's `1.61035 / 57.90` position. Strict Sellmeier coverage rises from 5/7 to 6/7; Ln1 remains a constant-
index model because the patent omitted its Abbe number.

## Second SD audit — 2026-08-02

A fresh post-commit render was checked again against Example 1 Figures 1 and 4. The front meniscus, compact cemented
pair, stop opening, and three-element rear progression remain aligned with the patent drawing. The stored apertures pass
`audit:image-circle` and the production render-diagnostics test, so no SD correction was supported.
