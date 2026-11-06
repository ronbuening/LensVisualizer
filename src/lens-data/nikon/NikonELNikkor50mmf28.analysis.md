## Patent Reference and Design Identification

**Patent:** US 2,906,174
**Application Number:** 675,357
**Filed:** 31 July 1957
**Granted:** 29 September 1959
**Inventor:** Zenji Wakimoto
**Assignee:** Nippon Kogaku K.K.
**Title:** Photographic Objective
**Example details:** the sole numerical example, printed at f = 100.0, F/2.5 in the description (col. 2) and repeated
in the claim (col. 3), with the sole figure on the drawing sheet; scaled 0.5× to f = 50 mm.

US 2,906,174 describes a six-element, four-component objective in which a pair of Gauss-type front components and a pair
of wide-angle-type rear components sit on either side of the diaphragm. The patent states that the objective combines
the wide aperture of a Gauss objective with the qualities of a wide-angle objective.

The example is identified with the first EL-NIKKOR 50mm f/2.8 enlarging lens on converging evidence:

1. **Designer.** Nikon's "NIKKOR – The Thousand and One Nights" No. 9 states that the old EL-Nikkor 50mm f/2.8 was
   designed by Zenji Wakimoto, who devised the "Wakimoto type (EL-Nikkor type)" lens, and that Ikuo Mori later
   redesigned it as the EL-Nikkor 50mm f/2.8N.
2. **Construction.** A Nippon Kogaku technical sheet for the EL-NIKKOR 5cm F2.8, reproduced by Nital, draws six
   elements in four groups in the same order: a thin positive meniscus, a cemented doublet with a deeply concave rear
   face, the diaphragm, a positive meniscus and a cemented doublet.
3. **Proportions.** The sheet's section and the patent figure agree element by element: the front meniscus is the
   largest element, the two doublets have about the same diameter, the single meniscus behind the stop is the
   smallest, and the diaphragm sits nearer that meniscus than the front doublet.
4. **Specification.** The normalized f = 100 design scales to the 50 mm production focal length. The patent's F/2.5 is
   about a third of a stop faster than the marked f/2.8.

The patent does not name the product, and no Nikon source prints a production prescription, so the example is a
probable match to the first-version lens rather than a confirmed factory prescription. The later EL-Nikkor 50mm
f/2.8N is a different design and is not modeled here.

## Optical Architecture

All lengths here are at the 50 mm scale: every radius, thickness and air space of the patent table is multiplied by
0.5, and the semi-diameters measured from the figure are scaled the same way. There are no aspheric coefficients to
transform.

The design is an asymmetric six-element, four-group objective, all spherical:

| Component | Elements | Focal length (mm, scaled) | Form |
| --- | --- | ---: | --- |
| I | L1 | +66.5 | Positive meniscus |
| II | L2 + L3 cemented | −111.6 | Weak negative doublet |
| III | L4 | +43.5 | Positive meniscus |
| IV | L5 + L6 cemented | +634.6 | Nearly afocal doublet |

The front pair I–II has a combined focal length of +95.3 mm and the rear pair III–IV +50.0 mm, so the rear half
carries the larger share of the power. The patent states that every component is a meniscus concave toward the
diaphragm, which the radii confirm. The air space between I and II is a converging meniscus; the one between III and
IV is a diverging meniscus.

The patent sets this against a symmetrical lens, in which front and rear do nearly the same correcting work. Here each
element has a different task, and the patent credits the asymmetric arrangement with easy correction of coma, the
aberration it calls hardest to control in Gauss objectives. It also notes that the front and rear elements can be
made large enough to pass ample light to the edge of the field.

The Petzval sum is +0.0036 mm⁻¹, a Petzval radius of about 276 mm or 5.5 f, a comparatively flat field for an
f/2.5 design. The first-to-last vertex length is 33.73 mm and the computed back focus 32.16 mm.

## Element-by-Element Analysis

### L1 — Positive Meniscus (Component I)

nd = 1.61720, νd = 54.0. Glass: unmatched in the data file; the pair coincides with the SSK1 class (Hoya BACED1,
Sumita K-SSK1). f = +66.5 mm.

L1 is a thin meniscus, convex to the object and concave toward the stop. It is a weak front collector that begins
the convergence of the axial beam and leaves most of the front pair's power to the strong front surface of L2. It is
the largest element in both the patent figure and the maker's section.

### L2 — Biconvex Positive (Component II, front)

nd = 1.62280, νd = 56.9. Glass: unmatched in the data file; the pair coincides with SK10 (Schott N-SK10, Ohara
S-BSM10). f = +26.9 mm.

L2 is the positive crown of the front doublet. Its front radius, 17.35 mm, is the strongest positive surface ahead of
the stop; its rear face, cemented to L3, is almost flat (R = −444.8 mm). L2 is the thickest element of the front
pair (6.05 mm).

### L3 — Biconcave Negative (Component II, rear)

nd = 1.62045, νd = 38.0. Glass: unmatched in the data file; the pair coincides with F9 (Hoya F9). f = −17.9 mm.

L3 is the flint of the front doublet and nearly plano-concave. Its rear face (R = 11.43 mm) is, with the front face of
L5, one of the two most strongly curved surfaces in the lens, and faces the stop across the large central air space.
The cemented interface is nearly flat and joins two glasses of almost the same index (Δnd ≈ 0.002), so it adds little
monochromatic power and acts chiefly on colour (Δνd = 18.9); the deep air surface carries the negative power of the
front pair. The figure draws a flat land and bevel beyond the optical edge of this face.

### L4 — Positive Meniscus (Component III)

nd = 1.62041, νd = 60.3. Glass: unmatched in the data file; the pair coincides with SK16 (Schott N-SK16, Ohara
S-BSM16). f = +43.5 mm.

L4 is the thick single meniscus just behind the stop, concave to the diaphragm. The patent assigns it a specific
task: its outer and inner surfaces shift the sagittal and meridional image fields separately, so the component
corrects both field curvature and astigmatism. It is the smallest element, as the figure and the maker's section both
show.

### L5 — Biconcave Negative (Component IV, front)

nd = 1.54869, νd = 45.4. Glass: unmatched in the data file; the pair coincides with LLF7 (Sumita LLF7). f = −17.2 mm.

L5 is the light-flint negative of the rear doublet. Its front face (R = −11.46 mm), concave to the stop, faces the
rear of L4 across the thin diverging air space. Like L3, it has a land and bevel beyond its optical edge in the
figure.

### L6 — Biconvex Positive (Component IV, rear)

nd = 1.63854, νd = 55.5. Glass: unmatched in the data file; the pair coincides with SK18 (Sumita K-SK18, Ohara
S-BSM18). f = +20.8 mm.

L6 is the strongest positive element. Cemented to L5, it leaves component IV nearly afocal (+634.6 mm): the rear
doublet adds almost no power, and its strongly curved outer faces act mainly as correctors behind the stop, in the
author's reading of the prescription.

## Glass Identification / Selection

| Element | nd | νd | Coinciding catalog type | Role |
| --- | ---: | ---: | --- | --- |
| L1 | 1.61720 | 54.0 | SSK1 class | Front collector |
| L2 | 1.62280 | 56.9 | SK10 | Crown of front doublet |
| L3 | 1.62045 | 38.0 | F9 | Flint of front doublet |
| L4 | 1.62041 | 60.3 | SK16 | Field and astigmatism corrector |
| L5 | 1.54869 | 45.4 | LLF7 | Light flint of rear doublet |
| L6 | 1.63854 | 55.5 | SK18 | Crown of rear doublet |

The patent prints d-line indices and Abbe numbers and names no glass maker. Every pair coincides with a classic dense
crown or flint, and all indices fall between 1.548 and 1.639. The data file keeps them as unmatched
coordinates, so chromatic results come from the Abbe-number dispersion model rather than catalog curves; the
matches above are the author's reading of the printed pairs, not a statement of the melts Nippon Kogaku used.

The patent says the objective needs no glass of any special nature and so absorbs less short-wavelength light. The
absence of dense flints and of any very high-index glass agrees with that statement; its relevance to printing on
blue-sensitive papers is an inference, not a claim of the patent.

## Focus Mechanism and Image Plane

The lens focuses as a unit: in an enlarger, the bellows or lens stage sets the distances to the negative and the
easel, and no element moves inside the lens. The patent tabulates only the infinity state, with no finite conjugate,
magnification or back focus. The data file holds that state; the image plane is the paraxial back focus of the scaled
table, 32.16 mm behind the last surface. Enlarging magnifications are not modeled, so the viewer's focus control is
inactive.

## Aperture, Stop and Semi-Diameters

The patent prints only the air space l2 = 12.89 that contains the diaphragm. Its figure draws the diaphragm about
65 % of the way from L3 to L4, and the data file splits the scaled gap 4.19 + 2.255 mm accordingly. The stop radius,
6.66 mm, follows from the design F/2.5 (entrance-pupil diameter 20.0 mm); the iris drawn in the figure, about 7.1 mm in
radius at this scale, is close to it. The patent's F/2.5 is the wide-open value; the marked f/2.8 is shown beside it.

The patent prints no clear apertures. All rims are measured from the patent figure, whose vertex spacing matches the
table, and scaled with the prescription: L1 13.5 mm; the front doublet 11.2 mm, with the deep rear face of L3 ending
at 7.0 mm; L4 7.7 mm; and the rear doublet 7.25 mm at its front face and 11.1 mm behind. Each rim passes the full
F/2.5 axial beam; the closest is the rear face of L3, where the marginal ray reaches 6.82 mm. Beyond the rear face of
L3 and the front face of L5 the figure draws a flat land square to the axis, then a bevel to the element edge; the
section draws these lands out to 8.8 mm and 9.0 mm, and they pass no light.

Wide open at infinity, the computed geometric transmission is 90 % at 11.7°, 78 % at 17.5° and 56 % at 23.4°, the
corner of the 24 × 36 mm frame. This vignetting comes from the drawn rims and is kept as modeled.

## Sources

1. [US 2,906,174](https://patents.google.com/patent/US2906174A/en), Zenji Wakimoto / Nippon Kogaku K.K.,
   "Photographic Objective", granted 29 September 1959: description, table, claim and figure.
2. [NIKKOR – The Thousand and One Nights No. 9](https://imaging.nikon.com/imaging/information/story/0009/), Haruo Sato,
   Nikon: attribution of the old EL-Nikkor 50mm f/2.8 to Wakimoto and of the f/2.8N redesign to Ikuo Mori.
3. [Nippon Kogaku EL-Nikkor technical sheet](https://images.nital.it/nital/images/historical/nikkor/el-nikkor/03.jpg),
   reproduced by Nital: EL-NIKKOR 5cm F2.8 with a six-element, four-group section drawing; edition and date not
   established.
