# BAUSCH & LOMB 100mm f/5.6 (US 2,390,387 Design) — Audit

## Source

US 2,390,387 A, “Telephoto Objective,” names Wilbur B. Rayton and Lena M. Hudson as inventors and Bausch & Lomb Optical Company as assignee. It was filed on 31 January 1944 and published on 4 December 1945. Figure 2 is the cemented example; Figure 1 is air-spaced. The Figure 2 tables on PDF pages 1 and 3 agree.

## Transcription

Two independent readings of the page images agree on all six distinct radius magnitudes, four center thicknesses, the 21.08 mm separation, four D-line indices and four Abbe numbers. Signs follow the drawing: +16.95, −45.40, +57.40, −10.75, −28.50 and −19.49 mm. No numerical transcription mismatch was found. L2 is printed as 1.6210 in both table images despite the incorrect 1.620 text extraction.

The two shared interfaces are R2 = R3 and R6 = R7 in the patent, represented by surfaces 2 and 5 in the model. Each is a single glass-to-glass transition. Figure 1’s disagreements between drawing and text tables, S1 = 0.008 versus 0.006 mm and R8 = 18.57 versus 17.57 mm, do not affect Figure 2.

## First-order Results

The printed 100 mm f/5.6 design computes to EFL 100.00346700678662 mm and paraxial f/5.600. The calculated BFD of 50.30405972406503 mm equals the stored last gap. The powered track is 29.88 mm and the first-vertex-to-image distance is 80.18405972406502 mm. Individual element focal lengths in air are +24.47, −40.62, −33.44 and +79.02 mm; the cemented doublets are +53.12 and −64.07 mm.

The inferred iris radius is 6.085409062993138 mm. An independent exact spherical trace gives entrance-equivalent f/5.713298 and image-space sine f/5.753187. A nominal f/5.6 marginal ray reaches radius 6.215479 mm at that stop plane. The admitted axial beam clears the estimated optical rims; the aperture difference comes from the inferred iris rather than a rim limit.

## Values Not Printed

The stop split of 10.9/10.18 mm, iris size, 9.9/7.5 mm front/rear clear semi-diameters, paraxial image plane and ±10° field are inferred. The real chief-ray image height at the illustrative 10° limit is about 17.92 mm. The patent gives no image format, numerical field for Figure 2, back focus, clear apertures or close-focus data. Its 30° field at f/5.6 describes prior art.

The figure suggests a stop about 10.5 mm behind the front doublet, front semi-diameters about 9.4 mm and rear semi-diameters about 5.4–5.5 mm. The estimated stop and rims remain unchanged. The minimum computed glass edge thickness is about 0.216 mm and the intercomponent axial air clearance about 17.539 mm. Off-axis pupil clipping is present despite clear chief rays.

## Product Identification

No product is documented as using this prescription. Bausch & Lomb’s wartime aerial telephotos do not establish a connection to Figure 2. The patent design name is retained without a production-model attribution.

## Corrections

The prescription requires no numerical correction. The D-line indices, Abbe numbers, radius signs, cemented interfaces and paraxial image plane agree with the page images and independent calculation. Bibliographic expansions correct incomplete file metadata, rather than an error in the patent; no source erratum is needed.

## Remaining Questions

Open: The estimated rear semi-diameters are about 38% larger than the drawing suggests. Reducing them to 5.5 mm would lower 10° corner transmission from about 88% to about 61%. The front estimate of 9.9 mm also exceeds the approximately 9.4 mm drawing reading. The exact diaphragm position and diameter, historical glass identities, production use and source-supported field remain unknown.

## 2026-11-21 — Deployment validation and cleanup

Two independent re-readings of the page images checked both Figure 2 tables, radius signs, all thicknesses and spacings, indices, Abbe numbers, cemented interfaces and bibliography. The prescription agrees with the source, with estimated apertures and field retained; no product link is documented.

The data changes are:

- Type import: the temporary path → `../../types/lensDataV2.js`; constant/export binding: `data` → `LENS_DATA`, with one header describing the source and assumptions.
- Key: `rayton-hudson-us2390387-figure2-infinity-reference` → `bausch-lomb-100mm-f56-us2390387`.
- Name: the inventor-and-figure caption → “BAUSCH & LOMB 100mm f/5.6 (US 2,390,387 Design)”; maker: null → Bausch & Lomb. Visibility remains false.
- Subtitle: the long nominal-aperture, spectral-line and field caption → “US 2,390,387 A, Figure 2 — two-doublet telephoto design”.
- Patent number: US 2,390,387 → US 2,390,387 A; authors: Rayton/Hudson → Wilbur B. Rayton/Lena M. Hudson; assignee: Bausch & Lomb → Bausch & Lomb Optical Company. Figure 2 and 1945 remain unchanged.
- Specifications: seven long construction and calculation captions → “4 ELEMENTS / 2 GROUPS”, “ALL SPHERICAL”, “DESIGN F/5.6”, “TELEPHOTO”.
- Element labels: L1–L4 → Element 1–4. Types: four generic spherical-element captions → Biconvex Positive, Biconcave Negative, Negative Meniscus and Positive Meniscus. Added optical roles and focal lengths +24.47/−40.62/−33.44/+79.02 mm.
- Cemented annotations: absent → C1 on elements 1–2 and C2 on elements 3–4, with matching doublet spans. Group captions: G1 · L1+L2 / G2 · L3+L4 → G1 (+) / G2 (−). No interface or air space changed.
- Glass captions: four generic unmatched descriptions → “Unmatched (nD 1.5170 / ν 64.5)”, “Unmatched (nD 1.6210 / ν 36.2)”, “Unmatched (nD 1.5286 / ν 51.6)” and “Unmatched (nD 1.7200 / ν 29.3)”. For every element, the label change leaves Δn = 0 and Δν = 0. No catalog row matches both printed coordinates closely enough; no vendor is assigned.
- Focus description: the long source-and-calculation caption → “Infinity focus only; the patent gives no close-focus data.” The close-focus value remains 10¹⁵ m, written as `1e15`.
- Analysis: unsectioned notes → source identification, architecture, individual elements, glass selection, focus, aperture/field/image plane and sources. The audit now records source evidence, transcription, first-order results, unprinted assumptions, product evidence, corrections and remaining questions. Internal terminology, hashes and sampling/convergence counts were removed.

Before and after, the calculated EFL is 100.00346700678662 mm, paraxial f-number 5.6 and BFD 50.30405972406503 mm. Stop radius 6.085409062993138 mm, half-field 10° and total track 80.18405972406502 mm also remain unchanged. The surface check reports no errors. The aperture check reports no rim limit and no failed stations. The image-circle check reports one lens checked, zero undersized and zero skipped. Field coverage reaches 100% of the illustrative 10° limit, or 17.92 mm image height, with a clear corner chief ray; this does not establish full-pupil transmission.

Open: Drawing-versus-estimated rims, unprinted diaphragm dimensions, glass identities, production use and a published field for Figure 2 remain unresolved.

Review corrections: catalog.imageCircleMm 35.833311531527514 mm → omitted because no field is printed for Figure 2; analysis and audit image-circle diameter statements → an illustrative 10° chief-ray image height of about 17.92 mm. The image-circle and field-coverage checks now skip because no image format or image circle is specified.
