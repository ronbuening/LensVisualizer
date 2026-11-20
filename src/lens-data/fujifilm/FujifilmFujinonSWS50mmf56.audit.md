# FUJIFILM FUJINON SW S 50mm f/5.6 — audit log

## 2026-11-20 — Deployment validation and cleanup

The independent validator re-read the 600-dpi patent page images: Table 1 on p. 3, all 14 radii, 13 thicknesses/gaps, eight nd/νd pairs and Bf, together with Fig. 1, the front-page bibliography and the amendment on p. 5. Every dimensional table value matches the delivered prescription at ×50; there are no aspheres or variable gaps. Verdict: valid with notes about inferred apertures and product identification.

The example strongly matches the Fujinon SW S 50mm f/5.6 for the Fujica G690/GL690 6×9 bayonet system: f = 50 mm, f/5.6, 90° full field, eight elements/six groups and a December 1973 filing near the GL690 introduction. [Lallement's camera history](https://www.lallement.com/pictures/G690.html) and [lens specifications](https://www.lallement.com/pictures/lenses.htm), the [Fujica instruction manual](https://www.cameramanuals.org/fuji_pdf/fujica_gl690_gm670.pdf), and [Kamerastore's retailer listing](https://kamerastore.com/products/fujica-fujinon-50mm-f5-6-sw-s-fujica-g690) support this association; the retailer lists eight elements/six groups, the G690 mount and 1 m minimum focus distance. The retailer's specification is not a manufacturer prescription. No maker optical diagram was found.

The A publication's d9 = 0.393 is retained. It gives normalized f = 0.99997 and Bf = 0.69548 against the printed 1.0 and 0.6955. A value of 0.383, previously attributed to an unexamined grant, would give Bf = 0.6990 and contradict the printed back focus. The 1974-03-19 amendment on p. 5 changes claims and prose only: the definition of fA1 as the combined focal length of L1–L4, the dB3/dB2 typo, a misprint and a duplicated phrase. It changes no numerical table values.

### Data and wording changes

- File declaration: `const data` → `const LENS_DATA`, matching default export; quoted object keys → plain identifiers. The type import and `satisfies LensDataV2Input` remain. Obvious floating-point noise was rounded back to the source decimal values, with no meaningful first-order change.
- `visible`: false → true. `key`: `fujinon-sws-50-patent-tuning` → `fujifilm-fujinon-sw-s-50mm-f56`. `name`: `FUJIFILM FUJINON SWS 50mm f/5.6` → `FUJIFILM FUJINON SW S 50mm f/5.6`. `maker` remains Fujifilm.
- Header/subtitle: removed alternate-value and private-work terminology. The header now describes the actual source, scaling, inferred stop and rims, printed image plane and catalog-glass uncertainty. Subtitle → `JP S50-96221 A, Sole example — Fujica G690/GL690 super-wide`.
- `catalog.specs`: six lines containing duplicated infinity scope and private-work labels → `8 ELEMENTS / 6 GROUPS`, `DESIGN f = 50.00 mm`, `DESIGN F/5.6`, `ALL SPHERICAL`.
- `source.example`: `{ label: "Table 1", id: "1" }` → `{ label: "Sole example", id: null }`. Patent number, 1975 publication year, assignee Fuji Photo Optical Co., Ltd. and authors Ryoichi Doi/Yutaka Sakai remain; author spelling matches the sibling SW 65 record.
- `catalog.lensMounts`: absent → `["fuji-g690"]`; `imageFormat` remains `6x9`. Existing counts 8/6, marketed/design focal length 50 mm and f-number 5.6 remain. `catalog.closeFocusM.marketing`: absent → 1 m, supported by the cited references.
- `focus.closeFocusM`: 1 → 1e15; description → `Infinity focus only; the patent supplies no close-focus spacings. The production lens focuses to 1 m.` The patent provides no near state and no finite-focus motion was added.
- `aperture.fStops`: `[5.6, 8, 11, 16]` → `[5.6, 8, 11, 16, 22, 32]`; `maxFNumber`: 16 → 32. Lallement's lens table documents the production f/5.6–32 range.
- Every element now has a plain optical role and its standalone in-air focal length from the element probe: L1 −58.60, L2 −136.60, L3 +21.63, L4 −34.68, L5 −25.45, L6 +15.45, L7 −73.43, L8 −44.95 mm. Existing shape labels agree with the radius signs.
- Cemented ids: L3/L4 `D3` → `C1`, L5/L6 `D4` → `C2`; added matching doublet spans S5–S7 and S8–S10. No anomalous-dispersion tags were added.
- `source.sdSource`: `heuristic` → omitted because the rims now mix figure readings and estimates. No prescription, stop position, image plane, index reference or declared field was changed beyond removing float noise.

### Glass labels

All eight old labels were `Unmatched (source nd=…; exact glass unproven)`. Each replacement was checked with the shared label resolver; the vendor actually resolved is listed below. Deltas are catalog minus printed source values. Older catalog designations were preferred to reformulated N-glass names where a compatible older row exists. These are dispersion equivalents, not evidence of the production supplier, glass melt or historical procurement.

| Element | New label     | Resolved vendor |       Δnd |       Δνd |
| ------- | ------------- | --------------- | --------: | --------: |
| L1      | LAK6 (Sumita) | Sumita          |         0 |         0 |
| L2      | BAC4 (HOYA)   | Hoya            |         0 |     +0.04 |
| L3, L8  | BACED5 (HOYA) | Hoya            |         0 |     +0.06 |
| L4      | LLF1 (Schott) | Schott          |         0 |     −0.15 |
| L5      | KF5 (Sumita)  | Sumita          |         0 |         0 |
| L6      | LAL7 (OHARA)  | Ohara           | −0.000003 | +0.019433 |
| L7      | SF10 (Schott) | Schott          |         0 |     +0.11 |

The existing lowercase d-line reference and printed nd/νd remain on all elements. No per-element C/F/g anchors were present to remove. The KF5 label resolves to Sumita, even when a Schott suffix is supplied, so the authored suffix explicitly names Sumita.

### Rims and field transmission

Fig. 1(a) supports the approximately 20 mm front semi-diameter and 7.2 mm central endpoints. S1 sd: 18 → 20 mm; S7: 11 → 7.2 mm; S8: 10 → 7.2 mm. The S7/S8 changes match the figure and cost no light from 0° to 45°. At S7/S8 the exact axial marginal heights are 5.616/5.601 mm and the 45° chief heights are 1.137/1.497 mm, so the smaller rims cut neither beam.

S10/S11 retain a 10 mm clear radius; `rimExtensionSd`: absent → 12 mm on each. The approximate 12–13 mm outer silhouette cannot be represented by continuing both spheres: they cross beyond about 10.4 mm across the 0.47 mm source gap. The opaque lands preserve the existing clear caps and pass surface/gap checks. They do not admit additional rays; their exact shape remains inferred.

The engine's 64-cell stop lattice at 45° gives geometric pupil transmission 600/3228 = 18.5874% before, and 1458/3228 = 45.1673% after, with no unaimed or failed samples. The whole 45° gain, 18.6% → 45.2%, comes from S1's 18 → 20 mm change. Comparing the final geometry to the S1-only change at 0°, 5°, 10°, 15°, 20°, 25°, 30°, 35°, 40° and 45° gives identical transmission, so the central reductions and outer lands lose no sampled light throughout the declared field. This is geometric pupil transmission, not measured radiometric illumination.

### First-order values and checks

| Quantity                                     |          Before |           After |
| -------------------------------------------- | --------------: | --------------: |
| EFL, built summary (mm)                      | 49.998314913231 | 49.998314913231 |
| FOPEN, built summary                         |             5.6 |             5.6 |
| Paraxial BFD, element/first-order probe (mm) |         34.7741 |         34.7741 |
| Stored final gap (mm)                        |         34.7750 |         34.7750 |
| Total track (mm)                             |        109.5155 |        109.5155 |
| Stop radius (mm)                             |  5.548900923969 |  5.548900923969 |
| Declared half-field                          |             45° |             45° |

The residual difference from the printed back focus is 0.0009 mm. The older paraxial tracing-field estimate also remains 37.117081°; it is not the declared 45° analysis field. The public description now separates the product association, optical architecture, individual elements, glass equivalents, infinity-only focus, and inferred apertures. It removes the duplicated table identifier, broken spacing, private-work vocabulary, references to unrelated models/files and the unrelated German image-plane instruction. `Applicant` → `Assignee`; publication year-only wording → 1975-07-31. No prior audit companion existed, so this log records the source review and decisions.

Surface audit: OK, no validation errors. Aperture audit: one lens/one station within 3% of f/5.6; zero rim, trace, iris or failed limits. Image-circle audit: one lens checked, zero undersized, zero skipped. Field-coverage audit: 97% (96.61% before display rounding), 45° → 48.79 mm of the 50.50 mm half-diagonal, limited by the declared field; the format corner is about 46.0° and clear. No stations were unsolved or skipped.

Open: other estimated rims need a complete figure-based SD review; the S10/S11 land geometry and 10 mm clear caps need stronger dimensional evidence before any further opening. The prose's 44 mm front diameter and approximately 40 mm drawn diameter differ. Production prescription/supplier identity, actual partial dispersion and near-focus spacings remain unconfirmed. No maker optical diagram was located.

Second review fixes: Removed procedural wording while preserving the source facts, transmission numbers and open questions. Both rim descriptions now attribute the entire 45° gain to S1, state that the figure-matched S7/S8 reductions cost no light from 0° to 45°, and retain the S10/S11 10 mm clear radius beneath the opaque lands. The analysis now cites Lallement for all five production specifications: f/5.6–32, 90°, 1 m minimum focus, eight elements/six groups and a 72 mm filter.
