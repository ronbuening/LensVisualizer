# Audit Log - Nikon AF-S NIKKOR 500mm f/4E FL ED VR

Patent: JP 2015-215560 A, Example 1, Fig. 1 (PDF page 18)

## 2026-08-16 - Screenshot-led patent figure and metadata audit

### Semi-diameters

- Compared the current diagram directly with Fig. 1. The large two-fluorite front section, smaller G1 rear elements, compact G2, stop gap, and G3a/G3b/G3c rear train follow the source silhouette.
- Dense leaders and group brackets make the automated rim screen unreliable on several thin rear elements. Zoomed visual comparison found no strong evidence for an SD change above the approximately 25% threshold.
- No SD was changed.

### Materials, labels, and movement

- Retained the official two-fluorite and three-ED element counts. L11/L12 are tagged fluorite and L15/L32/L35 carry inference-qualified ED tags.
- Resolved patent coordinate `553551` to the exact-coordinate J-KZFH4 catalog curve while explicitly retaining its post-filing status and declining to assert it as the historical glass identity.
- Restored the source group labels G2 and G3b while keeping focus and VR roles in metadata.
- Confirmed published G2 travel is 13.898 mm imageward from infinity to the near endpoint. This prime lens has no zoom travel.

## 2026-09-23 - Inventor romanization

- The JP 2015-215560 A front-page continuation names 三輪 哲史 at Nikon, the same Nikon inventor as the US front pages of US 2010/0220400 A1, US 2018/0031811 A1, and US 2021/0026133 A1, which all publish `Satoshi Miwa`. Normalized the inventor from Tetsushi Miwa to the corpus-canonical Satoshi Miwa in lens metadata and analysis prose.

## 2026-10-29 — Fresh F-mount source, rim, and glass reinspection

- Directly inspected original `patents/JP2015215560A.pdf`: Fig. 1 on PDF p. 18 at 600 dpi (upright full-section crop), Table 1 on pp. 9–10, and the d-line definitions in ¶0041 on p. 9. Every active convex/concave face and cemented boundary was checked. The air-facing curves meet their drawn rims without a separately resolved flat concave-end land; no extension or inferred cut is added. Cemented diameter steps are retained as a representational limitation. Source radii, spacings, published focus rows, existing FLG omission/rear normalization, SDs, and gap-sag setting remain unchanged.
- Freshly checked all **16 active nd/vd pairs** against the prescription, separately from the omitted protective FLG (1.51680/63.88, source θgF 0.54). All source pairs are retained. Table 1 actually publishes θgF for all active media, but only to **two decimals**: L11/L12/L14/L15/L23/L32/L33/L35 0.54; L13/L34/L36/L37 0.56; L21 0.58; L22/L31 0.63; L38 0.59. Restored these printed centers as `dPgF = θgF − (0.6438 − 0.001682νd)`, with **±0.005 uncertainty before and after conversion**. Removed 48 catalog-only C/F/g index copies and replaced 16 catalog-only partial-dispersion copies. Extra conversion digits carry no extra source precision; finer catalog differences do not establish or reject an identity.
- Retained inference-qualified two-fluorite/three-ED production correlations. L23's source condition (5), using its own 0.0016821 coefficient, gives −0.011166753 ±0.005 and supports the source design-property qualification without identifying a material. Its current J-KZFH4 curve remains explicitly post-filing. All 16 active elements resolve to compatible curves; L33's annotation now matches the actual HOYA BACD15 coordinate proxy rather than the unavailable J-SK15 label. Updated all affected current public glass descriptions/table and removed the stale omission-policy assertion.
- Actual verification: focused surface audit passes; image-circle audit checks all three candidates with zero undersized/skipped. Native SVG output was inspected at nine focus/zoom states per lens (27 total), with zero renderer trims. Current resolver/catalog consistency passes; the shared dispersion and partial-dispersion suites pass 93 tests. No clear-cap change required an aperture recalibration.
- Additional direct source check: ¶0064 on PDF p. 16 expressly permits a configuration without the front protective filter glass (「これを備えない構成としてもよい」); ¶0031 p. 7 calls its inclusion preferable and ¶0035 p. 8 includes it in Example 1. The omission is thus source-permitted, while the active rear-focus normalization remains a disclosed model choice. Source FLG parameters are usable (Table 1 p. 9: R1 1200.37020, R2 1199.78950, thickness 5.000 mm, following air 1.000 mm, nd/vd 1.51680/63.88, θgF 0.54). No geometry is changed.
