# Patent and integration audit

## 2026-09-25 — new-lens integration

### Exact local source and semi-diameters

WO2024154461A1.pdf, p. 87, Figure 1, Example 1; Table 1 p. 26. Rendered and inspected the exact embodiment; optical rims exclude labels, rays, arrows and mechanical edges.

Retained all semi-diameters. Figure screening gives a largely uniform ~1.20 ratio; the source effective diameters, ray containment and edge limits take precedence over that drawing scale. G6 focus-arrow ink is not an optical rim.

### Metadata and glass

Retained FE 400–800mm f/6.3–8 G OSS. Added six qualified proxies, including newly cataloged HOYA NBFD265 for L73. Thirteen elements remain on the patent-coordinate fallback; no proprietary identity was invented.

Final trusted catalog coverage: **14/27 elements**. Catalog curves are spectral proxies, not proof of production supplier or melt. Original patent coordinates and reference lines remain authoritative.

New HOYA entries use the manufacturer’s [2026-07-07 Zemax catalog including obsolete glasses](https://www.hoya-opticalworld.com/common/agf/HOYA20260707_include_obsolete.agf), accessed 2026-09-25. Its formula-1 polynomial is preserved in the supported six-coefficient polynomial representation; no fabricated Sellmeier coefficients or relaxed tolerances. The 70–200mm S-LAH98 near-match was rejected because the close index is the vendor e-line value while the patent explicitly specifies d-line indices.

The existing nominal f-number stations now opt into `zoomApertureModel: "from-nominal-fno"`. Without that integration field the runtime held the wide-end iris fixed despite the source-model aperture schedule. These radii remain inferred; they are not published physical iris measurements.

## 2026-09-25 — local-site follow-up

Compared the live diagram directly with Figure 1, PDF p. 87 of WO2024154461A1.pdf; Tables 1–4, pp. 26–28.

The wide and tele live outlines preserve the source stepped front group and rear rims. Retained the tabulated effective-diameter-based SDs, including the documented geometric caps.

In the fixed image-plane frame G1/G7 are stationary within 0.02 mm rounding; G2/G3 move imageward. G4 moves objectward, while G5/G6 reverse after Mid. Table 4 orders Wide/Mid/Tele correctly; G6 focuses imageward 4.80/9.69/16.07 mm relative to G5 (16.08 mm in the tele image-plane frame because tabulated gaps differ by 0.01 mm).

L12, L13, L41, L42, L43 and L78 now carry inferred low-dispersion/APD coloring. Resolved coordinate labels name the guarded proxy explicitly. The 13 unmatched elements have no compatible current-catalog or additional HOYA AGF candidate; they remain unresolved.
