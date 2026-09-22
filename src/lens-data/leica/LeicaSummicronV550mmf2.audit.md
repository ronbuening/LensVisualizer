# Audit Log — Leica Summicron-M 50mm f/2 Version V

Patent: US 4,123,144, Example 9

## 2026-06-24 — Folder audit

- Rechecked local `patents/US4123144.pdf` OCR for Example 9.
- Retained the current proprietary/e-line glass labels. The patent values do not justify replacing those rows with current d-line Schott catalog coefficients.
- Rechecked APD/high-index status: no partial-dispersion data are published, so all elements remain non-APD. The outer high-index collector roles remain supported by the patent e-line constants.
- No patent clear-aperture or semi-diameter table was found. Current SDs remain drawing/ray estimates matched to the f/2 beam, stop position, and Fig. 2-style geometry.

## 2026-09-21 — First-added diagram audit, lens 55

Source: local `patents/US4123144.pdf` (13 pages, 300 dpi CCITT scans). Pages used: 1 (front page and FIG. 1 layout), 2 (Sheet 1: FIG. 1 and FIG. 2 cross-sections), 10 (Examples 4–9 tables; Example 9 read from a 300 dpi crop, header confirmed at 600 dpi), 8–9 (description text). The OCR text layer garbles most digits, so every Example 9 value was read from the rendered image.

### Re-verified and retained

- Front page: US 4,123,144, inventors Walter Mandler; Garry Edwards; Erich Wagner, "all of Midland, Canada"; assignee printed as "Ernst Leitz Wetzlar GmbH, Wetzlar"; granted Oct. 31, 1978; filed May 16, 1977; DE priority 2621981 of May 18, 1976. `patentAuthors` and `patentYear` were already correct. `patentAssignees` stays at the repo's canonical "Ernst Leitz GmbH" (the corporate-history key); the printed form is recorded in the header and analysis.
- Example 9 general data: f = 100, aperture ratio 1:2, s' = 58.88, field angle ±22.5°. All eleven rows (r, a, n, ν) match the stored values at s = 0.50 exactly: 59.94 / 9.57 / 1.79227 / 47.15; 167.31 / 0.38; 40.30 / 14.35 / 1.67133 / 41.64; ∞ / 2.87 / 1.73430 / 28.19; 25.67 / 10.81; (diaphragm) / 13.39; −27.69 / 1.91 / 1.63003 / 35.45; ∞ / 7.65 / 1.72055 / 47.69; −40.30 / 0.38; ∞ / 8.61 / 1.72055 / 47.69; −59.94. The diaphragm is a tabulated surface (No. 6), so the stop position is published.
- Scale: the patent is normalized to f = 100 and the file is a uniform s = 0.50 copy. Paraxial check at f = 100 gives EFL 100.03, BFD 58.91 (patent 58.88), track 69.92; at the stored scale EFL 50.015, BFD 29.457, stored last gap 29.457 (defocus 0.0002 mm). No aspheres, so nothing to rescale beyond R and d.
- Aperture: `nominalFno` 2, `fstopSeries` starts at f/2, `maxFstop` default 16 (production f/16). The authored STO sd 7.8 mm implies f/2.005 and the engine's calibrated stop radius is 7.793 mm; the on-axis f/2 beam clears every stored surface.
- Element focal lengths: thick-lens values 56.71 / 30.02 / −17.48 / −21.98 / 27.96 / 41.59 mm agree with the stored `fl` set to 0.1 mm. Element `type` strings agree with the radius signs (L1 positive meniscus, L2 and L5 and L6 plano-convex, L3 and L4 plano-concave). `groups`, `doublets`, `elementCount` 6, `groupCount` 4, `lensMounts` leica-m, `imageFormat` 135-full-frame, `apertureBlades` 8 unchanged.
- Front-group semi-diameters (15.0 / 14.0 / 13.0 / 12.5 / 11.0) and the stop (7.8) retained: they are ray-based estimates within 15 % of the FIG. 2 rims and pass every check.
- APD: no partial-dispersion data are published; all elements remain `apd: false`.

### Changes

| Item | Before | After | Evidence |
|---|---|---|---|
| Index reference | elements stored the patent values with no `indexReference` (treated as d-line) | `indexReference: "e"` on all six elements | Example 9 table header reads n_e,i / ν_e,i (600 dpi crop); the sibling Leitz files in this folder use the same flag |
| Glass labels | prose "proprietary Leitz melt; nearest Schott TaF4 / LaFN21", "BaSF6", "SF3 / SF10", "F2", "LaF10" (none resolved; d-line residuals 0.003–0.010 were read as evidence of special melts) | N-LAF21 (Schott), J-BASF6 (Hikari), SF10 (Schott), E-F1 (Hoya), LAF3 (Hoya) as e-line coordinate proxies, supplier unconfirmed | Catalog dispersion evaluated at C′/e/F′: N-LAF21 1.79195 / 47.25 (Δn −0.0003, Δν +0.10); J-BASF6 1.67133 / 41.60; SF10 1.73430 / 28.19 (exact); E-F1 1.63003 / 35.48; LAF3 1.72056 / 47.73. All six elements now round-trip through `resolveCompatibleGlass` at the e-line |
| Close-focus BF (`var["11"][1]`) | 33.306 (extension 3.849 mm; the stored gap actually focuses an object-to-image distance of 744 mm, 1:13) | 33.588 (extension 4.131 mm; object 631.5 mm ahead of r₁, object-to-image 700.05 mm, m = −0.0826, 1:12.1) | Paraxial thick-lens solve with `closeFocusM` 0.7 taken as the object-to-image distance; the old value had measured 0.7 m from the front principal plane. Derived, not published — the patent gives the infinity state only |
| Rear semi-diameters S7 / S8 / S10 / S11 | 8.5 / 9.0 / 10.5 / 12.0 | 10.0 / 10.5 / 12.5 / 12.5 (S9 kept at 10.5) | FIG. 2 profile (top side, page 2 at 300 dpi; axis row 2213; vertices r₁ ≈ 615 px, r₁₁ ≈ 1568 px → 27.3 px/mm at production scale): L1 rim 362 px ≈ 13.3 mm, front doublet 310 px ≈ 11.4 mm, rear doublet 309 px ≈ 11.3 mm, L6 357 px ≈ 13.1 mm, drawn stop half-opening 184 px ≈ 6.7 mm. Stored rear values were 20–25 % under the drawn rims while the front was within 15 %; the flat r₁₀ was drawn 1.5 mm smaller than r₁₁ on the same plano-convex element. r₉ is capped at 10.5 by L5's edge thickness (0.87 mm at 10.5, 0.56 mm at 11.0). FIG. 2 is the generic schematic for all nine examples, so this is figure-guided, not a measurement of Example 9 |
| Header, subtitle, specs, focus description | "MANDLER / ERNST LEITZ CANADA"; SD note claimed ray-trace estimates with 8–10 % clearance; specs used ≈ | subtitle names Ernst Leitz / Mandler, Edwards, Wagner and the FIG. 2 form; header documents the e-line table, the s = 0.50 scale, the derived close focus and the SD basis; `focusDescription` says the 0.7 m state is calculated | As above |

### Checks on the result

- Surface validator: no validation errors; image-circle floor: 0 undersized.
- Exact meridional trace at f/2 to Y = 21.6 mm (ω = 23.36°): axial marginal heights 12.50 / 11.93 / 11.26 / 9.75 / 8.09 / 7.79 / 7.25 / 7.73 / 8.06 / 7.98 / 7.89 mm, all inside the stored sd with at least 16 % margin behind the stop; full-field chief heights 10.79 / 9.43 / 8.36 / 5.11 / 3.93 / 0 / 4.79 / 5.91 / 7.32 / 8.47 / 9.49 mm, all passing. The full-field lower rim ray cannot be launched at all (it would need about 23 mm at r₁), so the corner bundle is mechanically cut by the front element in any case; side vignetting behind the stop fell from 26–75 % to 43–57 %.
- Geometric corner transmission at f/2 (engine vignetting curve, 23.4°): 0.33 before, 0.44 after (relative illumination with cos⁴: 0.23 → 0.31). At the patent's ±22.5° the chief ray reaches Y = 20.73 mm.
- Engine build: EFL 50.015, FOPEN 2, stop radius 7.793, no throw. Probe at focus t = 1: object-to-image 700.05 mm, magnification −0.0826.
- Glass round-trip at the e-line: all six elements resolve to the labelled catalog entries within Δn ≤ 0.0003 and Δν ≤ 0.10.
- Prettier passes on the data file.

### Open limitations

- The patent publishes no clear apertures, and FIG. 2 is a shared schematic whose spacing proportions do not match Example 9; all semi-diameters remain estimates.
- The 0.7 m state is a paraxial unit-focus extrapolation; the patent gives the infinity state only. Leica's published 1:11.5 is not reproduced exactly (model 1:12.1).
- The glass supplier is not named in the patent. The e-line coordinates identify the families with confidence (SF10 exactly), but which vendor's melt Leitz used is unconfirmed, and the modern N-LAF21 stands in for the 1970s LaFN21.
- The patent does not state which example went into production; the Example 9 attribution rests on Leica literature and the FIG. 2 form.
- Production EFL is nominally 50 mm here; if the marketed lens is longer than 50.0 mm the uniform scale would shift slightly, but no patent value supports a different factor.
