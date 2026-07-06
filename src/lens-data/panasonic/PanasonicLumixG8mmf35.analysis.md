# PANASONIC LUMIX G FISHEYE 8mm f/3.5

## Patent Reference and Design Identification

**Patent:** US 2012/0147254 A1
**Application number:** US 13/391,289; PCT/JP2010/007423
**Filed:** December 22, 2010
**Published:** June 14, 2012
**Priority:** JP 2009-294157, December 25, 2009
**Inventors:** Nobuyuki Adachi; Takuya Imaoka
**Assignee:** Panasonic Corporation
**Title:** Imaging Optical System, Interchangeable Lens Apparatus and Camera System
**Embodiment analyzed:** Embodiment 4 / Numerical Example 4, Tables 7 and 8

Numerical Example 4 is the strongest match to the Panasonic Lumix G Fisheye 8mm f/3.5 (H-F008). The identification is based on a convergence of prescription and product data, not on a patent statement naming the commercial lens. The patent describes the Embodiment 4 layout in ¶0050 and prints the Numerical Example 4 prescription in Tables 7 and 8.

1. The patent prescription is a 10-element, 9-group fisheye with one cemented doublet, matching Panasonic's published 10-element / 9-group specification.
2. The patent focal length is 7.850 mm at infinity, consistent with the marketed 8 mm focal length.
3. The patent half-field is 89.9°, giving the expected 180° diagonal fisheye coverage.
4. The patent image height is 10.831 mm, corresponding to a 21.66 mm diagonal image circle, essentially the Four Thirds / Micro Four Thirds sensor diagonal.
5. The prescription contains one low-index, high-Abbe ED-class element at L4 (`nd = 1.49700`, `νd = 81.6`), consistent with the production lens specification of one ED element.
6. The patent uses inner focus by a single rear-unit element, L9, moving toward the object for close focus. This matches the product-level description of internal focus for the H-F008.
7. The patent prescription is all-spherical. Panasonic's public product specification does not list aspherical elements for this lens; the patent itself is the controlling source for the all-spherical prescription used here.
8. The priority and publication timing align with the 2010 commercial introduction period for the H-F008.

Example 1 also has 10 elements in 9 groups and has a patent F-number closer to f/3.5, but its design focal length is 7.735 mm and its ED-class glass appears at the final element rather than in the front corrector. Example 4 is the better optical-diagram and focal-length match. The aperture mismatch remains explicit: the patent tabulates F/2.951, while the production lens is marketed and specified at F/3.5.

## Optical Architecture

The design is a retrofocus diagonal fisheye for Micro Four Thirds. The back focal distance is 16.169 mm against a 7.850 mm design focal length, so the BFD/EFL ratio is about 2.06. That long back focus is required by the interchangeable-lens camera layout and is achieved with a negative front unit followed by a positive rear unit.

The front unit G1 contains five elements: L1 and L2 are negative menisci that perform the primary fisheye field compression, followed by the L3-L4-L5 corrector sequence. The patent states in ¶0051 that the first two negative elements bend light entering at about 90° to the optical axis toward a direction approximately parallel to the optical axis, and that L3, L4, and L5 compensate the field curvature and lateral chromatic aberration introduced by the leading negative pair.

The aperture diaphragm sits between G1 and G2. The rear unit G2 contains L6, the cemented L7/L8 doublet, the moving focus element L9, and the fixed rear element L10. The patent states in ¶0052 that L6 and the L7/L8 doublet are placed on the image side of the diaphragm to disperse spherical-aberration and coma sensitivity associated with surface-form errors in the large rear-unit beams. L10 is fixed in focusing and sits closest to the image side; ¶0053 gives its mechanical purpose as protecting the focusing mechanism from external contact when the lens is detached from the camera body.

The front unit has weak net negative power (`fG1 = -110.861 mm`) and the rear unit has strong positive power (`fG2 = +19.594 mm`). This distribution is unusual if judged by ordinary rectilinear wide-angle standards, but it is appropriate for a fisheye whose image height is governed by projection geometry rather than rectilinear tangent mapping.

## Element-by-Element Analysis

### L1 - Negative Meniscus, convex to object

`nd = 1.69680`, `νd = 55.5`. Glass: S-LAL14 (OHARA). Standalone in-air focal length `f = -29.77 mm`.

L1 is the first fisheye collector. Its strongly curved rear surface (`R2 = +14.299 mm`) supplies most of the negative power, while the meniscus form keeps both surfaces bending in the same direction. Together with L2, it reduces the angular severity of the near-90° field before the beam enters the correcting sub-group.

### L2 - Negative Meniscus, convex to object

`nd = 1.69680`, `νd = 55.5`. Glass: S-LAL14 (OHARA). Standalone in-air focal length `f = -17.62 mm`.

L2 is the stronger of the two leading negative menisci. Its image-side radius (`R4 = +11.257 mm`) is the tightest surface in the front negative pair and is one of the two radii used by condition (1). The shared S-LAL14 glass keeps the two leading menisci in the same index/dispersion family, leaving the later L3-L4-L5 sequence to handle most of the chromatic balancing.

### L3 - Positive Meniscus, convex to image

`nd = 1.80518`, `νd = 25.5`. Glass: S-TIH6 (OHARA). Standalone in-air focal length `f = +38.85 mm`.

L3 begins the front-unit corrector sequence. Its high index and high dispersion make it a compact positive element whose chromatic contribution contrasts strongly with the ED-class L4 that follows. The patent identifies this part of G1 as compensating field curvature and magnification chromatic aberration from L1 and L2.

### L4 - Biconcave Negative ED Element

`nd = 1.49700`, `νd = 81.6`. Glass: S-FPL51 (OHARA), ED fluorophosphate class. Standalone in-air focal length `f = -33.90 mm`.

L4 is the sole ED-class element in the prescription. It is biconcave in the numerical table, with a strong object-side concave surface and an almost flat image-side surface (`R8 = +750.000 mm`). Its position directly behind the dense-flint L3 places the low-dispersion element where it can counter lateral color and secondary-spectrum tendencies generated by the leading fisheye group. No numerical partial-dispersion deviation is quoted here because the patent gives only `nd` and `νd`; the ED role is inferred from the catalog glass family and from Panasonic's one-ED-element product specification.

### L5 - Positive Meniscus, convex to object

`nd = 1.80610`, `νd = 33.3`. Glass: NBFD15 / NBFD15-W (HOYA). Standalone in-air focal length `f = +24.25 mm`.

L5 closes the front unit before the aperture diaphragm. It is the strongest positive component in G1 and provides compact positive power at a large beam diameter. The stored `nd`/`νd` pair does not match the principal OHARA S-line catalog closely; HOYA NBFD15/NBFD15-W matches the prescription values directly and is used in the data file rather than forcing an OHARA assignment.

### L6 - Positive Meniscus, convex to image

`nd = 1.77250`, `νd = 49.6`. Glass: S-LAH66 (OHARA). Standalone in-air focal length `f = +26.52 mm`.

L6 is the first element of the positive rear unit. The patent's discussion of Embodiment 4 treats L6 and the L7/L8 doublet as separate rear-unit subassemblies used to distribute surface-form-error sensitivity, not as a statement that the cemented doublet has positive net power. The high index permits moderate curvatures for the required power.

### L7 + L8 - Cemented Crown/Flint Doublet

**L7:** `nd = 1.58913`, `νd = 61.3`. Glass: S-BAL35 (OHARA). Isolated in-air focal length `f = +14.98 mm`.

**L8:** `nd = 1.84666`, `νd = 23.8`. Glass: S-TIH53 (OHARA). Isolated in-air focal length `f = -13.57 mm`.

The cemented doublet net focal length in the actual prescription is `f = -63.20 mm`. The isolated L7 value above is an in-air descriptor only; at the cemented interface, L7 exits into the higher-index L8 glass, so its in-situ surface contribution is not equivalent to the isolated-element number. This distinction matters because the doublet functions as a weak negative achromat in the converging rear-unit beam, not as a simple positive lens followed by an unrelated negative lens.

The crown/flint Abbe separation, about 37.5, gives the rear unit a conventional achromatizing pair. The cemented interface also removes an air-glass reflection relative to an air-spaced pair, useful in a 20-surface fisheye design.

### L9 - Biconvex Positive Focus Element

`nd = 1.61800`, `νd = 63.4`. Glass: S-PHM52 (OHARA). Standalone in-air focal length `f = +37.22 mm`.

L9 is the only moving optical element. The patent specifies object-side movement of L9 for close focus in ¶0050. The front surface is nearly flat (`R17 = +500.000 mm`) and the rear surface supplies most of the focusing power. The element's modest mass and single-element motion are consistent with the patent's stated goal of high-speed contrast-detection autofocus and wobbling during video operation.

### L10 - Biconvex Positive Fixed Rear Element

`nd = 1.51680`, `νd = 64.2`. Glass: N-BK7 / S-BSL7 class. Standalone in-air focal length `f = +103.18 mm`.

L10 is a weak, nearly symmetrical rear positive element. The patent's explicit reason for fixing the image-side element is mechanical protection of the focusing mechanism when the interchangeable lens is detached. Any field-flattening or chief-ray-management role is secondary in this analysis because the patent does not make a separate telecentricity claim for Embodiment 4.

## Glass Identification and Selection

The patent gives only `nd` and `νd`, so glass names are catalog matches rather than patent-disclosed names. The data file uses exact or near-exact catalog matches where the `nd`/`νd` pair can be verified from manufacturer catalogs. Numeric anomalous partial-dispersion values are not quoted unless they are directly published for the selected catalog glass and carried into the data file.

| Element | nd | νd | Catalog assignment | Basis and role |
|---|---:|---:|---|---|
| L1, L2 | 1.69680 | 55.5 | S-LAL14 (OHARA) | Exact `nd`/`νd` match; front negative menisci |
| L3 | 1.80518 | 25.5 | S-TIH6 (OHARA) | Dense flint; positive chromatic partner in G1 |
| L4 | 1.49700 | 81.6 | S-FPL51 (OHARA) | ED fluorophosphate-class negative corrector |
| L5 | 1.80610 | 33.3 | NBFD15 / NBFD15-W (HOYA) | Exact HOYA match; no close OHARA S-line match used |
| L6 | 1.77250 | 49.6 | S-LAH66 (OHARA) | High-index rear-unit positive element |
| L7 | 1.58913 | 61.3 | S-BAL35 (OHARA) | Crown component of the cemented achromat |
| L8 | 1.84666 | 23.8 | S-TIH53 (OHARA) | Dense flint component of the cemented achromat |
| L9 | 1.61800 | 63.4 | S-PHM52 (OHARA) | Phosphate-crown focus element |
| L10 | 1.51680 | 64.2 | N-BK7 / S-BSL7 class | Weak fixed rear element; common borosilicate crown class |

The main correction to the prior glass discussion is L5. Assigning it to a generic OHARA-like dense flint is less accurate than the HOYA NBFD15/NBFD15-W match. The analysis also avoids treating exact `ΔPgF` values as patent facts; the patent prescription does not provide partial-dispersion coefficients.

## Focus Mechanism

The lens uses rear-unit inner focus by translating L9 toward the object. L1 and the aperture diaphragm remain fixed relative to the image surface during focus, as required by the patent's main claim structure.

| Parameter | Infinity | Patent 1 m state | Change |
|---|---:|---:|---:|
| d16, gap before L9 | 4.513 mm | 4.405 mm | -0.108 mm |
| d18, gap after L9 | 2.105 mm | 2.214 mm | +0.109 mm |
| Patent EFL | 7.850 mm | 7.847 mm | -0.003 mm |
| Patent F-number | 2.951 | 2.955 | +0.004 |
| BFD | 16.169 mm | 16.169 mm | 0.000 mm |

The production minimum focus distance is 0.1 m. The patent publishes only infinity and 1 m spacing values. The data file therefore stores the patent's 1 m state in the focus variables and records the production MFD separately; it does not extrapolate the 0.1 m focus spacing.

## Conditional Expressions

The patent's conditions are satisfied by Numerical Example 4. Table 11 prints the patent's corresponding values; where a value is independently recomputed below, the computation uses the printed prescription and paraxial ray trace.

| Condition | Expression | Patent range | Recomputed value | Patent Table 11 |
|---|---|---:|---:|---:|
| (1) | R / f | 0.9-2.0 | 1.63 | 1.6 |
| (2) | X / f | 2.0-12.0 | 8.64 if X is full first-surface-to-image distance | 8.8 |
| (3) | Vn - Vp | 20-50 | 34.8 | 34.8 |
| (4) | ff / fG | -4.0-3.0 | 1.90 | 1.9 |
| (5) | f2 / f | 1.1-4.2 | 2.50 | 2.5 |
| (6) | βp | 0.2-0.8 | 0.38 | 0.38 |
| (8) | D1 / f | 0.01-0.20 | 0.071 | 0.07 |

Condition (7) is not applicable because the focusing element in Example 4 is positive. Condition (2) deserves an explicit note: if X is interpreted as the axial distance from the first optical surface to the image plane, the printed prescription gives 67.817 / 7.84969 = 8.64, whereas Table 11 prints 8.8. If X is interpreted as surface 1 to surface 20 only, the ratio is 6.58. The prescription itself is internally consistent and traces to the printed EFL and BFD; the Table 11 condition-(2) value appears to use an additional convention or table-level rounding/editorial value not recoverable from the surface table alone.

## Verification Summary

Independent paraxial verification was re-run from the patent tables using a surface-by-surface y-nu / ABCD trace. The following values are from the corrected extraction.

| Quantity | Recomputed | Patent value | Result |
|---|---:|---:|---|
| System EFL, infinity | 7.849690 mm | 7.850 mm | matches |
| System EFL, patent 1 m state | 7.847133 mm | 7.847 mm | matches |
| Front unit G1 focal length | -110.861 mm | -110.85 mm | matches |
| Rear unit G2 focal length | +19.594 mm | +19.59 mm | matches |
| L9 focus-element focal length | +37.221 mm | +37.22 mm | matches |
| L7/L8 cemented doublet net focal length | -63.204 mm | not tabulated | derived |
| Total first-surface-to-image distance | 67.817 mm | 67.817 mm | matches |
| BFD | 16.169 mm | 16.169 mm | matches |
| Petzval sum, surface formula Σφ/(n n') | +1.1549e-4 mm^-1 | not tabulated | derived |

The Petzval sum corresponds to a curvature radius magnitude of about 8.66 m under the sign convention used here. The previous wording that implied a literal zero or a fixed negative Petzval radius has been replaced with the signed computed sum and its magnitude.

The data file's aperture is deliberately not the patent wide-open aperture. The paraxial entrance-pupil trace gives an aperture-stop semi-diameter of about 3.413 mm for the patent F/2.951 state, but the production F/3.5 state requires a smaller stop semi-diameter of about 2.878 mm. The data file uses the latter so that the rendered prescription corresponds to the marketed lens aperture while retaining `apertureDesign: 2.951` for the patent value.

## Data-File Implementation Notes

The `.data.ts` file transcribes Numerical Example 4 without scaling. The surfaces, glass indices, and focus-variable gaps are the patent values. The only deliberate deviations are documented here:

1. The stop diameter uses the production F/3.5 aperture rather than the patent F/2.951 aperture.
2. The focus variables reproduce the patent's 1 m focus state, while the metadata records the production 0.1 m MFD. The production close-focus spacing is not tabulated in the patent and has not been extrapolated.
3. Semi-diameters are estimated because the patent omits clear-aperture data. They were constrained by front/rear element diameter ratios, edge-thickness checks, signed cross-gap sag intrusion, and `sd/|R| < 0.90`.
4. Projection metadata is set to equisolid fisheye projection using Panasonic's published projection type and 180° diagonal coverage.

## Sources

1. US 2012/0147254 A1 - Nobuyuki Adachi and Takuya Imaoka, Panasonic Corporation, "Imaging Optical System, Interchangeable Lens Apparatus and Camera System," published June 14, 2012.
2. Panasonic H-F008 / H-F008E product specifications - focal length, F-number, 10-element / 9-group construction, one ED element, Micro Four Thirds mount, closest focusing distance, 180° field, equisolid projection, aperture blades, and physical dimensions.
3. OHARA optical glass catalog and product datasheets - S-LAL14, S-TIH6, S-FPL51, S-LAH66, S-BAL35, S-TIH53, and S-PHM52 catalog matches.
4. HOYA optical glass catalog - NBFD15 / NBFD15-W catalog match for L5.
5. SCHOTT optical glass catalog - N-BK7 class reference for the rear crown element.
