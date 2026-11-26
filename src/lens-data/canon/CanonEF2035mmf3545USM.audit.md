# CANON EF 20-35mm f/3.5-4.5 USM — Audit Log

## Source

[JP H06-230281 A, _Zoom Lens_ (ズームレンズ)](https://patents.google.com/patent/JPH06230281A/ja), Tsunefumi Tanaka, Canon Inc. Application H05-40504 was filed February 4, 1993, and published August 19, 1994. The model follows Numerical Example 1. Page 4 gives its prescription and both variable spacings at three zoom settings. Figure 1 shows the wide-angle section, and Figures 4–6 give the open f-number, half-field and aberrations at each setting, all at −0.02× (§0017).

Canon's Camera Museum gives the March 1993 release, 12 elements in 11 groups, a five-blade diaphragm, f/22–27 minimum aperture, 0.34 m closest focus, 0.13× maximum magnification and a 77 mm filter. Its Japanese page describes a second-group zoom motion that holds distortion down, a widened barrel front, a flare-cutting diaphragm in the first group, and inner focusing driven by an ultrasonic motor with full-time manual focus. Imaging Resource lists a diagonal angle of view of 94° to 63°. Canon measures lens minimum focusing distance from the focal-plane mark. [Canon Camera Museum](https://global.canon/en/c-museum/product/ef316.html) · [Canon Camera Museum, Japanese description](https://global.canon/ja/c-museum/product/ef316.html) · [Canon construction drawing](https://global.canon/ja/c-museum/wp-content/uploads/2015/05/ef316-lens-construction.gif) · [Imaging Resource specifications](https://imaging-resource.com/lenses/canon/ef-20-35mm-f3.5-4.5-usm/specifications) · [Canon on focusing distance](https://cam.start.canon/en/C007/manual/html/UG-02_BasicShooting_0110.html)

## Transcription Check

All 24 rows were reread against the 300 dpi page images. The 23 spherical refracting surfaces, the stop at surface 13, the 21 fixed thicknesses and air spaces, the 12 index and Abbe-number pairs and the six variable-gap values agree with Numerical Example 1. No row disagrees. The prescription is in millimetres at the printed scale.

The patent names no spectral line, and its index and Abbe-number pairs match d-line catalog glasses exactly. The iris lies 1.78 mm behind surface 12 and 0.92 mm ahead of surface 14. Surface 17 is the single cemented interface, between L33 and L34. The example has no aspherical surface.

The two variable gaps follow surfaces 4 and 10. D4 is 8.29, 10.28 and 8.29 mm, and D10 is 16.80, 10.50 and 1.49 mm at the wide, middle and telephoto settings. The zoom table heads these rows D5 and D11, but the prescription marks D4 and D10 as variable and gives D5 and D11 as glass thicknesses of 1.40 and 2.20 mm. Reading the rows as D4 and D10 reproduces all three printed focal lengths and the group movements in Figure 1. The Example 3 table carries the same heading slip.

## First-Order Check

| Quantity (wide / middle / telephoto)         | Patent                   | Model at infinity                           |
| -------------------------------------------- | ------------------------ | ------------------------------------------- |
| Effective focal length (mm)                  | 20.60 / 24.00 / 34.09    | 20.612 / 24.010 / 34.095                    |
| Open f-number                                | 3.5 / 4.0 / 4.5          | 3.50 / 4.00 / 4.50                          |
| Half-field (degrees)                         | 46.4 / 42.0 / 32.4       | 47.8 / 42.8 / 32.7 to the full-frame corner |
| Back focal distance from surface 24 (mm)     | Not printed              | 37.750 / 42.064 / 53.068                    |
| Film distance from surface 24 (mm)           | Not printed              | 37.754 / 42.064 / 53.064                    |
| Film distance minus paraxial back focus (mm) | Not printed              | +0.004 / +0.000 / −0.004                    |
| Group focal lengths, G1 / G2 / G3 (mm)       | −70.35 / −45.17 / +30.10 | −70.34 / −45.19 / +30.11                    |

The largest focal-length difference is 0.012 mm, at the wide end. The printed half-fields are paraxial: each gives an image height of about 21.6 mm through f·tan ω. The refracted chief ray reaches the 21.65 mm frame corner at every one of the 13 zoom settings, at 47.76° on the wide end. At the corner, about 23%, 70% and 75% of the open-aperture pupil passes at the three printed settings; these figures depend on the estimated rims. The axial beam at full aperture clears every refracting surface throughout the zoom. The film plane is fixed 111.394 mm behind surface 1.

## Values Not Printed in the Patent

- **Clear radii.** Figure 1 spans 73.64 mm from the first to the last vertex at the wide setting, or 4.307 px/mm on the page image. At that scale the front element has a clear radius of 26.8 mm. The stepped second element measures 20.5 mm at its front face and 16.2 mm at its rear, where a flat land drawn square to the axis carries the rim out to 20.5 mm. The drawing reads 10–12 mm at the rear rim of L21; 11.0 mm keeps that face clear of surface 7, which it would meet above about 11.6 mm, and a flat land carries L21 out to its drawn 14.7 mm edge. L22 is drawn square-cut at about 12.3 mm, so both of its faces use 12.2 mm. The facing rims at surfaces 20 and 21 are 8.0 mm each. Figure 1 draws L35 and L36 with edges of about 8.4 and 9.1 mm, and Canon's drawing about 8.6 and 8.8 mm, but the two facing curves would cross inside the 1.65 mm air space at about 8.1 mm; at 8.0 mm they are 0.06 mm apart. The model's overlap limit for neighbouring faces is set to 0.97 of the axial gap to allow this.
- **Aperture stop.** The iris position is printed. Its radius is calculated from the open f-number and the paraxial entrance pupil at each zoom setting: 6.48, 6.05 and 6.23 mm at wide, middle and telephoto. The opening drawn in Figure 1 is about 6.5 mm in radius at the wide setting.
- **Film position.** The three printed zoom settings put the paraxial image 111.3903, 111.3938 and 111.3982 mm from surface 1. Their mean fixes the film 111.3941 mm from surface 1. The rear air space changes with the axial position of G3.
- **Intermediate zoom stations.** D4 + D10 sets the travel of G3 relative to the fixed G1. Between consecutive printed settings that sum changes in equal steps; D4 is solved for infinity focus at the fixed film and D10 takes the remainder. The ten calculated stations hold the film within 0.00005 mm of paraxial focus, and linear motion between all 13 stations stays within 0.0169 mm. The open f-numbers at the intermediate stations step evenly between the printed values.
- **Focus.** `focus.closeFocusM` is 10¹⁵ m, which stands for infinity. The patent focuses by moving G2 (§0020) and allows G1 to focus instead (§0024), but prints no close-focus spacings. A paraxial calculation that moves G2 alone, with D4 + D10 held, reaches 0.34 m from the image plane after 3.30, 3.16 and 3.31 mm of travel toward the subject, with D4 at 4.992, 7.120 and 4.981 mm. The magnifications are −0.081×, −0.093× and −0.133× at wide, middle and telephoto. These positions are not part of the model.

| Surfaces | Clear radii (mm)                                 |
| -------- | ------------------------------------------------ |
| 1–4      | 26.8, 26.8, 20.5, 16.2 (land to 20.5)            |
| 5–10     | 14.7, 11.0 (land to 14.7), 12.2, 12.2, 11.2, 11.2 |
| 11–12    | 6.8, 6.8                                         |
| 14–18    | 7.0, 7.0, 7.5, 7.5, 7.5                          |
| 19–24    | 8.4, 8.0, 8.0, 9.1, 9.9, 9.9                     |

## Product Identification

Canon's construction drawing agrees with Numerical Example 1 element for element: a positive front meniscus and a stepped negative meniscus, a three-element inner-focus group, a thin biconvex element ahead of the iris and a thick one behind it, the single cemented pair, and three air-spaced rear elements. The drawing shows no aspherical or special-dispersion marking, and the patent prescription is spherical throughout. Rim heights in the drawing and in Figure 1 agree to about 0.5 mm. L31 measures about 2.3 mm thick in Canon's drawing, close to Example 1's 2.20 mm; Example 2 gives 3.36 mm, and Example 3 splits the cemented pair into 12 groups against Canon's 11. The application was filed one month before the lens went on sale. The match with Example 1 is strong, but Canon names no patent example. [Canon construction drawing](https://global.canon/ja/c-museum/wp-content/uploads/2015/05/ef316-lens-construction.gif) · [Canon Camera Museum](https://global.canon/en/c-museum/product/ef316.html)

The example's 20.60–34.09 mm range is marketed as 20–35 mm, and its f/3.5–4.5 apertures match Canon's. The published 94° and 63° diagonal angles of view are those of a rectilinear 20 mm and 35 mm lens on the full frame; the printed 46.4° and 32.4° half-fields give 92.8° and 64.8° at 20.60 and 34.09 mm. Canon's 0.34 m minimum focus is measured from the focal plane. The calculated G2 travel to 0.34 m from the image plane gives −0.133× at the telephoto end, matching Canon's 0.13×; the same distance from the front vertex would give −0.093×. [Canon Camera Museum, Japanese description](https://global.canon/ja/c-museum/product/ef316.html) · [Imaging Resource specifications](https://imaging-resource.com/lenses/canon/ef-20-35mm-f3.5-4.5-usm/specifications) · [Canon on focusing distance](https://cam.start.canon/en/C007/manual/html/UG-02_BasicShooting_0110.html)

## Corrections, 2026-11-25

- The zoom stations opened at f/3.456, f/3.944 and f/4.402, values set from an estimated real entrance pupil, and the middle aperture and field were treated as estimates. They now open at the printed f/3.5, f/4.0 and f/4.5, because Figures 4–6 print all three apertures and the 42.0° middle half-field.
- The trace was limited to the patent's paraxial 46.4° wide half-field, which left the wide setting about 5% short of the frame corner. The limit was removed, and the chief ray now reaches the 21.65 mm corner at 47.8°, 42.8° and 32.7°.
- The clear radii were replaced by the Figure 1 readings above. Most earlier rims were 4–47% larger than these readings: 32 mm on the front element, which left L11 an edge only 0.03 mm thick, and 10–13 mm in the rear group, where Figure 1 shows 6.8–9.9 mm. Surface 7 widens from 11.5 to 12.0 mm to its drawn edge. Surfaces 20 and 21 keep 7.7 mm, below the drawn edges of L35 and L36, because the facing curves would cross at the drawn heights.
- Ten calculated stations now lie between the three printed zoom settings, which stay as printed. Each holds the fixed film plane at infinity focus, so the model passes through intermediate focal lengths instead of only the three printed settings. Linear motion between stations departs from the film by at most 0.0169 mm.
- The zoom table's D5 and D11 headings are read as D4 and D10, as the Transcription Check explains. The spacing values are used as printed, and the prescription keeps its printed scale and d-line indices.
- The model stays focused at infinity, since the patent prints no close-focus spacings. Canon's 0.34 m minimum focus is recorded as the marketed value.
- Identity and product data: the inventor, Tsunefumi Tanaka, was added and the example is named Numerical Example 1. The catalog records 20–35 mm, f/3.5, a 0.34 m minimum focus, 12 elements in 11 groups and a five-blade iris. The aperture scale runs f/3.5, 4, 4.5, 5.6, 8, 11, 16, 22 and 27, using the open apertures at the three printed settings and Canon's f/22–27 minimum; it formerly began at the estimated f/3.456. The elements are named by group, L11 to L37, and L33–L34 are marked as cemented pair C1. The subtitle and specification line follow the patent and its product. [Canon Camera Museum](https://global.canon/en/c-museum/product/ef316.html)

Catalog glass equivalents were added for dispersion, retaining the printed nd and νd. The differences below are catalog minus patent. The CDGM H-BaF8 row for L32 is the only one that differs by more than 0.00001 in nd or 0.1 in νd.

| Elements | Catalog equivalent |          Δnd |   Δνd |
| -------- | ------------------ | -----------: | ----: |
| L11      | Ohara S-BSM15      |   +0.0000019 | −0.03 |
| L12, L34 | Ohara S-LAH51      |   −0.0000042 |  0.00 |
| L21      | Ohara LAH53        |   −0.0000024 | −0.05 |
| L22      | Ohara S-LAH66      |   −0.0000011 |  0.00 |
| L23, L33 | Ohara S-TIH53W     |  −0.00000032 | −0.02 |
| L31      | Ohara S-BAL42      |   −0.0000041 | −0.03 |
| L32      | CDGM H-BaF8        |    −0.000020 | −0.13 |
| L35      | Ohara S-LAH60V     |  −0.00000052 | +0.01 |
| L36, L37 | Ohara S-BSL7       | −0.000000075 | −0.06 |

At infinity the finished model gives 20.612, 24.010 and 34.095 mm EFL at f/3.50, f/4.00 and f/4.50, with 37.750, 42.064 and 53.068 mm of paraxial back focus from surface 24, iris radii of 6.48, 6.05 and 6.23 mm, and the full-frame corner at 47.8°, 42.8° and 32.7° half-field.

2026-11-25 rim review:

- The rims were compared again with Figure 1 at 12.9 px/mm (600 dpi; 73.64 mm from the first to the last vertex at the wide setting, checked radially against the curve of the front element) and with Canon's drawing. Where the two differ, Figure 1 governs.
- Surface 4: a flat land from 16.2 to 20.5 mm was added. Figure 1 draws L12 with a flat top at 20.5 mm and a vertical step down to its rear face at about 16 mm on both sides of the axis; Canon's drawing bevels this corner. The clear radius is unchanged.
- Surface 6: a flat land from 11.0 to 14.7 mm was added. Figure 1 draws L21 with a flat top at 14.6 mm and a vertical right edge down to the end of its rear face at about 11 mm. The clear radius is unchanged.
- Surface 7: 12.0 → 12.2 mm, so L22 is square-cut as drawn; Figure 1 shows a flat top at about 12.3 mm joining both faces.
- Surfaces 20 and 21: 7.7 → 8.0 mm. Figure 1 draws L35 and L36 to about 8.4 and 9.1 mm and Canon's drawing to about 8.6 and 8.8 mm, both larger than 7.7 mm; the facing curves allow 8.0 mm before they cross. These two faces limit the wide-corner light: opening other rims by 10% leaves it unchanged.
- Corner light at full aperture rose at every one of the 13 zoom settings and fell nowhere: 18.3% → 23.4% at 20.6 mm, 64.4% → 69.6% at 24.0 mm and 70.4% → 74.7% at 34.1 mm, with gains up to 5.5 points between the printed settings. The open f-numbers and the traced corner angles are unchanged, the axial beam still clears every surface, and the full-frame corner is still reached at every setting.

## Remaining Questions

- Canon gives no explicit link between this patent example and the production lens, and the production radii, glass suppliers and clear apertures are undocumented.
- The wide-corner illumination depends on the 8.0 mm rims at surfaces 20 and 21, which are limited by the facing curves rather than drawn. How the production lens separates these two elements, and its clear apertures there, are unknown.
- Canon places a flare-cutting diaphragm in the first group, but Figure 1 does not draw it and its size is unknown.
- Canon describes inner focusing without naming the moving group. The patent's examples focus with G2 and allow G1 instead. The production focus travel and the exact zoom motion between the printed settings are undocumented.
