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
- Open: name, key, specs, element types and glass labels are still in package wording; five glasses have exact Ohara rows (S-FPL51, S-TIL27, S-TIL1, S-TIH4, S-LAM55). No `lensMounts` is set.
