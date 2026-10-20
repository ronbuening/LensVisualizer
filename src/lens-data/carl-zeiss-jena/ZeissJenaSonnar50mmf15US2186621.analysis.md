## Patent Reference and Design Identification

**Patent:** US 2,186,621  
**Filed:** June 15, 1938  
**German application:** July 13, 1937  
**Granted:** January 9, 1940  
**Inventor:** Ludwig Bertele  
**Assignee:** Zeiss Ikon AG  
**Title:** *Lens System*  
**Embodiment analyzed:** Figure 1 numerical example (the patent's prior-art system; first table in publication order)

US 2,186,621 prints two numerical examples without numbering them. The first belongs to Figure 1, the seven-element,
three-group system that the drawing labels “Prior Art Lens System” and that the text attributes to US 1,975,678. The
four-unit Figure 2 system, which adds a fourth collective lens to reduce distortion, is the invention claimed by US 2,186,621
and is not the prescription modeled here. [US 2,186,621, Fig. 1 and description, PDF pp. 1–2](https://patents.google.com/patent/US2186621A/en)

The Figure 1 table is therefore a 1937 calculation of the same 7/3 Contax Sonnar 50mm f/1.5 described in US 1,975,678 (1934),
which the catalog models separately as the Carl Zeiss Jena Sonnar 50mm f/1.5. The two prescriptions share the architecture but
not the numbers. L6 keeps the same glass (nd 1.6578, νd 51.2) and L2 nearly so (1.6710 / 47.2 against 1.6727 / 47.3), but the
other five glasses change: L1 becomes 1.6710 / 47.2 instead of 1.6375 / 56.1, and L3 a 1.4892 / 70.1 crown instead of the
1.4075 / 65.7 material of the earlier patent. Radii R4, R8 and R10 differ by 15–18 %, R5 by more than a factor of two, and R7
becomes plane.

The source prescription is published at a nominal focal length of 100 mm and a relative aperture of 1:1.5. The model applies
a uniform scale of `s = 0.5` to all dimensional prescription quantities without altering refractive indices or Abbe numbers.
The scaled model has a paraxial EFL of 49.993 mm; the unscaled source calculates to 99.987 mm, in agreement with the stated
f = 100 mm.

One printed value needs care. R5 reads −846.31 in the PDF's machine-readable text layer, but the printed page shows −646.31.
The page value is used (−323.155 mm after scaling). It reproduces f = 100 mm to 0.01 %, whereas −846.31 would give 99.57 mm.

ZEISS identifies the Sonnar as a design developed in the early 1930s for the Zeiss Ikon Contax; period Zeiss Ikon literature
lists a Sonnar f/1.5 of 2 in / 50 mm, and a later Carl Zeiss Contax specification lists the 50 mm f/1.5 as a seven-element lens.
These sources confirm the product family but do not identify which calculation any production batch used. Whether the postwar
Zeiss-Opton 50/1.5 from Oberkochen followed this prescription is unconfirmed; one secondary history describes the 1950
Zeiss-Opton version as having a “new optical design.” [ZEISS, “Lenses Make History”](https://lenspire.zeiss.com/photo/en/article/lenses-make-history) · [Zeiss Ikon, *The Interchangeable Contax Lenses*](https://www.pacificrimcamera.com/rl/02363/02363.pdf) · [Carl Zeiss, Inc., *Contax 35mm Cameras and Accessories Price List*, 1956](https://www.pacificrimcamera.com/rl/02153/02153.pdf) · [Pacific Rim Camera, “50/1.5 Zeiss Sonnar for Contax”](https://www.pacificrimcamera.com/pp/zicontax50f15.htm)

## Optical Architecture

The modeled system is an all-spherical Sonnar-type seven-element lens in three air-spaced groups. From object to image it
consists of a positive front singlet, a cemented three-element meniscus group, an aperture stop in the following air space, and
a rear cemented triplet. The patent describes the first and third units as collective and the middle unit as a cemented
meniscus containing two positive components and one negative component. [US 2,186,621, Fig. 1 description, PDF p. 2](https://patents.google.com/patent/US2186621A/en)

At the 0.5 scale, G1 has an EFL in air of +60.74 mm, the cemented G2 is net negative at −65.42 mm, and the cemented G3 is net
positive at +45.16 mm. These isolated values do not add directly to the 49.99 mm system EFL, because the air separations and
principal-plane locations also enter the first-order result.

The aperture stop is not numerically located by the patent. Figure 1 places it in the air space between L4 and L5, and US
1,975,678 independently describes the iris as lying between those elements. The modeled stop is therefore placed 82% of the
scaled R6-to-R7 air gap from R6 toward R7. Its semi-diameter, about 9.57 mm, is sized so the paraxial entrance pupil gives the
stated f/1.5; it is not a historical diaphragm diameter. [US 1,975,678 A](https://patents.google.com/patent/US1975678A/en)

## Element-by-Element Analysis

### L1 — Positive Meniscus

`nd = 1.6710, νd = 47.2. Glass: 671472 — catalog coordinate (supplier unconfirmed). f = +60.737091 mm.`

L1 is the front singlet and the patent’s first collective unit. Its positive meniscus form provides the first converging power
before the very small air separation to the front cemented triplet. The patent specifically describes its first face as convex
and its rear face as concave; the scaled data preserve that source geometry exactly apart from the uniform 0.5 dimensional
scale.

### L2 — Positive Meniscus, front component of cemented triplet T1

`nd = 1.6710, νd = 47.2. Glass: 671472 — catalog coordinate (supplier unconfirmed). f = +41.932940 mm.`

L2 begins the second air-spaced unit. It is a positive component cemented directly to L3 and shares the same source optical
coordinate as L1. Its standalone positive power is not the power of the complete T1 group: L2, L3, and L4 together form a net
negative cemented group in the isolated group calculation.

### L3 — Biconvex Positive, middle component of cemented triplet T1

`nd = 1.4892, νd = 70.1. Glass: 489701 — fluor-crown class (supplier unconfirmed). f = +77.646527 mm.`

L3 is the low-index, high-Abbe middle positive component of T1. The patent expressly calls attention to its lower refractive
index relative to the two lenses to which it is cemented. The data preserve that contrast rather than replacing the historical
coordinate with a modern named melt. With only `nd` and `νd` published, the model does not support a more specific partial-
dispersion or apochromatic interpretation.

### L4 — Biconcave Negative, rear component of cemented triplet T1

`nd = 1.7394, νd = 28.2. Glass: Unmatched (739282 — dense-flint class; supplier unconfirmed). f = −15.321546 mm.`

L4 supplies the strongest negative standalone element power in the lens and completes the patent’s dispersive cemented meniscus
unit. Its high refractive index and low Abbe number contrast sharply with L3, but the source does not identify a supplier or melt.
The adopted `Unmatched` label therefore records the coordinate and broad class without assigning a modern catalog identity that
the evidence cannot establish.

### L5 — Plano-Concave Negative, front component of cemented triplet T2

`nd = 1.5232, νd = 50.9. Glass: Unmatched (523509 — supplier unconfirmed). f = −48.824541 mm.`

L5 starts the rear cemented triplet immediately behind the stop. Its first face is plane in the numerical prescription. The
patent identifies L5 as negative and specifically notes that its refractive index is lower than that of the positive L6 to which
it is cemented. As with L4, no defensible exact modern catalog identity was established for the stored coordinate.

### L6 — Biconvex Positive, central component of cemented triplet T2

`nd = 1.6578, νd = 51.2. Glass: Unmatched (658512 — SSK-class dense crown, near N-SSK5; supplier unconfirmed). f = +13.144813 mm.`

L6 is the strongest positive standalone element in the prescription. Cemented between L5 and L7, it is the positive core of the
rear collective unit. The three-element T2 assembly is net positive when evaluated as an isolated cemented group in air, with a
standalone group EFL of +45.158435 mm.

### L7 — Negative Meniscus, rear component of cemented triplet T2

`nd = 1.5894, νd = 61.2. Glass: Unmatched (589612 — crown class, near SK5; supplier unconfirmed). f = −24.399057 mm.`

L7 completes the rear triplet and the optical train. The source describes this final component as concavo-convex and notes the
relative curvature of its two faces. In the final model its rear surface is followed by the computed image distance, not by a
patent-published back-focus value.

## Glass Identification and Selection

The Figure 1 example publishes only d-line refractive indices and Abbe numbers. It names no glass manufacturer and supplies no
`nC`, `nF`, `ng`, partial-dispersion ratio, or `dPgF` data. The data file therefore keeps source coordinates or broad classes and
does not promote coordinate-compatible modern catalog rows to historical supplier identities.

| Source coordinate (`nd / νd`) | Elements | Data-file identification |
|---|---|---|
| 1.6710 / 47.2 | L1, L2 | 671472 — catalog coordinate, supplier unconfirmed |
| 1.4892 / 70.1 | L3 | 489701 — fluor-crown class, supplier unconfirmed |
| 1.7394 / 28.2 | L4 | Unmatched (739282 — dense-flint class) |
| 1.5232 / 50.9 | L5 | Unmatched (523509 — supplier unconfirmed) |
| 1.6578 / 51.2 | L6 | Unmatched (658512 — SSK-class dense crown, near N-SSK5) |
| 1.5894 / 61.2 | L7 | Unmatched (589612 — crown class, near SK5) |

Modern SCHOTT, OHARA, HIKARI/Nikon, CDGM, HOYA, and SUMITA catalogs were consulted. Several coordinates
have close present-day catalog neighbors, but the historical patent does not identify the supplier, and a coordinate-compatible
row is not evidence that a particular melt was used in the lens. The analysis therefore treats the glass strings as modeling
annotations rather than provenance claims. [SCHOTT Advanced Optics](https://www.us.schott.com/shop/advanced-optics/en/search/) · [OHARA Optical Glass](https://oharacorp.com/optical-glass/) · [HIKARI / Nikon Optical Glass](https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/)

The source does provide useful relative material information. L3 is deliberately lower in refractive index than the adjacent
members of T1, and L5 is lower in index than L6. Those relationships are stated by the patent and are preserved in the model.
They should not be expanded into claims of anomalous dispersion or apochromatic correction, because the required line-index or
partial-dispersion evidence is absent.

## Focus Mechanism

US 2,186,621 supplies one fixed optical state for the Figure 1 example and gives no variable internal spacings or finite
object-distance table. No group moves inside the lens: the Contax 50 mm lenses focus as a unit through the camera's helicoid.

Carl Zeiss Contax literature gives a closest distance of 3 ft (0.9144 m) for the 50 mm f/1.5, and secondary records for the
postwar version also report about 0.9 m and focusing through the Contax camera mechanism. The model therefore represents
helicoid focus as a modeled unit extension: the whole lens and the stop move objectward together and only the back focal
distance changes. At a 0.9 m object-to-image endpoint, the convention used for the US 1,975,678 Sonnar, the paraxial
extension is 3.138 mm. The back focal distance grows from 22.458 mm to 25.596 mm, at a magnification of about −0.063. The
extension is calculated from the prescription; neither the patent nor the product sources print it. [Carl Zeiss, Inc., *Contax 35mm Cameras and Accessories Price List*, 1956](https://www.pacificrimcamera.com/rl/02153/02153.pdf) · [Leica Lens List, “Carl Zeiss Opton Sonnar 50mm f/1.5”](https://leicalenslist.com/lenses/carl-zeiss-opton-sonnar-50mm-f15)

## Model Scope and Limitations

At the 50 mm scale the model's paraxial quantities are:

| Quantity | Value | Note |
|---|---:|---|
| EFL | 49.993 mm | Infinity state; 99.987 mm at patent scale against the stated 100 mm |
| BFD | 22.458 mm | Surface 10 vertex to paraxial infinity image; computed, not printed |
| R1-to-R10 vertex track | 36.285 mm | First lens vertex to last lens vertex |
| Maximum aperture | f/1.5 | Stop sized for the stated f-number; not a measured diaphragm |
| Petzval sum | +0.005609 mm⁻¹ | Surface-by-surface `φ/(n·n′)` |

The front-vertex-to-image track is 58.743 mm, giving `TL/EFL = 1.175` and `BFD/EFL = 0.449`; the design is neither
telephoto (`TL/EFL < 1`) nor retrofocus (`BFD > EFL`).

The image-plane spacing after surface 10 is the calculated BFD, not a source-published distance. The patent prints no semi-diameters.
The rims are read from Figure 1, which is drawn to axial scale, and checked against the f/1.5 axial marginal ray and the
edge-thickness and rim-slope limits. The figure draws L1 slightly inside that ray, so L1 is held at 17.0 mm rather than the
drawn 16.5 mm. Both cemented triplets are drawn square-cut, at about 14.5 mm and 10 mm; the rear one is set to 9.9 mm,
the most the steep R9 junction allows. L7 rises to 11.6 mm at R10, as drawn.

No aspherical or diffractive surfaces occur in the Figure 1 example, so no conic convention or coefficient transformation is
applicable. The only scale transformation is the uniform 0.5 scaling of dimensional quantities; refractive indices and Abbe
numbers remain the patent values.

## Design Heritage and Context

The placement of this prescription inside US 2,186,621 is important to its interpretation. Bertele used the three-unit design
of Figure 1 as the prior-art baseline against which the patent’s added fourth unit was discussed. The document says that the
fourth unit of the new design was introduced to reduce the remaining distortion of the earlier form while retaining its high
aperture and sharp definition. The modeled seven-element formula is therefore historically relevant to the Sonnar lineage, but
it is not the novel four-unit embodiment claimed by US 2,186,621. [US 2,186,621, description of Figs. 1–2, PDF p. 2](https://patents.google.com/patent/US2186621A/en)

Read together with US 1,975,678, the Figure 1 example shows the Contax Sonnar 50mm f/1.5 recalculated within three years of its
first patent, most visibly by replacing the very low-index 1.4075 crown of the 1934 example with a 1.4892 / 70.1 crown. The
patent does not say which calculation went into production, and no available manufacturer material confirms that the postwar
Zeiss-Opton lens continued either prescription unchanged.

## Sources

- Ludwig Bertele, **US 2,186,621, “Lens System”**, granted January 9, 1940. Figure 1 and its numerical example are the
  prescription source (R5 read from the page image as −646.31). <https://patents.google.com/patent/US2186621A/en>
- Ludwig Bertele, **US 1,975,678 A, “Objective”**, cited by US 2,186,621 as the prior-art antecedent and used only to
  corroborate the iris interval. <https://patents.google.com/patent/US1975678A/en>
- ZEISS, **“Lenses Make History.”** Manufacturer history for Sonnar / Contax context.
  <https://lenspire.zeiss.com/photo/en/article/lenses-make-history>
- Zeiss Ikon AG, **“The Interchangeable Contax Lenses.”** Archival manufacturer literature listing the Sonnar f/1.5,
  2 in / 50 mm. <https://www.pacificrimcamera.com/rl/02363/02363.pdf>
- Carl Zeiss, Inc., **“Contax 35mm Cameras and Accessories Price List,”** effective February 15, 1956. Manufacturer
  literature listing the Sonnar f/1.5 50 mm as seven elements with a 3 ft closest distance. <https://www.pacificrimcamera.com/rl/02153/02153.pdf>
- Leica Lens List, **“Carl Zeiss Opton Sonnar 50mm f/1.5.”** Secondary record of the postwar version's mount, approximate
  0.9 m minimum focus, and body focusing. <https://leicalenslist.com/lenses/carl-zeiss-opton-sonnar-50mm-f15>
- Pacific Rim Camera, **“50/1.5 Zeiss Sonnar for Contax.”** Secondary historical reference stating that the 1950
  Zeiss-Opton version used a new optical design; used only as a caution against assuming prescription continuity.
  <https://www.pacificrimcamera.com/pp/zicontax50f15.htm>
- SCHOTT, OHARA, HIKARI/Nikon, CDGM, HOYA, and SUMITA current optical-glass catalogs, consulted for coordinate comparison;
  no catalog row is treated as proof of the historical supplier or melt.
