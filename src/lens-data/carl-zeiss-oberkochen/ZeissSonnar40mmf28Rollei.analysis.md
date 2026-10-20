# CARL ZEISS SONNAR 40mm f/2.8 (Rollei 35 S)

## Patent Reference and Design Identification

**Patent:** US 3,994,576  
**Priority:** April 20, 1974 (Germany 24 19140)  
**Filed:** April 17, 1975  
**Granted:** November 30, 1976  
**Inventors:** Erhard Glatzel; Heinz Zajadatz  
**Assignee:** Carl-Zeiss-Stiftung  
**Title:** *Objective Lens System with Five Elements*  
**Embodiment analyzed:** Example 7

The prescription modeled here is Example 7 of US 3,994,576. The patent describes the design as a five-element, four-component objective of the “expanded Tessar type”: three individually air-spaced elements form the front member, followed by a cemented two-element rear component. Example 7 is normalized to an equivalent focal length of `F = 1.00000`, with a published relative aperture of f/2.9, a total field `2ω₀′ = 53.8°`, and an infinity back focus of `0.6341 F`. The copy of the same table in claim 8 prints the field as 53.5°; all other values agree. [US 3,994,576, PDF p. 8, Example 7; PDF p. 14, claim 8.]

Example 7 is the finished, glass-specified form of the Example 1 preform. The patent states that Examples 1–4 are monochromatic third-order preforms that list d-line indices only. Example 7 keeps the Example 1 layout, back focus and aperture, with revised radii and thicknesses (for example, the radius R1′ is 10% shorter and L4 is 30% thinner), and it prints a full `nd/νd` pair for every element. [US 3,994,576, PDF pp. 6, 8.]

The association with the Rollei 35 S is inferred. Rollei literature describes a retractable Rollei HFT Sonnar 40 mm f/2.8 for the 24 × 36 mm format, with five elements in four components, made by Rollei under licence from Carl Zeiss, Oberkochen. The Zeiss assignment, the 1974 German priority date (the year the 35 S appeared), the element and component count, and the cemented rear doublet all agree with the patent. No Zeiss or Rollei source located identifies US 3,994,576 or a particular example as the production prescription, and no published cross-section of the production lens was found for comparison.

The model keeps production and patent values separate. The camera data remain 40 mm f/2.8 on a fixed-lens 24 × 36 mm camera; the modeled optical design is the 40×-scaled Example 7 prescription at f/2.9.

## Optical Architecture

The patent architecture is a positive-positive-negative front member followed, across the diaphragm space, by a cemented negative-positive rear component. In the final model the first three elements are separate air-spaced components A, B, and C; L4 and L5 form cemented component D. The patent specifically characterizes L1 and L2 as collecting elements and L3 as a negative element, and it describes the air space between L2 and L3 as a dispersing air lens. The rear doublet combines elements of opposite power at a collecting cemented interface. [US 3,994,576, PDF pp. 3, 6.]

All patent dimensions were uniformly multiplied by 40.0. The paraxial EFL of the model is 40.0005 mm. The first-to-last vertex length is 17.770 mm and the computed back focal distance is 25.364 mm (`BFD/EFL = 0.634`), so the lens is 43.13 mm from front vertex to image.

The source prints the rear doublet as two coincident surfaces, `R4′` and `R5`, both at the same radius with zero spacing. The model represents them as one cemented L4→L5 interface, which leaves the paraxial transfer and the Petzval sum unchanged.

## Element-by-Element Analysis

### L1 — Positive Meniscus, Front Collector A

`nd = 1.71700`, `νd = 47.99`. Glass: **LAF3 (HOYA; Schott LaF3 equivalent)**. f = +38.41 mm (in air).

L1 is the first collecting element in the patent's front member. Its positive power is paired with L2 under the patent's curvature and Petzval-distribution conditions, which treat the two front collectors as a pair rather than assigning a separate correction task to L1. [US 3,994,576, PDF pp. 3–5, Table II on PDF pp. 11–12.]

### L2 — Positive Meniscus, Front Collector B

`nd = 1.71700`, `νd = 47.99`. Glass: **LAF3 (HOYA; Schott LaF3 equivalent)**. f = +33.45 mm (in air).

L2 is the second collecting element and a positive meniscus of the same glass as L1. The patent makes the relative form and power distribution of L1 and L2 central to its design rules: their front-surface curvature relation defines the Gardner condition, while their element powers divided by refractive index define the paired Petzval condition. In Example 7 L2 carries slightly more Petzval contribution than L1 (Table II: `B − A = +0.08924 Φ`).

L2's rear surface also forms one boundary of the strongly curved air space ahead of L3, which the patent describes as a dispersing air lens.

### L3 — Negative Meniscus, Component C

`nd = 1.78472`, `νd = 25.76`. Glass: **SF11 (Schott)** — dense flint. f = −14.24 mm (in air).

L3 is the negative third element of the front member. Its rear surface is the most strongly curved surface of the element, matching the patent's description of the third element as an unequal-sided negative lens whose strongest curvature is concave toward the rear. Together with the preceding L2 surface, it completes the dispersing air lens identified in the patent. [US 3,994,576, PDF p. 3.]

The three-element front member has a net paraxial power of about +5.12 D (f ≈ +195 mm) in the scaled model, far weaker than the individual element powers.

### L4 — Negative Meniscus, Rear Component D

`nd = 1.63854`, `νd = 55.38`. Glass: **S-BSM18 (OHARA; Schott SK18 coordinate equivalent)** — dense barium crown. f = −22.69 mm (in air).

L4 is the negative member of the cemented rear component. In the source table its rear surface is printed separately from the coincident front surface of L5, with zero axial spacing; the model treats the common radius as one cemented boundary.

### L5 — Biconvex Positive, Rear Component D

`nd = 1.74400`, `νd = 44.77`. Glass: **S-LAM2 (OHARA; Schott LaF2 coordinate equivalent)** — lanthanum flint. f = +13.87 mm (in air).

L5 is the positive member of the rear doublet. Together L4 and L5 have a net power of about +29.76 D (f ≈ +33.6 mm), which supplies most of the system's convergence behind the stop. The cemented interface is collecting (the index rises from 1.639 to 1.744 across a surface convex to the object), as the patent requires for the rear member.

L5 is modeled as a square-cut element with both faces at a 7.6 mm semi-diameter, which leaves an edge about 1.5 mm thick. The value follows the patent figure, where the rear member is drawn clearly smaller than L2. It is not a published mechanical dimension.

## Glass Identification / Selection

Example 7 prints `nd/νd` for every element. Each pair matches a classic Schott glass of the period, and each is modeled with a current catalog glass at the same coordinates:

| Element | Patent `nd/νd` | Schott type | Modeled catalog glass | Role |
|---|---|---|---|---|
| L1, L2 | 1.71700 / 47.99 | LaF3 | LAF3 (HOYA), 1.71700 / 47.98 | Positive front collectors |
| L3 | 1.78472 / 25.76 | SF11 | SF11 (Schott), 1.78472 / 25.76 | Negative dense flint |
| L4 | 1.63854 / 55.38 | SK18 | S-BSM18 (OHARA), 1.63854 / 55.38 | Negative member of the rear doublet |
| L5 | 1.74400 / 44.77 | LaF2 | S-LAM2 (OHARA), 1.74400 / 44.79 | Positive member of the rear doublet |

The Schott identities are inferred from the printed coordinates; the patent names no glasses. The modeled catalog glasses supply dispersion for the chromatic analyses. The palette is a conventional achromat: high-index lanthanum glasses carry the positive power at low Petzval cost, the dense flint L3 corrects color in the front member, and the doublet pairs a crown with a lanthanum flint. No anomalous-partial-dispersion behavior is claimed.

## Focus Mechanism

Rollei literature gives manual focusing from infinity to 0.9 m (3 ft). Example 7 publishes only the infinity prescription, with no close-focus spacing or description of the focusing movement.

The model therefore shows the infinity state only. The 0.9 m minimum focus distance is the camera's published value; no claim is made about which lens cell moves or by how much.

## Conditional Expressions and Patent Conditions

The patent's design rules give special treatment to the first two collecting elements. Recalculated at the patent's `F = 1` scale, Example 7 gives:

| Condition (claim 1) | Range | Example 7 | Table II |
|---|---|---|---|
| (a) Gardner index `(R2 − R1)/(R2 + R1)` | −0.244 to +0.094 | −0.0611 | −0.0611 |
| (b₁) `B − A` | −0.541 Φ to +0.092 Φ | +0.08924 Φ | +0.08924 Φ |
| (b₂) `(B − A)/(B + A)` | −0.566 to +0.076 | +0.0739 | +0.07385 |
| `nd` of L1 and L2 | 1.6454 to 1.80279 | 1.71700 | — |

`A` and `B` are the thin-lens powers of L1 and L2 divided by their refractive indices; Table II's values are reproduced with that definition. Example 7 satisfies all three conditions and the index range, although its `B − A` and quotient lie close to the upper limits.

The Petzval sum of the complete scaled model is **+0.00651 mm⁻¹** (`φ/(n·n′)` summed over every refracting surface), corresponding to a Petzval radius of about 154 mm, 3.8 times the focal length.

## Aperture, Pupil, and Geometry Model

The patent states that the diaphragm lies in the central air space between L3 and L4 but does not publish its axial split. Its drawing is expressly schematic rather than dimensionally authoritative; it shows the diaphragm about three-quarters of the way across that space, nearer L4. The model therefore places the single `STO` at the midpoint of that air space, splitting the scaled gap into **2.0117 mm + 2.0117 mm**. This is a modeling choice, not a patent dimension.

The patent also does not publish a diaphragm diameter. The stop semi-diameter (about 4.80 mm) is set so that the paraxial entrance pupil, 6.90 mm in semi-diameter, gives the printed f/2.9. This reproduces the published f-number; it is not evidence of the manufactured diaphragm's size or position.

No surface semi-diameters are given in the patent, and its single figure is a schematic for all examples, "not necessarily drawn to scale". The rim heights it draws for L1–L3 agree, at one common scale, with modeled values that contain the real-ray bundles over the patent field. The rear member is drawn smaller: L4's front face ends at about the diaphragm's height before a chamfer, and the L4/L5 rims sit well below L2. The model follows the figure there, with a 5.5 mm semi-diameter on L4's front face and 7.6 mm on the cemented interface and L5's rear face. These rims cut into oblique bundles. At full aperture the meridional geometric transmission falls to about 78% at the 26.9° patent field edge and 75% at the 28.1° corner of the 24 × 36 mm format. The clear apertures of the manufactured Rollei lens are not known.

## Model Scope and Limitations

The data file is a 40× uniform scaling of Example 7, with the coincident rear-doublet surfaces merged into one cemented interface. The model's paraxial EFL is 40.0005 mm (patent: 1.00000 F) and its back focal distance is 25.364 mm (patent: 0.6341 F); the last gap is the printed back focus.

Design and production values are not reconciled: the model is f/2.9 with the patent's 53.8° design field, while Rollei marketed the lens as 40 mm f/2.8. The patent calls the architecture an expanded Tessar type, while the product carries Sonnar branding.

## Sources / References

1. Erhard Glatzel and Heinz Zajadatz, **“Objective Lens System with Five Elements,” US Patent 3,994,576**, Carl-Zeiss-Stiftung, granted November 30, 1976. Relevant locations: front page; description on PDF pp. 3–6; Example 1 on PDF p. 6; Example 7 on PDF p. 8; Tables I–II and claims on PDF pp. 11–12; claim 8 on PDF p. 14.
2. Rollei-Werke Franke & Heidecke, **“Rollei 35/35T/35S In Practical Use.”** Manufacturer-origin manual, archival reproduction: https://www.manualslib.com/manual/141972/Rollei-35-S.html
3. Rollei, **“Rollei 35S technical data,” January 1978.** Manufacturer-origin technical sheet, archival reproduction: https://manuals.plus/m/51faa396545606a4f2f5ae098af0b30971108308b5d7ed9c1ca583cadf01bc3e
4. Optical-glass catalogs used for the modeled glasses: OHARA (https://oharacorp.com/glass-type/s-lam/), HOYA (https://www.hoya-opticalworld.com/english/datadownload/index.html), SCHOTT (https://www.schott.com/en-us/products/optical-glass-p1000267).
