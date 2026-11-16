# Mamiya macro refinement audit — November 16, 2026

## Baseline and source

Exact morning-delivered Mamiya data-file SHA256: eddb1aa53f094e895583ea73fe96c1cf364b6c470f29d9db72dec8b12fe7b183. The refinement preserves identity, glass, radii, semidiameters, all fixed spacings and BFD from that file. Original JP2003185916A E1 Table 1 and Figure 1 visually rechecked; paragraph 0016 explicitly defines WD to the first optical surface. Original Tables 1–5, literal extraction and earlier checkpoint results retained in evidence.

## Fresh refinement

The owner requested correction after the Mamiya was omitted from the preceding Pentax update. Retained D10 and BFD; solved D12 and WD jointly at source −0.5 and −1 to restore paraxial focus and nominal magnification. Exact source-versus-derived table is in the analysis. Both solved WD values round to the original integer distances; D12 corrections are openly modeled adjustments, not verbatim source values. No glass/radius/iris/SD change and no image-plane best-focus optimization.

125 adaptive focus nodes include infinity and two published finite stations. Intermediate D10 motion is an estimate, while D12 is explicitly solved at each node; a 1,000-state sweep has maximum image defocus 0.004880 mm. No intermediate node is falsely labeled published or finite-MTF certified. Strict finite audit passes 2/2, canonical/surface geometry passes, zero trim at 324 states, 41,796 iris-in-air samples and fixed rear-group/image checks pass. Twenty-one geometric reference-spectrum MTF fields converge. Optical provenance, approximate dispersion and inferred rims remain qualified. No retail factory identity claimed.

## Evidence boundaries

Fresh output, scripts and machine-readable reports are distinct from inherited checkpoint results. Reproduction uses the pinned engine snapshot f5b456fec7b69184844078f6ec6b1ac132f8ec58. Full-app regression, compiled viewer/browser QA and deployment are not claimed by these focused checks. No commit, PR, publishing or deployment performed. This replaces the earlier infinity-only Mamiya model; it is not a new lens-family discovery.

## 2026-11-16 — Deployment validation

Checked independently against JP 2003-185916 A (page image of Table 1): 18 radii, 17 thicknesses, nine glasses, the stop row, D10 at all three states and D12 at infinity match. The model gives f 118.864 (118.86), fb 66.106 (66.11), F3.99 and reproduces Table 5. A Phase One/Mamiya lens overview lists the 120mm AF f/4 Macro as 9 elements in 8 groups, 32°, 37 cm, 1:1, which fits this example; no public construction diagram was found.

- Open: D12 at −0.5× and −1× is the package's re-solve (33.674329 / 64.362725), not the printed 33.57 / 64.07. The printed rows are self-consistent with the printed working distances (magnification −0.50007 / −1.0017 from the first surface) and put the zonal real-ray focus on the image plane, as Example 2's rows also do; the re-solve restores paraxial focus but leaves the real-ray best focus 0.2–0.5 mm ahead of the plane. Printed condition (2) is 1.64 for 33.57 and 1.63 for the re-solve. Restoring the printed anchors and re-solving the intermediate nodes against them is the alternative.
- Open: name, key, specs, element types and glass labels are still in package wording; five glasses have exact Ohara rows (S-FPL51, S-TIL27, S-TIL1, S-TIH4, S-LAM55). No `lensMounts` is set. (Closed 2026-11-16 by the cleanup and wording pass below; `lensMounts` stays unset on purpose.)

## 2026-11-16 — Cleanup and wording pass

Text and metadata only; radii, thicknesses, indices, semi-diameters, the stop and every focus keyframe and gap value are unchanged, including the D12 values as delivered.

- Data file: house header comment added. `subtitle` is now "JP 2003-185916 A, Example 1 — floating-focus 1:1 macro for the 645 format; closest in specification to the Mamiya AF 120mm f/4 Macro". `specs` are 9 ELEMENTS / 8 GROUPS, DESIGN f = 118.86 mm, DESIGN F/3.99, ALL SPHERICAL, 1:1 MACRO WITH FLOATING FOCUS. Element `type` set from the signs of R, `role` rewritten per element, `focalLengthMm` added from the thick-lens values (90.8, 127.8, −53.9, −47.0, 53.2, 96.3, 111.1, −40.5, 117.7 mm), `apd: false` throughout. L4 and L5 carry `cemented: "C1"` with a `doublets` entry over surfaces 8–10. `groups` added from the patent: G1 (1–6), G2f (8–10), G2b (11–12), G3 (13–18). `focus.description` and both conjugate `source` strings now state the printed and the modelled D12 and working distances in plain words.
- Glass labels (Δnd / Δνd against the patent's printed values): L1, L5, L6 S-PHM52 (OHARA), 0.00000 / −0.07; L2 S-FPL51 (OHARA), 0.00000 / −0.05; L3 S-TIL27 (OHARA), 0.00000 / +0.01; L4 S-TIL1 (OHARA), 0.00000 / −0.02; L7 S-TIH4 (OHARA), 0.00000 / +0.01; L8 S-LAM55 (OHARA), 0.00000 / 0.00. L9 (1.65100 / 56.2) stays Unmatched: S-LAL54 has these coordinates but does not resolve in the repo catalog. The labelled elements now trace on the catalog dispersion curves; d-line values are unchanged.
- Analysis: rewritten to the house skeleton with a title, the metadata block, group focal lengths, an element table with shapes, focal lengths and glasses, and a focus section that sets the printed rows beside the model's and states the 0.2–0.5 mm real-ray focus offset. Run counts, hashes and process wording removed; the closing section is now "Model Scope and Limitations".
- Engine numbers before and after are identical: EFL 118.86438 mm, F/3.99, half-field 25.4538°, stop radius 11.64075 mm, BFD 66.1057 mm; node 67 EFL 96.6846 mm at −0.5000×; node 124 EFL 81.6400 mm at −0.9999×. The surface audit reports no errors, the aperture audit reports no rim limit (within 3 % of F/3.99), and field coverage is at least 99 %.
- Open: the D12 item in the deployment validation section above still stands.
- Open: semi-diameters are estimates with no patent values; at infinity the full-field bundle exceeds the stored rim by 6–9 % of its side at surfaces 1, 2, 11 and 12 and 1 % at surface 10. Not compared in detail with the rim heights drawn in Fig. 1. (Closed 2026-11-16: see the semi-diameter pass below.)
- Open: `focus.closeFocusM` is stored as 0.37360027737281226 (the model's 1:1 object-to-image distance); 0.3736 would carry the same information.
- Open: no `lensMounts`; the product association is by specification only and no maker construction diagram was found.
- Open: L9 has no catalog glass; its dispersion comes from nd and νd alone.

## 2026-11-16 — Semi-diameter pass against Fig. 1

Source: JP 2003-185916 A, page 6, Fig. 1 panel (a) (infinity), measured at the raster's native 200 dpi. Scale: first vertex at x = 702 px and image plane at x = 1204 px for the 134.28 mm track give 3.738 px/mm (0.27 mm per pixel); the predicted positions of surfaces 6, 10/11, 13, 14 and 18 fall within 2 px of the drawn vertex crossings. The axis is at y ≈ 797 px. Rims were read on the lower side, which carries no group brackets, and on the upper side where it is clean; the two agree within 1.1 mm.

| Element (surfaces) | Before | Fig. 1 | After | Reason |
| --- | ---: | ---: | ---: | --- |
| L1 (1, 2) | 19 | 16.3 | 19 | kept: 18.5 already costs 3.7 points at the corner |
| L2 (3, 4) | 18 | 15.6 | 17 | partway; 17 costs nothing, 16.5 does |
| L3 (5, 6) | 16 | 14.7 | 14.7 | figure |
| L4/L5 (8, 9, 10) | 16 | 15.5 | 15.5 | figure |
| L6 (11, 12) | 17 | 15.8 | 17 | kept: within reading noise, and 16.5 costs 0.7 point |
| L7 (13, 14) | 20 | 16.6 | 17.5 | partway; 16.6 costs a further 2.8 points |
| L8 (15, 16) | 22 | 17.6 | 17.6 | figure |
| L9 (17, 18) | 24 | 21.1 | 24 | kept: any reduction shrinks the engine half-field (25.45° at 24, 24.37° at 22.2) |

Corner illumination at infinity, wide open, by field (0 / 2.7 / 5.5 / 8.2 / 10.9 / 13.6 / 16.4°): before 100 / 100 / 100 / 100 / 100 / 99.6 / 94.9 %, after 100 / 100 / 100 / 100 / 99.8 / 98.3 / 92.9 %. The worst loss is 2.0 points at 16.4°; restoring L3 alone wins back 1.3 points and L8 alone 1.1. The full figure set would have cost 19.5 points.

At the 1:2 and 1:1 nodes the full-field bundle to Y = 34.85 mm clears every changed rim except surface 5 at 1:2 (15.14 mm against 14.7 mm, 3 % of one side of the fan); no surface clips the axial beam or blocks the chief ray at any of the three states. The surface audit reports no errors, the aperture audit reports no rim limit, the image-circle check lists nothing undersized and field coverage stays at 100 % to 34.85 mm. Engine numbers are unchanged: EFL 118.86438 mm, F/3.99, half-field 25.4538°, stop radius 11.64075 mm, and the three patent focus nodes as before. The model sketch at the figure's scale shows the drawn step order (L3 smallest, the doublet and L6 next, then L7, L8, L9 rising).

No metadata changed. Product name: Mamiya's manual-focus lens is the "Mamiya Sekor Macro MF 120mm F4" (D version January 2008; 33°, 40 cm); the later autofocus lens appears in the Phase One / Mamiya lens overview as "120mm AF f/4" (32°, 37 cm) and in a lens database as "Mamiya Sekor D AF 120mm F/4 Macro" (2011). The 2001 patent agrees with the autofocus lens by specification only, about ten years before that lens, so the patent-design name stays and no `lensMounts` is set.

- Open: L1 and L9 remain about 2.7 mm and 2.9 mm above the figure, and L2, L6 and L7 about 1 mm above it, for the light and field reasons in the table.
- Open: corner illumination at 1:2 and 1:1 was checked by meridional bundle heights, not with the full-pupil measure used at infinity.
- Open: no side-by-side composite was made; the model sketch and the figure crop were compared as separate images at the same scale.
