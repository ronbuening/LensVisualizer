# LEITZ / BEREK f/1.3 PATENT REFERENCE — US 1,899,934 Figure 2

## Patent Reference and Design Identification

**Patent:** US 1,899,934  
**Title:** Ultralight Intensive Objective  
**Application Number:** Serial No. 623,554  
**Filed:** July 20, 1932 (German priority June 6, 1931)  
**Granted:** March 7, 1933  
**Inventor:** Max Berek  
**Assignee:** Ernst Leitz GmbH (printed as Ernst Leitz, Optische Werke, G.m.b.H., Wetzlar)  
**Example details:** The second of two examples, each headed by its figure: Figure 1 (1:2.0, six elements) and Figure 2 (1:1.3, seven elements). Figure 2's table is on printed page 2 (left column lines 42–50, right column lines 51–55); its drawing is on the drawing sheet.

The patent describes a very fast photographic objective developed from the three-member triplet, whose "six faces only exposed to the air" limit the aperture that can be reached with a flat, coma-free field. Berek's remedy is to split the front member and to place conditions on the air spaces so that the larger aperture does not bring heavier vignetting at the required picture angle (p. 2, lines 1–20). Figure 2 is the faster of the two examples, rated 1:1.3 in the table heading.

The file transcribes Figure 2 exactly as printed: eleven signed radii, seven glass thicknesses, three air spaces, and an nD and ν value for each element. The patent prints the signs, so none had to be taken from the drawing. The table is normalised: the patent prints no focal length, and the prescription as printed computes to a paraxial focal length of 99.99 mm, so no scale factor was applied. Figure 1 of the same patent is modelled in a separate file.

No production lens is identified with this example. The patent names no product, and no Leitz lens of this layout or of f/1.3 aperture has been found in the period literature reviewed (see Design Heritage and Context). The model is therefore a hidden patent reference at the patent's own scale, not a retail lens.

## Optical Architecture

Figure 2 is a seven-element, four-group, all-spherical objective with the power sequence positive – positive – negative – positive:

1. **L1**, a single positive meniscus convex to the object.
2. **D1 (L2 + L3)**, a cemented positive doublet: a biconvex crown followed by a thin biconcave flint.
3. **D2 (L4 + L5)**, the cemented negative member: a positive meniscus concave to the object followed by a biconcave element with a strongly curved rear face.
4. **D3 (L6 + L7)**, the cemented positive rear member: a weak negative meniscus followed by a biconvex crown.

This is the triplet layout with its front positive member split in two (L1 and D1) and each of the other members made a cemented doublet. The claim describes it in those terms: two positive members separated by an air space, a following negative member made of a cemented positive and negative element, and a positive rear member.

Computed at the patent's scale, the front pair L1 + D1 has a focal length of +82.1 mm and the negative member D2 −45.7 mm. Together the first three members are almost afocal (about +2,045 mm), so nearly all of the system's convergence comes from the rear member D3 (+55.2 mm). The vertex length from r1 to r11 is 90.47 mm; the computed paraxial back focus is 46.83 mm, giving a total track of 137.31 mm. The Petzval sum is +0.0055 mm⁻¹, a Petzval radius of about 1.8 times the focal length.

The first air space, a1 = 0.4457 mm, is very small. L1 and D1 almost touch on the axis and separate towards the rim, because L1's rear face (r2 = +324.07) is much flatter than D1's front face (r3 = +71.315).

## Element-by-Element Analysis

### L1 — Positive Meniscus, convex to object

`nD = 1.6240, ν = 58.2.` Glass: barium-crown class (inferred from the printed pair; the patent names no glass). f = +207.8 mm.

L1 is the part split off from the triplet's front member. Its strongly curved front (r1 = +93.6) and much flatter rear (r2 = +324.07) give a weak positive meniscus. Together with D1 it shares out the convergence that a single front element would otherwise carry at f/1.3. That reduces the spherical aberration and coma such an element would produce, which is the stated purpose of the split.

### D1 — Cemented Positive Doublet (L2 + L3)

- **L2, Biconvex:** `nD = 1.6240, ν = 58.2.` Same glass as L1. f = +69.7 mm.
- **L3, Biconcave:** `nD = 1.6219, ν = 36.1.` Flint class. f = −130.7 mm.

The doublet as a whole has f = +132.3 mm. The two glasses are almost matched in index (a step of 0.0021) but differ in ν by 22.1, so the cemented face r4 = −99.842 has almost no power in the D line. It acts mainly on colour. This reading of the glass choice is an interpretation; the patent does not explain it. The rear face r5 = +445.72 is nearly flat.

### D2 — Cemented Negative Member (L4 + L5)

- **L4, Positive Meniscus, concave to object:** `nD = 1.6242, ν = 44.8.` Barium-flint class. f = +98.8 mm.
- **L5, Biconcave:** `nD = 1.5673, ν = 42.8.` Light-flint class. f = −31.9 mm.

D2 as a whole has f = −45.7 mm and carries the claimed feature. The cemented face r7 = −40.828 runs from the higher-index positive element into the lower-index negative one, which makes it a collective (converging) face. The claim requires the nD step at this face to be at least 0.05 and (n′ − n)·f / r to exceed 0.1. Figure 2 gives 0.0569 and 0.139. The two ν values are close (44.8 against 42.8), so this face corrects monochromatic aberrations rather than colour. The rear face r8 = +33.963 is the strongest surface in the lens and faces the image across the air space a3.

### D3 — Cemented Positive Rear Member (L6 + L7)

- **L6, Negative Meniscus, convex to object:** `nD = 1.5407, ν = 47.2.` Light-flint class. f = −971.6 mm.
- **L7, Biconvex:** `nD = 1.6240, ν = 58.2.` Same glass as L1 and L2. f = +51.1 mm.

D3 as a whole has f = +55.2 mm and supplies most of the system's power. The cemented face r10 = +54.734 is also collective (nD step +0.0833, ν step 11.0), so it contributes both convergence and some colour correction.

## Glass Identification and Selection

The table prints the refractive index for the sodium D line (column headed nD) and ν for each element. The data file therefore marks every element `indexReference: "D"`. The patent names no glass and prints no C, F or g indices, so the model's colour behaviour comes from nD and ν alone, and it makes no partial-dispersion claim. The class names below are inferred from the printed pairs and are not catalogue identifications.

| Printed nD / ν | Elements | Class (inferred) | Role |
|---|---|---|---|
| 1.6240 / 58.2 | L1, L2, L7 | Barium crown | Positive crowns of the front pair and the rear member |
| 1.6219 / 36.1 | L3 | Flint | Index-matched colour partner in D1 |
| 1.6242 / 44.8 | L4 | Barium flint | High-index side of D2's collective cement |
| 1.5673 / 42.8 | L5 | Light flint | Low-index negative of D2 |
| 1.5407 / 47.2 | L6 | Light flint | Low-index side of D3's cement |

## Focus Mechanism

The patent prints only the infinity prescription and says nothing about focusing. The model is infinity-only; no focus movement is modelled, and the stored close-focus value only marks focus as not modelled.

## Conditional Expressions

The single claim states four conditions. Figure 2 satisfies each at its printed values, with f the computed 99.99 mm:

| Condition (claim) | Figure 2 |
|---|---|
| nD difference at the negative member's cement face ≥ 0.05 | 1.6242 − 1.5673 = 0.0569 |
| (n′ − n)·f / r at that face > 0.1 | 0.0569 × 99.99 / 40.828 = 0.139 |
| Second air space ≥ 2/3 of the air space between the negative and rear members | a2 / a3 = 11.143 / 12.034 = 0.93 |
| Total of all air spaces ≤ 1/3 of the system's length | 23.62 / 90.47 = 0.26 |

## Stop, Clear Apertures and Image Plane

The patent gives no stop position, and neither figure draws a diaphragm. The model places the iris in the air space a3, 8.4 mm behind r8 and 3.634 mm ahead of r9. This is an inference: a3 is the usual iris position in triplet-derived designs of this kind. At the f/1.3 wide-open radius of 20.36 mm the iris clears the concave r8 face by 1.63 mm. The iris radius follows the house rule (paraxial entrance pupil = f / N). Real rays at the very edge of the f/1.3 pupil reach the stop plane slightly higher (21.17 mm) because of pupil aberration, so about the outer 3% of the pupil radius is stopped.

The patent prints no diameters. All clear semi-diameters in the file are estimates that pass the full f/1.3 axial beam. The patent drawing suggests somewhat larger diameters for the negative and rear members than the model uses.

The patent prints no back focus. The image plane is the computed paraxial back focus, 46.83 mm behind r11. The patent also states no picture angle or format, so the viewer's default half-field is computed by the engine, not taken from the patent.

On axis, real D-line rays cross the axis within +0.02 mm of the paraxial focus at full aperture and within −0.20 mm at the 0.7 zone. This tight correction is consistent with an exact transcription of the table.

## Design Heritage and Context

The patent's introduction places Figure 2 among high-speed objectives developed from the triplet by splitting the front member. Other fast lenses of the early 1930s, such as Ludwig Bertele's Ernostar and Sonnar designs for Ernemann and Zeiss, also split the triplet's front member. That comparison is an interpretation; the patent cites no other design.

No Leitz production lens matching Figure 2 has been identified:

- Leitz's fast standard lens of the 1930s, the Xenon 5 cm f/1.5 (1936), is a seven-element, five-group double-Gauss design derived from Horace William Lee's Taylor, Taylor & Hobson patents (GB 373,950 and US 2,019,985 are engraved on the lens). Its successor, the Summarit 5 cm f/1.5, has the same seven-element, five-group form.
- Berek's Hektor 7.3 cm f/1.9 (1931) has six elements in three groups.

Neither matches Figure 2's single front meniscus followed by three cemented doublets, and no Leitz f/1.3 lens has been found. The example is therefore recorded as a patent design without a documented production counterpart.

## Sources

- US 1,899,934, M. Berek, *Ultralight Intensive Objective*, granted March 7, 1933: [Google Patents](https://patents.google.com/patent/US1899934A/en).
- Casual Photophile, "A History of the Xenon Lens" (2019), on the Leitz Xenon f/1.5 and its Taylor-Hobson patents: <https://casualphotophile.com/2019/03/10/xenon-lens-history/>.
- Lens-DB, Leitz Wetzlar Xenon 50mm F/1.5 (seven elements, five groups): <https://lens-db.com/leitz-wetzlar-xenon-50mm-f15-1936>.
- Lens-DB, Leitz Wetzlar Hektor 73mm F/1.9 (six elements, three groups): <https://lens-db.com/leitz-wetzlar-hektor-73mm-f19-1931>.
- Kamerastore, Leica 5cm f1.5 Summarit (seven elements, five groups): <https://kamerastore.com/en-us/products/leica-5cm-50mm-f1-5-summarit-leica-m>.
