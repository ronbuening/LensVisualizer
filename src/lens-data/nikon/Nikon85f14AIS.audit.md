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
