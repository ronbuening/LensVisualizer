# Construction and review audit

## Job and reference versions
PANASONIC LUMIX G X VARIO PZ 45-175mm f/4-5.6 ASPH. POWER O.I.S.; JP 5649252 B2; engine edd47fdcd377025144ade179c8bed7188c0bc4eb.

## Extraction and conventions
PDF pp13–14, Tables 1–3; Figures 1/3/5 discriminate examples. Original source bytes, full extracted text and original card retained. Independent source/native review passed, separate from release approval.

## Model transformations
- All physical semi-diameters and iris radii inferred; printed F-number calibrates entrance pupil, not independently measured aperture.
- Continuous zoom is a constrained engineering cam: linear native gap drivers and rear plane; G4 shift compensates first-order focus while retaining native residual. No published intermediate cam.
- No finite focus, decenter, OIS stroke or marketed 0.9 m performance is reconstructed.

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
Run `python PanasonicLumixGXVarioPZ45175mmf4056ASPHPowerOIS.verify.py --package-dir . --output /tmp/replay.json`. Python standard library is sufficient. The held 18–125 deliberately exits nonzero.

Optional exact cam reconstruction: `python rebuild.py --package-dir . --output /tmp/cam.json` (NumPy and SciPy).

For new engine execution, use the pinned LensVisualizer repository with its declared dependencies and Node24: `LENS_REPO=/path/to/repo node --import /path/to/repo/scripts/ts-js-specifier-hook-register.mjs validate.mjs PanasonicLumixGXVarioPZ45175mmf4056ASPHPowerOIS.data.ts /tmp/geometry.json geometry`, then `... /tmp/mtf.json mtf`. Set `FOCUS_SWEEP=all` for the 50–500 finite/native availability sweep. Run `ray-bands.mjs` with input and output paths analogously. No repository code or hidden numerical input is required for the Python replay.

## Frozen-byte final validation
Final data SHA256 639926b6246194b10e4ea859c7c1909d681c9707aeedf8eea065e9513e2fda67. Full MTF rerun uses current-focus EFL and entrance pupil and records this exact input hash. Independent source-only reference replay removes all named proxies. Cam replay reproduced all authored distance cells exactly (maximum residual0). Native source rounding residuals and every unavailable finite state remain explicit.

## Final isolated integration and deployment boundary
Consolidated suite completed successfully in the independent isolated tree:5301 tests in304 files, typecheck, format, lint and production build all exit0;1779 pages prerendered. No deployment, PR or source-corpus write performed by this builder. Earlier interrupted runs remain preserved as superseded, not counted as successes.

Final combined receipt SHA256 175ec6410b2d2fc010f0ed262f9698aaef682b5f0077c984d558b6411370f0ea; exact per-lens source/integrated object equivalence and full original logs retained in results. Source data and analysis bytes are unchanged from the independent final-integrated-input receipt. This audit paragraph is post-run provenance, not an optical/application modification. The workflow integration status remains pending for any future requested repository insertion or deployment; isolated validation itself is PASS.
