## Patent Reference and Design Identification

**Patent:** US 2,746,351 A\
**Filed:** March3,1953\
**Published:** May22,1956\
**Inventor:** Albrecht Wilhelm Tronnier\
**Applicant:** Voigtländer AG\
**Title:** Photographic objective of the modified triplet type and a meniscus shaped negative member axially separated therefrom\
**Priority / application context:** Germany, March5,1952\
**Example details:** Table2, Fig4; normalizedf1 uniformly scaled35×. Literal tableF3.4 retained.

The original Prominent manual names Skoparon35mm/F3.5 and shows the distinctive large negative front meniscus followed by a compact modified-triplet principal member. The five-element/four-group architecture and approximate63° full-field envelope agree with the proposed product family. This is a Grade B probable match, not a unique factory example identification. Table2 explicitly givesF3.4; Fig4 and the retail designation giveF3.5. The authored iris opens to the sourceF3.4, with retailF3.5 descriptive. The patent has no numeric field, so half31.5° is an external manufacturer-envelope hypothesis.

Uniform35× scaling is an explicit modeled interpretation of normalizedf1, not a factory dimension measurement. The source’s overall optical length.69367 excludes an unprinted image interval. The computed infinity plane is independently derived from the literal table; no source interval is invented or silently optimized. Fig4’s front/middle/rear envelope proportions inform cap hypotheses without being calibrated clear radii. DE1024730 is corroborating source context, not a second independent discovery.

## Optical Architecture

Five elements in four groups form a compact wide-angle retrofocus arrangement: a broad negative front meniscus, a large air space, positive plano-convex L2, negative L3 and the rear cemented L4/L5 pair. The front air space and opposing curvatures supply the patent’s air-lens contribution. S4 is plane; the other interfaces are spherical.

## Element-by-Element Analysis

### L1 — Negative Meniscus

nd = 1.46522, νd = 65.2. Glass: Unmatched literal patent glass. f = -203.58475mm (isolated paraxial element at the model scale).

A broad low-index negative meniscus expands the front member and separates it from the compact positive principal section. The source calls its material fluorine-crown; it is not identified as crystalline fluorite.

### L2 — Plano-Convex Positive

nd = 1.65770, νd = 51.2. Glass: Unmatched literal patent glass. f = +16.00357mm (isolated paraxial element at the model scale).

The positive plano-convex element starts the rear principal section after the large front air space.

### L3 — Biconcave Negative

nd = 1.60266, νd = 38.4. Glass: Unmatched literal patent glass. f = -11.52829mm (isolated paraxial element at the model scale).

The compact negative member opposes L2 and lies immediately before the diaphragm space.

### L4 — Biconcave Negative

nd = 1.58360, νd = 46.2. Glass: Unmatched literal patent glass. f = -17.34563mm (isolated paraxial element at the model scale).

The negative member of the rear cemented pair precedes the strongly converging shared interface.

### L5 — Biconvex Positive

nd = 1.69347, νd = 53.5. Glass: Unmatched literal patent glass. f = +9.92114mm (isolated paraxial element at the model scale).

The positive rear component completes the cemented principal member. Its source curvatures and thickness constrain the inferred clear cap.

## Glass Identification and Selection

The publication explicitly defines the mean refractive index at the yellow helium d line and gives Abbe numbers. The authored values remain literal, with `indexReference: "d"`. No vendor identity, Sellmeier coefficients, measured secondary spectrum, anomalous-dispersion or APO certification is inferred. The index/Abbe palette supports a qualitative chromatic balancing discussion; the validation below is monochromatic.

| Element | nd | νd | Glass identity |
|---|---:|---:|---|
| L1 | 1.46522 | 65.2 | Unmatched literal source |
| L2 | 1.65770 | 51.2 | Unmatched literal source |
| L3 | 1.60266 | 38.4 | Unmatched literal source |
| L4 | 1.58360 | 46.2 | Unmatched literal source |
| L5 | 1.69347 | 53.5 | Unmatched literal source |

## Focus Mechanism

This authored model is static infinity only. The canonical infinity state uses `closeFocusM: 1e15`; it does not define a near conjugate, interpolate a cam or transplant a retail focusing distance. The fixed absolute image plane is z56.558472919424mm after S1. No finite-conjugate or full-spectrum performance is claimed.

## Aperture and Stop Reconstruction

Nominal EP5.1471mm times1.10 gives5.6618mm anchor; Fig4 front/middle/rear envelope ratios about1/.43/.40/.38 give roughly14.2/6.1/5.6/5.4mm. First cap is2.5times that anchor. Positive rear element geometry bounds rear cap; source figure is not calibrated clear aperture. No real-ray losses or contrast used.

The physical-surface SD vector in source order is `[14.2, 14.2, 6.1, 6.1, 5.6, 5.6, 5.4, 5.4, 5.4]`mm. The virtual STO has no authored radius: the normal ordinary-prime EFL/F-number rule sets the physical iris. The nominal stop divides the entire1.98765mm source gap after S6 at fraction0.65, preserving its total. Source figures support the gap, not an exact calibrated station or blade fit. The nominal position was selected from source and exact geometry before any real-ray or MTF calculation.

| Gap fraction | Stop z mm | f/3.4 iris radius mm | Before / after disk clearance mm | Decision |
|---:|---:|---:|---:|---|
| 0.3 | 20.00029500 | 4.51753325 | -0.48250587 / 1.27053333 | Rejected: intersects glass |
| 0.45 | 20.29844250 | 4.54028626 | -0.19591905 / 0.97116482 | Rejected: intersects glass |
| 0.6 | 20.59659000 | 4.56303927 | 0.09059455 / 0.67179016 | Feasible hypothesis |
| 0.65 | 20.69597250 | 4.57062360 | 0.18608277 / 0.57199724 | Feasible hypothesis (nominal) |
| 0.7 | 20.79535500 | 4.57820794 | 0.28156281 / 0.47220364 | Feasible hypothesis |

The full operating disk was checked against both exact neighboring caps at every advertised aperture. Invalid proposals were retained and excluded from tracing. Feasible cases pass the normal native geometry and render checks with zero hidden trim. No SD was enlarged after tracing.

## Infinity Validation

Independent reduced-angle matrix and physical-slope propagation give EFL35.001357835597mm and paraxial BFL32.280022919424mm. The BFL is computed because none is printed. The adopted final gap is32.280022919424mm; fixed-plane minus computed paraxial-plane residual is+0.000000000000mm, unapplied. Source radii, thicknesses and glass values were not retuned.

The normal native scalar sheared-pupil diffraction estimator used literal reference indices at587.5618nm, reference spectrum, design focus and zero applied image shift. These are conditional model curves and native sampling-convergence results; they are not an independent physical-OPL reference, continuum error bound or measurement of a factory lens. No withdrawn1D OPL workflow is used. All sampled frequencies0/10/20/30/40/50lp/mm and prior-grid arrays are retained in the evidence.

Fields0/15.75/31.5° are the explicitly external maker-envelope hypotheses, not patent field values. They were mapped by actual native chief heights, with a private metadata-only coordinate window where necessary. That window is not delivered as a factory image-circle claim. The generic full-frame native reference radius is21.65mm; the physical36×24mm corner is√468≈21.63330765mm. Neither is assumed equal to the source/hypothesized field edge.

| f-number | Angle deg | Height / native21.65 fraction | Grid | Max consecutive Δ | S/T10 | S/T30 | S/T50 |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 3.4 | 0.000000 | 0.000000 / 0.000000 | 64 | 0.009987448 | 0.584470 / 0.584470 | 0.068236 / 0.068236 | 0.145683 / 0.145683 |
| 3.4 | 15.750000 | 9.849912 / 0.454961 | 128 | 0.005174840 | 0.451580 / 0.511982 | 0.064000 / 0.104319 | 0.013525 / 0.056144 |
| 3.4 | 31.500000 | 21.190413 / 0.978772 | 256 | 0.004418566 | 0.001611 / 0.284304 | 0.000195 / 0.146987 | 0.000061 / 0.093064 |
| 8 | 0.000000 | 0.000000 / 0.000000 | 64 | 0.004392205 | 0.914986 / 0.914986 | 0.703871 / 0.703871 | 0.534278 / 0.534278 |
| 8 | 15.750000 | 9.849912 / 0.454961 | 64 | 0.003644509 | 0.800172 / 0.800563 | 0.251148 / 0.292885 | 0.037344 / 0.168601 |
| 8 | 31.500000 | 21.190413 / 0.978772 | 64 | 0.003905472 | 0.136642 / 0.756175 | 0.055448 / 0.485768 | 0.025937 / 0.330363 |

Across this trio, all36 source/envelope-field results across each lens’s three feasible stop hypotheses and the nominal f/8 comparison converged through50lp/mm under the unchanged0.01 native grid criterion, with zero final failed/unaimed/unresolved-in-beam/unknown-flux counts. That does not mean loss-free transmission. The nominal16-cell pupil has:

| Angle deg | Valid / blocked of208 | Unaimed / unresolved | Raw failures (overlap) |
|---:|---:|---:|---:|
| 0 | 208 / 0 | 0 / 0 | 0 |
| 15.75 | 208 / 0 | 0 / 0 | 0 |
| 31.5 | 156 / 52 | 0 / 0 | 0 |

Across the three lenses,104 retained raw noBracket traces were separately resolved from their saved outgoing/launch states by an analytical sphere-quadratic witness: every correct-branch intersection misses the frozen finite cap (or the sphere has no forward intersection). Original native failures and clipEvents remain unchanged. This is conditional finite-cap evidence, not proof of a factory rim. Stop sensitivity changes losses and curves; the nominal stop was not selected by contrast. In particular, the eight-element Takumar has substantial axial and edge losses at f/1.4 under its inferred caps. No finite-focus or full-spectrum inference follows from these tests.

## Sources and References

1. [US 2,746,351 A, Photographic objective of the modified triplet type and a meniscus shaped negative member axially separated therefrom](https://patents.google.com/patent/US2746351A/en); complete acquired primary PDF, literal table and original figure retained in the private evidence.
2. Original Voigtländer Prominent manual, cover and selected Skoparon page; retained primary scans and source jobcard.
3. Current repository authoring specifications, source packet hashes, exact first-order/geometry/pupil/MTF arrays, independent analytical failure witnesses and all rebuild scripts accompany the audit package.
