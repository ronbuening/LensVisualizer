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

## 2026-09-23 — Live diagram review

Source: local `patents/US_8508864_B2.pdf`, Fig. 15 on PDF p. 16, Table 5 and its footnotes on PDF pp. 30–31, and the
focus description on PDF p. 32 (printed col. 23). The local dev page `/lens/leica-summilux-c-100mm-t14` was checked at
infinity and at closest focus, with the element hover cards, the off-axis toggle and the chromatic (COLOR) trace. The
browser pane was not composited for part of the session, so the later checks read the rendered SVG and the inspector
text from the page rather than from screenshots.

### Focus order and direction

Table 5 lists F1 (S0 at 1,000,010 mm, infinity), F2 (1,440 mm) and F3 (696 mm) in that order. The `var` arrays store
[F1, F2, F3] against `focusPositions` [0, 0.5445, 1], so the slider runs from infinity on the left to F3 on the right.
S12 shrinks from 1.810 to 0.800 mm and S14 from 14.200 to 1.300 mm, while S26 grows from 44.800 to 58.709 mm. G1b (L8)
therefore moves 1.010 mm toward the object and G2 moves 13.909 mm toward the object, with the sum of the three gaps
conserved. The patent text on printed col. 23 says both groups move "towards object space" as focus distance decreases.
In the live SVG at 3.155 px/mm, L8 moved 3.2 px left (1.0 mm) and L9–L14 moved 43.9 px left (13.9 mm) between focus 0
and focus 1, and the focus readout showed 89 cm. The order and direction are correct, and nothing was changed.

### Changes

| Item | Before | After | Evidence |
| --- | --- | --- | --- |
| Element `fl` (all 13) | Missing; the hover card showed "FL = —" | Thick-lens d-line values, e.g. L2 +127.898, L8 +72.413, L10 +6666.5 mm | Computed from the stored prescription; they match the focal lengths already quoted in the analysis |
| `apd` on L2, L8 (S-FPL51) and L9, L11 (S-FPL53) | Unset | `"patent"` with an `apdNote` | Printed col. 22 names SFPL51 and SFPL53 as "abnormal dispersion" glasses. Its element numbers do not match Table 5, so the table's placement of each glass is used |
| `nC` / `nF` / `ng` (all 13) | OHARA catalog line indices | Removed | Table 5 publishes no line indices. The stored catalog values took precedence over the catalog Sellmeier fit, and the inspector labelled them "Measured line indices". The COLOR trace now reports "Sellmeier" for every element. Catalog `dPgF` is kept |

### Re-checked and retained

- Element types against R signs: L2, L3 and L8 are biconvex; L4, L5 and L12 are biconcave; L6, L9, L10, L11 and L13 are
  positive menisci, and L10 is only weakly positive (f ≈ +6.7 m); L7 is a negative meniscus. These agree with the
  patent prose on printed col. 22.
- Labels: the patent numerals L2–L14 are used as diagram labels. The D1, D2 and D3 doublet ranges, the G1a, G1b and G2
  group ranges, the stop at S15 before L9, and the aspheric markers on 7A and 22A all match Table 5 and Fig. 15.
- Semi-diameters: these are the Table 5 half-diameters, unchanged from the first pass. The live silhouette matches
  Fig. 15: L2 is the tallest rim, the L4 to L7 block is narrowest, and L8 and L9 widen again around the stop.
- Glass: glasscheck resolves all 13 labels as OHARA catalog glasses whose nd/νd match the patent codes.
- The exact trace puts the 14.0 mm image height (28 mm diagonal) at ω = 8.05°, which matches the patent's full field.
  The surface validator reports no errors, and the image-circle check passes.
- No console errors appeared. LoCA reads 29 µm at infinity with the old line indices and 33 µm at F3 with Sellmeier.

### Open limitations

- The stop conflict between Table 5 (S15) and the prose (S22) remains unchanged. So does the difference between the
  patent F3 distance (0.889 m) and the marketed 0.99 m close focus.

## 2026-09-25 — MTF image-plane census

Classification: small published-plane/paraxial mismatch, with no newly identified transcription error.

Visually inspected local `patents/US_8508864_B2.pdf`, PDF pp. 30–31, Example 3/Table 5 including its continuation and aspheric footnote. All S3–S26 radii/spacings and 13 named OHARA glass assignments match; nd/vd values retain the named-glass interpretation of the rounded codes, not unpublished melt measurements. No scaling. All K and A4–A14 terms at S7/S22 match the existing disclosed interpretations of malformed S7 A4 and S22 A8. The truncated S23 glass code and stop-location prose conflict were already documented and are not silently changed.

F1 uses D12=1.810, D14=14.200 and D26=44.800. F2 and F3 arrays also match (1.313/7.672/51.824 and 0.800/1.300/58.709). The only plate is the front S1–S2 S-BSL7, 3 mm plus 2 mm air to S3, with zero paraxial effect at infinity. No rear plate or folded distance: S26 directly precedes image S27. The source labels F1 infinity while using a finite 1,000,010 mm object distance; its approximately +0.0098 mm finite-distance correction is relevant but insufficient to remove the −0.036203 mm infinity residual.

Independent matrix: EFL 99.242551936 mm (the prose says substantially 100 mm), BFL 44.763797375 mm versus printed 44.800. Offset remains **−0.036202625 mm**, exceeding the 0.022954016 mm limit. The source discusses full-aperture, multi-field polychromatic MTF but does not identify the tabulated plane as a Gaussian or designer-best-focus plane. A reference-index on-axis geometric diagnostic (812 rays, grid 32, 10/20/40 lp/mm) selects −0.007622504 mm, score 0.966085 → 0.993739. Finite-aperture/spectral compromise is plausible; the diagnostic does not establish it. Preserve all published values and disclosed source emendations; Section E row deleted. No changelog entry.

Validation: focused runtime/paraxial check; full corpus gates at the ten-lens checkpoint.
