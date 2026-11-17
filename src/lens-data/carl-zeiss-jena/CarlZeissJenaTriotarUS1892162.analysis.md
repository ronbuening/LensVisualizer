# RICHTER THREE-LENS PATENT REFERENCE — US 1,892,162 A

## Patent Reference and Design Identification

**Patent:** US 1,892,162 A, *Photographic Three-Lens Objective*  
**Application Number:** Serial No. 536,813  
**Priority:** Germany, May 27, 1930  
**Filed:** May 12, 1931  
**Granted:** December 27, 1932  
**Inventors:** Robert Richter  
**Assignee:** Carl-Zeiss-Stiftung (printed as "the firm Carl Zeiss, of Jena, Germany")  
**Example details:** one numerical example, printed twice with identical values: on the drawing sheet beside the
section figure and in the table of the specification. The figures in the table are millimetres at the stated 100 mm
focal length.

The patent describes a three-lens anastigmat for hand cameras with an aperture ratio between 1:5 and 1:4, intended to
cover a picture whose diagonal is about equal to the focal length while keeping the vertex length (front vertex to rear
vertex) under one quarter of the focal length. The specification states that objectives meeting these conditions had
usually needed at least four lenses, because three-lens objectives gave distinctly poorer pictures, and it sets out to
bring a triplet close to four-lens quality. The single example is stated at 1:4.5 and 100 mm.

The model is a hidden patent reference at the patent's own scale. It is not presented as a specific production lens,
but the patent has a documented association with the Zeiss Triotar:

1. Marco Cavina's history of the Jena 135 mm lenses reproduces this patent, drawing sheet and specification, under the
   caption "Carl Zeiss Jena Triotar 1:4,5 (Robert Richter, Maggio 1930)". He states that the Jena Triotar was computed
   by Robert Richter in the late 1920s and that the German application was filed on 27 May 1930, the priority date
   printed on this US patent.
2. The Triotar was a three-element, three-group triplet, the construction of this example.
3. The Triotar 7.5 cm f/4.5 was the taking lens of the first Rolleicord (introduced November 1933), a hand camera of the
   kind the patent names, at the patent's aperture, with a 6 × 6 cm picture whose diagonal (about 79 mm) is close to
   the focal length.
4. The timing fits: German priority 1930, US grant 1932, and a Contax Triotar 8.5 cm f/4 dated to 1932.

The limits are just as clear. No Zeiss document seen for this file publishes a Triotar prescription or names this
patent, Cavina is a secondary source, and the example is normalised to 100 mm rather than to any marketed Triotar
focal length. The link is therefore to the Triotar 1:4.5 design family; the model is not a scaled copy of a named
production lens.

## Optical Architecture

The example is a classic positive–negative–positive triplet of the Cooke type: a plano-convex front lens (I), a
biconcave middle lens (II) and a biconvex rear lens (III), all air-spaced. There are 3 elements in 3 groups and no
cemented surfaces.

The patent's distinguishing rules concern the spacing and the outer curves of the front pair:

- the air space between lenses I and II must be the smaller of the two (here 3.7 mm against 10.0 mm);
- the radii of the first and fourth surfaces must each be 20 to 26 % of the focal length (here r1 = +23.25 mm and
  r4 = +22.85 mm, 23.3 % and 22.9 %);
- the distance from the first to the fourth surface vertex must exceed 7.5 % of the focal length (here 9.5 mm, 9.5 %,
  as the patent itself notes);
- the vertex length must stay under one quarter of the focal length (here 22.0 mm, 22 %).

The specification adds that the design works best when the third lens has an nD above 1.63 (claim 2 states this for
the rear converging lens); lens III has nD = 1.6423.

The power is concentrated at the front. In air, lens I has f = +37.34 mm, lens II f = −28.75 mm and lens III only
f = +72.49 mm, so the closely spaced front pair does most of the work and the rear lens is a weak collector with a
nearly flat front face (r5 = +205.0 mm). The Petzval sum of the model is 0.0035 mm⁻¹, a Petzval radius of about
288 mm, or roughly 2.9 times the focal length.

The patent prints no diaphragm position and the drawing shows none. The model places the iris midway in the 10 mm
space between lenses II and III, 5 mm behind r4. That is where the between-lens shutter of a hand-camera triplet
normally sits, but it is an inference, not a source fact.

## Element-by-Element Analysis

### L1 / Lens I — Plano-Convex Positive

`nD = 1.6227, ν = 56.9.` Glass: not named in the patent; dense barium crown class (inferred). f = +37.34 mm.

Lens I is the front collector. Its convex front surface (r1 = +23.25 mm) is one of the two radii the patent
constrains, and its rear surface is flat (r2 = ∞). At 4.5 mm it is the thickest lens of the three, and its printed
diameter, 23.4 mm, is the largest. With the second surface flat, nearly all of the lens's refraction takes place at the
front surface.

### L2 / Lens II — Biconcave Negative

`nD = 1.6128, ν = 37.0.` Glass: not named in the patent; ordinary flint, F3 class (Schott F3 is 1.61293 / 36.9 at the
d line; inferred). f = −28.75 mm.

Lens II is the dispersive member that corrects the colour and the Petzval sum of the two collectors. Its front face is
weak (r3 = −78.6 mm) and its rear face strong (r4 = +22.85 mm, the second radius the patent constrains). It is thin
(1.3 mm) and sits only 3.7 mm behind lens I, so lenses I and II form a compact front pair 9.5 mm deep.

### L3 / Lens III — Biconvex Positive

`nD = 1.6423, ν = 48.0.` Glass: not named in the patent; barium flint class near BaF9 (1.64328 / 47.8 at the d line;
inferred). f = +72.49 mm.

Lens III is the rear collector, 10 mm behind lens II. Almost all of its power is at the rear surface
(r6 = −59.96 mm); the front surface (r5 = +205.0 mm) is nearly flat. The patent's preference for an index above 1.63
in this lens fits a common triplet strategy: a high-index collector reduces the Petzval sum for a given power. Reading
it that way is an interpretation; the patent gives no reason for the choice.

## Glass Identification

The patent prints nD and the Abbe number ν for each lens and names no glass types. The data file stores the printed
pairs with `indexReference: "D"` (the sodium D line) and assigns no catalog glass, so the model's dispersion comes from
the printed ν values alone.

| Lens | nD | ν | Probable class (inferred) |
|---|---:|---:|---|
| I | 1.6227 | 56.9 | dense barium crown |
| II | 1.6128 | 37.0 | ordinary flint, F3 class |
| III | 1.6423 | 48.0 | barium flint, near BaF9 |

The two collectors use different glasses: a crown (ν = 56.9) in front and a barium flint (ν = 48.0) behind, with an
ordinary flint (ν = 37.0) between them. The patent publishes no partial dispersions, so no secondary-spectrum claim can
be made for the model.

## Focus Mechanism

The patent gives only the infinity state, and the model is infinity-only. No focus movement is modeled; the stored
close-focus value of 10¹⁵ m marks focus as not modeled and is not a minimum focus distance. The patent prints no
focusing data.

## Verification Summary

| Quantity | Patent | Model |
|---|---|---|
| Focal length | 100 mm | 100.0004 mm (paraxial) |
| Aperture | 1:4.5 | f/4.5 |
| Vertex length | 22 % of f | 22.000 mm |
| First to fourth surface vertex | 9.5 % of f | 9.500 mm |
| Back focus | not printed | 82.234 mm (computed paraxial) |
| Picture diagonal | about equal to f (half-field about 26.6°) | engine default display field 35.0° |

Every radius (with its printed sign), thickness, spacing, nD and ν in the data file matches both printed copies of the
table. The image plane is the computed paraxial back focus of the printed table, because the patent prints no back
focus. At f/4.5 the real marginal ray crosses the axis about 0.20 mm ahead of that plane, a small undercorrection of
spherical aberration.

**Rims and the axial beam.** The semi-diameters are half the printed lens diameters (11.7, 10.4 and 10.0 mm), on both
faces of each lens. The f/4.5 axial beam clears every rim: its real heights are 11.11, 10.77, 9.72, 9.15, 9.31 and
9.30 mm at surfaces 1 to 6. The model's iris radius, 9.08 mm, is set from the paraxial f/4.5 pupil, while the real
marginal ray reaches the iris at 9.21 mm because of the front pair's spherical aberration. The iris therefore trims
the outermost 1.4 % or so of the entrance-pupil radius (in a 201-ray axial fan, the two outermost rays on each side).
The effective aperture stays within 3 % of f/4.5. The lens diameters cut nothing on axis.

**Off axis.** The printed diameters vignette the oblique beam, as the patent's small lenses imply. At 10° about 13 % of
the bundle width is cut on one side at lens I; at 20° about 36 % at lens I and 24 % at lens III. At the patent's corner
(about 26.6°, an image height of 50 mm) the chief ray still clears every rim, but the bundle is heavily vignetted. The surface validator reports no edge-thickness or spacing errors.

## Design Heritage and Context

The example belongs to the long line of Zeiss triplets derived from H. Dennis Taylor's Cooke triplet. Its specific
contribution is a set of spacing and curvature rules meant to let a three-lens objective approach four-lens
performance at f/4.5 with a short vertex length. Robert Richter, who signed this patent, later designed the Zeiss Topogon wide
angle (US 2,031,792).

## Sources

- US 1,892,162 A, R. Richter, *Photographic Three-Lens Objective*, granted December 27, 1932:
  https://patents.google.com/patent/US1892162A/en
- Marco Cavina, "Carl Zeiss Jena 135mm 1:4: Sonnar oder Triotar?" (reproduces this patent as the Triotar 1:4,5):
  https://www.nocsensei.com/camera/tecnica/marco-cavina/marcocavina/carl-zeiss-jena-135mm-14-sonnar-oder-triotar/
  — patent reproduction image:
  https://i0.wp.com/www.nocsensei.com/wp-content/uploads/2020/01/M_Cavina_Sonnar_Trioar_02.jpg
- Camerapedia, "Rolleicord I (Art Deco)" (Triotar 7.5 cm f/4.5, introduced 1933):
  https://camerapedia.fandom.com/wiki/Rolleicord_I_(Art_Deco)
- Pacific Rim Camera, "Zeiss Ikon Contax 8.5 cm f/4 Triotar" (three elements in three groups, 1932):
  https://pacificrimcamera.com/pp/zicontax85f4.htm
