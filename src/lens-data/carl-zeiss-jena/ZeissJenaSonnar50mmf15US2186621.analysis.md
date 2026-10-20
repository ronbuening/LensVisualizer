## Patent Reference and Design Identification

**Patent:** US 2,186,621  
**Filed:** June 15, 1938  
**German application:** July 13, 1937  
**Granted:** January 9, 1940  
**Inventor:** Ludwig Bertele  
**Assignee:** Zeiss Ikon Aktiengesellschaft  
**Title:** *Lens System*  
**Embodiment analyzed:** Example 1, mapped to the first numerical block in publication order / Figure 1

US 2,186,621 does not label its worked prescriptions as “Example 1” and “Example 2.” The fixed Example 1 selection therefore
corresponds to the first numerical block in publication order, the seven-element, three-group system drawn in Figure 1. The
patent explicitly identifies Figure 1 as prior art and cites US 1,975,678; the four-unit Figure 2 system is the invention being
advanced by US 2,186,621 and is not the prescription modeled here. [US 2,186,621, Fig. 1 and description, PDF pp. 1–2](https://patents.google.com/patent/US2186621A/en)

The source prescription is published at a nominal focal length of 100 mm and a relative aperture of 1:1.5. The LensVisualizer
model applies a uniform scale of `s = 0.5` to all dimensional prescription quantities, giving the nominal 50 mm product scale
without altering refractive indices or Abbe numbers. The parsed final model has a calculated paraxial EFL of 49.786674 mm; the
unscaled source model calculates to 99.573349 mm, so the scale is not adjusted to force either result to an exact nominal focal
length.

The connection to the Zeiss-Opton Sonnar 50mm f/1.5 Contax lens is an inferred production-family correlation rather than a
manufacturer-confirmed prescription identity. ZEISS identifies the Sonnar as a design developed in the early 1930s for the
Zeiss Ikon Contax; period Zeiss Ikon literature lists a Sonnar f/1.5 of 2 in / 50 mm, and a later Carl Zeiss Contax specification
lists the 50 mm f/1.5 as a seven-element lens. Those facts converge with the selected block’s seven-element / three-group
architecture and f/1.5 specification, but they do not show that the postwar Opton version retained this exact numerical
prescription unchanged. A specialist secondary history describes the 1950 Zeiss-Opton 50/1.5 as having a “new optical design,”
which is additional reason not to assert prescription continuity. [ZEISS, “Lenses Make History”](https://lenspire.zeiss.com/photo/en/article/lenses-make-history) · [Zeiss Ikon, *The Interchangeable Contax Lenses*](https://www.pacificrimcamera.com/rl/02363/02363.pdf) · [Carl Zeiss, Inc., *Contax 35mm Cameras and Accessories Price List*, 1956](https://www.pacificrimcamera.com/rl/02153/02153.pdf) · [Pacific Rim Camera, “50/1.5 Zeiss Sonnar for Contax”](https://www.pacificrimcamera.com/pp/zicontax50f15.htm)

## Optical Architecture

The modeled system is an all-spherical Sonnar-type seven-element lens in three air-spaced groups. From object to image it
consists of a positive front singlet, a cemented three-element meniscus group, an aperture stop in the following air space, and
a rear cemented triplet. The patent describes the first and third units as collective and the middle unit as a cemented
meniscus containing two positive components and one negative component. [US 2,186,621, Fig. 1 description, PDF p. 2](https://patents.google.com/patent/US2186621A/en)

The computed standalone group powers clarify the division of power without treating the groups as independent lenses inside the
assembled system. At the 0.5 scale, G1 has a standalone EFL in air of +60.737091 mm, G2 is net negative at −66.069398 mm, and
G3 is net positive at +45.158435 mm. These are isolated cemented-group values; they do not add directly to the 49.786674 mm
full-system EFL because the air separations and principal-plane locations are part of the assembled first-order behavior.

The aperture stop is not numerically located by the patent. Figure 1 places it in the air space between L4 and L5, and US
1,975,678 independently describes the iris as lying between those elements. The modeled stop is therefore placed 82% of the
scaled R6-to-R7 air gap from R6 toward R7. Its semi-diameter, 9.311719 mm, is calibrated so the paraxial entrance pupil reproduces
the published f/1.5 target. That agreement verifies the internal consistency of the modeled aperture, not a historical physical
diaphragm diameter. [US 1,975,678 A](https://patents.google.com/patent/US1975678A/en)

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

`nd = 1.4892, νd = 70.1. Glass: 489701 — fluor-crown class (supplier unconfirmed). f = +79.803444 mm.`

L3 is the low-index, high-Abbe middle positive component of T1. The patent expressly calls attention to its lower refractive
index relative to the two lenses to which it is cemented. The data preserve that contrast rather than replacing the historical
coordinate with a modern named melt. With only `nd` and `νd` published, the model does not support a more specific partial-
dispersion or apochromatic interpretation.

### L4 — Biconcave Negative, rear component of cemented triplet T1

`nd = 1.7394, νd = 28.2. Glass: Unmatched (739282 — dense-flint class; supplier unconfirmed). f = −15.453975 mm.`

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

`nd = 1.6578, νd = 51.2. Glass: 658512 — dense-crown class (supplier unconfirmed). f = +13.144813 mm.`

L6 is the strongest positive standalone element in the prescription. Cemented between L5 and L7, it is the positive core of the
rear collective unit. The three-element T2 assembly is net positive when evaluated as an isolated cemented group in air, with a
standalone group EFL of +45.158435 mm.

### L7 — Negative Meniscus, rear component of cemented triplet T2

`nd = 1.5894, νd = 61.2. Glass: 589612 — crown class (supplier unconfirmed). f = −24.399057 mm.`

L7 completes the rear triplet and the optical train. The source describes this final component as concavo-convex and notes the
relative curvature of its two faces. In the final model its rear surface is followed by the computed infinity image distance,
not by a patent-published back-focus value.

## Glass Identification and Selection

The selected block publishes only d-line refractive indices and Abbe numbers. It names no glass manufacturer and supplies no
`nC`, `nF`, `ng`, partial-dispersion ratio, or `dPgF` data. The data file therefore keeps source coordinates or broad classes and
does not promote coordinate-compatible modern catalog rows to historical supplier identities.

| Source coordinate (`nd / νd`) | Elements | Data-file identification |
|---|---|---|
| 1.6710 / 47.2 | L1, L2 | 671472 — catalog coordinate, supplier unconfirmed |
| 1.4892 / 70.1 | L3 | 489701 — fluor-crown class, supplier unconfirmed |
| 1.7394 / 28.2 | L4 | Unmatched (739282 — dense-flint class) |
| 1.5232 / 50.9 | L5 | Unmatched (523509 — supplier unconfirmed) |
| 1.6578 / 51.2 | L6 | 658512 — dense-crown class, supplier unconfirmed |
| 1.5894 / 61.2 | L7 | 589612 — crown class, supplier unconfirmed |

Modern SCHOTT, OHARA, HIKARI/Nikon, CDGM, HOYA, and SUMITA catalogs were consulted during the source audit. Several coordinates
have close present-day catalog neighbors, but the historical patent does not identify the supplier, and a coordinate-compatible
row is not evidence that a particular melt was used in the lens. The analysis therefore treats the glass strings as modeling
annotations rather than provenance claims. [SCHOTT Advanced Optics](https://www.us.schott.com/shop/advanced-optics/en/search/) · [OHARA Optical Glass](https://oharacorp.com/optical-glass/) · [HIKARI / Nikon Optical Glass](https://www.nikon.com/business/components/lineup/materials/optical-glass/catalog/)

The source does provide useful relative material information. L3 is deliberately lower in refractive index than the adjacent
members of T1, and L5 is lower in index than L6. Those relationships are stated by the patent and are preserved in the model.
They should not be expanded into claims of anomalous dispersion or apochromatic correction, because the required line-index or
partial-dispersion evidence is absent.

## Focus Mechanism

The modeled prescription has **NO_INTERNAL_RECONSTRUCTION**. US 2,186,621 supplies one fixed optical state for the selected
block and gives no variable internal spacings or finite object-distance table. Accordingly, the data file contains no `var`
entries and no internally moving group.

The `closeFocusM` value of 0.9 m is product metadata only. Carl Zeiss postwar Contax literature gives a closest distance of
3 ft (0.9144 m) for the 50 mm f/1.5, so the stored 0.9 m value is a rounded catalog/UI value rather than a traced conjugate.
Opton-specific secondary records also report approximately 0.9 m and describe focusing through the Contax camera mechanism.
Neither source supplies a finite-focus prescription, so no internal spacing law is inferred and the optical model represents the
verified fixed/infinity state only. [Carl Zeiss, Inc., *Contax 35mm Cameras and Accessories Price List*, 1956](https://www.pacificrimcamera.com/rl/02153/02153.pdf) · [Leica Lens List, “Carl Zeiss Opton Sonnar 50mm f/1.5”](https://leicalenslist.com/lenses/carl-zeiss-opton-sonnar-50mm-f15)

## Verification Summary

The source prescription was independently re-entered from the rendered patent before reconciliation with the final data file.
Separate sequential height/reduced-angle and ABCD calculations agree to floating-point precision for both the source re-entry and
the parsed implemented model; the uniformly scaled source result and the final data file agree at the reported precision.

At the modeled 50 mm scale, the verified paraxial quantities are:

| Quantity | Verified value | Reference / qualification |
|---|---:|---|
| EFL | 49.786674 mm | Parsed final model, infinity state |
| BFD | 22.268125 mm | Surface 10 vertex to paraxial infinity image |
| R1-to-R10 vertex track | 36.285000 mm | First lens vertex to last lens vertex |
| Modeled maximum aperture | f/1.5 | Calibrated inferred stop; not an independent diaphragm measurement |
| Petzval sum | +0.005679850 mm⁻¹ | Surface-by-surface `φ/(n·n′)` |

The calculated front-vertex-to-image track is 58.553125 mm, giving `TL/EFL = 1.176080`; the BFD ratio is
`BFD/EFL = 0.447271`. Under the project definitions this model is therefore neither telephoto (`TL/EFL < 1`) nor retrofocus
(`BFD > EFL`).

The image-plane spacing after surface 10 is the calculated BFD. It is not a source-published distance. Likewise, every surface
semi-diameter is modeled because the patent gives none. The portable geometry checks found a minimum sampled element edge
thickness of 0.203624 mm, a maximum spherical rim-slope angle of 57.713615°, and a minimum non-stop clearance of 0.172262 mm
among the finite exact meridional ray samples used for the construction check. These values establish the stated sampled checks;
they are not a substitute for LensVisualizer’s production renderer diagnostics, which remain an integration-stage check.

No aspherical or diffractive surfaces occur in the selected block, so no conic convention or coefficient transformation is
applicable. The only scale transformation is the uniform 0.5 scaling of dimensional quantities; refractive indices and Abbe
numbers remain the patent values.

## Design Heritage and Context

The placement of this prescription inside US 2,186,621 is important to its interpretation. Bertele used the three-unit design
of Figure 1 as the prior-art baseline against which the patent’s added fourth unit was discussed. The document says that the
fourth unit of the new design was introduced to reduce the remaining distortion of the earlier form while retaining its high
aperture and sharp definition. The modeled seven-element formula is therefore historically relevant to the Sonnar lineage, but
it is not the novel four-unit embodiment claimed by US 2,186,621. [US 2,186,621, description of Figs. 1–2, PDF p. 2](https://patents.google.com/patent/US2186621A/en)

The production label in LensVisualizer should consequently be read as a correlation target: the architecture, nominal aperture,
and 50 mm scale align with documented Contax Sonnar production, while exact postwar Zeiss-Opton prescription continuity remains
unconfirmed by the available manufacturer material.

## Sources

- Ludwig Bertele, **US 2,186,621, “Lens System”**, granted January 9, 1940. Figure 1 and the first numerical block are the
  prescription source. <https://patents.google.com/patent/US2186621A/en>
- Ludwig Bertele, **US 1,975,678 A, “Objective”**, cited by US 2,186,621 as the prior-art antecedent and used only to
  corroborate the iris interval. <https://patents.google.com/patent/US1975678A/en>
- ZEISS, **“Lenses Make History.”** Manufacturer history for Sonnar / Contax context.
  <https://lenspire.zeiss.com/photo/en/article/lenses-make-history>
- Zeiss Ikon AG, **“The Interchangeable Contax Lenses.”** Archival manufacturer literature listing the Sonnar f/1.5,
  2 in / 50 mm. <https://www.pacificrimcamera.com/rl/02363/02363.pdf>
- Carl Zeiss, Inc., **“Contax 35mm Cameras and Accessories Price List,”** effective February 15, 1956. Manufacturer
  literature listing the Sonnar f/1.5 50 mm as seven elements with a 3 ft closest distance. <https://www.pacificrimcamera.com/rl/02153/02153.pdf>
- Leica Lens List, **“Carl Zeiss Opton Sonnar 50mm f/1.5.”** Secondary Opton-specific corroboration for period, mount,
  approximate 0.9 m minimum focus, and body focusing. <https://leicalenslist.com/lenses/carl-zeiss-opton-sonnar-50mm-f15>
- Pacific Rim Camera, **“50/1.5 Zeiss Sonnar for Contax.”** Secondary historical reference stating that the 1950
  Zeiss-Opton version used a new optical design; used only as a caution against assuming prescription continuity.
  <https://www.pacificrimcamera.com/pp/zicontax50f15.htm>
- SCHOTT, OHARA, HIKARI/Nikon, CDGM, HOYA, and SUMITA current optical-glass catalogs, consulted for coordinate comparison;
  no catalog row is treated as proof of the historical supplier or melt.
