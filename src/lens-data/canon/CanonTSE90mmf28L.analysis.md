# Canon TS-E 90mm f/2.8L Macro — Optical Design Analysis

## Patent Reference and Design Identification

**Patent:** JP 2018-205474 A  
**Application Number:** 特願2017-109742 (P2017-109742)  
**Filed:** June 2, 2017  
**Published:** December 27, 2018  
**Inventor:** Yamagishi Masakazu (山岸 正和)  
**Applicant:** Canon Inc.  
**Title:** 撮像光学系及びそれを用いた撮像装置 (Imaging Optical System and Imaging Apparatus Using the Same)  
**Classification:** G02B 13/00  
**Worked examples:** 3  
**Embodiment analyzed:** Example 1 (数値データ１)

The patent discloses a macro imaging optical system made from a positive first group L1 and a negative second group L2. L1 contains the aperture stop and is divided into a negative L1a subgroup, a positive L1b subgroup, and a positive L1c subgroup. During focusing from infinity to close range, both L1 and L2 move toward the object while the L1-L2 interval expands. The close-distance prescription is specified at β = -0.5.

Example 1 remains the best match to the Canon TS-E 90mm f/2.8L Macro despite being normalized to a 55.986 mm patent focal length. The identification rests on convergent evidence rather than focal length alone.

1. Example 1 contains 11 elements in 9 air-spaced groups. Canon publishes the TS-E 90mm f/2.8L Macro as 11 elements in 9 groups. Examples 2 and 3 of the same patent are 12-element / 10-group prescriptions and are therefore structurally inconsistent with the production lens.
2. Example 1 is F/2.91. That is consistent with Canon's marketed f/2.8 class.
3. The patent close-focus state is β = -0.5, matching Canon's published 0.50x maximum magnification.
4. Scaling Example 1 from f = 55.986 mm to the marketed 90 mm focal-length class gives a scale factor of 1.607544743. The scaled patent image height is 34.72 mm, or a 69.44 mm image circle. That is sufficient for a 135-format frame with ±12 mm shift, whose corner-clearance requirement is about 67.3 mm when the shift direction is aligned with the sensor diagonal.
5. The prescription contains a single very-low-dispersion fluorophosphate element, L5 (nd = 1.49700, νd = 81.5), which is the natural catalog match to Canon's stated UD element.
6. Canon specifies manual focus, 0.39 m closest focusing distance, 0.50x magnification, ±10° tilt, ±12 mm shift, a 9-blade diaphragm, and a minimum aperture of f/45 for the production lens. These are all compatible with the patent's macro two-group floating-focus mechanism.

Canon's product literature also states that the production lens uses aspherical and UD elements. JP2018205474A Example 1 itself is entirely spherical. The data file therefore records the patent prescription without an aspheric surface; the production asphere is not identifiable from this patent text.

## Optical Architecture

The prescription is a modified double-Gauss macro design with an overall positive-negative two-group focus architecture. It is not a telephoto optical layout in the strict TL/EFL sense: after scaling, the first-surface-to-image-plane track is about 134.62 mm at infinity for a computed EFL of about 89.96 mm. The design is a short-focal-length macro/portrait perspective-control lens by photographic use, not by telephoto construction.

L1a, surfaces 1-6, is a three-element negative front subgroup with f1a = -36.32 mm at patent scale. It comprises a negative meniscus, a positive meniscus, and a biconcave negative element. Its purpose is pupil control: the strong front negative power moves the entrance pupil objectward enough to preserve peripheral illumination without allowing the front element diameter to grow without bound.

L1b, surfaces 7-11, is a positive subgroup with f1b = +28.91 mm. It contains the dominant positive singlet L4 and the cemented L5-L6 achromat. L5 is the low-dispersion positive element; L6 is the dense flint partner. The rear surface of L6 is the concave stop-side surface specified by the patent for aberration balance around the aperture stop.

The aperture stop is placed between L1b and L1c. In the patent table it is surface 12, 4.00 mm after surface 11 and 3.22 mm before surface 13. In the scaled data file it is labeled `STO`; the stop semi-diameter is computed as 12.740 mm from the patent F/2.91 aperture and the pre-stop paraxial matrix.

L1c, surfaces 13-17, is a positive post-stop subgroup with f1c = +38.84 mm at patent scale. The L7-L8 cemented doublet is nearly afocal in situ, with a computed focal length of about -1217 mm at patent scale, so its principal function is aberration and chromatic correction rather than power delivery. L9 is the positive relay singlet completing the first group.

L2, surfaces 18-21, is a weak negative rear group with f2 = -199.77 mm at patent scale. It consists of a biconcave negative element followed by a positive meniscus. This weak rear power is deliberate: the patent's condition (3) limits |f/f2| to restrain focus-induced coma and field-curvature variation.

## Element-by-Element Analysis

### L1 — Negative Meniscus, Convex to Object

nd = 1.51742, νd = 52.4. Glass: S-NSL36 (Ohara). f = -72.1 mm at patent scale; -115.8 mm after production scaling.

L1 begins the divergent L1a subgroup. Its two positive radii (R1 = +44.754, R2 = +20.133 at patent scale) make it a negative meniscus convex toward the object. The element is not highly dispersive, so its main contribution is pupil geometry and front-group aberration balance rather than chromatic correction.

### L2 — Positive Meniscus, Convex to Object

nd = 1.83481, νd = 42.7. Glass: S-LAH55V (Ohara). f = +64.0 mm at patent scale; +102.9 mm after scaling.

L2 partially offsets the strong negative power of L1 and L3 while preserving the negative net power of L1a. Its high index permits moderate surface curvatures for the required positive power and helps control spherical aberration in the pre-stop bundle.

### L3 — Biconcave Negative

nd = 1.65412, νd = 39.7. Glass: N-KZFS5 (Schott) / S-NBH5 class. f = -34.2 mm at patent scale; -55.0 mm after scaling.

L3 is the strongest negative element in L1a and largely sets the subgroup's f1a/f value. The nd/νd pair matches the KZFS/short-flint family used for secondary-spectrum control. Because the patent lists only nd and νd, the data file labels this as a Schott/Ohara class equivalent rather than a patent-named melt.

### L4 — Biconvex Positive

nd = 1.91082, νd = 35.3. Glass: TAFD35 (Hoya) equivalent. f = +22.5 mm at patent scale; +36.2 mm after scaling.

L4 is the strongest standalone positive element in the design. It is the first element of L1b and supplies the main positive power that follows the divergent L1a section. The very high index reduces the curvatures needed for this power and keeps the element compact.

### L5 + L6 — Cemented Achromat in L1b

L5: nd = 1.49700, νd = 81.5. Glass: S-FPL51 / FCD1-class fluorophosphate UD glass. Standalone f = +25.8 mm at patent scale; +41.5 mm after scaling.  
L6: nd = 1.67300, νd = 38.1. Glass: S-NBH52 (Ohara). Standalone f = -15.4 mm at patent scale; -24.7 mm after scaling.  
Cemented doublet in situ: f = -49.8 mm at patent scale; -80.1 mm after scaling.

This cemented doublet is the principal achromatizing pair in the front half of the system. The high Abbe-number L5 element is the patent prescription's only obvious UD candidate, while L6 supplies the opposing high-dispersion negative power. The cemented group is net negative in situ, counterbalancing the strong L4 positive power and reducing longitudinal chromatic error.

The rear surface of L6 (R11 = +16.999 at patent scale) is strongly concave toward the stop. This is one side of the double-Gauss waist described in the patent, paired with the object-side concavity of L7 after the stop.

### L7 + L8 — Nearly Afocal Cemented Corrector in L1c

L7: nd = 1.74951, νd = 35.3. Glass: S-LAM7 (Ohara). Standalone f = -34.5 mm at patent scale; -55.5 mm after scaling.  
L8: nd = 1.77250, νd = 49.6. Glass: S-LAH66 (Ohara). Standalone f = +38.6 mm at patent scale; +62.1 mm after scaling.  
Cemented doublet in situ: f ≈ -1217 mm at patent scale; approximately -1957 mm after scaling.

The L7-L8 doublet sits immediately after the stop. Because its combined power is nearly zero, it should not be interpreted as a primary power component. Its value is in the cemented interface and in the balance of stop-adjacent aberrations, especially spherical aberration and coma.

The front surface of L7 (R13 = -17.664 at patent scale) is concave toward the stop. Together with L6's rear surface, it implements the patent's preferred stop-flanking concave surface pair.

### L9 — Biconvex Positive Relay Element

nd = 1.59522, νd = 67.7. Glass: S-FPM2 (Ohara). f = +40.9 mm at patent scale; +65.8 mm after scaling.

L9 completes L1c with moderate positive power. Its relatively high Abbe number helps keep the post-stop relay from adding unnecessary chromatic error after the L7-L8 correcting doublet.

### L10 — Biconcave Negative Rear-Group Element

nd = 1.57135, νd = 53.0. Glass: S-BAL3 (Ohara class; unresolved in the local Sellmeier catalog). f = -52.9 mm at patent scale; -85.0 mm after scaling.

L10 is the negative element at the front of L2. Its rear surface carries the stronger curvature, so its negative power is placed toward the image side of the element. As part of the weakly negative L2 group, it assists field flattening while avoiding excessive focus-dependent aberration change.

### L11 — Positive Meniscus, Concave to Object

nd = 1.83400, νd = 37.2. Glass: S-LAH60V (Ohara). f = +75.3 mm at patent scale; +121.1 mm after scaling.

L11 is the final optical element and the positive member of L2. Its object-side surface is concave, matching the patent's preferred construction for the rearmost positive lens in the second group. The patent states that this form helps reduce ghosting and flare caused by light reflected from the sensor surface and then reflected again by a lens surface.

## Glass Identification and Selection

The patent does not name glass catalogs; it gives nd and νd. The following assignments are catalog-equivalent identifications from public optical-glass catalogs. They should be read as material matches or close class matches, not as Canon melt disclosures.

| Element |      nd |   νd | Catalog-equivalent glass | Vendor / status      | Role                                   |
| ------- | ------: | ---: | ------------------------ | -------------------- | -------------------------------------- |
| L1      | 1.51742 | 52.4 | S-NSL36                  | Ohara match          | Normal crown-like front meniscus       |
| L2      | 1.83481 | 42.7 | S-LAH55V                 | Ohara match          | High-index positive balancing element  |
| L3      | 1.65412 | 39.7 | N-KZFS5 / S-NBH5 class   | Schott / Ohara class | Short-flint negative element           |
| L4      | 1.91082 | 35.3 | TAFD35                   | Hoya equivalent      | Very-high-index positive power element |
| L5      | 1.49700 | 81.5 | S-FPL51 / FCD1 class     | Ohara / Hoya class   | UD fluorophosphate positive element    |
| L6      | 1.67300 | 38.1 | S-NBH52                  | Ohara match          | Dense flint partner to L5              |
| L7      | 1.74951 | 35.3 | S-LAM7                   | Ohara match          | Negative post-stop corrector           |
| L8      | 1.77250 | 49.6 | S-LAH66                  | Ohara match          | Positive post-stop corrector           |
| L9      | 1.59522 | 67.7 | S-FPM2                   | Ohara match          | Low-dispersion positive relay          |
| L10     | 1.57135 | 53.0 | S-BAL3                   | unresolved catalog-equivalent | Rear-group negative element            |
| L11     | 1.83400 | 37.2 | S-LAH60V                 | Ohara match          | Final high-index positive meniscus     |

The glass strategy is conventional but careful: one low-dispersion positive element is paired with a dense flint in the L5-L6 cemented doublet, and a short-flint negative element appears in the pre-stop L1a subgroup. L9 adds a high-Abbe positive element after the stop. The design is not apochromatic in the strict sense from the patent data alone; it is a well-corrected macro achromat whose secondary-spectrum control is inferred from the selected glass families.

## Focus Mechanism

The patent uses a two-group floating focus mechanism. From infinity to β = -0.5, L1 and L2 both move toward the object, and the separation between them increases. In the prescription table this appears as an increase in d17 and d21, because the numerical data are written with the first surface as the reference and the image plane at the rear.

| Parameter            | Infinity, patent scale | Close, patent scale | Infinity, scaled data | Close, scaled data |
| -------------------- | ---------------------: | ------------------: | --------------------: | -----------------: |
| d17, L1-L2 gap       |                1.59 mm |             6.52 mm |              2.556 mm |          10.481 mm |
| d21, BFD table value |               44.70 mm |            64.14 mm |             71.857 mm |         103.108 mm |

At patent scale, the computed close-focus magnification is β = -0.5006. The paraxial object-to-image distance at the close state is about 249.5 mm at patent scale, or 401.1 mm after scaling. Canon publishes a 0.39 m closest focusing distance for the production lens. The difference is small and is expected from the patent's rounded data, production optimization, and the fact that the production aspheric surface is not present in this patent prescription.

The production lens is manual-focus only. The data file therefore models the optical group movement but does not include any autofocus actuator or mechanical focus-ring detail.

## Aspherical Surfaces

JP2018205474A Example 1 contains no aspherical coefficients and no aspherical surface labels. All refracting surfaces in the numerical prescription are spherical.

Canon's production specification states that the TS-E 90mm f/2.8L Macro uses aspherical and UD elements. Since this patent example does not identify an aspherical surface, the accompanying `.data.ts` file leaves `asph` empty. Adding a production asphere would require a separate source prescription or a manufacturer-published surface description.

## Conditional Expressions

The patent defines four main conditional expressions. Example 1 satisfies all four and also satisfies the preferred narrower ranges where given.

| Condition | Expression     | Patent limits | Example 1 value | Status    |
| --------- | -------------- | ------------: | --------------: | --------- |
| (1)       | `f1a / f`      |  -1.5 to -0.5 |          -0.649 | Satisfied |
| (1a)      | `f1a / f`      |  -1.0 to -0.6 |          -0.649 | Satisfied |
| (2)       | `\|f / f1ab\|` |        < 0.25 |           0.107 | Satisfied |
| (2a)      | `\|f / f1ab\|` |  0.05 to 0.15 |           0.107 | Satisfied |
| (3)       | `\|f / f2\|`   |        < 0.40 |           0.280 | Satisfied |
| (3a)      | `\|f / f2\|`   |        < 0.32 |           0.280 | Satisfied |
| (4)       | `\|T1 / f\|`   |  0.30 to 0.95 |           0.435 | Satisfied |
| (4a)      | `\|T1 / f\|`   |  0.35 to 0.85 |           0.435 | Satisfied |

Table 1 in the patent labels condition (3) as `|f2 / f|`, but the table values are 0.280, 0.300, and 0.268 for Examples 1-3. Those numbers correspond to `|f / f2|`, which is also the form used in the claims and description. The table heading is therefore a typographical inversion.

## Verification Summary

Independent paraxial verification was run from the numerical prescription using a reduced-angle y-nu matrix trace. The prescription was then uniformly scaled for the data file by 90 / 55.986.

| Quantity                  | Computed, patent scale | Patent value |           Scaled value used in data file |
| ------------------------- | ---------------------: | -----------: | ---------------------------------------: |
| EFL at infinity           |              55.963 mm |    55.986 mm |                                89.963 mm |
| BFD at infinity           |              44.678 mm |     44.70 mm | 71.822 mm computed / 71.857 mm table gap |
| Total track at infinity   |               83.74 mm |     83.72 mm |                               134.616 mm |
| f1a                       |             -36.320 mm |   -36.323 mm |                               -58.385 mm |
| f1ab                      |             +521.78 mm |  +522.413 mm |                               +838.78 mm |
| f2                        |             -199.77 mm |  -199.789 mm |                               -321.14 mm |
| T1                        |              -24.37 mm |   -24.368 mm |                                -39.16 mm |
| Close-focus magnification |                -0.5006 |        -0.50 |                                unchanged |

The Petzval sum from the surface-by-surface φ/(n·n') formula is 0.001655 mm^-1 at patent scale, corresponding to a Petzval radius of about 604 mm. After production scaling, the Petzval sum is 0.001030 mm^-1 and the radius is about 971 mm. These values are consistent with a macro double-Gauss design that relies on weak rear negative power and stop-symmetric correction rather than a strongly telephoto field group.

## Design Heritage and Context

The TS-E 90mm f/2.8L Macro replaced Canon's earlier TS-E 90mm f/2.8 with a higher-specification macro-capable perspective-control design. The defining change is not merely the 0.50x close focus, but the combination of macro correction and large image-circle management. The patent's strong negative L1a subgroup addresses exactly the size and peripheral-illumination problem described in the background section: ordinary double-Gauss macro systems become large when full-lens extension is used to increase magnification while retaining off-axis illumination.

The patent cites JP 2008-298840 and JP 2013-231941 as prior art. The criticized failure mode is insufficient control of peripheral illumination and effective diameter when focusing close. Example 1's large negative f1a/f ratio and weak L2 power are direct responses to that problem.

## Sources

- JP 2018-205474 A, Japan Patent Office, published December 27, 2018. Primary source for the optical prescription, group definitions, conditional expressions, focus spacings, and paraxial example data.
- Canon U.S.A., TS-E 90mm f/2.8L Macro product page and detailed specifications PDF. Manufacturer source for 90 mm f/2.8, 11 elements / 9 groups, manual focus, 0.39 m closest focusing distance, 77 mm filter, and physical dimensions.
- Canon Europe, TS-E 90mm f/2.8L Macro specifications. Manufacturer source for ±10° tilt, ±12 mm shift, 0.50x maximum magnification, 11/9 construction, 9-blade diaphragm, f/45 minimum aperture, and the stated aspherical/UD element usage.
- Ohara optical glass catalog. Catalog-equivalent references for S-NSL36, S-LAH55V, S-NBH52, S-LAM7, S-LAH66, S-FPM2, S-LAH60V, and S-FPL51-class glass; S-BAL3 remains an unresolved local-catalog fallback.
- Schott optical glass catalog. Catalog-equivalent reference for N-KZFS5-class short flint.
- Hoya optical glass catalog. Catalog-equivalent reference for TAFD35 and FCD1-class equivalents.
