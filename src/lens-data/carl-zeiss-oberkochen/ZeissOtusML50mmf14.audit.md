# ZEISS OTUS ML 50mm f/1.4 — Audit

No earlier audit accompanied the prescription. The independent source review and the resulting changes are recorded below.

## 2026-11-20 — Deployment validation and cleanup

An independent validator checked the page images at 300 dpi: all 26 surface rows including STO, nd/νd for 14 elements, the three aspheres and their 30 conic/polynomial values, and D0/D10/D26 at both printed focus states; no transcription mismatch was found. Verdict: valid with notes; Example 1 is the strongest Otus ML 50 correlation because its 14/11 construction, two aspherical elements, four APD candidates and near conjugate fit the published product, whereas Example 2 is 15/12 and Example 3 has three aspherical elements.

### Source conflict and retained optics

S26 remains a plane base with its original aspheric polynomial. Table 2 prints −2000 mm but Table 4 prints INFINITY; both page-image crops were inspected again for this change. With the plane, EFL = 50.137 mm, Gr2 = 67.11 mm and Gr222 = −140.53 mm, compared with Table 1's 50.15, 67.14 and −140.15 mm. With −2000 mm they become 49.761, 66.25 and −149.07 mm. On the printed image plane, axial d-line RMS spot is 9.8 µm with the plane versus 54.6 µm with −2000 mm; full/half-pupil longitudinal spherical aberration is −0.071/−0.016 versus −0.266/−0.166 mm. Fig. 2 stays near zero. Table 2 likely repeats the radius from Examples 2/3, which print it consistently.

Source errata: absent → one corrected S26/R entry, printed −2000 → plane, with source-summary and aberration-figure evidence. Its numeric applied value 1e15 is the schema's plane representation after conversion; the surface itself keeps `R: "flat"`. This records resolution of the internal table conflict rather than claiming an official patent correction. Header and analysis now explain it.

All delivered radii, thicknesses, aspheric terms, stop position, nd/νd and rims remain unchanged. The printed 18.69 mm infinity image gap remains; no best-spot image-plane shift is applied. The paraxial iris radius stays 13.7367109719 mm; pupil aberration gives real-ray acceptance about f/1.51 rather than the source F1.435. Fig. 1 topology and stop station agree, but its schematic iris and rear-group rims do not supply reliable dimensional replacements in this pass.

### Fields changed

- Import: `../repo/src/types/lensDataV2.js` → `../../types/lensDataV2.js`; constant/export `data` → `LENS_DATA`; absent header → one source/inference JSDoc. Fields now follow the related Otus ML 85 file's layout.
- Key: `cosina-jp2026105585-example1-table4-reconstruction` → `zeiss-otus-ml-50mm-f14`.
- Maker: `Cosina` → `Carl Zeiss Oberkochen`; name: `COSINA JP2026-105585 EXAMPLE 1 — TABLE 4 RECONSTRUCTION` → `ZEISS OTUS ML 50mm f/1.4`. Assignee remains `Cosina Co., Ltd.`.
- Visible: false → true.
- Subtitle: the earlier plane-base claim and production caveats → `JP 2026-105585 A, Example 1 — patent design matching the production layout`.
- Specs: six lines about the source-table choice and modeling → `14 ELEMENTS / 11 GROUPS`, `DESIGN f = 50.15 mm`, `DESIGN F/1.435`, `3 ASPHERICAL SURFACES / 2 ELEMENTS`, `4 APD ELEMENTS`.
- Catalog mounts/format: absent → `sony-fe`, `nikon-z`, `canon-rf` / `135-full-frame`; marketing focal length/aperture: absent → 50 mm / 1.4; marketing minimum focus: absent → 0.5 m, from Cosina and ZEISS. Existing element/group counts 14/11 remain.
- Catalog design focal length: printed nominal 50.15 → calculated 50.14 mm, rounded to two decimals; the printed 50.15 mm remains in specs and analysis. Design f-number stays 1.435.
- Element labels: L1…L14 → Element 1…Element 14; short optical roles and individual in-air focal lengths added for all 14 elements. L6 type: Positive Meniscus → Positive Meniscus (Asph); L14: Plano-Concave Negative (Asph) → Negative Meniscus (Asph).
- Cemented metadata: absent → C1 on L7/L8, C2 on L9/L10, C3 on L12/L13, with matching doublets spanning S13–15, S17–19 and S22–24.
- APD metadata: absent → inferred tags and explanatory notes on L2, L4, L5 and L7, consistent with S-NPH1, J-PSKH8, J-KZFH4 and FCD1 properties and the maker's four-element count. Neither high-index L11 nor ordinary dense-flint elements acquire a tag.
- Focus description and conjugate source: earlier wording → plain descriptions of printed endpoints, inferred intermediate travel and the first-surface distance reference. `focus.closeFocusM` remains 0.49954 m = (394.90 + 104.64)/1000.

### Focus-distance correction

The original two-state linear blend reported approximately 0.999 m at t = 0.5 while focusing around 0.879 m. The original worst image error at the reported distance is −0.4583737 mm at t = 0.544.

Keyframes: [0, 1] → [0, 0.25, 0.5, 0.75, 1]. D10 and D26 were independently solved to six decimals against the engine's inverse-distance readout, leaving the printed endpoint pairs unchanged:

| t    | D10 old (linear blend, mm) | D10 new (mm) | D26 old (mm) | D26 new (mm) | Final readout (m) |
| ---- | -------------------------: | -----------: | -----------: | -----------: | ----------------: |
| 0    |                   7.560000 |     7.560000 |    18.690000 |    18.690000 |          Infinity |
| 0.25 |                   5.845000 |     6.168629 |    20.405000 |    20.081371 |          1.997574 |
| 0.5  |                   4.130000 |     4.595947 |    22.120000 |    21.654053 |          0.998787 |
| 0.75 |                   2.415000 |     2.794444 |    23.835000 |    23.455556 |          0.665858 |
| 1    |                   0.700000 |     0.700000 |    25.550000 |    25.550000 |          0.499394 |

D10 + D26 remains 26.25 mm throughout. The published focus index and finite-conjugate keyframe move 1 → 4; intermediate indices 1–3 remain inferred and are not source-certified finite states. A 0.001-coordinate sweep gives worst image error −0.0411136 mm at t = 0.878, within 0.05 mm. Each finite keyframe is in focus at its own readout to numerical precision. The unchanged endpoint focuses at object-to-S1 distance 394.753641 mm, versus printed 394.90 mm.

`probe.mjs` was run for every keyframe. Its finite-state object distances include a 0.001854447 mm infinity-plane offset, so it reports 394.65 mm at the final keyframe and total track 104.6419 mm. Direct calculation and the engine's readout use the retained printed plane at 104.64 mm, yielding 394.753641 mm and the distances above. No image plane was moved to make those tool conventions agree.

### Glass relabels

Every old label was `Unmatched (literal patent nd/vd; supplier not established)`. Each new label uses the neighboring corpus form `<glass> (<vendor> catalog equivalent; production supplier unspecified)` and was checked with `trylabel.mjs`; the resolved vendor is listed below. Deltas are catalog-row minus printed nd/νd, preserving the patent's d reference. No per-element C/F/g indices were present to remove.

| Element(s)  | New glass / resolved vendor |          Δnd |       Δνd |
| ----------- | --------------------------- | -----------: | --------: |
| L1          | S-NBH8 / Ohara              |    −0.000003 |         0 |
| L2          | S-NPH1 / Ohara              |    +0.000005 | +0.000817 |
| L3, L10     | S-LAH96 / Ohara             |            0 | −0.001308 |
| L4          | J-PSKH8 / Hikari            |            0 |         0 |
| L5          | J-KZFH4 / Hikari            |    +0.000001 |         0 |
| L6          | M-TAFD305 / Hoya            | −0.000001878 | +0.004483 |
| L7          | FCD1 / Hoya                 |            0 |         0 |
| L8, L9, L13 | NBFD29 / Hoya               |            0 |         0 |
| L11         | TAFD55 / Hoya               |            0 |         0 |
| L12         | S-LAH98 / Ohara             |            0 |         0 |
| L14         | L-LAH84 / Ohara             |            0 | −0.001497 |

All eleven distinct pairs meet the batch's exact-match bounds. S-NPH1 also reproduces the Table 1 Gr1P ΔPgF of approximately +0.023. Catalog curves replace Abbe-only dispersion; the patent's nd/νd remain unchanged and no production melt identity is asserted.

### Optical results and checks

Before → after, `built.mjs`: EFL 50.13653386996 → 50.13653386996 mm; FOPEN 1.435 → 1.435; stop radius 13.73671097193 → 13.73671097193 mm; half-field 23.12° → 23.12°; total track 104.64 → 104.64 mm. `probe.mjs` infinity BFD 18.6918544471 → 18.6918544471 mm; retained last gap 18.69 → 18.69 mm. Near EFL stays 49.1412 mm.

Surface audit: OK, no validation errors, including the corrected-source entry and five focus states. Aperture audit: one lens/one station within 3% of the stated f-number; zero rim, trace, iris or failed stations. Image-circle audit: one checked, zero undersized, zero skipped. Field coverage at threshold 1.01: 100%, modeled half-field 23.1° reaches 21.65 of 21.65 mm, corner clear, zero skipped. The declared near conjugate at 0/4 passes the finite-conjugate audit with image offset −0.002634333 mm, −0.7929921 quarter-wave depths, and first-surface distance reference distinguished from object-to-image.

The meridional clear-aperture probe at image height 21.63 mm, infinity and focus keyframe 4, reports no CLIPS-AXIAL or BLOCKS-CHIEF. It also reports an unavailable extreme upper ray; its source-sized pupil is larger than the saved iris and the rim estimates retain peripheral vignetting. Chief coverage does not establish full-pupil transmission.

Analysis: replaced the earlier process account with the required title and bibliography rows, product comparison, architecture, individual elements, glass selection, focus table, asphere coefficients, S26 evidence and image-plane/aperture limits. Removed hashes, duplicate-search history, private source references, software-run inventories and unsupported production certainty. This audit is newly written because none was delivered.

Open: compare estimated rear-group semi-diameters to Fig. 1 in the later SD pass; assess peripheral vignetting without widening rims solely to improve plots. Catalog equivalents and the four APD assignments remain material inferences, not confirmed production suppliers/melts. Browser access was unavailable, so no new visual comparison of the maker's color section or rendered application page was completed; no sandbox or approval refusal occurred. No commit, server, download, generated-file write or broad test/build command was performed.
