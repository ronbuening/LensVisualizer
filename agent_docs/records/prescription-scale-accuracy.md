# Prescription scale accuracy — 2026-09-08

## Stage 1: physical units

Corrected Nikon Z 35mm f/1.8 S by 35/1.572 and Nikon AI 135mm f/2 by 1.35. Converted all authored geometry, focus gaps, element focal lengths and asphere coefficients in the data, avoiding runtime inference from marketing numbers. Preserved calculated versus source-stated EFL and unavailable aperture results.

Regressions cover independent first-order EFL anchors at infinity/mid/close focus, all six Z35 asphere shapes, AI135 unit-focus travel and real-ray availability at full aperture, f/4 and f/16.

Catalog investigation covered 669 visible prescriptions. Olympus 21mm f/2 remains a separate published-prescription discrepancy (calculated 28.49 mm after the existing 0.21 conversion); PDF page 8 visually confirms nd=1.61659, despite OCR dropping a digit. Do not rescale it again. Canon EF100–300 includes an intentional 69 mm patent zoom station; the Nikon 6mm fisheye has a projection constant distinct from Gaussian EFL.

## Remaining source limitations

Z35 source Table 2 states 1.572, but its prescription computes 1.623730 before scaling, with the discrepancy concentrated in Gr1. JP pages 17–18 and US11768360B2 repeat the same values. Wide-open ray failure is associated with source surfaces 5→6 crossing along the ray path. A source correction is needed before claiming full-aperture performance.

## Verification

Stage 1: typecheck, format check, lint, all 2,906 tests (309 files), production build/prerender (1,251 routes), and the two-lens working-aperture audit passed.
