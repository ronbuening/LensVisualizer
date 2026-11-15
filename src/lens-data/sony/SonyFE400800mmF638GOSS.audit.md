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

## 2026-11-14 — Published finite conjugates

Patent: WO 2024/154461 A1, Example 1.

| Zoom/keyframe | Before | Added object distance / reference | Source locator | Paraxial offset (mm / diffraction depths) | Other-reference offset (mm / depths) |
|---|---|---|---|---|---|
| 0/1 | No conjugate | 3450 mm / `first-surface` | PDF p. 28, printed p. 26; Table 4, Wide finite column, d0 row; `d0 = 3450.00` | 0.072104529 / 1.4971542 | 4.8681019 / 89.446291 |
| 1/1 | No conjugate | 3450 mm / `first-surface` | PDF p. 28, printed p. 26; Table 4, Mid finite column, d0 row; `d0 = 3450.00` | 0.068371884 / 1.0864188 | 9.5644216 / 120.11704 |
| 2/1 | No conjugate | 3450 mm / `first-surface` | PDF p. 28, printed p. 26; Table 4, Tele finite column, d0 row; `d0 = 3450.00` | -0.091621859 / -1.1473669 | 21.772982 / 164.35073 |

The retained rows are `consistent` under the 25-diffraction-depth criterion. Existing gaps, image plane and published flags are retained.

- State 0/1: d5=73.95 mm; d8=2 mm; d13=44.45 mm; d20=9.02 mm; d23=17.16 mm; d26=13.77 mm.
- State 1/1: d5=92.98 mm; d8=4.42 mm; d13=22.9 mm; d20=10.33 mm; d23=21.61 mm; d26=8.09 mm.
- State 2/1: d5=107.64 mm; d8=2.24 mm; d13=1.8 mm; d20=9.3 mm; d23=22.73 mm; d26=16.63 mm.

Reference evidence: Table 1 (PDF p. 26, printed p. 24): "0(OBJ)" has "(d0)" in the di column, immediately before surface 1.
