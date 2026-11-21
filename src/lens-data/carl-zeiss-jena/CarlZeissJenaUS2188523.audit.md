# CARL ZEISS JENA 100mm f/2 (US 2,188,523 Design) — Audit Log

## Source

[US 2,188,523 A, _Photographic Objective_](https://patents.google.com/patent/US2188523A/en), Ludwig Bertele, assignor to Zeiss Ikon Aktiengesellschaft, Dresden. The application was filed September 14, 1938, with German priority January 8, 1938; publication was January 30, 1940. The sole numerical example is on PDF page 2, the section drawing on PDF page 1 and the three claims on PDF pages 2–3. The example prints f = 100 mm and an aperture of 1:2.

[DE 700,699 C, _Photographisches Objektiv_](https://patents.google.com/patent/DE700699C/de) describes the same invention with a different numerical example. Its table on PDF page 2 prints the 7.50/1.94 mm stop-space split used to infer the US iris position. The German R1 is 67.54 mm, compared with 68.41 mm in the US table; no German radius, thickness or glass pair replaces a US value.

Marco Kröger's [Sonnar history, §5.2](https://www.zeissikonveb.de/start/objektive/normalobjektive/sonnar.html) discusses the German design's connection to the Sonnar 2/5 cm and its absence from series production.

## Transcription Check

All ten signed radii, nine axial distances, seven refractive indices and seven Abbe numbers agree with the patent page images: 33 numerical values, with no transcription discrepancy. Dimensions retain the printed 100 mm scale in millimetres. Radius signs are explicit. The shared R4/R5 and R8/R9 interfaces give seven elements in three groups, arranged 1 | 3 | 3. No correction to a printed numerical value is needed.

The index heading is lowercase nd, interpreted in the model as helium d, approximately 587.6 nm. The patent does not print a numerical wavelength, so the heading alone does not establish the reference line. All three claims specify the lower-index biconcave element in the rear triplet; only claims 2 and 3 also specify its nearly equal concave radii, 44.84 and 41.79 mm in magnitude.

## First-Order Check

Calculated EFL is 100.05 mm against the printed 100 mm, a difference of 0.05 mm consistent with the table's precision. The paraxial f-number is 2.00, matching the printed f/2. Calculated back focus is 54.63 mm; the patent supplies no comparison value. The image plane is at this paraxial focus to within 0.00005 mm, without a minimum-spot adjustment. The first-to-last-surface length is 68.13 mm and the first-vertex-to-image distance is 122.76 mm. Paraxial and vector-refraction results agree.

The iris radius is 16.315 mm. Exact axial tracing admits an entrance radius of 24.74 mm, equivalent to f/2.02 by EFL divided by entrance diameter. The iris limits the axial beam; the optical rims pass it. The surfaces stay clear of each other, with a minimum glass edge thickness of about 1.28 mm and about 1.13 mm of clearance between R6 and R7 at their shared edge.

At the illustrative 10.0° half-field, the chief ray reaches an image height of 17.69 mm. Peripheral rays are vignetted by the inferred rims; neither full edge illumination nor measured factory performance follows from this chief-ray result.

## Values Not Printed in the Patent

The US patent gives no iris position or diameter, clear semi-diameters, back focus, field angle, image height or camera format. The 9.54 mm central air gap is divided 7.58/1.96 mm using the ratio of the German example's 7.50/1.94 mm split in 9.44 mm. This transfers only a ratio between different examples; it is not a US-patent dimension. The iris radius follows paraxial f/2.

The inferred clear semi-diameters from R1 to R10 are 30, 29.6, 25.4, 24.5, 22.9, 17.4, 17.3, 18.6, 19.9 and 21.1 mm. The drawing instead depicts nearly cylindrical triplets, about 23.7 mm in semi-height, with inner chamfers near 16 mm. The middle triplet therefore tapers from 25.4 to 17.4 mm and the rear triplet from 17.3 to 21.1 mm in the model, rather than following the drawing's full outer silhouette. No flat lands or rim cuts are present.

The 10.0° half-field is illustrative. No image-circle diameter is assigned because the patent prints neither a field angle nor a format. The selectable f/2–f/16 series is a modeling choice, not a documented iris range. `focus.closeFocusM` is 10¹⁵ m, which stands for infinity. All relative lens spacings are fixed; no finite-distance prescription or focusing law is supplied.

All seven glasses retain their printed nd/ν pairs and remain Unmatched. Dispersion away from the reference line is estimated from the index and Abbe number. No supplier, melt, measured spectral curve, partial dispersion or anomalous-dispersion designation is established.

## Product Identification

Kröger identifies DRP 700.699 as a lower-distortion Sonnar 2/5 cm that did not enter series production. This supports the Sonnar family connection, but no production lens is documented for the US numerical example. The seven-element, three-group arrangement alone does not identify a Jupiter-9. The title retains the patent's 100 mm design scale; Zeiss Ikon AG remains the patent assignee.

No marketed focal length, marketed f-number, marketed close-focus distance, mount, production image format, diaphragm blade count or blade shape is assigned. No detachable converter compatibility or alternative optical configuration is documented.

## Corrections, 2026-11-21

- The maker attribution changed from Zeiss Ikon to Carl Zeiss Jena, and the key and title use the maker-and-patent form. `visible` changed from false to true. The patent assignee remains Zeiss Ikon AG; a production identity is not established.
- The missing publication year became `source.patentYear: 1940`, from the patent's January 30, 1940 date. The patent number, inventor and sole-example designation agree with the source.
- The subtitle reads “US 2,188,523 A, sole example — Zeiss Ikon / Bertele.” The specifications are “7 ELEMENTS / 3 GROUPS”, “ALL SPHERICAL”, “DESIGN f = 100 mm” and “DESIGN F/2”, from the printed example and its construction.
- All seven index references changed from sodium D to helium d to follow the lowercase nd interpretation. The printed indices and Abbe numbers did not change; the source gives no numerical wavelength.
- Repeated element labels became Element 1 through Element 7. Optical roles and calculated in-air focal lengths were added: +133.12, +96.12, +99.68, −33.01, +105.71, −41.81 and +45.63 mm. The element shapes already agreed with the radius signs.
- Generic unidentified-glass descriptions became individual Unmatched labels carrying each printed pair. For every element, Δnd = 0 and Δν = 0; no catalog curve was assigned. The nominal BASF7 (Sumita) pair, 1.70154/41.1, differs from L2 by Δnd +0.00004 and Δν −0.10. Its dispersion curve gives νd 41.15, or Δν −0.05. Neither comparison establishes a historical glass identity, so L2 remains Unmatched.
- C1 identifies elements 2–4 and C2 identifies elements 5–7. Each cemented triplet has a spanning annotation; the three group captions identify the front singlet, middle triplet and rear triplet.
- The inferred stop split changed from 7.5366/2.0034 to 7.58/1.96 mm, following the German stop-space ratio while preserving the US gap of 9.54 mm. The derived iris radius changed from 16.321 to 16.315 mm. The exact accepted entrance radius changed from 24.741 to 24.740 mm; the corresponding f-number remains 2.02 to two decimal places.
- The last image distance was rounded to within 0.00005 mm of the calculated paraxial back focus, 54.626 mm. Computed back focus is unchanged. No radius, glass thickness, printed air separation or clear semi-diameter changed.
- `catalog.focalLengthMm.design` changed from 100 to 100.05 mm to describe the calculated EFL, while the printed design scale remains 100 mm. `catalog.imageCircleMm` was removed because the source gives neither a field angle nor a format; the 10.0° half-field remains illustrative.

After these corrections, EFL is 100.05 mm, paraxial aperture is f/2.00, back focus is 54.63 mm, iris radius is 16.315 mm, total track is 122.76 mm and half-field is 10.0°. The iris limits the axial beam, with no rim or propagation limit. No factory image-circle diameter is established.

## Remaining Questions

- The precise optical rim and chamfer dimensions remain uncertain; the tapered openings differ from the drawing's nearly cylindrical triplets.
- Historical glass suppliers, melt identities, spectral curves and partial dispersions are unknown.
- The US example's iris dimensions, factory field, baffles, finite focusing, tolerances and measured optical performance are undocumented.
- No exact production product, mount, image format, blade count or shape, marketed specifications, minimum focus distance or minimum iris opening is established. The f/16 endpoint is not a published limit.
