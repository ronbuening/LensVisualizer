# Patent and integration audit

## 2026-09-25 — new-lens integration

### Exact local source and semi-diameters

US20240134166A1.pdf, p. 2, Figure 1, Example 1. Rendered and inspected the exact embodiment; optical rims exclude labels, rays, arrows and mechanical edges.

S27/S28/S29: 10.1/10.5/10.7 → 15.0/15.0/15.0 mm. At 600 dpi, the optical rims measure approximately 15.0 mm (79.65 µm/pixel axial scale). L2 IS arrows and the L5 focus arrow contaminate the automated envelope; their apparent 2–4× excess was rejected. Other rims are within figure uncertainty or geometry-limited.

### Metadata and glass

Corrected the Canon assignee to catalog-canonical Canon Inc. The marketed RF 200–800mm f/6.3–9 IS USM name is retained. L1 now uses an N-FK5 coordinate-compatible proxy rather than the unresolvable 48770x token.

Final trusted catalog coverage: **17/17 elements**. Catalog curves are spectral proxies, not proof of production supplier or melt. Original patent coordinates and reference lines remain authoritative.

The existing nominal f-number stations now opt into `zoomApertureModel: "from-nominal-fno"`. Without that integration field the runtime held the wide-end iris fixed despite the source-model aperture schedule. These radii remain inferred; they are not published physical iris measurements.

## 2026-09-25 — local-site follow-up

Compared the live diagram directly with Figure 1, PDF p. 2 of US20240134166A1.pdf.

The 15 mm rear doublet rims now reproduce L6 much more closely. Retained these and the remaining SDs: front-rim differences are below the figure-estimation threshold; L2 leader/IS-arrow ink must not become glass.

Wide-to-Tele camera-frame motion is objectward for L1/L3/L4/L5/L6 (89.97/40.59/39.60/57.97/58.29 mm); L2 stays fixed within 0.01 mm table rounding. Infinity-to-near focus remains disabled because no finite spacings are published.

L1b, L3a, L5b and L6a now carry inferred APD tags from their compatible low-dispersion curves. All 17 resolved glass labels now name qualified spectral proxies. The assignee remains Canon Inc.; the untranslated applicant wording stays in the source discussion.

## 2026-10-30 — Reuse verification, metadata and runtime qualifications

Reused the complete **2026-09-25** shape-and-glass coverage above. The reviewed raw baseline from commit `741c83347` (SHA-256 `5ca08f59570a563f153c7a14c4b4b004e4ff57d427b78e1a967fcf0a38254206`) and current V2 data compare canonically equal after only normalized `source.example` provenance is excluded. All 17 media, 29 surfaces, caps, R/d, three source stations and controls match. The current 17/17 spectral curves and four APD flags remain qualified catalog inferences, with no per-lens spectral overrides. No fresh shape/glass inspection is claimed.

A narrow metadata check of the same original's First Numerical Example (US 2024/0134166 A1, PDF page 18 / printed 6) restores catalog design endpoints 203.00606/776.180743 → printed **203.00/776.00 mm**. Optical values are unchanged. Analysis chemistry-class descriptions now explicitly identify conditional catalog comparisons rather than published composition; supplier, melt and chemistry remain unresolved. Source Figure 1 remains PDF page 2; its native raster is 300 ppi, so the historical 600 ppi view was 2× upsampling. No new cap, shoulder, cut or material value is authored.

Current-runtime follow-up: a geometry-identical 65-position clone confirms z/sd equality. All three source-station aperture criteria and all 65 format chiefs pass, while only 63/65 aperture states lie within 3%; S8 clips the two exceptions, worst +3.074152%. This is the paraxial/derived-iris census, not exact working f-number. Exact working results trace at 42/65 states; the other 23 (including tele) are vignetted at S8. Current source iris radii are 12.986356/13.219894/13.250667 mm, without a new published schedule.

Source back-focus residuals are +0.003068/−0.005817/+0.042698 mm. Maximum interpolated residual is +12.664589 mm at zoom 0.8125 (computed EFL 656.232305 versus displayed 631.565 mm). Retain all source spacings and qualify interpolation as illustrative rather than focus preserving. Finite focus remains disabled and IS centered. At each state's iris, 65×4 fields of 193 aimed samples give source axial 193/193/169 and corner 123/135/132; numerical ray clearance does not certify production illumination. Across 65 current rendered states, all 1,105 paths are finite, closed and connected with zero hidden trimming.
