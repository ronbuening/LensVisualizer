# Construction and review audit

## Job and reference versions
SIGMA 18-50mm f/2.8-4.5 DC OS HSM; JP 2010-211056 A; engine edd47fdcd377025144ade179c8bed7188c0bc4eb.

## Extraction and conventions
PDF p10/printed9 Table1; Figure1; companion PDF pp11–12. Original source bytes, full extracted text and original card retained. Independent source/native review passed, separate from release approval.

## Model transformations
- Two S12 higher-order cells A8/A10 are BLANK in both primary and companion. Applied 0/0 is the approved proposed completion, NOT printed zeros. Paraxial agreement does not validate them.
- Terminal Fb after rear flare plane S33 is absent. Native values 38.52922540243389/38.53065503967003/38.5355895924848 mm are computed, not printed.
- S13/S33 flare planes and d12=.05,d13=.45,variable d32 are retained; S29 R0 is a plane glass surface, not a stop.
- Continuous cam uses linear native driver/image distances and G2 focus compensation; G1 near-fixed and G3/G5 coupled to source precision. No finite focus or OS displacement reconstructed.
- Display is f/2.8–4.5, despite historical stem missing the final 5.

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
READY_FOR_BATCH under the approved bounded reconstruction, with INTEGRATION_PENDING. This is private package readiness, not site acceptance.

## Pending integration
INTEGRATION_PENDING. No deployment or PR. No broad test claims.

## Clean replay
Run `python Sigma18_50F2_8_4DCOSHSM.verify.py --package-dir . --output /tmp/replay.json`. Python standard library is sufficient. The held 18–125 deliberately exits nonzero.

Optional exact cam reconstruction: `python rebuild.py --package-dir . --output /tmp/cam.json` (NumPy and SciPy).

For new engine execution, use the pinned LensVisualizer repository with its declared dependencies and Node24: `LENS_REPO=/path/to/repo node --import /path/to/repo/scripts/ts-js-specifier-hook-register.mjs validate.mjs Sigma18_50F2_8_4DCOSHSM.data.ts /tmp/geometry.json geometry`, then `... /tmp/mtf.json mtf`. Set `FOCUS_SWEEP=all` for the 50–500 finite/native availability sweep. Run `ray-bands.mjs` with input and output paths analogously. No repository code or hidden numerical input is required for the Python replay.

## Frozen-byte final validation
Final data SHA256 935eebd2a9ed348c7abe11b2b187706671babd3eafff878a64f3cc9391317771. Full MTF rerun uses current-focus EFL and entrance pupil and records this exact input hash. Independent source-only reference replay removes all named proxies. Cam replay reproduced all authored distance cells exactly (maximum residual0). Native source rounding residuals and every unavailable finite state remain explicit.

## Final isolated integration and deployment boundary
Consolidated suite completed successfully in the independent isolated tree:5301 tests in304 files, typecheck, format, lint and production build all exit0;1779 pages prerendered. No deployment, PR or source-corpus write performed by this builder. Earlier interrupted runs remain preserved as superseded, not counted as successes.

Final combined receipt SHA256 175ec6410b2d2fc010f0ed262f9698aaef682b5f0077c984d558b6411370f0ea; exact per-lens source/integrated object equivalence and full original logs retained in results. Source data and analysis bytes are unchanged from the independent final-integrated-input receipt. This audit paragraph is post-run provenance, not an optical/application modification. The workflow integration status remains pending for any future requested repository insertion or deployment; isolated validation itself is PASS.
