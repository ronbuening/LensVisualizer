# Patent and integration audit

## 2026-09-25 — new-lens integration

### Exact local source and semi-diameters

WO_2024247472_A1.pdf, p. 114, Figure 14, Example 2; Table 6 p. 35. Rendered and inspected the exact embodiment; optical rims exclude labels, rays, arrows and mechanical edges.

S31/S32: 13.9/13.95 → 16.48/16.575 mm; S33A/S34A: 11.1/11.1 → 14.465/14.6 mm. These are exactly half the published effective diameters 32.96/33.15/28.93/29.20 mm. Figure estimates (~19.4/17 mm) are superseded by the numerical table. Recomputed rear aspheric departures: −32.6 µm and +77.3 µm. Other modeled clearance margins remain.

### Metadata and glass

Normalized Macro casing in the display name. Added twelve compatible proxies, including new HOYA NBFD6, MP-TAC80-60 and ADF405. Seven source-coordinate glasses remain unmatched. Added zoomCloseFocusM for the published 2.289/3.709/5.814 m endpoints; no production macro focus is reconstructed.

Final trusted catalog coverage: **12/19 elements**. Catalog curves are spectral proxies, not proof of production supplier or melt. Original patent coordinates and reference lines remain authoritative.

New HOYA entries use the manufacturer’s [2026-07-07 Zemax catalog including obsolete glasses](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf), accessed 2026-09-25. Its formula-1 polynomial is preserved in the supported six-coefficient polynomial representation; no fabricated Sellmeier coefficients or relaxed tolerances. The 70–200mm S-LAH98 near-match was rejected because the close index is the vendor e-line value while the patent explicitly specifies d-line indices.

The existing nominal f-number stations now opt into `zoomApertureModel: "from-nominal-fno"`. Without that integration field the runtime held the wide-end iris fixed despite the source-model aperture schedule. These radii remain inferred; they are not published physical iris measurements.

## 2026-09-25 — local-site follow-up

Compared the live diagram directly with Figure 14, PDF p. 114 of WO_2024247472_A1.pdf; Tables 6–8, pp. 35–36.

Retained the newly corrected Table-6 rear rims and the rest of the source-based apertures after wide/tele live comparison. No further SD change is justified.

G2/G7 stay fixed in the image-plane frame. G1/G3/G4/G5/G6 move objectward Wide→Mid→Tele; D18/D27 gap reversals are not group reversals. G6 moves imageward 0.55/0.76/1.10 mm for the published 2.289/3.709/5.814 m endpoints. Simplified the on-site focus description to state this directly.

L2/L3/L12/L14 receive qualified inferred APD coloring from FCD1/FCD705/S-FPM2 curves. Seven remaining custom coordinates have no further compatible catalog/HOYA candidate; e-line near-matches remain rejected.
