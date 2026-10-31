# Audit Log — Canon EF 100mm f/2.8 Macro

## 2026-10-30 — Original-patent element heights, concave ends and glass

Original: supplied `patents/JPA 1991141313-000000.pdf`, JP 1991-141313 A, Numerical Example 1. Prescription on PDF p. 5 (printed patent p. 77); its focus table is at the top of the right column on that same page. Corresponding lens section is Fig. 1 on PDF p. 8 (patent p. 80). The figure-caption mapping is on PDF p. 7, and the index/Abbe definitions are at the end of PDF p. 4. Source F = 100, FNo = 2.89, twenty surfaces, ten glass elements and the D14 focus rows were checked directly in the original scan. No R/d, stop, magnification or focus/zoom control correction is indicated.

### Shape decisions and uncertainty

The PDF embeds native 2866×3895 px page scans at approximately 347 ppi and has no text layer. Native Fig. 1 was inspected directly; a 600-dpi page render would only upsample it. Its first/last glass vertex span is approximately 824 native px over the 73.32 mm source vertex length, or 11.24 px/mm. Endpoint uncertainty is several ink pixels (approximately 0.09 mm per pixel), with combined calibration and schematic height uncertainty of approximately ±0.5 mm. The stop leader, group brackets and focus arrow are excluded.

The previous inferred rims substantially exceeded the source caps. Source-height estimates below are rounded readings, not published diameters. Finite-focus axial-beam floors overrule smaller figure readings where necessary.

| Element / surfaces | Before sd, mm | Figure estimate, mm | Adopted sd, mm | Disposition |
|---|---|---|---|---|
| L1, 1/2 | 25.5 / 25.5 | approximately 17 | 17.5 / 17.5 | Source front meniscus, raised above the sampled axial floor. |
| L2, 3/4 | 22.5 / 22.5 | approximately 16.3 | 16.5 / 16.5 | Source cap heights and square-cut element rim. |
| L3, 5/6 | 19.5 / 19.5 | approximately 15.3 | 15.5 / 15.5 | Source stepped front-unit proportions. |
| L4, 7/8 | 16 / 16 | approximately 13 | 13.5 / 13.5 | Concave rear cap reaches the outer edge; no separate land is resolved. |
| L5/L6, 10/11/12 | 13 / 14.5 / 15 | approximately 12.7 | 13 / 13 / 13.3 | Direct cemented interface remains transparent; rear radius retains the 1× axial floor. |
| L7, 13/14 | 16.5 / 16.5 | approximately 12.9 | 13.5 / 13.5 | Both faces retain the 1× axial floor. |
| L8, 15/16 | 16.5 / 16.5 | approximately 11.7 | 12 / 12 | Source fixed-rear-group height. |
| L9, 17/18 | 16 / 16 | approximately 11.7 | 12 / 12 | Both concave caps checked; no resolved outer shoulder. |
| L10, 19/20 | 21 / 21 | approximately 16.8 | 17 / 17 | Source rear positive meniscus. |

Rejected trials and retained constraints:

- A 17.0 mm front radius follows the drawing more literally but clips the f/2.89 axial beam. The aperture probe requires approximately 17.2 mm; 17.5 mm is retained with source-height uncertainty and clearance.
- An initial source-height trial used 13.0 mm at surfaces 12–14. At the 1× finite object point, that radius clips the axial iris beam. Near-rim tracing reaches 13.1650 mm at 12 and 13.3970/13.4350 mm at 13/14, so the adopted values are 13.3/13.5/13.5 mm. No source R/d or tolerance was changed to make the smaller trial work.
- The axial-envelope diagnostic includes every 0.05 focus-control step plus the exact 0.5× keyframe. Intermediate object distances follow the existing inverse-distance control as diagnostic interpolations; they are not additional published source conjugates. The 0.5× and 1× spacings are source-published, while their quoted object distances and the surface-20 image gap are paraxial model-derived quantities.
- All three D14 rows remain exactly 2.50 / 25.62 / 48.74 mm. The stop remains source surface 9, represented by `R: "flat"`; its radius is derived from FNo 2.89. The old public reference to an authored R=1e15 stop was stale V1 wording and is corrected without changing the stop.

Every element, concave end and the single cemented junction was reviewed. No separate beam-clear rim cut or outer shoulder is resolved, so no cut, extension, fabricated depth source, opaque bonded land or replacement block is authored. Actual SVGs at infinity, 0.5× and 1× preserve ten connected finite element bodies. Twenty-two focus-control samples, including the exact middle keyframe, have no hidden material trimming. The two finite source-magnification configurations pass sampled on-axis pupil rays after the retained floor adjustments. Off-axis pupil clipping remains ordinary modeled vignetting; the finite chiefs reach approximately 21.64/21.70 mm for the nominal 21.6 mm image-field target. These are sampled model results, not production dimensions or complete continuous/skew-ray clearance.

### Glass decisions

The source definition on PDF p. 4 names Nᵢ and νᵢ as index and Abbe number without assigning a reference wavelength. Numerical Example 1 prints all ten medium pairs on p. 5. The prior d-line assertion and active coordinate-derived catalog curves are unsupported by an explicit numerical source anchor. Every medium therefore changes to `Unmatched` with `indexReferenceNote`; the numeric pairs remain unchanged and d-line tracing is expressly approximate.

| Elements | Preserved source N / ν | Former coordinate class | Current disposition |
|---|---|---|---|
| L1 | 1.60311 / 60.7 | 603607 | Unmatched; source reference line unspecified |
| L2, L3, L7 | 1.78590 / 44.2 | 786442 | Unmatched; source reference line unspecified |
| L4, L8 | 1.80518 / 25.4 | 805254 | Unmatched; source reference line unspecified |
| L5 | 1.69895 / 30.1 | 699301 | Unmatched; source reference line unspecified |
| L6 | 1.80610 / 40.9 | 806409 | Unmatched; source reference line unspecified |
| L9 | 1.76200 / 40.1 | 762401 | Unmatched; source reference line unspecified |
| L10 | 1.51633 / 64.1 | 516641 | Unmatched; source reference line unspecified |

All ten source pairs, including both members of the cemented pair, agree with the authored numbers. No per-element C/F/g indices, partial-dispersion ratio or numerical APD evidence is printed. No such override remains, no numerical cement/resin/filter/rear plate is supplied, and 0/10 catalog curves are active. Modern coordinate resemblance does not establish source wavelength, historical supplier, melt or chemistry. Analysis labels, glass prose, stop wording, rim dimensions and retained constraints now agree with the data. The production correlation remains inferential and separate from source fidelity and sampled runtime clearance.

## 2026-10-31 — d-line inferred from printed coordinates

Scope: reference-line classification and catalog curves only. No source pair, geometry, rim, stop or control changed, and no new whole-lens review is claimed.

The patent names no spectral line for its index and Abbe columns, and the 2026-10-30 review marked every medium `Unmatched` for that reason. Under the coordinate test in `src/lens-data/LENS_DATA_SPEC.md`, 10 of 10 printed pairs match a catalog nd/νd within |Δn| ≤ 6e-5 and |Δν| ≤ 0.15, and none matches a catalog ne/νe. The table is therefore read as d-line, and the per-element `indexReferenceNote` fields are removed.

10 media carry qualified catalog curves. Rows keep the earlier selection where it is still an exact match. This patent dates from 1996 or earlier, so lead-silicate rows replace lead-free rows where the catalog has one at the printed pair. Catalog-copied C/F/g indices and dPgF stay removed. Supplier, melt and chemistry stay unspecified.

| Element | Printed n / ν | Curve | Δn | Δν |
| --- | --- | --- | --- | --- |
| Element 1 | 1.60311 / 60.7 | J-SK14 | +0.000000 | -0.006 |
| Element 2 | 1.7859 / 44.2 | S-LAH51 | -0.000004 | +0.003 |
| Element 3 | 1.7859 / 44.2 | S-LAH51 | -0.000004 | +0.003 |
| Element 4 | 1.80518 / 25.4 | SF6 | +0.000002 | +0.032 |
| Element 5 | 1.69895 / 30.1 | E-FD15 | -0.000000 | -0.049 |
| Element 6 | 1.8061 / 40.9 | P-LASF47 | +0.000000 | -0.000 |
| Element 7 | 1.7859 / 44.2 | S-LAH51 | -0.000004 | +0.003 |
| Element 8 | 1.80518 / 25.4 | SF6 | +0.000002 | +0.032 |
| Element 9 | 1.762 / 40.1 | S-LAM55 | +0.000001 | +0.000 |
| Element 10 | 1.51633 / 64.1 | S-BSL7 | -0.000000 | +0.042 |
