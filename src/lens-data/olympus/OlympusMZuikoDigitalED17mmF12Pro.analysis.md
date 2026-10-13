## Patent Reference and Design Identification

**Patent:** US 10,073,255 B2
**Application Number:** 15/494,687
**Filed:** 2017-04-24
**Granted:** 2018-09-11
**Priority:** 2016-08-01
**Inventors:** Masaru Morooka, Kenichi Nagasawa
**Assignee:** Olympus Corporation
**Title:** Single focal length lens and optical apparatus using the same
**Embodiment analyzed:** Example 4

The selected embodiment is correlated with the Olympus M.Zuiko Digital ED 17mm F1.2 PRO. The prescription remains an
inferred production correlation; neither the patent nor the manufacturer references confirm that the retail lens uses
this exact numerical design. The patent front page establishes attribution and dates; its Example 4 prescription is on
PDF page 30, printed columns 23–24, and its optical section is Figure 4 on PDF page 6. [1]

The convergent evidence is:

1. The lens has 15 elements in 11 air-separated groups, excluding the camera-side plate,
   matching the manufacturer’s construction count. [1, 2]
2. The computed infinity EFL is 16.671803 mm and the aperture computed from the printed iris is F/1.239908; the
   marketed specifications are 17 mm and F/1.2. The data file keeps both the design and the marketed values. [1, 2]
3. The patent's closest object-to-image distance is 199.99 mm,
   consistent with the marketed 0.2 m minimum focus distance. [1, 2]
4. The patent has 6 aspherical surfaces on three elements, and its internal focusing unit is a cemented
   doublet. Olympus describes a lightweight MSC focusing unit and ED-DSA construction for the product, without identifying
   a particular patent glass melt or every aspheric element. [1, 3]
5. The priority and filing precede the 2017-10-26 announcement and the manufacturer-confirmed
   2018-01 launch month. [1, 3, 4]

The production lens uses the Micro Four Thirds mount and Four Thirds format. Its marketed full field is
65°, whereas the patent’s infinity summary states 67.55°. The traced prescription does not reproduce that field
together with the printed image height, as discussed below. Neither number is substituted for the other. The marketed maximum magnification 0.15× is likewise distinct from the
computed signed Gaussian close-state magnification -0.144600. [1–3]

## Optical Architecture

This is a negative-front, four-unit internal-focus wide-angle design. The functional power sequence is
negative–positive–negative–positive. The 11 air-separated optical groups are different from the four
functional units G1–G4; four cemented doublets account for the difference between element and air-group counts. The stop
lies between G1 and G2. [1, printed columns 18–19]

| Unit | Elements | Standalone unit EFL, mm | Function and motion                               |
| ---- | -------- | ----------------------: | ------------------------------------------------- |
| G1   | L1–L7    |              -36.714153 | Fixed negative front unit                         |
| G2   | L8–L12   |              +25.714485 | Fixed positive unit behind the stop               |
| G3   | L13–L14  |              -35.498888 | Negative cemented focusing unit, moving imageward |
| G4   | L15      |              +33.103414 | Fixed positive rear unit                          |

The combined G1+G2 EFL is 15.531123 mm. The patent regulates this combination so that the rear units do
not bear an excessive correction burden as G3 moves. Within G2, the positive first subunit is followed by the negative
L11 and positive L12 subunits; the patent calls the latter negative–positive arrangement a retro-focus type. This is a
statement about the subassembly rather than an unqualified classification of the whole lens. [1, printed columns 5–8]

Reference planes matter for the complete system. At infinity, the computed Gaussian BFD from the last lens vertex is
15.782773 mm in air alone. Including the camera plate’s focus shift gives 17.182282 mm, slightly greater than the EFL;
from the plate exit the Gaussian focus is 2.072282 mm away. These cardinal distances are distinct from the patent’s
fixed image-plane location, 104.99 mm behind the first vertex.

The patent’s camera plate C is kept in the model as a physical rear plate: 4.11 mm thick, nd = 1.51633, νd = 64.14,
with 11.00 mm of air before it and 2.05 mm after it. It is traced but not drawn as a lens element, and the printed
gaps are not folded into an air-equivalent distance. The air-equivalent rear distance, 15.760492 mm, is quoted for
comparison only. [1, PDF page 26, printed column 15; page 30]

No dimensional scaling is applied. Published radii, thicknesses, gaps and asphere coefficients remain in millimetre-based
units. Clear semi-diameters are estimated from the ends of the optical curves in Figure 4, excluding mechanical flanges
and flat annuli; the patent does not tabulate lens rims, and its figure is a schematic rather than a manufacturing
drawing. The iris diameter, in contrast, is printed: 28.98 mm.

## Element-by-Element Analysis

The focal lengths below are standalone thick-element EFLs in air, calculated at the patent’s d-line index. They do not
represent an element’s in-situ power within a cemented assembly. The cemented net powers are computed separately using
the actual internal index transition. Shape names follow the data file and the patent’s object-to-image order.
Each glass name is the catalog glass at the patent’s nd/νd coordinate; suppliers are unconfirmed.
The patent provides group-level design reasoning, not a measured allocation of each aberration to an individual element.
The element interpretations below therefore distinguish geometry and group membership from verified correction claims.

### L1 — Negative Meniscus

nd = 1.48749, νd = 70.23. Glass: S-FSL5 (OHARA; coordinate equivalent; supplier unconfirmed). f = -64.0 mm.

L1 opens the negative front unit with its convex face toward the object. The relatively low-dispersion crown is paired geometrically with the following negative meniscus. The patent associates two object-facing negative menisci with management of off-axis aberrations in its wide, large-aperture arrangement; this does not establish an isolated coma coefficient for L1. [1, printed columns 7–8, 18]

### L2 — Negative Meniscus (2× Asph)

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA; coordinate equivalent; supplier unconfirmed). f = -49.8 mm.

Both surfaces of L2 are aspherical. This second negative meniscus belongs to the object-side subunit of G1 and supplies nonspherical shape freedom before the first cemented pair. Its front and rear aspheres must be interpreted together with their conic terms; the sign of A4 alone does not characterize either complete rim profile. [1, printed columns 18–19; Example 4 aspheric data]

### L3 — Biconvex Positive

nd = 2.00100, νd = 29.13. Glass: TAFD55 (HOYA; coordinate equivalent; supplier unconfirmed). f = +20.9 mm.

L3 is the positive member of D1, cemented to L4. Its very high index and biconvex shape produce substantially stronger standalone positive power than the weak positive power of the complete doublet. D1 has a computed net EFL of +120.463463 mm. HOYA lists both TAFD55 and TAFD55-W at the published coordinate; the model uses TAFD55. The coordinate match does not establish a production supplier or melt. [1, printed column 18; Example 4; 5]

### L4 — Biconcave Negative

nd = 1.60342, νd = 38.03. Glass: S-TIM5 (OHARA; coordinate equivalent; supplier unconfirmed). f = -23.0 mm.

L4 is the negative member of D1 and the last element of G1’s object-side subunit. Its rear surface bounds the substantial air space before L5. The cancellation between the positive and negative components explains the difference between standalone element and cemented-doublet power; it is not by itself a quantitative demonstration of achromatization. [1, printed columns 18–19]

### L5 — Biconcave Negative

nd = 1.67300, νd = 38.15. Glass: S-NBH52 (OHARA; coordinate equivalent; supplier unconfirmed). f = -19.7 mm.

L5 begins G1’s image-side subunit and is cemented to L6 as D2. The doublet remains negative, with net EFL -39.377525 mm. Together with the preceding L4 rear surface, its concave front surface bounds the biconvex-shaped air space explicitly discussed in the patent. The inferred optical rim excludes the outer mechanical flange in Figure 4. [1, printed columns 7–8, 18–19]

### L6 — Biconvex Positive

nd = 1.59282, νd = 68.63. Glass: FCD515 (HOYA; coordinate equivalent; supplier unconfirmed). f = +44.0 mm.

L6 supplies the positive component of D2. Its lower dispersion contrasts with the flint-like negative partner, consistent with the patent’s group-level chromatic-correction rationale. HOYA’s 2017 catalog lists FCD515 at the patent’s νd of 68.63 and its 2026 catalog lists 68.62; the data file keeps the patent value. Neither that match nor the power signs prove the production supplier or residual secondary spectrum. [1, printed columns 7–8, 18; 5]

### L7 — Positive Meniscus

nd = 1.76200, νd = 40.10. Glass: S-LAM55 (OHARA; coordinate equivalent; supplier unconfirmed). f = +51.9 mm.

L7 ends G1 immediately before the stop and has its convex face toward the image. It adds positive power to the image-side subunit without making G1 positive overall. Its location is relevant to pupil transfer and ray heights at the stop, but a separate aberration contribution has not been isolated. [1, printed column 18]

### L8 — Biconvex Positive

nd = 1.59282, νd = 68.63. Glass: FCD515 (HOYA; coordinate equivalent; supplier unconfirmed). f = +42.2 mm.

L8 is the first element behind the stop and begins G2’s positive first subunit. The patent connects this subunit with lowering front-unit ray height and controlling spherical aberration at a large aperture. This is a subunit-level explanation; the present calculation does not assign that entire correction to L8 alone. [1, printed columns 7–8, 18–19]

### L9 — Negative Meniscus

nd = 1.84666, νd = 23.78. Glass: S-TIH53 (OHARA; coordinate equivalent; supplier unconfirmed). f = -136.4 mm.

L9 is the negative meniscus member of D3, cemented to L10. The dense-flint coordinate contrasts strongly in dispersion with its positive partner. D3 nevertheless has weak positive net power, with EFL +149.220814 mm; neither member’s standalone focal length is the net value of the assembly. [1, printed column 18; Example 4]

### L10 — Biconvex Positive

nd = 1.43700, νd = 95.10. Glass: FCD100 (HOYA; coordinate equivalent; supplier unconfirmed). f = +71.3 mm.

L10 completes D3 and G2’s first subunit. Its prescription νd = 95.10, which is also FCD100’s listed value, is kept even though the condition-summary row prints 94.93. Both exceed the patent’s lower bound, but they are not the same printed value. The high Abbe number supports the stated low-dispersion strategy; it does not identify a production melt or prove apochromatism. [1, printed columns 8, 18, 24]

### L11 — Negative Meniscus (2× Asph)

nd = 1.74320, νd = 49.34. Glass: S-LAM60 (OHARA; coordinate equivalent; supplier unconfirmed). f = -100.0 mm.

The double-aspherical negative meniscus L11 forms G2’s second subunit by itself. It is followed by positive L12, forming the patent’s local negative–positive arrangement. Its polynomial departures are strongly asymmetric between front and rear surfaces. Those computed profiles give shape freedom for the patent’s large-aperture spherical/coma correction, without proving a unique contribution from this element. [1, printed columns 8, 19]

### L12 — Biconvex Positive (2× Asph)

nd = 1.49700, νd = 81.61. Glass: FCD1 (HOYA; coordinate equivalent; supplier unconfirmed). f = +36.6 mm.

L12 is the double-aspherical positive third subunit of G2. The patent relates this rear positive subunit to principal-plane placement and reduction of off-axis height at the focusing unit. It is one of the positive G2 elements satisfying the high-Abbe condition. That architectural role remains separate from any unverified chromatic-performance claim. [1, printed columns 8, 19]

### L13 — Biconvex Positive

nd = 1.85025, νd = 30.05. Glass: S-NBH57 (OHARA; coordinate equivalent; supplier unconfirmed). f = +83.7 mm.

L13 is the positive component of the moving doublet D4/G3. It is cemented to L14, so its isolated positive EFL does not determine the sign of the focusing unit. OHARA lists S-NBH57 at nd 1.850249 and νd 30.05, and the model takes that glass’s dispersion curve; the match is to the patent coordinate, not a supplier attribution. [1, printed column 18; 5]

### L14 — Biconcave Negative

nd = 1.66680, νd = 33.05. Glass: S-TIM39 (OHARA; coordinate equivalent; supplier unconfirmed). f = -24.7 mm.

L14 provides sufficient negative contribution for D4/G3 to have net EFL -35.498888 mm. The whole cemented doublet translates imageward during close focusing; its internal interface does not change. The patent links this negative focusing unit to reduced travel and controlled focus-dependent aberration change. [1, printed columns 5–6, 18–19]

### L15 — Biconvex Positive

nd = 1.59282, νd = 68.63. Glass: FCD515 (HOYA; coordinate equivalent; supplier unconfirmed). f = +33.1 mm.

L15 is the fixed positive rear unit G4. Its standalone and unit focal lengths coincide because G4 contains one element. The patent associates the positive unit behind negative G3 with Petzval and chromatic balancing. That system-level rationale does not justify naming L15 a verified field flattener. The camera plate follows it as a separate physical part of the patent’s prescription. [1, printed columns 5–6, 18; Example 4]

## Glass Identification and Selection

The patent publishes d-line index and Abbe coordinates, not glass trade names. Each element is labelled with one
catalog glass at that coordinate, and the model takes that glass’s catalog dispersion curve; the data file keeps the
patent’s nd and νd. OHARA, HOYA, SCHOTT, HIKARI, CDGM and Sumita catalogs were compared. A matching coordinate does not
establish supplier, manufacturing method, melt identity or exact spectrum. [1, 5]

| Elements    | Patent nd | Patent νd | Catalog glass   | Catalog nd | Catalog νd | Note                                         |
| ----------- | --------: | --------: | --------------- | ---------: | ---------: | -------------------------------------------- |
| L1          |   1.48749 |     70.23 | S-FSL5 (OHARA)  |    1.48749 |      70.24 | Listed νd is 0.01 above the patent’s         |
| L2, L12     |   1.49700 |     81.61 | FCD1 (HOYA)     |    1.49700 |      81.61 |                                              |
| L3          |   2.00100 |     29.13 | TAFD55 (HOYA)   |    2.00100 |      29.13 | TAFD55-W is listed at the same coordinate    |
| L4          |   1.60342 |     38.03 | S-TIM5 (OHARA)  |    1.60342 |      38.03 |                                              |
| L5          |   1.67300 |     38.15 | S-NBH52 (OHARA) |    1.67300 |      38.15 | S-NBH52V (νd 38.26) is a different glass     |
| L6, L8, L15 |   1.59282 |     68.63 | FCD515 (HOYA)   |    1.59282 |      68.63 | 2017 catalog; the 2026 catalog lists 68.62   |
| L7          |   1.76200 |     40.10 | S-LAM55 (OHARA) |    1.76200 |      40.10 |                                              |
| L9          |   1.84666 |     23.78 | S-TIH53 (OHARA) |    1.84666 |      23.78 |                                              |
| L10         |   1.43700 |     95.10 | FCD100 (HOYA)   |    1.43700 |      95.10 | The patent’s condition table prints 94.93    |
| L11         |   1.74320 |     49.34 | S-LAM60 (OHARA) |    1.74320 |      49.34 | L-LAM60 (νd 49.30) is a different glass      |
| L13         |   1.85025 |     30.05 | S-NBH57 (OHARA) |    1.85025 |      30.05 |                                              |
| L14         |   1.66680 |     33.05 | S-TIM39 (OHARA) |    1.66680 |      33.05 |                                              |
| Plate C     |   1.51633 |     64.14 | S-BSL7 (OHARA)  |    1.51633 |      64.14 | L-BSL7 (νd 64.07) is a different glass       |

Catalog values are rounded to the patent’s precision. Catalog comparisons use d = 587.5618 nm, C = 656.2725 nm,
F = 486.1327 nm and g = 435.8343 nm.

OHARA S- and L-prefix glasses are distinct materials and are not interchanged. The 1.49700/81.61 coordinate of L2 and
L12 is HOYA FCD1’s listed value; OHARA’s current S-FPL51 is listed at νd 81.55 and is not used. The data file carries
no nC, nF, ng or ΔPgF fields, because the patent supplies none; line indices come from the named catalog glass and
describe that glass, not a confirmed production melt. [5]

## Focus Mechanism

The patent specifies internal focusing by translating the negative cemented G3 imageward while G1, G2 and G4 are fixed.
All three focus states the patent tabulates are used as printed; no focus cam or further state is reconstructed. The
manufacturer describes MSC focusing and a manual-focus clutch, but does not identify the moving group’s prescription
or a motor technology beyond that description. [1, printed columns 18–19; 3]

| Patent state | Object to first vertex, mm | d22, mm | d25, mm | First vertex to image, mm | Object to image, mm |
| ------------ | -------------------------: | ------: | ------: | ------------------------: | ------------------: |
| INF          |                          ∞ |    1.98 |    7.57 |                    104.99 |                   ∞ |
| CL1          |                     813.34 |    2.34 |    7.21 |                    104.99 |              918.33 |
| CL2          |                      94.99 |    4.65 |    4.91 |                    105.00 |              199.99 |

The front variable gap records total G3 travel of 2.67 mm, while the rear gap records 2.66 mm. The 0.01 mm mismatch is
rounding in the patent and is left as printed. The close distance quoted from the image is distinct from the patent’s
object-to-first-vertex distance. Printed magnifications are -0.02 and -0.15; the Gaussian values computed from the
prescription are -0.020001 and -0.144600. The CL2 difference is not fully explained by rounding and is left unresolved.

Between the printed states the model interpolates the two gaps, and the object-to-image distance it displays there is
interpolated in reciprocal distance between ∞, 918.33 mm and 199.99 mm. Those intermediate readings are estimates, not
patent data.

## Aspherical Surfaces

The six aspheres are both surfaces of L2, L11 and L12: patent surfaces 3, 4, 19, 20, 21 and 22, labeled
3A, 4A, 19A, 20A, 21A and 22A in the data file. The patent defines the sag as

$$
z(y)=\frac{y^2/R}{1+\sqrt{1-(1+K)y^2/R^2}}+A_4y^4+A_6y^6+A_8y^8.
$$

Here the data file’s K equals the patent’s k; K = 0 is the spherical base. Radii and heights are in mm. The coefficient
units are mm⁻³, mm⁻⁵ and mm⁻⁷ for A4, A6 and A8. This example contains no odd radial powers. Orders above A8 are not
published and are set to zero. No coefficient scaling is applied. [1, PDF page 28, printed column 19; page 30,
Example 4]

| Surface |      K |     A4, mm⁻³ |     A6, mm⁻⁵ |     A8, mm⁻⁷ |
| ------- | -----: | -----------: | -----------: | -----------: |
| 3A      |  0.000 |  6.39453e-06 | -5.82819e-08 |  1.46593e-10 |
| 4A      | -0.828 |  2.81137e-05 | -6.66953e-08 |  2.46322e-13 |
| 19A     |  0.000 | -3.96187e-07 |  1.84354e-08 | -1.16042e-10 |
| 20A     |  0.000 |  1.87054e-05 |  8.61743e-08 | -4.73479e-11 |
| 21A     |  0.000 |  1.05728e-05 |  7.42740e-08 | -4.38814e-11 |
| 22A     |  0.000 |  1.35526e-05 | -2.20924e-08 | -2.06785e-11 |

The following departures are computed at the modeled clear semi-diameters, which are figure estimates rather than
patent-published apertures. A departure from the base conic isolates the polynomial; the same-radius-sphere comparison
includes the conic change.

| Surface | Modeled semi-diameter, mm | Departure from base conic, µm | Departure from same-radius sphere, µm | Absolute rim-slope angle, ° |
| ------- | ------------------------: | ----------------------------: | ------------------------------------: | --------------------------: |
| 3A      |                      14.3 |                       +25.358 |                               +25.358 |                      23.488 |
| 4A      |                      12.2 |                      +403.019 |                              -998.744 |                      44.987 |
| 19A     |                      14.2 |                       -56.800 |                               -56.800 |                       7.365 |
| 20A     |                      14.2 |                     +1388.758 |                             +1388.758 |                      40.971 |
| 21A     |                      13.6 |                      +780.312 |                              +780.312 |                      29.179 |
| 22A     |                      13.6 |                      +299.646 |                              +299.646 |                      28.049 |

At 3A, the polynomial terms partly cancel and leave a small positive rim departure. At 4A, the polynomial departure is
positive relative to the negative-K conic base, while the full surface lies below the same-radius spherical sag;
the negative conic constant must therefore be included in any description of peripheral flattening. At 19A, the net rim
departure is negative even though its middle-order term is positive. At 20A, the positive lower-order terms dominate the
negative highest-order term at the modeled rim. At 21A, the net departure increases positive sag; at 22A, a positive net
departure reduces the magnitude of the negative base sag. These profile statements do not isolate an aberration coefficient.

Olympus describes ED-DSA technology for the production lens, but the numerical prescription alone does not establish
which patent element corresponds to a particular production molding process. No blanket molded-glass or hybrid-resin
assignment is made to the three aspherical elements. [3]

## Chromatic Correction Strategy

The design places low-dispersion positive members in G2, particularly L10 and L12, alongside negative elements of higher
dispersion. The patent explicitly motivates a high-Abbe positive lens behind the negative front unit as a way to limit
longitudinal color at a large aperture. D3 is a clear example of a dense-flint/very-low-dispersion pairing, while the
cemented groups in G1 and G3 distribute positive and negative contributions differently. [1, printed columns 7–8]

Six elements sit at low-dispersion catalog coordinates: L10 (νd 95.10), L2 and L12 (81.61, both double-aspherical), and
L6, L8 and L15 (68.63). The maker's specification lists one Super ED, three ED and one ED-DSA element (its Asia listing
adds one EDA element), by count and without positions. The data file tags the six elements by class on that basis:
L10 as the Super ED element, L6, L8 and L15 as the ED elements, and L2 and L12 as the ED-DSA and EDA pair, whose order
is not published. No maker construction diagram was viewed, and the patent names no glass. [1, 3, 6]

This is a patent-grounded correction strategy rather than proof of a particular residual spectrum. The d-line
prescription and catalog dispersion curves do not establish apochromatic performance, production secondary-spectrum
correction, or measured anomalous partial dispersion. No exact θgF or ΔPgF claim is made.

## Aberration Correction Strategy

The patent’s explanation combines controlled front-unit power, the positive–negative–positive subdivision of G2 and the
single negative focusing doublet. It attributes reduced focus-dependent aberration variation to distributing the power
and correction load between these units. Aspheres in the local negative–positive rear portion of G2 provide additional
large-aperture spherical/coma correction freedom. [1, printed columns 5–8]

The surface-by-surface d-line Petzval sum is 0.003794418786 mm⁻¹, evaluated as the sum of
φ/(n·n′) at each refracting interface. The planar stop and plate contribute zero power. This small positive sum is a
paraxial invariant, not a measured image-surface curvature, an astigmatism calculation, or a flat-field guarantee.

## Air Lens

The air gap between the rear surface of L4 and front surface of L5 is biconvex-shaped in the optical section. The patent
explicitly associates this air lens between G1’s object-side and image-side subunits with spherical-aberration and
astigmatism correction at large aperture. Figure 4 draws flat annuli outside both optical curves, in contact at the rim;
the modeled rims (9.8 mm) end just inside the drawn curve ends (about 10.1 mm). The model does not treat that curved
air region as a separate element or infer an isolated aberration contribution from its shape. [1, printed columns 7–8, 18–19; Figure 4]

## Conditional Expressions

The inequalities below are the patent’s broad design conditions. EFL ratios use the computed infinity system EFL; unit
focal lengths are standalone unit values. Dm is the maximum variable air spacing, St the maximum iris diameter, DA the
summed inter-lens air thickness and DL the summed glass thickness between the first and last lens surfaces. [1, printed
columns 5–10; Example 4 condition table]

| Condition | Published inequality | Model value    | Result                                                        |
| --------- | -------------------- | -------------- | ------------------------------------------------------------- |
| (1) f1/f  | −5 < f1/f < −0.5     | -2.202170452   | Within bounds; printed -2.203                                 |
| (2) f3/f  | −10 < f3/f < −1      | -2.129277043   | Within bounds                                                 |
| (3) f12/f | 0.5 < f12/f < 1      | 0.931580268    | Within bounds; printed 0.931                                  |
| (4) νd2p  | 80 < νd2p            | 95.10; 81.61   | Both within bounds; the condition table prints 94.93          |
| (5) Dm/St | 0.05 < Dm/St < 1     | 0.261214631    | Within bounds                                                 |
| (6) DA/DL | 0.2 < DA/DL < 1      | 0.564481653    | Within bounds; printed 0.565                                  |
| (7) 2ω    | 60° < 2ω < 190°      | 67.55° printed | Within bounds; not reproduced with the printed image height   |
| (8) FNOm  | 0.8 < FNOm < 1.4     | 1.239907798    | Within bounds; computed from the printed iris                 |

The condition-table Abbe number 94.93 does not replace surface 17’s 95.10. The field in condition (7) is the patent’s
statement; the model does not reproduce it together with the printed image height. For the three-decimal FNOm = 1.240
on page 31, the exact EFL over entrance-pupil diameter differs by -0.000092202, inside the half-digit rounding interval.

All eight inequalities are satisfied under the stated field and f-number definitions, and the claimed upper Abbe bound
of 96 is also met. The patent’s preferred ranges are separate: the printed field 67.55° meets the preferred lower limit
of 64° but not the more preferred 70°. The sentence that gives the preferred upper field limits in degrees cites
condition (8); its units identify it as the field condition (7).

## Computed First-Order Values and Model Limits

The printed iris diameter 28.98 mm gives an exact on-axis entrance-pupil diameter of 13.446002489 mm and thus
F/1.2399077975 at infinity. The Gaussian pupil approximation instead gives F/1.148867533; image-space 1/(2 NA) gives
F/1.238996135. The patent defines FNO only as F-number and does not say which of these conventions it uses, so
agreement with the printed 1.24 is not proof of that definition. The modeled f-number follows from the printed iris;
it is not fitted to the marketed aperture.

### Printed field and image height

At the printed infinity full field 67.55°, the chief ray through the stop centre reaches image height 10.489489899 mm,
rather than the printed 10.81 mm. Reaching that printed height requires full field 69.358847046°. The patent’s image
plane and camera plate are kept as printed. The cause, including any other field definition the patent may intend,
is unresolved.

Using the computed EFL in the rectilinear reference gives -5.926120% distortion at the printed field, whereas the
printed field/height pair implies -3.051659%. At the printed image height, the traced prescription gives -6.287235%.
Figure 8C shows barrel distortion of about 6 % at the edge of the field, which is approximate visual agreement with the
traced prescription. It does not prove a typo or an alternative convention. No printed value is fitted or corrected to
match the plot. [1, PDF page 10, Figure 8C; page 30]

Measured on the 300 dpi scan (10.8 px per percent), the distortion curve of Figure 8C ends at −6.1 % ± 0.15 at the top
of its axis, which is captioned with the printed image height (FIY = 10.81). That lies between the traced −6.29 % at
10.81 mm and −5.93 % at the printed field, so the curve alone does not separate the two, but it rules out the −3.05 %
the printed pair needs. The plots are drawn against image height, and the traced field curves agree with Figure 8B
there. Measured from the Gaussian focus, the traced sagittal focus reaches −0.034 mm at 70 % of the height, where the
plot’s solid curve reads −0.037 mm, and returns to +0.005 mm at the edge; the traced tangential focus stays within
+0.01 mm and ends at +0.021 mm, where the dashed curve reads +0.021 mm. The patent does not say which line style is
which. The image height is thus the value the plots and the prescription share, and the printed 2ω is the one that
departs. Example 3 of the same patent behaves the same way: its printed pair (2ω 66.07°, image height 10.87 mm,
f 17.15 mm) implies −2.5 % where Figure 7C reads −5.3 %, and in both examples f·tan ω is 11.15 mm although the printed
image heights differ. The printed field therefore looks like a convention of the summary table rather than the chief
ray of the printed image height; the patent does not state one. [1, PDF pages 9–10, Figures 7C, 8B and 8C; page 30]

### Printed summary values and the model

The table lists computed values beside the patent’s printed summaries where the two differ beyond the printed
rounding. Units are mm for distances, focal lengths and image heights and degrees for fields; the other rows are
dimensionless. The three focus offsets have no printed counterpart.

| Quantity                                         |        Model |  Patent |      Difference |
| ------------------------------------------------ | -----------: | ------: | --------------: |
| F-number from the Gaussian pupil, INF            |   1.14886753 |    1.24 |   -0.0911324671 |
| F-number from the Gaussian pupil, CL1            |   1.14712332 |    1.24 |   -0.0928766827 |
| F-number from the Gaussian pupil, CL2            |   1.12994307 |    1.25 |    -0.120056932 |
| Gaussian focus beyond the printed image, INF     | 0.0222816538 |       — |               — |
| Gaussian focus beyond the printed image, CL1     | 0.0184673255 |       — |               — |
| Gaussian focus beyond the printed image, CL2     | 0.0147803504 |       — |               — |
| Rectilinear paraxial full field, INF             |   65.9187637 |   67.55 |      -1.6312363 |
| Rectilinear paraxial full field, CL1             |   66.3847717 |    67.6 |     -1.21522835 |
| Rectilinear paraxial full field, CL2             |   66.6930275 |   67.51 |    -0.816972536 |
| Image height at the printed INF field            |   10.4894899 |   10.81 |    -0.320510101 |
| Full field reaching the printed INF image height |    69.358847 |   67.55 |     +1.80884705 |
| EFL, INF (page 31)                               |   16.6718033 |  16.671 | +0.000803331391 |
| EFL, CL2                                         |   16.3971808 |   16.39 |  +0.00718075262 |
| Magnification, CL2                               | -0.144600159 |   -0.15 |  +0.00539984107 |
| G1 EFL (page 30)                                 |  -36.7141527 |  -36.72 |  +0.00584731607 |
| G1 EFL (page 31)                                 |  -36.7141527 | -36.722 |  +0.00784731607 |
| G2 EFL (page 30)                                 |   25.7144848 |   25.72 |  -0.00551519555 |
| G2 EFL (page 31)                                 |   25.7144848 |  25.717 |  -0.00251519555 |
| G1+G2 EFL (page 31)                              |    15.531123 |  15.529 |  +0.00212301523 |
| Dm (page 31)                                     |         7.57 |   7.569 |          +0.001 |
| DA (page 31)                                     |        31.69 | 31.6987 |         -0.0087 |
| DL (page 31)                                     |        56.14 | 56.1414 |         -0.0014 |
| Condition (1)                                    |  -2.20217045 |  -2.203 | +0.000829547641 |
| Condition (3)                                    |  0.931580268 |   0.931 | +0.000580267984 |
| Condition (4), first νd                          |         95.1 |   94.93 |           +0.17 |
| Condition (6)                                    |  0.564481653 |   0.565 |  -0.00051834699 |
| d22 + d25, CL2 minus INF                         |         0.01 |       0 |           +0.01 |

The small EFL, unit-EFL and condition differences are of the size that rounding of the printed radii, gaps and indices
produces; they are not a rigorous interval proof. The CL2 magnification difference is not fully explained that way.
The Gaussian f-numbers describe the paraxial pupil, not the finite-aperture pupil that gives F/1.24. The rectilinear
paraxial fields omit distortion and so do not resolve the separate field and image-height difference above. The page-31
summary gives more digits than the page-30 unit-focal-length table; both are kept. The gap-sum difference reflects
independently rounded printed gaps. The three source conflicts recorded in the data file are unresolved, and no
printed value is corrected.

If the printed close-focus fields are read as object-point angles from the first vertex, the chief-ray image heights
are 10.2822602 mm at CL1 and 8.8372037 mm at CL2, against the printed 10.89 mm and 10.79 mm. The patent does not state
how its finite-distance field is referenced, so these are one tested reading, not proof that the printed heights are
wrong.

Figure 8’s panel annotations align numerically with INF, CL1 and CL2 from top to bottom, while the patent’s general
description of the plot order reverses the end states. No state is swapped on that account. [1, PDF page 26, printed
column 15; Figure 8; Example 4]

The curves themselves do not follow those annotations in the lower two rows. The middle row (Figures 8E–8H, annotated
with the CL1 values FNO 1.24 and FIY 10.89) shows the 94.99 mm state: both field curves reach about −0.053 mm near
80 % of the height and the distortion ends at −5.2 %, against −0.051 mm and −5.27 % traced at CL2. The bottom row
(Figures 8I–8L, annotated with the CL2 values 1.25 and 10.79) shows a distant-object state: the solid field curve
reaches −0.035 mm and the distortion ends at −6.3 %, against −0.035 mm and −6.24 % traced at CL1. The top and bottom
rows cannot be told apart at the resolution of the scan. The data file takes its three states from the table of
variable gaps and object distances, which is unambiguous, and nothing in it depends on the plot order. [1, PDF page 10,
Figure 8; page 30]

### Modeled apertures and vignetting

The patent tabulates no lens rims, so every semi-diameter except the iris is an estimate read from Figure 4 at its
300 dpi scan resolution (12.27 px/mm). Rim readings carry about ±0.15 mm of uncertainty, more where leader lines cross the
outline. The concave rear curve of L14 stops where the drawing meets its flat annulus, at 9.5 mm (25) rather than at
the outer cap, because that rim limits mid-field rays. The rear curve of L11 is drawn ending at a flat annulus too, at
13.3 mm, but 20A is modeled out to the element’s 14.2 mm outer cap so that L11 is drawn square, as in the figure; no
ray that passes the other rims reaches 20A above 13.2 mm, so the choice changes no traced result. The square-cut
elements L3, L6 and L13 carry their own drawn height on both faces. At the 14.3 mm rims of surfaces 2 and 3A the two
facing surfaces close 96.0 % of their 6.27 mm axial gap, leaving 0.249 mm; the data file’s allowance for facing
surfaces is raised from the default 0.90 to 0.961 to admit the drawn rims, and the surfaces do not touch.

A fan of on-axis rays filling the printed iris passes every rim at the three printed states and four interpolated
positions; the smallest on-axis margin is 0.234 mm at 21A in CL2. The chief ray to the 10.82 mm format corner passes
at each printed state. Off axis the bundle is vignetted at lens rims, as the drawn apertures imply: in the meridional
section about 79 % of the stop diameter passes at 20° half-field at infinity and 28 % at the corner. Surface 25 limits
the upper rays at mid field. Following its drawn curve end rather than the outer cap narrows that bundle by at most
3.8 percentage points of the stop diameter at infinity (near 27° half-field) and 4.9 points at CL2 (near 30°); the
on-axis beam and the infinity corner bundle are unaffected. Modeled vignetting therefore reflects figure-estimated
apertures, not a measured production pupil.

No numerical MTF, production distortion, apochromatic, continuous-focus or measured-throughput performance is asserted.

## Sources and References

1. Morooka, Masaru, and Kenichi Nagasawa. [Single focal length lens and optical apparatus using the same](https://patents.google.com/patent/US10073255B2/en).
   US 10,073,255 B2, Olympus Corporation, granted 2018-09-11. Front page; Figure 4 (PDF page 6); Figures 7 and 8
   (PDF pages 9 and 10); design conditions (printed columns 5–10); Example 4 description (printed columns 18–19); numerical
   prescription, aspheres, states and condition summary (PDF page 30, printed columns 23–24); parameter summary
   (PDF page 31, printed column 25). Page numbers refer to the PDF of the granted patent.
2. Olympus Corporation. [M.Zuiko Digital ED 17mm F1.2 PRO instructions, WD290801, IM007](https://download.omsystem.com/pages/inst/mzded17f12pro/manual_mzded17f12pro.pdf),
   September 2017. PDF page 6, printed English page 8, specifications and mount compatibility.
3. Olympus Corporation. [F/1.2 Prime Lens Series announcement](https://www.olympus-global.com/news/2017/nr00630.html),
   2017-10-26. Sales outline, ED-DSA description, focusing mechanism and product specifications.
4. Olympus Corporation. [Camera Grand Prix 2018 Lens of the Year announcement](https://www.olympus-global.com/news/2018/nr00796.html),
   2018-05-21. Retrospective confirmation of the January 2018 launch month.
5. Authoritative catalog coordinate and dispersion records: [ohara_all_20260701.zip](https://oharacorp.com/wp-content/uploads/catalogs/OHARA_260701_CATALOG.zip); [ohara_s_5d.xlsx](https://oharacorp.com/wp-content/uploads/catalogs/ohara-20260402-5.xlsx); [ohara_l_5d.xlsx](https://oharacorp.com/wp-content/uploads/catalogs/ohara-20250312-L5.xlsx); [hoya_include_obsolete.agf](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf); [hoya.xlsx](https://www.hoya-opticalworld.com/common/xls/HOYA20260601.xlsx); [hikari.xlsx](https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_ALL_Catalog_Data.xlsx); [schott.zip](https://media.schott.com/api/public/content/a79c07aa61da4c05a2c0bbab93d09a7f?v=3b65e351&download=true); [schott.xlsx](https://media.schott.com/api/public/content/7f5a58f7fa754445abab44cafc76acb3?v=a102056c&download=true); [sumita_download.zip](https://www.sumita-opt.co.jp/en/wp/wp-content/themes/sumita-opt-en-v2026/download-files.php); [CDGM202609.xlsx](https://www.cdgmgd.com/downloadFile.htm?uid=d5ilBXjFgXCK9VxoDmb); [CDGM-ZEMAX202609.AGF](https://www.cdgmgd.com/downloadFile.htm?uid=pvntrGdxCC64MZei1SX). The HOYA rows the model uses
   come from HOYA’s 2017-04-01 Zemax catalog. Catalog rows do not establish historical production suppliers or melts.
6. OM Digital Solutions Corporation. [M.Zuiko Digital ED 17mm F1.2 PRO specifications](https://explore.omsystem.com/gb/en/m-zuiko-ed-17mm-f1-2-pro),
   viewed 2026-10-13: 15 elements in 11 groups; 1 SED, 3 ED, 1 ED-DSA, 1 aspherical glass and 1 Super HR element; 9 circular
   aperture blades; closest focusing distance 0.2 m.
