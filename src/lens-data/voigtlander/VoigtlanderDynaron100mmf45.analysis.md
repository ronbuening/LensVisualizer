## Patent Reference and Design Identification

**Patent:** US 2,730,017 A\
**Filed:** October6,1954\
**Published:** January10,1956\
**Inventor:** Albrecht Wilhelm Tronnier\
**Applicant:** Voigtländer AG\
**Title:** Photographic tele-objective having three lens composite front and rear members\
**Priority / application context:** Germany, November23,1953\
**Example details:** Fig1 and numerical table on PDFpage3; native100mm/F4.5, no dimensional rescaling.

The named original Prominent manual depicts a six-element telephoto section consistent with the patent’s four air groups, two cemented doublets and broad central diaphragm space. The100mm/F4.5 operating scale also agrees. These converging features support a Grade B probable historical product-family match; they do not establish a unique factory prescription. The manual’s approximate25° full field is an external operating-envelope hypothesis because this patent prints no numeric field. A portrait-use distance around2m is not adopted as a minimum-focus endpoint. This is a known generic inventory publication, not a claim of a newly discovered patent.

The patent’s optical drawing uses f300 while the numerical table uses f100. Neither drawing scale nor the manufacturer barrel diameter supplies calibrated clear apertures. R5+75.934 is retained; an earlier75.954 reading was rejected by source review. CH327354 corroborates this family; a database collation with the later five-element US3215037 is not adopted.

## Optical Architecture

Six elements in four groups form a telephoto: cemented L1/L2 and separate negative L3 form the front member, followed by the broad diaphragm space, positive L4 and cemented L5/L6 as the rear member. The separated positive and negative powers provide short overall track relative to focal length. All ten physical interfaces are spherical.

## Element-by-Element Analysis

### L1 — Biconvex Positive

nd = 1.58987, νd = 61.2. Glass: Unmatched literal patent glass. f = +27.90998mm (isolated paraxial element at the model scale).

The strong positive front collector provides the front member’s main convergence. Its interface with L2 is cemented.

### L2 — Biconcave Negative

nd = 1.72381, νd = 38. Glass: Unmatched literal patent glass. f = -54.25623mm (isolated paraxial element at the model scale).

This high-index, lower-Abbe negative member shares the first doublet and opposes the strong front convergence; its chromatic balancing role is consistent with the paired dispersions.

### L3 — Negative Meniscus

nd = 1.72381, νd = 38. Glass: Unmatched literal patent glass. f = -183.89516mm (isolated paraxial element at the model scale).

A separate negative meniscus completes the three-element front member and bounds the large diaphragm space.

### L4 — Biconvex Positive

nd = 1.62355, νd = 47. Glass: Unmatched literal patent glass. f = +83.08898mm (isolated paraxial element at the model scale).

This positive biconvex element starts the rear member after the wide air gap.

### L5 — Biconcave Negative

nd = 1.58192, νd = 40.8. Glass: Unmatched literal patent glass. f = -20.48494mm (isolated paraxial element at the model scale).

The negative component of the rear cemented pair opposes L4 and participates in the telephoto power distribution.

### L6 — Biconvex Positive

nd = 1.75512, νd = 27.5. Glass: Unmatched literal patent glass. f = +44.46789mm (isolated paraxial element at the model scale).

This high-index rear positive element shares the final cemented interface and completes the composite rear member.

## Glass Identification and Selection

The publication explicitly defines the mean refractive index at the yellow helium d line and gives Abbe numbers. The authored values remain literal, with `indexReference: "d"`. No vendor identity, Sellmeier coefficients, measured secondary spectrum, anomalous-dispersion or APO certification is inferred. The index/Abbe palette supports a qualitative chromatic balancing discussion; the validation below is monochromatic.

| Element | nd | νd | Glass identity |
|---|---:|---:|---|
| L1 | 1.58987 | 61.2 | Unmatched literal source |
| L2 | 1.72381 | 38 | Unmatched literal source |
| L3 | 1.72381 | 38 | Unmatched literal source |
| L4 | 1.62355 | 47 | Unmatched literal source |
| L5 | 1.58192 | 40.8 | Unmatched literal source |
| L6 | 1.75512 | 27.5 | Unmatched literal source |

## Focus Mechanism

This authored model is static infinity only. The canonical infinity state uses `closeFocusM: 1e15`; it does not define a near conjugate, interpolate a cam or transplant a retail focusing distance. The fixed absolute image plane is z83.075000000000mm after S1. No finite-conjugate or full-spectrum performance is claimed.

## Aperture and Stop Reconstruction

First cap12.1mm is8.9% above nominal EP11.1111; downstream group envelopes informed by original maker section ratios about.90/.90/.78/.86. Patent Fig1 is a300mm schematic with different rear proportions, not calibrated100mm caps. Retain disagreement. Exact glass edge limits front cap. SDs are inferred finite optical caps, not factory envelopes.

The physical-surface SD vector in source order is `[12.1, 12.1, 11.1, 11.1, 11.1, 9.6, 9.6, 10.4, 10.4, 10.4]`mm. The virtual STO has no authored radius: the normal ordinary-prime EFL/F-number rule sets the physical iris. The nominal stop divides the entire25.819mm source gap after S5 at fraction0.55, preserving its total. Source figures support the gap, not an exact calibrated station or blade fit. The nominal position was selected from source and exact geometry before any real-ray or MTF calculation.

| Gap fraction | Stop z mm | f/4.5 iris radius mm | Before / after disk clearance mm | Decision |
|---:|---:|---:|---:|---|
| 0.4 | 18.57160000 | 8.13119069 | 9.89099131 / 15.49140000 | Feasible hypothesis |
| 0.55 | 22.44445000 | 7.51991028 | 13.82717595 / 11.61855000 | Feasible hypothesis (nominal) |
| 0.7 | 26.31730000 | 6.90862987 | 17.75836631 / 7.74570000 | Feasible hypothesis |

The full operating disk was checked against both exact neighboring caps at every advertised aperture. Invalid proposals were retained and excluded from tracing. Feasible cases pass the normal native geometry and render checks with zero hidden trim. No SD was enlarged after tracing.

## Infinity Validation

Independent reduced-angle matrix and physical-slope propagation give EFL99.993115188487mm and paraxial BFL37.198400630292mm. The printed BFL is retained. The adopted final gap is37.203000000000mm; fixed-plane minus computed paraxial-plane residual is+0.004599369708mm, unapplied. Source radii, thicknesses and glass values were not retuned.

The normal native scalar sheared-pupil diffraction estimator used literal reference indices at587.5618nm, reference spectrum, design focus and zero applied image shift. These are conditional model curves and native sampling-convergence results; they are not an independent physical-OPL reference, continuum error bound or measurement of a factory lens. No withdrawn1D OPL workflow is used. All sampled frequencies0/10/20/30/40/50lp/mm and prior-grid arrays are retained in the evidence.

Fields0/6.25/12.5° are the explicitly external maker-envelope hypotheses, not patent field values. They were mapped by actual native chief heights, with a private metadata-only coordinate window where necessary. That window is not delivered as a factory image-circle claim. The generic full-frame native reference radius is21.65mm; the physical36×24mm corner is√468≈21.63330765mm. Neither is assumed equal to the source/hypothesized field edge.

| f-number | Angle deg | Height / native21.65 fraction | Grid | Max consecutive Δ | S/T10 | S/T30 | S/T50 |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 4.5 | 0.000000 | 0.000000 / 0.000000 | 64 | 0.004840693 | 0.586182 / 0.586182 | 0.101801 / 0.101801 | 0.123658 / 0.123658 |
| 4.5 | 6.249999 | 11.013855 / 0.508723 | 64 | 0.005670841 | 0.877596 / 0.811717 | 0.405141 / 0.273317 | 0.168321 / 0.088936 |
| 4.5 | 12.499998 | 22.632071 / 1.045361 | 128 | 0.002049181 | 0.235282 / 0.166389 | 0.112421 / 0.031572 | 0.065715 / 0.007185 |
| 8 | 0.000000 | 0.000000 / 0.000000 | 64 | 0.005388936 | 0.898386 / 0.898386 | 0.635087 / 0.635087 | 0.442448 / 0.442448 |
| 8 | 6.249999 | 11.013855 / 0.508723 | 32 | 0.008903319 | 0.894405 / 0.851928 | 0.595726 / 0.427140 | 0.381990 / 0.238427 |
| 8 | 12.499998 | 22.632071 / 1.045361 | 64 | 0.006109008 | 0.785897 / 0.321526 | 0.309453 / 0.074158 | 0.173753 / 0.015144 |

Across this trio, all36 source/envelope-field results across each lens’s three feasible stop hypotheses and the nominal f/8 comparison converged through50lp/mm under the unchanged0.01 native grid criterion, with zero final failed/unaimed/unresolved-in-beam/unknown-flux counts. That does not mean loss-free transmission. The nominal16-cell pupil has:

| Angle deg | Valid / blocked of208 | Unaimed / unresolved | Raw failures (overlap) |
|---:|---:|---:|---:|
| 0 | 208 / 0 | 0 / 0 | 0 |
| 6.25 | 194 / 14 | 0 / 0 | 0 |
| 12.5 | 146 / 62 | 0 / 0 | 0 |

Across the three lenses,104 retained raw noBracket traces were separately resolved from their saved outgoing/launch states by an analytical sphere-quadratic witness: every correct-branch intersection misses the frozen finite cap (or the sphere has no forward intersection). Original native failures and clipEvents remain unchanged. This is conditional finite-cap evidence, not proof of a factory rim. Stop sensitivity changes losses and curves; the nominal stop was not selected by contrast. In particular, the eight-element Takumar has substantial axial and edge losses at f/1.4 under its inferred caps. No finite-focus or full-spectrum inference follows from these tests.

## Sources and References

1. [US 2,730,017 A, Photographic tele-objective having three lens composite front and rear members](https://patents.google.com/patent/US2730017A/en); complete acquired primary PDF, literal table and original figure retained in the private evidence.
2. Original Voigtländer Prominent manual, selected original PDFpage4; retained primary scan and source jobcard.
3. Current repository authoring specifications, source packet hashes, exact first-order/geometry/pupil/MTF arrays, independent analytical failure witnesses and all rebuild scripts accompany the audit package.
