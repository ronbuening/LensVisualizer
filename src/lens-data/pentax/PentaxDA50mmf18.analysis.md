**Patent:** JP 2014-026184 A (JP2014026184A); grant counterpart JP 5966728 B2.
**Filed:** 2012-07-30.
**Published:** 2014-02-06; grant published 2016-08-10.
**Inventor:** Koji Kato (加藤 浩司).
**Applicant:** Ricoh Imaging Company, Ltd.
**Title:** Large-aperture lens system.
**Example details:** Application Tables 7–8, Figures 10–12, Numerical Example 4; byte-transcribed values also match grant numerical Example 2. Grant reference Example 4 is a different design. Native millimetres, no rescaling.

## Patent Identification and Product Correspondence

This is a representative patent reconstruction associated with the original smc PENTAX-DA 50mm F1.8. The exact factory prescription is unproved. The source contains seven whole alternatives; none has been spliced into this file. All selected radii, thicknesses, source stop distances, d-line indices and Abbe numbers remain literal.

The maker confirms six elements in five groups, with three separate front elements, a diaphragm, a cemented rear pair and a final singlet. Its section is compatible with the selected example, without uniquely identifying that example as the product. Nominal retail 50mm has not replaced the source 51.50mm. Maker APS-C coverage, Pentax K mount, seven blades and f/22 limit are descriptive product metadata.

The maker preview on 2012-02-08 and announcement on 2012-05-29 precede filing on 2012-07-30; planned availability was late July. This chronology is retained without a legal inference or an invented exact retail date. Historical inventory Primes:927 already identified Example04P. This is source recovery, not a new patent discovery.

## Optical Architecture

Six spherical elements form five components in the sequence positive, positive, negative, negative, positive, positive. L4/L5 share source surface9; the stop is the explicitly tabulated nonrefracting row7. The front and rear assemblies form a modified double-Gauss arrangement. There are eleven refracting faces and no aspheres, additional filter plate or sensor stack.

## Element-by-Element Analysis

### L1 — Positive Meniscus

nd = 1.80610, νd = 40.9. Glass: Unmatched literal patent coordinates; supplier unproved. Isolated-in-air f = +47.553206mm.

The positive front meniscus introduces front-group power. Its source radii differ strongly, so the very shallow rear face remains literal rather than being flattened.

### L2 — Positive Meniscus

nd = 1.78590, νd = 44.2. Glass: Unmatched literal patent coordinates; supplier unproved. Isolated-in-air f = +92.190819mm.

The second positive meniscus contributes front-group convergence. Its image-side face borders the source1.682mm air gap; inferred clear radii there are constrained by exact sag clearance.

### L3 — Negative Meniscus

nd = 1.74077, νd = 27.8. Glass: Unmatched literal patent coordinates; supplier unproved. Isolated-in-air f = -26.694951mm.

The front negative meniscus has a strongly curved image-side face toward the stop. The source4.145mm gap to the iris remains fixed.

### L4 — Negative Meniscus

nd = 1.76182, νd = 26.6. Glass: Unmatched literal patent coordinates; supplier unproved. Isolated-in-air f = -30.336730mm.

The negative rear meniscus is cemented to L5. Its object-side concavity and source6.087mm distance from the stop are preserved.

### L5 — Positive Meniscus

nd = 1.80610, νd = 40.9. Glass: Unmatched literal patent coordinates; supplier unproved. Isolated-in-air f = +37.359339mm.

The positive cemented partner shares the source−68.666mm boundary with L4. Individual focal lengths below describe isolated-in-air elements, not the installed power of the cemented pair.

### L6 — Biconvex Positive

nd = 1.77250, νd = 49.6. Glass: Unmatched literal patent coordinates; supplier unproved. Isolated-in-air f = +47.188383mm.

The final biconvex positive singlet completes the rear group. Its following source BF is air-equivalent image distance, not a claimed mechanical flange or a measured camera stack.

## Glass Identification / Selection

The six Nd/νd pairs are source d-line values. No supplier names, full dispersion coefficients or independent g/C indices are supplied. The authored Unmatched labels avoid claiming catalog identities from an index/Abbe match. Native reference-index calculations use587.5618nm. Default viewer photopic calculations use the application's material interpolation and are a separate implementation estimate, not measured broadband performance or a certified spectral match.

## Focus Mechanism and Image Plane

Only the selected infinity prescription is supplied. Supported infinity-only metadata uses closeFocusM=1e15 and no conjugates or motion arrays. Maker closest-focus0.45m and0.15× magnification are descriptive; they do not authorize a finite prescription or interpolated cam law. No finite optical performance is claimed.

The separately printed air-equivalent BF38.52mm is represented as air after the last powered face, with no invented filter. Powered track33.852mm plus BF gives fixed image coordinate72.372mm, versus rounded header72.37mm. Independent ABCD gives EFL51.500142181064mm and Gaussian BF38.518476689584mm. The computed-minus-source BF residual−0.001523310416mm remains; neither the source gap nor focus was optimized.

## Aspherical Surfaces

None. The source explicitly describes all seven examples as spherical. No aspheric coefficient or alternative-example correction is introduced.

## Apertures, Stop and Geometry Qualifications

Stop row7 is source-backed, at z17.191mm, with literal adjacent gaps4.145/6.087mm. Its physical radius is unprinted. The ordinary native F/N rule gives infinity iris radius10.059853576mm atF1.8; no stop.sd was hand-authored. The circular numerical iris is distinct from the maker's seven-blade description. Exact operating-disk clearance was checked at every advertised aperture; blades and mount fit are not proved.

All powered-face clear radii are inferred. The front15.75mm seed is about10.1% above the entrance-pupil radius51.5/(2×1.8); maker section proportions inform the remaining13–13.75mm envelope seeds. Schematics depict envelopes, not calibrated clear apertures. Exact cap geometry rejected equal13.75mm boundaries at sourceS4/S5 and13mm atS6/S8. Before any native tracing or MTF, those boundaries were conservatively set to11.25mm and11.5mm respectively. Final S1–S12 clear radii are15.75,15.75,13.75,11.25,11.25,11.5,unprinted iris,11.5,13,13,13,13mm. Source R/d/material values did not change.

Nominal and−5% cap sensitivities pass normal native geometry with zero hidden render trim. The +5% sensitivity fails normal air-gap checks and remains rejected. No check/tolerance override was used. Valid sensitivity curves describe inferred-cap dependence; caps were not chosen by their MTF.

## Native Numerical Validation

The saved normal native method is monochromatic scalar sheared-pupil diffraction estimation at literal reference indices, focus:design, zero applied image shift. It is not geometric MTF, the withdrawn one-dimensional OPL workflow, independent physical OPL validation, a continuum proof or measured factory performance. Three calls test nominalF1.8, nominalF8 and−5% caps atF1.8, each at exact source angles0°,7.75°,15.5°. All nine fields converge through sampled50lp/mm within the normal0.01 MTF criterion, with zero unknown flux. Every refinement snapshot is retained. Source angles and native format fractions are independently mapped; the sourceY14.24mm and format corner are not assumed identical.

| Caps / aperture | Source angle | Native chief height (mm) | Native format fraction | Grid |  Max delta | S30 / T30           | S50 / T50           |
| --------------- | -----------: | -----------------------: | ---------------------: | ---: | ---------: | ------------------- | ------------------- |
| nominal / f/1.8 |           0° |               0.00000000 |             0.00000000 |   64 | 0.00932619 | 0.153424 / 0.153424 | 0.114678 / 0.114678 |
| nominal / f/1.8 |        7.75° |               6.99981962 |             0.49381444 |   64 | 0.00911992 | 0.145475 / 0.237162 | 0.063986 / 0.058892 |
| nominal / f/1.8 |        15.5° |              14.20151058 |             1.00187023 |  128 | 0.00494424 | 0.415889 / 0.140605 | 0.201739 / 0.151663 |
| nominal / f/8   |           0° |               0.00000000 |             0.00000000 |   32 | 0.00695827 | 0.821103 / 0.821103 | 0.701956 / 0.701956 |
| nominal / f/8   |        7.75° |               6.99981962 |             0.49381444 |   32 | 0.00461982 | 0.787173 / 0.784634 | 0.640709 / 0.636727 |
| nominal / f/8   |        15.5° |              14.20151058 |             1.00187023 |   32 | 0.00702072 | 0.759124 / 0.531539 | 0.591183 / 0.250176 |
| sd-low / f/1.8  |           0° |               0.00000000 |             0.00000000 |  128 | 0.00205537 | 0.154764 / 0.154764 | 0.152675 / 0.152675 |
| sd-low / f/1.8  |        7.75° |               6.99981962 |             0.49381444 |   64 | 0.00705837 | 0.143439 / 0.278663 | 0.087970 / 0.058313 |
| sd-low / f/1.8  |        15.5° |              14.20151058 |             1.00187023 |   64 | 0.00997052 | 0.494299 / 0.135236 | 0.240013 / 0.156937 |

The separate16-cell aimed-pupil audit retains all launch/hit/direction/OPL diagnostic records. On nominal caps, valid/208 counts are188 axial,182 half-field and146 edge. The remaining20/26/62 samples are clipped on authored finite caps. All six nominal/low-cap field cases have zero raw failure, unaimed and unresolved counts. This is conditional transmission through inferred clear apertures, not evidence of factory rim loss or loss-free optics. Full raw arrays, loss-by-surface counts and failed pretrace hypotheses are preserved privately.

## Sources

1. JP2014026184A complete original, Tables7–8/Figs10–12: https://patents.google.com/patent/JP2014026184A/en
2. JP5966728B2 complete original, corresponding numerical Example2: https://patents.google.com/patent/JP5966728B2/en
3. Ricoh original product page and optical section: https://www.ricoh-imaging.co.jp/english/products/lens/k/telephoto/smcpentax-da50/
4. Original maker catalog page8 extraction, explicitly retained as an excerpt; complete-catalog custody and source hashes accompany the research archive.
