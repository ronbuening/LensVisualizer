# CARL ZEISS JENA R-BIOTAR 100mm f/0.9 (US 1,967,836 Design) — Audit Log

## Source

[US 1,967,836 A, _Photographic Lens_](https://patents.google.com/patent/US1967836A/en), Willy Merté, published July 24, 1934; filed December 29, 1933, with German priority December 30, 1932. The printed assignee is the firm Carl Zeiss, Jena, Germany; `source.assignees` records Carl-Zeiss-Stiftung. The sole numerical example appears with the drawing on PDF page 1 and is repeated with the description and claims on PDF page 2. Dimensions are millimetres, with f = 100 mm, f/0.90 and an approximately 25 mm image-field diameter.

Edward K. Kaprelian, [_Objective Lenses of f/1 Aperture and Greater_](https://doi.org/10.5594/J17813), _Journal of the Society of Motion Picture Engineers_ 53(1), July 1949, pp. 86–99, Fig. 2a and accompanying discussion, supplies the R-Biotar family connection. [Flints Auctions, lot 264](https://www.flintsauctions.com/auction/lot/lot-264---a-carl-jena-zeiss-r-biotar-45cm-f085-camera-lens/?lot=22893&sd=1), May 23, 2023, documents a surviving 4.5 cm f/0.85 production lens without publishing its prescription.

## Transcription Check

The radii, thicknesses, air spaces and glass pairs were re-read against both patent page images. The drawing-sheet and specification tables agree on all nine radii, five glass thicknesses, four air intervals, five indices and five Abbe values; no numerical mismatch was found. All finite radius signs are explicit. R6 is plane, R8 cements L4 to L5, and the five elements form four air-separated members. The original millimetre scale is retained, with no aspherical surfaces or variable spacings.

Diaphragm A lies between L2 and L3 at the printed 43.80/16.59 mm split, 95.26 mm behind R1. Both tables print lowercase nd, and claim 3 explicitly specifies the d-line. This supports helium d rather than the original sodium-D attribution without altering any printed glass coordinate.

## First-Order Check

The calculated EFL is 99.998 mm, about 0.002 mm below the printed 100 mm. The paraxial f-number is 0.90, matching the printed f/0.90. Calculated BFD is 26.00 mm; no source back focus is printed. The image plane is at paraxial infinity focus, 26.00 mm behind R9 and 202.81 mm behind R1. The first-to-last vertex length is 176.81 mm, within the patent's preferred three-quarters-to-twice-focal-length range.

The inferred iris radius is 37.27 mm. Exact axial tracing admits an entrance radius of 52.29 mm, equivalent to f/0.96; the full f/0.90 axial marginal ray requires an iris radius of 39.99 mm. The iris therefore limits the finite-aperture beam despite the paraxial f/0.90 result.

The surfaces stay clear of one another, glass thickness remains positive, and the stop lies entirely in air. Each optical rim passes the axial beam and the chief ray at the derived 7.2° half-field, where the chief ray reaches the stated 12.50 mm image radius. The rear doublet partly vignettes the off-axis bundle. Upper-side meridional clipping of the nominal f/0.90 bundle is approximately 18%, 27% and 10% at R7, R8 and R9; these widths do not measure radiometric illumination. A complete nominal f/0.90 edge bundle is not established.

## Values Not Printed in the Patent

The patent prints the stop position but gives no physical iris opening, numerical clear rims, back focus, field angle, named glass supplier, partial dispersion or close-focus data. The iris radius follows paraxial pupil scaling; the image plane follows calculated paraxial focus. The 7.2° half-field follows the printed approximately 25 mm image diameter. The retained `catalog.imageCircleMm` value of 25 is thus source-supported. Larger fields are permitted with reduced definition, without a second numerical field.

The clear radii at R1–R9 are inferred: 66, 60.5, 55, 54, 48, 42, 27, 26 and 27 mm. Drawing estimates differ: L1 about 61/61 mm; L2 about 61/52.6 mm with a chamfer extending to about 61 mm; L3 about 45/45 mm; the rear doublet about 26 mm with a rear optical face about 23 mm. L1's retained front rim approaches a knife edge, and L3 has unequal clear radii. The drawn diaphragm opening is schematic and does not establish the physical iris diameter.

`focus.closeFocusM` is 10¹⁵ m, which stands for infinity. The model follows the reduction direction with the object at infinity. The patent defines the front toward the object for reduction and toward the image for enlargement, but gives no working finite conjugates or group motion. The selectable apertures extend to f/16; the patent supplies no minimum iris opening or stop range.

The glass coordinates are printed, while the catalog names are additional identifications by optical properties. L3 uses the FK3 dispersion curve; L1, L2, L4 and L5 use estimates from their printed index and Abbe number. Historical suppliers, melts, measured partial dispersion and broadband performance remain unknown. The patent supplies no MTF curve or measured performance for comparison.

## Product Identification

Kaprelian describes Merté's f/0.85 X-ray cine objective as a Petzval arrangement with separated first and second elements and an added collective element. Fig. 2a, labelled “MERTE f/0.85,” matches the five-element, four-group construction. Together with the surviving Flints lens, this supports the R-Biotar family association. The production 45 mm f/0.85 lens differs from this 100 mm f/0.90 example; an exact production prescription is not established.

No marketed focal length or aperture, production mount, image format, diaphragm blade count or shape, or minimum focus distance is assigned to this design.

## Corrections, 2026-11-21

- The previously unspecified maker is Carl Zeiss Jena. The title and key identify the 100 mm f/0.9 R-Biotar family design and US patent, and the design is listed in the lens catalog. Kaprelian supports the family association without establishing an exact production lens.
- All five `indexReference` values changed from sodium D to helium d, following the printed nd notation and claim 3. All source indices and Abbe values remain unchanged.
- L3's unidentified glass label became `FK3 (Schott)`, with catalog nd 1.46450 and νd 65.77. Catalog minus printed differences are Δnd +0.00001 and Δνd −0.03. L1, L2, L4 and L5 retain `Unmatched` labels stating their printed pairs; no historical supplier or melt is identified.
- Element labels became Element 1 through Element 5, with the patent's L1–L5 designations retained on the diagram. Optical roles and calculated in-air focal lengths were added: +126.56, −183.65, +210.23, +50.67 and −94.52 mm. C1 identifies the cemented L4+L5 doublet across R7–R9, whose combined focal length is +99.07 mm.
- Infinity focus is explicit because the patent gives no close-focus data. The final image interval retains the calculated paraxial infinity plane at 26.00 mm behind R9; no printed optical dimension, stop position, rim or field changed.
- The subtitle reads “US 1,967,836 A, sole example — Zeiss / Merté.” The specifications are “5 ELEMENTS / 4 GROUPS”, “DESIGN f = 100 mm”, “DESIGN F/0.9” and “ALL SPHERICAL”, identifying the patent scale without assigning production specifications.

The resulting first-order values are EFL 99.998 mm, paraxial f/0.90, BFD 26.00 mm, iris radius 37.27 mm and half-field 7.2°. These values are unchanged from the original prescription. The finite-aperture iris limit remains about f/0.96.

## Remaining Questions

- The physical clear rims, chamfers and iris opening remain uncertain. The retained rims differ from the drawing, particularly L1's front edge, L2's rear chamfer and L3's unequal rims.
- L1, L2, L4 and L5 lack established catalog matches. Historical suppliers and melt identities remain unknown for every element.
- The exact production prescription and its marketed specifications, mount, image format, diaphragm construction, stop range and minimum focus distance are undocumented.
- Whether the reported German counterpart DE 607,631 contains the same prescription remains unconfirmed.
- Measured spectral performance, finite-conjugate behavior and complete off-axis pupil transmission remain unknown.
