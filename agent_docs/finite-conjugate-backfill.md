# Finite-Conjugate Backfill

Published close-focus states that carry no `focus.conjugates` entry, so finite-distance MTF is unavailable there.
The rules for declaring one are in `src/lens-data/LENS_DATA_SPEC.md` § Finite conjugates; check a file with
`npm run audit:finite-conjugates -- --files=<file> --strict`. Delete a row in the commit that declares its state or
removes the keyframe's published flag.

## Coverage

- Published finite states: **604** on 376 lenses.
- Declared: **361** on 223 lenses.
- Open: **243** states on 157 lenses, listed below by what the cited source prints.

| What the source prints for the state | States |
|---|---|
| Only a magnification | 147 |
| Neither a distance nor a magnification | 30 |
| A distance that could not be declared | 66 |

States are written `zoomStation/keyframe`. "Depths" are the audit's signed quarter waves of defocus at the authored
image plane for the printed distance under the source's reference and under the other one; the limit is 25.

## Printed Distance, Not Declared

### The source's stated reference does not focus, the other one does

The printed number, unit and gaps match the file. Nothing is declared against the source's own definition; each row
needs a ruling or a second source.

| Lens file | State | Printed | Depths (declared / other) | Finding |
|---|---|---|---|---|
| `canon/CanonRF14mmF14LVCM` | 0/1 | First surface from object plane 240.532 | -267.7 / -5.6 | Patent says “First surface from object plane”; printed close gaps match the file, but only image-plane use passes. |
| `canon/CanonRF20mmf14LVCM` | 0/1 | First surface from object plane 300.024 | -305.0 / -0.1 | Patent says “First surface from object plane”; printed close gaps match the file, but only image-plane use passes. |
| `fujifilm/FujifilmXF56mmf12RWR` | 0/1 | 0.5m | +537.4 / -0.1 | ¶0062 defines “物体から像面Ｓｉｍまでの光軸Ｚ上の距離” (object to image plane); Table 5 prints 0.5m and DD[3]/DD[17]=9.855/8.902, but only first-surface use passes. |
| `sony/SonyFE1224mmf28GM` | 0/1 | d0 280mm | -43.7 / +3.6 | Table 9 close gaps match natively; the patent defines di as 「i番目の面とi+1番目の面との間の光軸上の間隔」 and puts d0 at 0(OBJ), so it denotes object-to-first-surface; only the image-plane interpretation passes, and it is not substituted. |
| `sony/SonyFE1224mmf28GM` | 1/1 | d0 280mm | -74.9 / +5.6 | Table 9 close gaps match natively; the patent defines di as 「i番目の面とi+1番目の面との間の光軸上の間隔」 and puts d0 at 0(OBJ), so it denotes object-to-first-surface; only the image-plane interpretation passes, and it is not substituted. |
| `sony/SonyFE1224mmf28GM` | 2/1 | d0 280mm | -166.0 / -8.8 | Table 9 close gaps match natively; the patent defines di as 「i番目の面とi+1番目の面との間の光軸上の間隔」 and puts d0 at 0(OBJ), so it denotes object-to-first-surface; only the image-plane interpretation passes, and it is not substituted. |
| `sony/SonyFE2070mmf4G` | 0/1 | d0 = 299mm | -34.6 / +2.5 | Table 38 close gaps match natively; the patent defines di as 「i番目の面とi+1番目の面との間の光軸上の間隔」 and puts d0 at 0(OBJ), so it denotes object-to-first-surface; only the image-plane interpretation passes, and it is not substituted. |
| `sony/SonyFE2070mmf4G` | 1/1 | d0 = 299mm | -113.8 / +1.7 | Table 38 close gaps match natively; the patent defines di as 「i番目の面とi+1番目の面との間の光軸上の間隔」 and puts d0 at 0(OBJ), so it denotes object-to-first-surface; only the image-plane interpretation passes, and it is not substituted. |
| `sony/SonyFE2070mmf4G` | 2/1 | d0 = 299mm | -434.5 / -6.4 | Table 38 close gaps match natively; the patent defines di as 「i番目の面とi+1番目の面との間の光軸上の間隔」 and puts d0 at 0(OBJ), so it denotes object-to-first-surface; only the image-plane interpretation passes, and it is not substituted. |
| `sony/SonyFE70200mmf28GMII` | 0/1 | d0 = 1000mm | -115.7 / +17.6 | Table 8 close gaps match natively; the patent defines di as 「i番目の面とi+1番目の面との間の光軸上の間隔」 and puts d0 at 0(OBJ), so it denotes object-to-first-surface; only the image-plane interpretation passes, and it is not substituted. |
| `sony/SonyFE70200mmf28GMII` | 1/1 | d0 = 1000mm | -323.9 / -1.2 | Table 8 close gaps match natively; the patent defines di as 「i番目の面とi+1番目の面との間の光軸上の間隔」 and puts d0 at 0(OBJ), so it denotes object-to-first-surface; only the image-plane interpretation passes, and it is not substituted. |
| `sony/SonyFE70200mmf28GMII` | 2/1 | d0 = 1000mm | -696.6 / +14.4 | Table 8 close gaps match natively; the patent defines di as 「i番目の面とi+1番目の面との間の光軸上の間隔」 and puts d0 at 0(OBJ), so it denotes object-to-first-surface; only the image-plane interpretation passes, and it is not substituted. |
| `sony/SonyFEPZ1635mmf4G` | 0/1 | d0 = 279mm | — / — | d0 = 279 mm, defined by Table 21 as object to first surface, focuses at Wide only at −20.6 depths with the image-plane reading equally inside the limit; Mid and Tele pass only as image-plane distances. |
| `sony/SonyFEPZ1635mmf4G` | 1/1 | d0 = 279mm | -42.6 / +5.4 | Table 23 close gaps match natively; the patent defines di as 「i番目の面とi+1番目の面との間の光軸上の間隔」 and puts d0 at 0(OBJ), so it denotes object-to-first-surface; only the image-plane interpretation passes, and it is not substituted. |
| `sony/SonyFEPZ1635mmf4G` | 2/1 | d0 = 279mm | -91.0 / +16.3 | Table 23 close gaps match natively; the patent defines di as 「i番目の面とi+1番目の面との間の光軸上の間隔」 and puts d0 at 0(OBJ), so it denotes object-to-first-surface; only the image-plane interpretation passes, and it is not substituted. |

### Distance measured to a front plate the file does not model

Model the plate (it then becomes the first surface), or leave undeclared.

| Lens file | State | Printed | Finding |
|---|---|---|---|
| `leica/LeicaSummiluxC100mmT14` | 0/1 | 1440.000 | Table separation is S0→S1; omitted front S1–S2 S-BSL7 filter is 3 mm thick with 2 mm air to modeled S3. Printed distance is not measured to this model’s first surface; focus gaps match. |
| `leica/LeicaSummiluxC100mmT14` | 0/2 | 696.000 | Table separation is S0→S1; omitted front S1–S2 S-BSL7 filter is 3 mm thick with 2 mm air to modeled S3. Printed distance is not measured to this model’s first surface; focus gaps match. |
| `leica/LeicaSummiluxC40mmT14` | 0/1 | Object Plane S0, F2, Separation (mm): 470.000 | Object Plane S0 separation 470.000 mm ends at the patent's front filter S1 (3 mm plate, 2 mm air), which the file omits; the printed gaps match. |
| `leica/LeicaSummiluxC40mmT14` | 0/2 | Object Plane S0, F3, Separation (mm): 206.000 | Table separation is S0→S1; omitted front S1–S2 S-BSL7 filter is 3 mm thick with 2 mm air to modeled S3. Printed distance is not measured to this model’s first surface; focus gaps match. |
| `nikon/NikonAFSNIKKOR400mmf28EFLEDVR` | 0/1 | ｄ0 = 2201.931 (mm) | d0 2201.931 mm ends at the patent's front protective glass (surfaces 1–2, 5 mm plus 1 mm air), which the file omits; the file's d31 is 9.0933 where the patent prints 9.00. |

### Number, reference and gaps match, residual beyond the limit

Candidates for a prescription check: a 25-depth miss with every printed value matching usually means a transcription
difference elsewhere in the file.

| Lens file | State | Printed | Depths (declared / other) | Finding |
|---|---|---|---|---|
| `fujifilm/FujifilmGF55mmf17` | 0/1 | Closest 0.4 m | -132.0 / +784.4 | ¶0098 defines distance to object-side first surface; 0.4 m=400 mm, DD[4]=4.28 and DD[18]=14.70 match; residual retained with physical rear plate. |
| `leica/LeicaSummiluxSL50mmf14AsphI` | 0/1 | d0 858.000 (Unit: mm) | +32.8 / +260.9 | Unit:mm; object-row d0 and D11/D17 match: 858; 6.424/8.055 mm. No scale or omitted front plate explains the residual. |
| `leica/LeicaSummiluxSL50mmf14AsphI` | 0/2 | d0 458.000 (Unit: mm) | +31.8 / +891.3 | Unit:mm; object-row d0 and D11/D17 match: 458; 2.867/11.613 mm. No scale or omitted front plate explains the residual. |
| `nikon/NikonAFS105f28G` | 0/1 | D0 = 240.7350 | +60.6 / +5693.9 | Table 3 D0 and D8/D13/D14/D20/BF match: 240.735; 12.247/12.203/6.965/9.519/52.48194 mm; no scaling or front plate. |
| `nikon/NikonAFS105f28G` | 0/2 | D0 = 151.4870 | +55.9 / — | Table 3 D0 and D8/D13/D14/D20/BF match: 151.487; 21.289/3.16/0/16.484/52.48113 mm; no scaling or front plate. |
| `nikon/NikonNikkorAFS24mmf14G` | 0/2 | d0 = 112.5 | +56.7 / — | Example 3 POS3 d0=112.5, d8=0.561, BF=42.274 mm match; first-surface reference follows D0 placement and declared POS2 sibling. |
| `samsung/Samsung45mmf18` | 0/1 | D0 407.1 | +52.7 / +367.7 | Table 1 D0=407.1 mm and D1/D2=7.01/2.78 mm match; object-row D0 is first-surface referenced. Rear plate is physically modeled; source residual retained. |
| `sigma/Sigma24mmf14ArtDN` | 0/1 | d0 = 136.5000 | -946.0 / +2140.7 | Example 1 variable-gap data match natively; the file discloses an unresolved source EFL/BF contradiction, not a scale conversion. |
| `sony/SonyFE50150mmF2GM` | 0/1 | d0 = 186.60 | +27.6 / — | Table 3 Wide close column matches natively (shooting distance 397 mm, d0 186.60 mm); residual exceeds the limit. |
| `sony/SonyFE50150mmF2GM` | 1/1 | d0 = 311.09 | +39.7 / +3185.4 | Table 3 Mid close column matches natively (shooting distance 521 mm, d0 311.09 mm); residual exceeds the limit. |
| `sony/SonyFE50150mmF2GM` | 2/1 | d0 = 535.62 | +38.4 / +2333.8 | Table 3 Tele close column matches natively (shooting distance 746 mm, d0 535.62 mm); residual exceeds the limit. |
| `sony/SonyFE50mmF14GM` | 0/1 | d0: 336.00; 撮影距離 = 450mm | +41.7 / +1382.9 | Example 1 Table 3, 450 mm shooting-distance column, d0 336.00 mm and both gaps match natively; no scale conversion is authorized. |
| `sony/SonyFE85mmf14GMII` | 0/1 | d0: 722.07; 撮影距離 = 846mm | +46.0 / +723.4 | Example 2 Table 8, 846 mm shooting-distance column, d0 722.07 mm and both gaps match natively; no scale conversion is documented. |
| `tamron/TamronA05670180mmf28` | 2/1 | 撮影距離 = 850.000 | +28.3 / -629.9 | Example 1 Tables 3/4 gaps match; the patent explicitly defines 撮影距離 as image-plane-to-object distance; residual exceeds the limit. |
| `tamron/TamronSPA00970200mmf28VC` | 2/1 | d0 = 1065.7000 (mm) | +36.3 / +486.3 | Embodiment 1 Tele close column, d0 1065.7000 mm, gaps and 57.0050 mm back focus match natively; residual exceeds the limit. |

### File gaps differ from the patent column

| Lens file | State | Printed | Finding |
|---|---|---|---|
| `vivitar/VivitarSeries1200mmf3` | 0/1 | 2372mm or about 93 inches | Table IV publishes close D10=15 mm and BFL=77.5 mm; file has gap 11=15 mm and final surface 13 d=75.5 mm plus an existing R7 repair; not scaling. |

### Close-focus keyframe adjusted away from the tabulated row

The file documents a correction to the source row, so the state is not the tabulated one. Decide whether such a state
is still certifiable, or whether its `published` flag should go.

| Lens file | State | Printed | Depths (declared / other) | Finding |
|---|---|---|---|---|
| `nikon/NikonAFSZoomNikkor80200mmf28DIFED` | 0/1 | D0 1245.1704 | +1.9 / +146.8 | Table 1 Wide close beta=-0.06776 prints d9=10.60231; file constrains it to 10.59521 for rigid subgroup translation, while d5/d16/d21 and Bf match; diagnostic consistency cannot certify this different gap row. |
| `nikon/NikonAFSZoomNikkor80200mmf28DIFED` | 1/1 | D0 1245.1704 | +5.2 / +396.2 | Table 1 Mid close beta=-0.11218 prints d9=24.65306; file constrains it to 24.64596 for rigid subgroup translation, while d5/d16/d21 and Bf match; diagnostic consistency cannot certify this different gap row. |
| `nikon/NikonAFSZoomNikkor80200mmf28DIFED` | 2/1 | D0 1245.1704 | +11.0 / +824.3 | Table 1 Tele close beta=-0.16286 prints d9=31.47480; file constrains it to 31.46770 for rigid subgroup translation, while d5/d16/d21 and Bf match; diagnostic consistency cannot certify this different gap row. |
| `samsung/Samsung20mmf28` | 0/1 | D0 1219.62 | +0.1 / +1.6 | Table 3 intermediate D0=1219.62/D1=22.876/D2=0.46 has raw air-equivalent BF=25.0358945148; file BF=25.06412949493723 includes a documented +0.0282349802 mm closure correction, so it is not an exact gap column. |
| `samsung/Samsung20mmf28` | 0/2 | D0 115.583 | -0.2 / +266.8 | Table 3 close D0=115.583/D1=26.186/D2=0.46 has raw air-equivalent BF=28.3458945148; file BF=28.37412949493723 includes a documented +0.0282349802 mm closure correction, so it is not an exact gap column. |
| `samyang/SamyangAF85mmf14` | 0/1 | D0 784 | +1.0 / +669.1 | Example 3 TL=0.90m prints D1=6.99684/D2=4.86565/D3=0.033 and in-Air BFD=17.045; file follows the conflicting +0.191 mm in-Air change in S20=14.869 rather than the physical D3 row; no exact physical-gap column. |
| `viltrox/ViltroxAF14mmf4Air` | 0/1 | 物距 0.12M | -127.0 / -30.3 | Example 1 Table 3 near 0.12M column prints D1=3.75/D2=4.65; file uses 3.75/4.56 to constrain total moving-group space; no matching source row. |

### Scaled transcription, residual beyond the limit after scaling

| Lens file | State | Printed | Depths (declared / other) | Finding |
|---|---|---|---|---|
| `mamiya/MamiyaAFAPO300mmf45IF` | 0/1 | 被写体距離（像面から） 700 | +646.2 / +381.1 | Header SCALE states 300/99.84; printed image-plane distance 700 becomes 2103.365384615 mm. Native d8/d12=13.238/15.707 match scaled 39.777644/(26.245854+20.950661); scaled audit still fails, so no declaration. |
| `nikon/NikonZ35f18S` | 0/1 | 物体距離d0 7.0mm(POS2); d13 0.283; d19 0.666; d21 0.545 | +26.8 / +2118.5 | Example 4 POS2 d13/d19/d21 match after the header factor 21.6; printed d0=7.0 mm converts to 151.2 mm, but residual exceeds 25 depths; no declaration. |

### Close-focus gaps taken from a different example than the cited one

| Lens file | State | Printed | Finding |
|---|---|---|---|
| `nikon/Nikon1Nikkor10100mmf4VR` | 0/1 | — | Example 8 Table 8 prints infinity only; file borrows Example 3 Table 3 close gaps d14=4.983/d17=2.733, beta=-0.032; no object distance is printed. |
| `nikon/Nikon1Nikkor10100mmf4VR` | 1/1 | — | Example 8 Table 8 prints infinity only; file borrows Example 3 Table 3 close gaps d14=5.899/d17=1.818, beta=-0.068; no object distance is printed. |
| `nikon/Nikon1Nikkor10100mmf4VR` | 2/1 | — | Example 8 Table 8 prints infinity only; file borrows Example 3 Table 3 close gaps d14=5.217/d17=2.499, beta=-0.116; no object distance is printed. |

### Lens not supported by MTF

No audit row exists until the lens is supported (diffractive surface, mirror path, or mixed index references).

| Lens file | State | Printed | Finding |
|---|---|---|---|
| `nikon/NikonAFSNikkor500mmf56EPFEDVR` | 0/1 | Ｄ０ = 14704.2290 | MTF rejects authored diffractive surfaces; no measurable conjugate audit. The native close gaps are retained. |
| `nikon/NikonAFSNikkor500mmf56EPFEDVR` | 0/2 | Ｄ０ = 2720.0000 | MTF rejects authored diffractive surfaces; no measurable conjugate audit. The native close gaps are retained. |
| `nikon/NikonNIKKORZ800mmf63VRS` | 0/1 | ｄ０ 4606.5453 | MTF rejects authored diffractive surfaces; no measurable conjugate audit. No local patent PDF was available. |
| `nikon/NikonReflexNikkor500mmf8New` | 0/1 | 1500 = 3.0f; displacement 8.05 toward the object side | MTF rejects folded/mirror paths, annular aperture and blocking surfaces; no measurable conjugate audit. |
| `samyang/SamyangAF35mmf28FE` | 0/1 | D0 1426.235159 | MTF rejects mixed d/D/e indices without physical wavelength data for every glass; Table 12 D1/D2 match the authored close state, but no measurable conjugate audit. |
| `samyang/SamyangAF35mmf28FE` | 0/2 | D0 302.0219835 | MTF rejects mixed d/D/e indices without physical wavelength data for every glass; Table 12 D1/D2 match the authored close state, but no measurable conjugate audit. |

### Other

| Lens file | State | Printed | Depths (declared / other) | Finding |
|---|---|---|---|---|
| `canon/CanonEF70300mmf4556DOISUSM` | 0/1 | 1.5m | — / — | Table 2 at 1.5 m prints Wide DX=0.71 mm, versus source-cam file travel 0.713980 mm; the source prints focus travel rather than a close-gap column and agrees at its 0.01 mm precision; MTF refuses the diffractive surface. |
| `canon/CanonEF70300mmf4556DOISUSM` | 20/1 | 1.5m | — / — | Table 2 at 1.5 m prints Tele DX=7.93 mm, versus source-cam file travel 7.934380 mm; the source prints focus travel rather than a close-gap column and agrees at its 0.01 mm precision; MTF refuses the diffractive surface. |
| `carl-zeiss-oberkochen/ZeissZX1Distagon35mmf2` | 0/1 | 0: 233 (Setting Z4) | +59.9 / +398.7 | Table 1 places neutral AF1 10 mm before modeled first surface AF2; Table 2 distance 233 ends at AF1. Diagnostic 233+10 gives +0.075284644 mm / +16.425560 depths; no distance-offset declaration is allowed. |
| `hasselblad/HasselbladHC210mmf4` | 0/1 | Object at 8.5 m | -1402.9 / -1412.8 | Table 3 explicitly labels “Object at 8.5 m” despite f=1 and native gaps 0.11679/0.04429 (file 24.5330753/9.3050003). Neither literal 8500 mm nor reinterpreted 8.5×210.07=1785.595 mm (91.696960 / alternate -121.373091 depths) passes; normalized-unit reinterpretation is not a unit conversion of the printed m. |
| `nikon/NikonAIZoomNikkor35200mmf3545S` | 1/1 | photographing distance Do=0.244 mm | +4049.4 / — | PDF p13 Fig.6E prose literally prints Do=0.244 mm among neighboring distances in m; Table 2 macro d5/d13/d19=11.260/12.036/7.881 match. Cannot silently repair the printed unit; authored BF is computed, not tabulated. |
| `nikon/NikonRUWMicroNikkor50mmf28` | 0/1 | D0 108.4613 | -376.4 / — | Patent Table 1 distances and d2/d15 match, but source object medium is water (n=1.3306); file header says app launches in air. This finite object-medium mismatch is not source rounding. |
| `nikon/NikonRUWMicroNikkor50mmf28` | 0/2 | D0 64.7658 | -612.6 / — | Patent Table 1 distances and d2/d15 match, but source object medium is water (n=1.3306); file header says app launches in air. This finite object-medium mismatch is not source rounding. |
| `sony/SonyE35mmf18` | 0/1 | 物体距離 300 | -188.9 / +33.6 | Example 1 paragraph 0058 gaps match; 物体距離 does not expressly name its datum, and neither reference passes; the reference remains unresolved. |
| `viltrox/ViltroxAF27mmf12XF` | 0/1 | 物距 最近(0.158m) | +167.7 / +3036.2 | Example 4 Table 11 close column has the same D1/D2 and 0.158 m; 物距 does not expressly identify its datum and neither reference passes. |
| `viltrox/ViltroxAF33mmf14E` | 0/1 | 物距 最近(0.4m) | -53.8 / +242.8 | Example 1 Table 2 close column has the same D1/D2 and 0.4 m; 物距 does not expressly identify its datum and neither reference passes. |
| `viltrox/ViltroxAF50mmf18FE` | 0/1 | 物距 最近(0.5m) | +241.7 / +507.3 | Example 1 Table 2 close column has the same D1/D2 and 0.5 m; 物距 does not expressly identify its datum and neither reference passes. |
| `vivitar/VivitarSeries1135mmf23` | 0/1 | 1500 mm. or less than 59 inches | -34.4 / +145.6 | Table II matches D10=10.4 mm, but the prose only says 1500 mm or less than 59 inches without naming a datum; neither reference passes. |

## Magnification Only

The source tabulates these states by magnification and prints no object distance. A conjugate is not inferred from a
magnification: the object distance that reproduces it is a calculation on the prescription, not a source value.
Declaring them needs a ruling on that rule.

- `canon/CanonEF100mmf28LIS`: 0/1
- `canon/CanonEF100mmf28Macro`: 0/1, 0/2
- `canon/CanonEF180mmf35LMacroUSM`: 0/1, 0/2, 0/3
- `canon/CanonEFM22mmf2STM`: 0/1
- `canon/CanonEFM28mmf34MacroISSTM`: 0/1
- `canon/CanonEFM32mmf14STM`: 0/1
- `canon/CanonFD35mmf2`: 0/1
- `canon/CanonRF100f28`: 0/1, 0/2
- `canon/CanonRF24mmF14LVCM`: 0/1, 0/2, 0/3
- `canon/CanonRF35mmF18MACROISSTM`: 0/1
- `canon/CanonRF50mmf12L`: 0/1
- `canon/CanonRF85mmf2Macro`: 0/1, 0/2
- `canon/CanonTSE135mmf4L`: 0/1
- `canon/CanonTSE50mmf28L`: 0/1
- `carl-zeiss-oberkochen/ZeissBatis1885`: 0/1, 0/2
- `carl-zeiss-oberkochen/ZeissTouit50mmf28Macro`: 0/1, 0/2
- `fujifilm/FujifilmFujinonXf16mmf14RWR`: 0/1, 0/2
- `fujifilm/FujifilmGF2035mmf4`: 0/1, 2/1
- `fujifilm/FujifilmGF30mmf56TS`: 0/1
- `fujifilm/FujifilmXF23mmf28RWR`: 0/1
- `fujifilm/FujifilmXF23mmf2RWR`: 0/1
- `fujifilm/FujifilmXF60mmf24R`: 0/1, 0/2
- `fujifilm/FujifilmXF80f28`: 0/1
- `fujifilm/FujifilmXF90mmf2`: 0/1
- `hasselblad/HasselbladHC120mmf4Macro`: 0/1
- `konica/KonicaHexanon60mmf12`: 0/1
- `laowa/Laowa100mmf28TiltShift1xMacro`: 0/1, 0/2
- `laowa/Laowa105mmf2STF`: 0/1
- `laowa/Laowa12mmf28ZeroD`: 0/1
- `laowa/Laowa15mmf2ZeroD`: 0/1
- `laowa/Laowa15mmf4Macro`: 0/1
- `laowa/Laowa180mmf45UltraMacroAPO`: 0/1, 0/2
- `laowa/Laowa24mmf14Probe`: 0/1
- `laowa/Laowa55mmf28TiltShift1xMacro`: 0/1, 0/2
- `laowa/Laowa58mmf28MacroAPO`: 0/1
- `laowa/Laowa65mmf28MacroAPO`: 0/1
- `laowa/Laowa90mmf28UltraMacroAPO`: 0/1, 0/2
- `mamiya/MamiyaSekorDAF150mmf28IF`: 0/1
- `mamiya/MamiyaSekorMacroC80mmf4`: 0/1
- `minolta/MinoltaAF100mmf2`: 0/1
- `minolta/MinoltaAF135mmf28`: 0/1
- `minolta/MinoltaAF20mmf28`: 0/1
- `minolta/MinoltaSTF135mmf28T45`: 0/1
- `minolta/MinoltaVarisoft85mmf28`: 0/1
- `nikon/Nikon1Nikkor32mmf12`: 0/1, 0/2
- `nikon/Nikon85f14D`: 0/1
- `nikon/NikonAF28f14D`: 0/1
- `nikon/NikonAFMicroNikkor60mmf28D`: 0/1, 0/2
- `nikon/NikonAFNikkor35mmf2D`: 0/1, 0/2
- `nikon/NikonAFSDXZoomNikkor1855mmf3556GEDII`: 0/1, 1/1, 2/1
- `nikon/NikonAFSMicroNikkor60f28G`: 0/1, 0/2
- `nikon/NikonAFSNIKKOR500mmf4EFLEDVR`: 0/1, 0/2
- `nikon/NikonAFSNikkor800mmf56EFLEDVR`: 0/1, 0/2
- `nikon/NikonAFSVR200mmf2GIFED`: 0/1
- `nikon/NikonAFZoomNikkor2885mmf3545`: 0/1
- `nikon/NikonAFZoomNikkor80200mmf28ED`: 0/1, 1/1
- `nikon/NikonAIAFZoomNikkor2485mmf284DIF`: 0/5, 0/6, 7/2, 7/3, 7/6, 11/1, 11/4, 11/6
- `nikon/NikonAINikkor600mmf56IFED`: 0/1
- `nikon/NikonAiNikkor200mmf2IFED`: 0/1
- `nikon/NikonAiSNikkor300mmf2IFED`: 0/1
- `nikon/NikonNikkor105f14E`: 0/1
- `nikon/NikonNikkor20mmf4`: 0/1
- `nikon/NikonNikkorN28mmf2`: 0/1
- `nikon/NikonNikkorZ40mmf2`: 0/1
- `nikon/NikonNikkorZ70200f28`: 0/1, 1/1, 2/1
- `nikon/NikonZ58f095SNoct`: 0/1
- `olympus/OMSystem90mmF35MacroISPRO`: 0/1, 0/2, 0/3
- `olympus/OlympusMZuiko75mmf18`: 0/1
- `olympus/OlympusZuikoAutoMacro50mmf2`: 0/1
- `olympus/OlympusZuikoAutoMacro90mmf2`: 0/1, 0/2
- `p.-angénieux/AngenieuxDEM180mmf23APO`: 0/1
- `panasonic/PanasonicLeicaDGMacroElmarit45mmF28ASPHMegaOIS`: 0/1, 0/2
- `pentax/Pentax645FA120mmf4`: 0/1
- `pentax/PentaxA135mmf18`: 0/1
- `pentax/PentaxA200mmf4MacroED`: 0/1
- `pentax/PentaxDA14mmf28EDIF`: 0/1
- `pentax/PentaxDA35mmf28MacroLimited`: 0/1, 0/2
- `pentax/PentaxDAStar300mmF4EDIFSDM`: 0/1
- `pentax/PentaxDFA50mmf14SDM`: 0/1
- `pentax/PentaxDFA64535mmf35AL`: 0/1
- `pentax/PentaxDFA64590mmf28EDAWSRMacro`: 0/1
- `pentax/PentaxF135mmf28IF`: 0/1
- `sigma/SigmaAPOMacro105mmf28OSHSM`: 0/1, 0/2
- `sigma/SigmaAPOMacro150mmf28OSHSM`: 0/1, 0/2
- `sigma/SigmaAPOMacro180mmf28`: 0/1, 0/2
- `sigma/SigmaDP3M50mmf28`: 0/1
- `sony/SonyE20mmf28`: 0/1
- `sony/SonyE50mmf18OSS`: 0/1, 0/2
- `sony/SonyFE24mmf14GM`: 0/1
- `sony/SonyFE24mmf18ZA`: 0/1
- `sony/SonyFE55mmf18ZA`: 0/1
- `sony/SonyFE90mmf28`: 0/1, 0/2
- `sony/SonyPlanarFE50mmf14ZA`: 0/1, 0/2
- `sony/ZeissSonnar35mmf2SonyDSCRX1`: 0/1, 0/2
- `tamron/TamronSP90mmf28Di`: 0/1, 0/2
- `tamron/TamronSPAF180mmf35Di`: 0/1, 0/2
- `tamron/TamronSPAF60mmf2Di`: 0/1, 0/2
- `voigtlander/VoigtlanderMacroApoLanthar125mmf25`: 0/1

## Neither Distance Nor Magnification

The source tabulates the close-focus gaps without saying what they focus on.

- `canon/CanonRF135f18`: 0/1
- `canon/CanonRF600mmf11ISSTM`: 0/1
- `canon/CanonRF800mmf11ISSTM`: 0/1
- `canon/CanonTSE90mmf28L`: 0/1
- `hasselblad/HasselbladHC50mmf4`: 0/1
- `nikon/NikonAFP70300mmf4556E`: 0/1, 1/1, 2/1
- `nikon/NikonAFS24120mmf4G`: 0/1, 1/1, 2/1
- `nikon/NikonNikkorAFS28300mmf3556G`: 0/1, 1/1, 2/1
- `nikon/NikonNikkorAFS70200mmf28E`: 0/1, 1/1, 2/1
- `nikon/NikonNikkorZ2470mmf4S`: 0/1, 1/1, 2/1
- `nikon/NikonZ135f18`: 0/1
- `nikon/NikonZ2470f28`: 0/1, 1/1, 2/1
- `nikon/NikonZ26f28`: 0/1
- `panasonic/PanasonicLumixSPro2470mmf28`: 0/1, 1/1, 2/1
- `sony/SonyFE20mmf18G`: 0/1
- `sony/SonySEL30mmf35`: 0/1

## Declared States Outside The Audit Limit

These declarations fail the audit; each needs its distance and close-focus gaps re-read against the source.

| Lens key | State | Depths |
|---|---|---|
| `thypoch-simera-50mm-f14` | 0/1 | -101.0 |
| `yongnuo-yn-56mm-f14s-da-dsm-wl-pro` | 0/1 | +36.2 |
| `yongnuo-yn-56mm-f14s-da-dsm-wl-pro` | 0/2 | +59.8 |
| `yongnuo-yn-85mm-f18s-df-dsm` | 0/1 | +47.5 |
