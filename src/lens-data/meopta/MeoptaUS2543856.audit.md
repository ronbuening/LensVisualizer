# MEOPTA 100mm f/1.8 (US 2,543,856 Design) — Audit

## Source

US 2,543,856 A, Example 1, published 6 March 1951. The patent gives three numerical examples at f = 100 mm. Example 1 specifies 1:1.8; Figure 1 shows the shared construction and Figure 2 plots Example 1's corrections. The application was filed on 20 July 1948 with Czechoslovak priority dated 4 August 1947.

The page prints František Kupka and the assignee “Meopta, spojene zavody pro jemnou mechaniku a optiku, narodni podnik”. The assignee's words are printed without Czech diacritics, and that spelling is retained.

## Transcription

Two independent readings of the page images agree on all nine radii, five element thicknesses, four air separations, five sodium-D indices and five Abbe numbers. No prescription mismatch was found. The apparent “8” at r4 denotes infinity: the surface is flat, its printed Petzval term is zero, and the claim permits an infinite cemented radius.

Elements 2 and 3 share the flat r4 cemented interface. The 0.1 mm front air gap and the r7-to-r8 separation split of 9.4/15.6 mm are printed. Figure 1's dashed plane is treated as the stop, although the prose does not explicitly name a diaphragm. All curved surfaces are spherical.

## First-Order and Aberration Results

The sodium-D effective focal length is 99.99784759 mm against the stated 100 mm. The paraxial back focus is 52.31996624 mm, equal to the stored image distance. The vertex track is 66.8 mm. The Petzval sum multiplied by 100 mm is 0.50162310, reproducing the printed 0.5016.

At the printed incident heights 19.45/24.06/27.78 mm, calculated sodium-D longitudinal spherical aberration is −0.33234/−0.23953/+0.13928 mm against −0.327/−0.241/+0.148 mm. The maximum discrepancy is 0.00872 mm. A calculation using the printed Abbe numbers gives F−C axial colour about −0.404 mm against the printed −0.345 mm, probably because the designer used more detailed glass data. No index or Abbe number is changed to fit that result.

## Quantities Not Printed

The patent gives no clear semi-diameters, iris diameter, back focus, field angle, image format, minimum focus distance or close-focus prescription. The model's rims are estimates; its final gap is the paraxial back focus. The ±10° field is illustrative. The distant close-focus bound denotes an infinity-only model.

## Product Identification

No production lens is documented as using Example 1. The patent states a cinematographic application, but the available Meopta Openar information supplies no construction that establishes a match. The name therefore identifies the patent design.

## Corrections

The initial model used f/1.7536447904353865 to obtain a 16.73485790 mm stop radius from the patent's h = 27.78 mm axial ray. Independent tracing gave an entrance-equivalent f/1.79982 for that ray, but the first-order aperture differed from the printed 1:1.8. The model now uses the printed nominal f/1.8 with an inferred stop radius of 16.30388687 mm. The printed ray-height aberration comparisons remain valid independently of this aperture choice.

## Remaining Questions

Open: Figure 1 suggests semi-diameters near 28.2 mm for element 1, 27.2 mm for the cemented group, 26 mm at r6, 19.9 mm at r7 and 16.8 mm for element 5. The present values are 32/32, 30/27/27, 24/21 and 22/22 mm respectively. These rim differences remain unresolved. The historical glass melts and the axial-colour discrepancy are also unresolved; no production lens or close-focus motion is established.

## 2026-11-21 — Deployment validation and cleanup

Two independent readings checked the radii, thicknesses, air separations, sodium-D indices, Abbe numbers, flat cemented interface, dashed stop plane and printed aberration tables against the page images. The prescription is valid with the aperture convention corrected; there is no documented product match.

- Identity: key `kupka-us2543856-example1-infinity-reference` → `meopta-100mm-f18-us2543856`; inventor-and-example title → `MEOPTA 100mm f/1.8 (US 2,543,856 Design)`; maker null → Meopta; visibility false → true.
- Source: `US 2,543,856` → `US 2,543,856 A`; publication year absent → 1951; assignee Meopta → the full printed name above. František Kupka and Example 1 remain as printed.
- Aperture: nominal f/1.7536447904353865 → f/1.8; the stop series now begins at 1.8. Inferred stop radius 16.73485790 → 16.30388687 mm. Radii, spacings, source indices, Abbe numbers, rim sizes, stop station and image plane are unchanged.
- Glass: elements 3 and 4, unnamed → `SF1 (Schott)`, resolving to Schott SF1. At the D line, catalogue-minus-source Δn = −0.0000012 and Δν = −0.0959 (catalogue νD 29.5041; its listed helium-d Abbe number is 29.51). Elements 1/2 → `Unmatched (nD 1.65981 / ν 50.3)`; element 5 → `Unmatched (nD 1.61216 / ν 58)` because no exact catalogue rows match those pairs. Historical suppliers remain unknown.
- Elements: generic spherical type labels → Positive Meniscus / Plano-Convex Positive / Plano-Concave Negative / Biconcave Negative / Biconvex Positive; L1–L5 display labels → Element 1–5. Optical roles and individual focal lengths +163.03/+68.96/−278.88/−41.69/+72.37 mm are added. Elements 2 and 3 now share C1, with a matching cemented-group annotation.
- Text and scope: subtitle → `US 2,543,856 A, Example 1 — five-element cinema objective`; descriptive specifications → `5 ELEMENTS / 4 GROUPS`, `ALL SPHERICAL`, `DESIGN F/1.8`, `CINEMA OBJECTIVE`. Focus description → “Infinity focus only; the patent gives no close-focus data.” The infinity bound remains 1e15 m. Image circle 35.40431999587676 mm → omitted because the patent states no field or format. The ±10° illustrative field is retained. The header, analysis and audit now describe source facts, optical behavior and remaining uncertainties in plain language.
- File form: incorrect type-import path → the shared lens-data type; the constant and default export now use `LENS_DATA`. No prescription value is corrected away from the patent, so no source erratum is introduced.

The resulting EFL is 99.99784759 mm, nominal f-number 1.8, back focus 52.31996624 mm and vertex track 66.8 mm. EFL and back focus equal their previous values; the previous nominal f-number was 1.7536447904353865. Surface geometry has no errors. Aperture checks find no rim limit, trace limit or iris discrepancy. Image-circle and format-coverage checks skip the file because it claims no format or image circle. Against an illustrative 35.40432 mm image diameter, the same prescription has no undersized surface, reaches 100% field coverage and clears the 10° chief ray. That diameter is a calculation target, not a patent or product specification.

Open: the figure-rim differences and unknown historical glasses remain as described above. The printed axial-colour result is not reproduced from the Abbe numbers alone. No measured field, production attribution or close-focus behavior is established.
