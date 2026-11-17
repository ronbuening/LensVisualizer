# LEITZ 100mm f/2 (US 1,899,934 Figure 1 Design)

## Patent Reference and Design Identification

**Patent:** US 1,899,934 A, *Ultralight Intensive Objective*  
**Application Number:** Serial No. 623,554  
**Filed:** July 20, 1932 (German priority June 6, 1931)  
**Granted:** March 7, 1933  
**Inventor:** Max Berek  
**Assignee:** Ernst Leitz GmbH (printed as "Ernst Leitz, Optische Werke, G. m. b. H.", Wetzlar)  
**Example details:** Figure 1 and its table (1:2.0; radii r1–r10, thicknesses d1–d6, air spaces a1–a3, nD and ν), PDF p. 2; Figure 2 is a second example at f/1.3

The patent gives two numerical examples. The LEITZ 100mm f/2 (US 1,899,934 Figure 1 Design) follows Figure 1, which the patent calls the preferred construction: an f/2 objective of six spherical elements in four groups. The table prints no focal length, but its prescription traces to an effective focal length of 99.998 mm, so the table is normalised to f = 100 and the model keeps that scale.

The patent names no product, and no production lens with this layout has been found. Leitz's f/2 standard lens of the same years, the Summar 5 cm f/2 (about 1933), is described as a six-element, four-group modified double-Gauss, with meniscus groups facing a central stop (PHSC; quanj). That is a different arrangement from Figure 1, which has two positive singlets in front, a cemented member that is negative overall, and a cemented positive rear member. The Hektor 7.3 cm f/1.9 of 1931–32 is listed as six elements in three cemented groups (lens-db). The scanned copy carries a handwritten library note, "Br. Pat. 381,135", which may be a British counterpart; it has not been checked.

## Optical Architecture

The patent describes the design as a triplet whose front member has been split in two. Its power sequence is positive–positive–negative–positive: two air-spaced positive singlets (L1, L2), a cemented negative member (L3 + L4) and a cemented positive rear member (L5 + L6). Every surface is spherical, and the two cemented interfaces are r6 and r9.

The two front singlets together have a focal length of +62.5 mm. The cemented negative member is −38.85 mm, and everything ahead of the rear member is together weakly negative (about −505 mm); the cemented rear member is +61.24 mm. The patent's stated aim is to keep this very fast triplet derivative free of stronger vignetting at the required picture angle, which it does through conditions on the air spaces (see Patent Conditions below).

The patent prints no iris position, and Figure 1 draws none. The model places the iris in the 7.56 mm air space between the cemented negative member and the rear member, 6.5 mm behind r7 and 1.06 mm ahead of r8. The image plane is the computed paraxial back focus, 69.65 mm behind r10; the distance from r1 to r10 is 61.64 mm and the total length to the image is 131.29 mm.

## Element-by-Element Analysis

### Element 1 (L1) — Positive Meniscus, convex to the object

`nD = 1.6185, νD = 60.5.` Glass: Unmatched (nD 1.6185 / V 60.5), a crown. f = +121.8 mm.

L1 is the first half of the split front member. Its strong front face (r1 = +51.193) and weak rear face (r2 = +148.90) make it a meniscus bent toward the object.

### Element 2 (L2) — Biconvex Positive

`nD = 1.6185, νD = 60.5.` Glass: Unmatched (nD 1.6185 / V 60.5), the same crown as L1. f = +116.0 mm.

L2 is the second half of the split front member, separated from L1 by a 1.00 mm air space whose two faces (r2 = +148.90, r3 = +132.0) are nearly parallel. The patent credits this split front member with reaching the highest light intensity. Sharing the front power between two elements of the same glass is the usual way to hold down spherical aberration at a wide aperture; that reading is an interpretation, not a statement in the patent.

### Elements 3 and 4 (L3 + L4) — Cemented Negative Member

- **L3, Positive Meniscus, concave to the object.** `nD = 1.6890, νD = 31.2.` Glass: Unmatched (nD 1.6890 / V 31.2), an SF8-class dense flint. f = +83.2 mm.
- **L4, Biconcave Negative.** `nD = 1.6034, νD = 38.0.` Glass: Unmatched (nD 1.6034 / V 38.0), an F5-class flint. f = −27.8 mm.

This member takes the place of a triplet's negative middle element; together the pair is −38.85 mm. Both of its outer faces are concave (r5 = −57.46 toward the object, r7 = +39.40 toward the image). The interface r6 = −30.55 is a converging cemented face, and the patent's claim is built on it: the index step there must be at least 0.05 (here 1.6890 − 1.6034 = 0.0856), and the step divided by the radius, times the focal length, must exceed 0.1 (here 0.28).

### Elements 5 and 6 (L5 + L6) — Cemented Positive Rear Member

- **L5, Negative Meniscus, convex to the object.** `nD = 1.6034, νD = 38.0.` Glass: Unmatched (nD 1.6034 / V 38.0), an F5-class flint. f = −78.3 mm.
- **L6, Biconvex Positive.** `nD = 1.6580, νD = 51.4.` Glass: Unmatched (nD 1.6580 / V 51.4), a barium crown. f = +35.1 mm.

The rear member is the triplet's rear positive element made into a cemented pair, +61.24 mm overall. Its interface r9 = +33.558 is also a converging cemented face, and the patent's claim speaks of the design's "collective cement faces" in the plural.

## Glass Identification

The patent prints only nD and ν for each element. The data file stores them as sodium D-line values. No other line indices are printed, so the model estimates the secondary spectrum from nD and ν.

| Elements | nD / ν (printed) | Nearest catalogue class | Role |
|---|---:|---|---|
| L1, L2 | 1.6185 / 60.5 | No catalogue match | Split front collector |
| L3 | 1.6890 / 31.2 | SF8 class (Schott N-SF8 nd 1.68894 / νd 31.31) | Positive half of the negative member |
| L4, L5 | 1.6034 / 38.0 | F5 class (Schott F5 nd 1.60342 / νd 38.03) | Negative elements of both cemented members |
| L6 | 1.6580 / 51.4 | No catalogue match | Positive half of the rear member |

The SF8 and F5 classes agree with the printed values at the helium d line, but at the sodium D line the patent uses they are 0.00026 and 0.00012 lower, outside the printed precision. Every glass is therefore left unmatched; the classes are coordinate comparisons only, and the patent does not name its glasses or their maker.

## Focus Mechanism

The patent gives no close-focus data, focus travel or object distances. The model has a single infinity state with no focus movement.

## Patent Conditions and Model Scope

The claim sets four conditions. At the table's own scale (f = 100), Figure 1 meets all of them:

| Condition in the claim | Figure 1 | Result |
|---|---:|---|
| Index step at the cemented face of the negative member at least 0.05 | 0.0856 | Met |
| That step divided by the radius r6, times f, greater than 0.1 | 0.28 | Met |
| Second air space (a2) at least two thirds of the air space behind the negative member (a3) | 5.72 / 7.56 = 0.76 | Met |
| Sum of all air spaces at most one third of the system length | 14.28 / 61.64 = 0.23 | Met |

The radii, thicknesses, air spaces, indices and Abbe numbers are those of the printed table, signs included, and the element shapes agree with Figure 1. The model's effective focal length is 99.998 mm, the f-number is 2.00 (entrance pupil radius 25.0 mm, iris radius 17.97 mm), the paraxial back focus is 69.65 mm, and the Petzval sum is 0.00464 per mm (a Petzval radius of about 216 mm, 2.2 times the focal length).

The clear semi-diameters are not printed; they are estimated from Figure 1: 26 mm for L1, 25 mm for L2, 23 mm for the negative member and 19.7 mm for the rear member, which the figure draws as the smallest of the four groups. The full f/2 axial beam passes them all with at least 0.9 mm to spare; the tightest rims are r1 and the rear member. Figure 1 ends the concave r7 face short of the member's edge and bevels out to it; the model cuts that rim flat 4.68 mm behind the r7 vertex (a cut radius of 18.62 mm), which also keeps the glass ahead of the iris plane. No traced beam reaches that radius.

At a 10° half-field the front rims trim about 15–22 % of the beam on one side and the rear member about 6–8 %; relative illumination is about 88 % at 10° and 82 % at 12°. With the iris where the model puts it, no chief ray passes through the centre of the stop beyond about 23.6° half-field. At 22.5° the chief ray lands at 42.5 mm image height, against 41.4 mm for a distortion-free lens, about +2.6 %. The patent states no field angle, so the viewer's default half-field of about 27° is a display setting and does not describe the design's coverage.

## Sources

1. Max Berek, **US Patent 1,899,934, "Ultralight Intensive Objective,"** assignor to Ernst Leitz, Optische Werke, G. m. b. H., filed July 20, 1932, granted March 7, 1933. Figure 1: PDF p. 1; table and claim: PDF p. 2. https://patents.google.com/patent/US1899934A/en and https://patentimages.storage.googleapis.com/pdfs/US1899934.pdf
2. Photographic Historical Society of Canada, "When f/2 was super fast" (Summar 5 cm f/2: six-element modified Gauss design, about 1933). https://phsc.ca/camera/when-f-2-was-super-fast/
3. "Leica Summar 5cm 1:2 (1933–1940)" (four groups, six elements, double-Gauss). https://quanj.tistory.com/890
4. lens-db, "Leitz Wetzlar Hektor 73mm F/1.9" (six elements in three groups). https://lens-db.com/leitz-wetzlar-hektor-73mm-f19-1931
