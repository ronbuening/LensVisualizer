# Semi-Diameter Audit Queue

Open work for the semi-diameter / cross-section audit. Follow
[patent-figure-sd-audit-procedure.md](patent-figure-sd-audit-procedure.md) for each row. The queue holds only open
rows: when a lens is finished, log the evidence in its `*.audit.md` sidecar and delete the row here. The first pass
that seeded Sections B and C is written up in
[records/patent-figure-sd-audit-2026-07.md](records/patent-figure-sd-audit-2026-07.md).

Take **Section A top-down** — those rows have physics behind them. Section B is figure-evidence only and is lower
value per hour. Section D holds traced field-coverage shortfalls that need a source, a decision or engine support
rather than a larger rim.

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
| OLYMPUS F.ZUIKO 35mm f/2.8 (Olympus XA) | `olympus/OlympusXAZuiko35mmf28.data.ts` | US 4,235,521 | yes | 11 (7.40 < 8.05) | 0.65 mm | no chief ray past 25.7° with the inferred stop (Section D) | todo |
| SAMSUNG 4.3mm f/1.5 (Galaxy S9) | `samsung/SamsungGalaxyS9MainWideCameraLens.data.ts` | US 2021/0149156 A1 | yes | 12A (1.76 < 1.83), 14A (2.00 < 2.51) | 0.51 mm | image height peaks at 2.74 mm (Section D) | blocked (needs higher-precision S13/S14 coefficients) |
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

## Section D — traced field coverage below 90%

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
| OLYMPUS OM ZUIKO 16mm f/3.5 Fisheye | `olympus/OlympusZuiko16mmf35.data.ts` | — | 43% | No `projection`: the 180° diagonal fisheye (US 3,850,509 col. 1; FIGS. 2B–2D at 90°) is traced as rectilinear and the solver gives up past ~52°. Declare `fisheye-equisolid` (fullFieldDeg 180, maxTraceFieldDeg 90, imageCircleMm ≈43.0 from the traced 21.52 mm at 90°), then raise the front rims to the 90° chief ray (1 20.9, 3 10.7, 4 9.7, 5 9.0, 6 7.0, 7 5.9 mm; 2 needs 11.2 mm on R 11.79, past the default rim-slope cap). FIG. 1 draws L1 ≈3.8× L4 (data 1.45×). | todo |
| NIKON Gyogyotto 20mm f/8 | `nikon/NikonGyogyotto20mmf8.data.ts` | — | 67% | No `projection` for a "so-called fisheye" (US 5,949,588 Table 8; 2ω 164°, FIG. 16A Y = 22.0 mm, distortion referenced to 2f·sin(θ/2)). Declare `fisheye-equisolid` (fullFieldDeg 164, imageCircleMm 44.0), then rims at the 78.46° corner: 1 ≥ 28.85, 2 ≥ 18.13 mm. | todo |
| KINOPTIK SUPER-TEGEA 1.9mm f/1.9 FISHEYE | `kinoptik/KinoptikSuperTegea19mmf19Fisheye.data.ts` | — | 85% | Its traced mapping is close to stereographic (US 3,037,426 Ex. 3; 197°, 8.7 mm circle), which no projection kind covers, so it is traced as rectilinear and no chief ray reaches the stop centre past ~81°. The rims are not the limit. | blocked (needs a stereographic projection kind) |
| OLYMPUS F.ZUIKO 35mm f/2.8 (Olympus XA) | `olympus/OlympusXAZuiko35mmf28.data.ts` | — | 74% | The inferred stop sits mid-gap, 2.898 mm behind r6; FIG. 2 (US 4,235,521) draws it ≈0.6 mm behind r6. With the data's stop no chief ray exists past ~26°: L1's rear and L2's front meet at h ≈ 5.93 mm. Move the stop per FIG. 2 (surface 7 d ≈ 0.60, STO d ≈ 5.20), then raise 10 ≥ 7.13 and 11 ≥ 7.79 mm (also closes its Section A row). | todo |
| NIKON ZOOM-NIKKOR AUTO 80-200mm f/4.5 | `nikon/NikonAutoZoomNikkor80200mmf45.data.ts` | 80 / 126.4 / 200 mm | 83 / 81 / 70% | US 3,615,125 prints no stop; the inferred stop mid-gap in D18 blocks every corner (at 200 mm the chief ray would cross L1 past its ≈30.3 mm knife edge; at 80 mm the 8/9 gap closes at ≈14.2 mm). A stop 1–3 mm behind r18 passes all three corners within the current rims. | todo (needs a measured diaphragm position) |
| NIKON NIKKOR 800mm f/8 ED | `nikon/NikonNikkor800mmf8ED.data.ts` | — | 62% | Tagged `6x6` for the patent's 6° field (US 3,774,991 Ex. III). With the inferred focusing-unit stop, the 6×6 corner needs front-group chief-ray heights of 86–88 mm, past L1's ≈67 mm knife edge (ceiling ≈78%). On 24×36 the edge already clears the corner. | todo (format or stop decision) |
| Nikon AI Zoom-Nikkor 35–105mm f/3.5–4.5S | `nikon/NikonAIZoomNikkor35105mmf3545.data.ts` | Wide 36.2 mm | 82% | d9 = 1.0 as printed (US 4,699,475 Table 7) thins L5 to a knife edge at h ≈ 6.62 mm, and no chief ray exists past ≈30.3°. d9 ≈ 3.5 fits better: focal lengths 36.33 / 60.32 / 103.72 mm against the printed 36.2 / 60 / 103 (1.0 gives 37.39 / 62.15 / 106.58), FIG. 14 draws L5 as thick as the 3.5 mm L8, and Embodiments 4–6 use 3.5. With 3.5 the corner needs 9 ≥ 7.71 and 10 ≥ 7.05 mm. | todo (prescription decision) |
| PENTAX HD D FA645 35mm f/3.5 AL [IF] | `pentax/PentaxDFA64535mmf35AL.data.ts` | — | 70% | The declared 44.8° matches the patent's W, but its chief ray lands at 24.28 mm (−32% distortion; Fig. 14D shows −3% at y = 34.85). Table 4's surface-5A asphere (K +1.00, all coefficients positive; US 2001/0007512 A1 PDF p. 14) looks sign-damaged: K −1.00 with A6/A8/A10 negative traces to 34.82 mm. | blocked (confirm against JP Hei 11-354772) |
| SAMSUNG 4.3mm f/1.5 (Galaxy S9) | `samsung/SamsungGalaxyS9MainWideCameraLens.data.ts` | — | 74% | 13A/14A are cut to 2.0 mm because the seven-decimal Table 4 coefficients diverge beyond it; with no apertures at all the image height peaks at 2.74 mm (patent Y 3.50 mm, US 2021/0149156 A1 FIG. 2). Restoring the published 2.720/2.880 radii cannot help. | blocked (needs higher-precision S13/S14 coefficients) |
| VIVITAR SERIES 1 35-85mm f/2.8 VMC | `vivitar/VivitarSeries13585mmf28.data.ts` | Wide 36 mm | 75% | No chief ray exists past ~30° with any rims: it would cross L4 above its ≈16.07 mm zero-edge height, and S9 is capped by the L5/L6 contact at the tele gap. Table I computes to f 38.46–89.08 mm against the text's 36–83 mm (US 3,975,089), a possible Table I error. | blocked (needs a corrected Table I) |
| OLYMPUS ZUIKO AUTO-W 18mm f/3.5 | `olympus/OlympusZuikoAutoW18mmf35.data.ts` | — | 73% | US 4,029,397 is not in `patents/`. With the inferred mid-d10 stop, surfaces 16 and 17 meet at h ≈ 5.66 mm and no chief ray exists past 42.3° (declared 50°). Check the FIG. 2 stop and r16/r17/d16 (and the documented r13 sign conflict) before touching rims. | blocked (patent PDF missing) |
| SAMYANG AF 35-150mm f/2-2.8 FE / L | `samyang/SamyangAF35150mmf228.data.ts` | 35 mm | 81% | US 2025/0231383 A1 is not in `patents/`; its Google Patents text gives ω 30.9° at 35.989 mm (f·tanω 21.54 mm). Corner minimums: 6A ≥ 18.46, 7 ≥ 18.33, 8 ≥ 15.61, 40A ≥ 13.83, 41A ≥ 15.41 mm. | blocked (patent PDF missing) |
| NIKON AF-P DX NIKKOR 18-55mm f/3.5-5.6 G VR | `nikon/NikonAFPDX1855mmf3556G.data.ts` | 18.5 mm | 86% | US 10,690,896 B2 is not in `patents/`; analysis.md gives Y 14.25 mm. Only surface 1 clips: 15.3 → ≥ 17.68 mm at the corner. | blocked (patent PDF missing) |
| MINOLTA AF Zoom 35-70mm f/4 | `minolta/MinoltaAF3570mmf4.data.ts` | Wide 36 mm | 90% (89.6) | US 4,560,253 is not in `patents/`; analysis.md's y' = 21.6 mm is unverified. Corner minimums: 3 ≥ 15.26, 4 ≥ 14.82, 4A ≥ 14.76 mm. | blocked (patent PDF missing) |

### Not covered by the traced check

`npm run audit:field-coverage` skips fisheye projections and folded paths, whose field is declared rather than traced,
hidden lenses, and files with no usable `imageFormat` (the same backfill as Section A).

## In-progress diagram sweep

The oldest-200 hosted-diagram audit (patent and live-view review of each lens, semi-diameters included) is paused at
lens 40 of 200. Its frozen queue, resume instructions and open follow-ups live in
[records/lens-shape-audit-first-200-2026-09-08.md](records/lens-shape-audit-first-200-2026-09-08.md); resume there,
not here. When that sweep reaches a lens that also sits in Sections A–C, work it from this queue's row and then delete
the row.
