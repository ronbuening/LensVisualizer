## Patent Reference and Design Identification

**Patent:** [JP H08-086961 A](https://patents.google.com/patent/JPH0886961A/en)
**Application Number:** JP H06-224455
**Filed:** 1994-09-20
**Published:** 1996-04-02
**Inventors:** Hideki Nagata, Soh Ohzawa, Hiroyuki Matsumoto, Masakuni Tai
**Applicant:** Minolta Co., Ltd.
**Title:** High-magnification zoom lens (高変倍ズームレンズ)
**Example details:** 実施例2 (¶0009), publication pages 3–4; Fig. 2; Table 1 (¶0030) group powers and wide-end back focus. Unscaled.

The example is identified with the **MINOLTA AF APO TELE ZOOM 100-400mm F4.5-6.7**, released in 1995. The same prescription is printed as US 5,633,759 A Example 2 (Table 2), whose cover claims both Japanese applications, and as Example 3 of the companion JP H08-086962 A. The Japanese publication is the transcription source; the US family gives the inventors' Latin spellings.

The identification rests on converging evidence:

1. Construction: Example 2 has 14 elements in 11 groups, the production lens's published count, and it is the only one of the publication's five examples with that count (Example 1 cements L6–L7 for 14/10, Example 3 is 13/11, Examples 4 and 5 are 12/10).
2. Special glass: the two front-group positives L2 and L3 use nd 1.49310 / νd 83.58, the 493836 fluorophosphate crown found in other Minolta APO designs, and Minolta lists two AD (anomalous dispersion) elements. The patent itself prints no partial-dispersion data.
3. Focal-length and aperture program: 102.5–390.1 mm at F4.60–6.62, with aberration plots drawn to a 21.6 mm image height, against the marketed 100–400 mm f/4.5–6.7 for 35 mm film.
4. Focus and size: the production lens focuses with its front group (the filter rotates while focusing) to 2.0 m at 0.25×; front-group focus of this prescription reaches 0.24× at 2 m at the long end. At the wide end the model's front vertex is 142.6 mm ahead of the A-mount flange against a 149 mm barrel, and the 59 mm entrance pupil at 390 mm fits inside the 72 mm filter thread.
5. Timing: the application was filed in September 1994 and the lens appeared in 1995.

The prescription is not a manufacturer-confirmed production drawing. The stop position and clear apertures are not printed and are modeling choices, checked against the patent figure; both are separate from the product identification.

## Optical Architecture

The design is a four-group **positive–negative–positive–negative** telephoto zoom with 14 elements in 11 groups and 25 refracting surfaces, all spherical. The modeled stop adds one non-refracting surface.

| Group | Elements | Surfaces | Role and motion |
| --- | --- | --- | --- |
| Gr1, positive | L1–L3 | 1–5 | Front collecting unit; objectward through the zoom range |
| Gr2, negative | L4–L5 | 6–9 | Negative variator; imageward through the zoom range |
| Gr3, positive | L6–L11 | 10–20 | Compound compensating unit; objectward through the zoom range |
| Gr4, negative | L12–L14 | 21–25 | Rear telephoto unit; objectward through the zoom range |

The patent divides Gr3 optically into a negative front subunit (Gr3F, L6–L7) and a positive rear subunit (Gr3R, L8–L11). They do not move independently: every internal Gr3 spacing is fixed, and only the four groups are drawn as moving units.

The three printed infinity states are kept unchanged:

| Printed focal length, mm | F-number | d5, mm | d9, mm | d20, mm |
| --- | --- | --- | --- | --- |
| 102.5 | 4.60 | 3.863 | 56.870 | 25.573 |
| 200.0 | 6.30 | 42.578 | 28.353 | 15.355 |
| 390.1 | 6.62 | 80.664 | 4.600 | 0.999 |

The patent does not publish a continuous cam. Between the printed states, the positions of Gr1, Gr2 and Gr4 measured from the image plane are interpolated separately within wide–middle and middle–tele, and Gr3 is solved to hold paraxial infinity focus. This reconstruction keeps the patent's movement directions (Gr2 toward the image, the other three groups toward the object); it is not Minolta's cam.

The model carries 33 zoom stations: the three printed states and 30 interpolated ones, labelled with their calculated focal lengths. Between stations the interpolated spacings stay within 0.05 mm of paraxial focus; linear interpolation between the three printed states alone would leave up to 7.33 mm of defocus.

## Element-by-Element Analysis

The focal lengths below are calculated isolated thick-lens values in air. For a cemented element they describe its individual shape and index, not its actual in-system interface power. Glass names are catalog rows that match the printed nd/νd exactly; the patent names no glasses.

### L1 — Negative Meniscus

nd = 1.74950, νd = 35.04. Glass: E-LAF7 (HOYA). f = -277.2827 mm.

The negative meniscus is cemented to L2. Its relatively high index and lower Abbe number oppose the positive, low-dispersion partner in the front unit.

### L2 — Biconvex Positive

nd = 1.49310, νd = 83.58. Glass: Unmatched (493836 Minolta AD/ED fluorophosphate; no compatible public coefficient row) — AD, inferred. f = +140.2152 mm.

The positive component of the front cemented pair provides collecting power with the first of the two very high-Abbe glasses, taken as one of Minolta's two AD elements.

### L3 — Positive Meniscus

nd = 1.49310, νd = 83.58. Glass: Unmatched (493836 Minolta AD/ED fluorophosphate; no compatible public coefficient row) — AD, inferred. f = +281.3607 mm.

This air-separated positive meniscus completes Gr1 and repeats the high-Abbe material of L2, the second AD element. Its convex side faces the object.

### L4 — Biconcave Negative

nd = 1.71300, νd = 53.93. Glass: LAC8 (HOYA). f = -59.4921 mm.

The biconcave element supplies the main negative contribution of Gr2. Its large changes in separation from Gr1 and Gr3 provide zoom leverage.

### L5 — Biconvex Positive

nd = 1.75520, νd = 27.51. Glass: S-TIH4 (OHARA). f = +114.4653 mm.

The positive Gr2 partner balances the preceding negative element. It is air-separated, not cemented to L4.

### L6 — Biconcave Negative

nd = 1.71300, νd = 53.93. Glass: LAC8 (HOYA). f = -51.1083 mm.

This biconcave element begins Gr3F. The assumed stop is placed 2 mm before its front vertex, in air.

### L7 — Positive Meniscus

nd = 1.61293, νd = 36.96. Glass: E-F3 (HOYA). f = +226.4747 mm.

The positive meniscus follows L6 across the printed 1.982 mm air space. Together they form the negative front subunit of Gr3.

### L8 — Biconvex Positive

nd = 1.48749, νd = 70.44. Glass: FC5 (HOYA). f = +97.0953 mm.

This biconvex high-Abbe element begins Gr3R and supplies positive relay power.

### L9 — Negative Meniscus

nd = 1.84666, νd = 23.82. Glass: FDS90 (HOYA). f = -94.9116 mm.

The dense, low-Abbe negative meniscus is cemented to L10. Their common interface is source surface 17.

### L10 — Biconvex Positive

nd = 1.51680, νd = 64.20. Glass: BSC7 (HOYA). f = +52.1966 mm.

The Japanese text (¶0016) and the signed radii identify a biconvex positive element; the US counterpart's prose calls it biconcave, which the radii contradict.

### L11 — Biconvex Positive

nd = 1.48749, νd = 70.44. Glass: FC5 (HOYA). f = +70.3410 mm.

This biconvex element completes Gr3 and uses the same glass as L8.

### L12 — Negative Meniscus

nd = 1.75450, νd = 51.57. Glass: Unmatched (nd 1.75450, νd 51.57). f = -56.0000 mm.

This negative meniscus begins Gr4, with its stronger concavity toward the image.

### L13 — Positive Meniscus

nd = 1.67339, νd = 29.25. Glass: Unmatched (nd 1.67339, νd 29.25). f = +36.1997 mm.

The positive meniscus is cemented to L14. Its stronger convex surface faces the image.

### L14 — Biconcave Negative

nd = 1.71300, νd = 53.93. Glass: LAC8 (HOYA). f = -27.7203 mm.

The final biconcave element supplies the negative partner of the rear cemented pair. The image interval after it is derived, not tabulated.

## Glass Identification and Selection

All 14 index/Abbe pairs are kept at the d line, the reference the Japanese text states in ¶0007; the English counterpart agrees. The patent names no glasses. Ten elements match a catalog row to the printed precision and trace on that row's dispersion curve; E-LAF7 and E-F3 are HOYA's lead-free rows for these two types, standing in for whichever melt Minolta used in 1994. L2, L3, L12 and L13 have no matching public row and use Abbe-number dispersion.

| Elements | nd | νd | Glass | Role |
| --- | --- | --- | --- | --- |
| L1 | 1.74950 | 35.04 | E-LAF7 (HOYA) | High-index flint partner of the front doublet |
| L2, L3 | 1.49310 | 83.58 | Unmatched (493836 Minolta AD fluorophosphate) | Front-group AD crowns (inferred) |
| L4, L6, L14 | 1.71300 | 53.93 | LAC8 (HOYA) | Lanthanum-crown negative elements |
| L5 | 1.75520 | 27.51 | S-TIH4 (OHARA) | High-dispersion positive variator partner |
| L7 | 1.61293 | 36.96 | E-F3 (HOYA) | Flint positive element of Gr3F |
| L8, L11 | 1.48749 | 70.44 | FC5 (HOYA) | Fluor-crown positive elements of Gr3R |
| L9 | 1.84666 | 23.82 | FDS90 (HOYA) | Dense-flint negative of the Gr3 doublet |
| L10 | 1.51680 | 64.20 | BSC7 (HOYA) | Borosilicate-crown positive of the Gr3 doublet |
| L12 | 1.75450 | 51.57 | Unmatched | Rear negative meniscus |
| L13 | 1.67339 | 29.25 | Unmatched | Flint positive of the rear doublet |

Minolta lists two AD elements for the production lens, and the two νd 83.58 elements of the front group are the only candidates; they are tagged as inferred AD elements. The patent gives no partial-dispersion data for them, so no ΔPgF is modeled, and neither the Abbe number nor the product's APO suffix establishes secondary-spectrum performance in the model.

## Focus Mechanism

The patent tabulates infinity-focus zoom states only; it prints no finite-distance spacings and does not describe the focusing method.

The model uses **front-group focus**, a reconstruction based on the production lens, which focuses with its front group (its filter rotates while focusing) down to 2.0 m at 0.25×. Gr1 alone moves toward the object, so d5 grows while the rear groups and the image plane keep their zoom positions. The travel is solved paraxially for a 2.0 m object-to-image distance: 12.28 mm at 102.5 mm, 12.49 mm at 200 mm and 12.78 mm at 390.1 mm. The model then reaches 0.24× at the long end, close to the published 0.25×. Each zoom station carries focus positions solved for infinity and 16, 8, 16/3, 4, 3.2, 8/3, 16/7 and 2 m; between them the interpolated spacings stay within 0.12 mm of paraxial focus. None of these finite states is printed in the patent.

## Stop, Clear Apertures and Image Reference

The stop is **assumed**; the patent figures draw no iris. It is placed 2.000 mm before surface 10 and moves with Gr3, so the printed d9 is split into d9 − 2.000 and 2.000 mm without changing the optical separation. The iris radius is derived from the printed f-number at each printed state; f-numbers at the interpolated stations are interpolated, not published, and no iris size is a published physical diameter.

The clear semi-diameters are not printed and are fixed across zoom and focus. They are compared with the wide-end Fig. 2, read on the 300 dpi US copy at 15.75 px/mm (scale from the 149.37 mm vertex span, confirmed by the d9 and d20 spacings and by the drawn edge thicknesses of L4, L6 and L12). The negative front subunit of Gr3 follows the figure: 11.7 mm for L6 and 12.4 mm for L7. Elsewhere the drawn rims are smaller than the model's: the figure gives about 31 mm for Gr1, 15.2 / 14.6 mm for L4 / L5, 12.8–12.9 mm for Gr3R, and 11.3–11.4 mm for L12 and L13 with a 12.4 mm flange on L14, and with all of them the 102.5 mm corner would pass only 41 % of the beam. The model uses 34 mm for Gr1, 22 / 21.2 mm for L4 / L5, 14.4 mm for Gr3R and 13.5 mm for Gr4: the Gr2–Gr4 values are the smallest that keep the 102.5 mm corner at 94 % of the beam, L13–L14 below 13.5 mm would narrow the traced field, and a smaller front group would cost corner light at the long end, at infinity and at 2 m, where the axial beam reaches 31.6 mm on the front surface. Every rim passes the full axial beam at every zoom and focus state. There are no rim cuts or rim extensions.

The image-side interval is absent from the prescription table. At each printed infinity state it is derived paraxially (d-line) from the unchanged prescription:

| Station | Traced EFL, mm | Derived BF, mm | Sum of printed thicknesses, mm |
| --- | --- | --- | --- |
| Wide | 102.546440074 | 37.749942357 | 149.367 |
| Middle | 200.040306775 | 65.120431301 | 149.347 |
| Tele | 390.079970802 | 102.746702534 | 149.324 |

Table 1 (¶0030) prints a wide back focus of 37.697 mm, 0.053 mm shorter than the derived value, and the example's Σd line gives 149.369 / 149.348 / 149.326 mm, 0.001–0.002 mm more than the printed thicknesses add up to. The same back-focus column departs from the paraxial value of Example 1 by −1.59 mm and of Example 3 by −0.02 mm, and Table 1's Example 2 row repeats Example 1's φ3 = 0.02225 where Example 2's own prescription gives 0.02217. No single misprinted radius, thickness, index or gap reproduces 37.697 mm while keeping the printed focal lengths and Σd, so the column is not treated as a paraxial back focus. No radius, glass, thickness or zoom spacing is adjusted; the image plane is the paraxial one.

## Model Scope and Limitations

- The stop position, the clear apertures, the 30 interpolated zoom stations and every finite focus state are modeling choices; only the prescription and the three infinity states are printed.
- Wide open at infinity, the rims pass 94 % of the beam at the 12° corner at 102.5 mm and the full beam from about 157 mm to 219 mm; toward the long end the front group limits the corner, to 76 % at 390.1 mm.
- L2 and L3 trace with normal partial dispersion because the patent publishes none for the AD glass, so the model's secondary spectrum is indicative only and larger than the patent's: at 390.1 mm the paraxial C- and g-line foci lie 0.40 and 1.22 mm behind the d-line focus, where the patent's spherical-aberration plot (Fig. 12 of the US counterpart) starts both curves within about 0.2 mm of it. The d-line spherical aberration and the distortion (−0.6, +2.3 and +2.3 % at the 21.6 mm corner at 102.5, 200 and 390.1 mm) follow the patent's plots.
- The model is a reconstruction of one published example, not Minolta's production drawing.

## Sources

1. [JP H08-086961 A](https://patents.google.com/patent/JPH0886961A/en): Example 2 (¶0009, pages 3–4); d-line definition ¶0007; element shapes ¶0016; Fig. 2; Table 1 (¶0030).
2. [JP H08-086962 A](https://patents.google.com/patent/JPH0886962A/en), Example 3, the same prescription.
3. [US 5,633,759 A](https://patents.google.com/patent/US5633759A/en), Example 2 / Table 2 and Table 7: English-language counterpart and inventors' Latin names; its cover claims both Japanese applications.
4. Konica Minolta, AF Lenses brochure (2004), pp. 18–19: AF APO TELE ZOOM 100-400mm, two AD elements, 2.0 m minimum focus, 0.25×.
5. Imaging Resource, [Konica Minolta 100-400mm f/4.5-6.7 APO AF specifications](https://old.imaging-resource.com/lenses/konica-minolta/100-400mm-f4.5-6.7-apo-af/specifications): 14 elements / 11 groups including 2 AD elements, 2.0 m, 0.25×, 72 mm filter, 149 mm length.
6. M. Hohner, [Lens tech data for Minolta AF 100-400/4.5-6.7 APO](https://www.mhohner.de/sony-minolta/onelens/af100-400f45apo?lg=e): released 1995, 14/11, front-group focusing with rotating filter, 1:4 maximum magnification.
