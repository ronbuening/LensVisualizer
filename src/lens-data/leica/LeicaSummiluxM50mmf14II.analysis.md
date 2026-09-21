# LEICA SUMMILUX-M 50mm f/1.4 II — Optical Analysis

## Patent Reference and Design Identification

**Patent:** US 3,291,553\
**Application Number:** US 234,657\
**Filed:** November 1, 1962\
**Priority:** November 4, 1961 (Germany)\
**Granted:** December 13, 1966\
**Inventor:** Walter Mandler\
**Assignee:** Ernst Leitz GmbH\
**Title:** *Photographic Objective Having Four Lens Members*\
**Embodiment analyzed:** Job-card Example 1 — the patent's sole unnumbered numerical example

The prescription is taken from the numerical table on patent page 2. The patent normalizes focal length to 1.0, gives a relative aperture of 1:1.4, and supplies twelve reciprocal radii, eleven axial thicknesses or spacings, and native e-line refractive-index and Abbe coordinates at 546.07 nm. The figure and accompanying text identify the objective as a Gauss lens with four lens members. [US 3,291,553, p. 2, numerical table and descriptive text.](https://patents.google.com/patent/US3291553A/en)

The production correlation is strong but is not manufacturer confirmation that US 3,291,553 is the production patent:

1. Leica states that its modern reinterpretation is based on the optical calculation of the second Summilux-M 50 f/1.4, which was produced from 1962 to 2004 with very few modifications. The patent was filed in 1962 by Walter Mandler and assigned to Ernst Leitz GmbH
2. The patent prescription contains seven physical glass elements in five air-separated groups. Leica specifies the reinterpretation of the second design as seven lenses in five assemblies.
3. The patent gives relative aperture 1:1.4 and a normalized focal length of 1.0; the implemented model applies a declared uniform 50.0× scale to represent the marketed 50 mm lens.
4. A 1987 Leica system handbook lists the contemporary 50 mm Summilux-M f/1.4 as a Leica M-bayonet lens with seven elements in five components, a 45° angle of view, and focusing from infinity to 1 m. This historical catalog evidence is used for product metadata, not for prescription values.

Leica's current product material does not identify US 3,291,553 by patent number. The patent-to-product association therefore remains a research correlation based on timing, architecture, focal-length/aperture identity, and manufacturer lineage rather than an explicit Leica patent attribution. [Leica, “Summilux-M 50 f/1.4” press material.](https://leica-camera.com/en-US/press/leica-summilux-m-50-f14) [Leica, current technical data.](https://leica-camera.com/en-int/technical-data-summilux-m-50-f14-silver-chrome-finish)

## Optical Architecture

The patent describes a four-member Gauss-type objective. In LensVisualizer terms the prescription is seven elements in five air-separated groups. The four patent members are, from object to image side: a convergent meniscus; a negative member made from two air-spaced lenses; a cemented negative meniscus; and a cemented convergent doublet. The diaphragm lies between the second and third members. [US 3,291,553, p. 2.](https://patents.google.com/patent/US3291553A/en)

Independent first-order calculation from the final data confirms the in-situ member power sequence **positive – negative – negative – positive**. That statement refers to the complete patent members, not to every individual glass element: L2 is positive in isolation but belongs to the negative second member, while L5 is positive in isolation but is cemented to L4 in a net-negative third member. Likewise, L7 is negative in isolation but forms part of the net-positive fourth member.

The source prescription is uniformly scaled by 50.0× in all dimensional quantities. Recomputing the final scaled data gives an effective focal length of **50.00723 mm** and a paraxial back focal distance of **27.62286 mm from the r12 vertex**. The final image spacing in the data file is this computed infinity-focus BFD because the patent does not publish a post-r12 image-plane distance.

All twelve refracting surfaces are spherical. The patent does not provide clear-aperture diameters. The modeled semi-diameters are therefore construction values constrained by the verified f/1.4 ray envelope, edge-thickness and rim-slope limits, cross-gap clearance, and representative off-axis exact traces; they are not patent-published dimensions.

The patent drawing shows the diaphragm within source gap a6 but does not dimension its axial location or diameter. The final model places the stop at **53% of the a6 vertex-to-vertex gap from r6 toward r7**, based on a reinspection of the schematic figure. Its semi-diameter is calibrated so that the implemented paraxial entrance pupil reproduces f/1.4. The resulting f-number agreement is therefore a calibration to a published target, not independent evidence for the manufactured diaphragm diameter.

## Element-by-Element Analysis

The source publishes refractive indices and Abbe numbers in the e-line system. Although the LensVisualizer schema retains these numbers in historical `nd` and `vd` fields, the values below are written correctly as **nₑ** and **νₑ**. The listed focal lengths are standalone thick-element focal lengths with each physical element isolated in air; they are not the in-situ focal lengths of the complete patent members.

### L1 — Positive Meniscus

**nₑ = 1.7919, νₑ = 47.2. Glass: equivalent high-index lanthanum-flint class (S-LAH64 / N-LAF21 / J-LASF014; supplier/melt unproven). Isolated-air f = +69.12 mm.**

L1 is the patent's first member by itself. The patent describes this member as a simple convergent meniscus, and the independently recomputed standalone element power is positive. Its structural role is therefore unambiguous, but the patent does not assign a unique aberration correction function to L1 alone. [US 3,291,553, p. 2.](https://patents.google.com/patent/US3291553A/en)

### L2 — Positive Meniscus

**nₑ = 1.7919, νₑ = 47.2. Glass: equivalent high-index lanthanum-flint class (S-LAH64 / N-LAF21 / J-LASF014; supplier/melt unproven). Isolated-air f = +46.44 mm.**

L2 is the first lens of the patent's second member. In isolation it is positive, but that does not make the second member positive: the patent explicitly defines the L2–L3 air-spaced pair as a negative member, and the final-data subassembly calculation reproduces that negative sign. This distinction between standalone element power and in-situ member power is material for interpreting the design.

### L3 — Negative Meniscus

**nₑ = 1.7685, νₑ = 26.8. Glass: equivalent dense-flint class (S-TIH14 / N-SF14 / J-SF14; supplier/melt unproven). Isolated-air f = −25.41 mm.**

L3 is the second lens of the air-spaced negative member. Its standalone power is strongly negative, and together with L2 it produces the verified net-negative second-member power. The diaphragm follows this lens before the cemented rear members, as shown schematically in the patent figure. [US 3,291,553, pp. 1–2.](https://patents.google.com/patent/US3291553A/en)

### L4 — Negative Meniscus, Front Component of D1

**nₑ = 1.7231, νₑ = 29.3. Glass: equivalent dense-flint class (S-TIH1 / N-SF1 / J-SF1; supplier/melt unproven). Isolated-air f = −33.79 mm.**

L4 begins cemented doublet D1 and is negative as a standalone element. Its rear surface is the cemented interface with L5; in the data model that junction correctly carries the downstream L5 medium and element identity. The pair corresponds to the patent's third member, described as a cemented negative meniscus.

### L5 — Positive Meniscus, Rear Component of D1

**nₑ = 1.7919, νₑ = 47.2. Glass: equivalent high-index lanthanum-flint class (S-LAH64 / N-LAF21 / J-LASF014; supplier/melt unproven). Isolated-air f = +42.74 mm.**

L5 is positive in isolation, but D1 remains negative as a cemented subassembly. The analysis therefore does not assign the sign of L5 to the complete third member. The patent gives the third member's net-negative description directly; the final-data matrix calculation independently reproduces it.

### L6 — Biconvex Positive, Front Component of D2

**nₑ = 1.7479, νₑ = 44.7. Glass: equivalent lanthanum-flint class (S-LAM2 / N-LAF2 / J-LAF2; supplier/melt unproven). Isolated-air f = +17.74 mm.**

L6 is the strongest positive standalone element in the implemented prescription and begins the fourth patent member. It is cemented to L7. The patent calls this final member a convergent doublet; the computed cemented-subassembly power is positive, consistent with that source description.

### L7 — Negative Meniscus, Rear Component of D2

**nₑ = 1.7205, νₑ = 48.0. Glass: equivalent lanthanum-flint class (S-LAM3 / J-LAF3; supplier/melt unproven). Isolated-air f = −31.20 mm.**

L7 is negative in isolation, but its cemented combination with L6 remains net positive. Surface 11 is the L6-to-L7 cemented junction and therefore carries the downstream L7 index and element identity in the data file. L7's rear surface is the final refracting surface of the patent prescription.

## Glass Identification / Selection

The patent does not identify glass manufacturers or melt names. It gives five distinct **native e-line** coordinate pairs, and the data file preserves those coordinates directly rather than converting them to d-line six-digit codes. Catalog research supports class-level equivalents, not supplier identity.

| Model class | Elements | nₑ | νₑ | Coordinate-compatible catalog families | Status |
| --- | --- | ---: | ---: | --- | --- |
| G-A | L1, L2, L5 | 1.7919 | 47.2 | OHARA S-LAH64 / SCHOTT N-LAF21 / HIKARI J-LASF014 | Equivalent class only |
| G-B | L3 | 1.7685 | 26.8 | OHARA S-TIH14 / SCHOTT N-SF14 / HIKARI J-SF14 | Equivalent class only |
| G-C | L4 | 1.7231 | 29.3 | OHARA S-TIH1 / SCHOTT N-SF1 / HIKARI J-SF1 | Equivalent class only |
| G-D | L6 | 1.7479 | 44.7 | OHARA S-LAM2 / SCHOTT N-LAF2 / HIKARI J-LAF2 | Equivalent class only |
| G-E | L7 | 1.7205 | 48.0 | OHARA S-LAM3 / HIKARI J-LAF3 | Equivalent class only |

No `nC`, `nF`, `ng`, or `dPgF` values are source-published for these elements, and the patent does not identify a supplier/melt that would justify importing catalog Sellmeier behavior as exact design data. Accordingly, the model makes no apochromatic or anomalous-partial-dispersion performance claim. The catalog names are coordinate-compatible class labels only.

## Focus Mechanism

The focus status is **NO_INTERNAL_RECONSTRUCTION**. US 3,291,553 supplies one prescription and no focus-spacing table, moving-group law, or second optical state. The data therefore contains no authored focus `var` entries and makes no claim about internal group motion.

The historical `closeFocusM` value of **1.0 m** comes from the May 1987 *Handbook of the LEICA System*, whose 50 mm Summilux-M f/1.4 listing gives a focusing range from infinity to 1 m. The same listing gives seven elements in five components, 45° angle of view, and the Leica M rapid bayonet. [Leica, *Handbook of the LEICA System*, Issue 1, May 1987, catalog p. 5-9; mirrored copy.](https://device.report/m/45d516c2ad4829fd27b4e34e553b14de23968c124d847307b2d3efb4f7e387d8)

Leica's current reinterpretation focuses to 0.7 m, but Leica explicitly describes that as an extension relative to the historical predecessor. The current 0.7 m figure and the modern 12-blade diaphragm are therefore not projected backward into this historical model. [Leica press material.](https://leica-camera.com/en-US/press/leica-summilux-m-50-f14)

## Verification Summary

The final `.data.ts` was reloaded with the dossier's strict literal parser and recomputed from the parsed values rather than from a separate hard-coded prescription. Independent scalar height/reduced-angle propagation and ABCD composition agree within the Stage 2 numerical tolerance. The final model gives **EFL = 50.00723 mm**, **BFD = 27.62286 mm from r12**, and a surface-by-surface Petzval sum of **0.005207316 mm⁻¹** using `φ/(n·n′)` at each refracting surface.

The inferred stop gives a paraxial entrance-pupil semi-diameter of **17.85973 mm** and a modeled f-number of **1.40000**. Because the stop semi-diameter was selected to reproduce the patent's f/1.4 specification, this result verifies internal consistency of the calibrated model rather than an unpublished physical iris measurement.

The semi-diameter set is likewise modeled rather than sourced. Portable checks pass for spherical-domain validity, actual rim slope, edge thickness, shared-band air-gap intrusion, and representative exact Snell traces. The exact-ray checks include the on-axis wide-open pupil, representative rays at ±13.5°, and chief/inward rays at the historical ±22.5° half-field. The model intentionally permits edge-field vignetting rather than claiming an unvignetted 45° full field.

Production LensVisualizer checks remain separate from these chat-side calculations. Real `LensDataInput` type checking, Prettier execution, `buildLens()` / `validateLensData()`, runtime glass resolution, and production render diagnostics were not executed in this dossier and remain integration-pending.

## Sources / References

- Walter Mandler, **US 3,291,553, “Photographic Objective Having Four Lens Members,”** United States Patent Office, granted December 13, 1966. Primary prescription: p. 2 numerical table; optical section: p. 1. https://patents.google.com/patent/US3291553A/en
- Leica Camera AG, **“Leica Summilux-M 50 f/1.4”** press material, describing the reinterpretation as based on the second Summilux-M 50 f/1.4 optical calculation produced from 1962 to 2004. https://leica-camera.com/en-US/press/leica-summilux-m-50-f14
- Leica Camera AG, **“Technical Data — Summilux-M 50 f/1.4,”** current 7/5, 24×36 mm, and Leica M-bayonet specifications. https://leica-camera.com/en-int/technical-data-summilux-m-50-f14-silver-chrome-finish
- Leica / Ernst Leitz, **Handbook of the LEICA System**, Issue 1, May 1987, catalog p. 5-9, historical 50 mm Summilux-M f/1.4 listing; manufacturer-authored literature accessed through a document mirror. https://device.report/m/45d516c2ad4829fd27b4e34e553b14de23968c124d847307b2d3efb4f7e387d8
- OHARA Inc., **Optical Glass Catalog**, native e-line coordinate reference used for class matching. https://oharacorp.com/wp-content/uploads/2023/06/ohara-pocket-catalog-2023-05.pdf
- SCHOTT, **Optical Glass collection datasheets**, native e-line coordinate reference used for class matching. https://media.schott.com/api/public/content/ff189abcb12f498aa221f54fd0b2055c
- HIKARI GLASS CO., LTD., **Optical Glass Catalog**, revision 2025-06-01, native e-line coordinate reference used for class matching. https://www.hikari-g.co.jp/optical_glass/catalog/document/HIKARI_Catalog.pdf
