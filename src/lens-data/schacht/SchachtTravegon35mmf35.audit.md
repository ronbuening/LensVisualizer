# SCHACHT TRAVEGON 35mm f/3.5 — Audit Log

## Source

[DE 1,020,809 B, _Objektiv_](https://patents.google.com/patent/DE1020809B/), Beispiel 2, table on PDF p. 2 and claim 5 on p. 3. Ludwig Bertele of Heerbrugg is both applicant and inventor; no company assignee is named. Filed 12 January 1955, published 12 December 1957, with Swiss priority of 18 June 1954. The patent names the three groups Glieder A, B and C. No earlier audit record accompanied the prescription.

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
| Infinity image defocus | Not printed | 0 mm |

The three cemented-group focal lengths are −51.26, +83.05 and +23.65 mm. A check of the surface geometry finds no edge-thickness or overlap errors. The full-open f-number agrees with the stated value within 3%, with no rim limit or failed ray or iris calculation. The image-circle check finds no undersized field. At 32° half-field, the chief-ray image height is 21.54 mm, or 99% of the 21.65 mm film half-diagonal; the 32.1° corner chief ray clears. At image height 21.63 mm, there is no axial clipping or blocked chief ray, but surface 8 gives 14% one-sided vignetting and no lower boundary ray was found. These results do not establish full-pupil transmission at the corner.

[US 2,772,601](https://patents.google.com/patent/US2772601A/en) Example 2 rounds the same design at about 1.0055 times the German dimensions. Its back-focus number is not legible in the available text extraction. Its convention is paraxial: Example 1 prints 98.5 mm, agreeing with the computed 98.54 mm of German Beispiel 1. The paraxial image plane used here is consistent with that convention.

## Values Not Printed in the Patent

All clear semi-diameters are inferred, including the 12.5 mm front rims. The patent drawing depicts Beispiel 1, so it supports the architecture without specifying the exact Beispiel 2 rims. Front, cemented and rear-contact rims still need comparison with suitable source figures.

The model places 5.06 before the iris and 2.90 after it in patent units, reversing the printed order. The printed order would place the iris 1.015 mm behind surface 6, inside L4's 1.82 mm sag at a 7 mm semi-diameter. The patent drawing and [AllPhotoLenses diagram](http://allphotolenses.com/public/files/optical/b361f4c9a9c43e7ab72b9a1b1571b10c.png) place the iris near C. The retained position is 23.10 mm from the first vertex; the radius is derived from f/3.5. Physical iris placement remains inferred.

The image plane is the calculated paraxial infinity back focus. The 0.5 m minimum, eight-blade diaphragm and f/3.5–16 stop range are product data, not patent values. No anomalous-dispersion designation or separately tabulated spectral-line indices have been added.

## Product Identification

Beispiel 2 may be the Travegon's design. [AllPhotoLenses](https://allphotolenses.com/lenses/item/c_3226.html) credits Bertele and lists 35 mm f/3.5, six elements in three groups, full-frame 35 mm SLR use, M42 and a 0.5 m minimum. Its diagram shows Beispiel 2's flat group-B interface and thick L4. No Schacht factory prescription confirms the identification.

AllPhotoLenses lists eight blades and f/3.5–16 for the early chrome version, matching the aperture data used here. The same reference distinguishes a later black version with six blades and f/22. [Kamerastore](https://kamerastore.com/en-us/products/a-schacht-ulm-35mm-f3-5-r-travegon-exakta) documents Exakta. An [MFlenses discussion](https://forum.mflenses.com/schacht-travegon-vs-other-retrofocus-wide-angles-t52837.html) describes an automatic Exakta version. [Flashback Camera](https://flashbackcamera.jp/en/products/024698-leica-copy-travegon-35mm-f35-l) documents a rangefinder-coupled Leica-thread version with six elements in three groups and a 1 m minimum. The 0.5 m value therefore does not describe every version.

## Corrections, 2026-11-20

- The lens was added to the visible catalog under its product name, with a product-based page address. Field names and punctuation were made consistent. The name remains SCHACHT TRAVEGON 35mm f/3.5 and the maker remains Schacht.
- The header now states the patent, example, 0.35 scale, printed d-line glass coordinates, inferred rims and iris, paraxial image plane and iris-order explanation. Its wording now describes the comparison with the Travegon directly.
- The subtitle now reads “DE 1,020,809 B, Example 2 — Bertele” (Beispiel 2 in the German text), naming the inventor. No company is attributed as assignee because this is Bertele's personal application.
- Seven repetitive or assumption-focused specification lines were reduced to “6 ELEMENTS / 3 GROUPS”, “DESIGN F/3.5” and “ALL SPHERICAL”; the spherical-surface wording now uses the common unhyphenated form.
- The author name was shortened from Ludwig Jakob Bertele to Ludwig Bertele, matching the front page. Patent number, year and the absence of a company assignee were retained.
- Exakta, M42 and Leica-thread mounts and a 0.5 m marketing minimum were added from the product references above. Counts remain six elements and three groups, format remains 35 mm full frame, and both design and marketing values remain 35 mm and f/3.5.
- The former 1 m modeled focus limit was replaced by infinity-only operation, with `focus.closeFocusM` set to `1e15` and a description stating that no finite-focus spacings are supplied. The 0.5 m product minimum is recorded separately.
- Generic element descriptions were replaced by the actual shapes: positive meniscus, negative meniscus, plano-convex positive, plano-concave negative, biconcave negative and biconvex positive. Each element received its positive or negative role in A, B or C. Calculated in-air focal lengths were added: +40.71, −21.19, +23.92, −24.19, −20.79 and +11.73 mm.
- Cemented-pair labels were changed from D1–D3 to C1–C3, and brackets were added over surfaces 1–3, 4–6 and 7–9. Group brackets A, B and C have now been added over those same spans to show the patent's named groups.
- Four previously unidentified glasses received catalog equivalents, with the differences below measured as catalog minus printed coordinates. L3 and L5 retain concise descriptions stating their unresolved nd/νd values.

| Element | Former description → catalog equivalent | Δnd | Δνd |
| --- | --- | ---: | ---: |
| L1 | Unmatched → LAF3 (Hoya) | 0 | +0.08 |
| L2 | Unmatched → K10 (Schott) | 0 | −0.09 |
| L4 | Unmatched → FF5 (Hoya) | 0 | +0.05 |
| L6 | Unmatched → LAK6 (Sumita) | 0 | 0 |

Each label resolves to the named vendor's catalog entry. Discontinued Sumita LAK6 matches the printed coordinates exactly; Hoya LAC6 has Δnd = 0 and Δνd = −0.14. Hikari J-LF7 has Δνd = +0.21, outside the 0.15 matching limit, so L5 remains unmatched at nd 1.57501 and νd 41.3. L3 remains unmatched at nd 1.72019 and νd 50.3. These equivalents do not identify a historical supplier or melt.

- Decimal roundoff was removed from the first-element thickness (3.1325 mm), surface-3 radius (10.0835 mm), L3 thickness (3.4825 mm), L4 thickness (7.448 mm), pre-iris gap (1.771 mm) and radii 7, 8 and 9 (−170.562, +12.88 and −15.855 mm). The resulting first-order difference was below 3 × 10⁻¹⁴ mm. No physical spacing, rim, glass coordinate, stop position or image plane was otherwise changed.
- Eight aperture blades were added from AllPhotoLenses's early-version specification. The existing f/3.5–16 sequence and maximum remain consistent with that source; the later six-blade, f/22 version is described separately.
- The analysis now has the identification, architecture, element, glass, focus, image-plane/iris/field and sources sections. Its title matches the lens name; dates and personal authorship are stated explicitly. Spacing, a duplicated example number and references to unrelated files were removed. The US back-focus interpretation and German text/table discrepancy are explained above. Numerical prose is rounded to useful precision, and product-version differences are explicit.

After these corrections, EFL is 35.003 mm, f-number is 3.5, BFD is 33.656 mm, total track is 62.85 mm, iris radius is 4.571 mm and half-field is 32.0°. Infinity defocus remains zero. The metadata and wording changes leave the prescription and its element and group powers unchanged.

## Remaining Questions

- No Schacht factory prescription or maker optical drawing establishes the product identification conclusively.
- The inferred semi-diameters and iris placement still need direct confirmation; off-axis pupil clipping remains as described above.
- L3 and L5 have no accepted catalog match. Historical glass suppliers, melts and unlisted partial dispersion remain unknown; apochromatic performance is not established.
- No finite-focus spacing law is published. The 0.5 m minimum and eight-blade, f/16 specification describe the early M42 reference, while other versions differ.
- No cited source describes blade roundedness, so that value is omitted. The 64° design field does not establish an independently measured production image-circle diameter, which is also omitted.
