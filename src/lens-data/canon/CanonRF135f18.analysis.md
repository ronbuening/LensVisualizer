# Canon RF 135mm f/1.8 L IS USM

## Patent Reference

**Patent:** US 2023/0213745 A1 — *Optical System and Image Pickup Apparatus Having the Same*

**Inventor:** Takeharu Nakada (Canon Kabushiki Kaisha, Tokyo)

**Filed:** December 29, 2022 | **Published:** July 6, 2023

**Priority:** JP 2022-000018 (January 1, 2022)

US 2023/0213745 A1, Takeharu Nakada, Canon, Numerical Example 4. The original scanned PDF supplies the numerical table on page 15 (printed page 5) and the corresponding cross-section in Figure 7 on PDF page 8. The older audit's Figure 5 reference concerns a different example.

The source design is 130.95 mm, f/1.86, half-field 9.38° and image height 21.64 mm. The marketing name retains 135 mm f/1.8; no scaling is applied to the numerical prescription.

## Architecture

Seventeen spherical glass elements form twelve air-separated components, including five cemented doublets. The patent organizes these into positive L1, negative focusing L2 and positive L3. L3a is doublet D3; stabilization subunit L3b contains elements 10–11; L3c contains the remaining rear optics. The viewer models centered optics: no lateral stabilization displacement is simulated. There is no zoom control.

## Element by element

| Element | Source nd / vd | Calculated isolated focal length (mm) | Description |
|---|---|---|---|
| L1 | 1.84666 / 23.8 | 144.6 | Positive front singlet of fixed unit L1 |
| L2 | 1.497 / 81.5 | 170.2 | Low-dispersion positive singlet of fixed unit L1 |
| L3 | 1.497 / 81.5 | 121.9 | Positive front element of cemented doublet D1 |
| L4 | 1.77047 / 29.7 | -45.7 | Negative rear element of cemented doublet D1 |
| L5 | 1.497 / 81.5 | 67.8 | Positive front element of cemented doublet D2 |
| L6 | 1.77047 / 29.7 | -194.8 | Negative rear element of cemented doublet D2 |
| L7 | 1.618 / 63.4 | -62.5 | Single plano-concave element forming moving focus unit L2 |
| L8 | 1.92286 / 20.9 | -74.8 | Negative front element of cemented doublet D3 in fixed subunit L3a |
| L9 | 1.804 / 46.5 | 45 | Positive rear element of cemented doublet D3 |
| L10 | 1.92286 / 20.9 | 105.4 | Positive meniscus in stabilization subunit L3b; lateral motion not simulated |
| L11 | 1.91082 / 35.3 | -37 | Negative singlet in stabilization subunit L3b; lateral motion not simulated |
| L12 | 1.60311 / 60.6 | 38.5 | Positive front element of cemented doublet D4 in subunit L3c |
| L13 | 1.84666 / 23.8 | -56.1 | Negative rear element of cemented doublet D4 |
| L14 | 2.00069 / 25.5 | 42.3 | High-index positive singlet in subunit L3c |
| L15 | 1.65844 / 50.9 | -31.2 | Negative front element of cemented doublet D5 |
| L16 | 1.80518 / 25.5 | 45.5 | Positive rear element of cemented doublet D5 |
| L17 | 1.58913 / 61.1 | -115.1 | Negative rear meniscus of fixed unit L3 |

Individual focal lengths are paraxial thick-lens calculations, not a patent-listed individual-element table. The existing one-decimal values agree with recalculation. Surface radii, thicknesses and material coordinates match Numerical Example 4.

## Glass

All seventeen source nd/vd pairs are retained. Catalog names identify compatible optical counterparts, not published production identities. In particular, S-FPL51 does not establish Canon proprietary UD chemistry, and NBFD29 compatibility does not prove titanium content or anomalous dispersion of the patent material. The source provides no partial-dispersion data for these rows; five inferred APD badges on elements 2–6 are removed. No substitute vendor, resin or process claim is introduced. Previously code-labelled element 11 can now name compatible TAFD35 from the local catalog.

## Focus

Only L7, the single plano-concave element in L2, moves toward the image. Source d11 increases 2.45→20.66 mm and d13 decreases 24.03→5.82 mm, preserving their 26.48 mm sum. Travel is 18.21 mm. L1, the stop and all of L3 remain fixed. Intermediate slider positions interpolate these gaps; the patent publishes the endpoint configurations.

The source contains a 1.50 mm plate at nd=1.51633 followed by 0.80 mm of air. Both plate surfaces are excluded from the lens model. The last glass surface's rear air must therefore be 12.63 + 1.50/1.51633 + 0.80 = 14.4192305765 mm, consistent with the rounded patent BF=14.42 mm. The former BF=12.63 mm omitted that optical path; no camera-body plate is separately traced here.

Paraxial propagation of the rounded near prescription gives object-to-image distance 0.699370427 m and magnification −0.260722168. This calculated distance replaces the rounded 0.70 m endpoint label. Calculated infinity EFL is 130.939355638 mm versus published 130.95 mm; total air-equivalent track is 148.569230576 mm versus published 148.55 mm. These small source-summary differences are retained explicitly rather than fitting radii or spacings. The source infinity plane has a small residual paraxial defocus from rounded data.

The nominal aperture remains f/1.86; the first aperture button is corrected from f/1.8 to f/1.86. The remaining stop-down choices are viewer settings, not a patent iris schedule.

## Aspheres

None: Numerical Example 4 is entirely spherical.

## Semi-diameter notes

No effective-diameter column is published. Figure 7 was rendered at 600 dpi and compared using the lens-only vertex span of 134.15 mm. The large front group, narrowing toward the stop, compact L3a and widening rear group agree with the existing estimated rims within the figure procedure's tolerance. No SD changes are justified by strong figure evidence or an image-circle failure. Surface validation, image-circle coverage and render diagnostics pass with the existing SDs; they remain estimates rather than published apertures.

## Sources

- Local original patents/US20230213745A1.pdf: Numerical Example 4, paragraph 53, PDF page 15; Figure 7, PDF page 8.
- [US 2023/0213745 A1 patent record](https://patents.google.com/patent/US20230213745A1/en).
- Local glass catalog for explicitly qualified compatible counterparts.
