## Patent Reference and Design Identification

**Patent:** JP S40-028384 B\
**Filed:** May29,1963\
**Published:** December16,1965 (examined application publication)\
**Inventors:** Tomokazu Kazamaki; Yasuo Takahashi\
**Applicant:** Asahi Kogaku Kogyo Co., Ltd.\
**Title:** Large-aperture lens with long back focus (バックフォーカスの長い大口径レンズ)\
**Priority / application context:** Application昭38-27523 / JP1963-027523\
**Example details:** Example1 (第1実施例), original PDFpage2; all lengths, including printedBF75.42, uniformly scaled0.5×.

The original Asahi Product358 service booklet identifies the50mm/F1.4 Super-Takumar and lists eight physical glass pieces, including the distinctive L04/L05/L06 triplet assembly, matching this patent’s eight-element/six-group layout. The patent’s F1.4 and46° full field also fit the product family. The0.5× interpretation of nativef100 is explicit; the primary service drawing does not select uniquely between the patent’s examples. This is a Grade B probable family match. Product378 is the separate seven-element version and is excluded, as are secondary Beam42 model assumptions.

The original names are風巻友一 and高橋泰夫. Structured Latin display uses the existing corpus spellings Tomokazu Kazamaki and Yasuo Takahashi; the selected Japanese page itself does not print those romanizations. Applicant representative松本三郎 is not substituted as inventor. This is the examined publication JP S40-028384 B, not an assertion that a separately listed later registration was inspected. Example2’s separately verified R6+33.228 remains separate; Example1 R6+32.577 is unchanged. The8/6 factory association does not identify the table as a measured factory prescription.

## Optical Architecture

Eight spherical elements in six air groups form an asymmetric high-speed normal-lens arrangement. Three front singlets precede the central diaphragm space. The rear member begins with a cemented L4/L5/L6 triplet, followed by two separate positive rear elements. The triplet and long back focus distinguish this candidate from the later seven-element production version.

## Element-by-Element Analysis

### L1 — Positive Meniscus

nd = 1.80610, νd = 40.7. Glass: Unmatched literal patent glass. f = +90.90865mm (isolated paraxial element at the model scale).

A high-index positive front meniscus collects the wide-aperture bundle.

### L2 — Positive Meniscus

nd = 1.80610, νd = 40.7. Glass: Unmatched literal patent glass. f = +59.79264mm (isolated paraxial element at the model scale).

A second high-index positive meniscus provides substantial convergence before the front negative member.

### L3 — Negative Meniscus

nd = 1.74077, νd = 27.7. Glass: Unmatched literal patent glass. f = -36.39141mm (isolated paraxial element at the model scale).

The lower-Abbe negative meniscus faces the broad central gap and redistributes the front member’s convergence. Its strongly curved rear surface limits geometrically usable cap size.

### L4 — Biconcave Negative

nd = 1.74077, νd = 27.7. Glass: Unmatched literal patent glass. f = -21.20924mm (isolated paraxial element at the model scale).

The front negative component of the cemented triplet opposes the central positive component.

### L5 — Biconvex Positive

nd = 1.78590, νd = 44. Glass: Unmatched literal patent glass. f = +18.82971mm (isolated paraxial element at the model scale).

The thick positive triplet core uses high-index, larger-Abbe glass than its first neighbor and supplies substantial rear-member power.

### L6 — Negative Meniscus

nd = 1.70154, νd = 41.1. Glass: Unmatched literal patent glass. f = -44.10154mm (isolated paraxial element at the model scale).

The rear negative triplet component completes the three-glass assembly; isolated element powers are descriptive and are not cemented-group focal lengths.

### L7 — Positive Meniscus

nd = 1.78590, νd = 44. Glass: Unmatched literal patent glass. f = +64.16044mm (isolated paraxial element at the model scale).

The separate high-index positive rear meniscus adds convergence after the triplet.

### L8 — Biconvex Positive

nd = 1.78590, νd = 44. Glass: Unmatched literal patent glass. f = +95.14523mm (isolated paraxial element at the model scale).

The final positive biconvex element completes the rear member while preserving the long source back focus.

## Glass Identification and Selection

The publication explicitly defines the mean refractive index at the yellow helium d line and gives Abbe numbers. The authored values remain literal, with `indexReference: "d"`. No vendor identity, Sellmeier coefficients, measured secondary spectrum, anomalous-dispersion or APO certification is inferred. The index/Abbe palette supports a qualitative chromatic balancing discussion; the validation below is monochromatic.

| Element | nd | νd | Glass identity |
|---|---:|---:|---|
| L1 | 1.80610 | 40.7 | Unmatched literal source |
| L2 | 1.80610 | 40.7 | Unmatched literal source |
| L3 | 1.74077 | 27.7 | Unmatched literal source |
| L4 | 1.74077 | 27.7 | Unmatched literal source |
| L5 | 1.78590 | 44 | Unmatched literal source |
| L6 | 1.70154 | 41.1 | Unmatched literal source |
| L7 | 1.78590 | 44 | Unmatched literal source |
| L8 | 1.78590 | 44 | Unmatched literal source |

## Focus Mechanism

This authored model is static infinity only. The canonical infinity state uses `closeFocusM: 1e15`; it does not define a near conjugate, interpolate a cam or transplant a retail focusing distance. The fixed absolute image plane is z79.560000000000mm after S1. No finite-conjugate or full-spectrum performance is claimed.

## Aperture and Stop Reconstruction

EP17.8571mm times1.10 gives19.6429mm first anchor, rounded19.6. Fig1 approximate middle/rear ratios.86/.79/.82/.83/.81 are refined BEFORE tracing for exact cap slope, positive edge thickness and source cross-gap clearance. L3cap14.2 and triplet front12.5 are smaller than schematic envelopes because the strong source curvatures would otherwise overlap; optical-clear-cap versus physical envelope ambiguity retained. L7/L8cap16.4. No performance-selected change.

The physical-surface SD vector in source order is `[19.6, 19.6, 17.0, 17.0, 14.2, 14.2, 12.5, 12.8, 12.8, 12.8, 16.4, 16.4, 16.4, 16.4]`mm. The virtual STO has no authored radius: the normal ordinary-prime EFL/F-number rule sets the physical iris. The nominal stop divides the entire12.5mm source gap after S6 at fraction0.5, preserving its total. Source figures support the gap, not an exact calibrated station or blade fit. The nominal position was selected from source and exact geometry before any real-ray or MTF calculation.

| Gap fraction | Stop z mm | f/1.4 iris radius mm | Before / after disk clearance mm | Decision |
|---:|---:|---:|---:|---|
| 0.35 | 16.87500000 | 12.82674631 | -1.87408711 / 3.22722204 | Rejected: intersects glass |
| 0.48 | 18.50000000 | 12.61067669 | 0.02101336 / 1.60222204 | Feasible hypothesis |
| 0.5 | 18.75000000 | 12.57743521 | 0.31154135 / 1.35222204 | Feasible hypothesis (nominal) |
| 0.52 | 19.00000000 | 12.54419372 | 0.60180491 / 1.10222204 | Feasible hypothesis |
| 0.65 | 20.62500000 | 12.32812410 | 2.48227797 / -0.36566780 | Rejected: intersects glass |

The full operating disk was checked against both exact neighboring caps at every advertised aperture. Invalid proposals were retained and excluded from tracing. Feasible cases pass the normal native geometry and render checks with zero hidden trim. No SD was enlarged after tracing.

## Infinity Validation

Independent reduced-angle matrix and physical-slope propagation give EFL49.997881077977mm and paraxial BFL37.707809308501mm. The printed BFL is retained. The adopted final gap is37.710000000000mm; fixed-plane minus computed paraxial-plane residual is+0.002190691499mm, unapplied. Source radii, thicknesses and glass values were not retuned.

The normal native scalar sheared-pupil diffraction estimator used literal reference indices at587.5618nm, reference spectrum, design focus and zero applied image shift. These are conditional model curves and native sampling-convergence results; they are not an independent physical-OPL reference, continuum error bound or measurement of a factory lens. No withdrawn1D OPL workflow is used. All sampled frequencies0/10/20/30/40/50lp/mm and prior-grid arrays are retained in the evidence.

Fields0/11.5/23° are the exact patent angles. They were mapped by actual native chief heights, with a private metadata-only coordinate window where necessary. That window is not delivered as a factory image-circle claim. The generic full-frame native reference radius is21.65mm; the physical36×24mm corner is√468≈21.63330765mm. Neither is assumed equal to the source/hypothesized field edge.

| f-number | Angle deg | Height / native21.65 fraction | Grid | Max consecutive Δ | S/T10 | S/T30 | S/T50 |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 1.4 | 0.000000 | 0.000000 / 0.000000 | 128 | 0.004636408 | 0.798368 / 0.798368 | 0.047802 / 0.047802 | 0.097611 / 0.097611 |
| 1.4 | 11.499973 | 10.101956 / 0.466603 | 256 | 0.004240682 | 0.583055 / 0.492158 | 0.322169 / 0.334328 | 0.100806 / 0.268713 |
| 1.4 | 23.000000 | 20.657043 / 0.954136 | 128 | 0.007508567 | 0.159743 / 0.433584 | 0.043854 / 0.210000 | 0.014882 / 0.112465 |
| 8 | 0.000000 | 0.000000 / 0.000000 | 32 | 0.007017805 | 0.940611 / 0.940611 | 0.821455 / 0.821455 | 0.702457 / 0.702457 |
| 8 | 11.499973 | 10.101956 / 0.466603 | 32 | 0.006232764 | 0.931771 / 0.936424 | 0.768200 / 0.800150 | 0.605849 / 0.663660 |
| 8 | 23.000000 | 20.657043 / 0.954136 | 32 | 0.009820079 | 0.892564 / 0.812653 | 0.570519 / 0.238916 | 0.314066 / 0.060625 |

Across this trio, all36 source/envelope-field results across each lens’s three feasible stop hypotheses and the nominal f/8 comparison converged through50lp/mm under the unchanged0.01 native grid criterion, with zero final failed/unaimed/unresolved-in-beam/unknown-flux counts. That does not mean loss-free transmission. The nominal16-cell pupil has:

| Angle deg | Valid / blocked of208 | Unaimed / unresolved | Raw failures (overlap) |
|---:|---:|---:|---:|
| 0 | 148 / 60 | 0 / 0 | 0 |
| 11.5 | 132 / 76 | 0 / 0 | 0 |
| 23 | 66 / 142 | 0 / 0 | 26 |

Across the three lenses,104 retained raw noBracket traces were separately resolved from their saved outgoing/launch states by an analytical sphere-quadratic witness: every correct-branch intersection misses the frozen finite cap (or the sphere has no forward intersection). Original native failures and clipEvents remain unchanged. This is conditional finite-cap evidence, not proof of a factory rim. Stop sensitivity changes losses and curves; the nominal stop was not selected by contrast. In particular, the eight-element Takumar has substantial axial and edge losses at f/1.4 under its inferred caps. No finite-focus or full-spectrum inference follows from these tests.

## Sources and References

1. [JP S40-028384 B, Large-aperture lens with long back focus (バックフォーカスの長い大口径レンズ)](https://www.j-platpat.inpit.go.jp/c1801/PU/JP-S40-028384/12/en); complete acquired primary PDF, literal table and original figure retained in the private evidence.
2. Original Asahi Product358 service parts booklet, selected cover and PDFpages3/4; retained primary scans. Original Honeywell1965 catalog chronology is corroboration only.
3. Current repository authoring specifications, source packet hashes, exact first-order/geometry/pupil/MTF arrays, independent analytical failure witnesses and all rebuild scripts accompany the audit package.
