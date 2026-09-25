# Semi-Diameter Audit Queue

Open work for the semi-diameter / cross-section audit. Follow
[patent-figure-sd-audit-procedure.md](patent-figure-sd-audit-procedure.md) for each row. The queue holds only open
rows: when a lens is finished, log the evidence in its `*.audit.md` sidecar and delete the row here. The first pass
that seeded Sections B and C is written up in
[records/patent-figure-sd-audit-2026-07.md](records/patent-figure-sd-audit-2026-07.md).

Take **Section A top-down** — those rows have physics behind them. Section B is figure-evidence only and is lower
value per hour.

Status values: `todo` · `in progress` · `blocked (reason)` · `partial (what remains)`.

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

### Not covered by the check

`npm run audit:image-circle` skips 29 of 470 lenses: five production folded designs (the axial gap to the image plane
is not the distance the ray travels), eight `reference/` mirror fixtures, and sixteen files with no `imageFormat`.
Filling in `imageFormat` where the format is unambiguous — see
[lens-mount-format-backfill.md](lens-mount-format-backfill.md) — brings those into scope for free.

## Section B — figure-vs-data shape deviations (odd-asphere set)

Measured during the first pass but **not acted on**: the evidence is photogrammetry only, at ±10–15%. `median` is
whole-lens scale agreement; the listed elements are each element's ratio ÷ that median, so 1.00 would be a correct
shape. Full context and figure-sheet references in
[records/patent-figure-sd-audit-2026-07.md](records/patent-figure-sd-audit-2026-07.md).

| Lens | median fig/data | Deviating elements | Status |
|---|---|---|---|
| XF 50mm f/1.0 | 0.99 | L2a 2.02, L2b/L2c 1.41, L1d 0.68 | todo |
| GF 35-70mm | 0.99 | L31 1.51, L32 1.71, L11 0.79 | todo |
| GF 100-200mm | 1.03 | L46 2.68, L47 2.31, L31–L33 ≈1.5, L13 0.59 | todo |
| GF 23mm f/4 | 1.03 | L12 1.26, L11 1.17, L16 0.78 | todo |
| XF 33mm f/1.4 | 1.04 | L22–L26 1.35–1.78, G1 all ≈0.80 | todo |
| XF 23mm f/2 | 1.09 | L31 1.41, L32 1.41 | todo |
| GFX100RF 35mm f/4 | 1.11 | front group unmeasurable (bracket contamination) | partial (rear fixed; front group is a Section C blocker) |
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

## Section C — source blockers

Nothing can be audited on these until the source is available.

| Lens | Blocker | Unblocks by |
|---|---|---|
| Zeiss Touit 50mm f/2.8 Macro | `JP 2015-161792 A` not in `patents/` | adding the PDF |
| XF 16-55mm f/2.8 II | `US_2025234079_A1.pdf` has no text layer; Example 1's sheet not located | rendering pages to find it, or OCR |
| GFX100RF 35mm f/4 (front group) | `US_2025362482_A1.pdf` has no text layer | OCR — FIG. 5 defines `hE2` as a surface's effective radius, so the tables may publish clear apertures outright |
| Sigma 10-18mm f/2.8 | 図8 printed as a thumbnail; <20 px per element edge at 600 dpi | a higher-resolution copy of JP 2024-104911 A |
| Sigma 14-24mm f/2.8 | 図1 exists only as the front-page abstract drawing (the drawing section starts at 図3) | a higher-resolution copy of JP 2018-189733 A |

## Section D — MTF field census

MTF traces the whole transmitted beam through the authored clear apertures, so it surfaces semi-diameters that block
light the production lens transmits. Regenerate at any time (about three minutes):

```bash
node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/audit-mtf.mjs --fields --list
```

Rows are lenses at infinity, wide open, at the wide end. "Edge" is the largest image height whose real chief ray
passes every clear aperture; lenses whose edge merely misses the format corner are not listed here. Later rows are
full-beam findings where the edge is reached but the authored clear apertures pass too little or too much of the beam
there; check them against the patent figure.

| Lens | File | Finding | Status |
|---|---|---|---|
| VIVITAR SERIES 1 70-210mm f/3.5 | `vivitar/VivitarSeries170210mmf35.data.ts` | No pupil ray reaches the image, even on axis: surface 21 sits at zero gap before the stop, so every ray meets the stop plane behind itself | todo |
| NIKON AF-S NIKKOR 16-35mm f/4G ED VR | `nikon/NikonNikkorAFS1635mmf4.data.ts` | Edge below half the format-corner height | todo |
| SONY FE 16-35mm f/2.8 GM II | `sony/SonyFE1635mmf28GMII.data.ts` | Edge below half the format-corner height | todo |
| PANASONIC LUMIX G VARIO 7-14mm f/4 | `panasonic/PanasonicLumixGVario714mmf4.data.ts` | Edge below half the format-corner height | todo |
| OLYMPUS ZUIKO 16mm f/3.5 Fisheye | `olympus/OlympusZuiko16mmf35.data.ts` | Edge below half the format-corner height; also declares no fisheye `projection`, so rectilinear analyses accept it | todo |
| SONY FE 12-24mm f/2.8 GM | `sony/SonyFE1224mmf28GM.data.ts` | Clear apertures likely wider than production: the 10.8 mm field traces 7,288 pupil rays against 4,060 on axis, and tangential 30 lp/mm falls to 0.03 there | todo |
| CANON RF 24-105mm f/2.8 L IS USM Z | `canon/CanonRF24105mmf28Z.data.ts` | Chief ray reaches the 21.6 mm corner but no pupil ray does (cat's-eye closes to zero); 20.6 mm still transmits 814 rays | todo |
| MEYER OPTIK GÖRLITZ DOUBLE-PLASMAT 135mm f/4.5 (patent model) | `meyer-optik-goerlitz/MeyerOptikGorlitz135mmf45DoublePlasmat.data.ts` | Chief ray reaches the 158.6 mm corner but no pupil ray does | todo |
| KINOPTIK SUPER-TEGEA 1.9mm f/1.9 FISHEYE | `kinoptik/KinoptikSuperTegea19mmf19Fisheye.data.ts` | Edge 3.70 of 4.35 mm and the edge trace fails; declares no fisheye `projection` | todo |
| SONY ZEISS VARIO-SONNAR T* 9-72mm f/2.8-4.5 (RX100 VI / VII) | `sony/ZeissVarioSonnarT9072mmf2845SonyDSCRX100M67.data.ts` | The chief ray is blocked in a band near 98 % of the 7.17 mm edge and transmits again beyond it; tangential 30 lp/mm is 0.00 from 7.1 mm | todo |

## Section E — MTF image-plane census

These lenses place their image plane away from their own prescription's paraxial focus at infinity, by more than
`MTF_IMAGE_PLANE_DEPTHS` (10) diffraction depths of focus (2λN² at the d line and the open f-number). At the authored
plane their MTF collapses, so the MTF tab's default Auto focus refocuses them and says why. Where diagnosed, the
source's printed back focus contradicts its prescription; undiagnosed rows may be transcription errors. Folding a listed plate to its air-equivalent, or
modeling it in `rearPlates`, leaves paraxial defocus unchanged, so plates alone rarely explain these offsets.
Regenerate (about three minutes):

```bash
node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/audit-mtf.mjs --focus
```

Work each row with [lens-patent-audit.md](lens-patent-audit.md) and the source PDF. Correct transcription errors,
and model plates the source lists in `rearPlates`. Where the source itself is inconsistent, keep the published value
and document the contradiction in the lens header and `*.audit.md`, as the Voigtländer 28/2 audit does, then delete
the row. Offset is paraxial focus minus the authored plane (positive: the plane sits in front of focus).

| Lens | File | Offset (mm) | Depths | Cause | Status |
|---|---|---|---|---|---|
| FUJIFILM FUJINON XF 18mm f/2 R | `fujifilm/FujifilmXF18mmf2.data.ts` | +4.993 | 1062 | D16 ends at omitted PP; Table 7 leaves its trailing image gap blank; EFL also differs | partial (source image distance missing; S13 A10 typo corrected, no paraxial effect) |
| SIGMA 24mm f/1.4 DG DN \| Art | `sigma/Sigma24mmf14ArtDN.data.ts` | -1.048 | 455 | Patent BF 23.0355 mm kept vs 21.9873 mm paraxial; likely an omitted plate whose values are not recorded | todo |
| MAMIYA AF APO 300mm f/4.5 IF | `mamiya/MamiyaAFAPO300mmf45IF.data.ts` | -1.026 | 41 | Not yet diagnosed; check the source image distance | todo |
| VILTROX AF 50mm f/1.8 FE | `viltrox/ViltroxAF50mmf18FE.data.ts` | +0.989 | 260 | Plate folded to air-equivalent; offset is the source image distance, not the fold | todo |
| Nikon AI Zoom-Nikkor 35–105mm f/3.5–4.5S | `nikon/NikonAIZoomNikkor35105mmf3545.data.ts` | +0.942 | 66 | Not yet diagnosed; check the source image distance | todo |
| SONY FE 70-200mm f/4 G OSS | `sony/SonyFE70200mmf4G.data.ts` | -0.812 | 43 | Not yet diagnosed; check the source image distance | todo |
| NIKON AF-S NIKKOR 28-300mm f/3.5-5.6 G ED VR | `nikon/NikonNikkorAFS28300mmf3556G.data.ts` | +0.714 | 48 | Not yet diagnosed; check the source image distance | todo |
| CANON EF 500mm f/4 L IS USM | `canon/CanonEF500mmf4LISUSM.data.ts` | +0.670 | 34 | Rear filter folded to air-equivalent; offset is the source image distance, not the fold | todo |
| VILTROX AF 35mm f/1.8 FE | `viltrox/ViltroxAF35mmf18FE.data.ts` | -0.552 | 145 | Plate folded to air-equivalent; analysis notes the printed BFL condition is not reproduced | todo |
| CANON EF 50mm f/1.2L USM | `canon/CanonEF50mmf12LUSM.data.ts` | -0.546 | 298 | Not yet diagnosed; check the source image distance | todo |
| KINOPTIK TEGEA 9.8mm f/1.8 | `kinoptik/KinoptikTegea98mmf18.data.ts` | +0.537 | 114 | Not yet diagnosed; check the source image distance | todo |
| VILTROX AF 56mm f/1.4 E | `viltrox/ViltroxAF56mmf14E.data.ts` | +0.510 | 218 | Plate folded to air-equivalent; offset is the source image distance, not the fold | todo |
| CANON EF 600mm f/4 L IS USM | `canon/CanonEF600mmf4LISUSM.data.ts` | -0.493 | 25 | Rear filter folded to air-equivalent; offset is the source image distance, not the fold | todo |
| SONY SONNAR T* FE 35mm f/2.8 ZA | `sony/SonyFE35mmf28ZA.data.ts` | +0.471 | 51 | Not yet diagnosed; check the source image distance | todo |
| VOIGTLÄNDER APO-LANTHAR 28mm f/2 Aspherical VM | `voigtlander/VoigtlanderAPOLanthar28mmf2Aspherical.data.ts` | +0.373 | 75 | Source contradiction (audit): printed D21 18.21 mm vs 18.58 mm prescription back focus | todo |
| VILTROX AF 33mm f/1.4 E | `viltrox/ViltroxAF33mmf14E.data.ts` | +0.366 | 159 | Plate folded to air-equivalent; offset is the source image distance, not the fold | todo |
| KONICA HEXANON AR 50mm f/1.8 | `konica/KonicaHexanonAR50mmf18.data.ts` | +0.344 | 90 | Analysis: printed axial spacings do not sum to the published track | todo |
| TAMRON SP 90mm f/2.8 Di MACRO 1:1 VC USD (F004) | `tamron/TamronSP90mmf28Di.data.ts` | +0.294 | 32 | Not yet diagnosed; check the source image distance | todo |
| MINOLTA MC W.ROKKOR-SG 28mm f/3.5 | `minolta/Minolta28mmf35MCWRokkorv2.data.ts` | -0.246 | 17 | Not yet diagnosed; check the source image distance | todo |
| HASSELBLAD XCD 65mm f/2.8 | `hasselblad/HasselbladXCD65mmf28.data.ts` | +0.232 | 25 | Cover glass already in `rearPlates`; offset remains | todo |
| CANON 12.5-62.5mm f/2.0-3.9 (PowerShot G1 X Mark II) | `canon/CanonPowerShotG1XII125625mmf239.data.ts` | +0.221 | 47 | Sensor block already in `rearPlates`; offset remains | todo |
| NIKON R-UW AF ZOOM-NIKKOR 20-35mm f/2.8 | `nikon/NikonRUWAFZoomNikkor2035mmf28.data.ts` | +0.220 | 24 | Underwater lens designed with water in object space; in-air MTF is not its design condition | todo |
| HASSELBLAD HC 210mm f/4 | `hasselblad/HasselbladHC210mmf4.data.ts` | -0.204 | 11 | Not yet diagnosed; check the source image distance | todo |
| SAMYANG AF 35mm f/2.8 FE | `samyang/SamyangAF35mmf28FE.data.ts` | -0.190 | 19 | Header: patent OAL and filter-absent 'in Air' distance do not reconcile with the Gaussian image plane | todo |
| HASSELBLAD XCD 45mm f/3.5 | `hasselblad/HasselbladXCD3545.data.ts` | +0.171 | 12 | Data note: source infinity BF 26.88 mm kept although the raw prescription computes otherwise | todo |
| P. ANGÉNIEUX DEM 180mm f/2.3 APO | `p.-angénieux/AngenieuxDEM180mmf23APO.data.ts` | -0.146 | 24 | Not yet diagnosed; check the source image distance | todo |
| CARL ZEISS OLYMPIA-SONNAR 180mm f/2.8 | `carl-zeiss-oberkochen/CarlZeissOlympiaSonnar180mmf28.data.ts` | +0.100 | 11 | Not yet diagnosed; check the source image distance | todo |
| CANON RF 35mm f/1.4 L VCM | `canon/CanonRF35mmF14LVCM.data.ts` | -0.083 | 33 | Small offset; may be a designer best-focus plane, check the source | todo |
| LEICA SUMMILUX-SL 50mm f/1.4 ASPH. I | `leica/LeicaSummiluxSL50mmf14AsphI.data.ts` | +0.075 | 31 | Plate PT already in `rearPlates`; small offset, may be a designer best-focus plane | todo |
| VOIGTLÄNDER ULTRON Vintage Line 28mm f/2 Aspherical | `voigtlander/VoigtlanderUltron28f2.data.ts` | +0.069 | 15 | Small offset; may be a designer best-focus plane, check the source | todo |
| SCHNEIDER-KREUZNACH VARIOGON 8-40mm f/1.8 | `schneider-kreuznach/SchneiderVariogon18840.data.ts` | +0.063 | 16 | Small offset; may be a designer best-focus plane, check the source | todo |
| KINOPTIK SUPER-TEGEA 1.9mm f/1.9 FISHEYE | `kinoptik/KinoptikSuperTegea19mmf19Fisheye.data.ts` | +0.051 | 12 | Small offset; may be a designer best-focus plane, check the source | todo |
| SONY E 50mm f/1.8 OSS | `sony/SonyE50mmf18OSS.data.ts` | +0.046 | 11 | Cover glass already in `rearPlates`; small offset, may be a designer best-focus plane | todo |
| LEICA SUMMILUX-M 35mm f/1.4 ASPHERICAL | `leica/LeicaSummiluxM35mmf14Aspherical.data.ts` | +0.041 | 18 | Small offset; may be a designer best-focus plane, check the source | todo |
| SONY SONNAR T* FE 55mm f/1.8 ZA | `sony/SonyFE55mmf18ZA.data.ts` | +0.039 | 10 | Small offset; may be a designer best-focus plane, check the source | todo |
| LEICA SUMMILUX-C 40mm T1.4 | `leica/LeicaSummiluxC40mmT14.data.ts` | -0.038 | 17 | Small offset; may be a designer best-focus plane, check the source | todo |
| LEICA SUMMILUX-C 100mm T1.4 | `leica/LeicaSummiluxC100mmT14.data.ts` | -0.036 | 16 | Small offset; may be a designer best-focus plane, check the source | todo |
| VOIGTLÄNDER NOKTON Vintage Line 50mm f/1.5 Aspherical II VM | `voigtlander/VoigtlanderNokton50mmf15AsphericalVM.data.ts` | -0.028 | 11 | Small offset; may be a designer best-focus plane, check the source | todo |
| LEICA SUMMILUX-M 35mm f/1.4 | `leica/LeicaSummilux35mmf14.data.ts` | -0.025 | 11 | Small offset; may be a designer best-focus plane, check the source | todo |
| VILTROX AF 27mm f/1.2 PRO XF | `viltrox/ViltroxAF27mmf12XF.data.ts` | +0.025 | 15 | Source GL plate excluded; check the rear path against the source | todo |

## In-progress diagram sweep

The oldest-200 hosted-diagram audit (patent and live-view review of each lens, semi-diameters included) is paused at
lens 40 of 200. Its frozen queue, resume instructions and open follow-ups live in
[records/lens-shape-audit-first-200-2026-09-08.md](records/lens-shape-audit-first-200-2026-09-08.md); resume there,
not here. When that sweep reaches a lens that also sits in Sections A–C, work it from this queue's row and then delete
the row.
