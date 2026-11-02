# Carl Zeiss Sonnar 150mm f/4 (Hasselblad) — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 2,720,140
**Title:** Three Component Photographic Objective of Five Lens Elements
**Filed:** July 14, 1954
**Priority:** Germany, July 24, 1953
**Granted:** October 11, 1955
**Inventor:** Günther Lange
**Assignee:** Carl-Zeiss-Stiftung (printed "Carl Zeiss, Heidenheim (Brenz)")
**Example details:** Fig. 3; table repeated in claim 4. Printed values are normalized to f = 1, and all lengths are scaled ×151.2.

The patent gives four examples of one form, at f/2, f/3.5, f/4 and f/4.8. Example III is the f/4 version, with an image angle of ±14°. Its link to the Zeiss Sonnar 150mm f/4 for Hasselblad is an inference from the patent and the Zeiss data sheets. No Zeiss source located for this analysis names the patent or the example.

1. **Construction.** Example III has five elements in three components, the last two cemented pairs. The Zeiss sheets list 5 elements in 3 components.
2. **Focal length.** The scale 151.2 is the focal length Zeiss prints for the lens. Example III computes to f = 0.999994, so the model's EFL is 151.199 mm. The scale was chosen to fit, so this match is not independent evidence.
3. **Vertex length.** At that scale the first-to-last vertex distance is 81.82 mm, and the sheet gives 81.8 mm. This is the independent check. Examples II and IV, scaled the same way, give 88.4 mm and 80.7 mm.
4. **Aperture and field.** Example III prints f/4 and ±14°. The sheet gives f/4 and a 29° diagonal field.
5. **Timing.** The July 1953 German priority precedes the lens's 1957 introduction, a date taken from third-party listings.

The other sheet values differ from the model:

| Quantity (mm) | Zeiss sheets | Model |
| --- | --- | --- |
| Focal length | 151.2 | 151.20 |
| First to last vertex | 81.8 | 81.82 |
| Back focal distance | 80.4 | 81.02 |
| H, behind first vertex | 11.6 | 9.98 |
| H′, from last vertex | −70.8 | −70.18 |
| Entrance pupil, behind first vertex | 63.8 | 67.9 |
| Exit pupil, from last vertex | −32.1 | −28.3 |

The sheets postdate 1973 and may not hold for the 1957 glass. Example III is best read as a close relative of the production lens, not a proven identical prescription.

The section drawing on the C150 sheet shows the same order: meniscus, cemented pair with a step at its junction, stop, cemented pair with the larger rear element. It places the stop near z 46.8 mm, against 47.99 mm in the model. The drawing is small and heavily inked, and its axial stations differ from the model by up to about 3.5 mm. Its rims read larger than the patent figure's. The model's rims stay at the patent figure.

Third-party listings date the C version to 1957, T* coating to 1973–74, the CF to 1982 and the CFi to 1998, and secondary sources state that the optics did not change. That is unconfirmed for the CFi. The Rolleiflex SL66 Sonnar 150mm f/4 is also listed at 5 elements in 3 groups, but nothing located shows it uses this prescription.

## Optical Architecture

Example III is a Sonnar form of five spherical elements in three components. The patent specifies an uncemented collective meniscus convex to the object, a dispersive middle component concave to the diaphragm, and a collective rear component. The middle and rear components are each a cemented pair of opposite powers. There are no aspherical surfaces. The element names LI to LV are the patent's own, from its tables and drawings.

| Component | Elements | In-air f (mm) | Role |
| --- | --- | --- | --- |
| Front | LI | +160.77 | Positive meniscus, 0.25 mm ahead of the middle component |
| Middle | LII + LIII | −169.56 | Negative meniscus, 30.93 mm ahead of the rear component |
| Rear | LIV + LV | +149.65 | Positive pair with a collective cement surface |

The total length from first vertex to image is 162.84 mm, 1.08 times the focal length, so the design is not a telephoto in the strict sense.

The patent prints no stop position. It requires the diaphragm directly behind the middle component, and Fig. 3 draws it in the air space l2 at 60.2 % of the way from LIII to LIV (z 48.07 mm). The model places it at 60 %, z 47.99 mm. The sheet pupils imply a stop nearer 51–55 % of l2 (z 45.2–46.4 mm). This is a further sign that production differs from the example, but the figure is kept.

The patent prints no clear apertures. The semi-diameters are estimated from Fig. 3: S1/S2 22.6, S3/S4 19.2, S6 15.1, S7 16.5 and S8 19.7 mm. The figure's arcs give a scale 3.6 % smaller across the axis than along it, which leaves S1/S2, S3/S4, S7 and S8 up to 3.3 % under the drawing, within the reading noise. S5 is 12.771 mm, at the top of the figure's 11.6–12.9 mm band, because the f/4 beam needs that height.

At f/4 the axial beam passes every rim. S5 is the tight point: the marginal ray reaches 12.59 mm there, a margin of 0.18 mm. The next smallest margin is 1.82 mm at S3.

| Field | 0° | 2.3° | 4.7° | 7° | 9.3° | 11.7° | 14° |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Beam passed at f/4 | 100.0 % | 96.3 % | 91.3 % | 86.5 % | 80.0 % | 70.3 % | 57.3 % |

The S5 rim accounts for the whole of the loss at 2.3°. Toward 14° the front face S1 becomes the main limit, with S3 and S5 acting on the same side of the beam and S6 on the other. S7 clips nothing on its own: the 3 % of the 14° bundle that reaches its rim has already been stopped by earlier rims.

## Conditional Expressions

Claim 1 sets three conditions, which the patent ties to reducing coma and astigmatism of the oblique pencils. Example III meets each. Ö is the patent's relative aperture, 1/4 here.

| Quantity | Claim 1 | Example III |
| --- | --- | --- |
| Δn/r of the rear cement surface | above 3/8 · 1/f | 0.583/f |
| Vertex distance, concave middle face to rear cement | 0.15f to 0.50f | 0.277f |
| Mid-thickness of the rear component | 0.40·f·Ö to 1.00·f·Ö, or 0.10f to 0.25f | 0.142f |

## Element-by-Element Analysis

### LI — Positive Meniscus, convex to object

nd = 1.66672, νd = 48.4. Glass: BAF11 (Sumita, coordinate equivalent; supplier not established). f = +160.77 mm.

LI is the uncemented front component the patent requires. Its rear face lies 0.25 mm from LII, so the two nearly touch. Fig. 3 draws both faces running to a square rim.

### LII — Biconvex Positive, Middle Cemented Pair

nd = 1.62041, νd = 60.3. Glass: SK16 (Schott, coordinate equivalent; supplier not established). f = +52.04 mm.

LII is the thick crown of the middle component. Its junction with LIII is almost flat (R −433 mm) and carries the smallest printed power, Δn/r = −0.036/f. The junction therefore separates the two glasses with little refraction of its own.

### LIII — Biconcave Negative, Middle Cemented Pair

nd = 1.72342, νd = 38.0. Glass: BASF8 (Sumita, coordinate equivalent; supplier not established). f = −31.80 mm.

The rear face S5 (R 24.35 mm) carries the strongest printed power, Δn/r = −4.492/f, and makes the middle component a dispersive meniscus concave to the stop. Fig. 3 ends the curved face at a flat rim land. The model draws it at z 33.05 mm, from the 12.77 mm clear radius out to the 19.2 mm rim, and leaves out the figure's small chamfer at the outer corner.

### LIV — Biconvex Positive, Rear Cemented Pair

nd = 1.70154, νd = 41.1. Glass: BASF7 (Sumita, coordinate equivalent; supplier not established). f = +35.59 mm.

LIV has a nearly flat front face (R +530 mm) and a strongly curved rear face. That rear face is the cement surface the claims govern: collective and concave to the diaphragm, with Δn/r = +0.583/f. Fig. 3 cuts LIV square, with a slightly rounded front corner. S6 clears 15.1 mm, and a flat land carries the face out to the 16.5 mm rim of S7.

### LV — Negative Meniscus, Rear Cemented Pair

nd = 1.60140, νd = 38.3. Glass: F5 as a coordinate proxy; no catalog row sits at the printed values. f = −46.94 mm.

LV closes the rear component with a nearly flat rear face (R −375 mm) and is the larger element of the pair. The cement surface works mainly through the index step of 0.100, since νd is 41.1 on one side and 38.3 on the other. LV's focal length assumes air on both faces, as do the other cemented elements' values. Fig. 3 draws a 45° chamfer from the LIV rim up to a flat 19.7 mm rim. A cemented face takes no land in the model, so one straight edge joins the S7 and S8 rims and falls up to 2.7 mm under the drawn outline at the top of the chamfer.

## Glass Identification and Selection

The patent prints nd at the d-line and V, with no glass names. The catalog names below are equivalents at those coordinates, and the supplier of the 1950s melts is not established.

| Element | nd | νd | Catalog equivalent |
| --- | --- | --- | --- |
| LI | 1.66672 | 48.4 | BAF11 (Sumita) |
| LII | 1.62041 | 60.3 | SK16 (Schott) |
| LIII | 1.72342 | 38.0 | BASF8 (Sumita) |
| LIV | 1.70154 | 41.1 | BASF7 (Sumita) |
| LV | 1.60140 | 38.3 | F5 (Schott), coordinate proxy |

The nearest catalog glass to LV is F5, at 1.60342/38.03, which Example II uses in this position. The coordinate in Example III is not a misprinted F5: the printed Δn/r values at r7 and r8 (+0.582802 and +0.242493) recompute exactly from 1.60140. The model therefore keeps the printed index and borrows F5's dispersion curve as a proxy.

## Focus Mechanism

The patent prints no focus data, so the model stays at infinity and no focus motion is modeled. The image plane is the computed paraxial focus, 81.02 mm behind the last surface, because the patent prints no back focus. Spherical aberration at f/4 stays within 0.17 mm of that plane. The 1.4 m shown for the lens is the retail minimum focus distance from the Zeiss sheets, not a modeled state.

## Model Scope and Limitations

- The rims and the stop position are inferred from Fig. 3, and the image plane is computed. None of them is printed.
- The patent's 14° half field reaches 37.91 mm on the image plane. The 39.6 mm corner of the 6x6 format lies at 14.59°, just beyond the printed field. The Zeiss sheets give a 29° diagonal on a 56.5 mm square.
- The prescription is the patent's. It is not confirmed for any production version, and the differences in the table above show it is not an exact match to the sheets.

## Sources

- G. Lange, US Patent 2,720,140, Three Component Photographic Objective of Five Lens Elements. https://patents.google.com/patent/US2720140A/en
- Carl Zeiss data sheet, Sonnar T* 4/150, C version, No. 10 10 25. http://www.hasselbladhistorical.eu/pdf/lds/C150.pdf
- Carl Zeiss data sheet, Sonnar T* 4/150, CF version, No. 10 11 14. http://www.hasselbladhistorical.eu/pdf/lds/CF150.pdf
- Lens-DB, Carl Zeiss Sonnar [T*] 150mm F/4 C. https://lens-db.com/carl-zeiss-sonnar-t-150mm-f4-c-1957/

