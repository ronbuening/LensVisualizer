# Audit Log - Nikon AF-S Nikkor 18-35mm f/3.5-4.5G ED

Patent: US 9,256,059 B2, Example 1

## 2026-09-23 — Rear plate modeled as `rearPlates`

- Replaced the air-equivalent final gap (d27 + 1.90/1.51680 + 1.00) with Example 1's physical rear stack, read from the
  Google Patents text of US 9,256,059 B2 (no local PDF): d27 = 37.70 / 47.12 / 59.88 mm, then plate PT (surfaces 28–29)
  1.90 mm, nd 1.51680, νd 64.20, and BF 1.00 mm to the image. The variable-gap label for 27A is now `D27`, since the
  patent's BF is the 1.00 mm after the plate.
- Glass label N-BK7 (Schott 1.51680 / 64.17; the catalog resolves it as compatible with the printed values).
- Paraxial check against the previous data: EFL and defocus identical at all three zoom stations (the legacy fold was
  exact). Physical track grows by 1.90 × (1 − 1/1.51680) = 0.647 mm, to 139.78 / 134.74 / 136.84 mm; the patent prints
  TL 139.69 / 134.64 / 136.74 mm, an offset of about 0.1 mm at every station that predates this change.

## 2026-09-23 — Track-length discrepancy resolved (source-side)

- Re-read Example 1 from the Google Patents text of US 9,256,059 B2 (no local PDF) and compared every surface `d`, the
  d10 / d27 rows, PT (1.90 mm) and BF (1.00 mm) with the data file: all match. No data change.
- Derived track (Σd surfaces 1–27 + PT + BF): 139.783 / 134.744 / 136.840 mm. Patent TL: 139.69 / 134.64 / 136.74 mm.
  Table sum minus TL: +0.093 / +0.104 / +0.100 mm.
- Paraxial check from the table: EFL 18.498 / 25.077 / 33.994 mm (patent 18.50 / 25.08 / 34.00), image 0.999 / 0.991 /
  0.989 mm behind the plate (patent BF 1.00), so the offset is not a back-focus or plate datum. The resin and cement
  layers total 0.20 mm, so dropping them does not explain it either.
- The same excess of table sum over printed TL (0.093–0.142 mm) appears in all six examples of the patent, so it is the
  source's own TL bookkeeping, not a transcription error. Recorded in the header and analysis as patent value vs derived.

## 2026-10-29 — Original-figure height/lands and fresh glass reinspection

- Directly inspected local `patents/US_9256059_B2.pdf`, Figure1/PDF2 at600dpi and original2560×3300 raster, Example1 media table/PDF45–46, d-line convention/PDF44. All eighteen regions plus PT retain exact source nd/vd. Removed27 unsourced catalog CFg helper values on nine regions;13 catalog curves includingPT are qualified spectral proxies, six resin/cement layers remain unresolved. No source partial-dispersion/APD designation or production supplier is invented.
- S1 continuous clear cap25→27mm; S2 clear20.5 preserved with outer27 land; S5 clear15.2 preserved with outer17 land. Original raster q≈.69±.007 and .80±.010 at edge258/184nativepx; adopted.759/.894 keeps larger clear caps. The full native vertex span suggests frontheight~30mm, whereas local S1curvature fit suggests~27mm; adopted27 conservatively acknowledges the schematic's nonuniform scale (original image310×282ppi). Every exposed/cemented face was checked. No hybrid/cemented interface land is added; tiny near-flat features are unresolved. A convex S20cut trial is rejected by the existing rim-direction contract, rather than bypassing it. No inferred cut is retained.
- Corrected design nominal3.5/4.0/4.5→source3.6/4.15/4.63 (PDF46Fno row), withcatalog marketing3.5/design3.6 and unchanged name/user stopchoices. All printed radii/thicknesses/aspheres/focus gaps remain unchanged; existing source TL mismatch and absent close-focus spacings remain explicit.
- Focused surface/circle pass; W/M/T axial apertures iris-limited within3%; all3 formatcorner stations>=99%. Nine actualSVG states have18finite paths/zero trim, with connected lands and no thin-layer wing. All19 sourcepairs/catalog checks pass; shared dispersion/parity/partial tests3files94pass.
