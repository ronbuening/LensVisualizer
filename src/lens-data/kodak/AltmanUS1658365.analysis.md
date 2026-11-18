# Altman / Eastman Kodak US 1,658,365 — Folding-Camera Triplet (1928)

## Patent Reference and Design Identification

**Patent:** US 1,658,365 A, *Objective*  
**Application Number:** Serial No. 691,050  
**Filed:** February 6, 1924  
**Granted:** February 7, 1928  
**Inventors:** Fred E. Altman  
**Assignee:** Eastman Kodak Company  
**Example details:** The single "preferred example", tabulated on specification page 1 and drawn on the drawing sheet; dimensions in decimals of the focal length, scaled here by 100.

The model transcribes the only numerical example of US 1,658,365. The patent describes an objective of three air-spaced single elements, the outer two positive and the inner one negative, intended for quantity production for folding hand cameras. It is stated to work at f/7.5 to f/8 and to cover 32° from the axis.

This is a patent reference, not an identified production lens. Eastman Kodak Company is the assignee, and the stated purpose and aperture fit the inexpensive triplets Kodak fitted to folding cameras in the following years. The nearest candidate is the Kodar f/7.9, which Science Museum Group collection records list on Pocket Kodak cameras of about 1925 to 1934 at focal lengths such as 131 mm and 173 mm, and which a collector's review (Photo Jottings, Kodak No. 1 Pocket Camera) describes as a glass triplet of 111 mm. No source found ties this patent to the Kodar or to any other named lens, and no published construction diagram of the Kodar was found to compare. The link is therefore unproven, and the model is kept at the patent's normalized scale rather than at a retail focal length.

The patent prints its dimensions with the focal length as the unit. Every radius, thickness and air space is multiplied by 100 in the data file, giving a nominal 100 mm lens.

## Optical Architecture

The design is a Cooke-type triplet: positive, negative, positive, in three groups of one element each. The patent treats the first two elements as one front component and the third as the rear component, with the diaphragm and shutter in the larger air space between them.

Altman's stated aims are practical ones:

- All surfaces are kept as flat as possible, for cheap grinding. The patent claims every radius longer than two-tenths of the focal length; the shortest in the example is 0.239.
- The overall length is short, 0.148 of the focal length, so that the lens fits a compact folding camera. The larger air space is reduced to 0.066, which the patent calls an extent "not hitherto attempted".
- The smaller air space is kept between 0.015 and 0.025 of the focal length (0.018 in the example), so that the spacing ring is not too thin and the lens is tolerant of small assembly errors.
- The elements are thick enough that their edges do not chip easily.
- The rear element is a meniscus, convex outward, with a focal length well below that of the whole objective, which makes the front pair strongly dispersive (a weak negative component).

The patent places both principal points ("Gauss points") in the larger air space, 0.002 and 0.009 behind the rear surface of the negative element. The model computes them at about −0.001 and +0.007 from that surface at the D line, the same within the table's rounding.

The patent does not print a stop position. The model places the stop at the midpoint of the 6.6 mm rear air space, 3.3 mm behind the negative element. The clear semi-diameters are not printed either; the model uses a uniform 8 mm.

## Focal Length and the G′ Line

The table is headed "focal length = 1.000", but the prescription computes to 99.75 mm at the D line after scaling, 0.25 % short. The difference is a matter of wavelength, not a misprint. The patent's own element focal lengths are reproduced exactly when the G′ indices are used:

| Quantity | Patent | Computed at G′ | Computed at D |
|---|---:|---:|---:|
| Element 1 focal length | +0.343 | +0.3431 | +0.3504 |
| Element 2 focal length | −0.284 | −0.2844 | −0.2933 |
| Element 3 focal length | +0.747 | +0.7471 | +0.7631 |
| Whole objective | 1.000 | 0.9998 | 0.9975 |

Focal lengths quoted for the violet G′ line were usual for lenses meant for blue-sensitive plates and film. The front component's focal length is very sensitive to rounding; it computes to −4.58 at G′ against the printed −4.64.

The model keeps the printed D indices and dispersive ratios, so its focal length is the D-line value, 99.75 mm, with a computed paraxial back focus of 91.23 mm. The patent prints no back focus.

## Element-by-Element Analysis

### L1 — Biconvex Positive

`nd = 1.611, νd = 57.2.` Glass: barium crown, maker not named (patent D 1.611, G′ 1.624). `f = +35.04 mm` at the D line.

The front collective element. Its front radius, 23.9 mm, is the strongest curve in the lens; its rear surface is nearly flat (−197 mm). The patent notes that focus may be adjusted by moving this element toward and away from the second, so the lens can be used on a fixed lens board. The model does not include that movement.

### L2 — Biconcave Negative

`nd = 1.575, νd = 42.7.` Glass: light flint, maker not named (patent D 1.575, G′ 1.593). `f = −29.33 mm` at the D line.

The dispersive element, separated from L1 by 1.8 mm. Its stronger surface (24.7 mm) faces the diaphragm space. The patent claims a flint index below 1.60 for this element.

### L3 — Positive Meniscus, Convex to the Image

`nd = 1.611, νd = 57.2.` Glass: the same barium crown as L1. `f = +76.31 mm` at the D line.

The rear component, a single meniscus with both surfaces concave toward the diaphragm (−146.4 mm and −35.6 mm). The patent asks for a focal length between forty and ninety per cent of that of the objective, about three-quarters in the example.

## Glass Identification and Selection

The patent prints, for each glass, the index for the D line, the index for the G′ line and the dispersive ratio ν. It names the types only as barium crown for the positive elements and light flint for the negative one.

| Element | D index | G′ index | ν | Patent description |
|---|---:|---:|---:|---|
| L1, L3 | 1.611 | 1.624 | 57.2 | Barium crown |
| L2 | 1.575 | 1.593 | 42.7 | Light flint |

No current catalog glass matches either pair closely enough to be used as a label, and the patent names no glass maker, so the elements carry no catalog glass name. The model's colour behaviour comes from the D index and ν alone; the printed G′ indices are not used by the model.

## Focus Mechanism

The model is fixed at infinity. The patent gives no close-focus data. It mentions only that the front element may be moved in a screw-threaded mount to adjust focus.

## Source Discrepancy on the Drawing Sheet

The lettered table on the drawing sheet shows R1 as 2.39 and leaves out the air space S2. The typeset table in the specification prints R1 = .239 and S2 = .066. The text settles both: it states that the greatest curvature is on a radius of .239, and that the thickness of the entire objective is .148, which is the sum of the three thicknesses and both air spaces only when S2 is .066. With R1 = 2.39 the prescription would have a negative focal length. The model follows the typeset table.

The table prints the radii without signs. The signs used follow the drawing and are confirmed by the printed element focal lengths; for example, element 1 reaches +0.343 only as a biconvex lens.

## Field Coverage and Limitations

The patent states that the objective fully covers 32° from the axis at f/7.5 to f/8. With the model's assumed 8 mm rims the chief ray passes at 32° (it meets the front surface 5.6 mm from the axis), and the model is set to trace to that angle. The front element cuts into the oblique beam beyond about 20°, and roughly a third of the beam in the meridional section is lost at 32°. Because the rims are assumed, this vignetting is not evidence about the real lens. The drawing shows elements of somewhat smaller diameter than the model's.

Computed distortion is small: the 32° chief ray lands 62.6 mm from the axis against 62.3 mm for an undistorted image.
