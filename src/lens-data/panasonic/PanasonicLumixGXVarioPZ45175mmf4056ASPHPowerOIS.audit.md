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
Element powers -> actual data radii, thickness, nd. Native EFL/BF -> sourceModel and source raw tables. Aperture/geometry -> implementedModel.geometry. MTF statements -> implementedModel.mtf, spectra kept separate. UI/spectral ray bands -> implementedModel.rayBands. Kinematics -> evidence CAM solve log and actual station gaps. Supplier identities deliberately unclaimed.

## Gate disposition
Marked ready for batch integration under the stated reconstruction. Closed 2026-11-01: integrated in `src/lens-data/panasonic/`; see the last section.

## Pending integration
Closed 2026-11-01: see the last section.

## Frozen-byte final validation
Final data SHA256 639926b6246194b10e4ea859c7c1909d681c9707aeedf8eea065e9513e2fda67. Full MTF rerun uses current-focus EFL and entrance pupil and records this exact input hash. Independent source-only reference replay removes all named proxies. Cam replay reproduced all authored distance cells exactly (maximum residual0). Native source rounding residuals and every unavailable finite state remain explicit.

## Final isolated integration and deployment boundary
Consolidated suite completed successfully in the independent isolated tree:5301 tests in304 files, typecheck, format, lint and production build all exit0;1779 pages prerendered. No deployment, PR or source-corpus write performed by this builder. Earlier interrupted runs remain preserved as superseded, not counted as successes.

Final combined receipt SHA256 175ec6410b2d2fc010f0ed262f9698aaef682b5f0077c984d558b6411370f0ea; exact per-lens source/integrated object equivalence and full original logs retained in results. Source data and analysis bytes are unchanged from the independent final-integrated-input receipt. This audit paragraph is post-run provenance, not an optical/application modification. Integration closed 2026-11-01; see the last section.

## 2026-11-01 — Deployment validation and fix pass

Source re-read: JP 5649252 B2 Example 1 was checked row by row against the PDF page images and text layer. That covered 25 radii, 19 fixed distances, 14 nd/νd pairs, the stop position, 15 asphere values, 18 variable-gap and BF cells and the six printed f and Fno values, 136 cells in all, with no mismatches. Group focal lengths agree within 0.0004 mm, and conditions (1) to (3) reproduce the printed 0.5745, 0.1110 and 0.2568 at H = 10.81. The front page agrees with the bibliographic fields; US 9,158,092 B2 confirms the inventor romanization and the Example 1 focal lengths.

Patent vs model: EFL 45.1684/87.7062/167.2377 mm vs 45.1683/87.7050/167.2320 mm. BF 14.60331/14.60288/14.60312 mm vs 14.6025/14.6011/14.5989 mm. Total length 107.5269/107.5266/107.5268 mm, reproduced. Half-field 13.5369/6.8993/3.6302° vs 13.54/6.90/3.63°. F-number 4.15704/5.44688/5.83639, reproduced by iris radius 7.4314/5.8606/5.2256 mm; the aperture audit has 201 of 201 stations within 3 %. Maximum LSA across all stations is 0.103 mm, so nothing points to a misprinted coefficient.

Zoom: printed spacings hold at stations 0, 100 and 200. G4 and d19 turn once at station 121 (peak 6.392 mm), d21 once at station 139 (17.030 mm); the printed sequences require each turn, and G2 and G5 stay monotonic. Maximum paraxial defocus is 0.0042 mm, at the printed tele state. d5+d10 stays at 27.7518 mm and d19+d21+d23 at 27.7018–27.7019 mm.

Product match: Panasonic lists 14 elements in 10 groups with 2 aspherical and 2 ED elements and a 90.0 mm length. Panasonic's construction drawing, as read by the batch coordinator, has blue ED on the large G1 meniscus (L3) and the G3 element (L9), and pink ASPH on the first G3 element (L7) and the element behind the ED one (L10); this agrees with the file. Example 1 fits better than Examples 2 and 3 on length (88.28 mm from the flange vs 93.75 and 96.75 mm), ED count (two vs one) and two-group focus. No example reaches 175 mm. The patent names G4+G5 as the focus groups (¶0017, ¶0029) and identifies no O.I.S. group.

Fields changed: `subtitle`, new `catalog.specs`, `focus.description`, zoom labels "Wide" and "Tele", all 14 element `label` and `role` strings, and 14 `glass` strings reworded to corpus forms. `apd: "inferred"` and `apdNote` added on L3 and L9, whose nd 1.497, νd 81.6 fit FCD1. Analysis rewritten as plain technical prose with Image Stabilization and Model Scope sections; this log lost its script references and the stray line about another lens.

Before and after: `built.mjs` and `probe.mjs` output is byte-identical to the baseline, `zoomiris.mjs` differs only in the two zoom labels, `protcmp.mjs` reports no protected field changed, and the surface audit prints OK. Glass resolves 13 of 14 before and after, to the same rows; L10 stays Unmatched.

Open: rims for the figure pass. Scaled from Figure 1 panel (c), the file has S1-2 at 18.67 mm against about 15.6 mm, S3-5 at 16.51 mm against about 14.3 mm, and L12 (S20-21) at 7.225 mm against about 5.7 mm; the others are within about 12 %. No rim was changed in this pass. Clearance shows no axial clip or blocked chief ray; `clearap.mjs` reports `LOWER no-ray-found` for the corner bundle at stations 196-200.

Open: L7 keeps D-ZLaF81-25 at Δνd +0.073, just over the 0.06 residual flag. It was left because the resolved set had to stay unchanged in this pass.
