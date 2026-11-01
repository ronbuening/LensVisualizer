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

Open: rims against Figure 1, read at 6.19 px/mm to about ±0.5 mm, for the later figure pass, drawn vs modeled: S1–S3 25 vs 21.55; S8–S10 15.4 vs 13.82; S11–S12 10.0 vs 12.10; S14–S16 9.4 vs 11.37; S17–S18 9.3 vs 11.48; S22–S24 7.4 vs 8.90; S25–S26 9.4 vs 11.16; S27–S29 10.0 vs 13.09; S30–S32 10.5 vs 15.385; L10 7.0 vs 6.05.
Open: Figure 1 draws FC2's opening near 8.6 mm; S33 sd is 15.385 mm, so the plane does not limit the beam in the model.
Open: the diagram numbers elements by `id` (1–18, resin layers included) while labels follow the 16 counted elements.
