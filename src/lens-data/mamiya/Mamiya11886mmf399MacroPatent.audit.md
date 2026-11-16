# Mamiya macro refinement audit — November 16, 2026

## Baseline and source

Exact morning-delivered Mamiya data-file SHA256: eddb1aa53f094e895583ea73fe96c1cf364b6c470f29d9db72dec8b12fe7b183. The refinement preserves identity, glass, radii, semidiameters, all fixed spacings and BFD from that file. Original JP2003185916A E1 Table 1 and Figure 1 visually rechecked; paragraph 0016 explicitly defines WD to the first optical surface. Original Tables 1–5, literal extraction and earlier checkpoint results retained in evidence.

## Fresh refinement

The owner requested correction after the Mamiya was omitted from the preceding Pentax update. Retained D10 and BFD; solved D12 and WD jointly at source −0.5 and −1 to restore paraxial focus and nominal magnification. Exact source-versus-derived table is in the analysis. Both solved WD values round to the original integer distances; D12 corrections are openly modeled adjustments, not verbatim source values. No glass/radius/iris/SD change and no image-plane best-focus optimization.

125 adaptive focus nodes include infinity and two published finite stations. Intermediate D10 motion is an estimate, while D12 is explicitly solved at each node; a 1,000-state sweep has maximum image defocus 0.004880 mm. No intermediate node is falsely labeled published or finite-MTF certified. Strict finite audit passes 2/2, canonical/surface geometry passes, zero trim at 324 states, 41,796 iris-in-air samples and fixed rear-group/image checks pass. Twenty-one geometric reference-spectrum MTF fields converge. Optical provenance, approximate dispersion and inferred rims remain qualified. No retail factory identity claimed.

## Evidence boundaries

Fresh output, scripts and machine-readable reports are distinct from inherited checkpoint results. Reproduction uses the pinned engine snapshot f5b456fec7b69184844078f6ec6b1ac132f8ec58. Full-app regression, compiled viewer/browser QA and deployment are not claimed by these focused checks. No commit, PR, publishing or deployment performed. This replaces the earlier infinity-only Mamiya model; it is not a new lens-family discovery.
