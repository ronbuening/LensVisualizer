# Prescription scale accuracy — 2026-09-08

## Stage 1: physical units

Corrected Nikon Z 35mm f/1.8 S by 35/1.572 and Nikon AI 135mm f/2 by 1.35. Converted all authored geometry, focus gaps, element focal lengths and asphere coefficients in the data, avoiding runtime inference from marketing numbers. Preserved calculated versus source-stated EFL and unavailable aperture results.

Regressions cover independent first-order EFL anchors at infinity/mid/close focus, all six Z35 asphere shapes, AI135 unit-focus travel and real-ray availability at full aperture, f/4 and f/16.

Catalog investigation covered 669 visible prescriptions. Olympus 21mm f/2 remains a separate published-prescription discrepancy (calculated 28.49 mm after the existing 0.21 conversion); PDF page 8 visually confirms nd=1.61659, despite OCR dropping a digit. Do not rescale it again. Canon EF100–300 includes an intentional 69 mm patent zoom station; the Nikon 6mm fisheye has a projection constant distinct from Gaussian EFL.

## Remaining source limitations

Z35 source Table 2 states 1.572, but its prescription computes 1.623730 before scaling, with the discrepancy concentrated in Gr1. JP pages 17–18 and US11768360B2 repeat the same values. Wide-open ray failure is associated with source surfaces 5→6 crossing along the ray path. A source correction is needed before claiming full-aperture performance.

## Verification

Stage 1: typecheck, format check, lint, all 2,906 tests (309 files), production build/prerender (1,251 routes), and the two-lens working-aperture audit passed.

## Stage 2: source plate and catalog guard

Restored Z35 source surfaces 22–23, including the glass index, dispersion, plate thickness and rear air gap. Source plate geometry remains fixed during focus. Updated aperture calibration to source f/1.85 while preserving marketing f/1.8. Added a visible focus-description note for the unresolved prescription limitation. The source focus-dependent iris schedule remains unmodeled.

Extended the existing full-catalog exact-trace sweep with design-versus-marketing unit checks, reusing its lens builds instead of adding a redundant catalog pass. Existing Gaussian-versus-design validation supplies the complementary geometry check. The broad 0.8–1.25 screening band is a unit-error detector, not an accuracy tolerance. Bounded exceptions retain the reviewed Canon extra-wide zoom station and Olympus source-power discrepancy; fisheye projection constants remain distinct from Gaussian EFL.

Added physical sensor-plate position and Snell-law regressions. Stage 2: typecheck, format check, lint and full coverage run passed (2,907 tests in 309 files). Coverage: statements 92.31%, branches 83.90%, functions 94.02%, lines 94.93%; all existing floors preserved. Production build/prerender passed for 1,251 routes; glass reports regenerated with zero catalog-coordinate mismatches. Catalog working-aperture audit: 666 lenses, 34,624 states, five folded systems skipped, zero execution errors/regressions. Existing unavailable/clipped states remain explicit.

Local browser verification confirmed Z35 infinity EFL 36.15 mm and close-focus EFL 31.25 mm, the visible source limitation, wide-open working aperture unavailable, and f/4 working approximately f/4.03. The restored sensor plate renders separately behind the eleven lens elements.

## Stage 3: remove sensor cover by diagram convention

User correction: sensor-cover plates are not implemented in these diagrams. Removed CG and surfaces 22–23; folded their physical distances back into the final air spacing and restored BF labeling. Updated current analysis prose and removed the plate-only test. Scaling, source aperture calibration and catalog checks remain. This intentionally omits plate refraction while preserving the physical image-plane position. Typecheck, formatting, lint, all 2,906 tests (309 files), regenerated glass reports and production build/prerender passed. Browser inspection confirmed the eleven-element diagram without the sensor plate and close-focus EFL 31.25 mm.
