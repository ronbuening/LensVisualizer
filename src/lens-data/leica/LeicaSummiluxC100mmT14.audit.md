# Patent and glass audit

## 2026-09-23

Source: local `patents/US_8508864_B2.pdf`: front page (inventor Iain A. Neil, assignee ACM Projektentwicklung GmbH,
granted Aug. 13, 2013), Fig. 15 on PDF p. 16 (sheet 14), and Table 5 with its aspheric footnote on PDF pp. 30–31. No
scale factor (s = 1.0).

Prescription spot check: every Table 5 row S3–S26 (R, separation, glass code, aperture half diameter), the F1/F2/F3
spacings for S12, S14 and S26, and both aspheric coefficient sets match the data file. The two coefficient corrections
already recorded in the header also hold on the rendered page: S7 A4 `-0.1.071 × 10^-05` becomes −1.071e−6, which
matches the other entries' `0.xxxx × 10^n` pattern, and S22 A8 `0.3184510^-11` becomes 3.1845e−12. The footnote uses
the standard conic form `1 + (1 − (1 + K)c²R²)^½`, so K is stored unchanged. The paraxial F1 EFL is 99.243 mm and the
BFD is 44.764 mm, against the stored 44.800 mm last gap. The patent gives group focal lengths of −133.05, +72.21 and
+78.704 mm; the model's d-line values are −133.594, +72.413 and +78.983 mm.

### Semi-diameters

Table 5 publishes an "Aperture Half Diameter" for every surface, and the file uses those values verbatim. They are
table truth and take precedence over the figure. Fig. 15 was still measured at 300 dpi as a shape check. The axis is at
x = 1146 px. The L2 rim is 381 px from the axis on both sides. The S3–S26 vertex span of about 1540 px over 143.449 mm
gives about 10.7 px/mm, which agrees with the L2 rim divided by its 35.58 mm value. The drawn 25 mm scale bar is
294 px, or 11.8 px/mm. It is not used, because it disagrees with the drawing's own axial span.

| Surface(s) | Stored SD (mm) | Fig. 15 (mm, ≈10.7 px/mm) | Result |
| --- | --- | --- | --- |
| 3 (L2) | 35.58 | 35.6 (reference) | Retained |
| 5 (L3 front) | 30.85 | ≈30.0 | Retained (−3%) |
| 7A (L4 rear, asphere) | 21.10 | ≈19.7 | Retained (−7%); axial marginal ray reaches ≈21 mm here at f/1.3976 |
| 13 (L8) | 26.32 | ≈26.2 | Retained |
| 16 (L9) | 25.27 | ≈24.1 | Retained (−5%) |
| 18 (L10) | 23.23 | ≈22.2 | Retained (−4%) |
| 25/26 (L14) | 22.26 / 22.40 | ≈20.9 | Retained (−7%) |

No surface differs by more than about 7%, and every value is a published patent value, so no SD was changed. The flat
flanges drawn around L4–L7 and L10–L12 are mounting annuli and were excluded. STO keeps the published S15 radius of
25.79 mm. The engine derives the f/1.3976 working iris radius as 23.95 mm.

The exact meridional trace confirms that the axial beam is limited by the published apertures. An entry height of
33.75 mm reaches 20.38 mm at 7A and 22.76 mm at the stop, so the extrapolated f/1.3976 beam (entry ≈35.5 mm) fills 7A's
21.10 mm half-aperture and S3's 35.58 mm. Above 34 mm entry, the scratch clear-aperture probe's Newton intersection does
not converge on the K = +0.3518 asphere 7A. This is a tool limitation, not a clip. The engine's own build and the
surface validator raise no error: edge thickness, rim slope and gap intrusion pass under the documented
`gapSagFrac = 0.98`.

### Glass

All 13 labels resolve to OHARA catalog glasses whose nd/νd match the Table 5 codes: S-FPL51, S-LAM2, S-NBM51, S-LAM55,
S-NBH8, S-FPL53, S-NPH1 and S-LAH65V, with Δνd ≤ 0.02. The patent states that the glasses are available from OHARA.
Coverage is 13/13, so no relabel was needed. The retained source corrections are L13's code "80822" → 808228 (S-NPH1)
and SLAH65 → S-LAH65V (804466). The patent prose assigns SFPL51/SFPL53 to different element numbers than Table 5
(for example, "L16" and "L4, L11, L12 and L13"); the table governs.

### Metadata

`imageFormat` was previously unset. It now uses the canonical `35mm-cinema` id (22 × 16 mm, 27.2 mm minimum
diagonal). The patent's stated 28 mm image diagonal covers this format, and the image-circle floor check passes. The
marketed 33 mm Super 35 circle has no separate canonical id. `lensMounts` stays unset because the taxonomy has no PL
mount id. The display name "LEICA SUMMILUX-C 100mm T1.4" matches the SUMMILUX-C product naming and the sibling 40 mm
file. The key is unchanged.

### Open limitations

- The live localhost view could not be checked in this pass because the browser pane was unavailable.
- The Table 5 stop (S15) and the prose iris position (S22) still conflict; the table and Fig. 15 govern, as before.
- The patent F3 object-to-image distance is 0.889 m, while the marketed close focus is 0.99 m. Both remain documented
  separately.
