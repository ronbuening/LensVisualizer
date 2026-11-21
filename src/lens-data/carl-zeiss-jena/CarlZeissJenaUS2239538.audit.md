# US 2,239,538 A — Figure 2 audit

## Source

US 2,239,538 A, “Photographic Teleobjective,” Robert Richter; published 22 April 1941, filed 8 March 1940, with German priority of 30 March 1939. The front page says “assignor to the firm Carl Zeiss, Jena, Germany”; the canonical assignee is Carl-Zeiss-Stiftung.

The patent has two numerical examples. Figure 2 and its table are on drawing sheet 2, repeated on the first specification page. Sources: [patent text](https://patents.google.com/patent/US2239538A/en) and [original facsimile](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/2239538).

## Transcription

Two independent readings of the page images agree on all eight radii and signs, four thicknesses, four nd/ν pairs, the two 0.07 mm air gaps, the plane surface 7 and the 14.23 / 16.14 mm stop split. No numerical mismatch was found. The four singlets remain separate; no cemented interface is present.

Lowercase nd is printed. Elements 1 and 3 both have nd 1.60801, with ν 45.0 and 46.2 respectively, in both occurrences of the table. These distinct dispersions are retained. No aspherical terms or variable gaps are printed.

## First-order Values

The patent states f = 100, an aperture ratio of 1:6.3 and an image field of about 30°. At the model's millimetre dimensions the calculated EFL is 100.026930512 mm, paraxial BFD 41.599493784 mm, and lens track 37.79 mm.

The printed front-vertex-to-focus distance is 79.37, not a rear-vertex back focus. The last gap is 79.37 − 37.79 = 41.58 mm; the printed image plane is 0.019493784 mm ahead of the paraxial image. It remains unshifted.

The nominal aperture gives an iris radius of 5.431318527 mm and paraxial f/6.30. An exact marginal-ray calculation gives an entrance-equivalent aperture of f/6.405609; admitting the nominal entrance ray would require a 5.525869773 mm iris radius. The drawn opening is approximately 5.5 mm. No change to the printed stop station follows from the estimated opening.

## Values Not Printed

The clear semi-diameters of 8.7 / 9.0 / 9.5 mm and the physical iris size are inferred. The last gap is derived from the printed total image distance. The stop station itself is printed, at z = 18.71 mm. The patent gives no close-focus data, supplier or melt identity, partial dispersion, or film format.

The initial model used a 20° full field despite the stated approximately 30° field. The 15° chief ray clears the existing rims and reaches approximately 27.096 mm image height, supporting a 54.192 mm image circle at this focal length.

## Product Relationship

Zeiss Telikon aerial telephotos are a plausible family comparison because of their f/6.3 aperture and roughly 30° field. The [recorded 75 cm Telikon](https://nmestateauctions.com/Event/LotDetails/26660102/Carl-Zeiss-Jena-75cm-f6-Telikon-Lens-for-RB7530-Aerial-Camera-WWIIEra) is engraved 1:6.3 and associated with the Rb 75/30 camera. No construction or source ties it to this patent; no product identification is established.

## Corrections and Remaining Questions

The prescription requires no numerical correction. Its close air gaps widen toward the edges, and no glass reaches the stop plane. Minimum edge thicknesses are approximately 0.375 mm at element 1 and 0.481 mm at element 4. The clear rims agree with the figure within about 0.4 mm and remain inferred.

Open: compare the optical rims with Figure 2 in a future semi-diameter review. The historical glasses of elements 1 and 3 remain unidentified, as do the supplier and melt of the SF10-coordinate media. A product connection remains undocumented.

## 2026-11-21 — Deployment validation and cleanup

The two independent page-image readings checked the full Figure 2 table, radius signs, gaps, indices, dispersion values, plane surface, stop station, image-distance statement, dates and parties. The transcription is sound. The Telikon comparison supports a possible family context only.

Changes:

- Identity: `richter-us2239538-figure2-infinity-reference` → `carl-zeiss-jena-100mm-f63-us2239538`; maker null → Carl Zeiss Jena; the Richter/Figure 2 title → “CARL ZEISS JENA 100mm f/6.3 (US 2,239,538 Design)”; visibility false → true.
- Source: US 2,239,538 → US 2,239,538 A; Firm Carl Zeiss, Jena → Carl-Zeiss-Stiftung. Robert Richter, 1941 and Figure 2 remain unchanged.
- Public text: the long subtitle → “US 2,239,538 A, Figure 2 — four-element telephoto design”; nine specification lines → “4 ELEMENTS / 4 GROUPS,” “ALL SPHERICAL,” “DESIGN F/6.3,” and “TELEPHOTO.” The focus description → “Infinity focus only; the patent gives no close-focus data.” The existing 10¹⁵ m placeholder remains.
- Field: 20° / ±10° → 30° / ±15°; image circle 35.274893293 mm → 54.192 mm, twice the real 15° chief-ray height. Design focal-length metadata 100 → 100.03 mm, the calculated EFL rounded to two decimals.
- Elements: generic spherical types → Biconvex Positive, Biconcave Negative, Negative Meniscus and Plano-Convex Positive. Labels L1–L4 → Element 1–4; optical roles and focal lengths +23.18 / −35.08 / −26.43 / +45.56 mm were added. Group captions now describe their optical powers.
- Glass labels: element 1's long unmatched label → “Unmatched (nd 1.60801 / ν 45.0).” Elements 2 and 4 → SF10 (Schott), with catalogue-minus-patent Δnd = 0 and Δν = +0.11. Element 3 → H-BaF6 (CDGM), whose tabulated Δnd = 0 and Δν = 0; its dispersion curve evaluates to approximately nd 1.608015 and νd 46.22. The same row is rejected for element 1 because Δν = +1.2. These are catalogue-coordinate assignments, without a historical supplier claim. No anomalous-dispersion tags were added.
- File form: corrected the type import to `../../types/lensDataV2.js`, added one source header, and named the exported constant `LENS_DATA`. Analysis and audit text now describe source attribution, architecture, glass assignments, focus, field coverage and product uncertainty.

Before and after, EFL = 100.026930512 mm, nominal aperture = f/6.30, paraxial BFD = 41.599493784 mm, iris radius = 5.431318527 mm, lens track = 37.79 mm and stored image distance = 79.37 mm. Only the declared half-field changes from 10° to 15°; all radii, spacings, indices, Abbe numbers, rims and the image plane remain unchanged.

Surface geometry has no errors. Aperture clearance has no rim limit and remains within 3% of the stated f-number, with no trace, iris or failed cases. Image-circle clearance finds zero undersized surfaces and skips none. Field coverage is 100% at 15.0°, reaching 27.10 mm of the 27.10 mm image radius, with a clear corner and no unsolved station.

Open: the figure-based rim review, historical glass identities and product connection remain unresolved. No mount, film format or commercial close-focus distance is inferred.
