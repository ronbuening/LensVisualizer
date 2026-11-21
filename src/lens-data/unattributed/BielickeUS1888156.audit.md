# BIELICKE 100mm f/2.5 (US 1,888,156 Design) — Audit

## Source

US 1,888,156 A, _Objective Lens System_, patented November 15, 1932; filed March 3, 1932, with a German application dated January 22, 1931. The front page prints "Willy F. Bielicke"; the catalog uses "William F. Bielicke", consistent with his earlier US 1,540,752 entry. No assignee is printed.

The same invention was filed in Britain and Germany as GB 375,723 A and DE 634,843 C. The later design expressly improves the inventor's earlier four-singlet US 1,540,752 construction.

## Transcription

Two independent readings of the page images agree on all nine signed radii, eight internal thicknesses and air spaces, five D-line indices, five G-line indices, and five Abbe numbers. The drawing-sheet and specification tables agree. R2 is plane and only R6 is cemented, joining elements 3 and 4. The inserted stop preserves the printed 9.2 mm gap as 5.4 + 3.8 mm. No numerical prescription correction is needed.

The printed G-line indices are 1.6741, 1.7015, 1.5998, 1.6741 and 1.6732 for elements 1–5. They are preserved in the analysis with their source designation; no wavelength is assumed for G.

## First-order

The patent states 100 mm and f/2.5. The D-line prescription computes to EFL 99.9015578114 mm and paraxial BFD 78.2750039767 mm, which is the saved final gap. The EFL differs from the printed nominal value by −0.09844%. The first-to-last vertex distance is 48.1 mm and the first-vertex-to-image distance is 126.3750039767 mm.

The nominal aperture is f/2.5 at an inferred stop radius of 15.2689996963 mm. Finite entrance-equivalent and image-sine f-numbers are 2.5830418583 and 2.5843090041. A finite entrance-equivalent f/2.5 would require radius 15.8199450865 mm; neither bore is a printed dimension. The retained aperture is limited by the iris, with no axial rim obstruction.

## Not printed

The stop position, stop bore, all semi-diameters, back focus, displayed ±10° field and f-stop list are model additions. The stop lies 26.4 mm after the first vertex, between R4 and R5, about 1 mm beyond the R4 rim sag. The image plane is the calculated paraxial infinity plane. No field angle, image format, image circle, close-focus data or focusing mechanism is given.

The inferred blanks retain positive glass edge thickness and air clearance. The minimum glass edge thickness is about 0.381 mm; the common-rim thickness of element 4 is about 0.711 mm. The largest air-gap sag consumption is about 57.45% of its axial gap, and no glass crosses the stop plane. Off-axis front-element vignetting remains at the displayed field.

## Product

Bielicke co-founded Astro-Gesellschaft in Berlin, but the patent is unassigned and no production lens is documented for this prescription. Astro product names and element counts alone do not establish a match; maker remains null. Historical sources are linked in the analysis.

## Corrections

The radii, internal distances, D-line indices, Abbe numbers, stop position, image plane and all clear rims remain as transcribed. The public description distinguishes printed values from inferred aperture, field and image-plane values. Printed G indices, previously omitted from the analysis, are now retained there.

## Remaining questions

Open: the drawing suggests smaller semi-diameters at R1/R2 (about 21.1 mm rather than 23 mm), R3 (about 18.8 mm rather than 22 mm), and R8/R9 (about 21.3 mm rather than 22 mm). At R1/R2 the present edge is about 0.38 mm thick, compared with about 1.5 mm in the drawing. Smaller drawn rims retain the axial beam but increase vignetting at 10° from about 4% to 15%; the modeled rims remain unchanged. The historical glass identities, exact stop dimensions, G-line wavelength and any production association remain unresolved.

## 2026-11-21 — Deployment validation and cleanup

Two independent readings of the page images found no mismatch in the prescription, its signs, spacings, D-line indices or Abbe numbers; the G-line indices were missing from the analysis. The design is valid with inferred aperture and rim dimensions, and no documented production link.

- Import path: `../repo/src/types/lensDataV2.js` → `../../types/lensDataV2.js`; constant and default export: `data` → `LENS_DATA`. A source-and-assumptions header replaces the missing header.
- Key: `bielicke-us1888156-infinity-reference` → `bielicke-100mm-f25-us1888156`; name: the inventor-and-aperture title → `BIELICKE 100mm f/2.5 (US 1,888,156 Design)`; visibility: false → true. Maker remains null and assignees remain empty.
- Patent number: `US 1,888,156` → `US 1,888,156 A`; author: `Willy F. Bielicke` → `William F. Bielicke` for catalog consistency, retaining the printed spelling above. The sole-example designation and 1932 date remain unchanged.
- Subtitle: the compressed aperture-and-rim description → `US 1,888,156 A, sole example — cemented collective group`. Seven long specification entries → `5 ELEMENTS / 4 GROUPS`, `ALL SPHERICAL`, `DESIGN F/2.5`.
- Design focal length: 100 → 99.90 mm, the computed EFL rounded to two decimals. Design f/2.5 and the five-element/four-group counts remain unchanged; no mount, format or image circle is added.
- Element labels: L1–L5 → Element 1–Element 5. Generic shape descriptions → Plano-Convex Positive, Biconcave Negative, Biconcave Negative, Biconvex Positive, Biconvex Positive. Optical roles and in-air focal lengths are added: +64.13, −38.09, −53.60, +34.19 and +194.57 mm.
- Cemented identifiers on elements 3 and 4: D1 → C1; the C1 annotation spans surfaces 5–7. The third group label gains spacing between its element names.
- Glass descriptions: the common long unmatched description → `Unmatched (nD … / ν …)` for each printed pair: 1/4 = 1.6580 / 51.4; 2 = 1.6741 / 32.0; 3 = 1.5821 / 42.0; 5 = 1.6513 / 38.3. Relabeling changes neither coordinate: ΔnD = 0 and Δν = 0 for every element. All retain D-line reference and no anomalous-dispersion tag is added.
- Focus distance: the expanded decimal → `1e15`, numerically unchanged. The long description → `Infinity focus only; the patent gives no close-focus data.`
- The analysis now has the four source metadata rows and sections on identification, architecture, individual elements, glass, focus, model limits and sources. It includes all five printed G indices, the earlier design and the British and German filings. Unrelated calculations and procedural text are removed from both companion documents.

All four distinct unmatched glass labels remain unresolved by the catalog. Modern Sumita LF3 evaluates to nD 1.58202924 and νD 42.02134, giving ΔnD = −0.00007076 and ΔνD = +0.02134 against element 3. This close modern coordinate pair does not identify the 1932 material; the printed pair remains labeled Unmatched. The other source pairs have no catalog curve matching both coordinates closely enough for the prescribed label criteria.

Before → after: EFL 99.9015578114 → 99.9015578114 mm; nominal f/2.5 → f/2.5; paraxial BFD 78.2750039767 → 78.2750039767 mm. Stop radius 15.2689996963 mm, selected half-field 10°, and image-plane position are unchanged. Element powers and the +82.82 mm cemented-group power agree with the analysis.

The surface audit reports no errors. The aperture audit reports the single station within 3% of the stated f-number, with no rim, trace, iris or failed-station limits. The image-circle and field-coverage checks each skip the lens because no image format or image circle is given, including with visibility true. An exact meridional check at 10° reaches image height 17.584 mm with no axial rim obstruction or blocked chief ray; marginal off-axis vignetting remains. This is an illustrative field, not a patent coverage claim.

Open: the figure/rim differences listed above, historical glass identity, the unprinted physical iris dimensions and field, the G-line wavelength, and a production-prescription link.
