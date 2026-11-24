# TAYLOR 180mm f/4.9 (US 2,582,362 Design) — Audit Log

## Source

[US 2,582,362 A, _Photographic Triplet Objective_](https://patents.google.com/patent/US2582362A/en), by Philip H. Taylor, was assigned to Northrop Aircraft, Inc. The filing and priority date is 3 July 1950; publication was 15 January 1952. The sole numerical example is on PDF p. 2 and repeats in claims 1 and 2 on p. 3. The drawing occupies p. 1. No product source identifies this prescription with a production lens.

## Transcription Check

The six signed radii, three glass thicknesses, two complete air spaces and three sets of C/D/F indices and Abbe numbers agree with the page images on PDF pp. 2–3. All printed inch dimensions use the exact conversion factor 25.4 to millimetres. The radius signs are +, −, −, +, +, −, matching the biconvex, biconcave and biconvex elements in the drawing. The glasses are BSC-2 borosilicate crown, DF-2 dense flint and LBC-2 light barium crown. The patent explicitly defines sodium D at 5893 Å, hydrogen F at 4861 Å and hydrogen C at 6563 Å.

The only disputed digit was the surface-2-to-stop distance: the enlarged page image reads 0.7028 inch, not 0.7026 inch. This places the stop 17.851 mm behind surface 2 and 11.240 mm before surface 3, preserving the complete 29.091 mm air gap. The printed clear diameter, stop diameter, focal length and back focal length also agree with the page images.

## First-Order Check

The patent prints an EFL of 7.0691 inches, or 179.555 mm, and a BFD of 5.6549 inches, or 143.634 mm. The calculated EFL is 179.553 mm and BFD is 143.637 mm: differences of −0.002 mm and +0.003 mm. The image plane is 143.637 mm behind surface 6, at paraxial infinity focus. The first-to-last optical surface span is 60.40 mm and the first-surface-to-image distance is 204.04 mm.

The patent names f/4.9 three times. Its printed 29.718 mm stop diameter gives approximately paraxial f/4.82 and real-ray f/4.87; its 36.881 mm clear diameter gives f′/D = 4.87. These are consistent with the rounded aperture designation. At the modeled f/4.90, the stop radius is 14.625 mm and diameter is 29.250 mm, smaller than the printed stop.

The surfaces stay clear of each other; no glass rim intersects the stop plane, and the iris limits the axial aperture. The minimum glass edge thickness is approximately 1.84 mm; minimum inter-element air gaps are 26.21 and 13.63 mm. The 5.0° chief ray clears every surface and reaches an image height of approximately 15.72 mm. Some off-axis pupil clipping remains, so this establishes chief-ray coverage rather than complete corner illumination.

Using the printed spectral indices, the C-line EFL/BFD are 179.69/143.83 mm and the F-line values are 179.43/143.39 mm. These are paraxial wavelength comparisons, not measured image-quality results.

## Values Not Printed in the Patent

The patent gives one overall clear diameter of 1.452 inches, not six individual surface rims. All six clear semi-diameters are inferred as 18.4404 mm from that value. The schematic drawing establishes the three air-spaced singlets and stop between the first two elements, but places the stop farther forward than the numerical description does. The numerical position determines the model.

The patent's 10.0° field is interpreted as a full field, giving a 5.0° half-field. The 31.44 mm image-circle diameter follows the real chief-ray height at that angle; it is not a published production format or a claim of full edge illumination.

The image plane and individual in-air element focal lengths are calculated. `focus.closeFocusM` is 10¹⁵ m, which stands for infinity. No finite-focus movement or measured close-focus distance is given. The selectable f-stops are 4.9, 5.6, 8, 11, 16 and 22, with `aperture.maxFNumber` at 22; the patent gives no minimum iris opening or stop range.

The printed D-line reference, Abbe numbers and C/F indices are retained for all three glasses. BSC-2 has no catalog row within the site's spectral-proxy tolerance, and DF-2 is labeled with the F4 (Sumita) spectral proxy. S-BAL11 (Ohara) matches LBC-2 within the site's exact-match tolerance, with nD ≈ 1.57241 and νD ≈ 57.73 and catalog-minus-patent differences ΔnD ≈ −0.00009 and ΔνD ≈ −0.07. The historical suppliers and melts are unknown. The patent supplies no g-line indices or anomalous-dispersion designations.

## Product Identification

No production lens or camera is documented for this prescription. Northrop Aircraft, Inc. is the patent assignee; manufacturing and a product name are unconfirmed. `maker` remains null. No mount, production image format, diaphragm blade count or roundedness, marketed focal length or f-number, marketed minimum focus distance, or teleconverter compatibility is assigned.

## Corrections, 2026-11-21

- The key and title identify Taylor's nominal 180 mm f/4.9 patent design, and the lens is visible. The maker remains unconfirmed rather than being inferred from the assignee.
- The patent designation gained its A kind code, the publication year was supplied as 1952, and Northrop Aircraft, Inc. replaced the empty assignee list. Philip H. Taylor and the sole-example designation are retained.
- The stop distance was corrected from 0.7026 to 0.7028 inch. The surface-2-to-stop spacing changed from 17.846 to 17.851 mm and the remaining spacing from 11.245 to 11.240 mm. The stop moved rearward by approximately 0.005 mm without changing the complete air gap.
- The nominal aperture changed from f/4.82 to the repeatedly printed f/4.90. The first selectable f-stop changed accordingly; the remaining values and f/22 endpoint are retained. The stop radius changed from 14.859 to 14.625 mm, so the aperture designation takes precedence over reproducing the printed stop diameter exactly.
- Floating-point artifacts in four stored values were rounded: R3 to −57.65546 mm, R4 to 51.88966 mm, the third element's thickness to 7.62 mm and the last gap to 143.637469 mm. Each change lies far below the printed precision.
- The catalog design focal length identifies the calculated EFL, 179.55 mm, rather than the patent's tabulated focal length. The 31.44 mm image circle follows the printed field and chief-ray height. The three-element, three-group count, 5.0° half-field, inferred rims and paraxial image plane are retained; there is no change of optical scale or index reference.
- Element types now identify the positive biconvex front and rear elements and negative biconcave middle element. Element 1–3 labels, optical roles and in-air focal lengths of +104.33, −43.88 and +69.82 mm replace generic descriptions. Group brackets identify the front positive, middle negative and rear positive elements.
- Generic glass descriptions were replaced by the patent names BSC-2 and DF-2, and S-BAL11 (Ohara) for LBC-2. The catalog differences for the rear glass are ΔnD ≈ −0.00009 and ΔνD ≈ −0.07; all printed refractive indices and Abbe numbers remain unchanged (Δn = 0, Δν = 0).
- The subtitle identifies Northrop Aircraft and Taylor beside the patent and sole example. The four specifications state the three-element, three-group construction, spherical surfaces, design f/4.9 and printed 179.56 mm focal length. The focus description states infinity focus and the absence of close-focus data.

After these corrections, the EFL is 179.553 mm, BFD is 143.637 mm, aperture is f/4.90, stop radius is 14.625 mm and half-field is 5.0°. The EFL and BFD remain those of the original prescription.

2026-11-21 rim review:

- The sole drawing on PDF p. 1 was examined at 600 dpi alongside the numerical example on p. 2. The first-to-last vertex span is about 963 pixels for 60.40 mm, or 15.9 pixels/mm. The first-to-middle and middle-to-last spans give about 16.2 and 15.6 pixels/mm. Drawn axial glass thicknesses at this scale are about 5.4, 2.8 and 7.1 mm, compared with 5.08, 2.54 and 7.62 mm in the table. Across the axis, the front surface's sag at about 10 mm height is approximately 0.9 mm, consistent with the printed radius. The drawn stop lies about 37% of the way across the first air gap, compared with 61% in the numerical description. The drawing therefore supports proportions and rim shape, not precise individual clear diameters.
- Excluding hatching, leaders and element-number tails, each lens is about 610 pixels high; their heights agree within about 1%. All three have square-cut rims, without a drawn land or stepped optical edge. The model's equal rims preserve that relationship. The printed 1.452-inch clear diameter takes precedence over small differences in the drawing. No clear radius changed:

  | Surfaces | Before (mm) | After (mm) | Evidence |
  | -------- | ----------: | ---------: | -------- |
  | 1, 2 | 18.4404 | 18.4404 | Half the printed clear diameter; square front rim at the common drawn height. |
  | 3, 4 | 18.4404 | 18.4404 | Middle lens has the same drawn height and square rim. |
  | 5, 6 | 18.4404 | 18.4404 | Rear lens has the same drawn height and square rim. |

- At the f/4.9 iris, the axial marginal-ray heights at surfaces 1–6 are 18.14, 17.92, 12.83, 12.71, 14.56 and 14.79 mm. The corresponding absolute heights of the 5.0° chief ray are 2.32, 1.96, 1.23, 1.43, 3.70 and 4.30 mm. The smallest glass-rim clearances are 0.30 mm for the axial beam and 14.14 mm for the chief ray. The iris limits the aperture; the surfaces have positive edge thickness and clear air spaces, with no undersized image-circle rim. The chief ray reaches 15.722 mm at the image plane, covering the inferred 31.44 mm image circle.
- Wide-open geometric transmission before and after is 100.0, 99.9, 98.8, 97.8, 96.6, 95.0 and 93.4% at 0.0, 0.8, 1.7, 2.5, 3.3, 4.2 and 5.0°. The greatest loss is 0.0 percentage points. The half-field remains 5.0°, the aperture f/4.9 and the stop radius 14.625 mm. No lands or cuts were added.
- The model section and patent drawing were compared side by side at approximately 16 pixels/mm. The three-element, three-group arrangement, square rims and relative heights agree. The drawing's different iris position and thicker middle lens do not justify altering the printed prescription. No separate maker construction drawing is available, and no production lens is identified. All six surfaces are spherical; no aspherical or anomalous-dispersion element is designated.

2026-11-21 glass review:

- L2: `Unmatched (DF-2, nD 1.617 / ν 36.6)` → `F4 (spectral proxy; patent nD 1.61700 / ν 36.6; supplier and melt unspecified)`, quoting the printed ND as 1.61700 and using the F4 (Sumita) curve as a spectral proxy; ΔnD = −0.00056 and ΔνD = +0.01 (catalog minus printed, sodium D).
- The F4 curve is within the site's spectral-proxy tolerance of 0.002 in index and 0.25 in Abbe number at sodium D. The printed index, Abbe number and C/F indices are kept. The historical supplier and melt are unknown.

2026-11-24 diagram review:

- The sole figure on PDF p. 1 spans about 965 pixels from the first to the last vertex at 600 dpi, giving about 16 pixels/mm over the 60.40 mm prescription. The three square-cut rims each span about 610 pixels, or about 19.2 mm in semi-diameter at that scale. The live section shows the same equal heights. All six modeled rims stay at 18.4404 mm, half the single clear diameter printed on p. 2. The drawing places the iris about 38% of the way from surface 2 to surface 3, implying a split of roughly 11.0/18.1 mm. The printed split is 17.851/11.240 mm, which places the live STO marker farther toward element 2. The drawing also exaggerates the center thickness of the middle element. No separate maker diagram or production identification is documented.
- The element annotations now explicitly carry the patent's numerals 1, 2 and 3. All three inspectors show the corresponding L1–L3 names, correct positive–negative–positive forms and roles, and individual focal lengths of +104.33, −43.88 and +69.82 mm. The three captions span the correct singlets. The drawing and prescription show six spherical surfaces and three air-spaced groups, with no cemented or special-dispersion markings. The live header shows three elements in three groups, f/4.9 and the printed focal length rounded to 179.56 mm.
- The only focus position is infinity, shown as ∞. All three groups have fixed vertex positions, and the patent gives no finite-focus motion or zoom sequence. Surface geometry, aperture, image circle and chief-ray coverage agree with the stated limits. The axial beam clears the rims by at least 0.30 mm. With no cuts or lands, the greatest full-pupil transmission loss against the earlier rims is 0.0 percentage points. Transmission at 5.0° is 93.4%, the half-field is 5.0° and the aperture is f/4.9.
- The glass labels continue to identify BSC-2 as unmatched, F4 (Sumita) as the DF-2 proxy and S-BAL11 (Ohara) as the LBC-2 match. PDF pp. 2–3 name BSC-2 as borosilicate crown and give nC = 1.51462, nD = 1.51700, nF = 1.52264 and νD = 64.5. The claims repeat the same prescription. The closest catalog curves in Abbe number at sodium D have νD ≈ 64.19, and Ohara's BSL7Y in its vendor catalog has νD ≈ 64.235. Both fall outside the site's spectral-proxy tolerance.
- All three glasses retain every printed C/D/F index and Abbe number. The model traces the printed line indices and estimates g by normal-line partial dispersion. At C, D and F, the paraxial back focal lengths are 143.827, 143.637 and 143.389 mm, and the marginal values at the modeled iris are 143.666, 143.528 and 143.425 mm. PDF p. 2 gives a C–F zonal focus difference in its aberration table, with no pupil height specified for the zone or individual wavelength focus curves. The assignee, Northrop Aircraft, Inc., agrees with p. 2 and the catalog spelling.

## Remaining Questions

- Individual effective diameters are not printed. The equal square-cut rim proportions are supported by the drawing, but exact optical extents and the reason for its different stop position remain unknown.
- The patent does not explicitly say whether its 10.0° field is a full angle. The model uses the conventional full-field interpretation, and complete edge illumination is not established.
- BSC-2 remains unmatched, and F4 (Sumita) is listed as a spectral proxy for DF-2. The historical suppliers, melts and g-line indices are unknown.
- No source establishes a production product, manufacturer, mount, production image format, diaphragm blade count or shape, minimum iris opening, marketed specifications, teleconverter compatibility or close-focus mechanism.
