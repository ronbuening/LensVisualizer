# Audit Log - Fujifilm XF 50-140mm F2.8 R LM OIS WR

Patent: US 2017/0090163 A1, master lens / Table 1

## 2026-05-19 - Missing-Sellmeier queue audit

### Phase 1 - Glass corrections

| Element / surface | Field | Before | After | Justification |
|---|---|---|---|---|
| L22 / S9 | `glass` | `Barium-flint class (622 532 - no current-catalog match; specialty or internal Fujifilm melt)` | `S-BSM22 (OHARA)` | Patent Table 1 gives nd=1.62230 and vd=53.17. Public OHARA AGF/refractiveindex.info data for S-BSM22 is code 622532 and round-trips the stored pair. |

### Phase 2 - Patent evidence

- Local patent file: `patents/US20170090163A1.pdf` is present but gitignored; rechecked it via local text extraction and cross-checked the public Google Patents HTML.
- Confirmed the master-lens Table 1 row 9 for L22: nd=1.62230, vd=53.17.
- No radius, spacing, zoom-gap, stop, mount, or format edits made.

### Phase 3 - Catalog-search disposition

- Added OHARA S-BSM22 to `glassCatalogData.ts` from the public OHARA Zemax / refractiveindex.info coefficient row.
- This supersedes the earlier "specialty or internal Fujifilm melt" interpretation for L22.

### Phase 4 - Analysis sync

- Updated the glass inventory and L22 note to identify S-BSM22 as the coefficient-backed match.

## 2026-09-23 — First-added diagram audit, lens 76

Source: local `patents/US20170090163A1.pdf` (21 pp., 300 dpi CCITT raster). Front page p. 1; ¶0038–0039 p. 15;
Table 1 (master lens) pp. 16–17; Table 2 p. 17; FIG. 2 p. 3 (sheet 2/11, axis vertical, object at the bottom,
master lens drawn at the wide end with the Example 1 converter attached).

### Retained after re-reading the source

- Stored embodiment: master lens ML, which ¶0038 says is the same in Examples 1–4. All 40 rows of R, d, nd, νd
  and the stop position match Table 1; no aspheres. Table 2 DD[7]/DD[15]/DD[20] match at all three stations.
- Paraxial EFL 51.505 / 83.685 / 135.982 mm against 51.52 / 83.69 / 135.96. Real-ray ω for Y = 14.2 mm is
  15.26° / 9.38° / 5.77° against the patent's 2ω/2 = 15.3° / 9.4° / 5.8°.
- Zoom motion: ¶0038 says G1 and G4 are fixed and G2 and G3 each move toward the image side. Table 2 agrees:
  G2 +18.15 then +11.62 mm, G3 +13.80 then +4.36 mm (W→M→T), both monotonic; gap sum 43.68/43.68/43.67 mm.
  The "inner zoom / fixed G1, G4" wording in the header and analysis is supported. The live group-movement
  overlay shows the same (max travel 29.78 mm).
- Patent fields (US 2017/0090163 A1, Tetsuya Ori, Fujifilm Corporation, 2017), 23 elements / 16 groups,
  `lensMounts`, `imageFormat`, `closeFocusM` 1.0 m (production MFD) retained.
- Focus: the patent publishes infinity data only and does not name the focus group. Identical inf/close gaps
  retained, so focus is not modeled (the viewer already shows the focus control as "Not modeled").
- Glass: every stored nd/νd equals Table 1. L24 (1.84661 / 23.88) has no exact catalog match; the S-TIH53
  label (1.84666 / 23.78) is retained as OK-compatible.

### Changes

| Field | Before | After | Evidence |
|---|---|---|---|
| Surface 40 `d` | 29.4067 | 29.4071 | 26.4281 + 2.85/1.51680 + 1.10 = 29.4071 (Table 1 rows 40–42; patent Bf 29.41 air-equivalent). The paraxial BFD is 29.360/29.358/29.373 mm, so the published image plane sits 0.03–0.05 mm behind paraxial focus (retained). |
| `nominalFno`, `fstopSeries[0]` | 2.8 | 2.88 | Table 2 FNo. 2.88 / 2.89 / 2.88. The stop and G4 are fixed, so one iris gives f/2.88 at every station (engine radius 12.251 mm; paraxial 12.14 mm). No zoom iris schedule added. |
| `maxFstop` | default 16 (series listed f/22) | 22 | Production minimum aperture f/22. |
| STO `sd` | 12.2 | 12.25 | Record of the engine f/2.88 iris radius. |
| Surface 25 `sd` (L42 rear) | 10.0 | 10.4 | CLIPS-AXIAL: the f/2.88 axial ray needs 10.29 mm. FIG. 2 draws L42 at ≈12.0 mm, but L43's front (R −50.72) is 1.8 mm behind L42's rear (R 84.56); at 10.4 mm only ≈0.07 mm of air remains. |
| `gapSagFrac` | default 0.90 | 0.97 | Needed so that the 25→26 air gap passes at the 10.4 mm rim the axial ray requires. |
| Surface 33 `sd` (L47 rear) | 13.1 | 10.9 | FIG. 2 draws L45/L46/L47 in one flat-edged box 10.7–10.9 mm from the axis. The stored value was 20 % larger; the new value keeps 2.8 mm over the axial ray (8.14 mm). |
| L24 `type` | Biconvex Positive | Positive Meniscus | R12 +26.82, R13 +128.91. |
| L25 `type` | Negative Meniscus | Biconcave Negative | R14 −31.56, R15 +268.89. |
| Cemented groups | `T1` "triplet" L23+L24; D3–D6 | D1–D7 in order | L25 is air-spaced (d13 = 3.13 mm), so L23+L24 is a doublet. Roles and analysis wording corrected ("triplet" → doublet). |
| Element `fl` (all 23) | thin-lens values (e.g. L411 −91.8, L48 +27.5, L41 +38.0) | thick-lens values (L411 −96.1, L48 +28.3, L41 +39.1 …) | Thick-lens trace of each element in air; analysis §6 now quotes the same values. |
| L12, L21, L32, L42, L49 `glass` | multi-name labels resolving to FCD1 / N-KZFS8 / N-KZFS5 / N-FK5 | Ohara names | Exact catalog matches: S-FPL51 1.49700/81.55, S-NBH8 1.72047/34.71, S-PHM52 1.61800/63.33, S-NBH5 1.65412/39.68, S-FSL5 1.48749/70.24. |
| Subtitle, header | "Master Lens of Example 1"; SD note said FIG. 2 draws L11 at ~24–26 mm; "G2 and G3 move together" | Master lens ML, Tables 1–2; FIG. 2 rim measurements; separate G2/G3 travels | FIG. 2 measurement below. |

FIG. 2 measurement: scale 11.58 px/mm at 300 dpi, from the 544 px distance between the surface 1 and surface 15
vertices (46.98 mm). Surfaces 1–36 all cross the axis within about 2 px of the wide-end prescription. Rims read
on the clean right-hand side (mm): L11 30.0, L12 27.5, L13 27.4, L14 26.6, L21 17.2, L23/L24 14.4, L31 and L32
12.9, L33 14.7, L41 14.3, L42/L43 ≈ 12.0, L44 rear 10.7, L45–L47 box 10.9, L48 13.3, L49 13.0, L410 14.8,
L411 14.7. Apart from surfaces 25 and 33, stored values are within about 15 % and are kept. The largest
retained gaps are L11 front 26.45 against 30.0 (−12 %) and L31 14.9/15.25 against 12.9 (+15–18 %). The flat boxes
drawn around L22's concave rear and L25's concave front (19.2 and 14.1 mm) are mounting flats. Those surfaces
are limited by the neighbouring air gaps. The dashed stop symbol (≈12 mm half-length) marks position only
(¶0038).

### Checks on the result

- Surface validator: no errors at all three stations with `gapSagFrac` 0.97. Image-circle check: 0 undersized.
- Exact trace at Y = 14.2 mm, f/2.88: no CLIPS-AXIAL or BLOCKS-CHIEF at any station. The corner bundle is
  vignetted mainly by G1 (≈80 % per side at the front rims), as in the earlier data.
- Engine: FOPEN 2.88 at all three stations, stop radius 12.251 mm, f/2.88–f/22 slider.
- Live (headless): production baseline at wide infinity. Local checks at wide, middle, tele infinity, tele
  closest focus (identical to infinity; "Not modeled") and the zoom-movement overlay. The only visible
  silhouette change is the smaller L47 rear rim. Off-axis rays were not checked because they need a click.

### Open limitations

- Focus travel and the OIS group are not in the patent and are not modeled.
- Semi-diameters are estimates from the ray trace and FIG. 2; the patent publishes no effective diameters.
- L24's glass has no exact catalog match (nearest S-TIH53 / S-NPH53, Δnd 5×10⁻⁵).
