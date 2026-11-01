# Construction and review audit

## Job and reference versions
SIGMA 18-50mm f/2.8-4.5 DC OS HSM; JP 2010-211056 A (the same Example 1 is printed in JP 2010-211102 A); engine edd47fdcd377025144ade179c8bed7188c0bc4eb.

## Extraction and conventions
PDF p10/printed9 Table1; Figure1; companion JP 2010-211102 A PDF pp11–12. Original source bytes, full extracted text and original card retained. Independent source/native review passed, separate from release approval.

## Model transformations
- Two S12 higher-order cells A8/A10 are BLANK in both primary and companion. Applied 0/0 is the approved proposed completion, NOT printed zeros. Paraxial agreement does not validate them.
- Terminal Fb after rear flare plane S33 is absent. Native values 38.52922540243389/38.53065503967003/38.5355895924848 mm are computed, not printed.
- S13/S33 flare planes and d12=.05,d13=.45,variable d32 are retained; S29 R0 is a plane glass surface, not a stop.
- Continuous cam uses linear native driver/image distances and G2 focus compensation; G1 near-fixed and G3/G5 coupled to source precision. No finite focus or OS displacement reconstructed.
- Display is f/2.8–4.5, despite historical stem missing the final 5. Closed: the files are now stemmed Sigma1850mmf2845DCOSHSM.

## Glass review
Catalog-surrogate dependent only. Native coordinates unchanged; evaluated residuals and selected/alternative rows in evidence.

## Numerical and geometry results
{
  "geometryErrorStates": 0,
  "fullMtf": {
    "mtf": {
      "statuses": {
        "converged": 105
      },
      "unknownFluxMax": 0,
      "convergedThroughLpMmMin": 50,
      "availabilityReasons": {}
    },
    "referenceMtf": {
      "statuses": {
        "converged": 105
      },
      "unknownFluxMax": 0,
      "convergedThroughLpMmMin": 50,
      "availabilityReasons": {}
    }
  },
  "uiRayCount": 1111,
  "uiRayClips": 0
}

## Correction/discrepancy register
Native rounding residuals in results; approved inference is not official erratum. Structured source.errata removed to avoid misrepresenting applied reconstruction.

## Independent review
Independent optical QA passed source/native invariants, off-grid geometry, current-state full MTF, source-only reference replay and native silhouettes. Baseline implementations and executed rows are retained in evidence/results.

## Quantitative-claim map
Element powers -> portable verifier element powers / actual data radii, thickness, nd. Native EFL/BF -> sourceModel and source raw tables. Aperture/geometry -> implementedModel.geometry. MTF statements -> implementedModel.mtf, spectra kept separate. UI/spectral ray bands -> implementedModel.rayBands. Kinematics -> evidence CAM solve log and actual station gaps. Supplier identities deliberately unclaimed.

## Gate disposition
Closed 2026-11-01: integrated under `src/lens-data/sigma/`.

## Pending integration
Closed 2026-11-01: see the section at the end of this log.

## Clean replay
Run `python Sigma18_50F2_8_4DCOSHSM.verify.py --package-dir . --output /tmp/replay.json`. Python standard library is sufficient. The held 18–125 deliberately exits nonzero.

Optional exact cam reconstruction: `python rebuild.py --package-dir . --output /tmp/cam.json` (NumPy and SciPy).

For new engine execution, use the pinned LensVisualizer repository with its declared dependencies and Node24: `LENS_REPO=/path/to/repo node --import /path/to/repo/scripts/ts-js-specifier-hook-register.mjs validate.mjs Sigma18_50F2_8_4DCOSHSM.data.ts /tmp/geometry.json geometry`, then `... /tmp/mtf.json mtf`. Set `FOCUS_SWEEP=all` for the 50–500 finite/native availability sweep. Run `ray-bands.mjs` with input and output paths analogously. No repository code or hidden numerical input is required for the Python replay.

## Frozen-byte final validation
Final data SHA256 935eebd2a9ed348c7abe11b2b187706671babd3eafff878a64f3cc9391317771. Full MTF rerun uses current-focus EFL and entrance pupil and records this exact input hash. Independent source-only reference replay removes all named proxies. Cam replay reproduced all authored distance cells exactly (maximum residual0). Native source rounding residuals and every unavailable finite state remain explicit.

## Final isolated integration and deployment boundary
Consolidated suite completed successfully in the independent isolated tree: tests, typecheck, format, lint and production build all exit 0. No deployment, PR or source-corpus write performed by this builder. Earlier interrupted runs remain preserved as superseded, not counted as successes.

Final combined receipt SHA256 175ec6410b2d2fc010f0ed262f9698aaef682b5f0077c984d558b6411370f0ea; exact per-lens source/integrated object equivalence and full original logs retained in results. Source data and analysis bytes are unchanged from the independent final-integrated-input receipt. This audit paragraph is post-run provenance, not an optical/application modification. Closed 2026-11-01: integrated under `src/lens-data/sigma/`.

## 2026-11-01 — Deployment validation and fix pass

Source re-read: Table 1 of JP 2010-211056 A and of JP 2010-211102 A, read from the page images. 33 surfaces, 156 fields (R, d, nd, νd, the three aspheres, 15 printed gaps) against the data file: 0 mismatches. JP 2010-211102 A, filed 2009-03-12 by the same inventor, prints the same Example 1 row for row; the only printed difference is |f4/fw|, 0.92 there and 0.93 in JP 2010-211056 A (computed 0.934). It names L3a, surfaces 11–12, element L6 here, as the stabilizing element, shifted ±0.5 mm (¶0046). `patentNumber` stays JP 2010-211056 A, the print transcribed. Both PDFs are in `patents/`.

Patent vs model at the printed stations: EFL 18.60/18.5995, 27.99/27.9889, 48.32/48.3251 mm. 2ω 76.78, 52.93 and 32.26° are reproduced to 0.01° by an independent real-ray trace at Y = 14.20 mm, an image height the patent does not print. Conditional values 4.42, 1.61, 1.20, 1.41, 0.23 and 0.36 are reproduced (computed 4.422, 1.607, 1.199, 1.410, 0.234, 0.365). Fb and total length are not printed in any example. Computed back focus is 38.529, 38.531, 38.536 mm, within 6.4 µm, with S1 to S33 fixed at 92.56 mm, as the fixed L1 and fixed FC2 of the patent require. S12 C and D are blank in all six examples, so those terms are unused; zero is correct, and S3-sized coefficients would add 4.6 µm of sag at the rim.

F-number: printed 2.92, 3.40, 4.49. One fixed stop of radius about 6.55 mm gives 2.919, 3.403, 4.487 by real marginal ray, so the printed set fits a fixed stop. The stop rule stays paraxial EPD = F/N, radius 6.43, 6.41, 6.40 mm at the printed stations.

Zoom: the only turning point is gap 5 / G2 at station 101 (13.802 mm against printed 13.800), which the printed reversal requires. G2's slope breaks at 27.99 mm. At 32 mm the inferred path sits near Example 5's printed gaps (d5 13.40/13.34, d32 9.63/9.64).

Rim fix: S20/S21 sd 5.875224787484323 → 6.05 mm, `checks.gapSagFrac` default 0.9 → 0.95, the smallest two-decimal value that admits it (0.94 fails: 1.35 mm of sag against 1.335 mm allowed in the 1.42 mm gap). The old rim was capped by the default limit where S21 and S22 nearly meet; the gap at the new rim is 0.07 mm. `audit:aperture` traced f-number: 2.9675, 3.4629, 4.5985 limited by S20, now 2.92, 3.40, 4.49 limited by the stop. 201 of 201 stations are within 3 % before and after. Its `--raise` minimum was 6.026 mm; 6.05 mm was the assigned value. No other rim changed. The render agrees with Figure 1 on element clusters, cemented pairs and shapes, and L10 stays shorter than the L11/L12 pair as drawn.

Maker diagram: Sigma's page lists 16 elements in 12 groups. As read by the batch coordinator, its drawing marks SLD at the element ahead of the stop in G3 and on the first G5 element, which are L9 and L13, both nd 1.4970, and aspherical marks on the front resin element, the first G3 element and the last element, which are S3, S12 and S30. This pass did not open the image.

Fields changed: `subtitle`, `catalog.specs` (added), header comment (added), element labels, roles and glass strings, `apd: "inferred"` with `apdNote` on L9 and L13, `focus.description`, the two end station labels, the two rims and `checks.gapSagFrac`. Glass resolves 15 of 18 before and after, to the same rows; L6 and both resin layers stay Unmatched. Printed stations and all other optics are unchanged. The analysis was rewritten in plain terms, and test counts were dropped from this log.

Closed 2026-11-01: rims against Figure 1, read at 6.19 px/mm to about ±0.5 mm, drawn vs modeled: S1–S3 25 vs 21.55; S8–S10 15.4 vs 13.82; S11–S12 10.0 vs 12.10; S14–S16 9.4 vs 11.37; S17–S18 9.3 vs 11.48; S22–S24 7.4 vs 8.90; S25–S26 9.4 vs 11.16; S27–S29 10.0 vs 13.09; S30–S32 10.5 vs 15.385; L10 7.0 vs 6.05. All held on re-measurement except that S2, S3, S10 and S21 end short of the outer edge: see the section at the end of this log.
Closed 2026-11-01: Figure 1 draws FC2's opening near 8.6 mm; S33 sd was 15.385 mm, so the plane did not limit the beam. It re-measures 9.1 mm from both ticks, and the printed fans end on it at 9.7 mm. S33 is now 9.7 mm: see the section at the end of this log.
Open: the diagram numbers elements by `id` (1–18, resin layers included) while labels follow the 16 counted elements.

## 2026-11-01 — Semi-diameter pass against the patent figure

Source: JP 2010-211056 A, PDF p16, Figure 1, the wide end of Example 1, read from the native 901 × 669 1-bit raster. JP 2010-211102 A, PDF p15, reprints the same drawing at the same scale on a larger canvas; the first sheet was used because it is uncluttered at FC1. Bibliographic data on the front page: inventor Fujita Kenta, applicant Sigma Corp, application 2009-058408 filed 11.03.2009, published 24.09.2010. They agree with the file.

Scale: along the axis, S1 sits at column 75, S32 at 648 and the image at 887, so 573 px over 92.56 mm and 812 px over 131.09 mm both give 6.19 px/mm. All vertices fall within 1 px of the prescription, the first check that the figure is drawn to scale at d5, d10, d18, d24 and d32 of the wide end. Across the axis, fitting the model's own curves to the ink gives 6.24 px/mm, so the figure is about 1 % anamorphic, and rim heights use 6.24. The elements centre on row 325.7, 1.7 px below the dash-dot line, so every reading below is half the distance between the top and bottom edges. With all surfaces extended past their rims, the curves lie on the ink to within a pixel, including the deep S2 and S3.

Second reading: the lateral-aberration Figures 4 (wide) and 5 (tele), PDF p17, stop short of the full pupil, and their ends were traced. The fan axis was normalised on the 0 % row, ±148 px about column 313. Patent end rays then land on one height per surface across rows: S13 8.66, 8.67, 8.67, 8.65 mm at wide 100–50 %, and 8.63, 8.63, 8.59 mm at tele 100–70 %; S33 9.70 and 9.57 mm at wide 100–90 %, and 9.75 and 9.73 mm at tele 100–90 %; S25 8.08, 8.25, 8.25, 8.24, 8.23 mm at wide 100–30 %; S24 6.61, 6.60, 6.59 mm at tele 70–30 %. The same ends need S1 ≥ 23.56 and S7 ≥ 14.11 mm at wide 100 %. A trial with exactly those limits reproduces all 20 off-axis ends within 0.021 of the pupil radius, against a stop of 6.55 mm.

| Surface | Before | After | Figure reading, mm | Evidence |
|---|---:|---:|---:|---|
| S1 | 21.551 | 25 | 25.1 | Figure; fan needs 23.56 |
| S6 | 16.29 | 15.9 | 15.9 | Square top with S7's land |
| S7 | 16.29 | 14.2, land 15.9 | curve end 13.9 ± 0.5, edge 15.9 | Figure draws the land; fan needs 14.11 |
| S8 | 13.821 | 14.2, land 15.2 | runs into L3's land, edge 15.2 | S7 and S8 cross at 14.6 mm if both run on |
| S9 | 13.821 | 15.2 | 15.2 | Figure |
| S10 | 13.821 | 13.821, land 15.2 | curve end 13.3–13.7, edge 15.2 | Land from the figure; curve end in noise |
| S11, S12 | 12.101 | 10 | 9.9 | Square rim |
| S13 | 12.099 | 8.65 | tick 8.4 | Fan on the plane the figure marks FC1 |
| S14–S16 | 11.374 | 9.4 | 9.4 | Square rim |
| S17, S18 | 11.483 | 9.2 | 9.2 | Square rim; the old order against L7/L8 was reversed |
| S20 | 6.05 | 6.9 | 6.9 | Figure; curve reaches the top edge |
| S21 | 6.05 | 6.05, land 6.9 | merges with S22 at 5.5–6.2, edge 6.9 | Axial floor keeps 6.05 |
| S22 | 8.9 | 6.05, land 7.4 | merges with S21, edge 7.4 | Same height as S21, so the gap check stays at 0.95 |
| S23, S24 | 8.9 | 7.4 | 7.4 | Square rim |
| S25, S26 | 11.158 | 9.4 | 9.4 | Square rim |
| S27–S29 | 13.095 | 9.9 | 9.9 | Square rim |
| S30–S32 | 15.385 | 10.4 | 10.4 | Square rim |
| S33 | 15.385 | 9.7 | tick 9.1 | Fan on the plane the figure marks FC2 |

Flare planes: Figure 1's ticks and the fans agree on the surfaces and differ by 0.25 and 0.6 mm. The ticks are marks, not glass outlines, the stop tick reads 6.65 mm against 6.55 mm, and the tick values would drop the corner to 37.6, 43.4 and 47.6 %. The fan values are the ones that reproduce the printed rays, so they stand. S13 stays above the axial beam: 8.21 mm at the engine's tele stop, 8.39 mm through a 6.55 mm stop. Paragraph 0043 gives S33 its purpose, cutting off-axis rays at the long end.

Retained: S2 and S3 at 21.55 mm. The figure's curve ends at 22.0 mm, where the land starts, but the resin layer reaches zero thickness at 21.85 mm, so the cap cannot run further and 2 % is noise. S4 and S5 at 20.98 mm against 21.2 mm, S10's curve end, and S21 for its axial floor. S20 rose from 6.05 mm because the figure draws it to the top edge; the assigned S21 stays. No asphere reaches a turnover: S3, S12 and S30 scan clean to 22.5, 10.5 and 11 mm. At S12's 10 mm rim, S3-sized A8 and A10 terms would add 1.1 µm, not the 4.6 µm quoted earlier in this log.

Cross-gap: S7/S8 and S21/S22 land 0.104 and 0.073 mm apart, and neither pair crosses. `checks.gapSagFrac` stays 0.95, which admits both at 0.949; 0.94 refuses both.

Clearance: the aperture audit gives 201 of 201 stations within 3 % of the stated f-number, limited by the stop, with no surface below the stated ray. Through the engine's stop of 6.43, 6.41 and 6.40 mm, the axial ray reaches 6.03 mm at S20 and 5.93 mm at S21 and S22. The meridional probe still marks S21 and S22 because it opens the stop to 6.55 mm, where the ray reaches 6.065 and 6.068 mm, 0.02 mm past the rim. Passing that ray would take `gapSagFrac` 0.96 for a rim the figure does not support, so it was not done. The image-circle check reports nothing undersized, the corner chief ray clears at all 201 stations, and the surface validator reports no errors. No rim cut was used. Engine half-field goes 38.06, 35.93, 28.88° to 39.22, 30.69, 20.32° at the printed stations, against printed ω of 38.39, 26.46, 16.13°: the wide end now reaches its printed field, and the other two still exceed theirs. F-number stays 2.92, 3.40, 4.49.

Corner illumination, geometric, wide open at infinity, at the 14.20 mm corner: 52.3, 93.4, 94.1 % before and 47.1, 53.7, 58.8 % after, at 18.60, 27.99 and 48.32 mm. The drop exceeds 5 points at all three stations, and it stays: the two flare planes and the G5 rims carry most of it, the fans and the figure agree on the planes, and the G5 outlines are square rims read to 0.1 mm. Printed meridional fan widths at the corner are 1.635 at the wide end and 1.338 at the long end, and the final model gives 1.633 and 1.326. Restoring S33 to 15.385 mm gives 54.2, 66.8, 71.9 %; restoring S13 to 12.099 mm gives 52.0, 62.5, 66.7 %; restoring both gives 59.1, 75.7, 79.8 %; restoring also the old G5 rims gives 77.6, 82.2, 79.8 %. The rest of the tele change is the G3 and G4 rims. The mid station has no printed fan, so its value rests on the same rims untested.

Maker's drawing, read at 5.05 px/mm from the S1 to S32 span: 16 elements in 12 groups, aspherical pink on elements 1, 6 and 16, and SLD blue on elements 9 and 13, front to rear, matching S3, S12, S30, L9 and L13. Rims read 25.2 mm (L1), 20.5, 15.7, 15.25, 9.7, 9.7, 9.3, 8.0 (L10), 7.8 (L11–L12), 9.3, 9.7–10.1 and 12.0 mm (L16). They match the patent figure within 0.3 mm except in four places, where the patent figure was kept: L2 is 0.7 mm smaller; L10 to L12 are larger, in the order L10 over L11 where the figure has the reverse; L16 is 1.5 mm larger; and L1's flange steps down to 22.5 mm about 7.5 mm behind the vertex, where the figure runs flat to the land. The maker also steps L5 and L8 at their rear edges to 14.1 and 8.8 mm.

Live check: the page at 18.60, 27.99 and 48.32 mm and at `focus=1` renders every element, with lands, cemented steps and spacing matching the figure. Focus is not modeled, so `focus=1` looks the same as infinity. An overlay of the model outline on the figure agrees within about a pixel on every element except L1's top edge.

Limitations: L1's rear land cannot be authored. S2 is a cemented junction, and a land on S3 would hang a hairline off the zero-thickness resin edge, so the outline runs straight from the S1 rim to the S2 rim and misses a triangle up to 3.4 mm high behind the flange. The ray paths are unaffected. The fan limits at S24 (6.6 mm) and S25 (8.2 mm) lie inside the drawn glass and are logged here, not applied: the figure governs both rims. As a result the wide upper fan ends at 90–30 % read 0.552, 0.814, 0.932, 0.978 against printed 0.520, 0.682, 0.797, 0.899, and the tele upper ends at 70–30 % read 0.948, 0.952, 0.964 against 0.899, 0.919, 0.946. Applying both limits costs 2.7, 0.9 and 0.7 points at the corner.

## 2026-11-01 — Glass labels and brackets

L6 (1.5876/61.0842) now carries L-BAL35. Its print sits 0.0015 below the catalog index with the Abbe number within 0.06, and Examples 2 to 4 print the unmoulded 1.5891/61.25 at the same position, which supports the reading. The trace anchors the d line on the printed index, so the row supplies dispersion only. Glass resolves 16 of 18; the two resin layers stay `Unmatched`. `cemented` tags and `doublets` H1, C1–C4, H2 were added for the six printed junctions.
