# Olympus Zuiko Auto-S 50mm f/1.8 — Patent Analysis

## Patent Reference and Design Identification

**Patent:** US 4,728,179  
**Filed:** June 7, 1985; Japanese priority June 8, 1984  
**Granted:** March 1, 1988  
**Inventors:** Hikaru Hayashi; Hiroshi Takase  
**Assignee:** Olympus Optical Co., Ltd.  
**Title:** Rear Conversion Lens System  
**Example details:** Unnumbered master lens of Figure 3, with its table in column 6. The numbered embodiments are the rear converters.

US 4,728,179 covers rear converters of more than 1.6×. It prints this lens because the converters are used behind a master lens "as shown in FIG. 3", and the printed magnifications and aberration curves of Embodiments 1 to 4 are those of the combination. The master's table gives f = 51.84, F/1.86 and the radii, spacings, indices and Abbe numbers, which the model uses at the printed millimetre scale. It gives no field angle, back focus, conjugate, stop position, clear apertures or focus data.

The embodiments settle the first-order values the table leaves out. The last gap, 37.856 mm, is computed as the paraxial back focus at infinity and is not printed. With that gap, the master and each printed d0 reproduce all four printed magnifications (1.6182, 1.6446, 1.6075, 1.6437) to the fourth decimal, which confirms the infinity conjugate and fixes the gap to about ±0.002 mm. Figures 4 to 7 are labelled F/3.0 to F/3.1 and ω = 14.2° to 14.5°; at the combined focal lengths of 83.3 to 85.3 mm those angles give an image height near 21.55 mm, so the design is 135 format. The table names no reference line, but every N/V pair is a d-line catalog coordinate, so N and V are nd and νd.

The same design appears in [US 4,291,952](https://patents.google.com/patent/US4291952) (Hiroshi Takase and Toru Fujii, Olympus Optical; Japanese priority January 26, 1979; granted September 29, 1981), a low-cost Gauss lens of aperture ratio 1.8, field angle of 46° or more and back focus of 0.72f or more. Its Embodiment 2, printed at f = 100, has the same six glasses. Scaled by 0.5184, its nine spacings agree with the master within 0.010 mm and its radii within 0.07 %, except R1, R2 and R7 at 0.3–0.4 %. The master also meets all seven conditions of that patent. It looks like the production-rounded version of Embodiment 2, and Takase is named on both patents. The figures for US 4,291,952 come from the Google Patents text, not the patent's page images; d1 is garbled there and is taken from the printed Σd.

Neither patent names a production lens, so this is a patent design associated with the product, not a confirmed factory prescription. The 50mm f/1.8 ran from 1972 to 2002 in six versions. The F.Zuiko Auto-S versions (M-System, then silver-nose and black-nose OM-System) have six elements in five groups, as the [OM-1 manual](https://www.manualslib.com/manual/301378/Olympus-1.html?page=6) prints. The [Zuiko MC Auto-S and later Zuiko Auto-S](https://phillipreeve.net/blog/review-olympus-f-zuiko-auto-s-1-8-50/) have six elements in four groups. The [OM-10 FC manual](https://www.cameramanuals.org/olympus_pdf/olympus_om10fc.pdf) prints that count for the Zuiko MC 50mm F1.8, though some listings give the MC version five groups. [MIR](https://www.mir.com.my/rb/photography/hardwares/classics/olympusom1n2/shared/zuiko/htmls/50mm1a.htm) says the redesign "probably" came in 1982; no exact changeover date or serial range is established. The model describes the 6/4 generation only, not the F.Zuiko. The association rests on:

1. **Construction.** Six elements in four groups, with both inner pairs cemented. Olympus's table of interchangeable lenses lists the Zuiko MC 50mm F1.8 at 6-4, f/1.8–16, 0.45 m, 165 g, 32 mm long, 49 mm filter.
2. **Section drawing.** A [published section](https://allphotolenses.com/public/files/optical/728a84e050a2dc281d617384dabf2736.jpg) labelled as the MC version shows singlet, cemented doublet, stop gap, cemented doublet, singlet. Scaled to that drawing, the model's S4 to S9 fall within about 0.7 mm of the drawn positions. The [section of the earlier 6/5 version](https://allphotolenses.com/public/files/optical/3b1d6f5aaf67b7c8f1a16a1d07d30882.jpg) has L2 and L3 air-spaced, so it does not match this master.
3. **Aperture.** 51.84/1.86 gives an entrance pupil of 27.87 mm, against 27.78 mm for a nominal 50mm f/1.8.
4. **Close focus.** Unit focus to the marketed 0.45 m gives 0.149×, matching the published 16 × 24 cm minimum field.
5. **Timing.** The 1979 priority of US 4,291,952 and the 1984 priority of this patent bracket the reported redesign.

## Optical Architecture

The master has six spherical elements in four air-spaced groups, with cemented interfaces at surfaces 4 and 7. It is a Gauss arrangement: positive front singlet, negative front doublet, weakly negative rear doublet and positive rear singlet. Thick-lens group focal lengths in air are about +56.97, -60.07, -1183.82 and +50.68 mm; these are computed values, not patent data, and powers in the assembly differ. The central air space is 13.0 mm. Longitudinal spherical aberration stays within about 0.1 mm of the paraxial focus at F/1.86, at +0.07 mm at the rim and -0.10 mm at the 0.7 zone.

## Element-by-Element Analysis

Element focal lengths are thick-lens calculations in air; powers in the cemented assembly differ. The roles below follow from the geometry, since neither patent discusses the master's individual elements.

### L1 — Positive Meniscus

nd = 1.78472, νd = 25.68. Glass: S-TIH11 (OHARA) catalog equivalent. f = +56.971 mm.

S1–S2; radii +33.790/+130.283 mm and thickness 4.50 mm. This positive front singlet precedes the first doublet and provides converging power.

### L2 — Positive Meniscus, front of C1

nd = 1.60311, νd = 60.7. Glass: BACD14 (HOYA) catalog equivalent. f = +37.623 mm.

S3–S4; +21.458/+349.306 mm, thickness 6.59 mm. Its relatively high Abbe number contrasts with the following negative element. Surface 4 is their shared cemented interface.

### L3 — Negative Meniscus, rear of C1

nd = 1.78472, νd = 25.71. Glass: S-TIH11 (OHARA) catalog equivalent. f = -19.992 mm.

S4–S5; +349.306/+14.989 mm, thickness 1.30 mm. The strong rear curvature supplies the negative power of the front doublet. Its nd equals L1's; its printed νd of 25.71 differs from L1's 25.68 and is kept as printed.

### L4 — Negative Meniscus, front of C2

nd = 1.72825, νd = 28.46. Glass: S-TIH10 (OHARA) catalog equivalent. f = -21.474 mm.

S6–S7; -15.134/-490.538 mm, thickness 1.65 mm. Its strong front curve nearly mirrors S5 across the central air space.

### L5 — Positive Meniscus, rear of C2

nd = 1.80610, νd = 40.95. Glass: LAH53 (OHARA) catalog equivalent. f = +26.153 mm.

S7–S8; -490.538/-20.316 mm, thickness 5.60 mm. This positive element shares surface 7 with L4. The doublet has very small net negative power when isolated in air.

### L6 — Biconvex Positive

nd = 1.80610, νd = 40.95. Glass: LAH53 (OHARA) catalog equivalent. f = +50.685 mm.

S9–S10; +246.577/-48.685 mm, thickness 3.23 mm. The rear singlet restores positive power after the nearly afocal rear doublet. Its nd and νd repeat L5.

## Glass Identification and Selection

L1 and L3 match S-TIH11 (OHARA), L2 BACD14 (HOYA), L4 S-TIH10 (OHARA), and L5 and L6 LAH53 (OHARA). These are catalog equivalents of the printed nd/νd pairs; the production supplier is not established. L3's printed νd sits 0.03 above the S-TIH11 value.

L2 is the only low-dispersion element. The two dense-flint glasses in L1 and L3, the flint in L4 and the high-index lanthanum glass in L5 and L6 fit the aim of US 4,291,952, which uses high-index, high-dispersion glass in many of its elements to hold down cost. Chromatic behavior in the model comes from the catalog equivalents, not from patent data, and no partial-dispersion claim is made.

## Focus Mechanism

Focusing is by unit focus: the whole lens moves forward on a straight helicoid and only the back focus changes. The patent prints no focus travel, so the close state is modeled, not printed. The near back focus is solved paraxially for the marketed 0.45 m, object to image, and no floating correction is included.

| State | Object to image | Back focus | Magnification |
|:--|--:|--:|--:|
| Infinity | ∞ | 37.856 mm | 0 |
| Close | 0.45 m | 45.60 mm | 0.149× |

The travel is 7.74 mm. A magnification of 0.149× covers about 16.1 × 24.1 cm on the 24 × 36 mm frame, matching the published 16 × 24 cm minimum field.

## Stop, Aperture and Clear Apertures

The patent neither prints nor draws a stop. The model places it at the midpoint of the 13.0 mm central air space, z = 19.04 mm from S1, which leaves about 3.1 mm of air on each side of the open iris. S5 and S6 are nearly equal and opposite, so the midpoint is the natural position, and moving the stop ±1.5 mm changes corner transmission by less than one percentage point.

The iris list runs from f/1.86 to f/16, following the marketed f/1.8 to f/16 range. F/1.86 is the patent's value. The slower stops follow the model's paraxial stop rule, entrance-pupil diameter = f/N; the patent gives no stopped-down data.

The patent prints no clear apertures, so every semi-diameter is inferred. S1 and S2 are set at 1.10 times the paraxial entrance-pupil radius of 13.936 mm, and the other faces follow the ratios drawn in Figure 3, giving 15.329, 15.329, 12.922, 12.922, 9.887, 10.332, 11.849, 12.340, 12.784 and 12.784 mm. Read at the drawing's axial scale, the outlines are 5–6 % larger (S1 about 16.2 mm); at the scale fitted to the drawn arcs they are about 2 % larger. S5 and S6 stay smaller than their element bodies, as the chamfers in Figure 3 show.

The full axial beam at f/1.86 clears every rim; S5 is the tightest, at a marginal height of 9.66 mm against 9.887 mm. Off axis the rims vignette, and no rim was enlarged to pass that light. Geometric transmission wide open at infinity is about 82 % at 11.5° and 33 % at 23.0°, close to the 135 corner. These figures follow from the inferred rims and are not measurements of the production lens.

## Sources

- [US 4,728,179](https://patents.google.com/patent/US4728179), Rear Conversion Lens System: master lens in Figure 3 and column 6.
- [US 4,291,952](https://patents.google.com/patent/US4291952), Gauss Type Lens System: Embodiment 2, read from the Google Patents text.
- [Olympus OM-1 manual, specifications](https://www.manualslib.com/manual/301378/Olympus-1.html?page=6): F.Zuiko Auto-S, six elements in five groups.
- [Olympus OM-10 FC manual](https://www.cameramanuals.org/olympus_pdf/olympus_om10fc.pdf), table of interchangeable lenses, printed p. 41: Zuiko MC 50mm F1.8, six elements in four groups.
- [Phillip Reeve, review of the F.Zuiko Auto-S 1.8/50](https://phillipreeve.net/blog/review-olympus-f-zuiko-auto-s-1-8-50/): version list and production years.
- [MIR, Zuiko 50mm f/1.8](https://www.mir.com.my/rb/photography/hardwares/classics/olympusom1n2/shared/zuiko/htmls/50mm1a.htm): redesign, straight helicoid, f/1.8 to f/16, 16 × 24 cm minimum field.
- [Imaging Resource, 50mm f/1.8 OM Zuiko specifications](https://old.imaging-resource.com/lenses/olympus/50mm-f1.8-om-f.zuiko/specifications): six elements in four groups.
- [AllPhotoLenses, Olympus 50mm f/1.8](https://allphotolenses.com/lenses/item/c_41.html): versions and section drawings.
