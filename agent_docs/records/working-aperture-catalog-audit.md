# Working-aperture catalog verification

Verified 2026-09-05 UTC after the source, launch, clipping, and UI corrections. This is model verification, not a measurement or patent-data certification.

## Reproduce

```bash
npm run audit:working-aperture -- --output /private/tmp/aperture-catalog.json
npm run audit:working-aperture -- src/lens-data/nikon/NikonZ135f18.data.ts
```

The audit covers 660 non-folded prescriptions; five folded files are explicitly skipped. It samples eight focus positions (including both sides of the former 0.0001 and 0.003 cutoffs), wide-open/twice-wide-open/f8/minimum iris settings with duplicates removed, and wide/mid/tele zoom positions. Defocus controls stay at their default; separate unit regressions check source continuity with defocus controls. Aperture requests are clamped to each prescription's allowed range.

## Results

| Result | Settings |
| --- | ---: |
| Total | 34,368 |
| Valid conventional working cone | 33,620 |
| Of those, modeled clipping recorded | 1,979 |
| Exact ray could not be traced | 364 |
| Source estimate invalid or virtual | 160 |
| Unsupported phase/diffractive optics | 224 |
| Shared-report disagreements | 0 |
| Former-threshold discontinuities | 0 |
| Audit execution errors | 0 |

Clipped settings are a subset of valid values, not additional unavailable settings. Boundary checks flag a validity transition or a relative numeric jump above 0.05% across 2e-8 of slider travel. This is a targeted numerical regression check, not a universal proof of smoothness.

The runtime compatibility helper and Summary agree with the shared aperture report at every sampled setting, including clipping-list identity. The complete sweep took approximately 15 seconds on the current workspace machine; this is an audit duration, not a controlled before/after performance benchmark.

## Additional guard correction found by the audit

Nikon Z 100–400mm and Sony 28–70mm f/2 model an explicit neutral surface at the image plane. The working-cone guard now accepts rays reaching that plane, while still rejecting rays beyond it. Added production zoom/focus regressions and an independent neutral-reporting-plane invariance test. This restored 192 valid sampled results.

## Remaining limitations and follow-up

- 364 settings across 75 prescriptions still fail exact stop-edge aiming or subsequent surface tracing. These need individual tracer/prescription investigation; they are not proven manufacturing defects. No smaller-ray extrapolation or paraxial substitution is used to hide failures.
- 160 settings across five prescriptions have an invalid or virtual inferred source. Signed virtual sources are not forced positive. Distagon 35/1.4, Nikon 35–200, and Pentax 67 100/4 include negative inferred distances; Pentax A 200 Macro and Vivitar Series 1 70–210 include failed source estimates. Preserve their diagnostic status pending evidence-based investigation.
- Six diffractive/phase prescriptions remain unsupported by this centered refractive metric. Folded/annular/moved optics keep their existing guards.
- Modeled rim clipping requires a separate audit of semi-diameter evidence. Keep the published conventional cone separate from any future usable-aperture or irradiance measurement.
- The source is an infinity-calibrated focus-tracking estimate from real-ray sensitivity. It is distinct from the catalog focus label and from the retained paraxial cone to the actual sensor center. No source measurements were invented.

## Personal checks

1. Plena: selected f/1.85 should show working f/1.83 at infinity and about f/2.02 at closest modeled focus. Move slightly away from infinity and check that the value changes smoothly.
2. Sonnar 50/1.5: stop down to f/8 and move near infinity; the previous jump toward f/10.24 should be gone. Wide-open trace failure should have an explanation.
3. Fujifilm GF 30mm T/S: centered, selected f/5.6, closest focus should show working f/5.87. Apply tilt or shift and check the centered readout becomes unavailable with an active-movement explanation.
4. APO-Lanthar 50/2: selected f/1.93 at infinity should show working f/1.92 and modeled clipping at surfaces 6, 7, 8. Stop down and check that the clipping note clears; collapse aperture details and check that a remaining note stays visible.
5. Compare APO-Lanthar and Plena: values and clipping notes should match their individual views. Check both desktop and narrow layouts.

Live browser checks covered the APO-Lanthar slider/Summary, Fujifilm close-focus slider/Summary, and APO-Lanthar/Plena shared comparison. Unit/component checks cover collapsed details, failed/unsupported reasons, movement suppression, and panel forwarding. Browser screenshots and a separate mobile-device session were not captured.

## Final verification gates

Typecheck, formatting, lint, all 2,858 tests in 304 files, and coverage passed. Coverage floors were not lowered:
statements 92.24%, branches 83.79%, functions 93.95%, lines 94.91%. The production build prerendered 1,243 routes.
The generated folder docs are current, and the import-cycle count remains at the original three.
