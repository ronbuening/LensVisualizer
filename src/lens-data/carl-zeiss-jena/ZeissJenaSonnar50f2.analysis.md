# Sonnar f/2 — Patent Example I

## Patent Reference and Design Identification

**Patent:** US 1,998,704
**Inventor:** Ludwig Bertele
**Assignee:** Zeiss Ikon AG
**Filed:** August 31, 1932
**Priority:** September 1, 1931, Germany
**Granted:** April 23, 1935
**Title:** Photographic Objective
**Embodiment analyzed:** Example I, Fig. 1, scaled by 0.5

Example I specifies f = 100 mm and f/2 with six elements in three groups. The
viewer halves the published radii and axial dimensions to represent the 50 mm
scale associated with the Sonnar family. The patent itself does not identify a
particular production sample or specify the Contax mount. The 35 mm format,
mount and approximately 46.8° diagonal field are application metadata; the field
is derived from a 43.3 mm diagonal at this focal length.

The source has two PDF pages. Figure 1 is on page 1; Example I's numerical table
is at the bottom left of page 2. Example II is a different five-element f/2.8
design and is not used here. The source L4 index is 1.6890. A focal-length fit
supports that reading but does not replace the original table evidence.

## Optical Architecture

The sequence is a positive front singlet, a cemented triplet and a positive
rear doublet. This gives six air-glass surfaces. The low-index element inside
the triplet supplies an optical separation without introducing two additional
air-glass boundaries.

The patent addresses coma by introducing a collecting cemented face in the rear
member. Its two media differ in reference index by more than 0.1, and the hollow
side of that interface faces the picture. Here the step from L5 to L6 is 0.1064.

The 7.5 mm air gap between the triplet and rear doublet is sourced at this scale.
The stop divides it into 2.5 and 5.0 mm in the model. The patent does not give
that precise stop position; it remains inferred. All powered surfaces are spherical.

## Element-by-Element Analysis

### L1 — Positive Meniscus

Modeled nd = 1.6185, ν = 60.5. Glass: unmatched crown medium, supplier unspecified.
Calculated isolated focal length is approximately +73 mm.

The front meniscus collects the beam. Its two positive radii bend the element
toward the object. Its optical constants do not establish its historical
manufacturer or chemical composition.

### L2 — Positive Meniscus, Triplet Entry

Modeled nd = 1.6711, ν = 47.3. Glass: unmatched patent medium.
Calculated isolated focal length is approximately +38.1 mm.

L2 supplies positive power at the strongly curved front of the triplet. Its
reference optical constants are shared with L6, without proving a manufacturing
reason for that selection.

### L3 — Biconvex Low-Index Element

Modeled nd = 1.4645, ν = 65.7. Glass: FK3 catalog equivalent, supplier unspecified.
Calculated isolated focal length is approximately +87 mm.

The low-index layer is cemented between higher-index neighbors. Its in-situ
interface powers differ from those of an isolated biconvex element in air. The
patent does not claim anomalous partial dispersion. A tiny catalog departure
previously attached to FK3 did not justify a highlighted APD label.

### L4 — Biconcave Negative, Triplet Exit

Modeled nd = 1.6890, ν = 31.2. Glass: N-SF8 catalog equivalent, supplier unspecified.
Calculated isolated focal length is approximately −15.8 mm.

This is the strongest isolated negative element. Its rear radius of 11.85 mm
at the chosen scale forms the deeply concave exit of the triplet. Its optical
rim is distinguished from the bevel and annotation lines in the drawing.

### L5 — Negative Meniscus, Rear Doublet

Modeled nd = 1.5647, ν = 55.8. Glass: unmatched patent medium.
Calculated isolated focal length is approximately −32.2 mm.

Its index is lower than L6's, meeting the source's greater-than-0.1 index step.
The shared radius is +15.35 mm and the interface has positive refracting power.

### L6 — Biconvex Positive, Rear Doublet

Modeled nd = 1.6711, ν = 47.3. Glass: unmatched patent medium.
Calculated isolated focal length is approximately +19.6 mm.

L6 completes the rear collecting member. The actual source identifies optical
constants, rather than a catalog name or production supplier.

## Glass Identification and Dispersion

The source tabulates nD and ν. The engine uses the D-line indices as approximate
modern nd values. FK3 and N-SF8 comparisons have compatible catalog coordinates;
those comparisons supply modeled dispersion curves, not historical identities.
Other unmatched media use the engine's Abbe-based approximation.

Copied catalog nC/nF/ng values have been removed from the prescription so they
do not masquerade as patent measurements or override the catalog dispersion
model. No exact source partial-dispersion ratio is published in Example I.
Chromatic results depend on these catalog or Abbe-based modeling assumptions.

## Focus Mechanism

The source gives no finite-distance configuration, travel or drive mechanism.
The viewer demonstrates inferred unit focus: all elements and the stop move
toward the object while the image plane remains fixed. There is no zoom.

| State | Rear air gap | Unit extension |
|---|---|---|
| Infinity | 24.18 mm | 0 mm |
| Modeled 0.90 m object-to-image distance | 27.3398042 mm | 3.1598042 mm |

The endpoint comes from complete paraxial propagation, including the 30.1 mm
assembly and the finite object leg. The prior 2.94 mm thin-lens extension used
a different distance reference. Intermediate travel is interpolated and its
distance labels remain approximate. The infinity back gap is a rounded calculated
value (unrounded 24.1830432 mm), not a published source distance.

## Diagram Verification

Figure 1 was reviewed at 600 dpi. An approximately 975-pixel first-to-last
vertex span represents 30.1 mm at the chosen scale. The front rim is about
540 pixels from the axis, the triplet's large rim about 430, and the rear
member about 325. These suggest approximately 16.7, 13.3 and 10.0 mm respectively.
The revised front rims are 16 mm; the triplet entrance/shared rim is 13 mm;
the rear doublet rims are 9.7 mm. Smaller exit rims of the triplet are retained
with geometric clearance. These are inferred drawing dimensions, not a numerical
clear-aperture table. Stop-down settings beyond f/2 are visualization controls.

## Sources

- [US 1,998,704](https://patents.google.com/patent/US1998704A/en), local
  `patents/US1998704.pdf`: Fig. 1 on page 1, Example I and explanatory prose on page 2.
- Repository glass catalog entries for FK3 and N-SF8 provide the identified
  catalog comparisons and their dispersion-source provenance.
