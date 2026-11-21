# FUJIFILM FUJINON 95mm f/1.3 (US 2,718,174 Design) — Audit

## Source

US 2,718,174 A, “High Aperture Photographic Objective,” names Yoshikazu Doi as inventor and Fuji Photo Film Co., Ltd. as assignee. It was filed on 21 June 1954, with Japanese priority dated 25 June 1953, and published on 20 September 1955.

The drawing sheet contains Figure 1 and Figure 2. Figure 1 is the eight-element f/1.3 example; its numerical table is in column 2 and is repeated in claim 1. Figure 2 is a separate nine-element f/1.2 example.

## Transcription

Two independent readings of the page images agree on all twelve signed radii, eleven axial distances and eight refractive-index/Abbe pairs for Figure 1. The repeated claim-1 table agrees. All radius signs are printed explicitly; R2 is +60.83 in the table, not a plane. The stated index line is lowercase d.

Figure 1 contains two cemented triplets, with interfaces at R4/R5 and R8/R9. The printed air spaces and the source's conditions I–III are consistent with this surface mapping. No Figure 1 transcription error was found.

## First-order Properties

The printed focal-length value corresponds to 95.00 mm in the model. The prescription computes to EFL 95.01063645 mm, a difference of +0.0112%. The first-to-last vertex track is 83.82 mm. Back focus is not printed; the stored final gap is the paraxial BFD, 44.02029810 mm.

The inferred stop radius is 20.08948794 mm for the nominal paraxial f/1.3 setting. Exact axial tracing gives an entrance-equivalent f/1.33518379 and image-space sine f/1.32561617. A real f/1.3 marginal ray requires a stop radius of 20.65818429 mm. These are model aperture conventions, not measurements of a historical iris.

## Values Not Printed

The exact stop station, iris diameter, clear semi-diameters, image-plane distance, f-stop list and ±10° field are inferred. The stop divides the central 18 mm air space into 14 and 4 mm and lies 49.5 mm behind the first vertex, approximately where Figure 1 draws it.

The introduction discusses picture angles up to about 45° for the lens class, without assigning that field to Figure 1. No image format, image circle, mount or close-focus data is established for this example. The chief ray clears the existing rims at 10° and 22.5°, but that does not establish full pupil transmission at either field.

## Product Association

[Oldlens](https://oldlens.com/fujinon%205cmf12.html) summarizes Doi's 1955 _Shashin Kogyo_ account: f/1.5 design, attempted f/1.3 extension, nine-element f/1.2 prototype, then an eight-element production Fujinon 5 cm f/1.2. Figure 1 fits the f/1.3 development stage; Figure 2 fits the nine-element stage. [Fujifilm](https://www.fujifilm-x.com/th-th/stories/fujinon-speed-lenses-rebirth-of-the-legend-1/) confirms that the production lens was introduced in 1954.

The evidence supports a development-stage family link. It does not identify Figure 1 as the production prescription, so the catalogue name retains “Design” and production mount, format and minimum-focus metadata are not assigned.

## Corrections

The Figure 1 prescription needs no correction to its printed radii, thicknesses, air spaces or glass values. The original inferred R3 rim of 34 mm exceeded L2's calculated knife edge at about 33.39 mm and reversed the outline; a 33 mm rim removes that defect while remaining above the axial beam's approximately 31.2 mm requirement.

No available catalogue glass meets the printed index/Abbe pairs closely enough for an exact assignment. BaF10 is named in the patent's discussion of the f/1.3 design, but the available BAF10 row differs from the printed values. Historical melt identities remain unresolved.

## Remaining Questions

Open: Apart from the corrected R3 edge, the inferred rims still need comparison with Figure 1's optical edges. The exact iris diameter, stop station, historical glass melts and relationship between Figure 1 and any surviving production lens remain unmeasured.

Figure 2 has a separate sign discrepancy: its embodiment table prints R10 = −.9076 while claim 2 prints +.9076. It does not affect this Figure 1 prescription.

## 2026-11-21 — Deployment validation and cleanup

Two independent readings of the page images agree on the Figure 1 table, repeated claim table, d-line definition, radius signs and cemented interfaces. The prescription is consistent with the source, with inferred apertures and image plane; the historical sources support a development-stage relationship to the Fujinon 5 cm f/1.2.

Changes:

- Import path: `../repo/src/types/lensDataV2.js` → `../../types/lensDataV2.js`; constant/export: `data` → `LENS_DATA`. A single header now explains the source and inferred quantities.
- Key: `doi-us2718174-figure1-infinity-reference` → `fujifilm-fujinon-95mm-f13-us2718174`; maker: null → Fujifilm; name: the inventor/figure label → FUJIFILM FUJINON 95mm f/1.3 (US 2,718,174 Design); visibility: false → true.
- Patent number: US 2,718,174 → US 2,718,174 A; assignee: Fuji Photo Film → Fuji Photo Film Co., Ltd. The inventor, year and Figure 1 selection are retained.
- Subtitle: the compressed aperture, scale and field description → “US 2,718,174 A, Figure 1 — Fujinon 5 cm f/1.2 development.” Specifications: eight long technical notes → 8 ELEMENTS / 4 GROUPS, DESIGN f = 95 mm, DESIGN F/1.3 and ALL SPHERICAL.
- Design focal length: 95 → 95.01 mm, the computed EFL rounded to two decimals. Image circle: 33.60754455 mm → omitted, because its ±10° basis is illustrative rather than a published field.
- R3 clear semi-diameter: 34 → 33 mm, removing the reversed edge. All other surface values, the stop split and the paraxial image plane are retained.
- Element types: generic spherical descriptions → Positive Meniscus on L1/L2, Biconvex Positive on L3/L6/L8, Biconcave Negative on L4/L5 and Negative Meniscus on L7. The patent's L1–L8 labels are retained and added as diagram labels; short optical roles and individual focal lengths are supplied.
- Cemented-group metadata: absent → C1 on L2/L3/L4 and C2 on L5/L6/L7, with brackets spanning R3–R6 and R7–R10.
- All eight glass descriptions: the verbose unresolved description → Unmatched labels stating the printed nd and νd. The pairs are L1/L2 1.6713/47.0, L3/L5 1.5414/47.1, L4 1.7572/27.5, L6 1.6738/47.0, L7 1.6480/47.8 and L8 1.6216/60.2. Δnd = 0 and Δνd = 0 for every element; no catalogue dispersion curve is assigned.
- Candidate labels do not establish exact matches. “BAF10 (Schott)” resolves to Hoya BAF10 at 1.67003/47.19 for L1/L2: Δnd = −0.00127, Δνd = +0.19. SF4 (Schott) for L4 differs by −0.00200/+0.08; SK16 (Schott) resolves to N-SK16 (Schott) for L8 and differs by −0.00119/+0.12. All are rejected. None of the other printed pairs has an exact row.
- Infinity-focus distance: unchanged numerically at 1e15 m, with shorter notation. Description: the compressed technical paragraph → “Infinity focus only; the patent gives no close-focus data.”
- Analysis: replaced compressed prose with the required metadata rows, optical architecture, element descriptions, glass discussion, focus scope, first-order limits and cited historical context. This audit retains the source findings and optical limitations while removing unrelated calculations and interface history.

EFL / nominal f-number / BFD before → after: 95.01063645 mm / 1.3 / 44.02029810 mm → 95.01063645 mm / 1.3 / 44.02029810 mm. The half-field remains 10°, stop radius 20.08948794 mm and first-to-last vertex track 83.82 mm.

Surface geometry reports no errors. The aperture check reports no rim, trace or iris limit and is within 3% of the stated f-number. Image-circle and field-coverage checks cannot assess a format corner because no image format or source-supported image circle is assigned; both skip this visible lens for that reason.

Open: Figure-based rim measurements, the exact historical iris and stop station, glass identities and a direct production-prescription match remain unresolved. The ±10° field remains illustrative.
