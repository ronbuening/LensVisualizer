# Meike 50mm f/0.95

## Patent Reference and Design Identification

**Patent:** CN 216526483 U (utility model)  
**Filed:** November 17, 2021  
**Granted:** May 13, 2022  
**Inventor:** Yunhong Li (李云洪)  
**Applicant:** Chengdu Weizheng Digital Technology Co., Ltd. (成都威正数码科技有限公司)  
**Title:** APS-C format lens, camera module and shooting device  
**Example details:** 表1 (Table 1), ¶0049–0053, Fig. 1; the patent's only numerical example

The patent describes a seven-element, all-spherical double-Gauss derivative for the APS-C format with a stated focal length of 50 mm and a relative aperture of F = 0.95 (¶0053). Its stated aims are a very large aperture at low cost, using spherical glass only (¶0021–0023).

The link to the Meike 50mm f/0.95 rests on the assignee and the construction, not on a maker drawing. Chengdu Weizheng Digital Technology owns the MEIKE trademark for camera lenses (US registration 7,492,283), and Meike announced a manual-focus 50mm f/0.95 for APS-C mirrorless cameras at the end of June 2022, seven months after the filing, with seven elements in five groups, a 0.45 m minimum focus distance and Sony E, Fujifilm X, Nikon Z, Canon EF-M and Micro Four Thirds mounts. No Meike construction diagram was found to compare with Fig. 1, so the element shapes and glasses of the production lens are not confirmed. The table is the patent's embodiment and may differ from the lens as built.

## Optical Architecture

Seven spherical elements form five air-separated groups, in the order positive, positive, cemented pair, stop, cemented pair, positive. Two positive menisci (L1, L2) lead a cemented meniscus pair (L3 + L4, the patent's first cemented lens) whose deep concave rear surface faces the stop. Behind the stop a second cemented pair (L5 + L6) begins with a concave surface, and a positive meniscus (L7) completes the system. All elements except L5 turn a convex surface toward the object (¶0043).

The stop lies 7.85 mm behind L4 and 6.11 mm ahead of L5. The paraxial focal length of the tabulated prescription is 50.48 mm. The first cemented lens has a focal length of −38.5 mm (−0.76 f) and the second +135.2 mm (2.68 f), inside the ranges of claims 1 and 5. The half-field at the 14.2 mm corner of the APS-C format is 16.0°.

The printed stop diameter, 22.74 mm, gives a paraxial F/0.985 instead of the stated F/0.95. The model keeps the printed stop. F/0.95 would need a stop radius of 11.79 mm and a beam wider than the printed clear diameters of the surfaces around the first cemented lens, so the tabulated design works at about F/0.99.

## Element-by-Element Analysis

### L1: positive meniscus

nd = 1.83481, νd = 42.73, H-ZLaF55D; f = +71.8 mm. The front element is convex to the object and takes the first share of the convergence in a high-index lanthanum flint, which keeps its curvatures moderate at this aperture.

### L2: positive meniscus

nd = 1.80400, νd = 46.57, H-ZLaF50E; f = +110.5 mm. A second, weaker meniscus 0.11 mm behind L1 splits the front positive power over two elements.

### L3: positive meniscus

nd = 1.59282, νd = 68.62, FCD515; f = +53.9 mm. The only low-dispersion glass in the design is the positive member of the first cemented lens, where the beam is still wide.

### L4: negative meniscus

nd = 1.84666, νd = 23.78, H-ZF52; f = −19.4 mm. The dense-flint partner of L3. Its rear surface, R = 14.29 mm, is the strongest curvature in the lens and faces the stop.

### L5: biconcave negative

nd = 1.64769, νd = 33.84, H-ZF1; f = −20.6 mm. The negative member of the second cemented lens, with its concave front surface (R = −21.55 mm) facing the stop in the double-Gauss manner.

### L6: biconvex positive

nd = 1.83481, νd = 42.73, H-ZLaF55D; f = +21.5 mm. The strongest positive element, cemented behind L5. The patent credits this rear cemented lens with balancing field curvature (¶0023).

### L7: positive meniscus

nd = 1.83481, νd = 42.73, H-ZLaF55D; f = +44.9 mm. The rear element, convex to the object with a nearly flat rear surface (R = 264.02 mm), finishes the convergence to the image.

## Glass Identification

Table 1 names each glass and prints no refractive indices. The model uses the makers' catalog d-line values for the printed names: H-ZLaF55D (three elements), H-ZLaF50E, H-ZF52 and H-ZF1 from CDGM, and FCD515 from HOYA. Five of the seven elements are high-index lanthanum glasses or dense flints, and one is a low-dispersion phosphate crown.

The patent's text and table disagree in one place. Claim 7 and ¶0046 require 1.66 < N5 < N6 − 0.2, which no index can satisfy with the tabulated L6 (nd 1.83481), and the tabulated L5 glass, H-ZF1, has nd 1.64769. The table is used as printed. Claim 6 (1.50 < N3 < N4 − 0.25) is met.

## Focus Mechanism

The patent gives a single infinity-focus state and names no focusing group, so the model is infinity only. The production lens is a manual-focus design with a 0.45 m minimum focus distance.

## Aspherical Surfaces

None. Every conic constant in Table 1 is zero and the patent stresses that all seven elements are spherical glass (¶0038).

## Image Plane and Model Scope

Table 1 prints 13.89 mm after the last surface, but the tabulated prescription does not focus there: its d-line paraxial focus is 14.7591 mm behind L7, and marginal rays cross the axis within 0.19 mm of that point. The patent's own figures agree with the computed focus. Fig. 3 shows the on-axis focus of all four plotted wavelengths within about 0.08 mm of the image plane, and Fig. 1 draws the sensor as a plate about 1.4 mm thick that begins 14.4–14.8 mm behind L7. The printed 13.89 mm is therefore read as a different datum, most likely the distance to a sensor cover plate that the table omits, and the model places the image at the paraxial focus.

No single changed radius or thickness makes the printed distance work. The closest alternative, a rear radius of 14.59 mm on L4 in place of 14.29 mm, would bring the focus to 13.90 mm but gives −0.95 % distortion at 15.8°, where Fig. 3 shows about −2.2 % and the printed table gives −1.8 %.

The patent reports, for its design, a centre MTF above 0.7 at 12 cycles/mm (¶0054), field curvature between −0.1 and +0.3 mm with distortion within 2.5 % (¶0055), and corner illumination above 42 % (¶0057). The model's semi-diameters are the printed clear diameters. Its glass data are catalog values, so colour correction is that of nominal catalog glass and not of the production melts.

## Sources

- CN 216526483 U, Table 1, ¶0049–0053, Figs. 1–5: https://patents.google.com/patent/CN216526483U/en
- Meike 50mm f/0.95 announcement and specifications (June 30, 2022): https://photorumors.com/2022/06/30/another-week-another-new-meike-lens-50mm-f-0-95-aps-c-manual-focus-lens-for-m43-e-x-z-efm-mount/
- Chengdu Weizheng Digital Technology as owner of the MEIKE trademark: USPTO registration 7,492,283 (serial 98134510), goods including lenses for cameras; also https://www.broadcastbeat.com/manufacturers/meike
- CDGM and HOYA optical glass catalogs for the named glasses.
