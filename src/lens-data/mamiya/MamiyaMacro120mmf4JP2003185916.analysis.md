# Mamiya Macro 120mm f/4 (JP 2003-185916 A Design)

## Patent Reference and Design Identification

**Patent:** JP 2003-185916 A
**Inventor:** Hideyuki Suga
**Applicant:** Mamiya-OP Co., Ltd.
**Filed:** December 18, 2001
**Published:** July 3, 2003
**Title:** マクロレンズ (Macro Lens)
**Example details:** 実施例1, Table 1, Fig. 1 (section) and Fig. 5 (aberrations); conditions in Table 5

The patent ([text](https://patents.google.com/patent/JP2003185916A/en); tables on [J-PlatPat](https://www.j-platpat.inpit.go.jp/), publication 2003-185916) describes a macro lens with a field of about 32° that focuses from infinity to life size. Example 1 states f = 118.86 mm, fb = 66.11 mm, Fn = 3.99 and 2ω = 32°, with nine elements in eight groups. Its aberration plots run to an image height of 34.85 mm, the half-diagonal of the 645 format.

The model is entered as a patent design, not as a production lens. A [Phase One / Mamiya lens overview](https://www.captureintegration.com/download/PhaseOne_Lens_Overview_3007_web.pdf) lists two 120 mm f/4 macro lenses, both with nine elements in eight groups and 1:1 magnification: the manual-focus lens at 33° and 40 cm, and the AF lens at 32° and 37 cm. Example 1 agrees with the AF lens on three points:

1. Nine elements in eight groups.
2. A 32° field.
3. A 1:1 object-to-image distance of about 373 mm.

The patent text also argues from the short focusing travel an autofocus lens needs. This is agreement by specification only. No maker construction diagram was found to compare with Fig. 1, so no mount is assigned and the 645 format is taken from the patent's image height.

## Optical Architecture

Three groups, positive / positive / negative. G1 (L1–L3, f ≈ +260 mm) is two positive menisci and a negative meniscus ahead of the aperture stop, which sits 5.70 mm behind G1 and 5.70 mm ahead of G2. G2 (f ≈ +88 mm) is split into G2f, a cemented doublet of almost no net power, and G2b, a biconvex singlet of f ≈ +96 mm. G3 (L7–L9, f ≈ −187 mm) is a positive meniscus, a biconcave negative and a biconvex positive, fixed to the image plane.

G1 and G2 together have f1 ≈ 85.4 mm, so the fixed G3 enlarges their image by f / f1 = 1.39. That is the patent's condition (1), 1.2 < f / f1 < 1.5, which trades focusing travel against the aberration change G3 introduces. Condition (3), 2 < |f3 / f1| < 2.4, evaluates to 2.19. Both match Table 5.

At infinity the model gives an effective focal length of 118.864 mm and a back focus of 66.106 mm, against the printed 118.86 and 66.11.

## Element-by-Element Analysis

| Element | Group | Shape              |      nd |   νd | f (mm) | Glass             |
| ------- | ----- | ------------------ | ------: | ---: | -----: | ----------------- |
| L1      | G1    | Positive meniscus  | 1.61800 | 63.4 |  +90.8 | S-PHM52 (OHARA)   |
| L2      | G1    | Positive meniscus  | 1.49700 | 81.6 | +127.8 | S-FPL51 (OHARA)   |
| L3      | G1    | Negative meniscus  | 1.57501 | 41.5 |  −53.9 | S-TIL27 (OHARA)   |
| L4      | G2f   | Biconcave negative | 1.54814 | 45.8 |  −47.0 | S-TIL1 (OHARA)    |
| L5      | G2f   | Biconvex positive  | 1.61800 | 63.4 |  +53.2 | S-PHM52 (OHARA)   |
| L6      | G2b   | Biconvex positive  | 1.61800 | 63.4 |  +96.3 | S-PHM52 (OHARA)   |
| L7      | G3    | Positive meniscus  | 1.75520 | 27.5 | +111.1 | S-TIH4 (OHARA)    |
| L8      | G3    | Biconcave negative | 1.76200 | 40.1 |  −40.5 | S-LAM55 (OHARA)   |
| L9      | G3    | Biconvex positive  | 1.65100 | 56.2 | +117.7 | S-LAL54 (OHARA)   |

L1 and L2 are convex to the object and share the front group's positive power; L3 returns most of it, with its strongly curved rear surface (R = 29.59 mm) facing the stop. L4 and L5 are cemented, and the pair mirrors L3 across the stop: L4's concave front surface (R = −28.852 mm) faces it from the other side. L6 carries most of the positive power of G2 and is the element whose spacing floats. In G3, L8 supplies the negative power and L7 and L9 flank it.

## Glass Identification and Selection

The patent gives nd and νd at the d-line and names no supplier. All nine coordinates coincide with OHARA catalog glasses, and those names are used as catalog matches, not as the patent's own identification: S-PHM52 for L1, L5 and L6, S-FPL51 for L2, S-TIL27 for L3, S-TIL1 for L4, S-TIH4 for L7, S-LAM55 for L8 and the since-discontinued S-LAL54 for L9.

L2 is the only fluorophosphate crown. The positive power around the stop otherwise rests on the phosphate crown 1.618 / 63.4, used three times, against the light flints of L3 and L4.

## Focus Mechanism

G3 stays fixed 66.11 mm ahead of the image plane. G1 and G2 extend toward the object, and the spacing D10 between G2f and G2b first closes and then reopens: the patent's claim is that this reversal at about 1:2 keeps the spherical-aberration best focus and the field in step over the whole range. Paragraph 0016 defines the working distance WD as object to first surface.

| State    | WD printed (mm) | WD in model (mm) | D10 (mm) | D12 printed (mm) | D12 in model (mm) | Object to image (m) |
| -------- | --------------: | ---------------: | -------: | ---------------: | ----------------: | ------------------: |
| Infinity |               ∞ |                ∞ |     0.70 |             3.00 |              3.00 |                   ∞ |
| 1:2      |             297 |          296.877 |     0.20 |            33.57 |            33.674 |               0.461 |
| 1:1      |             178 |          177.958 |     0.70 |            64.07 |            64.363 |               0.374 |

The model does not use the printed D12 at the two close states. With the printed gaps and working distances the paraxial image falls 66.28 mm and 66.64 mm behind the last surface, 0.17 mm and 0.53 mm beyond the 66.11 mm image plane. The model keeps D10 and the image plane, and sets D12 and the working distance so that each state is in paraxial focus on that plane at exactly −0.5× and −1×. D12 grows by 0.104 mm and 0.293 mm, and both working distances still round to the printed integers.

This choice has a cost. The design has undercorrected zonal spherical aberration at close range (Fig. 5), and with the printed gaps the mid-zone rays focus on the image plane. With the model's gaps the paraxial focus is on the plane and the real-ray best focus lies about 0.2 mm ahead of it at 1:2 and 0.4–0.5 mm ahead at 1:1. The printed gaps also give the printed value of condition (2), 1.64 %; the model's give 1.63 %.

The working f-numbers of the model are 5.36 at 1:2 and 6.72 at 1:1; the patent prints 5.26 and 6.69. The 0.374 m close-focus distance is the model's object-to-image distance at 1:1, not a maker's figure.

Between infinity, 1:2 and 1:1 the patent gives no positions. D10 is interpolated linearly on each side of the 1:2 state and D12 is set for paraxial focus at each step. That path is an estimate, not the lens's cam.

## Aspherical Surfaces

None. All refracting surfaces are spherical.

## Model Scope and Limitations

- The radii, thicknesses, glasses, stop position and the infinity state are the patent's. D12 and the working distance at 1:2 and 1:1 are the model's own, as described above, and every position between the three patent states is interpolated.
- The patent publishes no clear apertures. The semi-diameters (19 mm at the front element, 14.9–17 mm around the stop, 19.9–24 mm in G3) are estimates guided by Fig. 1, so off-axis illumination and vignetting in the viewer depend on them. Fig. 1 draws L1 and L9 smaller (about 16 mm and 21 mm), and L7 and L8 smaller (about 16.6 mm and 17.6 mm); the model keeps them larger so the corner beam and the traced field are not cut. G3 matters most at close range: at 1:1 it stands 64 mm behind G2, and rims as small as the drawn ones would pass only about three quarters of the corner beam from a real object. The stop radius follows from F/3.99.
- The viewer traces close-focus states with parallel incoming beams, so its vignetting curve at 1:2 and 1:1 does not show the illumination of a real close object.
- Dispersion comes from the matched catalog glasses; the supplier is an inference from the coordinates.
- The association with the Mamiya AF 120mm f/4 Macro rests on published specifications, not on a maker's diagram or prescription.
