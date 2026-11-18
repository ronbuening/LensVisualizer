# Rudolph Quadruple Single Objective f/12.5 — US 1,021,337 Fig. 1

## Patent Reference and Design Identification

**Patent:** US 1,021,337, *Quadruple-Lens Objective*  
**Application Number:** Serial No. 585,229  
**Filed:** October 4, 1910  
**Granted:** March 26, 1912  
**Inventor:** Paul Rudolph  
**Assignee:** The firm of Carl Zeiss, Jena (recorded as Carl-Zeiss-Stiftung)  
**Example details:** the patent's only numerical example, drawn in Fig. 1; two tables on the text page (radii, distance and thicknesses; kinds of glass), given for focal length 100

The patent describes a single objective of four lenses cemented together, used behind a front diaphragm at a relative aperture of 1:12.5. Fig. 2 shows two such objectives placed either side of a diaphragm as a double objective; the patent gives no separate numbers for it, and it is not modelled here.

The patent states its own lineage. It is an improvement of the four-lens cemented single objective of US 532,398, which Rudolph designed in 1895 and which, in the patent's words, the firm had supplied since then as Series VII, the Protar lens 1:12.5. The improvement is one of glass choice: the third lens is given an index of at least 1.57, where the earlier construction used 1.51.

How far this table reached production is not established:

1. The layout matches the Series VII Protar lens in every stated respect: four cemented lenses in one group, a front diaphragm, 1:12.5. Period references describe the single Series VII lenses as f/12.5 covering about 85°, and a later description of a Ross-built Protar gives f/12.5 for a single cell and about 80° coverage.
2. The assignee is the maker of that lens, and the patent presents the design as a replacement for the construction then on sale.
3. No source found says that the Series VII lens was recomputed to this table, and the patent does not name a product for the new form.

The model is therefore a patent example in the Series VII Protar lens family, kept at the patent's scale and not presented as a production lens.

## Optical Architecture

The objective is a single cemented group of four lenses, a thick meniscus overall with its concave side toward the diaphragm. Light meets the diaphragm first, 2.34 ahead of the front vertex, then five spherical surfaces. Only the first and last surfaces meet air.

The three cemented surfaces are described in the patent by their direction and effect:

- the front one (r2 = +44.2) is convex toward the front and collective;
- the middle one (r3 = −9.3) is concave toward the front and collective;
- the rear one (r4 = −6.6) is concave toward the front and dispersive.

Computed from the printed table at the D line, the focal length is 99.00 and the back focus from the last vertex is 109.17, so the image lies 115.85 behind the diaphragm. The patent states "focal length 100". The difference of 1.0 % is within the rounding of the table: the radii are printed to 0.1, and a change of 0.05 in r1 alone moves the focal length by about 1.5, in r5 by about 1.9. Several single-digit changes would each bring the result to 100, so the table gives no reason to single out a misprint, and every printed value is kept.

On axis the printed design is under-corrected for spherical aberration: the f/12.5 marginal ray crosses the axis 1.31 short of the paraxial focus, and the ray at 0.85 of the aperture 1.52 short. The patent itself speaks of "diminishing the spherical zones" as one use of the new glass, not of removing them.

## Element-by-Element Analysis

The patent prints no Abbe numbers, so each element is listed with its D-line index and its second printed index, nG′ (the hydrogen line at 434 nm). Focal lengths are for each lens alone in air.

### L1 / Lens I — Biconcave

`nD = 1.4979, nG′ = 1.5074.` Glass: not named. `f = −18.9.`

The front lens has a concave front surface (r1 = −12.0) facing the diaphragm and a weak cemented rear surface. The claims require its index to be below 1.52. Against the high-index second lens, the index step at r2 makes that cemented surface collective.

### L2 / Lens II — Biconvex

`nD = 1.6227, nG′ = 1.6308 (as printed; see below).` Glass: not named. `f = +12.49.`

This is the strongest lens and supplies the positive power of the group. Its steep rear surface (r3 = −9.3) is cemented to the third lens; because the index falls from 1.6227 to 1.5813 across it, the surface is collective, as the patent states.

### L3 / Lens III — Positive Meniscus

`nD = 1.5813, nG′ = 1.5952.` Glass: not named. `f = +32.48.`

This is the lens the patent is about. Raising its index from the 1.51 of the earlier construction to at least 1.57 is said to allow higher speed, smaller spherical zones or better removal of astigmatism, and to flatten the curves so that the lens is easier to make.

### L4 / Lens IV — Negative Meniscus

`nD = 1.6275, nG′ = 1.6487.` Glass: not named. `f = −21.53.`

The rear lens is dispersive, with a convex rear surface (r5 = −13.4). The claims require an index of at least 1.58. The index rises from 1.5813 to 1.6275 across r4, which makes that cemented surface dispersive; with the highest dispersion of the four glasses it carries the colour correction.

## Glass Identification and Selection

The patent characterises each glass by two indices, nD and nG′, and gives no Abbe numbers and no glass names. The model uses the D-line indices alone, so it shows no colour error; nothing has been assumed about dispersion.

| Lens | nD | nG′ (printed) | nG′ − nD |
|---|---|---|---|
| I | 1.4979 | 1.5074 | 0.0095 |
| II | 1.6227 | 1.6308 | 0.0081 |
| III | 1.5813 | 1.5952 | 0.0139 |
| IV | 1.6275 | 1.6487 | 0.0212 |

The nG′ printed for lens II is probably a misprint. A difference of 0.0081 would make a glass of index 1.62 less dispersive than the 1.50 crown of lens I, which no glass of the period was. Traced with the printed nG′ column, the focal length for that line is 107.67 and the back focus 119.05, almost 10 longer than at the D line, although the patent says the objective is chromatically corrected. With a value near 1.637 for lens II the two lines focus together (1.6368 gives a back focus of 109.93, 1.6378 gives 108.54, against 109.17 at D). The intended figure cannot be fixed more closely than that from the patent alone. Since the model does not use nG′, nothing in the data file depends on it.

## Focus Mechanism

The patent says nothing about focusing, and a single objective of this kind was focused by moving the whole lens. The model is given for an infinitely distant object only. The image plane is the computed paraxial back focus, 109.1747 behind the last vertex; the patent prints no back focus.

## Model Notes and Verification

- **Printed and copied exactly:** five radii with their signs, four thicknesses, the diaphragm distance b, four D-line indices, the relative aperture 1:12.5.
- **Inferred:** the back focus (computed); the clear semi-diameters, all 4.5, chosen to pass the f/12.5 axial beam (the marginal ray reaches 4.41 at the last surface); the 5° trace field. The patent states no field and no diameters, and Fig. 1 is not drawn to scale (the diaphragm distance scales to about 1.4 against the printed 2.34).
- **Limit on the diameters:** the second lens reaches zero edge thickness at a semi-diameter of about 5.1, so the printed thicknesses themselves cap the clear aperture a little above the present value.
- **Field:** the 5° half-field is a display setting, far inside the roughly 80–85° total coverage reported for the Series VII lens. Off-axis performance of the model has not been assessed.

## Sources

- US 1,021,337, both pages (drawing sheet and specification), read from page images.
- US 532,398 (Paul Rudolph, 1895), the earlier four-lens single objective named in the patent.
- *Encyclopædia Britannica*, 11th ed. (1911), "Photography", on the Zeiss Protar series: single Series VII lenses, f/12.5, about 85°.
- Apenas Imagens, "Zeiss Protar Convertible Anastigmat | Ross London", https://apenasimagens.com/en/zeiss-protar-convertible-anastigmat-ross-london-en/ (single cell f/12.5, 80° coverage, diagram from the Lens Collector's Vade Mecum).
