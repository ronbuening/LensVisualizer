# BERTELE 100mm f/1.44 (US 2,600,610 Design) — Audit

## Source

US 2,600,610 A, Example I, Table I and Figure 1. The patent was filed on 15 April 1950, claims Swiss priority of 11 May 1949, and was published on 17 June 1952. The front page prints “Ludwig J. Bertele, Heerbrugg, Switzerland”; the catalogue uses the established form Ludwig Bertele. No assignee is printed.

## Transcription

Two independent readings of the patent page images agree on every signed radius, seven glass thicknesses, two air spaces and seven refractive-index/Abbe pairs. R7 is explicitly plane. The arrangement is seven elements in three groups, with cemented interfaces at R4/R5 and R8/R9. The patent contains four numerical examples; this prescription is Example I.

The text and claims name the d-line, so all seven elements retain helium-d indices despite the table's capital-D subscript. The prose gives L6−L7 = 0.056 and n1+n2 = 3.38; Table I gives 0.0594 and 3.3859. The tabulated values hold.

## First-order properties

The stated 100 mm focal length computes to 99.965654825 mm, a −0.03435% difference. Paraxial back focus is 43.697807592 mm; no numerical back focus is printed. The first-to-last vertex distance is 75.45 mm and total track to the image plane is 119.147807592 mm. The paraxial aperture is f/1.44, with stop radius 19.116952019 mm. The real-ray entrance aperture is about f/1.48 and the image-space sine aperture about f/1.47.

## Values not printed

The exact stop position, diaphragm opening, clear semi-diameters and final image distance are inferred or computed. The 14.3/0.6 mm stop split preserves the printed 14.9 mm gap and agrees approximately with Figure 1. The model supplies only an infinity state. No lens mount, camera format, close-focus distance, supplier identity or measured spectral performance is established.

## Product evidence

The 1|3|3 arrangement and increased front-element indices place this design in the development of Bertele's Sonnar f/1.5, US 1,975,678. No source documents Example I as a production lens.

## Corrections

The numerical prescription is retained. The field setting now follows the printed 45° full field, and the rear rims approach Figure 1 within the surface-slope limit. The rounded design focal length records the computed EFL rather than the nominal label. Source identification, element descriptions, glass labels and focus wording use the catalogue's file form.

## Remaining questions

Open: the front clear semi-diameters are estimates and differ from Figure 1, whose R1/R2 heights are about 36.4 mm and R3–R5 about 32 mm. R9 is about 21 mm in the drawing but remains 20.16 mm to pass the surface-slope limit. Exact diaphragm dimensions, historical glasses and any production identity remain unknown.

## 2026-11-21 — Deployment validation and cleanup

Two independent re-readings of the page images found no numerical transcription errors; the prescription is valid with notes on the field, inferred rims and prose slips. The earlier Sonnar patent supports a design-family relationship, with no documented production match.

Changes:

- Identity: `bertele-us2600610-example1-infinity-reference` → `bertele-100mm-f144-us2600610`; name combining an unformatted patent number and aperture → “BERTELE 100mm f/1.44 (US 2,600,610 Design)”; `visible` false → true. Maker remains null, author remains Ludwig Bertele and assignees remain empty.
- Source: “US 2,600,610” → “US 2,600,610 A”; Example I, id 1 and year 1952 retained. Rim provenance “heuristic” → omitted because front estimates and rear figure measurements are mixed.
- File form: the type import now points to `../../types/lensDataV2.js`; the exported constant is `LENS_DATA`, with one source-and-assumptions header.
- Subtitle: compressed element-count and iris description → “US 2,600,610 A, Example I — Sonnar-type development”. Five run-together specification paragraphs → “7 ELEMENTS / 3 GROUPS”, “ALL SPHERICAL”, “DESIGN F/1.44”.
- Catalogue: design focal length 100 → 99.97 mm; image circle absent → 85.27 mm, from twice the real 22.5° chief-ray height, 42.634934752 mm. Counts 7/3 and design f/1.44 retained.
- Field: full field 10° → 45°; maximum trace half-field 5° → 22.5°.
- Rear semi-diameters, in mm: R6 20.8 → 21.2; R7/R8 22 → 21; R9 19.7 → 20.16; R10 20 → 26.5. Front rims, radii, thicknesses, refractive indices, Abbe numbers, stop position and image plane retained. R9 at 21 mm gives a 69.6° rim angle and fails the 64.2° surface-slope limit; 20.16 mm passes without changing that limit.
- Elements: generic spherical descriptions → the seven shapes and optical roles listed in the analysis; L1–L7 labels → Element 1–7. Individual focal lengths added: +127.74, +90.08, +147.73, −32.29, −112.42, +26.80 and −48.33 mm. Cemented ids G2/G3 → C1/C2 on all members, with one annotation spanning each triplet.
- Glass: the seven unnamed descriptions → Unmatched labels for elements 1–4, 6 and 7, and KF8 (Sumita) for element 5. The KF8 row resolves to Sumita at nd 1.51118 / ν 50.9, Δn = −0.00002 / Δν = 0.0. BAF11 differs from element 6 by Δn = +0.00012 / Δν = 0.0; Schott N-SK2 differs from element 7 by +0.00018 / −0.05; the FK5 label resolves to Sumita at Δn = −0.00001 / Δν = +0.4 for element 3. Those alternatives are not assigned. Redundant index-line notes removed; d-line references retained.
- Focus: the long description → “Infinity focus only; the patent gives no close-focus data.” The close-focus placeholder remains 1e15 m. Analysis and audit now describe source facts, assumptions, optical properties and unresolved questions; obsolete calculation and process text removed.

The resulting EFL 99.965654825 mm, paraxial f/1.44, back focus 43.697807592 mm and stop radius 19.116952019 mm equal the preceding values. The surface check reports no errors. The aperture check reports no rim limit, iris mismatch, trace limit or failure. Image-circle coverage reports one lens checked, zero undersized and zero skipped. Field coverage is 100% at 22.5°, reaching 42.63 mm image height with a clear chief ray; zero stations are unsolved.

At 22.5°, geometric transmission over the diaphragm opening is 24.5% → 41.3%. Open: front-rim correspondence, the remaining R9 difference from Figure 1, historical glass identity, exact iris dimensions and production attribution.
