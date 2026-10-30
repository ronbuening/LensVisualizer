# Canon EF-S 10–18mm f/4.5–5.6 IS STM — optical analysis

## Patent reference and production correlation

**Patent:** JP 2015-031869 A\
**Application:** JP 2013-162437\
**Filed:** 2013-08-05\
**Published:** 2015-02-16\
**Inventor:** Makoto Nakahara (中原 誠)\
**Applicant:** Canon Inc.\
**Title:** Zoom Lens and Imaging Apparatus Having the Same\
**Example details:** Numerical Example 1 (数値実施例1)

The selected prescription is the literal, unscaled Numerical Example 1 of the local original `patents/JP2015031869A.pdf`. Paragraph 0059/PDF page 10 gives all 26 surfaces and 14 material pairs; paragraph 0060 gives both aspheres through A12. Page 11 completes the zoom summary, four variable gaps and group/element powers. Paragraphs 0057–0058 on page 9 define the d-line coordinates, first-surface-to-image track and aspheric convention. Figure 1 on page 16 is the matching wide section, with Figure 2(a)/(b) on page 17 showing the wide/tele aberrations.

The production name remains a strong correlation from 14 elements/11 groups, focal/aperture range, four-unit architecture, one inferred UD position, two aspheric elements and the source focus/IS arrangement. Existing Canon product references identify the marketed EF-S 10–18mm f/4.5–5.6 IS STM, one UD element and two aspheric elements including one PMo member. They do not establish that the patent is the exact shipping prescription or identify a polymer, supplier, melt or manufacturing process. [Canon Camera Museum](https://global.canon/en/c-museum/product/ef431.html)

Marketed 10–18mm f/4.5–5.6 stays separate from source 10.30 / 13.96 / 17.46 mm and Fno. 4.64 / 5.19 / 5.71. The 2026-10-30 review restores those printed aperture targets from the source numerical summary and Figure 2, replacing 4.5 / 5.1 / 5.6. The iris remains derived under the existing paraxial convention; no physical diameter or cam is inferred from marketing values.

## Optical architecture and modeled media

The four-unit power sequence is negative / positive / negative / positive. Group 1 (S1–S10) contains five elements, Group 2 (S11–S21) six elements and the stop, Group 3 (S22–S23) the single negative focus element, and Group 4 (S24–S26A) a cemented doublet. Three cemented interfaces are retained without invented lands or layers. There are no source filters or camera-side plates in this numerical example.

The source group powers are −13.43 / +19.23 / −26.67 / +58.19 mm. Its first-surface-to-image tracks are 117.61 / 114.39 / 115.20 mm and BF 35.35 / 42.66 / 49.42 mm. Image height is 13.66 mm. The printed half-angles 52.98° / 44.37° / 38.04° do not independently certify the viewer's larger 14.175 mm APS-C corner or its exact distorted field mapping; those are checked with the runtime chief solver.

Paragraph 0057 explicitly defines nd and νd at the d line. Every catalog name below is a compatible spectral proxy, with historical supplier, melt, chemistry, cement, coating and manufacture unresolved. Standalone focal lengths are source-rounded element values, not in-system contribution estimates.

| Element | Source surfaces | nd / νd        | Source element f, mm | Qualified disposition                                                      |
| ------- | --------------- | -------------- | -------------------: | -------------------------------------------------------------------------- |
| L1      | 1 / 2           | 1.77250 / 49.6 |               −37.58 | S-LAH66 proxy; front negative meniscus                                     |
| L2      | 3 / 4A          | 1.52996 / 55.8 |               −80.00 | Unmatched; production-correlated PMo position, polymer identity unresolved |
| L3      | 5 / 6           | 1.77250 / 49.6 |               −27.47 | S-LAH66 proxy; negative meniscus                                           |
| L4      | 7 / 8           | 1.59522 / 67.7 |               −34.55 | S-FPM2 proxy; lower-dispersion negative member                             |
| L5      | 9 / 10          | 1.72047 / 34.7 |               +27.94 | S-NBH8 proxy; positive member of front unit                                |
| L6      | 11 / 12         | 1.48749 / 70.2 |              +160.44 | S-FSL5 proxy; source IS singlet Ls                                         |
| L7      | 13 / 14         | 1.91082 / 35.3 |               −19.86 | TAFD35 proxy; negative member of D1                                        |
| L8      | 14 / 15         | 1.60342 / 38.0 |               +14.48 | S-TIM5 proxy; positive member of D1                                        |
| L9      | 17 / 18         | 1.83481 / 42.7 |               −10.62 | S-LAH55 proxy; negative member of D2                                       |
| L10     | 18 / 19         | 1.64769 / 33.8 |               +14.28 | S-TIM22 proxy; positive member of D2                                       |
| L11     | 20 / 21         | 1.49700 / 81.5 |               +17.28 | S-FPL51 proxy; production-correlated inferred UD position                  |
| L12     | 22 / 23         | 1.91082 / 35.3 |               −26.67 | TAFD35 proxy; source focus singlet LF                                      |
| L13     | 24 / 25         | 1.91082 / 35.3 |               −16.82 | TAFD35 proxy; negative member of D3                                        |
| L14     | 25 / 26A        | 1.58313 / 59.4 |               +14.50 | S-BAL42 proxy; rear aspheric member of D3                                  |

The original prints no per-material C/F/g indices, partial-dispersion values or APD measurements. Thirteen compatible curves remain available; L2 remains Unmatched. No catalog-derived per-lens spectral override exists or is added. Figure 2's d/g aberration curves are contextual design evaluations, not material index measurements. L11's former `apd: "patent"` claim is corrected to `inferred`: the high-Abbe coordinate and production UD count support that qualification, while the original supplies no patent APD number. The production PMo correlation does not prove cyclo-olefin, acrylate, resin chemistry or injection-molding conditions. Catalog family names likewise do not establish the source media's chemical composition.

## Original-PDF shape review — 2026-10-30

The local original was rendered and compared directly. Figure 1 is a native 1002 × 699 JPEG at about 200 ppi. The prescription pages are vector text, rendered separately at 200 ppi; enlarging the JPEG adds no source resolution. Against the 117.61 mm axial track and retained front caps the section is about 7.74 native px/mm, with practical ±0.6 mm rim uncertainty. SP/IP arrows, unit brackets, focus/zoom arrows and the axis are excluded from optical measurements.

The prior table/glass review keeps its 2026-05-19 date. The S1 21.3 mm and S4A 14.8 mm corner-clearance correction keeps its actual 2026-09-24 date. Those clear caps remain; the current review adds source-supported outer shoulders and revises other inferred caps where the native curved outlines were visibly larger than the model. These are drawing estimates rather than published aperture dimensions.

| Surfaces        | Previous clear sd, mm | Adopted clear sd, mm | Figure disposition                                         |
| --------------- | --------------------- | -------------------- | ---------------------------------------------------------- |
| S5              | 11.2                  | 10.1                 | Front cap follows the native smaller singlet outline       |
| S11 / S12       | 3.5 / 3.3             | 4.9 / 4.9            | Complete weak curved faces of source IS singlet            |
| S13 / S14 / S15 | 3.0 / 2.8 / 2.3       | 4.9 / 4.9 / 4.9      | Drawn D1 curved caps and cemented interface                |
| S17 / S18 / S19 | 2.9 / 3.1 / 3.9       | 5.6 / 5.6 / 5.6      | Drawn D2 curved caps and cemented interface                |
| S20 / S21       | 3.9 / 4.7             | 6.0 / 6.0            | Source biconvex singlet endpoints                          |
| S22 / S23       | 4.9 / 5.0             | 6.2 / 6.2            | Both concave ends of source focus singlet                  |
| S24 / S25       | 6.3 / 6.4             | 8.4 / 8.4            | Source rear-doublet front and cemented cap; S26A stays 8.4 |

Four resolved air-facing shoulders use `rimExtensionSd`: S2 outer 21.3 with clear 16.9, S4A outer 16.7 with clear 14.8, S6 outer 10.1 with clear 8.2, and S7 outer 9.4 with clear 8.2 mm. Their native vertical strokes continue beyond curved optical caps; no bonded-interface land is introduced. Equal cap heights in the three doublets follow complete curved outlines in Figure 1, not unsupported opaque blocks. L2 is modeled as one aspheric element, not a bonded resin layer or disconnected wing.

Rejected trial: extending S6 and S7 optical caps to 8.8 / 9.4 mm gives 6.19 mm combined sag against the unchanged permitted 5.274 mm intrusion in source d6 = 5.860 mm. Keep both 8.2 mm clear caps and express the resolved outer strokes as shoulders. The native drawing does not authorize altering R6/R7, d6 or the geometry guard. S2/S3 also retain their near-spherical rim limits; S4A's clear cap stays within its actual conic domain. There are no inferred cuts. All printed R/d, both aspheres, stops and focus/zoom gap values are retained.

## Aspheric, focus and IS constraints

Paragraph 0058 defines the conic-plus-even-polynomial sag convention. S4A has R = +12.302 mm, K = −0.475949 and A4/A6/A8/A10/A12 = −3.84236e−5 / −7.63390e−8 / −6.26237e−10 / +3.48984e−12 / −1.12759e−14. S26A has R = −19.588, K = 0 and +1.25041e−5 / −1.14292e−7 / +4.98491e−9 / −1.03089e−10 / +7.40509e−13. These printed values are unchanged. No source manufacturing process follows from their polynomial form.

The source assigns the negative L12 unit LF to focus, moving imageward. It gives only infinity gap rows. Existing close-end reconstructions target 0.22 m with L12 travel +0.28 / +0.44 / +0.64 mm, preserving complementary d21/d23 changes. They remain modeled finite conjugates, not published cams, and are not retuned in this review.

The source identifies L6 as the single positive IS member Ls ahead of the stop. No calibrated transverse travel is authored. Centered aperture, field and pupil checks do not certify moved-IS performance. Product drive, stabilization rating and optical manufacturing claims remain separate from the literal numerical prescription.

## Current runtime and SVG verification

The printed aperture-target restoration changes derived iris radii to 4.389875 / 4.367403 / 4.353613 mm at the three source zooms. The census reproduces source 4.64 / 5.19 / 5.71 under its paraxial-reference convention. Independent aimed real working f-numbers are 4.662604 / 5.242989 / 5.794296, using 1/(2 n′ sin θ′). This is a separate metric, and neither proves a source physical iris schedule.

| First-order quantity                       |      Wide |    Middle |      Tele |
| ------------------------------------------ | --------: | --------: | --------: |
| EFL from literal prescription, mm          | 10.301524 | 13.964150 | 17.461241 |
| BFD from literal prescription, mm          | 35.354101 | 42.661186 | 49.421650 |
| Retained source image gap, mm              |     35.35 |     42.66 |     49.42 |
| Infinity defocus, mm                       | +0.004101 | +0.001186 | +0.001650 |
| Reconstructed close conjugate residual, mm | +0.001193 | +0.017035 | −0.011812 |

A 65-position diagnostic clone matches the actual runtime z/sd geometry at every sampled zoom and focus 0/0.5/1 (maximum difference zero). All 65 infinity aperture stations fall within the unchanged 3% criterion, and the field audit reaches at least 99%. A separate 65 zoom × 21 focus first-order/shape grid retains intermediate infinity defocus to −0.617781 mm; the worst finite residual is −0.827938 mm at zoom 0.28125 / focus 0.6. Three source stations do not define the continuous compensator or focus cams. The interpolation remains illustrative, without source-data fitting.

At 21 zoom × 21 focus positions × six presets, the source-cap/printed-target candidate traces all 2646 real working calls; the baseline traced 1323 and vignetted 1323, chiefly at undersized S11/S15/S14/S13. A separate current-iris 193-point pupil at 65 zoom × five focus positions × four fields yields 1300 field states. The minimum axial count improves from 97/193 to 193/193. Source-station infinity corner counts improve from 54 / 71 / 77 to 101 / 149 / 160; close counts become 101 / 151 / 161. Off-axis clipping remains explicit and is not a production illumination measurement. No cap or iris is tuned beyond the source-supported geometry to force full transmission.

Surface validation passes and image-circle audit reports zero undersized lenses. At 65 zoom × 21 focus states, all 19,110 actual SVG element paths are finite, closed and connected, with zero hidden renderer trimming. All 1365 APS-C corner chiefs clear near 14.175 mm. Wide/middle/tele SVGs were visually compared with the native wide source section; no nonexistent tele section is substituted. Source fidelity, centered runtime, qualified spectral behavior, interpolation/focus limits and production correlation remain separate conclusions.

## Sources

- [JP 2015-031869 A](https://patents.google.com/patent/JP2015031869A/en), exact local original: paragraphs 0057–0060, Numerical Example 1, Figures 1–2.
- [Canon Camera Museum — EF-S10–18mm f/4.5–5.6 IS STM](https://global.canon/en/c-museum/product/ef431.html), retained production-correlation reference; not proof of a historical source prescription or material identity.
- Existing project OHARA/HOYA catalog curves, qualified by source d-line coordinates; no claim of historical supply or melt.

## Runtime Launch Qualification - 2026-10-30

This is a runtime-only supplement to the dated source/shape/glass review above. No original PDF was reinspected for this supplement; source review dates, prescription values, controls and review counts remain unchanged. Earlier pupil/chief grids labeled near or close sampled **collimated rays through focus-adjusted geometry**. Those labels identify the control geometry, not finite-object illumination. Independently computed finite paraxial residuals and exact-working-f-number probes remain separate; the latter use the runtime distance-label object plane.

The explicit finite-object supplement samples 20 positive focus positions at nine zoom positions. The complete current ABCD matrix, including any rear plates, supplies the real Gaussian object plane. A paraxial entrance-stop seed and inverse chief solve target actual image heights 0, 7.0875 and 14.1750 mm; paraxial object-height scaling alone is not accepted as the actual image-edge solve. Geometric roots are solved before current-aperture classification. The 14.1750 mm edge is the viewer format corner, which may exceed the selected source's image height; these probes do not establish production illumination or source support for an inferred continuous cam.

Of 180 positive-real-object geometries, 540/540 target chiefs converge: 540 clear the current caps and 0 clip. Across the converged fields, 193 current-iris samples per field give 94,378 passed, 9,842 clipped, 0 failed and 0 unaimed rays. Minimum sampled axial transmission is 193/193. No clear aperture, R/d, stop, cam, tolerance or source field is altered to clear those diagnostics.

Selected current close geometries, with Gaussian conjugates and their exact aimed bundle counts:

| Zoom control | Aberration control | Gaussian object-to-image (m) | Distance label (m) | Axis / half / edge passing of 193 | Chief result          |
| -----------: | -----------------: | ---------------------------: | -----------------: | --------------------------------- | --------------------- |
|            0 |                  0 |                  0.220157802 |           0.220000 | 193 / 180 / 103                   | clear / clear / clear |
|          0.5 |                  0 |                  0.221282271 |           0.220000 | 193 / 183 / 149                   | clear / clear / clear |
|            1 |                  0 |                  0.219456993 |           0.220000 | 193 / 187 / 161                   | clear / clear / clear |

The largest sampled relative difference between a positive Gaussian object-to-image conjugate and its distance label is 92.969174% at zoom 0.25, focus 0.05, aberration control 0: Gaussian 0.309356345 m versus label 4.400000000 m. This is a first-order conjugate/control distinction, not a new production-distance measurement. Nominal infinity controls remain in their separate collimated checks; their small rounding residual is not converted into a finite-source claim.
