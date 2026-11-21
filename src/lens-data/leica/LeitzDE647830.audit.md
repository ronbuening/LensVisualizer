# LEITZ 100mm f/1.5 (DE 647,830 Design) — audit

## Source

DE 647,830 C, _Photographisches Objektiv_, names Ernst Leitz G. m. b. H. in Wetzlar and no individual inventor. The company is recorded as Ernst Leitz GmbH. The patent dates from 27 September 1934, the grant announcement is 24 June 1937, and the cover's issue date is 14 July 1937.

The sole “Ausführungsbeispiel” is the F = 100, f/1.5 table on PDF page 2, with its section drawing on page 3. The [official DPMA record](https://depatisnet.dpma.de/DepatisNet/depatisnet?window=1&space=menu&content=treffer&action=pdf&docid=DE000000647830A) identifies the document.

## Transcription

Two independent readings of the page images agree with all 37 printed numerical entries: 12 signed radii, 11 thicknesses and air separations, seven n′ values and seven Abbe numbers. No numerical mismatch was found. R2 is explicitly positive and R10 explicitly negative. R4 and R7 are cemented interfaces, giving seven elements in five groups.

The central air space is 21.75 mm and remains split 12.0 + 9.75 mm around an inferred stop. The claim's R7 < F/2 and 1.0–1.5 curvature-ratio conditions are satisfied: 43.50 < 50 and |43.50/−33.19| = 1.31.

## First-order

The printed values are F = 100 and f/1.5. The computed EFL is 99.993914083 mm, or −0.006086% from the nominal value. The paraxial f-number is 1.500000 at stop radius 19.686992798 mm. The real axial acceptance at this iris corresponds to about f/1.45.

The stored final gap is the calculated paraxial back focus, 53.652699253 mm. The first-to-last vertex track is 101.36 mm and the front-vertex-to-image distance is 155.012699253 mm.

Individual in-air element focal lengths are +139.46, +66.51, −42.01, −31.48, +43.86, +185.84 and +131.64 mm. The front and rear cemented assemblies are weakly negative at −240.69 and −268.00 mm.

## Not Printed

The patent gives no spectral line for n′, stop location or opening, clear semi-diameters, back focus, field angle, camera format or close-focus state.

The inferred stop lies 12 mm behind R5 and 9.75 mm before R6. The midpoint of the gap would fall inside R5's rim sag; the adopted stop clears the adjacent glass by about 0.92 and 1.93 mm. The clear radii are inferred, with minimum glass edge thickness about 2.21 mm. The ±10° model field is illustrative.

Earlier aperture and edge-clearance calculations found positive glass thickness and air clearance without a geometry override. Those calculations do not establish manufactured rim sizes or a physical iris position.

## Product

The Leitz ownership, September 1934 date, f/1.5 aperture and seven-element split-rear Gauss layout make this plausibly the German design behind the Xenon 5 cm f/1.5. The [Leitz Auction record of a 1936 Xenon](https://www.leitz-auction.com/en/Xenon-1.5-5cm-Taylor-Hobson/AI-11-16440) identifies “D.R.P.a” beside the Taylor-Hobson name and US 2,019,985 number on its front ring. The marking does not identify this German patent by number, and no published Xenon prescription confirms the numerical example.

[Lee's US 2,019,985 A](https://patents.google.com/patent/US2019985A/en) has the same broad split-rear architecture but a different prescription. The Leitz design retains its patent-design name.

## Corrections

No printed prescription number has been corrected. The earlier D-line assignment was an unverified interpretation of n′. Helium d is used with an explanatory note because the two flints match LF5/LF3 at d and not at the D line at the printed index precision.

Schott LF5 has tabulated nd/νd = 1.58144/40.85, differing from L3 by +0.00004/+0.05. Sumita LF3 has tabulated nd/νd = 1.58215/42.0, differing from L4 by −0.00005/0.00. Its calculated curve gives nd = 1.582151 and νd ≈ 42.03. The label “LF3 (Schott)” resolves to Sumita LF3; the assigned label therefore names Sumita. These comparisons do not identify the historical melts.

The five crown elements stay unmatched at 1.6202/60.4. The nearest N-SK16 row is 1.62041/60.32, with Δn = +0.00021 and Δν = −0.08, and does not reproduce the printed index.

The rear positive component consists of two positive members, L6 and L7; the earlier description of three was incorrect.

## Remaining Questions

Open: L6 and L7 have 34 mm clear radii, about 5–6 mm larger than the drawing's approximately 28 and 29.7 mm. Smaller drawn rims would reduce off-axis transmission. Other drawing estimates are about 34.6 mm for L1, 31 mm for L2 and 26 mm for L4/L5, versus 36, 32/31 and 27 mm in the model. These differences remain for a semi-diameter assessment; the delivered rims are retained.

Open: the source does not identify the index line or glass supplier. The d-line interpretation is supported by the two flints, while the crown glass remains unmatched. The Xenon connection is plausible but lacks a published production prescription. No patent field, camera format, historical iris or near-focus prescription is established.

## 2026-11-21 — Deployment validation and cleanup

Two independent readings of the page images checked every signed radius, thickness, air space, n′, ν, both cemented interfaces and the printed F = 100/f/1.5. Verdict: the transcription matches, with inferred stop, rims, image plane and field. The Xenon association remains plausible on the patent date, layout and 1936 engraved-lens evidence.

- File form: incorrect type-import path → ../../types/lensDataV2.js; const data/default data → const LENS_DATA/default LENS_DATA, with one source-and-assumptions header.
- Identity: the old DE647830 infinity key → leitz-100mm-f15-de647830; maker null → Leica; LEITZ DE647830 title → LEITZ 100mm f/1.5 (DE 647,830 Design); visible false → true.
- Source: DE 647830 → DE 647,830 C; Ernst Leitz Wetzlar → Ernst Leitz GmbH. The 1937 year, empty inventor list and Sole example designation remain.
- Subtitle: the long scalar/field description → “DE 647,830 C, Ausführungsbeispiel — plausible Xenon design”.
- Specifications: eight lengthy notes → “7 ELEMENTS / 5 GROUPS”, “ALL SPHERICAL”, “DESIGN F/1.5”, “SPLIT-REAR GAUSS”.
- Focal-length metadata: design 100 → 99.99 mm, the computed EFL rounded to two decimals. Image-circle metadata: 35.263249918973194 mm → omitted because neither field nor format is printed.
- Elements: L1–L7 display labels → Element 1–Element 7, with L1–L7 retained as the drawing labels; generic spherical types → positive meniscus, biconvex positive, biconcave negative, biconcave negative, biconvex positive, positive meniscus and biconvex positive. Optical roles and the seven in-air focal lengths above are supplied.
- Cemented groups: no element tags or doublet labels → C1 on L2/L3 spanning R3–R5, and C2 on L4/L5 spanning R6–R8.
- Glass reference: D → d on all seven elements, with a note that n′ has no printed line. L3's unmatched description → LF5 (Schott), Δn/Δν = +0.00004/+0.05; L4's unmatched description → LF3 (Sumita), Δn/Δν = −0.00005/0.00. The other five labels → “Unmatched (printed n′ 1.6202 / ν 60.4)”. All printed indices and Abbe numbers remain.
- Focus description: the long source-and-calculation narrative → “Infinity focus only; the patent gives no close-focus data.” The infinity placeholder remains 1e15.
- Analysis: incomplete identification and computation records → the exact lens-name heading, full patent/date/authorship rows, optical architecture, element roles, glass evidence, focus limits, inferred geometry, field limits and sourced Xenon context. The rear-positive-member count is corrected from three to two.
- Audit: source and numerical history are retained in Source, Transcription, First-order, Not Printed, Product, Corrections and Remaining Questions; obsolete source-availability statements and calculation-count records are removed.

Before → after: EFL 99.993914083 → 99.993914083 mm; paraxial f-number 1.500000 → 1.500000; BFD 53.652699253 → 53.652699253 mm; stop radius 19.686992798 → 19.686992798 mm; half-field 10° → 10°. Radii, spacings, source indices, Abbe numbers, rims and image plane are unchanged.

Surface geometry reports no errors. The axial-aperture check has no rim, trace or iris limit and no failures. Image-circle and field-coverage checks skip the lens because no source-supported image circle or format is assigned. This remains true with visibility enabled. The 10° chief ray clears the modeled rims; this is an illustrative field, not a patent coverage claim.

Open: the drawing/rim differences, unnamed source line and historical glass identity, physical iris and exact Xenon correspondence remain unresolved as described above.
