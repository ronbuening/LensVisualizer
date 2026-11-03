# VOIGTLÄNDER SKOPARON 35mm f/3.5 — audit log

Pinned baseline 9128e249e492fe49eb032df61aa0ffb60d8e1d15. Native geometry, inferred caps and stop hypotheses were frozen before tracing; source values and fixed infinity plane unchanged. See same-stem analysis for precise source differences and field qualification. Scientific receipts are evidence/native-geometry.json, native-pupils.json, skoparon-diffraction.json and analytic-failure-witnesses.json in the private reproducibility archive. Corpus/build/viewer outcomes belong to the final batch report; this scientific receipt does not predeclare those later gates. (Closed 2026-11-03: deployment validation recorded below.)

No finite law, glass substitution, contrast-driven cap or focus adjustment. (Superseded 2026-11-03: catalog glass labels, the S6 rim and a static 0.7 m close focus were set; see below.) Rejected stop proposals and 104 original raw failures are preserved across the trio, with separate analytical witnesses. This is Grade B probable patent-family research, not a factory prescription or continuum-validated MTF measurement.

## 2026-11-03 — Deployment validation and cleanup

Source re-read: US 2,746,351 Table 2 (PDF page 6) and Fig. 4 (sheet 4) were read from a 300 dpi render of the scan. All 27 printed values (9 radii, 5 glass thicknesses, 3 air spaces, 5 nd, 5 νd) match the file after ×35 scaling, with no mismatches. The stop split preserves a3 = 1.98765 mm, and G = 0.69367 equals the sum of the printed thicknesses. The transcribed rows reproduce the patent's thin-lens component focal lengths (F = 100: −535 / +45.7 / −33.2 / +60.7 mm) as −534.0 / +45.7 / −33.2 / +60.7 mm. Front page: filed March 3, 1953 (serial 339,953); German priority March 5, 1952; patented May 22, 1956; A. W. Tronnier, assignor to Voigtländer A.G., Braunschweig. The German counterpart DE 1 024 730 (filed March 5, 1952, published February 20, 1958) carries the same Zahlentafel 2 (Google Patents record).

First order: a paraxial trace of the normalized table gives f = 1.000039 (patent 1.000). The model gives EFL 35.0014 mm at f/3.40 (Table 2: 1:3.4, effective aperture 0.294 f), with a computed back focus of 32.280 mm (none printed) and a track of 56.558 mm. The 31.5° half-field is Voigtländer's 63°; the patent prints no field. Real-ray LSA is +0.87 / −0.04 / −0.27 / −0.23 mm at pupil 1 / 0.85 / 0.7 / 0.5, which does not suggest a misprint. The patent has no aberration plots.

Maker comparison: the Wikipedia Prominent lens table lists the Skoparon 35 mm f/3.5 as five elements in four groups, retrofocus, citing US 2,746,351. The package cites Voigtländer literature for five elements, about 63° and availability from the second half of 1953: the Prominent lens manual, The Prominent and its System (Pacific Rim 00599) and the 1953 brochure (Pacific Rim 00702). Those PDFs were not re-read. Table 2 is the only five-element, four-group example; Table 1 has four elements at f/4.0, and Figs. 1 and 3 have no tables. Fig. 4 is labelled f/3.5. The Bessamatic Skoparex file (US 2,927,506 Example 1, six elements in five groups) is a different design; no duplicate exists.

Fields changed, data step:
- S6 sd 5.6 → 4.85 mm. The L3 rear face had crossed the stop plane above 4.92 mm. The full bundle needs 4.72 mm, and geometric transmission is unchanged at every field (77.2% at 31.5°).
- `focus.closeFocusM` 1e15 → 0.7: a retailer figure, static, no gaps, with a new `focus.description`.
- `groups` added: I (S1–S2) and II (S3–S9). Doublet D1 unchanged.
- Glass labels were set by the coordinator: FK3, N-SSK5, F5 and J-BAF3 as nearest catalog rows, LAC13 as a catalog equivalent.

Fields changed, wording step:
- Data file: header comment, subtitle, specs (5 ELEMENTS / 4 GROUPS, DESIGN f = 35 mm, DESIGN F/3.4, ALL SPHERICAL) and the five element roles.
- Analysis: run-together text fixed; MTF and pupil-count tables, process wording and cross-lens text removed; catalog glass names, a plain stop and rim description, a scope section and URL sources added.

Checks after both steps: audit:surface OK; audit:aperture within 3% of f/3.4, with no rim or iris failures; clearap shows no axial clipping or chief-ray blocking; image circle 0 undersized; field coverage 98%, limited by the declared field.

Open: Fig. 4 draws the rims about 7–10% smaller than the model (about 13.3 / 5.6 / 5.4 / 4.9 mm). The model rims were kept because the drawn sizes cut edge transmission to about 57%.

Open: the focusing mechanism (Prominent body or a ring on the lens) is unconfirmed. The Voigtländer lens manual would settle whether unit focus to 0.7 m can be authored; derived unit focus would extend the back focus by 1.957 mm.
