# SCHACHT TRAVEGON 35mm f/3.5 — Audit Log

## Source

[DE 1,020,809 B, _Objektiv_](https://patents.google.com/patent/DE1020809B/), Beispiel 2, table on PDF p. 2 and claim 5 on p. 3. Ludwig Bertele of Heerbrugg is both applicant and inventor; no company assignee is named. Filed 12 January 1955, published 12 December 1957, with Swiss priority of 18 June 1954. The patent names the three groups Glieder A, B and C.

## Transcription Check

The 300 dpi page images show nine radii, nine axial entries including the iris split, and six nd/νd pairs. The table and claim 5 agree; the transcribed values agree after scaling radii and axial distances by 0.35 from the printed 100 mm design to 35 mm. All surfaces are spherical and no finite-focus spacings are printed.

The first air gap follows the table's 18.26 mm rather than the text's inconsistent 0.1836 F. Group A's printed −1.47 F approximates the calculated −1.465 F. The iris split is discussed below because its ordering is inferred.

## First-Order Check

| Quantity | Patent | Model at 35 mm scale |
| --- | --- | --- |
| Focal length | 100 mm | 35.003 mm, equivalent to 100.009 mm before scaling |
| Aperture | f/3.5 | f/3.5 |
| Paraxial back focal distance | Not printed | 33.656 mm, equivalent to 96.159 mm before scaling |
| Total track to image | Not printed | 62.85 mm |
| Full field | 64° | 64° |
| Iris radius | Not printed | 4.571 mm |
| Infinity image defocus | Not printed | ≈0 mm |

The three cemented-group focal lengths are −51.26, +83.05 and +23.65 mm. The surfaces stay clear of each other; the iris sets the full aperture. At 32° half-field, the chief-ray image height is 21.54 mm, or 99% of the 21.65 mm film half-diagonal; the 32.1° corner chief ray clears. At image height 21.63 mm, there is no axial clipping or blocked chief ray, but group C's rim clips one side of the beam (10% at surface 8, 15% at surface 9). At f/3.5 the rims pass 58.6% of the beam at 32°.

[US 2,772,601](https://patents.google.com/patent/US2772601A/en) Example 2 rounds the same design at about 1.0055 times the German dimensions. Its back-focus number is not legible in the available text extraction. Its convention is paraxial: Example 1 prints 98.5 mm, agreeing with the computed 98.54 mm of German Beispiel 1. The paraxial image plane used here is consistent with that convention.

## Values Not Printed in the Patent

All clear semi-diameters are inferred, including the 12.5 mm front rims. The patent drawing depicts Beispiel 1, so it supports the architecture and proportions without specifying the exact Beispiel 2 rims; the 2026-11-20 rim review below compares them with it.

The model places 5.06 before the iris and 2.90 after it in patent units, reversing the printed order. The printed order would place the iris 1.015 mm behind surface 6, inside L4's rear rim, which reaches 1.18 mm behind the vertex where its curve ends at 5.7 mm. The patent drawing and [AllPhotoLenses diagram](http://allphotolenses.com/public/files/optical/b361f4c9a9c43e7ab72b9a1b1571b10c.png) place the iris near C. The retained position is 23.10 mm from the first vertex; the radius is derived from f/3.5. Physical iris placement remains inferred.

The image plane is the calculated paraxial infinity back focus. The 0.5 m minimum, eight-blade diaphragm and f/3.5–16 stop range are product data, not patent values. No anomalous-dispersion designation or separately tabulated spectral-line indices have been added.

## Product Identification

Beispiel 2 may be the Travegon's design. [AllPhotoLenses](https://allphotolenses.com/lenses/item/c_3226.html) credits Bertele and lists 35 mm f/3.5, six elements in three groups, full-frame 35 mm SLR use, M42 and a 0.5 m minimum. Its diagram shows Beispiel 2's flat group-B interface and thick L4. No Schacht factory prescription confirms the identification.

AllPhotoLenses lists eight blades and f/3.5–16, likely for the early chrome version; those aperture values are used here. The same reference distinguishes a later black version with six blades and f/22. [Kamerastore](https://kamerastore.com/en-us/products/a-schacht-ulm-35mm-f3-5-r-travegon-exakta) documents Exakta. An [MFlenses discussion](https://forum.mflenses.com/schacht-travegon-vs-other-retrofocus-wide-angles-t52837.html) describes an automatic Exakta version. [Flashback Camera](https://flashbackcamera.jp/en/products/024698-leica-copy-travegon-35mm-f35-l) documents a rangefinder-coupled Leica-thread version with six elements in three groups and a 1 m minimum. The 0.5 m value therefore does not describe every version.

## Corrections, 2026-11-20

- The lens name is SCHACHT TRAVEGON 35mm f/3.5 and the maker is Schacht.
- The subtitle now reads “DE 1,020,809 B, Example 2 — Bertele” (Beispiel 2 in the German text), naming the inventor. No company is attributed as assignee because this is Bertele's personal application.
- The specifications are “6 ELEMENTS / 3 GROUPS”, “DESIGN F/3.5” and “ALL SPHERICAL”.
- The author name was shortened from Ludwig Jakob Bertele to Ludwig Bertele, matching the front page. Patent number, year and the absence of a company assignee were retained.
- Exakta, M42 and Leica-thread mounts and a 0.5 m marketing minimum were added from the product references above. Counts remain six elements and three groups, format remains 35 mm full frame, and both design and marketing values remain 35 mm and f/3.5.
- The former 1 m modeled focus limit was replaced by infinity-only operation, with `focus.closeFocusM` set to `1e15` and a description stating that no finite-focus spacings are supplied. The 0.5 m product minimum is recorded separately.
- Generic element descriptions were replaced by the actual shapes: positive meniscus, negative meniscus, plano-convex positive, plano-concave negative, biconcave negative and biconvex positive. Each element received its positive or negative role in A, B or C. Calculated in-air focal lengths were added: +40.71, −21.19, +23.92, −24.19, −20.79 and +11.73 mm.
- Brackets identify cemented pairs C1–C3 and the patent's groups A, B and C over surfaces 1–3, 4–6 and 7–9.
- Four previously unidentified glasses received catalog equivalents, with the differences below measured as catalog minus printed coordinates. L3 and L5 remain unidentified at the printed nd/νd values.

| Element | Former description → catalog equivalent | Δnd | Δνd |
| --- | --- | ---: | ---: |
| L1 | Unmatched → LAF3 (Hoya) | 0 | +0.08 |
| L2 | Unmatched → K10 (Schott) | 0 | −0.09 |
| L4 | Unmatched → FF5 (Hoya) | 0 | +0.05 |
| L6 | Unmatched → LAK6 (Sumita) | 0 | 0 |

Discontinued Sumita LAK6 matches the printed coordinates exactly; Hoya LAC6 has Δnd = 0 and Δνd = −0.14. Hikari J-LF7, nearest to L5, has Δνd = +0.21; L5 remains unidentified at nd 1.57501 and νd 41.3. L3 remains unidentified at nd 1.72019 and νd 50.3. These equivalents do not identify a historical supplier or melt.

- An eight-blade iris was added from AllPhotoLenses, likely describing the early chrome version. The f/3.5–16 range follows that source; the later six-blade, f/22 version is described separately.

EFL is 35.003 mm, f-number is 3.5, BFD is 33.656 mm, total track is 62.85 mm, iris radius is 4.571 mm and half-field is 32.0°. Infinity defocus is negligible.

### 2026-11-20 rim review

- Source: the patent's only drawing (PDF p. 4) shows Beispiel 1. Its vertex spacings match Beispiel 1's table at 11.8 px per patent millimetre at 300 dpi: 1,017 px from first to last vertex for 86.0 mm, with l1 and d6 within 1%. L1's drawn knife edge lies within 5% of the computed one, so the drawing is close to scale. Beispiel 2's thicknesses differ (L4 is twice as thick), so only shapes and relative heights were taken from it.
- Readings at the 35 mm scale: front rims 11.8 mm; L2's rear curve ends at 7.7 mm, then a flat step to 8.9 mm and a chamfer to the 11.8 mm edge; L3 and L4 share a 6.0 mm edge; L4's rear curve ends at 4.9 mm with chamfered corners; group C is square-cut at 4.6 mm; the iris is drawn at 3.5 mm.
- Surface 3: 8.5 mm kept, with a new flat step out to 9.4 mm. In the drawing the step ends at 0.76 of the element's edge height.
- Surface 6: 7 → 5.7 mm, with a flat step out to the 7 mm edge. The drawn curve ends at 0.82 of the edge. The old 7 mm rim also reached 0.05 mm past the iris plane.
- Surfaces 7 and 8: 6.5 → 6.7 mm. Surface 9: 7.5 → 6.7 mm. Group C is now square-cut, as drawn.
- Kept:
  - Front rims, 12.5 mm: 6% above the drawing's proportion, and L1 runs nearly to a knife edge as drawn. At 12.0 mm the corner would lose 0.6 points.
  - L2's rear curve, 8.5 mm: 8.0 mm would cut 7.7 points of corner light.
  - L3 and the cemented face, 7 mm: 6.3 mm would cut 13 points at 29°.
  - Group C at 6.7 mm: 6.6 mm costs 3.0 points at 32° and 6.5 mm costs 4.3. The drawing's 4.6 mm is inside the f/3.5 axial beam, which is 4.75–4.98 mm here; it is smaller than that beam in Beispiel 1 too, so the drawing is not literal there.
- Results: at f/3.5 the rims pass 58.6% of the beam at 32° (60.5% before) and 69.5% at 29.1° (70.6%), unchanged at smaller angles. EFL 35.003 mm, f/3.5 and the 32° half-field are unchanged. The axial beam clears every surface, no chief ray is blocked, and corner coverage stays at 99%. Surface and aperture checks pass, and the iris still sets the full aperture.

## Remaining Questions

- No Schacht factory prescription or maker optical drawing establishes the product identification conclusively.
- No Beispiel 2 drawing or production lens measurement fixes the rim sizes; the rims follow the Beispiel 1 drawing's shapes within the f/3.5 beam and corner-light limits. Iris placement remains inferred.
- L3 and L5 have no close catalog match. Historical glass suppliers, melts and unlisted partial dispersion remain unknown; apochromatic performance is not established.
- No finite-focus spacing law is published. The 0.5 m minimum and eight-blade, f/16 specifications come from the M42 reference, likely describing the early chrome version; other versions differ.
- No cited source describes blade roundedness, so that value is omitted. The 64° design field does not establish an independently measured production image-circle diameter, which is also omitted.
