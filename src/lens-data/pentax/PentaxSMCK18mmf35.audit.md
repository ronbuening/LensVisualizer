# Source and inference audit

Table III and Fig. 3 contain 11 powered elements in 10 groups and no built-in filter prescription. The manufacturer drawing has an extra filter body after L5. Filter parameters remain absent; the model does not assert exact retail behavior.

Optical input source: second embodiment, Fig. 3 and Table III at PDF page 6. The label follows the numbered prescription table, not an invented Example 2. Lengths × 0.18 from F = 100; source back focus 199.7 × 0.18. Explicit d-line indices.

The author inspected the primary table, the optical figure and the supplied maker pages.

The package data used a midpoint iris and an inferred `sd` set; both were replaced on 2026-11-02 (closed, see below). No R, d, nd, νd or image-plane optimization occurred.

The optical data are static at infinity.

## 2026-11-02 — Deployment validation and cleanup

Patent re-read from the page images of US 3,841,736 (Table III and the table in claim 2): 21 radii, 20 axial spacings, FB, 11 nd and 11 νd, each compared as printed value × 0.18. No mismatches. Table IV is captioned "Table I", but it recomputes from Table III: all five columns agree to 0.009 per surface, with sums 4.610, 0.396, −0.033, 0.142, 0.262 against the printed 4.61, 0.40, −0.03, 0.14, 0.26. Row 1 of S1 prints 0.20 for 0.02, and the sum confirms 0.02. The coma and astigmatism columns set the pupil 5.36 behind r12 at F = 100. Fig. 3's shapes match Table III. Exact rays give spherical aberration +1.26 at the margin and −1.30 at 0.7 of it, and distortion −4.8 % at 51°, as in Fig. 4. Table I as printed computes to EFL 117.5, so that embodiment is misprinted and was not a candidate.

Patent vs model: printed F = 100, 1:3.5, FB = 199.7, half field 51°. At × 0.18 that is 18.00 mm, F/3.5, 35.946 mm; the model gives EFL 17.998 mm, F/3.50, paraxial back focus 35.948 mm, total length 92.25 mm (summed; not printed). The printed F1234, F123456, F7 and F8 reproduce within 0.03 at F = 100. The 51° chief ray lands at 21.15 mm, 98 % of the 21.65 mm corner. The patent's back focus is the plate-free trace (199.71). A 1 mm plate in d10 with the gap unchanged would move EFL by +0.39 mm and back focus by +0.62 mm, so a retail plate is not a negligible omission; LENS_DATA_SPEC.md excludes any plate the source does not list.

Maker comparison: Asahi Pentax lens brochure (cameramanuals.org), p. 11 table: minimum aperture 22, 100°, 11–12 (groups–elements), FA, 0.25 m, 63 × 61.5 mm, 328 g, filter column BI (filters built in). The p. 2 text gives four built-in filters and provision for rear gelatin filters. The p. 2 section icon has 12 bodies. L1 to L6, L10 and L11 fit Table III's arcs. A thin plate sits right after L5. At the model's scale the cemented L7/L8 is about 4.3 mm against Table III's 5.33 mm, and L9 about 5.2 mm against 2.63 mm. The stepped rim is on L9, not L10. No Takumar 18mm f/3.5 was found in Wikipedia's list or on page 1 of the AOHC catalog (pages 2 and 3 unseen). US 3,976,367 (same inventors, about F/2.8 and 95°, lists a filter) fits worse.

Fields changed. Data fix: `projection`, the r12 gap split at 0.965 + 1.8574 mm, `catalog.elementCount` and `groupCount` to Pentax's 12 and 11, `closeFocusM` to 0.25, and all rims except S2. Fig. 3 was read by an arc fit (12.75 px/mm, vertical 1.04 × axial, 99.7 % of arc points on ink). Rims were held to a 2.9-point worst loss against the package rims (42°, 100.0 to 97.1 %); illumination at 51° went from 50.7 % to 48.1 %. In this cleanup: header comment, `subtitle`, `catalog.specs`, `focus.description`, element `role`, `focalLengthMm` added, `doublets` entry C1 added. The analysis lost its package-run diffraction and pupil-count sections, stray text about other lenses and the old `sd` list, and gained the Conditional Expressions section. No R, d, nd, νd or `sd` changed in the cleanup.

Open: Pentax's L9 and cemented L7/L8 differ in thickness from Table III, so the retail prescription may differ in that part of the lens. A later Asahi patent or a teardown could settle it.

Open: the filter plate's thickness and index are unknown. Adding it needs a source that prints them.

Open: S2 stays at 13.8 mm, 0.5 mm under Fig. 3. No raise was needed.
