## Patent Reference and Design Identification

**Patent:** US 4,303,313 A
**Title:** Photographic Lens System
**Filed:** 1979-11-27 (Appl. No. 97,664; priority JP 53-146001, 1978-11-28)
**Granted:** 1981-12-01
**Inventors:** Toshihiro Imai, Hiroshi Takase
**Assignee:** Olympus Optical Co., Ltd.
**Example details:** Embodiment 1 table (col. 4, repeated as claim 2), Fig. 3 aberrations (the patent's only section, Fig. 2, is drawn to Embodiment 2's spacing); patent f = 100, all lengths scaled ×0.35 to f = 35 mm

The patent claims a four-element, four-group telephoto-type lens for compact 35 mm cameras, covering more than 60° at F/3.5. Embodiment 1 is attributed to the Olympus XA2 (1980) on convergent evidence:

1. Olympus's XA2 repair manual (p. A-16) lists the D.Zuiko 35 mm 1:3.5 as 4 elements in 4 groups. Its composition diagram shows the patent's sequence: a positive meniscus convex to the object, a biconcave negative, a biconvex positive, then a negative meniscus convex to the image.
2. The manual sets the gap between the third and fourth elements to d6 = 5.754 mm at the 2.7 m focus setting. Embodiment 1 scaled to 35 mm gives 5.7715 mm, the closest of the five embodiments (Embodiments 2–5 give 6.566, 5.957, 5.604 and 4.925 mm).
3. Focal length, aperture and field agree: 35 mm, f/3.5 and a 63° design field (31.5° half field in Fig. 3).
4. Timing and authorship: the Japanese priority filing (November 1978) precedes the XA2's 1980 release, and Toshihiro Imai is also the inventor of the original XA's lens (US 4,235,521).

The attribution is a correlation, not a published factory prescription: no Olympus document cites the patent, and the 0.3 % difference in d6 is left uncorrected.

## Optical Architecture

The design is a compact telephoto: a positive front group of three separated elements (L1–L3, f123 = 22.0 mm) ahead of the stop and a single negative meniscus (L4, f = −33.6 mm) behind it. All four elements are spherical and air-spaced; there are no cemented surfaces. The first-surface-to-image length is 0.995 f, against about 1.1 f for the rear-stop Tessar compacts the patent cites as prior art. The long air space d6 between the groups (0.165 f) and the strong rear negative element are what shorten the lens.

## Element-by-Element Analysis

### L1: Positive Meniscus, convex to object

nd = 1.72000, νd = 50.25. Glass: S-LAL10 (OHARA) equivalent. f = +19.8 mm.

The collecting front element. With L3 it supplies the positive power of the front group, which condition (1) caps at f/f123 < 1.8 because the positive elements set the Petzval sum and with it the field curvature.

### L2: Biconcave Negative

nd = 1.78472, νd = 25.71. Glass: S-TIH11 (OHARA) equivalent, an SF11-class dense flint. f = −15.5 mm.

The only dense flint in the lens. Placed between the two positive elements, it corrects the front group's longitudinal colour and offsets part of its Petzval sum.

### L3: Biconvex Positive

nd = 1.70154, νd = 41.10. Glass: S-BAH27 (OHARA) equivalent. f = +17.2 mm.

The thick last element of the front group (d5 = 3.70 mm, 0.106 f), just ahead of the stop. Condition (3) bounds that thickness: below 0.05 f the astigmatic difference grows, above 0.13 f the lens lengthens and the field edge loses light.

### L4: Negative Meniscus, convex to image

nd = 1.78590, νd = 44.18. Glass: S-LAH51 (OHARA) equivalent. f = −33.6 mm.

The whole rear group. Condition (2) keeps its power strong (f/f4 = −1.043) for the short overall length. The deep concave front surface stays above |r7| = 0.15 f (here 0.200 f), because a tighter radius bulges the axial spherical aberration and enlarges the astigmatic difference.

## Glass Identification and Selection

The patent's aberration plots use the d and g lines, so the printed indices are read as d-line values. All four printed nd/νd pairs match current OHARA rows within 0.0001 in nd and 0.15 in νd: S-LAL10 (L1), S-TIH11 (L2), S-BAH27 (L3) and S-LAH51 (L4). The HOYA rows LAC10, FD110 and BAFD7 match the first three equally well, but no HOYA row matches L4 within that tolerance, so the OHARA set is used throughout. These are catalog equivalents; the 1978 production supplier is not published.

The palette is all high-index (nd 1.70–1.79), which keeps the curvatures moderate in a lens this short. L2 (νd 25.7) is the achromatizing flint against L1 and L3 (νd 50.3 and 41.1).

## Focus Mechanism

The patent publishes infinity focus only. The XA2 focuses by turning the front lens through three zones; the repair manual (p. A-16) gives marks at 1.2 m, 2.7 m and infinity. The instruction manual recommends the close zone for subjects at 1–1.5 m, which gives the 1 m (3.3 ft) marketed minimum distance. No focus movement is published, so the model has no variable gaps and stays at infinity.

## Conditional Expressions

| Condition | Range: description (claim 1) | Embodiment 1 |
|---|---|---|
| (1) f/f123 | 1.4 – 1.8 (1.5 – 1.7) | 1.590 |
| (2) f/f4 | −1.4 – −0.8 (−1.3 – −1.0) | −1.043 |
| (3) d5/f | 0.05 – 0.13 (0.07 – 0.11) | 0.106 |
| (4) d6/f | 0.13 – 0.24 (0.14 – 0.19) | 0.165 |
| \|r7\|/f | > 0.15 (text) | 0.200 |

The broader ranges come from the description and the narrower ones from claim 1. The transcribed prescription reproduces the printed values; the traced f/f123 is 1.589.

## Model Scope and Limitations

The traced focal length is 35.008 mm (100.02 at patent scale) at f/3.5. The patent gives no image distance; Fig. 1 shows collimated input. The image plane is therefore the paraxial back focus, 16.943 mm behind the last surface, for a total length of 34.846 mm. Residual spherical aberration of −0.30 mm at full aperture (d line; Fig. 3 shows about −0.31 mm after scaling, deepest at −0.34 mm just inside the rim) leaves that plane soft wide open: the best axial focus lies about 0.3 mm closer to the lens. No focus shift is applied.

The patent places the stop between L3 and L4 but gives neither its position nor its diameter, and the repair manual shows the sector blades, which serve as both shutter and stop, without a measurable place inside d6. The stop is therefore placed from Fig. 3. The printed distortion, about +2.2 % at 31.5°, is reproduced with the stop at 0.35–0.4 of d6; the printed meridional field curve, which ends near −1.5 (in units of f = 100) at 31.5°, with the stop at 0.2–0.25. The model splits d6 at 0.30 from L3's rear vertex, between the two fits, which puts the stop 12.525 mm behind the first surface (d6 spans 10.794–16.566 mm); its diameter at f/3.5 is 6.61 mm. The 31.5° chief ray lands at 21.89 mm, a distortion of +2.0 %, and the traced meridional and sagittal fields there are −2.7 and +1.7 (printed about −1.5 and +1.1). That image height lies just outside the 21.63 mm corner of the 24 × 36 mm frame, whose corner field is 31.21°.

The semi-diameters (7.0, 7.0, 5.6, 5.6, 4.7, 4.7, 5.0 and 6.6 mm for surfaces 1–8, with a flat land on L4's front face out to 6.6 mm) are estimates, not maker dimensions. They are taken from two drawings: the patent's only section, Fig. 2, which is drawn to Embodiment 2's spacing, and the composition drawing in Olympus's repair manual. Both draw L3 as the smallest element. Fig. 2 draws L4 as the tallest; the repair-manual drawing makes L1 the tallest (7.0 mm against 6.4 mm for L4), and L1 follows it. L1's rear surface and L2's front surface meet 5.74 mm from the axis, which holds L2 at 5.6 mm, still clear of the 4.71 mm the corner chief ray needs there. The chief ray therefore reaches the frame corner, where geometric transmission wide open is about 56 % (81 % at 20°, 62 % at 28°).

## Sources

- [US 4,303,313 A (USPTO)](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/4303313).
- [Olympus XA2 instruction manual (scan)](https://www.cameramanuals.org/olympus_pdf/olympus_xa2.pdf) (focus zones).
- Olympus XA2 repair manual, p. A-16 (lens data, composition diagram and d6 setting).
- [Mike Eckman, "Olympus XA2 (1980)"](https://mikeeckman.com/?p=6967) (specifications: 4-element D.Zuiko, focus 3.3 ft to infinity).
