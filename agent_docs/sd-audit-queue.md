# Semi-Diameter Audit Queue

Open work for the semi-diameter / cross-section audit. Follow
[patent-figure-sd-audit-procedure.md](patent-figure-sd-audit-procedure.md) for each row. The queue holds only open
rows: when a lens is finished, log the evidence in its `*.audit.md` sidecar and delete the row here. The first pass
that seeded Sections B and C is written up in
[records/patent-figure-sd-audit-2026-07.md](records/patent-figure-sd-audit-2026-07.md).

Take **Section A top-down** — those rows have physics behind them. Section B is figure-evidence only and is lower
value per hour. Sections D and E hold the MTF field and image-plane censuses. Section F holds traced field-coverage
shortfalls that need a source, a decision or engine support rather than a larger rim. Section H holds lenses whose
stop still opens to the marketed f-number. Section I holds stations whose stated axial beam does not pass.

Status values: `todo` · `in progress` · `blocked (reason)` · `partial (what remains)`.

## Section A — surfaces below the image-circle floor

Regenerate this table at any time:

```bash
npm run audit:image-circle -- --markdown
```

A surface listed here cannot pass a corner ray to its own format. Rows marked **wide** have a half-field past ~42°,
where the script's exit-pupil approximation stops being trustworthy — symmetric ultra-wides genuinely do have small
rear elements, so settle those with the traced check (`npm run audit:field-coverage`, the Traced corner column). Wide
rows whose converged corner chief ray clears every rim are false positives, recorded in [decisions.md](decisions.md)
instead of here.

| Lens | File | Patent | In `patents/` | Surfaces below floor (sd < floor) | Worst | Traced corner | Status |
|---|---|---|---|---|---|---|---|
| OLYMPUS F.ZUIKO 35mm f/2.8 (Olympus XA) | `olympus/OlympusXAZuiko35mmf28.data.ts` | US 4,235,521 | yes | 11 (7.40 < 8.05) | 0.65 mm | no chief ray past 25.7° with the inferred stop (Section F) | todo |
| SAMSUNG 4.3mm f/1.5 (Samsung Galaxy S9) | `samsung/SamsungGalaxyS9MainWideCameraLens.data.ts` | US 2021/0149156 A1 | yes | 12A (1.76 < 1.83), 14A (2.00 < 2.51) | 0.51 mm | image height peaks at 2.74 mm (Section F) | blocked (needs higher-precision S13/S14 coefficients) |
| RODENSTOCK GRANDAGON-N 90mm f/4.5 | `rodenstock/RodenstockGrandagonN90mmf45.data.ts` | DE 2444954 A1 | yes | 11 (20.20 < 28.85), 12 (25.20 < 33.46) | 8.65 mm | 11 and 12 clear; the 5×7 corner chief ray (50.3°) clips at 1 (30.66 > 25.2) | todo — **wide** |
| RODENSTOCK GRANDAGON-N 65mm f/4.5 | `rodenstock/RodenstockGrandagonN65mmf45.data.ts` | DE 2444954 A1 | yes | 11 (14.40 < 21.64), 12 (18.00 < 25.09) | 7.24 mm | the 4×5 corner chief ray (51.7°) clips at 1 (22.82 > 18), 2 (14.58 > 14.4), 3 (12.77 > 12.7) and 12 (18.06 > 18) | todo — **wide** |
| RODENSTOCK GRANDAGON-N 75mm f/4.5 | `rodenstock/RodenstockGrandagonN75mmf45.data.ts` | DE 2444954 A1 | yes | 11 (16.80 < 21.57), 12 (21.00 < 25.04) | 4.77 mm | 11 and 12 clear; the 4×5 corner chief ray (47.5°) clips at 1 (23.72 > 21) | todo — **wide** |

The three Grandagon-N f/4.5 rows read 100% in `audit:field-coverage` because their declared 105° field is not
clip-checked; the corner chief ray still clips at the front rims listed, so the traced floor is surface 1, not 11/12.

### Not covered by the check

`npm run audit:image-circle` skips 37 lenses: six folded designs (the axial gap to the image plane is not the distance
the ray travels) and 31 files with no usable `imageFormat`, nine of them `reference/` mirror fixtures. Filling in
`imageFormat` where the format is unambiguous — see [lens-mount-format-backfill.md](lens-mount-format-backfill.md) —
brings those into scope for free.

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

The 2026-09-24 field-coverage pass raised rims on six of these lenses to the traced format corner (XF 23mm f/2, XF 18mm
f/2, GF 20-35mm, GFX100RF 35mm f/4, X100V 23mm f/2 and XF 16-55mm f/2.8 II; see their `*.audit.md` sidecars), so their
ratios above are stale: re-measure before acting on those rows.

## Section C — source blockers

Nothing can be audited on these until the source is available.

| Lens | Blocker | Unblocks by |
|---|---|---|
| Zeiss Touit 50mm f/2.8 Macro | `JP 2015-161792 A` not in `patents/` | adding the PDF |
| XF 16-55mm f/2.8 II | `US_2025234079_A1.pdf` has no text layer; Example 1's sheet not located | rendering pages to find it, or OCR |
| GFX100RF 35mm f/4 (front group) | `US_2025362482_A1.pdf` has no text layer | OCR — FIG. 5 defines `hE2` as a surface's effective radius, so the tables may publish clear apertures outright |
| Sigma 10-18mm f/2.8 | 図8 printed as a thumbnail; <20 px per element edge at 600 dpi | a higher-resolution copy of JP 2024-104911 A |
| Sigma 14-24mm f/2.8 | 図1 exists only as the front-page abstract drawing (the drawing section starts at 図3) | a higher-resolution copy of JP 2018-189733 A |
| Fujifilm X10 7.1-28.4mm f/2-2.8 | `US 2014/0133036 A1` not in `patents/`; its fixed iris and station f-numbers are unchecked | adding the PDF |
| Nikon AF-S DX 55-200mm f/4-5.6G ED VR II | `WO 2015/141574 A1` not in `patents/`; its fixed iris is unchecked and its `nominalFno` mixes marketed ends with the patent's middle value | adding the PDF |
| Olympus Zuiko Auto-Zoom 65-200mm f/4 | `US 4,568,150` not in `patents/`; its fixed iris and station f-numbers are unchecked | adding the PDF |

## Section D — MTF field census

MTF traces the whole transmitted beam through the authored clear apertures, so it surfaces semi-diameters that block
light the production lens transmits. Regenerate at any time (about three minutes):

```bash
node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/audit-mtf.mjs --fields --list
```

Rows are lenses at infinity, wide open, at the wide end. "Edge" is the modeled edge: the largest image height whose
real chief ray passes every clear aperture, continued toward a declared format corner for as long as part of the beam
still passes; lenses whose edge merely misses the format corner are not listed here, and fisheyes
without a declared `projection` are queued in Section F. Later rows are
full-beam findings where the edge is reached but the authored clear apertures pass too little or too much of the beam
there; check them against the patent figure.

| Lens | File | Finding | Status |
|---|---|---|---|
| VIVITAR SERIES 1 70-210mm f/3.5 | `vivitar/VivitarSeries170210mmf35.data.ts` | On axis only the beam around the chief ray transmits and 30 lp/mm reads 0.00; in photopic mode the chief-ray solve fails beyond 2 % of the field. Surface 21 sits at zero gap before the stop, so rays meet the stop plane behind themselves | todo |
| SONY FE 12-24mm f/2.8 GM | `sony/SonyFE1224mmf28GM.data.ts` | Clear apertures likely wider than production: the 10.8 mm field traces 7,288 pupil rays against 4,060 on axis, and tangential 30 lp/mm falls to 0.03 there | todo |
| CANON RF 24-105mm f/2.8 L IS USM Z | `canon/CanonRF24105mmf28Z.data.ts` | Chief ray reaches the 21.6 mm corner, but the cat's-eye closes to a hairline around it (no sample of a 300 × 300 lattice over 1.5 entrance-pupil radii transmits); 20.6 mm still transmits 814 rays | todo |
| MEYER OPTIK GÖRLITZ DOUBLE-PLASMAT 135mm f/4.5 (patent model) | `meyer-optik-goerlitz/MeyerOptikGorlitz135mmf45DoublePlasmat.data.ts` | Chief ray reaches the 158.6 mm corner, but the cat's-eye closes to a hairline around it | todo |
| SONY ZEISS VARIO-SONNAR T* 9-72mm f/2.8-4.5 (RX100 VI / VII) | `sony/ZeissVarioSonnarT9072mmf2845SonyDSCRX100M67.data.ts` | The chief ray is blocked in a band near 98 % of the 7.17 mm edge and transmits again beyond it; tangential 30 lp/mm is 0.00 from 7.1 mm | todo |

## Section E — MTF image-plane census

These lenses place their image plane away from their own prescription's paraxial focus at infinity, by more than
`MTF_IMAGE_PLANE_DEPTHS` (10) diffraction depths of focus (2λN² at the d line and the open f-number). At the authored
plane their MTF collapses; the MTF tab's default best axial focus (and its "Design plane (auto)" option) refocuses
them and says why. Where diagnosed, the
source's printed back focus contradicts its prescription; undiagnosed rows may be transcription errors. Folding a listed plate to its air-equivalent, or
modeling it in `rearPlates`, leaves paraxial defocus unchanged, so plates alone rarely explain these offsets.
Regenerate (about three minutes):

```bash
node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/audit-mtf.mjs --focus
```

Work each row with [lens-patent-audit.md](lens-patent-audit.md) and the source PDF. Correct transcription errors,
and model plates the source lists in `rearPlates`. Where the source itself is inconsistent, follow the source-errata
standard in [lens-patent-audit.md](lens-patent-audit.md#source-errata) (an unresolved contradiction is queued in
Section G), then delete the row here. Offset is paraxial focus minus the authored plane (positive: the plane sits in front of focus).

| Lens | File | Offset (mm) | Depths | Cause | Status |
|---|---|---|---|---|---|
| NIKON R-UW AF ZOOM-NIKKOR 20-35mm f/2.8 | `nikon/NikonRUWAFZoomNikkor2035mmf28.data.ts` | +0.220 | 24 | Water interface is already traced; several existing source emendations remain unverified | partial (rear plate migrated; source reconstruction unresolved) |
| HASSELBLAD XCD 45mm f/3.5 | `hasselblad/HasselbladXCD3545.data.ts` | +0.171 | 12 | Data note: source infinity BF 26.88 mm kept although the raw prescription computes otherwise | blocked (patent missing: WO2017221949A1; only Japanese republication present) |

## Section F — traced field coverage below 90%

Regenerate the list at any time:

```bash
npm run audit:field-coverage -- --markdown
```

The analysis half-field follows the real chief ray to the format corner and ends at the first clear aperture that clips
it ([architecture/optics-engine.md](architecture/optics-engine.md)). Stations whose patent prints a smaller image height
(distortion-corrected wide ends) or declares a narrower field are correct as modeled; they are recorded under "Checked
and excluded" in [decisions.md](decisions.md), not here. Every other station below 90% has a row here, and none of
them is fixed by raising semi-diameters alone: each needs the source, decision or engine support in its row.

| Lens | File | Station | Traced edge | Reason | Status |
|---|---|---|---|---|---|
| OLYMPUS ZUIKO AUTO-FISHEYE 16mm f/3.5 | `olympus/OlympusZuiko16mmf35.data.ts` | — | 43% | No `projection`: the 180° diagonal fisheye (US 3,850,509 col. 1; FIGS. 2B–2D at 90°) is traced as rectilinear and the solver gives up past ~52°. Declare `fisheye-equisolid` (fullFieldDeg 180, maxTraceFieldDeg 90, imageCircleMm ≈43.0 from the traced 21.52 mm at 90°), then raise the front rims to the 90° chief ray (1 20.9, 3 10.7, 4 9.7, 5 9.0, 6 7.0, 7 5.9 mm; 2 needs 11.2 mm on R 11.79, past the default rim-slope cap). FIG. 1 draws L1 ≈3.8× L4 (data 1.45×). | todo |
| NIKON GYOGYOTTO 20mm f/8 | `nikon/NikonGyogyotto20mmf8.data.ts` | — | 67% | No `projection` for a "so-called fisheye" (US 5,949,588 Table 8; 2ω 164°, FIG. 16A Y = 22.0 mm, distortion referenced to 2f·sin(θ/2)). Declare `fisheye-equisolid` (fullFieldDeg 164, imageCircleMm 44.0), then rims at the 78.46° corner: 1 ≥ 28.85, 2 ≥ 18.13 mm. | todo |
| KINOPTIK SUPER-TEGEA 1.9mm f/1.9 FISHEYE | `kinoptik/KinoptikSuperTegea19mmf19Fisheye.data.ts` | — | 85% | Its traced mapping is close to stereographic (US 3,037,426 Ex. 3; 197°, 8.7 mm circle), which no projection kind covers, so it is traced as rectilinear and no chief ray reaches the stop centre past ~81°. The rims are not the limit. | blocked (needs a stereographic projection kind) |
| OLYMPUS F.ZUIKO 35mm f/2.8 (Olympus XA) | `olympus/OlympusXAZuiko35mmf28.data.ts` | — | 74% | The inferred stop sits mid-gap, 2.898 mm behind r6; FIG. 2 (US 4,235,521) draws it ≈0.6 mm behind r6. With the data's stop no chief ray exists past ~26°: L1's rear and L2's front meet at h ≈ 5.93 mm. Move the stop per FIG. 2 (surface 7 d ≈ 0.60, STO d ≈ 5.20), then raise 10 ≥ 7.13 and 11 ≥ 7.79 mm (also closes its Section A row). | todo |
| NIKON ZOOM-NIKKOR AUTO 80-200mm f/4.5 | `nikon/NikonAutoZoomNikkor80200mmf45.data.ts` | 80 / 126.4 / 200 mm | 83 / 81 / 70% | US 3,615,125 prints no stop; the inferred stop mid-gap in D18 blocks every corner (at 200 mm the chief ray would cross L1 past its ≈30.3 mm knife edge; at 80 mm the 8/9 gap closes at ≈14.2 mm). A stop 1–3 mm behind r18 passes all three corners within the current rims. | todo (needs a measured diaphragm position) |
| NIKON NIKKOR 800mm f/8 ED | `nikon/NikonNikkor800mmf8ED.data.ts` | — | 62% | Tagged `6x6` for the patent's 6° field (US 3,774,991 Ex. III). With the inferred focusing-unit stop, the 6×6 corner needs front-group chief-ray heights of 86–88 mm, past L1's ≈67 mm knife edge (ceiling ≈78%). On 24×36 the edge already clears the corner. | todo (format or stop decision) |
| NIKON AI ZOOM-NIKKOR 35-105mm f/3.5-4.5 S | `nikon/NikonAIZoomNikkor35105mmf3545.data.ts` | Wide 36.2 mm | 82% | d9 = 1.0 as printed (US 4,699,475 Table 7) thins L5 to a knife edge at h ≈ 6.62 mm, and no chief ray exists past ≈30.3°. d9 ≈ 3.5 fits better: focal lengths 36.33 / 60.32 / 103.72 mm against the printed 36.2 / 60 / 103 (1.0 gives 37.39 / 62.15 / 106.58), FIG. 14 draws L5 as thick as the 3.5 mm L8, and Embodiments 4–6 use 3.5. With 3.5 the corner needs 9 ≥ 7.71 and 10 ≥ 7.05 mm. | todo (prescription decision) |
| PENTAX HD D FA645 35mm f/3.5 AL [IF] | `pentax/PentaxDFA64535mmf35AL.data.ts` | — | 70% | The declared 44.8° matches the patent's W, but its chief ray lands at 24.28 mm (−32% distortion; Fig. 14D shows −3% at y = 34.85). Table 4's surface-5A asphere (K +1.00, all coefficients positive; US 2001/0007512 A1 PDF p. 14) looks sign-damaged: K −1.00 with A6/A8/A10 negative traces to 34.82 mm. | blocked (confirm against JP Hei 11-354772) |
| SAMSUNG 4.3mm f/1.5 (Samsung Galaxy S9) | `samsung/SamsungGalaxyS9MainWideCameraLens.data.ts` | — | 74% | 13A/14A are cut to 2.0 mm because the seven-decimal Table 4 coefficients diverge beyond it; with no apertures at all the image height peaks at 2.74 mm (patent Y 3.50 mm, US 2021/0149156 A1 FIG. 2). Restoring the published 2.720/2.880 radii cannot help. | blocked (needs higher-precision S13/S14 coefficients) |
| VIVITAR SERIES 1 35-85mm f/2.8 VMC | `vivitar/VivitarSeries13585mmf28.data.ts` | Wide 36 mm | 75% | No chief ray exists past ~30° with any rims: it would cross L4 above its ≈16.07 mm zero-edge height, and S9 is capped by the L5/L6 contact at the tele gap. Table I computes to f 38.46–89.08 mm against the text's 36–83 mm (US 3,975,089), a possible Table I error. | blocked (needs a corrected Table I) |
| OLYMPUS ZUIKO AUTO-W 18mm f/3.5 | `olympus/OlympusZuikoAutoW18mmf35.data.ts` | — | 73% | US 4,029,397 is not in `patents/`. With the inferred mid-d10 stop, surfaces 16 and 17 meet at h ≈ 5.66 mm and no chief ray exists past 42.3° (declared 50°). Check the FIG. 2 stop and r16/r17/d16 (and the documented r13 sign conflict) before touching rims. | blocked (patent PDF missing) |
| SAMYANG AF 35-150mm f/2-2.8 FE / L | `samyang/SamyangAF35150mmf228.data.ts` | 35 mm | 81% | US 2025/0231383 A1 is not in `patents/`; its Google Patents text gives ω 30.9° at 35.989 mm (f·tanω 21.54 mm). Corner minimums: 6A ≥ 18.46, 7 ≥ 18.33, 8 ≥ 15.61, 40A ≥ 13.83, 41A ≥ 15.41 mm. | blocked (patent PDF missing) |
| NIKON AF-P DX NIKKOR 18-55mm f/3.5-5.6 G VR | `nikon/NikonAFPDX1855mmf3556G.data.ts` | 18.5 mm | 86% | US 10,690,896 B2 is not in `patents/`; analysis.md gives Y 14.25 mm. Only surface 1 clips: 15.3 → ≥ 17.68 mm at the corner. | blocked (patent PDF missing) |
| MINOLTA AF ZOOM 35-70mm f/4 | `minolta/MinoltaAF3570mmf4.data.ts` | Wide 36 mm | 90% (89.6) | US 4,560,253 is not in `patents/`; analysis.md's y' = 21.6 mm is unverified. Corner minimums: 3 ≥ 15.26, 4 ≥ 14.82, 4A ≥ 14.76 mm. | blocked (patent PDF missing) |

### Not covered by the traced check

`npm run audit:field-coverage` skips fisheye projections and folded paths, whose field is declared rather than traced,
hidden lenses, and files with no usable `imageFormat` (the same backfill as Section A).

## Section G — prescription errors found in passing

Files whose authored surfaces do not reproduce the source's own first-order values. Fisheye projections skip the
Gaussian focal-length check in `buildLens()`, so these do not fail validation. Work each row under the source-errata
standard in [lens-patent-audit.md](lens-patent-audit.md#source-errata).

| Lens | Finding | Fix |
|---|---|---|
| Nikon Fisheye-Nikkor 6mm f/2.8 | The file's surfaces trace to EFL 37.41 mm and a back focus of 273 mm; US 3,737,214 Example I states f = 6.3 and B.f. = 37.657. The table prints `R18 = −45.0`; `+45.0` gives EFL 6.300 and back focus 37.658. The file also places the stop ahead of the filter, while Fig. 1 draws it behind R17, and omits the listed filter plate R11/R12 (1.8 mm, n 1.51823). | Re-audit: correct R18 and the element types it changes, move the stop per Fig. 1, draw the filter plate, re-derive semi-diameters, and rewrite the analysis, which treats 37.4 mm as the Gaussian focal length. |
| Nikkor Z 85mm f/1.8 S | The printed Example 3 table of JP 2020-173366 A traces to EFL 82.222 mm and a total length of 110.81 mm; the patent states 83.00 and 111.35, and its spherical-aberration plot does not show the −0.13 mm undercorrection the table produces. Recorded as an `unresolved` `sourceErrata` entry. Single changes near the second group (R8, R10, the L9 index) restore the focal length and axial correction, but none restores the off-axis correction as well. | Isolate the misprint against the patent text and its sibling examples, then correct it under the source-errata standard; leave it unresolved if no single cause meets that standard. |
| Vivitar Series 1 35-85mm f/2.8 | Every row of Table I of US 3,975,089 and its three claim copies matches the file, yet the table computes 38.46 / 89.08 mm and a back focus of 45.82 mm where the text states 36-83 mm and 40.06 mm, and Group IV computes a power of 0.0319 against Table III's .0333. No single Group IV value repairs all three, and the patent has no aberration plots. Recorded as `unresolved`. | A second printing of the prescription (a foreign counterpart of application 462,366). |
| Konica UC Zoom-Hexanon AR 80-200mm f/4 | Every row of the table of JP S51-37247 A matches the file and the example is not normalized, yet it traces to 80.88 / 199.75 mm and a back focus of 49.50 mm where the patent prints f = 79.925~196.158 and fB = 48.523. The table's zoom ratio matches the focal lengths on the patent's own plots (80.0 / 197.5 mm), and no single misprint-style change among 7,444 tried reproduces focal lengths and back focus together. Recorded as `unresolved`. | A second printing of the table (a counterpart of application S49-110764). |
| Schneider TV-Variogon 20-600mm | The file is Tables I and IB of US 3,912,373 times 20 at every value, yet the nine stations compute 19.83-613.64 mm against the stated 20-592 mm and the paraxial image drifts 12.8 mm over the range. Most of it is component 1, which computes 138.63 mm against Table IA's 138.02; eight single values in L6-L8 would each repair it and none can be singled out. Recorded as `unresolved`. The station f-numbers are those of the file's one iris; the patent's 1:6.3 at 592 mm is not what its own focal lengths give (4.29). | A second kind of source-internal evidence for one of the candidate values. |
| Canon EF 70-200mm f/4L USM | The printed table of JP 2000-284174 A cannot pass its own f/4.1 at 194.57 mm: the 0.10 mm air space between the second and third elements (R 58.007 / 59.256) closes at 22.15 mm, below the 22.30 mm the ray needs, so the largest on-axis beam the table passes there is f/4.128. The file traces f/4.36 on the rim of surface 5. Not a rim question. | Decide whether the tele label is the printed 4.1 or what the table passes (4.13, which also prints as 4.1), then raise the two rims to the edge-contact height. |
| Vivitar Series 1 70-210mm f/2.8-4 | The printed table of US 4,758,073 cannot pass its own f/4.01 at 203.786 mm: surfaces 8 and 9 (R 37.576, gap 6.210, R −40.656) meet at 15.26 mm, below the 15.62 mm the ray needs, so the geometry tops out at f/4.11. The file traces f/4.36 on the rim of surface 8. Not a rim question. | A second kind of source-internal evidence for the gap or a radius; until then the tele label is unreachable. |
| Files with comment-only source corrections | Lens files whose headers describe an erratum or misprint in the source but carry no `sourceErrata` entry, from before the field existed (`grep -rli "erratum\|misprint" src/lens-data --include="*.data.ts"`). The MTF tab discloses nothing for them. | Record each as a `corrected` or `unresolved` entry under the standard, then delete this row. |

## Section H — stop opens wider than the source design f-number

`nominalFno` sizes the iris, and "wide open" means the source's design f-number (`apertureDesign`), with the marketed
value in `apertureMarketing`. These files still open the stop to the faster, marketed number, which traces a beam the
prescription was not corrected for. `__tests__/src/lens-data/patentMetadata.test.ts` holds the same list and fails
when a lens joins or leaves it, so delete the key there with the row here.

| Lens | File | nominalFno | apertureDesign | What to read | Status |
|---|---|---|---:|---|---|
| CANON 12.5-62.5mm f/2-3.9 (Canon PowerShot G1 X Mark II) | `canon/CanonPowerShotG1XII125625mmf239.data.ts` | [2, 3.5, 3.9] | 2.06 | Variable-aperture zoom: read the design f-number at every zoom station from the source and replace the marketed array | todo |
| CANON 8.8-36.8mm f/1.8-2.8 (Canon PowerShot G7 X) | `canon/CanonPowerShotG7X88368mmf1828.data.ts` | [1.8, 2.54, 2.8] | 1.85 | Variable-aperture zoom: read the design f-number at every zoom station from the source and replace the marketed array | todo |
| CANON EF 28-105mm f/3.5-4.5 II USM | `canon/CanonEF28105mmf3545II.data.ts` | [3.5, 4, 4.5] | 3.63 | Variable-aperture zoom: read the design f-number at every zoom station from the source and replace the marketed array | todo |
| CANON EF 28-135mm f/3.5-5.6 IS USM | `canon/CanonEF28135mmf3556IS.data.ts` | [3.5, 4.24, 5.6] | 3.6 | Variable-aperture zoom: read the design f-number at every zoom station from the source and replace the marketed array | todo |
| CANON EF 28-70mm f/3.5-4.5 II | `canon/CanonEF2870mmf3545II.data.ts` | [3.5, 4, 4.5] | 3.6 | Variable-aperture zoom: read the design f-number at every zoom station from the source and replace the marketed array | todo |
| CANON EF 70-300mm f/4-5.6 IS USM | `canon/CanonEF70300mmf456ISUSM.data.ts` | [4.0333081, 4.74696994, 5.94591516] | 4.1 | Variable-aperture zoom: read the design f-number at every zoom station from the source and replace the marketed array | todo |
| CANON EF-S 10-18mm f/4.5-5.6 IS STM | `canon/CanonEFS1018mmf4.data.ts` | [4.5, 5.1, 5.6] | 4.64 | Variable-aperture zoom: read the design f-number at every zoom station from the source and replace the marketed array | todo |
| CANON TS-E 50mm f/2.8 L MACRO | `canon/CanonTSE50mmf28L.data.ts` | 2.8 | 2.88 | The header says the stop was calibrated to a value that is not the design stop; reconcile the two from the source | todo |
| MINOLTA AF 35-105mm f/3.5-4.5 New (v2) | `minolta/MinoltaAF35105mmf3545v2.data.ts` | [3.5, 4.2, 4.5] | 3.6 | Variable-aperture zoom: read the design f-number at every zoom station from the source and replace the marketed array | todo |
| NIKON 1 NIKKOR VR 10-30mm f/3.5-5.6 | `nikon/Nikon1Nikkor1030mmf3556.data.ts` | [3.5, 4.35, 5.6] | 3.63 | Variable-aperture zoom: read the design f-number at every zoom station from the source and replace the marketed array | todo |
| NIKON FUWATTO SOFT 90mm f/4.8 | `nikon/NikonFuwattoSoft90mmf48.data.ts` | 4.8 | 4.95 | The file's STO semi-diameter reproduces the marketed f-number; check whether the source lists a stop diameter, then open to the design value | todo |
| NIKON NIKKOR Z 100-400mm f/4.5-5.6 VR S | `nikon/NikonNikkorZ100400f4556.data.ts` | [4.58, 5.76] | 5.76 | Variable-aperture zoom: read the design f-number at every zoom station from the source and replace the marketed array | todo |
| NIKON NIKKOR Z DX 16-50mm f/3.5-6.3 VR | `nikon/NikonZDX1650mmf3563VR.data.ts` | [3.5, 5.3, 6.3] | 3.56 | Variable-aperture zoom: read the design f-number at every zoom station from the source and replace the marketed array | todo |
| NIKON NIKKOR Z DX 18-140mm f/3.5-6.3 VR | `nikon/NikonZDX18140mmf3563VR.data.ts` | [3.5, 5, 6.3] | 3.604 | Variable-aperture zoom: read the design f-number at every zoom station from the source and replace the marketed array | todo |
| OLYMPUS ZUIKO AUTO-MACRO 90mm f/2 | `olympus/OlympusZuikoAutoMacro90mmf2.data.ts` | 2 | 2.06 | The file's STO semi-diameter reproduces the marketed f-number; check whether the source lists a stop diameter, then open to the design value | todo |
| OLYMPUS ZUIKO AUTO-T 85mm f/2 | `olympus/OlympusZuiko85mmf2.data.ts` | 2 | 2.04 | The file's STO semi-diameter reproduces the marketed f-number; check whether the source lists a stop diameter, then open to the design value | todo |
| PENTAX DA 70mm f/2.4 Limited | `pentax/PentaxDA70mmf24Limited.data.ts` | 2.4 | 2.5 | The file's STO semi-diameter reproduces the marketed f-number; check whether the source lists a stop diameter, then open to the design value | todo |
| SAMYANG AF 35-150mm f/2-2.8 FE / L | `samyang/SamyangAF35150mmf228.data.ts` | [2, 2.5, 2.8] | 2.07 | Variable-aperture zoom: read the design f-number at every zoom station from the source and replace the marketed array | todo |
| SONY 70-400mm f/4-5.6 G SSM II | `sony/SonySAL70400mmf456G.data.ts` | [4, 4.5, 5.6] | 4.11 | Variable-aperture zoom: read the design f-number at every zoom station from the source and replace the marketed array | todo |
| SONY E 18-55mm f/3.5-5.6 OSS | `sony/SonyE1855mmf3556.data.ts` | [3.5, 4, 5.6] | 3.74 | Variable-aperture zoom: read the design f-number at every zoom station from the source and replace the marketed array | todo |
| SONY FE 24mm f/2.8 G | `sony/SonyFE24mmf28G.data.ts` | 2.8 | 2.884 | The patent's stop H = 5.769 reproduces f/2.884 by real-ray trace; the file's paraxially adjusted STO sd 5.6105 does not. Restore the listed H and open to 2.884 | todo |
| TAMRON SP 90mm f/2.8 Di MACRO 1:1 VC USD (F004) | `tamron/TamronSP90mmf28Di.data.ts` | 2.8 | 2.89 | The header says the stop was calibrated to a value that is not the design stop; reconcile the two from the source | todo |

Also check, without a row each: 11 files whose `nominalFno` is slower than `apertureDesign` by more than 0.5 %
(three mirror lenses, where the central obstruction separates the two; `PanasonicLumixG8mmf35`, `OlympusMZuiko17mmf18`,
`Pentax645FA120mmf4`, `CanonEF2890mmf456II` and others), where one of the two fields is likely mislabelled.

The test compares only the wide entry of `nominalFno`, and only in files that set `apertureDesign`. These
variable-aperture zooms carry marketed values at one or more stations it does not see, and quote the patent's
station f-numbers in their own header or note; replace each array from the source the same way:
`nikon/Nikon1Nikkor10100mmf4VR`, `nikon/NikonAFPDX1855mmf3556G`, `nikon/NikonAFSDX55300mmf4556G`,
`nikon/NikonAFSDX55200mmf456G`, `nikon/NikonAFSNikkor1835mmf3545GED`, `nikon/NikonAFZoomNikkor2880mmf3356`,
`nikon/NikonAFZoomNikkor2885mmf3545`, `nikon/NikonNikkorZ1228mmf3556PZ`, `nikon/NikonZDX50250mmf4564VR`,
`canon/CanonEFS1855mmf3556IS`, `canon/CanonEFS1022mmf3545`, `canon/CanonEF28105mmf456`,
`canon/CanonPowerShotG1X1560mmf28`, `canon/CanonPowerShotG1XIII1545mmf2856`, `fujifilm/FujifilmGF3570mmf4556`,
`olympus/OlympusMZuiko1260mmf284ED`, `olympus/OlympusMZuiko1442mmf3556II`, `olympus/OlympusZuiko936mmf224`,
`sony/SonyFE2870mmf3556`.

`__tests__/src/lens-data/zoomApertureModel.test.ts` lists the three fixed-iris files whose stated station f-numbers
are not the ones their iris gives; delete a key there when its file is corrected. `nikon/NikonAFSDX55200mmf456G` is
in the list above and its patent is not held locally (Section C); the two Vivitar Series 1 zooms are rim-limited at
tele (Section I).

## Section I — stated axial beam does not pass

Stations whose traced on-axis f-number is more than 3 % from the stated one; the aperture semantics are in
`src/lens-data/LENS_DATA_SPEC.md` (zoom aperture). Regenerate the list at any time (a few seconds):

```bash
npm run audit:aperture -- --markdown
```

1,459 of 1,622 stations are within 3 %. Of the rest, a rim clips the beam at 153 stations on 116 lenses (`rim`);
work the largest differences first. For each row, read whether the limiting semi-diameter is printed in the source or
was inferred from a drawing, then follow
[patent-figure-sd-audit-procedure.md](patent-figure-sd-audit-procedure.md). A printed rim stays: the source's
f-number may be defined on a vignetted beam, and the row is then recorded in [decisions.md](decisions.md). An inferred
rim rises only to the height the stated on-axis ray needs, on the surfaces that clip, and an element the figure draws
with a square rim keeps both faces at one height (the procedure's "clipped stated beam" case;
`npm run audit:aperture -- --raise` lists both values). The stated f-number must be the source's
design value first: rows that are also in Section H wait for that. Notes that state the axial beam clears every rim
are corrected with the row.

The other diagnoses are not rim problems:

- `trace`, six lenses: no rim clips, but the next ray cannot be continued. Five are `STO (noBracket)`: beyond that
  height the ray leaves the preceding surface past the stop plane, which sits inside that surface's sag. The Fujinon
  XF 23mm f/1.4 R is totally reflected at surface 14A, inside its rim (a prescription suspect).
- `failed`, the Vivitar Series 1 70-210mm f/3.5 of Section D: the same stop-plane geometry at every height.
- `iris`, two lenses: an embedded glass stop keeping its authored radius (Zeiss Hologon 15mm f/8), and the Viltrox
  AF 27mm f/1.2, whose f/1.2 marginal ray cannot be traced to the stop, so its iris takes the paraxial radius.

Square rims the rule did not reach, found while working the first rows; each needs a figure read of its own, since
squaring them means moving faces that do not clip:

- Minolta AF 80-200mm f/2.8 APO: the patent draws the second group as one square block, but squaring the facing
  surfaces 9 and 10 would make them cross (103.6 % of the gap), so those two elements keep unequal faces.
- Elements the patent draws square whose two faces already differed before any rim was raised: Nikon AF 80-200mm
  f/2.8 ED (five elements), Fujifilm GF 100-200mm (L41), Nikon AI-S 100-300mm f/5.6 (the two G2 doublets and L43),
  Tamron SP 70-200mm A009 (L15 and the L8+L9 doublet).

Start with these zooms. Each has a station that a wide-end iris would limit, where the stated, wider beam is stopped
first by a rim or, on the two Nikon AI zooms, by the stop-plane geometry above. The Sigma 10-18mm is rim-limited at
every station. The patent audit of the fixed-iris zooms confirmed the rim limit against the printed f-number on
fourteen further lenses ([records/fixed-iris-patent-audit-2026-10.md](records/fixed-iris-patent-audit-2026-10.md)):

| Lens | File | Station: stated, traced, limiter | Status |
|---|---|---|---|
| CANON EF 24-70mm f/2.8 L II USM | `canon/CanonEF2470mmf28LII.data.ts` | 67.88 mm: f/2.91 traces f/3.22 (+10.7 %), rim 18 | todo |
| CANON EF 24-70mm f/2.8 L USM | `canon/CanonEF2470mmf28L.data.ts` | 68.14 mm: f/2.92 traces f/3.06 (+4.7 %), rim 19 | todo |
| CANON EF 28-105mm f/4-5.6 | `canon/CanonEF28105mmf456.data.ts` | 101.35 mm: f/5.6 traces f/5.89 (+5.2 %), rim 14 | todo |
| CANON EF 28-70mm f/3.5-4.5 II | `canon/CanonEF2870mmf3545II.data.ts` | 67.89 mm: f/4.5 traces f/4.85 (+7.8 %), rim 8 | todo |
| FUJIFILM FUJINON GF 32-64mm f/4 R LM WR | `fujifilm/FujifilmGF3264mmf4.data.ts` | 62.24 mm: f/4.12 traces f/4.27 (+3.6 %), rim 13 | todo |
| KONICA ZOOM-HEXANON AR 35-70mm f/3.5 | `konica/KonicaZoomHexanonAR3570mmf35.data.ts` | 50.16 mm: f/3.5 traces f/3.64 (+4.0 %), rim 11; 69.14 mm: f/3.5 traces f/4.35 (+24.3 %), rim 11 | todo |
| MINOLTA AF 28-75mm f/2.8 (D) | `minolta/MinoltaAF2875mmf28D.data.ts` | 72.65 mm: f/2.91 traces f/3.11 (+7.0 %), rim 18 | todo |
| MINOLTA AF ZOOM 35-70mm f/4 | `minolta/MinoltaAF3570mmf4.data.ts` | 68.2 mm: f/4.1 traces f/4.33 (+5.6 %), rim 8 | todo |
| NIKON AF ZOOM-MICRO NIKKOR 70-180mm f/4.5-5.6 D ED | `nikon/NikonAFZoomMicro70180mmf4556D.data.ts` | 194 mm: f/5.6 traces f/5.95 (+6.2 %), rim 20 | todo |
| NIKON AF-S NIKKOR 24-70mm f/2.8 G ED | `nikon/NikonAFS2470mmf28G.data.ts` | 67.7 mm: f/2.91 traces f/3.00 (+3.2 %), rim 17 | todo |
| NIKON AI-S ZOOM-NIKKOR 35-70mm f/3.5 | `nikon/NikonAIZoomNikkor3570mmf35.data.ts` | 68.79 mm: f/3.5 traces f/3.62 (+3.4 %), trace failure at STO (noBracket) | todo |
| NIKON AI ZOOM-NIKKOR 25-50mm f/4 | `nikon/NikonAIZoomNikkor2550mmf4.data.ts` | 48.8 mm: f/4 traces f/4.91 (+22.8 %), trace failure at STO (noBracket) | todo |
| NIKON R-UW AF ZOOM-NIKKOR 20-35mm f/2.8 | `nikon/NikonRUWAFZoomNikkor2035mmf28.data.ts` | 34 mm: f/2.88 traces f/3.21 (+11.3 %), rim 10 | todo |
| OLYMPUS ZUIKO DIGITAL ED 14-35mm f/2.0 SWD | `olympus/OlympusMZuiko1435mmf2ED.data.ts` | 22.08 mm: f/2.04 traces f/2.16 (+5.9 %), rim 30; 34.28 mm: f/2.04 traces f/2.36 (+15.5 %), rim 30 | todo |
| PENTAX HD DA* 11-18mm f/2.8 ED DC AW | `pentax/PentaxD1118mmF28EDDCWR.data.ts` | 17.7 mm: f/2.8 traces f/2.92 (+4.2 %), rim 17 | todo |
| PENTAX HD DA 20-40mm f/2.8-4 ED Limited DC WR | `pentax/HDPentaxDA2040mmF284EDLimitedDCWR.data.ts` | 30 mm: f/2.9 traces f/3.06 (+5.6 %), rim 16 | todo |
| SIGMA 10-18mm f/2.8 DC DN \| Contemporary | `sigma/Sigma1018mmf28DCDN.data.ts` | 10.3 mm: f/2.92 traces f/3.09 (+5.9 %), rim 10; 13.5 mm: f/2.92 traces f/3.35 (+14.6 %), rim 10; 17.5 mm: f/2.92 traces f/3.70 (+26.7 %), rim 10 | todo |
| SONY VARIO-SONNAR T* 24-70mm f/2.8 ZA SSM | `sony/SonyVarioSonnarT2470mmf28ZASSM.data.ts` | 67.95 mm: f/2.9 traces f/3.31 (+14.1 %), rim 17 | todo |
| SONY VARIO-SONNAR T* DT 16-80mm f/3.5-4.5 ZA | `sony/SonyVarioSonnarTDT1680mmf3545ZA.data.ts` | 78 mm: f/4.64 traces f/4.84 (+4.3 %), rim 22 | todo |

## In-progress diagram sweep

The oldest-200 hosted-diagram audit (patent and live-view review of each lens, semi-diameters included) is paused at
lens 40 of 200. Its frozen queue, resume instructions and open follow-ups live in
[records/lens-shape-audit-first-200-2026-09-08.md](records/lens-shape-audit-first-200-2026-09-08.md); resume there,
not here. When that sweep reaches a lens that also sits in Sections A–C, work it from this queue's row and then delete
the row.
