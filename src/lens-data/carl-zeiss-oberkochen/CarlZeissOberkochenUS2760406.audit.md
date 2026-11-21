# CARL ZEISS 100mm f/2 (US 2,760,406 Design) — Audit

## Source

US 2,760,406 A, Johannes Berger, published August 28, 1956, contains one numerical example and one section drawing. The application was filed July 8, 1953, with German priority of July 24, 1952. The publication names Carl Zeiss, Heidenheim (Brenz); the catalogue uses Carl-Zeiss-Stiftung. CH 314696 is the Swiss counterpart.

## Transcription

Two independent readings of the page images agree on all seven signed radii, six thicknesses and air separations, four refractive indices and four Abbe numbers. The drawing and text agree on four elements in three components, with elements 3 and 4 cemented at R6 and the stop between the second and third components. No numerical-table correction is required. Element 4's printed Abbe number is 49.2, not the 49.3 rounded catalogue value.

## First-order Properties

The unchanged printed prescription gives EFL 100.894744 mm against “about f = 100,” f/2.000, paraxial back focus 69.018475 mm, optical track 70.3 mm and total distance to the image 139.318475 mm. The table states no length unit; its numerical dimensions are represented in millimetres. The approximate focal-length statement accommodates the 0.895% residual. Isolated digit alternatives approaching 100 mm worsen marginal spherical correction and are unsupported by the page image.

## Not Printed

The patent does not tabulate the exact iris station, iris bore, clear semi-diameters or back focus. The diaphragm location is estimated from the drawing; its radius follows the f/2 entrance pupil. The last gap is the computed paraxial back focus. The patent gives no close-focus prescription, film format, mount or measured MTF.

## Product

No production lens is documented. The phrase “intended for small focal lengths” is consistent with a cine application but does not identify a marketed product.

## Corrections

The former ±5° field restriction and its associated MTF convergence figures did not describe the patent's stated field and have been removed. The stated ±14° field is restored, with chief-ray coverage distinguished from full-pupil transmission. The former blanket sodium-D description is replaced by the d-line interpretation supported by the glass coordinates; the printed D wording remains explicitly recorded as unresolved.

## Remaining Questions

The original clear rims are larger than the figure readings, and the rear cemented joint has unequal outer radii. These values remain estimates. The historical glass supplier and melt are not established. The printed D designation conflicts with the d-line coordinates.

## 2026-11-21 — Deployment validation and cleanup

Two independent readings of the page images found no numerical transcription mismatch and confirmed the topology, cemented R6, diaphragm gap, dates and ±14° field. The prescription is accepted with the approximate focal-length statement and inferred dimensions disclosed; no product link is documented.

Changes:

- Import path: ../repo/src/types/lensDataV2.js → ../../types/lensDataV2.js; constant and export: data → LENS_DATA. A single source header now states the units, reference-line discrepancy, inferred stop and rims, and computed image plane.
- Key: berger-us2760406-infinity-reference → carl-zeiss-100mm-f2-us2760406. Name: the former Berger example title → CARL ZEISS 100mm f/2 (US 2,760,406 Design). Maker: null → Carl Zeiss Oberkochen. Visibility: false → true.
- Patent number: US 2,760,406 → US 2,760,406 A. Assignee: Carl Zeiss → Carl-Zeiss-Stiftung. Author Johannes Berger, year 1956 and Sole example identification are retained.
- Subtitle: the former private sodium-D description → “US 2,760,406 A, sole example — three-component f/2 design.” Specs: six long technical notes → “4 ELEMENTS / 3 GROUPS,” “ALL SPHERICAL,” and “DESIGN F/2.”
- Design focal length: 100 → 100.89 mm, the computed EFL rounded to two decimals. Design f-number 2, element count 4 and group count 3 are retained.
- All four index references: D → d, with an explanatory note on each element and an unresolved source entry. Every printed index and Abbe number is retained.
- Glass labels: the former sodium-D descriptions → Unmatched (nd 1.69100 / ν 54.8) on elements 1 and 3; Unmatched (nd 1.64831 / ν 33.8) on element 2; BaF5 (Schott) on element 4. LaK9 (Schott) and SF12 (Schott) do not resolve in the current catalogue. BaF5 (Schott) resolves to Hoya BAF5, with Δn = +0.00000225 and Δν = +0.136899 at d. At D its index difference is −0.00010646. No supplier identity is inferred.
- Element labels: L1–L4 → Element 1–Element 4. Types: Source Spherical Element → Positive Meniscus, Biconcave Negative, Biconvex Positive and Negative Meniscus. Plain optical roles and focal lengths +65.57, −32.65, +29.08 and −61.68 mm are added.
- Cemented identifiers on elements 3 and 4: G3 → C1, with a C1 span from R5 to R7. Group captions now name the optical components.
- R4-to-stop / stop-to-R5 gaps: 10.06/1.24 → 9.0/2.3 mm, placing the stop at the drawn station while retaining the printed 11.3 mm separation. Stop coordinate: 40.06 → 39.0 mm from R1. Derived iris radius: 17.948150 → 17.816459 mm, consistent with the approximately 17.7 mm drawn opening.
- Full field / maximum trace half-field: 10/5° → 28/14°. Image circle: absent → 49.6 mm, twice the real 14° chief-ray height of 24.799369 mm, rounded. No format or mount is assigned.
- Focus description: the former long technical note → “Infinity focus only; the patent gives no close-focus data.” The close-focus placeholder remains 1e15 m.
- The analysis now has the matching title, four required metadata rows, source identification, optical architecture, element powers, glass interpretation, infinity focus, field/aperture limits, claim conditions and sources. The audit retains the source and optical findings in the sections above; obsolete performance and numerical convergence claims are removed.

After these changes, EFL remains 100.894744 mm, f-number remains 2.000 and back focus remains 69.018475 mm. The optical track remains 70.3 mm and total distance to the image remains 139.318475 mm. The half-field changes from 5° to 14°, as required by the source.

Surface checks report no errors. Aperture checks report one station within 3% of the stated f-number, with no rim, iris, trace or failed limits. The image-circle check reports one lens checked, none undersized and none skipped. Field coverage reaches 100% of the 49.6 mm circle at 14.0°, with a clear corner chief ray, no unsolved station and none skipped. The real 14° chief ray converges and passes every clear rim; no axial or chief-ray blockage is found. One outer bundle ray is not found by the meridional clearance calculation, so it does not establish complete pupil coverage.

Open: compare the retained R1–R7 rims [28, 28, 24, 20.3, 22, 20.5, 22] mm with the drawing's approximate [25.3, 23.7, 20.6, 17.2, 20.7, 20.7, 20.7] mm and resolve the smaller R6 joint without assuming that a drawn outer cylinder is a clear aperture. The D/d wording, unavailable LaK9/SF12 catalogue labels and historical glass identity remain unresolved.
