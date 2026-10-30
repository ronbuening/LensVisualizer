# Nikon AI Nikkor 85mm f/1.4S Patent Audit

## 2026-06-24 Source Check

The referenced patent for this data file is US 4,396,256, Embodiment 1. No matching local untracked file was found in `patents/` during this pass.

### Status

- No prescription, glass, APD, high-index, or SD changes were made because the primary patent PDF is absent from the local patent folder.
- The data file remains marked as based on US 4,396,256, scaled from a normalized `f = 1.0` patent prescription to the 85 mm production focal length.
- Existing SDs remain documented estimates derived from paraxial/chief-ray constraints, the production 72 mm filter thread, edge-thickness limits, and cross-gap clearance.

### Follow-Up Needed

- Add the US 4,396,256 PDF to `patents/` and rerun this audit against the local source.
- Once the patent is available, recheck the normalized radii/thicknesses, glass rows, stop placement, and whether the patent supplies any clear-aperture or finite-focus spacing data not currently represented.

## 2026-09-08 Source and live-view audit

The missing source is now retrieved as ignored `patents/US4396256.pdf` from [Google Patents' original PDF](https://patentimages.storage.googleapis.com/45/a4/23/1c3881556dbfa2/US4396256.pdf). Embodiment 1 tables on PDF pp.6–7, Figure 1 on p.2 (600 dpi), and the floating-focus description on p.7 were inspected directly. This supersedes the source-availability blocker above.

- Verified all twelve normalized radii and separations at 85× scale, all seven glass coordinate pairs, seven elements/five air-separated components, spherical surfaces and source BF 0.5015×85=42.6275 mm (stored rounded 42.628). No cover glass or filter is present.
- Qualified catalog counterparts as inferred and recalculated isolated element focal lengths in air. Source identity and the scaled embodiment are explicit in the public notes.
- Patent specifies greater objectward movement of L1–L4 than L5, increasing D10, but supplies no finite station. Retained the assumed 2 mm differential and 0.85 m endpoint; reconstructed rear BF 52.73565361226402 mm. Old BF51.388 corresponded to about0.946518 m. New near conjugate is0.85 m, beta−0.1254491; front/stop and rear travels are12.1076536/10.1076536 mm. Group annotations now follow those two moving bodies.
- Figure-supported front rims changed to33.5 mm and final rims to19.5 mm. Other rims remain conservative: a29.4 mm L2 trial gives negative edge thickness (−0.167 mm); a29 mm S4/S5 trial exceeds cross-gap clearance (1.93 vs1.346 mm). These discrepancies remain a follow-up, not a claim of exact clear-aperture transcription. Stop split12.674/6.825 remains inferred within the unchanged source gap19.499 mm.
- Three source regressions, surface and image-circle audits pass; runtime renderer has no trimmed rims at infinity/midpoint/near. Production infinity and local infinity/near/midpoint/f16 were inspected. Near UI shows85 cm, D10 2.40, BF52.74 and EFL85.94; motion chart shows two correctly directed groups and max travel12.11 mm. Midpoint shows1.70 m, D10 1.40, BF47.68; f16 stop diameter2.98 mm.

Batch21–30 full gates and commit pending.

## 2026-10-29 — Nikon F-mount figure and fresh glass review

- Directly reopened original `patents/US4396256.pdf`, Embodiment 1: Figure 1 on PDF p. 2 rendered at 600 dpi, complete normalized media table on pp. 6–7 and the d-line (587.6 nm) definition on p. 6. All seven media, twelve optical faces and both cemented boundaries were checked. Native raster is 300 ppi; first/last vertices span about 658 native px over 64.39 mm, or 10.22 native px/mm. Crossing marginal rays, diaphragm rays, label leaders and group braces were excluded from rim measurements.
- S4 (L2 rear) follows a continuous curved source face to the element edge; raise its inferred optical SD from 25 to 28 mm, matching its existing front height more closely. This is an actual clear-cap enlargement, not a flat annulus or a published aperture. The accepted S4-only change passes edge/gap checks; it does not repeat the earlier failed whole-L2 or coupled-S4/S5 trials. L3's smaller retained body remains a source/model limitation.
- S7 (L3b rear) keeps its 20.5 mm clear cap and gains `rimExtensionSd: 22`. The source has a short vertical cap-end stroke ending near a 22 mm seat, followed by a bevel toward the taller front of the component. Preserve that connecting bevel rather than extending the curved sphere. The source arc endpoint is approximately 19.7 mm; the existing larger 20.5 mm optical cap is retained. The beveled L4 front and remaining air faces have no separately resolved vertical land; no extra cut is invented, and both cemented boundaries are unchanged.
- Fresh glass check retains all seven source pairs: 1.77279/49.4, 1.69680/55.6, 1.78470/26.1, 1.75520/27.5, 1.58144/40.8 and repeated 1.74443/49.4. All seven selected coefficient-backed counterparts pass coordinate compatibility. They remain qualified modern spectral proxies, not exact historical chemistry, supplier or melt identifications. The source's g-line spherical-aberration discussion supplies no material partial-dispersion number or anomalous-glass identification. No line-index/APD override is added.
- All normalized source R/d values retain their existing 85× scale and stored rounding; the inferred stop split, 2 mm floating differential and 0.85 m reconstruction are unchanged. Focused surface and circle audits pass, as does the aperture census without a new rim limiter. Nine actual SVG focus/zoom states have finite paths and zero hidden trim; their montage was inspected. Catalog consistency passes; full repository gates remain the parent's responsibility.
