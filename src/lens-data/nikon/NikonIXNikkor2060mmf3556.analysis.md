## Patent Reference and Design Identification

**Patent:** JPH08334694A, Example 1 / Table 1 / Fig. 1; family JP3528946B2 and US5793536A.
**Inventor:** Haruo Sato.
**Applicant:** Nikon Corporation.
**Priority:** 1995-06-05.
**Published:** 1996.

This is a private, production-associated patent reconstruction for the IX-Nikkor 20–60mm f/3.5–5.6, not a factory-exact prescription. Nikon's designer account [NIKKOR Tale 75](https://imaging.nikon.com/imaging/information/story/0075/) and its actual production section support the association. The 1998 barrel/coating revision is not a separate optical prescription here.

The registered production overlay uses one uniform scale and translation for both groups, without warping. Independently replaying all 17 patent contours (2,890 points) gives maximum quantized drawing discrepancy 0.00910 px. The parent researcher's separately measured 13 axial landmarks give 0.66 px RMS for Example 1 versus 1.96 px for Example 2; that landmark measurement was not independently repeated here. Local custody is the complete Japanese primary HTML, Nikon production JPEG and transferred registered overlay. No local custody of an original Japanese patent PDF is asserted. Registration sources and exact hashes remain in the checkpoint.

**Status:** numerical verification completed as described below; final qualification is HOLD because the required fresh-profile desktop/mobile browser gate could not run under the managed command runner's Unix-socket restriction. This checkpoint is not admitted, delivered, or published.

## Optical Architecture

The source has nine glass lenses in seven groups, with a separate bonded resin layer on the first lens. Ten native material runs therefore do not mean ten physical lenses. The rear group has two cemented doublets. The explicit 0.030 mm resin layer and all source shared glass interfaces remain distinct.

One scale of 20 mm per normalized source unit gives source labels 20 / 34 / 56.54 mm and preserves the published 2.827 zoom ratio. Computed EFLs are 19.995137 / 33.957868 / 56.428665 mm. Marketing 20–60mm is documentary; the prescription was not stretched or fitted to 60mm.

The original three stations retain all their literal geometry and image planes. Sixty-two additional unpublished optical interpolation samples yield one 65-station native zoom file. They are estimated optical controls, not a factory cam. Simple three-point gap interpolation was explicitly falsified: its maximum between-station paraxial residual is 2.69706 mm. The separately derived denser interpolation leaves at most 3.366 µm additional paraxial residual beyond interpolation of the original source residuals, in a 2,001-position numerical audit.

## Element-by-Element Source Materials

These are literal source refractive indices and Abbe numbers, not identified commercial glass products or independently validated broadband dispersion curves.

| Material run | Source n_d | ν_d | Interface note |
|---|---:|---:|---|
| L11 glass body | 1.796681 | 45.37 | First glass component |
| L11 bonded resin | 1.506250 | 55.63 | Exact 0.030 mm; S3 aspheric exit |
| L12 | 1.716999 | 48.04 | Separate front-group glass |
| L13 | 1.795040 | 28.56 | Separate front-group glass |
| L21 | 1.603001 | 65.42 | Rear group, after source aperture |
| L22 | 1.603001 | 65.42 | Separate rear component |
| L23 | 1.516800 | 64.10 | First member of cemented pair |
| L24 | 1.834000 | 37.17 | Shared cemented interface retained |
| L25 | 1.772789 | 49.45 | First member of final cemented pair |
| L26 | 1.518230 | 58.90 | Shared cemented interface retained |

## Glass Identification and Selection

Only the printed d-line indices and Abbe values are asserted. No supplier name, chemical resin identity, coatings, transmission or color correction has been inferred. Quantitative verification is monochromatic helium d, 587.5618 nm.

## Focus and Zoom Mechanism

Only infinity is represented. The repeated infinity columns do not establish finite focus. Source image coordinates from the first vertex are 99.0534 / 93.5224 / 103.9850 mm. They remain respectively 11.319 / 22.575 / 50.004 µm behind the Gaussian focus, without detector compensation.

Source S8 is the actual iris, located exactly 0.486 mm before S9. The distinct source S19 flare stopper is unsupported clipping geometry and is not represented as the aperture. Its two original air segments are summed exactly into rear air 31.7724 / 44.8680 / 65.9526 mm. No source flare-stop loss, mechanical baffle behavior or full-field vignetting is claimed.

Endpoint source controls are f/3.59 and f/5.67. The middle f/4.63 and all interior aperture schedules are estimates. Numerically scoped verification uses f/8 control, whose physical source-station iris radii are 3.142520 / 4.065419 / 5.550678 mm; no factory iris dimensions are asserted.

## Aspherical Surfaces

Only source S3 has the printed asphere. The source radical uses kappa directly; kappa 0.1343 therefore maps to standard native K = −0.8657. C2 is exactly zero. C4 +0.159130, C6 +0.275100, C8 −0.382470 and C10 +0.167360 are scaled by 20^(1−power). The literal radius is unchanged. Independent sag and slope agree with the compiled native profile; wrong-conic and dropped-A10 controls measurably change the surface. No coefficient was fitted or discarded.

## Clear Apertures and Scope

Full factory rim geometry has not been established. Drawing-extents estimates produce a negative resin edge thickness at radius 13.1469 mm. A 13 mm cap gives positive minimum resin thickness 0.018825 mm. The native default air-gap guard also rejects the initial outer estimate at S3–S4. That original trial remains on HOLD outside this checkpoint's importable model.

The present explicitly limited inner-clear-aperture alternative uses resin-face caps 13 mm, S4 front cap 12.5 mm, S16 cap 6.7 mm and documented drawing estimates elsewhere. It changes no printed optical radius, thickness, glass, stop position or source detector. It uses no trim or override. Dense same-pupil comparison at all three source stations, source endpoint/estimated middle apertures and f/8 through ±3° showed zero additional admitted-ray losses against the original drawing-cap estimates.

The model's native field is restricted to ±3°. Wider independent f/8 bench samples clear the selected pupils through 20° at each source station; larger fields include clips or failed paths. Those wider samples have no native/UI/MTF qualification, and no full APS image coverage is asserted.

## Verification and Remaining Gate

129 native geometry states, including all 65 authored nodes and their midpoints, have zero render trimming and positive sampled common-radius separations. At 17 zoom positions, 385 independent aimed rays at each of −3°, 0° and +3° all reach the literal image and agree with native intersections to 9.76e−12 mm. The three source anchors separately use 1,441 physical and aimed pupil samples per case with classified iris losses, no unexplained failures and exact source geometry assertions.

At five zoom positions and f/8, native geometric and scalar sheared-pupil diffraction MTF converge over 5–40 lp/mm at axis, approximately 1.5°, and 3°, with zero unknown flux and zero applied focus shift. These are monochromatic simulations, not measured factory performance. Independent exact-Snell geometric Fourier MTF at 64/96 pupil-grid cells agrees with native geometric MTF within 0.00364; the grid change is below 0.00364. Diffraction is identified separately and is not obtained by multiplying the independent geometric curves.

All 492 relevant existing tests pass. Fresh-process replay reproduces seven deterministic outputs byte-for-byte. The current main, controlling specs and nine transferred source files remain unchanged. Dedup covers 1,209 current-main bodies and a fully read 151-family staged/delivered inventory plus documented later additions; unavailable historical archives were not newly byte-reread.

Fresh isolated Chromium launch failed at its process-singleton Unix socket under the managed runner. No desktop/mobile screenshot, UI import, slider, autosave or browser reload success is claimed. The task's own Vite server has been stopped. Final production qualification must remain HOLD until that exact browser gate is completed with the same model bytes.
