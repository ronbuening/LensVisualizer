# Nikon AF-S Nikkor 24–85mm f/3.5–4.5G ED VR audit

## 2026-09-29 — Initial repository integration

**Evidence:** exact local `patents/JP2011221421A.pdf`, Example 4, Table 13 on pp. 19–20 and Figure 7 on p. 25.
The figure was screened at 600 dpi and visually checked at 300 dpi. Numerous surface-number leader lines contaminate
automatic ENV/RIM readings in the rotated crop; those readings are not valid enlargement evidence. Direct optical
outlines agree closely with the modeled rims, so all semi-diameters were retained. In particular the flat outer blank
of CL1 and group brackets are not clear-aperture targets. Surface, field, and renderer checks support retaining the rims.

**Root cause:** the initial metadata test failed because `patentMetadata.test.ts` requires romanized
`patentAuthors`. The new file used 山本 浩史. Replaced it with the catalog's existing `Hiroshi Yamamoto`, retaining the
Japanese spelling in the analysis bibliography. No metadata validator or optical-engine behavior was weakened.

**Glass:** all Table 13 material coordinates checked. L33's `498825` label had no catalog-code match, although J-FKH1
already supplies compatible coefficients (1.49782/82.57 versus source 1.49782/82.52). Named it explicitly as a
supplier-neutral ED-class spectral proxy; coverage improves 15/18 → 16/18 modeled regions. Both 1.53610/41.42 thin
regions remain unmatched. Exact-coordinate searches found patent prescriptions but no named, coefficient-backed
commercial material. Their chemistry and production method remain unspecified. No new catalog curve is justified.
The remaining 15 regions already use compatible curves; no APD flag or source line indices were invented.

**Display:** retained ED VR, distinct from the original IF-ED 24–85mm. The selected production correlation remains
unconfirmed, and the patent's f/5.78 tele calibration is not presented as the production f/4.5 specification.

## 2026-09-29 — Local diagram follow-up

**Local diagram review:** re-compared the live wide/tele silhouettes with Example 4 Figure 7 (PDF p. 25), excluding
surface leaders and the front mechanical blank. Retained the SDs: the remaining optical-rim differences do not provide
strong evidence for a further change. Compact L21a/L21b and L51a/L51b diagram labels now match the material-region
names; inspector descriptions still distinguish thin and bulk regions without asserting resin chemistry.

**Glass-family labels:** corrected 816466, 835427 and 804466 from lanthanum-crown to lanthanum-flint class,
consistent with their compatible LAH/TAF/LASF/ZLaF catalog families. Removed crown/flint specificity from 773496
and 806409, whose compatible candidates span different supplier families. These are class descriptions, not source
composition identifications; the patent coordinates and runtime curves are unchanged.

**Motion:** retained the three source zoom stations in wide-to-tele order. Relative to the image plane, G1, G3, G4 and
G5 move objectward; G2 first moves imageward and then reverses. The live chart preserves G1–G5 order. Focus remains
disabled at infinity: the patent describes objectward G2 focusing but supplies no numeric focus travel. The production
0.38 m minimum distance is not presented as a simulated endpoint.

**Glass and color:** L33 now receives inferred APD color from its compatible J-FKH1 curve (catalog dPgF approximately
+0.0337), consistent with the single-ED production correlation. It is not a source-measured partial dispersion or proof
of melt identity. Coverage remains 16/18 regions. Neither 1.53610/41.42 thin layer has a supported public coefficient
source or established chemistry, so both remain explicitly unresolved.

**Assignee:** the exact patent front page lists 株式会社ニコン, already represented by the canonical Nikon Corporation.
The catalog keeps Nippon Kogaku K.K. as the historically distinct predecessor linked to the same corporate family;
no duplicate assignee spelling in this batch requires consolidation.

## 2026-10-29 — Original-figure height/land and fresh glass reinspection

- Directly inspected local `patents/JP2011221421A.pdf`, Example4 Figure7/PDF25 at600dpi plus native300dpi raster, Table13/PDF19–20, d-line convention/PDF12, and native Figure8/PDF25. All18 source nd/vd pairs retained;16 actual resolver curves are qualified spectral proxies, two1.53610/41.42 thin regions remain unresolved without guessed chemistry. No CFg/partial fields invented; existing L33 inferred ED role remains a qualified correlation.
- S6A/S7 continuous caps12.8→14.6mm and S8 cap10.2→11.0mm with outer14.6 land restore the connected L21 hybrid body. Native first/last span~570px/85.88mm⇒6.64px/mm; body/cap radii~97/73px give q≈.75±.018, adopted.753. Every convex/concave face and bonded boundary was checked; no additional independently resolved exposed land warrants clipping. Broad front blank, surface leaders, and brackets are excluded. ActualSVG verifies no detached wing. Source S6A coefficients unchanged; new14.6mm departure−.262016111mm, rimangle5.86419°, synchronized publicly.
- Fresh Figure8 confirms FNO3.50/5.00/5.78, retaining the explicit Table13 3.60/5.80 discrepancy and existing plot calibration. No focus/control/prescription/tolerance changes.
- Surface/circle pass; three axial aperture stations iris-limited within3%; three formatcorners>=99%. Nine actualSVG states have18finite paths/zero trim and finalraster inspected. All18 sourcepairs/catalog checks pass; shared dispersion/parity/partial tests3files94pass.
