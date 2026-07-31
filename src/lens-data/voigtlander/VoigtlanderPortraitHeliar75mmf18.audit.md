# Voigtlander Portrait Heliar 75mm f/1.8 — Stage 4 Independent Audit

## Job card

- **Patent:** JP 2026-120386 A
- **Lens:** Voigtlander Portrait Heliar 75mm f/1.8
- **Embodiment:** Example 2 / second embodiment
- **Output stem:** `VoigtlanderPortraitHeliar75mmf18`
- **Scaling:** none
- **Focus status:** `PUBLISHED`
- **Authored aberration-control scope:** full production Over–Sharp–Under range, mapped to patent Minus–Sharp–Plus

The fixed patent and embodiment were not substituted. The prior audit was not used for the independent extraction,
convention check, or first calculation pass. It was consulted only after the fresh results had been established.

## Fresh source extraction

The critical rows were re-read from the rendered patent, not from the existing TypeScript file.

### Table 5, patent page 9

| Quantity | Published value |
|---|---:|
| Whole-system focal length | 73.36 mm |
| F-number | 1.858 |
| Half field | 16.59° |
| Object-side first surface to image | 98.66 mm |
| Back focal length | 47.08 mm |
| G1 / G2 / G3 EFL | +57.65 / −31.94 / +41.29 mm |
| G2+G3 in-situ EFL | +445.95 mm |
| Plus / Minus whole-system EFL | 72.73 / 73.99 mm |
| U-L | 6.00 mm |

### Table 6, patent page 10

The active prescription was re-entered as ten listed planes: nine numbered refracting surfaces plus one neutral aperture
stop. The skipped patent number 7 is the stop and is not a dummy plane. The three cemented junctions use the downstream
glass: surface 2 enters L4r, surface 5 enters L5r, and surface 9 enters L6r.

| Surface | R (mm) | D (mm) | nd | νd |
|---|---:|---:|---:|---:|
| 1 | +45.111 | 9.00 | 1.88300 | 40.80 |
| 2 | −130.000 | 2.50 | 1.84666 | 23.78 |
| 3 | +300.000 | U3 | air | — |
| 4 | −60.111 | 8.00 | 1.80518 | 25.46 |
| 5 | −29.500 | 5.20 | 1.64769 | 33.84 |
| 6 | +29.777 | 4.00 | air | — |
| STO | infinity | 2.60 | air | — |
| 8 | +75.555 | 2.55 | 1.78472 | 25.72 |
| 9 | +26.050 | 9.00 | 1.88300 | 40.80 |
| 10 | −80.111 | D10 | air | — |

### Tables 7 and 8, patent page 11

- Infinity: `D0 = infinity`, `D10 = 47.08 mm`.
- Minimum focus: `D0 = 591.50 mm`, `D10 = 57.00 mm`.
- Spherical-aberration positions: Plus `U3 = 5.730 mm`, Sharp `8.730 mm`, Minus `11.730 mm`.

Figure 5 on patent page 17 confirms three cemented doublets in positive-negative-positive group order, with the stop
between G2 and G3. The patent states that all refracting surfaces are spherical and that ordinary focusing translates the
whole optical system.

## Re-established conventions

- **Radius sign:** positive when the center of curvature lies toward image space, matching the project convention.
- **Spacing:** positive sequential axial distance to the next listed plane.
- **Spectral basis:** d-line `nd` and `νd`; the patent supplies no maker, melt, line indices, Sellmeier coefficients, or
  anomalous partial-dispersion data.
- **Conic/asphere:** none; no coefficient or conic conversion applies.
- **Scaling:** none.
- **Reference planes:** BFL is measured from surface 10 to the image plane. The minimum-focus distance is normalized from
  object plane to image plane.
- **Stop convention:** the stored `STO.sd` is the physical stop semi-diameter. LensVisualizer derives the entrance pupil
  paraxially through the front groups; the stop is not sized by a finite-angle exact Snell marginal ray.
- **Petzval:** calculated surface by surface as `φ/(n·n′)`.
- **Architecture labels:** “telephoto” requires `TL/EFL < 1`; “retrofocus” requires `BFD > EFL`.

## Independent calculation

The final TypeScript object is parsed directly by the verification script. A fresh reduced-angle ABCD calculation and a
separate sequential height/reduced-angle trace agree to machine precision.

### Sharp infinity state

| Quantity | Independent result | Patent | Difference |
|---|---:|---:|---:|
| EFL | 73.355535261 mm | 73.36 mm | −0.004464739 mm |
| BFL from surface 10 | 47.080342974 mm | 47.08 mm | +0.000342974 mm |
| Surface 1 to image track | 98.660000000 mm | 98.66 mm | 0.000000000 mm |
| Matrix determinant | 1.000000000 | 1 | 0 |
| Front principal plane from surface 1 | +24.264633415 mm | — | — |
| Rear principal plane from surface 10 | −26.275192287 mm | — | — |

`TL/EFL = 1.344956446`, so the system is not telephoto under the strict track criterion. `BFD/EFL = 0.641810367`, so it
is not retrofocus.

### Powers

| Quantity | Independent EFL |
|---|---:|
| L4f standalone | +38.863947498 mm |
| L4r standalone | −106.839291055 mm |
| L5f standalone | +64.434685328 mm |
| L5r standalone | −22.116992225 mm |
| L6f standalone | −51.838960188 mm |
| L6r standalone | +23.184191837 mm |
| G1 cemented | +57.653792361 mm |
| G2 cemented | −31.935457186 mm |
| G3 cemented | +41.290725031 mm |
| G2+G3 in situ | +445.954463076 mm |

The in-situ G2+G3 value includes the published air and stop region. It is not an algebraic sum of isolated group powers.

### Control states, pupils, and focus

| Patent / production state | U3 | EFL | BFL | Entrance-pupil SD | F-number |
|---|---:|---:|---:|---:|---:|
| Plus / Under | 5.730 mm | 72.732995314 mm | 51.895715150 mm | 18.048302412 mm | 2.014953918 |
| Sharp / normal | 8.730 mm | 73.355535261 mm | 47.080342974 mm | 19.740456555 mm | 1.857999967 |
| Minus / Over | 11.730 mm | 73.988824161 mm | 42.181827195 mm | 21.782740276 mm | 1.698336004 |

With the physical stop fixed, the Plus and Minus exposure shifts are +0.233993 EV and −0.259257 EV relative to Sharp.
Both are below one-third EV in magnitude. The physical stop semi-diameter required by the sharp-state paraxial F/1.858
model is 13.246082766 mm; the stored value is 13.246083 mm.

The close state gives object-to-surface-1 distance 591.50 mm, object-to-image distance 700.08 mm, transverse
magnification −0.135227110, reproduction `1:7.394966890`, and paraxial imaging residual 0.007120554 mm.

### Patent conditions

| Condition | Independent value | Requirement | Result |
|---|---:|---:|---|
| `(U-L)/f`, using the 6.00 mm endpoint span | 0.081793419 | `> 0.07` | Pass |
| `nd1` | 1.88300 | `> 1.83` | Pass |
| `nd3` | 1.88300 | `> 1.83` | Pass |
| `fGr23/fGr1` | 7.735041266 | `> 7.0` | Pass |
| endpoint EFL-change expression | 0.017119756 | `< 0.1` | Pass |

The source definition of U-L is internally ambiguous: the prose describes an absolute G1-G2 gap, but no published U3
gap equals 6.00 mm. The Plus-to-Minus endpoint span is exactly 6.00 mm and reproduces the patent's printed 0.082.

### Petzval and geometry

- Surface-by-surface Petzval sum: `+0.002916318626 mm⁻¹`.
- Signed Petzval radius under `−1/ΣP`: `−342.898060272 mm`.
- Minimum element edge thickness: `1.396705827 mm`.
- Maximum spherical rim slope: `0.705127152`, or `35.188702846°`.
- Minimum shared-gap clearance margin: `2.220969211 mm`.
- Conic-limit checks: not applicable.
- On-axis exact bundle containment: pass for Plus, Sharp, and Minus.
- Off-axis containment at 60% field: no first clipping at a cemented interface. The extreme negative-pupil Minus ray
  first clips at surface 1, which is external entrance vignetting rather than hidden internal intrusion.
- Independent render-trim proxy: pass. The repository `computeElementRenderDiagnostics()` implementation was unavailable.

## Fresh glass audit

The glass audit was repeated from the patent `(nd, νd)` coordinates without beginning from the existing labels. Current
OHARA, HOYA, SCHOTT, HIKARI, CDGM, and SUMITA catalogs contain exact or near-exact coordinate equivalents for every
code. Multiple vendors supply defensible equivalents, so the audit does not establish the actual production vendor or
melt. The final data therefore retains vendor-neutral six-digit classes and does not add `nC`, `nF`, `ng`, `dPgF`, APO,
or anomalous-dispersion claims.

Representative matches include S-LAH58 / TAFD30 / N-LASF31A for 883408, S-TIH53 / FDS90-SG / N-SF57 for 847238,
S-TIH6 / FD60 / N-SF6 for 805255, S-TIM22 / E-FD2 / N-SF2 for 648338, and S-TIH11 / FD110 / N-SF11 for 785257.
The complete vendor-by-vendor residual table is in the companion CSV.

## Corrections made

### 1. Physical stop semi-diameter and derivation

- **Old:** `STO.sd = 13.556330 mm`, described as derived by exact Snell tracing.
- **Corrected:** `STO.sd = 13.246083 mm`, derived from the sharp-state paraxial entrance pupil required by F/1.858.
- **Source location:** project Lens Data Specification, Aperture Stop section; patent Table 5 for F/1.858 and Tables 6/8
  for the sharp prescription.
- **Independent evidence:** front-to-stop paraxial matrix coefficient `A = 0.671011988162`; required entrance-pupil SD
  `73.355535261 / (2 × 1.858) = 19.740456206 mm`; physical stop SD `A × EP_SD = 13.246082766 mm`. The old value implied
  paraxial F/1.815478 rather than F/1.858.
- **Downstream consequences:** data header, stop surface, analysis pupil text, all pupil states, exact bundles, local type
  validation, analysis checks, result JSON, audit, and manifest were regenerated. Element edge and gap geometry did not
  change.

### 2. Exact G2+G3-to-G1 focal-length ratio

- **Old:** `7.7354727`, presented as independently recomputed.
- **Corrected:** `7.7350413` from unrounded group matrices.
- **Source location:** patent Table 5 and the complete Table 6 prescription.
- **Independent evidence:** `445.954463076 / 57.653792361 = 7.735041266`. The old figure is the quotient of rounded
  Table 5 values `445.95 / 57.65`.
- **Downstream consequences:** analysis architecture text and condition table were corrected. The condition still passes.

### 3. Exact `(U-L)/f` condition value

- **Old:** `0.0817884`.
- **Corrected:** `0.0817934`.
- **Source location:** patent Table 5 (`U-L = 6.00 mm`) and the Table 6 sharp prescription.
- **Independent evidence:** `6.00 / 73.355535261 = 0.0817934186`. The old figure used the rounded 73.36 mm summary.
- **Downstream consequences:** analysis condition table corrected; pass status unchanged.

### 4. Exact endpoint focal-length-change condition

- **Old:** `0.0171756`.
- **Corrected:** `0.0171198`.
- **Source location:** patent Tables 5, 6, and 8.
- **Independent evidence:** exact Plus, Sharp, and Minus EFLs give
  `(|72.732995314−73.355535261|+|73.988824161−73.355535261|)/73.355535261 = 0.0171197558`.
- **Downstream consequences:** analysis condition table corrected; pass status unchanged.

### 5. Paraxial image-shift arithmetic

- **Old:** Plus `+4.815715 mm`; Minus `−4.898173 mm` relative to Sharp.
- **Corrected:** Plus `+4.815372 mm`; Minus `−4.898516 mm`.
- **Source location:** patent Tables 6 and 8 for the control states.
- **Independent evidence:** exact BFL subtraction from `51.895715150`, `47.080342974`, and `42.181827195 mm`.
- **Downstream consequences:** analysis prose corrected. The requirement to refocus after control adjustment is unchanged.

### 6. Full centered aberration-control range

- **Old:** the runtime variable contained only Sharp and Minus, `[8.730, 11.730]`, because the former two-position
  schema could not keep Sharp as the default while also exposing Plus.
- **Initial centered integration:** the centered variable contained `[5.730, 8.730, 11.730]`, with patent-state labels
  Plus, Sharp, and Minus at signed control positions −1, 0, and +1. The base surface remained the published Sharp spacing
  of 8.730 mm.
- **Source location:** patent Table 8 on page 11 and spherical-aberration plots in Figs. 6–8.
- **Independent evidence:** the rendered source gives U3 = 5.730 / 8.730 / 11.730 mm for the Plus / zero / Minus states;
  the two endpoint offsets from Sharp are both exactly 3.000 mm.
- **Downstream consequences:** data header, control description and labels, variable tuple, analysis scope, and audit
  state descriptions were updated. No optical prescription value or independently calculated state changed.

### 7. Production ring labels and direction

- **Old:** the slider followed patent table order, with Plus / U3 = 5.730 mm on the left and Minus / U3 = 11.730 mm on
  the right. Those source-state names did not match the production lens's Over / Under ring.
- **Corrected:** the slider follows the physical ring from left to right: Over / Sharp / Under. Its tuple is
  `[11.730, 8.730, 5.730]`, so Over maps to patent Minus, Sharp remains the centered default, and Under maps to patent
  Plus.
- **Source location:** Cosina's PORTRAIT HELIAR 75mm F1.8 E-mount instruction manual, page 5, and patent Table 8 on
  page 11.
- **Independent evidence:** the manual diagram prints `← over | under →`; physical inspection confirms that the front
  group moves forward toward Over and backward toward Under, corresponding to increasing and decreasing U3.
- **Downstream consequences:** production-facing labels, slider tuple order, data header, analysis state mapping, and
  audit state descriptions were corrected. The three published spacings and all optical calculations are unchanged.

No patent radius, spacing, index, Abbe number, focus row, control row, element count, group count, or surface sign was
corrected. No source value was scaled. No dummy plane, cover plate, filter, or generic cement layer was retained.

## Targeted final gate

Independent optical and source checks:

- Original patent and job card byte-exact copy checks: pass.
- Final TypeScript literal extraction: pass.
- Structural/schema mirror, canonical mount/format ids, patent metadata, and exactly one `STO`: pass.
- Base-`d` / `var` consistency for focus and centered aberration control: pass.
- Plus, Sharp, Minus, and close-focus states: pass.
- Sequential y–ν / ABCD cross-check and determinant checks: pass.
- EFL, BFL, principal planes, track, group powers, standalone powers, pupils, f-number, focus, magnification, conditions,
  Petzval, geometry, and bundle checks: pass.
- Glass-label discipline and absence of unsupported spectral fields: pass.
- Analysis section order, metadata, quantitative token, voice, and superseded-value checks: pass.

Repository integration checks completed on 2026-07-31:

- `npm run typecheck`: pass.
- `npm run format:check`: pass.
- `npm run lint`: pass with zero errors and three pre-existing warnings outside this lens package.
- `npm run test`: pass, 213 test files and 2,526 tests.
- `npm run generate:glass-reports`: pass, eight test files and 13 tests.
- `npm run build`: pass, including metadata generation, the production bundle, and 981 prerendered routes.

## Final decision

The corrected data and analysis pair agree with the fixed patent embodiment, the production control-ring order, and the
regenerated independent calculation. The package exposes Over–Sharp–Under from left to right while preserving Sharp as
the base prescription and centered runtime default; these positions map to patent Minus–Sharp–Plus.

**READY_FOR_BATCH**
