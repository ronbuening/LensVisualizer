# Semi-Diameter Audit Queue

Work list for the semi-diameter / cross-section audit. Follow
[patent-figure-sd-audit-procedure.md](patent-figure-sd-audit-procedure.md) for each row; the completed first pass is
written up in [patent-figure-sd-audit.md](patent-figure-sd-audit.md).

Take **Section A top-down** — those rows have physics behind them. Section B is figure-evidence only and is lower
value per hour.

Status values: `todo` · `in progress` · `done` · `blocked (reason)` · `no change (reason)`.

## Section A — surfaces below the image-circle floor

Regenerate this table at any time:

```bash
npm run audit:image-circle -- --markdown
```

A surface listed here cannot pass a corner ray to its own format. Rows marked **wide** have a half-field past ~42°,
where the script's exit-pupil approximation stops being trustworthy — symmetric ultra-wides genuinely do have small
rear elements, so those need a real chief-ray trace before anything is touched, and are parked at the bottom.

| Lens | File | Patent | In `patents/` | Surfaces below floor (sd < floor) | Worst | Status |
|---|---|---|---|---|---|---|
| CARL ZEISS JENA BIOGON 35mm f/2.8 (pre-war) | `carl-zeiss-jena/ZeissBiogon35mmf28Prewar.data.ts` | US 2,084,309 | yes | 11 (12.40 < 15.19) | 2.79 mm | todo |
| NIKON NIKKOR Z 50mm f/1.8 S | `nikon/NikonNikkorZ50f18S.data.ts` | JP WO2019/220618 A1 | yes (`WO2019220618A1.pdf`) | 25 (18.50 < 19.05), 26 (18.50 < 20.65) | 2.15 mm | todo |
| LEICA SUMMILUX 28mm f/1.7 ASPH. (Leica Q) | `leica/Leica28mmf17.data.ts` | US 2016/0266350 A1 | yes | 21A (15.50 < 16.95) | 1.45 mm | todo |
| OLYMPUS F.ZUIKO 35mm f/2.8 (Olympus XA) | `olympus/OlympusXAZuiko35mmf28.data.ts` | US 4,235,521 | yes | 11 (7.40 < 8.05) | 0.65 mm | todo |
| RODENSTOCK GRANDAGON-N 90mm f/4.5 | `rodenstock/RodenstockGrandagonN90mmf45.data.ts` | DE 2444954 A1 | yes | 11 (20.20 < 28.85), 12 (25.20 < 33.46) | 8.65 mm | todo — **wide** |
| SCHNEIDER SUPER-ANGULON 75mm f/5.6 | `schneider-kreuznach/SchneiderSuperAngulon75mmf56.data.ts` | US 3,376,091 | yes | 11 (17.00 < 22.76), 12 (18.50 < 26.23) | 7.73 mm | todo — **wide** |
| RODENSTOCK GRANDAGON-N 75mm f/6.8 | `rodenstock/RodenstockGrandagonN75mmf68.data.ts` | DE 26 35 415 B1 | yes | 8 (10.60 < 12.33), 9 (15.80 < 23.20), 10 (19.00 < 25.37) | 7.40 mm | todo — **wide** |
| RODENSTOCK GRANDAGON-N 65mm f/4.5 | `rodenstock/RodenstockGrandagonN65mmf45.data.ts` | DE 2444954 A1 | yes | 11 (14.40 < 21.64), 12 (18.00 < 25.09) | 7.24 mm | todo — **wide** |
| CARL ZEISS HOLOGON 15mm f/8 | `carl-zeiss-oberkochen/ZeissHologon15mmf8.data.ts` | DE 1,241,637 B | yes | 4 (3.83 < 4.06), 5 (3.60 < 7.53), 6 (8.84 < 15.09) | 6.25 mm | todo — **wide** |
| CARL ZEISS BIOGON 21mm f/4.5 | `carl-zeiss-oberkochen/ZeissBiogon21mmf45.data.ts` | US 2,721,499 | yes | 12 (6.72 < 11.72), 13 (7.98 < 14.07) | 6.09 mm | todo — **wide** |
| RODENSTOCK GRANDAGON-N 75mm f/4.5 | `rodenstock/RodenstockGrandagonN75mmf45.data.ts` | DE 2444954 A1 | yes | 11 (16.80 < 21.57), 12 (21.00 < 25.04) | 4.77 mm | todo — **wide** |
| SCHNEIDER TECHNIKA SUPER-ANGULON 75mm f/8 | `schneider-kreuznach/SchneiderTechnikaSuperAngulon75mmf8.data.ts` | JP S42-023896 | yes (`JPB 1967023896-000000.pdf`) | 9 (15.80 < 19.87), 10 (19.75 < 21.63) | 4.07 mm | todo — **wide** |

Four lenses were cleared from this section on 2026-07-24: X100, X100V, X70, GFX100RF.

### Not covered by the check

`npm run audit:image-circle` skips 29 of 470 lenses: five production folded designs (the axial gap to the image plane
is not the distance the ray travels), eight `reference/` mirror fixtures, and sixteen files with no `imageFormat`.
Filling in `imageFormat` where the format is unambiguous — see
[lens-mount-format-backfill.md](lens-mount-format-backfill.md) — brings those into scope for free.

## Section B — figure-vs-data shape deviations (odd-asphere set)

Measured during the first pass but **not acted on**: the evidence is photogrammetry only, at ±10–15%. `median` is
whole-lens scale agreement; the listed elements are each element's ratio ÷ that median, so 1.00 would be a correct
shape. Full context and figure-sheet references in [patent-figure-sd-audit.md](patent-figure-sd-audit.md).

| Lens | median fig/data | Deviating elements | Status |
|---|---|---|---|
| GF 45mm f/2.8 | 0.96 | none beyond ±11% | no change (matches) |
| XF 50mm f/1.0 | 0.99 | L2a 2.02, L2b/L2c 1.41, L1d 0.68 | todo |
| GF 35-70mm | 0.99 | L31 1.51, L32 1.71, L11 0.79 | todo |
| GF 100-200mm | 1.03 | L46 2.68, L47 2.31, L31–L33 ≈1.5, L13 0.59 | todo |
| GF 23mm f/4 | 1.03 | L12 1.26, L11 1.17, L16 0.78 | todo |
| XF 33mm f/1.4 | 1.04 | L22–L26 1.35–1.78, G1 all ≈0.80 | todo |
| XF 23mm f/2 | 1.09 | L31 1.41, L32 1.41 | todo |
| GFX100RF 35mm f/4 | 1.11 | front group unmeasurable (bracket contamination) | partial (rear fixed) |
| XF 60mm f/2.4 | 1.12 | L11 0.80, L12 0.78, L22 1.19, L23 1.17 | todo |
| XF 18mm f/2 | 1.16 | L8 1.80, L6 1.31 | todo |
| GF 32-64mm | 1.20 | L32 1.78, L21g 1.41, L11/L12 ≈0.78 | todo |
| XF 56mm f/1.2 | 1.23 | L21–L24 1.47–1.56, G1 all ≈0.75 | todo |
| GF 20-35mm | 1.34 | L22 1.75, L21 1.39, L14 1.38 | todo |
| XF 23mm f/1.4 | 0.96 | L23 1.65, L24 1.48, L22 1.42 | todo |
| XF 16-55mm f/2.8 | 0.94 | L42/L43 ≈2.6, L41 0.24 — tail unreliable | todo |
| XF 35mm f/1.4 | 1.37 | spread 0.41–1.24 | blocked (ray-overlaid figure would not measure) |
| X100V 23mm f/2 | 1.49 | G2 ≈1.1–1.4 vs G1 | partial (rear fixed; G1/G2 blocked by edge thickness) |

A caution before working this section: the same shape error recurs across it — rear groups drawn larger than we store
them, front groups drawn smaller. That is the signature of sizing from a marginal-ray-plus-clearance rule, which
under-counts chief-ray height near the image. Fixing it lens-by-lens off drawings will be slow and imprecise;
re-deriving these from a real full-field chief-ray trace would settle the whole section at once and is probably the
better investment.

### Completed Nikon additions

| Lens | Figure screen | Status |
|---|---|---|
| AF-S DX Zoom-Nikkor 12-24mm f/4 G IF-ED | Median 1.004; revised L2/L3 0.89 and L4 0.86 after normalization | done 2026-07-29; resin boundary capped by edge/sag validation |
| AI AF Zoom-Nikkor 24-120mm f/3.5-5.6 D IF | Automated crop contaminated by dense labels/brackets; 300 dpi hand measurements used | done 2026-07-29; published 17A/34A apertures retained |
| AF Zoom-Nikkor 28-200mm f/3.5-5.6 G IF-ED | Median 1.113; revised L12/L21 each 1.00 after normalization | done 2026-07-29 |
| AF-S NIKKOR 500mm f/5.6E PF ED VR | Figure 3 at 600 dpi / 7.5 px/mm; tightened L15/L16, G2, C31, VR1, and CL31 outlines | done 2026-08-03; zero image-circle-floor failures |
| AF-S NIKKOR 180-400mm f/4E TC1.4 FL ED VR | Figures 7/9; rear master pair measured about 12.9 mm, engaged Lx7/Lx8 enlarged to validated figure envelope | done 2026-08-03; both TC states have zero image-circle-floor failures |
| AI AF-S Zoom-Nikkor 80-200mm f/2.8D IF-ED | JP 2000-19398 Figure 1 at 300 dpi plus supplied site screenshot | done 2026-08-14; L43-equivalent relay reduced to 10.6/10.4 mm |
| AI AF Zoom-Nikkor 18-35mm f/3.5-4.5D IF-ED | US 2001/0030812 Figure 4A at 300 dpi plus supplied site screenshot | no further change 2026-08-14; integration L13/L14 correction retained |
| AI AF VR Zoom-Nikkor 80-400mm f/4.5-5.6D ED | US 6,141,156 Figure 7 at 300 dpi plus supplied site screenshot | no change 2026-08-14; modeled group taper matches |
| AF-S VR Zoom-Nikkor 70-200mm f/2.8G IF-ED | US 2003/0133200 Figure 1 at 300 dpi plus supplied site screenshot | done 2026-08-14; L47 restored to the final pair's near-equal aperture |
| AF-S VR Zoom-Nikkor 24-120mm f/3.5-5.6G IF-ED | US 2004/0218274 Figure 5 at 300 dpi plus supplied site screenshot | no further change 2026-08-14; compact L33 correction retained |
| AF-S VR Zoom-Nikkor 200-400mm f/4G IF-ED | US 2005/0157403 Figure 1 at 300 dpi plus supplied site screenshot | no change 2026-08-14; modeled taper matches |

### Completed Tamron additions

| Lens | Figure screen | Status |
|---|---|---|
| SP 70-300mm f/4-5.6 Di VC USD | US 8,228,605 Figure 12 at 300 dpi | no change 2026-08-10; modeled taper matches |
| 28-300mm f/3.5-6.3 Di VC PZD | JP 2013-254160 Figure 37 at 300 dpi | no change 2026-08-10; deviations below evidence threshold |
| 70-180mm f/2.8 Di III VXD | JP 2021-43375 Figure 1 plus published effective diameters | no change 2026-08-10; source `phi/2` values retained |
| 50-300mm f/4.5-6.3 Di III VC VXD | US 2024/0295723 Figure 1 at 300 dpi | done 2026-08-10; G2-G5 enlarged within geometry limits |
| 18-400mm f/3.5-6.3 Di II VC HLD | JP 2017-116646 Figure 1 at 300 dpi | done 2026-08-10; front G2 enlarged to validated limit |
| SP 24-70mm f/2.8 Di VC USD | US 8,810,918 Figure 22 at 300 dpi | no change 2026-08-10; modeled taper matches |

### Completed Sony additions

| Lens | Figure screen | Status |
|---|---|---|
| E PZ 16-50mm f/3.5-5.6 OSS | US 2015/0316753 A9 Figure 1 at 300 dpi; L1 drawn near 12.5 mm | done 2026-08-11; L1 enlarged to validator-safe 12.2/11.8 mm |
| FE PZ 16-35mm f/4 G | JP 2023-44106 A Figure 53; patent effective diameters retained | no change 2026-08-11; zero image-circle-floor failures |
| Vario-Sonnar T* 24-70mm f/2.8 ZA SSM | US 2008/0198475 A1 Figure 9; clean-row median 1.019 | no change 2026-08-11; reliable deviations below threshold |
| DT 16-50mm f/2.8 SSM | US 2012/0307129 A1 Figure 2 at 300 dpi plus supplied site screenshot | no change 2026-08-13; modeled taper matches the patent section |
| E 18-200mm f/3.5-6.3 OSS LE | US 8,553,339 B2 Figure 1 at 300 dpi plus supplied site screenshot | done 2026-08-13; front pair and meniscus tightened for Figure 1 and 62 mm barrel; second review retained the remaining SDs |
| E 50mm f/1.8 OSS | JP 2012-242690 A Figure 8 at 300/600 dpi plus supplied site screenshot | done 2026-08-13; L211-L214, L215-L216, L221, and L232 envelopes tightened conservatively against the figure while preserving f/1.85 and OSS/focus clearance |

### Completed Voigtländer additions

| Lens | Figure screen | Status |
|---|---|---|
| PORTRAIT HELIAR 75mm f/1.8 | Figure 5 automated and 300 dpi readings agreed on 18.7 / 15.0 / 13.2 mm group envelopes | done 2026-07-31; zero image-circle-floor failures |
| ULTRON 27mm f/2 | Figure 1 leader lines required 300 dpi hand measurements; existing within-element rim ratios retained | done 2026-07-31; zero image-circle-floor failures |
| COLOR-SKOPAR 35mm f/3.5 Aspherical VM | Figure 1 hand measurements tightened G1–G3; aspheric rear group retained at its validated limits | done 2026-07-31; zero image-circle-floor failures |
| APO-LANTHAR 28mm f/2 Aspherical VM | Figure 3 relative-height pass set L10–L16 to 9.5 / 8.5 / 8.6 / 9.0 / 10.4 / 10.6 / 12.0 mm envelopes | done 2026-08-01; zero image-circle-floor failures |
| APO-ULTRON 90mm f/2 VM | Figure 1 relative-height pass set the L11–L31 taper to 23.0 / 21.0 / 18.5 / 16.5 / 16.0 / 12.3 / 12.0 mm | done 2026-08-01; zero image-circle-floor failures |
| COLOR-SKOPAR 28mm f/2.8 Aspherical | Exact Example 3 Figure 6 hand measurements set L1/J1 to an 8.1 / 6.2 mm equal-rim envelope | done 2026-08-01; zero image-circle-floor failures |
| COLOR-HELIAR 105mm f/3.5 | US 2,645,156 A Figure 2 at 600 dpi; compacted rear doublet to 15.5 mm | done 2026-08-05; zero image-circle-floor failures |
| COLOR-SKOPAR 105mm f/3.5 | US 2,573,511 A Figure 1 at 600 dpi; opened small and rear groups to 14.0 / 15.5 mm | done 2026-08-05; zero image-circle-floor failures |
| DYNAR 100mm f/6 | US 765,006 A at 600 dpi; equalized the three group envelopes within edge limits | done 2026-08-05; no image format, local validation passed |
| HELIAR f/4.5 second asymmetric form | DE 143889 C drawing sheet at 600 dpi; enlarged central and rear groups | done 2026-08-05; no image format, local validation passed |
| NOKTON 50mm f/1.5 | US 2,646,721 Figure 2 at 600 dpi; restored front-to-center scale break | done 2026-08-05; zero image-circle-floor failures |
| TELOMAR 100mm f/5.5 | US 2,662,446 A Figure 3 at 600 dpi; equalized rear doublet at 11.0 mm | done 2026-08-05; zero image-circle-floor failures |

### Completed Pentax additions

| Lens | Figure screen | Status |
|---|---|---|
| HD DA 16-85mm f/3.5-5.6 ED DC WR | JP 2016-114800 Figure 1 at 600 dpi; restored the front/rear group taper and enlarged hybrid L21 to its safe limit | done 2026-08-14; zero image-circle-floor failures |
| HD DA 18-50mm f/4-5.6 DC WR RE | JP 2016-6455 Figure 10 at 600 dpi; enlarged hybrid L12 and L13 | done 2026-08-14; zero image-circle-floor failures |
| HD DA 20-40mm f/2.8-4 ED Limited DC WR | JP 2015-11156 Figure 1 at 600 dpi; radial drawing scale is not dimensionally uniform | no change 2026-08-14; modeled taper matches |
| HD DA645 28-45mm f/4.5 ED AW SR | JP 2015-87681 Figure 1 at 600 dpi; normalized deviations remain within drawing tolerance | no change 2026-08-14; modeled taper matches |
| HD D FA 150-450mm f/4.5-5.6 ED DC AW | US 2016/0327774 Figure 1 at 600 dpi; final L54 restored near the L51-L53 envelope | done 2026-08-14; zero image-circle-floor failures |
| SMC PENTAX-A ZOOM 35-70mm f/4 | US 4,812,022 Figure 9 at 300 dpi; final L7 reduced to the distinctly smaller source profile | done 2026-08-14; zero image-circle-floor failures |

## Section C — source blockers

Nothing can be audited on these until the source is available.

| Lens | Blocker | Unblocks by |
|---|---|---|
| Zeiss Touit 50mm f/2.8 Macro | `JP 2015-161792 A` not in `patents/` | adding the PDF |
| XF 16-55mm f/2.8 II | `US_2025234079_A1.pdf` has no text layer; Example 1's sheet not located | rendering pages to find it, or OCR |
| GFX100RF 35mm f/4 (front group) | `US_2025362482_A1.pdf` has no text layer | OCR — FIG. 5 defines `hE2` as a surface's effective radius, so the tables may publish clear apertures outright |
| Sigma 10-18mm f/2.8 | 図8 printed as a thumbnail; <20 px per element edge at 600 dpi | a higher-resolution copy of JP 2024-104911 A |
| Sigma 14-24mm f/2.8 | 図1 exists only as the front-page abstract drawing (the drawing section starts at 図3) | a higher-resolution copy of JP 2018-189733 A |
