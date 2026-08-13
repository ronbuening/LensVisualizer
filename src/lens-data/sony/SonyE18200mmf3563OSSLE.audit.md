# Audit Log - Sony E 18-200mm F3.5-6.3 OSS LE

Patent: US 8,553,339 B2, Example 1

## 2026-08-13 - Initial patent-figure, identity, and glass audit

- Reviewed ignored local `patents/US8553339.pdf`, especially Figure 1, against the new data and analysis sidecar.
- Corrected the production correlation and display name from the original SEL18200 to `SONY E 18-200mm f/3.5-6.3 OSS LE` (SEL18200LE). The patent and LE product both use 13 groups / 17 elements and a 0.5 m minimum focus distance; the original SEL18200 uses 12 groups / 17 elements and a larger 67 mm filter.
- Tightened the first cemented pair from 31.0/31.0/28.5 mm to 27.5/27.5/25.3 mm and the following meniscus from 29.0/28.0 mm to 26.0/25.1 mm. The revised envelope follows Figure 1 and fits plausibly inside the LE lens's 62 mm filter thread.
- Retained the patent's approximately 0.35× paraxial telephoto close-state result as a documented correlation caveat because Sony specifies 0.27× for SEL18200LE.
- Glass coverage remains 17/19: every physical glass medium resolves to a trusted curve, while the two unidentified bonded resin layers remain intentionally unmatched. No defensible new catalog type was found for either unpublished resin.

## 2026-08-13 - Screenshot-led diagram and catalog-completeness review

- Rechecked the full wide-state silhouette against Figure 1 and retained the already-corrected SDs; no additional geometry change was justified.
- Replaced optical-media indexes 1-19 with the patent's physical identifiers L1-L17 plus explicit L4r/L15r resin labels. Restored the Figure 1 subgroup tags G3A, G3B OSS, and G3C, and added H1/H2 hybrid-cell annotations.
- Named the resolver-selected catalog equivalents for all 17 physical glass media while explicitly leaving production suppliers unspecified. The two resin layers remain unmatched because the patent does not identify their material.
- Correlated Sony's two-ED production count to L2 and L16, the two patent positions supported by the high-Abbe/ED-class mapping, using `apd: "inferred"`. No patent `dPgF`, APO claim, or resin Sellmeier curve was invented.
- Confirmed the corrected display name `SONY E 18-200mm f/3.5-6.3 OSS LE` and retained the documented SEL18200LE correlation caveat.
